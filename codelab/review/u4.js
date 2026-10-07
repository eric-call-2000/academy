/* Code Review — Unit 4: Design and complexity */
(function () {
  function src(lines) { return lines.join("\n") + "\n"; }

  window.CODELAB.addUnit("review", {
    id: "review-u4",
    title: "Design and complexity",
    icon: "🏗️",
    blurb: "The first thing Google's guide asks: does this belong here, in this shape? A rule in two places, a helper that already exists, a function doing three jobs, and names that say something the code doesn't. Most of it is non-blocking, and telling which is the skill.",
    cheat: [
      { h: "Design questions", lang: "text", code:
"does this already exist?      search before you approve a new helper\n" +
"is this the right layer?      a business rule in a view, SQL in a template\n" +
"one source of truth?          the same rule written twice will drift\n" +
"one job per function?         validate, save, notify, render = four",
        note: "Design comments are the most valuable ones a review makes, and the easiest to skip because nothing looks broken yet." },
      { h: "Blocking or not", lang: "text", code:
"wrong result today                       → blocking\n" +
"two copies of a rule that must agree     → blocking\n" +
"duplicate helper, works the same today   → non-blocking\n" +
"long function, correct                   → non-blocking\n" +
"name that misleads a caller              → usually non-blocking",
        note: "Ask: if this ships as it is, does anyone get a wrong answer? If not, say it, and let it merge." },
      { h: "Complexity, in one test", lang: "text", code:
"can the next reader tell what it does\n" +
"without running it in their head twice?",
        note: "Google's guide defines \"too complex\" as code that can't be understood quickly, or code that invites the next person to add a bug." },
      { h: "Names that lie", lang: "js", code:
"isValid(email)   // also saves it? not a check any more\n" +
"getUser(id)      // creates one if missing? say so\n" +
"// returns null when not found   ← but it throws",
        note: "A wrong name or comment is worse than none: the next caller trusts it." }
    ],
    lessons: [

      {
        id: "review-u4-1",
        title: "The same rule, twice",
        kind: "review", xp: 20, mins: 7,
        brief: "**Show \"Free shipping!\" in the cart**\n\nShoppers asked to see when they qualify. The cart now shows a badge once the subtotal reaches the free-shipping amount. Display only: what we charge is unchanged.",
        base: {
          "cart-view.js": src([
            "function cartSummary(cart) {",
            "  return \"<p>Subtotal: $\" + cart.subtotal.toFixed(2) + \"</p>\";",
            "}"
          ]),
          "orders.js": src([
            "const FREE_SHIPPING_FROM = 50;",
            "",
            "function shippingFor(subtotal) {",
            "  return subtotal >= FREE_SHIPPING_FROM ? 0 : 4.99;",
            "}"
          ])
        },
        head: {
          "cart-view.js": src([
            "function cartSummary(cart) {",
            "  let html = \"<p>Subtotal: $\" + cart.subtotal.toFixed(2) + \"</p>\";",
            "  if (cart.subtotal >= 40) {",
            "    html += \"<p class='badge'>Free shipping!</p>\";",
            "  }",
            "  return html;",
            "}"
          ]),
          "orders.js": src([
            "const FREE_SHIPPING_FROM = 50;",
            "",
            "function shippingFor(subtotal) {",
            "  return subtotal >= FREE_SHIPPING_FROM ? 0 : 4.99;",
            "}"
          ])
        },
        findings: [
          { id: "twice", file: "cart-view.js", lines: [3, 3], category: "design", alsoOk: ["bug"], severity: "blocking",
            why: "The view writes its own threshold, **40**, while `orders.js` charges by `FREE_SHIPPING_FROM`, which is **50**. A $45 cart is told shipping is free and then charged $4.99. The rule should live in one place: use `shippingFor(cart.subtotal) === 0`, or share the constant." }
        ],
        decoys: [
          { file: "cart-view.js", lines: [6, 6], why: "Building the HTML in a variable and returning it at the end is fine. The badge text is fixed, so nothing user-supplied reaches the HTML." },
          { file: "orders.js", lines: [4, 4], why: "`>=` matches \"or more\". The server's rule is right; the view just doesn't use it." }
        ],
        verdict: "request",
        rubric: ["Names both numbers (40 and 50)", "Describes what a shopper sees vs. what they pay", "Suggests one source of truth"]
      },

      {
        id: "review-u4-2",
        title: "We already have one",
        kind: "review", xp: 20, mins: 6,
        brief: "**Show refunds on the receipt**\n\nAdds a refund line under the order total. Adds a small `money()` helper to print amounts.",
        base: {
          "receipt.js": src([
            "function receiptLines(order) {",
            "  return [",
            "    \"Total: \" + formatCents(order.totalCents)",
            "  ];",
            "}"
          ]),
          "format.js": src([
            "// Formats integer cents as dollars: 1999 → \"$19.99\", -500 → \"-$5.00\".",
            "function formatCents(cents) {",
            "  const sign = cents < 0 ? \"-\" : \"\";",
            "  return sign + \"$\" + (Math.abs(cents) / 100).toFixed(2);",
            "}"
          ])
        },
        head: {
          "receipt.js": src([
            "function money(cents) {",
            "  return \"$\" + (cents / 100).toFixed(2);",
            "}",
            "",
            "function receiptLines(order) {",
            "  const lines = [\"Total: \" + formatCents(order.totalCents)];",
            "  if (order.refundCents) {",
            "    lines.push(\"Refunded: \" + money(order.refundCents));",
            "  }",
            "  return lines;",
            "}"
          ]),
          "format.js": src([
            "// Formats integer cents as dollars: 1999 → \"$19.99\", -500 → \"-$5.00\".",
            "function formatCents(cents) {",
            "  const sign = cents < 0 ? \"-\" : \"\";",
            "  return sign + \"$\" + (Math.abs(cents) / 100).toFixed(2);",
            "}"
          ])
        },
        findings: [
          { id: "dup", file: "receipt.js", lines: [1, 3], category: "design", alsoOk: ["readability"], severity: "nonblocking",
            why: "`formatCents()` in `format.js` already does this, and the very next function uses it. A second helper will drift: this one already prints negatives as `$-5.00`. It works for refunds today, so it's a non-blocking \"use the existing one\"." }
        ],
        decoys: [
          { file: "receipt.js", lines: [7, 7], why: "`if (order.refundCents)` skips both 0 and a missing refund, which is what we want: no refund line when nothing was refunded." }
        ],
        mustFind: ["dup"],
        verdict: "approve",
        rubric: ["Names the existing helper", "Keeps it non-blocking", "Says why two helpers is a problem later, not now"]
      },

      {
        id: "review-u4-3",
        title: "Three jobs and a missing return",
        kind: "review", xp: 20, mins: 8,
        brief: "**Discount codes at checkout**\n\nAdds `applyCode()`. It checks the code, works out the new total, and records that the code was used. Codes are percent-off (`SAVE10`) or a fixed amount (`FIVEOFF`).",
        base: {
          "checkout.js": src([
            "function checkoutTotal(cart) {",
            "  return cart.subtotal + cart.shipping;",
            "}"
          ])
        },
        head: {
          "checkout.js": src([
            "function checkoutTotal(cart) {",
            "  return cart.subtotal + cart.shipping;",
            "}",
            "",
            "function applyCode(cart, code, codes, usage) {",
            "  const c = codes[code];",
            "  if (c) {",
            "    if (!c.expired) {",
            "      if (c.type === \"percent\") {",
            "        usage[code] = (usage[code] || 0) + 1;",
            "        return checkoutTotal(cart) * (1 - c.value / 100);",
            "      } else if (c.type === \"amount\") {",
            "        usage[code] = (usage[code] || 0) + 1;",
            "        Math.max(0, checkoutTotal(cart) - c.value);",
            "      }",
            "    }",
            "  }",
            "  return checkoutTotal(cart);",
            "}"
          ])
        },
        findings: [
          { id: "noreturn", file: "checkout.js", lines: [14, 14], category: "bug", severity: "blocking",
            why: "The fixed-amount branch computes the discounted total and throws it away: there's no `return`. It records the code as used, then falls through to the full price. Every `FIVEOFF` customer pays full price." },
          { id: "nesting", file: "checkout.js", lines: [7, 9], category: "readability", alsoOk: ["design"], severity: "nonblocking",
            why: "Three levels of nesting and the usage update written twice. Returning early (`if (!c || c.expired) return checkoutTotal(cart);`) flattens it, and is exactly the shape that would have made the missing return obvious. Worth suggesting; not a merge blocker on its own." }
        ],
        decoys: [
          { file: "checkout.js", lines: [11, 11], why: "`1 - c.value / 100` is the right multiplier: 10% off is `× 0.9`." },
          { file: "checkout.js", lines: [18, 18], why: "Falling back to the full total for unknown or expired codes is the intended behavior." }
        ],
        verdict: "request",
        rubric: ["Names the branch that never returns", "Says what customers are charged", "Suggests early returns as a separate, non-blocking note"]
      },

      {
        id: "review-u4-4",
        title: "Names that say too little",
        kind: "review", xp: 20, mins: 6,
        brief: "**Remember the last search**\n\nThe search box now remembers what you last searched for on this device, so it's filled in when you come back.",
        base: {
          "search.js": src([
            "function onSearch(query) {",
            "  runSearch(query);",
            "}"
          ])
        },
        head: {
          "search.js": src([
            "const KEY = \"lastSearch\";",
            "",
            "function onSearch(query) {",
            "  check(query);",
            "  runSearch(query);",
            "}",
            "",
            "// Saves the query for next time (trimmed, max 100 characters).",
            "function check(query) {",
            "  localStorage.setItem(KEY, query.trim().slice(0, 100));",
            "}",
            "",
            "function restoreSearch(input) {",
            "  input.value = localStorage.getItem(KEY) || \"\";",
            "}"
          ])
        },
        findings: [
          { id: "name", file: "search.js", lines: [9, 9], category: "readability", severity: "nonblocking",
            why: "`check()` doesn't check anything: it saves. Its own comment says so. A caller reading `check(query)` would never guess it writes to storage. `rememberSearch()` says what it does. Worth a comment; nothing is broken." }
        ],
        decoys: [
          { file: "search.js", lines: [14, 14], why: "`getItem` returns `null` for a first visit, and `|| \"\"` turns that into an empty box. Correct." },
          { file: "search.js", lines: [1, 1], why: "A module-level constant for the storage key is good practice: both functions use the same one." }
        ],
        mustFind: ["name"],
        verdict: "approve",
        rubric: ["Suggests a name that says what the function does", "Keeps it non-blocking"]
      },

      {
        id: "review-u4-5",
        title: "Project: the inventory endpoint",
        kind: "review", xp: 40, mins: 14, project: true,
        brief: "**Stock adjustments API**\n\nWarehouse staff can now adjust stock from the handheld scanners: `POST /items/:id/adjust` with `{ change: -3, reason: \"damaged\" }`. Negative changes remove stock, positive ones add it. Stock can never go below zero. Every adjustment is written to the audit table so we can see who changed what.\n\nThis is a project: **no false alarms allowed**. Read the whole change, including the files it calls into.",
        base: {
          "routes.js": src([
            "router.get(\"/items/:id\", requireStaff, async (req, res) => {",
            "  const item = await items.find(req.params.id);",
            "  if (!item) return res.status(404).json({ error: \"not found\" });",
            "  res.json(item);",
            "});"
          ]),
          "items.js": src([
            "// Data access for the items table.",
            "async function find(id) {",
            "  return db.one(\"SELECT * FROM items WHERE id = $1\", [id]);",
            "}",
            "",
            "async function setStock(id, stock) {",
            "  return db.run(\"UPDATE items SET stock = $1 WHERE id = $2\", [stock, id]);",
            "}"
          ]),
          "audit.js": src([
            "// Every change staff make is recorded here.",
            "async function record(userId, action, details) {",
            "  return db.run(",
            "    \"INSERT INTO audit (user_id, action, details) VALUES ($1, $2, $3)\",",
            "    [userId, action, JSON.stringify(details)]",
            "  );",
            "}"
          ])
        },
        head: {
          "routes.js": src([
            "router.get(\"/items/:id\", requireStaff, async (req, res) => {",
            "  const item = await items.find(req.params.id);",
            "  if (!item) return res.status(404).json({ error: \"not found\" });",
            "  res.json(item);",
            "});",
            "",
            "router.post(\"/items/:id/adjust\", requireStaff, async (req, res) => {",
            "  const change = Number(req.body.change);",
            "  const reason = String(req.body.reason || \"\");",
            "  if (!Number.isInteger(change) || change === 0) {",
            "    return res.status(400).json({ error: \"change must be a non-zero whole number\" });",
            "  }",
            "",
            "  const item = await items.find(req.params.id);",
            "  if (!item) return res.status(404).json({ error: \"not found\" });",
            "",
            "  let stock = item.stock + change;",
            "  if (stock < 0) {",
            "    return res.status(409).json({ error: \"not enough stock\", stock: item.stock });",
            "  }",
            "",
            "  await items.setStock(item.id, stock);",
            "  await audit.record(req.user.id, \"stock.adjust\", { item: item.id, change: change, reason: reason });",
            "  res.json({ id: item.id, stock: stock });",
            "});"
          ]),
          "items.js": src([
            "// Data access for the items table.",
            "async function find(id) {",
            "  return db.one(\"SELECT * FROM items WHERE id = $1\", [id]);",
            "}",
            "",
            "async function setStock(id, stock) {",
            "  return db.run(\"UPDATE items SET stock = $1 WHERE id = $2\", [stock, id]);",
            "}"
          ]),
          "audit.js": src([
            "// Every change staff make is recorded here.",
            "async function record(userId, action, details) {",
            "  return db.run(",
            "    \"INSERT INTO audit (user_id, action, details) VALUES ($1, $2, $3)\",",
            "    [userId, action, JSON.stringify(details)]",
            "  );",
            "}"
          ])
        },
        findings: [
          { id: "race", file: "routes.js", lines: [17, 19], category: "bug", alsoOk: ["design"], severity: "blocking",
            why: "Read, add, write is a race. Two scanners adjusting the same item at once both read stock 5, both write their own result, and one adjustment is lost; two \"take 3\" requests can both pass the check and leave the shelf at 2 instead of refusing one. Do it in one statement (`UPDATE items SET stock = stock + $1 WHERE id = $2 AND stock + $1 >= 0 RETURNING stock`) or in a transaction that locks the row." },
          { id: "noaudit", file: "routes.js", lines: [22, 23], category: "design", alsoOk: ["bug"], severity: "blocking",
            why: "The stock update and the audit insert are two separate writes with no transaction. If the audit insert fails, stock has changed with no record of who changed it, which is the one thing the description promises never happens. Both writes belong in one transaction." },
          { id: "reason", file: "routes.js", lines: [9, 9], category: "design", severity: "nonblocking",
            why: "`reason` is never checked: an empty string is accepted and audited. If the audit is meant to explain changes, ask whether a reason should be required. Worth raising; the description doesn't say it's required." }
        ],
        decoys: [
          { file: "routes.js", lines: [11, 11], why: "Rejecting a fractional or zero change with a 400 is right: stock moves in whole units, and a zero change would only write a noise row to the audit table." },
          { file: "routes.js", lines: [15, 15], why: "Answering 404 before touching stock is right, and matches the GET route above it." },
          { file: "audit.js", lines: [4, 5], why: "Parameterized: `$1, $2, $3` with values passed separately. No injection here." }
        ],
        verdict: "request",
        rubric: ["Describes two requests interleaving, step by step", "Names the missing transaction around stock + audit", "Gives a concrete fix for each blocking problem", "Raises the empty reason as a question, not a demand"]
      },

      {
        id: "review-u4-quiz",
        title: "Unit 4 quiz: Design and complexity",
        kind: "quiz", xp: 10,
        brief: "One source of truth, existing helpers, one job per function, names, races and missing transactions. 80% to pass.",
        questions: [
          { q: "The cart view hard-codes a free-shipping threshold of 40; the server charges from 50. What kind of problem is this, first?",
            choices: ["A naming problem: 40 should be in a constant called FORTY", "A rule written in two places that already disagree", "A styling problem in the badge's HTML", "Nothing, since the server is the one that charges"],
            answer: 1, explain: "Two copies of a rule drift. Here they already have, so a customer is promised one thing and charged another." },
          { q: "A change adds a helper that duplicates one already in the codebase, and both work today. Blocking?",
            choices: ["Yes: duplication must always be removed before merging", "Yes, unless the author writes a test for both helpers", "No: point to the existing helper as a non-blocking note", "No, and it isn't worth mentioning at all"],
            answer: 2, explain: "Nothing is wrong today, so it shouldn't block. Saying it stops the two from drifting later." },
          { q: "What makes early returns (`if (!c) return …`) worth suggesting in a review?",
            choices: ["They make the function run noticeably faster in every browser", "They flatten nesting so missing cases are easier to see", "They're required by most style guides", "They remove the need for tests"],
            answer: 1, explain: "Flat code shows every path at a glance. Deep nesting is where a branch without a `return` hides." },
          { q: "Two requests read stock 5, each subtracts 3, and each writes the result. What can happen?",
            choices: ["Nothing: the database runs them one at a time anyway", "Both pass the check and the shelf ends up wrong", "The second request always fails with an error", "Stock goes to -1 and then corrects itself"],
            answer: 1, explain: "Read-modify-write without a lock or a single atomic statement loses updates. Do the change in one statement, or lock the row." },
          { q: "Stock is updated, then an audit row is inserted in a separate statement. What's missing?",
            choices: ["An index on the audit table", "A transaction around both writes", "A second audit row as a backup", "A log line between the two writes"],
            answer: 1, explain: "If the second write fails, the first stays. A transaction makes them succeed or fail together." },
          { q: "`function check(query)` saves the query to storage. What's the review comment?",
            choices: ["Blocking: the name is wrong, so it can't merge", "No comment: names are a matter of taste", "Non-blocking: suggest a name that says it saves", "Ask for a comment above it instead of a rename"],
            answer: 2, explain: "A name that says something the code doesn't misleads the next caller. Worth a comment, but nothing breaks today." }
        ]
      }
    ]
  });
})();
