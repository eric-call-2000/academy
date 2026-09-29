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

   Natural Earth draws de facto control. Where that assigns an area
   to one side of an unresolved dispute as a whole polygon, DISPUTED_AREAS
   splits it out and draws it hatched instead (Crimea, which the data
   gives to Russia). Lines of control that run through a polygon, such
   as Kashmir's, are drawn as the data has them, and the caption says so.

   Reviewed with --reviewed: us, cn, ru, in, ua (2026-09-28); il, with
   the Golan overlay and the West Bank and Gaza hatched as contested on
   every map (2026-09-28); kr, kp, tw, pk and jp, with the southern
   Kurils hatched (2026-09-29); ar, with the Falklands hatched as
   contested, and ve, with the Essequibo claim drawn as the data has it
   (Guyana's) and explained in the caption (2026-09-29).
   ============================================================ */
const fs = require("fs");
const path = require("path");
const d3 = require("d3-geo");
const topojson = require("topojson-client");
const detailed = require("world-atlas/countries-50m.json");
const coarse = require("world-atlas/countries-110m.json");
const { load, ROOT } = require("./load");

const { P } = load({ units: false });
const DISPUTED = new Set(["ua", "ru", "cn", "tw", "in", "pk", "il", "kr", "kp", "ma", "ar", "ve"]);
const W = 1200, H = 750;
/* Whole polygons held by one country but not recognised as its territory.
   `holder` is the ISO code the data assigns it to; `claimant` the country
   most states recognise; `point` any spot inside it. */
const DISPUTED_AREAS = [
  { name: "Crimea", holder: "643", claimant: "804", point: [34.1, 44.95] },
  /* The southern Kurils, held by Russia since 1945, claimed by Japan as its Northern Territories. */
  { name: "Iturup", holder: "643", claimant: "392", point: [147.9, 45.0] },
  { name: "Kunashir", holder: "643", claimant: "392", point: [145.9, 44.1] },
  { name: "Shikotan", holder: "643", claimant: "392", point: [146.75, 43.8] }
];
/* Archipelagos framed on all their major islands (any polygon at least
   this share of the largest), not just the biggest one. Canada's share is
   lower so the frame reaches Ellesmere Island. */
const FIT_ALL = { jp: 0.05, id: 0.05, ca: 0.02 };
/* Areas the data folds into the holder's single polygon, so they can't be
   split out: an outline is drawn hatched on top, clipped to the holder's
   shape. The Golan Heights' eastern edge follows the data's 1974 ceasefire
   line; the western edge traces the pre-1967 line (Jordan River, the east
   shore of the Sea of Galilee, the Yarmouk). */
const DISPUTED_OVERLAYS = [
  { name: "Golan Heights", holder: "376", claimant: "760", outline: [
    [35.628, 33.275], [35.736, 33.332], [35.786, 33.370], [35.840, 33.415], [35.869, 33.433],
    [35.851, 33.370], [35.837, 33.330], [35.837, 33.278], [35.858, 33.250], [35.887, 33.193],
    [35.905, 33.136], [35.869, 33.089], [35.873, 33.039], [35.883, 32.999], [35.912, 32.950],
    [35.858, 32.863], [35.801, 32.782], [35.786, 32.735], [35.736, 32.730], [35.660, 32.700],
    [35.650, 32.700], [35.645, 32.750], [35.650, 32.800], [35.636, 32.870], [35.625, 32.900],
    [35.630, 32.960], [35.640, 33.020], [35.645, 33.100], [35.655, 33.170], [35.662, 33.215],
    [35.655, 33.250], [35.628, 33.275]
  ] }
];
/* Features drawn hatched in neutral grey on every map: territories whose
   status is itself the dispute. Palestine here is the West Bank and Gaza;
   238 is the Falkland Islands (Malvinas), British-administered and claimed
   by Argentina. */
const CONTESTED_FEATURES = ["275", "238"];
const COLORS = { ocean: "#dbe7f0", grat: "#c9d9e6", land: "#f1ede4", border: "#ffffff", globeLand: "#e2ddd1", globeRim: "#9fb3c4" };

/* Pull each disputed polygon out of its holder's geometry, so it can be
   drawn hatched rather than as a plain part of either country. */
function splitDisputed(list) {
  const areas = [];
  DISPUTED_AREAS.forEach((d) => {
    const holder = list.find((f) => f.id === d.holder);
    if (!holder || holder.geometry.type !== "MultiPolygon") return;
    const keep = [], taken = [];
    holder.geometry.coordinates.forEach((coords) => {
      const poly = { type: "Feature", geometry: { type: "Polygon", coordinates: coords } };
      (d3.geoContains(poly, d.point) ? taken : keep).push(coords);
    });
    if (!taken.length) return;
    holder.geometry = { type: "MultiPolygon", coordinates: keep };
    areas.push(Object.assign({ type: "Feature", geometry: { type: "MultiPolygon", coordinates: taken } }, { dispute: d }));
  });
  return areas;
}
const features = topojson.feature(detailed, detailed.objects.countries).features;
const disputed = splitDisputed(features);
const land = topojson.feature(detailed, detailed.objects.land);
const borders = topojson.mesh(detailed, detailed.objects.countries, (a, b) => a !== b);
const coarseLand = topojson.feature(coarse, coarse.objects.land);
const coarseFeatures = topojson.feature(coarse, coarse.objects.countries).features;
const coarseDisputed = splitDisputed(coarseFeatures);

/* The largest single polygon of a (multi)polygon feature: the mainland,
   so the frame isn't stretched across an ocean to fit far islands. */
function mainland(f, share) {
  if (f.geometry.type === "Polygon") return f;
  if (share) {
    const polys = f.geometry.coordinates.map((coords) => ({ coords, a: d3.geoArea({ type: "Feature", geometry: { type: "Polygon", coordinates: coords } }) }));
    const max = Math.max.apply(null, polys.map((x) => x.a));
    return { type: "Feature", geometry: { type: "MultiPolygon", coordinates: polys.filter((x) => x.a >= max * share).map((x) => x.coords) } };
  }
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
  const main = mainland(f, FIT_ALL[c.id]);
  const [lon, lat] = d3.geoCentroid(main);

  const proj = d3.geoAzimuthalEqualArea().rotate([-lon, -lat])
    .fitExtent([[170, 120], [W - 170, H - 120]], main)
    .clipExtent([[0, 0], [W, H]]);
  const geo = d3.geoPath(proj).digits(0);   // whole pixels: a third smaller, no visible change

  /* Globe inset, top right. */
  const R = 82, gx = W - 22 - R, gy = 22 + R;
  const globe = d3.geoOrthographic().rotate([-lon, -Math.max(-60, Math.min(60, lat))]).scale(R).translate([gx, gy]).clipAngle(90);
  const gpath = d3.geoPath(globe).digits(1);
  const cf = coarseFeatures.find((x) => x.id === c.iso) || f;

  const stroke = darker(c.color, 0.7);
  /* Hatched: in this country's colour if it's a party to the dispute,
     neutral grey otherwise. */
  const involved = (a) => a.dispute.holder === c.iso || a.dispute.claimant === c.iso;
  const hatch = (a) => "url(#hatch-" + (involved(a) ? "c" : "n") + ")";
  const defs = '<defs>' +
    '<pattern id="hatch-c" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="9" height="9" fill="' + COLORS.land + '"/><rect width="4" height="9" fill="' + c.color + '"/></pattern>' +
    '<pattern id="hatch-n" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="9" height="9" fill="' + COLORS.land + '"/><rect width="3" height="9" fill="#b9b3a6"/></pattern>' +
    '</defs>';
  const contested = features.filter((x) => CONTESTED_FEATURES.indexOf(x.id) > -1 && x.id !== c.iso && geo(x))
    .map((x) => '<path d="' + geo(x) + '" fill="url(#hatch-n)" stroke="#9d978a" stroke-width="1.2" stroke-dasharray="5 3"/>').join("\n");
  /* Off-screen shapes project to null; leave them out of the file. */
  const overlays = DISPUTED_OVERLAYS.filter((o) => geo({ type: "Feature", geometry: { type: "MultiPoint", coordinates: o.outline } })).map((o, i) => {
    const holder = features.find((x) => x.id === o.holder);
    let shape = { type: "Feature", geometry: { type: "Polygon", coordinates: [o.outline] } };
    /* d3 reads a ring wound the wrong way as "the whole globe minus this". */
    if (d3.geoArea(shape) > 2 * Math.PI) shape = { type: "Feature", geometry: { type: "Polygon", coordinates: [o.outline.slice().reverse()] } };
    const inv = o.holder === c.iso || o.claimant === c.iso;
    return '<clipPath id="clip-o' + i + '"><path d="' + geo(holder) + '"/></clipPath>' +
      '<path d="' + geo(shape) + '" clip-path="url(#clip-o' + i + ')" fill="url(#hatch-' + (inv ? "c" : "n") + ')" stroke="' + (inv ? stroke : "#9d978a") + '" stroke-width="1.4" stroke-dasharray="5 3"/>';
  }).join("\n");
  const disputedPaths = disputed.filter((a) => geo(a)).map((a) => '<path d="' + geo(a) + '" fill="' + hatch(a) + '" stroke="' + (involved(a) ? stroke : "#9d978a") + '" stroke-width="1.4" stroke-dasharray="5 3"/>').join("\n");
  const globeDisputed = coarseDisputed.map((a) => '<path d="' + gpath(a) + '" fill="' + (involved(a) ? c.color : COLORS.globeLand) + '" opacity="0.6"/>').join("\n");
  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + " " + H + '" role="img" aria-labelledby="t">',
    '<title id="t">Locator map: ' + P.esc(c.name) + "</title>",
    defs,
    '<rect width="' + W + '" height="' + H + '" fill="' + COLORS.ocean + '"/>',
    '<path d="' + geo(d3.geoGraticule10()) + '" fill="none" stroke="' + COLORS.grat + '" stroke-width="1"/>',
    '<path d="' + geo(land) + '" fill="' + COLORS.land + '"/>',
    '<path d="' + geo(f) + '" fill="' + c.color + '"/>',
    '<path d="' + geo(borders) + '" fill="none" stroke="' + COLORS.border + '" stroke-width="1.6" stroke-linejoin="round"/>',
    '<path d="' + geo(f) + '" fill="none" stroke="' + stroke + '" stroke-width="1.6" stroke-linejoin="round"/>',
    disputedPaths,
    contested,
    overlays,
    /* globe */
    '<circle cx="' + gx + '" cy="' + gy + '" r="' + (R + 6) + '" fill="#ffffff" opacity="0.9"/>',
    '<path d="' + gpath({ type: "Sphere" }) + '" fill="' + COLORS.ocean + '"/>',
    '<path d="' + gpath(coarseLand) + '" fill="' + COLORS.globeLand + '"/>',
    '<path d="' + gpath(cf) + '" fill="' + c.color + '"/>',
    globeDisputed,
    '<path d="' + gpath({ type: "Sphere" }) + '" fill="none" stroke="' + COLORS.globeRim + '" stroke-width="2"/>',
    "</svg>"
  ].filter(Boolean).join("\n");
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
