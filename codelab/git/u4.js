/* Git & Version Control — Unit 4: Merging & conflicts */
window.CODELAB.addUnit("git", {
  id: "git-u4",
  title: "Merging & conflicts",
  icon: "🔀",
  blurb: "Bring a branch's work home: fast-forwards, real merge commits with two parents, a genuine conflict resolved by hand — and the escape hatch when you'd rather not.",
  cheat: [
    { h: "Merging", lang: "sh", code: "git switch main                 # go to the branch that RECEIVES\ngit log --oneline main..faq     # what would merging faq bring in?\ngit merge faq                   # bring it in\ngit merge faq --no-edit         # keep Git's default message", note: "You merge INTO the branch you're on. The other branch doesn't move." },
    { h: "Fast-forward vs merge commit", lang: "sh", code: "# main hasn't moved since faq branched off:\n#   main ─ A ─ B              →  main just slides to D  (fast-forward)\n#               └ C ─ D  faq\n# both moved:\n#   main ─ A ─ B ─ E          →  new commit M with parents E and D\n#               └ C ─ D  faq", note: "git merge --no-ff forces a merge commit even when a fast-forward is possible." },
    { h: "Reading conflict markers", lang: "sh", code: "<<<<<<< HEAD\nconst theme = 'blue';      ← yours (the branch you're on)\n=======\nconst theme = 'dark';      ← theirs (the branch being merged)\n>>>>>>> dark-mode", note: "Git only conflicts where BOTH sides changed the same lines. Everything else merged by itself." },
    { h: "Finishing or bailing out", lang: "sh", code: "git status                       # 'both modified' = still unresolved\n# edit the file until it's what you want, markers gone, then:\ngit add app.js                   # marks it resolved\ngit commit --no-edit             # or: git merge --continue\ngit merge --abort                # changed your mind: back to before", note: "git checkout --ours app.js / --theirs app.js takes one side wholesale." }
  ],
  lessons: [

    {
      id: "git-u4-1",
      title: "Fast-forward: the merge that isn't",
      kind: "shell", chip: "GIT", xp: 15, mins: 12,
      cwd: "/home/you/project",
      setup: "git init\necho \"<h1>Shop</h1>\" > index.html\ngit add index.html\ngit commit -m \"Add the homepage\"\necho \"h1 { color: navy; }\" > style.css\ngit add style.css\ngit commit -m \"Add styles\"\ngit switch -c faq\necho \"<h1>FAQ</h1>\" > faq.html\ngit add faq.html\ngit commit -m \"Add an FAQ page\"\necho \"<p>Shipping takes 3 days.</p>\" >> faq.html\ngit commit -am \"Answer the shipping question\"\ngit switch main",
      brief: "The FAQ page is finished on its branch, and it's time to bring it into `main`. You merge **into** the branch you're on, so you're already on `main`.\n\nFirst look before you leap: `git log --oneline main..faq` lists the commits on `faq` that `main` doesn't have — exactly what the merge will bring in.\n\nNothing has happened on `main` since `faq` branched off, so there's nothing to combine. Git just slides the `main` pointer forward to `faq`'s latest commit. That's a **fast-forward**: no merge commit, no new snapshot, just a moved name. The history stays a straight line.",
      example: { lang: "sh", code: "git merge faq\n# Updating 8c2e4a1..5d6e7f8\n# Fast-forward\n#  faq.html | 2 ++\n#  1 file changed, 2 insertions(+)\n#  create mode 100644 faq.html" },
      steps: [
        { text: "Preview what the merge will bring: `git log --oneline main..faq`.",
          test: "var t = T.transcript.filter(function (x) { return /^git log --oneline main\\.\\.faq\\s*$/.test(x.cmd); })[0];\nT.expect(t, 'Run git log --oneline main..faq before merging');\nT.eq(t.out.trim().split('\\n').length, 2, 'Run the preview BEFORE the merge — it should list faq\\'s two new commits');" },
        { text: "Merge `faq` into `main`.",
          test: "T.eq(T.head(), 'refs/heads/main', 'Stay on main — you merge INTO the branch you are on');\nT.eq(T.sha('main'), T.before.sha('faq'), 'main should now point at faq\\'s newest commit — git merge faq');" },
        { text: "Confirm it was a fast-forward: no merge commit was created.",
          test: "T.expect(T.said('Fast-forward'), 'Git should report Fast-forward');\nT.eq(T.count(), 4, 'Four commits, not five — a fast-forward creates no merge commit');\nT.eq(T.commit('HEAD').parents.length, 1, 'The newest commit should have one parent');" },
        { text: "Run `git log --oneline -1`: both names now sit on the same commit.",
          test: "T.expect(/\\(HEAD -> main, faq\\) Answer the shipping question/.test(T.out()), 'Run git log --oneline -1 after the merge — you should see (HEAD -> main, faq)');" }
      ],
      files: [
        { name: "commands.sh", content: "# You're on main. faq is two commits ahead.\n\n# 1) What would merging faq bring in?\n\n# 2) Bring it in:\n\n# 3) Where do the names point now?\n\n" }
      ],
      hints: [
        "`main..faq` means \"commits reachable from faq but not from main\".",
        "`git merge faq` — you're already on main, the branch that receives.",
        "Then `git log --oneline -1` shows only the newest commit, with its decorations."
      ],
      solution: {
        "commands.sh": "# You're on main. faq is two commits ahead.\n\n# 1) What would merging faq bring in?\ngit log --oneline main..faq\n\n# 2) Bring it in:\ngit merge faq\n\n# 3) Where do the names point now?\ngit log --oneline -1\n"
      }
    },

    {
      id: "git-u4-2",
      title: "A real merge commit has two parents",
      kind: "shell", chip: "GIT", xp: 20, mins: 14,
      cwd: "/home/you/project",
      setup: "git init\necho \"<h1>Shop</h1>\" > index.html\ngit add index.html\ngit commit -m \"Add the homepage\"\ngit switch -c reviews\necho \"<h2>Reviews</h2>\" > reviews.html\ngit add reviews.html\ngit commit -m \"Add a reviews page\"\ngit switch main\necho \"footer { color: gray; }\" > footer.css\ngit add footer.css\ngit commit -m \"Add footer styles\"",
      brief: "This time both branches moved: `reviews` added a page, and meanwhile `main` got footer styles. Neither contains the other, so a fast-forward is impossible.\n\nGit does a **three-way merge**: it finds the commit where the branches split (the *merge base*), works out what each side changed since then, and combines both sets of changes. The result is recorded as a **merge commit** — the only kind of commit with **two parents**, one for each branch it joined.\n\nIn a normal terminal Git opens an editor so you can adjust the merge message. `--no-edit` accepts the default, `Merge branch 'reviews'` — which is what you want almost every time.",
      example: { lang: "sh", code: "git merge reviews --no-edit\n# Merge made by the 'ort' strategy.\n#  reviews.html | 1 +\n#  1 file changed, 1 insertion(+)\n\ngit show HEAD\n# commit 7a1c…\n# Merge: 4d2e9f0 b81c3a7" },
      steps: [
        { text: "Merge `reviews` into `main`, keeping the default message.",
          test: "T.eq(T.commit('HEAD').parents.length, 2, 'The newest commit should be a merge commit with two parents — git merge reviews --no-edit');\nT.eq(T.log()[0].subject, \"Merge branch 'reviews'\", 'Keep Git\\'s default message: Merge branch \\'reviews\\'');" },
        { text: "Check the parents: one is `main`'s old tip, the other is `reviews`.",
          test: "T.eq(T.commit('HEAD').parents, [T.before.sha('main'), T.before.sha('reviews')], 'The first parent is where main was; the second is the branch you merged');\nT.eq(T.sha('reviews'), T.before.sha('reviews'), 'reviews itself should not move — only the branch you are on does');" },
        { text: "Both sides' work is on disk now: `ls` shows `reviews.html` and `footer.css` together.",
          test: "T.expect(T.wt('reviews.html') != null && T.wt('footer.css') != null, 'Both reviews.html and footer.css should exist on main after the merge');\nT.expect(T.ran(/^ls/), 'Run ls to see them');" },
        { text: "Look at the merge commit with `git show HEAD` — find the `Merge:` line.",
          test: "T.expect(T.ran(/^git show( HEAD)?\\s*$/), 'Run git show HEAD');\nT.expect(T.out().indexOf('Merge: ') !== -1, 'git show on a merge commit prints a Merge: line naming both parents — run it after merging');" }
      ],
      files: [
        { name: "commands.sh", content: "# main and reviews have both moved since they split.\n\n# 1) Merge reviews in (default message):\n\n# 2) What's on disk now?\n\n# 3) Inspect the merge commit:\n\n" }
      ],
      hints: [
        "`git merge reviews --no-edit` — you're on main already.",
        "`ls` lists the working tree.",
        "`git show HEAD` prints the commit header; for a merge it includes `Merge: <parent1> <parent2>`."
      ],
      solution: {
        "commands.sh": "# main and reviews have both moved since they split.\n\n# 1) Merge reviews in (default message):\ngit merge reviews --no-edit\n\n# 2) What's on disk now?\nls\n\n# 3) Inspect the merge commit:\ngit show HEAD\n"
      }
    },

    {
      id: "git-u4-3",
      title: "Conflict! Reading and resolving the markers",
      kind: "shell", chip: "GIT", xp: 25, mins: 16,
      cwd: "/home/you/project",
      setup: "git init\necho \"const greeting = 'Hello';\" > app.js\necho \"const theme = 'light';\" >> app.js\ngit add app.js\ngit commit -m \"Add app settings\"\ngit switch -c dark-mode\necho \"const greeting = 'Hello';\" > app.js\necho \"const theme = 'dark';\" >> app.js\ngit commit -am \"Default to dark mode\"\ngit switch main\necho \"const greeting = 'Hello';\" > app.js\necho \"const theme = 'blue';\" >> app.js\ngit commit -am \"Use the blue theme\"",
      brief: "Both branches changed **the same line** of `app.js`: `main` set the theme to blue, `dark-mode` set it to dark. Git can't know which is right, so it stops and asks you. That's a **conflict**, and it's a normal part of working with branches, not an error.\n\nGit writes both versions into the file between markers:\n\n- `<<<<<<< HEAD` opens **your** side — the branch you're on (`const theme = 'blue';`)\n- `=======` separates the two sides\n- `>>>>>>> dark-mode` closes **their** side — the branch being merged (`const theme = 'dark';`)\n\nThe team's decision: **dark is the theme, and blue stays as the accent colour**. Resolving means making the file say exactly that, with the markers gone, then `git add` (marks it resolved) and `git commit` (finishes the merge). There's no editor in this terminal, so rewrite the file line by line with `echo … >` and `echo … >>`.",
      example: { lang: "sh", code: "git merge dark-mode\n# Auto-merging app.js\n# CONFLICT (content): Merge conflict in app.js\n# Automatic merge failed; fix conflicts and then commit the result." },
      steps: [
        { text: "Merge `dark-mode` and hit the conflict.",
          test: "T.expect(T.said('CONFLICT (content): Merge conflict in app.js'), 'git merge dark-mode should stop with a CONFLICT in app.js');" },
        { text: "Investigate: `git status` (look for *both modified*) and `cat app.js` (look at the markers).",
          test: "T.expect(T.out().indexOf('both modified:   app.js') !== -1, 'Run git status during the conflict — it lists app.js as both modified');\nT.expect(T.out().indexOf('<<<<<<< HEAD') !== -1 && T.out().indexOf('>>>>>>> dark-mode') !== -1, 'Run cat app.js during the conflict to see the markers');" },
        { text: "Rewrite `app.js` as the resolution: the greeting, `const theme = 'dark';`, then `const accent = 'blue';` — no markers.",
          test: "var f = T.wt('app.js') || '';\nT.expect(!/<<<<<<<|=======|>>>>>>>/.test(f), 'app.js still contains conflict markers');\nT.expect(f.indexOf(\"const theme = 'dark';\") !== -1, 'The resolution must keep dark as the theme');\nT.expect(f.indexOf(\"const accent = 'blue';\") !== -1, 'Blue must survive as the accent: const accent = \\'blue\\';');\nT.eq(f, \"const greeting = 'Hello';\\nconst theme = 'dark';\\nconst accent = 'blue';\\n\", 'app.js should be exactly three lines: greeting, theme, accent');" },
        { text: "Mark it resolved with `git add`, and finish the merge with `git commit --no-edit`.",
          test: "T.expect(!T.merging(), 'The merge is still in progress — git add app.js, then git commit --no-edit');\nT.eq(T.commit('HEAD').parents.length, 2, 'Finishing a conflicted merge still makes a two-parent merge commit');\nT.eq(T.commit('HEAD').files['app.js'], \"const greeting = 'Hello';\\nconst theme = 'dark';\\nconst accent = 'blue';\\n\", 'The merge commit should contain your resolved app.js');" }
      ],
      files: [
        { name: "commands.sh", content: "# main says blue, dark-mode says dark. Merge them.\n# Resolution: theme = dark, accent = blue.\n\n# 1) Start the merge:\n\n# 2) Investigate:\n\n# 3) Write the resolved file (echo … > then echo … >>):\n\n# 4) Mark resolved and finish:\n\n" }
      ],
      hints: [
        "`git merge dark-mode`, then `git status` and `cat app.js`.",
        "Three echo lines: `echo \"const greeting = 'Hello';\" > app.js`, then `echo \"const theme = 'dark';\" >> app.js`, then `echo \"const accent = 'blue';\" >> app.js`.",
        "`git add app.js` marks the conflict resolved; `git commit --no-edit` records the merge with its default message."
      ],
      solution: {
        "commands.sh": "# main says blue, dark-mode says dark. Merge them.\n# Resolution: theme = dark, accent = blue.\n\n# 1) Start the merge:\ngit merge dark-mode\n\n# 2) Investigate:\ngit status\ncat app.js\n\n# 3) Write the resolved file (echo … > then echo … >>):\necho \"const greeting = 'Hello';\" > app.js\necho \"const theme = 'dark';\" >> app.js\necho \"const accent = 'blue';\" >> app.js\n\n# 4) Mark resolved and finish:\ngit add app.js\ngit commit --no-edit\n"
      }
    },

    {
      id: "git-u4-4",
      title: "git merge --abort: the escape hatch",
      kind: "shell", chip: "GIT", xp: 15, mins: 10,
      cwd: "/home/you/project",
      setup: "git init\necho \"const price = 20;\" > price.js\ngit add price.js\ngit commit -m \"Set the price\"\ngit switch -c sale\necho \"const price = 15;\" > price.js\ngit commit -am \"Start the sale\"\ngit switch main\necho \"const price = 22;\" > price.js\ngit commit -am \"Raise the price\"",
      brief: "Sometimes a conflict is the wrong fight at the wrong moment: it's late, the other branch isn't ready, or you merged the wrong thing. You don't have to resolve it.\n\n`git merge --abort` puts everything back **exactly** as it was before you typed `git merge`: the file, the index and HEAD, with no merge in progress. `git status` even reminds you the option exists while a conflict is open.\n\nStart the merge, look at the mess, and walk away cleanly.",
      example: { lang: "sh", code: "git status\n# You have unmerged paths.\n#   (fix conflicts and run \"git commit\")\n#   (use \"git merge --abort\" to abort the merge)" },
      steps: [
        { text: "Merge `sale` — it conflicts on the price.",
          test: "T.expect(T.said('Automatic merge failed'), 'git merge sale should stop with a conflict');" },
        { text: "Run `git status` and find the line that suggests the way out.",
          test: "T.expect(T.out().indexOf('(use \"git merge --abort\" to abort the merge)') !== -1, 'Run git status while the conflict is open');" },
        { text: "Abort the merge.",
          test: "T.expect(T.ran(/^git merge --abort/), 'Run git merge --abort');\nT.expect(!T.merging(), 'A merge is still in progress');\nT.eq(T.wt('price.js'), T.before.wt('price.js'), 'price.js should be back to exactly what it was before the merge');\nT.eq(T.staged(), [], 'Nothing should be staged after aborting');\nT.eq(T.sha(), T.before.sha(), 'HEAD should not have moved');" },
        { text: "Confirm with a final `git status`: the working tree is clean.",
          test: "var last = T.transcript.filter(function (t) { return /^git status/.test(t.cmd); }).pop();\nT.expect(last && last.out.indexOf('nothing to commit, working tree clean') !== -1, 'End with git status — after the abort it should report a clean working tree');" }
      ],
      files: [
        { name: "commands.sh", content: "# main raised the price; sale lowered it. Same line.\n\n# 1) Try the merge:\n\n# 2) What does Git suggest?\n\n# 3) Walk away:\n\n# 4) Check:\n\n" }
      ],
      hints: [
        "`git merge sale` conflicts because both branches changed the one line in price.js.",
        "`git status` during the conflict lists your options.",
        "`git merge --abort`, then `git status` again."
      ],
      solution: {
        "commands.sh": "# main raised the price; sale lowered it. Same line.\n\n# 1) Try the merge:\ngit merge sale\n\n# 2) What does Git suggest?\ngit status\n\n# 3) Walk away:\ngit merge --abort\n\n# 4) Check:\ngit status\n"
      }
    },

    {
      id: "git-quiz-4",
      title: "Unit 4 quiz: Merging",
      kind: "quiz", xp: 10,
      brief: "Fast-forwards, merge commits, conflicts and the way out. 80% to pass.",
      questions: [
        { q: "You're on main and run `git merge faq`. main has no commits that faq lacks. What happens?",
          choices: ["Git creates a merge commit with two parents", "main's pointer moves forward to faq's tip", "faq's pointer moves back to meet main", "Git refuses, since there is nothing to merge"],
          answer: 1, explain: "When the branch you're on is an ancestor of the one you're merging, there's nothing to combine: Git just moves your branch pointer forward. That's a fast-forward — no new commit, straight-line history. `--no-ff` forces a merge commit if you want one on record." },
        { q: "What makes a merge commit different from every other commit?",
          choices: ["It has two parents", "It cannot contain file changes", "It has no author or date", "It always rewrites the history"],
          answer: 0, explain: "A merge commit records the joining of two lines of history, so it has two parents — first the branch you were on, then the branch you merged. Every other commit has one parent (or zero, for the very first). It changes nothing that existed before; it only adds." },
        { q: "In a conflict, which side is between `<<<<<<< HEAD` and `=======`?",
          code: "<<<<<<< HEAD\nconst limit = 10;\n=======\nconst limit = 25;\n>>>>>>> bulk-orders",
          lang: "sh",
          choices: ["The version from the merge base", "The version from bulk-orders", "The version from the branch you're on", "Whichever version is newer by date"],
          answer: 2, explain: "`HEAD` is the branch you're on — the one receiving the merge — so the top half is yours. The bottom half, above `>>>>>>> bulk-orders`, is theirs. Git never picks by date; it only knows both sides changed the same lines." },
        { q: "You've edited a conflicted file so it's correct and the markers are gone. What's left to finish the merge?",
          choices: ["Run `git merge` again with the same branch", "Nothing — Git notices the markers are gone", "`git add` the file, then `git commit`", "`git restore` the file, then `git commit`"],
          answer: 2, explain: "`git add` is how you tell Git a conflicted file is resolved; `git commit` (or `git merge --continue`) then records the merge commit. Git doesn't scan for missing markers — `git status` keeps saying *both modified* until you add the file. `git restore` would throw your resolution away." },
        { q: "Mid-conflict, you realise you merged the wrong branch. What gets you back to exactly where you were?",
          choices: ["`git merge --abort`", "`git branch -D` on the branch you merged", "`git commit` and then undo it later", "`git switch` back to the same branch"],
          answer: 0, explain: "`git merge --abort` restores the files, the index and HEAD to the moment before `git merge`, and ends the merge. Committing would record a merge you didn't want; deleting the other branch changes nothing here; and switching is refused while there are unresolved conflicts." },
        { q: "Two branches edited different lines of the same file. What does the merge do?",
          choices: ["It always conflicts, because the file changed on both sides", "Git keeps the version from the branch you're on", "Git combines both edits automatically", "It fast-forwards to whichever branch changed last"],
          answer: 2, explain: "A three-way merge compares each side with the merge base line by line. Changes to different parts of a file combine cleanly; Git only stops where both sides changed the same (or directly adjacent) lines. That's why most merges need no help at all." }
      ]
    }
  ]
});
