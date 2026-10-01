/* United States */
module.exports = {
  // Hundreds of marchers crossing a steel-arch bridge at sunrise, plain banners.
  "us-3": (s) => {
    s.sky("dawn", { sun: [1250, 300], r: 56, clouds: 4 })
      .ridge({ y: 470, amp: 30, color: "#6a7a5c", depth: 0.65 })
      .sea(470, { glint: 1250, color: "#6d7f8a" })
      .forest({ y: 470, x0: 1300, x1: 1640, type: "oak", s: 0.5, depth: 0.5 });
    // the bridge: one big steel arch over the deck, seen from the near end
    const deck = 640;
    let arch = "";
    for (let i = 0; i <= 40; i++) { const t = i / 40, x = 100 + 1400 * t, y = deck - 330 * 4 * t * (1 - t); arch += (i ? " L" : "M") + x.toFixed(1) + "," + y.toFixed(1); }
    s.add(`<path d="${arch}" stroke="#4b4f55" stroke-width="22" fill="none"/>`);
    for (let x = 160; x < 1460; x += 52) { const t = (x - 100) / 1400; s.add(`<line x1="${x}" y1="${deck}" x2="${x}" y2="${(deck - 330 * 4 * t * (1 - t)).toFixed(1)}" stroke="#4b4f55" stroke-width="5"/>`); }
    s.rect(0, deck, 1600, 26, "#3f4246").rect(0, deck + 26, 1600, 260, "#5d5f5f");
    s.crowd({ y: deck + 40, rows: 6, h: 50, gap: 13, rowGap: 34, banners: 3, walk: true,
      colors: ["#2c2f38", "#3b3a3f", "#4a4036", "#363d4f", "#2a2a2a"] });
    return s;
  },
};
