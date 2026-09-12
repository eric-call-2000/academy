/* Engine tests for dockersim.js — pure Node, no browser.
   Usage:  node tools/test-dockersim.js

   Written BEFORE the engine, the way test-gitsim.js was: this file is the
   contract. The Docker course is graded by inspecting dockersim's state, so a
   rule this suite doesn't pin down is a rule a lesson could get wrong.

   ── THE FROZEN COMMAND SURFACE (v1) ────────────────────────────────────────
   docker build   [-t name:tag]… [-f file] [--build-arg K=V]… [--secret id=X,src=F]
                  [--target stage] [--no-cache] PATH
   docker run     [-d] [--name N] [-p [ip:]HOST:CONTAINER]… [-P] [-e K=V]… [--env-file F]
                  [-v SRC:DST]… [--network N] [--restart no|on-failure|unless-stopped|always]
                  [--init] [--rm] [-u USER] [--entrypoint X] IMAGE [ARG…]
   docker ps [-a] [-q] [--format T]      docker logs N      docker exec [-u U] N CMD…
   docker stop|start|restart|kill N…     docker rm [-f] N…  docker inspect [--format T] N
   docker images [-q]   docker image ls|rm|inspect|history   docker rmi   docker tag
   docker history IMG   docker pull REF  docker push REF
   docker volume create|ls|rm|inspect    docker network create|ls|rm|inspect|connect
   docker compose [-f F] [-p P] up [-d] [--build] | down [-v] | ps | logs [S] | exec S CMD… | build
   curl [-s] [-f] [-i] URL               (from the host, or inside a container via exec)
   Inside RUN and `docker exec`: shell.js's commands plus npm ci|install|run, apt-get
   update|install|purge, adduser/useradd, whoami, env, curl, pg_isready, and any program
   described in the lesson's `apps` table.

   ── THE `apps` TABLE (lesson.apps → fsRoot.dockerApps) ─────────────────────
   The simulator never executes learner JavaScript. A process is DESCRIBED:
     "node server.js": {
       requires: ["server.js"],            // missing in workdir → exit 1, "Cannot find module"
       env: { required: ["DATABASE_URL"] },// missing → exit 1, "Missing required env var …"
       listen: { port: "$PORT|3000", host: "$HOST|0.0.0.0" },   // $VAR|default
       logs: ["Listening on http://{host}:{port}"],
       routes: { "/": "Hello from {GREETING|the shop}", "/health": "@health" },
       connects: "$DATABASE_URL",           // postgres://host:port/db — what @health reports
       connectOnStart: true,                // dependency unreachable at start → exit 1
       sigterm: "graceful" | "ignore",      // what it does IF the signal reaches it
       exit: 0,                             // a one-shot program: logs, then exits with this
       data: "/var/lib/postgresql/data",    // where a database keeps its state
       readyAfter: 2                        // seconds before it accepts connections
     }
   `@health` answers 200 "ok" (or "db: connected"), else 503 "db: <error>".

   ── BASE IMAGES (offline table, sizes approximate) ─────────────────────────
   node:20  node:20-slim  node:20-alpine  alpine:3.20  postgres:16

   ── SIGNALS, precisely (Dockerfile reference + `docker stop` reference) ────
   docker stop sends SIGTERM, waits 10 s, then SIGKILL (exit 137).
   - shell-form CMD: /bin/sh -c is PID 1 and "does not pass signals" → 137.
   - exec-form CMD: the app IS PID 1 and gets SIGTERM. A graceful app exits 0.
     An app with no handler ignores it — PID 1 has no default signal actions → 137.
   - --init: a tiny init is PID 1 and forwards SIGTERM; an app with no handler
     then dies of it → 143.

   ── T HELPERS (added by dockersim.extendT, same object for T.before) ───────
   T.images() → ["repo:tag", …]         T.image(ref) → null | { id, tags, size, base,
     layers: [{ instr, size }], user, env, cmd, entrypoint, workdir, exposed, files }
   T.containers({ all }) → [names]      T.container(n) → null | { id, name, image, status,
     exitCode, health, ports: [{ ip, host, container }], networks, mounts: [{ type, source,
     target }], env, user, command, restartCount, stoppedAfter }
   T.fileIn(n, path) T.logs(n) T.builds() T.build(k = last, 1-based) → { tags, ok,
     steps: [{ instr, cached }] }  T.volumes() T.networks() T.compose() → { project,
     services: { s: { container, status, health } } }  T.curl(url, { from }) → { status,
     body, error: null|"refused"|"reset"|"resolve" } (a pure query — changes nothing)
   T.inRegistry(ref) → image id | null.   Daemon state lives on fsRoot.dockerd as plain
   JSON, and dockersim.snapshot(fsRoot) deep-copies the whole filesystem with it.
   ───────────────────────────────────────────────────────────────────────── */
const path = require("path");
const fsNode = require("fs");
const SH = require(path.join(__dirname, "..", "shell.js"));
const ENGINE = path.join(__dirname, "..", "dockersim.js");
const D = fsNode.existsSync(ENGINE) ? require(ENGINE) : null;
if (D) D.strict = true;   // an engine exception must fail the test, not print

const HOME = "/home/you/project";
const shellTests = [], dockerTests = [];
function shellTest(name, fn) { shellTests.push({ name, fn }); }
function test(name, fn) { dockerTests.push({ name, fn }); }
function eq(a, b, msg) {
  if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error((msg || "not equal") + ": got " + JSON.stringify(a) + ", want " + JSON.stringify(b));
}
function ok(c, msg) { if (!c) throw new Error(msg || "expected true"); }
function step(build, prefix) {
  const s = (build && build.steps || []).find(x => x.instr.indexOf(prefix) === 0);
  if (!s) throw new Error("no build step starting " + JSON.stringify(prefix));
  return s;
}

