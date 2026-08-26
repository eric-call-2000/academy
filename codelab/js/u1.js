/* Unit 4 — Fundamentals of JavaScript */
window.CODELAB.addUnit("js", {
  id: "js1",
  title: "Fundamentals of JavaScript",
  icon: "⚡",
  color: "#1cb0f6",
  blurb: "The language of the web — variables, logic, functions and loops.",
  cheat: [
    { h: "Variables", lang: "js", code: "const city = \"Lisbon\";  // can't be reassigned\nlet score = 0;           // can be reassigned\nscore = 10;", note: "Default to `const`; use `let` only when the value must change." },
    { h: "Strings & template literals", lang: "js", code: "const who = \"world\";\nconst greeting = `Hello, ${who}!`;  // backticks + ${ }\ngreeting.toUpperCase(); // \"HELLO, WORLD!\"" },
    { h: "Comparisons & if/else", lang: "js", code: "if (age >= 18) {\n  message = \"welcome in\";\n} else {\n  message = \"come back later\";\n}", note: "Use `===` for equality (not `==`), `!==` for not-equal." },
    { h: "Functions", lang: "js", code: "function greet(person) {\n  return `Hello, ${person}!`;\n}\n\nconst double = (n) => n * 2;  // arrow form", note: "`return` sends a value back to whoever called the function." },
    { h: "Loops", lang: "js", code: "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}", note: "start; keep-going condition; step." }
  ],
  lessons: [

    {
      id: "js-1",
      title: "Variables: const & let",
      kind: "js", chip: "JS", xp: 15,
      brief: "Time for **JavaScript** — the language that makes pages *do things*, and (with Node.js) runs servers too. This unit runs pure JS: press **Run** and watch the **Output** tab.\n\nVariables store values:\n\n- `const` — a name whose value won't be reassigned (your default)\n- `let` — a value that will change\n\n`console.log(...)` prints to the console — your best friend for the rest of your career.",
      steps: [
        { text: "Create a `const` named `city` holding the name of a city (a string in quotes).",
          test: "T.expect(typeof city === 'string' && city.length > 0, 'Declare const city = \"…\" with some text in quotes.');" },
        { text: "Create a `let` named `score` starting at any number, then **reassign** it to `100`.",
          test: "T.expect(typeof score === 'number', 'Declare let score = 0 (a number, no quotes).');\nT.expect(score === 100, 'After declaring score, reassign it: score = 100;');" },
        { text: "Print both with `console.log`.",
          test: "T.expect(T.logs().length >= 1, 'Call console.log(city, score); so something shows in the console.');\nT.expect(T.logged(city) && T.logged('100'), 'Log BOTH values (their text should appear in the console).');" }
      ],
      files: [
        { name: "script.js", content: "// 1) const city = ...\n\n// 2) let score = ... then reassign to 100\n\n// 3) print them\n" }
      ],
      hints: [
        "Strings need quotes: `const city = \"Tokyo\";` — numbers don't: `let score = 0;`",
        "Reassigning uses no keyword: `score = 100;`",
        "One log call can print both: `console.log(city, score);`"
      ],
      solution: {
        "script.js": "// 1) const city = ...\nconst city = \"Tokyo\";\n\n// 2) let score = ... then reassign to 100\nlet score = 0;\nscore = 100;\n\n// 3) print them\nconsole.log(city, score);\n"
      }
    },

    {
      id: "js-2",
      title: "Numbers & math",
      kind: "js", chip: "JS", xp: 15,
      brief: "JavaScript does arithmetic with the usual symbols: `+ - * /`, plus `%` (**remainder**) — great for \"is this divisible?\" checks.\n\nYou're building a checkout: compute the order total from a price and a quantity.",
      steps: [
        { text: "Create `total` = `price` **times** `quantity` (use the variables, not 14.97!).",
          test: "T.expect(typeof total === 'number', 'Declare const total as a number.');\nT.close(total, price * quantity, 0.001, 'total should equal price * quantity');" },
        { text: "Create `remainder` = `17 % 5`.",
          test: "T.expect(typeof remainder === 'number', 'Declare const remainder.');\nT.eq(remainder, 2, '17 % 5 asks: what is LEFT OVER after dividing 17 by 5?');" },
        { text: "Log the total.",
          test: "T.expect(T.logged(String(total).slice(0, 4)), 'console.log(total);');" }
      ],
      files: [
        { name: "script.js", content: "const price = 4.99;\nconst quantity = 3;\n\n// 1) const total = ...\n\n// 2) const remainder = 17 % 5\n\n// 3) log the total\n" }
      ],
      hints: [
        "Multiply with `*`: `const total = price * quantity;`",
        "`%` gives what's LEFT OVER: 17 % 5 → 2, because 5 fits three times (15) with 2 left."
      ],
      solution: {
        "script.js": "const price = 4.99;\nconst quantity = 3;\n\nconst total = price * quantity;\n\nconst remainder = 17 % 5;\n\nconsole.log(total);\n"
      }
    },

    {
      id: "js-3",
      title: "Strings & template literals",
      kind: "js", chip: "JS", xp: 15,
      brief: "Strings hold text. You can glue them with `+`, but **template literals** are nicer: backticks with `${expression}` slots.\n\nStrings also carry built-in methods: `.toUpperCase()`, `.length`, `.includes()` and dozens more.",
      example: { lang: "js", code: "const who = \"Ada\";\nconst line = `Hello, ${who}!`; // \"Hello, Ada!\"" },
      steps: [
        { text: "Combine `firstName` and `lastName` into `fullName` with a space between.",
          test: "T.expect(typeof fullName === 'string', 'Declare const fullName as a string.');\nT.eq(fullName, firstName + ' ' + lastName, 'fullName should be firstName + space + lastName');" },
        { text: "Use a **template literal** to build `greeting` = `` `Welcome back, ${fullName}!` ``",
          test: "T.eq(greeting, 'Welcome back, ' + fullName + '!', 'greeting should be exactly: Welcome back, <fullName>!');" },
        { text: "Create `shout` — the greeting in ALL CAPS via `.toUpperCase()`.",
          test: "T.eq(shout, ('Welcome back, ' + fullName + '!').toUpperCase(), 'shout should be greeting.toUpperCase()');" }
      ],
      files: [
        { name: "script.js", content: "const firstName = \"Grace\";\nconst lastName = \"Hopper\";\n\n// 1) const fullName = ...\n\n// 2) const greeting = `Welcome back, ${...}!`\n\n// 3) const shout = ...\n\nconsole.log(greeting);\n" }
      ],
      hints: [
        "Gluing with +: `firstName + \" \" + lastName` — don't forget the space string.",
        "Template literals use BACKTICKS ` not quotes, and ${ } for variables.",
        "Methods chain off the value: `greeting.toUpperCase()`."
      ],
      solution: {
        "script.js": "const firstName = \"Grace\";\nconst lastName = \"Hopper\";\n\nconst fullName = firstName + \" \" + lastName;\n\nconst greeting = `Welcome back, ${fullName}!`;\n\nconst shout = greeting.toUpperCase();\n\nconsole.log(greeting);\n"
      }
    },

    {
      id: "js-4",
      title: "Booleans & if/else",
      kind: "js", chip: "JS", xp: 15,
      brief: "Programs make decisions. Comparisons produce **booleans** (`true`/`false`):\n\n- `>=`, `>`, `<`, `<=` — size comparisons\n- `===` equal, `!==` not equal (always the triple version!)\n\nThen `if / else` branches on them. You're writing a club's door policy. 🚪",
      steps: [
        { text: "Create `isAdult` — a comparison checking `age >= 18` (use the variable!).",
          test: "T.expect(typeof isAdult === 'boolean', 'isAdult should be a boolean made from a comparison.');\nT.eq(isAdult, age >= 18, 'isAdult must be the result of age >= 18');" },
        { text: "Use `if/else` to set `message` to **\"welcome in\"** when adult, otherwise **\"come back later\"**.",
          test: "T.expect(typeof message === 'string', 'Declare message with let, then set it inside if/else.');\nvar want = (age >= 18) ? 'welcome in' : 'come back later';\nT.eq(message.toLowerCase(), want, 'With age = ' + age + ', message should be \"' + want + '\"');" },
        { text: "Log the message.",
          test: "T.expect(T.logged(message), 'console.log(message);');" }
      ],
      files: [
        { name: "script.js", content: "const age = 20;\n\n// 1) const isAdult = ...\n\n// 2) let message;\n//    if (...) { ... } else { ... }\n\n// 3) log it\n" }
      ],
      hints: [
        "`const isAdult = age >= 18;` — the comparison itself IS the boolean.",
        "Pattern: `let message; if (isAdult) { message = \"welcome in\"; } else { message = \"come back later\"; }`"
      ],
      solution: {
        "script.js": "const age = 20;\n\nconst isAdult = age >= 18;\n\nlet message;\nif (isAdult) {\n  message = \"welcome in\";\n} else {\n  message = \"come back later\";\n}\n\nconsole.log(message);\n"
      }
    },

    {
      id: "js-5",
      title: "Functions",
      kind: "js", chip: "JS", xp: 15,
      brief: "**Functions** are recipes: inputs (parameters) in, `return` value out, reusable forever. They're the single most important building block in programming.\n\nTwo spellings you'll see everywhere:\n\n- `function greet(person) { return … }`\n- `const double = (n) => n * 2;` — an **arrow function**",
      steps: [
        { text: "Write a function `greet(person)` that **returns** `` `Hello, ${person}!` ``",
          test: "T.expect(typeof greet === 'function', 'Define a function named greet.');\nT.eq(greet('Ada'), 'Hello, Ada!', 'greet(\"Ada\")');\nT.eq(greet('Sam'), 'Hello, Sam!', 'greet(\"Sam\") — use the parameter, not a fixed name!');" },
        { text: "Write an **arrow function** `double` that returns its input times 2.",
          test: "T.expect(typeof double === 'function', 'Define const double = (n) => …');\nT.eq(double(4), 8, 'double(4)');\nT.eq(double(-3), -6, 'double(-3)');" },
        { text: "Log `greet(\"world\")`.",
          test: "T.expect(T.logged('hello, world'), 'console.log(greet(\"world\"));');" }
      ],
      files: [
        { name: "script.js", content: "// 1) function greet(person) { return ... }\n\n// 2) const double = (n) => ...\n\n// 3) console.log(greet(\"world\"));\n" }
      ],
      hints: [
        "Without `return`, a function hands back `undefined` — returning is not the same as logging!",
        "Arrow one-liners return automatically: `const double = (n) => n * 2;`"
      ],
      solution: {
        "script.js": "function greet(person) {\n  return `Hello, ${person}!`;\n}\n\nconst double = (n) => n * 2;\n\nconsole.log(greet(\"world\"));\n"
      }
    },

    {
      id: "js-6",
      title: "Loops",
      kind: "js", chip: "JS", xp: 15,
      brief: "Computers shine at repetition. A `for` loop runs code over and over:\n\n`for (let i = 1; i <= 5; i++) { … }` → *start at 1; keep going while ≤ 5; add 1 each time.*\n\nMission: a rocket countdown, and a bit of math Gauss did in grade school.",
      steps: [
        { text: "Loop from **5 down to 1**, logging each number, then log **\"Liftoff!\"**",
          test: "T.expect(T.logged('5') && T.logged('4') && T.logged('3') && T.logged('2') && T.logged('1'), 'Count DOWN from 5 to 1 with console.log in a loop.');\nT.expect(T.logged('liftoff'), 'After the loop, console.log(\"Liftoff!\");');" },
        { text: "Use a loop to add up **1 through 100** into `total`.",
          test: "T.expect(typeof total === 'number', 'Declare let total = 0 before the loop.');\nT.eq(total, 5050, 'Adding 1+2+…+100 inside the loop should give 5050');" }
      ],
      files: [
        { name: "script.js", content: "// 1) countdown 5 → 1, then \"Liftoff!\"\n//    hint: for (let i = 5; i >= 1; i--) { ... }\n\n// 2) sum 1..100\nlet total = 0;\n// for ( ... ) { total = total + i; }\n\nconsole.log(\"total:\", total);\n" }
      ],
      hints: [
        "Counting down flips the pieces: start at 5, run while `i >= 1`, step with `i--`.",
        "For the sum: `for (let i = 1; i <= 100; i++) { total += i; }`"
      ],
      solution: {
        "script.js": "for (let i = 5; i >= 1; i--) {\n  console.log(i);\n}\nconsole.log(\"Liftoff!\");\n\nlet total = 0;\nfor (let i = 1; i <= 100; i++) {\n  total += i;\n}\n\nconsole.log(\"total:\", total);\n"
      }
    },

    {
      id: "js-quiz-1",
      title: "JavaScript I checkpoint quiz",
      kind: "quiz", xp: 10,
      questions: [
        { q: "Which declaration should you reach for **by default**?",
          choices: ["`const`", "`let`", "`var`", "No keyword at all"],
          answer: 0, explain: "const by default; let when reassignment is needed; var is the legacy form to avoid." },
        { q: "What does this print?",
          code: "const n = 7;\nconsole.log(n % 2);",
          lang: "js",
          choices: ["1", "3.5", "0", "7"],
          answer: 0, explain: "% is the remainder: 7 divided by 2 is 3 remainder **1**. (n % 2 === 1 is the classic odd-number check.)" },
        { q: "Which builds the string correctly with a template literal?",
          code: "const who = \"Ada\";",
          lang: "js",
          choices: ["`` `Hi, ${who}!` ``", "\"Hi, ${who}!\"", "'Hi, + who + !'", "`Hi, {who}!`"],
          answer: 0, explain: "Template literals need BACKTICKS and ${ } — with plain quotes, ${who} is just text." },
        { q: "What's the difference between `=` and `===`?",
          choices: ["`=` assigns a value; `===` compares two values", "They're identical", "`===` assigns; `=` compares", "`===` only works on numbers"],
          answer: 0, explain: "One = assigns. Three === compares strictly (and beats == which does sneaky type conversions)." },
        { q: "What does this return for `mystery(10)`?",
          code: "function mystery(n) {\n  if (n > 5) return \"big\";\n  return \"small\";\n}",
          lang: "js",
          choices: ["\"big\"", "\"small\"", "undefined", "true"],
          answer: 0, explain: "10 > 5, so the first return fires and the function exits immediately with \"big\"." },
        { q: "How many times does this loop run?",
          code: "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
          lang: "js",
          choices: ["3 times (0, 1, 2)", "4 times (0–3)", "2 times (1, 2)", "Forever"],
          answer: 0, explain: "i takes 0, 1, 2 — at i = 3 the condition i < 3 fails and the loop stops." }
      ]
    },

    {
      id: "js-project-1",
      title: "Project: FizzBuzz",
      kind: "js", chip: "JS", xp: 40, project: true,
      brief: "The most famous interview question in programming: **FizzBuzz**. Write `fizzbuzz(n)`:\n\n- divisible by 3 **and** 5 → return `\"FizzBuzz\"`\n- divisible by 3 → return `\"Fizz\"`\n- divisible by 5 → return `\"Buzz\"`\n- otherwise → return the number itself\n\n`%` is your tool: `n % 3 === 0` means \"divisible by 3\". Watch the order of your checks — test the *and* case first!",
      steps: [
        { text: "`fizzbuzz` is a function that returns plain numbers when nothing divides.",
          test: "T.expect(typeof fizzbuzz === 'function', 'Define function fizzbuzz(n) { … }');\nT.eq(fizzbuzz(1), 1, 'fizzbuzz(1)');\nT.eq(fizzbuzz(7), 7, 'fizzbuzz(7)');" },
        { text: "Multiples of 3 → `\"Fizz\"`.",
          test: "T.eq(fizzbuzz(3), 'Fizz', 'fizzbuzz(3)');\nT.eq(fizzbuzz(9), 'Fizz', 'fizzbuzz(9)');" },
        { text: "Multiples of 5 → `\"Buzz\"`.",
          test: "T.eq(fizzbuzz(5), 'Buzz', 'fizzbuzz(5)');\nT.eq(fizzbuzz(20), 'Buzz', 'fizzbuzz(20)');" },
        { text: "Multiples of both → `\"FizzBuzz\"` (this is where check-order matters).",
          test: "T.eq(fizzbuzz(15), 'FizzBuzz', 'fizzbuzz(15)');\nT.eq(fizzbuzz(30), 'FizzBuzz', 'fizzbuzz(30)');" },
        { text: "Loop 1–20 and log each result.",
          test: "T.expect(T.logged('fizzbuzz') && T.logged('fizz') && T.logged('buzz') && T.logged('19'), 'Loop i = 1..20 and console.log(fizzbuzz(i)); each time.');" }
      ],
      files: [
        { name: "script.js", content: "// The classic. You've got this.\n\nfunction fizzbuzz(n) {\n  // your logic here\n}\n\n// then: loop 1..20, logging fizzbuzz(i)\n" }
      ],
      hints: [
        "Check the combined case FIRST: `if (n % 3 === 0 && n % 5 === 0) return \"FizzBuzz\";`",
        "Then `if (n % 3 === 0) return \"Fizz\";`, then the same for 5, then `return n;`",
        "The loop: `for (let i = 1; i <= 20; i++) { console.log(fizzbuzz(i)); }`"
      ],
      solution: {
        "script.js": "function fizzbuzz(n) {\n  if (n % 3 === 0 && n % 5 === 0) return \"FizzBuzz\";\n  if (n % 3 === 0) return \"Fizz\";\n  if (n % 5 === 0) return \"Buzz\";\n  return n;\n}\n\nfor (let i = 1; i <= 20; i++) {\n  console.log(fizzbuzz(i));\n}\n"
      }
    }
  ]
});
