/* Git & Version Control — Unit 2: History you can read */
window.CODELAB.addUnit("git", {
  id: "git-u2",
  title: "History you can read",
  icon: "🔍",
  blurb: "Diffs that say exactly what changed, the files that must never be committed, and commit messages that still make sense a year from now.",
  cheat: [
    { h: "Which diff compares what", lang: "sh", code: "git diff             # working tree  vs  index    (not staged yet)\ngit diff --staged    # index         vs  HEAD     (what will commit)\ngit diff HEAD        # working tree  vs  HEAD     (everything)\ngit show             # what the last commit changed\ngit log -p           # every commit, with its diff", note: "An empty `git diff` doesn't mean nothing changed — it means nothing UNSTAGED changed. Check --staged too." },
    { h: "Reading a diff", lang: "sh", code: "diff --git a/pricing.js b/pricing.js\n--- a/pricing.js          # before\n+++ b/pricing.js          # after\n@@ -1,2 +1,2 @@           # old lines 1-2 → new lines 1-2\n-const rate = 0.05;        # removed\n+const rate = 0.07;        # added\n const tax = price * rate; # context (unchanged)", note: "A changed line is always a removal plus an addition. Git has no concept of \"edited\"." },
    { h: ".gitignore patterns", lang: "sh", code: "node_modules/    # a directory, anywhere\n*.log            # any .log file, any depth\n.env*            # .env, .env.local, .env.production …\n!.env.example    # …except this one (negation)\n/build           # only at the repo root\ngit check-ignore -v logs/dev.log   # which rule matched?", note: "A pattern with no slash matches a name at any depth. A later rule beats an earlier one." },
    { h: "Already committed it?", lang: "sh", code: "git rm --cached .env    # stop tracking, keep the file on disk\necho \".env\" >> .gitignore\ngit commit -m \"Stop tracking .env\"", note: ".gitignore never affects files Git already tracks. And the old commit still contains the secret — rotate it." },
    { h: "Messages: the 50/72 rule", lang: "sh", code: "git commit -m \"Round totals to whole cents\" \\\n           -m \"Sums like 0.1 + 0.2 left totals at 0.30000000000000004.\"\n# subject ≤ 50 chars, imperative, capitalised, no period\n# each -m becomes a paragraph; keep body lines ≤ 72", note: "Test for the imperative: \"If applied, this commit will ___.\" — Round totals ✓  Rounded totals ✗" }
  ],
  lessons: [

    {
      id: "git-u2-1",
      title: "git diff vs git diff --staged",
      kind: "shell", chip: "GIT", xp: 20, mins: 14,
      cwd: "/home/you/project",
      setup: "git init\necho \"const rate = 0.05;\" > pricing.js\necho \"const tax = price * rate;\" >> pricing.js\necho \"# Shop\" > README.md\ngit add .\ngit commit -m \"Add pricing\"\necho \"const rate = 0.07;\" > pricing.js\necho \"const tax = price * rate;\" >> pricing.js\necho \"Prices include tax.\" >> README.md",
      brief: "You've edited two files. Before committing, you want to see **exactly** what changed — line by line. That's `git diff`.\n\nThe trap: `git diff` doesn't compare your files to the last commit. It compares the **working tree to the index** — so it only shows changes you *haven't staged yet*. Once you `git add` a file, it vanishes from `git diff` and shows up in `git diff --staged` instead, which compares the **index to HEAD**: exactly what your next commit will contain.\n\nTwo diffs, two pairs of trees. Stage only the README change, then look at both — and see each file land in exactly one of them.",
      example: { lang: "sh", code: "git diff\n# diff --git a/pricing.js b/pricing.js\n# index 3c1d2a7..9e0b5f4 100644\n# --- a/pricing.js\n# +++ b/pricing.js\n# @@ -1,2 +1,2 @@\n# -const rate = 0.05;\n# +const rate = 0.07;\n#  const tax = price * rate;" },
      steps: [
        { text: "Stage `README.md` only — leave `pricing.js` unstaged.",
          test: "T.eq(T.staged(), ['README.md'], 'Stage README.md and nothing else: git add README.md');\nT.eq(T.unstaged(), ['pricing.js'], 'pricing.js should stay unstaged so plain git diff has something to show');" },
        { text: "Run plain `git diff`: it should show the rate change — and not mention the README.",
          test: "var d = T.transcript.filter(function (t) { return /^git diff\\s*$/.test(t.cmd); }).pop();\nT.expect(d, 'Run plain git diff (no flags) after staging');\nT.expect(d.out.indexOf('-const rate = 0.05;') !== -1 && d.out.indexOf('+const rate = 0.07;') !== -1, 'git diff should show -0.05 / +0.07 for pricing.js — is pricing.js still unstaged?');\nT.expect(d.out.indexOf('README.md') === -1, 'README.md shows up in plain git diff, so it isn\\'t staged yet — git add README.md BEFORE running git diff');" },
        { text: "Run `git diff --staged`: it should show the README line — and not mention pricing.js.",
          test: "var s = T.transcript.filter(function (t) { return /^git diff --(staged|cached)\\s*$/.test(t.cmd); }).pop();\nT.expect(s, 'Run git diff --staged');\nT.expect(s.out.indexOf('+Prices include tax.') !== -1, 'git diff --staged should show +Prices include tax. — the staged README change');\nT.expect(s.out.indexOf('pricing.js') === -1, 'pricing.js shows up in the staged diff — it should not be staged');" }
      ],
      files: [
        { name: "commands.sh", content: "# pricing.js and README.md both have uncommitted edits.\n\n# 1) Stage only the README:\n\n# 2) What's changed but NOT staged?\n\n# 3) What's staged and about to be committed?\n\n" }
      ],
      hints: [
        "`git add README.md` stages just that file.",
        "Plain `git diff` compares the working tree with the index, so after staging the README only pricing.js is left in it.",
        "`git diff --staged` (same as `--cached`) compares the index with your last commit."
      ],
      solution: {
        "commands.sh": "# pricing.js and README.md both have uncommitted edits.\n\n# 1) Stage only the README:\ngit add README.md\n\n# 2) What's changed but NOT staged?\ngit diff\n\n# 3) What's staged and about to be committed?\ngit diff --staged\n"
      }
    },

    {
      id: "git-u2-2",
      title: "What never gets committed: .gitignore",
      kind: "shell", chip: "GIT", xp: 20, mins: 14,
      cwd: "/home/you/project",
      setup: "git init\nmkdir src\necho \"console.log('shop');\" > src/app.js\ngit add src/app.js\ngit commit -m \"Add the app\"\nmkdir node_modules\necho \"module.exports = pad;\" > node_modules/left-pad.js\necho \"API_KEY=abc123\" > .env\necho \"API_KEY=local-dev-key\" > .env.local\necho \"API_KEY=your-key-here\" > .env.example\nmkdir build\necho \"bundled output\" > build/app.js\nmkdir logs\necho \"GET / 200\" > logs/dev.log",
      brief: "Some files must never enter a repository: **dependencies** you can reinstall (`node_modules/`), **build output** you can regenerate (`build/`), **logs**, and above all **secrets** (`.env`). A secret that gets committed stays in the history even after you delete the file.\n\nA `.gitignore` file lists patterns Git should pretend not to see. Ignored files vanish from `git status` and `git add .` skips them.\n\nThis project needs `.env` **and** `.env.local` ignored — but `.env.example` is a template with no real keys, and every teammate needs it. One broad pattern plus one exception, written with `!`, does both. Build the file one line at a time with `echo \"pattern\" >> .gitignore`, then commit everything that's left.",
      example: { lang: "sh", code: "echo \"node_modules/\" > .gitignore     # > creates the file\necho \"*.log\" >> .gitignore           # >> appends a line\ngit check-ignore -v logs/dev.log\n# .gitignore:2:*.log\tlogs/dev.log" },
      steps: [
        { text: "Write a `.gitignore` that hides `node_modules/`, `build/`, every `.log` file, and every file starting with `.env`.",
          test: "T.expect(T.wt('.gitignore') != null, 'There is no .gitignore yet — create it with echo \"node_modules/\" > .gitignore');\nvar need = ['node_modules/left-pad.js', 'build/app.js', 'logs/dev.log', '.env', '.env.local'];\nfor (var i = 0; i < need.length; i++) T.expect(T.ignored(need[i]), need[i] + ' is not ignored yet — add a pattern for it');" },
        { text: "Make `.env.example` the exception: a `!` line after the `.env` pattern re-includes it.",
          test: "T.expect(!T.ignored('.env.example'), '.env.example is ignored — add !.env.example AFTER your .env pattern (later rules win)');\nT.expect(T.ignored('.env'), '.env must stay ignored');" },
        { text: "Stage everything with `git add .` and commit it as **Add .gitignore and the env template**.",
          test: "var f = (T.commit('HEAD') || {}).files || {};\nT.expect(f['.gitignore'] != null && f['.env.example'] != null, 'The last commit should contain .gitignore and .env.example — git add . then git commit');\nT.expect(f['.env'] == null && f['.env.local'] == null, 'A secret got committed — .env and .env.local must be ignored BEFORE git add .');\nT.eq(T.untracked(), [], 'Nothing should be left untracked: everything is either ignored or committed');\nT.eq(T.log()[0].subject, 'Add .gitignore and the env template', 'Commit message should be: Add .gitignore and the env template');" }
      ],
      files: [
        { name: "commands.sh", content: "# The app is committed. Everything else here is junk or secrets —\n# except .env.example, a key-free template teammates need.\n# Add a line:   echo \"pattern\" >> .gitignore\n\n# 1) Ignore dependencies, build output, logs and .env files:\n\n# 2) ...but keep .env.example:\n\n# 3) Commit what's left:\n\n" }
      ],
      hints: [
        "Directories: `node_modules/` and `build/`. Logs: `*.log`. Every env file: `.env*`.",
        "After `.env*`, add `!.env.example` — a `!` pattern re-includes a file an earlier pattern excluded, and the order matters.",
        "Then `git add .` and `git commit -m \"Add .gitignore and the env template\"`. Run `git status` to check nothing's left untracked."
      ],
      solution: {
        "commands.sh": "# The app is committed. Everything else here is junk or secrets —\n# except .env.example, a key-free template teammates need.\n# Add a line:   echo \"pattern\" >> .gitignore\n\n# 1) Ignore dependencies, build output, logs and .env files:\necho \"node_modules/\" > .gitignore\necho \"build/\" >> .gitignore\necho \"*.log\" >> .gitignore\necho \".env*\" >> .gitignore\n\n# 2) ...but keep .env.example:\necho \"!.env.example\" >> .gitignore\n\n# 3) Commit what's left:\ngit add .\ngit commit -m \"Add .gitignore and the env template\"\ngit status\n"
      }
    },

    {
      id: "git-u2-3",
      title: "Already committed it? git rm --cached",
      kind: "shell", chip: "GIT", xp: 20, mins: 12,
      cwd: "/home/you/project",
      setup: "git init\necho \"console.log('shop');\" > app.js\necho \"API_KEY=abc123\" > .env\ngit add .\ngit commit -m \"First version\"",
      brief: "Someone ran `git add .` on day one, and `.env` — with a real API key — went into the first commit. The obvious fix, adding `.env` to `.gitignore`, **does nothing**: `.gitignore` only hides *untracked* files. Once Git tracks a file, it keeps watching it.\n\nThe fix has two halves. `git rm --cached .env` removes the file from the **index** (so the next commit won't contain it) while leaving it on disk. The `.gitignore` line then stops it from ever being re-added.\n\nBut look closer: the *first* commit still contains the key, and anyone with the repository can read it. Removing a secret from the next commit doesn't remove it from history. The real-world rule is blunt: **a committed secret is a leaked secret — rotate it.** The last step makes you see why.",
      example: { lang: "sh", code: "git rm --cached .env\n# rm '.env'\ngit status --short\n# D  .env        ← staged for removal from the repo\n# ?? .gitignore" },
      steps: [
        { text: "Add `.env` to a new `.gitignore`.",
          test: "T.expect(T.ignored('.env'), '.gitignore should contain a pattern that matches .env');" },
        { text: "Stop tracking `.env` with `git rm --cached` — **keep** the file on disk.",
          test: "T.expect(T.ran(/^git rm --cached/), 'Use git rm --cached .env — plain git rm would delete your local file too');\nT.expect(!T.tracked('.env'), '.env is still tracked — git rm --cached .env removes it from the index');\nT.eq(T.wt('.env'), 'API_KEY=abc123\\n', '.env should still exist on disk — --cached touches the index only');" },
        { text: "Stage `.gitignore` and commit as **Stop tracking .env**.",
          test: "T.eq(T.count(), 2, 'Make one new commit');\nvar f = T.commit('HEAD').files;\nT.expect(f['.env'] == null, 'The new commit still contains .env');\nT.expect(f['.gitignore'] != null, 'The new commit should contain .gitignore — git add .gitignore');\nT.eq(T.log()[0].subject, 'Stop tracking .env', 'Commit message should be: Stop tracking .env');" },
        { text: "Prove the key is still in history: `git show HEAD~1:.env` prints the file as the first commit saw it.",
          test: "T.expect(T.ran(/^git show HEAD~1:\\.env/), 'Run git show HEAD~1:.env — <commit>:<path> prints a file from any commit');\nT.expect(T.out().indexOf('API_KEY=abc123') !== -1, 'git show HEAD~1:.env should print API_KEY=abc123 — run it after your commit');" }
      ],
      files: [
        { name: "commands.sh", content: "# .env (with a real key) was committed in \"First version\". Oops.\n\n# 1) Ignore it from now on:\n\n# 2) Stop tracking it, but keep the file:\n\n# 3) Commit the fix:\n\n# 4) Is the key really gone?\n\n" }
      ],
      hints: [
        "`echo \".env\" > .gitignore` creates the ignore file.",
        "`git rm --cached .env` — the `--cached` flag is what keeps it on disk. Then `git add .gitignore` and `git commit -m \"Stop tracking .env\"`.",
        "`git show HEAD~1:.env` — `HEAD~1` means \"one commit before HEAD\", and `:.env` picks the file from it."
      ],
      solution: {
        "commands.sh": "# .env (with a real key) was committed in \"First version\". Oops.\n\n# 1) Ignore it from now on:\necho \".env\" > .gitignore\n\n# 2) Stop tracking it, but keep the file:\ngit rm --cached .env\n\n# 3) Commit the fix:\ngit add .gitignore\ngit commit -m \"Stop tracking .env\"\n\n# 4) Is the key really gone?\ngit show HEAD~1:.env\n"
      }
    },

    {
      id: "git-u2-4",
      title: "Commit messages your future self can use",
      kind: "shell", chip: "GIT", xp: 20, mins: 12,
      cwd: "/home/you/project",
      setup: "git init\necho \"let total = 0;\" > cart.js\ngit add cart.js\ngit commit -m \"Add cart\"",
      brief: "In six months you'll run `git log` hunting for the commit that broke checkout. `fixed stuff`, `wip` and `Updated cart.js.` will tell you nothing.\n\nThe conventions are small and they're everywhere:\n\n- **Subject ≤ 50 characters**, capitalised, **no trailing period**.\n- **Imperative mood** — finish the sentence *\"If applied, this commit will…\"*: `Round totals to whole cents`, never `Rounded` or `Fixes`.\n- If the *why* isn't obvious, add a **body** after a blank line, lines ≤ 72 characters. With `-m`, every extra `-m` becomes its own paragraph — Git inserts the blank line for you.\n\nMake two commits: a one-line one, and one that explains itself.",
      example: { lang: "sh", code: "git commit -m \"Add the sales tax rate\"\n\ngit commit -am \"Round totals to whole cents\" \\\n  -m \"Sums like 0.1 + 0.2 left totals at 0.30000000000000004.\"" },
      steps: [
        { text: "Create `tax.js` with `echo \"export const TAX = 0.07;\" > tax.js`, stage it, and commit it with a well-formed **subject-only** message.",
          test: "function problem(s) {\n  if (!s) return 'the message is empty';\n  if (s.length > 50) return 'the subject is ' + s.length + ' characters — keep it to 50';\n  if (/\\.$/.test(s)) return 'drop the trailing period';\n  if (!/^[A-Z]/.test(s)) return 'start with a capital letter';\n  if (/^(Added|Adding|Adds|Fixed|Fixes|Fixing|Updated|Updates|Updating|Changed|Changes|Changing|Removed|Removes)\\b/.test(s)) return 'use the imperative (Add, Fix, Update…) — not \"' + s.split(' ')[0] + '\"';\n  return '';\n}\nT.eq(T.count(), 3, 'Make exactly two commits on top of \"Add cart\"');\nT.expect(T.commit('HEAD~1').files['tax.js'] != null && T.commit('HEAD~2').files['tax.js'] == null, 'Your FIRST new commit should add tax.js');\nvar m = T.commit('HEAD~1').message;\nT.expect(m.indexOf('\\n') === -1, 'Keep this first message to a single subject line');\nvar p = problem(m);\nT.expect(!p, 'First commit subject \"' + m + '\": ' + p);" },
        { text: "Change the cart to `echo \"const total = Math.round(sum * 100) / 100;\" > cart.js` and commit it with a good subject **and** a body explaining why (two `-m` flags).",
          test: "var c = T.commit('HEAD');\nT.eq(c.files['cart.js'], 'const total = Math.round(sum * 100) / 100;\\n', 'The newest commit should contain the rounding change to cart.js');\nvar parts = c.message.split('\\n');\nT.expect(parts.length >= 3 && parts[1] === '', 'Give this commit a body: a second -m adds it after a blank line');\nvar s = parts[0];\nT.expect(s.length <= 50, 'The subject is ' + s.length + ' characters — keep it to 50');\nT.expect(!/\\.$/.test(s) && /^[A-Z]/.test(s), 'Subject: capital first letter, no trailing period');\nT.expect(!/^(Added|Adding|Adds|Fixed|Fixes|Fixing|Updated|Updates|Updating|Changed|Changes|Changing|Rounded|Rounds|Rounding)\\b/.test(s), 'Use the imperative: \"Round totals…\", not \"' + s.split(' ')[0] + '…\"');\nfor (var i = 2; i < parts.length; i++) T.expect(parts[i].length <= 72, 'Body line ' + (i - 1) + ' is ' + parts[i].length + ' characters — split it into another -m (max 72)');\nT.expect(parts.slice(2).join(' ').replace(/\\s/g, '').length >= 20, 'The body should actually explain WHY — a sentence or two');" },
        { text: "Read the full history with `git log` — see how the body sits under the subject.",
          test: "T.expect(T.ran(/^git log(\\s+-n\\s*\\d+|\\s+-\\d+)?\\s*$/), 'Run git log without --oneline — the one-line format hides bodies');\nT.expect(T.out().indexOf('    ' + T.log()[0].subject) !== -1, 'Run git log AFTER both commits');" }
      ],
      files: [
        { name: "commands.sh", content: "# cart.js is committed. Two changes to make, two messages to write.\n\n# 1) Add tax.js and commit it — subject line only:\n\n# 2) Fix the rounding and commit it — subject AND a body:\n\n# 3) Read them back in full:\n\n" }
      ],
      hints: [
        "First commit: `echo \"export const TAX = 0.07;\" > tax.js`, `git add tax.js`, `git commit -m \"Add the sales tax rate\"`.",
        "Second: write the new cart.js line, then `git commit -am \"Round totals to whole cents\" -m \"Sums like 0.1 + 0.2 left totals at 0.30000000000000004.\"` (`-a` stages the tracked file for you).",
        "Finish with plain `git log`."
      ],
      solution: {
        "commands.sh": "# cart.js is committed. Two changes to make, two messages to write.\n\n# 1) Add tax.js and commit it — subject line only:\necho \"export const TAX = 0.07;\" > tax.js\ngit add tax.js\ngit commit -m \"Add the sales tax rate\"\n\n# 2) Fix the rounding and commit it — subject AND a body:\necho \"const total = Math.round(sum * 100) / 100;\" > cart.js\ngit commit -am \"Round totals to whole cents\" -m \"Sums like 0.1 + 0.2 left totals at 0.30000000000000004.\" -m \"Rounding once, at the end, keeps every displayed price exact.\"\n\n# 3) Read them back in full:\ngit log\n"
      }
    },

    {
      id: "git-quiz-2",
      title: "Unit 2 quiz: Diffs, ignores & messages",
      kind: "quiz", xp: 10,
      brief: "Which diff shows what, what .gitignore can and can't do, and messages worth reading. 80% to pass.",
      questions: [
        { q: "You edited app.js and ran `git add app.js`. Now `git diff` prints nothing. Why?",
          choices: ["The edit was lost when you staged it", "`git diff` only compares the working tree with the index", "Git needs a commit before it can show any diff", "The diff was cleared because the file is now tracked"],
          answer: 1, explain: "Plain `git diff` compares the working tree to the index. After `git add`, the two match, so there's nothing to show. Your change now lives in the index — `git diff --staged` (index vs HEAD) shows it. Nothing was lost." },
        { q: "`.env` was committed last week. Today you add `.env` to .gitignore and edit the file. What does `git status` show?",
          choices: ["Nothing — the file is ignored now", "`.env` as untracked", "`.env` as modified", "A warning that .gitignore conflicts with history"],
          answer: 2, explain: ".gitignore only applies to *untracked* files. Git already tracks `.env`, so it keeps reporting changes to it. `git rm --cached .env` stops tracking it (keeping it on disk); only then does the ignore rule take effect." },
        { q: "Which .gitignore ignores every env file except the template?",
          code: "# goal: ignore .env, .env.local, .env.production\n#       but COMMIT .env.example",
          lang: "sh",
          choices: ["`!.env.example` then `.env*`", "`.env` and `.env.local` only", "`.env*` then `!.env.example`", "`*.env` then `!.env.example`"],
          answer: 2, explain: "`.env*` matches every name starting with `.env`, and the `!` rule re-includes the template. Order matters: the last matching rule wins, so the exception must come *after* the broad pattern. `*.env` matches names *ending* in .env (like `prod.env`), not `.env.local`." },
        { q: "You committed an API key, then removed it with `git rm --cached` and committed again. Is the key safe?",
          choices: ["Yes — the newest commit no longer contains it", "Yes, once you also add the file to .gitignore", "No — it only disappears after the next push", "No — older commits still contain it, so rotate the key"],
          answer: 3, explain: "Every commit is a full, permanent snapshot. The commit that added the key still contains it, and anyone with the repository can read it with `git show <sha>:.env`. Rewriting history is possible but won't help once it's been pushed or cloned. Treat a committed secret as leaked: revoke it and issue a new one." },
        { q: "Which subject line follows the conventions?",
          choices: ["Fix checkout crash on empty cart", "fixed the checkout crash", "Fixes checkout crash on empty cart.", "Updated checkout.js to handle empty carts properly"],
          answer: 0, explain: "Imperative (\"If applied, this commit will *fix checkout crash on empty cart*\"), capitalised, no trailing period, under 50 characters. The others use past tense or third person, a trailing period, a lowercase start, or run past 50 characters and name a file instead of the behaviour." },
        { q: "What does `git show HEAD~1:config.json` print?",
          choices: ["The diff config.json had in the previous commit", "`config.json` as it was one commit before HEAD", "Every commit that ever touched config.json", "The file as it is now, labelled with HEAD~1"],
          answer: 1, explain: "`<commit>:<path>` names a file *inside* a commit, and `git show` prints its content. `HEAD~1` is the commit before HEAD. It's the fastest way to read an old version of a file without switching anything — and the reason a committed secret is never really deleted." }
      ]
    }
  ]
});
