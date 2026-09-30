#!/usr/bin/env node
/* ============================================================
   Political Academy — content validator
   ------------------------------------------------------------
   Runs every data file the way the browser does (tools/load.js)
   and fails on anything that would break a page or quietly lower
   the bar the plan sets (politics-curriculum.md):

   - the 30-country manifest is complete and consistent
   - each written unit matches its manifest entry and the standard
     8- or 12-briefing arc, with stable ids <unit>-1 … <unit>-N in reading order
   - every briefing has a date, a dek, 3 takeaways, at least 2
     sources, 500–900 words, and no section over 180 words
   - every picture has alt text, a caption and a credit; AI
     illustrations are labelled as such and carry their prompt;
     maps and diagrams (which we make ourselves) must exist
   - every relationship (links.js) joins two real countries, and its
     unit has 2-3 "relation" briefings with ids <link>-1 … <link>-N
   - every [[glossary]] and [[unit:…]] reference resolves
   - dispatches and glossary entries are well formed

   Missing illustrations and portraits are NOT failures — they are
   listed as pending (see tools/image-manifest.js) and the reader
   shows a placeholder until they arrive.

   Usage: node tools/validate.js        exit 1 on any error
   ============================================================ */
const fs = require("fs");
const path = require("path");
const { load, ROOT } = require("./load");

const { P, unitFiles } = load();
const errors = [];
const warnings = [];
const pending = [];
const err = (where, msg) => errors.push(where + ": " + msg);
const warn = (where, msg) => warnings.push(where + ": " + msg);

const DATE = /^\d{4}-\d{2}-\d{2}$/;
const SRC_DATE = /^(\d{4}(-\d{2}(-\d{2})?)?|n\.d\.)$/;
const HEX = /^#[0-9a-f]{6}$/i;
const exists = (rel) => fs.existsSync(path.join(ROOT, rel));

/* ---------- manifest ---------- */
if (P.countries.length !== 30) err("countries.js", "expected 30 countries, found " + P.countries.length);
const seenIso = {};
let lastPart = 0;
P.countries.forEach((c, i) => {
  const w = "countries.js[" + c.id + "]";
  ["id", "iso", "name", "flag", "color", "blurb"].forEach((k) => { if (!c[k]) err(w, "missing " + k); });
  if (!/^[a-z]{2}$/.test(c.id)) err(w, "id must be two lowercase letters");
  if (!/^\d{3}$/.test(c.iso)) err(w, "iso must be the 3-digit ISO numeric code");
  if (seenIso[c.iso]) err(w, "iso " + c.iso + " already used by " + seenIso[c.iso]);
  seenIso[c.iso] = c.id;
  if (!HEX.test(c.color || "")) err(w, "color must be #rrggbb");
  if (!(c.part >= 1 && c.part <= P.PARTS.length)) err(w, "part must be 1–" + P.PARTS.length);
  if (c.part < lastPart) err(w, "countries must be listed in part order (path order)");
  lastPart = c.part;
  if (!Number.isInteger(c.lessons) || c.lessons < 0) err(w, "lessons must be a whole number");
  (c.related || []).forEach((r) => { if (!P.country(r)) err(w, "related country '" + r + "' doesn't exist"); });
  if (c.blurb && P.words(c.blurb) > 20) warn(w, "blurb runs " + P.words(c.blurb) + " words; cards fit about 18");
});

/* ---------- relationships ---------- */
const seenPair = {};
P.links.forEach((l) => {
  const w = "links.js[" + l.id + "]";
  ["id", "a", "b", "title", "blurb", "color"].forEach((k) => { if (!l[k]) err(w, "missing " + k); });
  if (!/^[a-z]{2}_[a-z]{2}$/.test(l.id || "")) err(w, "id must be two country ids joined by '_' (e.g. us_cn)");
  if (l.id !== l.a + "_" + l.b) err(w, "id should be '" + l.a + "_" + l.b + "'");
  if (l.a === l.b) err(w, "a relationship needs two different countries");
  [l.a, l.b].forEach((c) => { if (!P.country(c)) err(w, "'" + c + "' isn't a country id"); });
  const pair = [l.a, l.b].sort().join("+");
  if (seenPair[pair]) err(w, "same two countries as " + seenPair[pair]);
  seenPair[pair] = l.id;
  if (!HEX.test(l.color || "")) err(w, "color must be #rrggbb");
  if (!Number.isInteger(l.lessons) || (l.lessons !== 0 && (l.lessons < P.LINK_MIN || l.lessons > P.LINK_MAX)))
    err(w, "lessons must be 0 (not written yet) or " + P.LINK_MIN + "–" + P.LINK_MAX);
  if (l.blurb && P.words(l.blurb) > 24) warn(w, "blurb runs " + P.words(l.blurb) + " words; cards fit about 22");
});

