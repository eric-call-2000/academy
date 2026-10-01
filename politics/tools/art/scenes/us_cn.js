/* United States and China */
module.exports = {
  // Steelworks on an estuary at dusk: blast furnaces, coils on the quay, a ship loading.
  "us_cn-1": (s) => {
    s.sky("dusk", { sun: [300, 420], r: 50, clouds: 4 })
      .ridge({ y: 470, amp: 40, color: "#5a5868", depth: 0.6 })
      .factory(820, 470, 360, 70, { depth: 0.45, chimneys: [60, 160, 300], chimH: 150 })
      .furnace(1250, 520, 0.9, { depth: 0.2 })
      .furnace(1420, 520, 0.75, { depth: 0.3 })
      .furnace(1060, 520, 0.6, { depth: 0.4 })
      .rect(600, 515, 1000, 20, "#4a4644")
      .sea(520, { glint: 300, lines: 60 })
      .rect(560, 600, 1100, 300, "#5a5552")
      .ship("bulk", 300, 650, { s: 1.1, wake: false })
      .crane(560, 620, 1.2, { color: "#a85a3a", boom: 260 })
      .coils(700, 720, 14, 3, { r: 22 })
      .coils(1080, 800, 12, 3, { r: 26 });
    [[1000, 650], [1030, 650], [1300, 660], [880, 830]].forEach(([x, y]) => s.person(x, y, 28, { hat: "hard", coat: true }));
    return s;
  },
  // An old steel mill with tall chimneys on a river in a hilly Pennsylvania town at dawn, brick houses, a truss bridge, mist.
  "us_cn-2": (s) => {
    s.sky("dawn");
    s.hills({ y: 420, amp: 160, color: "#5f7a4a", depth: 0.35 });
    for (let k = 0; k < 4; k++) for (let x = -20 + k * 40; x < 700; x += 70) s.house(x, 360 + k * 40, 60, 40, { color: s.c("#8a5040", 0.3), roofColor: "#4a3a3a" });
    s.factory(800, 520, 600, 160, { chimneys: [80, 200, 320, 460], chimH: 200, depth: 0.25, dark: true });
    s.sea(520, { color: "#7a8a9a" }).fog(530, { h: 80 });
    s.add('<g stroke="#3a3e44" stroke-width="6" fill="none"><line x1="-20" y1="700" x2="1620" y2="700"/><line x1="-20" y1="600" x2="1620" y2="600"/>' + Array.from({ length: 18 }, (_, i) => `<line x1="${i * 100}" y1="700" x2="${i * 100 + 50}" y2="600"/><line x1="${i * 100 + 50}" y1="600" x2="${i * 100 + 100}" y2="700"/>`).join("") + "</g>");
    return s.person(500, 690, 30).person(540, 692, 28, { color: "#4a3a34" });
  },
  // A golden Midwest soybean field at harvest, a green combine, silver silos and a red barn, a lone farmer far off.
  "us_cn-3": (s) => {
    s.sky("golden", { clouds: 5 });
    s.ground(480, "#c9a24a").field(480, 900, { color: "#c4a04a" });
    [1100, 1170].forEach((x) => s.silo(x, 480, 1.3, { color: "#c9ccd0" }));
    s.rect(1240, 400, 140, 80, "#a8322a").poly([[1230, 400], [1390, 400], [1310, 350]], "#6a2a22");
    s.add('<g><rect x="560" y="520" width="140" height="60" fill="#3f7a3a"/><rect x="600" y="490" width="60" height="40" fill="#5a9a4a"/><rect x="480" y="560" width="90" height="20" fill="#2f5a2a"/><circle cx="600" cy="590" r="20" fill="#2a2a2a"/><circle cx="680" cy="590" r="14" fill="#2a2a2a"/></g>');
    return s.person(300, 640, 60, { color: "#3a4a6a" });
  },
};
