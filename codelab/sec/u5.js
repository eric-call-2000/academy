/* Web Security Basics — Unit 5: Secrets, keys and where tokens live */
window.CODELAB.addUnit("sec", {
  id: "sec-u5",
  title: "Secrets, keys and where tokens live",
  icon: "🔑",
  blurb: "There are no secrets in the browser: anything you ship is public. Env vars, redaction, what never gets committed, and the real localStorage-vs-cookie tradeoff — proven by stealing the token.",
  cheat: [
    { h: "Nothing in the browser is secret", lang: "js", code: "// shipped to the client = readable by the client\nconst API_KEY = \"sk_live_…\"; // 😱 open devtools → there it is", note: "Minify it, obfuscate it, bury it in a variable — it still ships. The user's machine sees every byte you send it." },
    { h: "Put the key behind YOUR endpoint", lang: "js", code: "// ❌ browser → third party, key rides in the URL\nfetch(\"https://api.co/v1/now?key=\" + API_KEY);\n// ✅ browser → your server, which holds the key\nfetch(\"/api/weather\");", note: "The client only ever talks to you; the secret never leaves the server." },
    { h: "Secrets come from the environment", lang: "js", code: "const pw = process.env.DB_PASSWORD;\nif (!pw) throw new Error(\"Missing DB_PASSWORD\");", note: "Never hard-code them. A missing key should fail loudly, naming exactly what to set." },
    { h: "Redact before you log", lang: "js", code: "function redact(c) {\n  return { ...c, DB_PASSWORD: \"***\", API_KEY: \"***\" };\n}", note: "Logs end up in dashboards, aggregators and screenshots. Treat them as semi-public." },
    { h: "What never gets committed", lang: "bash", code: "# .gitignore\n.env\nid_rsa\nsecrets.json\n# …but DO commit the template:\n#   .env.example  ✅  (keys, placeholder values)", note: ".env.example lists the KEYS with fake values so teammates know what to set — no live secrets." },
    { h: "localStorage vs httpOnly cookie", lang: "js", code: "localStorage.setItem(\"token\", t); // ❌ any injected script can read it\n// httpOnly cookie: JS cannot read it, the browser still sends it ✅", note: "A token you can read from JavaScript is a token an XSS payload can steal." }
  ],
  lessons: [

    {
      id: "sec-u5-1",
      title: "There are no secrets in the browser",
      kind: "web", chip: "SEC", xp: 15, mins: 13,
      mock: null,
      mockFn: "(function (url, opts) { return { status: 200, body: { temp: 21, report: \"Sunny\" } }; })",
      brief: "Here is the lie that leaks the most keys: *\"I'll just hide the API key in the JavaScript.\"* **Anything you ship to the browser is public.** Minify it, rename the variable, split it in three — the user's machine still runs it, and *View Source* plus the Network tab hand it all back.\n\nThis is a lab against your own sandbox. The starter weather widget ships an obviously-fake key `sk_live_51H8x…` straight to every visitor (the real weather call is mocked — there is no network here).\n\nYou'll build `findSecrets(text)`, a scanner for the shapes real leaked credentials take — `sk_live_`, `AKIA`, `-----BEGIN`, and long hex runs — then close the hole the only way that works: move the call to **your own server** so the key never ships at all.",
      steps: [
        { text: "Write `findSecrets(text)` — return an array of every secret-shaped match: an `sk_live_` key, an `AKIA…` key, a `-----BEGIN` block, or a 32+ character hex run.",
          test: "T.expect(typeof findSecrets === 'function', 'Write function findSecrets(text) that returns an array.');\nvar bundle = 'API_KEY = sk_live_9f8b7c6d5e4f3a2b1c0d and AKIAIOSFODNN7EXAMPLE and 0123456789abcdef0123456789abcdef';\nvar hits = findSecrets(bundle);\nT.expect(Array.isArray(hits), 'findSecrets must return an array.');\nT.expect(hits.length >= 3, 'It should catch the sk_live_ key, the AKIA key AND the 32-char hex run in that string — found ' + hits.length + '.');\nT.expect(findSecrets('just a normal sentence, nothing to see').length === 0, 'A clean string returns an empty array — no false positives.');" },
        { text: "Now point it at your shipped widget and close the hole: refactor the `#widget` script to `fetch(\"/api/weather\")` (no key — your server holds it), so `findSecrets` finds nothing and the weather still renders.",
          test: "await T.sleep(220);\nvar widget = document.getElementById('widget');\nT.expect(!!widget, 'Keep the script tagged id=widget in index.html.');\nvar leaks = findSecrets(widget.textContent);\nT.eq(leaks, [], 'Your shipped widget still leaks: ' + JSON.stringify(leaks) + '. Delete the key and call /api/weather instead.');\nT.expect((T.text('#temp') || '').indexOf('°') !== -1, 'The weather must still render — fetch /api/weather and show the temperature.');\nvar report = T.text('#report') || '';\nT.expect(report.length > 0 && report.indexOf('loading') === -1, 'The report text should render from the server response too, not stay on loading.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>☁️ Weather widget</h1>\n  <div id=\"card\">\n    <div id=\"temp\">—</div>\n    <div id=\"report\">loading…</div>\n  </div>\n\n  <!-- Everything in this widget SHIPS to every visitor. View Source is free. -->\n  <script id=\"widget\">\n    (function () {\n      var API_KEY = \"sk_live_FAKEdemoKeyNotReal\";\n      fetch(\"https://api.weatherhut.example/v1/now?key=\" + API_KEY)\n        .then(function (r) { return r.json(); })\n        .then(function (w) {\n          document.getElementById(\"temp\").textContent = w.temp + \"°\";\n          document.getElementById(\"report\").textContent = w.report;\n        });\n    })();\n  </script>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\n#card {\n  display: inline-block;\n  padding: 20px 28px;\n  border-radius: 16px;\n  background: linear-gradient(135deg, #38bdf8, #6366f1);\n  color: white;\n  text-align: center;\n}\n#temp {\n  font-size: 48px;\n  font-weight: bold;\n}\n#report {\n  font-size: 18px;\n  opacity: 0.95;\n}\n" },
        { name: "script.js", content: "// findSecrets — a scanner you can point at any shipped file.\n// Leaked credentials have recognisable shapes:\n//   sk_live_…                 (Stripe secret key)\n//   AKIA… + uppercase/digits  (AWS access key)\n//   -----BEGIN … KEY-----     (a private key block)\n//   a long run of hex         (tokens, hashes)\n//\n// TODO step 1: return an array of every secret-shaped string in `text`.\nfunction findSecrets(text) {\n  return []; // ← scan `text` and collect the matches\n}\n\n// TODO step 2: in index.html, change the #widget script to fetch(\"/api/weather\")\n//   and DELETE the API_KEY line. The key belongs on your server, not here.\n" }
      ],
      hints: [
        "Keep a list of regexes and collect matches: `var patterns = [/sk_live_[A-Za-z0-9]{6,}/g, /AKIA[A-Z0-9]{12,}/g, /-----BEGIN [A-Z ]+-----/g, /[0-9a-f]{32,}/g];`",
        "For each pattern: `var m = String(text).match(re); if (m) found = found.concat(m);` — `.match` with a /g regex returns every hit or `null`.",
        "The real fix is in index.html: replace the third-party fetch with `fetch(\"/api/weather\")` and remove `var API_KEY = …`. Your own server makes the upstream call and keeps the key — the browser never sees it."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>☁️ Weather widget</h1>\n  <div id=\"card\">\n    <div id=\"temp\">—</div>\n    <div id=\"report\">loading…</div>\n  </div>\n\n  <!-- Everything in this widget SHIPS to every visitor. View Source is free. -->\n  <script id=\"widget\">\n    (function () {\n      // The key now lives on OUR server. The browser only talks to us.\n      fetch(\"/api/weather\")\n        .then(function (r) { return r.json(); })\n        .then(function (w) {\n          document.getElementById(\"temp\").textContent = w.temp + \"°\";\n          document.getElementById(\"report\").textContent = w.report;\n        });\n    })();\n  </script>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n",
        "script.js": "// findSecrets — a scanner you can point at any shipped file.\nfunction findSecrets(text) {\n  var patterns = [\n    /sk_live_[A-Za-z0-9]{6,}/g,\n    /AKIA[A-Z0-9]{12,}/g,\n    /-----BEGIN [A-Z ]+-----/g,\n    /[0-9a-f]{32,}/g\n  ];\n  var found = [];\n  patterns.forEach(function (re) {\n    var m = String(text).match(re);\n    if (m) found = found.concat(m);\n  });\n  return found;\n}\n"
      }
    },

    {
      id: "sec-u5-2",
      title: "Env vars, redaction and what never gets committed",
      kind: "js", chip: "SEC", xp: 15, mins: 13,
      brief: "The key is off the client (Lesson 1) — now keep it out of your **repo** and your **logs**. Three habits do most of the work:\n\n- **Read secrets from the environment**, never hard-code them. A missing key should crash loudly, naming exactly what to set.\n- **Redact before you log.** Logs get shipped to dashboards and pasted into tickets; a config dump that includes `DB_PASSWORD` is a leak waiting to happen.\n- **Know what never gets committed.** `.env` holds live secrets; `.env.example` is the harmless template — and telling them apart is where a naive `startsWith` check goes wrong.\n\nWe cannot run `git` in the sandbox, so `shouldCommit` grades the **rule**, not a real `.gitignore` — but the rule is the part you carry to every project.",
      steps: [
        { text: "Write `loadConfig(env)`: return a config object when every required key is present, but **throw** an error that names the missing key when one is absent.",
          test: "T.expect(typeof loadConfig === 'function', 'Define loadConfig(env).');\nvar full = { DB_PASSWORD: 'p', API_KEY: 'k', SESSION_SECRET: 's', HOST: 'h', PORT: 5432 };\nvar cfg = loadConfig(full);\nT.eq(cfg.PORT, 5432, 'With every key present, loadConfig should return the config (PORT 5432 here).');\nvar threw = false, msg = '';\ntry { loadConfig({ API_KEY: 'k', SESSION_SECRET: 's' }); } catch (e) { threw = true; msg = e.message || ''; }\nT.expect(threw, 'A missing DB_PASSWORD must THROW, not return a half-built config.');\nT.expect(/DB_PASSWORD/.test(msg), 'The error must NAME the missing key so you know what to set. Got: ' + msg);" },
        { text: "Write `redact(config)`: a copy safe to log — `DB_PASSWORD`, `API_KEY`, `SESSION_SECRET` become `\"***\"`, every other key keeps its real value, and no secret value survives.",
          test: "T.expect(typeof redact === 'function', 'Define redact(config).');\nvar r = redact({ DB_PASSWORD: 'PW-DO-NOT-LEAK', API_KEY: 'sk-LEAKME', SESSION_SECRET: 'sess-SHH', HOST: 'db.example.com', PORT: 5432 });\nT.eq(r.DB_PASSWORD, '***', 'DB_PASSWORD must be redacted to ***.');\nT.eq(r.API_KEY, '***', 'API_KEY must be redacted to ***.');\nT.eq(r.SESSION_SECRET, '***', 'SESSION_SECRET must be redacted to ***.');\nT.eq(r.HOST, 'db.example.com', 'A non-secret key keeps its real value (HOST here).');\nT.eq(r.PORT, 5432, 'PORT is not a secret — keep it.');\nvar dump = JSON.stringify(r);\nT.expect(dump.indexOf('DO-NOT-LEAK') === -1 && dump.indexOf('LEAKME') === -1 && dump.indexOf('SHH') === -1, 'None of the three secret VALUES may survive into the logged copy.');" },
        { text: "Write `shouldCommit(filename)`: `false` for real secret files, `true` for templates and code.",
          test: "T.expect(typeof shouldCommit === 'function', 'Define shouldCommit(filename).');\nT.eq(shouldCommit('.env'), false, '.env holds live secrets — never commit it.');\nT.eq(shouldCommit('.env.example'), true, '.env.example is the template with placeholder values — safe to commit. A naive startsWith .env check wrongly blocks this one.');\nT.eq(shouldCommit('config.js'), true, 'config.js is code — commit it.');\nT.eq(shouldCommit('id_rsa'), false, 'id_rsa is a private key — never.');\nT.eq(shouldCommit('secrets.json'), false, 'secrets.json is exactly what it says — never.');" }
      ],
      files: [
        { name: "script.js", content: "// Three habits that keep secrets out of your repo and your logs.\n//\n// (No real filesystem here, so shouldCommit grades the RULE, not a .gitignore.)\n\nvar REQUIRED = [\"DB_PASSWORD\", \"API_KEY\", \"SESSION_SECRET\"];\n\nfunction loadConfig(env) {\n  // For each key in REQUIRED that is missing from env:\n  //   throw new Error(\"Missing required config: \" + key + \" …\")\n  // Otherwise return { DB_PASSWORD, API_KEY, SESSION_SECRET, HOST, PORT }.\n}\n\nfunction redact(config) {\n  // Return a COPY where DB_PASSWORD, API_KEY and SESSION_SECRET are \"***\"\n  // and every other key keeps its real value.\n}\n\nfunction shouldCommit(filename) {\n  // false for .env, id_rsa, secrets.json — true for everything else.\n}\n\n// try it:\nconsole.log(redact({ DB_PASSWORD: \"hunter2\", HOST: \"db.local\" }));\n" }
      ],
      hints: [
        "loadConfig: `REQUIRED.forEach(function (key) { if (env[key] == null || env[key] === \"\") throw new Error(\"Missing required config: \" + key); });` then `return { DB_PASSWORD: env.DB_PASSWORD, API_KEY: env.API_KEY, SESSION_SECRET: env.SESSION_SECRET, HOST: env.HOST || \"localhost\", PORT: env.PORT || 3000 };` — guard `env = env || {}` first.",
        "redact: walk the keys and swap only the secret ones — `var SECRET = [\"DB_PASSWORD\", \"API_KEY\", \"SESSION_SECRET\"]; var out = {}; Object.keys(config).forEach(function (k) { out[k] = SECRET.indexOf(k) !== -1 ? \"***\" : config[k]; }); return out;`",
        "shouldCommit is a deny-list of exact names: `var NEVER = [\".env\", \"id_rsa\", \"secrets.json\"]; return NEVER.indexOf(filename) === -1;` — exact match is what lets \".env.example\" through while blocking \".env\"."
      ],
      solution: {
        "script.js": "// Three habits that keep secrets out of your repo and your logs.\n\nvar REQUIRED = [\"DB_PASSWORD\", \"API_KEY\", \"SESSION_SECRET\"];\n\nfunction loadConfig(env) {\n  env = env || {};\n  REQUIRED.forEach(function (key) {\n    if (env[key] == null || env[key] === \"\") {\n      throw new Error(\"Missing required config: \" + key + \" — set it in the environment, not in code.\");\n    }\n  });\n  return {\n    DB_PASSWORD: env.DB_PASSWORD,\n    API_KEY: env.API_KEY,\n    SESSION_SECRET: env.SESSION_SECRET,\n    HOST: env.HOST || \"localhost\",\n    PORT: env.PORT || 3000\n  };\n}\n\nfunction redact(config) {\n  var SECRET = [\"DB_PASSWORD\", \"API_KEY\", \"SESSION_SECRET\"];\n  var out = {};\n  Object.keys(config).forEach(function (key) {\n    out[key] = SECRET.indexOf(key) !== -1 ? \"***\" : config[key];\n  });\n  return out;\n}\n\nfunction shouldCommit(filename) {\n  var NEVER = [\".env\", \"id_rsa\", \"secrets.json\"];\n  return NEVER.indexOf(filename) === -1;\n}\n\n// try it:\nconsole.log(redact({ DB_PASSWORD: \"hunter2\", HOST: \"db.local\" }));\n"
      }
    },

    {
      id: "sec-u5-3",
      title: "Where a token lives: localStorage vs a cookie",
      kind: "web", chip: "SEC", xp: 15, mins: 14,
      mock: null,
      mockFn: "(function (url, opts) { return { status: 200, body: { user: \"ada\" } }; })",
      brief: "Your session token proves who you are on every request — so where you keep it decides whether one XSS bug ends your users' sessions. This is a lab against your own sandbox: a stored-XSS payload is **already** on this page (imagine a comment nobody sanitised), and `runPayload()` re-fires it.\n\nThe starter keeps the token in `localStorage` — the popular, easy, **wrong** choice. You'll watch the payload read it straight out with `localStorage.getItem('token')`, then move the token into an **httpOnly cookie** the browser holds but JavaScript cannot read. The same payload comes back empty, `readSession()` from page JS returns `null` — and the token still reaches the server on every request.\n\nThe `cookieJar` is a **simulation**: the sandbox has no real cookie store, so we model an httpOnly cookie as one the browser sends but hides from `readSession()`. Real apps set `Set-Cookie: …; HttpOnly` and let the browser do this for real.",
      steps: [
        { text: "Sign in: `saveSession(token)` stores it, and `authFetch()` reaches `/api/me` carrying the token.",
          test: "T.expect(typeof saveSession === 'function' && typeof authFetch === 'function', 'Define saveSession(token), readSession() and authFetch().');\nsaveSession('token-ada');\nauthFetch();\nawait T.sleep(150);\nvar call = (window.__CALLS || []).filter(function (c) { return c.url.indexOf('/api/me') !== -1; }).pop();\nT.expect(!!call, 'authFetch() should call /api/me.');\nT.expect(JSON.stringify(call.headers || {}).indexOf('token-ada') !== -1, 'authFetch() must send the session token to the server.');" },
        { text: "Watch it get robbed: whatever sits in `localStorage` is one injected line away from the attacker.",
          test: "window.__exfil = null;\nlocalStorage.setItem('token', 'demo-token-9xy');\nrunPayload();\nawait T.sleep(160);\nT.expect(window.__exfil === 'demo-token-9xy', 'The injected img onerror runs localStorage.getItem for token — anything in localStorage is there for the taking.');\nlocalStorage.removeItem('token');" },
        { text: "Move it out of reach: rewrite `saveSession`/`readSession`/`authFetch` to use the httpOnly `cookieJar`. The same payload now finds nothing, `readSession()` returns `null`, and `authFetch()` still reaches the server.",
          test: "localStorage.removeItem('token');\nwindow.__exfil = null;\nsaveSession('token-ada');\nrunPayload();\nawait T.sleep(160);\nT.expect(window.__exfil === null, 'The SAME payload now finds nothing — your token must not be in localStorage anymore.');\nT.expect(localStorage.getItem('token') === null, 'saveSession must not write the token to localStorage.');\nT.expect(readSession() === null, 'From page JavaScript the token is now unreadable — exactly what an httpOnly cookie buys you.');\nwindow.__CALLS = [];\nauthFetch();\nawait T.sleep(150);\nvar call = (window.__CALLS || []).filter(function (c) { return c.url.indexOf('/api/me') !== -1; }).pop();\nT.expect(!!call && JSON.stringify(call.headers || {}).indexOf('token-ada') !== -1, 'authFetch() must STILL reach /api/me with the token — the browser sends the cookie even though JS cannot read it.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>🔐 Your session</h1>\n  <p id=\"status\">Signed in.</p>\n  <div id=\"xss\"></div>\n\n  <!-- A stored-XSS payload that already made it onto the page (imagine a\n       malicious comment nobody sanitised). runPayload() re-fires it. -->\n  <script id=\"attacker\">\n    function runPayload() {\n      document.getElementById(\"xss\").innerHTML =\n        '<img src=x onerror=\"window.__exfil=localStorage.getItem(&quot;token&quot;)\">';\n    }\n  </script>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\n#status {\n  color: #16a34a;\n  font-weight: bold;\n}\n#xss {\n  min-height: 1px;\n}\n" },
        { name: "script.js", content: "// Session storage. The starter keeps the token in localStorage — the easy,\n// popular, and WRONG choice. Your job: make it unstealable by the payload\n// that is already on this page.\n//\n// cookieJar simulates the browser's cookie store. A cookie marked httpOnly\n// is kept by the browser but hidden from JavaScript: the payload cannot read\n// it, yet the browser still sends it on every request.\nvar cookieJar = {};\n\nfunction saveSession(token) {\n  localStorage.setItem(\"token\", token);   // ❌ any script on the page can read this\n}\n\nfunction readSession() {\n  return localStorage.getItem(\"token\");\n}\n\nfunction authFetch() {\n  var token = readSession();\n  return fetch(\"/api/me\", { headers: { authorization: \"Bearer \" + token } });\n}\n" }
      ],
      hints: [
        "Store the token as an httpOnly cookie instead of in localStorage: `function saveSession(token) { cookieJar.session = { value: token, httpOnly: true }; }`",
        "readSession models page JS trying to read the cookie — and httpOnly means it cannot: `function readSession() { var c = cookieJar.session; return (c && c.httpOnly) ? null : (c ? c.value : null); }`",
        "authFetch models the browser auto-attaching the cookie, so the token still travels: `function authFetch() { var c = cookieJar.session; return fetch(\"/api/me\", { headers: { cookie: \"session=\" + (c ? c.value : \"\") } }); }` — nothing the payload can reach ever holds the token."
      ],
      solution: {
        "script.js": "// Session storage — the safe version. The token lives in the browser's\n// httpOnly cookie store: kept and sent by the browser, invisible to JS.\nvar cookieJar = {};\n\nfunction saveSession(token) {\n  // hand it to the browser as an httpOnly cookie\n  cookieJar.session = { value: token, httpOnly: true };\n}\n\nfunction readSession() {\n  var c = cookieJar.session;\n  // JavaScript cannot read an httpOnly cookie — that is the whole point.\n  return (c && c.httpOnly) ? null : (c ? c.value : null);\n}\n\nfunction authFetch() {\n  // the BROWSER attaches the cookie automatically; JS never had to see it\n  var c = cookieJar.session;\n  return fetch(\"/api/me\", { headers: { cookie: \"session=\" + (c ? c.value : \"\") } });\n}\n"
      }
    },

    {
      id: "sec-quiz-5",
      title: "Unit 5 quiz: Secrets & storage",
      kind: "quiz", xp: 10,
      brief: "Why nothing in the browser is secret, where keys and tokens belong, and the localStorage-vs-cookie tradeoff. 80% to pass.",
      questions: [
        { q: "A single-page app needs to call a paid weather API that requires a secret key. Where does the key belong?",
          choices: [
            "In the frontend bundle, minified so it is hard to read",
            "In localStorage, written once when the app boots",
            "On your own server",
            "In a hidden field on the page, read by JavaScript"
          ],
          answer: 2, explain: "Minifying, hiding in storage, or stashing in a hidden field all still ship the key to the browser, where devtools and the Network tab hand it back. The only real fix is a thin endpoint of your own that holds the key and makes the upstream call — the browser talks only to you." },
        { q: "Why is \"there are no secrets in the browser\" true?",
          choices: [
            "The browser is the user's machine, so they see everything",
            "Browsers encrypt JavaScript, but only in production builds",
            "Only localStorage is exposed; ordinary variables stay private",
            "It is only true if you forget to minify your code"
          ],
          answer: 0, explain: "Every byte you send the client — JS, JSON, headers — lands on a machine the user controls, where it can be inspected, saved and replayed. Minification is not encryption, plain variables are just as visible as storage, and no build step changes who owns the machine." },
        { q: "You keep the session token in localStorage. An XSS bug lets an attacker run JavaScript on your page. What can they do with the token?",
          choices: [
            "Nothing — localStorage is sandboxed away from injected scripts",
            "Read it only if they also know the user's password",
            "Crash the tab, but the token stays out of reach",
            "Read it with localStorage.getItem and send it anywhere"
          ],
          answer: 3, explain: "localStorage is plain JavaScript-readable storage, so any script the page runs — including an injected payload — can read the token and POST it to the attacker. That single fact is the whole argument for a storage the page's JavaScript cannot touch." },
        { q: "What does marking a session cookie httpOnly actually do?",
          choices: [
            "Encrypts the cookie value from end to end",
            "Blocks JavaScript from reading it, while the browser still sends it",
            "Forces the cookie to travel only over HTTPS",
            "Deletes the cookie as soon as the tab closes"
          ],
          answer: 1, explain: "httpOnly means document.cookie and any injected script cannot read the value, yet the browser keeps attaching it to matching requests automatically — so an XSS payload cannot steal it. HTTPS-only is the separate Secure flag, and httpOnly does not encrypt anything or change expiry." },
        { q: "Which file is safe to commit to a public repo?",
          choices: [
            ".env",
            "id_rsa",
            ".env.example",
            "secrets.json"
          ],
          answer: 2, explain: "`.env.example` lists the KEYS with placeholder values so teammates know what to set, carrying no real secrets. `.env`, a private key like `id_rsa`, and `secrets.json` all hold live credentials and belong in `.gitignore`." },
        { q: "Your logger prints the whole config object on boot, DB_PASSWORD included. The safest fix?",
          choices: [
            "Only log it in production, where users cannot see the console",
            "Rename the field to something less obvious",
            "Trust that log files stay private",
            "Redact known secret keys to *** before logging"
          ],
          answer: 3, explain: "Logs get shipped to dashboards, aggregators and screenshots, so treat them as semi-public and replace known secret fields — passwords, API keys, session secrets — with *** before they are written. Production logs are not private, and renaming a field hides nothing from whoever reads the dump." }
      ]
    }
  ]
});
