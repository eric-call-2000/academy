/* Docker & Containers — Unit 8: Two projects */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var SERVER = L(
    "const http = require(\"http\");",
    "const host = process.env.HOST || \"127.0.0.1\";",
    "const port = process.env.PORT || 3000;",
    "http.createServer(handler).listen(port, host);",
    "");
  var BUILD_PKG = L(
    "{",
    "  \"name\": \"shop\",",
    "  \"version\": \"3.0.0\",",
    "  \"scripts\": { \"build\": \"cp -r src dist\" },",
    "  \"dependencies\": { \"express\": \"4.19.2\" },",
    "  \"devDependencies\": { \"jest\": \"29.7.0\" }",
    "}",
    "");
  var PLAIN_PKG = L("{", "  \"name\": \"shop\",", "  \"dependencies\": { \"express\": \"4.19.2\" }", "}", "");

  var SHOP_APP = {
    requires: ["dist/app.js"],
    listen: { port: "$PORT|3000", host: "$HOST|0.0.0.0" },
    logs: ["Listening on http://{host}:{port}"],
    routes: { "/": "Hello from {GREETING|the shop}", "/health": "@health" },
    connects: "$DATABASE_URL",
    sigterm: "graceful"
  };
  var BROKEN_APP = {
    requires: ["server.js"],
    listen: { port: "$PORT|3000", host: "$HOST|127.0.0.1" },
    logs: ["Listening on http://{host}:{port}"],
    routes: { "/": "Hello from {GREETING|the shop}", "/health": "@health" },
    connects: "$DATABASE_URL",
    sigterm: "graceful"
  };
  var POSTGRES = {
    env: { required: ["POSTGRES_PASSWORD"] },
    listen: { port: "5432", host: "0.0.0.0" },
    logs: ["database system is ready to accept connections"],
    data: "/var/lib/postgresql/data",
    sigterm: "graceful"
  };

  var BROKEN_DF = L(
    "FROM node:20",
    "WORKDIR /app",
    "COPY . .",
    "RUN npm ci",
    "# the API key, so the app doesn't have to ask for it",
    "ENV API_KEY=sk_live_shop_42",
    "CMD node server.js",
    "");
  var BROKEN_COMPOSE = L(
    "services:",
    "  web:",
    "    build: .",
    "    ports:",
    "      - \"3000:8080\"",
    "    environment:",
    "      DATABASE_URL: postgres://localhost:5432/shop",
    "  db:",
    "    image: postgres:16",
    "    environment:",
    "      POSTGRES_PASSWORD: example",
    "");

  window.CODELAB.addUnit("docker", {
    id: "docker-u8",
    title: "Two projects",
    icon: "🏁",
    blurb: "No new commands. Build an image the way you would ship one — then repair a stack that someone else broke in six different ways.",
    cheat: [
      { h: "The checklist for a production image", lang: "sh", code: L(
        "# ✓ multi-stage: build in one, ship the output from a small base",
        "# ✓ a PINNED slim/alpine base, never :latest",
        "# ✓ package files → install → source  (so the cache survives edits)",
        "# ✓ .dockerignore: no .env, no host node_modules",
        "# ✓ USER: not root",
        "# ✓ CMD in exec form, so SIGTERM reaches the app",
        "# ✓ HEALTHCHECK, so \"running\" means something"),
        note: "Eight lines of Dockerfile. Every one of them is a lesson from this course." },
      { h: "The six faults in a broken stack", lang: "sh", code: L(
        "# ports reversed          -p HOST:CONTAINER, host first",
        "# bound to 127.0.0.1      unreachable through a published port",
        "# localhost:5432          inside web, localhost is web",
        "# no volume               the database dies with the container",
        "# ENV SECRET=…            readable by anyone with the image",
        "# running as root         one escape from being root on the host"),
        note: "Every one of these is something that looks fine until the day it doesn't." }
    ],
    lessons: [

      {
        id: "docker-u8-p1",
        title: "Project: Containerize the shop, properly",
        kind: "shell", chip: "DOCKER", xp: 60, mins: 45, project: true,
        cwd: "/home/you/project",
        fs: {
          "/home/you/project/server.js": "const app = require(\"./dist/app.js\");\n",
          "/home/you/project/src/app.js": "console.log(\"the shop\");\n",
          "/home/you/project/package.json": BUILD_PKG,
          "/home/you/project/package-lock.json": "{ \"lockfileVersion\": 3 }\n",
          "/home/you/project/.env": "API_KEY=sk_test_local\n",
          "/home/you/project/node_modules/left-pad/index.js": "module.exports = pad;\n"
        },
        apps: { "node dist/app.js": SHOP_APP },
        brief: "Everything this course has taught, in one Dockerfile you write from scratch. No hints in the file, no scaffolding — just the shop, and the standard you would hold a colleague's image to.\n\nThe app builds with `npm run build`, which turns `src/` into `dist/`, and runs with `node dist/app.js`. It listens on `$PORT` (3000), answers `/` and `/health`, and handles SIGTERM cleanly.\n\nYour image must:\n\n- be **multi-stage** — build with the full toolchain, ship from a small **pinned** base;\n- order its instructions so a **source edit doesn't reinstall dependencies**;\n- keep `.env` and the host's `node_modules` out of the build context;\n- ship `dist/`, not `src/`, and no dev dependencies;\n- run as a **non-root** user;\n- use an **exec-form** `CMD`, so `docker stop` is clean and quick;\n- carry a **HEALTHCHECK** against `/health`;\n- and come in comfortably under 250 MB.\n\nBuild it as `shop:3.0`. Then build it a second time as `shop:3.1` after touching a source file, so the checks can see what your layer order costs. Run `web` published on 8080, and run a second container `probe` that you stop, so the checks can read its exit code.\n\n*(This is how you would ship NoteStream from the Full-Stack Capstone — same shape, same checklist.)*",
        example: { lang: "sh", code: "docker build -t shop:3.0 .\necho \"// tweak\" >> src/app.js\ndocker build -t shop:3.1 .\ndocker run -d --name web -p 8080:3000 shop:3.0\ndocker run -d --name probe shop:3.0\ndocker stop probe" },
        steps: [
          { text: "The image builds, from a small **pinned** base, as the last stage of a **multi-stage** build.",
            test: L(
              "var img = T.image('shop:3.0');",
              "T.expect(img, 'Build it: docker build -t shop:3.0 . — check the Terminal pane if the build failed.');",
              "T.expect(/^node:20-(alpine|slim)$/.test(img.base), 'The FINAL stage should start from a pinned small base (node:20-alpine or node:20-slim). Got: ' + img.base);",
              "T.expect(img.files.indexOf('/app/dist/app.js') !== -1, 'The built output (dist/app.js) must be in the image — run npm run build in an earlier stage and COPY --from it.');") },
          { text: "It ships the output and nothing else: no source, no dev dependencies, no `.env`, no host `node_modules`.",
            test: L(
              "var f = T.image('shop:3.0').files;",
              "T.expect(f.indexOf('/app/src/app.js') === -1, 'The source should NOT be in the final image — copy only dist/ across from the build stage.');",
              "T.expect(f.indexOf('/app/node_modules/jest/package.json') === -1, 'jest is a devDependency — install with npm ci --omit=dev in the final stage.');",
              "T.expect(f.indexOf('/app/.env') === -1, 'The .env file is in the image. Add a .dockerignore.');",
              "T.expect(f.indexOf('/app/node_modules/left-pad/index.js') === -1, 'The host\\'s node_modules was copied in — exclude it in .dockerignore.');",
              "T.expect(f.indexOf('/app/node_modules/express/package.json') !== -1, 'The runtime dependency express SHOULD be installed in the image.');") },
          { text: "The layer order protects the cache: a source edit leaves the dependency install cached.",
            test: L(
              "T.expect(T.builds().length >= 2, 'Build twice, with a source edit in between: docker build -t shop:3.0 . , echo \"// tweak\" >> src/app.js , docker build -t shop:3.1 .');",
              "var second = T.build(2);",
              "var installs = second.steps.filter(function (s) { return s.instr.indexOf('RUN npm ci') === 0; });",
              "T.expect(installs.length > 0, 'The second build should still have its npm ci steps.');",
              "T.expect(installs.every(function (s) { return s.cached; }), 'After a source edit, every npm ci should be CACHED. Copy package*.json and install BEFORE copying the source.');") },
          { text: "It runs as a non-root user.",
            test: L(
              "T.expect(T.image('shop:3.0').user !== 'root', 'Add a USER instruction — the node images already ship a `node` user.');",
              "T.expect(T.container('web') && T.container('web').user !== 'root', 'And the running container should be that user too.');") },
          { text: "`CMD` is exec form, so a stop is clean and immediate.",
            test: L(
              "T.expect(T.image('shop:3.0').cmd[0] !== '/bin/sh', 'Write CMD as a JSON array — shell form wraps it in /bin/sh -c, which never passes on SIGTERM.');",
              "var p = T.container('probe');",
              "T.expect(p, 'Run a second container named probe (docker run -d --name probe shop:3.0) and stop it, so these checks can read its exit code.');",
              "T.eq(p.exitCode, 0, 'A clean stop exits 0. A 137 means the signal never reached the app.');",
              "T.expect(p.stoppedAfter < 10, 'And it should stop at once, not after the 10-second grace period.');") },
          { text: "It is a small image — under 250 MB.",
            test: L(
              "var size = T.image('shop:3.0').size;",
              "T.expect(size < 250 * 1024 * 1024, 'The image is ' + Math.round(size / 1024 / 1024) + ' MB. A full node:20 base alone is about a gigabyte — ship the final stage from alpine or slim.');") },
          { text: "The container is reachable on the published port, and answers.",
            test: L(
              "T.expect(T.container('web') && T.container('web').status === 'running', 'Run it: docker run -d --name web -p 8080:3000 shop:3.0');",
              "var r = T.curl('http://localhost:8080');",
              "T.eq(r.status, 200, 'Host port 8080 should reach the app. Check -p HOST:CONTAINER and that the app binds 0.0.0.0.');",
              "T.eq(r.body, 'Hello from the shop', 'And it should answer.');") },
          { text: "Docker can tell the container is well: it reports **healthy**.",
            test: L(
              "T.eq(T.container('web').health, 'healthy', 'Add a HEALTHCHECK to the Dockerfile — for example: HEALTHCHECK CMD curl -f http://localhost:3000/health');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# Build twice (with a source edit in between), then run two containers:",
            "# web — published on 8080 and left running",
            "# probe — started and then stopped, so the checks can read its exit code",
            "",
            "") },
          { name: "Dockerfile", content: L(
            "# Write it from scratch. The checklist is in the brief.",
            "# The app: npm run build turns src/ into dist/, and it runs as",
            "#   node dist/app.js",
            "",
            "") },
          { name: ".dockerignore", content: L(
            "# Keep the build context clean.",
            "",
            "") }
        ],
        hints: [
          "Stage one: `FROM node:20 AS build`, WORKDIR, `COPY package*.json ./`, `RUN npm ci`, `COPY src ./src`, `RUN npm run build`. Stage two: `FROM node:20-alpine`, WORKDIR, `COPY package*.json ./`, `RUN npm ci --omit=dev`, `COPY --from=build /app/dist ./dist`.",
          "Finish stage two with `USER node`, `EXPOSE 3000`, `HEALTHCHECK CMD curl -f http://localhost:3000/health` and `CMD [\"node\", \"dist/app.js\"]`. The .dockerignore needs `**/node_modules` and `.env`.",
          "commands.sh: `docker build -t shop:3.0 .`, `echo \"// tweak\" >> src/app.js`, `docker build -t shop:3.1 .`, `docker run -d --name web -p 8080:3000 shop:3.0`, `docker run -d --name probe shop:3.0`, `docker stop probe`."
        ],
        solution: {
          "commands.sh": L(
            "docker build -t shop:3.0 .",
            "echo \"// tweak\" >> src/app.js",
            "docker build -t shop:3.1 .",
            "docker run -d --name web -p 8080:3000 shop:3.0",
            "docker run -d --name probe shop:3.0",
            "docker stop probe",
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
            "USER node",
            "EXPOSE 3000",
            "HEALTHCHECK CMD curl -f http://localhost:3000/health",
            "CMD [\"node\", \"dist/app.js\"]",
            ""),
          ".dockerignore": L("**/node_modules", ".env", "")
        }
      },

      {
        id: "docker-u8-p2",
        title: "Project: \"It works on my machine\" — fix the stack",
        kind: "shell", chip: "DOCKER", xp: 60, mins: 45, project: true,
        cwd: "/home/you/project",
        fs: {
          "/home/you/project/server.js": SERVER,
          "/home/you/project/package.json": PLAIN_PKG,
          "/home/you/project/package-lock.json": "{ \"lockfileVersion\": 3 }\n",
          "/home/you/project/Dockerfile": BROKEN_DF,
          "/home/you/project/compose.yaml": BROKEN_COMPOSE
        },
        apps: { "node server.js": BROKEN_APP, "postgres": POSTGRES },
        brief: "A colleague hands over a stack with the words every engineer dreads: *\"it works on my machine\"*. It comes up. Both containers say running. Nothing else about it is right.\n\nThere are **six** faults, one from each unit of this course:\n\n- the port mapping is **reversed**;\n- the app binds to **127.0.0.1**, so a published port can't reach it;\n- `web` looks for the database at **localhost:5432**;\n- the database has **no volume**, so its data dies with the container;\n- an API key is baked into the image with **ENV**;\n- and the container runs as **root**.\n\nFix all six, in the `Dockerfile` and `compose.yaml` tabs. The target state: the app answers on **host port 8080**, reports `db: connected`, keeps its data across `docker compose down` and `up`, runs as a non-root user, and carries no secret inside the image. The key should still reach the app — pass it at **run time** instead, as `API_KEY: from-compose` in the service's environment.\n\nWork it like a real handover: bring it up, look at what's wrong, fix one fault at a time, and bring it up again.",
        steps: [
          { text: "The stack comes up, and both services are running.",
            test: L(
              "T.expect(T.ran(/docker compose up/), 'Bring it up: docker compose up -d');",
              "var c = T.compose();",
              "T.expect(c, 'Nothing came up — check the Terminal pane for a YAML error.');",
              "T.eq(c.services.web.status, 'running', 'web should be running.');",
              "T.eq(c.services.db.status, 'running', 'db should be running.');") },
          { text: "It answers on **host port 8080** — the mapping and the bind address are both fixed.",
            test: L(
              "var r = T.curl('http://localhost:8080');",
              "T.eq(r.status, 200, 'Two faults stand between you and this: the ports are written CONTAINER:HOST (they should be \"8080:3000\"), and the app binds 127.0.0.1 unless HOST says otherwise.');",
              "T.eq(r.body, 'Hello from the shop', 'And it should answer normally.');") },
          { text: "It reaches the database by service name.",
            test: L(
              "T.eq(T.curl('http://localhost:8080/health').body, 'db: connected', 'Inside web, localhost is web. Point DATABASE_URL at the service name and the container port: postgres://db:5432/shop');") },
          { text: "The data survives the stack being taken down and brought back up.",
            test: L(
              "T.expect(T.ran(/docker compose exec/), 'Write something first: docker compose exec db touch /var/lib/postgresql/data/orders');",
              "T.expect(T.ran(/docker compose down/), 'Then take it down (docker compose down) and bring it up again.');",
              "T.expect(T.volumes().length > 0, 'The database needs a named volume, declared under a top-level volumes: key and mounted at /var/lib/postgresql/data.');",
              "T.eq(T.fileIn('project-db-1', '/var/lib/postgresql/data/orders'), '', 'The row written before the down should still be there afterwards.');") },
          { text: "No secret is baked into the image — but the app still gets the key.",
            test: L(
              "var img = T.image('project-web');",
              "T.expect(img, 'The web service should build an image (tagged project-web).');",
              "T.expect(!img.env.API_KEY, 'Remove the ENV API_KEY line from the Dockerfile: anyone holding the image can read it.');",
              "T.expect(!T.said('sk_live_shop_42'), 'The old key should not appear anywhere in your output either.');",
              "T.eq(T.container('project-web-1').env.API_KEY, 'from-compose', 'Pass it at RUN time instead — API_KEY: from-compose under the web service\\'s environment.');") },
          { text: "The container does not run as root.",
            test: L(
              "T.expect(T.image('project-web').user !== 'root', 'Add a USER instruction to the Dockerfile — the node images ship a `node` user.');",
              "T.eq(T.container('project-web-1').user, T.image('project-web').user, 'And the running container should be that user.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# Fix the Dockerfile and compose.yaml tabs, then:",
            "",
            "# 1) Bring the stack up:",
            "",
            "# 2) Write a row into the database's data directory:",
            "",
            "# 3) Take it down and bring it back, to prove the data survives:",
            "",
            "") },
          { name: "compose.yaml", content: BROKEN_COMPOSE },
          { name: "Dockerfile", content: BROKEN_DF }
        ],
        hints: [
          "compose.yaml: the ports line should be \"8080:3000\" (host first). DATABASE_URL should be postgres://db:5432/shop. Add `HOST: 0.0.0.0` and `API_KEY: from-compose` to web's environment.",
          "compose.yaml, part two: give db `volumes:` with `- pgdata:/var/lib/postgresql/data`, and declare `volumes:` / `  pgdata:` at the end of the file with no indentation.",
          "Dockerfile: delete the ENV API_KEY line and add `USER node` before the CMD. commands.sh: `docker compose up -d`, `docker compose exec db touch /var/lib/postgresql/data/orders`, `docker compose down`, `docker compose up -d`."
        ],
        solution: {
          "commands.sh": L(
            "docker compose up -d",
            "docker compose exec db touch /var/lib/postgresql/data/orders",
            "docker compose down",
            "docker compose up -d",
            ""),
          "compose.yaml": L(
            "services:",
            "  web:",
            "    build: .",
            "    ports:",
            "      - \"8080:3000\"",
            "    environment:",
            "      DATABASE_URL: postgres://db:5432/shop",
            "      HOST: 0.0.0.0",
            "      API_KEY: from-compose",
            "  db:",
            "    image: postgres:16",
            "    environment:",
            "      POSTGRES_PASSWORD: example",
            "    volumes:",
            "      - pgdata:/var/lib/postgresql/data",
            "volumes:",
            "  pgdata:",
            ""),
          "Dockerfile": L(
            "FROM node:20",
            "WORKDIR /app",
            "COPY . .",
            "RUN npm ci",
            "USER node",
            "CMD node server.js",
            "")
        }
      }
    ]
  });
})();
