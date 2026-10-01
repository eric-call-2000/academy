/* Egypt and Israel */
module.exports = {
  // A desert of rocky red-brown mountains and sand, a lone observation post with a bare flagpole on a ridge, a dirt track.
  "eg_il-1": (s) => s
    .sky("day", { top: "#3f7ab8" })
    .mountains({ y: 480, amp: 260, color: "#9a5a3a", depth: 0.3 })
    .ridge({ y: 620, amp: 160, color: "#b8784a", peak: 1100, peakW: 400, depth: 0.1 })
    .rect(1060, 440, 80, 40, "#c9b89a").add('<line x1="1150" y1="480" x2="1150" y2="370" stroke="#3a3a3a" stroke-width="3"/>')
    .ground(620, "#d4a870")
    .add('<path d="M200,900 Q600,700 900,640 T1500,620" stroke="#c49a6a" stroke-width="30" fill="none"/>'),
  // A large offshore gas platform on steel legs in a calm Mediterranean at sunset, a supply ship, long reflections.
  "eg_il-2": (s) => s
    .sky("golden", { sun: [1200, 420], r: 44, top: "#7a6a9a" })
    .sea(480, { glint: 1200 })
    .rig(700, 560, 1.4, { flare: true })
    .ship("patrol", 1050, 620, { s: 0.6, hull: "#e0782c" }),
  // A border gate in high concrete walls in a flat sandy desert, a long line of cargo trucks in hazy heat, dust.
  "eg_il-3": (s) => {
    s.sky("haze", { top: "#d4c8b0" });
    s.ground(460, "#d4b88a");
    s.wall(-20, 700, 520, 140, { color: "#b8b0a2", panels: 40 }).wall(900, 1620, 520, 140, { color: "#b8b0a2", panels: 40 });
    s.rect(700, 360, 200, 30, "#9a948a").rect(700, 390, 14, 130, "#9a948a").rect(886, 390, 14, 130, "#9a948a");
    s.add('<g stroke="#3a3a3a" stroke-width="4">' + Array.from({ length: 8 }, (_, i) => `<line x1="${720 + i * 22}" y1="400" x2="${720 + i * 22}" y2="520"/>`).join("") + "</g>");
    for (let i = 0; i < 6; i++) s.vehicle("truck", 800 - i * 20, 600 + i * 50, { s: 0.7 + i * 0.15, color: s.r.pick(["#d9d2c2", "#8a3a2a", "#3f6aa8"]) });
    return s.fog(500, { h: 200, color: "#e8d4b0", opacity: 0.4 });
  },
};