/* ---------------- fixtures ---------------- */
const PKG = JSON.stringify({
  name: "shop", version: "1.0.0",
  scripts: { build: "cp -r src dist", start: "node server.js" },
  dependencies: { express: "4.19.2" },
  devDependencies: { jest: "29.7.0" }
}, null, 2) + "\n";
function files(extra) {
  const f = {};
  f[HOME + "/server.js"] = "const http = require('http');\nhttp.createServer(app).listen(process.env.PORT || 3000);\n";
  f[HOME + "/worker.js"] = "console.log('working');\n";
  f[HOME + "/package.json"] = PKG;
  f[HOME + "/package-lock.json"] = "{ \"lockfileVersion\": 3 }\n";
  f[HOME + "/src/app.js"] = "console.log('app');\n";
  f[HOME + "/.env"] = "API_KEY=sk_test_local\n";
  f[HOME + "/node_modules/left-pad/index.js"] = "module.exports = pad;\n";
  f[HOME + "/.dockerignore"] = "node_modules\n.env\n";
  return Object.assign(f, extra || {});
}
const DF = (lines) => lines.join("\n") + "\n";
const DF_GOOD = DF([
  "FROM node:20-alpine", "WORKDIR /app", "COPY package*.json ./", "RUN npm ci --omit=dev",
  "COPY . .", "USER node", "EXPOSE 3000", 'CMD ["node", "server.js"]'
]);
const DF_BADORDER = DF([
  "FROM node:20-alpine", "WORKDIR /app", "COPY . .", "RUN npm ci --omit=dev",
  "USER node", "EXPOSE 3000", 'CMD ["node", "server.js"]'
]);
const DF_SHELLFORM = DF_GOOD.replace('CMD ["node", "server.js"]', "CMD node server.js");

const SERVER = {
  requires: ["server.js"],
  listen: { port: "$PORT|3000", host: "$HOST|0.0.0.0" },
  logs: ["Listening on http://{host}:{port}"],
  routes: { "/": "Hello from {GREETING|the shop}", "/health": "@health" },
  connects: "$DATABASE_URL",
  sigterm: "graceful"
};
const APPS = {
  "node server.js": SERVER,
  "node worker.js": { requires: ["worker.js"], logs: ["working"], exit: 0, sigterm: "graceful" },
  "postgres": {
    env: { required: ["POSTGRES_PASSWORD"] },
    listen: { port: "5432", host: "0.0.0.0" },
    logs: ["database system is ready to accept connections"],
    data: "/var/lib/postgresql/data", readyAfter: 2, sigterm: "graceful"
  }
};
const withApp = (over) => Object.assign({}, APPS, { "node server.js": Object.assign({}, SERVER, over) });

/* Build the lesson world: files, the apps table, a hidden setup (which must
   succeed), the T.before snapshot, the learner's extra tabs, then the script. */
function sandbox(o) {
  o = o || {};
  const fs = SH.createFS(o.fs || files());
  fs.dockerApps = o.apps || APPS;
  const cwd = o.cwd || HOME;
  if (o.setup) {
    const pre = SH.run(fs, o.setup, { cwd });
    const broke = pre.transcript.find(t => t.code !== 0);
    if (broke) throw new Error("setup failed at `" + broke.cmd + "`: " + (broke.err || "").trim());
  }
  const before = D.snapshot(fs);
  if (o.tabs) SH.writeTabs(fs, cwd, "/home/you", o.tabs, "commands.sh");
  const res = SH.run(fs, o.script || "", { cwd });
  const out = res.transcript.map(t => t.out).join(""), err = res.transcript.map(t => t.err).join("");
  const T = {
    fs, out: () => out, err: () => err, transcript: res.transcript,
    code: (i) => res.transcript[i == null ? res.transcript.length - 1 : i].code,
    ran: (re) => res.transcript.some(t => re.test(t.cmd)),
    said: (s) => (out + err).indexOf(s) !== -1,
    outOf: (re) => { const t = res.transcript.filter(x => re.test(x.cmd)).pop(); return t ? t.out + t.err : null; }
  };
  D.extendT(T, fs, before);
  return T;
}
const BUILT = "docker build -t shop:1.0 .";     // setup line: the good image, prebuilt
const withDf = (df, extra) => files(Object.assign({ [HOME + "/Dockerfile"]: df }, extra || {}));

/* ================= shell.js prerequisites =================
   Docker lessons hit these on day one, and they're real shell behaviour the
   Git course already works around. They test shell.js, so they run now. */
function shellRun(script, fsSpec) {
  const fs = SH.createFS(fsSpec || { [HOME + "/src/"]: null });
  const r = SH.run(fs, script, { cwd: HOME, home: "/home/you" });
  return { fs, r, out: r.transcript.map(t => t.out).join("") };
}
shellTest("a quoted > or | is text, not a redirect or a pipe", () => {
  const s = shellRun('echo "a > b"\necho "x | y"');
  eq(s.out, "a > b\nx | y\n");
  eq(SH.nodeAt(s.fs, HOME + '/b"'), null, "no stray file named b\" was created");
});
shellTest("&& runs the next command only on success; ; always runs it", () => {
  const s = shellRun("echo a && echo b\nfalse && echo never\nfalse ; echo after\nmkdir deep && cd deep && pwd");
  eq(s.out, "a\nb\nafter\n" + HOME + "/deep\n");
});
shellTest("$PWD and $HOME expand, including inside double quotes", () => {
  const s = shellRun('echo $PWD\necho "$PWD/src"\necho $HOME');
  eq(s.out, HOME + "\n" + HOME + "/src\n/home/you\n");
});

