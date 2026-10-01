/* ============================================================
   Relationship — Russia & Ukraine 🇷🇺🇺🇦
   One people? Gas and captives: the claim behind the war, the
   pipelines that bound the two countries, and the people the
   war has taken.
   Research note and sources: tools/research/ru_ua.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("ru_ua", {
  id: "ru_ua",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ru_ua-1", kind: "relation", asOf: "2026-09-30",
      title: "'One people'?",
      dek: "Putin says Russians and Ukrainians are one people and that Ukraine is an artificial state. Ukrainians have answered, above all since 2022, by turning away from Russia in language, faith and memory.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru_ua/ru_ua-1-hero.webp",
          alt: "Illustration of the golden domes of an old monastery on a hill above a wide river in Kyiv, with autumn trees along the bank.",
          caption: "Kyiv, where Rus adopted Christianity in 988, is claimed as a birthplace by both nations.",
          credit: "Illustration — not a photograph",
          prompt: "The golden domes and white walls of an ancient Orthodox monastery on a wooded hill above a wide river, autumn trees in yellow and red along the steep bank, soft morning mist over the water, a few small figures seen from far away walking on a path, contemplative and historic, no flags, no legible text." },
        { type: "timeline", head: "Two nations, one argument", items: [
          ["988", "Prince Volodymyr of Kyiv adopts Orthodox Christianity"],
          ["1863, 1876", "Russian Empire restricts printing in Ukrainian"],
          ["1991", "Ukrainians vote 90% for independence"],
          ["2019", "Ukraine's Orthodox Church becomes independent of Moscow"],
          ["Jul 2021", "Putin's essay on the 'historical unity' of the two peoples"],
          ["2024", "Ukraine passes a law against the Moscow-linked church"]
        ] },
        { type: "section", head: "Putin's claim", md:
          "In July 2021, seven months before the full-scale invasion, Vladimir Putin published an essay, *On the Historical Unity of Russians and Ukrainians*. He argued that the two were 'one people', descended from medieval Kyivan Rus, that modern Ukraine was largely created by Soviet leaders on 'historically Russian land', and that its true sovereignty was possible only in partnership with Russia. Russian officials repeat versions of this claim, which underpins the war's official aims (see [[unit:ru]], [[lesson:ru-3]])." },
        { type: "section", head: "Ukraine's answer", md:
          "Ukrainian historians reply that shared roots don't make one nation, any more than a common Latin past makes Italians and Spaniards the same people. They point to centuries in which the Russian Empire tried to erase a separate identity: decrees in 1863 and 1876 banned most publishing in Ukrainian, and the Soviet state later promoted Russian and punished 'nationalism'. The Holodomor famine of 1932–33, which killed millions of Ukrainians, looms large in that memory (see [[unit:ua]], [[lesson:ua-10]]). In December 1991 more than 90% of Ukrainians voted for independence, including majorities in Crimea and the Russian-speaking east." },
        { type: "section", head: "Language and faith", md:
          "Ukraine has long been bilingual, and many Ukrainians, including President Zelensky, grew up speaking Russian. Since 2014, and far more since 2022, millions have switched to Ukrainian in daily life. In 2019 the Ecumenical Patriarch in Istanbul recognised an independent Orthodox Church of Ukraine, ending more than three centuries under Moscow's church. In 2024 Ukraine passed a law to ban religious groups tied to Russia, aimed at the Ukrainian Orthodox Church, whose leaders had been linked to Moscow's patriarch, who blesses the war. Critics, including some human rights groups, worry about religious freedom." },
        { type: "section", head: "A hardened divide", md:
          "Before 2014 most Ukrainians had a positive view of Russia. By September 2025, 91% had a negative view and only 4% a positive one, according to the Kyiv International Institute of Sociology. Streets named after Russian writers and Soviet figures have been renamed across the country, and statues removed." },
        { type: "compare", head: "Two stories of the same history",
          left: { head: "The Kremlin's view", md:
            "Russians, Ukrainians and Belarusians are one people split by outsiders; Russia is defending Russian speakers and a shared civilisation." },
          right: { head: "Ukraine's view", md:
            "Ukraine is a separate nation with its own language and history; Russia's claim of unity is a cover for empire." } },
        { type: "section", head: "Why it matters", md:
          "The argument is not academic. If Ukrainians are 'really' Russians, Ukraine's independence and borders are negotiable; if they are a nation, the war is a war of conquest. Any peace deal will run into this question, over the rights of Russian speakers, the church and schools, all of which Moscow has raised in talks (see [[lesson:ua-6]])." }
      ],
      takeaways: [
        "Putin argues Russians and Ukrainians are 'one people' and that Ukraine's statehood is artificial.",
        "Ukrainians point to centuries of suppression of their language and to the 1991 independence vote.",
        "Since 2022 Ukrainians have shifted toward their own language and church; 91% now view Russia negatively."
      ],
      check: { q: "What did Ukraine's Orthodox Church gain in 2019?",
        choices: ["A seat in parliament", "Independence from the Moscow Patriarchate", "Control of Kyiv's government"], answer: 1,
        explain: "The Ecumenical Patriarch recognised an independent Orthodox Church of Ukraine, ending centuries under Moscow's church." },
      sources: [
        { title: "Article by Vladimir Putin 'On the Historical Unity of Russians and Ukrainians'", publisher: "President of Russia", url: "https://en.kremlin.ru/events/president/news/66181", date: "2021-07-12" },
        { title: "91% of Ukrainians have negative attitude towards Russia — KIIS poll", publisher: "NV", url: "https://english.nv.ua/nation/kiis-poll-91-of-ukrainians-now-hold-negative-views-of-russia-4-positive-50555297.html", date: "2025-09" },
        { title: "Orthodox Church of Ukraine", publisher: "Britannica", url: "https://www.britannica.com/topic/Orthodox-Church-of-Ukraine", date: "n.d." },
        { title: "Ukraine's president signs law banning Russia-linked religious groups", publisher: "CNN", url: "https://www.cnn.com/2024/08/24/europe/ukraine-zelensky-orthodox-church-ban-intl/index.html", date: "2024-08-24" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ru_ua-2", kind: "relation", asOf: "2026-09-30",
      title: "Gas: the pipeline weapon",
      dek: "For half a century Russian gas reached Europe through Ukraine. Moscow used the pipes as leverage, twice cutting supplies in winter, until the transit ended on New Year's Day 2025.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru_ua/ru_ua-2-hero.webp",
          alt: "Illustration of a snow-covered gas compressor station with large pipes and valves in a flat winter landscape at dusk.",
          caption: "Ukraine's pipelines once carried most of the Russian gas that Europe burned.",
          credit: "Illustration — not a photograph",
          prompt: "A snow-covered natural gas compressor station in a flat winter landscape at dusk, large grey pipes and valves rising from the ground, a few lit windows in a low control building, bare birch trees, cold blue light, quiet and heavy mood, no people, no flags, no legible text." },
        { type: "facts", head: "Gas in numbers", rows: [
          ["Transit via Ukraine, 2024", "About 15 billion cubic metres, down from well over 100 in the 2000s"],
          ["Ukraine's transit income", "About $1.3 billion a year under the 2019 contract"],
          ["January 2009 cut-off", "13 days; the EU lost about a fifth of its gas supply"],
          ["Transit ended", "1 January 2025, when the contract expired"]
        ] },
        { type: "section", head: "A Soviet inheritance", md:
          "From the 1960s the Soviet Union built great pipelines from Siberia westward, most of them through Ukraine. When the USSR collapsed, independent Ukraine inherited the pipes and Russia's main route to its European customers. The arrangement bound the two countries together: Russia needed Ukraine's pipes, and Ukraine needed Russia's cheap gas and the transit fees, which for years were among its biggest sources of hard currency.\n\n" +
          "Cheap gas also bought influence. In the 2010 Kharkiv accords, President Viktor Yanukovych extended the lease on Russia's Black Sea Fleet base in Crimea to 2042 in exchange for a discount on gas, a deal Ukrainians later saw as a step toward the 2014 annexation." },
        { type: "section", head: "Winter cut-offs", md:
          "Disputes over prices and debts led Gazprom to cut supplies to Ukraine on 1 January 2006, soon after the pro-Western Orange Revolution. In January 2009 a bigger fight stopped all flows through Ukraine for 13 days in freezing weather, cutting off much of south-eastern Europe; the EU lost about a fifth of its gas supplies. Each side blamed the other. The crises convinced Europe that it couldn't rely on the route, and Russia that it needed ways round Ukraine." },
        { type: "section", head: "Going round Ukraine", md:
          "Russia built the Nord Stream pipeline under the Baltic Sea directly to Germany, opened in 2011, and a second line, Nord Stream 2, completed in 2021 but never used. After the 2022 invasion Russia cut most gas to Europe; both Nord Stream pipelines were blown up in September 2022 in sabotage whose authors are still disputed. Remarkably, transit through Ukraine continued through the war under a 2019 five-year contract, earning Kyiv money from its enemy's exports. When the contract expired on 1 January 2025, Ukraine refused to renew it, and the flows stopped." },
        { type: "compare", head: "Two views of the end of transit",
          left: { head: "Kyiv and most of the EU", md:
            "Ending transit cut Russia's war income and Europe's dependence; the lost fees are a price worth paying." },
          right: { head: "Slovakia and Hungary", md:
            "Their cheapest gas came through Ukraine; ending transit raised their costs, and Kyiv should have kept it flowing." } },
        { type: "section", head: "Why it matters", md:
          "Gas shows how energy became a weapon on both sides. Russia used supply cuts to punish Ukraine and pressure Europe; Ukraine ended transit to deny Russia revenue, and Russian missiles and drones now target Ukraine's own gas production and power stations each winter (see [[lesson:ua-5]]). The EU has agreed to phase out all imports of Russian gas by 2027, ending a relationship that shaped Europe for fifty years (see [[unit:de]])." }
      ],
      takeaways: [
        "Soviet-built pipelines through Ukraine carried most Russian gas to Europe after 1991, earning Kyiv transit fees.",
        "Russia cut supplies in 2006 and 2009, and built Nord Stream to bypass Ukraine.",
        "Transit continued even through the war until Ukraine let the contract expire on 1 January 2025."
      ],
      check: { q: "What happened to Russian gas transit through Ukraine on 1 January 2025?",
        choices: ["It doubled", "It stopped when the transit contract expired", "It was moved to Nord Stream 2"], answer: 1,
        explain: "Ukraine declined to renew the five-year contract signed in 2019, so the flows ended." },
      sources: [
        { title: "The end of Russian gas transit via Ukraine and options for the EU", publisher: "Bruegel", url: "https://www.bruegel.org/analysis/end-russian-gas-transit-ukraine-and-options-eu", date: "2025-01" },
        { title: "The End of Russian Gas Transit via Ukraine", publisher: "Oxford Institute for Energy Studies", url: "https://www.oxfordenergy.org/publications/the-end-of-russian-gas-transit-via-ukraine-immediate-impact-and-implications-for-the-european-gas-market-in-2025/", date: "2025-01" },
        { title: "What the End of Ukraine Gas Transit Means for Kyiv, Moscow, and Europe", publisher: "Carnegie Endowment", url: "https://carnegieendowment.org/russia-eurasia/politika/2025/01/russia-ukraine-europe-gas-transit", date: "2025-01" },
        { title: "2009 Russia–Ukraine gas dispute", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2009_Russia%E2%80%93Ukraine_gas_dispute", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ru_ua-3", kind: "relation", asOf: "2026-09-30",
      title: "Children, prisoners and the occupied",
      dek: "Beyond the front line, the war has taken people: thousands of children moved to Russia, prisoners of war held for years, and millions living under occupation. Their fate is part of any peace.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru_ua/ru_ua-3-hero.webp",
          alt: "Illustration of a bus at a border checkpoint at dawn, with families seen from behind waiting on the roadside holding flowers.",
          caption: "Families wait at prisoner exchanges hoping to see relatives return.",
          credit: "Illustration — not a photograph",
          prompt: "A white bus arriving at a rural border checkpoint at dawn, families seen from behind waiting on the roadside, some holding small bunches of flowers and handmade signs without legible text, soft grey light, birch trees, emotional and hopeful mood, no faces, no flags, no legible text." },
        { type: "facts", head: "The human toll", rows: [
          ["Children Ukraine says were deported or forcibly moved", "More than 20,600 verified cases (Sept 2026)"],
          ["Children brought back", "About 2,600"],
          ["ICC arrest warrants", "Putin and Maria Lvova-Belova, March 2023"],
          ["Ukrainians freed in exchanges", "More than 8,600 by March 2026"],
          ["Largest exchange", "1,000 for 1,000, May 2025"],
          ["Territory held by Russia", "About a fifth of Ukraine"]
        ] },
        { type: "section", head: "The children", md:
          "Since 2014, and on a large scale since 2022, Russia has moved Ukrainian children from occupied areas to Russia or Russian-held territory: children from orphanages and boarding schools, children separated from parents, and children sent to 'summer camps' who never came back. Some were given Russian citizenship and placed with Russian families. Ukraine has verified more than 20,600 cases and brought back about 2,600 children, often through the mediation of Qatar and others. Russia says it evacuated children for their safety." },
        { type: "section", head: "Charges", md:
          "In March 2023 the International Criminal Court issued arrest warrants for Vladimir Putin and Russia's children's rights commissioner, Maria Lvova-Belova, for the unlawful deportation of children, a war crime. In March 2026 a UN commission of inquiry concluded that the deportations and forcible transfers amounted to crimes against humanity. The EU has kept adding sanctions on people and organisations involved, most recently in September 2026. Russia rejects the ICC's authority." },
        { type: "section", head: "Prisoners and civilians", md:
          "Prisoner exchanges are one of the few agreements between the two sides that reliably hold. The largest, 1,000 prisoners each way, followed talks in Istanbul in May 2025; by March 2026 Ukraine had brought home more than 8,600 people over four years. Returning Ukrainian prisoners have described torture and starvation, documented by UN monitors. Thousands of Ukrainian civilians, including journalists and local officials, are held in Russia, often without charge, and are hardest to free." },
        { type: "section", head: "Life under occupation", md:
          "Millions of Ukrainians live in areas Russia controls, about a fifth of the country. There, residents have been pressed to take Russian passports to get pensions, jobs and medical care; schools teach the Russian curriculum; and Ukrainian language and symbols are suppressed. Russia held referendums on annexation in September 2022, rejected as illegitimate by Ukraine and most of the world (see [[lesson:ua-8]])." },
        { type: "compare", head: "Two accounts",
          left: { head: "Ukraine, the UN and the ICC", md:
            "Deporting children and mistreating prisoners are war crimes and crimes against humanity; every child and captive must come home." },
          right: { head: "Moscow", md:
            "Russia rescued children from a war zone and cares for them; the ICC is politicised and has no authority over Russia." } },
        { type: "section", head: "Why it matters", md:
          "For Ukrainians, bringing back children and prisoners is a condition of any peace, as important as borders. It also tests international justice: whether courts and sanctions can hold leaders to account while they remain in power. Families of the missing, many of whom don't know whether their relatives are alive, have become one of Ukraine's most powerful civic voices." }
      ],
      takeaways: [
        "Ukraine has verified more than 20,600 cases of children deported or forcibly moved; about 2,600 have been returned.",
        "The ICC has issued warrants for Putin and Lvova-Belova, and a UN commission calls the deportations crimes against humanity.",
        "Prisoner exchanges continue, the largest 1,000 for 1,000 in May 2025, while millions live under Russian occupation."
      ],
      check: { q: "Who did the International Criminal Court issue arrest warrants for in March 2023?",
        choices: ["Ukraine's defence minister", "Vladimir Putin and Maria Lvova-Belova", "The heads of Gazprom"], answer: 1,
        explain: "The ICC charged them over the unlawful deportation of Ukrainian children, a war crime." },
      sources: [
        { title: "Situation in Ukraine: ICC judges issue arrest warrants against Vladimir Vladimirovich Putin and Maria Alekseyevna Lvova-Belova", publisher: "International Criminal Court", url: "https://www.icc-cpi.int/news/situation-ukraine-icc-judges-issue-arrest-warrants-against-vladimir-vladimirovich-putin-and", date: "2023-03-17" },
        { title: "UN Commission concludes that deportation and forcible transfer of Ukrainian children are crimes against humanity", publisher: "UN OHCHR", url: "https://www.ohchr.org/en/press-releases/2026/03/un-commission-concludes-deportation-and-forcible-transfer-ukrainian-children", date: "2026-03" },
        { title: "Ukraine confirms 20,000+ instances of illegal deportation and forced transfer of Ukrainian children", publisher: "Ukrinform", url: "https://www.ukrinform.net/rubric-society/4169199-ukraine-confirms-20000-instances-of-illegal-deportation-and-forced-transfer-of-ukrainian-children-by-russia.html", date: "2026" },
        { title: "Russia and Ukraine complete exchange of 1,000 prisoners each", publisher: "Euronews", url: "https://www.euronews.com/my-europe/2025/05/25/russia-and-ukraine-complete-exchange-of-1000-prisoners-each", date: "2025-05-25" },
        { title: "Over four years of the Coordination Headquarters' work, 8,669 people returned", publisher: "GlobalSecurity (President of Ukraine)", url: "https://www.globalsecurity.org/wmd/library/news/ukraine/2026/03/ukraine-260326-ukraine-president02.htm", date: "2026-03" }
      ]
    }
  ]
});
