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
};
