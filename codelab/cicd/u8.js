/* CI/CD Pipelines — Unit 8: Two projects */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var PKG = L(
    "{",
    "  \"name\": \"shop\",",
    "  \"scripts\": { \"lint\": \"true\", \"test\": \"true\", \"build\": \"cp -r src dist\" }",
    "}",
    "");
  function SETUP() {
    return L(
      "git init -q -b main",
      "git add -A",
      "git commit -qm 'initial project'",
      "git init -q --bare /srv/origin.git",
      "git remote add origin /srv/origin.git",
      "git push -u origin main");
  }
  var CI_START = L(
    "# PROJECT: build the full CI pipeline.",
    "#   lint  -> test (a matrix) -> build (uploads the dist artifact)",
    "# Wire the ordering with needs, and fill in the TODOs.",
    "name: CI",
    "on: { push: {} }",
    "jobs:",
    "  lint:",
    "    runs-on: ubuntu-latest",
    "    steps: [ { run: npm run lint } ]",
    "  test:",
    "    runs-on: ubuntu-latest",
    "    # TODO: needs lint",
    "    # TODO: a matrix over node: [18, 20, 22]",
    "    steps:",
    "      - uses: actions/checkout@v4",
    "      - run: npm test",
    "  build:",
    "    runs-on: ubuntu-latest",
    "    # TODO: needs test",
    "    steps:",
    "      - run: mkdir -p dist && echo built > dist/app.js",
    "      # TODO: upload dist as an artifact named 'dist'",
    "");
  var CI_DONE = L(
    "name: CI",
    "on: { push: {} }",
    "jobs:",
    "  lint:",
    "    runs-on: ubuntu-latest",
    "    steps: [ { run: npm run lint } ]",
    "  test:",
    "    runs-on: ubuntu-latest",
    "    needs: lint",
    "    strategy:",
    "      matrix:",
    "        node: [18, 20, 22]",
    "    steps:",
    "      - uses: actions/checkout@v4",
    "      - run: npm test",
    "  build:",
    "    runs-on: ubuntu-latest",
    "    needs: test",
    "    steps:",
    "      - run: mkdir -p dist && echo built > dist/app.js",
    "      - uses: actions/upload-artifact@v4",
    "        with: { name: dist, path: dist }",
    "");
  var CD_START = L(
    "# PROJECT: continuous delivery.",
    "#   deploy-staging deploys every main push.",
    "#   Add a deploy-prod job that NEEDS deploy-staging and deploys to the",
    "#   PROTECTED 'production' environment (it will wait for approval).",
    "name: CD",
    "on:",
    "  push:",
    "    branches: [main]",
    "jobs:",
    "  deploy-staging:",
    "    runs-on: ubuntu-latest",
    "    steps:",
    "      - uses: actions/deploy",
    "        with: { environment: staging, ref: \"${{ github.sha }}\" }",
    "  # TODO: add the deploy-prod job here",
    "");
  var CD_DONE = L(
    "name: CD",
    "on:",
    "  push:",
    "    branches: [main]",
    "jobs:",
    "  deploy-staging:",
    "    runs-on: ubuntu-latest",
    "    steps:",
    "      - uses: actions/deploy",
    "        with: { environment: staging, ref: \"${{ github.sha }}\" }",
    "  deploy-prod:",
    "    runs-on: ubuntu-latest",
    "    needs: deploy-staging",
    "    environment: production",
    "    steps:",
    "      - uses: actions/deploy",
    "        with: { environment: production, ref: \"${{ github.sha }}\" }",
    "");

  window.CODELAB.addUnit("cicd", {
    id: "cicd-u8",
    title: "Two pipelines, end to end",
    icon: "🏗️",
    blurb: "No new ideas — assemble them. Build a full CI pipeline that gates merges, then a CD pipeline that ships to staging and gated production, and roll a bad release back.",
    cheat: [
      { h: "The CI pipeline", lang: "sh", code: L(
        "lint  -> test (matrix)  -> build (artifact)",
        "needs chains them; a red one skips what follows",
        "green on every check = safe to merge"),
        note: "Everything from Units 1-4 in one file: ordered jobs, a matrix, an uploaded build. Each job gates the next; a green run is the merge condition." },
      { h: "The CD pipeline", lang: "sh", code: L(
        "push to main -> deploy staging -> deploy prod (approve)",
        "bad release?  git revert + push -> redeploy the good one"),
        note: "Units 5-6 in one file: deploy from main, hold production behind an approval, and roll back by reverting so the same pipeline ships the previous good state." }
    ],
    lessons: [

      {
        id: "cicd-u8-p1",
        title: "Project: the full CI pipeline",
        kind: "shell", chip: "CICD", xp: 40, mins: 34, project: true,
        cwd: "/home/you/project",
        fs: { "/home/you/project/package.json": PKG, "/home/you/project/src/app.js": "console.log('app');\n" },
        setup: SETUP(),
        brief: "Assemble everything from the first half of the course into one working pipeline. Finish `.github/workflows/ci.yml` so that:\n\n- **`lint`** runs first (given).\n- **`test`** runs after lint (`needs: lint`) and as a **matrix** over `node: [18, 20, 22]` — three parallel runs.\n- **`build`** runs after test (`needs: test`), produces `dist/`, and **uploads it** as an artifact named `dist`.\n\nFill in the four TODOs, then commit and push. The checkpoints read the run: the jobs in order, the matrix fanned out, the artifact present, and the whole pipeline green.",
        example: { lang: "sh", code: "git commit -am \"Full CI pipeline\"\ngit push\n\n# ▸ CI · push to main — passed\n#   ✓ lint\n#   ✓ test (18)  ✓ test (20)  ✓ test (22)\n#   ✓ build" },
        steps: [
          { text: "Commit the finished workflow and push it.",
            test: L(
              "T.expect(T.ran(/git\\s+push/), 'Commit ci.yml and push it.');",
              "T.expect(T.lastRun(), 'No run yet — commit the workflow and push.');") },
          { text: "`lint` runs and passes.",
            test: L("T.eq(T.lastRun().jobs.lint.status, 'success', 'The lint job should pass.');") },
          { text: "`test` runs as a matrix — three times, once per Node version.",
            test: L(
              "var legs = Object.keys(T.lastRun().jobs).filter(function (k) { return k.indexOf('test') === 0; });",
              "T.eq(legs.length, 3, 'test should run 3 times. Add strategy: { matrix: { node: [18, 20, 22] } }.');") },
          { text: "`build` runs after the tests and passes.",
            test: L("T.eq(T.lastRun().jobs.build.status, 'success', 'build should be green. Give it needs: test so it runs after the matrix.');") },
          { text: "`build` uploaded the `dist` artifact.",
            test: L("T.expect(T.artifact('dist').present, 'build should upload dist as an artifact. Add the upload-artifact step with name: dist.');") },
          { text: "The whole pipeline is green.",
            test: L("T.eq(T.lastRun().status, 'success', 'Every job should pass. Read the run summary for any ✗.');") }
        ],
        files: [
          { name: "commands.sh", content: L("# Finish ci.yml (the four TODOs), then:", "# commit and push", "", "") },
          { name: ".github/workflows/ci.yml", content: CI_START }
        ],
        hints: [
          "test: add `needs: lint`, and a `strategy:` block with `matrix:` then `node: [18, 20, 22]`.",
          "build: add `needs: test`, and after the mkdir step, `- uses: actions/upload-artifact@v4` with `with: { name: dist, path: dist }`.",
          "Then `git commit -am \"...\"` and `git push`. The run should show lint, three test legs, and build all green."
        ],
        solution: {
          "commands.sh": L("git commit -am \"Full CI pipeline\"", "git push", ""),
          ".github/workflows/ci.yml": CI_DONE
        }
      },

      {
        id: "cicd-u8-p2",
        title: "Project: deliver to production, and roll back",
        kind: "shell", chip: "CICD", xp: 40, mins: 34, project: true,
        cwd: "/home/you/project",
        ci: { environments: { production: { requiredReviewers: 1 } } },
        fs: { "/home/you/project/package.json": PKG, "/home/you/project/src/app.js": "v1-good\n" },
        setup: SETUP(),
        brief: "Now the delivery side. Finish `.github/workflows/cd.yml`: `deploy-staging` is given; add a **`deploy-prod`** job that **needs `deploy-staging`** and deploys to the **protected `production`** environment (so it waits for approval).\n\n`commands.sh` then walks a real release:\n\n1. push to main — staging deploys, production **waits**\n2. `gh deployment approve production` — production ships\n3. a bad change goes out to staging\n4. `git revert` + push — the pipeline **rolls staging back** to the good code\n\nThe checkpoints confirm each stage: the production gate held, the approval shipped it, and the rollback restored staging.",
        example: { lang: "sh", code: "git add -A && git commit -m \"CD pipeline\" && git push\ngh deployment approve production\necho \"v2-broken\" > src/app.js && git commit -am v2 && git push\ngit revert --no-edit HEAD && git push" },
        steps: [
          { text: "Push the CD workflow to main (staging deploys, production waits).",
            test: L(
              "T.expect(T.ran(/git\\s+push/), 'Commit cd.yml and push it to main.');",
              "T.expect(T.deployed('staging'), 'The main push should deploy to staging. Keep the deploy-staging job.');",
              "T.expect(T.run(1).jobs['deploy-prod'], 'Add a deploy-prod job. It should appear in the run.');",
              "T.eq(T.run(1).jobs['deploy-prod'].status, 'waiting', 'deploy-prod should WAIT on the protected production environment. Give it environment: production.');") },
          { text: "Approve production, and it ships.",
            test: L(
              "T.expect(T.ran(/gh\\s+deployment\\s+approve/), 'Approve production: gh deployment approve production.');",
              "T.expect(T.deployed('production'), 'production should be deployed once you approve it.');") },
          { text: "Roll the bad release back: revert and push, and staging returns to the good code.",
            test: L(
              "T.expect(T.ran(/git\\s+revert/), 'Roll back the bad deploy with git revert --no-edit HEAD, then push.');",
              "T.expect(T.deployed('staging'), 'staging should still be deployed after the rollback.');",
              "T.expect((T.file('src/app.js') || '').indexOf('v2-broken') === -1, 'The code should be rolled back off v2-broken — revert the bad commit and push.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# Finish cd.yml (add the deploy-prod job) first. Then this release flow:",
            "",
            "# 1) ship: staging deploys, production waits",
            "git add -A",
            "git commit -m \"CD pipeline\"",
            "git push",
            "",
            "# 2) approve production:",
            "gh deployment approve production",
            "",
            "# 3) a bad change ships to staging:",
            "echo \"v2-broken\" > src/app.js",
            "git commit -am \"v2\"",
            "git push",
            "",
            "# 4) roll it back:",
            "git revert --no-edit HEAD",
            "git push",
            "") },
          { name: ".github/workflows/cd.yml", content: CD_START }
        ],
        hints: [
          "deploy-prod mirrors deploy-staging but adds `needs: deploy-staging` and `environment: production`, and deploys with environment: production.",
          "The protected environment makes deploy-prod wait; `gh deployment approve production` releases it.",
          "The rollback is `git revert --no-edit HEAD` then `git push` — the revert re-runs the pipeline and redeploys the good code."
        ],
        solution: {
          "commands.sh": L(
            "git add -A",
            "git commit -m \"CD pipeline\"",
            "git push",
            "gh deployment approve production",
            "echo \"v2-broken\" > src/app.js",
            "git commit -am \"v2\"",
            "git push",
            "git revert --no-edit HEAD",
            "git push",
            ""),
          ".github/workflows/cd.yml": CD_DONE
        }
      },

      {
        id: "cicd-quiz-8",
        title: "Final quiz: CI/CD Pipelines",
        kind: "quiz", xp: 10,
        brief: "The whole course: workflows, gates, matrix, cache, artifacts, secrets, environments, and CD. 80% to pass.",
        questions: [
          { q: "What triggers a workflow with `on: push`?",
            choices: ["Opening the repository in an editor", "A git push to a matching branch", "A scheduled timer every hour", "A reviewer approving a pull request"],
            answer: 1, explain: "`on: push` runs the workflow when you push. The run reports green or red for the pushed commit." },
          { q: "job `deploy` has `needs: test` and `test` fails. What is `deploy`?",
            choices: ["Green", "Skipped", "Failed", "Waiting for approval"],
            answer: 1, explain: "A job whose needed job failed is skipped — you never deploy on a red test." },
          { q: "You need the exact build from the `build` job in the `deploy` job of the same run. Use…",
            choices: ["A dependency cache with a carefully chosen and stable key value", "An artifact (upload then download)", "A git branch", "A secret"],
            answer: 1, explain: "An artifact passes a deliverable between jobs of one run; a cache is a speed-up for future runs." },
          { q: "A step echoes `${{ secrets.TOKEN }}`. What appears in the log?",
            choices: ["The token in plain text", "***, the masked value", "An error about using a secret", "The literal text secrets.TOKEN"],
            answer: 1, explain: "Secret values are masked to *** in logs, so an accidental echo doesn't leak the credential." },
          { q: "What does branch protection with a required check enforce?",
            choices: ["That every branch runs the check on each push", "That a PR can't merge until the check is green", "That the tests are rewritten to always pass", "That the check runs faster than the others"],
            answer: 1, explain: "A required check gates the merge: a red check on the PR blocks merging into the protected branch." },
          { q: "How do you make a deploy job run only on main?",
            choices: ["Give the deploy job the exact name main so that it only ever matches that one branch", "if: \"${{ github.ref == 'refs/heads/main' }}\"", "runs-on: main", "needs: main"],
            answer: 1, explain: "The `if` gate scopes the job to main; pushes on other branches skip the deploy." },
          { q: "A protected production environment with a required reviewer does what to a deploy?",
            choices: ["Deploys immediately and notifies later", "Pauses it as waiting until someone approves", "Blocks it forever", "Skips it on every run"],
            answer: 1, explain: "The job waits for approval; once a reviewer approves, the deployment proceeds — a human gate before production." },
          { q: "A bad commit deployed from main. What's the fast, safe rollback?",
            choices: ["Edit the live server directly over SSH", "git revert the commit and push, so CD redeploys the good code", "Delete and recreate the main branch", "Disable the pipeline until it's fixed"],
            answer: 1, explain: "Reverting makes a new commit undoing the bad one; pushing it ships the previous good state through the same pipeline." }
        ]
      }
    ]
  });
})();
