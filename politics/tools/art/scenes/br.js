/* Brazil */
module.exports = {
  // Early-19th-century horsemen in uniform on a grassy riverbank, the lead rider raising his hat, tropical trees.
  "br-9": (s) => {
    s.sky("afternoon", { clouds: 4 });
    s.hills({ y: 460, amp: 120, color: "#6f8a52", depth: 0.4 });
    s.forest({ y: 480, type: "palm", s: 1, gap: 90, depth: 0.2 });
    s.ground(500, "#7a9a5a").add('<path d="M-40,700 Q600,640 1640,720" stroke="#6a8aa0" stroke-width="40" fill="none"/>');
    for (let i = 0; i < 6; i++) { const x = 400 + i * 160, y = 640 - (i === 2 ? 20 : 0), k = 1; s.add(`<g fill="#4a3022"><ellipse cx="${x}" cy="${y - 40}" rx="44" ry="20"/>${[-32, -16, 16, 32].map((d) => `<rect x="${x + d}" y="${y - 30}" width="6" height="34"/>`).join("")}<rect x="${x + 34}" y="${y - 80}" width="14" height="40" transform="rotate(20 ${x + 40} ${y - 60})"/></g>`); s.person(x, y - 50, 60, { color: "#2a3a5a" }); if (i === 2) s.add(`<line x1="${x + 6}" y1="${y - 96}" x2="${x + 20}" y2="${y - 140}" stroke="#2a3a5a" stroke-width="6"/><ellipse cx="${x + 22}" cy="${y - 146}" rx="16" ry="7" fill="#1a1a1a"/>`); }
    return s;
  },
  // A modernist government complex on a plain: twin slender towers between an upturned bowl and a dome, a reflecting pool.
  "br-3": (s) => {
    s.sky("day", { top: "#3f7ab8", bottom: "#d0e0ec", clouds: 5 });
    s.ground(520, "#8a9a6a");
    s.rect(200, 480, 1200, 40, "#e8e6e0");
    s.add('<path d="M300,480 Q400,380 560,380 L560,400 Q420,400 330,480 Z" fill="#f2f2ee"/><path d="M260,380 L640,380 Q600,480 450,480 Q300,480 260,380 Z" fill="#f2f2ee"/><path d="M1000,480 A160,110 0 0 1 1320,480 Z" fill="#f2f2ee"/>');
    s.rect(720, 160, 60, 320, "#d9dcd8").rect(820, 160, 60, 320, "#d9dcd8").rect(720, 240, 160, 16, "#d9dcd8");
    return s.rect(100, 560, 1400, 80, "#8ab0d0").add('<g opacity="0.3" transform="translate(0,1120) scale(1,-1)"><rect x="720" y="400" width="60" height="80" fill="#d9dcd8"/><rect x="820" y="400" width="60" height="80" fill="#d9dcd8"/></g>');
  },
  // Salvador's colonial centre: pastel baroque houses on steep cobbled streets climbing to a church, a few walkers.
  "br-10": (s) => {
    s.sky("afternoon");
    s.rect(640, 160, 320, 220, "#f2efe8").rect(620, 100, 80, 280, "#f2efe8").rect(900, 100, 80, 280, "#f2efe8").dome(660, 100, 40, { color: "#d9c49a" }).dome(940, 100, 40, { color: "#d9c49a" });
    for (let k = 0; k < 4; k++) { const y = 420 + k * 120; [0, 1].forEach((side) => { for (let i = 0; i < 3; i++) { const x = side ? 1000 + i * 200 - k * 60 : 400 - i * 200 + k * 60; s.house(x - 90, y, 180, 120, { color: s.r.pick(["#e8a0a0", "#a0c4e0", "#e8d080", "#a8d0a0", "#e0b0d0"]), roofColor: "#a8544a" }); } }); }
    s.add('<polygon points="560,400 1040,400 1400,900 200,900" fill="#9a948a"/>' + Array.from({ length: 20 }, (_, i) => `<line x1="${560 - i * 18}" y1="${400 + i * 25}" x2="${1040 + i * 18}" y2="${400 + i * 25}" stroke="#8a847a" stroke-width="2"/>`).join(""));
    return s.person(760, 700, 90, { walk: true }).person(880, 620, 70, { color: "#5a3a3a" });
  },
  // A huge 1980s crowd filling a São Paulo avenue lined with modernist buildings, plain yellow banners and balloons.
  "br-11": (s) => {
    s.sky("dusk");
    s.street3d({ vanish: [800, 420], depth: 5, left: 160, right: 1440, hmin: 600, hmax: 900, colors: ["#9a948a", "#8a847a"], road: "#5a5650", lit: true });
    s.persp({ vanish: [800, 420], depth: 5 });
    for (let i = 0; i < 700; i++) { const z = 1.3 + Math.pow(s.r(), 1.4) * 8, X = 200 + s.r() * 1200, p = s.pp(X, 900, z); s.add(`<circle cx="${p[0].toFixed(1)}" cy="${(p[1] - 170 / z).toFixed(1)}" r="${(24 / z).toFixed(1)}" fill="${s.r.pick(["#2a2a2e", "#3a3a40", "#5a4a3c", "#e8e2d2"])}"/>`); }
    for (let i = 0; i < 30; i++) { const z = 1.5 + s.r() * 5, X = 250 + s.r() * 1100, p = s.pp(X, 400, z); s.add(`<ellipse cx="${p[0]}" cy="${p[1]}" rx="${40 / z}" ry="${50 / z}" fill="#e8c42c"/>`); }
    for (let i = 0; i < 6; i++) { const z = 1.6 + i * 0.6, a = s.pp(300 + i * 160, 560, z); s.rect(a[0], a[1], 400 / z, 90 / z, "#e8c42c"); }
    return s;
  },
  // A night rally from behind on a wide avenue, half waving plain red flags, half plain green-and-yellow, stage smoke.
  "br-4": (s) => {
    s.sky("night", { stars: 0 });
    s.city({ y: 420, h: [100, 260], depth: 0.4, lit: true });
    s.glow(800, 420, 400, "#fff0c4", 0.4).smoke(800, 420, { len: 300, rise: 1.5, w: 60, color: "#a8a4a0" });
    s.ground(420, "#2a2626");
    s.crowd({ y: 470, rows: 10, h: 34, gap: 9, rowGap: 42, colors: ["#1e1a18", "#2a2420", "#3a3030"] });
    for (let i = 0; i < 40; i++) { const x = s.r() * 1600, y = 470 + s.r() * 400, left = x < 800; s.flagpole(x, y, 90 + (y - 470) * 0.3, left ? { color: "#c4322a", stroke: 2 } : { color: s.r() < 0.5 ? "#2f8a4a" : "#e8c42c", stroke: 2 }); }
    return s;
  },
  // A modernist courtroom: a long curved wooden bench, five empty black leather chairs, a wooden crucifix, tall windows.
  "br-5": (s) => {
    s.mood("afternoon", { light: "#fff2d0" });
    s.room3d({ depth: 2.4, wall: "#e8e2d4", side: "#ddd6c6", floor: "#b8a07a", ceiling: "#f2efe8", windows: { n: 4, side: "both", top: 60, bottom: 700 } });
    s.add('<rect x="790" y="250" width="20" height="90" fill="#6a4a30"/><rect x="766" y="276" width="68" height="16" fill="#6a4a30"/>');
    for (let i = 0; i < 5; i++) { const x = 560 + i * 120, y = 520 + Math.abs(i - 2) * 12; s.rect(x - 34, y - 110, 68, 110, "#1a1a1e").rect(x - 30, y - 104, 60, 6, "#2a2a30"); }
    return s.add('<path d="M440,700 Q800,580 1160,700 L1160,760 Q800,640 440,760 Z" fill="#8a5a3a"/><path d="M440,700 Q800,580 1160,700" stroke="#a8784a" stroke-width="10" fill="none"/>');
  },
  // Rolling green hills of coffee rows, burlap sacks by a red dirt road, a small farmhouse, late-afternoon light.
  "br-6": (s) => {
    s.sky("golden");
    s.hills({ y: 460, amp: 120, color: "#5f8a4a", depth: 0.35 });
    s.house(1100, 470, 140, 70, { color: "#f2efe8", roofColor: "#a8544a", depth: 0.25 });
    s.hills({ y: 640, amp: 160, color: "#4f7a3a", depth: 0.1 });
    for (let k = 0; k < 12; k++) s.add(`<path d="M-40,${520 + k * 34} Q800,${480 + k * 30} 1640,${540 + k * 34}" stroke="#2f5a2a" stroke-width="12" stroke-dasharray="20 10" fill="none"/>`);
    s.add('<path d="M500,900 Q700,700 1000,640" stroke="#b8603a" stroke-width="90" fill="none"/>');
    for (let i = 0; i < 6; i++) s.add(`<ellipse cx="${330 + (i % 3) * 60}" cy="${800 - Math.floor(i / 3) * 40}" rx="34" ry="28" fill="#b8986a"/>`);
    return s;
  },
  // A simple electronic voting machine with a large keypad and blank screen behind a grey cardboard privacy screen.
  "br-7": (s) => {
    s.mood("day", { light: "#ffffff" });
    s.room3d({ depth: 2.2, wall: "#e2e6e0", side: "#d4d8d2", floor: "#a8a49c", ceiling: "#f2f2ee", windows: { n: 3, side: "left", top: 100, bottom: 500 } });
    s.rect(300, 560, 1000, 30, "#8a6a4a").rect(330, 590, 20, 310, "#6a4a30").rect(1250, 590, 20, 310, "#6a4a30");
    s.poly([[440, 560], [440, 180], [580, 220], [580, 560]], "#9aa0a4").poly([[1160, 560], [1160, 180], [1020, 220], [1020, 560]], "#9aa0a4").rect(580, 220, 440, 340, "#aeb4b8");
    s.rect(640, 380, 320, 170, "#3a3e44").rect(660, 400, 140, 90, "#c9d6c0");
    for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) s.rect(830 + c * 38, 398 + r * 34, 30, 26, "#e8e6e0");
    return s;
  },
  // A Rio favela of brick and colourful houses stacked up a steep green hill at dusk, lights, the city and sea below.
  "br-12": (s) => {
    s.sky("dusk", { top: "#4a3a7a", bottom: "#e0a07a" });
    s.sea(560, { color: "#3a4a6a" });
    s.city({ y: 600, x0: 900, x1: 1640, h: [60, 160], depth: 0.4, lit: true });
    s.ridge({ y: 900, amp: 760, color: "#3a5a3a", peak: 300, peakW: 900 });
    for (let i = 0; i < 260; i++) { const x = s.r() * 900, top = 140 + Math.abs(x - 300) * 0.7; const y = top + s.r() * (900 - top); if (s.r() < 0.7) { s.rect(x, y, 34, 26, s.r.pick(["#a8644a", "#b87a5a", "#e8c080", "#a0c4e0", "#e8a0a0", "#c9c4bc"])); if (s.r() < 0.4) s.rect(x + 12, y + 8, 6, 8, "#ffd38a"); } }
    return s;
  },
  // An aerial view of the rainforest edge: dense canopy on one side, cleared pasture on the other, a brown river.
  "br-8": (s) => {
    s.sky("day", { clouds: 4 });
    s.ground(200, "#a8a46a");
    for (let i = 0; i < 400; i++) { const y = 200 + s.r() * 700, xEdge = 700 + Math.sin(y / 80) * 60 + (y - 200) * 0.3, x = s.r() * xEdge; s.add(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(10 + (y - 200) / 30).toFixed(1)}" fill="${s.r.pick(["#2f5a2a", "#3f6a3a", "#4f7a3a"])}"/>`); }
    s.add('<path d="M900,200 C1000,400 760,600 1000,900" stroke="#8a6a44" stroke-width="40" fill="none"/>');
    for (let i = 0; i < 6; i++) s.add(`<ellipse cx="${s.r() * 1600}" cy="${300 + s.r() * 500}" rx="120" ry="40" fill="#1e2a1e" opacity="0.15"/>`);
    return s;
  },
};
