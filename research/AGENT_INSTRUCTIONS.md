# Weekly research run

Instructions for the scheduled research agent. A human reviews every run as a pull request before anything is published.

Read `docs/RESEARCH_METHOD.md` first and follow it. Today's date is the date the run starts; use it for `observedAt` and `reviewedAt`.

## Each run does three things

1. **Discover 2–3 new ideas.** Look for observed problems, not solutions: repeated complaints from people in a specific trade or role, job posts and freelance listings paying for manual work, complaints from paying users of existing tools, and costly spreadsheet or phone-based workarounds. Favor problems a solo software builder could serve. Skip anything already in `dist/ideas.json` (check ids, titles, and buyers).
2. **Research each one** into a full report (schema below). Look hard for counterevidence: incumbents, free alternatives, reasons buyers won't switch. An honest Pass is a good result; do not inflate verdicts to make the run look productive.
3. **Refresh stale reports.** For up to 2 reports whose `reviewedAt` is more than 60 days old, recheck the sources, prices, and competitors. Update entries, the verdict, and `reviewedAt`. If a source is dead, drop it or say so in `limitations`.

## Evidence rules (non-negotiable)

- Every evidence entry must come from a page you fetched or a search result you actually saw. Never invent URLs, quotes, prices, search volumes, market sizes, or customer counts.
- If a page is blocked (403) and you rely on search snippets, say so in that entry's `limitations`. Do not put snippet-only figures in report prose without labeling them unverified.
- https URLs only. Distinguish customer voices from seller marketing. A competitor's price is an offer, not proof of buyers; a job post shows intent to spend, not a hire.
- Report `level` must not exceed the strongest entry `level`. Use entry level `context` for landscape facts that are not demand evidence.
- Founder fit is unknown: write `fit` as unconfirmed assumptions.

## Report schema

Add each new report to `dist/ideas.json` as an object with these fields:

`id` (kebab-case, unique), `name`, `title`, `category`, `model` (B2B or B2C), `type`, `summary`, `buyer`, `problem`, `solution`, `revenue` (labeled hypothesis), `gap`, `timing`, `fit`, `risks` (list), `pilot` (list, with success and stop criteria), `assumptions` (list), `level` (concept | attention | repeated-pain | costly-workaround | existing-spend | paid-pilot | retention), `verdict` (Watch | Interview | Pilot | Build | Pass), `verdictRationale`, `nextStep`, `evidence` ("Researched report"), `status` (short honest demand status), `sourceNote`, `reviewedAt`, `sources` (list of `[label, url]`, one per evidence URL), and `evidenceLog`: a list of entries with `observation`, `label`, `url`, `sourceType` (customer | community | job | vendor | review | government | research | news), `publishedAt` (YYYY, YYYY-MM, YYYY-MM-DD, or null), `observedAt`, `supports`, `level`, `limitations`.

Aim for 6–10 evidence entries per report, at least 2 from customer, community, or job sources when they exist.

## Finish

1. Run `node scripts/build-data.mjs` and `node --test tests/build-data.test.mjs`. Both must pass; fix the report, never the validator.
2. Create a branch `research/YYYY-MM-DD`, commit `dist/ideas.json` and `dist/data.js`, push, and open a pull request against `main` titled `Research: YYYY-MM-DD`.
3. In the PR description, list each new or refreshed report with its verdict, level, a one-line summary, and any sources you could not verify.
4. Never push to `main` directly and never merge your own pull request.

If nothing worth reporting turns up, open no PR and say so in your final message.
