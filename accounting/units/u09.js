LEDGER.addUnit({
  id: "u09",
  title: "Fixed Assets and Depreciation",
  icon: "🏗️",
  blurb: "What to capitalize, three depreciation methods, disposals, the asset register and impairment.",
  lessons: [
    {
      id: "u09-1",
      title: "Capitalize or expense?",
      read: `A cost is **capitalized** (recorded as an asset and depreciated) when it gives benefits beyond the current year. Otherwise it's **expensed** right away.

**What goes into an asset's cost?** Everything needed to get it in place and working:
- purchase price and **non-refundable sales tax**
- **freight** and delivery
- **installation**, setup and testing

**Not** included: costs to fix damage you caused during installation, training staff, and insurance after the asset is in service. Those are expenses.

**Repairs vs. improvements:**
| Expense it (repair and maintenance) | Capitalize it (improvement) |
|---|---|
| Keeps the asset running as it was | Extends its life, increases its capacity, or adapts it to a new use |
| Oil changes, routine servicing, patching | A new roof, an engine overhaul that adds years, a major upgrade |

Most companies set a **capitalization threshold** (for example, anything under $2,500 is expensed) so nobody depreciates staplers. Write the threshold into a written policy and apply it consistently. (The IRS **de minimis safe harbor** allows a similar election for tax purposes.)

Getting this wrong shifts profit between years. Expensing a capital item understates this year's profit; capitalizing an expense overstates it. Auditors test both directions.`,
      steps: [
        { type: "number", q: "A machine: price $62,000; non-refundable sales tax $4,030; freight $1,500; installation $2,470; first-year insurance $1,200; repair of a panel your crew dented while installing $800. What's its capitalized cost?", answer: 70000, prefix: "$",
          why: "$62,000 + $4,030 + $1,500 + $2,470 = $70,000. The insurance relates to operating it, and the dent repair is a cost of a mistake. Both are expenses." },
        { type: "classify", q: "Capitalize or expense? (The company's threshold is $2,500.)",
          cats: [["cap", "Capitalize"], ["exp", "Expense"]],
          items: [["New roof that extends the building's life 15 years", "cap"], ["Routine oil change on a delivery truck", "exp"], ["Installation of a new CNC machine", "cap"], ["$90 office stapler", "exp"], ["Engine overhaul that adds 5 years to a truck's life", "cap"], ["Annual software subscription", "exp"]],
          why: "If it extends the asset's life, increases its capacity, or is part of getting a new asset in service, capitalize it. Upkeep, small items under the threshold, and period services are expenses." },
        { type: "entry", q: "Buy a $38,000 delivery truck: $8,000 down, the rest financed with a note.",
          lines: [{ acct: "vehicles", dr: 38000 }, { acct: "cash", cr: 8000 }, { acct: "notes_payable", cr: 30000 }],
          why: "The asset is recorded at its full cost, however it was paid for." }
      ]
    },
    {
      id: "u09-2",
      title: "Three depreciation methods",
      read: `All depreciation methods spread **cost − salvage** over the asset's useful life. They differ in *how quickly*.

Example: cost $50,000, salvage $5,000, 5-year life, expected output 90,000 units.

**Straight-line** gives the same amount every year:
> ($50,000 − $5,000) ÷ 5 = **$9,000 per year**

**Double-declining balance** (DDB) is faster at the start. Rate = 2 ÷ life = 40%, applied to **book value**, *ignoring salvage* until the end:
| Year | Book value at start | Depreciation (× 40%) | Book value at end |
|---|---|---|---|
| 1 | 50,000 | 20,000 | 30,000 |
| 2 | 30,000 | 12,000 | 18,000 |
| 3 | 18,000 | 7,200 | 10,800 |
Stop once book value reaches salvage. Don't depreciate below it.

**Units of production** follows actual use:
> ($50,000 − $5,000) ÷ 90,000 units = **$0.50 per unit**. Year 1 runs 22,000 units → **$11,000**.

Choose the method that matches how the asset actually wears out: straight-line for buildings and furniture, accelerated methods for technology that goes out of date quickly, units of production for machines and vehicles where use is what wears them down.

**Tax depreciation is a separate system.** US tax returns use **MACRS**, plus bonus depreciation and Section 179 expensing, with lives set by law. So book and tax depreciation almost always differ, and that difference creates **deferred taxes**. Keep two sets of depreciation figures in your fixed-asset software. That's normal and expected.`,
      steps: [
        { type: "number", q: "Straight-line: what's annual depreciation on the example asset?", answer: 9000, prefix: "$",
          why: "($50,000 − $5,000) ÷ 5 = $9,000." },
        { type: "number", q: "Double-declining balance: what's depreciation in YEAR 2?", answer: 12000, prefix: "$",
          why: "Year 1: $50,000 × 40% = $20,000, leaving a book value of $30,000. Year 2: $30,000 × 40% = $12,000." },
        { type: "number", q: "Units of production: the machine runs 22,000 units in year 1. What's year-1 depreciation?", answer: 11000, prefix: "$",
          why: "$45,000 ÷ 90,000 = $0.50 per unit, and 22,000 × $0.50 = $11,000." },
        { type: "choice", q: "Why does the tax return's depreciation usually differ from the books?", options: ["One of them is wrong", "Tax law prescribes MACRS lives and allows bonus/Section 179 expensing; GAAP uses estimated useful life", "Depreciation isn't deductible for taxes", "GAAP doesn't allow depreciation"], answer: 1,
          why: "They're two different rule books with different goals. The timing difference is tracked as a deferred tax liability or asset." }
      ]
    },
    {
      id: "u09-3",
      title: "Disposals: gains and losses",
      read: `When you sell, scrap or trade in an asset:

1. **Record depreciation up to the disposal date** first, so book value is current.
2. **Remove the asset's cost** (credit the asset account) **and its accumulated depreciation** (debit Accumulated Depreciation).
3. Record what you received (usually cash).
4. The balancing figure is a **gain** (credit) or **loss** (debit).

> Gain or loss = Proceeds − Book value

| Equipment sold | |
|---|---|
| Cost | 50,000 |
| Accumulated depreciation | (41,000) |
| Book value | 9,000 |
| Proceeds | 6,500 |
| **Loss** | **(2,500)** |

Entry: Dr Cash 6,500 · Dr Accumulated Depreciation 41,000 · Dr Loss on Disposal 2,500 · Cr Equipment 50,000.

Gains and losses on disposal go under **other income and expense** on the income statement, and on the cash flow statement they're removed from operating activities (the proceeds appear under investing). Remember to update the **fixed-asset register** too, or the asset will keep being depreciated after it's gone, and it will show up as a "ghost asset" at the next physical inventory.`,
      steps: [
        { type: "number", q: "Equipment cost $50,000 with $41,000 of accumulated depreciation sells for $6,500. How big is the loss?", answer: 2500, prefix: "$",
          why: "Book value = $9,000, and proceeds of $6,500 are $2,500 short of it." },
        { type: "entry", q: "Record that sale.",
          lines: [{ acct: "cash", dr: 6500 }, { acct: "accum_dep", dr: 41000 }, { acct: "loss_disposal", dr: 2500 }, { acct: "equipment", cr: 50000 }],
          why: "Remove both the cost and the accumulated depreciation, record the cash, and the $2,500 shortfall is the loss." },
        { type: "entry", q: "A vehicle that cost $30,000, with $24,000 of accumulated depreciation, sells for $8,200 cash. Record it.",
          lines: [{ acct: "cash", dr: 8200 }, { acct: "accum_dep", dr: 24000 }, { acct: "vehicles", cr: 30000 }, { acct: "gain_disposal", cr: 2200 }],
          why: "Book value is $6,000. Proceeds of $8,200 exceed it by $2,200, which is a gain." },
        { type: "choice", q: "You're recording a mid-year sale. What do you do before the disposal entry?", options: ["Nothing", "Record depreciation from the last posting up to the sale date", "Reverse all prior depreciation", "Write the asset up to fair value"], answer: 1,
          why: "Bring book value up to date first. Otherwise part of the year's depreciation ends up in the gain or loss instead of in depreciation expense." }
      ]
    },
    {
      id: "u09-4",
      title: "The asset register and impairment",
      read: `The **fixed-asset register** is the subledger behind the PP&E accounts. Each asset gets a line with: **tag number**, description, **location** and custodian, **in-service date**, **cost**, book method and life, **accumulated depreciation**, tax method, and disposal date. As with any subledger, its total must **tie to the GL** every month.

Do a **physical verification** periodically: walk the floor with the register (or scan the tags) and confirm that every asset exists and every asset you find is on the list. Scrapped assets that are still on the books ("ghost assets") overstate assets and keep generating depreciation, and they cost money where property taxes apply.

**Impairment (US GAAP, ASC 360, assets in use).** If something happens that suggests an asset may not be worth its carrying amount (damage, obsolescence, a plant sitting idle), test it:

1. **Recoverability test:** are the asset's **undiscounted** future cash flows less than its carrying amount? If not, stop: no impairment.
2. If they are, **measure the loss**: carrying amount − **fair value**.

> Carrying $400,000; undiscounted cash flows $350,000, which fails the test; fair value $310,000 → **$90,000 impairment loss**.

Under US GAAP, an impairment loss on an asset held and used **can't be reversed** later. (IFRS allows reversals in some cases, which is one of the notable differences between the two.)`,
      steps: [
        { type: "choice", q: "A physical verification finds that a forklift on the register was scrapped two years ago. What's the fix?", options: ["Leave it — it's fully depreciated anyway", "Record its disposal: remove cost and accumulated depreciation and recognize any remaining book value as a loss", "Expense its original cost again", "Add a new forklift to replace it"], answer: 1,
          why: "Clear the ghost asset with a proper disposal entry. If it had book value left, that becomes a loss, and the register gets updated." },
        { type: "number", q: "Carrying amount $400,000; undiscounted future cash flows $350,000; fair value $310,000. What is the impairment loss?", answer: 90000, prefix: "$",
          why: "It fails recoverability ($350,000 < $400,000), so the loss is measured against fair value: $400,000 − $310,000 = $90,000." },
        { type: "choice", q: "Under US GAAP, if the asset's fair value recovers next year, can you reverse the impairment?", options: ["Yes, fully", "Yes, up to original cost", "No — impairment losses on assets held and used aren't reversed", "Only with auditor approval"], answer: 2,
          why: "The written-down carrying amount becomes the asset's new cost basis. IFRS is different here, which is one of the notable GAAP/IFRS differences." }
      ]
    }
  ]
});
