/* Learn CSS — Unit 4: Display & Positioning */
window.CODELAB.addUnit("css", {
  id: "css-u4",
  title: "Display & Positioning",
  icon: "🧭",
  blurb: "Block vs inline, absolute badges, sticky headers and stacking order.",
  cheat: [
    { h: "Display values", lang: "css", code: "display: block;        /* own line, takes width */\ndisplay: inline;       /* flows in text, no width/height */\ndisplay: inline-block; /* flows BUT accepts padding/size */\ndisplay: none;         /* removed */" },
    { h: "Positioning", lang: "css", code: "position: static;    /* default flow */\nposition: relative;  /* nudge; becomes anchor for children */\nposition: absolute;  /* pinned to nearest positioned ancestor */\nposition: fixed;     /* pinned to the viewport */\nposition: sticky;    /* scrolls, then sticks (needs top) */" },
    { h: "The badge pattern", lang: "css", code: ".wrap  { position: relative; }\n.badge {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}", note: "Parent relative + child absolute = the recipe behind every corner badge, dot and tooltip." },
    { h: "Sticky header", lang: "css", code: ".topbar {\n  position: sticky;\n  top: 0;\n}", note: "sticky without a top/bottom value does nothing — that's the #1 gotcha." },
    { h: "Stacking", lang: "css", code: ".modal { z-index: 10; }\n/* higher z-index = closer to the viewer;\n   only works on positioned elements */" }
  ],
  lessons: [

    {
      id: "css-u4-1",
      title: "Block, inline & inline-block",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Every element has a **display** personality:\n\n- **block** (`div`, `p`, `h1`) — takes its own line, accepts width/height\n- **inline** (`a`, `span`, `em`) — flows within text, **ignores** width/height/vertical padding\n- **inline-block** — flows like inline, but accepts sizing like block. The classic fix for making links into buttons.\n\nThe nav links below look cramped because inline elements won't take padding properly. Upgrade them.",
      steps: [
        { text: "Make `.pill` links `display: inline-block` with `padding: 8px 16px`.",
          test: "var ps = T.$$('.pill');\nT.expect(ps.length >= 3 && ps.every(function (p) { return getComputedStyle(p).display === 'inline-block'; }), 'Set .pill { display: inline-block; }');\nT.expect(getComputedStyle(ps[0]).paddingTop === '8px' && getComputedStyle(ps[0]).paddingLeft === '16px', 'Give them padding: 8px 16px — inline-block makes it actually work.');" },
        { text: "Turn the `.divider` span into a **block** so it sits on its own line.",
          test: "T.expect(T.css('.divider', 'display') === 'block', 'Set .divider { display: block; } — a span is inline only until you say otherwise.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Trail guide</h1>\n  <nav>\n    <a class=\"pill\" href=\"#\">Easy</a>\n    <a class=\"pill\" href=\"#\">Moderate</a>\n    <a class=\"pill\" href=\"#\">Expert</a>\n  </nav>\n  <span class=\"divider\">— pick your difficulty —</span>\n  <p>Every route starts at the north gate.</p>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; }\n.pill {\n  background: #e0f2fe;\n  border-radius: 999px;\n  text-decoration: none;\n  color: #0369a1;\n}\n.divider { color: #94a3b8; font-size: 13px; }\n\n/* display upgrades here */\n\n" }
      ],
      hints: [
        "Add to the existing .pill rule (or a new one): `display: inline-block; padding: 8px 16px;`",
        "Any element can switch personality — that's the point of the display property."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; }\n.pill {\n  background: #e0f2fe;\n  border-radius: 999px;\n  text-decoration: none;\n  color: #0369a1;\n  display: inline-block;\n  padding: 8px 16px;\n}\n.divider { color: #94a3b8; font-size: 13px; }\n\n.divider {\n  display: block;\n}\n"
      }
    },

    {
      id: "css-u4-2",
      title: "Relative + absolute: the badge pattern",
      kind: "web", chip: "CSS", xp: 15,
      brief: "The most useful positioning recipe in CSS:\n\n1. Parent gets `position: relative` — it becomes the **anchor**\n2. Child gets `position: absolute` + `top`/`right`/`bottom`/`left` — it pins to that anchor\n\nCorner badges, notification dots, close buttons, image captions — all this exact pattern. Pin the sale badge to the product card.",
      steps: [
        { text: "Make `.product` the anchor: `position: relative`.",
          test: "T.expect(T.css('.product', 'position') === 'relative', 'Set .product { position: relative; } — absolute children pin to the nearest positioned ancestor.');" },
        { text: "Pin `.sale` to the top-right corner: absolute, `top: 8px`, `right: 8px`.",
          test: "var cs = getComputedStyle(T.$('.sale'));\nT.expect(cs.position === 'absolute', 'Set .sale { position: absolute; }');\nT.expect(cs.top === '8px' && cs.right === '8px', 'Pin it with top: 8px; right: 8px;');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"product\">\n    <span class=\"sale\">-30%</span>\n    <h2>Trail Runner X</h2>\n    <p>Grippy. Light. Louder colorway than necessary.</p>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; background: #f1f5f9; padding: 24px; }\n.product {\n  background: white;\n  max-width: 280px;\n  padding: 18px;\n  border-radius: 14px;\n}\n.sale {\n  background: #ef4444;\n  color: white;\n  font-weight: bold;\n  font-size: 13px;\n  padding: 4px 10px;\n  border-radius: 999px;\n}\n\n/* anchor + pin */\n\n" }
      ],
      hints: [
        "Two declarations total: parent relative, child absolute with top/right.",
        "Forget the parent's `relative` and the badge pins to the whole page — try it once to see why the anchor matters!"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; background: #f1f5f9; padding: 24px; }\n.product {\n  background: white;\n  max-width: 280px;\n  padding: 18px;\n  border-radius: 14px;\n  position: relative;\n}\n.sale {\n  background: #ef4444;\n  color: white;\n  font-weight: bold;\n  font-size: 13px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n"
      }
    },

    {
      id: "css-u4-3",
      title: "Fixed & sticky",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Two ways to defy scrolling:\n\n- `position: fixed` — pinned to the **viewport**, always visible (cookie banners, chat bubbles)\n- `position: sticky` — scrolls normally **until** it reaches your `top` offset, then sticks (section headers, toolbars)\n\nSticky's golden gotcha: without a `top` (or bottom) value it does *nothing*. Scroll the preview after you run!",
      steps: [
        { text: "Make the `.toolbar` sticky at the very top (`position: sticky; top: 0`).",
          test: "var cs = getComputedStyle(T.$('.toolbar'));\nT.expect(cs.position === 'sticky', 'Set .toolbar { position: sticky; }');\nT.expect(cs.top === '0px', 'And top: 0; — sticky without an offset never sticks.');" },
        { text: "Pin the `.chat-bubble` to the bottom-right of the **viewport**: fixed, `bottom: 16px`, `right: 16px`.",
          test: "var cs = getComputedStyle(T.$('.chat-bubble'));\nT.expect(cs.position === 'fixed', 'Set .chat-bubble { position: fixed; }');\nT.expect(cs.bottom === '16px' && cs.right === '16px', 'Pin it: bottom: 16px; right: 16px; — scroll the preview; it never moves.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"toolbar\">🧭 Expedition log</div>\n  <p>Day 1 — Base camp established. Coffee supplies: optimistic.</p>\n  <p>Day 2 — The ridge was windier than forecast. Team morale held.</p>\n  <p>Day 3 — Found the hidden lake. It was worth every switchback.</p>\n  <p>Day 4 — Rest day. Repaired boots and egos.</p>\n  <p>Day 5 — Summit push begins before dawn.</p>\n  <p>Day 6 — SUMMIT! Photos do it no justice.</p>\n  <p>Day 7 — The long walk home, grinning.</p>\n  <button class=\"chat-bubble\">💬</button>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; margin: 0; }\np { padding: 24px 16px; margin: 0; border-bottom: 1px solid #e2e8f0; }\n.toolbar {\n  background: #0f172a;\n  color: white;\n  padding: 12px 16px;\n  font-weight: bold;\n}\n.chat-bubble {\n  font-size: 22px;\n  border: none;\n  background: #0ea5e9;\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n}\n\n/* sticky toolbar + fixed bubble */\n\n" }
      ],
      hints: [
        "`position: sticky; top: 0;` — both parts, on .toolbar.",
        "`position: fixed; bottom: 16px; right: 16px;` — fixed measures from the viewport, no anchor parent needed."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; margin: 0; }\np { padding: 24px 16px; margin: 0; border-bottom: 1px solid #e2e8f0; }\n.toolbar {\n  background: #0f172a;\n  color: white;\n  padding: 12px 16px;\n  font-weight: bold;\n  position: sticky;\n  top: 0;\n}\n.chat-bubble {\n  font-size: 22px;\n  border: none;\n  background: #0ea5e9;\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n}\n"
      }
    },

    {
      id: "css-u4-4",
      title: "z-index: who's on top",
      kind: "web", chip: "CSS", xp: 15,
      brief: "When positioned elements overlap, **z-index** decides the stack: higher numbers sit closer to you.\n\nTwo rules of the game:\n\n- z-index only works on **positioned** elements (relative/absolute/fixed/sticky)\n- don't arms-race to `z-index: 999999` — pick a small, sane scale\n\nThe polaroids below overlap; put the second one on top, and the tape decoration behind both.",
      steps: [
        { text: "Stack `.photo-b` above `.photo-a`: give **b** `z-index: 2` and **a** `z-index: 1`.",
          test: "T.expect(T.css('.photo-b', 'z-index') === '2', 'Set .photo-b { z-index: 2; }');\nT.expect(T.css('.photo-a', 'z-index') === '1', 'Set .photo-a { z-index: 1; }');" },
        { text: "Send the `.tape` behind both with `z-index: 0` (it must stay positioned!).",
          test: "T.expect(T.css('.tape', 'z-index') === '0', 'Set .tape { z-index: 0; }');\nT.expect(T.css('.tape', 'position') !== 'static', 'Keep .tape positioned — z-index is ignored on static elements.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Photo wall</h1>\n  <div class=\"wall\">\n    <div class=\"tape\"></div>\n    <div class=\"photo-a\">Photo A</div>\n    <div class=\"photo-b\">Photo B</div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; }\n.wall { position: relative; height: 220px; }\n.photo-a, .photo-b {\n  position: absolute;\n  width: 140px;\n  height: 120px;\n  background: white;\n  border: 1px solid #cbd5e1;\n  box-shadow: 0 4px 10px rgba(0,0,0,0.15);\n  padding: 8px;\n}\n.photo-a { left: 20px; top: 20px; }\n.photo-b { left: 90px; top: 60px; background: #fef9c3; }\n.tape {\n  position: absolute;\n  left: 60px; top: 0;\n  width: 160px; height: 40px;\n  background: #99f6e4;\n  transform: rotate(-6deg);\n}\n\n/* stack order here */\n\n" }
      ],
      hints: [
        "Three tiny rules: photo-b → 2, photo-a → 1, tape → 0.",
        "All three are already positioned (absolute), so z-index applies directly."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; }\n.wall { position: relative; height: 220px; }\n.photo-a, .photo-b {\n  position: absolute;\n  width: 140px;\n  height: 120px;\n  background: white;\n  border: 1px solid #cbd5e1;\n  box-shadow: 0 4px 10px rgba(0,0,0,0.15);\n  padding: 8px;\n}\n.photo-a { left: 20px; top: 20px; z-index: 1; }\n.photo-b { left: 90px; top: 60px; background: #fef9c3; z-index: 2; }\n.tape {\n  position: absolute;\n  left: 60px; top: 0;\n  width: 160px; height: 40px;\n  background: #99f6e4;\n  transform: rotate(-6deg);\n  z-index: 0;\n}\n"
      }
    },

    {
      id: "css-u4-5",
      title: "Three ways to hide",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Hiding things is a real design tool — and CSS has three flavors with different behavior:\n\n- `display: none` — **gone**; takes no space\n- `visibility: hidden` — invisible but its **space stays reserved** (no layout shift)\n- `opacity: 0.4` — translucent; still visible, still clickable. Great for \"disabled\" looks.\n\nYour JavaScript course will toggle all three. Learn which is which now.",
      steps: [
        { text: "The `.spoiler` keeps its slot but goes invisible: `visibility: hidden`.",
          test: "T.expect(T.css('.spoiler', 'visibility') === 'hidden', 'Set visibility: hidden on .spoiler — note the gap it still occupies in the preview.');" },
        { text: "The `.ad` disappears entirely: `display: none`.",
          test: "T.expect(T.css('.ad', 'display') === 'none', 'Set display: none on .ad — no trace, no gap.');" },
        { text: "The `.sold-out` card fades to `opacity: 0.4`.",
          test: "T.expect(T.css('.sold-out', 'opacity') === '0.4', 'Set opacity: 0.4 on .sold-out.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Season finale reactions</h1>\n  <div class=\"box spoiler\">SPOILER: the lighthouse was a ship all along.</div>\n  <div class=\"box ad\">🔔 ADVERTISEMENT: buy foghorn insurance today!</div>\n  <div class=\"box sold-out\">Popcorn bundle — SOLD OUT</div>\n  <div class=\"box\">Comment section: chaos, as usual.</div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; }\n.box {\n  background: #e2e8f0;\n  padding: 14px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n/* three flavors of hidden */\n\n" }
      ],
      hints: [
        "Three one-liners: visibility: hidden / display: none / opacity: 0.4.",
        "Compare the preview gaps: the spoiler leaves a hole, the ad doesn't."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; }\n.box {\n  background: #e2e8f0;\n  padding: 14px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.spoiler { visibility: hidden; }\n.ad { display: none; }\n.sold-out { opacity: 0.4; }\n"
      }
    },

    {
      id: "css-quiz-4",
      title: "Unit 4 quiz: Display & Positioning",
      kind: "quiz", xp: 10,
      brief: "Personalities, anchors, stickiness and stacking. 80% to pass.",
      questions: [
        { q: "A link needs padding and a background like a button, but must stay in the text flow. Which display?",
          choices: ["inline-block", "block", "inline", "none"],
          answer: 0, explain: "inline-block = flows like text, sizes like a block. Plain inline ignores vertical padding." },
        { q: "The badge pattern is…",
          code: ".wrap  { position: ???; }\n.badge { position: absolute; top: 8px; right: 8px; }",
          lang: "css",
          choices: ["relative — the parent becomes the anchor", "absolute", "sticky", "static"],
          answer: 0, explain: "Absolute children pin to the nearest POSITIONED ancestor; relative is the cheapest way to become one." },
        { q: "You forgot the parent's `position: relative`. Where does the absolute badge go?",
          choices: ["It pins to the page/viewport instead of the card", "It disappears", "It becomes static", "Nothing changes"],
          answer: 0, explain: "It keeps climbing ancestors until it finds a positioned one — often ending up at the page corner. Classic bug." },
        { q: "`position: sticky` isn't sticking. Most common cause?",
          choices: ["No top (or bottom) offset was set", "sticky needs JavaScript", "The element is a div", "z-index is missing"],
          answer: 0, explain: "sticky requires a threshold like top: 0 — without it there's nothing to stick TO." },
        { q: "fixed vs sticky?",
          choices: ["fixed pins to the viewport always; sticky scrolls until its offset, then pins", "They're identical", "sticky pins to the viewport always", "fixed only works on images"],
          answer: 0, explain: "Chat bubbles = fixed. Section headers that catch at the top = sticky." },
        { q: "Which element wins the overlap?",
          code: ".a { position: absolute; z-index: 3; }\n.b { position: absolute; z-index: 7; }",
          lang: "css",
          choices: [".b — higher z-index is closer to the viewer", ".a — lower wins", "Whichever comes last in HTML", "They merge"],
          answer: 0, explain: "Bigger number, higher stack — but only among POSITIONED elements." },
        { q: "Hide a modal so it takes no space, versus grey-out a disabled card. Which pair?",
          choices: ["display: none + opacity: 0.4", "visibility: hidden + display: none", "opacity: 0 + z-index: -1", "Both display: none"],
          answer: 0, explain: "Gone-completely = display:none. Still-visible-but-muted = opacity. visibility:hidden is the keep-the-gap middle child." }
      ]
    },

    {
      id: "css-u4-p",
      title: "Project: Profile banner",
      kind: "web", chip: "CSS", xp: 40, project: true, mins: 30,
      brief: "Build the social-app **profile header**: a sticky action bar, a cover photo with the avatar overlapping its bottom edge, and a green online dot pinned to the avatar. Three layers of positioning working together — exactly like the real thing.",
      steps: [
        { text: "The `.actionbar` sticks to the top while you scroll (`sticky`, `top: 0`, `z-index: 10`).",
          test: "var cs = getComputedStyle(T.$('.actionbar'));\nT.expect(cs.position === 'sticky' && cs.top === '0px', 'Make .actionbar sticky with top: 0.');\nT.expect(cs.zIndex === '10', 'Give it z-index: 10 so content slides UNDER it.');" },
        { text: "`.cover` is the anchor (`position: relative`).",
          test: "T.expect(T.css('.cover', 'position') === 'relative', 'Set position: relative on .cover.');" },
        { text: "The `.avatar` hangs off the cover's bottom-left: absolute, `left: 16px`, `bottom: -32px`.",
          test: "var cs = getComputedStyle(T.$('.avatar'));\nT.expect(cs.position === 'absolute', '.avatar should be absolute (anchored to .cover).');\nT.expect(cs.left === '16px' && cs.bottom === '-32px', 'Pin it: left: 16px; bottom: -32px; — negative offsets let it overlap the edge.');" },
        { text: "The `.status-dot` pins to the avatar's corner: `.avatar` stays the anchor via its own positioning; dot gets absolute `right: 2px`, `bottom: 2px`.",
          test: "var cs = getComputedStyle(T.$('.status-dot'));\nT.expect(cs.position === 'absolute' && cs.right === '2px' && cs.bottom === '2px', 'Pin .status-dot with position: absolute; right: 2px; bottom: 2px; (its parent .avatar is already positioned).');" },
        { text: "Give `.bio` room to breathe below the overlapping avatar: `margin-top: 44px`.",
          test: "T.expect(T.css('.bio', 'margin-top') === '44px', 'Set margin-top: 44px on .bio so the avatar doesn\\'t cover the name.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"actionbar\">← Maya Chen</div>\n\n  <div class=\"cover\">\n    <div class=\"avatar\">🦊<span class=\"status-dot\"></span></div>\n  </div>\n\n  <div class=\"bio\">\n    <h1>Maya Chen</h1>\n    <p>Frontend dev · hikes on weekends · CSS positioning fan club president.</p>\n    <p>Scroll to watch the action bar stick. That's your handiwork.</p>\n    <p>More bio text… and more… and even more, purely for scrolling purposes.</p>\n    <p>Still scrolling? The bar is still there. Magic (well, sticky).</p>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; margin: 0; }\n.actionbar {\n  background: rgba(255,255,255,0.95);\n  border-bottom: 1px solid #e2e8f0;\n  padding: 12px 16px;\n  font-weight: bold;\n}\n.cover {\n  height: 120px;\n  background: #0ea5e9;\n}\n.avatar {\n  width: 64px;\n  height: 64px;\n  background: #fef3c7;\n  border: 3px solid white;\n  border-radius: 50%;\n  font-size: 34px;\n  text-align: center;\n  line-height: 64px;\n}\n.status-dot {\n  width: 14px;\n  height: 14px;\n  background: #22c55e;\n  border: 2px solid white;\n  border-radius: 50%;\n  display: inline-block;\n}\n.bio { padding: 0 16px 40px; }\n\n/* positioning: actionbar, cover, avatar, status-dot, bio spacing */\n\n" }
      ],
      hints: [
        "Layer by layer: actionbar (sticky+z) → cover (relative) → avatar (absolute, negative bottom) → dot (absolute inside avatar).",
        "The avatar is BOTH a pinned child (of .cover) and an anchor (for .status-dot) — position: absolute makes it a valid anchor automatically.",
        "Negative offsets are legal and useful: bottom: -32px hangs half the avatar below the cover."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; margin: 0; }\n.actionbar {\n  background: rgba(255,255,255,0.95);\n  border-bottom: 1px solid #e2e8f0;\n  padding: 12px 16px;\n  font-weight: bold;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.cover {\n  height: 120px;\n  background: #0ea5e9;\n  position: relative;\n}\n.avatar {\n  width: 64px;\n  height: 64px;\n  background: #fef3c7;\n  border: 3px solid white;\n  border-radius: 50%;\n  font-size: 34px;\n  text-align: center;\n  line-height: 64px;\n  position: absolute;\n  left: 16px;\n  bottom: -32px;\n}\n.status-dot {\n  width: 14px;\n  height: 14px;\n  background: #22c55e;\n  border: 2px solid white;\n  border-radius: 50%;\n  display: inline-block;\n  position: absolute;\n  right: 2px;\n  bottom: 2px;\n}\n.bio {\n  padding: 0 16px 40px;\n  margin-top: 44px;\n}\n"
      }
    }
  ]
});
