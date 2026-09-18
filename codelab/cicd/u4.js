/* CI/CD Pipelines — Unit 4: Artifacts */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var PKG = L("{", "  \"name\": \"shop\",", "  \"scripts\": { \"build\": \"cp -r src dist\" }", "}", "");
  function SETUP() {
    return L(
      "git init -q -b main",
      "git add -A",
      "git commit -qm 'initial project'",
      "git init -q --bare /srv/origin.git",
      "git remote add origin /srv/origin.git",
      "git push -u origin main");
  }
  var ART_START = L(
    "# build produces dist/ and uploads it. package needs that dist/ — but its",
    "# workspace is empty until it DOWNLOADS the artifact. Add the download step.",
    "name: CI",
    "on:",
    "  push:",
    "    branches: [main]",
    "jobs:",
    "  build:",
    "    runs-on: ubuntu-latest",
    "    steps:",
    "      - uses: actions/checkout@v4",
    "      - run: mkdir -p dist && echo built > dist/app.js",
    "      - uses: actions/upload-artifact@v4",
    "        with: { name: dist, path: dist }",
    "  package:",
    "    runs-on: ubuntu-latest",
    "    needs: build",
    "    steps:",
    "      # download the 'dist' artifact into dist/ here:",
    "      - run: cat dist/app.js",
    "");
  var ART_DONE = L(
    "name: CI",
    "on:",
    "  push:",
    "    branches: [main]",
    "jobs:",
    "  build:",
    "    runs-on: ubuntu-latest",
    "    steps:",
    "      - uses: actions/checkout@v4",
    "      - run: mkdir -p dist && echo built > dist/app.js",
    "      - uses: actions/upload-artifact@v4",
    "        with: { name: dist, path: dist }",
    "  package:",
    "    runs-on: ubuntu-latest",
    "    needs: build",
    "    steps:",
    "      - uses: actions/download-artifact@v4",
    "        with: { name: dist, path: dist }",
    "      - run: cat dist/app.js",
    "");

  window.CODELAB.addUnit("cicd", {
    id: "cicd-u4",
    title: "Artifacts: build once, use later",
    icon: "📦",
    blurb: "Produce the build in one job and hand it to another — don't rebuild it. Uploading and downloading an artifact between jobs, and the sharp line between an artifact and a cache.",
    cheat: [
      { h: "Pass a build between jobs", lang: "sh", code: L(
        "build job:   - uses: actions/upload-artifact",
        "               with: { name: dist, path: dist }",
        "ship job:    - uses: actions/download-artifact",
        "               with: { name: dist, path: dist }"),
        note: "Each job starts with a fresh workspace, so the build one job produced isn't there in the next. Upload it as an artifact, download it downstream — build once, use it everywhere after." },
      { h: "Artifact vs cache", lang: "text", code: L(
        "artifact  passes files BETWEEN JOBS of one run;",
        "          the deliverable — the build you ship",
        "cache     speeds up FUTURE runs (deps);",
        "          persists across runs, never a deliverable"),
        note: "An artifact carries a real output forward within a run and is gone when the run ends. A cache carries a speed-up forward to later runs and must never change a result. Different jobs, different tools." }
    ],
    lessons: [

      {
        id: "cicd-u4-1",
        title: "Upload in one job, download in the next",
        kind: "shell", chip: "CICD", xp: 20, mins: 17,
        cwd: "/home/you/project",
        fs: { "/home/you/project/package.json": PKG, "/home/you/project/src/app.js": "console.log('app');\n" },
        setup: SETUP(),
        brief: "Two jobs: **`build`** produces `dist/` and **uploads** it as an artifact named `dist`; **`package`** needs that build. But every job starts with a **fresh, empty workspace** — so `package` doesn't have `dist/` unless it **downloads** the artifact first. Right now `package` jumps straight to `cat dist/app.js` and fails.\n\nAdd a **download** step to `package`, before the `cat`:\n\n```\n- uses: actions/download-artifact@v4\n  with: { name: dist, path: dist }\n```\n\nThen commit and push. The checkpoints confirm the artifact exists and the `package` job is green.",
        example: { lang: "sh", code: "git commit -am \"Download the build artifact\"\ngit push\n\n# ▸ CI · push to main — passed\n#   ✓ build\n#   ✓ package" },
        steps: [
          { text: "Add the download step, then commit and push.",
            test: L(
              "T.expect(T.ran(/git\\s+push/), 'Commit your workflow edit and push it.');",
              "T.expect(T.lastRun(), 'No run yet — commit ci.yml and push.');") },
          { text: "`build` uploaded the artifact and `package` used it.",
            test: L(
              "T.expect(T.artifact('dist').present, 'The build job should upload an artifact named dist. Keep the upload-artifact step.');",
              "T.eq(T.lastRun().jobs.package.status, 'success', 'package should be green. It fails until it downloads the dist artifact into dist/ before the cat.');",
              "T.eq(T.lastRun().status, 'success', 'The whole pipeline should be green.');") }
        ],
        files: [
          { name: "commands.sh", content: L("# Add the download-artifact step to the package job, then:", "# commit and push", "", "") },
          { name: ".github/workflows/ci.yml", content: ART_START }
        ],
        hints: [
          "In the package job's steps, before the `cat`, add `- uses: actions/download-artifact@v4`.",
          "Give it a `with:` block: `name: dist` and `path: dist` — the same name the build job uploaded.",
          "Then `git commit -am \"...\"` and `git push`. Both build and package should be green."
        ],
        solution: {
          "commands.sh": L("git commit -am \"Download the build artifact\"", "git push", ""),
          ".github/workflows/ci.yml": ART_DONE
        }
      },

      {
        id: "cicd-u4-2",
        title: "Artifact or cache?",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "Artifacts and caches both carry files forward, and they're easy to confuse — but they solve opposite problems.\n\nAn **artifact** is a **deliverable** passed **between jobs of one run**: the build job makes `dist/`, the deploy job needs exactly that build, so it's uploaded and downloaded. It belongs to the run and is gone when the run ends.\n\nA **cache** is a **speed-up** carried to **future runs**: installed dependencies that rarely change, restored so the next run skips the reinstall. It persists across runs and must never change a result.",
            ask: { type: "pick",
              q: "You need the exact `dist/` that the build job produced, in the deploy job of the same run. Artifact or cache?",
              choices: [
                "A cache, keyed so that the deploy job can restore the built files later on",
                "An artifact, uploaded by build and downloaded by deploy",
                "Neither — the deploy job already has the build job's files automatically",
                "Both at once, an artifact for build and a cache for deploy, to be safe"
              ],
              answer: 1,
              why: [
                "A cache is for speeding up future runs, not for passing a deliverable between jobs.",
                "Right: the build is a deliverable passed between jobs of one run — an artifact.",
                "Each job has a fresh workspace, so deploy does NOT have build's files.",
                "One tool fits; using both here just adds confusion."
              ] } },

          { read: "The tell is *what you're carrying and where it's going.* Carrying a **real output** (a build, a test report, a binary) to **another job now**? Artifact. Carrying a **reproducible speed-up** (dependencies, compiled intermediates) to a **future run**, where a stale copy would only cost time, not correctness? Cache.\n\nAnd the scopes differ: an artifact does **not** survive to the next run; a cache does **not** pass a deliverable between jobs. Reach for the wrong one and you'll either rebuild needlessly or ship something stale.",
            ask: { type: "pick", transfer: true,
              q: "Installed `node_modules`, restored so the NEXT run doesn't reinstall. Artifact or cache?",
              choices: [
                "An artifact, because node_modules is a real build output of the job",
                "A cache, because it's a reproducible speed-up carried to future runs",
                "An artifact, so the very next job in this same run can reuse it quickly",
                "Neither, because dependencies should always be reinstalled from scratch"
              ],
              answer: 1,
              why: [
                "node_modules is reproducible from the lockfile — a speed-up, not a deliverable to ship.",
                "Right: it's a reproducible speed-up carried to future runs — a cache.",
                "Passing it within one run would be an artifact's job, but the goal here is future runs.",
                "Reinstalling every time is exactly the waste a cache removes."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "A run finishes and a new run starts an hour later. Does the first run's uploaded artifact automatically appear in the new run's jobs? Type yes or no.",
              answer: "no",
              why: "Artifacts belong to their run; they don't cross into a later run. Carrying something to a future run is a cache's job." } },

          { ask: { type: "pick", transfer: true,
              q: "The `build` job is skipped (an `if` was false), and `deploy` runs `download-artifact` for `dist`. What happens?",
              choices: [
                "deploy quietly uses an empty dist and reports success anyway with nothing",
                "deploy fails, because the artifact was never uploaded to download",
                "deploy rebuilds dist itself automatically from the source in the repo",
                "the whole run is cancelled the moment the build job gets skipped at all"
              ],
              answer: 1,
              why: [
                "There's no artifact to download, so it can't silently succeed with the right files.",
                "Right: no build means no uploaded artifact, so the download fails and deploy fails.",
                "download-artifact restores an uploaded artifact; it doesn't rebuild anything.",
                "A skipped job doesn't cancel the run; the downstream job just can't find the artifact."
              ] } }
        ]
      },

      {
        id: "cicd-quiz-4",
        title: "Unit 4 quiz: Artifacts",
        kind: "quiz", xp: 10,
        brief: "Passing a build between jobs, and artifact vs cache. 80% to pass.",
        questions: [
          { q: "Why can't the `deploy` job just use the `dist/` that the `build` job produced?",
            choices: ["Because dist/ is deleted at the end of the build job on purpose", "Because each job starts with a fresh, empty workspace", "Because deploy runs before build finishes producing it", "Because dist/ is added to .gitignore automatically by CI"],
            answer: 1, explain: "Jobs don't share a workspace. To move a build between them, upload it as an artifact and download it." },
          { q: "What is an artifact used for?",
            choices: ["Speeding up all of your future pipeline runs by storing the installed dependencies between them", "Passing a build or report between jobs of one run", "Permanently archiving every commit's source code", "Caching the git history so clones are faster"],
            answer: 1, explain: "An artifact carries a deliverable between jobs within a run; it doesn't persist to future runs." },
          { q: "Installed dependencies you want the NEXT run to reuse — artifact or cache?",
            choices: ["Artifact", "Cache", "Both", "Neither"],
            answer: 1, explain: "A cache carries a reproducible speed-up to future runs; an artifact is for a deliverable within one run." },
          { q: "Does an artifact uploaded in one run appear automatically in a later run?",
            choices: ["Yes, artifacts persist across all future runs by default", "No, artifacts belong to their run only", "Yes, but only for the very next run after it", "Only if the two runs are on the same branch name"],
            answer: 1, explain: "Artifacts are scoped to their run. Carrying something forward to a later run is what a cache does." },
          { q: "The build job is skipped and deploy runs download-artifact for it. Result?",
            choices: ["deploy succeeds with an empty download", "deploy fails — there's no artifact to download", "deploy rebuilds the artifact from source itself", "the run restarts the build job automatically"],
            answer: 1, explain: "No build means no uploaded artifact, so the download — and the deploy job — fail." }
        ]
      }
    ]
  });
})();
