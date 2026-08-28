/* Web Security Basics — Unit 3: Escaping, sanitizing & safe rendering */
window.CODELAB.addUnit("sec", {
  id: "sec-u3",
  title: "Escaping, sanitizing & safe rendering",
  icon: "🛡️",
  blurb: "The three defenses, in order of preference: don't build HTML from strings; if you must, escape for the right context; if you must accept markup, allow-list it.",
  cheat: [
    { h: "escapeHtml — & goes FIRST", lang: "js", code: "function escapeHtml(str) {\n  return String(str)\n    .replace(/&/g, \"&amp;\")   // FIRST, or you double-escape\n    .replace(/</g, \"&lt;\")\n    .replace(/>/g, \"&gt;\")\n    .replace(/\"/g, \"&quot;\")\n    .replace(/'/g, \"&#39;\");\n}", note: "Escape < before & and the & you just wrote in &lt; gets re-escaped to &amp;lt;." },
    { h: "Escaping is context-dependent", lang: "js", code: "// HTML text:      escapeHtml(v)\n// HTML attribute: escapeAttr(v)  // encode ALL non-alphanumerics\n// inside a <script> JS string: escapeJsString(v)", note: "`x onmouseover=alert(1)` sails through escapeHtml untouched — no < > & \" ' in it." },
    { h: "Prefer the DOM over strings", lang: "js", code: "// SAFE by construction — never parsed as HTML:\nconst s = document.createElement(\"strong\");\ns.textContent = word;\nparent.appendChild(s);", note: "textContent can't inject a tag. Concatenating into innerHTML re-opens the hole." },
    { h: "Allow-list sanitizer (skeleton)", lang: "js", code: "const tpl = document.createElement(\"template\");\ntpl.innerHTML = dirty;          // inert: no loads, no scripts\nwalk(tpl.content);              // drop tags not on the allow-list,\n                               // strip every attribute you didn't permit\nreturn tpl.innerHTML;", note: "Allow-list the few tags you want; drop everything else by default." },
    { h: "Safe auto-links", lang: "js", code: "// only http/https; never javascript:\nif (/^https?:/i.test(url)) {\n  a.setAttribute(\"href\", url);\n  a.setAttribute(\"rel\", \"noopener noreferrer\");\n  a.setAttribute(\"target\", \"_blank\");\n}", note: "target=_blank without rel=noopener hands the new tab a reference to yours." },
    { h: "The honest line", lang: "js", code: "// You just built a sanitizer to UNDERSTAND the problem.\n// In production, ship a maintained, audited library:\n//   import DOMPurify from \"dompurify\";\n//   el.innerHTML = DOMPurify.sanitize(dirty);", note: "Hand-rolled sanitizers miss mutation-XSS and parser quirks that libraries have patched for years." }
  ],
  lessons: [

    {
      id: "sec-u3-1",
      title: "Write escapeHtml",
      kind: "js", chip: "SEC", xp: 15, mins: 12,
      brief: "The first defense against XSS is simple: never hand the browser HTML it can run. When untrusted text has to appear on the page, you **escape** it — turn the characters that mean something in HTML into harmless entities.\n\nThere are five: `&`, `<`, `>`, `\"` and `'`. Turn them into `&amp;` `&lt;` `&gt;` `&quot;` `&#39;`.\n\nTwo traps hide in this five-line function:\n\n- **Order matters.** Escape `&` **first**. If you escape `<` first, the `&` inside the `&lt;` you just produced gets escaped *again* into `&amp;lt;` — and the user sees literal `&lt;` on the page.\n- **Make it total.** `escapeHtml(42)` and `escapeHtml(null)` should return strings, not throw. Coerce with `String(str)` on the way in.\n\nThis is a lab against your own page — the payloads are textbook, the target is your sandbox. Write the escaper once to understand it; in production your framework's templating auto-escapes for you.",
      example: { lang: "js", code: "escapeHtml(\"<img src=x onerror=alert(1)>\")\n// → \"&lt;img src=x onerror=alert(1)&gt;\"  (inert text, not a tag)" },
      steps: [
        { text: "Write `escapeHtml(str)` so a basic payload comes back inert: `<img src=x onerror=alert(1)>` → `&lt;img src=x onerror=alert(1)&gt;`.",
          test: "T.expect(typeof escapeHtml === 'function', 'Define function escapeHtml(str) { … }');\nT.eq(escapeHtml('<img src=x onerror=alert(1)>'), '&lt;img src=x onerror=alert(1)&gt;', 'Turn < and > into &lt; and &gt;.');" },
        { text: "Cover all five characters, ampersand FIRST — and prove it on the double-escape trap.",
          test: "T.eq(escapeHtml(\"&<>\\\"'\"), \"&amp;&lt;&gt;&quot;&#39;\", 'Escape all five: & < > double-quote and single-quote — and escape & FIRST so the entities you produce are not re-escaped.');\nT.eq(escapeHtml('&lt;'), '&amp;lt;', 'A user who literally types &lt; must SEE &lt; — so the & becomes &amp;, giving &amp;lt;. Escaping < before & double-escapes it.');" },
        { text: "Make it total: non-strings come back as strings, never a thrown error.",
          test: "T.expect(typeof escapeHtml(null) === 'string', 'escapeHtml(null) must return a string, not throw — coerce with String(str) first.');\nT.eq(escapeHtml(null), 'null', 'String(null) is the text null.');\nT.expect(typeof escapeHtml(42) === 'string' && escapeHtml(42) === '42', 'escapeHtml(42) should return the text 42.');" }
      ],
      files: [
        { name: "script.js", content: "// escapeHtml(str): turn & < > \" ' into HTML entities.\n// The starter forgets two things — the & rule and non-string inputs.\nfunction escapeHtml(str) {\n  // TODO: escape & FIRST, then coerce with String(str) so numbers/null don't crash\n  return str\n    .replace(/</g, \"&lt;\")\n    .replace(/>/g, \"&gt;\")\n    .replace(/\"/g, \"&quot;\")\n    .replace(/'/g, \"&#39;\");\n}\n\nconsole.log(escapeHtml(\"<img src=x onerror=alert(1)>\"));\n" }
      ],
      hints: [
        "Start by coercing: `return String(str).replace(...)` — now `escapeHtml(42)` won't throw.",
        "Add the ampersand rule as the FIRST replace in the chain: `.replace(/&/g, \"&amp;\")` before the others."
      ],
      solution: {
        "script.js": "function escapeHtml(str) {\n  return String(str)\n    .replace(/&/g, \"&amp;\")\n    .replace(/</g, \"&lt;\")\n    .replace(/>/g, \"&gt;\")\n    .replace(/\"/g, \"&quot;\")\n    .replace(/'/g, \"&#39;\");\n}\n\nconsole.log(escapeHtml(\"<img src=x onerror=alert(1)>\"));\n"
      }
    },

    {
      id: "sec-u3-2",
      title: "Escaping is context-dependent",
      kind: "js", chip: "SEC", xp: 15, mins: 13,
      brief: "`escapeHtml` is not a magic safety spray. It encodes the five characters that matter **in HTML text** — and nowhere else. Drop the same value into a different context and it can do nothing at all.\n\nThe classic proof: the value `x onmouseover=alert(1)` contains **no** `<`, `>`, `&`, `\"` or `'`. So `escapeHtml` returns it *byte-for-byte unchanged*. Put that into an unquoted attribute — `<div class=USERVALUE>` — and the space starts a brand-new `onmouseover` attribute. You escaped, and you're still owned.\n\nEach context needs its own escaper:\n\n- **`escapeAttr`** — in an attribute, encode **every** non-alphanumeric character as a numeric entity `&#NN;`. Now the space and `=` can't break out.\n- **`escapeJsString`** — safe to drop inside a `'…'` in a `<script>`: escape the backslash, the quotes, newlines, and `<` (so a payload can't close the script).\n- **`pick(context)`** — hand back the right escaper for `\"html\"`, `\"attr\"` or `\"js\"`.\n\nThis is a lab against your own sandbox. And the takeaway is the point: don't hand-pick escapers by hand in production — a template engine that knows the context does it for you.",
      steps: [
        { text: "See the problem first: `escapeHtml` leaves the attribute payload byte-identical.",
          test: "T.eq(escapeHtml('x onmouseover=alert(1)'), 'x onmouseover=alert(1)', 'escapeHtml touches none of these characters — in an unquoted attribute that payload just added an event handler. escapeHtml is given; do not change it.');" },
        { text: "Write `escapeAttr(str)`: encode every non-alphanumeric character as `&#NN;`.",
          test: "T.eq(escapeAttr('x onmouseover=alert(1)'), 'x&#32;onmouseover&#61;alert&#40;1&#41;', 'Encode EVERY non-alphanumeric char — the space (32), = (61) and parens are now inert.');\nT.eq(escapeAttr('abc123'), 'abc123', 'Letters and digits pass through untouched.');" },
        { text: "Write `escapeJsString(str)`: escape quotes, and neutralize a `</script>` breakout.",
          test: "var b = String.fromCharCode(92);\nT.eq(escapeJsString(\"O'Brien\"), 'O' + b + \"'Brien\", 'The single quote must be backslash-escaped so it cannot end the JS string early.');\nT.expect(escapeJsString('</script>').indexOf('<') === -1, 'Escape < (to \\\\x3C) so a payload cannot close the surrounding <script> block.');" },
        { text: "Write `pick(context)`: return the matching escaper function for `html`, `attr` or `js`.",
          test: "T.expect(pick('html') === escapeHtml, 'pick(\"html\") should return the escapeHtml function itself.');\nT.expect(pick('attr') === escapeAttr, 'pick(\"attr\") should return escapeAttr.');\nT.expect(pick('js') === escapeJsString, 'pick(\"js\") should return escapeJsString.');" }
      ],
      files: [
        { name: "script.js", content: "// escapeHtml is GIVEN — and notice it is context-blind.\nfunction escapeHtml(str) {\n  return String(str)\n    .replace(/&/g, \"&amp;\")\n    .replace(/</g, \"&lt;\")\n    .replace(/>/g, \"&gt;\")\n    .replace(/\"/g, \"&quot;\")\n    .replace(/'/g, \"&#39;\");\n}\n\n// TODO: in an ATTRIBUTE, escaping < > & \" ' is not enough (a space or =\n// starts a new attribute). Encode EVERY non-alphanumeric char as &#NN;.\nfunction escapeAttr(str) {\n  return String(str); // stub: does nothing\n}\n\n// TODO: safe to drop inside a '...' JS string in a <script>. Escape the\n// backslash, both quotes, newlines, and < (so a payload can't close </script>).\nfunction escapeJsString(str) {\n  return String(str); // stub: does nothing\n}\n\n// TODO: return the right escaper for the context.\nfunction pick(context) {\n  return escapeHtml; // stub: always HTML\n}\n" }
      ],
      hints: [
        "escapeAttr is one regex: `String(str).replace(/[^a-zA-Z0-9]/g, ch => \"&#\" + ch.charCodeAt(0) + \";\")`.",
        "escapeJsString: grab the backslash once with `String.fromCharCode(92)`, then walk the string swapping the dangerous characters for their escaped form.",
        "pick is a three-line if-chain returning the function itself (no parentheses — you return `escapeAttr`, you don't call `escapeAttr()`)."
      ],
      solution: {
        "script.js": "function escapeHtml(str) {\n  return String(str)\n    .replace(/&/g, \"&amp;\")\n    .replace(/</g, \"&lt;\")\n    .replace(/>/g, \"&gt;\")\n    .replace(/\"/g, \"&quot;\")\n    .replace(/'/g, \"&#39;\");\n}\n\nfunction escapeAttr(str) {\n  return String(str).replace(/[^a-zA-Z0-9]/g, function (ch) {\n    return \"&#\" + ch.charCodeAt(0) + \";\";\n  });\n}\n\nfunction escapeJsString(str) {\n  var b = String.fromCharCode(92);\n  var s = String(str);\n  var out = \"\";\n  for (var i = 0; i < s.length; i++) {\n    var ch = s.charAt(i);\n    if (ch === b) out += b + b;\n    else if (ch === \"'\") out += b + \"'\";\n    else if (ch === '\"') out += b + '\"';\n    else if (ch === \"<\") out += b + \"x3C\";\n    else if (ch === \"\\n\") out += b + \"n\";\n    else if (ch === \"\\r\") out += b + \"r\";\n    else out += ch;\n  }\n  return out;\n}\n\nfunction pick(context) {\n  if (context === \"html\") return escapeHtml;\n  if (context === \"attr\") return escapeAttr;\n  if (context === \"js\") return escapeJsString;\n  throw new Error(\"unknown context: \" + context);\n}\n"
      }
    },

    {
      id: "sec-u3-3",
      title: "An allow-list sanitizer",
      kind: "web", chip: "SEC", xp: 15, mins: 14,
      brief: "Sometimes you *must* accept markup — a comment with `<b>` and links. Escaping would show the tags as literal text; you actually want them to render. This is the hardest case, and the rule is **allow-list, never deny-list**: name the handful of tags and attributes you permit, and drop everything else.\n\nYou'll write `sanitize(dirty)`:\n\n1. Parse `dirty` into a detached `<template>`. This is the key move — template content is **inert**: images don't load, so `onerror` never fires while you clean.\n2. Walk every node. Drop any element whose tag is not in the allow-list `[B, I, EM, STRONG, A, P, BR, CODE]`.\n3. Strip **every** attribute — except `href` on an `<a>`, and only when its scheme is `http`/`https` (so `javascript:` is dropped).\n4. Return the cleaned `template.innerHTML`.\n\nThe starter is the vulnerable version — it trusts the input completely, so the payload fires the moment it hits the page. Watch it fire, then close the hole.\n\nHonest line: this is a teaching exercise. A real allow-list sanitizer has to survive mutation-XSS and parser quirks you haven't thought of — in production, **ship DOMPurify**, don't hand-roll it.",
      steps: [
        { text: "An allow-listed `<b>hi</b>` survives, text and all.",
          test: "render('<b>hi</b>');\nT.expect(T.count('#out b') === 1, 'A plain <b> is on the allow-list — it should survive.');\nT.expect((T.text('#out') || '').indexOf('hi') !== -1, 'Keep the text content.');" },
        { text: "An `<img onerror>` is not on the list — it's dropped, and the payload never fires.",
          test: "window.__fired = undefined;\nrender('<img src=x onerror=\"window.__fired=(window.__fired||0)+1\">');\nawait T.sleep(120);\nT.expect(T.count('#out img') === 0, 'An <img> is not on the allow-list — drop it entirely.');\nT.expect(window.__fired === undefined, 'The onerror must never fire — if #out has an img, the payload ran.');" },
        { text: "An allowed element keeps its tag but loses its dangerous attributes.",
          test: "window.__fired = undefined;\nrender('<b onclick=\"window.__fired=1\">x</b>');\nawait T.sleep(120);\nvar b = T.$('#out b');\nT.expect(b, 'Keep the <b> element itself — only its attributes are stripped.');\nT.expect(b && b.hasAttribute('onclick') === false, 'Strip the onclick attribute from allowed elements.');\nT.expect(window.__fired === undefined, 'With onclick gone, nothing fires.');" },
        { text: "A `javascript:` href is dropped but the anchor stays — and a real `https:` link keeps its href.",
          test: "render('<a href=\"javascript:alert(1)\">click</a>');\nvar a = T.$('#out a');\nT.expect(a, 'Keep the <a> element.');\nT.expect(a && a.hasAttribute('href') === false, 'A javascript: scheme is not http/https — drop the href but keep the anchor.');\nrender('<a href=\"https://example.com/x\">ok</a>');\nvar a2 = T.$('#out a');\nT.expect(a2 && a2.getAttribute('href') === 'https://example.com/x', 'An http/https href is safe — keep it, or you have just broken every real link.');" },
        { text: "The walk goes deep: a payload nested inside allowed tags is still removed.",
          test: "window.__fired = undefined;\nrender('<p><b><img src=x onerror=\"window.__fired=(window.__fired||0)+1\"></b></p>');\nawait T.sleep(120);\nT.expect(T.count('#out img') === 0, 'The walker must recurse — a payload nested inside allowed tags is still removed.');\nT.expect(T.count('#out p') === 1 && T.count('#out b') === 1, 'The safe wrappers <p> and <b> survive.');\nT.expect(window.__fired === undefined, 'Nothing fires at any depth.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Comment sanitizer</h1>\n  <div id=\"out\"></div>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\n#out {\n  margin-top: 12px;\n  padding: 12px;\n  border: 2px dashed #cbd5e1;\n  border-radius: 10px;\n  min-height: 24px;\n}\n" },
        { name: "script.js", content: "const out = document.querySelector(\"#out\");\nconst ALLOWED = [\"B\", \"I\", \"EM\", \"STRONG\", \"A\", \"P\", \"BR\", \"CODE\"];\n\n// sanitize(dirty): return SAFE html to drop into the page.\n//   1) parse dirty into a detached <template> (inert: no loads, no scripts)\n//   2) walk every node; drop any element whose tag is not in ALLOWED\n//   3) strip every attribute EXCEPT href on <a> with an http/https scheme\n//   4) return the cleaned template.innerHTML\nfunction sanitize(dirty) {\n  return String(dirty); // TODO: the starter trusts the input completely — an XSS hole\n}\n\n// render is given: it drops sanitize(dirty) into the page.\nfunction render(dirty) {\n  out.innerHTML = sanitize(dirty);\n}\n\nrender(\"Comments render here — try some <b>bold</b>.\");\n" }
      ],
      hints: [
        "Parse into an inert template: `const tpl = document.createElement(\"template\"); tpl.innerHTML = String(dirty);` then walk `tpl.content` and return `tpl.innerHTML`.",
        "A recursive walker: for each child element, if `ALLOWED.indexOf(child.tagName) === -1` remove it; otherwise strip its attributes, then recurse into it.",
        "Keep a single attribute: `const keep = child.tagName === \"A\" && a.name === \"href\" && /^https?:/i.test(a.value);` — remove the attribute whenever `keep` is false."
      ],
      solution: {
        "script.js": "const out = document.querySelector(\"#out\");\nconst ALLOWED = [\"B\", \"I\", \"EM\", \"STRONG\", \"A\", \"P\", \"BR\", \"CODE\"];\n\nfunction sanitize(dirty) {\n  const tpl = document.createElement(\"template\");\n  tpl.innerHTML = String(dirty);\n  walk(tpl.content);\n  return tpl.innerHTML;\n}\n\nfunction walk(node) {\n  const kids = Array.prototype.slice.call(node.childNodes);\n  kids.forEach(function (child) {\n    if (child.nodeType === 1) {\n      if (ALLOWED.indexOf(child.tagName) === -1) {\n        child.remove();\n        return;\n      }\n      Array.prototype.slice.call(child.attributes).forEach(function (a) {\n        const keep = child.tagName === \"A\" && a.name === \"href\" && /^https?:/i.test(a.value);\n        if (!keep) child.removeAttribute(a.name);\n      });\n      walk(child);\n    } else if (child.nodeType !== 3) {\n      child.remove();\n    }\n  });\n}\n\nfunction render(dirty) {\n  out.innerHTML = sanitize(dirty);\n}\n\nrender(\"Comments render here — try some <b>bold</b>.\");\n"
      }
    },

    {
      id: "sec-u3-p",
      title: "Project: The safe comment renderer",
      kind: "web", chip: "SEC", xp: 50, mins: 35, project: true,
      brief: "Time to put all three defenses together in the thing every app ships: a **comment renderer**. Yours turns lightweight markup into real formatting while staying completely inert against injection.\n\nBuild `render(text)` so it:\n\n- renders `*bold*` as a real `<strong>` and `_italic_` as a real `<em>`\n- auto-links bare `http`/`https` URLs into real `<a>` elements carrying `rel=\"noopener noreferrer\"` and `target=\"_blank\"`\n- shows **everything else as literal text** — four different XSS payloads must appear as visible characters, never execute\n- does **not** auto-link a `javascript:` URL\n\nThe one hard rule that makes it safe by construction: **`render` may not contain `innerHTML` anywhere.** You build the output with `createElement` and `textContent`, so a payload can never be parsed as HTML. The checks grep `render.toString()` for `innerHTML` and fail if they find it (the same technique `dom-u7-3` uses on `startAnimation`).\n\nThe starter is the tempting one-liner — `out.innerHTML = text` — and it is an XSS hole that ignores your formatting *and* fires every payload. Rebuild it node by node.\n\nHonest line: even done perfectly, this is a teaching exercise. Real formatting-plus-safety is a solved problem — **ship a maintained library like DOMPurify** (and a real Markdown renderer) rather than your own.",
      steps: [
        { text: "Legit formatting becomes real elements: `*bold*` → `<strong>`, `_italic_` → `<em>`.",
          test: "render('This is *bold* and _italic_ text');\nT.expect(T.count('#out strong') === 1, 'Wrap *bold* in a real <strong> element.');\nT.eq(T.text('#out strong'), 'bold', 'The <strong> holds just the word, without the asterisks.');\nT.expect(T.count('#out em') === 1, 'Wrap _italic_ in a real <em> element.');\nT.eq(T.text('#out em'), 'italic', 'The <em> holds just the word, without the underscores.');" },
        { text: "All four payloads render as literal visible text — nothing fires.",
          test: "var payloads = [\n  '<img src=x onerror=\"window.__fired=(window.__fired||0)+1\">',\n  '<svg/onload=\"window.__fired=(window.__fired||0)+1\">',\n  '<iframe src=\"javascript:window.__fired=1\"></iframe>',\n  '<body onload=\"window.__fired=(window.__fired||0)+1\">'\n];\nfor (var i = 0; i < payloads.length; i++) {\n  window.__fired = undefined;\n  render(payloads[i]);\n  await T.sleep(120);\n  T.expect(window.__fired === undefined, 'Payload ' + (i + 1) + ' executed — build text with textContent/createElement, never innerHTML.');\n  T.expect(T.count('#out img') === 0, 'Payload ' + (i + 1) + ' created a real <img> — it must show as literal text instead.');\n  T.expect((T.text('#out') || '').indexOf('<') !== -1, 'Payload ' + (i + 1) + ' should be visible as literal text, angle brackets and all.');\n}" },
        { text: "A bare http/https URL becomes a real link with the safe rel and target.",
          test: "render('see https://example.com/path here');\nvar a = T.$('#out a');\nT.expect(a, 'A bare http/https URL should become a real <a> link.');\nT.eq(T.attr('#out a', 'href'), 'https://example.com/path', 'The href is the URL itself.');\nT.eq(T.attr('#out a', 'rel'), 'noopener noreferrer', 'Auto-linked URLs must carry rel of noopener noreferrer.');\nT.eq(T.attr('#out a', 'target'), '_blank', 'And target of _blank.');\nT.eq(T.text('#out a'), 'https://example.com/path', 'The visible link text is the URL.');" },
        { text: "A `javascript:` URL is NOT auto-linked — it stays literal text.",
          test: "render('visit javascript:alert(1) now');\nT.expect(T.count('#out a') === 0, 'A javascript: URL must NOT become a link — only http/https auto-link.');\nT.expect((T.text('#out') || '').indexOf('javascript:alert(1)') !== -1, 'It should appear as plain literal text.');" },
        { text: "Grade the technique: `render` never touches `innerHTML`.",
          test: "T.expect(typeof render === 'function', 'render must be a function.');\nT.expect(render.toString().indexOf('innerHTML') === -1, 'render must not contain innerHTML anywhere — build nodes with createElement + textContent.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Comment renderer</h1>\n  <div id=\"out\"></div>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\n#out {\n  margin-top: 12px;\n  padding: 12px;\n  border: 2px dashed #cbd5e1;\n  border-radius: 10px;\n  min-height: 24px;\n  line-height: 1.5;\n}\n#out a {\n  color: #4f46e5;\n}\n" },
        { name: "script.js", content: "const out = document.querySelector(\"#out\");\n\n// render(text): show a comment.\n//   *bold*   -> <strong>      _italic_ -> <em>\n//   bare http/https URL -> <a href rel=\"noopener noreferrer\" target=\"_blank\">\n//   EVERYTHING else      -> literal text\n//   a javascript: URL    -> NOT a link\n//\n// The one rule: no innerHTML. Build nodes with createElement + textContent,\n// so a payload can never be parsed as HTML. Rebuild the starter below.\nfunction render(text) {\n  out.innerHTML = String(text); // TODO: replace this — it's the whole XSS hole\n}\n\nrender(\"Welcome! Try *bold*, _italic_ and https://example.com\");\n" }
      ],
      hints: [
        "Clear safely with `out.textContent = \"\";` then append nodes into it — never assign a string to innerHTML.",
        "Scan the text for the earliest match among three patterns — a URL `/https?:\\/\\/[^\\s]+/`, `/\\*([^*]+)\\*/` and `/_([^_]+)_/` — emit a text node for the run before it, then the matching element, and continue on the rest.",
        "For a URL: `const a = document.createElement(\"a\"); a.setAttribute(\"href\", url); a.setAttribute(\"rel\", \"noopener noreferrer\"); a.setAttribute(\"target\", \"_blank\"); a.textContent = url;` — because the regex only matches http/https, `javascript:` never reaches this branch."
      ],
      solution: {
        "script.js": "const out = document.querySelector(\"#out\");\n\nfunction render(text) {\n  out.textContent = \"\";\n  appendFormatted(out, String(text));\n}\n\nfunction appendFormatted(parent, text) {\n  const patterns = [\n    { re: /https?:\\/\\/[^\\s]+/, kind: \"url\" },\n    { re: /\\*([^*]+)\\*/, kind: \"bold\" },\n    { re: /_([^_]+)_/, kind: \"italic\" }\n  ];\n  let rest = text;\n  while (rest.length) {\n    let best = null;\n    patterns.forEach(function (p) {\n      const m = p.re.exec(rest);\n      if (m && (best === null || m.index < best.index)) best = { m: m, kind: p.kind };\n    });\n    if (!best) {\n      parent.appendChild(document.createTextNode(rest));\n      return;\n    }\n    if (best.m.index > 0) parent.appendChild(document.createTextNode(rest.slice(0, best.m.index)));\n    if (best.kind === \"url\") {\n      const a = document.createElement(\"a\");\n      a.setAttribute(\"href\", best.m[0]);\n      a.setAttribute(\"rel\", \"noopener noreferrer\");\n      a.setAttribute(\"target\", \"_blank\");\n      a.textContent = best.m[0];\n      parent.appendChild(a);\n    } else if (best.kind === \"bold\") {\n      const strong = document.createElement(\"strong\");\n      strong.textContent = best.m[1];\n      parent.appendChild(strong);\n    } else {\n      const em = document.createElement(\"em\");\n      em.textContent = best.m[1];\n      parent.appendChild(em);\n    }\n    rest = rest.slice(best.m.index + best.m[0].length);\n  }\n}\n\nrender(\"Welcome! Try *bold*, _italic_ and https://example.com\");\n"
      }
    },

    {
      id: "sec-quiz-3",
      title: "Unit 3 quiz: Escaping & sanitizing",
      kind: "quiz", xp: 10,
      brief: "Six questions on escaping, context and allow-list sanitizing. 80% to pass.",
      questions: [
        { q: "You HTML-escape user text by replacing `&`, `<`, `>`, `\"` and `'` with entities. Which character must you replace FIRST?",
          choices: [
            "& — the ampersand",
            "< — the less-than sign, because that is how every tag opens",
            "The double quote, so that attribute values always stay intact",
            "Whichever of the five characters happens to appear first in the input"
          ],
          answer: 0,
          explain: "If you escape `<` first, the `&` inside the `&lt;` you just produced gets escaped a second time into `&amp;lt;` — a double-encoding bug that shows readers literal `&lt;`. Encode `&` first, then the angle brackets and quote characters, and every character is encoded exactly once." },
        { q: "A template drops user text into an UNQUOTED HTML attribute after running it through an HTML escaper. The value below still adds an event handler. Why did HTML-escaping not stop it?",
          code: "user value:  x onmouseover=alert(1)",
          lang: "text",
          choices: [
            "The HTML escaper has a bug and should also encode parentheses",
            "The browser decoded the entities again before it parsed the attribute",
            "The value contains none of the characters an HTML escaper touches, so it passes through unchanged and the space begins a new attribute",
            "setAttribute cannot be trusted and must never be used for user data"
          ],
          answer: 2,
          explain: "An HTML escaper only encodes the five HTML-significant characters, and `x onmouseover=alert(1)` has none of them, so it is a no-op here. In an unquoted attribute the space then starts a second attribute — the fix is context-dependent: quote the attribute and use attribute-context encoding, because escaping depends on where the value lands." },
        { q: "A sanitizer removes `<script>` tags and lets everything else through. Why is this deny-list design wrong?",
          choices: [
            "Removing tags from long comments is too slow to do on every render",
            "A deny-list only blocks what its author already thought of, so `<img onerror>`, `<svg onload>` and many more still get through",
            "A `<script>` inserted through innerHTML runs anyway, so removing it achieves nothing at all",
            "It should also strip `<style>` and `<link>` tags as well, and once it blocks those three the deny-list is finally complete and safe for production"
          ],
          answer: 1,
          explain: "An allow-list inverts the trust: you name the handful of tags and attributes you permit and drop everything else, so a vector you never imagined is refused by default. A deny-list is a losing game of whack-a-mole against every current and future HTML-injection trick." },
        { q: "Your renderer must show `*bold*` as real bold while staying safe against injection. Which approach is safe by construction?",
          choices: [
            "Concatenate `<strong>` + word + `</strong>` into a string and assign the whole thing to the element's innerHTML",
            "Assign the formatted `<strong>` string to the element's outerHTML instead",
            "Pass the formatted `<strong>` string to document.write",
            "Create a `<strong>` with createElement and set its textContent to the word"
          ],
          answer: 3,
          explain: "textContent never parses its input as HTML, so even if the word contained `<img onerror>` it becomes literal characters rather than an element. Building the string and handing it to innerHTML, outerHTML or document.write re-opens the exact hole you were trying to close." },
        { q: "You wrote a 40-line allow-list sanitizer and it passes every test you wrote. What should you actually ship to production?",
          choices: [
            "A maintained, audited library such as DOMPurify",
            "Your own sanitizer, since it passed every test that you wrote for it",
            "No sanitizer at all, because modern browsers already block XSS automatically",
            "A deny-list that additionally blocks the specific payloads your own tests happened to miss"
          ],
          answer: 0,
          explain: "A hand-rolled sanitizer only defends against the attacks you already imagined, while libraries like DOMPurify have absorbed years of mutation-XSS, namespace-confusion and parser-quirk reports. Writing your own is a great way to understand the problem and a poor way to ship the solution." },
        { q: "Which single DOM property writes user text into the page WITHOUT ever parsing it as HTML?",
          choices: [
            "innerHTML",
            "outerHTML",
            "textContent",
            "insertAdjacentHTML"
          ],
          answer: 2,
          explain: "textContent sets the node's text directly, so `<img onerror=alert(1)>` lands on the page as literal characters. innerHTML, outerHTML and insertAdjacentHTML all parse their argument as HTML and will happily run an injected event handler." }
      ]
    }
  ]
});
