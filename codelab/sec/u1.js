/* Web Security Basics — Unit 1: Trust boundaries: every input is a lie */
window.CODELAB.addUnit("sec", {
  id: "sec-u1",
  title: "Trust boundaries: every input is a lie",
  icon: "🛡️",
  blurb: "The mindset the whole course stands on: where data comes from decides how you treat it — and almost nothing coming toward your server is trustworthy.",
  cheat: [
    { h: "Trusted vs untrusted", lang: "js", code: "// TRUSTED — only your server can set it\nconst constant = \"v2\";      // hardcoded in your source\nconst secret = env.API_KEY;  // set on the server\n\n// UNTRUSTED — someone else can change it\nreq.body.price   // the client typed this\nreq.headers      // trivially spoofed\ndocument.cookie  // the browser holds it", note: "A source is untrusted if ANYONE but your server can influence it before it reaches you." },
    { h: "The two that fool everyone", lang: "js", code: "localStorage.getItem(\"cart\") // UNTRUSTED: user edits it in devtools\nawait fetch(\"/api/me\")        // UNTRUSTED: the DB may hold a poisoned row", note: "\"It came from my own code / my own API\" is not the same as \"an attacker couldn't touch it.\"" },
    { h: "Never trust a client value with money or permission on it", lang: "js", code: "// ✗ the client decides the price\nconst total = req.body.price;\n\n// ✓ the SERVER decides the price\nconst total = PRODUCTS[req.body.id];", note: "Anything the client sends is a request, not a fact — re-derive it server-side." },
    { h: "Fail closed", lang: "js", code: "function canAccess(user, doc) {\n  if (!user || typeof user !== \"object\") return false; // reject junk\n  if (typeof user.role !== \"string\") return false;\n  return user.role === \"admin\";  // grant only the known-good case\n}", note: "When state is missing or malformed, DENY. The default answer is no; you earn a yes." },
    { h: "Client checks are UX; the server is security", lang: "js", code: "<input required pattern=\"[a-z0-9_]+\"> <!-- helps honest users -->\n// …but a curl request never opened your form, so the server\n// must re-check EVERY value it receives.", note: "You wrote `required`/`pattern` in Learn HTML. They're a courtesy, not a guard." }
  ],
  lessons: [

    {
      id: "sec-u1-1",
      title: "Every input is a lie",
      kind: "js", chip: "SEC", xp: 15, mins: 12,
      brief: "Security starts before any code: with a single question about every value your program touches — **who could have changed this?**\n\nData splits into **trusted** (only your server could have set it — a hardcoded constant, an env var, a value your server just computed) and **untrusted** (anyone else could have influenced it — a query string, a form field, a header, a cookie). Untrusted doesn't mean evil; it means *unverified*, and unverified input is the raw material of every attack in this course.\n\nTwo sources fool almost everyone. **`localStorage`** feels like yours because your code wrote it — but the user can rewrite it in devtools in five seconds. **Your own API's response** feels safe because it came from your server — but your server read it from a database that may *already* hold a row an attacker planted. Both are untrusted. Write the classifier that gets those two right.",
      example: { lang: "js", code: "classify(\"an environment variable on the server\"); // \"trusted\"\nclassify(\"URL query string\");                       // \"untrusted\"\nclassify(\"localStorage\");                           // \"untrusted\" (surprised?)" },
      steps: [
        { text: "Write `classify(source)`. The four obvious untrusted sources — `\"URL query string\"`, `\"form field\"`, `\"request header\"`, `\"cookie\"` — return `\"untrusted\"`.",
          test: "T.expect(typeof classify === 'function', 'Define classify(source) returning \"trusted\" or \"untrusted\".');\nT.eq(classify('URL query string'), 'untrusted', 'A query string is whatever the user typed into the URL — untrusted.');\nT.eq(classify('form field'), 'untrusted', 'Form fields are filled in by the user — untrusted.');\nT.eq(classify('request header'), 'untrusted', 'Headers are trivially spoofed by any client — untrusted.');\nT.eq(classify('cookie'), 'untrusted', 'A cookie rides in from the browser, where the user can edit it — untrusted.');" },
        { text: "The three genuinely trusted sources — `\"a hardcoded server constant\"`, `\"an environment variable on the server\"`, `\"a value your server computed this request\"` — return `\"trusted\"`.",
          test: "T.eq(classify('a hardcoded server constant'), 'trusted', 'A constant baked into your source is trusted.');\nT.eq(classify('an environment variable on the server'), 'trusted', 'An env var set on the server is trusted.');\nT.eq(classify('a value your server computed this request'), 'trusted', 'A value your own server just derived is trusted.');" },
        { text: "The two traps: `\"localStorage\"` and `\"our own API response\"` both return `\"untrusted\"`.",
          test: "T.eq(classify('localStorage'), 'untrusted', 'TRAP: localStorage lives in the browser — the user rewrites it in devtools. Untrusted.');\nT.eq(classify('our own API response'), 'untrusted', 'TRAP: your API reads a database that may already hold a poisoned row. Untrusted.');" }
      ],
      files: [
        { name: "script.js", content: "// Which inputs can you trust?\n//   classify(source) → \"trusted\" or \"untrusted\"\n\nconst UNTRUSTED = [\"URL query string\", \"form field\", \"request header\", \"cookie\"];\n\nfunction classify(source) {\n  // in the list? untrusted. otherwise… trust it? (are you sure about localStorage?)\n  return UNTRUSTED.includes(source) ? \"untrusted\" : \"trusted\";\n}\n\nconsole.log(classify(\"localStorage\"));\n" }
      ],
      hints: [
        "A source is untrusted if ANYONE other than your own server can influence it before it reaches you.",
        "The two traps break the naive rule: the user rewrites `localStorage` in devtools, and your database may already hold a row an attacker planted, so `\"our own API response\"` is untrusted too. Add both to your untrusted list.",
        "Bonus for the mindset ahead: make an unrecognised source default to `\"untrusted\"` — when in doubt, don't trust it."
      ],
      solution: {
        "script.js": "// A source is untrusted if anyone but your server can influence it.\n\nconst UNTRUSTED = [\n  \"URL query string\", \"form field\", \"request header\", \"cookie\",\n  \"localStorage\",         // the user edits it in devtools\n  \"our own API response\"  // the DB may already hold a poisoned row\n];\nconst TRUSTED = [\n  \"a hardcoded server constant\",\n  \"an environment variable on the server\",\n  \"a value your server computed this request\"\n];\n\nfunction classify(source) {\n  if (UNTRUSTED.includes(source)) return \"untrusted\";\n  if (TRUSTED.includes(source)) return \"trusted\";\n  return \"untrusted\"; // unknown source? deny by default — treat it as untrusted\n}\n\nconsole.log(classify(\"localStorage\"));\n"
      }
    },

    {
      id: "sec-u1-2",
      title: "The client is not your friend",
      kind: "js", chip: "SEC", xp: 15, mins: 13,
      brief: "In *Learn HTML* you wrote `required` and `pattern` on your form inputs — and they're worth having. But they run in the browser, and **the request that attacks you never opens your form.** A one-line `curl`, a tweaked fetch in devtools, a replayed POST — none of them see your HTML at all. Client-side validation is a courtesy to honest users; it is not a security control.\n\nHere's the lesson in one endpoint. You're handed a working checkout route that computes the order total from `req.body.price`. It passes every happy-path test. It is also catastrophically broken: the client decides how much to pay.\n\nProve the hole — a forged `{ id: \"mug\", price: 0 }` currently charges **0** — then close it. The unit price is a fact only your **server** owns, so look it up in the server-side `PRODUCTS` table and ignore the client's number entirely. A forged price must lose; a legit order must still work; an unknown product must answer **400**, not a total built from `NaN`.",
      example: { lang: "js", code: "// the attacker never touched your form — they sent this directly:\nhandleRequest({ method: \"POST\", path: \"/api/checkout\",\n                body: { id: \"mug\", price: 0 } });\n// vulnerable → total 0.   fixed → total 12, because the SERVER sets the price." },
      steps: [
        { text: "A legit order still works: `POST /api/checkout` with `{ id: \"mug\", qty: 2, price: 12 }` → 200 with `total: 24`.",
          test: "T.expect(typeof handleRequest === 'function', 'Keep handleRequest(req) defined.');\nvar res = handleRequest({ method: 'POST', path: '/api/checkout', body: { id: 'mug', qty: 2, price: 12 } });\nT.eq(res.status, 200, 'A legitimate order should still succeed with 200.');\nT.eq(res.body.total, 24, 'Two mugs at 12 each = 24 — fixing the hole must not break real orders.');" },
        { text: "Close the hole: a forged `{ id: \"mug\", qty: 1, price: 0 }` must charge **12**, and `{ id: \"tee\", qty: 1, price: 1 }` must charge **25** — the price comes from `PRODUCTS`, never from `req.body.price`.",
          test: "var forged = handleRequest({ method: 'POST', path: '/api/checkout', body: { id: 'mug', qty: 1, price: 0 } });\nT.eq(forged.body.total, 12, 'A forged price of 0 must NOT win — a mug is 12 because your SERVER says so.');\nvar forged2 = handleRequest({ method: 'POST', path: '/api/checkout', body: { id: 'tee', qty: 1, price: 1 } });\nT.eq(forged2.body.total, 25, 'Same story for a tee: look the price up server-side and ignore req.body.price.');" },
        { text: "An unknown product id → **400**, never a 200 with a `NaN` total.",
          test: "var res = handleRequest({ method: 'POST', path: '/api/checkout', body: { id: 'widget', qty: 1, price: 5 } });\nT.eq(res.status, 400, 'No such product — answer 400, not a 200 carrying a forged or NaN total.');\nvar legit = handleRequest({ method: 'POST', path: '/api/checkout', body: { id: 'cap', qty: 1, price: 18 } });\nT.expect(!Number.isNaN(legit.body.total), 'A known product must never produce NaN.');\nT.eq(legit.body.total, 18, 'A cap is 18 — the server price, whatever the client claimed.');" }
      ],
      files: [
        { name: "script.js", content: "// Handed to you: a working checkout endpoint. Every happy-path demo passes.\n// PRODUCTS is the price list your SERVER controls — the client never sees it.\nconst PRODUCTS = { mug: 12, tee: 25, cap: 18 };\n\nfunction handleRequest(req) {\n  if (req.method === \"POST\" && req.path === \"/api/checkout\") {\n    const qty = req.body.qty || 1;\n    // ✗ trusting the client's price — this is the hole\n    const total = req.body.price * qty;\n    return { status: 200, body: { id: req.body.id, total: total } };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\nconsole.log(handleRequest({ method: \"POST\", path: \"/api/checkout\", body: { id: \"mug\", price: 0 } }));\n" }
      ],
      hints: [
        "The client sends `price`, but the client is not your friend — a value with money attached must never come from `req.body`.",
        "Look it up on the server: `const unit = PRODUCTS[req.body.id];` then compute `total` from `unit * qty`, dropping `req.body.price` on the floor.",
        "Guard the unknown id BEFORE any arithmetic: `if (unit === undefined) return { status: 400, body: { error: \"unknown product\" } };` — that's what stops the `NaN`."
      ],
      solution: {
        "script.js": "// PRODUCTS is the price list your SERVER controls — the client never sees it.\nconst PRODUCTS = { mug: 12, tee: 25, cap: 18 };\n\nfunction handleRequest(req) {\n  if (req.method === \"POST\" && req.path === \"/api/checkout\") {\n    const qty = req.body.qty || 1;\n    const unit = PRODUCTS[req.body.id];\n    if (unit === undefined) {\n      return { status: 400, body: { error: \"unknown product\" } };\n    }\n    // ✓ the price is the SERVER's fact — the client's number is ignored\n    const total = unit * qty;\n    return { status: 200, body: { id: req.body.id, total: total } };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\nconsole.log(handleRequest({ method: \"POST\", path: \"/api/checkout\", body: { id: \"mug\", price: 0 } }));\n"
      }
    },

    {
      id: "sec-u1-3",
      title: "Fail closed",
      kind: "js", chip: "SEC", xp: 15, mins: 13,
      brief: "The last piece of the mindset: decide what happens when the input is **missing or malformed**. There are two ways to be wrong, and only one of them is safe.\n\n**Fail open**: something's off, so wave it through. **Fail closed**: something's off, so deny. A permission check that throws on a `null` user, or that quietly returns a truthy value for a weird shape, is how an attacker walks in — sending garbage until the guard breaks in their favour.\n\nWrite `canAccess(user, doc)` that fails closed. Access is granted for exactly one shape — a real object whose `role` is the string `\"admin\"`, checking a real document. Every other input — `undefined`, `null`, `{}`, `{ role: undefined }`, a wrong-cased `\"ADMIN\"`, a string, a number, an array — must return **exactly `false`**, and *none* of them may throw. Deny-by-default graded literally: no input crashes it, and no unexpected input passes.",
      example: { lang: "js", code: "canAccess({ role: \"admin\" }, { id: \"doc1\" }); // true — the one good shape\ncanAccess(null, { id: \"doc1\" });              // false, and NO crash\ncanAccess({ role: \"ADMIN\" }, { id: \"doc1\" }); // false — \"admin\" is exact" },
      steps: [
        { text: "The one valid shape passes; a valid-but-unauthorised one is denied (not crashed). `canAccess({ role: \"admin\" }, doc)` → `true`; `canAccess({ role: \"user\" }, doc)` → `false`.",
          test: "T.expect(typeof canAccess === 'function', 'Define canAccess(user, doc).');\nvar doc = { id: 'doc1', ownerName: 'ada' };\nT.eq(canAccess({ role: 'admin' }, doc), true, 'A real admin on a real document is the ONE case that returns true.');\nT.eq(canAccess({ role: 'user' }, doc), false, 'A well-formed non-admin is simply denied — false, no crash.');" },
        { text: "Eleven malformed shapes each return **exactly `false`**, with zero throws.",
          test: "var doc = { id: 'doc1', ownerName: 'ada' };\nvar bad = [undefined, null, {}, { role: undefined }, { role: null }, { role: 'ADMIN' }, { role: 'admin ' }, 'admin', 42, true, []];\nT.expect(bad.length === 11, 'eleven malformed shapes to survive');\nfor (var i = 0; i < bad.length; i++) {\n  var got;\n  try { got = canAccess(bad[i], doc); }\n  catch (e) { throw new Error('canAccess CRASHED on shape #' + i + ' (' + JSON.stringify(bad[i]) + ') — fail closed, never throw: ' + e.message); }\n  T.eq(got, false, 'Malformed shape #' + i + ' (' + JSON.stringify(bad[i]) + ') must return exactly false');\n}" },
        { text: "Fail closed on missing state too: even a real admin is denied when the **document** is missing. `canAccess({ role: \"admin\" }, undefined)` → `false`; `canAccess({ role: \"admin\" }, null)` → `false`.",
          test: "T.eq(canAccess({ role: 'admin' }, undefined), false, 'No document to check → deny, even for an admin. Missing state fails closed.');\nT.eq(canAccess({ role: 'admin' }, null), false, 'A null document fails closed too.');\nT.eq(canAccess({ role: 'admin' }, { id: 'doc9' }), true, '…but a real admin on a real document still gets through.');" }
      ],
      files: [
        { name: "script.js", content: "// canAccess(user, doc): grant ONLY the known-good shape; deny everything else.\n// It must never throw — no matter how strange the input.\n\nfunction canAccess(user, doc) {\n  // grant access to admins\n  return user.role === \"admin\";\n}\n\nconsole.log(canAccess({ role: \"admin\" }, { id: \"doc1\" }));\nconsole.log(canAccess(null, { id: \"doc1\" }));\n" }
      ],
      hints: [
        "Reject junk first: `if (!user || typeof user !== \"object\") return false;` — that one line stops every crash on null, undefined, numbers and strings.",
        "Then demand the exact shape: `if (typeof user.role !== \"string\") return false;` before comparing. `\"ADMIN\"` and `\"admin \"` must fail, so compare with strict `===` to `\"admin\"`.",
        "The document is state too — guard it the same way: `if (!doc || typeof doc !== \"object\") return false;`. Grant a yes only after every check has passed."
      ],
      solution: {
        "script.js": "// canAccess(user, doc): grant ONLY the known-good shape; deny everything else.\n\nfunction canAccess(user, doc) {\n  // deny by default: bail on anything we don't positively recognise\n  if (!user || typeof user !== \"object\") return false;\n  if (typeof user.role !== \"string\") return false;\n  if (!doc || typeof doc !== \"object\") return false;\n  // the one earned yes\n  return user.role === \"admin\";\n}\n\nconsole.log(canAccess({ role: \"admin\" }, { id: \"doc1\" }));\nconsole.log(canAccess(null, { id: \"doc1\" }));\n"
      }
    },

    {
      id: "sec-quiz-1",
      title: "Unit 1 quiz: Trust & threat model",
      kind: "quiz", xp: 10,
      brief: "Trust boundaries, the two sources that fool everyone, client-vs-server validation, and failing closed. 80% to pass.",
      questions: [
        { q: "A *trust boundary* is…",
          choices: [
            "The encrypted tunnel HTTPS negotiates between the browser and your server before any bytes move",
            "Any point where data crosses from a zone you control into one an attacker can change",
            "The login screen that keeps guests out and lets members in",
            "A firewall rule managed by your hosting provider"
          ],
          answer: 1, explain: "A trust boundary is wherever data passes from something you control to something you don't — a form submission, an API call, a value read back from the browser. HTTPS protects data in transit but says nothing about whether the sender was honest, and a login screen is just one boundary among many. Spotting the boundary is what tells you which values need re-checking." },
        { q: "You read a value from `localStorage` and another from your own API's JSON response. How should you treat them?",
          choices: [
            "localStorage is written only by your own JavaScript, so an attacker can never reach what it holds",
            "The API response came from your own server, so its contents are automatically safe to render",
            "Both are safe as long as your site is served over HTTPS",
            "Both are untrusted: devtools can edit localStorage, and your database may hold a poisoned row"
          ],
          answer: 3, explain: "These are the two sources that fool almost everyone. localStorage lives in the browser, where the user can rewrite any key in devtools, and your API reads from a database that may already contain data an attacker planted earlier. \"It came from my own code\" is not the same as \"an attacker couldn't influence it\" — treat both as untrusted." },
        { q: "In Learn HTML you added `required` and `pattern` to a form. For security, those client-side checks are…",
          choices: [
            "a convenience for honest users; the server must re-check every request itself",
            "enough on their own, because the browser will refuse to submit anything invalid to you",
            "a full replacement for server-side validation once the pattern is strict enough",
            "only relevant when the visitor has turned JavaScript off in their browser"
          ],
          answer: 0, explain: "Client-side validation improves the experience for honest users, but it runs in a browser the attacker controls — a direct `curl` or a tweaked fetch never opens your form at all. Every value still has to be validated again on the server, which is the only place you actually trust. The client check is a courtesy; the server check is the security control." },
        { q: "A checkout route computes `total` from `req.body.price`. The right fix is to…",
          choices: [
            "reject any request whose submitted price looks suspiciously low",
            "hash the price on the client so it cannot be tampered with in transit",
            "look the price up in a server-side table and ignore the client's number",
            "check that price is a positive number and then use the value as sent"
          ],
          answer: 2, explain: "The price is a fact your server owns, so the server must supply it — look it up by product id in a server-side table and discard whatever the client sent. Validating the shape of `req.body.price`, or hashing it, still lets the client choose the number, which is the whole bug. Never let a value with money or permission attached originate in the request body." },
        { q: "What does it mean to *fail closed*?",
          code: "function canAccess(user, doc) {\n  if (!user || typeof user !== \"object\") return false;\n  if (typeof user.role !== \"string\") return false;\n  return user.role === \"admin\";\n}",
          lang: "js",
          choices: [
            "Log the problem and let the request through anyway, so no user is ever blocked",
            "When state is missing or malformed, deny access instead of guessing",
            "Keep retrying the check until the input finally passes",
            "Throw an error so the entire server process restarts"
          ],
          answer: 1, explain: "Failing closed means the default answer is no: anything you don't positively recognise as allowed gets denied, and no strange input is allowed to crash the guard into a yes. The function above bails to `false` on every malformed shape and grants access only for the one known-good case. Failing open — waving requests through when something looks off — is exactly how attackers get in." },
        { q: "Data arrives in your handler straight from the browser. In one word, how do you treat it?",
          choices: ["Trusted", "Sanitized", "Verified", "Untrusted"],
          answer: 3, explain: "Anything that reached you across a trust boundary is untrusted until you've re-checked it yourself — that is the default posture for this entire course. \"Sanitized\" and \"verified\" describe work you might do to it later, but they are not its starting state. It shows up untrusted, and you decide, deliberately, what to believe." }
      ]
    }
  ]
});
