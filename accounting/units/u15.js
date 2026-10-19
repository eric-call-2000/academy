LEDGER.addUnit({
  id: "u15",
  title: "Tools of the Trade and Construction Accounting",
  icon: "🧰",
  blurb: "QuickBooks Online and Excel the way pros use them, then job costing and the WIP schedule.",
  lessons: [
    {
      id: "u15-1",
      title: "QuickBooks Online in practice",
      read: `**QuickBooks Online** (QBO) runs the books of a huge share of small and mid-sized US businesses. The software handles the debits and credits. What you need to understand is how its features turn into journal entries.

- **Chart of accounts:** keep it lean and numbered (turn on account numbers in Settings). Each **Product/Service item** points to an income account (and, for inventory items, to Inventory and COGS), so an item set up wrong miscodes every sale that uses it.
- **Classes and Locations** tag transactions by department, job, branch or segment, so you can run a P&L for each without adding extra accounts.
- **Received payments** that haven't been deposited yet sit in **Payments to deposit** (formerly *Undeposited Funds*) until you record the bank deposit, so one deposit can combine several checks and match the bank line. A growing balance there usually means deposits weren't recorded, or the same payment was entered twice.
- **Bank feeds and rules** bring bank and card transactions in. A rule that auto-adds every "Amazon" charge to Office Supplies will also miscode inventory and equipment purchases. Set rules to **suggest, not auto-add**, wherever the coding varies.
- **Reconcile** each bank and card account monthly in QBO, matching the statement's ending balance exactly.
- **Close the books** (in Advanced settings) sets a **closing date and password**, which is how you lock a period in QBO.
- The **Audit log** shows who changed what and when. Check it when a closed-period number moves.

QBO is easy to start using, but it's just as easy to fill with errors that each look like a small problem. The habits from this course (reconciling, reviewing, documenting) apply in full.`,
      steps: [
        { type: "choice", q: "In QBO, where do received customer payments sit until you record the bank deposit?", options: ["Accounts Receivable", "Payments to deposit (formerly Undeposited Funds)", "Unearned Revenue", "The bank register directly"], answer: 1,
          why: "That holding account lets one deposit combine several payments so it matches the single line on the bank statement." },
        { type: "choice", q: "A bank-feed rule auto-adds every Amazon charge to Office Supplies. What's the risk?", options: ["None — rules save time", "Equipment, inventory and personal purchases get miscoded without anyone reviewing them", "QBO will reject the transactions", "It double-counts cash"], answer: 1,
          why: "Rules that auto-add skip review. Use them only for vendors whose coding never changes, and have them suggest a coding for everything else." },
        { type: "choice", q: "What does QBO's \"Close the books\" setting do?", options: ["Deletes prior-year transactions", "Sets a closing date and password so closed periods can't be changed casually", "Files the tax return", "Runs the closing entries"], answer: 1,
          why: "It's QBO's period lock. Changes before the closing date need the password and are recorded in the audit log." },
        { type: "choice", q: "You want a P&L for each of three branches without tripling the chart of accounts. What do you use?", options: ["Separate companies", "Classes or Locations", "Sub-accounts for every expense", "Custom fields on invoices"], answer: 1,
          why: "Classes and Locations tag transactions by segment and filter reports, so the chart of accounts stays clean." }
      ]
    },
    {
      id: "u15-2",
      title: "Excel for accountants",
      read: `Even with good software, accountants spend much of their time in **Excel**: reconciliations, schedules, analysis, and checking reports against each other. The functions that matter most:

| Need | Function |
|---|---|
| Total with conditions (by account, month, class) | **SUMIFS**(sum_range, criteria_range1, criteria1, …) |
| Count with conditions | **COUNTIFS** |
| Pull a value from another list (vendor → 1099 status) | **XLOOKUP**(lookup, lookup_array, return_array) — or INDEX/MATCH |
| Summarize thousands of GL lines by account and month | **PivotTable** |
| Stop pennies from drifting | **ROUND**(x, 2) on calculated amounts |
| Flag exceptions | **IF**, conditional formatting |

Habits that make a spreadsheet hold up in review:
- **Tie out:** every schedule shows its total next to the GL balance, with a **check cell** (difference = 0) that turns red when it's off.
- **Inputs vs. formulas:** keep typed inputs visually distinct (for example blue font) from formulas, and never type over a formula with a number.
- **Absolute references** ($A$1) for rates and assumptions, so formulas copy correctly.
- **Source notes:** say where each input came from ("GL detail 1400, exported 11/3").
- **Lock the period:** save the version that supported the close. Don't keep editing it next month.

Use PivotTables to summarize, and SUMIFS to build schedules that refresh automatically when new data is pasted in.`,
      steps: [
        { type: "choice", q: "Column A holds account names, column B months (like \"2026-10\"), column C amounts. Which formula totals Rent for October?", options: ["=SUM(C:C)", "=SUMIFS(C:C, A:A, \"Rent\", B:B, \"2026-10\")", "=COUNTIFS(A:A, \"Rent\")", "=VLOOKUP(\"Rent\", A:C, 3)"], answer: 1,
          why: "SUMIFS adds up the sum range wherever every condition is met. COUNTIFS only counts rows, and VLOOKUP returns just the first match." },
        { type: "choice", q: "You have a payments list and a separate vendor list with each vendor's 1099 status. How do you bring the status into the payments list?", options: ["Retype it", "XLOOKUP on the vendor name or ID", "SUMIFS", "A PivotTable"], answer: 1,
          why: "XLOOKUP (or INDEX/MATCH) looks up each payment's vendor and returns its status. Use a unique vendor ID if you can, because names are often spelled inconsistently." },
        { type: "choice", q: "What's the best use for a PivotTable at month-end?", options: ["Writing journal entries", "Summarizing GL detail by account and month to support flux analysis", "Storing the chart of accounts", "Replacing the bank reconciliation"], answer: 1,
          why: "Pivots summarize thousands of lines in seconds and let you drill down to the detail behind any number." }
      ]
    },
    {
      id: "u15-3",
      title: "Job costing in construction",
      read: `Contractors manage profit **job by job**, so every cost is coded to a **job** and a **cost code** (concrete, framing, electrical…) within one of a few **cost types**:

| Cost type | Examples |
|---|---|
| **Labor** | Field wages plus the burden on them (payroll taxes, workers' comp, benefits) |
| **Materials** | Lumber, rebar, fixtures delivered to the job |
| **Subcontractors** | Electrical, plumbing and other trade contracts |
| **Equipment** | Owned equipment charged at internal rates, rentals |
| **Other direct** | Permits, dumpsters, job-site trailers |

**Indirect costs** (the shop, supervisors who cover several jobs, small tools) are **allocated** to jobs on a reasonable basis, usually direct labor dollars or hours:

> Overhead rate = $120,000 overhead ÷ $400,000 direct labor = **30%**. A job with $50,000 of labor takes $15,000 of overhead.

Job-cost reports compare **budget vs. actual vs. committed** by cost code. **Committed costs** are signed POs and subcontracts that haven't been billed yet. Leave them out and a job looks healthier than it is.

**Retainage:** owners commonly withhold a percentage (often 5–10%) of each progress billing until the work is substantially complete. It's still earned and owed to you, so it's tracked separately as **Retainage Receivable**. On the other side, you withhold retainage from your subcontractors (**Retainage Payable**). Progress billings usually follow the AIA **G702/G703** pay-application format, with a schedule of values that matches your cost codes.`,
      steps: [
        { type: "entry", q: "Send a $100,000 progress billing. The owner withholds 10% retainage. Record it (credit Contract Revenue; the WIP schedule will adjust revenue later).",
          lines: [{ acct: "ar", dr: 90000 }, { acct: "retainage_rec", dr: 10000 }, { acct: "contract_revenue", cr: 100000 }],
          why: "$90,000 is due now and $10,000 is retainage, collectible at completion. Both are receivables, but tracking them separately keeps the aging meaningful." },
        { type: "number", q: "Overhead of $120,000 is allocated on direct labor of $400,000. Job 214 has $50,000 of direct labor. How much overhead does it get?", answer: 15000, prefix: "$",
          why: "Rate = $120,000 ÷ $400,000 = 30%, and 30% × $50,000 = $15,000." },
        { type: "choice", q: "What is a committed cost?", options: ["A cost already paid", "A signed PO or subcontract not yet billed", "Overhead allocated to a job", "A change order the owner rejected"], answer: 1,
          why: "Committed costs are money already promised. Leaving them out understates cost to date and makes a job look better than it is." }
      ]
    },
    {
      id: "u15-4",
      title: "Percentage of completion and the WIP schedule",
      read: `Long contracts are recognized as revenue **over time** under ASC 606, because the customer controls the work as it's built. Contractors usually measure progress with the **cost-to-cost** method:

> **% complete = Costs to date ÷ Total estimated costs**
> **Revenue earned to date = % complete × Contract price**

Billings follow the pay-application schedule, not the work actually done, so earned revenue and billings drift apart. The **WIP schedule** compares them for every job, every month:

| Job 301 | |
|---|---|
| Contract price | 1,000,000 |
| Total estimated cost | 800,000 |
| Cost to date | 320,000 |
| % complete (320 ÷ 800) | 40% |
| Earned revenue (40% × 1,000,000) | 400,000 |
| Billed to date | 450,000 |
| **Billings in excess of costs (overbilled)** | **50,000** |

- **Overbilled** (billed > earned): a **liability**, *Billings in Excess of Costs*. You've been paid for work you haven't done yet.
- **Underbilled** (earned > billed): an **asset**, *Costs in Excess of Billings*. Underbillings that keep growing are a red flag for surety companies and lenders, because they can mean costs that will never be billed.

If revenue was recorded as billed, the WIP adjustment fixes it. Overbilled: **Dr Contract Revenue, Cr Billings in Excess**.

**Loss jobs:** if estimated total cost goes above the contract price, recognize the **whole expected loss immediately**, not as the job progresses. The WIP schedule is the report that sureties, banks and owners rely on most when judging a contractor, and its accuracy depends entirely on honest **estimates of cost to complete**.`,
      steps: [
        { type: "number", q: "Job 301: costs to date $320,000; total estimated cost $800,000. What percent complete is it?", answer: 40, suffix: "%",
          why: "$320,000 ÷ $800,000 = 40%." },
        { type: "number", q: "The contract price is $1,000,000. How much revenue is earned to date?", answer: 400000, prefix: "$",
          why: "40% × $1,000,000 = $400,000." },
        { type: "number", q: "Billings to date are $450,000. How much is the job overbilled?", answer: 50000, prefix: "$",
          why: "$450,000 billed − $400,000 earned = $50,000, a liability: Billings in Excess of Costs." },
        { type: "entry", q: "Revenue has been recorded as billed ($450,000). Record the WIP adjustment so revenue equals what's earned.",
          lines: [{ acct: "contract_revenue", dr: 50000 }, { acct: "billings_in_excess", cr: 50000 }],
          why: "Revenue comes down to the $400,000 earned, and the $50,000 billed ahead of the work becomes a liability until the work catches up." },
        { type: "choice", q: "Halfway through a job, the estimated total cost rises above the contract price. When is the loss recognized?", options: ["Spread over the rest of the job", "At completion", "The entire estimated loss, immediately", "Only if the owner refuses a change order"], answer: 2,
          why: "Expected losses on contracts are recognized in full as soon as they're known. Don't wait for the costs to come in." }
      ]
    }
  ]
});
