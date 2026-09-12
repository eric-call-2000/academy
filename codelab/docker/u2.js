/* Docker & Containers — Unit 2: Your first Dockerfile */
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
  var SHELLFORM_DF = L(
    "# The image as it shipped in 2019. Don't edit this file —",
    "# write the replacement in the Dockerfile.exec tab.",
    "FROM node:20-alpine",
    "WORKDIR /app",
    "COPY . .",
    "RUN npm ci",
    "CMD node server.js",
    "");
  var APPS = {
    "node server.js": {
      requires: ["server.js"],
      listen: { port: "$PORT|3000", host: "$HOST|0.0.0.0" },
      logs: ["Listening on http://{host}:{port}"],
      routes: { "/": "Hello from {GREETING|the shop}", "/health": "@health" },
      sigterm: "graceful"
    }
  };
  function base(extra) {
    var fs = {
      "/home/you/project/server.js": SERVER,
      "/home/you/project/package.json": PKG,
      "/home/you/project/package-lock.json": "{ \"lockfileVersion\": 3 }\n"
    };
    Object.keys(extra || {}).forEach(function (k) { fs[k] = extra[k]; });
    return fs;
  }

  window.CODELAB.addUnit("docker", {
    id: "docker-u2",
    title: "Your first Dockerfile",
    icon: "📝",
    blurb: "FROM, WORKDIR, COPY, RUN, CMD — the build context and .dockerignore, exec form versus shell form, and tags. Every checkpoint grades the IMAGE you built, never the text you wrote.",
    cheat: [
      { h: "A Dockerfile, line by line", lang: "sh", code: L(
        "FROM node:20-alpine      # the base image you build on top of",
        "WORKDIR /app             # cd, for every instruction after it",
        "COPY package*.json ./    # host → image (paths are relative to WORKDIR)",
        "RUN npm ci               # runs AT BUILD TIME, result becomes a layer",
        "COPY . .                 # the rest of the build context",
        "USER node                # stop running as root",
        "EXPOSE 3000              # documentation — publishes NOTHING",
        "CMD [\"node\", \"server.js\"] # what to run when a container STARTS"),
        note: "RUN happens while building the image. CMD happens when a container starts. Two different clocks." },
      { h: "Build and run", lang: "sh", code: L(
        "docker build -t shop:1.0 .    # the trailing dot is the build CONTEXT",
        "docker build -f Dockerfile.dev -t shop:dev .   # a different recipe",
        "docker run -d -p 8080:3000 shop:1.0"),
        note: "The dot is the directory sent to the builder — not a decoration." },
      { h: ".dockerignore is anchored", lang: "sh", code: L(
        "node_modules        # only the TOP-LEVEL node_modules",
        ".env                # secrets never belong in an image",
        "# and to exclude them at every depth, use a leading double star:",
        "# **/node_modules"),
        note: "This is the one place .dockerignore differs from .gitignore, and it bites real projects." },
      { h: "Exec form vs shell form", lang: "sh", code: L(
        "CMD [\"node\", \"server.js\"]   # exec form: your app is PID 1",
        "CMD node server.js          # shell form: /bin/sh -c is PID 1",
        "#   …and /bin/sh does not pass signals on to your app"),
        note: "The difference shows up as an exit code: 0 for a clean stop, 137 for one that was killed." },
      { h: "Tags", lang: "sh", code: L(
        "docker build -t shop:1.0 .",
        "docker tag shop:1.0 shop:latest   # a second NAME for the same image",
        "docker images"),
        note: "`latest` is just a tag that someone moved last. It is never a promise about versions." }
    ],
    lessons: [

      {
        id: "docker-u2-1",
        title: "FROM, WORKDIR, COPY, CMD: containerize the shop",
        kind: "shell", chip: "DOCKER", xp: 20, mins: 16,
        cwd: "/home/you/project",
        fs: base(),
        apps: APPS,
        brief: "Time to write the recipe. A **Dockerfile** is a list of instructions, run top to bottom, that turns a base image into yours.\n\nFive instructions get you a working image:\n\n- `FROM node:20-alpine` — start from an image that already has Node.\n- `WORKDIR /app` — every instruction after this runs there, and it's the container's starting directory.\n- `COPY . .` — copy the **build context** (the directory you pass to `docker build`) into the image.\n- `RUN npm ci` — execute a command *while building*; whatever it writes becomes part of the image.\n- `CMD [\"node\", \"server.js\"]` — what to run when a container **starts**. Not now, later.\n\nThat `RUN` versus `CMD` split is the two clocks from Deploying Your App, in container form: build time bakes the image, run time starts a container from it.\n\nWrite the Dockerfile in its own tab, then build it and run it. The checkpoints read the **image you produced** — a comment claiming `CMD` wouldn't fool them.\n\n*The app is described as: listens on `$PORT` (default 3000) at `0.0.0.0`, logs `Listening on http://0.0.0.0:3000`, and answers `/` with a greeting.*",
        example: { lang: "sh", code: "docker build -t shop:1.0 .\n# #2 [1/5] FROM node:20-alpine\n# #3 [2/5] WORKDIR /app\n# …\n# => naming to shop:1.0\n\ndocker run -d --name web shop:1.0" },
        steps: [
          { text: "Write the Dockerfile (the second tab), then build it as `shop:1.0` with `docker build -t shop:1.0 .`",
            test: L(
              "T.expect(T.ran(/^docker build/m), 'Run docker build -t shop:1.0 . — the trailing dot is the build context.');",
              "T.expect(T.image('shop:1.0'), 'No image called shop:1.0 was produced. Check the build output in the Terminal pane for the failing instruction.');") },
          { text: "The image starts from `node:20-alpine`, works in `/app`, and holds your app's files.",
            test: L(
              "var img = T.image('shop:1.0');",
              "T.eq(img.base, 'node:20-alpine', 'FROM should be node:20-alpine');",
              "T.eq(img.workdir, '/app', 'Set WORKDIR /app before the COPY, so relative paths land in /app');",
              "T.expect(img.files.indexOf('/app/server.js') !== -1, 'server.js is not in the image — COPY the build context in (COPY . .).');",
              "T.expect(img.files.indexOf('/app/node_modules/express/package.json') !== -1, 'The dependencies are missing — add RUN npm ci so they are installed at BUILD time.');") },
          { text: "`CMD` uses the exec form, so the image knows what to start.",
            test: L(
              "T.eq(T.image('shop:1.0').cmd, ['node', 'server.js'], 'CMD should be the exec form: CMD [\"node\", \"server.js\"] — a JSON array, with double quotes.');") },
          { text: "Run a container from it named `web`, and check the app started.",
            test: L(
              "T.expect(T.container('web'), 'Run a container: docker run -d --name web shop:1.0');",
              "T.eq(T.container('web').status, 'running', 'The container should still be running. If it exited, read docker logs web.');",
              "T.expect(T.logs('web').indexOf('Listening on') !== -1, 'The app should have logged its startup line.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# Write the Dockerfile in the next tab first, then:",
            "",
            "# 1) Build it as shop:1.0 (don't forget the trailing dot):",
            "",
            "# 2) Run a container named web from it:",
            "",
            "") },
          { name: "Dockerfile", content: L(
            "# Your first Dockerfile. Five instructions, in this order:",
            "#   FROM     node:20-alpine",
            "#   WORKDIR  /app",
            "#   COPY     the build context into the image",
            "#   RUN      npm ci   (installs dependencies at BUILD time)",
            "#   CMD      exec form: [\"node\", \"server.js\"]",
            "",
            "") }
        ],
        hints: [
          "Start with `FROM node:20-alpine` and `WORKDIR /app`. Every path after WORKDIR is relative to /app.",
          "`COPY . .` copies the build context into the current WORKDIR. Put `RUN npm ci` after it so package.json is already there.",
          "Finish the Dockerfile with `CMD [\"node\", \"server.js\"]` — JSON array, double quotes. Then in commands.sh: `docker build -t shop:1.0 .` and `docker run -d --name web shop:1.0`."
        ],
        solution: {
          "commands.sh": L(
            "# 1) Build it as shop:1.0:",
            "docker build -t shop:1.0 .",
            "",
            "# 2) Run a container named web from it:",
            "docker run -d --name web shop:1.0",
            ""),
          "Dockerfile": L(
            "FROM node:20-alpine",
            "WORKDIR /app",
            "COPY . .",
            "RUN npm ci",
            "CMD [\"node\", \"server.js\"]",
            "")
        }
      },

      {
        id: "docker-u2-2",
        title: "The build context and .dockerignore",
        kind: "shell", chip: "DOCKER", xp: 20, mins: 15,
        cwd: "/home/you/project",
        fs: base({
          "/home/you/project/Dockerfile": L("FROM node:20-alpine", "WORKDIR /app", "COPY . .", "RUN npm ci", "CMD [\"node\", \"server.js\"]", ""),
          "/home/you/project/.env": "API_KEY=sk_test_local\n",
          "/home/you/project/node_modules/left-pad/index.js": "module.exports = pad;\n",
          "/home/you/project/packages/api/node_modules/old/index.js": "module.exports = 1;\n"
        }),
        apps: APPS,
        brief: "That trailing dot in `docker build -t shop:1.0 .` is the **build context**: the directory handed to the builder. Everything in it can be `COPY`'d — including things you never meant to ship.\n\nThis project has three of them. `node_modules/` holds the host's install, built for *your* machine and about to be overwritten by `RUN npm ci` anyway. `.env` holds a secret. And `packages/api/node_modules/` is a second, nested copy.\n\n`.dockerignore` keeps them out. It looks like `.gitignore` but differs in one way that catches people out: **its patterns are anchored to the context root**. `node_modules` excludes the top-level directory *only* — the nested one still ships. A leading `**/` matches at every depth, the top level included.\n\nWrite the `.dockerignore`, build, and check what actually made it into the image.",
        steps: [
          { text: "Write `.dockerignore` so the host's `node_modules` and `.env` stay out, then build `shop:1.0`.",
            test: L(
              "T.expect(T.image('shop:1.0'), 'Build the image: docker build -t shop:1.0 .');",
              "var f = T.image('shop:1.0').files;",
              "T.expect(f.indexOf('/app/.env') === -1, 'The .env file is IN the image — add a line for it to .dockerignore. Anyone with the image can read it.');",
              "T.expect(f.indexOf('/app/node_modules/left-pad/index.js') === -1, 'The host\\'s node_modules was copied in — exclude it.');") },
          { text: "The dependencies `npm ci` installs are still there — ignoring the host's copy doesn't skip the install.",
            test: L(
              "var f = T.image('shop:1.0').files;",
              "T.expect(f.indexOf('/app/node_modules/express/package.json') !== -1, 'express should still be installed by RUN npm ci inside the image — .dockerignore only filters what is COPIED in.');") },
          { text: "Catch the nested one: `packages/api/node_modules` must be excluded too.",
            test: L(
              "var f = T.image('shop:1.0').files;",
              "T.expect(f.indexOf('/app/packages/api/node_modules/old/index.js') === -1, 'The NESTED node_modules is still in the image. A bare `node_modules` line is anchored to the context root — a leading double-star matches every depth.');",
              "T.expect(f.indexOf('/app/server.js') !== -1, 'Your own source should still be copied in — do not exclude too much.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# The Dockerfile is written already. Write .dockerignore (tab 2),",
            "# then build:",
            "",
            "") },
          { name: ".dockerignore", content: L(
            "# One pattern per line. Patterns are anchored to the context ROOT.",
            "#   node_modules      → only the top-level one",
            "#   **/node_modules   → every node_modules, at any depth",
            "",
            "") }
        ],
        hints: [
          "Two things must go: every `node_modules` (at any depth) and `.env`.",
          "A bare `node_modules` line only matches the one at the context root. Prefix it with `**/` to match nested ones as well.",
          "`.dockerignore` holds `**/node_modules` and `.env`; then run `docker build -t shop:1.0 .` in commands.sh."
        ],
        solution: {
          "commands.sh": L("docker build -t shop:1.0 .", ""),
          ".dockerignore": L("**/node_modules", ".env", "")
        }
      },

      {
        id: "docker-u2-3",
        title: "CMD, exec form, and who gets the signal",
        kind: "shell", chip: "DOCKER", xp: 20, mins: 16,
        cwd: "/home/you/project",
        fs: base({ "/home/you/project/Dockerfile": SHELLFORM_DF }),
        apps: APPS,
        brief: "`CMD` can be written two ways, and the difference is invisible until the day you stop a container.\n\n- **Shell form** — `CMD node server.js`. Docker runs it through `/bin/sh -c`, so the **shell** is PID 1 and your app is its child.\n- **Exec form** — `CMD [\"node\", \"server.js\"]`. Your app *is* PID 1.\n\n`docker stop` sends **SIGTERM**, waits 10 seconds, then SIGKILL. In shell form the signal goes to `/bin/sh`, which does not pass it on — so your app never hears it, the 10 seconds run out, and the container is killed: exit code **137**. In exec form the app gets the signal, shuts down cleanly, and exits **0**.\n\nThe shipped `Dockerfile` uses shell form; leave it alone. Write the replacement in the **Dockerfile.exec** tab and build that one with `-f`, so both images exist side by side and you can compare what stopping them costs. The exit code **is** the lesson.\n\n*(This app handles SIGTERM. One that ignores it exits 137 even in exec form, because PID 1 gets no default signal handling — `--init` is the fix, and Unit 8's project meets that case.)*",
        example: { lang: "sh", code: "docker build -t shop:shell .                  # the shipped Dockerfile\ndocker build -f Dockerfile.exec -t shop:exec .  # your replacement" },
        steps: [
          { text: "Build the shipped (shell-form) Dockerfile as `shop:shell`, run it as `old`, and stop it.",
            test: L(
              "T.expect(T.image('shop:shell'), 'Build the shipped file first: docker build -t shop:shell .');",
              "T.eq(T.image('shop:shell').cmd, ['/bin/sh', '-c', 'node server.js'], 'Shell form becomes /bin/sh -c \"…\" — leave the shipped Dockerfile as it is.');",
              "T.expect(T.container('old'), 'Run it: docker run -d --name old shop:shell');") },
          { text: "Read what that cost: `old` was killed after the timeout, with exit code 137.",
            test: L(
              "T.eq(T.container('old').status, 'exited', 'Stop it with docker stop old');",
              "T.eq(T.container('old').exitCode, 137, 'Exit 137 means SIGKILL — /bin/sh never passed SIGTERM to the app, so Docker waited the full timeout and killed it.');",
              "T.eq(T.container('old').stoppedAfter, 10, 'It took the whole 10-second grace period.');") },
          { text: "Write `Dockerfile.exec` with an exec-form `CMD`, build it as `shop:exec` with `-f`, and run it as `neu`.",
            test: L(
              "T.expect(T.image('shop:exec'), 'Build your replacement: docker build -f Dockerfile.exec -t shop:exec .');",
              "T.eq(T.image('shop:exec').cmd, ['node', 'server.js'], 'Exec form is a JSON array: CMD [\"node\", \"server.js\"]');",
              "T.expect(T.container('neu'), 'Run the new image: docker run -d --name neu shop:exec');") },
          { text: "This one shuts down cleanly: exit code 0, and no 10-second wait.",
            test: L(
              "T.eq(T.container('neu').status, 'exited', 'Stop it too: docker stop neu');",
              "T.eq(T.container('neu').exitCode, 0, 'In exec form the app is PID 1, gets SIGTERM, and exits cleanly — 0.');",
              "T.expect(T.container('neu').stoppedAfter < 10, 'And it stops at once instead of waiting out the grace period.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# Two builds, two containers, two exit codes to compare.",
            "",
            "# 1) The shipped shell-form Dockerfile:",
            "",
            "# 2) Your exec-form replacement (write it in the Dockerfile.exec tab):",
            "",
            "") },
          { name: "Dockerfile.exec", content: L(
            "# Same as the shipped Dockerfile, with one difference:",
            "# write CMD in EXEC form, as a JSON array.",
            "FROM node:20-alpine",
            "WORKDIR /app",
            "COPY . .",
            "RUN npm ci",
            "# CMD …",
            "") }
        ],
        hints: [
          "First three lines: `docker build -t shop:shell .`, `docker run -d --name old shop:shell`, `docker stop old`.",
          "In the Dockerfile.exec tab, replace the commented CMD with `CMD [\"node\", \"server.js\"]` — a JSON array with double quotes.",
          "Then three more lines: `docker build -f Dockerfile.exec -t shop:exec .`, `docker run -d --name neu shop:exec`, `docker stop neu`."
        ],
        solution: {
          "commands.sh": L(
            "# 1) The shipped shell-form Dockerfile:",
            "docker build -t shop:shell .",
            "docker run -d --name old shop:shell",
            "docker stop old",
            "",
            "# 2) The exec-form replacement:",
            "docker build -f Dockerfile.exec -t shop:exec .",
            "docker run -d --name neu shop:exec",
            "docker stop neu",
            ""),
          "Dockerfile.exec": L(
            "FROM node:20-alpine",
            "WORKDIR /app",
            "COPY . .",
            "RUN npm ci",
            "CMD [\"node\", \"server.js\"]",
            "")
        }
      },

      {
        id: "docker-u2-4",
        title: "Tags: shop:1.0, and why latest is not a version",
        kind: "shell", chip: "DOCKER", xp: 15, mins: 12,
        cwd: "/home/you/project",
        fs: base({ "/home/you/project/Dockerfile": DOCKERFILE }),
        apps: APPS,
        brief: "An image's real identity is its **digest** — a hash of its contents. A **tag** is just a human-friendly name pointing at one: `shop:1.0`, `shop:2.0`, `registry.example.com/team/shop:1.0`.\n\nBuild twice from different source and you get two different images. Tag them `1.0` and `1.1` and you can run either one — which is what makes a rollback a one-word change.\n\nThen there's `latest`. It is **not** \"the newest version\". It is the tag Docker assumes when you don't name one, and it points at whatever was tagged last — which might be an image from a year ago. `FROM node:latest` in a Dockerfile means your builds change under you without warning. Pin a real version instead.\n\nBuild two versions, then point `latest` at the **older** one and watch it happily agree.",
        steps: [
          { text: "Build `shop:1.0`, change `server.js`, then build `shop:1.1`. They are two different images.",
            test: L(
              "T.expect(T.image('shop:1.0') && T.image('shop:1.1'), 'Build both tags: docker build -t shop:1.0 . then, after editing server.js, docker build -t shop:1.1 .');",
              "T.expect(T.image('shop:1.0').id !== T.image('shop:1.1').id, 'The two images should differ — change server.js between the builds (for example: echo \"// v1.1\" >> server.js).');") },
          { text: "Point `latest` at the **older** image with `docker tag shop:1.0 shop:latest`.",
            test: L(
              "T.expect(T.ran(/^docker tag/m), 'Run docker tag shop:1.0 shop:latest');",
              "T.eq(T.image('shop:latest').id, T.image('shop:1.0').id, 'shop:latest should now name the SAME image as shop:1.0 — a tag is a pointer, not a version.');",
              "T.expect(T.image('shop:latest').id !== T.image('shop:1.1').id, 'And it is deliberately NOT the newest build. That is the whole point.');") },
          { text: "List what you have with `docker images`.",
            test: L(
              "T.expect(T.ran(/^docker images/m), 'Finish with docker images');",
              "T.expect(T.said('shop'), 'The listing should show your shop images.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# The Dockerfile is ready.",
            "",
            "# 1) Build version 1.0:",
            "",
            "# 2) Change the source, then build 1.1:",
            "#    (echo \"// v1.1\" >> server.js)",
            "",
            "# 3) Point latest at the OLD image:",
            "",
            "# 4) List your images:",
            "",
            "") }
        ],
        hints: [
          "`docker build -t shop:1.0 .` then `echo \"// v1.1\" >> server.js` then `docker build -t shop:1.1 .`",
          "`docker tag <source> <new name>` — here `docker tag shop:1.0 shop:latest`.",
          "End with `docker images`. Notice latest and 1.0 share an image id."
        ],
        solution: {
          "commands.sh": L(
            "docker build -t shop:1.0 .",
            "echo \"// v1.1\" >> server.js",
            "docker build -t shop:1.1 .",
            "docker tag shop:1.0 shop:latest",
            "docker images",
            "")
        }
      },

      {
        id: "docker-quiz-2",
        title: "Unit 2 quiz: Dockerfiles",
        kind: "quiz", xp: 10,
        brief: "Instructions, the build context, signal delivery and tags. 80% to pass.",
        questions: [
          { q: "What does the `.` at the end of `docker build -t shop:1.0 .` mean?",
            choices: ["The build context: the directory sent to the builder", "Build quietly, without printing each step", "Use only the Dockerfile found in the current working directory", "Tag the result with the current folder's name"],
            answer: 0, explain: "The final argument is the context — the directory whose contents the builder can COPY from. It's also why a stray `node_modules` or `.env` can end up in an image, and why `.dockerignore` exists. The Dockerfile's location is set separately, with `-f`." },
          { q: "When does `RUN npm ci` execute?",
            choices: ["Every time a container starts from the image", "While the image is being built", "Only when you pass --build to docker run", "Once per host, the first time the image is pulled"],
            answer: 1, explain: "RUN executes during the build, and whatever it writes becomes part of a layer in the finished image. CMD is the instruction that runs when a container starts. Mixing up the two clocks — build time and run time — is behind a lot of confusing Dockerfiles." },
          { q: "Your `.dockerignore` contains `node_modules`. Which directories are excluded?",
            choices: ["Every node_modules directory anywhere in the context", "None — the pattern needs a trailing slash to work at all", "Only the one at the top level of the build context", "Only directories that are also listed in .gitignore"],
            answer: 2, explain: "dockerignore patterns are anchored to the context root, unlike gitignore's, so a bare `node_modules` matches only the top-level directory and a nested `packages/api/node_modules` still ships. A leading `**/` matches at any depth. This difference bites real projects." },
          { q: "A container built with `CMD node server.js` takes ten seconds to stop and exits with 137. Why?",
            choices: ["Node always needs ten seconds to flush its buffers", "The app crashed while shutting itself down", "Exit code 137 always means the container ran out of memory", "/bin/sh is PID 1 and never passed SIGTERM to the app"],
            answer: 3, explain: "Shell form wraps the command in `/bin/sh -c`, so the shell is PID 1 and the app is its child. The shell doesn't forward SIGTERM, so nothing shuts down; after the ten-second grace period Docker sends SIGKILL, which reports as 137. Exec form makes the app PID 1 and it exits cleanly." },
          { q: "What does `EXPOSE 3000` do?",
            choices: ["Publishes port 3000 on the host machine automatically at run time", "Documents the port; it publishes nothing by itself", "Forces the app inside to listen on port 3000", "Opens port 3000 in the host's firewall"],
            answer: 1, explain: "EXPOSE is metadata: it records which port the image expects to serve on, which tools and `docker run -P` can read. Reaching the container from your machine still needs `-p HOST:CONTAINER` at run time. It has no effect on what the app binds to." },
          { q: "What does the tag `latest` guarantee about an image?",
            choices: ["It is the most recently built image in the repository", "It is the highest version number that has ever been published to the registry", "It is the version the maintainers consider stable", "Nothing — it is a name that points wherever it was last set"],
            answer: 3, explain: "`latest` is simply the tag used when none is given, and it points at whatever was tagged last — possibly an old build. Depending on it makes builds change underneath you, so pin a real version in FROM and tag your own releases explicitly." }
        ]
      }
    ]
  });
})();
