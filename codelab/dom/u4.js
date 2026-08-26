/* Building Interactive Websites — Unit 4: Forms & validation UI */
window.CODELAB.addUnit("dom", {
  id: "dom-u4",
  title: "Forms & validation UI",
  icon: "📝",
  blurb: "Read what users type, pick, and tick — then validate it live and build a multi-step form.",
  cheat: [
    { h: "Inputs give STRINGS", lang: "js", code: "const bill = Number(billInput.value); // \"80\" → 80\nconst tip = Number(tipInput.value);", note: "Every .value is a string — even type=\"number\". Convert before math, or + will concatenate: \"80\" + \"20\" is \"8020\"." },
    { h: "Checkboxes & radios", lang: "js", code: "box.checked                    // true / false — the LIVE state\nconst crust = document.querySelector('input[name=\"crust\"]:checked');\nconst ticked = document.querySelectorAll(\".topping:checked\");" },
    { h: "Selects", lang: "js", code: "const size = sizeSelect.value; // the chosen <option>'s value" },
    { h: "Live validation", lang: "js", code: "field.addEventListener(\"input\", () => {\n  const ok = field.value.length >= 3;\n  errorEl.textContent = ok ? \"\" : \"Too short\";\n  field.classList.toggle(\"invalid\", !ok);\n  field.classList.toggle(\"valid\", ok);\n});" },
    { h: "Gate the submit button", lang: "js", code: "joinBtn.disabled = !(usernameOk && emailOk);", note: "Re-check after EVERY input event, not just once at load." }
  ],
  lessons: [

    {
      id: "dom-u4-1",
      title: "Reading form values",
      kind: "web", chip: "DOM", xp: 15, mins: 12,
      brief: "Time to read what users **type**. Every input carries its current content in `.value` — but here's the trap that bites every beginner: **`.value` is always a string**, even for `type=\"number\"`. `\"80\" + \"20\"` is `\"8020\"`, not 100.\n\n- `input.value` — the text in the field right now\n- `Number(...)` — convert before doing math\n- read the values **inside** the click handler, so every click uses fresh numbers\n\nBuild the restaurant classic: a split-the-bill calculator with tip.",
      steps: [
        { text: "Wire `#calcBtn`: on click, read `#bill` and `#tip`, convert with `Number(...)`, and show the total (bill + tip) in `#total`.",
          test: "T.type('#bill', '80');\nT.type('#tip', '20');\nT.click('#calcBtn');\nvar t = (T.text('#total') || '');\nT.expect(t.indexOf('8016') === -1, 'You got 8016 — that is the STRING \"80\" glued to the tip. Wrap each .value in Number() before doing math.');\nT.expect(t.indexOf('96') !== -1, 'Bill 80 + a 20% tip should show a total of 96 — inside the click handler: total = bill + bill * (tip / 100), then set #total.');" },
        { text: "Split it: read `#people` too, divide the total, and show the share in `#each`.",
          test: "T.type('#people', '4');\nT.click('#calcBtn');\nT.expect((T.text('#each') || '').indexOf('24') !== -1, '96 split 4 ways is 24 per person — divide the total by Number(peopleInput.value) and show it in #each.');" },
        { text: "It must recalculate: new values, new answer — read `.value` at click time, not once at load.",
          test: "T.type('#bill', '120');\nT.type('#tip', '10');\nT.type('#people', '3');\nT.click('#calcBtn');\nT.expect((T.text('#total') || '').indexOf('132') !== -1, 'Bill 120 + 10% tip = 132. Read the inputs INSIDE the click handler so every click uses fresh values.');\nT.expect((T.text('#each') || '').indexOf('44') !== -1, '132 / 3 people = 44 each.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Split the bill 🧾</h1>\n  <label>Bill ($) <input id=\"bill\" type=\"number\"></label>\n  <label>Tip (%) <input id=\"tip\" type=\"number\"></label>\n  <label>People <input id=\"people\" type=\"number\" value=\"1\"></label>\n  <button id=\"calcBtn\">Calculate</button>\n\n  <p>Total with tip: <strong id=\"total\">—</strong></p>\n  <p>Each pays: <strong id=\"each\">—</strong></p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; padding: 20px; }\nlabel { display: block; margin-bottom: 10px; }\ninput { padding: 6px; border: 2px solid #cbd5e1; border-radius: 8px; width: 90px; }\nbutton { padding: 8px 14px; border-radius: 8px; border: 2px solid #cbd5e1; background: white; cursor: pointer; }\n" },
        { name: "script.js", content: "const billInput = document.querySelector(\"#bill\");\nconst tipInput = document.querySelector(\"#tip\");\nconst peopleInput = document.querySelector(\"#people\");\nconst totalEl = document.querySelector(\"#total\");\nconst eachEl = document.querySelector(\"#each\");\nconst calcBtn = document.querySelector(\"#calcBtn\");\n\n// 1) add a \"click\" listener on calcBtn\n// 2) inside it, read the three values — .value is a STRING, so wrap each in Number()\n// 3) total = bill + bill * (tip / 100)  → show \"$\" + total in totalEl\n// 4) each = total / people              → show \"$\" + each in eachEl\n" }
      ],
      hints: [
        "Inside the click listener: `const bill = Number(billInput.value);` — same for tip and people.",
        "`const total = bill + bill * (tip / 100);` then `totalEl.textContent = \"$\" + total;`",
        "`const each = total / people; eachEl.textContent = \"$\" + each;` — compute total first, then divide."
      ],
      solution: {
        "script.js": "const billInput = document.querySelector(\"#bill\");\nconst tipInput = document.querySelector(\"#tip\");\nconst peopleInput = document.querySelector(\"#people\");\nconst totalEl = document.querySelector(\"#total\");\nconst eachEl = document.querySelector(\"#each\");\nconst calcBtn = document.querySelector(\"#calcBtn\");\n\ncalcBtn.addEventListener(\"click\", () => {\n  const bill = Number(billInput.value);\n  const tip = Number(tipInput.value);\n  const people = Number(peopleInput.value);\n\n  const total = bill + bill * (tip / 100);\n  const each = total / people;\n\n  totalEl.textContent = \"$\" + total;\n  eachEl.textContent = \"$\" + each;\n});\n"
      }
    },

    {
      id: "dom-u4-2",
      title: "Checkboxes, radios & selects",
      kind: "web", chip: "DOM", xp: 15, mins: 14,
      brief: "Text fields aren't the only inputs. Order forms live on **choices**:\n\n- checkbox / radio → `.checked` (a real boolean, not a string)\n- the picked radio in a group → `document.querySelector('input[name=\"crust\"]:checked')`\n- only the ticked boxes → `document.querySelectorAll(\".topping:checked\")`\n- `<select>` → `.value` of the chosen option\n\nBuild a pizza-order summary: read every control **when the button is clicked** and describe the order in one line. This is exactly how checkout pages total your cart.",
      steps: [
        { text: "On `#orderBtn` click, write a summary into `#summary` that includes the size (the select's `.value`) and the checked crust.",
          test: "var s = T.$('#pizzaSize');\ns.value = 'large';\nT.click('#crustThick');\nT.click('#orderBtn');\nvar t = (T.text('#summary') || '').toLowerCase();\nT.expect(t.indexOf('large') !== -1, 'Read the size with the select element\\'s .value INSIDE the click handler — the summary should mention \"large\".');\nT.expect(t.indexOf('thick') !== -1, 'Find the picked crust with document.querySelector(\\'input[name=\"crust\"]:checked\\').value and include it.');" },
        { text: "Add toppings: gather every `.topping:checked`, and list their values in the summary (or say \"no toppings\" when none are ticked).",
          test: "T.click('#topMushrooms');\nT.click('#topOlives');\nT.click('#orderBtn');\nvar t = (T.text('#summary') || '').toLowerCase();\nT.expect(t.indexOf('mushrooms') !== -1 && t.indexOf('olives') !== -1, 'Mushrooms and olives are ticked — loop over document.querySelectorAll(\".topping:checked\") and collect each box\\'s .value.');\nT.expect(t.indexOf('peppers') === -1, 'Peppers is NOT ticked, so it must not appear — only :checked boxes count.');" },
        { text: "Prove it re-reads every click: the test unticks olives and orders again — the summary must update.",
          test: "T.click('#topOlives');\nT.click('#orderBtn');\nvar t = (T.text('#summary') || '').toLowerCase();\nT.expect(t.indexOf('mushrooms') !== -1, 'Mushrooms is still ticked — it should still be listed.');\nT.expect(t.indexOf('olives') === -1, 'Olives was just unticked — rebuild the summary from the CURRENT checked boxes on every click, never from a stale list.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Pizza builder 🍕</h1>\n\n  <fieldset>\n    <legend>Size</legend>\n    <select id=\"pizzaSize\">\n      <option value=\"small\">Small</option>\n      <option value=\"medium\">Medium</option>\n      <option value=\"large\">Large</option>\n    </select>\n  </fieldset>\n\n  <fieldset>\n    <legend>Crust</legend>\n    <label><input type=\"radio\" name=\"crust\" id=\"crustThin\" value=\"thin\" checked> Thin</label>\n    <label><input type=\"radio\" name=\"crust\" id=\"crustThick\" value=\"thick\"> Thick</label>\n  </fieldset>\n\n  <fieldset>\n    <legend>Toppings</legend>\n    <label><input type=\"checkbox\" class=\"topping\" id=\"topMushrooms\" value=\"mushrooms\"> Mushrooms</label>\n    <label><input type=\"checkbox\" class=\"topping\" id=\"topOlives\" value=\"olives\"> Olives</label>\n    <label><input type=\"checkbox\" class=\"topping\" id=\"topPeppers\" value=\"peppers\"> Peppers</label>\n  </fieldset>\n\n  <button id=\"orderBtn\">Build my order</button>\n  <p id=\"summary\"></p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; padding: 20px; }\nfieldset { border: 2px solid #cbd5e1; border-radius: 10px; margin-bottom: 12px; }\nlabel { display: block; margin: 4px 0; }\nbutton { padding: 8px 14px; border-radius: 8px; border: 2px solid #cbd5e1; background: white; cursor: pointer; }\n#summary { font-weight: bold; }\n" },
        { name: "script.js", content: "const orderBtn = document.querySelector(\"#orderBtn\");\nconst summaryEl = document.querySelector(\"#summary\");\n\n// On orderBtn click:\n// 1) size:  document.querySelector(\"#pizzaSize\").value\n// 2) crust: document.querySelector('input[name=\"crust\"]:checked').value\n// 3) toppings: loop document.querySelectorAll(\".topping:checked\"), collect each .value\n// 4) summaryEl.textContent = `${size} pizza, ${crust} crust, toppings: …`\n//    (or \"no toppings\" when the array is empty)\n" }
      ],
      hints: [
        "Size first: `const pizzaSize = document.querySelector(\"#pizzaSize\").value;` — a select's value is whichever option is chosen.",
        "Crust: `document.querySelector('input[name=\"crust\"]:checked').value` — the :checked pseudo-class finds the picked radio.",
        "Toppings: `const names = []; for (const box of document.querySelectorAll(\".topping:checked\")) names.push(box.value);` then `names.join(\", \")` — and an if for the empty case."
      ],
      solution: {
        "script.js": "const orderBtn = document.querySelector(\"#orderBtn\");\nconst summaryEl = document.querySelector(\"#summary\");\n\norderBtn.addEventListener(\"click\", () => {\n  const pizzaSize = document.querySelector(\"#pizzaSize\").value;\n  const crust = document.querySelector('input[name=\"crust\"]:checked').value;\n\n  const names = [];\n  for (const box of document.querySelectorAll(\".topping:checked\")) {\n    names.push(box.value);\n  }\n\n  let line = `${pizzaSize} pizza, ${crust} crust`;\n  if (names.length > 0) {\n    line += \", toppings: \" + names.join(\", \");\n  } else {\n    line += \", no toppings\";\n  }\n  summaryEl.textContent = line;\n});\n"
      }
    },

    {
      id: "dom-u4-3",
      title: "Live validation",
      kind: "web", chip: "DOM", xp: 15, mins: 14,
      brief: "Good forms don't wait for submit to complain — they validate **as you type**, on the `input` event.\n\nThe pattern (used on every sign-up page on earth):\n\n- check the rule: username ≥ 3 chars, email contains `\"@\"`\n- show or clear a per-field message in an error element\n- swap classes `invalid` / `valid` so the CSS paints the border\n- keep the submit button `disabled` until EVERY field passes\n\nOne `refresh()` function that re-checks everything, called from every listener, keeps this tidy.",
      steps: [
        { text: "Validate `#username` on every `input` event: under 3 characters → message in `#usernameError` + class `invalid`; 3 or more → clear the message, swap `invalid` for `valid`.",
          test: "T.type('#username', 'al');\nT.expect((T.text('#usernameError') || '').length > 0, 'Typing \"al\" (2 chars) should show an error message in #usernameError — listen for \"input\" and check value.length.');\nT.expect(T.$('#username').classList.contains('invalid'), 'Also add the class \"invalid\" to the username input so the CSS turns its border red.');\nT.type('#username', 'alex');\nT.eq(T.text('#usernameError'), '', 'With 4 characters the error text should be cleared back to an empty string.');\nvar u = T.$('#username');\nT.expect(u.classList.contains('valid') && !u.classList.contains('invalid'), 'Swap the classes: classList.add(\"valid\") and classList.remove(\"invalid\").');" },
        { text: "Same deal for `#email`: no `@` → message in `#emailError` + `invalid`; has `@` → clear + `valid`. (`value.includes(\"@\")` is your friend.)",
          test: "T.type('#email', 'alex.example');\nT.expect((T.text('#emailError') || '').length > 0 && T.$('#email').classList.contains('invalid'), 'No @ in the email → show a message in #emailError and add the class \"invalid\".');\nT.type('#email', 'alex@example.com');\nvar em = T.$('#email');\nT.eq(T.text('#emailError'), '', 'A valid email should clear the error text.');\nT.expect(em.classList.contains('valid') && !em.classList.contains('invalid'), 'And flip the classes to \"valid\".');" },
        { text: "Gate the button: `#joinBtn` starts disabled in the HTML and only enables when BOTH fields are valid — set `joinBtn.disabled` in every handler.",
          test: "T.expect(!T.$('#joinBtn').disabled, 'Username and email are both valid right now — the Join button should be enabled: joinBtn.disabled = false when both checks pass.');\nT.type('#username', 'x');\nT.expect(T.$('#joinBtn').disabled, 'The test shortened the username to \"x\" — the button must disable again. Re-check BOTH fields inside EVERY input handler.');\nT.type('#username', 'alex');\nT.expect(!T.$('#joinBtn').disabled, 'Fix the username and the button comes back.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Join the club</h1>\n\n  <div class=\"field\">\n    <label for=\"username\">Username</label>\n    <input id=\"username\" placeholder=\"At least 3 characters\">\n    <p class=\"error\" id=\"usernameError\"></p>\n  </div>\n\n  <div class=\"field\">\n    <label for=\"email\">Email</label>\n    <input id=\"email\" placeholder=\"you@example.com\">\n    <p class=\"error\" id=\"emailError\"></p>\n  </div>\n\n  <button id=\"joinBtn\" disabled>Join</button>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; padding: 20px; }\n.field { margin-bottom: 14px; }\nlabel { display: block; margin-bottom: 4px; }\ninput { padding: 8px; border: 2px solid #cbd5e1; border-radius: 8px; }\ninput.valid { border-color: #22c55e; }\ninput.invalid { border-color: #dc2626; }\n.error { color: #dc2626; font-size: 14px; min-height: 18px; margin: 4px 0 0; }\nbutton { padding: 8px 18px; border-radius: 8px; border: 2px solid #cbd5e1; background: white; cursor: pointer; }\nbutton:disabled { opacity: 0.5; cursor: not-allowed; }\n" },
        { name: "script.js", content: "const usernameInput = document.querySelector(\"#username\");\nconst emailInput = document.querySelector(\"#email\");\nconst usernameError = document.querySelector(\"#usernameError\");\nconst emailError = document.querySelector(\"#emailError\");\nconst joinBtn = document.querySelector(\"#joinBtn\");\n\n// Write a refresh() function that:\n// 1) username rule: usernameInput.value.length >= 3\n//    → set/clear usernameError.textContent, swap classes invalid/valid\n// 2) email rule: emailInput.value.includes(\"@\")\n//    → same treatment with emailError\n// 3) joinBtn.disabled = true unless BOTH rules pass\n//\n// Then run refresh on the \"input\" event of BOTH fields.\n" }
      ],
      hints: [
        "One `refresh()` to rule them all: `usernameInput.addEventListener(\"input\", refresh); emailInput.addEventListener(\"input\", refresh);`",
        "Per field: `if (usernameInput.value.length >= 3) { usernameError.textContent = \"\"; usernameInput.classList.add(\"valid\"); usernameInput.classList.remove(\"invalid\"); } else { … the mirror image … }`",
        "Last line of refresh(): `joinBtn.disabled = !(usernameInput.value.length >= 3 && emailInput.value.includes(\"@\"));`"
      ],
      solution: {
        "script.js": "const usernameInput = document.querySelector(\"#username\");\nconst emailInput = document.querySelector(\"#email\");\nconst usernameError = document.querySelector(\"#usernameError\");\nconst emailError = document.querySelector(\"#emailError\");\nconst joinBtn = document.querySelector(\"#joinBtn\");\n\nfunction validUsername() {\n  return usernameInput.value.length >= 3;\n}\n\nfunction validEmail() {\n  return emailInput.value.includes(\"@\");\n}\n\nfunction refresh() {\n  if (validUsername()) {\n    usernameError.textContent = \"\";\n    usernameInput.classList.add(\"valid\");\n    usernameInput.classList.remove(\"invalid\");\n  } else {\n    usernameError.textContent = \"Username needs at least 3 characters.\";\n    usernameInput.classList.add(\"invalid\");\n    usernameInput.classList.remove(\"valid\");\n  }\n\n  if (validEmail()) {\n    emailError.textContent = \"\";\n    emailInput.classList.add(\"valid\");\n    emailInput.classList.remove(\"invalid\");\n  } else {\n    emailError.textContent = \"That email needs an @.\";\n    emailInput.classList.add(\"invalid\");\n    emailInput.classList.remove(\"valid\");\n  }\n\n  joinBtn.disabled = !(validUsername() && validEmail());\n}\n\nusernameInput.addEventListener(\"input\", refresh);\nemailInput.addEventListener(\"input\", refresh);\n"
      }
    },

    {
      id: "dom-u4-p",
      title: "Project: Sign-up wizard",
      kind: "web", chip: "DOM", xp: 50, mins: 35, project: true,
      brief: "Every checkout and onboarding flow you've ever clicked through is a **step wizard**: one panel at a time, Next validates before it advances, Back never loses your answers.\n\nYours has 3 steps: name → email → summary.\n\n- exactly one `.step` owns the class `active` (the CSS hides the rest)\n- `showStep(n)` — remove `active` everywhere, add it to `#step<n>`\n- each Next button validates its own field first; complaints go in that field's error element\n- entering step 3 (re)builds `#wizSummary` from the current values\n\nFinish it, then click through your own wizard in the preview.",
      steps: [
        { text: "One step at a time: on load `#step1` is the only `.step` with class `active`; the CSS hides the rest.",
          test: "T.eq(T.count('.step.active'), 1, 'Exactly ONE .step should carry the class \"active\" at any moment.');\nT.expect(T.$('#step1').classList.contains('active'), 'On load, the active one is #step1.');\nT.expect(T.css('#step2', 'display') === 'none' && T.css('#step3', 'display') === 'none', 'Steps 2 and 3 start hidden — the stylesheet handles display, you only manage the active class.');" },
        { text: "`#next1` validates the name: under 2 characters → message in `#nameError` and STAY on step 1; otherwise clear the error and advance to step 2.",
          test: "T.click('#next1');\nT.expect(T.$('#step1').classList.contains('active') && !T.$('#step2').classList.contains('active'), 'The name is still empty — Next must NOT advance. Validate BEFORE switching steps.');\nT.expect((T.text('#nameError') || '').length > 0, 'Tell the user why: put a message in #nameError.');\nT.type('#wizName', 'Ada');\nT.click('#next1');\nT.expect(T.$('#step2').classList.contains('active') && !T.$('#step1').classList.contains('active'), 'With a valid name, Next should activate #step2 and deactivate #step1.');\nT.eq(T.text('#nameError'), '', 'Clear the old error once the name passes.');" },
        { text: "`#back2` returns to step 1 — and going forward again still works (the typed name is kept by the browser).",
          test: "T.click('#back2');\nT.expect(T.$('#step1').classList.contains('active') && !T.$('#step2').classList.contains('active'), 'Back should re-activate #step1.');\nT.click('#next1');\nT.expect(T.$('#step2').classList.contains('active'), 'Forward again: \"Ada\" is still in the field, so Next lands back on #step2.');\nT.eq(T.count('.step.active'), 1, 'Still exactly one active step — showStep must remove \"active\" from ALL steps first.');" },
        { text: "`#next2` validates the email the same way — it must contain `@`; complaints go in `#emailError`.",
          test: "T.type('#wizEmail', 'ada.example');\nT.click('#next2');\nT.expect(T.$('#step2').classList.contains('active') && !T.$('#step3').classList.contains('active'), 'No @ in the email — stay on step 2.');\nT.expect((T.text('#emailError') || '').length > 0, 'Show the problem in #emailError.');\nT.type('#wizEmail', 'ada@lovelace.dev');\nT.click('#next2');\nT.expect(T.$('#step3').classList.contains('active'), 'Valid email → advance to #step3.');" },
        { text: "Step 3 greets properly: `#wizSummary` shows the entered name AND email.",
          test: "var t = (T.text('#wizSummary') || '').toLowerCase();\nT.expect(t.indexOf('ada') !== -1, 'The summary should include the name that was typed (Ada) — read wizName.value when building it.');\nT.expect(t.indexOf('ada@lovelace.dev') !== -1, 'And the email — build the summary right before showStep(3) in the #next2 handler.');" },
        { text: "`#back3` lets users fix things: back to step 2, change the email, Next again — the summary is rebuilt fresh.",
          test: "T.click('#back3');\nT.expect(T.$('#step2').classList.contains('active') && !T.$('#step3').classList.contains('active'), 'Back from the summary lands on step 2.');\nT.type('#wizEmail', 'ada@analytical.io');\nT.click('#next2');\nvar t = (T.text('#wizSummary') || '').toLowerCase();\nT.expect(t.indexOf('ada@analytical.io') !== -1 && t.indexOf('lovelace') === -1, 'Rebuild the summary EVERY time step 3 opens — the new email must replace the old one, so build it in the handler, not once at load.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Sign-up wizard 🧙</h1>\n\n  <div class=\"step active\" id=\"step1\">\n    <h2>Step 1 of 3 — Name</h2>\n    <input id=\"wizName\" placeholder=\"Your name\">\n    <p class=\"error\" id=\"nameError\"></p>\n    <button id=\"next1\">Next →</button>\n  </div>\n\n  <div class=\"step\" id=\"step2\">\n    <h2>Step 2 of 3 — Email</h2>\n    <input id=\"wizEmail\" placeholder=\"you@example.com\">\n    <p class=\"error\" id=\"emailError\"></p>\n    <button id=\"back2\">← Back</button>\n    <button id=\"next2\">Next →</button>\n  </div>\n\n  <div class=\"step\" id=\"step3\">\n    <h2>Step 3 of 3 — All set!</h2>\n    <p id=\"wizSummary\"></p>\n    <button id=\"back3\">← Back</button>\n  </div>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; padding: 20px; max-width: 420px; }\n.step { display: none; padding: 16px; border: 2px solid #cbd5e1; border-radius: 12px; }\n.step.active { display: block; }\ninput { padding: 8px; border: 2px solid #cbd5e1; border-radius: 8px; width: 90%; }\n.error { color: #dc2626; min-height: 18px; margin: 6px 0; }\nbutton { padding: 8px 14px; border-radius: 8px; border: 2px solid #cbd5e1; background: white; cursor: pointer; }\n" },
        { name: "script.js", content: "const wizName = document.querySelector(\"#wizName\");\nconst wizEmail = document.querySelector(\"#wizEmail\");\nconst nameError = document.querySelector(\"#nameError\");\nconst emailError = document.querySelector(\"#emailError\");\nconst wizSummary = document.querySelector(\"#wizSummary\");\n\n// The helper everything uses: show ONLY step n\nfunction showStep(n) {\n  // remove \"active\" from every .step, then add it to \"#step\" + n\n}\n\n// #next1: if wizName.value.length < 2 → message in nameError and stop;\n//         else clear the error and showStep(2)\n\n// #back2 → showStep(1)      #back3 → showStep(2)\n\n// #next2: if the email has no \"@\" → message in emailError and stop;\n//         else clear it, build the summary in wizSummary\n//         from wizName.value + wizEmail.value, then showStep(3)\n" }
      ],
      hints: [
        "showStep(n): `for (const s of document.querySelectorAll(\".step\")) s.classList.remove(\"active\");` then `document.querySelector(\"#step\" + n).classList.add(\"active\");`",
        "Every Next handler has the same skeleton: validate → if bad, set the error text and `return;` → else clear the error and advance.",
        "Build the summary INSIDE the #next2 handler, right before `showStep(3)`, from `wizName.value` and `wizEmail.value` — that way it is rebuilt fresh every visit."
      ],
      solution: {
        "script.js": "const wizName = document.querySelector(\"#wizName\");\nconst wizEmail = document.querySelector(\"#wizEmail\");\nconst nameError = document.querySelector(\"#nameError\");\nconst emailError = document.querySelector(\"#emailError\");\nconst wizSummary = document.querySelector(\"#wizSummary\");\n\nfunction showStep(n) {\n  for (const s of document.querySelectorAll(\".step\")) {\n    s.classList.remove(\"active\");\n  }\n  document.querySelector(\"#step\" + n).classList.add(\"active\");\n}\n\ndocument.querySelector(\"#next1\").addEventListener(\"click\", () => {\n  if (wizName.value.length < 2) {\n    nameError.textContent = \"Please enter at least 2 characters.\";\n    return;\n  }\n  nameError.textContent = \"\";\n  showStep(2);\n});\n\ndocument.querySelector(\"#next2\").addEventListener(\"click\", () => {\n  if (!wizEmail.value.includes(\"@\")) {\n    emailError.textContent = \"That email needs an @.\";\n    return;\n  }\n  emailError.textContent = \"\";\n  wizSummary.textContent = `Welcome, ${wizName.value}! We'll email ${wizEmail.value}.`;\n  showStep(3);\n});\n\ndocument.querySelector(\"#back2\").addEventListener(\"click\", () => {\n  showStep(1);\n});\n\ndocument.querySelector(\"#back3\").addEventListener(\"click\", () => {\n  showStep(2);\n});\n"
      }
    },

    {
      id: "dom-quiz-4",
      title: "Unit 4 quiz: Forms",
      kind: "quiz", xp: 10,
      brief: "Values, checked states, live validation. 80% to pass.",
      questions: [
        { q: "A user types 5 into `<input id=\"qty\" type=\"number\">`. What does `qty.value` give you?",
          choices: ["The number 5", "The string \"5\" — inputs ALWAYS give strings; wrap in Number() before math", "undefined until the form is submitted", "The number 5, but only after a change event"],
          answer: 1, explain: "Even type=\"number\" inputs hand back strings. \"5\" + \"5\" is \"55\" — convert with Number() first." },
        { q: "Which selector finds the SELECTED radio in a group named `crust`?",
          choices: ["document.querySelector(\"input[name='crust']\").checked", "document.querySelector(\"#crust.selected\")", "document.querySelector(\"input[name='crust']:checked\")", "document.querySelectorAll(\"input[name='crust']\")[0]"],
          answer: 2, explain: "The :checked pseudo-class matches the picked one. (It returns null when nothing is selected yet — check before reading .value!)" },
        { q: "What does this log?",
          code: "const bill = document.querySelector(\"#bill\").value; // user typed 80\nconst tip = document.querySelector(\"#tip\").value;   // user typed 20\nconsole.log(bill + tip);",
          lang: "js",
          choices: ["\"8020\" — both values are strings, so + concatenates", "100", "NaN", "A TypeError"],
          answer: 0, explain: ".value is always a string. Number(bill) + Number(tip) would give the 100 you wanted." },
        { q: "How do you grey out a button so it can't be clicked until the form is valid?",
          choices: ["btn.classList.add(\"off\")", "btn.remove()", "btn.value = \"disabled\"", "btn.disabled = true"],
          answer: 3, explain: "The disabled PROPERTY actually blocks clicks (and CSS can style button:disabled). A class alone only changes looks." },
        { q: "For live, per-keystroke validation you should listen for…",
          choices: ["change — it fires on every keystroke", "input — it fires every time the value changes", "submit", "keydown, but only when e.key is \"Enter\""],
          answer: 1, explain: "input fires on every edit (typing, pasting, clearing). change waits until the field loses focus — too late for live feedback." },
        { q: "How do you test whether a checkbox is ticked right now?",
          choices: ["box.value === \"true\"", "box.getAttribute(\"checked\") !== null", "box.checked — a real boolean", "box.classList.contains(\"checked\")"],
          answer: 2, explain: "The live state is the .checked property. The checked ATTRIBUTE only reflects the initial HTML, not what the user clicked since." }
      ]
    }
  ]
});
