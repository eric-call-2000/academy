/* Debugging & Diagnosis — Unit 6: Bugs that are not in your JavaScript */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var FAILURES_SRC = L(
    "// What DevTools showed for five failed requests: the Network panel's",
    "// status (0 = no response at all) and the Console's message.",
    "const FAILURES = {",
    "  expired: { method: \"GET\", url: \"/api/cart\", status: 401, console: \"\" },",
    "  refused: { method: \"DELETE\", url: \"/api/orders/7\", status: 403, console: \"\" },",
    "  cors: {",
    "    method: \"GET\", url: \"https://api.shop.example/cart\", status: 0,",
    "    console: \"Access to fetch at 'https://api.shop.example/cart' from origin 'https://shop.example' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.\"",
    "  },",
    "  crashed: { method: \"POST\", url: \"/api/orders\", status: 500, console: \"\" },",
    "  down: { method: \"GET\", url: \"/api/products\", status: 503, console: \"\" }",
    "};");

  var EXPECTED_SRC = L(
    "// The shape your code was written against — the API docs, as an example.",
    "const EXPECTED_USER = {",
    "  id: 0,",
    "  name: \"\",",
    "  email: \"\",",
    "  tags: [],",
    "  address: { city: \"\", zip: \"\" }",
    "};");

  var SHOP_HTML = L(
    "<!DOCTYPE html>",
    "<html>",
    "<head>",
    "  <link rel=\"stylesheet\" href=\"styles.css\">",
    "  <script src=\"script.js\"></script>",
    "</head>",
    "<body>",
    "  <h1>Mini shop</h1>",
    "  <p>Cart: <span id=\"count\">0</span> items</p>",
    "  <button class=\"add\" data-item=\"mug\">Add mug</button>",
    "  <button class=\"add\" data-item=\"pen\">Add pen</button>",
    "  <form id=\"note-form\">",
    "    <input id=\"note\" placeholder=\"Gift note\">",
    "    <button type=\"submit\">Save note</button>",
    "  </form>",
    "  <p id=\"status\"></p>",
    "</body>",
    "</html>",
    "");

  var SHOP_HTML_FIXED = L(
    "<!DOCTYPE html>",
    "<html>",
    "<head>",
    "  <link rel=\"stylesheet\" href=\"styles.css\">",
    "</head>",
    "<body>",
    "  <h1>Mini shop</h1>",
    "  <p>Cart: <span id=\"count\">0</span> items</p>",
    "  <button class=\"add\" data-item=\"mug\">Add mug</button>",
    "  <button class=\"add\" data-item=\"pen\">Add pen</button>",
    "  <form id=\"note-form\">",
    "    <input id=\"note\" placeholder=\"Gift note\">",
    "    <button type=\"submit\">Save note</button>",
    "  </form>",
    "  <p id=\"status\"></p>",
    "  <script src=\"script.js\"></script>",
    "</body>",
    "</html>",
    "");

  var SHOP_CSS = L(
    "body { font-family: system-ui, sans-serif; padding: 16px; }",
    "button { margin: 4px 4px 4px 0; padding: 6px 12px; }",
    "#status { color: #15803d; font-weight: 600; }",
    "");

  window.CODELAB.addUnit("debug", {
    id: "debug-u6",
    title: "Bugs that are not in your JavaScript",
    icon: "🌐",
    blurb: "Half of what looks like a JavaScript bug is a request that failed, a payload that lied, or a listener that never attached. Triage the failure, name whose bug it is, and fix the handler that never fired.",
    cheat: [
      { h: "Read the failed request first", lang: "text", code: L(
        "Network panel → the red row → Headers:",
        "  Request URL, Request Method, Status Code",
        "  → Response: servers usually say WHY ({\"error\": \"token expired\"})"),
        note: "In code: res.status, res.ok, and await res.json() on the error body." },
      { h: "Whose bug is it?", lang: "text", code: L(
        "401  token missing or expired      → mine   (send / refresh the token)",
        "403  logged in but not allowed     → mine   (don't offer what they can't do)",
        "CORS no Access-Control-Allow-Origin → theirs (the SERVER must send it)",
        "500  server threw                   → theirs (read the server logs)",
        "502/503/504 server unavailable      → theirs (retry later)"),
        note: "\"mode: 'no-cors'\" does not fix CORS — it hands you an empty, unreadable response." },
      { h: "Shape mismatch at the boundary", lang: "js", code: L(
        "// what the docs promised:   { tags: [], email: \"\" }",
        "// what the API sent today:  { tags: \"admin\" }",
        "user.tags.map(...)   // TypeError: user.tags.map is not a function",
        "user.email.trim()    // TypeError: Cannot read properties of undefined"),
        note: "Log the payload you actually received before debugging the code that reads it." },
      { h: "The handler that never fired", lang: "js", code: L(
        "document.querySelectorAll(\"add\")    // tag <add>: matches nothing, silently",
        "document.querySelectorAll(\".add\")   // class add",
        "// a <script> in <head> runs before <body> exists → querySelector gives null",
        "form.addEventListener(\"submit\", e => { e.preventDefault(); /* … */ });"),
        note: "A selector that matches nothing throws no error — the forEach just loops zero times." }
    ],
    lessons: [

      {
        id: "debug-u6-1",
        title: "Read a failed request: status, method, URL",
        kind: "js", chip: "DEBUG", xp: 15, mins: 13,
        mock: {
          "GET /api/user": { __status: 401, body: { error: "token expired" } },
          "POST /api/orders": { __status: 500, body: { error: "db timeout" } },
          "DELETE /api/orders/7": { __status: 403, body: { error: "not your order" } },
          "GET /api/products": [{ id: 1, title: "Mug" }]
        },
        brief: "When a page \"just doesn't work\", the JavaScript is often fine. The request it sent failed — and the evidence isn't in your code at all, it's in the **Network** panel.\n\nAsync JavaScript taught you how your code should *react* when a server says no. This unit is about the step before: **diagnosis**. A failed request carries three facts, and a bug report that leaves one out wastes an hour:\n\n- the **method** — `GET /api/orders` and `POST /api/orders` are different endpoints that share a URL;\n- the **URL** it actually went to (not the one you meant to build);\n- the **status** — and usually a body saying *why*, like `{\"error\": \"token expired\"}`. Servers explain themselves far more often than people read it.\n\nWrite `describeCall(method, url)`: make the request, and return one line a colleague could act on. A success reads `\"GET /api/products ok (200)\"`. A failure reads `\"POST /api/orders failed with 500: db timeout\"` — method, URL, status, and the `error` field from the response body.\n\n**Try it for real:** DevTools → Network, reload any page, click a request, and read its Headers and Response tabs.",
        steps: [
          { text: "A failure names the method, the URL, the status and the server's reason: `\"GET /api/user failed with 401: token expired\"`.",
            test: L(
              "var line = await describeCall('GET', '/api/user');",
              "T.eq(line, 'GET /api/user failed with 401: token expired', 'method, URL, status, and the error field from the response body');") },
          { text: "The method is part of the story: a POST and a DELETE fail for different reasons.",
            test: L(
              "T.eq(await describeCall('POST', '/api/orders'), 'POST /api/orders failed with 500: db timeout', 'the POST');",
              "T.eq(await describeCall('DELETE', '/api/orders/7'), 'DELETE /api/orders/7 failed with 403: not your order', 'the DELETE');",
              "var sent = __CALLS.map(function (c) { return c.method + ' ' + c.url; });",
              "T.expect(sent.indexOf('DELETE /api/orders/7') !== -1, 'describeCall must actually send the method it was given — the requests sent were ' + JSON.stringify(sent));") },
          { text: "A success reads `\"GET /api/products ok (200)\"` — and so does any endpoint the server doesn't know, as a failure.",
            test: L(
              "T.eq(await describeCall('GET', '/api/products'), 'GET /api/products ok (200)', 'success: method, URL, ok and the status');",
              "T.eq(await describeCall('GET', '/api/nope'), 'GET /api/nope failed with 404: No such endpoint: GET /api/nope', 'an endpoint that does not exist');") }
        ],
        files: [
          { name: "script.js", content: L(
            "// describeCall(method, url) → one line a colleague could act on:",
            "//   success:  \"GET /api/products ok (200)\"",
            "//   failure:  \"POST /api/orders failed with 500: db timeout\"",
            "//             (the reason is the error field of the JSON body)",
            "async function describeCall(method, url) {",
            "  const res = await fetch(url);",
            "  return method + \" \" + url + \" failed\";",
            "}",
            "",
            "describeCall(\"GET\", \"/api/user\").then(line => console.log(line));",
            "") }
        ],
        hints: [
          "Send the method: `fetch(url, { method })`. Then `res.ok` tells you which kind of line to write, and `res.status` is the number.",
          "Success: `` return `${method} ${url} ok (${res.status})`; ``",
          "Failure: read the body first — `const body = await res.json();` — then `` return `${method} ${url} failed with ${res.status}: ${body.error}`; ``"
        ],
        solution: {
          "script.js": L(
            "async function describeCall(method, url) {",
            "  const res = await fetch(url, { method });",
            "  if (res.ok) return `${method} ${url} ok (${res.status})`;",
            "  const body = await res.json();",
            "  return `${method} ${url} failed with ${res.status}: ${body.error}`;",
            "}",
            "",
            "describeCall(\"GET\", \"/api/user\").then(line => console.log(line));",
            "")
        }
      },

      {
        id: "debug-u6-2",
        title: "401 vs 403 vs CORS vs 500 — whose bug is it?",
        kind: "js", chip: "DEBUG", xp: 15, mins: 14,
        brief: "Once a request has failed, the question that saves the most time is not *what* — it's **whose**. Is the fix in your code, or do you need to message the API team with evidence? Each failure has a fixed answer:\n\n- **401 Unauthorized** — the server doesn't know who you are: the token is missing or expired. Sending and refreshing the token is the client's job → `mine`.\n- **403 Forbidden** — the server knows exactly who you are and **refused**. That's its permission rules working. Either your UI offered an action this user can't take, or you called the wrong resource → start in your own code: `mine`.\n- **CORS** — the Network panel shows **status 0** (no response your code may read) and the Console says *blocked by CORS policy: No 'Access-Control-Allow-Origin' header*. The browser is enforcing a permission the **server** failed to grant. Only the server can add that header → `theirs`. (And no, `mode: \"no-cors\"` doesn't fix it — it hands you an empty response you're not allowed to read.)\n- **500** — the server threw. The stack trace is in *its* logs, not your console → `theirs`.\n- **502 / 503 / 504** — the server, or something in front of it, is down or overloaded → `theirs`.\n\nWrite `triage(failure)` returning `{ cause, owner }` with exactly these words: `\"token missing or expired\"`, `\"logged in but not allowed\"`, `\"server did not send the allow-origin header\"`, `\"server threw\"`, `\"server unavailable\"` — and `{ cause: \"unknown\", owner: \"unknown\" }` for anything else. A triage that answers \"mine\" to everything fails.",
        steps: [
          { text: "401 and 403 are both yours — for different reasons.",
            test: L(
              "T.eq(triage(FAILURES.expired), { cause: 'token missing or expired', owner: 'mine' }, '401');",
              "T.eq(triage(FAILURES.refused), { cause: 'logged in but not allowed', owner: 'mine' }, '403');") },
          { text: "A CORS block is status 0 plus the Console's CORS message — and it's theirs.",
            test: L(
              "T.eq(triage(FAILURES.cors), { cause: 'server did not send the allow-origin header', owner: 'theirs' }, 'blocked by CORS policy');",
              "var offline = { method: 'GET', url: '/api/cart', status: 0, console: 'net::ERR_INTERNET_DISCONNECTED' };",
              "T.eq(triage(offline), { cause: 'unknown', owner: 'unknown' }, 'status 0 alone is NOT CORS — here the machine is offline. Check the console message, not just the status.');") },
          { text: "The 5xx family is theirs — and anything else is honestly `unknown`.",
            test: L(
              "T.eq(triage(FAILURES.crashed), { cause: 'server threw', owner: 'theirs' }, '500');",
              "T.eq(triage(FAILURES.down), { cause: 'server unavailable', owner: 'theirs' }, '503');",
              "T.eq(triage({ status: 502, console: '' }), { cause: 'server unavailable', owner: 'theirs' }, '502 Bad Gateway');",
              "T.eq(triage({ status: 504, console: '' }), { cause: 'server unavailable', owner: 'theirs' }, '504 Gateway Timeout');",
              "T.eq(triage({ status: 418, console: '' }), { cause: 'unknown', owner: 'unknown' }, 'a status outside the list');") }
        ],
        files: [
          { name: "script.js", content: L(
            FAILURES_SRC,
            "",
            "// triage(failure) → { cause, owner }",
            "//   401                      → \"token missing or expired\",                  \"mine\"",
            "//   403                      → \"logged in but not allowed\",                 \"mine\"",
            "//   status 0 + CORS message  → \"server did not send the allow-origin header\", \"theirs\"",
            "//   500                      → \"server threw\",                              \"theirs\"",
            "//   502, 503, 504            → \"server unavailable\",                        \"theirs\"",
            "//   anything else            → \"unknown\",                                   \"unknown\"",
            "function triage(failure) {",
            "  return { cause: \"unknown\", owner: \"mine\" };",
            "}",
            "",
            "for (const key in FAILURES) console.log(key, triage(FAILURES[key]));",
            "") }
        ],
        hints: [
          "One `if` per row, returning an object: `if (failure.status === 401) return { cause: \"token missing or expired\", owner: \"mine\" };`",
          "CORS needs both facts: `failure.status === 0 && failure.console.includes(\"CORS policy\")`.",
          "For 502/503/504: `[502, 503, 504].includes(failure.status)`. The last line is `return { cause: \"unknown\", owner: \"unknown\" };`"
        ],
        solution: {
          "script.js": L(
            FAILURES_SRC,
            "",
            "function triage(failure) {",
            "  const s = failure.status;",
            "  if (s === 401) return { cause: \"token missing or expired\", owner: \"mine\" };",
            "  if (s === 403) return { cause: \"logged in but not allowed\", owner: \"mine\" };",
            "  if (s === 0 && failure.console.includes(\"CORS policy\"))",
            "    return { cause: \"server did not send the allow-origin header\", owner: \"theirs\" };",
            "  if (s === 500) return { cause: \"server threw\", owner: \"theirs\" };",
            "  if ([502, 503, 504].includes(s)) return { cause: \"server unavailable\", owner: \"theirs\" };",
            "  return { cause: \"unknown\", owner: \"unknown\" };",
            "}",
            "",
            "for (const key in FAILURES) console.log(key, triage(FAILURES[key]));",
            "")
        }
      },

      {
        id: "debug-u6-3",
        title: "The payload lied: shape mismatch at the boundary",
        kind: "js", chip: "DEBUG", xp: 15, mins: 15,
        mock: {
          "GET /api/user": { id: "u_17", name: "Ada", tags: "admin", address: { city: "Leeds" }, created: "2026-09-01" }
        },
        brief: "The profile page crashed overnight with `user.tags.map is not a function`, and nobody touched the code. That's the tell: when working code breaks with no change, suspect the **data**. The API changed what it sends, and your code is still reading the old shape.\n\nThe request succeeded — status 200 — so nothing in the Network panel looks red. The bug lives at the **boundary**: the line where data from outside meets code that made assumptions about it. The fastest way to find it is to stop reading code and **compare the payload you received with the shape you expected**.\n\nWrite `shapeDiff(expected, got)`: walk the keys of `expected` in order, and report:\n\n- `\"missing: path\"` when `got` has no such key;\n- `\"wrong type: path (gotType, expected expectedType)\"` when the types differ — where an array's type is `\"array\"` and `null`'s is `\"null\"`, not `\"object\"`;\n- and recurse into nested objects, building dotted paths like `address.zip`.\n\nExtra keys in `got` don't matter. Then `checkUser()` fetches `/api/user` and diffs it against `EXPECTED_USER` — the report you'd paste into a message to the API team.",
        example: { lang: "js", code: "shapeDiff({ tags: [], email: \"\" }, { tags: \"admin\" })\n// [\"wrong type: tags (string, expected array)\", \"missing: email\"]" },
        steps: [
          { text: "Flat objects: `missing:` and `wrong type:` lines, in `expected`'s key order — arrays are `\"array\"`, `null` is `\"null\"`.",
            test: L(
              "T.eq(shapeDiff({ tags: [], email: '' }, { tags: 'admin' }), ['wrong type: tags (string, expected array)', 'missing: email'], 'in the order the keys appear in expected');",
              "T.eq(shapeDiff({ count: 0, list: [] }, { count: '3', list: {} }), ['wrong type: count (string, expected number)', 'wrong type: list (object, expected array)'], 'an object where an array was expected');",
              "T.eq(shapeDiff({ note: '' }, { note: null }), ['wrong type: note (null, expected string)'], 'null is its own type here — typeof null says \"object\", which would hide this bug');",
              "T.eq(shapeDiff({ a: 1 }, { a: 2, extra: true }), [], 'matching types (and extra keys) are fine');") },
          { text: "Nested objects: recurse, with dotted paths.",
            test: L(
              "T.eq(shapeDiff({ address: { city: '', zip: '' } }, { address: { city: 'Leeds' } }), ['missing: address.zip'], 'recurse into nested objects');",
              "T.eq(shapeDiff({ a: { b: { c: 0 } } }, { a: { b: { c: 'x' } } }), ['wrong type: a.b.c (string, expected number)'], 'as deep as it goes');",
              "T.eq(shapeDiff({ address: { city: '' } }, { address: 'Leeds' }), ['wrong type: address (string, expected object)'], 'when a whole object is missing its shape, report it once — do not recurse into a string');") },
          { text: "`checkUser()` fetches `/api/user` and returns the diff against `EXPECTED_USER`.",
            test: L(
              "var diff = await checkUser();",
              "T.eq(diff, ['wrong type: id (string, expected number)', 'missing: email', 'wrong type: tags (string, expected array)', 'missing: address.zip'], 'the payload the API actually sent today, against the shape the code expects');") }
        ],
        files: [
          { name: "script.js", content: L(
            EXPECTED_SRC,
            "",
            "// shapeDiff(expected, got) → [\"missing: path\", \"wrong type: path (got, expected want)\", …]",
            "// Types: \"array\" for arrays, \"null\" for null, typeof for everything else.",
            "function shapeDiff(expected, got, prefix = \"\") {",
            "  const out = [];",
            "  return out;",
            "}",
            "",
            "// Fetch /api/user and diff it against EXPECTED_USER.",
            "async function checkUser() {",
            "  return [];",
            "}",
            "",
            "checkUser().then(d => console.log(d));",
            "") }
        ],
        hints: [
          "A type helper first: `function typeName(v) { if (v === null) return \"null\"; if (Array.isArray(v)) return \"array\"; return typeof v; }`",
          "Loop `for (const key of Object.keys(expected))` with `const path = prefix + key;` — `!(key in got)` is missing; different typeName is wrong type; both `\"object\"` means recurse: `out.push(...shapeDiff(expected[key], got[key], path + \".\"));`",
          "checkUser: `const res = await fetch(\"/api/user\"); return shapeDiff(EXPECTED_USER, await res.json());`"
        ],
        solution: {
          "script.js": L(
            EXPECTED_SRC,
            "",
            "function typeName(v) {",
            "  if (v === null) return \"null\";",
            "  if (Array.isArray(v)) return \"array\";",
            "  return typeof v;",
            "}",
            "",
            "function shapeDiff(expected, got, prefix = \"\") {",
            "  const out = [];",
            "  for (const key of Object.keys(expected)) {",
            "    const path = prefix + key;",
            "    if (!(key in got)) { out.push(\"missing: \" + path); continue; }",
            "    const want = typeName(expected[key]), have = typeName(got[key]);",
            "    if (want !== have) out.push(`wrong type: ${path} (${have}, expected ${want})`);",
            "    else if (want === \"object\") out.push(...shapeDiff(expected[key], got[key], path + \".\"));",
            "  }",
            "  return out;",
            "}",
            "",
            "async function checkUser() {",
            "  const res = await fetch(\"/api/user\");",
            "  return shapeDiff(EXPECTED_USER, await res.json());",
            "}",
            "",
            "checkUser().then(d => console.log(d));",
            "")
        }
      },

      {
        id: "debug-u6-4",
        title: "The handler that never fired: DOM and event bugs",
        kind: "web", chip: "DEBUG", xp: 15, mins: 15,
        brief: "Click *Add mug* and nothing happens. No error, no count. Type a gift note and press *Save note* — the Console finally complains, but about a line that looks perfectly fine. This mini shop has **three** bugs, and none of them is in the logic. They're all in how the script meets the page:\n\n- **A selector that matches nothing.** `querySelectorAll(\"add\")` looks for `<add>` *elements*. There aren't any, so it returns an empty list, `forEach` loops zero times, and no error is ever thrown. The silent one.\n- **A script that runs too early.** A `<script>` in the `<head>` runs *before* the browser has built the `<body>` — so every `querySelector` for a body element returns `null`. The Console's `Cannot read properties of null (reading 'addEventListener')` is the symptom; the cause is in `index.html`, not on the line it points at.\n- **A submit that isn't stopped.** A form's default action is to *navigate*, reloading the page and wiping whatever your handler just did. The handler must call `event.preventDefault()`.\n\nFix all three. For the timing bug, move the `<script>` tag to the end of `<body>` (or wait for `DOMContentLoaded` — either works). Run the page: the Console below shows the error with its real line in `script.js`.",
        steps: [
          { text: "Clicking *Add mug* increments the cart count.",
            test: L(
              "T.expect(T.$('.add'), 'The .add buttons are missing from the page.');",
              "T.click('.add[data-item=\"mug\"]');",
              "T.eq(T.text('#count'), '1', 'After one click on Add mug, the count should read 1 — is a click listener actually attached to the button?');") },
          { text: "Every *Add* button works — the selector matches all of them.",
            test: L(
              "T.click('.add[data-item=\"pen\"]');",
              "T.eq(T.text('#count'), '2', 'Add pen should work too — the listener goes on EVERY .add button');") },
          { text: "Saving the note shows `saved: <note>` in `#status`.",
            test: L(
              "T.type('#note', 'Happy birthday');",
              "T.submit('#note-form');",
              "T.eq(T.text('#status'), 'saved: Happy birthday', 'the submit handler should run and write to #status');") },
          { text: "…and the handler stops the browser's own submit with `preventDefault()`.",
            test: L(
              "var ev = new Event('submit', { bubbles: true, cancelable: true });",
              "T.$('#note-form').dispatchEvent(ev);",
              "T.expect(ev.defaultPrevented, 'Without preventDefault() the browser submits the form — a full page load that throws away everything your handler just did.');") }
        ],
        files: [
          { name: "index.html", content: SHOP_HTML },
          { name: "styles.css", content: SHOP_CSS },
          { name: "script.js", content: L(
            "const counter = document.querySelector(\"#count\");",
            "let count = 0;",
            "",
            "document.querySelectorAll(\"add\").forEach(function (btn) {",
            "  btn.addEventListener(\"click\", function () {",
            "    count++;",
            "    counter.textContent = count;",
            "  });",
            "});",
            "",
            "document.querySelector(\"#note-form\").addEventListener(\"submit\", function (event) {",
            "  const note = document.querySelector(\"#note\").value;",
            "  document.querySelector(\"#status\").textContent = \"saved: \" + note;",
            "});",
            "") }
        ],
        hints: [
          "`\"add\"` is a tag selector; the buttons have the CLASS add, which is `\".add\"`.",
          "In index.html, cut `<script src=\"script.js\"></script>` out of `<head>` and paste it just before `</body>` — by then every element above it exists.",
          "The submit handler's first line should be `event.preventDefault();`."
        ],
        solution: {
          "index.html": SHOP_HTML_FIXED,
          "script.js": L(
            "const counter = document.querySelector(\"#count\");",
            "let count = 0;",
            "",
            "document.querySelectorAll(\".add\").forEach(function (btn) {",
            "  btn.addEventListener(\"click\", function () {",
            "    count++;",
            "    counter.textContent = count;",
            "  });",
            "});",
            "",
            "document.querySelector(\"#note-form\").addEventListener(\"submit\", function (event) {",
            "  event.preventDefault();",
            "  const note = document.querySelector(\"#note\").value;",
            "  document.querySelector(\"#status\").textContent = \"saved: \" + note;",
            "});",
            "")
        }
      },

      {
        id: "debug-quiz-6",
        title: "Unit 6 quiz: Bugs outside your JavaScript",
        kind: "quiz", xp: 10,
        brief: "Failed requests, whose bug it is, payload mismatches and event wiring. 80% to pass.",
        questions: [
          { q: "A request fails with 403. What does that tell you?",
            choices: ["The server doesn't know who you are", "The server crashed while handling it", "The server knows who you are and refused", "The browser blocked the response before your code saw it"],
            answer: 2, explain: "403 Forbidden means authentication worked — the server identified you — and its permission rules said no. 401 is the \"who are you?\" status, fixed by sending or refreshing a token. A crash is a 500, and a browser-blocked response (CORS) never reaches your code as a status at all." },
          { q: "The Console says a request was \"blocked by CORS policy: No 'Access-Control-Allow-Origin' header\". Where is the fix?",
            choices: ["On the server: it must send the allow-origin header", "In your fetch call: add `mode: \"no-cors\"` to the request options", "In your fetch: retry the request a second time", "In the browser: disable its web security flags"],
            answer: 0, explain: "CORS is the browser enforcing a permission that only the server can grant, by sending Access-Control-Allow-Origin for your origin. `mode: \"no-cors\"` silences the error by giving you an opaque response you can't read, retries hit the same wall, and disabling browser security only hides the problem on your machine." },
          { q: "Working code starts throwing `user.tags.map is not a function` overnight, with no deploy. What should you check first?",
            choices: ["Whether the browser updated its Array methods", "Whether someone reformatted the file", "Whether the minifier renamed the variable", "The payload the API is sending now"],
            answer: 3, explain: "When code that hasn't changed breaks, the input has. `tags` used to be an array and now isn't — the API changed shape under you. Log or diff the actual response against the shape your code expects before touching the code that reads it." },
          { q: "`document.querySelectorAll(\"add\")` finds nothing. Why is there no error?",
            choices: ["Errors thrown inside querySelectorAll are always hidden from the console", "An empty list is a valid result; forEach just runs zero times", "The browser adds the missing dot automatically", "It throws, but only once the page has fully loaded"],
            answer: 1, explain: "\"add\" is a valid selector — for `<add>` elements — so the query succeeds and returns an empty NodeList. Looping over an empty list does nothing, quietly. That's why a wrong selector is one of the hardest bugs to notice: the symptom is only that nothing happens." },
          { q: "A script in `<head>` does `document.querySelector(\"#form\").addEventListener(...)` and throws. Why?",
            choices: ["`#form` must be written without the hash", "`addEventListener` is not available until the window load event", "The body hasn't been parsed yet, so the query returns null", "Scripts in the head run in a separate sandbox"],
            answer: 2, explain: "The browser runs a head script the moment it reaches it, before it has read the body, so no `#form` exists yet and querySelector returns null. The TypeError points at the addEventListener line, but the cause is the script's position — move it to the end of body, add `defer`, or wait for DOMContentLoaded." },
          { q: "What happens if a form's submit handler forgets `event.preventDefault()`?",
            choices: ["The handler never runs at all", "The form submits twice in a row", "The browser throws a TypeError at the first line of the handler", "The browser submits the form and reloads the page"],
            answer: 3, explain: "The handler does run — and then the browser performs the form's default action, navigating to the form's action URL, which reloads the page and discards everything the handler just displayed. It looks like the handler \"didn't work\" when it actually worked for a split second." }
        ]
      }
    ]
  });
})();
