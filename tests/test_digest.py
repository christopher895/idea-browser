import importlib.util
from datetime import date
from pathlib import Path
import unittest

spec = importlib.util.spec_from_file_location('digest', Path(__file__).parents[1] / 'scripts/digest.py')
digest = importlib.util.module_from_spec(spec)
spec.loader.exec_module(digest)


class DigestTests(unittest.TestCase):
    def idea(self, **changes):
        return dict(id='one', digestReady=True, reviewedAt='2026-10-07', sources=[['Source', 'https://example.com']], **changes)

    def test_requires_review_sources_and_freshness(self):
        base = self.idea()
        variants = [dict(base, digestReady=False), dict(base, sources=[]), dict(base, reviewedAt='bad'),
                    dict(base, reviewedAt='2025-01-01'), dict(base, reviewedAt='2027-01-01'),
                    dict(base, sources=[['Unsafe', 'javascript:alert(1)']])]
        self.assertEqual(digest.eligible(variants, {}, date(2026, 10, 7)), [])
        self.assertEqual(len(digest.eligible([base], {}, date(2026, 10, 7))), 1)

    def test_sent_and_uncertain_deliveries_are_not_resent(self):
        for status in ['sent', 'reserved']:
            self.assertEqual(digest.eligible([self.idea()], {'one': {'status': status}}, date(2026, 10, 7)), [])

    def test_email_escapes_content_and_preserves_evidence(self):
        idea = self.idea(title='<script>alert(1)</script>', summary='A & B', evidence='Sources included',
                         status='Demand unvalidated', buyer='A buyer', pilot=['Test payment'], risks=['No demand'])
        text, body = digest.render([idea], 'https://example.org')
        self.assertNotIn('<script>', body)
        self.assertIn('&lt;script&gt;', body)
        self.assertIn('Demand unvalidated', text)
        self.assertIn('https://example.org/#one', text)
        self.assertIn('Verdict: Not yet assessed', text)

    def test_email_prefers_verdict_and_next_step(self):
        idea = self.idea(title='T', summary='S', evidence='Researched report', status='Untested', buyer='B',
                         pilot=['Generic pilot'], risks=['R'], verdict='Interview', verdictRationale='Pain is repeated',
                         nextStep='Call three contractors')
        text, body = digest.render([idea], 'https://example.org')
        self.assertIn('Verdict: Interview — Pain is repeated', text)
        self.assertIn('First test: Call three contractors', text)
        self.assertIn('Call three contractors', body)


if __name__ == '__main__':
    unittest.main()
