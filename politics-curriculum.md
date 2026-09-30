# Political Academy — Plan (30 countries)

Design doc for a new reading-first app that lives under Academy the way CodeLab does.
Written 2026-09-28. **Status: Phase 1 and all five waves are built:** the app in [`politics/`](politics/) and
all 30 units (US, China, Russia, India, Ukraine, Germany, UK, France, Italy, Poland, Turkey, Israel, Iran, Saudi Arabia, UAE, Egypt, Japan, South Korea, North Korea, Taiwan, Pakistan, Indonesia, Australia, Canada, Mexico, Brazil, Argentina, Venezuela, South Africa, Nigeria) (see [`politics/README.md`](politics/README.md)). The rest of this doc
is the plan for all 30 countries. Facts below were checked against
news coverage on the date above (sources at the end); every lesson still gets a fresh
fact-check when it is written.

## At a glance

- **30 units, one per country.** Each unit has **12 lessons** ("briefings"): **360 briefings** in all.
- **A briefing is a 3–5 minute read.** It runs 500–900 words, in short sections of 180 words
  or fewer. It has one or two pictures: an AI-generated illustration of a specific event, or an
  accurate map. It closes with three key takeaways, its sources, and a "current as of" date.
- **Not Codecademy and not Duolingo.** Briefings have no editor, no hearts and no graded quiz
  gating progress. You read and tap **Finish briefing**, and progress, XP and your streak save.
- **Lives at `academy/politics/`** next to `codelab/`. It gets its own card on the Academy picker
  and shares profiles, XP and streaks through Academy's store as track `politics`.
- **Pace:** one briefing a day covers everything in about 8 months; two a day take about 4.
  Each country takes about 8 days.

## Decisions to confirm

Each has a default, so the build can start without waiting on these.

| # | Decision | Default in this plan | Alternatives |
|---|----------|----------------------|--------------|
| 1 | **The 30 countries** | The list below, grouped by region | Swap any for a country on the bench (Hungary is the first alternate) |
| 2 | **Name** | **Political Academy**: folder `politics/`, track id `politics`, icon 🗳️ | "World Politics", "The Briefing", "Statecraft" |
| 3 | **How images get made** | Claude writes a prompt into every lesson file and you generate the images with any tool you like; a script lists the missing ones | A script calls an image API with your key (costs money per image) |
| 4 | **Any questions at all?** | No graded quiz. Three takeaways plus **one optional "quick check"** that never blocks progress | Pure reading, or a daily Recall deck later (like CodeLab's) |
| 5 | **Unit order** | By region, so neighbours build on each other | By headline heat (Iran, Ukraine, US first) |
| 6 | **Bonus units** | None; every unit is a country, as asked | Add non-country explainers later (EU, NATO, UN, OPEC+) |

---

## How it fits into Academy

The **CodeLab precedent** is the model, and this app follows it exactly:

- **It is a separate app in its own folder.** `politics/` gets its own `index.html` and engine.
  The flat `<prefix>-unitN.js` quiz engine at the root isn't touched, because a reader is a
  different product from a quiz path.
- **It gets a picker card.** One line in `tracks.js`:

  ```js
  window.ACADEMY.defineTrack({ id: "politics", prefix: "politics", count: 0, link: "politics/", cta: "Read today's briefing", title: "Political Academy", icon: "🗳️", color: "#1f4e79", blurb: "The world's 30 most important countries — who holds power, what just happened, and what to watch." });
  ```

  `#1f4e79` (diplomatic navy) isn't used by any existing track.
- **Profiles are shared automatically.** Both apps run on the same origin, so the politics app
  reads and writes `academy_users_v1` exactly like CodeLab's `syncAcademy()`
  (`codelab/app.js`). It mirrors `completed`, `xp`, `streak` and `lastDay` into
  `users[name].tracks.politics`, and choosing a profile sets Academy's `currentUser`.
- **One small change to Academy's `app.js`.** Before any progress, every external-track card
  says "Write real code · open ↗" (hard-coded in `renderTracks`). It will read a new `cta` field
  instead, and the `fullstack` track gets `cta: "Write real code"` so CodeLab's card doesn't
  change.
- **README.** Add a row to the track table and a paragraph on the card, the way CodeLab has one.
- **Hosting.** Nothing new is needed: GitHub Pages already serves the repo, so the app is live at
  `…github.io/academy/politics/` as soon as it merges.

### Saving progress across devices

`localStorage` is per browser, so a phone and a laptop keep separate progress, which is the
same limit CodeLab has. CodeLab solved it with **Handoff**, a copy-and-paste sync code
(`codelab/sync.js`). The politics app keeps its store small and "monotone" (sets of read
lessons and study days, which only ever grow), so Handoff can be ported in Phase 3 without
redesigning anything.

---

## The app (`politics/`)

```
politics/
├── index.html            boots the app; lazy-loads a country's file when it's opened
├── countries.js          manifest: 30 countries, with id, name, flag, region, part, color, file, asOf
├── app.js                screens: profiles → Today → Atlas → Unit → Reader (+ Glossary, What's new)
├── styles.css            reading-first, mobile-first; serif body text, light/dark
├── core.js               registry + every progress rule, DOM-free so Node can test it
├── glossary.js           terms (supermajority, coalition, Guardian Council…) shown as tappable chips
├── updates.js            dated "dispatches" added to a unit between full rewrites
├── units/us.js … za.js   one file per country: 8 lessons of text, image references and sources
├── img/<id>/…webp        illustrations, lazy-loaded
├── maps/<id>.svg         locator maps built from public-domain Natural Earth data
└── tools/
    ├── validate.js       schema, word counts, sources, images, asOf dates, glossary links
    ├── image-manifest.js lists every image whose file is missing, with its prompt
    ├── build-maps.js     Natural Earth → one SVG per country (dev-only dependency)
    ├── test-core.js      tests for the progress rules (streaks, XP, next briefing, markup)
    ├── smoke.js          a browser walk-through with Playwright
    ├── load.js           loads the data files the way the browser does
    └── research/<id>.md  the research note behind each unit (like codelab/tools/course-research)
```

### Screens

- **Today** is the home screen. It shows the next unread briefing as a large card with its
  illustration, title and "5 min". Around it are the 🔥 streak, a daily goal (1, 2 or 3
  briefings; default 1) and **What's new** (dispatches and refreshed lessons since your last
  visit).
- **Atlas** lists the 30 countries grouped by region. Each card shows its flag and a progress
  ring (x of 12). The **Map** screen shows them on a world map with their briefing counts
  and the relationships between them.
- **Unit** is the country's page: its 12 briefings in reading order, its "current as of" date, and links
  to related units (Iran links to Israel, Saudi Arabia, Pakistan and the US).
- **Reader** is a single column about 680px wide, with a reading-progress bar and a large hero
  image. It shows fact boxes, timelines and quotes, then takeaways and sources, then
  **Finish briefing ✓**. Glossary terms are tappable, and `[[unit:ir]]` links open another country.
- **Glossary** is searchable and lists every term with the units that use it.

### Progress model (`politics_v1`, per profile)

```js
{
  read:      { "us-1": "2026-10-02", … },  // lessonId -> day it was (last) finished
  days:      ["2026-10-02", …],            // study days; the streak is DERIVED from this set (CodeLab's rule)
  unitsDone: { "us": "2026-10-09" },        // countries finished (sticky, for the +20 bonus)
  goal:      1,                             // briefings per day
  last:      "us-3",                        // resume point
  checks:    { "us-1": 1 },                 // answers to the optional quick checks
  seen:      { "<dispatch id>": 1 }         // dispatches already opened
}
```

Lesson ids are stable (`us-1` … `us-8`), so progress survives rewrites. If a lesson's `asOf`
date is newer than the day you read it, it gets an **"Updated since you read it"** badge. That
handles the fact that politics keeps moving after you've finished a unit. XP is never stored:
it's derived as 10 per briefing read plus 20 per finished country, so it can only grow.

### Lesson file schema

```js
window.POLITICS.addUnit("ir", {
  id: "ir", name: "Iran", flag: "🇮🇷", asOf: "2026-09-28",
  related: ["il", "sa", "pk", "us"],
  lessons: [
    {
      id: "ir-7", kind: "story", title: "The 2026 war", mins: 5, asOf: "2026-09-28",
      blocks: [
        { type: "image", src: "img/ir/ir-7-hero.webp", alt: "…", caption: "…",
          credit: "AI illustration — not a photograph", prompt: "…" },
        { type: "section", head: "What happened", md: "…≤180 words…" },
        { type: "section", head: "Why it happened", md: "…" },
        { type: "facts", rows: [["Began", "28 Feb 2026"], ["Ceasefire", "8 Apr 2026 (Pakistan-mediated)"]] },
        { type: "section", head: "Why it matters", md: "…" },
        { type: "section", head: "What's next", md: "…" }
      ],
      takeaways: ["…", "…", "…"],
      check: { q: "…", choices: ["…", "…", "…"], answer: 1, explain: "…" },  // optional, never gates progress
      sources: [{ title: "…", publisher: "Reuters", url: "…", date: "2026-09-21" }]
    }
  ]
});
```

