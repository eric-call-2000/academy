/* United States and Turkey */
module.exports = {
  // Three tall white 1960s missiles upright on launch pads on a dry Anatolian hillside, service towers and trucks.
  "us_tr-1": (s) => {
    s.sky("day");
    s.hills({ y: 520, amp: 160, color: "#b8986a", depth: 0.2 });
    [500, 800, 1100].forEach((x) => { s.rect(x - 40, 520, 80, 20, "#9a948a"); s.add(`<path d="M${x - 16},520 L${x - 16},280 Q${x},230 ${x + 16},280 L${x + 16},520 Z" fill="#f4f4f2"/><path d="M${x - 16},520 L${x - 30},540 L${x - 16},500 Z" fill="#d9d6d0"/>`); s.add(`<g stroke="#8a5a3a" stroke-width="3"><line x1="${x + 40}" y1="540" x2="${x + 40}" y2="300"/><line x1="${x + 60}" y1="540" x2="${x + 60}" y2="300"/></g>`); });
    return s.vehicle("truck", 300, 620, { s: 0.9, color: "#6a6e58" }).vehicle("truck", 1300, 630, { s: 0.9, color: "#6a6e58" }).add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.1"/>');
  },
  // A suspension bridge at night blocked by military vehicles and tanks, city lights and mosque domes, searchlights.
  "us_tr-2": (s) => {
    s.sky("night", { stars: 10 });
    s.city({ y: 500, h: [40, 110], depth: 0.3, lit: true });
    s.mosque(1100, 490, 0.5, { color: "#3a3450", domeColor: "#2e2a44" });
    [400, 1000].forEach((x, i) => s.beam(x, 520, -70 - i * 30, { len: 600, w: 40, color: "#f4f8ff", opacity: 0.15 }));
    s.sea(520, { color: "#141c2c" });
    s.add('<g stroke="#3a4054" fill="none"><line x1="300" y1="660" x2="300" y2="280" stroke-width="18"/><line x1="1300" y1="660" x2="1300" y2="280" stroke-width="18"/><path d="M-40,600 Q150,560 300,280 Q800,600 1300,280 Q1450,560 1640,600" stroke-width="4"/></g>');
    s.rect(-20, 660, 1640, 30, "#2a2e3a");
    for (let i = 0; i < 6; i++) s.vehicle(i % 2 ? "tank" : "apc", 400 + i * 150, 660, { s: 0.8, color: "#3a3e34" });
    return s.rect(0, 690, 1600, 210, "#141c2c");
  },
  // A grey angular stealth fighter parked in a large clean hangar, canopy open, bright overhead lights, tools nearby.
  "us_tr-3": (s) => {
    s.mood("day", { light: "#ffffff" });
    s.room3d({ depth: 2.6, wall: "#b8bcc0", side: "#a8acb0", floor: "#d9dcdc", ceiling: "#9aa0a6", lights: "strips" });
    s.add('<path d="M800,480 L1100,640 L1200,680 L1060,690 L900,640 L820,700 L780,700 L700,640 L540,690 L400,680 L500,640 Z" fill="#6a7078"/><path d="M780,520 L820,520 L830,580 L770,580 Z" fill="#3a4a5a"/><path d="M770,520 L830,520 L860,470 L800,460 Z" fill="#8aa0b8" opacity="0.7"/>');
    return s.box3d(1180, 1300, 800, 900, 1.3, 1.4, "#c43a2a");
  },
};
