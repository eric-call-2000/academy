/* Learn CSS — Unit 5: Colors & Backgrounds */
window.CODELAB.addUnit("css", {
  id: "css-u5",
  title: "Colors & Backgrounds",
  icon: "🌈",
  blurb: "Hex, rgb, hsl, transparency, gradients and shadows — the paint aisle.",
  cheat: [
    { h: "Four ways to say blue", lang: "css", code: "color: steelblue;              /* named   */\ncolor: #4682b4;                /* hex     */\ncolor: rgb(70, 130, 180);      /* rgb     */\ncolor: hsl(207, 44%, 49%);     /* hsl: hue saturation lightness */" },
    { h: "Transparency", lang: "css", code: "background: rgba(15, 23, 42, 0.6);  /* 60% opaque color */\nopacity: 0.3;                        /* fades the WHOLE element */" },
    { h: "Gradients", lang: "css", code: "background: linear-gradient(to right, #0ea5e9, #6366f1);\nbackground: linear-gradient(135deg, #f97316, #ec4899, #8b5cf6);", note: "A gradient is a background IMAGE, not a color." },
    { h: "Box shadows", lang: "css", code: "/*          x    y   blur  color               */\nbox-shadow: 0   10px 25px  rgba(0, 0, 0, 0.15);", note: "Soft, low-contrast shadows read as elevation. Harsh black = sticker." }
  ],
  lessons: [

    {
      id: "css-5",
      title: "Backgrounds & buttons",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Colors come in three common flavors — named (`crimson`), hex (`#0ea5e9`), and `rgb(14, 165, 233)`. Hex is what you'll see most in real codebases.\n\nLet's style the page background and craft a proper button: color, padding, and a pill shape.",
      steps: [
        { text: "Give the page a soft background: `body { background-color: #f1f5f9; }`",
          test: "T.expect(T.css('body', 'background-color') === 'rgb(241, 245, 249)', 'Set background-color: #f1f5f9 on body.');" },
        { text: "Make `.btn` sky blue (`#0ea5e9`) with **white** text.",
          test: "T.expect(T.css('.btn', 'background-color') === 'rgb(14, 165, 233)', 'Set .btn background-color to #0ea5e9.');\nT.expect(T.css('.btn', 'color') === 'rgb(255, 255, 255)', 'Set .btn text color to white.');" },
        { text: "Pad the button: **12px** top/bottom, **24px** left/right (`padding: 12px 24px;`).",
          test: "T.expect(T.css('.btn', 'padding-top') === '12px' && T.css('.btn', 'padding-left') === '24px', 'Use padding: 12px 24px; (top/bottom then left/right).');" },
        { text: "Make it a pill: `border-radius: 999px;`",
          test: "T.expect(T.css('.btn', 'border-top-left-radius') === '999px', 'Set border-radius: 999px on .btn.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Launch day 🚀</h1>\n  <p>Our product ships today.</p>\n  <button class=\"btn\">Get started</button>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* page background + a real button */\n\n.btn {\n  border: none;\n}\n" }
      ],
      hints: [
        "Two-value padding shorthand: first number is top & bottom, second is left & right.",
        "Hex colors go right where named colors do: `background-color: #0ea5e9;`"
      ],
      solution: {
        "styles.css": "body {\n  background-color: #f1f5f9;\n}\n\n.btn {\n  border: none;\n  background-color: #0ea5e9;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 999px;\n}\n"
      }
    },

    {
      id: "css-u5-2",
      title: "hex, rgb & hsl",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Three precise color notations, one color space:\n\n- **hex** `#7c3aed` — two hex digits each for red, green, blue. The industry shorthand.\n- **rgb** `rgb(34, 197, 94)` — the same channels, 0-255. Easy to read.\n- **hsl** `hsl(200, 100%, 50%)` — hue (0-360° on the color wheel), saturation, lightness. **The designer's favorite**: want it darker? Lower the lightness. Want a sibling color? Rotate the hue.",
      steps: [
        { text: "Paint `.swatch-hex` with hex `#7c3aed`.",
          test: "T.expect(T.css('.swatch-hex', 'background-color') === 'rgb(124, 58, 237)', 'Set background-color: #7c3aed on .swatch-hex.');" },
        { text: "Paint `.swatch-rgb` with `rgb(34, 197, 94)`.",
          test: "T.expect(T.css('.swatch-rgb', 'background-color') === 'rgb(34, 197, 94)', 'Set background-color: rgb(34, 197, 94) on .swatch-rgb.');" },
        { text: "Paint `.swatch-hsl` with `hsl(200, 100%, 50%)` — the browser converts it to rgb for you.",
          test: "T.expect(T.css('.swatch-hsl', 'background-color') === 'rgb(0, 170, 255)', 'Set background-color: hsl(200, 100%, 50%) on .swatch-hsl.');\nT.expect(T.sheet().toLowerCase().indexOf('hsl(') !== -1, 'Write it AS hsl(…) in your stylesheet — the point is learning the notation.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Paint chips</h1>\n  <div class=\"swatch swatch-hex\">#hex</div>\n  <div class=\"swatch swatch-rgb\">rgb()</div>\n  <div class=\"swatch swatch-hsl\">hsl()</div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; }\n.swatch {\n  display: inline-block;\n  width: 110px;\n  height: 80px;\n  border-radius: 12px;\n  color: white;\n  font-weight: bold;\n  text-align: center;\n  line-height: 80px;\n  margin-right: 8px;\n}\n\n/* three notations, three swatches */\n\n" }
      ],
      hints: [
        "Three rules, one property each — just different notations.",
        "hsl reads as: hue 200 (into the blues), saturation 100% (vivid), lightness 50% (balanced)."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; }\n.swatch {\n  display: inline-block;\n  width: 110px;\n  height: 80px;\n  border-radius: 12px;\n  color: white;\n  font-weight: bold;\n  text-align: center;\n  line-height: 80px;\n  margin-right: 8px;\n}\n\n.swatch-hex { background-color: #7c3aed; }\n.swatch-rgb { background-color: rgb(34, 197, 94); }\n.swatch-hsl { background-color: hsl(200, 100%, 50%); }\n"
      }
    },

    {
      id: "css-u5-3",
      title: "Transparency: rgba & opacity",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Two different transparencies:\n\n- `rgba(15, 23, 42, 0.6)` — a **60%-opaque color**. Only that color is see-through; text on top stays crisp. (The 4th number is alpha, 0-1.)\n- `opacity: 0.3` — fades the **entire element**, children included.\n\nThe photo-card overlay below is the classic use: a translucent dark layer that keeps white text readable over any image.",
      steps: [
        { text: "Tint the `.overlay` with 60% dark navy: `background-color: rgba(15, 23, 42, 0.6)`.",
          test: "T.expect(T.css('.overlay', 'background-color') === 'rgba(15, 23, 42, 0.6)', 'Set background-color: rgba(15, 23, 42, 0.6) on .overlay — currently ' + T.css('.overlay', 'background-color'));" },
        { text: "Fade the whole `.watermark` element to `opacity: 0.3`.",
          test: "T.expect(T.css('.watermark', 'opacity') === '0.3', 'Set opacity: 0.3 on .watermark.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"photo-card\">\n    <div class=\"overlay\">\n      <h1>Aurora nights</h1>\n      <p>Iceland, February</p>\n    </div>\n  </div>\n  <p class=\"watermark\">© CodeLab Photography</p>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; margin: 0; }\n.photo-card {\n  height: 200px;\n  background: linear-gradient(45deg, #14b8a6, #6366f1); /* stand-in for a photo */\n  border-radius: 14px;\n  margin: 16px;\n  overflow: hidden;\n}\n.overlay {\n  height: 100%;\n  color: white;\n  padding: 16px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.overlay h1, .overlay p { margin: 0; }\n.watermark { text-align: center; font-weight: bold; }\n\n/* rgba overlay + opacity watermark */\n\n" }
      ],
      hints: [
        "The 4th rgba number is alpha: 0 invisible → 1 solid. 0.6 = a classy dim.",
        "opacity affects everything inside the element — that's why we DON'T use it for the overlay text."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; margin: 0; }\n.photo-card {\n  height: 200px;\n  background: linear-gradient(45deg, #14b8a6, #6366f1); /* stand-in for a photo */\n  border-radius: 14px;\n  margin: 16px;\n  overflow: hidden;\n}\n.overlay {\n  height: 100%;\n  color: white;\n  padding: 16px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  background-color: rgba(15, 23, 42, 0.6);\n}\n.overlay h1, .overlay p { margin: 0; }\n.watermark { text-align: center; font-weight: bold; }\n\n.watermark {\n  opacity: 0.3;\n}\n"
      }
    },

    {
      id: "css-u5-4",
      title: "Gradients",
      kind: "web", chip: "CSS", xp: 15,
      brief: "A **gradient** is a generated background *image*:\n\n- `linear-gradient(to right, #0ea5e9, #6366f1)` — direction, then color stops\n- angles work too: `135deg`\n- stack more colors for sunset vibes: `#f97316, #ec4899, #8b5cf6`\n\nEvery \"premium\"-looking hero section you've seen is two colors and this one function.",
      steps: [
        { text: "Give `.hero` a left-to-right gradient from `#0ea5e9` to `#6366f1`.",
          test: "var v = (T.css('.hero', 'background-image') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('linear-gradient') !== -1, 'Use background: linear-gradient(…) on .hero.');\nT.expect(v.indexOf('toright') !== -1, 'Direction: to right.');\nT.expect(v.indexOf('rgb(14,165,233)') !== -1 && v.indexOf('rgb(99,102,241)') !== -1, 'Stops: #0ea5e9 then #6366f1.');" },
        { text: "Give `.sunset` a three-stop `135deg` gradient: `#f97316`, `#ec4899`, `#8b5cf6`.",
          test: "var v = (T.css('.sunset', 'background-image') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('135deg') !== -1, 'Angle the .sunset gradient at 135deg.');\nT.expect(v.indexOf('rgb(249,115,22)') !== -1 && v.indexOf('rgb(236,72,153)') !== -1 && v.indexOf('rgb(139,92,246)') !== -1, 'Use all three sunset stops in order.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"hero\">\n    <h1>Ship your ideas</h1>\n  </div>\n  <div class=\"sunset\">\n    <h2>Golden hour mode</h2>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; margin: 0; }\n.hero, .sunset {\n  color: white;\n  padding: 40px 24px;\n  margin: 14px;\n  border-radius: 16px;\n}\n\n/* two gradients */\n\n" }
      ],
      hints: [
        "`background: linear-gradient(to right, #0ea5e9, #6366f1);`",
        "Angles replace the keyword: `linear-gradient(135deg, a, b, c)` — stops just line up after it."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; margin: 0; }\n.hero, .sunset {\n  color: white;\n  padding: 40px 24px;\n  margin: 14px;\n  border-radius: 16px;\n}\n\n.hero {\n  background: linear-gradient(to right, #0ea5e9, #6366f1);\n}\n\n.sunset {\n  background: linear-gradient(135deg, #f97316, #ec4899, #8b5cf6);\n}\n"
      }
    },

    {
      id: "css-u5-5",
      title: "Box shadows: faking depth",
      kind: "web", chip: "CSS", xp: 15,
      brief: "`box-shadow: x y blur color` lifts elements off the page:\n\n- **Cards**: `0 10px 25px rgba(0, 0, 0, 0.15)` — soft, downward, subtle\n- Pressed/inset states: add the `inset` keyword\n\nThe secret to \"designed-looking\" shadows: **low opacity, generous blur**. Solid black at zero blur is a sticker, not a shadow.",
      steps: [
        { text: "Float the `.card`: `box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15)`.",
          test: "var v = (T.css('.card', 'box-shadow') || '');\nT.expect(v !== 'none' && v.indexOf('10px') !== -1 && v.indexOf('25px') !== -1, 'Set box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) on .card — got: ' + v);\nT.expect(v.indexOf('0.15') !== -1, 'Keep the shadow subtle: rgba alpha 0.15.');" },
        { text: "Give the `.slot` an **inset** shadow: `inset 0 2px 6px rgba(0, 0, 0, 0.25)`.",
          test: "var v = (T.css('.slot', 'box-shadow') || '');\nT.expect(v.indexOf('inset') !== -1, 'Use the inset keyword on .slot\\'s box-shadow — it carves INTO the surface.');\nT.expect(v.indexOf('6px') !== -1, 'Blur it 6px: inset 0 2px 6px rgba(0, 0, 0, 0.25).');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Floating card</h2>\n    <p>Shadow below, life above.</p>\n    <div class=\"slot\">an inset well</div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; background: #f1f5f9; padding: 30px; }\n.card {\n  background: white;\n  max-width: 300px;\n  padding: 20px;\n  border-radius: 16px;\n}\n.slot {\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 12px;\n  text-align: center;\n  color: #64748b;\n}\n\n/* one lifted, one carved */\n\n" }
      ],
      hints: [
        "Order: x-offset, y-offset, blur, color — `box-shadow: 0 10px 25px rgba(0,0,0,0.15);`",
        "inset goes first: `box-shadow: inset 0 2px 6px rgba(0,0,0,0.25);`"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; background: #f1f5f9; padding: 30px; }\n.card {\n  background: white;\n  max-width: 300px;\n  padding: 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n}\n.slot {\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 12px;\n  text-align: center;\n  color: #64748b;\n  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.25);\n}\n"
      }
    },

    {
      id: "css-quiz-5",
      title: "Unit 5 quiz: Colors & Backgrounds",
      kind: "quiz", xp: 10,
      brief: "Notations, alpha, gradients and shadows. 80% to pass.",
      questions: [
        { q: "In `hsl(200, 100%, 50%)`, what does the 200 mean?",
          choices: ["The hue — degrees on the wheel", "Saturation, pushed past 100%", "Lightness, on a 0–255 scale", "The blue channel, out of 255"],
          answer: 0, explain: "Hue is the wheel position in degrees (0 red → 120 green → 240 blue), so 200 lands on a sky blue. Saturation and lightness are the second and third values, both percentages. Designers love hsl because \"darker\" is just lower lightness." },
        { q: "You want a dark overlay whose TEXT stays fully crisp. Which tool?",
          choices: ["background-color: rgba(0,0,0,0.6)", "opacity: 0.6 on the overlay element", "display: none on the text layer", "color: transparent on the panel"],
          answer: 0, explain: "rgba makes only the COLOR translucent, so text sitting on top stays at full strength. `opacity` fades the element AND everything nested inside it — your headline goes ghostly along with the backdrop." },
        { q: "The 4th value in `rgba(15, 23, 42, 0.6)` is…",
          choices: ["Alpha", "Brightness", "Blur", "Hue"],
          answer: 0, explain: "Alpha is opacity, running 0 (invisible) to 1 (solid) — so `0.6` here is 60% opaque and the page behind shows through the other 40%." },
        { q: "What kind of thing is `linear-gradient(...)` to the browser?",
          choices: ["An image that the browser draws", "A background color", "A CSS filter effect, like `blur()`", "A border style"],
          answer: 0, explain: "It's an IMAGE the browser draws on the fly. That's why it belongs to `background` / `background-image`, why it can layer with real images, and why `background-color` flatly refuses to accept it." },
        { q: "Which shadow reads as elegant elevation?",
          code: "A) box-shadow: 0 10px 25px rgba(0,0,0,0.15);\nB) box-shadow: 5px 5px 0 #000;",
          lang: "css",
          choices: ["A", "B", "Neither, shadows are dated", "Both shadows read the same"],
          answer: 0, explain: "A's generous blur plus gentle alpha imitates how real light falls, so the card reads as floating a few millimetres off the page. B's hard zero-blur shadow has its place too — retro stickers, brutalist buttons — but it reads as graphic, not elevated." },
        { q: "What does the `inset` keyword do to a box-shadow?",
          choices: ["Draws the shadow INSIDE the box", "Doubles the blur radius", "Shifts the shadow to the left", "Makes the shadow pulse gently"],
          answer: 0, explain: "Outset = the box floats above the page; inset = the box is pressed into it, carving a well. Great for search fields and pressed-button states. Everything else about the syntax is identical — `inset` is just one extra keyword in the value." }
      ]
    }
  ]
});
