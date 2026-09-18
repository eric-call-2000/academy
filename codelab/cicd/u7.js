/* CI/CD Pipelines — Unit 7: Reading a red run */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var PKG = L(
    "{",
    "  \"name\": \"shop\",",
    "  \"scripts\": {",
    "    \"lint\": \"true\",",
    "    \"test\": \"grep -q SHIPPED status.txt\",",
    "    \"build\": \"cp -r src dist\"",
    "  }",
    "}",
    "");
  var CI = L(
    "name: CI",
    "on:",
    "  push:",
    "    branches: [main]",
    "jobs:",
    "  lint:  { runs-on: ubuntu-latest, steps: [ { run: npm run lint } ] }",
    "  test:  { runs-on: ubuntu-latest, needs: lint, steps: [ { uses: actions/checkout@v4 }, { run: npm test } ] }",
    "  build: { runs-on: ubuntu-latest, needs: test, steps: [ { run: npm run build } ] }",
    "");

  window.CODELAB.addUnit("cicd", {
    id: "cicd-u7",
    title: "Reading a red run",
    icon: "🔎",
    blurb: "A red pipeline is a diagnosis waiting to be read. Triage a failed run top-down to the exact step and exit code, tell a real failure from a flaky one, and order and cache a pipeline so it's fast enough to trust.",
    cheat: [
      { h: "Triage top-down", lang: "text", code: L(
        "1. which JOB is red?     (✗ next to its name)",
        "2. which STEP failed?    (the first ✗ step)",
        "3. read its exit + log   (what the command said)",
        "don't guess — the run tells you exactly where"),
        note: "A run is a tree: workflow → jobs → steps. Find the red job, then the first failing step, then read its output. The Debugging course's \"read the error first\" applies to pipelines too." },
      { h: "Flaky ≠ fixed", lang: "text", code: L(
        "flaky test: passes or fails with NO code change",
        "\"just re-run it until it's green\"  -> hides a real bug",
        "fix the flakiness (a race, a timeout), don't paper over it"),
        note: "A test that fails intermittently is a bug in the test or the code, not bad luck. Re-running until green trains the team to ignore red — the pipeline stops meaning anything." },
      { h: "Fast enough to trust", lang: "text", code: L(
        "cheap checks first (lint) — fail fast",
        "cache the slow, stable parts (deps)",
        "run independent jobs in parallel",
        "a 40-minute pipeline gets skipped; a 4-minute one gets read"),
        note: "Order jobs so a quick lint fails before a slow test suite runs, cache what's stable, and parallelize. A pipeline nobody waits for is a pipeline nobody trusts." }
    ],
    lessons: [

      {
        id: "cicd-u7-1",
        title: "Triage a failed run",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "A red pipeline isn't a mystery — it's a **tree you read top-down**. A run has **jobs**; each job has **steps**; each step ran a command with an **exit code**. To find the cause:\n\n1. which **job** is red? (the one with a ✗)\n2. which **step** in it failed? (the first ✗ step — steps after it didn't run)\n3. read that step's **exit code and output** — the command told you what went wrong.\n\nThis is the Debugging course's \"read the error before you touch the code,\" applied to a pipeline. Don't guess and re-push; the run already says exactly where it broke.",
            ask: { type: "pick",
              q: "A run is red. What's the first thing to look at?",
              choices: [
                "Re-run the whole pipeline again and hope that it passes the second time",
                "Which job is red, then which step in it failed and what it printed",
                "The most recent commit's diff, line by line, before opening the run at all",
                "The other green pipelines on different branches, to compare them side by side"
              ],
              answer: 1,
              why: [
                "Re-running without reading is the anti-pattern; the run already has the answer.",
                "Right: find the red job, its first failing step, and read the exit code and output.",
                "The diff might help later, but the run tells you which check failed first.",
                "Other branches' runs don't explain why this one failed."
              ] } },

          { read: "One detail saves confusion: within a job, a failing step **stops the ones after it**. So the *first* red step is the cause; later steps show as not-run, not as separate failures. And a job that depends on a failed job is **skipped**, not failed — so a wall of skipped jobs usually points back to one real failure upstream.\n\nRead upward from the first ✗: one failing command is often the whole story, and everything downstream is just its shadow.",
            ask: { type: "pick", transfer: true,
              q: "A run shows: lint ✓, test ✗, build (skipped). Where's the actual problem?",
              choices: [
                "In build, since it didn't run and is therefore the most broken part here",
                "In the test job — build is only skipped because test, which it needs, failed",
                "In lint, because it ran first and everything after it must depend on it",
                "Split evenly across all three jobs, so all of them need investigating equally"
              ],
              answer: 1,
              why: [
                "build is skipped (a shadow), not broken — it never ran.",
                "Right: test is the real failure; build is skipped because its needed job failed.",
                "lint passed, so it isn't the cause.",
                "Only test is red; the others are a pass and a skip."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "In a single job, the third step fails (exit 1). Do the fourth and fifth steps run? Type yes or no.",
              answer: "no",
              why: "A failing step stops the rest of the job, so the steps after it don't run. The first red step is the cause to read." } },

          { ask: { type: "explain",
              q: "How do you find the cause of a red pipeline?",
              model: "Read the run top-down: find the job that's red, then the first step in it that failed, then read that step's exit code and output — the command told you what broke. A failing step stops the steps after it, and jobs that depend on a failed job are skipped, so one real failure often shows up as a red job plus a trail of skipped ones. Follow it back to the first ✗ instead of guessing or re-running.",
              rubric: [
                "Says find the red job, then the first failing step, then read its exit/output",
                "Notes a failing step stops later steps / dependent jobs are skipped",
                "Says read the run rather than guessing or blindly re-running"
              ] } }
        ]
      },

      {
        id: "cicd-u7-2",
        title: "Read it, then fix it",
        kind: "shell", chip: "CICD", xp: 20, mins: 15,
        cwd: "/home/you/project",
        fs: {
          "/home/you/project/package.json": PKG,
          "/home/you/project/.github/workflows/ci.yml": CI,
          "/home/you/project/src/app.js": "console.log('app');\n",
          "/home/you/project/status.txt": "PENDING\n"
        },
        setup: L(
          "git init -q -b main",
          "git add -A",
          "git commit -qm 'initial project'",
          "git init -q --bare /srv/origin.git",
          "git remote add origin /srv/origin.git",
          "git push -u origin main"),
        brief: "The pipeline is **red**, and it has three jobs: `lint`, `test`, `build`. Your job is to read the run, find the **one** job that actually failed, and fix it.\n\nHere, `lint` passes and `build` is only skipped because it needs `test`. The real failure is **`test`**: the project's test checks that `status.txt` says `SHIPPED`, but it says `PENDING`, so `npm test` exits non-zero.\n\nFix `status.txt`, commit and push. The checkpoints confirm the once-red `test` job is green and the whole pipeline passes.",
        example: { lang: "sh", code: "echo \"SHIPPED\" > status.txt\ngit commit -am \"Mark shipped\"\ngit push\n\n# ▸ CI · push to main — passed\n#   ✓ lint\n#   ✓ test\n#   ✓ build" },
        steps: [
          { text: "Fix the failing job's cause, then commit and push.",
            test: L(
              "T.expect(T.ran(/git\\s+push/), 'Commit your fix and push it so the pipeline reruns.');",
              "T.expect(T.lastRun(), 'No new run yet — commit and push your fix.');") },
          { text: "The `test` job is green now, and so is the whole pipeline.",
            test: L(
              "var r = T.lastRun();",
              "T.eq(r.jobs.test.status, 'success', 'test is still failing. It greps status.txt for SHIPPED — set status.txt to SHIPPED.');",
              "T.eq(r.jobs.build.status, 'success', 'build should run and pass once test is green (it needs test).');",
              "T.eq(r.status, 'success', 'The whole pipeline should be green.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# The pipeline is red. Read the run: which job failed?",
            "# 1) fix its cause (status.txt should say SHIPPED):",
            "",
            "# 2) commit and push:",
            "",
            "") }
        ],
        hints: [
          "Only `test` failed — lint passed and build was skipped because it needs test.",
          "`echo \"SHIPPED\" > status.txt` fixes what the test checks.",
          "Then `git commit -am \"...\"` and `git push`. All three jobs should go green."
        ],
        solution: {
          "commands.sh": L("echo \"SHIPPED\" > status.txt", "git commit -am \"Mark shipped\"", "git push", "")
        }
      },

      {
        id: "cicd-u7-3",
        title: "Flaky tests and slow pipelines",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "Some runs fail for a reason that isn't in your change: a **flaky** test — one that **passes or fails without any code change**, usually because of a race condition, a timeout that's too tight, or a dependence on timing or order.\n\nThe tempting \"fix\" is to **re-run until it's green**. That's a trap. It hides a real bug (flakiness is a defect in the test or the code), and worse, it teaches the team that red doesn't really mean broken — so the day a *real* failure appears, everyone just clicks re-run.",
            ask: { type: "pick",
              q: "A test fails, you re-run with no changes, and it passes. What have you got?",
              choices: [
                "A fixed pipeline, since the second run came back completely green for you",
                "A flaky test — it's non-deterministic, which is a real bug to fix, not luck",
                "Proof that the very first run was simply a glitch that you can safely ignore",
                "A caching problem that clearing the dependency cache will reliably solve"
              ],
              answer: 1,
              why: [
                "Green-on-retry didn't fix anything; the flakiness is still there.",
                "Right: passing or failing with no change is flakiness — a defect to fix, not luck.",
                "A run that flips result without a change is a bug, not a glitch to ignore.",
                "Flakiness is usually a race or timing issue, not a stale cache."
              ] } },

          { read: "A pipeline also has to be **fast enough to trust**. A 40-minute pipeline gets bypassed and ignored; a 4-minute one gets read and respected. Three levers:\n\n- **cheap checks first** — run `lint` before the slow test suite, so an obvious mistake fails in seconds\n- **cache** the slow, stable parts (dependencies)\n- **parallelize** independent jobs instead of chaining them\n\nSpeed isn't vanity: a pipeline people actually wait for is one they actually use.",
            ask: { type: "pick", transfer: true,
              q: "Which change most helps a slow pipeline give feedback sooner?",
              choices: [
                "Run the slowest end-to-end suite first so it has the most possible time to finish",
                "Run the fast lint first, so an obvious mistake fails in seconds not minutes",
                "Remove the tests entirely so that the pipeline always finishes almost instantly",
                "Chain every job one after another so they never compete for any resources"
              ],
              answer: 1,
              why: [
                "Running the slowest thing first delays the fast feedback a lint gives.",
                "Right: cheap checks first fail fast, so obvious errors don't wait behind slow suites.",
                "Removing tests makes it fast and worthless — it no longer checks anything.",
                "Chaining independent jobs is slower than running them in parallel."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "A dependency install takes 3 minutes and the deps rarely change. What one thing removes that time from most runs? Type one word.",
              answer: "cache",
              accept: ["caching", "a cache"],
              why: "Caching the installed dependencies lets later runs restore them instead of reinstalling — the reinstall time disappears on a cache hit." } },

          { ask: { type: "pick", transfer: true,
              q: "Why does re-running a flaky test until it's green erode the whole pipeline?",
              choices: [
                "It uses up the monthly build minutes far faster than a normal green run would",
                "It teaches the team that a red run doesn't really mean broken, so real failures get ignored",
                "It permanently disables the failing test so it can never run again on any branch",
                "It makes the pipeline slower because each re-run adds more caching overhead each time"
              ],
              answer: 1,
              why: [
                "Cost is a minor issue next to the trust problem.",
                "Right: normalizing re-run-until-green makes red meaningless, so a real failure slips through.",
                "Re-running doesn't disable the test; it just reruns it.",
                "The erosion is about trust, not caching overhead."
              ] } }
        ]
      },

      {
        id: "cicd-quiz-7",
        title: "Unit 7 quiz: Reading a red run",
        kind: "quiz", xp: 10,
        brief: "Triaging a failure, flaky tests, and pipeline speed. 80% to pass.",
        questions: [
          { q: "A run shows lint ✓, test ✗, build (skipped). Where's the real problem?",
            choices: ["In build, since it didn't produce anything", "In the test job — build is skipped because it needs test", "In lint, since it ran first", "Spread across all three equally"],
            answer: 1, explain: "test is the failure; build is only skipped because its needed job failed. Read back to the first ✗." },
          { q: "Within one job, step 2 fails. What happens to steps 3 and 4?",
            choices: ["They run as normal after it", "They don't run — a failing step stops the rest", "They run but are marked skipped-green", "They run in parallel with step 2"],
            answer: 1, explain: "A failing step stops the job, so later steps don't run. The first red step is the cause." },
          { q: "A test fails, then passes on a re-run with no code change. What is it?",
            choices: ["Fixed — the green run is authoritative", "A flaky test, which is a real bug to fix", "A one-time glitch safe to ignore forever", "A sign the cache needs clearing"],
            answer: 1, explain: "Flipping result with no change is flakiness — a defect. Re-running until green hides it and erodes trust in red." },
          { q: "Why run a fast lint job before the slow test suite?",
            choices: ["Lint jobs are required by the YAML spec to come first", "So an obvious mistake fails in seconds instead of after a long wait", "Because lint and test can never run at the same time", "To make the overall pipeline take longer and be more thorough"],
            answer: 1, explain: "Cheap checks first give fast feedback — you don't wait through a slow suite to learn about a trivial error." },
          { q: "A pipeline takes 40 minutes and people have started bypassing it. Best first move?",
            choices: ["Delete the slowest tests so it finishes much faster", "Cache dependencies and parallelize independent jobs to cut the time", "Make the pipeline optional so nobody has to wait on it", "Re-run it fewer times per day to save build minutes"],
            answer: 1, explain: "Speed comes from caching stable parts and running independent jobs in parallel — not from removing checks or skipping the gate." }
        ]
      }
    ]
  });
})();
