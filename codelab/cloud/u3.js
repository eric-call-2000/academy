/* Cloud Platforms & Deployment — Unit 3: Serverless vs always-on */
(function () {
  function R(strings) { return String.raw.apply(null, arguments).replace(/^\n/, ""); }

  var COST_STARTER = R`
// Two ways to pay for compute:
//   always-on   a server you rent by the month, flat, whatever the traffic
//   serverless  a function you pay for per request, nothing when idle
//
// A plan is { type: "always-on", monthly } or { type: "serverless", perRequest }.
//
// monthlyCost(plan, requests): the month's bill for that plan at that traffic.
//   always-on  -> the flat monthly rate, no matter how many requests
//   serverless -> requests * perRequest
function monthlyCost(plan, requests) {
  // First draft: always multiplies by requests — wrong for always-on.
  return requests * (plan.perRequest || plan.monthly);
}

// cheaper(a, b, requests): which plan's type is cheaper at that traffic,
// or "equal" at the break-even point.
function cheaper(a, b, requests) {
  return a.type; // first draft: always picks a
}

console.log(monthlyCost({ type: "always-on", monthly: 30 }, 1000000));
`;

  var COST_SOLUTION = R`
function monthlyCost(plan, requests) {
  if (plan.type === "always-on") return plan.monthly;
  return requests * plan.perRequest;
}

function cheaper(a, b, requests) {
  const ca = monthlyCost(a, requests);
  const cb = monthlyCost(b, requests);
  if (ca < cb) return a.type;
  if (cb < ca) return b.type;
  return "equal";
}

console.log(monthlyCost({ type: "always-on", monthly: 30 }, 1000000));
`;

  window.CODELAB.addUnit("cloud", {
    id: "cloud-u3",
    title: "Serverless vs always-on",
    icon: "💸",
    blurb: "Pay per hour or pay per request. What serverless actually is, the cold start it charges you in latency, and the arithmetic that decides where per-request billing stops being the cheaper deal.",
    cheat: [
      { h: "Two ways to pay", lang: "text", code:
"always-on   rent a box by the month; flat cost;\n" +
"            always warm, always billing (even idle)\n" +
"serverless  a function billed per request;\n" +
"            scales to zero -> $0 when nobody calls it",
        note: "Serverless bills only for what runs and disappears when idle. Always-on bills the same whether it serves a million requests or none." },
      { h: "The cold start", lang: "text", code:
"idle serverless function -> first call must BOOT it\n" +
"  cold start = extra latency on that first request\n" +
"  then it's warm for a while, fast, until it idles again",
        note: "Scaling to zero has a price: the first request after idle waits for the function to start. Same shape as Unit 3 of How the Web Works — the first request pays a setup cost the rest don't." },
      { h: "The break-even", lang: "text", code:
"always-on  = flat $M / month\n" +
"serverless = requests * perRequest\n" +
"cheaper when requests * perRequest < M\n" +
"past the break-even, per-request billing costs MORE",
        note: "Serverless wins at low or spiky volume, where the box would sit idle. Steady high volume crosses the break-even and the flat box is cheaper — count it, don't guess." }
    ],
    lessons: [

      {
        id: "cloud-u3-1",
        title: "Two ways to pay for compute",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "There are two shapes of compute bill. An **always-on** server is a box you rent by the month: it's always running, always ready — and always billing, whether it served a million requests or sat idle all night. A **serverless** function is billed **per request**: the provider runs your function only when a request arrives, and charges for just that run. When nobody's calling, it **scales to zero** and costs nothing.\n\nThe difference isn't speed; it's what you pay for. Always-on: capacity. Serverless: use.",
            ask: { type: "pick",
              q: "What does \"scales to zero\" mean for a serverless function?",
              choices: ["It gradually runs slower and slower as the incoming traffic to it steadily drops down toward zero over time", "When no requests arrive, no instance runs and it costs nothing", "It can handle at most zero requests at once", "It deletes your code after a period of no use"],
              answer: 1,
              why: [
                "It's about cost and running instances, not a speed curve.",
                "No traffic means no running instance and no charge — the defining serverless property.",
                "It scales up to handle many requests; \"to zero\" is the idle floor.",
                "Your code stays deployed; only the running instance goes away when idle."
              ] } },

          { read: "This maps onto the models from Unit 1. Always-on is what you run on IaaS or PaaS — a process that stays up. Serverless is the far end of the responsibility line: you hand over a single function and the provider decides when to run it, how many copies to spin up for a burst, and when to shut them all down.\n\nSo the choice is partly operational (how much you manage) and partly economic (what your traffic costs) — and the economics is the part people get wrong.",
            ask: { type: "pick", transfer: true,
              q: "An internal admin tool is used a few times a day by three people. Which billing shape likely costs less?",
              choices: ["Always-on, because it's always ready", "Serverless, because it's idle almost all the time and scales to zero when unused", "The two options end up costing almost exactly the same amount regardless of how much or how little it gets used", "Neither can run a tool used that rarely"],
              answer: 1,
              why: [
                "Always ready also means always billing, for a tool used minutes a day.",
                "A near-idle tool pays almost nothing on per-request billing and $0 while nobody uses it.",
                "Always-on bills flat regardless; serverless tracks the tiny usage — they differ a lot here.",
                "Serverless is ideal for exactly this rare, bursty usage."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "A serverless function receives zero requests for an entire month. Roughly what does its compute cost for that month? Type a number.",
              answer: "0",
              why: "Serverless scales to zero: no requests means no running instance and no compute charge. An always-on box would still bill its flat monthly rate.",
              run: true,
              check: "console.log(0);" } },

          { ask: { type: "explain",
              q: "What's the essential difference between always-on and serverless billing?",
              model: "An always-on server is rented by the month and bills a flat rate whether it's busy or idle — you pay for capacity. A serverless function is billed per request and scales to zero when idle, so you pay only for what actually runs. The choice is both operational (serverless hands more to the provider) and economic (flat cost vs cost that tracks traffic).",
              rubric: ["Says always-on is a flat cost for capacity, billing even when idle", "Says serverless bills per request and scales to zero when idle", "Frames it as paying for capacity vs paying for use"] } }
        ]
      },

      {
        id: "cloud-u3-2",
        title: "The cold start",
        kind: "concept", xp: 15, mins: 11,
        screens: [
          { read: "Scaling to zero has a cost, and it's paid in **latency**. When a serverless function has been idle and a request arrives, there's no running instance — so the provider has to **start one**: load your code, boot the runtime, then handle the request. That startup delay on the first request is a **cold start**. Once warm, the instance stays up briefly and later requests are fast — until it idles again and goes cold.\n\nYou've seen this shape before. In How the Web Works, the first request to a server paid for DNS, TCP and TLS while later ones reused the connection. A cold start is the same idea one layer up: the first request pays a setup cost the warm ones don't.",
            ask: { type: "pick",
              q: "Why does the first request to an idle serverless function feel slower than the ones right after it?",
              choices: ["The underlying network connection is simply always slower for the very first request than for any of the ones that come after it", "It pays a cold start — the instance must boot before it can respond; later requests hit a warm instance", "The function's code is larger on the first call", "Serverless is always slower than always-on for every request"],
              answer: 1,
              why: [
                "The network isn't the cause; the missing running instance is.",
                "With nothing running, the first request waits for the function to start, then subsequent requests reuse the warm instance.",
                "The code is the same size every call; what differs is whether an instance is already running.",
                "Once warm, serverless requests are fast — the penalty is specifically the cold first one."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "For which workload is cold-start latency the biggest concern?",
              choices: ["A nightly batch job where a few seconds of startup don't matter", "A user-facing checkout endpoint that's often idle between customers", "A function under constant heavy traffic, so it's always warm", "A logging function nobody waits on"],
              answer: 1,
              why: [
                "A batch job tolerates startup delay — nobody's waiting on it.",
                "An idle-then-hit user-facing endpoint makes real users wait for the cold start, exactly where latency hurts.",
                "Constant traffic keeps it warm, so cold starts rarely happen.",
                "Nothing waits on a fire-and-forget logger, so its startup delay is invisible."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "How is a serverless cold start like the first request in How the Web Works?",
              choices: ["Both are caused by DNS being slow", "Both pay a one-time setup cost that later, reused/warm requests avoid", "Both make every request equally slow", "Neither has anything to do with latency"],
              answer: 1,
              why: [
                "DNS is one part of the web's cold path, not the general principle.",
                "The first request pays setup (a boot, or DNS+TCP+TLS) and warm/reused ones skip it — the same shape at different layers.",
                "The point is that only the first request is slow; the rest are fast.",
                "Both are entirely about latency on the first request."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "One trick to avoid cold starts is to send the function an occasional dummy request so an instance stays running. What is that keeping the instance — cold, or warm? Type one word.",
              answer: "warm",
              why: "Periodic pings keep an instance running (warm) so real requests skip the boot. It also means you're no longer fully scaled to zero — a cost trade-off." } }
        ]
      },

      {
        id: "cloud-u3-3",
        title: "The break-even: when serverless stops being cheaper",
        kind: "js", chip: "CLOUD", xp: 15, mins: 14,
        brief: "Serverless is cheap when traffic is low, because you pay per request and nothing when idle. But per-request billing keeps climbing with traffic, while an always-on box is flat — so at some volume the box wins. Finding that crossover is arithmetic, not opinion.\n\nA plan is `{ type: \"always-on\", monthly }` or `{ type: \"serverless\", perRequest }`.\n\nImplement:\n- **`monthlyCost(plan, requests)`** — the always-on plan bills its flat `monthly` **whatever** the request count; the serverless plan bills `requests * perRequest`.\n- **`cheaper(a, b, requests)`** — the `type` of whichever plan costs less at that traffic, or `\"equal\"` at the exact break-even.",
        steps: [
          { text: "always-on is flat: the request count doesn't change the bill.",
            test: R`
var ao = { type: "always-on", monthly: 30 };
T.eq(monthlyCost(ao, 0), 30, "Idle all month still bills the flat rate");
T.eq(monthlyCost(ao, 5000000), 30, "Five million requests: still the same flat rate");
` },
          { text: "serverless scales with requests, and to zero when idle.",
            test: R`
var sl = { type: "serverless", perRequest: 0.0002 };
T.eq(monthlyCost(sl, 0), 0, "No requests, no charge");
T.eq(monthlyCost(sl, 100000), 20, "100k requests at $0.0002 = $20");
T.eq(monthlyCost(sl, 500000), 100, "500k requests = $100");
` },
          { text: "cheaper picks the lower bill, and reports the break-even as a tie.",
            test: R`
var ao = { type: "always-on", monthly: 30 };
var sl = { type: "serverless", perRequest: 0.0002 };
T.eq(cheaper(ao, sl, 100000), "serverless", "At low traffic, per-request billing wins");
T.eq(cheaper(ao, sl, 500000), "always-on", "Past the break-even, the flat box wins");
T.eq(cheaper(ao, sl, 150000), "equal", "150000 * 0.0002 = 30 = the flat rate: the break-even");
` }
        ],
        files: [{ name: "script.js", content: COST_STARTER }],
        solution: { "script.js": COST_SOLUTION },
        hints: [
          "monthlyCost: branch on plan.type. always-on returns plan.monthly and ignores requests; serverless returns requests * plan.perRequest.",
          "cheaper: compute both costs, compare, and return the winner's .type.",
          "Handle the tie: when the two costs are equal, return \"equal\" — that's the break-even point."
        ]
      },

      {
        id: "cloud-u3-4",
        title: "Choosing: traffic shape decides",
        kind: "concept", xp: 15, mins: 12,
        screens: [
          { read: "Put the pieces together and the choice comes down to **traffic shape**, not fashion.\n\n- **Low or spiky, often idle** → serverless. You pay near nothing at rest, and it absorbs a burst by spinning up copies. An always-on box would sit idle, billing.\n- **Steady, high volume** → always-on. Past the break-even, flat beats per-request, and a constantly-busy function is warm anyway, so cold starts don't bite.\n- **Latency-critical and often idle** → the awkward case: serverless is cheap but cold starts hurt real users; you either keep it warm (giving up some of the savings) or pay for always-on.",
            ask: { type: "pick",
              q: "A brand-new side project has almost no traffic yet, with occasional bursts when it's shared. Which fits best, and why?",
              choices: ["Always-on, because it guarantees the lowest possible bill", "Serverless, because it's near-idle (so cheap) and absorbs the occasional burst", "Always-on, because serverless can't handle any bursts", "Neither works for a low-traffic project"],
              answer: 1,
              why: [
                "An always-on box billing 24/7 for a near-idle project is the expensive choice here.",
                "Near-idle means serverless costs almost nothing, and it scales up to absorb the shared-link bursts.",
                "Serverless is good at bursts — it spins up copies on demand.",
                "Low traffic is precisely where serverless shines."
              ] } },

          { ask: { type: "pick", transfer: true,
              q: "A popular API serves steady, heavy traffic all day, every day. Cost aside, why does always-on also dodge a serverless problem here?",
              choices: ["It has no cold starts, since constant traffic keeps instances warm", "It uses less memory per request than serverless does", "It never needs any configuration at all", "It automatically writes its own tests"],
              answer: 0,
              why: [
                "Constant traffic keeps a serverless function warm too, but an always-on box is warm by definition — no cold-start penalty ever.",
                "Memory per request isn't the distinction being drawn.",
                "It still needs configuration like anything else.",
                "The hosting model has nothing to do with test generation."
              ] } },

          { ask: { type: "predict", transfer: true,
              q: "Always-on is $30/month; serverless is $0.0002/request. At 300,000 requests a month, which is cheaper? Type: serverless, or always-on.",
              answer: "always-on",
              accept: ["always on", "alwayson"],
              why: "300000 * 0.0002 = $60, above the flat $30 — past the break-even (150k), so the always-on box is cheaper.",
              run: true,
              check: "console.log(300000 * 0.0002 > 30 ? 'always-on' : 'serverless');" } },

          { ask: { type: "explain",
              q: "How would you decide between serverless and always-on for a given service?",
              model: "Look at the traffic shape. If it's low or spiky and often idle, serverless is cheaper because it scales to zero and absorbs bursts, while an always-on box would bill for idle time. If it's steady and high-volume, per-request billing climbs past the flat rate's break-even, so always-on is cheaper — and constant traffic keeps it warm, so cold starts don't matter. The awkward case is latency-critical but idle work, where serverless is cheap but cold starts hurt, so you keep it warm or pay for always-on.",
              rubric: ["Says low/spiky/idle traffic favours serverless (scale to zero, absorbs bursts)", "Says steady high volume favours always-on (past the break-even; stays warm)", "Notes the trade for latency-sensitive idle workloads (cold starts vs keeping warm)"] } }
        ]
      },

      {
        id: "cloud-quiz-3",
        title: "Unit 3 quiz: Serverless vs always-on",
        kind: "quiz", xp: 10,
        brief: "Per-request vs flat billing, scaling to zero, cold starts, and the break-even. 80% to pass.",
        questions: [
          { q: "What does an always-on server cost in a month where it serves no requests at all?",
            choices: ["Nothing, because it was idle the whole time", "Its full flat monthly rate — capacity is billed whether used or not", "Only a tiny per-request fee", "It depends on how many other servers you rent"],
            answer: 1, explain: "Always-on bills for capacity: the flat rate applies whether it served a million requests or none. Serverless is the one that scales to zero." },
          { q: "What is a cold start?",
            choices: ["A server that crashed and won't restart at all", "The startup delay when an idle serverless function must boot an instance before responding", "The very first deploy of a new application to production", "A request that fails because the network was cold"],
            answer: 1, explain: "Scaling to zero means no instance is running when idle, so the first request waits for one to start. Later, warm requests skip it." },
          { q: "Always-on is $40/month; serverless is $0.0001/request. At what monthly request count do they cost the same?",
            choices: ["4,000", "400,000", "40,000,000", "They can never be equal"],
            answer: 1, explain: "Break-even is $40 / $0.0001 = 400,000 requests. Below that serverless is cheaper; above it, the flat box wins." },
          { q: "Which workload is the best fit for serverless?",
            choices: ["A steady, high-traffic API busy every second of the day", "An internal tool used a few times a day, idle most of the time", "A service where cold-start latency would be unacceptable and traffic never stops", "A batch job that must run on dedicated hardware you own"],
            answer: 1, explain: "Low, spiky, often-idle usage is where scaling to zero and per-request billing win big." },
          { q: "Why do cold starts rarely matter for a constantly busy function?",
            choices: ["Busy functions are given more memory by the provider automatically", "Constant traffic keeps an instance warm, so requests seldom hit a cold boot", "Cold starts only ever happen on always-on servers instead", "The provider disables cold starts once you pay enough each month"],
            answer: 1, explain: "A function that's always being called stays warm, so the boot penalty almost never applies. Cold starts bite idle-then-hit workloads." },
          { q: "Past the break-even point, which is cheaper and why?",
            choices: ["Serverless, because per-request billing always stays low", "Always-on, because its flat rate stops rising while per-request cost keeps climbing", "They stay equal forever after the break-even is reached", "Serverless, because it never charges for high request volumes"],
            answer: 1, explain: "Serverless cost rises with every request; the always-on rate is flat, so beyond the crossover the box is cheaper." }
        ]
      }
    ]
  });
})();
