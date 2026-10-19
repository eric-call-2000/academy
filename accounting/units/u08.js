LEDGER.addUnit({
  id: "u08",
  title: "Inventory and Cost of Goods Sold",
  blurb: "Perpetual vs. periodic, FIFO/LIFO/average cost, write-downs, freight and shrinkage.",
  lessons: [
    {
      id: "u08-1",
      title: "Perpetual vs. periodic, and the COGS formula",
      read: `Inventory is goods held for sale (or materials that will become goods). When it's sold, its cost becomes **Cost of Goods Sold** (COGS), usually the biggest expense a product company has.

There are two ways to keep track:

| | Perpetual | Periodic |
|---|---|---|
| Inventory account | Updated with every purchase and sale | Updated only after a physical count |
| COGS | Recorded at each sale | Calculated at period-end |
| Typical user | Nearly every business with modern software | Very small or manual operations |

Under **perpetual**, a sale takes two entries: one for the revenue, one for the cost:

> Dr Accounts Receivable 2,400 · Cr Sales Revenue 2,400
> Dr Cost of Goods Sold 1,500 · Cr Inventory 1,500

Under **periodic**, you calculate COGS from the count:

> **COGS = Beginning inventory + Purchases − Ending inventory**

Even with a perpetual system you still count physically, because the books and the shelf drift apart through theft, damage and receiving mistakes. The count tells you which number is true, and the difference is **shrinkage** (lesson 4).

**Gross margin** is (Sales − COGS) ÷ Sales. If inventory costs are wrong, so is gross margin, which is why inventory is one of the highest-risk areas in an audit.`,
      steps: [
        { type: "number", q: "Beginning inventory $42,000; purchases $158,000; ending inventory (counted) $37,500. What's COGS?", answer: 162500, prefix: "$",
          why: "$42,000 + $158,000 − $37,500 = $162,500." },
        { type: "entry", q: "Perpetual system: sell goods on account for $2,400. They cost $1,500. Record both sides in one entry.",
          lines: [{ acct: "ar", dr: 2400 }, { acct: "sales_revenue", cr: 2400 }, { acct: "cogs", dr: 1500 }, { acct: "inventory", cr: 1500 }],
          why: "The revenue side is the receivable and the sale. The cost side moves $1,500 from Inventory to COGS. Gross profit on the sale is $900." },
        { type: "choice", q: "Which system tells you inventory on hand at any moment without a count?", options: ["Periodic", "Perpetual", "Both", "Neither"], answer: 1,
          why: "A perpetual system updates the Inventory account with every transaction. A physical count is still needed to confirm it." }
      ]
    },
    {
      id: "u08-2",
      title: "FIFO, LIFO and weighted average",
      read: `When prices change, identical units cost different amounts. A **cost-flow assumption** decides which costs go to COGS and which stay in ending inventory. (It doesn't have to match how the goods physically move.)

Example (periodic): 250 units sold during the period.

| Layer | Units | Cost | Total |
|---|---|---|---|
| Beginning | 100 | $10 | 1,000 |
| Purchase 1 | 200 | $12 | 2,400 |
| Purchase 2 | 100 | $13 | 1,300 |
| **Available** | **400** | | **4,700** |

- **FIFO** (first in, first out): the oldest costs go to COGS. COGS = 100×$10 + 150×$12 = **$2,800**. Ending = $1,900.
- **LIFO** (last in, first out): the newest costs go to COGS. COGS = 100×$13 + 150×$12 = **$3,100**. Ending = $1,600.
- **Weighted average**: $4,700 ÷ 400 = $11.75 per unit. COGS = 250 × $11.75 = **$2,937.50**. Ending = $1,762.50.

When **prices are rising**, FIFO gives the lowest COGS and the highest profit (and taxes), while LIFO gives the highest COGS and the lowest taxable income. **LIFO is allowed under US GAAP but prohibited under IFRS**, and the IRS **LIFO conformity rule** says that if you use LIFO for taxes, you must also use it in your financial statements.

Pick a method and apply it **consistently**. Switching methods is a change in accounting principle and has to be justified and disclosed.`,
      steps: [
        { type: "number", q: "Using the layers above, what is COGS under FIFO?", answer: 2800, prefix: "$",
          why: "The oldest 250 units: 100 × $10 + 150 × $12 = $1,000 + $1,800 = $2,800." },
        { type: "number", q: "What is ENDING inventory under LIFO?", answer: 1600, prefix: "$",
          why: "LIFO leaves the oldest costs in inventory: 100 × $10 + 50 × $12 = $1,600. (Equivalently, $4,700 − LIFO COGS of $3,100.)" },
        { type: "number", q: "What is COGS under weighted average?", answer: 2937.5, prefix: "$",
          why: "$4,700 ÷ 400 = $11.75 per unit, and 250 × $11.75 = $2,937.50." },
        { type: "choice", q: "Prices have risen all year. Which method reports the highest net income?", options: ["FIFO", "LIFO", "Weighted average", "They're all the same"], answer: 0,
          why: "FIFO sends the older, cheaper costs to COGS, so COGS is lower and profit is higher. That also means more tax, which is why some US companies choose LIFO." }
      ]
    },
    {
      id: "u08-3",
      title: "Inventory errors and write-downs",
      read: `**Ending inventory errors carry into the next year.** One year's ending inventory is the next year's beginning inventory, so a single mistake affects two years:

| Ending inventory overstated by $5,000 | This year | Next year |
|---|---|---|
| COGS | understated $5,000 | overstated $5,000 |
| Net income | **overstated** $5,000 | **understated** $5,000 |
| Retained earnings at end | overstated | correct again |

Overstating inventory is also one of the oldest ways to inflate profit on purpose, which is why auditors observe year-end counts in person.

**Lower of cost and net realizable value (LCNRV).** Inventory can't be carried above what you expect to get for it. **Net realizable value** = estimated selling price − costs to complete and sell. If NRV is below cost, **write the inventory down** to NRV, usually with **Dr COGS** (or a separate inventory write-down expense) and **Cr Inventory**.

> Cost $18,000. Expected price $19,500 − selling costs $2,700 = NRV $16,800. Write down **$1,200**.

LCNRV applies to FIFO and average cost. LIFO (and the retail method) still use the older **lower of cost or market** test. Under US GAAP, once you've written inventory down, you don't write it back up if prices recover. Watch for slow-moving and obsolete items on the aging report; they're the usual write-down candidates.`,
      steps: [
        { type: "choice", q: "Year-end inventory was overstated by $5,000 and never corrected. What's the effect on this year's net income?", options: ["Understated $5,000", "Overstated $5,000", "No effect", "Overstated $10,000"], answer: 1,
          why: "Too much ending inventory means too little COGS, so net income is overstated by the same $5,000." },
        { type: "choice", q: "…and on NEXT year's net income?", options: ["Overstated $5,000", "Understated $5,000", "No effect", "Understated $10,000"], answer: 1,
          why: "Beginning inventory is overstated, so COGS is overstated and income is understated. Over the two years the error cancels out." },
        { type: "number", q: "An item cost $18,000. It should sell for $19,500, with $2,700 of costs to sell. How much is the write-down?", answer: 1200, prefix: "$",
          why: "NRV = $19,500 − $2,700 = $16,800, and $18,000 − $16,800 = $1,200." },
        { type: "entry", q: "Record that $1,200 write-down, charging it to COGS.",
          lines: [{ acct: "cogs", dr: 1200 }, { acct: "inventory", cr: 1200 }],
          why: "The loss is recognized now, and inventory is carried at what it will actually bring in." }
      ]
    },
    {
      id: "u08-4",
      title: "Freight, counts and shrinkage",
      read: `**What goes into inventory cost?** Everything needed to get the goods to their location and ready to sell: purchase price, **freight-in**, duties, and handling. So:
- **Freight-in** (shipping goods *to you*) → **Inventory**. It becomes part of COGS when the goods sell.
- **Freight-out** (shipping goods *to customers*) → **Delivery Expense**, a selling expense. It never touches inventory.

**Physical counts.** A traditional **wall-to-wall count** at year-end shuts down operations for a day. Many companies use **cycle counting** instead: counting a few locations or item groups every day or week so the whole stock gets counted several times a year, with high-value items counted more often. Good count procedures: freeze movement during the count, use pre-numbered count tags, count in pairs, and have someone recount a sample.

**Shrinkage** is the difference between book inventory and the count: theft, damage, spoilage and recording errors.

> Book $84,300 − count $82,950 = **$1,350 shrinkage** → Dr Inventory Shrinkage (or COGS), Cr Inventory.

Track shrinkage as a percent of sales over time. A jump in shrinkage is a reason to investigate, not just a number to adjust.`,
      steps: [
        { type: "entry", q: "Pay $350 cash to a carrier for shipping inventory to your warehouse (FOB shipping point).",
          lines: [{ acct: "inventory", dr: 350 }, { acct: "cash", cr: 350 }],
          why: "Freight-in is part of the cost of getting goods ready to sell, so it's added to Inventory." },
        { type: "entry", q: "Pay $210 cash to ship an order to a customer.",
          lines: [{ acct: "delivery_exp", dr: 210 }, { acct: "cash", cr: 210 }],
          why: "Freight-out is a selling expense, recognized right away." },
        { type: "entry", q: "The perpetual records show $84,300 of inventory; the count finds $82,950. Record the shrinkage.",
          lines: [{ acct: "shrinkage_exp", dr: 1350 }, { acct: "inventory", cr: 1350 }],
          why: "The count is the truth. Bring the books down to it and record the $1,350 loss." },
        { type: "choice", q: "What best describes cycle counting?", options: ["Counting everything once at year-end", "Counting a rotating subset of items continuously, high-value items more often", "Estimating inventory from the gross profit percentage", "Counting only items that sold"], answer: 1,
          why: "Cycle counts catch errors early without shutting the business down, and they're risk-based: you count what matters most, most often." }
      ]
    }
  ]
});
