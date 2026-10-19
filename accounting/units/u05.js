LEDGER.addUnit({
  id: "u05",
  title: "Cash and Bank Reconciliations",
  icon: "🏦",
  blurb: "Protect cash, run petty cash, reconcile the bank and the company card — and book what you find.",
  lessons: [
    {
      id: "u05-1",
      title: "Cash controls and petty cash",
      read: `Cash is the asset most likely to go missing, so it gets the strongest controls:
- **Separate duties.** The person who handles or records cash shouldn't also reconcile the bank account.
- **Deposit daily, intact.** Don't pay bills out of receipts; deposit everything and pay by check or ACH.
- **Use bank tools.** Lockbox for collections, **positive pay** (the bank only honors checks you've reported to it), dual approval on wires and ACH.
- **Reconcile monthly, promptly**, with a reviewer signing off.

**Petty cash** is a small fund for minor purchases, run on the **imprest** system:
1. **Establish** the fund: Dr Petty Cash, Cr Cash (for example $300). The Petty Cash account doesn't change again unless you resize the fund.
2. A custodian pays small expenses and keeps a receipt for each.
3. **Replenish** when the fund runs low: write a check for the difference between the fund and the cash on hand, and record the receipts as expenses. **Cr Cash**, not Petty Cash.
4. If receipts plus cash on hand don't add up to the fund amount, the difference goes to **Cash Over and Short** (a debit when cash is short).

> Fund $300 − cash on hand $76 = $224 to replenish. Receipts total $221, so the fund is $3 short.

Small, recurring shortages are a control finding. Large or growing ones point to theft.`,
      steps: [
        { type: "entry", q: "Establish a $300 petty cash fund.",
          lines: [{ acct: "petty_cash", dr: 300 }, { acct: "cash", cr: 300 }],
          why: "Moving money from the bank to a cash box swaps one asset for another." },
        { type: "entry", q: "Replenish the $300 fund. Receipts: Office Expense $112, Supplies Expense $64, Delivery Expense $45. Cash left in the box: $76.",
          lines: [{ acct: "office_exp", dr: 112 }, { acct: "supplies_exp", dr: 64 }, { acct: "delivery_exp", dr: 45 }, { acct: "cash_over_short", dr: 3 }, { acct: "cash", cr: 224 }],
          why: "Replenish $300 − $76 = $224 from the bank. Receipts explain $221, and the $3 shortage is debited to Cash Over and Short. Petty Cash itself doesn't change." },
        { type: "choice", q: "Who should NOT prepare the monthly bank reconciliation?", options: ["The controller", "An accountant with no access to cash or the books' cash entries", "The person who writes checks and records cash receipts", "An outside bookkeeper"], answer: 2,
          why: "If the person who handles and records cash also reconciles the account, they could hide theft in the reconciliation. Separating those duties is the main protection." }
      ]
    },
    {
      id: "u05-2",
      title: "The bank reconciliation",
      read: `The bank's balance and your book balance almost never match on statement day, because each side knows things the other doesn't yet. A **bank reconciliation** brings both to the same **adjusted balance**:

| Bank side (what the bank doesn't know yet) | Book side (what you don't know yet) |
|---|---|
| + **Deposits in transit** (recorded by you, not yet by the bank) | + Interest earned, collections the bank received for you |
| − **Outstanding checks** (written, not yet cleared) | − Bank service charges and fees |
| ± Bank errors | − **NSF** (bounced) customer checks |
| | ± Errors in your books |

Worked example:

| Bank | | Books | |
|---|---|---|---|
| Statement balance | 18,420 | GL balance | 18,965 |
| + Deposit in transit | 3,150 | − Service charge | (45) |
| − Outstanding checks | (2,870) | − NSF check | (260) |
| | | + Interest earned | 40 |
| **Adjusted** | **18,700** | **Adjusted** | **18,700** |

When the adjusted balances match, you're done with the reconciliation itself. If they don't, look for an unrecorded item or a book error before you "plug" anything. A plug (an unexplained balancing number) hides problems, and reviewers reject it.

Reconciling items should clear the following month. A deposit in transit that's three weeks old isn't in transit; it may never have been deposited.`,
      steps: [
        { type: "number", q: "Bank statement balance $18,420; deposit in transit $3,150; outstanding checks $2,870. What's the adjusted bank balance?", answer: 18700, prefix: "$",
          why: "$18,420 + $3,150 − $2,870 = $18,700." },
        { type: "number", q: "GL cash $18,965; bank service charge $45; NSF customer check $260; interest earned $40. What's the adjusted book balance?", answer: 18700, prefix: "$",
          why: "$18,965 − $45 − $260 + $40 = $18,700, which matches the bank side." },
        { type: "classify", q: "Which side of the reconciliation does each item adjust?",
          cats: [["bank", "Bank side"], ["book", "Book side"]],
          items: [["Deposit in transit", "bank"], ["Outstanding check", "bank"], ["Monthly service charge", "book"], ["Customer's check returned NSF", "book"], ["Interest earned", "book"], ["Bank charged another company's check to your account", "bank"]],
          why: "Items you recorded that the bank hasn't processed yet, and the bank's own errors, adjust the bank side. Items the bank recorded that you haven't, and your own errors, adjust the book side." }
      ]
    },
    {
      id: "u05-3",
      title: "Booking the reconciliation",
      read: `Only **book-side** items get journal entries, because they're the things your ledger doesn't know about yet. Bank-side items need nothing: outstanding checks and deposits in transit are already in your books, and they'll clear at the bank on their own.

| Book-side item | Entry |
|---|---|
| Service charge | Dr Bank Service Charges, Cr Cash |
| Interest earned | Dr Cash, Cr Interest Income |
| NSF customer check | Dr Accounts Receivable, Cr Cash (the customer owes you again) |
| Your recording error | Correct the original accounts |

**Correcting an error:** suppose a $1,520 check to a vendor was keyed in the books as $1,250. Cash is overstated by $270, and so is the remaining balance in Accounts Payable. The correction is **Dr AP 270, Cr Cash 270**: finish recording what actually happened, in the accounts it actually affected.

After posting the book-side entries, the GL cash balance should equal the adjusted balance on the reconciliation. Save the reconciliation with the bank statement and a list of the open items. Next month's reconciliation starts from those open items.`,
      steps: [
        { type: "entry", q: "Record the $45 bank service charge found on the reconciliation.",
          lines: [{ acct: "bank_fees", dr: 45 }, { acct: "cash", cr: 45 }],
          why: "The bank already took the money. Your books catch up with an expense and a credit to Cash." },
        { type: "entry", q: "A customer's $260 check came back NSF. Record it.",
          lines: [{ acct: "ar", dr: 260 }, { acct: "cash", cr: 260 }],
          why: "The payment you recorded didn't happen, so the customer owes you again. Put the receivable back and reduce Cash." },
        { type: "entry", q: "A $1,520 check paying a vendor's bill was recorded in the books as $1,250. Correct it.",
          lines: [{ acct: "ap", dr: 270 }, { acct: "cash", cr: 270 }],
          why: "The books under-recorded the payment by $270. Finish it: reduce AP and Cash by the difference." },
        { type: "choice", q: "Does an outstanding check need a journal entry?", options: ["Yes — debit Cash to add it back", "Yes — credit Cash again", "No — it's already in the books and will clear at the bank", "Only if it's over 30 days old"], answer: 2,
          why: "You recorded the check when you wrote it. The bank just hasn't seen it yet. (A check that's been outstanding for months is a different problem: void it and reissue, or handle it under unclaimed-property rules.)" }
      ]
    },
    {
      id: "u05-4",
      title: "Credit card reconciliations and receipts",
      read: `Company cards are recorded as a liability, **Credit Card Payable**: each purchase is a debit to an expense or asset and a credit to the card liability. Paying the statement is **Dr Credit Card Payable, Cr Cash**.

The card account is reconciled like a bank account: the statement balance should equal the GL liability once you account for charges in transit and payments in transit. The other half of the job is making sure every charge is **supported and coded correctly**:
- Every charge needs a **receipt** and a **business purpose** (who, what, why). Expense tools such as Ramp, Expensify and Brex collect these from cardholders automatically.
- **Code to the right account.** A $3,000 laptop may belong in Equipment, not Office Expense, depending on your capitalization policy (Unit 9).
- **Missing receipts** get followed up within days, not months. Policies often require a signed missing-receipt form, and repeat offenders lose their card.
- **Personal charges** are not company expenses. Record them as a receivable from the employee and collect them, or deduct them from pay if your policy and state law allow it.

A card account that's left unreconciled for months becomes a pile of unidentified charges that someone eventually expenses to "Miscellaneous", and auditors and tax examiners both look hard at that account.`,
      steps: [
        { type: "entry", q: "Record this month's card statement, which hasn't been entered yet: software subscription $89 (Office Expense), client travel $412 (Travel Expense), online ads $250 (Advertising Expense).",
          lines: [{ acct: "office_exp", dr: 89 }, { acct: "travel_exp", dr: 412 }, { acct: "advertising_exp", dr: 250 }, { acct: "credit_card", cr: 751 }],
          why: "Each charge goes to its expense account, and the total ($751) is owed to the card issuer." },
        { type: "entry", q: "Pay the $751 card balance from the bank.",
          lines: [{ acct: "credit_card", dr: 751 }, { acct: "cash", cr: 751 }],
          why: "Paying the card settles the liability. The expenses were already recorded when the charges were entered." },
        { type: "choice", q: "An employee put a $64 personal purchase on the company card. What's the right treatment?", options: ["Expense it to Miscellaneous — it's small", "Record a receivable from the employee and collect it, per policy", "Ignore it until year-end", "Ask the bank to reverse it"], answer: 1,
          why: "A personal purchase was never a company expense. Track it as owed by the employee and collect it, and document it under the card policy." }
      ]
    }
  ]
});
