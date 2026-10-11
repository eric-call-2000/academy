/* Iran & Turkey */
module.exports = {
  // A snow-capped volcanic mountain over a dry plateau, a small caravan of camels and horses on a dusty road.
  "ir_tr-1": (s) => {
    s.sky("morning", { clouds: 2 });
    s.add('<path d="M300,560 Q620,380 820,170 Q860,140 900,170 Q1100,380 1400,560 Z" fill="#8a8078"/><path d="M760,230 Q820,160 860,155 Q900,160 950,230 Q900,250 860,235 Q820,255 760,230 Z" fill="#eef2f6"/><path d="M1180,560 Q1300,460 1340,430 Q1380,460 1500,560 Z" fill="#9a9088"/><path d="M1320,448 L1340,430 L1360,448 Z" fill="#eef2f6"/>');
    s.ground(560, "steppe");
    s.add('<path d="M-20,760 Q500,690 900,700 Q1300,710 1640,660 L1640,720 Q1300,760 900,750 Q500,740 -20,810 Z" fill="#c9b48e"/>');
    for (let i = 0; i < 6; i++) { const x = 300 + i * 130, y = 735 - i * 4; s.add(`<g transform="translate(${x},${y})"><path d="M-40,-30 Q-30,-60 -5,-50 Q10,-70 25,-45 L40,-45 L55,-75 L65,-72 L55,-35 L40,-28 Z" fill="#7a6048"/>${[-30, -15, 25, 38].map((lx) => `<line x1="${lx}" y1="-30" x2="${lx}" y2="0" stroke="#6a5038" stroke-width="4"/>`).join("")}<rect x="-20" y="-62" width="30" height="16" fill="#9a5a3a"/></g>`); }
    [1120, 1210].forEach((x) => s.add(`<g transform="translate(${x},728)"><path d="M-38,-34 Q-40,-48 -20,-50 L22,-50 L40,-72 Q48,-80 56,-74 L60,-66 L50,-62 L38,-40 L30,-30 Q0,-24 -30,-28 Z" fill="#4a3428"/><path d="M-38,-40 Q-52,-36 -50,-14" stroke="#3a2a20" stroke-width="5" fill="none"/>${[-30, -20, 18, 28].map((lx) => `<line x1="${lx}" y1="-30" x2="${lx}" y2="0" stroke="#3a2a20" stroke-width="4"/>`).join("")}</g>`));
    s.person(250, 740, 60, { color: "#4a3a30", robe: "#6a5040" });
    return s;
  },
  // A steel gas pipeline on supports crossing rolling dry steppe toward mountains, a compressor station with a flare.
  "ir_tr-2": (s) => {
    s.sky("afternoon", { clouds: 6, cloudY: [60, 220] });
    s.mountains({ y: 470, amp: 150, depth: 0.6, snow: 0.7 });
    s.hills({ y: 540, amp: 60, color: "steppe", depth: 0.3 });
    s.ground(560, "steppe");
    s.building(1180, 560, 180, 60, { color: "#c9c6bc", windows: false, roof: "flatdark" });
    s.tanks(1380, 560, 2, { w: 50, h: 40 });
    s.rect(1150, 420, 8, 140, "#8d8f8c"); s.flare(1154, 420, 0.8);
    const path = [[1180, 545], [900, 580], [600, 650], [300, 760], [-40, 900]];
    for (let i = 0; i < 18; i++) { const t = i / 17, x = 1180 - t * 1220, y = 545 + Math.pow(t, 1.4) * 355; s.rect(x - 3 - t * 4, y, 6 + t * 8, 10 + t * 40, "#6a6c6e"); }
    s.add(`<path d="M1180,545 Q800,600 400,720 T-40,880" stroke="#9aa0a4" stroke-width="28" fill="none" stroke-linecap="round"/><path d="M1180,540 Q800,595 400,712 T-40,872" stroke="#c4c9cc" stroke-width="6" fill="none" opacity="0.6"/>`);
    return s;
  },
  // A tall concrete border wall with watchtowers winding across bare brown hills at dusk, a patrol road beside it.
  "ir_tr-3": (s) => {
    s.sky("wintdusk", { clouds: 3 });
    s.mountains({ y: 420, amp: 160, depth: 0.5, snow: 0.6 });
    s.hills({ y: 560, amp: 110, color: "#7a6450", depth: 0.25 });
    s.ground(640, "#6e5a48");
    s.add('<path d="M-20,760 Q300,700 600,640 Q900,580 1200,560 Q1400,550 1640,520" stroke="#8a7e70" stroke-width="20" fill="none"/>');
    let d = "M-20,720 Q300,660 600,600 Q900,540 1200,520 Q1400,510 1640,480";
    s.add(`<path d="${d}" stroke="#b9b4aa" stroke-width="44" fill="none"/><path d="${d}" stroke="#d2cec6" stroke-width="6" fill="none" transform="translate(0,-20)"/>`);
    [[120, 700, 1.1], [620, 590, 0.8], [1080, 528, 0.6], [1480, 494, 0.45]].forEach(([x, y, k]) => s.watchtower(x, y - 10, k, { color: "#8a8680" }));
    return s;
  },
};
