/* United Arab Emirates and India */
module.exports = {
  // A carved pink sandstone Hindu temple in a flat desert at sunset, a reflecting pool before it.
  "ae_in-2": (s) => s
    .sky("golden", { sun: [260, 420], r: 52 })
    .ridge({ y: 560, amp: 20, color: "desert", depth: 0.6, step: 200 })
    .ground(560, "desert")
    .temple(800, 600, 1.35, { color: "#d99a86" })
    .rect(0, 600, 1600, 20, "#c79a72")
    .poly([[420, 640], [1180, 640], [1360, 820], [240, 820]], "#c9b9a8")
    .poly([[430, 646], [1170, 646], [1340, 812], [260, 812]], "#e7c49a")
    .add('<g opacity="0.35" transform="translate(0,1292) scale(1,-1.0)"><path d="M598,600 Q610,540 620,500 L980,500 Q990,540 1002,600 Z" fill="#d99a86"/></g>')
    .tree("palm", 300, 720, { s: 1.2 })
    .tree("palm", 1330, 730, { s: 1.35 })
    .person(1180, 640, 18, { robe: "#efe6d6" })
    .person(1206, 642, 17, { color: "#4a3a36" }),
};
