/* Spain */
module.exports = {
  // A red-walled hilltop palace and fortress with square towers above white houses and cypresses, snowy peaks, sunset.
  "es-9": (s) => {
    s.sky("golden", { clouds: 2 });
    s.mountains({ y: 360, amp: 150, snow: 0.4, depth: 0.6, color: "#8a7f88" });
    s.ridge({ y: 520, amp: 160, color: "#7a6a48", peak: 800, peakW: 520 });
    s.poly([[340, 430], [1260, 430], [1500, 640], [100, 640]], "#7a6a48");
    s.fortWall(420, 1180, 420, 110, { color: "#b0563e" });
    [460, 640, 820, 1000, 1150].forEach((x, i) => s.rect(x - 34, 300 - (i % 2) * 50, 68, 120 + (i % 2) * 50, "#a04a36"));
    s.rect(560, 330, 260, 90, "#c06a4e");
    s.forest({ y: 520, type: "cypress", s: 0.9, gap: 70, x0: 300, x1: 1300 });
    s.city({ y: 700, h: [40, 80], style: "mideast", depth: 0.1, color: "#ece6d8", domeColor: "#c9b28a" });
    return s.ground(700, "#b09a72");
  },
  // A semicircular parliament chamber with red velvet benches seen from the gallery, a carved rostrum, figures in aisles.
  "es-3": (s) => {
    s.sky("interior");
    s.room({ wall: "#6a4a3a", floorY: 300, floor: "#5a3a30" });
    s.hemicycle({ x: 800, y: 330, rows: 7, r0: 200, step: 80, color: "#9a2a2a", people: 0.15 });
    s.rect(700, 250, 200, 90, "#7a5434").rect(720, 230, 160, 24, "#8a6444");
    s.chandelier(800, 60, 1.6);
    [[560, 560], [1040, 560], [480, 700], [1120, 700], [800, 820]].forEach(([x, y]) => s.person(x, y, 70, { color: "#2a2420" }));
    return s;
  },
  // A low white and ochre palace with a red-tiled roof through tall iron gates, umbrella pines, bright sunshine.
  "es-4": (s) => {
    s.sky("day", { clouds: 2 });
    s.ground(560, "#a9a37a");
    s.building(380, 560, 840, 190, { color: "#ece2cc", cell: 30, lit: false });
    s.poly([[360, 370], [1240, 370], [1160, 320], [440, 320]], "#b0563e");
    ["#4f6a48", "#4a6444"].forEach((c, i) => { [200 + i * 1200, 330 + i * 950].forEach((x) => s.add(`<ellipse cx="${x}" cy="${330}" rx="140" ry="50" fill="${c}"/><rect x="${x - 8}" y="330" width="16" height="230" fill="#5a4a3c"/>`)); });
    s.rect(0, 640, 1600, 260, "#c9bfa6");
    return s.fence(0, 1600, 880, 240, { color: "#1f2224", gap: 30 });
  },
  // Rows of solar panels and white wind turbines on a dry golden plain, a hilltop town with a church tower, blue sky.
  "es-5": (s) => {
    s.sky("day", { clouds: 3 });
    s.turbines(100, 1500, 480, { h: 220, gap: 240, depth: 0.4 });
    s.ridge({ y: 500, amp: 110, color: "#a08a5c", peak: 1250, peakW: 260, depth: 0.25 });
    s.city({ x0: 1120, x1: 1380, y: 410, h: [24, 50], style: "old", color: "#ece6d8", depth: 0.25 });
    s.spire(1250, 380, 110, { color: "#d9cdb6", depth: 0.25 });
    s.ground(500, "#c9a877");
    return s.solar(0, 1600, 560, 900, { rows: 9 });
  },
  // A huge crowd from above and behind marching down a wide avenue between ornate buildings with domes, blank banners.
  "es-6": (s) => {
    s.sky("afternoon");
    s.city({ x0: -20, x1: 560, y: 560, h: [240, 340], style: "old", color: "#d9c9ac" });
    s.city({ x0: 1040, x1: 1620, y: 560, h: [240, 340], style: "old", color: "#d9c9ac" });
    s.dome(300, 220, 60, { color: "#4a5a5a" }).dome(1320, 220, 60, { color: "#4a5a5a" });
    s.road({ vanish: [800, 420], w: 1700, color: "#8a857a", line: false });
    for (let r = 0; r < 10; r++) s.crowd({ x0: 560 - r * 70, x1: 1040 + r * 70, y: 460 + r * 46, rows: 1, h: 28 + r * 8, gap: 10 + r * 2, banners: r % 3 === 1 ? 2 : 0 });
    return s;
  },
  // A naval base on a sunny bay: grey warships at a long pier, cranes and hangars, a lighthouse, a white town behind.
  "es-7": (s) => {
    s.sky("desert", { clouds: 1 });
    s.city({ x0: 900, x1: 1620, y: 420, h: [30, 60], style: "mideast", color: "#ece6d8", depth: 0.4 });
    s.sea(420, { glint: 400 });
    s.rect(300, 520, 1300, 40, "#8a8a84");
    s.ship("warship", 700, 520, { s: 1.4 }).ship("warship", 1150, 520, { s: 1.2 });
    s.crane(1450, 520, 0.8, { color: "#7a7a74" });
    s.rect(1300, 470, 140, 50, "#9a9a94");
    s.rect(140, 300, 24, 120, "#ece6d8").rect(132, 290, 40, 14, "#b0563e");
    return s.rect(60, 420, 200, 30, "#b8aa8e");
  },
  // A dry hillside with olive trees and a field dug open with small white markers and string grids, a hot pale sky.
  "es-10": (s) => {
    s.sky("haze");
    s.hills({ y: 420, amp: 80, color: "#a8906c", depth: 0.5 });
    s.ground(440, "#b89a6e");
    s.forest({ y: 440, type: "oak", s: 0.6, gap: 90, color: "#8a9470", depth: 0.3 });
    s.rect(300, 600, 1000, 220, "#8a6a4a");
    for (let i = 0; i < 6; i++) s.add(`<line x1="${300 + i * 200}" y1="600" x2="${300 + i * 200}" y2="820" stroke="#ece6d8" stroke-width="2"/>`);
    s.add('<line x1="300" y1="710" x2="1300" y2="710" stroke="#ece6d8" stroke-width="2"/>');
    for (let i = 0; i < 18; i++) s.rect(330 + s.r() * 940, 620 + s.r() * 180, 8, 22, "#f4f0e6");
    return s.person(1400, 560, 60, { color: "#4a4038" }).person(1460, 570, 56, { color: "#5a4a40" });
  },
  // A narrow Mediterranean street at dawn, balconies and plane trees, people queuing at a school, police vans at the end.
  "es-11": (s) => {
    s.sky("dawn");
    s.building(-20, 900, 560, 860, { color: "#c9b29a", cell: 40 });
    s.building(1060, 900, 560, 860, { color: "#bfa890", cell: 40 });
    s.road({ vanish: [800, 520], w: 900, color: "#7a7470", line: false });
    s.vehicle("truck", 740, 600, { s: 0.5, color: "#3a4a6a" }).vehicle("truck", 860, 600, { s: 0.5, color: "#3a4a6a", dir: -1 });
    s.tree("oak", 520, 760, { s: 2.6, color: "#6a7a52" });
    s.rect(1060, 520, 180, 380, "#7a5a44");
    return s.crowd({ x0: 760, x1: 1060, y: 820, rows: 3, h: 120, gap: 36, rowGap: 30 });
  },
  // A winding road over a green mountain pass at dawn, an empty border post with the barrier raised, a car heading south.
  "es-12": (s) => {
    s.sky("dawn", { clouds: 2 });
    s.mountains({ y: 420, amp: 200, color: "#6f7f6a", depth: 0.5 });
    s.hills({ y: 540, amp: 90, color: "#5f7a52", depth: 0.2 });
    s.fog(560, { h: 80, opacity: 0.6 });
    s.ground(600, "#5f7a52");
    s.add('<path d="M800,900 C700,800 1000,720 820,640 C700,590 900,560 860,540" stroke="#55585c" stroke-width="60" fill="none"/>');
    s.rect(960, 720, 120, 70, "#d9d2c2").rect(950, 700, 140, 22, "#8a5a44");
    s.add('<line x1="900" y1="780" x2="960" y2="640" stroke="#c94a3a" stroke-width="8"/>');
    return s.vehicle("car", 780, 820, { s: 1.1, color: "#ece6d8" });
  },
  // A wide boulevard at dusk lined with ornate buildings, a tall corner building topped by a dome, lights and traffic.
  "es-8": (s) => {
    s.sky("dusk");
    s.city({ x0: -20, x1: 600, y: 640, h: [260, 380], style: "old", color: "#cbb89c", lit: true });
    s.city({ x0: 1000, x1: 1620, y: 640, h: [260, 380], style: "old", color: "#cbb89c", lit: true });
    s.building(560, 640, 200, 470, { color: "#d9c9ac", lit: true, cell: 18 });
    s.dome(660, 170, 70, { color: "#3e4a4a" });
    s.road({ vanish: [880, 480], w: 1600, color: "#3a3a40" });
    for (let i = 0; i < 16; i++) { const t = i / 16, x = 880 + (s.r() - 0.5) * 900 * t, y = 490 + 400 * t; s.glow(x, y, 20 + 30 * t, i % 2 ? "#ffd38a" : "#ff8a6a", 0.6); }
    return s.lamps(100, 1500, 700, 180, { gap: 280 });
  }
};
