/* South and North Korea */
module.exports = {
  // A row of low sky-blue huts straddling a concrete border line, a large grey building on each side, pines, spring.
  "kr_kp-1": (s) => {
    s.sky("morning");
    s.forest({ y: 420, type: "pine", s: 0.9, gap: 70, depth: 0.3 });
    s.rect(500, 260, 600, 170, "#9a9a94");
    for (let i = 0; i < 8; i++) s.rect(530 + i * 70, 300, 40, 90, "#5a5a56");
    s.ground(430, "#b8b4ac");
    for (let i = 0; i < 4; i++) s.rect(260 + i * 300, 520, 200, 100, i % 2 ? "#9a9a94" : "#6ab0d8").poly([[250 + i * 300, 520], [470 + i * 300, 520], [460 + i * 300, 504], [260 + i * 300, 504]], "#e8e6e0");
    s.rect(0, 616, 1600, 10, "#e8e6e0");
    s.rect(400, 760, 800, 140, "#a8a49c");
    return s;
  },
  // An empty industrial park of neat low factories in a green valley, weeds in car parks, closed gates, grey sky.
  "kr_kp-2": (s) => {
    s.sky("overcast");
    s.hills({ y: 420, amp: 140, color: "#5f7a4a", depth: 0.4, jag: false });
    for (let i = 0; i < 6; i++) s.factory(80 + i * 250, 520, 200, 70, { chimneys: [], depth: 0.2 });
    s.ground(520, "#8a8a82");
    for (let i = 0; i < 80; i++) s.add(`<path d="M${s.r() * 1600},${600 + s.r() * 300} l-4,-16 l4,8 l4,-14 l2,22" stroke="#6a8a4a" stroke-width="2" fill="none"/>`);
    return s.fence(-10, 700, 760, 90, { gap: 60 }).fence(900, 1610, 760, 90, { gap: 60 }).add('<g stroke="#4a4a4a" stroke-width="5" fill="none"><rect x="710" y="670" width="180" height="90"/><line x1="800" y1="670" x2="800" y2="760"/></g>');
  },
  // Large white balloons carrying plastic bags drifting over forested hills and a double wire border fence at dusk.
  "kr_kp-3": (s) => {
    s.sky("dusk", { top: "#8a8aa8", bottom: "#f2c8c0" });
    s.hills({ y: 520, amp: 200, color: "#3f5a3a", depth: 0.3 });
    s.add('<path d="M-40,620 Q800,560 1640,600" stroke="#3a3a3a" stroke-width="2" fill="none"/><path d="M-40,650 Q800,590 1640,630" stroke="#3a3a3a" stroke-width="2" fill="none"/>');
    s.rect(400, 560, 50, 50, "#5a5a4a").rect(1100, 540, 50, 50, "#5a5a4a");
    [[300, 220, 50], [700, 160, 70], [1000, 280, 40], [1300, 200, 56]].forEach(([x, y, r]) => s.add(`<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 1.2}" fill="#f4f4f2"/><line x1="${x}" y1="${y + r * 1.2}" x2="${x}" y2="${y + r * 2}" stroke="#6a6a6a"/><rect x="${x - r * 0.3}" y="${y + r * 2}" width="${r * 0.6}" height="${r * 0.5}" fill="#dfe6ea" opacity="0.8"/>`));
    return s.hills({ y: 820, amp: 160, color: "#2f4a2a" });
  },
};
