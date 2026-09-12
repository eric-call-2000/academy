/* The Command Line & Your Machine — Unit 4: Pipes, redirection and exit codes */
window.CODELAB.addUnit("cli", {
  id: "cli-u4",
  title: "Pipes, redirection and exit codes",
  icon: "🔗",
  blurb: "Send output into a file instead of the screen, feed one command straight into the next, and learn the invisible number every command leaves behind — the one that lets commands make decisions.",
  cheat: [
    { h: "Redirecting output", lang: "sh", code: "ls > files.txt        # write (replaces the file entirely)\nls >> files.txt       # append (adds to the end)\ndate > /dev/null      # not modelled here; on a real box, throw it away", note: "`>` truncates first and then writes — even if the command fails, so a failed command leaves you an EMPTY file, not the old one. When you meant to add, `>>` is the one you wanted." },
    { h: "Pipes", lang: "sh", code: "cat app.log | grep ERROR\ngrep ERROR app.log | wc -l\ncat users.csv | cut -d, -f2 | sort | uniq", note: "`|` connects one command's output to the next one's input. Nothing touches the disk in between — the data flows straight through, which is why a pipeline is fast even on huge files." },
    { h: "Exit codes", lang: "sh", code: "grep ERROR app.log\necho $?          # 0 = matched, 1 = matched nothing\n\nls nope\necho $?          # non-zero: something went wrong", note: "Every command leaves behind a number: 0 means success, anything else means some kind of failure. `$?` holds the most recent one, and it is only good until the NEXT command runs." },
    { h: "Chaining on the result", lang: "sh", code: "mkdir build && cd build      # run the second ONLY if the first worked\ngrep -q ERROR log || echo \"all clear\"   # ...only if it FAILED\nmkdir a ; mkdir b            # run both, whatever happens", note: "`&&` is the workhorse: `npm test && npm run deploy` will not deploy a broken build. `;` is the one to be careful with — it charges ahead even after a failure." },
    { h: "Splitting the stream", lang: "sh", code: "sort names.txt | tee sorted.txt | wc -l", note: "`tee` writes what passes through to a file AND keeps it flowing down the pipe, so you can save an intermediate result without stopping to look at it." },
    { h: "The honest edge", lang: "sh", code: "ls nope > out.txt\n# ls: nope: No such file or directory   ← still on screen\n# out.txt is created, and empty", note: "`>` redirects standard output only. Errors travel on a separate stream (stderr) and go to your screen regardless. On a real machine `2>` redirects that one too; this sandbox does not model it." }
  ],
  lessons: [

    {
      id: "cli-u4-1",
      title: "> and >>: sending output somewhere",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/reports",
      fs: {
        "/home/you/reports/sales.csv": "region,amount\nnorth,1200\nsouth,800\neast,1500\n",
        "/home/you/reports/notes.txt": "quarterly review on Friday\n"
      },
      brief: "By default a command prints to your screen. `>` sends that output into a file instead.\n\n```\nls > files.txt\n```\n\nNothing appears on screen — it all went into `files.txt`. Two things about `>` surprise people, and both are worth knowing before you lose something:\n\n**`>` replaces the whole file.** Not \"adds to it\". If `files.txt` had a year of notes in it, they're gone. When you meant to add, the operator is `>>`.\n\n**`>` truncates before the command even runs.** So if the command fails, you're left with an *empty* file where your old one was. `ls nope > out.txt` creates `out.txt`, empties it, and then prints the error to your screen anyway — because `>` only redirects normal output. Errors travel on a separate stream and land on your screen regardless.\n\nThat last detail is the honest edge of this sandbox: on a real machine `2>` redirects errors too, and that isn't modelled here.\n\n`echo text > file` is how you write a line without opening an editor, and you used it in Unit 2 already.",
      example: { lang: "sh", code: "echo \"first\" > log.txt      # log.txt is now exactly: first\necho \"second\" >> log.txt    # now: first, then second\necho \"third\" > log.txt      # now ONLY: third  ← the > replaced it\n\nls nope > out.txt\n# ls: nope: No such file or directory   ← errors still show\ncat out.txt                  # (empty)" },
      steps: [
        { text: "Save a listing: send `ls` into a file called `listing.txt`, then read it back.",
          test: "T.expect(T.ran(/^ls\\s*>\\s*listing\\.txt\\s*$/m), 'Run ls > listing.txt');\nvar l = T.file('/home/you/reports/listing.txt');\nT.expect(l !== null, 'listing.txt should exist');\nT.expect(l.indexOf('sales.csv') !== -1 && l.indexOf('notes.txt') !== -1, 'The file should contain the listing, including sales.csv and notes.txt');\nT.expect(T.ran(/^cat\\s+listing\\.txt\\s*$/m), 'Read it back with cat listing.txt');" },
        { text: "Build a two-line `summary.txt`: write `Q3 report` with `>`, then add `prepared by you` with `>>`.",
          test: "T.eq(T.file('/home/you/reports/summary.txt'), 'Q3 report\\nprepared by you\\n', 'summary.txt should be exactly two lines: Q3 report, then prepared by you');\nT.expect(T.typed(/>>\\s*summary\\.txt/), 'The second line must be added with >> — a second > would throw the first line away');" },
        { text: "Now prove the danger. Write `oops` into `notes.txt` with a single `>`, then read it and see what happened to the original line.",
          test: "T.expect(T.ran(/^echo\\s+\"?oops\"?\\s*>\\s*notes\\.txt\\s*$/m), 'Run echo \"oops\" > notes.txt');\nT.eq(T.file('/home/you/reports/notes.txt'), 'oops\\n', 'notes.txt should now hold ONLY oops — the quarterly review line is gone for good');\nT.expect(T.ran(/^cat\\s+notes\\.txt\\s*$/m), 'Read it back so you can see the damage');" },
        { text: "Last one: redirect a command that **fails** — `ls nowhere > err.txt` — then show that `err.txt` was created empty while the error still reached your screen.",
          test: "T.expect(T.ran(/^ls\\s+nowhere\\s*>\\s*err\\.txt\\s*$/m), 'Run ls nowhere > err.txt');\nT.eq(T.file('/home/you/reports/err.txt'), '', 'err.txt should exist and be completely empty');\nT.expect(T.err().indexOf('nowhere') !== -1, 'The error message should still have appeared on screen — > does not redirect errors');" }
      ],
      files: [
        { name: "commands.sh", content: "# Two files here: sales.csv and notes.txt.\n\n# 1) Save a listing to listing.txt, then read it back:\n\n\n# 2) Build a two-line summary.txt with > then >>:\n\n\n# 3) Overwrite notes.txt with \"oops\" using a single > ,\n#    then look at what is left:\n\n\n# 4) Redirect a command that fails, then inspect the file:\n\ncat err.txt\n" }
      ],
      hints: [
        "`ls > listing.txt` puts the listing in the file instead of on your screen. Then `cat listing.txt`.",
        "`echo \"Q3 report\" > summary.txt` then `echo \"prepared by you\" >> summary.txt`. One arrow writes, two arrows add.",
        "For the last step: `ls nowhere > err.txt` then `cat err.txt`. The file is empty because `>` truncated it before ls ran, and the error went to your screen on the other stream."
      ],
      solution: {
        "commands.sh": "# Two files here: sales.csv and notes.txt.\n\n# 1) Save a listing to listing.txt, then read it back:\nls > listing.txt\ncat listing.txt\n\n# 2) Build a two-line summary.txt with > then >>:\necho \"Q3 report\" > summary.txt\necho \"prepared by you\" >> summary.txt\n\n# 3) Overwrite notes.txt with \"oops\" using a single > ,\n#    then look at what is left:\necho \"oops\" > notes.txt\ncat notes.txt\n\n# 4) Redirect a command that fails, then inspect the file:\nls nowhere > err.txt\ncat err.txt\n"
      }
    },

    {
      id: "cli-u4-2",
      title: "The pipe: one command into the next",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/logs",
      fs: {
        "/home/you/logs/access.log": "GET / 200\nGET /about 200\nGET /missing 404\nPOST /login 200\nGET /missing 404\nGET / 200\nGET /pricing 500\nGET /missing 404\nPOST /checkout 500\nGET / 200\n"
      },
      brief: "This is the idea the whole command line is built on.\n\n`|` — the **pipe** — connects one command's output directly to the next command's input. Not through a file, not through your screen: the data flows straight from one program into the other.\n\n```\ngrep 404 access.log | wc -l\n```\n\nRead it left to right: *find the 404 lines, then count them*. Neither command knows the other exists. `grep` just writes lines; `wc` just reads lines. The shell wires them together.\n\nThat's the Unix idea in one sentence: **small tools that each do one thing, joined into something bigger**. Nothing here is a \"count the 404s\" program — you built one out of two general commands, and you can build a different one tomorrow out of the same parts.\n\nPipelines chain as far as you like:\n\n```\ncut -d\" \" -f3 access.log | sort | uniq -c | sort -rn\n```\n\n*Take the third column, sort it so identical values sit together, count each run, then sort those counts biggest-first.* Four small commands, and the answer is \"which status codes are we serving, most common first\" — a question no single command answers.\n\n`sort` orders lines. `uniq -c` collapses **adjacent** duplicates and prefixes each with a count — which is exactly why it always follows `sort`. `cut -d\" \" -f3` takes the third space-separated column.",
      example: { lang: "sh", code: "grep 404 access.log | wc -l\n# 3\n\ncut -d\" \" -f3 access.log | sort | uniq -c\n#    5 200\n#    3 404\n#    2 500\n\nsort names.txt | tee sorted.txt | wc -l   # save AND keep going" },
      steps: [
        { text: "Count the 404s by piping `grep` into `wc -l`.",
          test: "T.expect(T.ran(/grep\\s+404\\s+access\\.log\\s*\\|\\s*wc\\s+-l/), 'Run grep 404 access.log | wc -l');\nT.expect(T.printed('3\\n'), 'There are three 404 lines, so the pipeline prints 3');" },
        { text: "Pull out the status code column — the **third** space-separated field — and sort it.",
          test: "T.expect(T.ran(/cut\\s+-d\\s*[\"']? [\"']?\\s+-f\\s*3\\s+access\\.log\\s*\\|\\s*sort/), 'Run cut -d\" \" -f3 access.log | sort');\nvar s = T.transcript.filter(function (t) { return /cut[\\s\\S]*\\|\\s*sort\\s*$/.test(t.cmd); })[0];\nT.expect(s, 'The pipeline should end with sort');\nT.eq(s.out, '200\\n200\\n200\\n200\\n200\\n404\\n404\\n404\\n500\\n500\\n', 'Sorted, the ten codes group together: five 200s, three 404s, two 500s');" },
        { text: "Add `uniq -c` to collapse the runs into counts, then `sort -rn` to put the most common first.",
          test: "T.expect(T.ran(/\\|\\s*uniq\\s+-c\\s*\\|\\s*sort\\s+-rn/), 'Extend the pipeline with | uniq -c | sort -rn');\nvar full = T.transcript.filter(function (t) { return /sort\\s+-rn\\s*$/.test(t.cmd); })[0];\nT.expect(full, 'One line should end in sort -rn');\nT.eq(full.out, '   5 200\\n   3 404\\n   2 500\\n', 'Most common first: 5 of 200, then 3 of 404, then 2 of 500');" },
        { text: "Save the result on its way past: put a `tee codes.txt` in the middle so the counts land in a file **and** still reach your screen.",
          test: "T.expect(T.ran(/\\|\\s*tee\\s+codes\\.txt/), 'Add | tee codes.txt to the pipeline');\nT.eq(T.file('/home/you/logs/codes.txt'), '   5 200\\n   3 404\\n   2 500\\n', 'codes.txt should hold the counted output as it passed through');\nvar teed = T.transcript.filter(function (t) { return /tee\\s+codes\\.txt/.test(t.cmd); })[0];\nT.expect(teed.out.indexOf('5 200') !== -1, 'tee passes the data ONWARD as well — it should still print');" }
      ],
      files: [
        { name: "commands.sh", content: "# A ten-line access log: METHOD PATH STATUS\n\n# 1) How many 404s? (grep, piped into wc -l)\n\n# 2) The status column, sorted:\n\n# 3) ...counted, most common first:\n\n# 4) The same, but saving the result with tee as it goes past:\n\ncat codes.txt\n" }
      ],
      hints: [
        "`grep 404 access.log | wc -l` — the pipe sends grep's output into wc as if you had typed it.",
        "`cut -d\" \" -f3 access.log | sort` — `-d\" \"` says the separator is a space, `-f3` says take field three.",
        "Keep extending the same line: `cut -d\" \" -f3 access.log | sort | uniq -c | sort -rn`, and for the last step slip `| tee codes.txt` in just before the final `sort -rn`."
      ],
      solution: {
        "commands.sh": "# A ten-line access log: METHOD PATH STATUS\n\n# 1) How many 404s? (grep, piped into wc -l)\ngrep 404 access.log | wc -l\n\n# 2) The status column, sorted:\ncut -d\" \" -f3 access.log | sort\n\n# 3) ...counted, most common first:\ncut -d\" \" -f3 access.log | sort | uniq -c | sort -rn\n\n# 4) The same, but saving the result with tee as it goes past:\ncut -d\" \" -f3 access.log | sort | uniq -c | tee codes.txt | sort -rn\ncat codes.txt\n"
      }
    },

    {
      id: "cli-u4-3",
      title: "Exit codes: the number you cannot see",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/logs",
      fs: {
        "/home/you/logs/app.log": "INFO boot\nINFO ready\nWARN slow query\nINFO served /\n",
        "/home/you/logs/clean.log": "INFO boot\nINFO ready\n"
      },
      brief: "Every command you run leaves behind a number you never see. It's called the **exit code** — or the exit status — and it is how one command tells the next one whether it worked.\n\nThe convention is simple and slightly backwards:\n\n- **0 means success.** Exactly one way to succeed.\n- **anything else means failure.** Lots of ways to fail, so lots of numbers.\n\n`$?` holds the code of the command that just finished. It is *only* good until the next command runs — including the `echo` you use to look at it — so check it immediately or save it.\n\nThe interesting case is `grep`. When grep finds nothing it exits **1**. Not because anything broke: it's reporting *\"no match\"*, and \"no match\" counts as failure so that a script can act on it. That's why `grep -q ERROR log` is the standard way to ask *is there an error in this log?* — `-q` means quiet, print nothing, just set the code.\n\nSome codes you'll actually meet: `127` is *command not found* (a typo, or something not installed), and `126` is *found it, but it isn't executable* — which Unit 6 will make happen to you on purpose.",
      example: { lang: "sh", code: "grep INFO app.log > /dev/null\necho $?      # 0 — found something\n\ngrep ZEBRA app.log\necho $?      # 1 — found nothing\n\nnosuchcommand\necho $?      # 127 — command not found" },
      steps: [
        { text: "Run a command that works — `wc -l app.log` — and print its exit code.",
          test: "T.expect(T.ran(/^wc\\s+-l\\s+app\\.log\\s*$/m), 'Run wc -l app.log');\nT.expect(T.ran(/^echo\\s+\\$\\?\\s*$/m), 'Then echo $? on the very next line');\nvar i = T.commands.indexOf('wc -l app.log');\nT.expect(i !== -1 && T.commands[i + 1] === 'echo $?', 'The echo $? must come IMMEDIATELY after — $? only remembers the last command');\nT.eq(T.transcript[i + 1].out, '0\\n', 'A successful command exits 0');" },
        { text: "Now a command that fails: `cat missing.log`, then its code.",
          test: "T.expect(T.ran(/^cat\\s+missing\\.log\\s*$/m), 'Run cat missing.log');\nvar i = T.commands.indexOf('cat missing.log');\nT.expect(T.commands[i + 1] === 'echo $?', 'echo $? immediately after');\nT.expect(T.transcript[i + 1].out !== '0\\n', 'A failed command must NOT exit 0');\nT.expect(T.err().indexOf('missing.log') !== -1, 'And it should have printed an error');" },
        { text: "Ask grep a **question** with `-q`: does `clean.log` contain `WARN`? Print the code rather than the lines.",
          test: "T.expect(T.ran(/^grep\\s+-q\\s+WARN\\s+clean\\.log\\s*$/m), 'Run grep -q WARN clean.log');\nvar i = T.commands.indexOf('grep -q WARN clean.log');\nT.expect(T.commands[i + 1] === 'echo $?', 'echo $? immediately after');\nT.eq(T.transcript[i].out, '', '-q means quiet: grep should print nothing at all');\nT.eq(T.transcript[i + 1].out, '1\\n', 'clean.log has no WARN, so grep exits 1');" },
        { text: "Ask the same question of `app.log`, which *does* have a `WARN`. Then type a command that does not exist and read the code you get.",
          test: "T.expect(T.ran(/^grep\\s+-q\\s+WARN\\s+app\\.log\\s*$/m), 'Run grep -q WARN app.log');\nvar i = T.commands.indexOf('grep -q WARN app.log');\nT.eq(T.transcript[i + 1].out, '0\\n', 'app.log does have a WARN, so this time grep exits 0');\nT.expect(T.err().indexOf('command not found') !== -1, 'Now type a command that does not exist, such as: gerp app.log');\nT.expect(T.printed('127'), 'Print its exit code too — a missing command is 127');" }
      ],
      files: [
        { name: "commands.sh", content: "# Every command leaves a number behind. Go and look at it.\n# $? only remembers the LAST command, so echo it immediately.\n\n# 1) A command that works:\n\necho $?\n\n# 2) A command that fails:\n\necho $?\n\n# 3) Does clean.log contain WARN? (quietly)\n\necho $?\n\n# 4) Does app.log? Then a command that does not exist:\n\necho $?\n\necho $?\n" }
      ],
      hints: [
        "`echo $?` has to be the very next line. Any command in between — even another echo — replaces the number.",
        "`-q` means quiet: `grep -q WARN clean.log` prints nothing and only sets the exit code. clean.log has no WARN, so you get 1.",
        "For the last part, misspell something on purpose: `gerp app.log` then `echo $?`. A command the shell cannot find is exit code 127."
      ],
      solution: {
        "commands.sh": "# Every command leaves a number behind. Go and look at it.\n# $? only remembers the LAST command, so echo it immediately.\n\n# 1) A command that works:\nwc -l app.log\necho $?\n\n# 2) A command that fails:\ncat missing.log\necho $?\n\n# 3) Does clean.log contain WARN? (quietly)\ngrep -q WARN clean.log\necho $?\n\n# 4) Does app.log? Then a command that does not exist:\ngrep -q WARN app.log\necho $?\ngerp app.log\necho $?\n"
      }
    },

    {
      id: "cli-u4-4",
      title: "&& and ||: making commands decide",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/project",
      fs: {
        "/home/you/project/app.js": "console.log('hi');\n",
        "/home/you/project/app.log": "INFO boot\nERROR checkout failed\nINFO served /\n",
        "/home/you/project/clean.log": "INFO boot\nINFO served /\n"
      },
      brief: "Now that commands report success and failure, you can chain them on it. This is where the command line stops being a list of instructions and starts being a tiny program.\n\n**`A && B` runs B only if A succeeded.** Read it as *\"and then\"*. It's the workhorse:\n\n```\nnpm test && npm run deploy\n```\n\nA broken test suite exits non-zero, so the deploy never happens. That one character is the difference between a safe pipeline and shipping a broken build.\n\n**`A || B` runs B only if A failed.** Read it as *\"or else\"* — a fallback:\n\n```\ngrep -q ERROR app.log || echo \"all clear\"\n```\n\n**`A ; B` runs both, no matter what.** It's just \"and then, regardless\", and it's the one to be careful with: `cd build ; rm -rf *` is a genuinely dangerous line, because if the `cd` fails you delete everything in the folder you were already standing in. Written with `&&`, the `rm` simply never runs.\n\nThey share one shell, which is why `mkdir deep && cd deep` really does leave you in `deep`.\n\nOne warning on reading them: `&&` and `&` are different characters and very different meanings. A single `&` backgrounds a command — that's Unit 7.",
      example: { lang: "sh", code: "mkdir build && cd build       # only cd if the mkdir worked\nfalse && echo \"never runs\"\nfalse || echo \"rescue\"        # rescue\ntrue  || echo \"never runs\"\n\ngrep -q ERROR app.log && echo \"found a problem\"\ngrep -q ERROR clean.log || echo \"clean\"" },
      steps: [
        { text: "Use `&&` for what it's best at: make a `build` directory **and then** move into it, in one line. Print where you land.",
          test: "T.expect(T.ran(/^mkdir\\s+build\\s*&&\\s*cd\\s+build\\s*$/m), 'Run mkdir build && cd build on one line');\nT.expect(T.isDir('/home/you/project/build'), 'The build directory should exist');\nT.expect(/(^|\\n)\\/home\\/you\\/project\\/build\\n/.test(T.out()), 'A pwd should show you ended up inside build — the two commands share one shell');" },
        { text: "Show the short-circuit. Run `cd nowhere && echo \"moved\"` and confirm the `echo` never fired.",
          test: "T.expect(T.ran(/^cd\\s+nowhere\\s*&&\\s*echo/m), 'Run cd nowhere && echo \"moved\"');\nT.expect(T.err().indexOf('nowhere') !== -1, 'The cd should fail');\nT.expect(!T.printed('moved'), 'Because the cd failed, && must skip the echo entirely — the word moved should never appear');" },
        { text: "Now the fallback. Ask whether `clean.log` has an `ERROR`, and print `all clear` when it does not — using `||`.",
          test: "T.expect(T.ran(/^grep\\s+-q\\s+ERROR\\s+clean\\.log\\s*\\|\\|\\s*echo/m), 'Run grep -q ERROR clean.log || echo \"all clear\"');\nT.expect(T.printed('all clear'), 'clean.log has no ERROR, so grep fails and || runs the echo');" },
        { text: "And the other way round: on `app.log`, which *does* contain an `ERROR`, use `&&` to print `found a problem`. Finish with a `;` line that runs both halves regardless.",
          test: "T.expect(T.ran(/^grep\\s+-q\\s+ERROR\\s+app\\.log\\s*&&\\s*echo/m), 'Run grep -q ERROR app.log && echo \"found a problem\"');\nT.expect(T.printed('found a problem'), 'app.log does contain ERROR, so grep succeeds and && runs the echo');\nvar semi = T.transcript.filter(function (t) { return /;/.test(t.cmd) && /^(?!#)/.test(t.cmd); })[0];\nT.expect(semi, 'Add one line using ; to join two commands');\nT.expect(/false\\s*;|;\\s*echo/.test(semi.cmd), 'Join them with ; — for example: false ; echo \"runs anyway\"');\nT.expect(semi.out.length > 0, 'The command after the ; should run even though the one before it failed');" }
      ],
      files: [
        { name: "commands.sh", content: "# app.log HAS an ERROR line. clean.log does not.\n\n# 1) Make build/ and step into it, in one line:\n\npwd\n\n# 2) A chain that short-circuits — the echo must NOT run:\n\n\n# 3) A fallback with || on clean.log:\n\n\n# 4) The success case with && on app.log,\n#    then a ; line that runs both halves regardless:\n\n\n" }
      ],
      hints: [
        "`mkdir build && cd build` — one line, two commands, and the second only happens if the first worked.",
        "`cd nowhere && echo \"moved\"` fails at the cd, so `moved` is never printed. That skipping IS the feature.",
        "`grep -q ERROR clean.log || echo \"all clear\"` for the fallback, and `grep -q ERROR app.log && echo \"found a problem\"` for the success case. For the last line try `false ; echo \"runs anyway\"`."
      ],
      solution: {
        "commands.sh": "# app.log HAS an ERROR line. clean.log does not.\n\n# 1) Make build/ and step into it, in one line:\nmkdir build && cd build\npwd\n\n# 2) A chain that short-circuits — the echo must NOT run:\ncd nowhere && echo \"moved\"\n\n# 3) A fallback with || on clean.log:\ncd ..\ngrep -q ERROR clean.log || echo \"all clear\"\n\n# 4) The success case with && on app.log,\n#    then a ; line that runs both halves regardless:\ngrep -q ERROR app.log && echo \"found a problem\"\nfalse ; echo \"runs anyway\"\n"
      }
    },

    {
      id: "cli-quiz-4",
      title: "Unit 4 quiz: Pipes, redirection and exit codes",
      kind: "quiz", xp: 10,
      brief: "Where output goes, how commands connect, and the number that lets them decide. 80% to pass.",
      questions: [
        { q: "`notes.txt` holds a year of notes. You run `echo \"reminder\" > notes.txt`. What is in the file now?",
          choices: ["The year of notes with reminder added at the end", "Just the word reminder", "The year of notes with reminder added at the start", "Nothing, because > refuses to overwrite a non-empty file"],
          answer: 1, explain: "A single `>` truncates the file and writes fresh. The old contents are gone with no prompt and no backup. `>>` is the operator that appends — the difference is one character and a year of notes." },
        { q: "What does `grep ERROR app.log | wc -l` actually do?",
          choices: ["Counts every line in app.log, then searches that number for ERROR", "Writes grep's output into a file called wc and counts it", "Feeds grep's matching lines into wc, which counts them", "Runs grep and wc at the same time on the same file"],
          answer: 2, explain: "The pipe connects grep's output to wc's input, in order, left to right. Neither command knows the other exists — grep just writes lines and wc just counts what it is given. That independence is what lets you rebuild the pipeline for a different question tomorrow." },
        { q: "`grep -q ERROR clean.log` prints nothing and sets `$?` to 1. Why is that useful rather than annoying?",
          choices: ["Because 1 means grep needs to be run again with different flags", "Because the 1 counts how many lines it skipped", "Because a shell script can branch on it: no match is reported as failure", "Because -q suppresses errors so the code is always meaningful"],
          answer: 2, explain: "\"No match\" being a non-zero exit is what makes `grep -q PATTERN file || echo clean` work. `-q` prints nothing and exists purely to set that code, which is how you ask the shell a yes-or-no question." },
        { q: "Why is `cd build && rm -rf *` safer than `cd build ; rm -rf *`?",
          code: "cd build && rm -rf *\ncd build ;  rm -rf *",
          lang: "sh",
          choices: ["&& deletes files more slowly, giving you time to interrupt it", "&& skips the rm entirely if the cd failed, so you cannot wipe the folder you were already in", "&& automatically restricts rm to the build directory", "They are equivalent; && is only a style preference"],
          answer: 1, explain: "If `build` does not exist, the `cd` fails. With `;` the `rm -rf *` runs anyway — in whatever directory you were standing in. With `&&` it simply never runs. This exact difference has destroyed real people's work." },
        { q: "You run `ls nowhere > out.txt`. The error still appears on your screen. What is in out.txt?",
          choices: ["The error message, since that is all the command produced", "Nothing — the file was created and left empty", "The file was not created at all, because the command failed", "The previous contents of out.txt, left untouched by the failure"],
          answer: 1, explain: "`>` truncates the file before the command even starts, and it redirects standard output only. The error travels on a separate stream (stderr) straight to your screen, so you are left with an empty file and the message still visible." },
        { q: "In the pipeline `cut -d\" \" -f3 log | sort | uniq -c`, why must `sort` come before `uniq`?",
          choices: ["Because uniq only collapses duplicates that are next to each other", "Because uniq cannot read from a pipe unless sort flushes it first", "Because sort removes the blank lines that would confuse uniq", "Because uniq counts in the order sort defines and would otherwise count backwards"],
          answer: 0, explain: "`uniq` compares each line only with the one immediately before it. Identical lines scattered through the file are never noticed, so sorting first is what gathers them into runs that uniq can collapse and count." }
      ]
    }
  ]
});
