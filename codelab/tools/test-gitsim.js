/* Engine tests for gitsim.js — pure Node, no browser, ~1s.
   Usage:  node tools/test-gitsim.js

   The Git course's lessons are graded by inspecting gitsim's state, so a
   bug here would make lessons pass or fail for reasons unrelated to what
   the learner typed. Each scenario below is a real command sequence (the
   same way a lesson's `setup` is written) followed by assertions about the
   repository — and, where it matters, about the exact text git prints. */
const path = require("path");
const SH = require(path.join(__dirname, "..", "shell.js"));
const G = require(path.join(__dirname, "..", "gitsim.js"));
G.strict = true;   // an engine exception must fail the test, not print

let passed = 0;
const failures = [];
const HOME = "/home/you/project";

/* Run setup (hidden, must succeed), snapshot, run the script. Returns a T
   shaped like the runner's: repo helpers + out/err/said/ran + before. */
function sandbox(setup, script, cwd = HOME) {
  const fs = SH.createFS({});
  if (setup) {
    const pre = SH.run(fs, setup, { cwd });
    const broke = pre.transcript.find(t => t.code !== 0);
    if (broke) throw new Error("setup failed at `" + broke.cmd + "`: " + broke.err);
  }
  const before = G.snapshot(fs);
  const res = SH.run(fs, script || "", { cwd });
  const out = res.transcript.map(t => t.out).join(""), err = res.transcript.map(t => t.err).join("");
  const T = {
    out: () => out, err: () => err, transcript: res.transcript,
    code: (i) => res.transcript[i == null ? res.transcript.length - 1 : i].code,
    ran: (re) => res.transcript.some(t => re.test(t.cmd))
  };
  G.extendT(T, fs, before, cwd);
  return T;
}
function test(name, fn) {
  try { fn(); passed++; }
  catch (e) { failures.push(name + " — " + (e && e.message)); }
}
function eq(a, b, msg) {
  if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error((msg || "not equal") + ": got " + JSON.stringify(a) + ", want " + JSON.stringify(b));
}
function ok(c, msg) { if (!c) throw new Error(msg || "expected true"); }

const BASE = [
  "git init",
  'echo "one" > a.txt',
  "git add a.txt",
  'git commit -m "First"'
].join("\n");

/* ---------------- Unit 1: snapshots ---------------- */
test("init + add stages, commit records, status reads clean", () => {
  const T = sandbox("", ["git init", 'echo "hi" > notes.txt', "git add notes.txt", "git status", 'git commit -m "Start the journal"', "git status"].join("\n"));
  eq(T.count(), 1); eq(T.log()[0].message, "Start the journal"); eq(T.staged(), []);
  ok(T.said("Initialized empty Git repository in /home/you/project/.git/"));
  ok(T.out().indexOf("new file:   notes.txt") !== -1, "status lists the staged new file");
  ok(T.out().indexOf("[main (root-commit) ") !== -1, "first commit says root-commit");
  ok(T.out().indexOf("nothing to commit, working tree clean") !== -1);
});
test("the three trees hold three versions at once", () => {
  const T = sandbox("git init", ['echo "v1" > a.txt', "git add a.txt", 'git commit -m "v1"', 'echo "v2" > a.txt', "git add a.txt", 'echo "v3" > a.txt'].join("\n"));
  eq(T.wt("a.txt"), "v3\n"); eq(T.blobAt("index", "a.txt"), "v2\n"); eq(T.blobAt("HEAD", "a.txt"), "v1\n");
  eq(T.staged(), ["a.txt"]); eq(T.unstaged(), ["a.txt"]);
});
test("commit with nothing staged refuses with exit 1", () => {
  const T = sandbox(BASE, 'git commit -m "nothing"');
  eq(T.code(), 1); eq(T.count(), 1);
});
test("commit without -m explains there is no editor", () => {
  const T = sandbox(BASE, 'echo "x" >> a.txt\ngit commit -a');
  ok(T.err().indexOf("no text editor") !== -1); eq(T.count(), 1);
});
test("same commands produce the same shas every time", () => {
  eq(sandbox(BASE, "").sha(), sandbox(BASE, "").sha());
  ok(/^[0-9a-f]{40}$/.test(sandbox(BASE, "").sha()), "40 hex chars");
});
test("outside a repo git says so", () => {
  const T = sandbox("", "git status");
  eq(T.code(), 128); ok(T.err().indexOf("not a git repository") !== -1);
});

