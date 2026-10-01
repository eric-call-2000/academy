/* China and India */
module.exports = {
  // A barren high valley: a grey-green river between steep brown mountains, snow peaks, a tiny outpost with tents on a ridge.
  "cn_in-1": (s) => {
    s.sky("day", { top: "#3f6ab0", bottom: "#c4d8e8" });
    s.mountains({ y: 380, amp: 220, color: "#9a9aa8", depth: 0.4, snow: 0.45 });
    s.mountains({ y: 560, amp: 260, color: "#8a6a4a", depth: 0.15 });
    s.tents(1020, 1140, 360, { rows: 1, gap: 34, w: 26, colors: ["#8a8a6a"] });
    s.ground(600, "#a8885e");
    return s.add('<path d="M800,600 C700,700 900,780 760,900" stroke="#7a9a8a" stroke-width="70" fill="none"/>');
  },
  // A bright electronics assembly line: rows of workers in blue caps and smocks placing parts on green circuit boards.
  "cn_in-2": (s) => {
    s.mood("day", { light: "#ffffff" });
    s.room3d({ depth: 3.4, wall: "#e2e6e8", side: "#d4d8da", floor: "#c4c8ca", ceiling: "#eef0f0", lights: "strips" });
    [520, 1080].forEach((X) => { for (let z = 1.3; z < 3.3; z += 0.25) { s.box3d(X - 80, X + 80, 640, 680, z, z + 0.2, "#8a9096"); const p = s.pp(X, 640, z + 0.1); s.rect(p[0] - 24 / z, p[1] - 6 / z, 48 / z, 12 / z, "#3f8a4a"); } });
    for (let z = 1.4; z < 3.3; z += 0.35) [360, 1240].forEach((X) => { s.figure3d(X, z, { h: 380, color: "#3f6aa8" }); const p = s.pp(X, 900, z), h = 380 / z; s.add(`<ellipse cx="${p[0]}" cy="${p[1] - h * 0.95}" rx="${h * 0.15}" ry="${h * 0.06}" fill="#2a4a8a"/>`); });
    return s;
  },
  // A deep river gorge between steep forested mountains, snowy Himalayan peaks above, mist over a turquoise river.
  "cn_in-3": (s) => s
    .sky("morning")
    .mountains({ y: 300, amp: 200, color: "#9aa0b0", depth: 0.4, snow: 0.4 })
    .bunting(1100, 320, 1400, 300, { sag: 10, count: 14, depth: 0.4 })
    .ridge({ y: 900, amp: 700, color: "#3f6a3a", peak: 200, peakW: 600, jag: true, step: 40 })
    .ridge({ y: 900, amp: 700, color: "#4a7a44", peak: 1400, peakW: 600, jag: true, step: 40 })
    .add('<path d="M800,300 C700,500 900,620 780,900" stroke="#3fb0b0" stroke-width="80" fill="none"/>')
    .fog(560, { h: 200, opacity: 0.5 }),
};
