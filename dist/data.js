// Generated from ideas.json by scripts/build-data.mjs.
window.IDEAS = [
  {
    "id": "sentrik",
    "name": "Sentrik",
    "title": "An overnight exception desk for robot fleets",
    "category": "Robotics",
    "model": "B2B",
    "type": "Managed service",
    "summary": "Keep commercial robots moving when autonomy stalls, without making the engineering team carry the pager.",
    "buyer": "Small indoor robot vendors with 20–200 deployed robots and an overnight support burden.",
    "problem": "A short autonomy failure can produce a long operational interruption when nobody is available to recover the robot. The buyer needs dependable exception handling, but may not have enough deployments to justify an internal round-the-clock team.",
    "solution": "Operate a remote exception desk using approved vendor control tools. Diagnose incidents, perform permitted resets or rerouting, verify recovery, and escalate physical or hardware failures to onsite staff. Start with one platform rather than promising universal integration.",
    "revenue": "Test a paid integration fee plus a monthly coverage retainer with included interventions and usage limits. The supplied $99 and $1,000 fleet plans are hypotheses; price only after measuring total operator time and peak incident load.",
    "gap": "The proposed wedge is taking responsibility for a defined exception queue with an agreed response time. A dashboard alone is insufficient differentiation; staffed alternatives already exist.",
    "risks": [
      "A robot stuck on a physical threshold may need an onsite person. Remote recovery rate is the central assumption.",
      "Correlated incidents can overwhelm a pooled operator even when average utilization is low.",
      "Vendor permissions, local safety controls, command auditing, and escalation procedures must be agreed before intervention.",
      "Cross-customer data rights and transferable failure patterns are unproven."
    ],
    "pilot": [
      "Recruit three paying customers using the same indoor robot platform.",
      "Observe the existing overnight incident queue and classify remote versus physical recoveries.",
      "Run a bounded off-hours service with approved runbooks and onsite escalation.",
      "Measure remote resolution rate, operator minutes per incident, response time during bursts, downtime avoided, and renewal intent."
    ],
    "evidence": "Sources included",
    "status": "Demand unvalidated",
    "timing": "Vendors with growing deployments may need coverage before they can justify a dedicated operations team. Validate that staffing gap in customer interviews rather than relying on a broad robot-market forecast.",
    "sources": [
      [
        "OBI: staffed robot monitoring and teleoperation",
        "https://obi.services/remote-robot-operators-monitoring-services/"
      ],
      [
        "InOrbit: remote operations capabilities",
        "https://www.inorbit.ai/operations"
      ],
      [
        "OTTO: remote customer support",
        "https://ottomotors.com/blog/enabling-customers-and-partners-remotely/"
      ],
      [
        "Formant: operations platform",
        "https://www.formant.ai/operations"
      ]
    ],
    "sourceNote": "These sources establish existing support and control capabilities. They do not establish Sentrik’s demand, recovery rate, or unit economics.",
    "reviewedAt": "2026-10-07",
    "evidenceLog": [
      {
        "observation": "OBI markets staffed remote monitoring and teleoperation for robot fleets.",
        "label": "OBI: staffed robot monitoring and teleoperation",
        "url": "https://obi.services/remote-robot-operators-monitoring-services/",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-07",
        "supports": "Staffed remote robot operations already exist as a service.",
        "level": "context",
        "limitations": "Seller marketing. Shows the capability exists, not how many vendors buy it or at what price."
      },
      {
        "observation": "InOrbit markets remote operations capabilities for managing robot fleets.",
        "label": "InOrbit: remote operations capabilities",
        "url": "https://www.inorbit.ai/operations",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-07",
        "supports": "Fleet operations software already covers monitoring and remote control.",
        "level": "context",
        "limitations": "Seller marketing. Shows the capability exists, not how many vendors buy it or at what price."
      },
      {
        "observation": "OTTO describes supporting customers and partners remotely.",
        "label": "OTTO: remote customer support",
        "url": "https://ottomotors.com/blog/enabling-customers-and-partners-remotely/",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-07",
        "supports": "Robot vendors already provide some remote support themselves.",
        "level": "context",
        "limitations": "Seller marketing. Shows the capability exists, not how many vendors buy it or at what price."
      },
      {
        "observation": "Formant markets an operations platform for robot fleets.",
        "label": "Formant: operations platform",
        "url": "https://www.formant.ai/operations",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-07",
        "supports": "Operations platforms compete for the same workflow.",
        "level": "context",
        "limitations": "Seller marketing. Shows the capability exists, not how many vendors buy it or at what price."
      }
    ],
    "level": "concept",
    "verdict": "Interview",
    "verdictRationale": "Competitors show the service category exists, but no source shows small vendors paying for outsourced overnight exception handling. Interviews about the last overnight incident would move this to Pilot or Pass.",
    "nextStep": "Interview three small indoor-robot vendors about their most recent overnight incident: who responded, how long recovery took, and what it cost.",
    "assumptions": [
      "Most overnight stalls can be recovered remotely.",
      "Small vendors lack, and would pay for, overnight coverage.",
      "The supplied $99 and $1,000 fleet plans are placeholders."
    ],
    "fit": "Unconfirmed: assumes access to robot vendors and comfort operating a staffed, on-call service."
  },
  {
    "id": "permit-desk",
    "name": "Permit Desk",
    "title": "A permit and inspection tracker for small contractors working across neighboring jurisdictions",
    "category": "Construction",
    "model": "B2B",
    "type": "Workflow software",
    "summary": "One shared list of each job's permits, plan-review corrections, inspections and expiry dates for small contractors who pull permits in several nearby cities.",
    "buyer": "Owner-operators of small residential remodeling or specialty-trade firms (roughly 5-20 active jobs) pulling permits in several adjacent jurisdictions. The owner pays, and an office manager or project manager would use it day to day. This segment is a hypothesis. No buyer in it was observed asking for this tool.",
    "problem": "Permitting rules, portals, inspection scheduling and fees vary by jurisdiction. In Minnesota, for example, about 66 cities run their own electrical inspections with their own forms and fees. Review times in neighboring cities can range from weeks to months. Applicants report inconsistent review comments, repeated resubmittals and slow responses, and one Denver respondent put the cost of delay above $24,000. The available evidence shows that permitting is slow and painful. It does not show that contractors struggle to keep track of status, which is the problem this product would solve.",
    "solution": "Start manual. Run a shared tracker in a spreadsheet or Airtable for 3-5 contractors, with one row per permit, a separate row per required inspection, an owner and next action for each correction, and expiry dates. Send a weekly status email. Build software only if contractors pay for the concierge version and keep using it.",
    "revenue": "Hypothesis, untested: $49-99/month per company for software, or $150-300/month for a concierge version where someone else updates the tracker. Price anchors come from offers, not purchases: Plotwise lists from $49/month (Capterra), ClearedNo $79/month (vendor, via search), a $9.99 Excel tracker plus a free tool from NextPermit, Procore at about $10,000/year (per Projul citing Capterra), and residential expediting at about $500-2,500 per project (expediter guide). No source shows how many small contractors pay for any of these.",
    "gap": "Every tier already has alternatives. Expediters and PermitFlow ($54M Series B, Dec 2025, targeting home-services contractors among others) handle the work itself. Plotwise, ClearedNo and NextPermit offer cheap tracking. Spreadsheet templates, Airtable/Softr and Zapier recipes are free or nearly free. Construction PM suites such as Projul argue small contractors should track permits inside the suite. The only gap left is a narrow one: a lightweight tracker that handles correction and resubmittal loops plus per-jurisdiction inspection rules for contractors too small for PermitFlow and not on a PM suite. No customer evidence collected here shows that this segment is unserved or would pay.",
    "timing": "Timing evidence is weak. PermitFlow's funding shows investor interest in permitting software, but that interest favors well-funded competitors as much as a new entrant. Audits and news reports show permitting backlogs persisting, though the evidence for a recent change is thin.",
    "fit": "Unconfirmed assumptions. The builder can ship a simple CRUD tracker quickly. The builder has no confirmed construction or permitting experience and no confirmed access to contractors. Selling to small contractors usually takes in-person or phone outreach, local trade associations or supplier counters, and that channel is not confirmed. Maintaining jurisdiction-specific templates is ongoing operational work, not just software.",
    "risks": [
      "Crowded market at every price point: PermitFlow is funded ($54M Series B, about $500M valuation) and lists home-services contractors as a target, cheap trackers already exist at $49-79/month, and free templates are everywhere.",
      "PM-suite vendors (e.g. Projul) tell small contractors with 5-20 projects to skip dedicated permit software, and many will track permits in a tool or spreadsheet they already have.",
      "Most of the observed pain is municipal slowness and inconsistent review, which a tracker cannot fix. The tracking part may be too small a problem to pay for.",
      "No customer or forum voice was found that specifically complains about losing track of permit status or wants a tracker. Reddit, ContractorTalk and several forums could not be accessed.",
      "Jurisdiction rules change (scheduling windows, expiry periods, local authority), and templates need someone to maintain them. Presenting a checklist as authoritative creates liability.",
      "The founder has no confirmed path to reach small contractors."
    ],
    "pilot": [
      "Interview 8-10 small contractors (remodelers, HVAC, electrical) who work in 2 or more jurisdictions. Ask about the last permit delay, how they found out about it, what they track today, and what it cost. Continue if at least 4 describe a missed correction, inspection or expiry that a tracker would have caught. Stop if most say the delays come from the city and their spreadsheet or PM suite is good enough.",
      "Offer a 30-day concierge tracker (you maintain the sheet and send weekly status) to those who report a tracking failure. Continue if 3 or more pay $150 or more for month two. Stop if fewer than 2 pay.",
      "Before writing code, compare 5 interviewees' workflows against Plotwise, ClearedNo and their existing PM suite's permit fields. If those cover what they need, Pass."
    ],
    "assumptions": [
      "The 5-20 active-job remodeler and specialty-trade segment is underserved. Not evidenced.",
      "Contractors would pay $49-99/month for software or $150-300/month for a concierge version. These are guesses based on competitor list prices.",
      "Lost corrections and missed inspections are common and costly for small contractors, as distinct from slow city review. Not evidenced beyond anecdotes.",
      "Competitor prices from Capterra and search snippets (Plotwise $49, ClearedNo $79) are current. The pages could not be fetched to confirm.",
      "Job-posting pay ranges for permit coordinators come from search snippets only. The postings could not be fetched."
    ],
    "level": "repeated-pain",
    "verdict": "Watch",
    "verdictRationale": "Several independent sources show that permitting is slow, inconsistent and different in every jurisdiction (Denver audit survey, BiggerPockets thread, Minnesota rules). Employers post coordinator jobs whose duties include tracking permit status, which suggests labor budgets exist at larger firms. But no evidence came from small contractors saying that tracking, as opposed to city delay, is their problem. The space has a well-funded entrant (PermitFlow), cheap trackers ($49-79/month), free templates, and PM suites telling the target segment not to buy dedicated tools. With no confirmed customer access, it should not move to Interview yet. It would move to Interview if the builder can reach a group of small contractors (a trade association, supplier or personal network) and if a few of them describe recent missed corrections, inspections or expiries that cost money. It would move to Pass if early conversations say spreadsheets or existing PM suites are good enough.",
    "nextStep": "Find out whether you can reach 8-10 small contractors this week (personal network, a local builders' association, or a supply-house counter). If you can, run the last-delay interview script. If you can't, park this idea.",
    "evidence": "Researched report",
    "status": "Permitting pain is real; tracker demand unverified; crowded",
    "evidenceLog": [
      {
        "observation": "A Denver auditor found residential permit reviews were late 76% of the time in 2022. Among 55 survey respondents, 11 were frustrated by inconsistent review comments and 14 reported resubmittals that brought new comments or repeated requests. One respondent said delays added more than $24,000 to a project. A contractor said they pass added costs on to clients.",
        "label": "CBS Colorado: Denver permitting audit",
        "url": "https://www.cbsnews.com/colorado/news/denvers-city-auditor-slow-permitting-process-costs-homeowners/",
        "sourceType": "news",
        "publishedAt": "2024-01-18",
        "observedAt": "2026-10-08",
        "supports": "Applicants repeatedly report correction and resubmittal pain and the costs of delay.",
        "level": "repeated-pain",
        "limitations": "Covers one city. The pain is mainly slow city review, not contractors losing track of status. The respondents are homeowners and contractors together, and the $24k figure is one anecdote."
      },
      {
        "observation": "On a 2026 BiggerPockets thread about construction delays, one participant said one city may issue a residential permit in three weeks while a neighboring city in the same county takes four months for the same scope. Another said permits often take 6-12 months. No one described a system for tracking permit status.",
        "label": "BiggerPockets forum: what's causing construction delays in 2026",
        "url": "https://www.biggerpockets.com/forums/44/topics/1278460-what-s-causing-the-most-construction-delays-in-2026?page=1",
        "sourceType": "community",
        "publishedAt": "2026",
        "observedAt": "2026-10-08",
        "supports": "Permit timelines vary across neighboring jurisdictions, which is the multi-jurisdiction premise.",
        "level": "attention",
        "limitations": "Small thread (112 views) with mostly investors and a lender, not small GCs. It says nothing about wanting a tracking tool."
      },
      {
        "observation": "Minnesota DLI says about 66 cities have adopted local electrical inspection authority and may have their own forms and fee schedules. DLI inspections must be scheduled by calling the inspector between 7 and 8:30 a.m. Permits become void 12 months after filing, and the installer is responsible for scheduling all inspections.",
        "label": "Minnesota DLI: electrical permit instructions",
        "url": "https://dli.mn.gov/sites/default/files/pdf/ele-permit-instr.pdf",
        "sourceType": "government",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Rules, scheduling methods and expiry vary by jurisdiction, and the contractor carries the burden of scheduling and tracking.",
        "level": "context",
        "limitations": "Describes the rules, not how many contractors fail to follow them or what that costs. Covers one state and one trade."
      },
      {
        "observation": "PermitFlow sells permitting, inspections and closeouts, and license management, with five AI agents. It lists home services contractors, commercial contractors, home builders, developers and architects as customers. It claims coverage of 7K+ jurisdictions and shows no public pricing (demo only).",
        "label": "PermitFlow: vendor homepage",
        "url": "https://www.permitflow.com/",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "A well-funded incumbent already covers permit and inspection tracking, including for trade contractors.",
        "level": "context",
        "limitations": "The outcome numbers are vendor claims. It is unclear how far down-market PermitFlow sells in practice."
      },
      {
        "observation": "PermitFlow raised a $54M Series B led by Accel on December 3, 2025, at a valuation of roughly $500M. Named clients include Amazon, Ikea and Lennar.",
        "label": "Foundamental: PermitFlow Series B announcement",
        "url": "https://www.foundamental.com/perspectives/permitflow-raises-54m-in-series-b-to-automate-construction-permitting",
        "sourceType": "news",
        "publishedAt": "2025-12-03",
        "observedAt": "2026-10-08",
        "supports": "Counterevidence: a heavily funded competitor exists, and investors are interested in permitting software.",
        "level": "context",
        "limitations": "An investor's post, not proof of revenue or of small-contractor adoption."
      },
      {
        "observation": "A PM-software vendor's roundup says PermitFlow suits firms pulling dozens of permits a month and is harder to justify at 5-10 permits a year. It cites Procore at about $10,000/year and recommends that small and mid-size contractors with 5-20 projects track permits in a PM platform instead of dedicated permit software.",
        "label": "Projul blog: best construction permit tracking software",
        "url": "https://projul.com/blog/best-construction-permit-tracking-software/",
        "sourceType": "vendor",
        "publishedAt": "2025-04-02",
        "observedAt": "2026-10-08",
        "supports": "Counterevidence: a PM-suite vendor tells the target segment not to buy dedicated permit software. Also supplies price anchors.",
        "level": "context",
        "limitations": "Written by a competitor promoting its own suite. The page appears to have been updated after its byline date."
      },
      {
        "observation": "NextPermit promotes a free permit-tracking web tool (currently unavailable for maintenance) and a $9.99 Excel permit tracker aimed at GCs, permit coordinators and small construction companies. It argues that spreadsheets break down once a firm has multiple permits and jurisdictions.",
        "label": "NextPermit: track construction permits without spreadsheets",
        "url": "https://nextpermit.org/2026/08/03/track-construction-permits-without-spreadsheets/",
        "sourceType": "vendor",
        "publishedAt": "2026-08-03",
        "observedAt": "2026-10-08",
        "supports": "Counterevidence: free and near-free trackers already target this segment, which limits pricing power.",
        "level": "context",
        "limitations": "Vendor content, with no adoption data. The tool's unavailability may indicate low traction, but that is unknown."
      },
      {
        "observation": "Search results described ClearedNo as a contractor tool that checks city portals several times a day for permit status changes, at $79/month after a free first month and only in supported cities. Capterra lists Plotwise permit tracking from $49 (flat rate).",
        "label": "ClearedNo / Plotwise: low-cost permit trackers (via search)",
        "url": "https://www.clearedno.com/blog/permit-tracking-software-for-contractors",
        "sourceType": "vendor",
        "publishedAt": "2026",
        "observedAt": "2026-10-08",
        "supports": "Price anchors of $49-79/month for small-contractor permit tracking. Counterevidence that cheap alternatives exist.",
        "level": "context",
        "limitations": "Both the ClearedNo page and Plotwise's Capterra page returned 403 when fetched, so the prices come from search summaries only. List prices are offers, not evidence of customers."
      },
      {
        "observation": "An expediter-industry guide puts residential permit expediting at about $500-2,500 per project, with hourly rates also common.",
        "label": "PermitPlace: permit expediter cost guide (via search)",
        "url": "https://permitplace.com/permit-expediter-cost-guide/",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Upper anchor for spend on outsourcing permit work, as an adjacent service.",
        "level": "context",
        "limitations": "Seen only in search results and not fetched. The seller sets the prices. It does not show that small contractors outsource tracking, as opposed to submission."
      }
    ],
    "sourceNote": "The sources establish that permitting is slow, inconsistent and jurisdiction-specific, and that both well-funded and cheap tracking tools already exist. They do not establish that small contractors struggle to track status or would pay for a new tracker. Contractor forums (Reddit, ContractorTalk, Mike Holt, Fine Homebuilding) were blocked, so direct customer voice is thin.",
    "sources": [
      [
        "CBS Colorado: Denver permitting audit",
        "https://www.cbsnews.com/colorado/news/denvers-city-auditor-slow-permitting-process-costs-homeowners/"
      ],
      [
        "BiggerPockets forum: what's causing construction delays in 2026",
        "https://www.biggerpockets.com/forums/44/topics/1278460-what-s-causing-the-most-construction-delays-in-2026?page=1"
      ],
      [
        "Minnesota DLI: electrical permit instructions",
        "https://dli.mn.gov/sites/default/files/pdf/ele-permit-instr.pdf"
      ],
      [
        "PermitFlow: vendor homepage",
        "https://www.permitflow.com/"
      ],
      [
        "Foundamental: PermitFlow Series B announcement",
        "https://www.foundamental.com/perspectives/permitflow-raises-54m-in-series-b-to-automate-construction-permitting"
      ],
      [
        "Projul blog: best construction permit tracking software",
        "https://projul.com/blog/best-construction-permit-tracking-software/"
      ],
      [
        "NextPermit: track construction permits without spreadsheets",
        "https://nextpermit.org/2026/08/03/track-construction-permits-without-spreadsheets/"
      ],
      [
        "ClearedNo / Plotwise: low-cost permit trackers (via search)",
        "https://www.clearedno.com/blog/permit-tracking-software-for-contractors"
      ],
      [
        "PermitPlace: permit expediter cost guide (via search)",
        "https://permitplace.com/permit-expediter-cost-guide/"
      ]
    ],
    "reviewedAt": "2026-10-08"
  },
  {
    "id": "renewal-radar",
    "name": "Renewal Radar",
    "title": "Catch software renewals before the notice deadline",
    "category": "Operations",
    "model": "B2B",
    "type": "Workflow software",
    "summary": "Turn vendor contracts into a calendar of notice deadlines with a named decision owner; the generic version faces free, bundled competitors.",
    "buyer": "Operations or finance leads at small companies (roughly 10-200 staff) without a procurement team; the same person usually feels the pain and approves the spend. A possibly sharper segment is offline-heavy small businesses (e.g. medical practices, multi-site services) whose evergreen contracts are leases, maintenance and service agreements rather than SaaS.",
    "problem": "Many B2B contracts auto-renew and require written notice of non-renewal 30-120 days before term end. A vendor dataset reports that 72% of contracts it processed in Q2 2026 contained auto-renewal clauses. Public accounts describe companies missing the notice window and being billed for another full term, sometimes tens of thousands of dollars, and practices tracking these dates in spreadsheets and calendar reminders. Independent first-hand customer reports found in this research were few and hard to verify.",
    "solution": "If pursued at all: a manual-first contract inventory service for a narrow vertical, where the builder abstracts notice deadlines from the customer's contracts, has the customer confirm each date, and delivers a shared calendar plus owner reminders. Software follows only if paid inventories repeat.",
    "revenue": "Hypothesis, unvalidated: a one-time inventory fee (assumption: $300-$1,000) plus an annual reminder subscription. Anchors: Ramp's free plan already includes contract extraction; Renewly lists a free tier for 5 contracts and $149-$499/month paid tiers; directory listings show RenewalWatch from $29/month and RenewQ from $19; ContractSafe lists plans from $450/month. Generic software pricing would be squeezed between free bundles and many sub-$50 indie tools.",
    "gap": "The generic gap is largely closed. Spend platforms (Ramp free plan, Cledara free/basic plans), contract repositories (ContractSafe) and several small renewal trackers (Renewly, RenewalWatch, RenewQ, Termora) already extract dates and send 30/60/90-day reminders. A free tracker (Stitchflow Renewal Tracker) has been shut down. The only plausible underserved slice is small businesses whose important renewals are non-software contracts that never pass through a card or spend platform, and who want the inventory done for them rather than another tool; this was not verified.",
    "timing": "Timing evidence is weak. The rising share of auto-renewal clauses reported by Vertice and cheap AI extraction cut both ways: they increase the problem slightly but also made the feature a commodity that spend platforms now include for free.",
    "fit": "Unconfirmed assumptions: the builder can build extraction and reminders quickly, but has no confirmed access to small-company ops/finance buyers, no confirmed procurement or legal domain experience, and no confirmed capital for paid acquisition in a crowded category. Handling confidential contracts also requires security practices a solo developer would need to demonstrate.",
    "risks": [
      "Free and bundled alternatives: Ramp's free plan lists contract extraction, and Cledara is reported to have a free plan with renewal alerts.",
      "Crowded indie market: Renewly, RenewalWatch, RenewQ and Termora already sell this exact workflow at $19-$499/month, and a free tracker (Stitchflow) was shut down, suggesting weak willingness to pay.",
      "Companies with few vendors can use a spreadsheet and calendar, which is the method advisors and practitioners already recommend.",
      "Incorrect notice-period extraction can cause a costly missed deadline; review sites report AI extraction accuracy complaints even for established tools.",
      "Contracts are confidential; small buyers may not upload them to an unknown solo vendor.",
      "Vendors can change notice terms through linked online terms, so a one-time extraction can go stale."
    ],
    "pilot": [
      "Before building, interview 10 ops/finance leads at companies without procurement. Ask about the last renewal that surprised them, its cost, and how they track dates today. Stop if fewer than 3 describe a missed notice deadline in the last 2 years that cost over $2,000 (assumption threshold).",
      "Ask each interviewee whether they already use Ramp, Brex, Cledara or a contract repository with reminders. Stop if most already have reminders available and the failure was ownership, not tooling.",
      "If a vertical shows pain, offer a paid manual contract inventory (assumption: $500) to 5 businesses in that vertical. Success: 2 paid within 30 days. Stop: none paid."
    ],
    "assumptions": [
      "Inventory fee of $300-$1,000 is an untested assumption.",
      "Offline-heavy small businesses being underserved by spend platforms is a hypothesis, not observed.",
      "The $2,000 missed-renewal threshold and 10/5-company pilot sizes are arbitrary decision rules.",
      "Vertice's auto-renewal share comes from its own mid-market/enterprise customer data and may not reflect small companies."
    ],
    "level": "repeated-pain",
    "verdict": "Pass",
    "verdictRationale": "The problem is real and repeatedly described, but evidence shows the generic solution is already free inside spend platforms (Ramp free plan) and sold by multiple small vendors at low prices, while a free tracker was discontinued. Customer voices found were few, partly unverifiable (members-only forum, a 2020 HN anecdote) and do not show willingness to pay a new vendor. For a solo developer with unconfirmed buyer access, this is a crowded, low-price category. This would change to Interview if conversations with a specific vertical (e.g. medical practices or multi-site service businesses) showed repeated costly missed renewals on non-software contracts that spend tools do not capture, and buyers asked for a done-for-you inventory.",
    "nextStep": "Do not build. If curious, spend one hour asking 3 small-business operators in one vertical how they caught their last auto-renewing contract, and only revisit if 2+ report a recent costly miss with no existing tool.",
    "evidence": "Researched report",
    "status": "Pain acknowledged; market crowded with free and cheap tools",
    "evidenceLog": [
      {
        "observation": "Vertice reports that the average share of contracts with auto-renewal clauses rose from 60.6% in Q1 2026 to 72.3% in Q2 2026, with CRM at 96.1%, based on its own processed spend data.",
        "label": "Vertice: auto-renewal clause insights",
        "url": "https://www.vertice.one/insights/auto-renewal-clauses",
        "sourceType": "vendor",
        "publishedAt": "2026-07",
        "observedAt": "2026-10-08",
        "supports": "Auto-renewal clauses are prevalent, so notice deadlines are a widespread exposure.",
        "level": "context",
        "limitations": "Vendor data from its own customer base; no sample size or methodology disclosed; likely skewed to mid-market and enterprise, not small companies. Prevalence of clauses is not evidence of missed deadlines."
      },
      {
        "observation": "A poster identifying as an operations director describes a $48k/year SaaS contract the company stopped using; the vendor invoiced a renewal because the company missed a 90-day written non-renewal notice by 14 days.",
        "label": "terms.law forum: SaaS MSA auto-renewal thread",
        "url": "https://terms.law/forum/thread/saas-msa-auto-renewal-trap-2026.html",
        "sourceType": "community",
        "publishedAt": "2026-04-28",
        "observedAt": "2026-10-08",
        "supports": "Missing a notice deadline can cost a full annual term.",
        "level": "repeated-pain",
        "limitations": "Single anonymous post on a forum labelled members-only; identity and facts cannot be verified, and the forum is operated by a legal services site. Does not show willingness to pay for a tracking tool."
      },
      {
        "observation": "A long-time small/medium business customer of 8x8 describes difficulty confirming an auto-renewal and an early-termination fee demand of more than half a year, waived only after many calls and a legal threat.",
        "label": "Hacker News comment: 8x8 auto-renewal dispute",
        "url": "https://hn.algolia.com/api/v1/items/22855947",
        "sourceType": "customer",
        "publishedAt": "2020-04-13",
        "observedAt": "2026-10-08",
        "supports": "Small businesses experience costly auto-renewal disputes with software vendors.",
        "level": "repeated-pain",
        "limitations": "Old (2020) anecdote; the customer says they gave notice, so the problem was a vendor dispute rather than a forgotten deadline. One person."
      },
      {
        "observation": "A healthcare practice consultant writes that many practice contracts are evergreen and that no one reviews them annually, so practices lose chances to renegotiate, cancel or rebid; recommends an Excel list with a notification trigger date plus Outlook reminders sent to more than one person.",
        "label": "Physicians Practice: tracking medical practice contracts",
        "url": "https://www.physicianspractice.com/view/simple-steps-better-track-medical-practice-contracts",
        "sourceType": "news",
        "publishedAt": "2015-01-14",
        "observedAt": "2026-10-08",
        "supports": "Small offline businesses face the problem with non-software contracts, and the standard workaround is a spreadsheet plus calendar.",
        "level": "repeated-pain",
        "limitations": "Advisor opinion from 2015, not a customer report; no cost figures; shows a free workaround is considered adequate."
      },
      {
        "observation": "Ramp's pricing page lists 'Automated vendor tracking and contract extraction' on its $0/user Free plan; Plus is $15/user/month plus a platform fee.",
        "label": "Ramp: pricing page",
        "url": "https://ramp.com/pricing",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Contract extraction is available free inside a widely used spend platform, which undercuts a standalone tool.",
        "level": "context",
        "limitations": "Pricing page does not mention renewal alerts explicitly; full renewal features may need other plans or add-ons. Requires adopting Ramp cards/spend management."
      },
      {
        "observation": "Ramp's Contracts & renewals help article describes contract upload, bulk upload, email forwarding, Ironclad import, company-wide reminder defaults and per-contract reminders tied to end date and 'Last date to action', with renewal requests needing the Procurement add-on.",
        "label": "Ramp Support: Contracts & renewals",
        "url": "https://support.ramp.com/contracts-renewals",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Incumbent spend platforms already cover notice-deadline reminders and owners.",
        "level": "context",
        "limitations": "Product documentation, not proof of adoption or that reminders prevent misses."
      },
      {
        "observation": "In Ramp's community wishlist (2024), a Ramp product lead asked procurement teams how they handle renewals; one user asked for extraction of subscription terms from receipts and invoices, and Ramp replied that contract parsing and renewal notifications already existed.",
        "label": "Ramp Community: Renewals Management thread",
        "url": "https://community.ramp.com/t/renewals-management/127",
        "sourceType": "community",
        "publishedAt": "2024-02-26",
        "observedAt": "2026-10-08",
        "supports": "Some users want automatic extraction of renewal terms; incumbents respond by shipping it.",
        "level": "attention",
        "limitations": "One user request, no cost or pain described; no other users replied to the product lead's question."
      },
      {
        "observation": "ContractSafe advertises automated reminders for renewals, expirations and notice deadlines (30/60/90 days or custom), with plans listed from $450/month and a claim of 1,900+ organizations.",
        "label": "ContractSafe: contract date reminders page",
        "url": "https://www.contractsafe.com/contract-date-reminders",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "A budget exists among some organizations for contract repositories with notice-deadline reminders.",
        "level": "context",
        "limitations": "Customer count is a vendor claim; buyers likely want a broader contract repository, not just renewal reminders; price is an offer, not proof of spend by small companies."
      },
      {
        "observation": "Renewly, aimed at 11-500 person teams tracking contracts in spreadsheets, extracts renewal date, auto-renewal clause, notice window and value from PDFs and alerts at 90/60/30/7 days; listed with a free 5-contract plan and $149-$499/month paid tiers, with 0 likes and no reviews on the listing.",
        "label": "AlternativeTo: Renewly listing",
        "url": "https://alternativeto.net/software/renewly/about/",
        "sourceType": "review",
        "publishedAt": "2026-07-09",
        "observedAt": "2026-10-08",
        "supports": "The proposed product already exists nearly feature-for-feature for the same buyer.",
        "level": "context",
        "limitations": "Listing added by the vendor; no evidence of customers or revenue."
      },
      {
        "observation": "Search results showed directory listings for several small renewal trackers: RenewalWatch (Capterra, from US$29, flat rate, aimed at small businesses tracking notice periods), RenewQ (Capterra, from US$19) and Termora (PeerPush, from $19.99). The Stitchflow free SaaS renewal tracker page now states the tool has been sunset.",
        "label": "Capterra/PeerPush listings and Stitchflow tracker page",
        "url": "https://stitchflow.com/tools/renewal-tracker",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "The category is crowded with low-priced tools and at least one free tool was discontinued, suggesting weak monetization.",
        "level": "context",
        "limitations": "Capterra pages returned 403 on fetch; RenewalWatch/RenewQ/Termora prices come from search result snippets only. Stitchflow's reason for sunsetting is not stated."
      }
    ],
    "sourceNote": "Sources establish that auto-renewal clauses are common and that the reminder/extraction workflow is widely offered free or cheaply; they do not establish small-company willingness to pay a new vendor, and first-hand customer reports were few, dated or unverifiable (Reddit was not accessible to this research).",
    "sources": [
      [
        "Vertice: auto-renewal clause insights",
        "https://www.vertice.one/insights/auto-renewal-clauses"
      ],
      [
        "terms.law forum: SaaS MSA auto-renewal thread",
        "https://terms.law/forum/thread/saas-msa-auto-renewal-trap-2026.html"
      ],
      [
        "Hacker News comment: 8x8 auto-renewal dispute",
        "https://hn.algolia.com/api/v1/items/22855947"
      ],
      [
        "Physicians Practice: tracking medical practice contracts",
        "https://www.physicianspractice.com/view/simple-steps-better-track-medical-practice-contracts"
      ],
      [
        "Ramp: pricing page",
        "https://ramp.com/pricing"
      ],
      [
        "Ramp Support: Contracts & renewals",
        "https://support.ramp.com/contracts-renewals"
      ],
      [
        "Ramp Community: Renewals Management thread",
        "https://community.ramp.com/t/renewals-management/127"
      ],
      [
        "ContractSafe: contract date reminders page",
        "https://www.contractsafe.com/contract-date-reminders"
      ],
      [
        "AlternativeTo: Renewly listing",
        "https://alternativeto.net/software/renewly/about/"
      ],
      [
        "Capterra/PeerPush listings and Stitchflow tracker page",
        "https://stitchflow.com/tools/renewal-tracker"
      ]
    ],
    "reviewedAt": "2026-10-08"
  },
  {
    "id": "change-order",
    "name": "Scope Ledger",
    "title": "Signed change orders for small trades already using field-service software",
    "category": "Construction",
    "model": "B2B",
    "type": "Workflow software",
    "summary": "A phone-first way for small residential trade contractors to get a client's signed approval on extra work before doing it, attached to the job they already track elsewhere.",
    "buyer": "Owner-operators of 1-10 person residential electrical, plumbing, and remodeling shops; the owner both feels the loss and approves the spend. Sharpened candidate: shops already on Jobber or Housecall Pro whose software lacks a signed change order on an existing job.",
    "problem": "Homeowners ask for extras mid-job ('while you're here'), the crew does the work on a verbal or texted OK, and the owner later cannot prove approval or price. Contractor Q&A sites and trade forums show the same question recurring for years, and in California a home-improvement change must be in writing and signed before work starts, so verbal approvals can be unenforceable. Jobber users report that editing a job or quote either leaves no client sign-off on the added work or wipes the original signature.",
    "solution": "Smallest offer: a mobile form that captures the request, photos, price, and effect on schedule, sends the client a no-login approval link, and stores a timestamped signed PDF linked to the job number in the contractor's existing system. Start manual-first: a template plus link-based e-sign for a handful of contractors, before building any integration.",
    "revenue": "Hypothesis (unvalidated): $25-50 per company per month flat, matching the anchors of standalone tools Digital Change Orders ($29/month) and JustSignOff ($49 starting). Full suites that include change orders cost far more (JobTread $199/month plus $20 per user). These are vendor offers, not evidence of buyers.",
    "gap": "Weak. Standalone tools already sell this exact workflow to residential trades (Digital Change Orders, JustSignOff), construction suites include it (JobTread, Buildertrend), and a SourceForge category lists 57 change-order products. The only specific underserved slice found is Jobber users who want a signed change order attached to an existing job; however, third-party add-ons for that are already being promoted on Jobber's own forum, and Jobber or Housecall Pro could ship it natively (Housecall Pro added estimate e-signatures in January 2025).",
    "timing": "Timing evidence is weak. The pain is old (forum threads from 2005). Recent signals are a 2026 vendor-sponsored survey on change-order cash-flow strain, which concerns subcontractor-to-GC change orders on larger projects rather than homeowner extras, and the arrival of cheap e-sign tools that make the workflow easy to copy.",
    "fit": "Unconfirmed assumptions: the builder can build a mobile form, e-sign link, and PDF trail quickly; the builder has no confirmed access to trade contractors, no confirmed construction domain experience, and no confirmed capital for paid acquisition. Distribution to small trades is usually the hard part and is unproven for this builder.",
    "risks": [
      "Crowded, cheap category: at least two near-identical standalone tools at $29-49/month and dozens of suites that include change orders.",
      "Platform risk: Jobber, Housecall Pro, or ServiceTitan can add native signed change orders and remove the reason to buy an add-on.",
      "Behavior risk: owners do small extras on a handshake to keep goodwill and may not want to slow an urgent job for a signature, so the tool may go unused even when bought.",
      "Low willingness to pay: a texted 'Approved' reply or a free e-sign/estimate feature already in their software may be good enough for most small jobs.",
      "Legal fit varies by state and contract; a signature link is not automatically an enforceable change order.",
      "Distribution to fragmented small trade shops is expensive relative to a ~$30/month price."
    ],
    "pilot": [
      "Interview 8-10 residential trade owners about the last extra they were not paid for: amount, how approval was given, what software they use. Continue only if at least 4 report an unpaid or disputed extra in the past 12 months worth more than about $500.",
      "Ask the same owners whether they have tried Digital Change Orders, JustSignOff, or their own software's estimate e-sign, and why they stopped. Stop if most say an existing tool or a texted approval is adequate.",
      "If a Jobber-specific gap holds up, offer 5 Jobber users a manual signed-change-order service for $30/month for one month. Success: 3 pay and use it on at least 5 real change requests each; stop if fewer than 2 pay."
    ],
    "assumptions": [
      "The $25-50/month price range is a hypothesis anchored on competitor list prices, not on any buyer's stated willingness to pay.",
      "That Jobber users represent a meaningful paying segment is inferred from forum complaints and has not been sized.",
      "That residential homeowner disputes, rather than GC-to-sub commercial change orders, are where the small-shop pain is concentrated is assumed.",
      "Whether Jobber or Housecall Pro have shipped native change orders since the sources were written was not confirmed."
    ],
    "level": "repeated-pain",
    "verdict": "Watch",
    "verdictRationale": "Independent sources (contractor Q&A, trade forums, Jobber community posts) show the same unpaid-extras pain recurring for years, so the problem is real. But the exact offer already exists at low prices from standalone vendors and inside major suites, and no source shows buyers switching or paying for a new entrant. The strongest cost evidence (Clearstory/Dodge 2026 survey) is vendor-sponsored and covers GC-subcontractor change orders, a different buyer already served by Clearstory. Without customer access or a distinct wedge, this is not worth a pilot now. It would move to Interview if conversations confirm that users of a specific platform such as Jobber lose real money and that existing add-ons have failed them; it would move to Pass if Jobber or Housecall Pro ship native signed change orders on existing jobs.",
    "nextStep": "Check Jobber's and Housecall Pro's current release notes for native change orders, then message 5 trade owners in your network or a local trade group asking about their last unpaid extra and how they recorded approval.",
    "evidence": "Researched report",
    "status": "Pain recurs; offer already sold cheaply by others",
    "evidenceLog": [
      {
        "observation": "A Texas remodeling contractor asks what to do because the owner requested a change order by email and text but won't pay; the owner calls the contractor's lien fraudulent. The answer covers homestead lien limits, a certified demand letter, and small claims.",
        "label": "Levelset Payment Help: texted change order unpaid",
        "url": "https://www.levelset.com/payment-help/question/i-have-emails-and-text-messages-where-the-owner-ask-for-the-change-order-and-won-t-pay-what-s-next/",
        "sourceType": "community",
        "publishedAt": "2023-06",
        "observedAt": "2026-10-08",
        "supports": "Extras approved informally by text often go unpaid and become legal disputes.",
        "level": "repeated-pain",
        "limitations": "Single anonymous case; amount not stated; Levelset is a vendor that hosts the Q&A."
      },
      {
        "observation": "Page 13 of Levelset's change-order question topic lists recurring questions in Feb-Mar 2020, including 'Can we file a mechanics lien with no change order signed?', 'What can I do to get my money based on a verbal agreement?', and whether texts are usable in court.",
        "label": "Levelset Payment Help: change-order topic listing",
        "url": "https://www.levelset.com/payment-help/topic/change-orders/page/13",
        "sourceType": "community",
        "publishedAt": "2020-03",
        "observedAt": "2026-10-08",
        "supports": "The unsigned or verbal change-order problem recurs across many independent contractors.",
        "level": "repeated-pain",
        "limitations": "Question titles only; no amounts, trades, or proof any asker would pay for software."
      },
      {
        "observation": "Electricians discuss homeowners asking for small extras mid-job; replies advise quoting immediately and not starting until a change order is signed, and one calls 'While you're here' one of the most expensive phrases in contracting. Some do small extras free for repeat customers.",
        "label": "ECN Electrical Forum: 'Charging for small extras' thread",
        "url": "https://www.electrical-contractor.net/forums/ubbthreads.php/topics/156419.html",
        "sourceType": "community",
        "publishedAt": "2005-05",
        "observedAt": "2026-10-08",
        "supports": "Verbal mid-job extras are a long-standing pain for electricians; some deliberately give extras away, a counter-signal to formal approval.",
        "level": "repeated-pain",
        "limitations": "Twenty years old; only page 1 of 3 read; no cost data."
      },
      {
        "observation": "Search results from Jobber's community 'Change orders' thread show support suggesting workarounds (edit the job, or 'Create Similar Quote') and users saying editing leaves no client sign-off on added work and editing a quote wipes the original signature; some posters promote their own add-ons.",
        "label": "Jobber Community: change orders thread (search results)",
        "url": "https://community.getjobber.com/discussions/quoting/change-orders/1000",
        "sourceType": "community",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "A specific gap exists for Jobber users wanting signed change orders on existing jobs, and third parties already target it.",
        "level": "repeated-pain",
        "limitations": "Page returned HTTP 403; observed only through search-result summaries. Post dates, counts, and whether Jobber has since shipped a native feature are unverified."
      },
      {
        "observation": "Dodge Data & Analytics and Clearstory report that 83% of specialty contractors cite a direct negative cash-flow impact from change orders not fully paid, 96% report poor or untimely processing with average approval of 26 days, and nearly all start work before a change order is issued.",
        "label": "Clearstory/Dodge: 2026 Subcontractor Change Order Report",
        "url": "https://www.clearstory.build/webinar-the-2026-state-of-change-orders-for-subcontractors",
        "sourceType": "research",
        "publishedAt": "2026-07",
        "observedAt": "2026-10-08",
        "supports": "Unpaid change orders have a measurable cost for trade contractors.",
        "level": "costly-workaround",
        "limitations": "Vendor-sponsored; sample size not given on the page; concerns subcontractor-to-GC commercial work, not homeowner extras for small residential shops."
      },
      {
        "observation": "CSLB states that if the contract price or scope of work needs to change, it must be done with a written change order signed by customer and contractor before the change, which then becomes part of the contract.",
        "label": "California CSLB: home improvement contract guidance",
        "url": "https://www.cslb.ca.gov/Consumers/Hire_A_Contractor/Home_Improvement_Contracts/What_Is_A_Contract.aspx",
        "sourceType": "government",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Verbal approvals can leave California residential contractors unable to enforce payment, raising the value of a signed record.",
        "level": "context",
        "limitations": "California only; a legal requirement is not evidence that contractors will pay for a tool."
      },
      {
        "observation": "Digital Change Orders (Raymi LLC, founded 2023) lets contractors write, price, and send a change order by text or email for digital signature before work begins, stored as a timestamped PDF; starts at $29/month with a free version; one 5-star review from a 1-25 person firm.",
        "label": "SourceForge: Digital Change Orders listing",
        "url": "https://sourceforge.net/software/product/Digital-Change-Orders/",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "The proposed offer already exists at a low price point; price anchor for revenue hypothesis.",
        "level": "context",
        "limitations": "Listing price is an offer; a single review does not show meaningful adoption."
      },
      {
        "observation": "Search results for Capterra's JustSignOff listing describe change-order software for residential contractors, plumbers, electricians, and handymen with photos, line items, a no-app approval link by text or email, and signed PDFs; starting price US$49 flat rate, US only, no ratings.",
        "label": "Capterra: JustSignOff listing (search results)",
        "url": "https://www.capterra.ca/software/1107866/JustSignOff",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "A second standalone competitor targets the exact proposed buyer and workflow.",
        "level": "context",
        "limitations": "Page returned HTTP 403; details come from search-result summaries only. No evidence of customer count."
      },
      {
        "observation": "JobTread charges $199/month plus $20 per internal user, with all features included; its feature list includes Change Orders and Contracts & eSignatures, with free customer portal users.",
        "label": "JobTread: pricing page",
        "url": "https://www.jobtread.com/pricing",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Full suites already include change orders; upper price anchor.",
        "level": "context",
        "limitations": "Does not confirm the client e-sign flow for change orders specifically; price is an offer."
      },
      {
        "observation": "SourceForge's construction change order software category for startups lists 57 products, including Buildertrend, Projul, JobTread, Digital Change Orders, Fieldwire, Knowify, ServiceTitan, and RenoWare ($25/month).",
        "label": "SourceForge: construction change order software category",
        "url": "https://sourceforge.net/software/construction-change-order/for-startup/",
        "sourceType": "review",
        "publishedAt": "2026-07",
        "observedAt": "2026-10-08",
        "supports": "The category is crowded with incumbents and cheap alternatives.",
        "level": "context",
        "limitations": "Directory listings, not market share; some listed products may barely be used."
      }
    ],
    "sourceNote": "The sources establish a long-recurring pain around unpaid verbal extras and a crowded, cheap set of existing tools, but none shows contractors paying for or switching to a new entrant, and the strongest cost data comes from a vendor survey about a different (commercial subcontractor) segment.",
    "sources": [
      [
        "Levelset Payment Help: texted change order unpaid",
        "https://www.levelset.com/payment-help/question/i-have-emails-and-text-messages-where-the-owner-ask-for-the-change-order-and-won-t-pay-what-s-next/"
      ],
      [
        "Levelset Payment Help: change-order topic listing",
        "https://www.levelset.com/payment-help/topic/change-orders/page/13"
      ],
      [
        "ECN Electrical Forum: 'Charging for small extras' thread",
        "https://www.electrical-contractor.net/forums/ubbthreads.php/topics/156419.html"
      ],
      [
        "Jobber Community: change orders thread (search results)",
        "https://community.getjobber.com/discussions/quoting/change-orders/1000"
      ],
      [
        "Clearstory/Dodge: 2026 Subcontractor Change Order Report",
        "https://www.clearstory.build/webinar-the-2026-state-of-change-orders-for-subcontractors"
      ],
      [
        "California CSLB: home improvement contract guidance",
        "https://www.cslb.ca.gov/Consumers/Hire_A_Contractor/Home_Improvement_Contracts/What_Is_A_Contract.aspx"
      ],
      [
        "SourceForge: Digital Change Orders listing",
        "https://sourceforge.net/software/product/Digital-Change-Orders/"
      ],
      [
        "Capterra: JustSignOff listing (search results)",
        "https://www.capterra.ca/software/1107866/JustSignOff"
      ],
      [
        "JobTread: pricing page",
        "https://www.jobtread.com/pricing"
      ],
      [
        "SourceForge: construction change order software category",
        "https://sourceforge.net/software/construction-change-order/for-startup/"
      ]
    ],
    "reviewedAt": "2026-10-08"
  },
  {
    "id": "clinic-waitlist",
    "name": "Open Slot",
    "title": "A cancellation waitlist for independent clinics",
    "category": "Healthcare",
    "model": "B2B",
    "type": "Workflow software",
    "summary": "A consented, preference-aware waitlist that offers canceled appointment slots to matching patients. Research shows the pain is real but the feature is already built into common practice software and sold by many add-on vendors.",
    "buyer": "Practice managers or owners at independent outpatient clinics (dental, PT, allied health, specialty medical). The owner usually approves payment and front-desk staff do the work.",
    "problem": "Late cancellations leave slots empty. A neurology QI study found 14.5% of appointments went unfilled because of late cancellations, against a 5% no-show rate. A Mayo Clinic Health System paper found inconsistent refill methods and no shared process across the care team. Clinics write cancellation-list monitoring into front-desk job duties, and the usual manual method is calling down a list.",
    "solution": "If pursued at all: a staff-assisted, text-first waitlist for clinics whose scheduling system lacks automatic slot offers, with staff confirming the booking in the existing system. Store no clinical details. Evidence suggests this gap is narrow, because Jane, Open Dental (Web Sched ASAP), NexHealth, Weave and Luma already cover much of it.",
    "revenue": "Hypothesis (unvalidated): $49-149 per location per month. The anchors are offers, not proof of buyers. Patient Waitlist Management lists from $25/month. Jane's Thrive plan, which includes automated waitlist management, is $99/month for the whole practice platform. Weave is reported in a search snippet (unverified) at $249/location/month for a broader communications bundle. Most clinical waitlist vendors (DoctorConnect, Doctible, Phreesia, CERTIFY) do not publish prices.",
    "gap": "Alternatives: built-in waitlists in practice-management and EHR systems (Jane, Open Dental, Dentrix ASAP list), patient-engagement suites (Weave, NexHealth, Luma Smart Waitlist, Phreesia Appointment Accelerator, Doctible EasyFill), EHR-specific add-ons (Curogram for CureMD/WebPT, DoctorConnect, CERTIFY ASAP List), cheap standalone tools ($25/month), and manual calling. The only gaps seen are feature limits inside incumbents: Jane does not support prioritization, appointment-type or patient restrictions, or custom messages, and SimplePractice's waitlist appears to be an intake list rather than a cancellation-fill tool. No evidence was found that clinics would buy a separate product to close these gaps.",
    "timing": "Timing evidence is weak and points the wrong way. Phreesia launched its product in 2021, Jane and NexHealth have shipped waitlist notifications, and new entrants are still appearing in 2026 (Patient Waitlist Management added to AlternativeTo in February 2026). The market is crowded and maturing, not opening.",
    "fit": "Unconfirmed assumptions. The builder is a solo software developer. Healthcare domain experience, access to clinic managers, and capital for HIPAA-grade infrastructure and EHR integrations are all unconfirmed. Competitors advertise 70-150+ EHR/PM integrations, which a solo developer is unlikely to match.",
    "risks": [
      "Incumbent coverage: Jane, Open Dental, NexHealth, Weave, Luma and Phreesia already offer automated or semi-automated cancellation-fill waitlists inside tools clinics already pay for.",
      "Crowded add-on market: DoctorConnect, Doctible, Curogram, CERTIFY, Novoflow and standalone tools priced from $25/month already target this workflow, which compresses price and differentiation.",
      "Integration burden: write-back or a reliable read of the schedule requires EHR/PM integrations. Without them, the product becomes a texting tool plus manual re-entry, which competes poorly with built-in features.",
      "Compliance and messaging: SMS consent, opt-out handling and HIPAA obligations add cost and liability for a solo builder.",
      "Eligibility complexity: refill rates are lower in specialties that require preparatory evaluations (Mayo paper), so simple time matching may not fill the hardest slots.",
      "Weak customer voice: no independent forum or review complaints were found saying existing waitlist tools fail. Most problem descriptions come from vendors selling a fix."
    ],
    "pilot": [
      "Before any build, interview 5 practice managers using a system without a native cancellation-fill feature (for example SimplePractice or a legacy PM). Ask about the last late cancellation, what it cost, and whether they already pay for Weave, NexHealth or similar. Stop if 4 of 5 already have a tool or report fewer than 2 unfilled late cancellations per week.",
      "If interviews find a segment without coverage, run a concierge test: staff-assisted SMS to consented patients for 2 weeks at 1-2 clinics. Success means at least 3 incremental slots filled per week per clinic and a manager's written willingness to pay at least $75/month. Stop if fewer than 1 incremental fill per week."
    ],
    "assumptions": [
      "The $49-149/location/month price band is a hypothesis, not observed willingness to pay.",
      "That segments exist where the scheduling system lacks adequate cancellation-fill (for example SimplePractice users) is inferred from documentation, not confirmed with customers.",
      "Staff time saved per cancellation (vendor estimates of 15-40 minutes) is unverified marketing.",
      "Vendor fill-rate claims (Phreesia 5.3 minutes, NexHealth about 20 minutes, Luma 95% at one customer) are not independently verified."
    ],
    "level": "costly-workaround",
    "verdict": "Pass",
    "verdictRationale": "The pain is real and measurable: unfilled late-cancellation slots, inconsistent refill workflows, and staff time spent working a list. But the evidence shows automatic or one-click waitlist offers are already standard in major practice platforms (Jane, Open Dental, NexHealth, Weave, Luma, Phreesia) and sold by many add-on vendors, some from $25/month. A solo builder without healthcare distribution or EHR integrations would be entering a crowded, commoditizing feature category, and no customer evidence was found that existing tools fall short. This would change to Watch or Interview with independent evidence of a sizable clinic segment, such as therapy practices on a PM that lacks cancellation fill, where managers say they would pay for a standalone fix and where the builder has direct access.",
    "nextStep": "Shelve the idea. If you want to test the one remaining angle, spend one hour checking whether SimplePractice or another large PM without native cancellation fill has public user requests for it, and drop the idea if none exist.",
    "evidence": "Researched report",
    "status": "Real pain; heavily served by incumbents",
    "evidenceLog": [
      {
        "observation": "Neurology outpatient clinics at a large academic institution (January-June 2018 data) found an average of 14.5% of appointments left unfilled because of late cancellations, compared with a 5% no-show rate. Late cancellations made up 46% of cancellation calls.",
        "label": "AAN abstract: neurology late-cancellation QI study",
        "url": "https://aan.com/MSA/Public/Events/AbstractDetails/42212",
        "sourceType": "research",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Late cancellations leave a measurable share of clinic capacity unused.",
        "level": "costly-workaround",
        "limitations": "Single academic neurology department, not independent clinics. It is a conference abstract, and it does not test a waitlist intervention."
      },
      {
        "observation": "Mayo Clinic Health System practice paper found inconsistent methods for refilling late-cancellation openings and no defined refill process understood by the whole care team. Refill rates were lower in specialties requiring preparatory evaluation and in high-demand departments. It recommends proactive use of the waiting list.",
        "label": "Management in Healthcare (2022): refilling late cancellations",
        "url": "https://hstalks.com/article/7336/download/",
        "sourceType": "research",
        "publishedAt": "2022",
        "observedAt": "2026-10-08",
        "supports": "Refill workflows are ad hoc, and eligibility complexity limits simple matching.",
        "level": "repeated-pain",
        "limitations": "Large health system, not independent clinics. Only the abstract was accessible, so numeric refill rates were not visible."
      },
      {
        "observation": "A facility receptionist job posting lists active monitoring of the patient cancellation list as a duty and requirement, alongside check-out and payment collection.",
        "label": "TealHQ job listing: Receptionist (Fac)",
        "url": "https://www.tealhq.com/job/receptionist-fac_7ea1a99e86a82c7ef8a8ce7dc083e81006cf3",
        "sourceType": "job",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Clinics assign paid staff time to working cancellation lists.",
        "level": "costly-workaround",
        "limitations": "Seen only in a search result. The page returned 403 on fetch, so the employer, date and clinic type are unverified. Shows a staffed duty, not willingness to buy software."
      },
      {
        "observation": "GetApp's summary of about 92 Jane user reviews says users like handling late cancellations through the waitlist but some want more control over rebooking and mention manual text notifications.",
        "label": "GetApp: Jane App user reviews summary",
        "url": "https://www.getapp.com/healthcare-pharmaceuticals-software/a/jane-app/reviews/",
        "sourceType": "review",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Customers of an incumbent use its built-in waitlist and see it as adequate, with minor gaps (counterevidence).",
        "level": "context",
        "limitations": "Seen only in a search-result summary. The page returned 403 on fetch, and individual reviews were not read."
      },
      {
        "observation": "Jane's wait list notifications hold canceled spots for eligible waitlisted clients and can send automatically after a buffer. The FAQ says there is no prioritization, no restriction by patient or appointment type, no custom message text, and the feature requires the Thrive or Legacy plan.",
        "label": "Jane guide: wait list notifications FAQ",
        "url": "https://jane.app/guide/wait-list-notifications-faq-troubleshooting-feature-development",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "A major allied-health platform already ships cancellation-fill. Its limits mark the only visible gaps.",
        "level": "context",
        "limitations": "Vendor documentation. It does not show whether the limits matter to buyers."
      },
      {
        "observation": "Jane pricing lists Balance $59, Practice $79 and Thrive $99 per month, with Thrive including automated patient waitlist management.",
        "label": "Jane: pricing page",
        "url": "https://jane.app/pricing",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Price anchor: waitlist automation is bundled into a roughly $99/month full practice platform.",
        "level": "context",
        "limitations": "A list price is an offer, not proof of how many clinics use the feature."
      },
      {
        "observation": "The NexHealth Waitlist reads ASAP and recall lists from the practice's record system, texts open slots filtered by provider and appointment type, books with one tap via its Synchronizer, and claims fills in about 20 minutes.",
        "label": "NexHealth: The New NexHealth Waitlist",
        "url": "https://www.nexhealth.com/resources/the-new-nexhealth-waitlist",
        "sourceType": "vendor",
        "publishedAt": "2025-07-17",
        "observedAt": "2026-10-08",
        "supports": "Well-funded engagement vendors already offer integrated, preference-aware waitlists.",
        "level": "context",
        "limitations": "Vendor marketing. The fill-time claim is unverified."
      },
      {
        "observation": "DoctorConnect's waitlist texts opted-in patients matching a canceled slot, gives it to the first to claim it with staff approval, and claims 100+ EHR/PM integrations. No pricing is published.",
        "label": "DoctorConnect: Waiting List Management feature page",
        "url": "https://doctorconnect.net/features/waiting-list-management/",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Standalone add-on vendors already sell the proposed workflow, including consent and staff approval.",
        "level": "context",
        "limitations": "Vendor marketing. Customer count and pricing are unknown."
      },
      {
        "observation": "A vendor comparison (March 2026, updated September 2026) lists DoctorConnect ARIA, Doctible EasyFill, MaxAssist, Clearwave, CERTIFY ASAP List and Phreesia as cancellation-fill products, all without public pricing.",
        "label": "DoctorConnect blog: cancellation fill software compared 2026",
        "url": "https://doctorconnect.net/best-patient-cancellation-fill-software-2026",
        "sourceType": "vendor",
        "publishedAt": "2026-03-19",
        "observedAt": "2026-10-08",
        "supports": "The category is crowded with funded competitors.",
        "level": "context",
        "limitations": "Written by a competitor in the category. Its claims about rivals are not independently verified."
      },
      {
        "observation": "AlternativeTo lists Patient Waitlist Management (added February 2026) as an AI waitlist tool with SMS and voice outreach, preference matching and EHR sync, starting at $25/month, with zero reviews. It names 10 alternatives.",
        "label": "AlternativeTo: Patient Waitlist Management",
        "url": "https://alternativeto.net/software/patient-waitlist-management/about",
        "sourceType": "review",
        "publishedAt": "2026-02",
        "observedAt": "2026-10-08",
        "supports": "Low-price new entrants are already crowding the niche, which limits pricing.",
        "level": "context",
        "limitations": "Directory listing with no reviews. It does not show that anyone buys it."
      }
    ],
    "sourceNote": "The sources establish that late-cancellation slot loss is real and that refill work is ad hoc. They also show cancellation-fill waitlists are already widely offered by incumbents and add-on vendors. No independent customer source showed unmet demand or willingness to pay for a new standalone tool.",
    "sources": [
      [
        "AAN abstract: neurology late-cancellation QI study",
        "https://aan.com/MSA/Public/Events/AbstractDetails/42212"
      ],
      [
        "Management in Healthcare (2022): refilling late cancellations",
        "https://hstalks.com/article/7336/download/"
      ],
      [
        "TealHQ job listing: Receptionist (Fac)",
        "https://www.tealhq.com/job/receptionist-fac_7ea1a99e86a82c7ef8a8ce7dc083e81006cf3"
      ],
      [
        "GetApp: Jane App user reviews summary",
        "https://www.getapp.com/healthcare-pharmaceuticals-software/a/jane-app/reviews/"
      ],
      [
        "Jane guide: wait list notifications FAQ",
        "https://jane.app/guide/wait-list-notifications-faq-troubleshooting-feature-development"
      ],
      [
        "Jane: pricing page",
        "https://jane.app/pricing"
      ],
      [
        "NexHealth: The New NexHealth Waitlist",
        "https://www.nexhealth.com/resources/the-new-nexhealth-waitlist"
      ],
      [
        "DoctorConnect: Waiting List Management feature page",
        "https://doctorconnect.net/features/waiting-list-management/"
      ],
      [
        "DoctorConnect blog: cancellation fill software compared 2026",
        "https://doctorconnect.net/best-patient-cancellation-fill-software-2026"
      ],
      [
        "AlternativeTo: Patient Waitlist Management",
        "https://alternativeto.net/software/patient-waitlist-management/about"
      ]
    ],
    "reviewedAt": "2026-10-08"
  },
  {
    "id": "field-proof",
    "name": "Fieldproof",
    "title": "Maintenance evidence that survives the handoff",
    "category": "Operations",
    "model": "B2B",
    "type": "Workflow software",
    "summary": "A lightweight repair-evidence record (photos, equipment IDs, checklist, open issues) for small property managers, competing against vendor portals already built into their property management software.",
    "buyer": "Small third-party residential property management firms (roughly 50-300 doors) that dispatch outside vendors; the owner-operator or maintenance coordinator feels the pain, the firm owner pays. Secondary pressure comes from rental owners who demand proof of repairs.",
    "problem": "Managers who take over buildings or vendors often inherit little or no maintenance history, and rental owners complain that managers bill repairs without work orders, photos, or itemized invoices. Firms hire maintenance coordinators partly to chase vendors, attach photos and documents, and close work orders only once completion is documented. The evidence shows the documentation burden is real, but it is mostly absorbed by staff time and existing software rather than a separate purchase.",
    "solution": "Manual-first: for one or two small PM firms, send vendors a no-login link per work order that requires before/after photos, an equipment label photo, a short completion checklist, and open-issue notes, then produce a one-page handoff record the PM can forward to the owner. Only build further if the record measurably reduces coordinator follow-up or owner disputes.",
    "revenue": "Hypothesis (unvalidated): $0.50-$1.00 per door per month with a ~$100/month minimum, positioned as an add-on rather than a replacement. Anchors: Property Meld lists $2.00/unit/month with a $200 monthly minimum; RentCheck sells per-door inspection plans with +$0.20/door add-ons including asset capture; CompanyCam starts at $63/month for one user. These are offers, not proof of buyers for this product.",
    "gap": "Incumbents already cover most of the workflow: AppFolio's vendor portal lets vendors add notes with up to 10 photos and mark work done; Property Meld lets vendors upload before/after photos; RentCheck offers time-stamped photos and appliance-label capture; CompanyCam sells photo documentation and shareable reports to contractors. The possible gap is narrow: firms whose PMS does not enforce photo or equipment capture at completion, and owner-facing proof of repairs for firms that want to reduce billing disputes. No source confirmed that this gap is unmet or that firms would pay separately for it.",
    "timing": "Timing evidence is weak. Job listings from 2026 show continued hiring of (including offshore, part-time) maintenance coordinators for documentation work, but nothing found indicates a new trigger such as regulation or a platform shift that makes a standalone evidence tool newly necessary.",
    "fit": "Unconfirmed assumptions: the builder can ship a mobile-friendly no-login capture link quickly; the builder has no confirmed access to property managers or vendors; no domain experience in property maintenance is confirmed; distribution would likely require PMS integrations (AppFolio, Buildium, Rentvine) that a solo developer may not be able to obtain.",
    "risks": [
      "Feature, not product: AppFolio, Property Meld, and RentCheck already support vendor photo upload, completion status, and appliance/asset capture inside tools managers already pay for.",
      "Vendors already juggle each PM's portal; another link adds unpaid work, and the PM, not the vendor, is the buyer, so adoption depends on enforcement the PM may not want to impose.",
      "The sharpest pain observed is owner distrust of PM billing, which is a misaligned-incentive problem: PMs who bill opaquely are unlikely to buy a transparency tool.",
      "Photos do not prove a repair was done correctly; disputes may still require invoices, vendor confirmation, or tenant verification.",
      "Small firms may solve it with coordinator labor (often low-cost offshore VAs) rather than new software."
    ],
    "pilot": [
      "Interview 8-10 small PM owners or maintenance coordinators about their last three disputed or repeat-visit work orders: what was missing, who chased it, how long it took, and which PMS feature they tried. Continue only if at least half describe a recent incident their current PMS did not resolve.",
      "Audit 20 recently closed work orders with two cooperating managers; count orders missing after photos, equipment ID, or unresolved-issue notes. Stop if fewer than 25% are missing material information.",
      "Run the manual evidence link with one vendor for 30 days; success means the vendor completes it on at least 80% of jobs without reminders and the manager reports reduced follow-up time.",
      "Ask for a paid pilot (e.g., $100/month for one portfolio). Stop if no manager commits after seeing a working record."
    ],
    "assumptions": [
      "Missing evidence at handoff causes repeat visits or disputes frequent enough to justify spend; no source quantified this.",
      "Small PM firms' existing PMS configurations do not enforce photo/equipment capture; not verified.",
      "The $0.50-$1.00 per door price range is a hypothesis anchored only on competitor list prices.",
      "Vendors will complete a separate evidence link; vendor willingness is untested."
    ],
    "level": "costly-workaround",
    "verdict": "Watch",
    "verdictRationale": "Independent sources show repeated pain (owners denied photos and work orders; managers inheriting buildings with almost no records) and a costly workaround (coordinators hired to attach photos, chase vendors, and close only documented work orders). However, the core capability is already offered by tools the buyer likely pays for (AppFolio vendor portal, Property Meld, RentCheck asset capture, CompanyCam), and no source showed managers seeking or paying for a separate evidence layer. The concept is likely a feature of existing platforms. This would move to Interview if conversations show that managers on a common PMS repeatedly lose equipment history or face owner disputes that their current vendor portal does not fix, and to Pass if interviews show the PMS photo features are adequate.",
    "nextStep": "Ask three small PM owners or coordinators to walk through their last disputed or repeat-visit work order and show what their current PMS captured; note whether the missing item was a tool gap or an enforcement gap.",
    "evidence": "Researched report",
    "status": "Pain observed; incumbents already cover the workflow; no spend for this offer",
    "evidenceLog": [
      {
        "observation": "A rental owner on BiggerPockets described repeated small repair charges ($100-$230) on statements with only one-line descriptions; industry commenters said a good PM should provide before and after photos and materials/labor breakdowns, and the owner planned to verify repairs by calling tenants.",
        "label": "BiggerPockets: 'Leaky Sink Charge on Statements' thread",
        "url": "https://www.biggerpockets.com/forums/52/topics/406994-leaky-sink-charge-on-statements?page=1",
        "sourceType": "community",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Owners want proof of completed repairs and currently verify manually",
        "level": "repeated-pain",
        "limitations": "Single thread; exact post date not shown (page shows relative age). Pain is owner distrust of PM billing, not PM-vendor handoff. Shows no willingness to pay for a tool."
      },
      {
        "observation": "Managers interviewed said they have taken over buildings with little or no paperwork ('only one piece of paper'), and advised asking former vendors for two years of invoices to reconstruct boiler repair history.",
        "label": "Cooperator News: 'Write That Down' on missing building records",
        "url": "https://cooperatornews.com/article/write-that-down",
        "sourceType": "news",
        "publishedAt": "2013-03",
        "observedAt": "2026-10-08",
        "supports": "Maintenance history is often lost at management/vendor handoff",
        "level": "repeated-pain",
        "limitations": "Dated (2013) and focused on NYC co-ops/condos; predates current PMS vendor portals. Anecdotal manager quotes, no frequency or cost."
      },
      {
        "observation": "PadSplit's maintenance coordinator listing includes attaching photos and files to work orders, closing out vendor-submitted work orders once complete, and following up with vendors on unfinished work orders and invoices.",
        "label": "PadSplit job listing: Maintenance Coordinator",
        "url": "https://jobs.techstars.com/companies/padsplit/jobs/37401355-maintenance-coordinator-two-keys",
        "sourceType": "job",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Firms pay staff to collect and attach work-order evidence and chase vendors",
        "level": "costly-workaround",
        "limitations": "Listing says 'Posted 6+ months ago'; pay not shown. Documentation is one duty among many; intent to hire, not a completed hire. PadSplit is a large operator, not the small-firm target."
      },
      {
        "observation": "An unnamed US property management company sought a part-time remote maintenance coordinator to log requests in AppFolio or similar, gather missing photos and details, track vendor status, and 'close tickets only after work is confirmed done and documented.'",
        "label": "OnlineJobs.ph listing: Remote Maintenance Coordinator",
        "url": "https://www.onlinejobs.ph/jobseekers/job/remote-maintenance-coordinator-1665095",
        "sourceType": "job",
        "publishedAt": "2026-06-09",
        "observedAt": "2026-10-08",
        "supports": "Documentation and vendor follow-up is handled by low-cost offshore labor alongside existing PMS",
        "level": "costly-workaround",
        "limitations": "One anonymous listing; 15 hours/week; pay shown only as '20000' with no currency. Also counterevidence: the workaround is cheap labor, which a tool must beat."
      },
      {
        "observation": "AppFolio's vendor portal lets vendors add notes with up to 10 photos per note, mark jobs 'Work Done' (moving them to review), create or upload invoices, download work order PDFs, and upload compliance documents; no vendor fee is mentioned.",
        "label": "AppFolio help: Vendor Portal",
        "url": "https://www.appfolio.com/help/vendor-portal",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Counterevidence: the dominant PMS already provides vendor photo and completion capture",
        "level": "context",
        "limitations": "Does not show whether photos can be required at completion or whether equipment identifiers are captured; does not show how consistently vendors use it."
      },
      {
        "observation": "Property Meld lists its Ops plan at $2.00 per unit per month with a $200 monthly minimum, aimed at management companies with 100+ doors, plus an after-hours add-on at $1.50 per unit, and a no-download responsive vendor interface.",
        "label": "Property Meld: pricing page",
        "url": "https://propertymeld.com/pricing/",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Price anchor for maintenance coordination software and evidence of a well-established incumbent",
        "level": "context",
        "limitations": "A list price is an offer, not proof of customers. Pricing page does not describe photo requirements or asset history."
      },
      {
        "observation": "RentCheck sells per-door inspection plans with time-stamped photo, 360 and video capture, maintenance issue tracking, PMS work order integration, and $0.20/door add-ons including asset capture and a Property Meld integration; its asset capture feature stores appliance label data (via OCR) linked to the unit to track maintenance history.",
        "label": "RentCheck: pricing page and asset capture feature",
        "url": "https://www.getrentcheck.com/pricing",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Counterevidence: equipment identification and photo evidence are already sold as small per-door add-ons",
        "level": "context",
        "limitations": "Base per-door prices were not visible in page text. Asset capture details come from https://getrentcheck.com/videos/how-to-capture-and-track-appliance-labels-with-rentcheck. Focused on inspections, not vendor completion."
      },
      {
        "observation": "CompanyCam lists Core at $63/month (1 user), Crew at $129/month (3 users), Scale at $199/month, billed annually, with job photo reports, live client updates, and client/subcontractor access.",
        "label": "CompanyCam: pricing page",
        "url": "https://companycam.com/pricing",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Contractor-side photo documentation with shareable reports already exists and is sold to the vendor, not the PM",
        "level": "context",
        "limitations": "Contractor-oriented; does not mention property managers specifically or equipment tracking. Price is an offer, not evidence of PM demand."
      }
    ],
    "sourceNote": "Sources establish that owners and managers experience missing repair evidence and that firms pay coordinators to chase documentation, but also that the major property and inspection platforms already offer vendor photo upload, completion status, and asset capture; no source shows anyone seeking or paying for a standalone evidence layer, and Reddit threads could not be retrieved.",
    "sources": [
      [
        "BiggerPockets: 'Leaky Sink Charge on Statements' thread",
        "https://www.biggerpockets.com/forums/52/topics/406994-leaky-sink-charge-on-statements?page=1"
      ],
      [
        "Cooperator News: 'Write That Down' on missing building records",
        "https://cooperatornews.com/article/write-that-down"
      ],
      [
        "PadSplit job listing: Maintenance Coordinator",
        "https://jobs.techstars.com/companies/padsplit/jobs/37401355-maintenance-coordinator-two-keys"
      ],
      [
        "OnlineJobs.ph listing: Remote Maintenance Coordinator",
        "https://www.onlinejobs.ph/jobseekers/job/remote-maintenance-coordinator-1665095"
      ],
      [
        "AppFolio help: Vendor Portal",
        "https://www.appfolio.com/help/vendor-portal"
      ],
      [
        "Property Meld: pricing page",
        "https://propertymeld.com/pricing/"
      ],
      [
        "RentCheck: pricing page and asset capture feature",
        "https://www.getrentcheck.com/pricing"
      ],
      [
        "CompanyCam: pricing page",
        "https://companycam.com/pricing"
      ]
    ],
    "reviewedAt": "2026-10-08"
  },
  {
    "id": "returns-intake",
    "name": "Return Desk",
    "title": "A returns intake desk for small equipment brands",
    "category": "Commerce",
    "model": "B2B",
    "type": "Managed service",
    "summary": "Collect the evidence and troubleshooting steps needed to route warranty claims quickly.",
    "buyer": "Small hardware or equipment brands with a growing support queue.",
    "problem": "Warranty requests arrive without serial numbers, useful photos, or a clear fault description. Support staff repeatedly ask for the same missing information before they can make a decision.",
    "solution": "A branded intake flow plus a staffed triage desk following the brand’s approved troubleshooting and warranty rules. Deliver a complete case to the decision maker; never invent eligibility or promise refunds.",
    "revenue": "Test a monthly minimum plus a per-completed-case fee. Separate straightforward intake from skilled technical diagnosis.",
    "gap": "Hypothesis: smaller brands will buy a specialized intake service rather than hire another support agent or configure a larger support system.",
    "risks": [
      "Product-specific training can consume the margin.",
      "Poor troubleshooting can frustrate customers or cause unsafe use.",
      "Seasonal or batch defects can cause sudden demand spikes."
    ],
    "pilot": [
      "Choose one brand and one product line.",
      "Review fifty historical cases and define an approved intake checklist.",
      "Run a paid pilot measuring case completeness, resolution time, escalations, and cost."
    ],
    "timing": "Start with a brand that has an established product and repeatable support volume.",
    "evidence": "Concept brief",
    "status": "Unvalidated hypothesis"
  },
  {
    "id": "grant-calendar",
    "name": "Grant Trail",
    "title": "Post-award obligation register for small nonprofits",
    "category": "Operations",
    "model": "B2B",
    "type": "Workflow software",
    "summary": "A shared register of grant reporting obligations, owners, and supporting evidence for nonprofits that have outgrown a spreadsheet but not reached a full grants platform.",
    "buyer": "Executive directors or development/operations leads at small nonprofits (roughly 5-20 active foundation and government grants, no dedicated grants manager). The executive director usually both feels the pain and approves spend.",
    "problem": "Each award adds interim reports, final reports, budget tracking and compliance terms that small teams track in spreadsheets, calendars, or ad-hoc Airtable/Asana setups. Practitioners describe deadlines slipping and smaller funders 'slipping through the cracks', and organizations large enough to hire are posting roles whose core duty is a master calendar of post-award deadlines. CEP grantee data puts reporting and monitoring at about 8 hours per grant per year, so the cost per grant is modest; the larger risk is a missed or under-documented report.",
    "solution": "Start manual: read each award letter, build a confirmed obligation register (due dates, required content, budget lines, owner, internal buffer date), and send reminders plus a pre-report evidence checklist. Deliver it as a lightweight shared tool or a structured Airtable/Sheets base. Only productize after several organizations renew.",
    "revenue": "Hypothesis (untested): $30-$80/month or a $300-$800 annual subscription, plus an optional one-time setup service (assumption: $250-$750 per organization for award-letter intake). Anchors: Instrumentl Discover $299/month annual and Pre-Award (with award-letter deadline extraction) $499/month annual; Fluxx Grantseeker core is free with a $24.99/month premium tier (2019 announcement). Those anchors put a hard ceiling on price and a free floor.",
    "gap": "Alternatives: spreadsheets, Airtable/Asana templates, free Fluxx Grantseeker, Bloomerang's grant module (CRM users), Instrumentl, Grantable, OpenGrants, and hired grants staff or consultants. Foundant retired GrantHub, a long-standing affordable small-shop tracker, on 2026-01-31. The possible gap is an affordable, post-award-only register with human-confirmed requirements for organizations that do not want a prospecting suite. This is unconfirmed: Instrumentl already extracts deadlines and requirements from award letters, and free tools already track deadlines.",
    "timing": "Moderate. GrantHub's January 2026 sunset displaced small-shop users, and Instrumentl actively ran a migration campaign for them. That window may already have closed. No evidence found that funder reporting burdens are increasing for small private-grant recipients.",
    "fit": "Unconfirmed assumptions: the builder (solo software developer) has no confirmed nonprofit or grants-management experience, no confirmed access to executive directors, and limited capital. Building a simple register is technically easy. The hard parts are reaching price-sensitive buyers and reading award terms accurately, which needs domain knowledge or a partner.",
    "risks": [
      "Free and low-cost alternatives already cover deadline tracking: free Fluxx Grantseeker core, Airtable/Asana templates, spreadsheets, and grant modules in donor CRMs like Bloomerang.",
      "Instrumentl, a well-funded incumbent, already offers award-letter deadline and requirement extraction ($499/month annual tier), targeted GrantHub migrants with a 25% discount, and could bundle post-award features down-market.",
      "Small nonprofits are price-sensitive and per-grant reporting time is modest (about 8 hours per grant per year in CEP data), which weakens a willingness-to-pay case.",
      "Funder requirements vary by award; a register that misreads terms creates liability. The product must preserve source text and not generate outcome claims.",
      "Most direct pain signals found are indirect (a third-party summary of Reddit posts, job postings at mid-size organizations); no small-nonprofit buyer was observed paying specifically for a post-award register."
    ],
    "pilot": [
      "Interview 10 executive directors or development leads at nonprofits with 5-20 active grants (including former GrantHub users). Ask about the last report that was late or rushed, what it cost, and what they use now. Continue only if 5+ describe a recent incident and 3+ are unhappy with their current tool.",
      "Offer a paid manual setup ($250-$750 assumption): review award letters for 3 organizations and deliver a confirmed obligation register with reminders. Success: 3 paid setups within 6 weeks. Stop: fewer than 2 pay, or buyers say a free template is enough.",
      "Run one full reporting cycle for paying pilots. Measure missed requirements, preparation hours versus their prior report, and whether they agree to a paid annual renewal. Stop if fewer than half would renew at the hypothesized price."
    ],
    "assumptions": [
      "The target segment (5-20 active grants, no grants manager) is large enough and reachable; no count was found.",
      "Price ranges for subscription and setup are hypotheses, not observed willingness to pay.",
      "Former GrantHub users have not all settled on a replacement.",
      "Human-confirmed requirements are valued enough over automated extraction to justify a separate tool.",
      "The Reddit quotes summarized by a third-party page are accurate and representative; they were not fetched directly."
    ],
    "level": "existing-spend",
    "verdict": "Watch",
    "verdictRationale": "Spend on post-award compliance exists, but mostly as staff time at mid-size organizations (job posts that center on a master calendar of post-award deadlines), plus paid suites priced well above small budgets. Direct small-nonprofit pain is visible only second-hand. The landscape is crowded at both ends: free tools (Fluxx Grantseeker, templates) cover basic tracking, and Instrumentl already extracts deadlines from award letters and courted GrantHub migrants. With unconfirmed founder access to nonprofit buyers, this does not yet justify interviews ahead of stronger ideas. It would move to Interview if first-hand conversations or forum threads showed small nonprofits leaving free tools or paying consultants specifically for post-award tracking. It would move to Pass if former GrantHub users report being well served by free or existing tools.",
    "nextStep": "Spend one hour reading the r/nonprofit and r/grantwriting threads listed on the webmatrices summary page directly in a browser. Count how many posters run multiple active grants with no system, and what they say they would pay for, before deciding whether to run interviews.",
    "evidence": "Researched report",
    "status": "Adjacent spend exists; crowded, free alternatives; offer untested",
    "evidenceLog": [
      {
        "observation": "Instrumentl lists Discover at $299/month (annual) with deadline tracking and tasks, Pre-Award at $499/month adding Award Assistant to 'Extract deadlines and requirements from award letters', and Full Lifecycle at $999/month with spenddown and budget-vs-actuals.",
        "label": "Instrumentl: pricing page",
        "url": "https://www.instrumentl.com/pricing",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Price anchors, and the counterevidence that an incumbent already automates award-letter obligation extraction.",
        "level": "context",
        "limitations": "List prices are offers, not proof of small-nonprofit customers. The page does not show how many buyers use post-award features."
      },
      {
        "observation": "Instrumentl's GrantHub migration page targets users of Foundant's retiring GrantHub, claims '103' (elsewhere '93+') GrantHub users have moved, and offered 25% off for subscribing before December 31, 2025.",
        "label": "Instrumentl: GrantHub migration page",
        "url": "https://www.instrumentl.com/granthub-migration",
        "sourceType": "vendor",
        "publishedAt": "2025",
        "observedAt": "2026-10-08",
        "supports": "Timing: GrantHub's sunset displaced small-shop users, and an incumbent actively competed for them.",
        "level": "context",
        "limitations": "Self-reported, internally inconsistent migration counts. It does not show how many GrantHub users exist or where the rest went."
      },
      {
        "observation": "A grant software guide says Foundant's GrantHub, 'one of the most-recommended affordable options for small-shop grant tracking', has been discontinued. It notes many small nonprofits 'run happily for years on a discovery subscription plus a disciplined tracking spreadsheet' and that manual tracking breaks as volume grows.",
        "label": "Beancount.io blog: small-nonprofit grant software guide",
        "url": "https://beancount.io/blog/2026/09/18/grant-management-software-small-nonprofits-fluxx-instrumentl-smartsimple-granthub-guide",
        "sourceType": "research",
        "publishedAt": "2026-09-18",
        "observedAt": "2026-10-08",
        "supports": "Gap after GrantHub, and the counterevidence that spreadsheets suffice for many small nonprofits.",
        "level": "context",
        "limitations": "Written by an accounting-software vendor's blog. Opinion, not survey data. The page itself shows no date; the date comes from the URL."
      },
      {
        "observation": "Fluxx announced Grantseeker Premium at $24.99/month while stating it 'remains committed to offering the core components of Grantseeker for free.' The current product page positions Grantseeker for organizations with 10-50+ active grants and lists calendar views of deadlines, tasks and ownership.",
        "label": "Fluxx: Grantseeker premium announcement",
        "url": "https://www.fluxx.io/blog/announcing-grantseeker-prospecting-and-premium-features",
        "sourceType": "vendor",
        "publishedAt": "2019-10-24",
        "observedAt": "2026-10-08",
        "supports": "Counterevidence: a free or very low-cost deadline-tracking alternative exists, which caps pricing.",
        "level": "context",
        "limitations": "The 2019 pricing may have changed; the current product page lists no price and offers only demos."
      },
      {
        "observation": "Bloomerang's grant management feature lets users track deadlines, 'Create and assign tasks for deadlines, reports, and check-ins', set reminders for reports, and store proposals and reports centrally.",
        "label": "Bloomerang: grant management feature page",
        "url": "https://bloomerang.com/features/grant-management",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Counterevidence: donor CRMs that small nonprofits already pay for are bundling report-deadline tracking.",
        "level": "context",
        "limitations": "Marketing page with no pricing or usage data. Depth of post-award features is not shown."
      },
      {
        "observation": "A third-party app-idea page summarizes Reddit posts about grant deadline pain, including r/nonprofit threads 'How do you keep track of deadlines for multi-year...' ('Smaller family/local foundations have been slipping through the cracks', 21 comments) and 'we don't have a system in place to keep track of reporting and often fall behind', plus an r/grantwriting thread on software for reminders that reporting is due.",
        "label": "Webmatrices: GrantClock app idea (Reddit summary)",
        "url": "https://webmatrices.com/app-ideas/grant-clock",
        "sourceType": "community",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Repeated pain: independent practitioners report losing track of grant reporting deadlines.",
        "level": "attention",
        "limitations": "Second-hand: the Reddit threads could not be fetched (reddit.com blocked for the fetch tool) and were not verified. Points and comment counts are small, post dates are not given, and some quotes concern application deadlines rather than post-award reports. Another builder has pitched the same idea."
      },
      {
        "observation": "In an Airtable Community nonprofits thread (June 2026), one practitioner tracks deadlines for LOIs, proposals, interim reports and final reports in Airtable, with a Zapier link to Asana for reminders, and notes the Zapier connection breaks often.",
        "label": "Airtable Community: grant management thread",
        "url": "https://community.airtable.com/nonprofits-85/anyone-use-airtable-to-manage-grant-applications-and-programmes-48141",
        "sourceType": "community",
        "publishedAt": "2026-06-04",
        "observedAt": "2026-10-08",
        "supports": "Workaround: small teams stitch together general tools to track interim and final reporting deadlines.",
        "level": "repeated-pain",
        "limitations": "One practitioner; other replies are consultants or vendors. The original poster is a grant-giving charity, not a grant recipient. The thread shows a workaround, not its cost or dissatisfaction strong enough to switch."
      },
      {
        "observation": "The Hastings Center posted a part-time (20-30% or consulting) Grants Manager role to manage grants pre- to post-award, oversee grant reporting, review award letters and grant agreements, and track multi-year grants, with occasional evening and weekend work to meet grant deadlines.",
        "label": "The Hastings Center: part-time Grants Manager job description",
        "url": "https://www.thehastingscenter.org/wp-content/uploads/Grants-Manager-Job-Desc.pdf",
        "sourceType": "job",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Existing spend: smaller organizations budget fractional staff time for post-award tracking and reporting.",
        "level": "existing-spend",
        "limitations": "A job post shows intent to spend, not a hire. Undated. A research institute with federal grants, not a typical small community nonprofit. Salary not stated."
      },
      {
        "observation": "Meals On Wheels of Tarrant County is hiring a full-time Funding & Compliance Coordinator for 'post-award grant monitoring, tracking, and reporting', time-sensitive monthly grant billings and audit preparation, using Excel and Access.",
        "label": "Meals On Wheels of Tarrant County: Funding & Compliance Coordinator job",
        "url": "https://mealsonwheels.org/careers/funding-compliance-coordinator",
        "sourceType": "job",
        "publishedAt": null,
        "observedAt": "2026-10-08",
        "supports": "Existing spend on staff for post-award tracking; the tools named are spreadsheets and databases rather than a grants platform.",
        "level": "existing-spend",
        "limitations": "A mid-size organization, larger than the target buyer. Undated; salary not listed. Shows intent to hire, not software spend."
      },
      {
        "observation": "CEP's Grantee Perception Report data shows grantees estimate about 8 hours per year on monitoring, reporting and evaluation for the typical grant, and often 30+ hours over a grant's lifetime.",
        "label": "Center for Effective Philanthropy: blog on reporting requirements",
        "url": "https://cep.org/blog/why-do-we-bother-the-tragedy-of-foundation-reporting-requirements/",
        "sourceType": "research",
        "publishedAt": "2021-11-10",
        "observedAt": "2026-10-08",
        "supports": "Sizing the cost of the workflow: the per-grant time burden is real but modest.",
        "level": "costly-workaround",
        "limitations": "Self-estimates from 2021 that include writing and evaluation, not only tracking. Not specific to small nonprofits, and it does not measure missed deadlines."
      }
    ],
    "sourceNote": "The sources establish that paid tools and staff roles exist for post-award tracking and that practitioners report losing track of deadlines. They do not establish that small nonprofits will pay for a separate post-award register over free tools or incumbents, and the most direct community evidence is second-hand.",
    "sources": [
      [
        "Instrumentl: pricing page",
        "https://www.instrumentl.com/pricing"
      ],
      [
        "Instrumentl: GrantHub migration page",
        "https://www.instrumentl.com/granthub-migration"
      ],
      [
        "Beancount.io blog: small-nonprofit grant software guide",
        "https://beancount.io/blog/2026/09/18/grant-management-software-small-nonprofits-fluxx-instrumentl-smartsimple-granthub-guide"
      ],
      [
        "Fluxx: Grantseeker premium announcement",
        "https://www.fluxx.io/blog/announcing-grantseeker-prospecting-and-premium-features"
      ],
      [
        "Bloomerang: grant management feature page",
        "https://bloomerang.com/features/grant-management"
      ],
      [
        "Webmatrices: GrantClock app idea (Reddit summary)",
        "https://webmatrices.com/app-ideas/grant-clock"
      ],
      [
        "Airtable Community: grant management thread",
        "https://community.airtable.com/nonprofits-85/anyone-use-airtable-to-manage-grant-applications-and-programmes-48141"
      ],
      [
        "The Hastings Center: part-time Grants Manager job description",
        "https://www.thehastingscenter.org/wp-content/uploads/Grants-Manager-Job-Desc.pdf"
      ],
      [
        "Meals On Wheels of Tarrant County: Funding & Compliance Coordinator job",
        "https://mealsonwheels.org/careers/funding-compliance-coordinator"
      ],
      [
        "Center for Effective Philanthropy: blog on reporting requirements",
        "https://cep.org/blog/why-do-we-bother-the-tragedy-of-foundation-reporting-requirements/"
      ]
    ],
    "reviewedAt": "2026-10-08"
  },
  {
    "id": "lesson-loop",
    "name": "Lesson Loop",
    "title": "A practice planner for adult music students",
    "category": "Education",
    "model": "B2C",
    "type": "Consumer software",
    "summary": "Turn a teacher’s lesson notes into a realistic weekly practice routine.",
    "buyer": "Adult learners taking regular private music lessons.",
    "problem": "Students leave lessons with several things to practice but little guidance on how to fit them into short sessions. By the next lesson, they have repeated familiar pieces and avoided difficult exercises.",
    "solution": "Students or teachers enter lesson goals and available practice time. The planner creates short sessions, records what felt difficult, and summarizes questions for the next lesson. Start with user-entered instructions rather than automated performance grading.",
    "revenue": "Test a low-cost student subscription or a teacher plan covering invited students.",
    "gap": "Hypothesis: continuity between lessons matters more to this segment than a broad library of video instruction.",
    "risks": [
      "Students may abandon planning tools as quickly as they abandon practice.",
      "Teachers may not want another administrative task.",
      "A generic checklist or existing practice app may be sufficient."
    ],
    "pilot": [
      "Recruit ten adult learners through two teachers.",
      "Run a four-week manual practice planning pilot.",
      "Measure repeat use, practice completion, teacher feedback, and willingness to pay."
    ],
    "timing": "Target learners already paying for lessons; motivation and willingness to spend are still hypotheses to test.",
    "evidence": "Concept brief",
    "status": "Unvalidated hypothesis"
  },
  {
    "id": "care-handoff",
    "name": "Care Handoff",
    "title": "A shared task handoff for family caregivers",
    "category": "Healthcare",
    "model": "B2C",
    "type": "Consumer software",
    "summary": "Help families coordinate practical caregiving tasks without losing context in a group chat.",
    "buyer": "Families sharing responsibility for an older relative’s everyday support.",
    "problem": "Appointments, groceries, transport, and household tasks pass through group messages. People cannot tell what has been handled, what changed, or who is responsible next.",
    "solution": "A shared task board and brief handoff log with owners, dates, and confirmed completion. Keep the first version focused on practical coordination rather than medical advice or medication decisions.",
    "revenue": "Test a family subscription, while exploring whether a care organization is a better paying customer.",
    "gap": "Hypothesis: a focused handoff workflow is useful enough to displace a family group chat and shared calendar.",
    "risks": [
      "Consumer willingness to pay may be weak.",
      "Sensitive family information requires careful privacy design.",
      "All participating caregivers must adopt the workflow for it to be useful."
    ],
    "pilot": [
      "Interview families about a recent missed handoff.",
      "Run a two-week coordination pilot with five households.",
      "Measure active participation, duplicate work, missed tasks, and willingness to continue paying."
    ],
    "timing": "Recruit around a clear coordination transition, such as a new caregiver joining the family routine.",
    "evidence": "Concept brief",
    "status": "Unvalidated hypothesis"
  },
  {
    "id": "distributor-deduction-disputes",
    "name": "Chargeback Check",
    "title": "Distributor deduction reconciliation for emerging food brands",
    "category": "Food and beverage",
    "model": "B2B",
    "type": "Workflow software",
    "summary": "A tool that matches UNFI and KeHE deductions to orders and flags disputable ones before dispute windows close. The pain is real and costly for small natural food brands, but funded software and done-for-you recovery services already target it, and every source in this report was seen only as a search summary.",
    "buyer": "Founders, operations leads or part-time bookkeepers at emerging natural and specialty food and beverage brands selling through UNFI and KeHE, roughly at the stage before they have a finance team. The founder usually approves spend; a bookkeeper or contractor does the work.",
    "problem": "Distributors net deductions (chargebacks, promotional billbacks, spoilage, shortages, fees) against invoices, often leaving small brands paid far less than they invoiced. Founders and advisors describe (per search summaries, unverified) payouts of $21,000 on $32,000 invoiced and $13,345 on $68,267 invoiced, although much of those gaps were agreed fees or legitimate returns. One brand posted a part-time contract role to validate each charge against POs, invoices and EDI data because its deductions were unclear, unreconciled and sometimes overstated. Two suppliers have sued UNFI over deductions. Disputes need documentation and are time-limited, so unreviewed invalid deductions are lost.",
    "solution": "If pursued at all: a low-cost, self-serve reconciliation tool for brands under roughly $1-2M in distributor sales. It would import distributor deduction exports and EDI/PO data, auto-match each deduction to an order and promotion, flag likely-invalid items such as duplicates and shortages, track dispute deadlines, and assemble the backup document packet. The brand files the dispute itself. No commission on recoveries.",
    "revenue": "Hypothesis (unvalidated): $49-149 per month flat for brands too small to want a commission-based service. No price for comparable deduction software was verified. Glimpse charges a monthly fee plus an unpublished commission; Promomash and Vividly price by volume or quote. The True Sea Moss contract role (about 15-20 hours per week) suggests the manual alternative costs more than this band, but its pay was not seen.",
    "gap": "Alternatives: done-for-you services and software (Glimpse, Promomash CPGenius Deductions, Margin Wizard, Floret, Vividly, SPS Commerce/SupplyPike revenue recovery, ValenceIntel), deductions consultants (one ex-UNFI founder runs Natural Food Ally), part-time contractors, spreadsheets, free guides from SPS/SupplyPike and Foodbevy, and accepting the losses. KeHE's reported small-supplier administrative allowance program may also bundle some launch fees. The only possible gap seen is the smallest brands, whose invalid-deduction dollars may be too small for commission-based services to pursue. That gap was not confirmed with customers, and Floret's free pilot and Glimpse's discounts suggest vendors already court small brands.",
    "timing": "Mixed. Lawsuits against UNFI and a reported $10M round for Glimpse in 2025 (search summary, unverified) show the problem is getting attention. The same attention has drawn several funded entrants and an EDI incumbent, so the window for a new solo product looks to be closing rather than opening.",
    "fit": "Unconfirmed assumptions. The builder is a solo software developer. Natural-foods industry experience, access to brand founders, familiarity with KeHE Connect and UNFI supplier portals and EDI data, and capital are all unconfirmed. Whether distributor portals offer clean data exports is unverified, so the product may depend on manual uploads.",
    "risks": [
      "Crowded, funded competition: Glimpse ($10M Series A and 125+ brands claimed, per search summaries, unverified), Promomash, Vividly, Margin Wizard, Floret, and SPS Commerce/SupplyPike already address distributor deductions.",
      "Buyers may prefer done-for-you recovery: a commission-only or low-fee service that files disputes for them beats a tool that still requires their time.",
      "Recoverable value may be small: much of the reported payout gap is agreed fees, allowances, spoilage and retailer returns, not invalid deductions, so the dollars a tool could recover for a small brand may not justify a subscription.",
      "Data access: deduction data lives in distributor portals with changing formats and unverified export options; integration upkeep could be heavy for one developer.",
      "Evidence quality: every source in this report was seen only through search summaries because page fetching failed, so quotes and figures are unverified.",
      "No independent customer complaints about existing deduction tools were found."
    ],
    "pilot": [
      "Before building, verify the sources by reading the pages directly, then interview 6 founders or bookkeepers of brands with under $2M in UNFI/KeHE sales. Ask about the last payout they reconciled, hours spent, dollars disputed and recovered, and whether they have tried Glimpse, Floret or Promomash. Stop if 4 of 6 already use a service or report under $500 per month of invalid deductions.",
      "If a segment survives, run a 4-week concierge test: reconcile 2-3 brands' last 90 days of deductions by hand from their exports and produce a dispute packet. Success means at least $1,000 in disputable deductions identified per brand and 2 brands agreeing in writing to pay at least $79 per month. Stop if fewer than 2 brands find disputable items worth more than the fee."
    ],
    "assumptions": [
      "The $49-149 per month price is a hypothesis, not observed willingness to pay.",
      "That the smallest brands are underserved by commission-based services is inferred, not confirmed.",
      "The 2-3% (and 3% of turnover) invalid-deduction figures come from vendors and one employer and are unverified.",
      "It is assumed brands can export deduction and order data in a usable form without portal scraping.",
      "All quoted figures were seen in search summaries only and must be re-verified against the original pages."
    ],
    "level": "costly-workaround",
    "verdict": "Pass",
    "verdictRationale": "The problem is real and costly. A brand is paying for a part-time contractor to validate and dispute UNFI and KeHE deductions, founders describe large invoice-to-payout gaps, and two suppliers have sued UNFI. But the workflow is already the target of a venture-funded specialist (Glimpse), several trade-spend platforms (Promomash, Vividly, Margin Wizard, Floret) and an EDI incumbent (SPS Commerce/SupplyPike), several of which offer free pilots, discounts or commission pricing that suits small brands. A solo developer without industry access would be entering late with a self-serve tool that still asks founders for time, and no customer evidence showed that existing options fail. Confidence is limited because every source was seen only via search summaries. This would move to Watch or Interview with verified evidence that sub-$1M brands are turned away by or dissatisfied with current services, plus direct access to a founder community.",
    "nextStep": "Shelve. If revisiting, first re-fetch the job post, both Grocery Dive articles and the Foodbevy podcast to verify the figures, then look for founder complaints about Glimpse or Promomash pricing or minimums in natural-foods founder communities.",
    "evidence": "Researched report",
    "status": "Costly pain confirmed by a job post and lawsuits; crowded with funded vendors; sources unverified",
    "sourceNote": "Page fetching failed for every site during this run (DNS errors from the fetch tool and proxy refusals for direct requests), so all ten entries rely on search-result summaries and are labeled unverified. They show that distributor deductions cost small food brands real money and staff time, and that multiple funded vendors and services already sell reconciliation and recovery. No independent source showed unmet demand for a new self-serve tool. A link check on 2026-10-09 found 6 of the 10 remaining source pages load (the rest block automated requests); page contents were not re-read. Entries whose pages returned 404 were removed.",
    "reviewedAt": "2026-10-09",
    "sources": [
      [
        "Djinni job post: Distributor Deductions and Chargeback Specialist (UNFI / KeHE)",
        "https://djinni.co/jobs/831947-distributor-deductions-and-chargeback-special/"
      ],
      [
        "Foodbevy Startup To Scale podcast, ep. 98: distributor deductions and chargebacks",
        "https://podcast.foodbevy.com/1832151/episodes/12408975-98-breaking-down-distributor-deductions-and-chargebacks"
      ],
      [
        "The Good Food CFO: KeHE Uncovered case study",
        "https://thegoodfoodcfo.substack.com/p/kehe-uncovered-real-case-study-of-3a6"
      ],
      [
        "Grocery Dive: class action over UNFI supplier deductions",
        "https://www.grocerydive.com/news/unfi-class-action-lawsuit-payment-discounts-grocery-natural-foods/732132/"
      ],
      [
        "Grocery Dive: Omaha Industries sues UNFI over chargebacks",
        "https://www.grocerydive.com/news/omaha-sues-grocery-distributor-unfi-chargebacks-giant-food/705044/"
      ],
      [
        "Food Industry Executive: Glimpse raises $10M for CPG deduction management",
        "https://foodindustryexecutive.com/2025/04/glimpse-secures-10m-to-automate-deduction-management-for-cpg-brands/"
      ],
      [
        "Foodbevy: Top 5 Deduction Management Platforms for CPG Brands",
        "https://www.foodbevy.com/?p=38999"
      ],
      [
        "Promomash: plans",
        "https://www.promomash.com/plans"
      ],
      [
        "G2: Vividly product page",
        "https://www.g2.com/products/vividly"
      ],
      [
        "SPS Commerce: Revenue Recovery for KeHE",
        "https://www.spscommerce.com/?p=779142"
      ]
    ],
    "evidenceLog": [
      {
        "observation": "A contract job post for a 'Distributor Deductions and Chargeback Specialist (UNFI / KeHE)' at True Sea Moss offers a part-time (about 15-20 hours per week), remote 1099 role. It says the brand's distributor deductions are frequently unclear, unreconciled to actual orders, and sometimes overstated. Duties include monitoring distributor portals, validating each charge against purchase orders, invoices and EDI/SPS Commerce data, filing disputes, and giving Finance a reconciled weekly picture. The search summary also said the post estimates uncontested UNFI and KeHE deductions at about 3% of turnover.",
        "label": "Djinni job post: Distributor Deductions and Chargeback Specialist (UNFI / KeHE)",
        "url": "https://djinni.co/jobs/831947-distributor-deductions-and-chargeback-special/",
        "sourceType": "job",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "A small food/beverage brand is willing to pay for recurring manual deduction reconciliation and dispute work.",
        "level": "costly-workaround",
        "limitations": "WebFetch failed (DNS lookup error) and direct HTTPS was refused by the egress proxy, so the page itself was not read. Based only on the search-result summary seen on 2026-10-09; details unverified. One employer; the 3% figure is the employer's estimate. A job post shows intent to spend, not a hire. Posting date unknown."
      },
      {
        "observation": "Foodbevy's Startup To Scale episode 98 tells the story of TeaSquares, which invoiced KeHE about $32,000 at wholesale and was paid roughly $21,000 after chargebacks, fees and returned product, after a Jewel-Osco launch lost its buyer contact. The episode says distributor chargebacks cost brands millions of dollars a year and that many are charged in error, leaving brands to contest them.",
        "label": "Foodbevy Startup To Scale podcast, ep. 98: distributor deductions and chargebacks",
        "url": "https://podcast.foodbevy.com/1832151/episodes/12408975-98-breaking-down-distributor-deductions-and-chargebacks",
        "sourceType": "customer",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "A founder reports a large share of distributor revenue lost to deductions.",
        "level": "costly-workaround",
        "limitations": "WebFetch failed (DNS lookup error) and direct HTTPS was refused by the egress proxy, so the page itself was not read. Based only on the search-result summary seen on 2026-10-09; details unverified. Much of this loss came from legitimate retailer returns of unsold product, which software would not recover. The search summaries gave slightly different accounts of the year and breakdown. Single brand."
      },
      {
        "observation": "The Good Food CFO episode 'KeHE Uncovered: Real Case Study of a Food Brand's First Payout' describes a brand that invoiced KeHE $68,267 and received $13,345 on its first payout.",
        "label": "The Good Food CFO: KeHE Uncovered case study",
        "url": "https://thegoodfoodcfo.substack.com/p/kehe-uncovered-real-case-study-of-3a6",
        "sourceType": "community",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "Emerging brands face large, confusing gaps between invoiced and paid amounts at distributors.",
        "level": "repeated-pain",
        "limitations": "WebFetch failed (DNS lookup error) and direct HTTPS was refused by the egress proxy, so the page itself was not read. Based only on the search-result summary seen on 2026-10-09; details unverified. Another search summary attributed the gap partly to intro allowances, free fills, spoilage allowances, promotional fees and an initial-PO payment hold, most of which are agreed terms rather than invalid deductions. The breakdown was not visible. Written by a finance advisor to food brands, who may sell related services."
      },
      {
        "observation": "Grocery Dive reported a proposed class action filed in Rhode Island state court by NYSM Organics, a small chocolate and plant-based cheese maker, alleging UNFI squeezes suppliers with 'opaque and constant deductions' that can leave suppliers owing UNFI money and that are 'often crippling for new and smaller natural food brands'. UNFI said it values supplier relationships and was reviewing the complaint.",
        "label": "Grocery Dive: class action over UNFI supplier deductions",
        "url": "https://www.grocerydive.com/news/unfi-class-action-lawsuit-payment-discounts-grocery-natural-foods/732132/",
        "sourceType": "news",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "Small natural-food suppliers see distributor deductions as opaque and financially serious enough to litigate.",
        "level": "repeated-pain",
        "limitations": "WebFetch failed (DNS lookup error) and direct HTTPS was refused by the egress proxy, so the page itself was not read. Based only on the search-result summary seen on 2026-10-09; details unverified. The quoted phrases come from the search summary of the article, not a page read directly. Allegations only; case status not checked. Publication year not visible in the snippet."
      },
      {
        "observation": "Grocery Dive reported that pet food supplier Omaha Industries sued UNFI over chargebacks that began in October 2022 and reached $268,816.94 on more than $326,780 of product sold to UNFI. The contract allowed deductions for product deemed unacceptable, so the dispute is over their validity.",
        "label": "Grocery Dive: Omaha Industries sues UNFI over chargebacks",
        "url": "https://www.grocerydive.com/news/omaha-sues-grocery-distributor-unfi-chargebacks-giant-food/705044/",
        "sourceType": "news",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "A second, independent supplier reports chargebacks large enough to dispute in court.",
        "level": "repeated-pain",
        "limitations": "WebFetch failed (DNS lookup error) and direct HTTPS was refused by the egress proxy, so the page itself was not read. Based only on the search-result summary seen on 2026-10-09; details unverified. Pet food, not human food. Allegations only. The dispute turns on contract terms and product quality, which a tracking tool would not settle."
      },
      {
        "observation": "Food Industry Executive reported that Glimpse raised $10M to automate deduction management for CPG brands. Search summaries say Glimpse imports, categorizes and disputes deductions, especially from KeHE and UNFI, charges a low monthly fee plus a commission on recovered funds, claims a 4-5x average ROI, and reported more than 125 brands in April 2025.",
        "label": "Food Industry Executive: Glimpse raises $10M for CPG deduction management",
        "url": "https://foodindustryexecutive.com/2025/04/glimpse-secures-10m-to-automate-deduction-management-for-cpg-brands/",
        "sourceType": "news",
        "publishedAt": "2025-04",
        "observedAt": "2026-10-09",
        "supports": "A venture-funded competitor already targets exactly this workflow for small natural brands (counterevidence).",
        "level": "context",
        "limitations": "WebFetch failed (DNS lookup error) and direct HTTPS was refused by the egress proxy, so the page itself was not read. Based only on the search-result summary seen on 2026-10-09; details unverified. ROI and brand counts are company claims. Commission rate is unpublished."
      },
      {
        "observation": "Foodbevy's roundup of deduction management platforms for CPG brands lists Glimpse, Promomash, Margin Wizard, Floret and Vividly. It says Floret offers a free pilot and Glimpse offers Foodbevy readers 25% off the first year.",
        "label": "Foodbevy: Top 5 Deduction Management Platforms for CPG Brands",
        "url": "https://www.foodbevy.com/?p=38999",
        "sourceType": "review",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "At least five products compete for emerging food brands' deduction work, with free pilots and discounts (counterevidence).",
        "level": "context",
        "limitations": "WebFetch failed (DNS lookup error) and direct HTTPS was refused by the egress proxy, so the page itself was not read. Based only on the search-result summary seen on 2026-10-09; details unverified. Foodbevy has affiliate or partner discounts with listed vendors, so it is not neutral. Descriptions are partial."
      },
      {
        "observation": "Promomash's plans page says deduction pricing is based on monthly deduction invoice volume, and its CPGenius Deductions service covers capture, AI-assisted coding, validation, dispute and recovery with human-in-the-loop work. No dollar figures for deductions were visible in the summary.",
        "label": "Promomash: plans",
        "url": "https://www.promomash.com/plans",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "An emerging-brand trade-spend vendor already sells managed deduction recovery (counterevidence).",
        "level": "context",
        "limitations": "WebFetch failed (DNS lookup error) and direct HTTPS was refused by the egress proxy, so the page itself was not read. Based only on the search-result summary seen on 2026-10-09; details unverified. Vendor page; price not published. A third-party listing showing $349-$1,250 per month appears to refer to Promomash's demo/event product, not deductions."
      },
      {
        "observation": "G2's listing describes Vividly (formerly Cresicor) as a trade promotion and deduction management platform for CPG and states its automated deduction management cuts deduction labor by up to 90%. Separate search summaries said Vividly has no published price and tiers pricing by functionality and integrations.",
        "label": "G2: Vividly product page",
        "url": "https://www.g2.com/products/vividly",
        "sourceType": "review",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "Established software already covers deduction validation and dispute for small and mid CPG brands (counterevidence).",
        "level": "context",
        "limitations": "WebFetch failed (DNS lookup error) and direct HTTPS was refused by the egress proxy, so the page itself was not read. Based only on the search-result summary seen on 2026-10-09; details unverified. The 90% figure is a vendor claim repeated on G2. Individual reviews were not read."
      },
      {
        "observation": "SPS Commerce (which owns SupplyPike) publishes a page titled 'Revenue Recovery for KeHE' and community articles on KeHE deduction types and disputing distributor deductions. Search summaries said KeHE disputes can be filed through K-Solve in KeHE Connect up to 180 days after a deduction is taken.",
        "label": "SPS Commerce: Revenue Recovery for KeHE",
        "url": "https://www.spscommerce.com/?p=779142",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "A large EDI vendor that many small brands already pay for markets deduction recovery for KeHE (counterevidence), and free dispute guidance is widely available.",
        "level": "context",
        "limitations": "WebFetch failed (DNS lookup error) and direct HTTPS was refused by the egress proxy, so the page itself was not read. Based only on the search-result summary seen on 2026-10-09; details unverified. Only the page title was seen for this URL; the 180-day window came from a summary across several KeHE-related results and was not tied to this page."
      }
    ]
  },
  {
    "id": "agency-coi-desk",
    "name": "Cert Desk",
    "title": "Certificate-of-insurance issuance for small insurance agencies",
    "category": "Insurance",
    "model": "B2B",
    "type": "Workflow software",
    "summary": "A tool to cut the unpaid, error-prone work of issuing certificates of insurance (COIs) at small independent P&C agencies. The pain and staff spend are real, but self-service certificates are already built into the main agency management systems, and specialist vendors cover contract review.",
    "buyer": "Owners or operations managers at small independent property-and-casualty agencies (roughly 3-25 staff) with commercial or contractor-heavy books. The owner approves spend; commercial-lines CSRs or certificate processors do the work.",
    "problem": "Commercial clients, especially contractors, need certificates for every job, lender, and vendor, often with additional insured, waiver of subrogation, or primary and non-contributory wording that must match endorsements on the policy. Practitioners and the IIABA describe this as a high-volume, mostly uncompensated task that carries E&O risk, and agents on a forum report heavy-certificate accounts costing more than their commission, some requests taking up to an hour, and accounts dropped because of it. Agencies hire dedicated certificate processors or CSRs whose job centers on issuing COIs. All of these sources were seen only as search-result summaries.",
    "solution": "If pursued at all: a narrow assistant that reads a holder's contract insurance requirements, checks them against the policy and endorsements on file, flags mismatches before a certificate is issued, and drafts the certificate in the agency's existing AMS. Plain certificate generation and self-service portals should not be built, because HawkSoft, EZLynx, Applied CSR24 and Vertafore already offer them.",
    "revenue": "Hypothesis (unvalidated): $49-199 per agency per month for a contract-requirement checker. The only visible anchor is HawkSoft's self-service certificate add-on, reported in a search snippet (unverified) at a flat $49 per agency per month. Certificate Hero and Vertafore do not publish prices. Per-certificate cost claims ($7-18 from a consultant, >$20 from Certificate Hero) are unverified and partly vendor marketing.",
    "gap": "Alternatives: native self-service certificates in agency management systems (HawkSoft add-on, EZLynx Client Center, Applied CSR24 with Epic, Vertafore AgencyOne certificates launched April 2026), standalone COI vendors (Certificate Hero with AI contract parsing and AMS connectivity, Certificial), in-house CSRs and certificate processors, offshore and Upwork virtual assistants, templates/masters, and dropping certificate-heavy accounts. The only plausible gap is contract-requirement checking for small agencies whose AMS lacks it, and Certificate Hero already markets that. No source showed small agencies asking for a new tool or complaining that their AMS certificate features fail.",
    "timing": "Timing is unfavorable for a new entrant. Vertafore shipped integrated self-service certificates in April 2026, and AI contract parsing is already sold by specialists. Incumbents are closing the gap, not opening one.",
    "fit": "Unconfirmed assumptions. The builder is a solo software developer with no confirmed insurance-agency domain knowledge, licensing, or access to agency owners, and limited capital. Reliable work requires read (ideally write) integration with closed agency management systems (Applied, Vertafore, HawkSoft, EZLynx), partner-program access, and comfort with E&O liability for wording errors, none of which is confirmed.",
    "risks": [
      "Incumbent coverage: every major small-agency AMS already offers or sells self-service certificates, some for about $49/month (unverified).",
      "Integration lock-in: certificate data lives in closed AMS platforms; without partner APIs the product becomes copy-paste re-entry.",
      "E&O liability: a wrong additional insured or waiver statement is a known source of agency E&O claims, and a tool that suggests wording shares that risk.",
      "Specialist competition: Certificate Hero and Certificial already target contract parsing and holder-side tracking.",
      "Low-cost labor alternative: offshore VAs and Upwork freelancers already handle COI work in the same AMS tools.",
      "Evidence quality: every source was seen only as a search summary because page fetching was blocked; customer voices are old forum posts."
    ],
    "pilot": [
      "Before any build, interview 6 small commercial-lines agency owners or CSRs. Ask about last week's certificate volume, the last certificate that needed an endorsement check, time spent, and whether they use their AMS self-service feature. Stop if 4 of 6 say their AMS feature or current staff handle it adequately, or if fewer than 3 report at least 10 endorsement-dependent certificates per week.",
      "If a segment emerges, run a 2-week concierge test with 2 agencies: they send contract insurance clauses and the builder returns a requirement-versus-policy checklist within 4 business hours. Success: at least 15 checklists used and a written commitment to pay at least $99/month. Stop if fewer than 5 are used or no agency will pay."
    ],
    "assumptions": [
      "The $49-199/month price band is a hypothesis, not observed willingness to pay.",
      "That some small agencies lack adequate certificate tooling in their AMS is inferred, not confirmed with customers.",
      "Forum anecdotes about cost and dropped accounts generalize to current small agencies; they are several years old.",
      "Per-certificate cost estimates ($7-18, >$20) are unverified and partly vendor marketing.",
      "Job posts reflect agency spend on certificate labor, but agency size and pay were not visible."
    ],
    "level": "existing-spend",
    "verdict": "Pass",
    "verdictRationale": "The problem is well documented: certificate work is high-volume, mostly unpaid, E&O-exposed, and agencies pay staff or freelancers to do it. But the obvious software answer is already sold inside the systems agencies run on (HawkSoft, EZLynx, Applied CSR24, and Vertafore's 2026 launch), and the harder contract-checking niche already has a specialist (Certificate Hero). A solo developer without AMS integrations or agency access would be entering a maturing feature category with real liability. Confidence is limited because every source was seen only through search summaries. This would move to Interview if recent independent agency voices said their AMS certificate features do not handle endorsement-dependent requests and they would pay a separate vendor, and if a partner API path to at least one small-agency AMS were confirmed.",
    "nextStep": "Shelve the idea. If revisiting, re-fetch the cited pages when page access works and spend one hour searching HawkSoft and EZLynx user communities for complaints about certificate features; drop it if none appear.",
    "evidence": "Researched report",
    "status": "Real, staffed pain; solved inside incumbent agency systems",
    "sourceNote": "All ten sources were seen only through web-search result summaries because page fetching and direct HTTPS were blocked during this run. They establish that COI issuance is a costly, mostly unpaid agency task with paid labor behind it, and that self-service certificates and contract parsing are already offered by incumbents. No source showed unmet demand for a new standalone tool. A link check on 2026-10-09 found 8 of the 9 remaining source pages load (the rest block automated requests); page contents were not re-read. Entries whose pages returned 404 were removed.",
    "reviewedAt": "2026-10-09",
    "sources": [
      [
        "Insurance-Forums: Do You Charge for COI's? thread",
        "https://www.insurance-forums.com/community/threads/do-you-charge-for-cois.87585/"
      ],
      [
        "IIABA Virtual University: Certificates of insurance resources",
        "https://independentagent.com/vu/Pages/featured-resources/certificates-public/certificates-insurance.aspx"
      ],
      [
        "HireHive job: P&C insurance Certificate Processor (Glendora, CA)",
        "https://the-misch-group0.hirehive.com/pc-insurance-certificate-processor-glendora-54QnsO"
      ],
      [
        "Upwork service: part-time insurance virtual assistant",
        "https://www.upwork.com/services/product/admin-customer-support-a-part-time-insurance-virtual-assistant-personal-commercial-line-2013924390407398950"
      ],
      [
        "HawkSoft: Self-Service Certificates",
        "https://www.hawksoft.com/self-service-certificates/"
      ],
      [
        "Vertafore press release: integrated certificates solution (2026)",
        "https://www.vertafore.com/resources/press-releases/vertafore-unveils-integrated-certificates-solution-remove-service"
      ],
      [
        "Applied Systems: Applied CSR24 certificates of insurance demo",
        "https://prod.appliedsystems.com/en-us/resources/demos/applied-csr24-certificates-of-insurance/"
      ],
      [
        "EZLynx: Client Center self-service portal",
        "https://www.ezlynx.com/client-center.html"
      ],
      [
        "Certificate Hero: The true cost of issuing certificates of insurance",
        "https://info.certificatehero.com/true-cost-coi"
      ]
    ],
    "evidenceLog": [
      {
        "observation": "A small-agency forum thread titled \"Do You Charge for COI's?\" (roughly 2016-2017 by the search tool's age estimate) includes agents describing certificate requests that can take up to an hour when endorsements and wording are involved, an agency that charged $25 for a basic certificate and $100 for ones that took reps hours, agents letting good-sized accounts go because of certificate-management expense, and one contractor account whose certificate cost was said to be triple its commission. Others warned that per-certificate fees can draw state insurance department scrutiny.",
        "label": "Insurance-Forums: Do You Charge for COI's? thread",
        "url": "https://www.insurance-forums.com/community/threads/do-you-charge-for-cois.87585/",
        "sourceType": "community",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "Practitioners repeatedly describe certificate work as a costly, mostly uncompensated burden that can make accounts unprofitable.",
        "level": "costly-workaround",
        "limitations": "WebFetch and direct HTTPS were blocked in this research environment (DNS failure / proxy 403), so this entry relies only on a web-search result summary; the page itself was not read and wording is unverified. The search summary combined snippets from this thread's pages and a related \"Charging for Cert's\" thread, so which post made each claim is unverified. The thread is several years old and anecdotal."
      },
      {
        "observation": "An Independent Insurance Agents & Brokers of America (IIABA) Virtual University resource on certificates of insurance, as summarized in search results, calls COI processing arguably the most troublesome task performed by insurance agencies and says most agencies, even those issuing thousands of certificates a year, do it without additional compensation. The same IIABA material says CSRs are most often responsible for certificate-related E&O claims and cites a $180,000 settlement after an agent failed to request a contractually required additional-insured endorsement.",
        "label": "IIABA Virtual University: Certificates of insurance resources",
        "url": "https://independentagent.com/vu/Pages/featured-resources/certificates-public/certificates-insurance.aspx",
        "sourceType": "research",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "The national independent-agent trade body treats certificates as a widespread, unpaid, E&O-exposed workload.",
        "level": "repeated-pain",
        "limitations": "WebFetch and direct HTTPS were blocked in this research environment (DNS failure / proxy 403), so this entry relies only on a web-search result summary; the page itself was not read and wording is unverified. The search summary may have drawn some of these points from a linked 2009 CPCU eJournal PDF on na.iiaba.net rather than this page. Trade commentary, not a measured survey."
      },
      {
        "observation": "A job listing on HireHive says a thriving insurance agency in Glendora, CA is seeking a Certificate Processor whose main duty is issuing certificates of insurance, mainly for general business and construction/contractor clients, and which requires contract review and interpreting policy language.",
        "label": "HireHive job: P&C insurance Certificate Processor (Glendora, CA)",
        "url": "https://the-misch-group0.hirehive.com/pc-insurance-certificate-processor-glendora-54QnsO",
        "sourceType": "job",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "Agencies with contractor-heavy books budget a dedicated paid role for certificate issuance.",
        "level": "existing-spend",
        "limitations": "WebFetch and direct HTTPS were blocked in this research environment (DNS failure / proxy 403), so this entry relies only on a web-search result summary; the page itself was not read and wording is unverified. Agency size, salary and posting date are unknown. A posting shows intent to hire, not a hire."
      },
      {
        "observation": "An Upwork service listing offers a part-time insurance virtual assistant for personal and commercial lines whose services include certificates of insurance, renewals, endorsements and ACORD form preparation in Applied Epic, AMS360 and EZLynx.",
        "label": "Upwork service: part-time insurance virtual assistant",
        "url": "https://www.upwork.com/services/product/admin-customer-support-a-part-time-insurance-virtual-assistant-personal-commercial-line-2013924390407398950",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "A freelance supply market exists for outsourced COI work, which is an existing low-cost alternative to software.",
        "level": "context",
        "limitations": "WebFetch and direct HTTPS were blocked in this research environment (DNS failure / proxy 403), so this entry relies only on a web-search result summary; the page itself was not read and wording is unverified. This is a seller's offer, not a buyer's job post; price and number of buyers were not visible."
      },
      {
        "observation": "HawkSoft sells Self-Service Certificates as an add-on bought through its Marketplace, letting insureds sign in with email and a verification code to generate their own certificates, with agent notification and revocation. Search results report a flat $49 monthly fee per agency with no per-certificate fees.",
        "label": "HawkSoft: Self-Service Certificates",
        "url": "https://www.hawksoft.com/self-service-certificates/",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "A small-agency management system already sells the obvious solution cheaply (counterevidence and price anchor).",
        "level": "context",
        "limitations": "WebFetch and direct HTTPS were blocked in this research environment (DNS failure / proxy 403), so this entry relies only on a web-search result summary; the page itself was not read and wording is unverified. The $49/month figure is from the search summary and unverified. A list price is an offer, not proof of adoption."
      },
      {
        "observation": "Vertafore's press release (dated April 16, 2026 per search results) announces an integrated certificates of insurance tool in AgencyOne that turns certificate requests into a real-time, self-service experience for clients, pulls live data from the agency management system, and lets agencies distribute hundreds of certificates in seconds.",
        "label": "Vertafore press release: integrated certificates solution (2026)",
        "url": "https://www.vertafore.com/resources/press-releases/vertafore-unveils-integrated-certificates-solution-remove-service",
        "sourceType": "vendor",
        "publishedAt": "2026-04-16",
        "observedAt": "2026-10-09",
        "supports": "A dominant AMS vendor shipped native self-service certificates in 2026, closing much of the gap for its users.",
        "level": "context",
        "limitations": "WebFetch and direct HTTPS were blocked in this research environment (DNS failure / proxy 403), so this entry relies only on a web-search result summary; the page itself was not read and wording is unverified. Availability by product (AMS360, Sagitta) came from a third-party aggregator and is unverified. Vendor marketing."
      },
      {
        "observation": "Applied Systems markets certificates of insurance as a core self-service feature of Applied CSR24, which connects to Applied Epic and lets clients access and manage their certificates. Search summaries of reviews were mixed, with one reviewer saying certificates are easier than in Epic and another calling setup too many steps.",
        "label": "Applied Systems: Applied CSR24 certificates of insurance demo",
        "url": "https://prod.appliedsystems.com/en-us/resources/demos/applied-csr24-certificates-of-insurance/",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "The other major AMS vendor already offers client self-service certificates.",
        "level": "context",
        "limitations": "WebFetch and direct HTTPS were blocked in this research environment (DNS failure / proxy 403), so this entry relies only on a web-search result summary; the page itself was not read and wording is unverified. Review comments came from Capterra/GetApp listings seen only in the same search summary and are not individually cited. Price not published."
      },
      {
        "observation": "EZLynx Client Center, a portal used by many small personal-lines agencies, lets clients request new certificates that immediately create a task in EZLynx, and lets advanced clients add holders to a shared certificate master themselves.",
        "label": "EZLynx: Client Center self-service portal",
        "url": "https://www.ezlynx.com/client-center.html",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "Small-agency AMS vendors already cover request intake and self-service holder management.",
        "level": "context",
        "limitations": "WebFetch and direct HTTPS were blocked in this research environment (DNS failure / proxy 403), so this entry relies only on a web-search result summary; the page itself was not read and wording is unverified. Pricing is not public. Vendor marketing."
      },
      {
        "observation": "Certificate Hero, a standalone COI vendor, publishes a page arguing agents underestimate the cost of issuing certificates and that it exceeds $20 per transaction. A company directory describes its services as automated certificate issuance, AI-driven contract parsing for compliance, and real-time AMS connectivity.",
        "label": "Certificate Hero: The true cost of issuing certificates of insurance",
        "url": "https://info.certificatehero.com/true-cost-coi",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "A funded specialist already targets the harder contract-review part of the workflow, the most plausible niche left for a new entrant.",
        "level": "context",
        "limitations": "WebFetch and direct HTTPS were blocked in this research environment (DNS failure / proxy 403), so this entry relies only on a web-search result summary; the page itself was not read and wording is unverified. The >$20 cost figure is vendor marketing and unverified. Certificate Hero pricing was not found. The contract-parsing description came from a third-party directory (bitscale.ai) with placeholder metrics."
      }
    ]
  },
  {
    "id": "subsidy-reconcile",
    "name": "Voucher Ledger",
    "title": "Subsidy payment reconciliation for small child care providers",
    "category": "Childcare",
    "model": "B2B",
    "type": "Workflow software",
    "summary": "A per-child ledger that matches state subsidy authorizations, attendance, agency payments and family co-pays for home daycares and small centers. The reconciliation pain is real and paid for, but established child care platforms already sell this workflow and states give providers free attendance systems.",
    "buyer": "Owners of licensed family child care homes and small independent centers that accept state child care subsidy (CCDF-funded vouchers). In a home daycare the owner does the work and approves payment. In multi-site operators a billing specialist does the work and a director or finance lead approves.",
    "problem": "Providers that accept subsidy are paid by a state agency on rules tied to authorizations and, in many states, attendance, while families pay a separate co-pay. Records end up spread across sign-in sheets, state attendance portals, billing tools and spreadsheets. Missing or late attendance records delay payment, and state system changes have produced payment backlogs (Missouri 2024-2025, per news coverage seen in search results). Larger operators hire billing specialists to submit attendance to agencies, track authorizations and reconcile agency payments, which shows the work is costly when done by hand.",
    "solution": "If pursued at all: a lightweight, state-specific ledger for home providers who do not want a full child care management platform. It would import or record authorizations (hours, rate, dates), pull attendance from the state portal export or a sign-in log, compute expected subsidy and co-pay per child, match agency remittances, and flag short-pays and expiring authorizations. Evidence suggests this would duplicate features in Procare, Playground, Brightwheel and MyKidReports.",
    "revenue": "Hypothesis (unvalidated): $15-40 per month per home provider, or $50-150 per month per small center. No direct price anchor was verified: Brightwheel, Playground and Procare published no prices in the results seen. A billing specialist job at a franchise chain lists $60,000-65,000 a year (search snippet only, unverified), which shows what large operators spend on this labor, not what a home provider would pay.",
    "gap": "Alternatives: free state attendance systems (KinderConnect, KinderSign and similar, with free tablets in Texas and Virginia for some providers), full child care platforms with subsidy modules (Procare Subsidy Accounting, Playground subsidy matching, Brightwheel billing reports, MyKidReports multi-agency billing), spreadsheets, and paper. The only possible gap seen is home providers who use the free state portal for attendance and nothing for reconciliation, and who find a full platform too heavy or expensive. No customer source was found that confirms such providers want or would pay for a separate reconciliation tool.",
    "timing": "Mixed. Federal policy is shifting: a 2024 federal rule required enrollment-based, prospective payment, but a January 2026 proposed rule would rescind that requirement and let states choose again. States changing payment methods and attendance systems (Missouri, Virginia's Child Care PASS launch in December 2025) create short-term confusion for providers. The same churn makes state-specific software expensive to keep current, and incumbents are already marketing subsidy features to in-home providers.",
    "fit": "Unconfirmed assumptions. The builder is a solo software developer with no confirmed access to child care providers, no confirmed knowledge of any state's subsidy rules, and limited capital. Each state runs its own subsidy program, attendance system and payment rules, so support would likely be state by state.",
    "risks": [
      "Incumbent coverage: Procare, Playground, Brightwheel and MyKidReports already market subsidy invoicing, per-child ledgers and payment matching, and Brightwheel publishes content aimed specifically at in-home providers with this problem.",
      "Free state tools: several states give subsidy providers free attendance software and tablets, which reduces the perceived need for paid tools at the attendance step.",
      "State fragmentation: authorization formats, billing rules, payment files and portals differ by state and change often (attendance vs enrollment payment), raising build and support costs.",
      "Root cause is upstream: much of the pain in news coverage is state payment backlogs and system failures, which provider-side software cannot fix.",
      "Low willingness to pay: home providers run on thin margins and many already use free tiers or paper; no evidence was found that they pay for standalone reconciliation.",
      "Weak direct customer voice: all evidence came from search snippets because page fetches failed in this run, and no provider forum threads were found."
    ],
    "pilot": [
      "Before any build, pick one state and interview 6 family child care providers who accept subsidy and use only the state portal plus paper or spreadsheets. Ask about the last short-paid or late subsidy payment, how they found it, how long it took to resolve, and what they pay for software today. Stop if fewer than 3 of 6 report a reconciliation problem in the last 3 months or if 4 or more already use a platform with subsidy billing.",
      "If interviews pass, run a 4-week concierge test: reconcile one month of authorizations, attendance and remittances for 3 providers using a spreadsheet you maintain. Success means at least 2 providers find a discrepancy worth more than $100 or say it saved them 2+ hours, and at least 2 agree in writing to pay $20 or more per month. Stop if no provider commits to pay."
    ],
    "assumptions": [
      "That a meaningful number of subsidy-accepting home providers use no billing platform is assumed, not observed.",
      "The $15-40 per month price band is a hypothesis, not observed willingness to pay.",
      "That reconciliation errors (short-pays, expired authorizations) cost providers material money is inferred from job duties and vendor content, not measured.",
      "That attendance exports from state portals are accessible enough to automate is unverified and likely varies by state.",
      "Vendor claims about time saved by subsidy modules are unverified marketing.",
      "Unsourced after the link check: Procare's subsidy accounting module and free state attendance systems (KinderConnect, tablets in Texas and Virginia). Their cited pages returned 404."
    ],
    "level": "costly-workaround",
    "verdict": "Pass",
    "verdictRationale": "The problem is real: subsidy billing involves authorizations, attendance rules, split payers and slow agencies, and multi-site operators pay staff to reconcile it. But the workflow is already a standard module in established child care platforms that explicitly target small and in-home providers, and several states give providers free attendance systems. Much of the visible pain comes from state payment backlogs that software cannot fix, and each state's rules would have to be supported separately. Confidence is limited: every source in this run was seen only as a search snippet because page fetches failed, and no first-hand provider forum posts were found. This would move to Interview if direct provider conversations or forum threads in one state showed home providers who use the free state portal, have recurring short-pays they cannot trace, and say they would pay for a light tool rather than a full platform.",
    "nextStep": "Shelve the idea. If revisiting, re-fetch the cited pages to confirm the snippet content, then spend two hours looking for family child care provider groups in one large subsidy state (for example Texas or Virginia) discussing reconciliation, and drop the idea if no unprompted complaints appear.",
    "evidence": "Researched report",
    "status": "Real pain; served by incumbents and free state tools",
    "evidenceLog": [
      {
        "observation": "KCUR coverage of Missouri's child care subsidy payment backlog (January 2025), as summarized in search results: providers reported missed subsidy payments that forced some centers to close and others to turn families away, part of the backlog reached back about a year, and state officials said paying on attendance was not working.",
        "label": "KCUR: Missouri child care subsidy payment backlog",
        "url": "https://www.kcur.org/education/2025-01-30/missouri-child-care-subsidy-payment-backlog-cleared",
        "sourceType": "news",
        "publishedAt": "2025-01-30",
        "observedAt": "2026-10-09",
        "supports": "Subsidy payment problems cause real financial harm to providers.",
        "level": "repeated-pain",
        "limitations": "Seen only in a search-result summary; the page fetch failed (DNS/proxy error), so figures and wording are unverified. The cause was a state system and budget problem, which provider-side software cannot fix. Duplicate coverage by Missouri Independent, St. Louis Public Radio and News Tribune is counted as one signal."
      },
      {
        "observation": "Fox29 report on Philadelphia daycare providers in a financial bind from a backup in monthly state subsidy payments. The search summary says one provider used a submission confirmation to dispute a claim that her invoices arrived late.",
        "label": "Fox29: Philly daycare providers and subsidy backup",
        "url": "https://fox29.com/news/philly-daycare-providers-financial-bind-due-backup-monthly-state-subsidies",
        "sourceType": "news",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "Providers in a second state report subsidy payment delays and need records to dispute them.",
        "level": "repeated-pain",
        "limitations": "Seen only in a search-result summary; the page fetch failed. Publication date unknown and may be several years old. Provider details are unverified."
      },
      {
        "observation": "The Learning Experience posted a full-time onsite Billing Specialist role in Deerfield Beach, FL at $60,000-65,000 a year covering private pay and subsidy billing for corporate childcare centers, including reviewing attendance records, sending attendance reports and invoices to agencies, and handling subsidy authorizations. One version seeks medical billing or insurance claims experience.",
        "label": "CareerPlug job: The Learning Experience Billing Specialist",
        "url": "https://the-learning-experience-hq-1.careerplug.com/jobs/3348872",
        "sourceType": "job",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "Operators pay salaried staff to do subsidy billing and authorization tracking by hand.",
        "level": "existing-spend",
        "limitations": "Seen only in a search-result summary; the page fetch failed, so pay, date and duties are unverified. A job post shows intent to spend, not a hire. The employer is a large franchise chain, not a small operator."
      },
      {
        "observation": "A Family Access Administrator childcare role in Framingham, MA determines subsidy eligibility under Massachusetts EEC rules, enters children's attendance into the state's system every week, and tracks voucher end dates to complete reauthorizations before they expire.",
        "label": "Recorder jobs: Family Access Administrator (childcare)",
        "url": "https://jobs.recorder.com/job/c6a69b8e-7ed8-47ff-a05b-9d92bf1a345b/family-access-administrator-childcare",
        "sourceType": "job",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "Weekly attendance entry and authorization-expiry tracking are recurring paid tasks.",
        "level": "costly-workaround",
        "limitations": "Seen only in a search-result summary; the page fetch failed. Employer size, pay and date unknown."
      },
      {
        "observation": "Brightwheel publishes a guide aimed at in-home child care providers about manually reconciling subsidy and vouchers across systems. Per the search summary, it describes providers juggling a sign-in sheet, family texts, a billing tool and a spreadsheet, authorizations that change mid-cycle, split co-pay and subsidy payers, and missing documents delaying payment, and it pitches Brightwheel's billing reports for reconciliation.",
        "label": "Brightwheel: manually reconciling subsidy and vouchers (in-home)",
        "url": "https://mybrightwheel.com/in-home-child-care/manually-reconciling-subsidy-and-vouchers-across-systems/",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "Describes the workflow pain, and shows a well-funded incumbent already targets in-home providers with this exact problem (counterevidence).",
        "level": "context",
        "limitations": "Vendor marketing seen only as a search summary; the page fetch failed. Not a customer voice."
      },
      {
        "observation": "Playground's subsidy page claims it calculates expected payments by child and agency, matches uploaded deposits to children, flags under- or overpayments, and supports waiving, deferring or charging families for differences. Directory listings seen in search say pricing is on request.",
        "label": "Playground: child care subsidy tracking",
        "url": "https://www.tryplayground.com/subsidies",
        "sourceType": "vendor",
        "publishedAt": null,
        "observedAt": "2026-10-09",
        "supports": "A newer competitor already sells automated subsidy matching and short-pay flagging, the main proposed feature.",
        "level": "context",
        "limitations": "Vendor marketing seen only as a search summary; the page fetch failed. Price and customer count unknown."
      },
      {
        "observation": "Child Care Aware's summary of the January 2026 CCDF proposed rule says HHS proposes to rescind the 2024 requirements to pay providers based on enrollment and prospectively, leaving states free to choose; the rule was published January 5, 2026 with comments due February 4, 2026.",
        "label": "Child Care Aware: CCDF NPRM 2026 summary",
        "url": "https://info.childcareaware.org/blog/ccdf-nprm-2026",
        "sourceType": "research",
        "publishedAt": "2026-01",
        "observedAt": "2026-10-09",
        "supports": "Payment rules are in flux, so attendance-based billing and its reconciliation burden may persist in many states, while also raising maintenance cost for state-specific software.",
        "level": "context",
        "limitations": "Advocacy-organization summary seen only in search results; the page fetch failed. Whether a final rule has been issued was not checked."
      }
    ],
    "sourceNote": "All page fetches failed in this run (DNS/proxy errors), so every entry relies on search-result summaries and is unverified until re-fetched. The sources show that subsidy payment delays and reconciliation work are real and that larger operators pay staff for them. They also show that established platforms already sell subsidy reconciliation, including to in-home providers. No first-hand provider forum posts were found. A link check on 2026-10-09 found 7 of the 7 remaining source pages load (the rest block automated requests); page contents were not re-read. Entries whose pages returned 404 were removed.",
    "reviewedAt": "2026-10-09",
    "sources": [
      [
        "KCUR: Missouri child care subsidy payment backlog",
        "https://www.kcur.org/education/2025-01-30/missouri-child-care-subsidy-payment-backlog-cleared"
      ],
      [
        "Fox29: Philly daycare providers and subsidy backup",
        "https://fox29.com/news/philly-daycare-providers-financial-bind-due-backup-monthly-state-subsidies"
      ],
      [
        "CareerPlug job: The Learning Experience Billing Specialist",
        "https://the-learning-experience-hq-1.careerplug.com/jobs/3348872"
      ],
      [
        "Recorder jobs: Family Access Administrator (childcare)",
        "https://jobs.recorder.com/job/c6a69b8e-7ed8-47ff-a05b-9d92bf1a345b/family-access-administrator-childcare"
      ],
      [
        "Brightwheel: manually reconciling subsidy and vouchers (in-home)",
        "https://mybrightwheel.com/in-home-child-care/manually-reconciling-subsidy-and-vouchers-across-systems/"
      ],
      [
        "Playground: child care subsidy tracking",
        "https://www.tryplayground.com/subsidies"
      ],
      [
        "Child Care Aware: CCDF NPRM 2026 summary",
        "https://info.childcareaware.org/blog/ccdf-nprm-2026"
      ]
    ]
  }
];