Block types are `section`, `image`, `map`, `diagram`, `facts`, `timeline`, `quote`, `callout`
("Why it matters"), `compare` (two sides' cases, side by side), and `people` (the players,
with portraits).

### What the validator enforces

`tools/validate.js` runs in CI and fails the build if any of these break. It works like
CodeLab's validator, which keeps its course catalog honest.

- Every lesson has an `asOf` date, **at least 2 sources**, 3 takeaways, and 500–900 words, with
  no section over 180 words.
- Every image has `alt`, `caption`, `credit` and `prompt`, and either its file exists or it's
  listed as pending.
- Every glossary term and `unit:` link resolves.
- It warns, without failing, when a unit's `asOf` is more than 120 days old.

---

## The standard unit: 12 briefings per country

Every country follows the same arc, so you always know where you are. The **stories** are
the event-driven, short-form core; around them, three history briefings explain how the
country began and two big issues from its past, and a spotlight covers one theme chosen for
that country.

Units began with 8 briefings (ids 1–8). The four added later got ids 9–12, because ids are
progress keys and never change; the app reads them in this order (`P.ORDER12` in `core.js`):

| Order | Id | Briefing | What it covers | Picture |
|---|---|----------|----------------|---------|
| 1 | 1 | **Snapshot** | The country in 5 minutes: who's in charge, how big it is, why it's in the top 30 *right now* | Locator map + fact box |
| 2 | 2 | **How power really works** | The system on paper and in practice: who decides, parties, elections, courts, the military | Simple power diagram (SVG) |
| 3 | 9 | **How it began** | The founding: independence, unification, revolution or constitution, and the arguments about it | Timeline + AI illustration |
| 4 | 3 | **The road here** | The five turning points of modern history that explain today | Timeline + one illustration |
| 5 | 10 | **From the past 1** | An important issue from the country's history, in depth | AI illustration |
| 6 | 11 | **From the past 2** | A second important historical issue | AI illustration |
| 7 | 4 | **The players** | The leader, their rivals and the people behind them, and what each wants | Official portraits (public-domain / CC photos, credited) |
| 8 | 5 | **Story 1** | Usually the biggest domestic event | AI event illustration |
| 9 | 6 | **Story 2** | Usually the biggest foreign or security event | AI event illustration |
| 10 | 7 | **Story 3** | Whatever defines the year: an election, a crisis or a war | AI event illustration |
| 11 | 12 | **Spotlight** | One theme chosen for this country (Kashmir, the Arctic, the chaebol, the disappeared…) | AI illustration |
| 12 | 8 | **Where things stand** | The situation as of the date, three plausible scenarios, and dated things to watch | Illustration or chart |

**Every story briefing has the same four parts:** *What happened* (dated and specific), *Why
it happened*, *Why it matters*, and *What's next*. That is the short-form format, and it lets
a reader skim any briefing in the app the same way.

---

## Relationships and the world map

Beyond the 30 country units, **relationship units** cover how two countries deal with each
other, in **2–3 briefings** each (`links.js`, `units/<a>_<b>.js`, kind `relation`). The
first is **🇺🇸🇨🇳 United States & China: steel, tariffs and soybeans**:

| # | Briefing | What it covers |
|---|----------|----------------|
| 1 | **Cheap steel from China** | China's overcapacity, dumping, and 20 years of US anti-dumping duties |
| 2 | **The tariff wall** | Section 232 steel tariffs from 2018 to 50% in 2025: who they hit and what they did |
| 3 | **Soybeans: how China hits back** | China's retaliation against US farmers, the aid, and the 2025 purchase pledges |

Six more followed, each taking angles the country units don't already cover:

| Relationship | Briefing 1 | Briefing 2 | Briefing 3 |
|---|---|---|---|
| 🇺🇸🇲🇽 US & Mexico | Built together (trade, the USMCA) | Migrants and money | Guns south, drugs north |
| 🇺🇸🇨🇦 US & Canada | Allies next door (NORAD) | Softwood lumber: the forty-year fight | Oil, power and water |
| 🇷🇺🇺🇦 Russia & Ukraine | 'One people'? | Gas: the pipeline weapon | Children, prisoners and the occupied |
| 🇮🇱🇮🇷 Israel & Iran | Friends before 1979 | The shadow war | The axis of resistance |
| 🇮🇳🇵🇰 India & Pakistan | Nuclear rivals | Sharing the Indus | A border almost closed |
| 🇨🇳🇹🇼 China & Taiwan | The 1992 Consensus | An economic embrace, loosening | Kinmen: the front-line islands |

The **Map** screen (`#/map`) shows every country with its number of briefings and your
progress, and draws each relationship as an arc between the two countries. A third set of six followed:

| Relationship | Briefing 1 | Briefing 2 | Briefing 3 |
|---|---|---|---|
| 🇯🇵🇨🇳 Japan & China | History that won't settle | The Senkaku islands | Rare earths, seafood and tourists |
| 🇸🇦🇮🇷 Saudi Arabia & Iran | Rivals for the Muslim world | Abqaiq: the attack on the oil heart | The contest for the Arab world |
| 🇰🇷🇰🇵 South & North Korea | Sunshine and summits | Kaesong: the factory town | Balloons, loudspeakers and leaflets |
| 🇬🇧🇦🇷 UK & Argentina | Two claims to the islands | From enemies to wary partners | Squid, oil and Sea Lion |
| 🇹🇷🇷🇺 Turkey & Russia | Empires at war | The jet and the ambassador | Gas, reactors and missiles |
| 🇺🇸🇷🇺 US & Russia | The last treaty ends | From reset to rupture | Prisoners and swaps |

Candidates for later relationships: Germany–Russia, US–Venezuela, Egypt–Israel, UK–France,
Japan–South Korea, Poland–Germany, China–India, Australia–China, Brazil–Argentina.

---

## Images

About 2 images per briefing gives **~720 images**. As 1600×900 WebP at ~150 KB each, that is
about 70 MB, lazy-loaded per unit, which is fine for GitHub Pages.

**House style.** Every event prompt starts with the same prefix so the whole app looks like
one publication:

> *Editorial illustration, muted textured gouache, cinematic wide composition, soft natural
> light, restrained palette, no text, no logos, no legible signs, figures seen from behind or at
> a distance with no recognizable faces.* — then the scene.

Example (Iran, Story 3):
*"…a tanker convoy passing through a narrow strait at dusk, warships on the horizon, a single
drone silhouette in the sky, tension rather than explosion."*

**Rules, which are also enforced in review:**

1. **Illustrations are always labelled.** The caption line reads *"AI illustration — not a
   photograph."* Invented scenes of real news must never pass for photojournalism.
2. **No AI faces of real people.** Real leaders appear only in lesson 4, as credited public-domain
   or Creative-Commons portraits (US-government works are public domain; many governments
   publish CC photos). Event illustrations show crowds, places and objects, never a
   recognizable politician doing something.
3. **Maps are never AI-generated.** Image models invent borders. Maps are built from
   Natural Earth data, and disputed areas are drawn as disputed with a note: Crimea and
   occupied Ukraine, Kashmir, Taiwan, and Western Sahara in the Africa context.
4. **No gore.** War is shown through aftermath, symbols and scale.
5. **No text inside images.** Models garble it. Captions carry the words.

**Workflow.** Prompts are written into the lesson files as the text is written. Running
`node politics/tools/image-manifest.js` prints every missing image with its prompt and target
file name. You generate them, drop them in `img/<id>/`, and the validator confirms each one.
Until an image exists, the reader shows a tasteful placeholder in the unit colour.

---

## Accuracy, neutrality, freshness

This is the part that makes or breaks a politics course.

- **Research first.** Each unit starts with `tools/research/<id>.md`: the verified facts,
  dates, numbers and names, each with a source. It is written from fresh searches at build
  time, not from memory, because training data goes stale and several countries changed
  leaders in 2026.
- **Sources.** Each briefing cites at least two sources: wire services (Reuters, AP, AFP), major
  papers and broadcasters (BBC, Al Jazeera, NPR), think-tanks with regional depth (CFR, CSIS,
  Chatham House, Carnegie, Brookings), and official sites. Wikipedia is only a starting point.
- **A fact-check pass.** A second read of every number, date and name against the research
  note happens before merge, the same way CodeLab audited all 334 of its quiz questions.
- **Neutral tone.** The rules:
  - Describe; don't editorialize.
  - Present each side's case in its own strongest terms (the `compare` block).
  - Attribute contested labels: *"designated a terrorist organization by the US and EU"*, not
    *"terrorists"*; *"rights groups documented…"*.
  - Give casualty and poll figures with who produced them.
  - Use the same standard for allies and rivals.
- **Freshness.**
  - Every lesson shows *"Current as of <date>"*.
  - A unit older than 120 days gets its lesson 8 rewritten, and its stories patched if needed.
  - Big events between rewrites go into `updates.js` as short dated **dispatches**. A dispatch
    appears in What's new and at the top of the unit, without rewriting finished lessons.
  - The **calendar below** tells us which units will go stale first.

