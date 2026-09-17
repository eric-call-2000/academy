/* CI/CD Pipelines — Unit 1: What CI actually is */
window.CODELAB.addUnit("cicd", {
  id: "cicd-u1",
  title: "What CI actually is",
  icon: "🔄",
  blurb: "A file in your repository that says what should happen when you push — and a server that does it, every time, whether or not you remember to.",
  cheat: [
    { h: "The smallest workflow", lang: "yaml", code: "# .github/workflows/ci.yml\nname: CI\non: push\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm test", note: "Four things, always: WHEN it runs (`on`), WHAT machine (`runs-on`), and the `steps` — each of which is either `uses` (somebody else's action) or `run` (a shell command)." },
    { h: "Where it has to live", lang: "sh", code: ".github/workflows/ci.yml     # read\n.github/ci.yml               # ignored\nci.yml                       # ignored", note: "Only `.github/workflows/` is scanned, and only `.yml` or `.yaml`. A workflow anywhere else is an ordinary file that never runs — which looks exactly like a workflow that is broken." },
    { h: "The machine starts EMPTY", lang: "yaml", code: "steps:\n  - uses: actions/checkout@v4   # ← without this, no repository\n  - run: npm test", note: "The runner is a fresh machine with none of your code on it. `actions/checkout` is what puts the repository there. Forget it and every command fails on a file that is obviously right there on your laptop." },
    { h: "Reading what happened", lang: "sh", code: "gh run list          # every run, newest first\ngh run view          # the latest run, job by job\ngh run view --log    # ...and what each step printed\ngh workflow list     # the workflows, and whether they parse", note: "`gh run view --log` is the one you will live in. A red build is a question, and the log is where the answer is." },
    { h: "Choosing when it runs", lang: "yaml", code: "on: push                    # every push, every branch\n\non:\n  push:\n    branches: [main]        # only pushes to main\n\non:\n  pull_request:             # when a PR is opened or updated\n  workflow_dispatch:        # a button you press yourself", note: "A filter that matches nothing is the quietest bug in CI: no run appears, no error appears, and it looks exactly like the server is down." }
  ],
  lessons: [

    {
      id: "cicd-u1-1",
      title: "Your first workflow",
      kind: "shell", chip: "CI/CD", xp: 15, mins: 10,
      cwd: "/home/you/shop",
      fs: {
        "/home/you/shop/package.json": "{\n  \"name\": \"shop\",\n  \"version\": \"1.0.0\",\n  \"scripts\": {\n    \"test\": \"echo all tests passed\"\n  }\n}\n",
        "/home/you/shop/index.js": "console.log('the shop');\n"
      },
      setup: "git init --bare /srv/shop.git\ngit init\ngit add .\ngit commit -m \"Add the shop\"\ngit remote add origin /srv/shop.git\ngit push -u origin main",
      brief: "**Continuous integration** is one idea: every time somebody pushes, a server checks the code out on a clean machine and runs whatever you told it to. If that fails, everybody knows immediately instead of on Friday.\n\nYou tell it what to do with a file in your repository:\n\n```\n.github/workflows/ci.yml\n```\n\nThat path is not a suggestion. Only `.github/workflows/` is read — a workflow file anywhere else is just a file, and the symptom is that nothing happens at all.\n\nThe file has four parts, and every workflow you ever write has the same four:\n\n- **`name`** — what it's called in the UI\n- **`on`** — the event that starts it\n- **`jobs`** — one or more, each with a **`runs-on`** machine\n- **`steps`** — what that job does, in order\n\nThis lesson has **two tabs**. Write the workflow in the `ci.yml` tab, then use `commands.sh` to commit it and push. The push is what starts the run.\n\nOne honest note about this terminal, said once: nothing here runs concurrently. Jobs that a real server would run at the same time are run in order and simply *reported* as parallel. Everything else — which runs start, what fails, what the log says — is real.",
      example: { lang: "yaml", code: "name: CI\non: push\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm test" },
      steps: [
        { text: "Write a workflow named `CI` in the `ci.yml` tab that runs `on: push`, with one job called `test` on `ubuntu-latest`.",
          test: "var wf = T.workflows()[0];\nT.expect(wf, 'No workflow was found — the file must be at .github/workflows/ci.yml');\nT.expect(!wf.error, 'The workflow file has a problem: ' + (wf.error || ''));\nT.eq(wf.doc.name, 'CI', 'Give the workflow the name CI');\nT.expect(wf.doc.jobs && wf.doc.jobs.test, 'There should be a job called test');\nT.eq(wf.doc.jobs.test['runs-on'], 'ubuntu-latest', 'The job should run on ubuntu-latest');" },
        { text: "Give it two steps: `actions/checkout@v4`, then a `run` of `npm test`.",
          test: "var job = T.workflows()[0].doc.jobs.test;\nT.eq(job.steps.length, 2, 'The job should have exactly two steps');\nT.expect(/actions\\/checkout/.test(String(job.steps[0].uses || '')), 'The first step should use actions/checkout@v4');\nT.expect(/npm test/.test(String(job.steps[1].run || '')), 'The second step should run npm test');" },
        { text: "Commit the workflow and push it. The push is what starts the run.",
          test: "T.expect(T.ran(/^git add/m), 'Stage the new file with git add');\nT.expect(T.ran(/^git commit/m), 'Commit it');\nT.expect(T.ran(/^git push/m), 'Then push');\nT.eq(T.runCount(), 1, 'Exactly one run should have started — if it is 0, check the file is at .github/workflows/ci.yml');\nT.expect(T.printed('workflow'), 'The push should report the workflow it started');" },
        { text: "Read the result with `gh run view`. It should be green.",
          test: "T.expect(T.ran(/^gh run view/m), 'Run gh run view');\nvar run = T.lastRun();\nT.eq(run.conclusion, 'success', 'The run should have passed');\nT.eq(T.job('test').conclusion, 'success');\nT.expect(T.jobLog('test').indexOf('all tests passed') !== -1, 'The log should show the test suite output');" }
      ],
      files: [
        { name: "commands.sh", content: "# The repository is already set up and pushed once.\n# Write the workflow in the ci.yml tab, then ship it:\n\n# 1) Stage, commit and push it:\n\n\n\n# 2) Read what the server did:\n\n" },
        { name: ".github/workflows/ci.yml", content: "# name:     what this workflow is called\n# on:       the event that starts it\n# jobs:     one job called test, on ubuntu-latest\n# steps:    check the code out, then run npm test\n\n" }
      ],
      hints: [
        "The file's top level is `name:`, `on:` and `jobs:`. Under `jobs:` comes `test:`, and under that `runs-on:` and `steps:`.",
        "Steps are a list, so each one starts with `- `. The first is `- uses: actions/checkout@v4` and the second is `- run: npm test`.",
        "In commands.sh: `git add .`, then `git commit -m \"Add CI\"`, then `git push`, then `gh run view`."
      ],
      solution: {
        "commands.sh": "# The repository is already set up and pushed once.\n# Write the workflow in the ci.yml tab, then ship it:\n\n# 1) Stage, commit and push it:\ngit add .\ngit commit -m \"Add CI\"\ngit push\n\n# 2) Read what the server did:\ngh run view\n",
        ".github/workflows/ci.yml": "# name:     what this workflow is called\n# on:       the event that starts it\n# jobs:     one job called test, on ubuntu-latest\n# steps:    check the code out, then run npm test\nname: CI\non: push\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm test\n"
      }
    },

    {
      id: "cicd-u1-2",
      title: "The machine starts empty",
      kind: "shell", chip: "CI/CD", xp: 15, mins: 10,
      cwd: "/home/you/shop",
      fs: {
        "/home/you/shop/package.json": "{\n  \"name\": \"shop\",\n  \"version\": \"1.0.0\",\n  \"scripts\": {\n    \"test\": \"echo all tests passed\"\n  }\n}\n",
        "/home/you/shop/index.js": "console.log('the shop');\n"
      },
      setup: "git init --bare /srv/shop.git\ngit init\ngit add .\ngit commit -m \"Add the shop\"\ngit remote add origin /srv/shop.git\ngit push -u origin main",
      brief: "Here is the mistake everyone makes once, and it is worth making on purpose.\n\nYou write a workflow that runs `npm test`. It works perfectly on your laptop. CI says:\n\n```\nnpm error code ENOENT\nnpm error path /home/runner/work/shop/package.json\n```\n\nThere is no `package.json`? It is *right there*.\n\nNot on the runner it isn't. **The machine that runs your job starts completely empty** — a clean operating system and nothing else. It has never heard of your repository. Your code gets there only because a step puts it there:\n\n```yaml\n- uses: actions/checkout@v4\n```\n\nThat one line is the difference, and understanding *why* it is needed is most of understanding CI. Three more things in this course exist for exactly the same reason — the cache, artifacts, and the fact that two jobs cannot see each other's files.\n\nThis lesson has a workflow that is already missing it. Push it, read the failure, then fix it and push again.\n\nBecause an editor tab has one value for the whole run, the fixed version goes in a **second** file: `ci-fixed.yml`. Replacing the first one and pushing again is exactly what you would do on a real repository.",
      example: { lang: "sh", code: "git add .\ngit commit -m \"Add CI\"\ngit push\ngh run view --log      # read the failure\n\n# fix it, then:\ngit add .\ngit commit -m \"Check the code out first\"\ngit push" },
      steps: [
        { text: "Push the workflow as it is, and let it fail.",
          test: "T.expect(T.runCount() >= 1, 'Push once to start a run — git add, git commit, git push');\nvar first = T.run(1);\nT.eq(first.conclusion, 'failure', 'The FIRST run should fail — there is no checkout step');\nT.expect(first.jobs[0].checkedOut === false, 'Nothing was checked out, which is the whole point');" },
        { text: "Read the failure with `gh run view --log` and find the error.",
          test: "T.expect(T.ran(/^gh run view.*--log/m), 'Run gh run view --log so you can see what the step printed');\nT.expect(T.printed('ENOENT') || T.printed('package.json'), 'The log should show npm failing to find package.json on the runner');" },
        { text: "Write the corrected workflow in `ci-fixed.yml`: the same job, with `actions/checkout@v4` as the first step.",
          test: "/* By the end the file has been MOVED into place, so the corrected workflow\n   is read from wherever it now lives rather than from the tab's path. */\nvar live = T.workflows()[0];\nT.expect(live, 'There should be a workflow at .github/workflows/');\nT.expect(!live.error, 'The workflow has a problem: ' + (live.error || ''));\nvar job = live.doc.jobs[Object.keys(live.doc.jobs)[0]];\nT.expect(/actions\\/checkout/.test(String(job.steps[0].uses || '')), 'The FIRST step must be actions/checkout@v4 — everything after it depends on the code being there');" },
        { text: "Replace the broken workflow with the fixed one, push again, and get a green run.",
          test: "T.expect(T.ran(/^mv\\s+fixed-ci\\.yml/m), 'Move fixed-ci.yml into .github/workflows/ci.yml, replacing the broken one');\nT.eq(T.exists('/home/you/shop/fixed-ci.yml'), false, 'It should have MOVED, so nothing is left in the repository root');\nT.eq(T.workflows().length, 1, 'Exactly one workflow should be live at the end');\nT.expect(T.runCount() >= 2, 'Push a second time');\nvar last = T.lastRun();\nT.eq(last.conclusion, 'success', 'The second run should pass now that the code is checked out');\nT.expect(last.jobs[0].checkedOut === true, 'And this time the repository is on the machine');" }
      ],
      files: [
        { name: "commands.sh", content: "# ci.yml is already written, and it is missing one step.\n\n# 1) Ship it and watch it fail:\n\n\n\n\n# 2) Read the log:\n\n\n# 3) Put the fixed workflow in place of the broken one\n#    (write it in the fixed-ci.yml tab first), then push again:\n\n\n\n\n" },
        { name: ".github/workflows/ci.yml", content: "name: CI\non: push\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - run: npm test\n" },
        { name: "fixed-ci.yml", content: "# The same workflow, with the one missing step.\n# It sits in the repository ROOT, so nothing runs it yet —\n# moving it into .github/workflows/ is what puts it in charge.\n\n" }
      ],
      hints: [
        "First push: `git add .`, `git commit -m \"Add CI\"`, `git push`. Then `gh run view --log`.",
        "In the fixed-ci.yml tab write the whole workflow again, with `- uses: actions/checkout@v4` as the first step, before `- run: npm test`.",
        "Put it in charge with one move: `mv fixed-ci.yml .github/workflows/ci.yml`, then `git add -A`, commit and push."
      ],
      solution: {
        "commands.sh": "# ci.yml is already written, and it is missing one step.\n\n# 1) Ship it and watch it fail:\ngit add .\ngit commit -m \"Add CI\"\ngit push\n\n# 2) Read the log:\ngh run view --log\n\n# 3) Put the fixed workflow in place of the broken one\n#    (write it in the fixed-ci.yml tab first), then push again:\nmv fixed-ci.yml .github/workflows/ci.yml\ngit add -A\ngit commit -m \"Check the code out first\"\ngit push\ngh run view\n",
        "fixed-ci.yml": "# The same workflow, with the one missing step.\n# It sits in the repository ROOT, so nothing runs it yet —\n# moving it into .github/workflows/ is what puts it in charge.\nname: CI\non: push\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm test\n"
      }
    },

    {
      id: "cicd-u1-3",
      title: "Reading a run",
      kind: "shell", chip: "CI/CD", xp: 15, mins: 10,
      cwd: "/home/you/shop",
      fs: {
        "/home/you/shop/package.json": "{\n  \"name\": \"shop\",\n  \"version\": \"1.0.0\",\n  \"scripts\": {\n    \"test\": \"echo 3 passing\",\n    \"lint\": \"echo 2 problems && exit 1\"\n  }\n}\n",
        "/home/you/shop/index.js": "console.log('the shop');\n",
        "/home/you/shop/.github/workflows/ci.yml": "name: CI\non: push\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Unit tests\n        run: npm test\n      - name: Lint\n        run: npm run lint\n      - name: Package\n        run: echo packaged\n"
      },
      setup: "git init --bare /srv/shop.git\ngit init\ngit add .\ngit commit -m \"Add the shop and CI\"\ngit remote add origin /srv/shop.git",
      brief: "A red build is a question. Learning to answer it quickly is most of what makes CI useful rather than annoying.\n\nThree commands, in the order you actually use them:\n\n- **`gh run list`** — every run, newest first, with its conclusion. *Did it fail, and when did it start failing?*\n- **`gh run view`** — one run, broken into jobs and steps, each marked pass or fail. *Which step?*\n- **`gh run view --log`** — the same, plus everything the steps printed. *Why?*\n\nAnd one rule that saves a lot of confusion: **when a step fails, the steps after it do not run.** They are not skipped because they would have failed — they are skipped because the job stopped. So the first `X` in the list is the one to read; everything below it is a consequence, not a clue.\n\nThe workflow here has three named steps and one of them is broken.\n\nNaming steps is worth the two seconds, by the way: `Run npm run lint` in a list of eight steps tells you much less than `Lint`.",
      example: { lang: "sh", code: "gh run list\n# failure   CI   main   push   #1\n\ngh run view\n# X CI · #1\n# X test\n#   ✓ Unit tests\n#   X Lint\n#   - Package        ← never ran\n\ngh run view --log    # ...and what each one printed" },
      steps: [
        { text: "Push, then list the runs.",
          test: "T.expect(T.runCount() >= 1, 'Commit and push to start a run');\nT.expect(T.ran(/^gh run list/m), 'Run gh run list');\nT.expect(T.printed('failure'), 'The list should show the run failed');" },
        { text: "Use `gh run view` to find which step failed.",
          test: "T.expect(T.ran(/^gh run view/m), 'Run gh run view');\nvar job = T.job('test');\nT.expect(job, 'There should be a test job');\nT.eq(job.conclusion, 'failure');\nvar lint = T.step('test', 'Lint');\nT.expect(lint, 'There should be a step named Lint');\nT.eq(lint.conclusion, 'failure', 'Lint is the step that failed');" },
        { text: "Confirm the rule: the step after the failure never ran.",
          test: "var pkg = T.step('test', 'Package');\nT.expect(pkg, 'There should be a step named Package');\nT.eq(pkg.conclusion, 'skipped', 'Package should be skipped — a failing step stops the job');\nvar unit = T.step('test', 'Unit tests');\nT.eq(unit.conclusion, 'success', 'The step BEFORE the failure did run');" },
        { text: "Read the log and find the actual error message.",
          test: "T.expect(T.ran(/^gh run view.*--log/m), 'Run gh run view --log');\nT.expect(T.printed('2 problems'), 'The log should show what lint printed: 2 problems');\nT.expect(T.printed('3 passing'), 'And the tests that passed before it');\nT.expect(!T.printed('packaged'), 'Package never ran, so nothing of its output is in the log');" }
      ],
      files: [
        { name: "commands.sh", content: "# The workflow is already committed. Push it and read the result.\n\n# 1) Ship it, then list the runs:\n\n\n\n\n# 2) Which job and step failed?\n\n\n# 3) What did it actually say?\n\n" }
      ],
      hints: [
        "`git push -u origin main` — the repository has a remote but has not pushed yet.",
        "`gh run list` gives you the conclusion; `gh run view` breaks the run into jobs and steps.",
        "`gh run view --log` adds what every step printed. Look for the `X` — the steps below it show `-`, meaning they never ran."
      ],
      solution: {
        "commands.sh": "# The workflow is already committed. Push it and read the result.\n\n# 1) Ship it, then list the runs:\ngit push -u origin main\ngh run list\n\n# 2) Which job and step failed?\ngh run view\n\n# 3) What did it actually say?\ngh run view --log\n"
      }
    },

    {
      id: "cicd-u1-4",
      title: "Choosing when it runs",
      kind: "shell", chip: "CI/CD", xp: 15, mins: 10,
      cwd: "/home/you/shop",
      fs: {
        "/home/you/shop/package.json": "{\n  \"name\": \"shop\",\n  \"version\": \"1.0.0\",\n  \"scripts\": {\n    \"test\": \"echo all tests passed\"\n  }\n}\n",
        "/home/you/shop/index.js": "console.log('the shop');\n"
      },
      setup: "git init --bare /srv/shop.git\ngit init\ngit add .\ngit commit -m \"Add the shop\"\ngit remote add origin /srv/shop.git\ngit push -u origin main",
      brief: "`on: push` means *every push, on every branch*. That is a fine place to start and a bad place to stay: you do not need a full pipeline for every typo pushed to a scratch branch.\n\nSo you filter:\n\n```yaml\non:\n  push:\n    branches: [main]\n```\n\nNow only pushes to `main` start it. Pushes anywhere else start nothing at all.\n\nAnd that is the trap. **A filter that matches nothing produces no run and no error.** There is no message saying \"your workflow was considered and skipped\" — there is simply nothing, which looks identical to a broken file, a broken server, or a workflow you forgot to commit. When CI \"isn't running\", the filter is the first thing to check.\n\nOther triggers you will meet:\n\n- **`pull_request`** — when a PR is opened or updated. This is the one that gates merges.\n- **`workflow_dispatch`** — a button you press by hand, for deploys and one-off jobs.\n- **`schedule`** — on a cron, for nightly work.\n\nYou can list several, and the workflow runs when any of them fire.\n\nIn this lesson you will restrict the workflow to `main`, then prove the restriction works by pushing somewhere else and getting nothing.",
      example: { lang: "yaml", code: "on:\n  push:\n    branches: [main]\n\n# several at once:\non:\n  push:\n    branches: [main]\n  pull_request:\n  workflow_dispatch:" },
      steps: [
        { text: "Write a workflow in `ci.yml` that runs only on pushes to `main`, checking out and running `npm test`.",
          test: "var wf = T.workflows()[0];\nT.expect(wf, 'Write the workflow at .github/workflows/ci.yml');\nT.expect(!wf.error, 'The workflow has a problem: ' + (wf.error || ''));\nvar on = wf.doc.on !== undefined ? wf.doc.on : wf.doc['true'];\nT.expect(on && on.push, 'It should trigger on push');\nT.expect(String(JSON.stringify(on.push)).indexOf('main') !== -1, 'Restrict it with branches: [main]');" },
        { text: "Commit and push it to `main`. One run should start.",
          test: "T.expect(T.ran(/^git push/m), 'Push to main');\nT.eq(T.runCount(), 1, 'Exactly one run should have started');\nT.eq(T.lastRun().branch, 'main');\nT.eq(T.lastRun().conclusion, 'success');" },
        { text: "Make a branch called `experiment`, change something, and push it.",
          test: "T.expect(T.ran(/^git (checkout -b|switch -c)\\s+experiment/m), 'Create the branch with git checkout -b experiment');\nT.expect(T.ran(/^git push.*experiment/m), 'Push the experiment branch');" },
        { text: "Confirm the filter did its job: still exactly one run, and it is the one from `main`.",
          test: "T.eq(T.runCount(), 1, 'Still ONE run — the push to experiment matched no filter, so nothing started and nothing said so');\nT.eq(T.lastRun().branch, 'main', 'The only run is still the one from main');\nT.expect(T.ran(/^gh run list/m), 'Check with gh run list');" }
      ],
      files: [
        { name: "commands.sh", content: "# Write the filtered workflow in ci.yml, then:\n\n# 1) Commit and push it to main:\n\n\n\n# 2) Branch off, change something, and push that:\n\n\n\n\n\n# 3) How many runs are there?\n\n" },
        { name: ".github/workflows/ci.yml", content: "# Run only on pushes to main.\n# One job, checking out and running npm test.\n\n" }
      ],
      hints: [
        "`on:` then indented `push:` then indented `branches: [main]`.",
        "`git checkout -b experiment`, then change a file (`echo \"// note\" >> index.js`), then `git add .`, commit, and `git push -u origin experiment`.",
        "`gh run list` at the end should still show a single run, on main. That silence is the filter working — and is exactly what a broken workflow also looks like."
      ],
      solution: {
        "commands.sh": "# Write the filtered workflow in ci.yml, then:\n\n# 1) Commit and push it to main:\ngit add .\ngit commit -m \"Run CI on main only\"\ngit push\n\n# 2) Branch off, change something, and push that:\ngit checkout -b experiment\necho \"// an experiment\" >> index.js\ngit add .\ngit commit -m \"Try something\"\ngit push -u origin experiment\n\n# 3) How many runs are there?\ngh run list\n",
        ".github/workflows/ci.yml": "# Run only on pushes to main.\n# One job, checking out and running npm test.\nname: CI\non:\n  push:\n    branches: [main]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm test\n"
      }
    },

    {
      id: "cicd-quiz-1",
      title: "Unit 1 quiz: What CI actually is",
      kind: "quiz", xp: 10,
      brief: "Workflows, the empty machine, reading a run, and choosing when it fires. 80% to pass.",
      questions: [
        { q: "Your workflow runs `npm test` and CI reports `npm error code ENOENT ... /home/runner/work/shop/package.json`. The file is definitely committed. What is wrong?",
          choices: ["The runner needs a package-lock.json before npm will read package.json", "The job has no actions/checkout step, so the machine has none of your code on it", "npm is not installed on ubuntu-latest and has to be set up first", "The working directory defaults to the home folder rather than the repository"],
          answer: 1, explain: "The runner is a clean machine that has never seen your repository. `actions/checkout` is the step that puts the code there, and without it every command fails on files that are obviously present on your laptop. The cache and artifacts exist for this same reason." },
        { q: "You add `.github/ci.yml` and push. Nothing happens — no run, no error. Why?",
          choices: ["Workflows are only read from .github/workflows/, so that file is just a file", "A workflow must be named ci.yaml rather than ci.yml", "The first workflow in a repository has to be enabled in settings before it runs", "Pushes do not trigger workflows until a pull request exists"],
          answer: 0, explain: "Only `.github/workflows/` is scanned. A workflow file one directory up is an ordinary file that nothing reads — and the symptom, total silence, looks exactly like a broken server or a file you forgot to commit." },
        { q: "`gh run view` shows a job whose steps are: ✓ Unit tests, X Lint, - Package. What does the `-` on Package mean?",
          code: "X test\n  ✓ Unit tests\n  X Lint\n  - Package",
          lang: "sh",
          choices: ["Package was cancelled because the run timed out", "Package ran and produced no output", "Package never ran, because the failing step stopped the job", "Package was skipped by an if: condition that evaluated false"],
          answer: 2, explain: "A non-zero exit from a step fails the job immediately, and the steps after it do not run. So the first X is the one to read — everything below it is a consequence rather than a clue." },
        { q: "Your workflow has `on: push` with `branches: [main]`. A teammate says CI is broken because pushing their branch produces nothing. What do you tell them?",
          choices: ["The runner queue is backed up and their run will appear shortly", "They need to open a pull request before any workflow will run", "That is the filter working — only pushes to main start it", "Their branch needs to be pushed with --force to register with the server"],
          answer: 2, explain: "A filter that does not match produces no run and no message, which looks identical to a broken workflow. When CI \"isn't running\", the trigger filter is the first thing to check, not the last." },
        { q: "What is the difference between a step's `uses` and its `run`?",
          choices: ["uses runs on the host machine while run happens inside a container", "uses is for setup steps and run is for everything after them", "uses names a prebuilt action to execute; run is a shell command you write", "uses caches its result between runs and run always executes fresh"],
          answer: 2, explain: "`uses` pulls in somebody else's packaged action — checkout, setting up a language, caching. `run` is literally a shell command on the runner. Every step is one or the other, and a step with neither is a workflow that will not load." },
        { q: "Which trigger gives you a workflow you can start by hand, with no push involved?",
          choices: ["workflow_dispatch", "schedule", "repository_dispatch", "pull_request"],
          answer: 0, explain: "`workflow_dispatch` puts a Run button in the UI, which is what deploys and one-off maintenance jobs use. `schedule` runs on a cron with nobody pressing anything, and `pull_request` fires on PR activity." }
      ]
    }
  ]
});
