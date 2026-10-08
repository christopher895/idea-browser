# Research method

## What we know about IdeaBrowser

Greg Isenberg publicly describes IdeaBrowser as scanning Facebook groups, subreddits, and Google Trends. His broader process includes software reviews, recurring freelance work, manual workflows, and emerging professional needs. He also describes using AI agents and humans.

These are public descriptions, not a verified specification of IdeaBrowser's implementation. Its exact scoring formula, data providers, and predictive accuracy have not been verified. This project uses its own transparent research method.

Sources consulted during the October 2026 conversation:

- [Founder: Find winning startup ideas from AI and data](https://www.gregisenberg.com/blog/find-winning-startup-ideas-from-ai-and-data)
- [Founder: IdeaBrowser launch announcement](https://www.linkedin.com/posts/gisenberg_im-launching-a-new-startup-called-ideabrowsercom-activity-7331731471465914368-gQR3)
- [Product Hunt product description and founder discussion](https://www.producthunt.com/products/ideabrowser-com)
- [Google: FAQ about Google Trends data](https://support.google.com/trends/answer/4365533?hl=en)

## Discovery

Search for observed problems before generating solutions:

1. Repeated requests for a tool in a specific profession or community.
2. Repeated complaints from paying users of existing products.
3. Freelance jobs and services that demonstrate a recurring budget.
4. Expensive manual work, spreadsheet processes, and repeated handoffs between tools.
5. Problems the builder understands and customers the builder can realistically reach.

For each signal, retain its URL, publication date when available, observation date, customer segment, and a concise faithful summary. Distinguish customer reports from seller marketing. Count duplicate posts and syndicated articles as one underlying signal. Never treat missing evidence as evidence of absence.

Use public or explicitly authorized sources. Respect source access restrictions. Keep personal details out of published reports when unnecessary.

## Evidence strength

| Level | Evidence | Interpretation |
| --- | --- | --- |
| Attention | Views, upvotes, keyword interest | A subject attracts attention; buying intent is unknown |
| Repeated pain | Independent people report the same problem | The problem merits investigation |
| Costly workaround | Time, manual steps, or missed revenue | The problem has a measurable cost |
| Existing spend | Paid tools, employees, or service providers | A budget exists for an adjacent solution |
| Paid pilot | A customer pays for this proposed offer | Initial demand for the offer |
| Retention | Continued use and renewal | Evidence of lasting value |

These levels are a decision aid, not statistical probabilities. A posted job is evidence of intent to spend, not proof that the work was purchased. A competitor's price is an offer, not proof of customers or revenue.

## Research each candidate

- **Pain:** What happens, how often, and what did the customer do last time?
- **Buyer:** Who feels the problem, who approves payment, and are they the same person?
- **Budget:** What is spent today? What evidence supports the amount?
- **Alternatives:** Include software, services, internal labor, spreadsheets, and doing nothing.
- **Gap:** Identify a specific underserved segment or workflow; search existing documentation before claiming a missing capability.
- **Distribution:** Name a plausible route to the first ten buyers, including access and acquisition effort.
- **Feasibility:** Estimate implementation, integrations, ongoing support, and operational burden.
- **Economics:** Model revenue minus variable delivery costs using labeled assumptions and realistic ranges.
- **Founder fit:** Assess skills, interests, available time, customer access, and capital separately from demand.
- **Counterevidence:** Actively seek reasons customers would not switch or pay.

## Handling search and market numbers

Google Trends normalizes relative interest to a 0–100 scale. It does not supply absolute monthly search volume or buyer counts. Preserve geography, time range, and exact term or topic.

Any monthly keyword volume must retain its provider, date, geography, and exact keyword. Broad topic interest cannot stand in for demand for a particular product. Market size and revenue potential remain unknown unless a defensible source or clearly labeled bottom-up model exists.

## Verdicts

- **Watch:** Interesting signal, insufficient corroboration.
- **Interview:** Repeated problem and a plausible buyer; commercial assumptions remain open.
- **Pilot:** Evidence supports testing a specific offer with reachable customers.
- **Build:** A bounded implementation is justified by actual customer commitments or behavior.
- **Pass:** Evidence or practical constraints make this unattractive for the builder now.

Every verdict includes its rationale, confidence limits, and what evidence would change it. Do not output decimal opportunity scores that imply an unsupported level of precision.

## Customer validation

Ask about recent behavior: the last incident, its cost, attempted solutions, and the purchasing process. Then test a concrete offer through a paid pilot or other meaningful commitment. Choose success and stop criteria before running the test.

Payment validates an initial offer, not retention or profitable scale. Keep updating the assessment after delivery, repeat use, support costs, and renewal decisions.

## Refreshing research

Record when every report was reviewed. Recheck prices, product capabilities, and important demand claims before promoting an old idea. Mark unavailable sources and stale evidence explicitly. Do not describe a feed as live until a functioning collection and refresh process exists.
