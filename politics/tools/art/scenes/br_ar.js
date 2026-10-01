/* Brazil and Argentina */
module.exports = {
  // Enormous curtains of waterfalls plunging into a misty horseshoe gorge in lush subtropical forest, a rainbow, birds.
  "br_ar-1": (s) => {
    s.sky("day", { clouds: 3 });
    s.forest({ y: 360, type: "oak", s: 0.8, gap: 24, color: "#3f6a3a" });
    s.add('<path d="M100,360 Q800,200 1500,360 L1500,400 Q800,240 100,400 Z" fill="#4f7a44"/>');
    for (let i = 0; i < 40; i++) { const t = i / 40, x = 100 + t * 1400, y = 380 - Math.sin(t * Math.PI) * 140; s.rect(x, y, 28, 520 - (380 - y), "#eef4f6", 'opacity="0.85"'); }
    s.fog(760, { h: 260, color: "#ffffff", opacity: 0.7 });
    for (let k = 0; k < 6; k++) s.add(`<path d="M300,800 A500,400 0 0 1 1300,800" stroke="${["#e86a4a", "#e8a02c", "#e8e02c", "#5fcf7a", "#5fa0e8", "#8a6ae8"][k]}" stroke-width="10" fill="none" opacity="0.25" transform="translate(0,${k * 10})"/>`);
    return s.birds(1200, 200, 8).forest({ y: 900, type: "oak", s: 2, gap: 80, color: "#2f5a2a" });
  },
  // A line of cargo trucks approaching a border checkpoint on a bridge over a wide brown river, flat farmland, hazy sun.
  "br_ar-2": (s) => {
    s.sky("haze", { sun: [400, 300], r: 40 });
    s.ground(440, "#7a9a5a").field(440, 900, { color: "#8aaa5a" });
    s.sea(480, { color: "#8a6a4a" }).rect(0, 600, 1600, 300, "#7a9a5a");
    s.bridge(-20, 1620, 520, { pier: 80, span: 200, color: "#9a948a" });
    s.rect(1300, 450, 200, 50, "#d9d2c2");
    for (let i = 0; i < 9; i++) s.vehicle("truck", 100 + i * 130, 512, { s: 0.55, color: s.r.pick(["#d9d2c2", "#3f6aa8", "#8a3a2a"]) });
    return s;
  },
  // An elegant empty embassy of pale stone behind a closed black iron gate on a leafy street at dusk, one window lit.
  "br_ar-3": (s) => {
    s.sky("dusk");
    s.rect(300, 220, 1000, 420, "#d9cdb6");
    for (let r = 0; r < 3; r++) for (let i = 0; i < 8; i++) s.rect(360 + i * 116, 260 + r * 120, 50, 80, r === 1 && i === 5 ? "#ffd38a" : "#4a4a52");
    s.forest({ y: 640, x0: -40, x1: 300, type: "oak", s: 2, gap: 100 }).forest({ y: 640, x0: 1300, x1: 1640, type: "oak", s: 2, gap: 100 });
    s.ground(640, "#5a5a5e");
    s.add('<g stroke="#121212" stroke-width="5">' + Array.from({ length: 30 }, (_, i) => `<line x1="${300 + i * 34}" y1="900" x2="${300 + i * 34}" y2="620"/>`).join("") + '<line x1="300" y1="660" x2="1300" y2="660"/></g>');
    return s.lamps(160, 1440, 900, 300, { gap: 1280, lit: true });
  },
};
