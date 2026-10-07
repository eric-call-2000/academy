/* On-Call & Incidents — Unit 3: Stop the bleeding */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  /* Two releases of the shop, built in setup. 1.4 is the last good one;
     1.5 needs a PAYMENTS_URL nobody configured, so it exits the moment it
     starts and `--restart always` turns that into a loop. */
  var FS = {
    "/home/you/releases/1.4/Dockerfile": L("FROM node:20-slim", "WORKDIR /app", "COPY . .", "CMD [\"node\", \"server.js\"]", ""),
    "/home/you/releases/1.4/server.js": "// shop 1.4\n",
    "/home/you/releases/1.5/Dockerfile": L("FROM node:20-slim", "WORKDIR /app", "COPY . .", "CMD [\"node\", \"server.js\", \"--payments\"]", ""),
    "/home/you/releases/1.5/server.js": "// shop 1.5: new payments client\n",
    "/home/you/deploys.log": L(
      "Mon 16:20 deploy shop 1.4 (jo)",
      "Tue 10:41 deploy shop 1.5 (jo): new payments client",
      "")
  };
  var APPS = {
    "node server.js": {
      listen: { port: "3000", host: "0.0.0.0" },
      logs: ["shop 1.4 listening on :3000"],
      routes: { "/": "shop 1.4", "/health": "@health" },
      sigterm: "graceful"
    },
    "node server.js --payments": {
      env: { required: ["PAYMENTS_URL"] },
      listen: { port: "3000", host: "0.0.0.0" },
      logs: ["shop 1.5 listening on :3000", "payments client -> {PAYMENTS_URL}"],
      routes: { "/": "shop 1.5", "/health": "@health" },
      sigterm: "graceful"
    }
  };
  var BUILD = [
    "cd /home/you/releases/1.4", "docker build -t shop:1.4 .",
    "cd /home/you/releases/1.5", "docker build -t shop:1.5 .",
    "cd /home/you"
  ];
  var BROKEN = BUILD.concat(["docker run -d --name shop -p 8080:3000 --restart always shop:1.5"]).join("\n");

  /* Index of the first command matching rx, or -1. Order checks use it:
     "did service come back before you started changing things?" */
  var IDX = "function at(rx) { for (var i = 0; i < T.commands.length; i++) if (rx.test(T.commands[i])) return i; return -1; }";
  var NOTE = L(
    "var notes = T.file('/home/you/notes.txt') || '';",
    "function note(k) { var m = new RegExp('^' + k + ':\\\\s*(.+?)\\\\s*$', 'm').exec(notes); return m ? m[1] : null; }");

  window.CODELAB.addUnit("oncall", {
    id: "oncall-u3",
    title: "Stop the bleeding",
    icon: "🩹",
    blurb: "A release is crash-looping and the shop is down. Read what the container is telling you before touching it, roll back to the last good version, prove it's back from the user's side, and only then fix forward.",
    cheat: [
      { h: "Look before you touch", lang: "sh", code:
"docker ps -a              # status: Restarting (1) = exits with code 1, again and again\n" +
"docker logs shop          # why it exits\n" +
"cat deploys.log           # what changed",
        note: "A restart loop is a deterministic failure. Restarting it again changes nothing and buries the evidence." },
      { h: "Roll back: change one thing, the version", lang: "sh", code:
"docker images                                   # the last good tag\n" +
"docker rm -f shop\n" +
"docker run -d --name shop -p 8080:3000 --restart always shop:1.4",
        note: "Same name, same port, same restart policy, previous image. A rollback that also changes other things is a new deploy you haven't tested." },
      { h: "Verify from outside", lang: "sh", code:
"curl -s localhost:8080          # what a user gets\n" +
"curl -s localhost:8080/health",
        note: "\"The container is running\" isn't the same as \"users are fine\". Check what users see." },
      { h: "Fix forward, safely", lang: "sh", code:
"docker run -d --name shop-canary -p 8081:3000 -e PAYMENTS_URL=… shop:1.5\n" +
"curl -s localhost:8081          # works? only then replace 8080",
        note: "Prove the fixed release on a side port while the rollback keeps serving. Swap only once it answers." }
    ],
    lessons: [

      {
        id: "oncall-u3-1",
        title: "Read the crash loop",
        kind: "shell", chip: "ONCALL", xp: 20, mins: 10,
        cwd: "/home/you",
        fs: FS, apps: APPS, setup: BROKEN,
        brief: "Tuesday 10:44. **The shop is down.** It was deployed three minutes ago.\n\nBefore you change anything, find out what the container is telling you. In `/home/you/notes.txt` write:\n\n- `status: …`, the container's state as `docker ps -a` shows it (e.g. `Up 3 hours`)\n- `cause: …`, the exact error from its logs\n- `change: …`, the deploy that started it, as written in `deploys.log`\n\nDon't fix anything yet. That's the next lesson.",
        steps: [
          { text: "Look at the container's state, including stopped and restarting containers.",
            test: L("T.expect(T.ran(/docker\\s+(ps\\s+-a|ps\\s+--all|container\\s+ls\\s+-a)/), 'docker ps -a lists containers that are not up, too.');") },
          { text: "Read its logs.",
            test: L("T.expect(T.ran(/docker\\s+(logs|container\\s+logs)\\s+shop/), 'docker logs shop shows why it exits.');") },
          { text: "Note `status:`, `cause:` and `change:`.",
            test: L(NOTE,
              "T.expect(/restarting/i.test(note('status') || ''), 'status: should say what docker ps -a shows for shop (it is restarting).');",
              "T.expect(/PAYMENTS_URL/.test(note('cause') || ''), 'cause: should quote the error from docker logs shop.');",
              "T.expect(/1\\.5/.test(note('change') || ''), 'change: should name the deploy in deploys.log that came just before.');") },
          { text: "You looked without touching.", hidden: true,
            test: L(
              "T.expect(!T.ran(/docker\\s+(restart|start|stop|rm|kill|run)\\b/), 'This lesson is look-only. A container that fails the same way every start won\\'t be fixed by restarting it, and every change you make now is one more thing the postmortem has to untangle.');") }
        ],
        files: [{ name: "commands.sh", content: L("# What is the container telling you? Look, don't touch.", "", "") }],
        hints: [
          "docker ps -a shows shop as Restarting (1): it exits with code 1, again and again. docker logs shop says why.",
          "echo \"status: Restarting (1)\" > notes.txt, echo \"cause: Missing required env var PAYMENTS_URL\" >> notes.txt, and cat deploys.log for the change."
        ],
        solution: { "commands.sh": L(
          "docker ps -a",
          "docker logs shop",
          "cat deploys.log",
          "echo \"status: Restarting (1)\" > notes.txt",
          "echo \"cause: Missing required env var PAYMENTS_URL\" >> notes.txt",
          "echo \"change: shop 1.5 (new payments client)\" >> notes.txt",
          "") }
      },

      {
        id: "oncall-u3-2",
        title: "Roll back",
        kind: "shell", chip: "ONCALL", xp: 20, mins: 10,
        cwd: "/home/you",
        fs: FS, apps: APPS, setup: BROKEN,
        brief: "You know what's wrong: 1.5 needs a `PAYMENTS_URL` that nobody configured. You could go and find the right URL. Or you could have the shop back in one minute.\n\n**Roll back to the last good release** and prove it's back the way a user would see it, on `localhost:8080`. Keep everything else about the container as it was: a rollback changes the version, nothing else.",
        steps: [
          { text: "The shop answers on port 8080 again.",
            test: L(
              "var r = T.curl('http://localhost:8080');",
              "T.eq(r.status, 200, 'Nothing answers on 8080 yet. The container named shop is still crash-looping on 1.5.');") },
          { text: "It's running the last good release.",
            test: L(
              "var c = T.container('shop');",
              "T.expect(c && c.status === 'running', 'Run the rollback as a container named shop.');",
              "T.eq(c.image, T.image('shop:1.4').id, 'docker images lists the releases. The one before 1.5 is the last good one.');") },
          { text: "Nothing else changed.", hidden: true,
            test: L(
              "T.eq(T.container('shop').restart, 'always', 'The old container restarted itself if it ever crashed (--restart always). The rollback should too: change the version, nothing else.');") },
          { text: "You checked it from the outside.", hidden: true,
            test: L(IDX,
              "var back = at(/docker\\s+run[\\s\\S]*shop:1\\.4/);",
              "var curl = -1; for (var i = back + 1; i < T.commands.length; i++) if (/^curl\\b/.test(T.commands[i]) && /8080/.test(T.commands[i])) { curl = i; break; }",
              "T.expect(back !== -1 && curl !== -1, 'A running container isn\\'t the same as a working shop. After the rollback, check what a user gets: curl localhost:8080.');") }
        ],
        files: [{ name: "commands.sh", content: L("# Get the shop back. Fix 1.5 later.", "", "") }],
        hints: [
          "docker images shows shop:1.4 and shop:1.5. Remove the broken container (docker rm -f shop), then run 1.4 in its place with the same name, port and restart policy.",
          "docker rm -f shop, then docker run -d --name shop -p 8080:3000 --restart always shop:1.4, then curl -s localhost:8080."
        ],
        solution: { "commands.sh": L(
          "docker images",
          "docker rm -f shop",
          "docker run -d --name shop -p 8080:3000 --restart always shop:1.4",
          "curl -s localhost:8080",
          "") }
      },

      {
        id: "oncall-u3-3",
        title: "Fix forward, without a second outage",
        kind: "shell", chip: "ONCALL", xp: 25, mins: 12,
        cwd: "/home/you",
        fs: FS, apps: APPS,
        setup: BUILD.concat(["docker run -d --name shop -p 8080:3000 --restart always shop:1.4"]).join("\n"),
        brief: "The rollback held: 1.4 is serving on port 8080 and customers are fine. Now ship 1.5 properly. The payments team says its URL is `https://pay.internal/v2`.\n\nThe risky moment is the swap. If you take 1.4 down and 1.5 still won't start, you've caused a second outage. So:\n\n1. run 1.5 **beside** 1.4, as `shop-canary` on port **8081**, with the setting it needs\n2. check it answers\n3. only then replace `shop` on 8080 with 1.5, same name, port and restart policy\n\nWhen you're done, 8080 should answer `shop 1.5` and the canary should be gone.",
        steps: [
          { text: "1.5 serves on port 8080, with its payments URL.",
            test: L(
              "T.eq(T.curl('http://localhost:8080').body, 'shop 1.5', '8080 should end up serving 1.5.');",
              "var c = T.container('shop');",
              "T.expect(c && c.status === 'running', 'The container on 8080 should be named shop.');",
              "T.eq(c.env.PAYMENTS_URL, 'https://pay.internal/v2', 'shop needs PAYMENTS_URL=https://pay.internal/v2 (pass it with -e).');") },
          { text: "The canary is cleaned up.",
            test: L("T.expect(!T.container('shop-canary'), 'Remove shop-canary once 8080 serves 1.5: docker rm -f shop-canary');") },
          { text: "1.5 was proven on the side before it replaced 1.4.", hidden: true,
            test: L(IDX,
              "var canary = at(/docker\\s+run[\\s\\S]*shop-canary/);",
              "var checked = -1; for (var i = canary + 1; i < T.commands.length; i++) if (/^curl\\b/.test(T.commands[i]) && /8081/.test(T.commands[i])) { checked = i; break; }",
              "var down = at(/docker\\s+(rm|stop|kill)[\\s\\S]*\\bshop\\b(?!-)/);",
              "T.expect(canary !== -1 && checked !== -1, 'Run 1.5 as shop-canary on 8081 first, and curl it.');",
              "T.expect(down > checked, 'You took 1.4 down before you knew 1.5 would start. If it hadn\\'t, that\\'s a second outage. Check the canary on 8081 first.');") }
        ],
        files: [{ name: "commands.sh", content: L("# 1.4 is serving on 8080. Ship 1.5 without another outage.", "", "") }],
        hints: [
          "docker run -d --name shop-canary -p 8081:3000 -e PAYMENTS_URL=https://pay.internal/v2 shop:1.5, then curl -s localhost:8081.",
          "Once 8081 answers \"shop 1.5\": docker rm -f shop, docker run -d --name shop -p 8080:3000 --restart always -e PAYMENTS_URL=https://pay.internal/v2 shop:1.5, curl -s localhost:8080, docker rm -f shop-canary."
        ],
        solution: { "commands.sh": L(
          "docker run -d --name shop-canary -p 8081:3000 -e PAYMENTS_URL=https://pay.internal/v2 shop:1.5",
          "curl -s localhost:8081",
          "docker rm -f shop",
          "docker run -d --name shop -p 8080:3000 --restart always -e PAYMENTS_URL=https://pay.internal/v2 shop:1.5",
          "curl -s localhost:8080",
          "docker rm -f shop-canary",
          "") }
      },

      {
        id: "oncall-u3-4",
        title: "Choosing the mitigation",
        kind: "concept", xp: 15, mins: 8,
        screens: [
          { read: "You've used one generic mitigation: **roll back**. The others on Google SRE's short list each fit a different shape of problem:\n\n- **roll back**: a recent change lines up with the start\n- **drain**: one server, zone or region is bad and the others are fine; send traffic away from it\n- **restart**: the process got into a bad state over time (a leak, a stuck connection)\n- **add capacity**: the code is fine, there's just more traffic than it can take",
            ask: { type: "pick", transfer: true,
              q: "One of four servers returns errors; the other three are fine. Nothing was deployed. First move?",
              choices: ["Roll back yesterday's deploy across all four servers", "Drain traffic away from the bad server", "Add four more servers", "Restart all four servers at once"],
              answer: 1,
              why: [
                "Nothing changed, and three servers running the same code are fine. The deploy isn't the cause.",
                "Right. Take the bad one out of rotation and the other three carry on. Investigate it with no users on it.",
                "More servers doesn't help when one is broken and the rest have room.",
                "Restarting the healthy three adds risk for nothing, and might take everything down at once."
              ] } },
          { read: "Two questions pick the mitigation most of the time:\n\n1. **Did something change just before?** Then undo it.\n2. **Is it everywhere, or in one place?** One place: drain it. Everywhere with no change: look at load, or the process's own state.\n\nAnd one warning: a mitigation is a **change** too. Make one at a time, and check after each, or you won't know which one worked.",
            ask: { type: "pick", transfer: true,
              q: "A sale started at noon. Since then every server is at 100% CPU and requests time out. No deploys today. First move?",
              choices: ["Roll back the most recent deploy, from last week", "Add capacity", "Drain the slowest server", "Restart the database to clear it out"],
              answer: 1,
              why: [
                "Last week's deploy ran fine until the traffic arrived. Nothing changed but the load.",
                "Right. The code is fine; there's more traffic than it can serve. Add capacity, then look at what made it so expensive.",
                "Every server is overloaded. Draining one puts its load on the others, which makes them worse.",
                "Nothing points at the database, and restarting it under full load could make everything fail at once."
              ] } },
          { read: "Sometimes the honest answer is **fix forward**: no clean rollback exists (the database migration already ran), or the fix is one line and quicker to ship than undoing everything. That's a real option, with a cost: you're deploying under pressure, with less testing.\n\nThe rule of thumb most teams use: **roll back if you can; fix forward only when you can't, or when the fix is smaller and safer than the rollback.**",
            ask: { type: "pick",
              q: "A release added a column and migrated every row. Rolling back the code would fail on the new schema. The bug is a typo in one label. What do you do?",
              choices: ["Roll back the code anyway, whatever the schema does", "Fix forward: ship the one-line fix", "Roll back the database migration first, then the code", "Leave it for the morning"],
              answer: 1,
              why: [
                "The old code doesn't understand the new schema, so the rollback would cause a bigger outage than the typo.",
                "Right. The rollback is the riskier change here. A one-line fix is small and safe to ship.",
                "Reversing a data migration under pressure is the riskiest option on the list.",
                "If the typo is harmless it might wait, but you still need to decide. This is the safe fix."
              ] } }
        ]
      },

      {
        id: "oncall-u3-quiz",
        title: "Unit 3 quiz: Stop the bleeding",
        kind: "quiz", xp: 10,
        brief: "Crash loops, rollback, verifying, fixing forward and picking a mitigation. 80% to pass.",
        questions: [
          { q: "`docker ps -a` shows a container as `Restarting (1)`. What does that tell you?",
            choices: ["It's healthy, and restarting itself on a schedule to stay fresh", "It has restarted exactly once", "It keeps exiting with code 1 and being restarted", "It's waiting for a user to restart it"],
            answer: 2, explain: "The number is the exit code. A restart loop is a deterministic failure: read the logs, don't restart it again." },
          { q: "What should a rollback change?",
            choices: ["Everything that was changed in the last week", "Only the version", "The version and the port, to be safe", "The restart policy, so it can't loop again"],
            answer: 1, explain: "Change one thing, the version. Anything else is a new, untested deploy." },
          { q: "The rollback container is running. Are you done?",
            choices: ["Yes: if the container is running, the shop must be working too", "Yes, once the logs show no errors", "Not until the postmortem is written", "Not until you've checked what users get, e.g. with curl"],
            answer: 3, explain: "A running container can still return errors or nothing at all. Verify from the user's side." },
          { q: "You're shipping the fixed release. When do you take the old one down?",
            choices: ["After the new one is proven on a side port", "First, so the new one can take over the same port straight away", "At the same time, in one command", "Never: keep both forever"],
            answer: 0, explain: "If the new one won't start, taking the old one down first is a second outage." },
          { q: "One of six servers is erroring; nothing was deployed. Which mitigation fits?",
            choices: ["Roll back the last deploy everywhere", "Add six more servers", "Drain traffic away from that server", "Restart all six servers together"],
            answer: 2, explain: "The problem is in one place. Take it out of rotation and investigate it with no users on it." },
          { q: "When is fixing forward the right call?",
            choices: ["Always, because shipping a fix is quicker than any rollback could be", "When a rollback isn't possible or is riskier than the fix", "Never during an incident", "Only for security bugs"],
            answer: 1, explain: "Roll back if you can. Fix forward when you can't, or when the fix is smaller and safer." }
        ]
      }
    ]
  });
})();
