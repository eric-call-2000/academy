#!/usr/bin/env node
/* ============================================================
   "How power works" diagrams, one per country, drawn from the
   specs below so every unit's diagram has the same look as the
   hand-made US one (img/us/us-2-power.svg).

     node tools/build-diagrams.js          every spec
     node tools/build-diagrams.js cn ru    just these

   A spec is a stack: an optional top band, boxes joined by labelled
   arrows, and an optional bottom band. Keep lines short (about 34
   characters) so text stays legible at phone width. Output:
   img/<id>/<id>-2-power.svg. Facts in these diagrams must also be
   in the unit's research note.
   ============================================================ */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");

const SPECS = {
  cn: {
    title: "How power works in China",
    top: ["THE COMMUNIST PARTY", "about 100 million members; no rival parties can compete"],
    boxes: [
      { head: "PARTY CONGRESS", tag: "sets the line", color: "#8a2a26", lines: ["Meets every five years (next: 2027)", "Elects the Central Committee (~200)"] },
      { arrow: "which chooses" },
      { head: "STANDING COMMITTEE", tag: "rules", color: "#a8322d", lines: ["Seven men at the top of the Politburo", "Led by Xi Jinping, Party chief since 2012", "Makes the big decisions"] },
      { arrow: "which directs" },
      { head: "THE STATE", tag: "carries out", color: "#5b6270", lines: ["State Council, led by Premier Li Qiang", "National People's Congress passes laws"] },
      { arrow: "the Party also controls" },
      { head: "MILITARY COMMISSION", tag: "the army", color: "#4a3b2a", lines: ["Chaired by Xi; controls the PLA", "The army answers to the Party"] }
    ],
    bottom: ["PROVINCES", "run by Party secretaries appointed from Beijing"]
  },
  ru: {
    title: "How power works in Russia",
    top: ["THE VOTERS", "elections are held, but opponents are barred or jailed"],
    boxes: [
      { head: "PRESIDENT", tag: "Vladimir Putin", color: "#4a4e69", lines: ["In power since 2000 (PM 2008–12)", "Can run until 2036 under 2020 changes", "Commands the army and security services"] },
      { arrow: "appoints" },
      { head: "GOVERNMENT", tag: "runs the economy", color: "#5b6270", lines: ["Prime Minister Mikhail Mishustin", "Ministries report to the president"] },
      { arrow: "passes the laws it sends" },
      { head: "PARLIAMENT", tag: "approves", color: "#6b5b7a", lines: ["State Duma: 450 seats", "United Russia holds 349 (2026)", "Federation Council: regions' upper house"] },
      { arrow: "watched by" },
      { head: "SECURITY STATE", tag: "the siloviki", color: "#3a3a4a", lines: ["FSB, army, National Guard", "Security Council run by Sergei Shoigu"] }
    ],
    bottom: ["REGIONS", "governors are elected, but candidates are vetted"]
  },
  in: {
    title: "How power works in India",
    top: ["THE VOTERS", "nearly a billion registered, the world's largest electorate"],
    boxes: [
      { head: "LOK SABHA", tag: "the lower house", color: "#c26a1b", lines: ["543 elected seats, five-year terms", "First past the post in each seat", "272 seats for a majority"] },
      { arrow: "majority chooses" },
      { head: "PRIME MINISTER", tag: "and cabinet", color: "#8a4a12", lines: ["Narendra Modi, since 2014", "Leads the NDA coalition (293 seats)"] },
      { arrow: "checked by" },
      { head: "SUPREME COURT", tag: "and the Constitution", color: "#5b6270", lines: ["Can strike down laws and orders", "President: head of state, mostly formal"] },
      { arrow: "shares power with" },
      { head: "THE STATES", tag: "28 of them", color: "#2f7d4f", lines: ["Own elected governments and chief ministers", "Run police, land, health, schools"] }
    ],
    bottom: ["ELECTION COMMISSION", "independent body that runs every national and state vote"]
  },
  ua: {
    title: "How power works in Ukraine",
    top: ["THE VOTERS", "no national election since 2019: martial law since 2022"],
    boxes: [
      { head: "PRESIDENT", tag: "Volodymyr Zelensky", color: "#2b6cb0", lines: ["Commander-in-chief; runs foreign policy", "Nominates the prime minister", "Heads the security council (NSDC)"] },
      { arrow: "nominates" },
      { head: "VERKHOVNA RADA", tag: "parliament", color: "#1f4e79", lines: ["Up to 450 seats; passes laws and budgets", "Approves the prime minister and cabinet"] },
      { arrow: "appoints" },
      { head: "GOVERNMENT", tag: "runs the country", color: "#5b6270", lines: ["PM Serhiy Koretskyi since July 2026", "Energy, economy, war production"] },
      { arrow: "watched by" },
      { head: "ANTI-CORRUPTION BODIES", tag: "independent", color: "#6b4f8a", lines: ["NABU investigates, SAPO prosecutes", "A special court tries high-level cases"] }
    ],
    bottom: ["EUROPE AND ALLIES", "EU and IMF money is tied to reform and rule of law"]
  }
};

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function build(id, spec) {
  const W = 760, X = 40, BW = 680;
  let y = 22;
  const parts = [];
  const band = (b, fill, stroke) => {
    parts.push('<rect x="' + X + '" y="' + y + '" width="' + BW + '" height="72" rx="36" fill="' + fill + '" stroke="' + stroke + '" stroke-width="2"/>');
    parts.push('<text x="' + (X + BW / 2) + '" y="' + (y + 32) + '" text-anchor="middle" class="band">' + esc(b[0]) + "</text>");
    parts.push('<text x="' + (X + BW / 2) + '" y="' + (y + 58) + '" text-anchor="middle" class="bands">' + esc(b[1]) + "</text>");
    y += 72;
  };
  const arrow = (label) => {
    parts.push('<line x1="170" y1="' + (y + 2) + '" x2="170" y2="' + (y + 50) + '" stroke="#5b6270" stroke-width="3" marker-end="url(#ah)"/>');
    if (label) parts.push('<text x="184" y="' + (y + 34) + '" class="lab">' + esc(label) + "</text>");
    y += 54;
  };
  if (spec.top) { band(spec.top, "#eef1f5", "#cfd6df"); arrow(""); }
  spec.boxes.forEach((b) => {
    if (b.arrow !== undefined) { arrow(b.arrow); return; }
    const h = 62 + b.lines.length * 34 + 8;
    parts.push('<rect x="' + X + '" y="' + y + '" width="' + BW + '" height="' + h + '" rx="18" fill="#f7f8fa" stroke="' + b.color + '" stroke-width="3"/>');
    parts.push('<path d="M' + X + " " + (y + 18) + " a18 18 0 0 1 18 -18 h" + (BW - 36) + " a18 18 0 0 1 18 18 v38 h-" + BW + ' z" fill="' + b.color + '"/>');
    parts.push('<text x="' + (X + 22) + '" y="' + (y + 38) + '" class="h">' + esc(b.head) + "</text>");
    parts.push('<text x="' + (X + BW - 20) + '" y="' + (y + 38) + '" text-anchor="end" class="hs">' + esc(b.tag) + "</text>");
    b.lines.forEach((l, i) => parts.push('<text x="' + (X + 22) + '" y="' + (y + 88 + i * 34) + '" class="li">' + esc(l) + "</text>"));
    y += h;
  });
  if (spec.bottom) { y += 20; band(spec.bottom, "#f7f4ec", "#d8cfb8"); }
  const H = y + 22;
  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + " " + H + '" role="img" aria-labelledby="t">',
    '<title id="t">' + esc(spec.title) + "</title>",
    "<defs>",
    '<marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#5b6270"/></marker>',
    "<style>text{font-family:\"Nunito\",\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif;fill:#1c1d20}" +
      ".h{font-size:27px;font-weight:900;fill:#fff;letter-spacing:1px}.hs{font-size:20px;font-weight:700;fill:#fff;opacity:.92}" +
      ".li{font-size:23px;font-weight:600}.lab{font-size:19px;font-weight:800;fill:#5b6270}" +
      ".band{font-size:25px;font-weight:900;letter-spacing:1px}.bands{font-size:19px;font-weight:700;fill:#3f4148}</style>",
    "</defs>",
    '<rect width="' + W + '" height="' + H + '" fill="#ffffff"/>'
  ].concat(parts, ["</svg>"]).join("\n");
  const dir = path.join(ROOT, "img", id);
  fs.mkdirSync(dir, { recursive: true });
  const out = path.join(dir, id + "-2-power.svg");
  fs.writeFileSync(out, svg + "\n");
  console.log("wrote " + path.relative(ROOT, out));
}

const ids = process.argv.slice(2);
(ids.length ? ids : Object.keys(SPECS)).forEach((id) => {
  if (!SPECS[id]) throw new Error("No diagram spec for " + id);
  build(id, SPECS[id]);
});
