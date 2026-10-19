/* Advanced API Design — Unit 5: Making retries safe */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  window.CODELAB.addUnit("api", {
    id: "api-u5",
    title: "Making retries safe",
    icon: "🔁",
    blurb: "How the Web Works taught you that POST is not idempotent and therefore must not be auto-retried. That is a true rule and a useless one — the retry happens anyway, because the client never learned whether the first attempt landed.",
    cheat: [
      { h: "The problem is the unknown, not the retry", lang: "js", code: "// client -> POST /api/orders\n// …connection drops…\n// Did the order get created?\n// The client cannot tell a lost REQUEST\n// from a lost RESPONSE.", note: "Not retrying risks losing the order. Retrying risks charging twice. Without more information both choices are wrong." },
      { h: "Idempotency-Key", lang: "js", code: "POST /api/orders\nIdempotency-Key: 7f3a-91c2-…\n\n// first time  -> do the work, STORE the response\n// same key    -> replay the stored response,\n//                do no work", note: "The client generates the key once, before the first attempt, and reuses it on every retry of that same logical operation." },
      { h: "Replay the response, don't redo the work", lang: "js", code: "const hit = keys.get(key);\nif (hit) return hit.response;   // byte for byte", note: "A retry must get the ORIGINAL 201 and the original order id, not a fresh 200 or a second order. The client cannot tell it retried, which is the point." },
      { h: "The key covers one specific request", lang: "js", code: "// same key, different body -> 422\n// It is not a lock on the\n// endpoint; it names ONE operation.", note: "Replaying the stored response for a different body would answer a question nobody asked. Stripe refuses this case too rather than guessing." },
      { h: "In flight is not the same as done", lang: "js", code: "// first request still running\n// retry arrives -> 409 Conflict\n//   \"that key is in progress, wait\"", note: "There is no stored response to replay yet. Saying 409 is honest; starting the work twice is the bug you were preventing." },
      { h: "Keys expire", lang: "js", code: "// Stripe: eligible for deletion at 24h.\nif (now() - hit.at > TTL) keys.delete(key);", note: "A key store that never expires grows forever, and the TTL only has to outlive a plausible retry — hours, not seconds. Stripe's 24 hours is a MINIMUM rather than a hard expiry: a key becomes eligible for deletion once it is at least a day old." }
    ],
    lessons: [

      /* ---------- api-u5-1 ---------- */
      {
        id: "api-u5-1",
        title: "The double charge",
        kind: "js", chip: "API", xp: 15, mins: 12,
        brief: "A client POSTs an order. The request reaches the server, the order is created, the money is taken — and the **response** is lost on the way back. The client sees a timeout.\n\nNow it has to choose, with no information:\n\n- **give up** — and maybe the customer paid and got nothing\n- **retry** — and maybe the customer is charged twice\n\nThis is the part the \"never auto-retry a POST\" rule does not solve. The rule is correct: a POST is not idempotent, so retrying it is unsafe. But the client retries anyway, because the alternative is losing the order — and it cannot tell a lost *request* from a lost *response*.\n\nReproduce it. A server that works perfectly, a network that drops one response, and a client doing the sensible thing.",
        steps: [
          { text: "`createOrder(body)` appends an order and returns a `201` with it. Straightforward, and correct for a single request.",
            test: R`
T.expect(typeof createOrder === 'function', 'Define createOrder(body).');
orders.length = 0; nextId = 1;
const res = createOrder({ item: "desk", amount: 300 });
T.eq(res.status, 201, 'creating an order is a 201');
T.eq(res.body, { id: 1, item: "desk", amount: 300 }, 'the created order comes back with its id');
T.eq(orders.length, 1, 'and one order is stored');
` },
          { text: "`sendWithRetry(body)` models the client: the first response is lost, so it retries once. Count what the server actually did.",
            test: R`
T.expect(typeof sendWithRetry === 'function', 'Define sendWithRetry(body).');
orders.length = 0; nextId = 1;
const out = sendWithRetry({ item: "desk", amount: 300 });
T.eq(out.attempts, 2, 'the client made two attempts — the first response never arrived');
T.eq(out.serverCalls, 2, 'and the server ran the work twice, because it had no way to know');
T.eq(out.finalResponse.body.id, 2, 'the client ends up holding order 2 — the SECOND one');
` },
          { text: "Show the damage: two orders, and the customer charged twice for one purchase.",
            test: R`
orders.length = 0; nextId = 1;
const out = sendWithRetry({ item: "desk", amount: 300 });
T.eq(orders.length, 2, 'two orders exist for one purchase');
T.eq(totalCharged(), 600, 'and the customer has been charged 600 for a 300 desk');
T.eq(orders[0], { id: 1, item: "desk", amount: 300 }, 'the first order is real and the customer will never hear about it');
T.expect(T.logged("600"), 'log the total charged so the damage is visible');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// The server is not broken. The network dropped ONE response, and the",
            "// client could not tell a lost request from a lost reply.",
            "",
            "const orders = [];",
            "let nextId = 1;",
            "let serverCalls = 0;",
            "",
            "function createOrder(body) {",
            "  serverCalls++;",
            "  // push { id: nextId++, item: body.item, amount: body.amount }",
            "  // return { status: 201, body: <that order> }",
            "}",
            "",
            "function totalCharged() {",
            "  // sum of every stored order's amount",
            "}",
            "",
            "function sendWithRetry(body) {",
            "  serverCalls = 0;",
            "  // attempt 1: call createOrder(body) — then the response is LOST",
            "  // attempt 2: the client retries, call createOrder(body) again",
            "  // return { attempts: 2, serverCalls, finalResponse: <the 2nd response> }",
            "}",
            "",
            "// log the total charged",
            "") }
        ],
        hints: [
          "`createOrder` is three lines: build the order, `orders.push(order)`, `return { status: 201, body: order };` — remember `serverCalls++` is already there.",
          "`totalCharged` is a reduce: `return orders.reduce((sum, o) => sum + o.amount, 0);`",
          "In `sendWithRetry`, call `createOrder` twice and simply ignore the first return value — that IS the lost response: `createOrder(body); const second = createOrder(body);`",
          "Finish with `console.log(\"charged \" + totalCharged());` after calling `sendWithRetry` once at the top level."
        ],
        solution: {
          "script.js": L(
            "// The server is not broken. The network dropped ONE response, and the",
            "// client could not tell a lost request from a lost reply.",
            "",
            "const orders = [];",
            "let nextId = 1;",
            "let serverCalls = 0;",
            "",
            "function createOrder(body) {",
            "  serverCalls++;",
            "  const order = { id: nextId++, item: body.item, amount: body.amount };",
            "  orders.push(order);",
            "  return { status: 201, body: order };",
            "}",
            "",
            "function totalCharged() {",
            "  return orders.reduce(function (sum, o) { return sum + o.amount; }, 0);",
            "}",
            "",
            "function sendWithRetry(body) {",
            "  serverCalls = 0;",
            "  createOrder(body);                    // response lost on the way back",
            "  const second = createOrder(body);     // the client retries",
            "  return { attempts: 2, serverCalls: serverCalls, finalResponse: second };",
            "}",
            "",
            "// log the total charged",
            "orders.length = 0; nextId = 1;",
            "sendWithRetry({ item: \"desk\", amount: 300 });",
            "console.log(\"charged \" + totalCharged());",
            "")
        }
      },

      /* ---------- api-u5-2 ---------- */
      {
        id: "api-u5-2",
        title: "Idempotency-Key",
        kind: "js", chip: "API", xp: 20, mins: 14,
        brief: "The client cannot tell whether its first attempt landed. So let it **name the operation** instead, and make the server responsible for doing it once.\n\nThe client generates a key — once, *before* the first attempt — and sends it with every retry of that same logical operation:\n\n```\nPOST /api/orders\nIdempotency-Key: 7f3a-91c2-…\n```\n\nThe server keeps a map from key to the response it sent:\n\n- **key unseen** → do the work, **store the response**, return it\n- **key seen** → **replay the stored response** and do nothing else\n\nThe crucial word is *replay*. A retry must receive the **original** `201` with the **original** order id — not a fresh `200`, not a second order. The client genuinely cannot tell that it retried, which is exactly what makes it safe.\n\nThis is why `Idempotency-Key` exists on every payments API you will ever touch.",
        steps: [
          { text: "`handleCreate(body, key)` does the work on a key it has not seen, and records the response against that key.",
            test: R`
T.expect(typeof handleCreate === 'function', 'Define handleCreate(body, key).');
reset();
const first = handleCreate({ item: "desk", amount: 300 }, "k-1");
T.eq(first.status, 201, 'a fresh key does the work: 201');
T.eq(first.body, { id: 1, item: "desk", amount: 300 }, 'and returns the created order');
T.eq(orders.length, 1, 'one order stored');
T.expect(keys.has("k-1"), 'and the response is recorded against the key');
` },
          { text: "The retry. The same key replays the stored response byte for byte, and no second order is created.",
            test: R`
reset();
const first = handleCreate({ item: "desk", amount: 300 }, "k-1");
const retry = handleCreate({ item: "desk", amount: 300 }, "k-1");
T.eq(retry.status, 201, 'the replay carries the ORIGINAL status — a 201, not a 200');
T.eq(retry.body, first.body, 'and the original body, with the original order id');
T.eq(orders.length, 1, 'still exactly one order — the work did not run again');
T.eq(totalCharged(), 300, 'and the customer is charged once');
T.eq(handleCreate({ item: "desk", amount: 300 }, "k-2").body.id, 2, 'a DIFFERENT key is a different operation and does create a second order');
` },
          { text: "Run the double-charge scenario again, now with a key. Two attempts, one order.",
            test: R`
T.expect(typeof sendWithRetry === 'function', 'Define sendWithRetry(body, key).');
reset();
const out = sendWithRetry({ item: "desk", amount: 300 }, "order-abc");
T.eq(out.attempts, 2, 'the client still retries — nothing about the network changed');
T.eq(out.workDone, 1, 'but the server only did the work once');
T.eq(orders.length, 1, 'one order');
T.eq(totalCharged(), 300, 'charged once');
T.eq(out.finalResponse.body.id, 1, 'and the client ends up holding the FIRST order, which is the one that exists');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// The client names the operation. The server guarantees it happens once.",
            "",
            "let orders = [];",
            "let nextId = 1;",
            "let keys = new Map();   // Idempotency-Key -> the response we sent",
            "let workDone = 0;",
            "",
            "function reset() {",
            "  orders = []; nextId = 1; keys = new Map(); workDone = 0;",
            "}",
            "",
            "function totalCharged() {",
            "  return orders.reduce(function (sum, o) { return sum + o.amount; }, 0);",
            "}",
            "",
            "function handleCreate(body, key) {",
            "  // 1) if keys already has this key, return the stored response as-is",
            "  // 2) otherwise do the work: workDone++, build and push the order",
            "  // 3) build the 201 response, STORE it under the key, and return it",
            "}",
            "",
            "function sendWithRetry(body, key) {",
            "  // the same two attempts as last lesson, but passing the SAME key both times",
            "  // return { attempts: 2, workDone, finalResponse }",
            "}",
            "") }
        ],
        hints: [
          "The replay check is the first thing in the function, before any work: `if (keys.has(key)) return keys.get(key);`",
          "Store the response object itself so the replay is identical: `const res = { status: 201, body: order }; keys.set(key, res); return res;`",
          "`workDone++` belongs on the path that actually creates the order, not at the top — the whole point is that it does not increment on a replay.",
          "`sendWithRetry` passes the same key twice: `handleCreate(body, key); const second = handleCreate(body, key); return { attempts: 2, workDone: workDone, finalResponse: second };`"
        ],
        solution: {
          "script.js": L(
            "// The client names the operation. The server guarantees it happens once.",
            "",
            "let orders = [];",
            "let nextId = 1;",
            "let keys = new Map();   // Idempotency-Key -> the response we sent",
            "let workDone = 0;",
            "",
            "function reset() {",
            "  orders = []; nextId = 1; keys = new Map(); workDone = 0;",
            "}",
            "",
            "function totalCharged() {",
            "  return orders.reduce(function (sum, o) { return sum + o.amount; }, 0);",
            "}",
            "",
            "function handleCreate(body, key) {",
            "  if (keys.has(key)) return keys.get(key);",
            "",
            "  workDone++;",
            "  const order = { id: nextId++, item: body.item, amount: body.amount };",
            "  orders.push(order);",
            "",
            "  const res = { status: 201, body: order };",
            "  keys.set(key, res);",
            "  return res;",
            "}",
            "",
            "function sendWithRetry(body, key) {",
            "  handleCreate(body, key);                      // response lost",
            "  const second = handleCreate(body, key);       // retry, same key",
            "  return { attempts: 2, workDone: workDone, finalResponse: second };",
            "}",
            "")
        }
      },

      /* ---------- api-u5-3 ---------- */
      {
        id: "api-u5-3",
        title: "In flight, and expiry",
        kind: "js", chip: "API", xp: 20, mins: 14,
        clock: 1700000000000,
        brief: "Two gaps are left in the simple version.\n\n**The retry that arrives too early.** A client times out at 2 seconds; the server is still working at 2.1. The retry arrives while the first request is *in flight* — there is no stored response to replay yet, and starting the work again is precisely the bug you were preventing. The honest answer is **`409 Conflict`**: that key is in progress, wait and ask again.\n\n**The store that grows forever.** Keys cannot be kept for all time. Stripe keeps them 24 hours, which is the right order of magnitude — the TTL only has to outlive any plausible retry. Past it the key is forgotten, and a request bearing it is simply a new operation.\n\nThis lesson has a controllable clock: `now()` reads it and `T.advance(ms)` moves it. Never use the real clock in a lesson — a test that depends on wall time is a test that fails at midnight.",
        steps: [
          { text: "Mark a key as in flight before doing the work. A second request on a key still in flight is a `409`, and does no work.",
            test: R`
T.expect(typeof begin === 'function', 'Define begin(key).');
reset();
T.eq(begin("k-1"), "go", 'an unseen key says go ahead');
T.eq(begin("k-1"), "in-flight", 'the same key, while still running, reports in-flight');
const res = handleCreate({ item: "desk", amount: 300 }, "k-1", { stayInFlight: true });
T.eq(res.status, 201, 'the first request completes normally');
reset();
const held = handleCreate({ item: "desk", amount: 300 }, "k-2", { stayInFlight: true });
T.eq(held.status, 201, 'first request through');
` },
          { text: "A retry arriving mid-flight gets a `409` and creates nothing.",
            test: R`
reset();
const out = retryWhileInFlight({ item: "desk", amount: 300 }, "k-9");
T.eq(out.second.status, 409, 'the retry lands while the first is still running — 409 Conflict');
T.eq(out.workDone, 1, 'and the work ran exactly once');
T.eq(orders.length, 1, 'one order');
T.eq(out.third.status, 201, 'once the first request finishes and stores its response, a later retry replays it');
T.eq(out.third.body, out.first.body, 'byte for byte, the original order');
` },
          { text: "Keys expire. Inside the TTL a repeat replays; past it the key is forgotten and the request is new work.",
            test: R`
reset();
const a = handleCreate({ item: "desk", amount: 300 }, "k-ttl");
T.eq(a.body.id, 1, 'first call creates order 1');
T.advance(23 * 60 * 60 * 1000);
T.eq(handleCreate({ item: "desk", amount: 300 }, "k-ttl").body.id, 1, '23 hours later the key is still live, so the response replays');
T.eq(orders.length, 1, 'and no second order was created');
T.advance(2 * 60 * 60 * 1000);
const after = handleCreate({ item: "desk", amount: 300 }, "k-ttl");
T.eq(after.body.id, 2, '25 hours in, the key has expired — this is simply a new operation');
T.eq(orders.length, 2, 'so a second order really is created');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// Two gaps: the retry that arrives before the first request finished,",
            "// and the key store that would otherwise grow forever.",
            "",
            "const TTL = 24 * 60 * 60 * 1000;   // 24 hours, like Stripe",
            "",
            "let orders = [];",
            "let nextId = 1;",
            "let keys = new Map();   // key -> { state: \"in-flight\" | \"done\", at, response }",
            "let workDone = 0;",
            "",
            "function reset() {",
            "  orders = []; nextId = 1; keys = new Map(); workDone = 0;",
            "}",
            "",
            "function begin(key) {",
            "  // Expire first: if the entry exists and now() - entry.at > TTL, delete it.",
            "  // Then:",
            "  //   no entry            -> record { state: \"in-flight\", at: now() } and return \"go\"",
            "  //   entry is in-flight  -> return \"in-flight\"",
            "  //   entry is done       -> return \"done\"",
            "}",
            "",
            "function handleCreate(body, key, opts) {",
            "  const state = begin(key);",
            "  if (state === \"in-flight\" && opts && opts.alreadyRunning) {",
            "    return { status: 409, body: { error: \"a request with this key is in progress\" } };",
            "  }",
            "  if (state === \"done\") return keys.get(key).response;",
            "",
            "  workDone++;",
            "  const order = { id: nextId++, item: body.item, amount: body.amount };",
            "  orders.push(order);",
            "  const res = { status: 201, body: order };",
            "  // Unless opts.stayInFlight, mark the key done and store the response.",
            "  return res;",
            "}",
            "",
            "function finish(key, response) {",
            "  // mark the key done, stamp it with now(), and store the response",
            "}",
            "",
            "function retryWhileInFlight(body, key) {",
            "  reset();",
            "  // 1) first  = handleCreate(body, key, { stayInFlight: true })  -> 201, key left in flight",
            "  // 2) second = handleCreate(body, key, { alreadyRunning: true }) -> 409",
            "  // 3) finish(key, first)",
            "  // 4) third  = handleCreate(body, key)                          -> replays first",
            "  // return { first, second, third, workDone }",
            "}",
            "") }
        ],
        hints: [
          "`begin` starts by expiring: `const e = keys.get(key); if (e && now() - e.at > TTL) { keys.delete(key); }` — then re-read it, or use a local that you clear.",
          "Then the three cases: `if (!keys.has(key)) { keys.set(key, { state: \"in-flight\", at: now() }); return \"go\"; } return keys.get(key).state === \"done\" ? \"done\" : \"in-flight\";`",
          "`finish` replaces the entry and re-stamps it, because the TTL should run from completion: `keys.set(key, { state: \"done\", at: now(), response: response });`",
          "In `handleCreate`, after building `res`: `if (!opts || !opts.stayInFlight) finish(key, res);` — leaving it in flight is how the next checkpoint simulates a request that has not returned yet."
        ],
        solution: {
          "script.js": L(
            "// Two gaps: the retry that arrives before the first request finished,",
            "// and the key store that would otherwise grow forever.",
            "",
            "const TTL = 24 * 60 * 60 * 1000;   // 24 hours, like Stripe",
            "",
            "let orders = [];",
            "let nextId = 1;",
            "let keys = new Map();   // key -> { state: \"in-flight\" | \"done\", at, response }",
            "let workDone = 0;",
            "",
            "function reset() {",
            "  orders = []; nextId = 1; keys = new Map(); workDone = 0;",
            "}",
            "",
            "function begin(key) {",
            "  const existing = keys.get(key);",
            "  if (existing && now() - existing.at > TTL) keys.delete(key);",
            "",
            "  if (!keys.has(key)) {",
            "    keys.set(key, { state: \"in-flight\", at: now() });",
            "    return \"go\";",
            "  }",
            "  return keys.get(key).state === \"done\" ? \"done\" : \"in-flight\";",
            "}",
            "",
            "function handleCreate(body, key, opts) {",
            "  const state = begin(key);",
            "  if (state === \"in-flight\" && opts && opts.alreadyRunning) {",
            "    return { status: 409, body: { error: \"a request with this key is in progress\" } };",
            "  }",
            "  if (state === \"done\") return keys.get(key).response;",
            "",
            "  workDone++;",
            "  const order = { id: nextId++, item: body.item, amount: body.amount };",
            "  orders.push(order);",
            "  const res = { status: 201, body: order };",
            "  if (!opts || !opts.stayInFlight) finish(key, res);",
            "  return res;",
            "}",
            "",
            "function finish(key, response) {",
            "  keys.set(key, { state: \"done\", at: now(), response: response });",
            "}",
            "",
            "function retryWhileInFlight(body, key) {",
            "  reset();",
            "  const first = handleCreate(body, key, { stayInFlight: true });",
            "  const second = handleCreate(body, key, { alreadyRunning: true });",
            "  finish(key, first);",
            "  const third = handleCreate(body, key);",
            "  return { first: first, second: second, third: third, workDone: workDone };",
            "}",
            "")
        }
      },

      /* ---------- api-u5-4 ---------- */
      {
        id: "api-u5-4",
        title: "The key covers one request",
        kind: "js", chip: "API", xp: 20, mins: 14,
        clock: 1700000000000,
        crypto: true,
        brief: "One hole left, and it is the subtle one.\n\nAn `Idempotency-Key` names **one specific operation**, not \"whatever I send next\". If a client reuses a key with a *different body* — a bug, or two code paths sharing a key generator — replaying the stored response would answer a question nobody asked. The client would be told its $500 order succeeded when the stored response was for a $300 one.\n\nSo the server fingerprints the request alongside the key, and refuses the mismatch rather than guessing. Stripe does exactly this instead of silently replaying.\n\nThe fingerprint is a hash of the request — here, method, path and body. Store it with the key; on a repeat, compare before replaying:\n\n- same key, same fingerprint → replay\n- same key, **different** fingerprint → **`422`**, and do nothing\n\nThat last branch is the difference between a safety mechanism and a very confusing bug.",
        steps: [
          { text: "`fingerprint(req)` is a sha256 over method, path and body — stable for the same request, different for any change.",
            test: R`
T.expect(typeof fingerprint === 'function', 'Define fingerprint(req).');
const a = { method: "POST", path: "/api/orders", body: { item: "desk", amount: 300 } };
const fp = fingerprint(a);
T.expect(/^[0-9a-f]{64}$/.test(fp), 'a sha256 hex digest');
T.eq(fingerprint({ method: "POST", path: "/api/orders", body: { item: "desk", amount: 300 } }), fp, 'the same request fingerprints the same every time');
T.expect(fingerprint({ method: "POST", path: "/api/orders", body: { item: "desk", amount: 500 } }) !== fp, 'a different amount is a different request');
T.expect(fingerprint({ method: "POST", path: "/api/refunds", body: { item: "desk", amount: 300 } }) !== fp, 'and so is a different path');
` },
          { text: "Same key, same request → replay. The fingerprint is stored alongside the response.",
            test: R`
reset();
const req = { method: "POST", path: "/api/orders", body: { item: "desk", amount: 300 } };
const first = handle(req, "k-1");
T.eq(first.status, 201, 'first call does the work');
T.eq(keys.get("k-1").fingerprint, fingerprint(req), 'the request fingerprint is stored with the key');
const again = handle(req, "k-1");
T.eq(again, first, 'an identical repeat replays the stored response');
T.eq(orders.length, 1, 'and creates nothing new');
` },
          { text: "Same key, **different** request → `422`, and nothing happens. This is the branch that stops a client being told the wrong thing.",
            test: R`
reset();
const small = { method: "POST", path: "/api/orders", body: { item: "desk", amount: 300 } };
const large = { method: "POST", path: "/api/orders", body: { item: "desk", amount: 500 } };
const first = handle(small, "k-1");
T.eq(first.body.amount, 300, 'the 300 order was created');
const clash = handle(large, "k-1");
T.eq(clash.status, 422, 'the same key with a different body is refused, not replayed');
T.eq(orders.length, 1, 'nothing was created');
T.eq(totalCharged(), 300, 'and nothing extra was charged');
T.expect(clash.body.error.indexOf("Idempotency-Key") !== -1, 'the error should name the header, so the client can find the bug');
T.eq(handle(small, "k-1"), first, 'the original key still replays its original response — the clash did not corrupt it');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// A key names ONE operation. Replaying a stored response for a",
            "// different request would answer a question nobody asked.",
            "",
            "const TTL = 24 * 60 * 60 * 1000;",
            "",
            "let orders = [];",
            "let nextId = 1;",
            "let keys = new Map();   // key -> { at, fingerprint, response }",
            "",
            "function reset() { orders = []; nextId = 1; keys = new Map(); }",
            "function totalCharged() {",
            "  return orders.reduce(function (sum, o) { return sum + o.amount; }, 0);",
            "}",
            "",
            "function fingerprint(req) {",
            "  // sha256 over method, path and body — sha256() is available here",
            "}",
            "",
            "function handle(req, key) {",
            "  // expire the entry if now() - entry.at > TTL",
            "  // entry exists:",
            "  //    fingerprint matches  -> replay entry.response",
            "  //    fingerprint differs  -> 422, body { error: \"...Idempotency-Key...\" }",
            "  // no entry: create the order, store { at: now(), fingerprint, response }",
            "}",
            "") }
        ],
        hints: [
          "Hash a canonical string so the parts cannot run together: `return sha256(req.method + \"\\n\" + req.path + \"\\n\" + JSON.stringify(req.body));`",
          "Expire before you look: `const e = keys.get(key); if (e && now() - e.at > TTL) keys.delete(key);` then fetch again with `const hit = keys.get(key);`",
          "The two branches are one comparison apart: `if (hit) { return hit.fingerprint === fingerprint(req) ? hit.response : { status: 422, body: { error: \"This Idempotency-Key was already used with a different request\" } }; }`",
          "On the fresh path, store all three: `keys.set(key, { at: now(), fingerprint: fingerprint(req), response: res });`"
        ],
        solution: {
          "script.js": L(
            "// A key names ONE operation. Replaying a stored response for a",
            "// different request would answer a question nobody asked.",
            "",
            "const TTL = 24 * 60 * 60 * 1000;",
            "",
            "let orders = [];",
            "let nextId = 1;",
            "let keys = new Map();   // key -> { at, fingerprint, response }",
            "",
            "function reset() { orders = []; nextId = 1; keys = new Map(); }",
            "function totalCharged() {",
            "  return orders.reduce(function (sum, o) { return sum + o.amount; }, 0);",
            "}",
            "",
            "function fingerprint(req) {",
            "  return sha256(req.method + \"\\n\" + req.path + \"\\n\" + JSON.stringify(req.body));",
            "}",
            "",
            "function handle(req, key) {",
            "  const existing = keys.get(key);",
            "  if (existing && now() - existing.at > TTL) keys.delete(key);",
            "",
            "  const hit = keys.get(key);",
            "  if (hit) {",
            "    if (hit.fingerprint === fingerprint(req)) return hit.response;",
            "    return {",
            "      status: 422,",
            "      body: { error: \"This Idempotency-Key was already used with a different request\" }",
            "    };",
            "  }",
            "",
            "  const order = { id: nextId++, item: req.body.item, amount: req.body.amount };",
            "  orders.push(order);",
            "  const res = { status: 201, body: order };",
            "  keys.set(key, { at: now(), fingerprint: fingerprint(req), response: res });",
            "  return res;",
            "}",
            "")
        }
      },

      /* ---------- api-quiz-5 ---------- */
      {
        id: "api-quiz-5",
        title: "Unit 5 quiz: idempotency keys",
        kind: "quiz", chip: "API", xp: 20, mins: 6,
        questions: [
          {
            q: "A client POSTs an order and the connection drops before any response arrives. What does it actually not know?",
            choices: [
              "Whether the server is still running, which is why a health check must come first",
              "Whether the request was lost on the way out or the response was lost on the way back",
              "Whether the order was valid, since no validation errors were ever received",
              "Whether another client modified the same resource while its request was in flight"
            ],
            answer: 1,
            explain: "Both failures look identical from the client's side: silence. If the request never arrived, retrying is essential; if only the response was lost, retrying double-charges. The ambiguity is the entire problem, and an idempotency key resolves it by making the retry safe either way."
          },
          {
            q: "Why does \"never auto-retry a POST\" fail to solve this?",
            choices: [
              "Because the rule only applies to idempotent methods, and POST is not one of them",
              "Because the client retries regardless — the alternative is silently losing the order",
              "Because modern HTTP clients ignore the rule and retry at the transport layer anyway",
              "Because the rule was written for HTTP/1.1 and no longer applies over HTTP/2 connections"
            ],
            answer: 1,
            explain: "The rule is correct about the risk and useless as advice, because not retrying has its own cost: a customer who paid and got nothing. Faced with two bad options a real client picks retrying, so the fix has to make retrying safe rather than forbid it."
          },
          {
            q: "On a repeated `Idempotency-Key`, what must the server return?",
            choices: [
              "The stored response from the first attempt, including its original status and body",
              "A `200 OK` confirming the operation already completed successfully",
              "A `409 Conflict`, since the operation has already been performed once",
              "A fresh `201` carrying the current state of the resource that was created"
            ],
            answer: 0,
            explain: "The retry must be indistinguishable from the original call — same 201, same order id — because the client is trying to find out what happened the first time. A 200 or a fresh response would tell it something different from what the lost response said, which defeats the purpose. 409 is right only while the first request is still in flight."
          },
          {
            q: "A retry arrives while the first request with that key is still being processed. What is the honest answer?",
            choices: [
              "Replay nothing and run the work again, since no response has been recorded yet",
              "`409 Conflict` — that key is in progress, so the client should wait and ask again",
              "`202 Accepted`, because the operation has been received and is being processed",
              "Block until the first request finishes, then return the same response to both callers"
            ],
            answer: 1,
            explain: "There is no stored response to replay, and running the work again is precisely the double-charge you were preventing. 409 tells the client the truth. A 202 would wrongly suggest a new operation was accepted, and blocking turns one slow request into two."
          },
          {
            q: "Why does the server store a fingerprint of the request alongside the key?",
            choices: [
              "To detect a replay attack, since an attacker who captured the key could otherwise resend it and repeat the operation",
              "To refuse a key reused with a different request, rather than replaying the wrong response",
              "To avoid storing the full request body, which would make the key store too large",
              "To let the server merge the two requests when their bodies differ only slightly"
            ],
            answer: 1,
            explain: "If a client reuses a key with a different body, replaying would tell it a $500 order succeeded when the stored response was for a $300 one. Comparing fingerprints turns that into an explicit error the client can find and fix. It is not a security measure — anyone holding the key can already replay the original."
          },
          {
            q: "Why do idempotency keys expire after hours rather than being kept permanently?",
            choices: [
              "Because a key kept too long could be guessed by another client and used to replay the response",
              "Because the store would grow without bound, and nothing legitimately retries a request a day later",
              "Because HTTP requires conditional state to be discarded once the connection closes",
              "Because an expired key lets the client safely repeat the same operation deliberately"
            ],
            answer: 1,
            explain: "It is a storage-lifetime decision: every key ever used would otherwise be kept forever, and the TTL only has to outlive a plausible retry — Stripe uses 24 hours. The last option describes a real consequence but inverts the reason; reusing an expired key to repeat an operation is a side effect, not the goal."
          }
        ]
      }
    ]
  });
})();
