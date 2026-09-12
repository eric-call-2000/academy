/* The Command Line & Your Machine — Unit 2: Making and breaking things */
window.CODELAB.addUnit("cli", {
  id: "cli-u2",
  title: "Making and breaking things",
  icon: "🏗️",
  blurb: "Create folders and files, copy and rename them, and delete them — including the part where deleting is permanent and the command line will not ask you twice.",
  cheat: [
    { h: "Creating", lang: "sh", code: "mkdir notes              # one new folder, here\nmkdir -p src/lib/util    # the whole chain, parents included\ntouch README.md          # an empty file (leaves an existing one alone)\ntouch a.txt b.txt c.txt  # several at once", note: "Plain mkdir refuses if the parent is missing, and complains if the folder already exists. `-p` fixes both, which is why scripts use it almost always." },
    { h: "Copying and moving", lang: "sh", code: "cp index.html backup.html      # copy a file\ncp -r src src-backup           # copy a FOLDER and everything in it\nmv draft.md final.md           # rename (there is no rename command)\nmv final.md docs/              # move into a folder\nmv *.md docs/                  # move many, into a folder", note: "Renaming and moving are the same operation: you are giving the file a new path. With more than one source, the last argument has to be a directory that already exists." },
    { h: "Deleting", lang: "sh", code: "rm old.txt          # delete a file\nrm -r build/        # delete a folder and everything inside\nrm -f maybe.txt     # do not complain if it was not there\nrmdir empty/        # only removes a folder that is EMPTY", note: "There is no trash and no undo. rm does not confirm, does not warn, and cannot be reversed. rmdir is the cautious version: it refuses unless the folder is already empty." },
    { h: "The habit that saves you", lang: "sh", code: "ls build/           # look at what you are about to delete\nrm -r build/        # then delete it", note: "Type the ls first with the exact path you are about to pass to rm. If the listing surprises you, you just saved yourself. It costs one second." }
  ],
  lessons: [

    {
      id: "cli-u2-1",
      title: "mkdir, mkdir -p, and touch",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/workspace",
      fs: { "/home/you/workspace/README.md": "# Workspace\n" },
      brief: "Two commands cover everything you'll ever create by hand.\n\n`mkdir name` makes a directory. It is deliberately fussy: if the parent doesn't exist it refuses, and if the directory already exists it complains. Both refusals are there to stop you creating a folder somewhere you didn't mean to.\n\n`mkdir -p a/b/c` switches that off. The `-p` stands for *parents*: it creates every level of the path that's missing, and it stays quiet if the whole thing already exists. That second half is why scripts use `-p` almost always — a setup script that fails the second time you run it is a bad setup script.\n\n`touch name` makes an empty file. If the file already exists, `touch` leaves its contents completely alone. It takes as many names as you want to give it.\n\nBuild the skeleton of a small project.",
      example: { lang: "sh", code: "mkdir src\nmkdir -p src/components/buttons   # makes both levels\ntouch src/index.js\ntouch a.txt b.txt                 # two files, one command\n\nmkdir src/deep/nested\n# mkdir: src/deep/nested: No such file or directory   ← no -p" },
      steps: [
        { text: "Try `mkdir docs/guides` **without** `-p` first, so you can see it refuse.",
          test: "T.expect(T.ran(/^mkdir\\s+docs\\/guides\\/?\\s*$/m), 'Run mkdir docs/guides with no flag');\nT.expect(T.err().indexOf('No such file or directory') !== -1, 'It should fail — docs does not exist yet, and plain mkdir will not invent it');" },
        { text: "Now do it properly with `-p`, creating `docs/guides` in one command.",
          test: "T.expect(T.ran(/^mkdir\\s+-p\\s+docs\\/guides\\/?\\s*$/m), 'Run mkdir -p docs/guides');\nT.expect(T.isDir('/home/you/workspace/docs'), 'docs should exist');\nT.expect(T.isDir('/home/you/workspace/docs/guides'), 'docs/guides should exist');" },
        { text: "Make `src/lib` too, then create the three empty files `src/index.js`, `src/lib/dates.js` and `docs/guides/setup.md`.",
          test: "T.expect(T.isDir('/home/you/workspace/src/lib'), 'src/lib should exist');\nT.eq(T.file('/home/you/workspace/src/index.js'), '', 'src/index.js should exist and be empty');\nT.eq(T.file('/home/you/workspace/src/lib/dates.js'), '', 'src/lib/dates.js should exist and be empty');\nT.eq(T.file('/home/you/workspace/docs/guides/setup.md'), '', 'docs/guides/setup.md should exist and be empty');\nT.expect(T.cmdCount('touch') >= 1, 'Create the files with touch');" },
        { text: "Run `mkdir -p docs/guides` a **second** time to prove it is safe to repeat, and check the README was left untouched.",
          test: "T.expect(T.cmdCount('mkdir') >= 3, 'Run mkdir -p docs/guides again — that is three mkdir commands in total');\nvar again = T.transcript.filter(function (t) { return /^mkdir\\s+-p\\s+docs\\/guides/.test(t.cmd); });\nT.expect(again.length >= 2, 'Run mkdir -p docs/guides twice');\nT.eq(again[1].code, 0, 'The second one should succeed silently — that is what -p buys you');\nT.eq(T.file('/home/you/workspace/README.md'), '# Workspace\\n', 'README.md should still have its original contents');" }
      ],
      files: [
        { name: "commands.sh", content: "# An empty workspace with one README. Build a skeleton:\n#\n#   docs/guides/setup.md\n#   src/index.js\n#   src/lib/dates.js\n\n# 1) Try it WITHOUT -p, and read the error:\n\n# 2) Now with -p:\n\n# 3) Make src/lib, then the three empty files:\n\n\n# 4) Repeat the -p command to show it is safe:\n\n" }
      ],
      hints: [
        "`mkdir docs/guides` fails because `docs` does not exist yet — plain mkdir will only create the last level.",
        "`mkdir -p docs/guides` creates both. Do the same for `src/lib`.",
        "`touch` takes several names at once: `touch src/index.js src/lib/dates.js docs/guides/setup.md`. Then repeat the `mkdir -p docs/guides` line."
      ],
      solution: {
        "commands.sh": "# An empty workspace with one README. Build a skeleton:\n#\n#   docs/guides/setup.md\n#   src/index.js\n#   src/lib/dates.js\n\n# 1) Try it WITHOUT -p, and read the error:\nmkdir docs/guides\n\n# 2) Now with -p:\nmkdir -p docs/guides\n\n# 3) Make src/lib, then the three empty files:\nmkdir -p src/lib\ntouch src/index.js src/lib/dates.js docs/guides/setup.md\n\n# 4) Repeat the -p command to show it is safe:\nmkdir -p docs/guides\n"
      }
    },

    {
      id: "cli-u2-2",
      title: "Copy and move — and why renaming is moving",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/site",
      fs: {
        "/home/you/site/index.html": "<h1>Home</h1>\n",
        "/home/you/site/draft.html": "<h1>About, sort of</h1>\n",
        "/home/you/site/styles/main.css": "body { margin: 0; }\n",
        "/home/you/site/styles/print.css": "@media print { nav { display: none } }\n"
      },
      brief: "`cp` copies. `mv` moves. There is no `rename` command, because renaming *is* moving — you're giving the file a new path, and whether the new path is in the same folder or a different one makes no difference to the shell.\n\n```\nmv draft.html about.html    # same folder, new name → a rename\nmv about.html archive/      # different folder, same name → a move\n```\n\nBoth take a **source** and a **destination**. If the destination is an existing directory, the file goes *into* it, keeping its name. If it isn't, the destination is treated as the new name.\n\nOne asymmetry to remember: `cp` refuses to copy a directory unless you add `-r` (*recursive*). It's a guard rail — copying a folder can mean copying thousands of files, so the shell makes you say you meant it. `mv` needs no such flag, because moving a folder doesn't duplicate anything.\n\nAnd a copy is genuinely independent: change one afterwards and the other doesn't move.",
      example: { lang: "sh", code: "cp index.html index.backup.html   # copy a file\nmv draft.html about.html          # rename it\nmkdir archive\nmv about.html archive/            # move it into a folder\n\ncp styles styles-old\n# cp: -r not specified; omitting directory 'styles'\ncp -r styles styles-old           # this works" },
      steps: [
        { text: "Back up the homepage: copy `index.html` to `index.backup.html`.",
          test: "T.expect(T.ran(/^cp\\s+index\\.html\\s+index\\.backup\\.html\\s*$/m), 'Run cp index.html index.backup.html');\nT.eq(T.file('/home/you/site/index.backup.html'), '<h1>Home</h1>\\n', 'index.backup.html should be a copy');\nT.expect(T.exists('/home/you/site/index.html'), 'cp copies — the original must still be there');" },
        { text: "Rename `draft.html` to `about.html`.",
          test: "T.expect(T.ran(/^mv\\s+draft\\.html\\s+about\\.html\\s*$/m), 'Run mv draft.html about.html');\nT.expect(T.exists('/home/you/site/about.html'), 'about.html should exist');\nT.expect(!T.exists('/home/you/site/draft.html'), 'mv moves — draft.html should be gone');" },
        { text: "Try to copy the `styles` folder to `styles-old` **without** `-r` first, then do it properly.",
          test: "T.expect(T.err().indexOf('-r not specified') !== -1, 'Try cp styles styles-old with no flag first, and read the refusal');\nT.expect(T.ran(/^cp\\s+-r\\s+styles\\s+styles-old\\/?\\s*$/m), 'Then run cp -r styles styles-old');\n/* Step 4 moves this copy into archive/, so accept it in either place. */\nvar here = T.ls('/home/you/site/styles-old'), moved = T.ls('/home/you/site/archive/styles-old');\nT.eq(here.length ? here : moved, ['main.css', 'print.css'], 'The styles-old copy should contain both stylesheets');" },
        { text: "Make an `archive` folder and move the whole `styles-old` **folder** into it — notice `mv` needs no `-r`.",
          test: "T.expect(T.isDir('/home/you/site/archive'), 'Create the archive folder first');\nT.expect(T.ran(/^mv\\s+styles-old\\/?\\s+archive\\/?\\s*$/m), 'Move it with mv styles-old archive');\nT.notTyped(/mv\\s+-r\\b/, 'mv takes no -r — moving a folder does not duplicate anything, so there is nothing to guard against');\nT.eq(T.ls('/home/you/site/archive/styles-old'), ['main.css', 'print.css'], 'archive/styles-old should hold both stylesheets');\nT.expect(!T.exists('/home/you/site/styles-old'), 'styles-old should have moved out of the top folder');\nT.eq(T.ls('/home/you/site/styles'), ['main.css', 'print.css'], 'The original styles folder stays exactly where it was');" }
      ],
      files: [
        { name: "commands.sh", content: "# A small site. Back things up, rename a draft, and tidy.\n\n# 1) Copy index.html to index.backup.html:\n\n# 2) Rename draft.html to about.html:\n\n# 3) Copy the styles folder — try it without -r first:\n\n\n# 4) Make archive/ and move styles-old into it:\n\n\n" }
      ],
      hints: [
        "`cp SOURCE DEST` and `mv SOURCE DEST` — source first, destination second, every time.",
        "`cp styles styles-old` will refuse and tell you why. Add `-r` and run it again.",
        "After `mkdir archive`, it is just `mv styles-old archive`. No `-r`: cp needs it because copying a tree duplicates every file, and mv does not."
      ],
      solution: {
        "commands.sh": "# A small site. Back things up, rename a draft, and tidy.\n\n# 1) Copy index.html to index.backup.html:\ncp index.html index.backup.html\n\n# 2) Rename draft.html to about.html:\nmv draft.html about.html\n\n# 3) Copy the styles folder — try it without -r first:\ncp styles styles-old\ncp -r styles styles-old\n\n# 4) Make archive/ and move styles-old into it:\nmkdir archive\nmv styles-old archive\nls archive\n"
      }
    },

    {
      id: "cli-u2-3",
      title: "rm: no trash, no undo",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/project",
      fs: {
        "/home/you/project/app.js": "console.log('hi');\n",
        "/home/you/project/notes.txt": "keep me\n",
        "/home/you/project/build/bundle.js": "// generated\n",
        "/home/you/project/build/bundle.css": "/* generated */\n",
        "/home/you/project/empty-dir/": null
      },
      brief: "This is the lesson to read carefully, because it's the one that costs people real work.\n\n`rm file` deletes a file. Not to a trash folder — there is no trash folder. Not with a confirmation prompt — there is no prompt. The file is gone, and no command in this course will bring it back.\n\n`rm -r folder` deletes a directory and **everything inside it**, all the way down, without listing what it took.\n\n`rm -f` means *force*: don't complain about files that aren't there. It's genuinely useful in scripts, where \"delete the cache if there is one\" shouldn't fail the whole run. It is also how `rm -rf` — the internet's favourite scary command — gets its reputation, because it silently deletes a whole tree and reports nothing at all.\n\nThe habit that protects you is small: **run `ls` on the exact path first**. If the listing surprises you, you've just saved yourself. It costs one second, and it is what separates people who have lost a day's work from people who haven't.\n\n`rmdir` is the cautious sibling: it removes a directory only if it's already empty, and refuses otherwise. When you *think* something is empty, `rmdir` will tell you if you're wrong instead of taking your word for it.",
      example: { lang: "sh", code: "rm build\n# rm: build: is a directory\nrm -r build          # this works\n\nrm gone.txt\n# rm: gone.txt: No such file or directory\nrm -f gone.txt       # silent, exit code 0\n\nmkdir full\ntouch full/x\nrmdir full\n# rmdir: failed to remove 'full': Directory not empty" },
      steps: [
        { text: "Look before you leap: run `ls build` to see what's in there, **then** delete it. Try `rm build` without a flag first so you see the refusal.",
          test: "T.expect(T.ran(/^ls\\s+build\\/?\\s*$/m), 'Run ls build first — the habit is the lesson');\nT.expect(T.err().indexOf('is a directory') !== -1, 'Then try plain rm build and read the refusal');\nT.expect(T.ran(/^rm\\s+-r\\s+build\\/?\\s*$/m), 'Then delete it with rm -r build');\nT.expect(!T.exists('/home/you/project/build'), 'build should be gone');" },
        { text: "Delete a file that isn't there: run `rm cache.tmp`, see it complain, then run `rm -f cache.tmp` and see it stay quiet.",
          test: "T.expect(T.ran(/^rm\\s+cache\\.tmp\\s*$/m), 'Run rm cache.tmp with no flag');\nT.expect(T.err().indexOf('cache.tmp') !== -1, 'It should complain that cache.tmp does not exist');\nvar forced = T.transcript.filter(function (t) { return /^rm\\s+-f\\s+cache\\.tmp/.test(t.cmd); })[0];\nT.expect(forced, 'Now run rm -f cache.tmp');\nT.eq(forced.code, 0, '-f should exit 0 and say nothing at all');\nT.eq(forced.err, '', '-f should print no error');" },
        { text: "Use `rmdir` on `empty-dir`, which really is empty. Then try `rmdir` on something that isn't, and read what it says.",
          test: "T.expect(T.ran(/^rmdir\\s+empty-dir\\/?\\s*$/m), 'Run rmdir empty-dir');\nT.expect(!T.exists('/home/you/project/empty-dir'), 'empty-dir should be gone');\nT.expect(T.err().indexOf('Directory not empty') !== -1, 'Now try rmdir on a folder with something in it — rmdir refuses rather than guessing');" },
        { text: "Finish clean: `app.js` and `notes.txt` must both survive.",
          test: "T.eq(T.file('/home/you/project/app.js'), \"console.log('hi');\\n\", 'app.js must survive untouched');\nT.eq(T.file('/home/you/project/notes.txt'), 'keep me\\n', 'notes.txt must survive untouched');\nT.notTyped(/rm\\s+(-[rf]+\\s+)*\\*/, 'Do not delete with a bare * here — name what you mean');" }
      ],
      files: [
        { name: "commands.sh", content: "# Clean up this project. app.js and notes.txt must SURVIVE.\n# There is a build/ folder, an empty-dir/, and no cache.tmp.\n\n# 1) Look at build/ first, then try plain rm, then rm -r:\n\n\n\n# 2) rm a file that isn't there, then rm -f the same one:\n\n\n# 3) rmdir the empty folder — then try rmdir on one that isn't:\n\n\n# (mkdir a folder with something in it if you need one to try)\n\n" }
      ],
      hints: [
        "The order for step 1 is `ls build`, then `rm build` (which refuses), then `rm -r build`.",
        "For step 3 you need a non-empty folder to try rmdir on. You can make one: `mkdir full` then `touch full/x`, then `rmdir full`.",
        "Never let a `*` near `rm` in this lesson — name `cache.tmp`, `build` and `empty-dir` explicitly and app.js stays safe."
      ],
      solution: {
        "commands.sh": "# Clean up this project. app.js and notes.txt must SURVIVE.\n# There is a build/ folder, an empty-dir/, and no cache.tmp.\n\n# 1) Look at build/ first, then try plain rm, then rm -r:\nls build\nrm build\nrm -r build\n\n# 2) rm a file that isn't there, then rm -f the same one:\nrm cache.tmp\nrm -f cache.tmp\n\n# 3) rmdir the empty folder — then try rmdir on one that isn't:\nrmdir empty-dir\nmkdir full\ntouch full/x\nrmdir full\n\n# (mkdir a folder with something in it if you need one to try)\nls\n"
      }
    },

    {
      id: "cli-u2-4",
      title: "Project: scaffold a project from nothing",
      kind: "shell", chip: "CLI", xp: 30, mins: 30, project: true,
      cwd: "/home/you",
      fs: { "/home/you/.keep": "" },
      brief: "Every framework ships a `create-something` command that builds a project folder for you. Underneath, all of them are doing exactly what you're about to do by hand — and doing it yourself once means you'll never be confused by the result again.\n\nBuild this, starting from an empty home directory:\n\n```\nrecipes/\n  README.md          \"# Recipes\"\n  .gitignore         \"node_modules/\" then \".env\"\n  src/\n    index.js         \"// entry point\"\n    lib/\n      parse.js       (empty)\n  public/\n    index.html       \"<h1>Recipes</h1>\"\n  tests/\n    index.test.js    (empty)\n  archive/\n    (a copy of the whole src folder, named src-v1)\n```\n\nA few things you already know, used together: `mkdir -p` for the directory chain, `touch` for empty files, `echo \"text\" > file` to write a line (you'll meet `>` properly in Unit 4 — for now, it puts the text in the file), `>>` to add another line, and `cp -r` for the archive copy.\n\nFinish by listing the tree so you can see what you built.",
      example: { lang: "sh", code: "mkdir -p thing/src/lib\necho \"# Thing\" > thing/README.md\necho \"first line\" > notes.txt\necho \"second line\" >> notes.txt   # >> ADDS, > replaces\ncp -r thing/src thing/backup" },
      steps: [
        { text: "Create the whole directory tree: `recipes` with `src/lib`, `public`, `tests` and `archive` inside it.",
          test: "['recipes', 'recipes/src', 'recipes/src/lib', 'recipes/public', 'recipes/tests', 'recipes/archive'].forEach(function (d) {\n  T.expect(T.isDir('/home/you/' + d), 'Missing directory: ' + d);\n});" },
        { text: "Write `recipes/README.md` containing `# Recipes`, and `recipes/public/index.html` containing `<h1>Recipes</h1>`.",
          test: "T.eq(T.file('/home/you/recipes/README.md'), '# Recipes\\n', 'README.md should contain the single line: # Recipes');\nT.eq(T.file('/home/you/recipes/public/index.html'), '<h1>Recipes</h1>\\n', 'public/index.html should contain the single line: <h1>Recipes</h1>');" },
        { text: "Write a two-line `recipes/.gitignore`: `node_modules/` on the first line and `.env` on the second. Use `>` for the first and `>>` for the second.",
          test: "T.eq(T.file('/home/you/recipes/.gitignore'), 'node_modules/\\n.env\\n', 'The .gitignore should be exactly two lines: node_modules/ then .env');\nT.expect(T.typed(/>>\\s*recipes\\/\\.gitignore/), 'Use >> to add the second line rather than rewriting the file');" },
        { text: "Create `src/index.js` containing `// entry point`, plus the two empty files `src/lib/parse.js` and `tests/index.test.js`.",
          test: "T.eq(T.file('/home/you/recipes/src/index.js'), '// entry point\\n', 'src/index.js should contain: // entry point');\nT.eq(T.file('/home/you/recipes/src/lib/parse.js'), '', 'src/lib/parse.js should exist and be empty');\nT.eq(T.file('/home/you/recipes/tests/index.test.js'), '', 'tests/index.test.js should exist and be empty');" },
        { text: "Copy the whole `src` folder into `archive`, named `src-v1`, then list `recipes` to see the result.",
          test: "T.expect(T.isDir('/home/you/recipes/archive/src-v1'), 'archive/src-v1 should be a directory');\nT.eq(T.file('/home/you/recipes/archive/src-v1/index.js'), '// entry point\\n', 'The copy should include index.js with its contents');\nT.eq(T.file('/home/you/recipes/archive/src-v1/lib/parse.js'), '', 'The copy should include lib/parse.js — that needs cp -r');\nT.expect(T.ran(/^ls\\s/m), 'Finish with an ls so you can see what you built');" }
      ],
      files: [
        { name: "commands.sh", content: "# Build the recipes project from an empty home directory.\n#\n#   recipes/\n#     README.md        \"# Recipes\"\n#     .gitignore       \"node_modules/\" then \".env\"\n#     src/index.js     \"// entry point\"\n#     src/lib/parse.js (empty)\n#     public/index.html \"<h1>Recipes</h1>\"\n#     tests/index.test.js (empty)\n#     archive/src-v1/  (a copy of src)\n\n# 1) The directory tree:\n\n\n# 2) README.md and public/index.html:\n\n\n# 3) The two-line .gitignore (> then >>):\n\n\n# 4) src/index.js and the two empty files:\n\n\n# 5) Copy src into archive as src-v1, then look:\n\n\n" }
      ],
      hints: [
        "`mkdir -p` can take several paths at once: `mkdir -p recipes/src/lib recipes/public recipes/tests recipes/archive`. Creating the deepest path creates every level above it.",
        "`echo \"# Recipes\" > recipes/README.md` writes the line. Quote anything containing `<`, `>` or `#` so the shell does not treat it as syntax — `echo \"<h1>Recipes</h1>\" > recipes/public/index.html`.",
        "The archive step is `cp -r recipes/src recipes/archive/src-v1`. Because `archive/src-v1` does not exist yet, that name becomes the copy's name rather than a folder to drop it into."
      ],
      solution: {
        "commands.sh": "# Build the recipes project from an empty home directory.\n#\n#   recipes/\n#     README.md        \"# Recipes\"\n#     .gitignore       \"node_modules/\" then \".env\"\n#     src/index.js     \"// entry point\"\n#     src/lib/parse.js (empty)\n#     public/index.html \"<h1>Recipes</h1>\"\n#     tests/index.test.js (empty)\n#     archive/src-v1/  (a copy of src)\n\n# 1) The directory tree:\nmkdir -p recipes/src/lib recipes/public recipes/tests recipes/archive\n\n# 2) README.md and public/index.html:\necho \"# Recipes\" > recipes/README.md\necho \"<h1>Recipes</h1>\" > recipes/public/index.html\n\n# 3) The two-line .gitignore (> then >>):\necho \"node_modules/\" > recipes/.gitignore\necho \".env\" >> recipes/.gitignore\n\n# 4) src/index.js and the two empty files:\necho \"// entry point\" > recipes/src/index.js\ntouch recipes/src/lib/parse.js recipes/tests/index.test.js\n\n# 5) Copy src into archive as src-v1, then look:\ncp -r recipes/src recipes/archive/src-v1\nls -a recipes\n"
      }
    },

    {
      id: "cli-quiz-2",
      title: "Unit 2 quiz: Making and breaking things",
      kind: "quiz", xp: 10,
      brief: "Creating, copying, moving and the delete that does not come back. 80% to pass.",
      questions: [
        { q: "Why do setup scripts almost always write `mkdir -p build` rather than `mkdir build`?",
          choices: ["Because -p creates the folder faster on large filesystems", "Because plain mkdir fails when the folder already exists, so the script breaks on its second run", "Because plain mkdir cannot create folders inside the current directory", "Because -p sets the permissions a build folder needs"],
          answer: 1, explain: "`-p` does two things: it creates missing parents, and it stays silent when the target already exists. That second half is what makes a script re-runnable — plain `mkdir` would exit non-zero the second time and take the script down with it." },
        { q: "You run `mv report.txt reports/`. `reports` is an existing directory. What happens?",
          choices: ["report.txt is renamed to a file called reports", "The command fails because you cannot move a file into a directory", "report.txt moves into the reports directory, keeping its name", "A copy of report.txt is placed in reports and the original stays"],
          answer: 2, explain: "When the destination is an existing directory, the file goes inside it under its own name. When the destination is not an existing directory, the destination is treated as the new name — which is why renaming and moving are the same command." },
        { q: "`cp styles styles-old` prints `cp: -r not specified; omitting directory 'styles'`. Why does cp insist?",
          choices: ["Because styles-old already exists and would be overwritten", "Because copying a directory can mean copying thousands of files, so it makes you say you meant it", "Because directories can only be copied when they are empty", "Because cp cannot read directories at all without elevated permissions"],
          answer: 1, explain: "It is a guard rail. A stray `cp` of a directory could duplicate an enormous tree, so cp refuses until you add `-r` for recursive. `mv` needs no such flag, because moving a directory does not duplicate anything." },
        { q: "What does `rm -f nothing-here.txt` do when the file genuinely does not exist?",
          code: "rm nothing-here.txt\n# rm: nothing-here.txt: No such file or directory\nrm -f nothing-here.txt\n# ?",
          lang: "sh",
          choices: ["Prints nothing and exits successfully", "Prints the same error but exits 0 anyway", "Creates the file and then removes it, so the result is consistent", "Searches subdirectories for a file with that name and removes any it finds"],
          answer: 0, explain: "`-f` means force: suppress the complaint and report success. That is exactly what a cleanup script wants — \"remove the cache if there is one\" should not fail the run when there isn't one." },
        { q: "You are about to run `rm -r ~/projects/old-site`. What is the one-second habit that protects you?",
          choices: ["Run it twice, so the second run confirms the first worked", "Run `ls ~/projects/old-site` on that exact path first and look at what comes back", "Add -f, so the command cannot fail partway through and leave a mess", "Copy the folder to /tmp first, since /tmp survives a reboot"],
          answer: 1, explain: "Listing the exact path you are about to delete takes a second and catches the typo, the wrong folder and the surprise contents. There is no trash and no undo, so the check before is the only check you get." },
        { q: "`rmdir cache` prints `Directory not empty`. What is rmdir actually for?",
          choices: ["Removing directories only when they are already empty, so it refuses rather than assuming", "Removing directories that rm cannot touch because of permissions", "Emptying a directory while leaving the directory itself in place", "Removing directories more quickly than rm -r can"],
          answer: 0, explain: "`rmdir` is the cautious sibling of `rm -r`: it deletes nothing unless the directory is already empty. When you *think* a folder is empty, rmdir tells you if you are wrong instead of taking your word for it and deleting the contents." }
      ]
    }
  ]
});
