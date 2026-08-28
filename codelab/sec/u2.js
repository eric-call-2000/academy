/* Web Security Basics — Unit 2: XSS — the attack lab */
window.CODELAB.addUnit("sec", {
  id: "sec-u2",
  title: "XSS: the attack lab",
  icon: "🛡️",
  blurb: "Reflected, stored and DOM-based XSS — learned the only way that sticks: you write the exploit, watch it fire in your own sandbox, then find out exactly which sinks let it in.",
  cheat: [
    { h: "Three flavours of XSS", lang: "js", code: "// Reflected: payload rides in on the request, bounces back once\nresults.innerHTML = \"You searched for: \" + query;   // ?q=<img ...>\n\n// Stored: payload is saved, replayed to EVERY visitor\ncomments.push(userInput); renderAll();               // fires on each render\n\n// DOM: source -> sink entirely in the browser, server never sees it\nout.innerHTML = location.hash.slice(1);", note: "Same bug — untrusted string reaching an HTML/JS sink — three delivery routes." },
    { h: "The dangerous sinks", lang: "js", code: "el.innerHTML = s;                  // parses s as HTML\nel.outerHTML = s;                  // same\nel.insertAdjacentHTML(pos, s);     // same\nel.href = s;   // s can be \"javascript:...\"\nel.src  = s;   // scripts, iframes\neval(s); new Function(s); document.write(s);", note: "Every one of these turns a string into markup or code. textContent / setAttribute do not." },
    { h: "Why <script> is inert but <img> pops", lang: "js", code: "el.innerHTML = \"<script>run()<\\/script>\"; // element built, NEVER runs\nel.innerHTML = \"<img src=x onerror=run()>\"; // onerror fires — run() DOES run", note: "The no-run rule is <script>-only. Event-handler attributes on any element still fire — that is how real payloads dodge it." },
    { h: "The lab sentinel", lang: "js", code: "// alert-level, textbook-harmless payload used all unit:\n'<img src=x onerror=\"window.__fired=(window.__fired||0)+1\">'\n// a failed image load trips onerror -> the counter proves the exploit landed", note: "Every target is code in THIS frame. Break your own app; never point this at anyone else's." },
    { h: "The fix (next unit)", lang: "js", code: "el.textContent = userInput;        // 1. do not build HTML from strings\nel.innerHTML  = escapeHtml(input); // 2. or escape for the context\nsanitize(markup);                  // 3. or allow-list — then ship DOMPurify", note: "U3 is the defense. Hand-rolled escaping is a teaching exercise; production ships a maintained library." }
  ],
  lessons: [

    {
      id: "sec-u2-1",
      title: "Reflected XSS: pop your own payload",
      kind: "web", chip: "SEC", xp: 15, mins: 12,
      brief: "**Lab rules:** this is your own sandbox. The payloads are the harmless `alert`-level stuff from every XSS textbook, and every target is code running right here in this frame. You break your own app so you never ship someone else's.\n\nIn *Building Interactive Websites* (`dom-u1-3`) you were told: **never** feed untrusted input to `innerHTML`. Now do it on purpose and watch it fire.\n\nThis search page takes your query and runs `results.innerHTML = \"You searched for: \" + query`. There's no address bar in here, so the `query` constant stands in for the `?q=` value a victim's crafted link would carry — the exploit is 100% real, only the URL is faked. Your job: make `query` a payload that lands a real `<img>` and trips the `window.__fired` sentinel.",
      steps: [
        { text: "Replace the benign `query` with an `<img>` payload whose `onerror` bumps `window.__fired`. When `results.innerHTML` parses it, the bogus `src` fails to load and the handler runs.",
          test: "await T.sleep(150);\nT.eq(T.count('#results img'), 1, 'Your payload should make exactly one <img> appear inside #results — set query to an <img src=x onerror=...> string.');\nT.expect(window.__fired === 1, 'The onerror never fired. Use onerror=\"window.__fired=(window.__fired||0)+1\" so the failed image load trips the sentinel.');" },
        { text: "Confirm it's genuinely *reflected*: the page still shows the `You searched for:` label, with your payload injected straight into it.",
          test: "await T.sleep(150);\nT.expect((T.text('#results') || '').toLowerCase().indexOf('you searched for') !== -1, 'Keep the results.innerHTML = \"You searched for: \" + query line — a reflected payload rides in on that echoed value.');\nT.expect(window.__fired === 1, 'And the exploit should still have fired exactly once.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Search</h1>\n  <p id=\"results\"></p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\n#results {\n  padding: 10px 14px;\n  border: 2px solid #cbd5e1;\n  border-radius: 10px;\n  min-height: 22px;\n}\n" },
        { name: "script.js", content: "const results = document.querySelector(\"#results\");\n\n// This 'query' is the ?q= value from the URL — attacker-controlled.\n// Right now it's a harmless search term. Make it an exploit:\nconst query = \"shoes\";\n\n// The vulnerable line — it drops your value straight into the page as HTML:\nresults.innerHTML = \"You searched for: \" + query;\n" }
      ],
      hints: [
        "An image with a broken src is the classic delivery vehicle: `<img src=x onerror=\"...\">`. The src fails, so onerror runs.",
        "Put the sentinel in the handler: `const query = '<img src=x onerror=\"window.__fired=(window.__fired||0)+1\">';`",
        "Leave the `results.innerHTML = \"You searched for: \" + query;` line exactly as it is — that unescaped sink is the whole vulnerability."
      ],
      solution: {
        "script.js": "const results = document.querySelector(\"#results\");\n\n// This 'query' is the ?q= value from the URL — attacker-controlled.\n// Now it carries a real reflected-XSS payload:\nconst query = '<img src=x onerror=\"window.__fired=(window.__fired||0)+1\">';\n\n// The vulnerable line — it drops your value straight into the page as HTML:\nresults.innerHTML = \"You searched for: \" + query;\n"
      }
    },

    {
      id: "sec-u2-2",
      title: "Stored XSS: one comment, every visitor",
      kind: "web", chip: "SEC", xp: 15, mins: 13,
      brief: "**Lab rules:** your own sandbox, textbook payload, every target in this frame.\n\nReflected XSS needs the victim to click a poisoned link. **Stored** XSS is worse: the payload is saved once, then replayed to *everyone* who loads the page — no link required. A single booby-trapped comment attacks the whole audience, on every render.\n\nBuild the vulnerable comments board so you can see it happen. Write `renderAll()` to drop each saved comment into the list with `innerHTML`, and wire the form to save what's typed and re-render. Then a stored `<img onerror>` fires again *every single time the board redraws*.",
      steps: [
        { text: "Post an `<img>` payload as a comment. Once `renderAll()` builds it with `innerHTML`, the stored image fails to load and its `onerror` fires.",
          test: "var PAYLOAD = '<img src=x onerror=\"window.__fired=(window.__fired||0)+1\">';\nT.type('#comment', PAYLOAD);\nT.submit('#form');\nawait T.sleep(150);\nT.expect(T.count('#list img') >= 1, 'After posting, renderAll() should build the comment with innerHTML so the <img> becomes a real element — none appeared.');\nT.expect(window.__fired >= 1, 'The stored payload should fire when the board renders. Use innerHTML (not textContent) for each comment.');" },
        { text: "Now the point of *stored*: render the board a second time and the same saved payload attacks again.",
          test: "renderAll();\nawait T.sleep(150);\nT.expect(window.__fired >= 2, 'Persistence is the whole difference from reflected: the comment is stored, so every re-render replays the attack. A second render should trip the sentinel a SECOND time.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Guestbook</h1>\n  <form id=\"form\">\n    <input id=\"comment\" placeholder=\"Leave a comment…\" autocomplete=\"off\">\n    <button type=\"submit\">Post</button>\n  </form>\n  <ul id=\"list\"></ul>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\ninput {\n  padding: 8px;\n  border: 2px solid #cbd5e1;\n  border-radius: 8px;\n  width: 240px;\n}\nbutton {\n  padding: 8px 14px;\n  border-radius: 8px;\n  border: 2px solid #cbd5e1;\n  background: white;\n  cursor: pointer;\n}\n#list {\n  margin-top: 14px;\n  padding-left: 18px;\n}\n" },
        { name: "script.js", content: "const comments = [\"Welcome to the board!\"];\nconst list = document.querySelector(\"#list\");\nconst form = document.querySelector(\"#form\");\nconst input = document.querySelector(\"#comment\");\n\n// 1) renderAll(): empty #list, then for EACH comment create an <li>\n//    and drop the comment text into it with innerHTML (the vulnerable sink).\nfunction renderAll() {\n  // your code here\n}\n\n// 2) On submit: stop the page reload, push input.value into comments,\n//    then call renderAll() so the stored comment shows up.\nform.addEventListener(\"submit\", (e) => {\n  // your code here\n});\n\nrenderAll();\n" }
      ],
      hints: [
        "renderAll rebuilds the list from scratch: `list.innerHTML = \"\";` then loop `for (const c of comments) { ... }`.",
        "Inside the loop, the vulnerable line: `const li = document.createElement(\"li\"); li.innerHTML = c; list.appendChild(li);`",
        "The submit handler: `e.preventDefault(); comments.push(input.value); renderAll();` — saving the raw value is what makes it stored."
      ],
      solution: {
        "script.js": "const comments = [\"Welcome to the board!\"];\nconst list = document.querySelector(\"#list\");\nconst form = document.querySelector(\"#form\");\nconst input = document.querySelector(\"#comment\");\n\nfunction renderAll() {\n  list.innerHTML = \"\";\n  for (const c of comments) {\n    const li = document.createElement(\"li\");\n    li.innerHTML = c;\n    list.appendChild(li);\n  }\n}\n\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  comments.push(input.value);\n  renderAll();\n});\n\nrenderAll();\n"
      }
    },

    {
      id: "sec-u2-3",
      title: "DOM XSS: know your sinks",
      kind: "web", chip: "SEC", xp: 15, mins: 13,
      brief: "**Lab rules:** your own sandbox, textbook payloads, every target in this frame.\n\nDOM-based XSS never touches the server — tainted data flows from a browser source into a dangerous **sink** in your own JavaScript. So the fix lives in your front-end code, and it starts with knowing which lines are sinks.\n\nThis `render()` paints a profile card and has **three** unsafe sinks: it drops a user `bio` into the page with `innerHTML`, and it assigns two user-supplied URLs straight to `href`. Make all three safe: render the bio as inert text, and set an `href` only when its scheme is `http`/`https` — so a `javascript:` URL is dropped while the legit avatar link survives.",
      steps: [
        { text: "Neutralise the bio sink: the `<img>` in it must show as literal text, with no real image built.",
          test: "await T.sleep(150);\nT.expect((T.text('#out') || '').indexOf('<img') !== -1, 'The bio should render as literal text — #out must visibly contain the characters \"<img\", not a picture. Switch that sink from innerHTML to textContent.');\nT.eq(T.count('#out img'), 0, 'A real <img> was built inside #out — the innerHTML sink is still live.');" },
        { text: "With every sink safe, nothing should execute when the card renders.",
          test: "await T.sleep(150);\nT.expect(window.__fired === undefined, 'Something ran on load. Once all three sinks are safe, window.__fired must still be undefined.');" },
        { text: "The scheme guard: a `javascript:` link is dropped (clicking it does nothing), while the real `https:` avatar link keeps its href.",
          test: "T.expect((T.attr('#profileLink', 'href') || '').indexOf('javascript:') !== 0, 'Never let a javascript: URL reach href — check the scheme first and drop it when it fails.');\nT.click('#profileLink');\nawait T.sleep(150);\nT.expect(window.__fired === undefined, 'Clicking the profile link still fired the payload — its javascript: href was not dropped.');\nT.expect((T.attr('#avatarLink', 'href') || '').indexOf('https:') === 0, 'Do not nuke every link — the legit https avatar href must survive the guard.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Profile card</h1>\n  <p id=\"out\"></p>\n  <p>\n    <a id=\"profileLink\" href=\"#\">visit website</a> ·\n    <a id=\"avatarLink\" href=\"#\">avatar</a>\n  </p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\n#out {\n  padding: 10px 14px;\n  border: 2px solid #cbd5e1;\n  border-radius: 10px;\n  min-height: 22px;\n}\na {\n  color: #2563eb;\n}\n" },
        { name: "script.js", content: "// Untrusted profile data — as if loaded straight from a saved profile:\nconst bio = '<img src=x onerror=\"window.__fired=(window.__fired||0)+1\"> hi there!';\nconst website = \"javascript:void(window.__fired=(window.__fired||0)+1)\";\nconst avatarUrl = \"https://cdn.example.com/ada.png\";\n\nconst out = document.querySelector(\"#out\");\nconst profileLink = document.querySelector(\"#profileLink\");\nconst avatarLink = document.querySelector(\"#avatarLink\");\n\nfunction render() {\n  // Three UNSAFE sinks — make each one safe.\n  out.innerHTML = bio;             // sink 1: render bio as inert text instead\n  profileLink.href = website;      // sink 2: only set http(s) hrefs\n  avatarLink.href = avatarUrl;     // sink 3: only set http(s) hrefs\n}\n\nrender();\n" }
      ],
      hints: [
        "Sink 1 is a one-word change: `out.textContent = bio;` — tags become literal characters, and no <img> is ever built.",
        "Write one guard for both links: `function setSafeHref(link, url) { if (/^https?:\\/\\//i.test(url)) link.href = url; else link.removeAttribute(\"href\"); }`",
        "Then `setSafeHref(profileLink, website);` drops the javascript: URL (an anchor with no href is harmless), while `setSafeHref(avatarLink, avatarUrl);` keeps the https link."
      ],
      solution: {
        "script.js": "// Untrusted profile data — as if loaded straight from a saved profile:\nconst bio = '<img src=x onerror=\"window.__fired=(window.__fired||0)+1\"> hi there!';\nconst website = \"javascript:void(window.__fired=(window.__fired||0)+1)\";\nconst avatarUrl = \"https://cdn.example.com/ada.png\";\n\nconst out = document.querySelector(\"#out\");\nconst profileLink = document.querySelector(\"#profileLink\");\nconst avatarLink = document.querySelector(\"#avatarLink\");\n\n// Only http(s) URLs are allowed to reach href; anything else is dropped.\nfunction setSafeHref(link, url) {\n  if (/^https?:\\/\\//i.test(url)) link.href = url;\n  else link.removeAttribute(\"href\");\n}\n\nfunction render() {\n  out.textContent = bio;\n  setSafeHref(profileLink, website);\n  setSafeHref(avatarLink, avatarUrl);\n}\n\nrender();\n"
      }
    },

    {
      id: "sec-u2-4",
      title: "The <script> tag that didn't fire",
      kind: "web", chip: "SEC", xp: 15, mins: 12,
      brief: "**Lab rules:** your own sandbox, textbook payloads, every target in this frame.\n\nThe trap that fools beginners: inject a `<script>` through `innerHTML` and it *doesn't run*. The HTML spec builds the element but marks it already-executed, so it just sits there, inert. People see \"my `<script>` did nothing\" and conclude the page is safe.\n\nIt isn't. The no-run rule is `<script>`-only — an `<img onerror>` in the very same slot fires immediately. Prove both halves: inject the `<script>` payload (element appears, `window.__fired` stays undefined), then the `<img>` payload into the same `#out` (it fires).",
      steps: [
        { text: "Wire the first button to inject the `<script>` payload into `#out` with `innerHTML`. The element gets built — but it never runs.",
          test: "T.click('#scriptBtn');\nawait T.sleep(150);\nT.eq(T.count('#out script'), 1, 'Injecting the <script> string with innerHTML should create a <script> element inside #out — set out.innerHTML = scriptPayload.');\nT.expect(window.__fired === undefined, 'A <script> inserted via innerHTML is INERT — the browser refuses to run it, so window.__fired stays undefined. That is the trap.');" },
        { text: "Wire the second button to inject the `<img>` payload into the same `#out`. This one fires — even though the `<script>` above didn't.",
          test: "T.click('#imgBtn');\nawait T.sleep(150);\nT.eq(T.count('#out img'), 1, 'The <img> payload should build a real <img> in #out — set out.innerHTML = imgPayload in the second handler.');\nT.expect(window.__fired === 1, 'The onerror DID run: event-handler attributes fire even where <script> would not. \"No runnable <script>\" never means safe.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Same slot, two payloads</h1>\n  <div id=\"out\">nothing injected yet…</div>\n  <p>\n    <button id=\"scriptBtn\">Inject &lt;script&gt;</button>\n    <button id=\"imgBtn\">Inject &lt;img onerror&gt;</button>\n  </p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\n#out {\n  padding: 12px 16px;\n  border: 2px solid #cbd5e1;\n  border-radius: 10px;\n  min-height: 24px;\n  margin-bottom: 12px;\n}\nbutton {\n  padding: 8px 14px;\n  border-radius: 8px;\n  border: 2px solid #cbd5e1;\n  background: white;\n  cursor: pointer;\n}\n" },
        { name: "script.js", content: "const out = document.querySelector(\"#out\");\nconst scriptBtn = document.querySelector(\"#scriptBtn\");\nconst imgBtn = document.querySelector(\"#imgBtn\");\n\n// A <script> payload: if it ran, it would set window.__fired = 1. (It won't.)\nconst scriptPayload = \"<script>window.__fired=1<\\/script>\";\n\n// An <img> payload: onerror fires when the bogus src fails to load.\nconst imgPayload = '<img src=x onerror=\"window.__fired=(window.__fired||0)+1\">';\n\nscriptBtn.addEventListener(\"click\", () => {\n  // 1) inject scriptPayload into #out via innerHTML\n});\n\nimgBtn.addEventListener(\"click\", () => {\n  // 2) inject imgPayload into #out via innerHTML\n});\n" }
      ],
      hints: [
        "Both handlers are one line each — the same sink, two different payloads.",
        "First button: `out.innerHTML = scriptPayload;` — inspect #out afterwards and the <script> element is really there, just dead.",
        "Second button: `out.innerHTML = imgPayload;` — replacing the content with the <img> lets onerror fire."
      ],
      solution: {
        "script.js": "const out = document.querySelector(\"#out\");\nconst scriptBtn = document.querySelector(\"#scriptBtn\");\nconst imgBtn = document.querySelector(\"#imgBtn\");\n\n// A <script> payload: if it ran, it would set window.__fired = 1. (It won't.)\nconst scriptPayload = \"<script>window.__fired=1<\\/script>\";\n\n// An <img> payload: onerror fires when the bogus src fails to load.\nconst imgPayload = '<img src=x onerror=\"window.__fired=(window.__fired||0)+1\">';\n\nscriptBtn.addEventListener(\"click\", () => {\n  out.innerHTML = scriptPayload;\n});\n\nimgBtn.addEventListener(\"click\", () => {\n  out.innerHTML = imgPayload;\n});\n"
      }
    },

    {
      id: "sec-quiz-2",
      title: "Unit 2 quiz: How XSS actually works",
      kind: "quiz", xp: 10,
      brief: "Reflected vs stored vs DOM, the inert-<script> trap, and which sinks actually parse HTML. 80% to pass.",
      questions: [
        { q: "A search page echoes your unescaped `?q=` value straight back into the response HTML. In one word, which class of XSS is that?",
          choices: ["Stored", "Reflected", "Persistent", "Second-order"],
          answer: 1,
          explain: "Reflected XSS travels in a single request and bounces straight back in the response, so it fires only for someone who follows the crafted link and nothing is saved. Stored (a.k.a. persistent) XSS would be written to the server and replayed to every later visitor — a different, usually graver bug." },
        { q: "One booby-trapped comment runs its payload for every visitor who loads the page afterwards, with no crafted link needed. Which XSS type is that?",
          choices: ["Reflected", "DOM-based", "Mutation-based", "Stored"],
          answer: 3,
          explain: "Stored (persistent) XSS is written once into server-side data — a comment, a bio, a note — and then served back to everyone who views that page, so it attacks the whole audience automatically on each render. Reflected XSS, by contrast, needs each victim to follow a poisoned URL." },
        { q: "What makes an XSS bug specifically DOM-based rather than reflected or stored?",
          choices: ["A database trigger rewrites the row when it is read", "The bug only affects the Document Object Model, not real users", "The payload need never reach the server — client-side JS reads a browser source like `location.hash` and writes it to a sink", "The server renders the attacker's markup into the page before sending it"],
          answer: 2,
          explain: "In DOM-based XSS the tainted data flows from a browser source (URL fragment, `document.referrer`, `localStorage`) into a dangerous sink (`innerHTML`, `eval`) entirely in client-side JavaScript. The server may never see the payload, so output escaping on the server cannot catch it — the fix has to live in the front-end code." },
        { q: "You set the innerHTML below and `alert(1)` never runs. Why?",
          code: "el.innerHTML = '<script>alert(1)<\\/script>';",
          lang: "js",
          choices: ["The parser builds the `<script>` node, but scripts inserted via innerHTML are flagged already-started and never execute", "innerHTML automatically strips out any `<script>` tag before it can ever be inserted into the page at all", "The script did run — its errors were just silently swallowed by the browser", "`alert` happened to be out of scope at that point"],
          answer: 0,
          explain: "Per the HTML spec, a `<script>` created by setting innerHTML is parsed into the DOM but marked 'already started', so the browser never runs it. The tag is genuinely there and you can query it — it just stays inert, which is exactly why people wrongly conclude a page with no runnable `<script>` is safe." },
        { q: "So if injected `<script>` won't run, why does `<img src=x onerror=alert(1)>` still pop?",
          code: "el.innerHTML = '<img src=x onerror=alert(1)>';",
          lang: "js",
          choices: ["The image really loads from x and executes the handler", "`onerror` is an inline event handler the parser wires up, and the bogus `src` fails to load and fires it", "innerHTML runs onerror handlers but blocks onclick ones", "The tag survives because it contains no JavaScript keyword"],
          answer: 1,
          explain: "The no-execution rule is specific to `<script>` elements. An `<img>` is an ordinary element and its `onerror` is registered as an event handler when parsed, so when `src=x` fails to load the browser fires it and the attacker's code runs. Event-handler attributes are the standard way real payloads dodge the script rule." },
        { q: "Besides `innerHTML`, which of these also parses its string as HTML — making it an XSS sink?",
          code: "el.textContent = s;\nel.setAttribute('class', s);\nel.insertAdjacentHTML('beforeend', s);\nel.dataset.id = s;",
          lang: "js",
          choices: ["`el.textContent = s`", "`el.setAttribute('class', s)`", "`el.insertAdjacentHTML('beforeend', s)`", "`el.dataset.id = s`"],
          answer: 2,
          explain: "`insertAdjacentHTML` runs its string through the HTML parser exactly like `innerHTML` and `outerHTML`, so markup in `s` becomes live nodes. `textContent`, a normal `setAttribute`, and `dataset` all treat the value as inert text — knowing which sinks parse HTML is what tells you where escaping is mandatory." }
      ]
    }
  ]
});
