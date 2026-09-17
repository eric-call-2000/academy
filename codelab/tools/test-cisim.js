/* Engine tests for cisim.js — pure Node, no browser, about a second.
   Usage:  node tools/test-cisim.js

   The CI/CD course is graded by inspecting what the CI server DID — which
   runs started, which jobs ran, what each step printed, what ended up in the
   cache and what ended up in an artifact. A bug in here would pass or fail a
   learner for reasons that have nothing to do with the workflow they wrote.

   Every rule the research doc says must be pinned has a test below, and the
   most important one by far is the first section: every job starts on a
   fresh machine. Four separate lessons hang off that single fact. */
const path = require("path");
const ROOT = path.join(__dirname, "..");
const SH = require(path.join(ROOT, "shell.js"));
require(path.join(ROOT, "gitsim.js"));
require(path.join(ROOT, "dockersim.js"));
const CI = require(path.join(ROOT, "cisim.js"));

let passed = 0;
const failures = [];
function test(name, fn) {
  try { fn(); passed++; }
  catch (e) { failures.push(name + " — " + (e && e.message)); }
}
function eq(a, b, msg) {
  if (JSON.stringify(a) !== JSON.stringify(b))
    throw new Error((msg || "not equal") + ": got " + JSON.stringify(a) + ", want " + JSON.stringify(b));
}
function ok(c, msg) { if (!c) throw new Error(msg || "expected true"); }
function has(hay, needle, msg) {
  if (String(hay).indexOf(needle) === -1)
    throw new Error((msg || "missing") + ": " + JSON.stringify(needle) + " not in " + JSON.stringify(String(hay)).slice(0, 400));
}
function lacks(hay, needle, msg) {
  if (String(hay).indexOf(needle) !== -1)
    throw new Error((msg || "should be absent") + ": " + JSON.stringify(needle) + " found");
}

const HOME = "/home/you/shop";
const PKG = JSON.stringify({
  name: "shop", version: "1.0.0",
  scripts: { test: "echo all tests passed", lint: "echo no lint errors", build: "mkdir -p dist && echo built > dist/app.js" },
  dependencies: { express: "4.19.2" }
}, null, 2) + "\n";

/* One repository, one workflow, one push — the shape every test needs. */
function sandbox(workflows, opts) {
  opts = opts || {};
  const spec = {
    [HOME + "/package.json"]: opts.pkg || PKG,
    [HOME + "/index.js"]: "// the shop\n",
    [HOME + "/src/app.js"]: "// src\n"
  };
  Object.keys(workflows || {}).forEach(name => {
    spec[HOME + "/.github/workflows/" + name] = workflows[name];
  });
  Object.keys(opts.files || {}).forEach(p => { spec[HOME + "/" + p] = opts.files[p]; });

  const fs = SH.createFS(spec);
  const setup = [
    "git init --bare /srv/shop.git",
    "git init",
    "git add .",
    'git commit -m "first"',
    "git remote add origin /srv/shop.git"
  ].concat(opts.setup ? [opts.setup] : []);
  const pre = SH.run(fs, setup.join("\n"), { cwd: HOME });
  const broke = pre.transcript.find(t => t.code !== 0);
  if (broke && !opts.setupMayFail) throw new Error("setup failed at `" + broke.cmd + "`: " + broke.err);

  const res = SH.run(fs, opts.script || "git push -u origin main", { cwd: HOME });
  const T = {
    out: () => res.transcript.map(t => t.out).join(""),
    err: () => res.transcript.map(t => t.err).join(""),
    transcript: res.transcript,
    cwd: () => res.cwd
  };
  CI.extendT(T, fs, null);
  return { fs, T, res };
}

const BASIC = `name: CI
on:
  push:
    branches: [main]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm test
`;

/* ---------- triggers ---------- */

