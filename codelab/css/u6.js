/* Learn CSS — Unit 6: Transitions, Transforms & Animations */
window.CODELAB.addUnit("css", {
  id: "css-u6",
  title: "Motion: Transitions & Animations",
  icon: "🎞️",
  blurb: "Transforms, smooth transitions, hover states and keyframe animations.",
  cheat: [
    { h: "Transforms", lang: "css", code: "transform: rotate(-6deg);\ntransform: scale(1.1);\ntransform: translateY(-4px);\ntransform: rotate(3deg) scale(1.05);  /* combine in one line */" },
    { h: "Transitions", lang: "css", code: ".btn {\n  transition: all 0.3s ease;\n}\n/* now ANY change (hover, class toggle) animates smoothly */" },
    { h: "Hover states", lang: "css", code: ".btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0,0,0,0.2);\n}" },
    { h: "Keyframes", lang: "css", code: "@keyframes pulse {\n  0%   { transform: scale(1); }\n  50%  { transform: scale(1.08); }\n  100% { transform: scale(1); }\n}\n\n.badge {\n  animation: pulse 2s ease-in-out infinite;\n}", note: "animation: name duration timing iteration-count." }
  ],
  lessons: [

    {
      id: "css-u6-1",
      title: "Transforms",
      kind: "web", chip: "CSS", xp: 15,
      brief: "`transform` moves, rotates and scales elements **without disturbing the layout around them** — which also makes it the smoothest thing a browser can animate:\n\n- `rotate(-6deg)` — tilt\n- `scale(1.1)` — grow 10%\n- `translateY(-4px)` — nudge upward\n\nCombine several in one declaration: `transform: rotate(3deg) scale(1.05);`",
      steps: [
        { text: "Tilt the `.polaroid` by `-6deg`.",
          test: "var d = (T.decl('.polaroid', 'transform') || '').replace(/\\s+/g, '');\nT.expect(d.indexOf('rotate(-6deg)') !== -1, 'Set transform: rotate(-6deg) on .polaroid.');" },
        { text: "Grow the `.featured` sticker: `scale(1.2)`.",
          test: "var d = (T.decl('.featured', 'transform') || '').replace(/\\s+/g, '');\nT.expect(d.indexOf('scale(1.2)') !== -1, 'Set transform: scale(1.2) on .featured.');" },
        { text: "Give `.floaty` BOTH a rotation `rotate(3deg)` and a lift `translateY(-8px)` in one transform.",
          test: "var d = (T.decl('.floaty', 'transform') || '').replace(/\\s+/g, '');\nT.expect(d.indexOf('rotate(3deg)') !== -1 && d.indexOf('translatey(-8px)') !== -1 || (d.indexOf('rotate(3deg)') !== -1 && (T.decl('.floaty', 'transform') || '').toLowerCase().replace(/\\s+/g, '').indexOf('translatey(-8px)') !== -1), 'One line, two functions: transform: rotate(3deg) translateY(-8px);');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Scrapbook</h1>\n  <div class=\"polaroid\">summer '25</div>\n  <div class=\"featured\">★ featured</div>\n  <div class=\"floaty\">cloud nine</div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; padding: 30px; }\n.polaroid, .featured, .floaty {\n  display: inline-block;\n  background: white;\n  border: 1px solid #cbd5e1;\n  box-shadow: 0 6px 14px rgba(0,0,0,0.12);\n  padding: 22px 18px;\n  margin: 14px;\n  border-radius: 8px;\n}\n.featured { background: #fef9c3; }\n.floaty { background: #e0f2fe; }\n\n/* transforms here */\n\n" }
      ],
      hints: [
        "Degrees can be negative: `transform: rotate(-6deg);`",
        "Multiple functions share one property, space-separated — no commas."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; padding: 30px; }\n.polaroid, .featured, .floaty {\n  display: inline-block;\n  background: white;\n  border: 1px solid #cbd5e1;\n  box-shadow: 0 6px 14px rgba(0,0,0,0.12);\n  padding: 22px 18px;\n  margin: 14px;\n  border-radius: 8px;\n}\n.featured { background: #fef9c3; }\n.floaty { background: #e0f2fe; }\n\n.polaroid { transform: rotate(-6deg); }\n.featured { transform: scale(1.2); }\n.floaty { transform: rotate(3deg) translateY(-8px); }\n"
      }
    },

    {
      id: "css-u6-2",
      title: "Transitions: smooth by default",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Without transitions, every style change **snaps**. One property makes changes glide instead:\n\n`transition: all 0.3s ease;`\n\n- `all` — which properties animate (or name one: `background-color`)\n- `0.3s` — duration. 0.2-0.4s feels responsive; 1s+ feels sleepy\n- `ease` — the speed curve\n\nPut it on the **base** state, not the hover, so it animates in *both* directions.",
      steps: [
        { text: "Give `.tile` a transition: **all**, **0.3s**, **ease**.",
          test: "T.expect(T.css('.tile', 'transition-duration') === '0.3s', 'Set transition: all 0.3s ease; on .tile — duration reads as ' + T.css('.tile', 'transition-duration'));\nvar p = T.css('.tile', 'transition-property');\nT.expect(p === 'all', 'Transition ALL properties (transition-property is ' + p + ').');" },
        { text: "Add the hover state to glide into: `.tile:hover` scales to `1.05` and turns `#0ea5e9`.",
          test: "var st = T.ruleFor('.tile:hover');\nT.expect(st, 'Add a .tile:hover rule.');\nT.expect((st.getPropertyValue('transform') || '').indexOf('1.05') !== -1, 'In it: transform: scale(1.05);');\nT.expect((st.getPropertyValue('background-color') || st.getPropertyValue('background') || '').length > 0, 'And change the background-color (try #0ea5e9). Now hover it in the preview — smooth!');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Hover the tile</h1>\n  <div class=\"tile\">HOVER ME</div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; padding: 30px; }\n.tile {\n  width: 160px;\n  padding: 34px 0;\n  text-align: center;\n  font-weight: bold;\n  color: white;\n  background: #6366f1;\n  border-radius: 14px;\n}\n\n/* transition on the base + a :hover state */\n\n" }
      ],
      hints: [
        "Base rule gets the transition; hover rule gets the destination styles.",
        "`.tile:hover { transform: scale(1.05); background-color: #0ea5e9; }`"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; padding: 30px; }\n.tile {\n  width: 160px;\n  padding: 34px 0;\n  text-align: center;\n  font-weight: bold;\n  color: white;\n  background: #6366f1;\n  border-radius: 14px;\n  transition: all 0.3s ease;\n}\n\n.tile:hover {\n  transform: scale(1.05);\n  background-color: #0ea5e9;\n}\n"
      }
    },

    {
      id: "css-u6-3",
      title: "Designing hover states",
      kind: "web", chip: "CSS", xp: 15,
      brief: "The signature \"expensive website\" move is a three-part chord:\n\n1. base state has a `transition`\n2. `:hover` lifts the element: `transform: translateY(-4px)`\n3. `:hover` deepens the shadow, selling the lift\n\nCards that rise to meet the cursor — that's the whole trick, and now it's yours.",
      steps: [
        { text: "Base `.card` gets `transition: all 0.25s ease` and a resting shadow (`0 4px 10px rgba(0,0,0,0.1)`).",
          test: "T.expect(T.css('.card', 'transition-duration') === '0.25s', 'Set transition: all 0.25s ease on .card.');\nvar v = T.css('.card', 'box-shadow') || '';\nT.expect(v !== 'none' && v.indexOf('4px') !== -1, 'Give the base a soft resting shadow: 0 4px 10px rgba(0,0,0,0.1).');" },
        { text: "`.card:hover` lifts (`translateY(-4px)`) and deepens the shadow (blur ≥ 20px).",
          test: "var st = T.ruleFor('.card:hover');\nT.expect(st, 'Add a .card:hover rule.');\nT.expect(((st.getPropertyValue('transform') || '').replace(/\\s+/g, '').toLowerCase()).indexOf('translatey(-4px)') !== -1, 'Hover transform: translateY(-4px);');\nvar sh = st.getPropertyValue('box-shadow') || '';\nvar blur = (sh.match(/(\\d+)px/g) || []).map(function (x) { return parseInt(x); });\nT.expect(sh.length > 0 && Math.max.apply(null, blur.concat([0])) >= 20, 'Hover shadow should be deeper — blur of 20px or more.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Pricing</h1>\n  <div class=\"card\">\n    <h2>Pro</h2>\n    <p>$9/month — hover me and feel the lift.</p>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; background: #f1f5f9; padding: 30px; }\n.card {\n  background: white;\n  max-width: 280px;\n  padding: 20px;\n  border-radius: 16px;\n}\n\n/* transition + resting shadow on .card, lift + deep shadow on .card:hover */\n\n" }
      ],
      hints: [
        "Base: `transition: all 0.25s ease; box-shadow: 0 4px 10px rgba(0,0,0,0.1);`",
        "Hover: `transform: translateY(-4px); box-shadow: 0 14px 30px rgba(0,0,0,0.18);`"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; background: #f1f5f9; padding: 30px; }\n.card {\n  background: white;\n  max-width: 280px;\n  padding: 20px;\n  border-radius: 16px;\n  transition: all 0.25s ease;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n\n.card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);\n}\n"
      }
    },

    {
      id: "css-u6-4",
      title: "Keyframe animations",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Transitions need a trigger; **animations** run on their own:\n\n1. Define the choreography with `@keyframes name { … }` — style snapshots at 0%, 50%, 100%\n2. Attach it: `animation: name 1.5s linear infinite;`\n\nBuild the universal loading spinner: a ring that rotates forever.",
      example: { lang: "css", code: "@keyframes spin {\n  0%   { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}" },
      steps: [
        { text: "Define `@keyframes spin` going from `rotate(0deg)` to `rotate(360deg)`.",
          test: "var kf = T.rules().filter(function (r) { return r.type === 7 && (r.name || '').toLowerCase() === 'spin'; })[0];\nT.expect(kf, 'Add a @keyframes spin { … } block.');\nvar body = (kf.cssText || '').replace(/\\s+/g, '').toLowerCase();\nT.expect(body.indexOf('rotate(360deg)') !== -1, 'Its end state should be transform: rotate(360deg).');" },
        { text: "Attach it to `.loader`: name **spin**, duration **1.5s**, timing **linear**, repeating **infinite**.",
          test: "T.expect(T.css('.loader', 'animation-name') === 'spin', 'Set the animation name to spin on .loader.');\nT.expect(T.css('.loader', 'animation-duration') === '1.5s', 'Duration: 1.5s.');\nT.expect(T.css('.loader', 'animation-timing-function') === 'linear', 'Timing: linear — spinners must not ease or they look drunk.');\nT.expect(T.css('.loader', 'animation-iteration-count') === 'infinite', 'Iteration count: infinite.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Loading your dashboard…</h1>\n  <div class=\"loader\"></div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; padding: 30px; }\n.loader {\n  width: 44px;\n  height: 44px;\n  border: 5px solid #e2e8f0;\n  border-top-color: #0ea5e9;   /* one colored edge sells the spin */\n  border-radius: 50%;\n}\n\n/* @keyframes spin + animation on .loader */\n\n" }
      ],
      hints: [
        "The keyframes block sits at top level, outside any rule.",
        "Shorthand attach: `animation: spin 1.5s linear infinite;`"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; padding: 30px; }\n.loader {\n  width: 44px;\n  height: 44px;\n  border: 5px solid #e2e8f0;\n  border-top-color: #0ea5e9;   /* one colored edge sells the spin */\n  border-radius: 50%;\n  animation: spin 1.5s linear infinite;\n}\n\n@keyframes spin {\n  0%   { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n"
      }
    },

    {
      id: "css-u6-5",
      title: "Tuning animations",
      kind: "web", chip: "CSS", xp: 15,
      brief: "The animation shorthand hides five useful dials. Today's three:\n\n- `animation-duration` — one lap's length\n- `animation-iteration-count` — a number, or `infinite`\n- `animation-timing-function` — `linear` (mechanical), `ease-in-out` (breathing)\n\nBuild the notification-dot **pulse**: a heartbeat that breathes with ease-in-out.",
      steps: [
        { text: "Define `@keyframes pulse`: 0% and 100% at `scale(1)`, 50% at `scale(1.4)`.",
          test: "var kf = T.rules().filter(function (r) { return r.type === 7 && (r.name || '').toLowerCase() === 'pulse'; })[0];\nT.expect(kf, 'Add @keyframes pulse.');\nvar body = (kf.cssText || '').replace(/\\s+/g, '').toLowerCase();\nT.expect(body.indexOf('scale(1.4)') !== -1, 'Its 50% midpoint should scale to 1.4.');" },
        { text: "Attach to `.dot`: **pulse**, **2s**, **ease-in-out**, **infinite**.",
          test: "T.expect(T.css('.dot', 'animation-name') === 'pulse', 'animation-name: pulse on .dot.');\nT.expect(T.css('.dot', 'animation-duration') === '2s', 'Duration: 2s.');\nT.expect(T.css('.dot', 'animation-timing-function') === 'ease-in-out', 'Timing: ease-in-out — this is what makes it BREATHE instead of tick.');\nT.expect(T.css('.dot', 'animation-iteration-count') === 'infinite', 'It never stops: infinite.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Inbox <span class=\"dot\"></span></h1>\n  <p>Something new is waiting for you.</p>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; padding: 30px; }\n.dot {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  background: #ef4444;\n  border-radius: 50%;\n}\n\n/* @keyframes pulse + a breathing animation on .dot */\n\n" }
      ],
      hints: [
        "Three snapshots: `0% { transform: scale(1); } 50% { transform: scale(1.4); } 100% { transform: scale(1); }`",
        "Shorthand: `animation: pulse 2s ease-in-out infinite;`"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; padding: 30px; }\n.dot {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  background: #ef4444;\n  border-radius: 50%;\n  animation: pulse 2s ease-in-out infinite;\n}\n\n@keyframes pulse {\n  0%   { transform: scale(1); }\n  50%  { transform: scale(1.4); }\n  100% { transform: scale(1); }\n}\n"
      }
    },

    {
      id: "css-quiz-6",
      title: "Unit 6 quiz: Motion",
      kind: "quiz", xp: 10,
      brief: "Transforms, transitions and keyframes. 80% to pass.",
      questions: [
        { q: "Where does the `transition` property belong?",
          choices: ["On the BASE state, so changes animate in both directions", "Inside :hover", "Inside @keyframes", "On the <body>"],
          answer: 0, explain: "Transition on hover-only animates IN but snaps OUT. Base-state transitions glide both ways." },
        { q: "transition vs animation?",
          choices: ["Transitions need a trigger (hover, class change); animations run on their own via @keyframes", "They're synonyms", "Animations are faster", "Transitions loop forever"],
          answer: 0, explain: "Reactive glide = transition. Self-running choreography (spinners, pulses) = keyframe animation." },
        { q: "What does `transform: translateY(-4px)` do?",
          choices: ["Nudges the element 4px UP without affecting neighbors", "Shrinks it 4%", "Moves it down 4px", "Adds 4px margin"],
          answer: 0, explain: "Negative Y = up. And transforms don't reflow the layout — that's why they animate silky-smooth." },
        { q: "Complete the spinner:",
          code: "@keyframes spin {\n  0%   { transform: rotate(0deg); }\n  100% { transform: ??? }\n}",
          lang: "css",
          choices: ["rotate(360deg)", "rotate(0deg)", "scale(360)", "spin(1)"],
          answer: 0, explain: "One full lap. Attach with animation: spin 1.5s linear infinite." },
        { q: "Why `linear` timing for a spinner but `ease-in-out` for a pulse?",
          choices: ["Spinners must rotate at constant speed; pulses feel alive when they accelerate and settle", "linear is newer", "ease-in-out only works on colors", "No reason"],
          answer: 0, explain: "Match the curve to the metaphor: machines are linear, breathing is eased." },
        { q: "Which duration feels right for a button hover?",
          choices: ["~0.2–0.3s", "2s", "0.001s", "10s"],
          answer: 0, explain: "Fast enough to feel responsive, slow enough to be seen. Half-second-plus starts feeling laggy." }
      ]
    },

    {
      id: "css-u6-p",
      title: "Project: Animated call-to-action",
      kind: "web", chip: "CSS", xp: 40, project: true, mins: 30,
      brief: "Assemble the landing-page **CTA zone**: a gradient panel, a button with a lift-on-hover chord, a pulsing \"LIVE\" badge, and a spinner for the loading state. Every motion tool from this unit, playing together.",
      steps: [
        { text: "The `.cta-panel` gets a `135deg` gradient from `#0ea5e9` to `#6366f1`.",
          test: "var v = (T.css('.cta-panel', 'background-image') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('linear-gradient(135deg') !== -1 && v.indexOf('rgb(14,165,233)') !== -1 && v.indexOf('rgb(99,102,241)') !== -1, 'background: linear-gradient(135deg, #0ea5e9, #6366f1) on .cta-panel.');" },
        { text: "`.cta-btn` base: `transition: all 0.25s ease` (plus its given look).",
          test: "T.expect(T.css('.cta-btn', 'transition-duration') === '0.25s', 'Give .cta-btn transition: all 0.25s ease.');" },
        { text: "`.cta-btn:hover` lifts `translateY(-3px)` **and** scales `1.03` — one transform, two functions.",
          test: "var st = T.ruleFor('.cta-btn:hover');\nT.expect(st, 'Add .cta-btn:hover.');\nvar tr = (st.getPropertyValue('transform') || '').replace(/\\s+/g, '').toLowerCase();\nT.expect(tr.indexOf('translatey(-3px)') !== -1 && tr.indexOf('scale(1.03)') !== -1, 'transform: translateY(-3px) scale(1.03);');" },
        { text: "A `pulse` keyframes (50% at `scale(1.3)`) drives the `.live-dot`: 1.5s, ease-in-out, infinite.",
          test: "var kf = T.rules().filter(function (r) { return r.type === 7 && (r.name || '').toLowerCase() === 'pulse'; })[0];\nT.expect(kf && (kf.cssText || '').replace(/\\s+/g, '').indexOf('scale(1.3)') !== -1, '@keyframes pulse with a 1.3 midpoint.');\nT.expect(T.css('.live-dot', 'animation-name') === 'pulse' && T.css('.live-dot', 'animation-duration') === '1.5s' && T.css('.live-dot', 'animation-iteration-count') === 'infinite', 'Attach: animation: pulse 1.5s ease-in-out infinite on .live-dot.');" },
        { text: "A `spin` keyframes (to `rotate(360deg)`) drives the `.spinner`: 1s, linear, infinite.",
          test: "var kf = T.rules().filter(function (r) { return r.type === 7 && (r.name || '').toLowerCase() === 'spin'; })[0];\nT.expect(kf && (kf.cssText || '').replace(/\\s+/g, '').indexOf('rotate(360deg)') !== -1, '@keyframes spin ending at 360deg.');\nT.expect(T.css('.spinner', 'animation-name') === 'spin' && T.css('.spinner', 'animation-duration') === '1s' && T.css('.spinner', 'animation-timing-function') === 'linear', 'Attach: animation: spin 1s linear infinite on .spinner.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"cta-panel\">\n    <p class=\"live\"><span class=\"live-dot\"></span> LIVE — 1,024 building right now</p>\n    <h1>Start your free trial</h1>\n    <button class=\"cta-btn\">Get started →</button>\n    <p class=\"loading\"><span class=\"spinner\"></span> preparing your workspace…</p>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; margin: 0; background: #0f172a; }\n.cta-panel {\n  margin: 24px;\n  padding: 40px 24px;\n  border-radius: 20px;\n  color: white;\n  text-align: center;\n}\n.cta-btn {\n  border: none;\n  background: white;\n  color: #0f172a;\n  font-weight: bold;\n  font-size: 16px;\n  padding: 14px 28px;\n  border-radius: 999px;\n}\n.live { font-size: 13px; letter-spacing: 1px; }\n.live-dot {\n  display: inline-block;\n  width: 10px; height: 10px;\n  background: #4ade80;\n  border-radius: 50%;\n}\n.loading { font-size: 13px; opacity: 0.85; }\n.spinner {\n  display: inline-block;\n  width: 14px; height: 14px;\n  border: 3px solid rgba(255,255,255,0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n\n/* gradient + button motion + pulse + spin */\n\n" }
      ],
      hints: [
        "Two keyframes blocks can live side by side — pulse and spin don't interfere.",
        "The hover chord: base has the transition, :hover has the destination transform.",
        "Shorthands save time: `animation: pulse 1.5s ease-in-out infinite;` and `animation: spin 1s linear infinite;`"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; margin: 0; background: #0f172a; }\n.cta-panel {\n  margin: 24px;\n  padding: 40px 24px;\n  border-radius: 20px;\n  color: white;\n  text-align: center;\n  background: linear-gradient(135deg, #0ea5e9, #6366f1);\n}\n.cta-btn {\n  border: none;\n  background: white;\n  color: #0f172a;\n  font-weight: bold;\n  font-size: 16px;\n  padding: 14px 28px;\n  border-radius: 999px;\n  transition: all 0.25s ease;\n}\n.cta-btn:hover {\n  transform: translateY(-3px) scale(1.03);\n}\n.live { font-size: 13px; letter-spacing: 1px; }\n.live-dot {\n  display: inline-block;\n  width: 10px; height: 10px;\n  background: #4ade80;\n  border-radius: 50%;\n  animation: pulse 1.5s ease-in-out infinite;\n}\n.loading { font-size: 13px; opacity: 0.85; }\n.spinner {\n  display: inline-block;\n  width: 14px; height: 14px;\n  border: 3px solid rgba(255,255,255,0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  vertical-align: middle;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes pulse {\n  0%   { transform: scale(1); }\n  50%  { transform: scale(1.3); }\n  100% { transform: scale(1); }\n}\n\n@keyframes spin {\n  0%   { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n"
      }
    }
  ]
});
