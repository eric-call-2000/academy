/* Learn HTML — Unit 3: Tables */
window.CODELAB.addUnit("html", {
  id: "html-u3",
  title: "Tables",
  icon: "📊",
  blurb: "Rows, columns, headers and spans — present data the way spreadsheets do.",
  cheat: [
    { h: "Table skeleton", lang: "html", code: "<table>\n  <tr>\n    <td>row 1, cell 1</td>\n    <td>row 1, cell 2</td>\n  </tr>\n</table>", note: "table → tr (table row) → td (table data cell)." },
    { h: "Headers & sections", lang: "html", code: "<table>\n  <thead>\n    <tr><th>Name</th><th>Score</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Ada</td><td>99</td></tr>\n  </tbody>\n</table>", note: "<th> = bold header cell; thead/tbody label the sections." },
    { h: "Spanning", lang: "html", code: "<td colspan=\"2\">stretches across 2 columns</td>\n<td rowspan=\"3\">stretches down 3 rows</td>" },
    { h: "Caption & footer", lang: "html", code: "<table>\n  <caption>Q3 results</caption>\n  …\n  <tfoot>\n    <tr><td>Total</td><td>42</td></tr>\n  </tfoot>\n</table>" }
  ],
  lessons: [

    {
      id: "html-u3-1",
      title: "Your first table",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Tables show **data in rows and columns** — scores, schedules, prices. (Just data! Page *layout* is CSS's job.)\n\nThree tags, always in this hierarchy:\n\n- `<table>` — the whole thing\n- `<tr>` — one **t**able **r**ow\n- `<td>` — one **t**able **d**ata cell inside a row\n\nBuild a 2-row, 2-column scoreboard.",
      steps: [
        { text: "Add a `<table>` containing **2** `<tr>` rows.",
          test: "T.expect(T.$('table'), 'No <table> yet.');\nT.expect(T.count('table tr') === 2, 'The table needs exactly 2 <tr> rows — found ' + T.count('table tr') + '.');" },
        { text: "Each row holds **2** `<td>` cells: a player name and a score.",
          test: "var rows = T.$$('table tr');\nvar ok = rows.length === 2 && rows.every(function (r) { return r.querySelectorAll('td').length === 2; });\nT.expect(ok, 'Each <tr> should contain exactly 2 <td> cells.');\nvar txt = (T.text('table') || '');\nT.expect(/\\d/.test(txt), 'Put numbers in the score cells.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Game night scoreboard</h1>\n  <!-- table → tr → td -->\n\n</body>\n</html>\n" }
      ],
      hints: [
        "One row looks like: `<tr> <td>Ada</td> <td>99</td> </tr>`",
        "Stack two of those rows inside `<table> … </table>`."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Game night scoreboard</h1>\n  <table>\n    <tr>\n      <td>Ada</td>\n      <td>99</td>\n    </tr>\n    <tr>\n      <td>Linus</td>\n      <td>87</td>\n    </tr>\n  </table>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u3-2",
      title: "Headers: th, thead & tbody",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Real tables label their columns:\n\n- `<th>` — a **header** cell (bold + centered by default, and announced as a header by screen readers)\n- `<thead>` — wraps the header row(s)\n- `<tbody>` — wraps the data rows\n\nSame scoreboard, professional edition.",
      steps: [
        { text: "Add a header row using `<th>` cells: **Player** and **Score**.",
          test: "T.expect(T.count('table th') >= 2, 'Add a row of <th> cells (Player, Score).');\nvar txt = T.$$('th').map(function (h) { return h.textContent.toLowerCase(); }).join(' ');\nT.expect(txt.indexOf('player') !== -1 && txt.indexOf('score') !== -1, 'Name the headers Player and Score.');" },
        { text: "Wrap the header row in `<thead>` and the data rows in `<tbody>`.",
          test: "T.expect(T.$('table thead th'), 'The <th> row goes inside <thead>.');\nT.expect(T.count('table tbody tr') >= 2, 'The data rows go inside <tbody>.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Game night scoreboard</h1>\n  <table>\n    <tr>\n      <td>Ada</td>\n      <td>99</td>\n    </tr>\n    <tr>\n      <td>Linus</td>\n      <td>87</td>\n    </tr>\n  </table>\n</body>\n</html>\n" }
      ],
      hints: [
        "Header row: `<thead> <tr> <th>Player</th> <th>Score</th> </tr> </thead>` — it goes right after `<table>`.",
        "Then wrap BOTH existing data rows together: `<tbody> …the two tr… </tbody>`."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Game night scoreboard</h1>\n  <table>\n    <thead>\n      <tr>\n        <th>Player</th>\n        <th>Score</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Ada</td>\n        <td>99</td>\n      </tr>\n      <tr>\n        <td>Linus</td>\n        <td>87</td>\n      </tr>\n    </tbody>\n  </table>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u3-3",
      title: "Spanning columns & rows",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Sometimes a cell needs to stretch:\n\n- `colspan=\"2\"` — this cell is **two columns wide**\n- `rowspan=\"2\"` — this cell is **two rows tall**\n\nWhen a cell spans, the covered cells simply **aren't written** — the neighbors move over. Watch the preview to see the merge happen.",
      steps: [
        { text: "Make the **Weekend workshop** cell span both columns with `colspan=\"2\"`.",
          test: "var c = T.$$('td, th').filter(function (x) { return (x.textContent || '').toLowerCase().indexOf('weekend workshop') !== -1; })[0];\nT.expect(c, 'Keep the Weekend workshop cell.');\nT.expect(c.getAttribute('colspan') === '2', 'Add colspan=\"2\" to that cell.');" },
        { text: "That row should now contain only **one** cell (the spanning one).",
          test: "var c = T.$$('td, th').filter(function (x) { return (x.textContent || '').toLowerCase().indexOf('weekend workshop') !== -1; })[0];\nvar row = c && c.parentNode;\nT.expect(row && row.querySelectorAll('td, th').length === 1, 'Delete the now-covered second cell from that row — the span replaces it.');" },
        { text: "Make the **Morning** cell span two rows with `rowspan=\"2\"`, and remove the duplicate below.",
          test: "var m = T.$$('td').filter(function (x) { return (x.textContent || '').trim().toLowerCase() === 'morning'; });\nT.expect(m.length === 1, 'There should be exactly ONE Morning cell left (found ' + m.length + ').');\nT.expect(m[0] && m[0].getAttribute('rowspan') === '2', 'Give the remaining Morning cell rowspan=\"2\".');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Class schedule</h1>\n  <table border=\"1\">\n    <tr>\n      <td>Weekend workshop</td>\n      <td>delete me when spanning</td>\n    </tr>\n    <tr>\n      <td>Morning</td>\n      <td>HTML basics</td>\n    </tr>\n    <tr>\n      <td>Morning</td>\n      <td>Table practice</td>\n    </tr>\n  </table>\n</body>\n</html>\n" }
      ],
      hints: [
        "`<td colspan=\"2\">Weekend workshop</td>` — and remove its old neighbor cell.",
        "For the rowspan: keep the FIRST Morning cell with rowspan=\"2\", delete the second row's Morning cell (that row keeps only its lesson cell)."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Class schedule</h1>\n  <table border=\"1\">\n    <tr>\n      <td colspan=\"2\">Weekend workshop</td>\n    </tr>\n    <tr>\n      <td rowspan=\"2\">Morning</td>\n      <td>HTML basics</td>\n    </tr>\n    <tr>\n      <td>Table practice</td>\n    </tr>\n  </table>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u3-4",
      title: "Captions & footers",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Finishing touches that make data tables self-explanatory:\n\n- `<caption>` — the table's visible title, written **immediately after** `<table>`\n- `<tfoot>` — footer row(s) for totals and summaries\n\nA table with a caption, head, body and foot reads like a well-labeled spreadsheet.",
      steps: [
        { text: "Add a `<caption>` right after the opening `<table>` tag: **Monthly expenses**.",
          test: "T.expect(T.$('table caption'), 'Add <caption>Monthly expenses</caption> as the FIRST thing inside <table>.');\nT.expect((T.text('caption') || '').toLowerCase().indexOf('monthly') !== -1, 'Caption text: Monthly expenses.');" },
        { text: "Add a `<tfoot>` with a row showing **Total** and **$1,150**.",
          test: "T.expect(T.$('table tfoot'), 'Add a <tfoot> section after <tbody>.');\nvar txt = (T.text('tfoot') || '').toLowerCase();\nT.expect(txt.indexOf('total') !== -1 && txt.indexOf('1,150') !== -1, 'The tfoot row should show Total and $1,150.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Budget</h1>\n  <table border=\"1\">\n    <thead>\n      <tr><th>Item</th><th>Cost</th></tr>\n    </thead>\n    <tbody>\n      <tr><td>Rent</td><td>$900</td></tr>\n      <tr><td>Groceries</td><td>$250</td></tr>\n    </tbody>\n  </table>\n</body>\n</html>\n" }
      ],
      hints: [
        "`<table> <caption>Monthly expenses</caption> <thead>…` — caption comes before everything else in the table.",
        "The footer mirrors a body row: `<tfoot> <tr> <td>Total</td> <td>$1,150</td> </tr> </tfoot>`."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Budget</h1>\n  <table border=\"1\">\n    <caption>Monthly expenses</caption>\n    <thead>\n      <tr><th>Item</th><th>Cost</th></tr>\n    </thead>\n    <tbody>\n      <tr><td>Rent</td><td>$900</td></tr>\n      <tr><td>Groceries</td><td>$250</td></tr>\n    </tbody>\n    <tfoot>\n      <tr><td>Total</td><td>$1,150</td></tr>\n    </tfoot>\n  </table>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-quiz-3",
      title: "Unit 3 quiz: Tables",
      kind: "quiz", xp: 10,
      brief: "Rows, cells, headers and spans. 80% to pass.",
      questions: [
        { q: "The correct hierarchy of table tags is…",
          choices: ["table → tr → td", "table → td → tr", "tr → table → td", "td → tr → table"],
          answer: 0, explain: "The table holds rows (tr); rows hold cells (td). Cells never sit directly in a table." },
        { q: "What's the difference between `<td>` and `<th>`?",
          choices: ["<th> is a header cell — bold by default and announced as a header", "<th> is taller", "<td> can't hold text", "No difference"],
          answer: 0, explain: "th = table header. It also helps screen readers connect data cells to their column labels." },
        { q: "What does this cell do?",
          code: "<td colspan=\"3\">Grand total</td>",
          lang: "html",
          choices: ["Stretches across 3 columns", "Stretches down 3 rows", "Repeats 3 times", "Creates 3 new columns"],
          answer: 0, explain: "colspan = columns to span. rowspan is the vertical cousin." },
        { q: "When a cell uses `rowspan=\"2\"`, the row below it should…",
          choices: ["Omit the cell that would be covered", "Repeat the same cell", "Use an empty <td>", "Add colspan too"],
          answer: 0, explain: "Spanned-over cells are simply not written — the span occupies their space." },
        { q: "Which sections can a full table have, in order?",
          choices: ["caption, thead, tbody, tfoot", "header, main, footer", "title, body, end", "thead, caption, tfoot, tbody"],
          answer: 0, explain: "Caption first (the title), then head, body and foot — like a labeled spreadsheet." },
        { q: "Should you use tables for page **layout** (columns, sidebars)?",
          choices: ["No — tables are for data; layout is CSS's job (Flexbox/Grid)", "Yes, that's their main use", "Only on mobile", "Only with tbody"],
          answer: 0, explain: "1990s websites did layout with tables; modern CSS replaced that completely. Keep tables for actual data." }
      ]
    },

    {
      id: "html-u3-p",
      title: "Project: Pricing table",
      kind: "web", chip: "HTML", xp: 40, project: true, mins: 30,
      brief: "Build the classic **pricing table** every SaaS site has — three plans, feature rows, and a spanning call-to-action row. All the table skills from this unit in one artifact.",
      steps: [
        { text: "A `<table>` with a `<caption>` that says **Choose your plan**.",
          test: "T.expect(T.$('table caption'), 'Start the table with a <caption>.');\nT.expect((T.text('caption') || '').toLowerCase().indexOf('choose your plan') !== -1, 'Caption: Choose your plan.');" },
        { text: "A `<thead>` row of four `<th>`: an **empty corner** cell, then **Free**, **Pro**, **Team**.",
          test: "var ths = T.$$('thead th');\nT.expect(ths.length === 4, 'The header row needs 4 <th> cells (empty + 3 plans) — found ' + ths.length + '.');\nvar txt = ths.map(function (h) { return h.textContent.toLowerCase(); }).join(' ');\nT.expect(txt.indexOf('free') !== -1 && txt.indexOf('pro') !== -1 && txt.indexOf('team') !== -1, 'Name the plans Free, Pro and Team.');" },
        { text: "A `<tbody>` with at least **3 feature rows**, each: a `<th>` feature name + three `<td>` values (✓ / ✕ / numbers…).",
          test: "var rows = T.$$('tbody tr');\nT.expect(rows.length >= 3, 'Add at least 3 feature rows in <tbody> — found ' + rows.length + '.');\nvar ok = rows.every(function (r) { return r.querySelectorAll('th').length === 1 && r.querySelectorAll('td').length === 3; });\nT.expect(ok, 'Each body row: one <th> (the feature name) + three <td> (one per plan).');" },
        { text: "A **Price** row exists, showing $0 for Free.",
          test: "var priceRow = T.$$('tbody tr').filter(function (r) { return (r.querySelector('th') || {}).textContent && r.querySelector('th').textContent.toLowerCase().indexOf('price') !== -1; })[0];\nT.expect(priceRow, 'One feature row should be Price.');\nT.expect((priceRow.textContent || '').indexOf('$0') !== -1, 'Free costs $0.');" },
        { text: "A `<tfoot>` row with **one cell spanning all 4 columns** that says **14-day trial on every paid plan**.",
          test: "var f = T.$('tfoot td, tfoot th');\nT.expect(f, 'Add a <tfoot> with one cell.');\nT.expect(f.getAttribute('colspan') === '4', 'Give that cell colspan=\"4\".');\nT.expect((f.textContent || '').toLowerCase().indexOf('trial') !== -1, 'It should mention the 14-day trial.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>CloudBox</h1>\n  <!-- caption → thead (corner + Free/Pro/Team) → tbody (3+ feature rows) → tfoot (colspan 4) -->\n\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* A little polish so your table looks like a real pricing page.\n   (Given for free — CSS is the next course!) */\nbody { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; }\ntable { border-collapse: collapse; background: white; }\ncaption { font-size: 20px; font-weight: bold; padding: 12px; }\nth, td { border: 1px solid #e2e8f0; padding: 10px 18px; text-align: center; }\nthead th { background: #0ea5e9; color: white; }\ntbody th { text-align: left; background: #f1f5f9; }\ntfoot td { background: #fef9c3; font-style: italic; }\n" }
      ],
      hints: [
        "Header: `<thead><tr><th></th><th>Free</th><th>Pro</th><th>Team</th></tr></thead>` — the first th stays empty.",
        "A feature row: `<tr><th>Projects</th><td>3</td><td>50</td><td>Unlimited</td></tr>`",
        "Footer: `<tfoot><tr><td colspan=\"4\">14-day trial on every paid plan</td></tr></tfoot>`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>CloudBox</h1>\n  <table>\n    <caption>Choose your plan</caption>\n    <thead>\n      <tr>\n        <th></th>\n        <th>Free</th>\n        <th>Pro</th>\n        <th>Team</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th>Price</th>\n        <td>$0</td>\n        <td>$9/mo</td>\n        <td>$29/mo</td>\n      </tr>\n      <tr>\n        <th>Projects</th>\n        <td>3</td>\n        <td>50</td>\n        <td>Unlimited</td>\n      </tr>\n      <tr>\n        <th>Support</th>\n        <td>✕</td>\n        <td>✓</td>\n        <td>✓ Priority</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <td colspan=\"4\">14-day trial on every paid plan</td>\n      </tr>\n    </tfoot>\n  </table>\n</body>\n</html>\n"
      }
    }
  ]
});
