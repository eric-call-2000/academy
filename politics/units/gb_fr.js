/* ============================================================
   Relationship — United Kingdom & France 🇬🇧🇫🇷
   Centuries of war turned into an alliance, the small boats
   crossing the Channel and the returns deal that ended on 30
   September 2026, and Europe's only two nuclear powers learning
   to coordinate.
   Research note and sources: tools/research/gb_fr.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("gb_fr", {
  id: "gb_fr",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "gb_fr-1", kind: "relation", asOf: "2026-09-30",
      title: "From old enemies to Entente",
      dek: "England and France fought each other on and off for 700 years. Since 1904 they have been allies, though rarely easy ones.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_fr/gb_fr-1-hero.webp",
          alt: "Illustration of white chalk cliffs above a narrow grey sea, with a faint far coastline on the horizon.",
          caption: "At its narrowest the Channel is 33 km wide; on a clear day each country can see the other.",
          credit: "AI illustration — not a photograph",
          prompt: "Tall white chalk cliffs above a narrow grey-green sea, a faint low coastline visible on the far horizon, a few seagulls, soft hazy sunlight, calm and timeless, no boats, no people, no flags, no legible text." },
        { type: "timeline", head: "Rivals to allies", items: [
          ["1066", "Norman conquest of England"],
          ["1337–1453", "The Hundred Years' War"],
          ["1689–1815", "A 'second Hundred Years' War', ending at Waterloo"],
          ["1904", "The Entente Cordiale"],
          ["1914–18, 1939–45", "Allies in two world wars"],
          ["1963, 1967", "De Gaulle vetoes British entry to the European Community"],
          ["1994", "The Channel Tunnel opens"]
        ] },
        { type: "section", head: "Centuries of war", md:
          "The two countries' histories are tangled from the start. In 1066 William, Duke of Normandy, conquered England, and for centuries its kings held large parts of France and claimed its crown, leading to the Hundred Years' War of 1337–1453, the war of Agincourt and Joan of Arc. From 1689 to 1815 they fought again and again for empire in Europe, India and North America, a struggle that ended with Napoleon's defeat at Waterloo. Each defined itself partly against the other; the insults, from 'frogs' to *les rosbifs*, survive as jokes." },
        { type: "section", head: "The Entente", md:
          "Fear of a rising Germany changed everything. On 8 April 1904 the two signed the Entente Cordiale, settling colonial disputes in Egypt and Morocco. It was not a formal alliance, but it brought them together in the First World War, when over 700,000 British soldiers died, many on French soil. In 1940, as France fell, Winston Churchill even proposed a union of the two countries. Charles de Gaulle led the Free French from London. In 1956 the two invaded Egypt together to seize the Suez Canal and were forced out by American pressure, a humiliation from which each drew a different lesson: Britain to stay close to Washington, France to build Europe and its own bomb. Yet after the war de Gaulle, who resented his dependence on Churchill and Roosevelt, twice vetoed Britain's entry to the European Community, in 1963 and 1967, calling it too close to the United States. Britain joined only in 1973, after he had gone (see [[lesson:gb-3]])." },
        { type: "section", head: "Neighbours", md:
          "The Channel Tunnel, opened in 1994, links the two by rail in about two hours from London to Paris. About 350,000 French people are thought to live in Britain, and many Britons own homes in France. Brexit strained ties, with rows over fishing licences off Jersey and the Northern Ireland protocol, but since 2022 relations have warmed. Keir Starmer and Emmanuel Macron have led the European 'coalition of the willing' planning security guarantees for [[unit:ua|Ukraine]]." },
        { type: "compare", head: "Two styles",
          left: { head: "British view", md:
            "France is a vital ally but an awkward partner that seeks to lead Europe and keep America at arm's length." },
          right: { head: "French view", md:
            "Britain is Europe's other serious military power but too often follows Washington and treats Europe as optional." } },
        { type: "section", head: "Why it matters", md:
          "Britain and France are Europe's only nuclear powers, its two permanent members of the UN Security Council and its biggest military spenders after Germany. With the United States less reliable, their partnership matters more for European security than at any time since 1945." }
      ],
      takeaways: [
        "England and France fought repeatedly from the Middle Ages until Waterloo in 1815.",
        "The 1904 Entente Cordiale made them allies in two world wars.",
        "De Gaulle twice vetoed British entry to Europe; today they lead Europe's planning for Ukraine's security."
      ],
      check: { q: "What was the Entente Cordiale of 1904?",
        choices: ["A trade treaty", "An agreement settling colonial disputes that brought Britain and France together", "The treaty ending the Hundred Years' War"], answer: 1,
        explain: "It settled disputes over Egypt, Morocco and elsewhere, and made the two rivals partners against a rising Germany." },
      sources: [
        { title: "Entente Cordiale", publisher: "Britannica", url: "https://www.britannica.com/event/Entente-Cordiale", date: "n.d." },
        { title: "Hundred Years' War", publisher: "Britannica", url: "https://www.britannica.com/event/Hundred-Years-War", date: "n.d." },
        { title: "A New Entente Cordiale in an Age of Uncertainty? The Northwood Declaration in Franco-British Nuclear Cooperation", publisher: "Carleton University EETN", url: "https://carleton.ca/eetn/2026/a-new-entente-cordiale-in-an-age-of-uncertainty/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "gb_fr-2", kind: "relation", asOf: "2026-09-30",
      title: "The small boats",
      dek: "Tens of thousands of people cross the Channel in small boats each year. Britain pays France to stop them, and tried a swap of migrants. On 30 September 2026 that swap ended.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_fr/gb_fr-2-hero.webp",
          alt: "Illustration of a crowded inflatable boat on a grey sea at dawn, seen from a distance, with a coastline of dunes behind.",
          caption: "Most small boats leave from beaches around Calais, Dunkirk and Boulogne in northern France.",
          credit: "AI illustration — not a photograph",
          prompt: "A small crowded grey inflatable boat on a choppy grey sea at dawn, seen from far away so no faces are visible, a low coastline of sand dunes behind, pale cold light, precarious and sombre, no flags, no legible text." },
        { type: "facts", head: "In numbers", rows: [
          ["2022", "45,755 arrivals, the record"],
          ["2024", "36,816 arrivals"],
          ["2025", "About 41,000 arrivals"],
          ["UK funding for France", "€541 million over three years from 2023"],
          ["'One in, one out'", "1,087 returned to France, Aug 2025 – Jun 2026"]
        ] },
        { type: "section", head: "Why the Channel", md:
          "Since the 2003 Le Touquet treaty, British officers check passports in French ports, so people without visas cannot board ferries or trains. For years many tried to hide in lorries. From 2018, as security tightened, smugglers switched to small inflatable boats launched from French beaches. Arrivals in Britain rose from about 300 in 2018 to a record 45,755 in 2022. Dozens of people have drowned, including at least 27 in a single sinking in November 2021, and the UN migration agency counted 2024 as the deadliest year yet. Most who arrive claim asylum, and many come from Afghanistan, Iran, Eritrea, Sudan and Syria." },
        { type: "section", head: "Paying France", md:
          "Because the boats leave from France, British governments have paid for French policing. A 2023 deal committed €541 million over three years for patrols, drones and detention. France stops many launches, but its officers generally do not intercept boats once they are at sea, citing the risk to life. British politicians complain France does too little; French officials reply that Britain's labour market and lack of legal routes pull people across, and that since Brexit Britain can no longer return asylum seekers to the EU." },
        { type: "section", head: "One in, one out", md:
          "In July 2025 Starmer and Macron agreed a pilot: Britain could send some small-boat arrivals back to France, and in return accept the same number of vetted asylum seekers from France. Between August 2025 and June 2026, 1,087 people were returned and 1,117 were transferred to Britain, while 27,920 arrived by boat, so only about 4% were sent back. Home Secretary Shabana Mahmood told MPs in September 2026 that each return cost about £56,000. France said in June that the pilot would not be renewed and wants a wider EU arrangement. The Home Office confirmed on 30 September that it had stopped processing new cases." },
        { type: "compare", head: "Whose problem?",
          left: { head: "London", md:
            "France must stop boats leaving its shores; Britain pays generously and needs a returns system that deters crossings." },
          right: { head: "Paris", md:
            "Britain chose to leave the EU's asylum system. The answer is a European deal and safe legal routes, not French police at sea." } },
        { type: "section", head: "Why it matters", md:
          "Small boats have become one of the most potent issues in British politics, helping Reform UK's rise (see [[lesson:gb-5]]). The end of 'one in, one out' leaves Britain seeking a deal with the whole EU, and tests whether the two governments' warmer relationship can survive their different interests. Meanwhile the boats keep coming, and smugglers adapt faster than either government." }
      ],
      takeaways: [
        "Small-boat crossings rose from a few hundred in 2018 to a record 45,755 in 2022 and about 41,000 in 2025.",
        "Britain pays France to police its beaches, including €541 million over three years from 2023.",
        "The 'one in, one out' returns pilot sent back about 4% of arrivals and ended on 30 September 2026."
      ],
      check: { q: "What happened to the UK–France 'one in, one out' deal in September 2026?",
        choices: ["It was expanded to all EU countries", "It ended without renewal", "It was ruled illegal"], answer: 1,
        explain: "France declined to renew the pilot, preferring an EU-wide approach, and the Home Office stopped processing new cases on 30 September." },
      sources: [
        { title: "UK ends 'one in, one out' migrant returns deal with France", publisher: "Euronews", url: "https://www.euronews.com/2026/09/30/uk-ends-one-in-one-out-migrant-returns-deal-with-france", date: "2026-09-30" },
        { title: "France in talks with UK to end 2025 migrant accord: ministry", publisher: "France 24", url: "https://www.france24.com/en/live-news/20260930-france-in-talks-with-uk-to-end-2025-migrant-accord-ministry", date: "2026-09-30" },
        { title: "People crossing the English Channel in small boats", publisher: "Migration Observatory, University of Oxford", url: "https://migrationobservatory.ox.ac.uk/resources/briefings/people-crossing-the-english-channel-in-small-boats/", date: "2026" },
        { title: "Unauthorised migration: UK-France border cooperation", publisher: "House of Commons Library", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-9681/", date: "2026-05-13" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "gb_fr-3", kind: "relation", asOf: "2026-09-30",
      title: "Europe's two nuclear powers",
      dek: "Britain and France each have nuclear weapons and ambitions to project power. Since 2010 they have built their defences together, and in 2025 they agreed for the first time to coordinate their deterrents.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_fr/gb_fr-3-hero.webp",
          alt: "Illustration of a dark submarine partly surfaced in a calm sea at dusk, with a second faint submarine shape in the distance.",
          caption: "Each country keeps at least one nuclear-armed submarine at sea at all times.",
          credit: "AI illustration — not a photograph",
          prompt: "A large dark submarine partly surfaced in a calm grey sea at dusk, a second faint submarine silhouette far in the distance, low clouds, muted light, silent and powerful, no people, no flags, no markings, no legible text." },
        { type: "timeline", head: "Building together", items: [
          ["1969", "Concorde's first flight, a joint project"],
          ["1998", "Saint-Malo: a push for European defence"],
          ["2010", "Lancaster House treaties"],
          ["2011", "Joint air campaign over Libya"],
          ["Mar 2025", "Starmer and Macron launch the 'coalition of the willing' for Ukraine"],
          ["10 Jul 2025", "Northwood Declaration on nuclear coordination"],
          ["Dec 2025", "Joint Nuclear Steering Group first meets"]
        ] },
        { type: "section", head: "Lancaster House", md:
          "The two countries have long built aircraft and missiles together, from Concorde to the Storm Shadow cruise missile, which France calls SCALP and both have supplied to Ukraine. In November 2010, facing budget cuts, David Cameron and Nicolas Sarkozy signed the Lancaster House treaties. They created a joint rapid-reaction force and, remarkably, agreed to share facilities for testing the safety of their nuclear warheads without explosions: a French site at Valduc and a British one at Aldermaston. The next year British and French jets led the NATO air campaign over Libya." },
        { type: "section", head: "Coordinating deterrence", md:
          "France built its nuclear force in the 1960s to be fully independent; Britain's Trident missiles are bought from the United States and its warheads are committed to NATO. Each keeps at least one missile submarine at sea at all times. On 10 July 2025, during Macron's state visit to Britain, the two leaders signed the Northwood Declaration, saying for the first time that their forces 'are independent, but can be coordinated', and that any extreme threat to Europe would prompt a response from both. A Nuclear Steering Group, led from the Élysée and Downing Street, met for the first time in December 2025." },
        { type: "section", head: "Ukraine and beyond", md:
          "In March 2025, as the Trump administration pressed Kyiv to accept a quick ceasefire, Starmer and Macron launched a 'coalition of the willing' of around 30 countries to plan how to secure a peace. Britain and France have said they are ready to send troops to Ukraine after a ceasefire, provided the United States gives backing. Cooperation has limits: in fighter jets they are rivals, with France building a next-generation aircraft with Germany and Spain, and Britain with Italy and Japan." },
        { type: "compare", head: "A European deterrent?",
          left: { head: "Supporters", md:
            "If America's commitment weakens, a coordinated Franco-British deterrent could reassure Europe and deter Russia." },
          right: { head: "Sceptics", md:
            "About 500 warheads between them cannot replace America's thousands, and each country will always decide alone when to use them." } },
        { type: "section", head: "Why it matters", md:
          "Russia's war and doubts about American commitment have pushed Europe to think about defending itself. Britain and France, with Europe's only nuclear weapons and its most capable armed forces, are at the centre of that debate. Their cooperation on Ukraine and on deterrence has continued even as they quarrel over small boats. How far it goes may depend on French politics: some candidates in the 2027 presidential race, on the nationalist right, oppose sharing any part of France's deterrent with anyone else." }
      ],
      takeaways: [
        "The 2010 Lancaster House treaties created joint forces and shared nuclear warhead testing facilities.",
        "The Northwood Declaration of July 2025 said British and French nuclear forces 'can be coordinated'.",
        "The two lead Europe's 'coalition of the willing' planning security guarantees for Ukraine."
      ],
      check: { q: "What did the Northwood Declaration of July 2025 say?",
        choices: ["That Britain would give up its nuclear weapons", "That British and French nuclear forces are independent but can be coordinated", "That France would rejoin NATO"], answer: 1,
        explain: "It was the first time the two countries formally said their independent nuclear forces could be coordinated." },
      sources: [
        { title: "The Northwood Declaration: UK–France nuclear cooperation and a new European strategic backstop", publisher: "IISS", url: "https://www.iiss.org/publications/strategic-comments/2025/09/the-northwood-declaration-uk-france-nuclear-cooperation-and-a-new-european-strategic-backstop/", date: "2025-09" },
        { title: "France and the United Kingdom: the beginning of bilateral coordination of nuclear deterrence", publisher: "OSW Centre for Eastern Studies", url: "https://www.osw.waw.pl/en/publikacje/analyses/2025-07-11/france-and-united-kingdom-beginning-bilateral-coordination-nuclear", date: "2025-07-11" },
        { title: "New UK-France Nuclear Steering Group met for the first time in Paris", publisher: "Élysée", url: "https://www.elysee.fr/en/emmanuel-macron/2025/12/18/new-uk-france-nuclear-steering-group-met-for-the-first-time-in-paris", date: "2025-12-18" }
      ]
    }
  ]
});
