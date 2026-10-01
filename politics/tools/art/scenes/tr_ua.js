/* Turkey and Ukraine */
module.exports = {
  // An old Crimean Tatar palace with a slender minaret, carved wooden galleries and a courtyard fountain, limestone cliffs.
  "tr_ua-1": (s) => {
    s.sky("morning");
    s.ridge({ y: 440, amp: 240, color: "#d9d2c0", jag: true, step: 30, depth: 0.2 });
    s.hills({ y: 480, amp: 60, color: "#5f8a4a", depth: 0.2 });
    s.rect(400, 340, 800, 200, "#e8e2d2").poly([[380, 340], [1220, 340], [1160, 300], [440, 300]], "#8a5a3a");
    s.rect(400, 400, 800, 30, "#6a4a30");
    for (let i = 0; i < 14; i++) s.rect(420 + i * 56, 430, 10, 110, "#6a4a30");
    s.minaret(1260, 540, 300, { color: "#e8e2d2" });
    s.ground(540, "#c9c0ae");
    return s.add('<rect x="740" y="600" width="120" height="80" fill="#d9d2c2"/><ellipse cx="800" cy="600" rx="70" ry="14" fill="#9ab8c8"/>');
  },
  // A large bulk carrier passing through the Bosphorus past domed mosques and a suspension bridge, gulls, morning light.
  "tr_ua-2": (s) => {
    s.sky("morning");
    s.city({ y: 480, h: [40, 100], style: "old", depth: 0.35, lit: false });
    s.mosque(500, 470, 0.6, { color: "#d9d2c2", depth: 0.3 });
    s.add('<g stroke="#5a5e66" fill="none"><line x1="1100" y1="560" x2="1100" y2="300" stroke-width="10"/><line x1="1500" y1="560" x2="1500" y2="300" stroke-width="10"/><path d="M900,520 Q1000,420 1100,300 Q1300,520 1500,300 Q1560,420 1640,480" stroke-width="3"/><line x1="900" y1="540" x2="1640" y2="540" stroke-width="10"/></g>');
    s.sea(480, { color: "#4f7aa8" });
    return s.ship("bulk", 700, 640, { s: 1.2 }).birds(400, 300, 6);
  },
  // A long white Ottoman palace on the Bosphorus shore at dusk, warm lights in tall windows, small boats, a far bridge.
  "tr_ua-3": (s) => {
    s.sky("dusk");
    s.hills({ y: 440, amp: 80, color: "#3a3e4a", depth: 0.3 });
    s.add('<path d="M900,440 Q1200,380 1500,440" stroke="#3a3e48" stroke-width="3" fill="none"/>');
    s.rect(100, 360, 1400, 160, "#f2efe8");
    for (let i = 0; i < 24; i++) s.add(`<path d="M${130 + i * 57},500 L${130 + i * 57},420 A16,16 0 0 1 ${162 + i * 57},420 L${162 + i * 57},500 Z" fill="#ffd38a" opacity="0.85"/>`);
    s.rect(80, 350, 1440, 14, "#d9d4c8");
    s.sea(520, { color: "#3a4a6a", glint: 800 });
    return s.ship("boat", 400, 680, { s: 1, lamp: true }).ship("boat", 1100, 720, { s: 1.1, dir: -1, lamp: true });
  },
};
