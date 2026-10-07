/* France and Russia */
module.exports = {
  // A ragged column of soldiers in 1812-era uniforms retreating through deep snow past burned buildings and abandoned carts.
  "fr_ru-1": (s) => {
    s.sky("winter", { top: "#8a8a8a", bottom: "#c9c9c4" });
    s.ground(460, "snow");
    [[200, 470], [1300, 480]].forEach(([x, y]) => s.poly([[x - 80, y], [x - 80, y - 60], [x - 30, y - 90], [x + 10, y - 50], [x + 40, y - 80], [x + 80, y - 40], [x + 80, y]], "#2a2622"));
    s.smoke(1300, 400, { len: 300, rise: 2, w: 30, dark: true });
    for (let i = 0; i < 26; i++) { const t = i / 26, x = 1300 - t * 1100, y = 480 + t * 300; s.person(x, y, 30 + t * 110, { color: s.r.pick(["#2a3a5a", "#3a3a3a", "#4a3a30"]), coat: true, walk: true }); }
    s.cannon(400, 820, 1.4).add('<g fill="#4a3a2a"><rect x="1100" y="720" width="140" height="50"/><circle cx="1120" cy="780" r="22" fill="none" stroke="#4a3a2a" stroke-width="6"/></g>');
    return s.snowfall({ count: 200 }).add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.1"/>');
  },
  // Two small dark-suited figures at opposite ends of a very long white oval table in an ornate gilded hall, a chandelier.
  "fr_ru-2": (s) => {
    s.mood("afternoon", { light: "#fff3d8" });
    s.room3d({ depth: 3, wall: "#ece2c8", side: "#e2d6b8", floor: "#c9b48e", ceiling: "#efe6d0", windows: { n: 3, side: "both", top: 100, bottom: 560, arched: true, color: "#e6dcc4" }, columns: 3, colColor: "#d9b04a", colX: 1, colW: 30, lights: "chandeliers" });
    s.add('<ellipse cx="800" cy="680" rx="560" ry="80" fill="#f4f2ee"/><ellipse cx="800" cy="688" rx="560" ry="80" fill="none" stroke="#d9d4c8" stroke-width="6"/>');
    return s.person(260, 700, 120, { color: "#1a1a1e" }).person(1340, 700, 120, { color: "#1a1a1e" });
  },
  // A large black ballistic-missile submarine moored at a naval base on a rocky Breton coast at dawn, cranes, mist.
  "fr_ru-3": (s) => s
    .sky("dawn", { top: "#9aa0b0" })
    .ridge({ y: 500, amp: 120, color: "#6a6e66", jag: true, depth: 0.3 })
    .rect(800, 420, 300, 80, "#8a8e92").crane(1250, 500, 0.7, { color: "#8a8e92" })
    .sea(500, { color: "#7a8a9a" }).fog(520, { h: 80 })
    .rect(0, 600, 1000, 20, "#6a6a6a")
    .ship("sub", 700, 660, { s: 2.2, hull: "#141618" }),
};