/* ================= Unit 1 — images and containers ================= */
test("run -d starts a container; stop exits it cleanly; only ps -a still lists it", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: "docker run -d --name web shop:1.0\ndocker ps\ndocker stop web\ndocker ps\ndocker ps -a" });
  eq(T.container("web").status, "exited"); eq(T.container("web").exitCode, 0);
  ok(T.outOf(/^docker ps$/) !== null);
  eq(T.containers(), [], "a stopped container is not in plain docker ps");
  eq(T.containers({ all: true }), ["web"]);
  ok(T.said("Exited (0)"), "docker ps -a shows Exited (0)");
});
test("one image, many containers", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: "docker run -d --name a shop:1.0\ndocker run -d --name b shop:1.0" });
  eq(T.container("a").image, T.image("shop:1.0").id); eq(T.container("b").image, T.image("shop:1.0").id);
  eq(T.containers(), ["a", "b"]);
});
test("the writable layer dies with docker rm", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT,
    script: "docker run -d --name web shop:1.0\ndocker exec web touch /app/note.txt\ndocker exec web ls /app\ndocker rm -f web\ndocker run -d --name web shop:1.0" });
  ok(T.outOf(/^docker exec web ls/).indexOf("note.txt") !== -1, "the file existed in the first container");
  eq(T.fileIn("web", "/app/note.txt"), null, "a new container starts from the image, not from the old one");
});
test("exec runs inside the container, as its user; logs show the app's output", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: "docker run -d --name web shop:1.0\ndocker exec web whoami\ndocker logs web" });
  eq(T.outOf(/^docker exec web whoami/), "node\n");
  ok(T.outOf(/^docker logs/).indexOf("Listening on http://0.0.0.0:3000") !== -1);
});
test("a container's filesystem is isolated from the host", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: "docker run -d --name web shop:1.0\ndocker exec web touch /tmp/inside" });
  eq(SH.nodeAt(T.fs, "/tmp/inside"), null, "a file made in the container never appears on the host");
  eq(T.fileIn("web", HOME + "/server.js"), null, "host files are invisible unless mounted");
});
test("an image that doesn't exist: nothing is created", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), script: "docker run -d shoop:1.0" });
  ok(T.said("Unable to find image 'shoop:1.0' locally")); ok(T.said("pull access denied"));
  eq(T.containers({ all: true }), []); ok(T.code() !== 0);
});
test("container names are unique", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: "docker run -d --name web shop:1.0\ndocker run -d --name web shop:1.0" });
  ok(T.said('The container name "/web" is already in use')); eq(T.containers({ all: true }), ["web"]);
});
test("rm refuses a running container; rm -f removes it", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: "docker run -d --name web shop:1.0\ndocker rm web\ndocker ps\ndocker rm -f web" });
  ok(T.said("container is running")); ok(T.outOf(/^docker ps$/).indexOf("web") !== -1, "still running after plain rm");
  eq(T.container("web"), null);
});
test("--format makes docker ps phone-sized", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: "docker run -d --name web shop:1.0\ndocker ps --format '{{.Names}} {{.Status}}'" });
  ok(/^web Up /.test(T.outOf(/^docker ps --format/)), "one line: name, then status");
});
test("a missing entry file: node exits 1 with its real error", () => {
  const T = sandbox({ fs: withDf(DF(["FROM node:20-alpine", "WORKDIR /app", 'CMD ["node", "server.js"]'])), setup: BUILT, script: "docker run -d --name web shop:1.0" });
  eq(T.container("web").status, "exited"); eq(T.container("web").exitCode, 1);
  ok(T.logs("web").indexOf("Cannot find module '/app/server.js'") !== -1);
});

