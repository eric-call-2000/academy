/* ============================================================
   Relationship — France & Russia 🇫🇷🇷🇺
   Napoleon, the 1894 alliance and de Gaulle's Moscow; Sarkozy's
   ceasefire, the Mistral warships and Macron's long table; and
   Wagner in Africa, coffins at the Eiffel Tower and a French
   nuclear umbrella for Europe.
   France's own story is in fr-8; Ukraine's war in ua lessons.
   Research note and sources: tools/research/fr_ru.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("fr_ru", {
  id: "fr_ru",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "fr_ru-1", kind: "relation", asOf: "2026-10-01",
      title: "Napoleon, an alliance and de Gaulle",
      dek: "Russian nobles spoke French and Napoleon burned Moscow. Fear of Germany made the two allies in 1894, and de Gaulle later went to Moscow to show that France had its own foreign policy.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr_ru/fr_ru-1-hero.webp",
          alt: "Illustration of a ragged army retreating through snow past burned-out buildings in 1812.",
          caption: "Napoleon's army retreated from Moscow in the winter of 1812.",
          credit: "AI illustration — not a photograph",
          prompt: "A ragged column of soldiers in tattered 1812-era uniforms retreating through deep snow past burned wooden buildings, abandoned cannons and carts, grey winter sky, historical oil painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "Enemies and allies", items: [
          ["1812", "Napoleon invades Russia and occupies Moscow"],
          ["1814", "Russian troops march into Paris"],
          ["1853–56", "France fights Russia in the Crimean War"],
          ["1894", "The Franco-Russian alliance is completed"],
          ["1918", "The Bolsheviks repudiate tsarist debts held by French savers"],
          ["1966", "De Gaulle tours the Soviet Union"]
        ] },
        { type: "section", head: "French manners, French invasion", md:
          "From the 18th century, Russia's elite looked to Paris for culture; French was the language of the court, and Tolstoy's War and Peace opens in French. Then in June 1812 Napoleon invaded with his Grande Armée, expecting to 'dictate peace' within months. He reached Moscow, which burned, and his army was destroyed in the winter retreat. In 1814 Tsar Alexander I rode into Paris at the head of his troops." },
        { type: "section", head: "The alliance against Germany", md:
          "France fought Russia again in the Crimean War of the 1850s. But after Prussia defeated France in 1870 and united Germany, both countries feared Berlin. A military alliance was drafted in 1892 and completed in January 1894, and French fleets and Russian squadrons exchanged celebrated visits at Kronstadt and Toulon. French savers poured money into Russian government bonds that paid for railways and industry. The alliance held through the First World War (see [[lesson:fr_de-1]])." },
        { type: "section", head: "Lost savings", md:
          "After the 1917 revolution, the Bolsheviks made a separate peace with Germany and in 1918 refused to pay the tsar's debts. Hundreds of thousands of French families lost their savings in the worthless 'Russian bonds', a grievance remembered for generations. France sent troops to support the anti-Bolshevik Whites and did not recognise the Soviet Union until 1924." },
        { type: "section", head: "De Gaulle's own path", md:
          "In December 1944 Charles de Gaulle flew to Moscow and signed a treaty with Stalin. As president, he took France out of NATO's integrated military command in 1966 and that summer toured the Soviet Union, visiting Moscow, Leningrad, Kiev and Volgograd. He was the first Western leader admitted to the Baikonur space centre, and the two governments signed a joint declaration on cooperation. De Gaulle spoke of a Europe 'from the Atlantic to the Urals', not divided into blocs. Moscow welcomed anything that weakened NATO." },
        { type: "section", head: "The Gaullist habit", md:
          "De Gaulle's successors kept a tradition of talking to Moscow even in hard times, partly to show France was not simply America's follower. François Mitterrand, though firmly anti-Soviet in arms debates, met Mikhail Gorbachev often, and Jacques Chirac welcomed Vladimir Putin and later joined Russia and Germany in opposing the 2003 Iraq war." },
        { type: "compare", head: "Two French instincts",
          left: { head: "Balance", md:
            "Russia is a great European power; talking to it keeps France independent and Germany in check." },
          right: { head: "Wariness", md:
            "Russia invaded, defaulted and threatened Europe; France must stand with its allies." } },
        { type: "section", head: "Why it matters", md:
          "That Gaullist instinct to keep a line open to Moscow explains why Macron kept calling Putin long after other leaders stopped." }
      ],
      takeaways: [
        "Napoleon invaded Russia in 1812; Russian troops entered Paris in 1814.",
        "France and Russia allied against Germany in 1894; French savers lost fortunes when the Bolsheviks repudiated the debts.",
        "De Gaulle toured the Soviet Union in 1966 to show France's independence from the blocs."
      ],
      check: { q: "What brought France and Russia into an alliance in the 1890s?",
        choices: ["A shared fear of Germany", "War against Britain", "The Russian Revolution"], answer: 0,
        explain: "After Germany united in 1871, both countries feared its power; the alliance was completed in 1894." },
      sources: [
        { title: "Franco-Russian Alliance", publisher: "EBSCO Research Starters", url: "https://www.ebsco.com/research-starters/history/franco-russian-alliance/", date: "n.d." },
        { title: "Russia and France: the messy break-up", publisher: "Fondation Napoléon", url: "https://www.napoleon.org/en/history-of-the-two-empires/articles/russia-and-france-the-messy-break-up/", date: "n.d." },
        { title: "French-Soviet Joint Declaration of June 30, 1966", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/French-Soviet_Joint_Declaration_of_June_30,_1966", date: "n.d." },
        { title: "Europe: Voyage to Muscovy", publisher: "TIME", url: "https://time.com/archive/6629627/europe-voyage-to-muscovy/", date: "1966" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "fr_ru-2", kind: "relation", asOf: "2026-10-01",
      title: "Warships, Minsk and a long table",
      dek: "France sold Russia two warships, then refused to deliver them after Crimea. It brokered ceasefires in Georgia and Ukraine and kept talking to Putin until the tanks rolled.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr_ru/fr_ru-2-hero.webp",
          alt: "Illustration of two men sitting at opposite ends of a very long white table in an ornate hall.",
          caption: "Putin received Macron at a famously long table in February 2022.",
          credit: "AI illustration — not a photograph",
          prompt: "Two small figures in dark suits seated at opposite ends of an extremely long white oval table in an ornate hall with gilded walls and a chandelier, seen from a distance, documentary painting style, no faces visible, no flags, no legible text." },
        { type: "timeline", head: "Talking to Putin", items: [
          ["Aug 2008", "Sarkozy brokers the Georgia ceasefire"],
          ["2011", "France agrees to sell Russia two Mistral warships"],
          ["Feb 2015", "Minsk agreement with Germany, Russia and Ukraine"],
          ["Aug 2015", "France cancels the Mistral delivery"],
          ["May 2017", "Macron hosts Putin at Versailles"],
          ["Feb 2022", "Macron at the Kremlin's long table"]
        ] },
        { type: "section", head: "Sarkozy's ceasefire", md:
          "When Russia went to war with Georgia in August 2008, President Nicolas Sarkozy, who held the EU's rotating presidency, flew to Moscow and Tbilisi and negotiated a ceasefire. Critics said its loose wording let Russian troops stay in Georgia's breakaway regions. But it set a pattern: France as the Western leader willing to talk to Putin face to face." },
        { type: "section", head: "The Mistral affair", md:
          "In 2011 France agreed to sell Russia two Mistral-class assault ships, helicopter carriers that could land troops by sea, a deal worth over a billion euros and the biggest arms sale by a NATO country to Russia. Allies objected, especially after Georgia. When Russia annexed Crimea in 2014, President François Hollande held up delivery, and in August 2015 France cancelled the deal and repaid Russia. The two ships were sold to Egypt instead." },
        { type: "section", head: "Normandy and Minsk", md:
          "In June 2014, at the anniversary of D-Day in Normandy, France and Germany brought the Russian and Ukrainian leaders together, launching the 'Normandy format'. It produced the Minsk agreements of 2014 and February 2015, meant to end the war in eastern Ukraine. They stopped the worst fighting but were never fully carried out; each side accused the other of breaking them (see [[lesson:ru_ua-1]])." },
        { type: "section", head: "Macron tries charm", md:
          "Emmanuel Macron hosted Putin at the palace of Versailles weeks after his election in 2017, and at his summer residence at Brégançon in 2019, arguing that Europe needed a new security relationship with Russia. In February 2022, as Russian troops massed on Ukraine's borders, he flew to Moscow and was seated at the far end of a very long table. Two weeks later Russia invaded. Macron kept calling Putin for months, drawing criticism from Ukraine and from eastern European allies." },
        { type: "section", head: "Business ties", md:
          "French companies invested heavily in Russia. Renault took control of AvtoVAZ, the maker of Lada cars, and TotalEnergies became a partner in Russian gas giant Novatek and its Arctic Yamal LNG project. After the 2022 invasion Renault sold AvtoVAZ to a Russian state body for a symbolic one rouble, while TotalEnergies wrote down billions. The French retailer Auchan was criticised for keeping its Russian stores open." },
        { type: "compare", head: "Engagement: did it work?",
          left: { head: "Yes", md:
            "Talks stopped wars in Georgia and eastern Ukraine, and kept channels open in crises." },
          right: { head: "No", md:
            "Russia pocketed the ceasefires, kept the land and invaded anyway in 2022." } },
        { type: "section", head: "Why it matters", md:
          "France's long effort to manage Russia through dialogue ended in failure in 2022. Its leaders drew the lesson, and turned from mediator to one of Ukraine's most outspoken backers." }
      ],
      takeaways: [
        "Sarkozy brokered the 2008 Georgia ceasefire; France and Germany led the Minsk talks on Ukraine.",
        "France cancelled the sale of two Mistral warships to Russia in 2015 after the annexation of Crimea.",
        "Macron courted Putin from 2017 and visited him days before the 2022 invasion."
      ],
      check: { q: "What happened to the Mistral warships France built for Russia?",
        choices: ["They were delivered in 2015", "France cancelled the sale and they went to Egypt", "They were sunk in Crimea"], answer: 1,
        explain: "France cancelled delivery after Russia annexed Crimea and repaid Moscow." },
      sources: [
        { title: "France–Russia relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/France%E2%80%93Russia_relations", date: "n.d." },
        { title: "Talks with President of France Emmanuel Macron", publisher: "Kremlin via GlobalSecurity.org", url: "https://www.globalsecurity.org/wmd/library/news/russia/2022/russia-220207-kremlin01.htm", date: "2022-02-07" },
        { title: "Macron Says Talks With Putin Helped Avoid Further Escalation on Ukraine Issue", publisher: "GlobalSecurity.org", url: "https://www.globalsecurity.org/wmd/library/news/ukraine/2022/ukraine-220208-sputnik01.htm", date: "2022-02-08" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "fr_ru-3", kind: "relation", asOf: "2026-10-01",
      title: "Wagner, coffins and the bomb",
      dek: "Russian mercenaries pushed France out of Africa, and Russian-paid agents left coffins at the Eiffel Tower. Macron now calls Russia a threat to France and offers Europe his nuclear umbrella, while still trying to talk.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr_ru/fr_ru-3-hero.webp",
          alt: "Illustration of a nuclear-armed submarine at a naval base on a rocky coast at dawn.",
          caption: "Macron unveiled a new nuclear doctrine at France's ballistic-missile submarine base in March 2026.",
          credit: "AI illustration — not a photograph",
          prompt: "A large black ballistic missile submarine moored at a naval base on a rocky Breton coast at dawn, cranes and grey buildings behind, calm water, misty light, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From mediator to adversary", items: [
          ["2021–22", "Wagner arrives in Mali; French troops leave"],
          ["Feb 2024", "Macron won't rule out troops in Ukraine"],
          ["Jun 2024", "Coffins left at the Eiffel Tower"],
          ["Jul 2025", "Macron's first call with Putin in nearly three years"],
          ["Feb 2026", "'Technical-level' contacts restored"],
          ["2 Mar 2026", "Macron's speech on a European nuclear role"]
        ] },
        { type: "section", head: "Pushed out of Africa", md:
          "For a decade French troops fought jihadists in the Sahel. After coups in Mali, Burkina Faso and Niger, the new juntas turned against France, egged on by Russian-backed social media campaigns, and invited in Russia's Wagner mercenaries, later rebranded as the Africa Corps. France withdrew from Mali in 2022 and from the others soon after (see [[lesson:fr-8]]). Paris saw it as a Russian campaign to replace French influence in its former colonies." },
        { type: "section", head: "Troops for Ukraine?", md:
          "In February 2024 Macron said sending Western troops to Ukraine could not be ruled out, shocking allies. He has since led, with Britain, the 'coalition of the willing' planning a European force to help secure Ukraine after a ceasefire (see [[lesson:gb_fr-3]]). Moscow called it a provocation. Macron now describes Russia as a threat to France and Europe and has told the French to assume an attack could come without warning." },
        { type: "section", head: "Coffins and stars", md:
          "Russia has waged a campaign of influence and intimidation inside France. In June 2024 five coffins draped in French flags and marked 'French soldiers of Ukraine' were left at the Eiffel Tower by men who said they had been paid €400; French intelligence suspected a Russian operation. Red hands painted on the Paris Holocaust memorial in 2024 were also linked to Russia, and four Bulgarians were later sentenced. French officials say Russian disinformation targets elections and French troops abroad." },
        { type: "section", head: "Europe's nuclear power", md:
          "On 2 March 2026, at the base of France's ballistic-missile submarines, Macron set out a new phase in French nuclear deterrence. France would increase its warheads, invite allies to nuclear exercises and allow nuclear-armed aircraft to be deployed temporarily in partner countries. He said Paris had begun talks with eight countries: Britain, Germany, Poland, the Netherlands, Belgium, Greece, Sweden and Denmark. 'To be free, we have to be feared,' he said." },
        { type: "section", head: "Still talking", md:
          "True to the Gaullist habit, Macron also wants Europe to talk to Putin directly rather than leave it to Washington. He called Putin in July 2025, and in February 2026 the Kremlin confirmed that technical-level contacts had resumed. Moscow mocked the effort as 'pathetic diplomacy'. With the 2027 presidential election approaching, the National Rally, once friendly to Moscow, now also says Russia poses a threat." },
        { type: "compare", head: "France's two tracks",
          left: { head: "Deter", md:
            "Nuclear umbrella, troops for a Ukraine force, sanctions and arrests of Russian agents." },
          right: { head: "Talk", md:
            "Keep a line to Putin so that Europe is not shut out of any peace deal." } },
        { type: "section", head: "Why it matters", md:
          "As American commitment to Europe wavers, France, the EU's only nuclear power, has made itself the continent's leading voice against Russia." }
      ],
      takeaways: [
        "Russia's Wagner group helped push French forces out of Mali and the Sahel.",
        "Russian-linked stunts such as the 2024 Eiffel Tower coffins aimed to turn the French against helping Ukraine.",
        "In March 2026 Macron offered allies a role in French nuclear deterrence, while seeking a European channel to Putin."
      ],
      check: { q: "What did Macron announce in his March 2026 nuclear speech?",
        choices: ["France would give up its nuclear weapons", "Allies could join nuclear exercises and host French nuclear-armed aircraft temporarily", "France would rejoin the Soviet Union"], answer: 1,
        explain: "He named eight countries in talks with France about its nuclear role in Europe." },
      sources: [
        { title: "'To be free, we have to be feared,' Macron says in keynote nuclear speech", publisher: "France 24", url: "https://www.france24.com/en/france/20260302-macron-unveils-france-nuclear-strategy-eu-counter-russian-aggression-wavering-us", date: "2026-03-02" },
        { title: "Inside Macron's new deterrence strategy: 8 European allies, 1 French nuclear button", publisher: "Associated Press via WSLS", url: "https://www.wsls.com/news/world/2026/03/03/inside-macrons-new-deterrence-strategy-8-european-allies-1-french-nuclear-button/", date: "2026-03-03" },
        { title: "Arrests and suspected Russian link over coffins left by Eiffel Tower", publisher: "The Connexion", url: "https://www.connexionfrance.com/news/arrests-and-suspected-russian-link-over-coffins-left-by-eiffel-tower/661764", date: "2024-06" },
        { title: "Kremlin Confirms France Has Restored 'Technical-Level' Contact With Russia", publisher: "The Moscow Times", url: "https://www.themoscowtimes.com/2026/02/10/kremlin-confirms-france-has-restored-technical-level-contact-with-russia-a91904", date: "2026-02-10" },
        { title: "Russia derides Macron's attempt at dialogue with Putin as 'pathetic diplomacy'", publisher: "Kyiv Independent", url: "https://kyivindependent.com/russia-derides-macrons-attempt-at-dialogue-with-putin/", date: "2026" },
        { title: "Macron puts France on a war footing against Russia — and asks Europe to follow", publisher: "EU Insider", url: "https://www.euinsider.eu/news/macron-russia-hybrid-threat-we-will-not-be-warned-europe-2026", date: "2026" }
      ]
    }
  ]
});
