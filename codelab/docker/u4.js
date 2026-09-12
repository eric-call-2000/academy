/* Docker & Containers — Unit 4: Smaller and safer images */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var SERVER = L(
    "const http = require(\"http\");",
    "const port = process.env.PORT || 3000;",
    "http.createServer((req, res) => res.end(\"Hello from the shop\")).listen(port);",
    "");
  var BUILD_PKG = L(
    "{",
    "  \"name\": \"shop\",",
    "  \"version\": \"2.0.0\",",
    "  \"scripts\": { \"build\": \"cp -r src dist\" },",
    "  \"dependencies\": { \"express\": \"4.19.2\" },",
    "  \"devDependencies\": { \"jest\": \"29.7.0\" }",
    "}",
    "");
  var PRIVATE_PKG = L(
    "{",
    "  \"name\": \"shop\",",
    "  \"version\": \"2.0.0\",",
    "  \"dependencies\": { \"express\": \"4.19.2\", \"@shop/private-ui\": \"1.0.0\" }",
    "}",
    "");
  var FAT_DF = L(
    "# One stage: the toolchain, the source and the dev dependencies all ship.",
    "# Don't edit — build it for comparison.",
    "FROM node:20",
    "WORKDIR /app",
    "COPY . .",
    "RUN npm ci",
    "RUN npm run build",
    "CMD [\"node\", \"dist/app.js\"]",
    "");
  var APPS = {
    "node dist/app.js": {
      requires: ["dist/app.js"],
      listen: { port: "$PORT|3000", host: "$HOST|0.0.0.0" },
      logs: ["Listening on http://{host}:{port}"],
      routes: { "/": "Hello from {GREETING|the shop}" },
      sigterm: "graceful"
    },
    "node server.js": {
      requires: ["server.js"],
      listen: { port: "$PORT|3000", host: "$HOST|0.0.0.0" },
      logs: ["Listening on http://{host}:{port}"],
      routes: { "/": "Hello from {GREETING|the shop}" },
      sigterm: "graceful"
    },
    "sleep infinity": { idle: true, sigterm: "graceful" }
  };
  function buildWorld(extra) {
    var fs = {
      "/home/you/project/package.json": BUILD_PKG,
      "/home/you/project/package-lock.json": "{ \"lockfileVersion\": 3 }\n",
      "/home/you/project/src/app.js": "console.log(\"the shop\");\n"
    };
    Object.keys(extra || {}).forEach(function (k) { fs[k] = extra[k]; });
    return fs;
  }

  window.CODELAB.addUnit("docker", {
    id: "docker-u4",
    title: "Smaller and safer images",
    icon: "🪶",
    blurb: "Multi-stage builds that ship the output and not the toolchain, choosing and pinning a base, running as a non-root user, and secrets that never enter a layer.",
    cheat: [
      { h: "Multi-stage", lang: "sh", code: L(
        "FROM node:20 AS build        # stage 1: the full toolchain",
        "WORKDIR /app",
        "COPY package*.json ./",
        "RUN npm ci                   # dev dependencies and all",
        "COPY src ./src",
        "RUN npm run build            # produces /app/dist",
        "",
        "FROM node:20-alpine          # stage 2: what actually ships",
        "WORKDIR /app",
        "COPY package*.json ./",
        "RUN npm ci --omit=dev",
        "COPY --from=build /app/dist ./dist",
        "CMD [\"node\", \"dist/app.js\"]"),
        note: "Only the last stage becomes the image. Everything in earlier stages is thrown away." },
      { h: "Bases, roughly", lang: "sh", code: L(
        "FROM node:20          # ~1.1 GB — full Debian, compilers, git",
        "FROM node:20-slim     # ~200 MB — Debian, nothing extra",
        "FROM node:20-alpine   # ~130 MB — musl-based, smallest",
        "FROM node:latest      # a moving target. Never in production."),
        note: "Sizes are approximate (measured 2026-09) and drift between releases. Pin a version, always." },
      { h: "Don't run as root", lang: "sh", code: L(
        "RUN adduser -D shopper     # alpine's flag; Debian uses adduser --disabled-password",
        "USER shopper               # everything after this runs as shopper",
        "CMD [\"node\", \"server.js\"]"),
        note: "A container process that is root is root on the host kernel if it ever escapes. Node images ship a `node` user for this." },
      { h: "Secrets", lang: "sh", code: L(
        "# WRONG — both are readable by anyone holding the image:",
        "ARG API_KEY                       # shows up in docker history",
        "ENV API_KEY=sk_live_123           # shows up in the config",
        "",
        "# RIGHT — mounted for one RUN, never written to a layer:",
        "RUN --mount=type=secret,id=npmrc,target=/root/.npmrc npm ci",
        "# docker build --secret id=npmrc,src=.npmrc -t shop:2.0 ."),
        note: "An image is a file anyone can unpack. Treat everything in it as public." }
    ],
    lessons: [

      {
        id: "docker-u4-1",
        title: "Multi-stage: build in one stage, ship only the output",
        kind: "shell", chip: "DOCKER", xp: 25, mins: 18,
        cwd: "/home/you/project",
        fs: buildWorld({ "/home/you/project/Dockerfile.fat": FAT_DF }),
        apps: APPS,
        brief: "Building an app and running it need different things. The build needs the compiler, the test framework, the whole `devDependencies` tree. Running it needs the output and a runtime — nothing else.\n\nA single-stage Dockerfile ships all of it: your source, the toolchain, the dev dependencies, and the built output. That's a bigger download, a slower deploy, and a much larger attack surface — every tool in the image is a tool an attacker can use.\n\n**Multi-stage builds** fix this. Write several `FROM` instructions; each starts a new stage. Do the heavy work in the first, then start a fresh, small stage and `COPY --from=build` only the artifact across. Only the **last** stage becomes the image; everything else is discarded when the build finishes.\n\nBuild the shipped single-stage `Dockerfile.fat` for comparison, then write a two-stage `Dockerfile` that ships `dist/` and leaves the rest behind.",
        example: { lang: "sh", code: "FROM node:20 AS build\n# …compile…\n\nFROM node:20-alpine\nCOPY --from=build /app/dist ./dist" },
        steps: [
          { text: "Build the shipped single-stage version as `shop:fat`, and your two-stage `Dockerfile` as `shop:2.0`.",
            test: L(
              "T.expect(T.image('shop:fat'), 'Build the comparison image: docker build -f Dockerfile.fat -t shop:fat .');",
              "T.expect(T.image('shop:2.0'), 'Build yours: docker build -t shop:2.0 . — check the Terminal pane if the build failed.');") },
          { text: "Your image ships the built output.",
            test: L(
              "var f = T.image('shop:2.0').files;",
              "T.expect(f.indexOf('/app/dist/app.js') !== -1, 'dist/app.js is missing — the final stage needs COPY --from=build /app/dist ./dist (and the build stage must run npm run build).');") },
          { text: "…and not the source or the dev dependencies.",
            test: L(
              "var f = T.image('shop:2.0').files;",
              "T.expect(f.indexOf('/app/src/app.js') === -1, 'The source is still in the final image — copy only the built output across, not the whole context.');",
              "T.expect(f.indexOf('/app/node_modules/jest/package.json') === -1, 'jest is a devDependency and should not be in the runtime image — install with npm ci --omit=dev in the final stage.');",
              "T.expect(f.indexOf('/app/node_modules/express/package.json') !== -1, 'The runtime dependency express SHOULD be there.');") },
          { text: "The result is a fraction of the size, on a smaller base.",
            test: L(
              "T.eq(T.image('shop:2.0').base, 'node:20-alpine', 'The image\\'s base is the FROM of its LAST stage — make that the small one.');",
              "T.expect(T.image('shop:2.0').size < T.image('shop:fat').size / 2, 'Yours should be less than half the single-stage image. Got ' + T.image('shop:2.0').size + ' vs ' + T.image('shop:fat').size + ' bytes.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# 1) The single-stage comparison:",
            "",
            "# 2) Your two-stage build:",
            "",
            "") },
          { name: "Dockerfile", content: L(
            "# Two stages.",
            "#   Stage 1 (name it build): node:20, install everything,",
            "#           COPY src ./src, then RUN npm run build → /app/dist",
            "#   Stage 2: node:20-alpine, install with --omit=dev, then",
            "#           COPY --from=build /app/dist ./dist",
            "#           CMD [\"node\", \"dist/app.js\"]",
            "",
            "") }
        ],
        hints: [
          "Name the first stage: `FROM node:20 AS build`. Inside it: `WORKDIR /app`, `COPY package*.json ./`, `RUN npm ci`, `COPY src ./src`, `RUN npm run build`.",
          "Then start again: `FROM node:20-alpine`, `WORKDIR /app`, `COPY package*.json ./`, `RUN npm ci --omit=dev`.",
          "Bring the artifact across with `COPY --from=build /app/dist ./dist`, and finish with `CMD [\"node\", \"dist/app.js\"]`. In commands.sh: `docker build -f Dockerfile.fat -t shop:fat .` and `docker build -t shop:2.0 .`"
        ],
        solution: {
          "commands.sh": L(
            "docker build -f Dockerfile.fat -t shop:fat .",
            "docker build -t shop:2.0 .",
            ""),
          "Dockerfile": L(
            "FROM node:20 AS build",
            "WORKDIR /app",
            "COPY package*.json ./",
            "RUN npm ci",
            "COPY src ./src",
            "RUN npm run build",
            "",
            "FROM node:20-alpine",
            "WORKDIR /app",
            "COPY package*.json ./",
            "RUN npm ci --omit=dev",
            "COPY --from=build /app/dist ./dist",
            "CMD [\"node\", \"dist/app.js\"]",
            "")
        }
      },

      {
        id: "docker-u4-2",
        title: "Slim and alpine bases, and pinning a version",
        kind: "shell", chip: "DOCKER", xp: 20, mins: 14,
        cwd: "/home/you/project",
        fs: {
          "/home/you/project/server.js": SERVER,
          "/home/you/project/package.json": L("{", "  \"name\": \"shop\",", "  \"dependencies\": { \"express\": \"4.19.2\" }", "}", ""),
          "/home/you/project/package-lock.json": "{ \"lockfileVersion\": 3 }\n",
          "/home/you/project/Dockerfile.full": L("FROM node:20", "WORKDIR /app", "COPY package*.json ./", "RUN npm ci", "COPY . .", "CMD [\"node\", \"server.js\"]", "")
        },
        apps: APPS,
        brief: "The base image you pick is usually most of your image's size, and all of its unused software.\n\n`node:20` is a full Debian with compilers, `git`, and a package manager — about a gigabyte. `node:20-slim` drops the extras for around 200 MB. `node:20-alpine`, built on musl instead of glibc, is about 130 MB. For a plain Node service, alpine is normally the right answer; if a dependency needs glibc or has native builds, `-slim` is the safe middle.\n\nSmaller is not just faster to pull. Every binary you don't ship is one an attacker can't use, and one that can't turn up in a vulnerability report.\n\nThe other half is **pinning**. `FROM node:latest` means your build changes when someone else publishes — a rebuild months later can produce a different image from the same Dockerfile. Name the version you tested: `node:20-alpine`.\n\nBuild the shipped full-fat version, then your own on alpine, and compare.",
        steps: [
          { text: "Build the shipped `Dockerfile.full` as `shop:full`, and your `Dockerfile` as `shop:alpine`.",
            test: L(
              "T.expect(T.image('shop:full'), 'Build the comparison: docker build -f Dockerfile.full -t shop:full .');",
              "T.expect(T.image('shop:alpine'), 'Build yours: docker build -t shop:alpine .');") },
          { text: "Yours is based on a **pinned** alpine tag — not `latest`.",
            test: L(
              "var b = T.image('shop:alpine').base;",
              "T.eq(b, 'node:20-alpine', 'FROM should name node:20-alpine exactly: a major version AND the variant, so the build is reproducible. Got: ' + b);") },
          { text: "And it is dramatically smaller than the full base.",
            test: L(
              "T.expect(T.image('shop:alpine').size < T.image('shop:full').size / 3, 'The alpine image should be a fraction of the full one. Got ' + T.image('shop:alpine').size + ' vs ' + T.image('shop:full').size + ' bytes.');",
              "T.expect(T.image('shop:alpine').files.indexOf('/app/server.js') !== -1, 'It should still contain your app.');") },
          { text: "It still runs: start it as `web` and check the app logged its startup line.",
            test: L(
              "T.expect(T.container('web'), 'Run it: docker run -d --name web shop:alpine');",
              "T.eq(T.container('web').status, 'running', 'The container should be running — a smaller base must not break the app.');",
              "T.expect(T.logs('web').indexOf('Listening on') !== -1, 'The app should have started normally.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# 1) The full-fat comparison build:",
            "",
            "# 2) Your alpine build:",
            "",
            "# 3) Run yours as web:",
            "",
            "") },
          { name: "Dockerfile", content: L(
            "# Same app, on a small PINNED base. Keep the cache-friendly order",
            "# from Unit 3: package files, install, then the rest.",
            "# FROM …",
            "",
            "") }
        ],
        hints: [
          "`FROM node:20-alpine` — the major version and the variant, never `latest`.",
          "The rest is Unit 3's ordering: `WORKDIR /app`, `COPY package*.json ./`, `RUN npm ci`, `COPY . .`, `CMD [\"node\", \"server.js\"]`.",
          "commands.sh: `docker build -f Dockerfile.full -t shop:full .`, `docker build -t shop:alpine .`, `docker run -d --name web shop:alpine`."
        ],
        solution: {
          "commands.sh": L(
            "docker build -f Dockerfile.full -t shop:full .",
            "docker build -t shop:alpine .",
            "docker run -d --name web shop:alpine",
            ""),
          "Dockerfile": L(
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
        id: "docker-u4-3",
        title: "Run as a non-root USER",
        kind: "shell", chip: "DOCKER", xp: 20, mins: 15,
        cwd: "/home/you/project",
        fs: {
          "/home/you/project/server.js": SERVER,
          "/home/you/project/Dockerfile.broken": L(
            "# This one names a user that was never created. Build and run it",
            "# to see what Docker says — then write yours in the Dockerfile tab.",
            "FROM alpine:3.20",
            "USER shopper",
            "CMD [\"sleep\", \"infinity\"]",
            "")
        },
        apps: APPS,
        brief: "By default, everything in a container runs as **root**. It's root inside the container's own namespace — but it is the same kernel as the host, and a container escape by a root process is a much worse day than one by an unprivileged process. It's also the difference between a vulnerability report that's a footnote and one that's an incident.\n\nThe fix is two lines: create a user at build time, then switch to it with `USER`. Everything after that instruction — remaining build steps, and the container's process — runs as that user.\n\nThere's an order trap, and you'll meet it first: `USER shopper` before the user exists doesn't fail the build. It fails much later, when a container tries to **start**, with `unable to find user shopper`. Build and run the broken version to see it, then write the correct one.\n\n*(The official `node` images already ship a `node` user, which is why Unit 1's image could just say `USER node`.)*",
        steps: [
          { text: "Build and run the shipped `Dockerfile.broken` as `broken:1` — the container refuses to start.",
            test: L(
              "T.expect(T.image('broken:1'), 'Build it: docker build -f Dockerfile.broken -t broken:1 . — note the BUILD succeeds.');",
              "T.expect(T.said('unable to find user shopper'), 'Now run it (docker run -d --name bad broken:1). Docker should refuse at START time, not at build time.');") },
          { text: "Write your `Dockerfile`: create the user, then switch to it. Build it as `safe:1`.",
            test: L(
              "T.expect(T.image('safe:1'), 'Build yours: docker build -t safe:1 .');",
              "T.eq(T.image('safe:1').user, 'shopper', 'The image should run as shopper — add USER shopper AFTER creating the user.');") },
          { text: "Run it as `app` and confirm the process really is `shopper`, not root.",
            test: L(
              "T.expect(T.container('app'), 'Run it: docker run -d --name app safe:1');",
              "T.eq(T.container('app').status, 'running', 'This one should start cleanly, because the user exists.');",
              "T.eq(T.container('app').user, 'shopper', 'The container runs as shopper.');",
              "T.expect(T.ran(/docker exec \\w+ whoami/), 'Check from inside too: docker exec app whoami');",
              "T.expect(T.said('shopper'), 'whoami should print shopper.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# 1) Build and run the broken one, and read the error:",
            "",
            "# 2) Build yours as safe:1, run it as app, and check who you are:",
            "",
            "") },
          { name: "Dockerfile", content: L(
            "# Create a user, THEN switch to it.",
            "# On alpine:  RUN adduser -D shopper",
            "FROM alpine:3.20",
            "# …",
            "CMD [\"sleep\", \"infinity\"]",
            "") }
        ],
        hints: [
          "First: `docker build -f Dockerfile.broken -t broken:1 .` then `docker run -d --name bad broken:1`. The error appears at run time.",
          "In your Dockerfile: `RUN adduser -D shopper` and then `USER shopper` — that order matters.",
          "Then `docker build -t safe:1 .`, `docker run -d --name app safe:1`, and `docker exec app whoami`."
        ],
        solution: {
          "commands.sh": L(
            "# 1) The broken one:",
            "docker build -f Dockerfile.broken -t broken:1 .",
            "docker run -d --name bad broken:1",
            "",
            "# 2) Yours:",
            "docker build -t safe:1 .",
            "docker run -d --name app safe:1",
            "docker exec app whoami",
            ""),
          "Dockerfile": L(
            "FROM alpine:3.20",
            "RUN adduser -D shopper",
            "USER shopper",
            "CMD [\"sleep\", \"infinity\"]",
            "")
        }
      },

      {
        id: "docker-u4-4",
        title: "Secrets never go in ENV or ARG",
        kind: "shell", chip: "DOCKER", xp: 25, mins: 18,
        cwd: "/home/you/project",
        fs: {
          "/home/you/project/package.json": PRIVATE_PKG,
          "/home/you/project/package-lock.json": "{ \"lockfileVersion\": 3 }\n",
          "/home/you/project/server.js": SERVER,
          "/home/you/project/.npmrc": "//npm.shop.dev/:_authToken=tok_private_77\n",
          "/home/you/project/Dockerfile.naive": L(
            "# The install with no credentials at all. Build it and read the error.",
            "FROM node:20-alpine",
            "WORKDIR /app",
            "COPY package*.json ./",
            "RUN npm ci",
            "CMD [\"node\", \"server.js\"]",
            ""),
          "/home/you/project/Dockerfile.leak": L(
            "# The 'obvious' way to pass a credential into a build. Build it,",
            "# then read docker history and see what you shipped.",
            "FROM alpine:3.20",
            "ARG API_KEY",
            "RUN echo configured",
            "CMD [\"sleep\", \"infinity\"]",
            "")
        },
        apps: APPS,
        brief: "An image is a file. Anyone who can pull it can unpack it, read every layer, and read the metadata that describes how it was built. So anything you put *into* a build is public to everyone who has the image.\n\nTwo ways people leak credentials without noticing:\n\n- **`ARG`** — passed with `--build-arg`. Its value is recorded in the image's build history, and `docker history` prints it.\n- **`ENV`** — baked into the image config, readable with `docker inspect`, and present in every container's environment.\n\nDeleting the file in a later layer doesn't help either — Unit 3 showed why.\n\nThe supported answer is a **secret mount**: `RUN --mount=type=secret` makes a file available to *one* `RUN` instruction, inside the build, and it is never written into a layer. You pass it with `docker build --secret`.\n\nThis project needs a private package that requires an auth token in `.npmrc`. Prove the leak first, then do it properly.",
        steps: [
          { text: "Build `Dockerfile.leak` with `--build-arg API_KEY=sk_test_42` as `leak:1`, then run `docker history leak:1`.",
            test: L(
              "T.expect(T.image('leak:1'), 'Build it: docker build --build-arg API_KEY=sk_test_42 -f Dockerfile.leak -t leak:1 .');",
              "T.expect(T.ran(/^docker history/m), 'Then read its history: docker history leak:1');",
              "T.expect(T.said('sk_test_42'), 'The build arg should be visible in the history output — that is the leak. Anyone with this image can read it.');") },
          { text: "Try the credential-free install: build the shipped `Dockerfile.naive` as `shop:naive`. It fails.",
            test: L(
              "T.expect(T.said('E401'), 'Build it (docker build -f Dockerfile.naive -t shop:naive .) — with no credentials the private package cannot be installed, and npm reports E401 Unauthorized.');",
              "T.eq(T.image('shop:naive'), null, 'A failed build produces no image, so nothing is tagged shop:naive.');") },
          { text: "Now mount the credential for that one instruction, in your own `Dockerfile`, and build with `--secret`.",
            test: L(
              "T.expect(T.image('shop:2.0'), 'Write the RUN as: RUN --mount=type=secret,id=npmrc,target=/root/.npmrc npm ci — and pass it: docker build --secret id=npmrc,src=.npmrc -t shop:2.0 .');",
              "T.expect(T.image('shop:2.0').files.indexOf('/app/node_modules/@shop/private-ui/package.json') !== -1, 'The private package should now be installed.');") },
          { text: "And the credential is nowhere in the image: not in a layer, not in the history.",
            test: L(
              "T.expect(T.image('shop:2.0').files.indexOf('/root/.npmrc') === -1, 'The mounted secret must NOT be a file in the image — that is the whole point of the mount.');",
              "T.expect(!T.said('tok_private_77'), 'The token appears somewhere in your output. Do not COPY .npmrc into the image, and do not echo it — mount it.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# 1) Prove the ARG leak (build Dockerfile.leak, then read its history):",
            "",
            "# 2) The credential-free install — Dockerfile.naive, as shop:naive.",
            "#    It fails with E401, and that is the point:",
            "",
            "# 3) Your Dockerfile, with the credential MOUNTED, as shop:2.0:",
            "",
            "") },
          { name: "Dockerfile", content: L(
            "# Install the dependencies, including the private @shop/private-ui.",
            "# The credential lives in .npmrc on the host — mount it for the",
            "# install instead of copying it in.",
            "FROM node:20-alpine",
            "WORKDIR /app",
            "COPY package*.json ./",
            "# RUN …",
            "CMD [\"node\", \"server.js\"]",
            "") }
        ],
        hints: [
          "Step 1 is two lines: `docker build --build-arg API_KEY=sk_test_42 -f Dockerfile.leak -t leak:1 .` and `docker history leak:1`.",
          "Step 2 is one line against the shipped file: `docker build -f Dockerfile.naive -t shop:naive .` — it fails with E401, which is the point.",
          "In your own Dockerfile write `RUN --mount=type=secret,id=npmrc,target=/root/.npmrc npm ci`, then build it with `docker build --secret id=npmrc,src=.npmrc -t shop:2.0 .`"
        ],
        solution: {
          "commands.sh": L(
            "# 1) Prove the ARG leak:",
            "docker build --build-arg API_KEY=sk_test_42 -f Dockerfile.leak -t leak:1 .",
            "docker history leak:1",
            "",
            "# 2) The credential-free install fails with E401:",
            "docker build -f Dockerfile.naive -t shop:naive .",
            "",
            "# 3) The same install, with the credential mounted:",
            "docker build --secret id=npmrc,src=.npmrc -t shop:2.0 .",
            ""),
          "Dockerfile": L(
            "FROM node:20-alpine",
            "WORKDIR /app",
            "COPY package*.json ./",
            "RUN --mount=type=secret,id=npmrc,target=/root/.npmrc npm ci",
            "CMD [\"node\", \"server.js\"]",
            "")
        }
      },

      {
        id: "docker-quiz-4",
        title: "Unit 4 quiz: Image size and security",
        kind: "quiz", xp: 10,
        brief: "Multi-stage builds, base images, non-root users and build secrets. 80% to pass.",
        questions: [
          { q: "In a multi-stage build, what ends up in the final image?",
            choices: ["Every stage, concatenated in the order they appear", "Only the last stage, plus whatever it copied in", "Whichever stage is the largest of them all", "Only the stages that were explicitly given a name"],
            answer: 1, explain: "Each FROM begins a new stage, and only the final one becomes the image. Earlier stages exist during the build so you can `COPY --from` their artifacts across; once the build ends they're discarded, which is how the toolchain stays out of what you ship." },
          { q: "Why prefer `FROM node:20-alpine` over `FROM node:latest`?",
            choices: ["alpine images are the only ones that support multi-stage builds", "`latest` images cannot be pulled without authenticating first", "It is smaller, and pinned — the same Dockerfile keeps building the same image", "Alpine is the only base that allows creating a non-root user"],
            answer: 2, explain: "Two wins at once: alpine is a fraction of the size, and naming a version means a rebuild months from now starts from the same base rather than whatever `latest` points at by then. Pinning is what makes a build reproducible." },
          { q: "A Dockerfile has `USER shopper` but never creates that user. What happens?",
            choices: ["The build fails at the USER instruction", "The build succeeds; containers fail to start", "Docker creates the user automatically during the build", "It silently falls back to running as root instead"],
            answer: 1, explain: "Nothing checks the user at build time — the failure surfaces when a container tries to start and the runtime can't resolve the name, reporting \"unable to find user\". Create it first (`RUN adduser -D shopper`), then switch with USER." },
          { q: "You pass a token with `--build-arg API_KEY=…`. Who can read it?",
            choices: ["Nobody — build args exist only during the build", "Only someone with access to the build machine", "Only the user the container runs as", "Anyone who can read the image's history"],
            answer: 3, explain: "Build args are recorded in the image's build metadata, so `docker history` prints the value to anyone holding the image. ENV is just as exposed, via the image config. A build secret mount is the supported way to use a credential without writing it into the image." },
          { q: "What does `RUN --mount=type=secret,id=npmrc,target=/root/.npmrc npm ci` do?",
            choices: ["Copies the secret into the image at a hidden path", "Encrypts the secret so only the build can decrypt it later", "Makes the file available to that one RUN, without adding it to a layer", "Stores the secret in the image config for containers to read"],
            answer: 2, explain: "The file is mounted into the filesystem for the duration of that single instruction and is not part of the resulting layer, so it appears in no layer and in no history. The value never enters the image, which is exactly the property you want." },
          { q: "Why does a smaller base image improve security, not just download time?",
            choices: ["Smaller images are scanned more thoroughly by registries", "Fewer programs are present to be exploited or to need patching", "Alpine encrypts its filesystem layers by default", "Smaller images always run as a non-root user automatically"],
            answer: 1, explain: "Every shell, compiler and utility in an image is something an attacker can use after a break-in, and something that can turn up in a CVE report you then have to patch. Shipping only what the app needs shrinks that surface; it has nothing to do with encryption or user defaults." }
        ]
      }
    ]
  });
})();
