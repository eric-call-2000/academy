/* Web Security Basics — Unit 4: Validation and injection */
window.CODELAB.addUnit("sec", {
  id: "sec-u4",
  title: "Validation and injection",
  icon: "🛡️",
  blurb: "Allow-lists beat deny-lists, canonicalize before you validate, and injection — SQL, NoSQL, command — is one bug wearing three hats.",
  cheat: [
    { h: "Allow-list, never deny-list", lang: "js", code: "// deny-list: block known-bad → loses, you forget cases\nbadFilter(\"<img/src=x onerror=1>\"); // sails through\n\n// allow-list: accept only known-good → fails closed\nfunction isSafeUsername(s) {\n  return typeof s === \"string\" && /^[a-z0-9_]{1,20}$/i.test(s);\n}", note: "Define the small set you accept; reject everything else, including attacks nobody has invented yet." },
    { h: "Canonicalize BEFORE you validate", lang: "js", code: "// %2e%2e%2f is just ../ in disguise\nlet s = name, prev = null;\nwhile (s !== prev) { prev = s; s = decodeURIComponent(s); }\n// ...decode until stable, THEN check for .. / \\ etc.", note: "Decode-once is not enough: %252e → %2e → '.'  Order of operations is the whole point." },
    { h: "Parameterize — data is never logic", lang: "js", code: "// VULNERABLE: the value becomes part of the query text\n\"SELECT * FROM users WHERE name = '\" + input + \"'\";\n\n// SAFE: query and values travel separately\nrunQueryParams(\"SELECT * FROM users WHERE name = ?\", [input]);", note: "A '?' placeholder binds input as pure data. No quotes in your query string means nothing to break out of." },
    { h: "NoSQL: refuse object-valued input", lang: "js", code: "// { \"$gt\": \"\" } is a query OPERATOR, not a name\nfunction buildFilter(input) {\n  if (typeof input !== \"string\") return { ok: false };\n  return { ok: true, filter: { name: input } };\n}", note: "Type-check first — an operator object can never reach the query if you insist the value is a string." },
    { h: "Command: pass an argv array", lang: "js", code: "// UNSAFE shell string: \"; rm -rf /\" runs as a 2nd command\ncmd + \" \" + userInput;\n\n// SAFE: one inert argument, semicolon never parsed\nsafeArgs(\"convert\", \"a.png; rm -rf /\"); // [\"convert\", \"a.png; rm -rf /\"]", note: "Change the STRUCTURE, not the string. You don't sanitize the semicolon; you make it impossible to be a command." }
  ],
  lessons: [

    {
      id: "sec-u4-1",
      title: "Allow-list, never deny-list",
      kind: "js", chip: "SEC", xp: 15, mins: 12,
      brief: "You already know how to check a field is **present** — that was `srv-u6-1`. This is a different question: is it **safe**? A different question with a different answer.\n\nTwo strategies. A **deny-list** blocks known-bad input — and loses, because it has to imagine every attack in advance. An **allow-list** flips it: define the narrow set you accept and reject everything else, including attacks nobody has invented yet.\n\nThis is a lab against your own toy filter — the payloads are OWASP-textbook and everything runs in your sandbox. Watch the shipped deny-list wave a payload through, then write the allow-list that stops it.",
      example: { lang: "js", code: "// a positive rule: usernames are letters, digits, underscore, 1–20 long\n/^[a-z0-9_]{1,20}$/i.test(\"ada_99\"); // true\n/^[a-z0-9_]{1,20}$/i.test(\"<img onerror=1>\"); // false" },
      steps: [
        { text: "Watch the deny-list fail: `badFilter` strips the tag it knows, but waves the `<img onerror>` payload straight through.",
          test: "T.expect(typeof badFilter === \"function\", \"badFilter is provided — the deny-list to beat.\");\nT.eq(badFilter(\"<script>alert(1)</script>\"), \"alert(1)\", \"The deny-list DOES strip the one tag it was told about...\");\nT.eq(badFilter(\"<img/src=x onerror=1>\"), \"<img/src=x onerror=1>\", \"...but it waves this payload through untouched — it never listed <img onerror>.\");" },
        { text: "Write `isSafeUsername(s)` — a positive allow-list: 1–20 characters, each a letter, digit, or underscore.",
          test: "T.expect(typeof isSafeUsername === \"function\", \"Define isSafeUsername(s).\");\nT.eq(isSafeUsername(\"ada_99\"), true, \"ada_99 is allowed: letters, digits and underscore only.\");\nT.eq(isSafeUsername(\"<img/src=x onerror=1>\"), false, \"The payload has angle brackets, slashes and spaces — rejected.\");\nT.eq(isSafeUsername(\"ada 99\"), false, \"A space is not on the allow-list.\");\nT.eq(isSafeUsername(\"a\".repeat(200)), false, \"A 200-character name is rejected by the length cap.\");\nT.eq(isSafeUsername(\"\"), false, \"Empty is rejected — at least one character is required.\");" },
        { text: "It must **fail closed** on non-strings: return `false`, never throw.",
          test: "T.eq(isSafeUsername(null), false, \"null returns false, not a crash.\");\nT.eq(isSafeUsername(42), false, \"A number returns false — a number is not a string.\");\nT.eq(isSafeUsername({}), false, \"An object returns false. Guard the type BEFORE you test the pattern.\");" }
      ],
      files: [
        { name: "script.js", content: "// A DENY-LIST filter (the losing strategy): strip <script> tags.\n// It ships working — but a deny-list only blocks what it thought of.\nfunction badFilter(s) {\n  return String(s).split(\"<script>\").join(\"\").split(\"</script>\").join(\"\");\n}\n\n// TODO: write isSafeUsername(s) — a positive ALLOW-LIST.\n// Accept ONLY 1–20 characters, each a letter, digit, or underscore.\n// Everything else → false. Non-strings → false too (never throw).\n" }
      ],
      hints: [
        "A positive regex, anchored at both ends: `/^[a-z0-9_]{1,20}$/i`. The `^` and `$` mean the WHOLE string must match, and `{1,20}` caps the length.",
        "Guard the type first so nothing throws: `if (typeof s !== \"string\") return false;` then `return /^[a-z0-9_]{1,20}$/i.test(s);`"
      ],
      solution: {
        "script.js": "// A DENY-LIST filter (the losing strategy): strip <script> tags.\n// It ships working — but a deny-list only blocks what it thought of.\nfunction badFilter(s) {\n  return String(s).split(\"<script>\").join(\"\").split(\"</script>\").join(\"\");\n}\n\nfunction isSafeUsername(s) {\n  if (typeof s !== \"string\") return false;\n  return /^[a-z0-9_]{1,20}$/i.test(s);\n}\n"
      }
    },

    {
      id: "sec-u4-2",
      title: "Canonicalize before you validate",
      kind: "js", chip: "SEC", xp: 15, mins: 13,
      brief: "An attacker's favorite trick: send the same payload wearing a disguise. `../` becomes `%2e%2e%2f`; a check that looks for the literal `..` never sees it.\n\nThe fix is **canonicalization** — reduce input to one definitive form *before* you validate. Decode first, then check. And decode until the string stops changing, because `%252e` decodes to `%2e`, which decodes again to `.` — decode-once is not enough.\n\nThis is a lab against your own path check. Order of operations is the whole lesson.",
      example: { lang: "js", code: "decodeURIComponent(\"%2e%2e%2fetc%2fpasswd\"); // \"../etc/passwd\"\n// validate the DECODED form, not the raw one" },
      steps: [
        { text: "Watch the bypass: `checkNaive` blocks the literal `..`, but the same attack percent-encoded walks right past it.",
          test: "T.expect(typeof checkNaive === \"function\", \"checkNaive is provided — the naive check to beat.\");\nT.eq(checkNaive(\"../../etc/passwd\"), \"blocked\", \"It blocks the literal .. it was told about.\");\nT.eq(checkNaive(\"%2e%2e%2fetc%2fpasswd\"), \"allowed\", \"But the SAME attack, percent-encoded, walks right past it.\");" },
        { text: "Write `resolveUpload(name)`: decode until stable, THEN reject `..`, a forward slash, a backslash, a leading dot, or a NUL byte. A clean name like `report.pdf` is allowed.",
          test: "T.expect(typeof resolveUpload === \"function\", \"Define resolveUpload(name).\");\nT.eq(resolveUpload(\"report.pdf\"), \"allowed\", \"A clean filename is allowed.\");\nT.eq(resolveUpload(\"../../etc/passwd\"), \"blocked\", \"The raw traversal payload is blocked.\");\nT.eq(resolveUpload(\"%2e%2e%2fetc%2fpasswd\"), \"blocked\", \"And so is the percent-encoded one — because you decoded FIRST.\");" },
        { text: "Prove decode-once is not enough, and fail closed on the rest.",
          test: "T.eq(resolveUpload(\"%252e%252e%252fetc\"), \"blocked\", \"Double-encoded %252e decodes to %2e decodes to '.' — decoding until stable catches it.\");\nT.eq(resolveUpload(\"good%00.pdf\"), \"blocked\", \"A NUL byte (%00) is blocked — a classic way to truncate a name.\");\nT.eq(resolveUpload(\"sub\\\\dir\"), \"blocked\", \"A backslash is blocked too.\");\nT.eq(resolveUpload(\".env\"), \"blocked\", \"A leading dot is blocked.\");\nT.eq(resolveUpload(42), \"blocked\", \"A non-string is blocked, never a crash.\");" }
      ],
      files: [
        { name: "script.js", content: "// A NAIVE path check: reject any name containing the literal \"..\".\n// It runs — but watch an encoded payload stroll right past it.\nfunction checkNaive(name) {\n  if (String(name).indexOf(\"..\") !== -1) return \"blocked\";\n  return \"allowed\";\n}\n\n// TODO: write resolveUpload(name).\n//  1) if it is not a string → \"blocked\"\n//  2) CANONICALIZE: decodeURIComponent in a loop until it stops changing\n//     (a bad escape throws — treat that as \"blocked\")\n//  3) reject: \"..\", a forward slash, a backslash, a leading \".\", a NUL byte\n//  4) otherwise → \"allowed\"\n" }
      ],
      hints: [
        "Decode until stable so double-encoding cannot hide: `let s = name, prev = null; try { while (s !== prev) { prev = s; s = decodeURIComponent(s); } } catch (e) { return \"blocked\"; }`",
        "Then a run of rejections: `if (s.indexOf(\"..\") !== -1) return \"blocked\";` — repeat for `\"/\"`, `\"\\\\\"`, `s.charAt(0) === \".\"`, and `\"\\u0000\"`. Fall through to `return \"allowed\";`"
      ],
      solution: {
        "script.js": "function checkNaive(name) {\n  if (String(name).indexOf(\"..\") !== -1) return \"blocked\";\n  return \"allowed\";\n}\n\nfunction resolveUpload(name) {\n  if (typeof name !== \"string\") return \"blocked\";\n  let decoded = name, prev = null;\n  try {\n    while (decoded !== prev) { prev = decoded; decoded = decodeURIComponent(decoded); }\n  } catch (e) {\n    return \"blocked\";\n  }\n  if (decoded.indexOf(\"..\") !== -1) return \"blocked\";\n  if (decoded.indexOf(\"/\") !== -1) return \"blocked\";\n  if (decoded.indexOf(\"\\\\\") !== -1) return \"blocked\";\n  if (decoded.charAt(0) === \".\") return \"blocked\";\n  if (decoded.indexOf(\"\\u0000\") !== -1) return \"blocked\";\n  return \"allowed\";\n}\n"
      }
    },

    {
      id: "sec-u4-3",
      title: "Injection is a string-concatenation bug",
      kind: "js", chip: "SEC", xp: 15, mins: 14,
      brief: "SQL injection, in one sentence: your query is a **string**, and the attacker gets to write part of it.\n\nThe toy database below understands just enough SQL to be dangerous. Your `findUser` builds its query by gluing the username into the text — so a username of `' OR '1'='1` closes the quote and rewrites the logic. This is a lab against your own toy engine; the payload is textbook.\n\nRewrite `findUser` to call the provided `runQueryParams(sql, params)`, which sends the query and the values **separately**. A bound value can never become logic.\n\n(The toy SQL engine is a teaching prop — never ship it. Real code uses prepared statements or a query builder that parameterizes for you.)",
      example: { lang: "js", code: "// concatenation: input becomes part of the SQL\n\"...WHERE name = '\" + \"' OR '1'='1\" + \"'\"; // always true → every row\n\n// parameterized: input stays data\nrunQueryParams(\"...WHERE name = ?\", [\"' OR '1'='1\"]); // matches nobody" },
      steps: [
        { text: "Run the exact string your naive `findUser` builds, and watch the injection return the whole table.",
          test: "T.expect(typeof runQuery === \"function\", \"runQuery is the provided toy engine — do not delete it.\");\nvar leaked = runQuery(\"SELECT * FROM users WHERE name = '' OR '1'='1'\");\nT.eq(leaked.length, 4, \"The injected OR '1'='1' is always true, so all four users leak out.\");\nvar hit = runQuery(\"SELECT * FROM users WHERE name = 'ada'\");\nT.eq(hit.length, 1, \"A normal name still matches exactly one row.\");" },
        { text: "Rewrite `findUser(input)` to call `runQueryParams` — bind the name as a parameter, never concatenate.",
          test: "T.expect(typeof findUser === \"function\", \"Define findUser(input).\");\nT.eq(findUser(\"ada\"), [{ id: 1, name: \"ada\" }], \"Looking up ada returns exactly the ada row.\");\nT.eq(findUser(\"bo\"), [{ id: 2, name: \"bo\" }], \"And bo returns the bo row.\");\nT.eq(findUser(\"nope\"), [], \"An unknown name returns no rows.\");" },
        { text: "Now attack your own fixed function: the injection returns nothing, and the query text carries no quotes.",
          test: "T.eq(findUser(\"' OR '1'='1\"), [], \"Parameterized: the payload is compared as a literal username and matches nobody.\");\nT.expect(findUser.toString().indexOf(\"'\") === -1, \"Your findUser should contain no single-quote — no quotes means no string for input to break out of.\");" }
      ],
      files: [
        { name: "script.js", content: "// ============================================================\n//  \u26a0\ufe0f  TOY SQL ENGINE — a teaching prop. NEVER SHIP THIS.\n//  ~60 lines of regex that understand just enough SQL to be\n//  dangerous: SELECT ... WHERE name = '...', OR '1'='1', and --.\n//  You do NOT edit anything above findUser.\n// ============================================================\nconst USERS = [\n  { id: 1, name: \"ada\" },\n  { id: 2, name: \"bo\" },\n  { id: 3, name: \"cy\" },\n  { id: 4, name: \"di\" }\n];\n\nfunction __tokenize(cond) {\n  const tokens = [];\n  let i = 0;\n  while (i < cond.length) {\n    const c = cond[i];\n    if (c === \" \") { i++; continue; }\n    if (c === \"'\") {\n      let j = i + 1, s = \"\";\n      while (j < cond.length && cond[j] !== \"'\") { s += cond[j]; j++; }\n      tokens.push({ t: \"str\", v: s });\n      i = j + 1; continue;\n    }\n    if (c === \"?\") { tokens.push({ t: \"param\" }); i++; continue; }\n    if (c === \"=\") { tokens.push({ t: \"op\" }); i++; continue; }\n    const m = /^[A-Za-z0-9_]+/.exec(cond.slice(i));\n    if (m) {\n      const w = m[0], up = w.toUpperCase();\n      if (up === \"OR\" || up === \"AND\") tokens.push({ t: \"logic\", v: up });\n      else tokens.push({ t: \"ident\", v: w });\n      i += w.length; continue;\n    }\n    i++;\n  }\n  return tokens;\n}\n\nfunction __evalRow(tokens, row, params) {\n  let idx = 0, pi = 0;\n  function operand() {\n    const tok = tokens[idx++];\n    if (!tok) return \"\";\n    if (tok.t === \"str\") return tok.v;\n    if (tok.t === \"param\") return String(params[pi++]);\n    if (tok.t === \"ident\") return tok.v.toLowerCase() === \"name\" ? row.name : \"\";\n    return \"\";\n  }\n  function comparison() {\n    const left = operand();\n    const op = tokens[idx++];\n    const right = operand();\n    return op && op.t === \"op\" ? left === right : false;\n  }\n  let result = comparison();\n  while (idx < tokens.length) {\n    const logic = tokens[idx++];\n    if (!logic || logic.t !== \"logic\") break;\n    const next = comparison();\n    result = logic.v === \"OR\" ? (result || next) : (result && next);\n  }\n  return result;\n}\n\n// VULNERABLE path: interpolates the finished SQL string.\nfunction runQuery(sql) {\n  const cleaned = String(sql).replace(/--.*$/g, \"\");\n  const wm = /WHERE +(.*)$/i.exec(cleaned);\n  if (!wm) return USERS.slice();\n  const tokens = __tokenize(wm[1]);\n  return USERS.filter(function (row) { return __evalRow(tokens, row, []); });\n}\n\n// SAFE path: SQL and values travel separately. '?' binds a param as data.\nfunction runQueryParams(sql, params) {\n  params = params || [];\n  const cleaned = String(sql).replace(/--.*$/g, \"\");\n  const wm = /WHERE +(.*)$/i.exec(cleaned);\n  if (!wm) return USERS.slice();\n  const tokens = __tokenize(wm[1]);\n  return USERS.filter(function (row) { return __evalRow(tokens, row, params); });\n}\n// ===================  end read-only toy  ====================\n\n// TODO: this glues user input straight into the SQL. Rewrite it to call\n// runQueryParams(\"SELECT * FROM users WHERE name = ?\", [input]).\nfunction findUser(input) {\n  const sql = \"SELECT * FROM users WHERE name = '\" + input + \"'\";\n  return runQuery(sql);\n}\n" }
      ],
      hints: [
        "The whole fix is to stop building the string. Hand the query and the value to the engine separately: `return runQueryParams(\"SELECT * FROM users WHERE name = ?\", [input]);`",
        "Notice the payoff: your new `findUser` contains no single-quote character at all. No quotes in the query text means there is no string literal for the input to escape out of."
      ],
      solution: {
        "script.js": "// ============================================================\n//  \u26a0\ufe0f  TOY SQL ENGINE — a teaching prop. NEVER SHIP THIS.\n//  ~60 lines of regex that understand just enough SQL to be\n//  dangerous: SELECT ... WHERE name = '...', OR '1'='1', and --.\n//  You do NOT edit anything above findUser.\n// ============================================================\nconst USERS = [\n  { id: 1, name: \"ada\" },\n  { id: 2, name: \"bo\" },\n  { id: 3, name: \"cy\" },\n  { id: 4, name: \"di\" }\n];\n\nfunction __tokenize(cond) {\n  const tokens = [];\n  let i = 0;\n  while (i < cond.length) {\n    const c = cond[i];\n    if (c === \" \") { i++; continue; }\n    if (c === \"'\") {\n      let j = i + 1, s = \"\";\n      while (j < cond.length && cond[j] !== \"'\") { s += cond[j]; j++; }\n      tokens.push({ t: \"str\", v: s });\n      i = j + 1; continue;\n    }\n    if (c === \"?\") { tokens.push({ t: \"param\" }); i++; continue; }\n    if (c === \"=\") { tokens.push({ t: \"op\" }); i++; continue; }\n    const m = /^[A-Za-z0-9_]+/.exec(cond.slice(i));\n    if (m) {\n      const w = m[0], up = w.toUpperCase();\n      if (up === \"OR\" || up === \"AND\") tokens.push({ t: \"logic\", v: up });\n      else tokens.push({ t: \"ident\", v: w });\n      i += w.length; continue;\n    }\n    i++;\n  }\n  return tokens;\n}\n\nfunction __evalRow(tokens, row, params) {\n  let idx = 0, pi = 0;\n  function operand() {\n    const tok = tokens[idx++];\n    if (!tok) return \"\";\n    if (tok.t === \"str\") return tok.v;\n    if (tok.t === \"param\") return String(params[pi++]);\n    if (tok.t === \"ident\") return tok.v.toLowerCase() === \"name\" ? row.name : \"\";\n    return \"\";\n  }\n  function comparison() {\n    const left = operand();\n    const op = tokens[idx++];\n    const right = operand();\n    return op && op.t === \"op\" ? left === right : false;\n  }\n  let result = comparison();\n  while (idx < tokens.length) {\n    const logic = tokens[idx++];\n    if (!logic || logic.t !== \"logic\") break;\n    const next = comparison();\n    result = logic.v === \"OR\" ? (result || next) : (result && next);\n  }\n  return result;\n}\n\n// VULNERABLE path: interpolates the finished SQL string.\nfunction runQuery(sql) {\n  const cleaned = String(sql).replace(/--.*$/g, \"\");\n  const wm = /WHERE +(.*)$/i.exec(cleaned);\n  if (!wm) return USERS.slice();\n  const tokens = __tokenize(wm[1]);\n  return USERS.filter(function (row) { return __evalRow(tokens, row, []); });\n}\n\n// SAFE path: SQL and values travel separately. '?' binds a param as data.\nfunction runQueryParams(sql, params) {\n  params = params || [];\n  const cleaned = String(sql).replace(/--.*$/g, \"\");\n  const wm = /WHERE +(.*)$/i.exec(cleaned);\n  if (!wm) return USERS.slice();\n  const tokens = __tokenize(wm[1]);\n  return USERS.filter(function (row) { return __evalRow(tokens, row, params); });\n}\n// ===================  end read-only toy  ====================\n\nfunction findUser(input) {\n  return runQueryParams(\"SELECT * FROM users WHERE name = ?\", [input]);\n}\n"
      }
    },

    {
      id: "sec-u4-4",
      title: "Same bug, different language",
      kind: "js", chip: "SEC", xp: 15, mins: 13,
      brief: "Injection is one bug wearing three hats. You just fixed the SQL hat; here are two more.\n\n**NoSQL operator injection**: a login reads `{ name: input }` into a database query. Send `{\"$gt\":\"\"}` and you have smuggled a query *operator* where a string belonged — `name` greater than empty matches every row. The fix is to insist the value is a string.\n\n**Command injection**: build a shell string `convert a.png` and an attacker appends `; rm -rf /`. The fix is to pass an **argv array** — the user's text stays one inert argument, and the semicolon never starts a new command.\n\nSame root cause every time: data placed where a structure was expected. This is a lab against your own sandbox.",
      steps: [
        { text: "Write `buildFilter(input)` — accept a string username, refuse anything else (an operator object, an array, a number).",
          test: "T.expect(typeof buildFilter === \"function\", \"Define buildFilter(input).\");\nT.eq(buildFilter(\"ada\").ok, true, \"A plain string username is accepted.\");\nT.eq(buildFilter(\"ada\").filter, { name: \"ada\" }, \"It builds { name: 'ada' } for the lookup.\");\nT.eq(buildFilter({ \"$gt\": \"\" }).ok, false, \"An operator object must be REFUSED — it is not a string.\");\nT.eq(buildFilter([\"ada\"]).ok, false, \"An array is an object too — refuse it.\");\nT.eq(buildFilter(42).ok, false, \"A number is not a valid username — refuse it.\");" },
        { text: "Watch the unsafe command: concatenating into a shell string smuggles a second command after the semicolon.",
          test: "T.expect(typeof unsafeCmd === \"function\", \"unsafeCmd is provided — the dangerous way, for contrast.\");\nT.eq(unsafeCmd(\"convert\", \"a.png; rm -rf /\"), \"convert a.png; rm -rf /\", \"One shell string: the ; starts a whole second command.\");" },
        { text: "Write `safeArgs(cmd, userInput)` — return an argv **array**, so the user's text is one inert argument.",
          test: "T.expect(typeof safeArgs === \"function\", \"Define safeArgs(cmd, userInput).\");\nvar argv = safeArgs(\"convert\", \"a.png; rm -rf /\");\nT.eq(argv, [\"convert\", \"a.png; rm -rf /\"], \"Return an argv ARRAY — the whole user string is ONE argument.\");\nT.eq(argv.length, 2, \"Exactly two elements: the command and one argument. The semicolon never starts a new command.\");\nT.expect(argv[1].indexOf(\"; rm -rf /\") !== -1, \"You did not sanitize the string — you changed the STRUCTURE so it cannot parse as a command.\");" }
      ],
      files: [
        { name: "script.js", content: "// buildFilter: build a database lookup filter from a username.\n// NAIVE version — it trusts whatever it is handed. Fix it so an\n// operator object like { \"$gt\": \"\" } can never reach the query.\nfunction buildFilter(input) {\n  return { ok: true, filter: { name: input } };\n}\n\n// \u26a0\ufe0f unsafeCmd — the dangerous way, kept for contrast. NEVER SHIP THIS.\n// It pastes user input into one shell string, so \"; rm -rf /\" runs as a\n// second command. Read it; do not edit it.\nfunction unsafeCmd(cmd, userInput) {\n  return cmd + \" \" + userInput;\n}\n\n// TODO: write safeArgs(cmd, userInput) — return an argv ARRAY instead,\n// e.g. [\"convert\", \"a.png; rm -rf /\"]. The user string stays one element.\n" }
      ],
      hints: [
        "buildFilter is a type guard: `if (typeof input !== \"string\") return { ok: false, error: \"username must be a string\" };` then `return { ok: true, filter: { name: input } };` — note `typeof [] === \"object\"`, so arrays are refused too.",
        "safeArgs does not build a string at all — it returns the pieces: `return [cmd, userInput];`. The shell never sees one combined line, so the semicolon is just characters inside argument two."
      ],
      solution: {
        "script.js": "function buildFilter(input) {\n  if (typeof input !== \"string\") {\n    return { ok: false, error: \"username must be a string\" };\n  }\n  return { ok: true, filter: { name: input } };\n}\n\n// \u26a0\ufe0f unsafeCmd — the dangerous way, kept for contrast. NEVER SHIP THIS.\nfunction unsafeCmd(cmd, userInput) {\n  return cmd + \" \" + userInput;\n}\n\nfunction safeArgs(cmd, userInput) {\n  return [cmd, userInput];\n}\n"
      }
    },

    {
      id: "sec-quiz-4",
      title: "Unit 4 quiz: Validation & injection",
      kind: "quiz", xp: 10,
      brief: "Allow-lists, canonicalization order, and injection as one string-concatenation bug. 80% to pass.",
      questions: [
        { q: "You ship a filter that removes any `<script>` tag from input. Why is this the losing strategy?",
          choices: [
            "It is too slow to run on every request",
            "Attackers have endless encodings and tags you never listed, like `<img onerror>`",
            "It blocks legitimate users who type the word script",
            "Modern browsers already strip script tags for you"
          ],
          answer: 1,
          explain: "A deny-list has to name every dangerous input in advance, and there are effectively infinite encodings, tags and attributes to reach for. Forget one — `<img onerror>`, `<svg onload>`, a mixed-case `<ScRiPt>` — and the payload sails through. An allow-list inverts the burden: define the small set you accept and reject everything else." },

        { q: "What do you call a validation rule that accepts only a defined set of known-good values and rejects everything else?",
          choices: ["A denylist", "An allowlist", "A blocklist", "A sanitizer"],
          answer: 1,
          explain: "An allowlist (whitelist) enumerates what is permitted and rejects the rest, so novel attacks fail closed by default. A denylist or blocklist does the opposite and must predict every bad input. For a username, `^[a-z0-9_]{1,20}$` is an allowlist: any character outside that set is refused without you having to imagine it first." },

        { q: "A path check rejects the literal `..` but lets `%2e%2e%2f` through. What must you do before validating?",
          choices: [
            "Reject every request that contains a percent sign",
            "Validate the input twice to be safe",
            "Canonicalize the input first",
            "Escape the output instead"
          ],
          answer: 2,
          explain: "`%2e%2e%2f` is just `../` percent-encoded — the same attack wearing a disguise. If you validate before decoding, your `..` check never sees it. Canonicalize first: decode to one definitive form, and keep decoding until it stops changing so double-encoded `%252e` is caught too, THEN apply your rules." },

        { q: "What is the root cause shared by SQL injection, NoSQL operator injection, and command injection?",
          choices: [
            "Running each server process as the root user",
            "Missing HTTPS encryption between the browser and the database server",
            "Untrusted input placed where a structure was expected",
            "Weak or reused passwords on the database account"
          ],
          answer: 2,
          explain: "All three are one bug: a value the user controls lands where the interpreter reads structure — the SQL of a query, the shape of a query object, the words of a shell command. The fix is always to keep data as data: parameterized queries bind values, so `' OR '1'='1` is compared as a literal and matches nobody." },

        { q: "This login query is vulnerable. What replaces it?",
          code: "const sql = \"SELECT * FROM users WHERE name = '\" + input + \"'\";\nreturn runQuery(sql);",
          lang: "js",
          choices: [
            "Parameterized queries",
            "A longer, stronger regular expression on the input before you concatenate it in",
            "Escaping every quote character in the input by hand",
            "Hashing the input before the lookup"
          ],
          answer: 0,
          explain: "Never build the query text from user input. A parameterized (prepared) query sends the SQL and the values separately — `WHERE name = ?` with `[input]` bound — so the database treats `input` purely as data. Escaping quotes by hand is the fragile path that eventually misses a case." },

        { q: "A login reads `{ name: req.body.username }` straight into a database filter. Sending `{\"$gt\":\"\"}` as the username logs the attacker in. The fix?",
          choices: [
            "Add every known operator like `$gt` and `$ne` to a growing deny-list",
            "Rename the database field so the operator misses",
            "Trust it, since `$gt` on a login is harmless",
            "Insist the username is a string"
          ],
          answer: 3,
          explain: "The attacker smuggled a query operator where a string was expected: `{\"$gt\":\"\"}` means name greater than empty, which every row satisfies. Because the code never checked the TYPE, the object became part of the query structure. Refuse object-valued input and the operator has nowhere to live — the same move as passing an argv array to a shell." }
      ]
    }
  ]
});
