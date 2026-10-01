/* France and Germany */
module.exports = {
  // A vast military cemetery of white crosses across rolling green hills, a tall stone memorial tower and ossuary.
  "fr_de-1": (s) => {
    s.sky("overcast");
    s.hills({ y: 440, amp: 100, color: "#6f8a5a", depth: 0.3 });
    s.rect(500, 330, 600, 90, "#c9c0ae").rect(760, 160, 80, 240, "#c9c0ae").dome(800, 160, 40, { color: "#b8b0a0" });
    s.hills({ y: 520, amp: 60, color: "#6f9a52", depth: 0.1 });
    for (let r = 0; r < 12; r++) for (let i = 0; i < 30; i++) { const y = 520 + r * 32, k = 0.4 + r * 0.08, x = -40 + i * 60 + (r % 2) * 30; s.add(`<g fill="#f4f2ee"><rect x="${x - 3 * k}" y="${y - 40 * k}" width="${6 * k}" height="${40 * k}"/><rect x="${x - 12 * k}" y="${y - 32 * k}" width="${24 * k}" height="${5 * k}"/></g>`); }
    return s;
  },
  // A large modern curved glass and steel parliament by a calm river at dusk, reflections, a footbridge, trees.
  "fr_de-2": (s) => {
    s.sky("dusk", { top: "#2a3a6a", bottom: "#8a9ac0" });
    s.add('<path d="M300,520 L300,320 Q800,240 1300,320 L1300,520 Z" fill="#8aa4c0"/>');
    for (let i = 0; i < 20; i++) s.add(`<line x1="${320 + i * 50}" y1="${310 - Math.sin(i / 19 * Math.PI) * 60}" x2="${320 + i * 50}" y2="520" stroke="#5a6a80" stroke-width="3"/>`);
    s.rect(300, 400, 1000, 80, "#ffd38a", 'opacity="0.35"');
    s.forest({ y: 520, x0: -40, x1: 300, type: "oak", s: 1.2, gap: 60 }).forest({ y: 520, x0: 1300, x1: 1640, type: "oak", s: 1.2, gap: 60 });
    s.sea(540, { color: "#2a3a5a", glint: 800 });
    return s.add('<path d="M100,700 Q800,640 1500,700" stroke="#c9ccd0" stroke-width="8" fill="none"/>');
  },
  // Two sleek fighter jets in formation above a sea of clouds at sunset, orange and violet sky.
  "fr_de-3": (s) => s
    .sky("dusk", { top: "#3a2a6a", bottom: "#f2a06a", sun: [1300, 520], r: 40 })
    .clouds(14, [480, 700], "#e8c4c0")
    .rect(0, 640, 1600, 260, "#d9b8c0")
    .plane("fighter", 700, 340, { s: 1.6, color: "#2a2a34", angle: -6 })
    .plane("fighter", 960, 420, { s: 1.3, color: "#2a2a34", angle: -6 }),
};