/* ================= Unit 2 — your first Dockerfile ================= */
test("a Dockerfile tab builds a tagged image with the right config", () => {
  const T = sandbox({ fs: files(), tabs: { Dockerfile: DF_GOOD }, script: "docker build -t shop:1.0 ." });
  const img = T.image("shop:1.0");
  ok(img, "the image exists");
  eq(img.cmd, ["node", "server.js"]); eq(img.workdir, "/app"); eq(img.exposed, ["3000/tcp"]); eq(img.user, "node");
  ok(img.files.indexOf("/app/server.js") !== -1);
});
test(".dockerignore keeps the host's node_modules and .env out; npm ci's node_modules stays", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), script: "docker build -t shop:1.0 ." });
  const f = T.image("shop:1.0").files;
  ok(f.indexOf("/app/.env") === -1, ".env must not be copied");
  ok(f.indexOf("/app/node_modules/left-pad/index.js") === -1, "the host's node_modules must not be copied");
  ok(f.indexOf("/app/node_modules/express/package.json") !== -1, "npm ci's own install is fine");
  ok(f.indexOf("/app/node_modules/jest/package.json") === -1, "--omit=dev leaves devDependencies out");
});
test(".dockerignore patterns are anchored to the context root (unlike .gitignore)", () => {
  const extra = { [HOME + "/packages/api/node_modules/x.js"]: "x\n", [HOME + "/Dockerfile"]: DF(["FROM alpine:3.20", "COPY . /ctx"]) };
  const A = sandbox({ fs: files(Object.assign({}, extra, { [HOME + "/.dockerignore"]: "node_modules\n" })), script: "docker build -t ctx:a ." });
  ok(A.image("ctx:a").files.indexOf("/ctx/packages/api/node_modules/x.js") !== -1, "`node_modules` only excludes the top-level folder");
  const B = sandbox({ fs: files(Object.assign({}, extra, { [HOME + "/.dockerignore"]: "**/node_modules\n" })), script: "docker build -t ctx:b ." });
  ok(B.image("ctx:b").files.indexOf("/ctx/packages/api/node_modules/x.js") === -1, "`**/node_modules` excludes them all");
});
test("no Dockerfile: the build fails and tags nothing", () => {
  const T = sandbox({ fs: files(), script: "docker build -t shop:1.0 ." });
  ok(T.said("failed to read dockerfile")); eq(T.image("shop:1.0"), null); ok(T.code() !== 0);
});
test("COPY of a missing (or ignored) file fails the build", () => {
  const T = sandbox({ fs: withDf(DF(["FROM node:20-alpine", "COPY config.json /app/", 'CMD ["node", "server.js"]'])), script: "docker build -t shop:1.0 ." });
  ok(T.said("not found")); eq(T.image("shop:1.0"), null);
});
test("tags: two versions are two images; latest is just the last name given", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), script: 'docker build -t shop:1.0 .\necho "// v1.1" >> server.js\ndocker build -t shop:1.1 .\ndocker build -t shop .\ndocker images' });
  ok(T.image("shop:1.0").id !== T.image("shop:1.1").id);
  eq(T.image("shop:latest").id, T.image("shop:1.1").id, "`-t shop` means shop:latest");
  const U = sandbox({ fs: withDf(DF_GOOD), setup: 'docker build -t shop:1.0 .\necho "// v1.1" >> server.js\ndocker build -t shop:latest .', script: "docker tag shop:1.0 shop:latest" });
  eq(U.image("shop:latest").id, U.image("shop:1.0").id, "latest now names 1.0 — it was never a version");
});
test("ENTRYPOINT + CMD: run arguments replace CMD, not ENTRYPOINT", () => {
  const T = sandbox({ fs: withDf(DF(["FROM node:20-alpine", "WORKDIR /app", "COPY . .", 'ENTRYPOINT ["node"]', 'CMD ["server.js"]'])), setup: "docker build -t shop:ep .", script: "docker run --name w shop:ep worker.js" });
  eq(T.container("w").command, ["node", "worker.js"]);
  ok(T.logs("w").indexOf("working") !== -1); eq(T.container("w").exitCode, 0);
});
test("signals: exec form + a graceful app stops at once with 0", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: "docker run -d --name web shop:1.0\ndocker stop web" });
  eq(T.container("web").exitCode, 0); ok(T.container("web").stoppedAfter < 10);
});
test("signals: shell form never delivers SIGTERM — 10 s, then SIGKILL (137)", () => {
  const T = sandbox({ fs: withDf(DF_SHELLFORM), setup: BUILT, script: "docker run -d --name web shop:1.0\ndocker stop web" });
  eq(T.container("web").exitCode, 137); eq(T.container("web").stoppedAfter, 10);
  eq(T.image("shop:1.0").cmd, ["/bin/sh", "-c", "node server.js"]);
});
test("signals: exec form but no handler — PID 1 ignores SIGTERM (137); --init fixes delivery (143)", () => {
  const apps = withApp({ sigterm: "ignore" });
  const T = sandbox({ fs: withDf(DF_GOOD), apps, setup: BUILT, script: "docker run -d --name a shop:1.0\ndocker stop a\ndocker run -d --init --name b shop:1.0\ndocker stop b" });
  eq(T.container("a").exitCode, 137); eq(T.container("b").exitCode, 143); ok(T.container("b").stoppedAfter < 10);
});

/* ================= Unit 3 — layers and the build cache ================= */
test("history: one row per instruction; metadata instructions add 0 bytes", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: "docker history shop:1.0" });
  ok(T.said("RUN npm ci --omit=dev")); ok(T.said("0B"));
  const L = T.image("shop:1.0").layers;
  eq(L.map(l => l.instr.split(" ")[0]), ["WORKDIR", "COPY", "RUN", "COPY", "USER", "EXPOSE", "CMD"]);
  L.filter(l => /^(USER|EXPOSE|CMD)/.test(l.instr)).forEach(l => eq(l.size, 0, l.instr + " adds no files"));
  ok(L.find(l => /^RUN/.test(l.instr)).size > 0);
});
test("cache: copying everything first means every source edit reinstalls dependencies", () => {
  const T = sandbox({ fs: withDf(DF_BADORDER), script: 'docker build -t shop:1 .\necho "// edit" >> server.js\ndocker build -t shop:2 .' });
  eq(step(T.build(2), "RUN npm ci").cached, false);
});
test("cache: package.json first — a source edit keeps npm ci cached", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), script: 'docker build -t shop:1 .\necho "// edit" >> server.js\ndocker build -t shop:2 .' });
  eq(step(T.build(2), "RUN npm ci").cached, true); eq(step(T.build(2), "COPY . .").cached, false);
});
test("cache: a changed instruction invalidates itself and everything after it", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), script: "docker build -t shop:1 .\necho x > marker\ndocker build -t shop:2 ." });
  const U = sandbox({ fs: withDf(DF_GOOD), setup: "docker build -t shop:1 .", tabs: { Dockerfile: DF_GOOD.replace("npm ci --omit=dev", "npm ci") }, script: "docker build -t shop:2 ." });
  const b = U.build(2);
  eq(step(b, "COPY package").cached, true, "steps BEFORE the change stay cached");
  ["RUN npm ci", "COPY . .", "USER", "EXPOSE", "CMD"].forEach(p => eq(step(b, p).cached, false, p + " comes after the change"));
  ok(T.build(2), "sanity");
});
test("cache: an unchanged rebuild is all cached and gives the same image", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), script: "docker build -t shop:1 .\ndocker build -t shop:2 ." });
  ok(T.build(2).steps.every(s => s.cached)); eq(T.image("shop:1").id, T.image("shop:2").id);
});
test("deleting in a later layer doesn't shrink the image; cleaning in the same RUN does", () => {
  const base = ["FROM node:20-alpine", "WORKDIR /app", "COPY package*.json ./"];
  const T = sandbox({
    fs: withDf(DF(base.concat(["RUN npm ci"]))),
    tabs: {
      "Dockerfile.rm": DF(base.concat(["RUN npm ci", "RUN rm -rf /root/.npm"])),
      "Dockerfile.same": DF(base.concat(["RUN npm ci && rm -rf /root/.npm"]))
    },
    script: "docker build -t keep .\ndocker build -f Dockerfile.rm -t later .\ndocker build -f Dockerfile.same -t same ."
  });
  eq(T.image("later").size, T.image("keep").size, "a removed file still ships in the layer that added it");
  ok(T.image("same").size < T.image("keep").size, "cleaning up in the same RUN never writes the cache into a layer");
  ok(T.image("later").files.indexOf("/root/.npm/_cacache/index") === -1, "…even though the file is gone from the final view");
});

