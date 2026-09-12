/* The Command Line & Your Machine — Unit 3: Reading files without an editor */
window.CODELAB.addUnit("cli", {
  id: "cli-u3",
  title: "Reading files without an editor",
  icon: "🔎",
  blurb: "Print a file, take just the top or the bottom of it, count what's in it, and find the one line that matters in a file far too long to read.",
  cheat: [
    { h: "Printing", lang: "sh", code: "cat notes.txt          # print the whole file\ncat -n notes.txt       # ...with line numbers\ncat a.txt b.txt        # both, one after the other\nless big.log           # page through something huge", note: "cat is short for concatenate — printing one file is just the boring case. On a 40,000-line log, cat floods your terminal and less is what you want." },
    { h: "Just the ends", lang: "sh", code: "head app.log           # first 10 lines\nhead -n 3 app.log      # first 3\ntail app.log           # last 10 lines\ntail -n 50 app.log     # last 50", note: "tail is the one you reach for on a log: the newest lines are at the bottom, so the end of the file is the part that just happened." },
    { h: "Counting", lang: "sh", code: "wc -l users.csv        # how many lines\nwc -w essay.txt        # how many words\nwc -c photo.b64        # how many characters\nwc -l *.js             # each file, plus a total", note: "wc -l is the fastest honest answer to \"how big is this?\" — and counting lines of a filtered list is how you count anything at all." },
    { h: "Finding a line", lang: "sh", code: "grep ERROR app.log        # lines containing ERROR\ngrep -i error app.log     # ignore case\ngrep -n ERROR app.log     # show line numbers\ngrep -v DEBUG app.log     # lines that do NOT match\ngrep -c ERROR app.log     # just the count", note: "grep prints matching lines and exits 0; it exits 1 when nothing matched. That exit code is what makes grep useful inside scripts, and Unit 4 puts it to work." },
    { h: "Searching a whole project", lang: "sh", code: "grep -r TODO src          # every file under src\ngrep -rn TODO src         # ...with file:line prefixes\ngrep -rl TODO .           # just the FILE NAMES that match", note: "`grep -rn` in the root of a project you have never seen is the fastest way to find where something is defined. -l when you only want to know which files to open." }
  ],
  lessons: [

    {
      id: "cli-u3-1",
      title: "cat: printing a file",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/notes",
      fs: {
        "/home/you/notes/todo.md": "- buy milk\n- fix the build\n- call the bank\n",
        "/home/you/notes/ideas.md": "- a CLI course\n- a better todo app\n",
        "/home/you/notes/config.json": "{\n  \"theme\": \"dark\",\n  \"fontSize\": 14\n}\n"
      },
      brief: "`cat` prints a file to your terminal. That's it — and it's probably the command you'll type most after `ls`.\n\nThe name is short for **concatenate**, which tells you what it's really for: give it several files and it prints them one after another, joined into a single stream. Printing one file is just the boring case of that.\n\n`cat -n` numbers the lines, which matters more than it sounds. When an error says *\"unexpected token at line 14\"*, `cat -n` is how you find line 14 without opening anything.\n\nOne honest warning: `cat` on a 40,000-line log dumps all 40,000 lines into your terminal and you'll never scroll back to the top. That's what `less` is for — it pages through a file a screen at a time. In this sandbox everything fits on one screen, so `less` prints like `cat` does; on your real machine it's the one to reach for when a file is big.",
      example: { lang: "sh", code: "cat todo.md\n# - buy milk\n# - fix the build\n# - call the bank\n\ncat -n todo.md\n#      1\t- buy milk\n#      2\t- fix the build\n\ncat todo.md ideas.md    # both files, joined" },
      steps: [
        { text: "Print `todo.md`.",
          test: "T.expect(T.ran(/^cat\\s+todo\\.md\\s*$/m), 'Run cat todo.md');\nT.expect(T.printed('- fix the build'), 'The output should include the line: - fix the build');" },
        { text: "Print `config.json` **with line numbers**, so you could find a line by number.",
          test: "T.expect(T.ran(/^cat\\s+-n\\s+config\\.json\\s*$/m), 'Run cat -n config.json');\nT.expect(/2\\t\\s*\"theme\": \"dark\"/.test(T.out()), 'The numbered output should show \"theme\": \"dark\" as line 2');" },
        { text: "Now use `cat` for what it's named after: print `todo.md` and `ideas.md` together, in that order, with one command.",
          test: "T.expect(T.ran(/^cat\\s+todo\\.md\\s+ideas\\.md\\s*$/m), 'Run cat todo.md ideas.md — one command, two files');\nT.expect(T.printed('- call the bank\\n- a CLI course'), 'The two files should run straight into each other: the last line of todo.md, then the first of ideas.md');" },
        { text: "Page through `todo.md` with `less` — the command you would use if this file had 40,000 lines.",
          test: "T.expect(T.ran(/^less\\s+todo\\.md\\s*$/m), 'Run less todo.md');\nT.expect(T.printed('- buy milk'), 'It prints here because everything fits on one screen — on a big file it would page');" }
      ],
      files: [
        { name: "commands.sh", content: "# Three small files. Read them.\n\n# 1) Print todo.md:\n\n# 2) Print config.json with line numbers:\n\n# 3) Print todo.md and ideas.md together, one command:\n\n# 4) Page through todo.md with less:\n\n" }
      ],
      hints: [
        "`cat todo.md` — the command, then the file name.",
        "The flag for numbering is `-n`, so `cat -n config.json`.",
        "`cat` takes as many file names as you like: `cat todo.md ideas.md` prints them in the order you name them."
      ],
      solution: {
        "commands.sh": "# Three small files. Read them.\n\n# 1) Print todo.md:\ncat todo.md\n\n# 2) Print config.json with line numbers:\ncat -n config.json\n\n# 3) Print todo.md and ideas.md together, one command:\ncat todo.md ideas.md\n\n# 4) Page through todo.md with less:\nless todo.md\n"
      }
    },

    {
      id: "cli-u3-2",
      title: "head, tail and wc: the ends, and the size",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/logs",
      fs: {
        "/home/you/logs/app.log": "boot: starting\nboot: config loaded\ndb: connected\nGET /  200\nGET /about  200\nGET /missing  404\nPOST /login  200\nGET /missing  404\ndb: slow query 1400ms\nERROR: payment gateway timeout\nGET /  200\nshutdown: clean\n",
        "/home/you/logs/users.csv": "id,name,plan\n1,ada,pro\n2,grace,free\n3,alan,pro\n"
      },
      brief: "Most files you meet on a server are too long to read and you only want one end of them.\n\n`head file` prints the **first** 10 lines. `tail file` prints the **last** 10. Both take `-n N` to change the number.\n\nOf the two, `tail` is the one you'll live in, because logs are written top to bottom: the end of the file is what just happened. \"Why did the deploy fail?\" is nearly always answered by `tail -n 50` on a log.\n\n`wc` — *word count* — counts things:\n\n- `wc -l` counts **lines**, and it's the one you'll use ninety percent of the time\n- `wc -w` counts words\n- `wc -c` counts characters\n\nWith no flag it prints all three at once, in that order. With more than one file it counts each and adds a total.\n\nThe reason `wc -l` matters so much comes in the next lesson: once you can filter a file down to just the interesting lines, counting them answers questions like *\"how many 404s did we serve?\"*",
      example: { lang: "sh", code: "head -n 3 app.log\n# boot: starting\n# boot: config loaded\n# db: connected\n\ntail -n 2 app.log\n# GET /  200\n# shutdown: clean\n\nwc -l app.log\n# 12 app.log\n\nwc users.csv\n# 4 4 42 users.csv    ← lines, words, characters" },
      steps: [
        { text: "Print the **first 3** lines of `app.log` — the boot sequence.",
          test: "T.expect(T.ran(/^head\\s+-n\\s*3\\s+app\\.log\\s*$/m), 'Run head -n 3 app.log');\nvar h = T.transcript.filter(function (t) { return /^head/.test(t.cmd); })[0];\nT.eq(h.out, 'boot: starting\\nboot: config loaded\\ndb: connected\\n', 'You should get exactly the three boot lines');" },
        { text: "Print the **last 2** lines — what happened most recently.",
          test: "T.expect(T.ran(/^tail\\s+-n\\s*2\\s+app\\.log\\s*$/m), 'Run tail -n 2 app.log');\nvar t2 = T.transcript.filter(function (t) { return /^tail/.test(t.cmd); })[0];\nT.eq(t2.out, 'GET /  200\\nshutdown: clean\\n', 'The last two lines are the GET / and the clean shutdown');" },
        { text: "Count the **lines** in `app.log`.",
          test: "T.expect(T.ran(/^wc\\s+-l\\s+app\\.log\\s*$/m), 'Run wc -l app.log');\nT.expect(T.printed('12 app.log'), 'app.log has 12 lines, so the output is: 12 app.log');" },
        { text: "Run `wc` on `users.csv` with **no flag** to see all three counts, then count the lines of **both** files at once so you get a total.",
          test: "T.expect(T.ran(/^wc\\s+users\\.csv\\s*$/m), 'Run wc users.csv with no flag');\nT.expect(/4 4 \\d+ users\\.csv/.test(T.out()), 'With no flag wc prints lines, then words, then characters');\nT.expect(T.ran(/^wc\\s+-l\\s+(app\\.log\\s+users\\.csv|\\*)/m), 'Now count both: wc -l app.log users.csv');\nT.expect(T.printed('16 total'), 'Two files means a total line as well: 12 + 4 = 16 total');" }
      ],
      files: [
        { name: "commands.sh", content: "# A 12-line log and a small CSV.\n\n# 1) The first 3 lines of app.log:\n\n# 2) The last 2 lines:\n\n# 3) How many lines in app.log?\n\n# 4) All three counts for users.csv, then both files at once:\n\n\n" }
      ],
      hints: [
        "`head -n 3 app.log` and `tail -n 2 app.log` — the `-n` says how many.",
        "`wc -l app.log` counts lines. Without any flag, `wc users.csv` prints lines, words and characters together.",
        "Give wc both names on one line — `wc -l app.log users.csv` — and it counts each, then prints a `total` row."
      ],
      solution: {
        "commands.sh": "# A 12-line log and a small CSV.\n\n# 1) The first 3 lines of app.log:\nhead -n 3 app.log\n\n# 2) The last 2 lines:\ntail -n 2 app.log\n\n# 3) How many lines in app.log?\nwc -l app.log\n\n# 4) All three counts for users.csv, then both files at once:\nwc users.csv\nwc -l app.log users.csv\n"
      }
    },

    {
      id: "cli-u3-3",
      title: "grep: the one line you actually need",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/logs",
      fs: {
        "/home/you/logs/app.log": "INFO  boot: starting\nDEBUG cache: warm\nINFO  GET /  200\nDEBUG cache: hit\nWARN  db: slow query 1400ms\nINFO  GET /missing  404\nDEBUG cache: hit\nerror: payment gateway timeout\nINFO  GET /missing  404\nDEBUG cache: miss\nERROR checkout: card declined\nINFO  shutdown: clean\n"
      },
      brief: "`grep` prints the lines of a file that contain some text. It is the single most useful command on this list, and the one that turns an unreadable log into an answer.\n\n```\ngrep ERROR app.log\n```\n\nFour flags do almost everything:\n\n- `-i` — **ignore case**. `error`, `Error` and `ERROR` are the same thing to your eye and different to grep, so `-i` is usually what you meant.\n- `-n` — show the **line number** each hit came from, so you can jump straight there in an editor.\n- `-v` — **invert**: print the lines that *don't* match. Perfect for \"show me everything except the DEBUG noise\".\n- `-c` — print the **count** instead of the lines.\n\nAnd one thing that isn't a flag: when grep finds nothing, it **exits 1** instead of 0. It found no error, so the command \"failed\". That sounds like a bug and it's the most useful thing about grep — Unit 4 uses it to make decisions.\n\nWhy the odd name? *g/re/p* — the command you typed in an ancient editor to **g**lobally search by **r**egular **e**xpression and **p**rint.",
      example: { lang: "sh", code: "grep ERROR app.log\n# ERROR checkout: card declined\n\ngrep -i error app.log       # catches lowercase 'error:' too\ngrep -n 404 app.log         # 6:INFO  GET /missing  404\ngrep -v DEBUG app.log       # everything that is not noise\ngrep -c DEBUG app.log       # 4" },
      steps: [
        { text: "Find the lines containing `ERROR` — exactly as written, uppercase.",
          test: "T.expect(T.ran(/^grep\\s+ERROR\\s+app\\.log\\s*$/m), 'Run grep ERROR app.log');\nvar g = T.transcript.filter(function (t) { return /^grep\\s+ERROR\\s+app\\.log\\s*$/.test(t.cmd); })[0];\nT.eq(g.out, 'ERROR checkout: card declined\\n', 'Case-sensitive ERROR matches exactly one line — the card decline');" },
        { text: "Notice the lowercase `error:` line was missed. Search again **ignoring case**, and show **line numbers**.",
          test: "T.expect(T.ran(/^grep\\s+-[in]{1,2}\\s*-?[in]?\\s+error\\s+app\\.log\\s*$/im) || T.ran(/^grep\\s+(-i\\s+-n|-n\\s+-i|-in|-ni)\\s+error\\s+app\\.log\\s*$/m), 'Run grep with both -i and -n, e.g. grep -in error app.log');\nT.expect(T.printed('8:error: payment gateway timeout'), 'With -i and -n you should see line 8: the lowercase error');\nT.expect(T.printed('11:ERROR checkout: card declined'), 'And line 11: the uppercase one');" },
        { text: "Strip the noise: print every line that is **not** a `DEBUG` line.",
          test: "T.expect(T.ran(/^grep\\s+-v\\s+DEBUG\\s+app\\.log\\s*$/m), 'Run grep -v DEBUG app.log');\nvar v = T.transcript.filter(function (t) { return /^grep\\s+-v\\s+DEBUG/.test(t.cmd); })[0];\nT.expect(v.out.indexOf('DEBUG') === -1, 'No DEBUG line should survive -v');\nT.expect(v.out.indexOf('INFO  boot: starting') !== -1, 'The INFO lines should all still be there');\nT.eq(v.out.split('\\n').filter(Boolean).length, 8, 'Twelve lines minus four DEBUG lines leaves 8');" },
        { text: "Count the `404`s, then search for something that isn't there and check the exit code with `echo $?`.",
          test: "T.expect(T.ran(/^grep\\s+-c\\s+404\\s+app\\.log\\s*$/m), 'Run grep -c 404 app.log');\nT.expect(T.printed('2\\n'), 'There are two 404 lines, so -c prints 2');\nT.expect(T.ran(/^grep\\s+\\S*(zebra|banana|nothing|missingword)\\S*\\s+app\\.log\\s*$/m), 'Now grep for a word that does not appear, such as: grep zebra app.log');\nT.expect(T.ran(/^echo\\s+\\$\\?\\s*$/m), 'Then run echo $? to see the exit code');\nT.expect(/(^|\\n)1\\n/.test(T.out()), 'grep exits 1 when it matched nothing — that is the code you should see');" }
      ],
      files: [
        { name: "commands.sh", content: "# A 12-line log with INFO, DEBUG, WARN and two kinds of error.\n\n# 1) Lines containing ERROR (uppercase, exact):\n\n# 2) Again, ignoring case AND showing line numbers:\n\n# 3) Everything that is NOT a DEBUG line:\n\n# 4) Count the 404s, then grep for something absent\n#    and print the exit code:\n\n\necho $?\n" }
      ],
      hints: [
        "`grep ERROR app.log` — the pattern comes first, then the file.",
        "Flags combine into one word: `grep -in error app.log` is `-i` and `-n` together.",
        "`grep -v DEBUG app.log` inverts the match. For the last step, `grep -c 404 app.log`, then something like `grep zebra app.log`, then `echo $?` — which prints 1."
      ],
      solution: {
        "commands.sh": "# A 12-line log with INFO, DEBUG, WARN and two kinds of error.\n\n# 1) Lines containing ERROR (uppercase, exact):\ngrep ERROR app.log\n\n# 2) Again, ignoring case AND showing line numbers:\ngrep -in error app.log\n\n# 3) Everything that is NOT a DEBUG line:\ngrep -v DEBUG app.log\n\n# 4) Count the 404s, then grep for something absent\n#    and print the exit code:\ngrep -c 404 app.log\ngrep zebra app.log\necho $?\n"
      }
    },

    {
      id: "cli-u3-4",
      title: "Searching a codebase you have never seen",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/shop",
      fs: {
        "/home/you/shop/README.md": "# Shop\nRun with: node src/server.js\n",
        "/home/you/shop/src/server.js": "const PORT = 3000;\n// TODO: read the port from the environment\nstartServer(PORT);\n",
        "/home/you/shop/src/cart.js": "export function total(items) {\n  // TODO: apply the discount\n  return items.length * 10;\n}\n",
        "/home/you/shop/src/lib/money.js": "export const TAX = 0.07;\nexport function round(n) { return Math.round(n * 100) / 100; }\n",
        "/home/you/shop/tests/cart.test.js": "import { total } from '../src/cart.js';\n// todo: test the discount\n"
      },
      brief: "You've just been handed a repository you've never opened. Somebody says \"the tax rate is wrong\". Where is it?\n\nThis is the everyday use of the command line, and it is one flag away from what you already know. `grep -r` searches **recursively**: give it a directory instead of a file and it walks every file underneath.\n\n```\ngrep -rn TAX .\n```\n\nWith more than one file in play, grep prefixes each hit with the file it came from, so `-rn` gives you `file:line:text` — everything you need to open the right place.\n\nTwo companions:\n\n- `-l` prints **only the file names** that matched, nothing else. When you want to know *which files to open* rather than what's in them, this is the readable one.\n- `-i` matters more in a codebase than in a log, because conventions drift: `TODO`, `todo` and `ToDo` all exist in real projects, written by different people on different days.\n\nAnd the same exit code trick still holds: nothing found means exit 1, which is how a script can ask \"does this project mention X at all?\"",
      example: { lang: "sh", code: "grep -rn TAX .\n# ./src/lib/money.js:1:export const TAX = 0.07;\n\ngrep -rl TODO src\n# src/cart.js\n# src/server.js\n\ngrep -ri todo .        # catches TODO and todo alike" },
      steps: [
        { text: "Find where `TAX` is defined — search the whole project recursively, with line numbers.",
          test: "T.expect(T.ran(/^grep\\s+-(rn|nr)\\s+TAX\\s+\\.?\\s*$/m), 'Run grep -rn TAX .');\nT.expect(T.printed('./src/lib/money.js:1:export const TAX = 0.07;'), 'The hit should read ./src/lib/money.js:1:export const TAX = 0.07;');" },
        { text: "List **just the file names** under `src` that contain `TODO`.",
          test: "T.expect(T.ran(/^grep\\s+-(rl|lr)\\s+TODO\\s+src\\/?\\s*$/m), 'Run grep -rl TODO src');\nvar l = T.transcript.filter(function (t) { return /^grep\\s+-(rl|lr)\\s+TODO/.test(t.cmd); })[0];\nT.eq(l.out, 'src/cart.js\\nsrc/server.js\\n', 'With -l you get file names only — cart.js and server.js, and no line text');" },
        { text: "The tests file writes it lowercase. Search the whole project for `todo` **ignoring case**, and count how many lines match.",
          test: "T.expect(T.ran(/^grep\\s+-[a-z]*r[a-z]*\\s+todo\\s+\\.?\\s*$/im), 'Search recursively and case-insensitively, e.g. grep -ric todo .');\nT.expect(T.ran(/^grep\\s+-[a-z]*c[a-z]*\\s+todo\\s+\\.?\\s*$/im), 'Include -c so you get counts rather than the lines');\nT.expect(T.printed('./tests/cart.test.js:1'), 'The count output names each file — the lowercase todo in tests/cart.test.js should be found');" },
        { text: "Finally, ask whether this project mentions `stripe` anywhere. Print the exit code so the answer is unambiguous.",
          test: "T.expect(T.ran(/^grep\\s+-[a-z]*r[a-z]*\\s+stripe\\s+\\.?\\s*$/im), 'Search recursively for stripe');\nT.expect(T.ran(/^echo\\s+\\$\\?\\s*$/m), 'Then echo $?');\nvar last = T.transcript[T.transcript.length - 1];\nT.eq(last.out, '1\\n', 'Nothing matched, so grep exited 1 — that is a definite no, not a broken command');" }
      ],
      files: [
        { name: "commands.sh", content: "# A shop project you have never opened before.\n\n# 1) Where is TAX defined? (recursive, with line numbers)\n\n# 2) Which files under src mention TODO? (names only)\n\n# 3) Count todo mentions everywhere, ignoring case:\n\n# 4) Does this project mention stripe at all?\n\necho $?\n" }
      ],
      hints: [
        "`-r` makes grep take a directory. `.` means the directory you are standing in, so `grep -rn TAX .` searches everything.",
        "`-l` is for \"list the file names\": `grep -rl TODO src`.",
        "Flags stack: `grep -ric todo .` is recursive, case-insensitive and counting all at once. For the last step, `grep -r stripe .` then `echo $?`."
      ],
      solution: {
        "commands.sh": "# A shop project you have never opened before.\n\n# 1) Where is TAX defined? (recursive, with line numbers)\ngrep -rn TAX .\n\n# 2) Which files under src mention TODO? (names only)\ngrep -rl TODO src\n\n# 3) Count todo mentions everywhere, ignoring case:\ngrep -ric todo .\n\n# 4) Does this project mention stripe at all?\ngrep -r stripe .\necho $?\n"
      }
    },

    {
      id: "cli-quiz-3",
      title: "Unit 3 quiz: Reading files",
      kind: "quiz", xp: 10,
      brief: "cat, head, tail, wc and the many faces of grep. 80% to pass.",
      questions: [
        { q: "A deploy just failed and the log has 40,000 lines. Which command shows you what went wrong?",
          choices: ["cat deploy.log", "tail -n 50 deploy.log", "head -n 50 deploy.log", "wc -l deploy.log"],
          answer: 1, explain: "Logs are written top to bottom, so the newest lines — the ones describing the failure — are at the bottom. `cat` would flood your terminal with 40,000 lines you cannot scroll back through, and `head` would show you the startup from hours ago." },
        { q: "`grep ERROR app.log` prints nothing and `echo $?` prints 1. What does that mean?",
          code: "grep ERROR app.log\necho $?\n# 1",
          lang: "sh",
          choices: ["grep could not open the file and gave up", "There was one match but it was suppressed", "grep matched nothing, and reports that as a non-zero exit", "The pattern was invalid and grep skipped it"],
          answer: 2, explain: "grep exits 0 when it matched at least one line and 1 when it matched none. A missing file is a different code again (2). Far from being a bug, exit 1 is the whole reason grep works inside `&&` chains and if-statements." },
        { q: "What does the `-v` flag do to grep?",
          choices: ["Prints the version of grep that is installed", "Prints extra detail about each match, including the byte offset", "Prints only lines that do NOT contain the pattern", "Prints the matched portion of each line rather than the whole line"],
          answer: 2, explain: "`-v` inverts the match. It is how you strip noise: `grep -v DEBUG app.log` gives you the log with every DEBUG line removed, leaving the lines you actually wanted to read." },
        { q: "You are handed a repository you have never opened and asked where `TAX` is defined. What do you run from the project root?",
          choices: ["grep -rn TAX .", "cat -n TAX", "find . -name TAX", "wc -l TAX"],
          answer: 0, explain: "`-r` walks every file under the directory you name, `.` is the directory you are standing in, and `-n` gives you the line number so you can jump straight there. `find` searches file NAMES, not contents — no file here is called TAX." },
        { q: "Why is `cat` named after concatenation when most people use it to print one file?",
          choices: ["Because it concatenates the file with your terminal's buffer", "Because it takes several files and prints them joined into one stream", "Because it was originally a category listing tool and the name stuck", "Because it concatenates each line with a newline before printing it"],
          answer: 1, explain: "`cat a.txt b.txt` prints both, one straight after the other. Printing a single file is the degenerate case of joining a list of one — which is also why `cat` is the natural start of a pipeline." },
        { q: "`wc -l` on a file prints `12 app.log`. You then run `wc -l app.log users.csv` and get three rows. What is the third row?",
          code: "wc -l app.log users.csv\n# 12 app.log\n#  4 users.csv\n# ?",
          lang: "sh",
          choices: ["A total, adding the counts together", "A repeat of the largest file, for emphasis", "The number of files that were read", "The count of blank lines across both files"],
          answer: 0, explain: "Given more than one file, wc counts each and then adds a `total` row — here `16 total`. It is why `wc -l *.js` is such a quick way to see how big a codebase has grown." }
      ]
    }
  ]
});
