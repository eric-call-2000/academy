/* The Command Line & Your Machine — Unit 6: Variables, permissions and PATH */
window.CODELAB.addUnit("cli", {
  id: "cli-u6",
  title: "Variables, permissions and PATH",
  icon: "🔑",
  blurb: "The state your shell carries around: variables and the ones it hands to programs, the permission bits that decide what may run, and the list of folders that turns a name you type into a program that runs.",
  cheat: [
    { h: "Variables", lang: "sh", code: "NAME=eric            # no spaces around the =\necho $NAME           # eric\necho ${NAME}s         # erics — braces where the name would run on\nunset NAME", note: "`NAME = eric` with spaces is a different command entirely: the shell tries to run a program called NAME. The missing spaces are not style, they are the syntax." },
    { h: "Quoting a variable", lang: "sh", code: "echo \"$HOME\"     # /home/you   — double quotes expand\necho '$HOME'     # $HOME       — single quotes do not\necho \"$NOPE\"     # (empty)     — unset means empty, not an error", note: "Double quotes stop globbing and word-splitting but still expand variables. Single quotes stop everything. When a value might contain a space, quote it — `rm $FILE` on a name with a space deletes two wrong things." },
    { h: "Exported vs. not", lang: "sh", code: "LOCAL=one            # this shell only\nexport SHARED=two    # ...and every program it starts\nexport EXISTING      # export one you already set\nenv                  # list what is exported\nprintenv PATH", note: "A program you launch is a separate process. It inherits the EXPORTED variables and nothing else — which is the entire reason `export` exists and why NODE_ENV has to be exported to reach your app." },
    { h: "Permissions", lang: "sh", code: "ls -l run.sh\n# -rw-r--r--   ← nobody may execute it\nchmod +x run.sh\n# -rwxr-xr-x   ← now everyone may\n\nchmod 644 f      # rw- r-- r--\nchmod 755 f      # rwx r-x r-x\nchmod -w f       # read-only for everybody", note: "Three groups of rwx: you, your group, everyone else. Each digit of 755 is one group, and each digit is read 4 + write 2 + execute 1 added together." },
    { h: "PATH", lang: "sh", code: "echo $PATH\n# /usr/local/bin:/usr/bin:/bin\nwhich ls\n# /usr/bin/ls\nexport PATH=$PATH:/home/you/bin   # add a folder, keep the rest", note: "When you type a bare name the shell walks PATH looking for an executable file with that name. The current directory is deliberately NOT on the list, which is why your own script needs `./` in front of it." }
  ],
  lessons: [

    {
      id: "cli-u6-1",
      title: "Variables, and the two kinds of quote",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/deploy",
      fs: {
        "/home/you/deploy/notes.txt": "staging deploy notes\n"
      },
      brief: "A shell variable is a name holding a piece of text.\n\n```\nAPP=shop\necho $APP        # shop\n```\n\nThe syntax is unforgiving in one specific way: **no spaces around the `=`.** `APP = shop` is not an assignment at all — the shell reads it as \"run the program `APP` with the arguments `=` and `shop`\", and tells you `APP: command not found`. It looks like a typo and it is really a different command.\n\n`${APP}` with braces means the same as `$APP`, and you need it whenever the name would otherwise run into the next characters: `$APPs` looks for a variable called `APPs`, while `${APP}s` gives you `shops`.\n\n**An unset variable expands to nothing at all.** Not an error, not a warning — just empty. `echo \"[$TYPO]\"` prints `[]`. That silence is the single most common source of a bad shell script, because `rm -rf $DIR/` with `DIR` unset becomes `rm -rf /`.\n\nAnd the quoting rule, which is the part people get wrong:\n\n- **Double quotes expand variables.** `\"$HOME\"` becomes `/home/you`.\n- **Single quotes expand nothing.** `'$HOME'` stays `$HOME`.\n\nSo quote with `\"` when you want the value and the protection, `'` when you want the literal text.\n\nThe shell also keeps a few variables set for you: `$HOME`, `$USER` and `$PWD`, which always tracks where you are.",
      example: { lang: "sh", code: "APP=shop\necho $APP          # shop\necho ${APP}s       # shops\necho \"$APP\"        # shop\necho '$APP'        # $APP\necho \"[$TYPO]\"     # []      ← unset is silently empty\n\ncd /home/you\necho $PWD          # /home/you  ← always current" },
      steps: [
        { text: "Set `APP` to `shop` and print it. Then print it with an `s` on the end using braces.",
          test: "T.eq(T.env('APP'), 'shop', 'Set APP=shop — no spaces around the =');\nT.expect(T.ran(/^echo\\s+\\$APP\\s*$/m), 'Print it with echo $APP');\nT.expect(T.printed('shop\\n'), 'It should print shop');\nT.expect(T.ran(/^echo\\s+\\$\\{APP\\}s\\s*$/m), 'Now run echo ${APP}s');\nT.expect(T.printed('shops\\n'), 'With braces you get shops — without them the shell would look for a variable called APPs');" },
        { text: "Show the quoting difference: print `$APP` inside double quotes, then inside single quotes.",
          test: "var d = T.transcript.filter(function (t) { return /^echo\\s+\"\\$APP\"\\s*$/.test(t.cmd); })[0];\nT.expect(d, 'Run echo \"$APP\" with double quotes');\nT.eq(d.out, 'shop\\n', 'Double quotes expand the variable');\nvar s = T.transcript.filter(function (t) { return /^echo\\s+'\\$APP'\\s*$/.test(t.cmd); })[0];\nT.expect(s, \"Run echo '$APP' with single quotes\");\nT.eq(s.out, '$APP\\n', 'Single quotes expand nothing — you get the text back exactly as typed');" },
        { text: "See the silence: print an unset variable inside brackets so the emptiness is visible.",
          test: "T.expect(T.ran(/echo\\s+\"?\\[\\$[A-Za-z_][A-Za-z0-9_]*\\]\"?/), 'Run something like echo \"[$TYPO]\" using a name you never set');\nT.expect(T.printed('[]'), 'It should print [] — an unset variable is empty, not an error, which is exactly what makes it dangerous');" },
        { text: "Use the ones the shell sets for you: print `$USER`, then `cd` somewhere and print `$PWD` to show it tracked the move.",
          test: "T.expect(T.ran(/^echo\\s+\\$USER\\s*$/m), 'Run echo $USER');\nT.expect(T.printed('you\\n'), '$USER should be you');\nT.expect(T.ran(/^cd\\s+\\S/m), 'Change directory somewhere');\nT.expect(T.ran(/^echo\\s+\\$PWD\\s*$/m), 'Then run echo $PWD');\nT.expect(/(^|\\n)\\/home\\/you\\n/.test(T.out()) || /(^|\\n)\\/home\\n/.test(T.out()), '$PWD should print where you moved to — it is refreshed on every command, not frozen at startup');" }
      ],
      files: [
        { name: "commands.sh", content: "# Variables. Remember: NO spaces around the = sign.\n\n# 1) Set APP to shop, print it, then print it with an s:\n\n\n\n# 2) Double quotes vs single quotes:\n\n\n# 3) Print a variable you never set, inside brackets:\n\n\n# 4) $USER, then cd somewhere and print $PWD:\n\n\n\n" }
      ],
      hints: [
        "`APP=shop` — no spaces at all. Then `echo $APP` and `echo ${APP}s`.",
        "`echo \"$APP\"` and `echo '$APP'`. Double quotes let the value through; single quotes hand back the characters you typed.",
        "For step 3 use any name you never assigned, e.g. `echo \"[$TYPO]\"`. For step 4: `echo $USER`, then `cd ..`, then `echo $PWD`."
      ],
      solution: {
        "commands.sh": "# Variables. Remember: NO spaces around the = sign.\n\n# 1) Set APP to shop, print it, then print it with an s:\nAPP=shop\necho $APP\necho ${APP}s\n\n# 2) Double quotes vs single quotes:\necho \"$APP\"\necho '$APP'\n\n# 3) Print a variable you never set, inside brackets:\necho \"[$TYPO]\"\n\n# 4) $USER, then cd somewhere and print $PWD:\necho $USER\ncd ..\necho $PWD\n"
      }
    },

    {
      id: "cli-u6-2",
      title: "export: what a program you start can see",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/app",
      fs: {
        "/home/you/app/show-env.sh": "#!/bin/sh\necho \"child sees LOCAL=[$LOCAL] SHARED=[$SHARED]\"\n",
        "/home/you/app/server.js": "// reads process.env.PORT\n"
      },
      setup: "chmod +x show-env.sh",
      brief: "You set `NODE_ENV=production`, run your app, and the app doesn't see it. This lesson is why.\n\nThere are **two kinds of variable**, and they look identical when you set them:\n\n- A plain `NAME=value` is a **shell variable**. It belongs to this shell and nothing else.\n- `export NAME=value` puts it in the **environment**, which is the set of variables handed to every program this shell starts.\n\nWhen you run a program, it's a separate process. It gets a *copy* of the exported variables and nothing else. Your shell variables aren't hidden from it out of spite — they were simply never part of what gets passed across.\n\nThat's the whole rule, and you can watch it happen. There's a small script here, `show-env.sh`, that prints two variables. Set one plainly, export the other, and run it: the child sees exactly one of them.\n\nTwo more things worth having:\n\n- `env` lists what's currently exported. `printenv NAME` prints one.\n- `NAME=value command` on a single line exports the variable **for that one command only** — which is why you'll see `NODE_ENV=production npm start` written exactly like that, all on one line.",
      example: { lang: "sh", code: "LOCAL=one\nexport SHARED=two\n./show-env.sh\n# child sees LOCAL=[] SHARED=[two]\n\nenv                     # everything exported\nprintenv SHARED         # two\n\nMODE=debug ./show-env.sh   # exported for this ONE command" },
      steps: [
        { text: "Set `LOCAL=one` as a plain shell variable and `SHARED=two` with `export`. Prove **your** shell can see both.",
          test: "T.eq(T.env('LOCAL'), 'one', 'Set LOCAL=one');\nT.eq(T.env('SHARED'), 'two', 'Set SHARED=two with export');\nT.expect(T.exported('SHARED'), 'SHARED must be exported');\nT.expect(!T.exported('LOCAL'), 'LOCAL must NOT be exported — that is the whole comparison');\nT.expect(T.printed('one') && T.printed('two'), 'echo both so you can see this shell has them both');" },
        { text: "Now run `./show-env.sh` and read what the child process got.",
          test: "T.expect(T.ran(/^\\.\\/show-env\\.sh\\s*$/m), 'Run ./show-env.sh');\nT.expect(T.printed('child sees LOCAL=[] SHARED=[two]'), 'The child should see SHARED but NOT LOCAL — an un-exported variable never crosses into another process');" },
        { text: "List the environment with `env` and confirm `SHARED` is in it while `LOCAL` is not.",
          test: "var e = T.transcript.filter(function (t) { return /^env\\s*$/.test(t.cmd); })[0];\nT.expect(e, 'Run env on its own line');\nT.expect(e.out.indexOf('SHARED=two') !== -1, 'env should list SHARED=two');\nT.expect(e.out.indexOf('LOCAL=one') === -1, 'env must NOT list LOCAL — it is not in the environment');\nT.expect(e.out.indexOf('HOME=/home/you') !== -1, 'env also shows the ones the shell always sets, like HOME');" },
        { text: "Finally, set `LOCAL` for one command only: run `LOCAL=three ./show-env.sh` and then run the script again bare, to show it did not stick.",
          test: "T.expect(T.ran(/^LOCAL=three\\s+\\.\\/show-env\\.sh\\s*$/m), 'Run LOCAL=three ./show-env.sh — all on one line');\nT.expect(T.printed('child sees LOCAL=[three] SHARED=[two]'), 'For that one command the child sees LOCAL=three');\nvar runs = T.transcript.filter(function (t) { return /^\\.\\/show-env\\.sh\\s*$/.test(t.cmd); });\nT.expect(runs.length >= 2, 'Run ./show-env.sh bare again afterwards');\nT.expect(runs[runs.length - 1].out.indexOf('LOCAL=[]') !== -1, 'The prefix applied to that ONE command only — afterwards LOCAL is un-exported again');" }
      ],
      files: [
        { name: "commands.sh", content: "# show-env.sh prints LOCAL and SHARED as the CHILD sees them.\n# It is already executable.\n\n# 1) One plain, one exported — and prove this shell has both:\n\n\n\n\n# 2) Run the script and read what crossed over:\n\n\n# 3) List the environment:\n\n\n# 4) Set LOCAL for ONE command, then run it bare again:\n\n\n" }
      ],
      hints: [
        "`LOCAL=one` and `export SHARED=two`. Then `echo $LOCAL` and `echo $SHARED` — your shell sees both, which is the point being contrasted.",
        "`./show-env.sh` — the `./` is required, and the next lesson explains why. The child prints `LOCAL=[]` because LOCAL was never exported.",
        "The one-command form is a prefix with no semicolon and no `export`: `LOCAL=three ./show-env.sh`. Then plain `./show-env.sh` to show it is gone again."
      ],
      solution: {
        "commands.sh": "# show-env.sh prints LOCAL and SHARED as the CHILD sees them.\n# It is already executable.\n\n# 1) One plain, one exported — and prove this shell has both:\nLOCAL=one\nexport SHARED=two\necho $LOCAL\necho $SHARED\n\n# 2) Run the script and read what crossed over:\n./show-env.sh\n\n# 3) List the environment:\nenv\n\n# 4) Set LOCAL for ONE command, then run it bare again:\nLOCAL=three ./show-env.sh\n./show-env.sh\n"
      }
    },

    {
      id: "cli-u6-3",
      title: "Permissions and the execute bit",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/scripts",
      fs: {
        "/home/you/scripts/backup.sh": "#!/bin/sh\necho \"backing up...\"\n",
        "/home/you/scripts/notes.txt": "just notes\n"
      },
      brief: "`ls -l` has been showing you a column of letters since Unit 1. Here's what it's for.\n\n```\n-rwxr-xr-x  31  backup.sh\n```\n\nAfter the leading `-` (file) or `d` (directory) come **nine characters, in three groups of three**:\n\n```\nrwx  r-x  r-x\n│    │    └── everyone else\n│    └─────── your group\n└──────────── you, the owner\n```\n\nEach group is **r**ead, **w**rite, e**x**ecute, in that order, with a `-` where the permission is missing.\n\nThe one that matters most here is **x**. A shell script is just a text file, and a text file is not a program. What makes it runnable is the execute bit — nothing else. Without it you get `Permission denied`, which is the operating system saying *\"I found your file, and I am not allowed to run it.\"*\n\n`chmod` changes the bits, two ways:\n\n**Symbolic** — say what to change. `chmod +x file` adds execute, `chmod -w file` removes write, `chmod u+x file` adds it just for you.\n\n**Octal** — say what the whole thing should be. Each digit is one group, and each digit adds up **r=4, w=2, x=1**:\n\n- `chmod 644` → `rw- r-- r--` — the normal file\n- `chmod 755` → `rwx r-x r-x` — the normal script or folder\n- `chmod 600` → `rw- --- ---` — private, and what an SSH key needs\n\nYou'll see `755` and `644` constantly. They're worth recognising on sight.",
      example: { lang: "sh", code: "ls -l backup.sh\n# -rw-r--r--  31  backup.sh    ← no x anywhere\n./backup.sh\n# bash: ./backup.sh: Permission denied\n\nchmod +x backup.sh\nls -l backup.sh\n# -rwxr-xr-x  31  backup.sh\n./backup.sh\n# backing up..." },
      steps: [
        { text: "Look at `backup.sh` in long format, then try to run it with `./backup.sh` and read the refusal.",
          test: "T.expect(T.ran(/^ls\\s+-l\\s+backup\\.sh\\s*$/m), 'Run ls -l backup.sh');\nT.expect(T.printed('-rw-r--r--'), 'It starts out as -rw-r--r-- — read and write, but no x for anybody');\nT.expect(T.ran(/^\\.\\/backup\\.sh\\s*$/m), 'Now try ./backup.sh');\nT.expect(T.err().indexOf('Permission denied') !== -1, 'It should be refused — the file is found, it just may not be executed');" },
        { text: "Add the execute bit with `chmod +x`, check the mode changed, and run it successfully.",
          test: "T.expect(T.ran(/^chmod\\s+\\+x\\s+backup\\.sh\\s*$/m), 'Run chmod +x backup.sh');\nT.eq(T.mode('/home/you/scripts/backup.sh'), '-rwxr-xr-x', 'The mode should now be -rwxr-xr-x');\nT.expect(T.printed('backing up...'), 'And ./backup.sh should now actually run');\nT.expect(T.cmdCount('ls') >= 2, 'Look at ls -l again so you can see the x appear');" },
        { text: "Use octal: make `notes.txt` read-only for everyone with `chmod 444`, then put it back to the normal `644`.",
          test: "T.expect(T.ran(/^chmod\\s+444\\s+notes\\.txt\\s*$/m), 'Run chmod 444 notes.txt');\nT.expect(T.printed('-r--r--r--'), 'Check it with ls -l — 444 is r-- r-- r--, read-only for everybody');\nT.expect(T.ran(/^chmod\\s+644\\s+notes\\.txt\\s*$/m), 'Then restore it with chmod 644 notes.txt');\nT.eq(T.mode('/home/you/scripts/notes.txt'), '-rw-r--r--', 'Back to -rw-r--r--, the ordinary file mode');" },
        { text: "Show that the bit survives an edit: overwrite `backup.sh` with `echo`, then confirm it is still executable and still runs.",
          test: "T.expect(T.typed(/>\\s*backup\\.sh/), 'Rewrite it with a redirect, e.g. echo \"#!/bin/sh\" > backup.sh');\nT.eq(T.mode('/home/you/scripts/backup.sh'), '-rwxr-xr-x', 'Rewriting a file does NOT clear its mode — it is still executable');\nT.expect(T.cmdCount('chmod') >= 3, 'You should not have needed a fourth chmod to fix it');" }
      ],
      files: [
        { name: "commands.sh", content: "# backup.sh is a shell script that is not yet a program.\n\n# 1) Look at it, then try to run it:\n\n\n\n# 2) Add the execute bit, look again, and run it:\n\n\n\n\n# 3) Make notes.txt read-only (444), look, then restore 644:\n\n\n\n\n# 4) Rewrite backup.sh with a redirect, then check the mode:\n\n\n" }
      ],
      hints: [
        "`ls -l backup.sh` shows `-rw-r--r--`. Then `./backup.sh` is refused with Permission denied.",
        "`chmod +x backup.sh` adds execute for everyone. `chmod 444 notes.txt` then `chmod 644 notes.txt` for the octal half.",
        "For the last step write two lines into it: `echo \"#!/bin/sh\" > backup.sh` then `echo \"echo done\" >> backup.sh`, and `ls -l` shows the x is still there."
      ],
      solution: {
        "commands.sh": "# backup.sh is a shell script that is not yet a program.\n\n# 1) Look at it, then try to run it:\nls -l backup.sh\n./backup.sh\n\n# 2) Add the execute bit, look again, and run it:\nchmod +x backup.sh\nls -l backup.sh\n./backup.sh\n\n# 3) Make notes.txt read-only (444), look, then restore 644:\nchmod 444 notes.txt\nls -l notes.txt\nchmod 644 notes.txt\nls -l notes.txt\n\n# 4) Rewrite backup.sh with a redirect, then check the mode:\necho \"#!/bin/sh\" > backup.sh\necho \"echo done\" >> backup.sh\nls -l backup.sh\n./backup.sh\n"
      }
    },

    {
      id: "cli-u6-4",
      title: "PATH, which, and why your script needs ./",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/tools",
      fs: {
        "/home/you/tools/greet": "#!/bin/sh\necho \"hello from greet\"\n"
      },
      brief: "When you type `ls`, how does the shell know what to run?\n\nIt walks a list of directories called **PATH**, in order, looking for an executable file with that name. The first one it finds wins.\n\n```\necho $PATH\n# /usr/local/bin:/usr/bin:/bin\n```\n\nColon-separated, searched left to right. `which ls` tells you which copy you're actually getting — useful when two versions of something are installed and you're not sure which one you've been running.\n\nNow the part that confuses everyone on day one. **The current directory is not on PATH.** Not by accident — deliberately. If it were, downloading a file called `ls` into a folder and then typing `ls` there would run *that*, and every downloaded folder would become a trap.\n\nSo to run a program sitting right next to you, you have to say so explicitly:\n\n```\n./greet\n```\n\n`.` is this directory, so `./greet` is a **path**, not a bare name — and the shell runs paths directly instead of searching. Typing `greet` alone gets you `command not found`, even with the file right there and executable.\n\nTo make your own tools work by name, you add a folder to PATH:\n\n```\nexport PATH=$PATH:/home/you/bin\n```\n\nNote the shape: `$PATH` first, then your addition. You're **appending to** the existing value, not replacing it — leave `$PATH` out and you'll lose every command on the system until you open a new terminal.",
      example: { lang: "sh", code: "echo $PATH\nwhich ls              # /usr/bin/ls\n\nchmod +x greet\ngreet                 # greet: command not found\n./greet               # hello from greet\n\nexport PATH=$PATH:/home/you/tools\ngreet                 # now it works\nwhich greet           # /home/you/tools/greet" },
      steps: [
        { text: "Print `$PATH`, and ask `which` where `ls` really comes from.",
          test: "T.expect(T.ran(/^echo\\s+\\$PATH\\s*$/m), 'Run echo $PATH');\nT.expect(T.printed('/usr/bin'), 'PATH should contain /usr/bin among others, separated by colons');\nT.expect(T.ran(/^which\\s+ls\\s*$/m), 'Run which ls');\nT.expect(T.printed('/usr/bin/ls'), 'which should report /usr/bin/ls');" },
        { text: "Make `greet` executable, then try running it by bare name — and watch it fail even though it's right here.",
          test: "T.expect(T.ran(/^chmod\\s+\\+x\\s+greet\\s*$/m), 'Run chmod +x greet');\nT.expect(T.ran(/^greet\\s*$/m), 'Now type just: greet');\nT.expect(T.err().indexOf('greet: command not found') !== -1, 'It should say command not found — the current directory is not searched');" },
        { text: "Run it the way you have to: with `./` in front.",
          test: "T.expect(T.ran(/^\\.\\/greet\\s*$/m), 'Run ./greet');\nT.expect(T.printed('hello from greet'), 'With ./ it is a path rather than a name, so the shell runs it directly');" },
        { text: "Add this folder to `PATH` — keeping what was already there — then run `greet` by name and confirm with `which`.",
          test: "T.expect(T.ran(/^export\\s+PATH=\\$\\{?PATH\\}?:\\S+/m), 'Run export PATH=$PATH:/home/you/tools — $PATH first, so you keep everything already on it');\nT.expect((T.env('PATH') || '').indexOf('/usr/bin') !== -1, 'PATH must still contain the system directories — you appended, not replaced');\nT.expect((T.env('PATH') || '').indexOf('/home/you/tools') !== -1, 'PATH should now also contain /home/you/tools');\nvar byName = T.transcript.filter(function (t) { return /^greet\\s*$/.test(t.cmd); });\nT.expect(byName.length >= 2, 'Type greet again, bare, now that PATH includes this folder');\nT.eq(byName[byName.length - 1].out, 'hello from greet\\n', 'This time the bare name should work');\nT.expect(T.ran(/^which\\s+greet\\s*$/m), 'Confirm with which greet');\nT.expect(T.printed('/home/you/tools/greet'), 'which should now report /home/you/tools/greet');" }
      ],
      files: [
        { name: "commands.sh", content: "# A script called greet is sitting right here.\n\n# 1) What is on PATH, and where does ls come from?\n\n\n# 2) Make greet executable, then type its bare name:\n\n\n\n# 3) Run it properly:\n\n\n# 4) Add this folder to PATH, then run it by name:\n\n\n\n" }
      ],
      hints: [
        "`echo $PATH` then `which ls`.",
        "`chmod +x greet`, then just `greet` — which fails — then `./greet`, which works.",
        "`export PATH=$PATH:/home/you/tools`. The `$PATH:` at the front is essential; without it you replace the whole list and lose every system command."
      ],
      solution: {
        "commands.sh": "# A script called greet is sitting right here.\n\n# 1) What is on PATH, and where does ls come from?\necho $PATH\nwhich ls\n\n# 2) Make greet executable, then type its bare name:\nchmod +x greet\ngreet\n\n# 3) Run it properly:\n./greet\n\n# 4) Add this folder to PATH, then run it by name:\nexport PATH=$PATH:/home/you/tools\ngreet\nwhich greet\n"
      }
    },

    {
      id: "cli-quiz-6",
      title: "Unit 6 quiz: Variables, permissions and PATH",
      kind: "quiz", xp: 10,
      brief: "Shell state, the execute bit, and how a name becomes a program. 80% to pass.",
      questions: [
        { q: "You type `APP = shop` and the shell replies `APP: command not found`. Why?",
          choices: ["APP is a reserved name that cannot be assigned", "Assignment needs no spaces, so with them the shell reads APP as a command to run", "The value shop must be quoted before it can be assigned", "Variables must be exported before they can be given a value"],
          answer: 1, explain: "An assignment is recognised only when the name, the `=` and the value are one unbroken word. With spaces, the shell parses three words and tries to run the first as a program. The missing spaces are syntax, not style." },
        { q: "You set `NODE_ENV=production` then start your app, and the app sees nothing. What was missing?",
          choices: ["export, so the variable becomes part of the environment the app inherits", "Quotes around production, without which the value is discarded", "A reload of the shell configuration file before any newly set value takes effect", "Uppercase is reserved for the system, so a lowercase name was needed"],
          answer: 0, explain: "A plain assignment makes a shell variable, which belongs to your shell alone. A program you launch is a separate process and receives a copy of only the EXPORTED variables. `export NODE_ENV=production`, or the one-line prefix form, is what carries it across." },
        { q: "`ls -l run.sh` shows `-rw-r--r--` and `./run.sh` fails with Permission denied. What fixes it?",
          code: "ls -l run.sh\n# -rw-r--r--  38  run.sh\n./run.sh\n# bash: ./run.sh: Permission denied",
          lang: "sh",
          choices: ["chmod +x run.sh", "chmod +r run.sh", "export PATH=$PATH:.", "mv run.sh /usr/bin/run.sh"],
          answer: 0, explain: "There is no `x` in any of the three groups, so nobody may execute the file. A script is only a text file until the execute bit says otherwise — and the error is the system saying it found your file and is not allowed to run it." },
        { q: "In the mode `755`, what does the middle digit describe?",
          choices: ["What everyone on the system may do with the file", "What your group may do: read and execute, but not write", "How many times the file may be executed before the bit clears", "The owner's permissions, which are always listed in the middle"],
          answer: 1, explain: "The three digits are owner, group, others, in that order. Each is read 4 plus write 2 plus execute 1 added together — so the middle `5` is 4+1, read and execute with no write." },
        { q: "Your script is executable and sitting in the current folder, but typing its bare name gives `command not found`. Why is that deliberate?",
          choices: ["Because bare names are reserved for programs installed by a package manager", "Because the shell caches command names and has not rescanned the folder yet", "Because the current directory is not on PATH, so a downloaded file cannot hijack a command name", "Because scripts must be registered with the shell before they can be run by name"],
          answer: 2, explain: "If the current directory were searched, unpacking an archive containing a file called `ls` and then typing `ls` there would run the stranger's code. Leaving it off PATH is what makes `./` necessary — and `./name` is a path, which the shell runs directly rather than searching for." },
        { q: "What is wrong with running `export PATH=/home/you/bin`?",
          choices: ["Nothing; this is the standard way to add a folder", "It replaces the entire PATH, so the system commands can no longer be found", "It only lasts for one command, so it will not take effect", "It needs quotes around the path, or the slashes are read as separators between entries"],
          answer: 1, explain: "PATH is the whole search list. Assigning a single directory throws the rest away, and `ls`, `grep` and everything else stop resolving until you open a new shell. The correct form keeps the old value: `export PATH=$PATH:/home/you/bin`." }
      ]
    }
  ]
});
