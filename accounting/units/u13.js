LEDGER.addUnit({
  id: "u13",
  title: "Controls, Audits and Ethics",
  icon: "🛡️",
  blurb: "COSO, segregation of duties, surviving an audit, and recognizing fraud — and saying no.",
  lessons: [
    {
      id: "u13-1",
      title: "Internal control basics",
      read: `**Internal control** is the system that gives reasonable assurance that the numbers are reliable, assets are protected, and laws are followed. The framework nearly everyone uses is **COSO**, which has five components:

1. **Control environment** — tone at the top, integrity, accountability.
2. **Risk assessment** — what could go wrong, including fraud.
3. **Control activities** — approvals, reconciliations, segregation of duties, system access.
4. **Information and communication** — the right data reaching the right people.
5. **Monitoring activities** — checking that controls actually work, and fixing them when they don't.

Controls are described by **when** they act and **how** they're performed:

| | Preventive (stops the error) | Detective (finds it afterward) |
|---|---|---|
| Examples | Dual approval on wires; system blocks duplicate invoice numbers; access rights | Bank reconciliations; flux analysis; reviewing payroll changes |

Strong systems use both kinds. Preventive controls are cheaper when they work, and detective controls catch what gets past them. **Automated** controls (built into the system) run every time without fail. **Manual** controls depend on people actually doing them, so they need evidence: sign-offs, dated reviews, tickets.

Public companies must assess these controls under **Sarbanes-Oxley (SOX)**. Private companies hear about control weaknesses from their auditors in a "management letter". Either way, a control that isn't documented is treated as not having happened.`,
      steps: [
        { type: "classify", q: "Preventive or detective?",
          cats: [["prev", "Preventive"], ["det", "Detective"]],
          items: [["Two approvals required to release a wire", "prev"], ["Monthly bank reconciliation", "det"], ["System rejects a duplicate vendor invoice number", "prev"], ["Reviewing the payroll change report each pay period", "det"], ["Only AP managers can edit the vendor master file", "prev"], ["Monthly flux analysis", "det"]],
          why: "Preventive controls stop the error before it happens: approvals, system rules, access limits. Detective controls find it afterward: reconciliations, reviews, analytics." },
        { type: "choice", q: "Which of these is one of COSO's five components?", options: ["Segregation of duties", "Monitoring activities", "Bank reconciliation", "Materiality"], answer: 1,
          why: "The five are control environment, risk assessment, control activities, information and communication, and monitoring. Segregation of duties and reconciliations are examples of control activities." },
        { type: "choice", q: "A manager says she reviews every journal entry, but nothing records that she did. How will an auditor treat the control?", options: ["As effective — she says she does it", "As not performed, because there's no evidence", "As a preventive control", "As immaterial"], answer: 1,
          why: "If it isn't documented, it didn't happen. Sign-offs, dates and system approvals are the evidence." }
      ]
    },
    {
      id: "u13-2",
      title: "Segregation of duties",
      read: `**Segregation of duties** (SoD) means no single person controls every step of a transaction. Split these four functions:

| Function | Example |
|---|---|
| **Authorization** | Approving a purchase, a vendor, a write-off, a pay change |
| **Custody** | Handling cash, signing checks, releasing payments, holding inventory |
| **Recording** | Entering transactions in the books |
| **Reconciliation** | Comparing the books to an independent source |

The dangerous combinations are those that let one person **commit and conceal** fraud:
- adding vendors **and** approving or releasing payments (fake-vendor fraud)
- receiving customer payments **and** posting AR or writing accounts off (lapping, skimming)
- running payroll **and** adding employees or changing pay rates (ghost employees)
- recording cash **and** reconciling the bank

**Small businesses** often can't separate everything with one bookkeeper. Use **compensating controls** instead, usually from the owner:
- bank and card statements go **directly to the owner** (or the owner logs in and reviews them) every month
- the owner approves all new vendors and changes to bank details
- the owner signs or releases payments, or reviews the payment register
- the owner reviews payroll for unfamiliar names and changed rates
- the owner takes a look at a few transactions at random, and staff know they might`,
      steps: [
        { type: "choice", q: "Which combination is the most dangerous?", options: ["Preparing the bank rec and reviewing flux analysis", "Adding vendors to the master file and approving payments to them", "Entering bills and filing invoices", "Running reports and emailing them"], answer: 1,
          why: "Setting up a vendor and paying it is everything a fake-vendor scheme needs, with nobody else involved." },
        { type: "choice", q: "A small company has one bookkeeper who does everything. What's the best compensating control?", options: ["Hire three more people", "The owner gets the bank statements directly and reviews payments, new vendors and payroll changes every month", "Have the bookkeeper sign a pledge", "Rely on the annual tax return"], answer: 1,
          why: "Independent review by the owner, whom the bookkeeper can't get around, is the classic compensating control." },
        { type: "classify", q: "Which function does each task belong to?",
          cats: [["auth", "Authorization"], ["cust", "Custody"], ["rec", "Recording"], ["recon", "Reconciliation"]],
          items: [["Approving a new vendor", "auth"], ["Releasing an ACH payment batch", "cust"], ["Entering a vendor bill in the system", "rec"], ["Comparing the AP aging to the GL", "recon"], ["Opening the mail and handling customer checks", "cust"], ["Approving a customer write-off", "auth"]],
          why: "Each of these should belong to different people, or be backed by a compensating review." }
      ]
    },
    {
      id: "u13-3",
      title: "Audits, reviews and the PBC list",
      read: `Outside CPAs provide three levels of service on financial statements:

| Service | Assurance | What the CPA does |
|---|---|---|
| **Audit** | **Reasonable** (high) | Tests controls and transactions, gets outside evidence (confirmations, observing counts), and gives an opinion |
| **Review** | **Limited** | Inquiry and analytical procedures; no opinion |
| **Compilation** | **None** | Presents management's numbers in statement form |

Lenders, investors, government agencies and bonding companies decide which one they need. Government contractors may also be audited by agencies such as the **DCAA**, which focuses on cost accounting and whether costs are allowable.

**Being audit-ready** comes down to the habits from the earlier units: reconciled accounts, schedules that support every balance, documented entries, and a clean cutoff.

Auditors send a **PBC list** (*prepared by client*): schedules and documents you owe them by a set date, such as the trial balance, reconciliations, the fixed-asset rollforward, debt schedules, accrual support and the AR aging. Deliver it complete and on time, with schedules that **tie to the trial balance**. That's what makes audits faster and cheaper.

Expect **confirmations**. Auditors contact your customers, banks and lenders **directly** to confirm balances. Your role is to authorize the requests. You don't send them yourself or see the replies.`,
      steps: [
        { type: "choice", q: "Which service gives the highest level of assurance?", options: ["Compilation", "Review", "Audit", "Tax return preparation"], answer: 2,
          why: "Only an audit gives reasonable assurance and an opinion. A review gives limited assurance, and a compilation gives none." },
        { type: "choice", q: "What is a PBC list?", options: ["Prepared-by-client: the schedules and documents the auditors request from you", "A list of problem bank checks", "The auditor's findings", "Preliminary budget calendar"], answer: 0,
          why: "PBC stands for prepared by client. Complete, tied-out PBC items are the biggest thing you can do to make an audit go smoothly." },
        { type: "choice", q: "Who sends AR confirmation requests to customers and receives the replies?", options: ["The company's AR clerk", "The auditor, directly", "The customer's bank", "The CFO"], answer: 1,
          why: "Confirmations only count as independent evidence if the company can't intercept or change them." }
      ]
    },
    {
      id: "u13-4",
      title: "Fraud and professional ethics",
      read: `The **fraud triangle** explains why ordinary people commit fraud. All three sides are usually present:

- **Pressure** — debt, addiction, family trouble, or pressure to hit a target or bonus.
- **Opportunity** — weak controls, too much trust, no review, one person doing everything.
- **Rationalization** — "I'll pay it back", "they underpay me", "everyone does it".

Controls mostly remove **opportunity**, the only side the company really controls.

Common schemes to recognize:
- **Skimming**: taking cash before it's ever recorded.
- **Lapping**: stealing one customer's payment and covering it with a later customer's payment, over and over.
- **Fake vendors** and **ghost employees**.
- **Financial-statement fraud**: early or invented revenue, hidden expenses, inflated inventory, and "cookie-jar" reserves released to smooth earnings.

Red flags: an employee who never takes vacation, someone living beyond their means, a refusal to share duties, unexplained reconciling items, and customer complaints about payments that were never credited.

**Ethics.** Professional codes (the AICPA Code of Professional Conduct, the IMA's Statement of Ethical Professional Practice) come down to **integrity, objectivity, competence and confidentiality**. When you're asked to bend the numbers, such as holding back expenses to hit a target, the professional answer is to **decline**, document it, and escalate under company policy (your manager's boss, the audit committee, the ethics hotline). Many careers in this field ended over a single "just this once".`,
      steps: [
        { type: "classify", q: "Which side of the fraud triangle does each item represent?",
          cats: [["pres", "Pressure"], ["opp", "Opportunity"], ["rat", "Rationalization"]],
          items: [["Employee is deep in gambling debt", "pres"], ["Nobody reviews the vendors she sets up", "opp"], ["\"I'll pay it back before anyone notices\"", "rat"], ["\"The company underpays me anyway\"", "rat"], ["He's the only one with the safe combination", "opp"], ["Bonus depends on hitting the revenue target", "pres"]],
          why: "Pressure is the motive, opportunity is the gap in controls, and rationalization is the story the person tells themselves. Controls go after opportunity." },
        { type: "choice", q: "What is lapping?", options: ["Paying vendors twice", "Covering a stolen customer payment with a later customer's payment, over and over", "Double-counting inventory", "Recording revenue early"], answer: 1,
          why: "Lapping keeps the theft hidden by constantly shifting payments between accounts. Signs include payments applied to the wrong customers and aging that keeps getting reshuffled." },
        { type: "choice", q: "Your manager asks you to hold this month's vendor bills until next month so the division hits its profit target. What do you do?", options: ["Do it — it all evens out next month", "Decline, explain that it misstates the period, document the request, and escalate per policy if pressed", "Do it but keep a note", "Record half of them"], answer: 1,
          why: "Deliberately missing cutoff misstates the financial statements. Saying no, documenting it and escalating protects you, the company, and the people relying on the numbers." }
      ]
    }
  ]
});
