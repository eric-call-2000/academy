/* United States and Venezuela */
module.exports = {
  // Early-20th-century steam warships with tall funnels off a tropical coast, green mountains behind a small port town.
  "us_ve-1": (s) => s
    .sky("afternoon", { top: "#8aa0b0", bottom: "#e8dcc4" })
    .mountains({ y: 440, amp: 280, color: "#4f7a4a", depth: 0.35, jag: false })
    .city({ y: 460, x0: 200, x1: 800, h: [20, 50], style: "old", color: "#e2d6bc", depth: 0.3, lit: false })
    .sea(460, { color: "#5f8a9a" })
    .ship("steam", 500, 580, { s: 0.9, smoke: true, hull: "#5a6068" })
    .ship("steam", 1100, 620, { s: 1.2, dir: -1, smoke: true, hull: "#5a6068" })
    .ship("steam", 1400, 520, { s: 0.5, smoke: true, hull: "#5a6068", depth: 0.3 }),
  // A large oil refinery on a flat coastal plain at dusk, floodlit towers and tanks, a small flare, marsh and a waterway.
  "us_ve-2": (s) => s
    .sky("dusk", { top: "#4a3a6a", bottom: "#f2a06a" })
    .refinery(800, 520, 1.3, { lit: true })
    .tanks(1100, 520, 4, { w: 80, h: 44 })
    .ground(520, "#4a4a3a")
    .sea(620, { color: "#5a5a6a" })
    .add(Array.from({ length: 40 }, (_, i) => `<path d="M${(i * 41) % 1600},${640 + (i * 37) % 240} l-4,-26 l4,10 l4,-22" stroke="#4a5a3a" stroke-width="3" fill="none"/>`).join("")),
  // Aerial view of a vast grey concrete prison of long blocks, high walls and watchtowers among green fields and hills.
  "us_ve-3": (s) => {
    s.sky("day");
    s.hills({ y: 260, amp: 100, color: "#5f8a4a", depth: 0.3 });
    s.ground(260, "#6f9a52");
    s.add('<polygon points="300,360 1300,360 1500,800 100,800" fill="#a8a49c"/><polygon points="300,360 1300,360 1500,800 100,800" fill="none" stroke="#7a766e" stroke-width="16"/>');
    for (let i = 0; i < 6; i++) { const y = 400 + i * 66, w = 900 + i * 120; s.rect(800 - w / 2, y, w, 34, "#8a8680").rect(800 - w / 2, y + 34, w, 8, "#6a6660"); }
    [[300, 360], [1300, 360], [100, 800], [1500, 800]].forEach(([x, y]) => s.rect(x - 14, y - 50, 28, 50, "#6a6660"));
    return s;
  },
};
