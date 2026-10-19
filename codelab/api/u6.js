/* Advanced API Design — Unit 6: Rate limiting */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var MIN = 60 * 1000;

  window.CODELAB.addUnit("api", {
    id: "api-u6",
    title: "Rate limiting",
    icon: "🚦",
    blurb: "Web Security Basics metered failed logins. This is the general machinery — three algorithms that are not interchangeable, and the headers that turn a refusal into instructions.",
    cheat: [
      { h: "Fixed window, and its burst", lang: "js", code: "// limit 5 per minute\n// 12:00:59  five requests -> all allowed\n// 12:01:00  counter resets\n// 12:01:01  five more     -> all allowed\n// ten requests in two seconds", note: "The cheapest algorithm, and the one that lets through double the limit across a window boundary. Often fine; know that you chose it." },
      { h: "Token bucket", lang: "js", code: "tokens = min(cap, tokens + elapsed * rate)\nif (tokens >= 1) { tokens -= 1; allow }\nelse refuse", note: "Refills continuously, so there is no boundary to game. A full bucket permits a burst up to its capacity, which is usually what you want: bursty clients are normal, sustained floods are not." },
      { h: "Sliding window log", lang: "js", code: "hits = hits.filter(t => t > now() - windowMs)\nif (hits.length < limit) { hits.push(now()) }", note: "Exact: the limit holds over EVERY window, not just the aligned ones. Costs memory proportional to the limit, since you keep one timestamp per request." },
      { h: "429 with Retry-After", lang: "js", code: "{ status: 429,\n  headers: { \"Retry-After\": \"30\" } }", note: "RFC 6585 + RFC 9110. Seconds, as an integer. Without it every client invents its own backoff and the polite ones are punished for guessing high." },
      { h: "Publish the budget, not just the refusal", lang: "js", code: "RateLimit-Limit: 5\nRateLimit-Remaining: 2\nRateLimit-Reset: 30", note: "On EVERY response, not only the 429 — a client that can see it coming can slow down instead of hitting the wall. This three-header form is what is widely deployed (GitHub ships it as X-RateLimit-*); the IETF draft that standardises the idea has since consolidated it into a single structured `RateLimit` field, and is still a draft." },
      { h: "Limit per what?", lang: "js", code: "// per API key   — the usual answer\n// per IP        — for unauthenticated routes\n// per endpoint  — a search costs more\n//                 than a health check", note: "A single global counter punishes your smallest customer for your largest one's traffic. The key you count against is a design decision, not a detail." }
    ],
    lessons: [

      /* ---------- api-u6-1 ---------- */
      {
        id: "api-u6-1",
        title: "Fixed windows and the boundary burst",
        kind: "js", chip: "API", xp: 15, mins: 12,
        clock: 1700000000000,
        brief: "The simplest limiter: count requests per clock-aligned window, reset the counter when the window turns over. Five per minute means a counter and a window number.\n\nIt is cheap, it is easy to reason about, and it has one well-known flaw. The counter resets on a boundary, so a client that sends its whole allowance just *before* the reset and its whole next allowance just *after* gets **double the limit** in a couple of seconds.\n\nFor a limit protecting a database from sustained load that is usually fine. For one protecting against a burst it is exactly the wrong choice. Build it, then demonstrate the burst — the point is to know which one you picked and why.\n\nThe clock is controllable here: `now()` reads it, `T.advance(ms)` moves it. Never reach for the real clock in a lesson.",
        steps: [
          { text: "`allow(key)` permits `LIMIT` requests per aligned window and refuses the rest.",
            test: R`
T.expect(typeof allow === 'function', 'Define allow(key).');
reset();
T.eq([1,2,3,4,5].map(() => allow("ada")), [true, true, true, true, true], 'the first five requests in a window are allowed');
T.eq(allow("ada"), false, 'the sixth is refused');
T.eq(allow("bo"), true, 'a DIFFERENT key has its own budget — one client must not spend another\'s');
` },
          { text: "The window turns over and the budget comes back.",
            test: R`
reset();
[1,2,3,4,5].forEach(() => allow("ada"));
T.eq(allow("ada"), false, 'budget spent');
T.advance(60 * 1000);
T.eq(allow("ada"), true, 'a minute later the window has turned over and the budget is back');
T.eq([1,2,3,4].map(() => allow("ada")), [true, true, true, true], 'the full five are available again');
T.eq(allow("ada"), false, 'and then it is spent again');
` },
          { text: "Now the flaw. Spend the budget at the very end of one window and the next at the start of the following one — ten requests in two seconds.",
            test: R`
T.expect(typeof boundaryBurst === 'function', 'Define boundaryBurst().');
const out = boundaryBurst();
T.eq(out.allowed, 10, 'ten requests were allowed');
T.expect(out.elapsedMs <= 2000, 'within two seconds of each other');
T.eq(out.limit, 5, 'against a stated limit of five per minute');
T.expect(T.logged("10"), 'log how many got through so the burst is visible');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// Count per aligned window. Cheap, predictable, and it lets through",
            "// double the limit across a boundary.",
            "",
            "const LIMIT = 5;",
            "const WINDOW = 60 * 1000;",
            "",
            "let counters = new Map();   // key -> { window, count }",
            "",
            "function reset() { counters = new Map(); }",
            "",
            "function windowOf(ms) {",
            "  // which aligned window this instant falls in",
            "}",
            "",
            "function allow(key) {",
            "  // Look up the key. If there is no entry, or its window is not the",
            "  // current one, start a fresh count. Allow while count < LIMIT.",
            "}",
            "",
            "function boundaryBurst() {",
            "  reset();",
            "  // 1) move to one second before a window boundary",
            "  // 2) spend all five",
            "  // 3) T.advance(2000) to cross the boundary",
            "  // 4) spend five more",
            "  // return { allowed, elapsedMs, limit: LIMIT }",
            "}",
            "",
            "// log how many got through",
            "") }
        ],
        hints: [
          "`windowOf` is integer division: `return Math.floor(ms / WINDOW);`",
          "`allow` resets whenever the stored window is stale: `const w = windowOf(now()); let c = counters.get(key); if (!c || c.window !== w) { c = { window: w, count: 0 }; counters.set(key, c); }` then `if (c.count >= LIMIT) return false; c.count++; return true;`",
          "To land just before a boundary, advance by whatever is left in the current window minus a second: `const toEdge = WINDOW - (now() % WINDOW); T.advance(toEdge - 1000);`",
          "Count the allowed calls across both halves: `let allowed = 0; const start = now(); for (…) if (allow(\"ada\")) allowed++;` — advance 2000 ms in between, then `return { allowed, elapsedMs: now() - start, limit: LIMIT };`"
        ],
        solution: {
          "script.js": L(
            "// Count per aligned window. Cheap, predictable, and it lets through",
            "// double the limit across a boundary.",
            "",
            "const LIMIT = 5;",
            "const WINDOW = 60 * 1000;",
            "",
            "let counters = new Map();   // key -> { window, count }",
            "",
            "function reset() { counters = new Map(); }",
            "",
            "function windowOf(ms) {",
            "  return Math.floor(ms / WINDOW);",
            "}",
            "",
            "function allow(key) {",
            "  const w = windowOf(now());",
            "  let c = counters.get(key);",
            "  if (!c || c.window !== w) {",
            "    c = { window: w, count: 0 };",
            "    counters.set(key, c);",
            "  }",
            "  if (c.count >= LIMIT) return false;",
            "  c.count++;",
            "  return true;",
            "}",
            "",
            "function boundaryBurst() {",
            "  reset();",
            "  const toEdge = WINDOW - (now() % WINDOW);",
            "  T.advance(toEdge - 1000);        // one second before the reset",
            "",
            "  const start = now();",
            "  let allowed = 0;",
            "  for (let i = 0; i < 5; i++) if (allow(\"ada\")) allowed++;",
            "  T.advance(2000);                 // cross the boundary",
            "  for (let i = 0; i < 5; i++) if (allow(\"ada\")) allowed++;",
            "",
            "  return { allowed: allowed, elapsedMs: now() - start, limit: LIMIT };",
            "}",
            "",
            "// log how many got through",
            "console.log(boundaryBurst().allowed + \" requests in two seconds\");",
            "")
        }
      },

      /* ---------- api-u6-2 ---------- */
      {
        id: "api-u6-2",
        title: "Token bucket",
        kind: "js", chip: "API", xp: 20, mins: 14,
        clock: 1700000000000,
        brief: "The boundary burst exists because the budget arrives all at once, on a schedule the client can see. Remove the schedule and the flaw goes with it.\n\nA **token bucket** holds up to `CAPACITY` tokens and refills **continuously** at `RATE` tokens per second. Each request spends one. No tokens, no request. There is no boundary, so there is nothing to line up against.\n\nThe refill is not a timer — you never need one. Compute it lazily on each request from the elapsed time:\n\n```\ntokens = min(CAPACITY, tokens + elapsedSeconds * RATE)\n```\n\nThis also gives you something a fixed window cannot express: a **burst allowance**. A client that has been quiet accumulates a full bucket and may spend it at once, while a client hammering continuously is held to exactly `RATE`. That is usually the behaviour you actually want — real traffic is bursty, and only sustained floods are a problem.",
        steps: [
          { text: "A full bucket allows a burst up to its capacity, then refuses.",
            test: R`
T.expect(typeof take === 'function', 'Define take(key).');
reset();
T.eq([1,2,3,4,5].map(() => take("ada")), [true, true, true, true, true], 'a full bucket of 5 permits 5 straight away — a burst is allowed');
T.eq(take("ada"), false, 'the sixth finds the bucket empty');
T.eq(take("bo"), true, 'every key gets its own bucket');
` },
          { text: "Tokens refill continuously. At one per second, waiting two seconds buys exactly two requests.",
            test: R`
reset();
[1,2,3,4,5].forEach(() => take("ada"));
T.eq(take("ada"), false, 'empty');
T.advance(1000);
T.eq(take("ada"), true, 'one second later exactly one token has arrived');
T.eq(take("ada"), false, 'and only one');
T.advance(2000);
T.eq([1,2].map(() => take("ada")), [true, true], 'two seconds buys two');
T.eq(take("ada"), false, 'no more');
` },
          { text: "The bucket never overfills, and the boundary trick that beat the fixed window stops being a trick — what gets through is just the capacity plus the tokens actually earned.",
            test: R`
reset();
T.advance(60 * 60 * 1000);
T.eq([1,2,3,4,5].map(() => take("ada")), [true, true, true, true, true], 'an hour of quiet still only fills the bucket to CAPACITY');
T.eq(take("ada"), false, 'it does not accumulate an hour of tokens');
T.expect(typeof boundaryBurst === 'function', 'Define boundaryBurst().');
const out = boundaryBurst();
T.eq(out.allowed, 7, 'the same trick now gets through 7, not 10: a full bucket of 5 plus the 2 tokens genuinely earned in those 2 seconds');
T.expect(out.elapsedMs <= 2000, 'over the same two seconds');
T.expect(out.allowed < 10, 'and crucially it is no longer about WHEN you start — there is no boundary left to line up with');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// Refill continuously and there is no boundary to line up against.",
            "",
            "const CAPACITY = 5;          // burst allowance",
            "const RATE = 1 / 1000;       // tokens per millisecond = 1 per second",
            "",
            "let buckets = new Map();     // key -> { tokens, at }",
            "",
            "function reset() { buckets = new Map(); }",
            "",
            "function take(key) {",
            "  // 1) first time for this key -> a FULL bucket, stamped now()",
            "  // 2) refill lazily:",
            "  //      b.tokens = Math.min(CAPACITY, b.tokens + (now() - b.at) * RATE)",
            "  //      b.at = now()",
            "  // 3) a whole token available -> spend one and allow; else refuse",
            "}",
            "",
            "function boundaryBurst() {",
            "  reset();",
            "  // the same trick as the fixed window: spend everything, advance 2s,",
            "  // try to spend everything again",
            "  // return { allowed, elapsedMs }",
            "}",
            "") }
        ],
        hints: [
          "Create on first sight: `let b = buckets.get(key); if (!b) { b = { tokens: CAPACITY, at: now() }; buckets.set(key, b); }`",
          "Refill before you test, every single time — that is what makes it continuous: `b.tokens = Math.min(CAPACITY, b.tokens + (now() - b.at) * RATE); b.at = now();`",
          "Spend a whole token only: `if (b.tokens >= 1) { b.tokens -= 1; return true; } return false;` — the `>= 1` is what stops a fractional token allowing a request.",
          "`Math.min(CAPACITY, …)` is what stops an idle client banking an hour of tokens; without it the bucket is unbounded and the burst allowance becomes a flood allowance."
        ],
        solution: {
          "script.js": L(
            "// Refill continuously and there is no boundary to line up against.",
            "",
            "const CAPACITY = 5;          // burst allowance",
            "const RATE = 1 / 1000;       // tokens per millisecond = 1 per second",
            "",
            "let buckets = new Map();     // key -> { tokens, at }",
            "",
            "function reset() { buckets = new Map(); }",
            "",
            "function take(key) {",
            "  let b = buckets.get(key);",
            "  if (!b) {",
            "    b = { tokens: CAPACITY, at: now() };",
            "    buckets.set(key, b);",
            "  }",
            "  b.tokens = Math.min(CAPACITY, b.tokens + (now() - b.at) * RATE);",
            "  b.at = now();",
            "",
            "  if (b.tokens >= 1) {",
            "    b.tokens -= 1;",
            "    return true;",
            "  }",
            "  return false;",
            "}",
            "",
            "function boundaryBurst() {",
            "  reset();",
            "  const start = now();",
            "  let allowed = 0;",
            "  for (let i = 0; i < 5; i++) if (take(\"ada\")) allowed++;",
            "  T.advance(2000);",
            "  for (let i = 0; i < 5; i++) if (take(\"ada\")) allowed++;",
            "  return { allowed: allowed, elapsedMs: now() - start };",
            "}",
            "")
        }
      },

      /* ---------- api-u6-3 ---------- */
      {
        id: "api-u6-3",
        title: "Sliding window, and what each one costs",
        kind: "js", chip: "API", xp: 20, mins: 14,
        clock: 1700000000000,
        brief: "The token bucket fixed the boundary, but it answers a slightly different question. \"Five tokens refilling at one per second\" is not the same promise as **\"never more than five in any sixty-second stretch\"**.\n\nIf you need that exact promise — an API quota you bill against, a hard contractual limit — you need a **sliding window log**: keep a timestamp per request, drop the ones that have aged out, and allow while fewer than `LIMIT` remain.\n\nIt is exact, over *every* window rather than only the aligned ones. The cost is memory: one timestamp per request per key, so a limit of 5,000/hour means 5,000 timestamps per client. That is the trade, and it is why all three algorithms are still in use.\n\n| | Boundary burst | Exact over any window | Memory |\n|---|---|---|---|\n| Fixed window | yes, up to 2× | no | one counter |\n| Token bucket | no | no (bursts to capacity) | two numbers |\n| Sliding log | no | **yes** | one stamp per request |",
        steps: [
          { text: "`allow(key)` keeps a timestamp per request and permits `LIMIT` within the trailing window.",
            test: R`
T.expect(typeof allow === 'function', 'Define allow(key).');
reset();
T.eq([1,2,3,4,5].map(() => allow("ada")), [true, true, true, true, true], 'five requests fit the window');
T.eq(allow("ada"), false, 'the sixth does not');
T.eq(hitsFor("ada"), 5, 'and the refused request is NOT recorded — a refusal must not extend the penalty');
` },
          { text: "The window slides: a request ages out exactly `WINDOW` after it was made, not on any boundary.",
            test: R`
reset();
[1,2,3,4,5].forEach(() => allow("ada"));
T.advance(30 * 1000);
T.eq(allow("ada"), false, 'halfway through the window nothing has aged out yet');
T.advance(30 * 1000 + 1);
T.eq(allow("ada"), true, 'just past 60s the first five have aged out together');
T.eq(hitsFor("ada"), 1, 'and the log has been pruned down to the single live request');
` },
          { text: "The boundary trick fails here too — and this is the one that holds over *every* window, which the token bucket does not.",
            test: R`
T.expect(typeof boundaryBurst === 'function', 'Define boundaryBurst().');
const out = boundaryBurst();
T.eq(out.allowed, 5, 'the end-of-window trick gets 5 through, not 10');
reset();
let got = 0;
for (let i = 0; i < 10; i++) { if (allow("ada")) got++; T.advance(15 * 1000); }
T.eq(got, 10, 'one request every 15 seconds is 4 per minute, comfortably under a 5-per-60s limit — all ten get through');
reset();
got = 0;
for (let i = 0; i < 10; i++) { if (allow("ada")) got++; T.advance(11 * 1000); }
T.eq(got, 9, 'every 11 seconds is 5.45 per minute, which is over — the limit bites once, exactly where the sum crosses 5');
reset();
got = 0;
for (let i = 0; i < 10; i++) { if (allow("ada")) got++; T.advance(5 * 1000); }
T.eq(got, 5, 'and every 5 seconds is 12 per minute, so only the first five are served');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// Exact over EVERY window, at the cost of one timestamp per request.",
            "",
            "const LIMIT = 5;",
            "const WINDOW = 60 * 1000;",
            "",
            "let log = new Map();   // key -> array of timestamps",
            "",
            "function reset() { log = new Map(); }",
            "function hitsFor(key) { return (log.get(key) || []).length; }",
            "",
            "function allow(key) {",
            "  // 1) take this key's timestamps (or start an empty list)",
            "  // 2) drop everything older than now() - WINDOW",
            "  // 3) fewer than LIMIT left -> record now() and allow",
            "  //    otherwise             -> refuse, and record NOTHING",
            "}",
            "",
            "function boundaryBurst() {",
            "  reset();",
            "  // the same end-of-window trick once more",
            "  // return { allowed }",
            "}",
            "") }
        ],
        hints: [
          "Prune with a filter and store the pruned list back: `const cutoff = now() - WINDOW; const hits = (log.get(key) || []).filter(t => t > cutoff); log.set(key, hits);`",
          "Then the decision: `if (hits.length >= LIMIT) return false; hits.push(now()); return true;` — because `hits` is the array you just stored, pushing to it updates the map.",
          "Recording a refused request is the classic bug: it extends the lockout every time an over-limit client retries, so a client stuck in a retry loop can never recover.",
          "`t > cutoff` rather than `>=` is what makes the third checkpoint's `30s + 1` tick work — a request made exactly WINDOW ago has aged out."
        ],
        solution: {
          "script.js": L(
            "// Exact over EVERY window, at the cost of one timestamp per request.",
            "",
            "const LIMIT = 5;",
            "const WINDOW = 60 * 1000;",
            "",
            "let log = new Map();   // key -> array of timestamps",
            "",
            "function reset() { log = new Map(); }",
            "function hitsFor(key) { return (log.get(key) || []).length; }",
            "",
            "function allow(key) {",
            "  const cutoff = now() - WINDOW;",
            "  const hits = (log.get(key) || []).filter(function (t) { return t > cutoff; });",
            "  log.set(key, hits);",
            "",
            "  if (hits.length >= LIMIT) return false;   // refused, and NOT recorded",
            "  hits.push(now());",
            "  return true;",
            "}",
            "",
            "function boundaryBurst() {",
            "  reset();",
            "  const toEdge = WINDOW - (now() % WINDOW);",
            "  T.advance(toEdge - 1000);",
            "  let allowed = 0;",
            "  for (let i = 0; i < 5; i++) if (allow(\"ada\")) allowed++;",
            "  T.advance(2000);",
            "  for (let i = 0; i < 5; i++) if (allow(\"ada\")) allowed++;",
            "  return { allowed: allowed };",
            "}",
            "")
        }
      },

      /* ---------- api-u6-4 ---------- */
      {
        id: "api-u6-4",
        title: "429, Retry-After, and publishing the budget",
        kind: "js", chip: "API", xp: 20, mins: 14,
        clock: 1700000000000,
        brief: "An algorithm that refuses requests is half a rate limiter. The other half is telling the client **what just happened and what to do next** — otherwise every client invents its own backoff, and the polite ones are punished for guessing high.\n\nThree things belong on the wire:\n\n- **`429 Too Many Requests`** ([RFC 6585](https://www.rfc-editor.org/rfc/rfc6585.html#section-4)) — the status that means *slow down*, as distinct from 403 (*never*) or 503 (*I am unwell*).\n- **`Retry-After: 30`** — integer seconds until it is worth trying again. Not a guess: you know exactly when a token arrives.\n- **`RateLimit-Limit` / `-Remaining` / `-Reset`** — on **every** response, not just the refusal. A client that can see it coming can slow down *before* it hits the wall, which is the entire point.\n\nWeb Security Basics metered failed logins and put a `retryAfter` in the response **body**. That works when one client knows your API; a header works for every client, every proxy and every SDK, without reading your docs. GitHub ships the same idea as `X-RateLimit-*`.",
        steps: [
          { text: "An allowed request is a `200` carrying the budget: limit, what is left, and when it refills.",
            test: R`
T.expect(typeof handleRequest === 'function', 'Define handleRequest(req).');
reset();
const first = handleRequest({ key: "ada" });
T.eq(first.status, 200, 'inside the budget, a normal response');
T.eq(first.headers["RateLimit-Limit"], "5", 'the budget is published on every response, not just refusals');
T.eq(first.headers["RateLimit-Remaining"], "4", 'one of five spent');
T.expect(first.headers["Retry-After"] === undefined, 'nothing was refused, so there is nothing to retry');
const second = handleRequest({ key: "ada" });
T.eq(second.headers["RateLimit-Remaining"], "3", 'the count goes down as the budget is spent');
` },
          { text: "Over budget is a `429` with `Retry-After` in whole seconds, computed from when the next token actually arrives.",
            test: R`
reset();
for (let i = 0; i < 5; i++) handleRequest({ key: "ada" });
const refused = handleRequest({ key: "ada" });
T.eq(refused.status, 429, 'over the limit is 429 Too Many Requests');
T.eq(refused.headers["RateLimit-Remaining"], "0", 'nothing left');
T.eq(refused.headers["Retry-After"], "1", 'at one token per second, the next one is a second away');
T.expect(/^[0-9]+$/.test(refused.headers["Retry-After"]), 'Retry-After is an integer number of seconds — no decimals, no date here');
T.advance(1000);
T.eq(handleRequest({ key: "ada" }).status, 200, 'and after exactly that long, the request goes through');
` },
          { text: "A client that reads the headers can pace itself and never see a 429. Prove it.",
            test: R`
T.expect(typeof politeClient === 'function', 'Define politeClient(n).');
reset();
const out = politeClient(12);
T.eq(out.sent, 12, 'the client sent all twelve requests');
T.eq(out.refused, 0, 'and was never refused, because it waited whenever Remaining hit 0');
reset();
const rude = [];
for (let i = 0; i < 12; i++) rude.push(handleRequest({ key: "bo" }).status);
T.expect(rude.filter(s => s === 429).length > 0, 'while a client that ignores the headers gets refused');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// Refusing is half a limiter. Telling the client what to do is the",
            "// other half.",
            "",
            "const CAPACITY = 5;",
            "const RATE = 1 / 1000;       // one token per second",
            "",
            "let buckets = new Map();",
            "function reset() { buckets = new Map(); }",
            "",
            "function bucketFor(key) {",
            "  let b = buckets.get(key);",
            "  if (!b) { b = { tokens: CAPACITY, at: now() }; buckets.set(key, b); }",
            "  b.tokens = Math.min(CAPACITY, b.tokens + (now() - b.at) * RATE);",
            "  b.at = now();",
            "  return b;",
            "}",
            "",
            "function handleRequest(req) {",
            "  const b = bucketFor(req.key);",
            "  // headers on EVERY response:",
            "  //   RateLimit-Limit     -> String(CAPACITY)",
            "  //   RateLimit-Remaining -> String(Math.floor(b.tokens)) AFTER spending",
            "  //   RateLimit-Reset     -> seconds until the bucket is full again",
            "  //",
            "  // b.tokens >= 1 -> spend one, 200",
            "  // otherwise     -> 429 + Retry-After: whole seconds until one token",
            "}",
            "",
            "function politeClient(n) {",
            "  reset();",
            "  // Send n requests. Whenever RateLimit-Remaining comes back \"0\",",
            "  // T.advance(Number(RateLimit-Reset or 1) * 1000) before the next one.",
            "  // return { sent, refused }",
            "}",
            "") }
        ],
        hints: [
          "Spend first, then report, so Remaining describes the state the client is now in: `const okNow = b.tokens >= 1; if (okNow) b.tokens -= 1;`",
          "`Retry-After` is how long until one whole token exists: `Math.ceil((1 - b.tokens) / RATE / 1000)` — with an empty bucket and one token per second that is 1.",
          "`RateLimit-Reset` is until the bucket is FULL: `Math.ceil((CAPACITY - b.tokens) / RATE / 1000)`.",
          "The polite client waits only when it has to: `const res = handleRequest({ key: \"ada\" }); if (res.headers[\"RateLimit-Remaining\"] === \"0\") T.advance(1000);` — one second buys exactly one token, which is all it needs for the next request."
        ],
        solution: {
          "script.js": L(
            "// Refusing is half a limiter. Telling the client what to do is the",
            "// other half.",
            "",
            "const CAPACITY = 5;",
            "const RATE = 1 / 1000;       // one token per second",
            "",
            "let buckets = new Map();",
            "function reset() { buckets = new Map(); }",
            "",
            "function bucketFor(key) {",
            "  let b = buckets.get(key);",
            "  if (!b) { b = { tokens: CAPACITY, at: now() }; buckets.set(key, b); }",
            "  b.tokens = Math.min(CAPACITY, b.tokens + (now() - b.at) * RATE);",
            "  b.at = now();",
            "  return b;",
            "}",
            "",
            "function handleRequest(req) {",
            "  const b = bucketFor(req.key);",
            "  const okNow = b.tokens >= 1;",
            "  if (okNow) b.tokens -= 1;",
            "",
            "  const headers = {",
            "    \"Content-Type\": \"application/json\",",
            "    \"RateLimit-Limit\": String(CAPACITY),",
            "    \"RateLimit-Remaining\": String(Math.floor(b.tokens)),",
            "    \"RateLimit-Reset\": String(Math.ceil((CAPACITY - b.tokens) / RATE / 1000))",
            "  };",
            "",
            "  if (okNow) {",
            "    return { status: 200, headers: headers, body: { ok: true } };",
            "  }",
            "",
            "  headers[\"Retry-After\"] = String(Math.ceil((1 - b.tokens) / RATE / 1000));",
            "  return { status: 429, headers: headers, body: { error: \"too many requests\" } };",
            "}",
            "",
            "function politeClient(n) {",
            "  reset();",
            "  let sent = 0, refused = 0;",
            "  for (let i = 0; i < n; i++) {",
            "    const res = handleRequest({ key: \"ada\" });",
            "    sent++;",
            "    if (res.status === 429) refused++;",
            "    if (res.headers[\"RateLimit-Remaining\"] === \"0\") T.advance(1000);",
            "  }",
            "  return { sent: sent, refused: refused };",
            "}",
            "")
        }
      },

      /* ---------- api-quiz-6 ---------- */
      {
        id: "api-quiz-6",
        title: "Unit 6 quiz: limits",
        kind: "quiz", chip: "API", xp: 20, mins: 6,
        questions: [
          {
            q: "A fixed-window limiter allows 100 requests per minute. What is the most a client can send in a two-second stretch?",
            choices: [
              "100, since that is the stated limit for any sixty-second period",
              "200, by spending one window's budget just before the reset and the next just after",
              "100, but only if the two seconds fall entirely inside one window",
              "It depends on the server's clock resolution rather than on the algorithm"
            ],
            answer: 1,
            explain: "The counter resets on a clock-aligned boundary, so a client that lines up with it gets two full budgets back to back. This is the defining weakness of fixed windows — not a bug, but the reason you would reach for a token bucket or a sliding log when bursts are what you are defending against."
          },
          {
            q: "Why does a token bucket not need a timer to refill?",
            choices: [
              "Because tokens are added by a background job that sweeps every bucket on a fixed schedule the server controls",
              "Because the refill is computed from elapsed time on each request, so nothing has to run in between",
              "Because the bucket refills only when it is empty, which the next request detects",
              "Because the capacity is fixed, so the number of tokens never actually changes"
            ],
            answer: 1,
            explain: "`tokens = min(capacity, tokens + elapsed × rate)` computed at request time gives exactly the same answer a continuously-running timer would, for no cost when the client is idle. That laziness is what makes the algorithm cheap enough to run per key."
          },
          {
            q: "What does a token bucket's capacity control, separately from its rate?",
            choices: [
              "The total number of requests a client may ever make before needing a new key",
              "How large a burst a client that has been idle may send at once",
              "How long a refused client must wait before any token becomes available",
              "The number of distinct clients the limiter can track before it starts evicting buckets"
            ],
            answer: 1,
            explain: "Rate sets the sustained throughput; capacity sets how much unused allowance can be banked and spent in one go. Separating them is the point — real clients are bursty, and a limiter that forbids all bursts is unpleasant to use without being any safer against sustained load."
          },
          {
            q: "When is a sliding window log worth its memory cost?",
            choices: [
              "When you need the limit to hold over every possible window, not just aligned ones",
              "Whenever the request rate is high enough that a fixed window would overflow its counter",
              "When clients are distributed across regions and their clocks cannot be synchronised",
              "When the limit must be changed at runtime without restarting the limiter"
            ],
            answer: 0,
            explain: "It is the only one of the three that enforces \"never more than N in any sixty seconds\" exactly, which is what a billed quota or a contractual limit actually promises. The price is one timestamp per request per key, so you pay it when exactness matters and use a bucket when it does not."
          },
          {
            q: "In a sliding window log, why must a refused request not be added to the log?",
            choices: [
              "Because the log would then exceed the limit, which the algorithm's invariant forbids",
              "Because a client retrying while over the limit would keep extending its own lockout forever",
              "Because refused requests are not billable and the log is what the quota is calculated from",
              "Because the timestamp would be inaccurate, having been recorded after the limit check"
            ],
            answer: 1,
            explain: "Recording refusals means every retry pushes the window forward, so a client in a retry loop can never recover — the behaviour that most looks like a hung API. Only requests you actually served count against the budget."
          },
          {
            q: "Why send `RateLimit-Limit` and `RateLimit-Remaining` on successful responses rather than only on a 429?",
            choices: [
              "Because a 429 response body may be discarded by intermediaries before the client reads it",
              "So a client can see the wall coming and slow down before it is refused",
              "Because RFC 6585 requires the headers on every response to a rate-limited resource",
              "So the server can distinguish clients that respect the limit from those that do not"
            ],
            answer: 1,
            explain: "A limiter that only speaks when it refuses forces every client to discover its budget by hitting the wall. Publishing the remaining allowance continuously lets a well-behaved client pace itself and never generate a 429 at all. Note what is and is not standardised: RFC 6585 defines 429 and `Retry-After`, but no RFC defines these budget headers. The three-field form here is convention — GitHub's `X-RateLimit-*` is the best-known version — while the IETF draft on the subject has moved to a single structured `RateLimit` field and remains a draft."
          },
          {
            q: "A client is refused. What distinguishes `429` from `403` and `503` here?",
            choices: [
              "429 means slow down and retry; 403 means never; 503 means the server itself is unavailable",
              "429 and 503 are interchangeable for rate limiting, while 403 is reserved for authentication failures",
              "429 is advisory and 403 is enforced, so a client may safely ignore a 429 and retry immediately",
              "429 applies to authenticated clients and 403 to anonymous ones exceeding the same limit"
            ],
            answer: 0,
            explain: "The three say different things about whether retrying could ever work. 403 means this request will never be permitted, so retrying is pointless. 503 says the server is unwell, which is about the server rather than the client's behaviour. 429 says the request was fine and the timing was not — come back later, and here is when."
          }
        ]
      }
    ]
  });
})();
