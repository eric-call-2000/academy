/* Russia & Venezuela */
module.exports = {
  // Two large white swing-wing bombers parked on a tropical airfield, green coastal mountains and palms, heat haze.
  "ru_ve-1": (s) => {
    s.sky("tropical", { clouds: 4 })
      .mountains({ y: 440, amp: 220, color: "jungle", depth: 0.5, jag: false })
      .forest({ y: 460, type: "palm", s: 0.6, depth: 0.35, gap: 60 });
    s.ground(480, "#a8a48a");
    s.quad = s.quad || null;
    s.rect(0, 560, 1600, 220, "#8f9192");
    s.add('<line x1="0" y1="670" x2="1600" y2="670" stroke="#e8e2d2" stroke-width="5" stroke-dasharray="60 50"/>');
    [[560, 650, 2.2], [1220, 595, 1.4]].forEach(([x, y, k]) => {
      s.add(`<g transform="translate(${x},${y}) scale(${k})"><line x1="-60" y1="-30" x2="-60" y2="0" stroke="#2a2a2a" stroke-width="4"/><line x1="70" y1="-30" x2="70" y2="0" stroke="#2a2a2a" stroke-width="4"/><circle cx="-60" cy="-4" r="6" fill="#2a2a2a"/><circle cx="70" cy="-4" r="6" fill="#2a2a2a"/>` +
        `<path d="M160,-46 Q150,-60 120,-62 L-130,-58 L-170,-110 L-190,-110 L-176,-56 Q-180,-40 -150,-36 L120,-30 Q150,-32 160,-46 Z" fill="#ecebe6"/>` +
        `<path d="M40,-48 L-90,-20 L-110,-20 L-20,-50 Z" fill="#cfcdc6"/><rect x="-40" y="-40" width="80" height="12" rx="6" fill="#bdbbb4"/><path d="M128,-56 L150,-50 L128,-46 Z" fill="#3a3e44"/></g>`);
    });
    s.tree("palm", 80, 820, { s: 2.2 }).tree("palm", 1500, 820, { s: 2.4 });
    return s;
  },
  // Oil derricks and nodding pumpjacks across a flat swampy savanna at dusk, gas flares in the distance, pipelines.
  "ru_ve-2": (s) => {
    s.sky("dusk", { sun: [1300, 430], r: 40, clouds: 2 });
    s.ground(460, "#5a6a4a");
    for (let i = 0; i < 10; i++) s.add(`<ellipse cx="${(s.r() * 1600).toFixed(0)}" cy="${(520 + s.r() * 360).toFixed(0)}" rx="${(80 + s.r() * 140).toFixed(0)}" ry="${(8 + s.r() * 14).toFixed(0)}" fill="#7a8a96" opacity="0.5"/>`);
    [[200, 470, 0.5], [1450, 465, 0.5], [900, 468, 0.4]].forEach(([x, y, sc]) => { s.rect(x - 2, y - 120 * sc, 4, 120 * sc, s.c("#4a4a44", 0.5)); s.flare(x, y - 120 * sc, sc); });
    const derrick = (x, y, h) => s.add(`<polygon points="${x - h * 0.16},${y} ${x + h * 0.16},${y} ${x + 6},${y - h} ${x - 6},${y - h}" fill="none" stroke="#3a3530" stroke-width="${(h / 60).toFixed(1)}"/>` + [0.25, 0.5, 0.75].map((t) => `<line x1="${x - h * 0.16 * (1 - t)}" y1="${y - h * t}" x2="${x + h * 0.16 * (1 - t)}" y2="${y - h * t}" stroke="#3a3530" stroke-width="${(h / 90).toFixed(1)}"/>`).join(""));
    const jack = (x, y, k) => s.add(`<g transform="translate(${x},${y}) scale(${k})"><rect x="-6" y="-60" width="12" height="60" fill="#2f2c28"/><rect x="-70" y="-74" width="140" height="12" rx="4" fill="#3a3530" transform="rotate(-10)"/><path d="M60,-90 Q90,-74 70,-48 L60,-58 Z" fill="#3a3530"/><rect x="-80" y="-24" width="40" height="24" fill="#3a3530"/></g>`);
    derrick(560, 560, 200); derrick(1120, 540, 150); derrick(300, 650, 260);
    jack(820, 640, 1.2); jack(1340, 600, 0.9); jack(1000, 760, 1.6); jack(160, 820, 1.4);
    s.pipeline([[0, 700], [600, 690], [900, 720], [1600, 700]], { w: 10, color: "#6a6660" });
    return s;
  },
  // A large tanker loading at a terminal jetty on a Caribbean coast at dawn, white storage tanks, green hills, calm water.
  "ru_ve-3": (s) => {
    s.sky("dawn", { sun: [420, 380], r: 46, clouds: 3 })
      .hills({ y: 420, amp: 110, color: "green", depth: 0.5 });
    s.ground(430, "green", { depth: 0.3 });
    s.tanks(60, 470, 6, { w: 90, h: 50, depth: 0.25 });
    s.sea(480, { glint: 420, color: "#4f97a6" });
    s.rect(1000, 540, 600, 14, "#5a5650");
    for (let x = 1010; x < 1600; x += 60) s.rect(x, 554, 8, 60, "#5a5650");
    s.add('<polyline points="1120,540 1120,470 1060,470" fill="none" stroke="#6a6660" stroke-width="8"/><polyline points="1300,540 1300,460 1250,460" fill="none" stroke="#6a6660" stroke-width="8"/>');
    s.ship("tanker", 760, 600, { s: 2.4, dir: -1 });
    s.ship("boat", 1420, 720, { s: 0.8 });
    return s;
  },
};
