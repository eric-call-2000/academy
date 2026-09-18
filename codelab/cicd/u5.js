/* CI/CD Pipelines — Unit 5: Secrets and environments */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var PKG = L("{", "  \"name\": \"shop\",", "  \"scripts\": { \"test\": \"true\" }", "}", "");
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
  var SECRET_START = L(
    "# The deploy step needs a token, but a token must NEVER be written into the",
    "# repo. Reference the stored secret instead: ${{ secrets.DEPLOY_TOKEN }}.",
    "name: Deploy",
    "on:",
    "  push:",
    "    branches: [main]",
    "jobs:",
    "  deploy:",
    "    runs-on: ubuntu-latest",
    "    steps:",
    "      - uses: actions/checkout@v4",
    "      # use the secret in place of the ___ below:",
    "      - run: echo \"Deploying with token ___\"",
    "");
  var SECRET_DONE = L(
    "name: Deploy",
    "on:",
    "  push:",
    "    branches: [main]",
    "jobs:",
    "  deploy:",
    "    runs-on: ubuntu-latest",
    "    steps:",
    "      - uses: actions/checkout@v4",
    "      - run: echo \"Deploying with token ${{ secrets.DEPLOY_TOKEN }}\"",
    "");
  var ENV_YML = L(
    "name: Deploy",
    "on:",
    "  push:",
    "    branches: [main]",
    "jobs:",
    "  deploy:",
    "    runs-on: ubuntu-latest",
    "    environment: production",
    "    steps:",
    "      - uses: actions/checkout@v4",
    "      - uses: actions/deploy",
    "        with: { environment: production, ref: \"${{ github.sha }}\" }",
    "");

  window.CODELAB.addUnit("cicd", {
    id: "cicd-u5",
    title: "Secrets and environments",
    icon: "🔐",
    blurb: "The credentials a pipeline needs, without leaking them, and a human gate in front of production. Referencing a masked secret, and a protected environment that waits for approval before it deploys.",
    cheat: [
      { h: "Secrets are masked", lang: "sh", code: L(
        "- run: deploy --token ${{ secrets.DEPLOY_TOKEN }}",
        "# in the logs the value prints as *** — never the token.",
        "# secrets are STORED, never committed to the repo"),
        note: "Reference a secret as ${{ secrets.NAME }}. Its value is injected at run time and masked to *** wherever it would appear in the logs, so even an accidental echo doesn't leak it." },
      { h: "secrets vs vars", lang: "text", code: L(
        "secrets.*  sensitive (tokens, keys) — masked in logs",
        "vars.*     plain config (a URL, a region) — shown"),
        note: "Both are stored outside the repo and injected at run time. Secrets are masked because they're sensitive; vars are ordinary configuration you don't mind seeing in a log." },
      { h: "A protected environment", lang: "text", code: L(
        "environment: production   # with required reviewers",
        "deploy job reaches it  ->  WAITS for approval",
        "gh deployment approve production  ->  it deploys"),
        note: "A protected environment puts a human gate before a deploy: the job pauses as \"waiting\" until someone approves, then it proceeds. Staging can deploy freely; production waits." }
    ],
    lessons: [

      {
        id: "cicd-u5-1",
        title: "Use a secret, and watch it get masked",
        kind: "shell", chip: "CICD", xp: 20, mins: 16,
        cwd: "/home/you/project",
        ci: { secrets: { DEPLOY_TOKEN: "ghp_9f3kZmQ2xWpL" } },
        fs: { "/home/you/project/package.json": PKG, "/home/you/project/index.js": "console.log('shop');\n" },
        setup: SETUP(),
        brief: "The deploy step needs an access **token**. A token must never be written into the repo — instead it's stored as a **secret** and referenced as **`${{ secrets.DEPLOY_TOKEN }}`**, injected at run time.\n\nAnd there's a safety net: a secret's value is **masked** in the logs. Even if a step prints it, the log shows `***`, never the token.\n\nEdit `.github/workflows/ci.yml`: replace the `___` in the deploy step with `${{ secrets.DEPLOY_TOKEN }}`, then commit and push. The checkpoint reads the job's log and confirms the real token never appears, only `***`.",
        example: { lang: "sh", code: "git commit -am \"Use the deploy secret\"\ngit push\n\n# in the deploy job's log:\n#   Deploying with token ***" },
        steps: [
          { text: "Reference the secret in the step, then commit and push.",
            test: L(
              "T.expect(T.ran(/git\\s+push/), 'Commit your workflow edit and push it.');",
              "T.expect(T.lastRun() && T.lastRun().jobs.deploy, 'The run should have a deploy job.');") },
          { text: "The token is used but masked — the raw value never reaches the log.",
            test: L(
              "var log = T.job(T.runs().length, 'deploy').logs || '';",
              "T.expect(log.indexOf('ghp_9f3kZmQ2xWpL') === -1, 'The raw token leaked into the log. Reference it as ${{ secrets.DEPLOY_TOKEN }} so it is masked, never typed in.');",
              "T.expect(log.indexOf('***') !== -1, 'The step should print the masked token (***). Put ${{ secrets.DEPLOY_TOKEN }} where the ___ was.');") }
        ],
        files: [
          { name: "commands.sh", content: L("# Replace ___ in ci.yml with the secret reference, then:", "# commit and push", "", "") },
          { name: ".github/workflows/ci.yml", content: SECRET_START }
        ],
        hints: [
          "In the deploy step, replace `___` with `${{ secrets.DEPLOY_TOKEN }}` (keep the surrounding quotes).",
          "The secret is stored for you — you never type the token itself, only the reference.",
          "Commit and push. The deploy job's log should read `Deploying with token ***`."
        ],
        solution: {
          "commands.sh": L("git commit -am \"Use the deploy secret\"", "git push", ""),
          ".github/workflows/ci.yml": SECRET_DONE
        }
      },

      {
        id: "cicd-u5-2",
        title: "A protected environment waits for approval",
        kind: "shell", chip: "CICD", xp: 20, mins: 16,
        cwd: "/home/you/project",
        ci: { environments: { production: { requiredReviewers: 1 } } },
        fs: { "/home/you/project/package.json": PKG, "/home/you/project/index.js": "console.log('shop');\n", "/home/you/project/.github/workflows/ci.yml": ENV_YML },
        setup: SETUP(),
        brief: "Production shouldn't deploy on a whim. This workflow's `deploy` job targets a **protected environment** — `production`, with a required reviewer. When the pipeline reached it (on the setup push), the deploy **didn't happen**: the job is **waiting for approval**, and nothing is live yet.\n\nYou're the reviewer. Approve it from the terminal:\n\n```\ngh deployment approve production\n```\n\nThat releases the gate and the deployment completes. The checkpoint confirms `production` is deployed only after your approval.",
        example: { lang: "sh", code: "# the pipeline already ran and is waiting on production\ngh deployment approve production\n\n# Approved deployment to production" },
        steps: [
          { text: "The deployment is waiting — approve it.",
            test: L(
              "T.expect(T.before.deployed('production') === null, 'Before you approve, production should not be deployed (the job is waiting).');",
              "T.expect(T.ran(/gh\\s+deployment\\s+approve/), 'Approve the deployment: gh deployment approve production.');") },
          { text: "Production is deployed now that you've approved it.",
            test: L(
              "T.expect(T.deployed('production'), 'production still is not deployed. Run: gh deployment approve production.');") }
        ],
        files: [
          { name: "commands.sh", content: L("# The deploy job is waiting on the protected 'production' environment.", "# Approve it:", "", "") }
        ],
        hints: [
          "The pipeline already ran on the setup push and paused at the protected environment.",
          "Approve with exactly: `gh deployment approve production`.",
          "After approval, production is deployed — no push needed."
        ],
        solution: {
          "commands.sh": L("gh deployment approve production", "")
        }
      },

      {
        id: "cicd-u5-3",
        title: "Secrets, vars, and where they live",
        kind: "concept", xp: 15, mins: 11,
        screens: [
          { read: "A pipeline needs configuration, and it comes in two kinds. **Secrets** (`${{ secrets.NAME }}`) are sensitive — tokens, API keys, passwords — and are **masked** in logs. **Variables** (`${{ vars.NAME }}`) are ordinary config — a base URL, a region name — and are shown in logs like any other value.\n\nBoth share one rule that matters most: they're **stored outside the repo** and injected at run time. A token committed to git is leaked forever; the whole point of secrets is to keep credentials out of the code.",
            ask: { type: "pick",
              q: "Which belongs in `secrets`, not `vars`?",
              choices: [
                "The AWS region name the deploy targets, such as us-east-1 or eu-west-2",
                "The API token the deploy uses to authenticate to the host",
                "The public base URL of the staging site that testers visit",
                "The Node version the matrix should run the test job across"
              ],
              answer: 1,
              why: [
                "A region is plain config — a var; nothing sensitive about it.",
                "Right: a token is a credential, so it's a masked secret.",
                "A public URL isn't sensitive; it's a var.",
                "A Node version is plain config, fine to show — a var."
              ] } },

          { read: "Masking is a safety net, not a licence to be careless. It replaces a secret's value with `***` wherever it would appear in a log — so an accidental `echo` doesn't leak the token. But it only masks the **exact stored value**: if a step transforms the secret (base64-encodes it, say) or writes it into a file the run uploads, masking can't follow it. Treat secrets as write-only: reference them, pass them to the tool that needs them, and never print or forward them.",
            ask: { type: "pick", transfer: true,
              q: "Why is log masking a safety net rather than a reason to relax about secrets?",
              choices: [
                "Because masking slows the pipeline down too much to rely on it every run",
                "Because it only masks the exact stored value, not transformed or forwarded copies",
                "Because masking is turned off automatically once a deploy reaches production",
                "Because the masked *** can still be reversed back into the original token easily"
              ],
              answer: 1,
              why: [
                "Masking is cheap; speed isn't the concern.",
                "Right: transform or forward a secret and masking can't follow it — so don't.",
                "Masking isn't disabled in production; it applies wherever the value appears.",
                "*** is not an encoding of the token; it can't be reversed, but copies you make aren't masked."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "A developer commits `API_KEY=sk_live_abc123` to the repo \"just for the demo.\" Is that key still safe once they delete it in the next commit? Type yes or no.",
              answer: "no",
              why: "Git keeps history, so the key lives in the old commit forever. A committed secret is leaked and must be rotated — which is exactly what secrets storage avoids." } },

          { ask: { type: "pick", transfer: true,
              q: "Where should a production API token live so a workflow can use it?",
              choices: [
                "In a config file committed to the repository, for the team's convenience",
                "In the CI system's secret store, referenced as ${{ secrets.NAME }}",
                "Hard-coded in the workflow YAML with a comment saying to keep it private",
                "In the client-side bundle so the deployed app can read it directly"
              ],
              answer: 1,
              why: [
                "A committed file leaks it into git history for anyone with the repo.",
                "Right: stored as a secret and referenced at run time, never in the repo.",
                "The YAML is in the repo, so that's the same leak with a comment.",
                "The client bundle ships to every visitor — the worst place for a token."
              ] } }
        ]
      },

      {
        id: "cicd-quiz-5",
        title: "Unit 5 quiz: Secrets and environments",
        kind: "quiz", xp: 10,
        brief: "Secret references and masking, secrets vs vars, and protected environments. 80% to pass.",
        questions: [
          { q: "How does a workflow use a stored secret named DEPLOY_TOKEN?",
            choices: ["By committing it to the repo and reading the file", "By referencing ${{ secrets.DEPLOY_TOKEN }}", "By printing it to the log so later steps can read it", "By hard-coding the value directly into the YAML"],
            answer: 1, explain: "Reference secrets with ${{ secrets.NAME }}. They're stored outside the repo and injected at run time." },
          { q: "A step echoes a secret's value. What appears in the log?",
            choices: ["The full secret value in plain text", "*** — the value is masked", "An error that stops the run", "Nothing at all is logged by that step"],
            answer: 1, explain: "Secret values are masked to *** in logs, so an accidental echo doesn't leak the credential." },
          { q: "Which of these should be a `secret` rather than a `var`?",
            choices: ["The deploy region, like us-east-1", "The API token used to authenticate", "The public staging URL", "The Node version to test on"],
            answer: 1, explain: "A token is a credential (masked secret). Regions, URLs and versions are plain config (vars)." },
          { q: "A token was committed to the repo, then deleted in the next commit. Is it safe?",
            choices: ["Yes, deleting it removed it entirely", "No — it's in git history and must be rotated", "Yes, as long as the repository is private", "Only if no one has cloned the repo yet"],
            answer: 1, explain: "Git keeps history; the token is recoverable from the old commit. Rotate it — and never commit secrets." },
          { q: "What does a protected environment with a required reviewer do to a deploy job?",
            choices: ["It speeds the deploy up by skipping the tests", "It pauses the job as waiting until someone approves", "It deploys immediately but sends an email afterward", "It blocks the deploy permanently with no way to proceed"],
            answer: 1, explain: "The job waits for approval; once a reviewer approves, the deployment proceeds. A human gate before production." }
        ]
      }
    ]
  });
})();
