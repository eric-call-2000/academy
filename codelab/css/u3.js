/* Learn CSS — Unit 3: The Box Model */
window.CODELAB.addUnit("css", {
  id: "css-u3",
  title: "The Box Model",
  icon: "📦",
  blurb: "Padding, borders, margins and sizing — the geometry underneath every layout.",
  cheat: [
    { h: "The four layers", lang: "css", code: "/* content → padding → border → margin */\n.card {\n  padding: 16px;   /* inside the border */\n  border: 2px solid #94a3b8;\n  margin: 20px;    /* outside the border */\n}" },
    { h: "Shorthand values", lang: "css", code: "padding: 16px;                  /* all four sides */\npadding: 10px 20px;             /* top/bottom  left/right */\npadding: 10px 20px 30px 40px;   /* top right bottom left (clockwise!) */" },
    { h: "Centering a block", lang: "css", code: ".page {\n  max-width: 400px;\n  margin: 20px auto;  /* auto splits leftover space evenly */\n}" },
    { h: "border-box (use it!)", lang: "css", code: "* { box-sizing: border-box; }\n/* now width means the VISIBLE width,\n   padding and border included */" },
    { h: "Overflow", lang: "css", code: "overflow: hidden;  /* clip spilling content */\noverflow: auto;    /* scrollbar when needed */\ndisplay: none;     /* remove entirely (no space kept) */" }
  ],
  lessons: [

    {
      id: "css-4",
      title: "Padding, border, margin",
      kind: "web", chip: "CSS", xp: 15,
      brief: "**Every element is a box** with four layers, inside-out:\n\n- content → **padding** (space inside the border) → **border** → **margin** (space outside)\n\nMastering the box model is what makes layouts stop feeling random. Let's turn a plain `<div>` into a card.",
      example: { lang: "css", code: ".card {\n  padding: 16px;\n  border: 2px solid #94a3b8;\n  border-radius: 12px;\n  margin-bottom: 20px;\n}" },
      steps: [
        { text: "Give `.card` **16px of padding** on all sides.",
          test: "T.expect(T.css('.card', 'padding-top') === '16px' && T.css('.card', 'padding-left') === '16px', 'Set .card { padding: 16px; } — top padding is currently ' + T.css('.card', 'padding-top') + '.');" },
        { text: "Add a **2px solid** border.",
          test: "T.expect(T.css('.card', 'border-top-width') === '2px', 'Border width should be 2px (currently ' + T.css('.card', 'border-top-width') + ').');\nT.expect(T.css('.card', 'border-top-style') === 'solid', 'Border style should be solid.');" },
        { text: "Round the corners with a **12px** border-radius.",
          test: "T.expect(T.css('.card', 'border-top-left-radius') === '12px', 'Set border-radius: 12px on .card.');" },
        { text: "Push the cards apart with **20px** of bottom margin.",
          test: "T.expect(T.css('.card', 'margin-bottom') === '20px', 'Set margin-bottom: 20px on .card (currently ' + T.css('.card', 'margin-bottom') + ').');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Card one</h2>\n    <p>Boxes all the way down.</p>\n  </div>\n  <div class=\"card\">\n    <h2>Card two</h2>\n    <p>Padding in, margin out.</p>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* Turn .card into an actual card */\n.card {\n\n}\n" }
      ],
      hints: [
        "All four go on the same `.card` rule.",
        "`border` is a shorthand: width, style, color → `border: 2px solid #94a3b8;`"
      ],
      solution: {
        "styles.css": "/* Turn .card into an actual card */\n.card {\n  padding: 16px;\n  border: 2px solid #94a3b8;\n  border-radius: 12px;\n  margin-bottom: 20px;\n}\n"
      }
    },

    {
      id: "css-u3-2",
      title: "Centering with margin auto",
      kind: "web", chip: "CSS", xp: 15,
      brief: "The classic way to center a whole **block** (article, card, page column):\n\n- give it a `max-width` so there's leftover space\n- set left/right margins to `auto` — the browser splits the leftover space evenly\n\n`margin: 40px auto;` = 40px top/bottom, auto left/right. One line, perfectly centered column — how virtually every article page you've read is laid out.",
      steps: [
        { text: "Cap the reading column: `max-width: 400px` on `.page`.",
          test: "T.expect(T.css('.page', 'max-width') === '400px', 'Set .page { max-width: 400px; }');" },
        { text: "Center it with the shorthand `margin: 40px auto;`.",
          test: "var d = (T.decl('.page', 'margin') || '').replace(/\\s+/g, ' ');\nvar dl = (T.decl('.page', 'margin-left') || '');\nT.expect(d.indexOf('auto') !== -1 || dl === 'auto', 'Use margin: 40px auto; (top/bottom 40, sides auto).');\nT.expect(T.css('.page', 'margin-top') === '40px', 'Top margin should be 40px.');\nvar el = T.$('.page');\nvar ml = parseFloat(getComputedStyle(el).marginLeft);\nT.expect(ml > 10, 'The auto margins should actually center it (left margin computed to ' + ml + 'px — is max-width in place?).');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"page\">\n    <h1>Centered, calmly</h1>\n    <p>Wide text lines are hard to read. A capped, centered column fixes both problems with two declarations.</p>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { margin: 0; font-family: Arial, sans-serif; background: #f1f5f9; }\n.page { background: white; padding: 20px; }\n\n/* max-width + margin: 40px auto */\n\n" }
      ],
      hints: [
        "Both on .page: `max-width: 400px; margin: 40px auto;`",
        "auto margins need a width cap — without max-width there's no leftover space to split."
      ],
      solution: {
        "styles.css": "body { margin: 0; font-family: Arial, sans-serif; background: #f1f5f9; }\n.page { background: white; padding: 20px; }\n\n.page {\n  max-width: 400px;\n  margin: 40px auto;\n}\n"
      }
    },

    {
      id: "css-u3-3",
      title: "Shorthand: the clock rule",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Padding and margin shorthands read **clockwise from the top**: `top right bottom left`.\n\n- `padding: 10px 20px 30px 40px` → top 10, right 20, bottom 30, left 40\n- two values: `10px 20px` → top/bottom 10, left/right 20\n\nMnemonic: **TRouBLe** — Top, Right, Bottom, Left.",
      steps: [
        { text: "Give `.ticket` four different paddings in ONE declaration: top 10, right 20, bottom 30, left 40.",
          test: "T.expect(T.css('.ticket', 'padding-top') === '10px' && T.css('.ticket', 'padding-right') === '20px' && T.css('.ticket', 'padding-bottom') === '30px' && T.css('.ticket', 'padding-left') === '40px', 'padding: 10px 20px 30px 40px; — clockwise from the top. Got T:' + T.css('.ticket','padding-top') + ' R:' + T.css('.ticket','padding-right') + ' B:' + T.css('.ticket','padding-bottom') + ' L:' + T.css('.ticket','padding-left'));\nvar d = T.decl('.ticket', 'padding');\nT.expect(!!d, 'Use the single shorthand property, not four separate ones.');" },
        { text: "Give `.stub` the two-value margin shorthand: 12px top/bottom, 24px left/right.",
          test: "T.expect(T.css('.stub', 'margin-top') === '12px' && T.css('.stub', 'margin-left') === '24px', 'margin: 12px 24px; — first value vertical, second horizontal.');\nT.expect(!!T.decl('.stub', 'margin'), 'Use the shorthand margin property.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"ticket\">\n    <h2>ADMIT ONE</h2>\n    <p>Row F · Seat 12</p>\n  </div>\n  <p class=\"stub\">Keep this stub for re-entry.</p>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; }\n.ticket { background: #fef3c7; border: 2px dashed #d97706; }\n.stub { background: #e2e8f0; }\n\n/* shorthands here */\n\n" }
      ],
      hints: [
        "Four values go clockwise from noon: `padding: 10px 20px 30px 40px;`",
        "Two values: vertical then horizontal — `margin: 12px 24px;`"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; }\n.ticket { background: #fef3c7; border: 2px dashed #d97706; }\n.stub { background: #e2e8f0; }\n\n.ticket {\n  padding: 10px 20px 30px 40px;\n}\n\n.stub {\n  margin: 12px 24px;\n}\n"
      }
    },

    {
      id: "css-u3-4",
      title: "box-sizing: border-box",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Ancient CSS trap: `width: 200px` + `padding: 20px` + `border: 5px` = a box that's actually **250px** wide, because width classically means only the *content*.\n\n`box-sizing: border-box` fixes it: width becomes the **visible** width, padding and border included. Modern projects apply it to everything on line one:\n\nThe two boxes below have identical CSS except box-sizing. Fix the second one and watch them match.",
      example: { lang: "css", code: "* {\n  box-sizing: border-box;\n}" },
      steps: [
        { text: "Give `.fixed` the `box-sizing: border-box` declaration.",
          test: "T.expect(T.css('.fixed', 'box-sizing') === 'border-box', 'Set .fixed { box-sizing: border-box; }');" },
        { text: "Its total on-screen width becomes exactly **200px** (the old box stays a bloated 250px).",
          test: "var f = T.$('.fixed');\nT.expect(f && f.offsetWidth === 200, 'With border-box, width 200 IS the visible width — currently ' + (f && f.offsetWidth) + 'px.');\nvar o = T.$('.old');\nT.expect(o && o.offsetWidth === 250, 'Leave .old alone as the cautionary tale (250px of accidental width).');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"old\">content-box: 200 + padding + border = 250px 😬</div>\n  <div class=\"fixed\">border-box: 200px means 200px 😌</div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; }\n.old, .fixed {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid #0ea5e9;\n  margin-bottom: 10px;\n  background: #e0f2fe;\n}\n\n/* make .fixed honest about its width */\n\n" }
      ],
      hints: [
        "One declaration: `.fixed { box-sizing: border-box; }`",
        "In your own projects, start every stylesheet with `* { box-sizing: border-box; }` and never think about this again."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; }\n.old, .fixed {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid #0ea5e9;\n  margin-bottom: 10px;\n  background: #e0f2fe;\n}\n\n.fixed {\n  box-sizing: border-box;\n}\n"
      }
    },

    {
      id: "css-u3-5",
      title: "Overflow & display: none",
      kind: "web", chip: "CSS", xp: 15,
      brief: "When content is bigger than its box, **overflow** decides what happens:\n\n- `overflow: visible` — spills out (the default, often ugly)\n- `overflow: hidden` — clipped at the edge\n- `overflow: auto` — scrollbar appears when needed\n\nAnd `display: none` removes an element completely — no space reserved, as if it never existed (your JS course will toggle this constantly).",
      steps: [
        { text: "Clip the decorative `.cover` box: `overflow: hidden`.",
          test: "T.expect(T.css('.cover', 'overflow') === 'hidden', 'Set overflow: hidden on .cover.');" },
        { text: "Give the `.terms` box a scrollbar instead: `overflow: auto`.",
          test: "var v = T.css('.terms', 'overflow');\nT.expect(v === 'auto' || v === 'scroll', 'Set overflow: auto on .terms — scroll it in the preview!');" },
        { text: "Hide the `.easter-egg` entirely with `display: none`.",
          test: "T.expect(T.css('.easter-egg', 'display') === 'none', 'Set display: none on .easter-egg — gone, no gap left behind.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"cover\">OVERFLOWING DECORATIVE TEXT ✦ OVERFLOWING DECORATIVE TEXT ✦ OVERFLOWING DECORATIVE TEXT</div>\n\n  <div class=\"terms\">\n    <p>Terms &amp; conditions: 1. Be kind. 2. Ship things. 3. Read the docs. 4. Take breaks. 5. Drink water. 6. Comment your code. 7. Test before pushing. 8. Celebrate small wins. 9. Ask questions. 10. Teach someone else.</p>\n  </div>\n\n  <p class=\"easter-egg\">You weren't supposed to see this yet.</p>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; }\n.cover {\n  width: 260px;\n  height: 48px;\n  background: #1e1b4b;\n  color: #a5b4fc;\n  font-size: 26px;\n  white-space: nowrap;\n}\n.terms {\n  width: 260px;\n  height: 90px;\n  border: 2px solid #cbd5e1;\n  padding: 8px;\n  margin-top: 12px;\n}\n\n/* overflow + display rules here */\n\n" }
      ],
      hints: [
        "Three one-liner rules: `.cover { overflow: hidden; }`, `.terms { overflow: auto; }`, `.easter-egg { display: none; }`",
        "Compare hidden vs auto in the preview — clipped silence vs a scrollbar."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; }\n.cover {\n  width: 260px;\n  height: 48px;\n  background: #1e1b4b;\n  color: #a5b4fc;\n  font-size: 26px;\n  white-space: nowrap;\n}\n.terms {\n  width: 260px;\n  height: 90px;\n  border: 2px solid #cbd5e1;\n  padding: 8px;\n  margin-top: 12px;\n}\n\n.cover { overflow: hidden; }\n.terms { overflow: auto; }\n.easter-egg { display: none; }\n"
      }
    },

    {
      id: "css-quiz-3",
      title: "Unit 3 quiz: The Box Model",
      kind: "quiz", xp: 10,
      brief: "Layers, shorthands, sizing and overflow. 80% to pass.",
      questions: [
        { q: "From the inside out, the box model layers are…",
          choices: ["content → padding → border → margin", "content → margin → border → padding", "padding → content → margin → border", "border → padding → margin → content"],
          answer: 0, explain: "Padding hugs the content inside the border; margin pushes neighbors away outside it." },
        { q: "What does `padding: 10px 20px 30px 40px` give the LEFT side?",
          choices: ["40px", "10px", "20px", "30px"],
          answer: 0, explain: "Clockwise from the top: Top 10, Right 20, Bottom 30, Left 40 — TRouBLe." },
        { q: "How wide does this render **without** border-box?",
          code: ".box {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid;\n}",
          lang: "css",
          choices: ["250px (200 + 20·2 + 5·2)", "200px", "225px", "270px"],
          answer: 0, explain: "Classic width covers only content; padding and border pile on top. border-box makes 200 mean 200." },
        { q: "The one-liner that makes width behave sanely project-wide:",
          choices: ["`* { box-sizing: border-box; }`", "`* { width: auto; }`", "`body { padding: 0; }`", "`* { margin: 0 auto; }`"],
          answer: 0, explain: "The universal border-box reset is line one of most modern stylesheets." },
        { q: "How do you center a fixed-width block horizontally?",
          choices: ["max-width + margin left/right auto", "text-align: center on it", "padding: auto", "float: middle"],
          answer: 0, explain: "Auto side margins split the leftover space. (text-align centers INLINE content inside, not the block itself.)" },
        { q: "`display: none` vs `overflow: hidden`?",
          choices: ["none removes the element entirely; hidden keeps the box but clips spill-over", "They're identical", "hidden also removes the element", "none just makes it transparent"],
          answer: 0, explain: "display:none = gone from layout. overflow:hidden = box stays, contents get scissored at the edge." }
      ]
    },

    {
      id: "css-u3-p",
      title: "Project: Notification card",
      kind: "web", chip: "CSS", xp: 40, project: true, mins: 30,
      brief: "Style a real **notification card** — the little \"You've got mail\" panel every app shows. Centered column, comfortable padding, an accent border, and a properly sized action button. Pure box model.",
      steps: [
        { text: "Center the card column: `.card` gets `max-width: 360px` and `margin: 40px auto`.",
          test: "T.expect(T.css('.card', 'max-width') === '360px', 'Set max-width: 360px on .card.');\nT.expect(T.css('.card', 'margin-top') === '40px', 'Top/bottom margin: 40px.');\nvar ml = parseFloat(getComputedStyle(T.$('.card')).marginLeft);\nT.expect(ml > 10, 'Side margins auto → the card should center (computed left margin ' + ml + 'px).');" },
        { text: "Card body: white background, `20px` padding, `14px` radius, and box-sizing `border-box`.",
          test: "var cs = getComputedStyle(T.$('.card'));\nT.expect(cs.backgroundColor === 'rgb(255, 255, 255)', 'White card background.');\nT.expect(cs.paddingTop === '20px' && cs.paddingLeft === '20px', 'padding: 20px.');\nT.expect(cs.borderTopLeftRadius === '14px', 'border-radius: 14px.');\nT.expect(cs.boxSizing === 'border-box', 'box-sizing: border-box.');" },
        { text: "An accent stripe: `border-left: 6px solid #0ea5e9`.",
          test: "var cs = getComputedStyle(T.$('.card'));\nT.expect(cs.borderLeftWidth === '6px' && cs.borderLeftStyle === 'solid' && cs.borderLeftColor === 'rgb(14, 165, 233)', 'Set border-left: 6px solid #0ea5e9 on .card.');" },
        { text: "Space the message off the title: `.msg` gets `margin: 8px 0 16px`.",
          test: "var cs = getComputedStyle(T.$('.msg'));\nT.expect(cs.marginTop === '8px' && cs.marginBottom === '16px' && cs.marginLeft === '0px', 'Use margin: 8px 0 16px; on .msg (three-value shorthand: top, sides, bottom).');" },
        { text: "The `.dismiss` button: `padding: 10px 18px`, no border, `8px` radius, `#0ea5e9` background, white text.",
          test: "var cs = getComputedStyle(T.$('.dismiss'));\nT.expect(cs.paddingTop === '10px' && cs.paddingLeft === '18px', 'Button padding: 10px 18px.');\nT.expect(cs.borderTopWidth === '0px', 'Remove the border (border: none).');\nT.expect(cs.borderTopLeftRadius === '8px', 'Radius: 8px.');\nT.expect(cs.backgroundColor === 'rgb(14, 165, 233)' && cs.color === 'rgb(255, 255, 255)', 'Sky background, white text.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"card\">\n    <h2>New message 📬</h2>\n    <p class=\"msg\">Ada sent you the launch checklist. Review it before Friday's demo.</p>\n    <button class=\"dismiss\">Got it</button>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f1f5f9;\n}\n.card h2 { margin: 0; font-size: 18px; }\n\n/* your box-model styling: .card, .msg, .dismiss */\n\n" }
      ],
      hints: [
        "Card checklist in one rule: background, max-width, margin auto, padding, border-radius, border-left, box-sizing.",
        "Three-value margin shorthand: `margin: 8px 0 16px;` = top 8, sides 0, bottom 16.",
        "Buttons keep their default border unless you remove it: `border: none;`"
      ],
      solution: {
        "styles.css": "body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f1f5f9;\n}\n.card h2 { margin: 0; font-size: 18px; }\n\n.card {\n  background: white;\n  max-width: 360px;\n  margin: 40px auto;\n  padding: 20px;\n  border-radius: 14px;\n  border-left: 6px solid #0ea5e9;\n  box-sizing: border-box;\n}\n\n.msg {\n  margin: 8px 0 16px;\n  color: #475569;\n}\n\n.dismiss {\n  padding: 10px 18px;\n  border: none;\n  border-radius: 8px;\n  background: #0ea5e9;\n  color: white;\n  font-weight: bold;\n}\n"
      }
    }
  ]
});