/* ---------------- Unit 2: diffs, ignores, messages ---------------- */
test("diff compares wt↔index, diff --staged compares index↔HEAD", () => {
  const setup = [BASE, 'echo "const rate = 0.05;" > rate.js', 'echo "b" > b.txt', "git add .", 'git commit -m "Two files"'].join("\n");
  const T = sandbox(setup, ['echo "const rate = 0.07;" > rate.js', 'echo "b2" > b.txt', "git add b.txt", "git diff", "git diff --staged"].join("\n"));
  const plain = T.transcript[3].out, staged = T.transcript[4].out;
  ok(plain.indexOf("-const rate = 0.05;") !== -1 && plain.indexOf("+const rate = 0.07;") !== -1, "unstaged diff shows the rate change");
  ok(plain.indexOf("b.txt") === -1, "unstaged diff does not mention the staged file");
  ok(staged.indexOf("+b2") !== -1 && staged.indexOf("rate.js") === -1, "staged diff shows only b.txt");
  ok(plain.indexOf("@@ -1 +1 @@") !== -1, "single-line hunk header omits the ,1");
});
test(".gitignore: add . skips ignored, negation re-includes, naming one is refused", () => {
  const T = sandbox("git init", [
    'echo "node_modules/" > .gitignore', 'echo ".env" >> .gitignore', 'echo "*.log" >> .gitignore', 'echo "!keep.log" >> .gitignore',
    "mkdir node_modules", 'echo "x" > node_modules/pad.js', 'echo "K=1" > .env', 'echo "x" > .env.example',
    'echo "l" > dev.log', 'echo "k" > keep.log', 'echo "a" > app.js', "git add .", "git add .env", "git check-ignore -v dev.log"
  ].join("\n"));
  eq(T.staged(), [".env.example", ".gitignore", "app.js", "keep.log"]);
  ok(T.ignored(".env") && T.ignored("node_modules/pad.js") && !T.ignored("keep.log"));
  ok(T.err().indexOf("The following paths are ignored") !== -1);
  ok(T.out().indexOf(".gitignore:3:*.log\tdev.log") !== -1, "check-ignore -v names the rule");
});
test("an already-tracked file is NOT protected by .gitignore until git rm --cached", () => {
  const T = sandbox([BASE, 'echo "K=1" > .env', "git add .env", 'git commit -m "oops"'].join("\n"),
    ['echo ".env" > .gitignore', 'echo "K=2" > .env', "git status --short", "git rm --cached .env", "git status --short"].join("\n"));
  ok(T.transcript[2].out.indexOf(" M .env") !== -1, "still tracked → shows modified");
  eq(T.transcript[3].out, "rm '.env'\n");
  ok(!T.tracked(".env") && T.wt(".env") === "K=2\n", "untracked but kept on disk");
});
test("two -m flags make subject + body separated by a blank line", () => {
  const T = sandbox(BASE, 'echo "x" >> a.txt\ngit commit -am "Fix the rate" -m "Rounding was off."');
  eq(T.log()[0].message, "Fix the rate\n\nRounding was off.");
});

