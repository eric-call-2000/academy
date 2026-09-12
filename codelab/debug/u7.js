/* Debugging & Diagnosis — Unit 7: Debug a real app */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var TASKS_HTML = L(
    "<!DOCTYPE html>",
    "<html>",
    "<head>",
    "  <link rel=\"stylesheet\" href=\"styles.css\">",
    "</head>",
    "<body>",
    "  <h1>TaskMaster</h1>",
    "  <ul id=\"tasks\"></ul>",
    "  <div class=\"pager\">",
    "    <button id=\"prev-page\">Prev</button>",
    "    <span id=\"page\">Page 1</span>",
    "    <button id=\"next-page\">Next</button>",
    "  </div>",
    "  <script src=\"script.js\"></script>",
    "</body>",
    "</html>",
    "");

  var TASKS_CSS = L(
    "body { font-family: system-ui, sans-serif; padding: 16px; max-width: 480px; }",
    "#tasks { list-style: none; padding: 0; }",
    "#tasks li { display: flex; gap: 8px; align-items: center; padding: 6px 0; border-bottom: 1px solid #e5e7eb; }",
    "#tasks li span { flex: 1; }",
    ".pager { display: flex; gap: 12px; align-items: center; margin-top: 12px; }",
    "");

  function tasksScript(fixed) {
    return L(
      "// TaskMaster: loads tasks from the server, shows them three to a page,",
      "// deletes the task you click, and duplicates a task as a copy.",
      "let tasks = [];",
      "let page = 0;",
      "let nextId = 100;",
      "const PAGE_SIZE = 3;",
      "",
      "async function loadTasks() {",
      "  const res = await fetch(\"/api/tasks\");",
      fixed ? "  tasks = await res.json();" : "  tasks = res.json();",
      "  render();",
      "}",
      "",
      "function visibleTasks() {",
      "  const start = page * PAGE_SIZE;",
      fixed ? "  return tasks.slice(start, start + PAGE_SIZE);" : "  return tasks.slice(start, start + PAGE_SIZE - 1);",
      "}",
      "",
      "function render() {",
      "  const list = document.querySelector(\"#tasks\");",
      "  list.innerHTML = \"\";",
      "  const shown = visibleTasks();",
      fixed ? "  for (let i = 0; i < shown.length; i++) {" : "  for (var i = 0; i < shown.length; i++) {",
      "    const li = document.createElement(\"li\");",
      "    const label = document.createElement(\"span\");",
      "    label.textContent = shown[i].title;",
      "    const dup = document.createElement(\"button\");",
      "    dup.textContent = \"Duplicate\";",
      "    dup.className = \"dup\";",
      "    dup.addEventListener(\"click\", function () {",
      "      duplicateTask(shown[i].id);",
      "    });",
      "    const del = document.createElement(\"button\");",
      "    del.textContent = \"Delete\";",
      "    del.className = \"del\";",
      "    del.addEventListener(\"click\", function () {",
      "      removeTask(shown[i].id);",
      "    });",
      "    li.append(label, dup, del);",
      "    list.appendChild(li);",
      "  }",
      "  document.querySelector(\"#page\").textContent = \"Page \" + (page + 1);",
      "}",
      "",
      "function removeTask(id) {",
      "  tasks = tasks.filter(function (t) { return t.id !== id; });",
      "  render();",
      "}",
      "",
      "function duplicateTask(id) {",
      "  const original = tasks.find(function (t) { return t.id === id; });",
      fixed ? "  const copy = { ...original };" : "  const copy = original;",
      "  copy.id = nextId++;",
      "  copy.title = original.title + \" (copy)\";",
      "  tasks.push(copy);",
      "  render();",
      "}",
      "",
      "function bindControls() {",
      "  document.querySelector(\"#prev-page\").addEventListener(\"click\", function () {",
      "    if (page > 0) page--;",
      "    render();",
      "  });",
      fixed ? "  document.querySelector(\"#next-page\").addEventListener(\"click\", function () {" : "  document.querySelector(\"#nextPage\").addEventListener(\"click\", function () {",
      "    if ((page + 1) * PAGE_SIZE < tasks.length) page++;",
      "    render();",
      "  });",
      "}",
      "",
      "// Your diagnosis: one entry per bug, { fn: \"functionName\", cause: \"…\" },",
      "// with cause from: \"wrong selector\", \"off-by-one\", \"stale closure\",",
      "//                  \"missing await\", \"shared object\"",
      fixed ? L(
        "const DIAGNOSIS = [",
        "  { fn: \"loadTasks\", cause: \"missing await\" },",
        "  { fn: \"visibleTasks\", cause: \"off-by-one\" },",
        "  { fn: \"render\", cause: \"stale closure\" },",
        "  { fn: \"duplicateTask\", cause: \"shared object\" },",
        "  { fn: \"bindControls\", cause: \"wrong selector\" }",
        "];") : "const DIAGNOSIS = [];",
      "",
      "loadTasks();",
      "bindControls();",
      "");
  }

  var TASKS_DATA = [
    { id: 1, title: "Write report" },
    { id: 2, title: "Email Sam" },
    { id: 3, title: "Book flights" },
    { id: 4, title: "Pay invoice" },
    { id: 5, title: "Water plants" }
  ];

  function notesScript(fixed) {
    return L(
      "// Notes API — the spec, Back-End Foundations style:",
      "// request  = { method, path, query?, body? }    query values are STRINGS",
      "// response = { status, body }",
      "//",
      "// GET  /api/notes    → 200 { items, page, total }",
      "//        ?page=      1-based page of 3 notes (default 1)",
      "//        ?sort=title order by title — WITHOUT reordering the store",
      "// POST /api/notes    → 201 the created note { id, title, tag }",
      "// any other method on /api/notes → 405 { error: \"method not allowed\" }",
      "// anything else      → 404 { error: \"no such route\" }",
      "//",
      "// Three bug reports came in this week:",
      "//  #1 \"GET /api/notes answers 405 Method Not Allowed.\"",
      "//  #2 \"Page 1 is missing the first three notes.\"",
      "//  #3 \"After anyone sorts by title, the default order is gone for everyone.\"",
      "",
      "function seedNotes() {",
      "  return [",
      "    { id: 1, title: \"Zebra facts\", tag: \"fun\" },",
      "    { id: 2, title: \"Apple pie\", tag: \"food\" },",
      "    { id: 3, title: \"Meeting notes\", tag: \"work\" },",
      "    { id: 4, title: \"Budget\", tag: \"work\" },",
      "    { id: 5, title: \"Kite design\", tag: \"fun\" },",
      "    { id: 6, title: \"Groceries\", tag: \"food\" },",
      "    { id: 7, title: \"Travel plan\", tag: \"fun\" }",
      "  ];",
      "}",
      "let notes = seedNotes();",
      "let nextId = 8;",
      "const PAGE_SIZE = 3;",
      "",
      "function paginate(items, page) {",
      fixed ? "  const start = (page - 1) * PAGE_SIZE;" : "  const start = page * PAGE_SIZE;",
      "  return items.slice(start, start + PAGE_SIZE);",
      "}",
      "",
      "function listNotes(query) {",
      "  let source = notes;",
      "  if (query.sort === \"title\") {",
      fixed ? "    source = notes.slice().sort(function (a, b) { return a.title.localeCompare(b.title); });"
            : "    source = notes.sort(function (a, b) { return a.title.localeCompare(b.title); });",
      "  }",
      "  const page = Number(query.page || 1);",
      "  return { status: 200, body: { items: paginate(source, page), page: page, total: source.length } };",
      "}",
      "",
      "function createNote(body) {",
      "  const note = { id: nextId++, title: body.title, tag: body.tag || \"misc\" };",
      "  notes.push(note);",
      "  return { status: 201, body: note };",
      "}",
      "",
      "function handleRequest(req) {",
      "  const query = req.query || {};",
      fixed ? L(
        "  if (req.path === \"/api/notes\" && req.method === \"GET\") return listNotes(query);",
        "  if (req.path === \"/api/notes\" && req.method === \"POST\") return createNote(req.body || {});",
        "  if (req.path === \"/api/notes\") {",
        "    return { status: 405, body: { error: \"method not allowed\" } };",
        "  }") : L(
        "  if (req.path === \"/api/notes\" && req.method !== \"POST\") {",
        "    return { status: 405, body: { error: \"method not allowed\" } };",
        "  }",
        "  if (req.path === \"/api/notes\" && req.method === \"GET\") return listNotes(query);",
        "  if (req.path === \"/api/notes\" && req.method === \"POST\") return createNote(req.body || {});"),
      "  return { status: 404, body: { error: \"no such route\" } };",
      "}",
      "",
      "// Your diagnosis: one entry per bug, { fn: \"functionName\", cause: \"…\" },",
      "// with cause from: \"route order\", \"off-by-one\", \"mutates the store\"",
      fixed ? L(
        "const DIAGNOSIS = [",
        "  { fn: \"handleRequest\", cause: \"route order\" },",
        "  { fn: \"paginate\", cause: \"off-by-one\" },",
        "  { fn: \"listNotes\", cause: \"mutates the store\" }",
        "];") : "const DIAGNOSIS = [];",
      "",
      "console.log(handleRequest({ method: \"GET\", path: \"/api/notes\" }));",
      "");
  }

  var DIAG_CHECK = function (want, vocab) {
    return L(
      "T.expect(Array.isArray(DIAGNOSIS), 'Keep DIAGNOSIS as an array of { fn, cause } entries.');",
      "var VOCAB = " + JSON.stringify(vocab) + ";",
      "DIAGNOSIS.forEach(function (d) {",
      "  T.expect(d && VOCAB.indexOf(d.cause) !== -1, 'Every cause must be one of ' + JSON.stringify(VOCAB) + ' — got ' + JSON.stringify(d && d.cause) + '.');",
      "});",
      "var key = function (d) { return d.fn + ' / ' + d.cause; };",
      "var got = DIAGNOSIS.map(key).sort();",
      "var want = " + JSON.stringify(want) + ".map(key).sort();",
      "T.eq(DIAGNOSIS.length, want.length, 'one entry per bug — there are ' + want.length);",
      "var right = got.filter(function (g) { return want.indexOf(g) !== -1; }).length;",
      "T.expect(right === want.length, right + ' of your ' + want.length + ' entries name the right function AND cause. Passing checks prove you fixed it; the diagnosis proves you found it.');");
  };

  window.CODELAB.addUnit("debug", {
    id: "debug-u7",
    title: "Debug a real app",
    icon: "🧰",
    blurb: "Everything at once, on code you didn't write and with no hint where the bugs are: a front-end app with five of them, an API with three — and a written diagnosis for each.",
    cheat: [
      { h: "The loop, every time", lang: "text", code: L(
        "1. Reproduce  — make it fail on demand",
        "2. Read       — the message, the stack, the failed request",
        "3. Isolate    — halve inputs, history or code until it's cornered",
        "4. Explain    — say what's wrong and why BEFORE you change anything",
        "5. Fix        — the cause, not the symptom",
        "6. Prove it   — the repro now passes; nothing else broke"),
        note: "Skipping step 4 is how a one-line fix becomes three new bugs." },
      { h: "The five bug families of this course", lang: "js", code: L(
        "querySelector(\"#nextPage\")            // wrong selector   → null / empty list",
        "slice(start, start + SIZE - 1)        // off-by-one       → one item short",
        "for (var i …) btn.onclick = () => i   // stale closure    → every handler sees the last i",
        "tasks = res.json()                    // missing await    → a Promise, not data",
        "const copy = original                 // shared object    → edit one, change both"),
        note: "Each has a signature. Learn the signature and you'll spot the family before you find the line." },
      { h: "Mutation that leaks", lang: "js", code: L(
        "notes.sort(byTitle)          // sorts the SHARED array in place",
        "notes.slice().sort(byTitle)  // sorts a copy",
        "[...notes].sort(byTitle)     // same thing"),
        note: "sort, reverse, splice and push change the array they're called on. In a server, that array is everyone's." }
    ],
    lessons: [

      {
        id: "debug-u7-p1",
        title: "Project: The broken TaskMaster",
        kind: "web", chip: "DEBUG", xp: 50, mins: 45, project: true,
        mock: { "GET /api/tasks": TASKS_DATA },
        brief: "TaskMaster was working last month. Now the page loads empty, and the team is too busy shipping to look. It's yours.\n\nWhat it should do: load the tasks from `/api/tasks`, show them **three to a page** with *Prev* and *Next*, **delete** the task whose *Delete* you click, and **duplicate** a task as a separate copy titled `\"… (copy)\"`, leaving the original alone.\n\nThere are **five** bugs — one from each family this course has covered: a **wrong selector**, an **off-by-one**, a **stale closure**, a **missing await**, and a **shared object**. They live in five different functions, and fixing one sometimes reveals the next, because an early crash hides everything after it.\n\nWork the loop. Run it and **read the Console**: the errors carry their real `script.js` line numbers now. Reproduce each symptom, form a theory, fix the **cause**. Then fill in `DIAGNOSIS`: one `{ fn, cause }` per bug — the function it lived in, and its family, spelled exactly as above. That last check is what separates *finding* the bugs from rewriting the app until the checks go green, so it's graded last.",
        steps: [
          { text: "The tasks load, and the first page shows exactly three of them.",
            test: L(
              "await T.sleep(250);",
              "var titles = T.$$('#tasks li span').map(function (s) { return s.textContent; });",
              "T.eq(titles, ['Write report', 'Email Sam', 'Book flights'], 'page 1 should list the first three tasks from /api/tasks — the page shows ' + JSON.stringify(titles));") },
          { text: "*Next* shows the next page, and *Prev* comes back.",
            test: L(
              "T.click('#next-page');",
              "var titles = T.$$('#tasks li span').map(function (s) { return s.textContent; });",
              "T.eq(titles, ['Pay invoice', 'Water plants'], 'page 2 holds the last two tasks');",
              "T.eq(T.text('#page'), 'Page 2', 'and says so');",
              "T.click('#prev-page');",
              "T.eq(T.text('#page'), 'Page 1', 'Prev goes back');") },
          { text: "*Delete* removes the task you clicked — not some other one.",
            test: L(
              "T.click('#tasks li:nth-child(2) .del');",
              "var titles = T.$$('#tasks li span').map(function (s) { return s.textContent; });",
              "T.eq(titles, ['Write report', 'Book flights', 'Pay invoice'], 'deleting \"Email Sam\" should remove exactly that task');",
              "T.eq(tasks.length, 4, 'four tasks remain');") },
          { text: "*Duplicate* makes a separate copy — the original keeps its title and id.",
            test: L(
              "T.click('#tasks li:nth-child(1) .dup');",
              "var byTitle = tasks.map(function (t) { return t.title; });",
              "T.expect(byTitle.indexOf('Write report') !== -1, 'The original \"Write report\" is gone — duplicating it changed the original. Tasks are now: ' + JSON.stringify(byTitle));",
              "T.expect(byTitle.indexOf('Write report (copy)') !== -1, 'The copy \"Write report (copy)\" should be in the list.');",
              "var ids = tasks.map(function (t) { return t.id; });",
              "T.eq(ids.indexOf(1) !== -1, true, 'the original keeps id 1');",
              "T.eq(new Set(ids).size, ids.length, 'every task has its own id');") },
          { text: "Your `DIAGNOSIS` names all five bugs: the function each lived in, and its family.",
            test: DIAG_CHECK([
              { fn: "loadTasks", cause: "missing await" },
              { fn: "visibleTasks", cause: "off-by-one" },
              { fn: "render", cause: "stale closure" },
              { fn: "duplicateTask", cause: "shared object" },
              { fn: "bindControls", cause: "wrong selector" }
            ], ["wrong selector", "off-by-one", "stale closure", "missing await", "shared object"]) }
        ],
        files: [
          { name: "index.html", content: TASKS_HTML },
          { name: "styles.css", content: TASKS_CSS },
          { name: "script.js", content: tasksScript(false) }
        ],
        hints: [
          "Start with the Console. One error is thrown at load with a real line number, and its message follows Unit 1's rule: the thing before `.addEventListener` was null. Compare that selector with the ids in index.html. The other load-time error mentions `slice` — what does `res.json()` actually return?",
          "Two per page instead of three is an off-by-one in visibleTasks. Deleting the wrong task (or crashing on Delete) is the classic `var` in a loop: every handler shares ONE `i`, which is `shown.length` by the time anyone clicks. `let` gives each pass its own.",
          "`const copy = original` doesn't copy anything — both names point at the same object, so renaming the copy renames the original. `{ ...original }` makes a new object. Then list all five in DIAGNOSIS by function name."
        ],
        solution: {
          "script.js": tasksScript(true)
        }
      },

      {
        id: "debug-u7-p2",
        title: "Project: The lying API",
        kind: "js", chip: "DEBUG", xp: 50, mins: 40, project: true,
        brief: "A small notes API in the exact request/response shape from Back-End Foundations. Three bug reports landed this week, and this time the reports are all you get — no stack traces, because nothing crashes. The API just answers wrong:\n\n- *\"GET /api/notes answers 405 Method Not Allowed.\"*\n- *\"Page 1 is missing the first three notes.\"*\n- *\"After anyone sorts by title, the default order is gone for everyone.\"*\n\nThat third one is the dangerous kind: it's a bug in **state that's shared between requests**. One user's harmless request changes what every later user sees, so it only shows up in the right order of calls — and it will never reproduce if you test each request alone.\n\nReproduce each report by calling `handleRequest` yourself and logging what comes back. Find the cause, fix it, and keep the spec intact: the guard that answers 405 exists for a reason — `PUT` and `DELETE` must still be refused. Then fill in `DIAGNOSIS` with the function and family of each bug: `\"route order\"`, `\"off-by-one\"` or `\"mutates the store\"`.\n\n(The checks reset the store with `seedNotes()` between runs — keep that function's name.)",
        steps: [
          { text: "`GET /api/notes` answers 200 — while PUT and DELETE are still refused with 405, and POST still creates.",
            test: L(
              "notes = seedNotes(); nextId = 8;",
              "var r = handleRequest({ method: 'GET', path: '/api/notes' });",
              "T.eq(r.status, 200, 'GET /api/notes — report #1');",
              "T.eq(handleRequest({ method: 'PUT', path: '/api/notes' }).status, 405, 'PUT must still get 405 — reorder the guard, don\\'t delete it');",
              "T.eq(handleRequest({ method: 'DELETE', path: '/api/notes' }).status, 405, 'DELETE must still get 405');",
              "var c = handleRequest({ method: 'POST', path: '/api/notes', body: { title: 'Call mum', tag: 'fun' } });",
              "T.eq(c, { status: 201, body: { id: 8, title: 'Call mum', tag: 'fun' } }, 'POST still creates');",
              "T.eq(handleRequest({ method: 'GET', path: '/api/nope' }).status, 404, 'unknown routes are still 404');") },
          { text: "Pages are 1-based: page 1 is notes 1–3, page 3 is note 7 — and `page` arrives as a string.",
            test: L(
              "notes = seedNotes(); nextId = 8;",
              "var ids = function (q) { return handleRequest({ method: 'GET', path: '/api/notes', query: q }).body.items.map(function (n) { return n.id; }); };",
              "T.eq(ids(undefined), [1, 2, 3], 'no page given means page 1: the first three notes — report #2');",
              "T.eq(ids({ page: '1' }), [1, 2, 3], 'page \"1\"');",
              "T.eq(ids({ page: '2' }), [4, 5, 6], 'page \"2\"');",
              "T.eq(ids({ page: '3' }), [7], 'page \"3\" holds the last note');",
              "var b = handleRequest({ method: 'GET', path: '/api/notes', query: { page: '2' } }).body;",
              "T.eq([b.page, b.total], [2, 7], 'page is reported as a number, total counts every note');") },
          { text: "Sorting by title works — and leaves the store, and every later request, exactly as it was.",
            test: L(
              "notes = seedNotes(); nextId = 8;",
              "var titles = function (q) { return handleRequest({ method: 'GET', path: '/api/notes', query: q }).body.items.map(function (n) { return n.title; }); };",
              "T.eq(titles({ sort: 'title' }), ['Apple pie', 'Budget', 'Groceries'], 'page 1, sorted by title');",
              "T.eq(titles({ sort: 'title', page: '2' }), ['Kite design', 'Meeting notes', 'Travel plan'], 'page 2, sorted by title');",
              "T.eq(titles({}), ['Zebra facts', 'Apple pie', 'Meeting notes'], 'Report #3: after a sorted request, the NEXT plain request must still see the original order');",
              "T.eq(notes.map(function (n) { return n.id; }), [1, 2, 3, 4, 5, 6, 7], 'the store itself must be untouched — sort a copy');") },
          { text: "New notes land at the end of the store, on the last page.",
            test: L(
              "notes = seedNotes(); nextId = 8;",
              "handleRequest({ method: 'GET', path: '/api/notes', query: { sort: 'title' } });",
              "handleRequest({ method: 'POST', path: '/api/notes', body: { title: 'Call mum' } });",
              "var b = handleRequest({ method: 'GET', path: '/api/notes', query: { page: '3' } }).body;",
              "T.eq(b.items.map(function (n) { return n.id; }), [7, 8], 'page 3 is note 7 and the new note 8 — in creation order, whatever anyone sorted before');",
              "T.eq(b.total, 8, 'eight notes now');") },
          { text: "Your `DIAGNOSIS` names all three bugs: the function each lived in, and its family.",
            test: DIAG_CHECK([
              { fn: "handleRequest", cause: "route order" },
              { fn: "paginate", cause: "off-by-one" },
              { fn: "listNotes", cause: "mutates the store" }
            ], ["route order", "off-by-one", "mutates the store"]) }
        ],
        files: [
          { name: "script.js", content: notesScript(false) }
        ],
        hints: [
          "Report #1: requests are checked top to bottom, and the first matching `if` wins. Which check does a GET hit first? Move the 405 guard BELOW the GET and POST routes, so it only catches what they didn't.",
          "Report #2: `?page=1` should start at index 0. `page * PAGE_SIZE` starts page 1 at index 3 — pages are 1-based, array indexes aren't.",
          "Report #3: `Array.prototype.sort` sorts in place and returns the SAME array — so `notes.sort(...)` reorders the store for everyone. Sort a copy: `notes.slice().sort(...)`. Then fill DIAGNOSIS: handleRequest, paginate, listNotes."
        ],
        solution: {
          "script.js": notesScript(true)
        }
      },

      {
        id: "debug-quiz-7",
        title: "Final quiz: Debugging & Diagnosis",
        kind: "quiz", xp: 10,
        brief: "The whole method, from the first error message to the proof that it's fixed. 80% to pass.",
        questions: [
          { q: "A bug report arrives. What is the FIRST thing to do?",
            choices: ["Read the code the report mentions", "Make the bug happen on demand", "Add logging everywhere near it", "Ask the reporter for a screenshot"],
            answer: 1, explain: "Until you can reproduce the failure reliably, you can't tell whether any change fixed it or whether you just got a lucky run. Reading, logging and asking questions all get easier — and meaningful — once you have a repro that fails every time." },
          { q: "What does this code log, and why?",
            code: "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
            lang: "js",
            choices: ["0, 1, 2 — each callback captured its own i", "3, 3, 3 — the callbacks share one i", "undefined, three times", "Nothing, because setTimeout(0) is skipped"],
            answer: 1, explain: "`var` creates one function-scoped `i` shared by every callback. The loop finishes before any timer fires, leaving i at 3, so all three log 3. With `let`, each iteration gets a fresh binding and you'd see 0, 1, 2 — the same stale-closure fix as TaskMaster's delete buttons." },
          { q: "Why does `tasks = res.json()` (with no await) break a page that then calls `tasks.slice()`?",
            choices: ["`res.json()` returns a Promise, and Promises have no slice", "`res.json()` returns a string that has to be parsed", "The response body can only be read once the whole page has loaded", "`slice` only works on arrays that came from a literal"],
            answer: 0, explain: "`res.json()` starts reading and parsing the body and immediately returns a Promise of the result. Without `await`, `tasks` holds that Promise, so calling an array method on it throws \"tasks.slice is not a function\". The data arrives later, into a Promise nobody is waiting on." },
          { q: "In a server, why is `notes.sort(byTitle)` inside a request handler a bug even when the sorted response is correct?",
            choices: ["Sorting in a request handler is too slow to allow", "`sort` returns a new copy, so the sorted result is thrown away", "It changes the shared array for every later request", "`sort` cannot compare strings without a locale"],
            answer: 2, explain: "`sort` rearranges the array in place and returns that same array. The store is shared between requests, so one client asking for sorted notes silently changes the default order everyone else sees afterwards. Sort a copy — `notes.slice().sort(...)` — whenever the data isn't yours alone." },
          { q: "Your fix makes every check pass. Why still write down which function held the bug and why?",
            choices: ["Tests pass faster when bugs are documented", "The browser needs the diagnosis to cache the fix", "It's required before the code can be minified and deployed to users", "It proves you found the cause, not just rewrote until green"],
            answer: 3, explain: "Green checks show the symptoms are gone; they don't show you understood why they happened. Naming the function and the bug family forces you to locate the cause — and it's what makes the next bug in that family recognizable on sight. A rewrite that happens to pass teaches nothing." },
          { q: "A `GET` route returns 405, and the route definitely exists. What is the most likely cause?",
            choices: ["A method guard runs before the GET branch", "The server doesn't support GET requests", "The client sent the request without a body", "The response was blocked by CORS"],
            answer: 0, explain: "Routes are checked top to bottom and the first match wins, so a broad guard like \"anything but POST gets 405\" placed above the GET branch catches GET requests before they reach it. The fix is to reorder, keeping the guard for the methods it was meant to refuse." },
          { q: "You add `console.log(cart)` in DevTools, the code then changes `cart`, and the logged object shows the new values when you expand it. What's going on?",
            choices: ["The log line ran after the change", "DevTools shows the object as it is when you expand it", "`console.log` always makes a deep copy of whatever it is given", "The change happened inside `console.log`"],
            answer: 1, explain: "DevTools keeps a live reference to logged objects and reads their properties when you expand them, not when the line ran. To see a value as it WAS, log a copy (structuredClone or a JSON round-trip) or record snapshots, as probe() does." },
          { q: "Which strategy finds one bad row among 10,000 with the fewest checks?",
            choices: ["Checking each row from the top", "Checking random rows until one fails", "Halving the rows at each check", "Checking the last row, then working up"],
            answer: 2, explain: "Bisection throws away half the remaining rows with every check, so 10,000 rows need about 14 checks (2^14 is 16,384). Scanning from either end can take up to 10,000, and random sampling offers no guarantee at all. The same halving works on commits, code and inputs." }
        ]
      }
    ]
  });
})();
