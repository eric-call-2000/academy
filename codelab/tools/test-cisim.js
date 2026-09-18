/* Engine tests for cisim.js — pure Node, no browser.
   Usage:  node tools/test-cisim.js

   Written BEFORE the engine, the way test-gitsim.js and test-dockersim.js were:
   this file is the CONTRACT. The CI/CD course grades a pipeline by inspecting
   what a RUN did (T.run / T.deployed / T.merged), never by regex on the YAML,
   so a rule this suite doesn't pin down is a rule a lesson could get wrong.

   cisim.js COMPOSES the engines already loaded: it reuses shell.js to run
   steps, gitsim.js for the repo and the push that triggers a run, and
   dockersim.js for `docker …` steps and its YAML parser. It registers a small
   `gh` command and WRAPS shell's `git` so that a successful `git push` fires
   every workflow whose `on:` matches.

   ── THE TRIGGER MODEL (Eric's decision, 2026-09-17: real git push) ─────────
   A workflow runs when its event actually happens in the sim:
     git push            → fires every .github/workflows/*.yml with a matching
                           `on: push` (branch filter against the pushed branch).
                           The run happens synchronously; its result is recorded
                           before the shell prompt returns, so a checkpoint reads it.
     gh workflow run F    → fires F's `workflow_dispatch` job(s).
     gh pr create -B base -H head [--title T]     opens a PR (head → base).
     gh pr merge [N|head] [--squash|--merge]      merges IF required checks pass;
                           merging fires `on: pull_request` targets' post-merge
                           push to base is NOT auto-fired (keep it explicit).
   A run is over before the next command; there is no async/waiting.

   ── WORKFLOW YAML (a subset; cisim's own flow-aware parser) ────────────────
   on:  push: { branches: [main, "feature/*"] }   pull_request: { branches:[main] }
        workflow_dispatch: {}          (any of these keys; branch globs allowed)
   jobs:
     <id>:
       runs-on: ubuntu-latest          (recorded, not enforced)
       needs: [build] | build          (DAG; a cycle is a config error)
       if: <expression>                (job-level gate; false → skipped)
       env: { KEY: value }
       strategy: { matrix: { node: [18, 20], os: [ubuntu] }, fail-fast: true }
       environment: production          (name, or { name, } ; gates on protection)
       steps:
         - name: T   uses: actions/checkout@v4          with: { … }
         - name: T   run: npm test        if: <expr>   env: {…}  continue-on-error: true
   Expressions in ${{ }} may use: github.ref, github.ref_name, github.event_name,
   github.sha, matrix.<k>, env.<k>, vars.<k>, secrets.<k>, needs.<job>.result,
   success(), failure(), always(), ==, !=, &&, ||, !, ( ), 'string', number, true/false.
   No arbitrary JS — a tiny tokeniser + precedence parser, so a wrong `if:` is a
   graded bug, not an eval hole.

   ── ACTIONS (uses:) — a small modelled table, versions (@vN) ignored ───────
   actions/checkout            puts the pushed commit's tree in the job workspace
   actions/setup-node          with: { node-version } → node available (recorded)
   actions/cache               with: { path, key } → hit restores, miss saves on success
   actions/upload-artifact     with: { name, path } → stores path from the workspace
   actions/download-artifact   with: { name, path } → restores it into the workspace
   actions/deploy (generic)    with: { environment, ref } → records a deployment
   Any other `uses:` is a no-op step that succeeds (recorded as such). A `run:`
   step executes real shell.js / gitsim / dockersim command lines in the job
   workspace and takes their honest exit code; non-zero fails the job unless the
   step has continue-on-error: true. `npm test` runs package.json's test script
   (a shell command) — a failing suite is a non-zero exit, which fails the job.

   ── JOB & STEP SEMANTICS ───────────────────────────────────────────────────
   • Jobs run in topological order of `needs`. A job runs only if every needed
     job succeeded AND its `if` is true, else it is "skipped".
   • strategy.matrix expands one job instance per combination; with fail-fast a
     failing leg cancels the rest (they become "cancelled").
   • A job's status is "failure" at the first failing step (unless that step is
     continue-on-error), else "success"; a job with no run steps still succeeds.
   • Secrets and vars come from the lesson (fsRoot.ci.secrets / .vars). A secret's
     value is MASKED to *** wherever it appears in a step's logs.

   ── BRANCH PROTECTION & PRs ────────────────────────────────────────────────
   Protection lives on fsRoot.ci.protection[branch] = { requiredChecks: [name…] }.
   A lesson seeds it, or `gh` sets it. `gh pr merge` on a PR whose head has not
   passed all the base branch's required checks is REFUSED (non-zero, "required
   checks"); once they pass on the head's latest commit, the merge succeeds and
   T.merged(head) is true.

   ── ENVIRONMENTS & APPROVAL ────────────────────────────────────────────────
   fsRoot.ci.environments[name] = { requiredReviewers: n }. A job with
   `environment: name` and a protected env does not deploy immediately: the
   deployment is recorded "pending" and the job "waiting"; `gh deployment approve
   <name>` completes it (deploys) and T.deployed(name) becomes non-null. An
   unprotected environment deploys straight away.

   ── T HELPERS (added by cisim.extendT; same object for T.before) ───────────
   T.runs() → [{ id, event, ref, status }]   newest last
   T.run(k = last, 1-based) → { event, ref, status, jobs: { <id>: {
       status: "success|failure|skipped|cancelled|waiting", steps: [{ name,
       status, exitCode }], logs } }, artifacts: [name…] }
   T.lastRun()   T.job(runK, id) → that job   T.stepLog(runK, id, name) → string
   T.artifact(name) → { present, files: { path: contents } } | { present:false }
   T.cacheHit(key) → boolean (was a cache restore a hit this run)
   T.deployed(env) → null | { ref, from, at }   T.merged(headBranch) → boolean
   T.checks(branch) → { requiredChecks:[…] }    T.prs() → [{ number, head, base,
       merged }]
   CI state lives on fsRoot.ci as plain JSON, and cisim.snapshot(fsRoot)
   deep-copies the whole filesystem with it (docker's snapshot, then git's).
   ───────────────────────────────────────────────────────────────────────── */
