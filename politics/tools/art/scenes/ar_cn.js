/* Argentina and China */
module.exports = {
  // A vast flat field of green soybeans on the pampas under a huge sky, a red combine harvester, metal grain silos.
  "ar_cn-1": (s) => {
    s.sky("day", { clouds: 6 });
    [1200, 1260, 1320].forEach((x) => s.silo(x, 480, 1, { color: "#c9ccd0" }));
    s.ground(480, "#6f9a42").field(480, 900, { color: "#6f9a42", dark: true });
    return s.add('<g><rect x="560" y="520" width="140" height="60" fill="#c4322a"/><rect x="600" y="490" width="60" height="40" fill="#e04a3a"/><rect x="480" y="560" width="90" height="20" fill="#8a2a22"/><circle cx="600" cy="590" r="20" fill="#2a2a2a"/><circle cx="680" cy="590" r="14" fill="#2a2a2a"/></g>');
  },
  // A huge white radio dish on a windswept dry Patagonian plateau, low buildings beside it, distant snowy Andes.
  "ar_cn-2": (s) => s
    .sky("day", { top: "#3f7ab8" })
    .mountains({ y: 480, amp: 140, color: "#8a8a9a", depth: 0.5, snow: 0.5 })
    .ground(480, "#b8a07a")
    .dish(800, 640, 2.2)
    .rect(1100, 590, 220, 50, "#e2ddd0")
    .add(Array.from({ length: 50 }, (_, i) => `<ellipse cx="${(i * 97) % 1600}" cy="${660 + (i * 53) % 240}" rx="${10 + (i % 4) * 6}" ry="6" fill="#8a8a6a"/>`).join("")),
  // A large concrete dam under construction across a wide turquoise river in dry Patagonian steppe, cranes and trucks.
  "ar_cn-3": (s) => {
    s.sky("day", { top: "#7aa0c4" });
    s.mountains({ y: 440, amp: 120, color: "#8a8478", depth: 0.5 });
    s.ground(460, "#b8a07a");
    s.sea(500, { color: "#3fb0b8" });
    s.dam(200, 1400, 640, 140, { color: "#b8b2a8" });
    s.towerCrane(400, 500, 0.8).towerCrane(1100, 500, 0.8);
    s.ground(640, "#b8a07a");
    return s.vehicle("truck", 500, 720, { s: 1, color: "#e0b02c" }).vehicle("truck", 1000, 740, { s: 1, color: "#e0b02c" });
  },
};
