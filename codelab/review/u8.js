/* Code Review — Unit 8: Giving the review */
(function () {
  function src(lines) { return lines.join("\n") + "\n"; }

  window.CODELAB.addUnit("review", {
    id: "review-u8",
    title: "Giving the review",
    icon: "💬",
    blurb: "Finding the problem is half the job. The other half is a comment the author can act on, a severity they can trust, and, when you're the author, answering a review well. Ends with a capstone: an AI-drafted feature, no false alarms allowed.",
    cheat: [
      { h: "A comment someone can act on", lang: "text", code:
"what     the line, and what goes wrong\n" +
"why      the input or case that breaks it\n" +
"how      a suggested fix, or a question if unsure\n" +
"weight   blocking or not, said out loud",
        note: "\"This is wrong\" makes the author redo your review. \"$50 exactly pays shipping: `>` should be `>=`\" lets them fix it in a minute." },
      { h: "Labels people use", lang: "text", code:
"nit:          tiny, take it or leave it\n" +
"suggestion:   I'd do this, your call\n" +
"question:     I'm not sure this is intended\n" +
"blocking:     must change before merge",
        note: "Saying the weight up front stops a nit being treated as an order, and a real problem being waved off as a nit." },
      { h: "Tone", lang: "text", code:
"about the code, not the person    \"this loop\" not \"you\"\n" +
"ask when unsure                   \"is this meant to…?\"\n" +
"say what's good                   specific, not \"LGTM!!\"",
        note: "The same point lands better as a question when you might be the one who's missing something." },
      { h: "When you're the author", lang: "text", code:
"keep it small     one reason per pull request\n" +
"say why           in the description, not just what\n" +
"review it first   read your own diff before anyone else\n" +
"answer everything fix it, or explain why not",
        note: "Disagreeing is fine. Ignoring a comment isn't." }
    ],
    lessons: [

      {
        id: "review-u8-1",
        title: "A comment someone can act on",
        kind: "concept", xp: 15, mins: 10,
        screens: [
          { read: "You've found the problem. Now the author has to understand it from a few lines of text, often hours later, without you there.\n\nA comment they can act on has four parts:\n\n- **what**: the line, and what goes wrong\n- **why**: the input or case that breaks it\n- **how**: a fix, or a question if you're unsure\n- **weight**: blocking or not, said out loud",
            ask: { type: "pick", transfer: true,
              q: "Which comment can the author act on straight away?",
              choices: [
                "This doesn't look right to me, can you take another look?",
                "Blocking: an order of exactly $50 still pays shipping, because `>` excludes 50. Use `>=`.",
                "Have you considered the boundary conditions here?",
                "I would have written this function very differently, to be honest."
              ],
              answer: 1,
              why: [
                "It says something is wrong, but not what. The author has to redo your review to find it.",
                "Right. It names the case, the cause, the fix and the weight. The author can fix it in a minute.",
                "Closer, but it makes the author guess which boundary and what's wrong with it.",
                "This is about your taste, not about a problem. It gives the author nothing to do."
              ] } },
          { read: "Say the **weight** up front. Common labels:\n\n- **nit:** tiny, take it or leave it\n- **suggestion:** I'd do this, your call\n- **question:** I'm not sure this is intended\n- **blocking:** must change before merge\n\nWithout a label, authors guess. Some treat every comment as an order and spend a day on nits; others wave off a real problem as a nit.",
            ask: { type: "pick", transfer: true,
              q: "You're not sure whether a function is meant to skip archived items. What's the best comment?",
              choices: [
                "Blocking: this has to include archived items before it can merge.",
                "Nit: archived items aren't handled here.",
                "Question: this skips archived items. Is that intended? If not, the count on the dashboard will be off.",
                "Nothing: if you're not sure, it's better to stay quiet."
              ],
              answer: 2,
              why: [
                "Blocking on something you're unsure about can force a wrong change. Ask first.",
                "Calling it a nit hides that it might be a real bug.",
                "Right. It asks instead of assuming, and says why it matters if it isn't intended.",
                "Staying quiet is how real bugs ship. A question costs the author a minute."
              ] } },
          { read: "Tone changes how a comment lands, not just how it feels:\n\n- Talk about **the code**, not the person: \"this loop\", not \"you\".\n- **Ask** when you might be the one missing something.\n- Say what's **good**, specifically. \"Nice: the early return makes the empty case obvious\" teaches as much as a correction.\n\nComments are read without your tone of voice. Neutral text often reads as harsher than you meant.",
            ask: { type: "pick",
              q: "Which rewrite of \"Why would you do it this way??\" works best?",
              choices: [
                "\"This is the wrong way to do it.\"",
                "\"Could this use `formatCents()` from format.js? Then negatives print the same way everywhere.\"",
                "\"Please read the codebase before opening pull requests.\"",
                "\"Hmm.\""
              ],
              answer: 1,
              why: [
                "Still about the person's choice, and still no direction.",
                "Right. It points at the existing helper and says why it's better, as a question.",
                "This is about the person, not the code, and gives nothing to act on.",
                "Says only that you're unhappy."
              ] } },
          { ask: { type: "explain",
              q: "Rewrite this review comment so the author can act on it: \"This will break.\" (The code divides by `items.length` and the list can be empty.)",
              model: "Blocking: when `items` is empty this divides by zero and returns NaN, which the page then shows as the price. Could we return 0 (or skip the average) when the list is empty? A test with an empty list would catch this.",
              rubric: ["Names the input that breaks it (an empty list)", "Says what happens (NaN shown to users)", "Suggests a fix or asks a question", "Says the weight (blocking)"] } }
        ]
      },

      {
        id: "review-u8-2",
        title: "When you're the author",
        kind: "concept", xp: 15, mins: 9,
        screens: [
          { read: "Everything in this course has had you as the reviewer. Most of the time, you'll be the author.\n\nYou can make your change easy to review:\n\n- **Keep it small**: one reason per pull request. Reviews of a few hundred lines find the most.\n- **Say why** in the description, not just what.\n- **Review your own diff first**. You'll catch the leftover `console.log` before anyone else does.",
            ask: { type: "order", transfer: true,
              q: "Put these in the order you'd do them before asking for a review.",
              lines: ["Finish the change and run the tests", "Read your own diff, line by line", "Write the description: what it's for and why", "Ask for a review"],
              why: "Tests, then your own review (which often changes the code), then the description of the final version, then the request." } },
          { read: "When the comments come in:\n\n- **Answer every comment.** Fix it, or reply with why not.\n- **Disagree with reasons**, not silence. \"I kept `>` because the description was wrong: it's over $50, I've fixed the text\" is a fine answer.\n- **Don't take it personally.** The comments are about the code.\n- **Say what changed** when you push fixes, so the reviewer doesn't have to re-read everything.",
            ask: { type: "pick", transfer: true,
              q: "A reviewer asks you to rename a function, and you think the current name is better. What do you do?",
              choices: [
                "Rename it anyway, because reviewers always get the final say",
                "Ignore the comment and merge once it's approved",
                "Reply with why you'd keep the name, and let them answer",
                "Close the pull request and open a new one"
              ],
              answer: 2,
              why: [
                "Reviewers can be wrong too. A short reply with your reason is better than a change you don't believe in.",
                "Ignoring a comment tells the reviewer their time didn't matter, and they'll stop reviewing carefully.",
                "Right. A non-blocking naming comment is a conversation, not an order. Give your reason.",
                "That throws away the review and makes everyone start again."
              ] } },
          { read: "Big changes are where reviews break down. If your change is large, split it:\n\n- a refactor that changes no behavior, **first**\n- then the feature on top of it\n- then the cleanup\n\nEach one is small enough to review properly, and the refactor can be checked on its own claim: same outputs.",
            ask: { type: "pick",
              q: "You've built a 1,200-line feature that also renames a module and reformats three files. What should you do before asking for review?",
              choices: [
                "Ask for review as it is, since it's all related to the feature",
                "Split it: the rename and reformat first, then the feature",
                "Ask two reviewers to share the 1,200 lines between them",
                "Remove the tests to make the diff shorter"
              ],
              answer: 1,
              why: [
                "Mixing mechanical changes with new behavior hides the behavior among hundreds of trivial lines.",
                "Right. The mechanical change is quick to check on its own, and the feature gets a proper read.",
                "Two people each skimming half still means nobody reads it all.",
                "Tests are part of what reviewers need to see."
              ] } }
        ]
      },

      {
        id: "review-u8-3",
        title: "Capstone: search for Bookmarks",
        kind: "review", xp: 40, mins: 15, project: true,
        brief: "**Search bookmarks** (drafted with an AI assistant)\n\nAdds a search box above the bookmarks list. Typing filters by title or URL, **case-insensitive**, and highlights the match in the title. Tests included.\n\nThis is the capstone: **no false alarms allowed**. Read every file, including the ones the change didn't touch.",
        base: {
          "bookmarks.js": src([
            "// Bookmarks are { id, title, url, createdAt }.",
            "function sortBookmarks(list) {",
            "  return list.slice().sort((a, b) => b.createdAt - a.createdAt);",
            "}",
            "",
            "function renderList(list, ul) {",
            "  ul.innerHTML = \"\";",
            "  sortBookmarks(list).forEach(b => {",
            "    const li = document.createElement(\"li\");",
            "    const a = document.createElement(\"a\");",
            "    a.href = b.url;",
            "    a.textContent = b.title;",
            "    li.appendChild(a);",
            "    ul.appendChild(li);",
            "  });",
            "}"
          ]),
          "bookmarks.test.js": src([
            "it(\"sorts newest first\", () => {",
            "  const out = sortBookmarks([{ createdAt: 1 }, { createdAt: 3 }, { createdAt: 2 }]);",
            "  expect(out.map(b => b.createdAt)).toEqual([3, 2, 1]);",
            "});"
          ])
        },
        head: {
          "bookmarks.js": src([
            "// Bookmarks are { id, title, url, createdAt }.",
            "function sortBookmarks(list) {",
            "  return list.slice().sort((a, b) => a.title.localeCompare(b.title));",
            "}",
            "",
            "function matches(b, query) {",
            "  const q = query.trim().toLowerCase();",
            "  return b.title.includes(q) || b.url.toLowerCase().includes(q);",
            "}",
            "",
            "function highlight(title, query) {",
            "  const i = title.toLowerCase().indexOf(query.toLowerCase());",
            "  if (i === -1 || !query) return title;",
            "  return title.slice(0, i) + \"<mark>\" + title.slice(i, i + query.length) + \"</mark>\" + title.slice(i + query.length);",
            "}",
            "",
            "function renderList(list, ul, query) {",
            "  ul.innerHTML = \"\";",
            "  sortBookmarks(list).filter(b => matches(b, query || \"\")).forEach(b => {",
            "    const li = document.createElement(\"li\");",
            "    const a = document.createElement(\"a\");",
            "    a.href = b.url;",
            "    a.innerHTML = highlight(b.title, query || \"\");",
            "    li.appendChild(a);",
            "    ul.appendChild(li);",
            "  });",
            "}"
          ]),
          "bookmarks.test.js": src([
            "it(\"sorts newest first\", () => {",
            "  const out = sortBookmarks([{ createdAt: 1 }, { createdAt: 3 }, { createdAt: 2 }]);",
            "  expect(out.map(b => b.createdAt)).toEqual([3, 2, 1]);",
            "});",
            "",
            "it(\"matches by url\", () => {",
            "  expect(matches({ title: \"docs\", url: \"https://example.com/API\" }, \"api\")).toBe(true);",
            "});"
          ])
        },
        findings: [
          { id: "case", file: "bookmarks.js", lines: [8, 8], category: "bug", severity: "blocking",
            why: "The URL is lower-cased before comparing, but the **title** isn't: searching \"react\" won't find \"React tips\". The description promises case-insensitive for both. Use `b.title.toLowerCase().includes(q)`." },
          { id: "xss", file: "bookmarks.js", lines: [23, 23], category: "security", severity: "blocking",
            why: "Titles are whatever the user saved (and imported bookmarks come from anywhere), and they now go into `innerHTML`. A title like `<img src=x onerror=…>` runs script. Build the highlight with text nodes and a `<mark>` element, or escape the title pieces first." },
          { id: "sort", file: "bookmarks.js", lines: [3, 3], category: "design", alsoOk: ["bug"], severity: "blocking",
            why: "Nothing in the description mentions it, but the list now sorts by title instead of newest first. The existing test above still says \"sorts newest first\", and it will now fail. An unrequested behavior change riding along with a feature: ask why, and keep it out of this change." },
          { id: "oldtest", file: "bookmarks.test.js", lines: [1, 3], category: "tests", alsoOk: ["bug", "design"], severity: "blocking", optional: true,
            why: "The existing \"sorts newest first\" test now fails (and its items have no titles, so `localeCompare` throws). Flagging it is right; it's the same problem as the sort change, so one comment on either is enough." },
          { id: "tests", file: "bookmarks.test.js", lines: [6, 8], category: "tests", severity: "nonblocking",
            why: "The one new test checks the URL path, the half that works. A test for a capitalised title (\"React tips\" / \"react\") would have caught the bug above, and nothing tests the highlight. Worth asking for alongside the fixes." }
        ],
        decoys: [
          { file: "bookmarks.js", lines: [13, 13], why: "Returning the plain title when there's no match or no query is correct, and keeps the empty search showing every title as it was." },
          { file: "bookmarks.js", lines: [19, 19], why: "`query || \"\"` means an empty or missing query matches everything: `\"anything\".includes(\"\")` is true. That's the intended \"show all\" behavior." },
          { file: "bookmarks.js", lines: [12, 12], why: "Finding the match position case-insensitively, then slicing the original title, keeps the user's capitals inside the `<mark>`. Correct." }
        ],
        verdict: "request",
        rubric: ["Each blocking comment names the input that breaks it", "Separates the feature's bugs from the unrequested sort change", "Suggests a safe way to highlight", "Says which comments block and which don't"]
      },

      {
        id: "review-u8-quiz",
        title: "Unit 8 quiz: Giving the review",
        kind: "quiz", xp: 10,
        brief: "Actionable comments, labels, tone, and being a good author. 80% to pass.",
        questions: [
          { q: "What's missing from the comment \"This will break\"?",
            choices: ["Nothing: it's short, which saves the author's time", "What breaks, on which input, and what to do instead", "A link to the style guide", "An emoji to soften it"],
            answer: 1, explain: "Without the case and the fix, the author has to redo your review to find what you meant." },
          { q: "You're not sure a behavior is a bug. Which label fits your comment?",
            choices: ["blocking", "nit", "question", "No label; stay quiet"],
            answer: 2, explain: "A question lets the author confirm or fix it, without forcing a change you're unsure about." },
          { q: "Why say a comment's weight (nit, suggestion, blocking) out loud?",
            choices: ["Review tools require it before a comment can be saved", "So the author knows what must change and what's optional", "To make the review look more thorough", "So the comments can be counted for performance reviews"],
            answer: 1, explain: "Without it, authors guess, and either over-fix nits or under-fix real problems." },
          { q: "As the author, what should you do before asking anyone to review?",
            choices: ["Merge it first so reviewers see it running live", "Read your own diff line by line", "Remove the tests to keep the diff short", "Ask for as many reviewers as possible"],
            answer: 1, explain: "Self-review catches the leftover logs and half-finished bits before they cost someone else's time." },
          { q: "A reviewer leaves a naming suggestion you disagree with. Best response?",
            choices: ["Silently ignore it and merge", "Change it anyway to avoid any argument", "Reply with your reason and let them answer", "Ask a manager to decide"],
            answer: 2, explain: "Disagreeing with a reason is normal. Ignoring a comment, or changing code you think is worse, isn't." },
          { q: "Your change mixes a big rename with a new feature. What's the reviewer-friendly move?",
            choices: ["Send it as one pull request, since it's all related", "Split it: the rename first, then the feature", "Send the feature first and the rename later, both untested", "Ask the reviewer to skip the rename"],
            answer: 1, explain: "The mechanical rename is quick to verify alone, and the feature gets a proper read." }
        ]
      }
    ]
  });
})();
