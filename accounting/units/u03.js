LEDGER.addUnit({
  id: "u03",
  title: "Accrual Accounting and Adjustments",
  icon: "⏳",
  blurb: "Put revenue and expenses in the right period: accruals, deferrals and depreciation.",
  lessons: [
    {
      id: "u03-1",
      title: "Cash basis vs. accrual basis",
      read: `Under the **cash basis**, you record revenue when cash comes in and expenses when cash goes out. It's simple, and many small businesses use it for taxes.

Under the **accrual basis**, which GAAP requires, you record:
- **revenue when it's earned**, meaning when you deliver the goods or services you promised, whenever the customer pays (**revenue recognition**);
- **expenses when they're incurred**, in the same period as the revenue they helped produce (**matching**, or expense recognition).

The difference is timing, and timing changes the story the statements tell:

| | Cash basis | Accrual basis |
|---|---|---|
| December job, invoiced Jan, paid Feb | Revenue in Feb | Revenue in Dec |
| December wages, paid Jan 5 | Expense in Jan | Expense in Dec |
| 12-month insurance paid in Oct | All expense in Oct | 1/12 each month |

Accrual books need **adjusting entries** at the end of each period, because some things happen without a transaction to trigger an entry. Employees earn wages every day but are only paid every other Friday. Insurance expires a little each day. Adjusting entries fall into three families: **accruals** (earned or incurred but not yet recorded), **deferrals** (recorded but not yet earned or used), and **estimates** such as depreciation and bad debts.

An adjusting entry almost never touches cash. If you're debiting or crediting Cash at month-end, you're probably recording a transaction rather than making an adjustment.`,
      steps: [
        { type: "choice", q: "You finish a $6,000 job in December, invoice it in January and collect in February. Under accrual accounting, when is the revenue recorded?", options: ["December", "January", "February", "Split evenly across the three months"], answer: 0,
          why: "Revenue is recognized when it's earned, meaning when you delivered what you promised. That was December, whatever the billing and payment dates." },
        { type: "number", q: "In March the company performed $45,000 of work. It collected $38,000 in March, of which $6,000 was for February work. What is March revenue on the accrual basis?", answer: 45000, prefix: "$",
          why: "Accrual revenue is the work performed in March: $45,000. On the cash basis it would be the $38,000 collected, including $6,000 that belongs to February." },
        { type: "choice", q: "Which principle says to record an expense in the same period as the revenue it helped generate?", options: ["Going concern", "Matching (expense recognition)", "Conservatism", "Historical cost"], answer: 1,
          why: "Matching puts costs in the same period as the revenue they helped earn, so profit for the period means something." }
      ]
    },
    {
      id: "u03-2",
      title: "Accruals: earned or incurred, not yet recorded",
      read: `An **accrual** records something that has already happened economically before the paperwork or cash catches up.

**Accrued expenses** are costs you've incurred but haven't been billed for or paid:
- **Wages** earned by employees since the last payday
- **Interest** that has built up on a loan since the last payment (principal × annual rate × fraction of the year)
- **Utilities**, legal fees and other services used this month but billed next month

The entry is **Dr Expense, Cr a liability** (Wages Payable, Interest Payable, Accrued Expenses).

**Accrued revenue** is revenue you've earned but haven't invoiced yet, such as work finished at month-end that will be billed next week. The entry is **Dr Accounts Receivable** (some companies use a separate Unbilled Receivables account), **Cr Revenue**.

| Situation | Debit | Credit |
|---|---|---|
| 3 days of unpaid wages, $3,600 | Wages Expense 3,600 | Wages Payable 3,600 |
| 1 month's interest on a $20,000 note at 6% | Interest Expense 100 | Interest Payable 100 |

When the bill or payday arrives next month, it settles the liability instead of being recorded as a new expense. Many teams use **reversing entries**: on day 1 of the new month the system automatically reverses the accrual, so the real bill can be entered the normal way without counting the expense twice.

Accruals are estimates, so base each one on evidence: a timesheet, a contract rate, last month's meter reading. Write down how you calculated it.`,
      steps: [
        { type: "entry", q: "Employees have earned $3,600 for the last three days of the month. Payday is next week.",
          lines: [{ acct: "wages_exp", dr: 3600 }, { acct: "wages_payable", cr: 3600 }],
          why: "The expense belongs to this month because the employees did the work this month. Until payday, the company owes it: Wages Payable." },
        { type: "entry", q: "A $20,000 note payable carries 6% annual interest. One month has passed and no interest has been recorded. Accrue it.",
          lines: [{ acct: "interest_exp", dr: 100 }, { acct: "interest_payable", cr: 100 }],
          why: "$20,000 × 6% × 1/12 = $100. Interest builds up over time, so you record it monthly even though you pay it less often." },
        { type: "entry", q: "At month-end you've finished $2,500 of consulting work that won't be invoiced until next week. Accrue the revenue (use Accounts Receivable).",
          lines: [{ acct: "ar", dr: 2500 }, { acct: "service_revenue", cr: 2500 }],
          why: "The revenue was earned this month. When next week's invoice goes out, it replaces this accrual rather than adding revenue a second time." },
        { type: "entry", q: "December's electricity, about $840 based on the meter reading, won't be billed until January 10. Accrue it at December 31.",
          lines: [{ acct: "utilities_exp", dr: 840 }, { acct: "accrued_exp", cr: 840 }],
          why: "You used the power in December, so the expense belongs there. Accrued Expenses holds it until the bill arrives." }
      ]
    },
    {
      id: "u03-3",
      title: "Deferrals: prepaid expenses and unearned revenue",
      read: `A **deferral** is the opposite of an accrual: cash has already moved, but the expense or revenue belongs to *future* periods.

**Prepaid expenses** are paid in advance and used up over time: insurance, rent, software subscriptions, maintenance contracts. You record the payment as an **asset**, then each month move the used-up portion to expense:

> Oct 1: pay $7,200 for 12 months of insurance → Dr Prepaid Insurance 7,200, Cr Cash 7,200.
> Each month-end: Dr Insurance Expense 600, Cr Prepaid Insurance 600.

**Unearned (deferred) revenue** is cash received before you deliver. You record it as a **liability**, then recognize revenue as you earn it:

> Dec 1: customer prepays $9,000 for six months of service → Dr Cash, Cr Unearned Revenue.
> Each month-end: Dr Unearned Revenue 1,500, Cr Service Revenue 1,500.

**Supplies** work the same way as prepaids, except you count what's left rather than spreading the cost evenly. Expense = what you had − what's still on the shelf.

| Account | Starts as | Each period |
|---|---|---|
| Prepaid expense | Asset | Asset ↓, Expense ↑ |
| Unearned revenue | Liability | Liability ↓, Revenue ↑ |
| Supplies | Asset | Expense = used, from a count |

Professionals keep a **prepaid schedule** (and a deferred-revenue schedule) listing each item, its total cost, start date, months and remaining balance. At month-end, the schedule's remaining total should equal the GL balance exactly.`,
      steps: [
        { type: "entry", q: "On Oct 1 the company paid $7,200 for a 12-month insurance policy and recorded it as Prepaid Insurance. Record the October 31 adjustment.",
          lines: [{ acct: "insurance_exp", dr: 600 }, { acct: "prepaid_ins", cr: 600 }],
          why: "$7,200 ÷ 12 = $600 of coverage used up in October. That portion moves from the asset to expense." },
        { type: "number", q: "After the October, November and December adjustments, what's left in Prepaid Insurance on Dec 31?", answer: 5400, prefix: "$",
          why: "Three months used × $600 = $1,800. $7,200 − $1,800 = $5,400, which covers January through September." },
        { type: "entry", q: "On Dec 1 a customer prepaid $9,000 for six months of service, recorded as Unearned Revenue. Record the Dec 31 adjustment.",
          lines: [{ acct: "unearned_rev", dr: 1500 }, { acct: "service_revenue", cr: 1500 }],
          why: "One month of six delivered: $9,000 ÷ 6 = $1,500 earned. The liability shrinks and revenue grows." },
        { type: "entry", q: "The Supplies account shows $1,750. A count at month-end finds $420 on hand. Record the adjustment.",
          lines: [{ acct: "supplies_exp", dr: 1330 }, { acct: "supplies", cr: 1330 }],
          why: "Used = $1,750 − $420 = $1,330. Expense that amount so the asset equals what's actually on the shelf." }
      ]
    },
    {
      id: "u03-4",
      title: "Depreciation and the adjusted trial balance",
      read: `Equipment, vehicles and buildings help earn revenue for years, so matching says to spread their cost over those years. That's **depreciation**: a way of allocating cost, not an estimate of what the asset would sell for today.

The simplest method is **straight-line**:

> Annual depreciation = (Cost − Salvage value) ÷ Useful life

The entry each period is **Dr Depreciation Expense, Cr Accumulated Depreciation**. Accumulated Depreciation is a **contra-asset**. It sits under the asset on the balance sheet and keeps a running total of depreciation to date, while the asset account keeps showing original cost:

| Balance sheet extract | |
|---|---|
| Equipment | 48,000 |
| Less: Accumulated Depreciation | (12,000) |
| **Net book value** | **36,000** |

Keeping cost and accumulated depreciation separate shows the reader both what the asset cost and how much of its life is used up. It also makes disposals straightforward (Unit 9).

Once every adjusting entry is posted, you run an **adjusted trial balance**. That's the TB the financial statements are built from: revenue and expense accounts go to the income statement, and asset, liability and equity accounts go to the balance sheet. Unit 9 covers the faster depreciation methods (declining balance, units of production).`,
      steps: [
        { type: "entry", q: "Equipment cost $48,000, has a $6,000 salvage value and a 7-year life. Record one month of straight-line depreciation.",
          lines: [{ acct: "dep_exp", dr: 500 }, { acct: "accum_dep", cr: 500 }],
          why: "($48,000 − $6,000) ÷ 7 = $6,000 a year, or $500 a month. Credit the contra-asset, not Equipment." },
        { type: "number", q: "What's that equipment's net book value after exactly 2 years?", answer: 36000, prefix: "$",
          why: "Accumulated depreciation after 2 years = $6,000 × 2 = $12,000. Book value = $48,000 − $12,000 = $36,000." },
        { type: "choice", q: "Why credit Accumulated Depreciation instead of crediting Equipment directly?", options: ["Tax law requires it", "So the books keep the original cost visible while showing how much has been depreciated", "Because Equipment can never be credited", "So depreciation shows up as a liability"], answer: 1,
          why: "The contra-account keeps original cost and accumulated depreciation side by side, which gives readers more information and makes disposals simple." },
        { type: "choice", q: "Which trial balance are the financial statements prepared from?", options: ["The unadjusted trial balance", "The adjusted trial balance", "The post-closing trial balance", "The bank statement"], answer: 1,
          why: "The adjusted TB includes every accrual, deferral and estimate. The post-closing TB comes after year-end closing and only has balance-sheet accounts left." }
      ]
    }
  ]
});
