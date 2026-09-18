/* Cloud Platforms & Deployment — Unit 4: Rolling deploys and staying up */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var ROLL_STARTER = R`
// A rolling update replaces instances a few at a time so the service
// never fully drops. Two knobs control it:
//   maxUnavailable  how many of the current instances may be down at once
//   surge           how many EXTRA instances may be started during the roll
//
// A spec is { replicas, surge, maxUnavailable }.
//
// minAvailable(spec): the fewest healthy instances still serving during the
//   rollout = replicas - maxUnavailable.
// peakPods(spec): the most instances running at once mid-rollout, so you know
//   the capacity headroom you need = replicas + surge.
function minAvailable(spec) {
  return spec.replicas; // first draft: ignores maxUnavailable
}

function peakPods(spec) {
  return spec.replicas; // first draft: ignores surge
}

console.log(minAvailable({ replicas: 4, surge: 1, maxUnavailable: 1 }));
`;

  var ROLL_SOLUTION = R`
function minAvailable(spec) {
  return spec.replicas - spec.maxUnavailable;
}

function peakPods(spec) {
  return spec.replicas + spec.surge;
}

console.log(minAvailable({ replicas: 4, surge: 1, maxUnavailable: 1 }));
`;

  window.CODELAB.addUnit("cloud", {
    id: "cloud-u4",
    title: "Rolling deploys and staying up",
    icon: "🔁",
    blurb: "Replacing a running service without taking it down. The rolling update and its two knobs, the readiness check that decides when a new instance may take traffic, and where rolling alone runs out of road.",
    cheat: [
      { h: "Rolling vs recreate", lang: "text", code:
"recreate  stop all old, start all new  -> DOWNTIME\n" +
"rolling   replace a few at a time       -> stays up\n" +
"  maxUnavailable  how many may be down at once\n" +
"  surge           how many extra may start at once",
        note: "Recreate is simplest but drops the service between stop and start. Rolling keeps enough instances up throughout, at the cost of running two versions side by side for a while." },
      { h: "The rolling math", lang: "text", code:
"minAvailable = replicas - maxUnavailable  (stay up)\n" +
"peakPods     = replicas + surge           (headroom)\n" +
"e.g. 4 replicas, surge 1, maxUnavailable 1:\n" +
"  always >= 3 serving, up to 5 running at once",
        note: "maxUnavailable 0 with surge 1 is a zero-downtime roll: never drop below full, add one new instance, retire one old, repeat. It's slower and needs headroom for one extra." },
      { h: "Readiness", lang: "text", code:
"liveness  is it alive? (restart if not)\n" +
"readiness is it ready for traffic yet? (hold if not)\n" +
"traffic waits for READY, not just started",
        note: "A new instance that's started but still warming up isn't ready. The readiness check gates traffic until it is, so a rollout never routes users to an instance that will error." }
    ],
    lessons: [

      {
        id: "cloud-u4-1",
        title: "Rolling vs recreate",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "You have a service running and a new version to ship. The blunt way is **recreate**: stop all the old instances, then start all the new ones. Simple — but between the stop and the start, nothing is serving. That's **downtime**, and for a user-facing service it's usually unacceptable.\n\nThe standard alternative is a **rolling update**: replace instances **a few at a time**, so enough of the old version keeps serving while the new version comes up. The service never fully drops. The price is that both versions run at once for a while — your code has to tolerate that.",
            ask: { type: "pick",
              q: "What's the defining difference between recreate and a rolling update?",
              choices: ["Rolling updates are essentially always much faster to fully complete than a recreate deploy ever is, in every single case", "Recreate has downtime between stop and start; rolling replaces gradually and stays up", "Recreate runs two versions at once; rolling never does", "Rolling requires exactly twice the servers"],
              answer: 1,
              why: [
                "Rolling is usually slower, not faster — it takes more steps.",
                "That's the trade: recreate is simple but drops the service; rolling stays up by replacing in batches.",
                "It's the reverse — rolling briefly runs both versions; recreate does not.",
                "That's closer to blue-green (next unit); rolling needs only a little surge headroom."
              ] } },

          { read: "Running two versions side by side during a roll has a real consequence: for a window, some requests hit the **old** version and some hit the **new** one. Your change has to be safe under that overlap — a database migration or an API change that the old version can't handle will break during every rolling deploy.\n\nThis is why deploys and schema changes are designed to be **backward-compatible**: add a column before you use it, keep old fields until nothing reads them. The overlap is the cost of never going down.",
            ask: { type: "pick", transfer: true,
              q: "During a rolling update, why must a change be backward-compatible with the version it's replacing?",
              choices: ["Because rolling updates run a good deal more slowly than a recreate deploy does, from the very start of the roll to the very finish", "Because both versions serve traffic at once during the roll, so each must handle the shared data and requests", "Because the old version is deleted before the new one starts", "Because readiness checks reject incompatible code"],
              answer: 1,
              why: [
                "Speed isn't the reason; the version overlap is.",
                "For a window both versions are live against the same data, so a change the old version can't tolerate breaks mid-deploy.",
                "That's recreate; rolling keeps the old version serving while the new comes up.",
                "A readiness check tests one instance's health, not schema compatibility between versions."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "A service must never be fully offline, even for a second, during a deploy. Rolling or recreate? Type one word.",
              answer: "rolling",
              why: "Recreate goes fully offline between stopping the old and starting the new. Only a rolling update keeps enough instances serving throughout." } },

          { ask: { type: "explain",
              q: "Explain the trade-off between recreate and rolling deploys.",
              model: "Recreate stops every old instance and then starts the new ones, so it's simple but the service is down in between. A rolling update replaces instances a few at a time, keeping enough of them serving so there's no downtime — but for a window both the old and new versions run at once, so the change has to be backward-compatible with the version it's replacing.",
              rubric: ["Says recreate is simple but has downtime between stop and start", "Says rolling replaces gradually and stays up", "Notes rolling runs both versions at once, so changes must be backward-compatible"] } }
        ]
      },

      {
        id: "cloud-u4-2",
        title: "The rolling math: staying up while you roll",
        kind: "js", chip: "CLOUD", xp: 15, mins: 14,
        brief: "A rolling update has two knobs. **`maxUnavailable`** is how many of your instances may be down at once — so the fewest still serving during the roll is `replicas - maxUnavailable`. **`surge`** is how many *extra* instances may start during the roll — so the most running at any moment is `replicas + surge`, which is the capacity headroom you need to have spare.\n\nA spec is `{ replicas, surge, maxUnavailable }`. Implement `minAvailable(spec)` (the guaranteed serving floor) and `peakPods(spec)` (the peak instance count).",
        steps: [
          { text: "minAvailable is the serving floor: replicas minus maxUnavailable.",
            test: R`
T.eq(minAvailable({ replicas: 4, surge: 1, maxUnavailable: 1 }), 3, "4 replicas, 1 may be down: at least 3 serving");
T.eq(minAvailable({ replicas: 10, surge: 0, maxUnavailable: 3 }), 7, "10 replicas, 3 may be down: at least 7 serving");
` },
          { text: "maxUnavailable of 0 never drops below full capacity.",
            test: R`
T.eq(minAvailable({ replicas: 4, surge: 1, maxUnavailable: 0 }), 4, "0 unavailable: all 4 stay serving throughout — a zero-downtime roll");
` },
          { text: "peakPods is the headroom peak: replicas plus surge.",
            test: R`
T.eq(peakPods({ replicas: 4, surge: 1, maxUnavailable: 0 }), 5, "4 replicas + 1 surge: up to 5 running at once");
T.eq(peakPods({ replicas: 10, surge: 0, maxUnavailable: 3 }), 10, "0 surge: never more than the 10 replicas");
T.eq(peakPods({ replicas: 3, surge: 3, maxUnavailable: 0 }), 6, "surge 3: room for double, briefly");
` }
        ],
        files: [{ name: "script.js", content: ROLL_STARTER }],
        solution: { "script.js": ROLL_SOLUTION },
        hints: [
          "minAvailable subtracts the allowed-down count: replicas - maxUnavailable.",
          "peakPods adds the extra allowed instances: replicas + surge.",
          "maxUnavailable 0 with surge 1 is the zero-downtime pattern: minAvailable stays at replicas, peak is replicas + 1."
        ]
      },

      {
        id: "cloud-u4-3",
        title: "Readiness: when a new instance may take traffic",
        kind: "concept", xp: 15, mins: 11,
        screens: [
          { read: "A new instance being **started** is not the same as being **ready**. It may still be loading config, warming a cache, or opening database connections — and if traffic arrives now, those requests error. So orchestrators use two health checks:\n\n- a **liveness** check: is it alive? If not, restart it.\n- a **readiness** check: is it ready to serve yet? If not, keep traffic away from it — but don't restart it.\n\nDuring a rolling update, traffic only moves to a new instance once its readiness check passes. That's what makes the roll safe: users are never routed to an instance that isn't ready.",
            ask: { type: "pick",
              q: "What does a readiness check decide?",
              choices: ["Whether the orchestrator ought to go ahead and restart an instance that has completely hung", "Whether an instance may receive traffic yet", "How many replicas to run", "Which version is live"],
              answer: 1,
              why: [
                "That's liveness — readiness never restarts anything.",
                "Readiness gates traffic: an instance gets requests only once it passes.",
                "Replica count is set by the deploy spec, not a health check.",
                "Which version is live is the deploy's job, not a per-instance check."
              ] } },

          { read: "Miss the readiness check and a rolling update becomes dangerous: the orchestrator sees the new instance \"started,\" sends it traffic immediately, and those first requests fail while it's still warming up. Multiply that across every instance in the roll and a \"successful\" deploy served a wave of errors.\n\nThe readiness check is also how the roll **paces itself**: it won't retire the next old instance until the new one reports ready, so a new version that never becomes ready **stalls** the rollout instead of taking the whole service down.",
            ask: { type: "pick", transfer: true,
              q: "A new version has no readiness check and takes 20 seconds to warm up. What happens during the rolling deploy?",
              choices: ["The roll waits 20 seconds automatically", "Traffic hits each new instance the moment it starts, so requests error for ~20s per instance", "The old version simply keeps hold of all of the traffic right up until each new instance has fully warmed up", "Nothing — instances are ready instantly"],
              answer: 1,
              why: [
                "Without a readiness check there's nothing telling it to wait.",
                "\"Started\" is treated as \"ready,\" so traffic arrives during the 20s warm-up and those requests fail.",
                "That's what a readiness check would give you — but there isn't one here.",
                "Warm-up is exactly the gap; instances are not ready the instant they start."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "A new version is deployed but its readiness check never passes (a bad config). With a rolling update, what happens?",
              choices: ["The whole service goes down", "The rollout stalls with the old version still serving, instead of taking the service down", "All instances restart forever", "Incoming traffic ends up split evenly between the old version and the broken new one, fifty-fifty"],
              answer: 1,
              why: [
                "The old, healthy instances keep serving — that's the safety of gating on readiness.",
                "The roll won't retire an old instance until a new one is ready, so it halts safely with the old version up.",
                "That's liveness looping; readiness just withholds traffic, it doesn't restart.",
                "Traffic isn't sent to an instance that never passed readiness."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "Which check decides whether to RESTART an instance that has hung — liveness or readiness? Type one word.",
              answer: "liveness",
              why: "Liveness answers \"is it alive?\" and restarts it if not. Readiness only decides whether an instance may receive traffic; it never restarts anything." } }
        ]
      },

      {
        id: "cloud-u4-4",
        title: "Where rolling runs out of road",
        kind: "concept", xp: 15, mins: 11,
        screens: [
          { read: "Rolling updates are the default for good reason, but they have a limit worth naming. A rolling deploy **replaces** the old version — once it finishes, the old version is gone. So if the new version has a bug you only discover after the roll completes, **rolling back is another full rolling deploy** in reverse. That takes time, and meanwhile everyone is on the bad version.\n\nAnd because the roll is gradual, a bad version is exposed to a growing share of users as it progresses — not all at once, but not contained either.",
            ask: { type: "pick",
              q: "Why can rolling back a completed rolling deploy be slow?",
              choices: ["The old version is kept running and just needs a switch", "The old version is gone, so rolling back means another full gradual deploy in reverse", "Rollbacks are automatically blocked for a full hour after any deploy completes, purely as a safety measure", "You must recreate the whole cluster to roll back"],
              answer: 1,
              why: [
                "That's blue-green (next unit), where the old environment is kept ready.",
                "Rolling replaces the old version, so undoing it is itself a fresh rolling deploy back to the previous version.",
                "There's no such block; the slowness is inherent to replacing gradually.",
                "You don't rebuild the cluster; you re-roll the previous version."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "You want a release you can undo in one instant, not another gradual deploy. Which idea does that point you toward?",
              choices: ["Configuring a considerably faster rolling update that is handed a great deal more surge headroom to work with", "Keeping the old version running and switching traffic between old and new", "Recreate, so there's a clean stop", "Adding more replicas"],
              answer: 1,
              why: [
                "More surge speeds the roll but rollback is still a reverse roll.",
                "Keeping the previous version alive and switching traffic is exactly blue-green — instant to undo.",
                "Recreate has downtime and still discards the old version.",
                "Replica count doesn't make rollback instant."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "A rolling deploy replaces the old version as it goes. After it completes, is the old version still running and ready to switch back to? Type yes or no.",
              answer: "no",
              why: "Rolling replaces the old instances, so once it's done the old version is gone. Instant switch-back is what keeping the old environment alive (blue-green) gives you." } },

          { ask: { type: "explain",
              q: "What does a rolling update do well, and what's its main limitation?",
              model: "A rolling update ships a new version with no downtime by replacing instances a few at a time, gated by readiness so traffic only moves to instances that are ready. Its limitation is that it replaces the old version as it goes: once the roll finishes the old version is gone, so rolling back a bug found afterward is another full gradual deploy, and during the roll a bad version is exposed to a growing share of users.",
              rubric: ["Says rolling gives a no-downtime deploy by replacing gradually", "Notes readiness gates traffic to ready instances", "Names the limit: old version is replaced, so rollback is another slow roll (motivates blue-green/canary)"] } }
        ]
      },

      {
        id: "cloud-quiz-4",
        title: "Unit 4 quiz: Rolling deploys",
        kind: "quiz", xp: 10,
        brief: "Rolling vs recreate, the surge/maxUnavailable math, readiness checks, and the limits of rolling. 80% to pass.",
        questions: [
          { q: "What does a recreate deploy do that a rolling update avoids?",
            choices: ["It ends up running two different versions of the application at once for a little while during the change", "It takes the service down between stopping the old and starting the new", "It needs extra surge capacity to proceed", "It gates traffic on a readiness check"],
            answer: 1, explain: "Recreate stops all old instances then starts the new ones, so nothing serves in between — the downtime rolling avoids." },
          { q: "With 6 replicas and maxUnavailable 2, how many instances are guaranteed to keep serving during the roll?",
            choices: ["2", "4", "6", "8"],
            answer: 1, explain: "minAvailable = replicas - maxUnavailable = 6 - 2 = 4." },
          { q: "What does a readiness check decide?",
            choices: ["Whether to restart an instance that has hung", "Whether an instance may receive traffic yet", "How many total replicas to run at peak", "Which of two environments is currently live"],
            answer: 1, explain: "Readiness gates traffic; an instance gets requests only once it passes. Restarting a hung instance is liveness." },
          { q: "During a rolling update both versions serve at once for a window. What does that require of your change?",
            choices: ["That it be backward-compatible with the version it replaces", "That it use more replicas than before", "That it disable the readiness check", "That the entire database first be carefully taken fully offline before the deploy can proceed at all"],
            answer: 0, explain: "Old and new run against the same data during the roll, so a change the old version can't handle breaks mid-deploy." },
          { q: "Why is rolling back a finished rolling deploy slow?",
            choices: ["The old version is kept ready and just needs one switch", "The old version was replaced, so rollback is another full gradual deploy in reverse", "Rolling back always requires you to rebuild the whole cluster again completely from scratch first", "The readiness check blocks all rollbacks for safety"],
            answer: 1, explain: "Rolling replaces the old version as it goes, so undoing it means re-rolling the previous version — the gap blue-green fills." }
        ]
      }
    ]
  });
})();
