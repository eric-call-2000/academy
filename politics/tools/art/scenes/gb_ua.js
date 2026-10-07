/* United Kingdom & Ukraine */
module.exports = {
  // A long missile on a heavy wheeled transporter leaving a snowy pine-forest base, open silo covers behind.
  "gb_ua-1": (s) => {
    s.sky("winter", { clouds: 3 })
      .forest({ y: 450, type: "pine", s: 0.9, depth: 0.45, gap: 16, color: "#4a5e52" });
    s.ground(470, "snow");
    [[320, 520], [620, 540], [1240, 520]].forEach(([x, y]) => { s.add(`<ellipse cx="${x}" cy="${y}" rx="70" ry="16" fill="#5a5e60"/><ellipse cx="${x}" cy="${y - 4}" rx="56" ry="11" fill="#2a2d30"/>`); s.rect(x + 40, y - 40, 90, 14, "#6a6e70"); });
    s.barracks(860, 520, 280, { h: 50, snow: true });
    const y = 720;
    s.rect(260, y - 70, 1000, 40, "#5c6150").rect(1260, y - 110, 120, 80, "#4f5446");
    for (let x = 300; x < 1380; x += 90) s.add(`<circle cx="${x}" cy="${y - 18}" r="22" fill="#2a2a2a"/>`);
    s.add(`<rect x="300" y="${y - 120}" width="920" height="50" rx="24" fill="#6f7466"/><path d="M1220,${y - 120} L1280,${y - 95} L1220,${y - 70} Z" fill="#6f7466"/>`);
    s.forest({ y: 780, x0: -60, x1: 200, type: "pine", s: 1.8, color: "#3f5246" }).forest({ y: 790, x0: 1420, x1: 1660, type: "pine", s: 1.8, color: "#3f5246" });
    s.snowfall({ count: 110 });
    return s;
  },
  // A heavy battle tank driving across a churned muddy training ground on a grey English morning, hedgerows, mist.
  "gb_ua-2": (s) => {
    s.sky("overcast", { clouds: 5 })
      .hills({ y: 440, amp: 70, color: "green", depth: 0.55 });
    s.fog(450, { h: 70, opacity: 0.6 });
    for (let x = -20; x < 1620; x += 26) s.tree("oak", x + s.r() * 10, 470 + s.r() * 6, { s: 0.45, depth: 0.35 });
    s.ground(480, "#6a5c48");
    for (let i = 0; i < 16; i++) { const x = s.r() * 1600, y = 560 + s.r() * 320; s.add(`<ellipse cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" rx="${(40 + s.r() * 90).toFixed(0)}" ry="${(6 + s.r() * 10).toFixed(0)}" fill="#9aa5a8" opacity="0.55"/>`); }
    s.add('<path d="M-20,760 Q600,640 1640,600" stroke="#4e4436" stroke-width="40" fill="none" opacity="0.5"/><path d="M-20,820 Q600,700 1640,660" stroke="#4e4436" stroke-width="40" fill="none" opacity="0.5"/>');
    s.vehicle("tank", 760, 720, { s: 3.4, color: "#5a5f4c" });
    s.smoke(500, 660, { len: 300, dir: -1, rise: 0.2, color: "#8c8476" });
    return s;
  },
  // A memorial wall of small portrait photographs, candles and wreaths beside a blue and white monastery with golden domes, light snow.
  "gb_ua-3": (s) => {
    s.sky("winter", { clouds: 4 });
    s.forest({ y: 470, type: "bare", s: 0.8, depth: 0.4, gap: 40 });
    s.rect(600, 250, 720, 260, s.c("#eef0f2", 0.05)).rect(600, 250, 720, 34, s.c("#6f9ac4", 0.05));
    for (let i = 0; i < 8; i++) s.path(`M${640 + i * 86},420 L${640 + i * 86},350 A16,16 0 0 1 ${672 + i * 86},350 L${672 + i * 86},420 Z`, s.c("#4a6a8a", 0.1));
    [[760, 250, 50], [960, 240, 74], [1160, 250, 50]].forEach(([x, y, r]) => { s.rect(x - r * 0.6, y - r * 1.3, r * 1.2, r * 1.3, s.c("#6f9ac4", 0.05)); s.onion(x, y - r * 1.3, r * 0.85, { depth: 0.05 }); });
    s.ground(510, "snow");
    s.rect(-20, 540, 1640, 10, "#6a5048");
    s.rect(-20, 550, 1640, 160, "#8a6a5a");
    for (let row = 0; row < 4; row++) for (let x = 10 + (row % 2) * 14; x < 1600; x += 30) s.rect(x, 560 + row * 37, 20, 28, s.r.pick(["#d9d2c2", "#c9c1b0", "#bfb7a6", "#e2dccd", "#a9a296"]));
    s.ground(712, "snow");
    s.candles(80, 1520, 740, 70);
    [220, 640, 1080, 1420].forEach((x) => s.add(`<circle cx="${x}" cy="700" r="40" fill="none" stroke="#3f5e3a" stroke-width="16"/><circle cx="${x}" cy="700" r="40" fill="none" stroke="#c9463c" stroke-width="4" stroke-dasharray="10 20"/>`));
    s.snowfall({ count: 140 });
    return s;
  },
};
