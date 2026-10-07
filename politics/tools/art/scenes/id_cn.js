/* Indonesia and China */
module.exports = {
  // A white 1920s art-deco hall in a tropical city, 1950s delegates in suits and robes arriving, old cars, palms.
  "id_cn-1": (s) => {
    s.sky("tropical");
    s.rect(400, 260, 800, 280, "#f4f2ee");
    for (let i = 0; i < 6; i++) s.rect(460 + i * 120, 300, 30, 240, "#e2ddd0");
    s.rect(380, 240, 840, 30, "#e2ddd0").rect(700, 180, 200, 70, "#f4f2ee");
    s.tree("palm", 250, 560, { s: 1.8 }).tree("palm", 1380, 560, { s: 1.8 });
    s.ground(540, "#b8b0a2");
    s.vehicle("car", 200, 700, { s: 1.4, color: "#1e1e22" }).vehicle("car", 1400, 710, { s: 1.4, color: "#3a3a3e", dir: -1 });
    return s.crowd({ y: 680, x0: 400, x1: 1200, rows: 3, h: 90, gap: 34, rowGap: 46, colors: ["#2a2c34", "#f2efe8", "#3a3030", "#c9b89a"] });
  },
  // A sprawling industrial park of smelter chimneys and smoke on a tropical coast, jungle hills, a jetty with bulk carriers.
  "id_cn-2": (s) => {
    s.sky("haze", { top: "#b8c0b8" });
    s.hills({ y: 420, amp: 200, color: "jungle", depth: 0.35 });
    s.factory(200, 520, 500, 100, { chimneys: [60, 200, 340], chimH: 180, dark: true }).factory(800, 520, 500, 100, { chimneys: [100, 300, 450], chimH: 200, dark: true });
    s.ground(520, "#6a6a62");
    s.sea(580, { color: "#4f8a9a" });
    s.rect(400, 640, 800, 14, "#8a8682");
    return s.ship("bulk", 600, 720, { s: 0.8 }).ship("bulk", 1100, 700, { s: 0.7, dir: -1 });
  },
  // A grey coastguard ship shadowing a large fishing trawler on a deep blue tropical sea, small green islands, sun.
  "id_cn-3": (s) => {
    s.sky("tropical", { clouds: 5 });
    [[300, 120], [1300, 160]].forEach(([x, w]) => s.add(`<path d="M${x - w},470 Q${x},380 ${x + w},470 Z" fill="#4f8a4a"/><rect x="${x - w}" y="466" width="${w * 2}" height="8" fill="#f2efe0"/>`));
    s.sea(470, { color: "#2f6aa8" });
    return s.ship("fishing", 900, 640, { s: 1.6, hull: "#a8322a" }).ship("patrol", 450, 700, { s: 1.1, wake: true });
  },
};
