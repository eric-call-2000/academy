# 🎓 Academy

A Duolingo-style learning platform with **multiple tracks** (courses). Pick a track — like choosing a language on Duolingo — and each keeps its **own progress and streak** under one profile.

Built on the same lesson engine as Hard Hat Academy and AI Academy, unified behind a "pick your track" screen.

## Tracks
| Track | Units | Lessons | What it covers |
|-------|-------|---------|----------------|
| 🧑‍💻 Full-Stack Coding Lab ↗ | 8 courses | 205 items | **Interactive coding** in [CodeLab](codelab/) — write real HTML/CSS/JS/APIs in a browser sandbox; shares this app's profiles & XP |
| 🗳️ Political Academy ↗ | 30 countries + 73 relationships | 579 briefings | **Daily reading** in [Political Academy](politics/) — illustrated briefings on the world's 30 most important countries; shares this app's profiles & XP |
| 🤖 AI & Coding | 16 | 128 | Using AI well — Claude, prompting, models, capabilities, coding, agents, safety |
| 🏛️ System Design | 25 | 200 | Architecting at scale — distributed systems, trade-offs, and running agents at the max level |
| 📣 Marketing | 8 | 64 | Brand, audience, content, channels, metrics, growth, and marketing with AI |
| 🎥 OBS Studio | 8 | 64 | Recording studio-quality video with OBS — scenes, sources, audio, encoding, cameras, overlays, workflow, and a streaming/troubleshooting intro |
| 🎛️ OBS Overlays | 8 | 64 | Building stream overlays as browser sources — standby screens, facecam frame, HUD, lower thirds, alerts, goal bars and stinger transitions (grounded in the bundled `obs/` assets) |
| ▶️ Content Creation | 8 | 64 | Growing on YouTube — the algorithm, niche, ideas, titles/thumbnails, hooks, retention, publishing/SEO, analytics and monetization |
| 🛡️ Cybersecurity | 10 | 80 | Staying safe and building securely — for both websites and apps |
| 👷 Construction | 13 | 112 | Physical building — foundations, framing, commercial, MEP, structural, scheduling |
| 🏢 BIM Fundamentals | 8 | 64 | BIM the process — dimensions, LOD, ISO 19650, the CDE, and openBIM (vendor-neutral) |
| 📐 Revit | 16 | 128 | Autodesk Revit — families, views, schedules, worksharing, and Dynamo |
| 🔍 Navisworks | 8 | 64 | Autodesk Navisworks — federated models, clash detection, 4D, quantification |
| ☁️ ACC / Forma | 8 | 64 | Autodesk Construction Cloud (Forma) — Docs/CDE, coordination, field management |
| 🧬 Evolutionary Psychology | 25 | 192 | Why the mind evolved — selection, kinship, mating, cooperation and the adapted mind |
| 🌍 Cultural Psychology | 25 | 192 | How culture and mind shape each other — the self, cognition, emotion, the WEIRD problem |
| 🐕 Behaviorism | 25 | 184 | The science of learning — Pavlov, Skinner, conditioning, schedules, behavior change |
| 🧸 Attachment Theory | 25 | 200 | How early bonds shape us — Bowlby, Ainsworth, the Strange Situation, adult love |
| ♟️ Evolutionary Game Theory | 25 | 192 | The math of cooperation and conflict — ESS, Hawk-Dove, the evolution of strategy |

**14,235 quiz questions across 2,056 lessons in 261 units, over 17 quiz tracks** — plus
CodeLab's 205 interactive coding items as an eighteenth, external track, and Political
Academy's 579 reading briefings as a nineteenth.

