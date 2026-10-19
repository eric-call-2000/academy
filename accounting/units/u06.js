LEDGER.addUnit({
  id: "u06",
  title: "Receivables and Revenue",
  icon: "🧾",
  blurb: "Invoices and terms, the allowance for bad debts, write-offs, and ASC 606 revenue recognition.",
  lessons: [
    {
      id: "u06-1",
      title: "Invoices, credit terms and discounts",
      read: `Selling on credit creates **Accounts Receivable**. The invoice states the **terms**: **n/30** means the full amount is due in 30 days. **2/10, n/30** means the customer can take a 2% discount if they pay within 10 days, and otherwise owes the full amount in 30.

Under the common **gross method**, you record the full invoice. If the customer takes the discount, you record it in **Sales Discounts**, a contra-revenue account:

| | Debit | Credit |
|---|---|---|
| Invoice $5,000, terms 2/10, n/30 | AR 5,000 | Revenue 5,000 |
| Paid on day 8 | Cash 4,900 · Sales Discounts 100 | AR 5,000 |

Early-pay discounts are expensive *for the customer to pass up*. Skipping a 2% discount to keep the cash for 20 more days works out to an annual rate of about:

> 2/98 × 365/20 ≈ **37%**

That's why well-run AP departments take every discount they can, and why offering one speeds up collections.

**Returns and allowances** (goods sent back, or a price cut for a defect) go to **Sales Returns and Allowances**, another contra-revenue account. Using contra accounts instead of debiting revenue directly keeps gross sales visible, so managers can see how much they're giving back.

Good AR practice: invoice promptly and accurately (most late payments start as invoice disputes), apply each payment to the specific invoice it pays, and review the **aging** report every week.`,
      steps: [
        { type: "entry", q: "Invoice a customer $5,000 for services, terms 2/10, n/30 (gross method).",
          lines: [{ acct: "ar", dr: 5000 }, { acct: "service_revenue", cr: 5000 }],
          why: "Under the gross method you record the full invoice amount. You only record a discount if the customer actually takes it." },
        { type: "entry", q: "The customer pays within 10 days and takes the 2% discount.",
          lines: [{ acct: "cash", dr: 4900 }, { acct: "sales_discounts", dr: 100 }, { acct: "ar", cr: 5000 }],
          why: "The whole receivable is cleared, the cash received is 98% of it, and the $100 difference goes to Sales Discounts." },
        { type: "number", q: "Approximately what annual interest rate does a customer give up by skipping 2/10, n/30 terms? (Use 2/98 × 365/20.)", answer: 37.24, tol: 0.3, suffix: "%",
          why: "2 ÷ 98 = 2.04% for 20 extra days. × 365/20 = 18.25 periods per year, which comes to about 37.2%. Borrowing on a line of credit to take the discount is usually cheaper." },
        { type: "entry", q: "A customer is given a $800 allowance on an open invoice because part of the order was damaged.",
          lines: [{ acct: "sales_returns", dr: 800 }, { acct: "ar", cr: 800 }],
          why: "The allowance reduces what they owe, and it's tracked in the contra-revenue account so gross sales stay visible." }
      ]
    },
    {
      id: "u06-2",
      title: "The allowance for doubtful accounts",
      read: `Some customers won't pay. GAAP requires the **allowance method**: estimate uncollectible receivables at period-end and record **Bad Debt Expense** in the same period as the sales (matching), with a credit to **Allowance for Doubtful Accounts**, a contra-asset. Accounts receivable then appears at its **net realizable value**, the amount you actually expect to collect.

The usual estimate is an **aging analysis**: apply a higher loss rate the older a receivable is.

| Age | Balance | Est. loss | Allowance needed |
|---|---|---|---|
| Current | 80,000 | 1% | 800 |
| 31–60 days | 22,000 | 5% | 1,100 |
| 61–90 days | 9,000 | 15% | 1,350 |
| Over 90 days | 4,000 | 40% | 1,600 |
| **Total** | **115,000** | | **4,850** |

The aging gives the **ending balance** the allowance should have. The entry only records the *difference* between that target and what's already in the allowance:

> Target $4,850 − existing credit balance $1,350 = **$3,500** bad debt expense.

(If the allowance has a *debit* balance before adjusting, because write-offs exceeded the estimate, add it instead: a target of $4,850 with a $400 debit balance needs $5,250.)

The **direct write-off method**, which expenses a receivable only when it's written off, isn't GAAP unless the amounts are immaterial. It's what US tax law uses for bad debts, which is one common source of differences between book and tax income.`,
      steps: [
        { type: "number", q: "Using the aging above, what ending balance should the allowance have?", answer: 4850, prefix: "$",
          why: "$800 + $1,100 + $1,350 + $1,600 = $4,850." },
        { type: "entry", q: "The allowance currently has a $1,350 credit balance. Record the adjustment to bring it to $4,850.",
          lines: [{ acct: "bad_debt_exp", dr: 3500 }, { acct: "allowance", cr: 3500 }],
          why: "Record only the difference: $4,850 − $1,350 = $3,500." },
        { type: "number", q: "Same aging target of $4,850, but the allowance has a $400 DEBIT balance before adjusting (write-offs exceeded last year's estimate). How much bad debt expense do you record?", answer: 5250, prefix: "$",
          why: "You first need $400 just to get the allowance back to zero, then $4,850 more: $5,250 in total." },
        { type: "choice", q: "Why does GAAP require the allowance method rather than direct write-off?", options: ["It reduces taxes", "It records the expected loss in the same period as the sale and shows AR at what you expect to collect", "It's simpler", "Auditors can't test write-offs"], answer: 1,
          why: "Matching and net realizable value. Direct write-off books the loss months after the sale, often in a different year." }
      ]
    },
    {
      id: "u06-3",
      title: "Write-offs and recoveries",
      read: `When a specific account is clearly uncollectible (the customer is bankrupt, has disappeared, or collection efforts have run out), you **write it off** against the allowance:

> **Dr Allowance for Doubtful Accounts, Cr Accounts Receivable.**

There's **no expense** in this entry. The expense was recorded earlier, when you built the allowance. A write-off reduces AR and the allowance by the same amount, so **net receivables don't change**:

| | Before | Write-off | After |
|---|---|---|---|
| Accounts receivable | 115,000 | (1,200) | 113,800 |
| Allowance | (4,850) | 1,200 | (3,650) |
| **Net** | **110,150** | | **110,150** |

Write-offs need **approval** from someone other than the person who handles cash receipts. Otherwise an employee could pocket a customer's payment and then write the account off to hide it.

**Recoveries:** if a customer you wrote off later pays, first **reinstate** the receivable (reverse the write-off: Dr AR, Cr Allowance), then record the collection the normal way (Dr Cash, Cr AR). Reinstating keeps the customer's history accurate, and that history feeds next year's loss rates. The net effect of the two entries is Dr Cash, Cr Allowance. The lab accepts either form.`,
      steps: [
        { type: "entry", q: "Write off a $1,200 receivable from a customer who has gone out of business.",
          lines: [{ acct: "allowance", dr: 1200 }, { acct: "ar", cr: 1200 }],
          why: "The loss was already expensed when the allowance was built. The write-off just removes the specific receivable." },
        { type: "number", q: "Before the write-off, AR was $115,000 and the allowance $4,850. What's net realizable value AFTER the $1,200 write-off?", answer: 110150, prefix: "$",
          why: "AR $113,800 − allowance $3,650 = $110,150, the same as before. Write-offs don't change net AR." },
        { type: "entry", q: "Surprise: the customer written off for $1,200 pays in full. Reinstate the receivable and record the collection (enter both steps in one entry — the lab checks the net effect).",
          lines: [{ acct: "cash", dr: 1200 }, { acct: "allowance", cr: 1200 }],
          why: "Reinstating is Dr AR / Cr Allowance, and collecting is Dr Cash / Cr AR. The two AR lines cancel, leaving Dr Cash, Cr Allowance. In practice post both steps so the customer's history shows the recovery." },
        { type: "choice", q: "Who should approve write-offs?", options: ["The clerk who posts customer payments", "A manager independent of cash receipts", "The customer", "Nobody — the system writes off at 120 days"], answer: 1,
          why: "If the person who handles receipts can also write accounts off, they can steal a payment and hide it with a write-off. Approval by someone else closes that gap." }
      ]
    },
    {
      id: "u06-4",
      title: "Revenue recognition: ASC 606",
      read: `US GAAP revenue recognition follows **ASC 606** (IFRS 15 is nearly identical). Its core principle is to recognize revenue when control of goods or services passes to the customer, in the amount you expect to be entitled to. It works in **five steps**:

1. **Identify the contract** with the customer.
2. **Identify the performance obligations** — each distinct good or service promised.
3. **Determine the transaction price** — including estimates of variable amounts such as rebates and bonuses.
4. **Allocate the price** to each obligation in proportion to its **standalone selling price** (SSP).
5. **Recognize revenue** as each obligation is satisfied — **at a point in time** (delivery) or **over time** (a service period, or construction progress).

Bundles are where step 4 matters. Say you sell equipment plus a year of support for $12,000. Sold separately, the equipment goes for $10,000 and support for $5,000, so the bundle carries a $3,000 discount that has to be shared out:

| Obligation | SSP | Share | Allocated |
|---|---|---|---|
| Equipment | 10,000 | 2/3 | 8,000 — recognized at delivery |
| Support | 5,000 | 1/3 | 4,000 — recognized monthly |

Cash collected for obligations you haven't fulfilled yet sits in **Unearned (deferred) Revenue**, a contract liability. Over-time recognition is how construction contractors book revenue, which Unit 15 covers in detail.`,
      steps: [
        { type: "choice", q: "What is step 3 of the ASC 606 model?", options: ["Identify the contract", "Determine the transaction price", "Allocate the price to performance obligations", "Recognize revenue when obligations are satisfied"], answer: 1,
          why: "The order is contract → obligations → transaction price → allocate → recognize." },
        { type: "number", q: "A $12,000 bundle includes equipment (SSP $10,000) and a year of support (SSP $5,000). How much of the price is allocated to support?", answer: 4000, prefix: "$",
          why: "$12,000 × 5,000/15,000 = $4,000. The discount is shared out in proportion to SSP." },
        { type: "entry", q: "The customer pays the $12,000 at delivery. The equipment is delivered today and support begins. Record it.",
          lines: [{ acct: "cash", dr: 12000 }, { acct: "sales_revenue", cr: 8000 }, { acct: "unearned_rev", cr: 4000 }],
          why: "The equipment obligation is satisfied now, so $8,000 is revenue. The support hasn't been delivered yet, so $4,000 is a contract liability." },
        { type: "entry", q: "Record one month of support revenue (round to the cent).",
          lines: [{ acct: "unearned_rev", dr: 333.33 }, { acct: "service_revenue", cr: 333.33 }],
          why: "$4,000 ÷ 12 = $333.33 per month. The last month absorbs the rounding, so the 12 months add up to exactly $4,000." }
      ]
    }
  ]
});
