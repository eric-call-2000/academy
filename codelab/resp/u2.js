/* Responsive Design & Layout — Unit 2: Flexbox in depth */
window.CODELAB.addUnit("resp", {
  id: "resp-u2",
  title: "Flexbox in depth",
  icon: "🤸",
  blurb: "Grow, shrink, basis, order and auto margins — the negotiation rules behind every real navbar, card and comment row.",
  cheat: [
    { h: "flex-grow: divide the leftovers", lang: "css", code: ".sidebar { /* flex-grow: 0 — the default: stay put */ }\n.main    { flex-grow: 1; /* absorb ALL spare space */ }\n\n/* ratios: 2 grows twice as fast as 1 */\n.visits { flex-grow: 2; }\n.sales  { flex-grow: 1; }" },
    { h: "The flex: 1 shorthand", lang: "css", code: ".track {\n  flex: 1;\n  /* = flex-grow: 1; flex-shrink: 1; flex-basis: 0%; */\n}", note: "The \"share the space\" one-liner you will type forever." },
    { h: "basis & shrink: the negotiation", lang: "css", code: ".cover {\n  flex-basis: 56px; /* starting size on the main axis */\n  flex-shrink: 0;   /* never squish me */\n}" },
    { h: "order & align-self", lang: "css", code: ".featured { order: -1; }        /* visually first (others: 0) */\n.deal { align-self: flex-end; } /* my own cross-axis rule */", note: "order changes what you SEE only — tab order and screen readers still follow the HTML." },
    { h: "Auto margins: the flexbox shove", lang: "css", code: ".followBtn { margin-left: auto; } /* eats the leftover space → far right */\n.cardFoot  { margin-top: auto; }  /* pins to the bottom of a column */" }
  ],
  lessons: [

    {
      id: "resp-u2-1",
      title: "flex-grow: divide the space",
      kind: "web", chip: "CSS", xp: 15, mins: 12,
      brief: "Your layout looks fine — until someone opens it on an ultrawide monitor and there is a desert of empty space on the right. **`flex-grow`** decides who gets the leftovers:\n\n- `flex-grow: 0` — the default: keep your natural size\n- `flex-grow: 1` — absorb the spare space\n- ratios work: a `2` grows **twice** as fast as a `1`\n\nBuild the classic app frame: a sidebar that stays put next to a main panel that drinks up every spare pixel — then split a stats row 2:1.",
      steps: [
        { text: "Make `.layout` a flex row (the gap is already there).",
          test: "T.expect(T.css('.layout', 'display') === 'flex', 'Set display: flex on .layout (currently ' + T.css('.layout', 'display') + ').');" },
        { text: "Give `.main` **all** the leftover space with `flex-grow: 1` — and leave `.sidebar` alone.",
          test: "T.expect(T.css('.main', 'flex-grow') === '1', 'Set flex-grow: 1 on .main so it absorbs the leftover space.');\nT.expect(T.css('.sidebar', 'flex-grow') === '0', 'Leave .sidebar without flex-grow — it should keep its natural width.');" },
        { text: "In the stats row, make `.visits` grow **twice** as fast as `.sales`: grow values `2` and `1`.",
          test: "T.expect(T.css('.visits', 'flex-grow') === '2', 'Set flex-grow: 2 on .visits.');\nT.expect(T.css('.sales', 'flex-grow') === '1', 'Set flex-grow: 1 on .sales — then .visits takes a double share of the spare space.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Studio</h1>\n  <div class=\"layout\">\n    <div class=\"sidebar\">📁 files</div>\n    <div class=\"main\">✍️ editor</div>\n  </div>\n\n  <h2>This week</h2>\n  <div class=\"stats\">\n    <div class=\"visits\">👀 Visits</div>\n    <div class=\"sales\">💰 Sales</div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; margin: 16px; }\n\n.layout {\n  gap: 10px;\n  /* 1) make this a flex row */\n}\n\n.sidebar {\n  background: #e0e7ff;\n  padding: 14px;\n  border-radius: 10px;\n}\n\n.main {\n  background: #fef3c7;\n  padding: 14px;\n  border-radius: 10px;\n  /* 2) absorb ALL the leftover space */\n}\n\n.stats {\n  display: flex;\n  gap: 10px;\n  margin-top: 10px;\n}\n\n.visits {\n  background: #dcfce7;\n  padding: 14px;\n  border-radius: 10px;\n  /* 3) grow twice as fast as .sales */\n}\n\n.sales {\n  background: #fee2e2;\n  padding: 14px;\n  border-radius: 10px;\n  /* 3) …one share here */\n}\n" }
      ],
      hints: [
        "flex-grow goes on the CHILDREN (.main, .visits, .sales) — display: flex goes on the parents.",
        "Grow values are ratios of the LEFTOVER space, not widths: 2 and 1 means a two-thirds / one-third split of the spare pixels.",
        "`.main { flex-grow: 1; }` then `.visits { flex-grow: 2; }` and `.sales { flex-grow: 1; }`."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; margin: 16px; }\n\n.layout {\n  gap: 10px;\n  display: flex;\n}\n\n.sidebar {\n  background: #e0e7ff;\n  padding: 14px;\n  border-radius: 10px;\n}\n\n.main {\n  background: #fef3c7;\n  padding: 14px;\n  border-radius: 10px;\n  flex-grow: 1;\n}\n\n.stats {\n  display: flex;\n  gap: 10px;\n  margin-top: 10px;\n}\n\n.visits {\n  background: #dcfce7;\n  padding: 14px;\n  border-radius: 10px;\n  flex-grow: 2;\n}\n\n.sales {\n  background: #fee2e2;\n  padding: 14px;\n  border-radius: 10px;\n  flex-grow: 1;\n}\n"
      }
    },

    {
      id: "resp-u2-2",
      title: "shrink & basis",
      kind: "web", chip: "CSS", xp: 15, mins: 14,
      brief: "Growing was half the story — flex children also negotiate when space runs **out**:\n\n- `flex-basis` — the child's **starting** size along the row (before growing or shrinking)\n- `flex-shrink` — how eagerly it gives space up when the row is tight; `0` means *never squish me*\n- `flex: 1` — the famous shorthand: `flex-grow: 1; flex-shrink: 1; flex-basis: 0%`\n\nThis music player is a mess on narrow screens: the cover art gets crushed while the text hogs the row. Renegotiate.",
      example: { lang: "css", code: ".item {\n  flex: 1;\n  /* exactly the same as: */\n  /* flex-grow: 1; flex-shrink: 1; flex-basis: 0%; */\n}" },
      steps: [
        { text: "Give `.cover` its starting size: `flex-basis: 56px`.",
          test: "T.expect(T.css('.cover', 'flex-basis') === '56px', 'Set flex-basis: 56px on .cover — its starting size along the row (currently ' + T.css('.cover', 'flex-basis') + ').');" },
        { text: "Protect the art: `flex-shrink: 0` on `.cover` so a tight row can never crush it.",
          test: "T.expect(T.css('.cover', 'flex-shrink') === '0', 'Set flex-shrink: 0 on .cover — a shrink factor of 0 means it never gives up space.');" },
        { text: "Let `.track` take all the leftover room with the **`flex: 1`** shorthand.",
          test: "T.expect(T.css('.track', 'flex-grow') === '1', 'Give .track the flex: 1 shorthand — its computed flex-grow should be 1.');\nvar b = (T.decl('.track', 'flex-basis') || '').replace(/\\s+/g, '');\nT.expect(b === '0%' || b === '0px' || b === '0', 'Write it as the shorthand flex: 1 — that also sets flex-basis to 0%. flex-grow: 1 on its own leaves the basis at auto.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Now playing</h1>\n  <div class=\"player\">\n    <div class=\"cover\">🎧</div>\n    <div class=\"track\">\n      <div class=\"trackName\">Neon Nights</div>\n      <div class=\"artist\">The Layout Kids</div>\n    </div>\n    <div class=\"time\">3:42</div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; margin: 16px; }\n\n.player {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #0f172a;\n  color: white;\n  padding: 12px;\n  border-radius: 14px;\n}\n\n.cover {\n  height: 56px;\n  border-radius: 10px;\n  background: linear-gradient(135deg, #6366f1, #ec4899);\n  font-size: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /* 1) flex-basis: start at 56px */\n  /* 2) flex-shrink: never squish */\n}\n\n.track {\n  /* 3) take the leftover room with the flex: 1 shorthand */\n}\n\n.trackName {\n  font-weight: bold;\n}\n\n.artist {\n  opacity: 0.7;\n  font-size: 14px;\n}\n\n.time {\n  opacity: 0.7;\n}\n" }
      ],
      hints: [
        "Steps 1 and 2 both go in the .cover rule; step 3 goes in the .track rule.",
        "flex-basis is the size BEFORE growing/shrinking — with flex-shrink: 0 the cover stays exactly 56px wide no matter how tight the row gets.",
        "`.cover { flex-basis: 56px; flex-shrink: 0; }` and `.track { flex: 1; }` — the shorthand, not flex-grow alone."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; margin: 16px; }\n\n.player {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #0f172a;\n  color: white;\n  padding: 12px;\n  border-radius: 14px;\n}\n\n.cover {\n  height: 56px;\n  border-radius: 10px;\n  background: linear-gradient(135deg, #6366f1, #ec4899);\n  font-size: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-basis: 56px;\n  flex-shrink: 0;\n}\n\n.track {\n  flex: 1;\n}\n\n.trackName {\n  font-weight: bold;\n}\n\n.artist {\n  opacity: 0.7;\n  font-size: 14px;\n}\n\n.time {\n  opacity: 0.7;\n}\n"
      }
    },

    {
      id: "resp-u2-3",
      title: "order & align-self",
      kind: "web", chip: "CSS", xp: 15, mins: 12,
      brief: "Two escape hatches for the one child that will not follow the rules:\n\n- `order` — reorders children **visually**; everyone defaults to `0`, so `order: -1` jumps to the front\n- `align-self` — one child's personal override of the container's `align-items`\n\n⚠️ `order` changes only what you *see* — keyboard tabbing and screen readers still follow the HTML. Use it for polish, not for meaning.\n\nMarketing wants the **Pro** plan shown first without touching the HTML, and the little Student deal should hang at the bottom like a price tag.",
      steps: [
        { text: "Make `.plans` a flex row with a **12px** gap.",
          test: "T.expect(T.css('.plans', 'display') === 'flex', 'Set display: flex on .plans.');\nT.expect(T.css('.plans', 'gap') === '12px' || T.css('.plans', 'column-gap') === '12px', 'Add gap: 12px on .plans.');" },
        { text: "Promote the Pro card: `order: -1` on `.featured` puts it visually first.",
          test: "T.expect(T.css('.featured', 'order') === '-1', 'Set order: -1 on .featured — lower numbers come first, and every other card defaults to 0.');" },
        { text: "Cards stretch to equal height by default — top-align them instead with `align-items: flex-start` on `.plans`.",
          test: "T.expect(T.css('.plans', 'align-items') === 'flex-start', 'Set align-items: flex-start on .plans — stretch is the default, so say flex-start explicitly.');" },
        { text: "Give `.deal` its own rule-break: `align-self: flex-end` drops it to the bottom edge.",
          test: "T.expect(T.css('.deal', 'align-self') === 'flex-end', 'Set align-self: flex-end on .deal — one child can override the container rule for itself.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Pick a plan</h1>\n  <div class=\"plans\">\n    <div class=\"card basic\">\n      <h2>Basic</h2>\n      <p class=\"price\">$0</p>\n      <p>3 projects</p>\n    </div>\n    <div class=\"card featured\">\n      <h2>⭐ Pro</h2>\n      <p class=\"price\">$12</p>\n      <p>Unlimited projects</p>\n      <p>Custom domain</p>\n      <p>Priority support</p>\n    </div>\n    <div class=\"card deal\">\n      <h2>Student</h2>\n      <p class=\"price\">$4</p>\n      <p>With a school email</p>\n    </div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; margin: 16px; }\n\n.plans {\n  /* 1) flex row, 12px gap */\n  /* 3) top-align the cards (no stretch) */\n}\n\n.card {\n  background: #f1f5f9;\n  padding: 14px;\n  border-radius: 12px;\n}\n\n.card h2 { margin: 0 0 4px; font-size: 18px; }\n.card p { margin: 4px 0; font-size: 14px; }\n\n.price { font-weight: bold; font-size: 20px; }\n\n.featured {\n  background: #e0f2fe;\n  border: 2px solid #0ea5e9;\n  /* 2) jump to the front of the row */\n}\n\n.deal {\n  background: #fef9c3;\n  /* 4) hang at the bottom edge */\n}\n" }
      ],
      hints: [
        "order and align-self go on the CHILD cards; display, gap and align-items go on .plans.",
        "Every card has order: 0 unless you say otherwise — so -1 sorts before all of them.",
        "`.plans { display: flex; gap: 12px; align-items: flex-start; }`, `.featured { order: -1; }`, `.deal { align-self: flex-end; }`."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; margin: 16px; }\n\n.plans {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n\n.card {\n  background: #f1f5f9;\n  padding: 14px;\n  border-radius: 12px;\n}\n\n.card h2 { margin: 0 0 4px; font-size: 18px; }\n.card p { margin: 4px 0; font-size: 14px; }\n\n.price { font-weight: bold; font-size: 20px; }\n\n.featured {\n  background: #e0f2fe;\n  border: 2px solid #0ea5e9;\n  order: -1;\n}\n\n.deal {\n  background: #fef9c3;\n  align-self: flex-end;\n}\n"
      }
    },

    {
      id: "resp-u2-4",
      title: "The media-object & auto margins",
      kind: "web", chip: "CSS", xp: 15, mins: 12,
      brief: "Avatar on the left, content on the right — the **media object** might be the most reused layout on the internet: comments, tweets, notifications, chat bubbles, search results.\n\nThe recipe:\n\n- flex the row, `align-items: flex-start` so the avatar hugs the top\n- `flex-shrink: 0` on the avatar — long text must never crush the picture\n- **`margin-left: auto`** on the action button: an auto margin eats ALL the leftover space, shoving the button to the far edge (in a column, `margin-top: auto` pins a footer down)\n\nBuild the comment row every app ships.",
      steps: [
        { text: "Flex the `.comment`: row layout, **12px** gap, `align-items: flex-start`.",
          test: "T.expect(T.css('.comment', 'display') === 'flex', 'Set display: flex on .comment.');\nT.expect(T.css('.comment', 'gap') === '12px' || T.css('.comment', 'column-gap') === '12px', 'Add gap: 12px on .comment.');\nT.expect(T.css('.comment', 'align-items') === 'flex-start', 'Set align-items: flex-start on .comment so the avatar hugs the top of the text.');" },
        { text: "Protect the avatar: `flex-shrink: 0` on `.avatar`.",
          test: "T.expect(T.css('.avatar', 'flex-shrink') === '0', 'Set flex-shrink: 0 on .avatar — a long comment must never crush the picture.');" },
        { text: "Shove the Follow button to the far right edge with `margin-left: auto` on `.followBtn`.",
          test: "var m = (T.decl('.followBtn', 'margin-left') || '').replace(/\\s+/g, '');\nT.expect(m === 'auto', 'Set margin-left: auto on .followBtn — the auto margin absorbs ALL the leftover space and pushes the button to the far edge.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Comments</h1>\n  <div class=\"comment\">\n    <div class=\"avatar\">🦊</div>\n    <div class=\"text\">\n      <strong>foxdev</strong>\n      <p>Auto margins are secretly the best flexbox trick.</p>\n    </div>\n    <button class=\"followBtn\">＋ Follow</button>\n  </div>\n  <div class=\"comment\">\n    <div class=\"avatar\">🐢</div>\n    <div class=\"text\">\n      <strong>slowloop</strong>\n      <p>Agreed. I used to position: absolute my way out of this and I am so sorry.</p>\n    </div>\n    <button class=\"followBtn\">＋ Follow</button>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; margin: 16px; background: #f8fafc; }\n\n.comment {\n  background: white;\n  padding: 12px;\n  border-radius: 12px;\n  margin-bottom: 10px;\n  /* 1) flex row, 12px gap, avatar hugs the top */\n}\n\n.avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #f59e0b, #ef4444);\n  font-size: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /* 2) never let text crush the picture */\n}\n\n.text p { margin: 4px 0 0; font-size: 14px; }\n\n.followBtn {\n  border: 2px solid #0ea5e9;\n  background: white;\n  color: #0ea5e9;\n  border-radius: 999px;\n  padding: 6px 12px;\n  cursor: pointer;\n  /* 3) shove me to the far right edge */\n}\n" }
      ],
      hints: [
        "Three declarations on .comment: display, gap, align-items — then the children get one line each.",
        "This is NOT justify-content: space-between — only the button moves right; the avatar and text stay snug together.",
        "`.avatar { flex-shrink: 0; }` and `.followBtn { margin-left: auto; }` — the auto margin does all the pushing."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; margin: 16px; background: #f8fafc; }\n\n.comment {\n  background: white;\n  padding: 12px;\n  border-radius: 12px;\n  margin-bottom: 10px;\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n\n.avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #f59e0b, #ef4444);\n  font-size: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.text p { margin: 4px 0 0; font-size: 14px; }\n\n.followBtn {\n  border: 2px solid #0ea5e9;\n  background: white;\n  color: #0ea5e9;\n  border-radius: 999px;\n  padding: 6px 12px;\n  cursor: pointer;\n  margin-left: auto;\n}\n"
      }
    },

    {
      id: "resp-quiz-2",
      title: "Unit 2 quiz: Flexbox in depth",
      kind: "quiz", xp: 10,
      questions: [
        { q: "A flex row has 300px of leftover space. How is it divided?",
          code: ".a { flex-grow: 2; }\n.b { flex-grow: 1; }",
          lang: "css",
          choices: ["150px each — grow is an on/off switch", ".a takes all 300px, .b gets none", ".a gets 200px and .b gets the other 100px", "Neither grows without an explicit width"],
          answer: 2, explain: "Grow values are ratios of the LEFTOVER space, not sizes: 2 shares vs 1 share means two-thirds vs one-third of the spare 300px — 200px and 100px, handed out on top of each child's natural size." },
        { q: "What does the shorthand `flex: 1` expand to?",
          choices: ["flex-grow: 1; flex-shrink: 1; flex-basis: 0%", "flex-grow: 1; flex-shrink: 1; flex-basis: auto", "flex-grow: 1; flex-shrink: 0; flex-basis: 100%", "flex-basis: 1fr with grow and shrink off"],
          answer: 0, explain: "flex: 1 sets all three: grow 1, shrink 1, basis 0% — so children start from zero width and split the whole row evenly. Don't confuse it with flex: auto, which keeps flex-basis: auto and lets each child's own content decide its starting size." },
        { q: "On narrow screens the logo in your navbar gets squished. Which one line protects it?",
          choices: ["order: 0", "justify-content: center", "flex-grow: 1", "flex-shrink: 0"],
          answer: 3, explain: "flex-shrink controls how a child gives up space when the row is tight — a factor of 0 means it never shrinks below its size." },
        { q: "You put `order: -1` on a card. What actually changes?",
          choices: ["The DOM order changes, so tab order follows it", "Only the VISUAL order — the HTML stays put", "Its z-index, so the card stacks above its siblings", "The cards re-sort themselves alphabetically"],
          answer: 1, explain: "order is purely visual: keyboard tabbing and screen readers still walk the HTML source order, so a card you yanked to the front with order: -1 is still announced in its original spot. Content that must come first for everyone belongs first in the HTML." },
        { q: "The container says `align-items: center`, but ONE child should sit at the bottom. What goes on that child?",
          choices: ["align-items: flex-end", "justify-self: flex-end", "align-self: flex-end", "vertical-align: bottom"],
          answer: 2, explain: "align-self is the per-child override of the container's align-items. (justify-self does nothing in flexbox, and vertical-align is for inline/table layout.)" },
        { q: "In a flex row, what does `margin-left: auto` on the last child do?",
          choices: ["Centers the child inside the row", "Pushes that child to the far right edge", "Adds the browser's default 16px margin", "Nothing — flexbox ignores auto margins"],
          answer: 1, explain: "Auto margins in flexbox eat ALL the free space in that direction: margin-left: auto swallows every leftover pixel to the child's left and shoves it against the right edge — the classic way to move one item to the edge while the rest stay snug." }
      ]
    }
  ]
});
