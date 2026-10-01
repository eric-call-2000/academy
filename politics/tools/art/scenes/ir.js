/* Iran */
module.exports = {
  // Tankers in convoy through the Strait of Hormuz at dusk, a warship on the horizon.
  "ir-7": (s) => s
    .sky("dusk", { sun: [1180, 380], r: 46, clouds: 5, cloudY: [120, 300] })
    .mountains({ y: 520, amp: 150, color: "arid", depth: 0.75, x1: 700 })
    .mountains({ y: 540, amp: 110, color: "arid", depth: 0.55, x0: 1050 })
    .ridge({ y: 560, amp: 70, color: "#7a5c4a", depth: 0.35, jag: true, x1: 520 })
    .sea(540, { glint: 1180 })
    .ship("warship", 1380, 546, { s: 0.4, depth: 0.45, dir: -1, reflect: false })
    .ship("tanker", 980, 590, { s: 0.55, depth: 0.45, wake: true })
    .ship("tanker", 560, 650, { s: 0.85, depth: 0.25, wake: true })
    .ship("tanker", 260, 770, { s: 1.15, wake: true })
    .birds(820, 230, 5),
};
