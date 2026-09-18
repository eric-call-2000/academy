/* CI/CD Pipelines — Unit 1: What CI is, and your first workflow */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var PKG_TRUE = L(
    "{",
    "  \"name\": \"shop\",",
    "  \"version\": \"1.0.0\",",
    "  \"scripts\": { \"test\": \"true\", \"build\": \"cp -r src dist\" }",
    "}",
    "");
  var PKG_GREP = L(
    "{",
    "  \"name\": \"shop\",",
    "  \"version\": \"1.0.0\",",
    "  \"scripts\": { \"test\": \"grep -q 42 answer.txt\" }",
    "}",
    "");
  var CI_DONE = L(
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
    "");

  // Setup that establishes the repo on a bare remote. `git push -u origin main`
  // sets the upstream so the learner's later `git push` is a plain push.
  function SETUP(extra) {
    return L(
      "git init -q -b main",
      "git add -A",
      "git commit -qm 'initial project'",
      "git init -q --bare /srv/origin.git",
      "git remote add origin /srv/origin.git",
      "git push -u origin main",
      extra || "");
  }

  window.CODELAB.addUnit("cicd", {
    id: "cicd-u1",
    title: "What CI is, and your first workflow",
    icon: "🔄",
    blurb: "Continuous integration is the checklist you run before every merge, automated and triggered by a push. Write a real workflow, push it, and watch the pipeline go green — then red.",
    cheat: [
      { h: "The feedback loop", lang: "text", code: L(
        "you push  ->  the pipeline runs your checks  ->  green or red",
        "catch a broken build in 2 minutes on a push,",
        "not 2 days later when a teammate pulls it"),
        note: "CI runs your lint, tests and build automatically on every push. The value is the fast, honest signal: a red pipeline stops a broken change before it spreads." },
      { h: "A workflow file", lang: "sh", code: L(
        ".github/workflows/ci.yml",
        "on:      push        # WHEN it runs (an event)",
        "jobs:    test        # WHAT runs (one or more jobs)",
        "  steps:             # each job is a list of steps:",
        "    - uses: …        #   a prebuilt action, or",
        "    - run:  npm test #   a shell command"),
        note: "A workflow lives in .github/workflows/. `on` is the trigger, `jobs` are the units of work, and each job's `steps` are `uses:` (an action) or `run:` (a command). A non-zero exit fails the job." },
      { h: "Push triggers it", lang: "sh", code: L(
        "git add .github/workflows/ci.yml",
        "git commit -m \"Add CI\"",
        "git push               # this fires the pipeline"),
        note: "The workflow runs when its event happens — here, your push. The run's result is printed right after the push: ✓ for a green job, ✗ for a red one." }
    ],
    lessons: [

      {
        id: "cicd-u1-1",
        title: "Why continuous integration",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "Before continuous integration, teams merged their work together rarely — and every merge was a painful surprise of conflicts and broken builds nobody noticed for days. **Continuous integration (CI)** flips that: you integrate constantly, and a machine **checks every change automatically**.\n\nConcretely, CI is the boring checklist you'd run by hand before merging — install, lint, run the tests, build — turned into a **pipeline** that runs on its own every time you push. The point isn't the automation for its own sake; it's the **fast, honest signal**: within a couple of minutes, a push is green (safe) or red (broken).",
            ask: { type: "pick",
              q: "What is a CI pipeline, in one sentence?",
              choices: [
                "A tool that writes your tests and your code for you automatically",
                "The pre-merge checklist — install, lint, test, build — run automatically on every push",
                "A faster kind of version control that fully replaces git and its history",
                "A server that hosts the finished website once the whole project is done"
              ],
              answer: 1,
              why: [
                "CI runs your checks; it doesn't author your tests or code.",
                "That's exactly it: the checks you'd run by hand, automated and triggered by a push.",
                "CI runs on top of git; it doesn't replace version control.",
                "That's hosting/deployment; CI is about checking changes, though CD can deploy them."
              ] } },

          { read: "The value is **when** you find out. A bug caught the moment you push it is cheap: you still have the change in your head, nobody else has pulled it, and the pipeline tells you exactly which check failed. The same bug found two days later — after teammates built on top of it — is expensive to untangle.\n\nSo a pipeline that runs on every push turns \"it broke somewhere this week\" into \"your last push failed the test job.\" A red pipeline is a **stop sign** that keeps a broken change from spreading.",
            ask: { type: "pick", transfer: true,
              q: "Why is catching a broken test on the push that introduced it so much cheaper than catching it days later?",
              choices: [
                "Because tests always run faster immediately after a change is first pushed up",
                "Because the change is fresh and unshared, so it's isolated and quick to fix",
                "Because a broken test on an old change is impossible to find or fix at all",
                "Because the pipeline deletes any broken change automatically before anyone sees"
              ],
              answer: 1,
              why: [
                "Test speed doesn't depend on how recently you pushed.",
                "Right: it's fresh in your mind and nobody has built on it yet, so it's isolated.",
                "It's harder to untangle later, but not impossible — the point is cost, not possibility.",
                "The pipeline reports the failure; it doesn't delete your change."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "A pipeline runs your checks on every push and reports the result. If the tests fail, is the pipeline green or red? Type one word.",
              answer: "red",
              why: "A failing check turns the pipeline red — the stop sign that a change is broken. All checks passing is green." } },

          { ask: { type: "explain",
              q: "What does a CI pipeline do, and why does running it on every push matter?",
              model: "A CI pipeline automates the checklist you'd otherwise run by hand before merging — install, lint, test, build — and runs it on every push. Running it every push matters because it gives a fast, honest signal: a bug is caught while the change is fresh and unshared, when it's cheap to fix, instead of days later after others have built on it. A red pipeline stops a broken change from spreading.",
              rubric: [
                "Says a pipeline automates the pre-merge checks (lint/test/build)",
                "Says it runs automatically on every push",
                "Says the value is catching problems early/cheaply — a red pipeline stops a broken change"
              ] } }
        ]
      },

      {
        id: "cicd-u1-2",
        title: "Your first workflow",
        kind: "shell", chip: "CICD", xp: 20, mins: 16,
        cwd: "/home/you/project",
        fs: {
          "/home/you/project/package.json": PKG_TRUE,
          "/home/you/project/index.js": "console.log('shop');\n",
          "/home/you/project/src/app.js": "console.log('app');\n"
        },
        setup: SETUP(),
        brief: "The repo is on the remote, but nothing checks your pushes yet. You'll add a **workflow** so a `git push` runs the tests automatically.\n\nA workflow is a YAML file in **`.github/workflows/`**. It needs three things:\n\n- **`on:`** — the event that triggers it. Here, a `push` to `main`.\n- **`jobs:`** — the work to do. One job named **`test`**.\n- the job's **`steps:`** — `uses: actions/checkout@v4` to get your code, then `run: npm test`.\n\nFill in `.github/workflows/ci.yml` (the second tab), then in `commands.sh` **commit it and push**. Your push fires the pipeline, and it prints the result. The checkpoints read the **run**, not the YAML — a workflow that doesn't actually go green won't pass.",
        example: { lang: "sh", code: "git add .github/workflows/ci.yml\ngit commit -m \"Add CI workflow\"\ngit push\n\n# ▸ CI · push to main — passed\n#   ✓ test" },
        steps: [
          { text: "Commit `.github/workflows/ci.yml` and push it, so a pipeline runs.",
            test: L(
              "T.expect(T.ran(/git\\s+push/), 'Push your commit: git add, git commit, then git push.');",
              "T.expect(T.lastRun(), 'No pipeline ran on your push. Make sure .github/workflows/ci.yml is committed before you push.');") },
          { text: "Your push triggered the workflow, and the `test` job went green.",
            test: L(
              "T.eq(T.lastRun().event, 'push', 'The run should have been triggered by your push.');",
              "T.expect(T.lastRun().jobs.test, \"Your workflow needs a job named 'test'. Check the job name in ci.yml.\");",
              "T.eq(T.lastRun().jobs.test.status, 'success', 'The test job should be green. Read the run summary printed after your push.');",
              "T.eq(T.lastRun().status, 'success', 'The whole pipeline should be green.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# Fill in the ci.yml tab first, then:",
            "",
            "# 1) stage the workflow file",
            "",
            "# 2) commit it",
            "",
            "# 3) push — this fires the pipeline",
            "",
            "") },
          { name: ".github/workflows/ci.yml", content: L(
            "# A workflow that runs the tests on every push to main.",
            "# Fill in the blanks (keep the indentation — YAML cares about it).",
            "name: CI",
            "on:",
            "  push:",
            "    branches: [main]",
            "jobs:",
            "  test:",
            "    runs-on: ubuntu-latest",
            "    steps:",
            "      # 1) check out the code:",
            "      # 2) run the tests:",
            "") }
        ],
        hints: [
          "Under steps:, the first step gets your code: `- uses: actions/checkout@v4`.",
          "The second step runs the tests: `- run: npm test`. Keep each `- ` item aligned under steps:.",
          "In commands.sh: `git add .github/workflows/ci.yml`, then `git commit -m \"Add CI\"`, then `git push`."
        ],
        solution: {
          "commands.sh": L(
            "git add .github/workflows/ci.yml",
            "git commit -m \"Add CI workflow\"",
            "git push",
            ""),
          ".github/workflows/ci.yml": CI_DONE
        }
      },

      {
        id: "cicd-u1-3",
        title: "Red means stop",
        kind: "shell", chip: "CICD", xp: 20, mins: 15,
        cwd: "/home/you/project",
        fs: {
          "/home/you/project/package.json": PKG_GREP,
          "/home/you/project/.github/workflows/ci.yml": CI_DONE,
          "/home/you/project/answer.txt": "0\n"
        },
        setup: SETUP(),
        brief: "This repo already has the CI workflow from the last lesson, and **its pipeline is red.** The project's test checks that `answer.txt` holds the value `42`, but someone committed `0`, so `npm test` fails and the pipeline is failing.\n\nThat's CI doing its job: the broken change is caught, and a red pipeline says *stop*. Your task is to make it green. Fix `answer.txt` so the test passes, then commit and push — your push runs the pipeline again, and the summary should show `✓ test`.\n\nThe checkpoints read the run your push produced, so nothing but an actually-green pipeline will pass.",
        example: { lang: "sh", code: "echo \"42\" > answer.txt\ngit commit -am \"Fix answer\"\ngit push\n\n# ▸ CI · push to main — passed\n#   ✓ test" },
        steps: [
          { text: "Fix `answer.txt`, then commit and push so the pipeline runs again.",
            test: L(
              "T.expect(T.ran(/git\\s+push/), 'Commit your fix and push it so the pipeline reruns.');",
              "T.expect(T.lastRun(), 'No new run yet — commit your change and push.');") },
          { text: "Your push made the pipeline green: the `test` job passes.",
            test: L(
              "T.eq(T.lastRun().jobs.test.status, 'success', 'The test job is still failing. The test greps answer.txt for 42 — set answer.txt to 42.');",
              "T.eq(T.lastRun().status, 'success', 'The whole pipeline should be green now.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# The pipeline is red because answer.txt is wrong.",
            "# 1) fix answer.txt so it contains 42:",
            "",
            "# 2) commit the fix:",
            "",
            "# 3) push, and watch the pipeline go green:",
            "",
            "") }
        ],
        hints: [
          "Overwrite the file: `echo \"42\" > answer.txt`.",
          "Commit the change with `git commit -am \"Fix answer\"` (the -a stages tracked files).",
          "Then `git push`. The run summary after the push should read `✓ test`."
        ],
        solution: {
          "commands.sh": L(
            "echo \"42\" > answer.txt",
            "git commit -am \"Fix answer\"",
            "git push",
            "")
        }
      },

      {
        id: "cicd-quiz-1",
        title: "Unit 1 quiz: CI and your first workflow",
        kind: "quiz", xp: 10,
        brief: "What CI is, the workflow file, and the push trigger. 80% to pass.",
        questions: [
          { q: "What is a CI pipeline?",
            choices: [
              "A program that writes and maintains all of your project's tests for you",
              "The pre-merge checklist (lint, test, build) run automatically on every push",
              "A replacement for git that stores your project history more efficiently",
              "A hosting service that serves your website to real users in production"
            ],
            answer: 1, explain: "CI automates the checks you'd run by hand and triggers them on each push, giving a fast green/red signal." },
          { q: "Where does a GitHub Actions workflow file live?",
            choices: [".github/workflows/", "src/ci/", "the repository root as ci.json", "node_modules/.cache/"],
            answer: 0, explain: "Workflows are YAML files in .github/workflows/. Their `on:` key sets the trigger event." },
          { q: "In a workflow, what does the `on:` key control?",
            choices: [
              "Which operating system each of the jobs will run on during the pipeline",
              "The event that triggers the workflow, such as a push",
              "Whether the whole workflow is currently turned on or switched off",
              "The order that the individual steps inside a single job run in"
            ],
            answer: 1, explain: "`on:` is the trigger. `on: push` runs the workflow when you push; `runs-on:` is the OS." },
          { q: "A push runs the pipeline and the tests fail. What colour is the pipeline, and what should you do?",
            choices: [
              "Green — the pipeline ran successfully, so the change is safe to merge and ship",
              "Red — stop and fix the failing check before the broken change spreads",
              "Grey — the result is inconclusive, so just push again and hope it passes",
              "Blue — the tests are still running, so wait for them to finish first"
            ],
            answer: 1, explain: "A failing check is red — the stop sign. Fix it before others build on the broken change." },
          { q: "Why is catching a bug on the push that introduced it cheaper than catching it days later?",
            choices: [
              "The automated tests run measurably faster on a change that was only just pushed",
              "The change is fresh and unshared, so it's isolated and quick to fix",
              "A bug in older code can never actually be located or fixed by anyone again",
              "The pipeline quietly deletes the broken change so that nobody ever pulls it"
            ],
            answer: 1, explain: "Fresh, unshared changes are isolated; once teammates build on a bug, untangling it is far more work." }
        ]
      }
    ]
  });
})();
