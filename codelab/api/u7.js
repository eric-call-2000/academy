/* Advanced API Design — Unit 7: Caching and work that takes a while */
(function () {
  /* Code is written as String.raw templates, so it reaches the page exactly
     as it appears here. Nothing inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var PROBLEM_FN = R`
const PROBLEMS = "https://api.example.com/problems/";
function problem(statusCode, slug, title, detail, extra) {
  const body = { type: PROBLEMS + slug, title: title, status: statusCode, detail: detail };
  Object.assign(body, extra || {});
  return { status: statusCode, headers: { "content-type": "application/problem+json" }, body: body };
}
`;

  /* ---------- api-u7-1: cache-aside ---------- */
  var ASIDE_HEAD = R`
// The database: every load is a round trip, and db.loads counts them.
const db = {
  rows: {
    p_1: { id: "p_1", name: "Desk lamp", price: 3499 },
    p_2: { id: "p_2", name: "Bookshelf", price: 12900 }
  },
  loads: 0,
  load(id) {
    db.loads++;
    const row = db.rows[id];
    return row ? Object.assign({}, row) : null;
  },
  save(row) {
    db.rows[row.id] = Object.assign({}, row);
  }
};

const TTL = 30 * 1000;        // a cached product is trusted for 30 s
const cache = new Map();      // id → { value, expires }
`;

  var ASIDE_STARTER = ASIDE_HEAD + R`
// 1) Cache-aside: look in the cache first. A miss loads from db and stores
//    { value, expires: now() + TTL }; a hit returns the cached value.
// 2) An entry is good only while now() < expires — after that, load again.
function getProduct(id) {
  return db.load(id);
}

// 3) Write the database FIRST, then delete the cached entry, so the next read
//    loads the new row. (Deleting, rather than writing the new value into the
//    cache, can't leave an older write's value behind if two updates race.)
function updateProduct(id, changes) {
  const row = Object.assign({}, db.rows[id], changes);
  db.save(row);
  return row;
}
`;

  var ASIDE_SOLUTION = ASIDE_HEAD + R`
function getProduct(id) {
  const hit = cache.get(id);
  if (hit && now() < hit.expires) return hit.value;
  const value = db.load(id);
  if (value) cache.set(id, { value: value, expires: now() + TTL });
  return value;
}

function updateProduct(id, changes) {
  const row = Object.assign({}, db.rows[id], changes);
  db.save(row);
  cache.delete(id);
  return row;
}
`;

  /* ---------- api-u7-2: stampede ---------- */
  var STAMPEDE_HEAD = R`
let loads = 0;
let failNext = false;         // the checks set this to make one load fail

// One database round trip: 50 ms. It fails while failNext is set.
function loadProduct(id) {
  loads++;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (failNext) {
        failNext = false;
        return reject(new Error("database timeout"));
      }
      resolve({ id: id, name: "Desk lamp", price: 3499 });
    }, 50);
  });
}

const cache = new Map();      // id → value
`;

  var STAMPEDE_STARTER = STAMPEDE_HEAD + R`
// 1) When a cold key is requested 50 times at once, every caller misses the
//    cache and starts its OWN load. Share one: keep the promise of a load that
//    is already running in pending, and hand that same promise to later callers.
// 2) When the load settles — success OR failure — remove it from pending.
//    A failed load must not be cached: the next caller tries again.
const pending = new Map();    // id → the promise of the load in flight

async function getProduct(id) {
  if (cache.has(id)) return cache.get(id);
  const value = await loadProduct(id);
  cache.set(id, value);
  return value;
}
`;

  var STAMPEDE_SOLUTION = STAMPEDE_HEAD + R`
const pending = new Map();    // id → the promise of the load in flight

function getProduct(id) {
  if (cache.has(id)) return Promise.resolve(cache.get(id));
  if (pending.has(id)) return pending.get(id);
  const p = loadProduct(id)
    .then(value => {
      cache.set(id, value);
      return value;
    })
    .finally(() => pending.delete(id));
  pending.set(id, p);
  return p;
}
`;

  /* ---------- api-u7-3: 202 Accepted ---------- */
  var LRO_HEAD = PROBLEM_FN + R`
const MS_PER_ROW = 10;        // an export takes 10 ms per row
const MAX_ROWS = 1000;        // bigger exports fail 2 s in
const operations = {};        // "op_1" → { id, exportId, rows, startedAt, finishesAt, fails }
let nextOp = 1;

function has(obj, key) { return Object.prototype.hasOwnProperty.call(obj, key); }
`;

  var LRO_STARTER = LRO_HEAD + R`
// 2) What an operation looks like right now, worked out from the clock:
//    before finishesAt  → { id, status: "running", progress }   (whole percent, rounded down)
//    failed             → { id, status: "failed", error }       (error = a problem body, below)
//    otherwise          → { id, status: "succeeded", result: { url: "/exports/<exportId>" } }
//    The failure: problem(422, "export-too-large", "Export too large", "Exports are limited to 1000 rows").body
function opView(op) {
  return { id: op.id, status: "succeeded", result: { url: "/exports/" + op.exportId } };
}

function handleRequest(req) {
  const parts = req.path.split("/").filter(Boolean);
  if (req.method === "POST" && req.path === "/exports") {
    const rows = req.body && req.body.rows;
    if (!Number.isInteger(rows) || rows < 1) {
      return problem(422, "validation", "Invalid request", "See errors for the fields to fix.",
        { errors: [{ detail: "must be a positive integer", pointer: "#/rows" }] });
    }
    // 1) This answers as if the export were instant. A million rows would hold the
    //    connection open for hours. Instead: record an operation (finishing at
    //    now() + rows * MS_PER_ROW, or failing 2000 ms in when rows > MAX_ROWS) and
    //    answer 202 Accepted, location: /operations/<id>, retry-after: "1", body opView(op).
    const op = { id: "op_" + nextOp, exportId: "exp_" + nextOp, rows: rows, startedAt: now(), finishesAt: now(), fails: false };
    nextOp++;
    operations[op.id] = op;
    return { status: 200, headers: {}, body: { id: op.exportId, rows: rows } };
  }
  // 2) GET /operations/<id> → 200 with opView(op); while running, add retry-after: "1"
  // 3) GET /exports/<exportId> → { id, rows } only once its operation has succeeded
  return problem(404, "not-found", "Not Found", "No resource at " + req.path);
}
`;

  var LRO_SOLUTION = LRO_HEAD + R`
// What an operation looks like right now, worked out from the clock.
function opView(op) {
  if (now() < op.finishesAt) {
    const progress = Math.floor(100 * (now() - op.startedAt) / (op.finishesAt - op.startedAt));
    return { id: op.id, status: "running", progress: progress };
  }
  if (op.fails) {
    const error = problem(422, "export-too-large", "Export too large", "Exports are limited to 1000 rows").body;
    return { id: op.id, status: "failed", error: error };
  }
  return { id: op.id, status: "succeeded", result: { url: "/exports/" + op.exportId } };
}

function handleRequest(req) {
  const parts = req.path.split("/").filter(Boolean);
  if (req.method === "POST" && req.path === "/exports") {
    const rows = req.body && req.body.rows;
    if (!Number.isInteger(rows) || rows < 1) {
      return problem(422, "validation", "Invalid request", "See errors for the fields to fix.",
        { errors: [{ detail: "must be a positive integer", pointer: "#/rows" }] });
    }
    const fails = rows > MAX_ROWS;
    const op = {
      id: "op_" + nextOp, exportId: "exp_" + nextOp, rows: rows, startedAt: now(),
      finishesAt: now() + (fails ? 2000 : rows * MS_PER_ROW), fails: fails
    };
    nextOp++;
    operations[op.id] = op;
    return { status: 202, headers: { location: "/operations/" + op.id, "retry-after": "1" }, body: opView(op) };
  }
  if (req.method === "GET" && parts[0] === "operations" && parts.length === 2 && has(operations, parts[1])) {
    const view = opView(operations[parts[1]]);
    return { status: 200, headers: view.status === "running" ? { "retry-after": "1" } : {}, body: view };
  }
  if (req.method === "GET" && parts[0] === "exports" && parts.length === 2) {
    const op = Object.values(operations).find(o => o.exportId === parts[1]);
    if (op && opView(op).status === "succeeded") {
      return { status: 200, headers: {}, body: { id: op.exportId, rows: op.rows } };
    }
  }
  return problem(404, "not-found", "Not Found", "No resource at " + req.path);
}
`;

  /* ---------- api-u7-4: webhooks ---------- */
  var HOOK_HEAD = PROBLEM_FN + R`
const SECRET = "whsec_test_4f9a";   // shared with the sender when the webhook was set up
const TOLERANCE = 300;              // seconds a signed timestamp stays acceptable

const orders = { ord_1: { id: "ord_1", state: "pending", version: 1 } };
const applied = [];                 // ids of events that changed an order, in order

// "t=1760000000,v1=9f86d0…" → { t: "1760000000", v1: "9f86d0…" }
function parseSignature(header) {
  const out = {};
  String(header || "").split(",").forEach(part => {
    const i = part.indexOf("=");
    if (i > 0) out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
  });
  return out;
}
`;

  var HOOK_STARTER = HOOK_HEAD + R`
// 1) The signature is hex(hmac("sha256", SECRET, t + "." + rawBody)) — over the RAW
//    body text exactly as it arrived, never over re-serialized JSON. A missing or
//    wrong v1 → problem(400, "bad-signature", "Invalid signature",
//    "The signature does not match the payload"). Compare with timingSafeEqual.
// 2) A t more than TOLERANCE seconds away from now (either way) →
//    problem(400, "stale-webhook", "Webhook too old", "The timestamp is outside the 300 second tolerance")
// 3) Delivery is at-least-once: an event id seen before is acknowledged (200,
//    { received: true, duplicate: true }) and NOT applied again.
// 4) Events can arrive out of order: apply one only if data.version is newer than
//    the order's version. An older event is still acknowledged with 200.
const seen = new Set();

function receiveWebhook(req) {
  const event = JSON.parse(req.body);
  const order = orders[event.data.id];
  order.state = event.data.state;
  order.version = event.data.version;
  applied.push(event.id);
  return { status: 200, headers: {}, body: { received: true } };
}
`;

  var HOOK_SOLUTION = HOOK_HEAD + R`
const seen = new Set();

function receiveWebhook(req) {
  const sig = parseSignature((req.headers || {})["webhook-signature"]);
  const expected = hex(hmac("sha256", SECRET, sig.t + "." + req.body));
  if (!sig.t || !sig.v1 || !timingSafeEqual(sig.v1, expected)) {
    return problem(400, "bad-signature", "Invalid signature", "The signature does not match the payload");
  }
  if (Math.abs(Math.floor(now() / 1000) - Number(sig.t)) > TOLERANCE) {
    return problem(400, "stale-webhook", "Webhook too old", "The timestamp is outside the 300 second tolerance");
  }
  const event = JSON.parse(req.body);
  if (seen.has(event.id)) {
    return { status: 200, headers: {}, body: { received: true, duplicate: true } };
  }
  seen.add(event.id);
  const order = orders[event.data.id];
  if (order && event.data.version > order.version) {
    order.state = event.data.state;
    order.version = event.data.version;
    applied.push(event.id);
  }
  return { status: 200, headers: {}, body: { received: true } };
}
`;

  /* The checks sign with the trusted harness directly, never with the
     learner's code, so a wrong signer can't agree with itself. */
  var HOOK_FIX = R`
function signedHeader(t, body) { return 't=' + t + ',v1=' + hex(hmac('sha256', 'whsec_test_4f9a', t + '.' + body)); }
function deliver(body, t, header) {
  var h = header === undefined ? signedHeader(t, body) : header;
  return receiveWebhook({ method: 'POST', path: '/webhooks', query: {}, headers: { 'webhook-signature': h }, body: body });
}
function evt(id, version, state) { return JSON.stringify({ id: id, type: 'order.updated', data: { id: 'ord_1', state: state, version: version } }); }
function nowS() { return Math.floor(now() / 1000); }
`;

  window.CODELAB.addUnit("api", {
    id: "api-u7",
    title: "Caching and work that takes a while",
    icon: "⏳",
    blurb: "Cache what's expensive without serving yesterday's answer, survive a thousand misses arriving at once, answer slow work with 202, and accept webhooks you can actually trust.",
    cheat: [
      { h: "Cache-aside with a TTL", lang: "js", code: "const hit = cache.get(id);\nif (hit && now() < hit.expires) return hit.value;\nconst value = db.load(id);\ncache.set(id, { value, expires: now() + TTL });\n// on write: db.save(row) THEN cache.delete(id)", note: "The application checks the cache, falls back to the database, and fills the cache itself. Delete on write rather than overwrite: an older write's value can't then be left behind if two updates race." },
      { h: "Coalesce the misses", lang: "js", code: "if (pending.has(id)) return pending.get(id);   // share it\nconst p = loadProduct(id)\n  .then(v => { cache.set(id, v); return v; })\n  .finally(() => pending.delete(id));          // success or failure\npending.set(id, p);", note: "A popular key expiring sends every concurrent request to the database at once — a stampede. One shared promise turns N loads into one. Never cache the failure." },
      { h: "202 Accepted and an operation", lang: "text", code: "POST /exports              → 202  location: /operations/op_1\n                                  retry-after: 1\nGET  /operations/op_1      → 200  { status: \"running\", progress: 50 }\nGET  /operations/op_1      → 200  { status: \"succeeded\",\n                                    result: { url: \"/exports/exp_1\" } }", note: "Work that takes longer than a request should becomes a resource you can poll (Google AIP-151, Microsoft's REST guidelines). A failure is a status of the operation, with a problem inside it — the POST itself already succeeded." },
      { h: "Verify a webhook", lang: "js", code: "const sig = parseSignature(req.headers[\"webhook-signature\"]);  // t=…,v1=…\nconst expected = hex(hmac(\"sha256\", SECRET, sig.t + \".\" + req.body));\nif (!timingSafeEqual(sig.v1, expected)) → 400\nif (|now − t| > 300 s) → 400        // replay window", note: "Sign the timestamp WITH the body, or an attacker replays an old signed payload forever. Verify the raw bytes — re-serialised JSON can differ by a single space. Stripe's Stripe-Signature uses this exact t=…,v1=… shape." },
      { h: "Receivers are idempotent", lang: "js", code: "if (seen.has(event.id)) return 200;        // at-least-once delivery\nseen.add(event.id);\nif (event.data.version > order.version)    // out-of-order delivery\n  apply(event);\nreturn 200;                                // ack fast, even when ignored", note: "Senders retry until they get a 2xx, so every event can arrive twice, and retries arrive out of order. Answer 200 for duplicates and stale events too, or the sender keeps retrying them." }
    ],
    lessons: [

      {
        id: "api-u7-1",
        title: "Cache-aside with TTL and invalidation",
        kind: "js", chip: "API", xp: 15, mins: 13, clock: 0,
        brief: "Unit 5 told *other people's* caches what they may keep. This lesson is your own: an in-memory cache in front of a slow database, the pattern called **cache-aside**.\n\n- **read**: look in the cache; on a miss, load from the database and store the value with an expiry; on a hit, return it without touching the database\n- **TTL**: an entry is trusted for `TTL` (30 s), no longer. Stale data has a deadline\n- **invalidate on write**: update the database *first*, then **delete** the cache entry, so the next read loads the new row. Without this, a price change is invisible for up to 30 s after the API itself reported success\n\n`db.load` counts every round trip in `db.loads`. `now()` is the fake clock, moved by `T.advance(ms)`.",
        steps: [
          { text: "Cache-aside: the first `getProduct` loads from the database and caches it; the second is a hit and costs no round trip.",
            test: R`
var a = getProduct('p_1');
T.eq([a, db.loads], [{ id: 'p_1', name: 'Desk lamp', price: 3499 }, 1], 'A miss loads once');
var b = getProduct('p_1');
T.eq([b, db.loads], [{ id: 'p_1', name: 'Desk lamp', price: 3499 }, 1], 'A hit: same value, no second load');
T.eq(getProduct('p_2').name, 'Bookshelf', 'Another key is its own entry');
T.eq(db.loads, 2, 'and costs its own load');
` },
          { text: "Honour the TTL: one millisecond before 30 s the entry is still good; at 30 s it has expired and is loaded again.",
            test: R`
T.advance(TTL - 1);
getProduct('p_1');
T.eq(db.loads, 2, 'At 29.999 s p_1 is still a hit');
T.advance(1);
getProduct('p_1');
T.eq(db.loads, 3, 'At 30 s it has expired: one fresh load');
getProduct('p_1');
T.eq(db.loads, 3, 'and the fresh value is cached again');
` },
          { text: "Invalidate on write: after `updateProduct`, the next read must see the new price — not the cached one.",
            test: R`
var row = updateProduct('p_1', { price: 2999 });
T.eq(row.price, 2999, 'updateProduct returns the new row');
T.eq(db.rows.p_1.price, 2999, 'and the database has it');
var after = getProduct('p_1');
T.eq(after.price, 2999, 'The very next read sees 2999 — a stale 3499 here is the bug invalidation prevents');
T.eq(db.loads, 4, 'It cost exactly one load to refill the entry');
` },
          { text: "Invalidation is per key: updating p_1 leaves p_2's entry alone, and the write itself loads nothing.",
            test: R`
var before = db.loads;
updateProduct('p_1', { name: 'Desk lamp (warm)' });
T.eq(db.loads, before, 'A write does not load anything — the next READ refills the cache');
getProduct('p_2');
T.eq(db.loads, before + 1, 'p_2 was cached at 0 s and is now 30 s old, so it reloads on its own schedule');
getProduct('p_2');
T.eq(db.loads, before + 1, 'and is a hit after that');
T.eq(getProduct('p_1').name, 'Desk lamp (warm)', 'p_1 shows the second update');
` }
        ],
        files: [{ name: "script.js", content: ASIDE_STARTER }],
        hints: [
          "Read the cache first: `const hit = cache.get(id); if (hit && now() < hit.expires) return hit.value;`.",
          "On a miss: `const value = db.load(id); if (value) cache.set(id, { value: value, expires: now() + TTL }); return value;`.",
          "`updateProduct` needs one more line after `db.save(row);`: `cache.delete(id);`."
        ],
        solution: { "script.js": ASIDE_SOLUTION }
      },

      {
        id: "api-u7-2",
        title: "Stampede: coalesce the misses",
        kind: "js", chip: "API", xp: 15, mins: 14,
        brief: "A popular product's cache entry expires at the busiest moment of the day. In the 50 ms the database takes to answer, **every request that arrives also misses**, and each starts its own load. A cache meant to protect the database just sent it a thousand identical queries at once: a **cache stampede**, also called the thundering herd.\n\nThe fix is **request coalescing**. The first miss starts the load and stores its *promise* in `pending`. Every caller that misses while it runs gets **the same promise**, so a thousand callers cost one round trip.\n\nTwo rules make it safe:\n\n- remove the pending entry when the load **settles** — success *or* failure (`.finally`)\n- **never cache a failure**: everyone waiting on a failed load sees the error, and the next caller starts a fresh load\n\n`loadProduct` takes 50 ms and counts itself in `loads`. The checks start many calls before awaiting any, exactly as concurrent requests would.",
        steps: [
          { text: "Fifty concurrent `getProduct('p_1')` calls on a cold cache must cause **one** load, and all fifty get the product.",
            test: R`
var calls = [];
for (var i = 0; i < 50; i++) calls.push(getProduct('p_1'));
var values = await Promise.all(calls);
T.eq(loads, 1, '50 simultaneous misses → ONE database load, shared by every caller');
T.expect(values.every(function (v) { return v && v.id === 'p_1' && v.price === 3499; }), 'Every caller gets the product');
` },
          { text: "After the load the value is cached, and the pending entry is gone. Different keys loading at the same time get one load each.",
            test: R`
var before = loads;
var again = await getProduct('p_1');
T.eq([again.id, loads - before], ['p_1', 0], 'A later call is a cache hit');
T.eq(pending.size, 0, 'Nothing is left pending once the load finished');
var calls = [];
for (var i = 0; i < 10; i++) { calls.push(getProduct('p_2')); calls.push(getProduct('p_3')); }
var vals = await Promise.all(calls);
T.eq(loads - before, 2, 'Two cold keys, ten callers each: one load per key');
T.eq(vals.filter(function (v) { return v.id === 'p_3'; }).length, 10, 'Each caller gets its own key');
` },
          { text: "A failed load is shared too — every waiting caller sees the error — but it is **not cached**: the next call loads again and succeeds.",
            test: R`
var before = loads;
failNext = true;
var calls = [];
for (var i = 0; i < 5; i++) calls.push(getProduct('p_4').then(function () { return 'ok'; }, function (e) { return e.message; }));
var outcomes = await Promise.all(calls);
T.eq(outcomes, ['database timeout', 'database timeout', 'database timeout', 'database timeout', 'database timeout'], 'All five waiting callers see the one failure');
T.eq(loads - before, 1, 'and it was still one load');
T.eq(pending.size, 0, 'A failed load must leave pending too — .finally, not just .then');
var retry = await getProduct('p_4');
T.eq([retry.id, loads - before], ['p_4', 2], 'The failure was not cached: the next call loads again and succeeds');
` }
        ],
        files: [{ name: "script.js", content: STAMPEDE_STARTER }],
        hints: [
          "Check both maps before loading: `if (cache.has(id)) return Promise.resolve(cache.get(id)); if (pending.has(id)) return pending.get(id);` — and drop the `async`, so you hand back the very same promise.",
          "Build the shared promise: `const p = loadProduct(id).then(value => { cache.set(id, value); return value; }).finally(() => pending.delete(id));`.",
          "Register it before returning: `pending.set(id, p); return p;` — the `.then` only runs on success, so a failure is never cached."
        ],
        solution: { "script.js": STAMPEDE_SOLUTION }
      },

      {
        id: "api-u7-3",
        title: "202 Accepted: long-running operations",
        kind: "js", chip: "API", xp: 15, mins: 15, clock: 0,
        brief: "An export of 300 rows takes 3 seconds; one of a million takes hours. Holding the HTTP request open that long fails everywhere: proxies time out, phones sleep, and a retry starts the work twice.\n\nSo slow work answers **`202 Accepted`** (RFC 9110: *accepted for processing, not yet completed*) and becomes a resource the client can poll, which Google's AIP-151 calls a **long-running operation**:\n\n- `POST /exports` → `202`, `location: /operations/op_1`, `retry-after: \"1\"` (a polite polling interval), and the operation's current view\n- `GET /operations/op_1` → `{ id, status: \"running\", progress }`, then `{ status: \"succeeded\", result: { url } }`\n- if the work fails, the *operation* says so — `{ status: \"failed\", error: <problem> }`. The POST already succeeded at what it promised: accepting the work\n- the result (`GET /exports/exp_1`) exists only once the operation has succeeded\n\nNothing runs in the background here. `opView` works out the state from the clock: an export finishes `rows × MS_PER_ROW` ms after it starts, and one over `MAX_ROWS` fails 2 s in.",
        steps: [
          { text: "`POST /exports` answers **202** with `location: /operations/op_1`, `retry-after: \"1\"` and the running operation at 0%. Invalid input is still a 422, and creates no operation.",
            test: R`
function req(m, p, b) { return handleRequest({ method: m, path: p, query: {}, headers: {}, body: b }); }
var bad = req('POST', '/exports', { rows: 0 });
T.eq([bad.status, bad.body.errors], [422, [{ detail: 'must be a positive integer', pointer: '#/rows' }]], 'rows 0 → 422, before any work is accepted');
var res = req('POST', '/exports', { rows: 300 });
T.eq(res.status, 202, 'Slow work answers 202 Accepted');
T.eq([res.headers.location, res.headers['retry-after']], ['/operations/op_1', '1'], 'location names the operation; retry-after suggests a polling interval');
T.eq(res.body, { id: 'op_1', status: 'running', progress: 0 }, 'The body is the operation, just started');
` },
          { text: "Poll it: halfway through, `GET /operations/op_1` answers `running` at 50% with `retry-after`, and the export doesn't exist yet.",
            test: R`
function get(p) { return handleRequest({ method: 'GET', path: p, query: {}, headers: {}, body: null }); }
T.advance(1500);
var op = get('/operations/op_1');
T.eq([op.status, op.body], [200, { id: 'op_1', status: 'running', progress: 50 }], '300 rows × 10 ms = 3 s, so at 1.5 s it is 50% done');
T.eq(op.headers['retry-after'], '1', 'Still running: tell the client when to look again');
T.eq(get('/exports/exp_1').status, 404, 'The export is not there until the operation succeeds');
` },
          { text: "At 3 s the operation has `succeeded` with `result.url`, carries no `retry-after`, and the export is served.",
            test: R`
function get(p) { return handleRequest({ method: 'GET', path: p, query: {}, headers: {}, body: null }); }
T.advance(1500);
var op = get('/operations/op_1');
T.eq(op.body, { id: 'op_1', status: 'succeeded', result: { url: '/exports/exp_1' } }, 'Done: the result says where the export is');
T.eq(op.headers['retry-after'], undefined, 'Nothing more to wait for: no retry-after');
T.eq(get('/exports/exp_1').body, { id: 'exp_1', rows: 300 }, 'The export itself');
T.advance(60000);
T.eq(get('/operations/op_1').body.status, 'succeeded', 'A finished operation stays finished');
` },
          { text: "A failure belongs to the operation: an export over `MAX_ROWS` is accepted, then reports `status: \"failed\"` with an `export-too-large` problem inside it. Its export never appears.",
            test: R`
function req(m, p, b) { return handleRequest({ method: m, path: p, query: {}, headers: {}, body: b }); }
var res = req('POST', '/exports', { rows: 5000 });
T.eq([res.status, res.headers.location, res.body.status], [202, '/operations/op_2', 'running'], 'A huge export is still accepted: 202');
T.advance(2000);
var op = req('GET', '/operations/op_2', null).body;
T.eq([op.id, op.status], ['op_2', 'failed'], 'Two seconds in, the operation has failed');
T.eq([op.error.type, op.error.status, op.error.detail], ['https://api.example.com/problems/export-too-large', 422, 'Exports are limited to 1000 rows'], 'error is a problem body');
T.eq(req('GET', '/exports/exp_2', null).status, 404, 'A failed operation has no result');
T.eq(req('GET', '/operations/op_9', null).status, 404, 'An unknown operation is a 404');
` }
        ],
        files: [{ name: "script.js", content: LRO_STARTER }],
        hints: [
          "Record the real timing: `const fails = rows > MAX_ROWS;` and `finishesAt: now() + (fails ? 2000 : rows * MS_PER_ROW)`, then return `{ status: 202, headers: { location: \"/operations/\" + op.id, \"retry-after\": \"1\" }, body: opView(op) }`.",
          "`opView` checks the clock first: `if (now() < op.finishesAt) { const progress = Math.floor(100 * (now() - op.startedAt) / (op.finishesAt - op.startedAt)); return { id: op.id, status: \"running\", progress: progress }; }`, then `op.fails`, then success.",
          "For `GET /exports/<id>`, find the operation with `Object.values(operations).find(o => o.exportId === parts[1])` and serve it only when `opView(op).status === \"succeeded\"`."
        ],
        solution: { "script.js": LRO_SOLUTION }
      },

      {
        id: "api-u7-4",
        title: "Webhooks you can trust",
        kind: "js", chip: "API", xp: 15, mins: 15, crypto: true, clock: 1760000000000,
        brief: "A **webhook** is the API calling *you*: when an order changes, the sender POSTs an event to your URL. Your endpoint is public, so it must work out whether an event is real and whether it is new.\n\n- **Signature.** The sender signs with a secret you share: `webhook-signature: t=<unix seconds>,v1=<hex HMAC-SHA256 of t + \".\" + body>`, the shape Stripe uses. Verify it over the **raw body text** as it arrived. Re-serialising the JSON can change a single space and break the comparison. Compare with `timingSafeEqual`\n- **Replay window.** The timestamp is inside the signature, so an attacker who captured a real event can't refresh it. Refuse a `t` more than `TOLERANCE` (300 s) from now\n- **At-least-once.** Senders retry until they get a 2xx, so the same event *will* arrive twice. Deduplicate by event id, and answer the duplicate with 200 so the sender stops\n- **Out of order.** Retries overtake each other. Apply an event only if its `data.version` is newer than what you have, and still answer 200\n\n`hmac`, `hex` and `timingSafeEqual` come from the crypto harness (Authentication course). `applied` records each event that changed an order. `now()` is a fake clock in milliseconds.",
        steps: [
          { text: "Verify the signature over the raw body: a correctly signed event is applied (200); a tampered body, a wrong secret or a missing header is **400** `bad-signature` and changes nothing.",
            test: HOOK_FIX + R`
var body = evt('evt_1', 2, 'paid');
var forged = body.replace('paid', 'refunded');
var bad = deliver(forged, nowS(), signedHeader(nowS(), body));
T.eq([bad.status, bad.body.type, bad.body.detail], [400, 'https://api.example.com/problems/bad-signature', 'The signature does not match the payload'], 'A body changed after signing → 400');
T.eq(deliver(body, nowS(), 't=' + nowS() + ',v1=' + hex(hmac('sha256', 'wrong-secret', nowS() + '.' + body))).status, 400, 'Signed with the wrong secret → 400');
T.eq(deliver(body, nowS(), '').status, 400, 'No signature at all → 400');
T.eq(orders.ord_1.state, 'pending', 'None of those changed the order');
var ok = deliver(body, nowS());
T.eq([ok.status, ok.body], [200, { received: true }], 'A genuine event → 200');
T.eq([orders.ord_1.state, orders.ord_1.version, applied], ['paid', 2, ['evt_1']], 'and it was applied');
var spaced = '{ "id": "evt_s", "type": "order.updated", "data": { "id": "ord_1", "state": "paid", "version": 2 } }';
T.eq(deliver(spaced, nowS()).status, 200, 'Signed over raw text WITH spaces: verify the bytes as sent, never JSON.stringify(JSON.parse(body))');
` },
          { text: "Enforce the replay window: a validly signed event whose `t` is more than 300 s away — past or future — is **400** `stale-webhook`. Within the window it is fine.",
            test: HOOK_FIX + R`
var t0 = nowS();
var old = evt('evt_old', 9, 'refunded');
var header = signedHeader(t0, old);
T.advance(301000);
var late = deliver(old, t0, header);
T.eq([late.status, late.body.type, late.body.detail], [400, 'https://api.example.com/problems/stale-webhook', 'The timestamp is outside the 300 second tolerance'], 'Replayed 301 s later → 400');
T.eq(deliver(evt('evt_future', 9, 'refunded'), nowS() + 301).status, 400, 'A timestamp 301 s in the future → 400 too');
T.eq(orders.ord_1.state, 'paid', 'Neither changed the order');
T.eq(deliver(evt('evt_edge', 2, 'paid'), nowS() - 300).status, 200, 'Exactly 300 s old is still inside the window');
` },
          { text: "Deduplicate: the same event delivered twice is acknowledged both times, the second as `{ received: true, duplicate: true }`, and applied once.",
            test: HOOK_FIX + R`
var body = evt('evt_2', 3, 'shipped');
var first = deliver(body, nowS());
var second = deliver(body, nowS());
T.eq(first.body, { received: true }, 'First delivery');
T.eq([second.status, second.body], [200, { received: true, duplicate: true }], 'The retry is acknowledged with 200 — so the sender stops — and marked duplicate');
T.eq(applied, ['evt_1', 'evt_2'], 'evt_2 was applied exactly once');
` },
          { text: "Ignore stale versions: version 5 arrives before version 4. Apply 5; acknowledge 4 with 200 but leave the order at version 5.",
            test: HOOK_FIX + R`
var v5 = deliver(evt('evt_4', 5, 'refunded'), nowS());
var v4 = deliver(evt('evt_3', 4, 'delivered'), nowS());
T.eq([v5.status, v4.status], [200, 200], 'Both are acknowledged');
T.eq([orders.ord_1.state, orders.ord_1.version], ['refunded', 5], 'The older event, arriving late, did not roll the order back');
T.eq(applied, ['evt_1', 'evt_2', 'evt_4'], 'Only events that moved the order forward were applied');
` }
        ],
        files: [{ name: "script.js", content: HOOK_STARTER }],
        hints: [
          "Verify first: `const sig = parseSignature((req.headers || {})[\"webhook-signature\"]);` then `const expected = hex(hmac(\"sha256\", SECRET, sig.t + \".\" + req.body));` and refuse unless `sig.t && sig.v1 && timingSafeEqual(sig.v1, expected)`.",
          "Then the window: `if (Math.abs(Math.floor(now() / 1000) - Number(sig.t)) > TOLERANCE) return problem(400, \"stale-webhook\", …);` — only parse the JSON after both checks pass.",
          "`if (seen.has(event.id)) return { status: 200, headers: {}, body: { received: true, duplicate: true } }; seen.add(event.id);` — and apply only `if (order && event.data.version > order.version)`."
        ],
        solution: { "script.js": HOOK_SOLUTION }
      },

      {
        id: "api-quiz-7",
        title: "Unit 7 quiz: Caching and slow work",
        kind: "quiz", xp: 10,
        brief: "Cache-aside, stampedes, 202 and webhooks. 80% to pass.",
        questions: [
          { q: "After `updateProduct` saves a new price, what should cache-aside do with the cached entry?",
            choices: ["Nothing, since the TTL will expire it within 30 seconds", "Delete it, so the next read loads the new row", "Double its TTL", "Reload it immediately on every server"],
            answer: 1, explain: "Deleting it makes the very next read fetch the new row. Leaving it means the API reports success and then serves the old price for up to the TTL. Deleting rather than writing the new value also avoids an older write's value winning a race." },
          { q: "A hot key expires and 1,000 requests miss it within the same 50 ms. Without coalescing, how many database loads happen?",
            choices: ["1", "About 1,000, one for each request that missed", "0, because the cache serves the stale value until the load finishes", "2"],
            answer: 1, explain: "Every request that checks the cache before the first load finishes sees a miss and starts its own load. Sharing the in-flight promise turns that into one load. Serving stale values while refreshing is a different technique (stale-while-revalidate), and plain cache-aside doesn't do it." },
          { q: "A coalesced load fails. What should happen to the five callers waiting on it, and to the next caller?",
            choices: ["The five see the error; the next caller starts a fresh load", "The five see the error, and the error is cached for the TTL", "The five wait for an automatic retry", "The five get null and the next caller gets null too"],
            answer: 0, explain: "Everyone sharing the promise shares its outcome, including a failure. Caching the failure would turn one database timeout into 30 seconds of errors, so the pending entry is removed and nothing is stored." },
          { q: "An export takes 20 minutes. What should `POST /exports` answer?",
            choices: ["200 with the finished export, after 20 minutes", "201 Created with the export's URL immediately, before the export has actually run", "504 Gateway Timeout", "202 Accepted with a `location` for an operation to poll"],
            answer: 3, explain: "202 means accepted for processing but not done. The operation resource gives the client something to poll and a place for the eventual result or failure. Holding the request open for 20 minutes fails at every proxy and phone in between." },
          { q: "Why does a webhook signature cover the timestamp as well as the body?",
            choices: ["So the receiver can sort events by the time they were created rather than received", "Because HMAC needs at least two inputs", "So a captured event can't be replayed later with a fresh timestamp", "To make the signature shorter"],
            answer: 2, explain: "With the timestamp inside the signed content, changing it invalidates the signature. Combined with a tolerance window, a captured real event becomes useless after a few minutes." },
          { q: "The same webhook event arrives twice. What should the receiver answer the second time?",
            choices: ["200, without applying it again", "409 Conflict, so the sender knows it was a duplicate", "400 Bad Request", "No response at all"],
            answer: 0, explain: "Delivery is at-least-once, so duplicates are normal, not an error. A non-2xx makes the sender retry the duplicate again and again. Deduplicating by event id keeps the effect single." },
          { q: "Why must a webhook be verified over the raw body text rather than `JSON.stringify(JSON.parse(body))`?",
            choices: ["Parsing and serialising again is too slow for an endpoint that must answer within a few seconds", "Re-serialising can change whitespace or key order, so the bytes no longer match what was signed", "JSON.parse removes the signature", "Raw text is shorter"],
            answer: 1, explain: "The HMAC covers exact bytes. The sender may have sent spaces, a different key order or escaped characters, and any change, even one space, produces a different signature. Frameworks that parse the body for you are a common cause of this bug." }
        ]
      }
    ]
  });
})();
