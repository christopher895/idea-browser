# Personal email digest

## Status

Implemented: HTML/plain-text digest rendering, fresh reviewed-idea selection, a preview page, SMTP delivery, and a GitHub Actions workflow with a durable delivery ledger.

Not yet activated: live delivery, recipient and sender configuration, the final cadence, and unattended research collection. The scheduler is gated by `DIGEST_ENABLED`; it does nothing until this variable is explicitly set to `true`.

The initial candidate cadence is Monday at 13:17 UTC (9:17 a.m. New York during daylight saving time; 8:17 a.m. during standard time). Change the workflow after the user chooses a cadence. GitHub scheduled jobs may be delayed; this is not an exact-time delivery guarantee.

## Preview without sending

```sh
node scripts/build-data.mjs
python3 scripts/digest.py
```

Open `.digest-preview/digest.html`, or visit `digest.html` on the running app. The browser preview shows eligible content, not delivery history. It does not imply a subscription has been activated.

## Connect delivery

Configure the repository under Settings → Secrets and variables → Actions. Never put credentials or the recipient address in public frontend files.

Repository secrets:

| Secret | Value |
| --- | --- |
| `SMTP_HOST` | Your sender's SMTP server supporting implicit TLS |
| `SMTP_USER` | SMTP account username |
| `SMTP_PASSWORD` | SMTP-specific credential from the provider |
| `DIGEST_FROM` | Authorized sender email address |
| `DIGEST_TO` | The user's chosen recipient email address |

The implementation uses authenticated SMTP over TLS on port 465. A provider requiring STARTTLS on port 587 needs a transport change first. Use provider documentation to obtain an app-specific password or SMTP credential; do not commit or paste your normal account password into chat.

Repository variables:

| Variable | Value |
| --- | --- |
| `SITE_URL` | The verified HTTPS URL of the deployed app |
| `DIGEST_ENABLED` | `true` only after sender, recipient, cadence, and deployment are ready |

Run **Personal idea digest** manually from the Actions tab, then verify actual receipt in the inbox. Update the app's setup status only after that verification. Pause delivery by setting `DIGEST_ENABLED` to `false`.

No paid email API is required by this code. Sender-provider limits and GitHub Actions account allowances still apply.

## Add reviewed ideas

Edit `dist/ideas.json`, the canonical collection, and run `node scripts/build-data.mjs` to regenerate the browser data. A report must include source links, an evidence log, a review date (`reviewedAt`, ISO date), and explicit editorial approval (`digestReady: true`) to qualify. The sender skips future-dated or more than 30-day-old reviews and sends at most five ideas per run.

The build (`node scripts/build-data.mjs`) also requires every digest-ready report to have an evidence log, a verdict with its rationale, and a next step. The email shows the verdict and uses the next step as the first test.

As of 2026-10-08, Sentrik plus four researched reports (permit tracking, change orders, maintenance evidence, post-award grant reporting) are digest-ready. Reports with a Pass verdict stay in the browser but are not emailed. Approval is not a claim of proven demand.

Adding a report does not automatically deploy the static app. Publish the matching collection before sending a digest linking to it.

## Retry and failure behavior

The workflow reserves idea IDs in `.automation/digest-state.json` and commits and pushes that ledger before contacting SMTP. It records successful SMTP acceptance in a second commit. The ledger contains IDs and timestamps, not email addresses or credentials.

Uncertain deliveries remain reserved and are skipped on later runs, avoiding automatic duplicates. If SMTP fails, verify delivery with the sender before manually removing the affected reservations to retry. This favors avoiding duplicates over automatic retries. SMTP acceptance does not prove inbox delivery.

The workflow requires permission to push ledger commits to `main`. If branch protection blocks the reservation commit, sending stops. Do not bypass branch protections; adapt ledger storage if the project later requires protected branches.

## Research automation remains separate

The email workflow sends approved reports already in the repository. It does not scrape the web, invent new ideas, or perform independent validation. A future research job must collect sources, deduplicate observations, produce reviewable reports, and publish them before digest delivery.

References: [GitHub workflow syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax), [Python SMTP documentation](https://docs.python.org/3/library/smtplib.html).
