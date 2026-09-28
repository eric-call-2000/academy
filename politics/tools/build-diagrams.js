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
  },
  de: {
    title: "How power works in Germany",
    top: ["THE VOTERS", "two votes each: a local MP and a party list (5% threshold)"],
    boxes: [
      { head: "BUNDESTAG", tag: "federal parliament", color: "#1f4e79", lines: ["630 seats, elected every four years", "Elects the chancellor; passes laws"] },
      { arrow: "elects" },
      { head: "CHANCELLOR", tag: "Friedrich Merz", color: "#2b6cb0", lines: ["Sets policy; picks the cabinet", "Removed only by electing a successor"] },
      { arrow: "shares power with" },
      { head: "BUNDESRAT AND THE 16 STATES", tag: "federal", color: "#5b6270", lines: ["State governments vote in the Bundesrat", "Run schools, police and much else"] },
      { arrow: "checked by" },
      { head: "CONSTITUTIONAL COURT", tag: "Karlsruhe", color: "#6b4f8a", lines: ["Can strike down laws", "Alone can ban a party"] }
    ],
    bottom: ["THE PRESIDENT", "a ceremonial head of state, chosen by a special assembly"]
  },
  gb: {
    title: "How power works in the UK",
    top: ["THE VOTERS", "650 constituencies; first past the post"],
    boxes: [
      { head: "HOUSE OF COMMONS", tag: "650 MPs", color: "#1f4e79", lines: ["Makes laws; controls taxes", "Its majority decides who governs"] },
      { arrow: "majority forms" },
      { head: "PRIME MINISTER AND CABINET", tag: "Andy Burnham", color: "#2b6cb0", lines: ["Leader of the largest party", "Can be replaced by the party itself"] },
      { arrow: "shares power with" },
      { head: "DEVOLVED GOVERNMENTS", tag: "three nations", color: "#5b6270", lines: ["Run health, schools and more", "Elected by proportional systems"] },
      { arrow: "scrutinised by" },
      { head: "LORDS AND COURTS", tag: "unelected checks", color: "#6b4f8a", lines: ["Lords revise and delay bills", "Courts check ministers' use of power"] }
    ],
    bottom: ["THE MONARCH", "King Charles III: head of state, but acts on ministers' advice"]
  },
  fr: {
    title: "How power works in France",
    top: ["THE VOTERS", "elect the president and 577 deputies in two rounds"],
    boxes: [
      { head: "PRESIDENT", tag: "Emmanuel Macron", color: "#2b6cb0", lines: ["Five-year term, limit of two", "Foreign policy, defence, appoints PM", "Can dissolve the Assembly"] },
      { arrow: "appoints" },
      { head: "PRIME MINISTER", tag: "Sébastien Lecornu", color: "#5b6270", lines: ["Runs the government day to day", "Can pass a text by Article 49.3"] },
      { arrow: "answers to" },
      { head: "NATIONAL ASSEMBLY", tag: "577 seats", color: "#1f4e79", lines: ["Hung since 2024: three blocs", "Can topple the government"] },
      { arrow: "checked by" },
      { head: "SENATE AND COUNCILS", tag: "slower checks", color: "#6b4f8a", lines: ["Senate revises laws", "Constitutional Council reviews them"] }
    ],
    bottom: ["NEXT PRESIDENTIAL ELECTION", "April-May 2027; Macron cannot run again"]
  },
  it: {
    title: "How power works in Italy",
    top: ["THE VOTERS", "elect both chambers, mostly by party lists"],
    boxes: [
      { head: "PARLIAMENT", tag: "400 deputies, 200 senators", color: "#1f4e79", lines: ["Both chambers must back the government", "Both must pass every law"] },
      { arrow: "confidence" },
      { head: "PRIME MINISTER", tag: "Giorgia Meloni", color: "#2b6cb0", lines: ["Leads a right-wing coalition", "Governs often by decree-law"] },
      { arrow: "appointed by" },
      { head: "PRESIDENT", tag: "Sergio Mattarella", color: "#5b6270", lines: ["Elected by parliament for 7 years", "Picks PM; can dissolve parliament"] },
      { arrow: "checked by" },
      { head: "COURTS AND REFERENDUMS", tag: "the brakes", color: "#6b4f8a", lines: ["Constitutional Court reviews laws", "Voters confirm constitution changes"] }
    ],
    bottom: ["REGIONS AND EUROPE", "20 regions run health; EU rules shape the budget"]
  },
  pl: {
    title: "How power works in Poland",
    top: ["THE VOTERS", "elect the Sejm, the Senate and the president"],
    boxes: [
      { head: "SEJM", tag: "460 seats", color: "#1f4e79", lines: ["Passes laws; approves the government", "Needs 3/5 to override a veto"] },
      { arrow: "backs" },
      { head: "PRIME MINISTER", tag: "Donald Tusk", color: "#2b6cb0", lines: ["Leads a four-party coalition", "Runs policy and the budget"] },
      { arrow: "blocked by" },
      { head: "PRESIDENT", tag: "Karol Nawrocki", color: "#b0354a", lines: ["Directly elected for five years", "Vetoes laws; signs appointments"] },
      { arrow: "fought over" },
      { head: "COURTS", tag: "disputed", color: "#6b4f8a", lines: ["Judges named under PiS are contested", "EU courts weigh in"] }
    ],
    bottom: ["NEXT PARLIAMENTARY ELECTION", "autumn 2027"]
  },
  tr: {
    title: "How power works in Turkey",
    top: ["THE VOTERS", "elect the president and 600 MPs"],
    boxes: [
      { head: "PRESIDENT", tag: "Recep Tayyip Erdoğan", color: "#b5462f", lines: ["Head of state and government", "Rules by decree; appoints ministers", "Names many senior judges"] },
      { arrow: "outweighs" },
      { head: "GRAND NATIONAL ASSEMBLY", tag: "600 seats", color: "#1f4e79", lines: ["AKP and MHP hold a majority", "Can call early elections by 3/5"] },
      { arrow: "shaped by" },
      { head: "COURTS AND PROSECUTORS", tag: "politically aligned", color: "#5b6270", lines: ["Cases against opposition mayors", "Rulings often favour the government"] },
      { arrow: "resisted by" },
      { head: "OPPOSITION CITIES", tag: "CHP", color: "#6b4f8a", lines: ["Won most big cities in 2024", "Many mayors jailed or removed"] }
    ],
    bottom: ["NEXT ELECTIONS", "due by May 2028; talk of an earlier vote"]
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