/* ================= Unit 4 — smaller and safer images ================= */
const DF_MULTI = DF([
  "FROM node:20 AS build", "WORKDIR /app", "COPY package*.json ./", "RUN npm ci", "COPY src ./src", "RUN npm run build",
  "FROM node:20-alpine", "WORKDIR /app", "COPY package*.json ./", "RUN npm ci --omit=dev",
  "COPY --from=build /app/dist ./dist", 'CMD ["node", "dist/app.js"]'
]);
const DF_FAT = DF(["FROM node:20", "WORKDIR /app", "COPY . .", "RUN npm ci", "RUN npm run build", 'CMD ["node", "dist/app.js"]']);
test("multi-stage: ship the build output, not the build", () => {
  const T = sandbox({ fs: withDf(DF_MULTI), tabs: { "Dockerfile.fat": DF_FAT }, script: "docker build -t shop:2.0 .\ndocker build -f Dockerfile.fat -t shop:fat ." });
  const f = T.image("shop:2.0").files;
  ok(f.indexOf("/app/dist/app.js") !== -1, "the built output is there");
  ok(f.indexOf("/app/src/app.js") === -1, "the source is not");
  ok(f.indexOf("/app/node_modules/jest/package.json") === -1, "neither are dev dependencies");
  ok(T.image("shop:2.0").size < T.image("shop:fat").size / 2);
  eq(T.image("shop:2.0").base, "node:20-alpine", "the final stage's FROM is the image's base");
});
test("base images: full > slim > alpine", () => {
  const mk = (b) => DF(["FROM " + b, "WORKDIR /app", "COPY server.js .", 'CMD ["node", "server.js"]']);
  const T = sandbox({ fs: withDf(mk("node:20")), tabs: { "Dockerfile.slim": mk("node:20-slim"), "Dockerfile.alpine": mk("node:20-alpine") },
    script: "docker build -t a:full .\ndocker build -f Dockerfile.slim -t a:slim .\ndocker build -f Dockerfile.alpine -t a:alpine ." });
  ok(T.image("a:full").size > T.image("a:slim").size); ok(T.image("a:slim").size > T.image("a:alpine").size);
});
test("USER: the container runs as that user; a user that doesn't exist fails to start", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: "docker run -d --name web shop:1.0\ndocker exec web whoami" });
  eq(T.container("web").user, "node");
  const bad = DF(["FROM alpine:3.20", "USER shopper", 'CMD ["sleep", "infinity"]']);
  const U = sandbox({ fs: withDf(bad), setup: "docker build -t u:1 .", script: "docker run -d --name u u:1" });
  ok(U.said("unable to find user shopper"));
  const good = DF(["FROM alpine:3.20", "RUN adduser -D shopper", "USER shopper", 'CMD ["sleep", "infinity"]']);
  const V = sandbox({ fs: withDf(good), setup: "docker build -t u:2 .", script: "docker run -d --name u u:2\ndocker exec u whoami" });
  eq(V.outOf(/^docker exec u whoami/), "shopper\n");
});
test("ARG and ENV secrets are readable by anyone holding the image", () => {
  const argDf = DF(["FROM alpine:3.20", "ARG API_KEY", "RUN echo configured", 'CMD ["sleep", "infinity"]']);
  const T = sandbox({ fs: withDf(argDf), script: "docker build --build-arg API_KEY=sk_test_42 -t leak:1 .\ndocker history leak:1" });
  ok(T.outOf(/^docker history/).indexOf("sk_test_42") !== -1, "docker history shows the build arg");
  const envDf = DF(["FROM alpine:3.20", "ENV API_KEY=sk_test_43", 'CMD ["sleep", "infinity"]']);
  const U = sandbox({ fs: withDf(envDf), script: "docker build -t leak:2 ." });
  eq(U.image("leak:2").env.API_KEY, "sk_test_43");
});
test("a secret mount reaches one RUN and no layer", () => {
  const pkg = JSON.stringify({ name: "shop", dependencies: { express: "4.19.2", "@shop/private-ui": "1.0.0" } }, null, 2) + "\n";
  const base = { [HOME + "/package.json"]: pkg, [HOME + "/.npmrc"]: "//npm.shop.dev/:_authToken=tok_private_77\n" };
  const T = sandbox({ fs: withDf(DF(["FROM node:20-alpine", "WORKDIR /app", "COPY package*.json ./", "RUN npm ci"]), base), script: "docker build -t p:1 ." });
  ok(T.said("E401"), "a private package without credentials fails"); eq(T.image("p:1"), null);
  const good = DF(["FROM node:20-alpine", "WORKDIR /app", "COPY package*.json ./", "RUN --mount=type=secret,id=npmrc,target=/root/.npmrc npm ci"]);
  const U = sandbox({ fs: withDf(good, base), script: "docker build --secret id=npmrc,src=.npmrc -t p:2 .\ndocker history p:2" });
  ok(U.image("p:2"), "the build succeeds with the secret mounted");
  ok(U.image("p:2").files.indexOf("/app/node_modules/@shop/private-ui/package.json") !== -1);
  ok(U.image("p:2").files.indexOf("/root/.npmrc") === -1, "the secret file is not in the image");
  ok(U.outOf(/^docker history/).indexOf("tok_private_77") === -1, "nor in its history");
});

