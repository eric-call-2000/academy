# Git & Version Control — "Undo for your whole project" (id: `git`, prefix: `git`, icon 🌿, level Intermediate, 8 units)

## Verdict
STANDALONE — but only because it earns a new runtime, and it must ship as ONE course, not the two Codecademy sells.

Why standalone, not folded in: nothing in the existing 304 items touches version control, so there is no host course whose vocabulary or cheatsheets this extends. The only plausible host is Course 8 (Full-Stack Capstone, 28 items), and folding in there fails on both ends — a full 36-item Git course would more than double Capstone and change its identity from "ship a portfolio app" to "learn a tool," while a reduced 10-item version that actually fits would have to cut reflog, reset --soft/--mixed/--hard, and stash. Those are precisely the load-bearing items the owner asked for. A fold-in buys nothing and pays for it with the reason the course exists.

Why ONE course, deviating from precedent: Codecademy splits this into Learn Git: Introduction (~1h) and Learn Git: Branching and Collaboration (~1h). Splitting 36 items into 18+18 puts both halves below CodeLab's own 28-item floor, and the split lands in the wrong place anyway — Codecademy's "Introduction" bundles branching-free basics with a thin "How to Backtrack" module, whereas here undoing is two full units and the spine of the course.

Why it deserves a runtime when the other proposed courses may not: Git is the highest teachable-value-per-engine-line of the owner's eight. Its semantics are pure state transformation over a graph — no filesystem, no processes, no network required for the parts that matter. A simulated shell (Course 0) needs a filesystem AND a process model; Node/npm needs a module resolver AND a registry; Deploying is mostly ungradeable concepts. Git is the one where a ~1,200-line pure-JS engine buys 26 genuinely-graded items.

Path position: after Course 4 (Learn JavaScript), before Course 5. The learner needs to read a line of JS to drive it, and needs code worth versioning. Blurb should say it can be taken any time after Course 1 — it is the least prerequisite-bound course in the catalog.

Scope carved OFF and stated in the blurb so it doesn't over-promise: installing/configuring Git, SSH keys, GitHub the website, pull requests, and code review. Those belong to the proposed Command Line and Deploying courses.

## Size
36 items, ~8h

## Engine needs
The sandbox lacks a Git. Neither runtime can help: the Worker has no filesystem and no processes, and the iframe has no same-origin access, no shell, and no network. So `gitsim.js` has to be written — a new plain `<script>` alongside runner.js, roughly 1,100–1,400 lines of dependency-free ES5-ish JS. This is a real piece of software and the single largest new artifact in the repo after app.js.

HOW IT PLUGS IN (~4 lines of runner.js): the precedent already exists in the file. `harnessMock` is stringified and injected into both sandboxes when `lesson.mock` is present. `gitsim` follows that exact pattern — `window.CODELAB.harnessGit` defined in gitsim.js, injected as `lesson.repo ? "(" + window.CODELAB.harnessGit.toString() + ")(" + JSON.stringify(lesson.repo) + ");" : ""` into both `buildWorkerSrc` and `buildSrcdoc`. It must be self-contained with no outer references, which the existing harness comment already demands. `lesson.repo` is the seed state (files, commits, branches) for that lesson. No build step, no CDN, no WASM — consistent with the offline-first design.

WHAT THE LEARNER TYPES: literal git command strings, passed to a globally-provided `sh()`:
  sh("git add index.html");
  sh("git commit -m 'Add the homepage'");
  console.log(sh("git status"));
`sh()` returns stdout as a string, so the existing "▶ Output" console panel becomes the terminal with zero UI work. This is the key pragmatic choice — a real terminal widget would need a new lesson `kind`, a new UI surface, transcript state, and app.js changes; `sh()` needs none of them.

Why command strings and not a JS API like `git.commit()`: flags ARE the curriculum. `reset --soft` vs `--mixed` vs `--hard` is a distinction that only exists at the flag level, and a JS API would either hide it or fake it. The owner will type `git reset --hard HEAD@{1}` in a real terminal at 2 a.m.; he needs to have typed those exact characters and been graded on them.