/* ---------------- Unit 3: branching ---------------- */
test("switch -c moves only the new branch", () => {
  const T = sandbox(BASE, ['git switch -c feature', 'echo "2" >> a.txt', 'git commit -am "Two"', 'echo "3" >> a.txt', 'git commit -am "Three"'].join("\n"));
  eq(T.head(), "refs/heads/feature"); eq(T.sha("main"), T.before.sha("main"));
  eq(T.count("feature"), 3); eq(T.count("main"), 1);
  ok(T.out().indexOf("Switched to a new branch 'feature'") !== -1);
});
test("switch refuses a sha without --detach; detached commits are unreachable", () => {
  const setup = [BASE, 'echo "2" >> a.txt', 'git commit -am "Two"'].join("\n");
  const T = sandbox(setup, ["git switch HEAD~1", "git switch --detach HEAD~1", 'echo "exp" > exp.txt', "git add exp.txt", 'git commit -m "Experiment"'].join("\n"));
  ok(T.err().indexOf("a branch is expected, got commit 'HEAD~1'") !== -1);
  ok(T.headDetached()); eq(T.branches(), ["main"]);
  ok(!T.reachableFromAnyBranch(T.sha("HEAD")), "the experiment belongs to no branch");
  ok(T.out().indexOf("[detached HEAD ") !== -1);
});
test("leaving detached HEAD warns about the commit left behind", () => {
  const T = sandbox(BASE, ["git switch --detach HEAD", 'echo "e" > e.txt', "git add e.txt", 'git commit -m "Lost"', "git switch main"].join("\n"));
  ok(T.err().indexOf("Warning: you are leaving 1 commit behind") !== -1);
  ok(T.err().indexOf("git branch <new-branch-name> ") !== -1);
});
test("checkout <sha> prints the detached-HEAD advice", () => {
  const T = sandbox([BASE, 'echo "2" >> a.txt', 'git commit -am "Two"'].join("\n"), "git checkout HEAD~1");
  ok(T.out().indexOf("You are in 'detached HEAD' state.") !== -1); ok(T.headDetached());
});
test("branch -d refuses unmerged work, -D forces", () => {
  const setup = [BASE, "git switch -c feature", 'echo "f" > f.txt', "git add f.txt", 'git commit -m "F"', "git switch main"].join("\n");
  const T = sandbox(setup, ["git branch -d feature", "git branch", "git branch -D feature"].join("\n"));
  ok(T.err().indexOf("the branch 'feature' is not fully merged") !== -1);
  ok(T.transcript[1].out.indexOf("feature") !== -1, "still listed after -d failed");
  eq(T.branches(), ["main"]);
  ok(/Deleted branch feature \(was [0-9a-f]{7}\)\./.test(T.out()));
});
test("switch refuses to clobber a local change and carries a safe one", () => {
  const setup = [BASE, "git switch -c other", 'echo "other" > a.txt', 'git commit -am "Other"', "git switch main", 'echo "b" > b.txt', "git add b.txt", 'git commit -m "B"'].join("\n");
  const T = sandbox(setup, ['echo "local" > a.txt', "git switch other", "git restore a.txt", 'echo "local b" > b.txt', "git switch other"].join("\n"));
  ok(T.err().indexOf("would be overwritten by checkout") !== -1, "a.txt differs between branches → refused");
  ok(T.transcript[4].code !== 0 || T.branch() === "other");
});

