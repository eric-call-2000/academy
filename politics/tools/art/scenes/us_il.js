/* United States and Israel */
module.exports = {
  // A huge grey 1970s cargo plane with its rear ramp open on a desert airfield at dawn, pallets unloaded by forklifts.
  "us_il-1": (s) => {
    s.sky("dawn", { bottom: "#f2d0a0" });
    s.hills({ y: 460, amp: 80, color: "#a8906c", depth: 0.5 });
    s.ground(480, "#9a8a72");
    s.add('<path d="M200,520 Q220,440 320,430 L1100,420 L1300,330 L1360,330 L1320,430 Q1360,470 1300,520 Z" fill="#8a9094"/><polygon points="200,520 260,500 160,620 100,620" fill="#6a7074"/><path d="M500,430 L740,340 L800,340 L700,430 Z" fill="#7a8084"/>');
    for (let i = 0; i < 6; i++) s.crate(60 + i * 70, 700, 56, 40, { color: "#6a6a4a" });
    s.vehicle("pickup", 520, 720, { s: 0.9, color: "#d9a02c" });
    return s.fog(500, { h: 80, color: "#f2d0a0", opacity: 0.4 });
  },
  // A mobile air-defence battery on a rocky hillside at night launching an interceptor, a glowing trail, city lights below.
  "us_il-2": (s) => {
    s.sky("night", { stars: 40 });
    for (let i = 0; i < 300; i++) s.add(`<circle cx="${s.r() * 1600}" cy="${600 + s.r() * 120}" r="1.6" fill="#ffd38a"/>`);
    s.ridge({ y: 900, amp: 300, color: "#1e2026", peak: 400, peakW: 700, jag: true });
    s.vehicle("truck", 420, 640, { s: 1.2, color: "#3a3e34" });
    s.add('<rect x="380" y="560" width="120" height="40" fill="#4a4e44" transform="rotate(-30 440 580)"/>');
    s.missile(460, 560, { len: 600, angle: -60, curve: 60 });
    return s.glow(460, 560, 100, "#ffb85a", 0.7);
  },
  // The white Capitol dome at dusk, a small crowd of protesters with blank signs on the lawn, street lamps coming on.
  "us_il-3": (s) => {
    s.sky("dusk", { top: "#4a4a7a", bottom: "#c4a0c0" });
    s.capitol(800, 520, 0.85);
    s.ground(520, "#4f6a44");
    s.lamps(100, 1500, 640, 120, { gap: 350 });
    return s.crowd({ y: 760, x0: 400, x1: 1200, rows: 2, h: 90, gap: 34, rowGap: 40, signs: 10, colors: ["#2a2c34", "#3a3030", "#4a4a5a"] });
  },
};
