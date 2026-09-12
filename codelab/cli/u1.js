/* The Command Line & Your Machine — Unit 1: Finding your way */
window.CODELAB.addUnit("cli", {
  id: "cli-u1",
  title: "Finding your way",
  icon: "🧭",
  blurb: "The terminal always has you standing somewhere. Learn to say where that is, see what's around you, walk to somewhere else, and look a command up instead of guessing at it.",
  cheat: [
    { h: "The three you'll type most", lang: "sh", code: "pwd          # print working directory — where am I?\nls           # list what's here\ncd folder    # change directory — walk into it", note: "Every session is you standing in one directory. pwd answers where, ls answers what, cd moves you. Nothing else makes sense until those three are automatic." },
    { h: "Writing a path", lang: "sh", code: "cd /home/you/projects   # absolute — starts at / , works from anywhere\ncd projects             # relative — starts from where you are\ncd ..                   # up one level, to the parent\ncd ~                    # home, wherever home is\ncd                      # also home (cd with nothing)", note: "A leading / means \"start at the root of the whole machine\". No leading slash means \"start from here\". That one character is the difference between a path that works everywhere and one that only works from one spot." },
    { h: "Seeing more with ls", lang: "sh", code: "ls          # visible names only\nls -a       # ALL names, including ones starting with a dot\nls -l       # long: permissions, size, name\nls -la      # both at once\nls projects # list somewhere else without moving there", note: "Files whose names start with a dot are hidden by convention, not by security. .env and .gitignore are ordinary files that ls politely omits." },
    { h: "Reading ls -l", lang: "sh", code: "-rw-r--r--  248  index.html\ndrwxr-xr-x    -  images\n^                 \n| first character: - is a file, d is a directory\n +-- then who may read, write and execute it", note: "The nine characters after the first are three groups of rwx: you, your group, everyone else. Unit 6 makes them do something; for now just know which column is which." },
    { h: "Looking it up", lang: "sh", code: "man ls        # the manual page for ls\nls --help     # the short version most commands accept\nhistory       # every command you have run, numbered", note: "Nobody remembers flags. The people who look fast are the people who look often — reaching for man is the skill, not knowing the answer already." }
  ],
  lessons: [

    {
      id: "cli-u1-1",
      title: "Where am I, and what's here?",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you",
      fs: {
        "/home/you/notes.txt": "remember to back up the laptop\n",
        "/home/you/Downloads/invoice.pdf": "%PDF-1.4 (pretend)\n",
        "/home/you/Downloads/photo.jpg": "JFIF (pretend)\n",
        "/home/you/projects/portfolio/index.html": "<h1>Hello</h1>\n",
        "/home/you/projects/portfolio/style.css": "h1 { color: teal; }\n",
        "/home/you/projects/api/server.js": "// the api\n"
      },
      brief: "A graphical file manager shows you a window full of icons and you know where you are because you can see it. A terminal shows you a blinking cursor and tells you nothing. So the first skill is orienting yourself, and it is three commands wide.\n\n`pwd` — *print working directory* — answers **where am I**. It prints one absolute path, starting from `/`, the root of the whole machine.\n\n`ls` — *list* — answers **what's here**. Names only, one per line.\n\n`cd` — *change directory* — **moves you**. `cd projects` walks into the folder called `projects`, and from then on `pwd` and `ls` answer differently, because you're somewhere else.\n\nThat's the whole loop, and you'll run it thousands of times: look, move, look again.\n\nThe **Commands** tab is a real terminal session. Each line runs in order, and the **Terminal** pane shows exactly what came back.",
      example: { lang: "sh", code: "pwd\n# /home/you\n\nls\n# Downloads\n# notes.txt\n# projects\n\ncd projects\npwd\n# /home/you/projects" },
      steps: [
        { text: "Print where you are with `pwd`.",
          test: "T.expect(T.ran(/^pwd\\s*$/m), 'Run pwd on its own line');\nT.expect(T.printed('/home/you'), 'pwd should print /home/you');" },
        { text: "List what's here with `ls`.",
          test: "T.expect(T.ran(/^ls\\s*$/m), 'Run ls on a line by itself');\nT.expect(T.printed('notes.txt') && T.printed('projects'), 'ls should show notes.txt and projects — run it after pwd');" },
        { text: "Walk into `projects` with `cd`, then prove you moved by running `pwd` again.",
          test: "T.expect(T.ran(/^cd\\s+projects\\/?\\s*$/m), 'Run cd projects');\nT.eq(T.cwd(), '/home/you/projects', 'You should end up in /home/you/projects');\nT.expect(T.cmdCount('pwd') >= 2, 'Run pwd a second time AFTER the cd, so you can see the change');\nT.expect(T.printed('/home/you/projects'), 'The second pwd should print /home/you/projects');" },
        { text: "List what's in `projects` too.",
          test: "T.expect(T.cmdCount('ls') >= 2, 'Run ls again after the cd');\nT.expect(T.printed('portfolio') && T.printed('api'), 'The second ls should show portfolio and api');" }
      ],
      files: [
        { name: "commands.sh", content: "# You are somewhere. Find out where, look around,\n# walk into projects, and look around again.\n# One command per line. Lines starting with # are notes.\n\n# 1) Where am I?\n\n# 2) What's here?\n\n# 3) Walk into projects:\n\n# 4) Where am I now?\n\n# 5) What's here now?\n\n" }
      ],
      hints: [
        "`pwd` takes no arguments at all — just the three letters on their own line.",
        "`cd projects` — no slash needed at the front, because projects is right here next to you.",
        "The order is: pwd, ls, cd projects, pwd, ls. The last two are the same commands as the first two; that's the point — they answer differently once you've moved."
      ],
      solution: {
        "commands.sh": "# You are somewhere. Find out where, look around,\n# walk into projects, and look around again.\n# One command per line. Lines starting with # are notes.\n\n# 1) Where am I?\npwd\n\n# 2) What's here?\nls\n\n# 3) Walk into projects:\ncd projects\n\n# 4) Where am I now?\npwd\n\n# 5) What's here now?\nls\n"
      }
    },

    {
      id: "cli-u1-2",
      title: "Paths: absolute, relative, and ..",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/projects/portfolio",
      fs: {
        "/home/you/notes.txt": "remember to back up the laptop\n",
        "/home/you/projects/portfolio/index.html": "<h1>Hello</h1>\n",
        "/home/you/projects/portfolio/images/logo.svg": "<svg></svg>\n",
        "/home/you/projects/api/server.js": "// the api\n",
        "/home/you/projects/api/routes/users.js": "// users\n"
      },
      brief: "A path is directions to a file. There are two ways to write them, and mixing them up is the single most common reason a command \"doesn't work\".\n\nAn **absolute path** starts with `/` — the root of the machine. `/home/you/projects/api` means the same thing typed from anywhere, at any time. It's unambiguous and it's long.\n\nA **relative path** starts from wherever you're standing. `images` means *the images folder right here*. Shorter, but it only works from one place.\n\nThree shorthands do most of the work:\n\n- `..` is **the parent** — one level up. `cd ..` backs out. `cd ../api` backs out and goes straight into a sibling folder, in one move.\n- `.` is **right here**. Mostly useful as `./something`, and Unit 7 shows you why it's required.\n- `~` is **your home directory**, `/home/you`. `cd ~` and plain `cd` both take you home from anywhere.\n\nYou're starting inside `portfolio` this time, not at home.",
      example: { lang: "sh", code: "pwd\n# /home/you/projects/portfolio\n\ncd ..            # up to projects\ncd ../..         # up two, to /home/you\ncd ~             # home, from anywhere\ncd /home/you/projects/api    # absolute: works from anywhere" },
      steps: [
        { text: "You start in `portfolio`. Go up **one** level with `..`, and print where that put you.",
          test: "T.expect(T.ran(/^cd\\s+\\.\\.\\s*$/m), 'Run cd .. — two dots, meaning the parent');\nT.expect(/(^|\\n)\\/home\\/you\\/projects\\n/.test(T.out()), 'A pwd after it should print exactly /home/you/projects');" },
        { text: "From there, step into the sibling folder `api` — using a **relative** path, no leading slash.",
          test: "T.expect(T.ran(/^cd\\s+(\\.\\.\\/)?api\\/?\\s*$/m), 'Step into api with a relative path like `cd api`');\nT.notTyped(/cd\\s+\\/home\\/you\\/projects\\/api/, 'This step is about relative paths — do not type the full /home/you/... path yet');\nT.expect(/(^|\\n)\\/home\\/you\\/projects\\/api\\n/.test(T.out()), 'Print where you are — it should be /home/you/projects/api');" },
        { text: "Now go all the way to `/home/you/projects/portfolio/images` in **one** command, using an absolute path.",
          test: "T.expect(T.ran(/^cd\\s+\\/home\\/you\\/projects\\/portfolio\\/images\\/?\\s*$/m), 'Use one cd with the full path starting at /');\nT.expect(/(^|\\n)\\/home\\/you\\/projects\\/portfolio\\/images\\n/.test(T.out()), 'A pwd after that cd should print /home/you/projects/portfolio/images — did the cd run?');" },
        { text: "Finish at home. Use the `~` shorthand rather than typing the path out.",
          test: "T.expect(T.ran(/^cd\\s*~?\\s*$/m), 'Run cd ~ (or plain cd) to go home');\nT.eq(T.cwd(), '/home/you', 'You should finish in /home/you');" }
      ],
      files: [
        { name: "commands.sh", content: "# You start inside portfolio. Run pwd whenever you want\n# to check the move worked.\n\n# 1) Up one level, to projects:\n\npwd\n\n# 2) Into api, relatively (no leading slash):\n\npwd\n\n# 3) To portfolio/images, in ONE command, absolutely:\n\npwd\n\n# 4) Home, using the shorthand:\n\npwd\n" }
      ],
      hints: [
        "`..` means the parent directory. On its own, `cd ..` moves you up exactly one level.",
        "Once you're in `projects`, `api` sits right next to you — so `cd api` is enough. No slash at the front.",
        "An absolute path starts at `/`: `cd /home/you/projects/portfolio/images`. And `cd ~` goes home from anywhere at all."
      ],
      solution: {
        "commands.sh": "# You start inside portfolio. Run pwd whenever you want\n# to check the move worked.\n\n# 1) Up one level, to projects:\ncd ..\npwd\n\n# 2) Into api, relatively (no leading slash):\ncd api\npwd\n\n# 3) To portfolio/images, in ONE command, absolutely:\ncd /home/you/projects/portfolio/images\npwd\n\n# 4) Home, using the shorthand:\ncd ~\npwd\n"
      }
    },

    {
      id: "cli-u1-3",
      title: "Hidden files, and what ls -l is telling you",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/projects/api",
      fs: {
        "/home/you/projects/api/server.js": "const http = require('http');\nhttp.createServer(handler).listen(3000);\n",
        "/home/you/projects/api/package.json": "{\n  \"name\": \"api\"\n}\n",
        "/home/you/projects/api/.env": "DB_PASSWORD=hunter2\n",
        "/home/you/projects/api/.gitignore": "node_modules/\n.env\n",
        "/home/you/projects/api/routes/users.js": "// users\n"
      },
      brief: "You clone a project, run `ls`, and see three files. Your teammate says \"just edit the .env\". There's no .env. There is — `ls` is hiding it.\n\nAny name starting with a dot is **hidden by convention**. Not protected, not secret, not special to the operating system: just omitted by `ls` unless you ask. It's how config files stay out of your way, and it's why `.env`, `.gitignore` and `.git` are all invisible until you type `ls -a`.\n\n`ls -l` — *long* — is the other one you'll live in. It turns each name into a row:\n\n```\n-rw-r--r--  61  server.js\ndrwxr-xr-x   -  routes\n```\n\nThe first character is the **type**: `-` for a file, `d` for a directory. That alone answers \"is this thing a folder?\" without clicking anything. The next nine characters are permissions — three groups of `rwx`, for you, your group, and everyone else. Unit 6 makes them matter. Then the size, then the name.\n\nFlags combine: `ls -la` is both at once.",
      example: { lang: "sh", code: "ls\n# package.json\n# routes\n# server.js\n\nls -a\n# .env\n# .gitignore\n# package.json\n# routes\n# server.js\n\nls -l\n# -rw-r--r--  17  package.json\n# drwxr-xr-x   -  routes" },
      steps: [
        { text: "Run a plain `ls` first, so you can see what it leaves out.",
          test: "T.expect(T.ran(/^ls\\s*$/m), 'Run a plain ls on its own line');\nvar first = T.transcript.filter(function (t) { return /^ls\\s*$/.test(t.cmd); })[0];\nT.expect(first, 'Run a plain ls');\nT.expect(first.out.indexOf('.env') === -1, 'A plain ls should NOT list .env — if it does, you added a flag');" },
        { text: "Now show everything, hidden names included.",
          test: "T.expect(T.ran(/^ls\\s+-[a-z]*a/m), 'Run ls -a');\nT.expect(T.printed('.env') && T.printed('.gitignore'), 'ls -a should reveal .env and .gitignore');" },
        { text: "Use the long format to find out which entry is a **directory**.",
          test: "T.expect(T.ran(/^ls\\s+-[a-z]*l/m), 'Run ls -l (or ls -la)');\nT.expect(/drwx[^\\n]*routes/.test(T.out()), 'The long listing should show routes with a leading d, marking it a directory');" },
        { text: "Read the `.gitignore` to see why `.env` is hidden **and** kept out of Git.",
          test: "T.expect(T.ran(/^cat\\s+\\.gitignore\\s*$/m), 'Run cat .gitignore');\nT.expect(T.printed('.env'), 'The output should include the .env line');" }
      ],
      files: [
        { name: "commands.sh", content: "# You're in an API project. Your teammate insists there\n# is a .env here. Prove them right.\n\n# 1) Plain ls, to see what it shows:\n\n# 2) Everything, hidden names too:\n\n# 3) Long format — which one is a directory?\n\n# 4) Read the .gitignore:\n\n" }
      ],
      hints: [
        "The flag for \"all\" is `-a`, so `ls -a`.",
        "The flag for \"long\" is `-l`. You can write `ls -l`, or combine them as `ls -la`.",
        "`cat .gitignore` prints the file. Note that you can name a hidden file directly — hiding only affects listings, not access."
      ],
      solution: {
        "commands.sh": "# You're in an API project. Your teammate insists there\n# is a .env here. Prove them right.\n\n# 1) Plain ls, to see what it shows:\nls\n\n# 2) Everything, hidden names too:\nls -a\n\n# 3) Long format — which one is a directory?\nls -la\n\n# 4) Read the .gitignore:\ncat .gitignore\n"
      }
    },

    {
      id: "cli-u1-4",
      title: "Answering your own questions: man and --help",
      kind: "shell", chip: "CLI", xp: 15, mins: 10,
      cwd: "/home/you/logs",
      fs: {
        "/home/you/logs/app.log": "boot ok\nuser login\ncache miss\ncache miss\nuser logout\nboot ok\ntimeout\n"
      },
      brief: "Here is the thing nobody tells beginners: experienced people do not remember the flags either. What they have is the habit of looking, and it takes four seconds.\n\n`man ls` opens the **manual page** for `ls` — what it's for, how to call it, and what each flag does. Almost every command also accepts `--help`, which prints a shorter version straight into your terminal.\n\nThis matters more than it sounds. The alternative to looking things up is guessing, and a guessed flag on a command like `rm` is how people delete things they meant to keep. Reading first costs seconds; guessing can cost an afternoon.\n\n`history` is the third piece. Everything you've typed is numbered and kept, so \"what was that command I ran twenty minutes ago?\" is a question with an answer.\n\nYou've got a log file here. Find out how to print just its **last** three lines — by reading, not by guessing.",
      example: { lang: "sh", code: "man tail\n# TAIL(1)\n#\n# NAME\n#     tail — Print the last lines of a file (10 by default).\n#\n# SYNOPSIS\n#     tail [-n N] [file]\n\nwc --help    # the same idea, shorter" },
      steps: [
        { text: "Read the manual page for `tail`.",
          test: "T.expect(T.ran(/^man\\s+tail\\s*$/m), 'Run man tail');\nT.expect(T.printed('SYNOPSIS'), 'The manual page should print — look for the SYNOPSIS section');" },
        { text: "Use what it told you: print the **last 3 lines** of `app.log`.",
          test: "T.expect(T.ran(/^tail\\s+-n\\s*3\\s+app\\.log\\s*$/m), 'Run tail with -n 3 on app.log');\nT.expect(T.printed('user logout\\nboot ok\\ntimeout'), 'You should see exactly the last three lines: user logout, boot ok, timeout');\nT.expect(!T.printed('cache miss'), 'Only three lines — cache miss should not appear in the tail output');" },
        { text: "Now the short form: ask `wc` for its own help with `--help`.",
          test: "T.expect(T.ran(/^wc\\s+--help\\s*$/m), 'Run wc --help');\nT.expect(T.printed('-l'), 'The help should mention the -l flag');" },
        { text: "Use that to count how many **lines** are in `app.log`, then look back over everything you typed with `history`.",
          test: "T.expect(T.ran(/^wc\\s+-l\\s+app\\.log\\s*$/m), 'Run wc -l app.log');\nT.expect(T.printed('7 app.log'), 'app.log has 7 lines, so wc -l should print: 7 app.log');\nT.expect(T.ran(/^history\\s*$/m), 'Finish with history');\nT.expect(/\\d+\\s+man tail/.test(T.out()), 'history should list your numbered commands, starting with man tail');" }
      ],
      files: [
        { name: "commands.sh", content: "# You need the last few lines of app.log, and you do not\n# remember the flag. Look it up rather than guessing.\n\n# 1) Read the manual for tail:\n\n# 2) Print the last 3 lines of app.log:\n\n# 3) Ask wc for its help, the short way:\n\n# 4) Count the lines in app.log:\n\n# 5) Look back at everything you typed:\n\n" }
      ],
      hints: [
        "`man tail` — the command is `man` and the argument is the name of the thing you want to read about.",
        "The SYNOPSIS line says `tail [-n N] [file]`, so N is how many lines: `tail -n 3 app.log`.",
        "`wc --help` lists the flags; `-l` is the one that counts lines. Then `wc -l app.log`, and `history` last."
      ],
      solution: {
        "commands.sh": "# You need the last few lines of app.log, and you do not\n# remember the flag. Look it up rather than guessing.\n\n# 1) Read the manual for tail:\nman tail\n\n# 2) Print the last 3 lines of app.log:\ntail -n 3 app.log\n\n# 3) Ask wc for its help, the short way:\nwc --help\n\n# 4) Count the lines in app.log:\nwc -l app.log\n\n# 5) Look back at everything you typed:\nhistory\n"
      }
    },

    {
      id: "cli-quiz-1",
      title: "Unit 1 quiz: Finding your way",
      kind: "quiz", xp: 10,
      brief: "Paths, listings, and looking things up. 80% to pass.",
      questions: [
        { q: "You are in `/home/you/projects/portfolio`. What does `cd ../api` do?",
          choices: ["Moves you to /home/you/projects/api", "Moves you to /home/you/projects/portfolio/api", "Fails, because you cannot combine .. with a folder name in one command", "Moves you to /api at the root of the machine"],
          answer: 0, explain: "`..` resolves to the parent, `/home/you/projects`, and then `api` is looked up inside that. Combining them is normal and saves a step — the path is read left to right, one piece at a time." },
        { q: "Your teammate says to edit `.env`, but `ls` shows no such file. What is going on?",
          choices: ["The file is encrypted and cannot be listed until you decrypt it", "Names beginning with a dot are hidden from ls unless you pass -a", "Your teammate is describing a file that only exists on their machine", "The file exists but your account lacks permission to see the listing"],
          answer: 1, explain: "A leading dot means hidden by convention — nothing more. `ls -a` shows it, and you could always `cat .env` directly, because hiding affects listings only, not access." },
        { q: "What is the difference between `cd /projects` and `cd projects`?",
          choices: ["The first is faster because it skips searching the current directory", "They are the same; the leading slash is optional styling", "The first looks for projects at the root of the machine, the second inside the current directory", "The first only works if you are already at the root"],
          answer: 2, explain: "A leading `/` means \"start from the root of the whole filesystem\". Without it the path is relative to where you're standing. This is why a script that works in one folder breaks in another — it used a relative path when it needed an absolute one." },
        { q: "In `ls -l` output, a row begins with the character `d`. What does that tell you?",
          code: "ls -l\n# drwxr-xr-x   -  routes\n# -rw-r--r--  61  server.js",
          lang: "sh",
          choices: ["The entry is a directory", "The file was deleted and is awaiting cleanup", "The entry is a duplicate of another file in this folder", "The file is a draft that has not been saved to disk yet"],
          answer: 0, explain: "The very first character is the entry's type: `-` for an ordinary file, `d` for a directory. The nine characters after it are the read, write and execute permissions, in three groups." },
        { q: "You cannot remember which flag makes `tail` print a specific number of lines. What is the fastest correct move?",
          choices: ["Try -1, -2 and -3 in turn until the output looks right", "Run `man tail` and read the SYNOPSIS", "Search your history for a previous tail command and hope you used it", "Run tail with no flags and count the output yourself"],
          answer: 1, explain: "Reading takes about four seconds and gives you the answer with certainty. Guessing flags is a habit that is harmless on `tail` and expensive on `rm` — the point is to build the reflex on the safe commands." },
        { q: "You run `pwd` and it prints `/home/you`. Then you run `cd` with no argument at all. Where do you end up?",
          choices: ["One level up in /home, the same place cd .. would have taken you", "Nowhere — cd requires an argument and prints an error", "Still in /home/you, since cd with no argument goes home", "At the root of the machine, /"],
          answer: 2, explain: "Bare `cd` goes to your home directory, the same as `cd ~`. You were already there, so nothing appears to happen — but from anywhere else, plain `cd` is the fastest way home." }
      ]
    }
  ]
});
