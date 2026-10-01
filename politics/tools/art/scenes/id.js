/* Indonesia */
module.exports = {
  // The veranda of a modest colonial-era house in 1945, tropical trees, a small crowd in white and khaki listening.
  "id-9": (s) => {
    s.sky("morning", { clouds: 3 });
    s.forest({ y: 520, type: "oak", s: 1.6, gap: 60, color: "#4f7a4a", depth: 0.2 }).tree("palm", 1400, 520, { s: 1.8 });
    s.rect(380, 320, 840, 220, "#efe9dc").poly([[340, 320], [1260, 320], [1140, 240], [460, 240]], "#8a5a44");
    for (let i = 0; i < 8; i++) s.rect(400 + i * 112, 340, 18, 200, "#f8f6f0");
    s.rect(460, 380, 680, 160, "#c9c0ae", 'opacity="0.5"');
    s.add('<line x1="1300" y1="560" x2="1300" y2="260" stroke="#a8906c" stroke-width="6"/>');
    s.ground(560, "#8a8a6a");
    return s.crowd({ y: 680, rows: 4, h: 70, gap: 26, rowGap: 46, colors: ["#f2efe8", "#e2d9c8", "#a8987a", "#3a3432"] });
  },
  // Thousands of students on the steps and roof of a parliament with a green curved dome, 1998 afternoon.
  "id-3": (s) => {
    s.sky("afternoon", { top: "#8aa8b8" });
    s.add('<path d="M380,520 Q380,260 600,260 L600,520 Z M1220,520 Q1220,260 1000,260 L1000,520 Z" fill="#3f8a6a"/><path d="M600,260 L1000,260 L1000,520 L600,520 Z" fill="#3f8a6a"/>');
    s.add('<path d="M380,520 Q380,260 600,260 L1000,260 Q1220,260 1220,520" stroke="#e8e2d2" stroke-width="10" fill="none"/>');
    s.rect(300, 520, 1000, 60, "#e8e2d2");
    for (let i = 0; i < 400; i++) { const t = s.r(), x = 400 + t * 800, y = 280 + Math.abs(t - 0.5) * 300 * (t < 0.22 || t > 0.78 ? 1 : 0) + s.r() * 10; s.add(`<circle cx="${x.toFixed(1)}" cy="${(y - 6).toFixed(1)}" r="4" fill="${s.r.pick(["#3a3432", "#e8e2d2", "#5a6a8a", "#c9763c"])}"/>`); }
    s.ground(580, "#a8a090");
    s.crowd({ y: 640, rows: 6, h: 44, gap: 13, rowGap: 40, colors: ["#3a3432", "#e8e2d2", "#5a6a8a", "#c9763c", "#4a4040"] });
    return s.add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.1"/>');
  },
  // A quiet brown river in rural Java at dawn, rice paddies and palms, an empty weathered wooden footbridge, mist.
  "id-10": (s) => s
    .sky("dawn")
    .forest({ y: 470, type: "palm", s: 0.8, gap: 50, depth: 0.4 })
    .ground(470, "#7a9a5a").field(480, 600, { color: "#8aaa5a", rows: 30 })
    .river({ from: [800, 480], to: [800, 900], w0: 60, w1: 900, bend: 140, color: "#8a7458" })
    .fog(560, { h: 100, opacity: 0.6 })
    .add('<path d="M200,640 L1400,620" stroke="#6a5038" stroke-width="12"/>' + Array.from({ length: 13 }, (_, i) => `<line x1="${220 + i * 96}" y1="${640 - i * 1.6}" x2="${220 + i * 96}" y2="${720}" stroke="#5a4030" stroke-width="7"/>`).join("") + '<path d="M200,600 L1400,580" stroke="#6a5038" stroke-width="4"/>'),
  // A long queue in simple 1990s clothes outside a whitewashed school on a dry hillside in Timor, eucalyptus.
  "id-11": (s) => {
    s.sky("morning");
    s.hills({ y: 460, amp: 120, color: "#9a8a5a", depth: 0.4 });
    s.ground(520, "#b8a070");
    s.rect(900, 380, 460, 160, "#f2efe8").poly([[880, 380], [1380, 380], [1330, 330], [930, 330]], "#8a6a4a");
    for (let i = 0; i < 4; i++) s.rect(940 + i * 110, 420, 50, 60, "#4f7a8a");
    [200, 500, 1480].forEach((x) => s.tree("birch", x, 560, { s: 1.6, color: "#d9d2c2" }));
    for (let i = 0; i < 16; i++) s.person(880 - i * 50, 560 + i * 18, 70 + i * 6, { color: s.r.pick(["#3a3432", "#4a4040", "#5a4a3c"]), robe: s.r() < 0.5 ? s.r.pick(["#c9b89a", "#7a8a9a", "#b8322a"]) : null });
    return s;
  },
  // A white neoclassical palace with tall columns and a wide lawn in a tropical city, palms, tropical clouds.
  "id-4": (s) => s
    .sky("tropical", { clouds: 6, cloudY: [60, 340] })
    .portico(800, 560, 1.4, { cols: 8, w: 520, h: 240, color: "#f8f6f0" })
    .rect(200, 420, 400, 140, "#f8f6f0").rect(1000, 420, 400, 140, "#f8f6f0")
    .ground(560, "#6f9a4a")
    .forest({ y: 600, type: "palm", s: 1.6, gap: 300, x0: 60, x1: 1600 }),
  // A huge rally in a stadium at night: confetti, stage lights, big screens of cheerful faceless cartoons, dancing crowd.
  "id-5": (s) => {
    s.sky("night", { stars: 0 });
    s.add('<path d="M-40,400 Q800,200 1640,400 L1640,520 L-40,520 Z" fill="#2a2a3a"/>');
    s.rect(500, 300, 600, 220, "#1e1e28");
    [[260, 300], [1140, 300]].forEach(([x, y]) => { s.rect(x, y, 200, 130, "#5fb0e8"); s.add(`<circle cx="${x + 100}" cy="${y + 70}" r="40" fill="#e8c42c"/><path d="M${x + 80},${y + 80} Q${x + 100},${y + 96} ${x + 120},${y + 80}" stroke="#3a3a3a" stroke-width="4" fill="none"/>`); });
    for (let i = 0; i < 6; i++) s.beam(560 + i * 100, 300, -70 - i * 8, { len: 500, w: 40, color: s.r.pick(["#e86aa8", "#5fd0e8", "#e8c42c"]), opacity: 0.18 });
    s.rect(0, 520, 1600, 380, "#1e1e26");
    s.crowd({ y: 580, rows: 8, h: 50, gap: 13, rowGap: 40, walk: true, colors: ["#1e1e26", "#2a2a34", "#3a3040"] });
    for (let i = 0; i < 200; i++) s.rect(s.r() * 1600, s.r() * 800, 6, 10, s.r.pick(["#e86aa8", "#5fd0e8", "#e8c42c", "#f2efe8"]), `transform="rotate(${s.r() * 90})"`);
    return s;
  },
  // Schoolchildren in red and white uniforms at long tables in a simple school hall, metal lunch trays, ceiling fans.
  "id-6": (s) => {
    s.mood("afternoon", { light: "#ffe9c4" });
    s.room3d({ depth: 2.6, wall: "#e2d6bc", side: "#d4c8ae", floor: "#a8907a", ceiling: "#efe9dc", windows: { n: 3, side: "left", top: 120, bottom: 420 } });
    for (let i = 0; i < 3; i++) { const p = s.pp(800, 0, 1.3 + i * 0.5); s.add(`<line x1="${p[0]}" y1="${p[1]}" x2="${p[0]}" y2="${p[1] + 60 / (1 + i * 0.5)}" stroke="#4a4a4a" stroke-width="3"/><ellipse cx="${p[0]}" cy="${p[1] + 60 / (1 + i * 0.5)}" rx="${120 / (1 + i * 0.5)}" ry="${10 / (1 + i * 0.5)}" fill="#6a6a6a"/>`); }
    for (let r = 3; r >= 0; r--) { const z = 1.4 + r * 0.32; s.box3d(260, 1340, 660, 700, z, z + 0.12, "#b8865a"); for (let X = 320; X < 1300; X += 120) { const p = s.pp(X, 660, z + 0.06); s.rect(p[0] - 30 / z, p[1] - 6 / z, 60 / z, 12 / z, "#c4c8cc"); s.figure3d(X, z - 0.06, { h: 260, floorY: 900, color: "#f2efe8" }); const q = s.pp(X, 900, z - 0.06); s.rect(q[0] - 24 / z, q[1] - 120 / z, 48 / z, 120 / z, "#b8322a"); } }
    return s;
  },
  // A crowd of motorbike taxi drivers in green jackets and helmets at a city intersection at dusk, from above, smoke.
  "id-7": (s) => {
    s.sky("dusk", { top: "#6a5a7a" });
    s.city({ y: 360, h: [80, 220], depth: 0.4, lit: true });
    s.smoke(1300, 320, { len: 400, dark: true, w: 60, rise: 1.4 });
    s.rect(0, 360, 1600, 540, "#4a4a4c");
    s.add('<rect x="600" y="360" width="400" height="540" fill="#545456"/>' + Array.from({ length: 10 }, (_, i) => `<rect x="${620 + i * 38}" y="420" width="20" height="60" fill="#d9d2bd" opacity="0.6"/>`).join(""));
    for (let i = 0; i < 500; i++) { const x = s.r() * 1600, y = 440 + Math.pow(s.r(), 0.8) * 460, k = 0.6 + (y - 440) / 400; s.add(`<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${(9 * k).toFixed(1)}" ry="${(12 * k).toFixed(1)}" fill="#3f8a3a"/><circle cx="${x.toFixed(1)}" cy="${(y - 10 * k).toFixed(1)}" r="${(6 * k).toFixed(1)}" fill="${s.r.pick(["#2f6a2a", "#e8e2d2", "#2a2a2a"])}"/>`); }
    return s;
  },
  // Lush Papuan highlands with valley mist, a round thatched honai hut, sweet potato gardens, one walker far away.
  "id-12": (s) => {
    s.sky("morning", { top: "#8aa8b8" });
    s.mountains({ y: 400, amp: 260, color: "jungle", depth: 0.4, jag: false }).fog(420, { h: 100, opacity: 0.8 });
    s.hills({ y: 560, amp: 200, color: "#3f6a3a", depth: 0.2 }).fog(560, { h: 60 });
    s.hills({ y: 760, amp: 160, color: "#5a7a3a", peak: 500, peakW: 500 });
    for (let i = 0; i < 8; i++) s.add(`<path d="M${200 + i * 50},${660 + i * 8} q30,-10 60,0" stroke="#3a5a2a" stroke-width="6" fill="none"/>`);
    s.add('<rect x="420" y="580" width="140" height="70" fill="#6a5040"/><path d="M400,590 Q490,470 580,590 Z" fill="#a8905a"/>');
    s.add('<path d="M700,900 Q900,700 1300,560" stroke="#a8906c" stroke-width="20" fill="none"/>');
    return s.person(1180, 612, 34, { color: "#2a2424" });
  },
  // An industrial smelter on a tropical coast: tall chimneys with grey plumes over green hills, a port with ore ships.
  "id-8": (s) => {
    s.sky("tropical");
    s.hills({ y: 460, amp: 200, color: "jungle", depth: 0.3 });
    s.factory(500, 560, 600, 120, { chimneys: [80, 220, 380, 520], chimH: 220, dark: true });
    s.ground(560, "#6a6a62");
    s.sea(600, { color: "#3fa0a6" });
    return s.ship("bulk", 400, 680, { s: 0.9 }).ship("bulk", 1200, 720, { s: 1, dir: -1 }).rect(0, 590, 1600, 14, "#8a8682");
  },
};
