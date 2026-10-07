/* Pakistan */
const platform = (s, o) => {
  s.persp({ vanish: [1100, 380], depth: 6 });
  s.quad("floor", [-1000, 3000, 900, 1, 40], "#9a8a72");
  s.quad("floor", [-1000, 700, 860, 1, 40], "#b8a688");
  for (let z = 1.2; z < 12; z *= 1.25) { const a = s.pp(150, 860, z), b = s.pp(150, 120, z); s.add(`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#4a3f36" stroke-width="${10 / z}"/>`); }
  s.quad("floor", [-1000, 700, 120, 1, 40], "#6a5a4a");
  s.train(1180, 1700, 640, { color: "#3a302a", track: false, s: 1.6, people: true }).smoke(1260, 520, { len: 400, dir: -1, w: 50 });
  for (let i = 0; i < 60; i++) { const z = 1.7 + Math.pow(s.r(), 1.5) * 6, X = -200 + s.r() * 880; s.figure3d(X, z, { h: 340, floorY: 860, color: s.r.pick(["#5a4a3c", "#e8e0cf", "#3a3432", "#8a6a4a"]), bundle: s.r() < 0.35 ? "#a8906c" : null, robe: s.r() < 0.4 ? s.r.pick(["#e8e0cf", "#c9a07a", "#7a8a9a"]) : null }); }
};
module.exports = {
  // A crowded 1947 Punjab platform: a steam train packed even on its roof, families with bundles, golden dust.
  "pk-9": (s) => { s.sky("golden", { top: "#c9a878" }); platform(s); return s.fog(500, { h: 200, color: "#e8c890", opacity: 0.3 }); },
  // A 1947 platform in sepia: families with bundles and trunks, a train packed with people, dust and smoke.
  "pk-3": (s) => { s.sky("haze", { top: "#a89878", bottom: "#d9c8a8" }); platform(s); return s.add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.18"/>'); },
  // A river delta at dusk: country boats, refugees walking a muddy embankment with bundles, monsoon clouds.
  "pk-10": (s) => {
    s.sky("storm", { top: "#4a5060", bottom: "#a89a8a", clouds: 6, cloudColor: "#5a5e6a" });
    s.sea(480, { color: "#6a7478" });
    s.ship("boat", 400, 560, { s: 1, hull: "#5a4030", cabin: "#8a7a5a" }).ship("dhow", 1100, 540, { s: 0.7, sail: "#c9b89a" });
    s.add('<path d="M-40,760 Q800,600 1640,660 L1640,720 Q800,660 -40,820 Z" fill="#6a5a44"/>');
    for (let i = 0; i < 24; i++) { const t = i / 24, x = 1560 - t * 1500, y = 650 + t * 120; s.person(x, y - 6, 40 + t * 70, { color: s.r.pick(["#3a3030", "#4a4040", "#5a4a3c"]), robe: s.r() < 0.4 ? "#c9b89a" : null, bundle: s.r() < 0.5 ? "#a8906c" : null }); }
    return s.rect(0, 800, 1600, 100, "#4a5a3a");
  },
  // A dry mountain pass in the 1980s: pack mules and men in woollen shawls walking up a dusty track, late light.
  "pk-11": (s) => {
    s.sky("golden", { top: "#8a9ab0" });
    s.mountains({ y: 460, amp: 260, color: "#8a6a4a", depth: 0.4 });
    s.mountains({ y: 640, amp: 300, color: "#7a5a3e", depth: 0.1, peak: 1200, peakW: 400 });
    s.add('<path d="M200,900 Q600,700 900,560 T1300,420" stroke="#b8986a" stroke-width="60" fill="none"/>');
    for (let i = 0; i < 12; i++) { const t = i / 12, x = 300 + t * 900, y = 840 - t * 380, k = 1 - t * 0.7; if (i % 2) s.add(`<g fill="#4a3a2e"><ellipse cx="${x}" cy="${y - 30 * k}" rx="${30 * k}" ry="${14 * k}"/><rect x="${x - 24 * k}" y="${y - 22 * k}" width="${4 * k}" height="${22 * k}"/><rect x="${x + 20 * k}" y="${y - 22 * k}" width="${4 * k}" height="${22 * k}"/><ellipse cx="${x + 34 * k}" cy="${y - 42 * k}" rx="${10 * k}" ry="${7 * k}"/><rect x="${x - 20 * k}" y="${y - 58 * k}" width="${36 * k}" height="${18 * k}" fill="#8a7a5a"/></g>`); else s.person(x, y, 120 * k, { robe: "#a8987a", color: "#3a3030" }); }
    return s;
  },
  // A night rally from behind: blank portrait placards, plain green and red flags, floodlights, dust, a far stage.
  "pk-4": (s) => {
    s.sky("night", { stars: 0 });
    s.glow(800, 420, 500, "#fff0c4", 0.35).rect(600, 400, 400, 60, "#2a2626").rect(620, 380, 360, 20, "#fff0c4");
    [200, 1400].forEach((x) => { s.add(`<line x1="${x}" y1="460" x2="${x}" y2="200" stroke="#2a2a2a" stroke-width="6"/>`); s.glow(x, 200, 140, "#fff4dc", 0.6); });
    s.ground(460, "#3a3430").fog(480, { h: 120, color: "#c9b89a", opacity: 0.3 });
    s.crowd({ y: 520, rows: 9, h: 34, gap: 9, rowGap: 34, colors: ["#2a2420", "#3a3030", "#e0d4bc", "#1e1a18"] });
    for (let i = 0; i < 14; i++) { const x = s.r() * 1600, y = 520 + s.r() * 260; s.rect(x - 20, y - 120, 40, 50, "#e8e2d2"); s.add(`<line x1="${x}" y1="${y - 70}" x2="${x}" y2="${y - 20}" stroke="#2a2a2a" stroke-width="2"/>`); }
    for (let i = 0; i < 16; i++) s.flagpole(s.r() * 1600, 540 + s.r() * 240, 120, { color: s.r.pick(["#2f7a4a", "#b8322a"]), stroke: 2 });
    return s;
  },
  // Stone and sandbag border posts on a snowy ridge at dawn, wire along the crest, an empty flagpole, pink peaks.
  "pk-5": (s) => {
    s.sky("dawn", { top: "#8a8ab0", bottom: "#f2c8c0" });
    s.mountains({ y: 420, amp: 280, color: "#c9b8c8", depth: 0.3, snow: 0.2 });
    s.ridge({ y: 700, amp: 200, color: "snow", peak: 700, peakW: 700 });
    s.rect(560, 470, 160, 70, "#8a8478").sandbags(540, 760, 540, 3, { color: "#a8987a" });
    s.add('<line x1="800" y1="540" x2="800" y2="380" stroke="#3a3a3a" stroke-width="4"/>');
    return s.add('<g fill="none" stroke="#3a3a3a" stroke-width="1.5">' + Array.from({ length: 40 }, (_, i) => `<circle cx="${100 + i * 36}" cy="${600 - Math.max(0, 200 - Math.abs(100 + i * 36 - 700) * 0.3) + 60}" r="14"/>`).join("") + "</g>");
  },
  // A long negotiating table in an empty hotel ballroom: chandeliers, water glasses, blank name cards, heavy curtains.
  "pk-6": (s) => {
    s.mood("interior", { light: "#ffe9bf" });
    s.room3d({ depth: 3.2, wall: "#c9b48e", side: "#8a3a3a", floor: "#6a4a3a", ceiling: "#d9ccb0", lights: "chandeliers", carpet: "#7a2a2a" });
    s.table3d(640, 960, 1.3, 3.0, { cloth: "#efe9dc", count: 7, cups: true });
    return s;
  },
  // A dry mountain pass with a fortified stone checkpoint, an armoured vehicle by a barrier, decorated trucks waiting.
  "pk-7": (s) => {
    s.sky("haze", { top: "#c4b090" });
    s.mountains({ y: 520, amp: 300, color: "#9a7a5a", depth: 0.3 });
    s.ground(560, "#b89a72");
    s.fortWall(900, 1300, 600, 120, { color: "#a8987a" });
    s.barrier(860, 1100, 680).vehicle("apc", 1300, 700, { s: 1.4, dir: -1 });
    for (let i = 0; i < 5; i++) { const x = 760 - i * 170, y = 700 + i * 30, k = 1 + i * 0.12; s.vehicle("truck", x, y, { s: k, color: s.r.pick(["#c94a2a", "#2f7a8a", "#d9a02c", "#7a3a8a"]) }); s.add(`<rect x="${x - 70 * k}" y="${y - 70 * k}" width="${34 * k}" height="${12 * k}" fill="#d9b23c"/>`); }
    return s;
  },
  // A Kashmir valley lake: ornate wooden houseboats, a shikara with a lone boatman, snow peaks, chinar trees, mist.
  "pk-12": (s) => {
    s.sky("morning", { top: "#a8b8c8" });
    s.mountains({ y: 420, amp: 280, color: "#8a92a2", depth: 0.4, snow: 0.45 });
    s.forest({ y: 470, type: "autumn", s: 1, gap: 40, color: "#c9562c", depth: 0.25 });
    s.sea(480, { color: "#8aa0b0" }).fog(500, { h: 80 });
    [[300, 560], [700, 560], [1150, 570]].forEach(([x, y]) => { s.rect(x - 130, y - 60, 260, 50, "#6a4a30").rect(x - 140, y - 70, 280, 12, "#4a3020").poly([[x - 140, y - 70], [x + 140, y - 70], [x + 110, y - 100], [x - 110, y - 100]], "#5a3a28"); for (let k = 0; k < 8; k++) s.rect(x - 120 + k * 30, y - 52, 14, 22, "#c9a06a"); });
    s.add('<path d="M560,760 Q800,800 1040,740 L1000,770 Q800,790 600,775 Z" fill="#6a4a30"/>');
    return s.person(820, 772, 70, { color: "#2a2424" }).add('<line x1="840" y1="720" x2="900" y2="800" stroke="#4a3020" stroke-width="4"/>');
  },
  // A busy seaport at sunset: container cranes and a big ship, a harbour of colourful wooden fishing boats, a skyline.
  "pk-8": (s) => {
    s.sky("golden", { sun: [1300, 380], r: 44 });
    s.city({ y: 470, h: [40, 160], depth: 0.5 });
    s.crane(300, 500, 0.8, { depth: 0.3 }).crane(450, 500, 0.8, { depth: 0.3 }).crane(600, 500, 0.8, { depth: 0.3 });
    s.ship("container", 1000, 520, { s: 0.7, dir: -1 });
    s.sea(500, { glint: 1300 });
    for (let i = 0; i < 10; i++) s.ship("boat", 80 + i * 160, 700 + (i % 3) * 50, { s: 1.2, hull: s.r.pick(["#3f7aa8", "#c94a3c", "#e0b23c", "#4f8a5a", "#8a4a9a"]), dir: i % 2 ? -1 : 1 });
    return s;
  },
};
