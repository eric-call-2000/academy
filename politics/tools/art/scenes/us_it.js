/* United States and Italy */
module.exports = {
  // An immigrant family with bundles and trunks on the crowded deck of an early-1900s steamship nearing a harbour statue.
  "us_it-1": (s) => {
    s.sky("haze", { top: "#b8b8b0" });
    s.city({ y: 420, x0: 900, x1: 1640, style: "towers", h: [60, 200], depth: 0.6, lit: false });
    s.add('<rect x="590" y="300" width="30" height="120" fill="#8aa8a0"/><path d="M590,300 L605,240 L620,300 Z" fill="#8aa8a0"/><line x1="620" y1="270" x2="640" y2="220" stroke="#8aa8a0" stroke-width="8"/>');
    s.sea(420, { color: "#7a8a8a" });
    s.rect(0, 640, 1600, 260, "#6a5444").rect(0, 620, 1600, 24, "#8a6a4a");
    s.add('<g stroke="#5a4434" stroke-width="5">' + Array.from({ length: 30 }, (_, i) => `<line x1="${i * 56}" y1="620" x2="${i * 56}" y2="560"/>`).join("") + '<line x1="0" y1="566" x2="1600" y2="566"/></g>');
    s.crowd({ y: 780, rows: 2, h: 160, gap: 70, rowGap: 50, colors: ["#3a3030", "#4a4040", "#5a4a3c", "#2a2a2e"] });
    for (let i = 0; i < 4; i++) s.crate(200 + i * 360, 880, 90, 50, { color: "#6a4a30" });
    return s.add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.15"/>');
  },
  // A white airliner on a dark runway at night under floodlights, ringed by soldiers and an outer ring of soldiers and vehicles.
  "us_it-2": (s) => {
    s.sky("night", { stars: 30 });
    s.hills({ y: 400, amp: 100, color: "#1e2220", depth: 0.2 });
    s.ground(400, "#2a2c30");
    [[300, 300], [1300, 300]].forEach(([x, y]) => { s.add(`<line x1="${x}" y1="420" x2="${x}" y2="${y}" stroke="#4a4a4a" stroke-width="4"/>`); s.glow(x, y, 220, "#f4f8ff", 0.4); });
    s.plane("airliner", 800, 620, { s: 2.4 });
    for (let i = 0; i < 24; i++) { const a = i / 24 * Math.PI * 2; s.person(800 + Math.cos(a) * 330, 640 + Math.sin(a) * 110, 50, { color: "#2a3a2a", helmet: true }); }
    for (let i = 0; i < 30; i++) { const a = i / 30 * Math.PI * 2; s.person(800 + Math.cos(a) * 600, 640 + Math.sin(a) * 200, 60, { color: "#3a3a3e", helmet: true }); }
    return s.vehicle("jeep", 200, 760, { s: 0.8, color: "#3a3e34" }).vehicle("jeep", 1400, 760, { s: 0.8, color: "#3a3e34", dir: -1 });
  },
  // A long old stone bridge with many arches across a wide river at dusk, warm lamps reflecting, a city's domes on one bank.
  "us_it-3": (s) => {
    s.sky("dusk");
    s.city({ y: 440, h: [60, 140], style: "old", color: "#c9a07a", depth: 0.35, lit: true });
    s.dome(600, 420, 70, { color: "#9a8a72", depth: 0.3 }).dome(1000, 430, 50, { color: "#9a8a72", depth: 0.3 });
    s.sea(480, { color: "#4a4a6a", glint: 800 });
    s.rect(-20, 540, 1640, 40, "#b8a07a");
    for (let i = 0; i < 9; i++) s.add(`<path d="M${i * 190 - 20},640 L${i * 190 - 20},600 A80,60 0 0 1 ${i * 190 + 140},600 L${i * 190 + 140},640 Z" fill="#4a4a6a"/>`).rect(i * 190 + 140, 580, 30, 80, "#b8a07a");
    for (let i = 0; i < 16; i++) { s.lamp(40 + i * 104, 540, 40, { lit: true }); s.add(`<rect x="${36 + i * 104}" y="680" width="8" height="80" fill="#ffd38a" opacity="0.25"/>`); }
    return s;
  },
};