/* ================= Unit 5 — ports and networking ================= */
const RUNWEB = (flags) => "docker run -d --name web " + (flags || "") + " shop:1.0";
test("EXPOSE publishes nothing", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: RUNWEB() + "\ncurl localhost:3000" });
  eq(T.curl("http://localhost:3000").error, "refused"); ok(T.said("Failed to connect to localhost port 3000"));
});
test("-p HOST:CONTAINER publishes it", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: RUNWEB("-p 8080:3000") + "\ncurl localhost:8080" });
  const r = T.curl("http://localhost:8080"); eq(r.status, 200); eq(r.body, "Hello from the shop");
  ok(T.said("Hello from the shop"));
});
test("-p reversed: the host side is first", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: RUNWEB("-p 3000:8080") });
  eq(T.curl("http://localhost:8080").error, "refused", "nothing is published on host 8080");
  eq(T.curl("http://localhost:3000").error, "reset", "host 3000 forwards to container 8080, where nothing listens");
});
test("an app bound to 127.0.0.1 inside the container is unreachable through the published port", () => {
  const apps = withApp({ listen: { port: "$PORT|3000", host: "$HOST|127.0.0.1" } });
  const T = sandbox({ fs: withDf(DF_GOOD), apps, setup: BUILT, script: RUNWEB("-p 8080:3000") + "\ncurl localhost:8080" });
  eq(T.curl("http://localhost:8080").error, "reset"); ok(T.said("Connection reset by peer"));
  const U = sandbox({ fs: withDf(DF_GOOD), apps, setup: BUILT, script: RUNWEB("-p 8080:3000 -e HOST=0.0.0.0") });
  eq(U.curl("http://localhost:8080").status, 200);
});
test("-p 127.0.0.1:8080:3000 still answers the host itself", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: RUNWEB("-p 127.0.0.1:8080:3000") });
  eq(T.curl("http://localhost:8080").status, 200); eq(T.container("web").ports, [{ ip: "127.0.0.1", host: 8080, container: 3000 }]);
});
test("a host port can only be published once", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: RUNWEB("-p 8080:3000") + "\ndocker run -d --name web2 -p 8080:3000 shop:1.0\ndocker rm web2\ndocker run -d --name web2 -p 8081:3000 shop:1.0" });
  ok(T.said("port is already allocated"));
  eq(T.container("web2").status, "running"); eq(T.curl("http://localhost:8081").status, 200);
});
test("-P publishes exposed ports to ephemeral host ports", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: RUNWEB("-P") });
  eq(T.container("web").ports, [{ ip: "0.0.0.0", host: 32768, container: 3000 }]);
});
const DB = "docker run -d --name db -e POSTGRES_PASSWORD=example postgres:16";
test("the default bridge has no name resolution; a user-defined network does", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: DB + "\n" + RUNWEB("-p 8080:3000 -e DATABASE_URL=postgres://db:5432/shop") + "\ndocker exec web curl http://db:5432" });
  eq(T.curl("http://localhost:8080/health").status, 503);
  eq(T.curl("http://localhost:8080/health").body, "db: getaddrinfo ENOTFOUND db");
  ok(T.said("Could not resolve host: db"));
  const U = sandbox({ fs: withDf(DF_GOOD), setup: BUILT,
    script: "docker network create shopnet\n" + DB.replace("--name db", "--name db --network shopnet") + "\n" + RUNWEB("--network shopnet -p 8080:3000 -e DATABASE_URL=postgres://db:5432/shop") });
  eq(U.curl("http://localhost:8080/health").body, "db: connected"); ok(U.networks().indexOf("shopnet") !== -1);
  eq(U.container("web").networks, ["shopnet"]);
});
test("inside a container, localhost is the container itself", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: RUNWEB() + "\ndocker exec web curl -s http://localhost:3000/\ndocker exec web curl -s http://localhost:4000/" });
  eq(T.curl("http://localhost:3000/", { from: "web" }).body, "Hello from the shop");
  ok(T.outOf(/localhost:3000/).indexOf("Hello from the shop") !== -1);
  ok(T.outOf(/localhost:4000/).indexOf("Failed to connect") !== -1);
});

