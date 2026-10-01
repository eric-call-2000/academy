/* ============================================================
   Relationship — India & Saudi Arabia 🇮🇳🇸🇦
   Pilgrims, traders and a Saudi tilt to Pakistan in the Cold
   War; oil, 2.6 million Indian workers and the 2006 turn; and
   MBS's investment promises, Modi's cut-short visit, a Saudi–
   Pakistan pact and the 2026 war's oil shock.
   Research note and sources: tools/research/in_sa.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("in_sa", {
  id: "in_sa",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "in_sa-1", kind: "relation", asOf: "2026-10-01",
      title: "Pilgrims, oil and a Pakistani shadow",
      dek: "Indian Muslims have travelled to Mecca for centuries. But during the Cold War Riyadh stood with Pakistan, and only in 2006 did a Saudi king's visit to Delhi begin a real partnership.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in_sa/in_sa-1-hero.webp",
          alt: "Illustration of a crowd of pilgrims in white garments walking toward a great mosque at dawn.",
          caption: "India sends one of the largest groups of pilgrims to Mecca each year.",
          credit: "AI illustration — not a photograph",
          prompt: "A large crowd of pilgrims in simple white garments walking toward a vast mosque with tall minarets at dawn, warm golden light, haze, documentary painting style, seen from behind at a distance, no faces, no flags, no legible text." },
        { type: "timeline", head: "Slow beginnings", items: [
          ["1955–56", "King Saud visits India; Nehru visits Saudi Arabia"],
          ["1965 & 1971", "Saudi Arabia backs Pakistan in its wars with India"],
          ["1970s", "Indian workers flock to the oil-boom Gulf"],
          ["Jan 2006", "King Abdullah is chief guest at India's Republic Day"],
          ["2010", "Riyadh Declaration: a 'strategic partnership'"],
          ["2016", "Modi receives the kingdom's highest civilian honour"]
        ] },
        { type: "section", head: "Old links", md:
          "Long before oil, Indian traders sailed to Arabia, and Indian Muslims, today about 200 million people, made the pilgrimage to Mecca. India sends one of the largest national contingents to the Hajj each year, under a quota the kingdom sets. After independence, King Saud visited India in 1955 and Jawaharlal Nehru went to Saudi Arabia in 1956, where crowds hailed him as a 'messenger of peace'." },
        { type: "section", head: "Pakistan's friend", md:
          "But in the Cold War Saudi Arabia, an American ally and guardian of Islam's holy places, sided with Pakistan, a fellow Muslim state and US ally, while India was non-aligned and close to Moscow. Riyadh backed Pakistan diplomatically in its wars with India in 1965 and 1971, and Saudi money flowed to Pakistan's army and religious schools. Indians suspected Saudi funding of Islamist groups and Pakistan's nuclear programme." },
        { type: "section", head: "Oil and workers", md:
          "The 1970s oil boom changed the economics. Saudi Arabia needed labour to build its cities, and millions of Indians, many from Kerala, went to work in construction, shops, hospitals and homes. Today about 2.6 million Indians live in Saudi Arabia, its largest foreign community, and their remittances support families across India. India, meanwhile, became one of the biggest buyers of Saudi oil as its economy grew." },
        { type: "section", head: "The 2006 turn", md:
          "In January 2006 King Abdullah was the chief guest at India's Republic Day parade, the first Saudi king to visit in half a century. The two signed the Delhi Declaration, and in 2010 Prime Minister Manmohan Singh's visit produced the Riyadh Declaration, raising ties to a 'strategic partnership'. The kingdom began to see India as a rising economic power and a customer for decades to come, not just Pakistan's rival." },
        { type: "section", head: "Modi and the kingdom", md:
          "Narendra Modi, despite his Hindu-nationalist politics, put great effort into the Gulf. On his first visit in 2016, King Salman gave him the Sash of King Abdulaziz, the kingdom's highest civilian honour. Saudi Arabia stayed largely quiet when India revoked Kashmir's autonomy in 2019 (see [[lesson:pk-12]]), to Pakistan's dismay, and cooperation on counter-terrorism grew, including the handover of wanted militants." },
        { type: "compare", head: "What changed",
          left: { head: "Before 2000", md:
            "Saudi Arabia saw India through Pakistan's eyes: a Hindu-majority rival of a Muslim ally." },
          right: { head: "After 2006", md:
            "Saudi Arabia sees India as a huge market and investment partner in its own right." } },
        { type: "section", head: "Why it matters", md:
          "India's Gulf diplomacy is one of Modi's quiet successes: the kingdom that once backed Pakistan reflexively now balances between the two." }
      ],
      takeaways: [
        "In the Cold War Saudi Arabia backed Pakistan in its wars with India.",
        "About 2.6 million Indians live and work in Saudi Arabia, and India is a major buyer of Saudi oil.",
        "King Abdullah's 2006 visit and the 2010 Riyadh Declaration began a strategic partnership."
      ],
      check: { q: "What turned Saudi–Indian ties into a partnership in 2006?",
        choices: ["A war against Pakistan", "King Abdullah's visit as Republic Day chief guest", "India joining OPEC"], answer: 1,
        explain: "The Delhi Declaration followed, and in 2010 the Riyadh Declaration made it a strategic partnership." },
      sources: [
        { title: "Modi's Saudi Arabia Visit Sets Tone For Long-term Engagement", publisher: "The Diplomat", url: "https://thediplomat.com/2025/04/modis-saudi-arabia-visit-sets-tone-for-long-term-engagement/", date: "2025-04" },
        { title: "Despite small diaspora share, Gulf-based Indians send home 40% of remittances", publisher: "Arab News", url: "https://www.arabnews.com/node/2597684/world", date: "n.d." },
        { title: "India acknowledges strong people to people ties with Saudi Arabia", publisher: "The Tribune", url: "https://www.tribuneindia.com/news/world/india-acknowledges-strong-people-to-people-ties-with-saudi-arabia", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "in_sa-2", kind: "relation", asOf: "2026-10-01",
      title: "A hundred billion promised",
      dek: "Crown Prince Mohammed bin Salman pledged $100 billion of investment in India. A giant refinery stalled, a trade corridor was announced, and a Modi visit was cut short by a massacre in Kashmir.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in_sa/in_sa-2-hero.webp",
          alt: "Illustration of a freight train of containers crossing a desert, with a port and ships in the distance.",
          caption: "The India–Middle East–Europe corridor would link Indian ports to Europe through Saudi Arabia.",
          credit: "AI illustration — not a photograph",
          prompt: "A long freight train carrying shipping containers crossing a flat golden desert, a modern port with cranes and container ships in the far distance, clear sky, documentary painting style, no people, no logos, no flags, no legible text." },
        { type: "timeline", head: "Big plans", items: [
          ["2018", "Aramco signs up to a giant refinery in Maharashtra"],
          ["Feb 2019", "MBS visits India; talks of $100 billion investment"],
          ["Oct 2019", "Strategic Partnership Council set up"],
          ["Sep 2023", "IMEC corridor announced at the Delhi G20"],
          ["22 Apr 2025", "Modi in Jeddah; Pahalgam attack cuts the visit short"],
          ["Apr 2025", "Saudi pledges include two refineries in India"]
        ] },
        { type: "section", head: "MBS in Delhi", md:
          "Mohammed bin Salman visited India in February 2019, days after a suicide bombing in Kashmir killed 40 Indian paramilitary police and sent India and Pakistan to the brink. He had just come from Islamabad, but in Delhi he spoke of investing $100 billion in India, in energy, refining, petrochemicals, farming and technology. That October the two set up a Strategic Partnership Council, a mechanism Saudi Arabia then had with only a few countries." },
        { type: "section", head: "Refinery delays", md:
          "The flagship was to be a vast refinery and petrochemicals complex on India's west coast, announced in 2018 with Saudi Aramco and Abu Dhabi's national oil company as partners. It stalled for years over land: villagers and environmentalists in Ratnagiri protested against the site. Many other promised investments also moved slowly, a common gap between Gulf pledges and projects on the ground." },
        { type: "section", head: "IMEC", md:
          "On 9 September 2023, at the G20 summit in New Delhi, India, Saudi Arabia, the UAE, the EU, France, Germany, Italy and the United States signed a memorandum on the India–Middle East–Europe Economic Corridor. It would link Indian ports by sea to the Gulf, by rail across Saudi Arabia and Jordan to Israel, and on to Europe, bypassing the Suez Canal and Bab al-Mandab. Weeks later the Gaza war froze the Israeli leg, and the 2026 Iran war added new doubts." },
        { type: "section", head: "Jeddah, April 2025", md:
          "On 22 April 2025 Modi was in Jeddah for the second meeting of the Strategic Partnership Council with MBS when gunmen killed 26 tourists at Pahalgam in Kashmir. Modi skipped the state dinner and flew home that night. The visit still produced agreements, with Saudi Arabia committing to invest in energy projects including two new refineries in India. Riyadh condemned the attack, and in the brief India–Pakistan conflict that followed it urged restraint on both sides (see [[lesson:in-5]])." },
        { type: "section", head: "Trade", md:
          "Trade between the two runs at tens of billions of dollars a year and is dominated by Indian purchases of Saudi crude oil, LPG and fertilisers. India sells rice, cars, machinery and textiles. Saudi Arabia's sovereign wealth fund has invested in Indian companies such as Reliance's digital and retail arms, and Indian firms build roads and hospitals in the kingdom." },
        { type: "compare", head: "The investment gap",
          left: { head: "Promised", md:
            "$100 billion in refineries, technology, farming and infrastructure." },
          right: { head: "Delivered", md:
            "Large stakes in some Indian companies; the giant refinery and corridor still on paper." } },
        { type: "section", head: "Why it matters", md:
          "India needs Gulf energy and capital; Saudi Arabia needs India's growing market for its oil long after Western demand declines. That shared interest outlasts any one project." }
      ],
      takeaways: [
        "MBS promised $100 billion of investment in India in 2019, but big projects like the Ratnagiri refinery stalled.",
        "India and Saudi Arabia signed up to the IMEC corridor at the 2023 Delhi G20.",
        "Modi cut short his April 2025 Jeddah visit after the Pahalgam attack."
      ],
      check: { q: "Why did Modi cut short his visit to Jeddah in April 2025?",
        choices: ["A dispute over oil prices", "The terrorist attack at Pahalgam in Kashmir", "A royal funeral"], answer: 1,
        explain: "Gunmen killed 26 tourists; Modi skipped the state dinner and flew home." },
      sources: [
        { title: "List of Outcomes: State Visit of Prime Minister to Saudi Arabia", publisher: "Press Information Bureau, India", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2123660", date: "2025-04-23" },
        { title: "Saudi Arabia and India Sign Strategic MoUs During PM Modi's Visit", publisher: "Middle East Briefing", url: "https://www.middleeastbriefing.com/news/saudi-arabia-and-india-sign-strategic-mous/", date: "2025-04" },
        { title: "PM Modi cuts short Saudi trip after Pahalgam attack", publisher: "Business Today", url: "https://www.businesstoday.in/amp/india/story/pm-modi-cuts-short-saudi-trip-after-pahalgam-attack-to-land-in-india-early-wednesday-473165-2025-04-22", date: "2025-04-22" },
        { title: "The India-Middle East-Europe Economic Corridor", publisher: "Middle East Institute", url: "https://mei.edu/backgrounder/the-india-middle-east-europe-economic-corridor/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "in_sa-3", kind: "relation", asOf: "2026-10-01",
      title: "A pact with Pakistan, a war next door",
      dek: "Weeks after India and Pakistan fought, Saudi Arabia signed a mutual defence pact with Pakistan. Then the Iran war disrupted the Gulf oil India depends on.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in_sa/in_sa-3-hero.webp",
          alt: "Illustration of oil tankers queued off a hazy coastline with refinery flares in the distance.",
          caption: "The 2026 Iran war disrupted the Gulf oil that India relies on.",
          credit: "AI illustration — not a photograph",
          prompt: "A queue of oil tankers waiting off a hazy flat coastline, refinery flares burning in the distance, dusk light, calm sea, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "New pressures", items: [
          ["May 2025", "India–Pakistan conflict; Riyadh urges restraint"],
          ["17 Sep 2025", "Saudi–Pakistan Strategic Mutual Defence Agreement"],
          ["18 Sep 2025", "India says it will 'study the implications'"],
          ["Mar 2026", "Iran war disrupts Gulf oil; India buys Iranian oil again"],
          ["Sep 2026", "Indian imports from Saudi Arabia back near pre-war levels"],
          ["2026", "Indian workers in the Gulf face the war's dangers"]
        ] },
        { type: "section", head: "The pact", md:
          "On 17 September 2025 Saudi Arabia and Pakistan signed a Strategic Mutual Defence Agreement in Riyadh, declaring that 'any aggression against either country shall be considered an aggression against both' (see [[lesson:sa-6]]). It came four months after India and Pakistan fought for four days. Pakistan has long trained Saudi forces and stationed troops in the kingdom, but this was the first formal pact, and some analysts wondered whether it extended Pakistan's nuclear umbrella to the Saudis." },
        { type: "section", head: "Delhi's response", md:
          "India's foreign ministry responded within a day, saying the pact formalised a 'long-standing arrangement' and that India would 'study the implications' for its security. It added, pointedly, that India's own partnership with Saudi Arabia had 'deepened considerably' and that Riyadh should keep 'mutual interests and sensitivities' in mind. Indian analysts worried that the pact could embolden Pakistan, while Saudi officials signalled that it was aimed at Iran and Israel, not India." },
        { type: "section", head: "Oil shock", md:
          "About half of India's crude comes from the Middle East, and the Iran war that began on 28 February 2026 (see [[lesson:ir-7]]) choked the Strait of Hormuz and pushed prices above $100 a barrel. India bought more from Russia and other suppliers, and even resumed buying Iranian oil after a seven-year gap. By September 2026 imports had recovered, with Saudi Arabia supplying around 566,000 barrels a day, behind Iraq." },
        { type: "section", head: "Workers under fire", md:
          "The war also endangered the millions of Indians who live and work in the Gulf. Iranian missiles and drones hit Saudi oil sites and other targets across the Gulf, where most of India's nine million or so Gulf migrants live and work. Gulf remittances make up a large share of the record sums Indians abroad send home, which made the safety of the Saudi economy a domestic issue for India." },
        { type: "section", head: "Balancing act", md:
          "India keeps close ties with Saudi Arabia, the UAE, Israel and Iran at once, a balance that is getting harder. It refused to join any side in the Iran war and called for de-escalation. Saudi Arabia, for its part, has tried to keep both India and Pakistan close, mediating between them in moments of crisis and investing in both." },
        { type: "compare", head: "The pact and India",
          left: { head: "Worry", md:
            "Saudi money and backing could make Pakistan bolder against India." },
          right: { head: "Reassurance", md:
            "Riyadh's trade with India dwarfs that with Pakistan, and the pact is about Iran." } },
        { type: "section", head: "Why it matters", md:
          "Saudi Arabia can no longer be simply Pakistan's friend or India's supplier. How it balances the two nuclear-armed rivals affects South Asia's stability (see [[lesson:in_pk-1]])." }
      ],
      takeaways: [
        "Saudi Arabia and Pakistan signed a mutual defence pact on 17 September 2025.",
        "India said it would study the implications and reminded Riyadh of their partnership.",
        "The 2026 Iran war disrupted India's Gulf oil; by September Saudi supplies had recovered."
      ],
      check: { q: "How did India respond to the Saudi–Pakistan defence pact?",
        choices: ["It broke off relations with Saudi Arabia", "It said it would study the implications and stressed its own deep ties with Riyadh", "It joined the pact"], answer: 1,
        explain: "The foreign ministry asked Riyadh to keep 'mutual interests and sensitivities' in mind." },
      sources: [
        { title: "India reacts to Saudi-Pakistan defense pact, vows to safeguard national security", publisher: "All India Radio News", url: "https://www.newsonair.gov.in/india-reacts-to-saudi-pakistan-defense-pact-vows-to-safeguard-national-security", date: "2025-09-18" },
        { title: "The signal and substance of the new Saudi-Pakistan defense pact", publisher: "Brookings", url: "https://www.brookings.edu/articles/the-signal-and-substance-of-the-new-saudi-pakistan-defense-pact/", date: "2025" },
        { title: "India turns to Iran for oil and gas after 7-year hiatus, signaling limits to U.S. tilt", publisher: "CNBC", url: "https://www.cnbc.com/2026/04/06/india-iran-oil-imports-strait-hormuz-us-tensions.html", date: "2026-04-06" },
        { title: "India's Crude Oil Imports Recover to Pre-Conflict Levels", publisher: "India News Network", url: "https://www.indianewsnetwork.com/en/india-crude-oil-imports-recover-pre-conflict-levels-20260930", date: "2026-09-30" }
      ]
    }
  ]
});
