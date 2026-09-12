/* Engine tests for shell.js — pure Node, no browser, well under a second.
   Usage:  node tools/test-shell.js

   The CLI course is graded by inspecting what the shell DID: which files
   exist afterwards, what a command printed, what exit code it left behind.
   A bug in here would pass or fail a learner for reasons that have nothing
   to do with what they typed, and Phase 1 only exercises the paths the
   lessons happen to walk down.

   Two thirds of these are regression tests in disguise. The Git course runs
   on this same interpreter, so every scenario below that touches quoting,
   redirection or sequencing is also a promise that `git commit -m "..."`
   still means what it always meant. */
const path = require("path");
const SH = require(path.join(__dirname, "..", "shell.js"));

let passed = 0;
const failures = [];
const HOME = "/home/you";

/* One sandbox, one script, everything the assertions need. `setup` runs
   first and must succeed, exactly like a lesson's does. */
function sh(spec, script, opts) {
  opts = opts || {};
  const fs = SH.createFS(spec || {});
  if (opts.setup) {
    const pre = SH.run(fs, opts.setup, { cwd: opts.cwd || HOME });
    const broke = pre.transcript.find(t => t.code !== 0);
    if (broke && !opts.setupMayFail) throw new Error("setup failed at `" + broke.cmd + "`: " + broke.err);
  }
  const res = SH.run(fs, script || "", { cwd: opts.cwd || HOME, env: opts.env });
  return {
    fs,
    out: res.transcript.map(t => t.out).join(""),
    err: res.transcript.map(t => t.err).join(""),
    cwd: res.cwd,
    procs: res.procs,
    code: res.transcript.length ? res.transcript[res.transcript.length - 1].code : 0,
    at: (i) => res.transcript[i],
    transcript: res.transcript,
    file: (p) => {
      const n = SH.nodeAt(fs, SH.resolve(opts.cwd || HOME, HOME, p));
      return n && n.f !== undefined ? n.f : null;
    },
    exists: (p) => !!SH.nodeAt(fs, SH.resolve(opts.cwd || HOME, HOME, p)),
    names: (p) => {
      const n = SH.nodeAt(fs, SH.resolve(opts.cwd || HOME, HOME, p || "."));
      return n && n.d ? Object.keys(n.d).sort() : null;
    }
  };
}
function test(name, fn) {
  try { fn(); passed++; }
  catch (e) { failures.push(name + " — " + (e && e.message)); }
}
function eq(a, b, msg) {
  if (JSON.stringify(a) !== JSON.stringify(b))
    throw new Error((msg || "not equal") + ": got " + JSON.stringify(a) + ", want " + JSON.stringify(b));
}
function ok(c, msg) { if (!c) throw new Error(msg || "expected true"); }
function has(hay, needle, msg) {
  if (String(hay).indexOf(needle) === -1)
    throw new Error((msg || "missing") + ": " + JSON.stringify(needle) + " not in " + JSON.stringify(hay));
}
function lacks(hay, needle, msg) {
  if (String(hay).indexOf(needle) !== -1)
    throw new Error((msg || "should be absent") + ": " + JSON.stringify(needle) + " found in " + JSON.stringify(hay));
}

const FILES = {
  "/home/you/a.txt": "apple\n",
  "/home/you/b.txt": "banana\n",
  "/home/you/notes.md": "# notes\n",
  "/home/you/.env": "SECRET=1\n",
  "/home/you/src/app.js": "let a\n",
  "/home/you/src/util.js": "let u\n",
  "/home/you/src/deep/tiny.js": "let t\n"
};

/* ---------- paths and listing ---------- */

