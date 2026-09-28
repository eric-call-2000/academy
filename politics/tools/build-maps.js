#!/usr/bin/env node
/* ============================================================
   Build locator maps from Natural Earth (public domain) data.

     npm install            (once, in politics/)
     node tools/build-maps.js            every country with briefings
     node tools/build-maps.js us cn      just these

   Each map is an equal-area view centred on the country's main
   landmass, with neighbours for context and a small globe showing
   where it sits in the world. Output: maps/<id>.svg (committed, so
   the app itself needs no dependencies).

   Image models invent borders, so maps are never AI-generated.
   Countries with disputed or occupied territory are refused until
   someone has reviewed how the map draws it and passes --reviewed:
   the plan requires those areas to be shown as disputed, with a note
   in the caption, not silently assigned to one side.
   ============================================================ */
const fs = require("fs");
const path = require("path");
const d3 = require("d3-geo");
const topojson = require("topojson-client");
const detailed = require("world-atlas/countries-50m.json");
const coarse = require("world-atlas/countries-110m.json");
const { load, ROOT } = require("./load");

const { P } = load({ units: false });
const DISPUTED = new Set(["ua", "ru", "cn", "tw", "in", "pk", "il", "kr", "kp", "ma"]);
const W = 1200, H = 750;
const COLORS = { ocean: "#dbe7f0", grat: "#c9d9e6", land: "#f1ede4", border: "#ffffff", globeLand: "#e2ddd1", globeRim: "#9fb3c4" };

const features = topojson.feature(detailed, detailed.objects.countries).features;
const land = topojson.feature(detailed, detailed.objects.land);
const borders = topojson.mesh(detailed, detailed.objects.countries, (a, b) => a !== b);
const coarseLand = topojson.feature(coarse, coarse.objects.land);
const coarseFeatures = topojson.feature(coarse, coarse.objects.countries).features;

/* The largest single polygon of a (multi)polygon feature: the mainland,
   so the frame isn't stretched across an ocean to fit far islands. */
function mainland(f) {
  if (f.geometry.type === "Polygon") return f;
  let best = null, bestArea = -1;
  f.geometry.coordinates.forEach((coords) => {
    const poly = { type: "Feature", geometry: { type: "Polygon", coordinates: coords } };
    const a = d3.geoArea(poly);
    if (a > bestArea) { bestArea = a; best = poly; }
  });
  return best;
}

function darker(hex, k) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.round(((n >> 16) & 255) * k), g = Math.round(((n >> 8) & 255) * k), b = Math.round((n & 255) * k);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function build(c) {
  const f = features.find((x) => x.id === c.iso);
  if (!f) throw new Error(c.id + ": no Natural Earth feature with ISO numeric id " + c.iso);
  const main = mainland(f);
  const [lon, lat] = d3.geoCentroid(main);

  const proj = d3.geoAzimuthalEqualArea().rotate([-lon, -lat])
    .fitExtent([[170, 120], [W - 170, H - 120]], main)
    .clipExtent([[0, 0], [W, H]]);
  const geo = d3.geoPath(proj).digits(1);

  /* Globe inset, top right. */
  const R = 82, gx = W - 22 - R, gy = 22 + R;
  const globe = d3.geoOrthographic().rotate([-lon, -Math.max(-60, Math.min(60, lat))]).scale(R).translate([gx, gy]).clipAngle(90);
  const gpath = d3.geoPath(globe).digits(1);
  const cf = coarseFeatures.find((x) => x.id === c.iso) || f;

  const stroke = darker(c.color, 0.7);
  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + " " + H + '" role="img" aria-labelledby="t">',
    '<title id="t">Locator map: ' + P.esc(c.name) + "</title>",
    '<rect width="' + W + '" height="' + H + '" fill="' + COLORS.ocean + '"/>',
    '<path d="' + geo(d3.geoGraticule10()) + '" fill="none" stroke="' + COLORS.grat + '" stroke-width="1"/>',
    '<path d="' + geo(land) + '" fill="' + COLORS.land + '"/>',
    '<path d="' + geo(f) + '" fill="' + c.color + '"/>',
    '<path d="' + geo(borders) + '" fill="none" stroke="' + COLORS.border + '" stroke-width="1.6" stroke-linejoin="round"/>',
    '<path d="' + geo(f) + '" fill="none" stroke="' + stroke + '" stroke-width="1.6" stroke-linejoin="round"/>',
    /* globe */
    '<circle cx="' + gx + '" cy="' + gy + '" r="' + (R + 6) + '" fill="#ffffff" opacity="0.9"/>',
    '<path d="' + gpath({ type: "Sphere" }) + '" fill="' + COLORS.ocean + '"/>',
    '<path d="' + gpath(coarseLand) + '" fill="' + COLORS.globeLand + '"/>',
    '<path d="' + gpath(cf) + '" fill="' + c.color + '"/>',
    '<path d="' + gpath({ type: "Sphere" }) + '" fill="none" stroke="' + COLORS.globeRim + '" stroke-width="2"/>',
    "</svg>"
  ].join("\n");
  const out = path.join(ROOT, "maps", c.id + ".svg");
  fs.writeFileSync(out, svg + "\n");
  return { out, bytes: Buffer.byteLength(svg) };
}

const args = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const reviewed = process.argv.includes("--reviewed");
const targets = args.length ? args.map((id) => P.country(id) || (() => { throw new Error("Unknown country id: " + id); })())
  : P.countries.filter((c) => c.lessons > 0);
fs.mkdirSync(path.join(ROOT, "maps"), { recursive: true });
let failed = 0;
targets.forEach((c) => {
  if (DISPUTED.has(c.id) && !reviewed) {
    console.log("skip " + c.id + ": has disputed territory — review how it's drawn, then re-run with --reviewed");
    failed++;
    return;
  }
  const r = build(c);
  console.log("wrote " + path.relative(ROOT, r.out) + " (" + Math.round(r.bytes / 1024) + " KB)");
});
process.exitCode = failed ? 1 : 0;
