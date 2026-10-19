/* ============================================================
   Accounting Lab — interview prep
   ------------------------------------------------------------
   Questions commonly asked in interviews for staff accountant,
   junior/general accountant, AP/AR and bookkeeping roles, grouped
   the way interviews usually run. Each has:
     why     — what the interviewer is really checking
     answer  — a model answer or a framework (markup, see core.js)
     lessons — optional lesson ids to review first
   Model answers are starting points: rewrite them with your own
   examples in "Your answer" — that's the part that gets you hired.
   ============================================================ */
(function (L) {
  L.addInterviewSection({
    id: "about",
    title: "About you",
    icon: "🙋",
    blurb: "The openers. Every interview starts here, and first impressions are set in the first five minutes.",
    questions: [
      {
        id: "tell-me-about-yourself",
        q: "Tell me about yourself.",
        why: "They want a 60–90 second story that explains why you're sitting in this chair. It's not your life story, and it's not a recitation of your resume.",
        answer: `Use **present → past → future**:

1. **Present:** what you do now and one strength it shows.
2. **Past:** the one or two experiences that led you to accounting (degree, a job where you handled numbers, reconciliations or compliance).
3. **Future:** why *this* role is the logical next step.

> "I have a finance degree, and the work I've enjoyed most has been the detail work: reconciling accounts, tracking down variances, keeping records audit-ready. In my last role I [one concrete accomplishment with a number]. I'm looking for a staff accountant position where I can own the month-end work and keep growing toward [CPA / senior accountant], and your team's [specific thing from the posting] is why I applied."

Keep it under 90 seconds, and finish on why this role, so the conversation moves toward the job.`
      },
      {
        id: "why-accounting",
        q: "Why accounting?",
        why: "They're checking that you'll stay and grow, and that you understand what the day-to-day work is actually like.",
        answer: `Pick a real reason and back it with something you did:
- You like the **order and closure**: a reconciliation either ties or it doesn't.
- You like **being the person who knows the real numbers** that decisions get made on.
- A **specific moment**, such as finding the error that explained a variance, or building a schedule that saved hours.

Avoid "it's stable" or "I'm good at math" as your whole answer. Mention the **path** you're aiming for (CPA, CMA, senior or controller) to show you're committed for the long term.`
      },
      {
        id: "why-this-company",
        q: "Why do you want to work here?",
        why: "They're testing whether you researched them and whether you'd be happy in this specific job.",
        answer: `Before the interview, read the posting, the company website and recent news. Then connect **three things**:
1. **What they do**, such as their industry, growth or the people they serve ("a growing company investing in its financial systems").
2. **What the role offers you**, such as broad exposure, a close process to own, or the software they use.
3. **What you bring** that fits their stated needs.

> "Your posting talked about building better reporting and processes as you grow. That's the kind of work I want: doing the core accounting every day, but also improving how it gets done."

Don't say "I need a job" or talk about the benefits first.`
      },
      {
        id: "strengths",
        q: "What's your greatest strength?",
        why: "They want a strength that matters for this job, with evidence. An adjective on its own doesn't count.",
        answer: `Choose one strength that matters most in accounting: **attention to detail**, **organization under deadlines**, **following through until things tie out**, or **learning systems quickly**. Then prove it with a short story:

> "Following things through to the end. When the subledger and the GL were off by a few hundred dollars, I didn't plug it. I traced it to a manual entry posted to the control account, fixed it, and suggested we restrict posting to that account."

One strength with real proof is better than three without any.`
      },
      {
        id: "weakness",
        q: "What's a weakness you're working on?",
        why: "They're checking self-awareness and whether you're improving it. It's also a test of whether you'll give a cliché answer.",
        answer: `Name a **real but manageable** weakness, then spend most of the answer on **what you're doing about it**:
- "I used to over-check my own work and slow down. Now I use checklists and tie-out cells, so I check the right things once."
- "I'm newer to [a specific software or area]. I've been [taking a course, building a practice file, using this lab]."

Avoid weaknesses that are central to the job ("I'm not detail-oriented"), and don't use disguised strengths like "I'm a perfectionist" or "I work too hard".`
      },
      {
        id: "five-years",
        q: "Where do you see yourself in five years?",
        why: "They want to know if you'll stay, and whether your goals fit what they can offer.",
        answer: `Show ambition that this job leads toward:
> "I'd like to have grown into a senior accountant role, owning bigger parts of the close and helping train newer staff. I'm also working toward [the CPA exam / a certification]."

If they offer exam support or have a clear promotion path, mention it. Avoid "in your job" jokes and goals that have nothing to do with accounting.`
      },
      {
        id: "career-change",
        q: "Your background isn't purely accounting. Why the move, and why should we take a chance on you?",
        why: "Common for career changers and recent grads. They're testing whether you can turn your experience into accounting skills.",
        answer: `Present it as **related experience**, not a gap:
1. **Name the overlap:** reconciling accounts, budgets and cost tracking, compliance documentation, handling confidential data, using financial software.
2. **Show you've invested in it:** your degree, coursework, software you've learned, certifications in progress.
3. **Reassure them:** you learn systems quickly, and give an example.

> "My roles have all had an accounting core: [reconciliation / budget review / compliance across X transactions]. I've been building the rest deliberately, and I'm looking for a role where accounting is the whole job, not one part of it."`
      }
    ]
  });

  L.addInterviewSection({
    id: "fundamentals",
    title: "Technical: fundamentals",
    icon: "📘",
    blurb: "The concepts almost every accounting interview checks. Answer clearly and briefly, and use an example.",
    questions: [
      {
        id: "debits-credits",
        q: "Explain debits and credits.",
        why: "It's the most basic competency check. A shaky answer here can end the interview.",
        lessons: ["u01-3", "u01-4"],
        answer: `"Debit is the left side of an account and credit is the right. Every entry has equal debits and credits. **Assets, expenses and dividends increase with debits; liabilities, equity and revenue increase with credits.** For example, a cash sale debits Cash and credits Revenue, and paying a bill debits Accounts Payable and credits Cash."

Give the rule, then an example. If they push further, mention **normal balances** and **contra accounts**, such as Accumulated Depreciation having a credit balance.`
      },
      {
        id: "three-statements",
        q: "Walk me through the three financial statements and how they connect.",
        why: "It tests whether you understand the system as a whole, not just individual entries.",
        lessons: ["u04-1", "u04-2", "u04-3", "u04-4"],
        answer: `- **Income statement:** revenue minus expenses over a period, ending in **net income**.
- **Balance sheet:** assets = liabilities + equity at a point in time.
- **Cash flow statement:** why cash changed, split into operating, investing and financing.

**How they connect:** net income flows into **retained earnings** on the balance sheet. It's also the starting line of the cash flow statement (indirect method), which adjusts for non-cash items and working-capital changes. The cash flow statement's **ending cash** equals Cash on the balance sheet.`
      },
      {
        id: "depreciation-walkthrough",
        q: "If depreciation goes up by $10, what happens on each statement? (Ignore taxes.)",
        why: "A classic test of how the statements connect. They're listening for each step in order.",
        lessons: ["u03-4", "u04-3"],
        answer: `- **Income statement:** depreciation expense is up $10, so **net income is down $10**.
- **Cash flow statement:** start with net income (−$10), then **add back** the $10 of depreciation because it isn't cash. **Cash is unchanged.**
- **Balance sheet:** **accumulated depreciation** is up $10, so net PP&E is down $10. **Retained earnings** is down $10. Both sides fall by $10 and still balance.

(If they add a tax rate, say 25%: net income falls only $7.50, operating cash *rises* $2.50 from the tax saving, and the balance sheet still balances.)`
      },
      {
        id: "accrual-vs-cash",
        q: "What's the difference between cash and accrual accounting? Why does GAAP require accrual?",
        why: "Accrual is the basis of month-end work. They want the definition and the reason behind it.",
        lessons: ["u03-1"],
        answer: `"Cash basis records revenue and expenses when money changes hands. Accrual records **revenue when it's earned** and **expenses when they're incurred**, so each period shows the revenue it earned and the costs it took to earn it. That's why GAAP requires it: it shows performance, not just cash timing."

Example: a December job paid in February counts as December revenue on the accrual basis and February revenue on the cash basis.`
      },
      {
        id: "accrued-vs-ap",
        q: "What's the difference between accounts payable and an accrued expense?",
        why: "A very common follow-up. It shows whether you really understand cutoff.",
        lessons: ["u03-2", "u07-3"],
        answer: `"Both are liabilities for costs we've incurred. **Accounts payable** means we've **received the invoice** and recorded the bill. An **accrued expense** is a cost we've incurred **without an invoice yet**, like wages since the last payday, interest, or utilities used this month. We estimate it at month-end so the expense lands in the right period, then reverse it or replace it when the bill arrives."`
      },
      {
        id: "prepaid-deferred",
        q: "Explain prepaid expenses and deferred revenue, with examples.",
        why: "Deferrals come up in every close. They're checking that you can give the entries, not just the definitions.",
        lessons: ["u03-3"],
        answer: `- **Prepaid expense (an asset):** paid before you use it. A 12-month insurance policy paid in advance is recorded as Prepaid Insurance, then **1/12 is expensed each month** (Dr Insurance Expense, Cr Prepaid). I'd support the balance with a prepaid schedule.
- **Deferred (unearned) revenue (a liability):** the customer pays before you deliver. Record Cr Unearned Revenue, then **recognize revenue as you deliver** (Dr Unearned, Cr Revenue).

They're mirror images: one is your money paid in advance, the other is the customer's.`
      },
      {
        id: "allowance",
        q: "How do you account for bad debts?",
        why: "It checks estimates, matching, and the difference between GAAP and tax.",
        lessons: ["u06-2", "u06-3"],
        answer: `"Under GAAP we use the **allowance method**. At period-end we estimate uncollectible receivables, usually with an **aging** that applies higher loss rates to older balances, and adjust the allowance to that target with **Dr Bad Debt Expense, Cr Allowance**. When a specific account is uncollectible we **write it off against the allowance** (Dr Allowance, Cr AR). That entry has no expense and doesn't change net AR. The direct write-off method is only acceptable if amounts are immaterial, though it's what tax law uses."`
      },
      {
        id: "inventory-methods",
        q: "Compare FIFO, LIFO and weighted average.",
        why: "It's standard for any company with inventory. Bonus points for knowing the effects on income and tax.",
        lessons: ["u08-2"],
        answer: `- **FIFO:** the oldest costs go to COGS first. When prices are rising, COGS is lower and income higher, and the balance-sheet inventory is closer to current cost.
- **LIFO:** the newest costs go to COGS first. When prices are rising, COGS is higher and taxable income lower. It's allowed under US GAAP but **not IFRS**, and the **LIFO conformity rule** requires using it for book if you use it for tax.
- **Weighted average:** one blended cost per unit, which smooths out price swings.

Whichever method you use, apply it consistently.`
      },
      {
        id: "capitalize-expense",
        q: "When do you capitalize a cost versus expense it?",
        why: "Misclassifying costs moves profit between periods, so this is high-risk for both auditors and managers.",
        lessons: ["u09-1"],
        answer: `"Capitalize costs that give **benefits beyond the current year**, such as buying an asset or an improvement that extends its life or adds capacity. Include everything needed to get it working: price, non-refundable tax, freight, installation. **Expense** routine repairs, maintenance, and anything under the company's **capitalization threshold**. Then depreciate the capitalized cost over its useful life."`
      },
      {
        id: "revenue-recognition",
        q: "What do you know about revenue recognition under ASC 606?",
        why: "It's more likely for larger companies or ones with contracts. Knowing the five steps shows you're current.",
        lessons: ["u06-4", "u15-4"],
        answer: `"ASC 606 recognizes revenue when control of goods or services transfers to the customer, using five steps: **identify the contract**, **identify the performance obligations**, **determine the transaction price**, **allocate it** by standalone selling price, and **recognize revenue** as each obligation is satisfied, either at a point in time or over time. Cash received before you deliver is deferred revenue."`
      },
      {
        id: "working-capital",
        q: "What is working capital, and what would make it go down?",
        why: "It tests whether you think about liquidity and cash, not just about entries.",
        lessons: ["u04-2", "u14-1"],
        answer: `"Working capital is **current assets minus current liabilities**, the cushion for day-to-day operations. It falls when current assets drop (collecting less, using cash on long-term assets) or current liabilities rise (more payables, short-term borrowing, or long-term debt becoming due within 12 months). Lenders often set minimums in loan covenants, so it's worth watching every month."`
      }
    ]
  });

  L.addInterviewSection({
    id: "daytoday",
    title: "Technical: the day-to-day work",
    icon: "🧮",
    blurb: "\"How would you…\" questions about the actual job: closes, reconciliations, AP and AR.",
    questions: [
      {
        id: "month-end-close",
        q: "Walk me through a month-end close.",
        why: "This is the core of most staff accountant jobs. They want the steps in order and a sense that you've owned them.",
        lessons: ["u12-1", "u12-2", "u12-3", "u12-4"],
        answer: `1. **Cutoff:** finish recording the month's invoices, bills, payroll and card activity, and close the subledgers.
2. **Recurring entries:** depreciation, prepaid amortization, deferred revenue.
3. **Accruals and estimates:** unbilled revenue, unrecorded liabilities, wages, the bad debt allowance.
4. **Reconcile every balance-sheet account** to its support: bank, AR and AP agings, prepaids, fixed assets, debt and payroll liabilities.
5. **Review:** flux analysis against last month and budget, and journal entry review.
6. **Report** and **lock the period**.

Add one detail of your own: "I keep a checklist with an owner and a due day for each task, and I do soft-close work like bank recs through the 25th before month-end."`
      },
      {
        id: "bank-rec",
        q: "How do you do a bank reconciliation?",
        why: "Nearly every accounting job does them. They're checking that you know which items go on which side, and which ones need entries.",
        lessons: ["u05-2", "u05-3"],
        answer: `"Start with the bank statement balance and the GL balance.
- **Bank side:** add deposits in transit, subtract outstanding checks, and correct any bank errors.
- **Book side:** subtract fees and NSF checks, add interest, and correct any recording errors.
Both sides should reach the same **adjusted balance**. Only **book-side items get journal entries**. Then I document the open items, have it reviewed, and make sure old reconciling items get resolved instead of carried forward indefinitely."`
      },
      {
        id: "doesnt-tie",
        q: "An account doesn't reconcile and you can't find the difference. What do you do?",
        why: "It tests your problem-solving method and your integrity: do you plug it, or do you investigate?",
        lessons: ["u02-3", "u02-4", "u12-2"],
        answer: `Show a method, and never plug it:
1. **Re-check the basics:** the right period, the right accounts, the support pulled as of the same date.
2. **Use the size of the difference:** an amount equal to one transaction, double an amount (posted to the wrong side), or **divisible by 9** (a transposition).
3. **Compare the detail:** subledger to GL by date range, and look for manual entries posted straight to a control account.
4. **Narrow it down** by month or by customer or vendor until the difference shows up.
5. If it's still unresolved, **document what you've tried and escalate**, with a proposed fix.

> "I'd rather tell my manager 'here's an open $300 item and everything I've ruled out' than make it disappear."`
      },
      {
        id: "ap-process",
        q: "Describe the accounts payable process. What controls matter?",
        why: "It's common for AP-heavy roles. They're listening for the three-way match and fraud awareness.",
        lessons: ["u07-1", "u07-2", "u07-4"],
        answer: `"Purchase order → receiving → invoice. Before paying, I **three-way match** quantity and price across the PO, the receiving report and the invoice, and send variances back to purchasing. I check for duplicates by vendor, invoice number and amount. Payments go out on a regular cycle, taking early-pay discounts when they're worth it. Key controls: **W-9s before the first payment**, **verifying bank-detail changes** by calling a number already on file, and **segregation**, so the person who sets up vendors doesn't approve or release payments."`
      },
      {
        id: "ar-collections",
        q: "How do you manage accounts receivable and collections?",
        why: "AR and cash flow matter to every company. They're checking that you're proactive and know which metrics to watch.",
        lessons: ["u06-1", "u06-2", "u14-2"],
        answer: `"Invoice promptly and accurately, since most late payments start as invoice disputes. Apply every payment to the specific invoice it pays. Review the **aging** weekly and follow a collections cadence: a reminder before the due date, then calls at 15 and 30 days past due, then escalation. I'd track **DSO** against our terms, and work with sales on credit limits for slow payers. Write-offs need independent approval."`
      },
      {
        id: "accrual-entry",
        q: "Payday is the 5th, but the month ends on the 31st. What entry do you make?",
        why: "It's a quick practical test. They want the actual entry, not the theory.",
        lessons: ["u10-4", "u03-2"],
        answer: `"Accrue the wages earned through the 31st that haven't been paid: **Dr Wages Expense, Cr Wages Payable**, calculated from the payroll register (for example 6 of 10 workdays × the biweekly gross). I'd also accrue the **employer payroll taxes** on those wages. Then I'd reverse the accrual on the 1st, or clear it when payroll runs on the 5th."`
      },
      {
        id: "flux",
        q: "How would you explain a big change in an expense from last month?",
        why: "It tests analysis, curiosity and communication, which managers value from staff accountants.",
        lessons: ["u12-3"],
        answer: `"First I'd see whether it's above our threshold, for example over 10% *and* over $5,000. Then I'd go to the **GL detail** and find what drove it: one-time items, a timing difference like a bill posted late or two months in one, a coding error, or a real change in activity. My explanation would give the **business reason, the amount, and whether it's one-time or ongoing**. 'Timing' alone isn't an explanation. And if an expense *dropped* to zero, I'd check for a missing entry first."`
      },
      {
        id: "1099",
        q: "What do you know about 1099s?",
        why: "It's common for small and mid-size companies, where staff accountants often run year-end 1099s.",
        lessons: ["u07-4"],
        answer: `"Form 1099-NEC reports payments to non-employees for services, generally to individuals, sole proprietors, partnerships and LLCs taxed as those, plus **attorneys even if incorporated**. Payments to corporations and for goods generally aren't reported, and card payments are reported by the processor. It's due to recipients and the IRS by **January 31**. The threshold was $600 for decades and rises to $2,000 for payments made after 2025, so I'd confirm the current IRS instructions each year. The real control is collecting **W-9s at vendor setup**, not in January."`
      },
      {
        id: "prioritize-close",
        q: "It's day 2 of close, three things are due today, and your manager hands you a fourth. What do you do?",
        why: "It tests prioritization and communication under deadline pressure.",
        answer: `"First I'd figure out what each one blocks. Tasks that hold up other people's close work, like bank recs that feed the cash reconciliation or accruals that feed review, come first. Then I'd **tell my manager right away** where things stand: 'I can have the new item by 3 if X moves to tomorrow morning. Does that work, or is something else more important?' I'd rather agree on the priority early than miss something quietly at 5 pm."`
      }
    ]
  });

  L.addInterviewSection({
    id: "behavioral",
    title: "Behavioral (STAR) questions",
    icon: "🗣️",
    blurb: "\"Tell me about a time…\" Have 5–6 true stories ready that you can adapt to any of these.",
    questions: [
      {
        id: "star-method",
        q: "How should I answer \"Tell me about a time…\" questions?",
        why: "Behavioral questions assume that how you acted before predicts how you'll act again. A structure keeps your answer short and concrete.",
        answer: `Use **STAR** and keep it to about 2 minutes:
- **Situation:** one or two sentences of context.
- **Task:** what *you* were responsible for.
- **Action:** what *you* did, specifically. Spend most of the answer here. Say "I", not "we".
- **Result:** the outcome, **with a number** if you can (hours saved, dollars found, days cut from the close), plus what you learned.

Before the interview, write out 5–6 stories that cover: an **error you found**, a **mistake you made**, a **tight deadline**, a **process you improved**, a **conflict**, and an **ethical or pressure situation**. Most behavioral questions fit one of them.`
      },
      {
        id: "found-error",
        q: "Tell me about a time you found an error others missed.",
        why: "Attention to detail is the trait accounting managers care about most, and they want proof of it.",
        answer: `A strong story has: what didn't look right, **how you traced it**, the **dollar impact**, and the **fix to the process** so it wouldn't happen again.

> *Situation/Task:* "Reconciling [an account], I found a difference that had been carried forward for months." *Action:* "I compared the detail line by line and traced it to [a duplicate entry / an entry posted to the wrong account]. I documented it and proposed a correcting entry." *Result:* "We corrected $X and added [a check or a restriction] so it couldn't recur."`
      },
      {
        id: "mistake",
        q: "Tell me about a mistake you made and how you handled it.",
        why: "They're checking honesty and ownership. Everyone makes mistakes; hiding them is what they're screening for.",
        answer: `Choose a **real but recoverable** mistake. Structure it as: what happened → **you raised it quickly** → how you fixed it → **what you changed** so it wouldn't happen again.

> "I keyed an amount wrong in a schedule and caught it during my tie-out, after it had gone to my manager. I told her right away, sent the corrected version within the hour, and since then I add a check cell to every schedule that turns red if it doesn't tie to the GL."

Never say you've never made a mistake.`
      },
      {
        id: "deadline",
        q: "Describe a time you had a tight deadline. How did you meet it?",
        why: "Month-end, quarter-end and year-end are deadline-driven, so they want evidence you handle pressure well.",
        answer: `Show **planning**, not just long hours: breaking the work into pieces, prioritizing what other people were waiting on, telling people early if something was at risk, and preparing ahead next time.

> "We had [deliverable] due in [time]. I listed everything required, did the items others were waiting on first, flagged one risk to my manager on day one, and delivered on time. Afterwards I built a template so the next one took half as long."`
      },
      {
        id: "process-improvement",
        q: "Tell me about a process you improved.",
        why: "Many postings ask for someone who will improve processes and controls. This is your chance to show you'd do it.",
        answer: `Pick something with a **before and after**: a manual report you automated (Power Query, SUMIFS templates, a recurring journal entry), a checklist you created, or a control you added.

> "Our [report] took about [X hours] a month of copying and pasting. I built a [Power Query / template] that pulled the data automatically. It now takes [Y minutes], with fewer errors."

Numbers make this answer much stronger.`
      },
      {
        id: "conflict",
        q: "Tell me about a disagreement with a coworker or manager.",
        why: "They're checking whether you can be professional, use facts, and stay respectful.",
        answer: `Pick a disagreement about **work**, not personalities. Show that you **listened**, **used facts or the documentation**, found a resolution, and kept the relationship intact.

> "A project manager wanted a cost coded to a different job to keep his budget green. I showed him what the invoice supported and why coding it there would misstate both jobs, and suggested a change order instead. We went with that, and he started checking coding questions with me before submitting."`
      },
      {
        id: "explain-non-finance",
        q: "How would you explain a financial issue to someone who isn't in finance?",
        why: "Accountants support operations, sales and owners, so being able to explain numbers in plain language matters.",
        answer: `"Lead with **what it means for them**, then the number, then what to do about it, and skip the jargon. For example: 'Your department spent $12,000 more than planned this month. Almost all of it was the emergency HVAC repair, which was one-time, so next month should be back on budget.' I'd bring a simple visual if it helps, and check that they understood."`
      },
      {
        id: "ethics-pressure",
        q: "What would you do if a manager asked you to record something you believed was wrong?",
        why: "Integrity is essential in accounting. They want to hear a firm, calm and professional answer.",
        lessons: ["u13-4"],
        answer: `"I'd first make sure I understood the request, since sometimes there's context I'm missing. If it would still misstate the books, like holding bills to hit a target or backdating an entry, I'd **decline politely and explain why**, suggest the correct treatment, **document the request**, and if I were pressured I'd **escalate** through the company's policy: my manager's boss, the controller, or the ethics line. Protecting the numbers protects everyone, including that manager."`
      }
    ]
  });

  L.addInterviewSection({
    id: "software",
    title: "Software and Excel",
    icon: "💻",
    blurb: "Many interviews include an Excel test or detailed software questions. Be specific about what you've actually done.",
    questions: [
      {
        id: "quickbooks",
        q: "What's your experience with QuickBooks (or our accounting system)?",
        why: "They want to know how much training you'll need, and whether you used the system for real work or only saw it.",
        lessons: ["u15-1"],
        answer: `Be **specific and honest**. List the tasks you actually did:
> "In QuickBooks Online I've [entered bills, applied payments, reconciled bank and card accounts, run P&L and aging reports, set up bank rules, used classes]."

If you don't know their system (NetSuite, Sage Intacct, Dynamics, Blackpurl…): "I haven't used [X], but I've learned [QBO, Procore, Bluebeam…] on the job, and the accounting is the same underneath. The chart of accounts, subledgers and reconciliations work the same way."`
      },
      {
        id: "excel-skills",
        q: "How strong are your Excel skills? Which functions do you use?",
        why: "Excel is used every day in accounting. Vague answers like \"advanced\" make interviewers suspicious.",
        lessons: ["u15-2"],
        answer: `Name the tools and say what you used them for:
- **SUMIFS / COUNTIFS** for schedules and summaries by account or month
- **XLOOKUP** (or **INDEX/MATCH**, **VLOOKUP**) to bring data from another list into this one
- **PivotTables** to summarize GL detail for flux analysis
- **IF**, **ROUND**, conditional formatting, data validation
- **Power Query** to automate imports, if you've used it

Then mention a habit: "I always include a **tie-out check** to the GL and keep inputs separate from formulas." Expect them to test you, so practice beforehand.`
      },
      {
        id: "excel-two-lists",
        q: "You have two lists — the bank's transactions and the GL's. How do you find what doesn't match in Excel?",
        why: "A common hands-on test, because it's the basis of reconciliation work.",
        lessons: ["u15-2", "u05-2"],
        answer: `"Put both lists in one sheet with a **key**: an amount plus a date or check number, or a reference ID. Use **XLOOKUP** (or COUNTIFS) from each list into the other to flag items with **no match**. Watch for duplicates, so use COUNTIFS to check how many times each key appears. Filter to the unmatched items on each side; those are your reconciling items. For one-to-many matches like batch deposits, a **PivotTable by date** helps group them."`
      },
      {
        id: "spreadsheet-accuracy",
        q: "How do you make sure your spreadsheets are accurate?",
        why: "Spreadsheet errors are a known risk. They want to hear about habits, not just \"I double-check\".",
        answer: `- **Tie-out cells** that compare to the GL, with the difference highlighted red if it isn't zero
- **Inputs visually separated** from formulas, and no numbers typed over formulas
- **Footing and cross-footing** (row totals and column totals agree)
- **Source notes** for every input (report name, export date)
- Rounding handled on purpose, with ROUND
- A **reviewer**, and a saved version for each close`
      }
    ]
  });

  L.addInterviewSection({
    id: "your-turn",
    title: "Your questions, pay and follow-up",
    icon: "❓",
    blurb: "\"Do you have any questions for us?\" Always say yes. Then handle pay and the follow-up well.",
    questions: [
      {
        id: "questions-to-ask",
        q: "What should I ask the interviewer?",
        why: "Asking no questions comes across as not interested. Good questions show you're already thinking about doing the job.",
        answer: `Pick 3–4:
- "What does a typical month-end close look like here, and how many days does it take?"
- "What would you want this person to own in their first 90 days?"
- "What systems do you use, and are any changes planned?"
- "What does success look like in this role after one year?"
- "How is the team structured, and who would I work with most?"
- "What's the biggest challenge the accounting team is facing right now?"
- "Is there support for the CPA exam or continuing education?"
- "What are the next steps in your process?"

Don't ask about pay, time off or remote work in the **first** interview unless they bring it up, and don't ask anything the posting or website already answers.`
      },
      {
        id: "salary",
        q: "What are your salary expectations?",
        why: "They're checking whether you fit the budget. Answering well means not underselling yourself and not pricing yourself out.",
        answer: `Research first: the posted range (many postings list one), local salary data, and the job level. Then:
- If the range is posted: "The posted range of $X–$Y works for me. Based on my experience I'd expect to be in the [middle/upper] part of it."
- If not: give a **researched range**, not one number: "From what I've seen for similar roles in this area, I'm targeting $X to $Y, and I'm flexible depending on the full package."

Consider the whole package: health insurance, 401(k) match, PTO, exam support, schedule flexibility.`
      },
      {
        id: "any-questions-closing",
        q: "How do I close the interview strongly?",
        why: "The last impression stays with them. A short, confident close helps them remember you.",
        answer: `At the end, briefly **restate your fit and your interest**:
> "Thank you. From what you've described, especially [something they said about the role], this is exactly the kind of work I want to do, and I think my [key strength] would help right away. I'm very interested. What are the next steps?"

Then shake hands (or thank them warmly on video), and send a thank-you note within 24 hours.`
      },
      {
        id: "thank-you-note",
        q: "What should my thank-you note say?",
        why: "Many applicants don't send one, so a specific, prompt note helps you stand out.",
        answer: `Send a **short email within 24 hours** to each interviewer:
> Subject: Thank you — Staff Accountant interview
>
> Hi [Name], thank you for your time today. I enjoyed hearing about [specific topic, such as your plans to tighten the close or the new system]. It reinforced my interest in the role. I'm confident my experience with [one relevant strength] would let me contribute quickly. Please let me know if I can provide anything else. Best regards, [Name] · [phone]

Keep it to 4–5 sentences, mention something specific from the conversation, and proofread it. A typo in an accounting thank-you note does real damage.`
      }
    ]
  });
})(window.LEDGER);
