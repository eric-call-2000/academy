/* Git & Version Control — Unit 7: Rewriting & remotes */
window.CODELAB.addUnit("git", {
  id: "git-u7",
  title: "Rewriting & remotes",
  icon: "🛰️",
  blurb: "Replay a branch with rebase, squash messy commits into one, share work through a remote called origin — and recover when your push is rejected.",
  cheat: [
    { h: "Rebase: replay instead of merge", lang: "sh", code: "git switch search\ngit rebase main          # replay search's commits on top of main\ngit switch main\ngit merge search         # now a fast-forward: straight history\n# conflict mid-rebase: fix, git add, then\ngit rebase --continue    # or --skip / --abort", note: "Rebase COPIES commits — new shas. Golden rule: never rebase commits other people already have." },
    { h: "Squash with reset --soft", lang: "sh", code: "git reset --soft HEAD~3                 # un-commit 3, keep it all staged\ngit commit -m \"Add price and size filters\"\n# with an editor you'd use: git rebase -i HEAD~3", note: "This terminal has no editor, so rebase -i isn't here — reset --soft gets the same result, honestly." },
    { h: "Remotes", lang: "sh", code: "git clone https://github.com/you/shop.git   # copy + origin set up\ngit remote add origin <url>                 # existing project\ngit remote -v                               # where does origin point?\ngit push -u origin main                     # first push: set upstream\ngit push                                    # later pushes", note: "A remote can be a URL or a path — git clone /srv/shop.git is real Git. This terminal uses paths; the commands are identical." },
    { h: "fetch vs pull", lang: "sh", code: "git fetch            # download; moves origin/main ONLY\ngit status           # now it can tell you 'behind by 1'\ngit pull             # fetch + merge into your branch\ngit pull --rebase    # fetch + rebase onto it instead", note: "git status only knows what your last fetch told it. 'Up to date' can be stale." },
    { h: "When push is rejected", lang: "sh", code: "# ! [rejected] main -> main (fetch first)\ngit pull --rebase && git push       # someone else pushed: integrate first\n\n# ! [rejected] feature -> feature (non-fast-forward)\ngit push --force-with-lease         # YOU rewrote it: overwrite, safely", note: "--force-with-lease refuses if the remote moved since your last fetch. Plain --force would silently destroy a teammate's commits." }
  ],
  lessons: [

    {
      id: "git-u7-1",
      title: "Rebase: replay, don't merge",
      kind: "shell", chip: "GIT", xp: 25, mins: 16,
      cwd: "/home/you/project",
      setup: "git init\necho \"<h1>Shop</h1>\" > index.html\ngit add index.html\ngit commit -m \"Add the homepage\"\ngit switch -c search\necho \"let query = '';\" > search.js\ngit add search.js\ngit commit -m \"Add a search box\"\necho \"let results = [];\" >> search.js\ngit commit -am \"Show search results\"\ngit switch main\necho \"footer { color: gray; }\" > footer.css\ngit add footer.css\ngit commit -m \"Add footer styles\"\ngit switch search",
      brief: "`search` branched off before `main` got its footer. Merging would work, but it leaves a merge commit and a fork in the history. Many teams prefer a **straight line**.\n\n`git rebase main` takes the commits that are on your branch but not on `main`, and **replays** them one by one on top of `main`'s latest commit, as if you'd started the work today. Then a merge into `main` is a simple fast-forward.\n\nHere's the catch: a commit's sha depends on its parent, so replayed commits are **new commits with new shas**. The originals are abandoned (the reflog remembers them). That's why the golden rule exists: **never rebase commits that other people already have.** Rebasing your own unpushed branch is fine.",
      example: { lang: "sh", code: "git rebase main\n# Successfully rebased and updated refs/heads/search.\n\ngit log --oneline\n# d4e5f6a (HEAD -> search) Show search results\n# a1b2c3d Add a search box\n# 7c8d9e0 (main) Add footer styles\n# 1f2a3b4 Add the homepage" },
      steps: [
        { text: "You're on `search`. Replay it onto `main` with `git rebase main`.",
          test: "T.expect(T.said('Successfully rebased and updated refs/heads/search.'), 'Run git rebase main while on search');\nT.eq(T.sha('search~2'), T.before.sha('main'), 'search should now sit on top of main\\'s newest commit (Add footer styles)');" },
        { text: "Check the result with `git log --oneline`: one straight line, four commits.",
          test: "T.eq(T.count('search'), 4, 'search should contain all four commits');\nT.expect(T.log('search').every(function (c) { return c.parents.length < 2; }), 'Rebased history has no merge commits');\nT.expect(T.ran(/^git log --oneline/), 'Run git log --oneline');" },
        { text: "Notice the shas changed: your two commits were **copied**, not moved.",
          test: "T.expect(T.sha('search') !== T.before.sha('search') && T.sha('search~1') !== T.before.sha('search~1'), 'Both search commits should have NEW shas after the rebase');\nT.eq(T.log('search')[1].subject, 'Add a search box', 'Same messages, same order — only the shas and parents change');" },
        { text: "Switch to `main` and merge `search`: it's a fast-forward now.",
          test: "T.eq(T.head(), 'refs/heads/main', 'End on main');\nT.eq(T.sha('main'), T.sha('search'), 'main should now point at the same commit as search');\nT.eq(T.commit('main').parents.length, 1, 'No merge commit — after a rebase the merge is a fast-forward');\nT.expect(T.said('Fast-forward'), 'Git should report Fast-forward');" }
      ],
      files: [
        { name: "commands.sh", content: "# You're on search. main got a footer after search branched off.\n\n# 1) Replay search on top of main:\n\n# 2) Look at the history:\n\n# 3) Bring it into main:\n\n" }
      ],
      hints: [
        "`git rebase main` — you rebase the branch you're ON onto the one you name.",
        "`git log --oneline` shows search's history, now straight.",
        "`git switch main`, then `git merge search` — it fast-forwards."
      ],
      solution: {
        "commands.sh": "# You're on search. main got a footer after search branched off.\n\n# 1) Replay search on top of main:\ngit rebase main\n\n# 2) Look at the history:\ngit log --oneline\n\n# 3) Bring it into main:\ngit switch main\ngit merge search\n"
      }
    },

    {
      id: "git-u7-2",
      title: "Squashing with reset --soft",
      kind: "shell", chip: "GIT", xp: 20, mins: 12,
      cwd: "/home/you/project",
      setup: "git init\necho \"<h1>Shop</h1>\" > index.html\ngit add index.html\ngit commit -m \"Add the homepage\"\ngit switch -c filters\necho \"let filters = [];\" > filters.js\ngit add filters.js\ngit commit -m \"wip\"\necho \"filters.push('price');\" >> filters.js\ngit commit -am \"more wip\"\necho \"filters.push('size');\" >> filters.js\ngit commit -am \"fix typo\"",
      brief: "Your `filters` branch works, but its history reads `wip`, `more wip`, `fix typo`. Before anyone reviews it, those three should be **one** commit that says what the feature is.\n\nWith a text editor you'd reach for `git rebase -i`. There's no editor here, and there's a cleaner trick that uses what you already know: `git reset --soft HEAD~3` moves the branch back three commits **but keeps all their changes staged** (Unit 6). One `git commit` then records all of it as a single commit.\n\nNothing is lost: the final file content is identical, only the history is tidier. And as with any rewrite, do it **before** you push.",
      example: { lang: "sh", code: "git reset --soft HEAD~3\ngit status\n# Changes to be committed:\n# \tnew file:   filters.js\n\ngit commit -m \"Add price and size filters\"" },
      steps: [
        { text: "Un-commit the three messy commits with `git reset --soft HEAD~3`.",
          test: "T.expect(T.ran(/^git reset --soft HEAD~3/), 'Use git reset --soft HEAD~3 — soft keeps everything staged');" },
        { text: "Commit it all as one: **Add price and size filters**.",
          test: "T.eq(T.count(), 2, 'filters should end with two commits: the homepage and your squashed one');\nT.eq(T.log()[0].subject, 'Add price and size filters', 'The squashed commit message should be: Add price and size filters');" },
        { text: "Verify nothing was lost: the committed `filters.js` is identical to before.",
          test: "T.eq(T.blobAt('HEAD', 'filters.js'), T.before.blobAt('HEAD', 'filters.js'), 'The squashed commit must contain the same filters.js as the three commits did together');\nT.expect(T.clean(), 'Nothing should be left staged or modified');" },
        { text: "Read `git log --oneline`: the `wip` commits are gone from the branch.",
          test: "var lg = T.transcript.filter(function (t) { return /^git log --oneline/.test(t.cmd); }).pop();\nT.expect(lg && lg.out.indexOf('wip') === -1 && lg.out.indexOf('Add price and size filters') !== -1, 'Run git log --oneline after squashing');" }
      ],
      files: [
        { name: "commands.sh", content: "# filters has three messy commits: wip, more wip, fix typo.\n\n# 1) Un-commit all three, keeping the work staged:\n\n# 2) One good commit:\n\n# 3) Check:\n\n" }
      ],
      hints: [
        "`HEAD~3` is three commits back — the homepage commit, where filters branched off.",
        "`git reset --soft HEAD~3`, then `git commit -m \"Add price and size filters\"`.",
        "`git log --oneline` to see the tidy history."
      ],
      solution: {
        "commands.sh": "# filters has three messy commits: wip, more wip, fix typo.\n\n# 1) Un-commit all three, keeping the work staged:\ngit reset --soft HEAD~3\n\n# 2) One good commit:\ngit commit -m \"Add price and size filters\"\n\n# 3) Check:\ngit log --oneline\n"
      }
    },

    {
      id: "git-u7-3",
      title: "A remote called origin: push, fetch, pull",
      kind: "shell", chip: "GIT", xp: 25, mins: 18,
      cwd: "/home/you/project",
      setup: "git init --bare /srv/shop.git\ngit clone /srv/shop.git /home/ada/shop\ncd /home/ada/shop\ngit config user.name \"Ada\"\ngit config user.email \"ada@example.com\"\necho \"<h1>Shop</h1>\" > index.html\ngit add index.html\ngit commit -m \"Add the homepage\"\ngit push -u origin main\ngit clone /srv/shop.git /home/you/project\ncd /home/ada/shop\necho \"<p>Open 9 to 5</p>\" >> index.html\ngit commit -am \"Add opening hours\"\ngit push",
      brief: "A **remote** is another copy of the repository that you sync with — usually on GitHub, here at `/srv/shop.git` (a path is a perfectly real Git remote; a URL works identically). `git clone` sets one up called **origin** for you.\n\nYou cloned the shop earlier. Since then your teammate Ada pushed a commit. But `git status` will cheerfully tell you you're *up to date* — because your repository only knows what it learned at your last contact with origin. `origin/main` is your **last-known copy** of origin's `main`, not a live view.\n\n- `git fetch` downloads new commits and moves `origin/main`. It never touches your `main` or your files.\n- `git pull` is `git fetch` **plus** merging `origin/main` into your branch.\n- `git push` sends your commits up and moves origin's branch.\n\nSee the stale status, fetch, pull Ada's work, then push your own.",
      example: { lang: "sh", code: "git fetch\n# From /srv/shop.git\n#    1f2a3b4..9c8d7e6  main       -> origin/main\n\ngit status\n# Your branch is behind 'origin/main' by 1 commit, and can be fast-forwarded." },
      steps: [
        { text: "Where does origin point? Run `git remote -v`. Then run `git status` — and notice it thinks you're up to date.",
          test: "T.expect(T.out().indexOf('origin\\t/srv/shop.git (fetch)') !== -1, 'Run git remote -v');\nT.expect(T.said(\"Your branch is up to date with 'origin/main'.\"), 'Run git status BEFORE fetching — it only knows what the last contact told it');" },
        { text: "`git fetch`, then `git status` again: now it knows you're one commit behind.",
          test: "T.expect(T.ran(/^git fetch/), 'Run git fetch');\nT.expect(T.said(\"Your branch is behind 'origin/main' by 1 commit\"), 'Run git status AFTER fetching — it should report behind by 1');" },
        { text: "`git pull` to bring Ada's commit into your `main`.",
          test: "T.expect(T.log().some(function (c) { return c.subject === 'Add opening hours'; }), 'Your main should contain Ada\\'s \"Add opening hours\" — git pull');\nT.expect(T.said('Fast-forward'), 'Nothing of yours was in the way, so the pull should fast-forward');" },
        { text: "Add `<footer>Shop</footer>` to `index.html`, commit it as **Add a footer**, and `git push`.",
          test: "T.eq(T.log()[0].subject, 'Add a footer', 'Commit your change as: Add a footer');\nT.eq(T.onRemote('main'), T.sha('main'), 'origin\\'s main should now match yours — git push');\nT.eq(T.remoteSha('origin/main'), T.sha('main'), 'After a push, your origin/main updates too');" }
      ],
      files: [
        { name: "commands.sh", content: "# You cloned the shop a while ago. Ada has pushed since.\n\n# 1) Where's origin? What does status think?\n\n# 2) Ask origin what's new, then check again:\n\n# 3) Bring it in:\n\n# 4) Your own change, shared:\n\n" }
      ],
      hints: [
        "`git remote -v`, then `git status` — note the confident \"up to date\".",
        "`git fetch`, `git status`, then `git pull`.",
        "`echo \"<footer>Shop</footer>\" >> index.html`, `git commit -am \"Add a footer\"`, `git push`."
      ],
      solution: {
        "commands.sh": "# You cloned the shop a while ago. Ada has pushed since.\n\n# 1) Where's origin? What does status think?\ngit remote -v\ngit status\n\n# 2) Ask origin what's new, then check again:\ngit fetch\ngit status\n\n# 3) Bring it in:\ngit pull\n\n# 4) Your own change, shared:\necho \"<footer>Shop</footer>\" >> index.html\ngit commit -am \"Add a footer\"\ngit push\n"
      }
    },

    {
      id: "git-u7-4",
      title: "Rejected! Non-fast-forward and --force-with-lease",
      kind: "shell", chip: "GIT", xp: 30, mins: 16,
      cwd: "/home/you/project",
      setup: "git init --bare /srv/shop.git\ngit init\necho \"<h1>Shop</h1>\" > index.html\ngit add index.html\ngit commit -m \"Add the homepage\"\ngit remote add origin /srv/shop.git\ngit push -u origin main\ngit switch -c wishlist\necho \"let wishlist = [];\" > wishlist.js\ngit add wishlist.js\ngit commit -m \"Add a wishlist\"\ngit push -u origin wishlist\ngit clone /srv/shop.git /home/ada/shop\ncd /home/ada/shop\ngit config user.name \"Ada\"\ngit config user.email \"ada@example.com\"\necho \"footer { color: gray; }\" > footer.css\ngit add footer.css\ngit commit -m \"Add footer styles\"\ngit push",
      brief: "You pushed your `wishlist` branch yesterday so the team could see it. Overnight Ada pushed to `main`. You want `wishlist` rebased onto the new `main` before you open it for review.\n\nRebasing works locally, but it makes **new** commits. Your `wishlist` no longer contains the commit that's on origin, so a plain `git push` is **rejected as non-fast-forward**: accepting it would throw away a commit origin has. Git won't do that silently.\n\nThis time you *meant* to replace it. The branch is yours, and you rewrote it on purpose. `git push --force-with-lease` overwrites the remote branch **only if it's still where you last saw it**. If a teammate pushed to it since your last fetch, the lease fails and nothing is destroyed. Plain `--force` has no such check. Never use it on a branch someone else might touch.",
      example: { lang: "sh", code: "git push\n#  ! [rejected]        wishlist -> wishlist (non-fast-forward)\n# error: failed to push some refs to '/srv/shop.git'\n\ngit push --force-with-lease\n#  + 4e5f6a7...8b9c0d1 wishlist -> wishlist (forced update)" },
      steps: [
        { text: "`git fetch`, then rebase `wishlist` onto `origin/main`.",
          test: "T.eq(T.sha('wishlist~1'), T.remoteSha('origin/main'), 'wishlist should sit on top of origin/main (Ada\\'s footer commit) — git fetch, then git rebase origin/main');\nT.expect(T.log('wishlist').every(function (c) { return c.parents.length < 2; }), 'Rebased history has no merge commits');" },
        { text: "Try a plain `git push` — and read the rejection.",
          test: "T.expect(T.said('[rejected]') && T.said('(non-fast-forward)'), 'Run a plain git push after rebasing — it should be rejected as non-fast-forward');" },
        { text: "You rewrote it on purpose: push with `--force-with-lease`.",
          test: "T.expect(T.ran(/^git push --force-with-lease/), 'Use git push --force-with-lease');\nT.expect(!/git push[^\\n]*\\s(-f|--force)(\\s|$)/.test(T.script()), 'Never plain --force — use --force-with-lease so a teammate\\'s push can\\'t be destroyed');\nT.eq(T.onRemote('wishlist'), T.sha('wishlist'), 'origin\\'s wishlist should now be your rebased branch');\nT.expect(T.said('(forced update)'), 'Git should report a forced update');" },
        { text: "Confirm nothing else changed on origin: `main` is still Ada's commit.",
          test: "T.eq(T.onRemote('main'), T.before.onRemote('main'), 'Only wishlist should change on origin');\nT.expect(T.ran(/^git log/), 'Finish by looking at the history with git log --oneline');" }
      ],
      files: [
        { name: "commands.sh", content: "# You're on wishlist (already pushed). Ada pushed to main overnight.\n\n# 1) Get Ada's work and rebase onto it:\n\n# 2) Share the rebased branch:\n\n# 3) You meant it — overwrite, safely:\n\n# 4) Look:\n\n" }
      ],
      hints: [
        "`git fetch` updates origin/main; then `git rebase origin/main`.",
        "A plain `git push` is refused: origin's wishlist has a commit your rebased branch doesn't.",
        "`git push --force-with-lease`, then `git log --oneline`."
      ],
      solution: {
        "commands.sh": "# You're on wishlist (already pushed). Ada pushed to main overnight.\n\n# 1) Get Ada's work and rebase onto it:\ngit fetch\ngit rebase origin/main\n\n# 2) Share the rebased branch:\ngit push\n\n# 3) You meant it — overwrite, safely:\ngit push --force-with-lease\n\n# 4) Look:\ngit log --oneline\n"
      }
    },

    {
      id: "git-quiz-7",
      title: "Unit 7 quiz: Rebase & remotes",
      kind: "quiz", xp: 10,
      brief: "Rebasing safely, fetch versus pull, and what a rejected push is telling you. 80% to pass.",
      questions: [
        { q: "After `git rebase main`, why do your branch's commits have different shas?",
          choices: ["Rebase renames commits to show they were moved", "They are new commits with new parents, so new shas", "Git always rehashes commits when you switch branches", "The shas are the same; only the dates changed"],
          answer: 1, explain: "A sha is computed from a commit's content, including its parent. Rebase replays each change onto a different parent, so every replayed commit is a new commit with a new sha. The originals still exist (the reflog remembers them) but your branch no longer points at them." },
        { q: "Which situation breaks the golden rule of rebasing?",
          choices: ["Rebasing your local branch onto the latest main", "Rebasing a branch nobody else has fetched yet", "Rebasing commits your teammates have already pulled", "Rebasing a branch to squash your own wip commits"],
          answer: 2, explain: "Rebasing replaces commits with copies. If others already have the originals, their history and yours now disagree, and sorting it out means painful force-pushes and re-pulls. Rewriting your own unshared work is exactly what rebase is for." },
        { q: "What does `git fetch` change in your repository?",
          choices: ["Your main branch and the files on disk", "The remote-tracking refs like origin/main, and nothing else", "Only the files on disk, leaving branches alone", "Nothing, until you run `git merge` afterwards"],
          answer: 1, explain: "Fetch downloads new commits and moves your remote-tracking refs (`origin/main`) to match what origin has. Your own branches and working tree are untouched — which makes fetch always safe. `git pull` is fetch plus a merge (or rebase) into your branch." },
        { q: "`git push` fails with `! [rejected] main -> main (fetch first)`. What happened, and what's the fix?",
          choices: ["Someone else pushed; pull (or pull --rebase), then push", "Your credentials expired; log in again, then push", "You're on the wrong branch; switch, then push", "The remote is read-only; push with --force instead"],
          answer: 0, explain: "The remote has commits you don't. Pushing would erase them, so Git refuses. Integrate first — `git pull --rebase` replays your commits on top of theirs — then push. Forcing would delete your teammate's work." },
        { q: "What does `--force-with-lease` protect you from that `--force` doesn't?",
          choices: ["Pushing to a branch that doesn't exist yet", "Overwriting commits pushed since your last fetch", "Pushing without having run the tests first", "Accidentally pushing to main instead of your branch"],
          answer: 1, explain: "The lease says \"only overwrite if the remote branch is still where I last saw it\" (your `origin/<branch>`). If a teammate pushed in the meantime, the push fails as `(stale info)` instead of silently wiping their commits. Plain `--force` overwrites whatever is there." },
        { q: "You want three messy commits squashed into one, and this terminal has no editor. What works?",
          code: "git log --oneline\n# c3 (HEAD -> filters) fix typo\n# c2 more wip\n# c1 wip\n# b0 Add the homepage",
          lang: "sh",
          choices: ["`git reset --hard HEAD~3` then commit", "`git revert HEAD~3` then commit", "`git merge --squash HEAD~3`", "`git reset --soft HEAD~3` then commit"],
          answer: 3, explain: "`--soft` moves the branch back to b0 but leaves all three commits' changes staged, so one `git commit` records them together. `--hard` would throw the work away, and revert would *add* an undo commit rather than combine anything. With an editor, `git rebase -i` does the same job interactively." }
      ]
    }
  ]
});
