/* Japan and Russia */
module.exports = {
  // Rugged volcanic islands with a snow-capped cone over a cold grey-blue sea, drifting ice, a small fishing boat.
  "jp_ru-1": (s) => {
    s.sky("overcast", { top: "#6a7480", clouds: 4, cloudColor: "#7a828a" });
    s.add('<path d="M500,520 L760,250 Q800,236 840,250 L1100,520 Z" fill="#6a6a6e"/><path d="M700,310 L760,250 Q800,236 840,250 L900,310 L860,300 L820,330 L780,296 L740,320 Z" fill="#f2f4f6"/>');
    s.ridge({ y: 540, amp: 80, color: "#4a4a48", jag: true, x1: 600 }).ridge({ y: 540, amp: 60, color: "#4a4a48", jag: true, x0: 1100 });
    s.sea(520, { color: "#5a6a7a", lines: 120 });
    for (let i = 0; i < 30; i++) s.add(`<ellipse cx="${s.r() * 1600}" cy="${560 + s.r() * 300}" rx="${20 + s.r() * 40}" ry="${5 + s.r() * 6}" fill="#e8eef2" opacity="0.8"/>`);
    return s.ship("fishing", 1300, 600, { s: 0.4 });
  },
  // A traditional hot-spring inn in winter: snow on curved tiled roofs, steam from an outdoor stone bath, lanterns, pines.
  "jp_ru-2": (s) => {
    s.sky("wintdusk");
    s.forest({ y: 440, type: "pine", s: 1.2, gap: 30, depth: 0.2 });
    s.rect(300, 320, 900, 200, "#6a4a34").add('<path d="M240,330 Q400,320 480,260 L1020,260 Q1100,320 1260,330 Z" fill="#2a2a2e"/><path d="M240,330 Q400,320 480,260 L1020,260 Q1100,320 1260,330 L1260,320 Q1100,310 1020,250 L480,250 Q400,310 240,320 Z" fill="#eef2f6"/>');
    for (let i = 0; i < 8; i++) s.rect(340 + i * 106, 380, 60, 80, "#ffd38a", 'opacity="0.8"');
    s.ground(520, "snow");
    s.add('<ellipse cx="800" cy="720" rx="360" ry="70" fill="#7a7a7e"/><ellipse cx="800" cy="714" rx="320" ry="56" fill="#6a9ab0"/>');
    s.smoke(700, 700, { len: 200, rise: 3, w: 50, color: "#f2f4f6" }).smoke(900, 700, { len: 200, rise: 3, w: 50, color: "#f2f4f6" });
    [300, 1300].forEach((x) => { s.rect(x - 12, 600, 24, 120, "#8a8478").glow(x, 610, 50, "#ffcf7a", 0.7).rect(x - 20, 590, 40, 30, "#ffd38a"); });
    return s.snowfall({ count: 80 });
  },
  // An LNG tanker with four white spherical tanks sailing through icy grey northern water, snowy coastal mountains.
  "jp_ru-3": (s) => {
    s.sky("winter", { top: "#8a929a" });
    s.mountains({ y: 460, amp: 200, color: "#c9d0d8", depth: 0.3, snow: 0.1 });
    s.sea(480, { color: "#5a6a7a" });
    for (let i = 0; i < 40; i++) s.add(`<ellipse cx="${s.r() * 1600}" cy="${500 + s.r() * 400}" rx="${20 + s.r() * 50}" ry="${5 + s.r() * 8}" fill="#e8eef2" opacity="0.85"/>`);
    return s.ship("lng", 800, 640, { s: 1.4 });
  },
};
