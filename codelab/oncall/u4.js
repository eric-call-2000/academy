/* On-Call & Incidents — Unit 4: It's up, but it's broken */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var FS = {
    "/home/you/app/Dockerfile": L("FROM node:20-slim", "WORKDIR /app", "COPY . .", "CMD [\"node\", \"server.js\"]", ""),
    "/home/you/app/server.js": "// shop 2.0\n"
  };
  var APPS = {
    "node server.js": {
      listen: { port: "3000", host: "0.0.0.0" },
      logs: ["shop listening on :3000"],
      routes: { "/": "shop", "/health": "@health" },
      connects: "$DATABASE_URL",
      sigterm: "graceful"
    },
    "postgres": {
      env: { required: ["POSTGRES_PASSWORD"] },
      listen: { port: "5432", host: "0.0.0.0" },
      logs: ["database system is ready to accept connections"],
      data: "/var/lib/postgresql/data",
      sigterm: "graceful"
    }
  };
  var STACK = [
    "cd /home/you/app", "docker build -t shop:2.0 .", "cd /home/you",
    "docker network create shopnet",
    "docker run -d --name db --network shopnet -e POSTGRES_PASSWORD=example postgres:16",
    "docker run -d --name web --network shopnet -p 8080:3000 --restart always -e DATABASE_URL=postgres://db:5432/shop shop:2.0"
  ];
  var NOTE = L(
    "var notes = T.file('/home/you/notes.txt') || '';",
    "function note(k) { var m = new RegExp('^' + k + ':\\\\s*(.+?)\\\\s*$', 'm').exec(notes); return m ? m[1] : null; }");

  window.CODELAB.addUnit("oncall", {
    id: "oncall-u4",
    title: "It's up, but it's broken",
    icon: "🔗",
    blurb: "Every container says Up. The home page loads. Orders fail anyway. Health checks, dependencies, and the rule that saves the most time: the service reporting the error is often not the one that's broken.",
    cheat: [
      { h: "Up is not the same as working", lang: "sh", code:
"curl -s localhost:8080          # the page loads…\n" +
"curl -s localhost:8080/health   # …but what does the app say about its dependencies?",
        note: "A health endpoint that checks dependencies tells you where to look next. Read its message literally." },
      { h: "Reading dependency errors", lang: "text", code:
"ECONNREFUSED db:5432   the name resolves, nothing is listening\n" +
"ENOTFOUND db           the name doesn't resolve at all: wrong name,\n" +
"                       or (in Docker) the container isn't running",
        note: "In Docker, a stopped container drops out of the network's DNS, so a stopped database shows up as ENOTFOUND, not as a refused connection." },
      { h: "Error here, cause there", lang: "text", code:
"web reports the error  →  check what web depends on\n" +
"restarting web         →  changes nothing if the cause is elsewhere",
        note: "Restarting the service that reports the error is the most common wasted move in an incident." },
      { h: "Config changes are changes", lang: "sh", code:
"cat changes.log                       # deploys AND config edits\n" +
"docker run … -e DATABASE_URL=<the old value> …   # roll the config back",
        note: "Rolling back a configuration change is a rollback too, and usually the fastest one." }
    ],
    lessons: [

      {
        id: "oncall-u4-1",
        title: "The error is here, the cause is there",
        kind: "shell", chip: "ONCALL", xp: 20, mins: 10,
        cwd: "/home/you",
        fs: Object.assign({
          "/home/you/changes.log": L(
            "08:30 deploy web shop:2.0 (jo)",
            "10:02 ops: disk resize on the database host, db stopped and restarted (kim)",
            "")
        }, FS),
        apps: APPS,
        setup: STACK.concat(["docker stop db"]).join("\n"),
        brief: "10:20. Orders have been failing for a quarter of an hour. `docker ps` shows `web` **Up**, and the home page on `localhost:8080` loads fine.\n\nFind out what `web` is actually unhappy about, find the cause, and fix it. Then write `/home/you/notes.txt`:\n\n- `cause: …`, what was actually wrong, in a few words\n\nWhen you're done, the shop's health check on `localhost:8080/health` should say `db: connected`.",
        steps: [
          { text: "Ask the app what's wrong.",
            test: L("T.expect(T.ran(/curl[^|]*8080\\/health/), 'The home page works, so ask the health endpoint: curl -s localhost:8080/health');") },
          { text: "The health check reports `db: connected`.",
            test: L(
              "var h = T.curl('http://localhost:8080/health');",
              "T.eq(h.body, 'db: connected', 'web still can\\'t reach its database.');",
              "T.eq(h.status, 200, 'and it should answer 200.');") },
          { text: "Your notes name the cause.",
            test: L(NOTE, "T.expect(/db|database/i.test(note('cause') || '') && /stop|down|exit|not running/i.test(note('cause') || ''), 'cause: should say what was wrong with the database.');") },
          { text: "You fixed the cause, not the messenger.", hidden: true,
            test: L(
              "T.expect(!T.ran(/docker\\s+(restart|rm|stop|kill)[^|]*\\bweb\\b/), 'web was reporting the error, not causing it. Restarting or replacing it changes nothing when the database is down, and it costs you a minute of the home page being down too.');",
              "T.expect(T.container('db') && T.container('db').status === 'running', 'Start the database that was stopped.');") }
        ],
        files: [{ name: "commands.sh", content: L("# web is Up and the home page loads. Orders fail anyway.", "", "") }],
        hints: [
          "curl -s localhost:8080/health says web can't find db. docker ps -a shows the db container, and its state. changes.log says what happened at 10:02.",
          "The database was stopped and never started again: docker start db, then curl -s localhost:8080/health. echo \"cause: db stopped during the disk resize, never restarted\" > notes.txt"
        ],
        solution: { "commands.sh": L(
          "curl -s localhost:8080/health",
          "docker ps -a",
          "cat changes.log",
          "docker start db",
          "curl -s localhost:8080/health",
          "echo \"cause: db stopped for the disk resize and never started again\" > notes.txt",
          "") }
      },

      {
        id: "oncall-u4-2",
        title: "A config change is a change",
        kind: "shell", chip: "ONCALL", xp: 20, mins: 10,
        cwd: "/home/you",
        fs: Object.assign({
          "/home/you/changes.log": L(
            "08:30 deploy web shop:2.0 (jo)",
            "11:40 config web DATABASE_URL postgres://db:5432/shop -> postgres://db-primary:5432/shop (sam): prep for the db migration",
            "")
        }, FS),
        apps: APPS,
        setup: STACK.concat([
          "docker rm -f web",
          "docker run -d --name web --network shopnet -p 8080:3000 --restart always -e DATABASE_URL=postgres://db-primary:5432/shop shop:2.0"
        ]).join("\n"),
        brief: "11:45. Orders are failing again. No code was deployed today, so it can't be a deploy, says the channel.\n\nFind what changed and **undo it**: put `web` back the way it was before, keeping its name, network, port and restart policy. Verify the health check, then note:\n\n- `change: …`, what you rolled back",
        steps: [
          { text: "The health check reports `db: connected` again.",
            test: L("T.eq(T.curl('http://localhost:8080/health').body, 'db: connected', 'web still can\\'t reach its database.');") },
          { text: "`web` is configured the way it was before the change.",
            test: L(
              "var c = T.container('web');",
              "T.expect(c && c.status === 'running', 'Run the fixed container as web.');",
              "T.eq(c.env.DATABASE_URL, 'postgres://db:5432/shop', 'changes.log has the value from before the change.');") },
          { text: "Your notes say what you rolled back.",
            test: L(NOTE, "T.expect(/DATABASE_URL|db-primary|config/i.test(note('change') || ''), 'change: should name the config change you undid.');") },
          { text: "Only the setting changed.", hidden: true,
            test: L(
              "var c = T.container('web');",
              "T.expect(c.networks.indexOf('shopnet') !== -1, 'web has to be on shopnet to reach db by name.');",
              "T.eq(c.restart, 'always', 'Keep the restart policy (--restart always): a rollback changes the one thing that broke.');",
              "T.eq(T.curl('http://localhost:8080').body, 'shop', 'and the home page should still answer on 8080.');") }
        ],
        files: [{ name: "commands.sh", content: L("# No deploy today. Something still changed.", "", "") }],
        hints: [
          "curl -s localhost:8080/health names the host web is looking for. cat changes.log shows when that changed, and what it was before.",
          "docker rm -f web, then docker run -d --name web --network shopnet -p 8080:3000 --restart always -e DATABASE_URL=postgres://db:5432/shop shop:2.0, then curl the health check."
        ],
        solution: { "commands.sh": L(
          "curl -s localhost:8080/health",
          "cat changes.log",
          "docker rm -f web",
          "docker run -d --name web --network shopnet -p 8080:3000 --restart always -e DATABASE_URL=postgres://db:5432/shop shop:2.0",
          "curl -s localhost:8080/health",
          "echo \"change: rolled back the 11:40 DATABASE_URL change (db-primary doesn't exist yet)\" > notes.txt",
          "") }
      },

      {
        id: "oncall-u4-quiz",
        title: "Unit 4 quiz: It's up, but it's broken",
        kind: "quiz", xp: 10,
        brief: "Health checks, dependency errors, and config changes. 80% to pass.",
        questions: [
          { q: "Every container shows Up and the home page loads, but orders fail. What's the next check?",
            choices: ["Nothing: Up means the containers are fine", "The size of the Docker images", "Restart every container to be sure", "The app's health endpoint, which checks its dependencies"],
            answer: 3, explain: "Up only means the process is running. A health check that tests dependencies says where to look." },
          { q: "In Docker, the app reports `getaddrinfo ENOTFOUND db`. Which two causes fit?",
            choices: ["The name is wrong, or the db container isn't running", "The database is overloaded, or its disk is full", "The password is wrong, or the port is wrong", "The app image is too old, or too new"],
            answer: 0, explain: "ENOTFOUND means the name didn't resolve. In Docker, a stopped container leaves the network's DNS, so it looks the same as a typo." },
          { q: "web reports the error; the database is stopped. Should you restart web?",
            choices: ["Yes, always restart the service that shows the error first", "Yes, and the database too, at the same moment", "No: start the database; web will reconnect", "No: rebuild web's image"],
            answer: 2, explain: "The error shows up in web; the cause is the database. Restarting web costs downtime and fixes nothing." },
          { q: "No code was deployed today, but a setting was changed an hour ago. Is \"what changed?\" still the right question?",
            choices: ["No: only deploys count as changes", "Yes: a config change is a change, and undoing it is a rollback", "Only if the setting is a secret", "Only if the change was made by the on-call engineer"],
            answer: 1, explain: "Config changes cause outages as often as code. Rolling a setting back is usually the fastest mitigation." },
          { q: "What does `ECONNREFUSED db:5432` tell you, compared with ENOTFOUND?",
            choices: ["The name didn't resolve at all", "The password was rejected", "The request timed out", "The name resolved, but nothing is listening on that port"],
            answer: 3, explain: "Refused means the host was found but nothing accepted the connection: wrong port, or the service isn't up yet." }
        ]
      }
    ]
  });
})();
