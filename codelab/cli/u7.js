/* The Command Line & Your Machine — Unit 7: Programs of your own */
window.CODELAB.addUnit("cli", {
  id: "cli-u7",
  title: "Programs of your own, and processes",
  icon: "⚙️",
  blurb: "Turn a file of commands into a program: a shebang, an execute bit, arguments and an exit code — then put it on PATH. And finally the loop every developer meets: something is on port 3000, find it and kill it.",
  cheat: [
    { h: "A script, start to finish", lang: "sh", code: "# 1. write it, first line first\n#!/bin/sh\necho \"hello\"\n\n# 2. make it executable\nchmod +x hello.sh\n\n# 3. run it\n./hello.sh", note: "The `#!` on line one is the shebang: it names the interpreter that should read the rest. Without it the system finds a text file it does not know how to run; without the execute bit it will not try." },
    { h: "Arguments", lang: "sh", code: "#!/bin/sh\necho \"first:  $1\"\necho \"second: $2\"\necho \"count:  $#\"\necho \"all:    $@\"\n\n# ./args.sh red green\n# first:  red\n# second: green\n# count:  2", note: "$1, $2 … are the arguments; $# is how many there were; $@ is all of them at once. $0 is the name the script was called by." },
    { h: "Exiting with a verdict", lang: "sh", code: "#!/bin/sh\ngrep -q ERROR \"$1\" || exit 1\necho \"found a problem\"\nexit 0", note: "`exit N` stops the script and hands N back as its exit code, so your script can be used in `&&` chains exactly like a built-in command. 0 for success, non-zero for anything else." },
    { h: "Making it a real command", lang: "sh", code: "mkdir -p ~/bin\nmv greet ~/bin/\nchmod +x ~/bin/greet\nexport PATH=$PATH:/home/you/bin\ngreet             # now it works from anywhere\nwhich greet", note: "A personal ~/bin on your PATH is where your own tools live. On a real machine you would put the export line in ~/.bashrc so it survives a new terminal." },
    { h: "Processes and ports", lang: "sh", code: "serve 3000        # start something that holds a port\nps                # what is running\nlsof -i :3000     # WHO has port 3000?\nkill 4001         # stop it by pid\n\nsleep 30 &        # run in the background\njobs              # [1]  Running   sleep 30 &", note: "`serve` here stands in for `npm start`. The loop is always the same: something already has the port, lsof tells you its pid, kill frees it." },
    { h: "The honest edge", lang: "sh", code: "sleep 30 &\n# [1] 4002        ← a pid, and a job number", note: "Nothing in this sandbox runs concurrently. A backgrounded command has already finished by the time you see its pid; what is real is the bookkeeping — the pid, the job, and the port it holds until you kill it." }
  ],
  lessons: [

    {
      id: "cli-u7-1",
      title: "Your first program: shebang, chmod, ./run",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/bin-workshop",
      fs: { "/home/you/bin-workshop/.keep": "" },
      brief: "Everything you've typed so far, you typed once. A **script** is those same commands in a file, so you can run them again tomorrow without remembering them.\n\nThere are exactly three requirements, and missing any one of them produces its own distinct error.\n\n**1. A shebang on the very first line.**\n\n```\n#!/bin/sh\n```\n\n`#!` followed by the path to an interpreter. It tells the system *what should read the rest of this file*. Without it you get `cannot execute` — the system found your file and has no idea what language it's in. You'll also see `#!/usr/bin/env bash`, which works the same way and finds bash wherever it happens to be installed.\n\n**2. The execute bit.** `chmod +x`. Without it, `Permission denied`.\n\n**3. Run it as a path.** `./script.sh`, not `script.sh` — Unit 6 explained why.\n\nInside, it's the same shell you've been using all along. Every command, pipe and variable works exactly as it does when you type it.\n\nThis lesson has **two tabs**. Write your script in `greet.sh`, and use `commands.sh` to make it executable and run it.",
      example: { lang: "sh", code: "# greet.sh\n#!/bin/sh\necho \"hello from a script\"\ndate\n\n# commands.sh\nchmod +x greet.sh\n./greet.sh" },
      steps: [
        { text: "Give `greet.sh` a shebang on its first line, and make it print `hello from a script`.",
          test: "var s = T.file('/home/you/bin-workshop/greet.sh');\nT.expect(s !== null, 'greet.sh should exist — write it in the greet.sh tab');\nT.expect(s.split('\\n')[0].indexOf('#!') === 0, 'The FIRST line of greet.sh must be a shebang, e.g. #!/bin/sh');\nT.expect(/\\b(sh|bash)\\s*$/.test(s.split('\\n')[0]), 'The shebang should name a shell, e.g. #!/bin/sh or #!/usr/bin/env bash');\nT.expect(s.indexOf('hello from a script') !== -1, 'The script should echo: hello from a script');" },
        { text: "Try running it **before** making it executable, so you see the refusal.",
          test: "T.expect(T.ran(/^\\.\\/greet\\.sh\\s*$/m), 'Run ./greet.sh');\nvar first = T.transcript.filter(function (t) { return /^\\.\\/greet\\.sh\\s*$/.test(t.cmd); })[0];\nT.expect(first.err.indexOf('Permission denied') !== -1, 'The FIRST ./greet.sh must come before the chmod, so you see Permission denied');" },
        { text: "Make it executable and run it for real.",
          test: "T.expect(T.ran(/^chmod\\s+\\+x\\s+greet\\.sh\\s*$/m), 'Run chmod +x greet.sh');\nT.eq(T.mode('/home/you/bin-workshop/greet.sh'), '-rwxr-xr-x', 'greet.sh should now be executable');\nvar runs = T.transcript.filter(function (t) { return /^\\.\\/greet\\.sh\\s*$/.test(t.cmd); });\nT.expect(runs.length >= 2, 'Run ./greet.sh again after the chmod');\nT.expect(runs[runs.length - 1].out.indexOf('hello from a script') !== -1, 'This time it should print your message');" },
        { text: "Prove the shebang is doing real work: make a second script `bare.sh` with **no** shebang, chmod it, and read the error you get.",
          test: "T.expect(T.exists('/home/you/bin-workshop/bare.sh'), 'Create bare.sh — you can build it with echo and a redirect');\nvar b = T.file('/home/you/bin-workshop/bare.sh');\nT.expect(b.indexOf('#!') !== 0, 'bare.sh must NOT start with a shebang — that is the point of it');\nT.expect(T.ran(/^chmod\\s+\\+x\\s+bare\\.sh\\s*$/m), 'Make bare.sh executable too, so the only thing missing is the shebang');\nT.expect(T.ran(/^\\.\\/bare\\.sh\\s*$/m), 'Then run ./bare.sh');\nT.expect(T.err().indexOf('no shebang line') !== -1, 'Executable but with no shebang is a DIFFERENT error from Permission denied — the system does not know what should read it');" }
      ],
      files: [
        { name: "commands.sh", content: "# Two tabs: write the script in greet.sh, drive it from here.\n\n# 1) Try to run it before it is executable:\n\n\n# 2) Make it executable and run it again:\n\n\n\n# 3) Build a second script with NO shebang, and run it:\n\n\n\n" },
        { name: "greet.sh", content: "# Line one must be the shebang. Then make it say\n# exactly: hello from a script\n\n" }
      ],
      hints: [
        "In the greet.sh tab, the very first line is `#!/bin/sh`, and the second is `echo \"hello from a script\"`. Nothing may come before the shebang, not even a comment.",
        "In commands.sh the order matters: `./greet.sh` first (it fails), then `chmod +x greet.sh`, then `./greet.sh` again.",
        "Build bare.sh from commands.sh with a redirect: `echo \"echo hi\" > bare.sh`, then `chmod +x bare.sh`, then `./bare.sh`."
      ],
      solution: {
        "commands.sh": "# Two tabs: write the script in greet.sh, drive it from here.\n\n# 1) Try to run it before it is executable:\n./greet.sh\n\n# 2) Make it executable and run it again:\nchmod +x greet.sh\n./greet.sh\n\n# 3) Build a second script with NO shebang, and run it:\necho \"echo hi\" > bare.sh\nchmod +x bare.sh\n./bare.sh\n",
        "greet.sh": "#!/bin/sh\n# Line one must be the shebang. Then make it say\n# exactly: hello from a script\necho \"hello from a script\"\n"
      }
    },

    {
      id: "cli-u7-2",
      title: "Arguments and exit codes: a script that answers",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/checks",
      fs: {
        "/home/you/checks/app.log": "INFO boot\nERROR checkout failed\nINFO served /\n",
        "/home/you/checks/clean.log": "INFO boot\nINFO served /\n"
      },
      brief: "A script that always does the same thing is a note to yourself. A script that takes **arguments** and reports a **verdict** is a tool.\n\nInside a script, the arguments arrive as numbered variables:\n\n- `$1`, `$2`, `$3` … — the arguments, in order\n- `$#` — how many there were\n- `$@` — all of them at once\n- `$0` — the name the script was called by\n\n```\n./check.sh app.log\n# inside: $1 is app.log, $# is 1\n```\n\nAnd the verdict is the exit code. `exit N` stops the script immediately and hands `N` back to whoever ran it — so your script slots into `&&` and `||` chains exactly like `grep` or `mkdir` does. That's the difference between a script you run and a script other things can *use*.\n\nThe convention, as always: **0 means success, non-zero means something was wrong.**\n\nYou're going to write `check.sh`, which takes a log file as its argument and reports whether it contains an `ERROR`:\n\n- prints `checking <name>`\n- if there's an ERROR: print `FAIL` and `exit 1`\n- otherwise: print `OK` and exit normally\n\nThen drive it from `commands.sh` against both logs, and chain it with `&&` to prove the exit code really works.",
      example: { lang: "sh", code: "# check.sh\n#!/bin/sh\necho \"checking $1\"\ngrep -q ERROR \"$1\" && echo \"FAIL\" && exit 1\necho \"OK\"\n\n# commands.sh\nchmod +x check.sh\n./check.sh clean.log && echo \"safe to deploy\"" },
      steps: [
        { text: "Write `check.sh` so it prints `checking ` followed by the file name it was given.",
          test: "var s = T.file('/home/you/checks/check.sh');\nT.expect(s !== null, 'Write check.sh in its tab');\nT.expect(s.split('\\n')[0].indexOf('#!') === 0, 'First line must be a shebang');\nT.expect(/\\$1|\\$\\{1\\}/.test(s), 'The script must use $1 — the first argument it was given');\nT.expect(T.ran(/^chmod\\s+\\+x\\s+check\\.sh\\s*$/m), 'Make it executable from commands.sh');\nT.expect(T.printed('checking clean.log') || T.printed('checking app.log'), 'Running it should print: checking <the file you passed>');" },
        { text: "Run it on `clean.log`, which has no ERROR. It should print `OK`.",
          test: "T.expect(T.ran(/^\\.\\/check\\.sh\\s+clean\\.log/m), 'Run ./check.sh clean.log');\nvar r = T.transcript.filter(function (t) { return /^\\.\\/check\\.sh\\s+clean\\.log\\s*$/.test(t.cmd); })[0];\nT.expect(r, 'Run ./check.sh clean.log on a line of its own');\nT.expect(r.out.indexOf('checking clean.log') !== -1, 'It should name the file it was given');\nT.expect(r.out.indexOf('OK') !== -1, 'clean.log has no ERROR, so the script should print OK');\nT.eq(r.code, 0, 'And exit 0');" },
        { text: "Run it on `app.log`, which does have one. It should print `FAIL` and exit **1**.",
          test: "var r = T.transcript.filter(function (t) { return /^\\.\\/check\\.sh\\s+app\\.log\\s*$/.test(t.cmd); })[0];\nT.expect(r, 'Run ./check.sh app.log on a line of its own');\nT.expect(r.out.indexOf('FAIL') !== -1, 'app.log contains an ERROR, so the script should print FAIL');\nT.expect(r.out.indexOf('OK') === -1, 'It should NOT also print OK — exit 1 stops the script there');\nT.eq(r.code, 1, 'And the exit code must be 1, so other commands can act on it');" },
        { text: "Now use it like a real command: chain both cases with `&&` so the follow-up only runs for the clean log.",
          test: "T.expect(T.ran(/^\\.\\/check\\.sh\\s+clean\\.log\\s*&&\\s*echo/m), 'Run ./check.sh clean.log && echo \"safe to deploy\"');\nT.expect(T.printed('safe to deploy'), 'The clean log passes, so the && follow-up should run');\nT.expect(T.ran(/^\\.\\/check\\.sh\\s+app\\.log\\s*&&\\s*echo/m), 'Now the same chain on app.log');\nvar bad = T.transcript.filter(function (t) { return /^\\.\\/check\\.sh\\s+app\\.log\\s*&&/.test(t.cmd); })[0];\nT.expect(bad.out.indexOf('safe to deploy') === -1, 'app.log fails, so && must skip the follow-up — your script is now usable in a chain');" }
      ],
      files: [
        { name: "commands.sh", content: "# Write check.sh in its tab, then drive it from here.\n\n# 1) Make it executable:\n\n\n# 2) The clean log — expect OK:\n\n\n# 3) The bad log — expect FAIL and exit 1:\n\n\n# 4) Chain both with && :\n\n\n" },
        { name: "check.sh", content: "# Takes ONE argument: a log file to check.\n#\n#   print   checking <the file>\n#   if it contains ERROR:  print FAIL and exit 1\n#   otherwise:             print OK\n\n" }
      ],
      hints: [
        "Start check.sh with `#!/bin/sh`, then `echo \"checking $1\"`. Quote `\"$1\"` — a file name could contain a space.",
        "`grep -q ERROR \"$1\"` exits 0 when it finds one. So `grep -q ERROR \"$1\" && echo \"FAIL\" && exit 1` handles the bad case, and a plain `echo \"OK\"` on the next line handles the good one — it is only reached if the exit did not happen.",
        "In commands.sh: `chmod +x check.sh`, then `./check.sh clean.log`, `./check.sh app.log`, then the two `&&` lines."
      ],
      solution: {
        "commands.sh": "# Write check.sh in its tab, then drive it from here.\n\n# 1) Make it executable:\nchmod +x check.sh\n\n# 2) The clean log — expect OK:\n./check.sh clean.log\n\n# 3) The bad log — expect FAIL and exit 1:\n./check.sh app.log\n\n# 4) Chain both with && :\n./check.sh clean.log && echo \"safe to deploy\"\n./check.sh app.log && echo \"safe to deploy\"\n",
        "check.sh": "#!/bin/sh\n# Takes ONE argument: a log file to check.\n#\n#   print   checking <the file>\n#   if it contains ERROR:  print FAIL and exit 1\n#   otherwise:             print OK\necho \"checking $1\"\ngrep -q ERROR \"$1\" && echo \"FAIL\" && exit 1\necho \"OK\"\n"
      }
    },

    {
      id: "cli-u7-3",
      title: "Installing your own command",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/scratch",
      fs: { "/home/you/scratch/.keep": "" },
      brief: "You have a script that works. Right now it only works when you're standing in the folder it lives in, typed with a `./` in front. Making it a *command* — something you can type by name from anywhere — takes three steps and no special tools.\n\n**1. Give it a home.** By convention that's `~/bin`, a folder of your own. `mkdir -p ~/bin`.\n\n**2. Put it there, executable, with no extension.** Real commands are `ls` and `grep`, not `ls.sh` — the extension is for you while you're editing, and dropping it is what makes it feel installed.\n\n**3. Put that folder on PATH.** `export PATH=$PATH:/home/you/bin`.\n\nAfter that, `tidy` works from any directory, `which tidy` finds it, and it behaves exactly like a command that came with the machine — because that is all a command has ever been: an executable file, in a folder that's on the list.\n\nOne real-world footnote. The `export` lasts as long as this shell. On your own machine you'd put that line in `~/.bashrc` or `~/.zshrc`, the file your shell reads every time it starts, so it survives closing the terminal. That file isn't modelled here, but the line you'd write is exactly the one you're about to type.\n\nYou'll write `tidy`, which reports how many files are in the directory you're standing in.",
      example: { lang: "sh", code: "mkdir -p ~/bin\nmv tidy ~/bin/\nchmod +x ~/bin/tidy\nexport PATH=$PATH:/home/you/bin\n\ncd /somewhere/else\ntidy               # works from anywhere now\nwhich tidy         # /home/you/bin/tidy" },
      steps: [
        { text: "Write `tidy` so it prints `files here:` followed by the count, then test it locally with `./tidy`.",
          test: "T.expect(T.ran(/^chmod\\s+\\+x\\s+tidy\\s*$/m) || T.ran(/^chmod\\s+\\+x\\s+.*\\/tidy\\s*$/m), 'Make tidy executable with chmod +x');\nT.expect(T.ran(/^\\.\\/tidy\\s*$/m), 'Test it locally first with ./tidy');\nT.expect(/files here:/.test(T.out()), 'It should print a line beginning: files here:');\n/* The script itself is a tab, not the commands — read it wherever it ended up. */\nvar src = T.file('/home/you/bin/tidy') || T.file('/home/you/scratch/tidy');\nT.expect(src && /wc\\s+-l/.test(src), 'Count the files inside tidy rather than hard-coding a number — ls | wc -l');" },
        { text: "Make `~/bin` and move `tidy` into it. Nothing called `tidy` should be left in `scratch`.",
          test: "T.expect(T.isDir('/home/you/bin'), 'Create /home/you/bin — mkdir -p ~/bin');\nT.expect(T.file('/home/you/bin/tidy') !== null, 'tidy should now live in /home/you/bin');\nT.expect(T.file('/home/you/scratch/tidy') === null, 'It should have MOVED, not been copied — nothing called tidy left in scratch');\nT.expect(T.mode('/home/you/bin/tidy') === '-rwxr-xr-x', 'And it must still be executable where it now lives');" },
        { text: "Add `~/bin` to `PATH`, then run `tidy` by bare name and confirm with `which`.",
          test: "T.expect((T.env('PATH') || '').indexOf('/home/you/bin') !== -1, 'Add /home/you/bin to PATH');\nT.expect((T.env('PATH') || '').indexOf('/usr/bin') !== -1, 'Keep the rest of PATH — write export PATH=$PATH:/home/you/bin');\nvar bare = T.transcript.filter(function (t) { return /^tidy\\s*$/.test(t.cmd); });\nT.expect(bare.length >= 1, 'Run tidy by its bare name, with no ./');\nT.expect(bare[bare.length - 1].out.indexOf('files here:') !== -1, 'It should run and print its line');\nT.expect(T.ran(/^which\\s+tidy\\s*$/m), 'Confirm with which tidy');\nT.expect(T.printed('/home/you/bin/tidy'), 'which should report /home/you/bin/tidy');" },
        { text: "Prove it is a real command: `cd` somewhere else entirely and run `tidy` there.",
          test: "T.expect(T.ran(/^cd\\s+\\S/m), 'cd to another directory');\nvar bare = T.transcript.filter(function (t) { return /^tidy\\s*$/.test(t.cmd); });\nT.expect(bare.length >= 2, 'Run tidy again from the new directory');\nvar last = bare[bare.length - 1], i = T.transcript.indexOf(last);\nT.expect(T.transcript[i].cwd !== '/home/you/scratch', 'The last tidy must be run from a DIFFERENT directory than scratch — that is the whole point of installing it');\nT.expect(last.out.indexOf('files here:') !== -1, 'And it should still work there');" }
      ],
      files: [
        { name: "commands.sh", content: "# Turn tidy into a command you can type anywhere.\n\n# 1) Make it executable and test it locally:\n\n\n\n# 2) Make ~/bin and move it there:\n\n\n\n# 3) Put ~/bin on PATH, then run it by name:\n\n\n\n\n# 4) Go somewhere else and run it again:\n\n\n" },
        { name: "tidy", content: "# Print:  files here: <how many files are in this directory>\n# Count them, do not hard-code the number.\n\n" }
      ],
      hints: [
        "tidy starts `#!/bin/sh`. To count without hard-coding, run `ls | wc -l` and let its output follow your label: `echo \"files here:\"` then `ls | wc -l` on the next line.",
        "`mkdir -p ~/bin` then `mv tidy ~/bin/`. Do the `chmod +x` before the move, or run it again afterwards on the new path.",
        "`export PATH=$PATH:/home/you/bin`, then plain `tidy`, then `which tidy`. For the last step, `cd ~` and run `tidy` once more."
      ],
      solution: {
        "commands.sh": "# Turn tidy into a command you can type anywhere.\n\n# 1) Make it executable and test it locally:\nchmod +x tidy\n./tidy\n\n# 2) Make ~/bin and move it there:\nmkdir -p ~/bin\nmv tidy ~/bin/\nls ~/bin\n\n# 3) Put ~/bin on PATH, then run it by name:\nexport PATH=$PATH:/home/you/bin\ntidy\nwhich tidy\n\n# 4) Go somewhere else and run it again:\ncd ~\ntidy\n",
        "tidy": "#!/bin/sh\n# Print:  files here: <how many files are in this directory>\n# Count them, do not hard-code the number.\necho \"files here:\"\nls | wc -l\n"
      }
    },

    {
      id: "cli-u7-4",
      title: "Something is already on port 3000",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/api",
      fs: { "/home/you/api/server.js": "// listens on 3000\n" },
      brief: "You run `npm start`, and:\n\n```\nError: listen EADDRINUSE: address already in use :::3000\n```\n\nSomething is already holding the port — usually a server you started an hour ago and forgot. This is the most common command-line problem a web developer has, and the fix is always the same three moves: **find it, identify it, kill it.**\n\n- `ps` lists the processes you have running, with their **pid** — the number the system uses to refer to a process.\n- `lsof -i :3000` asks *who has port 3000?* It prints the process holding it, and exits 1 when nothing does — so it's also how you check a port is free.\n- `kill <pid>` stops that process, which releases the port.\n\nThis sandbox has a `serve` command standing in for `npm start`: it takes a port and holds it until killed. `curl` will fetch from a port that's listening and fail with `(7) Connection refused` when nothing is.\n\nThe other piece is `&`. Putting it at the end of a command **backgrounds** it: the shell hands you a job number and a pid and gives you your prompt back instead of waiting.\n\n**The honest edge:** nothing here actually runs concurrently. A backgrounded command has already finished by the time you see its pid. What's genuinely modelled is the bookkeeping — the pid, the job, and the port that really is taken until you free it. And note `&` and `&&` are different characters with entirely different meanings.",
      example: { lang: "sh", code: "serve 3000\n# Listening on http://localhost:3000 (pid 4001)\nserve 3000\n# serve: listen EADDRINUSE: address already in use :::3000\n\nlsof -i :3000        # who has it?\nkill 4001            # let go of it\nserve 3000           # now it starts\n\nsleep 30 &           # [1] 4003\njobs" },
      steps: [
        { text: "Start a server on port 3000, then try to start a second one and read the error.",
          test: "T.expect(T.ran(/^serve\\s+3000\\s*$/m), 'Run serve 3000');\nT.expect(T.printed('Listening on http://localhost:3000'), 'The first one should start and report its pid');\nT.expect(T.cmdCount('serve') >= 2, 'Run serve 3000 a second time');\nT.expect(T.err().indexOf('EADDRINUSE') !== -1, 'The second must fail with EADDRINUSE — the port is genuinely taken');" },
        { text: "Confirm it is really listening: `curl localhost:3000` should answer, and `lsof -i :3000` should name the process holding it.",
          test: "T.expect(T.ran(/^curl\\s+\\S*localhost:3000/m), 'Run curl localhost:3000');\nT.expect(T.printed('Hello from the server on port 3000'), 'curl should get an answer while something is listening');\nT.expect(T.ran(/^lsof\\s+-i\\s+:3000\\s*$/m), 'Run lsof -i :3000');\nT.expect(/4001/.test(T.out()), 'lsof should report the pid holding the port — 4001, the one serve printed');" },
        { text: "Kill it by pid, then prove the port is free: `lsof` should find nothing and `curl` should be refused.",
          test: "T.expect(T.ran(/^kill\\s+4001\\s*$/m), 'Run kill 4001');\n/* Step 4 starts a fresh server, so the evidence the port was freed is the\n   lsof and curl you ran right after the kill, not the state at the end. */\nvar lsofs = T.transcript.filter(function (t) { return /^lsof/.test(t.cmd); });\nT.expect(lsofs.length >= 2, 'Run lsof -i :3000 again after the kill');\nT.eq(lsofs[lsofs.length - 1].code, 1, 'With nothing on the port, lsof prints nothing and exits 1');\nT.eq(lsofs[lsofs.length - 1].out, '', 'And it should print nothing at all');\nT.expect(T.err().indexOf('Connection refused') !== -1, 'And curl should now be refused');" },
        { text: "Background a command with `&`, list it with `jobs`, and leave a fresh server running on 3000.",
          test: "T.expect(T.ran(/^sleep\\s+\\d+\\s*&\\s*$/m), 'Run something like sleep 30 & — one ampersand, at the end');\nT.expect(/\\[1\\] \\d+/.test(T.out()), 'Backgrounding should print a job number and a pid, like [1] 4002');\nT.expect(T.ran(/^jobs\\s*$/m), 'Run jobs');\nT.expect(T.printed('Running'), 'jobs should list it as Running');\nvar p = T.port(3000);\nT.expect(p, 'Finish by starting a server on 3000 again — the port is free now, so it should work');\nT.expect(T.procs().length >= 2, 'Both the backgrounded sleep and the new server should be on the process table');" }
      ],
      files: [
        { name: "commands.sh", content: "# serve PORT stands in for npm start: it holds the port.\n\n# 1) Start one on 3000, then try to start another:\n\n\n\n# 2) Prove it is listening (curl), and find who has it (lsof):\n\n\n\n# 3) Kill it, then show the port is free:\n\n\n\n\n# 4) Background something with & , list jobs,\n#    then start a fresh server on 3000:\n\n\n\nps\n" }
      ],
      hints: [
        "`serve 3000` twice — the first prints a pid, the second fails with EADDRINUSE.",
        "`curl localhost:3000` then `lsof -i :3000`. The pid lsof reports is the one to kill: `kill 4001`.",
        "After the kill, run `lsof -i :3000` and `curl localhost:3000` again to see both fail. Then `sleep 30 &`, `jobs`, and `serve 3000`."
      ],
      solution: {
        "commands.sh": "# serve PORT stands in for npm start: it holds the port.\n\n# 1) Start one on 3000, then try to start another:\nserve 3000\nserve 3000\n\n# 2) Prove it is listening (curl), and find who has it (lsof):\ncurl localhost:3000\nlsof -i :3000\n\n# 3) Kill it, then show the port is free:\nkill 4001\nlsof -i :3000\ncurl localhost:3000\n\n# 4) Background something with & , list jobs,\n#    then start a fresh server on 3000:\nsleep 30 &\njobs\nserve 3000\n\nps\n"
      }
    },

    {
      id: "cli-quiz-7",
      title: "Unit 7 quiz: Your own programs, and processes",
      kind: "quiz", xp: 10,
      brief: "Shebangs, arguments, exit codes, installing a command, and the port that will not let go. 80% to pass.",
      questions: [
        { q: "Your script is executable, but running it gives `cannot execute: no shebang line`. What is missing?",
          choices: ["A #! first line naming the interpreter that should read the file", "Another chmod, because +x alone does not cover scripts", "A .sh extension, without which the system cannot identify the file", "An entry in PATH, since scripts must be registered before running"],
          answer: 0, explain: "`Permission denied` and `cannot execute` are two different failures. The execute bit says you may run it; the shebang says what should interpret it. `#!/bin/sh` on line one answers the second question, and nothing may come before it — not even a comment." },
        { q: "Inside a script run as `./deploy.sh staging fast`, what is `$#`?",
          code: "./deploy.sh staging fast\n# inside deploy.sh: $# is ?",
          lang: "sh",
          choices: ["staging", "The exit code of the previous command", "2", "deploy.sh"],
          answer: 2, explain: "`$#` is the number of arguments — two here. `$1` is staging, `$2` is fast, `$@` is both together, and `$0` is the name the script was called by. `$?` is the separate one that holds the previous exit code." },
        { q: "Why does adding `exit 1` to a failing branch of your script matter so much?",
          choices: ["It stops the script from writing any further output to the terminal or to a log", "It frees the memory the script allocated before quitting", "It marks the script as failed, so && and || chains can act on the result", "It writes the failure into the shell's history for later inspection"],
          answer: 2, explain: "The exit code is how your script talks to everything else. With `exit 1` on failure, `./check.sh log && ./deploy.sh` refuses to deploy — your script becomes usable inside a chain instead of just being something a human reads." },
        { q: "You move `tidy` into `~/bin` and add that folder to PATH, but the terminal you open tomorrow cannot find it. Why?",
          choices: ["Moving the file broke its execute bit, which must be reapplied each session", "The export only affects the shell you typed it in; a new shell reads ~/.bashrc instead", "~/bin is only searched by shells started from your home directory", "PATH entries expire and must be refreshed periodically"],
          answer: 1, explain: "An `export` lives and dies with that shell. To make it permanent you put the same line in the file your shell reads at startup — `~/.bashrc` or `~/.zshrc` — so every new terminal sets it for you." },
        { q: "`npm start` fails with `EADDRINUSE: address already in use :::3000`. What is the sequence that fixes it?",
          choices: ["lsof -i :3000 to get the pid, then kill that pid", "chmod +x on the server file, then start it again", "export PORT=3000, then start it again", "rm the lockfile in the project, then start it again"],
          answer: 0, explain: "The port is held by a process — nearly always a server you started earlier and forgot. `lsof -i :3000` names it and gives you the pid; `kill <pid>` releases the port. Find it, identify it, kill it." },
        { q: "What is the difference between `sleep 30 &` and `sleep 30 && echo done`?",
          choices: ["One ampersand backgrounds the command; two chain a second command on success", "One ampersand is a typo the shell corrects to two", "One ampersand runs the command twice; two runs it once", "They are the same, but two ampersands also prints the job number"],
          answer: 0, explain: "A single `&` at the end backgrounds the command and hands you a job number and pid. A double `&&` between two commands runs the second only if the first succeeded. Same character, entirely different meanings, and worth reading carefully." }
      ]
    }
  ]
});