test("pwd, cd and .. move where they say", () => {
  const r = sh(FILES, "pwd\ncd src\npwd\ncd ..\npwd\ncd /home/you/src/deep\npwd\ncd ~\npwd");
  eq(r.out, "/home/you\n/home/you/src\n/home/you\n/home/you/src/deep\n/home/you\n");
});
test("cd into a file, and into nothing, both fail without moving", () => {
  const r = sh(FILES, "cd a.txt\ncd nope\npwd");
  has(r.err, "cd: a.txt: Not a directory");
  has(r.err, "cd: nope: No such file or directory");
  eq(r.out, "/home/you\n", "a failed cd must leave you where you were");
});
test("ls hides dotfiles until -a", () => {
  const plain = sh(FILES, "ls").out;
  lacks(plain, ".env", "ls without -a must not show dotfiles");
  has(sh(FILES, "ls -a").out, ".env");
});
test("ls -l reports real permissions and size", () => {
  const r = sh(FILES, "ls -l a.txt\nls -l src");
  has(r.out, "-rw-r--r--  6  a.txt");
  has(r.out, "drwxr-xr-x  -  deep");
});
test("ls of several things groups files, then each directory under a heading", () => {
  const r = sh(FILES, "ls a.txt b.txt src");
  eq(r.out, "a.txt\nb.txt\n\nsrc:\napp.js\ndeep\nutil.js\n");
});
test("ls keeps going after a missing name and still exits non-zero", () => {
  const r = sh(FILES, "ls nope a.txt");
  has(r.err, "ls: nope: No such file or directory");
  has(r.out, "a.txt");
  eq(r.code, 1);
});

/* ---------- globbing: the heart of the course ---------- */

test("* expands to matching names, sorted", () => {
  eq(sh(FILES, "echo *.txt").out, "a.txt b.txt\n");
});
test("* never matches a leading dot", () => {
  lacks(sh(FILES, "echo *").out, ".env", "a bare * must spare dotfiles");
  has(sh(FILES, "echo .*").out, ".env", "an explicit dot matches them");
});
test("quoting turns a glob back into text", () => {
  eq(sh(FILES, 'echo "*.txt"').out, "*.txt\n");
  eq(sh(FILES, "echo '*.txt'").out, "*.txt\n");
  eq(sh(FILES, "echo \\*.txt").out, "*.txt\n");
});
test("a pattern that matches nothing is passed through unchanged", () => {
  eq(sh(FILES, "echo *.zzz").out, "*.zzz\n");
  has(sh(FILES, "ls *.zzz").err, "ls: *.zzz: No such file or directory");
});
test("globs work across directories and only descend where they must", () => {
  eq(sh(FILES, "echo src/*.js").out, "src/app.js src/util.js\n");
  eq(sh(FILES, "echo src/*/*.js").out, "src/deep/tiny.js\n");
});
test("? matches exactly one character and [] a set", () => {
  eq(sh(FILES, "echo ?.txt").out, "a.txt b.txt\n");
  eq(sh(FILES, "echo [ab].txt").out, "a.txt b.txt\n");
  eq(sh(FILES, "echo [!a].txt").out, "b.txt\n");
});
test("the command sees the expanded list, so rm and cp act on many files", () => {
  const r = sh(FILES, "mkdir keep\ncp *.txt keep\nls keep\nrm *.txt\nls");
  has(r.out, "a.txt\nb.txt");
  eq(r.names("keep"), ["a.txt", "b.txt"]);
  eq(r.names("."), [".env", "keep", "notes.md", "src"], "the .txt files are gone, .env survived");
});
test("cp of many files insists the destination is a directory", () => {
  has(sh(FILES, "cp *.txt one.txt").err, "cp: target 'one.txt' is not a directory");
});
test("an absolute glob keeps its leading slash", () => {
  eq(sh(FILES, "echo /home/you/*.txt").out, "/home/you/a.txt /home/you/b.txt\n");
});

/* ---------- quoting, pipes, redirection ---------- */

