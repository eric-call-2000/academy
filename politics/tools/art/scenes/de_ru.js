/* Germany and Russia */
module.exports = {
  // Huge steel gas pipes stacked in a snowy yard by a railway, a compressor station with chimneys, low winter sun.
  "de_ru-1": (s) => {
    s.sky("winter", { sun: [1300, 420], r: 34 });
    s.factory(900, 480, 500, 100, { chimneys: [100, 400], chimH: 140, depth: 0.3 });
    s.ground(480, "snow");
    for (let r = 0; r < 4; r++) for (let i = 0; i < 12 - r; i++) s.add(`<circle cx="${120 + i * 60 + r * 30}" cy="${760 - r * 52}" r="28" fill="#6a7078"/><circle cx="${120 + i * 60 + r * 30}" cy="${760 - r * 52}" r="20" fill="#2a2e34"/>`);
    return s.railcars(-40, 1660, 840, { box: false, color: "#3a3e44" });
  },
  // Aerial view of a large circle of white churning water on a dark grey sea, gas escaping, a faint coastline.
  "de_ru-2": (s) => {
    s.sky("overcast", { top: "#7a8088" });
    s.sea(220, { color: "#3a4650", lines: 120 });
    s.add('<rect x="0" y="200" width="1600" height="14" fill="#6a706a"/>');
    s.add('<ellipse cx="800" cy="600" rx="380" ry="190" fill="#d9e2e6"/><ellipse cx="800" cy="600" rx="300" ry="150" fill="#eef4f6"/>');
    for (let i = 0; i < 200; i++) { const a = s.r() * Math.PI * 2, r = Math.sqrt(s.r()); s.add(`<circle cx="${(800 + Math.cos(a) * 360 * r).toFixed(1)}" cy="${(600 + Math.sin(a) * 180 * r).toFixed(1)}" r="${(3 + s.r() * 8).toFixed(1)}" fill="#ffffff" opacity="0.8"/>`); }
    return s;
  },
  // A huge cargo aircraft on an apron at night under bright floodlights, a small drone against the dark sky, wet tarmac.
  "de_ru-3": (s) => {
    s.sky("night", { stars: 20 });
    s.ground(480, "#2a2c30");
    [[300, 300], [1300, 300]].forEach(([x, y]) => { s.add(`<line x1="${x}" y1="480" x2="${x}" y2="${y}" stroke="#4a4a4a" stroke-width="5"/>`); s.glow(x, y, 300, "#f4f8ff", 0.4); });
    s.plane("cargo", 800, 600, { s: 3.4, color: "#8a8e94" });
    s.plane("drone", 1200, 160, { s: 0.6, color: "#0e1014" });
    return s.add('<rect x="0" y="720" width="1600" height="180" fill="#f4f8ff" opacity="0.05"/>');
  },
};
