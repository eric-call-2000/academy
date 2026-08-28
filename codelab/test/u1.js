/* Testing Fundamentals — Unit 1: Assertions: the smallest test there is */
window.CODELAB.addUnit("test", {
  id: "test-u1",
  title: "Assertions: the smallest test",
  icon: "🧪",
  blurb: "An assertion is a comparison that throws — build assert(), expect().toBe(), toEqual and the whole matcher family by hand.",
  cheat: [
    { h: "An assertion is a throw", lang: "js", code: "function assert(condition, message) {\n  if (!condition) throw new Error(message);\n}\nassert(price >= 0, \"price went negative\");\n// silence = pass, throw = fail", note: "Everything Jest does is built on this one move." },
    { h: "expect().toBe() — identity (===)", lang: "js", code: "function expect(actual) {\n  return {\n    toBe(expected) {\n      if (actual !== expected)\n        throw new Error(`expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`);\n    }\n  };\n}\nexpect(2 + 2).toBe(4);", note: "The matcher still sees `actual` — that's a closure doing real work." },
    { h: "toBe vs toEqual", lang: "js", code: "expect({ a: 1 }).toBe({ a: 1 });    // THROWS — two different objects\nexpect({ a: 1 }).toEqual({ a: 1 }); // passes — same shape\nconst s = { a: 1 };\nexpect(s).toBe(s);                  // passes — literally the same object", note: "toBe = same object; toEqual = same contents, all the way down." },
    { h: "The matcher family", lang: "js", code: "expect(user).toBeTruthy();\nexpect(pack).toContain(\"torch\");\nexpect(() => JSON.parse(\"junk\")).toThrow(); // hand over the FUNCTION\nexpect(0.1 + 0.2).toBeCloseTo(0.3);" },
    { h: "Floats are never exact", lang: "js", code: "0.1 + 0.2                            // 0.30000000000000004\nexpect(0.1 + 0.2).toBe(0.3);         // THROWS\nexpect(0.1 + 0.2).toBeCloseTo(0.3);  // passes", note: "Money math in tests goes through toBeCloseTo, always." }
  ],
  lessons: [

    {
      id: "test-u1-1",
      title: "Why tests exist: the bug that came back",
      kind: "js", chip: "TEST", xp: 15, mins: 13,
      brief: "Three weeks ago the coupon code shipped with a bug: a $4 mug with `SAVE10` rang up at **-$6**. Someone hotfixed it with a clamp. Last week a refactor deleted the clamp — and the bug **came back**. Nobody noticed until a customer did.\n\nBoth times, someone ran the code by hand, eyeballed the output, and it \"looked fine\". What was missing is a check that runs itself and **refuses to stay quiet when the answer is wrong**. In JavaScript that is one move: `throw`.\n\nThe fixed `priceAfterCoupon()` is already in the file — you're not touching it. You're writing your first test: an `assert()` that throws on a lie, and a `checkRegression()` that pins this bug down so it can never sneak back in silence.\n\n(And yes — the checks that have graded you for eight courses are exactly this machine. You're about to own it.)",
      steps: [
        { text: "Write `assert(condition, message)` — if the condition is falsy, `throw new Error(message)`. Truth passes in silence.",
          test: "T.expect(typeof assert === 'function', 'Define assert(condition, message).');\nassert(true, 'a true condition must pass in silence');\nvar threw = false, msg = '';\ntry { assert(false, 'boom'); } catch (e) { threw = true; msg = String(e && e.message); }\nT.expect(threw, 'assert(false, \"boom\") must THROW — an assertion that stays quiet about a lie is not an assertion.');\nT.expect(msg.indexOf('boom') !== -1, 'Throw the message you were given: throw new Error(message). Yours said: \"' + msg + '\"');\nvar threw2 = false;\ntry { assert(1 === 2, 'math broke'); } catch (e) { threw2 = true; }\nT.expect(threw2, 'assert(1 === 2, ...) is just assert(false, ...) — it must throw too.');" },
        { text: "Write `checkRegression()` — asserts that `priceAfterCoupon(5, \"SAVE10\")` is `0` (the boundary that broke, twice) and `priceAfterCoupon(30, \"SAVE10\")` is `20` (the normal case).",
          test: "T.expect(typeof checkRegression === 'function', 'Define checkRegression() — a plain function that calls assert().');\nvar quiet = true, m = '';\ntry { checkRegression(); } catch (e) { quiet = false; m = String(e && e.message); }\nT.expect(quiet, 'checkRegression() threw against the CURRENT, fixed code: \"' + m + '\". While the clamp is in place the check must pass — assert what priceAfterCoupon actually returns today: 0 for (5, \"SAVE10\") and 20 for (30, \"SAVE10\").');" },
        { text: "Prove the check has teeth: when the old bug comes back, `checkRegression()` must throw.",
          test: "T.expect(typeof checkRegression === 'function', 'Define checkRegression() first.');\nvar caught1 = false;\ntry { T.mutate('priceAfterCoupon', function (p, c) { return c === 'SAVE10' ? p - 10 : p; }, function () { checkRegression(); }); } catch (e) { caught1 = true; }\nT.expect(caught1, 'The old bug just came back — a priceAfterCoupon() with no clamp returned -5 for the $5 mug — and checkRegression() stayed silent. Assert the boundary: priceAfterCoupon(5, \"SAVE10\") must be exactly 0.');\nvar caught2 = false;\ntry { T.mutate('priceAfterCoupon', function () { return 0; }, function () { checkRegression(); }); } catch (e) { caught2 = true; }\nT.expect(caught2, 'A priceAfterCoupon() that returns 0 for EVERY price slipped past your check — pin the normal case too: priceAfterCoupon(30, \"SAVE10\") must be exactly 20.');\nvar restored = true;\ntry { checkRegression(); } catch (e) { restored = false; }\nT.expect(restored, 'With the real code back in place, the check must go quiet again — that silence is what a passing test IS.');" }
      ],
      files: [
        { name: "script.js", content: "// ── shipped code (already live — don't edit) ─────────────────────────\n// v1 had no clamp: a $4 mug with SAVE10 rang up at -$6.\n// It got hotfixed… then a refactor deleted the clamp and the bug CAME BACK.\n// The clamp is back (again). Your job: make sure it can never leave quietly.\nfunction priceAfterCoupon(price, coupon) {\n  if (coupon === \"SAVE10\") {\n    return Math.max(0, price - 10);\n  }\n  return price;\n}\n\n// ── your first test ──────────────────────────────────────────────────\n// 1) assert(condition, message) — falsy condition → throw new Error(message).\n//    That's the whole machine. No framework, no library.\n\n// 2) checkRegression() — pin the bug down with assert():\n//      priceAfterCoupon(5, \"SAVE10\")  === 0    (the boundary that broke — twice)\n//      priceAfterCoupon(30, \"SAVE10\") === 20   (the normal case)\n\n// 3) call checkRegression() — silence means the clamp is still there\n" }
      ],
      hints: [
        "assert is three lines: `function assert(condition, message) { if (!condition) throw new Error(message); }`",
        "checkRegression is just calls: `assert(priceAfterCoupon(5, \"SAVE10\") === 0, \"SAVE10 on $5 must clamp to 0\");` — then the same move for the $30 case.",
        "Compare with `===` against an exact number. `assert(priceAfterCoupon(5, \"SAVE10\"))` alone would fail even on correct code — 0 is falsy!"
      ],
      solution: {
        "script.js": "// ── shipped code (already live — don't edit) ─────────────────────────\nfunction priceAfterCoupon(price, coupon) {\n  if (coupon === \"SAVE10\") {\n    return Math.max(0, price - 10);\n  }\n  return price;\n}\n\n// ── your first test ──────────────────────────────────────────────────\nfunction assert(condition, message) {\n  if (!condition) throw new Error(message);\n}\n\nfunction checkRegression() {\n  assert(priceAfterCoupon(5, \"SAVE10\") === 0, \"SAVE10 on a $5 mug must clamp to $0, never go negative\");\n  assert(priceAfterCoupon(30, \"SAVE10\") === 20, \"SAVE10 on $30 must come to $20\");\n}\n\ncheckRegression();\nconsole.log(\"regression check passed — the clamp is still there\");\n"
      }
    },

    {
      id: "test-u1-2",
      title: "expect().toBe(): an assertion is a throw",
      kind: "js", chip: "TEST", xp: 15, mins: 13,
      brief: "`assert(cond, message)` works, but every call site has to hand-write its own message. Frameworks wrap the same throw in a friendlier shape: `expect(actual)` **returns an object** whose methods — *matchers* — carry both the comparison and the error message.\n\n`expect(2).toBe(3)` reads like English and throws like assert. `toBe` is strict `===` — no coercion, ever. And because the returned object's methods can still see `actual`, this is a closure doing real work.\n\nOne rule makes matcher errors great: **name both values**. `expected 2 to be 3` tells you what happened; `assertion failed` tells you to go add console.logs at 2am. You're building `expect().toBe()` from scratch — about six lines, and there is nothing else inside Jest's version but polish.",
      example: { lang: "js", code: "function expect(actual) {\n  return {\n    toBe(expected) {\n      // throw when actual !== expected — and name BOTH values\n    }\n  };\n}" },
      steps: [
        { text: "`expect(actual)` returns an object with `toBe(expected)`: truths pass in silence, lies throw.",
          test: "T.expect(typeof expect === 'function', 'Define expect(actual).');\nvar m = expect(2);\nT.expect(m && typeof m.toBe === 'function', 'expect(2) must RETURN an object carrying a toBe method.');\nexpect(2).toBe(2);\nexpect('ada').toBe('ada');\nvar threw = false;\ntry { expect(2).toBe(3); } catch (e) { threw = true; }\nT.expect(threw, 'expect(2).toBe(3) must THROW — that is all an assertion is: a comparison with a throw inside.');" },
        { text: "The error message names **both** values — what you got and what you wanted.",
          test: "var msg = '';\ntry { expect(2).toBe(3); } catch (e) { msg = String(e && e.message); }\nT.expect(/2/.test(msg) && /3/.test(msg), 'The error must name BOTH values, so a failing test explains itself without a debugger. Yours said: \"' + msg + '\"');\nvar msg2 = '';\ntry { expect('ada').toBe('grace'); } catch (e) { msg2 = String(e && e.message); }\nT.expect(/ada/.test(msg2) && /grace/.test(msg2), 'Same for strings — got AND wanted in the message. Yours said: \"' + msg2 + '\"');" },
        { text: "`toBe` is `===`, not `==` — no type coercion sneaks a bug past it.",
          test: "var threw = false;\ntry { expect(2).toBe('2'); } catch (e) { threw = true; }\nT.expect(threw, 'expect(2).toBe(\"2\") must throw — the number 2 and the string \"2\" are different values, and a matcher that shrugs at types (==) waves real bugs through.');\nvar threw2 = false;\ntry { expect(0).toBe(false); } catch (e) { threw2 = true; }\nT.expect(threw2, 'expect(0).toBe(false) must throw too — === never coerces.');\nexpect(0).toBe(0);" }
      ],
      files: [
        { name: "script.js", content: "// expect(actual) returns an object of matchers. First matcher: toBe.\n//   pass  → return in silence\n//   fail  → throw new Error(...) naming BOTH values\n// Tip: JSON.stringify(actual) in the message shows 2 vs \"2\" honestly.\n\nfunction expect(actual) {\n  return {\n    toBe(expected) {\n      // your throw goes here\n    }\n  };\n}\n\nexpect(2).toBe(2);            // silence — a pass\n// expect(2).toBe(3);         // uncomment to watch it throw\nconsole.log(\"expect().toBe() survived its own checks\");\n" }
      ],
      hints: [
        "The whole matcher: `if (actual !== expected) throw new Error(...)` — strict `!==`, nothing more.",
        "Name both values with a template literal: `` throw new Error(`expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`); ``"
      ],
      solution: {
        "script.js": "function expect(actual) {\n  return {\n    toBe(expected) {\n      if (actual !== expected) {\n        throw new Error(`expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`);\n      }\n    }\n  };\n}\n\nexpect(2).toBe(2);            // silence — a pass\nconsole.log(\"expect().toBe() survived its own checks\");\n"
      }
    },

    {
      id: "test-u1-3",
      title: "toEqual: why {a:1} isn't {a:1}",
      kind: "js", chip: "TEST", xp: 15, mins: 12,
      brief: "Here is the #1 confused-beginner failure in all of testing: `expect({ a: 1 }).toBe({ a: 1 })` — **fails**. Both sides look identical. But every `{ … }` literal builds a fresh object, and `toBe` is `===`, which compares *which object*, not *what's inside*.\n\nSo matchers come in two flavors: **identity** (`toBe` — literally the same object) and **equality** (`toEqual` — same shape and contents, checked all the way down).\n\nYou'll add `toEqual` next to your `toBe`. The honest shortcut for today: `JSON.stringify` both sides and compare the strings. Real frameworks recurse property-by-property (and survive key-order changes) — but the one-line trick teaches the same idea, and it makes the failure message write itself.",
      steps: [
        { text: "Add `toEqual(expected)` — same shape passes, different shape throws, and the message names **both** shapes.",
          test: "T.expect(typeof expect === 'function', 'Keep expect() from last lesson.');\nexpect({ a: 1 }).toEqual({ a: 1 });\nexpect([1, 2]).toEqual([1, 2]);\nvar threw = false, msg = '';\ntry { expect([1, 2]).toEqual([1, 3]); } catch (e) { threw = true; msg = String(e && e.message); }\nT.expect(threw, 'expect([1,2]).toEqual([1,3]) must throw — the contents differ.');\nT.expect(/\\[1,2\\]/.test(msg) && /\\[1,3\\]/.test(msg), 'Name both shapes in the message — JSON.stringify writes them for you. Yours said: \"' + msg + '\"');" },
        { text: "The lesson's headline: two identical-looking literals **fail** `toBe` — and the *same* object passes it.",
          test: "var threw = false;\ntry { expect({ a: 1 }).toBe({ a: 1 }); } catch (e) { threw = true; }\nT.expect(threw, 'expect({a:1}).toBe({a:1}) must THROW: toBe is ===, and two object literals are two different objects in memory. Same-shaped is not same-object.');\nvar sameObj = { a: 1 };\nexpect(sameObj).toBe(sameObj);\nexpect(sameObj).toEqual({ a: 1 });" },
        { text: "Deep means all the way down: nested objects and arrays compare by contents too.",
          test: "expect({ user: { id: 7, tags: ['admin'] } }).toEqual({ user: { id: 7, tags: ['admin'] } });\nvar threw = false;\ntry { expect([1, [2, 3]]).toEqual([1, [2, 4]]); } catch (e) { threw = true; }\nT.expect(threw, '[1,[2,3]] vs [1,[2,4]] differ inside the NESTED array — toEqual must catch differences at any depth, not just the top level.');" }
      ],
      files: [
        { name: "script.js", content: "// Your expect() from last lesson, plus one new matcher: toEqual.\n// Compare CONTENTS, not identity — JSON.stringify both sides and\n// compare the strings. Throw a message naming both shapes.\n\nfunction expect(actual) {\n  return {\n    toBe(expected) {\n      if (actual !== expected) {\n        throw new Error(`expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`);\n      }\n    },\n    toEqual(expected) {\n      // deep comparison goes here\n    }\n  };\n}\n\nexpect({ a: 1 }).toEqual({ a: 1 });   // should stay silent once toEqual works\nconsole.log(\"toEqual ready\");\n" }
      ],
      hints: [
        "One line of logic: `if (JSON.stringify(actual) !== JSON.stringify(expected)) throw new Error(...)`.",
        "The message writes itself: `` `expected ${JSON.stringify(actual)} to equal ${JSON.stringify(expected)}` `` — stringify once into variables if you prefer."
      ],
      solution: {
        "script.js": "function expect(actual) {\n  return {\n    toBe(expected) {\n      if (actual !== expected) {\n        throw new Error(`expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`);\n      }\n    },\n    toEqual(expected) {\n      if (JSON.stringify(actual) !== JSON.stringify(expected)) {\n        throw new Error(`expected ${JSON.stringify(actual)} to equal ${JSON.stringify(expected)}`);\n      }\n    }\n  };\n}\n\nexpect({ a: 1 }).toEqual({ a: 1 });   // silence — a pass\nconsole.log(\"toEqual ready\");\n"
      }
    },

    {
      id: "test-u1-4",
      title: "The matcher family: truthy, contain, throw, close",
      kind: "js", chip: "TEST", xp: 15, mins: 15,
      brief: "Four more matchers cover ~90% of the assertions you'll ever write:\n\n- `toBeTruthy()` — the value counts as true. Handy, but lazy on its own: a wrong-but-truthy answer slips right through (Unit 3 makes you pay for that).\n- `toContain(item)` — an array holds an item, or a string holds a substring. `.includes()` does both.\n- `toThrow()` — a **function** blows up when called. You hand over the function itself; the matcher calls it inside its own try/catch.\n- `toBeCloseTo(want, tol)` — floats. `0.1 + 0.2` is `0.30000000000000004`; that's not a JavaScript bug, it's binary floating point. Money math asserts closeness, never `toBe`.\n\nSame pattern every time: compare, and on failure throw a message that names the values involved.",
      steps: [
        { text: "`toBeTruthy()` — truthy passes, falsy throws with the value named.",
          test: "expect(1).toBeTruthy();\nexpect('hello').toBeTruthy();\nexpect([]).toBeTruthy();\nvar threw = false, msg = '';\ntry { expect(0).toBeTruthy(); } catch (e) { threw = true; msg = String(e && e.message); }\nT.expect(threw, 'expect(0).toBeTruthy() must throw — 0 is falsy.');\nT.expect(/0/.test(msg), 'Name the value that failed, so the error reads like a sentence. Yours said: \"' + msg + '\"');\nvar threw2 = false;\ntry { expect('').toBeTruthy(); } catch (e) { threw2 = true; }\nT.expect(threw2, 'The empty string is falsy too — it must throw.');" },
        { text: "`toContain(item)` — arrays and strings, via `.includes()`; a miss throws and names the missing item.",
          test: "expect([1, 2, 3]).toContain(2);\nexpect(['map', 'rope']).toContain('rope');\nexpect('backlog').toContain('log');\nvar threw = false, msg = '';\ntry { expect(['map', 'rope']).toContain('torch'); } catch (e) { threw = true; msg = String(e && e.message); }\nT.expect(threw, \"expect(['map','rope']).toContain('torch') must throw — no torch in the pack.\");\nT.expect(/torch/.test(msg), 'Name the missing item in the message. Yours said: \"' + msg + '\"');\nvar threw2 = false;\ntry { expect('backlog').toContain('cat'); } catch (e) { threw2 = true; }\nT.expect(threw2, 'Strings use the same matcher: \"backlog\" does not contain \"cat\".');" },
        { text: "`toThrow()` — call `actual()` inside your own try/catch; a throw is a **pass**, a calm return is a **fail**.",
          test: "expect(function () { throw new Error('kaboom'); }).toThrow();\nexpect(function () { JSON.parse('not json'); }).toThrow();\nvar threw = false;\ntry { expect(function () { return 42; }).toThrow(); } catch (e) { threw = true; }\nT.expect(threw, 'A function that returns calmly must FAIL toThrow — catch the explosion, and only complain when nothing blew up.');" },
        { text: "`toBeCloseTo(expected, tolerance)` — default tolerance tiny (`1e-9`); `0.1 + 0.2` finally has a matcher.",
          test: "expect(0.1 + 0.2).toBeCloseTo(0.3);\nvar threw = false;\ntry { expect(0.1 + 0.2).toBe(0.3); } catch (e) { threw = true; }\nT.expect(threw, 'expect(0.1 + 0.2).toBe(0.3) must throw — 0.1 + 0.2 is 0.30000000000000004. Binary floats cannot store 0.1 exactly; this is exactly why toBeCloseTo exists.');\nvar threw2 = false;\ntry { expect(0.31).toBeCloseTo(0.3); } catch (e) { threw2 = true; }\nT.expect(threw2, 'A hundredth off is NOT close by default — keep the default tolerance tiny (1e-9), or the matcher waves real rounding bugs through.');\nexpect(0.31).toBeCloseTo(0.3, 0.05);\nexpect(10).toBeCloseTo(10);" }
      ],
      files: [
        { name: "script.js", content: "// Your expect() so far, plus four new matchers. Each one: compare,\n// and on failure throw a message naming the values involved.\n\nfunction expect(actual) {\n  return {\n    toBe(expected) {\n      if (actual !== expected) {\n        throw new Error(`expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`);\n      }\n    },\n    toEqual(expected) {\n      if (JSON.stringify(actual) !== JSON.stringify(expected)) {\n        throw new Error(`expected ${JSON.stringify(actual)} to equal ${JSON.stringify(expected)}`);\n      }\n    },\n    toBeTruthy() {\n      // falsy actual → throw, naming actual\n    },\n    toContain(expected) {\n      // arrays AND strings: actual.includes(expected)\n    },\n    toThrow() {\n      // call actual() in a try/catch — throw only if it DIDN'T\n    },\n    toBeCloseTo(expected, tolerance = 1e-9) {\n      // Math.abs(actual - expected) > tolerance → throw\n    }\n  };\n}\n\nexpect(0.1 + 0.2).toBeCloseTo(0.3);   // silent once the family is complete\nconsole.log(\"matcher family assembled\");\n" }
      ],
      hints: [
        "toBeTruthy: `` if (!actual) throw new Error(`expected ${JSON.stringify(actual)} to be truthy`); ``",
        "toContain: `if (!actual.includes(expected)) throw new Error(...)` — `.includes` works on arrays and strings alike.",
        "toThrow flips the logic: `try { actual(); } catch (e) { return; } throw new Error(\"expected the function to throw, but it returned calmly\");`"
      ],
      solution: {
        "script.js": "function expect(actual) {\n  return {\n    toBe(expected) {\n      if (actual !== expected) {\n        throw new Error(`expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`);\n      }\n    },\n    toEqual(expected) {\n      if (JSON.stringify(actual) !== JSON.stringify(expected)) {\n        throw new Error(`expected ${JSON.stringify(actual)} to equal ${JSON.stringify(expected)}`);\n      }\n    },\n    toBeTruthy() {\n      if (!actual) {\n        throw new Error(`expected ${JSON.stringify(actual)} to be truthy`);\n      }\n    },\n    toContain(expected) {\n      if (!actual.includes(expected)) {\n        throw new Error(`expected ${JSON.stringify(actual)} to contain ${JSON.stringify(expected)}`);\n      }\n    },\n    toThrow() {\n      try { actual(); } catch (e) { return; }\n      throw new Error(\"expected the function to throw, but it returned calmly\");\n    },\n    toBeCloseTo(expected, tolerance = 1e-9) {\n      if (Math.abs(actual - expected) > tolerance) {\n        throw new Error(`expected ${actual} to be close to ${expected} (within ${tolerance})`);\n      }\n    }\n  };\n}\n\nexpect(0.1 + 0.2).toBeCloseTo(0.3);   // silent — the family is complete\nconsole.log(\"matcher family assembled\");\n"
      }
    },

    {
      id: "test-quiz-1",
      title: "Unit 1 quiz: Assertions",
      kind: "quiz", xp: 10,
      brief: "What an assertion is, why toBe betrays object literals, and why floats need closeness. 80% to pass.",
      questions: [
        { q: "A test assertion \"fails\". Mechanically, what actually happened?",
          choices: ["It returned `false` to the caller", "It logged the failure to the console", "It threw an error", "It set a global failure flag"],
          answer: 2, explain: "An assertion is a comparison with a `throw` inside — pass means it returns in silence, fail means it throws. Everything a framework does on top (red output, failure counts, exit codes) is built by catching that throw. Nothing returns false, logs, or sets flags; the throw IS the failure signal." },
        { q: "Why does this throw, even though both sides look identical?",
          code: "expect({ a: 1 }).toBe({ a: 1 });",
          lang: "js",
          choices: ["Two literals build two different objects, and `toBe` compares identity", "Objects can never be compared in JavaScript", "`toBe` only works on primitive values like numbers and strings, never on objects", "The property name `a` collides with a reserved word"],
          answer: 0, explain: "Every `{ a: 1 }` literal allocates a fresh object, so `===` — which is all `toBe` is — sees two different objects and throws. Same-shaped is not same-object. When you mean \"same contents\", reach for `toEqual`, which compares the shapes deeply instead of asking which object it is." },
        { q: "Your price test does `expect(sum).toBe(0.3)` and fails: got `0.30000000000000004`. Which matcher is the right fix?",
          choices: ["`toEqual`", "`toBeCloseTo`", "`toBeTruthy`", "`toContain`"],
          answer: 1, explain: "Binary floating point cannot represent 0.1 exactly, so `0.1 + 0.2` lands a hair off 0.3 and every exact comparison — `toBe` or `toEqual` alike — fails. `toBeCloseTo` asserts the difference is within a tiny tolerance, which is the honest claim to make about float math. Never test floats for exact equality." },
        { q: "Why isn't `console.log(total(cart))` plus reading the output a test?",
          choices: ["`console.log` slows the suite down far too much to run on every save", "Log output is not allowed inside functions while they are under test", "Logging changes the value being tested", "Nothing throws, so a wrong value fails only if a human notices"],
          answer: 3, explain: "A log line has no opinion — right and wrong values print with equal cheerfulness, so \"failing\" depends on a human reading the output and remembering the correct answer. An assertion encodes the expected value and throws on its own, which is what lets hundreds of checks run unattended. Eyeballing stops working the day after you wrote the code." },
        { q: "Why must `toThrow` be handed the function itself, wrapped in an arrow?",
          code: "expect(() => JSON.parse(raw)).toThrow();  // works\nexpect(JSON.parse(raw)).toThrow();        // crashes the test — why?",
          lang: "js",
          choices: ["The matcher must call it inside its own try/catch; calling it yourself explodes before `expect` runs", "Matchers require arrow functions because regular functions lose their `this` binding inside `expect`", "`JSON.parse` is not allowed to appear inside an `expect` call", "The function must be converted to a string before it can throw"],
          answer: 0, explain: "Arguments are evaluated before the call: `expect(JSON.parse(raw))` runs the parse — and throws — before `expect` ever executes, crashing the test instead of asserting. Wrapped in an arrow, the code travels into the matcher unrun, and `toThrow` calls it inside its own try/catch, where the explosion becomes a pass. Arrows aren't special here; any function wrapper works." },
        { q: "Which matcher passes when two DIFFERENT arrays hold the same items?",
          choices: ["`toBe`", "`toContain`", "`toEqual`", "`toBeTruthy`"],
          answer: 2, explain: "`toEqual` compares contents — same shape and values at every depth means pass — so two separately built `[1, 2]` arrays are equal. `toBe` is `===` identity and only passes when both sides are literally the same array in memory. `toContain` asks whether one item is present, not whether two whole shapes match." }
      ]
    }
  ]
});