WHAT IT MUST MODEL (~est. lines):
- Object store, flat: objects = { sha: {type,...} }; blobs {content}, trees {entries:{path:sha}}, commits {tree,parents[],message,time}. (120)
- Hashing: NOT real SHA-1. A deterministic FNV-1a over a canonical serialization, rendered as 7 hex chars. Real SHA-1 is ~80 lines and doable but pointless — nothing interoperates, and 40-char shas are miserable on a phone. 7 chars is what real `--oneline` prints anyway. (in the 120)
- Refs + HEAD: refs = {"refs/heads/main": sha, "refs/tags/v1": sha, "refs/remotes/origin/main": sha}; HEAD is {ref:"refs/heads/main"} or {detached: sha}. Detached HEAD is required — checkout <sha> and rebase internals both need it. (60)
- Index: index = { path: sha }. Non-negotiable. The staging area is *the* thing beginners don't get, and add / reset / restore --staged / diff --staged all live here. learngitbranching skipped it for years and had to bolt on workingDir/staging and workingDir/restore later; don't repeat that. (80)
- Working tree: wt = { path: content }. Also non-negotiable — reset --hard, restore, stash, and conflict markers all write here. This is what makes the course teach undo rather than graph theory. (70)
- Reflog: [{ref, from, to, op, message}], appended on every ref update, with HEAD@{n} resolution. This is the owner's load-bearing feature and the thing learngitbranching has NO level for. (60)
- Line diff (LCS): unified diff between two blob sets, reused by diff, diff --staged, show, and the merge engine. (160)
- Three-way merge: per-path base/ours/theirs; both-changed writes real <<<<<<< / ======= / >>>>>>> markers into the working tree and records a conflict set that blocks commit until resolved. (180)
- Branch/switch/checkout, reset/restore/revert/stash, commit/log/show, tag/blame. (~430)
- Remote: a SECOND in-memory repo object; clone/fetch/push/pull are object-graph copies plus fast-forward checks and non-fast-forward rejection. No protocol, no auth. (170)
- Rev parsing: HEAD, HEAD~n, HEAD^, <branch>, <sha-prefix>, HEAD@{n}, origin/main. (60)
- Command tokenizer + dispatch + real-looking stdout templating for ~26 commands. Boring surface area, but reading git's output is half the skill. (250)

TEST-SIDE HELPERS added to T: T.repo(), T.log(rev), T.sha(rev), T.commit(rev), T.branches(), T.head(), T.headDetached(), T.wt(path), T.blobAt(tree,path), T.staged(), T.stashList(), T.reflog(), T.remoteSha(ref), T.merging(), T.clean(), T.reachableFromAnyBranch(sha), T.out(), and T.ran(regex).

T.ran() must ship WITH the engine, not after. Because the learner writes JS, most state assertions are otherwise satisfiable by hand-mutating the working tree instead of using git — T.ran() checks the command transcript and closes that hole.

WHAT IT SKIPS, and each is stated in a brief or cheatsheet rather than hidden: real SHA-1, zlib, packfiles, the on-disk .git format; nested trees (paths like "src/app.js" are just keys with a slash — costs nothing pedagogically here); file modes, symlinks, CRLF; submodules, worktrees, LFS, hooks, rerere, notes, signing; merge strategies beyond simple three-way, and rename detection.

DELIBERATELY NOT SIMULATED, with the substitute named: `git rebase -i` needs a todo-list editor UI, and faking one with a `--todo` flag would teach a flag that does not exist. Substitute: squashing is taught via `reset --soft HEAD~3` + `commit`, which is real, honest, needs no invented syntax, and is what Odin's "A Deeper Look at Git" teaches for splitting commits anyway. `rebase -i` appears in the Unit 7 cheatsheet as "what you'll actually type once you have an editor" and is never graded. Similarly, `git bisect` needs a test command to run across checkouts — cheatsheet only, cut honestly.

