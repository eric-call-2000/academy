/* Poland and Germany */
module.exports = {
  // A dark bronze and stone memorial wall with relief figures, a large wreath of white and red flowers, wet paving, bare trees.
  "pl_de-1": (s) => {
    s.sky("overcast");
    s.forest({ y: 440, type: "bare", s: 1.2, gap: 60, depth: 0.3 });
    s.rect(300, 220, 1000, 380, "#6a6458").rect(340, 260, 920, 300, "#4a4034");
    for (let i = 0; i < 9; i++) s.person(400 + i * 100, 540, 200 + (i % 3) * 20, { color: "#5a4a34" });
    s.ground(600, "#8a8682");
    for (let i = 0; i < 6; i++) s.add(`<line x1="0" y1="${640 + i * 46}" x2="1600" y2="${640 + i * 46}" stroke="#7a7672" stroke-width="2"/>`);
    s.add('<circle cx="800" cy="640" r="90" fill="none" stroke="#3f6a3a" stroke-width="30"/>' + Array.from({ length: 30 }, (_, i) => { const a = i / 30 * Math.PI * 2; return `<circle cx="${800 + Math.cos(a) * 90}" cy="${640 + Math.sin(a) * 90}" r="12" fill="${i % 2 ? "#f4f2ee" : "#c4322a"}"/>`; }).join(""));
    return s;
  },
  // A ruined city of roofless brick buildings under thin snow, rubble, one damaged church tower still standing, grey sky.
  "pl_de-2": (s) => {
    s.sky("winter", { top: "#7a8088" });
    for (let i = 0; i < 9; i++) { const x = s.r() * 1500, h = 140 + s.r() * 200; s.poly([[x, 620], [x, 620 - h], [x + 50, 620 - h + 40], [x + 90, 620 - h - 10], [x + 150, 620 - h + 60], [x + 150, 620]], s.c("#7a5a48", 0.3)); for (let k = 0; k < 6; k++) s.rect(x + 14 + (k % 3) * 44, 620 - h * 0.7 + Math.floor(k / 3) * 60, 22, 34, s.c("#cfd4d8", 0.3)); }
    s.rect(760, 180, 120, 440, "#6a5040").add('<path d="M760,180 L790,150 L820,190 L850,140 L880,190 L880,180" fill="#6a5040"/>');
    s.ridge({ y: 760, amp: 200, color: "#8a7a6e", jag: true, step: 40 });
    return s.ridge({ y: 780, amp: 160, color: "#e8ecf0", jag: true, step: 40, shade: false }).snowfall({ count: 120 });
  },
  // A road bridge over a wide calm river at a border crossing, cars and lorries, a police checkpoint with a white tent.
  "pl_de-3": (s) => {
    s.sky("morning");
    s.hills({ y: 460, amp: 60, color: "#6f9a52", depth: 0.4 });
    s.sea(480, { color: "#6a8aa0" });
    s.bridge(-20, 1620, 580, { pier: 300, span: 300, color: "#9a948a" });
    s.rect(-20, 550, 1640, 30, "#a8a49c");
    for (let i = 0; i < 9; i++) s.vehicle(i % 2 ? "truck" : "car", 100 + i * 150, 552, { s: 0.6, color: s.r.pick(["#d9d2c2", "#3f6aa8", "#8a3a2a", "#5a5e66"]) });
    s.tent(1450, 552, 80, { color: "#f4f2ee" });
    return s.add(Array.from({ length: 5 }, (_, i) => `<polygon points="${1360 + i * 20},552 ${1368 + i * 20},530 ${1376 + i * 20},552" fill="#e0782c"/>`).join(""));
  },
};
