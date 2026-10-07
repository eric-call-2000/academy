/* United States and Argentina */
module.exports = {
  // A huge 1940s crowd filling a plaza before a pink neoclassical palace, men in hats, blank banners, palms, sunny sky.
  "us_ar-1": (s) => {
    s.sky("day");
    s.palace(800, 460, 1, { color: "#e0a8a0", w: 700, h: 160, cols: 8 });
    s.forest({ y: 500, x0: -40, x1: 300, type: "palm", s: 1.6, gap: 120 }).forest({ y: 500, x0: 1300, x1: 1640, type: "palm", s: 1.6, gap: 120 });
    s.ground(460, "#b8b0a2");
    s.crowd({ y: 520, rows: 9, h: 40, gap: 10, rowGap: 40, banners: 4, colors: ["#2a2a2e", "#3a3432", "#e8e2d2", "#5a4a3c"] });
    for (let i = 0; i < 120; i++) s.add(`<ellipse cx="${s.r() * 1600}" cy="${500 + s.r() * 380}" rx="12" ry="4" fill="#2a2a2e"/>`);
    return s.add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.15"/>');
  },
  // A tall three-masted naval training ship tied up at a tropical African port, officials on the dock, cranes and containers.
  "us_ar-2": (s) => {
    s.sky("haze", { top: "#b8b8a8" });
    s.crane(1200, 460, 0.8).crane(1360, 460, 0.8);
    s.containers(1100, 470, 10, 3, { w: 46, h: 22 });
    s.sea(470, { color: "#5a7a8a" });
    s.ship("tall", 600, 620, { s: 1.3 });
    s.rect(0, 640, 1600, 260, "#8a8682");
    return s.person(1000, 720, 90, { color: "#2a2c34" }).person(1060, 724, 90, { color: "#3a3030" }).rect(1074, 670, 30, 20, "#f2efe8");
  },
  // Gas processing plants, drilling rigs and long pipelines across a flat dry Patagonian plain at sunset, distant hills.
  "us_ar-3": (s) => {
    s.sky("dusk", { bottom: "#f2a06a" });
    s.hills({ y: 480, amp: 60, color: "#7a5a5a", depth: 0.5 });
    s.ground(480, "#9a7a5a");
    s.refinery(500, 520, 0.7, { flare: true, lit: true });
    [1000, 1250, 1450].forEach((x, i) => s.add(`<g stroke="#2a2a2e" stroke-width="${4 - i}" fill="none"><path d="M${x - 30 + i * 6},520 L${x},${360 + i * 30} L${x + 30 - i * 6},520"/></g>`));
    return s.pipeline([[-40, 700], [600, 620], [1640, 600]], { w: 14 }).pipeline([[-40, 760], [800, 680], [1640, 660]], { w: 10 });
  },
};
