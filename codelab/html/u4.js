/* Learn HTML — Unit 4: Forms */
window.CODELAB.addUnit("html", {
  id: "html-u4",
  title: "Forms",
  icon: "📝",
  blurb: "Inputs, labels, choices and validation — how users talk back to your site.",
  cheat: [
    { h: "Form skeleton", lang: "html", code: "<form>\n  <label for=\"email\">Email</label>\n  <input id=\"email\" type=\"email\" placeholder=\"you@site.com\">\n  <button>Send</button>\n</form>" },
    { h: "Input types", lang: "html", code: "<input type=\"text\">\n<input type=\"email\">\n<input type=\"password\">\n<input type=\"number\" min=\"1\" max=\"10\">\n<input type=\"date\">", note: "The type changes the keyboard on phones and the browser's built-in checks." },
    { h: "Checkboxes & radios", lang: "html", code: "<input type=\"checkbox\" id=\"news\">\n\n<input type=\"radio\" name=\"size\" id=\"s\" value=\"small\">\n<input type=\"radio\" name=\"size\" id=\"m\" value=\"medium\">", note: "Radios that SHARE a name become one choose-only-one group." },
    { h: "Dropdowns & textareas", lang: "html", code: "<select id=\"country\">\n  <option value=\"pt\">Portugal</option>\n  <option value=\"jp\">Japan</option>\n</select>\n\n<textarea id=\"bio\" rows=\"4\"></textarea>" },
    { h: "Validation attributes", lang: "html", code: "<input required>\n<input type=\"number\" min=\"18\" max=\"120\">\n<input minlength=\"8\">", note: "The browser blocks submission and shows messages — zero JavaScript needed." }
  ],
  lessons: [

    {
      id: "html-u4-1",
      title: "The form element",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Forms are how users talk back to your site — search boxes, logins, checkouts.\n\n- `<form>` wraps the whole thing\n- `<input>` is a field (self-closing); `placeholder` shows ghost text\n- `<button>` inside a form submits it\n\nIn later courses your JavaScript will *catch* that submission — for now we build the structure browsers and screen readers expect.",
      steps: [
        { text: "Add a `<form>` element to the page.",
          test: "T.expect(T.$('form'), 'No <form> found yet.');" },
        { text: "Inside it, add an `<input>` with a `placeholder`.",
          test: "var i = T.$('form input');\nT.expect(i, 'Put an <input> inside the <form>.');\nT.expect((i.getAttribute('placeholder') || '').length > 0, 'Give the input a placeholder.');" },
        { text: "Add a `<button>` inside the form with the text **Search**.",
          test: "var b = T.$('form button');\nT.expect(b, 'Add a <button> inside the <form>.');\nT.expect((b.textContent || '').toLowerCase().indexOf('search') !== -1, 'Label it Search.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Recipe finder</h1>\n  <!-- form → input (placeholder) → button -->\n\n</body>\n</html>\n" }
      ],
      hints: [
        "Skeleton: `<form> <input placeholder=\"…\"> <button>Search</button> </form>`",
        "`<input>` is self-closing — no `</input>` exists."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Recipe finder</h1>\n  <form>\n    <input placeholder=\"Try: 20-minute pasta\">\n    <button>Search</button>\n  </form>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u4-2",
      title: "Labels: every input's name tag",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Every input needs a **label** — visible text saying what the field is for.\n\nThe magic is the pairing: `<label for=\"email\">` + `<input id=\"email\">`. When `for` matches `id`:\n\n- clicking the label focuses the input (bigger touch targets on phones!)\n- screen readers announce the field properly\n\nPlaceholders are **not** labels — they vanish the moment you type.",
      steps: [
        { text: "Add a label **Email** connected to the email input (`for` ↔ `id`).",
          test: "var i = T.$('#email');\nT.expect(i, 'Keep the input with id=\"email\".');\nvar l = T.$$('label').filter(function (x) { return x.getAttribute('for') === 'email'; })[0];\nT.expect(l, 'Add <label for=\"email\">Email</label> before the input.');\nT.expect((l.textContent || '').toLowerCase().indexOf('email') !== -1, 'The label text should say Email.');" },
        { text: "Add a second field: label **Full name** + `<input id=\"fullname\">`, properly paired.",
          test: "var i = T.$('#fullname');\nT.expect(i, 'Add an <input id=\"fullname\">.');\nvar l = T.$$('label').filter(function (x) { return x.getAttribute('for') === 'fullname'; })[0];\nT.expect(l, 'Pair it with <label for=\"fullname\">Full name</label>.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Create account</h1>\n  <form>\n    <!-- label for the email input -->\n    <input id=\"email\" placeholder=\"you@site.com\">\n\n    <!-- add: label + input for full name -->\n\n    <button>Continue</button>\n  </form>\n</body>\n</html>\n" }
      ],
      hints: [
        "`<label for=\"email\">Email</label>` — the for value matches the input's id EXACTLY.",
        "Same pattern for the new field: `<label for=\"fullname\">Full name</label> <input id=\"fullname\">`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Create account</h1>\n  <form>\n    <label for=\"email\">Email</label>\n    <input id=\"email\" placeholder=\"you@site.com\">\n\n    <label for=\"fullname\">Full name</label>\n    <input id=\"fullname\" placeholder=\"Ada Lovelace\">\n\n    <button>Continue</button>\n  </form>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u4-3",
      title: "Input types",
      kind: "web", chip: "HTML", xp: 15,
      brief: "One attribute — `type` — transforms an input:\n\n- `type=\"email\"` — email keyboard on phones, built-in @ checking\n- `type=\"password\"` — hides what you type\n- `type=\"number\"` — numeric keypad, arrows, `min`/`max`\n- `type=\"date\"` — a date picker!\n\nPick the right type and phones show the right keyboard automatically. Your users will feel it.",
      steps: [
        { text: "Make the email field `type=\"email\"`.",
          test: "var i = T.$('#email');\nT.expect(i && i.getAttribute('type') === 'email', 'Add type=\"email\" to the email input.');" },
        { text: "Make the password field `type=\"password\"` — watch the preview hide it.",
          test: "var i = T.$('#pass');\nT.expect(i && i.getAttribute('type') === 'password', 'Add type=\"password\" to the password input.');" },
        { text: "Make guests a `number` field limited from `1` to `12`.",
          test: "var i = T.$('#guests');\nT.expect(i && i.getAttribute('type') === 'number', 'Add type=\"number\" to the guests input.');\nT.expect(i.getAttribute('min') === '1' && i.getAttribute('max') === '12', 'Limit it with min=\"1\" and max=\"12\".');" },
        { text: "Make the arrival field a `date` picker.",
          test: "var i = T.$('#arrival');\nT.expect(i && i.getAttribute('type') === 'date', 'Add type=\"date\" to the arrival input.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Book your stay</h1>\n  <form>\n    <label for=\"email\">Email</label>\n    <input id=\"email\">\n\n    <label for=\"pass\">Password</label>\n    <input id=\"pass\">\n\n    <label for=\"guests\">Guests</label>\n    <input id=\"guests\">\n\n    <label for=\"arrival\">Arrival</label>\n    <input id=\"arrival\">\n\n    <button>Book</button>\n  </form>\n</body>\n</html>\n" }
      ],
      hints: [
        "The type is just an attribute: `<input id=\"email\" type=\"email\">`.",
        "Number limits ride along: `<input id=\"guests\" type=\"number\" min=\"1\" max=\"12\">`."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Book your stay</h1>\n  <form>\n    <label for=\"email\">Email</label>\n    <input id=\"email\" type=\"email\">\n\n    <label for=\"pass\">Password</label>\n    <input id=\"pass\" type=\"password\">\n\n    <label for=\"guests\">Guests</label>\n    <input id=\"guests\" type=\"number\" min=\"1\" max=\"12\">\n\n    <label for=\"arrival\">Arrival</label>\n    <input id=\"arrival\" type=\"date\">\n\n    <button>Book</button>\n  </form>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u4-4",
      title: "Checkboxes & radio buttons",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Two kinds of clickable choices:\n\n- **Checkbox** — independent on/off. Check as many as you like.\n- **Radio buttons** — pick **exactly one** from a group. The group is defined by radios **sharing the same `name`** attribute.\n\nEach one still gets a label (`for` ↔ `id`), so the text is clickable too. Try them in the preview!",
      steps: [
        { text: "Add a labeled **checkbox** with `id=\"news\"` (\"Email me updates\").",
          test: "var c = T.$('#news');\nT.expect(c && c.getAttribute('type') === 'checkbox', 'Add <input type=\"checkbox\" id=\"news\">.');\nvar l = T.$$('label').filter(function (x) { return x.getAttribute('for') === 'news'; })[0];\nT.expect(l, 'Pair it with a <label for=\"news\">.');" },
        { text: "Add **three radio buttons** for size — small, medium, large — all sharing `name=\"size\"`.",
          test: "var radios = T.$$('input[type=\"radio\"]');\nT.expect(radios.length >= 3, 'Add 3 radio inputs — found ' + radios.length + '.');\nvar ok = radios.every(function (r) { return r.getAttribute('name') === 'size'; });\nT.expect(ok, 'All three radios need name=\"size\" — sharing the name is what makes them one group.');" },
        { text: "Each radio has its own `id`, `value`, and matching label.",
          test: "var radios = T.$$('input[type=\"radio\"]');\nvar ok = radios.every(function (r) {\n  var id = r.getAttribute('id');\n  return id && (r.getAttribute('value') || '').length > 0 && document.querySelector('label[for=\"' + id + '\"]');\n});\nT.expect(ok, 'Every radio needs id + value + a <label for=…> pointing at it.');\n// selecting one deselects the others — prove the group works\nT.click('input[type=\"radio\"]');\nvar checked = T.$$('input[type=\"radio\"]').filter(function (r) { return r.checked; });\nT.expect(checked.length === 1, 'Clicking one radio should select exactly one — the shared name makes them exclusive.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>T-shirt order</h1>\n  <form>\n    <h2>Size</h2>\n    <!-- three radios, name=\"size\", each with id + value + label -->\n\n    <h2>Extras</h2>\n    <!-- checkbox id=\"news\" + label -->\n\n    <button>Order</button>\n  </form>\n</body>\n</html>\n" }
      ],
      hints: [
        "One radio: `<input type=\"radio\" name=\"size\" id=\"small\" value=\"small\"> <label for=\"small\">Small</label>`",
        "Copy it three times, changing id/value/label — but NEVER the name.",
        "Checkbox: `<input type=\"checkbox\" id=\"news\"> <label for=\"news\">Email me updates</label>`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>T-shirt order</h1>\n  <form>\n    <h2>Size</h2>\n    <input type=\"radio\" name=\"size\" id=\"small\" value=\"small\">\n    <label for=\"small\">Small</label>\n    <input type=\"radio\" name=\"size\" id=\"medium\" value=\"medium\">\n    <label for=\"medium\">Medium</label>\n    <input type=\"radio\" name=\"size\" id=\"large\" value=\"large\">\n    <label for=\"large\">Large</label>\n\n    <h2>Extras</h2>\n    <input type=\"checkbox\" id=\"news\">\n    <label for=\"news\">Email me updates</label>\n\n    <button>Order</button>\n  </form>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u4-5",
      title: "Dropdowns & textareas",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Two more essential controls:\n\n- `<select>` + `<option>` — a **dropdown**. Each option carries a `value` (what your code receives) and display text (what the user sees).\n- `<textarea>` — multi-line text. Unlike `<input>`, it has a closing tag; `rows` sets its height.",
      steps: [
        { text: "Add a labeled `<select id=\"topic\">` with at least **3** `<option>`s, each with a `value`.",
          test: "var s = T.$('select#topic');\nT.expect(s, 'Add a <select id=\"topic\">.');\nT.expect(s.querySelectorAll('option').length >= 3, 'Give it at least 3 <option> elements.');\nvar ok = T.$$('#topic option').every(function (o) { return (o.getAttribute('value') || '').length > 0; });\nT.expect(ok, 'Every option needs a value attribute.');\nT.expect(T.$('label[for=\"topic\"]'), 'Label the dropdown: <label for=\"topic\">.');" },
        { text: "Add a labeled `<textarea id=\"message\" rows=\"5\">`.",
          test: "var t = T.$('textarea#message');\nT.expect(t, 'Add a <textarea id=\"message\"></textarea>.');\nT.expect(t.getAttribute('rows') === '5', 'Set rows=\"5\" for a taller box.');\nT.expect(T.$('label[for=\"message\"]'), 'Label it: <label for=\"message\">.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Contact support</h1>\n  <form>\n    <!-- label + select#topic with 3 options -->\n\n    <!-- label + textarea#message rows=5 -->\n\n    <button>Send</button>\n  </form>\n</body>\n</html>\n" }
      ],
      hints: [
        "Dropdown: `<select id=\"topic\"> <option value=\"billing\">Billing</option> … </select>`",
        "Textarea has BOTH tags: `<textarea id=\"message\" rows=\"5\"></textarea>`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Contact support</h1>\n  <form>\n    <label for=\"topic\">Topic</label>\n    <select id=\"topic\">\n      <option value=\"billing\">Billing</option>\n      <option value=\"bug\">Report a bug</option>\n      <option value=\"other\">Something else</option>\n    </select>\n\n    <label for=\"message\">Message</label>\n    <textarea id=\"message\" rows=\"5\"></textarea>\n\n    <button>Send</button>\n  </form>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u4-6",
      title: "Built-in validation",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Browsers can reject bad input **before** it's submitted — no JavaScript required:\n\n- `required` — the field can't be empty\n- `min` / `max` — numeric limits\n- `minlength` — minimum text length\n\nWhen validation fails, the browser blocks submission and shows a message. It's your first line of defense (real apps validate on the server too — you'll build that in Back-End Foundations).",
      steps: [
        { text: "Make the username **required** with a **minlength of 3**.",
          test: "var i = T.$('#username');\nT.expect(i && i.hasAttribute('required'), 'Add the required attribute to #username (no value needed — just the word).');\nT.expect(i.getAttribute('minlength') === '3', 'Add minlength=\"3\" too.');" },
        { text: "Make the age field required and limited to **13–120**.",
          test: "var i = T.$('#age');\nT.expect(i && i.hasAttribute('required'), 'Make #age required.');\nT.expect(i.getAttribute('min') === '13' && i.getAttribute('max') === '120', 'Add min=\"13\" and max=\"120\".');" },
        { text: "Confirm the browser enforces it: with everything empty, the form reports **invalid**.",
          test: "var f = T.$('form');\nT.expect(f && f.checkValidity() === false, 'With required fields empty, form.checkValidity() should be false — the browser is now your bouncer.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Join the guild</h1>\n  <form>\n    <label for=\"username\">Username</label>\n    <input id=\"username\">\n\n    <label for=\"age\">Age</label>\n    <input id=\"age\" type=\"number\">\n\n    <button>Join</button>\n  </form>\n</body>\n</html>\n" }
      ],
      hints: [
        "`required` stands alone: `<input id=\"username\" required minlength=\"3\">`.",
        "Try pressing Join in the preview with empty fields — the browser complains for you."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Join the guild</h1>\n  <form>\n    <label for=\"username\">Username</label>\n    <input id=\"username\" required minlength=\"3\">\n\n    <label for=\"age\">Age</label>\n    <input id=\"age\" type=\"number\" required min=\"13\" max=\"120\">\n\n    <button>Join</button>\n  </form>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-quiz-4",
      title: "Unit 4 quiz: Forms",
      kind: "quiz", xp: 10,
      brief: "Inputs, labels, groups and validation. 80% to pass.",
      questions: [
        { q: "What connects a `<label>` to its input?",
          choices: ["label's for matches the input's id", "They must sit next to each other", "label's name matches input's name", "A class shared by both elements"],
          answer: 0, explain: "for=\"email\" ↔ id=\"email\". Clicking the label then focuses the field — huge on touch screens — and screen readers read the label out the moment the input takes focus. Sitting next to each other in the markup connects nothing." },
        { q: "Why is a placeholder **not** a substitute for a label?",
          choices: ["It disappears as soon as the user types", "A placeholder can only hold a few words", "Placeholders can't contain plain text", "The placeholder value gets submitted too"],
          answer: 0, explain: "Mid-form, users forget what a half-filled field was — the placeholder vanishes the instant they type, leaving a nameless box. Labels stay put, get read out by screen readers, and are clickable. Placeholders are hints only, and their text is never submitted." },
        { q: "What makes radio buttons act as one choose-one group?",
          choices: ["Sharing the same name attribute", "Sharing the same id attribute", "Being wrapped in one <fieldset>", "Using a shared value attribute"],
          answer: 0, explain: "name=\"size\" on all of them = one group, one selection. ids must still be unique (labels point at them), and each radio needs its OWN value. A <fieldset> with a <legend> is worth adding — it names the group for screen readers — but it isn't what makes the choice exclusive." },
        { q: "When should you use a checkbox instead of radios?",
          choices: ["When the choices are independent on/off", "When exactly one option may be picked", "When the form needs a submit control", "When the answer must stay private"],
          answer: 0, explain: "Checkbox = any number can be on, including none — pizza toppings. Radio = exactly one of the group — pizza size. Wanting one answer is precisely the case where checkboxes are the wrong control." },
        { q: "What does this input guarantee?",
          code: "<input type=\"number\" required min=\"13\" max=\"120\">",
          lang: "html",
          choices: ["Submission is blocked outside 13-120", "Typed letters are converted to numbers", "The field is numeric but still optional", "Nothing until JavaScript checks the value"],
          answer: 0, explain: "required + min/max = built-in validation, before any JS runs: the browser refuses to submit an empty box or a number outside 13-120, and pops its own error bubble. `required` is exactly what stops it being optional. (Servers still re-check — never trust the client alone!)" },
        { q: "Which control is best for **one choice among 40 countries**?",
          choices: ["A <select> dropdown", "40 radio buttons", "40 checkboxes", "A password field"],
          answer: 0, explain: "Long exclusive lists want a dropdown. Radios shine with 2-5 visible options." },
        { q: "`type=\"email\"` on a phone gives users…",
          choices: ["An email keyboard plus format validation", "A field that emails the form on submit", "A dropdown of the contacts saved on the phone", "The same plain keyboard as type=\"text\""],
          answer: 0, explain: "Input types adapt the mobile keyboard AND add validation — free UX wins. type=\"email\" surfaces the @ and .com keys and refuses to submit a value with no @ in it. It never sends anything by itself, and it can't read the address book." }
      ]
    },

    {
      id: "html-u4-p",
      title: "Project: Sign-up form",
      kind: "web", chip: "HTML", xp: 40, project: true, mins: 35,
      brief: "Build a complete, accessible **sign-up form** — the single most common thing front-end developers are asked to make. Every field labeled, the right types everywhere, choices grouped, validation on.",
      steps: [
        { text: "A `<form>` with labeled **Email** (`type=\"email\"`, required) — `for` ↔ `id` pairing.",
          test: "var i = T.$('form input[type=\"email\"]');\nT.expect(i, 'Add an email-typed input inside the form.');\nT.expect(i.hasAttribute('required'), 'Make it required.');\nvar id = i.getAttribute('id');\nT.expect(id && T.$('label[for=\"' + id + '\"]'), 'Pair it with a label via for/id.');" },
        { text: "A labeled **Password** (`type=\"password\"`, `minlength=\"8\"`, required).",
          test: "var i = T.$('form input[type=\"password\"]');\nT.expect(i, 'Add a password input.');\nT.expect(i.getAttribute('minlength') === '8' && i.hasAttribute('required'), 'Password: minlength=\"8\" and required.');\nvar id = i.getAttribute('id');\nT.expect(id && T.$('label[for=\"' + id + '\"]'), 'Label the password field too.');" },
        { text: "A **plan** choice: 3 radios sharing `name=\"plan\"`, each labeled.",
          test: "var radios = T.$$('input[type=\"radio\"]');\nT.expect(radios.length >= 3, 'Add 3 plan radios.');\nT.expect(radios.every(function (r) { return r.getAttribute('name') === 'plan'; }), 'All radios share name=\"plan\".');\nT.expect(radios.every(function (r) { var id = r.getAttribute('id'); return id && document.querySelector('label[for=\"' + id + '\"]'); }), 'Every radio gets its own label.');" },
        { text: "A **country** dropdown (`select` with ≥ 3 options with values) and a **bio** `<textarea>`, both labeled.",
          test: "var s = T.$('form select');\nT.expect(s && s.querySelectorAll('option').length >= 3, 'Add a select with 3+ options.');\nvar sid = s.getAttribute('id');\nT.expect(sid && T.$('label[for=\"' + sid + '\"]'), 'Label the dropdown.');\nvar t = T.$('form textarea');\nT.expect(t, 'Add a textarea for the bio.');\nvar tid = t.getAttribute('id');\nT.expect(tid && T.$('label[for=\"' + tid + '\"]'), 'Label the textarea.');" },
        { text: "A **terms** checkbox that is `required`, labeled, plus a submit `<button>`.",
          test: "var c = T.$('input[type=\"checkbox\"]');\nT.expect(c && c.hasAttribute('required'), 'Add a required terms checkbox.');\nvar cid = c.getAttribute('id');\nT.expect(cid && T.$('label[for=\"' + cid + '\"]'), 'Label the checkbox.');\nT.expect(T.$('form button'), 'Finish with a submit button.');" },
        { text: "Empty form = invalid form (the browser's validation is armed).",
          test: "var f = T.$('form');\nT.expect(f && f.checkValidity() === false, 'With everything empty, form.checkValidity() must be false — required fields make it so.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Create your account</h1>\n  <form>\n    <!-- email (type email, required) + label -->\n\n    <!-- password (minlength 8, required) + label -->\n\n    <!-- plan: 3 radios, name=\"plan\", labeled -->\n\n    <!-- country select (3+ options) + label -->\n\n    <!-- bio textarea + label -->\n\n    <!-- required terms checkbox + label, then a button -->\n\n  </form>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* free styling — focus on the HTML */\nbody { font-family: Arial, sans-serif; max-width: 420px; margin: 0 auto; padding: 20px; background: #f8fafc; }\nform { background: white; padding: 20px; border-radius: 14px; box-shadow: 0 1px 4px rgba(0,0,0,.08); }\nlabel { display: block; font-weight: bold; font-size: 14px; margin: 14px 0 4px; }\ninput:not([type=checkbox]):not([type=radio]), select, textarea {\n  width: 100%; padding: 9px 10px; border: 2px solid #cbd5e1; border-radius: 8px; font-size: 15px; box-sizing: border-box;\n}\nbutton { margin-top: 18px; width: 100%; padding: 12px; border: 0; border-radius: 10px; background: #0ea5e9; color: white; font-weight: bold; font-size: 15px; }\n" }
      ],
      hints: [
        "Work top-down, one checkpoint at a time — each is a field pattern from this unit.",
        "Radios: `<input type=\"radio\" name=\"plan\" id=\"free\" value=\"free\"> <label for=\"free\">Free</label>` ×3 with different ids/values.",
        "The required checkbox: `<input type=\"checkbox\" id=\"terms\" required> <label for=\"terms\">I accept the terms</label>`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Create your account</h1>\n  <form>\n    <label for=\"email\">Email</label>\n    <input id=\"email\" type=\"email\" required placeholder=\"you@site.com\">\n\n    <label for=\"pass\">Password</label>\n    <input id=\"pass\" type=\"password\" minlength=\"8\" required>\n\n    <h2>Plan</h2>\n    <input type=\"radio\" name=\"plan\" id=\"free\" value=\"free\">\n    <label for=\"free\">Free</label>\n    <input type=\"radio\" name=\"plan\" id=\"pro\" value=\"pro\">\n    <label for=\"pro\">Pro</label>\n    <input type=\"radio\" name=\"plan\" id=\"team\" value=\"team\">\n    <label for=\"team\">Team</label>\n\n    <label for=\"country\">Country</label>\n    <select id=\"country\">\n      <option value=\"us\">United States</option>\n      <option value=\"pt\">Portugal</option>\n      <option value=\"jp\">Japan</option>\n    </select>\n\n    <label for=\"bio\">Short bio</label>\n    <textarea id=\"bio\" rows=\"4\"></textarea>\n\n    <input type=\"checkbox\" id=\"terms\" required>\n    <label for=\"terms\">I accept the terms</label>\n\n    <button>Sign up</button>\n  </form>\n</body>\n</html>\n"
      }
    }
  ]
});
