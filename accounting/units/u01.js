LEDGER.addUnit({
  id: "u01",
  title: "The Language of Business",
  blurb: "The accounting equation, the five account types, and how debits and credits really work.",
  lessons: [
    {
      id: "u01-1",
      title: "What accounting is for",
      read: `Accounting records a business's transactions, sorts them into accounts, and summarizes them into reports people use to make decisions. Owners use the reports to run the business, lenders to decide whether to extend credit, investors to judge value, and tax authorities to check what's owed.

There are three main branches:
- **Financial accounting** produces the external statements (income statement, balance sheet, cash flows) under a fixed set of rules.
- **Managerial accounting** produces internal reports such as budgets, job costs and variance analysis, in whatever form helps managers.
- **Tax accounting** follows the tax code, which often differs from the reporting rules.

In the United States, the rules for financial statements are **GAAP** (Generally Accepted Accounting Principles), set by the **FASB** (Financial Accounting Standards Board). Most other countries use **IFRS**, set by the IASB.

Everything rests on one equation:

> **Assets = Liabilities + Equity.** Assets are what the business controls, liabilities are what it owes, and equity is what's left for the owners.

Every transaction keeps the equation in balance:

| Transaction | Assets | Liabilities | Equity |
|---|---|---|---|
| Owner invests $10,000 cash | +10,000 | | +10,000 |
| Borrows $5,000 from a bank | +5,000 | +5,000 | |
| Buys equipment for $3,000 cash | +3,000 / −3,000 | | |
| **Totals** | **$15,000** | **$5,000** | **$10,000** |

Buying equipment with cash swaps one asset for another, so the totals don't change.`,
      steps: [
        { type: "number", q: "A company has total assets of $85,000 and total liabilities of $32,000. What is its equity?", answer: 53000, prefix: "$",
          why: "Equity = Assets − Liabilities = $85,000 − $32,000 = $53,000." },
        { type: "choice", q: "Who sets US GAAP?", options: ["The IRS", "The FASB", "The AICPA", "Each state's board of accountancy"], answer: 1,
          why: "The Financial Accounting Standards Board sets GAAP. The SEC has legal authority over public companies' reporting, but it recognizes the FASB as the standard setter. The IRS sets tax rules, which are a separate system." },
        { type: "choice", q: "A business buys $2,000 of supplies on credit. What happens to the equation?", options: ["Assets +$2,000, Equity +$2,000", "Assets +$2,000, Liabilities +$2,000", "Assets −$2,000, Liabilities +$2,000", "No change — it's only a promise to pay"], answer: 1,
          why: "The business gains an asset (supplies) and owes the vendor (a liability). Both sides go up $2,000, so the equation stays balanced." },
        { type: "number", q: "Equity starts the year at $40,000. During the year revenue is $120,000, expenses are $95,000, and the owner withdraws $10,000. What is ending equity?", answer: 55000, prefix: "$",
          why: "Revenue increases equity, while expenses and withdrawals decrease it: $40,000 + $120,000 − $95,000 − $10,000 = $55,000." }
      ]
    },
    {
      id: "u01-2",
      title: "Account types and the chart of accounts",
      read: `Every account belongs to one of five types:

| Type | What it is | Examples |
|---|---|---|
| Asset | A resource the business controls that will bring future benefit | Cash, Accounts Receivable, Inventory, Equipment |
| Liability | An obligation to pay or perform later | Accounts Payable, Wages Payable, Unearned Revenue, Notes Payable |
| Equity | The owners' claim | Owner's Capital, Common Stock, Retained Earnings |
| Revenue | What the business earns from delivering goods and services | Sales Revenue, Service Revenue |
| Expense | The cost of earning that revenue | Wages, Rent, Utilities, Depreciation |

Revenue and expenses are really temporary parts of equity. They exist so you can measure one period's results, and they roll into equity at year-end. That gives the **expanded equation**:

> Assets = Liabilities + Owner's Equity + Revenue − Expenses − Draws (or Dividends)

A **chart of accounts** is the numbered list of every account a company uses. Most follow the same numbering: **1xxx** assets, **2xxx** liabilities, **3xxx** equity, **4xxx** revenue, and **5xxx–7xxx** cost of sales and expenses. Within each range, accounts usually run in order of liquidity (Cash first) or in order of the statements. The **Chart** tab in this app shows the one this course uses.

A good chart is detailed enough to answer real questions ("What did we spend on repairs?") but not so detailed that bookkeepers have to guess between near-duplicates.`,
      steps: [
        { type: "classify", q: "Sort each account by type.",
          cats: [["asset", "Asset"], ["liability", "Liability"], ["equity", "Equity"], ["revenue", "Revenue"], ["expense", "Expense"]],
          items: [["Accounts Receivable", "asset"], ["Unearned Revenue", "liability"], ["Retained Earnings", "equity"], ["Rent Expense", "expense"], ["Service Revenue", "revenue"], ["Prepaid Insurance", "asset"], ["Wages Payable", "liability"]],
          why: "Prepaid Insurance is an asset because you've paid for coverage you haven't used yet. Unearned Revenue is a liability because you owe the customer work, or their money back." },
        { type: "choice", q: "Under the usual numbering convention, account 2110 is most likely…", options: ["an asset", "a liability", "a revenue account", "an expense"], answer: 1,
          why: "The 2xxx range is liabilities. In this course's chart, 2110 is Wages Payable." },
        { type: "choice", q: "A customer pays you in advance for work you'll do next month. Why is that money recorded as Unearned Revenue (a liability)?", options: ["Because cash is always a liability until it is spent", "Because you owe the customer the work, or their money back", "Because revenue accounts can't hold advance payments under tax law", "Because the customer might be a related party"], answer: 1,
          why: "You haven't earned the money until you do the work. Until then you have an obligation, which makes it a liability." }
      ]
    },
    {
      id: "u01-3",
      title: "Debits and credits",
      read: `**Debit** means the left side of an account and **credit** means the right side. That's all they mean. A debit isn't good and a credit isn't bad. (Your bank "credits" your account because, on the bank's books, your deposit is a liability: it owes you the money.)

Each account type increases on one side:

| Increases with a debit | Increases with a credit |
|---|---|
| Assets | Liabilities |
| Expenses | Equity |
| Dividends / Draws | Revenue |

A common memory aid is **DEALER**: **D**ividends, **E**xpenses and **A**ssets go up with debits; **L**iabilities, **E**quity and **R**evenue go up with credits.

This follows from the equation. Assets sit on the left side of the equals sign, so they increase on the left (debit). Liabilities and equity sit on the right, so they increase on the right (credit). Expenses reduce equity, so they work the opposite way to equity and increase with debits.

**Double-entry** bookkeeping means every transaction touches at least two accounts, and total debits always equal total credits. That rule makes errors visible. If the two sides don't match, something is missing.

When you enter a journal entry in this lab, put each account on its own line with its amount in either the Debit or the Credit column.`,
      steps: [
        { type: "classify", q: "Which side increases each account?",
          cats: [["dr", "Debit"], ["cr", "Credit"]],
          items: [["Cash", "dr"], ["Accounts Payable", "cr"], ["Service Revenue", "cr"], ["Wages Expense", "dr"], ["Common Stock", "cr"], ["Dividends", "dr"], ["Equipment", "dr"], ["Notes Payable", "cr"]],
          why: "DEALER: Dividends, Expenses and Assets go up with debits. Liabilities, Equity and Revenue go up with credits." },
        { type: "choice", q: "You pay down part of what you owe a vendor. What happens to Accounts Payable?", options: ["You debit it", "You credit it", "Nothing — only Cash changes", "It depends on the vendor's terms"], answer: 0,
          why: "Accounts Payable is a liability, which increases with a credit, so a debit decreases it. The other side of the entry is a credit to Cash." },
        { type: "entry", q: "The owner invests $25,000 of personal cash in the business (a sole proprietorship). Record the entry.",
          lines: [{ acct: "cash", dr: 25000 }, { acct: "owner_capital", cr: 25000 }],
          why: "Cash (an asset) goes up, so debit it. Owner's Capital (equity) goes up, so credit it." },
        { type: "entry", q: "The company pays this month's $1,200 utility bill in cash. Nothing was recorded for it before. Record the payment.",
          lines: [{ acct: "utilities_exp", dr: 1200 }, { acct: "cash", cr: 1200 }],
          why: "Expenses increase with a debit, and paying reduces Cash, which is a credit." }
      ]
    },
    {
      id: "u01-4",
      title: "Normal balances and T-accounts",
      read: `An account's **normal balance** is the side it increases on. Assets and expenses normally have debit balances. Liabilities, equity and revenue normally have credit balances.

A **T-account** is a quick sketch of one account, with debits on the left and credits on the right:

| Cash — Debit | Cash — Credit |
|---|---|
| Beginning 5,000 | 4,200 rent |
| 3,000 sale | |
| 2,500 collection | |
| **Balance 6,300** | |

To get the balance, add each side and subtract the smaller total from the larger. The balance sits on the larger side: here, 10,500 − 4,200 = a $6,300 debit.

**Contra accounts** offset a related account and carry the opposite normal balance:
- **Accumulated Depreciation** (a credit) reduces Equipment.
- **Allowance for Doubtful Accounts** (a credit) reduces Accounts Receivable.
- **Sales Returns** and **Sales Discounts** (debits) reduce revenue.
- **Owner's Draws** and **Dividends** (debits) reduce equity.

An **abnormal balance** is a warning sign worth investigating. A credit balance in Cash means the account is overdrawn. A credit balance on a customer's receivable usually means they overpaid, or their payment was never applied to the invoice.`,
      steps: [
        { type: "number", q: "Accounts Payable starts the month with a $8,400 credit balance. During the month you record $12,600 of new bills (credits) and make $14,100 of payments (debits). What's the ending balance?", answer: 6900, prefix: "$",
          why: "AP is a liability with a normal credit balance: $8,400 + $12,600 − $14,100 = $6,900 credit." },
        { type: "number", q: "Cash starts at $12,000. During the month there are $31,500 of deposits and $29,750 of checks and transfers out. What's the ending balance?", answer: 13750, prefix: "$",
          why: "$12,000 + $31,500 − $29,750 = $13,750 debit." },
        { type: "choice", q: "The receivables detail shows one customer with a $450 credit balance. What's the most likely explanation?", options: ["The customer owes you $450 more than you invoiced", "The customer overpaid, or a payment wasn't applied to the right invoice", "It's normal — receivables have credit balances", "Bad debt expense was recorded twice"], answer: 1,
          why: "Receivables normally carry debit balances. A credit balance usually means an overpayment, an unapplied payment, or a credit memo. Find out which, then refund the customer or apply the amount to the right invoice." },
        { type: "classify", q: "What is each account's normal balance?",
          cats: [["dr", "Debit"], ["cr", "Credit"]],
          items: [["Accumulated Depreciation", "cr"], ["Allowance for Doubtful Accounts", "cr"], ["Sales Returns and Allowances", "dr"], ["Owner's Draws", "dr"], ["Prepaid Rent", "dr"], ["Interest Payable", "cr"]],
          why: "Contra accounts take the opposite side from the account they reduce. Accumulated Depreciation and the Allowance reduce assets, so they're credits. Returns reduce revenue and Draws reduce equity, so they're debits." }
      ]
    }
  ]
});
