LEDGER.addUnit({
  id: "u04",
  title: "The Financial Statements",
  icon: "📊",
  blurb: "Build the income statement, balance sheet and cash flow statement — and close the year.",
  lessons: [
    {
      id: "u04-1",
      title: "The income statement",
      read: `The **income statement** (profit and loss, or **P&L**) reports performance over a period: revenue earned minus expenses incurred. Professionals use the **multi-step** format because it shows profit at each layer:

| Line | Amount |
|---|---|
| Sales revenue | 500,000 |
| Less: returns and allowances | (12,000) |
| Less: sales discounts | (8,000) |
| **Net sales** | **480,000** |
| Cost of goods sold | (288,000) |
| **Gross profit** | **192,000** |
| Operating expenses (wages, rent, advertising, depreciation…) | (131,500) |
| **Operating income** | **60,500** |
| Other income and expense (interest, gains, losses) | (2,500) |
| **Income before taxes** | **58,000** |

Each layer answers a different question:
- **Gross profit** (and **gross margin** = gross profit ÷ net sales): does the product make money before overhead?
- **Operating income**: does the core business make money?
- **Other income and expense** is kept below operating income because it isn't part of the core business: interest, and gains or losses on selling assets.

Interest expense comes *below* operating income because it reflects how the company is financed, not how well it operates. That lets you compare two similar businesses with very different amounts of debt.`,
      steps: [
        { type: "number", q: "Sales are $500,000, returns $12,000 and sales discounts $8,000. What are net sales?", answer: 480000, prefix: "$",
          why: "Contra-revenue accounts reduce gross sales: $500,000 − $12,000 − $8,000 = $480,000." },
        { type: "number", q: "Net sales are $480,000 and COGS is $288,000. What's the gross margin, as a percent?", answer: 40, suffix: "%",
          why: "Gross profit = $192,000, and $192,000 ÷ $480,000 = 40%." },
        { type: "number", q: "Gross profit $192,000; operating expenses $131,500; interest expense $4,500; gain on sale of equipment $2,000. What's income before taxes?", answer: 58000, prefix: "$",
          why: "Operating income = $192,000 − $131,500 = $60,500. Then −$4,500 interest + $2,000 gain = $58,000." },
        { type: "classify", q: "Where does each item go on a multi-step income statement?",
          cats: [["op", "Operating expense"], ["other", "Other income / expense"]],
          items: [["Advertising", "op"], ["Interest expense", "other"], ["Office rent", "op"], ["Gain on sale of equipment", "other"], ["Depreciation of office equipment", "op"], ["Interest income", "other"]],
          why: "Operating items come from running the business. Interest and gains or losses on selling assets go below operating income." }
      ]
    },
    {
      id: "u04-2",
      title: "The balance sheet",
      read: `The **balance sheet** is a snapshot at one moment: what the company has, what it owes, and the owners' stake, with Assets = Liabilities + Equity.

A **classified** balance sheet splits each side by timing:
- **Current assets** turn into cash or get used up within one year (or one operating cycle if that's longer): cash, receivables, inventory, prepaids.
- **Noncurrent assets**: property, plant and equipment (net of accumulated depreciation), intangibles, long-term investments.
- **Current liabilities** are due within a year: payables, accrued expenses, unearned revenue, and the **current portion of long-term debt** (principal due in the next 12 months).
- **Noncurrent liabilities**: the rest of long-term debt and other long-term obligations.
- **Equity**: contributed capital (common stock, or owner's capital) plus **retained earnings**, which is all the profit the company has ever earned minus all the dividends it has ever paid.

**Working capital** = current assets − current liabilities. It's the cushion a company runs its day-to-day business on, and lenders often write a minimum into their loan agreements (**covenants**). Misclassifying a liability as noncurrent makes working capital look better than it is, which is why auditors check the current portion of debt closely.

> The balance sheet is where errors show up. If an account's balance can't be explained with a schedule or a statement, the income statement is wrong somewhere too.`,
      steps: [
        { type: "classify", q: "Classify each balance-sheet item.",
          cats: [["ca", "Current asset"], ["nca", "Noncurrent asset"], ["cl", "Current liability"], ["ncl", "Noncurrent liability"]],
          items: [["Inventory", "ca"], ["Prepaid insurance (next 12 months)", "ca"], ["Equipment, net", "nca"], ["Accounts payable", "cl"], ["Note payable due in 4 years", "ncl"], ["Principal on a long-term loan due within 12 months", "cl"], ["Customer prepayment for next quarter's service", "cl"]],
          why: "Anything due or used up within a year is current. Note that part of a long-term loan is current: the principal due in the next 12 months." },
        { type: "number", q: "Current assets are $145,000 and current liabilities are $98,000. What's working capital?", answer: 47000, prefix: "$",
          why: "$145,000 − $98,000 = $47,000." },
        { type: "number", q: "Total assets are $310,000, total liabilities $175,000 and common stock $50,000. There are no other equity accounts. What is retained earnings?", answer: 85000, prefix: "$",
          why: "Equity = $310,000 − $175,000 = $135,000. Retained earnings = $135,000 − $50,000 = $85,000." }
      ]
    },
    {
      id: "u04-3",
      title: "The statement of cash flows",
      read: `Profit isn't cash. The **statement of cash flows** explains why cash changed, sorted into three sections:

| Section | Examples |
|---|---|
| **Operating** | Cash from customers; paying suppliers, employees, interest and taxes |
| **Investing** | Buying or selling equipment, property and investments |
| **Financing** | Borrowing and repaying debt; issuing stock; paying dividends or owner draws |

(Under US GAAP, interest paid is an operating outflow and dividends paid are financing.)

Most companies present operating cash flow using the **indirect method**, which starts from net income and adjusts it:

1. **Add back non-cash expenses** — depreciation and amortization.
2. **Remove gains, add back losses** on asset sales (the cash from the sale shows up under investing).
3. **Adjust for working-capital changes:**
   - A current **asset** went **up** (more receivables, more inventory) → **subtract**; cash is tied up.
   - A current **asset** went **down** → **add**.
   - A current **liability** went **up** (more payables, accruals) → **add**; you held on to the cash.
   - A current **liability** went **down** → **subtract**.

A company can show a profit and still run out of cash, usually because receivables and inventory are growing faster than sales. Read operating cash flow next to net income every month.`,
      steps: [
        { type: "classify", q: "Which section does each cash flow belong in?",
          cats: [["op", "Operating"], ["inv", "Investing"], ["fin", "Financing"]],
          items: [["Purchase of equipment", "inv"], ["Paying dividends", "fin"], ["Collecting from customers", "op"], ["Borrowing on a bank loan", "fin"], ["Paying suppliers", "op"], ["Selling an old truck", "inv"], ["Paying interest on the loan (US GAAP)", "op"]],
          why: "Operating covers day-to-day activity, investing covers long-term assets, and financing covers owners and lenders. Under US GAAP interest paid is operating, even though the loan itself is financing." },
        { type: "number", q: "Net income $72,000; depreciation $18,000; AR increased $9,000; inventory decreased $4,000; AP increased $3,500; gain on sale of equipment $2,500. What's cash from operating activities?", answer: 86000, prefix: "$",
          why: "$72,000 + $18,000 − $9,000 + $4,000 + $3,500 − $2,500 = $86,000. The gain is removed because the sale's cash belongs in investing." },
        { type: "choice", q: "A company reports strong net income but negative operating cash flow. What's the most common cause?", options: ["Too much depreciation", "Receivables and inventory growing fast — sales not yet collected, cash tied up in stock", "Paying dividends", "Buying equipment"], answer: 1,
          why: "Increases in current assets eat cash. Dividends and equipment purchases affect financing and investing, not operating cash flow." }
      ]
    },
    {
      id: "u04-4",
      title: "Closing entries and how the statements connect",
      read: `Revenue, expense and dividend/draw accounts are **temporary**: they measure a single year. At year-end they're **closed**, so their balances move into Retained Earnings (or Owner's Capital) and each one starts the new year at zero. Assets, liabilities and equity are **permanent** and carry forward.

Closing directly to Retained Earnings:
1. **Debit each revenue account** for its balance, and **credit Retained Earnings**.
2. **Credit each expense account** for its balance, and **debit Retained Earnings**.
3. **Credit Dividends** for its balance, and **debit Retained Earnings**.

(Some teams route steps 1–2 through a temporary **Income Summary** account first. The result is the same.) Accounting software does this automatically when the fiscal year rolls over. You'll rarely post it by hand, but you need to understand it to make sense of Retained Earnings.

The statements are linked:

| From | Flows into |
|---|---|
| Net income (income statement) | Retained earnings (statement of equity) |
| Ending retained earnings | Equity section of the balance sheet |
| Net change in cash (cash flow statement) | Cash on the balance sheet |

> Ending retained earnings = beginning retained earnings + net income − dividends.

If the cash flow statement's ending cash doesn't equal Cash on the balance sheet, something is wrong. That tie-out is one of the first checks a reviewer runs.`,
      steps: [
        { type: "entry", q: "Close Service Revenue of $86,000 directly to Retained Earnings.",
          lines: [{ acct: "service_revenue", dr: 86000 }, { acct: "retained_earnings", cr: 86000 }],
          why: "Revenue has a credit balance, so debit it to bring it to zero. The credit to Retained Earnings carries the year's revenue into equity." },
        { type: "entry", q: "Close the expense accounts directly to Retained Earnings: Wages Expense $41,000, Rent Expense $12,000, Depreciation Expense $6,000.",
          lines: [{ acct: "retained_earnings", dr: 59000 }, { acct: "wages_exp", cr: 41000 }, { acct: "rent_exp", cr: 12000 }, { acct: "dep_exp", cr: 6000 }],
          why: "Expenses have debit balances, so credit each one to zero. The $59,000 debit to Retained Earnings reduces equity by the year's expenses." },
        { type: "number", q: "Retained earnings started the year at $120,000. Net income was $27,000 and dividends were $10,000. What's ending retained earnings?", answer: 137000, prefix: "$",
          why: "$120,000 + $27,000 − $10,000 = $137,000." },
        { type: "classify", q: "Temporary (closed each year) or permanent?",
          cats: [["temp", "Temporary"], ["perm", "Permanent"]],
          items: [["Dividends", "temp"], ["Accumulated Depreciation", "perm"], ["Sales Revenue", "temp"], ["Unearned Revenue", "perm"], ["Insurance Expense", "temp"], ["Retained Earnings", "perm"]],
          why: "Revenue, expenses and dividends are temporary. Accumulated Depreciation and Unearned Revenue are balance-sheet accounts, so they carry forward even though their names sound like income-statement items." }
      ]
    }
  ]
});
