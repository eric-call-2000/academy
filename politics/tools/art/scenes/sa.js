/* Saudi Arabia */
module.exports = {
  // Ruins of a mud-brick desert town with crenellated towers on a rocky outcrop above a valley of palm groves.
  "sa-9": (s) => s
    .sky("golden", { sun: [1350, 360], r: 44 })
    .ridge({ y: 520, amp: 160, color: "#9a7a5a", peak: 700, peakW: 500, jag: true, step: 40 })
    .mudFort(700, 400, 0.9, { color: "#c4935e" })
    .city({ y: 470, x0: 400, x1: 1000, h: [30, 70], color: "#b8875a", windows: false, depth: 0.1 })
    .ground(560, "#c9a877")
    .forest({ y: 640, type: "palm", s: 0.9, gap: 50, spread: 120 }),
  // An old mud-brick fortress with square watchtowers by an oasis at sunset, date palms, dunes, a camel caravan.
  "sa-3": (s) => {
    s.sky("golden", { sun: [300, 380], r: 46 }).dunes(470, { color: "#d9a066", depth: 0.4 });
    s.mudFort(900, 600, 1.1);
    s.ground(600, "#c49a6a");
    for (let i = 0; i < 6; i++) { const x = 1240 + i * 46, y = 500; s.add(`<g fill="#5a3e2a"><ellipse cx="${x}" cy="${y - 18}" rx="16" ry="9"/><circle cx="${x - 2}" cy="${y - 28}" r="6"/><rect x="${x + 10}" y="${y - 34}" width="4" height="16"/><circle cx="${x + 14}" cy="${y - 36}" r="4"/><rect x="${x - 10}" y="${y - 10}" width="3" height="12"/><rect x="${x + 6}" y="${y - 10}" width="3" height="12"/></g>`); }
    return s.forest({ y: 860, x0: -40, x1: 500, type: "palm", s: 2, gap: 120 }).forest({ y: 880, x0: 1200, x1: 1640, type: "palm", s: 2.2, gap: 130 });
  },
  // A long line of 1970s cars queued to a small petrol station with old pumps on a grey winter day, bare trees.
  "sa-10": (s) => {
    s.sky("overcast");
    s.forest({ y: 500, type: "bare", s: 1, gap: 60, depth: 0.3 });
    s.ground(500, "#8a8a82");
    s.rect(1100, 380, 360, 140, "#d9d2c2").rect(1080, 360, 400, 30, "#b8322a");
    [1180, 1300].forEach((x) => s.rect(x - 16, 440, 32, 80, "#c9c2b2").rect(x - 10, 450, 20, 24, "#2a2a2a"));
    s.rect(0, 540, 1600, 360, "#6a6866");
    for (let i = 0; i < 10; i++) { const k = 0.5 + i * 0.12; s.vehicle("car", 1040 - i * 110 * (0.6 + i * 0.05), 560 + i * 30, { s: k * 1.3, color: s.r.pick(["#8a6a3a", "#5a6a4a", "#7a3a2a", "#4a5a6a", "#a89a7a"]), dir: 1 }); }
    return s;
  },
  // A vast marble mosque courtyard ringed by arcades and slender minarets at dawn, dark smoke rising at one side.
  "sa-11": (s) => {
    s.sky("dawn");
    s.smoke(1200, 300, { len: 600, dark: true, w: 70, rise: 1.6 });
    for (let i = 0; i < 6; i++) s.minaret(150 + i * 260, 520, 360, { color: "#e8e2d2" });
    s.rect(0, 380, 1600, 140, "#e2dccf");
    for (let i = 0; i < 26; i++) s.add(`<path d="M${10 + i * 62},520 L${10 + i * 62},440 A24,24 0 0 1 ${58 + i * 62},440 L${58 + i * 62},520 Z" fill="#7a7468"/>`);
    s.ground(520, "#f2efe8");
    return s.add('<polygon points="0,900 1600,900 1600,520 0,520" fill="none" stroke="#d9d2c2"/>' + Array.from({ length: 8 }, (_, i) => `<line x1="${-400 + i * 340}" y1="900" x2="${800 + (-400 + i * 340 - 800) * 0.1}" y2="520" stroke="#d9d2c2" stroke-width="2"/>`).join(""));
  },
  // An empty gilded reception hall: two long rows of ornate armchairs facing across carpets, chandeliers, marble.
  "sa-4": (s) => {
    s.mood("interior", { light: "#ffe9bf" });
    s.room3d({ depth: 3.6, wall: "#e6d8b8", side: "#dcc9a2", floor: "#e8e2d6", ceiling: "#d9c49a", windows: { n: 4, side: "both", top: 100, bottom: 560, arched: true }, lights: "chandeliers", carpet: "#8a2a2a" });
    for (let i = 0; i < 7; i++) { const z = 1.3 + i * 0.32; [520, 1080].forEach((X) => { s.chair3d(X, z, { color: "#c9a04a" }); }); }
    return s;
  },
  // A desert construction site at dusk: half-finished mirrored walls, idle cranes, trenches, mountains, the sea.
  "sa-5": (s) => {
    s.sky("dusk", { sun: [1300, 420], r: 30 });
    s.mountains({ y: 480, amp: 200, color: "#7a5a5a", depth: 0.4 });
    s.sea(480, { color: "#6a6a8a" }).rect(0, 470, 900, 10, "#6a6a8a");
    s.ground(500, "#c49a6a");
    s.add('<polygon points="200,500 900,470 900,320 200,340" fill="#a8b8c8"/><polygon points="200,500 900,470 900,320 200,340" fill="url(#none)" stroke="#e8eef4" stroke-width="2"/><polygon points="200,340 900,320 900,300 200,320" fill="#c9d6e0"/>');
    s.towerCrane(1000, 500, 1, { depth: 0.2 }).towerCrane(600, 340, 0.6);
    for (let i = 0; i < 4; i++) s.add(`<path d="M${-40},${600 + i * 70} L1640,${560 + i * 90}" stroke="${i % 2 ? "#8a6a4a" : "#d9c49a"}" stroke-width="${10 + i * 6}"/>`);
    return s;
  },
  // A refinery complex at night: tall flares burning, one section dark with smoke, floodlit tanks, faint contrails.
  "sa-6": (s) => s
    .sky("night", { stars: 50 })
    .add('<path d="M200,100 Q600,180 900,120" stroke="#8a90a0" stroke-width="2" fill="none" opacity="0.5"/>')
    .refinery(500, 620, 1.2, { lit: true })
    .refinery(1150, 620, 0.9, { lit: false, flare: false })
    .smoke(1150, 420, { len: 600, dark: true, w: 80, rise: 1.8, dir: -1 })
    .flare(1450, 420, 1.3)
    .ground(620, "#2a2622"),
  // Fighter jets in tight formation over a white columned mansion with a lawn and a red carpet on the drive.
  "sa-7": (s) => {
    s.sky("day", { top: "#4f86b8", bottom: "#d9e6ee" });
    [[560, 160], [640, 200], [480, 200], [720, 240], [400, 240]].forEach(([x, y]) => s.plane("fighter", x, y, { s: 0.7, trail: 260, color: "#5d6670" }));
    s.portico(800, 600, 1.4, { cols: 6, color: "#f2efe8", w: 360, h: 240 });
    s.rect(160, 420, 380, 180, "#f2efe8").rect(1060, 420, 380, 180, "#f2efe8");
    s.ground(600, "#6f9a52");
    return s.poly([[770, 600], [830, 600], [960, 900], [640, 900]], "#b8322a");
  },
  // A woman in a black abaya from behind at the wheel on a desert highway leading to a city skyline at dusk.
  "sa-12": (s) => {
    s.sky("dusk", { top: "#7a5a8a", bottom: "#f2b0a0" });
    s.city({ y: 470, x0: 500, x1: 1100, style: "towers", h: [80, 240], depth: 0.4, lit: true });
    s.dunes(470, { depth: 0.5, color: "#d9a07a" });
    s.road({ vanish: [800, 470], w: 1400, color: "#3a3a3e" });
    s.rect(0, 0, 1600, 120, "#1e1e22").rect(0, 0, 140, 900, "#1e1e22").rect(1460, 0, 140, 900, "#1e1e22").rect(0, 680, 1600, 220, "#1e1e22");
    s.add('<path d="M360,680 Q360,600 420,560 L520,540 L520,680 Z" fill="#2a2a2e"/><ellipse cx="460" cy="690" rx="140" ry="40" fill="none" stroke="#2a2a2e" stroke-width="18"/>');
    s.add('<path d="M150,900 Q160,720 280,680 Q262,600 300,560 Q340,530 380,560 Q418,600 400,680 Q520,720 530,900 Z" fill="#141216"/>');
    return s;
  },
  // A modern desert skyline at dusk with tall towers, one with a big opening near its top, highways of car lights.
  "sa-8": (s) => {
    s.sky("dusk", { top: "#3a2a5a", bottom: "#d98a6a" });
    s.city({ y: 560, style: "towers", h: [80, 220], depth: 0.35, lit: true });
    s.tower(760, 560, 110, 460, { color: "#5a6a7a", lit: true }).add('<path d="M720,140 Q760,100 800,140 L800,190 L720,190 Z" fill="#d98a6a"/>');
    s.tower(1000, 560, 70, 380, { color: "#6a7a8a", spire: 80 });
    s.ground(560, "#3a3030");
    for (let i = 0; i < 6; i++) s.add(`<path d="M-40,${620 + i * 30} Q800,${590 + i * 12} 1640,${640 + i * 34}" stroke="${i % 2 ? "#ffe2a6" : "#e86a4a"}" stroke-width="3" fill="none" opacity="0.7"/>`);
    return s;
  },
};
