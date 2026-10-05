/* On-Call & Incidents — Unit 6: The postmortem */
(function () {
  window.CODELAB.addUnit("oncall", {
    id: "oncall-u6",
    title: "The postmortem",
    icon: "📝",
    blurb: "The incident is over. Now make it not happen again: a blameless write-up with a timeline, the impact, why it happened and why it wasn't caught sooner, and action items that someone owns and someone can check.",
    cheat: [
      { h: "What goes in (Google's postmortem template, roughly)", lang: "text", code:
"summary          two or three sentences\n" +
"impact           who, what, how long, how many\n" +
"timeline         times, from your notes\n" +
"root cause       and contributing factors\n" +
"what went well   and what went badly\n" +
"action items     owner, priority, a checkable end state",
        note: "Write it within a few days, while people remember. The notes you kept during the incident are the timeline." },
      { h: "Blameless", lang: "text", code:
"not: who made the mistake?\n" +
"but: what let a reasonable person make it,\n" +
"     and what let it reach users?",
        note: "\"Human error\" is where the analysis starts, not where it ends. People who fear blame stop reporting what they saw." },
      { h: "Action items that work", lang: "text", code:
"weak:   \"be more careful with config\"\n" +
"strong: \"startup fails if PAYMENTS_URL is unset, in CI\n" +
"         (owner: jo, P1, done when the check is merged)\"",
        note: "Prefer changes to the system over reminders to people. Each needs an owner and a way to tell it's done." }
    ],
    lessons: [

      {
        id: "oncall-u6-1",
        title: "Blameless",
        kind: "concept", xp: 15, mins: 9,
        screens: [
          { read: "Google's SRE teams write a **postmortem** after every significant incident, and they write it **blameless**: the goal is to fix the system, not to find someone at fault.\n\nThis isn't about being nice. If people expect blame, they stop reporting what they saw, hide near misses, and the same incident comes back. \"Human error\" is where the analysis **starts**: what made the mistake easy to make, and what let it reach users?",
            ask: { type: "pick", transfer: true,
              q: "A config change by Sam took the site down. Which sentence belongs in a blameless postmortem?",
              choices: [
                "\"Sam pushed a bad config without checking it carefully enough first, and the rest of us didn't catch it.\"",
                "\"A config change with an invalid value was accepted and deployed; nothing validates config before it ships.\"",
                "\"The outage was caused by human error.\"",
                "\"Sam has been reminded to be more careful with config.\""
              ],
              answer: 1,
              why: [
                "It's about a person, and it suggests the fix is Sam being more careful, which won't stop the next person.",
                "Right. It describes what happened and points at the gap in the system: nothing checks config before it ships.",
                "This ends the analysis exactly where it should begin.",
                "A reminder doesn't change the system. The next person makes the same change."
              ] } },
          { read: "Every incident has a **root cause** and usually several **contributing factors**: things that didn't cause it but made it worse, longer or harder to spot.\n\nFor the 1.5 release that crash-looped:\n\n- **root cause**: 1.5 needed `PAYMENTS_URL`, and production didn't set it\n- **contributing**: nothing checks required settings before a deploy; the restart loop looked like \"up\" in the dashboard; the alert fired on errors, not on restarts",
            ask: { type: "pick", transfer: true,
              q: "Which of these is a contributing factor rather than the root cause?",
              choices: [
                "The new release needed a setting that production didn't have, so it exited every time it started",
                "The dashboard counted a crash-looping container as \"up\", so nobody noticed for 9 minutes",
                "The release was version 1.5",
                "The incident happened on a Tuesday"
              ],
              answer: 1,
              why: [
                "That's the root cause: the thing that, fixed, stops this exact failure.",
                "Right. It didn't cause the outage, but it made it last longer. Fixing it helps with every future crash loop, not just this one.",
                "A version number isn't a cause.",
                "The day doesn't change anything about how it happened."
              ] } },
          { read: "Postmortems also record **what went well**. It sounds soft, but it's how good habits survive: \"the rollback took 2 minutes because the previous image was still tagged\" is worth keeping, and worth protecting when someone suggests deleting old images to save disk.\n\nAnd they go to the **whole team**, not just the people involved. Other teams learn from your incident before it becomes theirs.",
            ask: { type: "explain",
              q: "Someone in the postmortem meeting says: \"The real problem is that Jo didn't test the release properly.\" How would you respond, to keep the review blameless and useful?",
              model: "Ask what would have let any engineer catch it: was there a test or check for required settings that Jo skipped, or was there no such check at all? If testing the release properly depends on someone remembering a step, that step should be automated, like CI failing when a required variable isn't set, or startup failing loudly in staging. That turns \"Jo should have\" into a change that protects everyone, and keeps people willing to say what actually happened.",
              rubric: ["Moves the question from the person to the system", "Asks what check was missing or skipped, and why", "Suggests an automated check instead of a reminder", "Mentions why blame makes future incidents harder"] } }
        ]
      },

      {
        id: "oncall-u6-2",
        title: "Timeline and action items",
        kind: "concept", xp: 15, mins: 9,
        screens: [
          { read: "The **timeline** is the spine of the postmortem: what happened, when, and who noticed. Your incident notes are the raw material, which is why this course had you write them as you went.\n\nKey moments to capture: when it **started**, when it was **detected**, when someone **responded**, when it was **mitigated**, when it was **resolved**. The gaps between them are where the improvements are.",
            ask: { type: "order", transfer: true,
              q: "Put these timeline entries in order.",
              lines: ["10:12 shop 1.5 deployed", "10:12 shop starts crash-looping", "10:21 alert fires: error rate high", "10:23 on-call acknowledges, starts investigating", "10:26 rolled back to 1.4; shop answers again"],
              why: "Started 10:12, detected 10:21. That 9-minute gap is the first thing to fix: an alert on restarts would have fired in seconds." } },
          { read: "Then **action items**. Google's postmortem guidance asks that each has an **owner**, a **priority**, and a **verifiable end state**: you can tell when it's done.\n\nThe strongest action items change the **system** rather than asking people to try harder:\n\n- weak: \"Be more careful with config.\"\n- strong: \"CI fails if a required environment variable has no value in production config. Owner: jo. P1. Done when the check is merged and catches a test case.\"",
            ask: { type: "pick", transfer: true,
              q: "Which is the best action item?",
              choices: [
                "\"Everyone should double-check their deploys from now on, and be extra careful.\"",
                "\"Alert when any container restarts more than 3 times in 5 minutes. Owner: kim. P1. Done when it pages in a test.\"",
                "\"Improve monitoring.\"",
                "\"Discuss deploy safety at the next team meeting, and agree as a team on a clear, careful process for every release.\""
              ],
              answer: 1,
              why: [
                "No owner, no way to tell it's done, and it relies on people remembering.",
                "Right. A specific system change, an owner, a priority, and a test that proves it works.",
                "Too vague to act on or to check.",
                "A meeting isn't an outcome. What changes after it?"
              ] } },
          { read: "Last: action items only matter if they **get done**. Google's postmortem guidance stresses following up on them, and many teams review open postmortem items regularly. An action item with no owner is a wish.\n\nA good postmortem is also short enough to be read. Two pages that people read beat ten that nobody does.",
            ask: { type: "pick",
              q: "Three months later the same incident happens again. The old postmortem had an action item to fix it. What most likely went wrong?",
              choices: [
                "The postmortem wasn't long or thorough enough the first time",
                "The action item had no owner, or nobody followed up on it",
                "Postmortems can't prevent repeats",
                "The incident wasn't really the same"
              ],
              answer: 1,
              why: [
                "Length doesn't fix things. Finished action items do.",
                "Right. Without an owner and a follow-up, action items quietly expire.",
                "They can, when their action items are done.",
                "Possibly, but the usual reason is simpler: the fix never happened."
              ] } }
        ]
      },

      {
        id: "oncall-u6-quiz",
        title: "Unit 6 quiz: The postmortem",
        kind: "quiz", xp: 10,
        brief: "Blameless reviews, root cause and contributing factors, timelines and action items. 80% to pass.",
        questions: [
          { q: "Why are postmortems written blameless?",
            choices: ["Because it's the polite thing to do, and it keeps everyone in the team happy", "So people keep reporting what really happened, and the system gets fixed", "Because nobody is ever at fault", "Because it's a legal requirement"],
            answer: 1, explain: "Fear of blame hides information. Fixing the system stops the next person making the same mistake." },
          { q: "\"Human error\" appears as the root cause. What's the next question?",
            choices: ["Who was it?", "How should they be disciplined?", "Nothing more: once human error is found, the analysis has found its answer", "What made the error easy to make, and what let it reach users?"],
            answer: 3, explain: "Human error is where the analysis starts. The fix is in the system around the person." },
          { q: "Which is a contributing factor, not a root cause?",
            choices: ["The alert fired 9 minutes after the outage started", "The release needed a setting production didn't have", "The code had a bug", "The config value was wrong"],
            answer: 0, explain: "Late detection didn't cause the outage, but it made it last longer." },
          { q: "What three things should every action item have?",
            choices: ["A title, a due date and a follow-up meeting to discuss it", "A ticket number, an estimate and a reviewer", "An owner, a priority and a verifiable end state", "Nothing beyond a description"],
            answer: 2, explain: "Owner, priority, and a way to tell when it's done, per Google's postmortem guidance." },
          { q: "Which action item is strongest?",
            choices: ["\"Be more careful with deploys.\"", "\"CI fails when a required env var is unset. Owner: jo, P1, done when merged.\"", "\"Improve monitoring and alerting across all of our services so this kind of thing never happens again.\"", "\"Talk about it at the retro.\""],
            answer: 1, explain: "It changes the system, has an owner and priority, and you can tell when it's done." },
          { q: "In the timeline, the outage started at 10:12 and the alert fired at 10:21. What does that gap point to?",
            choices: ["Nothing: 9 minutes is a normal, acceptable time for any alert to fire", "The on-call engineer was slow", "The rollback was too slow", "A detection problem worth an action item"],
            answer: 3, explain: "Time to detect is part of the outage. Faster alerting shortens every future incident." }
        ]
      }
    ]
  });
})();
