/* Belarus */
module.exports = {
  // A white and red-brick medieval castle with round and square towers reflected in a still lake, autumn forest, mist.
  "by-9": (s) => {
    s.sky("morning", { clouds: 2 });
    s.forest({ y: 470, type: "pine", s: 0.9, gap: 22, depth: 0.5 });
    s.rect(560, 300, 480, 170, "#d9cdb6");
    [560, 720, 880, 1040].forEach((x, i) => { s.rect(x - 40, 220 - (i % 2) * 40, 80, 250 + (i % 2) * 40, i % 2 ? "#a8564a" : "#e2d8c4"); s.poly([[x - 46, 220 - (i % 2) * 40], [x + 46, 220 - (i % 2) * 40], [x, 150 - (i % 2) * 40]], "#6a4a3c"); });
    s.forest({ y: 490, type: "birch", s: 0.8, gap: 40, x0: 0, x1: 520 }).forest({ y: 490, type: "autumn", s: 0.8, gap: 40, x0: 1080, x1: 1600 });
    s.sea(500, { color: "#7d96a8", lines: 40 });
    s.add('<g opacity="0.25" transform="translate(0,1000) scale(1,-1)"><rect x="560" y="330" width="480" height="170" fill="#d9cdb6"/></g>');
    return s.fog(510, { h: 70, opacity: 0.6 });
  },
  // A vast straight avenue lined with Stalin-era neoclassical buildings with columns and small towers, pale winter sky.
  "by-3": (s) => {
    s.sky("winter");
    s.ground(470, "concrete");
    for (let side = 0; side < 2; side++) for (let i = 0; i < 6; i++) {
      const t = i / 6, h = 360 * (1 - t * 0.7), w = 300 * (1 - t * 0.75), x = side ? 820 + 60 * t + 600 * (1 - t) : 780 - 60 * t - 600 * (1 - t) - w;
      s.building(x, 620 - 140 * t, w, h, { color: "#d9cdb6", cell: 22 * (1 - t * 0.6) + 6, depth: t * 0.5 });
      if (i % 2 === 0) s.spire(x + w / 2, 620 - 140 * t - h, 80 * (1 - t), { color: "#c9b89c", depth: t * 0.5 });
    }
    s.road({ vanish: [800, 480], w: 1500, color: "#8a8a88", line: false });
    return s.vehicle("car", 760, 700, { s: 0.8 }).vehicle("car", 880, 620, { s: 0.5, dir: -1 }).person(400, 760, 50).person(1220, 780, 54);
  },
  // A vast modern palace with a long white colonnade and a low glass dome on a huge empty square at dusk, lamps lit.
  "by-4": (s) => {
    s.sky("dusk");
    s.rect(200, 300, 1200, 260, "#ece6da");
    for (let i = 0; i < 24; i++) s.rect(230 + i * 48, 330, 18, 230, "#cfc8b8");
    s.rect(180, 280, 1240, 30, "#d9d2c2");
    s.add('<path d="M640,280 Q800,180 960,280 Z" fill="#8aa0b4" opacity="0.85"/>');
    s.ground(560, "#6a6a70");
    s.add('<polygon points="0,900 1600,900 1100,560 500,560" fill="#7a7a80"/>');
    return s.lamps(120, 1480, 640, 160, { gap: 230 });
  },
  // A long line of women in white with flowers seen from behind on a wide avenue, facing distant riot police.
  "by-5": (s) => {
    s.sky("afternoon");
    s.city({ y: 520, h: [140, 240], style: "old", color: "#cfc4b0", depth: 0.35 });
    s.ground(520, "#8a8a84");
    for (let i = 0; i < 26; i++) s.person(200 + i * 46, 560, 46, { color: "#2a2e36", helmet: true, depth: 0.25 });
    s.rect(180, 520, 1240, 30, "#3a3e46", 'opacity="0.6"');
    for (let i = 0; i < 24; i++) { const x = 50 + i * 64 + s.r() * 16, h = 120 + s.r() * 20; s.person(x, 860, h, { color: s.r.pick(["#ece8de", "#e2ddd0", "#f4f0e6"]) }); s.add(`<circle cx="${x}" cy="${860 - h + 14}" r="${h * 0.13}" fill="${s.r.pick(["#5a4030", "#8a6a40", "#3a2a24", "#c9a46a"])}"/><circle cx="${x + 26}" cy="${860 - h * 0.62}" r="13" fill="${s.r.pick(["#c94a4a", "#e8d24a", "#d97aa0"])}"/>`); }
    return s;
  },
  // A column of large green missile launcher trucks with long covered tubes on a road through dark pine forest, mist.
  "by-6": (s) => {
    s.sky("overcast", { top: "#7a8288" });
    s.forest({ y: 520, type: "pine", s: 1.5, gap: 24, depth: 0.45 });
    s.fog(540, { h: 90, opacity: 0.6 });
    s.ground(560, "#4a5440");
    s.rect(0, 690, 1600, 110, "#55585c");
    [[300, 1.3], [800, 1.3], [1300, 1.3]].forEach(([x, k]) => {
      s.vehicle("truck", x, 780, { s: k * 1.4, color: "#4a5440", dir: -1 });
      s.add(`<rect x="${x - 100 * k}" y="636" width="${300 * k}" height="46" rx="18" fill="#5a6450"/><rect x="${x - 110 * k}" y="646" width="14" height="30" fill="#3a4034"/>`);
    });
    s.forest({ y: 900, type: "pine", s: 2.6, gap: 140, x0: -60, x1: 160 });
    return s;
  },
  // A white minibus at a remote forest border crossing at dawn, a raised barrier, a few people with bags walking to it.
  "by-7": (s) => {
    s.sky("dawn");
    s.forest({ y: 520, type: "pine", s: 1.2, gap: 24, depth: 0.4 });
    s.fog(540, { h: 80, opacity: 0.6 });
    s.ground(540, "#6a7058");
    s.road({ vanish: [800, 520], w: 1100, color: "#6a6a6a" });
    s.rect(1040, 560, 160, 110, "#d9d2c2").rect(1030, 545, 180, 20, "#6a6a6a");
    s.add('<line x1="1000" y1="640" x2="1080" y2="460" stroke="#c94a3a" stroke-width="10" stroke-dasharray="30 20"/>');
    s.vehicle("bus", 560, 760, { s: 1.1, color: "#ece8de" });
    return s.person(820, 720, 90, { bundle: "#6a5a4a" }).person(880, 700, 84, { bundle: "#4a5a6a" }).person(940, 690, 80);
  },
  // A memorial field in a snowy clearing with rows of tall grey chimney-shaped stone columns, birches, a grey sky.
  "by-10": (s) => {
    s.sky("winter", { top: "#8a929a" });
    s.forest({ y: 470, type: "birch", s: 1.3, gap: 30, depth: 0.5 });
    s.ground(480, "snow");
    for (let r = 0; r < 4; r++) for (let i = 0; i < 7; i++) {
      const y = 540 + r * 90, k = 0.7 + r * 0.25, x = 160 + i * 210 + (r % 2) * 100;
      s.rect(x - 22 * k, y - 220 * k, 44 * k, 220 * k, "#6a6a6e").rect(x - 28 * k, y - 230 * k, 56 * k, 16 * k, "#5a5a5e");
      s.add(`<path d="M${x - 10 * k},${y - 246 * k} A${10 * k},${12 * k} 0 0 1 ${x + 10 * k},${y - 246 * k} Z" fill="#8a8070"/>`);
    }
    return s.snowfall({ count: 120 });
  },
  // An abandoned village of weathered wooden houses overgrown by trees and grass, a rusted blank sign, an empty road.
  "by-11": (s) => {
    s.sky("haze");
    s.forest({ y: 480, type: "oak", s: 1, gap: 40, depth: 0.4 });
    s.ground(500, "#8a925a");
    [[180, 640], [520, 600], [1000, 620], [1320, 660]].forEach(([x, y]) => { s.house(x, y, 200, 130, { color: "#7a6a54", roofColor: "#5a4e44" }); s.tree("oak", x + 40, y + 20, { s: 1.4, color: "#6a7a4a" }); });
    s.road({ vanish: [800, 500], w: 500, color: "#7a7468", line: false });
    s.rect(820, 640, 8, 140, "#6a5a4a").rect(780, 600, 90, 60, "#9a6a3a");
    return s.field(720, 900, { color: "#a8a86a", rows: 30 });
  },
  // A tall steel border fence with coiled razor wire through a dark pine forest at night, pale balloons, a bright moon.
  "by-12": (s) => {
    s.sky("night", { moon: [1200, 180], r: 50 });
    s.forest({ y: 560, type: "pine", s: 1.5, gap: 24, depth: 0.2 });
    s.ground(600, "#1e2630");
    s.add(Array.from({ length: 40 }, (_, i) => `<rect x="${i * 42}" y="380" width="8" height="300" fill="#4a5462"/>`).join(""));
    s.add('<rect x="0" y="380" width="1600" height="300" fill="#5a6676" opacity="0.25"/>');
    s.add(Array.from({ length: 60 }, (_, i) => `<circle cx="${i * 28}" cy="370" r="14" fill="none" stroke="#8a96a6" stroke-width="2"/>`).join(""));
    [[400, 200], [700, 120], [980, 260], [1400, 140]].forEach(([x, y]) => s.add(`<circle cx="${x}" cy="${y}" r="16" fill="#e8e6dc" opacity="0.85"/><line x1="${x}" y1="${y + 16}" x2="${x}" y2="${y + 50}" stroke="#c9c6bc" stroke-width="1.5"/><rect x="${x - 6}" y="${y + 50}" width="12" height="9" fill="#8a7a5a"/>`));
    return s;
  },
  // A modern glass skyline across a calm river at dusk, an old white church with a small dome on the near bank, lamps.
  "by-8": (s) => {
    s.sky("dusk");
    s.city({ y: 500, h: [120, 300], style: "towers", depth: 0.3, lit: true });
    s.sea(500, { lines: 40 });
    s.ground(720, "#4a4e48");
    s.church(420, 720, 1.1, { color: "#ece6da", dome: "#5a7a6a", domes: 3 });
    return s.lamps(600, 1560, 740, 110, { gap: 160 });
  }
};