test("quoted separators are text, not syntax", () => {
  eq(sh(FILES, 'echo "a > b"').out, "a > b\n");
  eq(sh(FILES, 'echo "x && y"').out, "x && y\n");
  eq(sh(FILES, 'echo "one | two"').out, "one | two\n");
  ok(!sh(FILES, 'echo "a > b"').exists("b"), "a quoted > must not create a file");
});
test("> writes, >> appends", () => {
  const r = sh(FILES, "echo one > log.txt\necho two >> log.txt\ncat log.txt");
  eq(r.file("log.txt"), "one\ntwo\n");
});
test("> truncates even when the command failed, and the error still shows", () => {
  const r = sh(FILES, "ls nope > out.txt");
  eq(r.file("out.txt"), "", "bash leaves you an empty file");
  has(r.err, "No such file or directory", "stderr does not go down the redirect");
});
test("pipes carry stdout onward and a classic count pipeline works", () => {
  const spec = { "/home/you/access.log": "GET 200\nGET 404\nGET 200\nPOST 500\nGET 404\nGET 200\n" };
  const r = sh(spec, 'cut -d" " -f2 access.log | sort | uniq -c | sort -rn');
  eq(r.out, "   3 200\n   2 404\n   1 500\n");
});
test("/dev/null swallows output without becoming a file", () => {
  const r = sh(FILES, "grep apple a.txt > /dev/null\necho $?\ngrep zebra a.txt > /dev/null\necho $?");
  eq(r.out, "0\n1\n", "the exit code survives; the matched line does not");
  ok(!r.exists("/dev/null"), "/dev/null must not be created in the tree");
  ok(!r.exists("dev"), "and no dev directory either");
});
test("tee writes a file and keeps the stream flowing", () => {
  const r = sh(FILES, "echo hello | tee copy.txt | wc -c");
  eq(r.file("copy.txt"), "hello\n");
  eq(r.out, "6\n");
});

/* ---------- sequencing and exit codes ---------- */

test("&& runs the second only on success, || only on failure", () => {
  eq(sh(FILES, "true && echo yes").out, "yes\n");
  eq(sh(FILES, "false && echo no").out, "");
  eq(sh(FILES, "false || echo rescue").out, "rescue\n");
  eq(sh(FILES, "true || echo skipped").out, "");
});
test("; runs both regardless, and resets a short-circuit", () => {
  eq(sh(FILES, "false && echo a ; echo b").out, "b\n");
});
test("&& shares one shell, so cd really moves the next command", () => {
  const r = sh(FILES, "mkdir -p deep/er && cd deep/er && pwd");
  eq(r.out, "/home/you/deep/er\n");
  eq(r.cwd, "/home/you/deep/er");
});
test("$? holds the previous exit code, on the same line and the next", () => {
  eq(sh(FILES, "true\necho $?").out, "0\n");
  eq(sh(FILES, "false\necho $?").out, "1\n");
  eq(sh(FILES, "false ; echo $?").out, "1\n");
});
test("grep exits 1 when it matched nothing — the reason it is useful in a script", () => {
  const r = sh(FILES, "grep zebra a.txt || echo absent");
  eq(r.out, "absent\n");
});
test("a command that does not exist is 127, and stops an && chain", () => {
  const r = sh(FILES, "nosuchthing && echo never");
  has(r.err, "nosuchthing: command not found");
  eq(r.at(0).code, 127);
  lacks(r.out, "never");
});

/* ---------- variables and the environment ---------- */

test("NAME=value sets a variable, $NAME reads it back", () => {
  eq(sh(FILES, "GREETING=hello\necho $GREETING").out, "hello\n");
  eq(sh(FILES, "N=world\necho ${N}wide").out, "worldwide\n");
});
test("single quotes stop expansion, double quotes do not", () => {
  eq(sh(FILES, 'N=x\necho "$N"').out, "x\n");
  eq(sh(FILES, "N=x\necho '$N'").out, "$N\n");
});
test("an unset variable expands to nothing at all", () => {
  eq(sh(FILES, "echo [$NOPE]").out, "[]\n");
});
test("PWD and HOME follow the shell, not the lesson's opinion", () => {
  eq(sh(FILES, "cd src\necho $PWD").out, "/home/you/src\n");
  eq(sh(FILES, "echo $HOME").out, "/home/you\n");
});
test("env lists exported variables and the always-present ones", () => {
  const r = sh(FILES, "LOCAL=no\nexport SHARED=yes\nenv");
  has(r.out, "SHARED=yes");
  lacks(r.out, "LOCAL=no", "an un-exported variable is not in the environment");
  has(r.out, "HOME=/home/you");
  has(r.out, "PATH=");
});
test("unset removes a variable, printenv reports the absence with code 1", () => {
  const r = sh(FILES, "export A=1\nunset A\nprintenv A\necho $?");
  eq(r.out, "1\n");
});
test("VAR=x command applies to that command only", () => {
  const spec = { "/home/you/show.sh": "#!/bin/sh\necho [$MODE]\n" };
  const r = sh(spec, "chmod +x show.sh\nMODE=prod ./show.sh\n./show.sh\necho [$MODE]");
  eq(r.out, "[prod]\n[]\n[]\n");
});

