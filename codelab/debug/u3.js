/* Debugging & Diagnosis — Unit 3: Reproduce, then isolate */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var DISCOUNT_SRC = L(
    "// Shipped code — don't edit.",
    "function discountFor(total, date, roll) {",
    "  let rate = 0.1;                                  // everyone: 10%",
    "  const day = date.getDay();",
    "  if (day === 0 || day === 6) rate = rate + 0.05;  // weekends: 15%",
    "  if (roll < 0.5) rate = 0;                        // pricing experiment, group B",
    "  return Math.round(total * rate);",
    "}");

  var IMPORT_SRC = L(
    "// The importer's dry run: true if every row in the batch is valid.",
    "// In real life each call is a slow round trip, so every call is counted.",
    "var PROBES = { count: 0 };",
    "function tryImport(batch) {",
    "  PROBES.count++;",
    "  return batch.every(function (row) {",
    "    return typeof row.qty === \"number\" && row.qty >= 0;",
    "  });",
    "}");

  var BUILD_SRC = L(
    "// buildAt(commit) checks the commit out and runs the test suite.",
    "// A real build takes minutes, so every call is counted.",
    "var BUILDS = { count: 0, seen: [] };",
    "function buildAt(commit) {",
    "  BUILDS.count++;",
    "  BUILDS.seen.push(commit.sha);",
    "  return commit.passes;",
    "}");

  var ORIGINAL_BODY = [
    "function formatDate(d) { return d.toISOString().slice(0, 10); }",
    "function sortByName(list) { return list.slice().sort((a, b) => a.label.localeCompare(b.label)); }",
    "function logVisit(page) { visits.push({ page: page, at: formatDate(new Date(2026, 0, 1)) }); }",
    "const visits = [];",
    "const catalog = [",
    "  { label: \"Mug\", price: 12 },",
    "  { label: \"Poster\", price: 20 },",
    "  { label: \"Sticker\" },",
    "  { label: \"Tote\", price: 18 }",
    "];",
    "logVisit(\"shop\");",
    "const sorted = sortByName(catalog);",
    "let html = \"\";",
    "for (const item of sorted) {",
    "  html += \"<li>\" + item.label + \" USD \" + item.price.toFixed(2) + \"</li>\";",
    "}",
    "logVisit(\"render\");",
    "console.log(html);"
  ];

  var CSV_SRC = L(
    "// Shipped — don't edit. Stands in for orders.csv, the nightly export:",
    "// 500 data rows under a header. Pretend it's a 50 MB file you can't",
    "// open in an editor: bisect it, don't read it.",
    "const COLORS = [\"red\", \"green\", \"navy\", \"blue\"];",
    "function exportFile() {",
    "  const lines = [\"id,sku,qty,price\"];",
    "  for (let i = 1; i <= 500; i++) {",
    "    let sku = \"SKU-\" + (100 + i);",
    "    if (i % 97 === 56 && i % 5 === 2) sku = '\"' + sku + \", \" + COLORS[i % 4] + '\"';",
    "    lines.push(i + \",\" + sku + \",\" + (i % 9 + 1) + \",\" + ((i % 13 + 1) * 1.25).toFixed(2));",
    "  }",
    "  return lines;",
    "}",
    "const LINES = exportFile();",
    "",
    "// The importer as shipped: split on commas, then validate.",
    "function parseRowV1(line) {",
    "  const f = line.split(\",\");",
    "  return { id: Number(f[0]), sku: f[1], qty: Number(f[2]), price: Number(f[3]) };",
    "}",
    "function validate(row) {",
    "  if (!Number.isFinite(row.qty)) throw new Error(\"qty is not a number\");",
    "  if (!Number.isFinite(row.price)) throw new Error(\"price is not a number\");",
    "  return row;",
    "}",
    "function importAll(lines, parse) {",
    "  return lines.slice(1).map(function (line) { return validate(parse(line)); });",
    "}",
    "",
    "// tryImport(batch): the dry run on some LINES. Slow — every call counted.",
    "var PROBES = { count: 0 };",
    "function tryImport(batch) {",
    "  PROBES.count++;",
    "  return batch.every(function (line) {",
    "    try { validate(parseRowV1(line)); return true; } catch (e) { return false; }",
    "  });",
    "}");

  window.CODELAB.addUnit("debug", {
    id: "debug-u3",
    title: "Reproduce, then isolate",
    icon: "🔎",
    blurb: "The method at the heart of debugging: make the bug happen on demand, then halve the search space — inputs, history, code — until it has nowhere left to hide.",
    cheat: [
      { h: "Reproduce first", lang: "js", code: L(
        "// flaky — depends on today's date and a coin flip:",
        "discountFor(80, new Date(), Math.random());",
        "// a repro — the same answer every run:",
        "discountFor(80, new Date(2026, 8, 12), 0.2);   // Saturday, group B"),
        note: "If it doesn't fail every time you run it, you can't tell whether your fix worked." },
      { h: "Bisect: halve, don't scan", lang: "js", code: L(
        "let lo = 0, hi = rows.length - 1;       // the bad row is in [lo, hi]",
        "while (lo < hi) {",
        "  const mid = Math.floor((lo + hi) / 2);",
        "  if (tryImport(rows.slice(lo, mid + 1))) lo = mid + 1;  // left half is clean",
        "  else hi = mid;                                          // it's in the left half",
        "}",
        "return lo;"),
        note: "200 rows: 8 checks. A million rows: 20. A linear scan: up to a million." },
      { h: "git bisect is the same loop", lang: "bash", code: L(
        "git bisect start",
        "git bisect bad            # today's build is broken",
        "git bisect good v2.3.0    # the last release worked",
        "# git checks out the middle commit — test it, then:",
        "git bisect good           # or: git bisect bad",
        "git bisect reset          # done: it named the first bad commit"),
        note: "Never re-test the two commits you already know about." },
      { h: "A minimal reproducible example", lang: "js", code: L(
        "// 30 lines, four helpers, a sort and a loop… all of it reduces to:",
        "const item = { label: \"Sticker\" };",
        "item.price.toFixed(2);   // TypeError: … (reading 'toFixed')"),
        note: "Delete until the error changes, then put the last deletion back. What's left IS the bug report." }
    ],
    lessons: [

      {
        id: "debug-u3-1",
        title: "Reproduce it: deterministic, or you are guessing",
        kind: "js", chip: "DEBUG", xp: 15, mins: 14,
        brief: "Bug report #412: *\"Saturday checkout, an $80 cart, a member in pricing group B — the discount came out $0. It should have been $12.\"*\n\nThe first job is not to fix it. It is to make it happen **on demand**. Until you can, you can't tell a fix from a lucky run — and you'll \"fix\" it three times.\n\nThe team's `repro()` calls `discountFor(80, new Date(), Math.random())`. That reads the **real clock** and a **real coin flip**, so it shows the bug only on weekends, and only half of those. A repro that fails *sometimes* isn't a repro. The fix is to stop reading the world and **pass it in**: a fixed date that is a Saturday, and a fixed roll that lands in group B (`roll < 0.5`).\n\nMake `repro()` deterministic, and make it reproduce *exactly* what the report describes. The checks run it twelve times, then swap in a fixed `discountFor` to confirm your repro exercises the reported path — a repro that still shows $0 after the bug is fixed was never testing the bug.",
        steps: [
          { text: "`repro()` gives the same answer every single run.",
            test: L(
              "var runs = [];",
              "for (var i = 0; i < 12; i++) runs.push(repro());",
              "T.expect(runs.every(function (r) { return r === runs[0]; }), 'Ran repro() 12 times and got ' + JSON.stringify(runs) + ' — that is a guess, not a repro. Stop reading the real clock and Math.random: pass a fixed date and roll.');") },
          { text: "It reproduces the report: an $80 Saturday checkout in group B comes out `0`.",
            test: "T.eq(repro(), 0, 'The report says $0 — your repro should show the same wrong answer');" },
          { text: "It exercises the reported path: once the bug is fixed, the same repro shows `12`.",
            test: L(
              "var fixed = function (total, date, roll) {",
              "  var rate = 0.1, day = date.getDay();",
              "  if (day === 0 || day === 6) rate = rate + 0.05;",
              "  return Math.round(total * rate);",
              "};",
              "var after = T.mutate('discountFor', fixed, function () { return repro(); });",
              "T.eq(after, 12, 'With the experiment bug removed, this repro should show the $12 the customer expected — it needs an $80 total, a weekend date and a group-B roll (< 0.5)');") },
          { text: "No clock, no dice: `repro()` never calls `new Date()` or `Math.random()`.",
            test: L(
              "var src = String(repro);",
              "T.expect(!/Math\\.random/.test(src), 'repro() still calls Math.random() — pass a fixed roll instead.');",
              "T.expect(!/new Date\\(\\s*\\)|Date\\.now/.test(src), 'repro() still reads the current time — pass a fixed date, e.g. new Date(2026, 8, 12).');") }
        ],
        files: [
          { name: "script.js", content: L(
            "// Bug report #412: \"Saturday checkout, $80 cart, pricing group B —",
            "// the discount came out $0. It should have been $12.\"",
            "",
            DISCOUNT_SRC,
            "",
            "// The team's repro. It reads the REAL clock and a REAL coin flip,",
            "// so it only shows the bug some of the time. Make it deterministic.",
            "function repro() {",
            "  return discountFor(80, new Date(), Math.random());",
            "}",
            "",
            "console.log(repro(), repro(), repro());",
            "") }
        ],
        hints: [
          "`new Date(2026, 8, 12)` is Saturday 12 September 2026 — months count from 0, so 8 is September.",
          "Group B is any roll below 0.5: pass something like `0.2`.",
          "`return discountFor(80, new Date(2026, 8, 12), 0.2);` — the same inputs every run, so the same output every run."
        ],
        solution: {
          "script.js": L(
            DISCOUNT_SRC,
            "",
            "function repro() {",
            "  return discountFor(80, new Date(2026, 8, 12), 0.2);   // Saturday, group B",
            "}",
            "",
            "console.log(repro(), repro(), repro());",
            "")
        }
      },

      {
        id: "debug-u3-2",
        title: "Bisect the input: 200 rows down to one",
        kind: "js", chip: "DEBUG", xp: 15, mins: 14,
        brief: "The nightly import rejects its whole 200-row file. Somewhere in there is **one** corrupt row. `tryImport(batch)` is the importer's dry run — `true` if every row in a batch is valid — but in real life each call is a slow round trip, so every call is counted in `PROBES.count`.\n\nThe starter checks rows one at a time. It finds the right answer… eventually. Row 137 costs 138 round trips.\n\n**Bisection** finds it in eight. Keep a range `[lo, hi]` that must contain the bad row. Try the left half: if it imports cleanly, the bad row is in the right half; if it fails, it's in the left. Every check throws away half of what's left, so 200 rows take at most 8 checks — and a million would take 20.\n\nThis is the most important idea in the course, and this lesson is graded on the **strategy**, not only the answer: a linear scan that finds row 137 still fails.",
        example: { lang: "js", code: "// the bad row is somewhere in [lo, hi]\nwhile (lo < hi) {\n  const mid = Math.floor((lo + hi) / 2);\n  // tryImport the left half, rows lo..mid — then keep the half that holds it\n}" },
        steps: [
          { text: "`findBadRow(rows)` returns the index of the corrupt row: `137`.",
            test: L(
              "var rows = [];",
              "for (var i = 0; i < 200; i++) rows.push({ id: 'r' + i, qty: i === 137 ? '12' : i % 7 });",
              "PROBES.count = 0;",
              "T.eq(findBadRow(rows), 137, 'row 137 holds qty \"12\" — a string, not a number');") },
          { text: "It needs at most 8 probes for 200 rows — halve, don't scan.",
            test: L(
              "var rows = [];",
              "for (var i = 0; i < 200; i++) rows.push({ id: 'r' + i, qty: i === 137 ? '12' : i % 7 });",
              "PROBES.count = 0;",
              "var got = findBadRow(rows);",
              "T.eq(got, 137, 'still the right row');",
              "T.expect(PROBES.count <= 8, 'You scanned: 200 rows need at most 8 halvings, and you used ' + PROBES.count + ' calls to tryImport.');") },
          { text: "It works wherever the bad row is — the first row, the last row, a bigger file.",
            test: L(
              "function file(n, bad) { var r = []; for (var i = 0; i < n; i++) r.push({ id: i, qty: i === bad ? -1 : 3 }); return r; }",
              "PROBES.count = 0; T.eq(findBadRow(file(200, 0)), 0, 'bad row first');",
              "T.expect(PROBES.count <= 8, 'first row: ' + PROBES.count + ' probes, max 8');",
              "PROBES.count = 0; T.eq(findBadRow(file(200, 199)), 199, 'bad row last');",
              "T.expect(PROBES.count <= 8, 'last row: ' + PROBES.count + ' probes, max 8');",
              "PROBES.count = 0; T.eq(findBadRow(file(1000, 613)), 613, 'a 1,000-row file');",
              "T.expect(PROBES.count <= 10, '1,000 rows: ' + PROBES.count + ' probes, max 10');") }
        ],
        files: [
          { name: "script.js", content: L(
            IMPORT_SRC,
            "",
            "// findBadRow(rows) → the index of the one row that breaks the import.",
            "// Right answer, wrong strategy: one round trip per row.",
            "function findBadRow(rows) {",
            "  for (let i = 0; i < rows.length; i++) {",
            "    if (!tryImport([rows[i]])) return i;",
            "  }",
            "  return -1;",
            "}",
            "") }
        ],
        hints: [
          "Start with `let lo = 0, hi = rows.length - 1;` — the bad row is always somewhere in `[lo, hi]`, and you stop when `lo === hi`.",
          "Each round: `const mid = Math.floor((lo + hi) / 2);` then `tryImport(rows.slice(lo, mid + 1))` tests the left half (slice's end is exclusive, hence `mid + 1`).",
          "Left half clean → `lo = mid + 1`. Left half broken → `hi = mid`. When the loop ends, `lo` is the bad row."
        ],
        solution: {
          "script.js": L(
            IMPORT_SRC,
            "",
            "function findBadRow(rows) {",
            "  let lo = 0, hi = rows.length - 1;          // the bad row is in [lo, hi]",
            "  while (lo < hi) {",
            "    const mid = Math.floor((lo + hi) / 2);",
            "    if (tryImport(rows.slice(lo, mid + 1))) lo = mid + 1;   // left half is clean",
            "    else hi = mid;                                          // it's in the left half",
            "  }",
            "  return lo;",
            "}",
            "")
        }
      },

      {
        id: "debug-u3-3",
        title: "Bisect the history: the commit that broke it",
        kind: "js", chip: "DEBUG", xp: 15, mins: 13,
        brief: "Last release worked. Today's build doesn't. Forty commits sit in between, and **one** of them broke the checkout test.\n\nYou already know the tool: halve the space. Here the space is **history**. Commit 0 is known good; the newest commit is known bad. Build the middle commit — if it passes, the break came later; if it fails, it came at or before it. Keep a known-good and a known-bad commit and close the gap until they are neighbours. The known-bad one is your answer: the **first bad commit**, with a diff small enough to read.\n\n`buildAt(commit)` checks a commit out and runs the tests. A real build takes minutes, so it's counted — and there's a rule the real tool follows too: never spend a build re-testing the two commits you already have answers for.\n\nThis is exactly what `git bisect` automates: you mark one commit `good` and one `bad`, and it checks out the midpoint for you, round after round.",
        steps: [
          { text: "`firstBadCommit(commits)` returns the `sha` of the first commit that fails.",
            test: L(
              "function history(n, firstBad) { var c = []; for (var i = 0; i < n; i++) c.push({ sha: 'c' + (4096 + i * 37).toString(16), passes: i < firstBad }); return c; }",
              "var h = history(40, 27);",
              "BUILDS.count = 0; BUILDS.seen = [];",
              "T.eq(firstBadCommit(h), h[27].sha, 'commit 27 is the first one whose build fails');") },
          { text: "It needs at most 6 builds for 40 commits.",
            test: L(
              "function history(n, firstBad) { var c = []; for (var i = 0; i < n; i++) c.push({ sha: 'c' + (4096 + i * 37).toString(16), passes: i < firstBad }); return c; }",
              "var h = history(40, 27);",
              "BUILDS.count = 0; BUILDS.seen = [];",
              "firstBadCommit(h);",
              "T.expect(BUILDS.count <= 6, 'That took ' + BUILDS.count + ' builds. 40 commits need at most 6 — build the MIDDLE commit each round.');") },
          { text: "It never re-builds the commits you already know about — and handles a break right at either end.",
            test: L(
              "function history(n, firstBad) { var c = []; for (var i = 0; i < n; i++) c.push({ sha: 'c' + (4096 + i * 37).toString(16), passes: i < firstBad }); return c; }",
              "var cases = [[40, 27], [40, 1], [40, 39], [100, 64]];",
              "cases.forEach(function (cs) {",
              "  var h = history(cs[0], cs[1]);",
              "  BUILDS.count = 0; BUILDS.seen = [];",
              "  T.eq(firstBadCommit(h), h[cs[1]].sha, cs[0] + ' commits, first bad at ' + cs[1]);",
              "  T.expect(BUILDS.seen.indexOf(h[0].sha) === -1, 'You re-built commit 0 — it is the release you already KNOW is good.');",
              "  T.expect(BUILDS.seen.indexOf(h[h.length - 1].sha) === -1, 'You re-built the newest commit — you already KNOW it is bad.');",
              "});",
              "T.expect(BUILDS.count <= 7, '100 commits: ' + BUILDS.count + ' builds, max 7');") }
        ],
        files: [
          { name: "script.js", content: L(
            BUILD_SRC,
            "",
            "// firstBadCommit(commits): commits are oldest first. commits[0] is",
            "// the last release — known GOOD. The newest is today — known BAD.",
            "// Return the sha of the first commit whose build fails.",
            "function firstBadCommit(commits) {",
            "  for (let i = 0; i < commits.length; i++) {",
            "    if (!buildAt(commits[i])) return commits[i].sha;",
            "  }",
            "  return null;",
            "}",
            "") }
        ],
        hints: [
          "Keep two indexes you KNOW the answer for: `let good = 0, bad = commits.length - 1;` — neither ever needs building.",
          "While there's a commit between them (`bad - good > 1`), build the middle: `const mid = Math.floor((good + bad) / 2);`",
          "Passed → `good = mid`. Failed → `bad = mid`. When they're neighbours, `commits[bad].sha` is the first bad commit."
        ],
        solution: {
          "script.js": L(
            BUILD_SRC,
            "",
            "function firstBadCommit(commits) {",
            "  let good = 0, bad = commits.length - 1;   // answers we already have",
            "  while (bad - good > 1) {",
            "    const mid = Math.floor((good + bad) / 2);",
            "    if (buildAt(commits[mid])) good = mid;",
            "    else bad = mid;",
            "  }",
            "  return commits[bad].sha;",
            "}",
            "")
        }
      },

      {
        id: "debug-u3-4",
        title: "The minimal reproducible example",
        kind: "js", chip: "DEBUG", xp: 15, mins: 14,
        brief: "A bug report that says *\"here's my whole script, it crashes\"* gets ignored — by colleagues, by library maintainers, and by you in a week. What gets a bug fixed is a **minimal reproducible example**: the smallest code that still fails the *same* way.\n\nThe method is mechanical. Delete something. Run it. If it still throws the **same** error — same name, same message — the deletion stays. If the error changes or vanishes, you deleted part of the bug: undo that one. Repeat until nothing more can go.\n\nSomething remarkable happens along the way: the bug usually becomes **obvious**. Four helpers, a sort, a visit logger and a loop reduce to two lines, and the two lines are the explanation.\n\n`ORIGINAL` is the crashing script, as reported. `MINIMAL` starts as a copy of it. Cut `MINIMAL` down to **6 lines or fewer** that throw the identical error — through the same operation, not a hand-written `throw` — with none of the irrelevant helpers left.",
        steps: [
          { text: "`MINIMAL` still throws exactly the same error as `ORIGINAL`.",
            test: L(
              "function thrown(src) { try { new Function(src)(); return null; } catch (e) { return e.name + ': ' + e.message; } }",
              "var want = thrown(ORIGINAL);",
              "T.expect(want, 'ORIGINAL should throw — leave it exactly as shipped.');",
              "T.eq(thrown(MINIMAL), want, 'MINIMAL must fail the SAME way — if the error changed, your last deletion removed part of the bug; put it back');") },
          { text: "It is 6 lines or fewer (blank lines don't count).",
            test: L(
              "var n = MINIMAL.split('\\n').filter(function (l) { return l.trim() !== ''; }).length;",
              "T.expect(n <= 6, 'MINIMAL has ' + n + ' non-blank lines — keep deleting whatever the error does not need (6 max).');") },
          { text: "None of the irrelevant helpers survive, and it fails through the same operation — no hand-written `throw`.",
            test: L(
              "['formatDate', 'sortByName', 'logVisit', 'visits', 'catalog'].forEach(function (w) {",
              "  T.expect(MINIMAL.indexOf(w) === -1, 'MINIMAL still mentions ' + w + ' — the error happens without it.');",
              "});",
              "T.expect(!/\\bthrow\\b/.test(MINIMAL), 'Reproduce the error, don\\'t fake it: no throw statements.');",
              "T.expect(MINIMAL.indexOf('toFixed') !== -1, 'The crash happens in a .toFixed() call — the minimal example has to fail through that same operation.');",
              "function thrown(src) { try { new Function(src)(); return null; } catch (e) { return e.name + ': ' + e.message; } }",
              "T.eq(thrown(MINIMAL), thrown(ORIGINAL), 'and it still throws the same error');") }
        ],
        files: [
          { name: "script.js", content: L(
            "// The crashing script, exactly as reported. Don't edit ORIGINAL.",
            "const ORIGINAL = `" + ORIGINAL_BODY.join("\n") + "`;",
            "",
            "// Cut this copy down: delete, re-run, keep the deletion only if the",
            "// error is IDENTICAL. Stop at 6 lines or fewer.",
            "const MINIMAL = `" + ORIGINAL_BODY.join("\n") + "`;",
            "",
            "for (const [label, src] of [[\"ORIGINAL\", ORIGINAL], [\"MINIMAL\", MINIMAL]]) {",
            "  try { new Function(src)(); console.log(label + \": no error\"); }",
            "  catch (e) { console.log(label + \": \" + e.name + \": \" + e.message); }",
            "}",
            "") }
        ],
        hints: [
          "The error is `Cannot read properties of undefined (reading 'toFixed')`. Which item has no `price`? Everything that isn't about that one item is a candidate for deletion.",
          "The helpers, the visit log and the sort don't matter — the loop reaches the Sticker either way. Delete them one at a time and re-run to be sure.",
          "It reduces to two lines: an object with no `price`, and a `.toFixed(2)` on its missing price."
        ],
        solution: {
          "script.js": L(
            "const ORIGINAL = `" + ORIGINAL_BODY.join("\n") + "`;",
            "",
            "const MINIMAL = `const item = { label: \"Sticker\" };",
            "item.price.toFixed(2);`;",
            "",
            "for (const [label, src] of [[\"ORIGINAL\", ORIGINAL], [\"MINIMAL\", MINIMAL]]) {",
            "  try { new Function(src)(); console.log(label + \": no error\"); }",
            "  catch (e) { console.log(label + \": \" + e.name + \": \" + e.message); }",
            "}",
            "")
        }
      },

      {
        id: "debug-u3-p",
        title: "Project: The import that fails at row ???",
        kind: "js", chip: "DEBUG", xp: 50, mins: 40, project: true,
        brief: "Every morning the nightly import of `orders.csv` fails with one line of log: `qty is not a number`. Five hundred rows, no row number. This project is the whole method from this unit, end to end:\n\n- **Isolate** — bisect the file down to the one line that breaks it, using the counted dry run `tryImport(lines)`.\n- **Minimize** — write the smallest CSV line that makes the shipped parser fail the same way. That line is your bug report, and later your regression test.\n- **Fix** — write `parseRow(line)`, a parser that handles what `parseRowV1` got wrong, so all 500 rows import.\n- **Prove it** — your minimal line must now parse cleanly, and ordinary lines must parse exactly as before.\n\n`LINES` holds the file — a header at index 0, then 500 data rows. The generator is in the file, but treat it like a 50 MB export you can't open in an editor: bisect it, don't read it. Once you've found the bad line, *print it* — the shape of the bug will be staring back at you.",
        steps: [
          { text: "`findBadLine(lines)` returns the index in `LINES` of the line that breaks the import.",
            test: L(
              "PROBES.count = 0;",
              "var got = findBadLine(LINES);",
              "var want = -1;",
              "for (var i = 1; i < LINES.length; i++) { try { validate(parseRowV1(LINES[i])); } catch (e) { want = i; break; } }",
              "T.eq(got, want, 'the index in LINES of the one line the shipped importer rejects (the header is index 0)');") },
          { text: "It uses at most 9 dry runs on the 500-row file — and works on files it has never seen.",
            test: L(
              "PROBES.count = 0;",
              "findBadLine(LINES);",
              "T.expect(PROBES.count <= 9, '500 rows need at most 9 halvings — you used ' + PROBES.count + ' dry runs.');",
              "function file(n, bad) { var l = ['id,sku,qty,price']; for (var i = 1; i <= n; i++) l.push(i + ',SKU-' + i + ',' + (i === bad ? 'x' : 2) + ',1.00'); return l; }",
              "PROBES.count = 0; T.eq(findBadLine(file(500, 1)), 1, 'bad line right after the header');",
              "T.expect(PROBES.count <= 9, 'first data line: ' + PROBES.count + ' dry runs, max 9');",
              "PROBES.count = 0; T.eq(findBadLine(file(500, 500)), 500, 'bad line last');",
              "PROBES.count = 0; T.eq(findBadLine(file(1000, 777)), 777, 'a 1,000-row file');",
              "T.expect(PROBES.count <= 10, '1,000 rows: ' + PROBES.count + ' dry runs, max 10');") },
          { text: "`MINIMAL_ROW` is a line of 20 characters or fewer that breaks `parseRowV1` with the same error.",
            test: L(
              "T.expect(typeof MINIMAL_ROW === 'string' && MINIMAL_ROW.length > 0, 'Define MINIMAL_ROW as a one-line CSV string.');",
              "T.expect(MINIMAL_ROW.length <= 20, 'MINIMAL_ROW is ' + MINIMAL_ROW.length + ' characters — cut it to 20 or fewer.');",
              "T.expect(MINIMAL_ROW.indexOf('\\n') === -1, 'One line only.');",
              "T.expect(MINIMAL_ROW.indexOf('SKU') === -1, 'Strip the real data out — the bug does not care what the SKU is called.');",
              "var msg = null;",
              "try { validate(parseRowV1(MINIMAL_ROW)); } catch (e) { msg = e.message; }",
              "T.eq(msg, 'qty is not a number', 'the shipped parser must fail on MINIMAL_ROW with the same error the import logs');") },
          { text: "`parseRow(line)` handles what `parseRowV1` got wrong: all 500 rows import.",
            test: L(
              "T.expect(typeof parseRow === 'function', 'Write parseRow(line).');",
              "var rows = importAll(LINES, parseRow);",
              "T.eq(rows.length, 500, 'every data row imports');",
              "var bad = -1;",
              "for (var i = 1; i < LINES.length; i++) { try { validate(parseRowV1(LINES[i])); } catch (e) { bad = i; break; } }",
              "var r = rows[bad - 1];",
              "T.eq(typeof r.qty, 'number', 'the formerly broken row has a numeric qty');",
              "T.eq(r.sku.indexOf(',') !== -1 && r.sku.indexOf('\"') === -1, true, 'its SKU keeps its comma and loses the quote marks: got ' + JSON.stringify(r.sku));") },
          { text: "Prove it: your minimal line now parses cleanly, and plain lines parse exactly as they did before.",
            test: L(
              "var fixed = null;",
              "try { fixed = validate(parseRow(MINIMAL_ROW)); } catch (e) { fixed = e.message; }",
              "T.expect(fixed && typeof fixed === 'object', 'parseRow(MINIMAL_ROW) should now pass validation — got: ' + JSON.stringify(fixed));",
              "['1,SKU-101,2,2.50', '42,SKU-142,7,13.75', '500,SKU-600,6,6.25'].forEach(function (line) {",
              "  T.eq(parseRow(line), parseRowV1(line), 'a plain line must parse exactly as before: ' + line);",
              "});",
              "T.eq(parseRow('9,\"a, b\",3,1.50'), { id: 9, sku: 'a, b', qty: 3, price: 1.5 }, 'a quoted field with a comma inside it');") }
        ],
        files: [
          { name: "script.js", content: L(
            CSV_SRC,
            "",
            "// 1) findBadLine(lines) → the index in LINES of the line that breaks",
            "//    the import. Bisect the data rows (1 … 500) with tryImport.",
            "function findBadLine(lines) {",
            "  return -1;",
            "}",
            "",
            "// 2) Once you've found it, print it and look at it:",
            "// console.log(LINES[findBadLine(LINES)]);",
            "",
            "// 3) The smallest line that breaks parseRowV1 the same way.",
            "const MINIMAL_ROW = \"\";",
            "",
            "// 4) A parser that gets it right. Same output shape as parseRowV1.",
            "function parseRow(line) {",
            "  return parseRowV1(line);",
            "}",
            "") }
        ],
        hints: [
          "findBadLine is Lesson 2's loop over the data rows: `let lo = 1, hi = lines.length - 1;` and `tryImport(lines.slice(lo, mid + 1))` on the left half each round.",
          "Print the line you found. Its SKU is wrapped in double quotes because it contains a comma — and `split(\",\")` splits inside the quotes, pushing the colour into the qty column. So the minimal row needs a quoted field containing a comma: something like `1,\"a,b\",2,3`.",
          "parseRow: walk the line one character at a time. A `\"` toggles an `inQuotes` flag (and isn't kept); a `,` ends the field only when you're NOT in quotes; anything else joins the current field. Then build `{ id, sku, qty, price }` exactly as parseRowV1 does."
        ],
        solution: {
          "script.js": L(
            CSV_SRC,
            "",
            "function findBadLine(lines) {",
            "  let lo = 1, hi = lines.length - 1;        // the bad line is in [lo, hi]",
            "  while (lo < hi) {",
            "    const mid = Math.floor((lo + hi) / 2);",
            "    if (tryImport(lines.slice(lo, mid + 1))) lo = mid + 1;",
            "    else hi = mid;",
            "  }",
            "  return lo;",
            "}",
            "",
            "console.log(LINES[findBadLine(LINES)]);",
            "",
            "const MINIMAL_ROW = '1,\"a,b\",2,3';",
            "",
            "function parseRow(line) {",
            "  const f = [];",
            "  let cur = \"\", inQuotes = false;",
            "  for (const ch of line) {",
            "    if (ch === '\"') inQuotes = !inQuotes;",
            "    else if (ch === \",\" && !inQuotes) { f.push(cur); cur = \"\"; }",
            "    else cur += ch;",
            "  }",
            "  f.push(cur);",
            "  return { id: Number(f[0]), sku: f[1], qty: Number(f[2]), price: Number(f[3]) };",
            "}",
            "")
        }
      },

      {
        id: "debug-quiz-3",
        title: "Unit 3 quiz: Reproduce, then isolate",
        kind: "quiz", xp: 10,
        brief: "Deterministic repros, bisection over inputs and history, and minimal examples. 80% to pass.",
        questions: [
          { q: "Why must a repro fail every time before you try to fix the bug?",
            choices: ["Because flaky tests get skipped by CI runners", "Otherwise a passing run can't tell a fix from luck", "So the bug report looks more convincing", "Because a debugger only attaches to code that is failing"],
            answer: 1, explain: "If the bug shows up one run in three, then three green runs after your change prove nothing — the fix and a lucky streak look identical. A deterministic repro turns \"it seems better\" into a real before/after test. That's why the first move is to pin down the clock, the randomness and the inputs." },
          { q: "A file of 1,000 rows has exactly one bad row. At most how many halving checks does bisection need?",
            choices: ["10", "20", "100", "500"],
            answer: 0, explain: "Each check throws away half of the remaining rows: 1000 → 500 → 250 → 125 → 63 → 32 → 16 → 8 → 4 → 2 → 1. That's 10 checks, because 2 to the power 10 is 1,024. A linear scan could need all 1,000; doubling the file only adds one more bisection check." },
          { q: "During `git bisect`, the midpoint build passes. What do you learn?",
            choices: ["The midpoint commit introduced the bug", "The bug is in a commit at or before the midpoint", "The bug was introduced after the midpoint", "The test is flaky and should be rerun"],
            answer: 2, explain: "A passing midpoint is a new known-good commit: everything up to it is fine, so the breaking change must come later. You move the good marker up to the midpoint and test halfway between it and the known-bad commit. A failing midpoint would move the bad marker down instead." },
          { q: "While minimizing, you delete a line and the error message changes. What should you do?",
            choices: ["Keep going — any error means the bug is still there", "Undo that deletion: it was part of the bug", "Delete the line above it as well", "Start again from the original script"],
            answer: 1, explain: "A different error means you've produced a different bug — the line you removed was involved in the original failure. Put it back and try deleting something else. The rule is \"same name, same message\": only deletions that leave the error identical get to stay." },
          { q: "Why does the lesson's `repro()` pass a fixed `new Date(2026, 8, 12)` instead of calling `new Date()`?",
            choices: ["`new Date()` returns the wrong time zone inside a Web Worker sandbox", "Fixed dates run faster than reading the system clock", "The date constructor with no arguments is deprecated", "The bug depends on the day; the real clock changes run to run"],
            answer: 3, explain: "The discount bug only appears on weekends, so a repro that reads the real clock shows it on some days and not others. Passing a date in — dependency injection — makes the input fixed, so the output is fixed. The same goes for Math.random: pass the roll in rather than rolling it." },
          { q: "What makes a minimal reproducible example worth the effort of writing?",
            choices: ["It makes the cause obvious and gives others something runnable", "It is required before a debugger can be attached to the running program", "It makes the original program run faster", "It removes the need to write a test for the fix"],
            answer: 0, explain: "Stripping away everything irrelevant usually exposes the cause — here, four helpers and a loop collapsed into \"a missing price, then .toFixed()\". It's also something a colleague or maintainer can run in seconds. And it makes the ideal regression test for the fix, rather than replacing one." }
        ]
      }
    ]
  });
})();
