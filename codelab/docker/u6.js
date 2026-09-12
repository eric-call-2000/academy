/* Docker & Containers — Unit 6: Data and configuration that survive */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var SERVER = L(
    "const http = require(\"http\");",
    "const port = process.env.PORT || 3000;",
    "http.createServer(handler).listen(port, \"0.0.0.0\");",
    "");
  var WORKER = L(
    "const url = process.env.DATABASE_URL;",
    "if (!url) throw new Error(\"Missing required env var DATABASE_URL\");",
    "");
  var PKG = L("{", "  \"name\": \"shop\",", "  \"dependencies\": { \"express\": \"4.19.2\" }", "}", "");
  var DF = L(
    "FROM node:20-alpine",
    "WORKDIR /app",
    "COPY package*.json ./",
    "RUN npm ci",
    "COPY . .",
    "EXPOSE 3000",
    "CMD [\"node\", \"server.js\"]",
    "");
  var HEALTH_DF = L(
    "FROM node:20-alpine",
    "WORKDIR /app",
    "COPY package*.json ./",
    "RUN npm ci",
    "COPY . .",
    "EXPOSE 3000",
    "# A HEALTHCHECK asks the app itself whether it is well.",
    "HEALTHCHECK CMD curl -f http://localhost:3000/health",
    "CMD [\"node\", \"server.js\"]",
    "");
  var APPS = {
    "node server.js": {
      requires: ["server.js"],
      listen: { port: "$PORT|3000", host: "$HOST|0.0.0.0" },
      logs: ["Listening on http://{host}:{port}"],
      routes: { "/": "Hello from {GREETING|the shop}", "/health": "@health" },
      connects: "$DATABASE_URL",
      sigterm: "graceful"
    },
    "node worker.js": {
      requires: ["worker.js"],
      env: { required: ["DATABASE_URL"] },
      logs: ["worker started"],
      exit: 0,
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
  function world(extra) {
    var fs = {
      "/home/you/project/server.js": SERVER,
      "/home/you/project/worker.js": WORKER,
      "/home/you/project/package.json": PKG,
      "/home/you/project/package-lock.json": "{ \"lockfileVersion\": 3 }\n",
      "/home/you/project/Dockerfile": DF
    };
    Object.keys(extra || {}).forEach(function (k) { fs[k] = extra[k]; });
    return fs;
  }

  window.CODELAB.addUnit("docker", {
    id: "docker-u6",
    title: "Data and configuration that survive",
    icon: "💾",
    blurb: "Named volumes that outlive the container, bind mounts that show your edits live, configuration injected at run time, and a container that reports its own health.",
    cheat: [
      { h: "Named volumes", lang: "sh", code: L(
        "docker run -d -v shopdata:/var/lib/postgresql/data postgres:16",
        "docker rm -f db          # the container goes…",
        "docker volume ls         # …the volume stays",
        "docker volume rm shopdata   # this is what deletes the data"),
        note: "Docker manages where a named volume lives. Use one for anything you would be upset to lose." },
      { h: "Bind mounts", lang: "sh", code: L(
        "docker run -d -v \"$PWD/src:/app/src\" shop:1.0",
        "#              ▲ a HOST path          ▲ inside the container",
        "echo \"Autumn sale\" > src/banner.txt   # visible instantly, no rebuild"),
        note: "A source path starting with / or . is a bind mount; anything else names a volume. Bind mounts are a development tool." },
      { h: "Configuration at run time", lang: "sh", code: L(
        "docker run -d -e GREETING=Autumn shop:1.0",
        "docker run -d --env-file winter.env shop:1.0",
        "# one image, many configurations — the build-time/run-time split again"),
        note: "Never bake an environment's settings into an image. Build once, configure per run." },
      { h: "Health and restarts", lang: "sh", code: L(
        "HEALTHCHECK CMD curl -f http://localhost:3000/health   # in the Dockerfile",
        "docker ps        # STATUS shows Up 3 seconds (healthy)",
        "",
        "docker run -d --restart on-failure shop:1.0   # restart if it exits non-zero"),
        note: "Health is the app's own answer about itself. `unless-stopped` is the usual production policy." }
    ],
    lessons: [

      {
        id: "docker-u6-1",
        title: "Named volumes: remove the container, keep the data",
        kind: "shell", chip: "DOCKER", xp: 25, mins: 16,
        cwd: "/home/you/project",
        fs: world(),
        apps: APPS,
        brief: "Unit 1 showed the writable layer dying with its container. For a database, that's a catastrophe waiting for the first `docker rm`.\n\nA **volume** is storage that lives outside any container. Mount one at the path where the data lives — `-v shopdata:/var/lib/postgresql/data` — and the container writes straight through to it. Remove the container, start a new one with the same volume, and the data is exactly where it was. Docker manages where the volume actually sits; you refer to it by name.\n\nThe rule of thumb: **anything you would be upset to lose does not belong in a container's writable layer.**\n\nProve both halves. Run a database with no volume, write a row, destroy it, and watch the row vanish. Then do it again with a volume and watch it survive.",
        example: { lang: "sh", code: "docker run -d --name db -v shopdata:/var/lib/postgresql/data \\\n  -e POSTGRES_PASSWORD=example postgres:16" },
        steps: [
          { text: "No volume: run `plain`, write a file in the data directory, then remove it and start `plain2` the same way.",
            test: L(
              "T.expect(T.ran(/docker exec \\w+ touch/), 'Write something: docker exec plain touch /var/lib/postgresql/data/orders');",
              "T.expect(T.container('plain2'), 'Then remove plain (docker rm -f plain) and start plain2 with the same command.');") },
          { text: "The data is gone — it lived in the container's writable layer.",
            test: L(
              "T.eq(T.fileIn('plain2', '/var/lib/postgresql/data/orders'), null, 'A new container starts from the image, so the file written in the old one is gone.');") },
          { text: "Now with a volume: run `db` mounting `shopdata` at the data directory, write the file, remove `db`, start `db2` with the same volume.",
            test: L(
              "T.expect(T.container('db2'), 'Start db2 with the same -v shopdata:/var/lib/postgresql/data mount.');",
              "T.expect(T.volumes().indexOf('shopdata') !== -1, 'The volume shopdata should exist — Docker creates it on first use.');",
              "T.eq(T.container('db2').mounts, [{ type: 'volume', source: 'shopdata', target: '/var/lib/postgresql/data' }], 'db2 should mount the named volume at the data directory.');") },
          { text: "This time the data survived the container.",
            test: L(
              "T.eq(T.fileIn('db2', '/var/lib/postgresql/data/orders'), '', 'The file written by the FIRST container should still be there, because it was written into the volume rather than the writable layer.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# postgres:16 keeps its data in /var/lib/postgresql/data",
            "",
            "# 1) Without a volume: run plain, write a file, remove it, run plain2:",
            "",
            "# 2) With a volume: run db (-v shopdata:…), write, remove, run db2:",
            "",
            "") }
        ],
        hints: [
          "Each database container needs `-e POSTGRES_PASSWORD=example`.",
          "Part 1: `docker run -d --name plain -e POSTGRES_PASSWORD=example postgres:16`, `docker exec plain touch /var/lib/postgresql/data/orders`, `docker rm -f plain`, then the same run with `--name plain2`.",
          "Part 2 is identical but every run line gains `-v shopdata:/var/lib/postgresql/data`, with names db and db2."
        ],
        solution: {
          "commands.sh": L(
            "# 1) No volume:",
            "docker run -d --name plain -e POSTGRES_PASSWORD=example postgres:16",
            "docker exec plain touch /var/lib/postgresql/data/orders",
            "docker rm -f plain",
            "docker run -d --name plain2 -e POSTGRES_PASSWORD=example postgres:16",
            "",
            "# 2) With a named volume:",
            "docker run -d --name db -v shopdata:/var/lib/postgresql/data -e POSTGRES_PASSWORD=example postgres:16",
            "docker exec db touch /var/lib/postgresql/data/orders",
            "docker rm -f db",
            "docker run -d --name db2 -v shopdata:/var/lib/postgresql/data -e POSTGRES_PASSWORD=example postgres:16",
            "")
        }
      },

      {
        id: "docker-u6-2",
        title: "Bind mounts: edit on your machine, see it in the container",
        kind: "shell", chip: "DOCKER", xp: 20, mins: 14,
        cwd: "/home/you/project",
        fs: world({ "/home/you/project/src/banner.txt": "Summer sale\n" }),
        apps: APPS,
        setup: "docker build -t shop:1.0 .",
        brief: "Rebuilding an image for every one-line change during development is miserable. A **bind mount** removes the loop: it maps a directory on **your machine** into the container, so the container reads your files as you save them.\n\n`-v \"$PWD/src:/app/src\"` means *\"the `src` directory here, mounted at `/app/src` inside\"*. Edit a file on the host and the container sees the new content immediately — no rebuild, no restart.\n\nThe difference from a named volume is which side owns the data. A named volume is managed by Docker and is for data the *container* produces. A bind mount is a window onto **your** filesystem, and it's a development tool: in production you ship the files in the image instead, so what runs is what you built and tested.\n\nMount the source directory, change a file on the host, and read it back from inside the container.",
        steps: [
          { text: "Run `web` with the project's `src` directory bind-mounted at `/app/src`.",
            test: L(
              "T.expect(T.container('web'), 'Run it: docker run -d --name web -v \"$PWD/src:/app/src\" shop:1.0');",
              "T.eq(T.container('web').mounts, [{ type: 'bind', source: '/home/you/project/src', target: '/app/src' }], 'The mount should be a bind from this project\\'s src directory. $PWD expands to where you are.');") },
          { text: "Change the file **on the host**: `echo \"Autumn sale\" > src/banner.txt`",
            test: L(
              "T.expect(T.ran(/echo .*banner\\.txt/), 'Edit it from the host side: echo \"Autumn sale\" > src/banner.txt');",
              "T.eq(T.file('src/banner.txt'), 'Autumn sale\\n', 'The host file should now read Autumn sale.');") },
          { text: "Read it from inside the container — no rebuild, no restart.",
            test: L(
              "T.expect(T.ran(/docker exec \\w+ cat/), 'Read it back: docker exec web cat /app/src/banner.txt');",
              "T.expect(T.said('Autumn sale'), 'The container should see the NEW content. That is the point of a bind mount — it is a window onto your filesystem.');",
              "T.eq(T.fileIn('web', '/app/src/banner.txt'), 'Autumn sale\\n', 'And the container view agrees.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# shop:1.0 is built, and src/banner.txt currently says \"Summer sale\".",
            "",
            "# 1) Run web with src bind-mounted at /app/src:",
            "",
            "# 2) Change the banner on the HOST:",
            "",
            "# 3) Read it from inside the container:",
            "",
            "") }
        ],
        hints: [
          "`docker run -d --name web -v \"$PWD/src:/app/src\" shop:1.0` — the quotes keep the path in one piece.",
          "`echo \"Autumn sale\" > src/banner.txt` runs on the host, in your project directory.",
          "`docker exec web cat /app/src/banner.txt` should print the new text."
        ],
        solution: {
          "commands.sh": L(
            "# 1) Bind-mount src:",
            "docker run -d --name web -v \"$PWD/src:/app/src\" shop:1.0",
            "",
            "# 2) Edit on the host:",
            "echo \"Autumn sale\" > src/banner.txt",
            "",
            "# 3) The container already sees it:",
            "docker exec web cat /app/src/banner.txt",
            "")
        }
      },

      {
        id: "docker-u6-3",
        title: "Configuration at run time: -e and --env-file",
        kind: "shell", chip: "DOCKER", xp: 20, mins: 14,
        cwd: "/home/you/project",
        fs: world({ "/home/you/project/winter.env": "GREETING=Winter\n" }),
        apps: APPS,
        setup: "docker build -t shop:1.0 .",
        brief: "Deploying Your App made the case once: configuration is **not** part of the build. The same artifact should run in staging and production, with the environment supplying the difference. Containers make that concrete — one image, many configurations.\n\n`-e KEY=value` sets one variable for one container. `--env-file path` reads a whole file of them, which is how you keep a dozen settings out of a very long command line.\n\nThis is the build-time/run-time split from Unit 2, on the configuration side: `ENV` in a Dockerfile bakes a default **into the image** (fine for `NODE_ENV=production`, never for a secret); `-e` at run time decides what *this* container does.\n\nRun the same image three times, greeting the world differently each time.",
        steps: [
          { text: "Run `autumn` on port 8081 with `-e GREETING=Autumn`, and `spring` on 8082 with `-e GREETING=Spring`.",
            test: L(
              "T.expect(T.container('autumn') && T.container('spring'), 'Start both, each with its own -e GREETING=… and its own host port.');",
              "T.eq(T.curl('http://localhost:8081').body, 'Hello from Autumn', 'The container configured with GREETING=Autumn should say so.');",
              "T.eq(T.curl('http://localhost:8082').body, 'Hello from Spring', 'And this one should say Spring — same image, different run-time configuration.');") },
          { text: "Run `winter` on 8083 using `--env-file winter.env` instead.",
            test: L(
              "T.expect(T.container('winter'), 'Run it: docker run -d --name winter -p 8083:3000 --env-file winter.env shop:1.0');",
              "T.eq(T.container('winter').env.GREETING, 'Winter', 'The variable should come from the file.');",
              "T.eq(T.curl('http://localhost:8083').body, 'Hello from Winter', 'And the app should use it.');") },
          { text: "All three are the same image — confirm it.",
            test: L(
              "var id = T.image('shop:1.0').id;",
              "T.eq(T.container('autumn').image, id, 'autumn runs shop:1.0');",
              "T.eq(T.container('spring').image, id, 'so does spring');",
              "T.eq(T.container('winter').image, id, 'and so does winter — build once, configure per run.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# shop:1.0 is built. The app greets with $GREETING (default: the shop).",
            "# winter.env already exists and contains GREETING=Winter",
            "",
            "# 1) autumn on 8081, spring on 8082, each with -e:",
            "",
            "# 2) winter on 8083, using the env file:",
            "",
            "") }
        ],
        hints: [
          "`docker run -d --name autumn -p 8081:3000 -e GREETING=Autumn shop:1.0`",
          "The same line with spring, 8082 and `GREETING=Spring`.",
          "`docker run -d --name winter -p 8083:3000 --env-file winter.env shop:1.0`"
        ],
        solution: {
          "commands.sh": L(
            "docker run -d --name autumn -p 8081:3000 -e GREETING=Autumn shop:1.0",
            "docker run -d --name spring -p 8082:3000 -e GREETING=Spring shop:1.0",
            "docker run -d --name winter -p 8083:3000 --env-file winter.env shop:1.0",
            "")
        }
      },

      {
        id: "docker-u6-4",
        title: "Health checks and restart policies",
        kind: "shell", chip: "DOCKER", xp: 25, mins: 16,
        cwd: "/home/you/project",
        fs: world({ "/home/you/project/Dockerfile": HEALTH_DF }),
        apps: APPS,
        setup: "docker build -t shop:1.0 .",
        brief: "\"Running\" is a weak claim. A container whose process hasn't exited counts as running even if the app inside is wedged and answering nothing.\n\nA **HEALTHCHECK** turns that into a real answer. The image carries a command Docker runs periodically *inside* the container — usually a request to the app's own `/health` — and the container's status becomes `healthy` or `unhealthy` accordingly. `docker ps` shows it, and Compose can wait for it (Unit 7).\n\nSeparately, a **restart policy** decides what happens when a container exits. `--restart on-failure` restarts it when it exits non-zero and leaves it alone when it exits cleanly; `unless-stopped` is the usual choice for a real service.\n\nThe Dockerfile here already has a HEALTHCHECK. Start a healthy container, then start one that cannot possibly work — a worker with no `DATABASE_URL` — under a restart policy, and watch Docker keep trying.",
        steps: [
          { text: "Run `web` published on 8080 and confirm Docker reports it **healthy**.",
            test: L(
              "T.expect(T.container('web'), 'Run it: docker run -d --name web -p 8080:3000 shop:1.0');",
              "T.eq(T.container('web').health, 'healthy', 'The HEALTHCHECK asks the app at /health, and this one answers. If it is unhealthy, check the container is reachable on its own port.');") },
          { text: "See it in `docker ps` — the status line carries the health.",
            test: L(
              "T.expect(T.ran(/^docker ps/m), 'Run docker ps');",
              "T.expect(T.said('(healthy)'), 'The STATUS column should read something like \"Up 3 seconds (healthy)\".');") },
          { text: "Now a container that cannot work: run the worker with **no** `DATABASE_URL`, under `--restart on-failure`, named `worker`.",
            test: L(
              "T.expect(T.container('worker'), 'Run: docker run -d --name worker --restart on-failure shop:1.0 node worker.js — the arguments after the image replace the image\\'s CMD.');",
              "T.expect(T.logs('worker').indexOf('Missing required env var DATABASE_URL') !== -1, 'The worker should fail at startup and say why.');") },
          { text: "Docker keeps restarting it — that's the policy doing its job.",
            test: L(
              "T.eq(T.container('worker').status, 'restarting', 'With --restart on-failure and a non-zero exit, Docker puts the container into restarting.');",
              "T.expect(T.container('worker').restartCount >= 1, 'And it has already tried at least once. A restart policy keeps a crashing container cycling — it is not a fix for the bug.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# shop:1.0 is built, and its Dockerfile carries a HEALTHCHECK.",
            "",
            "# 1) Run web on 8080, then list containers to see its health:",
            "",
            "# 2) Run the worker with no DATABASE_URL, with a restart policy:",
            "",
            "") }
        ],
        hints: [
          "`docker run -d --name web -p 8080:3000 shop:1.0` then `docker ps`.",
          "Everything after the image name replaces the image's CMD: `shop:1.0 node worker.js`.",
          "`docker run -d --name worker --restart on-failure shop:1.0 node worker.js`"
        ],
        solution: {
          "commands.sh": L(
            "# 1) A healthy container:",
            "docker run -d --name web -p 8080:3000 shop:1.0",
            "docker ps",
            "",
            "# 2) One that cannot start, under a restart policy:",
            "docker run -d --name worker --restart on-failure shop:1.0 node worker.js",
            "")
        }
      },

      {
        id: "docker-quiz-6",
        title: "Unit 6 quiz: Volumes, config and health",
        kind: "quiz", xp: 10,
        brief: "Volumes versus bind mounts, run-time configuration, health and restarts. 80% to pass.",
        questions: [
          { q: "A database container has no volume. You `docker rm` it and start a new one from the same image. What happened to the rows?",
            choices: ["They were saved into the image when the container stopped running", "They are gone with the container's writable layer", "They are restored automatically from Docker's cache", "They survive, because databases always write outside the container"],
            answer: 1, explain: "Without a volume, everything the database wrote went into the container's thin writable layer, which is deleted with the container. Images are never modified by running containers. A named volume mounted at the data directory is what makes the data outlive the container." },
          { q: "What is the difference between `-v shopdata:/data` and `-v \"$PWD/src:/data\"`?",
            choices: ["The first is a named volume Docker manages; the second is a host directory", "The first is read-only and the second is writable", "The first works only on Linux hosts, the second everywhere", "There is none; they are two spellings of the same thing"],
            answer: 0, explain: "A source that looks like a path (starting with / or .) is a bind mount onto your filesystem; anything else names a volume that Docker stores and manages. Volumes suit data the container produces; bind mounts suit development, where you want your edits visible immediately." },
          { q: "Why configure a container with `-e` rather than baking values in with `ENV`?",
            choices: ["`ENV` values are ignored by most base images at run time", "`-e` is the only way to set a variable that the app can read", "So one tested image can run in every environment", "Because `ENV` values are visible in `docker history` and `-e` values are not"],
            answer: 2, explain: "Build once, configure per run: the same image goes to staging and production and the environment supplies the difference, which is what makes a promotion trustworthy. ENV is fine for real defaults; it's a bad place for anything environment-specific, and a terrible place for secrets." },
          { q: "A container shows `Up 2 minutes` in `docker ps`. What does that prove about the app inside?",
            choices: ["That the app is accepting requests normally", "That the app passed its HEALTHCHECK two minutes ago", "That the app has not crashed or exited", "That the app finished starting up successfully"],
            answer: 2, explain: "\"Up\" only means the main process hasn't exited — it can be deadlocked, still starting, or answering errors. A HEALTHCHECK is what converts that into a real claim, by running a command inside the container and reporting healthy or unhealthy alongside the status." },
          { q: "What does `--restart on-failure` do when a container exits with code 0?",
            choices: ["Restarts it, because every exit counts as a failure", "Nothing — a clean exit is left alone", "Restarts it once and then gives up if it exits again", "Removes the container automatically to free the name"],
            answer: 1, explain: "on-failure restarts only on a non-zero exit, so a job that completes successfully stays finished. `always` and `unless-stopped` restart regardless. A restart policy keeps a crashing service cycling; it doesn't fix the reason it crashed." },
          { q: "Where should a HEALTHCHECK command send its request?",
            choices: ["To the published host port, so it tests the mapping too", "To the container's own port, from inside the container", "To the container's name on the default bridge network", "To an external monitoring service that records the result"],
            answer: 1, explain: "The check runs inside the container, so it uses localhost and the container's own port — `curl -f http://localhost:3000/health`. Going via a published host port would test your port mapping rather than the app, and wouldn't work at all for a container that publishes nothing." }
        ]
      }
    ]
  });
})();
