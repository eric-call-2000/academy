/* Advanced API Design — Unit 1: The response is more than a body */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  /* The resource every lesson in this unit answers for. Small on purpose:
     the subject is the envelope, not the data. */
  var WIDGETS = L(
    "const widgets = [",
    "  { id: 1, name: \"sprocket\" },",
    "  { id: 2, name: \"flange\" }",
    "];",
    "let nextId = 3;",
    "");

  window.CODELAB.addUnit("api", {
    id: "api-u1",
    title: "The response is more than a body",
    icon: "📬",
    blurb: "Back-End Foundations stopped at { status, body }. Every remaining topic in this course — caching, concurrency, retries, limits, versioning — is carried in the field it left out.",
    cheat: [
      { h: "The response, widened", lang: "js", code: "{\n  status: 200,\n  headers: { \"Content-Type\": \"application/json\" },\n  body: { id: 1, name: \"sprocket\" }\n}", note: "srv returned { status, body }. Everything this course teaches lives in headers — ETag, If-Match, Retry-After, RateLimit-*, Location, Link." },
      { h: "201 says where it went", lang: "js", code: "{ status: 201,\n  headers: {\n    \"Content-Type\": \"application/json\",\n    \"Location\": \"/api/widgets/4\"\n  },\n  body: created }", note: "The client should never have to guess the new URL or re-read it out of the body. Location IS the answer to \"where did you put it?\"." },
      { h: "204 has no content — and no Content-Type", lang: "js", code: "{ status: 204, headers: {}, body: undefined }", note: "There is no content, so there is nothing to describe. A Content-Type on a 204 is describing a body that isn't there." },
      { h: "405 must say what IS allowed", lang: "js", code: "{ status: 405,\n  headers: { \"Allow\": \"GET, POST\" },\n  body: { error: \"method not allowed\" } }", note: "RFC 9110 makes Allow mandatory on a 405. A 405 without it tells the client it was wrong but not what to do instead." },
      { h: "OPTIONS and HEAD", lang: "js", code: "// OPTIONS /api/widgets  -> 204 + Allow\n// HEAD    /api/widgets/1 -> exactly GET's status\n//                           and headers, no body", note: "HEAD is GET with the body removed — same status, same headers. It is how a client checks existence or size without paying for the payload." },
      { h: "Why not just put it in the body?", lang: "js", code: "// A cache, a proxy and a CDN read headers.\n// None of them parse your JSON.", note: "Headers are the part of the response the infrastructure between you and the client is allowed to act on. That is the whole reason the field exists." }
    ],
    lessons: [

      /* ---------- api-u1-1 ---------- */
      {
        id: "api-u1-1",
        title: "The third field",
        kind: "js", chip: "API", xp: 15, mins: 12,
        brief: "In Back-End Foundations a response was `{ status, body }`, and that was enough to build a working REST resource. It is not enough to build a *good* one.\n\nEvery topic left in this course — revalidating a cache, refusing a stale write, telling a client when to retry, publishing a rate limit, retiring a version — is carried in **headers**. So the first thing to do is widen the response:\n\n```\n{ status, headers, body }\n```\n\nStart with the header every JSON API owes its clients: `Content-Type: application/json`. Write a `json(status, body)` helper so no route can forget it, and use it everywhere — **including the errors**, which are JSON too.\n\nThen the exception that proves the rule. `204 No Content` means there is no body at all, so there is nothing to describe: a 204 carries **no** `Content-Type`.",
        steps: [
          { text: "Write `json(status, body)` so it returns `{ status, headers: { \"Content-Type\": \"application/json\" }, body }`.",
            test: R`
T.expect(typeof json === 'function', 'Define json(status, body).');
const r = json(200, { ok: true });
T.eq(r.status, 200, 'json() must pass the status straight through');
T.eq(r.body, { ok: true }, 'json() must pass the body straight through');
T.eq(r.headers, { "Content-Type": "application/json" }, 'json() must set exactly one header: Content-Type: application/json');
` },
          { text: "Route `GET /api/widgets` and `GET /api/widgets/:id` through `json()`. An unknown path is still JSON — a 404 body a client can parse beats a bare string.",
            test: R`
T.expect(typeof handleRequest === 'function', 'Define handleRequest(req).');
const list = handleRequest({ method: "GET", path: "/api/widgets" });
T.eq(list.status, 200, 'GET /api/widgets should answer 200');
T.eq(list.body, [{ id: 1, name: "sprocket" }, { id: 2, name: "flange" }], 'GET /api/widgets returns the whole collection');
T.eq(list.headers["Content-Type"], "application/json", 'the collection response needs Content-Type: application/json');
const one = handleRequest({ method: "GET", path: "/api/widgets/2" });
T.eq(one.body, { id: 2, name: "flange" }, 'GET /api/widgets/2 returns that widget');
const missing = handleRequest({ method: "GET", path: "/api/nope" });
T.eq(missing.status, 404, 'an unknown path is a 404');
T.eq(missing.headers["Content-Type"], "application/json", 'an error is JSON too — the 404 needs Content-Type as well');
` },
          { text: "Add `DELETE /api/widgets/:id` answering `204`. A 204 has no content, so it has no body and **no** `Content-Type` — there is nothing to describe.",
            test: R`
const gone = handleRequest({ method: "DELETE", path: "/api/widgets/1" });
T.eq(gone.status, 204, 'a successful DELETE with nothing to return is a 204');
T.expect(gone.body === undefined, 'a 204 must carry no body at all — leave it undefined, not null and not {}');
T.expect(gone.headers["Content-Type"] === undefined, 'a 204 has no content, so it must NOT claim a Content-Type');
T.expect(handleRequest({ method: "GET", path: "/api/widgets/1" }).status === 404, 'after the DELETE, widget 1 is really gone');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// srv returned { status, body }. This course needs the third field:",
            "// { status, headers, body } — where caching, concurrency, retries and",
            "// limits all live.",
            "",
            WIDGETS,
            "function json(status, body) {",
            "  // return { status, headers: { \"Content-Type\": \"application/json\" }, body }",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (req.method === \"GET\" && req.path === \"/api/widgets\") {",
            "    return { status: 200, body: widgets };   // <- route this through json()",
            "  }",
            "  // GET /api/widgets/:id",
            "  // DELETE /api/widgets/:id  -> 204, no body, no Content-Type",
            "  return { status: 404, body: { error: \"not found\" } };  // <- and this one",
            "}",
            "") }
        ],
        hints: [
          "`json` is one return: `return { status: status, headers: { \"Content-Type\": \"application/json\" }, body: body };`",
          "Pull the id out the way srv did: `const id = Number(req.path.split(\"/\")[3]);` — then `widgets.find(w => w.id === id)`.",
          "For the 204, build the object by hand instead of calling `json()` — `return { status: 204, headers: {}, body: undefined };` — because `json()` always sets a Content-Type and a 204 must not have one.",
          "Delete by reassigning: `widgets = widgets.filter(w => w.id !== id);` needs `widgets` to be `let`. It already is — `const widgets` would make this line throw."
        ],
        solution: {
          "script.js": L(
            "// srv returned { status, body }. This course needs the third field:",
            "// { status, headers, body } — where caching, concurrency, retries and",
            "// limits all live.",
            "",
            "let widgets = [",
            "  { id: 1, name: \"sprocket\" },",
            "  { id: 2, name: \"flange\" }",
            "];",
            "let nextId = 3;",
            "",
            "function json(status, body) {",
            "  return { status: status, headers: { \"Content-Type\": \"application/json\" }, body: body };",
            "}",
            "",
            "function noContent() {",
            "  // 204: nothing to send, so nothing to describe.",
            "  return { status: 204, headers: {}, body: undefined };",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (req.method === \"GET\" && req.path === \"/api/widgets\") {",
            "    return json(200, widgets);",
            "  }",
            "  if (req.path.startsWith(\"/api/widgets/\")) {",
            "    const id = Number(req.path.split(\"/\")[3]);",
            "    const found = widgets.find(w => w.id === id);",
            "    if (!found) return json(404, { error: \"not found\" });",
            "    if (req.method === \"GET\") return json(200, found);",
            "    if (req.method === \"DELETE\") {",
            "      widgets = widgets.filter(w => w.id !== id);",
            "      return noContent();",
            "    }",
            "  }",
            "  return json(404, { error: \"not found\" });",
            "}",
            "")
        }
      },

      /* ---------- api-u1-2 ---------- */
      {
        id: "api-u1-2",
        title: "201, and where the thing went",
        kind: "js", chip: "API", xp: 15, mins: 12,
        brief: "A `POST` that creates something answers `201 Created`. Back-End Foundations graded that much. What it never did is answer the client's actual next question: **where is it?**\n\nThat answer is the `Location` header, and it is not optional politeness. Without it the client has to guess the URL from a convention, or dig an id out of the body and build the URL itself — which means every client reimplements your routing, and the day you change it they all break.\n\nMake `POST /api/widgets` return `201`, the created record as the body, and `Location: /api/widgets/<new id>`.\n\nThe body and the header must agree. A `Location` pointing at a different id than the body reports is worse than no `Location` at all.",
        steps: [
          { text: "`POST /api/widgets` creates a widget from `req.body.name`, assigns the next id, and answers `201` with the created record as the body.",
            test: R`
const made = handleRequest({ method: "POST", path: "/api/widgets", body: { name: "cog" } });
T.eq(made.status, 201, 'a POST that creates something answers 201, not 200');
T.eq(made.body, { id: 3, name: "cog" }, 'the body is the created record, with the id the server chose');
T.eq(made.headers["Content-Type"], "application/json", 'still a JSON response');
` },
          { text: "Add `Location`, pointing at the new widget's own URL.",
            test: R`
const made = handleRequest({ method: "POST", path: "/api/widgets", body: { name: "gasket" } });
T.eq(made.headers["Location"], "/api/widgets/" + made.body.id, 'Location must be the new widget\'s URL, and must agree with the id in the body');
T.expect(/^\/api\/widgets\/\d+$/.test(made.headers["Location"]), 'Location should be a path like /api/widgets/4 — not a bare id, not a full sentence');
` },
          { text: "The URL in `Location` has to actually work: following it must return the widget that was just created.",
            test: R`
const made = handleRequest({ method: "POST", path: "/api/widgets", body: { name: "bearing" } });
const followed = handleRequest({ method: "GET", path: made.headers["Location"] });
T.eq(followed.status, 200, 'following the Location header must find the new widget');
T.eq(followed.body, made.body, 'and it must be the very record the POST reported');
const second = handleRequest({ method: "POST", path: "/api/widgets", body: { name: "shim" } });
T.expect(second.headers["Location"] !== made.headers["Location"], 'two creates must not report the same Location');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// A 201 without a Location makes every client rebuild your routing by hand.",
            "",
            "let widgets = [",
            "  { id: 1, name: \"sprocket\" },",
            "  { id: 2, name: \"flange\" }",
            "];",
            "let nextId = 3;",
            "",
            "function json(status, body, headers) {",
            "  const h = Object.assign({ \"Content-Type\": \"application/json\" }, headers || {});",
            "  return { status: status, headers: h, body: body };",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (req.method === \"GET\" && req.path === \"/api/widgets\") return json(200, widgets);",
            "",
            "  if (req.method === \"POST\" && req.path === \"/api/widgets\") {",
            "    // 1) build { id: nextId++, name: req.body.name } and push it",
            "    // 2) answer 201 with that record",
            "    // 3) add a Location header pointing at its URL",
            "  }",
            "",
            "  if (req.method === \"GET\" && req.path.startsWith(\"/api/widgets/\")) {",
            "    const id = Number(req.path.split(\"/\")[3]);",
            "    const found = widgets.find(w => w.id === id);",
            "    return found ? json(200, found) : json(404, { error: \"not found\" });",
            "  }",
            "  return json(404, { error: \"not found\" });",
            "}",
            "") }
        ],
        hints: [
          "`json()` here takes a third argument: extra headers. `return json(201, created, { Location: \"/api/widgets/\" + created.id });`",
          "Build the record first so you can reuse its id in both places: `const created = { id: nextId++, name: req.body.name }; widgets.push(created);`",
          "Build the Location from `created.id`, never from `nextId` — `nextId++` has already moved past it."
        ],
        solution: {
          "script.js": L(
            "// A 201 without a Location makes every client rebuild your routing by hand.",
            "",
            "let widgets = [",
            "  { id: 1, name: \"sprocket\" },",
            "  { id: 2, name: \"flange\" }",
            "];",
            "let nextId = 3;",
            "",
            "function json(status, body, headers) {",
            "  const h = Object.assign({ \"Content-Type\": \"application/json\" }, headers || {});",
            "  return { status: status, headers: h, body: body };",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (req.method === \"GET\" && req.path === \"/api/widgets\") return json(200, widgets);",
            "",
            "  if (req.method === \"POST\" && req.path === \"/api/widgets\") {",
            "    const created = { id: nextId++, name: req.body.name };",
            "    widgets.push(created);",
            "    return json(201, created, { \"Location\": \"/api/widgets/\" + created.id });",
            "  }",
            "",
            "  if (req.method === \"GET\" && req.path.startsWith(\"/api/widgets/\")) {",
            "    const id = Number(req.path.split(\"/\")[3]);",
            "    const found = widgets.find(w => w.id === id);",
            "    return found ? json(200, found) : json(404, { error: \"not found\" });",
            "  }",
            "  return json(404, { error: \"not found\" });",
            "}",
            "")
        }
      },

      /* ---------- api-u1-3 ---------- */
      {
        id: "api-u1-3",
        title: "Allow, OPTIONS and HEAD",
        kind: "js", chip: "API", xp: 15, mins: 12,
        brief: "`405 Method Not Allowed` tells a client it used the wrong verb. On its own that is half an answer — it never says which verb would have worked.\n\nRFC 9110 closes the gap: a 405 response **must** generate an `Allow` header listing the methods the resource does support. The client learns the right move from the failure itself.\n\nTwo more methods fall straight out of the same table:\n\n- **`OPTIONS`** asks \"what can I do here?\" and answers `204` with that same `Allow`.\n- **`HEAD`** is `GET` with the body removed — *same status, same headers, no body*. It is how a client checks whether something exists, or how big it is, without paying for the payload.\n\nThe trick to both is to build the allowed-methods list **once** and let every answer read from it, so they can never disagree.",
        steps: [
          { text: "Give the collection a method table. A verb that isn't in it answers `405` with an `Allow` header listing the ones that are.",
            test: R`
const bad = handleRequest({ method: "DELETE", path: "/api/widgets" });
T.eq(bad.status, 405, 'DELETE on the collection is not allowed');
T.eq(bad.headers["Allow"], "GET, HEAD, OPTIONS, POST", 'a 405 must list what IS allowed, comma-separated: "GET, HEAD, OPTIONS, POST"');
T.eq(handleRequest({ method: "GET", path: "/api/widgets" }).status, 200, 'the 405 branch must not swallow the real GET route');
T.eq(handleRequest({ method: "POST", path: "/api/widgets", body: { name: "cog" } }).status, 201, 'nor the real POST route');
` },
          { text: "`OPTIONS /api/widgets` answers `204` with the same `Allow` — and, being a 204, no body.",
            test: R`
const opts = handleRequest({ method: "OPTIONS", path: "/api/widgets" });
T.eq(opts.status, 204, 'OPTIONS answers 204 — the answer is entirely in the headers');
T.eq(opts.headers["Allow"], "GET, HEAD, OPTIONS, POST", 'OPTIONS reports the same list the 405 does');
T.expect(opts.body === undefined, 'a 204 carries no body');
` },
          { text: "`HEAD` must match `GET` exactly — same status, same headers — with the body stripped.",
            test: R`
const got = handleRequest({ method: "GET", path: "/api/widgets/1" });
const head = handleRequest({ method: "HEAD", path: "/api/widgets/1" });
T.eq(head.status, got.status, 'HEAD must report the same status as GET');
T.eq(head.headers, got.headers, 'HEAD must report the same headers as GET — it is GET without the body');
T.expect(head.body === undefined, 'HEAD sends no body');
const missingHead = handleRequest({ method: "HEAD", path: "/api/widgets/999" });
T.eq(missingHead.status, 404, 'HEAD on something that is not there is still a 404');
T.expect(missingHead.body === undefined, 'and a HEAD 404 still sends no body — the status IS the answer');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// A 405 that doesn't say what IS allowed tells the client it was wrong",
            "// and nothing else. RFC 9110 requires the Allow header here.",
            "",
            "let widgets = [",
            "  { id: 1, name: \"sprocket\" },",
            "  { id: 2, name: \"flange\" }",
            "];",
            "let nextId = 3;",
            "",
            "// Build this list ONCE so the 405 and the OPTIONS can never disagree.",
            "const COLLECTION_METHODS = [\"GET\", \"HEAD\", \"OPTIONS\", \"POST\"];",
            "",
            "function json(status, body, headers) {",
            "  const h = Object.assign({ \"Content-Type\": \"application/json\" }, headers || {});",
            "  return { status: status, headers: h, body: body };",
            "}",
            "",
            "function collection(req) {",
            "  if (req.method === \"GET\") return json(200, widgets);",
            "  if (req.method === \"POST\") {",
            "    const created = { id: nextId++, name: req.body.name };",
            "    widgets.push(created);",
            "    return json(201, created, { \"Location\": \"/api/widgets/\" + created.id });",
            "  }",
            "  // OPTIONS -> 204 + Allow",
            "  // anything else -> 405 + Allow",
            "}",
            "",
            "function item(req) {",
            "  const id = Number(req.path.split(\"/\")[3]);",
            "  const found = widgets.find(w => w.id === id);",
            "  return found ? json(200, found) : json(404, { error: \"not found\" });",
            "}",
            "",
            "function handleRequest(req) {",
            "  // HEAD is GET with the body removed. Handle it in ONE place, here,",
            "  // by running the GET and stripping the body off whatever comes back.",
            "  if (req.path === \"/api/widgets\") return collection(req);",
            "  if (req.path.startsWith(\"/api/widgets/\")) return item(req);",
            "  return json(404, { error: \"not found\" });",
            "}",
            "") }
        ],
        hints: [
          "`COLLECTION_METHODS.join(\", \")` is the Allow value — note the space after the comma.",
          "In `collection`, finish with `if (req.method === \"OPTIONS\") return { status: 204, headers: { Allow: COLLECTION_METHODS.join(\", \") }, body: undefined };` then a final `return json(405, { error: \"method not allowed\" }, { Allow: COLLECTION_METHODS.join(\", \") });`",
          "Do HEAD at the top of `handleRequest`: run the request again as a GET, then blank the body. `if (req.method === \"HEAD\") { const res = handleRequest(Object.assign({}, req, { method: \"GET\" })); return { status: res.status, headers: res.headers, body: undefined }; }`",
          "Because HEAD re-enters `handleRequest` as a GET, it picks up the 404 branch for free — you don't write a second one."
        ],
        solution: {
          "script.js": L(
            "// A 405 that doesn't say what IS allowed tells the client it was wrong",
            "// and nothing else. RFC 9110 requires the Allow header here.",
            "",
            "let widgets = [",
            "  { id: 1, name: \"sprocket\" },",
            "  { id: 2, name: \"flange\" }",
            "];",
            "let nextId = 3;",
            "",
            "// Build this list ONCE so the 405 and the OPTIONS can never disagree.",
            "const COLLECTION_METHODS = [\"GET\", \"HEAD\", \"OPTIONS\", \"POST\"];",
            "const ALLOW = COLLECTION_METHODS.join(\", \");",
            "",
            "function json(status, body, headers) {",
            "  const h = Object.assign({ \"Content-Type\": \"application/json\" }, headers || {});",
            "  return { status: status, headers: h, body: body };",
            "}",
            "",
            "function collection(req) {",
            "  if (req.method === \"GET\") return json(200, widgets);",
            "  if (req.method === \"POST\") {",
            "    const created = { id: nextId++, name: req.body.name };",
            "    widgets.push(created);",
            "    return json(201, created, { \"Location\": \"/api/widgets/\" + created.id });",
            "  }",
            "  if (req.method === \"OPTIONS\") {",
            "    return { status: 204, headers: { \"Allow\": ALLOW }, body: undefined };",
            "  }",
            "  return json(405, { error: \"method not allowed\" }, { \"Allow\": ALLOW });",
            "}",
            "",
            "function item(req) {",
            "  const id = Number(req.path.split(\"/\")[3]);",
            "  const found = widgets.find(w => w.id === id);",
            "  return found ? json(200, found) : json(404, { error: \"not found\" });",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (req.method === \"HEAD\") {",
            "    const res = handleRequest(Object.assign({}, req, { method: \"GET\" }));",
            "    return { status: res.status, headers: res.headers, body: undefined };",
            "  }",
            "  if (req.path === \"/api/widgets\") return collection(req);",
            "  if (req.path.startsWith(\"/api/widgets/\")) return item(req);",
            "  return json(404, { error: \"not found\" });",
            "}",
            "")
        }
      },

      /* ---------- api-u1-4 ---------- */
      {
        id: "api-u1-4",
        title: "One resource, every answer correct",
        kind: "js", chip: "API", xp: 20, mins: 14,
        brief: "Put the unit together on a resource you have not seen yet, with no scaffolding to fill in.\n\n`/api/notes` must answer **every** request correctly — the successes, the failures, and the two methods most APIs forget:\n\n| Request | Answer |\n|---|---|\n| `GET /api/notes` | `200`, the collection |\n| `POST /api/notes` | `201` + `Location`, the created note |\n| `GET /api/notes/:id` | `200`, or `404` if there is no such note |\n| `DELETE /api/notes/:id` | `204`, no body, no `Content-Type` |\n| `OPTIONS` on either | `204` + `Allow` |\n| `HEAD` on either | exactly `GET`'s status and headers, no body |\n| wrong verb | `405` + `Allow` |\n| unknown path | `404` |\n\nThe two `Allow` lists are **different**, because the collection and a single note support different verbs. Getting that right is the point of the exercise: a resource is not one thing with one method table, it is a URL space where each shape of URL has its own.",
        steps: [
          { text: "The collection: `GET` lists, `POST` creates with `201` + `Location`, `OPTIONS` reports `Allow`, and a wrong verb is a `405` carrying the same list.",
            test: R`
T.expect(typeof handleRequest === 'function', 'Define handleRequest(req).');
const list = handleRequest({ method: "GET", path: "/api/notes" });
T.eq(list.status, 200, 'GET /api/notes answers 200');
T.eq(list.body, [{ id: 1, text: "buy milk" }], 'the seeded collection comes back');
const made = handleRequest({ method: "POST", path: "/api/notes", body: { text: "call mum" } });
T.eq(made.status, 201, 'POST answers 201');
T.eq(made.body, { id: 2, text: "call mum" }, 'the created note comes back, with its server-assigned id');
T.eq(made.headers["Location"], "/api/notes/2", 'Location points at the new note');
const opts = handleRequest({ method: "OPTIONS", path: "/api/notes" });
T.eq(opts.status, 204, 'OPTIONS on the collection answers 204');
T.eq(opts.headers["Allow"], "GET, HEAD, OPTIONS, POST", 'the collection allows GET, HEAD, OPTIONS, POST');
T.eq(handleRequest({ method: "PUT", path: "/api/notes" }).status, 405, 'PUT on a collection is a 405');
T.eq(handleRequest({ method: "PUT", path: "/api/notes" }).headers["Allow"], "GET, HEAD, OPTIONS, POST", 'and the 405 carries the same Allow list');
` },
          { text: "A single note: `GET` reads it, `DELETE` removes it with a `204`, a missing id is a `404`, and the item's `Allow` list is its own — no `POST` on a note that already exists.",
            test: R`
const one = handleRequest({ method: "GET", path: "/api/notes/1" });
T.eq(one.status, 200, 'GET /api/notes/1 answers 200');
T.eq(one.body, { id: 1, text: "buy milk" }, 'and returns that note');
T.eq(handleRequest({ method: "GET", path: "/api/notes/999" }).status, 404, 'a note that does not exist is a 404');
const itemOpts = handleRequest({ method: "OPTIONS", path: "/api/notes/1" });
T.eq(itemOpts.headers["Allow"], "DELETE, GET, HEAD, OPTIONS", 'a single note allows DELETE, GET, HEAD, OPTIONS — not POST');
T.eq(handleRequest({ method: "POST", path: "/api/notes/1", body: {} }).status, 405, 'POST to an existing note is a 405');
const gone = handleRequest({ method: "DELETE", path: "/api/notes/1" });
T.eq(gone.status, 204, 'DELETE answers 204');
T.expect(gone.body === undefined && gone.headers["Content-Type"] === undefined, 'a 204 has no body and no Content-Type');
T.eq(handleRequest({ method: "GET", path: "/api/notes/1" }).status, 404, 'the note is really gone afterwards');
` },
          { text: "`HEAD` works everywhere `GET` does — collection, item, and the 404 — always matching `GET`'s status and headers with the body stripped. An unknown path is a plain `404`.",
            test: R`
const g = handleRequest({ method: "GET", path: "/api/notes" });
const h = handleRequest({ method: "HEAD", path: "/api/notes" });
T.eq(h.status, g.status, 'HEAD on the collection matches GET\'s status');
T.eq(h.headers, g.headers, 'and GET\'s headers');
T.expect(h.body === undefined, 'with no body');
const hMissing = handleRequest({ method: "HEAD", path: "/api/notes/4242" });
T.eq(hMissing.status, 404, 'HEAD on a missing note is a 404');
T.expect(hMissing.body === undefined, 'and still sends no body');
const nowhere = handleRequest({ method: "GET", path: "/api/elsewhere" });
T.eq(nowhere.status, 404, 'an unknown path is a 404');
T.eq(nowhere.headers["Content-Type"], "application/json", 'and it is still a JSON response');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// /api/notes, answered properly. Nothing here is scaffolded — the whole",
            "// point is that you now know what a complete set of answers looks like.",
            "//",
            "// Watch the two Allow lists: a collection and a single item support",
            "// different verbs, so they are different strings.",
            "",
            "let notes = [",
            "  { id: 1, text: \"buy milk\" }",
            "];",
            "let nextId = 2;",
            "",
            "function handleRequest(req) {",
            "  return { status: 404, headers: {}, body: { error: \"not found\" } };",
            "}",
            "") }
        ],
        hints: [
          "Start with the two tables, since four answers read from them: `const COLLECTION = [\"GET\", \"HEAD\", \"OPTIONS\", \"POST\"];` and `const ITEM = [\"DELETE\", \"GET\", \"HEAD\", \"OPTIONS\"];` — both already in alphabetical order, which is what the checkpoints expect.",
          "Bring back the helper: `function json(status, body, headers) { return { status, headers: Object.assign({ \"Content-Type\": \"application/json\" }, headers || {}), body }; }` — and a separate `noContent(headers)` for the 204s, because those must not set a Content-Type.",
          "Handle HEAD once, at the very top, by re-entering as a GET and blanking the body. Then every 404, every header and every status is inherited for free.",
          "A 404 for a missing note has to come before the item's method check — otherwise `DELETE /api/notes/999` answers 204 for a note that was never there."
        ],
        solution: {
          "script.js": L(
            "// /api/notes, answered properly. Nothing here is scaffolded — the whole",
            "// point is that you now know what a complete set of answers looks like.",
            "//",
            "// Watch the two Allow lists: a collection and a single item support",
            "// different verbs, so they are different strings.",
            "",
            "let notes = [",
            "  { id: 1, text: \"buy milk\" }",
            "];",
            "let nextId = 2;",
            "",
            "const COLLECTION = [\"GET\", \"HEAD\", \"OPTIONS\", \"POST\"];",
            "const ITEM = [\"DELETE\", \"GET\", \"HEAD\", \"OPTIONS\"];",
            "",
            "function json(status, body, headers) {",
            "  const h = Object.assign({ \"Content-Type\": \"application/json\" }, headers || {});",
            "  return { status: status, headers: h, body: body };",
            "}",
            "",
            "function noContent(headers) {",
            "  return { status: 204, headers: Object.assign({}, headers || {}), body: undefined };",
            "}",
            "",
            "function notAllowed(methods) {",
            "  return json(405, { error: \"method not allowed\" }, { \"Allow\": methods.join(\", \") });",
            "}",
            "",
            "function collection(req) {",
            "  if (req.method === \"GET\") return json(200, notes);",
            "  if (req.method === \"POST\") {",
            "    const created = { id: nextId++, text: req.body.text };",
            "    notes.push(created);",
            "    return json(201, created, { \"Location\": \"/api/notes/\" + created.id });",
            "  }",
            "  if (req.method === \"OPTIONS\") return noContent({ \"Allow\": COLLECTION.join(\", \") });",
            "  return notAllowed(COLLECTION);",
            "}",
            "",
            "function item(req) {",
            "  const id = Number(req.path.split(\"/\")[3]);",
            "  const found = notes.find(n => n.id === id);",
            "  if (!found) return json(404, { error: \"not found\" });",
            "  if (req.method === \"GET\") return json(200, found);",
            "  if (req.method === \"DELETE\") {",
            "    notes = notes.filter(n => n.id !== id);",
            "    return noContent();",
            "  }",
            "  if (req.method === \"OPTIONS\") return noContent({ \"Allow\": ITEM.join(\", \") });",
            "  return notAllowed(ITEM);",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (req.method === \"HEAD\") {",
            "    const res = handleRequest(Object.assign({}, req, { method: \"GET\" }));",
            "    return { status: res.status, headers: res.headers, body: undefined };",
            "  }",
            "  if (req.path === \"/api/notes\") return collection(req);",
            "  if (req.path.startsWith(\"/api/notes/\")) return item(req);",
            "  return json(404, { error: \"not found\" });",
            "}",
            "")
        }
      },

      /* ---------- api-quiz-1 ---------- */
      {
        id: "api-quiz-1",
        title: "Unit 1 quiz: status, headers, body",
        kind: "quiz", chip: "API", xp: 20, mins: 6,
        questions: [
          {
            q: "Your `POST /api/orders` answers 201 with the created order in the body, but sets no `Location` header. What does that cost the client?",
            choices: [
              "Nothing — the id is already in the body, so any client that reads `body.id` has everything it needs to reach the new order",
              "The client must construct the order's URL itself, so your routing becomes part of every client's code",
              "The response is invalid and most HTTP clients will reject it outright",
              "The order is created but the client cannot read the response body until a Location is present"
            ],
            answer: 1,
            explain: "`Location` is the server's own answer to \"where did you put it?\". Without it each client hard-codes `\"/api/orders/\" + body.id`, which is your URL scheme copied into code you do not control — and it breaks the day the scheme changes. Nothing is invalid and nothing is blocked; the cost is coupling."
          },
          {
            q: "Why must a `204 No Content` response not carry a `Content-Type` header?",
            choices: [
              "Because `Content-Type` is only legal on requests, never on responses",
              "Because there is no content, so there is no media type to describe",
              "Because 2xx responses infer their type from the request's `Accept` header instead",
              "Because `Content-Type` is reserved for responses that carry a `Content-Length` greater than zero"
            ],
            answer: 1,
            explain: "`Content-Type` describes the body. A 204 is defined as having no body at all, so the header would be describing something that does not exist. `Content-Type` is perfectly legal on responses generally, and `Accept` only expresses a preference on the request."
          },
          {
            q: "RFC 9110 says a `405 Method Not Allowed` response must generate one particular header. Which, and why?",
            choices: [
              "`Retry-After`, so the client knows when the method might become available",
              "`Allow`, so the failure itself tells the client which methods would have worked",
              "`Accept`, so the client knows which media types the resource will take",
              "`Location`, so the client can be redirected to a resource that supports the method"
            ],
            answer: 1,
            explain: "A bare 405 says \"not that\" without saying \"this instead\", which forces the client to guess. `Allow: GET, HEAD, OPTIONS, POST` turns the failure into instructions. `Retry-After` belongs to 429 and 503, where the problem is timing rather than the verb."
          },
          {
            q: "A client sends `HEAD /api/reports/9`. What must the response look like?",
            choices: [
              "The same status and headers as `GET /api/reports/9`, with no body",
              "A 204, because `HEAD` is defined as a request for no content",
              "A 200 with an empty object as the body, so the client can still parse JSON",
              "The same body as `GET` but with all headers except `Content-Type` removed"
            ],
            answer: 0,
            explain: "`HEAD` is `GET` with the body removed — identical status, identical headers. That is what makes it useful: a client can check existence, size or an `ETag` without paying for the payload. If the resource is missing, `HEAD` returns that same 404, still with no body."
          },
          {
            q: "Your API returns `{ \"error\": \"not found\" }` for a 404 but sets no `Content-Type`. A client does `res.json()` and it fails. Why is this the server's bug?",
            choices: [
              "It isn't — 404 responses are not required to carry a body of any kind",
              "The server sent JSON without declaring it, so the client had no way to know it could parse it",
              "Error bodies must be plain text, so the client should never have called `res.json()`",
              "The client should have sent `Accept: application/json`, since that is what obliges a server to declare the type of what it returns"
            ],
            answer: 1,
            explain: "An error is a response like any other: if its body is JSON, it has to say so. Dropping `Content-Type` on the failure path is one of the most common API bugs, and it breaks exactly the clients that were handling your errors properly. Routing every response — successes and failures alike — through one `json()` helper is what prevents it."
          },
          {
            q: "Why do the `Allow` lists for `/api/notes` and `/api/notes/1` differ in the same API?",
            choices: [
              "They shouldn't — `Allow` describes the API as a whole, so every endpoint has to report the same list or clients cannot rely on it",
              "Because a collection and a single item are different resources that support different verbs",
              "Because `Allow` lists only the methods the current client is authorised to use",
              "Because the item list is generated at runtime while the collection list is fixed at startup"
            ],
            answer: 1,
            explain: "`POST` to a collection means \"create a new member\", which makes no sense addressed to an item that already exists; `DELETE` on an item means \"remove this one\", which is a very different request from deleting a whole collection. Each URL shape is its own resource with its own method table. `Allow` describes the resource, not the caller — refusing a *caller* is 401 or 403."
          }
        ]
      }
    ]
  });
})();
