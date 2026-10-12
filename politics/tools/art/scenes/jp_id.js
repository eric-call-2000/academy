/* Japan & Indonesia */
module.exports = {
  // A white colonial-era villa with a deep veranda on a tree-lined street in 1940s Jakarta at early morning.
  "jp_id-1": (s) => {
    s.sky("morning", { sun: [1350, 240], r: 40 });
    s.forest({ y: 520, type: "oak", s: 1.2, depth: 0.4, gap: 60, color: "#5a7a4a" });
    s.rect(380, 330, 840, 230, "#efeae0");
    s.poly([[350, 330], [1250, 330], [1150, 250], [450, 250]], "#8a5a44");
    s.rect(380, 470, 840, 14, "#d8d2c4");
    for (let i = 0; i < 9; i++) s.rect(400 + i * 100, 400, 14, 160, "#e6e0d2");
    for (let i = 0; i < 6; i++) s.rect(450 + i * 130, 360, 50, 90, "#5a6a6a");
    s.rect(760, 470, 80, 90, "#4a3a2e");
    s.ground(560, "#b9a888");
    s.add('<polygon points="760,560 840,560 1000,900 600,900" fill="#9a8a6e"/>');
    s.forest({ y: 700, x0: -40, x1: 300, type: "palm", s: 1.6, gap: 120 }).forest({ y: 700, x0: 1300, x1: 1640, type: "palm", s: 1.6, gap: 120 });
    [700, 880].forEach((x) => s.person(x, 600, 46, { color: "#4a4a44" }));
    return s;
  },
  // A busy Jakarta avenue crowded with small cars and motorbikes beneath an elevated metro line, towers behind.
  "jp_id-2": (s) => {
    s.sky("haze", {});
    s.city({ y: 500, h: [160, 360], depth: 0.5, wmin: 60, wmax: 120 });
    s.rect(0, 330, 1600, 30, "#b9b4aa");
    for (let x = 100; x < 1600; x += 300) s.rect(x, 360, 40, 200, "#a9a49a");
    s.add('<rect x="300" y="290" width="760" height="40" rx="10" fill="#e6e2da"/><rect x="300" y="300" width="760" height="10" fill="#3a6a9a"/>');
    for (let i = 0; i < 12; i++) s.rect(320 + i * 62, 296, 40, 14, "#8aa0b4");
    s.ground(560, "asphalt");
    for (let r = 0; r < 4; r++) for (let i = 0; i < 12; i++) { const y = 600 + r * 80, k = 0.7 + r * 0.25, x = 40 + i * 140 + (r % 2) * 60; if ((i + r) % 3 === 0) s.add(`<g transform="translate(${x},${y}) scale(${k})"><circle cx="-14" cy="-6" r="7" fill="#2a2a2a"/><circle cx="14" cy="-6" r="7" fill="#2a2a2a"/><path d="M-14,-10 L14,-10 L4,-24 Z" fill="${s.r.pick(["#3a3a4a", "#8a2e2a", "#2f4a6a"])}"/><circle cx="2" cy="-34" r="6" fill="#3a3a3a"/></g>`); else s.vehicle("car", x, y, { s: k, color: s.r.pick(["#e6e6e2", "#3a3e44", "#8a2e2a", "#7a7f86", "#c9b8a0"]) }); }
    return s;
  },
  // A grey coast guard patrol vessel moored at a naval quay in a tropical harbour, green islands on the horizon.
  "jp_id-3": (s) => {
    s.sky("morning", { clouds: 4 });
    s.add('<path d="M200,470 Q320,420 460,470 Z M900,470 Q1050,400 1200,470 Z M1350,470 Q1420,440 1500,470 Z" fill="#5a7a5a" opacity="0.7"/>');
    s.sea(470);
    s.ship("patrol", 820, 690, { s: 2.2, hull: "#5a6068", sup: "#d6d8da" });
    s.rect(0, 720, 1600, 180, "#8a8a86");
    s.add('<line x1="0" y1="722" x2="1600" y2="722" stroke="#5a5a56" stroke-width="6"/>');
    [200, 500, 1200, 1450].forEach((x) => s.rect(x - 12, 700, 24, 22, "#3a3a3a"));
    s.forest({ y: 720, x0: 1380, x1: 1640, type: "palm", s: 1.4, gap: 90 });
    return s;
  },
};
