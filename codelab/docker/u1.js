/* Docker & Containers — Unit 1: Images and containers, the two nouns */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var SERVER = L(
    "const http = require(\"http\");",
    "const port = process.env.PORT || 3000;",
    "http.createServer((req, res) => res.end(\"Hello from the shop\")).listen(port);",
    "");
  var PKG = L(
    "{",
    "  \"name\": \"shop\",",
    "  \"version\": \"1.0.0\",",
    "  \"dependencies\": { \"express\": \"4.19.2\" }",
    "}",
    "");
  var DOCKERFILE = L(
    "FROM node:20-alpine",
    "WORKDIR /app",
    "COPY package*.json ./",
    "RUN npm ci",
    "COPY . .",
    "USER node",
    "EXPOSE 3000",
    "CMD [\"node\", \"server.js\"]",
    "");

  /* The app, DESCRIBED rather than executed — the simulator never runs
     learner JavaScript. Every lesson shows this table in its brief. */
  var APPS = {
    "node server.js": {
      requires: ["server.js"],
      listen: { port: "$PORT|3000", host: "$HOST|0.0.0.0" },
      logs: ["Listening on http://{host}:{port}"],
      routes: { "/": "Hello from {GREETING|the shop}", "/health": "@health" },
      sigterm: "graceful"
    }
  };
  function world(extra) {
    var fs = {
      "/home/you/project/server.js": SERVER,
      "/home/you/project/package.json": PKG,
      "/home/you/project/Dockerfile": DOCKERFILE
    };
    Object.keys(extra || {}).forEach(function (k) { fs[k] = extra[k]; });
    return fs;
  }

  window.CODELAB.addUnit("docker", {
    id: "docker-u1",
    title: "Images and containers: the two nouns",
    icon: "📦",
    blurb: "An image is a read-only template; a container is one running instance of it with a thin writable layer on top. Start them, list them, look inside them, and watch the writable layer die.",
    cheat: [
      { h: "The two nouns", lang: "sh", code: L(
        "# IMAGE      a read-only template: files + config, built once",
        "# CONTAINER  one running instance of an image, with a thin",
        "#            WRITABLE LAYER on top that dies when you remove it",
        "docker run -d --name web shop:1.0    # image ──▶ container"),
        note: "One image, many containers — like one class and many objects." },
      { h: "The lifecycle", lang: "sh", code: L(
        "docker run -d --name web shop:1.0   # create + start (-d = background)",
        "docker ps                           # what's RUNNING",
        "docker ps -a                        # …and what has exited",
        "docker stop web                     # SIGTERM, then SIGKILL after 10s",
        "docker start web                    # run it again",
        "docker rm web                       # delete it (refuses while running)"),
        note: "A stopped container still exists. `docker ps` alone won't show it — that's what -a is for." },
      { h: "Looking inside", lang: "sh", code: L(
        "docker logs web             # whatever the app printed",
        "docker exec web ls /app     # run a command INSIDE the container",
        "docker exec web whoami      # as the image's USER"),
        note: "exec needs a RUNNING container. If it's exited, there's no process to join." },
      { h: "Phone-sized output", lang: "sh", code: L(
        "docker ps --format '{{.Names}} {{.Status}}'",
        "# web Up 3 seconds"),
        note: "Real `docker ps` is ~150 columns wide. --format is a genuine skill, not just a workaround." },
      { h: "What this simulator fakes", lang: "sh", code: L(
        "# REAL here: layers, the cache, ports, volumes, networks, signals,",
        "#            exit codes — every RULE you'd be screened on.",
        "# FAKED:     what npm downloads, and what a process computes.",
        "#            Each lesson's app is DESCRIBED in its brief."),
        note: "Fake payloads, never rules. Nothing you learn here is a lie about how Docker behaves." }
    ],
    lessons: [

      {
        id: "docker-u1-1",
        title: "docker run and the container lifecycle",
        kind: "shell", chip: "DOCKER", xp: 15, mins: 12,
        cwd: "/home/you/project",
        fs: world(),
        apps: APPS,
        setup: "docker build -t shop:1.0 .",
        brief: "*\"It works on my machine.\"* A container is the answer: ship the machine. An **image** is a read-only template — your app, its dependencies, and the configuration to start it, built once. A **container** is one running instance of that image.\n\nThe image `shop:1.0` is already built (Unit 2 is where you write the Dockerfile). Your job here is the lifecycle every container follows: **run**, **ps**, **stop**, and the discovery that a stopped container hasn't vanished.\n\n`docker run -d --name web shop:1.0` creates a container from the image and starts it. `-d` detaches, so you get your prompt back; `--name` gives it a name you can type instead of a hex id.\n\nThen `docker ps` lists what's running — and after `docker stop web`, `docker ps` shows **nothing**. The container is still there, exited, holding its filesystem and its exit code. `docker ps -a` is the one that shows it.\n\n*The app in this image is described as: listens on `$PORT` (default 3000) at `0.0.0.0`, logs `Listening on http://0.0.0.0:3000`, and answers `/` with a greeting. It handles SIGTERM cleanly.*",
        example: { lang: "sh", code: "docker run -d --name web shop:1.0\ndocker ps\n# CONTAINER ID   IMAGE   ...   STATUS         NAMES\n# a1b2c3d4e5f6   shop:1.0 ...  Up 3 seconds   web" },
        steps: [
          { text: "Start a container named `web` from `shop:1.0`, in the background.",
            test: L(
              "T.expect(T.container('web'), 'No container called web — run: docker run -d --name web shop:1.0');",
              "T.expect(T.ran(/docker run/), 'Use docker run to create it.');") },
          { text: "List the running containers with `docker ps`.",
            test: L(
              "T.expect(T.ran(/^docker ps$/m), 'Run docker ps on its own line, after the run.');",
              "T.expect(T.said('web'), 'docker ps should list the web container.');") },
          { text: "Stop it with `docker stop web` — it exits cleanly, with code 0.",
            test: L(
              "T.eq(T.container('web').status, 'exited', 'web should be stopped by the end — run: docker stop web');",
              "T.eq(T.container('web').exitCode, 0, 'This app handles SIGTERM, so a clean stop exits 0. (Unit 2 explains what makes that work.)');",
              "T.eq(T.containers(), [], 'Nothing should still be running.');") },
          { text: "Prove it still exists: run `docker ps -a` and find it listed as exited.",
            test: L(
              "T.expect(T.ran(/^docker ps -a/m), 'Run docker ps -a — plain docker ps only shows RUNNING containers.');",
              "T.expect(T.said('Exited (0)'), 'docker ps -a should show web as Exited (0). Run it AFTER the stop.');",
              "T.eq(T.containers({ all: true }), ['web'], 'The stopped container is still there — that is the point of this lesson.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# The image shop:1.0 is already built for you.",
            "# One command per line. Lines starting with # are notes.",
            "",
            "# 1) Start a background container named web:",
            "",
            "# 2) List what's running:",
            "",
            "# 3) Stop it:",
            "",
            "# 4) Show ALL containers, exited ones included:",
            "",
            "") }
        ],
        hints: [
          "`docker run -d --name web shop:1.0` — `-d` runs it in the background, `--name` names it.",
          "`docker ps` on its own line. Then `docker stop web`.",
          "Finish with `docker ps -a`. The `-a` is what reveals containers that have exited."
        ],
        solution: {
          "commands.sh": L(
            "# The image shop:1.0 is already built for you.",
            "",
            "# 1) Start a background container named web:",
            "docker run -d --name web shop:1.0",
            "",
            "# 2) List what's running:",
            "docker ps",
            "",
            "# 3) Stop it:",
            "docker stop web",
            "",
            "# 4) Show ALL containers, exited ones included:",
            "docker ps -a",
            "")
        }
      },

      {
        id: "docker-u1-2",
        title: "One image, many containers",
        kind: "shell", chip: "DOCKER", xp: 15, mins: 12,
        cwd: "/home/you/project",
        fs: world(),
        apps: APPS,
        setup: "docker build -t shop:1.0 .",
        brief: "An image is a **template**, not a thing that runs. Start it three times and you have three containers — separate processes, separate writable layers, separate lives — all built from the same read-only image.\n\nThis is why containers are cheap. Scaling a web app horizontally is `docker run` again; each instance adds only the bytes it writes, not another copy of the image.\n\nThey need distinct **names**, though: a name identifies one container, so Docker refuses to reuse one. Ports work the same way, and Unit 5 covers that.\n\nStart two containers, `web1` and `web2`, from the one image — then check what they have in common.",
        steps: [
          { text: "Start two background containers, `web1` and `web2`, both from `shop:1.0`.",
            test: L(
              "T.expect(T.container('web1') && T.container('web2'), 'Run docker run -d --name web1 shop:1.0, then the same for web2.');",
              "T.eq(T.containers(), ['web1', 'web2'], 'Both should be running.');") },
          { text: "They are two containers built from **one** image: check they report the same image.",
            test: L(
              "T.eq(T.container('web1').image, T.image('shop:1.0').id, 'web1 should come from shop:1.0');",
              "T.eq(T.container('web2').image, T.container('web1').image, 'Both containers run the SAME image — one template, two instances.');",
              "T.expect(T.container('web1').id !== T.container('web2').id, 'They are still separate containers, with their own ids.');") },
          { text: "Try a third container that reuses the name `web1`, and read what Docker says.",
            test: L(
              "T.expect(T.said('already in use'), 'Run `docker run -d --name web1 shop:1.0` a second time — Docker should refuse, because a container name identifies exactly one container.');",
              "T.eq(T.containers({ all: true }).length, 2, 'The refusal means no third container was created.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# shop:1.0 is built. One image, many containers.",
            "",
            "# 1) Start web1:",
            "",
            "# 2) Start web2 from the SAME image:",
            "",
            "# 3) Now try to start another one called web1 again, and read the error:",
            "",
            "") }
        ],
        hints: [
          "`docker run -d --name web1 shop:1.0`, then the same line with `web2`.",
          "Nothing else changes between them — the image is the template, the name is the instance.",
          "For step 3, repeat the web1 line exactly. The error mentioning \"already in use\" IS the expected result."
        ],
        solution: {
          "commands.sh": L(
            "# shop:1.0 is built. One image, many containers.",
            "",
            "# 1) Start web1:",
            "docker run -d --name web1 shop:1.0",
            "",
            "# 2) Start web2 from the SAME image:",
            "docker run -d --name web2 shop:1.0",
            "",
            "# 3) Now try to start another one called web1 again, and read the error:",
            "docker run -d --name web1 shop:1.0",
            "")
        }
      },

      {
        id: "docker-u1-3",
        title: "The writable layer dies with docker rm",
        kind: "shell", chip: "DOCKER", xp: 20, mins: 14,
        cwd: "/home/you/project",
        fs: world(),
        apps: APPS,
        setup: "docker build -t shop:1.0 .",
        brief: "A container is the image's read-only layers **plus one thin writable layer** on top. Everything the container writes — logs, uploads, a database's files — lands in that layer.\n\nAnd that layer is part of the container, not the image. `docker rm` deletes the container, and the writable layer goes with it. Start a fresh container from the same image and you are back to exactly the image's contents: the file you wrote is gone.\n\nThis is the single most expensive surprise in Docker. It's also deliberate — containers are meant to be disposable, and anything that must survive goes in a **volume** (Unit 6).\n\nProve it to yourself: write a file inside the container, remove the container, start a new one, and look for the file.",
        example: { lang: "sh", code: "docker exec web touch /app/note.txt   # write into the writable layer\ndocker exec web ls /app               # it's there\ndocker rm -f web                      # …and now the layer is gone" },
        steps: [
          { text: "Start `web`, then create `/app/note.txt` inside it with `docker exec web touch /app/note.txt`.",
            test: L(
              "T.expect(T.ran(/docker exec \\w+ touch/), 'Use docker exec to run touch INSIDE the container.');",
              "T.expect(T.ran(/docker run/), 'Start the container first.');") },
          { text: "Confirm it exists with `docker exec web ls /app`.",
            test: L(
              "T.expect(T.ran(/docker exec \\w+ ls/), 'Run docker exec web ls /app');",
              "T.expect(T.said('note.txt'), 'The listing should include note.txt — run the ls after the touch.');") },
          { text: "Remove the container with `docker rm -f web`, then start a **new** `web` from the same image.",
            test: L(
              "T.expect(T.ran(/docker rm -f/), 'Remove it with docker rm -f web (a running container needs -f).');",
              "T.expect(T.container('web') && T.container('web').status === 'running', 'Start a new container named web afterwards.');") },
          { text: "The file is gone: the new container starts from the image, not from the old writable layer.",
            test: L(
              "T.eq(T.fileIn('web', '/app/note.txt'), null, 'note.txt should NOT exist in the new container — if it does, check you removed the old one before starting this one.');",
              "T.expect(T.fileIn('web', '/app/server.js') !== null, 'The image\\'s own files are still there — only the writable layer was lost.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# shop:1.0 is built.",
            "",
            "# 1) Start web, then write a file inside it:",
            "",
            "# 2) Prove the file is there:",
            "",
            "# 3) Remove the container, and start a fresh one with the same name:",
            "",
            "# 4) Look for the file again (it should be gone):",
            "",
            "") }
        ],
        hints: [
          "`docker run -d --name web shop:1.0`, then `docker exec web touch /app/note.txt`.",
          "`docker exec web ls /app` prints the directory listing to your terminal.",
          "`docker rm -f web` removes it even though it's running; then run the same `docker run` line again and finish with another `docker exec web ls /app`."
        ],
        solution: {
          "commands.sh": L(
            "# shop:1.0 is built.",
            "",
            "# 1) Start web, then write a file inside it:",
            "docker run -d --name web shop:1.0",
            "docker exec web touch /app/note.txt",
            "",
            "# 2) Prove the file is there:",
            "docker exec web ls /app",
            "",
            "# 3) Remove the container, and start a fresh one with the same name:",
            "docker rm -f web",
            "docker run -d --name web shop:1.0",
            "",
            "# 4) Look for the file again (it should be gone):",
            "docker exec web ls /app",
            "")
        }
      },

      {
        id: "docker-u1-4",
        title: "Looking inside: docker logs and docker exec",
        kind: "shell", chip: "DOCKER", xp: 20, mins: 14,
        cwd: "/home/you/project",
        fs: world(),
        apps: APPS,
        setup: "docker build -t shop:1.0 .",
        brief: "When a container misbehaves you have two windows into it, and reaching for them early saves hours.\n\n`docker logs <name>` prints whatever the process wrote to stdout and stderr. In a container, logs aren't a file you go looking for — they're the process's output, collected by Docker. That's why containerized apps log to stdout instead of to `/var/log/app.log`.\n\n`docker exec <name> <command>` runs a command **inside** the running container: its filesystem, its environment, its user. `docker exec web ls /app` answers \"did my files actually land where I think?\" — the question behind a startling share of Docker bugs.\n\nOne catch: `exec` needs a **running** container. If it has exited there is no process to join, and Docker says so.\n\nLook inside this one three ways: its logs, its files, and the user it runs as.",
        steps: [
          { text: "Start `web`, then read its output with `docker logs web`.",
            test: L(
              "T.expect(T.ran(/^docker logs/m), 'Run docker logs web');",
              "T.expect(T.said('Listening on http://0.0.0.0:3000'), 'The app logs its startup line — docker logs should show it.');") },
          { text: "List the app's files inside the container: `docker exec web ls /app`.",
            test: L(
              "T.expect(T.said('server.js'), 'docker exec web ls /app should list server.js — those are the files the image holds.');",
              "T.expect(T.said('package.json'), 'package.json should be there too.');") },
          { text: "Find out which user the process runs as with `docker exec web whoami`.",
            test: L(
              "T.expect(T.ran(/docker exec \\w+ whoami/), 'Run docker exec web whoami');",
              "T.expect(T.said('node'), 'It should print node — the Dockerfile sets USER node. Unit 4 explains why that matters.');",
              "T.eq(T.container('web').user, 'node', 'The container runs as node, not root.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# shop:1.0 is built.",
            "",
            "# 1) Start web, then read what the app printed:",
            "",
            "# 2) List the app's files INSIDE the container:",
            "",
            "# 3) Ask which user it runs as:",
            "",
            "") }
        ],
        hints: [
          "`docker run -d --name web shop:1.0`, then `docker logs web`.",
          "`docker exec web ls /app` — everything after the container name is the command to run inside it.",
          "`docker exec web whoami` prints the user the container's process runs as."
        ],
        solution: {
          "commands.sh": L(
            "# shop:1.0 is built.",
            "",
            "# 1) Start web, then read what the app printed:",
            "docker run -d --name web shop:1.0",
            "docker logs web",
            "",
            "# 2) List the app's files INSIDE the container:",
            "docker exec web ls /app",
            "",
            "# 3) Ask which user it runs as:",
            "docker exec web whoami",
            "")
        }
      },

      {
        id: "docker-quiz-1",
        title: "Unit 1 quiz: Images, containers and VMs",
        kind: "quiz", xp: 10,
        brief: "The two nouns, the lifecycle, and what a container actually is. 80% to pass.",
        questions: [
          { q: "What is the difference between an image and a container?",
            choices: ["An image is the template; a container is a running instance of it", "An image runs; a container stores it on disk", "They are two names for the same thing", "An image holds the data while a container holds the application code"],
            answer: 0, explain: "An image is read-only: files plus the configuration needed to start them, built once. A container is one instance started from that image, with a thin writable layer of its own. One image can back many containers at the same time, which is why starting another instance is cheap." },
          { q: "You run `docker stop web`, then `docker ps`. The container isn't listed. What happened to it?",
            choices: ["It was deleted along with its filesystem", "It still exists, exited — `docker ps -a` shows it", "It was never created in the first place", "It is still running, just hidden from this particular view"],
            answer: 1, explain: "Stopping a container ends its process but keeps the container: its writable layer, its exit code and its logs are all still there, and `docker start` would run it again. Plain `docker ps` lists only running containers; `-a` includes the exited ones. Deleting is a separate step, `docker rm`." },
          { q: "You write a file inside a container, then `docker rm` it and start a new container from the same image. Is the file there?",
            choices: ["Yes — files written in a container are saved back into the image", "Yes, if the file was written inside the WORKDIR", "No — the writable layer was deleted with the container", "No, but `docker start` would bring it back"],
            answer: 2, explain: "Writes go to the container's own thin writable layer, never into the read-only image, so removing the container discards them. A fresh container starts from exactly the image's contents. Anything that must outlive a container belongs in a volume or a bind mount." },
          { q: "How is a container different from a virtual machine?",
            choices: ["A container emulates hardware; a VM does not", "A container can only run Linux software, while a VM can run anything at all", "A container shares the host kernel instead of booting its own", "A container has no filesystem of its own"],
            answer: 2, explain: "A VM boots a whole guest operating system on emulated hardware; a container is just isolated processes sharing the host's kernel, which is why it starts in milliseconds and ships as megabytes rather than gigabytes. A container does have its own filesystem view — that's the image." },
          { q: "`docker exec web ls /app` fails with \"is not running\". Why?",
            choices: ["exec joins a running process; an exited container has none", "`ls` is not installed inside the image", "exec only works on containers started with -d", "The /app directory only exists at build time and is discarded afterwards"],
            answer: 0, explain: "`docker exec` runs a new command inside an already-running container, so it needs a live process to join. Once a container has exited there's nothing to enter — start it again, or inspect the image instead. The other answers describe unrelated problems." },
          { q: "Why do containerized apps log to stdout rather than to a file inside the container?",
            choices: ["Writing files inside a container is forbidden by Docker", "Log files inside a container are automatically deleted every hour", "stdout is faster than writing to a filesystem in every case", "Docker collects stdout, so `docker logs` can show it"],
            answer: 3, explain: "Docker captures the process's stdout and stderr, which is what `docker logs` replays and what log collectors read in production. A file written inside the container would sit in the writable layer and disappear with it. Writing files is allowed — it's just the wrong place for logs." }
        ]
      }
    ]
  });
})();
