/* On-Call & Incidents — Unit 7: Two incidents */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  /* The same seeded access-log generator as Unit 2, so the keys below are
     computed from the text the learner reads. */
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
  function makeLog(seed, from, to, step, paths, fail) {
    var r = rng(seed), out = [];
    for (var t = secs(from); t < secs(to); t += step) {
      var path = pick(r, paths), method = path === "/checkout" ? "POST" : "GET";
      var status = 200, ms = between(r, 20, 180);
      var f = fail(t, path, r);
      if (f) { status = f; ms = between(r, 5, 60); }
      out.push(clock(t) + " " + method + " " + path + " " + status + " " + ms);
    }
    return out.join("\n") + "\n";
  }
  function firstWith(log, status) {
    var lines = log.trim().split("\n");
    for (var i = 0; i < lines.length; i++) if (lines[i].split(" ")[3] === status) return lines[i].split(" ")[0];
    return null;
  }

  var IDX = "function at(rx) { for (var i = 0; i < T.commands.length; i++) if (rx.test(T.commands[i])) return i; return -1; }";
  var NOTE = L(
    "var notes = T.file('/home/you/notes.txt') || '';",
    "function note(k) { var m = new RegExp('^' + k + ':\\\\s*(.+?)\\\\s*$', 'm').exec(notes); return m ? m[1] : null; }");
  var POSTGRES = {
    env: { required: ["POSTGRES_PASSWORD"] },
    listen: { port: "5432", host: "0.0.0.0" },
    logs: ["database system is ready to accept connections"],
    data: "/var/lib/postgresql/data",
    sigterm: "graceful"
  };

  /* ---- Incident 1: 3.2 ignores DATABASE_URL ---- */
  var DEPLOY_32 = secs("15:42:10");
  var LOG1 = makeLog(901, "15:30:00", "15:55:00", 5,
    [["/", 0.35], ["/product", 0.3], ["/cart", 0.15], ["/checkout", 0.2]],
    function (t, path, r) {
      if (path === "/checkout" && t >= DEPLOY_32) return 500;
      if (path === "/" && r() < 0.02) return 503;
      return 0;
    });
  var STARTED_1 = firstWith(LOG1, "500");
  var FS1 = {
    "/home/you/releases/3.1/Dockerfile": L("FROM node:20-slim", "WORKDIR /app", "COPY . .", "CMD [\"node\", \"server.js\"]", ""),
    "/home/you/releases/3.1/server.js": "// shop 3.1\n",
    "/home/you/releases/3.2/Dockerfile": L("FROM node:20-slim", "WORKDIR /app", "COPY . .", "CMD [\"node\", \"server.js\", \"--pool\"]", ""),
    "/home/you/releases/3.2/server.js": "// shop 3.2: new connection pool\n",
    "/home/you/access.log": LOG1,
    "/home/you/deploys.log": L(
      "Wed 09:05 deploy shop 3.1 (jo)",
      "Wed 15:42:10 deploy shop 3.2 (jo): new database connection pool",
      "")
  };
  var APPS1 = {
    "node server.js": {
      listen: { port: "3000", host: "0.0.0.0" }, logs: ["shop 3.1 listening on :3000"],
      routes: { "/": "shop 3.1", "/health": "@health" }, connects: "$DATABASE_URL", sigterm: "graceful"
    },
    /* 3.2's new pool reads its own hard-coded default instead of DATABASE_URL. */
    "node server.js --pool": {
      listen: { port: "3000", host: "0.0.0.0" }, logs: ["shop 3.2 listening on :3000", "pool: connecting to postgres://database:5432/shop"],
      routes: { "/": "shop 3.2", "/health": "@health" }, connects: "postgres://database:5432/shop", sigterm: "graceful"
    },
    "postgres": POSTGRES
  };
  var SETUP1 = L(
    "cd /home/you/releases/3.1", "docker build -t shop:3.1 .",
    "cd /home/you/releases/3.2", "docker build -t shop:3.2 .",
    "cd /home/you",
    "docker network create shopnet",
    "docker run -d --name db --network shopnet -e POSTGRES_PASSWORD=example postgres:16",
    "docker run -d --name web --network shopnet -p 8080:3000 --restart always -e DATABASE_URL=postgres://db:5432/shop shop:3.2");

  /* ---- Incident 2: two changes, one outage ---- */
  var SEARCH_CHANGE = secs("14:31:05");
  var LOG2 = makeLog(1777, "14:20:00", "14:45:00", 5,
    [["/", 0.3], ["/search", 0.25], ["/product", 0.25], ["/cart", 0.2]],
    function (t, path) { return path === "/search" && t >= SEARCH_CHANGE ? 503 : 0; });
  var STARTED_2 = firstWith(LOG2, "503");
  var FS2 = {
    "/home/you/search/Dockerfile": L("FROM node:20-slim", "WORKDIR /app", "COPY . .", "CMD [\"node\", \"search.js\"]", ""),
    "/home/you/search/search.js": "// search 1.0\n",
    "/home/you/cart/Dockerfile": L("FROM node:20-slim", "WORKDIR /app", "COPY . .", "CMD [\"node\", \"cart.js\"]", ""),
    "/home/you/cart/cart.js": "// cart 2.0\n",
    "/home/you/access.log": LOG2,
    "/home/you/changes.log": L(
      "14:02:40 deploy product v4.1 (kim)",
      "14:31:05 config search: SEARCH_INDEX removed, now INDEX_NAME=products (sam): rename for consistency",
      "14:35:20 deploy cart 2.0 (alice): new basket layout",
      "")
  };
  var APPS2 = {
    "node search.js": {
      env: { required: ["SEARCH_INDEX"] },
      listen: { port: "4000", host: "0.0.0.0" }, logs: ["search listening on :4000, index {SEARCH_INDEX}"],
      routes: { "/": "search ok", "/health": "@health" }, sigterm: "graceful"
    },
    "node cart.js": {
      listen: { port: "5000", host: "0.0.0.0" }, logs: ["cart 2.0 listening on :5000"],
      routes: { "/": "cart 2.0", "/health": "@health" }, sigterm: "graceful"
    }
  };
  var SETUP2 = L(
    "cd /home/you/search", "docker build -t search:1.0 .",
    "cd /home/you/cart", "docker build -t cart:2.0 .",
    "cd /home/you",
    "docker run -d --name search -p 8083:4000 --restart always -e INDEX_NAME=products search:1.0",
    "docker run -d --name cart -p 8082:5000 --restart always cart:2.0");

  window.CODELAB.addUnit("oncall", {
    id: "oncall-u7",
    title: "Two incidents",
    icon: "🔥",
    blurb: "No new ideas: two incidents end to end. Size it, find when it started and what changed, stop the bleeding without touching what's healthy, verify from the outside, and leave notes the postmortem can use. Some of the checks are hidden, as they are on a real call.",
    cheat: [
      { h: "The whole response", lang: "text", code:
"1 how bad?        wc -l, cut … | grep -c\n" +
"2 since when?     grep \" 500 \" access.log | head -n 1\n" +
"3 where?          … | cut -d\" \" -f3 | sort | uniq -c | sort -rn\n" +
"4 what changed?   deploys.log, changes.log\n" +
"5 mitigate        roll back ONE thing: the one that lines up\n" +
"6 verify          curl, from the outside\n" +
"7 notes           started, change, mitigation",
        note: "Everything from Units 2–4, in order. The most recent change isn't always the one that lines up." }
    ],
    lessons: [

      {
        id: "oncall-u7-1",
        title: "Incident: checkout after 3.2",
        kind: "shell", chip: "ONCALL", xp: 50, mins: 25, project: true,
        cwd: "/home/you",
        fs: FS1, apps: APPS1, setup: SETUP1,
        brief: "Wednesday 15:50. You're on call. Support forwards the first customer email: **\"I can't pay.\"**\n\nYou have the web server's `access.log`, `deploys.log`, and the running containers: `web` and its database `db`, on the `shopnet` network.\n\nHandle it. When you're done:\n\n- checkout should work again, which in this app means `localhost:8080/health` answers `db: connected`\n- `/home/you/notes.txt` should have `started:` (time of the first failure), `change:` (what changed) and `mitigation:` (what you did)\n\nSome checks are hidden. They're what a senior responder would also be careful about.",
        steps: [
          { text: "Checkout works again: the health check reports `db: connected`.",
            test: L(
              "var h = T.curl('http://localhost:8080/health');",
              "T.eq(h.body, 'db: connected', 'The shop still can\\'t reach its database.');") },
          { text: "Your notes say when it started, what changed and what you did.",
            test: L(NOTE,
              "T.expect(note('started') && note('change') && note('mitigation'), 'notes.txt needs  started:  change:  and  mitigation:  lines.');") },
          { text: "You rolled back the release, not around it.", hidden: true,
            test: L(
              "var c = T.container('web');",
              "T.expect(c && c.status === 'running', 'The shop should run as web.');",
              "T.eq(c.image, T.image('shop:3.1').id, 'The healthy fix is to undo the change that broke it: run the last good release.');",
              "T.eq(c.restart, 'always', 'Keep the restart policy: a rollback changes the version, nothing else.');",
              "T.eq(c.env.DATABASE_URL, 'postgres://db:5432/shop', 'Keep web\\'s configuration as it was.');") },
          { text: "The healthy database was left alone.", hidden: true,
            test: L(
              "var before = T.before.container('db'), now = T.container('db');",
              "T.expect(now && now.id === before.id && now.status === 'running', 'The database was healthy. Renaming, restarting or replacing it to suit 3.2 changes a system that wasn\\'t broken, under pressure.');",
              "T.eq(now.networks, before.networks, 'and its network setup should be unchanged.');") },
          { text: "Your start time is the first failure, not background noise.", hidden: true,
            test: L(NOTE,
              "T.eq(note('started'), '" + STARTED_1 + "', 'Check the time in started: it should be when /checkout began failing, the first 500 in access.log.');",
              "T.expect(/3\\.2/.test(note('change') || ''), 'change: should name the release that lines up.');") },
          { text: "You verified it from the outside after the rollback.", hidden: true,
            test: L(IDX,
              "var back = at(/docker\\s+run[\\s\\S]*shop:3\\.1/);",
              "var ok = false; for (var i = back + 1; i < T.commands.length; i++) if (/^curl\\b/.test(T.commands[i]) && /8080/.test(T.commands[i])) ok = true;",
              "T.expect(back !== -1 && ok, 'After the rollback, check what a user would get: curl -s localhost:8080/health');") }
        ],
        files: [{ name: "commands.sh", content: L("# 15:50. \"I can't pay.\"", "", "") }],
        hints: [
          "Size it and date it from access.log (the first 500, and which path), check deploys.log, and ask the app: curl -s localhost:8080/health. docker logs web says what 3.2 is trying to connect to.",
          "3.2 ignores DATABASE_URL. Don't bend the database to fit it: roll web back to shop:3.1 with the same name, network, port, restart policy and DATABASE_URL, then curl the health check.",
          "docker rm -f web, then docker run -d --name web --network shopnet -p 8080:3000 --restart always -e DATABASE_URL=postgres://db:5432/shop shop:3.1, then curl -s localhost:8080/health, then write the three notes."
        ],
        solution: { "commands.sh": L(
          "grep \" 500 \" access.log | head -n 1",
          "grep \" 500 \" access.log | cut -d\" \" -f3 | sort | uniq -c | sort -rn",
          "cat deploys.log",
          "curl -s localhost:8080/health",
          "docker logs web",
          "docker rm -f web",
          "docker run -d --name web --network shopnet -p 8080:3000 --restart always -e DATABASE_URL=postgres://db:5432/shop shop:3.1",
          "curl -s localhost:8080/health",
          "echo \"started: " + STARTED_1 + "\" > notes.txt",
          "echo \"change: shop 3.2 deployed 15:42:10 (new connection pool ignores DATABASE_URL)\" >> notes.txt",
          "echo \"mitigation: rolled web back to shop:3.1, health check connected\" >> notes.txt",
          "") }
      },

      {
        id: "oncall-u7-2",
        title: "Incident: two changes, one outage",
        kind: "shell", chip: "ONCALL", xp: 50, mins: 25, project: true,
        cwd: "/home/you",
        fs: FS2, apps: APPS2, setup: SETUP2,
        brief: "14:40. The alert says **\"elevated 5xx\"**. In the channel, someone has already written: *\"cart 2.0 went out five minutes ago, roll it back?\"*\n\nTwo services run here: `search` (port 8083) and `cart` (port 8082). You have the gateway's `access.log` and `changes.log`.\n\nFind which change lines up with the failures, undo **that** one, and verify. Notes in `/home/you/notes.txt`: `endpoint:` (what's failing), `started:`, `change:` (the change you undid).",
        steps: [
          { text: "The failing service answers again.",
            test: L(
              "var r = T.curl('http://localhost:8083');",
              "T.eq(r.status, 200, 'Something is still failing.');") },
          { text: "Your notes name the endpoint, the start and the change.",
            test: L(NOTE,
              "T.expect(note('endpoint') && note('started') && note('change'), 'notes.txt needs  endpoint:  started:  and  change:  lines.');",
              "T.eq(note('endpoint'), '/search', 'Which path are the failures on?');") },
          { text: "You undid the change that lines up.", hidden: true,
            test: L(NOTE,
              "var c = T.container('search');",
              "T.expect(c && c.status === 'running', 'Run the fixed service as search, on the same port.');",
              "T.eq(c.env.SEARCH_INDEX, 'products', 'The 14:31 config change removed SEARCH_INDEX. Rolling it back means putting SEARCH_INDEX=products back.');",
              "T.eq(c.restart, 'always', 'Keep its restart policy.');",
              "T.eq(T.image('search:1.0').id, c.image, 'and the same image: it was the config that changed, not the code.');",
              "T.expect(/SEARCH_INDEX|search/i.test(note('change') || ''), 'change: should name the search config change.');") },
          { text: "The most recent change wasn't blamed for something it didn't do.", hidden: true,
            test: L(
              "var before = T.before.container('cart'), now = T.container('cart');",
              "T.expect(now && now.id === before.id && now.status === 'running', 'cart 2.0 was the most recent change, but the failures started at " + STARTED_2 + ", four minutes before it shipped. Rolling it back would have been a second change for nothing.');") },
          { text: "Your start time comes from the log.", hidden: true,
            test: L(NOTE, "T.eq(note('started'), '" + STARTED_2 + "', 'started: should be the time of the first failure in access.log.');") },
          { text: "You verified it from the outside.", hidden: true,
            test: L(IDX,
              "var fix = at(/docker\\s+run[\\s\\S]*search:1\\.0/);",
              "var ok = false; for (var i = fix + 1; i < T.commands.length; i++) if (/^curl\\b/.test(T.commands[i]) && /8083/.test(T.commands[i])) ok = true;",
              "T.expect(fix !== -1 && ok, 'After the fix, curl -s localhost:8083 to see what users get.');") }
        ],
        files: [{ name: "commands.sh", content: L("# 14:40. \"cart 2.0 went out five minutes ago, roll it back?\"", "", "") }],
        hints: [
          "Where and since when? grep \" 503 \" access.log | head -n 1, and the 5xx by path with cut -d\" \" -f3 | sort | uniq -c | sort -rn. Then compare the start time with changes.log.",
          "The failures are all /search and start at " + STARTED_2 + ", before cart shipped. docker ps -a and docker logs search show what the config change did.",
          "docker rm -f search, then docker run -d --name search -p 8083:4000 --restart always -e SEARCH_INDEX=products search:1.0, then curl -s localhost:8083. Leave cart alone."
        ],
        solution: { "commands.sh": L(
          "grep \" 503 \" access.log | head -n 1",
          "grep \" 503 \" access.log | cut -d\" \" -f3 | sort | uniq -c | sort -rn",
          "cat changes.log",
          "docker ps -a",
          "docker logs search",
          "docker rm -f search",
          "docker run -d --name search -p 8083:4000 --restart always -e SEARCH_INDEX=products search:1.0",
          "curl -s localhost:8083",
          "echo \"endpoint: /search\" > notes.txt",
          "echo \"started: " + STARTED_2 + "\" >> notes.txt",
          "echo \"change: search config 14:31:05 removed SEARCH_INDEX; put SEARCH_INDEX=products back\" >> notes.txt",
          "") }
      }
    ]
  });
})();