/* ---------- units ---------- */
unitFiles.forEach((f) => {
  const id = f.replace(/\.js$/, "");
  if (!P.units[id]) err("units/" + f, "file doesn't register unit '" + id + "' (addUnit id must match the file name)");
  if (!P.subject(id)) err("units/" + f, "no country '" + id + "' in countries.js and no relationship '" + id + "' in links.js");
});
Object.keys(P.units).forEach((id) => {
  if (unitFiles.indexOf(id + ".js") === -1) err("units", "unit '" + id + "' registered from a file not named units/" + id + ".js");
});

function checkRefs(where, md) {
  const refs = P.scanRefs(md);
  refs.terms.forEach((t) => { if (!P.glossary[t]) err(where, "glossary term [[" + t + "]] isn't in glossary.js"); });
  refs.units.forEach((u) => { if (!P.subject(u)) err(where, "[[unit:" + u + "]] isn't a country or relationship id"); });
  if (/<[a-z/!]/i.test(md || "")) err(where, "raw HTML in text; use the markup in core.js instead");
}
function checkSource(where, s) {
  if (!s.title || !s.publisher || !s.url) err(where, "source needs title, publisher and url");
  if (s.url && !/^https:\/\//.test(s.url)) err(where, "source url must be https: " + s.url);
  if (!SRC_DATE.test(s.date || "")) err(where, "source date must be YYYY, YYYY-MM, YYYY-MM-DD or n.d.");
}
function checkPicture(where, b, lesson) {
  ["src", "alt", "caption", "credit"].forEach((k) => { if (!b[k]) err(where, b.type + " needs " + k); });
  if (b.type === "image") {
    if (b.kind !== "illustration" && b.kind !== "photo") err(where, "image kind must be 'illustration' or 'photo'");
    if (b.kind === "illustration") {
      if (!/AI illustration/.test(b.credit || "")) err(where, "AI illustrations must be credited 'AI illustration — not a photograph'");
      if (!b.prompt || P.words(b.prompt) < 12) err(where, "AI illustration needs a scene prompt of at least 12 words");
    }
    if (b.kind === "photo" && !/licen[cs]e|public domain|CC /i.test(b.credit || "")) err(where, "photos must name their licence in the credit");
    if (b.src && !exists(b.src)) pending.push({ lesson: lesson.id, file: b.src, kind: b.kind });
  } else if (b.src && !exists(b.src)) {
    err(where, b.type + " file " + b.src + " is missing (maps and diagrams are ours to make: tools/build-maps.js)");
  }
  checkRefs(where, b.caption);
}

const totals = { units: 0, links: 0, lessons: 0, words: 0 };
P.countries.forEach((c) => {
  const unit = P.units[c.id];
  if (!c.lessons) {
    if (unit) err("countries.js[" + c.id + "]", "units/" + c.id + ".js exists but lessons is 0");
    return;
  }
  const w0 = "units/" + c.id + ".js";
  if (!unit) { err(w0, "countries.js says " + c.lessons + " briefings but the file is missing"); return; }
  totals.units++;
  if (unit.id !== c.id) err(w0, "unit id '" + unit.id + "' should be '" + c.id + "'");
  if (!DATE.test(unit.asOf || "")) err(w0, "unit asOf must be YYYY-MM-DD");
  const ls = unit.lessons || [];
  if (ls.length !== c.lessons) err(w0, "has " + ls.length + " briefings; countries.js says " + c.lessons);
  const arc = P.arcFor(ls.length);
  if (!arc) err(w0, "has " + ls.length + " briefings; units have " + P.ARC8.length + " or " + P.ARC.length);
  else {
    const kinds = ls.map((l) => l.kind).join(",");
    if (kinds !== arc.join(",")) err(w0, "briefing kinds " + kinds + " don't follow the standard arc " + arc.join(","));
  }
  const order = P.readingOrder(ls.length);
  if (!exists("maps/" + c.id + ".svg")) err(w0, "maps/" + c.id + ".svg is missing (node tools/build-maps.js " + c.id + ")");

  ls.forEach((l, i) => checkLesson(l, i, unit, c.id, c.id + "-" + order[i],
    "ids are stable progress keys: never renumber; briefings 9-12 slot into the reading order"));
});

P.links.forEach((link) => {
  const unit = P.units[link.id];
  const w0 = "units/" + link.id + ".js";
  if (!link.lessons) {
    if (unit) err("links.js[" + link.id + "]", w0 + " exists but lessons is 0");
    return;
  }
  if (!unit) { err(w0, "links.js says " + link.lessons + " briefings but the file is missing"); return; }
  totals.links++;
  if (unit.id !== link.id) err(w0, "unit id '" + unit.id + "' should be '" + link.id + "'");
  if (!DATE.test(unit.asOf || "")) err(w0, "unit asOf must be YYYY-MM-DD");
  const ls = unit.lessons || [];
  if (ls.length !== link.lessons) err(w0, "has " + ls.length + " briefings; links.js says " + link.lessons);
  ls.forEach((l, i) => {
    if (l.kind !== "relation") err(link.id + "/" + l.id, "relationship briefings have kind 'relation'");
    checkLesson(l, i, unit, link.id, link.id + "-" + (i + 1), "numbered in order from 1; ids are progress keys");
  });
});

function checkLesson(l, i, unit, owner, expectId, idNote) {
  const w = owner + "/" + (l.id || "#" + (i + 1));
  totals.lessons++;
  if (l.id !== expectId) err(w, "id should be '" + expectId + "' (" + idNote + ")");
  if (!P.KINDS[l.kind]) err(w, "unknown kind '" + l.kind + "'");
  ["title", "dek"].forEach((k) => { if (!l[k]) err(w, "missing " + k); });
  if (!DATE.test(l.asOf || "")) err(w, "asOf must be YYYY-MM-DD");
  else if (unit.asOf && l.asOf > unit.asOf) err(w, "asOf " + l.asOf + " is newer than the unit's " + unit.asOf);
  if (!Array.isArray(l.blocks) || !l.blocks.length) err(w, "no blocks");
  if (!P.heroOf(l)) err(w, "needs at least one picture (image, map or diagram) for its card");
  if ((l.kind === "story" || l.kind === "relation") && !(l.blocks || []).some((b) => b.type === "image" && b.kind === "illustration"))
    err(w, l.kind + " briefings lead with an event illustration");

  (l.blocks || []).forEach((b, bi) => {
    const wb = w + " block " + (bi + 1) + " (" + b.type + ")";
    switch (b.type) {
      case "section": if (!b.md) err(wb, "empty section"); checkRefs(wb, b.md); break;
      case "callout":
        if (!b.md) err(wb, "empty callout");
        if (["why", "note", "watch"].indexOf(b.tone) === -1) err(wb, "tone must be why, note or watch");
        checkRefs(wb, b.md); break;
      case "image": case "map": case "diagram": checkPicture(wb, b, l); break;
      case "facts":
        if (!(b.rows || []).length) err(wb, "no rows");
        (b.rows || []).forEach((r) => { if (r.length !== 2 || !r[0] || !r[1]) err(wb, "each row is [label, value]"); checkRefs(wb, r[1]); });
        break;
      case "timeline":
        if (!(b.items || []).length) err(wb, "no items");
        (b.items || []).forEach((r) => { if (r.length !== 2 || !r[0] || !r[1]) err(wb, "each item is [when, what]"); checkRefs(wb, r[1]); });
        break;
      case "quote": if (!b.text || !b.who) err(wb, "a quote needs text and who said it"); break;
      case "compare":
        ["left", "right"].forEach((s) => {
          if (!b[s] || !b[s].head || !b[s].md) err(wb, s + " side needs head and md");
          else checkRefs(wb, b[s].md);
        });
        break;
      case "people":
        (b.items || []).forEach((p) => {
          if (!p.name || !p.role || !p.md) err(wb, "each person needs name, role and md");
          if (p.img && !p.source) err(wb, p.name + ": a portrait needs a source/licence note");
          if (p.img && !exists(p.img)) pending.push({ lesson: l.id, file: p.img, kind: "portrait", name: p.name });
          checkRefs(wb, p.md);
        });
        break;
      default: err(wb, "unknown block type");
    }
  });

  P.lessonTexts(l).forEach((t) => {
    if (t[2] && P.words(t[1]) > P.SECTION_WORDS_MAX) err(w, t[0] + " runs " + P.words(t[1]) + " words (max " + P.SECTION_WORDS_MAX + ")");
  });
  const words = P.lessonWords(l);
  totals.words += words;
  if (words < P.LESSON_WORDS_MIN || words > P.LESSON_WORDS_MAX)
    err(w, words + " words; a briefing is " + P.LESSON_WORDS_MIN + "–" + P.LESSON_WORDS_MAX);
  if (!Array.isArray(l.takeaways) || l.takeaways.length !== 3) err(w, "needs exactly 3 takeaways");
  (l.takeaways || []).forEach((t) => checkRefs(w + " takeaways", t));
  if (!Array.isArray(l.sources) || l.sources.length < 2) err(w, "needs at least 2 sources");
  (l.sources || []).forEach((s) => checkSource(w + " sources", s));
  if (l.check) {
    const k = l.check;
    if (!k.q || !Array.isArray(k.choices) || k.choices.length < 2) err(w, "quick check needs a question and 2+ choices");
    else if (!(k.answer >= 0 && k.answer < k.choices.length)) err(w, "quick check answer is out of range");
    if (!k.explain) err(w, "quick check needs an explanation");
  }
  if (P.isStale(l.asOf, P.dayKey(new Date()))) warn(w, "older than " + P.STALE_DAYS + " days; time to refresh");
}

/* ---------- glossary ---------- */
Object.keys(P.glossary).forEach((id) => {
  const t = P.glossary[id];
  const w = "glossary.js[" + id + "]";
  if (!t.term || !t.def) err(w, "needs term and def");
  if (P.slug(t.term) !== id && !t.alias) warn(w, "id isn't the slug of '" + t.term + "' (" + P.slug(t.term) + ")");
  if (P.words(t.def) > 60) err(w, "definition runs " + P.words(t.def) + " words (max 60)");
  checkRefs(w, t.def);
});

/* ---------- dispatches ---------- */
const seenUpd = {};
P.updates.forEach((u) => {
  const w = "updates.js[" + (u.id || "?") + "]";
  if (!u.id || seenUpd[u.id]) err(w, "needs a unique id");
  seenUpd[u.id] = 1;
  if (!P.subject(u.unit)) err(w, "unit '" + u.unit + "' isn't a country or relationship id");
  if (!DATE.test(u.date || "")) err(w, "date must be YYYY-MM-DD");
  if (!u.title || !u.md) err(w, "needs title and md");
  if (!(u.sources || []).length) err(w, "needs at least one source");
  (u.sources || []).forEach((s) => checkSource(w, s));
  checkRefs(w, u.md);
});

/* ---------- report ---------- */
Object.keys(P.units).forEach((id) => {
  const u = P.units[id];
  const rows = (u.lessons || []).map((l) => "  " + l.id.padEnd(6) + String(P.lessonWords(l)).padStart(4) + " words  " + P.readMins(l) + " min  " + l.title);
  console.log(P.subject(id).flag + " " + P.subject(id).name + " — current as of " + u.asOf + "\n" + rows.join("\n"));
});
console.log("\n" + totals.units + " unit(s), " + totals.links + " relationship(s), " + totals.lessons + " briefings, " + totals.words + " words, " +
  Object.keys(P.glossary).length + " glossary terms, " + P.updates.length + " dispatches.");
if (pending.length) console.log(pending.length + " picture(s) pending — run node tools/image-manifest.js for the list and prompts.");
warnings.forEach((w) => console.log("warn  " + w));
if (errors.length) {
  errors.forEach((e) => console.log("FAIL  " + e));
  console.log("\n" + errors.length + " error(s).");
  process.exit(1);
}
console.log("OK");
