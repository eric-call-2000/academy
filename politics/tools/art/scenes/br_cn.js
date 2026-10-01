/* Brazil and China */
module.exports = {
  // Green combine harvesters in a line across a vast golden soybean field, grain trucks at the edge, a red earth track.
  "br_cn-1": (s) => {
    s.sky("day", { clouds: 6 });
    s.ground(460, "#c9a24a").field(460, 900, { color: "#c4a04a" });
    for (let i = 0; i < 5; i++) { const x = 300 + i * 220, y = 560 + i * 10; s.add(`<g><rect x="${x - 50}" y="${y - 50}" width="100" height="44" fill="#3f7a3a"/><rect x="${x - 20}" y="${y - 76}" width="44" height="30" fill="#5a9a4a"/><rect x="${x - 110}" y="${y - 20}" width="70" height="16" fill="#2f5a2a"/><circle cx="${x - 20}" cy="${y}" r="14" fill="#2a2a2a"/><circle cx="${x + 36}" cy="${y}" r="10" fill="#2a2a2a"/></g>`); }
    s.add('<path d="M-40,820 Q800,700 1640,760" stroke="#b8603a" stroke-width="40" fill="none"/>');
    return s.vehicle("truck", 1300, 760, { s: 1.2, color: "#d9d2c2" }).vehicle("truck", 1480, 770, { s: 1.2, color: "#a8322a" });
  },
  // Rows of small glass vaccine vials with blue caps on a stainless steel production line, gloved hands, white light.
  "br_cn-2": (s) => {
    s.mood("day", { light: "#ffffff" });
    s.rect(0, 0, 1600, 900, "#e8eef2");
    s.rect(0, 520, 1600, 80, "#b8c0c8").rect(0, 600, 1600, 300, "#9aa4ae");
    for (let r = 0; r < 3; r++) for (let i = 0; i < 26; i++) { const x = i * 64 + r * 20, y = 540 + r * 20; s.rect(x, y - 60, 34, 60, "#dfeef6", 'opacity="0.85"').rect(x + 2, y - 70, 30, 12, "#3f6aa8"); }
    return s.add('<path d="M1200,300 Q1260,280 1300,320 L1360,420 L1300,440 L1240,360 Q1200,360 1200,300 Z" fill="#8ab0d8"/><path d="M300,320 Q360,300 400,340 L440,440 L380,450 L340,380 Q300,370 300,320 Z" fill="#8ab0d8"/>');
  },
  // A new white car factory in a green tropical landscape with palms, rows of electric cars outside, a charging station.
  "br_cn-3": (s) => {
    s.sky("tropical", { clouds: 5 });
    s.hills({ y: 440, amp: 120, color: "jungle", depth: 0.35 });
    s.rect(300, 320, 1000, 180, "#f4f4f2").rect(300, 320, 1000, 16, "#d9dcdc");
    for (let i = 0; i < 12; i++) s.rect(330 + i * 80, 380, 50, 20, "#7aa0b8");
    s.ground(500, "#7a9a5a").rect(0, 560, 1600, 340, "#a8a49c");
    s.forest({ y: 520, type: "palm", s: 1, gap: 200 });
    for (let r = 0; r < 4; r++) for (let i = 0; i < 12; i++) s.vehicle("car", 100 + i * 120 + (r % 2) * 40, 640 + r * 66, { s: 0.7 + r * 0.1, color: ["#f2f2ee", "#3a3e44", "#5a8aa8", "#c9ccd0"][(i + r) % 4] });
    return s.rect(1400, 560, 60, 90, "#3f8a5a").rect(1414, 576, 32, 26, "#cfe8d8");
  },
};
