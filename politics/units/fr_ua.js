/* ============================================================
   Relationship — France & Ukraine 🇫🇷🇺🇦
   Anne of Kyiv, a Kyivan princess who became queen of France;
   the Normandy format, Minsk and Macron's calls to Putin; and
   Caesar guns, Mirages, 100 Rafales and a force to guard the peace.
   The UK's part in the coalition is in gb_ua-3.
   Research note and sources: tools/research/fr_ua.md
   Current as of 11 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("fr_ua", {
  id: "fr_ua",
  asOf: "2026-10-11",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "fr_ua-1", kind: "relation", asOf: "2026-10-11",
      title: "A queen from Kyiv",
      dek: "In 1051 a princess of Kyiv married the king of France. Nine centuries later France was slow to see Ukraine as more than a part of Russia's world.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr_ua/fr_ua-1-hero.webp",
          alt: "Illustration of a medieval stone abbey church with a tall bell tower in a quiet French village at sunset.",
          caption: "Anne of Kyiv founded the abbey of Saint-Vincent at Senlis, north of Paris.",
          credit: "Illustration — not a photograph",
          prompt: "A medieval Romanesque stone abbey church with a tall square bell tower in a quiet French village at sunset, cobbled square, old stone houses and a few bare trees, warm golden light, historical documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Old ties, slow recognition", items: [
          ["1051", "Anne of Kyiv marries King Henry I of France"],
          ["1060", "Anne becomes regent for her son Philip I"],
          ["1919–21", "France backs Poland, not Ukraine, after the First World War"],
          ["1991", "France recognises independent Ukraine"],
          ["1994", "France gives Ukraine security assurances alongside Budapest"],
          ["2004", "France backs a peaceful outcome of the Orange Revolution"]
        ] },
        { type: "section", head: "Anne of Kyiv", md:
          "In 1051 Anne, daughter of Grand Prince Yaroslav the Wise of Kyiv, married Henry I, King of the Franks. Kyivan Rus was then one of Europe's largest and richest states, and Yaroslav married his daughters into royal families across the continent. Anne was better educated than most of the French court; her signature, written in Cyrillic letters, survives on a royal charter. After Henry's death in 1060 she served as regent for their son, Philip I, and founded the abbey of Saint-Vincent at Senlis. Ukrainians and French presidents alike now cite her as a symbol of Ukraine's European roots." },
        { type: "section", head: "A French view of Russia", md:
          "For most of modern history, though, France saw Ukraine through Russia. French elites admired Russian culture, and from 1894 France was allied with the Russian Empire against Germany. After the First World War, when Ukrainians tried to build an independent state, France supported Poland and the anti-Bolshevik Whites, not Ukrainian independence. During the Cold War, Charles de Gaulle spoke of a Europe 'from the Atlantic to the Urals' that included Russia." },
        { type: "section", head: "Independence", md:
          "France recognised Ukraine when it became independent in 1991 (see [[lesson:ua-9]]) and, though not a signatory to the 1994 Budapest Memorandum, gave Ukraine separate security assurances in a similar statement. French companies invested in Ukraine's banks, retail and farming, and Ukraine became a big exporter of grain and sunflower oil to Europe. But Paris, like Berlin, gave priority to its relationship with Moscow." },
        { type: "section", head: "Revolutions", md:
          "During the Orange Revolution of 2004 and the Maidan protests of 2013–14, France backed a peaceful, democratic outcome. In February 2014 its foreign minister, Laurent Fabius, with his German and Polish counterparts, negotiated a deal between President Viktor Yanukovych and the opposition, hours before Yanukovych fled Kyiv." },
        { type: "section", head: "Culture", md:
          "France has a small but active Ukrainian community, and French universities teach Ukrainian. The French language and culture remain popular among educated Ukrainians. In 2005 Ukraine's president, Viktor Yushchenko, unveiled a statue of Anne of Kyiv in Senlis, and after 2022 many French towns twinned with Ukrainian ones sent aid convoys east." },
        { type: "compare", head: "How France saw Ukraine",
          left: { head: "Before 2014", md:
            "A country in Russia's orbit, best handled through Moscow." },
          right: { head: "After 2022", md:
            "A European nation defending itself, and a future EU member." } },
        { type: "section", head: "Why it matters", md:
          "France's long habit of looking at Ukraine through Moscow explains both its early efforts to mediate with Putin and the depth of its later turn toward Kyiv." }
      ],
      takeaways: [
        "Anne of Kyiv married King Henry I of France in 1051 and later ruled as regent.",
        "For most of modern history France saw Ukraine through its relationship with Russia.",
        "France recognised Ukraine in 1991 and backed peaceful outcomes in the 2004 and 2014 revolutions."
      ],
      check: { q: "Who was Anne of Kyiv?",
        choices: ["A French ambassador", "A princess of Kyiv who became queen of France in the 11th century", "Ukraine's first president"], answer: 1,
        explain: "She married Henry I in 1051 and was regent for Philip I." },
      sources: [
        { title: "Anne of Kiev", publisher: "Britannica", url: "https://www.britannica.com/biography/Anne-of-Kiev", date: "n.d." },
        { title: "Normandy Format", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Normandy_Format", date: "n.d." },
        { title: "Ukraine, Nuclear Weapons, and Security Assurances at a Glance", publisher: "Arms Control Association", url: "https://www.armscontrol.org/factsheets/ukraine-nuclear-weapons-and-security-assurances-glance", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "fr_ua-2", kind: "relation", asOf: "2026-10-11",
      title: "Normandy, Minsk and calls to Putin",
      dek: "From 2014 France and Germany tried to end the Donbas war through the 'Normandy format'. Macron kept calling Putin after the invasion, and warned against humiliating Russia, before changing course.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr_ua/fr_ua-2-hero.webp",
          alt: "Illustration of a grand gilded palace room with a long negotiating table and high windows at night.",
          caption: "The leaders of France, Germany, Russia and Ukraine met in the Normandy format, most recently in Paris in 2019.",
          credit: "Illustration — not a photograph",
          prompt: "A grand gilded palace salon with crystal chandeliers, a long negotiating table with chairs and water glasses, tall windows with heavy curtains at night, empty and quiet, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Mediation", items: [
          ["6 Jun 2014", "Leaders meet at D-Day commemorations: the Normandy format"],
          ["Feb 2015", "Minsk II agreement brokered by Merkel and Hollande"],
          ["Dec 2019", "Last Normandy summit, in Paris"],
          ["Feb 2022", "Macron visits Putin in Moscow"],
          ["Jun 2022", "Macron: 'We must not humiliate Russia'"],
          ["Feb 2024", "Macron refuses to rule out Western troops"]
        ] },
        { type: "section", head: "The Normandy format", md:
          "On 6 June 2014, at the 70th anniversary of the D-Day landings, President François Hollande brought together Vladimir Putin and Ukraine's newly elected president, Petro Poroshenko, with Angela Merkel. The 'Normandy format' became the main channel for trying to end the war in Donbas, where Russia backed separatist forces. In February 2015, after a battle that ended in a Ukrainian defeat at Debaltseve, Hollande and Merkel brokered the Minsk II agreement: a ceasefire, withdrawal of heavy weapons, and special status for the separatist areas in return for Ukraine regaining control of its border." },
        { type: "section", head: "Minsk fails", md:
          "Minsk II was never implemented. Russia never withdrew its forces or let Ukraine control the border; Ukraine refused to hold elections in the occupied areas under Russian guns or grant them broad autonomy. Fighting continued at a lower level, killing thousands. Emmanuel Macron hosted the last Normandy summit in Paris in December 2019, which led to prisoner exchanges and little else." },
        { type: "section", head: "Calls to Putin", md:
          "Macron believed that Europe needed a security relationship with Russia. In February 2022 he flew to Moscow and sat at the far end of Putin's long table, trying to avert war. After the invasion he kept talking to Putin by phone, and in June 2022 told French newspapers that 'we must not humiliate Russia', so a diplomatic exit would be possible once fighting stopped. Ukraine's foreign minister replied that such calls 'can only humiliate France'." },
        { type: "section", head: "The turn", md:
          "Macron's view hardened as the war went on. He came to argue that Russia was a lasting threat to Europe and that Ukraine must not lose. In February 2024 he startled allies by refusing to rule out sending Western troops to Ukraine, a taboo he said Europe had to break to keep Russia guessing. France backed opening EU membership talks with Ukraine, which it had long been cautious about." },
        { type: "section", head: "Critics", md:
          "Ukrainians and Eastern Europeans criticised France for years of naive engagement with Moscow, and for weapons deliveries that were smaller than its rhetoric. French officials answered that much of their aid was not publicised, and that France had deliberately kept its contributions quiet to preserve room for diplomacy." },
        { type: "compare", head: "Macron's journey",
          left: { head: "2017–2022", md:
            "Engage Putin, build a European security order with Russia." },
          right: { head: "2023–2026", md:
            "Arm Ukraine, rearm Europe and lead a force to guard any peace." } },
        { type: "section", head: "Why it matters", md:
          "France's shift from mediator to one of Ukraine's leading backers reshaped European policy. With Britain, it now leads planning for Ukraine's postwar security." }
      ],
      takeaways: [
        "France and Germany mediated the 2015 Minsk II agreement in the 'Normandy format', but it was never implemented.",
        "Macron kept calling Putin after the invasion and warned in June 2022 against humiliating Russia.",
        "By 2024 Macron had turned, refusing to rule out Western troops in Ukraine."
      ],
      check: { q: "What was the 'Normandy format'?",
        choices: ["A NATO exercise", "Talks among France, Germany, Russia and Ukraine on the Donbas war", "A trade agreement"], answer: 1,
        explain: "It began at the D-Day commemorations in June 2014." },
      sources: [
        { title: "Normandy Format", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Normandy_Format", date: "n.d." },
        { title: "Macron draws new wave of criticism over call not to 'humiliate' Russia", publisher: "France 24", url: "https://www.france24.com/en/europe/20220606-macron-draws-new-wave-of-criticism-over-call-not-to-humiliate-russia", date: "2022-06-06" },
        { title: "Kyiv slams Macron's remarks not to 'humiliate' Russia", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2022/6/4/kyiv-slams-macrons-remarks-not-to-humiliate-russia", date: "2022-06-04" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "fr_ua-3", kind: "relation", asOf: "2026-10-11",
      title: "Caesars, Mirages and 100 Rafales",
      dek: "France supplies artillery, cruise missiles and fighter jets, and in 2025 signed a letter of intent for Ukraine to buy up to 100 Rafales. With Britain, it plans a force to secure any ceasefire.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr_ua/fr_ua-3-hero.webp",
          alt: "Illustration of two delta-wing fighter jets parked on an airbase apron at dusk, hangars and runway lights behind.",
          caption: "Ukraine signed a letter of intent for up to 100 Rafale fighters in November 2025.",
          credit: "Illustration — not a photograph",
          prompt: "Two grey delta-wing fighter jets with canard foreplanes parked on an airbase apron at dusk, open hangars and runway lights behind, a purple and orange sky, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Arming Ukraine", items: [
          ["2022", "Caesar self-propelled guns arrive"],
          ["2023", "SCALP cruise missiles delivered"],
          ["2025", "First Mirage 2000 fighters arrive"],
          ["Mar 2025", "Paris and London launch the coalition of the willing"],
          ["17 Nov 2025", "Letter of intent for up to 100 Rafales"],
          ["Jan 2026", "France and Britain agree to send troops after a ceasefire"]
        ] },
        { type: "section", head: "Weapons", md:
          "France's best-known contributions are the Caesar, a truck-mounted howitzer that can fire, move and hide quickly, and the SCALP cruise missile, the French version of Britain's Storm Shadow, delivered from 2023. France has also sent AMX-10 RC armoured vehicles, Crotale and SAMP/T air defences, Aster missiles and, from 2025, Mirage 2000 fighter jets with pilots trained in France. French firms build drones and artillery shells with Ukrainian partners, some inside Ukraine." },
        { type: "section", head: "The Rafale deal", md:
          "On 17 November 2025, at the Villacoublay air base near Paris, Zelensky and Macron signed a letter of intent for Ukraine to acquire up to 100 Rafale fighter jets, along with the new-generation SAMP/T air-defence system, radars and drones, over about ten years. It is a political commitment, not a contract, and depends on financing. First deliveries are not expected before 2029. In July 2026 the two governments agreed a roadmap for the first 16 jets, to be paid for partly through the EU's €90 billion loan, and Ukrainian pilots are due to begin training in France." },
        { type: "section", head: "The coalition of the willing", md:
          "In March 2025, with Britain, France founded the 'coalition of the willing' (see [[lesson:gb_ua-3]]): countries ready to help secure Ukraine after a ceasefire. In January 2026 Paris and London agreed to send troops if a peace deal is reached. The planned Multinational Force Ukraine would have its headquarters in Paris for its first year, then in London. Russia rejects any Western troops in Ukraine (see [[lesson:ru-6]])." },
        { type: "section", head: "Money and politics", md:
          "France's budget crisis (see [[lesson:fr-6]]) limits how much it can spend, and France gives less in military aid than Germany or Britain. The far-right National Rally, which leads polls for the April 2027 presidential election (see [[lesson:fr-7]]), backs Ukraine's sovereignty but opposes sending troops or long-range missiles." },
        { type: "section", head: "EU membership", md:
          "France supports Ukraine's eventual EU membership but worries about the effect on French farmers, who have protested against cheap Ukrainian grain, chicken and sugar. Paris has pushed for limits on some Ukrainian farm imports while backing the membership talks themselves." },
        { type: "compare", head: "The French debate",
          left: { head: "Macron's camp", md:
            "Europe must arm Ukraine and guarantee its security, with or without America." },
          right: { head: "The National Rally", md:
            "Support Ukraine's sovereignty, but avoid escalation and French troops." } },
        { type: "section", head: "Why it matters", md:
          "France is Europe's only nuclear power inside the EU and one of its largest arms makers. Its commitments, and whether the next president keeps them, will matter for Ukraine's security for decades." }
      ],
      takeaways: [
        "France supplies Caesar howitzers, SCALP cruise missiles, air defences and Mirage 2000 fighters.",
        "In November 2025 Ukraine signed a letter of intent to acquire up to 100 Rafale fighters over about ten years.",
        "France and Britain lead the coalition planning a Multinational Force Ukraine after any ceasefire."
      ],
      check: { q: "What did Zelensky and Macron sign on 17 November 2025?",
        choices: ["A peace treaty with Russia", "A letter of intent for up to 100 Rafale fighter jets", "Ukraine's EU accession treaty"], answer: 1,
        explain: "It is a political commitment over about ten years, not a firm contract." },
      sources: [
        { title: "Macron and Zelensky sign letter of intent for Ukraine to buy up to 100 Rafale fighter jets", publisher: "France 24", url: "https://www.france24.com/en/europe/20251117-zelensky-french-arms-ukraine-defense", date: "2025-11-17" },
        { title: "Ukraine's Questionable Plan To Buy Up To 100 Rafale Fighters", publisher: "The War Zone", url: "https://www.twz.com/air/ukraines-questionable-plan-to-buy-up-to-100-rafale-fighters", date: "2025-11" },
        { title: "Zelensky Says Ukrainian Pilots Could Start Rafale Training in France Soon", publisher: "Kyiv Post", url: "https://kyivpost.com/post/86164", date: "2026" },
        { title: "UK and France agree to send troops to Ukraine in event of peace deal with Russia", publisher: "CNN", url: "https://www.cnn.com/2026/01/06/europe/uk-france-troops-ukraine-russia-peace-deal-latam-intl", date: "2026-01-06" }
      ]
    }
  ]
});
