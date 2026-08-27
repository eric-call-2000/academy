/* Responsive Design & Layout — Unit 5: Fluid units & flexible media */
window.CODELAB.addUnit("resp", {
  id: "resp-u5",
  title: "Fluid units & flexible media",
  icon: "🌊",
  blurb: "Ditch frozen pixels — rem, %, vw, clamp() and flexible images make pages that stretch and shrink like water.",
  cheat: [
    { h: "Relative units", lang: "css", code: "h1    { font-size: 1.5rem; } /* 1.5 × root (16px) = 24px */\n.fill { width: 75%; }        /* 75% of the PARENT */\n.big  { font-size: 5vw; }    /* 5% of the viewport width */", note: "rem respects the user's browser font-size setting — px ignores it." },
    { h: "clamp(): fluid values", lang: "css", code: ".heroTitle {\n  font-size: clamp(1.2rem, 4vw, 2rem);\n  /*        clamp(MIN,  FLUID, MAX)   */\n}", note: "One line replaces a stack of breakpoints. min(a, b) and max(a, b) are its cousins." },
    { h: "Flexible images", lang: "css", code: "img {\n  max-width: 100%; /* never overflow the container */\n  height: auto;    /* scale, don't squish */\n}" },
    { h: "Frame + crop", lang: "css", code: ".photo {\n  width: 100%;\n  aspect-ratio: 16 / 9; /* lock the shape */\n  object-fit: cover;    /* fill by cropping, never stretching */\n}" },
    { h: "The viewport meta", lang: "html", code: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">", note: "Without it, phones fake a ~980px screen and your mobile styles never fire." },
    { h: "The centered container", lang: "css", code: ".container {\n  max-width: 900px;\n  margin: 0 auto;  /* auto side margins = centered */\n  padding: 0 16px;\n}" }
  ],
  lessons: [

    {
      id: "resp-u5-1",
      title: "rem, %, vw: relative units",
      kind: "web", chip: "CSS", xp: 15, mins: 12,
      brief: "A pixel never changes size — and that's the problem. Real users crank up their browser's font size; real screens run from tiny phones to cinema displays. **Relative units** flex:\n\n- `rem` — multiples of the **root** font-size (16px by default, so `1.5rem` = 24px). It respects the user's font-size setting — px ignores it.\n- `%` — a fraction of the **parent** element.\n- `vw` — 1% of the **viewport width**, so it scales as the window does.\n\nThis player profile is stuck in pixel-land. Free it.",
      steps: [
        { text: "Set the `h1` font-size to `1.5rem` (16 × 1.5 = 24px at the default root size).",
          test: "T.expect((T.decl('h1', 'font-size') || '').indexOf('rem') !== -1, 'Write the h1 font-size in rem units: font-size: 1.5rem in the h1 rule.');\nT.expect(T.css('h1', 'font-size') === '24px', '1.5rem should compute to 24px (1.5 × the 16px root). Set font-size: 1.5rem on h1 — currently it computes to ' + T.css('h1', 'font-size') + '.');" },
        { text: "The XP bar is 75% complete: give `.fill` a `width: 75%` — a percentage of its parent `.bar`.",
          test: "var v = (T.decl('.fill', 'width') || '').replace(/\\s+/g, '');\nT.expect(v === '75%', 'Set width: 75% on .fill — percentages measure against the PARENT (.bar).');" },
        { text: "Make `.shout` scale with the window: `font-size: 5vw` — 5% of the viewport width.",
          test: "var v = (T.decl('.shout', 'font-size') || '').replace(/\\s+/g, '');\nT.expect(v === '5vw', 'Set font-size: 5vw on .shout — 1vw is 1% of the viewport width, so the text grows as the window does.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Wizard — Level 12</h1>\n  <div class=\"bar\">\n    <div class=\"fill\"></div>\n  </div>\n  <p class=\"label\">XP: 750 / 1000</p>\n  <div class=\"shout\">NEW HIGH SCORE</div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; }\n\nh1 {\n  /* 1) font-size in rem here */\n}\n\n.bar {\n  background: #e2e8f0;\n  border-radius: 999px;\n  height: 18px;\n}\n\n.fill {\n  background: #0ea5e9;\n  border-radius: 999px;\n  height: 18px;\n  /* 2) width as a percentage here */\n}\n\n.label {\n  color: #475569;\n}\n\n.shout {\n  background: #0f172a;\n  color: white;\n  text-align: center;\n  padding: 10px;\n  border-radius: 10px;\n  margin-top: 16px;\n  /* 3) font-size in vw here */\n}\n" }
      ],
      hints: [
        "Each step is one declaration, inside the rule the numbered comment marks.",
        "rem multiplies the root size (1.5 × 16px = 24px). Percentages measure the parent; vw measures the window.",
        "`h1 { font-size: 1.5rem; }` then `.fill { width: 75%; }` then `.shout { font-size: 5vw; }`"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; }\n\nh1 {\n  font-size: 1.5rem;\n}\n\n.bar {\n  background: #e2e8f0;\n  border-radius: 999px;\n  height: 18px;\n}\n\n.fill {\n  background: #0ea5e9;\n  border-radius: 999px;\n  height: 18px;\n  width: 75%;\n}\n\n.label {\n  color: #475569;\n}\n\n.shout {\n  background: #0f172a;\n  color: white;\n  text-align: center;\n  padding: 10px;\n  border-radius: 10px;\n  margin-top: 16px;\n  font-size: 5vw;\n}\n"
      }
    },

    {
      id: "resp-u5-2",
      title: "clamp(): fluid typography",
      kind: "web", chip: "CSS", xp: 15, mins: 14,
      brief: "Media queries *jump* between sizes — **`clamp()`** glides. Hand it a minimum, a preferred (fluid) middle, and a maximum:\n\n- `font-size: clamp(1.2rem, 4vw, 2rem)` — the type tracks the window at 4vw, but never dips below 1.2rem and never blows past 2rem\n- its cousins `min(a, b)` and `max(a, b)` simply pick the smaller / larger value\n\nOne line of CSS replaces a whole stack of font-size breakpoints. This hero is frozen at desktop pixels — make it fluid, then drag the preview edge and watch it breathe.",
      example: { lang: "css", code: "/*                min    fluid  max  */\nfont-size: clamp(1.2rem, 4vw, 2rem);" },
      steps: [
        { text: "Replace the fixed `.heroTitle` font-size with `clamp(1.2rem, 4vw, 2rem)`.",
          test: "var v = (T.decl('.heroTitle', 'font-size') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('clamp(1.2rem,4vw,2rem)') !== -1, 'On .heroTitle, set font-size: clamp(1.2rem, 4vw, 2rem) — the order is clamp(min, preferred, max).');" },
        { text: "Make the breathing room fluid too: replace the `.hero` padding with `clamp(16px, 5vw, 48px)`.",
          test: "var v = (T.decl('.hero', 'padding') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('clamp(16px,5vw,48px)') !== -1, 'On .hero, set padding: clamp(16px, 5vw, 48px) — tight on phones, roomy on monitors, fluid in between.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <section class=\"hero\">\n    <h1 class=\"heroTitle\">Type that breathes</h1>\n    <p class=\"tagline\">Resize the window — no breakpoints required.</p>\n  </section>\n  <p class=\"note\">Everything above scales smoothly with the viewport.</p>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; margin: 0; }\n\n.hero {\n  background: linear-gradient(135deg, #0ea5e9, #6366f1);\n  color: white;\n  border-radius: 0 0 20px 20px;\n  padding: 48px; /* 2) replace with clamp(16px, 5vw, 48px) */\n}\n\n.heroTitle {\n  margin: 0 0 8px;\n  font-size: 32px; /* 1) replace with clamp(1.2rem, 4vw, 2rem) */\n}\n\n.tagline {\n  margin: 0;\n  opacity: 0.9;\n}\n\n.note {\n  padding: 0 16px;\n  color: #475569;\n}\n" }
      ],
      hints: [
        "clamp takes THREE values: clamp(MIN, PREFERRED, MAX). The middle one is the fluid one — use vw there.",
        "You're replacing the existing values, not adding new rules — keep everything in the .heroTitle and .hero rules.",
        "`font-size: clamp(1.2rem, 4vw, 2rem);` on .heroTitle, and `padding: clamp(16px, 5vw, 48px);` on .hero — spaces after the commas are fine."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; margin: 0; }\n\n.hero {\n  background: linear-gradient(135deg, #0ea5e9, #6366f1);\n  color: white;\n  border-radius: 0 0 20px 20px;\n  padding: clamp(16px, 5vw, 48px);\n}\n\n.heroTitle {\n  margin: 0 0 8px;\n  font-size: clamp(1.2rem, 4vw, 2rem);\n}\n\n.tagline {\n  margin: 0;\n  opacity: 0.9;\n}\n\n.note {\n  padding: 0 16px;\n  color: #475569;\n}\n"
      }
    },

    {
      id: "resp-u5-3",
      title: "Flexible images",
      kind: "web", chip: "CSS", xp: 15, mins: 12,
      brief: "Nothing screams *broken layout* like an image blasting past the edge of a phone screen. The fix is two lines every real site ships:\n\n- `max-width: 100%` — the image may shrink to fit its container, but never overflow it\n- `height: auto` — the height follows along, so it scales instead of squishing (the HTML `width`/`height` attributes would otherwise pin it)\n\nThen two power-ups: `aspect-ratio: 16 / 9` locks the frame's shape, and `object-fit: cover` fills that frame by **cropping** instead of stretching. (Our \"photo\" is a tiny built-in SVG — zero network.)",
      steps: [
        { text: "Tame the overflow: `max-width: 100%` and `height: auto` on `.photo`.",
          test: "var mw = (T.decl('.photo', 'max-width') || '').replace(/\\s+/g, '');\nT.expect(mw === '100%', 'Set max-width: 100% on .photo so it can never overflow its container.');\nvar h = (T.decl('.photo', 'height') || '').replace(/\\s+/g, '');\nT.expect(h === 'auto', 'Also set height: auto on .photo — otherwise the HTML height attribute squishes the scaled-down image.');" },
        { text: "Lock the widescreen frame: `aspect-ratio: 16 / 9` on `.photo`.",
          test: "var v = (T.decl('.photo', 'aspect-ratio') || '').replace(/\\s+/g, '');\nT.expect(v === '16/9', 'Set aspect-ratio: 16 / 9 on .photo — the box keeps that shape at any width.');" },
        { text: "Fill without squishing: `width: 100%` and `object-fit: cover` on `.photo`.",
          test: "var w = (T.decl('.photo', 'width') || '').replace(/\\s+/g, '');\nT.expect(w === '100%', 'Set width: 100% on .photo so it fills the card.');\nT.expect(T.css('.photo', 'object-fit') === 'cover', 'Set object-fit: cover on .photo — the square photo fills the 16/9 frame by cropping, never stretching.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <article class=\"card\">\n    <img class=\"photo\" width=\"800\" height=\"800\" alt=\"Sunset over the sea\" src=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800'><rect width='800' height='800' fill='%230ea5e9'/><rect y='520' width='800' height='280' fill='%230f172a'/><circle cx='560' cy='300' r='90' fill='%23fbbf24'/></svg>\">\n    <h2>Golden hour</h2>\n    <p>Shot on a potato, saved by CSS.</p>\n  </article>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  background: #f1f5f9;\n}\n\n.card {\n  background: white;\n  border-radius: 14px;\n  padding: 14px;\n  margin: 16px;\n}\n\n.photo {\n  border-radius: 10px;\n  /* 1) max-width + height */\n  /* 2) aspect-ratio */\n  /* 3) width + object-fit */\n}\n\nh2 {\n  margin: 12px 0 4px;\n}\n\np {\n  margin: 0;\n  color: #475569;\n}\n" }
      ],
      hints: [
        "All five declarations live in the one .photo rule — nothing changes in index.html.",
        "`max-width: 100%; height: auto;` is the classic flexible-image pair. Memorize it — you'll type it for the rest of your career.",
        "Finish the rule: `width: 100%; aspect-ratio: 16 / 9; object-fit: cover;` — cover crops the square photo into the widescreen frame."
      ],
      solution: {
        "styles.css": "body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  background: #f1f5f9;\n}\n\n.card {\n  background: white;\n  border-radius: 14px;\n  padding: 14px;\n  margin: 16px;\n}\n\n.photo {\n  border-radius: 10px;\n  max-width: 100%;\n  height: auto;\n  aspect-ratio: 16 / 9;\n  width: 100%;\n  object-fit: cover;\n}\n\nh2 {\n  margin: 12px 0 4px;\n}\n\np {\n  margin: 0;\n  color: #475569;\n}\n"
      }
    },

    {
      id: "resp-u5-4",
      title: "The viewport meta & container pattern",
      kind: "web", chip: "CSS", xp: 15, mins: 12,
      brief: "Two finishing moves every responsive page needs.\n\nFirst, the **viewport meta tag**. Without it, phones pretend to be ~980px wide and shrink your lovely mobile-first CSS into ant-sized desktop soup:\n\n- `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">` goes in the `<head>`\n\nSecond, the **container pattern**. Text spanning a 27-inch monitor edge-to-edge is unreadable — a centered column fixes it:\n\n- `max-width: 900px` caps the width\n- `margin: 0 auto` — auto side margins split the leftover space, centering the column\n\nStep 1 happens in **index.html**; the rest in styles.css.",
      example: { lang: "html", code: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">" },
      steps: [
        { text: "In **index.html**, add the viewport meta tag inside `<head>` (the comment marks the spot).",
          test: "T.expect(!!T.$('meta[name=viewport]'), 'Add a <meta name=\"viewport\"> tag inside <head> in index.html — see the example above.');\nvar c = T.attr('meta[name=viewport]', 'content') || '';\nT.expect(c.indexOf('width=device-width') !== -1, 'The meta tag needs content=\"width=device-width, initial-scale=1\" so phones use their REAL width.');" },
        { text: "In **styles.css**, cap `.container` at `max-width: 900px` and center it with `margin: 0 auto`.",
          test: "var mw = (T.decl('.container', 'max-width') || '').replace(/\\s+/g, '');\nT.expect(mw === '900px', 'Set max-width: 900px on .container — it fills small screens but never sprawls past 900px.');\nvar m = (T.decl('.container', 'margin') || '').replace(/\\s+/g, '').replace(/0px/g, '0');\nT.expect(m === '0auto' || m === '0auto0auto', 'Center it with margin: 0 auto on .container — the auto left/right margins split the spare space evenly.');" },
        { text: "Add side padding so text never touches the screen edge: `padding: 0 16px` on `.container`.",
          test: "T.expect(T.css('.container', 'padding-left') === '16px' && T.css('.container', 'padding-right') === '16px', 'Give .container padding: 0 16px — a 16px gutter on each side.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <!-- 1) viewport meta tag goes here -->\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"container\">\n    <h1>The Daily Pixel</h1>\n    <p>All the web-design news that fits your screen — whatever size it happens to be.</p>\n    <p>Long lines are hard to read. A centered container keeps every article at a comfortable width on big monitors, while phones still get the full screen.</p>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  background: #f1f5f9;\n}\n\n.container {\n  background: white;\n  /* 2) max-width + centering margin */\n  /* 3) side padding */\n}\n\nh1 {\n  color: #0f172a;\n}\n\np {\n  color: #475569;\n  line-height: 1.5;\n}\n" }
      ],
      hints: [
        "The meta tag is one self-closing line in <head>, right where the comment sits — name is viewport, content is width=device-width, initial-scale=1.",
        "margin: 0 auto means: 0 top/bottom, auto left/right — and auto side margins on a width-capped block center it.",
        "Steps 2 and 3 are three declarations in .container: `max-width: 900px; margin: 0 auto; padding: 0 16px;`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"container\">\n    <h1>The Daily Pixel</h1>\n    <p>All the web-design news that fits your screen — whatever size it happens to be.</p>\n    <p>Long lines are hard to read. A centered container keeps every article at a comfortable width on big monitors, while phones still get the full screen.</p>\n  </div>\n</body>\n</html>\n",
        "styles.css": "body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  background: #f1f5f9;\n}\n\n.container {\n  background: white;\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 0 16px;\n}\n\nh1 {\n  color: #0f172a;\n}\n\np {\n  color: #475569;\n  line-height: 1.5;\n}\n"
      }
    },

    {
      id: "resp-quiz-5",
      title: "Unit 5 quiz: Fluid design",
      kind: "quiz", xp: 10,
      questions: [
        { q: "With the default root font-size (16px), what does `font-size: 1.5rem` compute to?",
          choices: ["1.5px", "16px", "24px", "150px"],
          answer: 2, explain: "rem multiplies the ROOT font-size: 1.5 × 16px = 24px. Change the root (or let the user change it) and every rem value scales along." },
        { q: "Why do accessibility guides prefer rem over px for text?",
          choices: ["rem renders faster because the browser caches it", "rem tracks the browser's default font size", "px is ignored on mobile screens entirely", "rem is required for flexbox and grid to work"],
          answer: 1, explain: "Many people raise their browser's base font size so they can read comfortably. rem-sized text scales right along with that choice; px-sized text ignores the setting completely and stays stubbornly small." },
        { q: "How does this declaration behave?",
          code: "h1 {\n  font-size: clamp(1.2rem, 4vw, 2rem);\n}",
          lang: "css",
          choices: ["Always exactly 4vw, ignoring the rem values", "Picks whichever of the three values is largest", "Jumps between 1.2rem and 2rem at a 700px breakpoint", "Fluid at 4vw, fenced in by 1.2rem and 2rem"],
          answer: 3, explain: "clamp(min, preferred, max): the preferred 4vw tracks the viewport width, and the two rem values fence it in — the text never renders below 1.2rem or above 2rem, and no media query is involved." },
        { q: "What does this classic pair do?",
          code: "img {\n  max-width: 100%;\n  height: auto;\n}",
          lang: "css",
          choices: ["Lets images shrink to fit their container", "Stretches every image to fill the page", "Crops every image into a perfect square", "Doubles the image size on retina screens"],
          answer: 0, explain: "max-width: 100% stops the overflow, so the picture is never wider than its box; height: auto keeps the aspect ratio as it scales down — no squishing — by overriding the fixed HTML height attribute." },
        { q: "A square photo sits in a 16/9 frame. Which declaration fills the frame by cropping, without distortion?",
          choices: ["object-fit: fill", "object-fit: contain", "object-fit: cover", "object-fit: stretch"],
          answer: 2, explain: "cover scales the image until the box is completely full and crops the spill-over. contain letterboxes, fill distorts — and stretch doesn't exist." },
        { q: "Your media queries work on desktop, but real phones show a tiny zoomed-out desktop site. Most likely culprit?",
          choices: ["Phones ignore media queries below 480px wide", "The viewport meta tag is missing from the page", "You sized the layout in rem instead of px", "The CSS file is too large for mobile data"],
          answer: 1, explain: "Without <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">, mobile browsers lay the page out in an imaginary ~980px desktop viewport and then shrink the whole thing to fit — so your min-width queries end up judging the wrong number." }
      ]
    }
  ]
});
