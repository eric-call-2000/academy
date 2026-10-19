# 📒 Accounting Lab

A hands-on course in **professional accounting**, built into [Academy](../README.md) the
same way as CodeLab and Political Academy. Each lesson is a short reading followed by
practice where **you do the work** (post journal entries, calculate, classify, choose),
and the app checks every answer the way a reviewer would.

Open `accounting/index.html` (or the 📒 card on Academy's picker). Profiles, XP and
streaks are shared with Academy.

## The path — 15 units, 60 lessons, 212 checked exercises

| # | Unit | Covers |
|---|------|--------|
| 1 | ⚖️ The Language of Business | The accounting equation, account types, debits and credits, normal balances, T-accounts |
| 2 | 📒 Journal Entries and the Ledger | Entry anatomy and support, everyday transactions, posting, subledgers, the trial balance and error hunting |
| 3 | ⏳ Accrual Accounting and Adjustments | Cash vs. accrual, accruals, prepaids and unearned revenue, depreciation, the adjusted TB |
| 4 | 📊 The Financial Statements | Multi-step income statement, classified balance sheet, indirect cash flows, closing entries |
| 5 | 🏦 Cash and Bank Reconciliations | Cash controls, petty cash, bank recs and their entries, company-card reconciliations |
| 6 | 🧾 Receivables and Revenue | Terms and discounts, the allowance and aging, write-offs and recoveries, ASC 606 |
| 7 | 📥 Payables and Expenses | Procure-to-pay, three-way match, purchase discounts, cutoff and accruals, W-9s and 1099s |
| 8 | 📦 Inventory and COGS | Perpetual vs. periodic, FIFO/LIFO/average, inventory errors and LCNRV, freight and shrinkage |
| 9 | 🏗️ Fixed Assets and Depreciation | Capitalization, SL/DDB/units of production, disposals, the asset register and impairment |
| 10 | 👥 Payroll Accounting | Gross to net, employer taxes (FICA, FUTA, SUTA), payroll entries, accruals, 941/940/W-2 |
| 11 | 🏛️ Debt, Sales Tax and Equity | Notes and interest, amortization and the current portion, sales tax, owners' equity |
| 12 | 🗓️ The Month-End Close | Close checklist, balance-sheet reconciliations, flux analysis, JE review and materiality |
| 13 | 🛡️ Controls, Audits and Ethics | COSO, segregation of duties, audits and PBC lists, the fraud triangle, professional ethics |
| 14 | 📈 Analysis and Management Reporting | Liquidity, profitability and efficiency ratios, budget vs. actual, intercompany and consolidation |
| 15 | 🧰 Tools of the Trade and Construction Accounting | QuickBooks Online, Excel for accountants, job costing and retainage, percentage of completion and the WIP schedule |

## Exercise types
- **Journal entry** — pick accounts from the course's chart of accounts and put each amount
  on the debit or credit side. Live totals show whether the entry balances. An entry is judged by
  its **net effect on each account**, so line order and split lines don't matter. A wrong
  entry gets a specific hint: unbalanced (and by how much), reversed, wrong accounts, or
  right accounts with the wrong amounts.
- **Calculate** — a number, typed however you like (`$1,234.50`, `(500)`, `12%`).
- **Choose** — one right answer.
- **Sort** — put each item in its category (account type, cash-flow section, preventive or detective…).

After two wrong tries, **Show answer** fills in the key and its explanation. Lessons
finished with no wrong answers are marked ✨ first try.

## Progress and XP
10 XP per lesson the first time and 20 per finished unit. Redoing a lesson is practice and
pays nothing. The streak is derived from the days you studied. Progress lives in
`localStorage` under `accounting_v1` and is mirrored into Academy's `academy_users_v1` store
as track **`accounting`** (the same bridge CodeLab and Political Academy use), so the picker
card shows live "N done · XP".

## Files
```
accounting/
├── index.html        # loads core → accounts → units/u01…u15 → app (in path order)
├── core.js           # registry, answer checking, markup, progress rules (DOM-free)
├── accounts.js       # the chart of accounts every exercise draws from
├── units/u01.js …    # one file per unit: lessons, readings, exercises, answer keys
├── app.js            # screens: home, unit, lesson, chart of accounts, profiles
├── styles.css
└── tools/
    ├── load.js       # runs the page's scripts in Node, in page order
    ├── validate.js   # content checks (every answer key balances, ids, word counts…)
    ├── test-core.js  # checking and progress rules
    └── smoke.js      # works every exercise through the real UI in Chromium
```

## Adding content
1. Write `units/uNN.js` (copy an existing unit; ids are `uNN-1 … uNN-N`).
2. Add its `<script>` to `index.html` before `app.js`.
3. Use only accounts that exist in `accounts.js` (add one there first if needed, numbered in
   its type's range).
4. Run the checks:
   ```
   node accounting/tools/validate.js
   node accounting/tools/test-core.js
   node accounting/tools/smoke.js            # needs Playwright + Chromium
   ```

The validator fails on any journal-entry answer key that doesn't balance or uses an unknown
account, a choice answer that doesn't point at an option, a sort category that's never used,
a reading outside 120–600 words, or a lesson with fewer than 3 exercises.

## Accuracy notes
Content follows US GAAP (FASB ASC) and current US payroll and information-reporting rules
at the time of writing. Thresholds that change (the Social Security wage base, the 1099
reporting threshold, state rates) are described as such rather than hard-coded, and
lessons point readers to the current IRS instructions.
