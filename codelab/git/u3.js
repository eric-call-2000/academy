/* Git & Version Control — Unit 3: Branching */
window.CODELAB.addUnit("git", {
  id: "git-u3",
  title: "Branching",
  icon: "🌿",
  blurb: "A branch is a pointer, not a copy. Create one, work on it without touching main, visit old commits in detached HEAD, and clean up after yourself.",
  cheat: [
    { h: "Branches are pointers", lang: "sh", code: "git branch            # list; * marks the one you're on\ngit branch redesign   # create at the current commit (don't switch)\ngit switch redesign   # move HEAD to it\ngit switch -c idea    # create AND switch, in one\ngit switch -          # back to the previous branch", note: "A branch is a name for one commit. Creating one copies nothing — it costs 41 bytes." },
    { h: "What HEAD means", lang: "sh", code: "# HEAD -> main -> 3f9a1c0     normal: HEAD follows a branch\n# HEAD -> 3f9a1c0             detached: HEAD names a commit directly\ngit log --oneline -1         # (HEAD -> main) shows where you are", note: "When you commit, the branch HEAD points to moves forward. Other branches never move on their own." },
    { h: "Visiting the past", lang: "sh", code: "git switch --detach HEAD~2   # look at an old commit\ngit checkout HEAD~2          # same thing, older command\ngit switch -c rescue         # keep any commits you made there\ngit switch main              # leave (warns about orphaned commits)", note: "git switch refuses a bare sha on purpose — you have to say --detach, so you know." },
    { h: "Cleaning up", lang: "sh", code: "git branch -d done-work      # delete — only if it's merged\ngit branch -D old-idea       # delete anyway (work may be lost)\ngit branch -m feture feature # rename\ngit branch -m better-name    # rename the branch you're on", note: "-d is the safe one: it refuses to delete commits no other branch contains." },
    { h: "switch vs checkout", lang: "sh", code: "git switch <branch>      # change branches (Git 2.23+)\ngit restore <file>       # restore files (Git 2.23+)\ngit checkout <either>    # the old command that did both", note: "You'll see checkout in older tutorials and scripts. switch and restore split its two jobs so neither can surprise you." }
  ],
  lessons: [

    {
      id: "git-u3-1",
      title: "A branch is just a pointer",
      kind: "shell", chip: "GIT", xp: 15, mins: 12,
      cwd: "/home/you/project",
      setup: "git init\necho \"<h1>Shop</h1>\" > index.html\ngit add index.html\ngit commit -m \"Add the homepage\"\necho \"h1 { color: navy; }\" > style.css\ngit add style.css\ngit commit -m \"Add styles\"",
      brief: "Most people picture a branch as a copy of the project. It isn't. A branch is a **name attached to one commit** — a sticky note on the history. Creating one copies nothing and takes no time.\n\n`HEAD` is how Git knows where *you* are: normally it points at a branch (`HEAD -> main`), and that branch points at a commit. When you commit, the branch HEAD is on moves forward to the new commit. Every other branch stays exactly where it is.\n\nCreate a branch, and watch `git log --oneline` show two names on the **same** commit. Then switch to it and watch the `*` in `git branch` move.",
      example: { lang: "sh", code: "git branch redesign\ngit log --oneline -1\n# 8c2e4a1 (HEAD -> main, redesign) Add styles\n\ngit switch redesign\n# Switched to branch 'redesign'" },
      steps: [
        { text: "Create a branch named `redesign` with `git branch` — without switching to it yet.",
          test: "T.expect(T.branches().indexOf('redesign') !== -1, 'There is no redesign branch — git branch redesign');\nT.eq(T.sha('redesign'), T.before.sha('main'), 'A new branch starts at the commit you are on — redesign should point at the same commit as main');" },
        { text: "Run `git log --oneline` straight away: both names sit on the same commit.",
          test: "T.expect(T.ran(/^git log --oneline/), 'Run git log --oneline');\nT.expect(/\\((HEAD -> main, redesign|HEAD -> redesign, main)\\)/.test(T.out()), 'git log --oneline should show main AND redesign on the same commit — run it after creating the branch');" },
        { text: "Switch to `redesign`. Switching makes no commits.",
          test: "T.eq(T.head(), 'refs/heads/redesign', 'HEAD should end up on redesign — git switch redesign');\nT.eq(T.count(), 2, 'Switching branches never creates commits');" },
        { text: "Run `git branch` once more: the `*` has moved.",
          test: "T.expect(T.out().indexOf('  main\\n* redesign\\n') !== -1, 'Run git branch AFTER switching — the * should be next to redesign');" }
      ],
      files: [
        { name: "commands.sh", content: "# main has two commits.\n\n# 1) Create a branch called redesign (don't switch):\n\n# 2) Where do the two names point?\n\n# 3) Move onto redesign:\n\n# 4) List branches again:\n\n" }
      ],
      hints: [
        "`git branch redesign` creates the name at your current commit and leaves you on main.",
        "`git log --oneline` then shows `(HEAD -> main, redesign)` on the newest commit.",
        "`git switch redesign`, then `git branch` — the star marks where HEAD is."
      ],
      solution: {
        "commands.sh": "# main has two commits.\n\n# 1) Create a branch called redesign (don't switch):\ngit branch redesign\n\n# 2) Where do the two names point?\ngit log --oneline\n\n# 3) Move onto redesign:\ngit switch redesign\n\n# 4) List branches again:\ngit branch\n"
      }
    },

    {
      id: "git-u3-2",
      title: "git switch -c: two things at once",
      kind: "shell", chip: "GIT", xp: 20, mins: 14,
      cwd: "/home/you/project",
      setup: "git init\necho \"<h1>Shop</h1>\" > index.html\ngit add index.html\ngit commit -m \"Add the homepage\"",
      brief: "The everyday move: start a new piece of work on its own branch, so `main` stays clean until the work is finished. `git switch -c <name>` creates the branch **and** switches to it in one step.\n\nThen commit as usual. Each commit moves *your* branch forward — and only yours. `main` stays pinned to the commit where you left it. That's what makes branches safe: the half-built contact page can't break the shop, because it isn't on `main`.\n\nSwitch back to `main` and the files change to match: the contact page disappears from disk, because it doesn't exist in `main`'s snapshot. It isn't deleted — it's waiting on the other branch.",
      example: { lang: "sh", code: "git switch -c contact-page\n# Switched to a new branch 'contact-page'\n\ngit log --oneline main\n# 1a2b3c4 Add the homepage      ← main hasn't moved" },
      steps: [
        { text: "Create and switch to `contact-page` in one command.",
          test: "T.expect(T.ran(/^git switch -c contact-page/) || T.ran(/^git checkout -b contact-page/), 'Use one command: git switch -c contact-page');\nT.expect(T.branches().indexOf('contact-page') !== -1, 'The contact-page branch doesn\\'t exist');" },
        { text: "On it, make two commits: add `contact.html` (**Add a contact page**), then append a line to it (**Add the email line**).",
          test: "T.eq(T.count('contact-page'), 3, 'contact-page should have 3 commits: the homepage plus your two');\nT.eq(T.log('contact-page')[1].subject, 'Add a contact page', 'First new commit: Add a contact page');\nT.eq(T.log('contact-page')[0].subject, 'Add the email line', 'Second new commit: Add the email line');\nT.expect((T.commit('contact-page').files['contact.html'] || '').split('\\n').length >= 3, 'The second commit should add a line to contact.html (use >> to append)');" },
        { text: "Check that `main` did not move: `git log --oneline main`.",
          test: "T.eq(T.sha('main'), T.before.sha('main'), 'main moved! Commits go to the branch HEAD is on — switch -c BEFORE committing');\nT.eq(T.count('main'), 1, 'main should still have exactly one commit');\nT.expect(T.ran(/^git log --oneline main/), 'Run git log --oneline main to see it for yourself');" },
        { text: "Switch back to `main` and list the files with `ls`: `contact.html` is gone from disk.",
          test: "T.eq(T.head(), 'refs/heads/main', 'End on main — git switch main');\nT.eq(T.wt('contact.html'), null, 'contact.html should vanish on main — it only exists in contact-page\\'s commits');\nT.expect(T.ran(/^ls/), 'Run ls on main to see it');" }
      ],
      files: [
        { name: "commands.sh", content: "# main has one commit.\n\n# 1) Create AND switch to contact-page:\n\n# 2) Two commits on it:\n\n# 3) Did main move?\n\n# 4) Back to main — what's on disk?\n\n" }
      ],
      hints: [
        "`git switch -c contact-page` is the one-command version of `git branch` + `git switch`.",
        "`echo \"<h1>Contact</h1>\" > contact.html`, `git add contact.html`, `git commit -m \"Add a contact page\"`; then `echo \"<p>Email us</p>\" >> contact.html` and `git commit -am \"Add the email line\"`.",
        "`git log --oneline main`, then `git switch main` and `ls`."
      ],
      solution: {
        "commands.sh": "# main has one commit.\n\n# 1) Create AND switch to contact-page:\ngit switch -c contact-page\n\n# 2) Two commits on it:\necho \"<h1>Contact</h1>\" > contact.html\ngit add contact.html\ngit commit -m \"Add a contact page\"\necho \"<p>Email us</p>\" >> contact.html\ngit commit -am \"Add the email line\"\n\n# 3) Did main move?\ngit log --oneline main\n\n# 4) Back to main — what's on disk?\ngit switch main\nls\n"
      }
    },

    {
      id: "git-u3-3",
      title: "Detached HEAD is not broken",
      kind: "shell", chip: "GIT", xp: 20, mins: 14,
      cwd: "/home/you/project",
      setup: "git init\necho \"let version = 1;\" > app.js\ngit add app.js\ngit commit -m \"Version 1\"\necho \"let version = 2;\" > app.js\ngit commit -am \"Version 2\"\necho \"let version = 3;\" > app.js\ngit commit -am \"Version 3\"",
      brief: "\"You are in 'detached HEAD' state\" sounds like something broke. Nothing did. It means HEAD points **straight at a commit** instead of at a branch — which is exactly what you want when you go back to look at an old version.\n\n`HEAD~2` means \"two commits before HEAD\". `git switch` won't jump there on a bare commit: it insists on `--detach`, so you can't wander in by accident. (The older `git checkout HEAD~2` goes straight there and prints a long warning.)\n\nYou *can* commit while detached. The catch: no branch moves, so when you switch away that commit belongs to nothing — and Git warns you on the way out. Do it deliberately and read every message; Unit 6 is about getting commits like this back.",
      example: { lang: "sh", code: "git switch --detach HEAD~2\n# HEAD is now at 1a2b3c4 Version 1\n\ngit switch main\n# Warning: you are leaving 1 commit behind, not connected to\n# any of your branches: …" },
      steps: [
        { text: "Try `git switch HEAD~2` first — and read why Git refuses.",
          test: "T.expect(T.said(\"a branch is expected, got commit 'HEAD~2'\"), 'Run git switch HEAD~2 first — the refusal it prints is part of the lesson');" },
        { text: "Now detach properly with `git switch --detach HEAD~2`, and `cat app.js` to see version 1.",
          test: "T.expect(T.reflog().some(function (e) { return e.msg === 'checkout: moving from main to HEAD~2'; }), 'Detach at HEAD~2: git switch --detach HEAD~2');\nT.expect(T.out().indexOf('let version = 1;') !== -1, 'cat app.js while detached — it should show version 1');" },
        { text: "Still detached, change `app.js` and commit it as **Try an experiment**.",
          test: "var e = T.reflog().filter(function (x) { return x.msg === 'commit: Try an experiment'; })[0];\nT.expect(e, 'Make a commit called \"Try an experiment\" while detached');\nT.eq(T.commit(e.sha).parents, [T.before.sha('HEAD~2')], 'The experiment should sit directly on top of Version 1 — commit it while detached at HEAD~2');" },
        { text: "Go back with `git switch main` — read the warning about the commit you're leaving behind.",
          test: "var e = T.reflog().filter(function (x) { return x.msg === 'commit: Try an experiment'; })[0];\nT.eq(T.head(), 'refs/heads/main', 'End on main');\nT.eq(T.sha('main'), T.before.sha('main'), 'main should not have moved — detached commits move no branch');\nT.expect(T.said('Warning: you are leaving 1 commit behind'), 'Switching away should warn you about the orphaned commit');\nT.expect(e && !T.reachableFromAnyBranch(e.sha), 'No branch should contain the experiment');" }
      ],
      files: [
        { name: "commands.sh", content: "# main has Version 1, 2 and 3.\n\n# 1) Try to switch to the commit two back:\n\n# 2) Detach there for real, and look at the file:\n\n# 3) Commit an experiment while detached:\n\n# 4) Go home:\n\n" }
      ],
      hints: [
        "Line 1 is `git switch HEAD~2`. It fails — that's expected. The next line runs anyway.",
        "`git switch --detach HEAD~2` then `cat app.js`. For the experiment: `echo \"let version = 99;\" > app.js` and `git commit -am \"Try an experiment\"`.",
        "Finish with `git switch main` and read what Git warns about."
      ],
      solution: {
        "commands.sh": "# main has Version 1, 2 and 3.\n\n# 1) Try to switch to the commit two back:\ngit switch HEAD~2\n\n# 2) Detach there for real, and look at the file:\ngit switch --detach HEAD~2\ncat app.js\n\n# 3) Commit an experiment while detached:\necho \"let version = 99;\" > app.js\ngit commit -am \"Try an experiment\"\n\n# 4) Go home:\ngit switch main\n"
      }
    },

    {
      id: "git-u3-4",
      title: "Deleting and renaming branches",
      kind: "shell", chip: "GIT", xp: 15, mins: 12,
      cwd: "/home/you/project",
      setup: "git init\necho \"<h1>Shop</h1>\" > index.html\ngit add index.html\ngit commit -m \"Add the homepage\"\ngit branch done-work\ngit switch -c old-idea\necho \"let slides = [];\" > carousel.js\ngit add carousel.js\ngit commit -m \"Start a carousel\"\ngit switch main\ngit branch feture",
      brief: "Branches pile up. Three need attention here:\n\n- `done-work` is fully merged — everything on it is already in `main`. Delete it.\n- `old-idea` has a commit that exists **nowhere else**. `git branch -d` will refuse, because deleting the name would orphan that work. When you really mean it, `-D` forces it.\n- `feture` is a typo. `git branch -m` renames a branch; the commit it points at doesn't change.\n\nThe refusal matters: `-d` is the safe default, and the error message is Git protecting you. Trigger it on purpose before you override it.",
      example: { lang: "sh", code: "git branch -d old-idea\n# error: the branch 'old-idea' is not fully merged\n# hint: If you are sure you want to delete it, run 'git branch -D old-idea'\n\ngit branch -m feture feature" },
      steps: [
        { text: "Delete the merged branch `done-work` with `-d`.",
          test: "T.expect(T.branches().indexOf('done-work') === -1, 'done-work still exists — git branch -d done-work');\nT.expect(T.said('Deleted branch done-work'), 'Use git branch -d done-work');" },
        { text: "Try `git branch -d old-idea` — and read the refusal.",
          test: "T.expect(T.said(\"the branch 'old-idea' is not fully merged\"), 'Run git branch -d old-idea first — Git should refuse, because its commit exists nowhere else');" },
        { text: "You're sure: force it with `-D`.",
          test: "T.expect(T.ran(/^git branch -D old-idea/), 'Force the delete: git branch -D old-idea');\nT.expect(T.branches().indexOf('old-idea') === -1, 'old-idea still exists');" },
        { text: "Rename `feture` to `feature`, then list the branches.",
          test: "T.eq(T.branches(), ['feature', 'main'], 'You should end with exactly feature and main — git branch -m feture feature');\nT.eq(T.sha('feature'), T.before.sha('feture'), 'Renaming keeps the branch on the same commit');\nT.expect(T.ran(/^git branch\\s*$/), 'Finish with git branch to list them');" }
      ],
      files: [
        { name: "commands.sh", content: "# Branches: main, done-work (merged), old-idea (unmerged), feture (typo).\n\n# 1) Delete the merged one:\n\n# 2) Try the safe delete on old-idea:\n\n# 3) Force it:\n\n# 4) Fix the typo, then list:\n\n" }
      ],
      hints: [
        "`git branch -d done-work` succeeds because main already contains its commit.",
        "`git branch -d old-idea` fails on purpose. Then `git branch -D old-idea`.",
        "`git branch -m feture feature`, then `git branch`."
      ],
      solution: {
        "commands.sh": "# Branches: main, done-work (merged), old-idea (unmerged), feture (typo).\n\n# 1) Delete the merged one:\ngit branch -d done-work\n\n# 2) Try the safe delete on old-idea:\ngit branch -d old-idea\n\n# 3) Force it:\ngit branch -D old-idea\n\n# 4) Fix the typo, then list:\ngit branch -m feture feature\ngit branch\n"
      }
    },

    {
      id: "git-quiz-3",
      title: "Unit 3 quiz: Branches & HEAD",
      kind: "quiz", xp: 10,
      brief: "Pointers, HEAD, detached HEAD and deleting safely. 80% to pass.",
      questions: [
        { q: "What does `git branch experiment` actually create?",
          choices: ["A full copy of the project's files in a new folder", "A name that points at the commit you're on", "A new empty commit that the branch starts from", "A second working tree you can switch into"],
          answer: 1, explain: "A branch is a pointer — a name for one commit. Creating it copies no files and makes no commit, which is why branching in Git is instant. `git branch` also doesn't switch you; `git switch -c` does both." },
        { q: "You're on `feature` and make a commit. Which branches move?",
          choices: ["Only `feature`", "`feature` and `main`, since main is the default", "Every branch that points at the same commit", "None — commits move HEAD, not branches"],
          answer: 0, explain: "A commit moves the branch HEAD is attached to, and nothing else. Even a branch pointing at the very same commit stays put. That's what makes it safe to experiment on a branch: main can't change unless you're on it (or merge into it)." },
        { q: "Git says you are in \"detached HEAD\" state. What does that mean?",
          choices: ["The repository is corrupted and needs repair", "HEAD points directly at a commit, not a branch", "Your branch was deleted while you were on it", "You have changes that were never committed"],
          answer: 1, explain: "Normally HEAD points at a branch, which points at a commit. Detached means HEAD points at a commit directly — typically because you asked to look at an old one (`git switch --detach HEAD~2`). Nothing is wrong; just remember that commits made here won't be on any branch." },
        { q: "You commit twice in detached HEAD, then run `git switch main`. What happens to those commits?",
          choices: ["Git merges them into main automatically", "Git deletes them immediately", "They are no longer on any branch", "They move to a new branch named HEAD"],
          answer: 2, explain: "They still exist, but no branch points at them, so `git log` won't show them. Git warns you as you leave and suggests `git branch <name> <sha>` to keep them. If you missed the warning, the reflog still remembers them — that's Unit 6." },
        { q: "`git branch -d old-idea` fails with \"not fully merged\". What is Git protecting?",
          choices: ["The files on disk in your working tree", "Commits on old-idea that no other branch contains", "The branch you are currently on", "Your staged changes in the index"],
          answer: 1, explain: "`-d` only deletes a branch whose commits are already contained in another branch. If `old-idea` has unique commits, deleting its name would orphan them, so Git refuses. `-D` overrides the check when you really mean it." },
        { q: "Why does `git switch 3f9a1c0` fail, while `git checkout 3f9a1c0` works?",
          choices: ["`switch` only understands branch names, not shas", "The sha is too short for switch to look up", "switch needs `--detach` to go to a bare commit", "checkout creates a branch at the commit first"],
          answer: 2, explain: "`git switch` was designed to be hard to misuse: landing in detached HEAD must be explicit, so you write `git switch --detach 3f9a1c0`. The older `checkout` detaches without asking and prints a long advice message instead. Neither one creates a branch." }
      ]
    }
  ]
});
