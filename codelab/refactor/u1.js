/* Refactoring Legacy Code — Unit 1: What refactoring is */
(function () {
  window.CODELAB.addUnit("refactor", {
    id: "refactor-u1",
    title: "What refactoring is",
    icon: "🧹",
    blurb: "A precise word that gets used loosely. Changing structure without changing behavior, in small steps, with one hat on at a time, and why \"legacy\" means \"no tests\" rather than \"old\".",
    cheat: [
      { h: "The definition (Martin Fowler)", lang: "text", code:
"a change to the internal structure of software\n" +
"to make it easier to understand and cheaper to modify\n" +
"WITHOUT changing its observable behavior",
        note: "If what callers see changes (a result, an error, an argument it modifies), it isn't a refactor. That's a feature or a fix, and it needs its own review." },
      { h: "Two hats (Kent Beck)", lang: "text", code:
"adding function   new behavior, new tests\n" +
"refactoring       same behavior, same tests, better shape",
        note: "Wear one at a time. Mixing them means nobody, including you, can tell which change broke something." },
      { h: "Make the change easy, then make the easy change", lang: "text", code:
"1 refactor until the feature fits naturally   (tests stay green)\n" +
"2 add the feature                            (one small change)",
        note: "Kent Beck, 2012: \"warning: this may be hard\". Preparatory refactoring is often most of the work." },
      { h: "Legacy code (Michael Feathers)", lang: "text", code:
"legacy code = code without tests\n" +
"so: pin what it does today BEFORE you change it",
        note: "Characterization tests record actual behavior, quirks included. They're the safety net every refactor in this course stands on." }
    ],
    lessons: [

      {
        id: "refactor-u1-1",
        title: "Same behavior, better shape",
        kind: "concept", xp: 15, mins: 10,
        screens: [
          { read: "Martin Fowler's book *Refactoring* defines the word precisely: **a change to the internal structure of software to make it easier to understand and cheaper to modify, without changing its observable behavior.**\n\n\"Observable behavior\" is everything a caller can see: what it returns, what it throws, and what it does to the things you pass in. Renaming a local variable is a refactor. Changing `>=` to `>` isn't, however tidy it looks.",
            ask: { type: "pick", transfer: true,
              q: "Which change is a refactor?",
              choices: [
                "Replacing a loop with `filter` and `map`, so the function also skips items it used to include",
                "Splitting a 60-line function into three named helpers, with every output unchanged",
                "Fixing an off-by-one so the last page of results finally shows up",
                "Making a function sort its input array in place to avoid a copy"
              ],
              answer: 1,
              why: [
                "The output changed, so it's a behavior change, whatever else it tidied.",
                "Right. Structure changed, behavior didn't. That's the whole definition.",
                "A worthwhile fix, but a fix changes behavior on purpose. It belongs in its own change.",
                "Callers now see their array reordered. Changing an argument is observable behavior."
              ] } },
          { read: "Refactoring happens in **small steps**, each one keeping the code working. Fowler's point is that tiny steps are faster, not slower: the code is never broken for long, so when a step goes wrong you know exactly which one.\n\nKent Beck adds **two hats**: at any moment you're either adding function or refactoring, never both. If you find a bug while refactoring, note it, finish the refactor, then fix the bug as a separate change.",
            ask: { type: "pick", transfer: true,
              q: "Halfway through extracting a function, you notice a bug in the code you're moving. What do you do?",
              choices: [
                "Fix it inside the same change, since you're already editing that exact code anyway",
                "Note it, finish the refactor with behavior unchanged, then fix the bug separately",
                "Abandon the refactor and rewrite the function from scratch",
                "Leave the bug and never mention it, since refactors mustn't change behavior"
              ],
              answer: 1,
              why: [
                "Then nobody can tell the refactor from the fix, and if something breaks, which change did it?",
                "Right. One hat at a time. The fix gets its own test and its own review.",
                "Rewrites lose the behavior nobody wrote down. That's usually how the next bug starts.",
                "Not changing behavior in the refactor is right. Hiding the bug isn't: write it down and fix it next."
              ] } },
          { read: "Why refactor at all? Kent Beck's answer: **\"for each desired change, make the change easy (warning: this may be hard), then make the easy change.\"**\n\nMost refactoring happens right before a feature: the code isn't shaped for what you need, so you reshape it first, with every test still green, and then the feature is a small change. Refactoring nobody needed yet is often just moving code around.",
            ask: { type: "order", transfer: true,
              q: "You need to add a new discount type to a tangled pricing function. Put the work in order.",
              lines: ["Pin today's behavior with tests", "Refactor until a new discount type fits in one place", "Check the tests are still green", "Add the new discount type, with its own tests"],
              why: "Tests first, then reshape, then confirm nothing moved, then the easy change." } },
          { ask: { type: "explain",
              q: "A teammate opens a pull request titled \"Refactor checkout\". It splits the function into helpers and also changes how tax rounds. What would you ask for, and why?",
              model: "Ask for two pull requests: one that only restructures, with behavior unchanged and the existing tests green, and one that changes the tax rounding, with a test showing the new result. Mixed together, a reviewer can't check either one properly, and if totals change in production nobody can tell whether it was the rounding or a slip in the restructuring.",
              rubric: ["Asks to split the restructuring from the behavior change", "Says why: each can be reviewed, and a regression can be traced", "Mentions tests for the rounding change"] } }
        ]
      },

      {
        id: "refactor-u1-2",
        title: "Legacy means untested",
        kind: "concept", xp: 15, mins: 9,
        screens: [
          { read: "Michael Feathers, in *Working Effectively with Legacy Code*, gives the most useful definition of legacy code: **code without tests.** Not old code, not bad code: code you can't change with confidence, because nothing tells you when you've broken it.\n\nSo the first step with legacy code is almost never to change it. It's to **pin down what it does today**.",
            ask: { type: "pick", transfer: true,
              q: "Which of these is legacy code, in Feathers' sense?",
              choices: [
                "A ten-year-old module with a thorough, fast test suite",
                "A function you wrote last week that has no tests at all",
                "Any code that's written in an older version of its language or framework",
                "Code written by a team that has since left the company"
              ],
              answer: 1,
              why: [
                "Old, but you can change it safely: the tests will tell you. Not legacy in this sense.",
                "Right. Nothing tells you when you break it, so every change is a guess.",
                "Age and language version don't decide whether you can change it safely.",
                "The authors being gone makes it harder to understand, but tests are what make it safe to change."
              ] } },
          { read: "Feathers' tool for this is the **characterization test**: a test that records what the code **actually does**, not what it should do.\n\nIf `shippingQuote(0)` returns `4.99` for an empty order, that's what the test asserts, even if it seems wrong. The goal is a net that catches **any** change. Correctness is a separate question, for a separate change.",
            ask: { type: "pick", transfer: true,
              q: "While writing characterization tests, you find `discount(-5)` returns `-5`. That seems wrong. What does the test assert?",
              choices: [
                "That it throws an error, because a negative discount is clearly a mistake",
                "That it returns -5, exactly what it does today, and a note to investigate",
                "Nothing: leave that case out until someone decides what's right",
                "That it returns 0, the value it should return"
              ],
              answer: 1,
              why: [
                "That tests behavior the code doesn't have. The test fails today and protects nothing.",
                "Right. Pin it as it is; if it's a bug, fixing it becomes its own change with its own test.",
                "Leaving it out means a refactor could change it silently. That's the case worth pinning.",
                "That's the correct behavior, maybe. The characterization test records the current one."
              ] } },
          { read: "Refactoring isn't always the answer:\n\n- code nobody will ever change again rarely needs it\n- code you're about to delete doesn't\n- and a rewrite from scratch, the tempting alternative, loses all the behavior nobody wrote down\n\nThe rest of this course is the safe path: **pin it, then change it in small steps, checking behavior after each.**",
            ask: { type: "pick",
              q: "A stable, rarely-touched module is ugly but works and has no open tickets. Should you refactor it this sprint?",
              choices: [
                "Yes: ugly code should always be cleaned up when someone notices it",
                "Probably not: refactor it when a change is needed there",
                "Yes, by rewriting it from scratch in a newer style",
                "No, and delete its tests too since nobody touches it"
              ],
              answer: 1,
              why: [
                "Refactoring costs time and risk. Code nobody changes isn't costing you much.",
                "Right. Make the change easy when there's a change to make.",
                "A rewrite risks losing behavior nobody wrote down, for no immediate benefit.",
                "Tests are what make the eventual change safe. Keep them."
              ] } }
        ]
      },

      {
        id: "refactor-u1-quiz",
        title: "Unit 1 quiz: What refactoring is",
        kind: "quiz", xp: 10,
        brief: "The definition, small steps, two hats, make the change easy, and legacy code. 80% to pass.",
        questions: [
          { q: "What must a refactoring NOT change?",
            choices: ["The file it lives in", "The observable behavior", "The names of the functions it touches", "The number of lines"],
            answer: 1, explain: "Structure changes; what callers see doesn't. That's Fowler's definition." },
          { q: "A function used to return a new sorted array and now sorts its argument in place. Is that a refactor?",
            choices: ["Yes: the returned array is the same", "Yes, as long as the new version runs noticeably faster", "Only if the tests still pass", "No: callers can see their array change"],
            answer: 3, explain: "What a function does to its arguments is observable behavior." },
          { q: "What does \"two hats\" mean?",
            choices: ["Add function or refactor, never both at once", "Two people should review every refactor", "Write tests in one file and code in another", "Refactor on Mondays, add features on Tuesdays"],
            answer: 0, explain: "One kind of change at a time, so you always know which change broke something." },
          { q: "\"Make the change easy, then make the easy change.\" What comes first?",
            choices: ["The feature", "A rewrite of the whole module from scratch", "Refactoring so the feature fits", "Deleting the old tests"],
            answer: 2, explain: "Reshape first, with tests green; then the feature is small." },
          { q: "In Feathers' sense, what makes code \"legacy\"?",
            choices: ["Its age", "Having no tests", "Being in an old language version", "Being written by someone else"],
            answer: 1, explain: "Without tests, nothing tells you when a change breaks it." },
          { q: "A characterization test finds a function returns -5 for a negative input. What does the test assert?",
            choices: ["That it should throw", "That it returns 0", "Nothing, skip it", "That it returns -5"],
            answer: 3, explain: "Pin actual behavior. Fixing it, if it's a bug, is a separate change." }
        ]
      }
    ]
  });
})();
