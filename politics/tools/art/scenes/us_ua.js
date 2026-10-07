/* United States and Ukraine */
module.exports = {
  // An empty Soviet-era missile silo in a snowy steppe, its round concrete lid pushed aside, rusting fences, a guard hut.
  "us_ua-1": (s) => {
    s.sky("overcast", { top: "#7a8088" });
    s.ground(440, "snow");
    s.fence(-10, 1610, 520, 80, { gap: 90, color: "#6a4a3a" });
    s.rect(1300, 440, 100, 70, "#8a8478").poly([[1290, 440], [1410, 440], [1350, 410]], "#5a5450");
    s.add('<ellipse cx="700" cy="700" rx="300" ry="84" fill="#9a9a96"/><ellipse cx="700" cy="694" rx="190" ry="52" fill="#1e1e20"/><ellipse cx="1020" cy="740" rx="190" ry="52" fill="#a8a8a4"/>');
    return s.snowfall({ count: 50 });
  },
  // A mobile rocket launcher truck firing a rocket with a bright trail at dusk across a muddy field, smoke, a tree line.
  "us_ua-2": (s) => {
    s.sky("dusk", { top: "#3a3e5a" });
    s.forest({ y: 480, type: "bare", s: 1, gap: 40, depth: 0.3 });
    s.ground(490, "#5a4a3a").field(490, 900, { color: "#5a4a3a", dark: true });
    s.vehicle("truck", 700, 720, { s: 2.2, color: "#4a5040" });
    s.add('<rect x="540" y="560" width="220" height="70" fill="#5a6050" transform="rotate(-30 600 620)"/>');
    s.missile(640, 560, { len: 700, angle: -55, curve: 60 });
    s.glow(640, 580, 160, "#ffb85a", 0.7);
    return s.smoke(640, 640, { len: 400, rise: 0.4, w: 70, dir: -1 });
  },
  // An ornate oval office: two empty armchairs facing in front of a marble fireplace, tall windows, golden curtains.
  "us_ua-3": (s) => {
    s.mood("afternoon", { light: "#fff2d0" });
    s.room3d({ depth: 2.2, wall: "#efe6cc", side: "#e6dcc0", floor: "#2f4a7a", ceiling: "#f4eedc", windows: { n: 2, side: "both", top: 100, bottom: 600 } });
    s.add('<rect x="80" y="120" width="40" height="500" fill="#d9b23c"/><rect x="1480" y="120" width="40" height="500" fill="#d9b23c"/>');
    s.rect(680, 440, 240, 200, "#f2efe8").rect(720, 500, 160, 140, "#2a2420").rect(660, 430, 280, 20, "#e8e2d2");
    s.rect(720, 220, 160, 180, "#8a6a4a").rect(732, 232, 136, 156, "#a89a7a");
    [[540, 1.5], [1060, 1.5]].forEach(([X, z]) => s.chair3d(X, z, { color: "#e8d8a8" }));
    return s.add('<ellipse cx="800" cy="800" rx="460" ry="80" fill="#3a5a8a"/>');
  },
};
