# 🗳️ Political Academy

Short daily **briefings**, a few minutes each, on the 30 countries that shape world
politics right now. It is a reading-first app that lives inside Academy the way CodeLab does. There are no
quizzes to pass and no hearts to lose. You read a short, illustrated briefing, tap
**Finish briefing**, and your progress, XP and streak save.

The plan behind it (the 30 countries, the unit format, the image and accuracy rules, the
build order) is in [`../politics-curriculum.md`](../politics-curriculum.md).

## Status

| Unit | Country | Briefings | Current as of | Pictures |
|------|---------|-----------|---------------|----------|
| 1 | 🇺🇸 United States | 8 of 8 | 28 Sep 2026 | map and diagram done; 6 illustrations and 7 portraits pending |
| 2–30 | everyone else | coming in waves (see the plan's build order) | | |

## Run it

It is static files, so any of these work:

- **Hosted:** `https://eric-call-2000.github.io/academy/politics/` once this is on `main`.
- **Locally:** from the Academy root, run `node server.js` and open http://localhost:5175/politics/.
- **From Academy:** tap the 🗳️ **Political Academy** card on the picker.

## How it fits into Academy

- **Shared profiles.** Academy and this app are on the same origin, so they share
  `localStorage`. Whoever is signed in on Academy is the reader here, and new profiles made
  here appear in Academy.
- **Progress mirroring.** Every finished briefing is mirrored into Academy's store
  (`academy_users_v1`) as track **`politics`**, with the same shape Academy's own tracks use:
  `completed`, `xp`, `streak` and `lastDay`. Academy's picker card shows "N done · XP" from it.
  This is the same bridge CodeLab uses.
- **This app's own store.** Detailed progress lives in `politics_v1`: the day each briefing
  was read, study days, the daily goal and quick-check answers. Theme and text size are in
  `politics_prefs_v1`.
- **XP and streaks.** A briefing is worth 10 XP the first time; finishing a country adds a
  20 XP bonus; re-reading earns nothing. The streak is derived from the set of days you
  read, never stored as a bare count, so it can't drift.
- **Per device.** Progress is per browser, as with CodeLab. A Handoff-style sync code is on
  the plan's list.

## Screens

- **Today** shows the next briefing, the daily goal (1–3 a day, set under the avatar), a
  seven-day strip, briefings updated since you read them, and dispatches.
- **Atlas** lists all 30 countries by region, with progress rings. Unwritten ones say
  "Coming soon".
- **Country** shows the unit's 8 briefings, the current-as-of date, dispatches and connected
  countries.
- **Reader** is one serif column with a reading-progress bar and adjustable text size.
  Glossary terms are tappable. Each briefing ends with three takeaways, an optional quick
  check that never blocks progress, and its sources.
- **Glossary** lists every term, searchable.

## Files

```
politics/
├── index.html          boots the app
├── core.js             registry + every progress rule (DOM-free, tested in Node)
├── countries.js        the 30 countries in path order; `lessons` > 0 means written
├── glossary.js         terms that briefings link to with [[term]]
├── updates.js          dated dispatches added between rewrites
├── app.js              the screens
├── styles.css          reading-first, mobile-first, light and dark
├── units/<id>.js       one file per written country (lazy-loaded)
├── maps/<id>.svg       locator maps built from Natural Earth data
├── img/<id>/…          illustrations, portraits and diagrams
└── tools/
    ├── validate.js     content rules (CI)
    ├── test-core.js    progress-rule tests (CI)
    ├── smoke.js        browser walk-through (needs Playwright + Chromium)
    ├── image-manifest.js  every missing picture, with its prompt or source
    ├── build-maps.js   Natural Earth → maps/<id>.svg (npm install first)
    ├── load.js         loads the data the way the browser does
    └── research/<id>.md   the checked facts and sources behind each unit
```

## Writing a unit

1. **Research first.** Write `tools/research/<id>.md` from fresh sources: every number,
   date and name, each with a link. Politics moves; memory goes stale.
2. **Copy the shape of `units/us.js`.** Use the standard arc of 8 briefings: snapshot, how
   power works, the road here, the players, three stories, where things stand. Each story
   has four parts: *what happened*, *why*, *why it matters*, *what's next*. Ids are
   `<id>-1` … `<id>-8` and never change, because they're progress keys.
3. **Markup** is deliberately small: `**bold**`, `*italic*`, `[label](https://…)`,
   `[[term]]` or `[[term-id|label]]` for the glossary, `[[unit:ir]]` for another country, a
   blank line for a new paragraph, and `- ` for bullets. Add any new term to `glossary.js`.
4. **Pictures.** An AI illustration carries `kind: "illustration"`, its alt text, caption,
   the credit *"AI illustration — not a photograph"* and a scene `prompt`. Real people
   appear only as credited public-domain or Creative Commons portraits, never as AI faces.
   Build the map with `node tools/build-maps.js <id>`.
5. **Set `lessons`** for the country in `countries.js`.
6. **Check it:** run `node tools/validate.js` and `node tools/test-core.js`, then open the
   unit in a browser. If Playwright is installed, `node tools/smoke.js` walks the app.

The validator enforces the plan's rules:
- 500–900 words per briefing, with no section over 180 words
- 3 takeaways and at least 2 sources per briefing
- alt text, captions and credits on every picture
- every glossary and country link resolves

Missing illustrations and portraits aren't failures: the reader shows a designed
placeholder until they arrive.

## Making the pictures

```
node tools/image-manifest.js       # the list, with full prompts and file paths
```

For **illustrations**, paste each prompt (house style plus scene) into any image
generator. Export at 1600×900, save as WebP (~150 KB) at the path shown, and the reader
picks it up.

For **portraits**, download the named official photo from Wikimedia Commons and confirm
the licence on its file page. Crop it square at about 400×400, save it as WebP, and it
replaces the initials.

## Keeping it current

- Every briefing shows its **"Current as of"** date. After 120 days the validator warns and
  the app marks it "may be out of date".
- **Dispatches** (`updates.js`) cover big events between rewrites. For example, the US
  midterm results on 3 November get a dispatch the next day, then briefings 7 and 8 are
  rewritten.
- When a rewritten briefing gets a newer `asOf`, readers who finished it see
  **"Updated since you read it"**.
