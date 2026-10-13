/* ============================================================
   Relationship — UAE & Iran 🇦🇪🇮🇷
   Persian merchants in Dubai and three islands seized in 1971;
   Dubai as Iran's back door, sanctions, tanker attacks and a
   2022 thaw; and the 2026 war, thousands of missiles and drones,
   a closed embassy and strikes on Fujairah.
   Research note and sources: tools/research/ae_ir.md
   Current as of 12 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("ae_ir", {
  id: "ae_ir",
  asOf: "2026-10-12",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ae_ir-1", kind: "relation", asOf: "2026-10-12",
      title: "Merchants and three islands",
      dek: "Persian traders helped build Dubai. But on the eve of the UAE's birth in 1971, the Shah's forces seized three islands near the Strait of Hormuz that the Emirates still claim.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ae_ir/ae_ir-1-hero.webp",
          alt: "Illustration of old coral-stone houses with wind towers beside a creek full of wooden dhows.",
          caption: "Dubai's Bastakiya quarter was built by merchants from southern Iran.",
          credit: "Illustration — not a photograph",
          prompt: "Old coral-stone houses with tall square wind towers beside a creek crowded with wooden dhows, sacks and crates on the quay, warm late-afternoon light, historical documentary painting style, figures small and distant, no flags, no legible text." },
        { type: "timeline", head: "Traders and a seizure", items: [
          ["c. 1900", "Persian merchants move to Dubai to escape new customs duties"],
          ["1968", "Britain announces it will leave the Gulf"],
          ["30 Nov 1971", "Iran takes Abu Musa and the two Tunbs"],
          ["2 Dec 1971", "The United Arab Emirates is founded"],
          ["1980–88", "Iran–Iraq war; Dubai keeps trading with Iran"],
          ["1992", "New dispute over Abu Musa"]
        ] },
        { type: "section", head: "Across a narrow sea", md:
          "Only a narrow stretch of water separates the Emirates from southern Iran, and people, goods and dhows have crossed it for centuries. Around 1900, when Persia raised customs duties at its ports, many merchants from towns such as Lingeh and Bastak moved to Dubai, whose ruler offered low taxes. They built the wind-towered Bastakiya quarter, still a landmark, and helped turn Dubai into a trading hub. Families of Iranian origin remain prominent in Dubai's business life, and Persian is widely heard in its markets." },
        { type: "section", head: "Britain leaves", md:
          "For over a century the small sheikhdoms of the 'Trucial Coast' were British protectorates. In 1968 Britain announced it would withdraw from east of Suez, and the rulers began negotiating a federation. Iran under Shah Mohammad Reza Pahlavi, then the strongest power in the Gulf and an American ally, claimed Bahrain and three small islands near the entrance to the Strait of Hormuz: Abu Musa, belonging to Sharjah, and Greater and Lesser Tunb, belonging to Ras al-Khaimah." },
        { type: "section", head: "The seizure", md:
          "The Shah dropped his claim to Bahrain after a UN survey found Bahrainis wanted independence. But on 30 November 1971, a day before British protection ended, Iranian forces landed on the islands. Sharjah had signed a memorandum agreeing to share Abu Musa; Ras al-Khaimah refused any deal, and several of its police were killed resisting on Greater Tunb. Two days later the United Arab Emirates was founded, with the islands already under Iranian control. Ras al-Khaimah joined the federation early in 1972." },
        { type: "section", head: "A lasting claim", md:
          "The UAE has demanded the islands back ever since and wants the dispute taken to the International Court of Justice or arbitration. Iran says its sovereignty is not negotiable. The Arab League and Gulf Cooperation Council routinely back the UAE's claim, which angers Tehran. The islands matter because they sit beside the shipping lanes into the [[Strait of Hormuz]], through which about a fifth of the world's oil passes." },
        { type: "section", head: "Revolution and war", md:
          "After Iran's 1979 revolution, the emirates split on how to deal with the Islamic Republic. During the Iran–Iraq war of 1980–88 Abu Dhabi helped fund Iraq, while Dubai and Sharjah kept trading with Iran." },
        { type: "compare", head: "The islands dispute",
          left: { head: "UAE", md:
            "Calls the islands occupied Emirati territory and seeks international arbitration." },
          right: { head: "Iran", md:
            "Calls them Iranian, held before the UAE existed, and refuses to negotiate sovereignty." } },
        { type: "section", head: "Why it matters", md:
          "The UAE's relationship with Iran has always mixed close trade with a territorial grievance. The islands are a reminder that Iran can project power across the narrow waters of the Gulf." }
      ],
      takeaways: [
        "Merchants from southern Iran helped build Dubai's trade in the early 20th century.",
        "Iran seized Abu Musa and the Greater and Lesser Tunbs on 30 November 1971, two days before the UAE was founded.",
        "The UAE still claims the islands and seeks arbitration; Iran says sovereignty is not negotiable."
      ],
      check: { q: "When did Iran take control of Abu Musa and the Tunbs?",
        choices: ["In 1979, after the revolution", "On 30 November 1971, just before the UAE was founded", "During the Iran–Iraq war"], answer: 1,
        explain: "The Shah's forces landed as British protection ended." },
      sources: [
        { title: "Abu Musa", publisher: "Britannica", url: "https://www.britannica.com/place/Abu-Musa", date: "n.d." },
        { title: "Iran–United Arab Emirates relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Iran%E2%80%93United_Arab_Emirates_relations", date: "n.d." },
        { title: "Will UAE and Iran resolve the three islands dispute?", publisher: "Al Jazeera", url: "https://www.aljazeera.com/opinions/2012/5/12/will-uae-and-iran-resolve-the-three-islands-dispute", date: "2012-05-12" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ae_ir-2", kind: "relation", asOf: "2026-10-12",
      title: "Dubai, the back door",
      dek: "For decades Dubai was Iran's window on the world, a hub for its trade and a haven for its business people. Sanctions, regional rivalry and tanker attacks strained that role.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ae_ir/ae_ir-2-hero.webp",
          alt: "Illustration of a busy creek wharf stacked with goods, wooden dhows moored and modern towers behind.",
          caption: "Dhows still carry goods from Dubai's creek to Iranian ports.",
          credit: "Illustration — not a photograph",
          prompt: "A busy creek wharf in Dubai stacked high with boxes of electronics, tyres and appliances, wooden dhows moored side by side, glass skyscrapers rising behind in the haze, documentary painting style, figures small and distant, no flags, no legible text." },
        { type: "timeline", head: "Trade and tension", items: [
          ["2000s", "Dubai becomes Iran's main trading gateway"],
          ["2010", "UN and Western sanctions tighten on Iran"],
          ["Jan 2016", "UAE downgrades ties after Saudi missions in Iran are attacked"],
          ["May 2019", "Tankers sabotaged off Fujairah"],
          ["Sep 2020", "UAE signs the Abraham Accords with Israel"],
          ["Aug 2022", "UAE ambassador returns to Tehran"]
        ] },
        { type: "section", head: "The hub", md:
          "By the 2000s the UAE was one of Iran's largest trading partners. Much of the trade was re-exports: goods from China, Europe and elsewhere arrived in Dubai's ports and were shipped on to Iran, often on wooden dhows from the creek. Hundreds of thousands of Iranians lived in the UAE, running businesses, schools and hospitals, and wealthy Iranians kept money and property in Dubai. For Iran, Dubai was a link to world markets; for Dubai, Iran was a large and lucrative customer." },
        { type: "section", head: "Sanctions", md:
          "As the United States and United Nations tightened [[sanctions]] over Iran's nuclear programme, Dubai found itself in a bind. Washington pressed the UAE to close firms and bank accounts used to evade sanctions, and UAE banks cut off many Iranian clients. Still, networks of front companies in the Emirates were repeatedly accused by the US Treasury of helping Iran sell oil and buy banned goods. When the nuclear deal of 2015 lifted some sanctions, Dubai hoped for a boom; when Trump reimposed them in 2018, trade fell again." },
        { type: "section", head: "Rivals in the region", md:
          "Abu Dhabi, the richest emirate and seat of the federal government, saw Iran as a threat. It joined Saudi Arabia's war against Iran-backed Houthi rebels in Yemen in 2015, and in January 2016, after Saudi diplomatic missions in Iran were stormed, the UAE downgraded its relations with Tehran. In May 2019 four tankers were damaged by limpet mines off the UAE port of Fujairah; the UAE did not name the culprit, but the US blamed Iran, which denied it." },
        { type: "section", head: "Hedging", md:
          "In 2020 the UAE signed the [[Abraham Accords]] with Israel, which Iran condemned. Yet Abu Dhabi also sought to lower tensions with Tehran. In January 2022 Houthi missiles and drones struck Abu Dhabi, killing three people, but the UAE kept talking to Iran, and in August 2022 it sent its ambassador back to Tehran. The UAE's leaders argued that de-escalation protected their open, trade-dependent economy. Emirati officials met their Iranian counterparts regularly, and Iranian ministers visited Abu Dhabi. When Saudi Arabia and Iran restored relations in a deal brokered by China in March 2023, the UAE welcomed it as a sign that the Gulf was calming down." },
        { type: "compare", head: "Two emirates, two instincts",
          left: { head: "Dubai", md:
            "A trading city that profited from commerce with Iran." },
          right: { head: "Abu Dhabi", md:
            "The federal capital, more worried about Iran's missiles, militias and ambitions." } },
        { type: "section", head: "Why it matters", md:
          "The UAE tried to be both Iran's trading partner and America's ally. That balancing act worked for years, but it depended on Iran not turning its weapons on the Emirates." }
      ],
      takeaways: [
        "Dubai long served as Iran's main gateway for trade and as a home for hundreds of thousands of Iranians.",
        "US sanctions pressed UAE banks and companies to cut ties with Iran.",
        "The UAE downgraded ties in 2016 but sent its ambassador back to Tehran in August 2022."
      ],
      check: { q: "Why was Dubai important to Iran's economy?",
        choices: ["It refined most of Iran's oil", "It was a hub for re-exporting goods to Iran and a base for Iranian business", "It was Iran's capital in exile"], answer: 1,
        explain: "Goods from around the world were shipped on from Dubai to Iranian ports." },
      sources: [
        { title: "Iran–United Arab Emirates relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Iran%E2%80%93United_Arab_Emirates_relations", date: "n.d." },
        { title: "May 2019 Gulf of Oman incident", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/May_2019_Gulf_of_Oman_incident", date: "n.d." },
        { title: "UAE deputy PM and Iran envoy discuss 'cooperation' in Abu Dhabi", publisher: "The New Arab", url: "https://www.newarab.com/news/uae-deputy-pm-and-iran-envoy-discuss-cooperation", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ae_ir-3", kind: "relation", asOf: "2026-10-12",
      title: "Missiles over the Emirates",
      dek: "When the US and Israel went to war with Iran in February 2026, Iran fired thousands of missiles and drones at the UAE. Abu Dhabi closed its embassy in Tehran, and its long policy of de-escalation collapsed.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ae_ir/ae_ir-3-hero.webp",
          alt: "Illustration of a port with oil storage tanks at night, streaks of interceptor missiles in the sky.",
          caption: "Iran struck the UAE's port of Fujairah in May 2026.",
          credit: "Illustration — not a photograph",
          prompt: "An oil port with rows of round storage tanks and tankers at a jetty at night, mountains behind, bright streaks of interceptor missiles and small flashes high in the dark sky, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "The 2026 war", items: [
          ["28 Feb 2026", "US–Israeli strikes on Iran; Iran fires on the UAE"],
          ["1 Mar 2026", "UAE closes its embassy in Tehran"],
          ["8 Apr 2026", "Ceasefire"],
          ["9 Apr 2026", "UAE reports more than 2,800 missiles and drones intercepted"],
          ["4 May 2026", "Iran strikes the port of Fujairah"],
          ["Oct 2026", "US blockade of Iran; Qatar mediates"]
        ] },
        { type: "section", head: "Under fire", md:
          "On 28 February 2026 the United States and Israel launched a war on Iran that killed its Supreme Leader, Ali Khamenei (see [[lesson:us_ir-3]]). Iran answered by firing missiles and drones not only at Israel but at Gulf states hosting American forces, and the UAE, home to the US air base at Al Dhafra, was among the hardest hit. By 9 April the UAE said it had intercepted 537 ballistic missiles, 2,256 drones and 26 cruise missiles fired from Iran. The attacks killed 13 people and injured 224." },
        { type: "section", head: "Embassy closed", md:
          "On 1 March the UAE closed its embassy in Tehran, ending the cautious de-escalation it had pursued since 2019. Emirati officials said there would be 'no more niceties' with Iran. Flights were disrupted, and Dubai, which markets itself as a safe haven for business and tourism, saw its image shaken as interceptions lit up the night sky over its towers." },
        { type: "section", head: "Ceasefire and new strikes", md:
          "A ceasefire took effect on 8 April. But after the United States moved to reopen the [[Strait of Hormuz]], Iran struck the UAE's port of Fujairah on 4 May, and the UAE said it was hit again by a long-range attack on 8 May. Fujairah matters because a pipeline carries Abu Dhabi's oil there, bypassing Hormuz. The Wall Street Journal reported that the UAE had struck Iranian targets, including a refinery on Lavan Island; the UAE did not confirm this." },
        { type: "section", head: "Since the summer", md:
          "The US–Iran ceasefire broke down, and by October 2026 the US Navy was blockading Iranian ports while Qatar carried proposals between the two sides. For the UAE, the war cut off much of the trade with Iran that had enriched Dubai, and Iranians in the Emirates faced tighter scrutiny." },
        { type: "section", head: "Old grievances", md:
          "The war also revived the dispute over Abu Musa and the Tunbs. Iran's forces on the islands sit beside the shipping lanes it has threatened, and Emirati officials see them as part of the same threat." },
        { type: "compare", head: "Before and after",
          left: { head: "Before 2026", md:
            "An ambassador in Tehran, booming re-export trade and talk of de-escalation." },
          right: { head: "Since 2026", md:
            "A closed embassy, thousands of missiles and drones, and trade choked by war." } },
        { type: "section", head: "Why it matters", md:
          "The UAE bet that trade and talks would keep it safe from Iran. The 2026 war showed the limits of that bet, and pushed Abu Dhabi closer to the US and Israel's air defences." }
      ],
      takeaways: [
        "Iran fired more than 2,800 missiles and drones at the UAE in the first weeks of the 2026 war.",
        "The UAE closed its embassy in Tehran on 1 March 2026.",
        "Iran struck the port of Fujairah in May 2026, after the US moved to reopen the Strait of Hormuz."
      ],
      check: { q: "Why is the port of Fujairah important?",
        choices: ["It is the UAE's capital", "A pipeline brings Abu Dhabi's oil there, bypassing the Strait of Hormuz", "It is on one of the disputed islands"], answer: 1,
        explain: "That is why Iran's strike on it in May 2026 mattered so much." },
      sources: [
        { title: "UAE says 'no more niceties' as Iran seeks clarity on fragile truce terms", publisher: "Al-Monitor", url: "https://www.al-monitor.com/originals/2026/04/uae-says-no-more-niceties-iran-seeks-clarity-fragile-truce-terms", date: "2026-04" },
        { title: "United Arab Emirates in the 2026 Iran war", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/United_Arab_Emirates_in_the_2026_Iran_war", date: "2026" },
        { title: "UAE carried out military strikes on Iran: Wall Street Journal", publisher: "Aaj News", url: "https://english.aaj.tv/news/amp/330458839", date: "2026" }
      ]
    }
  ]
});