/* ---------- permissions ---------- */

test("chmod understands octal and symbolic modes", () => {
  const r = sh(FILES, "chmod 755 a.txt\nls -l a.txt\nchmod -w a.txt\nls -l a.txt\nchmod u+w a.txt\nls -l a.txt");
  has(r.out, "-rwxr-xr-x  6  a.txt");
  has(r.out, "-r-xr-xr-x  6  a.txt");
  has(r.out, "-rwxr-xr-x  6  a.txt");
});
test("chmod rejects nonsense rather than guessing", () => {
  has(sh(FILES, "chmod bogus a.txt").err, "chmod: invalid mode: 'bogus'");
  has(sh(FILES, "chmod +x nope").err, "No such file or directory");
});
test("a mode survives being copied, moved and rewritten", () => {
  const r = sh(FILES, "chmod +x a.txt\ncp a.txt c.txt\nmv b.txt d.txt\necho new > a.txt\nls -l a.txt c.txt d.txt");
  has(r.out, "-rwxr-xr-x  4  a.txt", "> truncates a file without disarming it");
  has(r.out, "-rwxr-xr-x  6  c.txt", "cp carries the mode");
  has(r.out, "-rw-r--r--  7  d.txt");
});

/* ---------- PATH, and programs of your own ---------- */

test("a script must be executable before ./ will run it", () => {
  const spec = { "/home/you/go.sh": "#!/bin/sh\necho ran\n" };
  const r = sh(spec, "./go.sh\nchmod +x go.sh\n./go.sh");
  has(r.err, "bash: ./go.sh: Permission denied");
  eq(r.at(0).code, 126);
  has(r.out, "ran\n");
});
test("a script needs a shebang, and a plausible one", () => {
  const spec = { "/home/you/bare": "echo hi\n", "/home/you/weird": "#!/usr/bin/perl\necho hi\n" };
  const r = sh(spec, "chmod +x bare weird\n./bare\n./weird");
  has(r.err, "cannot execute: no shebang line");
  has(r.err, "bad interpreter");
});
test("#!/usr/bin/env bash is accepted too", () => {
  const spec = { "/home/you/go": "#!/usr/bin/env bash\necho fine\n" };
  eq(sh(spec, "chmod +x go\n./go").out, "fine\n");
});
test("a bare name is NOT found in the current directory — that is what PATH means", () => {
  const spec = { "/home/you/go.sh": "#!/bin/sh\necho ran\n" };
  const r = sh(spec, "chmod +x go.sh\ngo.sh");
  has(r.err, "go.sh: command not found");
});
test("adding a directory to PATH makes its programs work by name", () => {
  const spec = { "/home/you/bin/hi": "#!/bin/sh\necho hi there\n" };
  const r = sh(spec, "chmod +x bin/hi\nhi\nexport PATH=$PATH:/home/you/bin\nhi\nwhich hi");
  has(r.err, "hi: command not found");
  has(r.out, "hi there\n");
  has(r.out, "/home/you/bin/hi\n");
});
test("which finds builtins, and fails with code 1 on nothing", () => {
  eq(sh(FILES, "which ls").out, "/usr/bin/ls\n");
  eq(sh(FILES, "which nosuch\necho $?").out, "1\n");
});
test("a child sees exported variables and nothing else", () => {
  const spec = { "/home/you/show.sh": "#!/bin/sh\necho LOCAL=[$LOCAL] SHARED=[$SHARED]\n" };
  const r = sh(spec, "chmod +x show.sh\nLOCAL=one\nexport SHARED=two\n./show.sh");
  eq(r.out, "LOCAL=[] SHARED=[two]\n");
});
test("a script reads its arguments as $1, $@ and $#", () => {
  const spec = { "/home/you/args.sh": "#!/bin/sh\necho first=$1 count=$# all=$@\n" };
  eq(sh(spec, "chmod +x args.sh\n./args.sh red green blue").out, "first=red count=3 all=red green blue\n");
});
test("exit stops a script and sets the code its caller tests", () => {
  const spec = { "/home/you/bad.sh": "#!/bin/sh\necho before\nexit 3\necho after\n" };
  const r = sh(spec, "chmod +x bad.sh\n./bad.sh\necho code=$?");
  has(r.out, "before\n");
  lacks(r.out, "after", "exit must stop the script");
  has(r.out, "code=3\n");
});
test("a script that changes directory does not move its caller", () => {
  const spec = { "/home/you/cdto.sh": "#!/bin/sh\ncd /home/you/src\npwd\n" };
  const r = sh(Object.assign({}, FILES, spec), "chmod +x cdto.sh\n./cdto.sh\npwd");
  eq(r.out, "/home/you/src\n/home/you\n");
});
test("a script cannot recurse forever", () => {
  const spec = { "/home/you/loop.sh": "#!/bin/sh\n./loop.sh\n" };
  const r = sh(spec, "chmod +x loop.sh\n./loop.sh");
  has(r.err, "too many levels of recursion");
});

