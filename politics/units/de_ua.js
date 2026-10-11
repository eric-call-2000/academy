/* ============================================================
   Relationship — Germany & Ukraine 🇩🇪🇺🇦
   Occupation and murder in 1941–44, then decades of seeing
   Ukraine through Moscow; Nord Stream, 5,000 helmets and the
   Zeitenwende; and Europe's biggest backer, Taurus and Merz's
   October 2026 visit.
   Research note and sources: tools/research/de_ua.md
   Current as of 11 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("de_ua", {
  id: "de_ua",
  asOf: "2026-10-11",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "de_ua-1", kind: "relation", asOf: "2026-10-11",
      title: "Occupation and a blind spot",
      dek: "Nazi Germany occupied Ukraine for three years and murdered millions there. After the war, and even after 1991, Germany mostly saw Ukraine through Moscow's eyes.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de_ua/de_ua-1-hero.webp",
          alt: "Illustration of a wooded ravine on the edge of a city in autumn, a stone memorial and candles among the trees.",
          caption: "At Babyn Yar in Kyiv, German forces murdered nearly 34,000 Jews in two days in September 1941.",
          credit: "Illustration — not a photograph",
          prompt: "A quiet wooded ravine on the edge of a city in autumn, bare birch and maple trees with yellow leaves, a simple stone memorial and small candles among the trees, grey overcast light, solemn mood, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "War and its shadow", items: [
          ["1918", "German troops occupy Ukraine after Brest-Litovsk"],
          ["Jun 1941", "Germany invades the Soviet Union"],
          ["29–30 Sep 1941", "Babyn Yar massacre in Kyiv"],
          ["1941–44", "Millions killed; millions deported for forced labour"],
          ["1991", "Ukraine becomes independent"],
          ["2008", "Germany blocks a NATO membership path for Ukraine"]
        ] },
        { type: "section", head: "Two occupations", md:
          "Germany occupied Ukraine twice in the 20th century. In 1918, after the treaty of Brest-Litovsk, German and Austrian troops took over, installing a puppet government to extract grain. In June 1941 Hitler invaded the Soviet Union, and within months almost all of Ukraine was under German rule. Nazi planners saw Ukrainians as people to be starved, enslaved or removed to make room for German settlers." },
        { type: "section", head: "Murder and slave labour", md:
          "The occupation was among the most murderous of the war (see [[lesson:de-10]]). On 29–30 September 1941, German units and their helpers shot nearly 34,000 Jews at the Babyn Yar ravine in Kyiv. About 1.5 million Jews were killed in Ukraine, many in mass shootings rather than camps. Millions of Ukrainian civilians and prisoners of war died of hunger, reprisals and fighting, and more than two million were deported to Germany as forced labourers. Ukraine lost perhaps seven to eight million people in the war, a fifth of its population." },
        { type: "section", head: "Guilt directed at Moscow", md:
          "After 1945 Germany's sense of guilt for the war in the east was directed largely at Russia, as the heir to the Soviet Union. Willy Brandt's Ostpolitik sought reconciliation with Moscow; Germans remembered the siege of Leningrad and Stalingrad more readily than Babyn Yar or the burned villages of Ukraine and Belarus. Historians and Ukrainian diplomats long complained that Germany treated Ukraine as part of Russia's world." },
        { type: "section", head: "After independence", md:
          "When Ukraine became independent in 1991, Germany recognised it and became a significant donor and trading partner. But its policy was built around Russia. In 2008, at NATO's Bucharest summit, Chancellor Angela Merkel, with France, blocked a formal path to membership for Ukraine and Georgia, warning that it would provoke Moscow. After Russia seized Crimea in 2014, Germany backed sanctions and, with France, mediated the Minsk agreements in the Normandy format (see [[lesson:fr_ua-2]]), but kept buying more Russian gas." },
        { type: "section", head: "Remembering", md:
          "Germany has since tried to correct the blind spot. After years of refusing Ukrainian requests, the Bundestag voted on 30 November 2022 to recognise the Holodomor, Stalin's famine of 1932–33 in Ukraine (see [[lesson:ua-10]]), as a genocide. German historians and museums have also begun to give the occupation of Ukraine more attention in exhibitions and school curricula." },
        { type: "compare", head: "Germany's lens",
          left: { head: "Before 2022", md:
            "Ukraine seen as part of Russia's sphere; reconciliation meant Moscow." },
          right: { head: "After 2022", md:
            "Ukraine recognised as a victim of Germany's war and of Russia's." } },
        { type: "section", head: "Why it matters", md:
          "Germany's history shaped its caution toward arming Ukraine in 2022, and also its eventual decision to become one of Ukraine's biggest backers." }
      ],
      takeaways: [
        "Nazi Germany occupied Ukraine from 1941 to 1944; nearly 34,000 Jews were shot at Babyn Yar in two days.",
        "After the war Germany directed its reconciliation largely at Moscow, overlooking Ukraine.",
        "Germany blocked a NATO path for Ukraine in 2008 and kept buying Russian gas after Crimea."
      ],
      check: { q: "What happened at Babyn Yar in September 1941?",
        choices: ["A Soviet victory", "German forces shot nearly 34,000 Jews in two days", "Ukraine declared independence"], answer: 1,
        explain: "It was one of the largest single massacres of the Holocaust." },
      sources: [
        { title: "Babi Yar", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/article/kiev-and-babi-yar", date: "n.d." },
        { title: "Germany Bundestag recognizes 1930s Ukraine famine as genocide", publisher: "JURIST", url: "https://www.jurist.org/news/2022/11/germanys-bundestag-recognizes-1930s-ukraine-famine-as-genocide/", date: "2022-11-30" },
        { title: "What are Germany's Taurus missiles that Ukraine wants?", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/5/28/what-are-germanys-taurus-missiles-that-ukraine-wants", date: "2025-05-28" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "de_ua-2", kind: "relation", asOf: "2026-10-11",
      title: "Helmets, tanks and the Zeitenwende",
      dek: "In January 2022 Germany offered Ukraine 5,000 helmets. Three days after the invasion it announced a 'turning point', and within a year it was sending tanks and air defences.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de_ua/de_ua-2-hero.webp",
          alt: "Illustration of a row of heavy battle tanks on flatbed rail wagons at a station in winter.",
          caption: "Germany agreed to send Leopard 2 tanks in January 2023, after months of pressure.",
          credit: "Illustration — not a photograph",
          prompt: "A row of heavy main battle tanks loaded on flatbed rail wagons at a freight station in winter, light snow, grey sky, overhead power lines and a signal box, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From helmets to Leopards", items: [
          ["Jan 2022", "Germany offers 5,000 helmets"],
          ["24 Feb 2022", "Russia invades; Nord Stream 2 already halted"],
          ["27 Feb 2022", "Scholz's 'Zeitenwende' speech"],
          ["Oct 2022", "First IRIS-T air-defence system arrives"],
          ["25 Jan 2023", "Germany agrees to send Leopard 2 tanks"],
          ["2023–24", "Scholz refuses Taurus cruise missiles"]
        ] },
        { type: "section", head: "Gas and pipelines", md:
          "For years German governments backed Nord Stream, pipelines under the Baltic carrying Russian gas directly to Germany and bypassing Ukraine, which lost transit fees and feared it would lose protection too (see [[lesson:de_ru-2]]). Ukraine and Poland called Nord Stream 2 a geopolitical weapon. Germany insisted it was a commercial project, until Chancellor Olaf Scholz halted its approval two days before the invasion." },
        { type: "section", head: "The helmets", md:
          "As Russian troops massed on the border in January 2022, Ukraine asked for weapons. Germany, citing a policy of not sending arms to conflict zones, offered 5,000 military helmets. The mayor of Kyiv, Vitali Klitschko, called it 'an absolute joke'. Germany also delayed Estonia's transfer of old East German howitzers to Ukraine. Many Germans, and many in Scholz's Social Democratic party, still believed that trade and dialogue with Moscow, the old Ostpolitik, could prevent a war, and that German weapons should never again be used against Russians." },
        { type: "section", head: "Zeitenwende", md:
          "Three days after the invasion, on 27 February 2022, Scholz told the Bundestag that the world had reached a 'Zeitenwende', a turning point. He announced a €100 billion fund for the armed forces, a commitment to spend 2% of GDP on defence (see [[lesson:de-5]]), and weapons deliveries to Ukraine: anti-tank weapons and Stinger missiles at first, then Gepard anti-aircraft tanks, howitzers and, from October, IRIS-T air-defence systems, which proved highly effective against Russian missiles." },
        { type: "section", head: "Leopards", md:
          "Scholz moved cautiously, refusing to act alone and insisting on matching American steps. For months he resisted sending Leopard 2 tanks, which many European armies owned but could not re-export without German permission. On 25 January 2023, under pressure from Poland, Britain and others, and after the United States agreed to send Abrams tanks, Germany approved its own Leopards and allowed allies to send theirs. Germany also sent Patriot batteries, giving up several of its own, and became one of the main suppliers of the artillery shells Ukraine needed most." },
        { type: "section", head: "Taurus", md:
          "One line Scholz would not cross was the Taurus cruise missile, with a range of about 500 kilometres. Ukraine asked for it in May 2023; Scholz refused, warning it could drag Germany into the war because German soldiers might be needed to program targets." },
        { type: "compare", head: "Scholz's caution",
          left: { head: "Critics", md:
            "Germany was always late and hid behind Washington." },
          right: { head: "Defenders", md:
            "Germany became the second-largest donor while avoiding escalation." } },
        { type: "section", head: "Why it matters", md:
          "The 'Zeitenwende' ended decades of German policy toward Russia. But Germany's slow decisions in 2022 and 2023 shaped how Ukrainians, and allies, judged it." }
      ],
      takeaways: [
        "Germany offered Ukraine 5,000 helmets in January 2022, and long backed the Nord Stream pipelines.",
        "Scholz declared a 'Zeitenwende' on 27 February 2022 and began sending weapons, including IRIS-T air defences.",
        "Germany agreed to send Leopard 2 tanks in January 2023 but refused Taurus cruise missiles."
      ],
      check: { q: "What did Scholz announce in his 'Zeitenwende' speech?",
        choices: ["Recognition of Crimea as Russian", "A €100 billion fund for the armed forces and arms for Ukraine", "Germany leaving NATO"], answer: 1,
        explain: "It was delivered three days after Russia's full-scale invasion." },
      sources: [
        { title: "Germany's Defense Policy Evolves: Merz Says Taurus Missiles for Ukraine 'Possible'", publisher: "Kyiv Post", url: "https://www.kyivpost.com/post/53608", date: "2025" },
        { title: "Germany's Merz open to sending Taurus missiles to Ukraine", publisher: "Anadolu Agency", url: "https://www.aa.com.tr/en/europe/germany-s-merz-open-to-sending-taurus-missiles-to-ukraine/3537751", date: "2025" },
        { title: "Taurus missiles, stronger Europe — what can Ukraine hope for after German elections", publisher: "The Kyiv Independent", url: "https://kyivindependent.com/taurus-missiles-stronger-europe-what-can-ukraine-hope-for-after-german-elections/", date: "2025-02" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "de_ua-3", kind: "relation", asOf: "2026-10-11",
      title: "Europe's paymaster for Ukraine",
      dek: "Germany has become Ukraine's biggest European backer and home to more than a million Ukrainian refugees. Merz dropped range limits and in October 2026 promised drones and long-range weapons.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/de_ua/de_ua-3-hero.webp",
          alt: "Illustration of a modern factory hall where workers assemble rows of small fixed-wing drones under bright lights.",
          caption: "Germany is financing joint production of interceptor drones with Ukraine.",
          credit: "Illustration — not a photograph",
          prompt: "A modern factory hall with long workbenches where workers assemble rows of small fixed-wing drones and propellers under bright overhead lights, shelves of parts, clean and busy, documentary painting style, figures seen from behind, no flags, no legible text." },
        { type: "timeline", head: "The biggest European backer", items: [
          ["2022–26", "More than a million Ukrainians find refuge in Germany"],
          ["May 2025", "Merz becomes chancellor; range limits lifted"],
          ["May 2025", "Germany to fund Ukrainian long-range weapons"],
          ["Mar 2026", "Merz: no point in Taurus as Ukraine builds its own"],
          ["4 Oct 2026", "Merz in Kyiv: €1.3 billion package"],
          ["Oct 2026", "15 agreements worth over €8.5 billion signed"]
        ] },
        { type: "section", head: "Money and weapons", md:
          "After a slow start, Germany became the largest European donor of military aid to Ukraine and the second-largest overall after the United States, supplying air defences such as IRIS-T and Patriot, artillery, tanks and ammunition. As American aid shrank under Trump, Germany's role grew, and it now budgets billions of euros a year for Ukraine. As the largest contributor to the EU budget, Germany also stands behind much of the EU's €90 billion loan to Ukraine for 2026 and 2027 (see [[lesson:ua-8]])." },
        { type: "section", head: "Refugees", md:
          "Germany hosts more Ukrainian refugees than any other EU country. About 1.28 million people who fled the war were under temporary protection there in May 2026; more than 470,000 others had come and later left. Ukrainians in Germany receive the same basic benefits as German jobseekers, a policy the government has begun to tighten for new arrivals, arguing it discouraged work." },
        { type: "section", head: "Merz and Taurus", md:
          "As opposition leader, Friedrich Merz attacked Scholz for refusing Taurus missiles. After becoming chancellor in May 2025, he announced that Germany and its allies no longer limited the range of weapons Ukraine could fire, and that Germany would fund Ukraine's own long-range missiles and drones instead. In March 2026 he said there was no longer much point in sending Taurus, because Ukraine was making its own long-range weapons; Zelensky still asks for them." },
        { type: "section", head: "October 2026", md:
          "On 4 October 2026 Merz visited Kyiv as Russia stepped up attacks on the power grid. He announced about €1.3 billion in new aid: around €1 billion of military aid, including long-range strike weapons, combat drones and satellite technology, and €350 million for energy repairs before winter. Germany will finance joint production of interceptor drones to counter Russia's jet-powered drones, and the two governments signed 15 agreements worth more than €8.5 billion, mostly on weapons production and procurement." },
        { type: "section", head: "Politics at home", md:
          "Support for Ukraine divides German voters. The far-right AfD and the left-wing BSW want aid cut and talks with Moscow, and they are strongest in the east (see [[lesson:de-6]])." },
        { type: "compare", head: "The German debate",
          left: { head: "Government", md:
            "Helping Ukraine resist protects Germany and Europe from Russia." },
          right: { head: "AfD and BSW", md:
            "The money should be spent at home, and Germany risks being dragged into war." } },
        { type: "section", head: "Why it matters", md:
          "With American support uncertain, Germany's money and factories are now central to Ukraine's ability to fight, and to any security guarantee after a ceasefire." }
      ],
      takeaways: [
        "Germany is Ukraine's largest European military donor and hosts about 1.28 million Ukrainian refugees.",
        "Merz lifted range limits in 2025 and funds Ukraine's own long-range weapons instead of sending Taurus.",
        "In Kyiv on 4 October 2026 Merz announced €1.3 billion of aid, including long-range weapons and interceptor drones."
      ],
      check: { q: "Why did Merz say in March 2026 that sending Taurus made little sense?",
        choices: ["Germany had run out of them", "Ukraine was producing its own long-range weapons, with German funding", "Russia had agreed a ceasefire"], answer: 1,
        explain: "Zelensky still says he hopes to get them." },
      sources: [
        { title: "Germany's Merz Announces New Aid for Ukraine in Kyiv as Russia Steps Up Attacks", publisher: "DTN (AP)", url: "https://www.dtnpf.com/agriculture/web/ag/news/world-policy/article/2026/10/05/germanys-merz-announces-new-aid-kyiv", date: "2026-10-05" },
        { title: "Germany Pledges $1.5B in Ukraine Aid, Including Drones, Long-Range Weapons", publisher: "The Defense Post", url: "https://thedefensepost.com/2026/10/06/germany-ukraine-aid-drones-weapons/", date: "2026-10-06" },
        { title: "Germany's Merz sees no point in supplying long-range Taurus missiles to Ukraine", publisher: "Ukrainska Pravda", url: "https://www.pravda.com.ua/eng/news/2026/03/25/8027157/", date: "2026-03-25" },
        { title: "German government reports 1.42 million Ukrainian citizens registered by May 2026", publisher: "Mezha", url: "https://mezha.net/eng/news/8d1a899f_german_government_reports/", date: "2026" },
        { title: "Merz says Germany will help Ukraine produce long-range missiles", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/5/28/ukraines-zelenskyy-to-meet-germanys-merz-in-berlin-seeks-more-support", date: "2025-05-28" }
      ]
    }
  ]
});