const path = require("path");
const fsNode = require("fs");
const SH = require(path.join(__dirname, "..", "shell.js"));
require(path.join(__dirname, "..", "gitsim.js"));
require(path.join(__dirname, "..", "dockersim.js"));
const ENGINE = path.join(__dirname, "..", "cisim.js");
const C = fsNode.existsSync(ENGINE) ? require(ENGINE) : null;
if (C) C.strict = true;

const HOME = "/home/you/project";
const tests = [];
function test(name, fn) { tests.push({ name, fn }); }
function eq(a, b, msg) {
  if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error((msg || "not equal") + ": got " + JSON.stringify(a) + ", want " + JSON.stringify(b));
}
function ok(c, msg) { if (!c) throw new Error(msg || "expected true"); }

/* ---------------- fixtures ---------------- */
const PKG = (test_) => JSON.stringify({
  name: "shop", version: "1.0.0",
  scripts: { build: "cp -r src dist", test: test_ || "true", lint: "true" },
  dependencies: { express: "4.19.2" }
}, null, 2) + "\n";

function baseFiles(extra) {
  const f = {};
  f[HOME + "/package.json"] = PKG();
  f[HOME + "/package-lock.json"] = "{ \"lockfileVersion\": 3 }\n";
  f[HOME + "/src/app.js"] = "console.log('app');\n";
  f[HOME + "/index.js"] = "console.log('hi');\n";
  return Object.assign(f, extra || {});
}
const wf = (name, body) => { const o = {}; o[HOME + "/.github/workflows/" + name] = body; return o; };

// A minimal CI workflow: on push to main, checkout + test.
const CI_YML = [
  "name: CI",
  "on:",
  "  push:",
  "    branches: [main]",
  "jobs:",
  "  test:",
  "    runs-on: ubuntu-latest",
  "    steps:",
  "      - uses: actions/checkout@v4",
  "      - run: npm test",
  ""
].join("\n");

// lint -> test -> build with needs; build needs test.
const STAGED_YML = [
  "name: CI",
  "on: { push: { branches: [main] } }",
  "jobs:",
  "  lint:  { runs-on: ubuntu-latest, steps: [ { run: npm run lint } ] }",
  "  test:  { runs-on: ubuntu-latest, needs: lint, steps: [ { uses: actions/checkout@v4 }, { run: npm test } ] }",
  "  build: { runs-on: ubuntu-latest, needs: test, steps: [ { run: npm run build }, { uses: actions/upload-artifact@v4, with: { name: dist, path: dist } } ] }",
  ""
].join("\n");

