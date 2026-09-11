/* Git & Version Control — Unit 5: Undoing things I — before it's committed */
window.CODELAB.addUnit("git", {
  id: "git-u5",
  title: "Undoing things I: before it's committed",
  icon: "↩️",
  blurb: "Throw away a bad edit, unstage without losing work, fix the commit you just made, and park half-done work while you fix something urgent.",
  cheat: [
    { h: "Which undo do I need?", lang: "sh", code: "# edited a file, want the last saved version back:\ngit restore app.js\n# staged something that doesn't belong in this commit:\ngit restore --staged config.js\n# the commit I JUST made is wrong (not pushed yet):\ngit commit --amend -m \"Better message\"\n# need a clean tree right now, keep my work for later:\ngit stash", note: "Everything in this unit happens before anything is shared. Unit 6 covers commits that already exist." },
    { h: "restore — the working tree", lang: "sh", code: "git restore app.js       # disk ← index (discard unstaged edits)\ngit restore .            # every file — careful\ngit restore --source=HEAD~2 app.js   # an older version", note: "This is the one truly destructive undo: uncommitted edits were never saved anywhere, so nothing can bring them back." },
    { h: "restore --staged — the index", lang: "sh", code: "git restore --staged config.js   # index ← HEAD (unstage)\n# your edit stays on disk, just no longer staged\n# older equivalent: git reset config.js", note: "Unstaging never loses work. It only changes what the next commit will contain." },
    { h: "amend — the last commit", lang: "sh", code: "git add forgotten.css\ngit commit --amend -m \"Add login form\"   # new message\ngit commit --amend --no-edit             # keep the message", note: "Amend makes a NEW commit (new sha) that replaces the old one. Never amend a commit you've already pushed." },
    { h: "stash — a shelf for work in progress", lang: "sh", code: "git stash                   # shelve changes, clean tree\ngit stash push -m \"search\"  # with a label\ngit stash list              # stash@{0}: WIP on search: …\ngit stash pop               # re-apply AND remove the entry\ngit stash apply             # re-apply, keep the entry\ngit stash -u                # include untracked files too", note: "Stash only takes tracked files by default. A brand-new file stays behind unless you add -u." }
  ],
  lessons: [

    {
      id: "git-u5-1",
      title: "git restore: throw away a working-tree change",
      kind: "shell", chip: "GIT", xp: 15, mins: 12,
      cwd: "/home/you/project",
      setup: "git init\necho \"function total(items) {\" > app.js\necho \"  return items.length * 10;\" >> app.js\necho \"}\" >> app.js\necho \"# Notes\" > notes.md\ngit add .\ngit commit -m \"Add the cart total\"\necho \"function total(items) {\" > app.js\necho \"  return items.lenght * 10;\" >> app.js\necho \"}\" >> app.js\necho \"- remember to test totals\" >> notes.md",
      brief: "An edit to `app.js` went wrong — a typo you can't spot, and now the totals are broken. The last committed version worked. You don't need to hunt for the typo; you want the committed version back.\n\n`git restore <file>` overwrites the working-tree copy with the version in the index — which, when nothing is staged, is the last commit. It's precise: only the files you name are touched. Your note in `notes.md` is a change you want to **keep**, so don't use `git restore .` here.\n\nOne warning, stated plainly: this is the only truly **destructive** undo in the course. Uncommitted edits were never saved anywhere, so once restored away they're gone for good. Look first (`git diff`), then restore.",
      example: { lang: "sh", code: "git diff app.js\n# -  return items.length * 10;\n# +  return items.lenght * 10;\n\ngit restore app.js" },
      steps: [
        { text: "Look before you destroy: `git diff app.js` shows what the restore will throw away.",
          test: "T.expect(T.ran(/^git diff/), 'Run git diff app.js first');\nT.expect(T.out().indexOf('+  return items.lenght * 10;') !== -1, 'git diff should show the broken line — run it BEFORE restoring');" },
        { text: "Restore `app.js` to its committed version with `git restore`.",
          test: "T.eq(T.wt('app.js'), T.before.blobAt('HEAD', 'app.js'), 'app.js should match the last commit again');\nT.expect(T.ran(/^git restore app\\.js/), 'Use git restore app.js — rewriting the file by hand works once, but the command works on files you can\\'t remember');" },
        { text: "Keep the `notes.md` change — restore only what's broken.",
          test: "T.eq(T.wt('notes.md'), T.before.wt('notes.md'), 'notes.md lost its new line — name app.js instead of using git restore .');\nT.eq(T.unstaged(), ['notes.md'], 'notes.md should be the only modified file left');" },
        { text: "Finish with `git status`: only `notes.md` is modified.",
          test: "var s = T.transcript.filter(function (t) { return /^git status/.test(t.cmd); }).pop();\nT.expect(s && s.out.indexOf('modified:   notes.md') !== -1 && s.out.indexOf('app.js') === -1, 'End with git status — it should list notes.md only');" }
      ],
      files: [
        { name: "commands.sh", content: "# app.js has a broken edit. notes.md has one you want to keep.\n\n# 1) See what you'd be throwing away:\n\n# 2) Get the committed app.js back:\n\n# 3) Check:\n\n" }
      ],
      hints: [
        "`git diff app.js` limits the diff to one file.",
        "`git restore app.js` — naming the file is what protects notes.md.",
        "Then `git status`."
      ],
      solution: {
        "commands.sh": "# app.js has a broken edit. notes.md has one you want to keep.\n\n# 1) See what you'd be throwing away:\ngit diff app.js\n\n# 2) Get the committed app.js back:\ngit restore app.js\n\n# 3) Check:\ngit status\n"
      }
    },

    {
      id: "git-u5-2",
      title: "git restore --staged: unstage without losing work",
      kind: "shell", chip: "GIT", xp: 15, mins: 10,
      cwd: "/home/you/project",
      setup: "git init\necho \"<h1>Shop</h1>\" > index.html\necho \"let debug = false;\" > config.js\ngit add .\ngit commit -m \"Add the shop\"\necho \"<p>Free shipping on every order</p>\" >> index.html\necho \"let debug = true;\" > config.js\ngit add .",
      brief: "You ran `git add .` and staged two things: the free-shipping banner (ready to ship) and `debug = true` in `config.js` (a local setting you flipped while testing, which must **not** go out).\n\n`git restore --staged <file>` takes a file back out of the index — resetting its staged version to what HEAD has — and leaves your working copy alone. Nothing is lost: the edit is still on disk, just not part of the next commit.\n\nUnstage the config, commit only the banner, and check the debug flag is still set locally.",
      example: { lang: "sh", code: "git restore --staged config.js\ngit status --short\n# M  index.html     ← staged (left column)\n#  M config.js      ← modified, not staged (right column)" },
      steps: [
        { text: "Unstage `config.js` with `git restore --staged`.",
          test: "T.expect(T.ran(/^git restore --staged config\\.js/), 'Use git restore --staged config.js');\nT.expect(T.staged().indexOf('config.js') === -1, 'config.js is still staged');" },
        { text: "Commit just the banner as **Announce free shipping**.",
          test: "T.eq(T.count(), 2, 'Make one new commit');\nT.eq(T.log()[0].subject, 'Announce free shipping', 'Commit message: Announce free shipping');\nT.expect((T.commit('HEAD').files['index.html'] || '').indexOf('Free shipping') !== -1, 'The banner should be in the commit');\nT.eq(T.commit('HEAD').files['config.js'], 'let debug = false;\\n', 'debug = true got committed — unstage config.js before committing');" },
        { text: "Your local debug setting survived: `cat config.js` still says `true`.",
          test: "T.eq(T.wt('config.js'), 'let debug = true;\\n', 'Unstaging must not throw the edit away — config.js on disk should still say true');\nT.eq(T.unstaged(), ['config.js'], 'config.js should end as modified-but-unstaged');\nT.expect(T.ran(/^cat config\\.js/), 'Run cat config.js to see it');" }
      ],
      files: [
        { name: "commands.sh", content: "# Both index.html and config.js are staged.\n# Only the banner should ship.\n\n# 1) Take config.js back out of the index:\n\n# 2) Commit the banner:\n\n# 3) Is the local setting still there?\n\n" }
      ],
      hints: [
        "`git restore --staged config.js` — `--staged` means \"work on the index, not the file\".",
        "`git commit -m \"Announce free shipping\"` commits whatever is still staged.",
        "`cat config.js` prints the working copy."
      ],
      solution: {
        "commands.sh": "# Both index.html and config.js are staged.\n# Only the banner should ship.\n\n# 1) Take config.js back out of the index:\ngit restore --staged config.js\n\n# 2) Commit the banner:\ngit commit -m \"Announce free shipping\"\n\n# 3) Is the local setting still there?\ncat config.js\n"
      }
    },

    {
      id: "git-u5-3",
      title: "git commit --amend: fix the last commit",
      kind: "shell", chip: "GIT", xp: 20, mins: 12,
      cwd: "/home/you/project",
      setup: "git init\necho \"<h1>Shop</h1>\" > index.html\ngit add index.html\ngit commit -m \"Add the homepage\"\necho \"<form id='login'></form>\" > login.html\ngit add login.html\ngit commit -m \"Add login from\"\necho \".login { width: 20rem; }\" > login.css",
      brief: "You just committed, and two things are wrong: the message says *login **from***, and you forgot to include `login.css`. You haven't pushed, so nobody has seen it.\n\n`git commit --amend` rebuilds the last commit from the current index, with a new message if you give one. Stage the forgotten file first and it joins the commit.\n\nThe important detail: amend doesn't *edit* the commit. Commits can't be changed — the sha is computed from their content. It makes a **brand-new commit** and moves the branch to it; the old one simply drops out of the history. The reflog still remembers it (you'll lean on that in Unit 6). And because it replaces history, **never amend a commit you've already pushed**.",
      example: { lang: "sh", code: "git add login.css\ngit commit --amend -m \"Add login form\"\n# [main 9b3d1e2] Add login form\n#  Date: Tue Sep 1 09:02:00 2026 +0000\n#  2 files changed, 2 insertions(+)" },
      steps: [
        { text: "Stage the forgotten `login.css`, then amend with the corrected message **Add login form**.",
          test: "T.eq(T.log()[0].subject, 'Add login form', 'The last commit\\'s message should now be: Add login form');\nT.expect(T.commit('HEAD').files['login.css'] != null, 'login.css should be in the amended commit — git add it BEFORE amending');\nT.expect(T.ran(/^git commit --amend/), 'Use git commit --amend');" },
        { text: "Check the count: amend **replaces** the commit, so there are still two.",
          test: "T.eq(T.count(), 2, 'Still two commits — --amend replaces the last commit instead of adding one');\nT.eq(T.commit('HEAD').parents, [T.before.sha('HEAD~1')], 'The amended commit sits on the same parent as the one it replaced');" },
        { text: "Run `git reflog`: the old commit and its replacement are both listed.",
          test: "T.expect(T.sha() !== T.before.sha(), 'The amended commit must be a NEW commit with a new sha');\nT.expect(T.ran(/^git reflog/), 'Run git reflog');\nT.expect(T.out().indexOf('commit (amend): Add login form') !== -1 && T.out().indexOf('commit: Add login from') !== -1, 'git reflog should show both the original and the amend — run it after amending');" }
      ],
      files: [
        { name: "commands.sh", content: "# Last commit: \"Add login from\" — typo, and login.css was forgotten.\n\n# 1) Include the file and fix the message:\n\n# 2) Count the commits:\n\n# 3) Where did the old one go?\n\n" }
      ],
      hints: [
        "`git add login.css` first — amend commits whatever is in the index.",
        "`git commit --amend -m \"Add login form\"`, then `git log --oneline` to count.",
        "`git reflog` lists every commit HEAD has pointed at, including the replaced one."
      ],
      solution: {
        "commands.sh": "# Last commit: \"Add login from\" — typo, and login.css was forgotten.\n\n# 1) Include the file and fix the message:\ngit add login.css\ngit commit --amend -m \"Add login form\"\n\n# 2) Count the commits:\ngit log --oneline\n\n# 3) Where did the old one go?\ngit reflog\n"
      }
    },

    {
      id: "git-u5-4",
      title: "git stash: park it, switch, come back",
      kind: "shell", chip: "GIT", xp: 25, mins: 14,
      cwd: "/home/you/project",
      setup: "git init\necho \"<h1>Welcome to the shpo</h1>\" > index.html\ngit add index.html\ngit commit -m \"Add the shop\"\ngit switch -c search\necho \"let query = '';\" > search.js\ngit add search.js\ngit commit -m \"Start search\"\necho \"let results = [];\" >> search.js",
      brief: "You're halfway through the search feature — `search.js` has an uncommitted line — when someone spots a typo on the live homepage: *\"Welcome to the shpo\"*. The fix belongs on `main`, now.\n\nTry to switch and Git refuses: your half-done `search.js` would be overwritten, because `main` doesn't have that file. You don't want to commit broken work just to get it out of the way.\n\n`git stash` shelves your uncommitted changes and gives you a clean working tree. Fix the typo on `main`, come back, and `git stash pop` puts your half-done work back exactly as you left it.",
      example: { lang: "sh", code: "git stash\n# Saved working directory and index state WIP on search: 4e1a2b3 Start search\n\ngit stash pop\n# …\n# Dropped refs/stash@{0} (…)" },
      steps: [
        { text: "Try `git switch main` first — read why Git refuses.",
          test: "T.expect(T.said('would be overwritten by checkout'), 'Run git switch main first — it should refuse because of your uncommitted search.js');" },
        { text: "Stash your half-done work.",
          test: "T.expect(T.said('Saved working directory and index state WIP on search:'), 'Run git stash while on search');" },
        { text: "Switch to `main`, fix the typo in `index.html`, and commit it as **Fix the welcome typo**.",
          test: "T.eq(T.commit('main').files['index.html'], '<h1>Welcome to the shop</h1>\\n', 'On main, index.html should read: <h1>Welcome to the shop</h1>');\nT.eq(T.log('main')[0].subject, 'Fix the welcome typo', 'Commit the fix on main as: Fix the welcome typo');\nT.eq(T.sha('search'), T.before.sha('search'), 'search should not get the fix commit — commit it on main');" },
        { text: "Go back to `search` and `git stash pop` — your half-done line is back, and the stash is empty.",
          test: "T.eq(T.head(), 'refs/heads/search', 'End on search');\nT.eq(T.wt('search.js'), \"let query = '';\\nlet results = [];\\n\", 'search.js should have your half-done line back — git stash pop');\nT.eq(T.stashList().length, 0, 'pop removes the entry it applies — the stash list should be empty');" }
      ],
      files: [
        { name: "commands.sh", content: "# You're on search with an uncommitted line in search.js.\n# The homepage says \"shpo\". Fix it on main.\n\n# 1) Try to switch:\n\n# 2) Shelve your work:\n\n# 3) Fix it on main:\n\n# 4) Back to search, work restored:\n\n" }
      ],
      hints: [
        "`git switch main` fails first; then `git stash`.",
        "`git switch main`, `echo \"<h1>Welcome to the shop</h1>\" > index.html`, `git commit -am \"Fix the welcome typo\"`.",
        "`git switch search`, then `git stash pop`."
      ],
      solution: {
        "commands.sh": "# You're on search with an uncommitted line in search.js.\n# The homepage says \"shpo\". Fix it on main.\n\n# 1) Try to switch:\ngit switch main\n\n# 2) Shelve your work:\ngit stash\n\n# 3) Fix it on main:\ngit switch main\necho \"<h1>Welcome to the shop</h1>\" > index.html\ngit commit -am \"Fix the welcome typo\"\n\n# 4) Back to search, work restored:\ngit switch search\ngit stash pop\n"
      }
    },

    {
      id: "git-quiz-5",
      title: "Unit 5 quiz: Undoing before the commit",
      kind: "quiz", xp: 10,
      brief: "restore, restore --staged, amend and stash — and which one to reach for. 80% to pass.",
      questions: [
        { q: "You ran `git restore app.js` and immediately regretted it. Can Git bring your edits back?",
          choices: ["Yes — `git reflog` lists every restore", "Yes — they are kept in the stash automatically", "No — uncommitted edits were never saved by Git", "Only if you run `git restore --undo` straight away"],
          answer: 2, explain: "The reflog tracks where HEAD and branches pointed — commits. Edits you never staged or committed were never in any Git object, so `git restore` overwrites them for good. That's why you check `git diff` first; committing or stashing is what makes work recoverable." },
        { q: "What does `git restore --staged config.js` change?",
          choices: ["The index only — your edit stays on disk", "The file on disk only — the index is untouched", "Both the index and the file on disk", "The last commit, removing config.js from it"],
          answer: 0, explain: "`--staged` points restore at the index: config.js's staged version goes back to what HEAD has, so it drops out of the next commit. The working copy isn't touched, so no work is lost. To also reset the disk copy you'd add `--worktree`." },
        { q: "After `git commit --amend`, how many commits does `git log` show compared to before?",
          choices: ["One more — the fix is added on top", "The same number — the last one is replaced", "One fewer — the old commit is deleted", "Two more — the original and the amended copy"],
          answer: 1, explain: "Amend builds a new commit with the same parent and moves the branch to it, so the old commit drops out of `git log` and the count stays the same. The sha changes, because it's a different commit. The old one is still reachable through the reflog for a while." },
        { q: "Why shouldn't you amend a commit you've already pushed?",
          choices: ["Amend can't be used after a push", "Git will delete the remote branch if you do", "It fails, because amend needs the remote's permission", "It replaces history others may already have"],
          answer: 3, explain: "Amending makes a new commit and abandons the old one. Anyone who pulled the old commit now has history that yours has diverged from, and your next push is rejected as non-fast-forward. Pushing anyway means force-pushing over shared history — Unit 7 shows how to do that safely, and why it's a last resort." },
        { q: "You created a new file `draft.js` (never added) and edited `app.js`. What does a plain `git stash` take?",
          choices: ["Both files", "Only `app.js`", "Only `draft.js`", "Neither — stash needs staged changes"],
          answer: 1, explain: "By default stash shelves changes to *tracked* files, staged or not. An untracked file isn't part of the repository yet, so it stays on disk. `git stash -u` (`--include-untracked`) takes untracked files too." },
        { q: "What's the difference between `git stash pop` and `git stash apply`?",
          choices: ["pop only works on the newest entry; apply works on any", "apply also stages the changes; pop leaves them unstaged", "pop re-applies and removes the entry; apply keeps it", "They are the same; pop is just the older name"],
          answer: 2, explain: "Both re-apply the stashed changes. `pop` then drops the entry (unless the apply hit a conflict, in which case it keeps it for safety). `apply` always keeps it, which is handy when you want the same changes on several branches. Either one accepts `stash@{n}` to pick an older entry." }
      ]
    }
  ]
});
