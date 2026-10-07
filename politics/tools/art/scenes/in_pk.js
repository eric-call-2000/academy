/* India and Pakistan */
module.exports = {
  // A remote flat desert test range at dawn, sparse scrub, a distant plume of dust rising on the horizon, pale sky.
  "in_pk-1": (s) => s
    .sky("dawn", { top: "#c4a8a0", bottom: "#f2d0a0" })
    .ground(520, "#d4b48a")
    .smoke(1100, 520, { len: 260, rise: 4, w: 70, color: "#c9a07a" })
    .add('<ellipse cx="1100" cy="520" rx="160" ry="20" fill="#c9a07a" opacity="0.6"/>')
    .add(Array.from({ length: 50 }, (_, i) => `<ellipse cx="${(i * 97) % 1600}" cy="${540 + (i * 53) % 360}" rx="${10 + (i % 4) * 6}" ry="6" fill="#9a8a5a"/>`).join("")),
  // A turquoise river out of snowy Himalayas into a green plain, a long concrete barrage, canals into wheat fields.
  "in_pk-2": (s) => {
    s.sky("morning");
    s.mountains({ y: 360, amp: 220, color: "#8a92a2", depth: 0.4, snow: 0.45 });
    s.ground(380, "#8aaa5a").field(380, 900, { color: "#a8b85a", rows: 20 });
    s.add('<path d="M700,380 C760,480 600,560 760,660 L760,900" stroke="#3fb0b8" stroke-width="140" fill="none"/>');
    s.rect(560, 560, 400, 30, "#c9c4bc");
    for (let i = 0; i < 9; i++) s.rect(580 + i * 42, 590, 20, 20, "#8a8478");
    return s.add('<path d="M760,620 Q1100,640 1640,700 M700,620 Q400,700 -40,720" stroke="#5fb0c0" stroke-width="16" fill="none"/>');
  },
  // A border crossing on a tree-lined road at sunset: two ornate iron gates facing each other, empty grandstands.
  "in_pk-3": (s) => {
    s.sky("golden", { sun: [800, 440], r: 40 });
    s.ground(480, "#c9a87a");
    s.persp({ vanish: [800, 480], depth: 8 });
    s.quad("floor", [600, 1000, 900, 1, 40], "#a8988a");
    for (let z = 1.2; z < 8; z *= 1.25) [450, 1150].forEach((X) => { const p = s.pp(X, 900, z); s.tree("oak", p[0], p[1], { s: 2.2 / z }); });
    [1.6, 2.4].forEach((z) => { const a = s.pp(600, 900, z), b = s.pp(1000, 900, z), h = 300 / z; s.add(`<g stroke="#2a2a2a" stroke-width="${4 / z + 1}" fill="none"><rect x="${a[0]}" y="${a[1] - h}" width="${b[0] - a[0]}" height="${h}"/>` + Array.from({ length: 10 }, (_, i) => `<line x1="${a[0] + (b[0] - a[0]) * i / 10}" y1="${a[1] - h}" x2="${a[0] + (b[0] - a[0]) * i / 10}" y2="${a[1]}"/>`).join("") + "</g>"); });
    for (let k = 0; k < 5; k++) { s.rect(0, 560 + k * 30, 380, 26, k % 2 ? "#b8b0a2" : "#a8a092"); s.rect(1220, 560 + k * 30, 380, 26, k % 2 ? "#b8b0a2" : "#a8a092"); }
    return s;
  },
};
