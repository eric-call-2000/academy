/* Code Review — Unit 1: What review is for */
(function () {
  window.CODELAB.addUnit("review", {
    id: "review-u1",
    title: "What review is for",
    icon: "🔍",
    blurb: "What code review actually catches, what it is really for, why big or rushed reviews stop working, and the order to read a change in. No diffs yet: this unit is the map for the rest of the course.",
    cheat: [
      { h: "What reviews really produce", lang: "text", code:
"expected:  catch bugs before they ship\n" +
"observed:  defect comments are a small share,\n" +
"           mostly small logic slips\n" +
"also:      knowledge transfer, team awareness,\n" +
"           better solutions",
        note: "From Microsoft's study of real review comments (Bacchelli & Bird, ICSE 2013). The hardest part, by the reviewers' own account, is understanding the change and its context." },
      { h: "Size and speed", lang: "text", code:
"review at most ~200–400 lines at a time\n" +
"stop after ~60–90 minutes\n" +
"faster than ~450–500 lines/hour → finds fewer defects",
        note: "From SmartBear's study of 2,500 reviews at Cisco. A big change gets a worse review, so asking for it to be split is a legitimate review comment." },
      { h: "Read in this order", lang: "text", code:
"1 what the change is for (the description)\n" +
"2 design: does it belong here, in this shape?\n" +
"3 functionality: does it do that, edge cases too?\n" +
"4 complexity: could it be simpler?\n" +
"5 tests: would they fail if this broke?\n" +
"6 naming, comments, style",
        note: "Google's reviewer guide puts design first and style last. A style nit on code that shouldn't exist is wasted effort for everyone." },
      { h: "The six labels this course uses", lang: "text", code:
"bug          does the wrong thing\n" +
"security     can be abused\n" +
"design       wrong place or wrong shape\n" +
"tests        missing, or can't fail\n" +
"readability  names or comments that mislead\n" +
"nit          small, optional polish",
        note: "Every comment also gets a severity: blocking (must change before merge) or non-blocking (worth saying, fine to merge without)." }
    ],
    lessons: [

      {
        id: "review-u1-1",
        title: "What reviews actually catch",
        kind: "concept", xp: 15, mins: 10,
        screens: [
          { read: "Ask developers why they review code and most say the same thing: **to find bugs before they ship.**\n\nIn 2013 researchers at Microsoft tested that. They watched developers review, interviewed them, surveyed them, and sorted hundreds of real review comments by what each one was about.",
            ask: { type: "pick", transfer: true,
              q: "What share of those real review comments were about defects?",
              choices: ["Nearly all of them: finding bugs is what reviews do", "A small share, mostly small, low-level logic slips", "About half, split evenly with style comments", "None: reviewers only commented on style"],
              answer: 1,
              why: [
                "That's what people expected going in, and it's what the study found was not true.",
                "Right. Finding defects was the top reason people gave for reviewing, but defect comments were a minority, and mostly small logic issues rather than deep design flaws.",
                "There is no even split in the data. Defects were a small share.",
                "Defect comments did exist, just fewer than expected, and mostly small."
              ] } },
          { read: "So what else do reviews produce? The same study found:\n\n- **knowledge transfer**: the reviewer learns the code, the author learns from the reviewer\n- **team awareness**: more than one person knows what changed and why\n- **better solutions**: \"have you tried…\" turns into a simpler design\n\nAnd it named the hardest part of reviewing: **understanding the change**. What is it for, and what does it touch? Most comments that miss the point come from a reviewer who never worked that out.",
            ask: { type: "pick", transfer: true,
              q: "A reviewer opens a 40-line change, skims it, and leaves three comments about spacing. What did they most likely skip?",
              choices: ["Running a spell checker over every identifier the change added", "Working out what the change is for and what it affects", "Checking the indentation style a second time", "Reading the commit timestamps"],
              answer: 1,
              why: [
                "Spelling is the same kind of surface check as spacing. The missing step is deeper.",
                "Right. Comments on the surface are what you write when you haven't understood the change. Understanding comes first; everything else depends on it.",
                "They already did the surface checks. What's missing is understanding.",
                "Timestamps say nothing about whether the change is right."
              ] } },
          { read: "Review quality also depends on **how much** you read and **how fast**.\n\nSmartBear studied 2,500 reviews of 3.2 million lines at Cisco. Reviews of about 200–400 lines over 60–90 minutes found most of the defects. Reviewers who went faster than about **500 lines an hour** found noticeably fewer.\n\nSo a 1,500-line pull request is not a bigger review. It's a worse one. \"Please split this\" is a real review comment, not a complaint.",
            ask: { type: "predict", transfer: true,
              q: "In the Cisco study, above roughly how many lines per hour did reviewers start finding fewer defects?",
              answer: "500", accept: ["450", "500 lines", "500 lines an hour", "500 lines per hour", "450-500", "450–500"],
              why: "Roughly 450–500 lines an hour. Faster than that, and reviews found below-average numbers of defects in most cases." } },
          { read: "Put together, a good review is less \"spot the bug\" and more **read for understanding, then judge**. Reviewers who leave fewer, better comments usually help more than reviewers who leave many small ones.\n\nThis course grades you that way. You'll be scored on the problems you catch **and** on what you flag that was fine, because a false alarm costs the author time too.",
            ask: { type: "explain",
              q: "Why might a reviewer who leaves 30 style comments on a pull request help the team less than one who leaves 2 comments?",
              model: "Thirty style comments bury anything important, cost the author time on things that rarely matter, and usually mean the reviewer didn't work out what the change does. Two comments that each point at a real problem, like a wrong boundary or a missing check, change what ships. Volume isn't value: what matters is whether the comments find the problems that matter and leave the rest alone.",
              rubric: ["Says the important comments get lost among the small ones", "Mentions the author's time, or the cost of each comment", "Connects lots of surface comments to not understanding the change"] } }
        ]
      },

      {
        id: "review-u1-2",
        title: "What to look at, in order",
        kind: "concept", xp: 15, mins: 10,
        screens: [
          { read: "Google publishes the guide its engineers follow when reviewing. It lists what to look at, **most important first**:\n\n1. **Design**: does this change belong here, in this shape?\n2. **Functionality**: does it do what the author meant, edge cases included?\n3. **Complexity**: could a reader understand it quickly?\n4. **Tests**: are there tests, and would they fail if this broke?\n5. **Naming and comments**: do they say what the code really does?\n6. **Style**",
            ask: { type: "order", transfer: true,
              q: "Put the review questions in the order the guide reads them, most important first.",
              lines: ["Does this change belong here, in this shape?", "Does it do what the author meant, edge cases included?", "Are there tests that would fail if it broke?", "Do the names say what the code does?", "Is the formatting consistent?"],
              why: "Design, then functionality, then tests, then names, then style. A spacing comment on code that shouldn't exist is wasted work for everyone." } },
          { read: "Every comment you leave in this course gets a **label** for what kind of problem it is:\n\n- **bug**: does the wrong thing\n- **security**: can be abused\n- **design**: wrong place or wrong shape\n- **tests**: missing, or can't fail\n- **readability**: a name or comment that misleads\n- **nit**: small, optional polish",
            ask: { type: "pick", transfer: true,
              q: "A new endpoint returns every user's email address to anyone who calls it, logged in or not. Which label fits?",
              choices: ["bug", "security", "design", "nit"],
              answer: 1,
              why: [
                "It does do something wrong, but the reason it matters is that someone can abuse it. That's the more precise label.",
                "Right. Data anyone can pull out without permission is a security problem first.",
                "The design may be wrong too, but the urgent fact is that it can be abused today.",
                "A nit is optional polish. This is the opposite of optional."
              ] } },
          { read: "Each comment also gets a **severity**:\n\n- **Blocking**: this must change before the code merges. Wrong results, security holes, data loss, a missing test for risky logic.\n- **Non-blocking**: worth saying, fine to merge without. A clearer name, a small simplification, a style nit.\n\nMarking everything blocking is a common way new reviewers slow a team down. If it wouldn't hurt anyone to ship it, it isn't blocking.",
            ask: { type: "pick", transfer: true,
              q: "A function is named `doStuff()`. It works correctly and has tests. Blocking or not?",
              choices: ["Blocking: a bad name is a bug waiting to happen", "Non-blocking: suggest a better name, but it can merge", "Blocking, unless the author adds a comment", "Neither: names aren't something reviews should comment on"],
              answer: 1,
              why: [
                "A vague name makes the code harder to read, but nothing is wrong today. Blocking the merge over it costs more than it saves.",
                "Right. Worth a comment, and the author will often take it, but nothing breaks if it ships.",
                "A comment doesn't make the name less vague, and the issue still isn't one that should block.",
                "Names are worth commenting on. They just usually aren't blocking."
              ] } },
          { read: "How the review lessons work:\n\n- You get the author's description and the **diff**: removed lines in red, added lines in green, unchanged lines around them.\n- **Tap a line** to comment. Pick a label and a severity, and write a note if you like.\n- Finish with a **verdict**: Approve, Comment, or Request changes.\n\nYou pass by finding every problem that should block the merge, with the right verdict, and **at most one** minor false alarm. Some changes are fine as they are. Some problems are on lines the change didn't touch.",
            ask: { type: "pick",
              q: "You find one real bug that should block the merge, and leave one more comment marked Blocking on a line that turns out to be fine. What happens?",
              choices: ["You pass, because the one real bug was found and that's the part that counts most", "You don't pass: a blocking false alarm counts double, over the limit", "You pass, but lose the XP for the lesson", "You don't pass: any false alarm at all fails a lesson"],
              answer: 1,
              why: [
                "Finding the bug is necessary but not enough. Blocking a merge over fine code costs a team real time.",
                "Right. One minor false alarm is allowed. A blocking one counts as two, so it's over the limit. Fix it and submit again.",
                "There's no partial XP. The review either passes or you revise it.",
                "One minor (non-blocking) false alarm is allowed in a normal lesson. Projects allow none."
              ] } }
        ]
      },

      {
        id: "review-u1-quiz",
        title: "Unit 1 quiz: What review is for",
        kind: "quiz", xp: 10,
        brief: "What reviews catch, what they're for, size and speed, reading order, labels and severity. 80% to pass.",
        questions: [
          { q: "In Microsoft's study of real review comments, how common were comments about defects?",
            choices: ["Almost every comment pointed at a defect of some kind", "A minority, mostly small logic issues", "Exactly half, with style comments as the other half", "They weren't counted at all"],
            answer: 1, explain: "Finding defects was the top reason people gave for reviewing, but defect comments were a small share of what reviews actually produced." },
          { q: "Which of these did the same study find reviews also produce?",
            choices: ["Knowledge transfer and team awareness", "Measurably faster builds and shorter test runs", "Fewer lines of code across the whole project", "Higher automatic test coverage"],
            answer: 0, explain: "Reviewers learn the code, authors learn from reviewers, and more than one person knows what changed and why." },
          { q: "What did reviewers name as the hardest part of reviewing?",
            choices: ["Typing comments quickly enough to keep up with authors", "Agreeing on one code style across every team", "Understanding the change and its context", "Finding anyone willing to review"],
            answer: 2, explain: "Most weak reviews come from not working out what the change is for and what it touches." },
          { q: "A teammate opens a 2,000-line pull request. What's the most useful first review comment?",
            choices: ["Approve it, since reading it all would take too long anyway", "Ask for it to be split into smaller changes", "Fix the formatting before reading anything else", "Review the first 50 lines and approve"],
            answer: 1, explain: "Review quality drops with size and speed. Asking for smaller changes gets every part a real review." },
          { q: "In Google's reviewer guide, what comes first?",
            choices: ["Style", "Naming", "Comments", "Design"],
            answer: 3, explain: "Design first: does the change belong here, in this shape? Style comes last." },
          { q: "Which comment should be marked blocking?",
            choices: ["\"This deletes every row when the id is missing.\"", "\"Could this variable have a clearer, more specific name?\"", "\"Small thing: there's an extra blank line here.\"", "\"Nice simplification, thanks!\""],
            answer: 0, explain: "Data loss must be fixed before merging. The others are worth saying, but nothing breaks if they ship." },
          { q: "An endpoint lets any logged-out visitor read other users' orders. Which label fits best?",
            choices: ["nit", "readability", "tests", "security"],
            answer: 3, explain: "Anything someone can abuse to get data they shouldn't have is a security problem first." }
        ]
      }
    ]
  });
})();