BUILD ORDER: freeze the command list before writing a line, and write the engine's own Node test suite first. The engine is pure, so it is testable without Chromium — which matters, because tools/validate.js Phase 1 (every solution passes, every starter fails) will otherwise be the only thing exercising 1,300 lines of new code.

## Teachable today
Honest answer: NO unit is fully engine-free. About 10 of 36 items work today unchanged; the other 26 are hard-gated on gitsim.js. Sequencing follows from that.

Works TODAY in the existing Worker, no runner change, no engine:
- Unit 2 L2 (.gitignore). The learner authors pattern text; a ~50-line glob matcher ships in the starter as a provided do-not-edit helper and runs over a fixed path list. Pure string work.
- Unit 2 L3 (commit messages). The learner fills a messages array; tests assert subject length, no trailing period, blank second line, body wrap, imperative first word. Pure string assertions.
- Unit 4 L3's RESOLUTION half. A file containing <<<<<<< / ======= / >>>>>>> markers is just text. Hand it to the learner as a starter file, have them edit it, assert the markers are gone and both sides survived. The *causing* of the conflict needs the engine; the resolving does not.
- All 7 quizzes. The quiz kind already renders `code:` blocks, so reading `git log --oneline` output, spotting the wrong reset flag, and 401-style "which command would you run" scenarios are all gradeable today.

Everything else — every sh() lesson in Units 1, 3, 5, 6, 7 and both projects — is blocked.

What this means for sequencing: write the 10 free items FIRST, while the engine is being built. They de-risk nothing technically, but they let the unit-file scaffolding, all 8 cheatsheets, and the whole quiz bank land and pass validate.js Phase 0 early, so the engine work merges into a course that already has a skeleton. It also front-loads the Recall/SRS bank, which is per-quiz and independent of the runtime.

What it does NOT mean: shipping those 10 items as a standalone mini-course. A Git course that opens with conflict resolution and .gitignore, with no commit or branch lesson, is pedagogically backwards. The course does not ship until the engine does.

## Overlaps
Git is close to orthogonal to the existing 304 items — that orthogonality is a large part of why it survives as a standalone course. But there are five real collision risks, four of them in the same direction: a Git lesson quietly becoming a JavaScript lesson.

1. JS syntax teaching (Course 4, 50 items). The learner writes sh() calls, arrays, and template strings. AVOID with a hard authoring rule: **a Git lesson contains no JS control flow the learner has to author.** Starters are flat sequences of sh() and console.log(). If a lesson needs a loop, the loop is pre-written in the starter. The only thing the learner authors is the inside of the string. Any Git lesson that would be a decent Course 4 exercise is misfiled.

2. String methods (Course 4 Unit 6). Unit 2 L3 could drift into "practice .trim() and .length". AVOID: the learner writes the MESSAGE CONTENT; the validation harness is handed to them. Grade what the message says, never make them build the checker.

3. Array methods and glob-matching algorithms (Course 4 Unit 2). Implementing .gitignore matching is a perfectly good Course 4 algorithms exercise and a terrible Git lesson. AVOID: ship the matcher as a provided helper; the learner writes patterns only.

4. DOM rendering (Course 5, 40 items). There is a tempting "build a diff viewer" lesson. It is a DOM exercise wearing a Git hat and would duplicate dom/u6 (state→render). AVOID: diffs are console output in this course, never DOM. No Git lesson uses kind "web" except the conflict-resolution file edit, and even that grades text, not layout.

5. Course 8 Capstone (28 items) file content. "Put NoteStream under version control" would couple two courses' starter files and re-teach nothing. AVOID: the Git projects use their own fictional repos; the brief REFERENCES NoteStream in prose ("this is the workflow you'd use on the app you built in Course 8") without importing a single file.

