/* Docker & Containers — Unit 7: Docker Compose and sharing images */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var SERVER = L(
    "const http = require(\"http\");",
    "const port = process.env.PORT || 3000;",
    "http.createServer(handler).listen(port, \"0.0.0.0\");",
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
  function shopApp(over) {
    var app = {
      requires: ["server.js"],
      listen: { port: "$PORT|3000", host: "$HOST|0.0.0.0" },
      logs: ["Listening on http://{host}:{port}"],
      routes: { "/": "Hello from {GREETING|the shop}", "/health": "@health" },
      connects: "$DATABASE_URL",
      sigterm: "graceful"
    };
    Object.keys(over || {}).forEach(function (k) { app[k] = over[k]; });
    return {
      "node server.js": app,
      "postgres": {
        env: { required: ["POSTGRES_PASSWORD"] },
        listen: { port: "5432", host: "0.0.0.0" },
        logs: ["database system is ready to accept connections"],
        data: "/var/lib/postgresql/data",
        readyAfter: 2,
        sigterm: "graceful"
      }
    };
  }
  function world(extra) {
    var fs = {
      "/home/you/project/server.js": SERVER,
      "/home/you/project/package.json": PKG,
      "/home/you/project/package-lock.json": "{ \"lockfileVersion\": 3 }\n",
      "/home/you/project/Dockerfile": DF
    };
    Object.keys(extra || {}).forEach(function (k) { fs[k] = extra[k]; });
    return fs;
  }
  var LOCALHOST_COMPOSE = L(
    "services:",
    "  web:",
    "    build: .",
    "    ports:",
    "      - \"8080:3000\"",
    "    environment:",
    "      DATABASE_URL: postgres://localhost:5432/shop",
    "  db:",
    "    image: postgres:16",
    "    ports:",
    "      - \"5433:5432\"",
    "    environment:",
    "      POSTGRES_PASSWORD: example",
    "");

  window.CODELAB.addUnit("docker", {
    id: "docker-u7",
    title: "Docker Compose and sharing images",
    icon: "🧩",
    blurb: "One file for the whole stack, service names as hostnames, the difference between started and ready — and pushing an image to a registry so someone else can run it.",
    cheat: [
      { h: "compose.yaml", lang: "yaml", code: L(
        "services:",
        "  web:",
        "    build: .                 # build the Dockerfile here",
        "    ports:",
        "      - \"8080:3000\"",
        "    environment:",
        "      DATABASE_URL: postgres://db:5432/shop",
        "  db:",
        "    image: postgres:16       # pull, don't build",
        "    environment:",
        "      POSTGRES_PASSWORD: example"),
        note: "One file replaces a page of docker run flags — and it is the file you commit." },
      { h: "The commands", lang: "sh", code: L(
        "docker compose up -d      # build what needs building, then start everything",
        "docker compose ps         # what is running",
        "docker compose logs web   # one service's output",
        "docker compose exec db sh # a shell inside a service",
        "docker compose down       # stop and remove containers + the network",
        "docker compose down -v    # …and delete the named volumes too"),
        note: "Compose creates a network called <project>_default and names containers <project>-<service>-1." },
      { h: "Service names are hostnames", lang: "yaml", code: L(
        "# from the web container:",
        "#   postgres://db:5432/shop     ✅ service name + CONTAINER port",
        "#   postgres://localhost:5432   ❌ localhost is web itself",
        "#   postgres://db:5433/shop     ❌ 5433 is the HOST port, not the container's"),
        note: "Published ports are for your machine. Service-to-service traffic uses the container port." },
      { h: "Started is not ready", lang: "yaml", code: L(
        "    depends_on:",
        "      db:",
        "        condition: service_healthy   # wait for the HEALTHCHECK",
        "  db:",
        "    healthcheck:",
        "      test: [\"CMD\", \"pg_isready\"]"),
        note: "Plain depends_on only orders the START. A database accepts connections seconds later." },
      { h: "Sharing an image", lang: "sh", code: L(
        "docker tag shop:2.0 registry.local/shop:2.0",
        "docker push registry.local/shop:2.0",
        "docker pull registry.local/shop:2.0     # …on any other machine"),
        note: "A registry is where images live between machines. The digest proves you pulled the same bytes." }
    ],
    lessons: [

      {
        id: "docker-u7-1",
        title: "compose.yaml: two services, one command",
        kind: "shell", chip: "DOCKER", xp: 25, mins: 18,
        cwd: "/home/you/project",
        fs: world(),
        apps: shopApp(),
        brief: "Unit 5's two-container stack took a network, two long `docker run` lines and a lot of remembering. **Compose** puts the whole thing in one file you commit next to the code.\n\n`compose.yaml` lists **services**. Each one either **builds** from a Dockerfile or uses a ready-made **image**, and carries its own ports, environment and volumes. `docker compose up -d` then builds what needs building, creates a network, and starts everything in the right order.\n\nTwo conventions matter. Compose derives a **project** name from the directory — here `project` — and names containers `<project>-<service>-1`. And it creates a network called `<project>_default` with every service on it, so the DNS from Unit 5 is there from the start: `web` can reach `db` by the name `db`.\n\nWrite the file, bring the stack up, and check both services.",
        example: { lang: "yaml", code: "services:\n  web:\n    build: .\n    ports:\n      - \"8080:3000\"\n  db:\n    image: postgres:16" },
        steps: [
          { text: "Write `compose.yaml` with a `web` service (built here, published on 8080) and a `db` service (`postgres:16`), then run `docker compose up -d`.",
            test: L(
              "T.expect(T.ran(/docker compose up/), 'Bring it up: docker compose up -d');",
              "var c = T.compose();",
              "T.expect(c, 'Nothing came up. Check the Terminal pane — a YAML mistake stops the whole stack.');",
              "T.expect(c.services.web && c.services.db, 'The file should define two services, named web and db.');") },
          { text: "Both services are running, with the names Compose gives them.",
            test: L(
              "var c = T.compose();",
              "T.eq(c.services.web.status, 'running', 'web should be up. If it exited, read: docker compose logs web');",
              "T.eq(c.services.db.status, 'running', 'db should be up too — remember POSTGRES_PASSWORD, or it refuses to start.');",
              "T.eq(c.services.web.container, 'project-web-1', 'Compose names containers <project>-<service>-1, and the project name comes from this directory.');") },
          { text: "Compose made a network for the stack.",
            test: L(
              "T.expect(T.networks().indexOf('project_default') !== -1, 'Compose creates <project>_default and puts every service on it — which is why service names resolve.');") },
          { text: "The app is reachable on 8080, and reaches the database by the name `db`.",
            test: L(
              "T.eq(T.curl('http://localhost:8080').status, 200, 'The published port should answer.');",
              "T.eq(T.curl('http://localhost:8080/health').body, 'db: connected', 'Point DATABASE_URL at postgres://db:5432/shop — the service name is the hostname, on the CONTAINER port.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# Write compose.yaml in the next tab, then:",
            "",
            "# Bring the whole stack up in the background:",
            "",
            "") },
          { name: "compose.yaml", content: L(
            "# Two services:",
            "#   web — build: .   published 8080:3000,",
            "#         environment DATABASE_URL: postgres://db:5432/shop",
            "#   db  — image: postgres:16, environment POSTGRES_PASSWORD: example",
            "services:",
            "") }
        ],
        hints: [
          "Indentation is two spaces per level: `services:`, then `  web:`, then `    build: .`",
          "Ports are a list of quoted strings: `    ports:` then `      - \"8080:3000\"`. Environment is a map: `    environment:` then `      DATABASE_URL: postgres://db:5432/shop`",
          "The db service needs `image: postgres:16` and `POSTGRES_PASSWORD: example`. Then one line in commands.sh: `docker compose up -d`."
        ],
        solution: {
          "commands.sh": L("docker compose up -d", ""),
          "compose.yaml": L(
            "services:",
            "  web:",
            "    build: .",
            "    ports:",
            "      - \"8080:3000\"",
            "    environment:",
            "      DATABASE_URL: postgres://db:5432/shop",
            "  db:",
            "    image: postgres:16",
            "    environment:",
            "      POSTGRES_PASSWORD: example",
            "")
        }
      },

      {
        id: "docker-u7-2",
        title: "Service names are hostnames: db:5432, not localhost:5432",
        kind: "shell", chip: "DOCKER", xp: 25, mins: 16,
        cwd: "/home/you/project",
        fs: world({ "/home/you/project/compose.yaml": LOCALHOST_COMPOSE }),
        apps: shopApp(),
        brief: "The stack comes up, both services are green, and the app still can't reach the database. This is the most common Compose bug, and it has two flavours — both visible in the shipped file.\n\n**`localhost` is the container itself.** Inside `web`, `postgres://localhost:5432` means *\"connect to port 5432 in the web container\"*, where nothing is listening. On your laptop both processes shared one machine, so localhost worked; in Compose each service is its own host.\n\n**The published port is not the one to use.** This `db` publishes `5433:5432` so *you* can reach it with a GUI from your machine. But `web` talks to `db` over the Compose network, where the database is listening on its **container** port, 5432. Straight from Docker's docs: service-to-service communication uses the container port.\n\nFix the URL, bring the stack up, and confirm with `/health`.",
        steps: [
          { text: "Bring the stack up as shipped and see what `/health` reports.",
            test: L(
              "T.expect(T.ran(/docker compose up/), 'Run docker compose up -d');",
              "T.expect(T.compose(), 'The stack should come up — the bug is in the URL, not the file structure.');") },
          { text: "Fix `DATABASE_URL` in `compose.yaml`: the service name, on the container port.",
            test: L(
              "var c = T.compose();",
              "T.eq(c.services.web.status, 'running', 'web should be running.');",
              "T.eq(T.curl('http://localhost:8080/health').body, 'db: connected', 'Use postgres://db:5432/shop — the SERVICE NAME as the hostname and the CONTAINER port. localhost points at web itself; 5433 is the host-side port.');") },
          { text: "The published `5433` is still there — for **you**, not for `web`.",
            test: L(
              "var db = T.container('project-db-1');",
              "T.expect(db, 'The db container should exist.');",
              "T.eq(db.ports, [{ ip: '0.0.0.0', host: 5433, container: 5432 }], 'Leave the db ports mapping alone: it is how you would connect from your own machine, and it is irrelevant to service-to-service traffic.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# The compose file is shipped with a broken DATABASE_URL. Fix it in",
            "# the next tab, then bring the stack up:",
            "",
            "") },
          { name: "compose.yaml", content: LOCALHOST_COMPOSE }
        ],
        hints: [
          "Only one line needs to change: the `DATABASE_URL` under web's `environment`.",
          "Inside the web container, `localhost` is web. The database answers to its service name, `db`.",
          "The port to use is the one the database listens on inside its container — 5432 — not the published 5433."
        ],
        solution: {
          "commands.sh": L("docker compose up -d", ""),
          "compose.yaml": LOCALHOST_COMPOSE.replace("postgres://localhost:5432/shop", "postgres://db:5432/shop")
        }
      },

      {
        id: "docker-u7-3",
        title: "depends_on, health, and volumes in Compose",
        kind: "shell", chip: "DOCKER", xp: 25, mins: 18,
        cwd: "/home/you/project",
        fs: world(),
        apps: shopApp({ connectOnStart: true }),
        brief: "`depends_on: [db]` reads like *\"start the database first\"*, and that is exactly — and only — what it does. It orders the **start**. A Postgres container is \"started\" the instant its process launches, and accepts connections a couple of seconds later. An app that connects on boot starts in that gap and dies.\n\nThe fix is to depend on **readiness**, not on start order: give the database a `healthcheck`, and make the dependency conditional on it.\n\n    depends_on:\n      db:\n        condition: service_healthy\n\nNow Compose waits until the check passes before it starts `web`.\n\nThe same file adds the other thing a real stack needs: a **named volume** for the database, declared under a top-level `volumes:` key and mounted into the service. `docker compose down` removes containers and the network but **keeps** named volumes — only `down -v` deletes them.\n\nThis app connects to the database as it boots, so it is unforgiving. Write the file properly, then prove the data survives a `down` and `up`.",
        example: { lang: "yaml", code: "  db:\n    image: postgres:16\n    healthcheck:\n      test: [\"CMD\", \"pg_isready\"]\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n\nvolumes:\n  pgdata:" },
        steps: [
          { text: "Write `compose.yaml` with a health-gated `depends_on` and a named volume, then bring it up.",
            test: L(
              "T.expect(T.ran(/docker compose up/), 'Run docker compose up -d');",
              "var c = T.compose();",
              "T.expect(c && c.services.web, 'The stack should come up.');",
              "T.eq(c.services.web.status, 'running', 'web connects to the database as it boots. With a plain depends_on it starts too early and exits — gate it on condition: service_healthy.');") },
          { text: "The database reports healthy, and the app connected.",
            test: L(
              "T.eq(T.compose().services.db.health, 'healthy', 'Give db a healthcheck (test: [\"CMD\", \"pg_isready\"]) so Compose has something to wait for.');",
              "T.eq(T.curl('http://localhost:8080/health').body, 'db: connected', 'And the app should be talking to it.');") },
          { text: "Write a row, then `docker compose down` and `docker compose up -d` again.",
            test: L(
              "T.expect(T.ran(/docker compose exec/), 'Write something into the data directory: docker compose exec db touch /var/lib/postgresql/data/orders');",
              "T.expect(T.ran(/docker compose down/), 'Then take the stack down: docker compose down');",
              "T.eq(T.ran(/docker compose down -v/), false, 'Use plain down here — down -v is the one that deletes volumes.');") },
          { text: "The data survived, because it lives in a named volume.",
            test: L(
              "T.expect(T.volumes().indexOf('pgdata') !== -1, 'Declare the volume under a top-level volumes: key and mount it in the db service.');",
              "T.eq(T.fileIn('project-db-1', '/var/lib/postgresql/data/orders'), '', 'After down and up, the file written before should still be there. down removes containers and the network; it keeps named volumes.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# Write compose.yaml, then:",
            "",
            "# 1) Bring the stack up:",
            "",
            "# 2) Write a row into the database's data directory:",
            "",
            "# 3) Take it down and bring it back:",
            "",
            "") },
          { name: "compose.yaml", content: L(
            "# web: build: ., ports 8080:3000, DATABASE_URL: postgres://db:5432/shop,",
            "#      and depends_on db with condition: service_healthy",
            "# db:  image postgres:16, POSTGRES_PASSWORD: example,",
            "#      healthcheck test: [\"CMD\", \"pg_isready\"],",
            "#      volumes: - pgdata:/var/lib/postgresql/data",
            "# and a top-level volumes: key declaring pgdata",
            "services:",
            "") }
        ],
        hints: [
          "web's dependency is a MAP, not a list: `    depends_on:` then `      db:` then `        condition: service_healthy`",
          "db needs `    healthcheck:` with `      test: [\"CMD\", \"pg_isready\"]`, and `    volumes:` with `      - pgdata:/var/lib/postgresql/data`. Then, at the very end of the file and with no indentation, `volumes:` and `  pgdata:`.",
          "commands.sh: `docker compose up -d`, `docker compose exec db touch /var/lib/postgresql/data/orders`, `docker compose down`, `docker compose up -d`."
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
            "    depends_on:",
            "      db:",
            "        condition: service_healthy",
            "  db:",
            "    image: postgres:16",
            "    environment:",
            "      POSTGRES_PASSWORD: example",
            "    healthcheck:",
            "      test: [\"CMD\", \"pg_isready\"]",
            "    volumes:",
            "      - pgdata:/var/lib/postgresql/data",
            "volumes:",
            "  pgdata:",
            "")
        }
      },

      {
        id: "docker-u7-4",
        title: "Share it: tag, push, pull",
        kind: "shell", chip: "DOCKER", xp: 20, mins: 15,
        cwd: "/home/you/project",
        fs: world(),
        apps: shopApp(),
        setup: "docker build -t shop:2.0 .",
        brief: "An image on your laptop helps nobody. A **registry** is where images live between machines: Docker Hub, GitHub's registry, your company's own. Pushing is how a build reaches a server, a colleague, or a deploy.\n\nThe name carries the destination. `shop:2.0` has no registry in it, so it's local only. `registry.local/shop:2.0` says *which registry*, *which repository* and *which tag* — and `docker tag` adds that name to an image you already have. The image doesn't move or change; it gains a name.\n\nThen `docker push` uploads it, and anyone with access runs `docker pull`. What comes back is byte-identical — the **digest** is the proof, which is why deployments pin digests rather than trusting a tag someone could move.\n\nPush this image, delete it locally to be sure, and pull it back.",
        steps: [
          { text: "Give the image a registry name with `docker tag`, then `docker push` it.",
            test: L(
              "T.expect(T.ran(/^docker tag/m), 'Run: docker tag shop:2.0 registry.local/shop:2.0');",
              "T.expect(T.ran(/^docker push/m), 'Then: docker push registry.local/shop:2.0');",
              "T.eq(T.inRegistry('registry.local/shop:2.0'), T.before.image('shop:2.0').id, 'The registry should now hold the very same image you built — a tag is a name, not a copy.');") },
          { text: "Delete both local names with `docker rmi`, so nothing is left to fool you.",
            test: L(
              "T.expect(T.ran(/^docker rmi/m), 'Remove them: docker rmi registry.local/shop:2.0 shop:2.0');",
              "T.eq(T.image('shop:2.0'), null, 'The local shop:2.0 should be gone.');") },
          { text: "Pull it back and confirm it is the same image, by digest.",
            test: L(
              "T.expect(T.ran(/^docker pull/m), 'Pull it: docker pull registry.local/shop:2.0');",
              "T.expect(T.image('registry.local/shop:2.0'), 'The image should be local again.');",
              "T.eq(T.image('registry.local/shop:2.0').id, T.before.image('shop:2.0').id, 'Same digest, so byte-for-byte the same image you pushed.');") },
          { text: "Ask for a tag the registry doesn't have, and read the error.",
            test: L(
              "T.expect(T.ran(/docker pull registry\\.local\\/shop:9\\.9/), 'Try: docker pull registry.local/shop:9.9');",
              "T.expect(T.said('not found'), 'A tag nobody pushed cannot be pulled — the registry says it does not exist.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# shop:2.0 is already built.",
            "",
            "# 1) Name it for the registry, and push:",
            "",
            "# 2) Delete both local names:",
            "",
            "# 3) Pull it back:",
            "",
            "# 4) Try a tag that was never pushed:",
            "",
            "") }
        ],
        hints: [
          "`docker tag shop:2.0 registry.local/shop:2.0` then `docker push registry.local/shop:2.0`.",
          "`docker rmi` takes several names at once: `docker rmi registry.local/shop:2.0 shop:2.0`.",
          "Then `docker pull registry.local/shop:2.0`, and finally `docker pull registry.local/shop:9.9` to see the failure."
        ],
        solution: {
          "commands.sh": L(
            "# 1) Name it and push:",
            "docker tag shop:2.0 registry.local/shop:2.0",
            "docker push registry.local/shop:2.0",
            "",
            "# 2) Delete both local names:",
            "docker rmi registry.local/shop:2.0 shop:2.0",
            "",
            "# 3) Pull it back:",
            "docker pull registry.local/shop:2.0",
            "",
            "# 4) A tag nobody pushed:",
            "docker pull registry.local/shop:9.9",
            "")
        }
      },

      {
        id: "docker-quiz-7",
        title: "Unit 7 quiz: Compose and registries",
        kind: "quiz", xp: 10,
        brief: "Service names, container ports, readiness, volumes on down, and registries. 80% to pass.",
        questions: [
          { q: "In a Compose stack, what hostname does the `web` service use to reach the `db` service?",
            choices: ["localhost, since they share the Compose network", "db — the service name resolves on the stack's network", "The db container's IP address, looked up with docker inspect", "The host machine's name, followed by the published port"],
            answer: 1, explain: "Compose puts every service on one network where the service name resolves by DNS, so `postgres://db:5432` just works. localhost inside web means web itself. Hard-coding an IP would break on the next restart, since addresses are assigned dynamically." },
          { q: "`db` publishes `\"5433:5432\"`. Which port should `web` connect to?",
            choices: ["5433, because that is the port Compose published", "Either one; Compose forwards both to the database", "5432, the port the database listens on in its container", "Neither — services must connect through the host's IP"],
            answer: 2, explain: "The published 5433 is a door for your own machine. Traffic between services goes directly over the Compose network to the container's own port, so the mapping is irrelevant there. Docker's documentation states it plainly: service-to-service communication uses the container port." },
          { q: "What does a plain `depends_on: [db]` actually guarantee?",
            choices: ["That db is accepting connections before web starts", "That db's healthcheck has passed at least once", "That web will be restarted if db goes down later", "That db is started before web — nothing more"],
            answer: 3, explain: "It orders startup only. A database process launches in milliseconds and accepts connections seconds later, so an app that connects on boot can still fail. Depending on `condition: service_healthy`, with a healthcheck on the dependency, is what waits for readiness." },
          { q: "You run `docker compose down`. What happens to a named volume declared in the file?",
            choices: ["It is deleted along with the containers", "It is kept; only `down -v` deletes it", "It is kept for 24 hours and then garbage collected", "It is converted into a bind mount on the host"],
            answer: 1, explain: "`down` removes the containers and the network but deliberately leaves named volumes alone, so your database survives a restart of the stack. Adding `-v` is the explicit, destructive opt-in — which is exactly why it isn't the default." },
          { q: "What does `docker tag shop:2.0 registry.local/shop:2.0` do?",
            choices: ["Uploads the image to registry.local straight away", "Copies the image so there are two of them locally", "Adds a second name to the same image", "Renames the image and forgets the old name"],
            answer: 2, explain: "Tagging only adds a name that points at the same image, which is why both names share one digest and `docker images` shows no extra disk use. Uploading is the separate `docker push` step, and the old name stays until you remove it with `docker rmi`." },
          { q: "Why do deployments often pin an image digest rather than a tag?",
            choices: ["Digests pull faster than tags do from most registries", "A tag can be moved to point at different content later", "Tags stop working once an image has been pushed twice", "Digests are the only way to pull from a private registry"],
            answer: 1, explain: "A tag is a mutable pointer: whoever can push can move `:2.0` to new content, so \"the same tag\" is not a promise of the same bytes. A digest is a hash of the content itself, so pinning it guarantees the exact image you tested is the one that runs." }
        ]
      }
    ]
  });
})();
