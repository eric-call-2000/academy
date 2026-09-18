/* Cloud Platforms & Deployment — Unit 2: Environments and configuration */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var CFG_STARTER = R`
// resolveConfig merges configuration from four sources into one object.
// Later sources should WIN over earlier ones, in this order (lowest first):
//   defaults  <  file  <  env  <  overrides
// A key present in a higher source overrides the same key in a lower one;
// a key only a lower source has is kept.
//
// sources = { defaults, file, env, overrides }  (any may be missing)
function resolveConfig(sources) {
  const s = sources || {};
  // First draft: WRONG order — defaults are applied last and clobber
  // everything the environment set.
  return Object.assign({}, s.overrides, s.env, s.file, s.defaults);
}

console.log(resolveConfig({
  defaults: { PORT: 3000 },
  env: { PORT: 8080 }
}));
`;

  var CFG_SOLUTION = R`
function resolveConfig(sources) {
  const s = sources || {};
  return Object.assign({}, s.defaults, s.file, s.env, s.overrides);
}

console.log(resolveConfig({
  defaults: { PORT: 3000 },
  env: { PORT: 8080 }
}));
`;

  window.CODELAB.addUnit("cloud", {
    id: "cloud-u2",
    title: "Environments and configuration",
    icon: "⚙️",
    blurb: "The same build runs in dev, staging and prod — only the configuration differs. Where config comes from, which source wins when they disagree, and why the secrets never belong in the code.",
    cheat: [
      { h: "One artifact, many environments", lang: "text", code:
"build ONCE  ->  the same image/artifact\n" +
"run in dev      config: dev database, debug logs\n" +
"run in staging  config: staging database\n" +
"run in prod     config: prod database, real keys",
        note: "Don't rebuild per environment — that ships something you never tested. Build one artifact and inject the environment's config at run time (the build-time vs run-time split from Deploying Your App)." },
      { h: "Config precedence", lang: "text", code:
"defaults   <  file  <  env var  <  explicit override\n" +
"(lowest)                              (highest)\n" +
"higher source wins per key; missing keys fall through",
        note: "\"Config in the environment\" (12-factor): the same code reads its settings from the environment it runs in. When two sources set the same key, the higher-precedence one wins." },
      { h: "Secrets and strings", lang: "text", code:
"secrets   -> a secret store / env, NEVER committed to git\n" +
"env vars  -> always STRINGS: \"false\" is truthy,\n" +
"             \"8080\" needs Number(...) before you add to it",
        note: "A key in the repo is a leaked key. And every environment variable arrives as a string — coerce it before you treat it as a number or a boolean." }
    ],
    lessons: [

      {
        id: "cloud-u2-1",
        title: "One build, many environments",
        kind: "concept", xp: 15, mins: 15,
        screens: [
          { read: "Real software runs in more than one place: **dev** on your laptop, **staging** that mirrors production for testing, and **production** where real users live. The trap is to build a separate version for each. Then what you tested in staging isn't byte-for-byte what ships.\n\nThe discipline is the opposite: **build one artifact, and configure it per environment at run time.** The same image points at the dev database on your laptop and the prod database in production — because the database URL is *config*, injected when it runs, not baked into the build. That's the build-time vs run-time split from Deploying Your App, applied across environments.",
            ask: { type: "pick",
              q: "Why build one artifact and configure it per environment, rather than building a separate one for each?",
              choices: ["Because the build process is quite slow and you generally want to run it far less often than you otherwise would", "So the exact thing you tested in staging is the exact thing that ships to production", "Because production doesn't allow more than one build to exist", "So each environment can run a different version of your code"],
              answer: 1,
              why: [
                "Build speed is a minor perk; the real reason is testing the same bytes you ship.",
                "One artifact means staging and prod run identical code — only the injected config differs, so a passing staging test means something.",
                "Production has no such rule; this is a discipline, not a limit.",
                "That's the bug this avoids — you want the SAME version everywhere, differing only in config."
              ] } },

          { read: "So what actually differs between environments? Not the code — the **config**: the database URL, the log level, which third-party keys to use, feature flags. Everything that changes from dev to prod is data the app reads, not a line you edit.\n\nThis is the \"config in the environment\" rule (from the well-known *twelve-factor* guidelines): anything that varies by deploy lives outside the code, in the environment the code runs in.",
            ask: { type: "pick", transfer: true,
              q: "Which of these should be configuration injected per environment, NOT hard-coded in the app?",
              choices: ["The function that formats a date for display", "The database URL and the log level", "The HTML structure of a page", "The algorithm that sorts search results"],
              answer: 1,
              why: [
                "Formatting logic is the same everywhere — it's code, not config.",
                "The database URL and log level differ by environment, so they're config injected at run time.",
                "Page structure is part of the app itself, identical across environments.",
                "The sort algorithm is code; it doesn't change between dev and prod."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "A bug appears only in production, never in staging. You confirm the code is byte-identical in both. Where should you look first — the code, or the config? Type one word.",
              answer: "config",
              why: "Identical code ruling out a code difference, the thing that varies between staging and prod is the injected configuration — a different database, key or flag." } },

          { ask: { type: "explain",
              q: "Why do teams build one artifact and inject configuration per environment?",
              model: "Building a separate artifact per environment means production runs something you never actually tested. Building one artifact and injecting each environment's config at run time — the database URL, keys, log level, flags — means dev, staging and prod all run identical code and differ only in data the app reads. So a passing staging test is meaningful, and a prod-only bug points at config, not code.",
              rubric: ["Says one artifact runs everywhere; only config differs", "Says config (URLs, keys, log level, flags) is injected at run time, not built in", "Gives the payoff: you ship the exact bytes you tested / a prod-only difference is config"] } }
        ]
      },

      {
        id: "cloud-u2-2",
        title: "Config precedence: which source wins",
        kind: "js", chip: "CLOUD", xp: 15, mins: 14,
        brief: "Config rarely comes from one place. There are built-in **defaults**, a config **file** checked into the repo, **environment** variables set per deploy, and one-off **overrides** (a command-line flag). When two of them set the same key, one has to win — and the rule is precedence, lowest to highest:\n\n`defaults  <  file  <  env  <  overrides`\n\nA key set by a higher source overrides the same key from a lower one; a key only a lower source has falls through untouched.\n\nFix `resolveConfig(sources)` so it merges the four sources in that order. `sources` is `{ defaults, file, env, overrides }` and any of them may be missing. The starter merges them in the *wrong* order, so the defaults clobber everything.",
        steps: [
          { text: "A key set only in defaults survives; nothing else overrides it.",
            test: R`
T.eq(resolveConfig({ defaults: { PORT: 3000, LOG_LEVEL: "info", DEBUG: false } }),
  { PORT: 3000, LOG_LEVEL: "info", DEBUG: false }, "Only defaults present: they come through unchanged");
T.eq(resolveConfig({}), {}, "No sources at all: an empty config");
` },
          { text: "A higher source overrides the same key in a lower one, per key.",
            test: R`
T.eq(resolveConfig({ defaults: { PORT: 3000 }, env: { PORT: 8080 } }).PORT, 8080, "env beats defaults");
T.eq(resolveConfig({ defaults: { DB: "local" }, file: { DB: "staging" }, env: { DB: "prod" } }).DB, "prod", "env beats file beats defaults");
T.eq(resolveConfig({ file: { LOG_LEVEL: "warn" }, overrides: { LOG_LEVEL: "debug" } }).LOG_LEVEL, "debug", "an explicit override wins over the file");
` },
          { text: "Keys fall through from every layer; higher layers only override the keys they set.",
            test: R`
T.eq(resolveConfig({
  defaults: { PORT: 3000, LOG_LEVEL: "info", DEBUG: false, DB_URL: "localhost" },
  file: { LOG_LEVEL: "warn", DB_URL: "db.staging" },
  env: { DB_URL: "db.prod", PORT: 8080 },
  overrides: { LOG_LEVEL: "debug" }
}), { PORT: 8080, LOG_LEVEL: "debug", DEBUG: false, DB_URL: "db.prod" },
  "Each key resolves to its highest-precedence source; DEBUG survives from defaults");
` }
        ],
        files: [{ name: "script.js", content: CFG_STARTER }],
        solution: { "script.js": CFG_SOLUTION },
        hints: [
          "Object.assign copies later arguments over earlier ones, so the LAST object wins per key.",
          "You want the highest-precedence source last: Object.assign({}, defaults, file, env, overrides).",
          "The starter has them reversed — defaults last means defaults clobber everything above them."
        ]
      },

      {
        id: "cloud-u2-3",
        title: "Secrets out of the repo, and everything is a string",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "Two rules about configuration bite juniors constantly.\n\nFirst: **secrets never go in the repo.** An API key or database password committed to git is a leaked secret — it's in the history forever, visible to everyone with the repo, and rotating it is the only fix. Secrets belong in the environment or a dedicated **secret store**, injected at run time like any other config. (Why a leak is dangerous is the Web Security course's subject; here it's simply a rule.)",
            ask: { type: "pick",
              q: "A developer commits `DB_PASSWORD=hunter2` in a config file \"just for now.\" What's the problem?",
              choices: ["Nothing at all is wrong with it, so long as they simply remember to delete it again in the very next commit they make", "It's now in git history for anyone with the repo, and must be rotated to be safe", "The password is too weak to store anywhere", "Config files are not allowed to contain passwords by the language"],
              answer: 1,
              why: [
                "Removing it later doesn't help — git keeps the old commit, so the secret is still in history.",
                "A committed secret is leaked: it lives in history, and the only real fix is to rotate (change) it.",
                "Weak or strong, no secret belongs in the repo; strength isn't the issue here.",
                "Nothing technical forbids it — that's exactly why the discipline matters."
              ] } },

          { read: "Second: **environment variables are always strings.** When you read `process.env.PORT`, you get `\"8080\"`, not `8080`. And `process.env.DEBUG` is `\"false\"` — a non-empty string, which is **truthy**, so `if (process.env.DEBUG)` runs even when you meant it off.\n\nCoerce before you use: `Number(process.env.PORT)` for a number, and an explicit check like `process.env.DEBUG === \"true\"` for a boolean.",
            ask: { type: "pick",
              q: "`process.env.FEATURE_X` is the string `\"false\"`. What does `if (process.env.FEATURE_X) { ... }` do?",
              choices: ["Skips over the block entirely, because the string value that it holds represents the boolean false", "Runs the block, because any non-empty string is truthy", "Throws an error about type mismatch", "Converts the string to a boolean automatically first"],
              answer: 1,
              why: [
                "The value isn't the boolean false; it's the string \"false\".",
                "\"false\" is a non-empty string, which is truthy, so the block runs — the classic env-var bug.",
                "JavaScript doesn't throw here; it just treats the string as truthy.",
                "There's no automatic coercion to boolean; you must check explicitly, e.g. === \"true\"."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "`process.env.PORT` is `\"8080\"`. What does `process.env.PORT + 1` evaluate to? Type the result exactly.",
              answer: "80801",
              why: "PORT is the string \"8080\", so + 1 does string concatenation, giving \"80801\". You need Number(process.env.PORT) + 1 to get 8081.",
              run: true,
              check: "console.log('8080' + 1);" } },

          { ask: { type: "pick", transfer: true,
              q: "Where should a production API key live so the app can use it without leaking it?",
              choices: ["Inside a configuration file that gets committed straight into the repository, purely for the whole team's convenience", "In the environment or a secret store, injected at run time and never committed", "Hard-coded in the source with a comment saying not to share it", "In the client-side JavaScript so the browser can read it"],
              answer: 1,
              why: [
                "A committed file is a leak, however convenient.",
                "Injected from the environment or a secret store at run time keeps it out of the repo and out of the build.",
                "Hard-coding it in source is the same leak with a comment.",
                "Anything in client-side JS is downloaded by every visitor — the worst place for a secret."
              ] } }
        ]
      },

      {
        id: "cloud-u2-4",
        title: "Keeping environments alike",
        kind: "concept", xp: 15, mins: 11,
        screens: [
          { read: "Staging earns its keep only if it **resembles production**. The bigger the gaps — a different database engine, a different runtime version, different config shape — the more bugs slip through staging and surface in prod. This gap is **configuration drift**: environments that started alike and quietly diverged.\n\nThe defense is to make config explicit and shared in shape: the same keys everywhere, the same runtime, differing only in values. Then \"it worked in staging\" actually predicts production.",
            ask: { type: "pick",
              q: "Staging uses an in-memory database and production uses PostgreSQL. Why is that a problem?",
              choices: ["In-memory databases are always dramatically faster, so the staging environment ends up being unfairly and misleadingly quick to respond", "Bugs tied to the real database won't show up in staging, so passing staging stops predicting production", "PostgreSQL can't be used in staging at all", "It isn't a problem; the database never affects behaviour"],
              answer: 1,
              why: [
                "Speed isn't the issue; fidelity is.",
                "A different database means database-specific bugs hide in staging and only appear in prod — staging stops being a real rehearsal.",
                "PostgreSQL can absolutely run in staging; using it there is the fix.",
                "The database very much affects behaviour — queries, types and constraints differ."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "A feature works in staging but breaks in production. Both run the same artifact. What's the most likely culprit?",
              choices: ["The people using it in production are somehow using the feature incorrectly in a way that the staging users simply did not", "Drift between the environments' config or dependencies — a different value, version, or service", "The code is different in production", "Production is simply too fast for the feature"],
              answer: 1,
              why: [
                "Blaming users is rarely the cause of a clean staging/prod split.",
                "Same artifact means the difference is environmental: a config value, a dependency version, or a backing service that drifted apart.",
                "The artifact is identical by assumption, so it isn't the code.",
                "Speed doesn't explain a works-here-breaks-there behaviour difference."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "The term for environments that started identical but quietly diverged over time is configuration ____. Type the one word.",
              answer: "drift",
              accept: ["config drift", "configuration drift"],
              why: "Configuration drift is the slow divergence of environments that should match — the reason staging stops predicting production." } },

          { ask: { type: "explain",
              q: "Why does keeping staging close to production matter, and what makes them drift apart?",
              model: "Staging is only useful as a rehearsal if it resembles production, because bugs tied to the real database, runtime version or config only appear where those match. They drift apart when environments are configured by hand and diverge over time — a different database engine, an out-of-date runtime, config keys that exist in one and not the other — so passing staging stops predicting production. Keeping the same shape everywhere, differing only in values, keeps staging honest.",
              rubric: ["Says staging must resemble prod to catch bugs before they ship", "Names drift: environments diverging in database/runtime/config over time", "Says the fix is same shape/versions everywhere, differing only in values"] } }
        ]
      },

      {
        id: "cloud-quiz-2",
        title: "Unit 2 quiz: Environments and config",
        kind: "quiz", xp: 10,
        brief: "One artifact per environment, config precedence, secrets, env-var strings, and configuration drift. 80% to pass.",
        questions: [
          { q: "Why build one artifact and inject config per environment?",
            choices: ["To deliberately make the whole build process run much more slowly and carefully than it usually would each time", "So staging and production run identical code, differing only in injected config", "Because each environment legally requires its own separate build", "So you can ship different features to different environments"],
            answer: 1, explain: "One artifact means you ship the exact bytes you tested; only the injected config (URLs, keys, flags) differs by environment." },
          { q: "Config sources: which order is correct, lowest precedence to highest?",
            choices: ["env < overrides < file < defaults", "defaults < file < env < overrides", "overrides < env < file < defaults", "file < defaults < overrides < env"],
            answer: 1, explain: "Built-in defaults are the floor; a file overrides them; environment variables override the file; an explicit override wins over all." },
          { q: "`process.env.DEBUG` is the string `\"false\"`. Is `if (process.env.DEBUG)` truthy?",
            choices: ["No, it is falsy, because the string value it happens to contain clearly represents the boolean false", "Yes, because any non-empty string is truthy", "It throws a type error at runtime", "Only in production, never in development"],
            answer: 1, explain: "Env vars are strings. \"false\" is a non-empty string and therefore truthy — check `=== \"true\"` instead." },
          { q: "A developer commits an API key to the repo, then deletes it in the next commit. Is the key safe?",
            choices: ["Yes, because deleting it in that following commit removed it from the project entirely and for good", "No — it's still in git history and must be rotated", "Yes, as long as the repo is private", "Only if nobody pulled the repo in between"],
            answer: 1, explain: "Git keeps history, so the key is still recoverable from the old commit. The only real fix is to rotate (change) it." },
          { q: "What is configuration drift?",
            choices: ["Configuration files that slowly and gradually move themselves to a different folder somewhere on disk as time passes", "Environments that should match quietly diverging in versions, services or config", "A gradual slowdown of the configuration loading code as it ages in place", "Renaming environment variables between releases"],
            answer: 1, explain: "Drift is staging and prod diverging over time, so passing staging stops predicting production. Keep the same shape everywhere, differing only in values." },
          { q: "Where should a production database password live?",
            choices: ["Inside a configuration file committed into the repository for the whole team's ongoing convenience and easy access", "In the environment or a secret store, injected at run time and never committed", "In the client-side JavaScript bundle", "Hard-coded in the source behind a warning comment"],
            answer: 1, explain: "Secrets stay out of the repo — injected from the environment or a secret store at run time, like any other per-environment config." }
        ]
      }
    ]
  });
})();
