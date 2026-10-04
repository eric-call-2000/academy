/* Code Review — Unit 3: Correctness */
(function () {
  function src(lines) { return lines.join("\n") + "\n"; }

  window.CODELAB.addUnit("review", {
    id: "review-u3",
    title: "Correctness",
    icon: "🎯",
    blurb: "The bugs reviews do catch: boundaries and off-by-ones, empty and missing input, errors that get swallowed, a forgotten await, and shared state one caller quietly changes for everyone.",
    cheat: [
      { h: "Questions to ask every function", lang: "text", code:
"what if it's empty?        [], \"\", 0, null\n" +
"what about the edges?      first, last, exactly N\n" +
"what if the call fails?    who finds out?\n" +
"is this awaited?           or does it run on its own?\n" +
"what does it change?       its own copy, or everyone's?",
        note: "You can't run the code in a review, so run these questions instead. Most real defects in review comments are one of these small logic slips." },
      { h: "Counting pages", lang: "js", code:
"Math.floor(41 / 20)  // 2  → item 41 never shows\n" +
"Math.ceil(41 / 20)   // 3  → right",
        note: "Splitting things into groups needs ceil. Picking a 0-based index needs floor. Check which one a change needed." },
      { h: "A catch that hides failure", lang: "js", code:
"try { await save(); }\n" +
"catch (e) { console.log(e); }\n" +
"showSaved();   // runs either way",
        note: "A catch that only logs turns a failure into success for the user. The fix is to tell them, or let the error go up." },
      { h: "Missing await", lang: "js", code:
"db.delete(id);        // starts, nobody waits\n" +
"return { ok: true };  // says it worked anyway",
        note: "Without await, a failure becomes an unhandled rejection and the caller is told it worked." }
    ],
    lessons: [

      {
        id: "review-u3-1",
        title: "Pages and the last item",
        kind: "review", xp: 20, mins: 7,
        brief: "**Paginate the order history**\n\nAdds `pageCount()` and `pageOf()` so the order history shows 20 orders a page instead of all of them at once. Pages are numbered from 1, like the page links people click.",
        base: {
          "history.js": src([
            "let current = 0;",
            "",
            "function showHistory(orders) {",
            "  render(orders);",
            "}"
          ])
        },
        head: {
          "pages.js": src([
            "function pageCount(total, perPage) {",
            "  return Math.floor(total / perPage);",
            "}",
            "",
            "// page is 1-based: the first page is page 1.",
            "function pageOf(items, page, perPage) {",
            "  const start = (page - 1) * perPage;",
            "  return items.slice(start, start + perPage);",
            "}"
          ]),
          "history.js": src([
            "let current = 0;",
            "",
            "function showHistory(orders) {",
            "  render(pageOf(orders, current, 20));",
            "  renderPager(current, pageCount(orders.length, 20));",
            "}"
          ])
        },
        findings: [
          { id: "floor", file: "pages.js", lines: [2, 2], category: "bug", severity: "blocking",
            why: "41 orders at 20 a page is 3 pages, but `Math.floor(41 / 20)` is 2, so the last orders never get a page. Counting groups needs `Math.ceil`." },
          { id: "zero", file: "history.js", lines: [1, 1], category: "bug", severity: "blocking",
            why: "`current` starts at **0**, but `pageOf` counts pages from 1. Page 0 gives `start = -20`, and `slice(-20, 0)` is empty: the history opens blank. The line didn't change; what it now feeds into did." }
        ],
        decoys: [
          { file: "pages.js", lines: [8, 8], why: "`slice`'s end index is exclusive, so `start + perPage` takes exactly 20 items. Correct." }
        ],
        verdict: "request",
        rubric: ["Gives a concrete count that breaks (like 41 orders)", "Explains the 0-based vs 1-based mismatch", "Says what to change in each place"]
      },

      {
        id: "review-u3-2",
        title: "Saved, or was it?",
        kind: "review", xp: 20, mins: 7,
        brief: "**Save settings to the server**\n\nSettings used to live only in the browser. Now they're saved to the API, so they follow you to other devices. Shows the usual \"Settings saved\" toast afterwards.",
        base: { "settings.js": src([
          "function onSaveClick() {",
          "  const settings = readSettingsForm();",
          "  localStorage.setItem(\"settings\", JSON.stringify(settings));",
          "  showToast(\"Settings saved\");",
          "}"
        ]),
          "app-start.js": src([
            "// Runs once when the app loads.",
            "function loadSettings() {",
            "  const saved = localStorage.getItem(\"settings\");",
            "  applySettings(saved ? JSON.parse(saved) : DEFAULT_SETTINGS);",
            "}"
          ]) },
        head: { "settings.js": src([
          "async function onSaveClick() {",
          "  const settings = readSettingsForm();",
          "  try {",
          "    await api.put(\"/settings\", settings);",
          "  } catch (e) {",
          "    console.log(e);",
          "  }",
          "  showToast(\"Settings saved\");",
          "}"
        ]),
          "app-start.js": src([
            "// Runs once when the app loads.",
            "function loadSettings() {",
            "  const saved = localStorage.getItem(\"settings\");",
            "  applySettings(saved ? JSON.parse(saved) : DEFAULT_SETTINGS);",
            "}"
          ]) },
        findings: [
          { id: "swallow", file: "settings.js", lines: [5, 8], category: "bug", severity: "blocking",
            why: "If the request fails, the `catch` only logs it, and the code carries on to say **Settings saved**. The user believes their settings are on the server when they aren't. Show an error instead, and only show the toast on success." },
          { id: "load", file: "app-start.js", lines: [3, 4], category: "bug", severity: "blocking",
            why: "Saving moved to the server, but loading didn't: startup still reads `localStorage`, which nothing writes any more. A new device always starts from the defaults, and this one keeps showing whatever was saved before the change. The settings never actually follow anyone. Load them from the API too." }
        ],
        decoys: [
          { file: "settings.js", lines: [1, 1], why: "Making the handler `async` is needed for the `await` inside it. A click handler can be async." }
        ],
        verdict: "request",
        rubric: ["Says what the user sees when the save fails", "Suggests showing an error, or moving the toast into the success path"]
      },

      {
        id: "review-u3-3",
        title: "Deleted, probably",
        kind: "review", xp: 20, mins: 7,
        brief: "**Let users delete their account**\n\nNew endpoint handler: deletes the user, records it in the audit log, and returns `{ ok: true }` for the settings page to show a goodbye message.",
        base: { "account.js": src([
          "async function getAccount(req) {",
          "  const user = await db.users.find(req.userId);",
          "  return { ok: true, user: user };",
          "}"
        ]),
          "auth.js": src([
            "// Runs before every signed-in request.",
            "async function loadUser(req) {",
            "  const user = await db.users.find(req.session.userId);",
            "  req.userId = user.id;",
            "  req.user = user;",
            "}"
          ]) },
        head: { "account.js": src([
          "async function getAccount(req) {",
          "  const user = await db.users.find(req.userId);",
          "  return { ok: true, user: user };",
          "}",
          "",
          "async function deleteAccount(req) {",
          "  db.users.delete(req.userId);",
          "  await audit.log(\"account.deleted\", req.userId);",
          "  return { ok: true };",
          "}"
        ]),
          "auth.js": src([
            "// Runs before every signed-in request.",
            "async function loadUser(req) {",
            "  const user = await db.users.find(req.session.userId);",
            "  req.userId = user.id;",
            "  req.user = user;",
            "}"
          ]) },
        findings: [
          { id: "await", file: "account.js", lines: [7, 7], category: "bug", severity: "blocking",
            why: "`db.users.delete` isn't awaited. The handler logs and returns `{ ok: true }` without knowing whether the delete worked; if it fails, the user is told their account is gone when it isn't, and the error surfaces as an unhandled rejection." },
          { id: "sessions", file: "auth.js", lines: [3, 4], category: "bug", alsoOk: ["design"], severity: "blocking",
            why: "The account is deleted, but its other sessions aren't. The next request from the user's phone runs `loadUser`, `find` returns nothing, and `user.id` throws on every request: an error page instead of being signed out. Delete the user's sessions too, or have `loadUser` treat a missing user as signed out." }
        ],
        decoys: [
          { file: "account.js", lines: [2, 2], why: "The existing `getAccount` already awaits correctly. It's unchanged and fine." }
        ],
        verdict: "request",
        rubric: ["Names the missing await", "Says what the user is told when the delete fails"]
      },

      {
        id: "review-u3-4",
        title: "Everybody's defaults",
        kind: "review", xp: 20, mins: 7,
        brief: "**Retry uploads with no delay**\n\nThe upload screen now builds its HTTP client with `retryDelay: 0`, so a failed chunk retries straight away. Only the upload client changes; everything else keeps the defaults.",
        base: {
          "http.js": src([
            "const DEFAULTS = { retries: 3, retryDelay: 500, timeout: 10000 };",
            "",
            "function makeClient(options) {",
            "  const settings = DEFAULTS;",
            "  Object.assign(settings, options);",
            "  return createClient(settings);",
            "}"
          ]),
          "upload.js": src([
            "const client = makeClient({});"
          ])
        },
        head: {
          "http.js": src([
            "const DEFAULTS = { retries: 3, retryDelay: 500, timeout: 10000 };",
            "",
            "function makeClient(options) {",
            "  const settings = DEFAULTS;",
            "  Object.assign(settings, options);",
            "  return createClient(settings);",
            "}"
          ]),
          "upload.js": src([
            "const client = makeClient({ retryDelay: 0 });"
          ])
        },
        findings: [
          { id: "shared", file: "http.js", lines: [4, 5], category: "bug", severity: "blocking",
            why: "`settings` isn't a copy: it **is** `DEFAULTS`, so `Object.assign` writes `retryDelay: 0` into the shared defaults. Every client made after the upload screen loads retries with no delay too. Harmless while every caller passed `{}`; this change is the first to pass something. Copy first: `Object.assign({}, DEFAULTS, options)`." }
        ],
        decoys: [
          { file: "upload.js", lines: [1, 1], why: "Passing `{ retryDelay: 0 }` is exactly what the description asked for. The problem is what `makeClient` does with it." }
        ],
        verdict: "request",
        rubric: ["Explains that DEFAULTS is changed for every caller", "Points out the bug was already there, and this change is the first to trigger it", "Suggests copying before assigning"]
      },

      {
        id: "review-u3-quiz",
        title: "Unit 3 quiz: Correctness",
        kind: "quiz", xp: 10,
        brief: "Boundaries, empty input, swallowed errors, missing awaits and shared state. 80% to pass.",
        questions: [
          { q: "45 items, 20 per page. Which expression gives the right number of pages?",
            choices: ["Math.floor(45 / 20)", "Math.round(45 / 20)", "Math.ceil(45 / 20)", "45 % 20"],
            answer: 2, explain: "3 pages are needed. floor and round both give 2, which loses the last 5 items." },
          { q: "A save handler catches errors, logs them, then shows \"Saved\". What's the problem?",
            choices: ["The user is told it saved when it failed", "Logging the error makes the handler noticeably slower for users", "try/catch can't be combined with await", "The toast should appear before the request starts"],
            answer: 0, explain: "A catch that only logs turns a failure into a success message. Show an error, or only show \"Saved\" on success." },
          { q: "A promise-returning call isn't awaited, and then it fails. What happens?",
            choices: ["The function quietly waits for it anyway, because it's async", "The program stops straight away with an error", "The next lines run as if it worked; the failure is unhandled", "It retries until it succeeds"],
            answer: 2, explain: "Nothing waits for it, so the next lines run straight away, and nobody is there to catch the error." },
          { q: "`const s = DEFAULTS; Object.assign(s, opts);` What does this do to DEFAULTS?",
            choices: ["Nothing, because `s` is a separate copy of DEFAULTS", "It changes DEFAULTS for every later caller", "It throws, because DEFAULTS was declared with const", "It makes a deep copy first"],
            answer: 1, explain: "Assigning an object to a new variable doesn't copy it. `const` stops reassignment, not changes to the object." },
          { q: "A bug is in a line the change didn't touch, but the change is what triggers it. Should the review mention it?",
            choices: ["No: only the changed lines are in scope for any review", "Only if it turns out to be a security bug", "Yes: merging this change makes the bug happen", "Only in a separate ticket"],
            answer: 2, explain: "Merging the change makes the bug happen. That makes it part of this review, even though the buggy line is older." },
          { q: "Which input should you try first in your head when a function takes a list?",
            choices: ["A list of exactly ten items, already sorted", "A list of mixed strings and numbers", "An empty list", "A very long list"],
            answer: 2, explain: "Empty input is where averages divide by zero, first-item lookups return undefined, and loops quietly do nothing." }
        ]
      }
    ]
  });
})();