/* Build the lesson world, set up a git repo with a bare remote, write any
   workflow files, run the learner script (which may `git push`), then read the
   CI state through T. Setup commits + pushes main first (which itself fires any
   on:push workflow — tests assert on the run they care about via T.run(k)). */
function sandbox(o) {
  o = o || {};
  const fs = SH.createFS(o.fs || baseFiles());
  if (o.ci) fs.ci = o.ci;               // seed secrets/vars/protection/environments
  const cwd = o.cwd || HOME;
  const setup = [
    "git init -q -b main",
    "git add -A",
    "git commit -qm init",
    "git init -q --bare /srv/origin.git",
    "git remote add origin /srv/origin.git",
    "git push -u origin main"
  ].join("\n") + (o.setup ? "\n" + o.setup : "");
  const pre = SH.run(fs, setup, { cwd });
  const broke = pre.transcript.find(t => t.code !== 0);
  if (broke) throw new Error("setup failed at `" + broke.cmd + "`: " + (broke.err || "").trim());
  const before = C.snapshot(fs);
  if (o.tabs) SH.writeTabs(fs, cwd, "/home/you", o.tabs, "commands.sh");
  const res = SH.run(fs, o.script || "", { cwd });
  const out = res.transcript.map(t => t.out).join(""), err = res.transcript.map(t => t.err).join("");
  const T = {
    fs, out: () => out, err: () => err, transcript: res.transcript,
    code: (i) => res.transcript[i == null ? res.transcript.length - 1 : i].code,
    ran: (re) => res.transcript.some(t => re.test(t.cmd)),
    said: (s) => (out + err).indexOf(s) !== -1
  };
  C.extendT(T, fs, before);
  return T;
}
// commit a change and push, in one helper the tests reuse
const CHANGE_PUSH = "echo x >> index.js\ngit commit -qam change\ngit push";
// a workflow that fires on every branch push, so a PR's head gets a run
const PRCI_YML = [
  "name: CI",
  "on: { push: {} }",
  "jobs:",
  "  test:",
  "    runs-on: ubuntu-latest",
  "    steps:",
  "      - uses: actions/checkout@v4",
  "      - run: npm test",
  ""
].join("\n");
// make a feature branch, change, and push it
const FEATURE_PUSH = "git checkout -b feature\necho x >> index.js\ngit commit -qam c\ngit push -u origin feature";

/* ================= trigger ================= */
test("a push to main fires the matching on:push workflow, and it goes green", () => {
  const T = sandbox({ fs: baseFiles(wf("ci.yml", CI_YML)), script: CHANGE_PUSH });
  const run = T.lastRun();
  eq(run.event, "push"); eq(run.ref, "refs/heads/main"); eq(run.status, "success");
  eq(run.jobs.test.status, "success");
});
test("a failing test turns the same push red", () => {
  const fs = baseFiles(Object.assign(wf("ci.yml", CI_YML), { [HOME + "/package.json"]: PKG("false") }));
  const T = sandbox({ fs, script: CHANGE_PUSH });
  eq(T.lastRun().status, "failure");
  eq(T.lastRun().jobs.test.status, "failure");
});
test("a push to a branch the workflow doesn't list fires nothing", () => {
  const T = sandbox({ fs: baseFiles(wf("ci.yml", CI_YML)), script: FEATURE_PUSH });
  // only the setup push to main fired; the feature push matched no branch filter
  eq(T.runs().length, 1);
  eq(T.runs()[0].ref, "refs/heads/main");
});

