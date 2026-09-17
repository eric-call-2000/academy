/* Cloud Platforms & Deployment — Unit 5: Blue-green and canary */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var BG_STARTER = R`
// Blue-green: two identical environments, "blue" and "green". One is LIVE
// (serving traffic); the other is idle. You deploy the new version to the
// idle one, test it, then CUT OVER — flip which environment is live. If the
// new version misbehaves, ROLL BACK by flipping straight back.
//
// state = { live, blueVersion, greenVersion }  (live is "blue" or "green")
//
//   deployToIdle(state, version)  put a version on the NON-live environment
//   cutover(state)                make the idle environment live
//   rollback(state)               flip back to the previous environment
//   servingVersion(state)         the version the LIVE environment runs
function deployToIdle(state, version) {
  // First draft: overwrites the LIVE environment — wrong, that's not idle.
  var key = state.live + "Version";
  return Object.assign({}, state, { [key]: version });
}

function cutover(state) {
  return state; // first draft: doesn't switch
}

function rollback(state) {
  return state; // first draft: doesn't switch back
}

function servingVersion(state) {
  return state[state.live + "Version"];
}

console.log(servingVersion({ live: "blue", blueVersion: "v1", greenVersion: null }));
`;

  var BG_SOLUTION = R`
function other(color) {
  return color === "blue" ? "green" : "blue";
}

function deployToIdle(state, version) {
  var idle = other(state.live);
  return Object.assign({}, state, { [idle + "Version"]: version });
}

function cutover(state) {
  return Object.assign({}, state, { live: other(state.live) });
}

function rollback(state) {
  return Object.assign({}, state, { live: other(state.live) });
}

function servingVersion(state) {
  return state[state.live + "Version"];
}

console.log(servingVersion({ live: "blue", blueVersion: "v1", greenVersion: null }));
`;

  var CANARY_STARTER = R`
// A canary release dials traffic to the new version up in stages — 10%, then
// 50%, then 100% — watching the error rate at each step. If the error rate
// crosses the threshold, ABORT: pull all traffic back to 0.
//
// state = { percent, aborted, done }
//
// canaryStep(state, errorRate, threshold) returns the NEXT state:
//   already aborted or done  -> unchanged
//   errorRate > threshold    -> aborted: { percent: 0, aborted: true, done: false }
//   otherwise                -> advance to the next stage (10 -> 50 -> 100);
//                               reaching 100 sets done: true
function canaryStep(state, errorRate, threshold) {
  // First draft: always jumps straight to 100%, ignoring the error rate.
  return { percent: 100, aborted: false, done: true };
}

console.log(canaryStep({ percent: 0, aborted: false, done: false }, 0.001, 0.02));
`;

  var CANARY_SOLUTION = R`
function canaryStep(state, errorRate, threshold) {
  if (state.aborted || state.done) return state;
  if (errorRate > threshold) return { percent: 0, aborted: true, done: false };
  var stages = [10, 50, 100];
  var next = stages.find(function (p) { return p > state.percent; });
  return { percent: next, aborted: false, done: next === 100 };
}

console.log(canaryStep({ percent: 0, aborted: false, done: false }, 0.001, 0.02));
`;

  window.CODELAB.addUnit("cloud", {
    id: "cloud-u5",
    title: "Blue-green and canary",
    icon: "🐤",
    blurb: "Two ways to make a release reversible: flip between two whole environments in an instant, or dial the new version up slowly while watching it. Both keep the old version reachable so a bad deploy is undone, not endured.",
    cheat: [
      { h: "Blue-green", lang: "text", code:
"two identical envs: blue (live) + green (idle)\n" +
"1. deploy new version to the IDLE env\n" +
"2. test it out of the traffic path\n" +
"3. cut over: flip live to it (instant)\n" +
"rollback = flip back (the old env is still there)",
        note: "The switch is instant and so is the rollback, because the previous version stays running the whole time. The cost is running two full environments at once." },
      { h: "Canary", lang: "text", code:
"send a small % to the new version, watch errors\n" +
"  10% -> 50% -> 100%, promoting only if healthy\n" +
"  error rate over threshold -> ABORT, back to 0%\n" +
"limits the blast radius of a bad release",
        note: "A canary exposes the new version to a few users first, so a bad deploy hurts a small fraction before it's caught and pulled. Gradual and safe, but more moving parts than a flip." },
      { h: "Which when", lang: "text", code:
"blue-green  instant switch + instant rollback;\n" +
"            needs double the environment\n" +
"canary      smallest blast radius; needs good\n" +
"            metrics and an abort rule",
        note: "Blue-green for a clean, reversible cutover when you can afford two environments. Canary when you want to catch a bad release on a few users before everyone sees it." }
    ],
    lessons: [

      {
        id: "cloud-u5-1",
        title: "Blue-green: flip, and flip back",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "Unit 4 ended on a problem: a rolling deploy replaces the old version, so rolling back is another slow roll. **Blue-green** solves it by keeping the old version alive.\n\nYou run **two identical environments** — call them blue and green. One is **live**, serving all traffic; the other is **idle**. To release, you deploy the new version to the *idle* environment, test it there out of the traffic path, then **cut over**: flip live to it. If it misbehaves, you **roll back** by flipping straight back — and because the old environment is still running untouched, that rollback is **instant**.",
            ask: { type: "pick",
              q: "In blue-green, why is a rollback instant?",
              choices: ["The new, broken version somehow gets automatically detected and then quietly fixed for you behind the scenes", "The previous environment is still running, so you just switch traffic back", "The database resets on rollback", "Rolling back skips the readiness check"],
              answer: 1,
              why: [
                "Nothing is auto-fixed; you're returning to the version that worked.",
                "The old environment was never torn down, so flipping traffic back to it is immediate.",
                "A traffic flip doesn't reset data — schema still needs care across versions.",
                "Readiness isn't what makes it fast; the kept-alive old environment is."
              ] } },

          { read: "The cost is in the name: you pay for **two full environments**, at least during the release. That's real money, and it's why blue-green suits services where a clean, instant cutover is worth the double footprint.\n\nThere's also a data catch that blue-green doesn't magically solve: the two environments usually share one database. A schema change still has to work for both the old and new version across the switch — the same backward-compatibility rule from Unit 4. Blue-green makes the *code* switch instant; it doesn't make an incompatible migration safe.",
            ask: { type: "pick", transfer: true,
              q: "What's the main cost of blue-green deployments?",
              choices: ["They end up causing a noticeable stretch of downtime on each and every traffic switch you perform", "They run two full environments, roughly doubling that footprint during a release", "They can never be rolled back", "They require rewriting the app as functions"],
              answer: 1,
              why: [
                "The switch is instant with no downtime — that's the point.",
                "Keeping the old environment live alongside the new one means paying for both.",
                "Instant rollback is exactly what blue-green gives you.",
                "No rewrite is needed; it's a deployment pattern, not an architecture change."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "After a blue-green cutover to green, a bug appears. Roughly how long does switching traffic back to blue take — an instant, or another full deploy? Type one word: instant.",
              answer: "instant",
              why: "Blue is still running the old version, so rollback is just flipping traffic back to it — instant, unlike re-rolling a replaced version." } },

          { ask: { type: "pick", transfer: true,
              q: "Both environments share one database. What still needs care during a blue-green release?",
              choices: ["The traffic switch, which is slow", "A schema change must work for both the old and new version across the switch", "The idle environment has to be provisioned at a deliberately different size from the live one", "Nothing — blue-green makes all changes safe"],
              answer: 1,
              why: [
                "The traffic switch is instant; that's not the risk.",
                "One shared database means both versions read it around the cutover, so the migration must be backward-compatible.",
                "The environments are identical by design; sizing isn't the issue.",
                "Blue-green makes the code switch instant but doesn't make an incompatible migration safe."
              ] } }
        ]
      },

      {
        id: "cloud-u5-2",
        title: "Blue-green as a state machine",
        kind: "js", chip: "CLOUD", xp: 15, mins: 14,
        brief: "Model blue-green as four small operations over a state `{ live, blueVersion, greenVersion }`, where `live` is `\"blue\"` or `\"green\"`.\n\n- **`deployToIdle(state, version)`** — set the version on the environment that is *not* live (deploy happens off the traffic path).\n- **`cutover(state)`** — make the idle environment live (flip `live`).\n- **`rollback(state)`** — flip `live` back to the other environment.\n- **`servingVersion(state)`** — the version the live environment is running.\n\nEach returns a new state (don't mutate the old one). The starter deploys to the *live* environment by mistake and never flips.",
        steps: [
          { text: "deployToIdle puts the new version on the idle environment, leaving the live one serving.",
            test: R`
var s = { live: "blue", blueVersion: "v1", greenVersion: null };
var s2 = deployToIdle(s, "v2");
T.eq(s2.greenVersion, "v2", "v2 went to the idle (green) environment");
T.eq(servingVersion(s2), "v1", "the live (blue) environment still serves v1");
T.eq(s.greenVersion, null, "the original state is not mutated");
` },
          { text: "cutover makes the idle environment live; now it serves the new version.",
            test: R`
var s = deployToIdle({ live: "blue", blueVersion: "v1", greenVersion: null }, "v2");
var live = cutover(s);
T.eq(live.live, "green", "green is now live");
T.eq(servingVersion(live), "v2", "traffic now serves v2");
` },
          { text: "rollback flips straight back to the previous environment and its version.",
            test: R`
var s = cutover(deployToIdle({ live: "blue", blueVersion: "v1", greenVersion: null }, "v2"));
var back = rollback(s);
T.eq(back.live, "blue", "back to blue");
T.eq(servingVersion(back), "v1", "serving the old v1 again");
T.eq(back.greenVersion, "v2", "green still holds v2 — the old environment was never torn down");
` }
        ],
        files: [{ name: "script.js", content: BG_STARTER }],
        solution: { "script.js": BG_SOLUTION },
        hints: [
          "A helper `other(color)` returning the opposite color keeps the rest short.",
          "deployToIdle writes to `other(state.live) + \"Version\"`, not the live one.",
          "cutover and rollback are the same move — flip `live` to `other(state.live)` — because the old environment is always still there to flip back to."
        ]
      },

      {
        id: "cloud-u5-3",
        title: "Canary: dial it up, and abort if it's bad",
        kind: "js", chip: "CLOUD", xp: 15, mins: 15,
        brief: "A **canary** release sends a small slice of traffic to the new version first, watches its error rate, and promotes it in stages — **10% → 50% → 100%** — only while it stays healthy. If the error rate crosses a threshold at any step, you **abort**: pull all traffic back to 0%.\n\nImplement `canaryStep(state, errorRate, threshold)` over `state = { percent, aborted, done }`:\n\n- if it's already `aborted` or `done`, return it unchanged\n- if `errorRate > threshold`, abort: `{ percent: 0, aborted: true, done: false }`\n- otherwise advance to the next stage (10, then 50, then 100); reaching 100 sets `done: true`\n\nThe threshold is passed in so the checks can set it. The starter jumps straight to 100% and ignores the error rate — the whole danger canary exists to prevent.",
        steps: [
          { text: "A healthy step advances one stage at a time: 10, then 50, then 100 (done).",
            test: R`
var s = { percent: 0, aborted: false, done: false };
s = canaryStep(s, 0.000, 0.02); T.eq(s, { percent: 10, aborted: false, done: false }, "first healthy step -> 10%");
s = canaryStep(s, 0.005, 0.02); T.eq(s, { percent: 50, aborted: false, done: false }, "still healthy -> 50%");
s = canaryStep(s, 0.010, 0.02); T.eq(s, { percent: 100, aborted: false, done: true }, "reaches 100% -> done");
` },
          { text: "An error rate over the threshold aborts to 0%, wherever the canary had reached.",
            test: R`
var s = canaryStep({ percent: 10, aborted: false, done: false }, 0.05, 0.02);
T.eq(s, { percent: 0, aborted: true, done: false }, "0.05 > 0.02: abort, pull traffic back to 0");
` },
          { text: "Once aborted or done, further steps change nothing.",
            test: R`
T.eq(canaryStep({ percent: 0, aborted: true, done: false }, 0.0, 0.02), { percent: 0, aborted: true, done: false }, "aborted stays aborted");
T.eq(canaryStep({ percent: 100, aborted: false, done: true }, 0.5, 0.02), { percent: 100, aborted: false, done: true }, "done stays done");
` },
          { text: "The threshold is exclusive: exactly at the threshold is still healthy.",
            test: R`
T.eq(canaryStep({ percent: 0, aborted: false, done: false }, 0.02, 0.02).percent, 10, "errorRate == threshold is not over it, so it promotes");
` }
        ],
        files: [{ name: "script.js", content: CANARY_STARTER }],
        solution: { "script.js": CANARY_SOLUTION },
        hints: [
          "Handle the terminal states first: if state.aborted or state.done, return state unchanged.",
          "Then the abort gate: if errorRate > threshold, return { percent: 0, aborted: true, done: false }.",
          "Otherwise pick the next stage with [10, 50, 100].find(p => p > state.percent), and set done when it's 100."
        ]
      },

      {
        id: "cloud-u5-4",
        title: "Choosing: blue-green or canary",
        kind: "concept", xp: 15, mins: 11,
        screens: [
          { read: "Both patterns keep the old version reachable so a release is reversible — they differ in *how the new version meets traffic.*\n\n- **Blue-green** flips **all** traffic at once. The cutover and rollback are instant, but every user moves together, so a bug that slipped past testing hits everyone the moment you switch. It also costs two full environments.\n- **Canary** moves traffic **gradually** and watches metrics, so a bad release hurts only the small slice it's been exposed to before the abort pulls it back. That limits the **blast radius**, at the cost of needing good metrics and an abort rule.",
            ask: { type: "pick",
              q: "What does a canary give you that an all-at-once blue-green cutover doesn't?",
              choices: ["A dramatically faster rollback than any other deployment strategy out there is ever able to offer you", "A limited blast radius — a bad release reaches only a small slice before it's caught", "Two full environments", "Zero downtime"],
              answer: 1,
              why: [
                "Blue-green's rollback is instant; canary's isn't faster.",
                "Gradual exposure means a bad version is caught on a few users, not all of them.",
                "That's blue-green's cost, not a canary benefit.",
                "Both can achieve zero downtime; that's not the distinction."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "A team has solid error-rate metrics and wants a risky release to hurt as few users as possible if it's bad. Which fits best?",
              choices: ["Recreate the whole service, so that it gets a completely clean restart from scratch each time", "Canary, promoting only while metrics stay healthy", "Rolling with extra surge", "Blue-green, flipping everyone at once"],
              answer: 1,
              why: [
                "Recreate has downtime and no gradual exposure.",
                "Good metrics plus a desire to minimize blast radius is exactly the canary case.",
                "Rolling exposes a growing share too, but without the metric-gated abort a canary adds.",
                "Blue-green moves everyone together, the opposite of minimizing who's exposed."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "A team wants the simplest instant rollback and can afford to run two environments. Which fits best?",
              choices: ["Canary, so that the team gets to lean on all of the detailed metrics that it provides them", "Blue-green, flip live and flip back instantly", "Recreate, to save money", "Rolling, to avoid two environments"],
              answer: 1,
              why: [
                "Canary is more moving parts than they need for a simple reversible cutover.",
                "Instant switch and rollback, given the budget for two environments, is blue-green's sweet spot.",
                "Recreate has downtime and discards the old version.",
                "Rolling avoids the double cost but gives up the instant rollback they want."
              ] } },

          { ask: { type: "explain",
              q: "Contrast blue-green and canary, and when you'd reach for each.",
              model: "Blue-green runs two environments and flips all traffic between them at once, so cutover and rollback are instant — good when you can afford two environments and want a simple reversible switch. Canary moves traffic to the new version gradually while watching metrics, aborting if the error rate climbs, so a bad release only hits a small slice — good when you want to minimize blast radius and have the metrics to gate on. Both keep the old version reachable so you can undo a bad deploy.",
              rubric: ["Says blue-green flips all traffic at once with instant rollback, at the cost of two environments", "Says canary shifts traffic gradually and aborts on bad metrics, limiting blast radius", "Gives a when-to-use for each"] } }
        ]
      },

      {
        id: "cloud-quiz-5",
        title: "Unit 5 quiz: Blue-green and canary",
        kind: "quiz", xp: 10,
        brief: "Blue-green cutover and rollback, the canary abort gate, and choosing between them. 80% to pass.",
        questions: [
          { q: "In a blue-green deployment, where do you deploy the new version?",
            choices: ["To the live environment directly", "To the idle environment, then cut over to it", "To a shrunken copy of production", "To every instance at once"],
            answer: 1, explain: "You deploy to the idle environment off the traffic path, test it, then flip live to it — so the switch and any rollback are instant." },
          { q: "Why is a blue-green rollback instant?",
            choices: ["The failed version is patched automatically on rollback", "The previous environment is still running, so you just switch traffic back to it", "The system reboots into the last good image", "Rollbacks skip all health checks to go faster"],
            answer: 1, explain: "The old environment was never torn down, so flipping traffic back to it takes effect immediately." },
          { q: "A canary is at 50% and the error rate jumps past the threshold. What should happen?",
            choices: ["Promote it to 100% to gather more data", "Abort: pull traffic back to 0%", "Leave it at 50% indefinitely", "Restart the whole cluster"],
            answer: 1, explain: "Crossing the threshold aborts the canary — traffic returns to 0% so the bad version stops reaching users." },
          { q: "What is the main advantage of a canary release?",
            choices: ["It somehow needs no metrics or monitoring of any kind at all whatsoever in order for it to run safely", "It limits the blast radius — a bad version reaches only a small slice before it's caught", "It is always cheaper than every other strategy", "It removes the need to keep the old version"],
            answer: 1, explain: "Gradual, metric-gated exposure means a bad release hurts few users before the abort pulls it back." },
          { q: "What is the main cost of blue-green compared with a rolling update?",
            choices: ["It ends up causing a real, noticeable stretch of downtime on the traffic switch itself each time", "It runs two full environments, roughly doubling that footprint", "It cannot be rolled back once cut over", "It exposes the new version to everyone gradually"],
            answer: 1, explain: "Keeping the old environment live alongside the new one means paying for both during the release." }
        ]
      }
    ]
  });
})();
