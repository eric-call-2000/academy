LEDGER.addUnit({
  id: "u10",
  title: "Payroll Accounting",
  blurb: "Gross to net, employer payroll taxes, the payroll entries, accruals and the filings.",
  lessons: [
    {
      id: "u10-1",
      title: "From gross pay to net pay",
      read: `**Gross pay** is what the employee earned: hours × rate, or the salary for the period, plus overtime, bonuses and commissions. **Net pay** is what actually lands in their bank account. Everything in between is **withheld** by the employer and owed to someone else, so each withholding is a **liability** until it's paid over.

| Withholding | Rule of thumb (US) |
|---|---|
| **Federal income tax** | From the employee's **Form W-4** and the IRS withholding tables |
| **State and local income tax** | Varies by state; some states have none |
| **Social Security** (FICA-OASDI) | **6.2%** of wages, up to an annual wage base that rises each year |
| **Medicare** (FICA-HI) | **1.45%** of all wages, plus an **additional 0.9%** on wages over $200,000 in a year (employee only) |
| **Benefits and other** | Health premiums, 401(k) deferrals, garnishments |

Social Security plus Medicare is **7.65%** for most employees. Pre-tax deductions, such as traditional 401(k) deferrals and many health premiums (under a cafeteria plan), reduce the wages that income tax is calculated on, and some of them also reduce FICA wages. That's why "taxable wages" on a pay stub can be lower than gross pay.

> Gross $4,000 − federal $410 − state $160 − FICA $306 − health premium $120 = **net $3,004**.

Payroll providers (ADP, Gusto, Paychex, QuickBooks Payroll) handle the calculations and most filings, but the accountant still owns the entries, the reconciliations, and checking whether the provider got it right.`,
      steps: [
        { type: "number", q: "Gross pay is $4,000 and none of it is above any wage base. What's the employee's FICA (Social Security + Medicare)?", answer: 306, prefix: "$",
          why: "7.65% × $4,000 = $306 ($248 Social Security + $58 Medicare)." },
        { type: "number", q: "Gross $4,000; federal withholding $410; state withholding $160; FICA $306; after-tax health premium $120. What's net pay?", answer: 3004, prefix: "$",
          why: "$4,000 − $410 − $160 − $306 − $120 = $3,004." },
        { type: "choice", q: "An employee's wages pass $200,000 this year. What changes?", options: ["Medicare stops", "The employer must withhold an additional 0.9% Medicare tax on wages over $200,000 — employee only", "Both employer and employee pay 2.35% Medicare", "Social Security doubles"], answer: 1,
          why: "The Additional Medicare Tax applies only to the employee's share. The employer withholds it but doesn't match it." }
      ]
    },
    {
      id: "u10-2",
      title: "Employer payroll taxes",
      read: `On top of what it withholds, the employer pays its **own** payroll taxes. These are an expense to the company, separate from wages:

| Tax | Employer cost |
|---|---|
| **FICA match** | Another **7.65%** (6.2% Social Security up to the wage base + 1.45% Medicare). The employer does *not* match the additional 0.9%. |
| **FUTA** (federal unemployment) | 6.0% of the **first $7,000** per employee per year, minus a credit of up to 5.4% for paying state unemployment on time, so usually **0.6%**, or **$42 per employee per year** |
| **SUTA** (state unemployment) | A state-set rate on a state wage base. New employers get a standard rate; established employers get an **experience rating** that rises with layoffs |
| **Workers' compensation** | Insurance (state fund or private carrier), priced by job classification |

The wage caps matter. Once an employee's year-to-date wages pass $7,000, there's no more FUTA on them, so FUTA and SUTA costs are high early in the year and drop off later. Budget for that.

> The real cost of an employee is more than their salary: payroll taxes, workers' comp, benefits and paid time off typically add **20–35%** on top of wages.

Employer taxes are recorded as **Dr Payroll Tax Expense**, with a **Cr** to each tax liability account, and the liabilities are cleared when the deposits are made.`,
      steps: [
        { type: "number", q: "What is the employer's FICA match on $4,000 of wages (under the wage base)?", answer: 306, prefix: "$",
          why: "The employer matches 7.65%, which is $306, the same as the employee's share." },
        { type: "number", q: "A new hire earns $4,000 in their first month. What's the FUTA cost at the usual 0.6% net rate?", answer: 24, prefix: "$",
          why: "All $4,000 is under the $7,000 cap: 0.6% × $4,000 = $24." },
        { type: "number", q: "An employee has already earned $6,000 this year and earns $4,000 more this month. What's this month's FUTA at 0.6%?", answer: 6, prefix: "$",
          why: "Only $1,000 more is taxable before the $7,000 cap. 0.6% × $1,000 = $6." }
      ]
    },
    {
      id: "u10-3",
      title: "Recording payroll",
      read: `Payroll takes two entries every pay period, plus entries for the deposits.

**1. The payroll itself** (gross pay, what was withheld, and what was paid out):
| Account | Debit | Credit |
|---|---|---|
| Wages Expense | gross | |
| Federal Income Tax Withheld | | ✓ |
| State Income Tax Withheld | | ✓ |
| FICA Taxes Payable (employee share) | | ✓ |
| Benefits Payable (if any) | | ✓ |
| Cash (net pay) | | ✓ |

**2. The employer's taxes:** Dr Payroll Tax Expense; Cr FICA Taxes Payable (employer match), FUTA Payable, SUTA Payable.

**3. Deposits:** federal income tax withheld **plus both halves of FICA** go to the IRS together (monthly or semiweekly, depending on how much the company owes). FUTA is deposited quarterly once it passes $500, and state taxes go to the state. Each deposit debits the liability and credits Cash.

FICA Taxes Payable gets credited **twice**, once for the employee share and once for the employer match, so before the deposit it holds both halves.

Payroll liability accounts should drop back to zero (or to just the current period) after every deposit. A balance that keeps growing in a withholding account means a deposit was missed, and **unpaid payroll taxes** carry steep penalties. The IRS can hold the people responsible *personally* liable for the withheld amounts, under what's called the trust fund recovery penalty.`,
      steps: [
        { type: "entry", q: "Record payroll: gross wages $50,000; federal withholding $6,200; state withholding $2,100; employee FICA $3,825; net pay of $37,875 paid by direct deposit.",
          lines: [{ acct: "wages_exp", dr: 50000 }, { acct: "fed_wh_payable", cr: 6200 }, { acct: "state_wh_payable", cr: 2100 }, { acct: "fica_payable", cr: 3825 }, { acct: "cash", cr: 37875 }],
          why: "The expense is the full gross pay. Every withholding is owed to a government until it's deposited, and only net pay leaves the bank today." },
        { type: "entry", q: "Record the employer's taxes on that payroll: FICA match $3,825; FUTA $120; SUTA $540.",
          lines: [{ acct: "payroll_tax_exp", dr: 4485 }, { acct: "fica_payable", cr: 3825 }, { acct: "futa_payable", cr: 120 }, { acct: "suta_payable", cr: 540 }],
          why: "The employer's own taxes are an extra expense on top of wages: $3,825 + $120 + $540 = $4,485." },
        { type: "entry", q: "Make the federal deposit: the federal income tax withheld plus both halves of FICA.",
          lines: [{ acct: "fed_wh_payable", dr: 6200 }, { acct: "fica_payable", dr: 7650 }, { acct: "cash", cr: 13850 }],
          why: "FICA Payable holds $3,825 × 2 = $7,650. Adding the $6,200 withheld, the IRS deposit is $13,850." }
      ]
    },
    {
      id: "u10-4",
      title: "Payroll accruals, PTO and the filings",
      read: `**Accrued wages.** Pay periods rarely end on the last day of the month. Accrue the wages employees have earned but haven't been paid for yet, and the employer taxes on them:

> Biweekly payroll of $28,000 covers 10 workdays. If 6 of them fall in this month but are paid next month: $28,000 × 6/10 = **$16,800** to accrue.

**Paid time off.** Vacation that employees have earned and that has vested is a liability, accrued as it's earned (ASC 710). Keep a schedule: hours earned − hours used × pay rate.

**The filings** (US federal):
| Form | What | When |
|---|---|---|
| **941** | Wages, federal income tax withheld and FICA | **Quarterly** |
| **940** | FUTA | Annually |
| **W-2 / W-3** | Each employee's annual wages and withholdings | By **January 31** |

**Reconcile payroll to the GL every quarter.** The 941s for the year should add up to the W-2 totals, and both should tie to the GL wage accounts once you account for timing. The usual reconciling items are **accrued wages** (the GL is on the accrual basis, the 941 counts wages when they're paid) and **pre-tax deductions** (which reduce taxable wages but not gross pay). Write every reconciling item down. A difference you can't explain may mean wages were reported wrong, and those take amended returns to fix.`,
      steps: [
        { type: "number", q: "Biweekly payroll is $28,000 for 10 workdays. At month-end, 6 workdays have been worked but not paid. How much should you accrue?", answer: 16800, prefix: "$",
          why: "$28,000 × 6/10 = $16,800. (In practice you'd also accrue the employer payroll taxes on it.)" },
        { type: "entry", q: "Record that wage accrual.",
          lines: [{ acct: "wages_exp", dr: 16800 }, { acct: "wages_payable", cr: 16800 }],
          why: "The employees did the work this month, so the expense belongs here even though they're paid next month." },
        { type: "choice", q: "How often is Form 941 filed?", options: ["Monthly", "Quarterly", "Annually", "Every payroll"], answer: 1,
          why: "Form 941 is quarterly. Deposits can be monthly or semiweekly, but the return is filed once a quarter." },
        { type: "choice", q: "The quarter's 941 shows wages of $410,000; the GL shows wage expense of $415,500. What's the most likely explanation?", options: ["The 941 is wrong and must be amended", "Accrued wages at quarter-end — the GL records wages when earned, the 941 when paid", "Someone embezzled $5,500", "FUTA was recorded as wages"], answer: 1,
          why: "Timing is the usual reconciling item, along with pre-tax deductions. Document it, and only treat it as an error if the timing difference doesn't account for it." }
      ]
    }
  ]
});
