/* Iran and Russia */
module.exports = {
  // Snow-capped Caucasus mountains above a green valley, a winding river, an old stone fortress on a hill, morning mist.
  "ir_ru-1": (s) => s
    .sky("morning")
    .mountains({ y: 400, amp: 300, color: "#7a8090", depth: 0.4, snow: 0.45 })
    .fog(420, { h: 100 })
    .hills({ y: 560, amp: 180, color: "#5f8a4a", peak: 1100, peakW: 400, depth: 0.15 })
    .rect(1040, 330, 120, 60, "#a8987a").rect(1020, 300, 34, 90, "#a8987a").rect(1150, 310, 30, 80, "#a8987a")
    .ground(600, "#6f9a52")
    .add('<path d="M300,600 C500,700 300,780 600,900" stroke="#7aa0b8" stroke-width="50" fill="none"/>'),
  // A triangular delta-wing drone with a small rear propeller flying low over a snowy field at dusk, bare trees, power lines.
  "ir_ru-2": (s) => {
    s.sky("wintdusk");
    s.forest({ y: 500, type: "bare", s: 1, gap: 50, depth: 0.3 });
    s.pylons(-100, 1700, 500, { h: 120, gap: 400, depth: 0.3 });
    s.ground(500, "snow");
    s.plane("shahed", 800, 360, { s: 2.2, color: "#3a3832" });
    return s.add('<line x1="730" y1="350" x2="730" y2="370" stroke="#3a3832" stroke-width="3"/>');
  },
  // A coastal nuclear plant with a large domed reactor building and cooling structures by a calm sea at dusk, palms.
  "ir_ru-3": (s) => {
    s.sky("dusk", { bottom: "#f2b07a" });
    s.ground(480, "#c4a87a");
    s.rect(500, 340, 260, 140, "#e2ddd0").add('<path d="M500,340 A130,110 0 0 1 760,340 Z" fill="#ece8e0"/>');
    s.rect(820, 400, 240, 80, "#d9d6d0").rect(1100, 380, 140, 100, "#d9d6d0");
    s.forest({ y: 500, x0: 100, x1: 420, type: "palm", s: 0.9, gap: 80 });
    return s.sea(520, { glint: 1200, color: "#6a7a9a" });
  },
};
