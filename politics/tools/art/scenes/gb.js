/* United Kingdom */
module.exports = {
  // A castle on a steep volcanic rock above an old city of grey tenements and spires, a shaft of sunlight.
  "gb-9": (s) => s
    .sky("storm", { clouds: 6, cloudColor: "#5a5e66" })
    .beam(700, 0, 80, { len: 600, w: 120, color: "#ffe9bf", opacity: 0.2 })
    .poly([[300, 560], [480, 400], [560, 300], [620, 290], [900, 290], [980, 340], [1120, 460], [1300, 560]], "#4f5048")
    .rect(600, 210, 320, 70, "#7a776e").rect(640, 170, 60, 50, "#7a776e").rect(820, 180, 50, 40, "#7a776e")
    .fortWall(590, 930, 290, 40, { color: "#7a776e", merlon: 12 })
    .city({ y: 640, style: "old", h: [140, 260], color: "#7d7a74", depth: 0.15, lit: false })
    .spire(300, 520, 260).spire(1240, 500, 300),
  // White chalk cliffs above a grey-green sea, a ferry sailing toward a misty horizon, gulls.
  "gb-3": (s) => s
    .sky("overcast", { sun: [1100, 260], r: 40, clouds: 4 })
    .sea(520, { color: "#6f8a84", glint: 1100 })
    .poly([[0, 230], [180, 250], [420, 300], [620, 360], [700, 900], [0, 900]], "#ecebe2")
    .poly([[0, 230], [180, 250], [420, 300], [620, 360], [640, 380], [400, 330], [0, 270]], "#6f8a52")
    .add(Array.from({ length: 10 }, (_, i) => `<line x1="${60 + i * 60}" y1="${280 + i * 10}" x2="${80 + i * 58}" y2="900" stroke="#cfcdc2" stroke-width="3"/>`).join(""))
    .ship("ferry", 1180, 560, { s: 0.45, wake: true })
    .birds(900, 320, 7),
  // A colliery winding tower against a heavy sky above terraced houses climbing a valley, chimney smoke.
  "gb-10": (s) => {
    s.sky("storm", { top: "#5a5e62", bottom: "#a3a39c" });
    s.hills({ y: 420, amp: 120, color: "#5a6a4a", depth: 0.4 });
    for (let k = 0; k < 7; k++) { const y = 470 + k * 60, x0 = -40 + k * 30; for (let x = x0; x < 1640; x += 70) s.house(x, y, 68, 40, { color: s.c("#8a5040", 0.35 - k * 0.05), roofColor: "#3e3a3a" }); if (k % 2) for (let x = x0 + 30; x < 1640; x += 520) s.chimney(x, y - 60, 16, { w: 8, smokeLen: 60, depth: 0.3 }); }
    s.add('<g stroke="#2a2a2c" stroke-width="10" fill="none"><path d="M1180,560 L1260,150 L1340,560 M1200,450 L1320,450 M1220,330 L1300,330 M1260,150 L1100,420"/><circle cx="1260" cy="150" r="40" stroke-width="8"/></g>');
    return s;
  },
  // A brick wall topped with steel mesh fencing between two rows of red-brick terraced houses, a gate.
  "gb-11": (s) => {
    s.sky("overcast");
    s.street3d({ vanish: [800, 450], depth: 4, left: 200, right: 1400, hmin: 420, hmax: 520, colors: ["#8a4a3c", "#7a4234", "#94503f"], roofs: "#3e3a3a", road: "#6a6866" });
    s.persp({ vanish: [800, 450], depth: 4 });
    s.quad("front", [-200, 1800, 560, 900, 2.2], "#8a5a48");
    s.quad("front", [-200, 1800, 320, 560, 2.2], "#8a8f92", 'opacity="0.45"');
    for (let X = -200; X < 1800; X += 120) s.quad("front", [X, X + 6, 320, 560, 2.2], "#5a5e62");
    return s.quad("front", [700, 900, 640, 900, 2.2], "#3a3e44");
  },
  // A glossy black Georgian front door, photographers behind a barrier, iron railings, grey morning.
  "gb-4": (s) => {
    s.sky("overcast");
    s.rect(0, 0, 1600, 900, "#3a3634");
    for (let y = 0; y < 640; y += 26) for (let x = (y / 26 % 2) * 30; x < 1600; x += 60) s.rect(x, y, 56, 22, s.r.pick(["#3e3a38", "#36322f", "#43403c"]));
    s.rect(560, 120, 300, 520, "#e6e1d6").rect(590, 160, 240, 480, "#141414").add('<path d="M560,120 A150,80 0 0 1 860,120 Z" fill="#d9d2c2"/><circle cx="710" cy="380" r="14" fill="#c9a24a"/><rect x="600" y="300" width="100" height="160" fill="none" stroke="#2a2a2a" stroke-width="4"/><rect x="720" y="300" width="100" height="160" fill="none" stroke="#2a2a2a" stroke-width="4"/>');
    s.rect(1000, 160, 200, 260, "#cfd5d8").rect(260, 160, 200, 260, "#cfd5d8");
    s.rect(0, 640, 1600, 260, "#6a6866");
    s.add('<g stroke="#1a1a1a" stroke-width="5">' + Array.from({ length: 40 }, (_, i) => `<line x1="${i * 40}" y1="560" x2="${i * 40}" y2="660"/>`).join("") + '<line x1="0" y1="580" x2="1600" y2="580"/></g>');
    s.add('<rect x="0" y="770" width="1600" height="12" fill="#c9c2b2"/>');
    s.crowd({ y: 880, rows: 1, h: 150, gap: 80, colors: ["#2a2c30", "#3a3a40", "#4a4036"] });
    [200, 520, 900, 1260].forEach((x) => s.rect(x - 20, 640, 40, 26, "#1a1a1a"));
    return s;
  },
  // A sports hall at night during a count: rows of trestle tables piled with ballots, counters sorting.
  "gb-5": (s) => {
    s.mood("night", { light: "#ffffff" });
    s.room3d({ depth: 3, wall: "#9aa6a8", side: "#8f9a9c", floor: "#a8865c", ceiling: "#6a7072", lights: "strips", boards: true });
    s.rows3d({ X0: 220, X1: 1380, z0: 1.5, z1: 2.8, rows: 5, color: "#d9d2c2", h: 260, aisle: 160, people: 1, personH: 360, peopleColors: ["#3a3e46", "#5a4a3c", "#4a5a6a", "#6a3a3a"] });
    for (let i = 0; i < 60; i++) { const z = 1.5 + s.r() * 1.3, X = 260 + s.r() * 1080; s.quad("floor", [X, X + 40, 638, z, z + 0.02], "#f4f1ea"); }
    [[200, 2.2], [1420, 2.5], [1460, 2.0]].forEach(([X, z]) => s.figure3d(X, z, { h: 360, color: "#2a2c30" }));
    return s;
  },
  // A red-brick high street on a rainy evening, a campaign office window glowing, wet pavements, hills.
  "gb-6": (s) => {
    s.sky("dusk", { top: "#3a4050", bottom: "#7a7a80" });
    s.hills({ y: 380, amp: 80, color: "#4a5a48", depth: 0.4 });
    s.street3d({ vanish: [800, 420], depth: 4, left: 260, right: 1340, hmin: 420, hmax: 600, colors: ["#7a4234", "#8a4a3c", "#6a3a30"], shops: true, roofs: "#2e2c2c", lit: true, lamps: true, road: "#3a3a3c" });
    s.persp({ vanish: [800, 420], depth: 4 });
    s.quad("wallX", [260, 780, 870, 1.15, 1.6], "#ffd38a", 'opacity="0.9"');
    [[260, 1.25], [260, 1.35], [260, 1.5]].forEach(([X, z]) => { const p = s.pp(X, 860, z); s.person(p[0] - 30 / z, p[1], 160 / z, { color: "#5a3e2e" }); });
    for (let i = 0; i < 14; i++) s.add(`<rect x="${s.r() * 1600}" y="${720 + s.r() * 160}" width="${6 + s.r() * 10}" height="${40 + s.r() * 60}" fill="#ffcf7a" opacity="0.12"/>`);
    return s.rain({ count: 260 });
  },
  // A modern trading floor at dawn, rows of screens with abstract rising lines, a window onto a baroque dome.
  "gb-7": (s) => {
    s.mood("dawn");
    s.rect(0, 0, 1600, 900, "#2e3238");
    s.rect(0, 60, 1600, 480, "#e8c4b4");
    s.city({ y: 540, h: [100, 300], style: "towers", depth: 0.5, lit: false, color: "#9a8a9a" });
    s.rect(600, 320, 260, 220, "#c9bcb0").add('<path d="M620,320 C620,220 680,190 730,188 C780,190 840,220 840,320 Z" fill="#c9bcb0"/><rect x="722" y="150" width="16" height="40" fill="#c9bcb0"/>');
    for (let x = 0; x < 1600; x += 200) s.rect(x, 60, 12, 480, "#2e3238");
    s.rect(0, 540, 1600, 360, "#3a3e46");
    for (let r = 0; r < 3; r++) for (let i = 0; i < 6 - r; i++) { const x = 140 + i * 240 + r * 120, y = 640 + r * 90, w = 150 + r * 40; s.rect(x, y - w * 0.5, w, w * 0.5, "#1e2228"); s.rect(x + 6, y - w * 0.5 + 6, w - 12, w * 0.5 - 12, "#2f4a5a"); s.add(`<polyline points="${Array.from({ length: 8 }, (_, k) => `${x + 10 + k * (w - 20) / 7},${y - 14 - k * (w * 0.5 - 30) / 9 - (k % 2) * 8}`).join(" ")}" stroke="#8fd0a6" stroke-width="2" fill="none"/>`); }
    s.person(700, 900, 200, { color: "#1e2026" }).person(1180, 900, 220, { color: "#24262c" });
    return s;
  },
  // A modern parliament with leaf-shaped roofs and timber trellis at the foot of a green hill with crags.
  "gb-12": (s) => {
    s.sky("day", { clouds: 5 });
    s.ridge({ y: 520, amp: 300, color: "#6f8a52", peak: 1100, peakW: 600, depth: 0.15 });
    s.ridge({ y: 330, amp: 60, color: "#7a7570", x0: 900, x1: 1400, jag: true, step: 30 });
    s.rect(80, 400, 260, 160, "#9a948a").rect(80, 380, 260, 20, "#7a746a").rect(140, 330, 40, 60, "#9a948a");
    s.rect(420, 440, 760, 140, "#cfcac0");
    [[480, 160], [640, 200], [820, 180], [1000, 220]].forEach(([x, w]) => s.add(`<path d="M${x},440 Q${x + w / 2},${360} ${x + w},440 Z" fill="#a8b2b6"/>`));
    for (let i = 0; i < 14; i++) s.add(`<polygon points="${440 + i * 52},470 ${470 + i * 52},470 ${480 + i * 52},560 ${450 + i * 52},560" fill="#4a5a62"/><line x1="${436 + i * 52}" y1="470" x2="${436 + i * 52}" y2="560" stroke="#a8784a" stroke-width="5"/>`);
    return s.ground(580, "#7a8a6a");
  },
  // A gothic parliament with a tall clock tower beside a river at dusk, lights in the water, a red bus on a bridge.
  "gb-8": (s) => {
    s.sky("dusk", { top: "#4a3e6a", bottom: "#d9a0a0" });
    s.rect(280, 340, 900, 160, "#c9a87a");
    for (let i = 0; i < 30; i++) s.add(`<polygon points="${290 + i * 30},340 ${304 + i * 30},300 ${318 + i * 30},340" fill="#c9a87a"/><rect x="${294 + i * 30}" y="${380}" width="10" height="70" fill="${s.r() < 0.5 ? "#ffd38a" : "#8a6a4a"}"/>`);
    s.rect(1150, 120, 90, 380, "#c9a87a").rect(1140, 200, 110, 90, "#d4b384").add('<circle cx="1195" cy="245" r="32" fill="#f4e8c4"/>').poly([[1140, 120], [1250, 120], [1195, 30]], "#5a5a50");
    s.rect(300, 260, 70, 240, "#c9a87a").poly([[290, 260], [380, 260], [335, 200]], "#5a5a50");
    s.sea(500, { color: "#4a4a6a" });
    for (let i = 0; i < 30; i++) s.add(`<rect x="${300 + s.r() * 950}" y="${510 + s.r() * 200}" width="${20 + s.r() * 40}" height="3" fill="#ffd38a" opacity="0.4"/>`);
    s.rect(-20, 660, 1640, 30, "#3e3e4a").add(Array.from({ length: 6 }, (_, i) => `<path d="M${i * 300 - 20},690 A150,90 0 0 1 ${i * 300 + 280},690" stroke="#3e3e4a" stroke-width="14" fill="none"/>`).join(""));
    s.rect(500, 600, 130, 60, "#b8322a").rect(500, 600, 130, 8, "#8a2420").add('<rect x="510" y="612" width="110" height="14" fill="#ffd38a" opacity="0.7"/><rect x="510" y="634" width="110" height="12" fill="#ffd38a" opacity="0.7"/>');
    return s.lamps(100, 1500, 660, 50, { gap: 200 });
  },
};