/* ---------------- Unit 4: merging ---------------- */
const FORK = [BASE, "git switch -c feature", 'echo "f" > f.txt', "git add f.txt", 'git commit -m "Add f"', "git switch main"].join("\n");
test("fast-forward makes no merge commit", () => {
  const T = sandbox(FORK, "git merge feature");
  eq(T.count(), 2); eq(T.commit("HEAD").parents.length, 1);
  ok(T.out().indexOf("Fast-forward") !== -1 && T.out().indexOf(" f.txt | 1 +") !== -1);
});
test("a true merge has two parents: both old tips", () => {
  const T = sandbox([FORK, 'echo "m" > m.txt', "git add m.txt", 'git commit -m "Add m"'].join("\n"), "git merge feature");
  const c = T.commit("HEAD");
  eq(c.parents, [T.before.sha("main"), T.before.sha("feature")]);
  eq(c.message, "Merge branch 'feature'");
  ok(T.out().indexOf("Merge made by the 'ort' strategy.") !== -1);
});
const CONFLICT = [
  "git init", 'echo "const title = \'Home\';" > app.js', 'echo "const theme = \'light\';" >> app.js', "git add app.js", 'git commit -m "App"',
  "git switch -c dark", 'echo "const title = \'Home\';" > app.js', 'echo "const theme = \'dark\';" >> app.js', 'git commit -am "Dark theme"',
  "git switch main", 'echo "const title = \'Home\';" > app.js', 'echo "const theme = \'blue\';" >> app.js', 'git commit -am "Blue theme"'
].join("\n");
test("a conflict writes real markers and blocks the commit", () => {
  const T = sandbox(CONFLICT, ["git merge dark", 'git commit -m "try"'].join("\n"));
  eq(T.code(0), 1); ok(T.merging()); eq(T.conflicts(), ["app.js"]);
  eq(T.wt("app.js"), "const title = 'Home';\n<<<<<<< HEAD\nconst theme = 'blue';\n=======\nconst theme = 'dark';\n>>>>>>> dark\n");
  ok(T.out().indexOf("CONFLICT (content): Merge conflict in app.js") !== -1);
  ok(T.err().indexOf("Committing is not possible because you have unmerged files.") !== -1);
});
test("resolving by hand, add, commit finishes a two-parent merge", () => {
  const T = sandbox(CONFLICT, ["git merge dark", 'echo "const title = \'Home\';" > app.js', 'echo "const theme = \'dark\';" >> app.js', "git add app.js", "git commit --no-edit"].join("\n"));
  ok(!T.merging()); eq(T.commit().parents.length, 2); eq(T.log()[0].message, "Merge branch 'dark'");
  ok(!/<<<<<<<|=======|>>>>>>>/.test(T.wt("app.js")));
});
test("merge --abort restores the pre-merge state byte for byte", () => {
  const T = sandbox(CONFLICT, ["git merge dark", "git merge --abort"].join("\n"));
  eq(T.wt("app.js"), T.before.wt("app.js")); eq(T.head(), "refs/heads/main"); eq(T.staged(), []); ok(!T.merging());
});
test("a true merge keeps files that only one side has (on disk AND in the commit)", () => {
  const setup = [BASE, "git switch -c reviews", 'echo "r" > reviews.html', "git add reviews.html", 'git commit -m "Reviews"',
    "git switch main", 'echo "f" > footer.css', "git add footer.css", 'git commit -m "Footer"'].join("\n");
  const T = sandbox(setup, "git merge reviews --no-edit");
  eq(T.wt("footer.css"), "f\n", "ours-only file survives on disk"); eq(T.wt("reviews.html"), "r\n", "theirs-only file arrives");
  eq(Object.keys(T.commit().files).sort(), ["a.txt", "footer.css", "reviews.html"]);
  ok(T.clean(), "nothing left staged or modified");
});
test("reset --hard removes a tracked file the target commit doesn't have", () => {
  const T = sandbox([BASE, 'echo "n" > new.txt', "git add new.txt", 'git commit -m "New"'].join("\n"), "git reset --hard HEAD~1");
  eq(T.wt("new.txt"), null); ok(T.clean());
});
test("non-overlapping edits to one file merge cleanly", () => {
  const base = ["git init", 'echo "a" > f', 'echo "b" >> f', 'echo "c" >> f', 'echo "d" >> f', 'echo "e" >> f', "git add f", 'git commit -m "base"'].join("\n");
  const setup = [base, "git switch -c x", 'echo "A" > f', 'echo "b" >> f', 'echo "c" >> f', 'echo "d" >> f', 'echo "e" >> f', 'git commit -am "top"',
    "git switch main", 'echo "a" > f', 'echo "b" >> f', 'echo "c" >> f', 'echo "d" >> f', 'echo "E" >> f', 'git commit -am "bottom"'].join("\n");
  const T = sandbox(setup, "git merge x");
  eq(T.wt("f"), "A\nb\nc\nd\nE\n"); ok(!T.merging()); eq(T.commit().parents.length, 2);
});

