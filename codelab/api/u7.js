/* Advanced API Design — Unit 7: Changing a live API */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  window.CODELAB.addUnit("api", {
    id: "api-u7",
    title: "Changing a live API",
    icon: "🪜",
    blurb: "Every design decision so far was made once, for a client that did not exist yet. This unit is about the second decision: changing any of them while clients are already depending on the first.",
    cheat: [
      { h: "The test for a breaking change", lang: "js", code: "// Would a client written against the OLD\n// contract still work against the NEW one,\n// UNCHANGED?\n//   yes -> additive\n//   no  -> breaking", note: "It has nothing to do with the size of the diff. Removing one optional field is breaking; adding a whole resource is not." },
      { h: "Additive is almost always possible", lang: "js", code: "// breaking: rename  name -> fullName\n// additive: ADD fullName, keep name,\n//           fill both, deprecate name later", note: "The cost is carrying two fields for a while. The alternative is breaking every client at once, which costs more." },
      { h: "Tolerant reader", lang: "js", code: "// ignore fields you do not know\n// do not fail on an added enum value\n// do not depend on key ORDER", note: "A client written this way survives an additive change without being touched. A client that validates strictly turns your additive change into a breaking one for itself." },
      { h: "URL versioning", lang: "js", code: "/v1/orders   /v2/orders", note: "Obvious, greppable, easy to route and to cache. Clumsy for small changes: you version the whole surface to move one field, and clients tend to migrate all at once or never." },
      { h: "Header / media-type versioning", lang: "js", code: "Accept: application/vnd.shop.v2+json\n// or a dated version, like Stripe:\nShop-Version: 2026-04-01", note: "One URL per resource forever, and a client can move one endpoint at a time. Harder to see in a log, and easy to forget to send — so pick a default and document it." },
      { h: "Announce the end before it arrives", lang: "js", code: "Deprecation: true\nSunset: Wed, 01 Jul 2026 00:00:00 GMT\nLink: <https://docs…/v2>; rel=\"deprecation\"", note: "RFC 8594 and the Deprecation draft. The headers ride on the responses the client is already receiving, which is the only channel you know reaches whoever is still calling you." }
    ],
    lessons: [

      /* ---------- api-u7-1 ---------- */
      {
        id: "api-u7-1",
        title: "What counts as breaking",
        kind: "js", chip: "API", xp: 15, mins: 12,
        brief: "There is exactly one test, and it says nothing about how big the change is:\n\n> **Would a client written against the old contract still work against the new one, without being changed?**\n\nIf yes, the change is **additive** and you can ship it. If no, it is **breaking** and it needs a version, a deprecation window, or a different design.\n\nThe test is worth trusting over intuition, because intuition gets this wrong in both directions. Adding an entire new resource is additive and completely safe. Renaming one optional field is breaking. Making an optional request field required is breaking. Making a required field optional is *not*.\n\nThe subtle one is **adding a value to an enum**. It is additive on paper, and it breaks every client that wrote a `switch` with no default — which is most of them. That is why \"tolerant reader\" is a rule for clients and a *risk* for servers.",
        steps: [
          { text: "`isBreaking(change)` classifies the obvious cases: removing or renaming a response field breaks clients, adding one does not.",
            test: R`
T.expect(typeof isBreaking === 'function', 'Define isBreaking(change).');
T.eq(isBreaking("add-response-field"), false, 'adding a response field is additive — an old client ignores what it does not know');
T.eq(isBreaking("remove-response-field"), true, 'removing one breaks any client that reads it');
T.eq(isBreaking("rename-response-field"), true, 'a rename is a removal and an addition at once, so it breaks');
T.eq(isBreaking("add-new-endpoint"), false, 'a whole new endpoint is invisible to existing clients');
` },
          { text: "Request-side changes run the other way. Tightening what you accept breaks callers; loosening it does not.",
            test: R`
T.eq(isBreaking("make-request-field-required"), true, 'a client that was not sending it now fails');
T.eq(isBreaking("make-request-field-optional"), false, 'a client that was sending it carries on working');
T.eq(isBreaking("add-optional-request-field"), false, 'an optional addition asks nothing of existing callers');
T.eq(isBreaking("tighten-validation"), true, 'a request that used to be accepted and now is not is a break, even if it was always a bit wrong');
T.eq(isBreaking("loosen-validation"), false, 'accepting MORE than before cannot break a caller');
` },
          { text: "The two that catch people out: adding an enum value, and changing a field's type.",
            test: R`
T.eq(isBreaking("change-field-type"), true, 'a number that becomes a string breaks every client that did arithmetic on it');
T.eq(isBreaking("add-enum-value"), true, 'additive on paper, and it breaks every client whose switch had no default — treat it as breaking');
T.eq(isBreaking("add-response-header"), false, 'an unknown response header is ignored by definition');
T.eq(isBreaking("change-error-status-code"), true, 'a client branching on 404 does not branch on your new 410');
T.expect(T.logged("add-enum-value"), 'log the enum case — it is the one that will bite you');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// One test: would an UNCHANGED old client still work?",
            "",
            "function isBreaking(change) {",
            "  // true  (breaking): remove-response-field, rename-response-field,",
            "  //                   make-request-field-required, tighten-validation,",
            "  //                   change-field-type, add-enum-value,",
            "  //                   change-error-status-code",
            "  // false (additive): add-response-field, add-new-endpoint,",
            "  //                   make-request-field-optional,",
            "  //                   add-optional-request-field, loosen-validation,",
            "  //                   add-response-header",
            "}",
            "",
            "// log the enum case",
            "") }
        ],
        hints: [
          "A Set of the breaking names reads better than a long if-chain and is easier to extend: `const BREAKING = new Set([\"remove-response-field\", …]);`",
          "Then one line: `return BREAKING.has(change);` — which also returns false for anything unlisted.",
          "Reason it out rather than memorising: ask \"could a client that has not been recompiled still succeed?\". Removing anything it reads, or demanding anything it does not send, means no.",
          "`console.log(\"add-enum-value is breaking: \" + isBreaking(\"add-enum-value\"));`"
        ],
        solution: {
          "script.js": L(
            "// One test: would an UNCHANGED old client still work?",
            "",
            "const BREAKING = new Set([",
            "  \"remove-response-field\",",
            "  \"rename-response-field\",",
            "  \"make-request-field-required\",",
            "  \"tighten-validation\",",
            "  \"change-field-type\",",
            "  \"add-enum-value\",            // additive on paper; breaks switch-without-default",
            "  \"change-error-status-code\"",
            "]);",
            "",
            "function isBreaking(change) {",
            "  return BREAKING.has(change);",
            "}",
            "",
            "// log the enum case",
            "console.log(\"add-enum-value is breaking: \" + isBreaking(\"add-enum-value\"));",
            "")
        }
      },

      /* ---------- api-u7-2 ---------- */
      {
        id: "api-u7-2",
        title: "Renaming a field without breaking anyone",
        kind: "js", chip: "API", xp: 20, mins: 14,
        brief: "You shipped `name`. You want `fullName`. A rename is breaking, and you cannot recall the clients.\n\nThe move is to **stop thinking of it as a rename**. Split it into three steps, each of which is additive on its own:\n\n1. **Add** `fullName`, keep `name`, and write both on every response. Accept either on the way in.\n2. **Deprecate** `name` — announce it, give a date, wait.\n3. **Remove** `name` after the date, when your logs say nobody reads it.\n\nStep 1 is the whole trick, and it costs you one duplicated field for a while. The alternative costs every client an emergency release.\n\nThere is a matching rule on the **write** path: accept both spellings, and decide what happens when a client sends both. Preferring the new one and ignoring the old is a defensible choice; silently merging them is not, because the client never learns it is confused.",
        steps: [
          { text: "Reads carry both spellings, with the same value, so neither an old nor a new client can tell which one is \"real\".",
            test: R`
T.expect(typeof handleRequest === 'function', 'Define handleRequest(req).');
const res = handleRequest({ method: "GET", path: "/api/people/1" });
T.eq(res.status, 200, 'the person comes back');
T.eq(res.body.name, "Ada Lovelace", 'the OLD field is still there, so an old client keeps working');
T.eq(res.body.fullName, "Ada Lovelace", 'and the NEW field carries the same value');
T.expect(res.body.name === res.body.fullName, 'they must never disagree — two names for one thing is fine, two different values is a bug');
` },
          { text: "Writes accept either spelling. A client that only knows `name` can still create a person.",
            test: R`
const oldWay = handleRequest({ method: "POST", path: "/api/people", body: { name: "Grace Hopper" } });
T.eq(oldWay.status, 201, 'an old client creating with "name" still works');
T.eq(oldWay.body.fullName, "Grace Hopper", 'and gets both fields back');
T.eq(oldWay.body.name, "Grace Hopper", 'including the one it sent');
const newWay = handleRequest({ method: "POST", path: "/api/people", body: { fullName: "Katherine Johnson" } });
T.eq(newWay.status, 201, 'a new client creating with "fullName" works too');
T.eq(newWay.body.name, "Katherine Johnson", 'and also gets both');
` },
          { text: "When a client sends both and they disagree, the new field wins and the response says so — never a silent merge.",
            test: R`
const both = handleRequest({ method: "POST", path: "/api/people", body: { name: "Old Spelling", fullName: "New Spelling" } });
T.eq(both.status, 201, 'sending both is not an error — plenty of clients will during a migration');
T.eq(both.body.fullName, "New Spelling", 'the new field wins');
T.eq(both.body.name, "New Spelling", 'and the old field mirrors it, so the response is self-consistent');
T.expect(both.headers["Warning"] !== undefined, 'but the client is told, via a Warning header — it is sending contradictory data and needs to know');
const agreeing = handleRequest({ method: "POST", path: "/api/people", body: { name: "Same", fullName: "Same" } });
T.expect(agreeing.headers["Warning"] === undefined, 'sending both with the SAME value is harmless and needs no warning');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// A rename is three additive steps. This lesson is step one: write both,",
            "// read either, and tell the truth when a client contradicts itself.",
            "",
            "const people = [{ id: 1, fullName: \"Ada Lovelace\" }];",
            "let nextId = 2;",
            "",
            "function represent(person) {",
            "  // both spellings, same value",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (req.method === \"GET\" && req.path.startsWith(\"/api/people/\")) {",
            "    const id = Number(req.path.split(\"/\")[3]);",
            "    const found = people.find(p => p.id === id);",
            "    if (!found) return { status: 404, headers: {}, body: { error: \"not found\" } };",
            "    return { status: 200, headers: { \"Content-Type\": \"application/json\" }, body: represent(found) };",
            "  }",
            "",
            "  if (req.method === \"POST\" && req.path === \"/api/people\") {",
            "    // accept body.fullName OR body.name; the new one wins",
            "    // if BOTH were sent and they DIFFER, add a Warning header",
            "    // store { id, fullName } and return 201 with represent(...)",
            "  }",
            "  return { status: 404, headers: {}, body: { error: \"not found\" } };",
            "}",
            "") }
        ],
        hints: [
          "`represent` writes the value twice: `return { id: person.id, fullName: person.fullName, name: person.fullName };`",
          "Pick the winner with a nullish-safe fallback: `const value = body.fullName !== undefined ? body.fullName : body.name;`",
          "Detect the contradiction explicitly — both present AND different: `const clash = body.name !== undefined && body.fullName !== undefined && body.name !== body.fullName;`",
          "Build headers conditionally: `const headers = { \"Content-Type\": \"application/json\" }; if (clash) headers[\"Warning\"] = '199 - \"name and fullName disagree; fullName was used\"';`"
        ],
        solution: {
          "script.js": L(
            "// A rename is three additive steps. This lesson is step one: write both,",
            "// read either, and tell the truth when a client contradicts itself.",
            "",
            "const people = [{ id: 1, fullName: \"Ada Lovelace\" }];",
            "let nextId = 2;",
            "",
            "function represent(person) {",
            "  return { id: person.id, fullName: person.fullName, name: person.fullName };",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (req.method === \"GET\" && req.path.startsWith(\"/api/people/\")) {",
            "    const id = Number(req.path.split(\"/\")[3]);",
            "    const found = people.find(p => p.id === id);",
            "    if (!found) return { status: 404, headers: {}, body: { error: \"not found\" } };",
            "    return { status: 200, headers: { \"Content-Type\": \"application/json\" }, body: represent(found) };",
            "  }",
            "",
            "  if (req.method === \"POST\" && req.path === \"/api/people\") {",
            "    const body = req.body || {};",
            "    const value = body.fullName !== undefined ? body.fullName : body.name;",
            "    const clash = body.name !== undefined && body.fullName !== undefined &&",
            "      body.name !== body.fullName;",
            "",
            "    const created = { id: nextId++, fullName: value };",
            "    people.push(created);",
            "",
            "    const headers = { \"Content-Type\": \"application/json\" };",
            "    if (clash) headers[\"Warning\"] = '199 - \"name and fullName disagree; fullName was used\"';",
            "    return { status: 201, headers: headers, body: represent(created) };",
            "  }",
            "  return { status: 404, headers: {}, body: { error: \"not found\" } };",
            "}",
            "")
        }
      },

      /* ---------- api-u7-3 ---------- */
      {
        id: "api-u7-3",
        title: "Two versions, one handler",
        kind: "js", chip: "API", xp: 20, mins: 14,
        brief: "Some changes cannot be made additively. `total` was a number of pounds and has to become `{ amount, currency }` — there is no way to serve both under one name.\n\nNow you need a **version**, and two places to put it:\n\n- **In the URL** — `/v1/orders`, `/v2/orders`. Obvious in a log, trivial to route and cache. Clumsy for small changes, because you version the entire surface to move one field.\n- **In a header** — `Accept: application/vnd.shop.v2+json`, or a dated header the way Stripe does it. One URL per resource forever, and a client can migrate one call at a time. Easier to forget to send, so you must pick a default and document it loudly.\n\nWhichever you choose, the implementation should be the same shape: **one handler, one internal model, and a representation function per version at the edge.** Branching on the version deep inside your business logic is how a two-version API becomes unmaintainable by version three.",
        steps: [
          { text: "The internal model is versionless. `representV1` and `representV2` differ only in how they shape it.",
            test: R`
T.expect(typeof representV1 === 'function', 'Define representV1(order).');
T.expect(typeof representV2 === 'function', 'Define representV2(order).');
const order = { id: 1, amountPence: 1250, currency: "GBP", note: "gift" };
T.eq(representV1(order), { id: 1, total: 12.5, note: "gift" }, 'v1 flattens the money into a number of pounds');
T.eq(representV2(order), { id: 1, total: { amount: 1250, currency: "GBP" }, note: "gift" }, 'v2 exposes minor units and a currency — which is the change that could not be made additively');
` },
          { text: "URL versioning: `/v1/orders/1` and `/v2/orders/1` reach one handler and differ only at the edge.",
            test: R`
T.expect(typeof handleRequest === 'function', 'Define handleRequest(req).');
const v1 = handleRequest({ method: "GET", path: "/v1/orders/1", headers: {} });
T.eq(v1.status, 200, 'v1 answers');
T.eq(v1.body.total, 12.5, 'with the v1 shape');
const v2 = handleRequest({ method: "GET", path: "/v2/orders/1", headers: {} });
T.eq(v2.body.total, { amount: 1250, currency: "GBP" }, 'and v2 with its own');
T.eq(v1.body.id, v2.body.id, 'both describe the same underlying order');
T.eq(handleRequest({ method: "GET", path: "/v3/orders/1", headers: {} }).status, 404, 'a version that does not exist is a 404');
` },
          { text: "Header versioning on an unversioned URL: `/api/orders/1` reads the version header, defaults to v1 when absent, and reports which version answered.",
            test: R`
const def = handleRequest({ method: "GET", path: "/api/orders/1", headers: {} });
T.eq(def.body.total, 12.5, 'no version header means the DEFAULT, which must stay v1 forever — changing the default is a breaking change for everyone who sends nothing');
T.eq(def.headers["Shop-Version"], "1", 'and the response says which version answered, so a client is never guessing');
const asked = handleRequest({ method: "GET", path: "/api/orders/1", headers: { "Shop-Version": "2" } });
T.eq(asked.body.total, { amount: 1250, currency: "GBP" }, 'asking for 2 gets the v2 shape');
T.eq(asked.headers["Shop-Version"], "2", 'and the response confirms it');
const bad = handleRequest({ method: "GET", path: "/api/orders/1", headers: { "Shop-Version": "9" } });
T.eq(bad.status, 400, 'an unknown version is a 400 — guessing on the client\'s behalf is how you ship the wrong shape silently');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// One internal model. Versions live at the EDGE, in the representation",
            "// functions — never branched on inside the business logic.",
            "",
            "const orders = [{ id: 1, amountPence: 1250, currency: \"GBP\", note: \"gift\" }];",
            "",
            "function representV1(order) {",
            "  // { id, total: <pounds as a number>, note }",
            "}",
            "",
            "function representV2(order) {",
            "  // { id, total: { amount: <pence>, currency }, note }",
            "}",
            "",
            "const REPRESENT = { \"1\": representV1, \"2\": representV2 };",
            "",
            "function findOrder(path) {",
            "  const id = Number(path.split(\"/\")[3]);",
            "  return orders.find(o => o.id === id);",
            "}",
            "",
            "function handleRequest(req) {",
            "  // /v1/... or /v2/...  -> version from the path",
            "  // /api/...            -> version from the Shop-Version header, default \"1\"",
            "  // unknown version     -> 404 for a bad path, 400 for a bad header",
            "  // always set a Shop-Version response header saying which one answered",
            "}",
            "") }
        ],
        hints: [
          "`representV1` divides: `return { id: order.id, total: order.amountPence / 100, note: order.note };`",
          "Read the path version with a regex so `/v12/` cannot sneak through: `const m = req.path.match(/^\\/v(\\d+)\\//);`",
          "Branch once, at the top, into a version string — then everything after it is shared: `let version; if (m) { version = m[1]; if (!REPRESENT[version]) return { status: 404, … }; } else { version = req.headers[\"Shop-Version\"] || \"1\"; if (!REPRESENT[version]) return { status: 400, … }; }`",
          "Then one return for both paths: `return { status: 200, headers: { \"Content-Type\": \"application/json\", \"Shop-Version\": version }, body: REPRESENT[version](order) };`"
        ],
        solution: {
          "script.js": L(
            "// One internal model. Versions live at the EDGE, in the representation",
            "// functions — never branched on inside the business logic.",
            "",
            "const orders = [{ id: 1, amountPence: 1250, currency: \"GBP\", note: \"gift\" }];",
            "",
            "function representV1(order) {",
            "  return { id: order.id, total: order.amountPence / 100, note: order.note };",
            "}",
            "",
            "function representV2(order) {",
            "  return {",
            "    id: order.id,",
            "    total: { amount: order.amountPence, currency: order.currency },",
            "    note: order.note",
            "  };",
            "}",
            "",
            "const REPRESENT = { \"1\": representV1, \"2\": representV2 };",
            "",
            "function findOrder(path) {",
            "  const id = Number(path.split(\"/\")[3]);",
            "  return orders.find(o => o.id === id);",
            "}",
            "",
            "function json(status, body, headers) {",
            "  const h = Object.assign({ \"Content-Type\": \"application/json\" }, headers || {});",
            "  return { status: status, headers: h, body: body };",
            "}",
            "",
            "function handleRequest(req) {",
            "  const m = req.path.match(/^\\/v(\\d+)\\//);",
            "  let version;",
            "  if (m) {",
            "    version = m[1];",
            "    if (!REPRESENT[version]) return json(404, { error: \"no such version\" });",
            "  } else {",
            "    version = req.headers[\"Shop-Version\"] || \"1\";",
            "    if (!REPRESENT[version]) return json(400, { error: \"unknown Shop-Version\" });",
            "  }",
            "",
            "  const order = findOrder(req.path);",
            "  if (!order) return json(404, { error: \"not found\" });",
            "",
            "  return json(200, REPRESENT[version](order), { \"Shop-Version\": version });",
            "}",
            "")
        }
      },

      /* ---------- api-u7-4 ---------- */
      {
        id: "api-u7-4",
        title: "Deprecation, Sunset, and the day it stops",
        kind: "js", chip: "API", xp: 20, mins: 14,
        clock: 1780272000000,   /* 2026-06-01, one month before the sunset */
        brief: "A version you never retire is a version you maintain forever. Retiring one without warning is how you end up in an incident review.\n\nThe announcement rides on the responses the client is **already receiving**, because that is the only channel you know reaches whoever is still calling:\n\n- **`Deprecation: true`** — this endpoint or version is on the way out\n- **`Sunset: <HTTP-date>`** — [RFC 8594](https://www.rfc-editor.org/rfc/rfc8594.html), the date after which it stops\n- **`Link: <…>; rel=\"deprecation\"`** — where to read about the migration\n\nAnd then you have to actually do it. After the sunset date, v1 answers **`410 Gone`** — not 404. A 404 says *I have never heard of this*, which sends a developer hunting for a typo. 410 says *this existed and has been removed deliberately*, which sends them to your changelog.\n\nThis lesson's clock starts before the sunset and crosses it.",
        steps: [
          { text: "While v1 is live but deprecated, it works — and every response carries the announcement.",
            test: R`
T.expect(typeof handleRequest === 'function', 'Define handleRequest(req).');
const v1 = handleRequest({ method: "GET", path: "/v1/orders/1" });
T.eq(v1.status, 200, 'v1 still works before its sunset date');
T.eq(v1.body.total, 12.5, 'with the v1 shape');
T.eq(v1.headers["Deprecation"], "true", 'and announces that it is deprecated');
T.eq(v1.headers["Sunset"], "Wed, 01 Jul 2026 00:00:00 GMT", 'with the date it stops');
T.eq(v1.headers["Link"], '<https://docs.shop.dev/migrate-v2>; rel="deprecation"', 'and where to read about moving');
` },
          { text: "v2 is current, so it announces nothing. A deprecation header on a healthy version trains clients to ignore them.",
            test: R`
const v2 = handleRequest({ method: "GET", path: "/v2/orders/1" });
T.eq(v2.status, 200, 'v2 works');
T.expect(v2.headers["Deprecation"] === undefined, 'and carries no Deprecation header');
T.expect(v2.headers["Sunset"] === undefined, 'nor a Sunset');
T.expect(v2.headers["Link"] === undefined, 'nor a deprecation link — there is nothing to announce');
` },
          { text: "Cross the sunset date. v1 becomes `410 Gone`, with a problem document pointing at the migration; v2 is untouched.",
            test: R`
T.advance(40 * 24 * 60 * 60 * 1000);
const after = handleRequest({ method: "GET", path: "/v1/orders/1" });
T.eq(after.status, 410, 'past the sunset, v1 is 410 Gone — it existed and was removed on purpose');
T.expect(after.status !== 404, 'not 404, which would send a developer hunting for a typo that is not there');
T.eq(after.headers["Content-Type"], "application/problem+json", 'the refusal is a problem document');
T.eq(after.body.type, "https://api.shop.dev/problems/version-sunset", 'with a type the client can branch on');
T.eq(after.body.detail, "v1 was retired on Wed, 01 Jul 2026 00:00:00 GMT. Use v2.", 'and a detail naming the date and the way forward');
T.eq(handleRequest({ method: "GET", path: "/v2/orders/1" }).status, 200, 'v2 carries on as normal');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// Announce it on the responses the client already receives, then",
            "// actually retire it — as 410 Gone, not 404.",
            "",
            "const SUNSET_TEXT = \"Wed, 01 Jul 2026 00:00:00 GMT\";",
            "const SUNSET_MS = Date.parse(SUNSET_TEXT);",
            "const DOCS = '<https://docs.shop.dev/migrate-v2>; rel=\"deprecation\"';",
            "",
            "const orders = [{ id: 1, amountPence: 1250, currency: \"GBP\", note: \"gift\" }];",
            "",
            "function representV1(o) { return { id: o.id, total: o.amountPence / 100, note: o.note }; }",
            "function representV2(o) {",
            "  return { id: o.id, total: { amount: o.amountPence, currency: o.currency }, note: o.note };",
            "}",
            "",
            "function handleRequest(req) {",
            "  const m = req.path.match(/^\\/v(\\d+)\\//);",
            "  if (!m) return { status: 404, headers: {}, body: { error: \"not found\" } };",
            "  const version = m[1];",
            "  const order = orders.find(o => o.id === Number(req.path.split(\"/\")[3]));",
            "  if (!order) return { status: 404, headers: {}, body: { error: \"not found\" } };",
            "",
            "  if (version === \"2\") {",
            "    // current: no announcement headers at all",
            "  }",
            "",
            "  if (version === \"1\") {",
            "    // now() >= SUNSET_MS -> 410 + problem+json, type .../version-sunset",
            "    // otherwise          -> 200 + Deprecation / Sunset / Link",
            "  }",
            "  return { status: 404, headers: {}, body: { error: \"no such version\" } };",
            "}",
            "") }
        ],
        hints: [
          "`Date.parse` on a fixed string is fine — it is the *current* time that must come from `now()`, and the sunset is a constant.",
          "v2 is the short branch: `return { status: 200, headers: { \"Content-Type\": \"application/json\" }, body: representV2(order) };`",
          "The sunset check is one comparison: `if (now() >= SUNSET_MS) return { status: 410, headers: { \"Content-Type\": \"application/problem+json\" }, body: { type: \"https://api.shop.dev/problems/version-sunset\", title: \"API version retired\", status: 410, detail: \"v1 was retired on \" + SUNSET_TEXT + \". Use v2.\" } };`",
          "The live-but-deprecated branch sets all three headers: `{ \"Content-Type\": \"application/json\", \"Deprecation\": \"true\", \"Sunset\": SUNSET_TEXT, \"Link\": DOCS }`."
        ],
        solution: {
          "script.js": L(
            "// Announce it on the responses the client already receives, then",
            "// actually retire it — as 410 Gone, not 404.",
            "",
            "const SUNSET_TEXT = \"Wed, 01 Jul 2026 00:00:00 GMT\";",
            "const SUNSET_MS = Date.parse(SUNSET_TEXT);",
            "const DOCS = '<https://docs.shop.dev/migrate-v2>; rel=\"deprecation\"';",
            "",
            "const orders = [{ id: 1, amountPence: 1250, currency: \"GBP\", note: \"gift\" }];",
            "",
            "function representV1(o) { return { id: o.id, total: o.amountPence / 100, note: o.note }; }",
            "function representV2(o) {",
            "  return { id: o.id, total: { amount: o.amountPence, currency: o.currency }, note: o.note };",
            "}",
            "",
            "function handleRequest(req) {",
            "  const m = req.path.match(/^\\/v(\\d+)\\//);",
            "  if (!m) return { status: 404, headers: {}, body: { error: \"not found\" } };",
            "  const version = m[1];",
            "  const order = orders.find(o => o.id === Number(req.path.split(\"/\")[3]));",
            "  if (!order) return { status: 404, headers: {}, body: { error: \"not found\" } };",
            "",
            "  if (version === \"2\") {",
            "    return {",
            "      status: 200,",
            "      headers: { \"Content-Type\": \"application/json\" },",
            "      body: representV2(order)",
            "    };",
            "  }",
            "",
            "  if (version === \"1\") {",
            "    if (now() >= SUNSET_MS) {",
            "      return {",
            "        status: 410,",
            "        headers: { \"Content-Type\": \"application/problem+json\" },",
            "        body: {",
            "          type: \"https://api.shop.dev/problems/version-sunset\",",
            "          title: \"API version retired\",",
            "          status: 410,",
            "          detail: \"v1 was retired on \" + SUNSET_TEXT + \". Use v2.\"",
            "        }",
            "      };",
            "    }",
            "    return {",
            "      status: 200,",
            "      headers: {",
            "        \"Content-Type\": \"application/json\",",
            "        \"Deprecation\": \"true\",",
            "        \"Sunset\": SUNSET_TEXT,",
            "        \"Link\": DOCS",
            "      },",
            "      body: representV1(order)",
            "    };",
            "  }",
            "  return { status: 404, headers: {}, body: { error: \"no such version\" } };",
            "}",
            "")
        }
      },

      /* ---------- api-quiz-7 ---------- */
      {
        id: "api-quiz-7",
        title: "Unit 7 quiz: changing a live API",
        kind: "quiz", chip: "API", xp: 20, mins: 6,
        questions: [
          {
            q: "What is the test for whether a change to a live API is breaking?",
            choices: [
              "Whether the change alters the response body, as opposed to only headers or status codes",
              "Whether a client written against the old contract still works, unchanged, against the new one",
              "Whether the API's version number has to be incremented under semantic versioning rules",
              "Whether any existing field is modified, rather than new fields simply being added alongside"
            ],
            answer: 1,
            explain: "It is a question about clients, not about diffs. Adding an entire resource is additive; removing one optional field is breaking. Starting from the client is what stops intuition — which tends to track the size of the change — from getting it wrong in both directions."
          },
          {
            q: "Why is adding a value to an enum usually treated as breaking, even though nothing was removed?",
            choices: [
              "Because clients validate responses against a schema that lists the permitted values",
              "Because clients that wrote a switch with no default will not handle the new value",
              "Because an enum's values are ordered, so inserting one shifts the meaning of the others",
              "Because the field's type changes from a fixed set to an open one, which is a type change"
            ],
            answer: 1,
            explain: "On paper it is additive. In practice a great many clients exhaustively switch on the values that existed when they were written, and a new one falls through to nothing or throws. Schema validation is one way this bites, but the switch-without-default is the common one."
          },
          {
            q: "You need to rename a response field from `name` to `fullName`. What is the additive path?",
            choices: [
              "Add `fullName`, keep writing `name` with the same value, deprecate `name`, remove it later",
              "Rename it and return both the old and new names only to clients that send a version header",
              "Rename it immediately and publish a migration guide before the next release goes out",
              "Return `name` as a copy of `fullName` only when the client's request included `name`"
            ],
            answer: 0,
            explain: "Carrying both fields for a while costs you one duplicated value; it costs clients nothing, and they migrate on their own schedule. Option two is version-gating, which is heavier than this change needs, and the last option requires the server to guess from a request what a response should contain."
          },
          {
            q: "What is the main practical advantage of header or media-type versioning over putting the version in the URL?",
            choices: [
              "It is visible in access logs and proxy configuration without parsing the request body",
              "A client can migrate one endpoint at a time, and resource URLs never change",
              "It allows more than two versions to be served at once, which URL versioning cannot do",
              "Caches key on the URL alone, so header versioning makes responses easier to cache correctly"
            ],
            answer: 1,
            explain: "With `/v1/` and `/v2/` you version the whole surface, so clients tend to move everything at once or nothing at all. A header lets a client adopt v2 for one call while leaving the rest alone, and a resource keeps one URL forever. Log visibility is URL versioning's advantage, and header versioning makes caching harder, not easier — it needs `Vary`."
          },
          {
            q: "A client calls your header-versioned API and sends no version header at all. What should happen?",
            choices: [
              "Serve the newest version, so clients that do not care automatically get current behaviour",
              "Serve the documented default, which must stay fixed, because changing it breaks every such client",
              "Reject the request with 400, since the version is a required part of the contract",
              "Serve the oldest version still supported, so the client has the longest possible migration window"
            ],
            answer: 1,
            explain: "Whatever the default is, it is part of the contract for every client that sends nothing — so moving it silently changes their behaviour, which is exactly a breaking change. Defaulting to \"newest\" is the dangerous version of this: those clients get re-broken on every release."
          },
          {
            q: "After a version's sunset date passes, why answer `410 Gone` rather than `404 Not Found`?",
            choices: [
              "Because 404 is reserved for paths that were never valid, while 410 means it existed and was removed",
              "Because 410 responses are cached permanently by intermediaries while 404s are revalidated",
              "Because 404 would imply the server is misconfigured, which could trigger a client's failover logic",
              "Because 410 is in the 4xx range and therefore signals the client should not retry the request"
            ],
            answer: 0,
            explain: "The distinction is what it tells the developer reading the log. A 404 sends them hunting for a typo in a URL that is spelled correctly; a 410 says this was deliberately retired and points them at the changelog. Both are 4xx and neither is retryable — the difference is entirely about diagnosis."
          }
        ]
      }
    ]
  });
})();
