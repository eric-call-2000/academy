/* Cloud Platforms & Deployment — Unit 6: Observability */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var ALERT_STARTER = R`
// An alert should fire only when a metric stays bad for a SUSTAINED window,
// not on a single one-second blip. Given a series of per-minute readings,
// alert only if the value is over the threshold for at least forMinutes
// readings IN A ROW.
//
//   series      array of numbers, one reading per minute (oldest first)
//   threshold   the value a reading must exceed to count as "bad"
//   forMinutes  how many bad readings in a row trigger the alert
//
// shouldAlert(series, threshold, forMinutes) -> true or false
function shouldAlert(series, threshold, forMinutes) {
  // First draft: alerts on ANY single reading over the threshold — noisy.
  return series.some(function (v) { return v > threshold; });
}

console.log(shouldAlert([50, 120, 130, 140, 60], 100, 3));
`;

  var ALERT_SOLUTION = R`
function shouldAlert(series, threshold, forMinutes) {
  var run = 0;
  for (var i = 0; i < series.length; i++) {
    if (series[i] > threshold) {
      run++;
      if (run >= forMinutes) return true;
    } else {
      run = 0;
    }
  }
  return false;
}

console.log(shouldAlert([50, 120, 130, 140, 60], 100, 3));
`;

  window.CODELAB.addUnit("cloud", {
    id: "cloud-u6",
    title: "Observability: logs, metrics, traces",
    icon: "🔭",
    blurb: "You can't fix what you can't see. The three kinds of signal a running system emits and what each one answers, structured logs you can actually query, and alerts that fire on a real problem instead of every passing blip.",
    cheat: [
      { h: "The three pillars", lang: "text", code:
"logs     what happened  (one event, one line)\n" +
"metrics  how much/often (numbers over time)\n" +
"traces   where the time went (one request across\n" +
"         many services)",
        note: "Logs tell you what happened in a single moment, metrics show trends and rates across time, and a trace follows one request through every service it touched. You usually need all three." },
      { h: "Structured logs", lang: "text", code:
"bad   console.log('user ' + id + ' failed: ' + err)\n" +
"good  log.error({ event:'login_fail', userId:id,\n" +
"                  reason:err.code })",
        note: "A structured log is data (fields), not a sentence. You can filter and count it — \"all login_fail for userId 7\" — where free-text needs fragile grep. Extends the print-debugging discipline from Debugging & Diagnosis." },
      { h: "Alert on sustained pain", lang: "text", code:
"alert when: over threshold FOR N minutes in a row\n" +
"alert on:   symptoms users feel (errors, latency)\n" +
"not on:     one blip, or CPU that nobody notices",
        note: "An alert that fires on a single spike trains you to ignore alerts (alert fatigue). Fire on a sustained problem, and on things users actually feel, so a page means something." }
    ],
    lessons: [

      {
        id: "cloud-u6-1",
        title: "The three pillars",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "A running system in the cloud is out of reach — you can't attach a debugger to production. So it has to **tell you** what it's doing, and it does that through three kinds of signal, each answering a different question:\n\n- **Logs** — *what happened?* A record of individual events: \"user 7 logged in\", \"payment failed\". One event, one entry.\n- **Metrics** — *how much, how often?* Numbers measured over time: requests per second, error rate, memory used. Trends and rates, not individual events.\n- **Traces** — *where did the time go?* One request followed across every service it touched, showing which step was slow.",
            ask: { type: "pick",
              q: "You want to know the error rate over the last hour. Which pillar answers that?",
              choices: ["Logs", "Metrics", "Traces", "None of them"],
              answer: 1,
              why: [
                "Logs record individual events, not an aggregated rate over time.",
                "Metrics are numbers over time — a rate like errors-per-hour is exactly a metric.",
                "A trace follows one request; it doesn't aggregate a rate.",
                "Metrics answer it directly."
              ] } },

          { read: "The three overlap but don't replace each other. A metric tells you *that* error rate jumped at 3pm; logs tell you *what* the errors said; a trace tells you *where* in a slow request the time was spent — say, one database call taking 90% of it. Debugging a production issue usually walks across all three: notice it in a metric, read the matching logs, follow a trace to the slow or failing step.",
            ask: { type: "pick", transfer: true,
              q: "A request is slow and touches five services. Which pillar best shows which service ate the time?",
              choices: ["Logs, one line per service", "A trace following the request across all five", "A metric of average latency", "None can show that"],
              answer: 1,
              why: [
                "Logs from five services are scattered and hard to stitch into one request's timeline.",
                "A trace follows the single request end to end and shows each step's duration — exactly this.",
                "An average latency metric shows there's a problem, not which service caused it.",
                "A trace shows it directly."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "Which pillar records individual events like \"user 7 logged in\" — logs, metrics, or traces? Type one word.",
              answer: "logs",
              why: "Logs are the record of discrete events. Metrics aggregate numbers over time; traces follow one request across services." } },

          { ask: { type: "explain",
              q: "What are the three pillars of observability, and what does each answer?",
              model: "Logs record what happened as individual events, one entry each. Metrics measure how much or how often as numbers over time, so they show trends and rates like error rate or requests per second. Traces follow a single request across all the services it touches, showing where the time went. You often use all three together: spot a problem in a metric, read the logs for detail, and follow a trace to the slow or failing step.",
              rubric: ["Logs = individual events (what happened)", "Metrics = numbers/rates over time (how much/how often)", "Traces = one request across services (where the time went)"] } }
        ]
      },

      {
        id: "cloud-u6-2",
        title: "Structured logs you can actually query",
        kind: "concept", xp: 15, mins: 11,
        screens: [
          { read: "Logs are only useful if you can find things in them. A **free-text** log line like `\"user 7 failed to log in: bad password\"` reads fine to a human but is a nightmare at scale: to answer \"how many login failures for user 7 today?\" you're writing fragile text searches against millions of lines.\n\nA **structured** log is **data, not a sentence**: `{ event: \"login_fail\", userId: 7, reason: \"bad_password\" }`. Now the question is a filter — `event = login_fail AND userId = 7` — that a log system can index, count and chart. Same information, but queryable.",
            ask: { type: "pick",
              q: "What makes a structured log more useful than a free-text one?",
              choices: ["It's shorter to write", "It's data with fields, so it can be filtered, counted and charted", "It never contains errors", "It uses less storage always"],
              answer: 1,
              why: [
                "It's often longer, not shorter — that's not the win.",
                "Fields make it queryable: filter by event and userId, count, chart — where free text needs fragile grep.",
                "It logs errors like any log; structure is about queryability.",
                "Storage isn't the point, and it isn't always smaller."
              ] } },

          { read: "This is the same discipline as the Debugging course's print debugging, grown up for production. There you learned to print *meaningful* values, not `\"here\"`. In the cloud you can't watch a console, so those prints become **structured events** shipped to a log system — with enough fields (an event name, the ids involved, a request id) to reconstruct what happened without being there.\n\nOne field earns its place above the rest: a **request id** carried through every log line of a request, so you can pull the whole story of one request out of the noise of thousands.",
            ask: { type: "pick", transfer: true,
              q: "Why attach a request id to every log line produced while handling a request?",
              choices: ["To make the logs longer", "So you can pull every line for one specific request out of thousands interleaved", "To replace the need for metrics", "To encrypt the logs"],
              answer: 1,
              why: [
                "Length isn't a goal; correlation is.",
                "A shared request id lets you filter to exactly one request's lines among many concurrent ones.",
                "It doesn't replace metrics; it correlates logs.",
                "A request id is for correlation, not encryption."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "Which log is easiest to answer \"count all failed payments for merchant 42 today\" from?",
              choices: ["\"payment failed for merchant 42\" as free text", "{ event: \"payment_fail\", merchantId: 42 } as structured data", "A screenshot of the error", "A single daily summary line"],
              answer: 1,
              why: [
                "Free text needs a fragile search that breaks when the wording changes.",
                "Structured fields let you filter event = payment_fail AND merchantId = 42 and count directly.",
                "A screenshot can't be queried at all.",
                "A daily summary has already thrown away the per-event detail you need to count."
              ] } }
        ]
      },

      {
        id: "cloud-u6-3",
        title: "Alerts that fire on a real problem",
        kind: "js", chip: "CLOUD", xp: 15, mins: 14,
        brief: "An alert is only worth having if it means something. Fire on a single one-second spike and people learn to ignore the pager — that's **alert fatigue**. The fix is to alert only when a metric stays bad for a **sustained window**.\n\nImplement `shouldAlert(series, threshold, forMinutes)`. `series` is per-minute readings (oldest first); alert only if a reading is **over** `threshold` for at least `forMinutes` readings **in a row**. A blip that recovers resets the streak.",
        steps: [
          { text: "A sustained run over the threshold fires the alert.",
            test: R`
T.eq(shouldAlert([50, 120, 130, 140, 60], 100, 3), true, "120,130,140 are three in a row over 100");
T.eq(shouldAlert([200, 200, 200], 100, 3), true, "three straight over threshold");
` },
          { text: "A blip that recovers, or a run too short, does not fire.",
            test: R`
T.eq(shouldAlert([120, 130, 60, 140, 150], 100, 3), false, "the run breaks at 60, so no 3-in-a-row");
T.eq(shouldAlert([120, 130], 100, 3), false, "only two over threshold — not sustained enough");
T.eq(shouldAlert([500], 100, 3), false, "a single spike is not a sustained problem");
` },
          { text: "Readings at or below the threshold never count.",
            test: R`
T.eq(shouldAlert([50, 60, 70, 80], 100, 3), false, "never over the threshold at all");
T.eq(shouldAlert([100, 100, 100], 100, 3), false, "exactly at the threshold is not OVER it");
` },
          { text: "Only the streak that reaches the window matters, wherever it is in the series.",
            test: R`
T.eq(shouldAlert([120, 60, 120, 130, 140, 150], 100, 4), true, "a later run of four fires even after an early blip reset it");
T.eq(shouldAlert([120, 130, 140, 60, 120, 130], 100, 4), false, "no single run reaches four in a row");
` }
        ],
        files: [{ name: "script.js", content: ALERT_STARTER }],
        solution: { "script.js": ALERT_SOLUTION },
        hints: [
          "Walk the series keeping a counter of consecutive over-threshold readings.",
          "Increment the counter when a reading is over the threshold; reset it to 0 otherwise.",
          "Return true as soon as the counter reaches forMinutes; if you finish the loop, return false."
        ]
      },

      {
        id: "cloud-u6-4",
        title: "Alerting on what users feel",
        kind: "concept", xp: 15, mins: 11,
        screens: [
          { read: "Sustained-not-blip is half the rule. The other half is **what** to alert on. It's tempting to alert on every internal number — CPU at 80%, memory climbing — but most of those don't matter to anyone if the service is still fast and correct. Paging a human at 3am for a CPU number nobody feels is how you train people to silence alerts.\n\nAlert on **symptoms users feel**: elevated error rate, requests getting slow, checkouts failing. Those are the signals that a page is worth waking up for. Internal resource numbers are for *dashboards* you look at while investigating — not for pages.",
            ask: { type: "pick",
              q: "Which is the better thing to page someone about at 3am?",
              choices: ["CPU usage at 80% while the service is still fast", "The checkout error rate sustained well above normal", "Memory slightly higher than yesterday", "A single slow request that recovered"],
              answer: 1,
              why: [
                "80% CPU with a healthy service is a dashboard number, not a page.",
                "A sustained checkout error rate is a symptom users feel — worth waking someone.",
                "A small memory change nobody notices isn't page-worthy.",
                "One recovered request is a blip, not a sustained problem."
              ] } },

          { read: "The failure mode has a name: **alert fatigue**. When alerts fire too often, or on things that don't matter, people stop trusting them — and then miss the one that does matter. Every noisy alert spends the team's attention and erodes that trust.\n\nSo the two rules work together: fire on a **sustained** problem (Unit's `shouldAlert`), and only on **user-facing symptoms**. Everything else belongs on a dashboard you consult, not a pager that wakes you.",
            ask: { type: "pick", transfer: true,
              q: "What is alert fatigue?",
              choices: ["Alerts that take too long to send", "People losing trust in alerts because too many fire on things that don't matter, so they miss real ones", "The cost of storing alert history", "An alert that fires only once"],
              answer: 1,
              why: [
                "It's about trust and noise, not delivery speed.",
                "Too many low-value alerts train people to ignore them, and then a real one slips past.",
                "Storage cost isn't what the term means.",
                "A single meaningful alert is the opposite of fatigue."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "CPU is high but every request is fast and succeeding. Page, or dashboard?",
              choices: ["Page someone immediately", "Dashboard — no user-facing symptom, so it's not page-worthy", "Both at once", "Delete the metric"],
              answer: 1,
              why: [
                "Nothing users feel is wrong, so a page would be noise.",
                "High CPU with healthy responses is exactly a dashboard signal to note, not wake someone for.",
                "Paging here adds to fatigue.",
                "The metric is still useful on a dashboard; don't delete it."
              ] } },

          { ask: { type: "explain",
              q: "What are the two rules for a good alert, and why do they matter?",
              model: "First, alert only on a sustained problem — over threshold for a window, not a single blip — so a transient spike doesn't page anyone. Second, alert on symptoms users actually feel, like error rate or latency, not internal numbers like CPU that nobody notices. Together they fight alert fatigue: if alerts are noisy or meaningless, people stop trusting them and miss the one that matters, so keeping pages rare and real keeps them worth answering.",
              rubric: ["Rule 1: alert on a sustained problem, not a one-off blip", "Rule 2: alert on user-facing symptoms, not internal numbers nobody feels", "Says the point is to avoid alert fatigue / keep alerts trustworthy"] } }
        ]
      },

      {
        id: "cloud-quiz-6",
        title: "Unit 6 quiz: Observability",
        kind: "quiz", xp: 10,
        brief: "The three pillars, structured logs, sustained alerting, and alert fatigue. 80% to pass.",
        questions: [
          { q: "Which pillar answers \"where did the time go in this one slow request across services\"?",
            choices: ["Logs", "Metrics", "Traces", "None of them"],
            answer: 2, explain: "A trace follows a single request through every service it touches, showing each step's duration." },
          { q: "What makes a structured log more useful than free text?",
            choices: ["It is always shorter to write out by hand", "It's data with fields, so you can filter, count and chart it", "It can never contain a spelling mistake", "It compresses to a smaller size on disk"],
            answer: 1, explain: "Fields like event and userId let a log system index and query the log, where free text needs fragile searches." },
          { q: "A metric is over its threshold for a single one-minute blip, then recovers. Should a well-designed alert fire?",
            choices: ["Yes, every threshold crossing must page someone", "No — alert on a sustained window, not a single blip", "Yes, but only during business hours", "Only if CPU was also high"],
            answer: 1, explain: "Firing on blips causes alert fatigue. Alert when the metric stays bad for a sustained window." },
          { q: "Which is the best thing to page a human about?",
            choices: ["CPU at 80% while requests stay fast and succeed", "A sustained spike in the user-facing error rate", "Memory a little higher than last week", "Disk usage growing slowly over months"],
            answer: 1, explain: "Page on symptoms users feel. Internal resource numbers with no user impact belong on a dashboard, not a pager." },
          { q: "What is alert fatigue?",
            choices: ["Alerts arriving a few seconds late", "People stop trusting alerts because too many are noisy, so a real one gets missed", "The storage cost of keeping old alerts around", "The delay before an alert auto-resolves itself"],
            answer: 1, explain: "Noisy or meaningless alerts erode trust; people tune them out and then miss the alert that actually mattered." }
        ]
      }
    ]
  });
})();
