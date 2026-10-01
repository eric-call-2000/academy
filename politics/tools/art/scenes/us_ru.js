/* United States and Russia */
module.exports = {
  // An empty concrete missile silo with its heavy round lid slid open in a flat snowy field, a wire fence, grey sky.
  "us_ru-1": (s) => {
    s.sky("winter", { top: "#8a929a" });
    s.ground(440, "snow");
    s.fence(-10, 1610, 500, 70, { gap: 80, color: "#4a4a4a" });
    s.add('<ellipse cx="760" cy="700" rx="320" ry="90" fill="#9a9a96"/><ellipse cx="760" cy="694" rx="200" ry="56" fill="#2a2a2c"/><ellipse cx="1080" cy="660" rx="200" ry="56" fill="#8a8a86"/><ellipse cx="1080" cy="650" rx="200" ry="56" fill="#a8a8a4"/>');
    return s.snowfall({ count: 50 });
  },
  // A large round red button on a small grey pedestal on a dark wood table, two empty leather chairs facing across it.
  "us_ru-2": (s) => {
    s.mood("afternoon", { light: "#fff2d0" });
    s.room3d({ depth: 2.4, wall: "#b8aa94", side: "#a89a84", floor: "#5a4434", ceiling: "#d0c4b0", windows: { n: 2, side: "left", top: 100, bottom: 520 } });
    s.chair3d(440, 1.7, { color: "#3a2a22" }).chair3d(1160, 1.7, { color: "#3a2a22" });
    s.box3d(520, 1080, 620, 650, 1.45, 2.0, "#3a2418", { top: "#5a3a26" });
    const p = s.pp(800, 620, 1.7); return s.rect(p[0] - 30, p[1] - 40, 60, 40, "#8a8e92").add(`<ellipse cx="${p[0]}" cy="${p[1] - 42}" rx="24" ry="10" fill="#c4322a"/><ellipse cx="${p[0]}" cy="${p[1] - 46}" rx="20" ry="8" fill="#e04a3a"/>`);
  },
  // Two small white passenger jets parked side by side on an apron at dusk, an empty stretch of tarmac, a control tower.
  "us_ru-3": (s) => {
    s.sky("dusk");
    s.ground(480, "#4a4a4e");
    s.rect(1300, 300, 30, 180, "#8a8a8e").rect(1270, 270, 90, 40, "#5a7a9a");
    for (let i = 0; i < 20; i++) s.add(`<circle cx="${i * 84}" cy="500" r="3" fill="#ffd38a"/>`);
    return s.plane("airliner", 400, 640, { s: 1.4 }).plane("airliner", 1180, 640, { s: 1.4, dir: -1 });
  },
};
