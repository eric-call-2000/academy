/* CI/CD Pipelines — Unit 3: Matrix and caching */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  var PKG = L(
    "{",
    "  \"name\": \"shop\",",
    "  \"version\": \"1.0.0\",",
    "  \"scripts\": { \"test\": \"true\" }",
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
  var MATRIX_START = L(
    "# Run the tests, but only on ONE Node version. Add a matrix so the same",
    "# job runs once per version in the list.",
    "name: CI",
    "on:",
    "  push:",
    "    branches: [main]",
    "jobs:",
    "  test:",
    "    runs-on: ubuntu-latest",
    "    # strategy:",
    "    #   matrix:",
    "    #     node: [ ... ]",
    "    steps:",
    "      - uses: actions/checkout@v4",
    "      - run: npm test",
    "");
  var MATRIX_DONE = L(
    "name: CI",
    "on:",
    "  push:",
    "    branches: [main]",
    "jobs:",
    "  test:",
    "    runs-on: ubuntu-latest",
    "    strategy:",
    "      matrix:",
    "        node: [18, 20, 22]",
    "    steps:",
    "      - uses: actions/checkout@v4",
    "      - run: npm test",
    "");
  var CACHE_START = L(
    "# Add a cache step BEFORE the tests so dependencies aren't rebuilt every",
    "# run. A cache needs a path and a key.",
    "name: CI",
    "on:",
    "  push:",
    "    branches: [main]",
    "jobs:",
    "  test:",
    "    runs-on: ubuntu-latest",
    "    steps:",
    "      - uses: actions/checkout@v4",
    "      # cache step goes here:",
    "      - run: npm test",
    "");
  var CACHE_DONE = L(
    "name: CI",
    "on:",
    "  push:",
    "    branches: [main]",
    "jobs:",
    "  test:",
    "    runs-on: ubuntu-latest",
    "    steps:",
    "      - uses: actions/checkout@v4",
    "      - uses: actions/cache@v4",
    "        with:",
    "          path: node_modules",
    "          key: npm-deps",
    "      - run: npm test",
    "");

  window.CODELAB.addUnit("cicd", {
    id: "cicd-u3",
    title: "Matrix and caching",
    icon: "🧮",
    blurb: "Test on several versions at once, and stop reinstalling the world every run. A matrix that fans one job out across combinations, a cache keyed so it speeds things up without ever changing the result.",
    cheat: [
      { h: "A matrix fans a job out", lang: "sh", code: L(
        "strategy:",
        "  matrix:",
        "    node: [18, 20, 22]",
        "# the job runs 3 times — once per node value, in parallel"),
        note: "A matrix runs the same job once per combination of its values. Testing on Node 18, 20 and 22 at once catches a version-specific break before your users do. Two lists multiply." },
      { h: "Cache the slow, stable parts", lang: "sh", code: L(
        "- uses: actions/cache@v4",
        "  with: { path: node_modules, key: npm-deps }",
        "# first run: MISS (saves it). later runs: HIT (restores it)"),
        note: "A cache stores something slow to produce — installed dependencies — under a key. A miss saves it after the job succeeds; a later run with the same key restores it, skipping the reinstall." },
      { h: "A cache must not change results", lang: "text", code: L(
        "key = something that changes when the deps change",
        "  (real workflows hash the lockfile)",
        "same deps  -> same key -> safe to reuse",
        "new deps   -> new key  -> rebuilt, not stale"),
        note: "A cache may only make the run faster, never change its outcome. Key it on what the cached thing depends on, so new dependencies get a new key and you never test against a stale cache." }
    ],
    lessons: [

      {
        id: "cicd-u3-1",
        title: "A matrix: test on three Node versions",
        kind: "shell", chip: "CICD", xp: 20, mins: 16,
        cwd: "/home/you/project",
        fs: { "/home/you/project/package.json": PKG, "/home/you/project/index.js": "console.log('shop');\n" },
        setup: SETUP(),
        brief: "Your app has to run on more than one version of Node, but the pipeline only tests on one. A **matrix** fixes that: it runs the same job **once per value** in a list, in parallel.\n\nEdit `.github/workflows/ci.yml` to add a matrix over three Node versions:\n\n```\nstrategy:\n  matrix:\n    node: [18, 20, 22]\n```\n\nThen commit and push. The `test` job should fan out into **three** runs — one per version. The checkpoint counts them in the run.",
        example: { lang: "sh", code: "git commit -am \"Test on a Node matrix\"\ngit push\n\n# ▸ CI · push to main — passed\n#   ✓ test (18)\n#   ✓ test (20)\n#   ✓ test (22)" },
        steps: [
          { text: "Add the matrix, then commit and push.",
            test: L(
              "T.expect(T.ran(/git\\s+push/), 'Commit your workflow edit and push it.');",
              "T.expect(T.lastRun(), 'No run yet — commit ci.yml and push.');") },
          { text: "The `test` job ran three times, once per Node version.",
            test: L(
              "var jobs = Object.keys(T.lastRun().jobs).filter(function (k) { return k.indexOf('test') === 0; });",
              "T.eq(jobs.length, 3, 'The test job should run 3 times. Add strategy: { matrix: { node: [18, 20, 22] } } to the test job.');",
              "T.eq(T.lastRun().status, 'success', 'All three matrix jobs should pass.');") }
        ],
        files: [
          { name: "commands.sh", content: L("# Edit ci.yml to add the matrix, then:", "# commit and push", "", "") },
          { name: ".github/workflows/ci.yml", content: MATRIX_START }
        ],
        hints: [
          "Add a `strategy:` key to the test job, at the same indentation as `runs-on:` and `steps:`.",
          "Under it: `matrix:` then `node: [18, 20, 22]`.",
          "Then `git commit -am \"...\"` and `git push`. The run should list test (18), test (20), test (22)."
        ],
        solution: {
          "commands.sh": L("git commit -am \"Test on a Node matrix\"", "git push", ""),
          ".github/workflows/ci.yml": MATRIX_DONE
        }
      },

      {
        id: "cicd-u3-2",
        title: "Caching: don't reinstall every run",
        kind: "shell", chip: "CICD", xp: 20, mins: 17,
        cwd: "/home/you/project",
        fs: { "/home/you/project/package.json": PKG, "/home/you/project/index.js": "console.log('shop');\n" },
        setup: SETUP(),
        brief: "Installing dependencies is often the slowest part of a pipeline, and they rarely change. A **cache** stores them under a **key**: the first run **misses** and saves the cache; later runs with the same key **hit** and restore it, skipping the reinstall.\n\nAdd a cache step to `.github/workflows/ci.yml` (right after checkout):\n\n```\n- uses: actions/cache@v4\n  with:\n    path: node_modules\n    key: npm-deps\n```\n\nThe first push saves the cache (a miss); the second push restores it (a hit). `commands.sh` already pushes twice — you fill in the cache step. The checkpoint confirms the **second** run hit the cache.",
        example: { lang: "sh", code: "git commit -am \"Cache dependencies\"\ngit push          # run 1: cache miss (saves it)\necho x >> index.js\ngit commit -am \"touch\"\ngit push          # run 2: cache hit" },
        steps: [
          { text: "Add the cache step and push twice (commands.sh does the second push).",
            test: L(
              "T.eq(T.runs().length >= 2, true, 'There should be two runs — the workflow needs to fire twice. Keep both pushes.');") },
          { text: "The second run restored the cache instead of missing.",
            test: L(
              "T.expect(T.lastRun().cacheHits.length > 0, 'The last run should have a cache HIT. Add an actions/cache step with a path and a key, so the second run restores it.');",
              "T.eq(T.lastRun().status, 'success', 'The pipeline should still be green.');") }
        ],
        files: [
          { name: "commands.sh", content: L(
            "# Add the cache step to ci.yml first, then run these:",
            "",
            "# run 1 — commit the workflow and push (cache miss, saves it):",
            "git add -A",
            "git commit -m \"Cache dependencies\"",
            "git push",
            "",
            "# run 2 — push once more to see the cache hit:",
            "echo \"// touch\" >> index.js",
            "git commit -am \"touch\"",
            "git push",
            "") },
          { name: ".github/workflows/ci.yml", content: CACHE_START }
        ],
        hints: [
          "After the checkout step, add `- uses: actions/cache@v4` then an indented `with:` block.",
          "`with:` needs `path: node_modules` and `key: npm-deps` (any stable key works here).",
          "Leave both pushes in commands.sh: the first saves the cache, the second hits it."
        ],
        solution: {
          "commands.sh": L(
            "git add -A",
            "git commit -m \"Cache dependencies\"",
            "git push",
            "echo \"// touch\" >> index.js",
            "git commit -am \"touch\"",
            "git push",
            ""),
          ".github/workflows/ci.yml": CACHE_DONE
        }
      },

      {
        id: "cicd-u3-3",
        title: "Matrices and caches, used well",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "A matrix multiplies. `node: [18, 20]` runs a job twice; add `os: [ubuntu, windows]` and it runs **four** times — every combination. That's powerful for coverage and easy to overdo: a big matrix is a lot of parallel work and time.\n\nBy default a matrix is **fail-fast**: if one combination fails, the rest are **cancelled**, because you already know the change is broken. You can turn that off when you want to see *every* failing combination at once, at the cost of finishing them all.",
            ask: { type: "pick",
              q: "A matrix has `node: [18, 20]` and `os: [ubuntu, windows]`. How many times does the job run?",
              choices: ["Two, one for each of the two different Node versions", "Four, one per combination of node and os", "One, because a job can only ever run a single time", "Eight, doubling each of the four for safety margin"],
              answer: 1,
              why: [
                "That would be a matrix with only the node list; os multiplies it.",
                "Right: 2 Node versions × 2 operating systems = 4 combinations.",
                "A matrix is exactly the feature that runs one job many times.",
                "The combinations are 2 × 2 = 4; nothing doubles them again."
              ] } },

          { read: "Caching has one iron rule: a cache may make a run **faster**, never **different**. If a stale cache could change whether the tests pass, the cache is a bug.\n\nThe defense is the **key**. Key the cache on whatever the cached thing depends on, so a change produces a new key and a fresh build. Real workflows key dependency caches on a **hash of the lockfile**: same lockfile, same key, safe to reuse; new dependencies, new hash, new key — no stale `node_modules`.",
            ask: { type: "pick", transfer: true,
              q: "Why do real workflows key a dependency cache on a hash of the lockfile?",
              choices: [
                "So that the cache key looks unique and is much harder for anyone to guess",
                "So the key changes when dependencies change, avoiding a stale cache",
                "So the cache is compressed to a noticeably smaller size before it is stored",
                "So the cache is automatically deleted at the end of every single run"
              ],
              answer: 1,
              why: [
                "It's not about secrecy; it's about correctness.",
                "Right: a new lockfile means a new key, so you never restore dependencies that no longer match.",
                "Hashing the key doesn't compress the cached files.",
                "The hash doesn't delete anything; it decides when to reuse vs rebuild."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "A matrix is fail-fast, and one combination fails early. What happens to the combinations still running — do they finish, or are they cancelled? Type one word.",
              answer: "cancelled",
              accept: ["canceled"],
              why: "Fail-fast cancels the remaining combinations once one fails, since the change is already known to be broken. Turn it off to see every failure." } },

          { ask: { type: "pick", transfer: true,
              q: "A cache key never changes, but the project's dependencies were updated. What's the risk?",
              choices: [
                "The cache grows without limit until it fills up all of the available disk",
                "The run restores the old dependencies and tests against a stale cache",
                "The cache key collides with another completely unrelated repository's key",
                "The pipeline refuses to start at all until the cache is manually cleared"
              ],
              answer: 1,
              why: [
                "Size isn't the issue; correctness is.",
                "Right: a fixed key reuses the old node_modules, so you test against stale dependencies — a cache that changed the result.",
                "Keys are scoped to the repo; cross-repo collision isn't the risk here.",
                "A stale cache doesn't block the run; it silently makes it wrong."
              ] } }
        ]
      },

      {
        id: "cicd-quiz-3",
        title: "Unit 3 quiz: Matrix and caching",
        kind: "quiz", xp: 10,
        brief: "Matrices, fail-fast, and caching correctly. 80% to pass.",
        questions: [
          { q: "`strategy: { matrix: { node: [18, 20, 22] } }` on a job means it runs…",
            choices: ["Once, using the newest version listed", "Three times, once per Node version", "Three times, but only if the first one fails", "Once for every push, ignoring the list"],
            answer: 1, explain: "A matrix runs the job once per value — here three times, in parallel, one per Node version." },
          { q: "A matrix has `node: [18, 20]` and `os: [ubuntu, windows]`. How many job runs?",
            choices: ["2", "4", "1", "6"],
            answer: 1, explain: "Every combination: 2 × 2 = 4 runs." },
          { q: "What does a cache do on its FIRST run with a new key?",
            choices: ["Restores the cached files immediately", "Misses, then saves the files after the job succeeds", "Fails the job because there's nothing to restore", "Deletes any older caches sharing that path"],
            answer: 1, explain: "First run is a miss; the cache is populated after the job passes, so later runs can hit it." },
          { q: "What is the one rule a cache must never break?",
            choices: ["It must never make the pipeline run any faster than before", "It may make a run faster but must never change its result", "It must be cleared by hand before every single pipeline run", "It must store the entire repository, not just dependencies"],
            answer: 1, explain: "A cache is a speed optimization only. If a stale cache could change whether tests pass, the cache is a bug." },
          { q: "Why key a dependency cache on a hash of the lockfile?",
            choices: ["To make the key impossible for other people to guess or reuse", "So the key changes when dependencies change, preventing a stale cache", "To shrink the cache down to a much smaller size on disk", "To force the cache to expire exactly once every twenty-four hours"],
            answer: 1, explain: "New dependencies → new lockfile hash → new key → a fresh install, never a stale node_modules." }
        ]
      }
    ]
  });
})();
