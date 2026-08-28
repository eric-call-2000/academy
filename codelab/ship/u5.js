/* Deploying Your App — Unit 5: Domains, DNS & HTTPS */
window.CODELAB.addUnit("ship", {
  id: "ship-u5",
  title: "Domains, DNS & HTTPS",
  icon: "🌐",
  blurb: "How a name becomes an IP, why the apex refuses a CNAME, and the one http:// image that kills your padlock.",
  cheat: [
    { h: "The four GitHub Pages A records", lang: "js", code: "// apex (@) — all four:\n// A  185.199.108.153\n// A  185.199.109.153\n// A  185.199.110.153\n// A  185.199.111.153\n// www → CNAME me.github.io", note: "Platform trivia on purpose — if a Pages deploy ever stops resolving, refresh these against GitHub's docs. The algorithm in the lessons never expires." },
    { h: "Record types you'll actually touch", lang: "js", code: "// A      name → IPv4 address   (AAAA = the IPv6 twin)\n// CNAME  name → another name   (alias — must be ALONE at its name)\n// TXT    free-form text        (domain verification)\n// MX     mail routing", note: "A resolver chases CNAMEs until it lands on an A record — a browser can only connect to an IP." },
    { h: "The apex rule", lang: "js", code: "// mysite.com      apex: A records ONLY — a CNAME cannot sit at @\n// www.mysite.com  subdomain: CNAME → me.github.io\n//\n// WHY: a CNAME must be the only record at its name,\n// and the apex always carries the zone's SOA/NS records." },
    { h: "The CNAME file (GitHub Pages)", lang: "js", code: "// repo root, filename CNAME (no extension), committed:\nmysite.com\n// one line, bare domain — no https://, no path", note: "The Pages settings panel writes it when you type your domain — but it must be committed, or the next deploy wipes your custom domain." },
    { h: "The canonical redirect chain", lang: "js", code: "// http://www.mysite.com/x\n//   → 301 https://www.mysite.com/x   (scheme first)\n//   → 301 https://mysite.com/x      (then the host)\n// 2 hops max; HSTS lets returning visitors skip the http hop." },
    { h: "Mixed content triage", lang: "js", code: "// on an https:// page:\n// src=\"http://cdn…\"    ✗ mixed content — blocked / padlock lost\n// src=\"https://cdn…\"   ✓\n// src=\"//cdn…\"         ✓ protocol-relative: inherits the scheme\n// src=\"/app.js\"        ✓ same origin\n// href on <a>          navigation, not a load — cannot break it" }
  ],
  lessons: [

    {
      id: "ship-u5-1",
      title: "A domain name is a lookup table",
      kind: "js", chip: "SHIP", xp: 15, mins: 13,
      brief: "Type `mysite.com` into a browser and it can do nothing with it — a browser connects to **IP addresses**. **DNS** is the lookup that turns one into the other, and it is less magical than it sounds: a **zone** is a list of records shaped `{ name, type, value }`, and a **resolver** is a function that walks it.\n\nTwo record types matter today: **A** (`name → IPv4 address` — the finish line) and **CNAME** (`name → another name` — an alias, so the resolver has to *ask again*). Your job: write that resolver, including the guard real ones ship with — a broken zone where two aliases point at each other must come back `null`, never spin forever.\n\nNo real DNS is queried anywhere in this unit — no network at all. A zone is just an array, and the algorithm you write here is the one real resolvers run.",
      example: { lang: "js", code: "// a zone is just data\n{ name: \"mysite.com\",     type: \"A\",     value: \"185.199.108.153\" }\n{ name: \"www.mysite.com\", type: \"CNAME\", value: \"mysite.com\" } // \"ask again\"" },
      steps: [
        { text: "Write `resolve(hostname, zone)` — find the record whose `name` matches. An `A` record returns its `value`; no record at all returns `null`.",
          test: "T.expect(typeof resolve === 'function', 'Define resolve(hostname, zone).');\nvar ip = resolve('mysite.com', ZONE);\nT.eq(ip, '185.199.108.153', 'mysite.com has an A record — return its value. Yours returned ' + JSON.stringify(ip));\nT.eq(resolve('api.mysite.com', ZONE), '104.21.7.42', 'api.mysite.com has its own A record');\nT.eq(resolve('nothere.mysite.com', ZONE), null, 'a name with no record is a dead lookup (NXDOMAIN) — return null, never undefined');" },
        { text: "A `CNAME` is an alias: replace the hostname with the record's `value` and look again — as many times as it takes to reach an `A` record.",
          test: "T.eq(resolve('www.mysite.com', ZONE), '185.199.108.153', 'www.mysite.com is a CNAME to mysite.com — follow the alias, then resolve THAT name');\nT.eq(resolve('blog.mysite.com', ZONE), '185.199.108.153', 'chains chase: blog → www → mysite.com → A record');\nT.eq(resolve('old.mysite.com', ZONE), null, 'old.mysite.com points at gone.mysite.com, which has no record — a broken alias still resolves to null');" },
        { text: "Guard the chase: cap it at **10 hops**. In `CYCLIC_ZONE` two CNAMEs point at each other — `resolve` must return `null`, never hang, never throw.",
          test: "var out; var crashed = false;\ntry { out = resolve('loop.mysite.com', CYCLIC_ZONE); } catch (e) { crashed = true; }\nT.expect(!crashed, 'a CNAME cycle must not throw — count your hops and give up politely with null');\nT.eq(out, null, 'loop → pong → loop → … after 10 hops return null (an uncapped chase would freeze a real resolver too)');\nT.eq(resolve('blog.mysite.com', ZONE), '185.199.108.153', 'the hop cap must not break legitimate short chains');" }
      ],
      files: [
        { name: "script.js", content: "// A DNS zone, minus the internet: just records.\n//   A     → the finish line: name → IP address\n//   CNAME → an alias: name → another name (ask again!)\n\nconst ZONE = [\n  { name: \"mysite.com\",      type: \"A\",     value: \"185.199.108.153\" },\n  { name: \"api.mysite.com\",  type: \"A\",     value: \"104.21.7.42\" },\n  { name: \"www.mysite.com\",  type: \"CNAME\", value: \"mysite.com\" },\n  { name: \"blog.mysite.com\", type: \"CNAME\", value: \"www.mysite.com\" },\n  { name: \"old.mysite.com\",  type: \"CNAME\", value: \"gone.mysite.com\" }\n];\n\n// two aliases pointing at each other — a broken zone your resolver must survive\nconst CYCLIC_ZONE = [\n  { name: \"loop.mysite.com\", type: \"CNAME\", value: \"pong.mysite.com\" },\n  { name: \"pong.mysite.com\", type: \"CNAME\", value: \"loop.mysite.com\" }\n];\n\nfunction resolve(hostname, zone) {\n  // 1) find the record whose .name === hostname   (none → null)\n  // 2) type \"A\"     → return its value\n  // 3) type \"CNAME\" → replace hostname with the value, look again\n  //    …but give up (null) after 10 hops, or a cycle spins forever\n}\n\nconsole.log(resolve(\"www.mysite.com\", ZONE));\n" }
      ],
      hints: [
        "A loop with a hop counter beats recursion here: `for (let hops = 0; hops < 10; hops++) { … }` — inside it, find the record, return on A, reassign `hostname` on CNAME.",
        "`zone.find(r => r.name === hostname)` fetches the record — `undefined` means no record, which is your `return null;` case.",
        "If the loop finishes all 10 hops without returning, you are in a cycle: put one final `return null;` AFTER the loop."
      ],
      solution: {
        "script.js": "// A DNS zone, minus the internet: just records.\n//   A     → the finish line: name → IP address\n//   CNAME → an alias: name → another name (ask again!)\n\nconst ZONE = [\n  { name: \"mysite.com\",      type: \"A\",     value: \"185.199.108.153\" },\n  { name: \"api.mysite.com\",  type: \"A\",     value: \"104.21.7.42\" },\n  { name: \"www.mysite.com\",  type: \"CNAME\", value: \"mysite.com\" },\n  { name: \"blog.mysite.com\", type: \"CNAME\", value: \"www.mysite.com\" },\n  { name: \"old.mysite.com\",  type: \"CNAME\", value: \"gone.mysite.com\" }\n];\n\n// two aliases pointing at each other — a broken zone your resolver must survive\nconst CYCLIC_ZONE = [\n  { name: \"loop.mysite.com\", type: \"CNAME\", value: \"pong.mysite.com\" },\n  { name: \"pong.mysite.com\", type: \"CNAME\", value: \"loop.mysite.com\" }\n];\n\nfunction resolve(hostname, zone) {\n  for (let hops = 0; hops < 10; hops++) {\n    const record = zone.find(r => r.name === hostname);\n    if (!record) return null;\n    if (record.type === \"A\") return record.value;\n    hostname = record.value; // CNAME — ask again with the alias\n  }\n  return null; // 10 hops deep: that is a cycle, not a chain\n}\n\nconsole.log(resolve(\"www.mysite.com\", ZONE));\n"
      }
    },

    {
      id: "ship-u5-2",
      title: "Apex vs. www: the CNAME rule",
      kind: "js", chip: "SHIP", xp: 15, mins: 13,
      brief: "The **apex** (also *root* or *naked domain*) is `mysite.com` itself — spelled `@` in most DNS panels. And there is a rule every registrar enforces: **a CNAME must be the ONLY record at its name.** An alias means *\"ignore everything here, ask over there\"* — which contradicts any record sitting next to it. The apex *always* has other records (the zone's own SOA and NS bookkeeping), so a CNAME can never legally sit at `@`. That is the entire reason apex domains take **A records** while `www` gets the CNAME.\n\nWrite the linter that catches the two classic violations before a registrar's cryptic error message does. Problem codes, returned sorted: `cname-at-apex` and `duplicate-cname`.\n\nStill no real DNS and no network — records are data, rules are code.",
      example: { lang: "js", code: "validateZone(GOOD_ZONE) // → []\nvalidateZone(BAD_ZONE)  // → [\"cname-at-apex\", \"duplicate-cname\"]" },
      steps: [
        { text: "Write `validateZone(records)` returning an array of problem codes — a healthy zone returns `[]`.",
          test: "T.expect(typeof validateZone === 'function', 'Define validateZone(records).');\nT.eq(validateZone(GOOD_ZONE), [], 'A records at @, one CNAME on www — a healthy zone reports nothing');\nT.eq(validateZone([]), [], 'an empty zone breaks no rules — return an empty array, not undefined');" },
        { text: "Rule 1 — `cname-at-apex`: any `CNAME` record whose `name` is `\"@\"`.",
          test: "T.eq(validateZone(APEX_CNAME_ZONE), ['cname-at-apex'], 'a CNAME must be ALONE at its name, and the apex always carries the zone SOA/NS records — that is WHY apex domains need A records instead');\nT.eq(validateZone(GOOD_ZONE), [], 'two A records at the SAME name are fine (round-robin) — only the alias demands to be alone');" },
        { text: "Rule 2 — `duplicate-cname`: the same `name` carrying two CNAME records. Report each code once, alphabetically sorted.",
          test: "T.eq(validateZone(DUP_ZONE), ['duplicate-cname'], 'two aliases for one name is a contradiction — which one would win?');\nT.eq(validateZone(BAD_ZONE), ['cname-at-apex', 'duplicate-cname'], 'both rules broken → both codes, alphabetically sorted, each reported ONCE');" }
      ],
      files: [
        { name: "script.js", content: "// Zones to lint. \"@\" means the apex — mysite.com itself.\n\nconst GOOD_ZONE = [\n  { name: \"@\",   type: \"A\",     value: \"185.199.108.153\" },\n  { name: \"@\",   type: \"A\",     value: \"185.199.109.153\" },\n  { name: \"www\", type: \"CNAME\", value: \"me.github.io\" }\n];\n\nconst APEX_CNAME_ZONE = [\n  { name: \"@\",   type: \"CNAME\", value: \"me.github.io\" },\n  { name: \"www\", type: \"CNAME\", value: \"me.github.io\" }\n];\n\nconst DUP_ZONE = [\n  { name: \"@\",   type: \"A\",     value: \"185.199.108.153\" },\n  { name: \"www\", type: \"CNAME\", value: \"me.github.io\" },\n  { name: \"www\", type: \"CNAME\", value: \"mysite.pages.dev\" }\n];\n\nconst BAD_ZONE = [\n  { name: \"@\",   type: \"CNAME\", value: \"me.github.io\" },\n  { name: \"www\", type: \"CNAME\", value: \"me.github.io\" },\n  { name: \"www\", type: \"CNAME\", value: \"mysite.pages.dev\" }\n];\n\nfunction validateZone(records) {\n  // collect problem codes (each at most once), then return them sorted:\n  //   \"cname-at-apex\"   — a CNAME record named \"@\"\n  //   \"duplicate-cname\" — some name has MORE than one CNAME\n}\n\nconsole.log(validateZone(BAD_ZONE));\n" }
      ],
      hints: [
        "Rule 1 is one line: `records.some(r => r.type === \"CNAME\" && r.name === \"@\")`.",
        "For duplicates, count CNAMEs per name with an object map: `counts[r.name] = (counts[r.name] || 0) + 1;` — then check whether any count went above 1 (`Object.values(counts).some(n => n > 1)`).",
        "Push each code at most once into a `problems` array, then `return problems.sort();` — sorted output makes the report deterministic."
      ],
      solution: {
        "script.js": "// Zones to lint. \"@\" means the apex — mysite.com itself.\n\nconst GOOD_ZONE = [\n  { name: \"@\",   type: \"A\",     value: \"185.199.108.153\" },\n  { name: \"@\",   type: \"A\",     value: \"185.199.109.153\" },\n  { name: \"www\", type: \"CNAME\", value: \"me.github.io\" }\n];\n\nconst APEX_CNAME_ZONE = [\n  { name: \"@\",   type: \"CNAME\", value: \"me.github.io\" },\n  { name: \"www\", type: \"CNAME\", value: \"me.github.io\" }\n];\n\nconst DUP_ZONE = [\n  { name: \"@\",   type: \"A\",     value: \"185.199.108.153\" },\n  { name: \"www\", type: \"CNAME\", value: \"me.github.io\" },\n  { name: \"www\", type: \"CNAME\", value: \"mysite.pages.dev\" }\n];\n\nconst BAD_ZONE = [\n  { name: \"@\",   type: \"CNAME\", value: \"me.github.io\" },\n  { name: \"www\", type: \"CNAME\", value: \"me.github.io\" },\n  { name: \"www\", type: \"CNAME\", value: \"mysite.pages.dev\" }\n];\n\nfunction validateZone(records) {\n  const problems = [];\n  if (records.some(r => r.type === \"CNAME\" && r.name === \"@\")) {\n    problems.push(\"cname-at-apex\");\n  }\n  const counts = {};\n  for (const r of records) {\n    if (r.type === \"CNAME\") counts[r.name] = (counts[r.name] || 0) + 1;\n  }\n  if (Object.values(counts).some(n => n > 1)) {\n    problems.push(\"duplicate-cname\");\n  }\n  return problems.sort();\n}\n\nconsole.log(validateZone(BAD_ZONE));\n"
      }
    },

    {
      id: "ship-u5-3",
      title: "Pointing a domain at GitHub Pages",
      kind: "js", chip: "SHIP", xp: 15, mins: 13,
      brief: "You bought `mysite.com`. Your site lives at `me.github.io`. Connecting them is two DNS entries and one file — and after lesson 2 you know *why* the shape is lopsided:\n\n- `www.mysite.com` → one **CNAME** to `me.github.io` (aliases are legal on subdomains)\n- `mysite.com` (the apex) → no CNAME allowed, so GitHub publishes **four A records** to point at instead\n- plus a one-line **CNAME file** committed at the repo root, so GitHub knows the domain is yours\n\nWrite `planDNS(hostname, target)` to emit the right records and `cnameFile(domain)` for the file. The four IPs are platform trivia, not knowledge — they are given as `PAGES_IPS` and repeated in the cheatsheet, where they can be refreshed if GitHub ever rotates them. The *algorithm* (apex → A records, subdomain → CNAME) is the part worth keeping in your head.\n\nActually clicking these into a registrar's dashboard is Unit 7 field-guide territory — here we generate the plan. No network, as ever.",
      example: { lang: "js", code: "planDNS(\"www.mysite.com\", \"me.github.io\")\n// → [{ name: \"www\", type: \"CNAME\", value: \"me.github.io\" }]\nplanDNS(\"mysite.com\", \"me.github.io\")\n// → four A records named \"@\" — one per GitHub Pages IP" },
      steps: [
        { text: "The subdomain case: `planDNS('www.mysite.com', 'me.github.io')` → one CNAME record whose `name` is just the subdomain label.",
          test: "T.expect(typeof planDNS === 'function', 'Define planDNS(hostname, target).');\nT.eq(planDNS('www.mysite.com', 'me.github.io'), [{ name: 'www', type: 'CNAME', value: 'me.github.io' }], 'one CNAME record: www → me.github.io');\nT.eq(planDNS('app.mysite.com', 'me.github.io'), [{ name: 'app', type: 'CNAME', value: 'me.github.io' }], 'the record name is the subdomain label, not the full hostname');" },
        { text: "The apex case (a two-label hostname): four `A` records named `@`, one per `PAGES_IPS` entry, in order.",
          test: "var plan = planDNS('mysite.com', 'me.github.io');\nT.eq(plan.map(function (r) { return r.type; }), ['A', 'A', 'A', 'A'], 'no CNAME may sit at the apex (lesson 2!) — the apex takes the four GitHub Pages A records');\nT.eq(plan, [{ name: '@', type: 'A', value: '185.199.108.153' }, { name: '@', type: 'A', value: '185.199.109.153' }, { name: '@', type: 'A', value: '185.199.110.153' }, { name: '@', type: 'A', value: '185.199.111.153' }], 'four records named @, one per PAGES_IPS entry, in order');" },
        { text: "The repo half: `cnameFile(domain)` returns the CNAME file's content — the bare domain plus a trailing newline.",
          test: "T.expect(typeof cnameFile === 'function', 'Define cnameFile(domain).');\nT.eq(cnameFile('mysite.com'), 'mysite.com\\n', 'the CNAME file is the bare domain plus a trailing newline — no https://, no path');\nT.eq(cnameFile('notes.example.dev'), 'notes.example.dev\\n', 'whatever the domain, same one-line shape');" }
      ],
      files: [
        { name: "script.js", content: "// Platform trivia, kept in ONE refreshable place (also in the cheatsheet):\nconst PAGES_IPS = [\n  \"185.199.108.153\",\n  \"185.199.109.153\",\n  \"185.199.110.153\",\n  \"185.199.111.153\"\n];\n\n// planDNS(hostname, target) → an array of { name, type, value } records\n//   apex      (\"mysite.com\" — 2 dot-separated labels)\n//     → four A records named \"@\", one per PAGES_IPS entry\n//   subdomain (\"www.mysite.com\" — 3+ labels)\n//     → one CNAME: { name: <labels before the domain>, type: \"CNAME\", value: target }\n\n// cnameFile(domain) → the repo-root CNAME file's content: domain + \"\\n\"\n\nconsole.log(planDNS(\"www.mysite.com\", \"me.github.io\"));\n" }
      ],
      hints: [
        "`hostname.split(\".\")` — a length of 2 means apex, anything longer is a subdomain.",
        "Apex: `PAGES_IPS.map(ip => ({ name: \"@\", type: \"A\", value: ip }))` — note the parentheses around the object literal.",
        "Subdomain name: everything except the last two labels — `labels.slice(0, -2).join(\".\")` handles `www` and deeper names alike."
      ],
      solution: {
        "script.js": "// Platform trivia, kept in ONE refreshable place (also in the cheatsheet):\nconst PAGES_IPS = [\n  \"185.199.108.153\",\n  \"185.199.109.153\",\n  \"185.199.110.153\",\n  \"185.199.111.153\"\n];\n\nfunction planDNS(hostname, target) {\n  const labels = hostname.split(\".\");\n  if (labels.length === 2) {\n    // apex: no CNAME allowed — four A records instead\n    return PAGES_IPS.map(ip => ({ name: \"@\", type: \"A\", value: ip }));\n  }\n  return [{ name: labels.slice(0, -2).join(\".\"), type: \"CNAME\", value: target }];\n}\n\nfunction cnameFile(domain) {\n  return domain + \"\\n\";\n}\n\nconsole.log(planDNS(\"www.mysite.com\", \"me.github.io\"));\n"
      }
    },

    {
      id: "ship-u5-4",
      title: "HTTPS, mixed content and the redirect chain",
      kind: "js", chip: "SHIP", xp: 15, mins: 13,
      brief: "Your site is live at `https://mysite.com`, padlock and all. Two things still break it in practice.\n\n**Mixed content:** an `https://` page that loads even ONE subresource over `http://` (an old CDN image, say) has broken its promise — the browser blocks the load or downgrades the padlock. Note what counts: things a tag **loads** via `src`. An `<a href=\"http://…\">` is *navigation*, not a load — it cannot break the padlock. And `//cdn…` (protocol-relative) inherits the page's own scheme, so it is safe.\n\n**The redirect chain:** `http://www.mysite.com/x` should land on ONE canonical URL — `https://mysite.com/x` — and every hop is a full round trip the visitor pays before your page even starts loading. Model redirects as first-match-wins prefix rules and return the chain of URLs visited.\n\nCertificates and the TLS handshake belong to a security course — here we automate only the two rules that break real deploys. No network, no real redirects.",
      example: { lang: "js", code: "auditPage(PAGE, \"https://mysite.com/\")\n// → [\"http://cdn.old.example/logo.png\"]  ← the padlock-killer\nredirectChain(\"http://www.mysite.com/x\", RULES)\n// → [\"https://www.mysite.com/x\", \"https://mysite.com/x\"]  ← 2 hops" },
      steps: [
        { text: "Write `auditPage(html, pageUrl)` — on an `https://` page, flag every `src=\"http://…\"` URL, in document order.",
          test: "T.expect(typeof auditPage === 'function', 'Define auditPage(html, pageUrl).');\nT.eq(auditPage(PAGE, 'https://mysite.com/'), ['http://cdn.old.example/logo.png'], 'exactly one subresource loads over http:// — flag that URL alone (the <a href> is navigation, not a load)');\nT.eq(auditPage('<img src=\"http://mysite.com/banner.jpg\">', 'https://mysite.com/'), ['http://mysite.com/banner.jpg'], 'even your OWN host over http:// is mixed content — the scheme is the problem, not the domain');" },
        { text: "Prove the safe cases stay unflagged: `https://`, protocol-relative `//`, same-origin paths — and a plain `http://` page has no padlock to protect at all.",
          test: "T.eq(auditPage('<img src=\"https://cdn.new.example/photo.jpg\"><img src=\"//cdn.new.example/badge.png\"><img src=\"/assets/photo.jpg\">', 'https://mysite.com/'), [], 'https://, protocol-relative //, and same-origin paths are all safe — flag none of them');\nT.eq(auditPage(PAGE, 'http://mysite.com/'), [], 'an http:// page has no padlock to lose — mixed content is an https-only problem');" },
        { text: "Write `redirectChain(url, rules)` — first matching prefix rule rewrites the URL; repeat until none matches (cap at 10 hops), returning each URL visited.",
          test: "T.expect(typeof redirectChain === 'function', 'Define redirectChain(url, rules).');\nvar chain = redirectChain('http://www.mysite.com/x', RULES);\nT.eq(chain, ['https://www.mysite.com/x', 'https://mysite.com/x'], 'hop 1 fixes the scheme, hop 2 drops the www — record each URL visited, in order');\nT.eq(chain[chain.length - 1], 'https://mysite.com/x', 'the chain must END at the canonical URL');\nT.eq(redirectChain('https://mysite.com/x', RULES), [], 'already canonical → no rule matches → zero hops (an empty chain is the goal)');\nT.eq(redirectChain('http://mysite.com/x', RULES), ['https://mysite.com/x'], 'the apex over http needs only the scheme hop');" }
      ],
      files: [
        { name: "script.js", content: "// A page with one skeleton in the closet:\nconst PAGE = [\n  '<img src=\"http://cdn.old.example/logo.png\">',\n  '<img src=\"https://cdn.new.example/photo.jpg\">',\n  '<img src=\"//cdn.new.example/badge.png\">',\n  '<img src=\"/assets/photo.jpg\">',\n  '<a href=\"http://other.example/\">a link is navigation, not a load</a>'\n].join('\\n');\n\n// redirect rules, applied first-match-wins until none matches:\nconst RULES = [\n  { from: \"http://\",                to: \"https://\" },\n  { from: \"https://www.mysite.com\", to: \"https://mysite.com\" }\n];\n\nfunction auditPage(html, pageUrl) {\n  // only an https:// page can have mixed content — otherwise return []\n  // find every src=\"…\" attribute; flag the URLs that start with \"http://\"\n  // (href on <a> is navigation, not a subresource — leave links alone)\n}\n\nfunction redirectChain(url, rules) {\n  // repeat (max 10 hops — you know why):\n  //   find the FIRST rule whose .from is a prefix of the current url\n  //   apply it (swap the prefix for .to), record the new url\n  //   no rule matches → return the chain so far\n}\n\nconsole.log(auditPage(PAGE, \"https://mysite.com/\"));\nconsole.log(redirectChain(\"http://www.mysite.com/x\", RULES));\n" }
      ],
      hints: [
        "Guard first: `if (!pageUrl.startsWith(\"https://\")) return [];` — no padlock, no mixed content.",
        "A regex finds every src attribute: `for (const m of html.matchAll(/src=\"([^\"]*)\"/g))` — then keep only the captured `m[1]` values that `.startsWith(\"http://\")`.",
        "redirectChain is lesson 1's resolver in a trench coat: loop with a hop cap, `rules.find(r => url.startsWith(r.from))`, rebuild with `rule.to + url.slice(rule.from.length)`, push, repeat."
      ],
      solution: {
        "script.js": "// A page with one skeleton in the closet:\nconst PAGE = [\n  '<img src=\"http://cdn.old.example/logo.png\">',\n  '<img src=\"https://cdn.new.example/photo.jpg\">',\n  '<img src=\"//cdn.new.example/badge.png\">',\n  '<img src=\"/assets/photo.jpg\">',\n  '<a href=\"http://other.example/\">a link is navigation, not a load</a>'\n].join('\\n');\n\n// redirect rules, applied first-match-wins until none matches:\nconst RULES = [\n  { from: \"http://\",                to: \"https://\" },\n  { from: \"https://www.mysite.com\", to: \"https://mysite.com\" }\n];\n\nfunction auditPage(html, pageUrl) {\n  if (!pageUrl.startsWith(\"https://\")) return [];\n  const flagged = [];\n  for (const m of html.matchAll(/src=\"([^\"]*)\"/g)) {\n    if (m[1].startsWith(\"http://\")) flagged.push(m[1]);\n  }\n  return flagged;\n}\n\nfunction redirectChain(url, rules) {\n  const chain = [];\n  for (let hops = 0; hops < 10; hops++) {\n    const rule = rules.find(r => url.startsWith(r.from));\n    if (!rule) return chain;\n    url = rule.to + url.slice(rule.from.length);\n    chain.push(url);\n  }\n  return chain;\n}\n\nconsole.log(auditPage(PAGE, \"https://mysite.com/\"));\nconsole.log(redirectChain(\"http://www.mysite.com/x\", RULES));\n"
      }
    },

    {
      id: "ship-quiz-5",
      title: "Unit 5 quiz: Domains & DNS",
      kind: "quiz", xp: 10,
      brief: "How names resolve, the CNAME rules, and what breaks the padlock. 80% to pass.",
      questions: [
        { q: "What does a DNS A record actually store?",
          choices: ["An alias pointing one name at another name", "The IPv4 address a name resolves to", "The mail server responsible for the domain", "Free-form text used for domain verification"],
          answer: 1, explain: "An A record is the bottom of every lookup: name → IPv4 address (AAAA is the IPv6 twin). Aliases are CNAME records, mail routing is MX, and free-form text is TXT. A resolver keeps chasing CNAMEs until it lands on an A record, because a browser can only connect to an IP." },
        { q: "Your `resolve()` hops from `www.mysite.com` to `mysite.com` before it finds an IP. Which record type made that hop happen?",
          choices: ["A", "MX", "CNAME", "TXT"],
          answer: 2, explain: "A CNAME says \"this name is an alias — ask again with that name.\" The resolver replaces the hostname and repeats the lookup, which is why your resolve() loops until it hits an A record — and why it needs a hop cap, since two CNAMEs pointing at each other would chase forever." },
        { q: "Why can a CNAME never sit at the apex (`mysite.com` itself)?",
          choices: ["A CNAME must be the only record at its name, and the apex always has other records", "The apex is reserved for the zone's MX and TXT records, which take priority", "CNAME values may not contain more than one dot, and apex targets always do", "Browsers refuse to follow any CNAME chain that starts at a bare domain without a subdomain"],
          answer: 0, explain: "The CNAME rule is exclusivity: an alias must be the ONLY record at its name, because \"ignore this, ask elsewhere\" contradicts any record beside it. The apex always carries the zone's own SOA and NS records, so a CNAME can never legally live there — which is exactly why pointing an apex at a host takes A records instead." },
        { q: "You added `www CNAME me.github.io` and `https://www.mysite.com` works — but the bare `https://mysite.com` will not load at all. Most likely cause?",
          choices: ["GitHub Pages can only ever serve www subdomains", "The CNAME file in the repo lists the wrong domain", "HTTPS certificates never cover bare apex domains", "The apex has no A records pointing at the host"],
          answer: 3, explain: "The CNAME you added covers only the `www` name — the apex is a separate lookup, and since a CNAME cannot sit at `@`, it needs its own A records (for GitHub Pages, the four 185.199.108–111.153 addresses). A wrong CNAME file would break things AFTER the name resolves; this domain is not resolving at all." },
        { q: "Your page is served over `https://`, but one tag reads `<img src=\"http://cdn.example/logo.png\">`. What does the browser do?",
          choices: ["Flags mixed content — the load is blocked or the padlock is downgraded", "Nothing, because images cannot carry scripts and are therefore always safe to load", "Redirects the whole page back to http:// so both schemes match again", "Silently rewrites every subresource URL to https:// before fetching"],
          answer: 0, explain: "One http:// subresource on an https page is mixed content: the page promised encryption and then fetched something in plaintext, so browsers block the load or strip the padlock. The fix is serving the asset over https:// (or a protocol-relative or same-origin URL) — automatic upgrading only happens if you explicitly opt in with a CSP header, never by default." },
        { q: "How many redirect hops does this visitor pay before landing on the canonical URL?",
          code: "const RULES = [\n  { from: \"http://\",                to: \"https://\" },\n  { from: \"https://www.mysite.com\", to: \"https://mysite.com\" }\n];\nredirectChain(\"http://www.mysite.com/about\", RULES);",
          lang: "js",
          choices: ["0", "1", "2", "3"],
          answer: 2, explain: "Hop 1 upgrades the scheme: https://www.mysite.com/about. Hop 2 drops the www: https://mysite.com/about — then no rule matches and the chain stops. Each hop is a full round trip before the page even starts loading, which is why you publish canonical links (and why HSTS, which lets returning browsers skip the http hop, matters)." }
      ]
    }
  ]
});
