/* Advanced API Design — Unit 5: Concurrency and conditional requests */
(function () {
  /* Code is written as String.raw templates, so it reaches the page exactly
     as it appears here. Nothing inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var DOCS_HEAD = R`
const PROBLEMS = "https://api.example.com/problems/";
function problem(statusCode, slug, title, detail, extra) {
  const body = { type: PROBLEMS + slug, title: title, status: statusCode, detail: detail };
  Object.assign(body, extra || {});
  return { status: statusCode, headers: { "content-type": "application/problem+json" }, body: body };
}

let docs = {
  readme: { id: "readme", title: "Read me", text: "Start here.", version: 1 },
  roadmap: { id: "roadmap", title: "Roadmap", text: "Q4: ship the API course.", version: 4 }
};

// The entity tag is the version, quoted, as RFC 9110 requires: "v1"
function etagOf(doc) { return '"v' + doc.version + '"'; }
// What clients see: the version stays a server detail.
function view(doc) { return { id: doc.id, title: doc.title, text: doc.text }; }
// '"v1", W/"v2"' → ['"v1"', 'W/"v2"']
function tagList(header) { return String(header).split(",").map(t => t.trim()).filter(Boolean); }
`;

  /* ---------- api-u5-1: ETags and 304 ---------- */
  var NOTMOD_STARTER = DOCS_HEAD + R`
// 2) Does an If-None-Match header match this document? WEAK comparison:
//    W/"v2" and "v2" both match a document whose ETag is "v2", and * matches any.
//    No header at all → false.
function noneMatchHits(header, doc) {
  return false;
}

function handleRequest(req) {
  const parts = req.path.split("/").filter(Boolean);
  const doc = parts[0] === "docs" && parts.length === 2 && Object.prototype.hasOwnProperty.call(docs, parts[1]) ? docs[parts[1]] : null;
  if (!doc) return problem(404, "not-found", "Not Found", "No resource at " + req.path);
  const headers = req.headers || {};
  if (req.method === "GET") {
    // 1) every 200 carries etag: etagOf(doc)
    // 2) a matching If-None-Match → 304, with the etag header and body null
    return { status: 200, headers: {}, body: view(doc) };
  }
  if (req.method === "PUT") {
    doc.title = req.body.title;
    doc.text = req.body.text;
    // 3) every successful write is a new version — and a new ETag
    return { status: 200, headers: { etag: etagOf(doc) }, body: view(doc) };
  }
  return problem(405, "method-not-allowed", "Method Not Allowed", req.method + " is not supported here");
}
`;

  var NOTMOD_SOLUTION = DOCS_HEAD + R`
// If-None-Match uses WEAK comparison: W/"v2" and "v2" both match "v2".
function noneMatchHits(header, doc) {
  if (header === undefined) return false;
  const current = etagOf(doc);
  return tagList(header).some(t => t === "*" || t.replace(/^W\//, "") === current);
}

function handleRequest(req) {
  const parts = req.path.split("/").filter(Boolean);
  const doc = parts[0] === "docs" && parts.length === 2 && Object.prototype.hasOwnProperty.call(docs, parts[1]) ? docs[parts[1]] : null;
  if (!doc) return problem(404, "not-found", "Not Found", "No resource at " + req.path);
  const headers = req.headers || {};
  if (req.method === "GET") {
    if (noneMatchHits(headers["if-none-match"], doc)) {
      return { status: 304, headers: { etag: etagOf(doc) }, body: null };
    }
    return { status: 200, headers: { etag: etagOf(doc) }, body: view(doc) };
  }
  if (req.method === "PUT") {
    doc.title = req.body.title;
    doc.text = req.body.text;
    doc.version++;
    return { status: 200, headers: { etag: etagOf(doc) }, body: view(doc) };
  }
  return problem(405, "method-not-allowed", "Method Not Allowed", req.method + " is not supported here");
}
`;

  /* ---------- api-u5-2: If-Match ---------- */
  var IFMATCH_HEAD = DOCS_HEAD + R`
function failed(detail) { return problem(412, "precondition-failed", "Precondition Failed", detail); }
function required(detail) { return problem(428, "precondition-required", "Precondition Required", detail); }
`;

  var IFMATCH_STARTER = IFMATCH_HEAD + R`
// 2) Does an If-Match header match? STRONG comparison: only the exact current
//    tag (or *) matches — a weak W/"…" tag never does.
function matchHits(header, doc) {
  return true;
}

function handleRequest(req) {
  const parts = req.path.split("/").filter(Boolean);
  if (parts[0] !== "docs" || parts.length !== 2) return problem(404, "not-found", "Not Found", "No route for " + req.path);
  const id = parts[1];
  const doc = Object.prototype.hasOwnProperty.call(docs, id) ? docs[id] : null;
  const headers = req.headers || {};
  const ifMatch = headers["if-match"];
  const createOnly = headers["if-none-match"] === "*";

  if (req.method === "GET") {
    if (!doc) return problem(404, "not-found", "Not Found", "No document " + id);
    return { status: 200, headers: { etag: etagOf(doc) }, body: view(doc) };
  }
  // 4) PUT to a document that doesn't exist:
  //      If-None-Match: *  → create it at version 1: 201 with location and etag
  //      If-Match present  → failed("No document to match")
  //      neither           → required("PUT needs If-Match to update or If-None-Match: * to create")
  if (!doc) return problem(404, "not-found", "Not Found", "No document " + id);
  if (req.method === "PUT") {
    // 1) no If-Match → required(req.method + " needs an If-Match header carrying the current ETag")
    //    If-Match that doesn't match → failed("The document has changed since you read it")
    // 4) If-None-Match: * on a document that exists → failed("The document already exists")
    doc.title = req.body.title;
    doc.text = req.body.text;
    doc.version++;
    return { status: 200, headers: { etag: etagOf(doc) }, body: view(doc) };
  }
  // 3) DELETE: the same If-Match rules, then remove it and answer 204
  return problem(405, "method-not-allowed", "Method Not Allowed", req.method + " is not supported here");
}
`;

  var IFMATCH_SOLUTION = IFMATCH_HEAD + R`
// If-Match uses STRONG comparison: a weak W/"…" tag never matches.
function matchHits(header, doc) {
  const current = etagOf(doc);
  return tagList(header).some(t => t === "*" || t === current);
}

function handleRequest(req) {
  const parts = req.path.split("/").filter(Boolean);
  if (parts[0] !== "docs" || parts.length !== 2) return problem(404, "not-found", "Not Found", "No route for " + req.path);
  const id = parts[1];
  const doc = Object.prototype.hasOwnProperty.call(docs, id) ? docs[id] : null;
  const headers = req.headers || {};
  const ifMatch = headers["if-match"];
  const createOnly = headers["if-none-match"] === "*";

  if (req.method === "GET") {
    if (!doc) return problem(404, "not-found", "Not Found", "No document " + id);
    return { status: 200, headers: { etag: etagOf(doc) }, body: view(doc) };
  }
  if (req.method === "PUT" && !doc) {
    if (createOnly) {
      docs[id] = { id: id, title: req.body.title, text: req.body.text, version: 1 };
      return { status: 201, headers: { location: "/docs/" + id, etag: etagOf(docs[id]) }, body: view(docs[id]) };
    }
    if (ifMatch !== undefined) return failed("No document to match");
    return required("PUT needs If-Match to update or If-None-Match: * to create");
  }
  if (!doc) return problem(404, "not-found", "Not Found", "No document " + id);
  if (req.method === "PUT" || req.method === "DELETE") {
    if (createOnly) return failed("The document already exists");
    if (ifMatch === undefined) return required(req.method + " needs an If-Match header carrying the current ETag");
    if (!matchHits(ifMatch, doc)) return failed("The document has changed since you read it");
    if (req.method === "DELETE") {
      delete docs[id];
      return { status: 204, headers: {}, body: null };
    }
    doc.title = req.body.title;
    doc.text = req.body.text;
    doc.version++;
    return { status: 200, headers: { etag: etagOf(doc) }, body: view(doc) };
  }
  return problem(405, "method-not-allowed", "Method Not Allowed", req.method + " is not supported here");
}
`;

  /* ---------- api-u5-4: the client's loop ---------- */
  var LOOP_HEAD = R`
// A document server with the last lesson's rules, as a client sees it: an async
// api(req) function. interfere(fn) makes ANOTHER client's write land just before
// your next PUT; log records every request as "METHOD if-match".
function makeDocServer(doc) {
  let current = Object.assign({}, doc);
  let version = 1;
  const log = [];
  const sneaks = [];
  async function api(req) {
    const headers = req.headers || {};
    log.push(req.method + " " + (headers["if-match"] || "-"));
    if (req.method === "GET") {
      return { status: 200, headers: { etag: '"v' + version + '"' }, body: Object.assign({}, current) };
    }
    if (req.method === "PUT") {
      if (sneaks.length) {
        current = sneaks.shift()(Object.assign({}, current));
        version++;
      }
      if (!headers["if-match"]) return { status: 428, headers: {}, body: null };
      if (headers["if-match"] !== '"v' + version + '"') return { status: 412, headers: {}, body: null };
      current = Object.assign({}, req.body);
      version++;
      return { status: 200, headers: { etag: '"v' + version + '"' }, body: Object.assign({}, current) };
    }
    return { status: 405, headers: {}, body: null };
  }
  return {
    api: api,
    log: log,
    interfere(fn) { sneaks.push(fn); },
    state() { return { doc: Object.assign({}, current), version: version }; }
  };
}

const MAX_ATTEMPTS = 3;
`;

  var LOOP_STARTER = LOOP_HEAD + R`
// Read the document, apply change(doc) to it, and write it back — safely.
// 1) send the PUT with if-match set to the etag the GET returned
// 2) on 412, start over: read AGAIN and apply change to the FRESH copy
// 3) give up after MAX_ATTEMPTS PUTs and return the last response
async function updateDoc(api, path, change) {
  const read = await api({ method: "GET", path: path, query: {}, headers: {}, body: null });
  const next = change(read.body);
  return api({ method: "PUT", path: path, query: {}, headers: {}, body: next });
}

const demo = makeDocServer({ title: "Draft", tags: [] });
updateDoc(demo.api, "/docs/plan", d => Object.assign({}, d, { title: "Plan" })).then(r => console.log(r.status, demo.log));
`;

  var LOOP_SOLUTION = LOOP_HEAD + R`
// Read the document, apply change(doc) to it, and write it back — safely.
async function updateDoc(api, path, change) {
  let res;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const read = await api({ method: "GET", path: path, query: {}, headers: {}, body: null });
    const next = change(read.body);
    res = await api({ method: "PUT", path: path, query: {}, headers: { "if-match": read.headers.etag }, body: next });
    if (res.status !== 412) return res;
  }
  return res;
}

const demo = makeDocServer({ title: "Draft", tags: [] });
updateDoc(demo.api, "/docs/plan", d => Object.assign({}, d, { title: "Plan" })).then(r => console.log(r.status, demo.log));
`;

  window.CODELAB.addUnit("api", {
    id: "api-u5",
    title: "Concurrency and conditional requests",
    icon: "🔒",
    blurb: "Two people edit the same document; the second save silently erases the first. ETags and If-Match turn that lost update into a 412 the client can recover from — and tell caches what they may keep.",
    cheat: [
      { h: "ETags from the server's side", lang: "text", code: "GET /docs/readme\n← 200  etag: \"v1\"\n\nGET /docs/readme   if-none-match: \"v1\"\n← 304  etag: \"v1\"     (no body)", note: "An ETag is quoted and opaque (RFC 9110 §8.8.3). Any cheap fingerprint works: a version number, an updated-at, a hash of the body. Every write must produce a new one." },
      { h: "Weak vs strong comparison", lang: "text", code: "If-None-Match (reads)   WEAK:   W/\"v2\" matches \"v2\"\nIf-Match      (writes)  STRONG: W/\"v2\" matches nothing\nboth                    *  matches any current version\nboth                    \"v1\", \"v2\"  is a list: any one may match", note: "A weak tag promises equivalent content, not identical bytes. That is fine for 'can I keep my cached copy?' and not good enough for 'is it safe to overwrite?'." },
      { h: "Stop the lost update", lang: "text", code: "PUT /docs/readme   if-match: \"v1\"  → 200  etag: \"v2\"   (Alice)\nPUT /docs/readme   if-match: \"v1\"  → 412                (Bob: stale)\nPUT /docs/readme   (no if-match)    → 428  Precondition Required\nPUT /docs/faq      if-none-match: * → 201  (create-only)\n                                    → 412  if it already exists", note: "412 means 'you were editing an old version'; the client re-reads and reapplies its change. 428 (RFC 6585) lets the server insist on a precondition at all." },
      { h: "The client's loop", lang: "js", code: "for (let attempt = 1; attempt <= 3; attempt++) {\n  const read = await api(GET);\n  const next = change(read.body);          // on the FRESH copy\n  res = await api(PUT, { \"if-match\": read.headers.etag }, next);\n  if (res.status !== 412) return res;\n}\nreturn res;                                  // still 412: give up", note: "Optimistic concurrency: no locks, just 'write only if nothing changed', and retry on conflict. Cap the retries — a document under constant edit should surface the conflict, not spin." },
      { h: "Cache-Control for API responses", lang: "text", code: "public catalog     cache-control: public, max-age=300\nper-user (/me)     cache-control: private, no-cache\nsecrets (tokens)   cache-control: no-store\nnegotiated body    vary: accept     (or accept-language…)", note: "A shared cache must not store a response to a request with Authorization unless the response says it may (RFC 9111 §3.5). private keeps it on the user's own device; no-cache means revalidate every time — cheap with an ETag." }
    ],
    lessons: [

      {
        id: "api-u5-1",
        title: "ETags and 304, from the server's side",
        kind: "js", chip: "API", xp: 15, mins: 13,
        brief: "How the Web Works showed the client half of a conditional request: keep a cached copy, send its ETag back as `If-None-Match`, and a `304` means *your copy is still good* — no body crosses the wire. This lesson is the server half.\n\n- Every `200` for a document carries an **`etag`**. Here it is the version, quoted: `\"v1\"` (`etagOf(doc)` is provided)\n- A GET whose `if-none-match` matches the current tag answers **`304`**, with the `etag` header and **no body**\n- `if-none-match` can be a **list** (`\"v1\", \"v2\"`), or `*` (matches any current version), and it uses **weak comparison**: `W/\"v2\"` matches `\"v2\"`\n- Every write makes a **new version**, so stale tags stop matching\n\n`tagList(header)` splits a header into its tags.",
        steps: [
          { text: "Every `200` from `GET /docs/<id>` carries `etag: etagOf(doc)` — `\"v1\"` for the readme, `\"v4\"` for the roadmap. The body never shows the version.",
            test: R`
function get(id, h) { return handleRequest({ method: 'GET', path: '/docs/' + id, query: {}, headers: h || {}, body: null }); }
var r = get('readme');
T.eq([r.status, r.headers.etag], [200, '"v1"'], 'GET readme → 200 with etag "v1" (quotes included)');
T.eq(r.body, { id: 'readme', title: 'Read me', text: 'Start here.' }, 'The body is the document without its version');
T.eq(get('roadmap').headers.etag, '"v4"', 'The roadmap is at version 4');
` },
          { text: "Write `noneMatchHits(header, doc)`. A GET whose `if-none-match` matches answers **`304`** with the `etag` header and `body: null`; a different tag gets the full `200`.",
            test: R`
function get(id, h) { return handleRequest({ method: 'GET', path: '/docs/' + id, query: {}, headers: h || {}, body: null }); }
var nm = get('readme', { 'if-none-match': '"v1"' });
T.eq(nm.status, 304, 'if-none-match "v1" on version 1 → 304 Not Modified');
T.eq([nm.body, nm.headers.etag], [null, '"v1"'], 'A 304 carries the etag and no body');
var changed = get('readme', { 'if-none-match': '"v0"' });
T.eq([changed.status, changed.body.text], [200, 'Start here.'], 'A tag that does not match → the full 200');
T.eq(noneMatchHits(undefined, docs.readme), false, 'No header → no match');
` },
          { text: "Handle the rest of If-None-Match: a list matches if any tag matches, `*` matches any version, and the comparison is **weak** — `W/\"v1\"` matches `\"v1\"`.",
            test: R`
function st(id, h) { return handleRequest({ method: 'GET', path: '/docs/' + id, query: {}, headers: { 'if-none-match': h }, body: null }).status; }
T.eq(st('readme', '"v0", "v1"'), 304, 'A list: one matching tag is enough');
T.eq(st('readme', 'W/"v1"'), 304, 'Weak comparison: W/"v1" matches "v1"');
T.eq(st('readme', '"v0" , W/"v1"'), 304, 'Spaces around list items are allowed');
T.eq(st('readme', '*'), 304, '* matches any current version');
T.eq(st('roadmap', '"v1"'), 200, 'The roadmap is v4, so "v1" does not match there');
` },
          { text: "A write makes a new version: `PUT` bumps `version`, so the new `etag` is `\"v2\"`, the old tag gets the fresh document, and the new tag gets a 304.",
            test: R`
var put = handleRequest({ method: 'PUT', path: '/docs/readme', query: {}, headers: {}, body: { title: 'Read me', text: 'Start here, then the roadmap.' } });
T.eq([put.status, put.headers.etag], [200, '"v2"'], 'A write answers the NEW etag: "v2"');
var stale = handleRequest({ method: 'GET', path: '/docs/readme', query: {}, headers: { 'if-none-match': '"v1"' }, body: null });
T.eq([stale.status, stale.body && stale.body.text], [200, 'Start here, then the roadmap.'], 'A client holding "v1" gets the new text');
var fresh = handleRequest({ method: 'GET', path: '/docs/readme', query: {}, headers: { 'if-none-match': '"v2"' }, body: null });
T.eq(fresh.status, 304, 'A client holding "v2" is up to date');
` }
        ],
        files: [{ name: "script.js", content: NOTMOD_STARTER }],
        hints: [
          "Both GET answers gain the header: `headers: { etag: etagOf(doc) }`.",
          "`noneMatchHits`: `if (header === undefined) return false;` then `return tagList(header).some(t => t === \"*\" || t.replace(/^W\\//, \"\") === etagOf(doc));` — stripping `W/` is what makes the comparison weak.",
          "The write is missing one line: `doc.version++;` before building its response."
        ],
        solution: { "script.js": NOTMOD_SOLUTION }
      },

      {
        id: "api-u5-2",
        title: "If-Match: no more lost updates",
        kind: "js", chip: "API", xp: 15, mins: 15,
        brief: "Alice and Bob both open the readme at version 1. Alice saves. Bob saves a minute later, and his PUT, built from version 1, **erases Alice's edit** without either of them knowing. That is the **lost update**, and an unconditional PUT invites it.\n\nThe fix is a precondition on writes: **`if-match`** carries the ETag the client read. The server writes only if it is still current.\n\n- missing `if-match` on a PUT or DELETE → **`428 Precondition Required`** (RFC 6585). The API insists on it\n- `if-match` that doesn't match → **`412 Precondition Failed`**: *you were editing an old version*. The client re-reads and tries again\n- the comparison is **strong**: `W/\"v3\"` never matches. A weak tag only promises *equivalent* content, which is not enough to overwrite\n- the other direction, **`if-none-match: *`** on a PUT, means *create this only if it doesn't exist* — two clients can't both claim `/docs/faq`\n\n`failed(detail)` and `required(detail)` build the 412 and 428 problems.",
        steps: [
          { text: "Write `matchHits` and enforce `if-match` on PUT. Replay the lost update: Bob's save built on version 1 must get **412** `The document has changed since you read it`, and leave Alice's edit in place.",
            test: R`
function req(m, id, h, b) { return handleRequest({ method: m, path: '/docs/' + id, query: {}, headers: h, body: b }); }
var alice = req('GET', 'readme', {}, null), bob = req('GET', 'readme', {}, null);
T.eq([alice.headers.etag, bob.headers.etag], ['"v1"', '"v1"'], 'Both read version 1');
var a = req('PUT', 'readme', { 'if-match': alice.headers.etag }, { title: 'Read me', text: 'Start here. Then read the roadmap.' });
T.eq([a.status, a.headers.etag], [200, '"v2"'], 'Alice saves first: 200, now "v2"');
var b = req('PUT', 'readme', { 'if-match': bob.headers.etag }, { title: 'README', text: 'Start here.' });
T.eq(b.status, 412, 'Bob saves from "v1": 412 — his copy is stale');
T.eq([b.body.type, b.body.detail], ['https://api.example.com/problems/precondition-failed', 'The document has changed since you read it'], 'The precondition-failed problem');
T.eq(req('GET', 'readme', {}, null).body, { id: 'readme', title: 'Read me', text: 'Start here. Then read the roadmap.' }, 'Alice edit survived');
var again = req('GET', 'readme', {}, null);
var b2 = req('PUT', 'readme', { 'if-match': again.headers.etag }, { title: 'README', text: again.body.text });
T.eq([b2.status, b2.headers.etag], [200, '"v3"'], 'Bob re-reads ("v2"), reapplies his change, and saves: "v3"');
` },
          { text: "No `if-match` → **428** with detail `PUT needs an If-Match header carrying the current ETag`. The comparison is **strong**: `W/\"v3\"` fails. A list or `*` can match.",
            test: R`
function put(h, text) { return handleRequest({ method: 'PUT', path: '/docs/readme', query: {}, headers: h, body: { title: 'README', text: text } }); }
var none = put({}, 'blind write');
T.eq([none.status, none.body.type, none.body.detail], [428, 'https://api.example.com/problems/precondition-required', 'PUT needs an If-Match header carrying the current ETag'], 'No if-match → 428');
T.eq(put({ 'if-match': 'W/"v3"' }, 'weak').status, 412, 'If-Match is STRONG: a weak tag never matches, even W/"v3" on version 3');
T.eq(put({ 'if-match': '"v9", "v3"' }, 'listed').headers.etag, '"v4"', 'A list matches if any tag is current');
T.eq(put({ 'if-match': '*' }, 'any').headers.etag, '"v5"', '* matches whatever version exists');
T.eq(handleRequest({ method: 'GET', path: '/docs/readme', query: {}, headers: {}, body: null }).body.text, 'any', 'Only the two matching writes landed');
` },
          { text: "DELETE follows the same rules: a stale tag is 412, no tag is 428 (detail starting `DELETE needs`), and the current tag deletes with **204**.",
            test: R`
function del(h) { return handleRequest({ method: 'DELETE', path: '/docs/roadmap', query: {}, headers: h, body: null }); }
T.eq(del({ 'if-match': '"v3"' }).status, 412, 'The roadmap is "v4": deleting from "v3" → 412');
var none = del({});
T.eq([none.status, none.body.detail], [428, 'DELETE needs an If-Match header carrying the current ETag'], 'No if-match on DELETE → 428');
var ok = del({ 'if-match': '"v4"' });
T.eq([ok.status, ok.body], [204, null], 'The current tag → 204');
T.eq(handleRequest({ method: 'GET', path: '/docs/roadmap', query: {}, headers: {}, body: null }).status, 404, 'and it is gone');
` },
          { text: "Create-only with **`if-none-match: *`**: a new id is created at version 1 (**201**, `location`, `etag`); the same request again is a 412 `The document already exists`. A PUT to a missing id needs one of the two preconditions.",
            test: R`
function put(id, h) { return handleRequest({ method: 'PUT', path: '/docs/' + id, query: {}, headers: h, body: { title: 'FAQ', text: 'Ask away.' } }); }
var made = put('faq', { 'if-none-match': '*' });
T.eq([made.status, made.headers.location, made.headers.etag], [201, '/docs/faq', '"v1"'], 'if-none-match: * on a new id → 201, created at version 1');
T.eq(made.body, { id: 'faq', title: 'FAQ', text: 'Ask away.' }, 'The created document');
var twice = put('faq', { 'if-none-match': '*' });
T.eq([twice.status, twice.body.detail], [412, 'The document already exists'], 'A second create-only PUT → 412');
var neither = put('glossary', {});
T.eq([neither.status, neither.body.detail], [428, 'PUT needs If-Match to update or If-None-Match: * to create'], 'A missing id with no precondition → 428');
var ghost = put('glossary', { 'if-match': '"v1"' });
T.eq([ghost.status, ghost.body.detail], [412, 'No document to match'], 'If-Match on a document that does not exist → 412');
T.eq(handleRequest({ method: 'GET', path: '/docs/glossary', query: {}, headers: {}, body: null }).status, 404, 'and nothing was created');
` }
        ],
        files: [{ name: "script.js", content: IFMATCH_STARTER }],
        hints: [
          "`matchHits` is the weak version without the `W/` stripping: `return tagList(header).some(t => t === \"*\" || t === etagOf(doc));`.",
          "Check preconditions in order before writing: `if (createOnly) return failed(…)`, `if (ifMatch === undefined) return required(req.method + \" needs …\")`, `if (!matchHits(ifMatch, doc)) return failed(…)` — and let DELETE share that block: `if (req.method === \"PUT\" || req.method === \"DELETE\")`.",
          "Handle a missing document before the 404: `if (req.method === \"PUT\" && !doc) { if (createOnly) { docs[id] = { id: id, title: req.body.title, text: req.body.text, version: 1 }; return { status: 201, … }; } … }`."
        ],
        solution: { "script.js": IFMATCH_SOLUTION }
      },

      {
        id: "api-u5-3",
        title: "Cache-Control for API responses",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "How the Web Works covered what caches *do*. Your API decides what they are *allowed* to do, one response at a time, with `cache-control`.\n\nThe first question is whose data it is. A **shared cache** — a CDN, a company proxy — serves one stored response to many people. RFC 9111 §3.5 says a shared cache must not store a response to a request carrying `Authorization` unless the response explicitly allows it. For per-user data, say so anyway: **`private`** means only the user's own browser may keep it.",
            ask: { type: "pick",
              q: "`GET /me` returns the signed-in user's own profile, and it changes when they edit it. Which header fits?",
              choices: ["cache-control: public, max-age=3600", "cache-control: private, no-cache", "cache-control: s-maxage=600", "No header at all, so caches can decide for themselves"],
              answer: 1,
              why: [
                "public invites shared caches to store it and serve it to other people — a privacy bug waiting for a misconfigured CDN.",
                "private keeps it on the user's own device; no-cache makes the browser revalidate every time, which is a cheap 304 with an ETag.",
                "s-maxage is a lifetime for SHARED caches, the one kind that must never store this.",
                "Without a header, caches fall back to heuristics, and the API has given up control of private data."
              ] } },

          { read: "Some responses differ by request header: the same URL serves JSON or CSV depending on `Accept`, or English or Spanish depending on `Accept-Language`. A cache stores responses **by URL**, so it needs to be told that the URL is not enough. That is **`vary`**: `vary: accept` means *store a separate copy for each Accept value*.\n\nForget it, and the first client to ask decides what everyone gets.",
            ask: { type: "pick", transfer: true,
              q: "`GET /reports/q3` returns CSV when `Accept: text/csv` and JSON otherwise, and is cached by a CDN. Without `vary: accept`, what happens?",
              choices: ["The CDN converts between formats on the fly", "Each client still gets its own format, because CDNs read Accept automatically", "Whichever format was requested first is served to everyone", "The CDN refuses to cache the response"],
              answer: 2,
              why: [
                "Caches store and replay bytes; they never convert formats.",
                "A cache keys on the URL unless vary says otherwise. That is exactly what vary is for.",
                "The first response is stored under the URL alone, and every later request for that URL gets it, CSV or not.",
                "It caches happily — that is the problem."
              ] } },

          { read: "Three directives cover most API responses:\n\n- **`no-store`** — nothing keeps a copy, anywhere. For responses that must never sit on a disk: access tokens, one-time codes, card numbers\n- **`no-cache`** — copies may be kept, but must be **revalidated** before every use. With an ETag that costs a 304 and no body\n- **`max-age=N`** — fresh for N seconds without asking. With `public`, a CDN can serve everyone",
            ask: { type: "pick", transfer: true,
              q: "`POST /oauth/token` returns a fresh access token. Which header belongs on it?",
              choices: ["cache-control: no-cache", "cache-control: private, max-age=60", "cache-control: no-store", "cache-control: public, immutable"],
              answer: 2,
              why: [
                "no-cache still lets the token be stored, as long as it is revalidated. A secret should not be on disk at all.",
                "Any lifetime means a copy sits in a cache for that long.",
                "no-store: no cache keeps it, on any device. OAuth 2.0 (RFC 6749) requires exactly this on token responses.",
                "That tells every cache to keep it forever and share it — the opposite of what a credential needs."
              ] } },

          { read: "A public product catalog is the other end: the same for everyone and read far more than it changes. `cache-control: public, max-age=300` lets every cache on the way serve it for five minutes without touching your servers.\n\nThe price is **staleness**. A change you make is invisible to anyone holding a fresh copy until it expires. Pick `max-age` by how long a stale answer is acceptable, not by how much load you want to shed.",
            ask: { type: "predict", transfer: true,
              q: "The catalog says `cache-control: public, max-age=300`. A price changes the instant after a client's copy was fetched. At most how many seconds can that client keep seeing the old price without asking the server? Type a number.",
              answer: "300",
              why: "The copy is fresh for max-age seconds from when it was generated, and a fresh copy is used without asking. So the old price can be shown for up to 300 seconds — longer still if an intermediate cache had already held it for a while." } }
        ]
      },

      {
        id: "api-u5-4",
        title: "The client's side: read, change, write, retry",
        kind: "js", chip: "API", xp: 15, mins: 13,
        brief: "The server can now refuse a stale write. The client has to do something useful with that 412. The pattern is **optimistic concurrency**:\n\n- **read** the document and its ETag\n- **apply** your change to what you read\n- **write** it with `if-match: <that etag>`\n- on **412**, someone got there first: **read again** and apply your change to the **fresh** copy. Never resend the old body, which would erase their edit after all\n- give up after `MAX_ATTEMPTS` (3) and return the 412, so a document under constant edit surfaces the conflict instead of looping forever\n\n`makeDocServer` builds a server with the last lesson's rules as an async `api(req)`. The checks call its `interfere(fn)` to make *another* client's write land just before your next PUT, and they read its `log` (`GET -`, `PUT \"v1\"`) to see what you sent. Write `updateDoc(api, path, change)`, where `change(doc)` returns the new document.",
        steps: [
          { text: "Send the PUT with `if-match` set to the ETag the GET returned. Without interference: one GET, one PUT, `200`.",
            test: R`
var s = makeDocServer({ title: 'Draft', tags: [] });
var res = await updateDoc(s.api, '/docs/plan', function (d) { return Object.assign({}, d, { title: 'Plan' }); });
T.eq(res.status, 200, 'The write succeeds');
T.eq(s.log, ['GET -', 'PUT "v1"'], 'One read, then a PUT carrying if-match "v1"');
T.eq(s.state().doc, { title: 'Plan', tags: [] }, 'The document has the new title');
` },
          { text: "On **412**, read again and reapply the change to the fresh copy. When another client adds a tag first, both edits survive.",
            test: R`
var s = makeDocServer({ title: 'Draft', tags: [] });
s.interfere(function (d) { d.tags = ['urgent']; return d; });
var res = await updateDoc(s.api, '/docs/plan', function (d) { return Object.assign({}, d, { title: 'Plan' }); });
T.eq(s.log, ['GET -', 'PUT "v1"', 'GET -', 'PUT "v2"'], 'The first PUT hits a 412; the client reads "v2" and writes again');
T.eq(res.status, 200, 'The second write succeeds');
T.eq(s.state().doc, { title: 'Plan', tags: ['urgent'] }, 'Both edits survive: their tag and your title');
` },
          { text: "The change must be applied to what was **just read** — not to the first copy. A counter incremented by two clients ends up two higher.",
            test: R`
var s = makeDocServer({ title: 'Stats', views: 10 });
s.interfere(function (d) { d.views = d.views + 1; return d; });
await updateDoc(s.api, '/docs/stats', function (d) { return Object.assign({}, d, { views: d.views + 1 }); });
T.eq(s.state().doc.views, 12, 'Their +1 and your +1: 12. Reusing the first read would give 11 — a lost update again');
` },
          { text: "Give up after `MAX_ATTEMPTS` PUTs: if every attempt is beaten, return the last **412** instead of trying forever.",
            test: R`
var s = makeDocServer({ title: 'Hot', tags: [] });
for (var i = 0; i < 5; i++) s.interfere(function (d) { d.tags = d.tags.concat(['x']); return d; });
var res = await updateDoc(s.api, '/docs/hot', function (d) { return Object.assign({}, d, { title: 'Hotter' }); });
T.eq(res.status, 412, 'Beaten every time → return the 412');
T.eq(s.log.filter(function (l) { return l.indexOf('PUT') === 0; }).length, 3, 'Exactly MAX_ATTEMPTS (3) PUTs, then stop');
T.eq(s.state().doc.title, 'Hot', 'and nothing of yours was written');
` }
        ],
        files: [{ name: "script.js", content: LOOP_STARTER }],
        hints: [
          "Pass the tag through: `headers: { \"if-match\": read.headers.etag }` on the PUT.",
          "Wrap read-change-write in `for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) { … }`, keeping the response in a `let res` declared before the loop.",
          "Inside the loop, `if (res.status !== 412) return res;` — after the loop, `return res;` returns the last 412. Calling `change(read.body)` inside the loop is what makes each try use the fresh copy."
        ],
        solution: { "script.js": LOOP_SOLUTION }
      },

      {
        id: "api-quiz-5",
        title: "Unit 5 quiz: Conditional requests",
        kind: "quiz", xp: 10,
        brief: "ETags, If-Match, preconditions and Cache-Control. 80% to pass.",
        questions: [
          { q: "A GET with `if-none-match: \"v7\"` reaches a document whose ETag is `\"v7\"`. What should the server send?",
            choices: ["200 with the full document again, since the client explicitly asked for it", "304 Not Modified, with the ETag and no body", "412 Precondition Failed", "204 No Content"],
            answer: 1, explain: "The client's copy is current, so the server says so with a 304 and sends no body. 412 is for a failed precondition on a write, and 204 means the request succeeded with nothing to send — not 'use your copy'." },
          { q: "Two editors load ETag `\"v3\"`. Editor A saves with `if-match: \"v3\"`. Then editor B saves with `if-match: \"v3\"`. What happens to B's save?",
            choices: ["It overwrites A's save", "428 Precondition Required", "The server merges the two edits automatically and answers 200 with both changes kept", "412 Precondition Failed, and B must re-read and reapply"],
            answer: 3, explain: "A's save made the document \"v4\", so B's precondition no longer holds: 412. Nothing is merged on the server — B's client re-reads \"v4\", reapplies its change and saves again. Without If-Match, B would silently overwrite A: the lost update." },
          { q: "Why can't a weak ETag such as `W/\"v3\"` satisfy `If-Match`?",
            choices: ["Weak ETags are only valid for 60 seconds, after which every comparison against them fails", "Browsers remove the W/ prefix before sending it", "If-Match uses strong comparison, and a weak tag never matches strongly", "Weak ETags may only be used on images"],
            answer: 2, explain: "A weak tag promises equivalent content, not identical bytes. That is fine for 'may I reuse my cached copy?' (If-None-Match uses weak comparison) but not for 'is it safe to overwrite?', so RFC 9110 makes If-Match strong." },
          { q: "A client sends a PUT with no `If-Match` to an API that requires one. Which status should come back?",
            choices: ["412 Precondition Failed", "400 Bad Request", "428 Precondition Required", "409 Conflict"],
            answer: 2, explain: "428 (RFC 6585) means 'this request must be conditional'. 412 is for a precondition that was sent and didn't hold, and 409 is for a conflict with the resource's state, such as an invalid transition." },
          { q: "`PUT /docs/faq` arrives with `if-none-match: *`, and `/docs/faq` already exists. What should the server answer?",
            choices: ["412 Precondition Failed", "201 Created, replacing the document", "200 OK", "304 Not Modified"],
            answer: 0, explain: "`If-None-Match: *` means 'only if there is no current version'. There is one, so the precondition fails. That is how two clients can't both create the same id." },
          { q: "`GET /me` returns the signed-in user's profile. Which Cache-Control fits best?",
            choices: ["public, max-age=3600", "private, no-cache", "s-maxage=600", "immutable"],
            answer: 1, explain: "private keeps it out of shared caches, and no-cache means revalidate before each use — a cheap 304 when nothing changed. public or s-maxage would let a CDN serve one user's profile to another." },
          { q: "One URL serves JSON or CSV depending on `Accept`. Which response header stops a cache handing CSV to a client that asked for JSON?",
            choices: ["`vary: accept`", "`content-type: text/csv`", "`cache-control: no-transform`", "`accept-ranges: none`"],
            answer: 0, explain: "vary names the request headers the response depends on, so a cache keeps one copy per Accept value. content-type labels the body, no-transform forbids recompressing it, and accept-ranges is about partial downloads." }
        ]
      }
    ]
  });
})();
