# Docker & Containers — "It works on my machine, so ship the machine" (id: `docker`, prefix: `docker`, icon 🐳, level Intermediate, 8 units)

## Verdict
STANDALONE — and it must ship on a simulator, `dockersim.js`, hosted on `shell.js` exactly the way the Git course is hosted on `gitsim.js`. Not on a real container runtime, and not as a Dockerfile-linting course.

Why standalone: nothing in the 518 built items touches containers (a search of every unit file and every research doc finds zero Docker content), there is no host course whose vocabulary this extends, and the job board needs it by name — Junior DevOps lists `docker` as a required course. It is also the only thing left between the catalog and that position: Operations stands at 8/10, and this course closes it.

Why not a real runtime in the browser: it exists, and it is the wrong tool here. container2wasm runs real Linux containers in the browser by emulating a CPU (Bochs / v86 / TinyEMU) and booting a kernel inside WASM; its own demo images download 78–200 MB each. WebVM runs unmodified x86 Debian through CheerpX, whose engine needs a paid licence for any organisational use. Neither runs a Docker daemon — you would get a Linux shell, not `docker build`. And every one of CodeLab's invariants points the other way: offline-first PWA, no build step, phone-first, and a validator that runs every lesson's solution and starter in Chromium on every build. Forty lessons × a 150 MB kernel boot is not a validator; it is an afternoon.

Why a simulator is honest: what a junior is screened on in Docker is a set of RULES — an image is a stack of layers and a container is a thin writable layer on top; a changed instruction invalidates every layer after it; a file deleted in a later layer still ships; `EXPOSE` publishes nothing; a server bound to `127.0.0.1` inside a container is unreachable from outside it; containers find each other by service name on the container port; the writable layer dies with `docker rm` and a volume does not. Those are pure state transformations, exactly like Git's graph, and a simulator can enforce them precisely. What a simulator must FAKE is the payload — what `npm ci` actually downloads, what the server process actually computes. The design rule for this course: **fake payloads, never rules**, and say which is which in the first brief.

Why not a linting course: a Dockerfile read as text teaches half the subject. The half that bites — ports that aren't published, data that vanishes, a stack where `web` can't reach `db` — only appears when you run things. The Git course proved the shell-hosted pattern works (37 items, all validated); this is the same pattern with a second engine.

