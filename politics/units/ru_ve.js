/* ============================================================
   Relationship — Russia & Venezuela 🇷🇺🇻🇪
   Chávez and Putin: arms deals, bombers and a Kalashnikov
   factory; Rosneft's oil-for-loans, the 2019 standoff and the
   Wagner guards; and what Russia lost when US forces seized
   Maduro. The US side is in us_ve; the raid itself in ve-5.
   Research note and sources: tools/research/ru_ve.md
   Current as of 7 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("ru_ve", {
  id: "ru_ve",
  asOf: "2026-10-07",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ru_ve-1", kind: "relation", asOf: "2026-10-07",
      title: "Chávez's arsenal",
      dek: "Hugo Chávez bought billions of dollars of Russian weapons and invited Russian bombers to Caracas. For Putin, Venezuela was a way to show the United States that Russia could reach its backyard.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru_ve/ru_ve-1-hero.webp",
          alt: "Illustration of two large white swing-wing bombers parked on a tropical airfield with green mountains behind.",
          caption: "Russian Tu-160 bombers landed in Venezuela in 2008 and again in 2018.",
          credit: "Illustration — not a photograph",
          prompt: "Two large white swing-wing strategic bombers parked on a tropical military airfield, green coastal mountains and palm trees behind, heat haze and bright clouds, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "An arms partnership", items: [
          ["2001", "Chávez makes his first visit to Moscow"],
          ["2005–06", "Deals for 100,000 rifles, helicopters and Su-30 jets"],
          ["Sep 2008", "Russian Tu-160 bombers land in Venezuela"],
          ["Nov 2008", "Joint naval exercises in the Caribbean"],
          ["2009–10", "Russian credit lines worth billions for arms"],
          ["Mar 2013", "Chávez dies; Maduro succeeds him"]
        ] },
        { type: "section", head: "Two leaders, one rival", md:
          "Hugo Chávez, elected Venezuela's president in 1998, styled himself an enemy of 'the empire', as he called the United States (see [[lesson:ve-3]]). Vladimir Putin, in power from 2000, wanted to restore Russia's standing as a world power. The two had a common interest: weakening American influence. Chávez visited Russia many times, and called Putin a friend. When the United States stopped selling Venezuela arms and spare parts in 2006, Russia became its main supplier." },
        { type: "section", head: "Guns and jets", md:
          "From 2005 Venezuela signed deals worth billions of dollars for Russian weapons: 100,000 Kalashnikov AK-103 rifles, plans for a factory to make more, dozens of military helicopters, 24 Sukhoi Su-30 fighter jets, tanks, rocket launchers and S-300 air defence missiles. Russia lent Venezuela money to pay for much of it. By some counts it bought more than $10 billion of Russian arms, making Venezuela one of Russia's biggest customers. The Kalashnikov factory near Maracay, promised in 2006, was still unfinished more than a decade later." },
        { type: "section", head: "Bombers and warships", md:
          "In September 2008, weeks after Russia's war with Georgia angered Washington, two Russian Tu-160 strategic bombers, able to carry nuclear weapons, flew to Venezuela for training flights. In November a Russian naval squadron led by the nuclear-powered cruiser Peter the Great held exercises with Venezuela's navy in the Caribbean, the first Russian naval visit to the region since the Cold War. Chávez said Venezuela would welcome Russian forces 'whenever they want'." },
        { type: "section", head: "Diplomatic support", md:
          "Venezuela returned the favour. In 2009 it became one of the few countries to recognise Abkhazia and South Ossetia, the Georgian regions Russia had recognised as independent after the 2008 war. In 2014 it backed Russia over Crimea at the UN. Russian state media, such as RT's Spanish service, built a large audience in Venezuela and across Latin America." },
        { type: "section", head: "Limits", md:
          "Trade between the two stayed small. Russia sold weapons and grain; Venezuela sold little in return except oil rights. The relationship was political and military, built on two leaders' shared hostility to Washington, and it depended heavily on Venezuela's oil income to pay the bills." },
        { type: "compare", head: "What each wanted",
          left: { head: "Chávez", md:
            "Weapons, a powerful friend and protection against a US-backed coup." },
          right: { head: "Putin", md:
            "Arms sales, oil deals and a foothold in America's neighbourhood." } },
        { type: "section", head: "Why it matters", md:
          "Russia's arms gave Venezuela the strongest air defences in the region, at least on paper. In January 2026 US aircraft overwhelmed them in hours, a sign of how little the hardware was worth without trained crews and spare parts." }
      ],
      takeaways: [
        "From 2005 Chávez bought billions of dollars of Russian arms, including Su-30 jets, helicopters and S-300 missiles.",
        "Russian Tu-160 bombers flew to Venezuela in 2008, and Russian warships exercised in the Caribbean.",
        "Venezuela backed Russia diplomatically, recognising Abkhazia and South Ossetia in 2009."
      ],
      check: { q: "Why did Venezuela turn to Russia for weapons in 2006?",
        choices: ["Russia's weapons were free", "The US had stopped selling it arms and spare parts", "A UN embargo on Western arms"], answer: 1,
        explain: "Russia lent Venezuela much of the money to buy them." },
      sources: [
        { title: "Venezuela, Russia Sign Weapons Deal", publisher: "Arms Control Association", url: "https://www.armscontrol.org/act/2006-09/venezuela-russia-sign-weapons-deal", date: "2006-09" },
        { title: "Chavez set to spend big on Russian weapons", publisher: "CNN", url: "https://edition.cnn.com/2008/WORLD/americas/07/22/chavez.russia/", date: "2008-07-22" },
        { title: "Two Russian bombers land in Venezuela", publisher: "CNN", url: "https://www.cnn.com/2008/WORLD/americas/09/10/russia.venezuela/", date: "2008-09-10" },
        { title: "Russian-Venezuelan Defense Cooperation", publisher: "CNA", url: "https://www.cna.org/reports/2019/06/IOP-2019-U-020309-Final.pdf", date: "2019-06" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ru_ve-2", kind: "relation", asOf: "2026-10-07",
      title: "Oil for loans, and guards for Maduro",
      dek: "Russia's oil giant Rosneft lent Venezuela billions against future oil, and when Maduro's rule was challenged in 2019, Moscow flew in soldiers and backed him at the UN.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru_ve/ru_ve-2-hero.webp",
          alt: "Illustration of oil derricks and pumpjacks in a flat swampy landscape at dusk, with flares burning in the distance.",
          caption: "Rosneft took stakes in heavy-oil projects in Venezuela's Orinoco Belt.",
          credit: "Illustration — not a photograph",
          prompt: "Oil derricks and nodding pumpjacks scattered across a flat swampy savanna at dusk, gas flares burning orange in the distance, pipelines and a muddy track, humid haze, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Money and protection", items: [
          ["2010s", "Rosneft takes stakes in Orinoco oil projects"],
          ["2014–17", "Rosneft lends billions, repaid in crude"],
          ["Dec 2016", "Rosneft takes half of Citgo as collateral"],
          ["Jan 2019", "Guaidó claims the presidency; Russia backs Maduro"],
          ["Mar 2019", "About 100 Russian military personnel fly to Caracas"],
          ["Mar 2020", "Rosneft sells its Venezuelan assets to the Russian state"]
        ] },
        { type: "section", head: "Rosneft's bet", md:
          "Under Igor Sechin, a close ally of Putin, the state oil company Rosneft became Venezuela's financier. It took stakes in joint ventures in the Orinoco Belt, home to some of the world's largest reserves of heavy oil, and from 2014, as falling oil prices and mismanagement left Venezuela short of cash, it lent PDVSA, the state oil company, billions of dollars to be repaid in crude. In 2016 Rosneft took 49.9% of Citgo, PDVSA's American refining company, as collateral for a $1.5 billion loan, alarming US lawmakers." },
        { type: "section", head: "Debts", md:
          "Russia also lent the government directly. In 2017, as Venezuela neared default, Moscow agreed to restructure about $3 billion of state debt over ten years. Russian wheat helped fill shop shelves, and Russian firms supplied the diluents needed to move Venezuela's thick crude. Western analysts estimated that Russia had committed well over $10 billion to Venezuela in loans and investment." },
        { type: "section", head: "The 2019 standoff", md:
          "In January 2019 the head of the National Assembly, Juan Guaidó, declared himself interim president, arguing that Maduro's 2018 re-election had been fraudulent. The United States and about 50 countries recognised him. Russia called it an attempted coup and blocked Western resolutions at the UN Security Council. In March two Russian military planes landed in Caracas with about 100 personnel and 35 tonnes of equipment, led by a general; Moscow said they were specialists servicing Russian-made weapons. Contractors linked to the Wagner group were reported to be guarding Maduro." },
        { type: "section", head: "Retreat", md:
          "As US [[sanctions]] tightened, Rosneft became a target. In 2020 Washington sanctioned two of its trading subsidiaries for handling Venezuelan oil, and in March 2020 Rosneft sold its Venezuelan assets to a company wholly owned by the Russian state, which became Roszarubezhneft. The interests stayed Russian, but out of reach of sanctions on Rosneft." },
        { type: "section", head: "Treaty", md:
          "In May 2025 Maduro and Putin signed a ten-year strategic partnership treaty in Moscow covering energy, mining, transport and security. Russia ratified it in October 2025, weeks before the US military build-up in the Caribbean turned into a blockade. Unlike Russia's 2024 treaty with North Korea, it has no mutual-defence clause." },
        { type: "compare", head: "Russia's stake",
          left: { head: "Commercial", md:
            "Oil reserves, loans to recover and weapons customers." },
          right: { head: "Strategic", md:
            "An ally next to the United States, and leverage in bargaining with Washington." } },
        { type: "section", head: "Why it matters", md:
          "Russia's money and protection helped Maduro survive the 2019 challenge. Whether that support would survive a direct confrontation with the United States was a question answered in January 2026." }
      ],
      takeaways: [
        "Rosneft lent Venezuela billions against future oil and took half of Citgo as collateral in 2016.",
        "In 2019 Russia backed Maduro against Guaidó, blocking UN action and flying about 100 military personnel to Caracas.",
        "Maduro and Putin signed a ten-year strategic partnership treaty in May 2025."
      ],
      check: { q: "What did Rosneft take as collateral for a loan in 2016?",
        choices: ["Venezuela's gold reserves", "49.9% of Citgo, PDVSA's US refiner", "An airbase"], answer: 1,
        explain: "The deal alarmed US lawmakers." },
      sources: [
        { title: "Rosneft's Withdrawal amid U.S. Sanctions Contributes to Venezuela's Isolation", publisher: "CSIS", url: "https://www.csis.org/analysis/rosnefts-withdrawal-amid-us-sanctions-contributes-venezuelas-isolation", date: "2020" },
        { title: "Rosneft to cease Venezuela operations, sell assets to Russian government", publisher: "S&P Global", url: "https://www.spglobal.com/energy/en/news-research/latest-news/crude-oil/032820-rosneft-to-cease-venezuela-operations-sell-assets-to-russian-government", date: "2020-03-28" },
        { title: "Russians In Venezuela: What We Know So Far", publisher: "Bellingcat", url: "https://www.bellingcat.com/news/americas/2019/04/04/russians-in-venezuela-what-we-know-so-far/", date: "2019-04-04" },
        { title: "Law on the Ratification of the Treaty between Russia and Venezuela on Strategic Partnership and Cooperation", publisher: "President of Russia", url: "https://en.kremlin.ru/acts/news/78304", date: "2025-10" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ru_ve-3", kind: "relation", asOf: "2026-10-07",
      title: "The ally Moscow couldn't save",
      dek: "When US forces seized Maduro in January 2026, Russia protested but did nothing. Venezuela's oil now flows to America, and Moscow is trying to keep what it can.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ru_ve/ru_ve-3-hero.webp",
          alt: "Illustration of a tanker loading at an oil terminal on a Caribbean coast at dawn, with storage tanks and hills.",
          caption: "By August 2026 more than half a million barrels a day of Venezuelan oil were going to the United States.",
          credit: "Illustration — not a photograph",
          prompt: "A large oil tanker loading at a terminal jetty on a Caribbean coast at dawn, white storage tanks and pipework on shore, green hills behind, calm turquoise water, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "After the raid", items: [
          ["3 Jan 2026", "US forces seize Maduro in Caracas"],
          ["3 Jan 2026", "Russia condemns 'armed aggression', demands his release"],
          ["5 Jan 2026", "Russia's ambassador greets acting president Rodríguez"],
          ["Jan 2026", "US replaces Russia as Venezuela's main supplier of diluents"],
          ["Apr 2026", "Chevron signs new deals; oil flows north"],
          ["Sep 2026", "Report finds ties with Russia, China and Iran have cooled"]
        ] },
        { type: "section", head: "Silence from the Kremlin", md:
          "On 3 January 2026, US forces struck Caracas and captured Nicolás Maduro (see [[lesson:ve-5]]). Russia's foreign ministry condemned 'an act of armed aggression', called for an emergency meeting of the UN Security Council and demanded that the United States release 'the lawfully elected president of a sovereign country'. But Putin himself said nothing publicly for days. Russia, fighting in Ukraine and courting Trump over peace talks, had neither the means nor, apparently, the will to do more. Its air-defence missiles in Venezuela had not stopped the raid." },
        { type: "section", head: "Backing Rodríguez", md:
          "Moscow quickly adjusted. Russia's ambassador, Sergey Melik-Bagdasarov, was seen greeting Delcy Rodríguez as soon as she was sworn in as acting president on 5 January, and Russia declared its support for her. Rodríguez, a long-time Maduro loyalist with close ties to Moscow, has since restored relations with Washington while trying to keep other partners, including Russia and China, from leaving entirely (see [[lesson:ve-6]])." },
        { type: "section", head: "Losing the oil game", md:
          "Russia's commercial position has weakened sharply. In 2025 Russian suppliers had almost a monopoly on diluents, the light oils Venezuela mixes with its heavy crude to make it flow; by January 2026 the United States had replaced them. Under deals signed with US companies, more than 500,000 barrels a day of Venezuelan oil, about 40% of output, now go to the United States. Russia's state-owned Roszarubezhneft keeps its stakes in joint ventures, and with Chinese firms, Russian companies hold rights to billions of barrels of reserves, but they can no longer sell oil freely." },
        { type: "section", head: "Cooling ties", md:
          "A September 2026 report by the anti-corruption group Transparencia Venezuela found that Venezuela's relations with Russia, China and Iran had cooled steadily since Maduro's capture. All three moved from outrage to protecting their own commercial and strategic interests. Joint projects with Russia, from oil to military hardware and truck assembly, have stalled or failed." },
        { type: "section", head: "Unpaid bills", md:
          "Russia's loans and arms credits may never be fully repaid. Moscow's leverage is the 2025 treaty and the debts themselves, which any future Venezuelan government will have to address." },
        { type: "compare", head: "What Russia had, and has",
          left: { head: "Before 2026", md:
            "A loyal ally, arms customer, oil partner and voice against Washington." },
          right: { head: "After 2026", md:
            "Old debts, minority oil stakes and a cautious government leaning toward the US." } },
        { type: "section", head: "Why it matters", md:
          "Venezuela was Russia's closest partner in the Americas. Its loss shows the limits of Moscow's reach far from home, and sends a message to other governments, from Cuba to Nicaragua, about how much Russian friendship is worth." }
      ],
      takeaways: [
        "Russia condemned the US capture of Maduro in January 2026, but Putin stayed silent and Moscow did nothing more.",
        "The US replaced Russia as Venezuela's main supplier of diluents, and Venezuelan oil now flows mainly north.",
        "A September 2026 report found Venezuela's ties with Russia, China and Iran had cooled sharply."
      ],
      check: { q: "How did Russia respond to the US seizure of Maduro?",
        choices: ["It sent troops to Venezuela", "It condemned the raid and called a UN meeting, but took no further action", "It broke off relations with Venezuela"], answer: 1,
        explain: "Moscow soon backed the acting president, Delcy Rodríguez." },
      sources: [
        { title: "Russia Demands Release of Maduro After U.S. Military Strikes Venezuela", publisher: "The Moscow Times", url: "https://www.themoscowtimes.com/2026/01/03/russia-demands-release-of-maduro-after-us-military-strikes-venezuela-a91602", date: "2026-01-03" },
        { title: "Russia Backs Venezuela's Interim Leader After U.S. Ousts Maduro", publisher: "The Moscow Times", url: "https://www.themoscowtimes.com/2026/01/06/russia-backs-venezuelas-interim-leader-after-us-ousts-maduro-a91620", date: "2026-01-06" },
        { title: "What does Nicolás Maduro's capture mean for Russia?", publisher: "LSE European Politics and Policy blog", url: "https://blogs.lse.ac.uk/europpblog/2026/01/08/russia-influence-latin-america-venezuela-maduro-capture/", date: "2026-01-08" },
        { title: "Transparencia Venezuela: China y Rusia pierden terreno petrolero pero conservan activos", publisher: "TalCual", url: "https://talcualdigital.com/noticias/transparencia-venezuela-china-y-rusia-pierden-terreno-petrolero-pero-conservan-activos/", date: "2026-09" },
        { title: "Were authoritarian allies driven out of Venezuela?", publisher: "Transparencia Venezuela", url: "https://transparenciave.org/fueron-desplazados-de-venezuela-los-aliados-autoritarios", date: "2026-09-30" }
      ]
    }
  ]
});
