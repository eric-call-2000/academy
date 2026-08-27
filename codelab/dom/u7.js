/* Building Interactive Websites — Unit 7: Timers & motion */
window.CODELAB.addUnit("dom", {
  id: "dom-u7",
  title: "Timers & motion",
  icon: "⏱️",
  blurb: "Make the page move on its own — setTimeout, setInterval, countdowns and the requestAnimationFrame loop.",
  cheat: [
    { h: "setTimeout: once, later", lang: "js", code: "const id = setTimeout(() => {\n  toast.classList.remove(\"show\");\n}, 3000);\n\nclearTimeout(id); // changed your mind", note: "Delay is in milliseconds — 1000 = one second. Pass the function, don't call it." },
    { h: "setInterval: again and again", lang: "js", code: "const timerId = setInterval(tick, 1000);\n\nclearInterval(timerId); // ALWAYS keep the id", note: "Without the id there is no off switch." },
    { h: "A countdown that stops itself", lang: "js", code: "let count = 5;\nconst timerId = setInterval(() => {\n  count--;\n  countEl.textContent = count;\n  if (count === 0) clearInterval(timerId);\n}, 1000);" },
    { h: "The requestAnimationFrame loop", lang: "js", code: "function loop() {\n  x += 4;\n  ball.style.transform = `translateX(${x}px)`;\n  if (x < 200) requestAnimationFrame(loop);\n}\nrequestAnimationFrame(loop);", note: "Runs right before each repaint (~60 fps) and pauses in hidden tabs — the animation timer." },
    { h: "Classic gotcha", lang: "js", code: "setTimeout(boom(), 500); // ❌ runs NOW — you called it\nsetTimeout(boom, 500);   // ✅ runs in 500 ms" }
  ],
  lessons: [

    {
      id: "dom-u7-1",
      title: "setTimeout",
      kind: "web", chip: "DOM", xp: 15, mins: 12,
      brief: "Ever saved a doc and watched a little **\"Saved ✓\"** bubble disappear on its own? That's `setTimeout` — run a function **once**, after a delay:\n\n- `setTimeout(fn, 300)` — call `fn` after 300 milliseconds\n- pass the function itself — `fn`, not `fn()`\n- the delay is in **ms**: 1000 = one second\n\nBuild the classic: a toast that pops up on Save and hides itself. We use a snappy 300 ms so the checks run fast — real apps hold a toast for ~3000 ms.",
      steps: [
        { text: "At load the `#toast` stays hidden (the CSS handles that — don't show it yet).",
          test: "T.expect(T.css('#toast', 'display') === 'none', 'Leave the toast alone at load — it should only appear after a click. The CSS hides it until it has the class \"show\".');" },
        { text: "Clicking `#saveBtn` shows the toast: add the class `show`.",
          test: "T.click('#saveBtn');\nT.expect(T.css('#toast', 'display') !== 'none', 'In the click handler, run toast.classList.add(\"show\") — the CSS turns it visible.');" },
        { text: "300 ms later it hides itself — `setTimeout` removes the class. (And it pops back on the next click.)",
          test: "await T.sleep(500);\nT.expect(T.css('#toast', 'display') === 'none', 'Schedule the hide inside the click handler: setTimeout(() => toast.classList.remove(\"show\"), 300).');\nT.click('#saveBtn');\nT.expect(T.css('#toast', 'display') !== 'none', 'It should pop right back on every new click.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Cloud notes ☁️</h1>\n  <p>Edit your masterpiece, then hit save.</p>\n  <button id=\"saveBtn\">💾 Save</button>\n  <div id=\"toast\">Saved ✓</div>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\nbutton {\n  font-size: 15px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 2px solid #cbd5e1;\n  background: white;\n  cursor: pointer;\n}\n#toast {\n  display: none;\n  position: fixed;\n  bottom: 16px;\n  left: 16px;\n  background: #1e293b;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 10px;\n}\n#toast.show {\n  display: block;\n}\n" },
        { name: "script.js", content: "const saveBtn = document.querySelector(\"#saveBtn\");\nconst toast = document.querySelector(\"#toast\");\n\nsaveBtn.addEventListener(\"click\", () => {\n  // 1) show the toast: add the class \"show\"\n  // 2) setTimeout: remove the class again after 300 ms\n});\n" }
      ],
      hints: [
        "Show first: `toast.classList.add(\"show\");` — then schedule the hide.",
        "`setTimeout` takes a function and a delay: `setTimeout(() => { toast.classList.remove(\"show\"); }, 300);` — note you pass the arrow function, you don't call it."
      ],
      solution: {
        "script.js": "const saveBtn = document.querySelector(\"#saveBtn\");\nconst toast = document.querySelector(\"#toast\");\n\nsaveBtn.addEventListener(\"click\", () => {\n  toast.classList.add(\"show\");\n  setTimeout(() => {\n    toast.classList.remove(\"show\");\n  }, 300);\n});\n"
      }
    },

    {
      id: "dom-u7-2",
      title: "setInterval & clearInterval",
      kind: "web", chip: "DOM", xp: 15, mins: 14,
      brief: "`setTimeout` fires once — **`setInterval` fires again and again** until you stop it:\n\n- `const timerId = setInterval(fn, 200)` — run `fn` every 200 ms\n- `clearInterval(timerId)` — the off switch. Lose the id and the timer runs FOREVER.\n\nMission control needs a launch countdown: 5… 4… 3… 2… 1… 0 — **Liftoff! 🚀**. The interval must shut itself down at zero, or your rocket counts into negative numbers for eternity. (200 ms ticks keep the checks quick — a real countdown ticks every 1000.)",
      steps: [
        { text: "The display starts at **5**; clicking `#launchBtn` starts a `setInterval` ticking every 200 ms, counting down in `#count`.",
          test: "T.eq(T.text('#count'), '5', 'The countdown display should start at 5.');\nT.click('#launchBtn');\nawait T.sleep(500);\nvar n = parseInt(T.text('#count'), 10);\nT.expect(!isNaN(n) && n < 5 && n > 0, 'Half a second after launch the countdown should be mid-flight (around 3) — setInterval every 200 ms: count--, then show it in #count. Right now it shows: ' + T.text('#count'));" },
        { text: "At **0** the countdown stops (`clearInterval`) and `#msg` announces **Liftoff! 🚀**.",
          test: "await T.sleep(700);\nT.eq(T.text('#count'), '0', 'About 1.2 s after launch the display should sit at exactly 0.');\nT.expect((T.text('#msg') || '').toLowerCase().indexOf('liftoff') !== -1, 'When the count reaches 0, set #msg to \"Liftoff! 🚀\".');" },
        { text: "It NEVER goes negative — the interval really is dead.",
          test: "await T.sleep(500);\nT.eq(T.text('#count'), '0', 'Still 0? If you see a negative number the interval is still alive — call clearInterval(timerId) the moment count hits 0.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Mission control 🚀</h1>\n  <div id=\"count\">5</div>\n  <p id=\"msg\"></p>\n  <button id=\"launchBtn\">Launch</button>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\n#count {\n  font-size: 64px;\n  font-weight: bold;\n  margin: 8px 0;\n}\n#msg {\n  font-size: 20px;\n  min-height: 24px;\n}\nbutton {\n  font-size: 15px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 2px solid #cbd5e1;\n  background: white;\n  cursor: pointer;\n}\n" },
        { name: "script.js", content: "const launchBtn = document.querySelector(\"#launchBtn\");\nconst countEl = document.querySelector(\"#count\");\nconst msgEl = document.querySelector(\"#msg\");\n\nlet count = 5;\n\nlaunchBtn.addEventListener(\"click\", () => {\n  // 1) const timerId = setInterval(() => { ... }, 200);\n  // 2) each tick: count--, show it in countEl\n  // 3) when count === 0: clearInterval(timerId), msgEl says \"Liftoff! 🚀\"\n});\n" }
      ],
      hints: [
        "The tick skeleton: `const timerId = setInterval(() => { count--; countEl.textContent = count; }, 200);`",
        "clearInterval needs the id setInterval returned — that's the whole reason you saved it in a const.",
        "After updating the display, still inside the tick: `if (count === 0) { clearInterval(timerId); msgEl.textContent = \"Liftoff! 🚀\"; }`"
      ],
      solution: {
        "script.js": "const launchBtn = document.querySelector(\"#launchBtn\");\nconst countEl = document.querySelector(\"#count\");\nconst msgEl = document.querySelector(\"#msg\");\n\nlet count = 5;\n\nlaunchBtn.addEventListener(\"click\", () => {\n  const timerId = setInterval(() => {\n    count--;\n    countEl.textContent = count;\n    if (count === 0) {\n      clearInterval(timerId);\n      msgEl.textContent = \"Liftoff! 🚀\";\n    }\n  }, 200);\n});\n"
      }
    },

    {
      id: "dom-u7-3",
      title: "requestAnimationFrame",
      kind: "web", chip: "DOM", xp: 15, mins: 12,
      brief: "`setInterval` is fine for clocks — for **motion** the browser gives you something better. `requestAnimationFrame(fn)` runs `fn` right before the **next repaint** (~60×/s), buttery smooth, and it pauses in background tabs.\n\nThe pattern is a self-scheduling loop:\n\n- a `step()` function moves things a tiny bit\n- a `loop()` calls `step()`, then `requestAnimationFrame(loop)` again\n\nThe checks grade `step()` directly — every call slides the ball 4px via `transform`. Press **▶ Play** in the preview to watch the full loop glide.",
      steps: [
        { text: "Write `step()`: add 4 to `x`, then set the ball's `style.transform` to `translateX(<x>px)`.",
          test: "T.expect(typeof step === 'function', 'Declare it with function step() { ... } so the checks can call it.');\nstep();\nvar tf = T.$('#ball').style.transform;\nT.expect(tf.indexOf('4px') !== -1, 'After ONE step() call the inline transform should be translateX(4px) — got: ' + tf);" },
        { text: "Calls accumulate: `x` lives OUTSIDE the function, so every call moves the ball further.",
          test: "step();\nstep();\nvar tf = T.$('#ball').style.transform;\nT.expect(tf.indexOf('12px') !== -1, 'Three total calls should reach translateX(12px) — keep let x = 0 at the top level, not inside step(). Got: ' + tf);" },
        { text: "Write `startAnimation()`: an inner `loop()` calls `step()` then re-schedules itself with `requestAnimationFrame` while `x < 200`. Wire `#playBtn` to it.",
          test: "T.expect(typeof startAnimation === 'function', 'Define startAnimation() — the Play button calls it.');\nT.expect(startAnimation.toString().indexOf('requestAnimationFrame') !== -1, 'Inside startAnimation, schedule frames with requestAnimationFrame(loop).');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Rolling ball</h1>\n  <div id=\"track\">\n    <div id=\"ball\">⚽</div>\n  </div>\n  <button id=\"playBtn\">▶ Play</button>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\n#track {\n  width: 260px;\n  padding: 8px;\n  border: 2px dashed #cbd5e1;\n  border-radius: 12px;\n  margin-bottom: 12px;\n}\n#ball {\n  font-size: 40px;\n  width: 48px;\n}\nbutton {\n  font-size: 15px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 2px solid #cbd5e1;\n  background: white;\n  cursor: pointer;\n}\n" },
        { name: "script.js", content: "const ball = document.querySelector(\"#ball\");\nconst playBtn = document.querySelector(\"#playBtn\");\n\nlet x = 0;\n\n// 1) function step():\n//    x += 4, then ball.style.transform = \"translateX(\" + x + \"px)\"\n\n// 2) function startAnimation():\n//    an inner loop() calls step(), then requestAnimationFrame(loop)\n//    again — but only while x < 200\n\nplayBtn.addEventListener(\"click\", () => {\n  // call startAnimation() here\n});\n" }
      ],
      hints: [
        "Declare it as a function statement: `function step() { x += 4; ball.style.transform = \"translateX(\" + x + \"px)\"; }`",
        "startAnimation nests the loop: `function startAnimation() { function loop() { step(); if (x < 200) requestAnimationFrame(loop); } requestAnimationFrame(loop); }` — then call `startAnimation()` inside the click handler."
      ],
      solution: {
        "script.js": "const ball = document.querySelector(\"#ball\");\nconst playBtn = document.querySelector(\"#playBtn\");\n\nlet x = 0;\n\nfunction step() {\n  x += 4;\n  ball.style.transform = `translateX(${x}px)`;\n}\n\nfunction startAnimation() {\n  function loop() {\n    step();\n    if (x < 200) {\n      requestAnimationFrame(loop);\n    }\n  }\n  requestAnimationFrame(loop);\n}\n\nplayBtn.addEventListener(\"click\", () => {\n  startAnimation();\n});\n" }
    },

    {
      id: "dom-u7-p",
      title: "Project: Image carousel",
      kind: "web", chip: "DOM", xp: 50, mins: 35, project: true,
      brief: "Every photo app, every landing-page hero: a **carousel**. You'll build the whole machine:\n\n- `render()` shows `slides[current]` and lights the matching dot\n- Prev/Next move with **wrap-around** — `(i + slides.length) % slides.length` never falls off the edge\n- **▶ Play** auto-advances every 400 ms with `setInterval`; clicking again pauses with `clearInterval`\n\nState first, then render: change `current`, call `render()`, done. When the checks pass, hit Play in the preview and watch your postcards roll. (Real carousels tick every 3–5 s — ours is 400 ms so the checks stay snappy.)",
      steps: [
        { text: "On load, `render()` shows slide 1 (🌅 Sunrise) and builds one `.dot` per slide in `#dots`, with class `active` on the current one.",
          test: "T.eq(T.count('#dots .dot'), 4, 'render() should build one span.dot per slide inside #dots — found ' + T.count('#dots .dot') + '.');\nvar dots = T.$$('#dots .dot');\nT.expect(dots[0].classList.contains('active'), 'Give the CURRENT slide\\'s dot the class \"active\" — slide 1 at load.');\nT.expect((T.text('#slideIcon') || '').indexOf('🌅') !== -1, 'Call render() once at the bottom of the script so slide 1 (🌅) shows at load.');\nT.expect((T.text('#slideCaption') || '').toLowerCase().indexOf('sunrise') !== -1, 'Show the caption too — slide 1 is Sunrise.');" },
        { text: "`#nextBtn` advances one slide — and the active dot follows.",
          test: "T.click('#nextBtn');\nT.expect((T.text('#slideIcon') || '').indexOf('🌊') !== -1, 'Next should advance to slide 2 (🌊 Ocean) — goTo(current + 1), which sets current and calls render().');\nvar dots = T.$$('#dots .dot');\nT.expect(dots[1].classList.contains('active') && !dots[0].classList.contains('active'), 'Exactly ONE dot is active at a time — rebuild or update the dots on every render.');" },
        { text: "Both ends **wrap around**: Next past the last slide lands on the first; Prev from the first lands on the last.",
          test: "T.click('#nextBtn');\nT.click('#nextBtn');\nT.click('#nextBtn');\nT.expect((T.text('#slideIcon') || '').indexOf('🌅') !== -1, 'Three more Next clicks should run past the end and WRAP to slide 1 (🌅) — use (i + slides.length) % slides.length.');\nT.click('#prevBtn');\nT.expect((T.text('#slideIcon') || '').indexOf('🌋') !== -1, 'Prev from slide 1 should wrap BACKWARDS to the last slide (🌋).');\nvar dots = T.$$('#dots .dot');\nT.expect(dots[3].classList.contains('active') && !dots[0].classList.contains('active'), 'The dots must follow the wrap too — dot 4 is active now.');" },
        { text: "`#playBtn` starts auto-advance: a `setInterval` every 400 ms. Clicking it again pauses.",
          test: "T.click('#playBtn');\nawait T.sleep(900);\nT.click('#playBtn');\nvar icon = T.text('#slideIcon') || '';\nT.expect(icon.indexOf('🌊') !== -1, 'Play should tick every 400 ms — from slide 4, two ticks in ~0.9 s wrap around and land on slide 2 (🌊). Got: ' + icon);" },
        { text: "Paused means **paused** — nothing moves anymore.",
          test: "await T.sleep(600);\nT.expect((T.text('#slideIcon') || '').indexOf('🌊') !== -1, 'The carousel must hold still after pausing — clearInterval(timerId) and reset timerId to null.');\nvar dots = T.$$('#dots .dot');\nT.expect(dots[1].classList.contains('active'), 'The active dot holds still too.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Postcard carousel</h1>\n  <div id=\"carousel\">\n    <div id=\"slideIcon\">…</div>\n    <div id=\"slideCaption\">loading…</div>\n  </div>\n  <div id=\"dots\"></div>\n  <div id=\"controls\">\n    <button id=\"prevBtn\">⟨ Prev</button>\n    <button id=\"playBtn\">▶ Play</button>\n    <button id=\"nextBtn\">Next ⟩</button>\n  </div>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n  text-align: center;\n}\n#carousel {\n  width: 260px;\n  margin: 0 auto;\n  padding: 30px 0;\n  border-radius: 16px;\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  color: white;\n}\n#slideIcon {\n  font-size: 72px;\n}\n#slideCaption {\n  font-size: 20px;\n  margin-top: 8px;\n}\n#dots {\n  margin: 14px 0;\n}\n.dot {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #cbd5e1;\n  margin: 0 4px;\n  cursor: pointer;\n}\n.dot.active {\n  background: #1e293b;\n}\nbutton {\n  font-size: 15px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 2px solid #cbd5e1;\n  background: white;\n  cursor: pointer;\n}\n" },
        { name: "script.js", content: "const slides = [\n  { icon: \"🌅\", caption: \"Sunrise\" },\n  { icon: \"🌊\", caption: \"Ocean\" },\n  { icon: \"🌲\", caption: \"Forest\" },\n  { icon: \"🌋\", caption: \"Volcano\" }\n];\n\nconst slideIcon = document.querySelector(\"#slideIcon\");\nconst slideCaption = document.querySelector(\"#slideCaption\");\nconst dotsEl = document.querySelector(\"#dots\");\nconst prevBtn = document.querySelector(\"#prevBtn\");\nconst nextBtn = document.querySelector(\"#nextBtn\");\nconst playBtn = document.querySelector(\"#playBtn\");\n\nlet current = 0;\nlet timerId = null;\n\n// 1) render():\n//    - slideIcon shows slides[current].icon, slideCaption its caption\n//    - rebuild #dots: one <span class=\"dot\"> per slide,\n//      the current one also gets the class \"active\"\n\n// 2) goTo(i): current = (i + slides.length) % slides.length, then render()\n\n// 3) prevBtn → goTo(current - 1); nextBtn → goTo(current + 1)\n\n// 4) playBtn: if timerId is null, timerId = setInterval(→ goTo(current + 1), 400)\n//    and label it \"⏸ Pause\"; otherwise clearInterval(timerId),\n//    timerId = null, label \"▶ Play\"\n\n// 5) call render() once so slide 1 shows at load\n" }
      ],
      hints: [
        "Rebuild the dots inside render(): `dotsEl.innerHTML = \"\";` then for each index make a span, `dot.className = i === current ? \"dot active\" : \"dot\";`, append it.",
        "`current = (i + slides.length) % slides.length;` handles BOTH ends: index 4 wraps to 0, index -1 wraps to 3.",
        "Play/pause is a null-check toggle: `if (timerId === null) { timerId = setInterval(() => goTo(current + 1), 400); } else { clearInterval(timerId); timerId = null; }` — update the button label in each branch."
      ],
      solution: {
        "script.js": "const slides = [\n  { icon: \"🌅\", caption: \"Sunrise\" },\n  { icon: \"🌊\", caption: \"Ocean\" },\n  { icon: \"🌲\", caption: \"Forest\" },\n  { icon: \"🌋\", caption: \"Volcano\" }\n];\n\nconst slideIcon = document.querySelector(\"#slideIcon\");\nconst slideCaption = document.querySelector(\"#slideCaption\");\nconst dotsEl = document.querySelector(\"#dots\");\nconst prevBtn = document.querySelector(\"#prevBtn\");\nconst nextBtn = document.querySelector(\"#nextBtn\");\nconst playBtn = document.querySelector(\"#playBtn\");\n\nlet current = 0;\nlet timerId = null;\n\nfunction render() {\n  slideIcon.textContent = slides[current].icon;\n  slideCaption.textContent = slides[current].caption;\n\n  dotsEl.innerHTML = \"\";\n  slides.forEach((slideItem, i) => {\n    const dot = document.createElement(\"span\");\n    dot.className = i === current ? \"dot active\" : \"dot\";\n    dot.addEventListener(\"click\", () => goTo(i));\n    dotsEl.appendChild(dot);\n  });\n}\n\nfunction goTo(i) {\n  current = (i + slides.length) % slides.length;\n  render();\n}\n\nprevBtn.addEventListener(\"click\", () => goTo(current - 1));\nnextBtn.addEventListener(\"click\", () => goTo(current + 1));\n\nplayBtn.addEventListener(\"click\", () => {\n  if (timerId === null) {\n    timerId = setInterval(() => goTo(current + 1), 400);\n    playBtn.textContent = \"⏸ Pause\";\n  } else {\n    clearInterval(timerId);\n    timerId = null;\n    playBtn.textContent = \"▶ Play\";\n  }\n});\n\nrender();\n"
      }
    },

    {
      id: "dom-quiz-7",
      title: "Unit 7 quiz: Timers",
      kind: "quiz", xp: 10,
      questions: [
        { q: "You want a toast to disappear once, 3 seconds after it appears. Which timer?",
          choices: ["setInterval(hideToast, 3000)", "setTimeout(hideToast, 3000)", "requestAnimationFrame(hideToast)", "hideToast(3000)"],
          answer: 1, explain: "setTimeout runs once after the delay. setInterval would keep re-hiding it every 3 seconds forever." },
        { q: "The toast appears instantly instead of after 2 seconds. Why?",
          code: "setTimeout(showToast(), 2000);",
          lang: "js",
          choices: ["Nothing is wrong — this is the normal way", "The delay must be at least 1000", "showToast() CALLS the function immediately", "setTimeout only accepts arrow functions"],
          answer: 2, explain: "Parentheses call the function right now and hand its RETURN VALUE (undefined) to setTimeout — so the toast shows at once and the timer has nothing to fire 2 seconds later. Pass the reference instead: setTimeout(showToast, 2000), and let the timer do the calling." },
        { q: "The ticker is driving everyone crazy. How do you stop it?",
          code: "const id = setInterval(tick, 500);",
          lang: "js",
          choices: ["clearInterval(id)", "id.stop()", "setInterval(tick, 0)", "delete id"],
          answer: 0, explain: "setInterval returns an id — keep it and hand it to clearInterval. (clearTimeout is the setTimeout twin.)" },
        { q: "Why is requestAnimationFrame better than setInterval(move, 16) for animation?",
          choices: ["It isn't — they behave identically", "rAF runs on a background thread, so it never blocks the page", "rAF can move elements without any JavaScript", "rAF fires right before each repaint, once per frame"],
          answer: 3, explain: "rAF syncs to the browser's actual paint cycle, so every frame lands exactly once per repaint — callbacks never pile up when the machine is busy, and a hidden tab stops running them instead of burning CPU. setInterval(move, 16) is only guessing at 60fps, and it drifts. What rAF buys you is better scheduling, not extra speed: the callback still runs on the main thread like any other JavaScript." },
        { q: "What does the console show right away?",
          code: "let seconds = 0;\nsetInterval(() => {\n  seconds++;\n}, 1000);\nconsole.log(seconds);",
          lang: "js",
          choices: ["0, because the log runs immediately", "1, since the interval runs once first", "Nothing until a second passes, then 1", "undefined, since seconds is not set yet"],
          answer: 0, explain: "Timers are asynchronous: setInterval only SCHEDULES work for later, it never runs the callback on the spot. Your script races straight on to the log while seconds is still 0, and the first tick lands a full second afterwards." },
        { q: "setTimeout(launch, 5) waits about…",
          choices: ["5 seconds", "5 milliseconds", "5 minutes", "half a second"],
          answer: 1, explain: "Milliseconds everywhere in timer-land: that second argument is always ms, so one second is 1000 and five of them is barely a blink. Forgetting the ×1000 is a classic (very fast) bug." }
      ]
    }
  ]
});