/* ================= Unit 6 — data and configuration ================= */
test("a named volume survives docker rm; the writable layer doesn't", () => {
  const T = sandbox({ fs: withDf(DF_GOOD),
    script: "docker run -d --name db -e POSTGRES_PASSWORD=x -v pgdata:/var/lib/postgresql/data postgres:16\ndocker exec db touch /var/lib/postgresql/data/orders\ndocker rm -f db\ndocker run -d --name db -e POSTGRES_PASSWORD=x -v pgdata:/var/lib/postgresql/data postgres:16" });
  eq(T.fileIn("db", "/var/lib/postgresql/data/orders"), ""); ok(T.volumes().indexOf("pgdata") !== -1);
  const U = sandbox({ fs: withDf(DF_GOOD), script: "docker run -d --name db -e POSTGRES_PASSWORD=x postgres:16\ndocker exec db touch /var/lib/postgresql/data/orders\ndocker rm -f db\ndocker run -d --name db -e POSTGRES_PASSWORD=x postgres:16" });
  eq(U.fileIn("db", "/var/lib/postgresql/data/orders"), null);
});
test("a bind mount shows host edits live, with no rebuild", () => {
  const T = sandbox({ fs: withDf(DF_GOOD, { [HOME + "/src/banner.txt"]: "Summer sale\n" }), setup: BUILT,
    script: 'docker run -d --name web -v "$PWD/src:/app/src" shop:1.0\necho "Autumn sale" > src/banner.txt\ndocker exec web cat /app/src/banner.txt' });
  eq(T.outOf(/^docker exec web cat/), "Autumn sale\n");
  eq(T.container("web").mounts, [{ type: "bind", source: HOME + "/src", target: "/app/src" }]);
});
test("-e and --env-file configure one image differently at run time", () => {
  const T = sandbox({ fs: withDf(DF_GOOD, { [HOME + "/winter.env"]: "GREETING=Winter\n" }), setup: BUILT,
    script: "docker run -d --name a -p 8081:3000 -e GREETING=Autumn shop:1.0\ndocker run -d --name b -p 8082:3000 -e GREETING=Spring shop:1.0\ndocker run -d --name c -p 8083:3000 --env-file winter.env shop:1.0" });
  eq(T.curl("http://localhost:8081").body, "Hello from Autumn"); eq(T.curl("http://localhost:8082").body, "Hello from Spring");
  eq(T.curl("http://localhost:8083").body, "Hello from Winter"); eq(T.container("c").env.GREETING, "Winter");
});
test("a missing required variable: exit 1, and --restart on-failure keeps retrying", () => {
  const apps = withApp({ env: { required: ["DATABASE_URL"] } });
  const T = sandbox({ fs: withDf(DF_GOOD), apps, setup: BUILT, script: RUNWEB() + "\ndocker run -d --name r --restart on-failure shop:1.0" });
  eq(T.container("web").exitCode, 1); ok(T.logs("web").indexOf("Missing required env var DATABASE_URL") !== -1);
  eq(T.container("r").status, "restarting"); ok(T.container("r").restartCount >= 1);
});
test("HEALTHCHECK reports healthy or unhealthy from the app's own answer", () => {
  const df = DF_GOOD.replace('CMD ["node", "server.js"]', 'HEALTHCHECK CMD curl -f http://localhost:3000/health\nCMD ["node", "server.js"]');
  const T = sandbox({ fs: withDf(df), setup: BUILT, script: RUNWEB() + "\ndocker ps" });
  eq(T.container("web").health, "healthy"); ok(T.said("(healthy)"));
  const U = sandbox({ fs: withDf(df), setup: BUILT, script: RUNWEB("-e DATABASE_URL=postgres://nowhere:5432/shop") });
  eq(U.container("web").health, "unhealthy");
});