One overlap to EMBRACE rather than avoid: Course 7's simulated back end. srv/u1 teaches REST by having the learner write handleRequest(req) as a pure function graded by calling it; this course teaches Git by having the learner drive a pure state machine graded by inspecting it. The Unit 1 cheatsheet should say so explicitly — "same trick as Back-End Foundations: a real system, simulated as something you can hold in one hand" — which turns a structural similarity into a transferable idea instead of an accidental echo.

Content gaps worth noting, since they confirm this isn't duplicating prior art either: learngitbranching (the closest external precedent) has no reflog level, no stash, no conflict resolution, no .gitignore, and no commit-message material, and only bolted on the working directory and staging area late. Codecademy's entire Git offering is two ~1h courses whose "How to Backtrack" module is a single lesson. Units 5 and 6 here — ten items on undoing — are where this course goes past both, which is exactly where the owner said the need is.

## Units

### 1. Unit 1 — Snapshots: the three trees
The mental model everything else hangs off: repository, working tree, index (staging area), HEAD. Commands: init, status, add, commit -m, log. Establishes that a commit is a full snapshot, not a diff.

Lessons:
  - What a repository actually is (git init, git status)
  - Staging: git add and what the index really is
  - git commit -m and reading git log
  - The three trees, proven
  - Unit 1 quiz: Snapshots & the staging area

Graded how:
The learner types literal git command strings into sh() calls in script.js — sh("git init"); sh("git add notes.txt"); sh("git commit -m 'Start the journal'"); console.log(sh("git status")). Tests assert engine state, not prose. After add: T.eq(T.staged(), ['notes.txt']) and T.eq(T.log().length, 0). After commit: T.eq(T.log().length, 1), T.eq(T.log()[0].message, 'Start the journal'), T.eq(T.staged(), []). Status output is graded as text: T.expect(T.out().indexOf('nothing to commit, working tree clean') !== -1). Lesson 4 is the payoff and the cleanest checkpoint in the unit — the learner drives one file to three different versions across the three trees, and the test asserts all three at once: T.eq(T.wt('a.txt'),'v3'); T.eq(T.blobAt('index','a.txt'),'v2'); T.eq(T.blobAt('HEAD','a.txt'),'v1').

### 2. Unit 2 — History you can read
Diffs, what never belongs in a repo, and commit messages that survive contact with your future self. Commands: diff, diff --staged, show, log --oneline. Plus .gitignore patterns and message conventions. This is the unit learngitbranching has no equivalent of at all.

Lessons:
  - git diff vs git diff --staged
  - What never gets committed: .gitignore
  - Commit messages your future self can use
  - Unit 2 quiz: Diffs, ignores & messages

Graded how:
L1: starter has two edited files; the learner stages exactly one, then logs both diffs. Test asserts the unstaged diff output contains '-const rate = 0.05' and '+const rate = 0.07' while the staged diff does NOT mention that file — proving the learner understands which tree each command compares. L2 (NO ENGINE NEEDED): the learner authors .gitignore content as a string; a ~50-line glob matcher ships in the starter as a provided do-not-edit helper and runs over 12 fixed paths. Test asserts the ignored set is EXACTLY ['node_modules/left-pad.js','.env','build/app.js','logs/dev.log'] and that 'src/app.js' and '.env.example' are NOT ignored — the last one forces a negation (!) pattern. L3 (NO ENGINE NEEDED): the learner fills a messages array. Tests assert subject.length <= 50, !/\.$/.test(subject) (no trailing period), msg.split('\n')[1] === '' (blank second line on the multi-line one), body lines <= 72 chars, and that the first word is imperative — checked against an allowlist plus a rejection of /^(Added|Adding|Fixes|Updated)/. Well-formedness is objectively gradeable; 'is this a GOOD message' is not, and is left to the quiz.

### 3. Unit 3 — Branching
A branch is a pointer, not a copy. Commands: branch, switch -c, switch, branch -d/-D/-m, checkout <sha>. Includes detached HEAD as a first-class concept rather than an error state.

