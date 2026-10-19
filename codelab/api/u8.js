/* Advanced API Design — Unit 8: Two projects */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  window.CODELAB.addUnit("api", {
    id: "api-u8",
    title: "Two projects",
    icon: "🏁",
    blurb: "Build one API that uses everything, then repair one that uses none of it. The second is the job you will actually be hired to do.",
    cheat: [
      { h: "The order the guards go in", lang: "js", code: "// 1. rate limit      -> 429\n// 2. route + method   -> 404 / 405\n// 3. preconditions    -> 428 / 412\n// 4. validation       -> 422\n// 5. do the work", note: "Cheapest and most general first. A limiter that runs after validation has already done the work you were trying to refuse." },
      { h: "Every failure is a problem document", lang: "js", code: "problem({ type: BASE + \"rate-limited\",\n  title: \"Too many requests\", status: 429 })\n// Content-Type: application/problem+json", note: "One shape for every refusal, with a type the client can branch on. The successes stay application/json." },
      { h: "Reading a broken API", lang: "js", code: "// What status?   -> is it the right one?\n// What headers?  -> is anything MISSING?\n// Retry it       -> does it change anything?\n// Race it        -> do two writes both land?", note: "Most API faults are invisible in a single happy-path request. You find them by repeating the request, or by sending two." },
      { h: "A missing header is a bug", lang: "js", code: "// 405 with no Allow\n// 429 with no Retry-After\n// 201 with no Location\n// a write path with no ETag", note: "Each one is a response that tells the client it failed without telling it what to do — which is the specific failure this course exists to prevent." }
    ],
    lessons: [

      /* ---------- api-u8-p1 ---------- */
      {
        id: "api-u8-p1",
        title: "Ship it: one resource, every rule",
        kind: "js", chip: "API", xp: 40, mins: 30,
        project: true,
        clock: 1780272000000,
        crypto: true,
        brief: "Everything this course has taught, on one resource, written from scratch.\n\n`/api/tasks` must behave like an API you would hand to a paying customer:\n\n| Request | Answer |\n|---|---|\n| `GET /api/tasks?limit=N` | `200`, `{ items }`, plus a `Link … rel=\"next\"` while more remain |\n| `POST /api/tasks` | `201` + `Location` + `ETag`; `Idempotency-Key` makes a retry safe |\n| `GET /api/tasks/:id` | `200` + `ETag`, or a `404` problem document |\n| `PUT /api/tasks/:id` | needs `If-Match` — `428` without one, `412` if stale |\n| anything, too often | `429` + `Retry-After` |\n| wrong verb | `405` + `Allow` |\n\nTwo rules tie it together:\n\n- **Every failure is a problem document** (`application/problem+json`, with a `type`). Successes stay `application/json`.\n- **The guards run cheapest-first**: rate limit, then routing, then preconditions, then validation, then the work. A limiter that runs last has already done the work it was supposed to refuse.\n\nThe helpers are given. The routing and the order are yours.",
        steps: [
          { text: "Reads: a cursor-paginated collection with a `Link` header, and single tasks carrying an `ETag`. Missing tasks are problem documents.",
            test: R`
T.expect(typeof handleRequest === 'function', 'Define handleRequest(req).');
reset();
const p1 = handleRequest({ method: "GET", path: "/api/tasks", query: { limit: "2" }, headers: {} });
T.eq(p1.status, 200, 'the collection answers 200');
T.eq(p1.body.items.map(t => t.id), [3, 2], 'newest first, two of them');
T.expect(typeof p1.headers["Link"] === 'string', 'more remain, so there is a next link');
const token = p1.headers["Link"].split("cursor=")[1].split(">")[0];
const p2 = handleRequest({ method: "GET", path: "/api/tasks", query: { limit: "2", cursor: token }, headers: {} });
T.eq(p2.body.items.map(t => t.id), [1], 'following it reaches the last task');
T.expect(p2.headers["Link"] === undefined, 'and the last page omits the link');
const one = handleRequest({ method: "GET", path: "/api/tasks/1", headers: {} });
T.eq(one.status, 200, 'a single task reads');
T.expect(/^"[0-9a-f]{64}"$/.test(one.headers["ETag"]), 'and carries an ETag');
const missing = handleRequest({ method: "GET", path: "/api/tasks/99", headers: {} });
T.eq(missing.status, 404, 'a missing task is a 404');
T.eq(missing.headers["Content-Type"], "application/problem+json", 'as a problem document');
T.eq(missing.body.type, "https://api.shop.dev/problems/not-found", 'with a type the client can branch on');
` },
          { text: "Creates: `201` with `Location` and `ETag`, validation failures as `422` problem documents, and an `Idempotency-Key` that makes a retry safe.",
            test: R`
reset();
const made = handleRequest({ method: "POST", path: "/api/tasks", headers: { "Idempotency-Key": "k1" }, body: { title: "write it up" } });
T.eq(made.status, 201, 'a valid create is a 201');
T.eq(made.headers["Location"], "/api/tasks/" + made.body.id, 'with a Location pointing at it');
T.expect(/^"[0-9a-f]{64}"$/.test(made.headers["ETag"]), 'and an ETag');
const retry = handleRequest({ method: "POST", path: "/api/tasks", headers: { "Idempotency-Key": "k1" }, body: { title: "write it up" } });
T.eq(retry.body.id, made.body.id, 'the same key replays the original response rather than creating a second task');
T.eq(countTasks(), 4, 'so there are still only four tasks — three seeded plus one created');
const bad = handleRequest({ method: "POST", path: "/api/tasks", headers: { "Idempotency-Key": "k2" }, body: { title: "" } });
T.eq(bad.status, 422, 'an empty title parsed fine and broke a rule — 422, not 400');
T.eq(bad.headers["Content-Type"], "application/problem+json", 'as a problem document');
T.eq(bad.body.errors, [{ field: "title", message: "must not be empty" }], 'with the field error in an extension member');
` },
          { text: "Writes are conditional, wrong verbs carry `Allow`, and the limiter refuses with `Retry-After` before any work happens.",
            test: R`
reset();
const read = handleRequest({ method: "GET", path: "/api/tasks/1", headers: {} });
T.eq(handleRequest({ method: "PUT", path: "/api/tasks/1", headers: {}, body: { title: "x" } }).status, 428, 'a PUT with no If-Match is refused');
T.eq(handleRequest({ method: "PUT", path: "/api/tasks/1", headers: { "If-Match": '"stale"' }, body: { title: "x" } }).status, 412, 'a stale validator is a 412');
const ok = handleRequest({ method: "PUT", path: "/api/tasks/1", headers: { "If-Match": read.headers["ETag"] }, body: { title: "renamed" } });
T.eq(ok.status, 200, 'the current validator lets it through');
T.eq(ok.body.title, "renamed", 'and the write landed');
const wrongVerb = handleRequest({ method: "DELETE", path: "/api/tasks", headers: {} });
T.eq(wrongVerb.status, 405, 'DELETE on the collection is a 405');
T.eq(wrongVerb.headers["Allow"], "GET, POST", 'carrying the methods that would have worked');
reset();
for (let i = 0; i < 10; i++) handleRequest({ method: "GET", path: "/api/tasks", query: {}, headers: {} });
const limited = handleRequest({ method: "GET", path: "/api/tasks", query: {}, headers: {} });
T.eq(limited.status, 429, 'past the limit, requests are refused');
T.expect(/^[0-9]+$/.test(limited.headers["Retry-After"]), 'with Retry-After in whole seconds');
T.eq(limited.headers["Content-Type"], "application/problem+json", 'and the refusal is a problem document too');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// /api/tasks — everything this course has taught, on one resource.",
            "//",
            "// Guard order matters: rate limit, then route/method, then",
            "// preconditions, then validation, then the work.",
            "",
            "const BASE = \"https://api.shop.dev/problems/\";",
            "const LIMIT = 10, WINDOW = 60 * 1000;",
            "",
            "let tasks, nextId, keys, hits;",
            "function reset() {",
            "  tasks = [",
            "    { id: 3, title: \"ship it\" },",
            "    { id: 2, title: \"review it\" },",
            "    { id: 1, title: \"write it\" }",
            "  ];",
            "  nextId = 4; keys = new Map(); hits = [];",
            "}",
            "reset();",
            "",
            "function countTasks() { return tasks.length; }",
            "function etagFor(t) { return '\"' + sha256(JSON.stringify(t)) + '\"'; }",
            "function encodeCursor(c) { return btoa(JSON.stringify(c)); }",
            "function decodeCursor(s) { return JSON.parse(atob(s)); }",
            "",
            "function json(status, body, headers) {",
            "  return { status: status,",
            "    headers: Object.assign({ \"Content-Type\": \"application/json\" }, headers || {}),",
            "    body: body };",
            "}",
            "",
            "function problem(spec) {",
            "  const body = { type: spec.type, title: spec.title, status: spec.status };",
            "  if (spec.detail !== undefined) body.detail = spec.detail;",
            "  if (spec.errors !== undefined) body.errors = spec.errors;",
            "  return { status: spec.status,",
            "    headers: Object.assign({ \"Content-Type\": \"application/problem+json\" }, spec.headers || {}),",
            "    body: body };",
            "}",
            "",
            "function overLimit() {",
            "  // sliding window: drop hits older than now() - WINDOW, refuse at LIMIT,",
            "  // and do NOT record a refused request",
            "}",
            "",
            "function handleRequest(req) {",
            "  // 1) overLimit()                -> 429 problem + Retry-After",
            "  // 2) /api/tasks                 -> GET (cursor page + Link) | POST | else 405 + Allow",
            "  // 3) /api/tasks/:id             -> GET (+ETag) | PUT (If-Match) | else 405 + Allow",
            "  // 4) anything else              -> 404 problem",
            "}",
            "") }
        ],
        hints: [
          "`overLimit` is unit 6's sliding log with one key: `const cutoff = now() - WINDOW; hits = hits.filter(t => t > cutoff); if (hits.length >= LIMIT) return true; hits.push(now()); return false;`",
          "Page with the id as the cursor, since ids are unique here: `const after = cur === null ? tasks : tasks.filter(t => t.id < cur.id); const items = after.slice(0, limit);` then add the Link only when `after.length > items.length`.",
          "The idempotency check goes at the very top of the POST branch, before validation — a replay must not re-run the rules: `const key = req.headers[\"Idempotency-Key\"]; if (key && keys.has(key)) return keys.get(key);`",
          "The PUT guards are three in a row: `if (!found) return problem({ type: BASE + \"not-found\", …, status: 404 });` then `if (req.headers[\"If-Match\"] === undefined) return problem({ …, status: 428 });` then `if (req.headers[\"If-Match\"] !== etagFor(found)) return problem({ …, status: 412 });`",
          "`Retry-After` from a sliding log is how long until the oldest hit ages out: `Math.ceil((hits[0] + WINDOW - now()) / 1000)`."
        ],
        solution: {
          "script.js": L(
            "// /api/tasks — everything this course has taught, on one resource.",
            "//",
            "// Guard order matters: rate limit, then route/method, then",
            "// preconditions, then validation, then the work.",
            "",
            "const BASE = \"https://api.shop.dev/problems/\";",
            "const LIMIT = 10, WINDOW = 60 * 1000;",
            "",
            "let tasks, nextId, keys, hits;",
            "function reset() {",
            "  tasks = [",
            "    { id: 3, title: \"ship it\" },",
            "    { id: 2, title: \"review it\" },",
            "    { id: 1, title: \"write it\" }",
            "  ];",
            "  nextId = 4; keys = new Map(); hits = [];",
            "}",
            "reset();",
            "",
            "function countTasks() { return tasks.length; }",
            "function etagFor(t) { return '\"' + sha256(JSON.stringify(t)) + '\"'; }",
            "function encodeCursor(c) { return btoa(JSON.stringify(c)); }",
            "function decodeCursor(s) { return JSON.parse(atob(s)); }",
            "",
            "function json(status, body, headers) {",
            "  return { status: status,",
            "    headers: Object.assign({ \"Content-Type\": \"application/json\" }, headers || {}),",
            "    body: body };",
            "}",
            "",
            "function problem(spec) {",
            "  const body = { type: spec.type, title: spec.title, status: spec.status };",
            "  if (spec.detail !== undefined) body.detail = spec.detail;",
            "  if (spec.errors !== undefined) body.errors = spec.errors;",
            "  return { status: spec.status,",
            "    headers: Object.assign({ \"Content-Type\": \"application/problem+json\" }, spec.headers || {}),",
            "    body: body };",
            "}",
            "",
            "function overLimit() {",
            "  const cutoff = now() - WINDOW;",
            "  hits = hits.filter(function (t) { return t > cutoff; });",
            "  if (hits.length >= LIMIT) return true;",
            "  hits.push(now());",
            "  return false;",
            "}",
            "",
            "function notFound() {",
            "  return problem({ type: BASE + \"not-found\", title: \"Not found\", status: 404 });",
            "}",
            "",
            "function notAllowed(allow) {",
            "  return problem({ type: BASE + \"method-not-allowed\", title: \"Method not allowed\",",
            "    status: 405, headers: { \"Allow\": allow } });",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (overLimit()) {",
            "    return problem({",
            "      type: BASE + \"rate-limited\", title: \"Too many requests\", status: 429,",
            "      headers: { \"Retry-After\": String(Math.ceil((hits[0] + WINDOW - now()) / 1000)) }",
            "    });",
            "  }",
            "",
            "  if (req.path === \"/api/tasks\") {",
            "    if (req.method === \"GET\") {",
            "      const q = req.query || {};",
            "      const limit = Number(q.limit) || 20;",
            "      const cur = q.cursor ? decodeCursor(q.cursor) : null;",
            "      const after = cur === null ? tasks : tasks.filter(function (t) { return t.id < cur.id; });",
            "      const items = after.slice(0, limit);",
            "      const headers = {};",
            "      if (after.length > items.length) {",
            "        const last = items[items.length - 1];",
            "        headers[\"Link\"] = \"</api/tasks?limit=\" + limit +",
            "          \"&cursor=\" + encodeCursor({ id: last.id }) + \">; rel=\\\"next\\\"\";",
            "      }",
            "      return json(200, { items: items }, headers);",
            "    }",
            "",
            "    if (req.method === \"POST\") {",
            "      const key = req.headers[\"Idempotency-Key\"];",
            "      if (key && keys.has(key)) return keys.get(key);",
            "",
            "      const title = (req.body || {}).title;",
            "      if (!title) {",
            "        return problem({",
            "          type: BASE + \"validation-failed\", title: \"Validation failed\", status: 422,",
            "          errors: [{ field: \"title\", message: \"must not be empty\" }]",
            "        });",
            "      }",
            "      const created = { id: nextId++, title: title };",
            "      tasks.unshift(created);",
            "      const res = json(201, created, {",
            "        \"Location\": \"/api/tasks/\" + created.id,",
            "        \"ETag\": etagFor(created)",
            "      });",
            "      if (key) keys.set(key, res);",
            "      return res;",
            "    }",
            "    return notAllowed(\"GET, POST\");",
            "  }",
            "",
            "  if (req.path.indexOf(\"/api/tasks/\") === 0) {",
            "    const id = Number(req.path.split(\"/\")[3]);",
            "    const found = tasks.find(function (t) { return t.id === id; });",
            "",
            "    if (req.method === \"GET\") {",
            "      if (!found) return notFound();",
            "      return json(200, found, { \"ETag\": etagFor(found) });",
            "    }",
            "",
            "    if (req.method === \"PUT\") {",
            "      if (!found) return notFound();",
            "      const ifMatch = req.headers[\"If-Match\"];",
            "      if (ifMatch === undefined) {",
            "        return problem({ type: BASE + \"precondition-required\",",
            "          title: \"Precondition required\", status: 428 });",
            "      }",
            "      if (ifMatch !== etagFor(found)) {",
            "        return problem({ type: BASE + \"precondition-failed\",",
            "          title: \"Precondition failed\", status: 412 });",
            "      }",
            "      const title = (req.body || {}).title;",
            "      if (!title) {",
            "        return problem({",
            "          type: BASE + \"validation-failed\", title: \"Validation failed\", status: 422,",
            "          errors: [{ field: \"title\", message: \"must not be empty\" }]",
            "        });",
            "      }",
            "      found.title = title;",
            "      return json(200, found, { \"ETag\": etagFor(found) });",
            "    }",
            "    return notAllowed(\"GET, PUT\");",
            "  }",
            "",
            "  return notFound();",
            "}",
            "")
        }
      },

      /* ---------- api-u8-p2 ---------- */
      {
        id: "api-u8-p2",
        title: "Fix it: six faults, found from the responses",
        kind: "js", chip: "API", xp: 40, mins: 30,
        project: true,
        clock: 1780272000000,
        crypto: true,
        brief: "A colleague hands you `/api/notes`. It works. Every happy-path request returns what you would expect, and a smoke test would pass it.\n\nIt has **six** faults, one from each unit of this course:\n\n1. a wrong verb answers `404` instead of `405`, and never says what *is* allowed\n2. errors are bare strings served as `application/json`, so a client cannot branch on anything\n3. the collection paginates by **offset**, so an insert mid-scroll shows a note twice\n4. `PUT` takes no precondition at all — two writers silently clobber each other\n5. `POST` ignores `Idempotency-Key`, so a retried create makes a second note\n6. the limiter returns `429` with no `Retry-After`, so every client has to guess\n\nNone of them show up in a single happy-path request. You find them the way you find them in real life: send the request **twice**, send **two** of them, or look at what is **missing** from a response.\n\nFix all six. The helpers you need are already in the file.",
        steps: [
          { text: "Faults 1 and 2: a wrong verb is a `405` carrying `Allow`, and every failure is a problem document with a `type`.",
            test: R`
reset();
const wrong = handleRequest({ method: "DELETE", path: "/api/notes", headers: {}, query: {} });
T.eq(wrong.status, 405, 'fault 1: a wrong verb on the collection is a 405, not a 404');
T.eq(wrong.headers["Allow"], "GET, POST", 'and it must say which methods would have worked');
const missing = handleRequest({ method: "GET", path: "/api/notes/999", headers: {}, query: {} });
T.eq(missing.status, 404, 'a genuinely missing note is still a 404');
T.eq(missing.headers["Content-Type"], "application/problem+json", 'fault 2: errors are problem documents');
T.expect(typeof missing.body.type === 'string', 'with a type URI');
T.eq(missing.body.status, 404, 'and the status repeated in the body');
T.eq(handleRequest({ method: "GET", path: "/api/notes", headers: {}, query: {} }).headers["Content-Type"], "application/json", 'while a SUCCESS stays ordinary application/json');
` },
          { text: "Faults 3 and 4: pagination survives an insert, and a `PUT` without a current validator is refused.",
            test: R`
reset();
const page1 = handleRequest({ method: "GET", path: "/api/notes", headers: {}, query: { limit: "2" } });
T.eq(page1.body.items.map(n => n.id), [5, 4], 'the two newest notes');
addNote("barged in");
const cursor = page1.headers["Link"].split("cursor=")[1].split(">")[0];
const page2 = handleRequest({ method: "GET", path: "/api/notes", headers: {}, query: { limit: "2", cursor: cursor } });
T.eq(page2.body.items.map(n => n.id), [3, 2], 'fault 3: after an insert, page 2 continues cleanly instead of repeating note 4');
T.expect(page2.body.items.every(n => !page1.body.items.some(p => p.id === n.id)), 'nothing appears on both pages');
reset();
const read = handleRequest({ method: "GET", path: "/api/notes/1", headers: {}, query: {} });
T.eq(handleRequest({ method: "PUT", path: "/api/notes/1", headers: {}, query: {}, body: { text: "x" } }).status, 428, 'fault 4: an unconditional PUT is refused');
T.eq(handleRequest({ method: "PUT", path: "/api/notes/1", headers: { "If-Match": '"old"' }, query: {}, body: { text: "x" } }).status, 412, 'a stale validator is a 412');
T.eq(handleRequest({ method: "PUT", path: "/api/notes/1", headers: { "If-Match": read.headers["ETag"] }, query: {}, body: { text: "fixed" } }).status, 200, 'and a current one is accepted');
` },
          { text: "Faults 5 and 6: a retried create makes one note, and a refusal says when to come back.",
            test: R`
reset();
const before = countNotes();
const made = handleRequest({ method: "POST", path: "/api/notes", headers: { "Idempotency-Key": "abc" }, query: {}, body: { text: "once" } });
T.eq(made.status, 201, 'the create succeeds');
const again = handleRequest({ method: "POST", path: "/api/notes", headers: { "Idempotency-Key": "abc" }, query: {}, body: { text: "once" } });
T.eq(countNotes(), before + 1, 'fault 5: the retry created nothing — one note, not two');
T.eq(again.body.id, made.body.id, 'and replayed the original response');
reset();
for (let i = 0; i < 10; i++) handleRequest({ method: "GET", path: "/api/notes", headers: {}, query: {} });
const limited = handleRequest({ method: "GET", path: "/api/notes", headers: {}, query: {} });
T.eq(limited.status, 429, 'the limiter still refuses past the limit');
T.expect(/^[0-9]+$/.test(limited.headers["Retry-After"]), 'fault 6: and now says how many seconds to wait');
T.eq(limited.headers["Content-Type"], "application/problem+json", 'as a problem document like every other failure');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// /api/notes — it works, and it has six faults. One per unit.",
            "//",
            "// Nothing here fails a happy-path request. Send one twice, send two",
            "// at once, or look at what is MISSING from a response.",
            "",
            "const BASE = \"https://api.shop.dev/problems/\";",
            "const LIMIT = 10, WINDOW = 60 * 1000;",
            "",
            "let notes, nextId, keys, hits;",
            "function reset() {",
            "  notes = [5, 4, 3, 2, 1].map(function (i) { return { id: i, text: \"note \" + i }; });",
            "  nextId = 6; keys = new Map(); hits = [];",
            "}",
            "reset();",
            "",
            "function countNotes() { return notes.length; }",
            "function addNote(text) { notes.unshift({ id: nextId++, text: text }); }",
            "function etagFor(n) { return '\"' + sha256(JSON.stringify(n)) + '\"'; }",
            "function encodeCursor(c) { return btoa(JSON.stringify(c)); }",
            "function decodeCursor(s) { return JSON.parse(atob(s)); }",
            "",
            "function json(status, body, headers) {",
            "  return { status: status,",
            "    headers: Object.assign({ \"Content-Type\": \"application/json\" }, headers || {}),",
            "    body: body };",
            "}",
            "",
            "/* Available, and currently unused by the broken code. */",
            "function problem(spec) {",
            "  const body = { type: spec.type, title: spec.title, status: spec.status };",
            "  if (spec.errors !== undefined) body.errors = spec.errors;",
            "  return { status: spec.status,",
            "    headers: Object.assign({ \"Content-Type\": \"application/problem+json\" }, spec.headers || {}),",
            "    body: body };",
            "}",
            "",
            "function overLimit() {",
            "  const cutoff = now() - WINDOW;",
            "  hits = hits.filter(function (t) { return t > cutoff; });",
            "  if (hits.length >= LIMIT) return true;",
            "  hits.push(now());",
            "  return false;",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (overLimit()) {",
            "    // FAULT 6: no Retry-After, and not a problem document",
            "    return json(429, { error: \"too many requests\" });",
            "  }",
            "",
            "  if (req.path === \"/api/notes\") {",
            "    if (req.method === \"GET\") {",
            "      // FAULT 3: offset pagination — an insert above the window",
            "      // shifts every row down and page 2 repeats one",
            "      const limit = Number(req.query.limit) || 20;",
            "      const page = Number(req.query.page) || 1;",
            "      const start = (page - 1) * limit;",
            "      const items = notes.slice(start, start + limit);",
            "      const headers = {};",
            "      if (start + limit < notes.length) {",
            "        headers[\"Link\"] = \"</api/notes?limit=\" + limit + \"&page=\" + (page + 1) + \">; rel=\\\"next\\\"\";",
            "      }",
            "      return json(200, { items: items }, headers);",
            "    }",
            "",
            "    if (req.method === \"POST\") {",
            "      // FAULT 5: Idempotency-Key is never looked at",
            "      const created = { id: nextId++, text: req.body.text };",
            "      notes.unshift(created);",
            "      return json(201, created, { \"Location\": \"/api/notes/\" + created.id });",
            "    }",
            "",
            "    // FAULT 1: a wrong verb 404s, and never says what IS allowed",
            "    return json(404, { error: \"not found\" });",
            "  }",
            "",
            "  if (req.path.indexOf(\"/api/notes/\") === 0) {",
            "    const id = Number(req.path.split(\"/\")[3]);",
            "    const found = notes.find(function (n) { return n.id === id; });",
            "    // FAULT 2: a bare string error, served as application/json",
            "    if (!found) return json(404, { error: \"not found\" });",
            "",
            "    if (req.method === \"GET\") return json(200, found, { \"ETag\": etagFor(found) });",
            "",
            "    if (req.method === \"PUT\") {",
            "      // FAULT 4: no precondition — two writers clobber each other",
            "      found.text = req.body.text;",
            "      return json(200, found, { \"ETag\": etagFor(found) });",
            "    }",
            "    return json(404, { error: \"not found\" });",
            "  }",
            "",
            "  return json(404, { error: \"not found\" });",
            "}",
            "") }
        ],
        hints: [
          "Fault 1 and the item-route equivalent: replace the trailing `json(404, …)` in each branch with a 405 that carries the right list — `problem({ type: BASE + \"method-not-allowed\", title: \"Method not allowed\", status: 405, headers: { Allow: \"GET, POST\" } })` for the collection, `\"GET, PUT\"` for an item.",
          "Fault 3: swap offset for a cursor on the id, exactly as in unit 3 — `const cur = req.query.cursor ? decodeCursor(req.query.cursor) : null; const after = cur === null ? notes : notes.filter(n => n.id < cur.id); const items = after.slice(0, limit);` and emit the Link only when `after.length > items.length`.",
          "Fault 4: the two guards go before the write — `if (req.headers[\"If-Match\"] === undefined) return problem({ …, status: 428 });` then `if (req.headers[\"If-Match\"] !== etagFor(found)) return problem({ …, status: 412 });`",
          "Fault 5: check and store around the create — `const key = req.headers[\"Idempotency-Key\"]; if (key && keys.has(key)) return keys.get(key);` at the top, and `if (key) keys.set(key, res);` before returning.",
          "Fault 6: `Retry-After` is when the oldest hit ages out — `String(Math.ceil((hits[0] + WINDOW - now()) / 1000))` — and the refusal becomes a `problem({ type: BASE + \"rate-limited\", … })` like every other failure."
        ],
        solution: {
          "script.js": L(
            "// /api/notes — all six faults fixed.",
            "",
            "const BASE = \"https://api.shop.dev/problems/\";",
            "const LIMIT = 10, WINDOW = 60 * 1000;",
            "",
            "let notes, nextId, keys, hits;",
            "function reset() {",
            "  notes = [5, 4, 3, 2, 1].map(function (i) { return { id: i, text: \"note \" + i }; });",
            "  nextId = 6; keys = new Map(); hits = [];",
            "}",
            "reset();",
            "",
            "function countNotes() { return notes.length; }",
            "function addNote(text) { notes.unshift({ id: nextId++, text: text }); }",
            "function etagFor(n) { return '\"' + sha256(JSON.stringify(n)) + '\"'; }",
            "function encodeCursor(c) { return btoa(JSON.stringify(c)); }",
            "function decodeCursor(s) { return JSON.parse(atob(s)); }",
            "",
            "function json(status, body, headers) {",
            "  return { status: status,",
            "    headers: Object.assign({ \"Content-Type\": \"application/json\" }, headers || {}),",
            "    body: body };",
            "}",
            "",
            "function problem(spec) {",
            "  const body = { type: spec.type, title: spec.title, status: spec.status };",
            "  if (spec.errors !== undefined) body.errors = spec.errors;",
            "  return { status: spec.status,",
            "    headers: Object.assign({ \"Content-Type\": \"application/problem+json\" }, spec.headers || {}),",
            "    body: body };",
            "}",
            "",
            "function notFound() {",
            "  return problem({ type: BASE + \"not-found\", title: \"Not found\", status: 404 });",
            "}",
            "function notAllowed(allow) {",
            "  return problem({ type: BASE + \"method-not-allowed\", title: \"Method not allowed\",",
            "    status: 405, headers: { \"Allow\": allow } });",
            "}",
            "",
            "function overLimit() {",
            "  const cutoff = now() - WINDOW;",
            "  hits = hits.filter(function (t) { return t > cutoff; });",
            "  if (hits.length >= LIMIT) return true;",
            "  hits.push(now());",
            "  return false;",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (overLimit()) {",
            "    // FIX 6: a problem document that says when to come back.",
            "    return problem({",
            "      type: BASE + \"rate-limited\", title: \"Too many requests\", status: 429,",
            "      headers: { \"Retry-After\": String(Math.ceil((hits[0] + WINDOW - now()) / 1000)) }",
            "    });",
            "  }",
            "",
            "  if (req.path === \"/api/notes\") {",
            "    if (req.method === \"GET\") {",
            "      // FIX 3: a cursor on the id, so an insert cannot shift the window.",
            "      const limit = Number(req.query.limit) || 20;",
            "      const cur = req.query.cursor ? decodeCursor(req.query.cursor) : null;",
            "      const after = cur === null ? notes : notes.filter(function (n) { return n.id < cur.id; });",
            "      const items = after.slice(0, limit);",
            "      const headers = {};",
            "      if (after.length > items.length) {",
            "        const last = items[items.length - 1];",
            "        headers[\"Link\"] = \"</api/notes?limit=\" + limit +",
            "          \"&cursor=\" + encodeCursor({ id: last.id }) + \">; rel=\\\"next\\\"\";",
            "      }",
            "      return json(200, { items: items }, headers);",
            "    }",
            "",
            "    if (req.method === \"POST\") {",
            "      // FIX 5: replay the stored response for a repeated key.",
            "      const key = req.headers[\"Idempotency-Key\"];",
            "      if (key && keys.has(key)) return keys.get(key);",
            "",
            "      const created = { id: nextId++, text: req.body.text };",
            "      notes.unshift(created);",
            "      const res = json(201, created, {",
            "        \"Location\": \"/api/notes/\" + created.id,",
            "        \"ETag\": etagFor(created)",
            "      });",
            "      if (key) keys.set(key, res);",
            "      return res;",
            "    }",
            "",
            "    // FIX 1: 405, and say what would have worked.",
            "    return notAllowed(\"GET, POST\");",
            "  }",
            "",
            "  if (req.path.indexOf(\"/api/notes/\") === 0) {",
            "    const id = Number(req.path.split(\"/\")[3]);",
            "    const found = notes.find(function (n) { return n.id === id; });",
            "    // FIX 2: every failure is a problem document.",
            "    if (!found) return notFound();",
            "",
            "    if (req.method === \"GET\") return json(200, found, { \"ETag\": etagFor(found) });",
            "",
            "    if (req.method === \"PUT\") {",
            "      // FIX 4: the write is conditional.",
            "      const ifMatch = req.headers[\"If-Match\"];",
            "      if (ifMatch === undefined) {",
            "        return problem({ type: BASE + \"precondition-required\",",
            "          title: \"Precondition required\", status: 428 });",
            "      }",
            "      if (ifMatch !== etagFor(found)) {",
            "        return problem({ type: BASE + \"precondition-failed\",",
            "          title: \"Precondition failed\", status: 412 });",
            "      }",
            "      found.text = req.body.text;",
            "      return json(200, found, { \"ETag\": etagFor(found) });",
            "    }",
            "    return notAllowed(\"GET, PUT\");",
            "  }",
            "",
            "  return notFound();",
            "}",
            "")
        }
      },

      /* ---------- api-quiz-8 ---------- */
      {
        id: "api-quiz-8",
        title: "Unit 8 quiz: putting it together",
        kind: "quiz", chip: "API", xp: 20, mins: 6,
        questions: [
          {
            q: "Why should the rate-limit check run before routing, validation and the work itself?",
            choices: [
              "Because a limiter that runs later has already spent the resources it was supposed to protect",
              "Because routing can only be performed once the client's remaining quota is known",
              "Because a 429 must be returned before the request body has been parsed, by specification",
              "Because validation errors would otherwise mask the 429 and the client would retry immediately"
            ],
            answer: 0,
            explain: "The point of a limiter is to refuse work cheaply. Validating a body and hitting a datastore before deciding to refuse means an abusive client still costs you almost everything a served request would. Nothing in HTTP mandates the ordering — it is simply the only order that achieves the goal."
          },
          {
            q: "In the \"fix it\" project, why does none of the six faults show up in a single happy-path request?",
            choices: [
              "Because each one only triggers under concurrent load from more than one client",
              "Because each is about a repeated request, a second writer, or a header that is missing rather than wrong",
              "Because the faults are in error paths, which a happy-path request never reaches",
              "Because the server caches the first response, hiding the faults until the cache expires"
            ],
            answer: 1,
            explain: "A duplicate create needs the request sent twice; a lost update needs two writers; a missing `Allow` or `Retry-After` is an absence rather than a wrong value. That is exactly why they survive smoke tests — and why reading an API means repeating requests and checking what is not there."
          },
          {
            q: "A `POST` arrives with an `Idempotency-Key` that has been seen, and a body that fails validation. What should happen?",
            choices: [
              "Validate first and return 422, since an invalid body must never be accepted",
              "Replay the stored response without re-running validation, because the key names a completed operation",
              "Return 409, because the key is in use by an operation with different content",
              "Create the resource anyway, since the stored response proves an identical body was valid before"
            ],
            answer: 1,
            explain: "A replay is the client asking \"what happened to the request I already sent?\". Re-running the rules could answer differently than the first time — and if the body genuinely differs from the original, the fingerprint check catches that separately. Validating ahead of the replay check is a real ordering bug."
          },
          {
            q: "Your API returns `application/problem+json` for errors. What should a successful 200 return?",
            choices: [
              "`application/problem+json` as well, so clients only ever need to parse one media type",
              "`application/json` — problem+json describes a problem, and a success is not one",
              "`application/problem+json` with an empty `type`, signalling the absence of a problem",
              "Whichever the client requested in `Accept`, since success responses are negotiable"
            ],
            answer: 1,
            explain: "The media type is the signal: seeing `application/problem+json` tells a client the body is a problem document without inspecting it. Using it for successes destroys that signal. A success body is just your resource, in ordinary JSON."
          },
          {
            q: "You find a `405` response that carries no `Allow` header. Why does that count as a bug rather than a cosmetic omission?",
            choices: [
              "Because without `Allow` the status is indistinguishable from a 404 to most HTTP clients",
              "Because the response tells the client it was wrong without telling it what would be right",
              "Because RFC 9110 states that a 405 without `Allow` must be treated as a 500 by clients",
              "Because caches cannot store a 405 response unless an `Allow` header is present"
            ],
            answer: 1,
            explain: "It is the same failure every missing header in this course causes: a refusal that carries no instructions. The client knows the verb was wrong and has to guess which one is right, which usually means reading your source or trying all of them. RFC 9110 does require `Allow` here, but nothing reclassifies the response."
          },
          {
            q: "Which single change would do most to make a CRUD API safe for a client that retries on timeout?",
            choices: [
              "Making every endpoint idempotent by converting POST creates into PUTs at client-chosen URLs",
              "Accepting an `Idempotency-Key` on unsafe requests and replaying the stored response",
              "Returning `Retry-After` on every 5xx so the client knows exactly when to try again",
              "Adding `ETag` to every response so retried requests can be deduplicated by content"
            ],
            answer: 1,
            explain: "It addresses the actual problem — the client cannot tell a lost request from a lost response — without redesigning the URL scheme. Client-chosen PUT URLs do work and are a much larger change. `Retry-After` tells a client when to retry, not whether the retry is safe, and an ETag describes a resource rather than an operation."
          }
        ]
      }
    ]
  });
})();
