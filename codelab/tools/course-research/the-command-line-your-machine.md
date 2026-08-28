# The Command Line & Your Machine (id: `cli`, prefix: `cli-`, icon 🖥️/⌨️, level Beginner, positioned as Course 0 — before Learn HTML)

## Verdict
STANDALONE, and built FIRST — but the decision is really about the engine, not the course. Three arguments.

(1) It has no possible host. Folding it into Learn HTML puts "what is a filesystem" inside a markup course; folding it into Back-End Foundations puts a prerequisite four courses after the point it was needed. A prerequisite buried as unit 3 of something else is not a prerequisite, it is trivia. The owner's own framing — "Course 0 problem" — is correct and the catalog already supports sequencing by position.

(2) Sizing is not the problem. Real Codecademy's Learn the Command Line is 4h / 4 lessons / 4 projects / 4 quizzes; Odin's is a single lesson. At 34 items / 7h this course is already generous, and it is generous specifically in the "…& Your Machine" half — PATH, permissions, processes, ports, `node script.js`, editors — which is the half no existing CodeLab course touches and the half Course 7 silently assumes.

(3) The real argument: `shell.js` is a platform, not a course cost. A virtual filesystem + line parser + builtin table is ~1,000 lines that Course 0 uses, and then Git & Version Control reuses verbatim (git is just ~15 more builtins over the same VFS — `init/add/commit/log/diff/branch/checkout/merge`, with `.git` as a real directory in the VFS), and Node/npm & Modules reuses again (`npm install` writes `node_modules/` and `package-lock.json` into the same VFS; `node x.js` already runs in Unit 5). Three of the owner's eight proposed courses are gated on the same engine. Judged as a one-course expense it is marginal; judged as the substrate for a third of the remaining roadmap it is the highest-leverage thing to build.

Two conditions on the verdict. First: nothing ships until `shell.js` exists — the ~9 items that run today (below) are a bootstrap, not a course. Second: Unit 6's project must end in exactly the filesystem state the Git course's first lesson opens on, so Git starts at `git init` instead of re-teaching paths. Write that handoff into the project's test now, before either course is authored.

One thing I will not pretend: the single most important outcome of this course — "you opened a terminal on your own machine and typed into it" — is not auto-gradeable in a browser and never will be. See risks.

## Size
34 items, ~7h

## Engine needs
The sandbox lacks exactly one thing: **a shell**. It does NOT lack a runtime. This is the key scoping finding — a simulated shell fits inside the EXISTING Web Worker with a small, bounded change to `runner.js`, exactly the way Course 7's simulated backend fits inside it today.

WHAT SHIPS: one new plain `<script>`, `shell.js` (no build step, no CDN, no WASM), ~900–1,100 lines, four layers.

1. VFS (~120 lines). Plain nested objects: `{type:'dir', children:{}}` / `{type:'file', content:'', mode:0o644}`. Path resolution handling `/`, `.`, `..`, `~`, absolute vs relative. NO symlinks, NO inodes, NO real permission enforcement (mode is a stored integer that exactly two code paths consult: `chmod +x` and the exec check). Seeded per-lesson from a new `lesson.fs` field — a literal object right next to `files:`, authored the same way `lesson.mock` is authored today.

2. Line parser (~220 lines). Tokenizer + a tiny recursive-descent pass: whitespace splitting, `'single'` (literal) vs `"double"` (with `$VAR` expansion), backslash escapes, `#` comments, `|` pipelines, `>` `>>` `<` `2>` `2>&1` redirection, `&&` `||` `;` sequencing, and `*`/`?` glob expansion resolved against the VFS. Explicitly NOT supported and explicitly refused with a clear message: `$(...)`/backticks, subshells, here-docs, background `&`, job control, functions, loops, arrays.

