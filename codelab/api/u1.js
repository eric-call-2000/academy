/* Advanced API Design — Unit 1: Resources, status codes and errors */
(function () {
  /* Code is written as String.raw templates, so it reaches the page exactly
     as it appears here. Nothing inside a template may use a backtick or ${. */
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  /* ---------- api-u1-2: Created, No Content and 405 ---------- */
  var NOTES_STARTER = R`
// Notes API. Requests and responses carry headers now, with lowercase names:
//   request  = { method, path, query, headers, body }
//   response = { status, headers, body }

let notes = [
  { id: 1, text: "Buy milk" },
  { id: 2, text: "Call the plumber" }
];
let nextId = 3;

function handleRequest(req) {
  const parts = req.path.split("/").filter(Boolean);   // "/notes/2" → ["notes", "2"]
  if (parts[0] !== "notes" || parts.length > 2) {
    return { status: 404, headers: {}, body: { error: "not found" } };
  }

  if (parts.length === 1) {                            // the collection: /notes
    if (req.method === "GET") {
      return { status: 200, headers: {}, body: notes };
    }
    if (req.method === "POST") {
      const note = { id: nextId++, text: req.body.text };
      notes.push(note);
      // 1) a create answers 201, with a location header naming the new note
      return { status: 200, headers: {}, body: note };
    }
    // 3) any other method on /notes → 405 with allow: "GET, POST"
    return { status: 404, headers: {}, body: { error: "not found" } };
  }

  const id = Number(parts[1]);                         // an item: /notes/<id>
  const note = notes.find(n => n.id === id);
  if (!note) return { status: 404, headers: {}, body: { error: "not found" } };
  if (req.method === "GET") {
    return { status: 200, headers: {}, body: note };
  }
  // 2) DELETE → remove the note, answer 204 with body null
  // 3) any other method on a note → 405 with allow: "GET, DELETE"
  return { status: 404, headers: {}, body: { error: "not found" } };
}

console.log(handleRequest({ method: "GET", path: "/notes", query: {}, headers: {}, body: null }));
`;

  var NOTES_SOLUTION = R`
// Notes API. Requests and responses carry headers now, with lowercase names:
//   request  = { method, path, query, headers, body }
//   response = { status, headers, body }

let notes = [
  { id: 1, text: "Buy milk" },
  { id: 2, text: "Call the plumber" }
];
let nextId = 3;

function handleRequest(req) {
  const parts = req.path.split("/").filter(Boolean);   // "/notes/2" → ["notes", "2"]
  if (parts[0] !== "notes" || parts.length > 2) {
    return { status: 404, headers: {}, body: { error: "not found" } };
  }

  if (parts.length === 1) {                            // the collection: /notes
    if (req.method === "GET") {
      return { status: 200, headers: {}, body: notes };
    }
    if (req.method === "POST") {
      const note = { id: nextId++, text: req.body.text };
      notes.push(note);
      return { status: 201, headers: { location: "/notes/" + note.id }, body: note };
    }
    return { status: 405, headers: { allow: "GET, POST" }, body: { error: "method not allowed" } };
  }

  const id = Number(parts[1]);                         // an item: /notes/<id>
  const note = notes.find(n => n.id === id);
  if (!note) return { status: 404, headers: {}, body: { error: "not found" } };
  if (req.method === "GET") {
    return { status: 200, headers: {}, body: note };
  }
  if (req.method === "DELETE") {
    notes = notes.filter(n => n.id !== id);
    return { status: 204, headers: {}, body: null };
  }
  return { status: 405, headers: { allow: "GET, DELETE" }, body: { error: "method not allowed" } };
}

console.log(handleRequest({ method: "GET", path: "/notes", query: {}, headers: {}, body: null }));
`;

  /* ---------- api-u1-3: Problem Details ---------- */
  var PROBLEM_STARTER = R`
// RFC 9457 Problem Details: every error in ONE documented shape.
//   headers: { "content-type": "application/problem+json" }
//   body:    { type, title, status, detail, ...extension members }
const PROBLEMS = "https://api.example.com/problems/";

function problem(statusCode, slug, title, detail, extra) {
  // 1) return { status: statusCode, headers: { "content-type": "application/problem+json" }, body }
  //    where body = { type: PROBLEMS + slug, title, status: statusCode, detail }
  //    plus every member of extra, when extra is given (Object.assign does it in one line)
}

let users = [];
let nextId = 1;

function handleRequest(req) {
  if (req.path !== "/signups") {
    // refit → problem(404, "not-found", "Not Found", "No route for " + req.path)
    return { status: 404, headers: {}, body: { error: "not found" } };
  }
  // 4) any method but POST → problem(405, "method-not-allowed", "Method Not Allowed",
  //    req.method + " is not supported on /signups"), plus an allow: "POST" header

  // 2) req.body is the raw TEXT the client sent. If JSON.parse throws →
  //    problem(400, "malformed-json", "Malformed JSON", "The request body is not valid JSON.")
  const data = JSON.parse(req.body);

  // 3) Collect EVERY failure as { detail, pointer }, then answer
  //    problem(422, "validation", "Invalid request", "See errors for the fields to fix.", { errors })
  //    - not a plain object (null, an array, a number) → only [{ detail: "must be a JSON object", pointer: "#" }]
  //    - email: a string containing "@"  else { detail: "must be an email address", pointer: "#/email" }
  //    - age:   an integer, at least 13  else { detail: "must be an integer of at least 13", pointer: "#/age" }

  const user = { id: nextId++, email: data.email, age: data.age };
  users.push(user);
  return { status: 201, headers: { "content-type": "application/json", location: "/users/" + user.id }, body: user };
}
`;

  var PROBLEM_SOLUTION = R`
// RFC 9457 Problem Details: every error in ONE documented shape.
//   headers: { "content-type": "application/problem+json" }
//   body:    { type, title, status, detail, ...extension members }
const PROBLEMS = "https://api.example.com/problems/";

function problem(statusCode, slug, title, detail, extra) {
  const body = { type: PROBLEMS + slug, title: title, status: statusCode, detail: detail };
  Object.assign(body, extra || {});
  return { status: statusCode, headers: { "content-type": "application/problem+json" }, body: body };
}

let users = [];
let nextId = 1;

function handleRequest(req) {
  if (req.path !== "/signups") {
    return problem(404, "not-found", "Not Found", "No route for " + req.path);
  }
  if (req.method !== "POST") {
    const res = problem(405, "method-not-allowed", "Method Not Allowed", req.method + " is not supported on /signups");
    res.headers.allow = "POST";
    return res;
  }

  let data;
  try {
    data = JSON.parse(req.body);
  } catch (err) {
    return problem(400, "malformed-json", "Malformed JSON", "The request body is not valid JSON.");
  }
  if (data === null || typeof data !== "object" || Array.isArray(data)) {
    return problem(422, "validation", "Invalid request", "See errors for the fields to fix.",
      { errors: [{ detail: "must be a JSON object", pointer: "#" }] });
  }

  const errors = [];
  if (typeof data.email !== "string" || !data.email.includes("@")) {
    errors.push({ detail: "must be an email address", pointer: "#/email" });
  }
  if (!Number.isInteger(data.age) || data.age < 13) {
    errors.push({ detail: "must be an integer of at least 13", pointer: "#/age" });
  }
  if (errors.length) {
    return problem(422, "validation", "Invalid request", "See errors for the fields to fix.", { errors: errors });
  }

  const user = { id: nextId++, email: data.email, age: data.age };
  users.push(user);
  return { status: 201, headers: { "content-type": "application/json", location: "/users/" + user.id }, body: user };
}
`;

  /* ---------- api-u1-4: Actions, state and 409 ---------- */
  var ORDERS_HEAD = R`
// Orders change state ONLY through actions — custom methods on the item:
//   POST /orders/<id>/pay   POST /orders/<id>/ship   POST /orders/<id>/cancel
const PROBLEMS = "https://api.example.com/problems/";

function problem(statusCode, slug, title, detail, extra) {
  const body = { type: PROBLEMS + slug, title: title, status: statusCode, detail: detail };
  Object.assign(body, extra || {});
  return { status: statusCode, headers: { "content-type": "application/problem+json" }, body: body };
}

let orders = [
  { id: 1, item: "Desk lamp", state: "pending" },
  { id: 2, item: "Bookshelf", state: "paid" },
  { id: 3, item: "Armchair", state: "shipped" },
  { id: 4, item: "Rug", state: "pending" }
];

// The state machine is DATA: each action names the states it may start from.
const TRANSITIONS = {
  pay:    { from: ["pending"], to: "paid" },
  ship:   { from: ["paid"], to: "shipped" },
  cancel: { from: ["pending", "paid"], to: "cancelled" }
};

// Which actions could run from this state, in TRANSITIONS order.
function allowedActions(state) {
  return Object.keys(TRANSITIONS).filter(a => TRANSITIONS[a].from.includes(state));
}
`;

  var ORDERS_STARTER = ORDERS_HEAD + R`
function act(order, action) {
  // 1) apply TRANSITIONS[action] to the order and answer 200 with the order.
  // 2) the order is in a state the action can't start from → 409:
  //      problem(409, "invalid-transition", "Invalid state transition",
  //              "Cannot " + action + " order " + order.id + ": it is " + order.state,
  //              { state: order.state, allowed: allowedActions(order.state) })
  // 3) the order is ALREADY in the action's target state → 200, unchanged (not an error)
}

function handleRequest(req) {
  const parts = req.path.split("/").filter(Boolean);
  const order = parts[0] === "orders" ? orders.find(o => o.id === Number(parts[1])) : undefined;
  if (!order) return problem(404, "not-found", "Not Found", "No resource at " + req.path);

  if (parts.length === 2 && req.method === "GET") {
    return { status: 200, headers: {}, body: order };
  }
  if (parts.length === 2 && req.method === "PATCH") {
    // 4) a body that tries to set state → 422 (it changes only through actions):
    //      problem(422, "validation", "Invalid request", "See errors for the fields to fix.",
    //        { errors: [{ detail: "state changes only through actions: pay, ship, cancel", pointer: "#/state" }] })
    //    otherwise only item may change.
    Object.assign(order, req.body);
    return { status: 200, headers: {}, body: order };
  }
  // 1) POST /orders/<id>/<action> → act(order, action)
  //    an action that is not one of TRANSITIONS' OWN keys →
  //      problem(404, "not-found", "Not Found", "No action " + action + " on orders")
  return problem(404, "not-found", "Not Found", "No resource at " + req.path);
}
`;

  var ORDERS_SOLUTION = ORDERS_HEAD + R`
function act(order, action) {
  const t = TRANSITIONS[action];
  if (order.state === t.to) {
    return { status: 200, headers: {}, body: order };
  }
  if (!t.from.includes(order.state)) {
    return problem(409, "invalid-transition", "Invalid state transition",
      "Cannot " + action + " order " + order.id + ": it is " + order.state,
      { state: order.state, allowed: allowedActions(order.state) });
  }
  order.state = t.to;
  return { status: 200, headers: {}, body: order };
}

function handleRequest(req) {
  const parts = req.path.split("/").filter(Boolean);
  const order = parts[0] === "orders" ? orders.find(o => o.id === Number(parts[1])) : undefined;
  if (!order) return problem(404, "not-found", "Not Found", "No resource at " + req.path);

  if (parts.length === 2 && req.method === "GET") {
    return { status: 200, headers: {}, body: order };
  }
  if (parts.length === 2 && req.method === "PATCH") {
    if ("state" in req.body) {
      return problem(422, "validation", "Invalid request", "See errors for the fields to fix.",
        { errors: [{ detail: "state changes only through actions: pay, ship, cancel", pointer: "#/state" }] });
    }
    if (typeof req.body.item === "string") order.item = req.body.item;
    return { status: 200, headers: {}, body: order };
  }
  if (parts.length === 3 && req.method === "POST") {
    const action = parts[2];
    if (!Object.prototype.hasOwnProperty.call(TRANSITIONS, action)) {
      return problem(404, "not-found", "Not Found", "No action " + action + " on orders");
    }
    return act(order, action);
  }
  return problem(404, "not-found", "Not Found", "No resource at " + req.path);
}
`;

  window.CODELAB.addUnit("api", {
    id: "api-u1",
    title: "Resources, status codes and errors",
    icon: "🧭",
    blurb: "Name the things, not the verbs. Answer writes with the status codes clients act on, and every failure with one documented error format.",
    cheat: [
      { h: "Resources, not verbs", lang: "text", code: "GET    /orders            list\nPOST   /orders            create  → 201 + location\nGET    /orders/7          read\nPATCH  /orders/7          update\nDELETE /orders/7          remove  → 204, no body\nPOST   /orders/7:cancel   a custom method (Google AIP-136)", note: "Nest only for containment (/repos/acme/web/issues/12). A child with its own identity is a FILTER on its own collection: /orders?customer=42." },
      { h: "The write-path status codes", lang: "text", code: "201 Created         + location: /notes/3\n204 No Content      success, deliberately no body\n404 Not Found       no resource at this path\n405 Method Not Allowed  + allow: GET, POST  (RFC 9110: MUST)\n409 Conflict        clashes with the resource's current state\n422 Unprocessable   valid JSON, invalid values", note: "404 says wrong address; 405 says right address, wrong verb — and allow tells the client the fix." },
      { h: "Problem Details (RFC 9457)", lang: "json", code: "content-type: application/problem+json\n{\n  \"type\": \"https://api.example.com/problems/validation\",\n  \"title\": \"Invalid request\",\n  \"status\": 422,\n  \"detail\": \"See errors for the fields to fix.\",\n  \"errors\": [\n    { \"detail\": \"must be an email address\", \"pointer\": \"#/email\" }\n  ]\n}", note: "type is the stable identifier clients branch on; title is the same for every occurrence; detail is about THIS one. Extra members (errors, allowed) are allowed and expected." },
      { h: "400 vs 422", lang: "js", code: "let data;\ntry { data = JSON.parse(req.body); }\ncatch (err) { return problem(400, \"malformed-json\", …); }   // can't READ it\n// …parsed fine, but the values break the rules:\nreturn problem(422, \"validation\", …, { errors });            // can't ACCEPT it", note: "Collect every failing field in one 422 so the client fixes the whole form in one round trip." },
      { h: "State changes through actions", lang: "js", code: "const TRANSITIONS = {\n  pay:    { from: [\"pending\"], to: \"paid\" },\n  cancel: { from: [\"pending\", \"paid\"], to: \"cancelled\" }\n};\n// wrong state       → 409 + { state, allowed }\n// already there     → 200, unchanged\n// PATCH { state }   → 422: actions only", note: "Making a repeated cancel a 200 means a client that retries after a timeout doesn't see a failure for something that worked." },
      { h: "How Express does it (real Node.js)", lang: "js", code: "app.post(\"/notes\", (req, res) => {\n  const note = create(req.body);\n  res.status(201).location(\"/notes/\" + note.id).json(note);\n});\napp.all(\"/notes\", (req, res) =>\n  res.set(\"Allow\", \"GET, POST\").sendStatus(405));", note: "Frameworks give you 404 for free but not 405 — answering it properly is a choice you make per route." }
    ],
    lessons: [

      {
        id: "api-u1-1",
        title: "Resources, not actions",
        kind: "concept", xp: 15, mins: 13,
        screens: [
          { read: "An API is a set of promises to people you will never meet, so its shape has to be predictable without a phone call. The durable way to get there is **resource-oriented design**: name the *things*, then let a small set of standard methods act on them. Google's API guidelines (AIP-121) say most of an API should be exactly that.\n\n- a **collection** is a plural noun: `/orders`\n- an **item** in it: `/orders/7`\n- **methods** are the verbs: `GET` reads, `POST` to the collection creates, `PATCH` updates, `DELETE` removes\n\nThe opposite habit is RPC over URLs — `/getOrder?id=7`, `/createOrder`, `/deleteOrder`. It works, but every new verb is a new endpoint to learn, and none of HTTP's machinery (caching, safe retries) can tell what any of them do.",
            ask: { type: "pick",
              q: "An RPC-style API has `POST /deleteCustomer` with the body `{\"id\": 42}`. What is the resource-oriented equivalent?",
              choices: ["`DELETE /customers/42`", "`POST /customers/42/delete` with an empty body", "`GET /customers/delete?id=42`", "`DELETE /customers` with the body `{\"id\": 42}`"],
              answer: 0,
              why: [
                "The item is named by its path and the verb is the method. Nothing else is needed.",
                "That keeps the verb in the URL. It is a custom-method shape, and deleting is not custom — DELETE already means it.",
                "A GET that deletes is the worst of both: GET promises to change nothing, so prefetchers and crawlers will happily call it.",
                "DELETE acts on the resource the path names. Here that is the whole collection, and many proxies drop bodies on DELETE anyway."
              ] } },

          { read: "Nest a path only for **containment** — when the child cannot exist without its parent and its id only means something inside it: `/repos/acme/web/issues/12` is issue 12 *of that repository*.\n\nWhen the child has its own identity and you only want a subset, **filter its top-level collection**: `/orders?customer=42`, not `/customers/42/orders`. An order is looked up on its own, and tomorrow it will be filtered by other things too — `?status=open`, `?since=…`. Deep nesting (`/a/1/b/2/c/3`) is a smell: every level is an id the client must already know before it can make one call.",
            ask: { type: "pick",
              q: "Invoices have their own ids, the billing screen opens them one at a time, and they are also listed by status. The shop needs 'every invoice for customer 42'. Which design fits best?",
              choices: ["`GET /customers/42/invoices` and nothing else", "`GET /invoices?customer=42`", "`GET /invoicesForCustomer/42`", "`POST /invoices/search` with `{\"customer\": 42}` in the body"],
              answer: 1,
              why: [
                "Nesting says an invoice only exists inside a customer, yet the billing screen opens invoices on their own and lists them by status — the nested path fights both.",
                "A filter on the invoices collection: it composes with `?status=` and leaves `/invoices/<id>` as the one address of each invoice.",
                "A verb-shaped URL per query is the RPC habit; the next question ('by status') needs another endpoint.",
                "A search POST hides a plain read behind a non-safe method — it cannot be cached, bookmarked or retried freely."
              ] } },

          { read: "Some actions really are not create-read-update-delete: *cancel* an order, *send* an invoice, *archive* a project. Two honest designs:\n\n- a **custom method** on the item, always `POST`: `POST /orders/7:cancel` (AIP-136) or `POST /orders/7/cancel`\n- model the outcome as a **resource**: `POST /orders/7/cancellation` creates one you can later `GET`\n\nOne design is never honest: `GET /orders/7/cancel`. `GET` is **safe** — browsers prefetch it, crawlers follow it, caches replay it. A GET that changes state will eventually be triggered by something that was not a person.",
            ask: { type: "pick", transfer: true,
              q: "Which endpoint will one day cancel an order nobody meant to cancel?",
              choices: ["`POST /orders/7:cancel`", "`POST /orders/7/cancellation`", "`GET /orders/7/cancel`"],
              answer: 2,
              why: [
                "A POST is not safe, so nothing calls it speculatively — only a client that means it.",
                "Creating a cancellation resource is a POST too, and gives you something to GET afterwards.",
                "GET is promised to be safe, so link prefetchers, crawlers and caches call it freely. One of them will eventually cancel a real order."
              ] } },

          { read: "Status codes are part of the contract. The write path needs a few `srv` never did:\n\n- `201 Created` plus a `location` header naming the new resource: `location: /notes/3`\n- `204 No Content` — success with deliberately no body, typical for `DELETE`\n- `404 Not Found` — nothing lives at this path\n- `405 Method Not Allowed` — the path exists, the method does not, and RFC 9110 says the response **must** carry an `allow` header: `allow: GET, POST`\n\nThe 404/405 line matters to clients: 404 says *wrong address*; 405 says *right address, wrong verb*, and `allow` tells them the fix.",
            ask: { type: "predict", transfer: true,
              q: "`DELETE /notes` arrives at a collection that supports only GET and POST. Type the status code the server should answer.",
              answer: "405",
              why: "The path exists, so it is not a 404 — the method is what is wrong. That is 405 Method Not Allowed, and the response must say `allow: GET, POST`." } },

          { ask: { type: "pick", transfer: true,
              q: "A client sends `POST /notes` and gets `201 Created`. Where should it look for the new note's address?",
              choices: ["The `location` response header", "The `allow` response header", "Its own request's `referer` header", "It should take `/notes/` plus the highest id it has seen so far"],
              answer: 0,
              why: [
                "201 Created comes with a `location` header pointing at what was just made, so the client never has to guess.",
                "`allow` lists methods, and only on a 405 (or an OPTIONS answer). It says nothing about a new resource.",
                "`referer` is what the client sent, the page it came from. The server's answer is in the response.",
                "Guessing ids breaks the moment another client creates a note at the same time — and ids need not be sequential at all."
              ] } }
        ]
      },

      {
        id: "api-u1-2",
        title: "Created, No Content, and 405",
        kind: "js", chip: "API", xp: 15, mins: 12,
        brief: "In `srv` a write answered `200` and an unknown route answered `404`. Clients can do better than that with three more codes, and this lesson adds them to a small notes API.\n\n- **`201 Created`** with a `location` header that names the new note. The client learns the new address from the server instead of guessing.\n- **`204 No Content`** for a delete: it worked, and there is deliberately nothing to send back (`body: null`).\n- **`405 Method Not Allowed`** when the *path* exists but the *method* does not. RFC 9110 says a 405 **must** carry an `allow` header listing what does work.\n\nHeaders are a plain object with **lowercase names** throughout this course (HTTP/2 sends them that way): `headers: { location: \"/notes/3\" }`. The demo `console.log` at the bottom is a GET, so it changes nothing before the checks run.",
        steps: [
          { text: "`POST /notes` creates a note. Answer **`201`** with `headers: { location: \"/notes/<id>\" }` and the new note as the body.",
            test: R`
var res = handleRequest({ method: 'POST', path: '/notes', query: {}, headers: {}, body: { text: 'Water the plants' } });
T.eq(res.status, 201, 'A create answers 201 Created, not 200');
T.eq(res.headers && res.headers.location, '/notes/3', 'The location header names the new note: /notes/3');
T.eq(res.body, { id: 3, text: 'Water the plants' }, 'The body is the created note');
var again = handleRequest({ method: 'POST', path: '/notes', query: {}, headers: {}, body: { text: 'Pay rent' } });
T.eq(again.headers && again.headers.location, '/notes/4', 'The next create is /notes/4 — build location from the new id, never hard-code it');
` },
          { text: "`DELETE /notes/<id>` removes the note and answers **`204`** with `body: null`. Afterwards the note is a 404 — and so is deleting it a second time.",
            test: R`
var res = handleRequest({ method: 'DELETE', path: '/notes/1', query: {}, headers: {}, body: null });
T.eq(res.status, 204, 'DELETE answers 204 No Content');
T.eq(res.body, null, '204 means no body: body must be null');
T.eq(handleRequest({ method: 'GET', path: '/notes/1', query: {}, headers: {}, body: null }).status, 404, 'After the delete, GET /notes/1 is a 404');
T.eq(handleRequest({ method: 'DELETE', path: '/notes/1', query: {}, headers: {}, body: null }).status, 404, 'Deleting it a second time finds nothing to delete: 404');
var ids = handleRequest({ method: 'GET', path: '/notes', query: {}, headers: {}, body: null }).body.map(function (n) { return n.id; });
T.eq(ids, [2, 3, 4], 'Only note 1 is gone — notes 2, 3 and 4 remain');
` },
          { text: "A known path with the wrong method is **`405`**, and it must say what *is* allowed: `allow: \"GET, POST\"` on `/notes`, `allow: \"GET, DELETE\"` on a note.",
            test: R`
var a = handleRequest({ method: 'PUT', path: '/notes', query: {}, headers: {}, body: { text: 'x' } });
T.eq(a.status, 405, 'PUT /notes: the collection exists but the method does not → 405');
T.eq(a.headers && a.headers.allow, 'GET, POST', 'A 405 on /notes carries allow: GET, POST');
var b = handleRequest({ method: 'PATCH', path: '/notes/2', query: {}, headers: {}, body: { text: 'x' } });
T.eq(b.status, 405, 'PATCH /notes/2: this API has no update → 405');
T.eq(b.headers && b.headers.allow, 'GET, DELETE', 'On a note, allow is GET, DELETE');
T.eq(handleRequest({ method: 'GET', path: '/notes/2', query: {}, headers: {}, body: null }).body, { id: 2, text: 'Call the plumber' }, 'A refused PATCH must change nothing');
` },
          { text: "A path that does not exist is still **`404`** whatever the method — 405 is only for paths that exist. A non-numeric id or an extra path segment names no note either.",
            test: R`
T.eq(handleRequest({ method: 'DELETE', path: '/nope', query: {}, headers: {}, body: null }).status, 404, 'Unknown path → 404, not 405');
T.eq(handleRequest({ method: 'GET', path: '/notes/abc', query: {}, headers: {}, body: null }).status, 404, '/notes/abc names no note → 404');
T.eq(handleRequest({ method: 'GET', path: '/notes/2/extra', query: {}, headers: {}, body: null }).status, 404, 'A path deeper than /notes/<id> → 404');
T.eq(handleRequest({ method: 'GET', path: '/notes', query: {}, headers: {}, body: null }).status, 200, 'GET /notes still lists');
` }
        ],
        files: [{ name: "script.js", content: NOTES_STARTER }],
        hints: [
          "The create already pushes the note — only its answer changes: `return { status: 201, headers: { location: \"/notes/\" + note.id }, body: note };`",
          "Delete by filtering: `notes = notes.filter(n => n.id !== id);` then `return { status: 204, headers: {}, body: null };` — `notes` is a `let`, so reassigning it is fine.",
          "Each 'any other method' line becomes a 405, e.g. `return { status: 405, headers: { allow: \"GET, POST\" }, body: { error: \"method not allowed\" } };` — the unknown-path 404 at the top stays as it is."
        ],
        solution: { "script.js": NOTES_SOLUTION }
      },

      {
        id: "api-u1-3",
        title: "Problem Details: one error format",
        kind: "js", chip: "API", xp: 15, mins: 15,
        brief: "`srv` invented its own error envelope. There is a standard one, **RFC 9457 Problem Details for HTTP APIs**, and libraries in every language read it:\n\n- served with `content-type: application/problem+json`\n- `type` — a URI naming the *kind* of problem. It is the same for every occurrence, so clients branch on it\n- `title` — a short human summary of that kind\n- `status` — the HTTP status, repeated in the body\n- `detail` — about *this* occurrence\n- any **extension members** you document, like an `errors` array\n\nThis lesson also draws a line `srv` blurred. **400** means the server could not even *read* the request — the JSON does not parse. **422 Unprocessable Content** means it parsed fine but the *values* break the rules. A 422 lists every bad field as `{ detail, pointer }`, where `pointer` is a JSON Pointer into the body (`#/email`), exactly as in the RFC's own example.\n\n`req.body` is the **raw text** the client sent this time, as a server really receives it — parsing it is your job.",
        steps: [
          { text: "Write `problem(statusCode, slug, title, detail, extra)` returning `{ status, headers: { \"content-type\": \"application/problem+json\" }, body }`. The body holds `type` (`PROBLEMS + slug`), `title`, `status`, `detail`, plus every member of `extra` when there is one.",
            test: R`
var p = problem(404, 'not-found', 'Not Found', 'No route for /x');
T.expect(p && typeof p === 'object', 'problem() must return a response object');
T.eq(p.status, 404, 'The response status is the problem status');
T.eq(p.headers && p.headers['content-type'], 'application/problem+json', 'Problems are served as application/problem+json');
T.eq([p.body.type, p.body.title, p.body.status, p.body.detail], ['https://api.example.com/problems/not-found', 'Not Found', 404, 'No route for /x'], 'type is PROBLEMS + slug, then title, status (a number) and detail');
var q = problem(422, 'validation', 'Invalid request', 'Fix these', { errors: [{ detail: 'd', pointer: '#/a' }] });
T.eq(q.body.errors, [{ detail: 'd', pointer: '#/a' }], 'Members of extra are copied onto the body');
T.eq(problem(400, 'x', 'X', 'y').body.errors, undefined, 'No extra → no errors member at all');
` },
          { text: "A body that is not valid JSON answers **400** `problem(400, \"malformed-json\", \"Malformed JSON\", \"The request body is not valid JSON.\")` — never a crash, never a user.",
            test: R`
var res = handleRequest({ method: 'POST', path: '/signups', query: {}, headers: { 'content-type': 'application/json' }, body: '{"email": "ada@calc.io", "age": 36' });
T.expect(res && res.body, 'Truncated JSON must come back as a response, not a thrown SyntaxError — wrap JSON.parse in try/catch');
T.eq(res.status, 400, 'Unparseable JSON is a 400: the server cannot even read the request');
T.eq(res.headers['content-type'], 'application/problem+json', 'Served as a problem');
T.eq([res.body.type, res.body.title, res.body.detail], ['https://api.example.com/problems/malformed-json', 'Malformed JSON', 'The request body is not valid JSON.'], 'type, title and detail of the malformed-json problem');
T.eq(users.length, 0, 'Nothing was created');
` },
          { text: "Parsed JSON with bad values answers **422** `problem(422, \"validation\", \"Invalid request\", \"See errors for the fields to fix.\", { errors })`, listing EVERY failing field in order — email first, then age.",
            test: R`
function post(obj) { return handleRequest({ method: 'POST', path: '/signups', query: {}, headers: {}, body: JSON.stringify(obj) }); }
function pairs(res) { return (res.body.errors || []).map(function (e) { return [e.pointer, e.detail]; }); }
var res = post({ email: 'nope', age: 9 });
T.eq(res.status, 422, 'Valid JSON with invalid values is 422 Unprocessable Content');
T.eq([res.body.type, res.body.title, res.body.detail], ['https://api.example.com/problems/validation', 'Invalid request', 'See errors for the fields to fix.'], 'type, title and detail of the validation problem');
T.eq(pairs(res), [['#/email', 'must be an email address'], ['#/age', 'must be an integer of at least 13']], 'BOTH failures, email then age, as { detail, pointer }');
T.eq(pairs(post({ email: 'ada@calc.io', age: '36' })), [['#/age', 'must be an integer of at least 13']], 'age "36" is a string, not an integer');
T.eq(pairs(post({ email: 'ada@calc.io', age: 13.5 })), [['#/age', 'must be an integer of at least 13']], '13.5 is not an integer');
T.eq(pairs(post({ age: 40 })), [['#/email', 'must be an email address']], 'A missing email fails too');
T.eq(users.length, 0, 'Still nothing created');
` },
          { text: "Finish the edges: a body that parses to something other than an object (`null`, `[]`) is a 422 with one error at pointer `#`; any method but POST is a **405** problem with `allow: \"POST\"`; unknown paths are a 404 problem. A valid signup answers 201 as before.",
            test: R`
function post(text) { return handleRequest({ method: 'POST', path: '/signups', query: {}, headers: {}, body: text }); }
var arr = post('[]');
T.eq(arr.status, 422, '[] parses but is not an object → 422');
T.eq(arr.body.errors, [{ detail: 'must be a JSON object', pointer: '#' }], 'One error, pointing at the whole document (#)');
T.eq(post('null').status, 422, 'null parses too — and must not crash on null.email');
var get = handleRequest({ method: 'GET', path: '/signups', query: {}, headers: {}, body: null });
T.eq([get.status, get.headers.allow, get.body.type], [405, 'POST', 'https://api.example.com/problems/method-not-allowed'], 'GET /signups → 405 problem with allow: POST');
T.eq(get.body.detail, 'GET is not supported on /signups', '405 detail names the method');
var nf = handleRequest({ method: 'GET', path: '/nope', query: {}, headers: {}, body: null });
T.eq([nf.status, nf.body.type, nf.body.detail], [404, 'https://api.example.com/problems/not-found', 'No route for /nope'], 'Unknown path → 404 problem');
var ok = post(JSON.stringify({ email: 'ada@calc.io', age: 36 }));
T.eq([ok.status, ok.headers['content-type'], ok.headers.location], [201, 'application/json', '/users/1'], 'A valid signup → 201, plain JSON, location /users/1');
T.eq(ok.body, { id: 1, email: 'ada@calc.io', age: 36 }, 'The created user');
` }
        ],
        files: [{ name: "script.js", content: PROBLEM_STARTER }],
        hints: [
          "`problem` is three lines: build `const body = { type: PROBLEMS + slug, title: title, status: statusCode, detail: detail };`, then `Object.assign(body, extra || {});`, then return `{ status: statusCode, headers: { \"content-type\": \"application/problem+json\" }, body: body }`.",
          "Declare `let data;` and put only the parse in the try: `try { data = JSON.parse(req.body); } catch (err) { return problem(400, …); }`.",
          "Check the shape before the fields: `if (data === null || typeof data !== \"object\" || Array.isArray(data))`. Then push into an `errors` array — `Number.isInteger(data.age) && data.age >= 13` is the age rule — and return the 422 only if it is non-empty. For the 405, build the problem, then set `res.headers.allow = \"POST\";` before returning it."
        ],
        solution: { "script.js": PROBLEM_SOLUTION }
      },

      {
        id: "api-u1-4",
        title: "Actions, state and 409 Conflict",
        kind: "js", chip: "API", xp: 15, mins: 15,
        brief: "An order is `pending`, then `paid`, then `shipped` — or `cancelled`. If clients can `PATCH { state: \"shipped\" }` whenever they like, every rule about what can follow what has to live in every client. So **state changes only through actions**, custom methods on the item: `POST /orders/7/pay`, `/ship`, `/cancel`.\n\nThe transitions are data (`TRANSITIONS`), and three outcomes matter:\n\n- **allowed** → apply it, `200` with the order\n- **impossible from this state** (shipping a pending order) → **`409 Conflict`**: the request clashes with the resource's current state. Include extension members `state` and `allowed` (the actions that *would* work right now) so the client can recover without reading docs\n- **already done** (cancelling a cancelled order) → `200`, unchanged. The client wanted the order cancelled and it is. If its first try timed out, the retry must not look like a failure\n\nAnd a `PATCH` that tries to set `state` is a **422**: that field changes only through actions.\n\n`problem()` from the last lesson is provided.",
        steps: [
          { text: "Write `act(order, action)` and route `POST /orders/<id>/<action>` to it. An allowed action updates `state` and answers `200` with the order.",
            test: R`
function post(p) { return handleRequest({ method: 'POST', path: p, query: {}, headers: {}, body: null }); }
var paid = post('/orders/1/pay');
T.eq(paid.status, 200, 'pay on a pending order is allowed → 200');
T.eq(paid.body, { id: 1, item: 'Desk lamp', state: 'paid' }, 'The body is the updated order');
T.eq(post('/orders/1/ship').body.state, 'shipped', 'then ship: paid → shipped');
T.eq(handleRequest({ method: 'GET', path: '/orders/1', query: {}, headers: {}, body: null }).body.state, 'shipped', 'The change is stored');
` },
          { text: "An action that cannot start from the order's state answers **`409`** `invalid-transition`, with `detail` like `Cannot ship order 4: it is pending` and extension members `state` and `allowed`. The order must not change.",
            test: R`
function post(p) { return handleRequest({ method: 'POST', path: p, query: {}, headers: {}, body: null }); }
var res = post('/orders/4/ship');
T.eq(res.status, 409, 'Shipping a pending order conflicts with its state → 409');
T.eq(res.headers['content-type'], 'application/problem+json', 'A 409 is a problem too');
T.eq([res.body.type, res.body.title, res.body.detail], ['https://api.example.com/problems/invalid-transition', 'Invalid state transition', 'Cannot ship order 4: it is pending'], 'type, title and detail');
T.eq([res.body.state, res.body.allowed], ['pending', ['pay', 'cancel']], 'state and allowed tell the client what it CAN do now');
T.eq(handleRequest({ method: 'GET', path: '/orders/4', query: {}, headers: {}, body: null }).body.state, 'pending', 'A refused action changes nothing');
var late = post('/orders/3/cancel');
T.eq([late.status, late.body.detail, late.body.allowed], [409, 'Cannot cancel order 3: it is shipped', []], 'A shipped order cannot be cancelled, and nothing is allowed from shipped');
` },
          { text: "An action whose target state the order is **already in** answers `200` with the order unchanged — cancelling twice is not an error. But a cancelled order can't be paid.",
            test: R`
function post(p) { return handleRequest({ method: 'POST', path: p, query: {}, headers: {}, body: null }); }
var first = post('/orders/2/cancel');
T.eq([first.status, first.body.state], [200, 'cancelled'], 'cancel on a paid order → cancelled');
var again = post('/orders/2/cancel');
T.eq(again.status, 200, 'cancelling a cancelled order again is a 200 — the client got what it asked for');
T.eq(again.body, { id: 2, item: 'Bookshelf', state: 'cancelled' }, 'and the order is unchanged');
var pay = post('/orders/2/pay');
T.eq([pay.status, pay.body.detail, pay.body.allowed], [409, 'Cannot pay order 2: it is cancelled', []], 'paying a cancelled order is still a conflict');
` },
          { text: "Close the side doors: `PATCH` with a `state` member is a **422** (pointer `#/state`) while `item` may still change; an action that is not one of `TRANSITIONS`' own keys is a 404 — including names every object inherits, like `constructor`.",
            test: R`
function req(m, p, b) { return handleRequest({ method: m, path: p, query: {}, headers: {}, body: b }); }
var sneaky = req('PATCH', '/orders/4', { state: 'shipped' });
T.eq(sneaky.status, 422, 'PATCH { state } → 422: state changes only through actions');
T.eq(sneaky.body.errors, [{ detail: 'state changes only through actions: pay, ship, cancel', pointer: '#/state' }], 'One error at #/state');
T.eq(req('GET', '/orders/4', null).body.state, 'pending', 'and the state did not change');
T.eq(req('PATCH', '/orders/4', { item: 'Wool rug' }).body, { id: 4, item: 'Wool rug', state: 'pending' }, 'item can still be edited');
var refund = req('POST', '/orders/4/refund', null);
T.eq([refund.status, refund.body.detail], [404, 'No action refund on orders'], 'An unknown action → 404 problem');
var proto = req('POST', '/orders/4/constructor', null);
T.expect(proto && proto.status === 404, 'POST /orders/4/constructor must be a 404 — TRANSITIONS["constructor"] is inherited from Object, so check own keys');
T.eq(req('GET', '/orders/99', null).status, 404, 'No order 99 → 404');
` }
        ],
        files: [{ name: "script.js", content: ORDERS_STARTER }],
        hints: [
          "In `act`, look up `const t = TRANSITIONS[action];`, then check in this order: already in `t.to` → 200; `!t.from.includes(order.state)` → the 409; otherwise `order.state = t.to;` and 200.",
          "Route the action: `if (parts.length === 3 && req.method === \"POST\") { … return act(order, parts[2]); }`. Guard it first with `Object.prototype.hasOwnProperty.call(TRANSITIONS, action)` — a plain `TRANSITIONS[action]` finds `constructor` on the prototype.",
          "Replace the `Object.assign` in PATCH: `if (\"state\" in req.body) return problem(422, …);` then `if (typeof req.body.item === \"string\") order.item = req.body.item;`."
        ],
        solution: { "script.js": ORDERS_SOLUTION }
      },

      {
        id: "api-quiz-1",
        title: "Unit 1 quiz: Resources, status codes and errors",
        kind: "quiz", xp: 10,
        brief: "Resource design, the write-path status codes and problem details. 80% to pass.",
        questions: [
          { q: "A client sends `PUT /notes` to a collection that supports only GET and POST. What should come back?",
            choices: ["404 Not Found, because no PUT handler is registered for this path", "400 Bad Request with an error message", "200 OK, and the request is ignored", "405 Method Not Allowed with `allow: GET, POST`"],
            answer: 3, explain: "The path exists; the method doesn't. That is 405, and RFC 9110 requires the `allow` header on it, which tells the client what to do instead. A 404 would wrongly say the address itself is wrong." },
          { q: "Which response is a correctly formed answer to a successful create?",
            choices: ["`201` with `location: /notes/3` and the note", "`200` with the note in the body, since the request succeeded", "`204` with `location: /notes/3`", "`302` redirecting to `/notes/3`"],
            answer: 0, explain: "201 Created says something new exists, and `location` names it. A 200 loses that information, a 204 promises no body (and a create usually returns the resource), and a redirect tells the client to go fetch something else." },
          { q: "The body is `{\"age\": \"thirty\"}`. It is perfectly valid JSON, but `age` must be an integer. Which status fits best?",
            choices: ["400 Bad Request, because the body could not be parsed", "500 Internal Server Error", "422 Unprocessable Content", "415 Unsupported Media Type"],
            answer: 2, explain: "The JSON parsed fine — the server read it — but a value breaks the rules. That is 422. 400 is for a request the server cannot read at all, and 415 is for a body in a media type the endpoint doesn't accept." },
          { q: "In an RFC 9457 problem body, which member names the KIND of problem, is the same on every occurrence, and is what a client should branch on?",
            choices: ["`detail`", "`type`", "`instance`", "`errors`"],
            answer: 1, explain: "`type` is a URI identifying the problem kind. `detail` describes this particular occurrence and may change wording at any time, so a client that parses it breaks. `instance` names the occurrence; `errors` is an extension member this course uses for field failures." },
          { q: "Why is `GET /orders/7/cancel` dangerous even if your own UI only ever calls it from a button?",
            choices: ["GET URLs are limited to 255 characters", "GET requests cannot carry an order id in the path", "GET is promised to be safe, so prefetchers, crawlers and caches call it", "GET responses are always cached by the browser, so the cancel would only ever run once per order"],
            answer: 2, explain: "Everything on the web treats GET as safe — link prefetchers, crawlers, caches and monitoring tools all call it without asking. A state change behind GET will eventually be triggered by one of them. Actions are POSTs." },
          { q: "`POST /orders/3/ship` arrives for an order that was cancelled yesterday. Which status tells the client its request clashes with the resource's current state?",
            choices: ["404 Not Found", "409 Conflict", "403 Forbidden", "410 Gone"],
            answer: 1, explain: "409 Conflict is exactly 'this request conflicts with the current state of the target resource'. The order exists (not 404), the client is allowed to act on it (not 403), and it still exists (not 410). Add `state` and `allowed` members so the client can recover." }
        ]
      }
    ]
  });
})();
