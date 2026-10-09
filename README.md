# Startup Ideas — Evidence-backed business ideas
A personal, subscription-free idea discovery project inspired by the useful part of IdeaBrowser: finding problems worth solving and understanding the demand behind them.
The main product is a stream of useful, researched ideas. The website is a way to browse that research.
## Who it is for
A solo builder looking for software or AI businesses, other businesses with strong demand evidence, and opportunities that fit their skills, interests, and access to customers.
## What makes an idea worth investigating
Every researched opportunity should explain:
- The specific customer and recurring problem.
- Evidence of existing spending or costly workarounds.
- Current competitors, prices, and the underserved customer segment.
- A realistic path to the first ten customers.
- What one person could deliver first and what it might cost to operate.
- The strongest reasons the idea could fail.
- A cheap experiment that tests willingness to pay.
Keep evidence strength separate from founder fit. An AI score is not a probability of business success. Online complaints are leads; payment, repeat use, and renewal provide stronger validation.
## Current status
This repository contains a static browsing app, a documented research method, and a structured evidence store. It is a place to browse and read; there is no email or notification feature. It does **not** include an automated demand-research engine or a continuously refreshed feed; reports are researched and reviewed by hand.
The published site: <https://christopher895.github.io/idea-browser/>. Pushing changes under `dist/` to `main` republishes it.
The app includes search; industry, business-model, evidence-level, and verdict filters; full reports with an evidence log, verdict, and next step; a saved shortlist; local notes; and JSON export and import. Researched reports carry an `evidenceLog` in which every entry has a source URL, source type, dates, the claim it supports, and its limitations. Remaining concept briefs are labeled as unvalidated hypotheses.

A scheduled research agent runs weekly. It follows `research/AGENT_INSTRUCTIONS.md` to add 2–3 new reports and refresh stale ones, then opens a pull request. Nothing is published until that pull request is merged. Reports reviewed in the last seven days appear under **New this week**.
Bookmarks and notes are stored in the browser on the current origin. They do not sync across devices. Export a JSON backup and import it on another browser; import merges the shortlist and appends differing notes rather than overwriting them.
## Run locally
No package installation or API key is required. With Python 3 installed:
```sh
python3 -m http.server 8000 --directory dist
```
Open <http://localhost:8000>. The interface uses Google Fonts when available and falls back to local fonts.
To edit the collection, update `dist/ideas.json`, then run `node scripts/build-data.mjs`. This validates the collection and generates `dist/data.js` for the browser. The build fails if an evidence entry lacks a listed https source, a past `observedAt` date, a source type, or stated limitations; if a report claims a stronger evidence level than its log supports; or if a researched report lacks a review date, verdict, rationale, or next step.
Run the checks:
```sh
node --test tests/build-data.test.mjs
```
Optional JavaScript syntax checks, with Node.js installed:
```sh
node --check dist/app.js
node --check dist/data.js
```
## Repository guide
| Path | Purpose |
| --- | --- |
| `docs/RESEARCH_METHOD.md` | Discovery sources, evidence standards, evaluation, and validation |
| `docs/ROADMAP.md` | Research-first implementation sequence |
| `.github/workflows/pages.yml` | Validates the collection and publishes `dist/` to GitHub Pages |
| `research/AGENT_INSTRUCTIONS.md` | What the weekly research agent does and the evidence rules it follows |
| `research/IDEA_TEMPLATE.md` | Template for a source-backed opportunity report |
| `dist/` | Early browser prototype and starter content |
| `PRODUCT.md` | Product intent and constraints |
| `DESIGN.md` | Existing prototype design notes |
## Cost and content principles
Use public evidence and manual research first. The static prototype has no paid API dependency. Any future automation, hosting, or model use needs an explicit cost budget; subscription-free does not imply that all possible infrastructure is free.
Create original research, preserve source links and dates, and label assumptions. Do not copy paid reports or fabricate search volumes, market sizes, revenue estimates, customer quotes, or validation results.
See the [research method](docs/RESEARCH_METHOD.md) for the public sources behind this approach.
