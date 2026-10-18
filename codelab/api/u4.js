/* Advanced API Design — Unit 4: Safe retries: idempotency keys */
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

  /* ---------- api-u4-2: do it once ---------- */
  var ONCE_HEAD = PROBLEM_FN + R`
// The payment processor. Every call moves real money — and is recorded here.
let charges = [];
function chargeCard(card, amount) {
  const charge = { id: "ch_" + (charges.length + 1), card: card, amount: amount };
  charges.push(charge);
  return charge;
}
`;

  var ONCE_STARTER = ONCE_HEAD + R`
// 2) idempotency key → the response first sent for it
const saved = new Map();

function handleRequest(req) {
  if (req.method !== "POST" || req.path !== "/payments") {
    return problem(404, "not-found", "Not Found", "No route for " + req.path);
  }
  // 1) No idempotency-key header → problem(400, "missing-idempotency-key",
  //    "Idempotency-Key required", "POST /payments needs an Idempotency-Key header")
  // 2) A key seen before → send the SAVED response again, without charging, plus
  //    an idempotent-replayed: "true" header (on a copy of the headers)
  const charge = chargeCard(req.body.card, req.body.amount);
  const res = { status: 201, headers: { location: "/payments/" + charge.id }, body: charge };
  // 2) save res under its key before returning it
  return res;
}
`;

  var ONCE_SOLUTION = ONCE_HEAD + R`
// idempotency key → the response first sent for it
const saved = new Map();

function handleRequest(req) {
  if (req.method !== "POST" || req.path !== "/payments") {
    return problem(404, "not-found", "Not Found", "No route for " + req.path);
  }
  const key = (req.headers || {})["idempotency-key"];
  if (!key) {
    return problem(400, "missing-idempotency-key", "Idempotency-Key required", "POST /payments needs an Idempotency-Key header");
  }
  if (saved.has(key)) {
    const first = saved.get(key);
    return { status: first.status, headers: Object.assign({}, first.headers, { "idempotent-replayed": "true" }), body: first.body };
  }
  const charge = chargeCard(req.body.card, req.body.amount);
  const res = { status: 201, headers: { location: "/payments/" + charge.id }, body: charge };
  saved.set(key, res);
  return res;
}
`;

  /* ---------- api-u4-3: misuse, scope and expiry ---------- */
  var MISUSE_HEAD = PROBLEM_FN + R`
let charges = [];
function chargeCard(account, card, amount) {
  const charge = { id: "ch_" + (charges.length + 1), account: account, card: card, amount: amount };
  charges.push(charge);
  return charge;
}

const KEY_TTL = 24 * 60 * 60 * 1000;    // keys are remembered for 24 hours
const saved = new Map();

// "authorization: Bearer acct_1" → "acct_1"
function clientOf(req) {
  return String((req.headers || {}).authorization || "").replace(/^Bearer /, "");
}

function validate(body) {
  const errors = [];
  if (typeof body.card !== "string") errors.push({ detail: "is required", pointer: "#/card" });
  if (!Number.isInteger(body.amount) || body.amount < 1) {
    errors.push({ detail: "must be a positive integer of cents", pointer: "#/amount" });
  }
  return errors;
}

function replay(res) {
  return { status: res.status, headers: Object.assign({}, res.headers, { "idempotent-replayed": "true" }), body: res.body };
}
`;

  var MISUSE_STARTER = MISUSE_HEAD + R`
function handleRequest(req) {
  if (req.method !== "POST" || req.path !== "/payments") {
    return problem(404, "not-found", "Not Found", "No route for " + req.path);
  }
  const client = clientOf(req);
  if (!client) return problem(401, "unauthorized", "Unauthorized", "Send authorization: Bearer <account>");
  const key = (req.headers || {})["idempotency-key"];
  if (!key) {
    return problem(400, "missing-idempotency-key", "Idempotency-Key required", "POST /payments needs an Idempotency-Key header");
  }

  // 1) Keys belong to a client: two accounts may both send "order-17".
  //    Store and look up under client + " " + key.
  const fingerprint = JSON.stringify(req.body);
  const record = saved.get(key);
  // 4) A record at least KEY_TTL old (now() - record.at) is forgotten: delete it, treat the key as new.
  if (record) {
    // 2) Same key, different request (fingerprint) → problem(422, "idempotency-key-reused",
    //    "Idempotency-Key reused", "This Idempotency-Key was used with a different request")
    return replay(record.res);
  }

  const errors = validate(req.body || {});
  let res;
  if (errors.length) {
    res = problem(422, "validation", "Invalid request", "See errors for the fields to fix.", { errors: errors });
  } else {
    const charge = chargeCard(client, req.body.card, req.body.amount);
    res = { status: 201, headers: { location: "/payments/" + charge.id }, body: charge };
  }
  // 3) This saves EVERY answer — including a 422 the client could fix and retry.
  //    Save only once the payment actually ran.
  saved.set(key, { fingerprint: fingerprint, res: res, at: now() });
  return res;
}
`;

  var MISUSE_SOLUTION = MISUSE_HEAD + R`
function handleRequest(req) {
  if (req.method !== "POST" || req.path !== "/payments") {
    return problem(404, "not-found", "Not Found", "No route for " + req.path);
  }
  const client = clientOf(req);
  if (!client) return problem(401, "unauthorized", "Unauthorized", "Send authorization: Bearer <account>");
  const key = (req.headers || {})["idempotency-key"];
  if (!key) {
    return problem(400, "missing-idempotency-key", "Idempotency-Key required", "POST /payments needs an Idempotency-Key header");
  }

  const slot = client + " " + key;
  const fingerprint = JSON.stringify(req.body);
  let record = saved.get(slot);
  if (record && now() - record.at >= KEY_TTL) {
    saved.delete(slot);
    record = undefined;
  }
  if (record) {
    if (record.fingerprint !== fingerprint) {
      return problem(422, "idempotency-key-reused", "Idempotency-Key reused", "This Idempotency-Key was used with a different request");
    }
    return replay(record.res);
  }

  const errors = validate(req.body || {});
  if (errors.length) {
    return problem(422, "validation", "Invalid request", "See errors for the fields to fix.", { errors: errors });
  }
  const charge = chargeCard(client, req.body.card, req.body.amount);
  const res = { status: 201, headers: { location: "/payments/" + charge.id }, body: charge };
  saved.set(slot, { fingerprint: fingerprint, res: res, at: now() });
  return res;
}
`;

  /* ---------- api-u4-4: two retries at once ---------- */
  var RACE_HEAD = PROBLEM_FN + R`
let charges = [];
let processorUp = true;

// The processor takes 50 ms to answer, and fails while it is down.
function chargeCard(card, amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!processorUp) return reject(new Error("processor unavailable"));
      const charge = { id: "ch_" + (charges.length + 1), card: card, amount: amount };
      charges.push(charge);
      resolve(charge);
    }, 50);
  });
}

function replay(res) {
  return { status: res.status, headers: Object.assign({}, res.headers, { "idempotent-replayed": "true" }), body: res.body };
}

const saved = new Map();      // key → the finished response
`;

  var RACE_STARTER = RACE_HEAD + R`
async function handleRequest(req) {
  if (req.method !== "POST" || req.path !== "/payments") {
    return problem(404, "not-found", "Not Found", "No route for " + req.path);
  }
  const key = (req.headers || {})["idempotency-key"];
  if (!key) {
    return problem(400, "missing-idempotency-key", "Idempotency-Key required", "POST /payments needs an Idempotency-Key header");
  }
  if (saved.has(key)) return replay(saved.get(key));

  // 1) A retry that arrives WHILE the first request is still charging passes the
  //    check above — nothing is saved yet. Mark the key as in flight before the
  //    await, and answer a second arrival with problem(409, "request-in-progress",
  //    "Request in progress", "A request with this Idempotency-Key is still being processed")
  // 2) If chargeCard throws, answer problem(503, "processor-unavailable",
  //    "Payment processor unavailable", "Nothing was charged; retry with the same Idempotency-Key")
  //    with a retry-after: "1" header — and don't save it. Either way, release the key.
  const charge = await chargeCard(req.body.card, req.body.amount);
  const res = { status: 201, headers: { location: "/payments/" + charge.id }, body: charge };
  saved.set(key, res);
  return res;
}
`;

  var RACE_SOLUTION = RACE_HEAD + R`
const inFlight = new Set();   // keys whose first request is still running

async function handleRequest(req) {
  if (req.method !== "POST" || req.path !== "/payments") {
    return problem(404, "not-found", "Not Found", "No route for " + req.path);
  }
  const key = (req.headers || {})["idempotency-key"];
  if (!key) {
    return problem(400, "missing-idempotency-key", "Idempotency-Key required", "POST /payments needs an Idempotency-Key header");
  }
  if (saved.has(key)) return replay(saved.get(key));
  if (inFlight.has(key)) {
    return problem(409, "request-in-progress", "Request in progress", "A request with this Idempotency-Key is still being processed");
  }

  inFlight.add(key);
  try {
    const charge = await chargeCard(req.body.card, req.body.amount);
    const res = { status: 201, headers: { location: "/payments/" + charge.id }, body: charge };
    saved.set(key, res);
    return res;
  } catch (err) {
    const res = problem(503, "processor-unavailable", "Payment processor unavailable", "Nothing was charged; retry with the same Idempotency-Key");
    res.headers["retry-after"] = "1";
    return res;
  } finally {
    inFlight.delete(key);
  }
}
`;

  window.CODELAB.addUnit("api", {
    id: "api-u4",
    title: "Safe retries: idempotency keys",
    icon: "🔁",
    blurb: "A timeout doesn't say whether the payment happened, and the client is going to retry. Make that retry charge once — even with the wrong body, a different account, a day later, or two retries at the same moment.",
    cheat: [
      { h: "Why POST needs help", lang: "text", code: "client ──POST /payments──▶ server ──charge──▶ processor\n        ◀─── (connection drops) ───\n\nlost request?  crashed halfway?  lost response?\n→ the client cannot tell, so it retries", note: "GET, PUT and DELETE are idempotent by definition (How the Web Works, U4) — sending them twice ends in the same state. POST is not, so a retry can mean a second charge." },
      { h: "The Idempotency-Key flow", lang: "text", code: "POST /payments            idempotency-key: 7c1f…   → 201  ch_1\nPOST /payments (retry)    idempotency-key: 7c1f…   → 201  ch_1\n                                     idempotent-replayed: true\nPOST /payments (new one)  idempotency-key: 9e04…   → 201  ch_2", note: "The CLIENT generates the key (a UUID), once per logical operation, and reuses it only to retry that operation. Stripe's header names are exactly these." },
      { h: "What the server keeps", lang: "js", code: "saved.set(client + \" \" + key, {\n  fingerprint: JSON.stringify(req.body),  // same key, different body?\n  res,                                    // what to replay\n  at: now()                               // forget after KEY_TTL\n});", note: "Scope keys per client, compare a fingerprint, and keep them long enough to outlive any retry (Stripe: at least 24 hours)." },
      { h: "The answers when a key is reused", lang: "text", code: "same key, same request, finished   → replay the saved response\nsame key, DIFFERENT request        → 422  idempotency-key-reused\nsame key, first one still running  → 409  request-in-progress\nkey missing on POST /payments      → 400\nvalidation failed                  → 422, NOT saved: fix and retry", note: "The IETF httpapi draft 'The Idempotency-Key HTTP Header Field' uses 422 for reuse with a different payload and 409 for a concurrent duplicate." },
      { h: "The race, and the fix", lang: "js", code: "if (saved.has(key)) return replay(saved.get(key));\nif (inFlight.has(key)) return problem(409, …);\ninFlight.add(key);                 // BEFORE the await\ntry { … await chargeCard(…) … saved.set(key, res); }\ncatch (err) { return problem(503, …); }   // not saved\nfinally { inFlight.delete(key); }  // always release", note: "Check-then-await-then-save leaves a window where two retries both see 'not saved' and both charge. Mark the key before awaiting. A real service does this with a unique insert in the database, not a Set in memory." }
    ],
    lessons: [

      {
        id: "api-u4-1",
        title: "The request that timed out",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "A client sends `POST /payments`. Thirty seconds later the connection drops with no response. Three different things could have happened:\n\n- the request never arrived — nothing was charged\n- the server crashed halfway — maybe charged, maybe not\n- the charge went through and the **response** was lost\n\nFrom the client's side all three look identical. Retrying a `GET` or a `PUT` is harmless, because they are **idempotent**: doing one twice leaves the same state as doing it once. A `POST` is not. If the third case happened, the retry charges the customer twice.",
            ask: { type: "pick",
              q: "A client's `POST /payments` times out with no response at all. What does the client know about the charge?",
              choices: ["It didn't happen: no response means the server never acted", "It happened, because servers always finish what they start", "Nothing — it may or may not have happened", "It happened, but the bank will reverse it automatically"],
              answer: 2,
              why: [
                "The response can be lost after the work is done, so no response proves nothing.",
                "A server can crash or be stopped halfway, and the request may never have arrived at all.",
                "Lost request, half-done work and lost response look the same from the client's side, so the outcome is unknown.",
                "Nothing reverses a successful charge on its own; a duplicate is just a second real charge."
              ] } },

          { read: "The fix is to make the retry recognisable. Stripe's API, and the IETF draft *The Idempotency-Key HTTP Header Field*, do it the same way. The **client** generates a unique key for each *logical operation* (a UUID) and sends it with the POST:\n\n`idempotency-key: 7c1f0d9e-…`\n\nThe first time the server sees the key, it does the work and **saves the response** under it. A retry with the same key gets that saved response back, with no second charge. A *new* payment gets a *new* key.",
            ask: { type: "pick",
              q: "When should a client reuse an idempotency key?",
              choices: ["For every request it sends during the same session", "Only when retrying the same operation after a failure or timeout", "For every payment made to the same customer on the same day", "Never: each individual HTTP request needs its own fresh key, retries included"],
              answer: 1,
              why: [
                "Then two different payments in one session would collapse into one, and the second would silently replay the first.",
                "The key names one operation. Reusing it means 'this is the same thing again'. That is exactly a retry.",
                "Two real payments to one customer are two operations; sharing a key would swallow the second.",
                "A fresh key on the retry is a new operation to the server, and the customer is charged twice."
              ] } },

          { read: "Only the methods that are not idempotent need a key. `GET`, `PUT` and `DELETE` already end in the same state however many times they are repeated, so a client can retry them freely. `POST` creates something each time. `PATCH` *can* be idempotent (a merge patch that sets fields is), but one that appends or increments is not, so many APIs accept keys on PATCH too.\n\nWith keys in place, the number of charges equals the number of **keys**, not the number of requests.",
            ask: { type: "predict", transfer: true,
              q: "A client pays with key k1, times out, and retries with k1. Then it makes a second payment with key k2, times out, and retries with k2. The server handles keys correctly. How many charges are there? Type a number.",
              answer: "2",
              why: "Four requests, two keys. Each retry finds its key already saved and gets the stored response back, so there is one charge per key: 2." } },

          { read: "What the server has to store, and compare, to make that safe:\n\n- **the client** — keys are scoped to an account, because two customers will both send `1` one day\n- **a fingerprint of the request** — the same key with a *different* body is a client bug, and replaying the old answer would hide it. The IETF draft answers it with `422`\n- **the response** to replay\n- **an expiry** — keys can't be kept forever; Stripe keeps them for at least 24 hours\n\nAnd only results of work that **ran** are saved. A request that failed validation charged nothing, so the client can fix it and retry with the same key.",
            ask: { type: "pick", transfer: true,
              q: "A retry reuses key k1, but its body now says 500 where the first said 50. What should the server do?",
              choices: ["Charge 500, because the newest body wins", "Replay the stored response for the 50 charge and quietly ignore the new body", "Refuse with a 422: the key was already used for a different request", "Charge both amounts, once each"],
              answer: 2,
              why: [
                "That would be a second charge under a key that promised 'at most once'.",
                "Replaying hides a client bug: the client thinks it paid 500 and is told it succeeded.",
                "Same key, different request means the client is confused about what it is retrying. Saying so is the only safe answer, and the IETF draft uses 422 for it.",
                "That double-charges, which is the very thing the key exists to prevent."
              ] } }
        ]
      },

      {
        id: "api-u4-2",
        title: "Idempotency-Key: do it once",
        kind: "js", chip: "API", xp: 15, mins: 13,
        brief: "Make `POST /payments` safe to retry.\n\n- the client sends an `idempotency-key` header with every payment. This endpoint **requires** one, because a payment without a key is a payment that can't be retried safely: answer **400**\n- the first request with a key charges the card, answers `201`, and **saves that response** under the key\n- a request with a key already saved charges **nothing** and sends the saved response again, with one extra header: `idempotent-replayed: \"true\"` (Stripe's name for it)\n\nPut the replay header on a **copy** of the saved headers. The saved response is what the next retry will get, and it must stay the original.\n\n`chargeCard` moves money and records every charge in `charges` — the checks count them.",
        steps: [
          { text: "No `idempotency-key` header → **400** `missing-idempotency-key` (title `Idempotency-Key required`, detail `POST /payments needs an Idempotency-Key header`), and no charge.",
            test: R`
var res = handleRequest({ method: 'POST', path: '/payments', query: {}, headers: {}, body: { card: 'tok_visa', amount: 1200 } });
T.eq(res.status, 400, 'No key → 400');
T.eq([res.body.type, res.body.title, res.body.detail], ['https://api.example.com/problems/missing-idempotency-key', 'Idempotency-Key required', 'POST /payments needs an Idempotency-Key header'], 'The missing-key problem');
T.eq(charges.length, 0, 'Nothing was charged');
` },
          { text: "A payment with a new key charges once and answers `201` with a `location` header and the charge.",
            test: R`
var res = handleRequest({ method: 'POST', path: '/payments', query: {}, headers: { 'idempotency-key': 'k-1' }, body: { card: 'tok_visa', amount: 1200 } });
T.eq(res.status, 201, 'A new key → the payment runs: 201');
T.eq(res.headers.location, '/payments/ch_1', 'location names the charge');
T.eq(res.body, { id: 'ch_1', card: 'tok_visa', amount: 1200 }, 'The body is the charge');
T.eq(charges.length, 1, 'One charge');
` },
          { text: "Retrying with the same key charges nothing: it answers the **saved** response again, plus `idempotent-replayed: \"true\"` — and the saved response itself stays untouched.",
            test: R`
var req = { method: 'POST', path: '/payments', query: {}, headers: { 'idempotency-key': 'k-1' }, body: { card: 'tok_visa', amount: 1200 } };
var retry = handleRequest(req);
T.eq(charges.length, 1, 'The retry must NOT charge again');
T.eq([retry.status, retry.headers.location], [201, '/payments/ch_1'], 'The retry gets the same status and location as the first answer');
T.eq(retry.body, { id: 'ch_1', card: 'tok_visa', amount: 1200 }, 'and the same charge');
T.eq(retry.headers['idempotent-replayed'], 'true', 'A replay says so: idempotent-replayed: "true"');
var again = handleRequest(req);
T.eq([again.body.id, charges.length], ['ch_1', 1], 'A third try is still the same charge');
T.eq(saved.get('k-1').headers['idempotent-replayed'], undefined, 'The SAVED response must not gain the replay header — add it to a copy');
` },
          { text: "A different key is a different payment: it charges again. And the first key still replays its own charge.",
            test: R`
var b = handleRequest({ method: 'POST', path: '/payments', query: {}, headers: { 'idempotency-key': 'k-2' }, body: { card: 'tok_visa', amount: 1200 } });
T.eq([b.status, b.body.id, b.headers['idempotent-replayed']], [201, 'ch_2', undefined], 'A new key is a new payment, even with the same body');
T.eq(charges.length, 2, 'Two keys, two charges');
var a = handleRequest({ method: 'POST', path: '/payments', query: {}, headers: { 'idempotency-key': 'k-1' }, body: { card: 'tok_visa', amount: 1200 } });
T.eq([a.body.id, charges.length], ['ch_1', 2], 'k-1 still replays ch_1');
` }
        ],
        files: [{ name: "script.js", content: ONCE_STARTER }],
        hints: [
          "Read the key at the top: `const key = (req.headers || {})[\"idempotency-key\"];` and return the 400 problem when it's missing.",
          "Before charging: `if (saved.has(key)) { const first = saved.get(key); return { status: first.status, headers: Object.assign({}, first.headers, { \"idempotent-replayed\": \"true\" }), body: first.body }; }`.",
          "After building `res`, store it: `saved.set(key, res);` — the replay path builds a NEW headers object, so the saved one never changes."
        ],
        solution: { "script.js": ONCE_SOLUTION }
      },

      {
        id: "api-u4-3",
        title: "Key misuse, scope and expiry",
        kind: "js", chip: "API", xp: 15, mins: 15, clock: 0,
        brief: "The last lesson's keys work for one honest client. A production API sees many clients, some buggy, over many days. Four rules, each a real failure:\n\n- **Keys belong to a client.** Two accounts will both send `order-17` one day. Look keys up under the account *and* the key, or account 2 is handed account 1's receipt.\n- **Same key, different request → 422.** A key reused with a different body means the client is confused about what it is retrying. Replaying the old answer would hide that. Compare a **fingerprint** of the body, and answer `idempotency-key-reused`.\n- **Save only work that ran.** A 422 for a bad amount charged nothing. If you save it, the client can never fix the amount and retry with the same key.\n- **Keys expire.** Remember each one for `KEY_TTL` (24 hours, Stripe's figure), measured with `now()`. After that, the key is new again.\n\nThe account comes from `authorization: Bearer acct_1`, through the provided `clientOf(req)`. Time is the fake clock: `now()` starts at 0, and the checks move it with `T.advance(ms)`.",
        steps: [
          { text: "Scope keys to the client: save and look up under `client + \" \" + key`. Two accounts that send the same key make two separate payments.",
            test: R`
function pay(acct, key, body) { return handleRequest({ method: 'POST', path: '/payments', query: {}, headers: { authorization: 'Bearer ' + acct, 'idempotency-key': key }, body: body }); }
var a1 = pay('acct_1', 'order-17', { card: 'tok_visa', amount: 1200 });
T.eq([a1.status, a1.body.id, a1.body.account], [201, 'ch_1', 'acct_1'], 'acct_1 pays');
var a2 = pay('acct_2', 'order-17', { card: 'tok_visa', amount: 1200 });
T.eq([a2.status, a2.body.id, a2.body.account], [201, 'ch_2', 'acct_2'], 'acct_2 sends the SAME key: it is a different payment, not a replay of acct_1');
T.eq(a2.headers['idempotent-replayed'], undefined, 'acct_2 must never be handed acct_1 receipt');
var again = pay('acct_1', 'order-17', { card: 'tok_visa', amount: 1200 });
T.eq([again.body.id, again.headers['idempotent-replayed'], charges.length], ['ch_1', 'true', 2], 'acct_1 retry still replays ch_1');
` },
          { text: "Same client, same key, **different** body → **422** `idempotency-key-reused` (title `Idempotency-Key reused`, detail `This Idempotency-Key was used with a different request`), and no charge.",
            test: R`
function pay(acct, key, body) { return handleRequest({ method: 'POST', path: '/payments', query: {}, headers: { authorization: 'Bearer ' + acct, 'idempotency-key': key }, body: body }); }
var res = pay('acct_1', 'order-17', { card: 'tok_visa', amount: 9999 });
T.eq(res.status, 422, 'A different body under a used key → 422');
T.eq([res.body.type, res.body.title, res.body.detail], ['https://api.example.com/problems/idempotency-key-reused', 'Idempotency-Key reused', 'This Idempotency-Key was used with a different request'], 'The key-reuse problem');
T.eq(charges.length, 2, 'Nothing new was charged');
T.eq(pay('acct_1', 'order-17', { card: 'tok_visa', amount: 1200 }).body.id, 'ch_1', 'The original request under that key still replays');
` },
          { text: "Don't save a validation failure: a 422 for a bad amount charged nothing, so the corrected request with the **same key** must go through.",
            test: R`
function pay(acct, key, body) { return handleRequest({ method: 'POST', path: '/payments', query: {}, headers: { authorization: 'Bearer ' + acct, 'idempotency-key': key }, body: body }); }
var bad = pay('acct_1', 'k-fix', { card: 'tok_visa', amount: -5 });
T.eq([bad.status, bad.body.type], [422, 'https://api.example.com/problems/validation'], 'amount -5 fails validation');
T.eq(bad.body.errors, [{ detail: 'must be a positive integer of cents', pointer: '#/amount' }], 'with the amount error');
var fixed = pay('acct_1', 'k-fix', { card: 'tok_visa', amount: 500 });
T.eq([fixed.status, fixed.body.id, fixed.body.amount], [201, 'ch_3', 500], 'The corrected retry with the SAME key is charged — the 422 was never saved');
T.eq(fixed.headers['idempotent-replayed'], undefined, 'and it is a real answer, not a replay');
` },
          { text: "Expire keys: a record is remembered for `KEY_TTL`. One millisecond before that it still replays; at `KEY_TTL` it is forgotten, and the key runs as new.",
            test: R`
function pay(acct, key, body) { return handleRequest({ method: 'POST', path: '/payments', query: {}, headers: { authorization: 'Bearer ' + acct, 'idempotency-key': key }, body: body }); }
var body = { card: 'tok_visa', amount: 1200 };
T.advance(KEY_TTL - 1);
var held = pay('acct_1', 'order-17', body);
T.eq([held.body.id, held.headers['idempotent-replayed']], ['ch_1', 'true'], 'One millisecond before 24 hours, order-17 still replays');
T.advance(1);
var fresh = pay('acct_1', 'order-17', body);
T.eq([fresh.status, fresh.body.id], [201, 'ch_4'], 'At 24 hours the key is forgotten: order-17 is a new payment');
T.eq(fresh.headers['idempotent-replayed'], undefined, 'and not a replay');
T.eq(pay('acct_1', 'order-17', body).body.id, 'ch_4', 'From then on order-17 replays the NEW charge');
` }
        ],
        files: [{ name: "script.js", content: MISUSE_STARTER }],
        hints: [
          "Use `const slot = client + \" \" + key;` for both `saved.get(slot)` and `saved.set(slot, …)` — scoping is just a longer key.",
          "Forget old records first: `let record = saved.get(slot); if (record && now() - record.at >= KEY_TTL) { saved.delete(slot); record = undefined; }` — then `if (record.fingerprint !== fingerprint)` return the 422 before replaying.",
          "Return the validation 422 straight away, and move `saved.set(…)` inside the branch that charged, so only a 201 is ever saved."
        ],
        solution: { "script.js": MISUSE_SOLUTION }
      },

      {
        id: "api-u4-4",
        title: "Two retries at once",
        kind: "js", chip: "API", xp: 15, mins: 15,
        brief: "Real clients retry on a timer, and a timer does not wait for the first attempt to finish. So the second request often arrives **while the first is still charging the card**.\n\nThe starter checks `saved`, *then* awaits the processor (50 ms), *then* saves. Two requests that arrive together both pass the check — nothing is saved yet — and both charge. Saving afterwards cannot fix it; the window is between the check and the save.\n\nThe fix is to mark the key **in flight** *before* awaiting. A second arrival that finds its key in flight gets **`409 Conflict`** `request-in-progress`, as the IETF idempotency-key draft specifies; it retries a moment later and gets the replay. Two more rules:\n\n- **always release** the key (`finally`), or a failure locks that key forever\n- when the processor is down, nothing was charged, so answer **503** with `retry-after: \"1\"` and **don't save** it. The retry must be able to run\n\n`handleRequest` is `async` now. The checks start requests without awaiting them, exactly as two impatient clients would. (A real service marks the key with a unique insert in its database, so this holds across many servers. A `Set` only works inside one process.)",
        steps: [
          { text: "The basics still hold with an async handler: one charge, then a replay.",
            test: R`
function req(key) { return { method: 'POST', path: '/payments', query: {}, headers: { 'idempotency-key': key }, body: { card: 'tok_visa', amount: 1200 } }; }
var first = await handleRequest(req('k-1'));
T.eq([first.status, first.body.id], [201, 'ch_1'], 'A new key charges once');
var retry = await handleRequest(req('k-1'));
T.eq([retry.body.id, retry.headers['idempotent-replayed'], charges.length], ['ch_1', 'true', 1], 'A later retry replays it');
` },
          { text: "Two requests with one key **at the same time**: exactly one charge. The second gets **409** `request-in-progress` (title `Request in progress`, detail `A request with this Idempotency-Key is still being processed`); a retry after both finish gets the replay.",
            test: R`
function req(key) { return { method: 'POST', path: '/payments', query: {}, headers: { 'idempotency-key': key }, body: { card: 'tok_visa', amount: 2500 } }; }
var before = charges.length;
var a = handleRequest(req('race-1'));
var b = handleRequest(req('race-1'));
var ra = await a, rb = await b;
T.eq(charges.length - before, 1, 'Two simultaneous requests with one key must make ONE charge — mark the key in flight before the await');
T.eq(ra.status, 201, 'The first one charges');
T.eq(rb.status, 409, 'The one that arrived while it was charging → 409');
T.eq([rb.body.type, rb.body.title, rb.body.detail], ['https://api.example.com/problems/request-in-progress', 'Request in progress', 'A request with this Idempotency-Key is still being processed'], 'The in-progress problem');
var later = await handleRequest(req('race-1'));
T.eq([later.body.id, later.headers['idempotent-replayed']], [ra.body.id, 'true'], 'Once the first finishes, a retry gets the replay');
` },
          { text: "Different keys never block each other: three payments at once with three keys make three charges.",
            test: R`
function req(key) { return { method: 'POST', path: '/payments', query: {}, headers: { 'idempotency-key': key }, body: { card: 'tok_visa', amount: 100 } }; }
var before = charges.length;
var all = await Promise.all([handleRequest(req('p-1')), handleRequest(req('p-2')), handleRequest(req('p-3'))]);
T.eq(all.map(function (r) { return r.status; }), [201, 201, 201], 'Three keys, three successes — no false 409s');
T.eq(charges.length - before, 3, 'and three charges');
` },
          { text: "When the processor is down, answer **503** `processor-unavailable` with `retry-after: \"1\"`, save nothing, and release the key — so the same key works once the processor is back.",
            test: R`
function req(key) { return { method: 'POST', path: '/payments', query: {}, headers: { 'idempotency-key': key }, body: { card: 'tok_visa', amount: 900 } }; }
var before = charges.length;
processorUp = false;
var down;
try { down = await handleRequest(req('k-down')); } catch (e) { throw new Error('handleRequest threw "' + e.message + '" — catch the processor failure and answer a 503 problem'); }
T.eq([down.status, down.body.type, down.headers['retry-after']], [503, 'https://api.example.com/problems/processor-unavailable', '1'], 'Processor down → 503 with retry-after');
T.eq(down.body.detail, 'Nothing was charged; retry with the same Idempotency-Key', 'The detail tells the client what to do');
processorUp = true;
var back = await handleRequest(req('k-down'));
T.eq(back.status, 201, 'The same key works once the processor is back — not a 409 (key released) and not a replayed 503 (not saved)');
T.eq(charges.length - before, 1, 'Exactly one charge in total');
` }
        ],
        files: [{ name: "script.js", content: RACE_STARTER }],
        hints: [
          "Add `const inFlight = new Set();` next to `saved`, and after the saved check: `if (inFlight.has(key)) return problem(409, …);`.",
          "Mark it BEFORE the await: `inFlight.add(key);` — then wrap the charge in `try { … } catch (err) { … } finally { inFlight.delete(key); }`.",
          "In the `catch`, build the 503 with `problem(…)`, set `res.headers[\"retry-after\"] = \"1\";` and return it without touching `saved`."
        ],
        solution: { "script.js": RACE_SOLUTION }
      },

      {
        id: "api-quiz-4",
        title: "Unit 4 quiz: Safe retries",
        kind: "quiz", xp: 10,
        brief: "Timeouts, keys and the races between retries. 80% to pass.",
        questions: [
          { q: "Which of these requests is NOT safe for a client to simply resend after a timeout?",
            choices: ["`GET /payments/ch_1`", "`PUT /profiles/u_1` with a full profile", "`DELETE /notes/3`", "`POST /payments` with no idempotency key"],
            answer: 3, explain: "GET, PUT and DELETE are idempotent: repeating them ends in the same state. A POST creates something each time, so a resent payment without a key can charge twice." },
          { q: "Who should generate the idempotency key, and when?",
            choices: ["The server, which returns a fresh key in its first response for the client to reuse", "The client, once per operation, before the first attempt", "The load balancer, per TCP connection", "The client, freshly for every HTTP request it sends"],
            answer: 1, explain: "The key must exist before the first attempt, because that is the attempt whose response might be lost — so the server can't hand it out. It names one operation, and every retry of that operation reuses it." },
          { q: "Two different accounts both send `idempotency-key: 1` for their own payments. What must happen?",
            choices: ["Two separate payments — keys are scoped to the client", "The second account gets the first account's saved receipt, since the key matches", "The second gets a 422 because the key is taken", "The second gets a 409 Conflict"],
            answer: 0, explain: "A key only means 'the same operation' within one client's requests. Unscoped, account 2 would be told its payment succeeded while being handed account 1's charge. Store keys under client + key." },
          { q: "A payment fails validation with a 422 (amount -5). The client fixes the amount and retries with the same key. What should happen?",
            choices: ["Replay the stored 422, because the key was already used once and keys never change their answer", "A 422 idempotency-key-reused, because the body changed", "A 409 Conflict", "Charge the corrected amount, because the failed request was never saved"],
            answer: 3, explain: "Validation failed before anything ran, so nothing was saved and the key is still unused. Saving the 422 would make the key unusable and force the client to invent a new one for what is the same payment." },
          { q: "The handler checks `saved`, awaits the processor, then saves the response. Two retries with one key arrive 5 ms apart. What goes wrong?",
            choices: ["Nothing, because the second request finds the response the first one saved", "Both pass the check before either saves, so the card is charged twice", "The second request deadlocks", "The processor rejects the duplicate on its own"],
            answer: 1, explain: "The save happens only after the 50 ms await, so the second request checks an empty map and charges too. Marking the key as in flight before awaiting closes the window, and the second request gets a 409." },
          { q: "Why must the in-flight marker be removed in a `finally` block?",
            choices: ["So a failed attempt doesn't leave the key locked, answering 409 forever", "Because a finally block runs before the response is sent, and catch blocks run after it", "To free the memory used by the response", "So the replay header is added correctly"],
            answer: 0, explain: "If the processor throws and the marker stays, every later retry with that key gets 'request in progress' for a request that ended long ago. finally runs on success, failure and early return alike." }
        ]
      }
    ]
  });
})();
