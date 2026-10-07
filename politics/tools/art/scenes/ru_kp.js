/* Russia & North Korea */
module.exports = {
  // Tanks and trucks rolling along a dusty road into a Korean town of low tiled roofs, pine mountains, late summer haze.
  "ru_kp-1": (s) => {
    s.sky("haze", { sun: [1200, 200], r: 40 })
      .mountains({ y: 440, amp: 190, color: "forest", depth: 0.55, jag: false })
      .forest({ y: 450, type: "pine", s: 0.6, depth: 0.45, gap: 24 });
    s.ground(470, "arid");
    for (let i = 0; i < 9; i++) { const x = 80 + i * 170 + s.r() * 30, y = 520 + (i % 2) * 14; s.rect(x, y - 44, 120, 44, "#d9d0bc"); s.rect(x + 50, y - 30, 20, 30, "#6a5a48"); s.path(`M${x - 26},${y - 40} Q${x - 10},${y - 52} ${x + 6},${y - 82} L${x + 114},${y - 82} Q${x + 130},${y - 52} ${x + 146},${y - 40} Z`, "#4a4e52"); }
    s.add('<path d="M-20,700 Q700,600 1640,570 L1640,640 Q700,680 -20,790 Z" fill="#c4ae86"/>');
    s.vehicle("tank", 260, 740, { s: 1.8, color: "#5a6a4a" }).vehicle("tank", 700, 660, { s: 1.3, color: "#5a6a4a", depth: 0.1 });
    s.vehicle("truck", 1060, 620, { s: 1.0, depth: 0.2 }).vehicle("truck", 1320, 600, { s: 0.8, depth: 0.3 });
    s.smoke(160, 720, { len: 360, dir: -1, rise: 0.2, color: "#d2c09a" });
    return s;
  },
  // A long dark-green armoured train crossing a vast snowy Siberian plain past birch forests, low winter sun.
  "ru_kp-2": (s) => {
    s.sky("wintdusk", { sun: [260, 420], r: 40, clouds: 2 });
    s.ground(450, "snow");
    s.forest({ y: 440, type: "birch", s: 0.7, depth: 0.5, gap: 14 });
    s.forest({ y: 470, x0: 900, x1: 1640, type: "pine", s: 0.7, depth: 0.4, gap: 20, color: "#3f5246" });
    s.train(120, 1500, 600, { s: 1.2, color: "#3f5a46" });
    s.smoke(140, 520, { len: 320, dir: -1, rise: 0.3, color: "#e9ecef" });
    s.forest({ y: 820, x0: -40, x1: 360, type: "pine", s: 1.7, color: "#3f5246" }).forest({ y: 830, x0: 1300, x1: 1640, type: "pine", s: 1.6, color: "#3f5246" });
    return s;
  },
  // A new concrete two-lane road bridge over a wide slow river beside an older steel rail bridge, a border post, trucks, autumn.
  "ru_kp-3": (s) => {
    s.sky("afternoon", { clouds: 3 })
      .hills({ y: 430, amp: 80, color: "#8a7a5c", depth: 0.5 });
    s.sea(470, { color: "#6f8a96", lines: 40 });
    s.ground(640, "#8a7a5c");
    s.bridge(-40, 1640, 540, { color: "#4f5458", span: 220, pier: 90 });
    for (let x = 0; x < 1600; x += 30) s.add(`<line x1="${x}" y1="530" x2="${x + 30}" y2="512" stroke="#4f5458" stroke-width="3"/><line x1="${x}" y1="512" x2="${x + 30}" y2="512" stroke="#4f5458" stroke-width="3"/>`);
    s.bridge(-40, 1640, 600, { color: "#b9b6ac", span: 260, pier: 60 });
    s.rect(-40, 580, 1680, 12, "#d6d2c6");
    s.vehicle("truck", 700, 588, { s: 0.7 }).vehicle("truck", 980, 588, { s: 0.7, dir: -1 });
    s.rect(1320, 520, 200, 70, "#d9d6cc").rect(1310, 510, 220, 12, "#7a7a74");
    s.barrier(1150, 1300, 590);
    return s;
  },
};