Lessons:
  - A branch is just a pointer
  - git switch -c: two things at once
  - Detached HEAD is not broken
  - Deleting and renaming branches (-d vs -D)
  - Unit 3 quiz: Branches & HEAD

Graded how:
L2 asserts the thing beginners get wrong — that the OTHER branch didn't move: T.eq(T.head(),'refs/heads/feature'); T.eq(T.sha('main'), shaBefore); T.eq(T.log('feature').length, 3); T.eq(T.log('main').length, 1). L3: after sh("git switch a3f91c2") the test asserts T.expect(T.headDetached()) and T.eq(T.branches().length, 1) — no branch was silently created. Then the learner commits, and the test asserts the new commit is unreachable from every branch: T.expect(!T.reachableFromAnyBranch(T.sha('HEAD'))). That unreachable-commit assertion IS the lesson, and it sets up Unit 6. L4 grades a FAILURE first: git branch -d on an unmerged branch must be rejected — T.expect(T.out().indexOf('not fully merged') !== -1) and T.expect(T.branches().indexOf('feature') !== -1) — then -D succeeds and the branch is gone.

### 4. Unit 4 — Merging & conflicts
Fast-forward vs true merge, two-parent commits, conflict markers, resolution, and the escape hatch. Commands: merge, merge --no-ff, merge --abort. Also absent from learngitbranching, which never produces a real conflict.

Lessons:
  - Fast-forward: the merge that isn't
  - A real merge commit has two parents
  - Conflict! Reading and resolving the markers
  - git merge --abort: the escape hatch
  - Unit 4 quiz: Merging

Graded how:
L1 asserts NO merge commit was created: T.eq(T.log().length, 4) and T.eq(T.commit('HEAD').parents.length, 1). L2 asserts the opposite shape: T.eq(T.commit('HEAD').parents.length, 2) and that both parent shas equal the two pre-merge branch tips. L3 (resolution half needs NO ENGINE): the engine produces the conflicted file, which then appears as an editable file tab; the learner edits app.js by hand. Tests assert !/<<<<<<<|=======|>>>>>>>/.test(T.wt('app.js')), that BOTH required lines survived (a resolution that just deletes one side fails), that no line is duplicated, and that after git add + git commit the merge finished with 2 parents and T.expect(!T.merging()). L4 asserts byte-level restoration: after --abort, T.eq(T.wt('app.js'), originalContent), T.eq(T.head(),'refs/heads/main'), T.eq(T.staged(), []), T.expect(!T.merging()).

### 5. Unit 5 — Undoing things I: before it's committed
The owner's load-bearing requirement, part 1 — everything recoverable without touching history. Commands: restore, restore --staged, commit --amend, stash push/pop/list/drop.

Lessons:
  - git restore: throw away a working-tree change
  - git restore --staged: unstage without losing work
  - git commit --amend: fix the last commit
  - git stash: park it, switch, come back
  - Unit 5 quiz: Undoing before the commit

Graded how:
L1: the starter's app.js has been edited to something broken; after sh("git restore app.js") the test asserts T.eq(T.wt('app.js'), committedContent) AND T.ran(/^git restore/) — the second half is anti-cheat, because a learner could otherwise pass by hand-writing the old content back. L2 asserts the distinction that makes --staged worth its own lesson: T.eq(T.staged(), []) but T.eq(T.wt('a.txt'), 'edited') — unstaged, work preserved. L3 asserts three things at once: T.eq(T.log().length, 3) (count unchanged — amend replaces, not adds), T.eq(T.log()[0].message,'Add login form') (message fixed), and T.expect(T.sha('HEAD') !== oldSha) (it is a NEW commit — the history-rewriting point that Unit 7 depends on). L4: after stash push, T.expect(T.clean()) and T.eq(T.stashList().length, 1); after switching branches and popping, T.eq(T.wt('app.js'), editedContent) and T.eq(T.stashList().length, 0).

### 6. Unit 6 — Undoing things II: after it's committed
The reason the course exists. Commands: reset --soft/--mixed/--hard, revert, reflog, HEAD@{n}. Recovering commits that appear destroyed. learngitbranching has no reflog level at all; Codecademy's 'How to Backtrack' module is one lesson.