### Dated events that will need dispatches (Oct 2026 → 2027)

| Date | Event | Unit |
|------|-------|------|
| 4 Oct / 25 Oct 2026 | Brazil general election, then the runoff | Brazil |
| 19 Oct 2026 | Alberta referendum, including the independence question | Canada |
| 27 Oct 2026 | Israeli legislative election | Israel |
| 3 Nov 2026 | US midterms: all 435 House seats, 35 Senate seats | United States |
| 4 Nov 2026 | South African local elections: the first big test of the unity government | South Africa |
| Nov 2026 | APEC leaders' meeting in Shenzhen, China | China |
| late Nov 2026 | Taiwan local elections | Taiwan |
| 16 Jan 2027 | Nigerian presidential and legislative elections | Nigeria |
| Spring 2027 | French presidential election (Macron can't run again) | France |
| June 2027 | Maduro's trial begins in New York | Venezuela |
| 2027 | Italian and Polish general elections; Argentina (24 Oct); China's 21st Party Congress | several |

---

## The 30 countries

**How they were chosen:** a blend of **hard weight** (economy, military, nuclear status,
population, a UN Security Council seat) and **how much the country is moving world events right
now** (wars, elections, crises, mediation). The list covers every region, so the course
explains the whole map, not only the West.

**The six parts:**

| Part | Units | Countries |
|------|-------|-----------|
| 1. The Big Four | 1–4 | United States, China, Russia, India |
| 2. Europe | 5–11 | Ukraine, Germany, United Kingdom, France, Italy, Poland, Turkey |
| 3. The Middle East | 12–16 | Israel, Iran, Saudi Arabia, United Arab Emirates, Egypt |
| 4. The Indo-Pacific | 17–23 | Japan, South Korea, North Korea, Taiwan, Pakistan, Indonesia, Australia |
| 5. The Americas | 24–28 | Canada, Mexico, Brazil, Argentina, Venezuela |
| 6. Africa | 29–30 | South Africa, Nigeria |

Each country below lists what fills its briefings. **L2** is how power works, **L3** the road
here, **L4** the players, **L5–7** the three stories and **L8** where things stand. 🎨 marks the
illustration ideas.

---

# Part 1 — The Big Four

## Unit 1 — United States 🇺🇸
*Why it's here: it has the largest economy and military, and its tariffs, wars and alliances
set the agenda in nearly every other unit.*

- **L2:** Federal presidential republic. Separation of powers (Congress, President, Supreme
  Court), the states, the two-party system and the Electoral College, and why executive power
  keeps growing.
- **L3:** 1945 superpower and the alliance system; the civil-rights era; 1991 the Cold War ends;
  9/11 and the long wars; the polarization era (2016, 6 Jan 2021, the 2024 comeback).
- **L4:** Donald Trump, JD Vance, the congressional leaders of both parties, and Chief Justice
  John Roberts.
- **L5, the tariff war and the courts:** the 2025 "Liberation Day" tariffs under an emergency law
  (IEEPA). The **Supreme Court struck them down on 20 Feb 2026**. A temporary Section 122
  surcharge followed, which lapsed in July, and new Section 301 tariffs replaced it. It's a story
  about who holds trade power, the President or Congress.
- **L6, force abroad:** strikes on alleged drug boats from Sept 2025; the **3 Jan 2026 operation
  that captured Nicolás Maduro**; the **US–Israeli war on Iran from 28 Feb 2026** and its shaky
  ceasefire.
- **L7, the midterms (3 Nov 2026):** approval in the high 30s, prices and the economy at the top
  of voters' worries, and control of Congress at stake. Also the 43-day 2025 shutdown, the
  longest ever.
- **L8:** The balance of power after the midterms, the start of the 2028 race, and the
  USMCA review.
- 🎨 The Supreme Court steps under a grey February sky; a carrier group at dusk in the
  Caribbean; a line of voters outside a school gym.

## Unit 2 — China 🇨🇳
*Why it's here: the second-largest economy, the largest manufacturer and the other superpower.
The Taiwan question and the tech race run through it.*

- **L2:** One-party state. The Party outranks the state, the 7-member Politburo Standing
  Committee rules, and the military answers to the Party, not the government. Xi Jinping has
  been in his third term since 2022, after term limits were scrapped in 2018.
- **L3:** 1949 the PRC is founded; the Mao era (the Great Leap Forward, the Cultural
  Revolution); 1978 Deng's reform and opening; 1989 Tiananmen; 2001 WTO entry; 2012 Xi takes
  power.
- **L4:** Xi Jinping, Premier Li Qiang, the Standing Committee, Foreign Minister Wang Yi, and
  the generals removed in the military purges.
- **L5, trade war to truce:** tariffs spiral in 2025 (US 145% at the peak), China squeezes
  rare-earth exports, the Busan truce follows (30 Oct 2025), then **two Trump–Xi summits in
  2026** (Beijing in May, the White House in September).
- **L6, the economy question:** the property bust, falling prices, youth unemployment, and the
  **15th Five-Year Plan (2026–30)**, whose bet is tech self-reliance.
- **L7, the military:** the Sept 2025 victory parade with Putin and Kim Jong Un side by side,
  purges at the top of the PLA, and pressure on Taiwan.
- **L8:** APEC in Shenzhen (Nov 2026) and the road to the 21st Party Congress in 2027, where the
  question is whether Xi takes a fourth term.
- 🎨 A parade's missile columns from high above Chang'an Avenue; a container port at night;
  grey warships on a hazy strait.

## Unit 3 — Russia 🇷🇺
*Why it's here: it has the largest nuclear arsenal, it is fighting the largest war in Europe
since 1945, and it has lined up with China, Iran and North Korea.*

- **L2:** Constitutionally federal and semi-presidential; in practice personalist and
  authoritarian. The 2020 amendments allow Putin to rule to 2036. It covers the security
  services, the Duma, and "managed" parties.
- **L3:** 1991 the USSR collapses; the chaotic 1990s (shock therapy, Chechnya); 2000 Putin;
  2008 Georgia and 2014 Crimea; 2022 the full-scale invasion.
- **L4:** Putin, Mikhail Mishustin, Sergei Shoigu, Andrei Belousov and Sergei Lavrov, plus the
  exiled opposition after Navalny's death in prison (2024).
- **L5, the war economy:** defence spending, sanctions and the "shadow fleet", inflation and
  high interest rates, and why the war is now felt at home.
- **L6, peace talks that never land:** the Alaska summit (15 Aug 2025), the 28-point plan, and
  the 2026 truces that collapsed within days. The gap is the Donbas and security guarantees.
- **L7, the 2026 Duma election (18–20 Sept):** United Russia wins a record **349 of 450 seats**
  in a vote the Moscow Times described as the most uncompetitive in modern Russian history. It
  teaches how elections work where the outcome isn't in doubt.
- **L8:** The state of the talks, economic strain, and the partnership with North Korea.
- 🎨 Snow over an empty Red Square at dawn; a tanker riding low in a grey sea; a ballot box
  in a small-town school.

## Unit 4 — India 🇮🇳
*Why it's here: it is the most populous country and one of the five biggest economies, a
nuclear power, and the swing state between the US, Russia and China.*

- **L2:** The world's largest democracy. A federal parliamentary system with powerful states,
  the Lok Sabha, the Election Commission, and coalition politics against one-party dominance.
- **L3:** 1947 independence and partition; the 1950 constitution; the 1975–77 Emergency; 1991
  liberalization; 2014 the Modi and BJP era begins.
- **L4:** Narendra Modi, Amit Shah, Rahul Gandhi (Leader of the Opposition), and the regional
  leaders, including 2026's upset winner, actor Vijay.
- **L5, four days in May:** the Pahalgam attack (22 Apr 2025), Operation Sindoor, and the
  four-day conflict with Pakistan that ended on 10 May. Delhi and Washington still disagree
  about who brokered the ceasefire.
- **L6, tariffs and Russian oil:** US tariffs hit 50% in Aug 2025 over Russian oil purchases.
  The **2 Feb 2026 deal** cut them to 18% in exchange for India ending those purchases.
- **L7, the 2026 state elections:** the BJP wins **West Bengal** for the first time, and
  newcomer **Vijay's TVK** topples the DMK in Tamil Nadu. It shows how Indian politics happens
  state by state.
- **L8:** The coalition in Delhi, relations with China since the 2025 thaw, and the 2027 state
  elections.
- 🎨 A vast rally ground at dusk, saffron flags; an ink-marked finger held up outside a polling
  booth; an oil tanker turning away from port.

---

# Part 2 — Europe

## Unit 5 — Ukraine 🇺🇦
*Why it's here: its war decides the security order of Europe.*

- **L2:** Semi-presidential, with the Verkhovna Rada. Martial law since 2022 means elections
  are postponed. The independent anti-corruption bodies (NABU, SAPO) matter more than their
  size suggests.
- **L3:** 1991 independence; the 1994 Budapest Memorandum; the 2004 Orange Revolution; 2014
  Maidan, Crimea and the Donbas; 2022 the full-scale invasion.
- **L4:** Volodymyr Zelensky; PM Yulia Svyrydenko; Kyrylo Budanov, head of the presidential
  office since Jan 2026; commander Oleksandr Syrskyi; Valerii Zaluzhnyi.
- **L5, a war of drones:** how cheap drones changed the front, and Operation Spiderweb
  (1 June 2025), which hit strategic bombers deep inside Russia.
- **L6, the peace process:** the Oval Office clash (Feb 2025), the minerals deal, Alaska, the
  28-point plan, and the 2026 truces. The two sticking points are the Donbas and
  security guarantees.
- **L7, the war at home:** "Operation Midas", the energy-sector kickback probe; chief of staff
  Andriy Yermak resigns (Nov 2025) and is later charged; and the July 2025 street protests that
  forced Kyiv to restore the anti-corruption agencies' independence.
- **L8:** Ceasefire odds, when elections could happen, EU accession, and another energy winter.
- 🎨 A drone operator's trench at first light; a city skyline with lights out on one side; young
  protesters with cardboard signs (no legible text).

## Unit 6 — Germany 🇩🇪
*Why it's here: the EU's largest economy is rearming, stalling, and watching the far right
surge.*

- **L2:** A federal parliamentary system. The chancellor, the Bundestag and Bundesrat, coalition
  culture, the "firewall" against the AfD, the constitutional court, and the debt brake.
- **L3:** 1949 two Germanys; 1990 reunification; 2015 the refugee decision; 2022
  *Zeitenwende*; the 2024 coalition collapse.
- **L4:** Friedrich Merz (chancellor since May 2025, elected only on a second ballot), Lars
  Klingbeil (SPD), AfD leaders Alice Weidel and Tino Chrupalla, and President Steinmeier.
- **L5, breaking the debt brake:** the March 2025 constitutional change for defence and a
  €500bn infrastructure fund, and what it means for Europe's defence.
- **L6, the stuck economy:** carmakers, cheap Chinese competition, energy prices and US tariffs.
- **L7, the AfD surge:** second place in 2025, the extremism designation fight, then Sept
  2026: **43.8% in Saxony-Anhalt** and first place in Mecklenburg-Vorpommern, where the CDU
  lost all its seats. Merz's approval hit record lows, a sequence Wikipedia now files as the
  "2026 Merz government crisis".
- **L8:** Can the coalition last, the ban debate over the AfD, and polls with the AfD first.
- 🎨 A Bundestag-style glass dome at night; an idle car-factory floor; a small eastern town
  square covered in campaign posters (no legible text).

## Unit 7 — United Kingdom 🇬🇧
*Why it's here: a nuclear power with a UN Security Council seat and a global financial hub,
still redefining itself after Brexit, and it has had a new prime minister since July.*

- **L2:** An uncodified constitution, a parliamentary monarchy and first-past-the-post
  voting. Prime ministers live and die by their party. Devolution to Scotland, Wales and
  Northern Ireland.
- **L3:** 1945 the welfare state; 1973 Europe; 1979 Thatcher; 1997 Blair and devolution;
  2016–20 Brexit.
- **L4:** PM **Andy Burnham**, Kemi Badenoch (Conservatives), Nigel Farage (Reform UK), the
  Greens and Lib Dems, and King Charles III.
- **L5, from landslide to collapse:** Labour wins 411 seats in July 2024, then sinks in the
  polls.
- **L6, the 2026 leadership crisis:** Burnham, then Mayor of Greater Manchester, wins the
  **Makerfield by-election (18 June)**. Starmer resigns as leader (22 June), and **Burnham
  becomes PM (20 July)**. It shows how a PM can change without a general election.
- **L7, a five-party country:** polls with Labour, the Conservatives and Reform all in the low
  20s and the Greens and Lib Dems in double digits. What first-past-the-post does with a
  split like that.
- **L8:** Burnham's agenda, the Reform challenge, and the next general election (due by 2029).
- 🎨 The black door of a Downing Street–like terrace at dawn; a northern town hall count at
  2 a.m.; five coloured rosettes on a table.

## Unit 8 — France 🇫🇷
*Why it's here: the EU's only nuclear power and its leading military, where political
paralysis now threatens the eurozone.*

- **L2:** The Fifth Republic. A strong president, a prime minister answerable to the Assembly,
  Article 49.3, and two-round elections.
- **L3:** 1958 de Gaulle; May 1968; 1981 Mitterrand; 2017 Macron breaks the old parties; 2024
  the snap election produces a hung parliament.
- **L4:** Emmanuel Macron (term ends 2027), PM Sébastien Lecornu, Marine Le Pen and Jordan
  Bardella (RN), Jean-Luc Mélenchon (LFI), and Édouard Philippe.
- **L5, the dissolution gamble:** June 2024 and a parliament split three ways.
- **L6, the prime-minister carousel:** Barnier toppled (Dec 2024), Bayrou toppled (Sept 2025),
  Lecornu resigns and is reappointed (Oct 2025). Behind it all is the deficit, which missed
  its 2026 target.
- **L7, Le Pen's trial:** convicted of embezzling EU funds (Mar 2025). On appeal (July 2026) her
  ban was shortened in a way that **opens the door to a 2027 run**, with an electronic tag.
- **L8:** The 2027 race and budget brinkmanship.
- 🎨 The Assembly hemicycle mid-vote; a courthouse corridor lined with reporters seen from
  behind; the Élysée gate in rain.

## Unit 9 — Italy 🇮🇹
*Why it's here: a G7 and eurozone heavyweight whose PM, Meloni, acts as a bridge between
Trump's Washington and Brussels.*

- **L2:** A parliamentary republic famous for short-lived governments, and why this one hasn't
  been.
- **L3:** 1946 the republic; the "years of lead"; 1992 *Mani Pulite* destroys the old parties;
  the Berlusconi era; 2022 Italy's first woman PM.
- **L4:** Giorgia Meloni, Matteo Salvini, Antonio Tajani, Elly Schlein, Giuseppe Conte, and
  President Mattarella.
- **L5, stability as a strategy:** a durable right-wing coalition and Meloni's role between the
  EU and the US.
- **L6, migration:** the Mediterranean route and the Albania centres experiment.
- **L7, the referendum defeat:** voters reject her justice reform **53.2% to 46.8%** (Mar
  2026), her first big loss.
- **L8:** The run-up to the 2027 general election.
- 🎨 A rescue boat on a dark sea; Rome's parliament façade; a ballot being folded.

## Unit 10 — Poland 🇵🇱
*Why it's here: NATO's eastern anchor and one of its top defence spenders relative to GDP, and
a live test of whether rule-of-law damage can be undone.*

- **L2:** A parliamentary republic with an elected president whose veto needs a three-fifths
  majority to override. That veto is the whole story of 2026.
- **L3:** 1980 Solidarity; the 1989 Round Table; 1999 NATO and 2004 EU; the 2015–23 PiS era;
  2023 Tusk returns.
- **L4:** PM Donald Tusk, President Karol Nawrocki (since Aug 2025), Jarosław Kaczyński, and
  Radosław Sikorski.
- **L5, the veto war:** a record number of presidential vetoes, including the **€44bn EU
  defence loan (SAFE) veto in Mar 2026**.
- **L6, frontline state:** Russian drones over Poland (Sept 2025) and the NATO consultations
  that followed, rail sabotage, and the defence build-up.
- **L7, repairing the courts:** why undoing the PiS-era judicial changes has stalled.
- **L8:** The 2027 parliamentary election.
- 🎨 A radar dish in a misty field; a border fence through forest; a presidential palace
  lit at night.

## Unit 11 — Turkey 🇹🇷
*Why it's here: NATO's second-largest army holds the Bosphorus and brokers deals on Ukraine,
Gaza and Syria. It is the bridge into Part 3.*

- **L2:** A presidential system since 2017. How power concentrated in one office.
- **L3:** 1923 Atatürk's republic; the coups (1960, 1971, 1980); 2002 AKP; 2016 the failed
  coup; the 2017 referendum.
- **L4:** Recep Tayyip Erdoğan, Devlet Bahçeli, CHP leader Özgür Özel, **Ekrem İmamoğlu (jailed
  since Mar 2025)**, and Abdullah Öcalan.
- **L5, İmamoğlu:** the arrest of the main rival, the mass protests, and the 2026 trial.
- **L6, the PKK lays down arms:** the May 2025 dissolution and a peace process that
  runs in parallel with the crackdown.
- **L7, the broker:** Syria after Assad, the Gaza ceasefire mediation, and balancing during
  the Iran war.
- **L8:** Whether the constitution changes to let Erdoğan run again, and the 2028 election.
- 🎨 The Bosphorus at dusk with a tanker under a bridge; a sea of flags and phone lights in an
  Istanbul square; a courthouse under heavy guard.

---

# Part 3 — The Middle East

## Unit 12 — Israel 🇮🇱
*Why it's here: the region's strongest military, at the centre of Gaza, Iran, Lebanon and
Syria, with an election on 27 Oct 2026.*

- **L2:** A parliamentary system: a 120-seat Knesset, pure proportional representation, and
  always a coalition. No written constitution (Basic Laws instead), and the Supreme Court fight.
- **L3:** 1948; 1967; 1979 peace with Egypt; 1993 Oslo and the 1995 Rabin assassination; the
  2023 judicial overhaul fight.
- **L4:** Benjamin Netanyahu, Gadi Eisenkot, Naftali Bennett, Yair Lapid, Bezalel Smotrich,
  Itamar Ben-Gvir, and President Herzog (with Netanyahu's pardon request).
- **L5, 7 October and the Gaza war:** the attack, the hostages, the devastation of Gaza, and the
  international courts. It is told with attributed figures and both sides' accounts.
- **L6, the Iran wars:** the 12-day war (June 2025), then the **joint US–Israeli war from
  28 Feb 2026**.
- **L7, after the ceasefire:** the Oct 2025 ceasefire and hostage releases, the US-led Board of
  Peace, and the July 2026 disarmament roadmap that Hamas says it won't implement until Israel
  withdraws.
- **L8, the 27 Oct election:** a referendum on 7 October. Recent polls tie the blocs led by
  Netanyahu and Eisenkot.
- 🎨 An empty kibbutz path at dawn; a hostage-poster wall seen from behind a crowd (no legible
  text); a ballot box in a school gym.

## Unit 13 — Iran 🇮🇷
*Why it's here: at war with the US and Israel in 2026, beside the Strait of Hormuz, with a
nuclear programme and a new Supreme Leader.*

- **L2:** The Islamic Republic. The Supreme Leader sits above the elected president and
  parliament, the Guardian Council vets candidates, the Assembly of Experts chooses the Leader,
  and the Revolutionary Guards (IRGC) are a state within the state.
- **L3:** 1953 the coup; 1979 the revolution; 1980–88 the war with Iraq; 2015 the nuclear deal
  and the 2018 US exit; 2022 "Woman, Life, Freedom".
- **L4:** **Supreme Leader Mojtaba Khamenei** (since Mar 2026, not seen publicly), President
  Masoud Pezeshkian, Foreign Minister Abbas Araghchi, and the IRGC.
- **L5, the 12-day war and snapback:** Israeli and US strikes on nuclear sites (June 2025), then
  UN sanctions reimposed (Sept 2025).
- **L6, the winter massacres:** protests from late Dec 2025 over a collapsing economy, and the
  crackdown of **8–9 Jan 2026**. Rights groups documented thousands killed, the deadliest
  repression in decades.
- **L7, the 2026 war:** **28 Feb** US–Israeli strikes kill Ali Khamenei; Iran strikes every Gulf
  state; the Strait of Hormuz is contested; Pakistan mediates a ceasefire (8 Apr) and the
  Islamabad talks; a June memorandum follows, and by Sept 2026 it is fraying.
- **L8:** Talks, Hormuz, succession stability, and the nuclear programme.
- 🎨 A tanker convoy in a narrow strait at dusk; a Tehran boulevard empty at night; a mountain
  facility entrance under dust.

## Unit 14 — Saudi Arabia 🇸🇦
*Why it's here: the largest oil exporter and leader of OPEC+, custodian of Mecca and Medina,
with Vision 2030 and a front-row seat in the Iran war.*

- **L2:** An absolute monarchy. King Salman reigns, Crown Prince and PM **Mohammed bin Salman**
  rules, there are no national elections, and the religious establishment plays its part.
- **L3:** 1932 the founding; 1938 oil; the 1973 embargo; the 1979 Grand Mosque seizure; 2017
  MBS's rise and the Ritz-Carlton purge.
- **L4:** MBS, King Salman, Energy Minister Abdulaziz bin Salman, and Foreign Minister Faisal
  bin Farhan.
- **L5, Vision 2030 meets reality:** giga-projects scaled back as oil money tightens, plus the
  social opening.
- **L6, from Yemen to détente to war:** the Yemen war, the 2023 China-brokered deal with Iran,
  then **Iranian strikes on Saudi oil sites in 2026**. Riyadh backs the Pakistan talks while
  asserting a right to self-defence. The Saudi–Pakistan defence pact (Sept 2025).
- **L7, the American bargain:** Trump in Riyadh (May 2025), MBS at the White House (Nov 2025),
  advanced-arms deals, and normalization with Israel on hold.
- **L8:** Oil prices, the World Cup 2034 build-out, and Gulf security after the war.
- 🎨 A futuristic desert construction site half-finished; a refinery flare at night; a royal
  majlis hall empty and gilded.

## Unit 15 — United Arab Emirates 🇦🇪
*Why it's here: small but outsized. A finance, logistics and AI hub with a hand in wars from
Yemen to Sudan, and the Gulf state hit hardest in the Iran war.*

- **L2:** A federation of seven emirates. The Federal Supreme Council, and the Abu Dhabi–Dubai
  partnership.
- **L3:** 1971 federation; oil; Dubai reinvents itself; the Arab Spring posture; the 2020 Abraham
  Accords.
- **L4:** President Mohamed bin Zayed, Dubai's Mohammed bin Rashid, and national security
  adviser Tahnoun bin Zayed.
- **L5, the AI bet:** sovereign AI funds, giant data-centre deals and US chips.
- **L6, Sudan:** accused by UN experts and others of backing the RSF, which the UAE denies. The
  fall of El Fasher (Oct 2025).
- **L7, the Iran war:** hundreds of drones and missiles, and a new defiance.
- **L8:** Gulf security architecture and the business model under fire.
- 🎨 A desert data-centre campus at night; interceptor trails over a glittering skyline; a
  Red Sea port with cranes.

## Unit 16 — Egypt 🇪🇬
*Why it's here: the most populous Arab state holds the Suez Canal and the Gaza border, and
brokers ceasefires, while its economy lives on the edge.*

- **L2:** A presidential republic dominated by the military. Sisi has ruled since 2014, and the
  2019 amendments extend his rule to 2030.
- **L3:** 1952 the Free Officers; 1956 Suez; 1979 peace with Israel; 2011 revolution; 2013
  the army removes Morsi.
- **L4:** Abdel Fattah el-Sisi, PM Mostafa Madbouly, and the intelligence chief.
- **L5, the mediator:** the Gaza ceasefire and the **Sharm el-Sheikh summit (Oct 2025)**, and
  the Rafah crossing.
- **L6, economy in a "near-emergency":** the IMF, devaluation, Gulf bailouts, and **Suez revenue
  collapsing** because of Red Sea attacks and the Iran war.
- **L7, the Nile:** Ethiopia's mega-dam, inaugurated in Sept 2025, and water as national
  security.
- **L8:** Debt, the IMF reviews, and Egypt's role after the wars.
- 🎨 A nearly empty Suez Canal with one ship; a crowded Cairo bread line; the Nile from
  above at dusk.

---

# Part 4 — The Indo-Pacific

## Unit 17 — Japan 🇯🇵
*Why it's here: one of the five biggest economies, the key US ally in Asia, rearming, and led
by a prime minister with a historic mandate.*

- **L2:** A parliamentary monarchy. The Diet, the LDP's near-permanent rule since 1955, and
  Article 9.
- **L3:** 1947 the constitution; 1955 the LDP; the lost decades; the 2012–20 Abe era; Abe's
  assassination (2022).
- **L4:** PM **Sanae Takaichi**, coalition partner Ishin (JIP), the new Centrist Reform
  Alliance, and populist Sanseito.
- **L5, the first woman PM:** Ishiba resigns, Komeito quits the coalition, and Takaichi takes
  office (Oct 2025).
- **L6, the Taiwan remark:** her Nov 2025 comment on defending Taiwan and China's economic
  retaliation.
- **L7, the landslide:** the **8 Feb 2026 snap election** gives the LDP **316 of 465 seats**,
  the first single-party two-thirds majority since WWII.
- **L8:** Constitutional revision, defence spending, and relations with China.
- 🎨 A Tokyo election-night crowd in the rain; a warship leaving harbour at dawn; the Diet
  building in cherry-blossom season.

## Unit 18 — South Korea 🇰🇷
*Why it's here: a chip and shipbuilding power on the front line with North Korea, whose
democracy survived a coup attempt.*

- **L2:** A presidential republic with one five-year term, the National Assembly, and the
  Constitutional Court.
- **L3:** 1950–53 the Korean War; Park Chung-hee's developmental dictatorship; 1987
  democracy; 2017 Park Geun-hye impeached.
- **L4:** President Lee Jae-myung, the People Power Party, and Yoon Suk Yeol.
- **L5, the six-hour martial law:** 3 Dec 2024, then impeachment, removal (Apr 2025), and
  a **life sentence for insurrection (Feb 2026)**.
- **L6, Lee's bargain with Trump:** the tariff-and-investment deal, and the Sept 2025 raid on a
  Korean battery plant in Georgia that shocked Seoul.
- **L7, the June 2026 local elections:** a nationwide win for Lee's party but a loss in Seoul,
  and his approval dips below 50%.
- **L8:** North Korea outreach, Yoon's appeals, and the 2028 legislative election.
- 🎨 Citizens linking arms outside a parliament gate at night; a shipyard with a half-built
  hull; a courtroom corridor.

## Unit 19 — North Korea 🇰🇵
*Why it's here: a nuclear state whose troops fight for Russia.*

- **L2:** A totalitarian one-party state. The Kim dynasty and the Party's apparatus.
- **L3:** 1948 the founding; the Korean War; the 1990s famine; 2006 the first nuclear test;
  2011 Kim Jong Un.
- **L4:** Kim Jong Un, Kim Yo Jong, the daughter often seen as a possible successor, and Foreign
  Minister Choe Son Hui.
- **L5, soldiers for Moscow:** troops in the Kursk fighting, millions of shells and missiles for
  Russia, and what Pyongyang gets back.
- **L6, the Beijing parade:** Kim beside Xi and Putin (Sept 2025), the end of isolation.
- **L7, the 9th Party Congress (Feb 2026):** a new five-year plan, and the "two hostile states"
  line that abandoned unification.
- **L8:** Nuclear tests, a possible Trump–Kim meeting, and succession.
- 🎨 Torch-lit mass games from high above; a freight train crossing a border bridge in snow;
  an empty unification monument.

## Unit 20 — Taiwan 🇹🇼
*Why it's here: it makes most of the world's most advanced chips, and it is the likeliest
spark for a US–China war.* **Status note:** Taiwan has governed itself since 1949, Beijing
claims it, and few countries recognize it formally. The unit explains that status neutrally,
and it's included because its politics move the world.

- **L2:** A semi-presidential democracy: a DPP president facing a KMT–TPP majority in the
  Legislative Yuan.
- **L3:** 1949 the ROC government retreats to Taiwan; martial law until 1987; 1996 the first
  direct presidential vote; 2016 Tsai; 2024 Lai.
- **L4:** President Lai Ching-te, Premier Cho Jung-tai, KMT chair Cheng Li-wun, and the TPP.
- **L5, the Great Recall:** the 2025 attempt to recall dozens of KMT legislators, which failed
  across the board.
- **L6, chips and tariffs:** TSMC's US build-out and the "silicon shield" debate.
- **L7, drills and deterrence:** PLA exercises around the island, the special defence budgets,
  and the Aug 2026 drone-industry budget.
- **L8:** The late-Nov 2026 local elections and the road to 2028.
- 🎨 A chip fab glowing at night; coastguard boats in a grey strait; a campaign truck in
  a night market.

## Unit 21 — Pakistan 🇵🇰
*Why it's here: 250 million people, nuclear weapons, an army that runs the show, and suddenly
the Iran war's peacemaker.*

- **L2:** Parliamentary on paper, "hybrid" in practice: the military establishment is on top.
  The Nov 2025 constitutional amendment created a Chief of Defence Forces.
- **L3:** 1947 partition; 1971 Bangladesh; the coups of 1958, 1977 and 1999; 1998 the nuclear
  tests; 2022 Imran Khan ousted.
- **L4:** **Field Marshal Asim Munir**, PM Shehbaz Sharif, President Zardari, and Imran Khan
  (jailed since 2023).
- **L5, the May 2025 war with India:** and Munir's promotion to field marshal.
- **L6, the peacemaker:** Pakistan brokers the **8 Apr 2026 US–Iran ceasefire** and hosts the
  Islamabad talks. Trump calls Munir his "favorite field marshal".
- **L7, the jailed ex-PM and the army state:** Khan's imprisonment, the constitutional changes,
  the Saudi defence pact, and the Afghan border clashes.
- **L8:** The IMF, the Iran talks, and Khan's fate.
- 🎨 A negotiating table in an empty hotel ballroom; mountain border posts in snow; a crowd
  with portraits held aloft (no faces).

## Unit 22 — Indonesia 🇮🇩
*Why it's here: the world's fourth most populous country and largest Muslim-majority
democracy, the nickel behind EV batteries, and ASEAN's anchor.*

- **L2:** A presidential republic, the decentralization after 1998, and the military's creeping
  return to civilian roles.
- **L3:** 1945 independence; the 1965–66 killings and Suharto's New Order; 1998 *Reformasi*;
  2014–24 Jokowi.
- **L4:** President Prabowo Subianto, VP Gibran Rakabuming Raka (Jokowi's son), Jokowi, and the
  finance minister who replaced Sri Mulyani.
- **L5, the general's return:** Prabowo's path from a disgraced general to a 2024 landslide.
- **L6, the big-state agenda:** free school meals, the Danantara sovereign fund, and the
  military-law changes.
- **L7, the Aug 2025 protests:** a delivery driver killed by a police vehicle, rage at MPs'
  perks, and a finance minister sacked.
- **L8:** Economic confidence, protest risk, and 2029.
- 🎨 A motorbike taxi crowd at a Jakarta intersection; a nickel smelter plume; school kids
  with lunch trays.

## Unit 23 — Australia 🇦🇺
*Why it's here: a US ally with AUKUS submarines, a Pacific power, and dependent on trade with
China, with a populist surge at home.*

- **L2:** A federal parliamentary monarchy with compulsory and preferential voting.
- **L3:** 1901 federation; the end of White Australia; the failed 1999 republic referendum; the
  2023 Voice referendum; the 2025 landslide.
- **L4:** Anthony Albanese, Liberal leader Angus Taylor (since Feb 2026), and Pauline Hanson.
- **L5, the 2025 landslide:** Labor's 94 seats and the opposition leader losing his own seat.
- **L6, Bondi:** the **14 Dec 2025** antisemitic terror attack at a Hanukkah celebration (15
  killed), the new gun laws, and the speech-law debate.
- **L7, One Nation rising:** a by-election win and Newspoll first place on primary votes (Aug
  2026), plus AUKUS under Trump.
- **L8:** The political realignment and the China balance.
- 🎨 A Sydney beach at dusk with candles on the sand; a submarine hull in dry dock; a country
  pub with a TV showing the count (no legible text).

---

# Part 5 — The Americas

## Unit 24 — Canada 🇨🇦
*Why it's here: a G7 member and America's biggest trading partner, told it should become the
"51st state", and facing a separatism vote.*

- **L2:** A federal parliamentary monarchy, first-past-the-post, strong provinces, and Quebec.
- **L3:** 1867 Confederation; 1982 the Charter; 1995 Quebec's near-miss referendum; NAFTA;
  the Trudeau decade.
- **L4:** PM Mark Carney, Pierre Poilievre, and Alberta Premier Danielle Smith.
- **L5, "Elbows up":** Trump's tariffs and annexation talk revive the Liberals, and Carney wins
  in Apr 2025.
- **L6, from minority to majority:** floor-crossings and by-elections give Carney a majority
  (Apr 2026). The pivot to defence, trade diversification and "major projects".
- **L7, the CUSMA review:** the three-way trade deal up for renewal in 2026.
- **L8, Alberta's vote (19 Oct 2026):** a referendum question on taking steps toward separation.
- 🎨 A prairie grain elevator under a huge sky; a border crossing with trucks backed up; a
  Parliament Hill tower in snow.

## Unit 25 — Mexico 🇲🇽
*Why it's here: America's top trading partner, 130 million people, cartels, migration and
nearshoring, under steady US pressure.*

- **L2:** A federal presidential system with one six-year term. Morena's dominance, and now
  elected judges.
- **L3:** 1910 revolution; the PRI's 71 years; 1994 NAFTA and the Zapatistas; 2000 the PRI
  loses; 2006 the drug war; 2018 AMLO.
- **L4:** President Claudia Sheinbaum (the first woman president), security chief Omar García
  Harfuch, and AMLO's shadow.
- **L5, voting for judges:** the June 2025 judicial election, its low turnout, and the debate
  over independence.
- **L6, cartels and Washington:** terrorist designations of cartels, prisoner handovers, and
  Trump at the UN (Sept 2026) saying the US will use force if needed.
- **L7, the Gen Z marches:** anger after the Nov 2025 killing of Uruapan's mayor, and tariffs
  and the USMCA review.
- **L8:** The trade review, security cooperation, and the 2027 midterms.
- 🎨 A long line of freight trucks at a border bridge at dawn; a candlelit town square vigil; a
  polling station in a courtyard.

## Unit 26 — Brazil 🇧🇷
*Why it's here: Latin America's biggest economy, the Amazon, a BRICS founder, and a democracy
that put an ex-president in prison. It votes on 4 Oct 2026.*

- **L2:** A federal presidential system, a fragmented Congress (the *centrão*), and a
  powerful Supreme Court.
- **L3:** 1964–85 the dictatorship; 1988 the constitution; 1994 the Real Plan; Lava Jato;
  2016 impeachment; 2018 Bolsonaro.
- **L4:** Lula, **Flávio Bolsonaro**, Jair Bolsonaro, and Justice Alexandre de Moraes.
- **L5, 8 January and the coup trial:** the 2023 riot, then **Bolsonaro convicted (Sept 2025)**
  and jailed.
- **L6, Trump's tariffs:** 50% tariffs tied to the Bolsonaro case, sanctions on a Supreme Court
  justice, then a partial thaw.
- **L7, the 2026 election:** Lula seeks a fourth term against Flávio Bolsonaro. The runoff
  polls are a statistical tie.
- **L8:** Results from 4 and 25 Oct (arriving as a dispatch), the Amazon, and US relations.
- 🎨 Shattered glass in a modernist government palace; a red and a green-yellow rally
  facing each other across an avenue; the Amazon canopy from above.

## Unit 27 — Argentina 🇦🇷
*Why it's here: Milei's libertarian "chainsaw" experiment is watched worldwide, it has lithium
and shale, and Washington threw it a $20bn lifeline.*

- **L2:** A federal presidential system, Peronism as the dominant political identity, and
  powerful provincial governors.
- **L3:** 1946 Perón; the 1976–83 dictatorship and the Falklands; the 2001 collapse; the
  Kirchner years; 2023 Milei.
- **L4:** Javier Milei, Karina Milei, Economy Minister Luis Caputo, Cristina Fernández de
  Kirchner (under house arrest), and Axel Kicillof.
- **L5, the chainsaw:** austerity, and inflation from over 200% a year to around 2% a month.
- **L6, the US rescue and the midterms:** the $20bn swap line and Milei's Oct 2025 midterm win.
- **L7, reform and fatigue:** stalled growth, rising unemployment, approval in the mid-30s, and
  the central-bank reform.
- **L8:** The road to the 24 Oct 2027 election, where Milei is running again.
- 🎨 A literal chainsaw on a rally stage, lit like a rock concert; a peso-exchange board
  (no legible text); a Patagonian shale rig.

## Unit 28 — Venezuela 🇻🇪
*Why it's here: it holds the largest proven oil reserves, and it was the scene of the first US
seizure of a sitting national leader since Panama's Noriega in 1990.*

- **L2:** Nominally a federal presidential system; in practice *chavismo*, the military, and
  now an acting presidency under US pressure.
- **L3:** 1958 democracy; 1989 the *Caracazo*; 1998 Chávez; 2013 Maduro; millions emigrate;
  the disputed July 2024 election.
- **L4:** Acting President Delcy Rodríguez, Nicolás Maduro (in US custody), María Corina
  Machado (Nobel Peace Prize 2025), and Edmundo González.
- **L5, the disputed election:** opposition tallies show González winning, the electoral council
  declares Maduro the winner without precinct data, and Machado's Nobel follows.
- **L6, from boat strikes to capture:** US strikes on alleged drug boats from Sept 2025, then
  the **3 Jan 2026 operation**.
- **L7, Delcy's Venezuela:** sanctions lifted on her, political prisoners released, oil opened
  up, and a **UN speech (23 Sept 2026) thanking Trump**. The open question is legitimacy.
- **L8:** An election timeline, if any, and Maduro's trial (June 2027).
- 🎨 Helicopters over a dark coastline; an oil terminal at dawn; exiles watching a TV in a
  Bogotá café (no faces).

---

# Part 6 — Africa

## Unit 29 — South Africa 🇿🇦
*Why it's here: Africa's most industrialized economy, a BRICS member and host of the 2025
G20, running a grand-coalition experiment that's about to be tested.*

- **L2:** A parliamentary republic whose president is elected by parliament, proportional
  representation, and a strong constitution and courts.
- **L3:** 1948 apartheid; 1960 Sharpeville; 1976 Soweto; 1994 Mandela; the Zuma "state capture"
  years.
- **L4:** Cyril Ramaphosa, DA leader Geordin Hill-Lewis (since Apr 2026), Jacob Zuma (MK), and
  Julius Malema (EFF).
- **L5, the ANC loses its majority:** 2024's 40% and the ten-party Government of National Unity.
- **L6, the Trump clash:** the Afrikaner refugee programme, the Oval Office meeting, tariffs, the
  **US boycott of the Johannesburg G20**, and the ICJ case against Israel.
- **L7, the 4 Nov 2026 local elections:** the ANC may fall toward 35%, and municipal coalitions
  are a preview of 2029.
- **L8:** The GNU's survival, and the ANC's 2027 succession.
- 🎨 A Soweto street at golden hour; the Union Buildings' amphitheatre; a township queue
  at a polling tent.

## Unit 30 — Nigeria 🇳🇬
*Why it's here: Africa's most populous country, an oil producer and regional power, in a
security crisis, and voting on 16 Jan 2027.*

- **L2:** A US-style federal presidential system, 36 states, and the unwritten north–south
  "zoning" of the presidency.
- **L3:** 1960 independence; 1967–70 Biafra; military rule to 1999; 2015 the first opposition
  victory.
- **L4:** Bola Tinubu, Atiku Abubakar (ADC), Peter Obi (NDC), and the governors who defected.
- **L5, shock therapy:** fuel subsidy removal and the naira float (2023), then inflation.
- **L6, insecurity and Washington:** mass kidnappings, the US "Country of Particular Concern"
  designation (Oct 2025), and **US airstrikes in the North-West (25 Dec 2025)**.
- **L7, the road to 2027:** the opposition PDP collapses into the ruling APC, and new coalitions
  form.
- **L8:** The Jan 2027 vote and the security map.
- 🎨 A Lagos traffic jam from a bridge at dusk; an empty village school with open doors; a
  crowded petrol-station queue.

---

## The bench (alternates, in order)

1. **Hungary.** The **12 Apr 2026 election ended Orbán's 16 years**: Péter Magyar's Tisza won a
   two-thirds supermajority. It is the strongest swap candidate if you'd rather follow Europe's
   biggest political turnover than one of the 30.
2. **Qatar.** Mediator in Gaza and Afghanistan, gas superpower, and hit in the Iran war.
3. **Syria.** The post-Assad state, and whether it holds together.
4. **Vietnam.** A manufacturing magnet and a Party leadership shake-up.
5. **Philippines.** The South China Sea front line and the Marcos–Duterte feud.
6. **Ethiopia.** Africa's second most populous country, the Nile dam, and Tigray's aftermath.
7. **Colombia.** The 2026 election and the drug war with Washington.
8. **Sudan.** The world's largest humanitarian crisis.

Adding one later is cheap: it's one more file in `units/`, so the bench can become units 31+
without touching anything else.

---

## Build order

| Phase | What ships | Why this order |
|-------|------------|----------------|
| **1. Engine + pilot** ✅ | `politics/` app (Today, Atlas, Reader, progress, Academy bridge, validator, image manifest, map builder), the `cta` change in Academy, and **Unit 1 United States**. Its map and diagram are done; 6 illustrations and 7 portraits are listed by the image manifest | You judge the format on a real unit before 29 more are written. It's also timely: the midterms are on 3 Nov |
| **2. Wave A** ✅ | China, Russia, India, Ukraine, each with a map (disputed areas hatched) and a power diagram | Finishes Part 1, and Ukraine anchors Part 2 |
| **3. Wave B** ✅ | Germany, UK, France, Italy, Poland, Turkey, each with a map and a power diagram | Europe |
| **4. Wave C** ✅ | Israel, Iran, Saudi Arabia, UAE, Egypt, each with a map (Golan, West Bank and Gaza hatched) and a power diagram | The Middle East; Israel's is timed against its election |
| **5. Wave D** ✅ | Japan, South Korea, North Korea, Taiwan, Pakistan, Indonesia, Australia, each with a map (southern Kurils hatched) and a power diagram | The Indo-Pacific |
| **6. Wave E** ✅ | Canada, Mexico, Brazil, Argentina, Venezuela, South Africa, Nigeria, each with a map (the Falklands hatched as contested) and a power diagram | The Americas and Africa; Brazil's is timed against its 4 October election |
| **7. Upkeep** | Dispatches after each dated event, the 120-day refreshes, Handoff sync, the world map | Keeps it current |

**Staying ahead of the reader.** At one briefing a day, a five-unit wave is about 40 days of
reading. One wave a month means you never run out.

**Each wave's PR** carries the research notes, the unit files, the image prompts, a green
validator, and a fact-check note listing anything uncertain. Images can follow the text in a
separate PR, because placeholders render cleanly.

---

## Sources checked while planning (2026-09-28)

- Iran war and succession: [CFR tracker](https://www.cfr.org/global-conflict-tracker/conflict/confrontation-between-united-states-and-iran), [NPR, day 10](https://www.npr.org/2026/03/09/nx-s1-5742327/us-israel-iran-war-new-supreme-leader), [Al Jazeera, 30 Aug](https://www.aljazeera.com/news/2026/8/30/the-home-front-how-israel-iran-and-us-leaders-have-been-hit-by-the-war)
- Iran protests: [Amnesty](https://www.amnesty.org/en/latest/campaigns/2026/01/what-happened-at-the-protests-in-iran/), [HRW](https://www.hrw.org/news/2026/01/16/iran-growing-evidence-of-countrywide-massacres), [NPR](https://www.npr.org/2026/01/27/nx-s1-5689793/6-126-iran-crackdown-protests-death-toll)
- Pakistan mediation: [CFR](https://www.cfr.org/articles/how-pakistan-became-the-iran-wars-unlikely-peace-negotiator), [Al Jazeera](https://www.aljazeera.com/features/2026/4/8/how-pakistan-managed-to-get-the-us-and-iran-to-a-ceasefire)
- Gulf states in the war: [TIME](https://time.com/article/2026/09/14/gulf-uae-saudi-arabia-qatar-iran-war/), [Atlantic Council](https://www.atlanticcouncil.org/dispatches/the-gulf-that-emerges-from-the-iran-war-will-be-very-different/)
- Egypt: [Chatham House](https://www.chathamhouse.org/2026/05/why-egypt-helping-end-iran-war), [Times of Israel](https://www.timesofisrael.com/sissi-says-egypt-in-state-of-near-emergency-as-iran-war-threatens-economy/)
- Venezuela: [CNN, 23 Sept](https://www.cnn.com/2026/09/23/americas/us-venezuela-rodriguez-un-trump-intl-hnk), [Al Jazeera](https://www.aljazeera.com/news/2026/4/1/us-removes-sanctions-on-venezuelas-interim-president-delcy-rodriguez)
- Ukraine talks and politics: [Wikipedia: peace negotiations](https://en.wikipedia.org/wiki/Peace_negotiations_in_the_Russo-Ukrainian_war), [France 24 on Yermak](https://www.france24.com/en/europe/20260515-test-for-ukraine-dilemma-zelensky-what-stake-andriy-yermak-corruption-probe), [Ukrainska Pravda on Budanov](https://www.pravda.com.ua/eng/news/2026/01/02/8014417/)
- Russia's Duma election: [Moscow Times](https://www.themoscowtimes.com/2026/09/25/united-russia-wins-record-state-duma-majority-in-elections-dubbed-as-the-most-uncompetitive-in-modern-history-a93791), [Al Jazeera](https://www.aljazeera.com/news/2026/9/21/russia-election-results-show-putins-party-winning-what-we-know)
- US midterms: [Brookings](https://www.brookings.edu/articles/gop-midterm-prospects-darken-as-trump-approval-falls/), [Pew](https://www.pewresearch.org/politics/2026/07/23/as-the-2026-midterms-approach-economy-is-front-and-center/)
- US tariffs: [CRS on the IEEPA ruling](https://www.congress.gov/crs-product/LSB11398), [Global Trade Alert](https://globaltradealert.org/blog/from-ieepa-to-section-122), [Z2Data on Section 122's end](https://www.z2data.com/insights/how-the-termination-of-section-122-tariffs-impacts-your-supply-chain/)
- China: [CSIS on the 2026 summits](https://www.csis.org/programs/trump-xi-2026-summits), [Asia Society on the Fourth Plenum](https://asiasociety.org/policy-institute/we-must-depend-entirely-ourselves-policy-politics-and-us-china-relations-fourth-plenum)
- India: [NPR on West Bengal](https://www.npr.org/2026/05/04/g-s1-120053/modis-party-takes-control-of-indias-west-bengal-in-key-state-election), [ISAS](https://www.isas.nus.edu.sg/papers/indias-2026-state-elections-upsets-in-tamil-nadu-and-west-bengal/), [Al Jazeera on the trade deal](https://www.aljazeera.com/economy/2026/2/2/trump-to-slash-us-tariffs-on-india-from-50-percent-to-18-percent)
- Germany: [NPR](https://www.npr.org/2026/09/21/g-s1-144231/germany-state-elections-merz), [CNBC](https://www.cnbc.com/2026/09/07/afd-germany-economy-merz.html), [Wikipedia: 2026 Merz government crisis](https://en.wikipedia.org/wiki/2026_Merz_government_crisis)
- UK: [Wikipedia: 2026 Labour leadership election](https://en.wikipedia.org/wiki/2026_Labour_Party_leadership_election_(UK)), [Makerfield by-election](https://en.wikipedia.org/wiki/2026_Makerfield_by-election), [YouGov, Sept 2026](https://yougov.com/en-gb/articles/55550-political-favourability-ratings-september-2026)
- France: [Bloomberg on the deficit](https://www.bloomberg.com/news/articles/2026-09-17/french-premier-eyes-54-billion-effort-to-stop-deficit-blowout), [Al Jazeera on Le Pen's appeal](https://www.aljazeera.com/news/2026/7/7/france-appeals-court-opens-door-for-le-pen-presidential-run-with-ankle-tag)
- Italy: [Euronews](https://www.euronews.com/my-europe/2026/03/23/meloni-admits-defeat-as-italians-reject-judicial-reform-in-major-referendum)
- Poland: [Notes from Poland](https://notesfrompoland.com/2026/06/12/nawrocki-issues-record-37th-veto-more-than-any-other-president-in-polish-history/), [Euronews](https://www.euronews.com/2026/03/13/polands-pm-tusk-defies-presidents-veto-over-437-billion-eu-defence-loan)
- Hungary: [CNN](https://www.cnn.com/2026/04/12/world/live-news/hungary-election-orban-magyar), [Al Jazeera](https://www.aljazeera.com/news/2026/4/12/hungary-election-early-results-show-magyars-tisza-ahead-of-orbans-fidesz)
- Turkey: [HRW](https://www.hrw.org/news/2026/03/03/turkiye-leading-opponent-of-erdogan-on-trial), [Foreign Policy](https://foreignpolicy.com/2026/09/03/turkey-erdogan-israel-ocalan-kurds-peace-israel-iran-syria/)
- Israel and Gaza: [Haaretz poll, 27 Sept](https://www.haaretz.com/israel-news/israel-politics/2026-09-27/ty-article/israel-election-poll-eisenkot-netanyahu-tie-as-smotrich-hits-new-high/000001a0-e43c-db4b-a7a5-f67e17050000), [Al Jazeera on the disarmament roadmap](https://www.aljazeera.com/news/2026/7/31/gaza-board-of-peace-announces-hamas-disarmament-agreement-what-we-know)
- Japan: [CNN](https://www.cnn.com/2026/02/08/asia/japan-takaichi-snap-election-exit-polls-intl), [Nippon.com](https://www.nippon.com/en/japan-data/h02703/)
- South Korea: [CNN on the Yoon verdict](https://www.cnn.com/2026/02/19/asia/south-korea-yoon-suk-yeol-verdict-insurrection-intl-hnk), [ISDP on the local elections](https://www.isdp.eu/surprising-results-of-the-2026-local-elections-in-south-korea/)
- North Korea: [KEI](https://keia.org/analysis/what-the-ninth-party-congress-tells-us-about-where-north-korea-is-headed/), [Al Jazeera](https://www.aljazeera.com/news/2026/2/20/north-koreas-kim-jong-un-launches-key-party-congress-held-every-5-years)
- Taiwan: [AEI, 1 Sept](https://www.aei.org/commentary/china-taiwan-update-september-1-2026/), [Al Jazeera](https://www.aljazeera.com/news/2026/5/20/taiwans-president-says-future-will-not-be-decided-by-external-forces)
- Indonesia: [East Asia Forum](https://eastasiaforum.org/2026/06/15/indonesias-interventionist-presidency-and-its-looming-crisis-of-confidence/)
- Australia: [Wikipedia: Bondi shooting](https://en.wikipedia.org/wiki/2025_Bondi_Beach_shooting), [The New Daily on Newspoll](https://www.thenewdaily.com.au/news/politics/australian-politics/2026/08/31/newspoll-one-nation), [Wikipedia: 2026 Liberal spill](https://en.wikipedia.org/wiki/2026_Liberal_Party_of_Australia_leadership_spill)
- Canada: [Wikipedia: Carney premiership](https://en.wikipedia.org/wiki/Premiership_of_Mark_Carney), [Wikipedia: Alberta referendum](https://en.wikipedia.org/wiki/2026_Alberta_independence_referendum)
- Mexico: [Houston Public Media, 28 Sept](https://www.houstonpublicmedia.org/articles/news/texas/2026/09/28/563004/the-u-s-and-mexico-arent-breaking-up-over-cartels-theyre-arguing-over-whos-to-blame/)
- Brazil: [Al Jazeera, 25 Sept](https://www.aljazeera.com/news/2026/9/25/brazils-lula-and-flavio-bolsonaro-still-essentially-tied-in-new-poll), [AS/COA](https://www.as-coa.org/articles/poll-tracker-brazils-2026-presidential-election)
- Argentina: [Chatham House](https://www.chathamhouse.org/2026/06/can-argentinas-javier-milei-evolve-disruptor-political-leader), [Rio Times](https://www.riotimesonline.com/argentina-milei-1000-days-polls-approval-2026)
- South Africa: [SAnews on the election date](https://www.sanews.gov.za/south-africa/president-sets-4-november-2026-date-local-government-elections), [Wikipedia: DA 2026 congress](https://en.wikipedia.org/wiki/2026_Democratic_Alliance_Federal_Congress)
- Nigeria: [CRS](https://www.congress.gov/crs-product/R47052), [Foreign Policy](https://foreignpolicy.com/2026/09/16/nigeria-military-reforms-spending-insurgency-violence-tinubu-election/)