test("a push to a matching branch starts a run", () => {
  const s = sandbox({ "ci.yml": BASIC });
  eq(s.T.runCount(), 1, "one run should have started");
  const r = s.T.lastRun();
  eq(r.conclusion, "success");
  eq(r.event, "push");
  eq(r.branch, "main");
  has(s.T.out(), "workflow 'CI' started", "the push should report the run it started");
});
test("a push to a non-matching branch starts nothing", () => {
  const s = sandbox({ "ci.yml": BASIC }, {
    setup: "git checkout -b feature",
    script: "git push -u origin feature"
  });
  eq(s.T.runCount(), 0, "feature is not in branches: [main]");
});
test("a repository with no workflow pushes exactly as it always did", () => {
  const s = sandbox({});
  eq(s.T.runCount(), 0);
  has(s.T.out(), "new branch", "the push itself still works");
  lacks(s.T.out(), "workflow", "and says nothing about workflows");
});
test("a workflow outside .github/workflows is never read", () => {
  const s = sandbox({}, { files: { "ci.yml": BASIC } });
  eq(s.T.runCount(), 0, "a workflow in the repo root does not count");
});
test("the sha the run reports is the commit that was pushed", () => {
  const s = sandbox({ "ci.yml": BASIC });
  const r = s.T.lastRun();
  ok(/^[0-9a-f]{40}$/.test(r.sha), "got " + r.sha);
  has(s.T.jobLog("test"), r.sha.slice(0, 7), "checkout should name the short sha");
});

/* ---------- the fresh machine: the rule the course hangs on ---------- */

test("without actions/checkout the machine is empty", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - run: npm test
`});
  const r = s.T.lastRun();
  eq(r.conclusion, "failure", "npm test cannot work with no repository on the machine");
  eq(s.T.job("test").checkedOut, false);
  has(s.T.jobLog("test"), "ENOENT", "npm should not find a package.json");
});
test("with actions/checkout the repository is there", () => {
  const s = sandbox({ "ci.yml": BASIC });
  eq(s.T.lastRun().conclusion, "success");
  eq(s.T.job("test").checkedOut, true);
  has(s.T.jobLog("test"), "all tests passed");
});
test("checkout brings the working tree but not .git", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: ls -a
`});
  const log = s.T.jobLog("test");
  has(log, "package.json");
  lacks(log, ".git\n", "the repository metadata is not part of the checkout");
});
test("a file written in one job is simply not there in the next", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: echo hello > note.txt
  use:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/checkout@v4
      - run: cat note.txt
`});
  eq(s.T.lastRun().conclusion, "failure");
  eq(s.T.job("build").conclusion, "success");
  eq(s.T.job("use").conclusion, "failure", "the second job got a fresh machine");
  has(s.T.jobLog("use"), "No such file");
});

/* ---------- jobs, needs and failure ---------- */

test("jobs with no needs all run", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  a:
    runs-on: ubuntu-latest
    steps:
      - run: echo A
  b:
    runs-on: ubuntu-latest
    steps:
      - run: echo B
`});
  eq(s.T.lastRun().jobs.length, 2);
  eq(s.T.job("a").conclusion, "success");
  eq(s.T.job("b").conclusion, "success");
});
test("needs orders jobs, and a failed dependency skips its dependents", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  first:
    runs-on: ubuntu-latest
    steps:
      - run: exit 1
  second:
    runs-on: ubuntu-latest
    needs: first
    steps:
      - run: echo never
`});
  eq(s.T.job("first").conclusion, "failure");
  eq(s.T.job("second").conclusion, "skipped");
  eq(s.T.job("second").skippedBy, "first");
  eq(s.T.lastRun().conclusion, "failure");
});
test("a failing step stops the job and the steps after it do not run", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: one
        run: echo one
      - name: two
        run: exit 3
      - name: three
        run: echo three
`});
  const j = s.T.job("test");
  eq(j.conclusion, "failure");
  eq(j.steps.map(x => x.conclusion), ["success", "failure", "skipped"]);
  lacks(s.T.jobLog("test"), "three", "the step after the failure never ran");
});
test("continue-on-error keeps the job green", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: flaky
        run: exit 1
        continue-on-error: true
      - name: after
        run: echo still running
`});
  eq(s.T.job("test").conclusion, "success");
  has(s.T.jobLog("test"), "still running");
});
test("if: failure() runs a step only when something broke", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - run: exit 1
      - name: report
        if: failure()
        run: echo the build broke
`});
  has(s.T.jobLog("test"), "the build broke");
  eq(s.T.job("test").conclusion, "failure", "reporting the failure does not un-fail it");
});

/* ---------- matrix ---------- */