/* ---------------- Unit 5: undo before commit ---------------- */
test("restore puts back the index version; restore --staged keeps the work", () => {
  const T = sandbox(BASE, ['echo "broken" > a.txt', "git restore a.txt", 'echo "edited" > a.txt', "git add a.txt", "git restore --staged a.txt"].join("\n"));
  eq(T.staged(), []); eq(T.wt("a.txt"), "edited\n");
});
test("amend replaces the last commit: same count, new sha, fixed message", () => {
  const setup = [BASE, 'echo "2" >> a.txt', 'git commit -am "Add login from"'].join("\n");
  const T = sandbox(setup, 'git commit --amend -m "Add login form"');
  eq(T.count(), 2); eq(T.log()[0].message, "Add login form"); ok(T.sha() !== T.before.sha());
  ok(T.out().indexOf(" Date: ") !== -1);
});
test("stash parks work across a switch and pop brings it back", () => {
  const setup = [FORK].join("\n");
  const T = sandbox(setup, ['echo "wip" >> a.txt', "git stash", "git switch feature", "git switch main", "git stash pop"].join("\n"));
  eq(T.wt("a.txt"), "one\nwip\n"); eq(T.stashList().length, 0);
  ok(T.out().indexOf("Saved working directory and index state WIP on main:") !== -1);
  ok(/Dropped refs\/stash@\{0\} \([0-9a-f]{40}\)/.test(T.out()));
});
test("stash makes the tree clean and lists the entry", () => {
  const T = sandbox(BASE, ['echo "wip" >> a.txt', 'git stash push -m "half a login"', "git stash list"].join("\n"));
  ok(T.clean()); eq(T.stashList().length, 1); ok(T.out().indexOf("stash@{0}: On main: half a login") !== -1);
});

/* ---------------- Unit 6: undo after commit ---------------- */
const THREE = [BASE, 'echo "two" >> a.txt', 'git commit -am "Two"', 'echo "three" >> a.txt', 'git commit -am "Three"'].join("\n");
test("reset --soft / --mixed / --hard move one, two, three trees", () => {
  const s = sandbox(THREE, "git reset --soft HEAD~1");
  eq(s.count(), 2); eq(s.staged(), ["a.txt"]); eq(s.wt("a.txt"), "one\ntwo\nthree\n");
  const m = sandbox(THREE, "git reset HEAD~1");
  eq(m.staged(), []); eq(m.unstaged(), ["a.txt"]); eq(m.wt("a.txt"), "one\ntwo\nthree\n");
  ok(m.out().indexOf("Unstaged changes after reset:\nM\ta.txt") !== -1);
  const hd = sandbox(THREE, "git reset --hard HEAD~1");
  eq(hd.staged(), []); eq(hd.wt("a.txt"), "one\ntwo\n");
  ok(/HEAD is now at [0-9a-f]{7} Two/.test(hd.out()));
});
test("revert adds a commit that undoes one", () => {
  const T = sandbox([BASE, 'echo "<img src=pixel>" > track.html', "git add track.html", 'git commit -m "Add tracking pixel"', 'echo "x" >> a.txt', 'git commit -am "Later"'].join("\n"),
    "git revert HEAD~1 --no-edit");
  eq(T.count(), 4); eq(T.log()[0].subject, 'Revert "Add tracking pixel"');
  eq(T.wt("track.html"), null); eq(T.wt("a.txt"), "one\nx\n");
  ok(T.log()[0].message.indexOf("This reverts commit " + T.before.sha("HEAD~1") + ".") !== -1);
});
test("reflog records the reset, and HEAD@{1} brings the commits back", () => {
  const T = sandbox(THREE, ["git reset --hard HEAD~2", "git reflog", "git reset --hard HEAD@{1}"].join("\n"));
  ok(T.transcript[1].out.indexOf("HEAD@{0}: reset: moving to HEAD~2") !== -1);
  ok(T.transcript[1].out.indexOf("HEAD@{1}: commit: Three") !== -1);
  eq(T.count(), 3); eq(T.sha("main"), T.before.sha("main"));
  ok(T.reflog().length >= 5);
});
test("a deleted branch is recoverable from the reflog sha", () => {
  const setup = [BASE, "git switch -c spike", 'echo "s" > s.txt', "git add s.txt", 'git commit -m "Spike"', "git switch main", "git branch -D spike"].join("\n");
  const T = sandbox(setup, "");
  const lost = T.reflog().find(e => e.msg === "commit: Spike").sha;
  const R = sandbox(setup, "git branch rescue " + lost.slice(0, 7));
  eq(R.sha("rescue"), lost);
});

