/* Docker & Containers — Unit 5: Ports and networking */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var SERVER = L(
    "const http = require(\"http\");",
    "const host = process.env.HOST || \"0.0.0.0\";",
    "const port = process.env.PORT || 3000;",
    "http.createServer(handler).listen(port, host);",
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
  var POSTGRES = {
    env: { required: ["POSTGRES_PASSWORD"] },
    listen: { port: "5432", host: "0.0.0.0" },
    logs: ["database system is ready to accept connections"],
    data: "/var/lib/postgresql/data",
    sigterm: "graceful"
  };
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
    return { "node server.js": app, "postgres": POSTGRES };
  }
  function world() {
    return {
      "/home/you/project/server.js": SERVER,
      "/home/you/project/package.json": PKG,
      "/home/you/project/package-lock.json": "{ \"lockfileVersion\": 3 }\n",
      "/home/you/project/Dockerfile": DF
    };
  }

  window.CODELAB.addUnit("docker", {
    id: "docker-u5",
    title: "Ports and networking",
    icon: "🔌",
    blurb: "Publishing a port, binding to an address that is actually reachable, two containers finding each other by name, and the error you get when a host port is already taken.",
    cheat: [
      { h: "Publishing a port", lang: "sh", code: L(
        "docker run -d -p 8080:3000 shop:1.0",
        "#              ▲    ▲",
        "#           HOST  CONTAINER      (host side first, always)",
        "curl localhost:8080",
        "",
        "docker run -d -P shop:1.0     # publish every EXPOSEd port on a random host port"),
        note: "EXPOSE documents a port. -p is what actually opens one on your machine." },
      { h: "Bind to 0.0.0.0 inside the container", lang: "js", code: L(
        "app.listen(3000, \"127.0.0.1\");  // only reachable INSIDE the container",
        "app.listen(3000, \"0.0.0.0\");    // reachable through a published port"),
        note: "\"Works on my laptop, broken in Docker\" is usually this. 127.0.0.1 inside a container means that container." },
      { h: "Containers finding each other", lang: "sh", code: L(
        "docker network create shopnet",
        "docker run -d --name db  --network shopnet postgres:16",
        "docker run -d --name web --network shopnet -e DATABASE_URL=postgres://db:5432/shop shop:1.0",
        "#                                                            ▲ the container NAME is the hostname"),
        note: "The DEFAULT bridge has no name resolution. A user-defined network does — that is the reason to create one." },
      { h: "Which port do I use?", lang: "sh", code: L(
        "# from your machine   → the HOST port      curl localhost:8080",
        "# from another container → the CONTAINER port  postgres://db:5432",
        "# inside the container  → localhost is ITSELF  curl localhost:3000"),
        note: "Container-to-container traffic never goes through the published host port." },
      { h: "Port already allocated", lang: "sh", code: L(
        "docker run -d -p 8080:3000 shop:1.0    # fine",
        "docker run -d -p 8080:3000 shop:1.0    # Bind for 0.0.0.0:8080 failed:",
        "#                                        port is already allocated"),
        note: "One host port, one publisher. Map the second container somewhere else." }
    ],
    lessons: [

      {
        id: "docker-u5-1",
        title: "-p HOST:CONTAINER, and why EXPOSE isn't enough",
        kind: "shell", chip: "DOCKER", xp: 20, mins: 15,
        cwd: "/home/you/project",
        fs: world(),
        apps: shopApp(),
        setup: "docker build -t shop:1.0 .",
        brief: "A container gets its own network namespace. The app inside really is listening on port 3000 — but that 3000 belongs to the container, not to your machine, and nothing outside can reach it until you say so.\n\n`EXPOSE 3000` in the Dockerfile does **not** say so. It is documentation: it records which port the image expects to serve on. Tools read it; the network doesn't.\n\nWhat opens a door is `-p HOST:CONTAINER` at run time: `-p 8080:3000` means *\"traffic arriving at port 8080 on my machine goes to port 3000 in the container\"*. The host side comes first, always — and getting them backwards is the single most common Docker mistake, because it fails silently rather than loudly.\n\nRun the image both ways and `curl` each one.",
        example: { lang: "sh", code: "docker run -d --name bare shop:1.0            # EXPOSE only\ncurl localhost:3000                            # refused\n\ndocker run -d --name web -p 8080:3000 shop:1.0  # published\ncurl localhost:8080                            # Hello from the shop" },
        steps: [
          { text: "Run `bare` with no `-p` at all, then `curl localhost:3000`.",
            test: L(
              "T.expect(T.container('bare'), 'Run it: docker run -d --name bare shop:1.0');",
              "T.eq(T.curl('http://localhost:3000').error, 'refused', 'Nothing is published, so nothing on your machine answers on 3000 — EXPOSE alone does not open a port.');",
              "T.expect(T.said('Failed to connect to localhost port 3000'), 'Run curl localhost:3000 and let it fail — the refusal IS the lesson.');") },
          { text: "Now run `web` with `-p 8080:3000` and `curl localhost:8080`.",
            test: L(
              "T.expect(T.container('web'), 'Run it: docker run -d --name web -p 8080:3000 shop:1.0');",
              "var r = T.curl('http://localhost:8080');",
              "T.eq(r.status, 200, 'Published this time, so port 8080 on your machine should reach the app.');",
              "T.eq(r.body, 'Hello from the shop', 'And the app answers.');",
              "T.expect(T.said('Hello from the shop'), 'Run curl localhost:8080 so you see the answer in the terminal.');") },
          { text: "Check the mapping Docker recorded: host 8080 → container 3000.",
            test: L(
              "T.eq(T.container('web').ports, [{ ip: '0.0.0.0', host: 8080, container: 3000 }], 'The host side comes FIRST in -p. If these are swapped, nothing will answer on 8080.');") },
          { text: "The image still only *documents* its port — confirm `EXPOSE` is metadata.",
            test: L(
              "T.eq(T.image('shop:1.0').exposed, ['3000/tcp'], 'The Dockerfile EXPOSEs 3000, which is recorded on the image…');",
              "T.eq(T.container('bare').ports, [], '…but the container started without -p published nothing. Metadata, not plumbing.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# shop:1.0 is built, and its Dockerfile has EXPOSE 3000.",
            "",
            "# 1) Run it with NO -p, and try to reach it:",
            "",
            "# 2) Run it again, published on host port 8080, and reach it:",
            "",
            "") }
        ],
        hints: [
          "`docker run -d --name bare shop:1.0` then `curl localhost:3000` — expect it to fail.",
          "`docker run -d --name web -p 8080:3000 shop:1.0` — host port first, container port second.",
          "Then `curl localhost:8080`."
        ],
        solution: {
          "commands.sh": L(
            "# 1) No -p:",
            "docker run -d --name bare shop:1.0",
            "curl localhost:3000",
            "",
            "# 2) Published on 8080:",
            "docker run -d --name web -p 8080:3000 shop:1.0",
            "curl localhost:8080",
            "")
        }
      },

      {
        id: "docker-u5-2",
        title: "Listen on 0.0.0.0, not 127.0.0.1",
        kind: "shell", chip: "DOCKER", xp: 20, mins: 16,
        cwd: "/home/you/project",
        fs: world(),
        apps: shopApp({ listen: { port: "$PORT|3000", host: "$HOST|127.0.0.1" } }),
        setup: "docker build -t shop:1.0 .",
        brief: "Here is the bug that makes people believe Docker is broken. The port is published. `docker ps` shows the mapping. The container is running and the logs look perfect. And `curl` still gets nothing.\n\nThe cause is inside the app. This one binds to `127.0.0.1` — and inside a container, **127.0.0.1 is that container**. It means \"only accept connections from myself\", which is a sensible default on a laptop and fatal in a container: the published port forwards traffic in, and the app refuses it because it didn't come from inside.\n\nBinding to `0.0.0.0` means \"accept on every interface\", which is what a containerized server needs.\n\nThis app reads its bind address from `HOST` (defaulting to `127.0.0.1`). Reproduce the failure, then fix it at run time with `-e HOST=0.0.0.0` — no rebuild.",
        steps: [
          { text: "Run `broken` published on 8080, and watch `curl localhost:8080` fail even though the port is mapped.",
            test: L(
              "T.expect(T.container('broken'), 'Run it: docker run -d --name broken -p 8080:3000 shop:1.0');",
              "T.eq(T.container('broken').ports.length, 1, 'The port really is published — this is not a -p mistake.');",
              "T.eq(T.curl('http://localhost:8080').error, 'reset', 'The connection reaches the container and is refused there, because the app is bound to 127.0.0.1.');",
              "T.expect(T.said('Connection reset by peer'), 'Run curl localhost:8080 so you see the failure.');") },
          { text: "Prove the app is fine *inside* the container: `docker exec broken curl -s http://localhost:3000/`",
            test: L(
              "T.expect(T.ran(/docker exec \\w+ curl/), 'Run: docker exec broken curl -s http://localhost:3000/');",
              "T.expect(T.said('Hello from the shop'), 'From INSIDE the container, localhost is the container itself — so the app answers. It was never down.');") },
          { text: "Fix it at run time: start `fixed` on host port 8081 with `-e HOST=0.0.0.0`.",
            test: L(
              "T.expect(T.container('fixed'), 'Run: docker run -d --name fixed -p 8081:3000 -e HOST=0.0.0.0 shop:1.0');",
              "T.eq(T.container('fixed').env.HOST, '0.0.0.0', 'Pass the bind address in with -e HOST=0.0.0.0');",
              "var r = T.curl('http://localhost:8081');",
              "T.eq(r.status, 200, 'Now the app accepts connections from outside the container, so the published port works.');",
              "T.eq(r.body, 'Hello from the shop', 'And answers normally.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# shop:1.0 is built. The app binds to $HOST, which defaults to 127.0.0.1.",
            "",
            "# 1) Run it published on 8080 as `broken`, and try to reach it:",
            "",
            "# 2) Now reach it from INSIDE the container:",
            "",
            "# 3) Run a fixed one on 8081, binding to 0.0.0.0:",
            "",
            "") }
        ],
        hints: [
          "`docker run -d --name broken -p 8080:3000 shop:1.0` then `curl localhost:8080`.",
          "`docker exec broken curl -s http://localhost:3000/` — inside the container, localhost is the container.",
          "`docker run -d --name fixed -p 8081:3000 -e HOST=0.0.0.0 shop:1.0` then `curl localhost:8081`."
        ],
        solution: {
          "commands.sh": L(
            "# 1) The broken one:",
            "docker run -d --name broken -p 8080:3000 shop:1.0",
            "curl localhost:8080",
            "",
            "# 2) From inside the container it works:",
            "docker exec broken curl -s http://localhost:3000/",
            "",
            "# 3) Bind to 0.0.0.0 instead:",
            "docker run -d --name fixed -p 8081:3000 -e HOST=0.0.0.0 shop:1.0",
            "curl localhost:8081",
            "")
        }
      },

      {
        id: "docker-u5-3",
        title: "Two containers talking: a network and a name",
        kind: "shell", chip: "DOCKER", xp: 25, mins: 18,
        cwd: "/home/you/project",
        fs: world(),
        apps: shopApp(),
        setup: "docker build -t shop:1.0 .",
        brief: "An app needs a database. Both run in containers. How does the app find the database?\n\nNot by `localhost` — inside the app's container that means the app itself. Not by a published host port either; that's the door for *your machine*, and container-to-container traffic doesn't go out and back in.\n\nThe answer is a **user-defined network**. Put both containers on one, and Docker's built-in DNS resolves each **container name** to its address. `postgres://db:5432/shop` just works, using the **container** port 5432, published or not.\n\nThe catch that wastes an afternoon: the **default** bridge network — what you get when you don't ask for one — has *no* name resolution. Same containers, same ports, and `db` simply doesn't resolve.\n\nDo it wrong first, then right. This app reports what it sees at `/health`.",
        steps: [
          { text: "On the default network: start `db` and a `web` pointed at `postgres://db:5432/shop`, published on 8080.",
            test: L(
              "T.expect(T.container('db') && T.container('web'), 'Start both: docker run -d --name db -e POSTGRES_PASSWORD=example postgres:16, and docker run -d --name web -p 8080:3000 -e DATABASE_URL=postgres://db:5432/shop shop:1.0');",
              "T.eq(T.container('web').networks, ['bridge'], 'Neither container asked for a network, so both are on the default bridge.');") },
          { text: "It can't find it: `/health` reports the name never resolved.",
            test: L(
              "var r = T.curl('http://localhost:8080/health');",
              "T.eq(r.status, 503, 'The app is up, but its dependency is unreachable.');",
              "T.eq(r.body, 'db: getaddrinfo ENOTFOUND db', 'ENOTFOUND means DNS — the name db does not resolve on the default bridge.');") },
          { text: "Create a network called `shopnet`, then start `db2` and `web2` (on host 8081) **on it**.",
            test: L(
              "T.expect(T.ran(/^docker network create/m), 'Create it: docker network create shopnet');",
              "T.expect(T.networks().indexOf('shopnet') !== -1, 'The network should exist.');",
              "T.expect(T.container('web2') && T.container('db2'), 'Start both on it with --network shopnet (name the database db2 and publish web2 on 8081).');",
              "T.eq(T.container('web2').networks, ['shopnet'], 'web2 should be on shopnet.');") },
          { text: "Now the name resolves and the app connects.",
            test: L(
              "var r = T.curl('http://localhost:8081/health');",
              "T.eq(r.body, 'db: connected', 'On a user-defined network the container name db2 resolves — point DATABASE_URL at postgres://db2:5432/shop and use the CONTAINER port 5432.');",
              "T.eq(r.status, 200, 'A healthy answer.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# shop:1.0 is built. The app reads DATABASE_URL and reports at /health.",
            "",
            "# 1) The default network: a db, and a web pointed at it on 8080:",
            "",
            "# 2) See what /health says:",
            "",
            "# 3) Create shopnet, and start db2 + web2 (8081) on it:",
            "",
            "# 4) Check /health again:",
            "",
            "") }
        ],
        hints: [
          "`docker run -d --name db -e POSTGRES_PASSWORD=example postgres:16`, then `docker run -d --name web -p 8080:3000 -e DATABASE_URL=postgres://db:5432/shop shop:1.0`, then `curl localhost:8080/health`.",
          "`docker network create shopnet` — then add `--network shopnet` to BOTH new containers.",
          "The second pair: `docker run -d --name db2 --network shopnet -e POSTGRES_PASSWORD=example postgres:16` and `docker run -d --name web2 --network shopnet -p 8081:3000 -e DATABASE_URL=postgres://db2:5432/shop shop:1.0`, then `curl localhost:8081/health`."
        ],
        solution: {
          "commands.sh": L(
            "# 1) Default network:",
            "docker run -d --name db -e POSTGRES_PASSWORD=example postgres:16",
            "docker run -d --name web -p 8080:3000 -e DATABASE_URL=postgres://db:5432/shop shop:1.0",
            "",
            "# 2) It cannot resolve the name:",
            "curl localhost:8080/health",
            "",
            "# 3) A user-defined network:",
            "docker network create shopnet",
            "docker run -d --name db2 --network shopnet -e POSTGRES_PASSWORD=example postgres:16",
            "docker run -d --name web2 --network shopnet -p 8081:3000 -e DATABASE_URL=postgres://db2:5432/shop shop:1.0",
            "",
            "# 4) Now it connects:",
            "curl localhost:8081/health",
            "")
        }
      },

      {
        id: "docker-u5-4",
        title: "\"Port is already allocated\"",
        kind: "shell", chip: "DOCKER", xp: 15, mins: 12,
        cwd: "/home/you/project",
        fs: world(),
        apps: shopApp(),
        setup: "docker build -t shop:1.0 .",
        brief: "A host port can have exactly one publisher. Try to give 8080 to a second container and Docker refuses before the container starts: *Bind for 0.0.0.0:8080 failed: port is already allocated*.\n\nThis is the same rule as any server on your machine — two processes can't listen on one port — and it's why running two copies of an app locally means mapping them to different host ports. The **container** ports don't clash at all: every container has its own network namespace, so a dozen containers can each listen on 3000 internally.\n\nThere's also `-P` (capital P): publish every `EXPOSE`d port on a free, high-numbered host port chosen for you. Handy when you don't care which port you get.\n\nHit the conflict on purpose, then fix it.",
        steps: [
          { text: "Publish `web` on 8080, then try to publish `web2` on 8080 as well.",
            test: L(
              "T.expect(T.container('web'), 'Start the first: docker run -d --name web -p 8080:3000 shop:1.0');",
              "T.expect(T.said('port is already allocated'), 'Now try the same host port again (docker run -d --name web2 -p 8080:3000 shop:1.0) — Docker should refuse.');") },
          { text: "The refusal means no second publisher: host 8080 still belongs to `web` alone.",
            test: L(
              "var on8080 = T.containers({ all: true }).filter(function (n) {",
              "  return (T.container(n).ports || []).some(function (p) { return p.host === 8080; });",
              "});",
              "T.eq(on8080, ['web'], 'Exactly one container may publish a given host port. The refused run created nothing, so web is still the only container holding 8080.');") },
          { text: "Give it a different host port — 8081 — and check it answers.",
            test: L(
              "T.expect(T.container('web2') && T.container('web2').status === 'running', 'Run it again with -p 8081:3000 and the name web2.');",
              "T.eq(T.curl('http://localhost:8081').status, 200, 'Host 8081 should now reach the second container.');",
              "T.eq(T.curl('http://localhost:8080').status, 200, 'And the first one still answers on 8080 — the CONTAINER port is 3000 in both.');") },
          { text: "Let Docker pick for you: run `auto` with `-P` and see which host port it chose.",
            test: L(
              "T.expect(T.container('auto'), 'Run: docker run -d --name auto -P shop:1.0');",
              "var p = T.container('auto').ports;",
              "T.eq(p.length, 1, '-P publishes every EXPOSEd port — this image exposes one.');",
              "T.expect(p[0].host >= 32768, 'It should pick a free high-numbered host port (32768 or above), mapped to container port 3000.');",
              "T.eq(p[0].container, 3000, 'And the container side is still 3000.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# shop:1.0 is built and EXPOSEs 3000.",
            "",
            "# 1) Publish web on 8080, then try web2 on 8080 too:",
            "",
            "# 2) Give web2 port 8081 instead:",
            "",
            "# 3) Let Docker choose a port for a container called auto:",
            "",
            "") }
        ],
        hints: [
          "`docker run -d --name web -p 8080:3000 shop:1.0`, then the same line with `--name web2` — the error is expected.",
          "Then run web2 properly: `docker run -d --name web2 -p 8081:3000 shop:1.0` and curl both ports.",
          "`docker run -d --name auto -P shop:1.0` — capital P, no port numbers."
        ],
        solution: {
          "commands.sh": L(
            "# 1) The conflict:",
            "docker run -d --name web -p 8080:3000 shop:1.0",
            "docker run -d --name web2 -p 8080:3000 shop:1.0",
            "",
            "# 2) A free host port instead:",
            "docker run -d --name web2 -p 8081:3000 shop:1.0",
            "curl localhost:8081",
            "curl localhost:8080",
            "",
            "# 3) Let Docker choose:",
            "docker run -d --name auto -P shop:1.0",
            "")
        }
      },

      {
        id: "docker-quiz-5",
        title: "Unit 5 quiz: Networking",
        kind: "quiz", xp: 10,
        brief: "Publishing ports, bind addresses, container DNS and port conflicts. 80% to pass.",
        questions: [
          { q: "In `-p 8080:3000`, which number is the host's?",
            choices: ["8080 — the host side comes first", "3000 — the container side comes first", "Neither; both refer to the container", "Whichever of the two is the larger number"],
            answer: 0, explain: "The format is HOST:CONTAINER, so traffic arriving at 8080 on your machine is forwarded to 3000 inside the container. Reversing them is a common mistake and fails quietly — you get a mapping that forwards to a port nothing is listening on." },
          { q: "Your Dockerfile has `EXPOSE 3000` and you run the image with no `-p`. Can you reach it from your browser?",
            choices: ["Yes — EXPOSE publishes the port when the container starts", "Yes, but only on the exact port number that was exposed", "No — EXPOSE is documentation; `-p` is what publishes", "No, unless the app happens to bind to 0.0.0.0 inside"],
            answer: 2, explain: "EXPOSE records the port in the image's metadata so tools (and `docker run -P`) know what the image serves on. It opens nothing by itself. Publishing is a run-time decision made with -p or -P, because the host ports available depend on the machine, not the image." },
          { q: "The port is published and the container is running, but curl gets a connection reset. What's the likeliest cause?",
            choices: ["The host's firewall is blocking the published port", "The app inside is bound to 127.0.0.1", "The image is missing an EXPOSE instruction", "The container port and host port are the same number"],
            answer: 1, explain: "Inside a container, 127.0.0.1 means that container, so an app bound there refuses the forwarded connection arriving from outside. Binding to 0.0.0.0 accepts on every interface, which is what a containerized server needs. A missing EXPOSE wouldn't matter once -p is given." },
          { q: "Two containers are on the DEFAULT bridge network. Can `web` reach `db` by the name `db`?",
            choices: ["Yes — Docker always resolves container names to addresses", "Yes, as long as the db container published a port", "No — the default bridge provides no name resolution", "No, unless both containers were started by Compose"],
            answer: 2, explain: "Automatic DNS between containers is a feature of user-defined networks. On the default bridge the name simply doesn't resolve, which surfaces as ENOTFOUND. Creating a network and putting both containers on it is the fix — and it's what Compose does for you." },
          { q: "`web` and `db` share a user-defined network, and db publishes `-p 5433:5432`. Which URL should web use?",
            choices: ["postgres://localhost:5433/shop", "postgres://db:5433/shop", "postgres://db:5432/shop", "postgres://127.0.0.1:5432/shop"],
            answer: 2, explain: "Container-to-container traffic goes directly over the shared network to the CONTAINER port, so the published host port 5433 is irrelevant here. localhost would mean web itself. The service name plus the container's own port is the rule." },
          { q: "What does `-P` (capital) do?",
            choices: ["Publishes every EXPOSEd port on a free high-numbered host port", "Publishes the container's ports using the exact same numbers on the host", "Makes the container's ports private to the host machine only", "Prompts you to choose a host port for each exposed port"],
            answer: 0, explain: "It reads the image's EXPOSE metadata and maps each port to an available ephemeral host port (32768 and up), which `docker ps` then shows. It's convenient when the exact host port doesn't matter; use lowercase -p when it does." }
        ]
      }
    ]
  });
})();