Lessons:
  - reset --soft, --mixed, --hard: one command, three trees
  - git revert: undoing in public
  - git reflog: the undo history for your undo
  - Recovering a commit you deleted
  - Unit 6 quiz: Reset, revert & recovery

Graded how:
L1 is three checkpoints run from the same start state, and the triple is the cleanest possible proof of the three-tree model. After reset --soft HEAD~1: T.eq(T.log().length,2) AND T.eq(T.staged(),['app.js']) AND wt unchanged. After --mixed: T.eq(T.staged(),[]) AND wt still unchanged. After --hard: T.eq(T.staged(),[]) AND T.eq(T.wt('app.js'), oldContent). L2 asserts revert ADDS rather than removes: T.eq(T.log().length, 4), T.eq(T.log()[0].message,'Revert "Add tracking pixel"'), and file content equals the pre-feature content. L3: the learner destroys two commits with reset --hard HEAD~2, then logs the reflog; test asserts T.out() contains 'HEAD@{1}' and 'reset: moving to HEAD~2', and T.expect(T.reflog().length >= 4). L4 is the single most valuable checkpoint in the course — the learner recovers with git reset --hard HEAD@{1} (or git branch rescue <sha>), and the test asserts T.eq(T.log().length, 5) (all commits back), T.eq(T.sha('main'), originalSha), and T.ran(/HEAD@\{\d+\}|git reflog/). Note the grading trick that falls out for free: reflog entries prove which command was actually issued, so reflog is both the curriculum and the anti-cheat mechanism.

### 7. Unit 7 — Rewriting & remotes
Rebase, squashing, and a simulated origin. Commands: rebase, rebase --abort, cherry-pick, reset --soft squashing, remote add, push, push -u, fetch, pull, push --force-with-lease. Teaches the fetch-vs-pull distinction and the non-fast-forward rejection.

Lessons:
  - Rebase: replay, don't merge
  - Squashing with reset --soft
  - A remote called origin: push, fetch, pull
  - Rejected! Non-fast-forward and --force-with-lease
  - Unit 7 quiz: Rebase & remotes

Graded how:
L1 asserts the graph is LINEAR and that commits were COPIED, not moved: T.expect(T.log().every(c => c.parents.length === 1)), T.eq(T.log().length, 5), and T.expect(T.sha('feature~1') !== originalSha) — the last assertion is the whole rebase mental model in one line. L2: after reset --soft HEAD~3 + commit -m 'Add search', T.eq(T.log().length, 2) AND T.eq(T.wt('search.js'), contentAfterAllThree) — squashed, no work lost. This is the honest substitute for rebase -i (see risks). L3 grades fetch vs pull exactly: after a scripted teammate commit lands on the simulated origin, git fetch must move origin/main but NOT main — T.expect(T.remoteSha('origin/main') !== before) AND T.eq(T.sha('main'), before). L4 grades a REJECTION as a first-class outcome: after rebasing already-pushed commits, plain git push must fail — T.expect(T.out().indexOf('rejected') !== -1 && T.out().indexOf('non-fast-forward') !== -1) and T.eq(T.remoteSha('origin/main'), before) — then push --force-with-lease succeeds and origin/main matches main.

### 8. Unit 8 — Two projects
Synthesis. No new commands; both projects compose Units 1-7 under realistic pressure.

Lessons:
  - Project: The 2 a.m. recovery
  - Project: Ship a feature end to end

