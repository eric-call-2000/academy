/* Back-End Foundations — Unit 3: Query params & headers */
window.CODELAB.addUnit("srv", {
  id: "srv-u3",
  title: "Query params & headers",
  icon: "🔍",
  blurb: "Requests get expressive: query strings that filter, search, sort and limit — plus the headers that negotiate formats.",
  cheat: [
    { h: "The query string, parsed", lang: "js", code: "// GET /api/books?q=dune&limit=2\n// everything after the ? is the query string\nreq.query               // { q: \"dune\", limit: \"2\" }\nNumber(req.query.limit) // 2 — values ALWAYS arrive as strings", note: "The URL is text, so every query value is text. Number() before you do math with one." },
    { h: "Filter → sort → limit: the list pipeline", lang: "js", code: "let results = [...BOOKS];            // COPY first!\nif (query.q) {\n  const needle = query.q.toLowerCase();\n  results = results.filter(b => b.title.toLowerCase().includes(needle));\n}\nif (query.sort === \"year\") results.sort((a, b) => a.year - b.year);\nif (query.limit) results = results.slice(0, Number(query.limit));", note: "Sorting the shared array in place reorders it for EVERY later request — always sort a copy." },
    { h: "Headers: the message's fine print", lang: "js", code: "// on the REQUEST — what the client wants back:\nreq.headers[\"accept\"]   // \"application/json\"\n// on the RESPONSE — how to read the body:\n{ status: 200,\n  headers: { \"content-type\": \"application/json\" },\n  body: books }", note: "accept = the format the client asks for; content-type = the format a body actually is." },
    { h: "Empty result ≠ error", lang: "js", code: "// ?genre=poetry matched nothing:\n{ status: 200, body: [] }\n// 404 means \"no such ROUTE\",\n// not \"your search found no matches\"" },
    { h: "How this looks in Express (real Node.js)", lang: "js", code: "app.get(\"/api/books\", (req, res) => {\n  const q = req.query.q;   // parsed for you\n  res.json(filterBooks(q)); // sets content-type: application/json\n});", note: "Express parses the query string and stamps JSON headers automatically — you now know exactly what it does under the hood." }
  ],
  lessons: [

    {
      id: "srv-u3-1",
      title: "Query strings",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "Look at any search URL and you'll spot it: everything after the `?` is the **query string** — the client's way of tuning a request without a body. Filters, searches, page sizes: they all ride here.\n\nServers receive it as one raw string, `\"q=cat&limit=2\"`. Your job: parse it into an object — split on `&` for the pairs, then on `=` for key and value. From the next lesson on, requests hand you the finished object as `req.query`, exactly like Express does.\n\nBurn in the gotcha now: every value arrives as a **string**. `limit=2` gives you `\"2\"`, not `2`.",
      example: { lang: "js", code: "// GET /api/books?q=cat&limit=2\n//     ^-- path --^^-- query string --^\n//\n// \"q=cat&limit=2\"  →  { q: \"cat\", limit: \"2\" }" },
      steps: [
        { text: "Write `parseQuery(queryText)` — split on `&`, then each pair on `=`, and collect into an object.",
          test: "T.expect(typeof parseQuery === 'function', 'Define parseQuery(queryText).');\nT.eq(parseQuery('q=cat&limit=2'), { q: 'cat', limit: '2' }, \"parseQuery('q=cat&limit=2') should be { q: 'cat', limit: '2' } — values stay STRINGS\");\nT.eq(parseQuery('genre=scifi'), { genre: 'scifi' }, 'A single pair (no & at all) must work too');" },
        { text: "Guard the empty string: `parseQuery(\"\")` → `{}` (no query at all is perfectly legal).",
          test: "T.eq(parseQuery(''), {}, \"parseQuery('') must return {} — guard BEFORE splitting: ''.split('&') gives [''], not []\");\nT.eq(parseQuery('solo=1'), { solo: '1' }, 'Non-empty strings still parse after the guard');" },
        { text: "Prove the object answers the dot: log `parseQuery(\"q=cat&limit=2\").q`.",
          test: "T.expect(T.logged('cat'), \"console.log(parseQuery('q=cat&limit=2').q); — it should print cat\");" }
      ],
      files: [
        { name: "script.js", content: "// The query string: everything after the ? in a URL.\n//   /api/books?q=cat&limit=2   →   \"q=cat&limit=2\"\n\n// parseQuery(queryText) → { q: \"cat\", limit: \"2\" }\n//   1) empty string → return {}\n//   2) split on \"&\"        → [\"q=cat\", \"limit=2\"]\n//   3) split each on \"=\"   → key and value; collect into an object\n// NOTE: values STAY strings — \"2\", not 2.\n\n// then: log parseQuery(\"q=cat&limit=2\").q\n" }
      ],
      hints: [
        "Loop the pairs: `for (const pairText of queryText.split(\"&\")) { … }` — each pairText looks like `\"q=cat\"`.",
        "Split a pair in one line: `const [key, value] = pairText.split(\"=\");` then `result[key] = value;`",
        "Guard first: `if (queryText === \"\") return {};` — otherwise splitting the empty string invents a ghost pair."
      ],
      solution: {
        "script.js": "// The query string: everything after the ? in a URL.\n\nfunction parseQuery(queryText) {\n  const result = {};\n  if (queryText === \"\") return result;\n  for (const pairText of queryText.split(\"&\")) {\n    const [key, value] = pairText.split(\"=\");\n    result[key] = value;\n  }\n  return result;\n}\n\nconsole.log(parseQuery(\"q=cat&limit=2\").q);\n"
      }
    },

    {
      id: "srv-u3-2",
      title: "Filtering & searching",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "Your request object levels up. Unit 1 established `{ method, path, body }`; from now on requests can also carry **`query`** — the parsed object from last lesson, handed to you the way Express hands you `req.query`:\n\n`{ method: \"GET\", path: \"/api/books\", query: { q: \"dune\" }, body: null }`\n\nThe rules of a filterable list endpoint:\n\n- no query → the **full** list\n- `?q=` → case-insensitive title search (lowercase BOTH sides)\n- `?genre=` → exact match\n- both present → both filters apply\n- zero matches → still **200** with `[]` — 404 is for unknown *routes*, not empty results\n\nDefensive habit: `const query = req.query || {};` — never assume the field exists.",
      steps: [
        { text: "`GET /api/books` with an empty (or missing!) query → 200 with the full BOOKS list.",
          test: "T.expect(typeof handleRequest === 'function', 'Define handleRequest(req).');\nvar res = handleRequest({ method: 'GET', path: '/api/books', query: {}, body: null });\nT.eq(res, { status: 200, body: [\n  { id: 1, title: 'Dune', genre: 'scifi', year: 1965 },\n  { id: 2, title: 'The Hobbit', genre: 'fantasy', year: 1937 },\n  { id: 3, title: 'Neuromancer', genre: 'scifi', year: 1984 },\n  { id: 4, title: 'The Silmarillion', genre: 'fantasy', year: 1977 }\n] }, 'Empty query → the full list, untouched');\nvar res2 = handleRequest({ method: 'GET', path: '/api/books', body: null });\nT.expect(!!res2 && res2.status === 200 && Array.isArray(res2.body) && res2.body.length === 4, 'A request with NO query field at all must not crash — default it: const query = req.query || {};');" },
        { text: "`?q=` searches titles case-insensitively.",
          test: "var res = handleRequest({ method: 'GET', path: '/api/books', query: { q: 'dune' }, body: null });\nT.eq(res, { status: 200, body: [ { id: 1, title: 'Dune', genre: 'scifi', year: 1965 } ] }, '?q=dune should match Dune — lowercase the TITLE before comparing');\nvar res2 = handleRequest({ method: 'GET', path: '/api/books', query: { q: 'THE' }, body: null });\nT.eq(res2, { status: 200, body: [\n  { id: 2, title: 'The Hobbit', genre: 'fantasy', year: 1937 },\n  { id: 4, title: 'The Silmarillion', genre: 'fantasy', year: 1977 }\n] }, '?q=THE should match both The-books — lowercase the SEARCH TERM too');" },
        { text: "`?genre=` filters by exact genre; an unknown genre → 200 with `[]`.",
          test: "var res = handleRequest({ method: 'GET', path: '/api/books', query: { genre: 'scifi' }, body: null });\nT.eq(res, { status: 200, body: [\n  { id: 1, title: 'Dune', genre: 'scifi', year: 1965 },\n  { id: 3, title: 'Neuromancer', genre: 'scifi', year: 1984 }\n] }, '?genre=scifi → the two scifi books, original order');\nvar res2 = handleRequest({ method: 'GET', path: '/api/books', query: { genre: 'poetry' }, body: null });\nT.eq(res2, { status: 200, body: [] }, '?genre=poetry matches nothing → 200 with an empty array, NOT a 404');" },
        { text: "Both filters together — and unknown routes still 404.",
          test: "var res = handleRequest({ method: 'GET', path: '/api/books', query: { q: 'a', genre: 'fantasy' }, body: null });\nT.eq(res, { status: 200, body: [ { id: 4, title: 'The Silmarillion', genre: 'fantasy', year: 1977 } ] }, \"?q=a&genre=fantasy — q alone matches Neuromancer and The Silmarillion, genre narrows it to one. BOTH filters must apply\");\nT.eq(handleRequest({ method: 'GET', path: '/api/movies', query: {}, body: null }), { status: 404, body: 'Not found' }, 'Unknown paths still get the 404 catch-all');" }
      ],
      files: [
        { name: "script.js", content: "// request = { method, path, query, body }   ← query is NEW: an already-parsed object\n// response = { status, body }\n\nconst BOOKS = [\n  { id: 1, title: \"Dune\", genre: \"scifi\", year: 1965 },\n  { id: 2, title: \"The Hobbit\", genre: \"fantasy\", year: 1937 },\n  { id: 3, title: \"Neuromancer\", genre: \"scifi\", year: 1984 },\n  { id: 4, title: \"The Silmarillion\", genre: \"fantasy\", year: 1977 }\n];\n\nfunction handleRequest(req) {\n  // GET /api/books:\n  //   const query = req.query || {};\n  //   start with the whole list, then narrow:\n  //   1) query.q     → keep titles that CONTAIN it, case-insensitive\n  //   2) query.genre → keep exact genre matches\n  //   → { status: 200, body: results }\n  // else → { status: 404, body: \"Not found\" }\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/books\", query: { q: \"dune\" }, body: null }));\n" }
      ],
      hints: [
        "Start wide and narrow down: `let results = BOOKS;` then reassign `results = results.filter(…)` for each filter that applies.",
        "Case-insensitive search: `const needle = query.q.toLowerCase();` then `results = results.filter(b => b.title.toLowerCase().includes(needle));`",
        "Genre is a separate, independent if: `if (query.genre) results = results.filter(b => b.genre === query.genre);` — when both are set, both run."
      ],
      solution: {
        "script.js": "// request = { method, path, query, body }   ← query is an already-parsed object\n// response = { status, body }\n\nconst BOOKS = [\n  { id: 1, title: \"Dune\", genre: \"scifi\", year: 1965 },\n  { id: 2, title: \"The Hobbit\", genre: \"fantasy\", year: 1937 },\n  { id: 3, title: \"Neuromancer\", genre: \"scifi\", year: 1984 },\n  { id: 4, title: \"The Silmarillion\", genre: \"fantasy\", year: 1977 }\n];\n\nfunction handleRequest(req) {\n  if (req.method === \"GET\" && req.path === \"/api/books\") {\n    const query = req.query || {};\n    let results = BOOKS;\n    if (query.q) {\n      const needle = query.q.toLowerCase();\n      results = results.filter(b => b.title.toLowerCase().includes(needle));\n    }\n    if (query.genre) {\n      results = results.filter(b => b.genre === query.genre);\n    }\n    return { status: 200, body: results };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/books\", query: { q: \"dune\" }, body: null }));\n"
      }
    },

    {
      id: "srv-u3-3",
      title: "Headers & content types",
      kind: "js", chip: "SERVER", xp: 15, mins: 12,
      brief: "Every HTTP message carries **headers** — small key/value notes about the message itself. Both halves of our convention grow:\n\n- request: `{ method, path, query, headers, body }`\n- response: `{ status, headers, body }`\n\nThe two headers that matter most: **`content-type`** on a response (how to read the body — `application/json` vs `text/plain`) and **`accept`** on a request (the format the client would *like* back).\n\nYou'll ship a JSON books route, a plain-text `/health` route — the tiny endpoint every load balancer pings — and one `/api/motd` route that reads `req.headers[\"accept\"]` and answers in whichever format was requested.",
      steps: [
        { text: "`GET /health` → 200, headers `{ \"content-type\": \"text/plain\" }`, body `\"ok\"`.",
          test: "T.expect(typeof handleRequest === 'function', 'Define handleRequest(req).');\nvar res = handleRequest({ method: 'GET', path: '/health', query: {}, headers: {}, body: null });\nT.eq(res, { status: 200, headers: { 'content-type': 'text/plain' }, body: 'ok' }, 'GET /health — responses now have THREE keys: status, headers, body');" },
        { text: "`GET /api/books` → 200 with JSON content-type and the BOOKS array.",
          test: "var res = handleRequest({ method: 'GET', path: '/api/books', query: {}, headers: {}, body: null });\nT.eq(res, { status: 200, headers: { 'content-type': 'application/json' }, body: [ { id: 1, title: 'Dune' }, { id: 2, title: 'Neuromancer' } ] }, 'GET /api/books should carry content-type application/json');" },
        { text: "`GET /api/motd` reads `req.headers[\"accept\"]`: JSON asked → JSON given; anything else (or no headers at all) → plain text.",
          test: "var jsonRes = handleRequest({ method: 'GET', path: '/api/motd', query: {}, headers: { accept: 'application/json' }, body: null });\nT.eq(jsonRes, { status: 200, headers: { 'content-type': 'application/json' }, body: { motd: 'Ship it!' } }, \"accept: application/json → body { motd: 'Ship it!' } with a matching content-type\");\nvar textRes = handleRequest({ method: 'GET', path: '/api/motd', query: {}, headers: { accept: 'text/plain' }, body: null });\nT.eq(textRes, { status: 200, headers: { 'content-type': 'text/plain' }, body: 'Ship it!' }, 'accept: text/plain → the bare string');\nvar bare = handleRequest({ method: 'GET', path: '/api/motd', query: {}, body: null });\nT.eq(bare, { status: 200, headers: { 'content-type': 'text/plain' }, body: 'Ship it!' }, 'A request with NO headers field must not crash — default it: const reqHeaders = req.headers || {};');" },
        { text: "The 404 catch-all speaks plain text too.",
          test: "T.eq(handleRequest({ method: 'GET', path: '/nope', query: {}, headers: {}, body: null }), { status: 404, headers: { 'content-type': 'text/plain' }, body: 'Not found' }, 'Unknown routes → 404 with text/plain headers');\nT.eq(handleRequest({ method: 'POST', path: '/health', query: {}, headers: {}, body: null }).status, 404, 'POST /health is not a route you defined — 404 it');" }
      ],
      files: [
        { name: "script.js", content: "// Both sides grow headers this lesson:\n//   request  = { method, path, query, headers, body }\n//   response = { status, headers, body }\n\nconst BOOKS = [\n  { id: 1, title: \"Dune\" },\n  { id: 2, title: \"Neuromancer\" }\n];\nconst MOTD = \"Ship it!\";\n\nfunction handleRequest(req) {\n  // 1) GET /health    → 200, { \"content-type\": \"text/plain\" }, \"ok\"\n  // 2) GET /api/books → 200, { \"content-type\": \"application/json\" }, BOOKS\n  // 3) GET /api/motd  → check req.headers[\"accept\"]:\n  //      \"application/json\" → 200, json headers, { motd: MOTD }\n  //      anything else (or headers missing!) → 200, text/plain, MOTD\n  // 4) else → 404, text/plain, \"Not found\"\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/health\", query: {}, headers: {}, body: null }));\n" }
      ],
      hints: [
        "Every return now has three keys: `return { status: 200, headers: { \"content-type\": \"text/plain\" }, body: \"ok\" };`",
        "Read the accept header safely: `const reqHeaders = req.headers || {};` then `if (reqHeaders[\"accept\"] === \"application/json\") …`",
        "The JSON motd wraps the string in an object — `{ motd: MOTD }` — while the text version is just `MOTD` itself."
      ],
      solution: {
        "script.js": "// Both sides grow headers this lesson:\n//   request  = { method, path, query, headers, body }\n//   response = { status, headers, body }\n\nconst BOOKS = [\n  { id: 1, title: \"Dune\" },\n  { id: 2, title: \"Neuromancer\" }\n];\nconst MOTD = \"Ship it!\";\n\nfunction handleRequest(req) {\n  const reqHeaders = req.headers || {};\n  if (req.method === \"GET\" && req.path === \"/health\") {\n    return { status: 200, headers: { \"content-type\": \"text/plain\" }, body: \"ok\" };\n  }\n  if (req.method === \"GET\" && req.path === \"/api/books\") {\n    return { status: 200, headers: { \"content-type\": \"application/json\" }, body: BOOKS };\n  }\n  if (req.method === \"GET\" && req.path === \"/api/motd\") {\n    if (reqHeaders[\"accept\"] === \"application/json\") {\n      return { status: 200, headers: { \"content-type\": \"application/json\" }, body: { motd: MOTD } };\n    }\n    return { status: 200, headers: { \"content-type\": \"text/plain\" }, body: MOTD };\n  }\n  return { status: 404, headers: { \"content-type\": \"text/plain\" }, body: \"Not found\" };\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/health\", query: {}, headers: {}, body: null }));\n"
      }
    },

    {
      id: "srv-u3-4",
      title: "Sort, limit, paginate-lite",
      kind: "js", chip: "SERVER", xp: 15, mins: 14,
      brief: "One endpoint, many shapes: real list APIs let the query string do the heavy lifting — `?sort=title`, `?sort=year`, `?limit=2`, or all at once. (GitHub's API works exactly like this.) Back to lean `{ status, body }` responses so the query logic gets the spotlight.\n\nTwo traps live here:\n\n1. **`sort` mutates.** BOOKS is shared by every request — sort it in place once and every later response comes back reordered. Start each request from a copy: `let results = [...BOOKS];`\n2. Query values are strings: `limit` arrives as `\"2\"`, so `Number(query.limit)` before slicing.\n\nOrder of operations: sort first, *then* limit — slicing first hands back the wrong books.",
      steps: [
        { text: "No query → the full list in its ORIGINAL order.",
          test: "T.expect(typeof handleRequest === 'function', 'Define handleRequest(req).');\nvar res = handleRequest({ method: 'GET', path: '/api/books', query: {}, body: null });\nT.eq(res, { status: 200, body: [\n  { id: 1, title: 'Neuromancer', year: 1984 },\n  { id: 2, title: 'Dune', year: 1965 },\n  { id: 3, title: 'The Hobbit', year: 1937 },\n  { id: 4, title: 'Emma', year: 1815 }\n] }, 'Empty query → the list exactly as declared');" },
        { text: "`?sort=title` → alphabetical — and a plain request afterwards must STILL see the original order.",
          test: "var sorted = handleRequest({ method: 'GET', path: '/api/books', query: { sort: 'title' }, body: null });\nT.eq(sorted, { status: 200, body: [\n  { id: 2, title: 'Dune', year: 1965 },\n  { id: 4, title: 'Emma', year: 1815 },\n  { id: 1, title: 'Neuromancer', year: 1984 },\n  { id: 3, title: 'The Hobbit', year: 1937 }\n] }, '?sort=title → Dune, Emma, Neuromancer, The Hobbit');\nvar again = handleRequest({ method: 'GET', path: '/api/books', query: {}, body: null });\nT.eq(again.body[0].title, 'Neuromancer', 'A sorted request must NOT reorder later plain requests — sort a COPY ([...BOOKS]), never BOOKS itself');" },
        { text: "`?sort=year` → oldest first; `?limit=2` alone → the first two in original order.",
          test: "var byYear = handleRequest({ method: 'GET', path: '/api/books', query: { sort: 'year' }, body: null });\nT.eq(byYear, { status: 200, body: [\n  { id: 4, title: 'Emma', year: 1815 },\n  { id: 3, title: 'The Hobbit', year: 1937 },\n  { id: 2, title: 'Dune', year: 1965 },\n  { id: 1, title: 'Neuromancer', year: 1984 }\n] }, '?sort=year → 1815, 1937, 1965, 1984');\nvar limited = handleRequest({ method: 'GET', path: '/api/books', query: { limit: '2' }, body: null });\nT.eq(limited, { status: 200, body: [\n  { id: 1, title: 'Neuromancer', year: 1984 },\n  { id: 2, title: 'Dune', year: 1965 }\n] }, \"?limit=2 → the first two, original order (limit arrives as the STRING '2' — Number() it)\");" },
        { text: "Combined `?sort=year&limit=2` → sort FIRST, then slice. Original order survives everything; unknown routes 404.",
          test: "var combo = handleRequest({ method: 'GET', path: '/api/books', query: { sort: 'year', limit: '2' }, body: null });\nT.eq(combo, { status: 200, body: [\n  { id: 4, title: 'Emma', year: 1815 },\n  { id: 3, title: 'The Hobbit', year: 1937 }\n] }, '?sort=year&limit=2 → the two OLDEST books. If you got Neuromancer and Dune, you sliced before sorting');\nvar finalCheck = handleRequest({ method: 'GET', path: '/api/books', query: {}, body: null });\nT.eq(finalCheck.body[0].id, 1, 'After every sort and slice, the original array order still stands');\nT.eq(handleRequest({ method: 'GET', path: '/nope', query: {}, body: null }), { status: 404, body: 'Not found' }, 'Unknown routes still 404');" }
      ],
      files: [
        { name: "script.js", content: "// request = { method, path, query, body } → response = { status, body }\n\nconst BOOKS = [\n  { id: 1, title: \"Neuromancer\", year: 1984 },\n  { id: 2, title: \"Dune\", year: 1965 },\n  { id: 3, title: \"The Hobbit\", year: 1937 },\n  { id: 4, title: \"Emma\", year: 1815 }\n];\n\nfunction handleRequest(req) {\n  // GET /api/books:\n  //   const query = req.query || {};\n  //   let results = [...BOOKS];        // ← COPY. Never sort BOOKS itself!\n  //   ?sort=title → alphabetical       ?sort=year → oldest first\n  //   ?limit=N    → results.slice(0, Number(N))   (sort FIRST, then limit)\n  //   → { status: 200, body: results }\n  // else → { status: 404, body: \"Not found\" }\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/books\", query: { sort: \"year\", limit: \"2\" }, body: null }));\n" }
      ],
      hints: [
        "Copy before anything: `let results = [...BOOKS];` — the spread makes a NEW array holding the same book objects, so sorting it leaves BOOKS alone.",
        "Two comparators: `results.sort((a, b) => a.title.localeCompare(b.title));` for title, `results.sort((a, b) => a.year - b.year);` for year.",
        "Limit goes LAST: `if (query.limit) results = results.slice(0, Number(query.limit));`"
      ],
      solution: {
        "script.js": "// request = { method, path, query, body } → response = { status, body }\n\nconst BOOKS = [\n  { id: 1, title: \"Neuromancer\", year: 1984 },\n  { id: 2, title: \"Dune\", year: 1965 },\n  { id: 3, title: \"The Hobbit\", year: 1937 },\n  { id: 4, title: \"Emma\", year: 1815 }\n];\n\nfunction handleRequest(req) {\n  if (req.method === \"GET\" && req.path === \"/api/books\") {\n    const query = req.query || {};\n    let results = [...BOOKS];\n    if (query.sort === \"title\") {\n      results.sort((a, b) => a.title.localeCompare(b.title));\n    }\n    if (query.sort === \"year\") {\n      results.sort((a, b) => a.year - b.year);\n    }\n    if (query.limit) {\n      results = results.slice(0, Number(query.limit));\n    }\n    return { status: 200, body: results };\n  }\n  return { status: 404, body: \"Not found\" };\n}\n\nconsole.log(handleRequest({ method: \"GET\", path: \"/api/books\", query: { sort: \"year\", limit: \"2\" }, body: null }));\n"
      }
    },

    {
      id: "srv-quiz-3",
      title: "Unit 3 quiz: Queries & headers",
      kind: "quiz", xp: 10,
      brief: "Query strings, string values, accept vs content-type, and the sort-a-copy rule.",
      questions: [
        { q: "In `GET /api/books?q=dune&limit=2`, which part is the query string?",
          choices: ["/api/books", "GET", "q=dune&limit=2", "The request body"],
          answer: 2, explain: "Everything after the `?`: key=value pairs joined by `&`. The server parses it into { q: \"dune\", limit: \"2\" }." },
        { q: "After parsing `limit=2`, what exactly is `req.query.limit`?",
          choices: ["The string \"2\"", "The number 2", "The boolean true", "An array [2]"],
          answer: 0, explain: "Query values are ALWAYS strings — a URL is text, so `2` arrives as `\"2\"`, never as a number, a boolean or an array. Run `Number(...)` on it before doing math like slice counts, or your limit silently becomes string concatenation." },
        { q: "A client that wants JSON back says so with…",
          choices: ["content-type: application/json on the request", "a ?json=true query param", "a JSON-shaped body", "accept: application/json"],
          answer: 3, explain: "accept = the format the client WANTS back. content-type describes what a body actually is — on either side of the wire." },
        { q: "Which response header tells the client how to read the body?",
          choices: ["accept", "content-type", "x-format", "body-type"],
          answer: 1, explain: "content-type: application/json vs text/plain — same bytes, completely different handling by the client." },
        { q: "`GET /api/books?genre=poetry` matches zero books. Best response?",
          choices: ["404 — no book matched", "400 — unknown genre", "200 with an empty array", "500 — search failed"],
          answer: 2, explain: "The route exists, the request was valid, and zero matches is a perfectly good answer — the empty array IS the result. 404 is for an unknown route or a missing record, 400 is for a malformed request, and nothing actually failed, so 500 would be a lie the client's error handler would act on." },
        { q: "Spot the bug in this route:",
          code: "if (req.query.sort === \"year\") {\n  BOOKS.sort((a, b) => a.year - b.year);\n}",
          lang: "js",
          choices: ["sort can't take a comparator function", "It sorts the SHARED array in place", "a.year - b.year sorts newest-first", "Nothing — sorting an array is safe"],
          answer: 1, explain: "`.sort()` mutates in place, so every later request sees the reordered BOOKS — state bleeds between requests whenever you mutate shared data. Spread into a copy first: `[...BOOKS].sort(…)`. The comparator itself is fine, and `a.year - b.year` sorts oldest-first." }
      ]
    }
  ]
});