test("a matrix expands into one job per value", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [18, 20, 22]
    steps:
      - uses: actions/checkout@v4
      - run: echo testing on node \${{ matrix.node }}
`});
  eq(s.T.lastRun().jobs.length, 3);
  const log = s.T.runLog();
  has(log, "testing on node 18");
  has(log, "testing on node 20");
  has(log, "testing on node 22");
});
test("one failing matrix cell fails the job", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [18, 20]
    steps:
      - run: echo \${{ matrix.node }} | grep -q 20
`});
  eq(s.T.lastRun().conclusion, "failure");
  const cells = s.T.lastRun().jobs;
  eq(cells.filter(j => j.conclusion === "failure").length, 1, "only the 18 cell fails");
});

/* ---------- cache vs artifact: the distinction the course grades ---------- */

test("an artifact moves a file to another job in the same run", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist
  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/download-artifact@v4
        with:
          name: dist
      - run: cat app.js
`});
  eq(s.T.lastRun().conclusion, "success");
  ok(s.T.artifact("dist"), "the artifact should exist");
  has(s.T.jobLog("deploy"), "built", "the built file arrived in the second job");
});
test("uploading an artifact that does not exist fails loudly", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist
`});
  eq(s.T.lastRun().conclusion, "failure");
  has(s.T.jobLog("build"), "No files were found");
});
test("downloading an artifact nobody uploaded fails loudly", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/download-artifact@v4
        with:
          name: dist
`});
  eq(s.T.lastRun().conclusion, "failure");
  has(s.T.jobLog("deploy"), "Unable to find an artifact");
});
test("a cache misses on the first run and hits on the second", () => {
  const WF = `name: CI
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/cache@v4
        with:
          path: node_modules
          key: deps-v1
      - run: npm ci
`;
  const s = sandbox({ "ci.yml": WF }, {
    script: 'git push -u origin main\necho second > second.txt\ngit add .\ngit commit -m second\ngit push'
  });
  eq(s.T.runCount(), 2, "two pushes, two runs");
  has(s.T.run(1).jobs[0].steps[1].out, "Cache not found", "first run misses");
  has(s.T.run(2).jobs[0].steps[1].out, "Cache restored", "second run hits");
  eq(s.T.cacheKeys(), ["deps-v1"]);
});
test("a cache key is immutable, so a stale entry keeps coming back", () => {
  /* The honest reason a cache is not an artifact. A cache saved by one job IS
     visible to a later job — that part works. What bites is that the key is
     write-once: once `dist-cache` holds v1, a later run that builds v2 will
     not replace it, and anything trusting the cache gets yesterday's build. */
  const WF = `name: CI
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/cache@v4
        with:
          path: dist
          key: dist-cache
      - run: npm run build
`;
  const pkg = JSON.stringify({
    name: "shop", version: "1.0.0",
    scripts: { build: "mkdir -p dist && cat src/version.txt > dist/app.js" }
  }) + "\n";
  const s = sandbox({ "ci.yml": WF }, {
    pkg: pkg,
    files: { "src/version.txt": "v1\n" },
    script: 'git push -u origin main\necho v2 > src/version.txt\ngit add .\ngit commit -m v2\ngit push'
  });
  eq(s.T.runCount(), 2);
  eq(s.T.run(1).conclusion, "success");
  eq(s.T.run(2).conclusion, "success");
  has(s.T.run(2).jobs[0].steps[1].out, "Cache restored", "run 2 gets a hit on the same key");
  const cached = s.T.cache("dist-cache");
  ok(cached, "the cache entry should exist");
  eq(cached.files[0].text, "v1\n", "and it is STILL v1 — the key was never rewritten");
});

/* ---------- secrets ---------- */

test("a secret resolves but is masked in the log", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - run: echo \${{ secrets.API_TOKEN }}
`}, { setup: "gh secret set API_TOKEN --body sk-live-abc123" });
  const log = s.T.jobLog("test");
  lacks(log, "sk-live-abc123", "the value must never reach the log");
  has(log, "***");
  eq(s.T.secretNames(), ["API_TOKEN"]);
});
test("a secret is masked even when it is transformed into an env var first", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - env:
          TOKEN: \${{ secrets.API_TOKEN }}
        run: echo "token is $TOKEN"
`}, { setup: "gh secret set API_TOKEN --body sk-live-abc123" });
  lacks(s.T.jobLog("test"), "sk-live-abc123");
  has(s.T.jobLog("test"), "***");
});
test("a secret that was never set expands to nothing", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - run: echo "[\${{ secrets.NOPE }}]"
`});
  has(s.T.jobLog("test"), "[]");
});

/* ---------- the gate ---------- */

