LEDGER.addUnit({
  id: "u07",
  title: "Payables and Expenses",
  blurb: "Procure-to-pay, the three-way match, cutoff and accruals, vendor files and 1099s.",
  lessons: [
    {
      id: "u07-1",
      title: "Procure-to-pay and the three-way match",
      read: `**Procure-to-pay** (P2P) is the process from "we need something" to "the vendor has been paid". Each step leaves a document:

1. **Purchase requisition**: an employee asks for something.
2. **Purchase order (PO)**: an approved buyer commits to a vendor, a price and a quantity.
3. **Receiving report**: the warehouse or job site confirms what actually arrived.
4. **Vendor invoice**: the bill.
5. **Payment**: by check, ACH or card, released by someone who didn't create the vendor or approve the bill.

Before paying, AP performs the **three-way match**: **PO vs. receiving report vs. invoice**. Quantity, price and terms should all agree.

| | PO | Received | Invoice |
|---|---|---|---|
| Quantity | 120 | 120 | 120 |
| Unit price | $14 | — | $15 |

Here the quantities match but the price doesn't, so the bill goes on **hold** and purchasing resolves the $1 per unit with the vendor. AP doesn't decide which price is right. Most systems allow a small **tolerance** (for example 2% or $50) so trivial differences don't stop the work.

Matching also stops **duplicate payments**. Vendors resend invoices, and systems should block a repeat of the same vendor + invoice number + amount. Services (legal, consulting) often have no PO or receiving report, so the control there is approval by the person who used the service.`,
      steps: [
        { type: "choice", q: "What does a three-way match compare?", options: ["The invoice, the check and the bank statement", "The purchase order, the receiving report and the vendor invoice", "The budget, the PO and the invoice", "The W-9, the invoice and the 1099"], answer: 1,
          why: "Was it ordered (PO), was it received (receiving report), and are we billed correctly (invoice)?" },
        { type: "choice", q: "PO: 120 units at $14. Received: 120. Invoice: 120 at $15. What does AP do?", options: ["Pay $15 — the vendor knows its price", "Pay $14 and ignore the difference", "Hold the invoice and route the price variance to purchasing to resolve", "Pay it and record the extra as a loss"], answer: 2,
          why: "Anything outside tolerance goes back to the person who negotiated the price. AP enforces the match but doesn't negotiate." },
        { type: "number", q: "How big is the price variance on that invoice, in dollars?", answer: 120, prefix: "$",
          why: "120 units × $1 = $120 over the PO." }
      ]
    },
    {
      id: "u07-2",
      title: "Recording bills, payments and purchase discounts",
      read: `When a matched bill is approved, AP records it: **Dr** the inventory, asset or expense account, **Cr Accounts Payable**. When it's paid: **Dr Accounts Payable, Cr Cash**.

The debit depends on what was bought:
- **Inventory** for goods held for resale (under a perpetual system)
- an **asset** (Equipment, Prepaid) if it benefits future periods
- an **expense** for services and items used up right away (legal fees, utilities, repairs)

**Purchase discounts** mirror sales discounts. Under a perpetual inventory system using the gross method, a discount taken on inventory **reduces the cost of the inventory**, because you paid less for the goods:

| | Debit | Credit |
|---|---|---|
| Receive $6,000 of inventory, 2/10, n/30 | Inventory 6,000 | AP 6,000 |
| Pay on day 9 | AP 6,000 | Inventory 120 · Cash 5,880 |

A strong AP department schedules payments: it takes every discount it can, pays everything else on the due date (not early), and runs payments on a fixed cycle (for example weekly) so cash forecasting can rely on it. Paying early without a discount just gives the vendor your cash for free.`,
      steps: [
        { type: "entry", q: "Receive $6,000 of inventory on account, terms 2/10, n/30. Use the gross method.",
          lines: [{ acct: "inventory", dr: 6000 }, { acct: "ap", cr: 6000 }],
          why: "Inventory goes up at the full invoice price, and so does the liability." },
        { type: "entry", q: "Pay that bill within the discount period.",
          lines: [{ acct: "ap", dr: 6000 }, { acct: "inventory", cr: 120 }, { acct: "cash", cr: 5880 }],
          why: "The whole payable is cleared and 98% is paid. Under a perpetual system the 2% ($120) reduces the cost of the inventory." },
        { type: "entry", q: "Record a $1,850 invoice from the company's attorneys for services this month.",
          lines: [{ acct: "professional_fees", dr: 1850 }, { acct: "ap", cr: 1850 }],
          why: "The legal services were used this month, so they're an expense now. AP holds the liability until payment." },
        { type: "choice", q: "A $20,000 bill is due in 30 days and offers no early-payment discount. When should AP pay it?", options: ["Today — paying early builds goodwill", "On (or just before) the due date, in the scheduled payment run", "After 60 days — vendors expect late payment", "Whenever the vendor calls"], answer: 1,
          why: "Without a discount, paying early only costs you the use of the cash. Pay on time, in the regular cycle." }
      ]
    },
    {
      id: "u07-3",
      title: "Cutoff and accrued liabilities",
      read: `**Cutoff** means recording every expense and liability in the period it belongs to, especially around month-end and year-end. Vendors bill late, so at every close, AP has to ask: **what did we receive this period that hasn't been billed yet?**

Common sources of **unrecorded liabilities**:
- **Goods received, not invoiced**: the receiving report is dated December, but the invoice arrives in January.
- **Services performed**: December repairs, legal work or consulting billed in January.
- **Recurring costs**: utilities, freight and subscriptions.

You accrue them: **Dr** the expense or Inventory, **Cr Accrued Expenses**. (Many ERPs use a dedicated "received not invoiced" liability account.)

**Shipping terms decide when goods change hands:**
| Term | Ownership passes when… | Goods in transit at year-end belong to… |
|---|---|---|
| **FOB shipping point** | they leave the seller's dock | the **buyer** |
| **FOB destination** | they arrive at the buyer's dock | the **seller** |

Auditors test cutoff with a **search for unrecorded liabilities**: they go through the payments made in the first weeks after year-end and look for any that pay for something received *before* year-end. You should do the same check yourself before they do.`,
      steps: [
        { type: "entry", q: "On Dec 28 you received $3,400 of inventory. The vendor's invoice hasn't arrived. Accrue it at Dec 31 using Accrued Expenses.",
          lines: [{ acct: "inventory", dr: 3400 }, { acct: "accrued_exp", cr: 3400 }],
          why: "The goods are yours and you owe for them. The missing paperwork doesn't change that, so record the asset and a liability now." },
        { type: "choice", q: "Goods are shipped to you FOB shipping point on Dec 30 and arrive Jan 3. Whose inventory are they on Dec 31?", options: ["The seller's", "Yours — record the purchase in December", "Nobody's until they're counted", "The carrier's"], answer: 1,
          why: "Under FOB shipping point, ownership passes when the goods leave the seller, so they're yours while in transit." },
        { type: "number", q: "Your January payments list: $4,200 for December consulting; $1,100 January rent; $2,750 for materials received Dec 29; $600 for January supplies. How much should be accrued at Dec 31?", answer: 6950, prefix: "$",
          why: "Only what relates to December: $4,200 + $2,750 = $6,950. January rent and January supplies belong to January." }
      ]
    },
    {
      id: "u07-4",
      title: "Vendor files, W-9s and 1099s",
      read: `The **vendor master file** (each vendor's name, address, tax ID and bank details) is a favorite target for fraud. A fake vendor, or a real vendor's bank account quietly changed to the thief's, can drain cash for months. Controls:
- Collect a **Form W-9** (legal name, entity type, **TIN**) *before* the first payment, and match the name and TIN using the IRS TIN Matching program.
- **Verify bank-detail changes** by calling the vendor on a phone number you already have on file, never the number in the email asking for the change.
- Separate duties: people who **add or edit vendors** shouldn't **approve or release payments**.

**Form 1099-NEC** reports payments for services to non-employees. Generally it's required for:
- individuals, sole proprietors and partnerships (including LLCs taxed as either)
- **attorneys**, even when the law firm is a corporation

It's generally *not* required for payments to C or S corporations (except attorneys), for merchandise or inventory, or for payments made by credit card (the card processor reports those on a 1099-K).

The reporting threshold was $600 a year for decades. Federal law raised it to **$2,000 for payments made after 2025**, with inflation adjustments in later years. Always check the current IRS instructions. 1099-NECs go to recipients and the IRS by **January 31**. If a vendor won't give you a TIN, you must apply **backup withholding** (currently 24%) to their payments.`,
      steps: [
        { type: "choice", q: "When should you collect a vendor's W-9?", options: ["In January, when preparing 1099s", "Before the first payment, during vendor setup", "Only if the vendor is an individual", "Only if the IRS asks"], answer: 1,
          why: "Collect it at setup. Chasing W-9s in January from vendors you've already paid is slow and sometimes impossible." },
        { type: "classify", q: "Assuming payments are over the threshold and not made by card, does each payee generally get a 1099-NEC?",
          cats: [["yes", "Yes"], ["no", "No"]],
          items: [["Sole-proprietor electrician", "yes"], ["Single-member LLC (taxed as a sole proprietorship) doing consulting", "yes"], ["Janitorial company that's a C corporation", "no"], ["Law firm organized as a corporation, for legal services", "yes"], ["Supplier of inventory parts", "no"], ["Your own W-2 employee", "no"]],
          why: "1099-NEC covers services by non-corporate payees, plus attorneys whatever their entity type. Goods and corporations generally aren't reported, and employees get a W-2." },
        { type: "choice", q: "A vendor emails asking you to send future payments to a new bank account. What's the right control?", options: ["Update it — the email came from their domain", "Call the vendor at the phone number already on file to verify before changing anything", "Reply to the email asking them to confirm", "Pay half to each account"], answer: 1,
          why: "Fake bank-change requests are among the most common business frauds. Verify through a channel you already trust, never through the request itself." }
      ]
    }
  ]
});
