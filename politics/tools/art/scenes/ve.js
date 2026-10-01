/* Venezuela */
const barrio = (s, o) => {
  o = o || {};
  s.ridge({ y: 900, amp: 640, color: "#4a6a3a", peak: o.peak || 300, peakW: 900, depth: 0.05 });
  for (let i = 0; i < 280; i++) { const x = s.r() * 1000, top = 260 + Math.abs(x - (o.peak || 300)) * 0.7, y = top + s.r() * (900 - top); if (s.r() < 0.75) { s.rect(x, y, 32, 24, s.r.pick(o.colors || ["#a8644a", "#b87a5a", "#9a5a44", "#c48a6a"])); if (o.lit && s.r() < 0.4) s.rect(x + 12, y + 8, 6, 8, "#ffd38a"); } }
};
module.exports = {
  // A column of soldiers in ragged early-19th-century uniforms and ponchos crossing a high Andean pass, mist, snow.
  "ve-9": (s) => {
    s.sky("winter", { top: "#7a8698" });
    s.mountains({ y: 460, amp: 300, color: "#8a8e98", depth: 0.4, snow: 0.5 }).fog(440, { h: 140, opacity: 0.7 });
    s.ridge({ y: 900, amp: 380, color: "#7a7468", peak: 1100, peakW: 800, jag: true, step: 40 });
    for (let i = 0; i < 30; i++) { const t = i / 30, x = 300 + t * 900, y = 860 - t * 380, k = 1 - t * 0.75; s.person(x, y, 130 * k, { color: s.r.pick(["#3a3a4a", "#4a3a2e", "#5a4a3c"]), robe: s.r() < 0.5 ? s.r.pick(["#8a5a3a", "#6a5a4a", "#a8322a"]) : null, walk: true }); }
    return s.snowfall({ count: 160 });
  },
  // Old rusting oil derricks in the shallows of a vast calm lake at sunset, pipes and walkways, reflections.
  "ve-3": (s) => {
    s.sky("dusk", { top: "#4a3a6a", bottom: "#f2a06a", sun: [1100, 440], r: 40 });
    s.sea(460, { glint: 1100, color: "#6a5a7a" });
    for (let i = 0; i < 18; i++) { const z = 1 + (i % 6) * 0.6, x = (i * 173) % 1600, y = 470 + 300 / z * 0.6, h = 220 / z; s.add(`<g stroke="#2a2420" stroke-width="${3 / z + 1}" fill="none"><path d="M${x - h * 0.2},${y} L${x},${y - h} L${x + h * 0.2},${y}"/><path d="M${x - h * 0.13},${y - h * 0.35} L${x + h * 0.13},${y - h * 0.35} M${x - h * 0.07},${y - h * 0.7} L${x + h * 0.07},${y - h * 0.7}"/></g><g opacity="0.25" transform="translate(0,${2 * y}) scale(1,-1)"><path d="M${x - h * 0.2},${y} L${x},${y - h} L${x + h * 0.2},${y}" stroke="#2a2420" stroke-width="2" fill="none"/></g>`); }
    return s.add('<path d="M0,620 L1600,580" stroke="#3a2e28" stroke-width="5"/>');
  },
  // 1970s Caracas: tall concrete towers and elevated motorways with vintage cars, the green mountain behind, bright sun.
  "ve-10": (s) => {
    s.sky("day", { top: "#3f8ac8", bottom: "#d0e4ee" });
    s.mountains({ y: 420, amp: 260, color: "#3f7a3a", depth: 0.25, jag: false });
    s.city({ y: 620, style: "towers", h: [160, 340], color: "#b8b0a4", depth: 0.15, lit: false });
    s.add('<path d="M-40,700 Q800,620 1640,680" stroke="#9a948a" stroke-width="30" fill="none"/>' + Array.from({ length: 8 }, (_, i) => `<rect x="${i * 220}" y="${690 - Math.sin(i / 7 * Math.PI) * 40}" width="20" height="220" fill="#8a847a"/>`).join(""));
    for (let i = 0; i < 8; i++) s.vehicle("car", 100 + i * 190, 690 - Math.sin((100 + i * 190) / 1600 * Math.PI) * 50, { s: 0.7, color: s.r.pick(["#c9763c", "#3f8aa8", "#e8e2d2", "#a8322a"]) });
    return s.ground(780, "#7a7a72");
  },
  // Steep hillsides of brick barrio houses above Caracas at dawn, thin columns of smoke rising, a hazy orange sky.
  "ve-11": (s) => {
    s.sky("haze", { top: "#a8805a", bottom: "#f2b07a" });
    s.city({ y: 640, x0: 900, x1: 1640, style: "towers", h: [80, 220], depth: 0.4, lit: false });
    barrio(s, { peak: 350 });
    [1000, 1200, 1450].forEach((x) => s.smoke(x, 640, { len: 400, rise: 3, w: 30, dark: true }));
    return s;
  },
  // A white colonial palace with arched colonnades round a courtyard and a fountain, a steep green mountain behind.
  "ve-4": (s) => {
    s.sky("morning", { clouds: 4, cloudY: [200, 360] });
    s.mountains({ y: 420, amp: 300, color: "#3f6a3a", depth: 0.2, jag: false });
    s.rect(200, 320, 1200, 220, "#f4f1ea").poly([[180, 320], [1420, 320], [1360, 280], [240, 280]], "#b8603a");
    for (let i = 0; i < 16; i++) s.add(`<path d="M${230 + i * 72},540 L${230 + i * 72},430 A26,26 0 0 1 ${282 + i * 72},430 L${282 + i * 72},540 Z" fill="#9a948a"/>`);
    s.ground(540, "#c9c0ae");
    s.add('<ellipse cx="800" cy="680" rx="160" ry="30" fill="#9a948a"/><ellipse cx="800" cy="672" rx="140" ry="22" fill="#8ab0c4"/><rect x="788" y="600" width="24" height="70" fill="#e8e2d2"/><path d="M800,600 Q760,560 730,670 M800,600 Q840,560 870,670" stroke="#dfe9ee" stroke-width="4" fill="none" opacity="0.8"/>');
    return s.tree("palm", 200, 720, { s: 1.6 }).tree("palm", 1400, 720, { s: 1.8 });
  },
  // A big grey warship on a dark calm sea at night, two helicopters with lights, a city at the foot of mountains far off.
  "ve-5": (s) => {
    s.sky("night", { moon: [1200, 160], r: 26, stars: 50 });
    s.mountains({ y: 470, amp: 140, color: "#1e2430", depth: 0.2, jag: false });
    for (let i = 0; i < 160; i++) s.add(`<circle cx="${100 + s.r() * 1400}" cy="${464 + s.r() * 14}" r="1.6" fill="#ffd38a"/>`);
    s.sea(480, { glint: 1200, color: "#141c2c" });
    s.ship("warship", 760, 660, { s: 1.6, dir: -1, color: "#5a6068" });
    [[400, 260], [560, 200]].forEach(([x, y]) => { s.plane("heli", x, y, { s: 0.7, dir: -1, color: "#2a2e34" }); s.add(`<circle cx="${x - 20}" cy="${y + 12}" r="3" fill="#e86a4a"/><circle cx="${x + 20}" cy="${y + 12}" r="3" fill="#5fcf7a"/>`); });
    return s;
  },
  // A tanker moored at a long terminal jetty at dusk, loading arms, white tanks on the shore, gas flares far off.
  "ve-6": (s) => {
    s.sky("dusk");
    s.tanks(100, 500, 6, { w: 90, h: 50 });
    s.flare(1300, 440, 1).flare(1460, 450, 0.8);
    s.forest({ y: 500, x0: 700, x1: 1200, type: "palm", s: 0.6, gap: 60 });
    s.ground(500, "#4a4440");
    s.sea(520, { color: "#4a5070", glint: 1300 });
    s.rect(-20, 600, 1000, 20, "#5a5a5e");
    for (let i = 0; i < 8; i++) s.rect(i * 130, 620, 12, 80, "#4a4a4e");
    s.ship("tanker", 900, 700, { s: 1.4, dir: -1 });
    return s.add('<g stroke="#8a8a8e" stroke-width="6" fill="none"><path d="M500,600 L540,520 L620,560"/><path d="M700,600 L740,520 L820,560"/></g>');
  },
  // A long concrete bridge over a brown river at dawn, people walking with suitcases, backpacks and children, mist.
  "ve-7": (s) => {
    s.sky("dawn");
    s.hills({ y: 460, amp: 120, color: "#5f8a4a", depth: 0.4 }).fog(470, { h: 80 });
    s.sea(500, { color: "#8a7458" });
    s.bridge(-20, 1620, 600, { pier: 300, span: 300, color: "#9a948a" });
    s.rect(-20, 570, 1640, 30, "#a8a49c");
    for (let i = 0; i < 26; i++) s.person(60 + i * 60 + s.r() * 20, 572, 50 + s.r() * 10, { color: s.r.pick(["#3a3a4a", "#5a3a3a", "#3a4a3a", "#6a5a4a"]), bundle: s.r() < 0.5 ? s.r.pick(["#3f5a8a", "#8a3a2a"]) : null, walk: true });
    return s;
  },
  // A wide brown river winding through dense rainforest toward the Atlantic, an offshore oil vessel on the horizon.
  "ve-12": (s) => {
    s.sky("haze", { top: "#a8b8b8", bottom: "#d9e0d4" });
    s.sea(200, { color: "#6a8a9a", lines: 20 });
    s.ship("lng", 1200, 210, { s: 0.2, depth: 0.4, reflect: false });
    s.ground(240, "#2f5a2a");
    for (let i = 0; i < 300; i++) { const y = 240 + s.r() * 660; s.add(`<circle cx="${(s.r() * 1600).toFixed(1)}" cy="${y.toFixed(1)}" r="${(8 + (y - 240) / 40).toFixed(1)}" fill="${s.r.pick(["#2f5a2a", "#3f6a3a", "#4f7a3a"])}"/>`); }
    s.add('<path d="M700,240 C900,380 500,520 760,660 S1100,820 900,900" stroke="#8a6a44" stroke-width="80" fill="none"/>');
    return s.fog(400, { h: 160, opacity: 0.35 });
  },
  // A hillside of stacked brightly painted brick houses above a modern city at dusk, lights, a green mountain behind.
  "ve-8": (s) => {
    s.sky("dusk");
    s.mountains({ y: 360, amp: 200, color: "#3a5a3a", depth: 0.3, jag: false });
    s.city({ y: 700, x0: 900, x1: 1640, style: "towers", h: [120, 300], depth: 0.2, lit: true });
    barrio(s, { peak: 300, lit: true, colors: ["#e8a0a0", "#a0c4e0", "#e8d080", "#a8d0a0", "#e0b0d0", "#b87a5a"] });
    return s;
  },
};
