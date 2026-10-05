/* On-Call & Incidents — Unit 2: Reading the logs */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  /* ---- a deterministic access log ----
     Lines are "HH:MM:SS METHOD PATH STATUS MS". A seeded generator rather
     than a pasted file: the answers below are computed from the same text
     the learner reads, so the key can never drift from the log. */
  function rng(seed) {
    var s = seed >>> 0;
    return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function clock(sec) { return pad(Math.floor(sec / 3600)) + ":" + pad(Math.floor(sec % 3600 / 60)) + ":" + pad(sec % 60); }
  function secs(hms) { var p = hms.split(":"); return +p[0] * 3600 + +p[1] * 60 + +p[2]; }
  function pick(r, table) {
    var x = r(), acc = 0;
    for (var i = 0; i < table.length; i++) { acc += table[i][1]; if (x < acc) return table[i][0]; }
    return table[table.length - 1][0];
  }
  function between(r, lo, hi) { return lo + Math.floor(r() * (hi - lo + 1)); }

  var PATHS = [["/", 0.3], ["/search", 0.2], ["/product", 0.25], ["/cart", 0.1], ["/checkout", 0.15]];

  /* The checkout incident: a deploy at 13:58:03 breaks /checkout. Some
     background noise first — a rare 503 on / all along, slow searches whose
     times start with 50 — so the naive greps give the wrong answers. */
  var DEPLOY = secs("13:58:03");
  function checkoutLog() {
    var r = rng(4242), out = [];
    for (var t = secs("13:50:00"); t < secs("14:10:00"); t += 4) {
      var path = pick(r, PATHS), method = path === "/checkout" ? "POST" : "GET";
      var status = 200, ms = between(r, 20, 180);
      if (path === "/search") ms = between(r, 120, 560);
      if (path === "/product" && r() < 0.06) status = 404;
      if (path === "/" && r() < 0.03) status = 503;
      if (path === "/checkout" && t >= DEPLOY) {
        var x = r();
        if (x < 0.7) { status = 500; ms = between(r, 30, 90); }
        else if (x < 0.8) { status = 502; ms = between(r, 30, 90); }
      }
      out.push(clock(t) + " " + method + " " + path + " " + status + " " + ms);
    }
    return out.join("\n") + "\n";
  }
  var LOG = checkoutLog();
  var ROWS = LOG.trim().split("\n").map(function (l) { var f = l.split(" "); return { t: f[0], path: f[2], status: f[3], ms: +f[4], line: l }; });
  var TOTAL = ROWS.length;
  var FIVEXX = ROWS.filter(function (x) { return x.status.charAt(0) === "5"; }).length;
  var FIRST_500 = ROWS.filter(function (x) { return x.status === "500"; })[0].t;
  var CHECKOUT_5XX = ROWS.filter(function (x) { return x.path === "/checkout" && x.status.charAt(0) === "5"; }).length;
  var DEPLOYS = L(
    "09:14:40 deploy search v2.3 (alice)",
    "11:02:15 config cart.maxItems 50 -> 100 (sam)",
    "13:58:03 deploy checkout v1.5 (jo)",
    "");

  /* The slow-search incident: nothing fails, /search gets slow after a
     config change at 14:31:20. */
  var CHANGE = secs("14:31:20");
  function slowLog() {
    var r = rng(77), out = [];
    for (var t = secs("14:20:00"); t < secs("14:40:00"); t += 5) {
      var path = pick(r, PATHS), method = path === "/checkout" ? "POST" : "GET";
      var ms = between(r, 20, 180);
      if (path === "/search") ms = t >= CHANGE ? between(r, 2400, 4800) : between(r, 120, 300);
      out.push(clock(t) + " " + method + " " + path + " 200 " + ms);
    }
    return out.join("\n") + "\n";
  }
  var SLOW = slowLog();
  var CHANGES = L(
    "14:02:11 deploy product v4.1 (kim)",
    "14:31:20 config search.cacheTtl 300 -> 0 (alice)",
    "14:35:02 deploy cart v2.0 (sam)",
    "");

  var FS = { "/home/you/incident/access.log": LOG, "/home/you/incident/deploys.log": DEPLOYS };
  /* Test-side helpers, prepended to checks that read notes.txt. */
  var NOTE = L(
    "var notes = T.file('notes.txt') || '';",
    "function note(k) { var m = new RegExp('^' + k + ':\\\\s*(.+?)\\\\s*$', 'm').exec(notes); return m ? m[1] : null; }");

  window.CODELAB.addUnit("oncall", {
    id: "oncall-u2",
    title: "Reading the logs",
    icon: "📜",
    blurb: "Four questions every incident starts with, answered from an access log with the shell: how bad is it, since when, where, and what changed? Plus the incident where nothing fails and everything is slow.",
    cheat: [
      { h: "The log format in this unit", lang: "text", code:
"13:58:12 POST /checkout 500 41\n" +
"   1       2      3      4   5     ← field numbers for cut -f",
        note: "Time, method, path, status, milliseconds. Real logs have more fields; the moves are the same." },
      { h: "How bad?", lang: "sh", code:
"wc -l access.log                              # every request\n" +
"cut -d\" \" -f4 access.log | grep -c 5          # 5xx: count the STATUS column",
        note: "Cut the column first. `grep -c \" 50\"` also matches response times like 503 ms and overcounts." },
      { h: "Since when, and what changed?", lang: "sh", code:
"grep \" 500 \" access.log | head -n 1          # first one\n" +
"cat deploys.log                               # changes, in time order",
        note: "The first error just after a change is the strongest clue you'll get. Check it's not an older, unrelated error first." },
      { h: "Where, and how slow?", lang: "sh", code:
"grep \" 500 \" access.log | cut -d\" \" -f3 | sort | uniq -c | sort -rn\n" +
"sort -k5 -n access.log | tail -n 5            # slowest five",
        note: "`uniq -c` only counts adjacent duplicates, so it always follows `sort`. `-k5` sorts by the fifth field." }
    ],
    lessons: [

      {
        id: "oncall-u2-1",
        title: "How bad is it?",
        kind: "shell", chip: "ONCALL", xp: 20, mins: 10,
        cwd: "/home/you/incident",
        fs: FS,
        brief: "14:05. You're paged: **\"checkout errors elevated\"**. Before anything else, size it. The last 20 minutes of the web server's log are in `access.log`:\n\n```\n13:58:12 POST /checkout 500 41\n```\n\nTime, method, path, **status**, milliseconds.\n\nStart a `notes.txt`. Incident notes are how the next person (and the postmortem) knows what you saw. Write:\n\n- `requests: N`, every request in the log\n- `5xx: N`, how many failed on **our** side (any status starting with 5)\n\nWrite each with `echo`, e.g. `echo \"requests: 123\" > notes.txt`, then `>>` to add the next line.",
        steps: [
          { text: "Count every request, and note it as `requests: N`.",
            test: L(NOTE,
              "T.expect(T.ran(/wc\\s+-l/), 'Count the lines: wc -l access.log');",
              "T.eq(note('requests'), '" + TOTAL + "', 'notes.txt should have a line like  requests: N  with the line count of access.log.');") },
          { text: "Note the server errors as `5xx: N`.",
            test: L(NOTE,
              "T.expect(note('5xx') && /^\\d+$/.test(note('5xx')), 'Add a line like  5xx: N  to notes.txt.');") },
          { text: "The 5xx count is right.", hidden: true,
            test: L(NOTE,
              "T.eq(note('5xx'), '" + FIVEXX + "', 'Not quite. Count the status column only (field 4): some response times contain the same digits as a status code.');") }
        ],
        files: [{ name: "commands.sh", content: L("# Size the incident: how many requests, how many failed?", "", "") }],
        hints: [
          "wc -l access.log counts every line. For the 5xx, take the status column first: cut -d\" \" -f4 access.log, then count the lines containing a 5.",
          "cut -d\" \" -f4 access.log | grep -c 5 — then write both numbers with echo \"requests: …\" > notes.txt and echo \"5xx: …\" >> notes.txt."
        ],
        solution: { "commands.sh": L(
          "wc -l access.log",
          "cut -d\" \" -f4 access.log | grep -c 5",
          "echo \"requests: " + TOTAL + "\" > notes.txt",
          "echo \"5xx: " + FIVEXX + "\" >> notes.txt",
          "") }
      },

      {
        id: "oncall-u2-2",
        title: "Since when, and what changed?",
        kind: "shell", chip: "ONCALL", xp: 20, mins: 10,
        cwd: "/home/you/incident",
        fs: FS,
        brief: "Roughly 70% of outages follow a change to a live system, so the next two questions are **when did it start** and **what changed just before**?\n\n`deploys.log` lists today's deploys and config changes. Add to `notes.txt`:\n\n- `started: HH:MM:SS`, the time of the first **500**\n- `change: …`, the deploy or config change that came just before it, as written in `deploys.log` (e.g. `search v2.3`)\n\nCareful: not every error in the log belongs to this incident.",
        steps: [
          { text: "Find the first 500 in the log.",
            test: L(
              "T.expect(T.ran(/grep[^|]*500[^|]*\\|\\s*head/), 'Filter to the 500s and take the first: grep \" 500 \" access.log | head -n 1');") },
          { text: "Note when it started, as `started: HH:MM:SS`.",
            test: L(NOTE,
              "T.eq(note('started'), '" + FIRST_500 + "', 'notes.txt should have  started:  with the time of the first 500. (A 503 earlier in the log is a different, older problem.)');") },
          { text: "Read the change log.",
            test: L("T.expect(T.ran(/(cat|tail|head|grep)[^|]*deploys\\.log/), 'Read deploys.log, e.g. cat deploys.log');") },
          { text: "The change you noted is the one that lines up.", hidden: true,
            test: L(NOTE,
              "T.expect(note('change'), 'Add a  change:  line naming the deploy or config change.');",
              "T.expect(/checkout\\s+v1\\.5/.test(note('change')), 'Which change happened just before the first 500? Compare the times.');") }
        ],
        files: [{ name: "commands.sh", content: L("# When did checkout start failing, and what changed just before?", "", "") }],
        hints: [
          "grep \" 500 \" access.log | head -n 1 shows the first 500 and its time. Then cat deploys.log and find the entry just before that time.",
          "The first 500 is at " + FIRST_500 + "; the deploy at 13:58:03 is checkout v1.5. echo \"started: " + FIRST_500 + "\" >> notes.txt and echo \"change: checkout v1.5\" >> notes.txt."
        ],
        solution: { "commands.sh": L(
          "grep \" 500 \" access.log | head -n 1",
          "cat deploys.log",
          "echo \"started: " + FIRST_500 + "\" >> notes.txt",
          "echo \"change: checkout v1.5\" >> notes.txt",
          "") }
      },

      {
        id: "oncall-u2-3",
        title: "Where is it failing?",
        kind: "shell", chip: "ONCALL", xp: 20, mins: 10,
        cwd: "/home/you/incident",
        fs: FS,
        brief: "\"Checkout errors\" is what the alert says. Is it **only** checkout? If the cart or search are failing too, it's a different incident and a different mitigation.\n\nCount the 500s **by path**, most first, and add to `notes.txt`:\n\n- `endpoint: /path`, where most of the 500s are\n- `checkout 5xx: N`, every 5xx (500, 502, …) on that path",
        steps: [
          { text: "Count the 500s per path, most first.",
            test: L(
              "T.expect(T.ran(/cut[^|]*-f\\s*3[^|]*\\|\\s*sort\\s*\\|\\s*uniq\\s+-c\\s*\\|\\s*sort\\s+-rn/), 'Take the path column, then sort | uniq -c | sort -rn.');",
              "T.expect(T.ran(/500[\\s\\S]*\\|\\s*cut/), 'Filter to the 500s before cutting the path column.');") },
          { text: "Note the endpoint as `endpoint: /path`.",
            test: L(NOTE, "T.eq(note('endpoint'), '/checkout', 'Which path has almost all of the 500s?');") },
          { text: "The checkout 5xx count is right.", hidden: true,
            test: L(NOTE,
              "T.eq(note('checkout 5xx'), '" + CHECKOUT_5XX + "', 'Count every status starting with 5 on /checkout: filter to the path, then count the status column.');") }
        ],
        files: [{ name: "commands.sh", content: L("# Which path is failing? Is it only that one?", "", "") }],
        hints: [
          "grep \" 500 \" access.log | cut -d\" \" -f3 | sort | uniq -c | sort -rn",
          "For every 5xx on checkout: grep \"/checkout\" access.log | cut -d\" \" -f4 | grep -c 5"
        ],
        solution: { "commands.sh": L(
          "grep \" 500 \" access.log | cut -d\" \" -f3 | sort | uniq -c | sort -rn",
          "grep \"/checkout\" access.log | cut -d\" \" -f4 | grep -c 5",
          "echo \"endpoint: /checkout\" >> notes.txt",
          "echo \"checkout 5xx: " + CHECKOUT_5XX + "\" >> notes.txt",
          "") }
      },

      {
        id: "oncall-u2-4",
        title: "Nothing failing, everything slow",
        kind: "shell", chip: "ONCALL", xp: 20, mins: 10,
        cwd: "/home/you/slow",
        fs: { "/home/you/slow/access.log": SLOW, "/home/you/slow/changes.log": CHANGES },
        brief: "14:40. Support says the site \"feels broken\". The error alert is quiet: every request in the log is a **200**. Slow is an outage too, and status codes won't find it.\n\nSort by the response time (field 5) to see the slowest requests, then check `changes.log`. In a new `notes.txt` write:\n\n- `slow: /path`, the path the slowest requests have in common\n- `change: …`, the change that lines up, as written in `changes.log` (e.g. `product v4.1`)",
        steps: [
          { text: "List the slowest requests by sorting on response time.",
            test: L(
              "T.expect(T.ran(/sort[^|]*-k\\s*5|cut[^|]*-f\\s*5[^|]*\\|\\s*sort[^|]*-n/), 'Sort by the fifth field: sort -k5 -n access.log | tail -n 5');") },
          { text: "Note the slow path as `slow: /path`.",
            test: L(NOTE, "T.eq(note('slow'), '/search', 'What do the slowest requests have in common?');") },
          { text: "The change you noted is the one that lines up.", hidden: true,
            test: L(NOTE,
              "T.expect(T.ran(/(cat|tail|head|grep)[^|]*changes\\.log/), 'Read changes.log.');",
              "T.expect(/search\\.cacheTtl/.test(note('change') || ''), 'Find when /search got slow (look at the times of the slow requests), and the change just before.');") }
        ],
        files: [{ name: "commands.sh", content: L("# Everything returns 200. What's slow, and since when?", "", "") }],
        hints: [
          "sort -k5 -n access.log | tail -n 10 lists the ten slowest. Look at their paths and times.",
          "They're all /search, starting just after 14:31. changes.log has a search change at 14:31:20: echo \"change: config search.cacheTtl 300 -> 0\" >> notes.txt."
        ],
        solution: { "commands.sh": L(
          "sort -k5 -n access.log | tail -n 10",
          "cat changes.log",
          "echo \"slow: /search\" > notes.txt",
          "echo \"change: config search.cacheTtl 300 -> 0\" >> notes.txt",
          "") }
      },

      {
        id: "oncall-u2-quiz",
        title: "Unit 2 quiz: Reading the logs",
        kind: "quiz", xp: 10,
        brief: "How bad, since when, where, what changed, and slow vs. failing. 80% to pass.",
        questions: [
          { q: "Why count errors with `cut -d\" \" -f4 access.log | grep -c 5` rather than `grep -c \" 5\" access.log`?",
            choices: ["The second also matches other columns, like response times", "Because cut makes grep run noticeably faster on big logs", "grep can't count lines on its own", "They always give the same answer"],
            answer: 0, explain: "A fixed-string grep matches anywhere on the line. Cut the status column first and you only count statuses." },
          { q: "The first 503 in the log is an hour before the deploy; the 500s start a minute after it. When did this incident start?",
            choices: ["At the first 503, an hour earlier", "At the time the page went out", "At the first 500, just after the deploy", "It can't be known from logs"],
            answer: 2, explain: "Check an early error belongs to this incident. A rare old 503 is background noise." },
          { q: "What does `sort | uniq -c | sort -rn` give you after cutting the path column?",
            choices: ["Only the paths that appear exactly once in the log", "Each path, with a count, most common first", "The paths in alphabetical order", "The slowest path"],
            answer: 1, explain: "Sort groups duplicates, uniq -c counts each group, sort -rn puts the biggest count first." },
          { q: "Every request returns 200, but users say the site is broken. Where do you look?",
            choices: ["Nowhere: 200 means everything worked", "At the 404s", "At the server's disk space", "At response times: sort by duration"],
            answer: 3, explain: "Slow is an outage too. Status codes won't show it; durations will." },
          { q: "Why write incident notes as you go?",
            choices: ["So the next responder and the postmortem know what you saw and when", "It's required by most version control tools", "To make the incident last longer", "Notes replace the status page"],
            answer: 0, explain: "Memory fades fast under pressure. Notes become the timeline, and they let someone else pick up where you left off." }
        ]
      }
    ]
  });
})();
