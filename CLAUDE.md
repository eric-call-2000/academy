# Academy

A static, dependency-free learning site ("Duolingo with tracks"), live at
<https://eric-call-2000.github.io/academy/>. GitHub Pages serves `main` from the repo root, so
**merging to `main` is the deploy**.

## Layout

- `index.html`, `app.js` (lesson engine), `styles.css`, `tracks.js` (track list + unit counts)
- `<prefix>-unitN.js`: the quiz tracks' unit files, flat at the root by design (drag-and-drop
  hosting). Don't move them into folders: `app.js` loads them by name from `tracks.js`.
- `codelab/`, `politics/`, `accounting/`: separate apps that share profiles/XP through the same
  origin. Each has its own `README.md`; read it before working there.
- `obs/`: overlay assets that the OBS Overlays track teaches from.
- `unit-template.txt`: the unit file shape and question types.

## Run it

```bash
node server.js   # http://localhost:5175 (also in .claude/launch.json)
```

Opening `index.html` directly also works.

## Checks: run the ones for what you touched

| Area | Command |
|---|---|
| Quiz tracks (answer choices) | `node tools/mcq-check.js --max 40` |
| Political Academy | `node politics/tools/test-core.js` and `node politics/tools/validate.js` |
| Accounting Lab | `node accounting/tools/test-core.js` and `node accounting/tools/validate.js` |
| CodeLab | `node codelab/tools/validate.js` (needs a Chromium; see `codelab/package.json`) |

CI (`.github/workflows/`) runs the Politics and Accounting checks on PRs touching those folders.

## Conventions

- **Adding a unit:** new `<prefix>-unitN.js` and bump that track's `count` in `tracks.js`.
  A new track needs a `defineTrack` line with a `category` and `art` key (see README "Adding content").
- **README counts are recounted, never guessed.** If you add units or lessons, recount from the
  files and update the table and the "Counted from the unit files on" date.
- **Multiple-choice answers:** the correct choice must not be the longest one by habit.
  Run `mcq-check` after writing or editing questions.
- **Political Academy dispatches** go in `politics/updates.js` for big events between rewrites;
  briefings carry a "Current as of" date (validator warns after 120 days). See `politics/README.md`.
- **Commit messages:** plain sentence-case summary, prefixed with the area when it's one area,
  e.g. `Political Academy dispatch: Israel election`, `CodeLab: make Ledger Teal the default theme`,
  `Accounting Lab: add interview prep`. Work lands through PRs to `main`.
- No build step and no runtime dependencies for the site itself. Dev-only tools (map builder,
  CodeLab validator) have their own `package.json` inside their folders.