test("a required check blocks the merge until it passes", () => {
  const FAIL = `name: CI
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - run: exit 1
`;
  const s = sandbox({ "ci.yml": FAIL }, {
    setup: "gh protect main test",
    script: "git push -u origin main\ngh pr merge main"
  });
  const merge = s.res.transcript.find(t => /gh pr merge/.test(t.cmd));
  ok(merge.code !== 0, "the merge must be refused");
  has(merge.err, "required checks have not succeeded");
  has(merge.err, "test (failing)");
});
test("the same merge goes through once the check is green", () => {
  const s = sandbox({ "ci.yml": BASIC }, {
    setup: "gh protect main test",
    script: "git push -u origin main\ngh pr merge main"
  });
  const merge = s.res.transcript.find(t => /gh pr merge/.test(t.cmd));
  eq(merge.code, 0);
  has(merge.out, "Merged");
});
test("a required check nobody reports blocks too", () => {
  const s = sandbox({ "ci.yml": BASIC }, {
    setup: "gh protect main typecheck",
    script: "git push -u origin main\ngh pr merge main"
  });
  const merge = s.res.transcript.find(t => /gh pr merge/.test(t.cmd));
  ok(merge.code !== 0);
  has(merge.err, "expected");
});

/* ---------- broken workflow files ---------- */

test("a workflow with no jobs is reported, not silently ignored", () => {
  const s = sandbox({ "ci.yml": "name: CI\non: push\n" });
  eq(s.T.runCount(), 0);
  const wf = s.T.workflows()[0];
  has(wf.error, "jobs");
});
test("a job with no runs-on is reported", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  test:
    steps:
      - run: echo hi
`});
  has(s.T.workflows()[0].error, "runs-on");
});
test("a step with neither uses nor run is reported", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: does nothing
`});
  has(s.T.workflows()[0].error, "either uses or run");
});
test("needs pointing at a job that does not exist is reported", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    needs: nope
    steps:
      - run: echo hi
`});
  has(s.T.workflows()[0].error, "unknown job");
});
test("an action that does not exist fails the job honestly", () => {
  const s = sandbox({
    "ci.yml": `name: CI
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/does-not-exist@v1
`});
  eq(s.T.lastRun().conclusion, "failure");
  has(s.T.jobLog("test"), "Unable to resolve action");
});

/* ---------- gh, the reading tool ---------- */

test("gh run list and view report what happened", () => {
  const s = sandbox({ "ci.yml": BASIC }, { script: "git push -u origin main\ngh run list\ngh run view --log" });
  const list = s.res.transcript.find(t => t.cmd === "gh run list");
  has(list.out, "success");
  has(list.out, "CI");
  const view = s.res.transcript.find(t => /gh run view/.test(t.cmd));
  has(view.out, "✓ test");
  has(view.out, "all tests passed", "--log should include what the steps printed");
});
test("gh workflow list names an invalid workflow and why", () => {
  const s = sandbox({ "ci.yml": "name: CI\non: push\n" }, { script: "gh workflow list" });
  const out = s.res.transcript[0].out;
  has(out, "invalid");
  has(out, "jobs");
});

/* ---------- the other engines still work ---------- */

test("cisim does not disturb a plain git repository", () => {
  const fs = SH.createFS({ "/home/you/p/a.txt": "one\n" });
  const r = SH.run(fs, 'git init\ngit add .\ngit commit -m one\ngit log --oneline', { cwd: "/home/you/p" });
  const log = r.transcript[r.transcript.length - 1];
  eq(log.code, 0);
  has(log.out, "one");
});
test("npm test is an alias for npm run test, and npm run still works", () => {
  const fs = SH.createFS({ "/home/you/p/package.json": PKG });
  const r = SH.run(fs, "npm test\nnpm run lint", { cwd: "/home/you/p" });
  has(r.transcript[0].out, "all tests passed");
  has(r.transcript[1].out, "no lint errors");
});
test("a snapshot carries CI state alongside git's and docker's", () => {
  const s = sandbox({ "ci.yml": BASIC });
  const snap = CI.snapshot(s.fs);
  ok(snap.ci, "the snapshot should include the CI server");
  eq(snap.ci.runs.length, 1);
});

console.log(`cisim: ${passed} passed, ${failures.length} failed`);
failures.forEach(f => console.log("  ✗ " + f));
process.exit(failures.length ? 1 : 0);
