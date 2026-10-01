/* ============================================================
   Relationship — Turkey & Egypt 🇹🇷🇪🇬
   Ottoman rule, Muhammad Ali's revolt and Nasser against the
   Baghdad Pact; Morsi, the 2013 coup and a decade of hostility
   over the Brotherhood, Libya and the sea; and reconciliation,
   naval drills and Gaza diplomacy.
   Turkey's other ties are in tr-7; Egypt's mediation in eg-5.
   Research note and sources: tools/research/tr_eg.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("tr_eg", {
  id: "tr_eg",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "tr_eg-1", kind: "relation", asOf: "2026-10-01",
      title: "Sultans, pashas and Nasser",
      dek: "Egypt was an Ottoman province for three centuries, until a governor of its own almost toppled the sultan. In the Cold War, Nasser's Egypt and NATO's Turkey stood on opposite sides.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tr_eg/tr_eg-1-hero.webp",
          alt: "Illustration of a great mosque with tall pencil-thin minarets on a citadel above Cairo at sunset.",
          caption: "Muhammad Ali's mosque, built in Ottoman style, crowns the Cairo citadel.",
          credit: "Illustration — not a photograph",
          prompt: "A great mosque with large domes and two tall pencil-thin Ottoman-style minarets on a stone citadel above a sprawling city at sunset, dusty golden haze, historical painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From province to rival", items: [
          ["1517", "Sultan Selim I conquers Egypt"],
          ["1805", "Muhammad Ali becomes governor and builds his own power"],
          ["1831–41", "Egyptian armies fight the Ottomans and invade Anatolia"],
          ["1882", "British occupation of Egypt"],
          ["1914", "Britain ends nominal Ottoman sovereignty over Egypt"],
          ["1955", "Turkey joins the Baghdad Pact; Nasser leads Arab opposition"]
        ] },
        { type: "section", head: "Ottoman Egypt", md:
          "In 1517 the Ottoman sultan Selim I defeated the Mamluks and made Egypt a province of his empire, ruled by governors sent from Istanbul. For three centuries Egypt sent grain and taxes to the capital, and its ruling class spoke Turkish. Ottoman mosques, houses and fountains still mark old Cairo, and Turkish words survive in Egyptian Arabic." },
        { type: "section", head: "Muhammad Ali", md:
          "After Napoleon's brief invasion, an Albanian officer in the Ottoman army, Muhammad Ali, became governor in 1805 and turned Egypt into a modern state of its own, with a conscript army and factories. In the 1830s his son Ibrahim Pasha marched through Syria and deep into Anatolia, defeating the sultan's armies and threatening Istanbul itself, until European powers intervened. Muhammad Ali's dynasty ruled Egypt until 1952, nominally under the sultan. After Britain occupied Egypt in 1882, Ottoman sovereignty was a fiction, and Britain ended it formally in 1914." },
        { type: "section", head: "Khedives and a canal", md:
          "In 1867 the sultan granted Muhammad Ali's grandson Ismail the grand title of khedive. Ismail opened the Suez Canal in 1869 (see [[lesson:eg-10]]) but borrowed so heavily that Egypt went bankrupt, opening the door to British control. Egypt's royal family and much of its upper class long stayed Turkish-speaking into the 20th century; King Farouk, overthrown in 1952, was Muhammad Ali's great-great-grandson." },
        { type: "section", head: "Opposite camps", md:
          "After the Second World War the two took different paths. Turkey joined NATO in 1952 (see [[lesson:us_tr-1]]) and in 1955 the Western-backed Baghdad Pact. Gamal Abdel Nasser (see [[lesson:eg-9]]) denounced the pact as imperialism in disguise and led Arab nationalist opposition to it, turning to the Soviet Union for arms. Turkey had also recognised Israel in 1949, the first Muslim-majority country to do so. For decades relations were correct but cool." },
        { type: "section", head: "Thaw in the 2000s", md:
          "By the 2000s the two had become trading partners. A free trade agreement took effect in 2007, Turkish factories moved into Egypt's industrial zones, and Turkish television dramas, especially historical epics, became hugely popular across Egypt and the Arab world. Recep Tayyip Erdoğan's AKP, in power from 2002, spoke of a 'zero problems with neighbours' foreign policy." },
        { type: "compare", head: "Shared and divided history",
          left: { head: "Shared", md:
            "Centuries in one empire, Islam, and Ottoman architecture, food and words." },
          right: { head: "Divided", md:
            "Arab nationalism against Ottoman rule; NATO Turkey against Nasser's Egypt." } },
        { type: "section", head: "Why it matters", md:
          "Two of the Middle East's biggest states, one Turkish and one Arab, both see themselves as natural leaders of the region. That rivalry shaped what came next." }
      ],
      takeaways: [
        "Egypt was an Ottoman province from 1517; Muhammad Ali's armies invaded Anatolia in the 1830s.",
        "In the Cold War, NATO Turkey and Nasser's Egypt were on opposite sides.",
        "Trade and Turkish TV dramas brought the two closer in the 2000s."
      ],
      check: { q: "Who conquered Egypt for the Ottoman Empire in 1517?",
        choices: ["Suleiman the Magnificent", "Selim I", "Muhammad Ali"], answer: 1,
        explain: "Selim I defeated the Mamluk sultanate and made Egypt an Ottoman province." },
      sources: [
        { title: "Relations between Turkey and Egypt turn 'new leaf' as Erdogan visits Cairo", publisher: "France 24 (AFP)", url: "https://www.france24.com/en/live-news/20240214-turkey-and-egypt-turn-new-leaf-as-erdogan-visits-cairo", date: "2024-02-14" },
        { title: "Türkiye – bilateral relations", publisher: "Egypt State Information Service", url: "https://sis.gov.eg/en/international-relations/bilateral-relations/tuerkiye/", date: "n.d." },
        { title: "What do revived Turkey-Egypt relations mean for the region?", publisher: "The New Arab", url: "https://www.newarab.com/analysis/what-do-revived-turkey-egypt-relations-mean-region", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "tr_eg-2", kind: "relation", asOf: "2026-10-01",
      title: "Morsi, Rabaa and a cold war",
      dek: "Erdoğan backed Egypt's Muslim Brotherhood president. When the army overthrew him in 2013, Erdoğan called Sisi a 'killer', and for a decade the two fought proxy battles from Libya to the Mediterranean.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tr_eg/tr_eg-2-hero.webp",
          alt: "Illustration of grey warships patrolling a calm Mediterranean sea near a gas drilling platform.",
          caption: "Turkey and Egypt backed rival claims to the eastern Mediterranean's gas-rich waters.",
          credit: "Illustration — not a photograph",
          prompt: "Grey warships patrolling a calm blue Mediterranean sea near an offshore gas drilling platform, a distant rocky coastline, clear sky, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "A decade of hostility", items: [
          ["2012", "Mohamed Morsi elected; Erdoğan an ally"],
          ["Jul 2013", "Army removes Morsi; Turkey and Egypt downgrade ties"],
          ["2013–21", "Brotherhood exiles broadcast from Istanbul"],
          ["Nov 2019", "Turkey–Libya maritime deal"],
          ["Jun 2020", "Sisi declares Sirte–Jufra a 'red line' in Libya"],
          ["Aug 2020", "Egypt–Greece maritime deal"]
        ] },
        { type: "section", head: "Brotherhood allies", md:
          "When Egypt's revolution of 2011 brought the Muslim Brotherhood to power and Mohamed Morsi won the presidency in 2012 (see [[lesson:eg-12]]), Erdoğan saw kindred spirits: elected Islamists like his own AKP. Turkey offered loans and investment. When the army, led by Abdel Fattah al-Sisi, removed Morsi in July 2013 (see [[lesson:us_eg-2]]) and security forces killed hundreds of his supporters at Rabaa square in Cairo, Erdoğan was furious. He called Sisi a 'tyrant' and a 'killer' and vowed never to shake his hand; the four-finger 'Rabaa' salute became one of his signatures." },
        { type: "section", head: "Exiles in Istanbul", md:
          "The two countries expelled each other's ambassadors in November 2013. Thousands of Brotherhood members fled to Turkey, and several opposition television channels began broadcasting to Egypt from Istanbul, attacking Sisi daily. Cairo saw Turkey as a sponsor of its enemies; Ankara saw Egypt as the centre of a Gulf-backed counter-revolution against the Arab Spring, aligned with Saudi Arabia and the UAE (see [[lesson:sa_ae-1]])." },
        { type: "section", head: "Libya", md:
          "The rivalry turned military in Libya. Egypt and the UAE backed the eastern commander Khalifa Haftar; Turkey backed the UN-recognised government in Tripoli. In early 2020 Turkish drones and troops helped Tripoli's forces push Haftar back from the capital. In June 2020 Sisi declared the line between Sirte and Jufra a 'red line' and warned that Egypt would intervene directly if it was crossed. The front froze there." },
        { type: "section", head: "Gas and the sea", md:
          "The eastern Mediterranean's gas finds added a maritime quarrel. In November 2019 Turkey signed a deal with Tripoli drawing maritime boundaries that ignored Greek islands. In August 2020 Egypt answered with its own maritime deal with Greece. Egypt also helped found the East Mediterranean Gas Forum with Greece, Cyprus and Israel, which left Turkey out." },
        { type: "section", head: "The coup that failed", md:
          "The rivalry was personal and mirrored. When soldiers tried to overthrow Erdoğan in July 2016 (see [[lesson:tr-11]]), Egypt, then on the UN Security Council, objected to a statement calling on all parties to respect Turkey's 'democratically elected government', and the statement was dropped. Turks noted that Sisi had himself come to power by removing an elected president; Egyptians noted Erdoğan's purges that followed." },
        { type: "compare", head: "What divided them",
          left: { head: "Ideology", md:
            "Erdoğan's support for political Islam against Sisi's war on the Brotherhood." },
          right: { head: "Geopolitics", md:
            "Rival camps in Libya, the Mediterranean and the Gulf." } },
        { type: "section", head: "Why it matters", md:
          "The Turkey–Egypt split was the core of the Middle East's post-Arab Spring divide, pitting Islamist-friendly states against conservative autocracies, with Qatar on Turkey's side." }
      ],
      takeaways: [
        "Erdoğan backed Morsi and denounced Sisi after the 2013 coup; ambassadors were expelled.",
        "Egypt and Turkey backed opposite sides in Libya; Sisi drew a 'red line' at Sirte in 2020.",
        "Rival maritime deals in 2019–20 split them over Mediterranean gas."
      ],
      check: { q: "Which side did Turkey back in Libya's war?",
        choices: ["Khalifa Haftar in the east", "The UN-recognised government in Tripoli", "Neither"], answer: 1,
        explain: "Egypt and the UAE backed Haftar; Turkish drones helped Tripoli push him back in 2020." },
      sources: [
        { title: "Egypt recalibrated its strategy in Libya because of Turkey", publisher: "Atlantic Council", url: "https://www.atlanticcouncil.org/blogs/menasource/egypt-recalibrated-its-strategy-in-libya-because-of-turkey/", date: "n.d." },
        { title: "Turkey Faces a Dilemma in its Foreign Policy Toward Libya", publisher: "Arab Center Washington DC", url: "https://arabcenterdc.org/resource/turkey-faces-a-dilemma-in-its-foreign-policy-toward-libya/", date: "n.d." },
        { title: "Egypt's Sisi to pay first visit to Turkey as ties with Erdogan warm", publisher: "Al-Monitor", url: "https://www.al-monitor.com/originals/2024/08/egypts-sisi-pay-first-visit-turkey-ties-erdogan-warm", date: "2024-08" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "tr_eg-3", kind: "relation", asOf: "2026-10-01",
      title: "The handshake and the drills",
      dek: "Erdoğan and Sisi shook hands in 2022, restored ambassadors in 2023 and traded state visits. By 2025 their navies were exercising together and both were mediating on Gaza.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tr_eg/tr_eg-3-hero.webp",
          alt: "Illustration of two frigates sailing side by side in the eastern Mediterranean at dawn.",
          caption: "In September 2025 Turkey and Egypt held their first joint naval exercise in 13 years.",
          credit: "Illustration — not a photograph",
          prompt: "Two grey frigates sailing side by side across the calm eastern Mediterranean at dawn, a helicopter above, soft pink light on the water, documentary painting style, no people close up, no markings, no flags, no legible text." },
        { type: "timeline", head: "Reconciliation", items: [
          ["Nov 2022", "Erdoğan and Sisi shake hands at the World Cup in Qatar"],
          ["Jul 2023", "Ambassadors exchanged"],
          ["Feb 2024", "Erdoğan in Cairo, his first visit in over a decade"],
          ["Sep 2024", "Sisi's first visit to Turkey; 17 agreements"],
          ["Sep 2025", "'Friendship Sea' naval exercise"],
          ["Feb & Aug 2026", "Defence deals in Cairo; agreements at Alamein"]
        ] },
        { type: "section", head: "Why they made up", md:
          "By 2021 both had reasons to stop fighting. Turkey's economy was struggling and it wanted Gulf money, which meant patching up with Egypt's patrons too. Egypt needed investment and an end to hostile broadcasts. Turkey asked the Brotherhood channels in Istanbul to tone down their attacks, and officials held talks. At the opening of the World Cup in Qatar in November 2022, Erdoğan and Sisi shook hands, and in July 2023 they exchanged ambassadors again." },
        { type: "section", head: "State visits", md:
          "In February 2024 Erdoğan visited Cairo for the first time in more than a decade. The two condemned Israel's war in Gaza and called for 'a new stage in relations', setting a goal of $15 billion a year in trade. In September 2024 Sisi made his first-ever visit to Turkey and signed 17 agreements on energy, technology and tourism. Trade is approaching $9 billion, and Turkish firms are among the biggest investors in Egypt's textile and manufacturing zones." },
        { type: "section", head: "Navies together", md:
          "In September 2025 the two navies held 'Friendship Sea', their first joint exercise in 13 years, in the eastern Mediterranean, with Turkish frigates, submarines and F-16s. Israeli commentators watched with concern. In February 2026 Erdoğan returned to Cairo and the two signed defence agreements; Sisi said they had converging views on Gaza, Sudan, Libya and the Horn of Africa. In August 2026 ministers signed further cooperation deals at El Alamein." },
        { type: "section", head: "Gaza and beyond", md:
          "Egypt and Qatar were the main mediators between Israel and Hamas, and Turkey joined them (see [[lesson:eg-5]]). All three helped broker the October 2025 Gaza ceasefire, and Erdoğan attended the Sharm el-Sheikh summit Sisi hosted. In Libya they now press the rival governments to settle their differences, and in Somalia both support the central government." },
        { type: "section", head: "The Brotherhood question", md:
          "One issue is not settled. Egypt has convicted many Brotherhood leaders in absentia and wants Turkey to stop sheltering them. Ankara has curbed their television channels and some have left for other countries, but it has not handed over prominent exiles. Both governments have chosen to manage the issue quietly rather than let it derail the reconciliation." },
        { type: "compare", head: "The new partnership",
          left: { head: "Pragmatism", md:
            "Trade, investment, Gaza diplomacy and defence ties serve both governments." },
          right: { head: "Limits", md:
            "The Brotherhood, Mediterranean borders and Libya could divide them again." } },
        { type: "section", head: "Why it matters", md:
          "When two of the region's biggest military powers cooperate, they can shape outcomes from Gaza to Libya, which is why Israel watches closely (see [[lesson:tr_il-3]]) and Greece and Cyprus do too." }
      ],
      takeaways: [
        "Erdoğan and Sisi shook hands in 2022 and restored ambassadors in July 2023.",
        "They exchanged state visits in 2024 and set a $15 billion trade target.",
        "In 2025 their navies exercised together, and both mediated on Gaza."
      ],
      check: { q: "Where did Erdoğan and Sisi first shake hands after a decade of hostility?",
        choices: ["In Cairo", "At the World Cup opening in Qatar in 2022", "At the UN"], answer: 1,
        explain: "Ambassadors were restored the following summer." },
      sources: [
        { title: "Egypt's el-Sisi says Turkey visit paves way for new phase in relations", publisher: "Al Jazeera", url: "https://www.aljazeera.com/amp/news/2024/9/4/egypts-el-sisi-says-turkey-visit-paves-way-for-new-phase-in-relations", date: "2024-09-04" },
        { title: "Rare Turkey-Egypt naval drill may signal end of 'bad old days'", publisher: "Defense News", url: "https://www.defensenews.com/global/mideast-africa/2025/09/29/rare-turkey-egypt-naval-drill-may-signal-end-of-bad-old-days/", date: "2025-09-29" },
        { title: "Egypt, Turkey Sign Cooperation Agreements in Alamein, Discuss $15B Trade Target", publisher: "Egyptian Streets", url: "https://egyptianstreets.com/2026/08/15/egypt-turkey-sign-cooperation-agreements-in-alamein-discuss-15b-trade-target/", date: "2026-08-15" },
        { title: "Why Israel Fears Military Rapprochement Between Egypt and Türkiye", publisher: "Asharq Al-Awsat", url: "https://english.aawsat.com/features/5268630-why-israel-fears-military-rapprochement-between-egypt-and-t%C3%BCrkiye", date: "2025" },
        { title: "Egypt-Turkey cooperation brings profound changes in ties with African countries", publisher: "Atlantic Council", url: "https://www.atlanticcouncil.org/blogs/menasource/egypt-turkey-cooperation/", date: "n.d." }
      ]
    }
  ]
});
