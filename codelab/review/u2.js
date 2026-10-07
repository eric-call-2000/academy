/* Code Review — Unit 2: Understand the change before you judge it */
(function () {
  function src(lines) { return lines.join("\n") + "\n"; }

  window.CODELAB.addUnit("review", {
    id: "review-u2",
    title: "Understand the change first",
    icon: "🧭",
    blurb: "Read the description, then the diff, and check they agree. Find the behavior change hiding in a \"pure refactor\", the file that should have changed and didn't, and the change that's fine to approve.",
    cheat: [
      { h: "Before you comment on anything", lang: "text", code:
"1 read the description: what is this FOR?\n" +
"2 say it back in one sentence\n" +
"3 read the diff: does it do that, and only that?\n" +
"4 what else uses the code it touches?",
        note: "Most missed bugs are a mismatch between what the description promises and what the diff does. Check the promise against the code before you look at anything else." },
      { h: "\"No behavior change\"", lang: "text", code:
"rename, extract, reorder, restyle   → same output\n" +
"a changed condition, boundary, default,\n" +
"or order of operations              → NOT a refactor",
        note: "A refactor claims the outputs didn't move. Check every condition and boundary it rewrote: that's where a refactor quietly changes behavior." },
      { h: "Read past the diff", lang: "text", code:
"renamed a field?     who else reads it?\n" +
"changed a return?    who else calls it?\n" +
"new required arg?    who calls it the old way?",
        note: "The diff only shows lines that changed. The bug is often in a line that didn't change and now should have." },
      { h: "When to approve", lang: "text", code:
"no blocking problem   → Approve (or Comment)\n" +
"small notes only      → leave them non-blocking\n" +
"anything must change  → Request changes",
        note: "Approving a good change quickly is part of the job. A review that always requests changes slows everyone down." }
    ],
    lessons: [

      {
        id: "review-u2-1",
        title: "Does it do what it says?",
        kind: "review", xp: 20, mins: 5,
        brief: "**Free shipping over $50**\n\nOrders of **$50 or more** now ship free. Below that, shipping stays at $4.99. The checkout page already shows whatever `shippingFor()` returns.",
        base: { "shipping.js": src([
          "// Shipping cost for an order, in dollars.",
          "function shippingFor(subtotal) {",
          "  return 4.99;",
          "}",
          "",
          "function orderTotal(subtotal) {",
          "  const total = subtotal + shippingFor(subtotal);",
          "  return Math.round(total * 100) / 100;",
          "}"
        ]) },
        head: { "shipping.js": src([
          "// Shipping cost for an order, in dollars.",
          "const FREE_SHIPPING_FROM = 50;",
          "",
          "function shippingFor(subtotal) {",
          "  if (subtotal > FREE_SHIPPING_FROM) return 0;",
          "  return 4.99;",
          "}",
          "",
          "function orderTotal(subtotal) {",
          "  const total = subtotal + shippingFor(subtotal);",
          "  return Math.round(total * 100) / 100;",
          "}"
        ]) },
        findings: [
          { id: "boundary", file: "shipping.js", lines: [5, 5], category: "bug", severity: "blocking",
            why: "The description says **$50 or more**, but `>` leaves an order of exactly $50 paying shipping. It needs `>=`. Boundaries are where a description and its code most often disagree." }
        ],
        decoys: [
          { file: "shipping.js", lines: [11, 11], why: "`Math.round(total * 100) / 100` looks odd but is the usual way to round dollars to whole cents, and the change didn't touch it." }
        ],
        verdict: "request",
        rubric: ["Quotes what the description promises", "Names the input that goes wrong ($50 exactly)", "Says what to change (`>=`)"]
      },

      {
        id: "review-u2-2",
        title: "The file that didn't change",
        kind: "review", xp: 20, mins: 6,
        brief: "**Rename `name` to `displayName` on users**\n\nWe're adding legal names soon, so the field people see becomes `displayName`. This updates the user model and the profile page. No other changes.",
        base: {
          "user.js": src([
            "function makeUser(row) {",
            "  return {",
            "    id: row.id,",
            "    name: row.name,",
            "    email: row.email",
            "  };",
            "}"
          ]),
          "profile.js": src([
            "function profileHeader(user) {",
            "  return \"<h1>\" + escapeHtml(user.name) + \"</h1>\";",
            "}"
          ]),
          "greeting.js": src([
            "// Shown at the top of every page once signed in.",
            "function greeting(user) {",
            "  const first = user.name.split(\" \")[0];",
            "  return \"Welcome back, \" + first + \"!\";",
            "}"
          ])
        },
        head: {
          "user.js": src([
            "function makeUser(row) {",
            "  return {",
            "    id: row.id,",
            "    displayName: row.name,",
            "    email: row.email",
            "  };",
            "}"
          ]),
          "profile.js": src([
            "function profileHeader(user) {",
            "  return \"<h1>\" + escapeHtml(user.displayName) + \"</h1>\";",
            "}"
          ]),
          "greeting.js": src([
            "// Shown at the top of every page once signed in.",
            "function greeting(user) {",
            "  const first = user.name.split(\" \")[0];",
            "  return \"Welcome back, \" + first + \"!\";",
            "}"
          ])
        },
        findings: [
          { id: "stale", file: "greeting.js", lines: [3, 3], category: "bug", severity: "blocking",
            why: "`greeting()` still reads `user.name`, which no longer exists. `undefined.split` throws, on every page, for every signed-in user. When a change renames something, look for everything else that used the old name." }
        ],
        decoys: [
          { file: "user.js", lines: [4, 4], why: "Reading `row.name` from the database row is right: the column itself wasn't renamed, only the field on the user object." },
          { file: "profile.js", lines: [2, 2], why: "This is the update the description promised, and it still escapes the name before putting it in HTML." }
        ],
        verdict: "request",
        rubric: ["Names the file and line still using the old field", "Says what happens to users (the page throws)", "Suggests searching for other uses of `.name`"]
      },

      {
        id: "review-u2-3",
        title: "\"Pure refactor, no behavior change\"",
        kind: "review", xp: 20, mins: 6,
        brief: "**Tidy up `activeAdults`**\n\nRewrites the loop with `filter` and `map`. Pure refactor: no behavior change.",
        base: { "members.js": src([
          "// Names of members who are adults (18 or over) and still active.",
          "function activeAdults(members) {",
          "  var names = [];",
          "  for (var i = 0; i < members.length; i++) {",
          "    var m = members[i];",
          "    if (m.age >= 18 && m.active) {",
          "      names.push(m.name);",
          "    }",
          "  }",
          "  return names;",
          "}"
        ]) },
        head: { "members.js": src([
          "// Names of members who are adults (18 or over) and still active.",
          "function activeAdults(members) {",
          "  return members",
          "    .filter(m => m.age > 18 && m.active)",
          "    .map(m => m.name);",
          "}"
        ]) },
        findings: [
          { id: "age", file: "members.js", lines: [4, 4], category: "bug", severity: "blocking",
            why: "`>= 18` became `> 18`, so every 18-year-old drops out of the list. A refactor that claims no behavior change has to keep every condition exactly; this one moved a boundary." }
        ],
        decoys: [
          { file: "members.js", side: "base", lines: [3, 3], why: "Dropping the `names` array is the point of the refactor: `filter` and `map` build the new array, in the same order the old loop pushed to it." }
        ],
        verdict: "request",
        rubric: ["Points out the claim of no behavior change", "Names who is affected (members aged exactly 18)", "Suggests a test for the boundary"]
      },

      {
        id: "review-u2-4",
        title: "A change worth approving",
        kind: "review", xp: 20, mins: 6,
        brief: "**Share one date formatter**\n\nReceipts and emails each formatted dates their own way. This adds `formatDate()` and uses it in both, so they can't drift apart. Output is unchanged for every date we show.",
        base: {
          "receipt.js": src([
            "function receiptDate(d) {",
            "  return d.getFullYear() + \"-\" + String(d.getMonth() + 1).padStart(2, \"0\") + \"-\" + String(d.getDate()).padStart(2, \"0\");",
            "}"
          ]),
          "email.js": src([
            "function emailDate(d) {",
            "  return d.getFullYear() + \"-\" + String(d.getMonth() + 1).padStart(2, \"0\") + \"-\" + String(d.getDate()).padStart(2, \"0\");",
            "}"
          ])
        },
        head: {
          "dates.js": src([
            "// One date format for everything we show customers: 2026-03-07.",
            "function formatDate(d) {",
            "  const month = String(d.getMonth() + 1).padStart(2, \"0\");",
            "  const day = String(d.getDate()).padStart(2, \"0\");",
            "  console.log(\"formatDate\", d);",
            "  return d.getFullYear() + \"-\" + month + \"-\" + day;",
            "}"
          ]),
          "receipt.js": src([
            "function receiptDate(d) {",
            "  return formatDate(d);",
            "}"
          ]),
          "email.js": src([
            "function emailDate(d) {",
            "  return formatDate(d);",
            "}"
          ])
        },
        findings: [
          { id: "log", file: "dates.js", lines: [5, 5], category: "nit", alsoOk: ["readability"], severity: "nonblocking",
            why: "A leftover debugging `console.log`. Every date shown now logs a line. Worth asking the author to remove, but it breaks nothing, so it shouldn't block the merge." }
        ],
        decoys: [
          { file: "dates.js", lines: [3, 3], why: "`getMonth()` counts from 0, so the `+ 1` is required. The old code did the same thing." }
        ],
        mustFind: ["log"],
        verdict: "approve",
        rubric: ["Approves, or comments without blocking", "Asks for the log line to go, as a non-blocking note", "Doesn't ask for changes the description didn't need"]
      },

      {
        id: "review-u2-quiz",
        title: "Unit 2 quiz: Understand the change",
        kind: "quiz", xp: 10,
        brief: "Descriptions vs. diffs, refactors that change behavior, renamed fields, and when to approve. 80% to pass.",
        questions: [
          { q: "What should you read before the diff?",
            choices: ["The test output from the last CI run", "The previous reviewer's comments on other changes", "The author's description of the change", "The size of each changed file"],
            answer: 2, explain: "You can't judge whether code is right until you know what it's meant to do. The description is that promise." },
          { q: "A change claims \"no behavior change\". Where is a hidden behavior change most likely to be?",
            choices: ["In local variables that were renamed for clarity", "In a rewritten condition or boundary", "In blank lines that were added or removed", "In the order of the import statements"],
            answer: 1, explain: "Conditions and boundaries are where refactors quietly change outputs, like `>=` becoming `>`." },
          { q: "A change renames `user.name` to `user.displayName` in two files. What should you check?",
            choices: ["Every other place that still reads `user.name`", "Nothing else: the diff always shows every file that matters", "That the new name is shorter than the old one", "That the commit message mentions the rename"],
            answer: 0, explain: "The diff only shows what changed. Any code still using the old name is now broken, and it won't be in the diff." },
          { q: "The description says \"$50 or more\". The code says `subtotal > 50`. What's wrong?",
            choices: ["Nothing: `>` and \"or more\" mean the same thing here", "It should be `< 50`, the other way around", "The 50 should be written as a string", "It leaves out exactly $50; it should be `>= 50`"],
            answer: 3, explain: "\"Or more\" includes 50. `>` excludes it. Boundaries are the most common place descriptions and code disagree." },
          { q: "A change is correct, tested, and does what it says, but leaves one debugging log line behind. Your verdict?",
            choices: ["Request changes, and hold the merge until the log line is gone", "Approve, with a non-blocking note about the log", "Reject it and ask for a new pull request", "Approve and say nothing at all"],
            answer: 1, explain: "Nothing breaks if it ships, so it shouldn't block. Saying it is still useful: the author will usually remove it." },
          { q: "Why is approving good changes promptly part of reviewing well?",
            choices: ["It isn't: every change should get at least one request for changes first", "Holding good work slows the team without improving the code", "Approval counts are used to rank reviewers", "Authors stop reading comments after the first day"],
            answer: 1, explain: "A review's job is to stop real problems. When there are none, the fastest helpful thing is to approve." }
        ]
      }
    ]
  });
})();
