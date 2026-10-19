LEDGER.addUnit({
  id: "u12",
  title: "The Month-End Close",
  icon: "🗓️",
  blurb: "Run a close like a controller: the checklist, reconciliations, flux analysis and entry review.",
  lessons: [
    {
      id: "u12-1",
      title: "The close calendar and checklist",
      read: `The **month-end close** turns a month of transactions into reviewed, reliable financial statements. Strong teams finish in **3–7 business days**, working from a written **close checklist** with an owner and a due day for every task.

A typical order:

1. **Cutoff and sub-ledgers.** Finish recording the month's activity: final invoices and bills, the payroll, card charges, receipts. Close the AR, AP, inventory and fixed-asset sub-ledgers.
2. **Recurring entries.** Depreciation, prepaid amortization and deferred-revenue release, usually from templates that someone reviews.
3. **Accruals and estimates.** Unbilled revenue, unrecorded liabilities, wages, bonuses, the bad-debt allowance, inventory reserves.
4. **Reconcile** every balance-sheet account (lesson 2).
5. **Review.** Flux analysis (lesson 3) and review of the journal entries (lesson 4).
6. **Report.** Financial statements, KPIs and commentary to management.
7. **Lock the period** in the accounting system.

Work on everything you can **before** month-end ("soft close" tasks): reconcile the bank through the 25th, get accrual estimates from department heads, chase missing receipts. Every day of the close you save is a day earlier that management gets the numbers.

> Locking the period stops anyone posting backdated entries that would quietly change numbers you've already reported. Corrections after the lock go into the current period, with approval.`,
      steps: [
        { type: "choice", q: "Which comes FIRST in a well-run close?", options: ["Preparing the financial statements", "Flux analysis", "Cutoff: finishing the period's transactions and closing the sub-ledgers", "Locking the period"], answer: 2,
          why: "Reconciliations, analysis and statements all depend on the transactions being complete, so cutoff comes first." },
        { type: "choice", q: "Why lock the period after the close?", options: ["To speed up the software", "So no one can post backdated entries that silently change reported numbers", "Because auditors require a password", "To stop new invoices"], answer: 1,
          why: "Once numbers are reported, they should only change on purpose, with approval, through an entry in the current period." },
        { type: "choice", q: "What's the best way to handle monthly depreciation and prepaid amortization?", options: ["Calculate each one by hand every month", "Recurring journal templates driven by the schedules, reviewed each month", "Skip them and true up at year-end", "Let the bank feed post them"], answer: 1,
          why: "Templates driven by the schedules are consistent and quick, and a monthly review catches any changes, such as new assets or cancelled policies." }
      ]
    },
    {
      id: "u12-2",
      title: "Balance-sheet reconciliations",
      read: `Every balance-sheet account gets **reconciled** every month: its GL balance is compared to **independent support** and every difference is explained.

| Account | Support |
|---|---|
| Cash | Bank statement → bank reconciliation |
| Accounts receivable / payable | Aging sub-ledger (must tie exactly) |
| Prepaid expenses | Prepaid schedule (item, cost, months, remaining) |
| Fixed assets / accumulated depreciation | Fixed-asset register |
| Accrued liabilities | Accrual schedule with the calculations |
| Debt | Lender statement + amortization schedule |
| Payroll liabilities | Payroll register + deposit confirmations |

A reconciliation is finished when it has:
- the **GL balance** and the **support balance** side by side
- each **reconciling item** listed, explained and **dated**
- a **preparer** sign-off and a separate **reviewer** sign-off, both dated

**Reconciling items should clear.** One that sits for months, like an unexplained $1,800 on the bank reconciliation, is either an error that needs fixing or something that should be written off with approval. Carrying it forward forever hides problems. Many teams require anything older than 60–90 days to be escalated.

Income-statement accounts aren't reconciled the same way. They're **analyzed** with flux analysis and checked for reasonableness.`,
      steps: [
        { type: "number", q: "Prepaid schedule at Dec 31: insurance $5,400 remaining; software subscription (paid $2,400 on Jul 1 for 12 months) remaining ?; nothing else. The GL shows $7,350. By how much is the GL overstated?", answer: 750, prefix: "$",
          why: "Software: 6 of 12 months used, so $1,200 remains. Schedule total = $5,400 + $1,200 = $6,600, and $7,350 − $6,600 = $750 that should have been expensed." },
        { type: "choice", q: "An unexplained $1,800 reconciling item has sat on the bank rec for 7 months. What's right?", options: ["Keep carrying it — it's small", "Investigate it; correct the error or write it off with approval, and document either way", "Plug it to miscellaneous expense quietly", "Delete it from the reconciliation"], answer: 1,
          why: "Old items should be resolved, not carried indefinitely. If it can't be resolved, writing it off needs approval and documentation." },
        { type: "choice", q: "Who signs off a reconciliation?", options: ["Only the preparer", "A preparer and a separate reviewer, with dates", "The auditor", "Nobody if it ties"], answer: 1,
          why: "Having someone other than the preparer review it is the control. The dates show the review was timely." }
      ]
    },
    {
      id: "u12-3",
      title: "Flux and variance analysis",
      read: `**Flux analysis** compares each account to a benchmark (last month, the same month last year, or the budget) and explains any change that's large enough to matter.

Set **thresholds** so you're not explaining every penny. A common rule: explain any change that's **more than X% AND more than $Y**, for example over 10% and over $5,000. The "and" is deliberate: a 75% jump on a $3,000 account isn't worth explaining, and neither is a $38,000 change on a $5 million account.

| Account | Last month | This month | Change | % | Explain? |
|---|---|---|---|---|---|
| Utilities | 3,200 | 5,600 | +2,400 | +75% | No ($ too small) |
| Repairs | 20,000 | 32,000 | +12,000 | +60% | **Yes** |
| Wages | 475,000 | 513,000 | +38,000 | +8% | No (% too small) |
| Rent | 8,000 | 0 | −8,000 | −100% | **Yes** |

A good explanation names the **business reason** and backs it up: *"Repairs +$12,000: emergency HVAC compressor replacement at the Cedar plant, PO 7712. One-time."* "Timing" on its own isn't an explanation. Say what the timing was.

Often the most useful thing flux analysis finds is something **missing**. Rent at $0 usually means a bill wasn't entered or a recurring entry didn't post. Fix it before the statements go out.`,
      steps: [
        { type: "number", q: "Utilities went from $3,200 to $5,600. What's the percent change?", answer: 75, suffix: "%",
          why: "($5,600 − $3,200) ÷ $3,200 = 75%." },
        { type: "choice", q: "Policy: explain changes over 10% AND over $5,000. Which needs an explanation?", options: ["Utilities +$2,400 (+75%)", "Wages +$38,000 (+8%)", "Repairs +$12,000 (+60%)", "Revenue −$4,000 (−2%)"], answer: 2,
          why: "Only repairs passes both tests. The others are under either the percent or the dollar threshold." },
        { type: "choice", q: "Rent expense is $0 this month; it's normally $8,000. What's the most likely cause?", options: ["The landlord forgot to charge", "A missed bill or a recurring/prepaid entry that didn't post — investigate before reporting", "Rent is seasonal", "It's fine; rent is fixed"], answer: 1,
          why: "A recurring expense that disappears is almost always a recording problem. Flux analysis is how you catch it." }
      ]
    },
    {
      id: "u12-4",
      title: "Reviewing entries, documentation and materiality",
      read: `**Manual journal entries** are the riskiest part of the books. They skip the controls built into invoicing and AP, and they're how most financial-statement fraud is done. Professional standards for them:
- **Support attached:** the calculation, the source documents, and a clear memo (Unit 2).
- **Preparer ≠ approver:** the system should enforce it. Nobody approves their own entries.
- **Review focus:** round-dollar amounts, entries to revenue or cash, entries posted after the close or on weekends, entries by senior people who don't normally post, and entries with vague memos.

**Materiality** is how big an error has to be before it would change a reasonable reader's decision. Auditors set an **overall materiality** from a benchmark, commonly about **5% of pre-tax income** (or a small percent of revenue or assets), and a lower **performance materiality** for testing.

Materiality isn't only about size. **Qualitative** factors can make a small error material: an error that turns a loss into a profit, hides a covenant breach, changes a trend, or involves fraud or a related party.

> Immaterial isn't the same as acceptable. Known errors get corrected. Materiality decides how much evidence you need and how a judgment call gets weighed, not whether you can leave something wrong.`,
      steps: [
        { type: "choice", q: "What's the best documentation for a month-end accrual?", options: ["A memo that says \"accrual\"", "The calculation, its source (contract, usage or time report), and a reviewer's sign-off", "An email from a manager", "Nothing — accruals reverse next month anyway"], answer: 1,
          why: "Someone else should be able to re-perform the entry from the documentation alone." },
        { type: "choice", q: "Which manual entry deserves the closest look?", options: ["Monthly depreciation from the template, $4,217.33", "A $250,000.00 credit to revenue posted by the CFO after the close, memo \"adj\"", "Payroll from the provider's journal", "A $45 bank fee"], answer: 1,
          why: "Round amount, revenue, posted after the close, by a senior person, with a vague memo: those are the standard fraud and error risk factors, all at once." },
        { type: "number", q: "Pre-tax income is $840,000. Using a 5% benchmark, what's overall materiality?", answer: 42000, prefix: "$",
          why: "5% × $840,000 = $42,000. Performance materiality would be set lower, for example 50–75% of that." }
      ]
    }
  ]
});
