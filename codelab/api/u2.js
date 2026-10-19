/* Advanced API Design — Unit 2: Errors as a contract */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  window.CODELAB.addUnit("api", {
    id: "api-u2",
    title: "Errors as a contract",
    icon: "🧾",
    blurb: "You already believe a consistent error shape matters — Back-End Foundations spent a unit on it. This is the shape the industry standardised, why its fields are what they are, and how to move to it without breaking the clients you already have.",
    cheat: [
      { h: "RFC 9457 problem+json", lang: "js", code: "{\n  type: \"https://api.shop.dev/problems/out-of-stock\",\n  title: \"Item is out of stock\",\n  status: 409,\n  detail: \"sku SP-12 has 0 left; you asked for 3\",\n  instance: \"/api/orders/8812\"\n}", note: "Served as Content-Type: application/problem+json. Five members, all optional — but `type` is the one that matters." },
      { h: "type is the machine-readable identity", lang: "js", code: "// branch on this:\nif (p.type.endsWith(\"/out-of-stock\")) …\n\n// never on this:\nif (p.detail.includes(\"out of stock\")) …", note: "`title` and `detail` are prose for humans and may be reworded or translated at any time. `type` is a stable URI you promise not to change — it IS the contract." },
      { h: "title vs detail", lang: "js", code: "title:  \"Item is out of stock\"   // same for every\n                                 // occurrence of this type\ndetail: \"sku SP-12 has 0 left\"   // about THIS one", note: "title describes the problem TYPE; detail describes this specific occurrence. Swapping them is the most common mistake." },
      { h: "Extension members", lang: "js", code: "{ type: \"…/validation-failed\", title: \"…\",\n  status: 422,\n  errors: [                       // <- extension\n    { field: \"email\", message: \"must contain @\" }\n  ] }", note: "Any member beyond the five is yours. This is where field-level validation errors go — the spec leaves room on purpose." },
      { h: "400 vs 422", lang: "js", code: "400  // I could not parse this at all\n422  // I parsed it; the VALUES are wrong", note: "RFC 9110: 422 means the content type was understood and the syntax was fine, but the content was semantically wrong. A failed validation rule is a 422." },
      { h: "about:blank", lang: "js", code: "{ type: \"about:blank\", title: \"Not Found\",\n  status: 404 }", note: "The default when a problem has no identity beyond its status code. If you write about:blank, title should be the status phrase — and you have gained nothing over a bare 404." }
    ],
    lessons: [

      /* ---------- api-u2-1 ---------- */
      {
        id: "api-u2-1",
        title: "The five members",
        kind: "js", chip: "API", xp: 15, mins: 12,
        brief: "Back-End Foundations had you invent an error envelope — `{ error: { code, message } }` — and made the case for using one shape everywhere. That case is won. The problem with inventing it is that **every API invents a different one**, so every client written against yours needs bespoke error handling.\n\n[RFC 9457](https://www.rfc-editor.org/rfc/rfc9457.html) is the standardised version. Five members, all optional:\n\n| Member | What it is |\n|---|---|\n| `type` | a URI identifying the **problem type**. The stable, machine-readable identity. |\n| `title` | a short human summary of the **type** — the same every time |\n| `status` | the HTTP status, repeated in the body |\n| `detail` | what went wrong on **this** occurrence |\n| `instance` | a URI for this specific occurrence |\n\nIt is served as `Content-Type: application/problem+json`, which is how a client knows it can expect this shape rather than guessing.\n\nThe distinction that trips everyone: **`title` describes the type, `detail` describes the occurrence.** \"Item is out of stock\" is a title. \"sku SP-12 has 0 left; you asked for 3\" is a detail.",
        steps: [
          { text: "Write `problem({ type, title, status, detail, instance })` returning a response whose `Content-Type` is `application/problem+json` and whose body carries the five members.",
            test: R`
T.expect(typeof problem === 'function', 'Define problem(spec).');
const p = problem({ type: "https://api.shop.dev/problems/out-of-stock", title: "Item is out of stock", status: 409, detail: "sku SP-12 has 0 left; you asked for 3", instance: "/api/orders/8812" });
T.eq(p.status, 409, 'the response status must match the problem\'s status');
T.eq(p.headers["Content-Type"], "application/problem+json", 'a problem document is served as application/problem+json, not application/json');
T.eq(p.body, { type: "https://api.shop.dev/problems/out-of-stock", title: "Item is out of stock", status: 409, detail: "sku SP-12 has 0 left; you asked for 3", instance: "/api/orders/8812" }, 'the body carries all five members');
` },
          { text: "A problem with no `type` defaults to `about:blank`, and then its `title` should be the status phrase. Fill both in when they are missing.",
            test: R`
const bare = problem({ status: 404 });
T.eq(bare.body.type, "about:blank", 'a problem with no type defaults to about:blank');
T.eq(bare.body.title, "Not Found", 'with about:blank, the title should be the status phrase — "Not Found" for 404');
T.eq(bare.status, 404, 'and the response status still matches');
const other = problem({ status: 409 });
T.eq(other.body.title, "Conflict", 'the phrase comes from the status: 409 is "Conflict"');
T.expect(bare.body.detail === undefined, 'members you were not given must be left out entirely, not set to null or ""');
` },
          { text: "Wire it into a handler. `GET /api/orders/:id` answers the order, or a typed problem when there is no such order.",
            test: R`
T.expect(typeof handleRequest === 'function', 'Define handleRequest(req).');
const ok = handleRequest({ method: "GET", path: "/api/orders/1" });
T.eq(ok.status, 200, 'an order that exists comes back 200');
T.eq(ok.headers["Content-Type"], "application/json", 'a SUCCESS is ordinary application/json — problem+json is only for problems');
const missing = handleRequest({ method: "GET", path: "/api/orders/77" });
T.eq(missing.status, 404, 'a missing order is a 404');
T.eq(missing.headers["Content-Type"], "application/problem+json", 'and the 404 is a problem document');
T.eq(missing.body.type, "https://api.shop.dev/problems/no-such-order", 'with a type URI identifying the problem KIND');
T.eq(missing.body.title, "No such order", 'a title describing that kind');
T.eq(missing.body.detail, "There is no order with id 77", 'and a detail describing THIS occurrence, naming the id that was asked for');
T.eq(missing.body.instance, "/api/orders/77", 'instance identifies this occurrence');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// RFC 9457. Five members, all optional — but `type` is the identity a",
            "// client is allowed to branch on, and `title`/`detail` are prose.",
            "",
            "const orders = [",
            "  { id: 1, sku: \"SP-12\", qty: 2 }",
            "];",
            "",
            "const PHRASE = { 400: \"Bad Request\", 404: \"Not Found\", 409: \"Conflict\", 422: \"Unprocessable Content\" };",
            "const BASE = \"https://api.shop.dev/problems/\";",
            "",
            "function problem(spec) {",
            "  // Build { type, title, status, detail, instance }, leaving out anything",
            "  // you were not given. Default type to \"about:blank\", and when it IS",
            "  // about:blank default the title to PHRASE[status].",
            "  // Serve it as application/problem+json.",
            "}",
            "",
            "function json(status, body) {",
            "  return { status: status, headers: { \"Content-Type\": \"application/json\" }, body: body };",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (req.method === \"GET\" && req.path.startsWith(\"/api/orders/\")) {",
            "    const id = Number(req.path.split(\"/\")[3]);",
            "    const found = orders.find(o => o.id === id);",
            "    if (found) return json(200, found);",
            "    // return a problem: type BASE + \"no-such-order\", title \"No such order\",",
            "    // status 404, detail naming the id, instance = req.path",
            "  }",
            "  return problem({ status: 404 });",
            "}",
            "") }
        ],
        hints: [
          "Build the body up a field at a time so absent members stay absent: `const body = { type: spec.type || \"about:blank\" };` then `if (spec.title !== undefined) body.title = spec.title;` and so on.",
          "The title default only applies when the type ended up as about:blank: `if (body.type === \"about:blank\" && body.title === undefined) body.title = PHRASE[spec.status];`",
          "Set `body.status = spec.status` too — the status is repeated inside the body on purpose, so a problem document that gets logged or forwarded still says what it was.",
          "In the handler: `return problem({ type: BASE + \"no-such-order\", title: \"No such order\", status: 404, detail: \"There is no order with id \" + id, instance: req.path });`"
        ],
        solution: {
          "script.js": L(
            "// RFC 9457. Five members, all optional — but `type` is the identity a",
            "// client is allowed to branch on, and `title`/`detail` are prose.",
            "",
            "const orders = [",
            "  { id: 1, sku: \"SP-12\", qty: 2 }",
            "];",
            "",
            "const PHRASE = { 400: \"Bad Request\", 404: \"Not Found\", 409: \"Conflict\", 422: \"Unprocessable Content\" };",
            "const BASE = \"https://api.shop.dev/problems/\";",
            "",
            "function problem(spec) {",
            "  const body = { type: spec.type || \"about:blank\" };",
            "  if (spec.title !== undefined) body.title = spec.title;",
            "  if (body.type === \"about:blank\" && body.title === undefined) body.title = PHRASE[spec.status];",
            "  if (spec.status !== undefined) body.status = spec.status;",
            "  if (spec.detail !== undefined) body.detail = spec.detail;",
            "  if (spec.instance !== undefined) body.instance = spec.instance;",
            "  return {",
            "    status: spec.status,",
            "    headers: { \"Content-Type\": \"application/problem+json\" },",
            "    body: body",
            "  };",
            "}",
            "",
            "function json(status, body) {",
            "  return { status: status, headers: { \"Content-Type\": \"application/json\" }, body: body };",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (req.method === \"GET\" && req.path.startsWith(\"/api/orders/\")) {",
            "    const id = Number(req.path.split(\"/\")[3]);",
            "    const found = orders.find(o => o.id === id);",
            "    if (found) return json(200, found);",
            "    return problem({",
            "      type: BASE + \"no-such-order\",",
            "      title: \"No such order\",",
            "      status: 404,",
            "      detail: \"There is no order with id \" + id,",
            "      instance: req.path",
            "    });",
            "  }",
            "  return problem({ status: 404 });",
            "}",
            "")
        }
      },

      /* ---------- api-u2-2 ---------- */
      {
        id: "api-u2-2",
        title: "Extension members, and the 422",
        kind: "js", chip: "API", xp: 15, mins: 12,
        brief: "The five members cannot describe a form with three bad fields, and RFC 9457 knows it: **any member beyond the five is yours to add.** That is what extension members are for, and field-level validation errors are the canonical use.\n\nThe status matters here too. `400 Bad Request` means *I could not parse that*. A body that parsed perfectly but whose values break your rules is a different failure, and HTTP has a code for it: **`422 Unprocessable Content`** — the syntax was fine, the semantics were not.\n\nBack-End Foundations had you build a validator returning an array of problem strings. Those strings were for a human reading a console. Now they have to be for a **client rendering a form**, which means each one needs to say *which field* it is about.\n\nBuild `validateSignup(body)` returning `[{ field, message }]`, and turn a non-empty result into a 422 problem document carrying them under an `errors` extension member.",
        steps: [
          { text: "`validateSignup(body)` returns an array of `{ field, message }` — empty when the body is good. Rules in order: `email` must contain `@`, `age` must be a number of at least 18, `name` must not be empty.",
            test: R`
T.expect(typeof validateSignup === 'function', 'Define validateSignup(body).');
T.eq(validateSignup({ email: "ada@calc.io", age: 36, name: "Ada" }), [], 'a valid body returns an empty array');
T.eq(validateSignup({ email: "nope", age: 36, name: "Ada" }), [{ field: "email", message: "must contain @" }], 'a bad email reports the FIELD it is about, not just a sentence');
T.eq(validateSignup({ email: "ada@calc.io", age: 12, name: "Ada" }), [{ field: "age", message: "must be at least 18" }], 'an under-age signup names the age field');
T.eq(validateSignup({}), [{ field: "email", message: "must contain @" }, { field: "age", message: "must be at least 18" }, { field: "name", message: "must not be empty" }], 'an empty body collects ALL THREE, in rule order — one round trip fixes the whole form');
` },
          { text: "`POST /api/signups` answers `422` with a problem document carrying the failures under an `errors` extension member.",
            test: R`
const bad = handleRequest({ method: "POST", path: "/api/signups", body: { email: "nope", age: 12, name: "" } });
T.eq(bad.status, 422, 'a body that parsed but broke the rules is a 422, not a 400');
T.eq(bad.headers["Content-Type"], "application/problem+json", 'it is a problem document');
T.eq(bad.body.type, "https://api.shop.dev/problems/validation-failed", 'with a type a client can branch on');
T.eq(bad.body.status, 422, 'the status is repeated in the body');
T.eq(bad.body.errors, [{ field: "email", message: "must contain @" }, { field: "age", message: "must be at least 18" }, { field: "name", message: "must not be empty" }], 'the field errors ride in the "errors" extension member');
` },
          { text: "A body that is not an object at all never reaches the rules — that is a `400`, because there was nothing to validate. A good body creates the signup.",
            test: R`
const unparseable = handleRequest({ method: "POST", path: "/api/signups", body: null });
T.eq(unparseable.status, 400, 'no body to validate is a 400 — I could not read that');
T.eq(unparseable.body.type, "https://api.shop.dev/problems/malformed-body", 'and a different type, because it is a different problem');
T.expect(unparseable.body.errors === undefined, 'a 400 has no field errors — the failure was not about any field');
const good = handleRequest({ method: "POST", path: "/api/signups", body: { email: "ada@calc.io", age: 36, name: "Ada" } });
T.eq(good.status, 201, 'a valid signup is created');
T.eq(good.headers["Content-Type"], "application/json", 'a success is ordinary JSON, never problem+json');
T.eq(good.body, { id: 1, email: "ada@calc.io", age: 36, name: "Ada" }, 'and comes back with its new id');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// 400 = I could not parse that.  422 = I parsed it, the values are wrong.",
            "// Field errors ride in an extension member, which RFC 9457 leaves room",
            "// for on purpose.",
            "",
            "const signups = [];",
            "let nextId = 1;",
            "const BASE = \"https://api.shop.dev/problems/\";",
            "",
            "function problem(spec) {",
            "  const body = { type: spec.type || \"about:blank\" };",
            "  if (spec.title !== undefined) body.title = spec.title;",
            "  if (spec.status !== undefined) body.status = spec.status;",
            "  if (spec.detail !== undefined) body.detail = spec.detail;",
            "  if (spec.errors !== undefined) body.errors = spec.errors;",
            "  return { status: spec.status, headers: { \"Content-Type\": \"application/problem+json\" }, body: body };",
            "}",
            "",
            "function json(status, body) {",
            "  return { status: status, headers: { \"Content-Type\": \"application/json\" }, body: body };",
            "}",
            "",
            "function validateSignup(body) {",
            "  const errors = [];",
            "  // 1) email must contain \"@\"       -> { field: \"email\", message: \"must contain @\" }",
            "  // 2) age must be a number >= 18    -> { field: \"age\",   message: \"must be at least 18\" }",
            "  // 3) name must not be empty        -> { field: \"name\",  message: \"must not be empty\" }",
            "  return errors;",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (req.method === \"POST\" && req.path === \"/api/signups\") {",
            "    // no object body at all -> 400 problem, type BASE + \"malformed-body\"",
            "    // validation errors     -> 422 problem, type BASE + \"validation-failed\", errors: [...]",
            "    // otherwise             -> 201 with the created signup",
            "  }",
            "  return problem({ status: 404 });",
            "}",
            "") }
        ],
        hints: [
          "Each rule is a guard that pushes an object: `if (!body.email || !body.email.includes(\"@\")) errors.push({ field: \"email\", message: \"must contain @\" });`",
          "The age rule has to survive a missing value: `if (typeof body.age !== \"number\" || body.age < 18) errors.push({ field: \"age\", message: \"must be at least 18\" });`",
          "The malformed-body guard comes first and checks the shape, not the fields: `if (!req.body || typeof req.body !== \"object\") return problem({ type: BASE + \"malformed-body\", title: \"Malformed request body\", status: 400, detail: \"Expected a JSON object\" });`",
          "Then: `const errors = validateSignup(req.body); if (errors.length) return problem({ type: BASE + \"validation-failed\", title: \"Validation failed\", status: 422, detail: errors.length + \" field(s) are invalid\", errors: errors });`"
        ],
        solution: {
          "script.js": L(
            "// 400 = I could not parse that.  422 = I parsed it, the values are wrong.",
            "// Field errors ride in an extension member, which RFC 9457 leaves room",
            "// for on purpose.",
            "",
            "const signups = [];",
            "let nextId = 1;",
            "const BASE = \"https://api.shop.dev/problems/\";",
            "",
            "function problem(spec) {",
            "  const body = { type: spec.type || \"about:blank\" };",
            "  if (spec.title !== undefined) body.title = spec.title;",
            "  if (spec.status !== undefined) body.status = spec.status;",
            "  if (spec.detail !== undefined) body.detail = spec.detail;",
            "  if (spec.errors !== undefined) body.errors = spec.errors;",
            "  return { status: spec.status, headers: { \"Content-Type\": \"application/problem+json\" }, body: body };",
            "}",
            "",
            "function json(status, body) {",
            "  return { status: status, headers: { \"Content-Type\": \"application/json\" }, body: body };",
            "}",
            "",
            "function validateSignup(body) {",
            "  const errors = [];",
            "  if (!body.email || !body.email.includes(\"@\")) {",
            "    errors.push({ field: \"email\", message: \"must contain @\" });",
            "  }",
            "  if (typeof body.age !== \"number\" || body.age < 18) {",
            "    errors.push({ field: \"age\", message: \"must be at least 18\" });",
            "  }",
            "  if (!body.name) {",
            "    errors.push({ field: \"name\", message: \"must not be empty\" });",
            "  }",
            "  return errors;",
            "}",
            "",
            "function handleRequest(req) {",
            "  if (req.method === \"POST\" && req.path === \"/api/signups\") {",
            "    if (!req.body || typeof req.body !== \"object\") {",
            "      return problem({",
            "        type: BASE + \"malformed-body\",",
            "        title: \"Malformed request body\",",
            "        status: 400,",
            "        detail: \"Expected a JSON object\"",
            "      });",
            "    }",
            "    const errors = validateSignup(req.body);",
            "    if (errors.length) {",
            "      return problem({",
            "        type: BASE + \"validation-failed\",",
            "        title: \"Validation failed\",",
            "        status: 422,",
            "        detail: errors.length + \" field(s) are invalid\",",
            "        errors: errors",
            "      });",
            "    }",
            "    const created = { id: nextId++, email: req.body.email, age: req.body.age, name: req.body.name };",
            "    signups.push(created);",
            "    return json(201, created);",
            "  }",
            "  return problem({ status: 404 });",
            "}",
            "")
        }
      },

      /* ---------- api-u2-3 ---------- */
      {
        id: "api-u2-3",
        title: "Branch on type, never on prose",
        kind: "js", chip: "API", xp: 15, mins: 12,
        brief: "Here is the payoff, and the reason `type` exists at all.\n\nA client has to *do different things* for different failures: retry on one, show a form on another, send the user to top up their balance on a third. It needs to tell them apart. There are three things it could key on:\n\n- **the status code** — too coarse. Three different 409s mean three different things.\n- **`title` or `detail`** — prose. You will reword it, translate it, or add the offending value to it, and every client that matched on the string breaks silently.\n- **`type`** — a URI you promised not to change. This is the one.\n\nThat promise is the contract. Once `https://api.shop.dev/problems/out-of-stock` is published, the URI is frozen even if the wording around it changes completely.\n\nWrite the **client** side this time: a `reactTo(problem)` that decides what to do, keyed on `type`. Then prove the promise holds by rewording every human-facing string and re-running the same checks.",
        steps: [
          { text: "`reactTo(p)` maps a problem document to an action: `out-of-stock` → `\"show-backorder\"`, `validation-failed` → `\"show-form-errors\"`, `rate-limited` → `\"retry-later\"`. Anything else → `\"show-generic-error\"`.",
            test: R`
T.expect(typeof reactTo === 'function', 'Define reactTo(problem).');
T.eq(reactTo({ type: "https://api.shop.dev/problems/out-of-stock", title: "Item is out of stock", status: 409 }), "show-backorder", 'out-of-stock offers a backorder');
T.eq(reactTo({ type: "https://api.shop.dev/problems/validation-failed", title: "Validation failed", status: 422 }), "show-form-errors", 'validation-failed shows the field errors');
T.eq(reactTo({ type: "https://api.shop.dev/problems/rate-limited", title: "Too many requests", status: 429 }), "retry-later", 'rate-limited means wait and try again');
T.eq(reactTo({ type: "https://api.shop.dev/problems/teapot", title: "I am a teapot", status: 418 }), "show-generic-error", 'an unrecognised type falls back to something safe');
T.eq(reactTo({ type: "about:blank", title: "Not Found", status: 404 }), "show-generic-error", 'about:blank carries no identity, so it can only be handled generically');
` },
          { text: "Now the promise. The server rewords every human-facing string — new titles, new details, a translation. `reactTo` must return exactly the same answers.",
            test: R`
T.eq(reactTo({ type: "https://api.shop.dev/problems/out-of-stock", title: "Rupture de stock", status: 409, detail: "il ne reste rien" }), "show-backorder", 'a translated title must not change the client\'s behaviour');
T.eq(reactTo({ type: "https://api.shop.dev/problems/validation-failed", title: "We could not accept that form", status: 400 }), "show-form-errors", 'a reworded title AND a changed status must not change it either — the type is the identity');
T.eq(reactTo({ type: "https://api.shop.dev/problems/rate-limited", title: "Slow down!", status: 429, detail: "try again in 30s" }), "retry-later", 'same type, different prose, same decision');
` },
          { text: "Show the failure mode you are avoiding. `fragileReactTo(p)` matches on `title` text; log what each one decides for the reworded out-of-stock problem.",
            test: R`
const reworded = { type: "https://api.shop.dev/problems/out-of-stock", title: "Rupture de stock", status: 409 };
T.eq(fragileReactTo({ type: "https://api.shop.dev/problems/out-of-stock", title: "Item is out of stock", status: 409 }), "show-backorder", 'the fragile client works on the ORIGINAL wording');
T.eq(fragileReactTo(reworded), "show-generic-error", 'and silently degrades the moment the wording changes — no error, just the wrong screen');
T.eq(reactTo(reworded), "show-backorder", 'while the type-keyed client is unaffected');
T.expect(T.logged("show-backorder"), 'log both decisions for the reworded problem so you can see them disagree');
T.expect(T.logged("show-generic-error"), 'the fragile one should print show-generic-error for the same input');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// A problem's `type` is a URI you promise not to change. `title` and",
            "// `detail` are prose you WILL change. Clients must key on the promise.",
            "",
            "const BASE = \"https://api.shop.dev/problems/\";",
            "",
            "function reactTo(p) {",
            "  // Key on p.type:",
            "  //   BASE + \"out-of-stock\"      -> \"show-backorder\"",
            "  //   BASE + \"validation-failed\" -> \"show-form-errors\"",
            "  //   BASE + \"rate-limited\"      -> \"retry-later\"",
            "  //   anything else              -> \"show-generic-error\"",
            "}",
            "",
            "// The version that looks reasonable and is a time bomb.",
            "function fragileReactTo(p) {",
            "  if (p.title === \"Item is out of stock\") return \"show-backorder\";",
            "  if (p.title === \"Validation failed\") return \"show-form-errors\";",
            "  if (p.title === \"Too many requests\") return \"retry-later\";",
            "  return \"show-generic-error\";",
            "}",
            "",
            "// log both decisions for the same reworded problem",
            "") }
        ],
        hints: [
          "A lookup object reads better than an if-chain and makes the contract visible in one place: `const ACTIONS = { [BASE + \"out-of-stock\"]: \"show-backorder\", … };`",
          "Then one line with a fallback: `return ACTIONS[p.type] || \"show-generic-error\";`",
          "For the last checkpoint: `const reworded = { type: BASE + \"out-of-stock\", title: \"Rupture de stock\", status: 409 };` then `console.log(reactTo(reworded)); console.log(fragileReactTo(reworded));`"
        ],
        solution: {
          "script.js": L(
            "// A problem's `type` is a URI you promise not to change. `title` and",
            "// `detail` are prose you WILL change. Clients must key on the promise.",
            "",
            "const BASE = \"https://api.shop.dev/problems/\";",
            "",
            "const ACTIONS = {",
            "  [BASE + \"out-of-stock\"]: \"show-backorder\",",
            "  [BASE + \"validation-failed\"]: \"show-form-errors\",",
            "  [BASE + \"rate-limited\"]: \"retry-later\"",
            "};",
            "",
            "function reactTo(p) {",
            "  return ACTIONS[p.type] || \"show-generic-error\";",
            "}",
            "",
            "// The version that looks reasonable and is a time bomb.",
            "function fragileReactTo(p) {",
            "  if (p.title === \"Item is out of stock\") return \"show-backorder\";",
            "  if (p.title === \"Validation failed\") return \"show-form-errors\";",
            "  if (p.title === \"Too many requests\") return \"retry-later\";",
            "  return \"show-generic-error\";",
            "}",
            "",
            "// log both decisions for the same reworded problem",
            "const reworded = { type: BASE + \"out-of-stock\", title: \"Rupture de stock\", status: 409 };",
            "console.log(reactTo(reworded));          // show-backorder",
            "console.log(fragileReactTo(reworded));   // show-generic-error",
            "")
        }
      },

      /* ---------- api-u2-4 ---------- */
      {
        id: "api-u2-4",
        title: "Migrating an envelope without breaking anyone",
        kind: "js", chip: "API", xp: 20, mins: 14,
        brief: "You have a live API that answers errors in the shape Back-End Foundations taught:\n\n```\n{ error: { code: \"not_found\", message: \"No gadget with id 5\" } }\n```\n\nClients in the wild read `body.error.code`. You want problem+json. You cannot simply swap the shape — that breaks every one of them on deploy.\n\nThe move is the one every real API migration uses: **serve both, let the client choose, and give the old shape an expiry date.** A client that asks for `application/problem+json` in its `Accept` header gets the new shape; everyone else keeps the old one, plus a `Deprecation` header telling them the clock is running.\n\nThe mapping has to be exact, because the old `code` is what clients branch on today and the new `type` is what they will branch on tomorrow. `not_found` becomes `…/problems/not-found` — and the two must mean the same thing forever.",
        steps: [
          { text: "`errorFor(code, message, status, accept)` returns the OLD envelope when `accept` does not ask for problem+json.",
            test: R`
T.expect(typeof errorFor === 'function', 'Define errorFor(code, message, status, accept).');
const old = errorFor("not_found", "No gadget with id 5", 404, "application/json");
T.eq(old.status, 404, 'the status is the same in both shapes');
T.eq(old.headers["Content-Type"], "application/json", 'the old shape is plain application/json');
T.eq(old.body, { error: { code: "not_found", message: "No gadget with id 5" } }, 'the old envelope is unchanged, byte for byte — existing clients must not notice anything');
const noAccept = errorFor("not_found", "No gadget with id 5", 404, undefined);
T.eq(noAccept.body, { error: { code: "not_found", message: "No gadget with id 5" } }, 'a client that sends no Accept at all is an OLD client — default to the old shape');
` },
          { text: "A client that asks for `application/problem+json` gets the new shape, with `code` mapped to a `type` URI.",
            test: R`
const nu = errorFor("not_found", "No gadget with id 5", 404, "application/problem+json");
T.eq(nu.headers["Content-Type"], "application/problem+json", 'the new shape declares itself');
T.eq(nu.body.type, "https://api.shop.dev/problems/not-found", 'not_found maps to .../problems/not-found — underscores become hyphens');
T.eq(nu.body.status, 404, 'the status is repeated in the body');
T.eq(nu.body.detail, "No gadget with id 5", 'the old message becomes the detail — it described THIS occurrence');
T.expect(nu.body.error === undefined, 'the new shape must not also carry the old envelope — pick one per response');
const mixed = errorFor("rate_limited", "Slow down", 429, "text/html, application/problem+json;q=0.9");
T.eq(mixed.body.type, "https://api.shop.dev/problems/rate-limited", 'problem+json anywhere in the Accept list is enough');
` },
          { text: "Old-shape responses carry a `Deprecation` header so the clock is visible. New-shape responses do not — there is nothing deprecated about them.",
            test: R`
const old = errorFor("not_found", "gone", 404, "application/json");
T.eq(old.headers["Deprecation"], "true", 'the old shape is served with Deprecation: true');
T.eq(old.headers["Sunset"], "Wed, 01 Jul 2026 00:00:00 GMT", 'and a Sunset date saying when it stops');
const nu = errorFor("not_found", "gone", 404, "application/problem+json");
T.expect(nu.headers["Deprecation"] === undefined, 'the NEW shape is not deprecated, so it carries no Deprecation header');
T.expect(nu.headers["Sunset"] === undefined, 'nor a Sunset');
T.eq(errorFor("bad_request", "nope", 400, "application/problem+json").body.type, "https://api.shop.dev/problems/bad-request", 'the mapping is mechanical: every underscore in a code becomes a hyphen in the URI');
` }
        ],
        files: [
          { name: "script.js", content: L(
            "// Migrating a live error shape. Serve both, let Accept choose, and put",
            "// an expiry date on the old one. Nobody breaks on deploy.",
            "",
            "const BASE = \"https://api.shop.dev/problems/\";",
            "const SUNSET = \"Wed, 01 Jul 2026 00:00:00 GMT\";",
            "",
            "function wantsProblem(accept) {",
            "  // true when the client mentioned application/problem+json at all",
            "}",
            "",
            "function typeFor(code) {",
            "  // \"not_found\" -> BASE + \"not-found\"",
            "}",
            "",
            "function errorFor(code, message, status, accept) {",
            "  // new client -> problem+json: { type, status, detail }",
            "  //               Content-Type: application/problem+json, no Deprecation",
            "  // old client -> { error: { code, message } }",
            "  //               Content-Type: application/json,",
            "  //               Deprecation: \"true\", Sunset: SUNSET",
            "}",
            "") }
        ],
        hints: [
          "`wantsProblem` only has to look for the substring: `return String(accept || \"\").includes(\"application/problem+json\");` — the `|| \"\"` is what makes a missing Accept read as an old client.",
          "`typeFor` is one replace, and it must be global or only the first underscore changes: `return BASE + code.replace(/_/g, \"-\");`",
          "New shape: `return { status, headers: { \"Content-Type\": \"application/problem+json\" }, body: { type: typeFor(code), status, detail: message } };`",
          "Old shape: same status, but `headers: { \"Content-Type\": \"application/json\", \"Deprecation\": \"true\", \"Sunset\": SUNSET }` and `body: { error: { code, message } }`."
        ],
        solution: {
          "script.js": L(
            "// Migrating a live error shape. Serve both, let Accept choose, and put",
            "// an expiry date on the old one. Nobody breaks on deploy.",
            "",
            "const BASE = \"https://api.shop.dev/problems/\";",
            "const SUNSET = \"Wed, 01 Jul 2026 00:00:00 GMT\";",
            "",
            "function wantsProblem(accept) {",
            "  return String(accept || \"\").includes(\"application/problem+json\");",
            "}",
            "",
            "function typeFor(code) {",
            "  return BASE + code.replace(/_/g, \"-\");",
            "}",
            "",
            "function errorFor(code, message, status, accept) {",
            "  if (wantsProblem(accept)) {",
            "    return {",
            "      status: status,",
            "      headers: { \"Content-Type\": \"application/problem+json\" },",
            "      body: { type: typeFor(code), status: status, detail: message }",
            "    };",
            "  }",
            "  return {",
            "    status: status,",
            "    headers: {",
            "      \"Content-Type\": \"application/json\",",
            "      \"Deprecation\": \"true\",",
            "      \"Sunset\": SUNSET",
            "    },",
            "    body: { error: { code: code, message: message } }",
            "  };",
            "}",
            "")
        }
      },

      /* ---------- api-quiz-2 ---------- */
      {
        id: "api-quiz-2",
        title: "Unit 2 quiz: problem documents",
        kind: "quiz", chip: "API", xp: 20, mins: 6,
        questions: [
          {
            q: "In a problem document, what is the difference between `title` and `detail`?",
            choices: [
              "`title` describes the problem type and is the same every time; `detail` describes this one occurrence",
              "`title` is for developers and `detail` is the message that must be shown to the end user verbatim",
              "`title` is required by RFC 9457 while `detail` is an optional extension member you define yourself",
              "`title` is a short form of `detail`, truncated by the server so it fits in a log line or an alert"
            ],
            answer: 0,
            explain: "\"Item is out of stock\" is true of every occurrence of that problem type, so it is the title. \"sku SP-12 has 0 left; you asked for 3\" is true only of this one, so it is the detail. Both are optional, both are prose for humans, and neither is safe to branch on."
          },
          {
            q: "Your API publishes `type: \"https://api.shop.dev/problems/out-of-stock\"`. Six months later you reword the title and translate it. What must stay fixed?",
            choices: [
              "The `title`, because clients that already shipped are matching on its exact text",
              "The `type` URI, because that is the identifier clients are promised they can branch on",
              "The `status`, because a client's retry logic is derived from the status code alone",
              "Nothing — a problem document is advisory, so any member may change between releases"
            ],
            answer: 1,
            explain: "The whole point of a separate `type` member is to give clients something stable to key on, precisely so that prose stays free to change. Even the status can move — a validation failure reclassified from 400 to 422 is the same problem type — but the URI is frozen once published."
          },
          {
            q: "A client POSTs valid JSON, but `age` is 12 and your rule requires 18. Which status, and why?",
            choices: [
              "`400 Bad Request`, because any request the server refuses to act on is by definition a bad request",
              "`422 Unprocessable Content`, because the syntax was fine and the values were not",
              "`409 Conflict`, because the submitted value conflicts with a rule the server is enforcing",
              "`403 Forbidden`, because the server understood the request and is refusing to fulfil it"
            ],
            answer: 1,
            explain: "400 means the server could not parse or understand the request at all. Here it parsed perfectly — the content was well-formed and simply semantically wrong, which is exactly what 422 is for. 409 is for a conflict with the resource's current state, and 403 is about authorisation, not about values."
          },
          {
            q: "Where do field-level validation errors belong in a problem document?",
            choices: [
              "In `detail`, as a single human-readable sentence listing every field that failed",
              "In an extension member such as `errors`, since RFC 9457 allows members beyond the five",
              "They cannot be expressed — problem+json supports exactly five members and nothing else",
              "In `instance`, which is the member reserved for data specific to this particular occurrence"
            ],
            answer: 1,
            explain: "RFC 9457 explicitly permits extension members, and this is their canonical use. Cramming the list into `detail` forces the client to parse prose, which defeats the point. `instance` is a URI identifying the occurrence, not a slot for structured data."
          },
          {
            q: "You are migrating from a home-grown `{ error: { code, message } }` envelope to problem+json on a live API. What makes a content-negotiated rollout safer than simply switching the shape?",
            choices: [
              "It is faster to deploy, because only the clients that opt in need any server-side change at all",
              "Existing clients keep the shape they were written against until they choose to move",
              "It avoids a version bump, and an API that never changes its version number cannot break a client",
              "problem+json cannot be served over `application/json`, so negotiating the media type is mandatory here"
            ],
            answer: 1,
            explain: "Switching the shape breaks every deployed client at once, and you do not control their release schedules. Letting `Accept` decide means the old contract holds until each client opts in, and a `Deprecation`/`Sunset` pair tells them how long they have. Version numbers are orthogonal — you can break clients perfectly well while bumping one."
          },
          {
            q: "A problem document arrives with `type: \"about:blank\"` and `title: \"Not Found\"`. What has the client actually been told?",
            choices: [
              "That the problem is still being classified and the client should retry to obtain a typed response",
              "Nothing beyond the 404 status itself — `about:blank` is the absence of a problem type",
              "That the resource existed but has been permanently removed, which `about:blank` signals specifically",
              "That the server encountered an error it could not categorise and the request should be treated as failed"
            ],
            answer: 1,
            explain: "`about:blank` is the defined default meaning \"this problem has no identity beyond its status code\", and the convention is that `title` then just restates the status phrase. It is perfectly legal, but a client gains nothing it did not already have from the 404 — which is why a typed URI is worth defining whenever a client might reasonably act on the distinction."
          }
        ]
      }
    ]
  });
})();
