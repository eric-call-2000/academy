/* Netherlands */
/* A row of narrow gabled canal houses with step or bell gables, standing on the line y. */
const gables = (s, x0, x1, y, o) => {
  o = o || {};
  const cols = o.colors || ["#7a3a2e", "#5a3a30", "#8a5a3c", "#3e3a36", "#9a6a4a"];
  for (let x = x0; x < x1;) {
    const w = 70 + s.r() * 40, h = (o.h || 220) + s.r() * 60, c = s.c(s.r.pick(cols), o.depth);
    s.rect(x, y - h, w, h, c);
    s.poly([[x, y - h], [x + w, y - h], [x + w * 0.75, y - h - 30], [x + w * 0.6, y - h - 60], [x + w * 0.4, y - h - 60], [x + w * 0.25, y - h - 30]], c);
    for (let r = 0; r < 4; r++) for (let k = 0; k < 2; k++) s.rect(x + 12 + k * (w / 2), y - h + 20 + r * (h / 4.4), w / 2 - 24, h / 7, o.lit && s.r() < 0.4 ? s.m.light : s.c("#e8e2d4", (o.depth || 0) + 0.2));
    x += w + 2;
  }
  return s;
};

module.exports = {
  // A busy seventeenth-century harbour: tall-masted ships, gabled brick warehouses on a quay, rowing boats, a big sky.
  "nl-9": (s) => {
    s.sky("afternoon", { clouds: 6, cloudY: [60, 380], cloudColor: "#f4f0e6" });
    gables(s, -20, 1620, 520, { h: 160, depth: 0.25 });
    s.rect(0, 520, 1600, 20, "#6a5a4a");
    s.sea(540, { lines: 60 });
    [[330, 720, 0.9], [880, 650, 0.6], [1330, 760, 1.0]].forEach(([x, y, k]) => s.ship("tall", x, y, { s: k }));
    s.ship("boat", 650, 760, { s: 1.1 }).ship("boat", 1100, 820, { s: 1.2 });
    return s;
  },
  // A massive concrete and steel storm-surge barrier with tall piers and raised gates across a grey estuary, dunes.
  "nl-3": (s) => {
    s.sky("storm", { clouds: 4 });
    s.sea(470, { lines: 90 });
    for (let i = 0; i < 9; i++) { const x = 120 + i * 170; s.rect(x - 20, 300, 40, 260, "#8a8e90").rect(x - 30, 290, 60, 20, "#6a6e70"); if (i < 8) s.rect(x + 20, 330, 130, 50, "#5a6068"); }
    s.rect(0, 540, 1600, 24, "#7a7e80");
    s.ridge({ y: 800, amp: 120, color: "#c9b88a", x0: -20, x1: 900 });
    return s.forest({ y: 760, type: "bare", s: 0.4, gap: 20, x0: 0, x1: 700, color: "#8a8a5a" });
  },
  // A medieval red-brick hall with a tall gable and two slim towers in a cobbled courtyard, cyclists, grey-blue sky.
  "nl-4": (s) => {
    s.sky("overcast", { top: "#8a9aac" });
    s.building(-20, 620, 420, 320, { color: "#b09a84", cell: 30 });
    s.building(1200, 620, 420, 320, { color: "#b09a84", cell: 30 });
    s.rect(560, 300, 480, 320, "#8a3e30");
    s.poly([[560, 300], [1040, 300], [800, 110]], "#7a3428");
    [580, 1020].forEach((x) => { s.rect(x - 22, 160, 44, 460, "#7a3428"); s.poly([[x - 26, 160], [x + 26, 160], [x, 80]], "#3e4a52"); });
    s.add('<circle cx="800" cy="230" r="44" fill="#d9cdb6"/>');
    s.rect(740, 470, 120, 150, "#3a2a24");
    s.ground(620, "#8a857a");
    return s.bicycle(500, 760, 1.2).bicycle(1100, 800, 1.3).person(500, 740, 70, { color: "#3a3e46" }).person(1100, 780, 74, { color: "#4a3e3a" });
  },
  // A vast clean room in yellow light, a huge boxy machine the size of a bus, small figures in white suits beside it.
  "nl-5": (s) => {
    s.sky("interior", { mood: { light: "#fff3b0" } });
    s.room({ wall: "#d9c66a", floorY: 700, floor: "#e8dc9a", panels: 160 });
    s.rect(0, 0, 1600, 60, "#e8dca0");
    for (let i = 0; i < 8; i++) s.rect(60 + i * 200, 30, 120, 16, "#fff6c4");
    s.rect(360, 330, 880, 370, "#ece8de").rect(360, 330, 880, 40, "#cfcac0").rect(420, 400, 200, 220, "#d8d4ca").rect(980, 420, 200, 200, "#d8d4ca");
    s.pipes(360, 1240, 360, { color: "#a8a49a", count: 3 });
    [[300, 720], [1300, 720], [700, 760], [1000, 770]].forEach(([x, y]) => s.person(x, y, 110, { color: "#f4f2ec", robe: "#f4f2ec" }));
    return s.add('<rect width="1600" height="900" fill="#ffe680" opacity="0.08"/>');
  },
  // A long car assembly line: half-built bodies on a conveyor, orange robotic arms frozen, no workers, factory lights.
  "nl-6": (s) => {
    s.sky("interior");
    s.room({ wall: "#6a6e74", floorY: 600, floor: "#4a4e54" });
    for (let i = 0; i < 10; i++) s.rect(40 + i * 160, 40, 100, 14, "#f2efe4");
    s.rect(0, 620, 1600, 40, "#3a3e44");
    for (let i = 0; i < 5; i++) {
      const x = 120 + i * 320;
      s.add(`<path d="M${x},610 L${x + 30},540 L${x + 190},540 L${x + 230},580 L${x + 250},610 Z" fill="#b8bcc0"/><rect x="${x + 50}" y="550" width="60" height="30" fill="#5a6068"/>`);
      s.add(`<g stroke="#d9772c" stroke-width="18" stroke-linecap="round" fill="none"><path d="M${x + 260},660 L${x + 270},480 L${x + 200},430"/></g><circle cx="${x + 270}" cy="480" r="14" fill="#a85a1c"/>`);
    }
    return s.fog(800, { h: 120, opacity: 0.2 });
  },
  // A new suburb of red-brick terraced houses under construction by a canal and flat fields, cranes, distant turbines.
  "nl-7": (s) => {
    s.sky("morning", { clouds: 4 });
    s.turbines(900, 1580, 420, { h: 120, gap: 150, depth: 0.5 });
    s.ground(430, "#7a9a5a");
    s.towerCrane(380, 520, 1.1, { color: "#d9a43c" }).towerCrane(1050, 520, 0.9, { color: "#d9a43c" });
    for (let i = 0; i < 12; i++) { const x = 100 + i * 110; s.house(x, 560, 100, 90, { color: "#9a4a38", roofColor: "#3e3a3a" }); if (i > 8) s.add(`<g stroke="#8a8a84" stroke-width="3"><line x1="${x}" y1="470" x2="${x + 100}" y2="470"/><line x1="${x}" y1="500" x2="${x + 100}" y2="500"/></g>`); }
    s.rect(0, 600, 1600, 70, "#6a8aa0");
    return s.field(670, 900, { color: "#86a062", rows: 20 });
  },
  // A narrow brick canal house with a tall gable by a quiet canal at dusk, one attic window lit, a bare tree, a bicycle.
  "nl-10": (s) => {
    s.sky("wintdusk");
    gables(s, -20, 1620, 520, { h: 260, colors: ["#4a3430", "#3a2e2c", "#5a3a32"], depth: 0.1 });
    s.rect(806, 210, 30, 40, "#ffd38a");
    s.glow(820, 230, 60, "#ffd38a", 0.5);
    s.rect(0, 520, 1600, 26, "#3a3a3e");
    s.sea(546, { lines: 30, color: "#2e3a50" });
    s.tree("bare", 300, 540, { s: 2.6 });
    return s.bicycle(1100, 540, 1.1);
  },
  // A white colonial-era building with a red-tiled roof and arched veranda on a tropical waterfront, palms, outrigger boats.
  "nl-11": (s) => {
    s.sky("tropical", { clouds: 3 });
    s.hills({ y: 420, amp: 90, color: "#4f7a5a", depth: 0.5 });
    s.building(400, 560, 800, 160, { color: "#f0ece2", windows: false });
    s.poly([[380, 400], [1220, 400], [1140, 340], [460, 340]], "#b0563e");
    for (let i = 0; i < 9; i++) s.add(`<path d="M${440 + i * 86},560 L${440 + i * 86},470 A30,30 0 0 1 ${500 + i * 86},470 L${500 + i * 86},560 Z" fill="#cfc8b8"/>`);
    ["palm", "palm", "palm"].forEach((t, i) => s.tree(t, 200 + i * 520 + (i === 2 ? 220 : 0), 620, { s: 1.8 }));
    s.ground(560, "#d7c39a");
    s.sea(680, { color: "#4f97a6" });
    return s.ship("boat", 600, 700, { s: 1.2 }).ship("boat", 1000, 720, { s: 1 });
  },
  // A huge container port at dusk: long stacks of coloured containers, a row of gantry cranes, a big ship at the quay.
  "nl-12": (s) => {
    s.sky("dusk");
    s.containers(60, 520, 18, 4, { w: 70, h: 30 });
    for (let i = 0; i < 5; i++) s.crane(250 + i * 280, 520, 1.3, { color: "#c9a05a", boom: true });
    s.rect(0, 520, 1600, 30, "#4a4a50");
    s.ship("container", 900, 640, { s: 2.2 });
    s.sea(640, { glint: 400 });
    return s.lamps(40, 1560, 540, 80, { gap: 200 });
  },
  // Flat green polder fields crossed by straight canals at sunrise, a windmill, poplars, distant wind turbines, mist.
  "nl-8": (s) => {
    s.sky("dawn", { sun: [1100, 360], r: 44 });
    s.turbines(80, 1500, 470, { h: 110, gap: 170, depth: 0.55 });
    s.ground(470, "#6f9a5a");
    s.field(470, 900, { color: "#7aa462", rows: 14, vanish: 800 });
    for (let i = 0; i < 4; i++) s.add(`<line x1="${800 + (i - 1.5) * 20}" y1="470" x2="${800 + (i - 1.5) * 700}" y2="900" stroke="#9ab8c8" stroke-width="${6 + i * 2}" opacity="0.9"/>`);
    s.forest({ y: 470, type: "cypress", s: 0.8, gap: 24, x0: 1180, x1: 1560, color: "#4c6a4c" });
    s.rect(380, 300, 60, 180, "#5a4a3c");
    s.poly([[370, 300], [450, 300], [410, 250]], "#3e3430");
    s.add('<g stroke="#3e3430" stroke-width="10"><line x1="410" y1="280" x2="300" y2="170"/><line x1="410" y1="280" x2="520" y2="390"/><line x1="410" y1="280" x2="520" y2="170"/><line x1="410" y1="280" x2="300" y2="390"/></g>');
    return s.fog(500, { h: 60, opacity: 0.5 });
  }
};
