/* Turkey and Russia */
module.exports = {
  // A narrow strait between green hilly shores, old stone fortresses with round towers on both banks, a cargo ship at sunset.
  "tr_ru-1": (s) => {
    s.sky("golden", { sun: [800, 420], r: 40 });
    s.hills({ y: 480, amp: 200, color: "#5f7a4a", depth: 0.3, x1: 700 }).hills({ y: 480, amp: 180, color: "#5f7a4a", depth: 0.35, x0: 900 });
    [[300, 440], [1300, 450]].forEach(([x, y]) => { s.rect(x - 100, y - 60, 200, 60, "#b8aa90"); [-90, 0, 90].forEach((d) => { s.rect(x + d - 22, y - 100, 44, 100, "#b8aa90"); s.poly([[x + d - 26, y - 100], [x + d + 26, y - 100], [x + d, y - 130]], "#6a6a62"); }); });
    s.minaret(820, 470, 60, { depth: 0.5 }).dome(780, 470, 20, { depth: 0.5 });
    s.sea(480, { glint: 800 });
    return s.ship("bulk", 820, 600, { s: 0.9 });
  },
  // A military jet trailing black smoke falling toward forested ridges, two small parachutes, a second jet far off.
  "tr_ru-2": (s) => {
    s.sky("day", { top: "#5f8ab8" });
    s.mountains({ y: 600, amp: 220, color: "#3f5a3a", depth: 0.3, jag: false });
    s.forest({ y: 660, type: "pine", s: 1.4, gap: 24, depth: 0.1 });
    s.smoke(880, 340, { len: 500, dark: true, w: 40, rise: 0.5, dir: -1 });
    s.plane("fighter", 900, 360, { s: 0.8, angle: 30, color: "#4a5058" });
    [[600, 260], [680, 300]].forEach(([x, y]) => s.add(`<path d="M${x - 24},${y} A24,16 0 0 1 ${x + 24},${y} Z" fill="#f2efe8"/><line x1="${x - 22}" y1="${y}" x2="${x}" y2="${y + 40}" stroke="#6a6a6a"/><line x1="${x + 22}" y1="${y}" x2="${x}" y2="${y + 40}" stroke="#6a6a6a"/><circle cx="${x}" cy="${y + 44}" r="4" fill="#3a3a3a"/>`));
    return s.plane("fighter", 1300, 160, { s: 0.3, color: "#4a5058" });
  },
  // A nuclear plant under construction: pale domed reactor buildings and tall cranes on a rocky coast, turquoise sea.
  "tr_ru-3": (s) => {
    s.sky("day", { top: "#4f86b8", bottom: "#d9e6ee" });
    s.hills({ y: 460, amp: 140, color: "#4f6a3a", depth: 0.3 });
    s.ground(480, "#b8a88a");
    [[500, 140], [900, 140]].forEach(([x, r]) => { s.rect(x - r, 380, r * 2, 120, "#e8e6e0"); s.add(`<path d="M${x - r},380 A${r},${r * 0.8} 0 0 1 ${x + r},380 Z" fill="#f2f0ec"/>`); });
    s.rect(1100, 340, 160, 160, "#d9d6d0");
    s.towerCrane(700, 500, 1.2).towerCrane(1180, 500, 1);
    s.ridge({ y: 580, amp: 50, color: "#8a8478", jag: true, step: 30 });
    return s.sea(580, { color: "#3fa0b0", glint: 1300 });
  },
};
