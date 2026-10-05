/* On-Call & Incidents — Unit 1: The first five minutes */
(function () {
  window.CODELAB.addUnit("oncall", {
    id: "oncall-u1",
    title: "The first five minutes",
    icon: "🚨",
    blurb: "You're paged. Before any command: how bad is it, who's doing what, and what changed? Then the habit the whole course drills: stop the damage first, understand it second.",
    cheat: [
      { h: "The first five minutes", lang: "text", code:
"1 acknowledge the page   so nobody else wonders\n" +
"2 how bad?               pick a severity; unsure → the higher one\n" +
"3 who's doing what?      one commander, hands on keyboard, comms\n" +
"4 what changed?          deploys, config, traffic, dependencies\n" +
"5 stop the bleeding      roll back, drain, restart, add capacity",
        note: "Root cause comes later. A rollback that restores service in two minutes beats a perfect diagnosis in forty." },
      { h: "Severity (PagerDuty's public scale)", lang: "text", code:
"SEV-1  critical, many customers affected, public notice\n" +
"SEV-2  major feature broken for many customers\n" +
"SEV-3  degraded, or a workaround exists\n" +
"SEV-4+ minor, handle in normal hours",
        note: "Lower number = more urgent. Anything above SEV-3 is a major incident. If you can't decide between two, take the higher one and argue about it in the postmortem." },
      { h: "Roles (Google's incident model)", lang: "text", code:
"Incident Commander  coordinates, decides, delegates\n" +
"Operations lead     hands on the system\n" +
"Communications lead status updates, stakeholders\n" +
"Planning            long incidents: handoffs, follow-ups",
        note: "In a small incident one person holds several roles. What matters is that everyone knows who decides." },
      { h: "Generic mitigations", lang: "text", code:
"roll back       the last change, before you know it's the cause\n" +
"drain           send traffic away from the broken part\n" +
"restart         only if the failure isn't deterministic\n" +
"add capacity    when it's load, not a bug",
        note: "Google SRE keeps a short, fixed list like this so responders can act without first understanding the bug. About 70% of outages follow a change to a live system, which is why rollback comes first." }
    ],
    lessons: [

      {
        id: "oncall-u1-1",
        title: "Stop the bleeding first",
        kind: "concept", xp: 15, mins: 10,
        screens: [
          { read: "It's 14:05. You're paged: checkout is failing for about a third of customers. A deploy went out at 13:58.\n\nThe instinct is to open the code and find the bug. Google's SRE teams train the opposite: **first stop the impact, then find the cause.** Their incident guide puts it bluntly: you aren't helping your users if the system dies while you're root-causing.",
            ask: { type: "pick", transfer: true,
              q: "What's the first thing to do?",
              choices: [
                "Read the diff from 13:58 until you understand exactly which line is wrong",
                "Roll back the 13:58 deploy, then investigate with checkout working",
                "Restart the checkout servers and hope it clears up",
                "Write a postmortem while the details are fresh"
              ],
              answer: 1,
              why: [
                "You might find it in five minutes, or forty. Customers fail at checkout the whole time.",
                "Right. The deploy is the most likely cause, rolling back is fast and reversible, and you can study the bug once nobody is losing money.",
                "Restarting only helps when the failure isn't deterministic. A bad deploy fails the same way after a restart.",
                "Postmortems come after the incident is over. Right now customers are failing."
              ] } },
          { read: "Why does rollback come first? Google's SRE book reports that **roughly 70% of outages are due to changes in a live system**: a deploy, a config push, a flag flip. The question that finds most causes is the simplest one: **what changed?**\n\nRollback is one of a small, fixed set of **generic mitigations**: things you can do without understanding the bug.\n\n- **roll back** the last change\n- **drain** traffic away from the broken part\n- **restart**, only if the failure isn't deterministic\n- **add capacity**, when the problem is load",
            ask: { type: "pick", transfer: true,
              q: "Error rates jumped at 09:12. Nothing was deployed today, but a feature flag was turned on at 09:11. What's the best first mitigation?",
              choices: [
                "Add more servers, in case it's load",
                "Turn the flag back off",
                "Roll back yesterday's deploy",
                "Wait to see whether it recovers on its own"
              ],
              answer: 1,
              why: [
                "Nothing points at load. The change that lines up with the errors is the flag.",
                "Right. A flag flip is a change to a live system, and turning it off is the rollback.",
                "Yesterday's deploy ran fine until 09:12. The thing that changed at 09:11 is the flag.",
                "Waiting is a decision too, and it leaves customers failing."
              ] } },
          { read: "When does **restart** help? Only when something in the running process is the problem: a leak that built up, a stuck connection, a cache gone stale. Restarting resets that.\n\nIt doesn't help when the failure is **deterministic**: a bad deploy, a missing setting, a broken dependency. Those fail the same way the moment the process starts again, and a container stuck in a restart loop is telling you exactly that.",
            ask: { type: "pick",
              q: "A container exits with \"Missing required env var PAYMENTS_URL\" and has restarted 40 times. Will restarting it again help?",
              choices: [
                "Yes: one more restart might pick the variable up",
                "No: it fails the same way every start; something has to change first",
                "Yes, but only after the host machine underneath it has been rebooted too",
                "No, because containers can only be restarted 40 times"
              ],
              answer: 1,
              why: [
                "Nothing about the environment changes between restarts. It will fail identically.",
                "Right. Forty identical failures is the evidence. Roll back to an image that doesn't need the variable, or supply it.",
                "The machine isn't the problem; the configuration is.",
                "There's no such limit. It will keep restarting and failing."
              ] } },
          { read: "Mitigating first doesn't mean skipping the cause. It means **ordering** the work:\n\n1. stop the damage (mitigate)\n2. confirm it stopped, **from the user's side**\n3. find the cause, calmly\n4. fix it properly (often \"fix forward\": a new deploy with the bug fixed)\n5. write it up\n\nThis course grades that order. In the labs, a checkpoint can tell whether service came back **before** you started changing things.",
            ask: { type: "order", transfer: true,
              q: "Put the response in order.",
              lines: ["Roll back the change", "Check the site works for users", "Find out why the change broke it", "Ship a fixed version", "Write the postmortem"],
              why: "Mitigate, verify, diagnose, fix, write up. Each step is easier because the one before it took the pressure off." } }
        ]
      },

      {
        id: "oncall-u1-2",
        title: "How bad, and who does what",
        kind: "concept", xp: 15, mins: 10,
        screens: [
          { read: "Every team sorts incidents by **severity**, so everyone reacts in proportion. PagerDuty publishes its scale:\n\n- **SEV-1**: critical, actively hurting a large number of customers; public notice\n- **SEV-2**: a major feature broken for many customers\n- **SEV-3**: degraded, or a workaround exists\n- **SEV-4 and below**: minor, normal working hours\n\nLower number, more urgent. And one rule matters more than the definitions: **if you're not sure, pick the higher one.** Arguing about severity during an incident wastes the time you need.",
            ask: { type: "pick", transfer: true,
              q: "Card payments fail for every customer, but PayPal still works. You can't decide between SEV-1 and SEV-2. What do you do?",
              choices: [
                "Call it SEV-2, since card payments still have a working PayPal fallback",
                "Call it SEV-1, and revisit it in the postmortem",
                "Hold a quick vote among whoever is online",
                "Leave it unset until you know the cause"
              ],
              answer: 1,
              why: [
                "Maybe it is a 2. But when you're unsure, under-calling it is the expensive mistake.",
                "Right. Treat it as the higher one now. Getting it wrong upward costs a few extra people; getting it wrong downward costs customers.",
                "A vote takes time you don't have, and doesn't make the answer better.",
                "Severity is how many people respond and how fast. You need it before you know the cause."
              ] } },
          { read: "Google's incident model (used, with small changes, by most large teams) gives everyone one job:\n\n- **Incident Commander (IC)**: coordinates, makes the calls, delegates. Doesn't type commands.\n- **Operations lead**: hands on the system, runs the mitigations.\n- **Communications lead**: status updates to the company and customers.\n- **Planning**, in long incidents: handoffs, follow-up tickets, tracking what was changed.\n\nIn a small incident one person can hold several roles. What matters is that **everyone knows who decides**.",
            ask: { type: "pick", transfer: true,
              q: "Five engineers join an incident call. Three start trying different fixes at once, and nobody knows who restarted what. What's missing?",
              choices: [
                "More engineers on the call, so every possible fix gets tried at once",
                "An Incident Commander who assigns the work and decides",
                "A faster way to restart servers",
                "A postmortem template"
              ],
              answer: 1,
              why: [
                "More people trying things at once makes it worse.",
                "Right. Without someone coordinating, changes collide and nobody can tell which one helped.",
                "Speed isn't the problem. Uncoordinated changes are.",
                "That's for after. Right now the response needs a lead."
              ] } },
          { read: "Being on-call is also a **load** to manage. Google's SRE book sets a target of at most **two distinct incidents per 12-hour shift**. Above that, nobody has time to follow up properly, so the same incidents keep coming back.\n\nAnd one incident is **one problem**, however many alerts it fires. Fifty alerts from one broken database is one incident, and fifty pages for it means the alerting needs fixing.",
            ask: { type: "predict", transfer: true,
              q: "In Google's SRE book, what's the target maximum number of distinct incidents per 12-hour on-call shift?",
              answer: "2", accept: ["two", "2 incidents"],
              why: "Two. It leaves time to handle each one properly, restore service, and write the postmortem." } },
          { ask: { type: "explain",
              q: "Your team's on-call engineer was paged 14 times last night, all by the same database running low on disk. What would you change, and why?",
              model: "Those 14 pages were one incident, so the alerting should group them into one, or page once and update. The disk problem itself needs a follow-up with an owner, like cleanup, a bigger volume or an alert earlier, at a point where it's still non-urgent, so it gets fixed in working hours instead of paging at night. Being paged 14 times for one problem also burns out the on-call engineer and teaches people to ignore pages.",
              rubric: ["Says it's one incident, not 14", "Fixes the alerting (group, or alert earlier)", "Fixes the cause with a follow-up that has an owner", "Mentions the cost to the person on call"] } }
        ]
      },

      {
        id: "oncall-u1-quiz",
        title: "Unit 1 quiz: The first five minutes",
        kind: "quiz", xp: 10,
        brief: "Mitigate first, what changed, severity, roles and on-call load. 80% to pass.",
        questions: [
          { q: "A deploy went out ten minutes before errors started. What's the first move?",
            choices: ["Read the whole diff until you find the bug", "Roll the deploy back, then investigate", "Restart every server", "Open a ticket for the morning"],
            answer: 1, explain: "Rollback is fast and reversible. Investigate once customers aren't failing." },
          { q: "Roughly what share of outages does Google's SRE book attribute to changes in a live system?",
            choices: ["About 10%", "About 30%", "About 50%", "About 70%"],
            answer: 3, explain: "About 70%, which is why \"what changed?\" is the first question." },
          { q: "When does restarting a service actually help?",
            choices: ["When the process itself got into a bad state, like a leak or a stuck connection", "Every time, because restarting clears out whatever went wrong, whatever the cause", "When a deploy introduced a bug", "When a required setting is missing"],
            answer: 0, explain: "A restart resets the process. A bad deploy or missing setting fails again the moment it starts." },
          { q: "You can't decide whether an incident is SEV-2 or SEV-3. Which do you pick?",
            choices: ["SEV-3, to avoid alarming people needlessly", "Whichever the first responder prefers", "SEV-2", "Neither, until the cause is known"],
            answer: 2, explain: "When unsure, take the higher one. You can lower it later; customers can't get the lost time back." },
          { q: "What does the Incident Commander do?",
            choices: ["Types the commands, since they're usually the most senior engineer there", "Coordinates the response and makes the decisions", "Writes the status page updates", "Reviews the code afterwards"],
            answer: 1, explain: "The IC coordinates and decides. The operations lead is the one with hands on the system." },
          { q: "One failing database fires 50 alerts. How many incidents is that?",
            choices: ["50", "One per service that depends on it", "None until a customer reports it", "One"],
            answer: 3, explain: "One problem is one incident. Fifty pages for it means the alerting needs fixing." }
        ]
      }
    ]
  });
})();
