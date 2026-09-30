/* ============================================================
   Disputed territory, shared by the locator maps (build-maps.js)
   and the world map (build-world.js), so both draw it the same way.
   Natural Earth draws de facto control; see build-maps.js for the
   rules and the review log.
   ============================================================ */
const d3 = require("d3-geo");

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
/* Features drawn hatched in neutral grey on every map: territories whose
   status is itself the dispute. Palestine here is the West Bank and Gaza;
   238 is the Falkland Islands (Malvinas), British-administered and claimed
   by Argentina. */
const CONTESTED_FEATURES = ["275", "238"];
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
module.exports = { DISPUTED_AREAS, CONTESTED_FEATURES, splitDisputed };
