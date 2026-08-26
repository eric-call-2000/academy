/* Learn HTML — Unit 6: Media & Embeds */
window.CODELAB.addUnit("html", {
  id: "html-u6",
  title: "Media & Embeds",
  icon: "🎬",
  blurb: "Video, audio, embedded pages, disclosure widgets and special characters.",
  cheat: [
    { h: "Video", lang: "html", code: "<video src=\"clip.mp4\" controls width=\"400\" poster=\"cover.jpg\">\n  Sorry, your browser doesn't play video.\n</video>", note: "No `controls` = no play button. The inner text is the fallback." },
    { h: "Audio", lang: "html", code: "<audio src=\"song.mp3\" controls loop></audio>" },
    { h: "Iframes", lang: "html", code: "<iframe src=\"https://maps.example.com/embed\"\n        width=\"400\" height=\"300\"\n        title=\"Map of our office\"></iframe>", note: "A page inside your page. ALWAYS add title=\"…\" for screen readers." },
    { h: "Details & summary", lang: "html", code: "<details>\n  <summary>What's your refund policy?</summary>\n  <p>Full refunds within 30 days.</p>\n</details>", note: "A native accordion — zero JavaScript." },
    { h: "Entities", lang: "html", code: "&lt;   →   <\n&gt;   →   >\n&amp;  →   &\n&copy; →   ©", note: "How you WRITE characters that HTML would otherwise interpret as code." }
  ],
  lessons: [

    {
      id: "html-u6-1",
      title: "Video & audio",
      kind: "web", chip: "HTML", xp: 15,
      brief: "HTML plays media natively:\n\n- `<video src=\"…\">` — needs the `controls` attribute or users get **no play button**\n- `width` keeps the layout stable; `poster` shows a cover image\n- `<audio src=\"…\" controls>` — same idea, sound only\n- Text between the tags is the **fallback** for ancient browsers\n\n(The sandbox uses placeholder file names — the structure is what's being graded, exactly as it would ship.)",
      steps: [
        { text: "Add a `<video>` with a `src`, `controls`, and `width=\"400\"`.",
          test: "var v = T.$('video');\nT.expect(v, 'Add a <video> element.');\nT.expect((v.getAttribute('src') || '').length > 3, 'Give it a src (e.g. trailer.mp4).');\nT.expect(v.hasAttribute('controls'), 'Add the controls attribute — without it there\\'s no play button.');\nT.expect(v.getAttribute('width') === '400', 'Set width=\"400\".');" },
        { text: "Put fallback text inside the video element.",
          test: "var v = T.$('video');\nT.expect(v && (v.textContent || '').trim().length >= 5, 'Write fallback text between <video> and </video>.');" },
        { text: "Add an `<audio>` element with a `src` and `controls`.",
          test: "var a = T.$('audio');\nT.expect(a, 'Add an <audio> element.');\nT.expect((a.getAttribute('src') || '').length > 3 && a.hasAttribute('controls'), 'Give it a src and the controls attribute.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Mission control — media room</h1>\n  <!-- video: src, controls, width 400, fallback text -->\n\n  <!-- audio: src, controls -->\n\n</body>\n</html>\n" }
      ],
      hints: [
        "`<video src=\"launch.mp4\" controls width=\"400\">Your browser can't play this video.</video>`",
        "`controls` stands alone — no =\"true\" needed.",
        "`<audio src=\"theme.mp3\" controls></audio>`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Mission control — media room</h1>\n  <video src=\"launch.mp4\" controls width=\"400\">\n    Your browser can't play this video.\n  </video>\n\n  <audio src=\"theme.mp3\" controls></audio>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u6-2",
      title: "Iframes: a page in a page",
      kind: "web", chip: "HTML", xp: 15,
      brief: "An `<iframe>` embeds **another page** inside yours — maps, videos, payment widgets all work this way (this very lesson's preview is an iframe!).\n\nThe essentials:\n\n- `src` — what to embed\n- `width` / `height` — its box\n- `title` — a description for screen readers. **Required** for accessibility, and often forgotten.",
      steps: [
        { text: "Add an `<iframe>` with `src=\"about:blank\"`, `width=\"400\"` and `height=\"250\"`.",
          test: "var f = T.$('iframe');\nT.expect(f, 'Add an <iframe>.');\nT.expect(f.getAttribute('src') === 'about:blank', 'Use src=\"about:blank\" (a safe placeholder page).');\nT.expect(f.getAttribute('width') === '400' && f.getAttribute('height') === '250', 'Size it: width=\"400\" height=\"250\".');" },
        { text: "Give it a descriptive `title` attribute (at least 8 characters).",
          test: "var f = T.$('iframe');\nT.expect(f && (f.getAttribute('title') || '').length >= 8, 'Add title=\"Embedded office map\" (or similar) — screen readers announce iframes by their title.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Visit us</h1>\n  <p>The map below shows our office.</p>\n  <!-- iframe: src=\"about:blank\", width 400, height 250, title -->\n\n</body>\n</html>\n" }
      ],
      hints: [
        "`<iframe src=\"about:blank\" width=\"400\" height=\"250\" title=\"Embedded office map\"></iframe>`",
        "iframe needs BOTH tags even when empty: `<iframe …></iframe>`."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Visit us</h1>\n  <p>The map below shows our office.</p>\n  <iframe src=\"about:blank\" width=\"400\" height=\"250\" title=\"Embedded office map\"></iframe>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u6-3",
      title: "Details & summary: free accordions",
      kind: "web", chip: "HTML", xp: 15,
      brief: "The FAQ accordion — click a question, the answer unfolds — is built into HTML:\n\n- `<details>` — the collapsible container\n- `<summary>` — the always-visible clickable line (must be the **first child**)\n- add the `open` attribute to start expanded\n\nZero JavaScript, keyboard-accessible out of the box. Try clicking them in the preview!",
      steps: [
        { text: "Turn both Q&As into `<details>` blocks with the question in a `<summary>`.",
          test: "var ds = T.$$('details');\nT.expect(ds.length >= 2, 'Create two <details> blocks — found ' + ds.length + '.');\nvar ok = ds.every(function (d) { return d.querySelector('summary') && d.querySelector('p'); });\nT.expect(ok, 'Each details: <summary>question</summary> then the answer <p> inside.');" },
        { text: "Make the **first** one start expanded with the `open` attribute.",
          test: "var ds = T.$$('details');\nT.expect(ds[0] && ds[0].hasAttribute('open'), 'Add the open attribute to the first <details>.');" },
        { text: "Clicking a closed summary opens it (native behavior — prove it works).",
          test: "var closed = T.$$('details').filter(function (d) { return !d.open; })[0];\nT.expect(closed, 'Keep the second details closed initially.');\nclosed.querySelector('summary').click();\nawait T.sleep(50);\nT.expect(closed.open === true, 'Clicking the summary should expand it — that\\'s the built-in magic.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>FAQ</h1>\n\n  <p><b>Do you ship worldwide?</b></p>\n  <p>Yes — everywhere with a postal service.</p>\n\n  <p><b>What's the return policy?</b></p>\n  <p>Thirty days, no questions asked.</p>\n</body>\n</html>\n" }
      ],
      hints: [
        "Pattern: `<details> <summary>Do you ship worldwide?</summary> <p>Yes — …</p> </details>`",
        "`open` is a bare attribute: `<details open>`."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>FAQ</h1>\n\n  <details open>\n    <summary>Do you ship worldwide?</summary>\n    <p>Yes — everywhere with a postal service.</p>\n  </details>\n\n  <details>\n    <summary>What's the return policy?</summary>\n    <p>Thirty days, no questions asked.</p>\n  </details>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u6-4",
      title: "Entities: writing forbidden characters",
      kind: "web", chip: "HTML", xp: 15,
      brief: "How do you *display* a `<` when HTML thinks every `<` starts a tag? With **entities** — named codes starting with `&` and ending with `;`:\n\n- `&lt;` → `<` and `&gt;` → `>`\n- `&amp;` → `&`\n- `&copy;` → © and `&quot;` → \"\n\nAny time you write about code *in* HTML (like this course does constantly!), entities are doing the work.",
      steps: [
        { text: "Make the code line literally display `<h1>` using entities.",
          test: "var c = T.$('#codeline');\nT.expect(c, 'Keep the #codeline paragraph.');\nT.expect((c.textContent || '').indexOf('<h1>') !== -1, 'It should DISPLAY <h1> — write it as &lt;h1&gt; in the source.');\nT.expect(!c.querySelector('h1'), 'There must be no ACTUAL h1 inside — the brackets have to be entities, not tags.');" },
        { text: "Fix the footer: a real © via `&copy;` and the company name **Sparks &amp; Co** using `&amp;`.",
          test: "var f = T.$('footer');\nT.expect(f, 'Keep the footer.');\nT.expect((f.textContent || '').indexOf('\\u00A9') !== -1, 'Use &copy; to render the © symbol.');\nT.expect((f.textContent || '').indexOf('Sparks & Co') !== -1, 'Write the & in Sparks & Co as &amp;.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Entity practice</h1>\n\n  <p id=\"codeline\">The biggest heading tag is: h1 (add the angle brackets!)</p>\n\n  <footer>(c) 2026 Sparks and Co</footer>\n</body>\n</html>\n" }
      ],
      hints: [
        "Angle brackets as text: `&lt;h1&gt;` renders as <h1> without creating an element.",
        "Footer: `&copy; 2026 Sparks &amp; Co`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Entity practice</h1>\n\n  <p id=\"codeline\">The biggest heading tag is: &lt;h1&gt;</p>\n\n  <footer>&copy; 2026 Sparks &amp; Co</footer>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-quiz-6",
      title: "Unit 6 quiz: Media & Embeds",
      kind: "quiz", xp: 10,
      brief: "Video, audio, iframes, accordions and entities. 80% to pass.",
      questions: [
        { q: "A `<video>` without the `controls` attribute…",
          choices: ["Shows no play/pause UI at all", "Plays automatically", "Won't load", "Shows default controls anyway"],
          answer: 0, explain: "No controls attribute = no buttons. (Autoplay is a separate attribute browsers heavily restrict.)" },
        { q: "The text between `<video>` and `</video>` is…",
          choices: ["Fallback content for browsers that can't play it", "The video's caption", "Its title", "Ignored"],
          answer: 0, explain: "Old or limited browsers render the inner content instead — a graceful degradation." },
        { q: "Why must every `<iframe>` have a `title` attribute?",
          choices: ["Screen readers announce iframes by title — without it users hear nothing useful", "It sets the tab name", "It's needed for the src to load", "It makes it responsive"],
          answer: 0, explain: "\"Embedded map of our office\" beats \"frame\" — that's what assistive tech reads out." },
        { q: "Which pair builds a no-JavaScript accordion?",
          choices: ["`<details>` + `<summary>`", "`<accordion>` + `<panel>`", "`<div>` + `<span>`", "`<section>` + `<h2>`"],
          answer: 0, explain: "details/summary: click to toggle, keyboard accessible, add `open` to start expanded." },
        { q: "How do you display a literal `<p>` as text on a page?",
          code: "The paragraph tag is ???",
          lang: "html",
          choices: ["&lt;p&gt;", "<p>", "\\<p\\>", "«p»"],
          answer: 0, explain: "&lt; and &gt; are the angle-bracket entities. A raw <p> would start an actual paragraph." },
        { q: "What does `&amp;` render as?",
          choices: ["&", "amp", "&amp;", "Nothing"],
          answer: 0, explain: "It's the entity for the ampersand itself — which is why you write &amp; inside URLs and company names." }
      ]
    }
  ]
});