Scope carved OFF, and said so in the blurb: installing Docker Desktop (and the WSL2 backend on Windows), Kubernetes and orchestration (the `cloud` stub's territory — the current stub blurb's "container orchestration basics" is cut from here), building images in CI (the `cicd` stub's), registry authentication, and vulnerability scanning. Each gets a cheatsheet card, never a graded step.

Path position: after Deploying Your App and after Git. It leans on three things the catalog already teaches: a server listens on a port (Back-End Foundations), configuration arrives as environment variables and there are two clocks, build time and run time (Deploying U2–U3), and the terminal (the Git course's shell mechanics). Level: Intermediate, not the stub's "Advanced" — it has no advanced prerequisites once those three are done.

## Size
36 items, ~7.5h modelled → **4 credits**, all Operations.

That is one credit below the stub's `plannedCredits: 5`, which was a guess made before any content existed. Credits restate content, so the stub's number should drop to 4 until the lessons exist to justify more. Four is enough: Operations goes 8 → 12 against a floor of 10, and `docker` is the sheet's last missing required course.

For scale: Codecademy's "Working with Containers: Introduction to Docker" is about an hour, freeCodeCamp's DevOps Docker course about two, and Docker's own workshop fifteen minutes. None of them grades anything. This course is longer because every lesson makes you do the thing and then checks the result.

## Engine needs
The sandbox has no container runtime and cannot have one (see Verdict). So `dockersim.js` has to be written — a new plain `<script>` loaded after `shell.js` and `gitsim.js`, dependency-free, no build step. Expect it to land near gitsim's size, ~2,300 lines, because the surface is comparable.

HOW IT PLUGS IN: the gitsim precedent, unchanged. `dockersim.js` registers `docker` and `curl` into `shell.js`'s command table. Daemon state (images, containers, volumes, networks, the build cache) is plain JSON on the filesystem root (`fsRoot.dockerd`), so `GIT.snapshot`'s approach gives `T.before` for free — the snapshot just has to copy that one extra key. Lessons are `kind: "shell"`; `setup`, `setupExpectFail` and `T.before` already exist.

ONE RUNNER CHANGE, and it matters beyond Docker: today `runShell` treats the first editor tab as the script and ignores every other tab. A Docker lesson needs `Dockerfile`, `.dockerignore` and `compose.yaml` as real editor tabs — writing a Dockerfile with `echo … >>` lines would be absurd. So: every non-script tab is written into the filesystem at `cwd` after `setup` runs and before the learner's commands. (After setup, because setup builds the "before" world from its own files; the tabs are the learner's.) This is ~10 lines, and it also lets the Git course resolve conflicts in an editor tab instead of with `echo` — worth doing first and re-validating both courses.

WHAT IT MUST MODEL (~est. lines):
- Dockerfile parser: instructions, `\` continuations, exec form (JSON arrays) vs shell form, `ARG` before `FROM`, `FROM … AS name`, comments. (~180)
- Build engine: the build context from a directory on the shell filesystem, `.dockerignore` (NOTE: patterns are anchored to the context root — `node_modules` excludes only the top-level one, `**/node_modules` excludes all; this differs from `.gitignore` and is worth a checkpoint), one layer per instruction, cache keys = parent layer + instruction text + a content hash of any files it copies, cascading invalidation, multi-stage with `COPY --from`. `RUN` executes real `shell.js` commands against the layer's filesystem; the only fakes are a small package model — `npm ci` reads `package.json` and writes stub `node_modules/<dep>/` entries with sizes from a fixed table, `apt-get install` does the same from a package table, `npm run build` runs a declared transformation (e.g. `src/` → `dist/`). BuildKit-style output, kept compact: `#5 [3/5] RUN npm ci` / `#5 CACHED`. (~450)
- Image store: tags, deterministic digests, sizes = a fixed base-image table (roughly 1 GB for `node:20`, ~200 MB for `-slim`, ~130 MB for `-alpine` — re-measure when building the table and label it approximate) plus layer sizes; `images`, `history`, `image inspect` (Env, User, Cmd, Entrypoint, ExposedPorts), `tag`, `rmi`. (~180)
- Containers: `run`/`create`/`start`/`stop`/`rm`/`ps`/`logs`/`exec`/`inspect`; a writable layer over the image's filesystem; exit codes (0, 137, 143); restart policies; health checks. The PROCESS is declarative: a lesson's `apps` table describes what a command like `node server.js` does — which env var names its port and bind host, what it prints, what it answers on `/`, and which dependency (e.g. `DATABASE_URL`) it connects to. The simulator never executes learner JavaScript. The brief says so. (~400)
- PID 1 and signals: `docker stop` sends SIGTERM, waits 10 s, then SIGKILL (exit 137). A shell-form `CMD` runs under `/bin/sh -c`, which "does not pass signals" → 137. An exec-form `CMD` makes the app PID 1 and delivers SIGTERM — but PID 1 has no default signal actions, so an app with no SIGTERM handler ignores it and still ends in 137; only an app that handles it exits 0. `--init` puts a tiny init in front that forwards the signal, so an app with no handler then dies of it (143). The `apps` table's `sigterm: "graceful" | "ignore"` carries which kind of app a lesson has. Gradeable as an exit code and a stop time. (inside the ~400)
- Networking: the default bridge, `-p [ip:]HOST:CONTAINER`, `EXPOSE` + `-P`, the bind-address check (`0.0.0.0` reachable, `127.0.0.1` not), user-defined networks with DNS by container name (the default bridge has none), "port is already allocated". `curl` works from the host shell and inside containers via `docker exec`. (~200)
- Volumes and mounts: named volumes surviving `rm`, bind mounts that show host edits live, `-v` and `--mount` syntax. (~120)
- Compose: a YAML-subset parser (maps, lists, scalars, quoted strings; no anchors) and a project model — `up -d`/`down`/`ps`/`logs`/`exec`/`build`, the `<project>_default` network, service names as hostnames, `depends_on` with `condition: service_healthy`, `environment`, `env_file`, `volumes`. (~430)
- Registry: `push`/`pull` to a registry that lives on the same filesystem — the gitsim-remote trick. No auth. (~80)
- CLI dispatch and output templating, including `--format` (real `docker ps` output is ~150 columns — too wide for a phone, so lessons teach `--format '{{.Names}}  {{.Status}}'`, which is also a real skill). (~250)

TEST-SIDE HELPERS added to T: `T.images()`, `T.image(tag)` → `{ size, layers, user, env, cmd, entrypoint, exposed, files }`, `T.containers({ all })`, `T.container(name)` → `{ status, health, exitCode, ports, networks, mounts, env, user }`, `T.build(n)` → the nth build's steps with `cached: true|false`, `T.volumes()`, `T.networks()`, `T.curl(url)` → `{ status, body, error }`, `T.compose()`, plus the existing `T.said`, `T.ran`, `T.typed` and `T.before`.

Grading principle: the Dockerfile is graded through the IMAGE it builds (`T.image('shop:1.0').user === 'node'`), never by regex on its text. That closes the obvious hole — a comment saying `USER node` — and it is the same "grade the state, not the prose" rule the Git course uses.

WHAT IT SKIPS, each named in a brief or cheatsheet: namespaces, cgroups and the real kernel; real package contents; image-layer tarballs and the OCI format; registries' authentication; BuildKit's full output; `docker scout`; Swarm; rootless mode; `docker attach` and TTY-interactive flows.

BUILD ORDER: land the runner multi-tab change first and re-run full validation (it touches every shell lesson). Then freeze the command list and write `tools/test-dockersim.js` BEFORE the engine, as gitsim did — its suite caught the one engine bug that validation alone would have missed.

## Teachable today
Honest answer: almost nothing. Every lesson with `docker` in it needs the engine. What can land before it:
- All 7 quizzes and all 8 cheatsheets — the quiz kind already renders `code:` blocks, so "which `-p` is right", "why is this image 1.2 GB" and "what does `docker history` reveal here" are gradeable today. That front-loads the Recall bank.
- The runner multi-tab change, which has value for the Git course on its own.

What it does NOT mean: shipping a quiz-only Docker course. The course does not ship until the engine does.

## Overlaps
Docker sits on top of three built courses and must extend each rather than re-teach it.

1. **Deploying Your App, U2 (environment variables).** That unit already teaches that env values are strings, that missing required vars must fail fast, and that secrets stay out of the repo. Docker U6's `-e` / `--env-file` lesson must NOT re-teach any of it. It grades only the delivery mechanism — a value injected at `docker run` rather than baked into the image — and says in the brief: "this is the same `env` object from Deploying, delivered by Docker."
2. **Deploying Your App, U3 (build time vs run time).** EMBRACE it: `ARG` is build time and `ENV` / `-e` is run time; an image is the build and a container is the run. The two-clocks idea transfers directly — reference it by name.
3. **Web Security Basics, U5 (secrets).** Docker U4's secrets lesson extends it — `docker history` shows an `ARG` value to anyone holding the image, and a file deleted in a later layer still ships — and never re-argues why secrets matter.
4. **Git & Version Control.** Reuse its shell mechanics without comment. But CONTRAST `.dockerignore` with `.gitignore` explicitly: dockerignore patterns are anchored to the context root. That difference is a real bug in real projects and gets its own checkpoint.
5. **Back-End Foundations.** "A server listens on a port" is taught there. Docker U5 builds on it without re-explaining what a port is.
6. **The Command Line research (unbuilt), U5 — processes, ports, `EADDRINUSE`.** Docker's "port is already allocated" is the container version of the same idea. Command Line isn't built, so Docker must stand on its own; if Command Line ships later, the two lessons cross-reference.
7. **The `cicd` and `cloud` stubs.** Building images in a pipeline belongs to `cicd`; orchestration and deploying containers to a cloud belong to `cloud`. This course ends at pushing an image to a registry and running a Compose stack locally.

## Units

### 1. Unit 1 — Images and containers: the two nouns
An image is a read-only template; a container is a running instance of one with a thin writable layer on top. Commands: run, ps, ps -a, stop, start, rm, logs, exec. Establishes the lifecycle and the fact that containers are disposable.

Lessons:
  - `docker run` and the container lifecycle
  - One image, many containers
  - The writable layer dies with `docker rm`
  - Looking inside: `docker logs` and `docker exec`
  - Unit 1 quiz: Images, containers, and VMs

Graded how:
L1: `docker run -d --name web shop:1.0`, `docker ps`, `docker stop web`, `docker ps -a`. Tests: T.container('web').status === 'exited' and T.said('Exited (0)'), plus T.ran(/^docker ps -a/) — the stopped container only appears with `-a`, which is the point. L2: two containers from one image; T.containers().length === 2 and both report the same image digest — an image is a template, not an instance. L3: write a file inside a container with `docker exec`, `docker rm -f`, run again; test asserts the file is gone in the new container — the lesson that sets up Unit 6. L4: T.ran(/^docker logs/) and T.said on the app's startup line; `docker exec web ls /app` shows the files the image holds.

### 2. Unit 2 — Your first Dockerfile
FROM, WORKDIR, COPY, RUN, CMD; the build context and `.dockerignore`; exec form vs shell form; tags. Graded through the image each build produces.

Lessons:
  - FROM, WORKDIR, COPY, CMD: containerize the shop
  - The build context and .dockerignore
  - CMD vs ENTRYPOINT, exec form, and who gets the signal
  - Tags: `shop:1.0`, and why `latest` is not a version
  - Unit 2 quiz: Dockerfiles

Graded how:
L1: the learner writes the Dockerfile in its own editor tab; `docker build -t shop:1.0 .` then `docker run -d -p 8080:3000 shop:1.0` and `curl localhost:8080`. Tests: T.image('shop:1.0') exists, T.image('shop:1.0').cmd deep-equals ['node','server.js'], and T.curl('http://localhost:8080').body contains the app's greeting. L2: the context contains `node_modules/`, `.env` and `logs/`; the test asserts T.image('shop:1.0').files has none of them, and a nested `packages/api/node_modules` checks the anchored-pattern trap: `node_modules` alone leaves it in, `**/node_modules` removes it. L3: shell-form `CMD node server.js` → `docker stop` waits the full 10 s and T.container('web').exitCode === 137; after switching to exec form, the lesson's app — which handles SIGTERM — exits 0 at once. A last checkpoint runs an app with no SIGTERM handler: exec form alone still ends in 137 (PID 1 ignores signals it has no handler for), and `--init` gives 143. That's the honest version of "use exec form", and the exit code IS the lesson. L4: T.images() lists `shop:1.0` and `shop:1.1` as distinct images, and a checkpoint shows that `shop:latest` is just whatever was tagged last — `latest` is a name, not a promise.

### 3. Unit 3 — Layers and the build cache
Every instruction is a layer. A changed layer rebuilds everything after it, and deleting a file never shrinks an image.

Lessons:
  - Every instruction is a layer: `docker history`
  - Order for the cache: package.json before your source
  - Deleting doesn't shrink: layers only add
  - Unit 3 quiz: Layers and caching

Graded how:
L1: `docker history shop:1.0`; T.said on each instruction and T.image('shop:1.0').layers.length equals the number of instructions that create layers. L2 is the cache lesson and the course's most practical: the starter copies everything and then runs `npm ci`; the learner edits `server.js` and rebuilds, and T.build(2) shows `npm ci` NOT cached. After reordering (`COPY package*.json ./`, `RUN npm ci`, `COPY . .`), the same edit-and-rebuild shows T.build(2)'s `npm ci` step cached: true. Both builds happen in one run — the before and after are both on screen. L3: `RUN rm -rf /tmp/cache` in a later layer leaves T.image().size unchanged; moving the cleanup into the same `RUN` shrinks it. Grounded in Docker's own docs: a removed file "will still be available in the previous layer and add up to the image's total size."

### 4. Unit 4 — Smaller and safer images
Multi-stage builds, slim bases and pinned tags, a non-root user, and secrets that never enter a layer.

Lessons:
  - Multi-stage: build in one stage, ship only the output
  - Slim and alpine bases, and pinning a version
  - Run as a non-root USER
  - Secrets never go in ENV or ARG
  - Unit 4 quiz: Image size and security

Graded how:
L1: a `build` stage runs `npm run build`; the final stage `COPY --from=build /app/dist ./dist`. Tests: T.image('shop:2.0').files has `dist/` and no `src/` or dev dependencies, and T.image('shop:2.0').size < T.before.image('shop:1.0').size / 2. L2: T.image().base is a pinned tag (`node:20-alpine`, not `node:latest`), and the size drop is asserted from the table. L3: T.container('web').user === 'node' and `docker exec web whoami` prints `node`. L4: the starter passes an API key with `ARG` and `docker history` reveals it — T.said the key in the history output is the failing-first moment. The fix uses `RUN --mount=type=secret`; the test asserts the key appears in no layer's metadata and in no file of the final image.

### 5. Unit 5 — Ports and networking
Publishing a port, binding to the right address, containers finding each other, and port conflicts.

Lessons:
  - `-p HOST:CONTAINER`, and why EXPOSE isn't enough
  - Listen on 0.0.0.0, not 127.0.0.1
  - Two containers talking: a network and a name
  - "Port is already allocated"
  - Unit 5 quiz: Networking

Graded how:
L1: `EXPOSE 3000` alone → T.curl('http://localhost:3000').error names a refused connection; with `-p 8080:3000`, T.curl('http://localhost:8080').status === 200. A swapped `-p 3000:8080` fails the check with a message about which side is the host. L2: the app reads `HOST` and defaults to `127.0.0.1`; the port is published but curl gets an empty reply — the "works locally, broken in Docker" bug. The fix is `-e HOST=0.0.0.0` (or `ENV`), graded by T.curl succeeding. L3: `docker network create shopnet`, run `web` and `db` on it; T.curl('http://localhost:8080/health').body reports `db: connected`. A checkpoint shows the same pair on the default bridge cannot resolve `db`. L4: a second container on host port 8080 fails with "port is already allocated"; the learner maps it to 8081, and T.container('web2').ports shows it.

### 6. Unit 6 — Data and configuration that survive
Named volumes, bind mounts for development, run-time configuration, and health.

Lessons:
  - Named volumes: remove the container, keep the data
  - Bind mounts: edit on your machine, see it in the container
  - Configuration at run time: `-e` and `--env-file`
  - Health checks and restart policies
  - Unit 6 quiz: Volumes, config and health

Graded how:
L1: the database container writes rows; `docker rm -f` and a new container → without a volume the rows are gone, with `-v shopdata:/var/lib/data` they survive. T.volumes() includes `shopdata`. L2: `-v "$PWD/src:/app/src"` plus a host edit to `src/banner.txt` → the change is visible via `docker exec`, with no rebuild. A cheatsheet note covers why bind mounts are a development tool. L3: the same image runs twice with different `-e GREETING=…`; T.curl shows two different answers from one image — the build-time/run-time split from Deploying U3, in container form. L4: `HEALTHCHECK` + `--restart unless-stopped`; T.container('web').health === 'healthy', and after the declared app crashes, T.container('web').status is back to `running`.

### 7. Unit 7 — Docker Compose and sharing images
One file for the whole stack; service names are hostnames; startup order is not readiness; tagging and pushing an image.

Lessons:
  - compose.yaml: two services, one command
  - Service names are hostnames: `db:5432`, not `localhost:5432`
  - `depends_on`, health, and volumes in Compose
  - Share it: tag, push, pull
  - Unit 7 quiz: Compose and registries

Graded how:
L1: the learner writes compose.yaml in its own tab; `docker compose up -d`; T.compose().services lists `web` and `db` both running, and T.networks() contains `<project>_default`. L2: `DATABASE_URL=postgres://localhost:5432/shop` fails, because inside the `web` container localhost is `web` itself. The fix is `db:5432`, and a second trap checks that the service-to-service port is the CONTAINER port, not a published host port — straight from Docker's docs: "Networked service-to-service communication uses the CONTAINER_PORT." L3: without a health-gated `depends_on`, `web` starts before `db` is ready and logs a connection error; with `condition: service_healthy`, T.container('web').status is running and the logs are clean. L4: `docker tag shop:2.0 registry.local/shop:2.0`, `docker push`, `docker rmi`, `docker pull`; T.images() shows the pulled image with the same digest.

### 8. Unit 8 — Two projects
No new commands. The first project builds an image the right way; the second repairs a broken stack.

Lessons:
  - Project: Containerize the shop, properly
  - Project: "It works on my machine" — fix the stack

Graded how:
P1 (~8 checkpoints): write the Dockerfile and `.dockerignore` from scratch. Tests assert multi-stage, a pinned slim base, a cache-friendly order (edit source → rebuild → `npm ci` cached), non-root, exec-form CMD (clean stop, exit 0), no `.env` or `node_modules` from the context, the image under a size budget, and a healthy container answering on a published port. The brief REFERENCES the capstone app in prose ("this is how you'd ship NoteStream") without importing its files.
P2 (~8 checkpoints): a compose stack handed over broken in six ways — ports reversed, the app bound to 127.0.0.1, `web` pointed at `localhost:5432`, the database with no volume, a secret baked into an `ENV`, and the app running as root. Reach a specified good state: T.curl healthy through the published port, data surviving `docker compose down && up`, no secret in `docker history`, `user` non-root, every service healthy.

## Projects
- Project: Containerize the shop, properly — Dockerfile + .dockerignore from scratch; graded on the image (stages, base, layer order and caching, user, CMD form, size, context contents) and on the running container (healthy, reachable, clean stop).
- Project: "It works on my machine" — a six-fault Compose stack repaired to a specified healthy state; graded on reachability, persistence across `down`/`up`, secret hygiene, non-root, and health.

## Risks
- **Simulator fidelity is the whole bet.** The rules are enforced exactly, but packages and processes are faked. Mitigation: fake payloads, never rules; the U1 brief names the line; each lesson's declared `apps` behaviour is shown in its Learn pane, so nothing is hidden. If a rule can't be simulated faithfully, it moves to the cheatsheet rather than being approximated.
- **Engine size.** ~2,300 lines, like gitsim, and all 29 coding items depend on it. Mitigation: freeze the command list, write the test suite first, and land the runner change separately.
- **The runner multi-tab change touches every shell lesson.** Mitigation: land it alone, re-run the full validation, and only then start authoring.
- **Output drift.** Docker's CLI output changes between releases (BuildKit, Compose v2's `docker compose` vs the old `docker-compose`). Pin the simulated output to one current Docker release, name it in U1's cheatsheet, and grade states — not exact output — wherever possible.
- **Phone width.** `docker ps` and full BuildKit output are wide. Mitigation: compact build output, and `--format` taught as a skill in U1.
- **Size numbers.** The base-image table is approximate and dates. Label it "approximate, measured <date>" in the cheatsheet and grade relative sizes (`< half`), never exact bytes.
- **Ungradeable topics must be named, not faked:** installing Docker Desktop and enabling WSL2 on Windows (a hand-off card with zero graded steps — the owner is on Windows), Kubernetes, registry login, image scanning, and anything that needs a real TTY.
- **Credits.** Size the course by its content: ~7.5h is 4 credits, not the stub's planned 5. Four still closes Junior DevOps (Operations 8 → 12 ≥ 10).

