/* Cloud Platforms & Deployment — Unit 8: Plan it, and analyse it */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var ANALYSER_STARTER = R`
// A deployment analyser: every answer is a count or a boolean, computed from
// the rules this course taught. Implement the four functions.

// 1) rolloutFloor(spec): during a rolling update, the fewest instances still
//    serving = replicas - maxUnavailable. spec = { replicas, surge, maxUnavailable }.
function rolloutFloor(spec) {
  return spec.replicas; // ignores maxUnavailable
}

// 2) canaryOutcome(errorRates, threshold): step a canary through the readings,
//    promoting 10 -> 50 -> 100 while errorRate <= threshold, aborting to
//    { percent: 0, aborted: true, done: false } the moment one exceeds it.
//    Return the final { percent, aborted, done }. Start at percent 0.
function canaryOutcome(errorRates, threshold) {
  return { percent: 100, aborted: false, done: true }; // ignores the readings
}

// 3) cheaperPlan(a, b, requests): the cheaper plan's type at that traffic, or
//    "equal" at a tie. A plan is { type:"always-on", monthly } or
//    { type:"serverless", perRequest }.
function cheaperPlan(a, b, requests) {
  return a.type; // always picks a
}

// 4) budgetReport(slo, windowDays, outageMinutes): the error budget in minutes,
//    what's left after the outage, and whether it's blown. Round to 2 decimals.
//    Return { allowed, left, blown } (blown is left < 0).
function budgetReport(slo, windowDays, outageMinutes) {
  return { allowed: 0, left: 0, blown: true };
}

console.log(rolloutFloor({ replicas: 5, surge: 1, maxUnavailable: 2 }));
`;

  var ANALYSER_SOLUTION = R`
function rolloutFloor(spec) {
  return spec.replicas - spec.maxUnavailable;
}

function canaryOutcome(errorRates, threshold) {
  var s = { percent: 0, aborted: false, done: false };
  for (var i = 0; i < errorRates.length; i++) {
    if (s.aborted || s.done) break;
    if (errorRates[i] > threshold) {
      s = { percent: 0, aborted: true, done: false };
      break;
    }
    var next = [10, 50, 100].find(function (p) { return p > s.percent; });
    s = { percent: next, aborted: false, done: next === 100 };
  }
  return s;
}

function monthlyCost(plan, requests) {
  return plan.type === "always-on" ? plan.monthly : requests * plan.perRequest;
}

function cheaperPlan(a, b, requests) {
  var ca = monthlyCost(a, requests);
  var cb = monthlyCost(b, requests);
  if (ca < cb) return a.type;
  if (cb < ca) return b.type;
  return "equal";
}

function round2(x) {
  return Math.round(x * 100) / 100;
}

function budgetReport(slo, windowDays, outageMinutes) {
  var allowed = round2((1 - slo) * windowDays * 24 * 60);
  var left = round2(allowed - outageMinutes);
  return { allowed: allowed, left: left, blown: left < 0 };
}

console.log(rolloutFloor({ replicas: 5, surge: 1, maxUnavailable: 2 }));
`;

  window.CODELAB.addUnit("cloud", {
    id: "cloud-u8",
    title: "Plan it, and analyse it",
    icon: "🧭",
    blurb: "No new ideas: plan a real deployment end to end — the strategy, the config, the rollback — then build one analyser that counts what the whole course taught, from rolling floors to error budgets.",
    cheat: [
      { h: "The deploy plan", lang: "text", code:
"1. build ONE artifact\n" +
"2. config + secrets per environment\n" +
"3. deploy to staging, then prod\n" +
"4. pick a strategy: rolling / blue-green / canary\n" +
"5. know your rollback BEFORE you ship",
        note: "A deployment is a plan, not a button. Decide the strategy from the risk, keep config out of the artifact, and never ship without knowing exactly how you'd undo it." },
      { h: "What to count", lang: "text", code:
"rolling floor   replicas - maxUnavailable\n" +
"canary          promote while errorRate <= threshold\n" +
"cost            flat vs requests * perRequest\n" +
"error budget    (1 - SLO) * window",
        note: "Every deployment decision this course made reduces to a count you can check: how many stay up, whether the canary aborts, which plan is cheaper, how much downtime you're allowed." }
    ],
    lessons: [

      {
        id: "cloud-u8-p1",
        title: "Project: Plan the deployment",
        kind: "concept", xp: 40, mins: 29, project: true,
        screens: [
          { read: "You're shipping a payments-adjacent web app to production for the first time. The interview question — and the real one — is *how*. Everything in this course was building to this plan. Start with the pipeline: the same **artifact** is built once, then promoted through environments before it reaches users.\n\nPut the stages in the order a change travels.",
            ask: { type: "order",
              q: "Order a deployment from build to production.",
              lines: [
                "Build one artifact from the merged code",
                "Configure it for staging and deploy there",
                "Verify it in staging (which mirrors prod)",
                "Deploy the same artifact to production"
              ],
              why: "One artifact is built, configured and checked in staging, then the exact same artifact — not a rebuild — is promoted to production." } },

          { read: "The app touches payments, so a bad release is expensive and you want the smallest possible blast radius, with the ability to watch real error rates as it rolls out. You have good metrics and can afford some deploy complexity.",
            ask: { type: "pick", transfer: true,
              q: "Which deploy strategy best fits a risky, payments-adjacent release with good metrics?",
              choices: [
                "Recreate, so the switch to the new version is clean and simple",
                "Canary, exposing a small slice first and aborting on a bad error rate",
                "Deploy straight to 100% and watch the dashboards closely",
                "Blue-green, flipping every user to the new version in one step"
              ],
              answer: 1,
              why: [
                "Recreate has downtime and exposes everyone at once — wrong for a risky release.",
                "A canary limits the blast radius and aborts automatically on bad metrics — exactly this case.",
                "All-at-once maximises blast radius; watching dashboards doesn't undo the damage.",
                "Blue-green flips everyone together, so a bug hits all users the instant you cut over."
              ] } },

          { read: "Now configuration. The artifact is identical in every environment; only the config differs, and secrets never live in it.",
            ask: { type: "pick", transfer: true,
              q: "Where does the production database password belong in this plan?",
              choices: [
                "Baked into the artifact so every environment has it ready",
                "In a committed config file so the whole team can see it",
                "In the environment or a secret store, injected at run time",
                "Hard-coded in the client bundle the browser downloads"
              ],
              answer: 2,
              why: [
                "Baking it in puts the secret in the artifact and ships it everywhere.",
                "A committed file leaks the secret into git history for anyone with the repo.",
                "Injected from the environment or a secret store at run time keeps it out of the artifact and the repo.",
                "The client bundle is downloaded by every visitor — the worst place for a secret."
              ] } },

          { read: "Reliability targets shape the plan too. Suppose the SLO is 99.9% availability over 30 days — an error budget of about 43 minutes a month.",
            ask: { type: "pick", transfer: true,
              q: "The team has already spent most of this month's error budget on incidents. What should the plan say about risky deploys right now?",
              choices: [
                "Ship the risky change now while there is still a little budget left",
                "Raise the SLO so the remaining budget looks larger on paper",
                "Slow down and freeze risky changes until reliability recovers",
                "Ignore the budget, since it resets at the start of next month"
              ],
              answer: 2,
              why: [
                "Little budget left is the signal to hold risk, not spend the last of it.",
                "Moving the target to flatter the number is exactly what the budget exists to prevent.",
                "A nearly-spent budget means freeze risky changes and stabilise — the budget's whole purpose.",
                "Waiting for a reset while unstable risks blowing straight past the target."
              ] } },

          { read: "Last, the part teams skip: the rollback. Before you ship, you decide how you'd undo it.",
            ask: { type: "pick",
              q: "For this canary release, what's the rollback if the error rate spikes at 10%?",
              choices: [
                "Roll forward with a quick patch and hope it resolves it",
                "Abort the canary, sending all traffic back to the old version",
                "Restart every instance and wait for it to settle down",
                "Wait for the canary to reach 100% and then reassess"
              ],
              answer: 1,
              why: [
                "Rolling forward under an active incident adds risk instead of removing it.",
                "Aborting pulls traffic back to the known-good old version immediately — the canary's built-in undo.",
                "A restart doesn't fix a bad version; it's still the bad version.",
                "Promoting a failing canary to everyone is the opposite of a rollback."
              ] } },

          { ask: { type: "explain",
              q: "Summarise your deployment plan for this app: strategy, configuration, and rollback.",
              model: "Build one artifact and promote it through staging to production, configuring it per environment with secrets injected at run time, never baked in. Because it's a risky, payments-adjacent release with good metrics, use a canary: expose a small slice, watch the error rate, and abort back to the old version if it spikes. Respect the error budget — if it's nearly spent, freeze risky deploys. And decide the rollback before shipping: for the canary, aborting sends all traffic back to the known-good version instantly.",
              rubric: [
                "One artifact, promoted staging -> prod, config per env with secrets injected not baked",
                "Picks a strategy (canary) and justifies it from the risk/metrics",
                "Names the rollback plan (abort/switch back to the old version) decided up front",
                "Mentions the error budget guiding whether to ship risk"
              ] } }
        ]
      },

      {
        id: "cloud-u8-p2",
        title: "Project: The deployment analyser",
        kind: "js", chip: "CLOUD", xp: 40, mins: 40, project: true,
        brief: "Build one analyser that answers, in exact counts, the questions this course taught. Four functions, each a rule you've already met:\n\n- **`rolloutFloor(spec)`** — the fewest instances serving during a rolling update: `replicas - maxUnavailable` (Unit 4).\n- **`canaryOutcome(errorRates, threshold)`** — step a canary through the readings, promoting `10 → 50 → 100` while `errorRate <= threshold`, aborting to `{ percent: 0, aborted: true, done: false }` the moment one exceeds it; return the final `{ percent, aborted, done }` (Unit 5).\n- **`cheaperPlan(a, b, requests)`** — the cheaper plan's `type` at that traffic, or `\"equal\"` (Unit 3).\n- **`budgetReport(slo, windowDays, outageMinutes)`** — `{ allowed, left, blown }` error-budget minutes, rounded to two decimals, `blown` when `left < 0` (Unit 7).\n\nEvery number is a deterministic count — nothing is timed.",
        steps: [
          { text: "rolloutFloor is the serving floor of a rolling update.",
            test: R`
T.eq(rolloutFloor({ replicas: 5, surge: 1, maxUnavailable: 2 }), 3, "5 replicas, 2 may be down: 3 serving");
T.eq(rolloutFloor({ replicas: 4, surge: 1, maxUnavailable: 0 }), 4, "0 unavailable: all 4 stay up");
` },
          { text: "canaryOutcome promotes a healthy canary all the way to done.",
            test: R`
T.eq(canaryOutcome([0.0, 0.01, 0.015], 0.02), { percent: 100, aborted: false, done: true }, "all readings under threshold -> 100%, done");
T.eq(canaryOutcome([0.0], 0.02), { percent: 10, aborted: false, done: false }, "one healthy reading -> 10%");
` },
          { text: "canaryOutcome aborts the moment a reading exceeds the threshold.",
            test: R`
T.eq(canaryOutcome([0.0, 0.05], 0.02), { percent: 0, aborted: true, done: false }, "0.05 > 0.02 at 10% -> abort to 0");
T.eq(canaryOutcome([0.03], 0.02), { percent: 0, aborted: true, done: false }, "a bad first reading aborts immediately");
` },
          { text: "cheaperPlan compares a flat plan against a per-request plan.",
            test: R`
var ao = { type: "always-on", monthly: 30 };
var sl = { type: "serverless", perRequest: 0.0002 };
T.eq(cheaperPlan(ao, sl, 100000), "serverless", "at 100k, per-request is cheaper");
T.eq(cheaperPlan(ao, sl, 500000), "always-on", "at 500k, flat is cheaper");
T.eq(cheaperPlan(ao, sl, 150000), "equal", "150k is the break-even");
` },
          { text: "budgetReport reports the allowance, what's left, and whether it's blown.",
            test: R`
T.eq(budgetReport(0.999, 30, 30), { allowed: 43.2, left: 13.2, blown: false }, "43.2 allowed, 30 used, 13.2 left, not blown");
T.eq(budgetReport(0.999, 30, 60), { allowed: 43.2, left: -16.8, blown: true }, "a 60-min outage overspends 43.2 -> blown");
` }
        ],
        files: [{ name: "script.js", content: ANALYSER_STARTER }],
        solution: { "script.js": ANALYSER_SOLUTION },
        hints: [
          "rolloutFloor is replicas - maxUnavailable; budgetReport's allowed is round2((1 - slo) * windowDays * 24 * 60).",
          "canaryOutcome: loop the readings; stop if already aborted/done, abort if a reading exceeds the threshold, else promote with [10,50,100].find(p => p > percent).",
          "cheaperPlan: a small monthlyCost helper (flat monthly vs requests * perRequest), then compare and return the cheaper .type, or \"equal\"."
        ]
      },

      {
        id: "cloud-quiz-8",
        title: "Final quiz: Cloud platforms and deployment",
        kind: "quiz", xp: 10,
        brief: "The whole course: service models, config, serverless cost, rolling/blue-green/canary, observability and reliability. 80% to pass.",
        questions: [
          { q: "Which service model leaves you managing only your function, with the provider running everything else?",
            choices: ["IaaS", "PaaS", "Serverless", "On-premise"],
            answer: 2, explain: "Serverless is the far end of the responsibility line: you supply a function, the provider runs it on demand and manages the rest." },
          { q: "Config sources disagree on a key. Which order wins, lowest precedence to highest?",
            choices: ["env < overrides < file < defaults", "defaults < file < env < overrides", "overrides < file < env < defaults", "file < env < defaults < overrides"],
            answer: 1, explain: "Defaults are the floor; a file beats them, an env var beats the file, and an explicit override beats all." },
          { q: "Serverless is $0.0002/request; always-on is $30/month. Which is cheaper at 500,000 requests?",
            choices: ["Serverless", "Always-on", "They are equal", "It cannot be computed"],
            answer: 1, explain: "500,000 * 0.0002 = $100, well above the flat $30 — past the break-even, the flat box wins." },
          { q: "During a rolling update with 6 replicas and maxUnavailable 2, how many keep serving?",
            choices: ["2", "4", "6", "8"],
            answer: 1, explain: "The serving floor is replicas - maxUnavailable = 6 - 2 = 4." },
          { q: "A canary at 50% sees the error rate cross its threshold. What should happen?",
            choices: ["Promote it to 100% to gather more data", "Abort and send all traffic back to the old version", "Hold it at 50% until someone investigates", "Restart the whole cluster to clear the error"],
            answer: 1, explain: "Crossing the threshold aborts the canary — traffic returns to the known-good version so the bad release stops spreading." },
          { q: "Which observability pillar follows one request across every service it touches?",
            choices: ["Logs", "Metrics", "Traces", "Alerts"],
            answer: 2, explain: "A trace follows a single request end to end, showing where the time went across services." },
          { q: "A 99.9% availability SLO over 30 days gives an error budget of about how long?",
            choices: ["43 minutes", "7 hours", "Zero", "3 days"],
            answer: 0, explain: "0.1% of 43,200 minutes in 30 days is 43.2 minutes of allowed downtime for the month." },
          { q: "\"We can lose at most 5 minutes of data\" is a statement about which objective?",
            choices: ["RTO", "RPO", "SLA", "SLI"],
            answer: 1, explain: "RPO (Recovery Point Objective) bounds data loss, set by backup recency. RTO bounds downtime." }
        ]
      }
    ]
  });
})();
