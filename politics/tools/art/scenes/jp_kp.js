/* Japan & North Korea */
module.exports = {
  // A large 1950s passenger ship leaving a snowy Japanese harbour, a crowd on the quay with paper streamers and plain banners.
  "jp_kp-1": (s) => {
    s.sky("winter", { clouds: 5 });
    s.mountains({ y: 420, amp: 120, color: "rock", depth: 0.7, snow: 0.4 });
    s.sea(430, { color: "#6f8496" });
    s.ship("liner", 980, 560, { s: 2.6, smoke: true });
    s.building(-20, 600, 300, 110, { color: "#8a8478", cell: 18, roof: "flatdark" });
    s.rect(-20, 600, 1640, 300, s.c("#9a968c", 0));
    s.rect(-20, 600, 1640, 10, "#6a665e");
    for (let i = 0; i < 70; i++) { const x0 = 300 + s.r() * 1100, y0 = 700 + s.r() * 60, x1 = 760 + s.r() * 520, y1 = 470 + s.r() * 60; s.add(`<path d="M${x0.toFixed(0)},${y0.toFixed(0)} Q${((x0 + x1) / 2).toFixed(0)},${(Math.max(y0, y1) - 40).toFixed(0)} ${x1.toFixed(0)},${y1.toFixed(0)}" stroke="${s.r.pick(["#e8e2d2", "#d98a8a", "#e2c84a", "#8ab0d9", "#c9e0b0"])}" stroke-width="1.6" fill="none" opacity="0.75"/>`); }
    s.crowd({ y: 740, rows: 3, h: 70, gap: 24, rowGap: 44, banners: 3, thin: 0.12, colors: ["#3b3a3f", "#4a4036", "#363d4f", "#2c2f38"] });
    s.snowfall({ count: 120 });
    return s;
  },
  // A deserted sandy beach on the Sea of Japan coast at dusk, pines on the dunes, a small dark boat offshore, distant town lights.
  "jp_kp-2": (s) => {
    s.sky("wintdusk", { clouds: 3 });
    s.ridge({ y: 440, amp: 40, color: "#3a4256", depth: 0.4, x0: 1000 });
    for (let i = 0; i < 16; i++) s.add(`<circle cx="${(1080 + s.r() * 500).toFixed(0)}" cy="${(432 + s.r() * 10).toFixed(0)}" r="2.4" fill="#ffd38a"/>`);
    s.sea(445, { color: "#3d4c66" });
    s.ship("boat", 560, 520, { s: 0.9, color: "#1c222c", cabin: "#2a303a" });
    s.add('<path d="M-20,640 Q500,600 1000,640 T1640,620 L1640,900 L-20,900 Z" fill="#b8a888"/>');
    s.add('<path d="M-20,700 Q600,660 1640,690" stroke="#e9ecef" stroke-width="5" fill="none" opacity="0.5"/>');
    s.forest({ y: 680, x0: -40, x1: 620, type: "pine", s: 1.4, gap: 70, color: "#2f3e38" });
    return s;
  },
  // A missile-defence launcher truck with raised canisters on a grassy slope above a Japanese city at dawn, a thin contrail.
  "jp_kp-3": (s) => {
    s.sky("dawn", { clouds: 2 });
    s.missile(300, 300, { len: 900, angle: -8, w: 3, head: 3, curve: -40 });
    s.mountains({ y: 470, amp: 120, color: "forest", depth: 0.6, jag: false });
    s.city({ y: 560, h: [20, 90], depth: 0.4, wmin: 20, wmax: 60 });
    s.river({ from: [700, 560], to: [1100, 640], w0: 30, w1: 90, bend: 60 });
    s.ridge({ y: 680, amp: 120, color: "grass", x0: -20, x1: 1640 });
    s.ground(780, "grass");
    s.rect(560, 640, 420, 60, "#5c6150").rect(980, 600, 120, 100, "#4f5446");
    [600, 700, 800, 900, 1040].forEach((x) => s.add(`<circle cx="${x}" cy="700" r="20" fill="#2a2a2a"/>`));
    s.add('<g transform="translate(620,640) rotate(-28)"><rect x="0" y="-70" width="320" height="64" fill="#6f7466"/><rect x="0" y="-140" width="320" height="64" fill="#676c5e"/></g>');
    return s;
  },
};
