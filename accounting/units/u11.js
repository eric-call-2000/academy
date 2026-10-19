LEDGER.addUnit({
  id: "u11",
  title: "Debt, Sales Tax and Equity",
  blurb: "Notes and interest, loan amortization, sales tax you collect for the state, and the owners' side.",
  lessons: [
    {
      id: "u11-1",
      title: "Notes payable and interest",
      read: `A **note payable** is a formal written promise to repay borrowed money, usually with interest: a bank loan, an equipment loan or a seller-financed purchase.

Borrowing: **Dr Cash, Cr Notes Payable.** The principal is a liability, not revenue. You received cash, but you owe it back.

**Interest** is the cost of borrowing, and it builds up with time:

> **Interest = Principal × Annual rate × Time** (as a fraction of a year)

So three months on $60,000 at 7% = $60,000 × 7% × 3/12 = **$1,050**.

Accrue interest every month-end even when payments are quarterly or annual: **Dr Interest Expense, Cr Interest Payable.** When the payment is made, it clears Interest Payable first, then pays down principal.

Read the loan agreement as carefully as the numbers, because it may contain **covenants**: promises such as keeping a minimum current ratio or a maximum debt-to-equity, or delivering financial statements within 90 days of year-end. Breaking a covenant can let the lender **call the loan** (demand repayment now), and under GAAP that can force the whole balance to be classified as **current** on the balance sheet. Controllers track covenant ratios every month so they're never surprised.`,
      steps: [
        { type: "entry", q: "Borrow $60,000 from the bank on a 5-year note.",
          lines: [{ acct: "cash", dr: 60000 }, { acct: "notes_payable", cr: 60000 }],
          why: "Cash comes in and you take on a liability. Borrowing is never revenue." },
        { type: "number", q: "The note carries 7% annual interest. How much interest builds up over 3 months?", answer: 1050, prefix: "$",
          why: "$60,000 × 7% × 3/12 = $1,050." },
        { type: "entry", q: "Accrue that 3 months of interest at quarter-end (no payment yet).",
          lines: [{ acct: "interest_exp", dr: 1050 }, { acct: "interest_payable", cr: 1050 }],
          why: "The cost belongs to the months it built up in, and Interest Payable holds it until the payment." }
      ]
    },
    {
      id: "u11-2",
      title: "Loan amortization and the current portion",
      read: `Most business loans are **amortizing**: equal payments, each part interest and part principal. Each month, interest is calculated on the *remaining* balance, so early payments are mostly interest and later ones are mostly principal.

Example: $100,000 at 6% for 5 years, monthly payments of **$1,933.28**.

| Payment | Interest (0.5% × balance) | Principal | Balance after |
|---|---|---|---|
| 1 | 500.00 | 1,433.28 | 98,566.72 |
| 2 | 492.83 | 1,440.45 | 97,126.27 |
| 3 | 485.63 | 1,447.65 | 95,678.62 |

Each payment's entry: **Dr Interest Expense** (the interest part), **Dr Notes Payable** (the principal part), **Cr Cash** (the full payment).

Keep an **amortization schedule** for every loan. It's the support for both the interest expense and the loan balance, and it should tie to the lender's statement. Small differences are usually rounding, or interest calculated on actual days instead of 30-day months.

**Current portion.** On the balance sheet, the principal due in the **next 12 months** is a **current liability**, and the rest is noncurrent. You get the current amount from the schedule (add up the next 12 principal amounts) and reclassify it at each balance-sheet date. Lenders and auditors check this, because it changes working capital and the current ratio.`,
      steps: [
        { type: "number", q: "Loan balance $100,000 at 6% annual interest, paid monthly. How much of the first payment is interest?", answer: 500, prefix: "$",
          why: "6% ÷ 12 = 0.5% per month, and 0.5% × $100,000 = $500." },
        { type: "number", q: "The monthly payment is $1,933.28. How much of the first payment reduces principal?", answer: 1433.28, prefix: "$",
          why: "$1,933.28 − $500.00 = $1,433.28." },
        { type: "entry", q: "Record that first payment.",
          lines: [{ acct: "interest_exp", dr: 500 }, { acct: "notes_payable", dr: 1433.28 }, { acct: "cash", cr: 1933.28 }],
          why: "The interest is an expense, the principal reduces the loan, and the full payment leaves cash." },
        { type: "choice", q: "On the balance sheet, where does the principal due over the next 12 months go?", options: ["Noncurrent liabilities, with the rest of the loan", "Current liabilities", "Equity", "It's netted against cash"], answer: 1,
          why: "Anything due within a year is current. Reclassify it from the amortization schedule at each balance-sheet date." }
      ]
    },
    {
      id: "u11-3",
      title: "Sales tax payable",
      read: `When you sell taxable goods (and, in some states, services), you **collect sales tax from the customer on behalf of the state**. It's never your revenue. It's a **liability** from the moment you collect it until you file the return and pay it over.

> Sell $2,000 of goods + 6.1% tax for cash: **Dr Cash 2,122 · Cr Sales Revenue 2,000 · Cr Sales Tax Payable 122.**
> File and pay: **Dr Sales Tax Payable · Cr Cash.**

If a register total *includes* tax, separate the two pieces: Revenue = Total ÷ (1 + rate). $5,300 at 6% → $5,000 of revenue and $300 of tax.

Things that go wrong in practice:
- **Nexus.** Since the 2018 *Wayfair* decision, a state can require you to collect its sales tax just because you sell enough into it (economic nexus), even with no office there. Track sales by state against each state's thresholds.
- **Exemption certificates.** Sales to resellers and exempt organizations are only tax-free if you have a valid certificate on file. Without one, an auditor will treat the sale as taxable and you pay the tax.
- **Use tax.** If you buy taxable items without being charged sales tax (often from out-of-state vendors), you usually owe **use tax** to your own state, accrued as an expense.

Reconcile Sales Tax Payable to the filed returns every period. Any balance left over after a payment needs an explanation.`,
      steps: [
        { type: "entry", q: "Cash sale of $2,000 of goods plus 6.1% sales tax. (Ignore the cost side.)",
          lines: [{ acct: "cash", dr: 2122 }, { acct: "sales_revenue", cr: 2000 }, { acct: "sales_tax_payable", cr: 122 }],
          why: "6.1% × $2,000 = $122, collected for the state. Revenue is only the $2,000 price." },
        { type: "entry", q: "File the monthly return and pay the $3,480 of sales tax collected.",
          lines: [{ acct: "sales_tax_payable", dr: 3480 }, { acct: "cash", cr: 3480 }],
          why: "Paying the state clears the liability. It's not an expense, because it was the customers' money." },
        { type: "number", q: "A register shows $5,300 collected, including 6% sales tax. How much is revenue?", answer: 5000, prefix: "$",
          why: "$5,300 ÷ 1.06 = $5,000 revenue, and the other $300 is tax owed to the state." },
        { type: "choice", q: "Sales tax collected from customers is…", options: ["Revenue", "A liability until remitted", "Equity", "An expense"], answer: 1,
          why: "You're collecting it on the state's behalf. Recording it as revenue overstates sales." }
      ]
    },
    {
      id: "u11-4",
      title: "Equity: owners, draws and dividends",
      read: `Equity accounts depend on how the business is organized:

| Entity | Contributions | Payouts to owners | Accumulated profit |
|---|---|---|---|
| **Sole proprietorship** | Owner's Capital | **Owner's Draws** | Closed into Owner's Capital |
| **Partnership / LLC** | Each partner's Capital account | Each partner's Draws or Distributions | Allocated per the operating agreement |
| **Corporation** | Common Stock (plus Additional Paid-in Capital above par) | **Dividends** | **Retained Earnings** |

What the forms have in common: **payouts to owners are not expenses.** Draws and dividends reduce equity directly and never appear on the income statement. A business can be very profitable and still pay its owners nothing, or pay them more than it earned.

A sole proprietor's "salary" is a draw, not wages. (Owners of S corporations who work in the business are an exception: they must take *reasonable* W-2 wages, which are a real expense, and any further payouts are distributions.)

**Statement of changes in equity** for a corporation:

> Ending equity = Common stock + (Beginning RE + Net income − Dividends)

When a corporation issues stock, it records Dr Cash and Cr Common Stock for the par value, with anything above par going to Additional Paid-in Capital. (This course's chart has no APIC account, so the exercises use issues at par.)`,
      steps: [
        { type: "entry", q: "The owner of a sole proprietorship takes $2,500 for personal use.",
          lines: [{ acct: "owner_draws", dr: 2500 }, { acct: "cash", cr: 2500 }],
          why: "A draw reduces equity directly. It's not wages and it's not an expense." },
        { type: "choice", q: "Are owner's draws an expense on the income statement?", options: ["Yes, as wages", "Yes, as other expense", "No — they reduce equity directly", "Only if over $10,000"], answer: 2,
          why: "Draws and dividends are payouts of equity, not costs of running the business." },
        { type: "entry", q: "A corporation issues 10,000 shares of $1 par stock for $10,000 cash.",
          lines: [{ acct: "cash", dr: 10000 }, { acct: "common_stock", cr: 10000 }],
          why: "Issued at par, so all $10,000 goes to Common Stock. Anything above par would go to Additional Paid-in Capital." },
        { type: "number", q: "Common stock $50,000; beginning retained earnings $140,000; net income $36,000; dividends $12,000. What's total equity at year-end?", answer: 214000, prefix: "$",
          why: "Ending RE = $140,000 + $36,000 − $12,000 = $164,000. Plus $50,000 of stock = $214,000." }
      ]
    }
  ]
});
