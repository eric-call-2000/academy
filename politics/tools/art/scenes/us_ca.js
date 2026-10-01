/* United States and Canada */
module.exports = {
  // A white radar dome on a snowy Arctic ridge at night under green northern lights, two jets, a hut with one lit window.
  "us_ca-1": (s) => {
    s.sky("night", { stars: 120 });
    for (let k = 0; k < 4; k++) s.add(`<path d="M${-100 + k * 60},${200 + k * 30} Q${500},${80 + k * 40} ${900 + k * 40},${220 + k * 20} T${1700},${160 + k * 30}" stroke="#5fe0a0" stroke-width="${40 - k * 8}" fill="none" opacity="${0.25 - k * 0.04}"/>`);
    s.plane("fighter", 1100, 260, { s: 0.4, color: "#2a2e34" }).plane("fighter", 1160, 280, { s: 0.4, color: "#2a2e34" });
    s.ridge({ y: 900, amp: 400, color: "snow", peak: 600, peakW: 800 });
    s.add('<rect x="540" y="460" width="120" height="60" fill="#d9dee4"/><path d="M520,470 A80,80 0 0 1 680,470 Z" fill="#f2f4f6"/>');
    return s.rect(780, 500, 100, 50, "#5a4a3c").rect(820, 512, 20, 16, "#ffd38a").glow(830, 520, 50, "#ffd38a", 0.6);
  },
  // A sawmill yard in a forested BC valley: stacks of wrapped lumber, a log pond, a freight train with flatcars, peaks.
  "us_ca-2": (s) => {
    s.sky("morning");
    s.mountains({ y: 400, amp: 260, color: "#7a8090", depth: 0.4, snow: 0.5 });
    s.forest({ y: 440, type: "pine", s: 1.2, gap: 16, depth: 0.25 });
    s.ground(460, "#8a7a62");
    s.factory(1000, 520, 400, 80, { chimneys: [300], depth: 0.1 });
    for (let i = 0; i < 6; i++) for (let k = 0; k < 3; k++) s.rect(160 + i * 120, 620 - k * 34, 100, 32, k % 2 ? "#e8d4a8" : "#d9c494");
    s.add('<ellipse cx="400" cy="760" rx="300" ry="50" fill="#5a6a6a"/>' + Array.from({ length: 12 }, (_, i) => `<rect x="${170 + i * 40}" y="${748 + (i % 3) * 8}" width="34" height="8" rx="4" fill="#8a6a44"/>`).join(""));
    return s.railcars(700, 1700, 760, { box: true, color: "#6a4a34" });
  },
  // A large steel pipeline running straight across a golden prairie, a line of pylons, a small pumping station.
  "us_ca-3": (s) => {
    s.sky("golden", { clouds: 6, cloudY: [80, 360] });
    s.ground(480, "#c9a24a");
    s.persp({ vanish: [800, 480], depth: 30 });
    s.quad("floor", [740, 860, 899, 1, 200], "#a8acb0").quad("floor", [740, 800, 898, 1, 200], "#c9ccd0");
    s.pylons(1000, 1600, 480, { h: 80, gap: 120, depth: 0.4 }).pylons(-100, 600, 480, { h: 80, gap: 150, depth: 0.4 });
    return s.rect(960, 440, 100, 50, "#d9d2c2").rect(1000, 410, 20, 30, "#9a948a");
  },
};
