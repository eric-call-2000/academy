/* Git & Version Control — Unit 6: Undoing things II — after it's committed */
window.CODELAB.addUnit("git", {
  id: "git-u6",
  title: "Undoing things II: after it's committed",
  icon: "⏪",
  blurb: "reset in its three strengths, revert for history other people already have, and the reflog — the record that finds commits you thought you'd destroyed.",
  cheat: [
    { h: "reset: one command, three strengths", lang: "sh", code: "git reset --soft  HEAD~1   # move the branch; change stays STAGED\ngit reset         HEAD~1   # (--mixed) …and unstage it; disk untouched\ngit reset --hard  HEAD~1   # …and overwrite the working tree too", note: "Each flag resets one more of the three trees: HEAD → index → working tree. Only --hard can destroy uncommitted work." },
    { h: "revert: undo in public", lang: "sh", code: "git revert a1b2c3d --no-edit\n# adds a NEW commit that does the opposite of a1b2c3d\n# history is kept — safe on branches others have pulled", note: "Rule of thumb: pushed → revert. Still only on your machine → reset is fine." },
    { h: "The reflog", lang: "sh", code: "git reflog\n# 4e1a2b3 HEAD@{0}: reset: moving to HEAD~2\n# 9f8e7d6 HEAD@{1}: commit: Add the pay button\n# …\ngit reflog main          # just one branch's history", note: "Every place HEAD has been, newest first. It's local to your machine and entries expire (90 days by default)." },
    { h: "Getting it back", lang: "sh", code: "git reset --hard HEAD@{1}           # put the branch back where it was\ngit branch rescue 9f8e7d6            # or: a new branch on the lost commit\ngit switch -c rescue HEAD@{3}        # …and switch to it", note: "Use HEAD@{n} numbers straight after reading them — every move adds an entry and shifts them all by one." },
    { h: "What can't be recovered", lang: "sh", code: "# committed, then reset/amended/branch-deleted  → reflog ✓\n# staged, never committed                        → hard, rarely\n# never staged, then restore or reset --hard     → gone ✗", note: "Commit early, commit often: a commit is the thing that makes work recoverable." }
  ],
  lessons: [

    {
      id: "git-u6-1",
      title: "reset --soft, --mixed, --hard: one command, three trees",
      kind: "shell", chip: "GIT", xp: 25, mins: 16,
      cwd: "/home/you/project",
      setup: "git init\necho \"const VERSION = 1;\" > app.js\ngit add app.js\ngit commit -m \"Release 1\"\necho \"const VERSION = 2;\" > app.js\ngit commit -am \"Release 2\"\necho \"const VERSION = 3;\" > app.js\ngit commit -am \"Release 3\"",
      brief: "`git reset` moves the current branch to another commit. The three flags decide how many of the three trees follow it:\n\n- `--soft` moves only the branch — index and working tree are kept\n- `--mixed` *(the default)* also resets the index — the working tree is kept\n- `--hard` also resets the working tree\n\nRather than trust the list, walk one change down all three. Undo *Release 3* with `--soft` and its change is still staged. Reset the index with a plain `git reset` and the change is merely modified on disk. Then `--hard` wipes it from the working tree too. Run `git status` after each step and watch it move.\n\n`HEAD~1` means \"the commit before HEAD\". Plain `HEAD` means \"where I am now\" — resetting to it moves no branch and only resets the trees.",
      example: { lang: "sh", code: "git reset --soft HEAD~1\ngit status\n# Changes to be committed:\n# \tmodified:   app.js\n\ngit reset\n# Unstaged changes after reset:\n# M\tapp.js" },
      steps: [
        { text: "`git reset --soft HEAD~1`, then `git status`: Release 3 is no longer a commit, but its change is **staged**.",
          test: "var tr = T.transcript, i = -1;\nfor (var k = 0; k < tr.length; k++) if (/^git reset --soft HEAD~1\\s*$/.test(tr[k].cmd)) { i = k; break; }\nT.expect(i !== -1, 'Start with git reset --soft HEAD~1');\nvar st = tr.slice(i + 1).filter(function (t) { return /^git status/.test(t.cmd); })[0];\nT.expect(st && st.out.indexOf('Changes to be committed:') !== -1, 'Run git status right after the soft reset — Release 3\\'s change should show as staged');" },
        { text: "Plain `git reset` (that's `--mixed`, to HEAD), then `git status`: the change is **unstaged** but still on disk.",
          test: "var tr = T.transcript, i = -1;\nfor (var k = 0; k < tr.length; k++) if (/^git reset( --mixed)?( HEAD)?\\s*$/.test(tr[k].cmd)) { i = k; break; }\nT.expect(i !== -1, 'Run a plain git reset (or git reset --mixed HEAD) after the soft one');\nT.expect(tr[i].out.indexOf('Unstaged changes after reset:') !== -1, 'The mixed reset should report the change as unstaged — do the soft reset first');\nvar st = tr.slice(i + 1).filter(function (t) { return /^git status/.test(t.cmd); })[0];\nT.expect(st && st.out.indexOf('Changes not staged for commit:') !== -1 && st.out.indexOf('Changes to be committed:') === -1, 'Run git status after the mixed reset — the change should be unstaged, nothing staged');" },
        { text: "`git reset --hard HEAD`: the change is wiped from the working tree too.",
          test: "T.expect(T.ran(/^git reset --hard( HEAD)?\\s*$/), 'Finish with git reset --hard HEAD');\nT.eq(T.wt('app.js'), 'const VERSION = 2;\\n', 'app.js should be back to Release 2 on disk');\nT.expect(T.clean(), 'Nothing should be staged or modified after the hard reset');" },
        { text: "Confirm with `git log --oneline`: two commits, HEAD on Release 2.",
          test: "T.eq(T.count(), 2, 'Only Release 1 and Release 2 should remain on main');\nT.eq(T.sha(), T.before.sha('HEAD~1'), 'main should point at Release 2');\nT.expect(/\\(HEAD -> main\\) Release 2/.test(T.out()), 'Run git log --oneline at the end');" }
      ],
      files: [
        { name: "commands.sh", content: "# main: Release 1, Release 2, Release 3.\n# Walk Release 3's change down the three trees, checking status each time.\n\n# 1) Soft: undo the commit, keep it staged\n\n# 2) Mixed: unstage it, keep it on disk\n\n# 3) Hard: wipe it\n\n# 4) Where are we?\n\n" }
      ],
      hints: [
        "`git reset --soft HEAD~1`, then `git status` — look for \"Changes to be committed\".",
        "`git reset` on its own is `git reset --mixed HEAD`: it resets the index to HEAD. Follow it with `git status`.",
        "`git reset --hard HEAD`, then `git log --oneline`."
      ],
      solution: {
        "commands.sh": "# main: Release 1, Release 2, Release 3.\n# Walk Release 3's change down the three trees, checking status each time.\n\n# 1) Soft: undo the commit, keep it staged\ngit reset --soft HEAD~1\ngit status\n\n# 2) Mixed: unstage it, keep it on disk\ngit reset\ngit status\n\n# 3) Hard: wipe it\ngit reset --hard HEAD\n\n# 4) Where are we?\ngit log --oneline\n"
      }
    },

    {
      id: "git-u6-2",
      title: "git revert: undoing in public",
      kind: "shell", chip: "GIT", xp: 20, mins: 12,
      cwd: "/home/you/project",
      setup: "git init\necho \"<h1>Shop</h1>\" > index.html\ngit add index.html\ngit commit -m \"Add the homepage\"\necho \"<img src='https://ads.example/pixel.gif'>\" > pixel.html\ngit add pixel.html\ngit commit -m \"Add tracking pixel\"\necho \"<h2>Summer sale</h2>\" >> index.html\ngit commit -am \"Announce the sale\"",
      brief: "Last week someone committed a **tracking pixel**, and it's been pushed — the whole team has pulled it, and the sale announcement was built on top. Legal says the pixel goes. The sale stays.\n\n`reset` is the wrong tool here: it rewrites history, so every teammate's copy would disagree with yours. `git revert <commit>` is the public undo. It works out the *opposite* of that commit's change and records it as a **new commit** on top. History only grows, nothing anyone has pulled is contradicted, and the log shows honestly that the pixel was added and then removed.\n\nThe pixel isn't the last commit — it's `HEAD~1`. Revert it without touching the sale. (`--no-edit` keeps Git's standard message instead of opening an editor.)",
      example: { lang: "sh", code: "git revert HEAD~1 --no-edit\n# [main 6c0f1a9] Revert \"Add tracking pixel\"\n#  1 file changed, 1 deletion(-)\n#  delete mode 100644 pixel.html" },
      steps: [
        { text: "Find the pixel commit with `git log --oneline`, then revert it — it's `HEAD~1`, not the newest commit.",
          test: "T.eq(T.log()[0].subject, 'Revert \"Add tracking pixel\"', 'The newest commit should be Revert \"Add tracking pixel\" — git revert HEAD~1 --no-edit');\nT.eq(T.count(), 4, 'Revert ADDS a commit: there should be four now');" },
        { text: "Check the result: `pixel.html` is gone, and the sale announcement survived.",
          test: "T.eq(T.wt('pixel.html'), null, 'pixel.html should be deleted by the revert');\nT.expect((T.wt('index.html') || '').indexOf('Summer sale') !== -1, 'The sale announcement must survive — revert the pixel commit only, not the one after it');" },
        { text: "History was kept, not rewritten: `git log` shows the revert naming the commit it undid.",
          test: "T.eq(T.sha('HEAD~1'), T.before.sha('HEAD'), 'Every commit that existed before must still be in history — revert, don\\'t reset');\nT.expect(T.log()[0].message.indexOf('This reverts commit ' + T.before.sha('HEAD~1') + '.') !== -1, 'The revert message should name the reverted commit');\nT.expect(T.ran(/^git log\\s*$/), 'Run plain git log to read the full revert message');" }
      ],
      files: [
        { name: "commands.sh", content: "# Shared history: homepage → tracking pixel → sale.\n# Remove the pixel; keep the sale; rewrite nothing.\n\n# 1) Find it:\n\n# 2) Undo it in public:\n\n# 3) Read the result:\n\n" }
      ],
      hints: [
        "`git log --oneline` — the pixel commit is second from the top, which is `HEAD~1`.",
        "`git revert HEAD~1 --no-edit`. (A 7-character sha from the log works just as well.)",
        "`ls` or `cat index.html` to check, then plain `git log` to see the full message."
      ],
      solution: {
        "commands.sh": "# Shared history: homepage → tracking pixel → sale.\n# Remove the pixel; keep the sale; rewrite nothing.\n\n# 1) Find it:\ngit log --oneline\n\n# 2) Undo it in public:\ngit revert HEAD~1 --no-edit\n\n# 3) Read the result:\nls\ngit log\n"
      }
    },

    {
      id: "git-u6-3",
      title: "git reflog: the undo history for your undo",
      kind: "shell", chip: "GIT", xp: 20, mins: 12,
      cwd: "/home/you/project",
      setup: "git init\necho \"step 1\" > plan.txt\ngit add plan.txt\ngit commit -m \"Write step 1\"\necho \"step 2\" >> plan.txt\ngit commit -am \"Write step 2\"\necho \"step 3\" >> plan.txt\ngit commit -am \"Write step 3\"\necho \"step 4\" >> plan.txt\ngit commit -am \"Write step 4\"",
      brief: "It's 2 a.m. You meant `git reset --hard HEAD~1`, you typed `HEAD~2`, and two commits vanished from `git log`. The files are back to step 2. It feels like the work is gone.\n\nIt isn't. `git log` only shows commits reachable from a branch. Git also keeps a **reflog**: a diary of every position HEAD has held — each commit, checkout, reset, merge and amend — newest first. `HEAD@{0}` is where HEAD is now, `HEAD@{1}` is where it was one move ago, and so on. Commits you \"destroyed\" stay in the object store, and the reflog remembers exactly where they are.\n\nDo the damage on purpose, watch `git log` lose the commits, then find them in the reflog. (Getting them back is the next lesson.)",
      example: { lang: "sh", code: "git reflog\n# 2b7c9d1 (HEAD -> main) HEAD@{0}: reset: moving to HEAD~2\n# 8e3f4a5 HEAD@{1}: commit: Write step 4\n# 1c6d2b8 HEAD@{2}: commit: Write step 3\n# …" },
      steps: [
        { text: "Make the mistake: `git reset --hard HEAD~2`.",
          test: "T.expect(T.ran(/^git reset --hard HEAD~2/), 'Run git reset --hard HEAD~2');\nT.eq(T.count(), 2, 'After the reset main should have only two commits');" },
        { text: "Run `git log --oneline`: steps 3 and 4 appear to be gone.",
          test: "var tr = T.transcript, i = -1;\nfor (var k = 0; k < tr.length; k++) if (/^git reset --hard HEAD~2/.test(tr[k].cmd)) { i = k; break; }\nvar lg = tr.slice(i + 1).filter(function (t) { return /^git log --oneline/.test(t.cmd); })[0];\nT.expect(lg, 'Run git log --oneline AFTER the reset');\nT.expect(lg.out.indexOf('Write step 4') === -1 && lg.out.indexOf('Write step 2') !== -1, 'git log should now stop at Write step 2');" },
        { text: "Run `git reflog`: the reset is `HEAD@{0}`, and the lost commit is right there at `HEAD@{1}`.",
          test: "T.expect(T.ran(/^git reflog/), 'Run git reflog');\nT.expect(T.out().indexOf('HEAD@{0}: reset: moving to HEAD~2') !== -1, 'The newest reflog entry should be your reset');\nT.expect(T.out().indexOf('HEAD@{1}: commit: Write step 4') !== -1, 'HEAD@{1} should be the commit you just \"lost\"');\nT.expect(T.reflog().length >= 5, 'The reflog should hold every move: four commits and the reset');" }
      ],
      files: [
        { name: "commands.sh", content: "# main has four commits: Write step 1 … Write step 4.\n\n# 1) The 2 a.m. mistake:\n\n# 2) What does the log say now?\n\n# 3) What does the reflog remember?\n\n" }
      ],
      hints: [
        "`git reset --hard HEAD~2` moves main back two commits and resets the files.",
        "`git log --oneline` only follows the branch — it stops at step 2 now.",
        "`git reflog` lists every move HEAD made, including the commits that no longer appear in `git log`."
      ],
      solution: {
        "commands.sh": "# main has four commits: Write step 1 … Write step 4.\n\n# 1) The 2 a.m. mistake:\ngit reset --hard HEAD~2\n\n# 2) What does the log say now?\ngit log --oneline\n\n# 3) What does the reflog remember?\ngit reflog\n"
      }
    },

    {
      id: "git-u6-4",
      title: "Recovering a commit you deleted",
      kind: "shell", chip: "GIT", xp: 30, mins: 16,
      cwd: "/home/you/project",
      setup: "git init\necho \"<h1>Shop</h1>\" > index.html\ngit add index.html\ngit commit -m \"Add the homepage\"\necho \"<a href='cart.html'>Cart</a>\" >> index.html\ngit commit -am \"Link the cart\"\ngit switch -c free-shipping\necho \"<p>Free shipping!</p>\" >> index.html\ngit commit -am \"Try free shipping\"\ngit switch main\ngit branch -D free-shipping\necho \"<h2>Checkout</h2>\" > checkout.html\ngit add checkout.html\ngit commit -m \"Add checkout\"\necho \"<button>Pay</button>\" >> checkout.html\ngit commit -am \"Add the pay button\"\ngit reset --hard HEAD~2",
      brief: "Two disasters have already happened in this repository:\n\n1. Someone force-deleted the `free-shipping` branch (`git branch -D`), and its only commit went with it.\n2. Then a `git reset --hard HEAD~2` threw away the two checkout commits.\n\nBoth are recoverable, because every one of those commits once sat at HEAD — so the reflog has them. Read it first. Then:\n\n- recreate the branch **on** the lost commit: `git branch free-shipping HEAD@{n}`\n- put `main` back where it was before the reset: `git reset --hard HEAD@{n}`\n\n**Use the numbers straight away, and in that order.** `git branch` doesn't move HEAD, so the numbers stay valid after it. The reset does move HEAD, which adds a new `HEAD@{0}` and shifts every other number by one. A 7-character sha from the reflog works too, and never shifts.",
      example: { lang: "sh", code: "git reflog\n# …  HEAD@{0}: reset: moving to HEAD~2\n# …  HEAD@{1}: commit: Add the pay button\n# …  HEAD@{2}: commit: Add checkout\n# …  HEAD@{3}: checkout: moving from free-shipping to main\n# …  HEAD@{4}: commit: Try free shipping\n# …" },
      steps: [
        { text: "Read the reflog and find both lost trails.",
          test: "T.expect(T.ran(/^git reflog/), 'Start by reading git reflog');" },
        { text: "Recreate `free-shipping` on the commit **Try free shipping**.",
          test: "T.expect(T.branches().indexOf('free-shipping') !== -1, 'Recreate the branch: git branch free-shipping HEAD@{n} (n from the reflog)');\nT.eq(T.log('free-shipping')[0].subject, 'Try free shipping', 'free-shipping should point at the \"Try free shipping\" commit — check which HEAD@{n} you used');" },
        { text: "Put `main` back to **Add the pay button** — all four commits restored.",
          test: "T.eq(T.sha('main'), T.before.reflog()[1].sha, 'main should point where it was before the reset (the Add the pay button commit)');\nT.eq(T.count('main'), 4, 'main should have its four commits back');\nT.eq(T.wt('checkout.html'), '<h2>Checkout</h2>\\n<button>Pay</button>\\n', 'checkout.html should be back on disk');\nT.expect(T.ran(/^git reset --hard (HEAD@\\{\\d+\\}|[0-9a-f]{7,40})/), 'Use the reflog: git reset --hard HEAD@{n} or the sha it shows');" },
        { text: "Check that `free-shipping` grew from the right place: its parent is **Link the cart**.",
          test: "T.eq(T.commit('free-shipping').parents, [T.log('main')[2].sha], 'free-shipping\\'s commit should sit on \"Link the cart\"');\nT.expect(T.ran(/^git log/), 'Finish by looking at the result with git log --oneline --all');" }
      ],
      files: [
        { name: "commands.sh", content: "# A deleted branch AND a reset --hard. Both are in the reflog.\n\n# 1) Read the diary:\n\n# 2) Recreate free-shipping on its lost commit (before anything moves HEAD):\n\n# 3) Put main back where it was before the reset:\n\n# 4) Look at everything:\n\n" }
      ],
      hints: [
        "In the reflog, *Try free shipping* is `HEAD@{4}` and *Add the pay button* is `HEAD@{1}` — as long as nothing has moved HEAD since you read it.",
        "`git branch free-shipping HEAD@{4}` first (it doesn't move HEAD), then `git reset --hard HEAD@{1}`.",
        "`git log --oneline --all` shows every branch at once."
      ],
      solution: {
        "commands.sh": "# A deleted branch AND a reset --hard. Both are in the reflog.\n\n# 1) Read the diary:\ngit reflog\n\n# 2) Recreate free-shipping on its lost commit (before anything moves HEAD):\ngit branch free-shipping HEAD@{4}\n\n# 3) Put main back where it was before the reset:\ngit reset --hard HEAD@{1}\n\n# 4) Look at everything:\ngit log --oneline --all\n"
      }
    },

    {
      id: "git-quiz-6",
      title: "Unit 6 quiz: Reset, revert & recovery",
      kind: "quiz", xp: 10,
      brief: "Three strengths of reset, when to revert instead, and how the reflog saves you. 80% to pass.",
      questions: [
        { q: "After `git reset --soft HEAD~1`, where is the undone commit's change?",
          choices: ["Staged in the index, ready to commit again", "Only in the working tree, unstaged", "Deleted from disk and index", "In the stash, as a WIP entry"],
          answer: 0, explain: "`--soft` only moves the branch pointer. The index and working tree keep the snapshot you had, so the change shows up as staged. That's what makes `reset --soft` useful for re-doing or squashing commits: the work is right there, waiting for a new `git commit`." },
        { q: "Which `git reset` can destroy work that Git cannot give back?",
          choices: ["`--soft`, because it moves the branch", "`--mixed`, because it empties the index", "`--hard`, when there were uncommitted changes", "None — the reflog can undo all of them"],
          answer: 2, explain: "Commits a reset moves away from are still in the reflog, whatever the flag. But `--hard` also overwrites the working tree, and uncommitted edits were never saved as objects — so those are gone. `--soft` and `--mixed` never touch the files on disk." },
        { q: "A bad commit was pushed and teammates have pulled it. How should you undo it?",
          choices: ["`git reset --hard` past it, then push", "`git revert` it and push the new commit", "`git commit --amend` over it, then push", "Delete the branch on the remote and re-create it"],
          answer: 1, explain: "`git revert` adds a new commit that cancels the old one, so shared history is extended rather than rewritten, and everyone's next pull just works. Resetting or amending changes commits others already have; your push would be rejected, and forcing it would pull the rug out from under them." },
        { q: "What exactly does `HEAD@{2}` refer to?",
          code: "git reflog\n# 9c1d2e3 HEAD@{0}: commit: Fix totals\n# 4a5b6c7 HEAD@{1}: checkout: moving from main to fix\n# 8d9e0f1 HEAD@{2}: commit: Add cart",
          lang: "sh",
          choices: ["The commit two parents back from HEAD", "Commit 8d9e0f1 — where HEAD was two moves ago", "The second-newest branch in the repository", "The same commit as `HEAD~2`, written differently"],
          answer: 1, explain: "`HEAD@{n}` counts *moves* of HEAD, newest first, straight from the reflog: here `HEAD@{2}` is 8d9e0f1. `HEAD~2` counts *parents* along the current branch — often a different commit, especially after checkouts, resets or merges." },
        { q: "You ran `git branch -D spike` and lost its only commit. What recovers it?",
          choices: ["`git branch -d spike` to undo the deletion", "`git restore spike`", "Nothing — deleted branches are gone for good", "Find the sha in `git reflog`, then `git branch spike <sha>`"],
          answer: 3, explain: "Deleting a branch deletes a *name*, not the commits. If the spike commit was ever at HEAD, the reflog lists it; `git branch spike <sha>` (or `HEAD@{n}`) puts a name back on it. There is no undo flag — the reflog is the undo." },
        { q: "You read `git reflog`, then ran `git reset --hard HEAD@{1}`. Now you want the entry that was `HEAD@{3}`. Which selector reaches it?",
          choices: ["Still `HEAD@{3}` — reflog numbers never change", "`HEAD@{2}`, because the reset used one up", "`HEAD@{4}`, because the reset added an entry", "`HEAD~3`, which is the same thing"],
          answer: 2, explain: "Every move of HEAD — including the reset you just did — adds a new `HEAD@{0}` and pushes everything else down by one. The old `HEAD@{3}` is now `HEAD@{4}`. That's why you should use the numbers straight away, or copy the sha, which never shifts." }
      ]
    }
  ]
});
