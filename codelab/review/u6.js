/* Code Review — Unit 6: Security and data */
(function () {
  function src(lines) { return lines.join("\n") + "\n"; }

  window.CODELAB.addUnit("review", {
    id: "review-u6",
    title: "Security and data",
    icon: "🛡️",
    blurb: "Web Security Basics taught you to exploit these. Here they're in someone else's diff, looking ordinary: user text into innerHTML, a query built from a string, one route out of four with no ownership check, a key in a config file, and personal data in the logs.",
    cheat: [
      { h: "Where untrusted input lands", lang: "text", code:
"innerHTML / html strings   → escape, or use textContent\n" +
"SQL strings                → placeholders ($1) and separate values\n" +
"file paths, shell commands → never from user input as-is\n" +
"redirect URLs              → only to your own pages",
        note: "Follow every value that came from a request. Wherever it's used as code, markup or a query, that's the line to read twice." },
      { h: "Who is allowed?", lang: "text", code:
"logged in?          authentication\n" +
"allowed to do THIS? authorization: is it theirs?",
        note: "A new route next to routes that check ownership is the classic gap: it copies the login check and forgets the owner check." },
      { h: "Secrets and personal data", lang: "text", code:
"keys in source        → env vars / secret store, and rotate the leaked one\n" +
"passwords, tokens     → never logged\n" +
"emails, addresses     → log an id instead",
        note: "A secret committed once is in the history forever. Removing it in a later commit doesn't un-leak it; rotating it does." },
      { h: "Security is usually blocking", lang: "text", code:
"can someone abuse it today?  → blocking\n" +
"harder to abuse, still worth fixing → say why, decide together",
        note: "When in doubt on a security finding, take the safer fix." }
    ],
    lessons: [

      {
        id: "review-u6-1",
        title: "Comments with formatting",
        kind: "review", xp: 20, mins: 6,
        brief: "**Show line breaks in comments**\n\nPeople kept asking why their paragraphs ran together. Comments now keep their line breaks.",
        base: {
          "comments.js": src([
            "function renderComment(comment, el) {",
            "  el.querySelector(\".author\").textContent = comment.author;",
            "  el.querySelector(\".time\").textContent = timeAgo(comment.createdAt);",
            "  el.querySelector(\".body\").textContent = comment.body;",
            "}"
          ])
        },
        head: {
          "comments.js": src([
            "function renderComment(comment, el) {",
            "  el.querySelector(\".author\").textContent = comment.author;",
            "  el.querySelector(\".time\").textContent = timeAgo(comment.createdAt);",
            "  el.querySelector(\".body\").innerHTML = comment.body.replace(/\\n/g, \"<br>\");",
            "}"
          ])
        },
        findings: [
          { id: "xss", file: "comments.js", lines: [4, 4], category: "security", severity: "blocking",
            why: "`comment.body` is whatever a user typed, and it now goes into `innerHTML`. A comment containing `<img src=x onerror=…>` runs script for everyone who views it. Keep `textContent` and use CSS `white-space: pre-line`, or escape the text before adding the `<br>`s." }
        ],
        decoys: [
          { file: "comments.js", lines: [2, 2], why: "The author's name is user input too, but it goes in with `textContent`, which never runs markup. That line is safe; only the body changed." }
        ],
        verdict: "request",
        rubric: ["Says the body is user input", "Gives an input that would run script", "Suggests a safe way to keep line breaks"]
      },

      {
        id: "review-u6-2",
        title: "Search by name",
        kind: "review", xp: 20, mins: 7,
        brief: "**Search customers by name**\n\nSupport staff can now search customers by name from the admin page.",
        base: {
          "customers.js": src([
            "async function byId(id) {",
            "  return db.one(\"SELECT * FROM customers WHERE id = $1\", [id]);",
            "}"
          ]),
          "admin.js": src([
            "router.get(\"/admin/customers\", requireLogin, async (req, res) => {",
            "  res.json(await customers.byId(req.query.id));",
            "});"
          ])
        },
        head: {
          "customers.js": src([
            "async function byId(id) {",
            "  return db.one(\"SELECT * FROM customers WHERE id = $1\", [id]);",
            "}",
            "",
            "async function byName(name) {",
            "  return db.many(\"SELECT * FROM customers WHERE name ILIKE '%\" + name + \"%' LIMIT 50\");",
            "}"
          ]),
          "admin.js": src([
            "router.get(\"/admin/customers\", requireLogin, async (req, res) => {",
            "  if (req.query.name) return res.json(await customers.byName(req.query.name));",
            "  res.json(await customers.byId(req.query.id));",
            "});"
          ])
        },
        findings: [
          { id: "sqli", file: "customers.js", lines: [6, 6], category: "security", severity: "blocking",
            why: "The name is glued into the SQL string. Searching for `' OR '1'='1` returns every customer, and worse inputs can run other statements. Use a placeholder like the function above: `\"... WHERE name ILIKE $1 LIMIT 50\", [\"%\" + name + \"%\"]`." },
          { id: "staff", file: "admin.js", lines: [1, 1], category: "security", severity: "blocking",
            why: "The description says support staff can search, but this \"admin\" route only checks `requireLogin`: any signed-in customer can now search every customer by name. Looking one up by id needed a guessed id; a name search hands out the list. It needs a staff check. The line didn't change; what it now guards did." }
        ],
        decoys: [
          { file: "customers.js", lines: [2, 2], why: "`byId` already uses a placeholder (`$1`) with the value passed separately. That's the safe pattern; the new function should copy it." }
        ],
        verdict: "request",
        rubric: ["Names SQL injection", "Gives an input that changes the query", "Points to the placeholder pattern already in the file"]
      },

      {
        id: "review-u6-3",
        title: "One route out of four",
        kind: "review", xp: 20, mins: 7,
        brief: "**Delete a saved address**\n\nAdds `DELETE /addresses/:id` so people can remove old addresses from their account.",
        base: {
          "addresses.js": src([
            "router.get(\"/addresses\", requireLogin, async (req, res) => {",
            "  res.json(await addresses.forUser(req.user.id));",
            "});",
            "",
            "router.put(\"/addresses/:id\", requireLogin, async (req, res) => {",
            "  const a = await addresses.find(req.params.id);",
            "  if (!a || a.userId !== req.user.id) return res.status(404).end();",
            "  res.json(await addresses.update(a.id, req.body));",
            "});"
          ])
        },
        head: {
          "addresses.js": src([
            "router.get(\"/addresses\", requireLogin, async (req, res) => {",
            "  res.json(await addresses.forUser(req.user.id));",
            "});",
            "",
            "router.put(\"/addresses/:id\", requireLogin, async (req, res) => {",
            "  const a = await addresses.find(req.params.id);",
            "  if (!a || a.userId !== req.user.id) return res.status(404).end();",
            "  res.json(await addresses.update(a.id, req.body));",
            "});",
            "",
            "router.delete(\"/addresses/:id\", requireLogin, async (req, res) => {",
            "  const a = await addresses.find(req.params.id);",
            "  if (!a) return res.status(404).end();",
            "  await addresses.remove(a.id);",
            "  res.status(204).end();",
            "});"
          ])
        },
        findings: [
          { id: "owner", file: "addresses.js", lines: [11, 13], category: "security", severity: "blocking",
            why: "The new route checks you're **logged in** but not that the address is **yours**. Any signed-in user can delete anyone's address by guessing ids. The PUT route right above has the check: `a.userId !== req.user.id`. Copy it." }
        ],
        decoys: [
          { file: "addresses.js", lines: [7, 7], why: "This is the ownership check done right, and answering 404 (not 403) avoids telling a stranger the address exists." },
          { file: "addresses.js", lines: [15, 15], why: "204 No Content is the usual answer to a successful delete: there's nothing to send back." }
        ],
        verdict: "request",
        rubric: ["Separates logged in from allowed", "Names the missing ownership check", "Points to the PUT route's check as the fix"]
      },

      {
        id: "review-u6-4",
        title: "Config and logs",
        kind: "review", xp: 20, mins: 8,
        brief: "**Send order emails through Postbox**\n\nSwitches order emails to the Postbox service, because the old SMTP account closes at the end of the month. Adds its config and a log line so we can see which emails went out.",
        base: {
          "config.js": src([
            "module.exports = {",
            "  port: process.env.PORT || 3000,",
            "  dbUrl: process.env.DATABASE_URL",
            "};"
          ]),
          "notify.js": src([
            "async function orderShipped(order) {",
            "  await smtp.send(order.email, \"Your order shipped\");",
            "}",
            "",
            "async function orderCancelled(order) {",
            "  await smtp.send(order.email, \"Your order was cancelled\");",
            "}"
          ])
        },
        head: {
          "config.js": src([
            "module.exports = {",
            "  port: process.env.PORT || 3000,",
            "  dbUrl: process.env.DATABASE_URL,",
            "  postboxKey: \"pbx_live_7f3a91c2e8d04b6a\"",
            "};"
          ]),
          "notify.js": src([
            "async function orderShipped(order) {",
            "  await postbox.send({ to: order.email, template: \"shipped\", data: { id: order.id } });",
            "  console.log(\"sent shipped email\", order.email, order.address);",
            "}",
            "",
            "async function orderCancelled(order) {",
            "  await smtp.send(order.email, \"Your order was cancelled\");",
            "}"
          ])
        },
        findings: [
          { id: "key", file: "config.js", lines: [4, 4], category: "security", severity: "blocking",
            why: "A live API key in source code. Anyone who can read the repository, now or later, can send email as us. Read it from an environment variable like the lines above, and **rotate this key**: it's in the history even if the next commit deletes it." },
          { id: "pii", file: "notify.js", lines: [3, 3], category: "security", alsoOk: ["design"], severity: "nonblocking",
            why: "Customers' emails and home addresses go into the logs, where far more people and tools can read them than the database. Log the order id instead: `order.id` is enough to find everything else." },
          { id: "half", file: "notify.js", lines: [7, 7], category: "bug", alsoOk: ["design"], severity: "blocking",
            why: "Only one of the order emails moved. `orderCancelled` still sends through SMTP, so when the old account closes at the end of the month, cancellation emails silently stop. The description says order emails switch; this one was missed because it didn't need to change to compile." }
        ],
        decoys: [
          { file: "config.js", lines: [2, 2], why: "Reading the port from the environment with a local default is fine; a port isn't a secret." }
        ],
        verdict: "request",
        rubric: ["Says to move the key to an environment variable", "Says to rotate the leaked key", "Suggests logging an id instead of personal data"]
      },

      {
        id: "review-u6-quiz",
        title: "Unit 6 quiz: Security and data",
        kind: "quiz", xp: 10,
        brief: "Untrusted input, ownership checks, secrets and personal data in logs. 80% to pass.",
        questions: [
          { q: "User-written comment text is now set with `innerHTML` so line breaks show. What's the safest fix?",
            choices: ["Keep innerHTML, but only for comments from logged-in users", "Use textContent with CSS `white-space: pre-line`", "Strip out the word \"script\" first", "Limit comments to 500 characters"],
            answer: 1, explain: "textContent never runs markup. The CSS keeps the line breaks. Blocklists like stripping \"script\" are easy to get around." },
          { q: "`\"... WHERE name = '\" + name + \"'\"`. What's the review comment?",
            choices: ["Fine, as long as the name field has a maximum length", "Use a placeholder and pass the name as a separate value", "Wrap the name in double quotes instead", "Move the query into a stored procedure"],
            answer: 1, explain: "Placeholders keep data as data. Length limits and different quotes don't stop injection." },
          { q: "A new delete route has `requireLogin` but doesn't check the item belongs to the user. What's missing?",
            choices: ["Authentication", "Rate limiting", "Authorization", "Input validation"],
            answer: 2, explain: "Logging in proves who you are. Authorization checks you're allowed to touch this item." },
          { q: "A live API key was committed, and the author says they'll remove it in the next commit. Enough?",
            choices: ["Yes: once the line is deleted, the key is gone", "Yes, if the repository is private", "No: it stays in history, so it must be rotated", "No: the whole repository must be deleted and re-created"],
            answer: 2, explain: "Deleting the line doesn't remove it from history. Rotating the key makes the leaked one useless." },
          { q: "What's better to log when an order email is sent?",
            choices: ["The customer's email and address, for support", "The order id", "The full order object", "Nothing: email services keep their own logs"],
            answer: 1, explain: "An id finds everything else in the database, without copying personal data into logs." }
        ]
      }
    ]
  });
})();
