/* ============================================================
   Relationship — India & Pakistan 🇮🇳🇵🇰
   Wars, water and cricket: two nuclear-armed neighbours, the
   treaty that shares their rivers, and a border that has almost
   closed. The May 2025 fighting is in in-5 and pk-5; Kashmir
   in pk-12.
   Research note and sources: tools/research/in_pk.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("in_pk", {
  id: "in_pk",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "in_pk-1", kind: "relation", asOf: "2026-09-30",
      title: "Nuclear rivals",
      dek: "Since both tested nuclear weapons in 1998, India and Pakistan have been through a cycle: a militant attack, Indian retaliation, a crisis on the edge of war, and a pull back. Each round has gone further.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in_pk/in_pk-1-hero.webp",
          alt: "Illustration of a remote desert test range at dawn, with a distant plume of dust rising above flat sand and scrub.",
          caption: "India tested nuclear weapons in the Rajasthan desert in May 1998; Pakistan answered within weeks.",
          credit: "Illustration — not a photograph",
          prompt: "A remote flat desert test range at dawn, sparse scrub and sand, a distant plume of dust rising from the ground on the horizon, pale orange sky, silent and ominous atmosphere, no people, no flags, no legible text." },
        { type: "timeline", head: "The crisis cycle", items: [
          ["May 1998", "India, then Pakistan, test nuclear weapons"],
          ["1999", "Lahore peace summit, then war in the Kargil mountains"],
          ["2001–02", "Attack on India's parliament; a year-long military standoff"],
          ["Nov 2008", "Mumbai attacks kill 166"],
          ["2016", "Uri attack; Indian 'surgical strikes' across the Line of Control"],
          ["2019", "Pulwama bombing; Indian air strike on Balakot; air battle"],
          ["May 2025", "Pahalgam attack; four days of missile and drone war"]
        ] },
        { type: "section", head: "The bomb", md:
          "India first tested a nuclear device in 1974. In May 1998 it tested five more at Pokhran in the Rajasthan desert; within three weeks Pakistan answered with its own tests in the Chagai hills. Both declared themselves nuclear powers. By January 2026, according to SIPRI, India had about 190 warheads and Pakistan about 170. India promises never to use nuclear weapons first; Pakistan, facing a larger conventional army, keeps the option of using smaller 'tactical' weapons to stop an Indian attack." },
        { type: "section", head: "Attack and answer", md:
          "The bomb did not stop fighting; it changed its form. In February 1999 India's prime minister, Atal Bihari Vajpayee, rode a bus to Lahore for a peace summit; weeks later Pakistani troops seized heights at Kargil, and a limited war followed. Since then, militant groups based in Pakistan have repeatedly attacked India: its parliament in 2001, Mumbai in 2008, an army base at Uri in 2016 and a paramilitary convoy at Pulwama in 2019. The Mumbai attackers, ten gunmen who killed 166 people over three days, belonged to Lashkar-e-Taiba, a group India says Pakistan's intelligence service has long protected. Pakistan denies state involvement. India's answers have grown bolder, from mobilising troops in 2001–02 to 'surgical strikes' in 2016, an air strike deep inside Pakistan at Balakot in 2019, and missile and drone strikes across Pakistan in May 2025 (see [[unit:in]], [[lesson:in-5]])." },
        { type: "section", head: "Guardrails", md:
          "The two keep a few rules even at their worst. Every 1 January since 1992 they have exchanged lists of nuclear facilities that neither will attack, most recently on 1 January 2026, the 35th time. Military hotlines, used to agree the May 2025 ceasefire, still work. Outside powers, especially the United States, Saudi Arabia and the UAE, have stepped in during each crisis to press both sides to stop." },
        { type: "compare", head: "Two views of deterrence",
          left: { head: "Stability", md:
            "Nuclear weapons have kept every crisis limited since 1998: both sides always stop short of full-scale war." },
          right: { head: "Danger", md:
            "Each crisis escalates faster and deeper, with less time to think; a miscalculation between nuclear neighbours could be catastrophic." } },
        { type: "section", head: "Why it matters", md:
          "India and Pakistan are the only nuclear-armed neighbours that have fought each other repeatedly, and their disputes, above all Kashmir (see [[lesson:pk-12]]), remain unresolved. With India's new doctrine that any major terror attack will be treated as an act of war, the threshold for the next crisis is low." }
      ],
      takeaways: [
        "India and Pakistan tested nuclear weapons in May 1998; each now has roughly 170–190 warheads.",
        "Attacks by Pakistan-based militants have repeatedly triggered Indian retaliation, each round going further.",
        "A few guardrails hold, such as the yearly exchange of nuclear site lists, but crises escalate faster."
      ],
      check: { q: "What do India and Pakistan exchange every 1 January?",
        choices: ["Cricket fixtures", "Lists of nuclear facilities neither will attack", "Water flow data"], answer: 1,
        explain: "Under a 1988 agreement they have swapped lists of nuclear installations every New Year's Day since 1992." },
      sources: [
        { title: "Increasing focus on nuclear weapons amid heightened escalation risks: SIPRI Yearbook 2026", publisher: "SIPRI", url: "https://www.sipri.org/media/press-release/2026/increasing-focus-nuclear-weapons-amid-heightened-escalation-risks-new-sipri-yearbook-out-now", date: "2026-06" },
        { title: "Pakistan, India exchange lists of nuclear facilities and prisoners", publisher: "The Nation", url: "https://www.nation.com.pk/01-Jan-2026/pakistan-india-exchange-lists-nuclear-facilities-prisoners", date: "2026-01-01" },
        { title: "What was the Kargil War and why was it significant?", publisher: "Britannica", url: "https://www.britannica.com/question/What-was-the-Kargil-War-and-why-was-it-significant", date: "n.d." },
        { title: "Lashkar-e-Taiba", publisher: "Britannica", url: "https://www.britannica.com/topic/Lashkar-e-Taiba", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "in_pk-2", kind: "relation", asOf: "2026-09-30",
      title: "Sharing the Indus",
      dek: "In 1960 India and Pakistan divided six rivers between them. The treaty survived three wars. In 2025 India suspended it, and water became a weapon.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in_pk/in_pk-2-hero.webp",
          alt: "Illustration of a wide river flowing out of snowy Himalayan mountains into a green plain, with a concrete barrage and irrigation canals.",
          caption: "The Indus rivers rise in the Himalayas and water most of Pakistan's farms.",
          credit: "Illustration — not a photograph",
          prompt: "A wide turquoise river flowing out of snow-capped Himalayan mountains into a green agricultural plain, a long concrete barrage across the river with sluice gates, irrigation canals branching into wheat fields, clear morning light, vast and vital, no people up close, no flags, no legible text." },
        { type: "facts", head: "The treaty", rows: [
          ["Signed", "19 September 1960, in Karachi, brokered by the World Bank"],
          ["India gets", "The eastern rivers: Ravi, Beas and Sutlej"],
          ["Pakistan gets", "The western rivers: Indus, Jhelum and Chenab, about 80% of the water"],
          ["India may", "Use the western rivers for 'run-of-river' hydropower"],
          ["Suspended by India", "23 April 2025, 'in abeyance'"]
        ] },
        { type: "section", head: "A problem made by partition", md:
          "The Indus and its tributaries rise in Tibet and the Himalayas and flow through Indian-held Kashmir and Punjab into Pakistan. Partition in 1947 drew the border across a canal system built under British rule, leaving the headworks in India and most of the irrigated land in Pakistan. In April 1948 India briefly cut off water to Pakistani canals, a shock that Pakistanis have never forgotten." },
        { type: "section", head: "Nine years of talks", md:
          "The World Bank brokered nine years of negotiations. The 1960 treaty, signed by Jawaharlal Nehru and Ayub Khan, split the rivers rather than the water: the three eastern rivers went to India, the three western ones, carrying about four-fifths of the system's water, to Pakistan. India may build dams on the western rivers only to generate electricity, without storing much water or changing the flow. The Bank helped pay for new canals and dams in Pakistan, such as the Mangla and Tarbela dams." },
        { type: "section", head: "Disputes within the rules", md:
          "For six decades disputes went through the treaty's machinery. Pakistan challenged Indian hydropower projects on the western rivers: a neutral expert ruled on the Baglihar dam in 2007, and a Court of Arbitration in 2013 allowed India's Kishanganga project but required it to leave a minimum flow downstream. In January 2023 India asked to renegotiate, arguing that the treaty was outdated." },
        { type: "section", head: "In abeyance", md:
          "After the Pahalgam attack in April 2025, India declared the treaty 'in abeyance' until Pakistan ends support for cross-border terrorism. It stopped sharing flood data and speeded up dams on the Chenab. India cannot yet hold back much water, because it has little storage on the western rivers, but it can change when water arrives. Pakistan called any attempt to stop or divert its water an act of war. In August 2026 the Court of Arbitration in The Hague ruled the treaty fully binding; India rejected the ruling ([[lesson:in-5]])." },
        { type: "compare", head: "Two views",
          left: { head: "India", md:
            "A treaty is not unconditional: Pakistan can't expect generous terms while militants it shelters attack Indians." },
          right: { head: "Pakistan", md:
            "The treaty has no exit clause; water for 240 million people cannot be used as a weapon, whatever the dispute." } },
        { type: "section", head: "Why it matters", md:
          "The Indus treaty was held up for decades as proof that even bitter enemies can share rivers. Its suspension, as climate change makes Himalayan rivers less predictable, adds water to the list of things India and Pakistan could fight over (see [[unit:pk]])." }
      ],
      takeaways: [
        "The World Bank-brokered 1960 treaty gave India the eastern rivers and Pakistan the western ones, about 80% of the water.",
        "It survived three wars; disputes over Indian dams went to neutral experts and arbitration.",
        "India suspended it in April 2025; a Hague court said it remains binding, which India rejects."
      ],
      check: { q: "How did the 1960 Indus Waters Treaty divide the water?",
        choices: ["Each country took half of every river", "India got the three eastern rivers and Pakistan the three western rivers", "Pakistan got all six rivers"], answer: 1,
        explain: "The treaty split the rivers: Ravi, Beas and Sutlej to India; Indus, Jhelum and Chenab to Pakistan." },
      sources: [
        { title: "Fact Sheet: The Indus Waters Treaty 1960 and the Role of the World Bank", publisher: "World Bank", url: "https://www.worldbank.org/en/region/sar/brief/fact-sheet-the-indus-waters-treaty-1960-and-the-world-bank", date: "n.d." },
        { title: "Indus Waters Treaty", publisher: "Britannica", url: "https://www.britannica.com/event/Indus-Waters-Treaty", date: "n.d." },
        { title: "Indus Waters Kishenganga Arbitration (Pakistan v. India)", publisher: "Permanent Court of Arbitration", url: "https://pca-cpa.org/en/news/indus-waters-kishenganga-arbitration-pakistan-v-india/", date: "2013" },
        { title: "With Indus Waters Treaty in the balance, Pakistan braces for more", publisher: "NPR", url: "https://www.npr.org/2025/07/08/g-s1-73122/pakistan-india-indus-waters-treaty", date: "2025-07-08" },
        { title: "India rejects Hague court order to restore Indus waters pact with Pakistan", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/8/31/india-rejects-hague-court-order-to-restore-indus-waters-pact-with-pakistan", date: "2026-08-31" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "in_pk-3", kind: "relation", asOf: "2026-09-30",
      title: "A border almost closed",
      dek: "Neighbours with shared languages, food and family ties barely trade, rarely visit and meet on the cricket field only at neutral venues. Since 2025 even handshakes have stopped.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in_pk/in_pk-3-hero.webp",
          alt: "Illustration of a border gate on a tree-lined road at sunset, with two ornate gates facing each other and empty grandstands on both sides.",
          caption: "Attari–Wagah, the only road crossing, was closed to travel and trade after April 2025.",
          credit: "Illustration — not a photograph",
          prompt: "A border crossing on a straight tree-lined road at sunset, two ornate iron gates facing each other a short distance apart, empty tiered grandstands on both sides, long golden shadows, quiet and melancholy, no people, no flags, no legible text." },
        { type: "facts", head: "A closed frontier", rows: [
          ["Direct trade", "Suspended by both sides since 2025; most trade already routed via Dubai"],
          ["Attari–Wagah crossing", "Closed after the April 2025 Pahalgam attack"],
          ["Kartarpur corridor", "Opened 2019 for Sikh pilgrims; suspended May 2025"],
          ["Bilateral cricket series", "None since 2012–13"],
          ["Prisoners, Jan 2026", "India holds 424 Pakistanis; Pakistan holds 257 Indians, most of them fishermen"]
        ] },
        { type: "section", head: "Trade that goes the long way", md:
          "India and Pakistan share languages, cuisines and, in Punjab and Kashmir, divided families. Yet official trade between them has always been tiny, a few billion dollars at most. After the 2019 Pulwama attack India raised tariffs on Pakistani goods to 200%, and after India ended Kashmir's autonomy that August, Pakistan suspended trade. Goods still flow, from Indian pharmaceuticals to Pakistani dates, but mostly through Dubai, at higher cost. In 2025, after Pahalgam, both governments banned even indirect trade." },
        { type: "section", head: "Pilgrims and visas", md:
          "In November 2019 the two opened the Kartarpur corridor, letting Indian Sikhs visit, without a visa, the shrine in Pakistan where Guru Nanak, the founder of Sikhism, spent his last years. It was the rare gesture that survived bad times. In 2025 India suspended it, cancelled visas for Pakistanis and closed the Attari–Wagah crossing, where a flag-lowering ceremony draws crowds every evening; Pakistan closed its airspace to Indian airlines and India returned the favour. Fishermen who stray across the unmarked sea border off Gujarat and Sindh often spend years in each other's jails, and the two sides swap lists of prisoners every January and July." },
        { type: "section", head: "Cricket", md:
          "Cricket is a passion in both countries, and matches between them are among the most watched sporting events on earth. They have not played a bilateral series since 2012–13; they meet only in international tournaments, and increasingly at neutral grounds. When Pakistan hosted the 2025 Champions Trophy, India played its matches in Dubai. At the Asia Cup in September 2025, Indian players refused to shake hands with their opponents, and after winning the final they refused to accept the trophy from the head of the Asian Cricket Council, Mohsin Naqvi, who is also Pakistan's interior minister." },
        { type: "compare", head: "Two views of isolation",
          left: { head: "India's government", md:
            "There can be no business as usual, in trade, travel or sport, while Pakistan-based groups attack Indians." },
          right: { head: "Advocates of contact", md:
            "Cutting ties punishes ordinary people and pilgrims, and removes the contacts that could help build peace." } },
        { type: "section", head: "Why it matters", md:
          "The two countries have almost no ordinary links left to cushion a crisis. That makes each confrontation more dangerous, and means that when relations thaw, as they did briefly in the 2000s, the first steps are small ones: a bus, a pilgrimage, a cricket tour. In 2004 India toured Pakistan for the first time in fifteen years, and crowds in Lahore cheered the visiting players." }
      ],
      takeaways: [
        "Official India–Pakistan trade is tiny; most goes via Dubai, and both banned even indirect trade in 2025.",
        "After Pahalgam, the Attari–Wagah crossing, the Kartarpur pilgrim corridor and visas were closed.",
        "Cricket teams meet only in tournaments, at neutral venues; since 2025 players don't even shake hands."
      ],
      check: { q: "What is the Kartarpur corridor?",
        choices: ["A trade route to Dubai", "A visa-free route for Indian Sikh pilgrims to a shrine in Pakistan", "A military road in Kashmir"], answer: 1,
        explain: "Opened in 2019, it let Sikhs visit the shrine where Guru Nanak spent his last years; India suspended it in 2025." },
      sources: [
        { title: "2025 Asia Cup final", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2025_Asia_Cup_final", date: "n.d." },
        { title: "Asia Cup 2025: India Refuses To Receive Trophy From Pakistan's Mohsin Naqvi", publisher: "Forbes", url: "https://www.forbes.com/sites/parasjan/2025/09/29/asia-cup-2025-india-refuses-to-receive-trophy-from-pakistans-mohsin-naqvi/", date: "2025-09-29" },
        { title: "Pakistan, India exchange lists of nuclear facilities, prisoners", publisher: "Arab News", url: "https://www.arabnews.com/node/2628023/pakistan", date: "2026-01-01" },
        { title: "Direct Trade between India and Pakistan", publisher: "Shankar IAS Parliament", url: "https://www.shankariasparliament.com/current-affairs/direct-trade-between-india-and-pakistan", date: "2025" }
      ]
    }
  ]
});
