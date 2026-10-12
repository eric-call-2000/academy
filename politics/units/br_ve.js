/* ============================================================
   Relationship — Brazil & Venezuela 🇧🇷🇻🇪
   An Amazon border, Lula and Chávez, Odebrecht and unpaid loans;
   half a million Venezuelans crossing into Roraima and Operation
   Welcome; and Lula's break with Maduro, Essequibo and the US
   seizure of Maduro in 2026.
   Research note and sources: tools/research/br_ve.md
   Current as of 11 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("br_ve", {
  id: "br_ve",
  asOf: "2026-10-11",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "br_ve-1", kind: "relation", asOf: "2026-10-11",
      title: "Lula, Chávez and the builders",
      dek: "Brazil and Venezuela share a long Amazon border but little else, until Lula and Chávez became allies. Brazilian builders won Venezuelan contracts on Brazilian loans that were never fully repaid.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br_ve/br_ve-1-hero.webp",
          alt: "Illustration of an unfinished concrete bridge spanning a wide brown river through tropical forest, cranes idle.",
          caption: "Brazilian firms built bridges, metro lines and dams in Venezuela with loans from Brazil's development bank.",
          credit: "Illustration — not a photograph",
          prompt: "An unfinished concrete road bridge spanning a wide brown river through dense tropical forest, idle construction cranes and rusting scaffolding, low clouds and humid haze, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Friends on the left", items: [
          ["1859", "Border treaty between Brazil and Venezuela"],
          ["1999", "Hugo Chávez takes office"],
          ["2003", "Lula takes office; the 'pink tide' rises"],
          ["2006", "Bridge over the Orinoco, built by Odebrecht, opens"],
          ["2012", "Venezuela joins Mercosur with Brazil's backing"],
          ["2017–18", "Venezuela defaults on loans from Brazil's BNDES"]
        ] },
        { type: "section", head: "An empty border", md:
          "Brazil and Venezuela share a border of about 2,200 kilometres, almost all of it through the Amazon rainforest and the Guiana Highlands, home to Indigenous peoples such as the Yanomami and to illegal gold miners. For most of their history the two had little contact: Brazil, Portuguese-speaking and focused on its south, faced Argentina and Europe; Venezuela, an oil state, looked to the Caribbean and the United States. A single road links them, through the Brazilian state of Roraima." },
        { type: "section", head: "Lula and Chávez", md:
          "That changed when the left came to power in both. Hugo Chávez became Venezuela's president in 1999 (see [[lesson:ve-3]]) and Luiz Inácio Lula da Silva Brazil's in 2003. Despite different styles, Lula a pragmatic former union leader and Chávez a fiery soldier, they became allies. In 2003 Lula organised a 'Group of Friends' of countries to help mediate between Chávez and an opposition that had briefly ousted him in a coup the year before, and Brazil supported Venezuela's entry into the Mercosur trade bloc, which took effect in 2012." },
        { type: "section", head: "The builders", md:
          "Brazil's construction giants, above all Odebrecht, won huge contracts in Venezuela: bridges over the Orinoco, lines of the Caracas metro, dams and a steel mill. Many were financed by Brazil's state development bank, BNDES, which lent to Venezuela to pay Brazilian firms, part of Lula's strategy of exporting Brazilian engineering. Several projects were never finished." },
        { type: "section", head: "Corruption", md:
          "The Lava Jato investigations revealed that Odebrecht had paid bribes across Latin America to win contracts; the company admitted in a 2016 settlement with US authorities to paying about $98 million in Venezuela. Brazilian prosecutors also investigated whether Lula had improperly helped Odebrecht win loans abroad; he denied wrongdoing, and his convictions on other charges were later annulled." },
        { type: "section", head: "Unpaid bills", md:
          "As Venezuela's economy collapsed, it stopped paying. From 2017 it defaulted on loans for Brazilian-built projects; by one count it owed more than $1.2 billion. Brazil's export guarantee fund covered the losses, so Brazilian taxpayers paid. Jair Bolsonaro used the defaults against Lula in the 2018 and 2022 campaigns." },
        { type: "section", head: "Energy", md:
          "For years Venezuela sold electricity from its Guri dam to Roraima, which is not connected to Brazil's national grid. Supplies were cut during Venezuela's blackouts in 2019, leaving Roraima dependent on diesel generators." },
        { type: "compare", head: "The Lula–Chávez years",
          left: { head: "Supporters", md:
            "South American integration, trade and jobs for Brazilian companies." },
          right: { head: "Critics", md:
            "Taxpayer money for a corrupt ally's vanity projects, never repaid." } },
        { type: "section", head: "Why it matters", md:
          "The ties built by Lula and Chávez, and the debts and scandals they left, still shape Brazilian politics and how Brazil deals with Caracas." }
      ],
      takeaways: [
        "Brazil and Venezuela share a 2,200-kilometre Amazon border but had little contact until the 2000s.",
        "Lula and Chávez became allies; Brazilian firms such as Odebrecht built Venezuelan projects on BNDES loans.",
        "Venezuela defaulted on those loans from 2017, leaving Brazilian taxpayers to cover over $1 billion."
      ],
      check: { q: "Who paid when Venezuela defaulted on loans for Brazilian-built projects?",
        choices: ["Odebrecht", "Brazilian taxpayers, through the export guarantee fund", "The IMF"], answer: 1,
        explain: "The loans came from Brazil's development bank, BNDES." },
      sources: [
        { title: "Cuba and Venezuela default on Brazilian development loans", publisher: "MercoPress", url: "https://en.mercopress.com/2018/12/27/cuba-and-venezuela-default-on-brazilian-development-loans", date: "2018-12-27" },
        { title: "Brazil–Venezuela relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Brazil%E2%80%93Venezuela_relations", date: "n.d." },
        { title: "Brazil ex-president Lula investigated for corruption", publisher: "Al Jazeera", url: "https://www.aljazeera.com/amp/news/2015/7/17/brazil-ex-president-lula-investigated-for-corruption", date: "2015-07-17" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "br_ve-2", kind: "relation", asOf: "2026-10-11",
      title: "The crossing at Pacaraima",
      dek: "Hundreds of thousands of Venezuelans have fled into Brazil through one small border town. Brazil's army-run Operation Welcome has sheltered them and moved many to other cities.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br_ve/br_ve-2-hero.webp",
          alt: "Illustration of rows of white shelter tents and a reception centre on red earth near a border town, families with bags walking in.",
          caption: "Operation Welcome receives Venezuelans at the border in Roraima.",
          credit: "Illustration — not a photograph",
          prompt: "Rows of white shelter tents and prefabricated reception buildings on red earth near a small border town, green savanna hills behind, families carrying bags and bundles walking toward the gate, hot hazy light, documentary painting style, figures small and seen from behind, no flags, no legible text." },
        { type: "timeline", head: "An exodus south", items: [
          ["2015–16", "Venezuelans begin crossing into Roraima"],
          ["Feb 2018", "Brazil launches Operação Acolhida"],
          ["Aug 2018", "Locals attack migrant camps in Pacaraima"],
          ["2019", "Brazil recognises Venezuelans as refugees en masse"],
          ["Mar 2023", "100,000 Venezuelans relocated from Roraima"],
          ["2025", "About 96,000 new arrivals in the year"]
        ] },
        { type: "section", head: "The crossing", md:
          "As Venezuela's economy collapsed after 2014 (see [[lesson:ve-7]]), millions fled. Most went to Colombia and Peru, but hundreds of thousands walked or rode across the Amazon border into Brazil at Pacaraima, a small town in Roraima, Brazil's least populous state. Many were hungry or ill; Indigenous Warao families from the Orinoco delta came too. Roraima's capital, Boa Vista, a city of about 400,000, struggled to cope, and its hospitals and schools filled." },
        { type: "section", head: "Tension", md:
          "Resentment grew. In August 2018, after a local shopkeeper was robbed and beaten, residents of Pacaraima attacked migrant camps, burned their belongings and drove more than a thousand Venezuelans back across the border. Roraima's governor asked the federal government to close the border, which it refused to do; a court briefly ordered the border shut, but the order was quickly overturned. Federal troops were sent to keep order." },
        { type: "section", head: "Operation Welcome", md:
          "In February 2018 Brazil's government launched Operação Acolhida, Operation Welcome, run by the army with UN agencies and charities. It has three parts: reception and documentation at the border, shelters and food in Roraima, and 'interiorisation', the voluntary relocation of Venezuelans to other cities where they can find work. By March 2023 it had relocated 100,000 people across Brazil, and by mid-2025 about 150,000, to more than 1,100 municipalities." },
        { type: "section", head: "Refugees", md:
          "In 2019 Brazil recognised the situation in Venezuela as a serious and generalised violation of human rights, letting it grant refugee status to Venezuelans quickly and in large numbers. Venezuelans in Brazil can work legally, open bank accounts and use public health care and schools. The UN refugee agency has praised the programme as a model." },
        { type: "section", head: "Still arriving", md:
          "Arrivals continued even as some Venezuelans returned home after 2024. Roraima received about 96,000 new Venezuelan migrants in 2025, and was among the fastest-growing states in Brazil." },
        { type: "section", head: "Integration", md:
          "About half a million Venezuelans now live in Brazil. Many work in meatpacking plants in the south, in construction and in services; their children attend Brazilian schools. Surveys by the UN refugee agency found that relocated Venezuelans were far more likely to find formal jobs than those who stayed in Roraima, though many still earn less than Brazilians doing the same work and face discrimination." },
        { type: "compare", head: "Two views of the influx",
          left: { head: "Humanitarian", md:
            "Brazil opened its border and built one of the region's most successful refugee programmes." },
          right: { head: "Local strain", md:
            "Roraima bore the cost, with overstretched hospitals, schools and jobs." } },
        { type: "section", head: "Why it matters", md:
          "Venezuela's crisis became Brazil's crisis at its northern edge. How Brazil handled it has shaped its standing in the region and its politics at home." }
      ],
      takeaways: [
        "Hundreds of thousands of Venezuelans have entered Brazil through Pacaraima, in Roraima, since 2015.",
        "Operation Welcome, launched in February 2018, has relocated about 150,000 Venezuelans to other Brazilian cities.",
        "In 2019 Brazil began granting refugee status to Venezuelans in large numbers."
      ],
      check: { q: "What is 'interiorisation' in Operation Welcome?",
        choices: ["Deporting migrants", "The voluntary relocation of Venezuelans from Roraima to other Brazilian cities", "Building a border wall"], answer: 1,
        explain: "It eased the pressure on Roraima and helped migrants find work." },
      sources: [
        { title: "Operação Acolhida atinge a marca de 100 mil pessoas refugiadas e migrantes venezuelanas interiorizadas", publisher: "IOM Brazil", url: "https://brazil.iom.int/pt-br/news/operacao-acolhida-atinge-marca-de-100-mil-pessoas-refugiadas-e-migrantes-venezuelanas-interiorizadas", date: "2023-03" },
        { title: "Migration Response Done Right: Brazil's Model for a World in Crisis", publisher: "Global Health NOW", url: "https://globalhealthnow.org/2025-07/migration-response-done-right-brazils-model-world-crisis", date: "2025-07" },
        { title: "Latinoamérica21: The World Should Take Note of Brazil's Refugee Policy", publisher: "Refugees International", url: "https://www.refugeesinternational.org/latinoamerica21-the-world-should-take-note-of-brazils-refugee-policy/", date: "n.d." },
        { title: "Qual o impacto da crise na Venezuela em Roraima?", publisher: "ND Mais", url: "https://ndmais.com.br/politica/impacto-crise-venezuela-e-roraima-brasil/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "br_ve-3", kind: "relation", asOf: "2026-10-11",
      title: "Lula's break with Maduro",
      dek: "Lula welcomed Maduro back in 2023, then refused to recognise his 2024 'victory' and blocked Venezuela from BRICS. When US forces seized Maduro in 2026, Lula condemned it anyway.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br_ve/br_ve-3-hero.webp",
          alt: "Illustration of a modernist presidential palace with slender white columns reflected in a pool at dusk.",
          caption: "Lula condemned the US raid on Caracas from Brasília's presidential palace.",
          credit: "Illustration — not a photograph",
          prompt: "A modernist presidential palace with slender curved white columns and a long low glass facade reflected in a still pool at dusk, a wide empty plaza, deep blue sky, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "From embrace to estrangement", items: [
          ["May 2023", "Lula receives Maduro in Brasília"],
          ["Dec 2023", "Brazil moves troops to Roraima amid the Essequibo crisis"],
          ["Jul 2024", "Venezuela's disputed election; Brazil asks for tally sheets"],
          ["Oct 2024", "Brazil blocks Venezuela's bid to become a BRICS partner"],
          ["3 Jan 2026", "US forces seize Maduro; Lula condemns the raid"],
          ["Feb 2026", "Lula: Maduro should be tried in Venezuela"]
        ] },
        { type: "section", head: "A warm welcome", md:
          "Jair Bolsonaro, Brazil's president from 2019 to 2022, had broken off relations with Maduro and recognised the opposition's Juan Guaidó. When Lula returned in 2023, he restored them. In May 2023 he received Maduro in Brasília with full honours and dismissed criticism of Venezuela's human rights record as a 'constructed narrative', a remark that drew rebukes from the presidents of Chile and Uruguay." },
        { type: "section", head: "Essequibo", md:
          "In December 2023 Maduro held a referendum on annexing Essequibo, the two-thirds of neighbouring Guyana that Venezuela claims (see [[lesson:ve-12]]). Any Venezuelan invasion would most easily pass through Brazilian territory. Brazil moved troops and armoured vehicles to Roraima and warned Caracas not to use force; Lula helped broker a meeting between the two countries' presidents that eased the crisis." },
        { type: "section", head: "The stolen election", md:
          "After Venezuela's presidential election of 28 July 2024, the electoral council declared Maduro the winner without publishing detailed results, while the opposition published tally sheets showing a large win for its candidate, Edmundo González. Brazil, with Colombia and Mexico, called for the full results to be released, and refused to recognise Maduro's victory. Relations froze. In October 2024 Brazil vetoed Venezuela's bid to become a partner of the BRICS group, and Caracas recalled its ambassador and accused Brazil of interference." },
        { type: "section", head: "The raid", md:
          "When US forces struck Caracas and seized Maduro on 3 January 2026 (see [[lesson:ve-5]]), Lula condemned it as a serious violation of international law, warning that attacking countries was 'the first step toward a world of violence and chaos'. He nonetheless kept talking to Trump, and in February said that if Maduro had to be tried, it should be in Venezuela, not abroad." },
        { type: "section", head: "After Maduro", md:
          "Brazil has engaged cautiously with the acting president, Delcy Rodríguez, welcoming the release of political prisoners and urging free elections. Its October 2026 elections, in which Flávio Bolsonaro led the first round, could change Brazil's approach (see [[lesson:br-7]])." },
        { type: "section", head: "The border", md:
          "Brazil's army still watches the northern border, where illegal gold mining, smuggling and the Venezuelan gang Tren de Aragua are growing concerns." },
        { type: "compare", head: "Lula's balancing act",
          left: { head: "Against Maduro", md:
            "Refused to recognise a stolen election and blocked Venezuela from BRICS." },
          right: { head: "Against Washington", md:
            "Condemned the US raid as a violation of sovereignty and law." } },
        { type: "section", head: "Why it matters", md:
          "Brazil wants to be South America's leader and mediator. Venezuela tested that ambition, showing both the limits of friendship with Caracas and of Brazil's influence over Washington." }
      ],
      takeaways: [
        "Lula welcomed Maduro in 2023 but refused to recognise his disputed 2024 election victory.",
        "In October 2024 Brazil blocked Venezuela's bid to become a BRICS partner.",
        "Lula condemned the US seizure of Maduro in January 2026 as a violation of international law."
      ],
      check: { q: "What did Brazil do after Venezuela's July 2024 election?",
        choices: ["Recognised Maduro's victory immediately", "Called for full results and refused to recognise Maduro's win", "Invaded Venezuela"], answer: 1,
        explain: "Relations froze, and Brazil vetoed Venezuela's BRICS bid in October 2024." },
      sources: [
        { title: "'A dangerous precedent': World leaders react to the U.S. attack on Venezuela", publisher: "CNBC", url: "https://www.cnbc.com/2026/01/03/trump-venezuela-attack-world-leaders-react.html", date: "2026-01-03" },
        { title: "Brazil's Lula says Maduro should face trial in Venezuela, not US", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/2/21/brazils-lula-says-maduro-should-face-trial-in-venezuela-not-us", date: "2026-02-21" },
        { title: "Latin America's leaders react to U.S. ouster of Maduro in Venezuela", publisher: "Latin America Reports", url: "https://latinamericareports.com/latin-americas-leaders-react-to-u-s-ouster-of-maduro-in-venezuela/13231/", date: "2026-01" },
        { title: "Brazil–Venezuela relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Brazil%E2%80%93Venezuela_relations", date: "n.d." }
      ]
    }
  ]
});
