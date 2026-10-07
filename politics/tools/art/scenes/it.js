/* Italy */
module.exports = {
  // A long line of 19th-century volunteers in red shirts marching through olive groves toward a hilltop town.
  "it-9": (s) => {
    s.sky("golden", { sun: [1200, 380], r: 46 });
    s.hills({ y: 480, amp: 160, color: "#a89a6a", peak: 1100, peakW: 400, depth: 0.35 });
    s.city({ y: 330, x0: 1000, x1: 1220, h: [30, 70], style: "old", depth: 0.4, lit: false });
    s.ground(520, "#b8a070");
    s.add('<path d="M-40,900 Q600,620 1080,520" stroke="#d9c49a" stroke-width="80" fill="none"/>');
    s.forest({ y: 600, x0: -40, x1: 1640, type: "oak", s: 0.6, gap: 70, color: "#7a8a5a", spread: 200 });
    for (let i = 0; i < 40; i++) { const t = i / 40, x = 1000 - t * 950, y = 540 + t * t * 320; s.person(x + s.r() * 20, y, 20 + t * 90, { color: "#3a3030", coat: true, walk: true }); s.add(`<rect x="${x - (6 + t * 22)}" y="${y - (15 + t * 68)}" width="${12 + t * 44}" height="${8 + t * 30}" fill="#b8322a"/>`); }
    return s;
  },
  // A Roman piazza at dusk: a baroque church facade, an obelisk, a crowd before a small lit stage, scooters.
  "it-3": (s) => {
    s.sky("dusk", { top: "#4a4a7a", bottom: "#e0a07a" });
    s.house(-20, 600, 400, 320, { color: "#c9764a", roofColor: "#8a4a34" }).house(1240, 600, 400, 300, { color: "#d98a5a", roofColor: "#8a4a34" });
    s.portico(800, 600, 1.2, { cols: 6, color: "#e2d6bf", w: 420, h: 300 });
    s.column(800, 640, 380, { obelisk: true, w: 34, color: "#d9cdb6" });
    s.rect(560, 560, 480, 60, "#3a3030").glow(800, 560, 300, "#ffe2a6", 0.5);
    s.ground(620, "#a8988a");
    s.crowd({ y: 680, rows: 5, h: 54, gap: 18, rowGap: 40, colors: ["#3a3432", "#5a4a5a", "#3f5a6a", "#7a5a44"] });
    [[120, 860], [220, 870], [1380, 860], [1480, 870]].forEach(([x, y]) => s.add(`<g><circle cx="${x - 30}" cy="${y - 14}" r="14" fill="#222"/><circle cx="${x + 30}" cy="${y - 14}" r="14" fill="#222"/><path d="M${x - 40},${y - 24} Q${x - 10},${y - 60} ${x + 30},${y - 34} L${x + 34},${y - 70}" stroke="#8a2a2a" stroke-width="16" fill="none"/></g>`));
    return s;
  },
  // A stark white travertine building of many rows of identical arches, deep blue sky, long shadows, empty square.
  "it-10": (s) => {
    s.sky("day", { top: "#2f5f9a", bottom: "#a8c4dc" });
    s.rect(400, 140, 800, 500, "#f2ede2");
    for (let r = 0; r < 6; r++) for (let c = 0; c < 9; c++) { const x = 430 + c * 86, y = 170 + r * 76; s.add(`<path d="M${x},${y + 66} L${x},${y + 26} A24,24 0 0 1 ${x + 48},${y + 26} L${x + 48},${y + 66} Z" fill="#6a6a72"/>`); }
    s.ground(640, "#d9d2c2");
    return s.poly([[400, 640], [1200, 640], [1500, 900], [700, 900]], "#b8b0a0", 'opacity="0.6"');
  },
  // A motorway through dry golden Sicilian hills near the sea, a memorial of two tall red columns, flowers.
  "it-11": (s) => s
    .sky("afternoon")
    .sea(420, { color: "#5f8fb0" })
    .hills({ y: 520, amp: 160, color: "#c9a85a", depth: 0.3 })
    .hills({ y: 640, amp: 120, color: "#b8984a", depth: 0.1 })
    .add('<path d="M-40,760 Q800,600 1640,700" stroke="#6a6866" stroke-width="70" fill="none"/><path d="M-40,760 Q800,600 1640,700" stroke="#d9d2bd" stroke-width="3" stroke-dasharray="30 30" fill="none"/>')
    .rect(1080, 420, 34, 300, "#a8322a").rect(1160, 400, 34, 320, "#a8322a")
    .add(Array.from({ length: 16 }, (_, i) => `<circle cx="${1060 + i * 10}" cy="${722 + (i % 3) * 4}" r="8" fill="${["#e8e2d2", "#c94a6a", "#d9b23c"][i % 3]}"/>`).join("")),
  // An ochre Roman palazzo on a square with an ancient carved column, golden hour, a guard at a tall door, a tram.
  "it-4": (s) => {
    s.sky("golden", { sun: [200, 260], r: 40 });
    s.building(500, 640, 1000, 420, { color: "#d9a05a", cell: 60, lit: false, roof: "flatdark" });
    s.rect(940, 480, 120, 160, "#5a3a28");
    s.column(300, 700, 520, { w: 50, color: "#e2d6bf", statue: "#9a8a6a" });
    s.add(Array.from({ length: 14 }, (_, i) => `<path d="M275,${640 - i * 34} L325,${630 - i * 34}" stroke="#c9b892" stroke-width="5"/>`).join(""));
    s.ground(640, "#b8a68a");
    s.person(1000, 650, 70, { color: "#1e2230", helmet: true });
    s.rect(1100, 690, 400, 90, "#d9b23c").rect(1100, 690, 400, 10, "#8a6a2a");
    for (let i = 0; i < 6; i++) s.rect(1120 + i * 62, 706, 44, 34, "#ffe9bf");
    return s.person(700, 760, 90, { walk: true }).person(780, 770, 86, { color: "#5a3e2e" });
  },
  // The monumental white steps and columns of a palace of justice, lawyers in black robes climbing, rooftop statues.
  "it-5": (s) => {
    s.sky("overcast");
    s.portico(800, 560, 1.9, { cols: 10, color: "#ece6d8", w: 620, h: 360 });
    [300, 600, 1000, 1300].forEach((x) => s.person(x, 104, 50, { color: "#cfc9bc", robe: "#cfc9bc" }));
    for (let i = 0; i < 9; i++) s.rect(-20, 560 + i * 38, 1640, 38, i % 2 ? "#e2ddd0" : "#d4cfc2");
    [[700, 730, 90], [760, 700, 84], [960, 770, 100]].forEach(([x, y, h]) => s.person(x, y, h, { robe: "#1a1a1e", color: "#1a1a1e" }));
    return s;
  },
  // A southern hill town at dawn: stone houses, a bell tower, a young person wheeling a suitcase to a bus stop.
  "it-6": (s) => {
    s.sky("dawn");
    s.hills({ y: 520, amp: 200, color: "#8a7a5a", depth: 0.3 });
    s.street3d({ vanish: [800, 360], depth: 4, left: 380, right: 1220, hmin: 380, hmax: 520, colors: ["#c9b08a", "#b8a07a", "#d4bc94"], roofs: "#9a5a44", road: "#8a8070", lit: false });
    s.rect(780, 120, 50, 200, "#b8a07a").poly([[775, 120], [835, 120], [805, 70]], "#8a5a44");
    s.add('<path d="M380,300 Q800,360 1220,300" stroke="#4a4a4a" stroke-width="2" fill="none"/>' + Array.from({ length: 10 }, (_, i) => `<rect x="${430 + i * 75}" y="${318 + Math.sin(i / 3) * 10}" width="30" height="40" fill="${["#e8e2d2", "#c94a4a", "#4a6a9a"][i % 3]}"/>`).join(""));
    s.person(820, 760, 100, { color: "#3a3e46", walk: true });
    return s.rect(850, 724, 36, 40, "#4a2a2a").rect(1000, 480, 10, 120, "#3a3a3a").rect(980, 470, 50, 30, "#d9b23c");
  },
  // An ornate chamber with curved dark benches in a semicircle, a voting board of blank lights, a skylight.
  "it-7": (s) => {
    s.mood("interior");
    s.rect(0, 0, 1600, 900, "#6a4a36");
    s.add('<ellipse cx="800" cy="0" rx="700" ry="200" fill="#e8dcb8" opacity="0.8"/>');
    s.rect(300, 180, 1000, 220, "#2a1e18");
    for (let r = 0; r < 6; r++) for (let c = 0; c < 30; c++) s.add(`<circle cx="${330 + c * 32}" cy="${210 + r * 32}" r="9" fill="${(r * 7 + c * 3) % 5 < 3 ? "#5fcf7a" : "#d9433a"}" opacity="0.85"/>`);
    s.rect(0, 420, 1600, 480, "#3a2a22");
    return s.hemicycle({ x: 800, y: 440, r0: 160, rows: 8, step: 80, tilt: 0.55, color: "#8a5a3a", people: 0.25, peopleColors: ["#1a1a1e", "#2a2a30"] });
  },
  // A small island harbour at dawn: colourful fishing boats, a grey coast guard vessel, a lighthouse on pale rocks.
  "it-12": (s) => s
    .sky("dawn", { sun: [300, 380], r: 40 })
    .ridge({ y: 520, amp: 90, color: "#d9cdb6", x0: 1000, jag: true })
    .rect(1300, 280, 50, 160, "#f2efe8").rect(1290, 260, 70, 24, "#4a4a4a").rect(1300, 300, 50, 20, "#b8322a")
    .sea(520, { color: "#4fa0a6", glint: 300 })
    .ship("patrol", 900, 600, { s: 0.9, color: "#7a8288" })
    .ship("boat", 300, 680, { s: 1.4, hull: "#3f7aa8" })
    .ship("boat", 520, 720, { s: 1.4, hull: "#c94a3c", dir: -1 })
    .ship("boat", 760, 770, { s: 1.5, hull: "#e0b23c" })
    .ship("boat", 1100, 760, { s: 1.4, hull: "#4f8a5a", dir: -1 }),
  // A small harbour at sunset: colourful boats, a white lighthouse on the breakwater, a coast guard ship far out.
  "it-8": (s) => s
    .sky("golden", { sun: [900, 420], r: 50 })
    .sea(470, { glint: 900 })
    .ship("patrol", 1200, 480, { s: 0.3, depth: 0.4 })
    .rect(-20, 560, 760, 30, "#9a948a")
    .rect(640, 400, 44, 160, "#f2efe8").rect(632, 380, 60, 22, "#4a4a4a")
    .glow(662, 390, 60, "#fff0c4", 0.7)
    .ship("boat", 260, 700, { s: 1.4, hull: "#3f7aa8" })
    .ship("boat", 520, 760, { s: 1.5, hull: "#c94a3c", dir: -1 })
    .ship("boat", 900, 720, { s: 1.4, hull: "#e0b23c" })
    .ship("boat", 1240, 780, { s: 1.6, hull: "#4f8a5a", dir: -1 }),
};
