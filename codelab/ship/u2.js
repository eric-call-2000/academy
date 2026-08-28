/* Deploying Your App — Unit 2: Environment variables & configuration */
window.CODELAB.addUnit("ship", {
  id: "ship-u2",
  title: "Environment variables & configuration",
  icon: "🎛️",
  blurb: "Config lives outside the code: defaults, string coercion, fail-fast guards, and keeping secrets out of the repo.",
  cheat: [
    { h: "One object, three names", lang: "js", code: "process.env.API_URL   // Node\nenv.API_URL           // Cloudflare Worker: fetch(request, env, ctx)\n// dashboard:          Settings → Variables → API_URL\n// Same object. Three spellings. Every value is a string.", note: "Code READS config; the platform SETS it. That split is the whole contract." },
    { h: "Everything is a string", lang: "js", code: "env.PORT              // \"8080\" — a string!\nenv.PORT + 1          // \"80801\" — the classic port bug\nNumber(env.PORT)      // 8080\nenv.DEBUG             // \"false\" — truthy!\nenv.DEBUG === \"true\"  // compare, don't cast", note: "Coerce ONCE at the boundary (num()/bool() inside getConfig) — the rest of the app never sees strings." },
    { h: "Fail fast at boot", lang: "js", code: "function required(env, key) {\n  if (env[key] === undefined || env[key] === \"\") {\n    throw new Error(\"Missing required env var: \" + key);\n  }\n  return env[key];\n}", note: "A boot crash that NAMES the variable is a 30-second fix. A silent undefined is a 3am one." },
    { h: "Workers for real: [vars] vs secrets", lang: "js", code: "// wrangler.toml — plain config, safe to commit:\n//   [vars]\n//   API_URL = \"https://api.example.com\"\n//   DEBUG = \"false\"\n//\n// secrets NEVER go in the file — set them encrypted:\n//   $ wrangler secret put STRIPE_KEY\n//\n// both arrive in code the same way: env.API_URL, env.STRIPE_KEY", note: "Unit 7's wrangler field guide covers the tooling properly — this is the shape to recognize." },
    { h: ".gitignore is a bouncer, not a shredder", lang: "js", code: "// .gitignore\n//   .env\n//   node_modules/\n//\n// It keeps UNTRACKED files from being added — nothing more.\n// A key hardcoded in a tracked config.js still ships with every push.\n// A key that was EVER committed is leaked: rotate it.", note: "Git itself (commits, history, push) is its own course — here your files are already in a repo." }
  ],
  lessons: [

    {
      id: "ship-u2-1",
      title: "Config is not code",
      kind: "js", chip: "SHIP", xp: 15, mins: 13,
      brief: "Deploy the same app to your laptop, a staging URL and production, and exactly one thing should differ: the **configuration**. Code reads config from the **environment** — a plain object of named string values that the *platform* sets.\n\nThat object goes by three names: `process.env` in Node, the `env` argument a Cloudflare Worker's `fetch(request, env, ctx)` receives, and the *Variables* panel in a hosting dashboard. Same shape, same rules — in this sandbox it's a plain object called `env`.\n\nWrite `getConfig(env)`: every setting gets a sensible **default** for local dev, and a value present in `env` **overrides** it. (How each platform's panel or file actually sets these values is Unit 7 field-guide material — here we own the code side of the contract.)",
      example: { lang: "js", code: "getConfig({})\n// → { apiUrl: \"http://localhost:8787\", appName: \"notestream\" }\ngetConfig({ API_URL: \"https://api.example.com\" })\n// → the override wins" },
      steps: [
        { text: "`getConfig(env)` returns an object whose `apiUrl` defaults to `\"http://localhost:8787\"` when the env is empty.",
          test: "T.expect(typeof getConfig === 'function', 'Define function getConfig(env) { … }');\nvar c = getConfig({});\nT.expect(c && typeof c === 'object', 'getConfig must RETURN an object — the config.');\nT.eq(c.apiUrl, 'http://localhost:8787', 'Empty env → the local default: apiUrl \"http://localhost:8787\"');" },
        { text: "A value present in the env **overrides** the default.",
          test: "T.eq(getConfig({ API_URL: 'https://api.example.com' }).apiUrl, 'https://api.example.com', 'API_URL set in the env must override the default');\nT.eq(getConfig({}).apiUrl, 'http://localhost:8787', 'No override → the default still wins. Do not hardcode either URL — read env.API_URL and fall back.');" },
        { text: "Add `appName` (env key `APP_NAME`, default `\"notestream\"`) — and make sure nothing else sneaks into the config.",
          test: "T.eq(getConfig({}).appName, 'notestream', 'Empty env → appName defaults to \"notestream\"');\nT.eq(getConfig({ API_URL: 'https://api.live', APP_NAME: 'NoteStream Beta' }), { apiUrl: 'https://api.live', appName: 'NoteStream Beta' }, 'Both overrides land — and the config has EXACTLY the keys you defined, nothing extra');\nT.eq(getConfig({ SOME_PLATFORM_JUNK: 'x' }), { apiUrl: 'http://localhost:8787', appName: 'notestream' }, 'Unknown env keys must NOT leak into the config — getConfig is an allowlist, not a copy');\nT.expect(T.logged('api.example.com'), 'Keep the starter final line — console.log(getConfig(env)) should now show the override winning');" }
      ],
      files: [
        { name: "script.js", content: "// The same object, three names:\n//   Node:               process.env\n//   Cloudflare Worker:  the `env` argument of fetch(request, env, ctx)\n//   Hosting dashboard:  the \"Variables\" panel\n// In this sandbox it is a plain object — same shape, same rules.\n\nconst env = { API_URL: \"https://api.example.com\" };\n\nfunction getConfig(env) {\n  // return { apiUrl: ..., appName: ... }\n  //   apiUrl:  env.API_URL  — default \"http://localhost:8787\"\n  //   appName: env.APP_NAME — default \"notestream\"\n}\n\nconsole.log(getConfig(env));\n" }
      ],
      hints: [
        "Read the env key, fall back to the default: `apiUrl: env.API_URL || \"http://localhost:8787\"`.",
        "Return ONLY the keys you define — never spread the whole env into the config.",
        "`return { apiUrl: env.API_URL || \"http://localhost:8787\", appName: env.APP_NAME || \"notestream\" };`"
      ],
      solution: {
        "script.js": "// The same object, three names:\n//   Node:               process.env\n//   Cloudflare Worker:  the `env` argument of fetch(request, env, ctx)\n//   Hosting dashboard:  the \"Variables\" panel\n// In this sandbox it is a plain object — same shape, same rules.\n\nconst env = { API_URL: \"https://api.example.com\" };\n\nfunction getConfig(env) {\n  return {\n    apiUrl: env.API_URL || \"http://localhost:8787\",\n    appName: env.APP_NAME || \"notestream\"\n  };\n}\n\nconsole.log(getConfig(env));\n"
      }
    },

    {
      id: "ship-u2-2",
      title: "Everything is a string",
      kind: "js", chip: "SHIP", xp: 15, mins: 13,
      brief: "Type `PORT=8080` into any dashboard and your code receives… `\"8080\"` — a **string**. The environment is text: every value crossing that boundary arrives as a string, no matter what it looks like. So `\"8080\" + 1` is `\"80801\"`, and `\"false\"` is a non-empty string — **truthy**. Both bugs ship constantly.\n\nThe cure is to **coerce once, at the boundary**: tiny helpers `num()` and `bool()` inside `getConfig`, so the rest of the app never sees a stringly-typed port or a truthy `\"false\"`.",
      example: { lang: "js", code: "const env = { PORT: \"8080\", DEBUG: \"false\" };\nenv.PORT + 1        // \"80801\"  ← not 8081\nBoolean(env.DEBUG)  // true     ← \"false\" is a non-empty string" },
      steps: [
        { text: "`num(v, fallback)` — the number, or the fallback when `v` is missing or not numeric.",
          test: "T.expect(typeof num === 'function', 'Define num(v, fallback).');\nvar n = num('8080', 3000);\nT.eq(n, 8080, 'num(\"8080\", 3000) → the NUMBER 8080');\nT.expect(typeof n === 'number', 'env values arrive as STRINGS — \"8080\" + 1 is \"80801\", not 8081. Convert with Number().');\nT.eq(num(undefined, 3000), 3000, 'Missing value → fallback');\nT.eq(num('eight-ish', 3000), 3000, 'Junk that Number() turns into NaN → fallback too, never NaN');" },
        { text: "`bool(v)` — `true` only for the strings `\"true\"` and `\"1\"`; everything else is `false`.",
          test: "T.expect(typeof bool === 'function', 'Define bool(v).');\nT.eq(bool('true'), true, 'bool(\"true\") → true');\nT.eq(bool('1'), true, 'Dashboards love 1/0 — bool(\"1\") is true too');\nT.eq(bool('false'), false, 'the STRING \"false\" is truthy — Boolean(\"false\") === true. Compare, do not cast.');\nT.eq(bool('0'), false, 'bool(\"0\") → false');\nT.eq(bool(undefined), false, 'An unset flag is off');" },
        { text: "`getConfig(env)` returns `{ port, debug }` through your helpers — port defaults to `8787`, debug to `false`.",
          test: "var c = getConfig({ PORT: '8080', DEBUG: 'false' });\nT.eq(c.port, 8080, 'PORT \"8080\" → the number 8080');\nT.expect(typeof c.port === 'number', 'env values arrive as STRINGS — \"8080\" + 1 is \"80801\". Route PORT through num().');\nT.eq(c.debug, false, 'DEBUG \"false\" must come out as the boolean false — the STRING \"false\" is truthy');\nT.eq(getConfig({}), { port: 8787, debug: false }, 'Empty env → { port: 8787, debug: false }');\nT.eq(getConfig({ DEBUG: 'true' }).debug, true, 'DEBUG \"true\" → true');" }
      ],
      files: [
        { name: "script.js", content: "// Every value that crosses the env boundary is a STRING:\n//   PORT=8080    → env.PORT  === \"8080\"\n//   DEBUG=false  → env.DEBUG === \"false\"   (truthy!)\n\nconst env = { PORT: \"8080\", DEBUG: \"false\" };\n\n// 1) num(v, fallback) → Number(v), or fallback when v is missing\n//    or Number() gives NaN\n\n// 2) bool(v) → true ONLY for \"true\" or \"1\"; everything else false\n\n// 3) getConfig(env) → { port: num(env.PORT, 8787), debug: bool(env.DEBUG) }\n\nconsole.log(env.PORT + 1); // \"80801\" — see the bug before you fix it\n" }
      ],
      hints: [
        "num: handle missing first (`if (v === undefined) return fallback;`), then `const n = Number(v);` and return the fallback when `Number.isNaN(n)`.",
        "bool is a comparison, not a cast: `return v === \"true\" || v === \"1\";`",
        "getConfig just wires them up: `return { port: num(env.PORT, 8787), debug: bool(env.DEBUG) };`"
      ],
      solution: {
        "script.js": "// Every value that crosses the env boundary is a STRING:\n//   PORT=8080    → env.PORT  === \"8080\"\n//   DEBUG=false  → env.DEBUG === \"false\"   (truthy!)\n\nconst env = { PORT: \"8080\", DEBUG: \"false\" };\n\nfunction num(v, fallback) {\n  if (v === undefined) return fallback;\n  const n = Number(v);\n  return Number.isNaN(n) ? fallback : n;\n}\n\nfunction bool(v) {\n  return v === \"true\" || v === \"1\";\n}\n\nfunction getConfig(env) {\n  return { port: num(env.PORT, 8787), debug: bool(env.DEBUG) };\n}\n\nconsole.log(env.PORT + 1); // \"80801\" — see the bug before you fix it\nconsole.log(getConfig(env)); // { port: 8080, debug: false } — fixed at the boundary\n"
      }
    },

    {
      id: "ship-u2-3",
      title: "Fail fast: required variables",
      kind: "js", chip: "SHIP", xp: 15, mins: 13,
      brief: "An optional setting defaults quietly. A **required** one — the database URL, say — must not: if it is missing, the honest move is to **crash at boot** with an error that *names the variable*. The dishonest alternative is `undefined` slipping into the app and detonating hours later as `\"undefined is not a function\"` in a stack trace that never mentions config.\n\nWrite `required(env, key)` and wire it into `getConfig`. Empty string counts as missing — `DATABASE_URL=\"\"` connects to nothing.",
      example: { lang: "js", code: "// bad: boots fine, dies at the first query\nconst db = connect(env.DATABASE_URL); // connect(undefined)…\n\n// good: dies at boot, names the culprit\n// Error: Missing required env var: DATABASE_URL" },
      steps: [
        { text: "`required(env, key)` — returns the value, or throws an `Error` that **names the key**.",
          test: "T.expect(typeof required === 'function', 'Define required(env, key).');\nT.eq(required({ DATABASE_URL: 'postgres://x' }, 'DATABASE_URL'), 'postgres://x', 'Present → hand the value back');\nvar threw = false, m = '';\ntry { required({}, 'DATABASE_URL'); } catch (e) { threw = true; m = String(e && e.message); }\nT.expect(threw, 'A missing required var must THROW, not limp on with undefined');\nT.expect(m.indexOf('DATABASE_URL') !== -1, 'Name the variable in the message — \"undefined is not a function\" at 3am is not a diagnosis');" },
        { text: "Empty string counts as missing too.",
          test: "var threw = false, m = '';\ntry { required({ DATABASE_URL: '' }, 'DATABASE_URL'); } catch (e) { threw = true; m = String(e && e.message); }\nT.expect(threw, 'DATABASE_URL=\"\" is as unusable as no DATABASE_URL at all — treat empty as missing');\nT.expect(m.indexOf('DATABASE_URL') !== -1, 'The empty-string throw must name the variable too');" },
        { text: "`getConfig` requires `DATABASE_URL` at boot; optional vars still default quietly.",
          test: "var threw = false, m = '';\ntry { getConfig({}); } catch (e) { threw = true; m = String(e && e.message); }\nT.expect(threw, 'A missing DATABASE_URL must fail at BOOT — not at 3am when the first query runs');\nT.expect(m.indexOf('DATABASE_URL') !== -1, 'The boot error must name DATABASE_URL');\nvar c = getConfig({ DATABASE_URL: 'postgres://x' });\nT.eq(c.databaseUrl, 'postgres://x', 'Supplied → no throw, the config comes back');\nT.eq(c.port, 8787, 'Optional vars still default quietly — only REQUIRED ones shout');\nT.eq(getConfig({ DATABASE_URL: 'postgres://x', PORT: '9000' }).port, 9000, 'And PORT still overrides through num()');\nT.expect(T.logged('boot failed'), 'The starter boots with an empty env — its try/catch should now log \"BOOT FAILED: …\"');" }
      ],
      files: [
        { name: "script.js", content: "// Given, from last lesson:\nfunction num(v, fallback) {\n  if (v === undefined) return fallback;\n  const n = Number(v);\n  return Number.isNaN(n) ? fallback : n;\n}\n\n// Boot with nothing set — this SHOULD crash loudly:\nconst env = {};\n\n// 1+2) required(env, key) → env[key]\n//      missing OR \"\" → throw new Error(\"Missing required env var: \" + key)\n\nfunction getConfig(env) {\n  return {\n    databaseUrl: env.DATABASE_URL, // ← silently undefined today; make it required()\n    port: num(env.PORT, 8787)\n  };\n}\n\ntry {\n  console.log(getConfig(env));\n} catch (e) {\n  console.log(\"BOOT FAILED: \" + e.message);\n}\n" }
      ],
      hints: [
        "The guard covers both cases at once: `if (env[key] === undefined || env[key] === \"\") throw new Error(\"Missing required env var: \" + key);`",
        "Then hand the value back: `return env[key];`",
        "In getConfig, swap the silent read for the guard: `databaseUrl: required(env, \"DATABASE_URL\")` — the throw happens while the config is being built, which IS boot time."
      ],
      solution: {
        "script.js": "// Given, from last lesson:\nfunction num(v, fallback) {\n  if (v === undefined) return fallback;\n  const n = Number(v);\n  return Number.isNaN(n) ? fallback : n;\n}\n\n// Boot with nothing set — this SHOULD crash loudly:\nconst env = {};\n\nfunction required(env, key) {\n  if (env[key] === undefined || env[key] === \"\") {\n    throw new Error(\"Missing required env var: \" + key);\n  }\n  return env[key];\n}\n\nfunction getConfig(env) {\n  return {\n    databaseUrl: required(env, \"DATABASE_URL\"),\n    port: num(env.PORT, 8787)\n  };\n}\n\ntry {\n  console.log(getConfig(env));\n} catch (e) {\n  console.log(\"BOOT FAILED: \" + e.message);\n}\n"
      }
    },

    {
      id: "ship-u2-4",
      title: "Secrets vs. variables, and what .gitignore is for",
      kind: "js", chip: "SHIP", xp: 15, mins: 13,
      brief: "Two kinds of values live in `env`. **Variables** (API URL, app name, flags) are plain configuration — fine in a committed file. **Secrets** (payment keys, database passwords) must never enter the repo at all, because a repo remembers forever.\n\nBuild the auditor: `hasSecret(text)` spots key-shaped values, `isIgnored(path, gitignore)` applies the two .gitignore rules, and `auditRepo(files, gitignore)` reports every tracked file that is leaking. The punchline checkpoint: gitignoring `.env` cleans the report — but the key hardcoded in `config.js` still ships.\n\nBoundaries: *secrets sitting in files* is this unit's job — **authentication** (tokens, logins, 401s) belongs to Course 7 and never appears in this course. Git itself (commits, history, `git push`) is its own course; we start at \"your files are already tracked.\" Every key in the fixture is obviously fake.",
      example: { lang: "js", code: "auditRepo(FILES, [\"node_modules/\"])          // [\".env\", \"config.js\"]\nauditRepo(FILES, [\"node_modules/\", \".env\"])  // [\"config.js\"] ← still leaking!" },
      steps: [
        { text: "`hasSecret(text)` — flags `sk_live_` and AWS-style `AKIA` keys; names alone are fine.",
          test: "T.expect(typeof hasSecret === 'function', 'Define hasSecret(text).');\nT.eq(hasSecret('STRIPE_KEY=sk_live_abc123'), true, 'A live Stripe key starts sk_live_ — that prefix in any file is a leak');\nT.eq(hasSecret('const AWS_KEY = \"AKIAFAKEFAKEFAKEFAKE\";'), true, 'AWS access keys are AKIA + 16 uppercase letters/digits');\nT.eq(hasSecret('Set STRIPE_KEY in your host Variables panel'), false, 'The variable NAME is documentation — the VALUE is the secret');\nT.eq(hasSecret('AKIA keys start like this'), false, 'AKIA alone is not a key — require the 16 chars after it: /AKIA[A-Z0-9]{16}/');" },
        { text: "`isIgnored(path, gitignore)` — folder entries end in `/`; file entries match exactly.",
          test: "T.expect(typeof isIgnored === 'function', 'Define isIgnored(path, gitignore).');\nT.eq(isIgnored('.env', ['.env']), true, 'An exact entry ignores that file');\nT.eq(isIgnored('node_modules/pad/index.js', ['node_modules/']), true, 'An entry ending in / ignores everything under that folder');\nT.eq(isIgnored('config.js', ['.env', 'node_modules/']), false, 'config.js is not listed → tracked');\nT.eq(isIgnored('.env.example', ['.env']), false, 'The entry \".env\" matches \".env\" exactly — .env.example (values stripped) is a different, safe file');" },
        { text: "`auditRepo(files, gitignore)` — every tracked file with a secret, **sorted**.",
          test: "T.expect(typeof auditRepo === 'function', 'Define auditRepo(files, gitignore).');\nT.eq(auditRepo(FILES, ['node_modules/']), ['.env', 'config.js'], 'Two tracked files are leaking keys');\nT.eq(auditRepo(FILES, []), ['.env', 'config.js', 'node_modules/pad/index.js'], 'With no .gitignore at all, node_modules ships too. Sort the result — reports must be diffable');\nT.eq(auditRepo({}, []), [], 'Empty repo → clean report');" },
        { text: "The punchline: gitignoring `.env` is not the fix.",
          test: "T.eq(auditRepo(FILES, ['node_modules/', '.env']), ['config.js'], 'Gitignoring .env removes it from the report — but the key hardcoded in config.js is STILL shipping with every push');\nvar CLEAN = Object.assign({}, FILES, { 'config.js': 'export const awsKey = env.AWS_KEY; // read at runtime' });\nT.eq(auditRepo(CLEAN, ['node_modules/', '.env']), [], 'The real fix is moving the VALUE out of code and into env — not hiding the file better');" }
      ],
      files: [
        { name: "script.js", content: "// A repo about to be pushed. Which files are leaking keys?\n// (Every key below is obviously fake.)\n\nconst FILES = {\n  \"node_modules/pad/index.js\": \"module.exports = { demo: \\\"sk_live_not_a_real_key\\\" };\",\n  \".env\": \"STRIPE_KEY=sk_live_abc123\\nDATABASE_URL=postgres://app:hunter2@db.internal/prod\",\n  \"config.js\": \"const AWS_KEY = \\\"AKIAFAKEFAKEFAKEFAKE\\\";\\nexport const region = \\\"eu-west-1\\\";\",\n  \"README.md\": \"# NoteStream\\nSet STRIPE_KEY in your host Variables panel before deploying.\",\n  \"index.html\": \"<h1>NoteStream</h1>\"\n};\n\n// 1) hasSecret(text) → true if text contains \"sk_live_\"\n//    or an AWS-style key: AKIA followed by 16 uppercase letters/digits\n//    hint: /AKIA[A-Z0-9]{16}/.test(text)\n\n// 2) isIgnored(path, gitignore) → entries ending in \"/\" ignore the whole\n//    folder (path starts with the entry); other entries match exactly\n\n// 3) auditRepo(files, gitignore) → SORTED array of tracked paths whose\n//    content contains a secret\n\n// See the report (uncomment once auditRepo exists):\n// console.log(auditRepo(FILES, [\"node_modules/\"]));\n" }
      ],
      hints: [
        "hasSecret is one line: `return text.indexOf(\"sk_live_\") !== -1 || /AKIA[A-Z0-9]{16}/.test(text);`",
        "isIgnored checks each entry: `return gitignore.some(entry => entry.endsWith(\"/\") ? path.startsWith(entry) : path === entry);`",
        "auditRepo filters the keys, then sorts: `Object.keys(files).filter(p => !isIgnored(p, gitignore) && hasSecret(files[p])).sort()`"
      ],
      solution: {
        "script.js": "// A repo about to be pushed. Which files are leaking keys?\n// (Every key below is obviously fake.)\n\nconst FILES = {\n  \"node_modules/pad/index.js\": \"module.exports = { demo: \\\"sk_live_not_a_real_key\\\" };\",\n  \".env\": \"STRIPE_KEY=sk_live_abc123\\nDATABASE_URL=postgres://app:hunter2@db.internal/prod\",\n  \"config.js\": \"const AWS_KEY = \\\"AKIAFAKEFAKEFAKEFAKE\\\";\\nexport const region = \\\"eu-west-1\\\";\",\n  \"README.md\": \"# NoteStream\\nSet STRIPE_KEY in your host Variables panel before deploying.\",\n  \"index.html\": \"<h1>NoteStream</h1>\"\n};\n\nfunction hasSecret(text) {\n  return text.indexOf(\"sk_live_\") !== -1 || /AKIA[A-Z0-9]{16}/.test(text);\n}\n\nfunction isIgnored(path, gitignore) {\n  return gitignore.some(entry =>\n    entry.endsWith(\"/\") ? path.startsWith(entry) : path === entry\n  );\n}\n\nfunction auditRepo(files, gitignore) {\n  return Object.keys(files)\n    .filter(p => !isIgnored(p, gitignore) && hasSecret(files[p]))\n    .sort();\n}\n\nconsole.log(auditRepo(FILES, [\"node_modules/\"]));\n"
      }
    },

    {
      id: "ship-quiz-2",
      title: "Unit 2 quiz: Configuration",
      kind: "quiz", xp: 10,
      brief: "One object with three names, strings everywhere, fail-fast guards, and secrets. 80% to pass.",
      questions: [
        { q: "Your app works on your laptop but must call a different API URL in production. Where does that URL belong?",
          choices: ["In an if-statement that checks whether the hostname is localhost", "In a comment at the top, so whoever deploys remembers to edit it", "In the environment — the code reads it, the platform sets it", "In two copies of the file, config.dev.js and config.prod.js"],
          answer: 2, explain: "The same code runs everywhere; only the environment differs per deploy. `process.env` in Node, the `env` argument in a Worker, and a dashboard's Variables panel are the same object with three names — the platform sets it, `getConfig(env)` reads it. Hostname sniffing breaks the moment you add a staging or preview deploy, and two copies of a config file WILL drift apart." },
        { q: "You set DEBUG to false in the dashboard. What happens when this runs?",
          code: "// dashboard: Variables panel\n//   DEBUG = false\n\nif (env.DEBUG) {\n  console.log(\"verbose logging ON\");\n}",
          lang: "js",
          choices: ["It logs — env.DEBUG is the string \"false\", and any non-empty string is truthy", "Nothing logs — false is false, whichever panel it was typed into", "It throws a TypeError — an if condition cannot test a string", "Nothing logs, because the dashboard converts the value to a real boolean before your code ever sees it"],
          answer: 0, explain: "Everything crossing the env boundary is a string, so your code receives `\"false\"` — a non-empty string, which is truthy, and the debug branch runs in production. No platform converts types for you. Compare instead of casting: `env.DEBUG === \"true\"`, or a `bool()` helper at the boundary." },
        { q: "env.PORT is \"8080\". What does this print?",
          code: "const port = env.PORT; // you set PORT to 8080\nconsole.log(port + 1);",
          lang: "js",
          choices: ["8081", "\"80801\"", "NaN", "a TypeError"],
          answer: 1, explain: "`+` with a string on the left concatenates: `\"8080\" + 1` is `\"80801\"`. This is the classic port bug — the server boots on a nonsense port or crashes trying. Coerce once at the boundary with `Number(env.PORT)` inside `getConfig`, and the rest of the app never sees the string." },
        { q: "DATABASE_URL is missing from the environment. When is the BEST moment for your app to notice?",
          choices: ["Never crash — default to a local database and keep serving quietly", "At the first query, where the connection actually gets used", "Whenever a user reports that the site is acting oddly", "At boot, throwing an error that names DATABASE_URL"],
          answer: 3, explain: "Fail fast: a boot crash that names the variable shows up in the deploy log and is a 30-second fix. Waiting for the first query hides the problem for hours and surfaces it as an unrelated stack trace, and a user report means production was broken long enough for someone to notice. Silently defaulting to a local database in production is the worst option — that is how data quietly goes to the wrong place." },
        { q: "Which value belongs in an encrypted secret (`wrangler secret put`) rather than a plain `[vars]` variable?",
          choices: ["STRIPE_KEY", "API_URL", "APP_NAME", "DEBUG"],
          answer: 0, explain: "The test: would it matter if the value showed up in a screenshot, a log line, or the repo? A URL, an app name and a debug flag are plain configuration — fine in wrangler.toml's committed `[vars]` block. A payment key is a credential: set it with `wrangler secret put STRIPE_KEY` so it is stored encrypted and never written into any file — yet code reads both kinds the same way, as `env.STRIPE_KEY`." },
        { q: "You add `.env` to .gitignore, but your secret audit still flags config.js. Why?",
          choices: [".gitignore only applies to files created after the entry was added", "The audit report is cached from the previous run — re-running it after editing .gitignore would clear config.js", "The key is hardcoded in config.js — ignoring .env cannot un-write a secret from a tracked file", ".gitignore requires the entry config.js/ because every entry must end with a slash"],
          answer: 2, explain: ".gitignore is a bouncer, not a shredder: it stops untracked files from being added, and does nothing about a secret typed directly into code that git already tracks — that key ships with every push. The fix is moving the value into env and reading it at runtime, not hiding the file better. And a key that was ever committed is leaked: rotate it, because history remembers." }
      ]
    }
  ]
});