3. Builtin table (~500 lines). Every command is the same signature — `fn(argv, io, env, fs) -> exitCode` where `io = {stdin: string, stdout(s), stderr(s)}`. That uniform signature is why pipes cost almost nothing: a pipeline is threading one command's accumulated stdout string into the next one's `stdin`. Roughly 32 commands: pwd cd ls touch mkdir rm rmdir cp mv cat head tail wc echo grep sort uniq cut sed(only the `s///` form) tr export env unset which alias history chmod man help clear, plus `node` and `ps`/`kill`. `node` is the one that earns its keep: it evaluates the target file's content in the worker with `process.argv`/`process.exit` shimmed and pipes its console output into the io object — which is how Unit 5 connects the terminal to the JS the learner already knows. `ps`/`kill` operate on a fixed-size fake process table with no signals and no backgrounding.

4. Man pages (~200 lines, content not code). One canned page per command. This is what makes Unit 6 lesson 1 gradeable — the learner must open a page to discover a flag the course never taught.

WHAT CHANGES IN THE APP (small, and this is the part that makes it feasible):
- `runner.js`: a new `kind: "sh"` branch in `buildWorkerSrc`. Today it emits `eval(userCode + stepsSource)`. For `sh` it emits `(shellSrc)(); var SH = __makeShell(FS_SEED); SH.runScript(userCode); ` then the same `stepsSource`. Worker creation, the 7s watchdog, console streaming, the `postMessage` results protocol, `T.step` queueing and `__T_RUN` are all untouched.
- `harnessCommon`: extend `T` with shell assertions — `T.cwd()`, `T.fs(path)` (node or null), `T.ls(dir)`, `T.tree(path)` (recursive snapshot for project grading), `T.out()`, `T.err()`, `T.exit()`, `T.env(name)`, `T.mode(path)`, `T.procs()`, `T.script()` (the learner's raw source), `T.typed(regex)`, `T.cmdCount(name)`. The last three are load-bearing: they are what stop `cd /abs/path` from passing a relative-path lesson.
- `app.js`: `kind === "sh"` → chip `"SHELL"`, result tab labelled `"▶ Terminal"`, and a monospace transcript pane instead of the iframe preview. ~30 lines.
- `courses.js`: one `defineCourse` entry, `prefix: "cli"`.
- `tools/validate.js`: phase 1 already runs every solution and every starter through the real sandbox — `sh` lessons inherit that for free. Add ONE phase-0 gate: scan every `.sh` starter/solution for commands and flags outside the frozen supported set, and fail the build if any appear. That gate is what stops the engine from being edited lesson-by-lesson forever.

WHY IT IS TRACTABLE: no processes, no async, no network, no real concurrency, no signals, no permission model, stdout is a string, the filesystem is an object. It is roughly twice the size of `runner.js` (445 lines) and comparable to `review.js`. It is real software and should be estimated as such — but it is a weekend-scale interpreter, not an operating system, PROVIDED the unsupported list above stays refused rather than half-implemented.

WHAT CANNOT BE BUILT, and what I'd do instead: a real PowerShell (Unit 6 L2 becomes a typed translation exercise + quiz — stated openly in the brief); real port inspection via `lsof`/`netstat` (simulate `ps`/`kill`, put the three real per-OS commands in the cheatsheet verbatim); a real code editor (the editor content becomes a cheatsheet + quiz — I deliberately did NOT invent a fake editor lesson, because "press Ctrl+D" is not something a browser sandbox can honestly grade); and the terminal on the learner's own machine, which is the single outcome that matters most and is unreachable by definition.

## Teachable today
9 of 34 items run on the existing Web Worker with ZERO engine work. The other 25 all need `shell.js` — every lesson with a `$` prompt in it.

Runs today, unchanged:
- All 6 quizzes (kind `quiz`). Including the ones with real teeth: `code:` blocks showing a prompt plus a command and asking what the prompt reads afterwards; permission-bit arithmetic; `>` vs `>>`; exit-code meanings; the PowerShell/bash translation questions. Quizzes are pure data and the format already supports code blocks.
- `cli-u1-5` "Under the hood: write `resolvePath(cwd, arg)`" (kind `js`). The learner implements path resolution; the test asserts on returned strings, including the root edge case. This teaches `.`/`..`/`~` arguably BETTER than typing `cd` does, because implementing the rule forces internalising it.
- `cli-u2-5` "Globs" recast as kind `js` for the bootstrap: `matchesGlob(pattern, name)` with `*` and `?`. Same argument. When the engine lands, this lesson gets a shell sibling and moves to the back half of the unit as the "how it works" lesson.
- `cli-u6-2` "Windows reality" (as kind `js` in the bootstrap: the learner fills a JS object literal mapping bash → PowerShell instead of editing a text file; the test walks the object against an accepted-alias set). Identical grading either way.

SEQUENCING CONSEQUENCE: those 9 items are a bootstrap, not a course. They cannot be shipped as "Course 0" on their own — a command-line course whose learner never types a command is a lie, and the owner would notice in ten minutes. The correct order is: freeze the command/flag contract → build `shell.js` layers 1-3 → author Units 1-3 (which need only the VFS, the parser and the file/text builtins) → ship → then layer 4 (`node`, `ps`/`kill`, man pages) unlocks Units 4-6. Units 1-3 are 19 items and about 4 hours, which is already a complete, defensible, Codecademy-length command-line course on its own; Units 4-6 are the "…& Your Machine" half that the roadmap actually needs.

Two cheap wins available immediately, before any of this: put the `resolvePath` lesson and a "paths and the filesystem" quiz into Learn JavaScript's existing string/array unit as a preview, and add a `srv` unit-1 brief sentence pointing at the coming course. Both are content-only edits.

## Overlaps
Five real collisions with the existing 304, and one accounting change.

1. `resolvePath` / `matchesGlob` vs **Learn JavaScript (50 items, js/u1-u8)**. These are string-splitting, array-reduce and loop exercises — exactly what that course teaches. Left alone they become JS exercises wearing a shell costume, and worse, they'd be a difficulty spike for a Course 0 learner who by definition has not done Course 4 yet. Avoidance: (a) they are the LAST lesson of their unit, never the first, so the shell has already taught the concept and the JS lesson only formalises it; (b) their briefs explicitly frame them as optional depth with a "you'll meet this properly in Learn JavaScript" note; (c) their starters ship with the loop scaffolding already written so the learner fills in the rule, not the plumbing. In the post-engine ordering these are 2 of 34 items — small enough that if they still feel wrong in authoring, cut them and lose nothing.

2. `grep`/`sed` vs **Learn JavaScript strings**. The danger is drifting into teaching regex, which the JS course owns. Hard boundary: the shell lessons grade on PIPELINE COMPOSITION (`sort | uniq -c | sort -rn | head -3`) and on flags (`-i`, `-n`, `-v`, `-r`), never on authoring a non-trivial pattern. Every `grep` argument in every lesson is a plain literal string or a two-character glob. `sed` ships only in the `s/old/new/g` form and is presented as a find-and-replace, not as an introduction to regex.

3. Unit 5 (processes, ports, `node server.js`) vs **Back-End Foundations (38 items, srv/u1-u8)**. Course 7's unit 1 teaches request-in/response-out and its unit 5 teaches auth — real overlap risk on "what a server is". Avoidance: Unit 5 grades ONLY the process lifecycle — start it, see the port, Ctrl-C it, hit `EADDRINUSE`, find and kill the squatter. It never mentions routing, paths, methods, status codes or handlers. The two courses are explicitly stitched: Course 0's brief says "the function you write in Back-End Foundations is what this process runs", and Course 7's unit 1 brief gets one added sentence pointing back. That turns the overlap into the handoff the owner said was missing.

4. `node script.js` vs **Learn JavaScript** generally. The learner already runs JS in this app — running it again could feel like filler. Avoidance: the lesson is about the INVOCATION contract (argv in, stdout out, stderr separate, exit code back), and the scripts involved are two lines each with no interesting logic. The assertion targets are `T.exit()` and stream separation, never program behaviour.

5. Environment variables and `.env` vs the proposed **Deploying Your App** and **Web Security Basics** courses, plus Course 7's auth unit. Three courses could each claim secrets. Ownership boundary, declared now: Course 0 owns the MECHANISM (`export`, `$VAR`, quoting, `PATH`, `.env` as a file, `.gitignore` as the thing that keeps it out of a repo). Deploying owns WHERE secrets live in production (build-time vs runtime, platform config). Security owns WHAT MAKES A SECRET LEAK (and per the owner's own note, much of that folds into Course 7's auth unit rather than standing alone). Course 0's `.env` lesson brief states the handoff in one line.

Also: nothing in the current catalog teaches editors, man pages, permissions, or the Windows/POSIX split. Units 4 and 6 are collision-free.

ACCOUNTING: the "8 courses, 304 items, 827 checkpoints, ~65h" headline becomes 9 / 338 / ~940 / ~72h. `courses.js` gets a `cli` entry with `items: 34` and `hours: 7`; validate.js phase 0 will fail the build if `items` doesn't match what the unit files register, and its 2x guard will fail if `hours` is set aspirationally (the model math here is ~7.1h, so 7 passes comfortably). Set `hours: 7` with no `targetHours`.

## Units

### 1. Unit 1 — Where you are: the filesystem and paths
Terminal vs shell vs prompt. The filesystem as a tree. Working directory. Absolute vs relative paths; `.`, `..`, `~`, `/`. Hidden files. Tab completion and history as the two habits that decide whether the terminal feels fast or awful. Commands: pwd, cd, ls (-a, -l, -1).

Lessons:
  - The prompt, and the only question the shell ever answers: where am I? (`pwd`)
  - `ls` — what a directory actually contains, and the `-a`/`-l` flags that reveal the rest
  - `cd` with absolute paths: starting from `/` every time
  - `cd` with relative paths: `..`, `~`, `cd -`, and the tab key
  - Under the hood: write `resolvePath(cwd, arg)` yourself
  - Unit 1 quiz: paths and navigation

Graded how:
Lessons 1-4 are the new `sh` kind. The learner edits `session.sh` — one shell command per line, exactly what they'd type. The engine runs the lines against a seeded VFS; the test string asserts on final state and transcript.

L3 step: 'From `/home/ada`, get to the apollo project in one command.' Learner types `cd /home/ada/projects/apollo`. Test: `T.eq(T.cwd(), '/home/ada/projects/apollo', ...)` plus `T.eq(T.exit(), 0)`.
L4 step: 'Now go UP two levels and into `notes/` — without typing a leading slash.' Test: `T.eq(T.cwd(), '/home/ada/notes')` AND `T.typed(/cd\s+\.\.\/\.\.\/notes|cd\s+\.\.[\s\S]*cd\s+\.\./)` AND `T.expect(!/cd\s+\//.test(T.script()), 'This lesson is about relative paths — no absolute path allowed')`. The typed-source assertion is what stops `cd /home/ada/notes` from passing a lesson about `..`.
L2 step: 'List everything, including the dotfiles.' Test: `T.expect(T.out().includes('.bashrc'))` AND `T.typed(/ls\s+-\w*a/)`.
L5 is kind `js`, runs today: learner writes `resolvePath(cwd, arg)`. Test asserts return strings — `T.eq(resolvePath('/home/ada/proj','../notes/./todo.txt'),'/home/ada/notes/todo.txt')`, `T.eq(resolvePath('/home/ada','~/bin'),'/home/ada/bin')`, `T.eq(resolvePath('/','..'),'/')` (the root-can't-go-up edge case).
Quiz: 6 questions, `code:` blocks showing a prompt + command, 'what does the prompt say afterwards'.

### 2. Unit 2 — Making and breaking things
Creating, copying, renaming, deleting. `mkdir -p` as one command instead of four. That `mv` is rename AND move. That `rm` has no trash can. Globs (`*`, `?`) as the thing that makes bulk operations one line. Commands: mkdir, touch, cp, mv, rm, rmdir.

Lessons:
  - `mkdir`, and `mkdir -p` — a whole tree in one command
  - `touch`, `cat`, and writing a file from the prompt
  - `cp` and `mv` — one command, two jobs (move and rename)
  - `rm`, `rm -r`, and the delete that has no undo
  - Globs: `*.js`, `report-?.txt`, and bulk operations
  - Project: Restructure a messy Downloads folder
  - Unit 2 quiz: files, folders and globs

Graded how:
L1 step: 'Create `src/components/buttons/` in ONE command.' Test: `T.eq(T.fs('/home/ada/app/src/components/buttons').type,'dir')` AND `T.eq(T.cmdCount('mkdir'), 1, 'One mkdir — that is what -p is for')` AND `T.typed(/mkdir\s+-\w*p/)`. Counting invocations is what makes the `-p` lesson actually about `-p`.
L3 step: 'Rename `notes.txt` to `README.md` WITHOUT copying it.' Test: `T.expect(T.fs('/home/ada/app/notes.txt') === null)`, `T.eq(T.fs('/home/ada/app/README.md').content, ORIGINAL_CONTENT)` (byte-identical), AND `T.expect(!/\bcp\b/.test(T.script()) && !/\brm\b/.test(T.script()), 'mv does this in one step')`.
L4 step: deliberately destructive — 'delete the whole `tmp/` tree.' Test asserts `T.fs('/home/ada/app/tmp') === null` and that `src/` survived (`T.fs('/home/ada/app/src').type === 'dir'`), catching the learner who typed `rm -r *`.
L5 step: 'Move every `.png` into `images/` in one command.' Test: all six png paths now resolve under `images/`, no `.txt` moved, and `T.eq(T.cmdCount('mv'), 1)`.
Project (auto-graded end state): 23 mixed files in `~/Downloads`; produce `images/ docs/ code/` with every file correctly sorted, `Downloads` otherwise empty. Test walks the VFS and compares a recursive snapshot against the expected tree, then asserts the whole session used ≤ 6 commands — which forces globs instead of 23 `mv` lines.

### 3. Unit 3 — Reading, searching, and piping
The Unix idea itself: small programs, text streams, composition. cat/head/tail/wc, grep with -i/-n/-r, `>` vs `>>` vs `<`, stdout vs stderr as two different pipes, exit codes, and `|` as the thing that turns ten small tools into one answer. sort/uniq -c/cut for the pipeline that actually matters.

Lessons:
  - `cat`, `head -n`, `tail -n`, `wc -l` — looking at a file without opening it
  - `grep`: find the line, then `-i`, `-n`, `-r`
  - Redirecting: `>` creates, `>>` appends, and `>` silently eats files
  - Pipes: `sort | uniq -c | sort -rn | head -3`
  - Project: Log detective — one pipeline, one answer
  - Unit 3 quiz: streams, pipes and redirection

Graded how:
L1 step: 'How many lines are in `server.log`? Print only the number.' Test: `T.eq(T.out().trim(), '2041')` AND `T.typed(/wc\s+-\w*l/)`.
L2 step: 'Find every line mentioning timeout, case-insensitively, with line numbers.' Test: `T.eq(T.out().trim().split('\n').length, 7)` and each line matches `/^\d+:/`.
L3 step: 'Append a line to `notes.md` without destroying what is there.' Test: `T.expect(T.fs('.../notes.md').content.startsWith(ORIGINAL))` AND `T.typed(/>>/)`. Then a deliberate step where they use `>` on a file with content and the test asserts the content is now GONE — grading the mistake as the lesson.
L4 step: 'Count how many times each error code appears; show the top 3.' Test: exact 3-line stdout match, plus `T.expect((T.script().match(/\|/g)||[]).length >= 3, 'This is a pipeline')`.
Project: produce `report.txt` containing exactly the top-3 error codes with counts. Test reads `T.fs('/home/ada/logs/report.txt').content` and string-compares to the expected three lines; asserts `server.log` is byte-unchanged; asserts ≥2 pipes and a `>` were used, so the learner cannot read the answer with `cat` and type it by hand. This is the cleanest auto-graded project in the course — the answer is literally a string in a file.

### 4. Unit 4 — Your machine: environment, PATH and permissions
Why `command not found` happens and how the shell resolves a name. Environment variables, `export`, `$VAR` expansion, quoting ("$X" vs '$X'). PATH. `which`. Aliases and dotfiles as the config that survives reboots. Permission bits, `chmod +x`, and `./script.sh`. `.env` files and the secret you must never commit.

Lessons:
  - Variables and `export` — and why "double quotes" and 'single quotes' are different
  - `PATH`: why the shell says *command not found* about a program that exists
  - `which`, `alias`, and making it stick in `~/.bashrc`
  - Permissions, `chmod +x`, and running `./deploy.sh`
  - `.env`, secrets, and the one file you never commit
  - Unit 4 quiz: environment, PATH and permissions

Graded how:
L2 is the best-graded lesson in the course because the shell's own error codes do the assertion. The VFS seeds `/home/ada/bin/greet` (executable, prints `hello`) and a PATH that excludes it. Step 1: 'Run `greet`. Read what happens.' Test: `T.eq(T.exit(), 127)` AND `T.expect(T.err().includes('greet: command not found'))`. Step 2: 'Now make the shell able to find it — without moving the file and without typing its path.' Test: `T.expect(T.out().includes('hello'))`, `T.eq(T.exit(),0)`, AND `T.typed(/export\s+PATH=/)` AND `T.expect(!/\.\/|\/home\/ada\/bin\/greet/.test(T.script()))`. Step 3: `T.eq(T.env('PATH').split(':')[0], '/home/ada/bin')` — prepend, don't clobber.
L1 step: with `NAME=Ada` exported, `echo "Hi $NAME"` must print `Hi Ada` and `echo 'Hi $NAME'` must print `Hi $NAME` literally. Test compares the two transcript lines. Unambiguous, and it is the quoting bug that bites everyone forever.
L4: `./deploy.sh` first returns exit 126 with `Permission denied` (`T.eq(T.exit(),126)`); after `chmod +x deploy.sh` the engine actually executes the script's own lines, so the test asserts the directory the script creates now exists (`T.eq(T.fs('/home/ada/app/dist').type,'dir')`) plus `T.eq(T.mode('deploy.sh') & 0o111, 0o111)`.
L5: learner adds `.env` to `.gitignore` and moves a hardcoded key out of `src/config.js` into `.env`. Test: `.gitignore` contains a line matching `/^\.env$/m`; `T.expect(!/sk_live_/.test(T.fs('/home/ada/app/src/config.js').content))`; `T.expect(/API_KEY=/.test(T.fs('/home/ada/app/.env').content))`. Boundary note in the brief: *where* secrets live in production belongs to the Deploying course, not here.

### 5. Unit 5 — Running programs: processes, ports and `node`
That a command IS a program, and that every program has the same four-part contract: argv in, stdout out, stderr out, exit code back. One-shot vs long-running. What a port is and why only one process can hold it. Ctrl-C. This is the unit that makes Course 7 stop feeling like an abstraction.

Lessons:
  - `node script.js` — arguments in, stdout out, exit code back
  - stderr is a different stream: `2>`, `2>&1`, and why errors don't go down a pipe
  - Long-running: `node server.js`, the port it holds, and Ctrl-C
  - `EADDRINUSE`: something is already on port 3000 — find it, stop it
  - Unit 5 quiz: programs, streams, exit codes and ports

Graded how:
L1: the VFS holds a real `greet.js`; the engine evaluates it in the worker with `process.argv` shimmed and captures its console output. Step: 'Run it with your name as an argument.' Test: `T.expect(/Hello, \w+/.test(T.out()))` AND `T.typed(/node\s+greet\.js\s+\S+/)`. Step 2 runs `check.js` which exits 1 on bad input: `T.eq(T.exit(), 1)` and the learner must then print the exit code (`echo $?`) — `T.expect(T.out().trim().endsWith('1'))`.
L2: 'Capture only the errors into `errors.log`, letting normal output still reach the screen.' Test: `T.fs('.../errors.log').content` contains ONLY the stderr lines, and `T.out()` still contains the stdout lines — the two streams provably separated. Then the classic trap step: `node build.js | grep error` finds nothing, and the fix is `2>&1 |`. Test asserts the before/after transcripts differ exactly as expected.
L3: `node server.js` registers an entry in a fixed process table. Test: `T.eq(T.procs().length, 1)`, `T.eq(T.procs()[0].port, 3000)`, `T.expect(T.out().includes('Listening on http://localhost:3000'))`. Then Ctrl-C (typed as `^C` on its own line) → `T.eq(T.procs().length, 0)`.
L4: engine seeds an orphan process already on 3000. Step 1: `node server.js` → `T.eq(T.exit(),1)` and `T.expect(T.err().includes('EADDRINUSE'))`. Step 2: learner uses `ps` to find the pid and `kill <pid>` — test asserts `T.procs()` is empty and `T.typed(/kill\s+\d+/)`. Step 3: server starts clean.
HONEST CAVEAT, stated in the brief: real port-hunting is `lsof -i :3000` on mac/Linux and `netstat -ano | findstr :3000` on Windows, and those differ enough that simulating them faithfully is not worth it. The sim teaches `ps`/`kill`; the cheatsheet carries the three real incantations verbatim. This is the loosest simulation in the course and the lesson says so out loud.

### 6. Unit 6 — Manuals, your editor, and your actual Windows machine
The skill that outlives every command: reading `man` and `--help`, including synopsis notation (`[-n num]`, `...`, `|`). What a code editor gives you over Notepad and the six shortcuts worth muscle memory. `code .`. Then the honest part: the learner's real machine runs PowerShell, and this course drilled bash — here is the translation table, and here is why you should install Git Bash or WSL today.

Lessons:
  - `man` and `--help`: reading a synopsis instead of googling
  - Windows reality: PowerShell vs Git Bash vs WSL, and translating commands
  - Project: Scaffold a project from an empty folder
  - Unit 6 quiz: manuals, editors and the Windows story

Graded how:
L1 grades USING the manual, not reading it. The VFS ships real man pages for the ~30 commands the engine supports. Step: 'Using only `man wc`, print the BYTE count of report.txt.' Test: `T.eq(T.out().trim(), '4812')` AND `T.typed(/wc\s+(-c|--bytes)/)` — the learner cannot know `-c` without opening the page, and `-l`/`-w` produce different numbers, so the assertion is genuine. Second step does the same for a flag of `sort` never taught in Unit 3.

L2 is the weakest-graded lesson in the course and I will not dress it up. You cannot run PowerShell in a Web Worker and you should not build a second shell to fake it. Grade it as a typed translation instead: the starter is `translate.txt`, two columns, bash on the left, blanks on the right (`ls -la` → ____, `pwd` → ____, `rm -r dist` → ____, `cat x.txt` → ____, `export API_KEY=x` → ____, `touch a.js` → ____, `which node` → ____). The test parses the file and matches each answer against an accepted-alias set (`Get-ChildItem`/`gci`/`dir` all pass; `$env:API_KEY = "x"` for the export). Real grading of real knowledge, but it grades recall, not doing — and the unit quiz carries the rest.

L3 project — the handoff artifact. From an empty `~/projects/`, produce in one session: `notestream/{src/{index.html,styles.css,script.js},README.md,.gitignore,scripts/setup.sh}`, with `.gitignore` containing `.env` and `node_modules/`, `setup.sh` executable and successfully run, and its output greped into `build.log`. Test = recursive VFS snapshot against the expected tree + content assertions on the load-bearing lines + `T.eq(T.mode('scripts/setup.sh') & 0o111, 0o111)` + `T.expect(T.fs('.../build.log').content.includes('setup complete'))` + a command-count ceiling that forces `mkdir -p` and globs. This exact end state is the opening fixture of the Git course's lesson 1.

## Projects
- Unit 2 — Restructure a messy Downloads folder: 23 mixed files sorted into images/ docs/ code/ with globs, graded by recursive tree snapshot plus a ceiling of 6 commands so brute force fails
- Unit 3 — Log detective: derive the top 3 error codes from a 2,041-line server.log and write them to report.txt with a single pipeline, graded by exact file-content match plus a pipe-count assertion so the answer cannot be hand-typed
- Unit 6 — Scaffold a project from an empty folder: build the full notestream/ tree with .gitignore, an executable setup.sh, and its output greped into build.log — graded by tree snapshot, content assertions and the executable bit, and deliberately identical to the opening fixture of the Git course's first lesson

## Risks
- THE BIG ONE — engine/content coupling. shell.js is the largest new code artifact in the app (~1,000 lines vs runner.js's 445) and every lesson depends on its exact flag support and exact error strings. Author a lesson needing `ls -lh` when only `-l` exists and it is an ENGINE change, not a content edit — which is how a 34-item course turns into an eighteen-month interpreter project. Mitigation, non-negotiable: freeze the command+flag contract in writing BEFORE authoring a single lesson, and add the validate.js phase-0 gate that scans every .sh starter and solution and fails the build on any command or flag outside the frozen set.
- Fidelity drift teaching a false model. A sim that accepts what real bash rejects (or silently succeeds where bash errors) produces a learner who is confidently wrong on a real machine — the worst possible outcome for a course whose entire job is transfer. Mitigation: keep the surface deliberately small and make every unsupported construct print `codelab: '$(...)' is not simulated in this course — see the cheatsheet` and exit non-zero. Never silently succeed. Every unit cheatsheet shows the real-machine form alongside, the way srv/u1 already shows the Express equivalent next to handleRequest.
- The Windows gap, and the one outcome that is genuinely ungradeable. The owner's machine is Windows 11 / PowerShell; this course drills bash. Worse, the single most valuable outcome — 'you opened a terminal on your own machine and typed into it' — cannot be verified by a browser sandbox, ever. Mitigation, stated openly rather than papered over: the course opens with a one-screen brief telling him to install Git Bash or WSL before lesson 1 and to mirror every session on his real prompt; Unit 6 L2 carries the translation table; and the course description says plainly that the sandbox proves you know the commands, not that you have run them. Do not fake this.
- Unit 6 L2 is the weakest-graded lesson in the course — it grades recall of a translation table, not doing. It is defensible (real grading of real knowledge) but it is the one lesson where a learner could pass and still be stuck at a PowerShell prompt. Accepted deliberately, because the alternative — simulating PowerShell too — doubles the engine for one lesson.
- Consequence-free destruction. `rm -rf` in a VFS that resets on reload teaches the command but not the fear, and fear is most of what keeps a real developer safe. Partial mitigation: Unit 2 L4 deliberately destroys something the NEXT step needs, so the only recovery is restarting the lesson; and the brief states in the plainest possible terms that on a real machine there is no restart. Honest assessment: this is a real and unfixable weakness of every sandboxed CLI course, Codecademy's included.
- Unit 5 is the scope-creep frontier. `node`, `ps` and `kill` are where a small shell starts becoming a fake operating system — the next asks are backgrounding, then signals, then npm, then a package registry. Fence it hard: a fixed 3-entry process table, no signals beyond a modelled Ctrl-C, no `&`, no job control. If Unit 5 starts needing more, the answer is to cut Unit 5's ambition, not to grow the engine.
- No visual preview. Every other course in the catalog produces something you can look at — a page, a layout, an animation. This course is 25 text transcripts, and app.js's '▶ Result' tab and preview iframe assume otherwise. Partly a UX cost, partly an engagement cost for a Course 0 that a beginner meets FIRST, before anything visual has ever rewarded them. Mitigation: render the transcript as a properly styled terminal (that is genuinely satisfying to look at), and consider whether Learn HTML should stay the catalog's first card even after this ships — Course 0 by dependency does not have to mean Course 0 by default click.
- Catalog accounting. courses.js needs `items: 34` matching exactly what the unit files register (validate.js phase 0 hard-fails otherwise), `hours: 7` against a ~7.1h model (the 2x guard passes easily), and the new quizzes must clear the Recall pool gates — ≥80% of questions usable for free recall, and the correct answer must not be the longest choice in more than 40% of questions per course. That last gate has bitten this repo before; write the quizzes with it in view rather than fixing them afterwards.
