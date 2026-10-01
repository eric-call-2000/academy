/* Israel and Russia */
module.exports = {
  // A crowded early-1990s airport arrivals hall: families with suitcases, bundles and coats, a welcome desk behind.
  "il_ru-1": (s) => {
    s.mood("interior", { light: "#fff4d6" });
    s.room3d({ depth: 2.8, wall: "#c9c4b0", side: "#bab4a0", floor: "#9a948a", ceiling: "#d9d4c4", lights: "strips" });
    s.box3d(600, 1000, 700, 820, 2.5, 2.6, "#8a6a4a");
    for (let i = 0; i < 30; i++) { const z = 1.3 + Math.pow(s.r(), 1.2) * 1.4, X = 200 + s.r() * 1200; s.figure3d(X, z, { h: 360, color: s.r.pick(["#3a3a40", "#5a4a3c", "#4a5a6a", "#6a3a3a"]), coat: true, bundle: s.r() < 0.4 ? "#7a6a4a" : null }); }
    return s;
  },
  // Two fighter jets high over a dry brown Syrian landscape at dusk, a distant air base with radar dishes and hangars below.
  "il_ru-2": (s) => {
    s.sky("dusk", { bottom: "#f2a06a" });
    s.ground(560, "#9a7a5a");
    s.add('<polygon points="400,700 1300,660 1340,700 440,740" fill="#6a6662"/>');
    for (let i = 0; i < 4; i++) s.add(`<path d="M${500 + i * 120},660 A40,30 0 0 1 ${580 + i * 120},660 Z" fill="#8a847a"/>`);
    s.dish(1200, 640, 0.3);
    return s.plane("fighter", 700, 260, { s: 1.1, color: "#2a2a34" }).plane("fighter", 900, 320, { s: 0.9, color: "#2a2a34" });
  },
  // An old-fashioned desk telephone on a polished wooden desk in a dim office, a lit city skyline through a tall window.
  "il_ru-3": (s) => {
    s.mood("night", { light: "#ffd38a" });
    s.rect(0, 0, 1600, 900, "#2a2420");
    s.rect(500, 60, 600, 520, "#141c2c");
    s.city({ y: 580, x0: 500, x1: 1100, style: "towers", h: [100, 300], depth: 0.2, lit: true, color: "#2a3448" });
    s.rect(500, 60, 600, 10, "#3a2e26").rect(794, 60, 12, 520, "#3a2e26");
    s.rect(0, 620, 1600, 280, "#4a3020").rect(0, 600, 1600, 24, "#6a4430");
    s.glow(800, 560, 300, "#ffd38a", 0.2);
    return s.add('<path d="M700,600 L720,540 L880,540 L900,600 Z" fill="#141414"/><path d="M690,540 Q690,500 730,500 L870,500 Q910,500 910,540 L880,540 Q880,520 860,520 L740,520 Q720,520 720,540 Z" fill="#1e1e1e"/><circle cx="800" cy="572" r="20" fill="#3a3a3a"/>');
  },
};
