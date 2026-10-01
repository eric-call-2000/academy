/* Iran and Pakistan */
module.exports = {
  // A mosque with a turquoise tiled dome and two slender minarets in a dusty desert town, mud-brick houses, mountains.
  "ir_pk-1": (s) => s
    .sky("golden")
    .mountains({ y: 440, amp: 220, color: "#8a6a4a", depth: 0.35 })
    .mosque(800, 560, 1, { color: "#d4b88a", domeColor: "#3fa8b0" })
    .city({ y: 600, h: [30, 60], color: "#c49a6a", depth: 0.1, lit: false, windows: false })
    .ground(600, "#c4a070"),
  // A barren desert borderland: a long wire fence and a lonely stone watchtower across rocky brown hills, a dirt track.
  "ir_pk-2": (s) => {
    s.sky("haze", { top: "#d0c4a8" });
    s.hills({ y: 480, amp: 160, color: "#9a7a54", depth: 0.25 });
    s.add('<path d="M-40,680 Q600,560 1640,520" stroke="#3a3a3a" stroke-width="2" fill="none"/><path d="M-40,640 Q600,520 1640,480" stroke="#3a3a3a" stroke-width="2" fill="none"/>');
    for (let i = 0; i <= 40; i++) { const t = i / 40, x = -40 + t * 1680, y = 680 - t * 160 - Math.sin(t * Math.PI) * 40; s.add(`<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 50}" stroke="#3a3a3a" stroke-width="3"/>`); }
    s.rect(1100, 400, 70, 140, "#a8987a").fortWall(1094, 1176, 400, 10, { color: "#a8987a", merlon: 8 });
    return s.add('<path d="M-40,780 Q600,660 1640,600" stroke="#c4a87a" stroke-width="30" fill="none"/>');
  },
  // A big steel gas pipeline across a flat desert ending abruptly, rusting unused pipe sections stacked beside it.
  "ir_pk-3": (s) => {
    s.sky("haze");
    s.mountains({ y: 460, amp: 120, color: "#9a8a72", depth: 0.5 });
    s.ground(480, "#c9a87a");
    s.add('<path d="M-40,620 L900,560" stroke="#8a9098" stroke-width="40"/><ellipse cx="900" cy="560" rx="14" ry="20" fill="#2a2a2e"/>');
    for (let i = 0; i < 10; i++) s.rect(-20 + i * 96, 620 - i * 6.4, 10, 40, "#6a6e74");
    for (let r = 0; r < 3; r++) for (let i = 0; i < 5 - r; i++) s.add(`<circle cx="${1080 + i * 64 + r * 32}" cy="${720 - r * 56}" r="30" fill="#8a5a3a"/><circle cx="${1080 + i * 64 + r * 32}" cy="${720 - r * 56}" r="20" fill="#3a2a22"/>`);
    return s;
  },
};
