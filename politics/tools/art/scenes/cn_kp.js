/* China and North Korea */
module.exports = {
  // An old steel truss bridge across a wide half-frozen river in winter, snowy hills, a column of small figures at dusk.
  "cn_kp-1": (s) => {
    s.sky("wintdusk");
    s.hills({ y: 460, amp: 100, color: "#c9d0d8", depth: 0.3 });
    s.rect(0, 540, 1600, 360, "#8a9aaa");
    for (let i = 0; i < 30; i++) s.add(`<ellipse cx="${s.r() * 1600}" cy="${560 + s.r() * 300}" rx="${30 + s.r() * 60}" ry="${6 + s.r() * 8}" fill="#e8eef2" opacity="0.85"/>`);
    s.add('<g stroke="#3a3e48" stroke-width="5" fill="none">' + Array.from({ length: 16 }, (_, i) => `<path d="M${i * 100},560 L${i * 100 + 50},480 L${i * 100 + 100},560"/>`).join("") + '<line x1="0" y1="480" x2="1600" y2="480"/><line x1="0" y1="560" x2="1600" y2="560" stroke-width="10"/></g>');
    for (let x = 100; x < 1600; x += 300) s.rect(x - 16, 560, 32, 120, "#4a4e58");
    for (let i = 0; i < 26; i++) s.person(300 + i * 34, 556, 22, { color: "#2a2e38", walk: true });
    return s.snowfall({ count: 60 });
  },
  // Lorries queuing at a border checkpoint to cross a river bridge, a bright city on one bank and dark hills on the other.
  "cn_kp-2": (s) => {
    s.sky("dusk", { top: "#2a3448", bottom: "#a88a8a" });
    s.city({ y: 480, x0: -20, x1: 700, style: "towers", h: [120, 300], depth: 0.25, lit: true });
    s.hills({ y: 480, amp: 100, color: "#1e2420", depth: 0.2, x0: 900 });
    for (let i = 0; i < 6; i++) s.add(`<circle cx="${1000 + s.r() * 500}" cy="${460 + s.r() * 20}" r="2" fill="#ffd38a"/>`);
    s.sea(500, { color: "#2a3448" });
    s.bridge(500, 1300, 560, { pier: 80, span: 200, color: "#6a6e74" });
    s.rect(380, 520, 120, 40, "#d9d2c2");
    for (let i = 0; i < 6; i++) s.vehicle("truck", 160 + i * 60 + (i > 2 ? 360 : 0), 560, { s: 0.4, color: "#c9c4bc" });
    return s.ground(560, "#3a3a40");
  },
  // A huge floodlit city square at night with a massed parade, giant missiles on launchers, grandstands, fireworks.
  "cn_kp-3": (s) => {
    s.sky("night", { stars: 20 });
    [[300, 140, "#ffd38a"], [800, 100, "#e86a8a"], [1300, 160, "#9fd0ff"]].forEach(([x, y, c]) => { s.glow(x, y, 70, c, 0.4); for (let i = 0; i < 16; i++) { const a = i * Math.PI / 8; s.add(`<line x1="${x}" y1="${y}" x2="${x + Math.cos(a) * 60}" y2="${y + Math.sin(a) * 60}" stroke="${c}" stroke-width="3"/>`); } });
    s.rect(200, 300, 1200, 60, "#a8322a").rect(160, 280, 1280, 24, "#d9d2c2");
    for (let i = 0; i < 200; i++) s.add(`<circle cx="${210 + s.r() * 1180}" cy="${310 + s.r() * 40}" r="3" fill="#2a2a2e"/>`);
    s.ground(360, "#4a4a50").glow(800, 600, 700, "#f4f8ff", 0.15);
    for (let r = 0; r < 4; r++) for (let c = 0; c < 26; c++) s.rect(140 + c * 50 + r * 6, 400 + r * 26, 10, 18, "#3a4a3a");
    for (let i = 0; i < 4; i++) { const y = 600 + i * 70; s.vehicle("truck", 500 + i * 30, y, { s: 1.2, color: "#4a5a44" }); s.add(`<rect x="${380 + i * 30}" y="${y - 86}" width="280" height="22" rx="11" fill="#6a7a64"/>`); }
    return s;
  },
};