/* ---------- processes and ports ---------- */

test("a port is genuinely held until the process is killed", () => {
  const r = sh({}, "serve 3000\nserve 3000\nlsof -i :3000\nkill 4001\nserve 3000");
  has(r.out, "Listening on http://localhost:3000 (pid 4001)");
  has(r.err, "EADDRINUSE");
  has(r.out, "(LISTEN)");
  has(r.out, "(pid 4002)", "after the kill the port is free again");
});
test("curl reaches a listening port and refuses on a dead one", () => {
  const r = sh({}, "curl localhost:3000\nserve 3000\ncurl localhost:3000");
  has(r.err, "Connection refused");
  eq(r.at(0).code, 7);
  has(r.out, "Hello from the server on port 3000");
});
test("& gives a command a job number and a pid, and ps lists it", () => {
  const r = sh({}, "sleep 30 &\njobs\nps\nkill 4001\nps");
  has(r.out, "[1] 4001");
  has(r.out, "Running");
  has(r.out, "4001 sleep 30");
  eq(r.procs.length, 0, "kill removes the process");
});
test("&& is never read as a background &", () => {
  const r = sh(FILES, "true && echo joined");
  eq(r.out, "joined\n");
  lacks(r.out, "[1]", "no job may be created by &&");
});
test("kill on a pid that is not there fails", () => {
  has(sh({}, "kill 9999").err, "kill: no such process");
});

/* ---------- reading files and searching ---------- */