/* ================= Unit 7 — Compose and registries ================= */
const COMPOSE = (dbUrl, extra) => [
  "services:", "  web:", "    build: .", "    ports:", '      - "8080:3000"', "    environment:",
  "      DATABASE_URL: " + dbUrl, "  db:", "    image: postgres:16", "    environment:", "      POSTGRES_PASSWORD: example"
].concat(extra || []).join("\n") + "\n";
test("compose up: two services, a default network, containers named project-service-1", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), tabs: { "compose.yaml": COMPOSE("postgres://db:5432/shop") }, script: "docker compose up -d\ndocker compose ps" });
  const c = T.compose();
  eq(c.project, "project"); eq(c.services.web.status, "running"); eq(c.services.db.status, "running");
  eq(c.services.web.container, "project-web-1"); ok(T.networks().indexOf("project_default") !== -1);
  eq(T.curl("http://localhost:8080/health").body, "db: connected");
});
test("compose: localhost:5432 from web is web itself", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), tabs: { "compose.yaml": COMPOSE("postgres://localhost:5432/shop") }, script: "docker compose up -d" });
  eq(T.curl("http://localhost:8080/health").body, "db: connect ECONNREFUSED 127.0.0.1:5432");
});
test("compose: services talk on the CONTAINER port, not the published one", () => {
  const withPorts = (url) => COMPOSE(url).replace("      POSTGRES_PASSWORD: example\n", '      POSTGRES_PASSWORD: example\n    ports:\n      - "5433:5432"\n');
  const T = sandbox({ fs: withDf(DF_GOOD), tabs: { "compose.yaml": withPorts("postgres://db:5433/shop") }, script: "docker compose up -d" });
  ok(T.curl("http://localhost:8080/health").body.indexOf("ECONNREFUSED") !== -1, "db:5433 is the host port — nothing inside the network listens there");
  const U = sandbox({ fs: withDf(DF_GOOD), tabs: { "compose.yaml": withPorts("postgres://db:5432/shop") }, script: "docker compose up -d" });
  eq(U.curl("http://localhost:8080/health").body, "db: connected");
});
test("depends_on: start order is not readiness; condition: service_healthy is", () => {
  const apps = withApp({ connectOnStart: true });
  const T = sandbox({ fs: withDf(DF_GOOD), apps, tabs: { "compose.yaml": COMPOSE("postgres://db:5432/shop").replace("    build: .\n", "    build: .\n    depends_on:\n      - db\n") }, script: "docker compose up -d" });
  eq(T.compose().services.web.status, "exited", "db was started, not ready");
  ok(T.logs("project-web-1").indexOf("ECONNREFUSED") !== -1);
  const healthy = COMPOSE("postgres://db:5432/shop", ["    healthcheck:", '      test: ["CMD", "pg_isready"]'])
    .replace("    build: .\n", "    build: .\n    depends_on:\n      db:\n        condition: service_healthy\n");
  const U = sandbox({ fs: withDf(DF_GOOD), apps, tabs: { "compose.yaml": healthy }, script: "docker compose up -d" });
  eq(U.compose().services.web.status, "running"); eq(U.compose().services.db.health, "healthy");
});
test("compose down keeps named volumes; down -v deletes them", () => {
  const withVol = COMPOSE("postgres://db:5432/shop", ["    volumes:", "      - pgdata:/var/lib/postgresql/data", "volumes:", "  pgdata:"]);
  const touch = "docker compose up -d\ndocker compose exec db touch /var/lib/postgresql/data/orders\n";
  const T = sandbox({ fs: withDf(DF_GOOD), tabs: { "compose.yaml": withVol }, script: touch + "docker compose down\ndocker compose up -d" });
  eq(T.fileIn("project-db-1", "/var/lib/postgresql/data/orders"), "");
  const U = sandbox({ fs: withDf(DF_GOOD), tabs: { "compose.yaml": withVol }, script: touch + "docker compose down -v\ndocker compose up -d" });
  eq(U.fileIn("project-db-1", "/var/lib/postgresql/data/orders"), null);
});
test("compose logs; a YAML error starts nothing", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), tabs: { "compose.yaml": COMPOSE("postgres://db:5432/shop") }, script: "docker compose up -d\ndocker compose logs web" });
  ok(T.outOf(/^docker compose logs/).indexOf("Listening on http://0.0.0.0:3000") !== -1);
  const U = sandbox({ fs: withDf(DF_GOOD), tabs: { "compose.yaml": "services:\n  web:\n   build: .\n    ports: oops\n" }, script: "docker compose up -d" });
  ok(U.said("yaml:")); eq(U.containers({ all: true }), []);
});
test("registry: tag, push, remove, pull back the same image; an unknown ref is not found", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT,
    script: "docker tag shop:1.0 registry.local/shop:1.0\ndocker push registry.local/shop:1.0\ndocker rmi registry.local/shop:1.0 shop:1.0\ndocker pull registry.local/shop:1.0\ndocker pull registry.local/shop:9.9" });
  eq(T.inRegistry("registry.local/shop:1.0"), T.before.image("shop:1.0").id);
  eq(T.image("registry.local/shop:1.0").id, T.before.image("shop:1.0").id); eq(T.image("shop:1.0"), null);
  ok(T.said("not found"));
});

/* ================= plumbing ================= */
test("T.before is the state after setup", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: "docker rmi shop:1.0" });
  eq(T.image("shop:1.0"), null); ok(T.before.image("shop:1.0"));
});
test("builds are deterministic: the same inputs give the same image id", () => {
  const a = sandbox({ fs: withDf(DF_GOOD), script: BUILT }), b = sandbox({ fs: withDf(DF_GOOD), script: BUILT });
  eq(a.image("shop:1.0").id, b.image("shop:1.0").id); ok(/^sha256:[0-9a-f]{64}$/.test(a.image("shop:1.0").id));
});
test("daemon state is plain JSON", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: "docker run -d --name web shop:1.0" });
  eq(JSON.parse(JSON.stringify(T.fs.dockerd)), T.fs.dockerd);
});
test("inspect --format reads config fields", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), setup: BUILT, script: "docker image inspect --format '{{.Config.User}}' shop:1.0" });
  eq(T.outOf(/^docker image inspect/), "node\n");
});
test("unknown commands and flags error like docker", () => {
  const T = sandbox({ fs: withDf(DF_GOOD), script: "docker nope\ndocker run --bogus alpine:3.20" });
  ok(T.said("docker: 'nope' is not a docker command.")); ok(T.said("unknown flag: --bogus"));
});

/* ---------------- run ---------------- */
function runAll(list) {
  const failed = [];
  list.forEach(t => { try { t.fn(); } catch (e) { failed.push(t.name + " — " + (e && e.message)); } });
  return failed;
}
const shellFailed = runAll(shellTests);
console.log(`shell prerequisites: ${shellTests.length - shellFailed.length}/${shellTests.length} passing`);
shellFailed.forEach(f => console.log("  ✗ " + f));
if (!D) {
  console.log(`dockersim: dockersim.js not written yet — ${dockerTests.length} tests waiting for it`);
  process.exit(1);
}
const dockerFailed = runAll(dockerTests);
console.log(`dockersim: ${dockerTests.length - dockerFailed.length} passed, ${dockerFailed.length} failed`);
dockerFailed.forEach(f => console.log("  ✗ " + f));
process.exit(shellFailed.length || dockerFailed.length ? 1 : 0);