Graded how:
P1 (~8 checkpoints) hands the learner a repo in a genuinely broken state: a reset --hard ate two commits, a stash is sitting unpopped, a conflicted merge is in progress, and a branch points at the wrong commit. The learner must reach a specified good state. Tests assert the exact final graph — the branch set, each branch's sha, log length and message list, working-tree contents for three named files, T.eq(T.stashList().length, 0), and T.expect(!T.merging()). P2 (~9 checkpoints) runs the full loop on a fictional app: branch, three commits with well-formed messages, rebase onto an updated main, resolve one conflict by hand, squash to two commits, push, get rejected, recover with --force-with-lease. Tests assert linear history, commit count, subject-line shape (the Unit 2 rules, re-applied), T.eq(T.remoteSha('origin/main'), T.sha('main')), and T.ran(/--force-with-lease/).

## Projects
- Project: The 2 a.m. recovery — a repo handed over in a genuinely broken state (a reset --hard ate two commits, an unpopped stash, a conflicted merge in progress, a branch pointing at the wrong commit). Reach a specified good state. ~8 checkpoints asserting the exact final graph, branch shas, working-tree contents, empty stash list, and no merge in progress.
- Project: Ship a feature end to end — branch, three well-formed commits, rebase onto an updated main, resolve one conflict by hand, squash to two commits, push, get rejected as non-fast-forward, recover with --force-with-lease. ~9 checkpoints asserting linear history, commit count, subject-line shape, origin/main === main, and T.ran(/--force-with-lease/).

## Risks
- Engine scope creep is the project risk. gitsim.js at ~1,200 lines is the largest new artifact after app.js, and 26 of 36 items are hard-blocked on it. If it slips, the course is a quiz bank. Mitigation: freeze the ~26-command list before writing a line, and write the engine's pure-JS Node test suite first so it isn't validated only through Chromium.
- Fake shas could break trust. The engine uses a deterministic 7-hex-char hash, not SHA-1. A learner who internalises those and then meets 40-char shas may feel misled. Mitigation: one sentence in Unit 1's brief and cheatsheet, and note that 7 chars is exactly what real `git log --oneline` prints — so it looks right rather than merely convenient.
- sh("git ...") is not a terminal. The command STRING transfers to muscle memory, but the type-enter-read-retype loop does not, and neither does tab completion or the feel of a prompt. This is a genuine residual gap, not one I can mitigate away. Partial fix: every starter includes a console.log(sh("git status")) so output-reading becomes habitual. Real fix: if the proposed Course 0 simulated shell ever gets built, this course should be re-hosted on it — and gitsim.js is designed to be drivable from either.
- Anti-cheat must ship with v1, not after. Because the learner writes JS, most state assertions are satisfiable by hand-mutating the working tree instead of running git. T.ran(regex) plus reflog-shape assertions close this, but only if they exist on day one — retrofitting means auditing every checkpoint written before them.
- The two places the simulation deviates from real git could do harm if they leak. `write <path> <text>` stands in for an editor (mitigated: no `git` prefix, so it visibly isn't a git command), and `rebase -i` has no interactive todo (mitigated: cut from graded content entirely, taught via reset --soft, and mentioned in the cheatsheet only as what you'll type once you have an editor). Inventing a `--todo` flag would be worse than omitting the topic.
- Mobile rendering. CodeLab is mobile-first, and `git log --graph` ASCII art plus unified diffs are wide. Mitigation: design all stdout for ~40 columns, keep lesson files under ~40 lines, and prefer --oneline output over --graph in graded steps.
- The 7s worker timeout. Rebases and merges are microseconds, but the LCS diff is the one superlinear thing in the engine. Capping lesson file sizes at ~40 lines keeps this comfortably clear; worth a note in the authoring rules so a future unit doesn't hand it a 500-line file.
- Ungradeable topics must be named, not faked. Installing Git, SSH keys and credential helpers (no OS, no network) get brief text and a 'do this on your real machine' hand-off card with ZERO graded steps. Interactive TTY flows (vim on commit, add -p hunk prompts) are cheatsheet-only. GitHub, pull requests and code review are out of scope and belong to the proposed Deploying course. Judgment calls (rebase vs merge, is this commit well-scoped) go to quizzes — though note that the RESULT of a judgment call is often objectively gradeable even when the judgment isn't: 'history is linear, 3 commits, no merge commit' is checkable.
