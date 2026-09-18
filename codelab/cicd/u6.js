/* CI/CD Pipelines — Unit 6: Continuous delivery — deploy and roll back */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var PKG = L("{", "  \"name\": \"shop\",", "  \"scripts\": { \"test\": \"true\", \"build\": \"cp -r src dist\" }", "}", "");
  function SETUP(extra) {
    return L(
      "git init -q -b main",
      "git add -A",
      "git commit -qm 'v1'",
      "git init -q --bare /srv/origin.git",
      "git remote add origin /srv/origin.git",
      "git push -u origin main",
      extra || "");
  }
  var CD_START = L(
    "# Deploy to staging — but ONLY from main. A feature branch should not",
    "# deploy. Add the gate to the deploy job.",
    "name: CD",
    "on: { push: {} }",
    "jobs:",
    "  deploy:",
    "    runs-on: ubuntu-latest",
    "    # only run this job on main:",
    "    steps:",
    "      - uses: actions/checkout@v4",
    "      - uses: actions/deploy",
    "        with: { environment: staging, ref: \"${{ github.sha }}\" }",
    "");
  var CD_DONE = L(
    "name: CD",
    "on: { push: {} }",
    "jobs:",
    "  deploy:",
    "    runs-on: ubuntu-latest",
    "    if: \"${{ github.ref == 'refs/heads/main' }}\"",
    "    steps:",
    "      - uses: actions/checkout@v4",
    "      - uses: actions/deploy",
    "        with: { environment: staging, ref: \"${{ github.sha }}\" }",
    "");
  // Rollback lesson: a CD workflow already in the repo, deploying main to staging.
  var CD_STAGING = L(
    "name: CD",
    "on:",
    "  push:",
    "    branches: [main]",
    "jobs:",
    "  deploy:",
    "    runs-on: ubuntu-latest",
    "    steps:",
    "      - uses: actions/checkout@v4",
    "      - uses: actions/deploy",
    "        with: { environment: staging, ref: \"${{ github.sha }}\" }",
    "");

  window.CODELAB.addUnit("cicd", {
    id: "cicd-u6",
    title: "Continuous delivery: deploy and roll back",
    icon: "🚀",
    blurb: "Green on main means it ships. Gating a deploy job to the main branch so feature branches never deploy, and rolling a bad release back the fast way — by reverting and letting the pipeline redeploy the good version.",
    cheat: [
      { h: "Deploy from main only", lang: "sh", code: L(
        "deploy:",
        "  if: \"${{ github.ref == 'refs/heads/main' }}\"",
        "  steps: [ … deploy … ]",
        "# push on a feature branch -> deploy job SKIPPED"),
        note: "A deploy job with no gate would ship every branch. `if: github.ref == 'refs/heads/main'` scopes it: only a push to main deploys; feature-branch runs skip it." },
      { h: "Roll back by reverting", lang: "sh", code: L(
        "# a bad commit went to main and deployed",
        "git revert --no-edit HEAD   # undo it as a new commit",
        "git push                    # the pipeline redeploys the good code"),
        note: "The fastest rollback is often to revert the bad commit and let CD redeploy. The revert is itself a normal commit on main, so it flows through the same pipeline and ships the previous good state." }
    ],
    lessons: [

      {
        id: "cicd-u6-1",
        title: "Deploy on main, and only main",
        kind: "shell", chip: "CICD", xp: 20, mins: 17,
        cwd: "/home/you/project",
        fs: { "/home/you/project/package.json": PKG, "/home/you/project/src/app.js": "v1\n" },
        setup: SETUP(),
        brief: "Continuous delivery: a green push to **main** ships. This workflow has a **deploy** job, but no gate — as written it would deploy *every* branch, including half-finished feature branches. That's dangerous.\n\nAdd a gate so the deploy job runs **only on main**:\n\n```\nif: \"${{ github.ref == 'refs/heads/main' }}\"\n```\n\n`commands.sh` pushes to main (which should deploy to staging), then pushes a `hotfix` branch (which should **skip** the deploy). The checkpoints confirm both: staging got the main deploy, and the feature push was gated out.",
        example: { lang: "sh", code: "git commit -am \"Deploy from main only\"\ngit push                 # main: ▸ CD — ✓ deploy\ngit checkout -b hotfix\necho v2 > src/app.js\ngit commit -am wip\ngit push -u origin hotfix # hotfix: ▸ CD — - deploy (skipped)" },
        steps: [
          { text: "Push to main and to a feature branch (commands.sh does both).",
            test: L(
              "T.expect(T.runs().length >= 2, 'Both pushes should run the workflow. Keep the main push and the hotfix push.');") },
          { text: "main deployed to staging, and the feature-branch push was skipped by the gate.",
            test: L(
              "T.expect(T.deployed('staging'), 'The push to main should deploy to staging. Add the deploy job and push to main.');",
              "T.eq(T.lastRun().ref, 'refs/heads/hotfix', 'The last run should be your hotfix push.');",
              "T.eq(T.lastRun().jobs.deploy.status, 'skipped', \"deploy must be SKIPPED on a feature branch. Add if: \\\"${{ github.ref == 'refs/heads/main' }}\\\" to the deploy job.\");") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# Add the main-only gate to the deploy job in ci.yml first, then:",
            "",
            "# deploy from main:",
            "git commit -am \"Deploy from main only\"",
            "git push",
            "",
            "# a feature branch should NOT deploy:",
            "git checkout -b hotfix",
            "echo v2 > src/app.js",
            "git commit -am wip",
            "git push -u origin hotfix",
            "") },
          { name: ".github/workflows/ci.yml", content: CD_START }
        ],
        hints: [
          "Add `if: \"${{ github.ref == 'refs/heads/main' }}\"` to the deploy job, at the same level as runs-on and steps.",
          "Leave commands.sh as it is — it pushes main (deploys) then hotfix (should skip).",
          "On the hotfix run, deploy should read `- deploy (skipped)`."
        ],
        solution: {
          "commands.sh": L(
            "git commit -am \"Deploy from main only\"",
            "git push",
            "git checkout -b hotfix",
            "echo v2 > src/app.js",
            "git commit -am wip",
            "git push -u origin hotfix",
            ""),
          ".github/workflows/ci.yml": CD_DONE
        }
      },

      {
        id: "cicd-u6-2",
        title: "Roll back a bad deploy",
        kind: "shell", chip: "CICD", xp: 20, mins: 16,
        cwd: "/home/you/project",
        fs: { "/home/you/project/package.json": PKG, "/home/you/project/src/app.js": "v1-good\n", "/home/you/project/.github/workflows/ci.yml": CD_STAGING },
        setup: SETUP(L(
          "echo 'v2-broken' > src/app.js",
          "git commit -qam 'v2 (broken)'",
          "git push")),
        brief: "A bad release just went out. The last commit to main deployed **`v2-broken`** to staging, and it's live. You need to roll back — fast.\n\nThe quickest safe rollback here is to **revert** the bad commit and let the pipeline redeploy. `git revert` makes a *new* commit that undoes the last one, so it flows through the same CD pipeline on main and ships the previous good code:\n\n```\ngit revert --no-edit HEAD\ngit push\n```\n\nThe checkpoints confirm a new deployment replaced the broken one, and the code on staging is good again.",
        example: { lang: "sh", code: "git revert --no-edit HEAD\ngit push\n\n# ▸ CD · push to main — passed\n#   ✓ deploy" },
        steps: [
          { text: "Roll back by reverting the bad commit and pushing.",
            test: L(
              "T.expect(T.ran(/git\\s+revert/), 'Roll back by reverting the bad commit: git revert --no-edit HEAD.');",
              "T.expect(T.ran(/git\\s+push/), 'Push the revert so the pipeline redeploys.');") },
          { text: "A new deployment replaced the broken one.",
            test: L(
              "T.expect(T.before.deployed('staging'), 'Setup should have left a broken deploy live (the before-state).');",
              "T.expect(T.deployed('staging').ref !== T.before.deployed('staging').ref, 'A fresh deployment should have replaced the broken one. Revert and push.');",
              "T.eq(T.lastRun().jobs.deploy.status, 'success', 'The rollback deploy should be green.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# staging is running v2-broken. Roll it back:",
            "# 1) revert the bad commit (a new commit that undoes it):",
            "",
            "# 2) push, so CD redeploys the good code:",
            "",
            "") }
        ],
        hints: [
          "`git revert --no-edit HEAD` undoes the most recent commit as a new commit.",
          "Then `git push`. The revert is on main, so the CD pipeline runs and deploys again.",
          "The run summary should show `✓ deploy`, and staging is back to the good version."
        ],
        solution: {
          "commands.sh": L("git revert --no-edit HEAD", "git push", "")
        }
      },

      {
        id: "cicd-quiz-6",
        title: "Unit 6 quiz: Continuous delivery",
        kind: "quiz", xp: 10,
        brief: "Gating a deploy to main, and rolling back. 80% to pass.",
        questions: [
          { q: "What does `if: \"${{ github.ref == 'refs/heads/main' }}\"` on a deploy job do?",
            choices: ["Runs the deploy on every branch except main", "Runs the deploy only when the push is to main", "Requires a reviewer to approve the deploy first", "Deploys to a branch named main instead of to a server"],
            answer: 1, explain: "The gate scopes the job to main; a push to any other branch skips the deploy." },
          { q: "You push a half-finished feature branch and the deploy job is gated to main. What happens to deploy?",
            choices: ["It deploys the feature branch to staging", "It is skipped", "It fails with an error", "It waits for approval"],
            answer: 1, explain: "The `if` gate is false on a feature branch, so the deploy job is skipped — nothing ships." },
          { q: "What's the fastest safe way to roll back a bad commit that just deployed from main?",
            choices: ["Delete the main branch and recreate it from scratch", "Revert the bad commit and push, so CD redeploys the good code", "Manually edit the live server's files by hand over SSH", "Turn off the whole pipeline until the bug is fixed later"],
            answer: 1, explain: "`git revert` makes a new commit undoing the bad one; pushing it runs the same pipeline and ships the previous good state." },
          { q: "Why is `git revert` used for rollback rather than editing the server directly?",
            choices: ["Editing the server is faster and leaves no messy history behind", "The revert goes through the same tested pipeline and keeps history honest", "A revert permanently erases the bad commit from the git history", "Direct edits are automatically copied back into the repository anyway"],
            answer: 1, explain: "Reverting keeps main as the source of truth and ships through the same gates; a hand-edit drifts from the repo." },
          { q: "A deploy job has no `if` gate at all. What's the danger?",
            choices: ["It never actually deploys anything to any environment", "Every branch push deploys, including unfinished feature branches", "It can only ever deploy the very first commit on the repo", "It deploys twice for every push, wasting resources each time"],
            answer: 1, explain: "Without a gate the deploy runs on every push, so half-finished branches would ship to your environment." }
        ]
      }
    ]
  });
})();
