/* ============================================================
   Accounting Lab — the chart of accounts
   ------------------------------------------------------------
   One chart for the whole course, the way a real company has one
   chart for every entry. Journal-entry exercises pick from it, so
   an account must exist here before a lesson can use it.

   Numbering follows the common convention: 1xxx assets, 2xxx
   liabilities, 3xxx equity, 4xxx revenue, 5xxx cost of sales,
   6xxx-7xxx operating and other expenses. `type` is one of
   LEDGER.TYPES (core.js), which fixes the normal balance.
   ============================================================ */
(function (L) {
  [
    /* ---- assets ---- */
    { id: "cash", no: 1000, name: "Cash", type: "asset" },
    { id: "petty_cash", no: 1010, name: "Petty Cash", type: "asset" },
    { id: "ar", no: 1100, name: "Accounts Receivable", type: "asset" },
    { id: "allowance", no: 1110, name: "Allowance for Doubtful Accounts", type: "contra-asset" },
    { id: "retainage_rec", no: 1120, name: "Retainage Receivable", type: "asset" },
    { id: "interest_rec", no: 1150, name: "Interest Receivable", type: "asset" },
    { id: "due_from_affiliate", no: 1160, name: "Due from Affiliate", type: "asset" },
    { id: "inventory", no: 1200, name: "Inventory", type: "asset" },
    { id: "supplies", no: 1300, name: "Supplies", type: "asset" },
    { id: "prepaid_ins", no: 1400, name: "Prepaid Insurance", type: "asset" },
    { id: "prepaid_rent", no: 1410, name: "Prepaid Rent", type: "asset" },
    { id: "costs_in_excess", no: 1450, name: "Costs in Excess of Billings", type: "asset" },
    { id: "land", no: 1500, name: "Land", type: "asset" },
    { id: "building", no: 1510, name: "Building", type: "asset" },
    { id: "equipment", no: 1520, name: "Equipment", type: "asset" },
    { id: "vehicles", no: 1530, name: "Vehicles", type: "asset" },
    { id: "accum_dep", no: 1590, name: "Accumulated Depreciation", type: "contra-asset" },

    /* ---- liabilities ---- */
    { id: "ap", no: 2000, name: "Accounts Payable", type: "liability" },
    { id: "credit_card", no: 2010, name: "Credit Card Payable", type: "liability" },
    { id: "accrued_exp", no: 2100, name: "Accrued Expenses", type: "liability" },
    { id: "wages_payable", no: 2110, name: "Wages Payable", type: "liability" },
    { id: "interest_payable", no: 2120, name: "Interest Payable", type: "liability" },
    { id: "fed_wh_payable", no: 2130, name: "Federal Income Tax Withheld", type: "liability" },
    { id: "state_wh_payable", no: 2135, name: "State Income Tax Withheld", type: "liability" },
    { id: "fica_payable", no: 2140, name: "FICA Taxes Payable", type: "liability" },
    { id: "futa_payable", no: 2150, name: "FUTA Tax Payable", type: "liability" },
    { id: "suta_payable", no: 2155, name: "SUTA Tax Payable", type: "liability" },
    { id: "benefits_payable", no: 2160, name: "Employee Benefits Payable", type: "liability" },
    { id: "sales_tax_payable", no: 2200, name: "Sales Tax Payable", type: "liability" },
    { id: "unearned_rev", no: 2300, name: "Unearned Revenue", type: "liability" },
    { id: "billings_in_excess", no: 2310, name: "Billings in Excess of Costs", type: "liability" },
    { id: "due_to_affiliate", no: 2400, name: "Due to Affiliate", type: "liability" },
    { id: "notes_payable", no: 2500, name: "Notes Payable", type: "liability" },

    /* ---- equity ---- */
    { id: "owner_capital", no: 3000, name: "Owner's Capital", type: "equity" },
    { id: "owner_draws", no: 3010, name: "Owner's Draws", type: "contra-equity" },
    { id: "common_stock", no: 3100, name: "Common Stock", type: "equity" },
    { id: "retained_earnings", no: 3200, name: "Retained Earnings", type: "equity" },
    { id: "dividends", no: 3210, name: "Dividends", type: "contra-equity" },
    { id: "income_summary", no: 3900, name: "Income Summary", type: "equity" },

    /* ---- revenue ---- */
    { id: "sales_revenue", no: 4000, name: "Sales Revenue", type: "revenue" },
    { id: "service_revenue", no: 4010, name: "Service Revenue", type: "revenue" },
    { id: "contract_revenue", no: 4020, name: "Contract Revenue", type: "revenue" },
    { id: "sales_returns", no: 4100, name: "Sales Returns and Allowances", type: "contra-revenue" },
    { id: "sales_discounts", no: 4110, name: "Sales Discounts", type: "contra-revenue" },
    { id: "interest_income", no: 4500, name: "Interest Income", type: "revenue" },
    { id: "gain_disposal", no: 4600, name: "Gain on Disposal of Assets", type: "revenue" },

    /* ---- cost of sales ---- */
    { id: "cogs", no: 5000, name: "Cost of Goods Sold", type: "expense" },
    { id: "contract_costs", no: 5100, name: "Contract Costs", type: "expense" },

    /* ---- operating and other expenses ---- */
    { id: "wages_exp", no: 6000, name: "Wages Expense", type: "expense" },
    { id: "payroll_tax_exp", no: 6010, name: "Payroll Tax Expense", type: "expense" },
    { id: "benefits_exp", no: 6020, name: "Employee Benefits Expense", type: "expense" },
    { id: "rent_exp", no: 6100, name: "Rent Expense", type: "expense" },
    { id: "utilities_exp", no: 6110, name: "Utilities Expense", type: "expense" },
    { id: "insurance_exp", no: 6120, name: "Insurance Expense", type: "expense" },
    { id: "supplies_exp", no: 6130, name: "Supplies Expense", type: "expense" },
    { id: "office_exp", no: 6140, name: "Office Expense", type: "expense" },
    { id: "advertising_exp", no: 6150, name: "Advertising Expense", type: "expense" },
    { id: "repairs_exp", no: 6160, name: "Repairs and Maintenance Expense", type: "expense" },
    { id: "delivery_exp", no: 6170, name: "Delivery Expense", type: "expense" },
    { id: "travel_exp", no: 6180, name: "Travel Expense", type: "expense" },
    { id: "professional_fees", no: 6190, name: "Professional Fees", type: "expense" },
    { id: "bank_fees", no: 6200, name: "Bank Service Charges", type: "expense" },
    { id: "dep_exp", no: 6300, name: "Depreciation Expense", type: "expense" },
    { id: "bad_debt_exp", no: 6400, name: "Bad Debt Expense", type: "expense" },
    { id: "shrinkage_exp", no: 6500, name: "Inventory Shrinkage", type: "expense" },
    { id: "interest_exp", no: 7000, name: "Interest Expense", type: "expense" },
    { id: "loss_disposal", no: 7100, name: "Loss on Disposal of Assets", type: "expense" },
    { id: "cash_over_short", no: 7200, name: "Cash Over and Short", type: "expense" }
  ].forEach(L.defineAccount);
})(window.LEDGER);
