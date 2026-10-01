/* United States and Germany */
module.exports = {
  // A 1940s cargo plane low over bombed-out Berlin, children on a rubble heap watching.
  "us_de-1": (s) => {
    s.sky("overcast", { clouds: 6, cloudY: [60, 360] })
      .city({ y: 600, h: [120, 260], style: "old", depth: 0.55, lit: false });
    // gutted facades: tall walls with empty window holes
    [[120, 230, 330], [420, 180, 280], [1100, 260, 360], [1380, 200, 300]].forEach(([x, w, h]) => {
      s.rect(x, 680 - h, w, h, s.c("#8a7f74", 0.2));
      for (let i = 0; i < 4; i++) for (let j = 0; j < Math.floor(w / 50); j++) s.rect(x + 14 + j * 50, 680 - h + 30 + i * 70, 24, 40, s.c("#d6d2c8", 0.4));
      s.poly([[x, 680 - h], [x + w * 0.4, 680 - h - 30], [x + w * 0.7, 680 - h + 20], [x + w, 680 - h - 10], [x + w, 680 - h + 1], [x, 680 - h + 1]], s.c("#8a7f74", 0.2));
    });
    s.ridge({ y: 760, amp: 160, color: "#6f665c", peak: 760, peakW: 420, step: 60, jag: true, bottom: 900 })
      .rect(0, 820, 1600, 80, "#5d564e");
    s.plane("cargo", 860, 250, { s: 2.2, dir: 1, angle: -4 });
    [[700, 640], [740, 628], [790, 620], [830, 632]].forEach(([x, y], i) => s.person(x, y, 40 + (i % 2) * 6, { color: "#2f2c2a", coat: i % 2 === 0 }));
    return s;
  },
};
