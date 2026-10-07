/* Canada and India */
module.exports = {
  // An old black steamship in a calm harbour below forested mountains, its deck crowded with passengers, police boats nearby.
  "ca_in-1": (s) => {
    s.sky("overcast");
    s.mountains({ y: 440, amp: 240, color: "#3f5a44", depth: 0.4, jag: false });
    s.sea(470, { color: "#6a7a84" });
    s.ship("steam", 800, 640, { s: 1.6, hull: "#1e1e22", smoke: true });
    for (let i = 0; i < 40; i++) s.add(`<circle cx="${560 + i * 12}" cy="${560 - (i % 2) * 6}" r="6" fill="${s.r.pick(["#e8e2d2", "#d9a02c", "#3a3030", "#c94a3c"])}"/>`);
    s.ship("boat", 300, 720, { s: 1, hull: "#2a3a5a" }).ship("boat", 1300, 740, { s: 1, hull: "#2a3a5a", dir: -1 });
    return s.add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.15"/>');
  },
  // A white Sikh temple with a golden dome in a quiet suburban street at dusk, an almost empty car park, lamps, evergreens.
  "ca_in-2": (s) => {
    s.sky("dusk", { top: "#3a4a6a" });
    s.forest({ y: 480, type: "pine", s: 1.4, gap: 50, depth: 0.2 });
    s.rect(500, 320, 600, 200, "#f4f2ee");
    s.dome(800, 320, 90, { color: "#d9b23c" }).dome(560, 320, 30, { color: "#d9b23c" }).dome(1040, 320, 30, { color: "#d9b23c" });
    for (let i = 0; i < 6; i++) s.add(`<path d="M${540 + i * 90},500 L${540 + i * 90},420 A20,20 0 0 1 ${580 + i * 90},420 L${580 + i * 90},500 Z" fill="#ffd38a" opacity="0.8"/>`);
    s.ground(520, "#4a4a4e");
    for (let i = 0; i < 10; i++) s.add(`<line x1="${100 + i * 150}" y1="620" x2="${60 + i * 150}" y2="720" stroke="#d9d2bd" stroke-width="3"/>`);
    s.vehicle("car", 400, 700, { s: 1, color: "#5a5e66" });
    return s.lamps(100, 1500, 540, 120, { gap: 470 });
  },
  // A uranium mine in northern boreal forest: a processing plant with silver tanks and conveyors, yellow trucks, a lake.
  "ca_in-3": (s) => {
    s.sky("day", { top: "#5f8ab8" });
    s.sea(420, { color: "#4f7a9a" });
    s.forest({ y: 440, type: "pine", s: 0.8, gap: 14, depth: 0.3 });
    s.ground(450, "#8a8a7a");
    s.tanks(300, 560, 4, { w: 70, h: 50, color: "#c9ccd0" }).factory(800, 560, 400, 100, { chimneys: [300], depth: 0 });
    s.add('<path d="M700,520 L1000,400" stroke="#5a5e64" stroke-width="12"/>');
    s.vehicle("truck", 400, 720, { s: 1.2, color: "#e0b02c" }).vehicle("truck", 1200, 740, { s: 1.2, color: "#e0b02c" });
    return s.forest({ y: 900, x0: -40, x1: 260, type: "pine", s: 2.2, gap: 60 });
  },
};
