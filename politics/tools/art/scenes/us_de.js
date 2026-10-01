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
  // An older mobile phone on a polished wooden desk in a modern government office, a window onto a distant glass dome.
  "us_de-2": (s) => {
    s.mood("afternoon", { light: "#f2f4ee" });
    s.rect(0, 0, 1600, 900, "#d9d6cc");
    s.rect(200, 80, 1200, 480, "#a8c0d4");
    s.city({ y: 560, x0: 200, x1: 1400, h: [60, 160], depth: 0.4, lit: false });
    s.add('<path d="M700,420 C700,320 750,290 800,290 C850,290 900,320 900,420 Z" fill="#dfeef6" opacity="0.9"/><rect x="600" y="420" width="400" height="140" fill="#cfc4ae"/>');
    for (let x = 200; x <= 1400; x += 300) s.rect(x - 6, 80, 12, 480, "#8a8e92");
    s.rect(0, 600, 1600, 300, "#6a4a30").rect(0, 590, 1600, 20, "#8a6040");
    return s.add('<g transform="rotate(-14 800 700)"><rect x="740" y="660" width="120" height="60" rx="8" fill="#2a2c30"/><rect x="756" y="670" width="60" height="40" fill="#5a7a8a"/><rect x="826" y="672" width="22" height="36" fill="#3a3c40"/></g>');
  },
  // A convoy of military trucks and armoured vehicles leaving a base gate in green countryside at dawn, mist, a spire.
  "us_de-3": (s) => {
    s.sky("dawn");
    s.hills({ y: 440, amp: 80, color: "#6f8a5a", depth: 0.35 });
    s.spire(1200, 430, 120, { depth: 0.35 }).house(1140, 440, 50, 30, { depth: 0.35 });
    s.ground(450, "#6f9a52").fog(470, { h: 90 });
    s.road({ vanish: [1100, 450], w: 900, color: "#6a6866", line: false });
    s.fence(-10, 500, 640, 80, { gap: 60 }).rect(500, 520, 20, 160, "#8a8a8a").rect(800, 520, 20, 160, "#8a8a8a");
    for (let i = 0; i < 6; i++) { const k = 1.4 - i * 0.18; s.vehicle(i % 2 ? "apc" : "truck", 700 + i * 70, 760 - i * 50, { s: k, color: "#5a6050" }); }
    return s;
  },
};
