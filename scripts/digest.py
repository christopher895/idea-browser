"""Personal idea digest. Preview by default; explicit reserve/send stages for automation."""
import argparse
from datetime import date, datetime, timezone
from email.message import EmailMessage
import hashlib
import html
import json
import os
from pathlib import Path
import smtplib
import ssl
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent


def eligible(ideas, state, today=None):
    today = today or date.today()
    chosen = []
    for idea in ideas:
        if idea.get('digestReady') is not True or idea['id'] in state:
            continue
        try:
            age = (today - date.fromisoformat(idea.get('reviewedAt', ''))).days
        except ValueError:
            continue
        sources = idea.get('sources', [])
        if not 0 <= age <= 30 or not sources:
            continue
        if any(not isinstance(s, list) or len(s) != 2 or not s[0] or not str(s[1]).startswith('https://') for s in sources):
            continue
        chosen.append(idea)
    return sorted(chosen, key=lambda i: i['reviewedAt'], reverse=True)[:5]


def render(ideas, site_url):
    intro = 'New ideas to investigate. Evidence and assumptions are included; these are not guarantees of demand.'
    text = ['Fieldnotes — new ideas', intro, '']
    sections = []
    for idea in ideas:
        link = f"{site_url.rstrip('/')}/#{idea['id']}"
        verdict = f"{idea['verdict']} — {idea['verdictRationale']}" if idea.get('verdict') else 'Not yet assessed'
        first_test = idea.get('nextStep') or idea['pilot'][0]
        text.extend([idea['title'], idea['summary'], f"Evidence: {idea['evidence']} — {idea['status']}",
                     f"Verdict: {verdict}", f"Buyer: {idea['buyer']}", f"First test: {first_test}",
                     f"Main risk: {idea['risks'][0]}", f'Read the report: {link}'])
        text.extend(f'{label}: {url}' for label, url in idea['sources'])
        text.append('')
        e = html.escape
        sources = ''.join(f'<li><a href="{e(url, quote=True)}">{e(label)}</a></li>' for label, url in idea['sources'])
        sections.append(f'<section style="border-top:1px solid #d9dcd1;padding:24px 0"><h2>{e(idea["title"])}</h2>'
                        f'<p>{e(idea["summary"])}</p><p><strong>Evidence:</strong> {e(idea["evidence"])} — {e(idea["status"])}</p>'
                        f'<p><strong>Verdict:</strong> {e(verdict)}</p>'
                        f'<p><strong>Buyer:</strong> {e(idea["buyer"])}</p><p><strong>First test:</strong> {e(first_test)}</p>'
                        f'<p><strong>Main risk:</strong> {e(idea["risks"][0])}</p>'
                        f'<p><a href="{e(link, quote=True)}">Read the full report</a></p><ul>{sources}</ul></section>')
    footer = 'You requested this personal digest. Pause it by setting DIGEST_ENABLED to false in your repository Actions variables.'
    text.append(footer)
    body = '<!doctype html><html lang="en"><meta charset="utf-8"><title>Fieldnotes digest</title><body style="background:#f6f5ef;color:#242922;font:16px/1.6 Arial,sans-serif"><main style="max-width:620px;margin:auto;padding:32px"><h1>Fieldnotes</h1><p>' + html.escape(intro) + '</p>' + ''.join(sections) + '<p style="font-size:12px">' + html.escape(footer) + '</p></main></body></html>'
    return '\n'.join(text), body


def save(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    temp = path.with_suffix('.tmp')
    temp.write_text(json.dumps(value, indent=2) + '\n')
    temp.replace(path)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--mode', choices=['preview', 'reserve', 'send'], default='preview')
    parser.add_argument('--state', type=Path, default=ROOT / '.automation/digest-state.json')
    parser.add_argument('--output', type=Path, default=ROOT / '.digest-preview')
    args = parser.parse_args()
    ideas = json.loads((ROOT / 'dist/ideas.json').read_text())
    state = json.loads(args.state.read_text()) if args.state.exists() else {}
    batch = os.environ.get('DIGEST_BATCH_ID', '')
    site_url = os.environ.get('SITE_URL', 'http://localhost:8000')
    if args.mode != 'preview':
        if not batch:
            raise ValueError('DIGEST_BATCH_ID is required')
        parsed = urlparse(site_url)
        if parsed.scheme != 'https' or not parsed.hostname or parsed.username or parsed.password:
            raise ValueError('Set SITE_URL to the published HTTPS app URL before sending')
        for name in ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASSWORD', 'DIGEST_FROM', 'DIGEST_TO']:
            if not os.environ.get(name):
                raise ValueError(f'Set the {name} repository secret before sending')
    if args.mode == 'send':
        selected = [i for i in ideas if state.get(i['id'], {}).get('batch') == batch and state[i['id']]['status'] == 'reserved']
    else:
        selected = eligible(ideas, state)
    if not selected:
        print('No new reviewed ideas qualify. No email sent.')
        return
    text, body = render(selected, site_url)
    if args.mode == 'preview':
        args.output.mkdir(parents=True, exist_ok=True)
        (args.output / 'digest.html').write_text(body)
        (args.output / 'digest.txt').write_text(text)
        print(f'Previewed {len(selected)} ideas in {args.output}. No email sent.')
    elif args.mode == 'reserve':
        for idea in selected:
            state[idea['id']] = {'batch': batch, 'status': 'reserved', 'reservedAt': datetime.now(timezone.utc).isoformat()}
        save(args.state, state)
        print(f'Reserved {len(selected)} ideas. Persist this ledger before delivery.')
    else:
        message = EmailMessage()
        message['Subject'] = f'Fieldnotes: {len(selected)} new idea' + ('s' if len(selected) != 1 else '') + ' to investigate'
        message['From'] = os.environ['DIGEST_FROM']
        message['To'] = os.environ['DIGEST_TO']
        message['Message-ID'] = f'<{hashlib.sha256(batch.encode()).hexdigest()}@fieldnotes.local>'
        message.set_content(text)
        message.add_alternative(body, subtype='html')
        with smtplib.SMTP_SSL(os.environ['SMTP_HOST'], int(os.environ.get('SMTP_PORT', '465')), context=ssl.create_default_context(), timeout=30) as client:
            client.login(os.environ['SMTP_USER'], os.environ['SMTP_PASSWORD'])
            refused = client.send_message(message)
            if refused:
                raise RuntimeError('Recipient refused; inspect delivery before retrying')
        for idea in selected:
            state[idea['id']]['status'] = 'sent'
            state[idea['id']]['sentAt'] = datetime.now(timezone.utc).isoformat()
        save(args.state, state)
        print(f'Mail server accepted {len(selected)} ideas. Inbox delivery still needs verification.')


if __name__ == '__main__':
    main()
