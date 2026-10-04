/* Code Review — Unit 5: Tests in review */
(function () {
  function src(lines) { return lines.join("\n") + "\n"; }

  window.CODELAB.addUnit("review", {
    id: "review-u5",
    title: "Tests in review",
    icon: "🧪",
    blurb: "A green test run proves nothing if the tests can't fail. Tests that check the mock instead of the code, assertions that pass for any value, the one case nobody wrote, and the suite that's good enough to approve.",
    cheat: [
      { h: "The one question for every test", lang: "text", code:
"if the code were wrong, would this test fail?",
        note: "Testing Fundamentals graded your suites by breaking the code and checking they went red. In review you do the same thing in your head." },
      { h: "Tests that can't fail", lang: "js", code:
"expect(result).toBeDefined()   // any value passes\n" +
"expect(fn).not.toThrow()      // a wrong answer passes\n" +
"expect(list.length > 0)      // no assertion at all",
        note: "Each of these passes for a wrong answer. Ask for the exact expected value." },
      { h: "Testing the mock", lang: "js", code:
"sendReceipt = fake();          // replaced the thing under test\n" +
"sendReceipt(order);\n" +
"expect(sendReceipt.called)     // proves the fake was called",
        note: "Mock what the code CALLS (the mailer), never the code you're testing." },
      { h: "Which cases?", lang: "text", code:
"the happy path\n" +
"the edges: 0, 1, empty, exactly the limit\n" +
"the branch this change added\n" +
"the input that broke it last time",
        note: "A change that adds a branch and no test for it is asking reviewers to trust it." }
    ],
    lessons: [

      {
        id: "review-u5-1",
        title: "A test that can't fail",
        kind: "review", xp: 20, mins: 6,
        brief: "**Member discount**\n\nMembers get 10% off. Adds `memberPrice()` and a test for it.",
        base: {
          "pricing.js": src([
            "function listPrice(item) {",
            "  return item.price;",
            "}"
          ]),
          "pricing.test.js": src([
            "it(\"listPrice returns the item's price\", () => {",
            "  expect(listPrice({ price: 20 })).toBe(20);",
            "});"
          ])
        },
        head: {
          "pricing.js": src([
            "function listPrice(item) {",
            "  return item.price;",
            "}",
            "",
            "function memberPrice(item) {",
            "  return Math.round(item.price * 0.9 * 100) / 100;",
            "}"
          ]),
          "pricing.test.js": src([
            "it(\"listPrice returns the item's price\", () => {",
            "  expect(listPrice({ price: 20 })).toBe(20);",
            "});",
            "",
            "it(\"memberPrice applies the member discount\", () => {",
            "  const price = memberPrice({ price: 20 });",
            "  expect(price).toBeDefined();",
            "});"
          ])
        },
        findings: [
          { id: "weak", file: "pricing.test.js", lines: [7, 7], category: "tests", severity: "blocking",
            why: "`toBeDefined()` passes for 18, for 20, for 0 and for `NaN`. If the discount were 50% or missing, this test would still be green. Ask for `expect(price).toBe(18)`." }
        ],
        decoys: [
          { file: "pricing.js", lines: [6, 6], why: "Rounding to cents with `Math.round(x * 100) / 100` is the usual approach, and 0.9 is the 10% discount the description promises." },
          { file: "pricing.test.js", lines: [2, 2], why: "The existing test asserts the exact value, which is what the new one should do too." }
        ],
        verdict: "request",
        rubric: ["Explains that the test passes for wrong answers", "Gives the exact value the test should expect"]
      },

      {
        id: "review-u5-2",
        title: "Testing the mock",
        kind: "review", xp: 20, mins: 6,
        brief: "**Email a receipt after checkout**\n\nAdds `sendReceipt(order)`, which emails the customer their total. Tested so we know it's called with the right order.",
        base: {
          "receipts.test.js": src([
            "// Tests for receipt emails."
          ])
        },
        head: {
          "receipts.js": src([
            "function sendReceipt(order) {",
            "  return mailer.send({",
            "    to: order.email,",
            "    subject: \"Your receipt\",",
            "    text: \"You paid $\" + order.total.toFixed(2)",
            "  });",
            "}"
          ]),
          "receipts.test.js": src([
            "// Tests for receipt emails.",
            "it(\"sends a receipt\", () => {",
            "  sendReceipt = fake();",
            "  sendReceipt({ email: \"a@example.com\", total: 12 });",
            "  expect(sendReceipt.calls.length).toBe(1);",
            "});"
          ])
        },
        findings: [
          { id: "mock", file: "receipts.test.js", lines: [3, 3], category: "tests", severity: "blocking",
            why: "The test replaces `sendReceipt` itself with a fake, then checks the fake was called. It never runs the real function: `sendReceipt` could send nothing, to the wrong address, and this stays green. Fake the **mailer** and check what `mailer.send` received: the address, and the text with `$12.00`." }
        ],
        decoys: [
          { file: "receipts.js", lines: [5, 5], why: "`toFixed(2)` prints whole dollars as `12.00`, which is what a receipt should show." }
        ],
        verdict: "request",
        rubric: ["Says the test replaces the function it's meant to test", "Suggests faking the mailer instead", "Names what the test should check (address and amount)"]
      },

      {
        id: "review-u5-3",
        title: "The case nobody wrote",
        kind: "review", xp: 20, mins: 7,
        brief: "**Split the bill**\n\n`splitBill(totalCents, people)` divides a bill evenly. If it doesn't divide exactly, the first person pays the leftover cents, so the shares always add up to the total. Tests included.",
        base: {
          "bill.js": src([
            "// Each person's share, in cents.",
            "function splitBill(totalCents, people) {",
            "  const share = Math.floor(totalCents / people);",
            "  return Array(people).fill(share);",
            "}"
          ]),
          "bill.test.js": src([
            "it(\"splits evenly\", () => {",
            "  expect(splitBill(1000, 4)).toEqual([250, 250, 250, 250]);",
            "});"
          ])
        },
        head: {
          "bill.js": src([
            "// Each person's share, in cents.",
            "function splitBill(totalCents, people) {",
            "  const share = Math.floor(totalCents / people);",
            "  const leftover = totalCents % people;",
            "  return Array(people).fill(share + leftover);",
            "}"
          ]),
          "bill.test.js": src([
            "it(\"splits evenly\", () => {",
            "  expect(splitBill(1000, 4)).toEqual([250, 250, 250, 250]);",
            "});"
          ])
        },
        findings: [
          { id: "everyone", file: "bill.js", lines: [5, 5], category: "bug", severity: "blocking",
            why: "`fill(share + leftover)` gives the leftover to **everyone**, not the first person. 1000 cents among 3 people becomes 334 + 334 + 334 = 1002. Only the first share should get it." },
          { id: "notest", file: "bill.test.js", lines: [1, 3], category: "tests", severity: "blocking",
            why: "The only test divides exactly, so `leftover` is 0 and the new code never runs. The one case this change is about, a bill that doesn't divide evenly, has no test, which is how the bug above got through. Ask for `splitBill(1000, 3)` → `[334, 333, 333]`." }
        ],
        decoys: [
          { file: "bill.js", lines: [3, 3], why: "`Math.floor` is right for the base share: the remainder is handled separately." }
        ],
        verdict: "request",
        rubric: ["Shows a total that doesn't add up (like 1002)", "Points out the existing test never reaches the new code", "Gives the test case that's missing"]
      },

      {
        id: "review-u5-4",
        title: "Tests worth approving",
        kind: "review", xp: 20, mins: 6,
        brief: "**Trial end date**\n\nFree trials last 14 days. Adds `trialEnds(startDate)` with tests, including the month boundary that bit us last time.",
        base: {
          "trial.test.js": src([
            "// Trial tests."
          ])
        },
        head: {
          "trial.js": src([
            "const TRIAL_DAYS = 14;",
            "",
            "function trialEnds(start) {",
            "  const end = new Date(start);",
            "  end.setDate(end.getDate() + TRIAL_DAYS);",
            "  return end;",
            "}"
          ]),
          "trial.test.js": src([
            "// Trial tests.",
            "it(\"works\", () => {",
            "  expect(trialEnds(new Date(2026, 2, 1)).getDate()).toBe(15);",
            "});",
            "",
            "it(\"crosses into the next month\", () => {",
            "  const end = trialEnds(new Date(2026, 0, 25));",
            "  expect(end.getMonth()).toBe(1);",
            "  expect(end.getDate()).toBe(8);",
            "});"
          ])
        },
        findings: [
          { id: "name", file: "trial.test.js", lines: [2, 2], category: "readability", alsoOk: ["nit", "tests"], severity: "nonblocking",
            why: "\"works\" won't say anything when it fails. \"ends 14 days after the start\" would. A small, worthwhile note; the test itself checks an exact value." }
        ],
        decoys: [
          { file: "trial.js", lines: [4, 4], why: "Copying the date first means `setDate` doesn't change the caller's `start`. Correct, and easy to get wrong." },
          { file: "trial.test.js", lines: [8, 9], why: "Months count from 0 in JavaScript, so `1` is February, and Jan 25 + 14 days is Feb 8. The assertions are right." }
        ],
        mustFind: ["name"],
        verdict: "approve",
        rubric: ["Approves", "Suggests a clearer test name as a non-blocking note"]
      },

      {
        id: "review-u5-quiz",
        title: "Unit 5 quiz: Tests in review",
        kind: "quiz", xp: 10,
        brief: "Tests that can't fail, testing the mock, missing cases and good test names. 80% to pass.",
        questions: [
          { q: "What's the one question to ask about every test in a review?",
            choices: ["Does it run in under a second on the build server?", "Would it fail if the code were wrong?", "Is it in the same file as the code?", "Does it use the newest test library?"],
            answer: 1, explain: "A test that passes for wrong code protects nothing. That's the whole question." },
          { q: "`expect(total).toBeDefined()` in a test for a pricing function. What's wrong?",
            choices: ["Nothing: it checks the function returned something useful", "It's too strict and will break when prices change", "It passes for almost any wrong answer", "It should be `toBeTruthy()` instead"],
            answer: 2, explain: "18, 20, 0 and NaN are all defined. Ask for the exact expected value." },
          { q: "A test replaces the function it's testing with a fake, then checks the fake was called. What does it prove?",
            choices: ["That the function sends the right email", "That the fake was called, and nothing about the real code", "That the mailer works end to end", "That the function is fast enough"],
            answer: 1, explain: "Fake what the code calls, like the mailer, and check what it received." },
          { q: "A change adds a branch for uneven bills, and the only test divides evenly. What do you ask for?",
            choices: ["Nothing: the existing test still passes, so it's covered", "A test for an uneven split, with the exact shares", "Deleting the existing even test", "A comment explaining the branch"],
            answer: 1, explain: "The new branch never runs in the existing test. The case the change is about needs its own test." },
          { q: "A correct change has good tests, but one test is named \"works\". Verdict?",
            choices: ["Request changes until the test is renamed", "Approve, with a non-blocking note about the name", "Reject the tests and ask for new ones", "Approve, and rename it yourself after merging"],
            answer: 1, explain: "A vague name is worth mentioning, but nothing breaks if it merges." }
        ]
      }
    ]
  });
})();
