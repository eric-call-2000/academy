/* Git & Version Control — Unit 8: Two projects */
window.CODELAB.addUnit("git", {
  id: "git-u8",
  title: "Two projects",
  icon: "🏁",
  blurb: "No new commands. A repository handed over in a genuinely broken state, then a feature taken all the way from branch to shipped — every unit, under pressure.",
  cheat: [
    { h: "Recovery playbook", lang: "sh", code: "git status                  # 1. what state am I in? (merge? rebase?)\ngit log --oneline --all     # 2. where does every branch point?\ngit reflog                  # 3. where has HEAD been?\ngit stash list              # 4. anything parked?\n# finish or abort what's in progress BEFORE anything else", note: "Diagnose before you act. Every fix in this project is a command from Units 1–7." },
    { h: "Moving a branch that points at the wrong commit", lang: "sh", code: "git branch -f release main@{3}   # re-point release (not the one you're on)\ngit reflog main                  # main@{n}: where main has been\ngit reset --hard <commit>        # re-point the branch you ARE on", note: "branch -f moves another branch's name. reset moves the current one — and the files with it." },
    { h: "Ship-a-feature checklist", lang: "sh", code: "git switch -c coupons                # 1. branch\n# … small commits, good messages …   # 2. work\ngit push -u origin coupons           # 3. share for review\ngit fetch && git rebase origin/main  # 4. catch up (fix conflicts, --continue)\ngit reset --soft HEAD~2 && git commit -m \"…\"   # 5. tidy\ngit push --force-with-lease          # 6. update the review\ngit switch main && git pull && git merge coupons && git push   # 7. ship", note: "Steps 4–6 rewrite YOUR branch only. main is only ever fast-forwarded." }
  ],
  lessons: [

    {
      id: "git-u8-1",
      title: "Project: The 2 a.m. recovery",
      kind: "shell", chip: "GIT", project: true, xp: 50, mins: 30,
      cwd: "/home/you/project",
      setup: "git init\necho \"<h1>Shop</h1>\" > index.html\ngit add index.html\ngit commit -m \"Add the homepage\"\necho \"let cart = [];\" > cart.js\ngit add cart.js\ngit commit -m \"Add the cart\"\necho \"<h2>Checkout</h2>\" > checkout.html\ngit add checkout.html\ngit commit -m \"Add checkout\"\necho \"<button>Pay</button>\" >> checkout.html\ngit commit -am \"Add the pay button\"\ngit reset --hard HEAD~2\ngit branch release\ngit switch -c hotfix\necho \"<h1>Shop (open late tonight)</h1>\" > index.html\ngit commit -am \"Announce late opening\"\ngit switch main\necho \"let cart = []; // TODO: persist\" > cart.js\ngit stash push -m \"cart persistence idea\"\necho \"<h1>Shop (closed Sunday)</h1>\" > index.html\ngit commit -am \"Announce Sunday closing\"\ngit merge hotfix",
      setupExpectFail: ["git merge hotfix"],
      brief: "Your teammate's message at 2 a.m.: *\"I think I broke the repo. Sorry. Going to bed.\"* You open it and find **four** problems at once:\n\n1. A merge of `hotfix` into `main` is **stuck mid-conflict** in `index.html`.\n2. A `git reset --hard HEAD~2` threw away the two checkout commits: *Add checkout* and *Add the pay button*.\n3. `release` was created **after** that reset, so it points at the wrong commit.\n4. There's an unpopped **stash** holding a cart idea.\n\n**The good state you must reach**, on `main`, with a clean working tree:\n\n- the hotfix merge finished, with `index.html` reading exactly `<h1>Shop (open late tonight, closed Sunday)</h1>`\n- both checkout commits back **in `main`'s history**, and `checkout.html` on disk\n- `release` pointing at *Add the pay button*\n- the stash applied, committed as **Sketch cart persistence**, and the stash list empty\n- branches: exactly `hotfix`, `main` and `release`\n\nDiagnose first (`git status`, `git reflog`, `git stash list`). Finish what's in progress before starting anything new, and remember that reflog numbers shift every time HEAD moves.",
      example: { lang: "sh", code: "git reflog main\n# …  main@{0}: commit (merge): Merge branch 'hotfix'\n# …  main@{1}: commit: Announce Sunday closing\n# …  main@{2}: reset: moving to HEAD~2\n# …  main@{3}: commit: Add the pay button\n\ngit branch -f release main@{3}" },
      steps: [
        { text: "Finish the stuck merge: `index.html` resolved to exactly the combined heading, committed.",
          test: "T.expect(!T.merging(), 'A merge is still in progress — resolve index.html, git add it, git commit --no-edit');\nT.expect(T.log('main').some(function (c) { return c.parents.length === 2 && c.parents.indexOf(T.sha('hotfix')) !== -1; }), 'main should contain a merge commit that joins hotfix');\nT.eq(T.blobAt('main', 'index.html'), '<h1>Shop (open late tonight, closed Sunday)</h1>\\n', 'The committed index.html should read exactly: <h1>Shop (open late tonight, closed Sunday)</h1>');" },
        { text: "Nothing from last night is lost: *Announce Sunday closing* is still in `main`.",
          test: "T.expect(T.log('main').some(function (c) { return c.subject === 'Announce Sunday closing'; }), 'main must still contain Announce Sunday closing');" },
        { text: "Both checkout commits are back **in `main`'s history**.",
          test: "var s = T.log('main').map(function (c) { return c.subject; });\nT.expect(s.indexOf('Add checkout') !== -1 && s.indexOf('Add the pay button') !== -1, 'main\\'s history should include Add checkout and Add the pay button — find them in the reflog, then bring them into main');\nT.eq(T.wt('checkout.html'), '<h2>Checkout</h2>\\n<button>Pay</button>\\n', 'checkout.html should be back on disk with both lines');" },
        { text: "`release` points at *Add the pay button*.",
          test: "T.eq(T.commit('release').subject, 'Add the pay button', 'release should point at the Add the pay button commit — git branch -f release <that commit>');" },
        { text: "The stash is applied and committed as **Sketch cart persistence** — and the stash list is empty.",
          test: "T.eq(T.stashList().length, 0, 'The stash list should be empty — git stash pop');\nT.eq(T.blobAt('main', 'cart.js'), 'let cart = []; // TODO: persist\\n', 'The stashed cart.js change should be committed on main');\nT.expect(T.log('main').some(function (c) { return c.subject === 'Sketch cart persistence'; }), 'Commit the popped change as: Sketch cart persistence');" },
        { text: "Exactly three branches: `hotfix`, `main`, `release`.",
          test: "T.eq(T.branches(), ['hotfix', 'main', 'release'], 'You should end with exactly hotfix, main and release');" },
        { text: "End on `main` with a clean working tree.",
          test: "T.eq(T.head(), 'refs/heads/main', 'End on main');\nT.expect(T.clean(), 'Nothing should be staged, modified or conflicted');\nT.eq(T.untracked(), [], 'No untracked files should be left behind');" },
        { text: "You diagnosed before acting: `git reflog` and `git stash list` both appear in your commands.",
          test: "T.expect(T.ran(/^git reflog/), 'Use git reflog to find the lost commits');\nT.expect(T.ran(/^git stash list/), 'Check git stash list before popping');" }
      ],
      files: [
        { name: "commands.sh", content: "# 2 a.m. The repo is broken four ways. Target state is in the brief.\n\n# 1) Diagnose:\n\n# 2) Finish what's in progress (the merge):\n\n# 3) Re-point release at the lost pay-button commit:\n\n# 4) Bring the lost checkout work into main:\n\n# 5) The parked cart idea:\n\n# 6) Check the result:\n\n" }
      ],
      hints: [
        "Order matters. `git status`, `git reflog main` and `git stash list` first. Then resolve: `echo \"<h1>Shop (open late tonight, closed Sunday)</h1>\" > index.html`, `git add index.html`, `git commit --no-edit`.",
        "After that commit, `git reflog main` shows the pay-button commit at `main@{3}`. `git branch -f release main@{3}` re-points release; then `git merge release --no-edit` brings both checkout commits into main.",
        "`git stash pop`, then `git commit -am \"Sketch cart persistence\"`, and finish with `git log --oneline` and `git status`."
      ],
      solution: {
        "commands.sh": "# 2 a.m. The repo is broken four ways. Target state is in the brief.\n\n# 1) Diagnose:\ngit status\ngit reflog main\ngit stash list\n\n# 2) Finish what's in progress (the merge):\necho \"<h1>Shop (open late tonight, closed Sunday)</h1>\" > index.html\ngit add index.html\ngit commit --no-edit\n\n# 3) Re-point release at the lost pay-button commit:\ngit reflog main\ngit branch -f release main@{3}\n\n# 4) Bring the lost checkout work into main:\ngit merge release --no-edit\n\n# 5) The parked cart idea:\ngit stash pop\ngit commit -am \"Sketch cart persistence\"\n\n# 6) Check the result:\ngit log --oneline\ngit status\n"
      }
    },

    {
      id: "git-u8-2",
      title: "Project: Ship a feature end to end",
      kind: "shell", chip: "GIT", project: true, xp: 60, mins: 35,
      cwd: "/home/you/project",
      setup: "git init --bare /srv/shop.git\ngit init\necho \"<h1>Shop</h1>\" > index.html\necho \"const TOTAL_LABEL = 'Total';\" > checkout.js\necho \"const CURRENCY = 'USD';\" >> checkout.js\ngit add .\ngit commit -m \"Add the shop\"\ngit remote add origin /srv/shop.git\ngit push -u origin main\ngit clone /srv/shop.git /home/ada/shop\ncd /home/ada/shop\ngit config user.name \"Ada\"\ngit config user.email \"ada@example.com\"\necho \"const TOTAL_LABEL = 'Order total';\" > checkout.js\necho \"const CURRENCY = 'USD';\" >> checkout.js\ngit commit -am \"Rename the total label\"\ngit push",
      brief: "Build and ship **coupons**, start to finish, the way a real team does it. Ada pushed a change to `main` a little while ago; you haven't fetched it.\n\n1. **Branch** `coupons` from your `main`.\n2. **Three commits:**\n   - **Show the discount at checkout**: `checkout.js` becomes three lines: `const TOTAL_LABEL = 'Total after discount';`, `const CURRENCY = 'USD';`, `const DISCOUNT_LABEL = 'Discount';`\n   - **Add the coupons module**: a new `coupons.js` containing `export const COUPONS = { SAVE10: 0.1 };`\n   - **wip**: append `COUPONS.SUMMER20 = 0.2;` to `coupons.js`\n3. **Share** the branch: `git push -u origin coupons`.\n4. **Catch up:** fetch, and rebase onto `origin/main`. Ada renamed the same label, so it will conflict. The team agreed on `const TOTAL_LABEL = 'Order total after discount';` — keep the other two lines as they were.\n5. **Tidy:** squash the last two commits into one called **Add the coupons module**, so no `wip` survives.\n6. **Update the review:** push. It will be rejected, because you rewrote published commits. Overwrite it **safely**.\n7. **Ship:** bring `main` up to date, fast-forward it to `coupons`, and push `main`.\n\nDone means: a straight-line history, two well-formed commits on top of Ada's, and `origin/main`, `main` and `coupons` all on the same commit.",
      example: { lang: "sh", code: "git rebase origin/main\n# CONFLICT (content): Merge conflict in checkout.js\n# error: could not apply 1a2b3c4... Show the discount at checkout\n# …fix checkout.js…\ngit add checkout.js\ngit rebase --continue\n# Successfully rebased and updated refs/heads/coupons." },
      steps: [
        { text: "Branch `coupons` and make the three commits (the last one really is called **wip**).",
          test: "T.expect(T.branches().indexOf('coupons') !== -1, 'Create the coupons branch: git switch -c coupons');\nvar r = T.reflog('coupons').map(function (e) { return e.msg; });\nT.expect(r.indexOf('commit: Show the discount at checkout') !== -1 && r.indexOf('commit: wip') !== -1, 'Make the three commits on coupons: Show the discount at checkout, Add the coupons module, wip');" },
        { text: "Share it before catching up: `git push -u origin coupons`.",
          test: "T.expect(T.ran(/^git push -u origin coupons/) || T.ran(/^git push --set-upstream origin coupons/), 'Push the branch for review with git push -u origin coupons, BEFORE rebasing');\nT.eq(T.upstream('coupons'), 'origin/coupons', 'coupons should track origin/coupons');" },
        { text: "Rebase onto Ada's `main` — `coupons` sits on top of *Rename the total label*.",
          test: "T.eq(T.sha('coupons~2'), T.before.onRemote('main'), 'coupons should be rebased onto Ada\\'s commit (origin/main) — git fetch, then git rebase origin/main');\nT.expect(!T.rebasing(), 'The rebase is still in progress — resolve, git add, git rebase --continue');" },
        { text: "The conflict is resolved exactly: `checkout.js` has the agreed label and both other lines.",
          test: "T.eq(T.blobAt('coupons', 'checkout.js'), \"const TOTAL_LABEL = 'Order total after discount';\\nconst CURRENCY = 'USD';\\nconst DISCOUNT_LABEL = 'Discount';\\n\", 'checkout.js should be exactly: the agreed TOTAL_LABEL, CURRENCY, DISCOUNT_LABEL');" },
        { text: "Squashed: exactly two new commits, no `wip`, a straight line, and `coupons.js` complete.",
          test: "T.eq(T.count('coupons'), 4, 'coupons should be: Add the shop, Ada\\'s commit, and your TWO commits');\nT.expect(T.log('coupons').every(function (c) { return c.parents.length < 2; }), 'History must be a straight line — no merge commits');\nT.expect(!T.log('coupons').some(function (c) { return c.subject === 'wip'; }), 'A wip commit survived — squash with git reset --soft HEAD~2 and one commit');\nT.eq(T.blobAt('coupons', 'coupons.js'), 'export const COUPONS = { SAVE10: 0.1 };\\nCOUPONS.SUMMER20 = 0.2;\\n', 'coupons.js should contain both coupons');" },
        { text: "Both new commit messages follow the Unit 2 rules.",
          test: "var L = T.log('coupons');\nfor (var i = 0; i < 2; i++) {\n  var s = L[i].subject;\n  T.expect(s.length <= 50 && /^[A-Z]/.test(s) && !/\\.$/.test(s), 'Subject \"' + s + '\": capitalised, no trailing period, 50 characters max');\n  T.expect(!/^(Added|Adding|Adds|Fixed|Fixes|Updated|Updates|wip)\\b/i.test(s), 'Subject \"' + s + '\" should be imperative');\n}\nT.eq(L[0].subject, 'Add the coupons module', 'The squashed commit should be called: Add the coupons module');" },
        { text: "The plain push was rejected, and you overwrote it with `--force-with-lease` — never plain `--force`.",
          test: "T.expect(T.said('(non-fast-forward)'), 'Try a plain git push after rebasing — it should be rejected as non-fast-forward');\nT.expect(T.ran(/^git push --force-with-lease/), 'Update the review with git push --force-with-lease');\nT.expect(!/git push[^\\n]*\\s(-f|--force)(\\s|$)/.test(T.script()), 'Never plain --force');\nT.eq(T.onRemote('coupons'), T.sha('coupons'), 'origin\\'s coupons should match your rebased, squashed branch');" },
        { text: "Shipped: `main` fast-forwarded to `coupons` and pushed — all three on the same commit.",
          test: "T.eq(T.sha('main'), T.sha('coupons'), 'main should point at the same commit as coupons — git switch main, git pull, git merge coupons');\nT.eq(T.onRemote('main'), T.sha('main'), 'Push main: origin/main should match');\nT.expect(T.log('main').every(function (c) { return c.parents.length < 2; }), 'main should be a straight line — the ship merge must be a fast-forward');" },
        { text: "Clean finish: no rebase in progress, nothing uncommitted.",
          test: "T.expect(T.clean() && !T.rebasing(), 'End with a clean working tree and no operation in progress');" }
      ],
      files: [
        { name: "commands.sh", content: "# Ship coupons, start to finish. Seven phases — see the brief.\n\n# 1) Branch:\n\n# 2) Three commits:\n\n# 3) Share for review:\n\n# 4) Catch up with Ada (expect a conflict):\n\n# 5) Squash the last two:\n\n# 6) Update the review:\n\n# 7) Ship:\n\n" }
      ],
      hints: [
        "Phases 1–3: `git switch -c coupons`; write checkout.js with `echo … >` then two `echo … >>`; `git commit -am \"Show the discount at checkout\"`; `echo \"export const COUPONS = { SAVE10: 0.1 };\" > coupons.js`, `git add coupons.js`, `git commit -m \"Add the coupons module\"`; `echo \"COUPONS.SUMMER20 = 0.2;\" >> coupons.js`, `git commit -am \"wip\"`; `git push -u origin coupons`.",
        "Phases 4–5: `git fetch`, `git rebase origin/main`; rewrite checkout.js with the agreed three lines, `git add checkout.js`, `git rebase --continue`; then `git reset --soft HEAD~2` and `git commit -m \"Add the coupons module\"`.",
        "Phases 6–7: `git push` (rejected), `git push --force-with-lease`; then `git switch main`, `git pull`, `git merge coupons`, `git push`."
      ],
      solution: {
        "commands.sh": "# Ship coupons, start to finish. Seven phases — see the brief.\n\n# 1) Branch:\ngit switch -c coupons\n\n# 2) Three commits:\necho \"const TOTAL_LABEL = 'Total after discount';\" > checkout.js\necho \"const CURRENCY = 'USD';\" >> checkout.js\necho \"const DISCOUNT_LABEL = 'Discount';\" >> checkout.js\ngit commit -am \"Show the discount at checkout\"\necho \"export const COUPONS = { SAVE10: 0.1 };\" > coupons.js\ngit add coupons.js\ngit commit -m \"Add the coupons module\"\necho \"COUPONS.SUMMER20 = 0.2;\" >> coupons.js\ngit commit -am \"wip\"\n\n# 3) Share for review:\ngit push -u origin coupons\n\n# 4) Catch up with Ada (expect a conflict):\ngit fetch\ngit rebase origin/main\necho \"const TOTAL_LABEL = 'Order total after discount';\" > checkout.js\necho \"const CURRENCY = 'USD';\" >> checkout.js\necho \"const DISCOUNT_LABEL = 'Discount';\" >> checkout.js\ngit add checkout.js\ngit rebase --continue\n\n# 5) Squash the last two:\ngit reset --soft HEAD~2\ngit commit -m \"Add the coupons module\"\n\n# 6) Update the review:\ngit push\ngit push --force-with-lease\n\n# 7) Ship:\ngit switch main\ngit pull\ngit merge coupons\ngit push\ngit log --oneline\n"
      }
    }
  ]
});
