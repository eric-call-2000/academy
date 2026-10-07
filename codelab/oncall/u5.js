/* On-Call & Incidents — Unit 5: Keeping people informed */
(function () {
  window.CODELAB.addUnit("oncall", {
    id: "oncall-u5",
    title: "Keeping people informed",
    icon: "📣",
    blurb: "An incident has an audience: support, leadership, customers, the next shift. Status updates on a cadence, what goes in one, handing over to someone fresh, and the commander who holds it all together.",
    cheat: [
      { h: "A status update", lang: "text", code:
"what's affected   checkout fails for most customers (since 13:58)\n" +
"what we're doing  rolled back the 13:58 release; confirming\n" +
"what to do        retry failed orders; no data lost\n" +
"next update       14:30, or sooner if it changes",
        note: "Impact first, in the reader's words. Always end with when they'll hear from you next." },
      { h: "Cadence", lang: "text", code:
"major incident   every 20–30 minutes, even with no news\n" +
"say when         the time of the next update, every time",
        note: "PagerDuty's public guidance. Regular updates stop people interrupting the responders to ask." },
      { h: "What stays out", lang: "text", code:
"guesses about the cause   \"we think it's the database\" (until confirmed)\n" +
"names and blame           \"Sam's deploy broke it\"\n" +
"promises                  \"fixed in 10 minutes\"",
        note: "Say what you know and what you're doing. A wrong guess in an update spreads faster than the correction." },
      { h: "A handoff", lang: "text", code:
"state now        what's broken, what's mitigated\n" +
"tried            and what each attempt showed\n" +
"in flight        anything still running or half-done\n" +
"next steps       and who's been told what",
        note: "Hand over in writing, before you're exhausted. A tired responder makes the incident longer." }
    ],
    lessons: [

      {
        id: "oncall-u5-1",
        title: "Status updates",
        kind: "concept", xp: 15, mins: 10,
        screens: [
          { read: "While you work, other people need to know what's going on: support answering customers, leadership deciding whether to say something publicly, other teams wondering if it's them.\n\nIf they don't hear from you, they'll interrupt you to ask. PagerDuty's public incident guide suggests updates every **20–30 minutes** in a major incident, **even when there's nothing new**, and always saying when the next one will come.",
            ask: { type: "pick", transfer: true,
              q: "You've been investigating for 25 minutes with no progress to report. Do you send an update?",
              choices: [
                "No: wait until there's real progress, so the update is actually worth reading",
                "Yes: say it's still being worked on, what's been ruled out, and when the next update is",
                "No: updates are the Incident Commander's job, never yours",
                "Yes, with your best guess at the cause, so people can see that you're making real progress"
              ],
              answer: 1,
              why: [
                "Silence reads as \"nobody is on it\", and people start interrupting you to ask.",
                "Right. A short \"still working, here's what we've ruled out, next update at 14:30\" keeps everyone informed and away from your keyboard.",
                "In a small incident you might be the commander. Someone has to send it.",
                "A guess that turns out wrong spreads faster than the correction. Say what you know."
              ] } },
          { read: "A good update answers four questions, in this order:\n\n1. **What's affected**, in the reader's words, not the system's (\"checkout fails\", not \"payments-svc 503s\")\n2. **What we're doing**\n3. **What they should do**, if anything (retry, a workaround, nothing)\n4. **When the next update is**\n\nWhat stays out: **guesses** about the cause, **names** of whoever made the change, and **promises** about when it'll be fixed.",
            ask: { type: "order", transfer: true,
              q: "Put the parts of a status update in order.",
              lines: ["Checkout is failing for most customers since 13:58.", "We've rolled back the release from 13:58 and are confirming it worked.", "Customers can retry orders that failed; nothing was charged.", "Next update at 14:30, or sooner if anything changes."],
              why: "Impact, action, what to do, next update. The reader learns whether it affects them before anything else." } },
          { read: "Compare two updates sent at 14:05:\n\n**A:** \"Sam's deploy broke the payments service, we think it's the DB connection pool. Should be fixed in 10 minutes.\"\n\n**B:** \"Checkout is failing for most customers since 13:58. We've rolled back the last release and are checking it worked. Next update 14:30.\"",
            ask: { type: "pick", transfer: true,
              q: "What's wrong with update A?",
              choices: [
                "It's far too short to be useful to anyone reading it, and leaves out the technical details",
                "It blames a person, guesses at the cause and promises a time",
                "It should have been sent in an email instead of the chat",
                "Nothing: it's more specific than B"
              ],
              answer: 1,
              why: [
                "Length isn't the problem. B is about as short.",
                "Right. Naming Sam invites blame, the guess may be wrong, and \"10 minutes\" becomes a broken promise if it isn't.",
                "The channel matters less than what's in it.",
                "It's more specific about things nobody knows yet, and less specific about what users are experiencing."
              ] } },
          { ask: { type: "explain",
              q: "It's 10:25. The shop went down at 10:12 because a new release crash-loops. You rolled back at 10:20 and the site is answering again. Write the status update for the company channel.",
              model: "The shop was down from 10:12 to 10:20 today: customers couldn't load the site or place orders. We rolled back the release that caused it, and the shop is working again; we're watching it closely. Customers who saw errors can simply try again. The fix for the release will ship later, separately. Next update at 10:55, or sooner if anything changes.",
              rubric: ["Says what users experienced, with times", "Says what was done (rolled back) and the current state", "Tells readers what to do, if anything", "Gives the time of the next update", "No blame, no guesses, no promised fix time"] } }
        ]
      },

      {
        id: "oncall-u5-2",
        title: "Handoffs and the commander",
        kind: "concept", xp: 15, mins: 9,
        screens: [
          { read: "The **Incident Commander** doesn't fix things. They:\n\n- say out loud who has which role\n- keep the timeline (or name a scribe)\n- decide: which mitigation, when to escalate, when it's over\n- make sure updates go out\n\nIn Google's model, everyone else on the incident works through the IC. That's what stops three people trying three fixes at once.",
            ask: { type: "pick", transfer: true,
              q: "You're the IC. An engineer says \"I'm going to try restarting the database.\" What do you do?",
              choices: [
                "Let them: anyone who has a good idea should just try it right away",
                "Ask what they expect it to show, and decide before anyone runs it",
                "Restart it yourself, so you know it's done properly",
                "Ignore it and keep writing the status update"
              ],
              answer: 1,
              why: [
                "An uncoordinated restart of a shared database can turn a partial outage into a total one.",
                "Right. Every change is a decision: what do we expect, what's the risk, does anything else need to stop first?",
                "The IC coordinates; hands-on work goes to the operations lead.",
                "Changes to shared systems are exactly what the IC must decide on."
              ] } },
          { read: "Long incidents need **handoffs**. Tired people make mistakes, and an incident that runs through the night needs a fresh responder.\n\nA handoff is written, not remembered:\n\n- **state now**: what's broken, what's mitigated\n- **tried**: what was attempted, and what each attempt showed\n- **in flight**: anything still running or half-done\n- **next steps**, and who has been told what\n\nNegative results count: \"restarting the cache didn't help\" saves the next person an hour.",
            ask: { type: "pick", transfer: true,
              q: "Which handoff note helps the next responder most?",
              choices: [
                "\"Still broken. Good luck, I've tried pretty much everything I could think of.\"",
                "\"Search is degraded since 02:10. Rolled back the 02:00 deploy, no change. Cache restart didn't help. Reindex is running and will finish around 06:30. Support was told at 05:00.\"",
                "\"See the chat log above: everything we tried tonight is in there, in order, from the first page at 02:10 onwards.\"",
                "\"Probably the database. Will look again in the morning.\""
              ],
              answer: 1,
              why: [
                "\"Everything\" means the next person has to repeat it all to find out what.",
                "Right. State, what was tried and what it showed, what's in flight, who knows what.",
                "Hours of chat isn't a handoff. The next person needs the summary.",
                "A guess and no record of what was tried."
              ] } },
          { read: "Finally, someone has to say **it's over**. The IC ends the incident when:\n\n- users are no longer affected, confirmed from their side\n- the mitigation is stable (not just holding for five minutes)\n- the follow-up work has owners: the proper fix, the postmortem\n\nThen one last update: what happened, that it's resolved, and that a postmortem will follow.",
            ask: { type: "pick",
              q: "The rollback worked two minutes ago and the error rate is back to normal. Is the incident over?",
              choices: [
                "Yes: the error rate is normal, so everyone can stand down straight away",
                "Not yet: confirm it stays stable, give the follow-ups owners, then send a resolution update",
                "No: incidents last until the root cause is fixed in code",
                "Yes, but don't tell anyone it's over until the postmortem is written and the root cause is fixed"
              ],
              answer: 1,
              why: [
                "Two minutes isn't long enough to know it's holding.",
                "Right. Stable, owned follow-ups, a final update. The root-cause fix can happen after the incident.",
                "Incidents end when users are fine. The proper fix is follow-up work.",
                "People are waiting for the all-clear; send it."
              ] } }
        ]
      },

      {
        id: "oncall-u5-quiz",
        title: "Unit 5 quiz: Keeping people informed",
        kind: "quiz", xp: 10,
        brief: "Status updates, cadence, the commander, handoffs and ending an incident. 80% to pass.",
        questions: [
          { q: "How often should a major incident get a status update, per PagerDuty's guidance?",
            choices: ["Every 20–30 minutes, even with no news", "Only when something actually changes, so updates are never wasted", "Once at the start and once at the end", "Every 2 minutes"],
            answer: 0, explain: "A steady cadence stops people interrupting the responders to ask what's happening." },
          { q: "What should every status update end with?",
            choices: ["The name of whoever made the change", "A guess at how long the fix will take", "When the next update will be", "A link to the code"],
            answer: 2, explain: "Readers then know when to look again, instead of asking." },
          { q: "Which belongs in a status update?",
            choices: ["\"Sam's deploy broke it; we're looking into the cause now.\"", "\"Checkout fails for most customers since 13:58.\"", "\"We think it's the connection pool.\"", "\"Fixed in 10 minutes.\""],
            answer: 1, explain: "Impact in the reader's words. Blame, guesses and promises stay out." },
          { q: "What does the Incident Commander do with a proposed risky change?",
            choices: ["Lets whoever proposed it go ahead, since they know the system best", "Makes the change personally", "Postpones it until the postmortem", "Decides on it, knowing what it's expected to show"],
            answer: 3, explain: "Every change is a decision. Coordinating them is the IC's main job." },
          { q: "What's the most useful part of a handoff note that people often leave out?",
            choices: ["What was tried and what it showed, including what didn't work", "The responder's opinion of the code quality", "The full chat log, so the next person can read every message that was sent", "Who caused the incident"],
            answer: 0, explain: "Negative results stop the next person repeating them." },
          { q: "When is an incident over?",
            choices: ["As soon as the error rate dips, since that means users are no longer affected at all", "When the root cause is fixed in code", "When users are fine, it's stable, follow-ups have owners, and the all-clear is sent", "When the on-call shift ends"],
            answer: 2, explain: "The proper fix and the postmortem are follow-ups, not part of the incident." }
        ]
      }
    ]
  });
})();
