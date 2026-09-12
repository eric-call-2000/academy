/* The Command Line & Your Machine — Unit 5: Globs and finding things */
window.CODELAB.addUnit("cli", {
  id: "cli-u5",
  title: "Globs, quoting, and finding things",
  icon: "✳️",
  blurb: "The shell rewrites your command before any program sees it. Learn what a * really does, when quoting stops it, and how to find a file by name anywhere in a tree.",
  cheat: [
    { h: "Wildcards", lang: "sh", code: "*.txt          # any name ending .txt\nreport-*       # any name starting report-\n?.txt          # exactly ONE character, then .txt\n[ab].txt       # a.txt or b.txt\n[!a].txt       # any single character EXCEPT a\nsrc/*.js       # in a subfolder\nsrc/*/*.js     # one level deeper", note: "A bare * never matches a name starting with a dot. That is why `rm *` spares your .env — and why you have to write `.*` when you do mean the dotfiles." },
    { h: "The shell expands, not the command", lang: "sh", code: "rm *.log\n# what rm actually receives:\n# rm app.log error.log debug.log", note: "This is the whole idea. `rm` has no wildcard support and never sees the star; the SHELL replaces it with a list of names first. Every command gets globbing for free, and none of them implement it." },
    { h: "When nothing matches", lang: "sh", code: "ls *.zzz\n# ls: *.zzz: No such file or directory", note: "If a pattern matches nothing, the shell hands the pattern through unchanged and the command complains about a file with a literal star in its name. Confusing once, obvious forever." },
    { h: "Quoting stops expansion", lang: "sh", code: "echo *.txt        # a.txt b.txt\necho \"*.txt\"      # *.txt\necho '*.txt'      # *.txt\n\nfind . -name \"*.js\"    # QUOTED, so find gets the pattern\nfind . -name *.js      # the shell ate it first", note: "Quote a pattern whenever the PROGRAM should do the matching rather than the shell. find, grep and git all have their own pattern engines, and all three are broken by an unquoted star." },
    { h: "find", lang: "sh", code: "find .                      # everything under here\nfind . -name \"*.log\"        # by name\nfind src -type f            # files only\nfind . -type d              # directories only\nfind . -name \"*.log\" | xargs wc -l", note: "find searches by NAME and by shape; grep searches CONTENTS. \"Where is the file called config?\" is find. \"Which file mentions TAX?\" is grep." }
  ],
  lessons: [

    {
      id: "cli-u5-1",
      title: "The star, and who really expands it",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/reports",
      fs: {
        "/home/you/reports/jan.csv": "north,100\n",
        "/home/you/reports/feb.csv": "north,120\n",
        "/home/you/reports/mar.csv": "north,140\n",
        "/home/you/reports/summary.md": "# Q1\n",
        "/home/you/reports/notes.md": "misc\n",
        "/home/you/reports/.secret": "do not sweep me up\n",
        "/home/you/reports/old/dec.csv": "north,90\n"
      },
      brief: "Here is the single most important idea about the command line, and almost nobody is told it directly.\n\nWhen you type `rm *.log`, **`rm` never sees the star.** The shell expands the pattern *before* running the command, and hands `rm` a finished list of names:\n\n```\nyou type:      rm *.log\nrm receives:   rm app.log error.log debug.log\n```\n\nThat's why every command supports wildcards and none of them implement wildcards. It's one feature, in one place, that all of them get for free.\n\nYou can see it happen with `echo`, which just prints whatever it's given:\n\n```\necho *.csv\n# jan.csv feb.csv mar.csv\n```\n\n`echo` has no idea what a CSV is. The shell replaced the pattern with three names and echo printed them.\n\nThe patterns themselves:\n\n- `*` — **any run of characters**, including none\n- `?` — **exactly one** character\n- `[abc]` — one character from the set; `[!a]` means one character that isn't `a`\n\nAnd one rule that will save your `.env` one day: **a bare `*` never matches a name starting with a dot.** Hidden files are hidden from globs too. You have to write `.*` to mean them.",
      example: { lang: "sh", code: "echo *.csv        # jan.csv feb.csv mar.csv\necho *.md         # summary.md notes.md\necho ???.csv      # jan.csv feb.csv mar.csv  (3 letters)\necho [jf]*.csv    # jan.csv feb.csv\necho *            # everything EXCEPT .secret" },
      steps: [
        { text: "Watch the shell work. Use `echo` to print what `*.csv` expands to.",
          test: "T.expect(T.ran(/^echo\\s+\\*\\.csv\\s*$/m), 'Run echo *.csv');\nvar e = T.transcript.filter(function (t) { return /^echo\\s+\\*\\.csv\\s*$/.test(t.cmd); })[0];\nT.eq(e.out, 'feb.csv jan.csv mar.csv\\n', 'echo should print the three names, alphabetically — it never saw a star at all');" },
        { text: "Show that a bare `*` skips hidden names: `echo *` should not mention `.secret`.",
          test: "T.expect(T.ran(/^echo\\s+\\*\\s*$/m), 'Run echo *');\nvar e = T.transcript.filter(function (t) { return /^echo\\s+\\*\\s*$/.test(t.cmd); })[0];\nT.expect(e.out.indexOf('.secret') === -1, 'A bare * must not sweep up .secret — this is what protects your dotfiles');\nT.expect(e.out.indexOf('jan.csv') !== -1 && e.out.indexOf('old') !== -1, 'It should still list everything visible, including the old directory');" },
        { text: "Use `?` and a set. Print the names matching `???.csv`, then the ones matching `[jm]*.csv`.",
          test: "T.expect(T.ran(/^echo\\s+\\?\\?\\?\\.csv\\s*$/m), 'Run echo ???.csv — three single-character wildcards');\nvar q = T.transcript.filter(function (t) { return /\\?\\?\\?\\.csv/.test(t.cmd); })[0];\nT.eq(q.out, 'feb.csv jan.csv mar.csv\\n', 'All three names are exactly three letters plus .csv');\nT.expect(T.ran(/^echo\\s+\\[jm\\]\\*\\.csv\\s*$/m), 'Run echo [jm]*.csv');\nvar b = T.transcript.filter(function (t) { return /\\[jm\\]/.test(t.cmd); })[0];\nT.eq(b.out, 'jan.csv mar.csv\\n', '[jm] means one character, either j or m — so jan and mar, not feb');" },
        { text: "Now use one on a real command: copy every `.csv` into the `old` folder in a single `cp`.",
          test: "T.expect(T.ran(/^cp\\s+\\*\\.csv\\s+old\\/?\\s*$/m), 'Run cp *.csv old');\nT.eq(T.ls('/home/you/reports/old'), ['dec.csv', 'feb.csv', 'jan.csv', 'mar.csv'], 'old should now hold dec.csv plus the three you copied');\nT.expect(T.exists('/home/you/reports/jan.csv'), 'cp copies — the originals stay put');\nT.expect(T.file('/home/you/reports/.secret') !== null, '.secret must be untouched');" }
      ],
      files: [
        { name: "commands.sh", content: "# Three CSVs, two MDs, a hidden .secret, and an old/ folder.\n\n# 1) What does *.csv expand to? Ask echo:\n\n# 2) Does a bare * include .secret?\n\n# 3) Try ??? and a [set]:\n\n\n# 4) Copy every CSV into old/ with ONE cp:\n\nls old\n" }
      ],
      hints: [
        "`echo *.csv` prints the expansion. echo is the easiest way to see what the shell is about to hand a command.",
        "`echo *` on its own lists everything visible — and deliberately misses `.secret`, because a bare star never matches a leading dot.",
        "`echo ???.csv` and `echo [jm]*.csv`. Then `cp *.csv old` — one command, because the shell turns the star into three names before cp runs."
      ],
      solution: {
        "commands.sh": "# Three CSVs, two MDs, a hidden .secret, and an old/ folder.\n\n# 1) What does *.csv expand to? Ask echo:\necho *.csv\n\n# 2) Does a bare * include .secret?\necho *\n\n# 3) Try ??? and a [set]:\necho ???.csv\necho [jm]*.csv\n\n# 4) Copy every CSV into old/ with ONE cp:\ncp *.csv old\nls old\n"
      }
    },

    {
      id: "cli-u5-2",
      title: "Quoting: telling the shell to keep its hands off",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/site",
      fs: {
        "/home/you/site/app.js": "// app\n",
        "/home/you/site/util.js": "// util\n",
        "/home/you/site/src/deep/hidden.js": "// deep\n",
        "/home/you/site/README.md": "# Site\n"
      },
      brief: "Now that you know the shell expands patterns before the command runs, the obvious question follows: **what if you didn't want it to?**\n\nSometimes the star is meant for the *program*, not the shell. `find`, `grep` and `git` all have their own pattern matching, and all three are broken by a star the shell ate first. The classic:\n\n```\nfind . -name *.js\n```\n\nThe shell sees `*.js`, finds `app.js` and `util.js` sitting right there, and rewrites your command as `find . -name app.js util.js` — which is not what you typed and not what you meant. `find` never gets the chance to search for the pattern, and you get a confusing error or a wrong answer.\n\nQuoting fixes it:\n\n```\nfind . -name \"*.js\"\n```\n\nNow the shell hands `*.js` through untouched and `find` does the matching — across the whole tree, including folders where nothing matched at the top level.\n\n**Single vs. double quotes.** Both stop globbing. The difference is variables: `\"$HOME\"` expands, `'$HOME'` doesn't. Unit 6 leans on that; for globs either quote works.\n\nAnd the rule of thumb worth memorising: **if the pattern is for a program, quote it. If it's for the shell, don't.**",
      example: { lang: "sh", code: "echo *.js            # app.js util.js     ← shell expanded\necho \"*.js\"          # *.js               ← quoted, literal\n\nfind . -name *.js    # shell ate the pattern first\nfind . -name \"*.js\"  # find gets the pattern, searches everywhere" },
      steps: [
        { text: "Show the two behaviours side by side: `echo *.js`, then `echo \"*.js\"`.",
          test: "var bare = T.transcript.filter(function (t) { return /^echo\\s+\\*\\.js\\s*$/.test(t.cmd); })[0];\nT.expect(bare, 'Run echo *.js unquoted');\nT.eq(bare.out, 'app.js util.js\\n', 'Unquoted, the shell expands it to the two .js files here');\nvar quoted = T.transcript.filter(function (t) { return /^echo\\s+[\"']\\*\\.js[\"']\\s*$/.test(t.cmd); })[0];\nT.expect(quoted, 'Now run echo \"*.js\" with quotes');\nT.eq(quoted.out, '*.js\\n', 'Quoted, the star survives and echo prints it literally');" },
        { text: "Run `find . -name *.js` **unquoted** and look at what comes back — it misses the deep file.",
          test: "T.expect(T.ran(/^find\\s+\\.\\s+-name\\s+\\*\\.js\\s*$/m), 'Run find . -name *.js with no quotes');\nvar f = T.transcript.filter(function (t) { return /^find\\s+\\.\\s+-name\\s+\\*\\.js\\s*$/.test(t.cmd); })[0];\nT.expect(f.out.indexOf('hidden.js') === -1, 'The shell replaced the pattern with the two top-level names, so find never looked deeper — src/deep/hidden.js is missing');" },
        { text: "Now quote it, and watch `find` reach the whole tree.",
          test: "T.expect(T.ran(/^find\\s+\\.\\s+-name\\s+[\"']\\*\\.js[\"']\\s*$/m), 'Run find . -name \"*.js\" with quotes');\nvar f = T.transcript.filter(function (t) { return /^find\\s+\\.\\s+-name\\s+[\"']/.test(t.cmd); })[0];\nT.eq(f.out, './app.js\\n./src/deep/hidden.js\\n./util.js\\n', 'Quoted, find does the matching itself and finds all three, including the deep one');" },
        { text: "Finally, create a file whose name genuinely contains a space, and prove quoting is what makes that possible.",
          test: "T.expect(T.exists('/home/you/site/my notes.txt'), 'Create a file called: my notes.txt');\nT.expect(T.typed(/[\"']my notes\\.txt[\"']|my\\\\ notes\\.txt/), 'The name has a space in it, so it must be quoted (or the space escaped with a backslash) — otherwise touch sees two arguments');\nT.expect(!T.exists('/home/you/site/my'), 'If a file called just my appeared, the space was not protected');" }
      ],
      files: [
        { name: "commands.sh", content: "# app.js and util.js are here; src/deep/hidden.js is not.\n\n# 1) Unquoted, then quoted:\n\n\n# 2) find with an UNQUOTED pattern — what is missing?\n\n# 3) find with the pattern quoted:\n\n# 4) Make a file whose name contains a space:\n\nls\n" }
      ],
      hints: [
        "`echo *.js` then `echo \"*.js\"`. The first is expanded by the shell; the second is not.",
        "`find . -name *.js` versus `find . -name \"*.js\"` — run both and compare the output line by line.",
        "A space normally separates arguments, so `touch my notes.txt` would make two files. Quote it: `touch \"my notes.txt\"`."
      ],
      solution: {
        "commands.sh": "# app.js and util.js are here; src/deep/hidden.js is not.\n\n# 1) Unquoted, then quoted:\necho *.js\necho \"*.js\"\n\n# 2) find with an UNQUOTED pattern — what is missing?\nfind . -name *.js\n\n# 3) find with the pattern quoted:\nfind . -name \"*.js\"\n\n# 4) Make a file whose name contains a space:\ntouch \"my notes.txt\"\nls\n"
      }
    },

    {
      id: "cli-u5-3",
      title: "find: locating a file anywhere in a tree",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/shop",
      fs: {
        "/home/you/shop/package.json": "{ \"name\": \"shop\" }\n",
        "/home/you/shop/src/index.js": "// entry\n",
        "/home/you/shop/src/cart.js": "// cart\n",
        "/home/you/shop/src/lib/money.js": "// money\n",
        "/home/you/shop/src/lib/config.json": "{ \"tax\": 0.07 }\n",
        "/home/you/shop/tests/cart.test.js": "// test\n",
        "/home/you/shop/build/bundle.js": "// generated\n",
        "/home/you/shop/build/cache/old.js": "// stale\n"
      },
      brief: "`grep` searches inside files. `find` searches **for** files — by name, and by what they are.\n\n```\nfind . -name \"config.json\"\n```\n\nIt walks the whole tree below the directory you give it and prints every path that matches. Notice how it prints them: `./src/lib/config.json`, shaped exactly like the starting point you gave it. Say `find src` and you get `src/lib/config.json`. That leading form matters, because people match on it constantly.\n\nTwo pieces do most of the work:\n\n- `-name \"pattern\"` — match the **file name**, with the same wildcards you already know. **Quote it**, for the reason Unit 5 lesson 2 just showed you.\n- `-type f` / `-type d` — only **files**, or only **directories**. `find . -type d` is a quick map of a project's shape.\n\nAnd `find` pairs with `xargs`, which turns a list of names on stdin into arguments for another command:\n\n```\nfind . -name \"*.js\" | xargs wc -l\n```\n\n*Find every JavaScript file, then count the lines in all of them.* `find` names them; `xargs` does something to each.\n\nWhen do you reach for which? **\"Where is the file called config?\"** is `find`. **\"Which file mentions TAX?\"** is `grep -r`.",
      example: { lang: "sh", code: "find . -name \"config.json\"\n# ./src/lib/config.json\n\nfind src -type f          # every file under src\nfind . -type d            # the folder structure\nfind . -name \"*.js\" | xargs wc -l" },
      steps: [
        { text: "Find `config.json` — you don't know where it lives.",
          test: "T.expect(T.ran(/^find\\s+\\.\\s+-name\\s+[\"']?config\\.json[\"']?\\s*$/m), 'Run find . -name \"config.json\"');\nT.expect(T.printed('./src/lib/config.json'), 'It should report ./src/lib/config.json — note the leading ./ , matching the . you started from');" },
        { text: "Map the project's shape: list only the **directories**.",
          test: "T.expect(T.ran(/^find\\s+\\.\\s+-type\\s+d\\s*$/m), 'Run find . -type d');\nvar d = T.transcript.filter(function (t) { return /-type\\s+d/.test(t.cmd); })[0];\nT.eq(d.out, '.\\n./build\\n./build/cache\\n./src\\n./src/lib\\n./tests\\n', 'You should get the six directories, starting with . itself');" },
        { text: "List only the **files** under `src` — three of them, at two different depths.",
          test: "T.expect(T.ran(/^find\\s+src\\s+-type\\s+f\\s*$/m), 'Run find src -type f');\nvar f = T.transcript.filter(function (t) { return /^find\\s+src\\s+-type\\s+f/.test(t.cmd); })[0];\nT.eq(f.out, 'src/cart.js\\nsrc/index.js\\nsrc/lib/config.json\\nsrc/lib/money.js\\n', 'Four files under src — and note the paths start with src, not ./src, because that is how you named the start');" },
        { text: "Now combine: find every `.js` file in the project and count the lines in all of them, using `xargs`.",
          test: "T.expect(T.ran(/find\\s+\\.\\s+-name\\s+[\"']\\*\\.js[\"']\\s*\\|\\s*xargs\\s+wc\\s+-l/), 'Run find . -name \"*.js\" | xargs wc -l — remember to quote the pattern');\nvar x = T.transcript.filter(function (t) { return /xargs/.test(t.cmd); })[0];\nT.expect(x.out.indexOf('./build/cache/old.js') !== -1, 'It should reach ./build/cache/old.js, two levels down');\nT.expect(x.out.indexOf('total') !== -1, 'wc counted several files, so it should end with a total row');" }
      ],
      files: [
        { name: "commands.sh", content: "# A shop project. You do not know where anything is.\n\n# 1) Where is config.json?\n\n# 2) Just the directories, to see the shape:\n\n# 3) Just the files under src:\n\n# 4) Every .js file, line-counted, via xargs:\n\n" }
      ],
      hints: [
        "`find . -name \"config.json\"` — the dot is where to start looking, and the quoted name is what to look for.",
        "`-type d` for directories, `-type f` for files. `find src -type f` starts from src rather than from here.",
        "`find . -name \"*.js\" | xargs wc -l` — find writes the names, the pipe carries them, and xargs turns them into arguments for wc."
      ],
      solution: {
        "commands.sh": "# A shop project. You do not know where anything is.\n\n# 1) Where is config.json?\nfind . -name \"config.json\"\n\n# 2) Just the directories, to see the shape:\nfind . -type d\n\n# 3) Just the files under src:\nfind src -type f\n\n# 4) Every .js file, line-counted, via xargs:\nfind . -name \"*.js\" | xargs wc -l\n"
      }
    },

    {
      id: "cli-u5-4",
      title: "Project: tidy a downloads folder and report on it",
      kind: "shell", chip: "CLI", xp: 30, mins: 30, project: true,
      cwd: "/home/you/Downloads",
      fs: {
        "/home/you/Downloads/invoice-jan.pdf": "%PDF jan\n",
        "/home/you/Downloads/invoice-feb.pdf": "%PDF feb\n",
        "/home/you/Downloads/receipt.pdf": "%PDF receipt\n",
        "/home/you/Downloads/holiday.jpg": "JFIF 1\n",
        "/home/you/Downloads/screenshot.png": "PNG 1\n",
        "/home/you/Downloads/avatar.png": "PNG 2\n",
        "/home/you/Downloads/notes.txt": "misc notes\n",
        "/home/you/Downloads/todo.txt": "things\n",
        "/home/you/Downloads/.DS_Store": "junk\n",
        "/home/you/Downloads/access.log": "GET / 200\nGET /a 404\nGET / 200\nPOST /b 500\nGET /a 404\nGET / 200\nGET /c 404\nPOST /b 500\nGET /d 200\n"
      },
      brief: "A real downloads folder, in the state real downloads folders are in. Sort it out with globs, then produce a report — using everything from Units 3, 4 and 5 together.\n\n**Part one: tidy.** Make three folders — `pdfs`, `images`, `text` — and move each kind of file into the right one with a single `mv` per kind. Images means both `.jpg` and `.png`, which is one glob if you pick the right one, or two `mv` commands if you'd rather. Leave `access.log` and `.DS_Store` where they are.\n\n**Part two: report.** Write a file called `report.txt` containing exactly three lines:\n\n```\npdfs 3\nimages 3\ntext 2\n```\n\nCount them rather than typing the numbers — `ls pdfs | wc -l` gives you a count, and you can build each line with `echo`.\n\n**Part three: analyse the log.** `access.log` has a status code in the third column. Write the counted, most-common-first breakdown into `codes.txt`, the same pipeline you built in Unit 4.\n\nA gentle warning worth taking seriously: a stray `mv * something` would sweep up your new folders too. Name your patterns precisely.",
      example: { lang: "sh", code: "mkdir pdfs\nmv *.pdf pdfs\n\necho \"pdfs $(ls pdfs | wc -l)\" > report.txt   # not supported here\n\n# Instead, count first and read it, then write the line:\nls pdfs | wc -l\necho \"pdfs 3\" > report.txt" },
      steps: [
        { text: "Make the three folders `pdfs`, `images` and `text`.",
          test: "['pdfs', 'images', 'text'].forEach(function (d) {\n  T.expect(T.isDir('/home/you/Downloads/' + d), 'Missing folder: ' + d);\n});" },
        { text: "Move the three PDFs into `pdfs` with a glob, and both image kinds into `images`.",
          test: "T.eq(T.ls('/home/you/Downloads/pdfs'), ['invoice-feb.pdf', 'invoice-jan.pdf', 'receipt.pdf'], 'pdfs should hold all three PDFs');\nT.eq(T.ls('/home/you/Downloads/images'), ['avatar.png', 'holiday.jpg', 'screenshot.png'], 'images should hold the jpg and both pngs');\nT.expect(T.typed(/mv\\s+\\*\\.pdf/), 'Move the PDFs with a glob rather than naming them one by one');" },
        { text: "Move the two `.txt` files into `text`. Afterwards, `access.log` and `.DS_Store` must still be sitting in `Downloads`.",
          test: "T.eq(T.ls('/home/you/Downloads/text'), ['notes.txt', 'todo.txt'], 'text should hold notes.txt and todo.txt');\nT.expect(T.file('/home/you/Downloads/access.log') !== null, 'access.log must stay put');\nT.expect(T.file('/home/you/Downloads/.DS_Store') !== null, '.DS_Store must stay put — a bare * never touches it anyway');\nT.eq(T.ls('/home/you/Downloads').filter(function (n) { return n.indexOf('.') === 0; }), ['.DS_Store'], 'Nothing hidden should have moved');" },
        { text: "Write the three-line `report.txt`, counting each folder rather than guessing.",
          test: "T.eq(T.file('/home/you/Downloads/report.txt'), 'pdfs 3\\nimages 3\\ntext 2\\n', 'report.txt should be exactly three lines: pdfs 3, images 3, text 2');\nT.expect(T.cmdCount('wc') >= 1, 'Use wc -l to count at least one of the folders rather than only typing numbers');" },
        { text: "Analyse the log: write the counted status codes, most common first, into `codes.txt`.",
          test: "T.eq(T.file('/home/you/Downloads/codes.txt'), '   4 200\\n   3 404\\n   2 500\\n', 'codes.txt should hold the counts, most common first: 4 of 200, 3 of 404, 2 of 500');\nT.expect(T.typed(/cut[\\s\\S]*\\|[\\s\\S]*sort/), 'Build it as a pipeline — cut the column, sort, uniq -c, sort -rn');" }
      ],
      files: [
        { name: "commands.sh", content: "# A messy Downloads folder. Tidy it, then report on it.\n#\n# pdfs/   the three .pdf files\n# images/ the .jpg and both .png files\n# text/   the two .txt files\n# access.log and .DS_Store stay where they are.\n\n# 1) The three folders:\n\n\n# 2) Move the PDFs, then the images:\n\n\n\n# 3) Move the text files:\n\n\n# 4) Count each folder, then write report.txt:\n\n\n\n\n# 5) The status-code breakdown into codes.txt:\n\n\ncat report.txt\ncat codes.txt\n" }
      ],
      hints: [
        "`mkdir pdfs images text` makes all three at once. Then `mv *.pdf pdfs`.",
        "For the images you can do it in two moves (`mv *.jpg images` and `mv *.png images`) or one, since `*.[jp]*` matches both — two moves is clearer.",
        "Count with `ls pdfs | wc -l`, read the number off the terminal, then write the line: `echo \"pdfs 3\" > report.txt`, `echo \"images 3\" >> report.txt`, `echo \"text 2\" >> report.txt`. The log pipeline is `cut -d\" \" -f3 access.log | sort | uniq -c | sort -rn > codes.txt`."
      ],
      solution: {
        "commands.sh": "# A messy Downloads folder. Tidy it, then report on it.\n#\n# pdfs/   the three .pdf files\n# images/ the .jpg and both .png files\n# text/   the two .txt files\n# access.log and .DS_Store stay where they are.\n\n# 1) The three folders:\nmkdir pdfs images text\n\n# 2) Move the PDFs, then the images:\nmv *.pdf pdfs\nmv *.jpg images\nmv *.png images\n\n# 3) Move the text files:\nmv *.txt text\n\n# 4) Count each folder, then write report.txt:\nls pdfs | wc -l\nls images | wc -l\nls text | wc -l\necho \"pdfs 3\" > report.txt\necho \"images 3\" >> report.txt\necho \"text 2\" >> report.txt\n\n# 5) The status-code breakdown into codes.txt:\ncut -d\" \" -f3 access.log | sort | uniq -c | sort -rn > codes.txt\n\ncat report.txt\ncat codes.txt\n"
      }
    },

    {
      id: "cli-quiz-5",
      title: "Unit 5 quiz: Globs, quoting and find",
      kind: "quiz", xp: 10,
      brief: "Who expands the star, when to stop them, and finding a file by name. 80% to pass.",
      questions: [
        { q: "You run `rm *.log` in a folder holding app.log and error.log. What does the rm program actually receive?",
          choices: ["The pattern *.log, which rm then matches against the folder", "Two arguments: app.log and error.log", "A single argument containing both names joined by a comma", "Nothing — the shell deletes the files itself and never calls rm"],
          answer: 1, explain: "The shell expands the pattern first and hands rm a finished list of names. rm contains no wildcard code at all, which is precisely why every command supports globs: it is one feature in one place that all of them inherit." },
        { q: "Your folder contains `.env` and `notes.txt`. You run `rm *`. What is left?",
          choices: [".env, because a bare * never matches a leading dot", "Nothing at all, since * means everything", "notes.txt, because rm skips files it did not create", "Both files, because rm refuses a bare * without -f"],
          answer: 0, explain: "A bare `*` deliberately skips names beginning with a dot. It is the rule that keeps `rm *` from destroying your configuration, and the reason you must write `.*` when you really do mean the dotfiles." },
        { q: "`find . -name *.js` returns the wrong answer, but `find . -name \"*.js\"` works. What went wrong in the first one?",
          code: "find . -name *.js\nfind . -name \"*.js\"",
          lang: "sh",
          choices: ["find cannot read patterns unless they are quoted strings", "The shell expanded *.js into local file names before find ran", "The unquoted version searches only the current directory by design", "Quotes make find search recursively; without them it does not"],
          answer: 1, explain: "The shell got there first and rewrote the command using the .js files sitting in the current folder, so find was handed names instead of a pattern and never searched deeper. Quoting hands the pattern through untouched so find can do its own matching." },
        { q: "You want to find where a function named `calculateTax` is defined in an unfamiliar project. Which tool?",
          choices: ["find, because it walks the whole tree", "grep -r, because the name is inside a file rather than a file name", "ls -R, because it shows every level at once", "wc -l, to find the file large enough to contain it"],
          answer: 1, explain: "find matches file NAMES; grep searches file CONTENTS. No file is called calculateTax — the text is inside one, so `grep -rn calculateTax .` is the tool. The two are complementary and confusing them wastes a lot of time." },
        { q: "In a folder holding only `a.txt` and `bb.txt`, what does `echo ?.txt` print?",
          choices: ["a.txt bb.txt", "a.txt", "?.txt", "bb.txt"],
          answer: 1, explain: "`?` matches exactly one character, so it matches `a.txt` and not `bb.txt`, whose name is two characters before the dot. `*` would have matched both, since it stands for any run of characters including none." },
        { q: "You run `ls *.zzz` in a folder with no .zzz files. Why does the error mention a file literally called `*.zzz`?",
          choices: ["Because ls creates a placeholder file when a pattern fails", "Because a pattern matching nothing is passed through unchanged, so ls looks for that exact name", "Because the shell escapes unmatched patterns before passing them on", "Because ls interprets the star itself and could not find a match"],
          answer: 1, explain: "When a glob matches nothing, the shell gives up and hands the pattern to the command as ordinary text. ls then looks for a file whose name really is `*.zzz`, does not find one, and says so. Confusing exactly once." }
      ]
    }
  ]
});
