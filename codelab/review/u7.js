/* Code Review — Unit 7: Reviewing AI-generated changes */
(function () {
  function src(lines) { return lines.join("\n") + "\n"; }

  window.CODELAB.addUnit("review", {
    id: "review-u7",
    title: "Reviewing AI-drafted changes",
    icon: "🤖",
    blurb: "Generated code reads fluently, which is exactly what makes it hard to review. A helper that doesn't exist, a confident comment the code disagrees with, a \"typo fix\" that changes something else, and error handling that turns an outage into an empty page.",
    cheat: [
      { h: "Why it needs a different read", lang: "text", code:
"fluent ≠ correct      it reads well whether it's right or not\n" +
"plausible names       calls that look real and aren't\n" +
"confident comments    that describe what it meant, not what it does\n" +
"extra changes         things nobody asked for, in the same diff",
        note: "Academy's System Design track covers this in Unit 22, \"Verification at AI Speed\". Here you practise it on diffs." },
      { h: "Check the calls exist", lang: "text", code:
"every function it calls: is it defined here, or imported?\n" +
"every option it passes: does that API take it?",
        note: "A name that sounds right (validateEmail) is easy to approve next to the real one (isEmail)." },
      { h: "Read the code, not the comment", lang: "js", code:
"// Try up to 3 times\n" +
"for (let i = 0; i <= 3; i++)   // 4 tries",
        note: "When a comment and its code disagree, one of them is a bug. Usually it's the code." },
      { h: "Scope", lang: "text", code:
"the description says X\n" +
"the diff also does Y    → ask why, or ask to split it out",
        note: "Generated changes often carry along edits nobody asked for. Each one needs its own reason, and its own review." }
    ],
    lessons: [

      {
        id: "review-u7-1",
        title: "A helper that isn't there",
        kind: "review", xp: 20, mins: 6,
        brief: "**Validate email on sign-up** (drafted with an AI assistant)\n\nRejects sign-ups with an invalid email address before creating the account.",
        base: {
          "signup.js": src([
            "async function signup(req, res) {",
            "  const user = await users.create(req.body.email, req.body.password);",
            "  res.status(201).json({ id: user.id });",
            "}"
          ]),
          "validate.js": src([
            "// Shared input checks.",
            "function isEmail(s) {",
            "  return /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(s);",
            "}"
          ])
        },
        head: {
          "signup.js": src([
            "async function signup(req, res) {",
            "  const email = String(req.body.email || \"\").trim();",
            "  if (!validateEmail(email)) {",
            "    return res.status(400).json({ error: \"Please enter a valid email address.\" });",
            "  }",
            "  const user = await users.create(email, req.body.password);",
            "  res.status(201).json({ id: user.id });",
            "}"
          ]),
          "validate.js": src([
            "// Shared input checks.",
            "function isEmail(s) {",
            "  return /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(s);",
            "}"
          ])
        },
        findings: [
          { id: "missing", file: "signup.js", lines: [3, 3], category: "bug", severity: "blocking",
            why: "There's no `validateEmail` anywhere. The shared check is called `isEmail`, in `validate.js`. As written, every sign-up throws a `ReferenceError` and nobody can create an account. The name sounds so right that it's easy to read past." }
        ],
        decoys: [
          { file: "signup.js", lines: [6, 6], why: "Passing the trimmed `email` instead of the raw `req.body.email` is an improvement: the stored address won't carry stray spaces." },
          { file: "validate.js", lines: [3, 3], why: "A deliberately loose email check (something @ something . something). That's normal: the only real test of an address is sending to it." }
        ],
        verdict: "request",
        rubric: ["Says the function doesn't exist", "Names the real one (isEmail)", "Says what happens on every sign-up"]
      },

      {
        id: "review-u7-2",
        title: "The comment says three",
        kind: "review", xp: 20, mins: 7,
        brief: "**Retry flaky payment calls** (drafted with an AI assistant)\n\nThe payment provider sometimes times out. Retries a charge up to 3 times, half a second apart. Charges are idempotent: the provider ignores a repeat with the same key.",
        base: {
          "payments.js": src([
            "async function charge(order) {",
            "  return provider.charge({ amount: order.total, key: order.id });",
            "}"
          ]),
          "checkout.js": src([
            "async function placeOrder(order) {",
            "  for (let i = 0; i < 3; i++) {",
            "    try { return await charge(order); }",
            "    catch (e) { if (i === 2) throw e; }",
            "  }",
            "}"
          ])
        },
        head: {
          "payments.js": src([
            "// Try the charge up to 3 times, 500 ms apart, then give up.",
            "async function charge(order) {",
            "  let lastError;",
            "  for (let attempt = 0; attempt <= 3; attempt++) {",
            "    try {",
            "      return await provider.charge({ amount: order.total, key: order.id });",
            "    } catch (e) {",
            "      lastError = e;",
            "      await sleep(500);",
            "    }",
            "  }",
            "  throw lastError;",
            "}"
          ]),
          "checkout.js": src([
            "async function placeOrder(order) {",
            "  for (let i = 0; i < 3; i++) {",
            "    try { return await charge(order); }",
            "    catch (e) { if (i === 2) throw e; }",
            "  }",
            "}"
          ])
        },
        findings: [
          { id: "count", file: "payments.js", lines: [4, 4], category: "bug", alsoOk: ["readability"], severity: "blocking",
            why: "`attempt <= 3` from 0 runs **four** times, not three. The comment and the description both say 3. Use `attempt < 3`. (It also sleeps once more after the last failure, for nothing.)" },
          { id: "stack", file: "checkout.js", lines: [2, 3], category: "design", alsoOk: ["bug"], severity: "blocking",
            why: "Checkout already retries `charge()` three times. With retries inside `charge()` too, one provider outage now makes up to **12** calls and keeps the customer waiting through every half-second sleep before they see an error. Retry in one place: here, or in `charge()`, not both." }
        ],
        decoys: [
          { file: "payments.js", lines: [6, 6], why: "Retrying a charge looks dangerous, but the same `key` on every try is what makes it safe: the provider ignores a repeat." },
          { file: "payments.js", lines: [12, 12], why: "Re-throwing the last error after the final try is right: the caller needs to know the charge failed." }
        ],
        verdict: "request",
        rubric: ["Counts the attempts the loop really makes", "Points out the comment and the code disagree"]
      },

      {
        id: "review-u7-3",
        title: "\"Fix typo in welcome email\"",
        kind: "review", xp: 20, mins: 5,
        brief: "**Fix typo in welcome email** (drafted with an AI assistant)\n\n\"Recieve\" → \"receive\".",
        base: {
          "welcome.js": src([
            "function welcomeText(name) {",
            "  return \"Hi \" + name + \", you'll recieve a confirmation shortly.\";",
            "}"
          ]),
          "config.js": src([
            "module.exports = {",
            "  sessionTtlMinutes: 30,",
            "  maxUploadMb: 20",
            "};"
          ]),
          "welcome.test.js": src([
            "it(\"welcome text\", () => {",
            "  expect(welcomeText(\"Ana\")).toBe(\"Hi Ana, you'll recieve a confirmation shortly.\");",
            "});"
          ])
        },
        head: {
          "welcome.js": src([
            "function welcomeText(name) {",
            "  return \"Hi \" + name + \", you'll receive a confirmation shortly.\";",
            "}"
          ]),
          "config.js": src([
            "module.exports = {",
            "  sessionTtlMinutes: 60 * 24 * 30,",
            "  maxUploadMb: 20",
            "};"
          ]),
          "welcome.test.js": src([
            "it(\"welcome text\", () => {",
            "  expect(welcomeText(\"Ana\")).toBe(\"Hi Ana, you'll recieve a confirmation shortly.\");",
            "});"
          ])
        },
        findings: [
          { id: "scope", file: "config.js", lines: [2, 2], category: "design", alsoOk: ["security"], severity: "blocking",
            why: "A \"typo fix\" that also stretches sessions from 30 minutes to **30 days**. Nothing in the description mentions it, and it's a security setting: a stolen or shared session now lasts a month. Ask what it's for, and if it's wanted, ask for it in its own change with its own reason." },
          { id: "test", file: "welcome.test.js", lines: [2, 2], category: "tests", alsoOk: ["bug"], severity: "blocking",
            why: "The test still expects \"recieve\", so fixing the typo turns the build red. It needed updating in the same change. A change that wasn't run against its own tests isn't ready for review." }
        ],
        decoys: [
          { file: "welcome.js", lines: [2, 2], why: "This is the typo fix the description promised. It's correct." }
        ],
        verdict: "request",
        rubric: ["Points out the change isn't in the description", "Says why a longer session matters", "Asks for it to be split into its own change"]
      },

      {
        id: "review-u7-4",
        title: "Nothing to show",
        kind: "review", xp: 20, mins: 7,
        brief: "**Make the dashboard more robust** (drafted with an AI assistant)\n\nThe dashboard sometimes crashed when a query failed. Adds error handling to the data layer so it never crashes.",
        base: {
          "data.js": src([
            "async function recentOrders(userId) {",
            "  return db.many(\"SELECT * FROM orders WHERE user_id = $1 ORDER BY created DESC LIMIT 20\", [userId]);",
            "}",
            "",
            "async function openTickets(userId) {",
            "  return db.many(\"SELECT * FROM tickets WHERE user_id = $1 AND open\", [userId]);",
            "}"
          ])
        },
        head: {
          "data.js": src([
            "async function recentOrders(userId) {",
            "  try {",
            "    return await db.many(\"SELECT * FROM orders WHERE user_id = $1 ORDER BY created DESC LIMIT 20\", [userId]);",
            "  } catch (e) {",
            "    return [];",
            "  }",
            "}",
            "",
            "async function openTickets(userId) {",
            "  try {",
            "    return await db.many(\"SELECT * FROM tickets WHERE user_id = $1 AND open\", [userId]);",
            "  } catch (e) {",
            "    return [];",
            "  }",
            "}"
          ])
        },
        findings: [
          { id: "hide", file: "data.js", lines: [4, 5], category: "bug", alsoOk: ["design"], severity: "blocking",
            why: "During a database outage, every customer now sees **\"You have no orders\"**, which is false, and nothing records that anything failed. Crashing was the honest answer; this hides it. Let the error reach the page and show \"We couldn't load your orders\", and log it." },
          { id: "hide2", file: "data.js", lines: [12, 13], category: "bug", alsoOk: ["design"], severity: "blocking", optional: true,
            why: "The same pattern in `openTickets`: an outage reads as \"no open tickets\". One comment covering both functions is enough, so this one isn't required separately." }
        ],
        decoys: [
          { file: "data.js", lines: [2, 2], why: "Wrapping the query in `try` with an `await` inside is the right shape: the `await` is what lets a `catch` see the failure. The problem is what the `catch` does with it." }
        ],
        verdict: "request",
        rubric: ["Says what users see during an outage", "Points out the failure is no longer logged", "Suggests an error state instead of an empty list"]
      },

      {
        id: "review-u7-quiz",
        title: "Unit 7 quiz: AI-drafted changes",
        kind: "quiz", xp: 10,
        brief: "Fluent code, invented helpers, comments that disagree, extra changes, and errors turned into empty results. 80% to pass.",
        questions: [
          { q: "Why can AI-drafted code be harder to review than code a person wrote quickly?",
            choices: ["It is always longer than code written by people", "It reads fluently whether it's right or not", "It never includes any comments", "It uses different variable naming rules"],
            answer: 1, explain: "Awkward code makes you slow down. Fluent code doesn't, even when it calls things that don't exist." },
          { q: "A generated change calls `validateEmail()`. The codebase has `isEmail()`. What happens at runtime?",
            choices: ["It works: JavaScript finds the closest matching name", "A ReferenceError, every time that line runs", "It returns undefined, which counts as valid", "The linter fixes it automatically before it runs"],
            answer: 1, explain: "An undefined name throws when the line runs. Check every call a generated change makes." },
          { q: "`// try up to 3 times` above `for (let i = 0; i <= 3; i++)`. How many tries?",
            choices: ["3", "2", "4", "It depends on the errors"],
            answer: 2, explain: "0, 1, 2, 3: four. When a comment and its code disagree, one of them is a bug." },
          { q: "A pull request titled \"fix typo\" also changes a session timeout. Best response?",
            choices: ["Approve it: the typo fix itself is correct", "Ask why, and for the timeout change in its own pull request", "Fix the timeout yourself after merging", "Reject the typo fix too"],
            answer: 1, explain: "Changes nobody asked for need their own reason and their own review, especially security settings." },
          { q: "A query failure now returns `[]` instead of throwing. What do users see during an outage?",
            choices: ["An error message saying the data couldn't load", "A page that says they have nothing", "Their data from a cache", "A blank page with a loading spinner"],
            answer: 1, explain: "An empty list looks like a real answer. Show an error state and log the failure." }
        ]
      }
    ]
  });
})();
