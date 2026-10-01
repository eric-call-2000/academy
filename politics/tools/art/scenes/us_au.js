/* United States and Australia */
module.exports = {
  // Several large white spherical radar domes and low buildings in the red desert, spinifex and rocky ranges, deep blue sky.
  "us_au-1": (s) => {
    s.sky("day", { top: "#2f6ab0", bottom: "#b8d4e8" });
    s.ridge({ y: 460, amp: 120, color: "#a8603a", jag: true, depth: 0.3 });
    s.ground(480, "#b8703a");
    [[400, 70], [620, 90], [880, 60], [1100, 80]].forEach(([x, r]) => s.add(`<path d="M${x - r},560 A${r},${r} 0 0 1 ${x + r},560 Z" fill="#f2f2ee"/><rect x="${x - r}" y="560" width="${r * 2}" height="20" fill="#d9d6d0"/>`));
    s.rect(1200, 530, 200, 50, "#d9d6d0");
    for (let i = 0; i < 50; i++) s.add(`<ellipse cx="${s.r() * 1600}" cy="${600 + Math.pow(s.r(), 0.7) * 300}" rx="${16 + s.r() * 20}" ry="7" fill="#9a8a4a"/>`);
    return s;
  },
  // A long black attack submarine on the surface of a calm harbour at dawn, sailors tiny on the tower, a city and hills.
  "us_au-2": (s) => s
    .sky("dawn", { top: "#a8a0c0", bottom: "#f2c8c0" })
    .hills({ y: 440, amp: 100, color: "#5a6a5a", depth: 0.4 })
    .city({ y: 470, style: "towers", h: [60, 200], depth: 0.45, lit: false })
    .sea(470, { color: "#8a9ab0" })
    .ship("sub", 800, 640, { s: 2.2, hull: "#141618" })
    .person(700, 556, 14, { color: "#2a2a2e" }).person(716, 556, 14, { color: "#2a2a2e" }),
  // A huge open-pit mine with terraced rust-red walls, giant yellow haul trucks on winding ramps, a processing plant.
  "us_au-3": (s) => {
    s.sky("day", { top: "#3f7ab8" });
    s.ground(360, "#b8703a");
    s.factory(1200, 380, 300, 60, { chimneys: [200], depth: 0.3 });
    s.mine(780, 380, 1300, { color: "#a8502a" });
    [[400, 560], [800, 660], [1100, 520], [620, 760]].forEach(([x, y]) => s.vehicle("truck", x, y, { s: 0.7, color: "#e0b02c" }));
    return s;
  },
};