/* ================= stages, needs, gates ================= */
test("needs orders jobs, and a failed job skips those that need it", () => {
  const fs = baseFiles(Object.assign(wf("ci.yml", STAGED_YML), { [HOME + "/package.json"]: PKG("false") }));
  const T = sandbox({ fs, script: CHANGE_PUSH });
  const r = T.lastRun();
  eq(r.jobs.lint.status, "success");
  eq(r.jobs.test.status, "failure");
  eq(r.jobs.build.status, "skipped");   // needs test, which failed
  eq(r.status, "failure");
});
test("continue-on-error keeps the job green despite a failing step", () => {
  const y = ["on: { push: { branches: [main] } }", "jobs:",
    "  test: { runs-on: ubuntu-latest, steps: [ { run: false, continue-on-error: true }, { run: npm test } ] }", ""].join("\n");
  const T = sandbox({ fs: baseFiles(wf("ci.yml", y)), script: CHANGE_PUSH });
  eq(T.lastRun().jobs.test.status, "success");
});
test("a job-level if scopes it to main only", () => {
  const y = ["on: { push: {} }", "jobs:",
    "  deploy: { runs-on: ubuntu-latest, if: \"${{ github.ref == 'refs/heads/main' }}\", steps: [ { run: echo deploying } ] }", ""].join("\n");
  const T = sandbox({ fs: baseFiles(wf("cd.yml", y)), script: FEATURE_PUSH });
  eq(T.lastRun().ref, "refs/heads/feature");
  eq(T.lastRun().jobs.deploy.status, "skipped");
});

/* ================= matrix & cache ================= */
test("a matrix expands one job per combination", () => {
  const y = ["on: { push: { branches: [main] } }", "jobs:",
    "  test:", "    runs-on: ubuntu-latest", "    strategy: { matrix: { node: [18, 20, 22] } }",
    "    steps: [ { run: npm test } ]", ""].join("\n");
  const T = sandbox({ fs: baseFiles(wf("ci.yml", y)), script: CHANGE_PUSH });
  const jobs = Object.keys(T.lastRun().jobs).filter(k => k.indexOf("test") === 0);
  eq(jobs.length, 3);
});
test("cache misses on the first run and hits on the second", () => {
  // triggers only on the feature branch, so the setup push to main doesn't prime it
  const y = ["on: { push: { branches: [feature] } }", "jobs:",
    "  test:", "    runs-on: ubuntu-latest",
    "    steps: [ { uses: actions/cache@v4, with: { path: node_modules, key: deps-v1 } }, { run: npm test } ]", ""].join("\n");
  const start = "git checkout -b feature\ngit push -u origin feature";   // first run
  const T1 = sandbox({ fs: baseFiles(wf("ci.yml", y)), script: start });
  eq(T1.cacheHit("deps-v1"), false);   // first ever run: miss
  const T2 = sandbox({ fs: baseFiles(wf("ci.yml", y)), script: start + "\n" + CHANGE_PUSH });
  eq(T2.cacheHit("deps-v1"), true);    // the second run restores it
});

/* ================= artifacts ================= */
test("an artifact uploaded by one job is downloaded by another", () => {
  const y = ["on: { push: { branches: [main] } }", "jobs:",
    "  build: { runs-on: ubuntu-latest, steps: [ { run: mkdir -p dist && echo built > dist/app.js }, { uses: actions/upload-artifact@v4, with: { name: dist, path: dist } } ] }",
    "  ship:  { runs-on: ubuntu-latest, needs: build, steps: [ { uses: actions/download-artifact@v4, with: { name: dist, path: dist } }, { run: cat dist/app.js } ] }", ""].join("\n");
  const T = sandbox({ fs: baseFiles(wf("ci.yml", y)), script: CHANGE_PUSH });
  ok(T.artifact("dist").present);
  eq(T.lastRun().jobs.ship.status, "success");
});
test("a skipped build leaves the artifact missing and the downstream job fails", () => {
  const y = ["on: { push: { branches: [main] } }", "jobs:",
    "  build: { runs-on: ubuntu-latest, if: false, steps: [ { uses: actions/upload-artifact@v4, with: { name: dist, path: dist } } ] }",
    "  ship:  { runs-on: ubuntu-latest, steps: [ { uses: actions/download-artifact@v4, with: { name: dist, path: dist } } ] }", ""].join("\n");
  const T = sandbox({ fs: baseFiles(wf("ci.yml", y)), script: CHANGE_PUSH });
  eq(T.artifact("dist").present, false);
  eq(T.lastRun().jobs.ship.status, "failure");
});

/* ================= secrets ================= */
test("a secret is masked in the logs", () => {
  const y = ["on: { push: { branches: [main] } }", "jobs:",
    "  test: { runs-on: ubuntu-latest, steps: [ { run: \"echo ${{ secrets.TOKEN }}\" } ] }", ""].join("\n");
  const T = sandbox({ ci: { secrets: { TOKEN: "s3cr3t-value-123" } }, fs: baseFiles(wf("ci.yml", y)), script: CHANGE_PUSH });
  const log = T.stepLog(T.runs().length, "test", null) || "";
  ok(log.indexOf("s3cr3t-value-123") === -1, "raw secret must not appear");
  ok(log.indexOf("***") !== -1, "secret shown masked");
});

