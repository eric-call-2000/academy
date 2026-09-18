/* Cloud Platforms & Deployment — Unit 7: Reliability */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var BUDGET_STARTER = R`
// An SLO is a reliability target, like 99.9% availability over a window.
// The gap below 100% is your ERROR BUDGET: how much downtime you're allowed
// to spend in that window before you've broken the target.
//
// errorBudget(slo, windowDays): the allowed downtime in MINUTES over the
//   window = (1 - slo) * windowDays * 24 * 60, rounded to two decimals.
// budgetLeft(slo, windowDays, outageMinutes): budget minutes remaining after
//   an outage (negative if you've blown it), rounded to two decimals.
function round2(x) {
  return Math.round(x * 100) / 100;
}

function errorBudget(slo, windowDays) {
  return 0; // first draft: claims no downtime is ever allowed
}

function budgetLeft(slo, windowDays, outageMinutes) {
  return 0;
}

console.log(errorBudget(0.999, 30));
`;

  var BUDGET_SOLUTION = R`
function round2(x) {
  return Math.round(x * 100) / 100;
}

function errorBudget(slo, windowDays) {
  return round2((1 - slo) * windowDays * 24 * 60);
}

function budgetLeft(slo, windowDays, outageMinutes) {
  return round2(errorBudget(slo, windowDays) - outageMinutes);
}

console.log(errorBudget(0.999, 30));
`;

  window.CODELAB.addUnit("cloud", {
    id: "cloud-u7",
    title: "Reliability: SLOs, error budgets and DR",
    icon: "🎯",
    blurb: "How reliable is reliable enough, and what happens when it isn't. The target you set and the budget it buys you, degrading gracefully instead of falling over, and the two numbers that shape every disaster-recovery plan.",
    cheat: [
      { h: "SLI / SLO / SLA", lang: "text", code:
"SLI  the measurement   (actual % of good requests)\n" +
"SLO  the target        (aim: 99.9% good)\n" +
"SLA  the promise       (contract + penalty if missed)\n" +
"100% is the wrong target: no budget to ship or fail",
        note: "You measure an SLI, aim for an SLO, and may owe on an SLA. Chasing 100% leaves no room for deploys, experiments or the occasional failure — so pick a target with slack." },
      { h: "Error budget", lang: "text", code:
"budget = (1 - SLO) * window\n" +
"99.9% over 30 days -> 0.1% of 43,200 min = 43.2 min\n" +
"spend it on deploys and incidents; run out -> freeze\n" +
"risky changes until reliability recovers",
        note: "The gap below 100% is a budget you're allowed to spend. Plenty of budget left means you can take risks; budget blown means slow down and stabilise. It turns 'reliable enough' into a number." },
      { h: "RPO vs RTO (DR)", lang: "text", code:
"RPO  how much DATA you can lose  (backup age)\n" +
"RTO  how long you can be DOWN    (time to restore)\n" +
"a backup you've never restored is a hope, not a plan",
        note: "Recovery Point Objective bounds data loss; Recovery Time Objective bounds downtime. Both are set by the business, and an untested backup doesn't count — practise the restore." }
    ],
    lessons: [

      {
        id: "cloud-u7-1",
        title: "SLOs and the error budget",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "\"Reliable enough\" needs a number. Three related ones:\n\n- an **SLI** (indicator) is what you **measure** — say, the percentage of requests that succeed.\n- an **SLO** (objective) is the **target** you aim that indicator at — say, 99.9% success over 30 days.\n- an **SLA** (agreement) is a **promise** to a customer, often with a refund if you miss it.\n\nThe surprising rule: **100% is the wrong target.** Chasing perfect reliability leaves no room to ship changes, run experiments, or absorb the occasional failure — all of which carry risk. A good SLO sits below 100% on purpose.",
            ask: { type: "pick",
              q: "Which is the SLO in this list?",
              choices: ["The measured percentage of requests that succeeded", "The target of 99.9% successful requests per month", "The refund owed to a customer for a missed month", "The dashboard that charts the success rate live"],
              answer: 1,
              why: [
                "That measured percentage is the SLI, the indicator you observe.",
                "The 99.9% target is the SLO — the objective you aim the indicator at.",
                "A refund for a miss is part of the SLA, the customer promise.",
                "The dashboard displays the SLI; it isn't the objective itself."
              ] } },

          { read: "The gap between your SLO and 100% is your **error budget**: the amount of unreliability you're *allowed* over the window. At 99.9% over 30 days, that's 0.1% of the month — about **43 minutes** of downtime you may spend.\n\nAnd \"spend\" is the right word. Deploys, risky experiments and incidents all draw it down. Plenty of budget left means you can take risks and ship fast; budget blown means slow down, freeze risky changes, and stabilise. It turns an argument about \"are we reliable enough\" into a number both sides can read.",
            ask: { type: "pick", transfer: true,
              q: "What does having plenty of error budget left tell a team they can do?",
              choices: ["Stop deploying and freeze the codebase completely", "Ship faster and take more risk, since there's slack", "Lower the SLO to whatever the current uptime is", "Ignore reliability until the budget is fully gone"],
              answer: 1,
              why: [
                "A freeze is what you do when the budget is GONE, not when it's healthy.",
                "Budget to spare is exactly the signal that risk and speed are affordable right now.",
                "You don't move the target to match reality; the budget is measured against the fixed SLO.",
                "Reliability still matters; the budget guides how much risk, it doesn't switch it off."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "Why is a 100% availability SLO a bad target? In one word, it leaves you no error ____.",
              answer: "budget",
              why: "A 100% target leaves zero error budget, so any deploy, experiment or failure — all of which carry risk — already breaks it." } },

          { ask: { type: "explain",
              q: "What is an error budget, and how does a team use it?",
              model: "An error budget is the amount of unreliability an SLO allows — the gap below 100% over the window, like the ~43 minutes a month a 99.9% target permits. A team spends it on deploys, experiments and incidents: when plenty is left they can ship fast and take risks, and when it's spent they freeze risky changes and stabilise. It turns 'reliable enough' into a shared number that guides how much risk is affordable.",
              rubric: ["Says the budget is the allowed unreliability (gap below the SLO / 100%)", "Says it's spent by deploys, incidents and risk", "Says lots left = ship/risk, spent = slow down/freeze"] } }
        ]
      },

      {
        id: "cloud-u7-2",
        title: "Computing the error budget",
        kind: "js", chip: "CLOUD", xp: 15, mins: 14,
        brief: "The error budget is just arithmetic on the SLO. Over a window of `windowDays`, a target of `slo` (a fraction like `0.999`) allows `(1 - slo)` of the time to be downtime — in minutes, `(1 - slo) * windowDays * 24 * 60`.\n\nImplement `errorBudget(slo, windowDays)` (the allowed downtime in minutes, rounded to two decimals with the provided `round2`) and `budgetLeft(slo, windowDays, outageMinutes)` (what remains after an outage — negative if you've blown the budget, also rounded).",
        steps: [
          { text: "99.9% over 30 days is about 43 minutes of allowed downtime.",
            test: R`
T.eq(errorBudget(0.999, 30), 43.2, "0.1% of 43,200 minutes = 43.2 min");
T.eq(errorBudget(0.99, 30), 432, "99% over 30 days is ten times looser: 432 min");
` },
          { text: "A tighter SLO or a shorter window is a smaller budget.",
            test: R`
T.eq(errorBudget(0.9999, 30), 4.32, "99.99% over 30 days: only 4.32 min");
T.eq(errorBudget(0.999, 7), 10.08, "99.9% over a 7-day window: 10.08 min");
` },
          { text: "budgetLeft subtracts the outage — and goes negative when you blow it.",
            test: R`
T.eq(budgetLeft(0.999, 30, 30), 13.2, "43.2 allowed minus a 30-min outage = 13.2 left");
T.eq(budgetLeft(0.999, 30, 60), -16.8, "a 60-min outage overspends the 43.2 budget by 16.8");
T.eq(budgetLeft(0.99, 30, 432), 0, "spending exactly the budget leaves 0");
` }
        ],
        files: [{ name: "script.js", content: BUDGET_STARTER }],
        solution: { "script.js": BUDGET_SOLUTION },
        hints: [
          "errorBudget: the allowed fraction is (1 - slo); multiply by the window in minutes (windowDays * 24 * 60) and round2 it.",
          "24 * 60 is minutes per day; times windowDays is the window in minutes.",
          "budgetLeft is errorBudget(slo, windowDays) - outageMinutes, rounded — let it go negative when the outage exceeds the budget."
        ]
      },

      {
        id: "cloud-u7-3",
        title: "Degrading gracefully",
        kind: "concept", xp: 15, mins: 11,
        screens: [
          { read: "When part of a system fails, you have a choice: fall over completely, or **degrade gracefully** — keep the core working and drop only the broken part. A shopping site whose recommendation service is down should still let people **search and check out**; hiding the \"recommended for you\" strip is far better than a blank error page.\n\nThe techniques are familiar from earlier courses: **serve stale** cached data when the fresh source is down (How the Web Works, Unit 6), **fail soft** by showing a sensible default instead of an error, and isolate a failing dependency so it can't take the whole page with it.",
            ask: { type: "pick",
              q: "A product page's reviews service is down. What's the graceful response?",
              choices: ["Return a 500 error for the whole product page", "Show the product and hide the reviews section", "Retry the reviews service until the page loads", "Take the entire site offline until it's fixed"],
              answer: 1,
              why: [
                "Failing the whole page over one broken section is the opposite of graceful.",
                "Dropping only the broken part keeps the core page useful — exactly graceful degradation.",
                "Blocking the page on endless retries makes one slow dependency stall everything.",
                "Taking the site down over one section is the least graceful option there is."
              ] } },

          { read: "Serving **stale** data is a key move, and it ties straight back to caching. If the live source of some data is down but you hold a recently cached copy, showing that slightly-old copy is usually far better than showing nothing. A price from five minutes ago beats an error page; a cached list beats a spinner that never resolves.\n\nThe trade is honesty about freshness: stale is fine for a product description, risky for a bank balance. Degrade the parts where slightly-old is acceptable, and fail loudly only where it isn't.",
            ask: { type: "pick", transfer: true,
              q: "The live inventory service is briefly down but you have a 2-minute-old cached copy. For a product listing page, what's usually best?",
              choices: ["Serve the cached copy and note it may be slightly stale", "Show an error page until the service recovers", "Block the page on retries to the dead service", "Clear the cache so nothing stale can show"],
              answer: 0,
              why: [
                "A 2-minute-old listing is far more useful than nothing — serve it, ideally flagged as possibly stale.",
                "An error page over a brief blip is a worse experience than slightly-old data.",
                "Blocking on retries turns a brief outage into a hung page.",
                "Clearing the cache throws away the very copy that would keep the page working."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "For which piece of data is serving a slightly stale cached value the RISKIEST?",
              choices: ["A product's text description", "A blog post's published date", "A user's current account balance", "A site's footer navigation links"],
              answer: 2,
              why: [
                "A description rarely changes; stale is harmless.",
                "A publish date is fixed once set; stale is fine.",
                "A balance must be current — showing an old one can mislead a real financial decision.",
                "Footer links are effectively static; stale is fine."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "Keeping the core of a system working while dropping only its failed parts is called graceful ____. Type the one word.",
              answer: "degradation",
              accept: ["degrade", "degrading"],
              why: "Graceful degradation keeps the essential features running and sheds only the broken ones, instead of failing completely." } }
        ]
      },

      {
        id: "cloud-u7-4",
        title: "Disaster recovery: RPO and RTO",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "Some failures are bigger than a dropped section — a region goes down, a database is corrupted, data is deleted. **Disaster recovery** is the plan for those, and it's shaped by two numbers:\n\n- **RPO** — Recovery *Point* Objective: how much **data** you can afford to lose, measured as the age of your last good backup. Hourly backups mean an RPO of up to an hour of lost data.\n- **RTO** — Recovery *Time* Objective: how long you can afford to be **down** while you restore.\n\nRPO is about *data loss*; RTO is about *downtime*. They're set by the business, and tighter targets cost more.",
            ask: { type: "pick",
              q: "\"We can lose at most 5 minutes of data\" is a statement about which objective?",
              choices: ["RTO, the time allowed to restore service", "RPO, the amount of data loss allowed", "SLA, the contractual uptime promise", "SLI, the measured success rate"],
              answer: 1,
              why: [
                "RTO bounds downtime, not data loss.",
                "Data loss measured in minutes of recent data is exactly the RPO.",
                "An SLA is an uptime promise, not a data-loss bound.",
                "An SLI is a live measurement, not a recovery target."
              ] } },

          { read: "The numbers drive the design. A tight **RPO** (little data loss allowed) means backing up often, or continuously replicating. A tight **RTO** (little downtime allowed) means a fast, rehearsed restore — maybe a warm standby ready to take over.\n\nAnd the rule that catches teams out: **a backup you have never restored is a hope, not a plan.** Backups fail silently, restores hit surprises, and you do not want to discover that during the disaster. Practise the restore, and time it against your RTO.",
            ask: { type: "pick", transfer: true,
              q: "Why is an untested backup dangerous?",
              choices: ["It takes up storage that could be freed", "It may fail to restore, and you'd learn that mid-disaster", "It always makes the RPO longer than planned", "It slows down the running production database"],
              answer: 1,
              why: [
                "Storage cost is trivial next to the real risk.",
                "Backups fail silently and restores surprise you — finding out during a disaster is the danger.",
                "An untested backup doesn't change the RPO by itself; the risk is that it won't restore.",
                "A stored backup doesn't slow the live database; the concern is whether it works."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "Which objective does hourly backups directly set — the one about data loss? Type it as three letters.",
              answer: "RPO",
              accept: ["rpo"],
              why: "Backup frequency sets the RPO: with hourly backups you can lose up to an hour of data. RTO is about how fast you restore." } },

          { ask: { type: "explain",
              q: "What do RPO and RTO each measure, and why does an untested backup undermine both?",
              model: "RPO is how much data you can afford to lose, set by how recent your last good backup is; RTO is how long you can afford to be down while you restore. An untested backup undermines both because if it silently fails or the restore hits problems, you lose more data than your RPO allowed and stay down longer than your RTO — and you find out during the disaster. So you practise and time the restore.",
              rubric: ["RPO = tolerable data loss (backup age)", "RTO = tolerable downtime (time to restore)", "Says an untested backup risks missing both because it may not restore as expected"] } }
        ]
      },

      {
        id: "cloud-quiz-7",
        title: "Unit 7 quiz: Reliability",
        kind: "quiz", xp: 10,
        brief: "SLIs/SLOs/SLAs, error budgets, graceful degradation, and RPO vs RTO. 80% to pass.",
        questions: [
          { q: "What is an error budget?",
            choices: ["The money set aside to pay SLA refunds", "The allowed unreliability below the SLO over a window", "The count of bugs still open in the tracker", "The time a deploy takes from start to finish"],
            answer: 1, explain: "The gap below your SLO (and 100%) over the window is the downtime you're allowed to spend on deploys, risk and incidents." },
          { q: "A 99.9% availability SLO over 30 days allows roughly how much downtime?",
            choices: ["About 43 minutes", "About 7 hours", "Exactly zero", "About 3 days"],
            answer: 0, explain: "0.1% of 43,200 minutes in 30 days is 43.2 minutes — the month's error budget." },
          { q: "Why is a 100% availability SLO a poor target?",
            choices: ["It is impossible to measure an SLI that high", "It leaves no error budget for deploys, risk or failure", "It automatically triggers SLA penalties each month", "It forces the team to use a canary deployment"],
            answer: 1, explain: "Any deploy or experiment carries risk; a 100% target has zero budget to absorb it, so it's broken from the start." },
          { q: "A product page's recommendations service fails. What's the graceful response?",
            choices: ["Return an error for the entire product page", "Show the product and drop the recommendations", "Retry the service until the page can load", "Take the whole site down until it recovers"],
            answer: 1, explain: "Graceful degradation keeps the core working and sheds only the broken part — hide recommendations, keep the page." },
          { q: "\"We can be down at most 15 minutes\" describes which objective?",
            choices: ["RPO, the data-loss bound", "RTO, the downtime bound", "SLI, the live measurement", "The error budget for the year"],
            answer: 1, explain: "RTO (Recovery Time Objective) bounds downtime during recovery. RPO bounds how much data you can lose." },
          { q: "Why must you actually test a backup?",
            choices: ["To reduce how much disk space it uses", "Because an untested backup may fail to restore when you need it", "To make the RTO number smaller on paper", "Because backups expire if never opened"],
            answer: 1, explain: "Backups fail silently and restores surprise you; an untested backup is a hope, not a plan — practise and time it." }
        ]
      }
    ]
  });
})();
