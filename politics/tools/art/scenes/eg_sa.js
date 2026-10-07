/* Egypt and Saudi Arabia */
module.exports = {
  // Steep terraced brown Yemeni mountains with a tall stone tower-house village on a ridge, a 1960s truck on a dirt road.
  "eg_sa-1": (s) => {
    s.sky("haze", { top: "#b8b0a0" });
    s.ridge({ y: 600, amp: 420, color: "#8a6a4a", peak: 800, peakW: 600, jag: true, step: 40 });
    for (let k = 0; k < 8; k++) s.add(`<path d="M${200 + k * 20},${600 - k * 40} Q800,${560 - k * 44} ${1400 - k * 20},${600 - k * 40}" stroke="#6a5038" stroke-width="3" fill="none"/>`);
    for (let i = 0; i < 9; i++) { const x = 660 + i * 34, h = 60 + (i % 3) * 30; s.rect(x, 230 - h, 30, h, "#a8805a"); for (let k = 0; k < h / 20; k++) s.rect(x + 10, 236 - h + k * 20, 8, 8, "#f2efe8"); }
    s.add('<path d="M-40,900 Q400,760 700,740 T1640,700" stroke="#c4a87a" stroke-width="30" fill="none"/>');
    return s.vehicle("truck", 600, 750, { s: 0.9, color: "#6a6e58" });
  },
  // Two barren rocky islands in a bright turquoise sea at a gulf mouth, coral reefs, red desert mountains, a ship.
  "eg_sa-2": (s) => s
    .sky("desert", { top: "#4f86b8" })
    .mountains({ y: 440, amp: 200, color: "#a8603a", depth: 0.35 })
    .sea(460, { color: "#2fb0b8" })
    .add('<ellipse cx="500" cy="640" rx="200" ry="40" fill="#5fd0c8" opacity="0.7"/><ellipse cx="1100" cy="600" rx="160" ry="30" fill="#5fd0c8" opacity="0.7"/>')
    .poly([[360, 640], [440, 590], [520, 580], [620, 620], [640, 640]], "#a8805a")
    .poly([[1000, 600], [1060, 560], [1140, 566], [1200, 600]], "#a8805a")
    .ship("container", 800, 560, { s: 0.4, depth: 0.2 }),
  // A long line of high-voltage pylons across a flat sandy desert toward a blue sea at sunset, a big converter station.
  "eg_sa-3": (s) => {
    s.sky("dusk", { top: "#4a3a7a", bottom: "#f2a06a" });
    s.sea(460, { color: "#4a5a8a" }).rect(0, 460, 800, 20, "#4a5a8a");
    s.ground(480, "#d4b08a");
    s.pylons(900, 1700, 480, { h: 80, gap: 160, depth: 0.4 }).pylons(-100, 900, 620, { h: 220, gap: 340 });
    for (let i = 0; i < 4; i++) s.rect(900 + i * 140, 620, 120, 120, "#f2efe8").rect(900 + i * 140, 620, 120, 10, "#c9c4bc");
    return s;
  },
};