test("head, tail and wc agree about a file", () => {
  const spec = { "/home/you/n.txt": "1\n2\n3\n4\n5\n" };
  const r = sh(spec, "head -n 2 n.txt\ntail -n 2 n.txt\nwc -l n.txt\nwc n.txt");
  eq(r.at(0).out, "1\n2\n");
  eq(r.at(1).out, "4\n5\n");
  eq(r.at(2).out, "5 n.txt\n");
  eq(r.at(3).out, "5 5 10 n.txt\n");
});
test("wc over several files totals them", () => {
  const spec = { "/home/you/a.txt": "1\n2\n", "/home/you/b.txt": "3\n" };
  eq(sh(spec, "wc -l *.txt").out, "2 a.txt\n1 b.txt\n3 total\n");
});
test("grep -n, -i, -v and -c each change one thing", () => {
  const spec = { "/home/you/f.txt": "Apple\nbanana\napple pie\n" };
  eq(sh(spec, "grep apple f.txt").out, "apple pie\n");
  eq(sh(spec, "grep -i apple f.txt").out, "Apple\napple pie\n");
  eq(sh(spec, "grep -n -i apple f.txt").out, "1:Apple\n3:apple pie\n");
  eq(sh(spec, "grep -v apple f.txt").out, "Apple\nbanana\n");
  eq(sh(spec, "grep -c -i apple f.txt").out, "2\n");
});
test("grep -q prints nothing and answers only with its exit code", () => {
  const spec = { "/home/you/f.txt": "one\nERROR two\n" };
  const hit = sh(spec, "grep -q ERROR f.txt");
  eq(hit.out, "", "-q must print nothing even when it matched");
  eq(hit.code, 0);
  const miss = sh(spec, "grep -q ZEBRA f.txt");
  eq(miss.out, "");
  eq(miss.code, 1);
  eq(sh(spec, 'grep -q ERROR f.txt && echo "found"').out, "found\n");
});
test("grep -r searches a whole tree and names the file each hit came from", () => {
  const spec = { "/home/you/src/a.js": "// TODO one\n", "/home/you/src/deep/b.js": "x // TODO two\n" };
  const r = sh(spec, "grep -rn TODO src");
  eq(r.out, "src/a.js:1:// TODO one\nsrc/deep/b.js:1:x // TODO two\n");
});
test("grep refuses a directory unless you ask for -r", () => {
  has(sh(FILES, "grep let src").err, "grep: src: Is a directory");
});
test("find prints paths shaped like the start you gave it", () => {
  eq(sh(FILES, 'find . -name "*.js"').out, "./src/app.js\n./src/deep/tiny.js\n./src/util.js\n");
  eq(sh(FILES, 'find src -name "tiny.js"').out, "src/deep/tiny.js\n");
});
test("find -type separates files from directories", () => {
  eq(sh(FILES, "find src -type d").out, "src\nsrc/deep\n");
});
test("an unquoted -name pattern is eaten by the shell first", () => {
  /* The classic beginner trap, and it must reproduce faithfully: the glob
     matches a.txt in the cwd, so find never sees the pattern at all. */
  const r = sh(FILES, "find . -name *.txt");
  lacks(r.out, "b.txt", "the shell expanded the pattern before find ran");
});

/* ---------- making and breaking things ---------- */

test("mkdir -p builds a whole path and forgives one that exists", () => {
  const r = sh({}, "mkdir -p a/b/c\nmkdir a/b/c\nmkdir -p a/b/c\necho ok");
  has(r.err, "mkdir: a/b/c: File exists");
  has(r.out, "ok");
  ok(r.exists("a/b/c"));
});
test("mkdir without -p will not invent parents", () => {
  has(sh({}, "mkdir x/y/z").err, "No such file or directory");
});
test("rm refuses a directory until -r, and -f forgives what is missing", () => {
  const r = sh(FILES, "rm src\nrm nope\nrm -f nope\nrm -r src\nls");
  has(r.err, "rm: src: is a directory");
  has(r.err, "rm: nope: No such file or directory");
  eq(r.at(2).code, 0, "-f is silent about what was never there");
  ok(!r.exists("src"));
});
test("rmdir only removes empty directories", () => {
  const r = sh(FILES, "rmdir src\nmkdir empty\nrmdir empty");
  has(r.err, "Directory not empty");
  ok(!r.exists("empty"));
});
test("mv renames in place and moves into a directory", () => {
  const r = sh(FILES, "mv a.txt renamed.txt\nmkdir box\nmv renamed.txt box\nls box");
  ok(!r.exists("a.txt"));
  eq(r.names("box"), ["renamed.txt"]);
});
test("cp -r is required for a directory and copies it whole", () => {
  const r = sh(FILES, "cp src copy\ncp -r src copy\nls copy");
  has(r.err, "cp: -r not specified");
  eq(r.names("copy"), ["app.js", "deep", "util.js"]);
});
test("a copy is independent of its original", () => {
  const r = sh(FILES, "cp -r src copy\necho changed > copy/app.js\ncat src/app.js");
  eq(r.file("src/app.js"), "let a\n");
  eq(r.file("copy/app.js"), "changed\n");
});

/* ---------- the manual ---------- */

