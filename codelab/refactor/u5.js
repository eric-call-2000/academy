/* Refactoring Legacy Code — Unit 5: Bigger than a function */
(function () {
  window.CODELAB.addUnit("refactor", {
    id: "refactor-u5",
    title: "Bigger than a function",
    icon: "🌳",
    blurb: "Some changes don't fit in one sitting: a module everything depends on, or a whole system to replace. The Mikado method for changes that keep pulling more changes behind them, the strangler fig for replacing a system piece by piece, and why the big rewrite so often fails.",
    cheat: [
      { h: "The Mikado method (Ellnestam & Brolund)", lang: "text", code:
"1 write the goal down\n" +
"2 try it, the naive way\n" +
"3 broken? note what it needs first, then REVERT\n" +
"4 repeat on each prerequisite, leaves first\n" +
"5 the goal becomes a small change at the end",
        note: "The graph of prerequisites is the plan. Reverting keeps the code working the whole time." },
      { h: "The strangler fig (Martin Fowler)", lang: "text", code:
"put a front door in front of the old system\n" +
"move one capability at a time behind it\n" +
"route that capability to the new code\n" +
"when nothing reaches the old system, switch it off",
        note: "Named after a vine that grows around a tree until it stands on its own. Every step is shippable and reversible." },
      { h: "Rewrite vs refactor", lang: "text", code:
"rewrite      everything at once, old behavior rediscovered the hard way\n" +
"refactor /   one piece at a time, each piece tested,\n" +
"strangle     each step reversible",
        note: "A rewrite has to rediscover every behavior nobody wrote down. Incremental replacement keeps the old system as the reference until the end." }
    ],
    lessons: [

      {
        id: "refactor-u5-1",
        title: "The Mikado method",
        kind: "concept", xp: 15, mins: 9,
        screens: [
          { read: "You set out to rename one module. Forty files fail to compile, three tests break, and two hours later you're deep in changes you don't remember starting.\n\nOla Ellnestam and Daniel Brolund's **Mikado method** is the discipline for this:\n\n1. write the goal down\n2. try it the naive way\n3. if things break, **note what has to happen first, then revert**\n4. repeat on each prerequisite\n\nThe notes form a graph. You work it from the leaves up, so the code is never broken for long.",
            ask: { type: "pick", transfer: true,
              q: "You try the change, and it breaks twelve places. In the Mikado method, what do you do next?",
              choices: [
                "Fix all twelve places now, while you can still see exactly what broke",
                "Note what has to change first, revert your change, and start on one of those",
                "Commit the broken state so you don't lose the work",
                "Give up on the goal"
              ],
              answer: 1,
              why: [
                "That's how a one-hour change becomes a three-day branch nobody can review.",
                "Right. The revert keeps the code working; the notes become the plan.",
                "A broken commit blocks everyone else and can't be shipped or reviewed.",
                "The goal is still right. You've just learned what it depends on."
              ] } },
          { read: "Reverting feels wasteful. It isn't: the attempt **was** the work. It found the prerequisites, which go on the graph.\n\nA graph for \"make `Order` immutable\" might be:\n\n- goal: Order is immutable\n  - needs: checkout stops writing `order.total` directly\n    - needs: a `withTotal()` method that returns a new Order\n  - needs: the CSV importer stops patching orders\n\nEach leaf is small, testable and shippable on its own.",
            ask: { type: "order", transfer: true,
              q: "Work this Mikado graph in the right order.",
              lines: ["Add withTotal(), returning a new Order", "Make checkout use withTotal() instead of writing order.total", "Make Order immutable"],
              why: "Leaves first. Each step keeps the code working, and the goal is the last, smallest change." } },
          { read: "Each node on the graph can be its own small pull request, reviewed and merged while the rest is still in progress. That's the opposite of a long-lived branch, which drifts further from main every day and ends in a merge nobody can review.",
            ask: { type: "pick",
              q: "Why does the Mikado method avoid a long-lived branch?",
              choices: [
                "Because branches are slow to create in most version control tools",
                "Each prerequisite merges on its own, so nothing drifts far from main",
                "Because it requires that all the work happens directly on main without review",
                "It doesn't: everything goes on one branch until the end"
              ],
              answer: 1,
              why: [
                "Branches are cheap. The cost is how far they drift.",
                "Right. Small merges stay reviewable and keep everyone close to the same code.",
                "Each step is still reviewed. It's just small.",
                "That's the approach it's designed to replace."
              ] } }
        ]
      },

      {
        id: "refactor-u5-2",
        title: "The strangler fig",
        kind: "concept", xp: 15, mins: 9,
        screens: [
          { read: "Sometimes the thing to replace isn't a function or a module, it's a **system**: the old billing service, the checkout written ten years ago.\n\nThe tempting plan is a **rewrite**: build the new one beside it, then switch over. It goes wrong in a predictable way: the old system's behavior was never written down, so the new one rediscovers each rule as a bug report, and the switch-over date keeps moving.",
            ask: { type: "pick", transfer: true,
              q: "Why do big rewrites so often run late or fail?",
              choices: [
                "Because the new programming language or framework always turns out slower",
                "The old system's undocumented behavior has to be rediscovered, one bug at a time",
                "Because rewrites are always done by less experienced teams",
                "Because version control can't handle large changes"
              ],
              answer: 1,
              why: [
                "Performance can matter, but it isn't the usual reason.",
                "Right. Every rule nobody wrote down becomes a surprise in production.",
                "Experienced teams hit the same problem; it's in the old system, not the team.",
                "Version control handles it fine. The problem is the behavior nobody knows about."
              ] } },
          { read: "Martin Fowler's alternative, named in 2004 after a vine that grows around a tree until it stands on its own, is the **strangler fig**:\n\n1. put a front door (a proxy, a router) in front of the old system\n2. build **one** capability in the new system\n3. route just that capability to it\n4. repeat, until nothing reaches the old system\n5. switch the old one off\n\nEvery step ships, and every step can be routed back if it goes wrong.",
            ask: { type: "order", transfer: true,
              q: "Put the strangler fig steps in order.",
              lines: ["Put a router in front of the old billing system", "Build invoices in the new service", "Send invoice requests to the new service", "Move the next capability, until nothing reaches the old system", "Switch the old system off"],
              why: "Front door first, then one capability at a time, and the old system goes last." } },
          { read: "The old system keeps one more job during a strangler migration: it's the **reference**. You can send the same request to both and compare answers, the golden master idea from Unit 2 at system scale, before trusting the new one with real traffic.",
            ask: { type: "pick",
              q: "Invoices have moved to the new service, and one customer's invoice comes out different. What does the strangler approach let you do?",
              choices: [
                "Nothing until the whole migration is finished and fully tested",
                "Route invoices back to the old system while you find the difference",
                "Delete the old system so the two can't disagree",
                "Ask the customer which number they prefer"
              ],
              answer: 1,
              why: [
                "Waiting for the end is the rewrite's problem. Here each step can be undone on its own.",
                "Right. The router makes every step reversible, and the old system is still there as the reference.",
                "Then you've lost the one thing that shows what the right answer was.",
                "The old system is the reference for what customers have always been charged."
              ] } }
        ]
      },

      {
        id: "refactor-u5-quiz",
        title: "Unit 5 quiz: Bigger than a function",
        kind: "quiz", xp: 10,
        brief: "The Mikado method, the strangler fig, and rewrites. 80% to pass.",
        questions: [
          { q: "In the Mikado method, what do you do after a naive attempt breaks things?",
            choices: ["Fix everything it broke", "Commit and push the broken state so the work isn't lost", "Start a rewrite", "Note the prerequisites and revert"],
            answer: 3, explain: "The attempt finds what's needed first; reverting keeps the code working." },
          { q: "In which order do you work a Mikado graph?",
            choices: ["Leaves first, goal last", "The goal first, since it's the reason for the work", "Random order", "Alphabetically"],
            answer: 0, explain: "Each prerequisite is small and shippable; the goal ends up the last, small change." },
          { q: "What's the strangler fig?",
            choices: ["Deleting the legacy code in one big change and replacing it all at once", "A testing framework", "Replacing a system one capability at a time behind a front door", "A way to merge branches"],
            answer: 2, explain: "Martin Fowler's pattern: route capabilities to the new system one by one until the old one can be switched off." },
          { q: "What makes each strangler step safe?",
            choices: ["Each step is always small enough to rewrite from scratch in a day", "Routing can send traffic back to the old system", "It skips testing", "It happens at night"],
            answer: 1, explain: "The front door makes every step reversible." },
          { q: "What's the classic way a big rewrite goes wrong?",
            choices: ["The new code ends up far too well tested, which slows the team down", "It finishes too early", "It uses too few servers", "Undocumented behavior of the old system is rediscovered as bugs"],
            answer: 3, explain: "Behavior nobody wrote down becomes surprises in production." }
        ]
      }
    ]
  });
})();
