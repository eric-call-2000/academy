/* CI/CD Pipelines — Unit 2: Stages and gates */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var PKG = L(
    "{",
    "  \"name\": \"shop\",",
    "  \"version\": \"1.0.0\",",
    "  \"scripts\": {",
    "    \"lint\": \"true\",",
    "    \"test\": \"false\",",
    "    \"build\": \"cp -r src dist\"",
    "  }",
    "}",
    "");
  var PKG_GREP = L(
    "{",
    "  \"name\": \"shop\",",
    "  \"scripts\": { \"test\": \"grep -q ok note.txt\" }",
    "}",
    "");
  var STAGED_START = L(
    "# lint, test and build. Right now build runs even when the tests fail —",
    "# add `needs:` so a job waits for the ones it depends on.",
    "name: CI",
    "on:",
    "  push:",
    "    branches: [main]",
    "jobs:",
    "  lint:",
    "    runs-on: ubuntu-latest",
    "    steps: [ { run: npm run lint } ]",
    "  test:",
    "    runs-on: ubuntu-latest",
    "    # needs: ____",
    "    steps: [ { run: npm test } ]",
    "  build:",
    "    runs-on: ubuntu-latest",
    "    # needs: ____",
    "    steps: [ { run: npm run build } ]",
    "");
  var STAGED_DONE = L(
    "name: CI",
    "on:",
    "  push:",
    "    branches: [main]",
    "jobs:",
    "  lint:",
    "    runs-on: ubuntu-latest",
    "    steps: [ { run: npm run lint } ]",
    "  test:",
    "    runs-on: ubuntu-latest",
    "    needs: lint",
    "    steps: [ { run: npm test } ]",
    "  build:",
    "    runs-on: ubuntu-latest",
    "    needs: test",
    "    steps: [ { run: npm run build } ]",
    "");
  var PR_CI = L(
    "name: CI",
    "on: { push: {} }",
    "jobs:",
    "  test:",
    "    runs-on: ubuntu-latest",
    "    steps:",
    "      - uses: actions/checkout@v4",
    "      - run: npm test",
    "");

  window.CODELAB.addUnit("cicd", {
    id: "cicd-u2",
    title: "Stages and gates",
    icon: "🚦",
    blurb: "Lint, then test, then build — and nothing merges until they're all green. Ordering jobs with needs, why a failed job skips the ones that depend on it, and branch protection that blocks a merge behind a red check.",
    cheat: [
      { h: "needs orders jobs", lang: "sh", code: L(
        "jobs:",
        "  test:  { needs: lint,  … }   # waits for lint",
        "  build: { needs: test,  … }   # waits for test",
        "# a needed job that FAILS -> the dependent job is SKIPPED"),
        note: "Without needs, jobs run in parallel. `needs` makes one wait for another, and if the needed job fails, the dependent one is skipped — so you never build or deploy on a red test." },
      { h: "The green-but-broken trap", lang: "sh", code: L(
        "- run: npm test",
        "  continue-on-error: true   # a failing step does NOT fail the job",
        "# the job is 'green' while the test is actually failing"),
        note: "continue-on-error lets the pipeline pass even though a step failed. Occasionally useful, usually a trap: a green pipeline that isn't really checking anything. Read the run, not just the colour." },
      { h: "Branch protection", lang: "text", code: L(
        "main requires the `test` check to pass",
        "PR from a branch whose test is RED  -> merge blocked",
        "fix it, push, test goes green        -> merge allowed"),
        note: "Branch protection makes a green check a condition of merging. The pipeline stops being advisory and becomes a gate: a red required check cannot be merged into main." }
    ],
    lessons: [

      {
        id: "cicd-u2-1",
        title: "needs: don't build on a red test",
        kind: "shell", chip: "CICD", xp: 20, mins: 16,
        cwd: "/home/you/project",
        fs: {
          "/home/you/project/package.json": PKG,
          "/home/you/project/src/app.js": "console.log('app');\n"
        },
        setup: L(
          "git init -q -b main",
          "git add -A",
          "git commit -qm 'initial project'",
          "git init -q --bare /srv/origin.git",
          "git remote add origin /srv/origin.git",
          "git push -u origin main"),
        brief: "This pipeline has three jobs — **lint**, **test**, **build** — but no ordering, so they run in parallel. Right now the **test is failing**, yet `build` runs anyway and produces a build from broken code. That's backwards: a build should only happen once the tests pass.\n\nFix it with **`needs`**. A job with `needs: X` waits for job `X`, and if `X` **fails**, the dependent job is **skipped**. Edit `.github/workflows/ci.yml` so `test` needs `lint` and `build` needs `test`. Then commit and push.\n\nBecause the test is red, `build` should end up **skipped** — the point of the gate. The checkpoints read the run.",
        example: { lang: "sh", code: "# after adding needs: to ci.yml\ngit commit -am \"Order the jobs\"\ngit push\n\n# ▸ CI · push to main — FAILED\n#   ✓ lint\n#   ✗ test\n#   - build (skipped)" },
        steps: [
          { text: "Add `needs` to the workflow, then commit and push it.",
            test: L(
              "T.expect(T.ran(/git\\s+push/), 'Commit your edited workflow and push it.');",
              "T.expect(T.lastRun(), 'No run yet — commit .github/workflows/ci.yml and push.');") },
          { text: "`build` is skipped because the failing `test` gates it.",
            test: L(
              "var r = T.lastRun();",
              "T.eq(r.jobs.lint.status, 'success', 'lint should pass.');",
              "T.eq(r.jobs.test.status, 'failure', 'test should be failing (that is the point — it gates build).');",
              "T.eq(r.jobs.build.status, 'skipped', 'build should be SKIPPED. Give it `needs: test` so a red test stops it.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# Edit ci.yml to add needs:, then:",
            "# 1) commit the change",
            "",
            "# 2) push it",
            "",
            "") },
          { name: ".github/workflows/ci.yml", content: STAGED_START }
        ],
        hints: [
          "Under the test job, add a line `needs: lint` (aligned with runs-on and steps).",
          "Under the build job, add `needs: test`.",
          "Then in commands.sh: `git commit -am \"Order the jobs\"` and `git push`. build should come back skipped."
        ],
        solution: {
          "commands.sh": L("git commit -am \"Order the jobs\"", "git push", ""),
          ".github/workflows/ci.yml": STAGED_DONE
        }
      },

      {
        id: "cicd-u2-2",
        title: "Branch protection: a red check blocks the merge",
        kind: "shell", chip: "CICD", xp: 20, mins: 17,
        cwd: "/home/you/project",
        ci: { protection: { main: { requiredChecks: ["test"] } } },
        fs: {
          "/home/you/project/package.json": PKG_GREP,
          "/home/you/project/.github/workflows/ci.yml": PR_CI,
          "/home/you/project/note.txt": "todo\n"
        },
        setup: L(
          "git init -q -b main",
          "git add -A",
          "git commit -qm 'initial project'",
          "git init -q --bare /srv/origin.git",
          "git remote add origin /srv/origin.git",
          "git push -u origin main",
          "git checkout -b feature",
          "git push -u origin feature"),
        brief: "`main` is **protected**: it requires the `test` check to pass before anything merges. You're on a `feature` branch whose test is **red** (the test wants `note.txt` to contain `ok`, and it says `todo`).\n\nOpen a pull request and you'll find the merge is **blocked** while the check is red — that's branch protection turning the pipeline into a gate. Get it green, then merge:\n\n1. fix `note.txt` so the test passes, then commit and push (the push reruns the check on `feature`)\n2. open the PR: `gh pr create -B main -H feature --title \"Fix note\"`\n3. merge it: `gh pr merge feature --squash`\n\nThe checkpoint confirms the branch actually merged — which only happens once the required check is green.",
        example: { lang: "sh", code: "echo \"ok\" > note.txt\ngit commit -am \"Fix note\"\ngit push\ngh pr create -B main -H feature --title \"Fix note\"\ngh pr merge feature --squash" },
        steps: [
          { text: "Get the `feature` check green: fix `note.txt`, commit and push.",
            test: L(
              "T.expect(T.ran(/git\\s+push/), 'Push your fix so the check reruns on feature.');",
              "var r = T.lastRun();",
              "T.expect(r && r.ref === 'refs/heads/feature', 'The latest run should be on your feature branch.');",
              "T.eq(r.jobs.test.status, 'success', 'The test must pass on feature before it can be merged. Set note.txt to ok.');") },
          { text: "Open the PR and merge it — allowed now that the required check is green.",
            test: L(
              "T.expect(T.ran(/gh\\s+pr\\s+create/), 'Open the pull request with gh pr create -B main -H feature.');",
              "T.expect(T.ran(/gh\\s+pr\\s+merge/), 'Merge it with gh pr merge feature.');",
              "T.eq(T.merged('feature'), true, 'The feature branch should be merged. A merge is only allowed once the required test check is green.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# main requires the `test` check. Your feature check is red.",
            "# 1) fix note.txt so the test passes:",
            "",
            "# 2) commit and push (reruns the check on feature):",
            "",
            "# 3) open a PR from feature into main:",
            "",
            "# 4) merge it (allowed once test is green):",
            "",
            "") }
        ],
        hints: [
          "`echo \"ok\" > note.txt`, then `git commit -am \"Fix note\"`, then `git push`.",
          "Open the PR: `gh pr create -B main -H feature --title \"Fix note\"`.",
          "Merge: `gh pr merge feature --squash`. If it's refused, the check isn't green yet."
        ],
        solution: {
          "commands.sh": L(
            "echo \"ok\" > note.txt",
            "git commit -am \"Fix note\"",
            "git push",
            "gh pr create -B main -H feature --title \"Fix note\"",
            "gh pr merge feature --squash",
            "")
        }
      },

      {
        id: "cicd-u2-3",
        title: "The green-but-broken trap",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "A pipeline's colour is only as honest as its steps. One setting quietly breaks that: **`continue-on-error: true`** on a step means *if this step fails, don't fail the job.* The step can go red while the job — and the whole pipeline — stays **green**.\n\nIt has real uses (an optional upload, a flaky nice-to-have), but on a **test** step it's a trap: the pipeline says green, the tests are actually failing, and a broken change sails through. The lesson: trust the **run**, not just the colour — read which steps actually passed.",
            ask: { type: "pick",
              q: "A test step has `continue-on-error: true` and the tests fail. What does the pipeline show?",
              choices: [
                "Red, because the underlying test step itself has clearly failed to pass",
                "Green, because continue-on-error stops that failure from failing the job",
                "Grey, because the result of the job is treated as completely unknown",
                "It refuses to run the job at all until the setting is first removed"
              ],
              answer: 1,
              why: [
                "The step is red, but continue-on-error keeps that from failing the job.",
                "Right: the job stays green even though the test step failed — the trap.",
                "The job has a definite result (green); nothing is left unknown.",
                "The job runs fine; the setting just changes how a failure is treated."
              ] } },

          { read: "This is why teams add **branch protection** on top of the pipeline. A green pipeline is advisory; a *required check* is a **gate**. Protection says \"main requires the `test` check to pass,\" so a pull request whose check is red simply cannot be merged — no override by a hurried human.\n\nGates and ordering work together: `needs` stops a job running on a broken earlier one, and required checks stop a broken branch reaching main.",
            ask: { type: "pick", transfer: true,
              q: "What does making `test` a required check on `main` actually enforce?",
              choices: [
                "Every single push to any branch in the whole repository must run the test job",
                "A pull request into main can't merge unless its test check is green",
                "The test job is automatically added into every other workflow that exists",
                "The tests are rewritten to always pass so that main is never blocked at all"
              ],
              answer: 1,
              why: [
                "It gates merges into main, not every push everywhere.",
                "Right: a red required check blocks the merge into main — the pipeline becomes a gate.",
                "It doesn't inject jobs into other workflows; it gates the merge.",
                "It never changes your tests; it just requires them to be green to merge."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "job `build` has `needs: test`, and the `test` job fails. What is `build`'s status — success, failure, or skipped? Type one word.",
              answer: "skipped",
              why: "A job whose needed job failed does not run at all; it is skipped. That's how needs keeps a build off a red test." } },

          { ask: { type: "explain",
              q: "Why is a green pipeline not always enough, and what makes a check actually enforce quality?",
              model: "A green pipeline can be misleading: a step marked continue-on-error can fail while the job still reports green, so the colour doesn't prove the tests passed — you have to read the run. What actually enforces quality is branch protection making the check required: a required check that's red blocks the merge into main, so a broken branch can't get in even if someone tries. Combined with needs, which skips a job when the one it depends on failed, the pipeline becomes a real gate rather than advice.",
              rubric: [
                "Says continue-on-error can make a job green despite a failed step (read the run)",
                "Says a required check (branch protection) blocks the merge when red",
                "Mentions needs skipping dependent jobs / the pipeline as a gate"
              ] } }
        ]
      },

      {
        id: "cicd-quiz-2",
        title: "Unit 2 quiz: Stages and gates",
        kind: "quiz", xp: 10,
        brief: "needs ordering, skipped jobs, continue-on-error, and branch protection. 80% to pass.",
        questions: [
          { q: "job `build` has `needs: test`, and `test` fails. What happens to `build`?",
            choices: ["It runs anyway on the last good code", "It is skipped", "It runs but is marked green", "It restarts the test job first"],
            answer: 1, explain: "A job whose needed job failed is skipped — so you never build or deploy on a red test." },
          { q: "Without any `needs`, how do a workflow's jobs run relative to each other?",
            choices: ["Strictly one after another in the order written", "In parallel", "Only the first job ever runs at all", "In a random order chosen fresh each run"],
            answer: 1, explain: "Jobs run in parallel by default; `needs` is what introduces ordering and dependencies." },
          { q: "A test step has `continue-on-error: true` and the tests fail. The pipeline is…",
            choices: ["Red, because a failed step always fails the whole run", "Green, because that step's failure doesn't fail the job", "Unable to finish running the rest of the pipeline", "Automatically retried until the tests finally pass"],
            answer: 1, explain: "continue-on-error keeps a failed step from failing the job — a green pipeline that isn't really checking. Read the run." },
          { q: "What does branch protection with a required `test` check enforce?",
            choices: ["That the tests are rewritten so they can never fail again", "That a PR into the protected branch can't merge while the check is red", "That every branch in the repo runs the test job on each push", "That the test job always runs before every other job everywhere"],
            answer: 1, explain: "A required check gates the merge: a red check on the PR blocks merging into the protected branch." },
          { q: "Why prefer a required check over just telling the team \"don't merge red PRs\"?",
            choices: ["A machine-enforced gate can't be skipped by a hurried human", "Required checks make the whole pipeline run noticeably faster each time", "It removes the need to write any tests for the project at all", "It automatically fixes whatever made the check go red in the first place"],
            answer: 0, explain: "Protection turns a convention into an enforced gate — the red PR simply can't be merged." }
        ]
      }
    ]
  });
})();
