LEDGER.addUnit({
  id: "u02",
  title: "Journal Entries and the Ledger",
  icon: "📝",
  blurb: "Write entries the way a reviewer expects, post them, and prove the books with a trial balance.",
  lessons: [
    {
      id: "u02-1",
      title: "Anatomy of a journal entry",
      read: `A **journal entry** is the record of one transaction. A professional entry has five parts:

1. **Date** — when the transaction happened (not when you typed it).
2. **Accounts debited** — listed first, aligned left.
3. **Accounts credited** — listed after the debits and indented.
4. **Amounts** — debits equal credits, always.
5. **Memo and support** — a short description and a link to the source document: the invoice, receipt, contract, bank statement or calculation.

| Date | Account | Debit | Credit |
|---|---|---|---|
| Oct 3 | Equipment | 9,000 | |
| | Cash | | 3,000 |
| | Notes Payable | | 6,000 |
| | *Memo: Forklift purchase, $3,000 down, balance on a 3-year note. Invoice #4471 attached.* | | |

That's a **compound entry**: one transaction, more than two accounts. It's better than two separate entries because it keeps the whole transaction together in one place.

The support matters as much as the numbers. An auditor, a reviewer or you six months from now should be able to look at the entry and see *why* it was made without having to ask anyone. "Adjustment" is not a memo. "Accrue October electricity per meter read 10/31, bill not yet received" is a memo.

In most software (QuickBooks, Sage, NetSuite) everyday transactions such as invoices, bills and payments create journal entries automatically. You write manual entries for adjustments, accruals, reclasses and corrections, and those are the entries reviewers look at most closely.`,
      steps: [
        { type: "entry", q: "Oct 3: the company buys a forklift for $9,000 — $3,000 cash down and the rest on a note payable. Record it as one compound entry.",
          lines: [{ acct: "equipment", dr: 9000 }, { acct: "cash", cr: 3000 }, { acct: "notes_payable", cr: 6000 }],
          why: "The asset is debited for its full cost. The two ways you paid for it, cash and a new liability, are both credits, and together they equal the debit." },
        { type: "entry", q: "Oct 5: buy $650 of office supplies on account. The company records supplies as an asset when bought.",
          lines: [{ acct: "supplies", dr: 650 }, { acct: "ap", cr: 650 }],
          why: "Supplies (an asset) goes up and you owe the vendor (Accounts Payable). The supplies become an expense later, as they're used." },
        { type: "choice", q: "Which is the best support to attach to an entry recording a vendor's bill?", options: ["An email from the purchasing manager saying it's fine", "The vendor's invoice, matched to the purchase order and receiving record", "A screenshot of the bank balance", "A note saying \"per controller\""], answer: 1,
          why: "The source document is the vendor's invoice. Matching it to the PO and receiving record proves you ordered the goods, received them, and are being billed the right amount." },
        { type: "choice", q: "Which memo would a reviewer accept on a manual accrual?", options: ["\"Adj\"", "\"Per discussion\"", "\"Accrue Oct legal fees: Smith & Co. engagement, 14 hrs at $250 per time report; bill expected Nov\"", "\"Month-end entry\""], answer: 2,
          why: "A good memo says what the entry is, how the amount was calculated, and where the support is. Someone else can re-perform it without asking you." }
      ]
    },
    {
      id: "u02-2",
      title: "Recording everyday transactions",
      read: `Most of a company's entries come from a handful of repeating patterns. Learn these and you can record most of what crosses a bookkeeper's desk:

| Transaction | Debit | Credit |
|---|---|---|
| Invoice a customer | Accounts Receivable | Revenue |
| Customer pays the invoice | Cash | Accounts Receivable |
| Cash sale | Cash | Revenue |
| Receive a vendor bill for an expense | Expense | Accounts Payable |
| Pay the vendor | Accounts Payable | Cash |
| Customer pays before you do the work | Cash | Unearned Revenue |
| Pay rent in advance | Prepaid Rent | Cash |
| Owner/shareholder distribution | Draws or Dividends | Cash |

Two habits help with any transaction you haven't seen before:

1. **Start with cash, if it moved.** Cash in is a debit and cash out is a credit. That settles one side, and you only have to work out the other.
2. **Ask what changed.** Did you gain something you control (an asset)? Take on an obligation (a liability)? Earn something (revenue)? Use something up (an expense)?

Collecting a receivable is **not revenue**. You already recorded the revenue when you invoiced. The payment just swaps one asset (the receivable) for another (cash). The same goes for paying a bill you already recorded: the expense was recorded with the bill, and the payment only settles the liability.`,
      steps: [
        { type: "entry", q: "You finish a consulting project and invoice the client $4,800, due in 30 days.",
          lines: [{ acct: "ar", dr: 4800 }, { acct: "service_revenue", cr: 4800 }],
          why: "You earned the revenue when you did the work. Until the client pays, what you hold is a receivable." },
        { type: "entry", q: "The client pays the $4,800 invoice in full.",
          lines: [{ acct: "cash", dr: 4800 }, { acct: "ar", cr: 4800 }],
          why: "Cash goes up and the receivable goes away. There's no revenue here, because it was recorded with the invoice." },
        { type: "entry", q: "You pay a vendor $2,300 for a bill already recorded in Accounts Payable.",
          lines: [{ acct: "ap", dr: 2300 }, { acct: "cash", cr: 2300 }],
          why: "The expense was recorded when the bill came in. Paying it just reduces the liability and cash." },
        { type: "entry", q: "A customer pays a $3,000 deposit for work you'll do next month.",
          lines: [{ acct: "cash", dr: 3000 }, { acct: "unearned_rev", cr: 3000 }],
          why: "You have the cash but haven't earned it yet. Until you do the work, it's a liability: Unearned Revenue." },
        { type: "entry", q: "The corporation declares and immediately pays a $5,000 cash dividend. Use the Dividends account.",
          lines: [{ acct: "dividends", dr: 5000 }, { acct: "cash", cr: 5000 }],
          why: "Dividends reduce equity but aren't an expense, so they never touch the income statement. At year-end, Dividends is closed into Retained Earnings." }
      ]
    },
    {
      id: "u02-3",
      title: "Posting and the general ledger",
      read: `Journal entries are recorded in date order. **Posting** copies each line into its account in the **general ledger** (GL), which has one page per account and keeps a running balance. Accounting software posts the moment you save, but the idea is the same.

| Date | Memo | Debit | Credit | Balance |
|---|---|---|---|---|
| Oct 1 | Opening balance | | | 7,400 |
| Oct 9 | Client payment, Inv 1042 | 4,800 | | 12,200 |
| Oct 12 | Vendor payment, Bill 88 | | 2,300 | 9,900 |
| Oct 15 | Utilities | | 1,200 | 8,700 |

**Subsidiary ledgers** hold the detail behind a summary account. The Accounts Receivable account in the GL is a **control account**: one total balance. The **AR subledger** (the customer aging) breaks that balance down by customer and invoice. Accounts Payable works the same way, with a vendor subledger.

> The subledger and its control account must always agree. If they don't, something was posted to one and not the other.

The most common cause is a manual journal entry posted straight to the AR or AP account, which updates the control account but isn't attached to any customer or vendor, so the subledger never sees it. That's why many companies stop people posting manual entries to control accounts at all.`,
      steps: [
        { type: "number", q: "Cash opens the month at $7,400. Then: +$4,800 collection, −$2,300 vendor payment, −$1,200 utilities, +$3,000 customer deposit. What's the ledger balance?", answer: 11700, prefix: "$",
          why: "$7,400 + $4,800 − $2,300 − $1,200 + $3,000 = $11,700." },
        { type: "choice", q: "The AR control account shows $48,200 but the customer aging totals $47,700. What do you check first?", options: ["Write off $500 to bad debt expense", "Look for a manual journal entry posted directly to the AR account with no customer attached", "Adjust the aging report to match the GL", "Ignore it — $500 is immaterial"], answer: 1,
          why: "A $500 difference between a control account and its subledger usually means something posted to one and not the other, and a manual entry straight to AR is the usual cause. Find it before you adjust anything." },
        { type: "number", q: "The Equipment account starts the year at $42,000. You buy a $9,000 forklift and dispose of a machine that cost $5,500. What's the ending balance?", answer: 45500, prefix: "$",
          why: "$42,000 + $9,000 − $5,500 = $45,500. Disposals remove the asset's original cost. Its accumulated depreciation is removed separately." }
      ]
    },
    {
      id: "u02-4",
      title: "The trial balance and finding errors",
      read: `A **trial balance** (TB) lists every account with its balance, debits in one column and credits in the other. If total debits equal total credits, the ledger is *arithmetically* in balance.

A balanced TB does **not** prove the books are right. It can't catch:
- an entry posted to the **wrong account** (repairs recorded as equipment)
- an entry **left out** entirely, or **recorded twice**
- two errors that **cancel** each other out
- the **wrong amount** on both sides of an entry

When a TB *doesn't* balance, the size of the difference is a clue:

| Difference is… | Suspect |
|---|---|
| Equal to one transaction | One side of an entry wasn't posted |
| Twice an amount | Something was posted to the wrong side (a $225 credit posted as a debit makes a $450 gap) |
| Divisible by 9 | A **transposition** ($4,520 keyed as $4,250, a $270 gap) or a **slide** ($1,500 keyed as $150) |

Modern systems won't save an entry that doesn't balance, so these hunts are now most common in spreadsheets, imports and conversions. The trial balance itself is still the starting point for every set of financial statements and every audit.`,
      steps: [
        { type: "number", q: "Your TB shows debits of $184,350 and credits of $183,900. If the cause is a single amount posted to the wrong side, how big was that amount?", answer: 225, prefix: "$",
          why: "Posting an amount to the wrong side moves it from one column to the other, which creates a gap twice its size: $450 ÷ 2 = $225." },
        { type: "choice", q: "Which error will a trial balance NOT reveal?", options: ["A $500 debit posted without its credit", "Recording a $500 repair as Equipment instead of Repairs Expense", "A $500 credit posted as a debit", "Adding a column wrong"], answer: 1,
          why: "Debits still equal credits, just in the wrong account. Catching this takes review: reading the GL detail, flux analysis, and checking the support." },
        { type: "choice", q: "The TB is out by $270. What's a good first suspect?", options: ["A transposition, like $4,520 keyed as $4,250", "A missing $135 entry", "Rounding", "A duplicated entry"], answer: 0,
          why: "$270 is divisible by 9, which points to transposed digits or a slid decimal. $4,520 − $4,250 = $270." },
        { type: "number", q: "Here are the balances: Cash 11,700 · AR 6,200 · Supplies 1,050 · Equipment 45,500 · AP 7,350 · Notes Payable 6,000 · Owner's Capital 40,000 · Owner's Draws 1,800 · Service Revenue 22,500 · Wages Expense 6,400 · Rent Expense 2,000 · Utilities Expense 1,200. What's the total of the debit column?", answer: 75850, prefix: "$",
          why: "The debit-balance accounts are assets, draws and expenses: 11,700 + 6,200 + 1,050 + 45,500 + 1,800 + 6,400 + 2,000 + 1,200 = $75,850. The credits (7,350 + 6,000 + 40,000 + 22,500) also total $75,850, so it balances." }
      ]
    }
  ]
});
