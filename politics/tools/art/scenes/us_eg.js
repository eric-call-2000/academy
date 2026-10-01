/* United States and Egypt */
module.exports = {
  // A vast rock and concrete dam under construction across a wide desert river in the 1960s, cranes, a lake forming.
  "us_eg-1": (s) => {
    s.sky("haze", { top: "#c4b8a0" });
    s.mountains({ y: 420, amp: 100, color: "#b89a72", depth: 0.4 });
    s.sea(440, { color: "#6a8a9a" });
    s.dam(100, 1500, 620, 160, { color: "#a89a82" });
    for (let i = 0; i < 6; i++) s.towerCrane(200 + i * 240, 460, 0.6);
    s.ground(620, "#c9a87a");
    s.sea(700, { color: "#7a8a8a" });
    return s.add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.12"/>');
  },
  // A vast crowd filling a big city square at dusk, tents and blank banners, distant smoke, armoured vehicles at the edge.
  "us_eg-2": (s) => {
    s.sky("dusk");
    s.city({ y: 440, h: [100, 220], depth: 0.3, lit: true });
    s.smoke(1300, 420, { len: 300, rise: 3, w: 30, dark: true });
    s.ground(440, "#6a5e54");
    s.tents(100, 700, 470, { rows: 2, gap: 90, w: 50 });
    s.crowd({ y: 520, rows: 9, h: 40, gap: 10, rowGap: 40, banners: 5, colors: ["#2a2424", "#3a3030", "#e2d9c8", "#4a4040"] });
    return s.vehicle("apc", 1350, 520, { s: 0.6, dir: -1 }).vehicle("apc", 1480, 530, { s: 0.6, dir: -1 });
  },
  // A huge container ship sliding through a narrow straight canal across flat yellow desert at sunrise, a town and palms.
  "us_eg-3": (s) => {
    s.sky("dawn", { sun: [1100, 440], r: 40 });
    s.ground(470, "#d9b884");
    s.persp({ vanish: [800, 470], depth: 30 });
    s.quad("floor", [640, 960, 899, 1, 200], "#6a8aa8");
    s.forest({ y: 500, x0: 1000, x1: 1400, type: "palm", s: 0.6, gap: 40 });
    for (let i = 0; i < 12; i++) s.rect(1050 + (i % 6) * 50, 480 + Math.floor(i / 6) * 20, 40, 16, "#e8e2d2");
    return s.ship("container", 800, 640, { s: 0.9, reflect: false });
  },
};
