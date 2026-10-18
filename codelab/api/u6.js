/* Advanced API Design — Unit 6: Rate limiting */
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

  /* ---------- api-u6-1: fixed window ---------- */
  var FIXED_HEAD = PROBLEM_FN + R`
const LIMIT = 5;              // requests…
const WINDOW = 60 * 1000;     // …per minute, per API key
const counters = new Map();   // api key → { start, count } for its current window

function keyOf(req) { return (req.headers || {})["x-api-key"] || ""; }

// The work behind the limit.
function serve(req) { return { status: 200, headers: {}, body: { ok: true } }; }
`;

  var FIXED_STARTER = FIXED_HEAD + R`
function handleRequest(req) {
  const key = keyOf(req);
  if (!key) return problem(401, "unauthorized", "Unauthorized", "Send an x-api-key header");

  // 1) Windows are aligned to the clock: windowStart = Math.floor(now() / WINDOW) * WINDOW.
  //    A key whose counter is from an older window starts again at count 0.
  // 2) A key that already used LIMIT requests this window → problem(429, "rate-limited",
  //    "Too Many Requests", "Limit is 5 requests per minute") with headers:
  //      retry-after: whole seconds until the window ends (round UP), as a string
  //      x-ratelimit-limit: "5"   x-ratelimit-remaining: "0"
  // 1) Otherwise count it, serve it, and add x-ratelimit-limit and x-ratelimit-remaining
  //    (requests left this window) to the response.
  return serve(req);
}
`;

  var FIXED_SOLUTION = FIXED_HEAD + R`
function handleRequest(req) {
  const key = keyOf(req);
  if (!key) return problem(401, "unauthorized", "Unauthorized", "Send an x-api-key header");

  const windowStart = Math.floor(now() / WINDOW) * WINDOW;
  let c = counters.get(key);
  if (!c || c.start !== windowStart) {
    c = { start: windowStart, count: 0 };
    counters.set(key, c);
  }
  if (c.count >= LIMIT) {
    const res = problem(429, "rate-limited", "Too Many Requests", "Limit is 5 requests per minute");
    res.headers["retry-after"] = String(Math.ceil((windowStart + WINDOW - now()) / 1000));
    res.headers["x-ratelimit-limit"] = String(LIMIT);
    res.headers["x-ratelimit-remaining"] = "0";
    return res;
  }
  c.count++;
  const res = serve(req);
  res.headers["x-ratelimit-limit"] = String(LIMIT);
  res.headers["x-ratelimit-remaining"] = String(LIMIT - c.count);
  return res;
}
`;

  /* ---------- api-u6-2: sliding window ---------- */
  var SLIDING_HEAD = PROBLEM_FN + R`
const LIMIT = 5;
const WINDOW = 60 * 1000;

// Last lesson's limiter, as a yes/no decision — for comparison.
const fixedCounters = new Map();
function allowFixed(key) {
  const start = Math.floor(now() / WINDOW) * WINDOW;
  let c = fixedCounters.get(key);
  if (!c || c.start !== start) { c = { start: start, count: 0 }; fixedCounters.set(key, c); }
  if (c.count >= LIMIT) return false;
  c.count++;
  return true;
}

// key → { start, count, prev }: this window's start and count, and the count of
// the window just before it
const windows = new Map();
`;

  var SLIDING_STARTER = SLIDING_HEAD + R`
// Cloudflare's sliding-window counter. Estimate how many requests the last
// WINDOW milliseconds held, assuming the previous window's requests were spread
// evenly across it:
//
//   estimate = prev * (WINDOW - elapsed) / WINDOW + count
//              elapsed = now() - start of the current window
//
// Allow (and count) the request only if estimate < LIMIT.
// 1) Keep { start, count, prev } per key in windows.
// 2) When the clock moves into a new window: the window that just ended becomes prev …
// 3) …unless more than one window has passed, in which case prev is 0.
function allowSliding(key) {
  return allowFixed("sliding:" + key);
}

function handleRequest(req) {
  const key = (req.headers || {})["x-api-key"] || "";
  if (!allowSliding(key)) return problem(429, "rate-limited", "Too Many Requests", "Limit is 5 requests per minute");
  return { status: 200, headers: {}, body: { ok: true } };
}
`;

  var SLIDING_SOLUTION = SLIDING_HEAD + R`
// Cloudflare's sliding-window counter.
function allowSliding(key) {
  const start = Math.floor(now() / WINDOW) * WINDOW;
  let w = windows.get(key);
  if (!w) {
    w = { start: start, count: 0, prev: 0 };
    windows.set(key, w);
  }
  if (w.start !== start) {
    w.prev = (w.start === start - WINDOW) ? w.count : 0;
    w.start = start;
    w.count = 0;
  }
  const elapsed = now() - w.start;
  const estimate = w.prev * (WINDOW - elapsed) / WINDOW + w.count;
  if (estimate >= LIMIT) return false;
  w.count++;
  return true;
}

function handleRequest(req) {
  const key = (req.headers || {})["x-api-key"] || "";
  if (!allowSliding(key)) return problem(429, "rate-limited", "Too Many Requests", "Limit is 5 requests per minute");
  return { status: 200, headers: {}, body: { ok: true } };
}
`;

  /* ---------- api-u6-3: token bucket ---------- */
  var BUCKET_HEAD = PROBLEM_FN + R`
const CAPACITY = 10;          // the biggest burst a key can make
const REFILL_MS = 500;        // one token back every 500 ms: 2 per second
const COST = { "GET /search": 1, "POST /reports": 5 };
const buckets = new Map();    // api key → { tokens, at }

function serve(route) { return { status: 200, headers: {}, body: { ok: true, route: route } }; }
`;

  var BUCKET_STARTER = BUCKET_HEAD + R`
// 1) Every key starts with a FULL bucket.
// 2) Refill lazily — no timers. Each time a key shows up, add
//      (now() - at) / REFILL_MS tokens, never above CAPACITY, then set at = now().
// 3) A request costs COST[route] tokens. Enough → take them; otherwise refuse
//    with retry-after = Math.ceil((cost - tokens) * REFILL_MS / 1000) seconds.
function take(key, cost) {
  return { ok: true, tokens: CAPACITY, retryAfter: 0 };
}

function handleRequest(req) {
  const key = (req.headers || {})["x-api-key"] || "";
  if (!key) return problem(401, "unauthorized", "Unauthorized", "Send an x-api-key header");
  const route = req.method + " " + req.path;
  const cost = COST[route];
  if (cost === undefined) return problem(404, "not-found", "Not Found", "No route for " + route);

  const t = take(key, cost);
  if (!t.ok) {
    const res = problem(429, "rate-limited", "Too Many Requests", route + " costs " + cost + " tokens");
    res.headers["retry-after"] = String(t.retryAfter);
    return res;
  }
  const res = serve(route);
  res.headers["x-ratelimit-remaining"] = String(Math.floor(t.tokens));
  return res;
}
`;

  var BUCKET_SOLUTION = BUCKET_HEAD + R`
function take(key, cost) {
  let b = buckets.get(key);
  if (!b) {
    b = { tokens: CAPACITY, at: now() };
    buckets.set(key, b);
  }
  b.tokens = Math.min(CAPACITY, b.tokens + (now() - b.at) / REFILL_MS);
  b.at = now();
  if (b.tokens >= cost) {
    b.tokens -= cost;
    return { ok: true, tokens: b.tokens, retryAfter: 0 };
  }
  return { ok: false, tokens: b.tokens, retryAfter: Math.ceil((cost - b.tokens) * REFILL_MS / 1000) };
}

function handleRequest(req) {
  const key = (req.headers || {})["x-api-key"] || "";
  if (!key) return problem(401, "unauthorized", "Unauthorized", "Send an x-api-key header");
  const route = req.method + " " + req.path;
  const cost = COST[route];
  if (cost === undefined) return problem(404, "not-found", "Not Found", "No route for " + route);

  const t = take(key, cost);
  if (!t.ok) {
    const res = problem(429, "rate-limited", "Too Many Requests", route + " costs " + cost + " tokens");
    res.headers["retry-after"] = String(t.retryAfter);
    return res;
  }
  const res = serve(route);
  res.headers["x-ratelimit-remaining"] = String(Math.floor(t.tokens));
  return res;
}
`;

  /* ---------- api-u6-4: the client ---------- */
  var CLIENT_HEAD = R`
// send(req) → a promise of the response
// wait(ms)  → a promise that resolves after ms
// random()  → a number from 0 up to (not including) 1
// All three are handed in, so the checks can control and record them.
const BASE = 100;             // ms
const CAP = 2000;             // ms: no single wait is longer
const MAX_ATTEMPTS = 4;       // sends, including the first
const RETRY_ON = [429, 503];

// Safe to send twice? Idempotent methods are; a POST is only with an idempotency key.
function canRepeat(req) {
  return ["GET", "HEAD", "PUT", "DELETE"].includes(req.method) || !!(req.headers || {})["idempotency-key"];
}
`;

  var CLIENT_STARTER = CLIENT_HEAD + R`
// 2) How long to wait before retry number n (n = 1 for the first retry):
//    the response's retry-after header (whole seconds) wins when present;
//    otherwise "full jitter": Math.floor(random() * Math.min(CAP, BASE * 2 ** n))
function delayFor(n, res, random) {
  return 0;
}

// 1) Retry only a status in RETRY_ON, and only a request that canRepeat.
//    Everything else — a success, a 400, a 404 — is returned at once.
// 2) Wait delayFor(n, …) before each retry.
// 3) At most MAX_ATTEMPTS sends; then return the last response.
async function callWithRetry(req, send, wait, random) {
  let res;
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    res = await send(req);
    if (res.status < 300) return res;
  }
  return res;
}
`;

  var CLIENT_SOLUTION = CLIENT_HEAD + R`
// How long to wait before retry number n (n = 1 for the first retry).
function delayFor(n, res, random) {
  const after = (res.headers || {})["retry-after"];
  if (after !== undefined && /^[0-9]+$/.test(after)) return Number(after) * 1000;
  return Math.floor(random() * Math.min(CAP, BASE * 2 ** n));
}

async function callWithRetry(req, send, wait, random) {
  let res;
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    if (attempt > 0) await wait(delayFor(attempt, res, random));
    res = await send(req);
    if (!RETRY_ON.includes(res.status) || !canRepeat(req)) return res;
  }
  return res;
}
`;

  /* Shared test fixture for api-u6-4: a scripted server, a recording wait and
     a fixed random(). Each step builds its own, so steps don't leak state. */
  var CLIENT_FIX = R`
function rig(statuses, rnd) {
  var r = { sends: 0, waits: [] };
  r.send = function () {
    var s = statuses[Math.min(r.sends, statuses.length - 1)];
    r.sends++;
    var res = typeof s === 'number' ? { status: s, headers: {}, body: null } : { status: s[0], headers: { 'retry-after': s[1] }, body: null };
    return Promise.resolve(res);
  };
  r.wait = function (ms) { r.waits.push(ms); return Promise.resolve(); };
  r.random = function () { return rnd === undefined ? 0.5 : rnd; };
  return r;
}
var GET = { method: 'GET', path: '/search', query: {}, headers: {}, body: null };
`;

  window.CODELAB.addUnit("api", {
    id: "api-u6",
    title: "Rate limiting",
    icon: "🚦",
    blurb: "One caller with a bug can take the API down for everyone. Limit each key — by window, by sliding estimate, by token bucket — answer 429 with a time to come back, and write the client that actually honours it.",
    cheat: [
      { h: "429 and its headers", lang: "text", code: "429 Too Many Requests              (RFC 6585)\nretry-after: 45                    seconds to wait (RFC 9110)\nx-ratelimit-limit: 5\nx-ratelimit-remaining: 0", note: "The x-ratelimit-* names are GitHub's and widely copied. An IETF httpapi draft is standardising RateLimit and RateLimit-Policy fields, so check what your clients expect. Retry-After is the one every client should read." },
      { h: "Fixed window", lang: "js", code: "const start = Math.floor(now() / WINDOW) * WINDOW;\nif (c.start !== start) c = { start, count: 0 };\nif (c.count >= LIMIT) return 429;   // retry-after: until start + WINDOW\nc.count++;", note: "One counter per key per window — cheap, and easy to keep in Redis with INCR + EXPIRE. Its flaw: LIMIT at the end of one window plus LIMIT at the start of the next is a 2× burst inside a second." },
      { h: "Sliding-window counter", lang: "js", code: "estimate = prev * (WINDOW - elapsed) / WINDOW + count;\nif (estimate >= LIMIT) return false;\ncount++;", note: "Cloudflare's approximation: weight the previous window's count by how much of it is still inside the last minute. Two counters per key, no per-request log, and no boundary burst." },
      { h: "Token bucket", lang: "js", code: "b.tokens = Math.min(CAPACITY, b.tokens + (now() - b.at) / REFILL_MS);\nb.at = now();\nif (b.tokens >= cost) { b.tokens -= cost; /* allow */ }\nelse retryAfter = Math.ceil((cost - b.tokens) * REFILL_MS / 1000);", note: "CAPACITY is the burst you allow, the refill rate is the long-run average. Refill lazily on each request — no timers. Charging expensive endpoints more tokens limits cost, not just request count." },
      { h: "A client that behaves", lang: "js", code: "// retry only 429/503, only if safe to repeat\nconst wait = res.headers[\"retry-after\"] !== undefined\n  ? Number(res.headers[\"retry-after\"]) * 1000\n  : Math.floor(random() * Math.min(CAP, BASE * 2 ** n));   // full jitter", note: "Exponential backoff spaces retries out; jitter (Marc Brooker, AWS) stops a thousand clients that failed together from retrying together. Never retry a 400 — it will fail the same way — and never retry a POST without an idempotency key." }
    ],
    lessons: [

      {
        id: "api-u6-1",
        title: "Fixed window: 429 and Retry-After",
        kind: "js", chip: "API", xp: 15, mins: 14, clock: 0,
        brief: "Every public API limits its callers, because one client with a retry loop bug can use all of the capacity meant for everyone. The simplest limiter is a **fixed window**: each API key may make `LIMIT` requests per `WINDOW`, counted in windows aligned to the clock (0:00–0:59, 1:00–1:59, …).\n\nWhen a key runs out, the answer is **`429 Too Many Requests`** (RFC 6585) with:\n\n- **`retry-after`** — whole seconds until the window ends, rounded *up*. Round down, and a client that obeys exactly comes back a moment too early and is refused again\n- **`x-ratelimit-limit`** and **`x-ratelimit-remaining`** — GitHub's header names, on every response, so well-behaved clients slow down *before* they hit the wall\n\nThe key comes from the `x-api-key` header, and `now()` is the fake clock: it starts at 0, and the checks move it with `T.advance(ms)`.",
        steps: [
          { text: "Count requests per key in clock-aligned windows. The first 5 in a minute are served, each with `x-ratelimit-limit: \"5\"` and `x-ratelimit-remaining` counting down to `\"0\"`.",
            test: R`
function call(key) { return handleRequest({ method: 'GET', path: '/search', query: {}, headers: { 'x-api-key': key }, body: null }); }
var left = [];
for (var i = 0; i < 5; i++) {
  var r = call('k1');
  T.eq(r.status, 200, 'Request ' + (i + 1) + ' of 5 is served');
  left.push(r.headers['x-ratelimit-remaining']);
}
T.eq(left, ['4', '3', '2', '1', '0'], 'x-ratelimit-remaining counts down, as a string');
T.eq(call('k2').headers['x-ratelimit-limit'], '5', 'Every response carries x-ratelimit-limit');
` },
          { text: "The 6th request in the window is a **429** `rate-limited` problem with `retry-after` (seconds left in the window, rounded up) and `x-ratelimit-remaining: \"0\"`. Other keys are unaffected.",
            test: R`
function call(key) { return handleRequest({ method: 'GET', path: '/search', query: {}, headers: { 'x-api-key': key }, body: null }); }
var r = call('k1');
T.eq(r.status, 429, 'k1 used its 5: the 6th → 429');
T.eq([r.body.type, r.body.title, r.body.detail], ['https://api.example.com/problems/rate-limited', 'Too Many Requests', 'Limit is 5 requests per minute'], 'The rate-limited problem');
T.eq([r.headers['retry-after'], r.headers['x-ratelimit-remaining']], ['60', '0'], 'At 0 s the window ends in 60 s');
T.advance(15000);
T.eq(call('k1').headers['retry-after'], '45', '15 s later: 45 s to go');
T.eq(call('k2').headers['x-ratelimit-remaining'], '3', 'k2 has its own counter (it used 1 earlier, this is its 2nd)');
` },
          { text: "A new window starts a new count. And `retry-after` rounds **up**: 29.5 seconds left is `\"30\"`.",
            test: R`
function call(key) { return handleRequest({ method: 'GET', path: '/search', query: {}, headers: { 'x-api-key': key }, body: null }); }
T.advance(45000);
var fresh = call('k1');
T.eq([fresh.status, fresh.headers['x-ratelimit-remaining']], [200, '4'], 'At 60 s a new window begins: k1 is served again');
for (var i = 0; i < 4; i++) call('k1');
T.advance(30500);
var r = call('k1');
T.eq([r.status, r.headers['retry-after']], [429, '30'], 'At 90.5 s, 29.5 s remain: retry-after rounds UP to 30');
` },
          { text: "Refusals don't carry over: once the window turns, a key that kept hammering gets its full 5 again. And no key at all is a **401**.",
            test: R`
function call(key) { return handleRequest({ method: 'GET', path: '/search', query: {}, headers: { 'x-api-key': key }, body: null }); }
for (var i = 0; i < 10; i++) call('k1');
T.advance(29500);
var served = 0;
for (var j = 0; j < 7; j++) if (call('k1').status === 200) served++;
T.eq(served, 5, 'In the new window k1 gets exactly 5, however many refusals came before');
var none = handleRequest({ method: 'GET', path: '/search', query: {}, headers: {}, body: null });
T.eq([none.status, none.body.detail], [401, 'Send an x-api-key header'], 'No key → 401');
` }
        ],
        files: [{ name: "script.js", content: FIXED_STARTER }],
        hints: [
          "Find the window and reset stale counters: `const windowStart = Math.floor(now() / WINDOW) * WINDOW; let c = counters.get(key); if (!c || c.start !== windowStart) { c = { start: windowStart, count: 0 }; counters.set(key, c); }`.",
          "Refuse before counting: `if (c.count >= LIMIT) { const res = problem(429, …); res.headers[\"retry-after\"] = String(Math.ceil((windowStart + WINDOW - now()) / 1000)); … return res; }`.",
          "Then `c.count++;`, call `serve(req)`, and set `res.headers[\"x-ratelimit-remaining\"] = String(LIMIT - c.count);` along with the limit header."
        ],
        solution: { "script.js": FIXED_SOLUTION }
      },

      {
        id: "api-u6-2",
        title: "The boundary burst and the sliding window",
        kind: "js", chip: "API", xp: 15, mins: 15, clock: 0,
        brief: "A fixed window has a hole at its edge. A key can make 5 requests at 0:59 — legal in window 0 — and 5 more at 1:00 — legal in window 1. That is **10 requests in one second**, double the limit, and a client that discovers it will use it.\n\nA true sliding window would log every request's time and count the last 60 seconds, which costs memory per request. **Cloudflare's sliding-window counter** gets close with two numbers per key. It assumes the previous window's requests were spread evenly, and weights them by how much of that window is still inside the last minute:\n\n`estimate = prev × (WINDOW − elapsed) / WINDOW + count`\n\n…where `elapsed` is how far we are into the current window. Allow, and count, only when `estimate < LIMIT`. At 1:00, `elapsed` is 0, the previous window's 5 weigh in full, and the burst is refused. Halfway through, they weigh half.\n\n`allowFixed` is last lesson's limiter for comparison. Write `allowSliding(key)`.",
        steps: [
          { text: "Five requests at 59 s fill window 0. At 60 s the fixed window happily allows five more; the sliding counter must refuse — the previous window's 5 still count in full.",
            test: R`
T.advance(59000);
for (var i = 0; i < 5; i++) { T.expect(allowFixed('f'), 'fixed: request ' + (i + 1) + ' at 59 s'); T.expect(allowSliding('s'), 'sliding: request ' + (i + 1) + ' at 59 s should be allowed'); }
T.advance(1000);
var fixedBurst = 0;
for (var j = 0; j < 5; j++) if (allowFixed('f')) fixedBurst++;
T.eq(fixedBurst, 5, 'The fixed window allows 5 MORE at 60 s — 10 inside one second');
T.eq(allowSliding('s'), false, 'At 60 s the estimate is 5 × 60/60 + 0 = 5, not below the limit: refused');
var res = handleRequest({ method: 'GET', path: '/search', query: {}, headers: { 'x-api-key': 's' }, body: null });
T.eq(res.status, 429, 'and handleRequest answers 429');
` },
          { text: "Halfway into the window the previous 5 weigh 2.5, so exactly **3** more fit (2.5, 3.5, 4.5 are below 5; 5.5 is not).",
            test: R`
T.advance(30000);
var ok = 0;
for (var i = 0; i < 6; i++) if (allowSliding('s')) ok++;
T.eq(ok, 3, 'At 90 s: 5 × 30/60 = 2.5, so 3 requests fit before the estimate reaches 5');
` },
          { text: "When the window rolls over, the one that just ended becomes `prev`: at 120 s the previous window held 3, so **2** more fit.",
            test: R`
T.advance(30000);
var ok = 0;
for (var i = 0; i < 6; i++) if (allowSliding('s')) ok++;
T.eq(ok, 2, 'At 120 s: prev is 3 (window 60–120 s), weighted in full — 2 fit');
` },
          { text: "If more than a whole window has passed with no requests, `prev` is **0**, not the stale count. Keys stay independent.",
            test: R`
T.advance(120000);
var ok = 0;
for (var i = 0; i < 6; i++) if (allowSliding('s')) ok++;
T.eq(ok, 5, 'At 240 s nothing happened in 180–240 s: prev is 0 and all 5 fit');
var other = 0;
for (var j = 0; j < 6; j++) if (allowSliding('another')) other++;
T.eq(other, 5, 'A different key has its own window');
` }
        ],
        files: [{ name: "script.js", content: SLIDING_STARTER }],
        hints: [
          "Create the record on first use: `if (!w) { w = { start: start, count: 0, prev: 0 }; windows.set(key, w); }` with `start` the clock-aligned window start.",
          "On a new window: `if (w.start !== start) { w.prev = (w.start === start - WINDOW) ? w.count : 0; w.start = start; w.count = 0; }` — only the IMMEDIATELY previous window counts.",
          "Then `const estimate = w.prev * (WINDOW - (now() - w.start)) / WINDOW + w.count; if (estimate >= LIMIT) return false; w.count++; return true;`."
        ],
        solution: { "script.js": SLIDING_SOLUTION }
      },

      {
        id: "api-u6-3",
        title: "Token bucket: bursts and cost",
        kind: "js", chip: "API", xp: 15, mins: 15, clock: 0,
        brief: "Windows count *requests*. A **token bucket** models two things APIs actually care about: **how big a burst** a client may make, and **how much work** each request is.\n\n- each key has a bucket holding up to `CAPACITY` tokens (10), and **starts full**\n- tokens flow back at one per `REFILL_MS` (500 ms), so the long-run rate is 2 per second\n- a request costs `COST[route]` tokens: a search costs 1, generating a report costs 5. Enough tokens → take them and serve; too few → 429\n\nThere are no timers. A bucket is refilled **lazily**: whenever its key shows up, add the tokens that time has earned since `at`, cap at `CAPACITY`, and move `at` to now. A 429's `retry-after` is how long the missing tokens take to arrive, rounded up to whole seconds.\n\nWrite `take(key, cost)` returning `{ ok, tokens, retryAfter }`. `handleRequest` is provided and puts `x-ratelimit-remaining` (whole tokens left) on every success.",
        steps: [
          { text: "A new key starts full: 10 searches in a row are served, remaining counting 9 down to 0. The 11th is a 429 with `retry-after: \"1\"`.",
            test: R`
function search(key) { return handleRequest({ method: 'GET', path: '/search', query: {}, headers: { 'x-api-key': key }, body: null }); }
var left = [];
for (var i = 0; i < 10; i++) {
  var r = search('k1');
  T.eq(r.status, 200, 'Search ' + (i + 1) + ' of the opening burst');
  left.push(r.headers['x-ratelimit-remaining']);
}
T.eq(left, ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'], 'The burst drains the bucket');
var no = search('k1');
T.eq([no.status, no.headers['retry-after']], [429, '1'], 'Empty: the 11th waits for one token (0.5 s, rounded up to 1)');
` },
          { text: "Refill lazily: 1.5 s earns 3 tokens, so 3 more searches pass. Half a token is not enough — a quarter-second later it is.",
            test: R`
function search(key) { return handleRequest({ method: 'GET', path: '/search', query: {}, headers: { 'x-api-key': key }, body: null }); }
T.advance(1500);
var ok = 0;
for (var i = 0; i < 5; i++) if (search('k1').status === 200) ok++;
T.eq(ok, 3, '1.5 s at 2 tokens per second → 3 searches');
T.advance(250);
T.eq(search('k1').status, 429, 'After 250 ms the bucket holds half a token: not enough');
T.advance(250);
T.eq(search('k1').status, 200, 'Another 250 ms makes a whole token');
` },
          { text: "Charge by cost: a report takes 5 tokens. A full bucket pays for two; the third must wait for 5 tokens — `retry-after: \"3\"` (2.5 s, rounded up).",
            test: R`
function report(key) { return handleRequest({ method: 'POST', path: '/reports', query: {}, headers: { 'x-api-key': key }, body: null }); }
T.advance(10000);
var a = report('k1'), b = report('k1');
T.eq([a.status, a.headers['x-ratelimit-remaining'], b.status, b.headers['x-ratelimit-remaining']], [200, '5', 200, '0'], '10 s of refill is capped at 10 tokens: two reports');
var c = report('k1');
T.eq([c.status, c.headers['retry-after']], [429, '3'], 'The third needs 5 tokens = 2.5 s → retry-after 3');
T.eq(c.body.detail, 'POST /reports costs 5 tokens', 'The problem says what it costs');
T.advance(2500);
T.eq(report('k1').status, 200, 'After 2.5 s exactly 5 tokens are back');
` },
          { text: "The cap is the point: a minute of idling still buys only a 10-request burst. Other keys have their own full bucket.",
            test: R`
function search(key) { return handleRequest({ method: 'GET', path: '/search', query: {}, headers: { 'x-api-key': key }, body: null }); }
T.advance(60000);
var ok = 0;
for (var i = 0; i < 15; i++) if (search('k1').status === 200) ok++;
T.eq(ok, 10, 'A long idle refills to CAPACITY and no further — the burst is still 10');
T.eq(search('k2').headers['x-ratelimit-remaining'], '9', 'k2 starts full');
T.eq(handleRequest({ method: 'DELETE', path: '/search', query: {}, headers: { 'x-api-key': 'k2' }, body: null }).status, 404, 'An unknown route is a 404 and costs nothing');
` }
        ],
        files: [{ name: "script.js", content: BUCKET_STARTER }],
        hints: [
          "Start full on first sight: `let b = buckets.get(key); if (!b) { b = { tokens: CAPACITY, at: now() }; buckets.set(key, b); }`.",
          "Refill, then move the clock mark: `b.tokens = Math.min(CAPACITY, b.tokens + (now() - b.at) / REFILL_MS); b.at = now();`.",
          "`if (b.tokens >= cost) { b.tokens -= cost; return { ok: true, tokens: b.tokens, retryAfter: 0 }; }` — otherwise `return { ok: false, tokens: b.tokens, retryAfter: Math.ceil((cost - b.tokens) * REFILL_MS / 1000) };`."
        ],
        solution: { "script.js": BUCKET_SOLUTION }
      },

      {
        id: "api-u6-4",
        title: "Being a good client: backoff, jitter and Retry-After",
        kind: "js", chip: "API", xp: 15, mins: 14,
        brief: "A limit only works if clients respect it. Retrying a 429 immediately, in a loop, is how a brief overload becomes an outage. Write the retry policy a good client library ships.\n\n- **Retry only what can succeed.** A `429` or `503` may succeed later. A `400` or `404` will fail the same way every time, so return it at once\n- **Retry only what is safe to repeat.** GET, PUT and DELETE are; a POST is only with an `idempotency-key` (Unit 4). `canRepeat(req)` is provided\n- **Wait before each retry.** If the response has `retry-after`, wait exactly that many seconds; the server knows best. Otherwise use **exponential backoff with full jitter** (Marc Brooker, AWS Architecture Blog): before retry *n*, wait `Math.floor(random() * Math.min(CAP, BASE * 2 ** n))` ms. Without jitter, a thousand clients that failed together retry together, and fail together\n- **Give up** after `MAX_ATTEMPTS` sends and return the last response\n\n`send`, `wait` and `random` are passed in, so the checks can script the server, record your waits and fix the randomness. Nothing really sleeps.",
        steps: [
          { text: "Return at once when there is nothing to retry: a success is one send, and so is a `400` — retrying it would fail identically.",
            test: CLIENT_FIX + R`
var ok = rig([200]);
var r1 = await callWithRetry(GET, ok.send, ok.wait, ok.random);
T.eq([r1.status, ok.sends, ok.waits], [200, 1, []], 'A success: one send, no waiting');
var bad = rig([400, 200]);
var r2 = await callWithRetry(GET, bad.send, bad.wait, bad.random);
T.eq([r2.status, bad.sends], [400, 1], 'A 400 is returned at once — it would fail the same way again');
var gone = rig([404, 200]);
T.eq((await callWithRetry(GET, gone.send, gone.wait, gone.random)).status, 404, 'So is a 404');
` },
          { text: "Write `delayFor` and wait before each retry. With no `retry-after` and `random()` at 0.5, two 503s mean waits of **100** then **200** ms.",
            test: CLIENT_FIX + R`
var r = rig([503, 503, 200]);
var res = await callWithRetry(GET, r.send, r.wait, r.random);
T.eq([res.status, r.sends], [200, 3], 'Two 503s, then a success');
T.eq(r.waits, [100, 200], 'Full jitter at random() = 0.5: 0.5 × min(2000, 100 × 2) = 100, then 0.5 × 400 = 200');
T.eq(delayFor(6, { status: 503, headers: {} }, function () { return 0.999; }), 1998, 'CAP bounds the ceiling: 0.999 × min(2000, 6400) → 1998');
T.eq(delayFor(1, { status: 503, headers: {} }, function () { return 0; }), 0, 'Full jitter may wait nothing at all');
` },
          { text: "`retry-after` wins over backoff: `\"2\"` means wait 2000 ms. Mixed in a sequence, each wait follows the response it answers.",
            test: CLIENT_FIX + R`
var r = rig([[429, '2'], 200]);
var res = await callWithRetry(GET, r.send, r.wait, r.random);
T.eq([res.status, r.waits], [200, [2000]], 'retry-after: 2 → wait exactly 2000 ms');
var mix = rig([503, [429, '1'], 200]);
await callWithRetry(GET, mix.send, mix.wait, mix.random);
T.eq(mix.waits, [100, 1000], 'Backoff for the bare 503, then the 429 own retry-after');
` },
          { text: "Give up after `MAX_ATTEMPTS` sends and return the last response — and never repeat a POST that has no idempotency key.",
            test: CLIENT_FIX + R`
var r = rig([503]);
var res = await callWithRetry(GET, r.send, r.wait, r.random);
T.eq([res.status, r.sends, r.waits], [503, 4, [100, 200, 400]], 'Four sends, three waits, then the last 503');
var post = { method: 'POST', path: '/payments', query: {}, headers: {}, body: {} };
var p = rig([503, 200]);
T.eq([(await callWithRetry(post, p.send, p.wait, p.random)).status, p.sends], [503, 1], 'A POST without an idempotency key is never repeated');
var keyed = { method: 'POST', path: '/payments', query: {}, headers: { 'idempotency-key': 'k-1' }, body: {} };
var k = rig([503, 200]);
T.eq([(await callWithRetry(keyed, k.send, k.wait, k.random)).status, k.sends], [200, 2], 'With a key it is safe to retry');
` }
        ],
        files: [{ name: "script.js", content: CLIENT_STARTER }],
        hints: [
          "`delayFor`: read `(res.headers || {})[\"retry-after\"]`; if it is whole seconds (`/^[0-9]+$/`), return `Number(after) * 1000`, otherwise `Math.floor(random() * Math.min(CAP, BASE * 2 ** n))`.",
          "Change the loop's exit test to `if (!RETRY_ON.includes(res.status) || !canRepeat(req)) return res;` — that covers successes, 400s and unsafe POSTs in one line.",
          "Wait before every send but the first: `if (attempt > 0) await wait(delayFor(attempt, res, random));` at the top of the loop."
        ],
        solution: { "script.js": CLIENT_SOLUTION }
      },

      {
        id: "api-quiz-6",
        title: "Unit 6 quiz: Rate limiting",
        kind: "quiz", xp: 10,
        brief: "Windows, buckets and well-behaved clients. 80% to pass.",
        questions: [
          { q: "A key has used its whole quota for this minute and sends another request. Which status and header should come back?",
            choices: ["503 Service Unavailable with no headers", "403 Forbidden, because the key has lost permission until the next minute begins", "429 Too Many Requests with `retry-after`", "400 Bad Request with an error message"],
            answer: 2, explain: "429 (RFC 6585) means too many requests in a given time, and Retry-After tells the client when to come back. 503 says the whole server is struggling; 403 says the key is not allowed at all." },
          { q: "With a fixed window of 5 requests per minute, what is the most a client can send inside one second?",
            choices: ["5", "10, by sending 5 just before a window boundary and 5 just after it", "1", "Unlimited, because a fixed window only counts requests after the first full minute"],
            answer: 1, explain: "Both bursts are legal in their own windows, so the edge between windows allows double the limit at once. The sliding-window counter fixes it by weighting the previous window's count." },
          { q: "In Cloudflare's sliding-window counter, the previous window had 8 requests, we are 15 s into a 60 s window, and this window has 2 so far. What is the estimate?",
            choices: ["10", "4", "6", "8"],
            answer: 3, explain: "8 × (60 − 15) / 60 = 6, plus the current window's 2, is 8. Three-quarters of the previous window still lies inside the last 60 seconds, so three-quarters of its requests count." },
          { q: "A token bucket has capacity 10 and refills 2 tokens per second. A key has been idle for an hour. How many requests can it make right now, at once?",
            choices: ["7,200", "2", "10", "0"],
            answer: 2, explain: "The bucket refills only up to its capacity, so idling never earns more than a burst of 10. Capacity sets the burst; the refill rate sets the long-run average." },
          { q: "Why add random jitter to exponential backoff?",
            choices: ["So clients that failed at the same moment don't all retry at the same moment", "To make the API harder to reverse-engineer from the timing of its responses to failed requests", "Because servers require a random delay", "To keep requests cheaper"],
            answer: 0, explain: "Without jitter, every client that hit the same outage computes the same waits and arrives in synchronised waves. Randomising the wait spreads them out, which is what lets an overloaded service recover." },
          { q: "A client gets `400 Bad Request`. How many times should its retry policy resend the request?",
            choices: ["Up to the maximum number of attempts, with backoff", "Once, immediately, in case the failure was a passing network glitch on the way", "Zero, because the same request will fail the same way", "Until the server returns 200"],
            answer: 2, explain: "A 4xx other than 429 means the request itself is wrong; sending it again unchanged gets the same answer and only adds load. Retries are for 429 and transient server errors such as 503." },
          { q: "A `POST /payments` without an idempotency key gets a 503. What should a careful client library do?",
            choices: ["Retry with backoff, like any 503", "Not retry it automatically — the payment may already have happened", "Retry immediately, since a 503 guarantees that nothing was processed on the server", "Switch the method to PUT and retry"],
            answer: 1, explain: "A 503 doesn't prove the work didn't start, and repeating a POST may charge twice. Without an idempotency key the library hands the failure to the caller instead of guessing (Unit 4)." }
        ]
      }
    ]
  });
})();