/* ---------------- Unit 7: rewriting & remotes ---------------- */
const DIVERGE = [BASE, "git switch -c feature", 'echo "f1" > f.txt', "git add f.txt", 'git commit -m "F1"', 'echo "f2" >> f.txt', 'git commit -am "F2"',
  "git switch main", 'echo "m" > m.txt', "git add m.txt", 'git commit -m "M"', "git switch feature"].join("\n");
test("rebase makes history linear and COPIES the commits", () => {
  const T = sandbox(DIVERGE, "git rebase main");
  ok(T.log().every(c => c.parents.length < 2)); eq(T.count(), 4);
  ok(T.sha("feature~1") !== T.before.sha("feature~1"), "F1 was copied, not moved");
  eq(T.head(), "refs/heads/feature"); ok(T.out().indexOf("Successfully rebased and updated refs/heads/feature.") !== -1);
  ok(T.reflog().some(e => e.msg === "rebase (start): checkout main"));
});
test("rebase conflict stops, --continue finishes", () => {
  const setup = [CONFLICT, "git switch dark"].join("\n");
  const T = sandbox(setup, ["git rebase main", 'echo "const title = \'Home\';" > app.js', 'echo "const theme = \'dark\';" >> app.js', "git add app.js", "git rebase --continue"].join("\n"));
  ok(T.err().indexOf("Could not apply ") !== -1);
  ok(!T.rebasing()); eq(T.head(), "refs/heads/dark"); ok(T.log().every(c => c.parents.length < 2));
  eq(T.count(), 3);
});
test("rebase --abort returns to where it started", () => {
  const T = sandbox([CONFLICT, "git switch dark"].join("\n"), "git rebase main\ngit rebase --abort");
  ok(!T.rebasing()); eq(T.sha(), T.before.sha()); eq(T.head(), "refs/heads/dark"); eq(T.wt("app.js"), T.before.wt("app.js"));
});
test("squash with reset --soft keeps all the work in one commit", () => {
  const setup = [BASE, 'echo "s1" > search.js', "git add search.js", 'git commit -m "s1"', 'echo "s2" >> search.js', 'git commit -am "s2"', 'echo "s3" >> search.js', 'git commit -am "s3"'].join("\n");
  const T = sandbox(setup, 'git reset --soft HEAD~3\ngit commit -m "Add search"');
  eq(T.count(), 2); eq(T.wt("search.js"), "s1\ns2\ns3\n"); eq(T.blobAt("HEAD", "search.js"), "s1\ns2\ns3\n");
});
test("cherry-pick copies one commit onto HEAD", () => {
  const T = sandbox(DIVERGE, "git switch main\ngit cherry-pick feature~1");
  eq(T.count(), 3); eq(T.wt("f.txt"), "f1\n"); eq(T.log()[0].subject, "F1");
});
const REMOTE = [
  "git init --bare /srv/app.git",
  "git init", 'echo "v1" > app.js', "git add app.js", 'git commit -m "First"',
  "git remote add origin /srv/app.git", "git push -u origin main",
  "git clone /srv/app.git /home/ada/app", "cd /home/ada/app", 'git config user.name "Ada"', 'git config user.email "ada@example.com"',
  'echo "teammate" >> app.js', 'git commit -am "Teammate change"', "git push"
].join("\n");
test("push -u publishes and sets the upstream", () => {
  const T = sandbox("git init --bare /srv/app.git\n" + BASE, "git remote add origin /srv/app.git\ngit push -u origin main\ngit status");
  eq(T.onRemote("main"), T.sha("main")); eq(T.upstream(), "origin/main");
  ok(T.out().indexOf(" * [new branch]      main -> main") !== -1);
  ok(T.out().indexOf("branch 'main' set up to track 'origin/main'.") !== -1);
  ok(T.out().indexOf("Your branch is up to date with 'origin/main'.") !== -1);
});
test("fetch moves origin/main but NOT main; pull fast-forwards", () => {
  const T = sandbox(REMOTE, "git fetch");
  ok(T.remoteSha("origin/main") !== T.before.remoteSha("origin/main")); eq(T.sha("main"), T.before.sha("main"));
  const P = sandbox(REMOTE, "git pull");
  eq(P.sha("main"), P.remoteSha("origin/main")); eq(P.wt("app.js"), "v1\nteammate\n");
  eq(P.log()[0].author, "Ada <ada@example.com>");
});
test("push is rejected when origin moved; pull refuses divergence without a flag", () => {
  const T = sandbox(REMOTE, ['echo "mine" > mine.txt', "git add mine.txt", 'git commit -m "Mine"', "git push", "git pull"].join("\n"));
  ok(T.err().indexOf(" ! [rejected]        main -> main (fetch first)") !== -1);
  eq(T.onRemote("main"), T.before.onRemote("main"));
  ok(T.err().indexOf("fatal: Need to specify how to reconcile divergent branches.") !== -1);
});
test("pull --rebase then push succeeds with linear history", () => {
  const T = sandbox(REMOTE, ['echo "mine" > mine.txt', "git add mine.txt", 'git commit -m "Mine"', "git pull --rebase", "git push"].join("\n"));
  eq(T.onRemote("main"), T.sha("main")); ok(T.log().every(c => c.parents.length < 2)); eq(T.count(), 3);
});
test("rewriting pushed history: plain push rejected as non-fast-forward, --force-with-lease wins", () => {
  const setup = [REMOTE.replace(/\ncd \/home\/ada\/app[\s\S]*$/, ""), 'echo "a" > x.txt', "git add x.txt", 'git commit -m "X"', "git push"].join("\n");
  const T = sandbox(setup, ['git commit --amend -m "X, better"', "git push", "git push --force-with-lease"].join("\n"));
  ok(T.err().indexOf("(non-fast-forward)") !== -1, "plain push rejected");
  eq(T.onRemote("main"), T.sha("main")); ok(T.out().indexOf("(forced update)") !== -1);
});
test("--force-with-lease refuses when a teammate pushed since my last fetch", () => {
  const T = sandbox(REMOTE, ['git commit --amend -m "Rewritten"', "git push --force-with-lease"].join("\n"));
  ok(T.err().indexOf("(stale info)") !== -1); eq(T.onRemote("main"), T.before.onRemote("main"));
});

/* ---------------- plumbing ---------------- */
test("cp -r of a repo carries the repository with it", () => {
  const fs = SH.createFS({});
  SH.run(fs, BASE + "\ncd ..\ncp -r project copy", { cwd: HOME });
  const T = G.testApi(fs, "/home/you/copy");
  ok(T.isRepo()); eq(T.count(), 1);
});
test("unknown flags and commands error like git", () => {
  const T = sandbox(BASE, "git comit -m x\ngit log --bogus");
  ok(T.err().indexOf("git: 'comit' is not a git command.") !== -1);
  ok(T.err().indexOf("unknown option `bogus'") !== -1);
});
test("diff3: identical changes on both sides are not a conflict", () => {
  const r = G.mergeText("a\nb\n", "a\nB\n", "a\nB\n", "HEAD", "x");
  ok(!r.conflict); eq(r.text, "a\nB\n");
});

console.log(`gitsim: ${passed} passed, ${failures.length} failed`);
failures.forEach(f => console.log("  ✗ " + f));
process.exit(failures.length ? 1 : 0);