## Sources
- Docker Docs — Dockerfile best practices: https://docs.docker.com/build/building/best-practices/
- Docker Docs — Using the build cache: https://docs.docker.com/get-started/docker-concepts/building-images/using-the-build-cache/
- Docker Docs — Publishing ports: https://docs.docker.com/get-started/docker-concepts/running-containers/publishing-ports/
- Docker Docs — Build secrets: https://docs.docker.com/build/building/secrets/
- Docker Docs — Storage drivers (deleted files still count toward size; the writable layer dies with the container): https://docs.docker.com/engine/storage/drivers/
- Docker Docs — Networking in Compose: https://docs.docker.com/compose/how-tos/networking/
- Docker Docs — Bridge network driver (the default bridge has no name resolution; user-defined bridges do): https://docs.docker.com/engine/network/drivers/bridge/
- Docker Docs — Dockerfile reference (shell form runs under `/bin/sh -c`, "which does not pass signals"): https://docs.docker.com/reference/dockerfile/
- Docker Docs — `docker container stop` (SIGTERM, then SIGKILL after the timeout): https://docs.docker.com/reference/cli/docker/container/stop/
- Docker Docs — Workshop overview: https://docs.docker.com/get-started/workshop/
- Dataquest — 30 Docker interview questions, by level: https://www.dataquest.io/blog/docker-interview-questions-and-answers/
- InterviewBit — Docker interview questions: https://www.interviewbit.com/docker-interview-questions/
- Junior DevOps interview themes: https://medium.com/@attiqorakzai1422/devops-junior-engineer-interview-questions-answers-5af361e34f1b
- Codecademy — Working with Containers: Introduction to Docker (~1h): https://www.codecademy.com/learn/ext-courses/working-with-containers-introduction-to-docker
- freeCodeCamp — 2-hour Docker/DevOps course: https://www.freecodecamp.org/news/docker-devops-course/
- container2wasm (containers in the browser via CPU emulation): https://github.com/container2wasm/container2wasm — demo image sizes: https://ktock.github.io/container2wasm-demo/
- WebVM / CheerpX (licensing): https://github.com/leaningtech/webvm and https://labs.leaningtech.com/blog/cx-10
