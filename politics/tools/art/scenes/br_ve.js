/* Brazil & Venezuela */
module.exports = {
  // An unfinished concrete road bridge over a wide brown river through tropical forest, idle cranes and rusting scaffolding.
  "br_ve-1": (s) => {
    s.sky("overcast", { clouds: 6, cloudY: [60, 260] });
    s.forest({ y: 470, type: "oak", s: 0.8, depth: 0.6, gap: 22, color: "#3f6a4a" });
    s.sea(500, { color: "#8a6a4a", lines: 40 });
    s.add('<path d="M-20,900 L-20,600 Q200,560 400,580 L420,900 Z" fill="#3f5a3a"/><path d="M1640,900 L1640,580 Q1400,560 1200,600 L1180,900 Z" fill="#3f5a3a"/>');
    s.forest({ y: 640, x0: -40, x1: 380, type: "palm", s: 1.4, gap: 60, color: "#3f6a44" }).forest({ y: 640, x0: 1220, x1: 1640, type: "oak", s: 1.6, gap: 70, color: "#3f6a44" });
    s.rect(0, 420, 640, 22, "#a9a49a").rect(1000, 420, 600, 22, "#a9a49a");
    [120, 320, 520].forEach((x) => s.rect(x, 442, 30, 300, "#9a958c"));
    [1080, 1280, 1480].forEach((x) => s.rect(x, 442, 30, 300, "#9a958c"));
    s.rect(780, 442, 34, 300, "#9a958c");
    for (let y = 300; y < 440; y += 30) s.add(`<line x1="560" y1="${y}" x2="720" y2="${y}" stroke="#8a5a3a" stroke-width="3"/>`);
    [560, 600, 640, 680, 720].forEach((x) => s.add(`<line x1="${x}" y1="300" x2="${x}" y2="440" stroke="#8a5a3a" stroke-width="3"/>`));
    s.towerCrane(800, 442, 0.9, { color: "#a8823a" });
    s.fog(450, { h: 120, opacity: 0.4 });
    return s;
  },
  // Rows of white shelter tents and prefab buildings on red earth near a border town, families with bundles walking to the gate.
  "br_ve-2": (s) => {
    s.sky("haze", { sun: [1300, 200], r: 50 });
    s.hills({ y: 430, amp: 80, color: "#7a8a5a", depth: 0.4 });
    s.ground(460, "red");
    for (let i = 0; i < 6; i++) s.building(100 + i * 160, 520, 130, 50, { color: "#e6e2d8", cell: 20, roof: "flatdark" });
    s.tents(80, 1100, 560, { rows: 3, gap: 110, w: 70, colors: ["#efece4", "#e6e2d8", "#dcd8ce"] });
    s.fence(1150, 1600, 600, 60, {});
    s.rect(1200, 520, 20, 80, "#4a4a4a").rect(1340, 520, 20, 80, "#4a4a4a").rect(1200, 512, 160, 12, "#4a4a4a");
    for (let i = 0; i < 9; i++) s.person(1160 + s.r.range(-120, 240), s.r.range(700, 860), s.r.range(60, 90), { color: s.r.pick(["#4a3a3a", "#3a4a5a", "#5a4a3a", "#6a3a4a"]), bundle: s.r() < 0.6 ? s.r.pick(["#c9b79a", "#8a9aa8", "#b0603a"]) : null, walk: true });
    return s;
  },
  // A modernist presidential palace with slender curved white columns and a glass facade reflected in a pool at dusk.
  "br_ve-3": (s) => {
    s.sky("dusk", { top: "#1f2c5a", bottom: "#6a7ab0", clouds: 2 });
    s.rect(0, 520, 1600, 380, "#5a5e6a");
    s.rect(240, 370, 1120, 26, "#f4f2ec").rect(240, 500, 1120, 20, "#f4f2ec");
    s.rect(300, 396, 1000, 104, "#3a4a6a");
    for (let i = 0; i < 20; i++) s.rect(310 + i * 50, 404, 36, 88, "#ffd59a", 'opacity="0.35"');
    for (let i = 0; i < 12; i++) { const x = 270 + i * 96; s.add(`<path d="M${x},520 Q${x - 26},450 ${x},396 Q${x + 26},450 ${x},520 Z" fill="#f4f2ec"/>`); }
    s.add('<g transform="translate(0,1040) scale(1,-1)" opacity="0.35"><rect x="240" y="370" width="1120" height="26" fill="#f4f2ec"/><rect x="300" y="396" width="1000" height="104" fill="#3a4a6a"/></g>');
    s.rect(140, 540, 1320, 200, "#2f3a5a", 'opacity="0.6"');
    s.add('<g opacity="0.3">' + Array.from({ length: 12 }, (_, i) => { const x = 270 + i * 96; return `<path d="M${x},540 Q${x - 26},610 ${x},664 Q${x + 26},610 ${x},540 Z" fill="#f4f2ec"/>`; }).join("") + '</g>');
    s.rect(0, 740, 1600, 160, "#7a7e88");
    return s;
  },
};
