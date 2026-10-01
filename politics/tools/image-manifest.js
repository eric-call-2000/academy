#!/usr/bin/env node
/* ============================================================
   List every picture a briefing references that doesn't exist yet,
   with what's needed to make it.

     node tools/image-manifest.js           readable list
     node tools/image-manifest.js --json    machine-readable
     node tools/image-manifest.js us        one country (or relationship, e.g. us_cn)

   Illustrations: draw the scene in tools/art/scenes/<unit>.js and
   run tools/build-art.js, which renders the 1600x900 WebP at the
   path shown. The prompt is the brief to draw from. Portraits: download the named public-domain or
   Creative Commons photo, check its licence on the file page, crop
   square (~400x400) and save at the path shown.
   The rules the pictures follow are in politics-curriculum.md
   ("Images"): always labelled, no faces of real people, no text.
   ============================================================ */
const fs = require("fs");
const path = require("path");
const { load, ROOT } = require("./load");

const { P } = load();
const only = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const asJson = process.argv.includes("--json");
const out = [];

/* Countries first, then relationships (links.js), which keep their pictures in img/<link id>/. */
P.countries.concat(P.links).forEach((c) => {
  const unit = P.units[c.id];
  if (!unit || (only.length && only.indexOf(c.id) === -1)) return;
  unit.lessons.forEach((l) => {
    (l.blocks || []).forEach((b) => {
      if (b.type === "image" && b.src && !fs.existsSync(path.join(ROOT, b.src))) {
        out.push({ country: c.id, lesson: l.id, kind: b.kind, file: b.src, size: "1600x900 WebP",
          prompt: b.kind === "illustration" ? P.IMAGE_STYLE + " Scene: " + b.prompt : undefined,
          alt: b.alt, credit: b.credit });
      }
      if (b.type === "people") {
        (b.items || []).forEach((p) => {
          if (p.img && !fs.existsSync(path.join(ROOT, p.img))) {
            out.push({ country: c.id, lesson: l.id, kind: "portrait", file: p.img, size: "400x400 WebP, square crop",
              name: p.name, source: p.source });
          }
        });
      }
    });
  });
});

if (asJson) {
  console.log(JSON.stringify(out, null, 2));
} else if (!out.length) {
  console.log("Every picture is in place.");
} else {
  console.log(out.length + " picture(s) to make.\n\nHouse style (already included in each prompt below):\n  " + P.IMAGE_STYLE + "\n");
  out.forEach((x, i) => {
    console.log((i + 1) + ". " + x.file + "  [" + x.kind + ", " + x.lesson + ", " + x.size + "]");
    if (x.prompt) console.log("   Prompt: " + x.prompt);
    if (x.name) console.log("   Who: " + x.name + "\n   Source: " + x.source);
    if (x.alt) console.log("   Alt text (already written): " + x.alt);
    console.log("");
  });
}
