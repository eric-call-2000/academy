/* Learn CSS — Unit 7: Final Projects */
window.CODELAB.addUnit("css", {
  id: "css-u7",
  title: "Final Projects",
  icon: "🏆",
  blurb: "Two portfolio pieces that pull the whole course together.",
  cheat: [
    { h: "Your CSS toolkit", lang: "css", code: "/* selectors, cascade, specificity        (U1) */\n/* typography: family, weight, rhythm     (U2) */\n/* box model: padding, border, margin     (U3) */\n/* display & positioning, z-index         (U4) */\n/* colors, gradients, shadows             (U5) */\n/* transitions, transforms, keyframes     (U6) */" },
    { h: "A polished card, from memory", lang: "css", code: ".card {\n  background: white;\n  padding: 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 25px rgba(0,0,0,0.12);\n  transition: all 0.25s ease;\n}\n.card:hover { transform: translateY(-4px); }" }
  ],
  lessons: [

    {
      id: "css-project",
      title: "Project: Profile card",
      kind: "web", chip: "CSS", xp: 40, project: true, mins: 30,
      brief: "Style a **profile card** — the little component you see on every social app. The HTML is done; the design is on you.\n\nFollow the checkpoints, but feel free to add your own flair afterwards (the checks won't mind extra style).",
      steps: [
        { text: "Page background: `#e2e8f0`.",
          test: "T.expect(T.css('body', 'background-color') === 'rgb(226, 232, 240)', 'Set body background-color: #e2e8f0.');" },
        { text: "Make `.card` a white card: white background, `border-radius` of at least 8px, and at least 16px padding.",
          test: "T.expect(T.css('.card', 'background-color') === 'rgb(255, 255, 255)', 'Give .card a white background.');\nT.expect(parseInt(T.css('.card', 'border-top-left-radius')) >= 8, 'Round .card corners at least 8px.');\nT.expect(parseInt(T.css('.card', 'padding-top')) >= 16, 'Give .card at least 16px padding.');" },
        { text: "Make the `.avatar` image a **circle** (`border-radius: 50%`).",
          test: "T.expect(T.css('.avatar', 'border-top-left-radius') === '50%', 'Set .avatar { border-radius: 50%; }');" },
        { text: "Style `.role` in gray `#64748b` and center-align everything in the card (`text-align: center`).",
          test: "T.expect(T.css('.role', 'color') === 'rgb(100, 116, 139)', 'Color .role with #64748b.');\nT.expect(T.css('.card', 'text-align') === 'center', 'Set text-align: center on .card.');" },
        { text: "Turn each `.tag` into a pill: background `#e0f2fe` and `border-radius: 999px`.",
          test: "var tags = T.$$('.tag');\nT.expect(tags.length >= 2, 'Keep the .tag spans in the HTML.');\nvar ok = tags.every(function (t) { var cs = getComputedStyle(t); return cs.backgroundColor === 'rgb(224, 242, 254)' && cs.borderTopLeftRadius === '999px'; });\nT.expect(ok, 'Every .tag needs background #e0f2fe and border-radius 999px.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"card\">\n    <img class=\"avatar\" src=\"https://picsum.photos/96\" alt=\"Profile photo\" width=\"96\" height=\"96\">\n    <h1 class=\"name\">Sam Rivera</h1>\n    <p class=\"role\">Full-Stack Developer</p>\n    <p>\n      <span class=\"tag\">JavaScript</span>\n      <span class=\"tag\">CSS</span>\n      <span class=\"tag\">APIs</span>\n    </p>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* Design the profile card */\nbody {\n  font-family: Arial, sans-serif;\n}\n\n.card {\n\n}\n\n.avatar {\n\n}\n\n.role {\n\n}\n\n.tag {\n  padding: 4px 12px;\n}\n" }
      ],
      hints: [
        "Work top-down: body → .card → .avatar → .role → .tag.",
        "Pills need horizontal padding to look right — the starter already gives .tag some.",
        "Add `max-width: 320px; margin: 40px auto;` to .card for a bonus centered layout (not graded)."
      ],
      solution: {
        "styles.css": "/* Design the profile card */\nbody {\n  font-family: Arial, sans-serif;\n  background-color: #e2e8f0;\n}\n\n.card {\n  background-color: white;\n  border-radius: 16px;\n  padding: 24px;\n  text-align: center;\n  max-width: 320px;\n  margin: 40px auto;\n}\n\n.avatar {\n  border-radius: 50%;\n}\n\n.role {\n  color: #64748b;\n}\n\n.tag {\n  padding: 4px 12px;\n  background-color: #e0f2fe;\n  border-radius: 999px;\n}\n"
      }
    },

    {
      id: "css-u7-2",
      title: "Portfolio project: Startup landing page",
      kind: "web", chip: "CSS", xp: 60, project: true, mins: 50,
      brief: "The graduation build: style a complete **startup landing page** from bare HTML — sticky nav, gradient hero with a hovering CTA, floating feature cards, a pulsing beta badge, and typographic polish. 🎓\n\nEverything from Units 1-6, one page, your design. When the checks pass, screenshot it — this belongs in your portfolio.",
      steps: [
        { text: "Global type: body font `'Poppins', Arial, sans-serif` (link is in the head), `margin: 0`, background `#f8fafc`.",
          test: "var f = (T.css('body', 'font-family') || '').toLowerCase();\nT.expect(f.indexOf('poppins') !== -1, 'Set body font-family to Poppins with fallbacks.');\nT.expect(T.css('body', 'margin-top') === '0px', 'Zero out the body margin.');\nT.expect(T.css('body', 'background-color') === 'rgb(248, 250, 252)', 'Body background: #f8fafc.');" },
        { text: "The `.nav` is sticky (`top: 0`, `z-index: 20`) with a white background.",
          test: "var cs = getComputedStyle(T.$('.nav'));\nT.expect(cs.position === 'sticky' && cs.top === '0px', '.nav: position sticky, top 0.');\nT.expect(cs.zIndex === '20', 'z-index: 20 keeps it above the cards.');\nT.expect(cs.backgroundColor === 'rgb(255, 255, 255)', 'Give it a white background so content doesn\\'t show through.');" },
        { text: "Nav links: no underline, uppercase, and a `.nav a:hover` rule that changes color.",
          test: "var links = T.$$('.nav a');\nT.expect(links.every(function (l) { return getComputedStyle(l).textDecorationLine === 'none'; }), 'Strip link underlines in the nav.');\nT.expect(links.every(function (l) { return getComputedStyle(l).textTransform === 'uppercase'; }), 'Uppercase them via CSS.');\nT.expect(!!T.ruleFor('.nav a:hover'), 'Add a .nav a:hover rule (any color change).');" },
        { text: "The `.hero`: a `135deg` gradient `#0ea5e9 → #6366f1`, white text, centered, `padding: 80px 24px`.",
          test: "var v = (T.css('.hero', 'background-image') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('linear-gradient(135deg') !== -1 && v.indexOf('rgb(14,165,233)') !== -1 && v.indexOf('rgb(99,102,241)') !== -1, '.hero background: linear-gradient(135deg, #0ea5e9, #6366f1).');\nvar cs = getComputedStyle(T.$('.hero'));\nT.expect(cs.color === 'rgb(255, 255, 255)' && cs.textAlign === 'center', 'White, centered text.');\nT.expect(cs.paddingTop === '80px' && cs.paddingLeft === '24px', 'padding: 80px 24px.');" },
        { text: "The `.cta` button: pill (999px), `padding: 14px 28px`, transition on the base, and a `:hover` lift `translateY(-3px)`.",
          test: "var cs = getComputedStyle(T.$('.cta'));\nT.expect(cs.borderTopLeftRadius === '999px' && cs.paddingTop === '14px' && cs.paddingLeft === '28px', '.cta: border-radius 999px, padding 14px 28px.');\nT.expect(cs.transitionDuration !== '0s', 'Give .cta a transition (e.g. all 0.25s ease).');\nvar st = T.ruleFor('.cta:hover');\nT.expect(st && ((st.getPropertyValue('transform') || '').replace(/\\s+/g, '').toLowerCase()).indexOf('translatey(-3px)') !== -1, '.cta:hover { transform: translateY(-3px); }');" },
        { text: "Feature cards (`.feature`): white, `18px` padding, `16px` radius, soft shadow, transition, and a hover lift with a deeper shadow.",
          test: "var cards = T.$$('.feature');\nT.expect(cards.length >= 3, 'Keep the three .feature cards.');\nvar ok = cards.every(function (c) { var cs = getComputedStyle(c); return cs.backgroundColor === 'rgb(255, 255, 255)' && cs.paddingTop === '18px' && cs.borderTopLeftRadius === '16px' && cs.boxShadow !== 'none' && cs.transitionDuration !== '0s'; });\nT.expect(ok, 'Every .feature: white bg, 18px padding, 16px radius, a box-shadow, and a transition.');\nvar st = T.ruleFor('.feature:hover');\nT.expect(st && (st.getPropertyValue('transform') || '').length > 0 && (st.getPropertyValue('box-shadow') || '').length > 0, '.feature:hover should lift (transform) AND deepen the shadow.');" },
        { text: "The `.beta` badge pulses: `@keyframes pulse` (midpoint `scale(1.15)` or more) running 2s ease-in-out infinite.",
          test: "var kf = T.rules().filter(function (r) { return r.type === 7 && (r.name || '').toLowerCase() === 'pulse'; })[0];\nT.expect(kf, 'Define @keyframes pulse.');\nvar m = ((kf.cssText || '').replace(/\\s+/g, '').match(/scale\\((1\\.\\d+)\\)/) || [])[1];\nT.expect(m && parseFloat(m) >= 1.15, 'Its midpoint should scale to at least 1.15.');\nT.expect(T.css('.beta', 'animation-name') === 'pulse' && T.css('.beta', 'animation-iteration-count') === 'infinite', 'Attach it to .beta, infinite.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link href=\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap\" rel=\"stylesheet\">\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <nav class=\"nav\">\n    <span class=\"logo\">⚡ boltbase</span>\n    <span>\n      <a href=\"#\">features</a>\n      <a href=\"#\">pricing</a>\n      <a href=\"#\">docs</a>\n    </span>\n  </nav>\n\n  <header class=\"hero\">\n    <span class=\"beta\">BETA</span>\n    <h1>Deploy in a heartbeat</h1>\n    <p>Push code. Get a URL. That's the whole manual.</p>\n    <button class=\"cta\">Start free →</button>\n  </header>\n\n  <section class=\"features\">\n    <div class=\"feature\">\n      <h2>⚡ Instant</h2>\n      <p>Cold starts measured in milliseconds.</p>\n    </div>\n    <div class=\"feature\">\n      <h2>🔒 Secure</h2>\n      <p>Certificates managed for you, forever.</p>\n    </div>\n    <div class=\"feature\">\n      <h2>📈 Scalable</h2>\n      <p>From weekend hack to launch day.</p>\n    </div>\n  </section>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* Your landing page. Suggested order:\n   body type → .nav (sticky) → nav links → .hero (gradient)\n   → .cta (pill + hover) → .feature cards → .beta pulse  */\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n  padding: 14px 20px;\n}\n.nav a { margin-left: 14px; color: #334155; font-size: 13px; }\n.logo { font-weight: bold; }\n\n.hero h1 { font-size: 34px; margin: 12px 0 6px; }\n.hero p { margin: 0 0 22px; opacity: 0.9; }\n.cta { border: none; background: white; color: #0f172a; font-weight: bold; font-size: 16px; }\n.beta {\n  display: inline-block;\n  background: #fef3c7;\n  color: #92400e;\n  font-size: 11px;\n  font-weight: bold;\n  letter-spacing: 2px;\n  padding: 4px 12px;\n  border-radius: 999px;\n}\n\n.features { padding: 24px 16px; }\n.feature { margin-bottom: 14px; }\n.feature h2 { margin: 0 0 6px; font-size: 17px; }\n.feature p { margin: 0; color: #64748b; }\n" }
      ],
      hints: [
        "Take the checkpoints in order — each one is a single rule or two from a unit you've finished.",
        "Sticky nav: `position: sticky; top: 0; z-index: 20; background: white;`",
        "The card hover chord from U6: base transition + shadow, hover transform + deeper shadow.",
        "Pulse: three keyframe stops (1 → 1.15+ → 1) and `animation: pulse 2s ease-in-out infinite;`"
      ],
      solution: {
        "styles.css": "body {\n  font-family: 'Poppins', Arial, sans-serif;\n  margin: 0;\n  background-color: #f8fafc;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n  padding: 14px 20px;\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  background-color: white;\n}\n.nav a {\n  margin-left: 14px;\n  color: #334155;\n  font-size: 13px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n.nav a:hover { color: #0ea5e9; }\n.logo { font-weight: bold; }\n\n.hero {\n  background: linear-gradient(135deg, #0ea5e9, #6366f1);\n  color: white;\n  text-align: center;\n  padding: 80px 24px;\n}\n.hero h1 { font-size: 34px; margin: 12px 0 6px; }\n.hero p { margin: 0 0 22px; opacity: 0.9; }\n\n.cta {\n  border: none;\n  background: white;\n  color: #0f172a;\n  font-weight: bold;\n  font-size: 16px;\n  border-radius: 999px;\n  padding: 14px 28px;\n  transition: all 0.25s ease;\n}\n.cta:hover { transform: translateY(-3px); }\n\n.beta {\n  display: inline-block;\n  background: #fef3c7;\n  color: #92400e;\n  font-size: 11px;\n  font-weight: bold;\n  letter-spacing: 2px;\n  padding: 4px 12px;\n  border-radius: 999px;\n  animation: pulse 2s ease-in-out infinite;\n}\n\n.features { padding: 24px 16px; }\n.feature {\n  margin-bottom: 14px;\n  background-color: white;\n  padding: 18px;\n  border-radius: 16px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n  transition: all 0.25s ease;\n}\n.feature:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.15);\n}\n.feature h2 { margin: 0 0 6px; font-size: 17px; }\n.feature p { margin: 0; color: #64748b; }\n\n@keyframes pulse {\n  0%   { transform: scale(1); }\n  50%  { transform: scale(1.2); }\n  100% { transform: scale(1); }\n}\n"
      }
    }
  ]
});
