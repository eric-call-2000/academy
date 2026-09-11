/* Git & Version Control — Unit 1: Snapshots and the three trees */
window.CODELAB.addUnit("git", {
  id: "git-u1",
  title: "Snapshots: the three trees",
  icon: "📸",
  blurb: "A repository, the staging area, and a commit — and the one picture (working tree → index → HEAD) that every other Git command hangs off.",
  cheat: [
    { h: "The three trees", lang: "sh", code: "# working tree ──git add──▶ index ──git commit──▶ HEAD\n#  (your files)          (next commit)          (last commit)\n\ngit status        # compares all three and tells you what differs", note: "Every command in this course moves content between these three places. When you're lost, run git status." },
    { h: "Starting out", lang: "sh", code: "git init          # make this folder a repository (creates .git/)\ngit status        # what's untracked, staged, modified?\nls -a             # the .git folder is hidden — it IS the repository", note: "Delete .git and the folder is just a folder again. Everything Git knows lives in there." },
    { h: "Staging", lang: "sh", code: "git add index.html style.css   # stage exactly these\ngit add .                      # stage EVERYTHING here (careful)\ngit status                     # \"Changes to be committed\" = staged", note: "git add copies a file's CURRENT content into the index. Edit it again afterwards and you'll have two versions in play." },
    { h: "Committing and reading history", lang: "sh", code: "git commit -m \"Add the homepage\"\ngit log                # full: sha, author, date, message\ngit log --oneline      # one line per commit, 7-char sha", note: "A commit is a full snapshot of the index, not a diff — Git computes diffs when you ask for them." },
    { h: "About the shas in this terminal", lang: "sh", code: "# commit 3f9a1c0e5b…   ← 40 hex characters, like real Git\n# 3f9a1c0 Add the homepage   ← --oneline shows the first 7", note: "This terminal runs a simulated Git: commands and output match real Git, but shas are computed differently (and deterministically), so yours won't match a real repo's." }
  ],
  lessons: [

    {
      id: "git-u1-1",
      title: "What a repository actually is",
      kind: "shell", chip: "GIT", xp: 15, mins: 10,
      cwd: "/home/you/project",
      fs: {
        "/home/you/project/index.html": "<h1>My journal</h1>\n",
        "/home/you/project/notes.txt": "Day 1: started learning Git\n"
      },
      brief: "Every developer has done this: an edit breaks everything, and the version that worked is gone. Git is **undo for your whole project** — every saved state, forever, one command away.\n\nA **repository** is just a folder with a hidden `.git` directory inside it. That directory *is* the repository: every snapshot, every branch, the whole history. Your files are a working copy that sits beside it.\n\n`git init` creates it. `git status` asks Git what it sees — and you'll type it more than any other command, because it answers the only question that matters before every other command: *what state am I in?*\n\nThe **Commands** tab is a real terminal session: each line runs in order, and the **Terminal** pane shows exactly what Git printed back.",
      example: { lang: "sh", code: "git init\n# Initialized empty Git repository in /home/you/project/.git/\n\ngit status\n# On branch main\n#\n# No commits yet\n#\n# Untracked files:\n#   ..." },
      steps: [
        { text: "Turn the folder into a repository with `git init`.",
          test: "T.expect(T.isRepo(), 'There is no repository yet — run git init (you are already inside ~/project)');" },
        { text: "Ask Git what it sees: run `git status` **after** the init.",
          test: "T.expect(T.ran(/^git status/), 'Run git status');\nT.expect(T.out().indexOf('Untracked files:') !== -1, 'git status should report your two files as Untracked — make sure it runs AFTER git init, not before');" },
        { text: "Find the repository itself: list **all** files, including hidden ones, with `ls -a`.",
          test: "T.expect(T.ran(/^ls\\s+-a/), 'Run ls -a — plain ls hides names that start with a dot');\nT.expect(/(^|\\n)\\.git(\\n|$)/.test(T.out()), 'ls -a should show a .git entry — run it after git init');\nT.eq(T.untracked(), ['index.html', 'notes.txt'], 'Nothing should be staged or committed yet — both files are still untracked');" }
      ],
      files: [
        { name: "commands.sh", content: "# You're in ~/project — a plain folder with two files.\n# One command per line. Lines starting with # are notes.\n\n# 1) Make this folder a Git repository:\n\n# 2) Ask Git what it sees:\n\n# 3) Show every file, hidden ones included:\n\n" }
      ],
      hints: [
        "The command that creates a repository is `git init` — no arguments needed when you're already in the folder.",
        "`git status` goes on its own line after `git init`.",
        "Plain `ls` hides dotfiles; `ls -a` shows them. Your three lines are `git init`, `git status`, `ls -a`."
      ],
      solution: {
        "commands.sh": "# You're in ~/project — a plain folder with two files.\n# One command per line. Lines starting with # are notes.\n\n# 1) Make this folder a Git repository:\ngit init\n\n# 2) Ask Git what it sees:\ngit status\n\n# 3) Show every file, hidden ones included:\nls -a\n"
      }
    },

    {
      id: "git-u1-2",
      title: "Staging: git add and the index",
      kind: "shell", chip: "GIT", xp: 15, mins: 12,
      cwd: "/home/you/project",
      fs: {
        "/home/you/project/index.html": "<h1>My journal</h1>\n<link rel=\"stylesheet\" href=\"style.css\">\n",
        "/home/you/project/style.css": "h1 { color: teal; }\n",
        "/home/you/project/todo.txt": "- ask about the bug\n- buy coffee\n"
      },
      setup: "git init",
      brief: "Git never commits your folder. It commits the **index** — also called the *staging area* — a draft of your next commit that you build up on purpose.\n\n`git add <file>` copies that file's current content into the index. Files you don't add stay out of the commit, even though they sit right there in the folder. That's the point: a commit should hold **one idea**, and the index is how you choose which changes belong to it.\n\nHere the homepage and its stylesheet belong together. `todo.txt` is your private scratch list and should never be committed. `git add .` would sweep it in — so name the files you mean.",
      example: { lang: "sh", code: "git add index.html style.css\ngit status\n# Changes to be committed:\n#   (use \"git rm --cached <file>...\" to unstage)\n# \tnew file:   index.html\n# \tnew file:   style.css\n#\n# Untracked files:\n# \ttodo.txt" },
      steps: [
        { text: "Stage `index.html` and `style.css` — and nothing else.",
          test: "var s = T.staged();\nT.expect(s.indexOf('todo.txt') === -1, 'todo.txt got staged — it is your private scratch list. Name the two files you mean instead of using git add .');\nT.eq(s, ['index.html', 'style.css'], 'Stage exactly index.html and style.css');" },
        { text: "Leave `todo.txt` untracked.",
          test: "T.eq(T.untracked(), ['todo.txt'], 'todo.txt should be the only untracked file — stage the other two');" },
        { text: "Run `git status` and find the **Changes to be committed** section.",
          test: "T.expect(T.ran(/^git status/), 'Run git status after staging');\nT.expect(T.out().indexOf('Changes to be committed:') !== -1, 'git status should show a \"Changes to be committed\" section — run it after git add');\nT.eq(T.count(), 0, 'Don\\'t commit yet — this lesson is about the draft, not the snapshot');" }
      ],
      files: [
        { name: "commands.sh", content: "# The repo already exists (git init ran for you).\n# index.html and style.css belong together; todo.txt is private.\n\n# Stage the two files that belong in the commit:\n\n# Check what's staged:\n\n" }
      ],
      hints: [
        "`git add` takes several file names at once: `git add index.html style.css`.",
        "Avoid `git add .` here — the dot means *everything in this folder*, todo.txt included.",
        "Then `git status` on its own line. Look for \"Changes to be committed\" (staged) and \"Untracked files\" (not)."
      ],
      solution: {
        "commands.sh": "# The repo already exists (git init ran for you).\n# index.html and style.css belong together; todo.txt is private.\n\n# Stage the two files that belong in the commit:\ngit add index.html style.css\n\n# Check what's staged:\ngit status\n"
      }
    },

    {
      id: "git-u1-3",
      title: "git commit -m and reading git log",
      kind: "shell", chip: "GIT", xp: 20, mins: 14,
      cwd: "/home/you/project",
      fs: { "/home/you/project/index.html": "<h1>My journal</h1>\n" },
      setup: "git init",
      brief: "`git commit` takes everything in the index and saves it as a **snapshot**: a permanent, named state of the whole project that you can return to. `-m` gives it a message — the one line that tells future-you what this snapshot *is*.\n\nEach commit gets a **sha**, a 40-character ID computed from its contents, and remembers its **parent** — the commit before it. That chain of parents *is* your history.\n\n`git log` walks the chain from newest to oldest. `git log --oneline` squeezes each commit onto one line: a 7-character short sha, then the message. (Git prints `(HEAD -> main)` next to the commit you're on — more on that in Unit 3.)\n\nMake two commits, then read them back.",
      example: { lang: "sh", code: "git add index.html\ngit commit -m \"Add the homepage\"\n# [main (root-commit) 3f9a1c0] Add the homepage\n#  1 file changed, 1 insertion(+)\n#  create mode 100644 index.html\n\ngit log --oneline\n# 3f9a1c0 (HEAD -> main) Add the homepage" },
      steps: [
        { text: "Stage `index.html` and commit it with the message **Add the homepage**.",
          test: "T.expect(T.count() >= 1, 'No commits yet — git add index.html, then git commit -m \"Add the homepage\"');\nvar first = T.log()[T.count() - 1];\nT.eq(first.subject, 'Add the homepage', 'Your FIRST commit\\'s message should be exactly: Add the homepage');\nT.expect(first.parents.length === 0, 'The first commit has no parent');" },
        { text: "Create `about.html` with `echo \"<h1>About</h1>\" > about.html`, stage it, and commit it as **Add an about page**.",
          test: "T.eq(T.count(), 2, 'You should have exactly two commits');\nT.eq(T.log()[0].subject, 'Add an about page', 'The newest commit\\'s message should be exactly: Add an about page');\nT.expect(T.commit('HEAD').files['about.html'] != null, 'about.html is not in the second commit — did you git add it before committing?');\nT.eq(T.commit('HEAD').parents, [T.log()[1].sha], 'The second commit\\'s parent should be the first commit');" },
        { text: "Read the history with `git log --oneline`, then confirm with `git status` that nothing is left over.",
          test: "T.expect(T.ran(/^git log --oneline/), 'Run git log --oneline');\nT.expect(/[0-9a-f]{7} \\(HEAD -> main\\) Add an about page\\n[0-9a-f]{7} Add the homepage/.test(T.out()), 'git log --oneline should list both commits, newest first — run it after the second commit');\nT.expect(T.out().indexOf('nothing to commit, working tree clean') !== -1, 'Finish with git status — it should say: nothing to commit, working tree clean');" }
      ],
      files: [
        { name: "commands.sh", content: "# index.html is here and the repo exists.\n\n# 1) Stage and commit index.html:\n\n# 2) Make about.html, stage it, commit it:\n\n# 3) Read the history, then check nothing's left:\n\n" }
      ],
      hints: [
        "Two lines for the first commit: `git add index.html`, then `git commit -m \"Add the homepage\"`.",
        "The second commit is three lines: the `echo \"<h1>About</h1>\" > about.html`, a `git add about.html`, and `git commit -m \"Add an about page\"`.",
        "End with `git log --oneline` and then `git status`."
      ],
      solution: {
        "commands.sh": "# index.html is here and the repo exists.\n\n# 1) Stage and commit index.html:\ngit add index.html\ngit commit -m \"Add the homepage\"\n\n# 2) Make about.html, stage it, commit it:\necho \"<h1>About</h1>\" > about.html\ngit add about.html\ngit commit -m \"Add an about page\"\n\n# 3) Read the history, then check nothing's left:\ngit log --oneline\ngit status\n"
      }
    },

    {
      id: "git-u1-4",
      title: "The three trees, proven",
      kind: "shell", chip: "GIT", xp: 20, mins: 14,
      cwd: "/home/you/project",
      setup: "git init",
      brief: "Here's the picture the rest of this course hangs off. At any moment, one file can exist in **three different versions at once**:\n\n- the **working tree** — the file on disk, what your editor shows\n- the **index** — the version you last `git add`ed, waiting for the next commit\n- **HEAD** — the version in your last commit\n\n`git add` copies working tree → index. `git commit` copies index → HEAD. Nothing moves on its own.\n\nProve it: drive one file, `banner.txt`, into three different versions — one committed, one staged, one just typed — and watch `git status` report the same file in two sections at once.",
      example: { lang: "sh", code: "echo \"v1\" > f.txt && git add f.txt && git commit -m v1   # HEAD  = v1\necho \"v2\" > f.txt && git add f.txt                     # index = v2\necho \"v3\" > f.txt                                    # disk  = v3" },
      steps: [
        { text: "Write `Spring sale` into `banner.txt`, stage it, and commit it (message: **Spring banner**). HEAD now holds *Spring sale*.",
          test: "T.eq(T.blobAt('HEAD', 'banner.txt'), 'Spring sale\\n', 'The last commit should contain banner.txt = \"Spring sale\" — echo it, git add it, git commit it');\nT.eq(T.log()[0].subject, 'Spring banner', 'Commit message should be: Spring banner');" },
        { text: "Overwrite it with `Summer sale` and **stage** it — but don't commit. The index now holds *Summer sale*.",
          test: "T.eq(T.blobAt('index', 'banner.txt'), 'Summer sale\\n', 'The index should hold \"Summer sale\" — write it, then git add banner.txt (no commit)');\nT.eq(T.count(), 1, 'Only one commit — the Summer version must stay staged, not committed');" },
        { text: "Overwrite it once more with `Autumn sale` — don't stage it. The working tree now holds *Autumn sale*.",
          test: "T.eq(T.wt('banner.txt'), 'Autumn sale\\n', 'banner.txt on disk should end up as \"Autumn sale\"');\nT.eq(T.blobAt('index', 'banner.txt'), 'Summer sale\\n', 'The index should still hold Summer — don\\'t git add the Autumn version');" },
        { text: "Run `git status`: `banner.txt` should appear **both** as staged and as not staged.",
          test: "T.expect(T.ran(/^git status/), 'Finish with git status');\nvar o = T.out();\nT.expect(o.indexOf('Changes to be committed:') !== -1 && o.indexOf('Changes not staged for commit:') !== -1, 'git status should list banner.txt under BOTH headings — one per difference (HEAD vs index, index vs disk)');" }
      ],
      files: [
        { name: "commands.sh", content: "# Empty repo. Write text into a file with:  echo \"text\" > banner.txt\n\n# 1) Spring sale → stage → commit \"Spring banner\"\n\n# 2) Summer sale → stage (no commit)\n\n# 3) Autumn sale (don't stage)\n\n# 4) Look at all three trees at once:\n\n" }
      ],
      hints: [
        "Step 1 is three lines: `echo \"Spring sale\" > banner.txt`, `git add banner.txt`, `git commit -m \"Spring banner\"`.",
        "Step 2 is the same minus the commit: `echo \"Summer sale\" > banner.txt` then `git add banner.txt`.",
        "Step 3 is one line — `echo \"Autumn sale\" > banner.txt` — and then `git status`."
      ],
      solution: {
        "commands.sh": "# Empty repo. Write text into a file with:  echo \"text\" > banner.txt\n\n# 1) Spring sale → stage → commit \"Spring banner\"\necho \"Spring sale\" > banner.txt\ngit add banner.txt\ngit commit -m \"Spring banner\"\n\n# 2) Summer sale → stage (no commit)\necho \"Summer sale\" > banner.txt\ngit add banner.txt\n\n# 3) Autumn sale (don't stage)\necho \"Autumn sale\" > banner.txt\n\n# 4) Look at all three trees at once:\ngit status\n"
      }
    },

    {
      id: "git-quiz-1",
      title: "Unit 1 quiz: Snapshots & the staging area",
      kind: "quiz", xp: 10,
      brief: "Repositories, the index, and what a commit really is. 80% to pass.",
      questions: [
        { q: "You edit style.css, run `git add style.css`, then edit style.css again. What does your next `git commit` contain?",
          choices: ["Both edits, because the commit reads the file from disk", "Only the first edit — the version that was staged", "Neither edit, since the file changed after staging", "Only the second edit, the latest one on disk"],
          answer: 1, explain: "`git add` copies the file's content *at that moment* into the index, and `git commit` snapshots the index — not the disk. The second edit sits in the working tree until you `git add` again. That's why `git status` can list one file as both staged and not staged." },
        { q: "What is a Git repository, physically?",
          choices: ["A hidden `.git` folder holding all history", "A copy of your project on GitHub's servers", "A compressed backup that git init writes to your home folder", "A list of changed lines that Git replays in order"],
          answer: 0, explain: "The repository is the `.git` directory inside your project: every commit, branch and setting lives there. Your files are a working copy beside it. Delete `.git` and the folder is just a folder again — no history. GitHub is one place you can *copy* a repository to; it isn't the repository." },
        { q: "Your folder has `app.js` (edited) and `secrets.env` (new). You want to commit only app.js. What do you run?",
          choices: ["`git add .` then `git commit -m \"Update app\"`", "`git commit -m \"Update app\"` on its own", "`git add app.js` then `git commit -m \"Update app\"`", "`git commit app.js secrets.env -m \"Update app\"`"],
          answer: 2, explain: "Stage exactly what belongs in the commit, by name. `git add .` would sweep `secrets.env` into the index — and once committed, a secret lives in history even after you delete the file. A bare `git commit` with nothing staged just reports there's nothing to commit." },
        { q: "Right after `git init`, before any commit, what does `git log` do?",
          code: "git init\ngit log",
          lang: "sh",
          choices: ["It prints an empty list and exits normally", "It reports that main has no commits yet", "It lists the files git init created", "It shows one automatic \"Initial commit\""],
          answer: 1, explain: "A new repository has a branch name (`main`) but no commits, so there's nothing to walk: Git says `fatal: your current branch 'main' does not have any commits yet`. `git init` never makes a commit for you — the first snapshot is always yours to take." },
        { q: "Which statement about a commit is true?",
          choices: ["It stores only the lines you changed since the last one", "It records your working tree exactly as it is on disk", "It can be edited later without changing its sha", "It is a full snapshot of the index, plus a parent link"],
          answer: 3, explain: "A commit snapshots the entire index — every tracked file — and records its parent commit. Git computes diffs on demand by comparing two snapshots. Because the sha is computed from all of that content, changing anything about a commit makes a *new* commit with a new sha (you'll see this with `--amend` in Unit 5)." },
        { q: "`git log --oneline` prints `a1b2c3d (HEAD -> main) Add the homepage`. What is `a1b2c3d`?",
          choices: ["The start of the commit's 40-character sha", "A random ID that changes each time you run git log", "The number of lines the commit changed, in hex", "A shortened name for the main branch"],
          answer: 0, explain: "Every commit has a 40-character sha; `--oneline` shows the first 7, which is almost always enough to identify it uniquely — you can type those 7 characters anywhere Git expects a commit. It's stable: the same commit always has the same sha." }
      ]
    }
  ]
});