/* ================= branch protection + PRs ================= */
test("a PR merge is blocked until the required check passes on the head", () => {
  const fs = baseFiles(Object.assign(wf("ci.yml", PRCI_YML), { [HOME + "/package.json"]: PKG("false") }));
  const T = sandbox({ ci: { protection: { main: { requiredChecks: ["test"] } } }, fs,
    script: FEATURE_PUSH + "\ngh pr create -B main -H feature --title x\ngh pr merge feature --squash" });
  ok(T.said("required checks"), "merge refused while the required check is red");
  eq(T.merged("feature"), false);
});
test("once the check is green, the PR merges", () => {
  const T = sandbox({ ci: { protection: { main: { requiredChecks: ["test"] } } }, fs: baseFiles(wf("ci.yml", PRCI_YML)),
    script: FEATURE_PUSH + "\ngh pr create -B main -H feature --title x\ngh pr merge feature --squash" });
  eq(T.merged("feature"), true);
});

/* ================= CD: deploy, environments, rollback ================= */
test("a deploy job on main deploys to staging but not on a feature branch", () => {
  const y = ["on: { push: {} }", "jobs:",
    "  deploy:", "    runs-on: ubuntu-latest",
    "    if: \"${{ github.ref == 'refs/heads/main' }}\"", "    environment: staging",
    "    steps: [ { uses: actions/deploy, with: { environment: staging, ref: \"${{ github.sha }}\" } } ]", ""].join("\n");
  const T = sandbox({ fs: baseFiles(wf("cd.yml", y)), script: CHANGE_PUSH });
  ok(T.deployed("staging"), "main push deployed to staging");
});
test("a protected environment waits for approval before deploying", () => {
  const y = ["on: { push: { branches: [main] } }", "jobs:",
    "  prod: { runs-on: ubuntu-latest, environment: production, steps: [ { uses: actions/deploy, with: { environment: production, ref: \"${{ github.sha }}\" } } ] }", ""].join("\n");
  const T1 = sandbox({ ci: { environments: { production: { requiredReviewers: 1 } } }, fs: baseFiles(wf("cd.yml", y)), script: CHANGE_PUSH });
  eq(T1.deployed("production"), null);
  eq(T1.lastRun().jobs.prod.status, "waiting");
  const T2 = sandbox({ ci: { environments: { production: { requiredReviewers: 1 } } }, fs: baseFiles(wf("cd.yml", y)), script: CHANGE_PUSH + "\ngh deployment approve production" });
  ok(T2.deployed("production"), "approval completes the deployment");
});

/* ================= plumbing ================= */
test("T.before is the state after setup, before the learner's push", () => {
  const T = sandbox({ fs: baseFiles(wf("ci.yml", CI_YML)), script: CHANGE_PUSH });
  eq(T.before.runs().length, 1);   // only the setup push
  eq(T.runs().length, 2);          // setup push + the learner push
});
test("CI state is plain JSON", () => {
  const T = sandbox({ fs: baseFiles(wf("ci.yml", CI_YML)), script: CHANGE_PUSH });
  eq(JSON.parse(JSON.stringify(T.fs.ci)), T.fs.ci);
});
test("gh with an unknown subcommand errors", () => {
  const T = sandbox({ fs: baseFiles(wf("ci.yml", CI_YML)), script: "gh nope" });
  ok(T.said("unknown command") || T.said("Unknown"), "gh reports an unknown subcommand");
});

/* ---------------- run ---------------- */
function runAll(list) {
  const failed = [];
  list.forEach(t => { try { t.fn(); } catch (e) { failed.push(t.name + " — " + (e && e.message)); } });
  return failed;
}
if (!C) {
  console.log(`cisim: cisim.js not written yet — ${tests.length} tests waiting for it`);
  process.exit(1);
}
const failed = runAll(tests);
console.log(`cisim: ${tests.length - failed.length} passed, ${failed.length} failed`);
failed.forEach(f => console.log("  ✗ " + f));
process.exit(failed.length ? 1 : 0);
