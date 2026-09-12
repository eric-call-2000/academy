/* Docker & Containers — Unit 3: Layers and the build cache */
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
  var GOOD_DF = L(
    "FROM node:20-alpine",
    "WORKDIR /app",
    "COPY package*.json ./",
    "RUN npm ci",
    "COPY . .",
    "USER node",
    "EXPOSE 3000",
    "CMD [\"node\", \"server.js\"]",
    "");
  var SLOW_DF = L(
    "# The Dockerfile as it stands. Don't edit it — write the faster",
    "# ordering in the Dockerfile.fast tab so you can compare the two.",
    "FROM node:20-alpine",
    "WORKDIR /app",
    "COPY . .",
    "RUN npm ci",
    "CMD [\"node\", \"server.js\"]",
    "");
  var KEEP_DF = L(
    "FROM node:20-alpine",
    "WORKDIR /app",
    "COPY package*.json ./",
    "RUN npm ci",
    "CMD [\"node\", \"server.js\"]",
    "");
  var LATER_DF = L(
    "# Cleaning up in a LATER layer. Don't edit — compare it with yours.",
    "FROM node:20-alpine",
    "WORKDIR /app",
    "COPY package*.json ./",
    "RUN npm ci",
    "RUN rm -rf /root/.npm",
    "CMD [\"node\", \"server.js\"]",
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
    id: "docker-u3",
    title: "Layers and the build cache",
    icon: "🥞",
    blurb: "Every instruction is a layer. A changed layer rebuilds everything after it, so the ORDER of your Dockerfile decides whether a one-character edit costs one second or two minutes — and deleting a file never shrinks an image.",
    cheat: [
      { h: "One instruction, one layer", lang: "sh", code: L(
        "docker history shop:1.0",
        "# IMAGE    SIZE    CREATED BY",
        "# a1b2c3   0B      CMD [\"node\" \"server.js\"]",
        "# a1b2c3   530B    COPY . .",
        "# a1b2c3   14MB    RUN npm ci",
        "# <missing> 130MB  FROM node:20-alpine"),
        note: "Metadata instructions (CMD, USER, EXPOSE, WORKDIR) add 0 bytes. COPY and RUN add whatever they write." },
      { h: "The cache rule", lang: "sh", code: L(
        "# A step is CACHED when its parent layer AND its inputs are unchanged.",
        "# Change one thing, and every step AFTER it rebuilds too.",
        "COPY . .          # ← any source edit invalidates this…",
        "RUN npm ci        # ← …so this reinstalls every time. Slow."),
        note: "Cache invalidation cascades downward. Nothing above the change is affected." },
      { h: "Order for the cache", lang: "sh", code: L(
        "COPY package*.json ./   # changes rarely",
        "RUN npm ci              # so this stays cached",
        "COPY . .                # changes constantly — keep it LAST"),
        note: "Copy the files a step depends on, run the step, then copy the rest." },
      { h: "Deleting never shrinks", lang: "sh", code: L(
        "RUN npm ci",
        "RUN rm -rf /root/.npm     # a NEW layer that hides the files",
        "#   → the bytes still ship in the layer that added them",
        "",
        "RUN npm ci && rm -rf /root/.npm   # same layer → never written"),
        note: "A file removed in a later layer is invisible but still downloaded. Clean up in the same RUN." }
    ],
    lessons: [

      {
        id: "docker-u3-1",
        title: "Every instruction is a layer: docker history",
        kind: "shell", chip: "DOCKER", xp: 15, mins: 14,
        cwd: "/home/you/project",
        fs: base({ "/home/you/project/Dockerfile": GOOD_DF }),
        apps: APPS,
        setup: "docker build -t shop:1.0 .",
        brief: "An image isn't one blob. It's a **stack of layers**, one per instruction, each holding only what that instruction changed. A container adds a thin writable layer on top of the stack — which is why starting one is instant, and why ten containers from one image cost almost nothing extra.\n\n`docker history` prints the stack, newest first, with what each layer cost. It tells you two things immediately: *which instruction made my image big*, and *what is actually in here*.\n\nYou'll notice most instructions cost **0B**. `WORKDIR`, `USER`, `EXPOSE` and `CMD` only record configuration — they add no files. The bytes come from `COPY` and `RUN`.\n\nRead the history of the image built for you, then confirm the layer stack matches the Dockerfile line for line.",
        steps: [
          { text: "Print the layer stack with `docker history shop:1.0`.",
            test: L(
              "T.expect(T.ran(/^docker history/m), 'Run docker history shop:1.0');",
              "T.expect(T.said('RUN npm ci'), 'The history should show the RUN npm ci step.');",
              "T.expect(T.said('0B'), 'Several instructions cost 0B — they add configuration, not files.');") },
          { text: "The stack matches the Dockerfile: one layer per instruction after `FROM`.",
            test: L(
              "var layers = T.image('shop:1.0').layers;",
              "T.eq(layers.map(function (l) { return l.instr.split(' ')[0]; }), ['WORKDIR', 'COPY', 'RUN', 'COPY', 'USER', 'EXPOSE', 'CMD'], 'Seven instructions follow FROM, so seven layers, in Dockerfile order.');") },
          { text: "Metadata costs nothing; `RUN npm ci` is where the bytes are.",
            test: L(
              "var layers = T.image('shop:1.0').layers;",
              "layers.filter(function (l) { return /^(USER|EXPOSE|CMD|WORKDIR)/.test(l.instr); })",
              "  .forEach(function (l) { T.eq(l.size, 0, l.instr + ' should add 0 bytes — it only records configuration.'); });",
              "var run = layers.filter(function (l) { return /^RUN/.test(l.instr); })[0];",
              "T.expect(run && run.size > 0, 'The RUN npm ci layer holds the installed packages, so it is far from empty.');") },
          { text: "Look inside: `docker image inspect --format '{{.Config.User}}' shop:1.0` reads one field of the config.",
            test: L(
              "T.expect(T.ran(/docker image inspect/), 'Run: docker image inspect --format \\'{{.Config.User}}\\' shop:1.0');",
              "T.expect(T.said('node'), 'It should print node — the USER the image runs as.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# shop:1.0 is already built from the Dockerfile in this folder.",
            "",
            "# 1) Print its layers:",
            "",
            "# 2) Read one field of its config (the user it runs as):",
            "#    use --format '{{.Config.User}}'",
            "",
            "") }
        ],
        hints: [
          "`docker history shop:1.0` prints one row per layer, newest first.",
          "The `--format` flag takes a Go template. For a field of the image config: `{{.Config.User}}`.",
          "The second line is `docker image inspect --format '{{.Config.User}}' shop:1.0`."
        ],
        solution: {
          "commands.sh": L(
            "# 1) Print its layers:",
            "docker history shop:1.0",
            "",
            "# 2) Read one field of its config:",
            "docker image inspect --format '{{.Config.User}}' shop:1.0",
            "")
        }
      },

      {
        id: "docker-u3-2",
        title: "Order for the cache: package.json before your source",
        kind: "shell", chip: "DOCKER", xp: 25, mins: 18,
        cwd: "/home/you/project",
        fs: base({ "/home/you/project/Dockerfile": SLOW_DF }),
        apps: APPS,
        brief: "This is the most practical lesson in the course: the same instructions, in a different order, turn a two-minute rebuild into a two-second one.\n\nA step is **cached** when its parent layer and its inputs are unchanged. Change something, and that step *and every step after it* rebuild. So the question for every Dockerfile is: **what changes most often, and how late can I put it?**\n\nYour source changes every few minutes. Your dependencies change every few weeks. The shipped Dockerfile does `COPY . .` and then `RUN npm ci` — so every one-character edit to `server.js` invalidates the COPY, which invalidates the install, and you reinstall everything.\n\nThe fix is to copy **only** `package*.json` first, install, and copy the rest afterwards. Then a source edit invalidates only the last COPY.\n\nWrite the faster ordering in **Dockerfile.fast**, then build each version twice with an edit in between, and compare what was cached.",
        example: { lang: "sh", code: "docker build -t slow:1 .\necho \"// edit\" >> server.js\ndocker build -t slow:2 .          # was npm ci cached?" },
        steps: [
          { text: "Build the shipped Dockerfile as `slow:1`, edit `server.js`, then build `slow:2`.",
            test: L(
              "T.expect(T.image('slow:1') && T.image('slow:2'), 'Build the shipped Dockerfile twice: docker build -t slow:1 . , then an edit, then docker build -t slow:2 .');",
              "T.expect(T.ran(/echo .*>> ?server\\.js/), 'Change the source between the builds: echo \"// edit\" >> server.js');") },
          { text: "The cost of the shipped order: on the rebuild, `npm ci` was **not** cached.",
            test: L(
              "var b = T.build(2);",
              "var step = b.steps.filter(function (s) { return s.instr.indexOf('RUN npm ci') === 0; })[0];",
              "T.expect(step, 'The second build should include a RUN npm ci step.');",
              "T.eq(step.cached, false, 'With COPY . . before it, a source edit invalidates the copy — and the install after it reruns. That is the problem.');") },
          { text: "Write `Dockerfile.fast` with the cache-friendly order, and build it twice the same way (`fast:1`, an edit, `fast:2`).",
            test: L(
              "T.expect(T.image('fast:1') && T.image('fast:2'), 'Build your version twice too: docker build -f Dockerfile.fast -t fast:1 . , an edit, then fast:2.');",
              "T.expect(T.image('fast:2').files.indexOf('/app/node_modules/express/package.json') !== -1, 'The dependencies should still be installed in the image.');") },
          { text: "The payoff: this time `npm ci` **is** cached, and only the final `COPY` reruns.",
            test: L(
              "var b = T.build(4);",
              "var install = b.steps.filter(function (s) { return s.instr.indexOf('RUN npm ci') === 0; })[0];",
              "T.expect(install, 'The fourth build should include a RUN npm ci step — build order is slow:1, slow:2, fast:1, fast:2.');",
              "T.eq(install.cached, true, 'Copy package*.json first and install BEFORE copying the source: then a source edit cannot invalidate the install.');",
              "var copyAll = b.steps.filter(function (s) { return s.instr.indexOf('COPY . .') === 0; })[0];",
              "T.eq(copyAll.cached, false, 'The final COPY . . still reruns — that is correct, your source really did change.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# Four builds, so you can see the before and the after in one run.",
            "",
            "# 1) The shipped order, twice, with an edit in between:",
            "",
            "# 2) Your order (Dockerfile.fast), twice, with an edit in between:",
            "",
            "") },
          { name: "Dockerfile.fast", content: L(
            "# Same five instructions as the shipped Dockerfile — reordered so that",
            "# a source edit does NOT invalidate the dependency install.",
            "FROM node:20-alpine",
            "WORKDIR /app",
            "# …your ordering here…",
            "CMD [\"node\", \"server.js\"]",
            "") }
        ],
        hints: [
          "The first three lines: `docker build -t slow:1 .`, `echo \"// edit\" >> server.js`, `docker build -t slow:2 .`",
          "In Dockerfile.fast, the order is: `COPY package*.json ./`, then `RUN npm ci`, then `COPY . .` — dependencies before source.",
          "Then: `docker build -f Dockerfile.fast -t fast:1 .`, another `echo \"// edit2\" >> server.js`, and `docker build -f Dockerfile.fast -t fast:2 .`"
        ],
        solution: {
          "commands.sh": L(
            "# 1) The shipped order, twice:",
            "docker build -t slow:1 .",
            "echo \"// edit\" >> server.js",
            "docker build -t slow:2 .",
            "",
            "# 2) Your order, twice:",
            "docker build -f Dockerfile.fast -t fast:1 .",
            "echo \"// edit2\" >> server.js",
            "docker build -f Dockerfile.fast -t fast:2 .",
            ""),
          "Dockerfile.fast": L(
            "FROM node:20-alpine",
            "WORKDIR /app",
            "COPY package*.json ./",
            "RUN npm ci",
            "COPY . .",
            "CMD [\"node\", \"server.js\"]",
            "")
        }
      },

      {
        id: "docker-u3-3",
        title: "Deleting doesn't shrink: layers only add",
        kind: "shell", chip: "DOCKER", xp: 25, mins: 16,
        cwd: "/home/you/project",
        fs: base({
          "/home/you/project/Dockerfile": KEEP_DF,
          "/home/you/project/Dockerfile.later": LATER_DF
        }),
        apps: APPS,
        brief: "`npm ci` leaves a package cache in `/root/.npm` — tens of megabytes you don't need at run time. The obvious cleanup is another line: `RUN rm -rf /root/.npm`.\n\nIt doesn't work, and the reason is worth understanding. Layers only ever **add**. A later layer can hide a file — it vanishes from the final filesystem — but the bytes still sit in the layer that created them, and they still ship, download and take up space. Docker's own docs put it plainly: a removed file *\"will still be available in the previous layer and add up to the image's total size.\"*\n\nThe fix is to never write the file into a layer at all: do the work **and** the cleanup in the **same** `RUN`, joined with `&&`. One layer, and the cache never becomes part of it.\n\nThree images, one run: the baseline, the too-late cleanup, and yours.",
        steps: [
          { text: "Build the baseline (`keep`) and the shipped late-cleanup version (`later`).",
            test: L(
              "T.expect(T.image('keep'), 'Build the plain Dockerfile: docker build -t keep .');",
              "T.expect(T.image('later'), 'Build the late-cleanup one: docker build -f Dockerfile.later -t later .');") },
          { text: "The late cleanup hid the files but saved nothing: `later` is the same size as `keep`.",
            test: L(
              "T.eq(T.image('later').size, T.image('keep').size, 'A file deleted in a LATER layer still ships in the layer that added it.');",
              "T.expect(T.image('later').files.indexOf('/root/.npm/_cacache/index') === -1, '…even though it is gone from the final filesystem. Hidden is not deleted.');") },
          { text: "Write `Dockerfile.same`, cleaning up inside the same `RUN`, and build it as `same`.",
            test: L(
              "T.expect(T.image('same'), 'Build your version: docker build -f Dockerfile.same -t same .');",
              "T.expect(T.image('same').files.indexOf('/app/node_modules/express/package.json') !== -1, 'The dependencies must still be installed — only the cache should go.');") },
          { text: "That one is genuinely smaller.",
            test: L(
              "T.expect(T.image('same').size < T.image('keep').size, 'Cleaning up in the SAME RUN means the cache is never written into a layer, so the image really shrinks. Join the commands with &&.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# Three builds: the baseline, the late cleanup, and yours.",
            "",
            "# 1) Baseline:",
            "",
            "# 2) The shipped late-cleanup version:",
            "",
            "# 3) Yours (write Dockerfile.same in the other tab):",
            "",
            "") },
          { name: "Dockerfile.same", content: L(
            "# Install the dependencies AND remove the npm cache in ONE RUN,",
            "# so the cache never becomes part of a layer.",
            "FROM node:20-alpine",
            "WORKDIR /app",
            "COPY package*.json ./",
            "# RUN …",
            "CMD [\"node\", \"server.js\"]",
            "") }
        ],
        hints: [
          "`docker build -t keep .` then `docker build -f Dockerfile.later -t later .`",
          "In Dockerfile.same, one instruction does both jobs: `RUN npm ci && rm -rf /root/.npm`.",
          "Then `docker build -f Dockerfile.same -t same .` — three builds in total."
        ],
        solution: {
          "commands.sh": L(
            "docker build -t keep .",
            "docker build -f Dockerfile.later -t later .",
            "docker build -f Dockerfile.same -t same .",
            ""),
          "Dockerfile.same": L(
            "FROM node:20-alpine",
            "WORKDIR /app",
            "COPY package*.json ./",
            "RUN npm ci && rm -rf /root/.npm",
            "CMD [\"node\", \"server.js\"]",
            "")
        }
      },

      {
        id: "docker-quiz-3",
        title: "Unit 3 quiz: Layers and caching",
        kind: "quiz", xp: 10,
        brief: "What a layer is, how the cache invalidates, and why images never shrink by deleting. 80% to pass.",
        questions: [
          { q: "You edit `server.js` and rebuild. Which steps rerun?",
            code: "COPY package*.json ./\nRUN npm ci\nCOPY . .\nCMD [\"node\", \"server.js\"]",
            lang: "sh",
            choices: ["Every step, because any edit invalidates the whole build from the top", "Only `COPY . .` and everything after it", "Only `RUN npm ci`, because dependencies must be checked", "None — source edits never affect the image cache"],
            answer: 1, explain: "The cache breaks at the first step whose inputs changed, and the break cascades downward. `COPY package*.json ./` and `RUN npm ci` see identical inputs, so they stay cached; `COPY . .` sees changed source and reruns, taking the steps after it along." },
          { q: "Why put `COPY package*.json ./` before `COPY . .`?",
            choices: ["npm refuses to install unless package.json is copied on its own first", "Because COPY instructions must be sorted alphabetically by source", "So the dependency install stays cached when only source changes", "It makes the final image smaller by avoiding duplicate files"],
            answer: 2, explain: "Copying just the manifest first means the install step's inputs change only when dependencies change — not every time you touch a source file. It's the single highest-value ordering rule in Dockerfiles, and it costs one extra line." },
          { q: "`RUN rm -rf /root/.npm` on its own line after `RUN npm ci`. What happens to the image size?",
            choices: ["It shrinks by the size of the cache", "It stays the same; the bytes ship in the earlier layer", "It grows, because the delete is itself a large layer", "It shrinks, but only after you run `docker image prune`"],
            answer: 1, explain: "Layers only add. A later layer can mark a file as removed so it disappears from the final filesystem, but the data still exists in the layer that wrote it and still ships with the image. Doing the install and cleanup in one RUN avoids writing it at all." },
          { q: "Which instructions add 0 bytes to an image?",
            choices: ["COPY and ADD, since they only reference host files", "RUN, when the command it executes writes nothing to disk", "WORKDIR, USER, EXPOSE and CMD", "None — every instruction creates a layer with a size"],
            answer: 2, explain: "Those four only record configuration in the image's metadata, so their layers hold no files. COPY and RUN are what add bytes — and a RUN that writes nothing genuinely adds nothing, though that's rare in practice." },
          { q: "What is `docker history` most useful for?",
            choices: ["Listing every container ever started from the image", "Showing which instruction made the image big", "Restoring an earlier version of the image", "Showing who built the image and when they pushed it"],
            answer: 1, explain: "It prints the layer stack with each layer's size and the instruction that created it, so an unexpectedly large image usually explains itself in one command. It is about layers, not about containers or version control — and it also reveals build args baked into the image." },
          { q: "You add a new dependency to package.json and rebuild. Which step is the FIRST to lose its cache?",
            code: "COPY package*.json ./\nRUN npm ci\nCOPY . .",
            lang: "sh",
            choices: ["`COPY package*.json ./`, whose copied contents changed", "`RUN npm ci`, because npm checks the registry every build", "`COPY . .`, since package.json is part of the source too", "None of them — adding a dependency does not change any layer"],
            answer: 0, explain: "The cache key for a COPY includes the contents of the files it copies, so changing package.json breaks that step first — and everything after it rebuilds, including the install, which is exactly what you want when dependencies change." }
        ]
      }
    ]
  });
})();
