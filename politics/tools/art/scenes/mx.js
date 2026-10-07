/* Mexico */
const cathedral = (s, x, y, k, o) => {
  o = o || {};
  const c = s.c(o.color || "#b8a07a", o.depth);
  s.rect(x - 200 * k, y - 240 * k, 400 * k, 240 * k, c);
  [-1, 1].forEach((d) => { s.rect(x + d * 160 * k - 44 * k, y - 400 * k, 88 * k, 400 * k, c); s.dome(x + d * 160 * k, y - 400 * k, 40 * k, { color: s.c("#9a8a6a", o.depth) }); });
  s.dome(x, y - 240 * k, 80 * k, { color: s.c("#c9b892", o.depth) });
  s.add(`<path d="M${x - 40 * k},${y} L${x - 40 * k},${y - 100 * k} A${40 * k},${40 * k} 0 0 1 ${x + 40 * k},${y - 100 * k} L${x + 40 * k},${y} Z" fill="${s.c("#4a3a2a", o.depth)}"/>`);
};
module.exports = {
  // A colonial stone church with a bell tower at dawn, villagers in early-19th-century clothes gathered in the plaza.
  "mx-9": (s) => {
    s.sky("dawn", { top: "#7a6a8a", bottom: "#f2a06a" });
    s.rect(500, 300, 360, 260, "#c9a07a").rect(860, 160, 120, 400, "#c9a07a").dome(920, 160, 50, { color: "#b8906a" });
    s.add('<path d="M640,560 L640,460 A40,40 0 0 1 720,460 L720,560 Z" fill="#4a3a2a"/><path d="M900,260 L900,220 A20,20 0 0 1 940,220 L940,260 Z" fill="#4a3a2a"/>');
    s.ground(560, "#b8986a");
    s.crowd({ y: 640, rows: 6, h: 64, gap: 18, rowGap: 44, colors: ["#e8e0cf", "#5a4a3c", "#3a3030", "#b05a44", "#8a6a4a"] });
    for (let i = 0; i < 12; i++) { const x = s.r() * 1600, y = 600 + s.r() * 200; s.add(`<ellipse cx="${x}" cy="${y - 70}" rx="34" ry="8" fill="#c9b07a"/>`); }
    for (let i = 0; i < 6; i++) { const x = s.r() * 1600; s.add(`<line x1="${x}" y1="${640}" x2="${x + 20}" y2="${520}" stroke="#4a3a2a" stroke-width="4"/>`); }
    return s;
  },
  // A vast empty stone square at dawn: a baroque cathedral, a long red-stone palace, a huge bare flagpole, pigeons.
  "mx-3": (s) => {
    s.sky("dawn", { top: "#a8a0c0", bottom: "#f2c8c0" });
    cathedral(s, 400, 480, 0.8);
    s.rect(800, 320, 800, 160, "#a8544a");
    for (let i = 0; i < 18; i++) s.rect(820 + i * 42, 360, 18, 40, "#5a3a32");
    s.ground(480, "#b8b0a2");
    s.add('<line x1="900" y1="740" x2="900" y2="100" stroke="#5a5a5a" stroke-width="10"/><rect x="860" y="730" width="80" height="20" fill="#9a948a"/>');
    return s.birds(700, 300, 18, { color: "#5a5a5a" });
  },
  // A castle on a wooded hill above a park, a white marble monument of six tall columns, a few people walking.
  "mx-10": (s) => {
    s.sky("afternoon");
    s.hills({ y: 460, amp: 200, color: "forest", peak: 1100, peakW: 400, depth: 0.25 });
    s.rect(980, 200, 260, 90, "#d9cdb6").rect(1200, 170, 50, 120, "#d9cdb6");
    s.forest({ y: 520, type: "oak", s: 1, gap: 40, color: "#4f7a4a", depth: 0.15 });
    s.ground(520, "#7a9a5a");
    s.rect(240, 680, 640, 40, "#e8e2d2");
    for (let i = 0; i < 6; i++) { const x = 280 + i * 116, h = i === 0 || i === 5 ? 320 : 360; s.rect(x - 16, 680 - h, 32, h, "#f4f1ea"); s.person(x, 680 - h, 30, { color: "#cfc8b8" }); }
    return s.person(1000, 700, 50).person(1040, 706, 46, { color: "#5a4a3c" });
  },
  // Revolutionary horsemen in wide straw sombreros riding across a dusty plain toward blue mountains, agaves.
  "mx-11": (s) => {
    s.sky("golden", { sun: [1300, 400], r: 40 });
    s.mountains({ y: 480, amp: 160, color: "#6a7aa0", depth: 0.5 });
    s.ground(480, "#c9a06a").fog(520, { h: 120, color: "#e8c890", opacity: 0.5 });
    for (let i = 0; i < 9; i++) { const x = 300 + i * 120 + s.r() * 40, y = 620 + (i % 3) * 50, k = 0.8 + (y - 620) / 300; s.add(`<g fill="#3a2a22"><ellipse cx="${x}" cy="${y - 40 * k}" rx="${40 * k}" ry="${18 * k}"/>${[-30, -14, 14, 30].map((d) => `<rect x="${x + d * k}" y="${y - 30 * k}" width="${5 * k}" height="${30 * k}"/>`).join("")}<rect x="${x + 30 * k}" y="${y - 72 * k}" width="${12 * k}" height="${36 * k}" transform="rotate(20 ${x + 36 * k} ${y - 54 * k})"/></g>`); s.person(x, y - 46 * k, 54 * k, { color: "#e8e0cf" }); s.add(`<ellipse cx="${x}" cy="${y - 96 * k}" rx="${26 * k}" ry="${6 * k}" fill="#d9b86a"/><ellipse cx="${x}" cy="${y - 102 * k}" rx="${10 * k}" ry="${8 * k}" fill="#d9b86a"/>`); }
    for (let i = 0; i < 6; i++) { const x = 100 + i * 290, y = 820; s.add(Array.from({ length: 7 }, (_, k) => `<path d="M${x},${y} Q${x + (k - 3) * 20},${y - 60} ${x + (k - 3) * 34},${y - 90}" stroke="#5a7a6a" stroke-width="10" fill="none"/>`).join("")); }
    return s;
  },
  // An ornate colonial hall with carved ceilings and arches, a lectern with microphones before empty folding chairs.
  "mx-4": (s) => {
    s.mood("morning", { light: "#fff2d0" });
    s.room3d({ depth: 2.8, wall: "#c9b08a", side: "#b8a07a", floor: "#8a6a4a", ceiling: "#6a4a30", windows: { n: 3, side: "left", top: 100, bottom: 600, arched: true } });
    s.persp({ vanish: [800, 414], depth: 2.8 });
    s.quad("front", [500, 1100, 200, 520, 2.8], "#efe9dc");
    s.box3d(760, 840, 620, 900, 2.4, 2.5, "#5a3e2a");
    const p = s.pp(800, 620, 2.4); for (let i = 0; i < 5; i++) s.add(`<line x1="${p[0] - 20 + i * 10}" y1="${p[1]}" x2="${p[0] - 30 + i * 15}" y2="${p[1] - 30}" stroke="#1a1a1a" stroke-width="3"/><circle cx="${p[0] - 30 + i * 15}" cy="${p[1] - 32}" r="4" fill="#1a1a1a"/>`);
    return s.chairs3d(300, 1300, 1.2, 2.0, { count: 4, gap: 140, color: "#6a6e72" });
  },
  // A school courtyard polling station: cardboard booths, very long folded ballots on a table, two voters, midday.
  "mx-5": (s) => {
    s.sky("desert", { top: "#5f8ab8" });
    s.rect(0, 160, 1600, 420, "#e0a05a");
    s.add('<path d="M0,420 Q400,360 800,420 T1600,400 L1600,580 L0,580 Z" fill="#3f8a9a" opacity="0.7"/><circle cx="300" cy="300" r="80" fill="#e8c42c" opacity="0.8"/>');
    s.ground(580, "#c9b89a");
    s.booths(900, 1400, 700, { color: "#c9b08a", w: 110 });
    s.rect(300, 680, 400, 16, "#8a6a4a").rect(320, 696, 10, 90, "#6a4a30").rect(670, 696, 10, 90, "#6a4a30");
    for (let i = 0; i < 4; i++) s.rect(330 + i * 90, 660, 70, 20, "#f4f1ea");
    return s.person(780, 800, 170, { color: "#3a3e46" }).person(1000, 760, 150, { color: "#5a3a3a" });
  },
  // A highway at night blocked by two burning abandoned vehicles, thick smoke, a city glowing on the hills.
  "mx-6": (s) => {
    s.sky("night", { stars: 20 });
    s.hills({ y: 460, amp: 100, color: "#1e2026", depth: 0.2 });
    for (let i = 0; i < 200; i++) s.add(`<circle cx="${s.r() * 1600}" cy="${400 + s.r() * 70}" r="1.6" fill="#ffb85a" opacity="0.8"/>`);
    s.glow(800, 440, 700, "#ff8a3c", 0.2);
    s.ground(480, "#1e1e22").road({ vanish: [800, 480], w: 1800, color: "#2a2a2e" });
    s.vehicle("truck", 600, 720, { s: 2, color: "#2a2422" }).vehicle("car", 1040, 760, { s: 2.2, color: "#2a2422", dir: -1 });
    return s.fire(640, 640, 120).fire(1040, 700, 90);
  },
  // A modern car assembly line: orange robot arms welding bare car bodies, sparks, clean floors, a few workers.
  "mx-7": (s) => {
    s.mood("day", { light: "#ffffff" });
    s.room3d({ depth: 4, wall: "#d9dcdc", side: "#c9cccc", floor: "#a8acae", ceiling: "#b8bcbe", lights: "strips" });
    for (let i = 5; i >= 0; i--) { const z = 1.3 + i * 0.45, p = s.pp(800, 900, z), k = 1 / z; s.add(`<path d="M${p[0] - 140 * k},${p[1] - 40 * k} L${p[0] - 140 * k},${p[1] - 110 * k} L${p[0] - 70 * k},${p[1] - 120 * k} L${p[0] - 30 * k},${p[1] - 180 * k} L${p[0] + 70 * k},${p[1] - 180 * k} L${p[0] + 110 * k},${p[1] - 120 * k} L${p[0] + 150 * k},${p[1] - 110 * k} L${p[0] + 150 * k},${p[1] - 40 * k} Z" fill="#b8bcc0"/>`); [-1, 1].forEach((d) => { const bx = p[0] + d * 320 * k; s.add(`<path d="M${bx},${p[1]} L${bx},${p[1] - 160 * k} L${bx - d * 120 * k},${p[1] - 260 * k} L${bx - d * 180 * k},${p[1] - 190 * k}" stroke="#e0782c" stroke-width="${24 * k}" fill="none" stroke-linecap="round"/>`); s.glow(bx - d * 180 * k, p[1] - 190 * k, 40 * k, "#fff4b0", 0.9); }); }
    return s.figure3d(300, 2.6, { h: 360, color: "#3a4a6a" }).figure3d(1300, 3.2, { h: 360, color: "#3a4a6a" });
  },
  // Women in wide-brimmed hats and long sleeves walking dry scrubland with shovels and long metal rods, cacti.
  "mx-12": (s) => {
    s.sky("haze", { top: "#d9c8a8" });
    s.mountains({ y: 460, amp: 100, color: "#b8a08a", depth: 0.6 });
    s.ground(480, "#c9a87a");
    for (let i = 0; i < 40; i++) s.add(`<ellipse cx="${s.r() * 1600}" cy="${500 + s.r() * 400}" rx="${14 + s.r() * 20}" ry="8" fill="#8a8a5a"/>`);
    [[200, 700], [1400, 640]].forEach(([x, y]) => s.add(`<g fill="#5a7a4a"><rect x="${x - 14}" y="${y - 160}" width="28" height="160" rx="14"/><rect x="${x - 50}" y="${y - 110}" width="20" height="60" rx="10"/><rect x="${x - 50}" y="${y - 70}" width="50" height="16" rx="8"/><rect x="${x + 30}" y="${y - 130}" width="20" height="70" rx="10"/><rect x="${x}" y="${y - 76}" width="50" height="16" rx="8"/></g>`));
    [[600, 760], [760, 740], [920, 770], [1060, 750]].forEach(([x, y], i) => { s.person(x, y, 150, { color: ["#6a4a5a", "#3a5a6a", "#7a5a3a", "#4a4a5a"][i], walk: true }); s.add(`<ellipse cx="${x}" cy="${y - 140}" rx="34" ry="8" fill="#d9c49a"/><line x1="${x + 20}" y1="${y - 100}" x2="${x + 50}" y2="${y + 10}" stroke="#5a5a5a" stroke-width="3"/>`); });
    return s;
  },
  // A wide border crossing at dawn: lanes of trucks and cars under a long canopy of inspection booths, a desert city.
  "mx-8": (s) => {
    s.sky("dawn", { top: "#b8a8a0", bottom: "#f2d8a0" });
    s.hills({ y: 440, amp: 120, color: "#9a7a5a", depth: 0.4 });
    s.city({ y: 470, h: [20, 60], color: "#c9b8a0", depth: 0.4, lit: false });
    s.ground(470, "#b8a080");
    s.rect(200, 400, 1200, 40, "#d9d2c2").rect(200, 440, 1200, 10, "#9a948a");
    for (let i = 0; i < 12; i++) s.rect(230 + i * 100, 450, 40, 80, "#e8e2d2");
    s.rect(0, 530, 1600, 370, "#7a7672");
    for (let l = 0; l < 6; l++) for (let k = 0; k < 4; k++) s.vehicle(k % 2 ? "car" : "truck", 280 + l * 200, 600 + k * 90, { s: 0.6 + k * 0.15, color: s.r.pick(["#d9d2c2", "#6a7a8a", "#8a3a2a", "#3a3a3e"]) });
    return s.fog(500, { h: 100, color: "#f2d8a0", opacity: 0.4 });
  },
};
