/* United States */
module.exports = {
  // Hundreds of marchers crossing a steel-arch bridge at sunrise, plain banners.
  "us-3": (s) => {
    s.sky("dawn", { sun: [1250, 300], r: 56, clouds: 4 })
      .ridge({ y: 470, amp: 30, color: "#6a7a5c", depth: 0.65 })
      .sea(470, { glint: 1250, color: "#6d7f8a" })
      .forest({ y: 470, x0: 1300, x1: 1640, type: "oak", s: 0.5, depth: 0.5 });
    // the bridge: one big steel arch over the deck, seen from the near end
    const deck = 640;
    let arch = "";
    for (let i = 0; i <= 40; i++) { const t = i / 40, x = 100 + 1400 * t, y = deck - 330 * 4 * t * (1 - t); arch += (i ? " L" : "M") + x.toFixed(1) + "," + y.toFixed(1); }
    s.add(`<path d="${arch}" stroke="#4b4f55" stroke-width="22" fill="none"/>`);
    for (let x = 160; x < 1460; x += 52) { const t = (x - 100) / 1400; s.add(`<line x1="${x}" y1="${deck}" x2="${x}" y2="${(deck - 330 * 4 * t * (1 - t)).toFixed(1)}" stroke="#4b4f55" stroke-width="5"/>`); }
    s.rect(0, deck, 1600, 26, "#3f4246").rect(0, deck + 26, 1600, 260, "#5d5f5f");
    s.crowd({ y: deck + 40, rows: 6, h: 50, gap: 13, rowGap: 34, banners: 3, walk: true,
      colors: ["#2c2f38", "#3b3a3f", "#4a4036", "#363d4f", "#2a2a2a"] });
    return s;
  },
  // A Georgian assembly room: arched windows, panelling, green baize tables, empty chairs, papers.
  "us-9": (s) => {
    s.mood("afternoon", { light: "#fff1cf" });
    s.room3d({ depth: 2.6, wall: "#c9bfa8", side: "#bfb49b", floor: "#7a5a40", ceiling: "#d8d0bd", windows: { n: 3, side: "both", top: 170, bottom: 600, arched: true }, wainscot: true, boards: true, backWindows: [[620, 980, 160, 600]] });
    s.table3d(260, 640, 1.25, 2.2, { cloth: "#3f6a4c", count: 4, papers: true });
    s.table3d(960, 1340, 1.25, 2.2, { cloth: "#3f6a4c", count: 4, papers: true });
    return s;
  },
  // A quiet battlefield at dawn: split-rail fence, stone wall, mist, one cannon on a ridge.
  "us-10": (s) => s
    .sky("dawn", { sun: [1180, 360], r: 44, clouds: 3 })
    .hills({ y: 470, amp: 60, color: "#7f8f6a", depth: 0.6 })
    .fog(480, { h: 80, opacity: 0.7 })
    .hills({ y: 560, amp: 90, color: "#728a5c", depth: 0.35 })
    .forest({ y: 470, x0: 100, x1: 600, type: "oak", s: 0.45, depth: 0.55 })
    .cannon(980, 492, 1.3, { depth: 0.3 })
    .fog(600, { h: 70, opacity: 0.6 })
    .hills({ y: 700, amp: 60, color: "#6f8a56", depth: 0.1 })
    .add('<path d="M-20,760 L1620,690" stroke="#8a8478" stroke-width="22"/>')
    .add('<g stroke="#6a5844" stroke-width="7">' + Array.from({ length: 14 }, (_, i) => { const x = 40 + i * 120, y = 800 - i * 5; return `<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 70}"/><line x1="${x}" y1="${y - 55}" x2="${x + 125}" y2="${y - 60}"/><line x1="${x}" y1="${y - 25}" x2="${x + 125}" y2="${y - 30}"/>`; }).join("") + "</g>"),
  // A long column of 1960s marchers crossing a steel-arch bridge under an overcast sky.
  "us-11": (s) => s
    .sky("overcast", { clouds: 5 })
    .ridge({ y: 500, amp: 40, color: "#6c7468", depth: 0.6 })
    .sea(500, { color: "#7a868a" })
    .archBridge(160, 1440, 600, 300, { color: "#53585e" })
    .rect(0, 620, 1600, 280, "#6a6b69")
    .crowd({ y: 660, rows: 6, h: 48, gap: 14, rowGap: 34, walk: true, colors: ["#2c2f38", "#3b3a3f", "#4a4036", "#363d4f"] }),
  // Aerial view at dusk of a ceremonial avenue from a domed capitol to a columned mansion among trees.
  "us-4": (s) => {
    s.sky("dusk", { sun: [1400, 300], r: 30 });
    s.persp({ vanish: [800, 250], depth: 6 });
    s.ground(250, "#4f5a48");
    s.quad("floor", [620, 980, 1500, 1, 30], "#6c6a62");
    s.quad("floor", [660, 940, 1499, 1, 30], "#7f7c72");
    for (let z = 1.2; z < 8; z *= 1.18) { [380, 1220].forEach((X) => { const p = s.pp(X, 1500, z); s.tree("oak", p[0], p[1], { s: 0.9 / z * 1.6, depth: (z - 1) / 10 }); }); }
    for (let z = 1.4; z < 8; z *= 1.25) { [600, 1000].forEach((X) => { const p = s.pp(X, 1500, z); s.glow(p[0], p[1] - 10 / z, 40 / z, "#ffcf7a", 0.8); }); }
    for (let i = 0; i < 18; i++) { const z = 1.2 + s.r() * 6, X = s.r() < 0.5 ? 700 : 900, a = s.pp(X, 1499, z), b = s.pp(X, 1499, z + 0.2); s.add(`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${X < 800 ? "#ffe2a6" : "#e86a4a"}" stroke-width="${3 / z}" opacity="0.7"/>`); }
    s.forest({ y: 260, x0: 640, x1: 960, type: "oak", s: 0.25, depth: 0.6, gap: 10 });
    s.capitol(800, 268, 0.22, { depth: 0.45 });
    s.portico(800, 860, 0.9, { cols: 6, color: "#ece8df" });
    s.forest({ y: 860, x0: -40, x1: 520, type: "oak", s: 1.6, gap: 70 }).forest({ y: 860, x0: 1080, x1: 1640, type: "oak", s: 1.6, gap: 70 });
    return s;
  },
  // Idle cranes and containers at a port at dawn, a domed neoclassical courthouse across the water.
  "us-5": (s) => s
    .sky("winter", { sun: [300, 380], r: 40 })
    .sea(520, { glint: 300 })
    .city({ y: 520, x0: 900, x1: 1640, h: [40, 120], depth: 0.6 })
    .portico(1050, 524, 0.55, { dome: true, depth: 0.35 })
    .rect(0, 640, 1600, 260, "#6f6d68")
    .crane(160, 640, 1.2, { color: "#8a5a44" })
    .crane(420, 640, 1.2, { color: "#8a5a44" })
    .containers(0, 820, 22, 5, { w: 70, h: 30, colors: ["#7a4a3c", "#4b5a6b", "#8a7a52", "#5d6b5a", "#8a8f94"] }),
  // A carrier and two escorts at dusk on a calm tropical sea, three helicopters, a dark coastline.
  "us-6": (s) => s
    .sky("dusk", { sun: [1200, 470], r: 40, clouds: 3 })
    .ridge({ y: 500, amp: 40, color: "#2f3a3e", depth: 0.3, x0: 900 })
    .sea(500, { glint: 1200 })
    .ship("frigate", 1280, 540, { s: 0.45, depth: 0.3, dir: -1 })
    .ship("carrier", 700, 640, { s: 1.35, dir: -1 })
    .ship("frigate", 240, 560, { s: 0.55, depth: 0.25, dir: -1 })
    .plane("heli", 520, 260, { s: 0.9, dir: -1 })
    .plane("heli", 760, 220, { s: 0.7, dir: -1 })
    .plane("heli", 1000, 300, { s: 0.6, dir: -1 }),
  // Voters queuing outside a brick school gymnasium on a cold November morning, orange trees.
  "us-7": (s) => s
    .sky("morning", { clouds: 2 })
    .ground(560, "#8a8a7a")
    .building(260, 600, 1060, 300, { color: "#8c5240", windows: false })
    .rect(260, 290, 1060, 20, "#6e3e32")
    .add(Array.from({ length: 6 }, (_, i) => `<rect x="${340 + i * 160}" y="370" width="90" height="110" fill="#c9cfd2"/><line x1="${385 + i * 160}" y1="370" x2="${385 + i * 160}" y2="480" stroke="#6e3e32" stroke-width="5"/>`).join(""))
    .rect(740, 470, 120, 130, "#4a3a32")
    .tree("autumn", 140, 620, { s: 2.2 })
    .tree("autumn", 1440, 610, { s: 2.4 })
    .rect(0, 600, 1600, 300, "#9a9890")
    .add('<g><rect x="1060" y="560" width="8" height="90" fill="#5a4a3c"/><polygon points="1010,540 1110,540 1140,565 1110,590 1010,590" fill="#e8dcc0"/></g>')
    .crowd({ y: 700, x0: 820, x1: 1600, rows: 1, h: 120, gap: 46, colors: ["#3b3a3f", "#4a4036", "#363d4f", "#5a3a34"] })
    .crowd({ y: 780, x0: 1000, x1: 1600, rows: 1, h: 150, gap: 60, colors: ["#3b3a3f", "#4a4036", "#363d4f"] }),
  // A red-brick immigration building with four copper-domed towers on a harbour island, a skyline beyond.
  "us-12": (s) => {
    s.sky("morning", { sun: [1300, 220], r: 40, clouds: 3 })
      .city({ y: 430, x0: 900, x1: 1640, style: "towers", h: [60, 200], depth: 0.65 })
      .sea(430, { glint: 1300 });
    s.ground(560, "#6f8a5a").rect(0, 560, 1600, 20, "#8a8478");
    s.rect(380, 340, 840, 220, "#9a4e3a");
    s.rect(380, 340, 840, 30, "#d9cfbd");
    for (let i = 0; i < 3; i++) s.add(`<path d="M${640 + i * 110},560 L${640 + i * 110},430 A45,45 0 0 1 ${730 + i * 110},430 L${730 + i * 110},560 Z" fill="#cfd5d6"/>`);
    for (let i = 0; i < 8; i++) s.rect(410 + i * 30 + (i > 3 ? 560 : 0), 400, 16, 80, "#4a3a32");
    [440, 560, 1040, 1160].forEach((x) => { s.rect(x - 24, 240, 48, 320, "#9a4e3a"); s.rect(x - 24, 240, 48, 18, "#d9cfbd"); s.onion(x, 240, 30, { color: "#6f9a8a" }); });
    s.sea(600, { lines: 40 });
    return s;
  },
  // A white capitol dome at dusk across a long reflecting pool, storm clouds breaking to gold, bare trees.
  "us-8": (s) => s
    .sky("storm", { clouds: 6, cloudY: [40, 260], bottom: "#e0b47c" })
    .glow(800, 380, 600, "#ffd59a", 0.35)
    .forest({ y: 470, x0: -40, x1: 520, type: "bare", s: 0.9, gap: 40 })
    .forest({ y: 470, x0: 1080, x1: 1640, type: "bare", s: 0.9, gap: 40 })
    .capitol(800, 470, 0.75)
    .ground(470, "#6a6e62")
    .poly([[600, 520], [1000, 520], [1500, 900], [100, 900]], "#8a8f8f")
    .add('<g opacity="0.3" transform="translate(0,1040) scale(1,-1)"><path d="M725,470 C725,395 770,380 800,378 C830,380 875,395 875,470 Z" fill="#ece8df"/></g>')
    .rect(600, 518, 400, 4, "#d9d2c2"),
};
