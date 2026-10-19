LEDGER.addUnit({
  id: "u14",
  title: "Analysis and Management Reporting",
  icon: "📈",
  blurb: "Ratios lenders and owners watch, budget vs. actual, and consolidating multiple entities.",
  lessons: [
    {
      id: "u14-1",
      title: "Liquidity and solvency ratios",
      read: `Ratios turn the statements into answers. **Liquidity** ratios ask whether the company can pay what's due soon. **Solvency** ratios ask whether it can carry its debt over the long run.

| Ratio | Formula | Reads as |
|---|---|---|
| **Current ratio** | Current assets ÷ current liabilities | Dollars of short-term assets per dollar of short-term debt |
| **Quick (acid-test) ratio** | (Cash + marketable securities + receivables) ÷ current liabilities | Same, without inventory and prepaids, which take longer to turn into cash |
| **Debt-to-equity** | Total liabilities ÷ total equity | How much of the company is financed by creditors vs. owners |

Example balance sheet:

| Item | Amount |
|---|---|
| Cash | 40,000 |
| Accounts receivable | 60,000 |
| Inventory | 70,000 |
| Prepaid expenses | 10,000 |
| **Current assets** | **180,000** |
| **Current liabilities** | **100,000** |
| Total liabilities | 250,000 |
| Total equity | 200,000 |

What counts as a "good" ratio depends on the industry. A grocery chain can run safely with a current ratio below 1, but a contractor usually can't. Compare against the company's own trend, industry benchmarks, and **loan covenants**: lenders often require something like a current ratio of at least 1.2 or debt-to-equity of no more than 3.0, tested every quarter. Know where you stand before the lender asks.`,
      steps: [
        { type: "number", q: "Using the example, what is the current ratio?", answer: 1.8, tol: 0.01,
          why: "$180,000 ÷ $100,000 = 1.8." },
        { type: "number", q: "What is the quick ratio?", answer: 1.0, tol: 0.01,
          why: "($40,000 + $60,000) ÷ $100,000 = 1.0. Inventory and prepaids are left out." },
        { type: "number", q: "What is debt-to-equity?", answer: 1.25, tol: 0.01,
          why: "$250,000 ÷ $200,000 = 1.25. Creditors finance $1.25 for every $1 the owners have in." }
      ]
    },
    {
      id: "u14-2",
      title: "Profitability and efficiency ratios",
      read: `**Profitability** ratios ask how much of each sales dollar the company keeps. **Efficiency** ratios ask how quickly it turns working capital back into cash.

| Ratio | Formula |
|---|---|
| **Gross margin** | (Revenue − COGS) ÷ Revenue |
| **Net profit margin** | Net income ÷ Revenue |
| **Return on assets (ROA)** | Net income ÷ average total assets |
| **Days sales outstanding (DSO)** | Average AR ÷ Revenue × 365 |
| **Inventory turnover** | COGS ÷ average inventory |
| **Days inventory on hand** | 365 ÷ inventory turnover |

Example: revenue $730,000; COGS $438,000; net income $58,400; average AR $60,000; average inventory $73,000.

**DSO** tells you how many days it takes to collect, on average. Compare it to your terms: on net-30 terms, a DSO of 45 means customers are paying late, and every extra day ties up cash. **Inventory turnover** says how many times a year the stock sells through. If it's falling, stock is piling up, which means more risk of obsolescence and more cash tied up on shelves.

Ratios are the starting point for questions, not the conclusion. If net margin fell, find out which line on the income statement moved: gross margin (pricing or costs) or overhead.`,
      steps: [
        { type: "number", q: "What is net profit margin, as a percent?", answer: 8, suffix: "%",
          why: "$58,400 ÷ $730,000 = 8%." },
        { type: "number", q: "What is DSO, in days?", answer: 30, tol: 0.1,
          why: "$60,000 ÷ $730,000 × 365 = 30 days, right on net-30 terms." },
        { type: "number", q: "What is inventory turnover?", answer: 6, tol: 0.01,
          why: "$438,000 ÷ $73,000 = 6 times a year, or about 61 days on hand." },
        { type: "choice", q: "DSO rose from 30 to 48 days while terms stayed net 30. What does it most likely mean?", options: ["Sales are growing", "Customers are paying slower — check the aging, disputes and credit limits", "Inventory is turning faster", "Margins improved"], answer: 1,
          why: "Collections are slowing down. Look at the aging for specific customers, invoice disputes, and whether credit has been too loose." }
      ]
    },
    {
      id: "u14-3",
      title: "Budget vs. actual",
      read: `A **budget** is the plan in numbers. **Variance analysis** compares actual results to it every month.

Whether a variance is **favorable** or **unfavorable** depends on the line, not on whether the number went up:
- **Revenue** above budget → favorable. Below → unfavorable.
- **Costs** above budget → unfavorable. Below → favorable.

> Variance % = (Actual − Budget) ÷ Budget. Sales budgeted at $200,000 that come in at $214,000 are **7% favorable**.

A **static budget** is fixed at the planned volume. If sales came in 20% high, materials will be over a static budget simply because you sold more, and that isn't overspending. A **flexible budget** re-states the budget at the *actual* volume, so you can separate:
- the **volume** variance (you sold more or less), from
- the **price or efficiency** variance (each unit cost more or less than planned).

Many companies also keep a **rolling forecast**, updating the outlook for the rest of the year each month, because the January budget is out of date by spring.

Present variances with explanations, the same way as flux analysis: what drove it, whether it's one-time or ongoing, and what management should do about it.`,
      steps: [
        { type: "classify", q: "Favorable or unfavorable?",
          cats: [["fav", "Favorable"], ["unf", "Unfavorable"]],
          items: [["Revenue 5% above budget", "fav"], ["Materials cost above budget", "unf"], ["Wages below budget", "fav"], ["Interest income below budget", "unf"], ["Repairs 30% over budget", "unf"]],
          why: "More revenue or lower cost is favorable. Less revenue or higher cost is unfavorable." },
        { type: "number", q: "Budgeted sales were $200,000; actual sales were $214,000. What's the variance, as a percent of budget?", answer: 7, suffix: "%",
          why: "($214,000 − $200,000) ÷ $200,000 = 7% favorable." },
        { type: "choice", q: "Why use a flexible budget?", options: ["It's easier to hit", "It re-states the budget at actual volume, separating volume effects from spending/efficiency", "Auditors require it", "It eliminates variances"], answer: 1,
          why: "Without it, every cost looks over budget whenever sales are strong, which isn't useful for judging how well spending was managed." }
      ]
    },
    {
      id: "u14-4",
      title: "Multiple entities and intercompany",
      read: `Groups of related companies are common: a parent with subsidiaries, several LLCs owned by the same people, separate companies for operations and real estate. Each one keeps its **own books**. When they're reported together, they're **consolidated** into one set of statements, as if they were a single company.

When one entity pays for or charges another, both books record an **intercompany** balance:

| | Company A (pays B's $15,000 rent) | Company B |
|---|---|---|
| Entry | Dr Due from Affiliate · Cr Cash | Dr Rent Expense · Cr Due to Affiliate |

A company can't owe money to itself, so on consolidation the matching balances are **eliminated**: Dr Due to Affiliate, Cr Due from Affiliate. Intercompany sales and purchases are eliminated the same way, and so is any profit on goods still held inside the group.

Eliminations only work if the two sides **agree**. Every month:
1. **Reconcile intercompany** balances between each pair of entities: A's "due from B" must equal B's "due to A".
2. Settle differences right away. They're usually timing (one side recorded it and the other hasn't yet) or a coding error.
3. Settle cash regularly, so balances don't grow into amounts nobody can explain.

Intercompany mismatches are one of the most common reasons a consolidated close runs late. Reconciling them early in the close is a big part of finishing on time.`,
      steps: [
        { type: "entry", q: "On Company A's books: A pays $15,000 of rent on behalf of its affiliate, Company B.",
          lines: [{ acct: "due_from_affiliate", dr: 15000 }, { acct: "cash", cr: 15000 }],
          why: "It isn't A's expense. A has a receivable from its affiliate." },
        { type: "entry", q: "On Company B's books: record the rent that A paid for it.",
          lines: [{ acct: "rent_exp", dr: 15000 }, { acct: "due_to_affiliate", cr: 15000 }],
          why: "B used the space, so B has the expense, and it owes A the money." },
        { type: "entry", q: "Consolidation: eliminate the intercompany balances.",
          lines: [{ acct: "due_to_affiliate", dr: 15000 }, { acct: "due_from_affiliate", cr: 15000 }],
          why: "Inside one consolidated company the receivable and the payable cancel. Only the rent expense and the cash paid to the outside landlord remain." },
        { type: "choice", q: "A's books show $15,000 due from B; B's books show $13,500 due to A. What do you do before consolidating?", options: ["Eliminate $13,500 and expense the rest", "Reconcile the $1,500 difference between the entities and correct the side that's wrong", "Eliminate $15,000 and plug the difference", "Ignore it — it's intercompany"], answer: 1,
          why: "Eliminations require the two sides to agree. Find the timing or coding difference and fix it at the entity level." }
      ]
    }
  ]
});