test("man prints a real page and says so when there is none", () => {
  const r = sh({}, "man grep\nman nosuchcommand");
  has(r.out, "SYNOPSIS");
  has(r.out, "-v");
  has(r.err, "No manual entry for nosuchcommand");
});
test("--help answers for every documented command", () => {
  const missing = Object.keys(SH.HELP).filter(name => {
    const r = sh({}, name + " --help");
    return r.out.indexOf("SYNOPSIS") === -1;
  });
  eq(missing, [], "commands whose --help did not answer");
});
test("every documented command actually exists", () => {
  eq(Object.keys(SH.HELP).filter(n => !SH.COMMANDS[n]), [], "documented but not implemented");
});
test("history numbers the commands you ran", () => {
  const r = sh({}, "echo one\necho two\nhistory");
  has(r.out, "1  echo one");
  has(r.out, "2  echo two");
});

/* ---------- regressions the Git course depends on ---------- */

test("a quoted commit message survives tokenizing intact", () => {
  eq(SH.tokenize('git commit -m "Add the cart total"'), ["git", "commit", "-m", "Add the cart total"]);
});
test("a message containing a glob character is not expanded", () => {
  const r = sh(FILES, 'echo "Fix the *.log handling" > msg.txt\ncat msg.txt');
  eq(r.file("msg.txt"), "Fix the *.log handling\n");
});
test("gitignore-style lines still write literally", () => {
  const r = sh(FILES, 'echo "*.log" > .gitignore\necho ".env*" >> .gitignore\ncat .gitignore');
  eq(r.file(".gitignore"), "*.log\n.env*\n");
});
test("writeTabs still refuses to clobber a directory", () => {
  const fs = SH.createFS({ "/home/you/src/": null });
  let threw = false;
  try { SH.writeTabs(fs, HOME, HOME, { "commands.sh": "", src: "oops" }, "commands.sh"); } catch (e) { threw = true; }
  ok(threw, "writing a tab over a directory must throw");
});
test("a comment line runs nothing and is left out of the transcript", () => {
  const r = sh(FILES, "# just a note\necho after");
  eq(r.transcript.length, 1);
  eq(r.out, "after\n");
});
test("a trailing comment is stripped before the command runs", () => {
  /* Every cheatsheet in the catalog writes examples this way, so typing one
     back has to work rather than turning the note into three arguments. */
  const r = sh(FILES, "ls -a   # show the hidden ones too");
  has(r.out, ".env");
  eq(r.err, "", "the note must not reach ls as arguments");
  eq(r.code, 0);
});
test("the transcript echoes what was typed but matches on what ran", () => {
  const r = sh(FILES, "pwd   # where am I");
  eq(r.at(0).cmd, "pwd   # where am I", "the terminal echoes the line as typed");
  eq(r.at(0).exec, "pwd", "checkpoints match against the stripped command");
  eq(r.out, "/home/you\n");
});
test("a # that is not its own word stays part of the text", () => {
  eq(sh(FILES, "echo abc#def").out, "abc#def\n");
  eq(sh(FILES, 'echo "# Recipes" > r.md\ncat r.md').out, "# Recipes\n");
  eq(sh(FILES, "echo '# hash'").out, "# hash\n");
});
test("a comment cannot smuggle out of quotes and eat a redirect", () => {
  const r = sh(FILES, 'echo "text # not a comment" > out.txt');
  eq(r.file("out.txt"), "text # not a comment\n");
});
test("a trailing comment does not disturb chaining or pipes", () => {
  eq(sh(FILES, "true && echo yes   # only on success").out, "yes\n");
  eq(sh(FILES, "grep apple a.txt | wc -l   # count them").out, "1\n");
});
test("the transcript records cwd, command, output and code for each line", () => {
  const r = sh(FILES, "cd src\nls");
  eq(r.at(0).cwd, "/home/you", "the prompt shows where you were WHEN you typed it");
  eq(r.at(1).cwd, "/home/you/src");
  eq(r.at(1).out, "app.js\ndeep\nutil.js\n");
});
test("a runaway script is cut off rather than hanging the page", () => {
  const r = sh({}, new Array(700).fill("echo x").join("\n"));
  ok(r.transcript.length <= 501, "got " + r.transcript.length + " transcript entries");
});

console.log(`shell: ${passed} passed, ${failures.length} failed`);
failures.forEach(f => console.log("  ✗ " + f));
process.exit(failures.length ? 1 : 0);
