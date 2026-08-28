/* Deploying Your App — Unit 1: The host is a function */
window.CODELAB.addUnit("ship", {
  id: "ship-u1",
  title: "The host is a function",
  icon: "🌐",
  blurb: "A static host is (urlPath, files) → response — and every \"my site is blank on GitHub Pages\" bug is one line of that function.",
  cheat: [
    { h: "The whole host, as a function", lang: "js", code: "// what GitHub Pages does with every request, in order:\n// 1) strip the leading /  →  look up the EXACT file (case matters!)\n// 2) path ends in /       →  serve that folder's index.html\n// 3) folder exists, no /  →  301 redirect to path + \"/\"\n// 4) nothing matched      →  404 (with your 404.html as the body)", note: "Four rules. Every blank-site bug in this unit is one of them misfiring." },
    { h: "Deploying is a push", lang: "js", code: "// $ git push origin main\n// …and GitHub Pages rebuilds and republishes your site.", note: "Commits, branches and push itself are the Git course's territory — this course starts after the files arrive." },
    { h: "Where your site actually lives", lang: "js", code: "// user site:    https://username.github.io/           ← base path \"/\"\n// project site: https://username.github.io/repo/      ← base path \"/repo/\"\n\n// on a PROJECT site:\n// href=\"/styles.css\"  → username.github.io/styles.css   ✗ 404 (escaped /repo/!)\n// href=\"styles.css\"   → resolves under the page's folder ✓", note: "Root-absolute paths are the #1 cause of a styled site turning blank on deploy." },
    { h: "Turning Pages on", lang: "js", code: "// GitHub → your repo → Settings → Pages\n//   Source: \"Deploy from a branch\"\n//   Branch: main   Folder: / (root)  — or /docs\n// First deploy can take a few minutes; later ones are faster.", note: "The settings panel changes looks yearly; the resolution rules above never do." },
    { h: "404.html and the SPA fallback", lang: "js", code: "// 404.html at the repo root → served as the BODY of every 404.\n// SPA trick: a 404.html that boots your app makes deep links\n// like /notes/7 work — the client router reads location.pathname.", note: "The fallback is the LAST resort: real files must always win first, or a typo'd script src silently gets HTML served as JavaScript." }
  ],
  lessons: [

    {
      id: "ship-u1-1",
      title: "Your laptop is not the internet",
      kind: "js", chip: "SHIP", xp: 15, mins: 12,
      brief: "Your site works perfectly at `http://localhost:5500/`. You deploy it, open the real URL, and… **blank page**. Welcome to the most-filed bug report in web development.\n\nTo debug it, stop imagining the host as magic. A static host is a *function*: `(urlPath, files) → response`. Your repo is just an object map — file paths in, file contents out — and GitHub Pages runs a short, boring lookup over it. This unit, you'll write that exact lookup, and every \"works locally, broken live\" bug will turn into a line of code you can point at.\n\nRule 1 today: strip the leading `/`, look up the file **exactly**, and treat `/` as `index.html`. Anything missing gets an honest `404`. (How the files got to the server — commits, branches, pushes — is the Git course's job; this course starts the moment they arrive.)",
      example: { lang: "js", code: "// your deployed repo, as data\nconst FILES = { \"index.html\": \"<h1>Hi</h1>\", \"assets/app.js\": \"…\" };\n\n// the host, as a function\nserveStatic(\"/assets/app.js\", FILES); // → { status: 200, file: \"assets/app.js\" }\nserveStatic(\"/nope\", FILES);          // → { status: 404 }" },
      steps: [
        { text: "Write `serveStatic(urlPath, files)`: strip the leading `/` and return `{ status: 200, file: <path> }` when the file exists.",
          test: "T.expect(typeof serveStatic === 'function', 'Define function serveStatic(urlPath, files) { … }');\nvar res = serveStatic('/assets/app.js', FILES);\nT.eq(res, { status: 200, file: 'assets/app.js' }, 'GET /assets/app.js should answer { status: 200, file: \"assets/app.js\" } — strip the leading / and look the key up in files');\nT.eq(serveStatic('/404.html', FILES), { status: 200, file: '404.html' }, '404.html is a perfectly normal file when you ask for it BY NAME');" },
        { text: "`/` is special: it serves `index.html`.",
          test: "var res = serveStatic('/', FILES);\nT.eq(res, { status: 200, file: 'index.html' }, 'A request for / should serve index.html — that mapping is a HOST rule, not a browser rule');" },
        { text: "Anything not in `files` answers `{ status: 404 }` — the host never guesses.",
          test: "T.eq(serveStatic('/nope', FILES).status, 404, 'GET /nope: the file does not exist, so the answer is 404 — a static host never guesses');\nT.eq(serveStatic('/about.html', FILES).status, 404, 'about/index.html exists but about.html does not — close is still 404');" }
      ],
      files: [
        { name: "script.js", content: "// Your deployed repo, as an object map — path in, contents out.\nconst FILES = {\n  \"index.html\": \"<h1>NoteStream</h1>\",\n  \"about/index.html\": \"<h1>About NoteStream</h1>\",\n  \"assets/app.js\": \"console.log('app booted');\",\n  \"404.html\": \"<h1>Lost?</h1>\"\n};\n\n// The host is a function: (urlPath, files) → { status, file? }\nfunction serveStatic(urlPath, files) {\n  // 1) strip the leading \"/\" to get the file key\n  // 2) \"/\" means \"index.html\"\n  // 3) found  → { status: 200, file: key }\n  //    missing → { status: 404 }\n}\n\nconsole.log(serveStatic(\"/\", FILES));\nconsole.log(serveStatic(\"/nope\", FILES));\n" }
      ],
      hints: [
        "Get the key with `urlPath.slice(1)` — `\"/assets/app.js\".slice(1)` is `\"assets/app.js\"`.",
        "Handle the home page first: `const key = urlPath === \"/\" ? \"index.html\" : urlPath.slice(1);`",
        "Existence check + early return: `if (files[key] !== undefined) return { status: 200, file: key }; return { status: 404 };`"
      ],
      solution: {
        "script.js": "// Your deployed repo, as an object map — path in, contents out.\nconst FILES = {\n  \"index.html\": \"<h1>NoteStream</h1>\",\n  \"about/index.html\": \"<h1>About NoteStream</h1>\",\n  \"assets/app.js\": \"console.log('app booted');\",\n  \"404.html\": \"<h1>Lost?</h1>\"\n};\n\n// The host is a function: (urlPath, files) → { status, file? }\nfunction serveStatic(urlPath, files) {\n  const key = urlPath === \"/\" ? \"index.html\" : urlPath.slice(1);\n  if (files[key] !== undefined) return { status: 200, file: key };\n  return { status: 404 };\n}\n\nconsole.log(serveStatic(\"/\", FILES));\nconsole.log(serveStatic(\"/nope\", FILES));\n"
      }
    },

    {
      id: "ship-u1-2",
      title: "It worked on my machine: case, slashes, and index",
      kind: "js", chip: "SHIP", xp: 15, mins: 13,
      brief: "Here's the trap your laptop sets for you: macOS and Windows filesystems are **case-insensitive**, so `Index.html` and `index.html` are the same file at home. GitHub Pages runs on Linux, where they are two different names — and one of them doesn't exist. The starter code below faithfully reproduces your laptop's shrug. Your job is to make it behave like production *before* production makes it your problem.\n\nTwo more host rules while you're in there:\n\n- a path ending in `/` serves that **folder's `index.html`** (`/about/` → `about/index.html`)\n- a folder asked for *without* the slash gets a **301 redirect** to the slashed version: `{ status: 301, location: \"/about/\" }` — that's why the URL bar quietly gains a `/` when you visit real sites.",
      example: { lang: "js", code: "serveStatic(\"/Index.html\", FILES); // → { status: 404 }  (Linux: no such file)\nserveStatic(\"/about\", FILES);      // → { status: 301, location: \"/about/\" }\nserveStatic(\"/about/\", FILES);     // → { status: 200, file: \"about/index.html\" }" },
      steps: [
        { text: "Make the lookup **exact**: kill the case-insensitive matching.",
          test: "T.eq(serveStatic('/Index.html', FILES).status, 404, 'Linux is case-sensitive — Index.html is not index.html. Look the key up EXACTLY, no toLowerCase()');\nT.eq(serveStatic('/index.html', FILES), { status: 200, file: 'index.html' }, 'The correctly-cased path must of course still work');" },
        { text: "A path ending in `/` serves that folder's `index.html`.",
          test: "T.eq(serveStatic('/about/', FILES), { status: 200, file: 'about/index.html' }, 'GET /about/ should serve about/index.html — append \"index.html\" when the path ends in \"/\"');\nT.eq(serveStatic('/', FILES), { status: 200, file: 'index.html' }, 'GET / is just the same rule at the root: \"\" + \"index.html\"');" },
        { text: "A folder without the trailing slash gets `{ status: 301, location: urlPath + \"/\" }`. Everything else still 404s.",
          test: "T.eq(serveStatic('/about', FILES), { status: 301, location: '/about/' }, 'GET /about: there is no file named \"about\", but about/index.html exists — real hosts answer 301 → /about/ and let the browser retry');\nT.eq(serveStatic('/missing/', FILES).status, 404, 'A slashed path whose folder has no index.html is still a 404');\nT.eq(serveStatic('/nope', FILES).status, 404, 'And a plain miss is still a plain 404');" }
      ],
      files: [
        { name: "script.js", content: "const FILES = {\n  \"index.html\": \"<h1>NoteStream</h1>\",\n  \"about/index.html\": \"<h1>About NoteStream</h1>\",\n  \"assets/app.js\": \"console.log('app booted');\",\n  \"404.html\": \"<h1>Lost?</h1>\"\n};\n\n// This version behaves like your LAPTOP: macOS/Windows filesystems\n// don't care about case — so Index.html \"works\" at home…\nfunction serveStatic(urlPath, files) {\n  const key = urlPath === \"/\" ? \"index.html\" : urlPath.slice(1);\n  for (const filename in files) {\n    if (filename.toLowerCase() === key.toLowerCase()) {\n      return { status: 200, file: filename };\n    }\n  }\n  return { status: 404 };\n}\n\n// …and 404s in production. Make this answer 404 too:\nconsole.log(serveStatic(\"/Index.html\", FILES));\n" }
      ],
      hints: [
        "Delete the loop. An exact lookup is `files[key] !== undefined` — object keys are case-sensitive for free, exactly like Linux.",
        "Build the key in two steps: `let key = urlPath.slice(1); if (urlPath.endsWith(\"/\")) key += \"index.html\";` — note `/` becomes `\"\" + \"index.html\"`, so the root falls out of the same rule.",
        "The redirect goes after the exact match, before the 404: `if (files[key + \"/index.html\"] !== undefined) return { status: 301, location: urlPath + \"/\" };`"
      ],
      solution: {
        "script.js": "const FILES = {\n  \"index.html\": \"<h1>NoteStream</h1>\",\n  \"about/index.html\": \"<h1>About NoteStream</h1>\",\n  \"assets/app.js\": \"console.log('app booted');\",\n  \"404.html\": \"<h1>Lost?</h1>\"\n};\n\n// Behaves like PRODUCTION: exact keys, folder index, 301 for the bare folder.\nfunction serveStatic(urlPath, files) {\n  let key = urlPath.slice(1);\n  if (urlPath.endsWith(\"/\")) key += \"index.html\";\n  if (files[key] !== undefined) return { status: 200, file: key };\n  if (files[key + \"/index.html\"] !== undefined) {\n    return { status: 301, location: urlPath + \"/\" };\n  }\n  return { status: 404 };\n}\n\n// …and 404s in production. Make this answer 404 too:\nconsole.log(serveStatic(\"/Index.html\", FILES));\n" }
    },

    {
      id: "ship-u1-3",
      title: "The base-path trap (/username.github.io/repo/)",
      kind: "js", chip: "SHIP", xp: 15, mins: 14,
      brief: "THE classic. Your project deploys to `https://username.github.io/repo/` — note the `/repo/` — and the page loads but arrives **completely unstyled**, console full of 404s. Why? `href=\"/styles.css\"` starts with `/`, which means *domain root*: the browser asks `username.github.io/styles.css`, which escapes your repo folder and doesn't exist.\n\nYou'll write `resolveHref(href, pageUrl, basePath)` — the browser's own resolution rules, so you can *see* which links escape the base path:\n\n- `/x` (root-absolute) → goes to the domain root, **ignoring** `basePath` — the bug\n- `x` (relative) → resolves under the page's folder — safe\n- `../x` → climbs one folder up from the page — safe\n\nThen `fixHrefs(html, basePath)` repairs a whole page by rewriting every root-absolute `href` to live under the base path — the one-line save for a blank project site.",
      example: { lang: "js", code: "// the page: https://username.github.io/repo/about/\nresolveHref(\"/styles.css\", \"/repo/about/\", \"/repo/\");  // → \"/styles.css\"        ✗ escaped!\nresolveHref(\"styles.css\", \"/repo/about/\", \"/repo/\");   // → \"/repo/about/styles.css\" ✓" },
      steps: [
        { text: "Root-absolute hrefs (starting with `/`) resolve to themselves — the browser ignores both the page and your base path.",
          test: "T.expect(typeof resolveHref === 'function', 'Define function resolveHref(href, pageUrl, basePath) { … }');\nvar out = resolveHref('/styles.css', '/repo/about/', '/repo/');\nT.eq(out, '/styles.css', 'THIS is the blank-site bug: a root-absolute href ignores basePath entirely. The browser will request username.github.io/styles.css — outside /repo/ — and 404');\nT.eq(resolveHref('/assets/app.js', '/repo/', '/repo/'), '/assets/app.js', 'Same trap for scripts and images: leading / means DOMAIN ROOT, not repo root');" },
        { text: "Relative hrefs resolve against the page's folder.",
          test: "T.eq(resolveHref('styles.css', '/repo/about/', '/repo/'), '/repo/about/styles.css', 'A relative href is glued onto the folder the page lives in — and so it stays inside /repo/');\nT.eq(resolveHref('assets/app.js', '/repo/', '/repo/'), '/repo/assets/app.js', 'From the repo home page, assets/app.js resolves to /repo/assets/app.js');" },
        { text: "`../` climbs one folder up from the page before resolving.",
          test: "T.eq(resolveHref('../styles.css', '/repo/about/', '/repo/'), '/repo/styles.css', '../ from /repo/about/ climbs to /repo/ — still safely inside the base path');\nT.eq(resolveHref('../assets/app.js', '/repo/about/', '/repo/'), '/repo/assets/app.js', '../assets/app.js from /repo/about/ should resolve to /repo/assets/app.js');" },
        { text: "Write `fixHrefs(html, basePath)`: rewrite every root-absolute `href=\"/…\"` to start with the base path; leave relative hrefs alone.",
          test: "T.expect(typeof fixHrefs === 'function', 'Define function fixHrefs(html, basePath) { … }');\nvar out = fixHrefs(HTML, '/repo/');\nT.eq(out.indexOf('href=\"/styles.css\"'), -1, 'No root-absolute href may survive the fix — href=\"/styles.css\" is exactly the link that 404s on a project site');\nT.expect(out.indexOf('href=\"/repo/styles.css\"') !== -1, 'The stylesheet link should now point INSIDE the repo folder: href=\"/repo/styles.css\"');\nT.expect(out.indexOf('href=\"/repo/gallery/\"') !== -1, 'href=\"/gallery/\" should become href=\"/repo/gallery/\"');\nT.expect(out.indexOf('href=\"about/\"') !== -1, 'Relative hrefs were never broken — leave them untouched');" }
      ],
      files: [
        { name: "script.js", content: "// A page from your project site — deployed at https://username.github.io/repo/\nconst HTML = [\n  '<link rel=\"stylesheet\" href=\"/styles.css\">',\n  '<a href=\"/gallery/\">Gallery</a>',\n  '<a href=\"about/\">About</a>'\n].join(\"\\n\");\n\n// Where will the browser ACTUALLY look for this href?\nfunction resolveHref(href, pageUrl, basePath) {\n  // starts with \"/\"  → root-absolute: return it unchanged (it ignores basePath — that IS the bug)\n  // starts with \"../\" → strip it and climb one folder up from the page's folder\n  // otherwise         → page's folder + href\n}\n\n// Repair a page: every href=\"/… becomes href=\"<basePath>…\nfunction fixHrefs(html, basePath) {\n\n}\n\nconsole.log(resolveHref(\"/styles.css\", \"/repo/about/\", \"/repo/\"));\n" }
      ],
      hints: [
        "The page's folder is everything up to the last `/`: `let dir = pageUrl.slice(0, pageUrl.lastIndexOf(\"/\") + 1);` (for `/repo/about/` that's the whole string).",
        "Handle `../` with a loop: `while (rest.startsWith(\"../\")) { rest = rest.slice(3); dir = dir.slice(0, dir.lastIndexOf(\"/\", dir.length - 2) + 1); }` — each pass drops one folder from `dir`.",
        "`fixHrefs` is one line: `return html.split('href=\"/').join('href=\"' + basePath);` — every root-absolute href gains the base path, and relative hrefs never match the pattern."
      ],
      solution: {
        "script.js": "// A page from your project site — deployed at https://username.github.io/repo/\nconst HTML = [\n  '<link rel=\"stylesheet\" href=\"/styles.css\">',\n  '<a href=\"/gallery/\">Gallery</a>',\n  '<a href=\"about/\">About</a>'\n].join(\"\\n\");\n\n// Where will the browser ACTUALLY look for this href?\nfunction resolveHref(href, pageUrl, basePath) {\n  if (href.startsWith(\"/\")) return href; // root-absolute: basePath is ignored — the bug\n  let dir = pageUrl.slice(0, pageUrl.lastIndexOf(\"/\") + 1);\n  let rest = href;\n  while (rest.startsWith(\"../\")) {\n    rest = rest.slice(3);\n    dir = dir.slice(0, dir.lastIndexOf(\"/\", dir.length - 2) + 1);\n  }\n  return dir + rest;\n}\n\n// Repair a page: every href=\"/… becomes href=\"<basePath>…\nfunction fixHrefs(html, basePath) {\n  return html.split('href=\"/').join('href=\"' + basePath);\n}\n\nconsole.log(resolveHref(\"/styles.css\", \"/repo/about/\", \"/repo/\"));\n" }
    },

    {
      id: "ship-u1-4",
      title: "404.html and the SPA fallback",
      kind: "js", chip: "SHIP", xp: 15, mins: 13,
      brief: "What should a host do when *nothing* matches? GitHub Pages looks for a **`404.html`** at your repo root and serves it as the body of the miss — the status stays `404`, but your visitor gets a page instead of the browser's shrug.\n\nSingle-page apps push this one step further. A deep link like `/notes/7` isn't a file at all — the *client-side router* owns it. So in **SPA mode** the host answers every miss with `200` + `index.html`, your app boots, reads the URL, and renders note 7.\n\nThe rule that keeps this from going wrong: the fallback is the **last resort**. Real files must be checked *first* — a fallback that runs too early will happily answer a typo'd `<script src>` with `200` + HTML, and your console fills with `Uncaught SyntaxError: Unexpected token '<'` instead of the honest 404 that would have told you the filename was wrong.",
      example: { lang: "js", code: "serveStatic(\"/typo\", FILES);            // → { status: 404, file: \"404.html\" }\nserveStatic(\"/notes/7\", FILES, true);   // → { status: 200, file: \"index.html\" }  (SPA)\nserveStatic(\"/assets/app.js\", FILES, true); // → the REAL file — never the fallback" },
      steps: [
        { text: "A miss with a `404.html` in the repo answers `{ status: 404, file: \"404.html\" }`; without one, plain `{ status: 404 }`.",
          test: "T.eq(serveStatic('/typo', FILES), { status: 404, file: '404.html' }, 'GitHub Pages serves your 404.html as the BODY of every miss — the status stays 404, the page becomes yours');\nvar bare = { 'index.html': '<h1>tiny</h1>' };\nT.eq(serveStatic('/typo', bare), { status: 404 }, 'No 404.html in the repo → the plain { status: 404 } from before');" },
        { text: "SPA mode (third argument `true`): every miss answers `{ status: 200, file: \"index.html\" }` so the client router can take over.",
          test: "T.eq(serveStatic('/notes/7', FILES, true), { status: 200, file: 'index.html' }, 'A deep link like /notes/7 is not a file — in SPA mode the host serves index.html with 200 and lets the client router render it');\nT.eq(serveStatic('/anything/at/all', FILES, true), { status: 200, file: 'index.html' }, 'EVERY miss falls back in SPA mode — that is the whole trick');" },
        { text: "The fallback must NOT swallow real files: exact matches, folder indexes and 301s all still win first.",
          test: "T.eq(serveStatic('/assets/app.js', FILES, true).file, 'assets/app.js', 'The fallback is the LAST resort — a real file always wins, or one typo in a script src silently serves HTML as JavaScript');\nT.eq(serveStatic('/about/', FILES, true), { status: 200, file: 'about/index.html' }, 'Folder indexes still resolve before the fallback');\nT.eq(serveStatic('/about', FILES, true).status, 301, 'And the 301 folder redirect still happens before the fallback too');" }
      ],
      files: [
        { name: "script.js", content: "const FILES = {\n  \"index.html\": \"<h1>NoteStream</h1>\",\n  \"about/index.html\": \"<h1>About NoteStream</h1>\",\n  \"assets/app.js\": \"console.log('app booted');\",\n  \"404.html\": \"<h1>Lost? Try the home page.</h1>\"\n};\n\nfunction serveStatic(urlPath, files, spa) {\n  let key = urlPath.slice(1);\n  if (urlPath.endsWith(\"/\")) key += \"index.html\";\n  if (files[key] !== undefined) return { status: 200, file: key };\n  if (files[key + \"/index.html\"] !== undefined) {\n    return { status: 301, location: urlPath + \"/\" };\n  }\n  // Nothing matched. Upgrade this bare 404:\n  //   1) spa is true            → { status: 200, file: \"index.html\" }\n  //   2) files has a \"404.html\" → { status: 404, file: \"404.html\" }\n  //   3) otherwise              → { status: 404 }\n  return { status: 404 };\n}\n\nconsole.log(serveStatic(\"/typo\", FILES));\nconsole.log(serveStatic(\"/notes/7\", FILES, true));\n" }
      ],
      hints: [
        "All three upgrades live where the old `return { status: 404 }` was — AFTER the exact-file and 301 checks, so real files keep winning.",
        "Order inside the tail: `if (spa) return { status: 200, file: \"index.html\" };` first, then `if (files[\"404.html\"] !== undefined) return { status: 404, file: \"404.html\" };`, then the bare 404.",
        "Don't touch the code above the comment — the whole lesson is that the fallback comes LAST."
      ],
      solution: {
        "script.js": "const FILES = {\n  \"index.html\": \"<h1>NoteStream</h1>\",\n  \"about/index.html\": \"<h1>About NoteStream</h1>\",\n  \"assets/app.js\": \"console.log('app booted');\",\n  \"404.html\": \"<h1>Lost? Try the home page.</h1>\"\n};\n\nfunction serveStatic(urlPath, files, spa) {\n  let key = urlPath.slice(1);\n  if (urlPath.endsWith(\"/\")) key += \"index.html\";\n  if (files[key] !== undefined) return { status: 200, file: key };\n  if (files[key + \"/index.html\"] !== undefined) {\n    return { status: 301, location: urlPath + \"/\" };\n  }\n  if (spa) return { status: 200, file: \"index.html\" };\n  if (files[\"404.html\"] !== undefined) return { status: 404, file: \"404.html\" };\n  return { status: 404 };\n}\n\nconsole.log(serveStatic(\"/typo\", FILES));\nconsole.log(serveStatic(\"/notes/7\", FILES, true));\n" }
    },

    {
      id: "ship-quiz-1",
      title: "Unit 1 quiz: How a static host resolves a URL",
      kind: "quiz", xp: 10,
      brief: "Case, slashes, base paths and fallbacks — the four rules behind every blank deployed site. 80% to pass.",
      questions: [
        { q: "Your site is perfect at http://localhost:5500/ but at https://you.github.io/notestream/ it loads unstyled, and the console shows a 404 for /styles.css. What went wrong?",
          choices: ["GitHub Pages needs a few minutes before it starts serving CSS files, so styles always lag the first deploy", "href=\"/styles.css\" escapes the /notestream/ folder", "The stylesheet must be listed in the repo settings", "Browsers block CSS on github.io domains until the site has a custom domain"],
          answer: 1, explain: "A leading `/` means *domain root*: the browser requests `you.github.io/styles.css`, but on a project site your files live under `/notestream/`. Locally the domain root and your project root were the same folder, so the bug was invisible. Fix it with relative paths (`styles.css`, `../styles.css`) or by prefixing the base path." },
        { q: "A repo contains about/index.html. A visitor requests /about — no trailing slash. What does the host answer?",
          choices: ["200 with about/index.html served directly, since the intent is obvious", "404 — there is no file whose exact name is \"about\"", "200 with the root index.html, because unmatched paths fall back to it", "301 redirect to `/about/`"],
          answer: 3, explain: "There's no file named `about`, but the folder exists — so the host answers `301` with `location: /about/`, and the browser retries with the slash and gets `about/index.html`. That's why URLs quietly gain a trailing `/` in your address bar. A direct 200 would break relative links on the page, which resolve against the folder." },
        { q: "The repo has Index.html (capital I). Locally both /Index.html and /index.html work, but the deployed site 404s on /index.html. Why?",
          choices: ["Linux is case-sensitive — Index.html is not index.html", "GitHub lowercases every filename during upload, which deletes the original file", "The browser cached the local version and refuses to fetch the deployed one", "GitHub Pages only recognizes the shorter name index.htm"],
          answer: 0, explain: "Your laptop's filesystem (macOS/Windows) treats `Index.html` and `index.html` as one file; the Linux servers behind GitHub Pages treat them as two different names, and only the capital-I one exists. This is the definitive \"worked on my machine\" bug. Rename the file to lowercase and the 404 disappears." },
        { q: "A host runs in SPA mode (every miss answers 200 + index.html). What should this request return?",
          code: "const FILES = {\n  \"index.html\": \"<h1>app</h1>\",\n  \"assets/app.js\": \"boot();\"\n};\n\nserveStatic(\"/assets/app.js\", FILES, true);",
          lang: "js",
          choices: ["200 with index.html — in SPA mode the fallback answers every request", "404 — SPA mode disables direct file access", "200 with assets/app.js — real files are checked before the fallback", "301 redirect to /assets/app.js/"],
          answer: 2, explain: "The fallback is the *last* resort: exact files, folder indexes and 301s all resolve first, and only a true miss falls through to `index.html`. If the fallback ran first, a typo'd `<script src>` would receive HTML with a 200 — and the console would show `Unexpected token '<'` instead of an honest 404 naming the missing file." },
        { q: "A visitor typos a URL on your GitHub Pages site, which has a 404.html at the repo root. What do they receive?",
          choices: ["Status 200 with 404.html, so the visit still counts as a success", "A redirect to the home page, since that is the only guaranteed file", "Status 404 with 404.html as the body", "The browser's built-in error page — 404.html only works with a custom domain"],
          answer: 2, explain: "`404.html` changes the *body* of a miss, never its status: the visitor sees your friendly page while browsers and crawlers still get the honest `404`. Serving it with a 200 would tell search engines the junk URL is a real page. The SPA trick builds on this — a 404.html that boots your app makes deep links usable." },
        { q: "On the page https://you.github.io/repo/about/, which URL does <a href=\"styles.css\"> actually fetch?",
          choices: ["https://you.github.io/styles.css", "`/repo/about/styles.css`", "`/repo/styles.css`", "It depends on which folder the HTML file sits in inside the repo, not on the URL"],
          answer: 1, explain: "A relative href resolves against the *page's URL folder* — here `/repo/about/` — giving `/repo/about/styles.css`. That's what makes relative paths deploy-safe: wherever the site is mounted, they stay inside it. The browser only ever sees URLs; the repo's internal layout matters only insofar as it produced those URLs." }
      ]
    }
  ]
});
