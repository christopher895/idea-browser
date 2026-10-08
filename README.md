# Fieldnotes — Evidence-backed business ideas

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

This repository contains a static browsing prototype and a documented research method. It does **not** yet include an automated demand-research engine or a continuously refreshed feed.

The prototype includes search, industry and business-model filters, full idea briefs, a saved shortlist, local notes, and JSON export. Its ten starter briefs are primarily unvalidated concepts. Sentrik includes competitor sources, which establish existing capabilities rather than demand for the proposed business.

Bookmarks and notes are stored in the browser on the current origin. They do not sync across devices. JSON export provides a backup; import is not implemented.

## Run locally

No package installation or API key is required. With Python 3 installed:

```sh
python3 -m http.server 8000 --directory dist
```

Open <http://localhost:8000>. The interface uses Google Fonts when available and falls back to local fonts.

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
| `research/IDEA_TEMPLATE.md` | Template for a source-backed opportunity report |
| `dist/` | Early browser prototype and starter content |
| `PRODUCT.md` | Product intent and constraints |
| `DESIGN.md` | Existing prototype design notes |

## Cost and content principles

Use public evidence and manual research first. The static prototype has no paid API dependency. Any future automation, hosting, or model use needs an explicit cost budget; subscription-free does not imply that all possible infrastructure is free.

Create original research, preserve source links and dates, and label assumptions. Do not copy paid reports or fabricate search volumes, market sizes, revenue estimates, customer quotes, or validation results.

See the [research method](docs/RESEARCH_METHOD.md) for the public sources behind this approach.