*(Counted from the unit files on 2026-09-19. If you add units, recount rather than
guessing — this table was wrong by more than double before it was last checked.)*

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
├── sysdesign-unit1.js … sysdesign-unit25.js
├── marketing-unit1.js … marketing-unit8.js
├── obs-unit1.js … obs-unit8.js               # OBS Studio (recording-first)
├── content-unit1.js … content-unit8.js       # Content Creation (YouTube)
├── overlays-unit1.js … overlays-unit8.js     # OBS Overlays (uses obs/ assets)
├── cyber-unit1.js … cyber-unit10.js
├── construction-unit1.js … construction-unit13.js
├── bim-unit1.js … bim-unit8.js
├── revit-unit1.js … revit-unit16.js       # units 12–16 are Dynamo
├── navis-unit1.js … navis-unit8.js
├── acc-unit1.js … acc-unit8.js
├── evopsych-unit1.js … evopsych-unit25.js
├── culture-unit1.js … culture-unit25.js
├── behavior-unit1.js … behavior-unit25.js
├── attachment-unit1.js … attachment-unit25.js
├── egt-unit1.js … egt-unit25.js
├── codelab/                # the external Full-Stack Coding Lab app
├── politics/               # the external Political Academy app (daily briefings)
└── obs/                     # overlay assets the OBS Overlays track teaches
```
261 unit files, all flat at the root — no subfolders — so uploading to a static host is
drag-and-drop simple. Three folders are the exceptions: `codelab/` and `politics/` are whole apps of their own,
and `obs/` holds the stream-overlay assets (standby, facecam, alerts, goal bar, stinger)
that the OBS Overlays track is built around — hosted alongside Academy so the course can
link to the live demos.

## The Full-Stack Coding Lab card
The 🧑‍💻 card on the picker is an **external track**: it opens the CodeLab app (a Codecademy-style sandbox course) instead of a quiz path. CodeLab ships in this repo under `codelab/`, so the card's relative link works wherever Academy is hosted (e.g. `https://<user>.github.io/academy/codelab/`). Because both apps share the same origin, they **share profiles automatically** — CodeLab records completed lessons, XP and streaks into this app's store as track `fullstack`, so they count toward each profile's totals here. Defined in `tracks.js` via the `link` property (any track with `link` becomes an open-this-URL card). The folder can also be mirrored to its own repo (`codelab`) for a standalone URL — sync still works, same origin.

## The Political Academy card
The 🗳️ card is a second external track. It opens **Political Academy**
([`politics/`](politics/)), a reading-first app of short daily briefings on the world's 30
most important countries. Each country is a unit of 12 illustrated briefings: a snapshot, how
power works, how it began, the road here, two issues from its past, the players, three
stories, a spotlight and where things stand. A **world map** shows every
country with its number of briefings, and the relationships between countries, with
three briefings each on 25 of them, from the US and China (steel, tariffs and soybeans)
to Russia–Ukraine, India–Pakistan, the two Koreas, Britain–Argentina, China–India and
Nigeria–South Africa. There are no
quizzes to pass; you read and tap **Finish briefing**. Like CodeLab, it shares profiles
through this app's store and mirrors its progress as track `politics`, so the card shows
live "N done · XP". The plan is in [`politics-curriculum.md`](politics-curriculum.md), and
how it works is in [`politics/README.md`](politics/README.md). All 30 countries are written,
from the United States to Nigeria; dispatches and refreshes keep them current.

External cards take a `cta` in `tracks.js` for the text shown before any progress
("Write real code", "Read today's briefing").

## Adding content
- **Add a unit to a track:** drop in `<track>-unitN.js` (next number) and bump that track's `count` in `tracks.js`. See `unit-template.txt` for the shape.
- **Add a whole new track:** add a `defineTrack({...})` line in `tracks.js` with a new `id`/`prefix`, then add `<prefix>-unit1.js …` files. It appears on the picker automatically.

## Hosting

**Already live:** <https://eric-call-2000.github.io/academy/> — served by GitHub Pages from
`main` at the repo root. CodeLab rides along at
<https://eric-call-2000.github.io/academy/codelab/>, same origin, so profiles and XP are
shared automatically.

Pushing to `main` republishes. Nothing else to do.

To host your own copy: it is all static flat files, so create a public repo, drag in every
file (all at the root), then **Settings → Pages → Deploy from a branch → main / root**.
