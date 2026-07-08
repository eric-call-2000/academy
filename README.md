# 🎓 Academy

A Duolingo-style learning platform with **multiple tracks** (courses). Pick a track — like choosing a language on Duolingo — and each keeps its **own progress and streak** under one profile.

Built on the same lesson engine as Hard Hat Academy and AI Academy, unified behind a "pick your track" screen.

## Tracks
| Track | Units | Lessons | What it covers |
|-------|-------|---------|----------------|
| 🤖 AI & Coding | 16 | 128 | Using AI well — Claude, prompting, models, capabilities, coding, agents, safety |
| 📣 Marketing | 8 | 64 | Brand, audience, content, channels, metrics, growth, and marketing with AI |
| 🛡️ Cybersecurity | 10 | 80 | Staying safe and building securely — for both websites and apps |
| 👷 Construction | 13 | 112 | Physical building — foundations, framing, commercial, MEP, structural, scheduling |
| 🏢 BIM Fundamentals | 8 | 64 | BIM the process — dimensions, LOD, ISO 19650, the CDE, and openBIM (vendor-neutral) |
| 📐 Revit | 16 | 128 | Autodesk Revit — families, views, schedules, worksharing, and Dynamo |
| 🔍 Navisworks | 8 | 64 | Autodesk Navisworks — federated models, clash detection, 4D, quantification |
| ☁️ ACC / Forma | 8 | 64 | Autodesk Construction Cloud (Forma) — Docs/CDE, coordination, field management |

**~5,330 quiz questions across 704 lessons in 8 tracks.**

## How to use it
1. Open **`index.html`** in any browser (or double-click **`Start Academy.bat`**).
   *(Optional localhost: `node server.js`, then visit `http://localhost:5175`.)*
2. **Create a profile** ("Who's studying?").
3. **Pick a track** ("What do you want to learn?").
4. Work down the lesson path. Earn ⭐ XP, keep a 🔥 streak, you get ❤️ 5 hearts per lesson.
5. Tap the track name (top-left, with the **⌄**) any time to **switch tracks**. Tap the avatar chip to **switch profiles**.

Progress saves automatically in your browser, **separately per track** — so your Marketing streak and your AI streak are independent.

## Features (every track)
- **5 question types:** multiple choice, true/false, fill-in, order-the-steps, match pairs
- **💪 Practice** — a shuffled mix from lessons you've completed in the current track
- **🔁 Review mistakes** — redo only the questions you got wrong; they drop off as you master them
- **Per-unit ring badges** and a **⚡ Test-out** challenge to skip a unit you already know
- **Multiple profiles** on one device

## File layout (flat — easy to host)
```
academy/
├── index.html              # open this
├── styles.css              # look & feel
├── app.js                  # the lesson engine (track-aware)
├── tracks.js               # defines the tracks + how many unit files each has
├── server.js               # tiny localhost server (port 5175)
├── ai-unit1.js … ai-unit16.js
├── marketing-unit1.js … marketing-unit8.js
├── cyber-unit1.js … cyber-unit10.js
├── construction-unit1.js … construction-unit13.js
├── bim-unit1.js … bim-unit8.js
├── revit-unit1.js … revit-unit16.js       # units 12–16 are Dynamo
├── navis-unit1.js … navis-unit8.js
└── acc-unit1.js … acc-unit8.js
```
Everything is a flat file at the root — no subfolders — so uploading to a static host (e.g. GitHub Pages) is drag-and-drop simple.

## Adding content
- **Add a unit to a track:** drop in `<track>-unitN.js` (next number) and bump that track's `count` in `tracks.js`. See `unit-template.txt` for the shape.
- **Add a whole new track:** add a `defineTrack({...})` line in `tracks.js` with a new `id`/`prefix`, then add `<prefix>-unit1.js …` files. It appears on the picker automatically.

## Hosting it (free)
Because it's all static flat files, publishing is the same as AI Academy: create a public GitHub repo, drag in **every file** (all at the root), then **Settings → Pages → Deploy from a branch → main / root**. Live at `https://<username>.github.io/academy/`.
