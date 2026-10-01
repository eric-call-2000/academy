/* ============================================================
   Unit 28 — Venezuela 🇻🇪
   Research note and sources: tools/research/ve.md
   Current as of 29 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("ve", {
  id: "ve",
  asOf: "2026-09-29",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ve-1", kind: "snapshot", asOf: "2026-09-29",
      title: "Venezuela in brief",
      dek: "US forces seized Nicolás Maduro in January 2026. His deputy now runs the country, pumping oil for America and promising elections without a date.",
      blocks: [
        { type: "map", src: "maps/ve.svg",
          alt: "Locator map of northern South America with Venezuela highlighted on the Caribbean coast, with Colombia to the west, Brazil to the south and Guyana to the east, and a small globe showing its place in the world.",
          caption: "Venezuela sits on the Caribbean coast of South America. It claims the Essequibo region of Guyana, drawn here as Guyana's, which most countries recognise.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Caracas"],
          ["People", "About 28 million at home; nearly 8 million have left since 2014"],
          ["System", "Presidential republic under the 1999 constitution; in practice authoritarian"],
          ["Acting president", "Delcy Rodríguez, since 5 January 2026"],
          ["Oil", "The world's largest proven reserves; output about 1.25 million barrels a day"],
          ["Former president", "Nicolás Maduro, awaiting trial in New York"],
          ["Next election", "Promised, no date set"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Venezuela sits on the largest proven oil reserves in the world, more than Saudi Arabia's. Under Hugo Chávez and Nicolás Maduro it became the symbol of a left-wing 'Bolivarian revolution', then of economic collapse: the economy shrank by about three-quarters, hyperinflation destroyed savings, and nearly 8 million people fled, the largest exodus in Latin America's modern history.\n\n" +
          "In 2025–26 it became the scene of the most dramatic US military intervention in Latin America in decades. American forces struck suspected drug boats in the Caribbean from September 2025, blockaded oil tankers in December, and on 3 January 2026 raided Caracas and captured Maduro, flying him to New York to face drug-trafficking charges. What comes next will shape the region and the oil market." },
        { type: "section", head: "Who holds power", md:
          "Maduro's vice-president, Delcy Rodríguez, was sworn in as acting president two days after the raid. Rather than install the opposition, the Trump administration chose to work with her. She has opened the oil industry to American companies, released hundreds of political prisoners and promised elections. But the machine of [[chavismo]], the movement Chávez built, is intact: her brother Jorge runs the National Assembly, and Diosdado Cabello still controls the police as interior minister." },
        { type: "section", head: "The mood in 2026", md:
          "Venezuelans are relieved, uncertain and divided. Many celebrated Maduro's fall; others resent a foreign invasion. More than half a million barrels of oil a day now flow to the US, and the economy has started to recover. But the opposition, led by the Nobel Peace Prize winner María Corina Machado, has been sidelined, and at the UN in September Rodríguez promised elections without saying when." },
        { type: "section", head: "What the players want", md:
          "Washington wants oil, an end to drug trafficking and migration, and a government that answers to it. Rodríguez wants to keep her movement in power and win legitimacy. The opposition wants a free election, which it believes it would win easily. Most Venezuelans want jobs, stable prices and the chance for their families abroad to come home." },
        { type: "section", head: "Land and people", md:
          "Most Venezuelans live along the Caribbean coast and in the Andean valleys of the north-west. The vast plains of the llanos and the Guiana highlands to the south, home to Angel Falls, the world's highest waterfall, are thinly populated, and illegal gold mining there has devastated rainforest and Indigenous communities." },
        { type: "callout", tone: "why", md:
          "Venezuela is a test of what US military power can achieve in its own hemisphere, and of whether regime change without an election leads to democracy or simply to a friendlier autocracy." }
      ],
      takeaways: [
        "Venezuela has the world's largest proven oil reserves, but its economy collapsed and nearly 8 million people left.",
        "US forces captured Nicolás Maduro on 3 January 2026; he awaits trial in New York.",
        "Acting president Delcy Rodríguez works with Washington on oil and has promised elections, but set no date."
      ],
      check: { q: "Who has governed Venezuela since Maduro's capture?",
        choices: ["María Corina Machado", "Delcy Rodríguez, Maduro's vice-president", "Edmundo González"], answer: 1,
        explain: "Rodríguez was sworn in as acting president on 5 January 2026, and the US chose to work with her." },
      sources: [
        { title: "The US capture of Nicolás Maduro", publisher: "House of Commons Library (UK)", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10452/", date: "2026" },
        { title: "Venezuela's Delcy Rodriguez promises elections at UN, gives no date", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/9/24/venezuelas-delcy-rodriguez-promises-elections-at-un-gives-no-date", date: "2026-09-24" },
        { title: "The US is gobbling up Venezuelan oil, but will it lower fuel prices?", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/9/2/the-us-is-gobbling-up-venezuelan-oil-but-will-it-lower-fuel-prices", date: "2026-09-02" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ve-2", kind: "power", asOf: "2026-09-29",
      title: "Chavismo without Maduro",
      dek: "On paper a democracy with five branches of government. In practice, a party-state held together by oil, the army and a few families.",
      blocks: [
        { type: "diagram", src: "img/ve/ve-2-power.svg",
          alt: "Diagram of power in Venezuela. Delcy Rodríguez, acting president since January 2026, leads the government and the ruling United Socialist Party. The National Assembly, with 277 seats, is controlled by the ruling party and led by her brother Jorge Rodríguez. The Supreme Court and the National Electoral Council are loyal to the government. The armed forces and police, with Diosdado Cabello as interior minister, hold the regime together. The state oil company PDVSA now sells much of its output to the United States, which holds strong influence over the government.",
          caption: "The Chavista state survived its leader's removal, now under heavy US influence.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The constitution", md:
          "Hugo Chávez's 1999 constitution created a presidency with a six-year term, a single-chamber National Assembly, and five branches of government, adding an electoral branch and a 'citizens' power' of prosecutors and ombudsmen to the usual three. A 2009 referendum removed term limits. On paper it guarantees broad rights. In practice, by the 2010s all five branches answered to the ruling United Socialist Party of Venezuela (PSUV)." },
        { type: "section", head: "Captured institutions", md:
          "The Supreme Court, packed with loyalists since 2004, has approved every major government move, including stripping the opposition-led National Assembly of its powers after the opposition won it in 2015. The National Electoral Council (CNE) declared Maduro the winner of the 2024 election without publishing detailed results. A 2017 'constituent assembly', boycotted by the opposition, sidelined the legislature for three years. Since 2021 the ruling party has again controlled the Assembly, now led by Jorge Rodríguez." },
        { type: "section", head: "Guns, oil and families", md:
          "The regime's real pillars have been the armed forces, whose generals were given control of ministries, food imports, mining and ports; the security services, which the UN's fact-finding mission has accused of torture and crimes against humanity; armed pro-government gangs known as colectivos; and the state oil company, PDVSA. Power is shared among a handful of clans: the Rodríguez siblings, Cabello, and senior officers. That structure survived Maduro's capture intact." },
        { type: "section", head: "The American factor", md:
          "Since January 2026 a new actor sits above the system: the United States. American companies and officials now help decide where Venezuela's oil goes and how its revenues are spent, Washington has lifted personal sanctions on Rodríguez, and US naval forces remain in the Caribbean. Critics call it a protectorate; the government calls it cooperation among sovereign equals." },
        { type: "section", head: "Changes at the top", md:
          "Rodríguez has reshuffled the cabinet, moving the long-serving defence minister Vladimir Padrino López to agriculture in March 2026 and appointing Gustavo González López, a former intelligence chief, to defence, and naming a new foreign minister in July. The changes consolidate her hold without dismantling the ruling party's machine." },
        { type: "section", head: "Elections without choice", md:
          "Venezuela kept holding elections under Chávez and Maduro, which the government used to claim legitimacy. Chávez won most of them fairly, if on an uneven playing field. Under Maduro, the conditions worsened: opposition parties were taken over by court order, leading candidates were barred, and the electoral council was packed with loyalists. The regional and legislative elections of May 2025 were boycotted by most of the opposition." },
        { type: "compare", head: "Two views of the system now",
          left: { head: "The government's view", md:
            "Venezuela has survived an act of aggression, restored stability and opened a dialogue with everyone, including Washington and the opposition." },
          right: { head: "The opposition's view", md:
            "The same people who stole the 2024 election and jailed thousands still run the country. Only a free, internationally monitored vote can end the dictatorship." } }
      ],
      takeaways: [
        "Chávez's 1999 constitution created five branches, but all came under the ruling party's control.",
        "The army, security services, oil company and a few political clans are the regime's real pillars.",
        "Since January 2026 the US has had strong influence over the government and its oil."
      ],
      check: { q: "What did the Supreme Court do after the opposition won the National Assembly in 2015?",
        choices: ["Nothing", "It stripped the Assembly of its powers", "It called new elections"], answer: 1,
        explain: "The loyalist court declared the Assembly in contempt and transferred its powers, and a 2017 constituent assembly later sidelined it." },
      sources: [
        { title: "Venezuela profile", publisher: "BBC News", url: "https://www.bbc.com/news/world-latin-america-19649648", date: "n.d." },
        { title: "Venezuela: Oil, democracy or both?", publisher: "The Washington Times", url: "https://www.washingtontimes.com/news/2026/sep/22/venezuela-oil-democracy/", date: "2026-09-22" },
        { title: "Detailed findings of the Independent International Fact-Finding Mission on Venezuela", publisher: "UN Human Rights Council", url: "https://www.ohchr.org/en/hr-bodies/hrc/ffmv/index", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "ve-9", kind: "founding", asOf: "2026-09-29",
      title: "Bolívar's republic",
      dek: "Venezuela was the first Spanish colony in South America to declare independence, and the birthplace of Simón Bolívar. His legend has been claimed by every Venezuelan government since.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ve/ve-9-hero.webp",
          alt: "Illustration of a column of soldiers in early-19th-century uniforms and ponchos crossing a high, misty mountain pass in the Andes, seen from behind.",
          caption: "Bolívar's army crossed the Andes in 1819 to liberate New Granada.",
          credit: "Illustration — not a photograph",
          prompt: "A long column of soldiers in ragged early-19th-century uniforms and ponchos, some on horseback, crossing a high cold mountain pass in the Andes, seen from behind, swirling mist and snow on the peaks, epic and exhausting mood, no faces, no flags, no legible text." },
        { type: "timeline", head: "From colony to republic", items: [
          ["19 Apr 1810", "Caracas junta deposes the Spanish governor"],
          ["5 Jul 1811", "Declaration of independence"],
          ["1812", "Earthquake and royalist reconquest; first republic falls"],
          ["1819", "Gran Colombia proclaimed"],
          ["24 Jun 1821", "Battle of Carabobo"],
          ["1830", "Venezuela leaves Gran Colombia; Bolívar dies"],
          ["1999", "Renamed the Bolivarian Republic"]
        ] },
        { type: "section", head: "A colony of cacao", md:
          "Colonial Venezuela was a modest part of Spain's empire, exporting cacao grown on plantations worked by enslaved Africans. A wealthy criollo elite in Caracas, including the family of Simón Bolívar, born there in 1783, resented Spanish trade restrictions and officials. The *llanos*, the vast plains of the interior, were home to hard-riding cattle herders, the *llaneros*, who would decide the wars to come." },
        { type: "section", head: "The first republics", md:
          "When Napoleon deposed Spain's king, Caracas set up its own junta on 19 April 1810, and on 5 July 1811 a congress declared independence, the first in Spanish South America. The first republic collapsed within a year, after an earthquake that the clergy called divine punishment and a royalist counter-attack. A second republic under Bolívar fell in 1814 to royalist llaneros led by José Tomás Boves, in a war of extraordinary cruelty on both sides. War, disease and reprisals killed a large share of the population." },
        { type: "section", head: "The Liberator", md:
          "Bolívar regrouped from exile, won over the llaneros under José Antonio Páez and promised freedom to enslaved people who fought. In 1819 he crossed the Andes and liberated New Granada (Colombia), then proclaimed Gran Colombia, uniting Venezuela, Colombia and later Ecuador. The Battle of Carabobo on 24 June 1821 secured Venezuela; his armies went on to free Peru and Bolivia, named after him. Bolívar dreamed of a union of Spanish America." },
        { type: "section", head: "Break-up", md:
          "The union did not last. Regional leaders resented rule from Bogotá and Bolívar's increasingly authoritarian ways. In 1829–30 Páez led Venezuela out of Gran Colombia, and Bolívar, ill and disillusioned, died in December 1830 near Santa Marta, reportedly saying he had 'ploughed the sea'. For the rest of the nineteenth century Venezuela was ruled mostly by caudillos, military strongmen who took power in civil wars and coups." },
        { type: "compare", head: "Whose Bolívar?",
          left: { head: "Chavismo", md:
            "Bolívar was an anti-imperialist revolutionary; the Bolivarian Revolution completes his fight for independence and Latin American unity." },
          right: { head: "Critics", md:
            "Chávez turned a complex liberal-minded aristocrat into a cult to justify his own rule and the army's role in politics." } },
        { type: "section", head: "Why it still matters", md:
          "No country worships its founder like Venezuela. Every town has a Plaza Bolívar, the currency is the bolívar, and Chávez renamed the country the Bolivarian Republic of Venezuela in 1999, added a star to the flag and had Bolívar's remains exhumed in 2010. The tradition of the military hero who saves the nation, from Páez to Chávez, runs through Venezuelan history, and the armed forces remain the arbiter of who governs ([[lesson:ve-2]])." }
      ],
      takeaways: [
        "Venezuela declared independence on 5 July 1811, the first Spanish colony in South America to do so.",
        "Simón Bolívar, born in Caracas, led the wars that freed Venezuela, Colombia, Ecuador, Peru and Bolivia.",
        "Venezuela left Gran Colombia in 1830; Chávez later built his movement around Bolívar's legend."
      ],
      check: { q: "What was Gran Colombia?",
        choices: ["A Spanish viceroyalty", "Bolívar's union of Venezuela, Colombia and Ecuador", "An oil company"], answer: 1,
        explain: "Bolívar proclaimed Gran Colombia in 1819; Venezuela left it in 1830." },
      sources: [
        { title: "Venezuela: The independence movement", publisher: "Britannica", url: "https://www.britannica.com/place/Venezuela/The-independence-movement", date: "n.d." },
        { title: "History of Venezuela", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Venezuela", date: "n.d." },
        { title: "Simón Bolívar", publisher: "Britannica", url: "https://www.britannica.com/biography/Simon-Bolivar", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ve-3", kind: "history", asOf: "2026-09-29",
      title: "Oil, Chávez and collapse",
      dek: "From Latin America's richest democracy to its biggest economic collapse outside war.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ve/ve-3-hero.webp",
          alt: "Illustration of rusting oil derricks standing in the shallow waters of a vast lake at sunset.",
          caption: "Lake Maracaibo, where Venezuela's oil boom began in the 1920s.",
          credit: "Illustration — not a photograph",
          prompt: "Dozens of old rusting oil derricks standing in the shallow waters of a vast calm lake at sunset, pipes and walkways between them, the sky orange and purple, reflections on the water, haunting and melancholy, no people, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1922", "Oil gusher at Lake Maracaibo launches the boom"],
          ["1958", "Dictatorship ends; two-party democracy begins"],
          ["1989", "The Caracazo riots"],
          ["1998", "Hugo Chávez elected"],
          ["2013", "Chávez dies; Nicolás Maduro succeeds him"],
          ["2018", "Hyperinflation; mass exodus"],
          ["2024", "Disputed presidential election"],
          ["2026", "US forces capture Maduro"]
        ] },
        { type: "section", head: "1. The oil democracy", md:
          "Oil discovered at Lake Maracaibo in 1922 turned a poor agricultural country into one of Latin America's richest. After the dictator Marcos Pérez Jiménez fell in 1958, two parties, the social-democratic Democratic Action and the Christian-democratic COPEI, shared power for 40 years under the Punto Fijo pact. Venezuela nationalised its oil in 1976 and helped found OPEC. But when oil prices fell in the 1980s, debt, inflation and corruption mounted, and in 1989 an austerity package set off the Caracazo riots, in which hundreds were killed." },
        { type: "section", head: "2. Chávez", md:
          "Hugo Chávez, a paratrooper who led a failed coup in 1992, won the presidency in 1998 promising to sweep away the corrupt old parties. He rewrote the constitution, survived a brief coup against him in 2002 and an oil strike, and used soaring oil revenues to fund clinics, subsidised food and literacy programmes, cutting poverty sharply. He nationalised industries, expropriated farms, attacked the independent press and allied with Cuba, sending it cheap oil in exchange for doctors and intelligence advisers. He died of cancer in 2013." },
        { type: "section", head: "3. Maduro and the collapse", md:
          "Chávez's chosen successor, Nicolás Maduro, a former bus driver and foreign minister, won a narrow election in 2013. When oil prices crashed in 2014, the economy imploded: output fell by about three-quarters, hyperinflation peaked in the hundreds of thousands of percent in 2018, and shortages of food and medicine became chronic. Oil production collapsed through mismanagement even before US [[sanctions]] on the oil industry in 2019. Millions left, mostly for Colombia, Peru, Brazil, Chile and the US." },
        { type: "section", head: "4. Repression and failed challenges", md:
          "Maduro crushed mass protests in 2014 and 2017, in which more than 100 people were killed. In 2019 the opposition-led Assembly's speaker, Juan Guaidó, declared himself interim president and was recognised by the US and some 50 countries, but the army stayed loyal to Maduro and the effort fizzled. The International Criminal Court opened an investigation into crimes against humanity." },
        { type: "section", head: "5. The 2024 election", md:
          "On 28 July 2024 the opposition's candidate, Edmundo González, a retired diplomat standing in for the barred María Corina Machado, faced Maduro. The electoral council declared Maduro the winner with about 51%, but never published detailed results. The opposition collected tally sheets from more than 80% of voting machines and published them online, showing González winning about two-thirds of the vote. Protests were crushed, some 2,000 people were detained, and González fled to Spain. Maduro was sworn in for a third term in January 2025." }
      ],
      takeaways: [
        "Oil made Venezuela rich, and a two-party democracy ruled from 1958 to 1998.",
        "Hugo Chávez's revolution cut poverty during an oil boom; under Maduro the economy collapsed.",
        "Maduro claimed victory in 2024, but opposition tally sheets showed Edmundo González winning about two-thirds of the vote."
      ],
      check: { q: "What did the opposition's tally sheets show about the 2024 election?",
        choices: ["A narrow Maduro win", "Edmundo González winning about two-thirds of the vote", "A tie"], answer: 1,
        explain: "Sheets from more than 80% of machines showed González with about 67%; the electoral council never published a breakdown." },
      sources: [
        { title: "Venezuela: History", publisher: "Britannica", url: "https://www.britannica.com/place/Venezuela/History", date: "n.d." },
        { title: "Presidency of Nicolás Maduro", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Presidency_of_Nicol%C3%A1s_Maduro", date: "2026" },
        { title: "Venezuela profile: Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-latin-america-19652436", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "ve-10", kind: "past", asOf: "2026-09-29",
      title: "The Punto Fijo democracy, 1958–1998",
      dek: "After a dictator fell in 1958, two parties built one of Latin America's most stable democracies on oil money. Its decay explains how Chávez came to power.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ve/ve-10-hero.webp",
          alt: "Illustration of the modernist skyline of Caracas in the 1970s, with tall towers, a motorway and green mountains behind.",
          caption: "Oil money built modern Caracas in the 1950s–70s.",
          credit: "Illustration — not a photograph",
          prompt: "The modernist skyline of Caracas in the 1970s, tall concrete towers and elevated motorways with vintage cars, the green Ávila mountain behind, bright tropical sunshine, optimistic retro mood, no people up close, no legible text." },
        { type: "timeline", head: "Forty years", items: [
          ["23 Jan 1958", "Dictator Marcos Pérez Jiménez overthrown"],
          ["31 Oct 1958", "Punto Fijo pact signed"],
          ["1960s", "Left-wing guerrilla war defeated"],
          ["1 Jan 1976", "Oil industry nationalised; PDVSA created"],
          ["18 Feb 1983", "'Black Friday' devaluation"],
          ["1989", "Caracazo riots"],
          ["1993", "President Pérez impeached"],
          ["1998", "Chávez elected"]
        ] },
        { type: "section", head: "The pact", md:
          "General Marcos Pérez Jiménez ruled Venezuela in the 1950s, building motorways and tower blocks with oil revenues while jailing and torturing opponents. A popular uprising and a military revolt forced him out on 23 January 1958. That October the leaders of three parties met at the house of Rafael Caldera, called Punto Fijo, and agreed to respect election results, share posts and defend democracy together. The communists were excluded. Rómulo Betancourt of Democratic Action (AD) won the presidency, and democracy survived coup attempts and a Cuban-backed guerrilla insurgency." },
        { type: "section", head: "Two parties, one system", md:
          "For four decades AD and the Christian democrats of COPEI alternated in power. Venezuela was held up as a model: regular elections, a free press, civilian control of the army, while much of Latin America lived under dictatorships. The system worked through oil money distributed via the parties, unions and business groups, which bought social peace but also bred patronage and corruption." },
        { type: "section", head: "'Saudi Venezuela'", md:
          "The 1973 oil shock quadrupled prices. President Carlos Andrés Pérez nationalised the oil industry on 1 January 1976, creating the state company PDVSA, and spent lavishly on industry, scholarships and subsidies; Venezuelans flew to Miami to shop, and the era became known as 'Saudi Venezuela'. The government also borrowed heavily. When oil prices fell in the 1980s, the bill came due: on 18 February 1983, 'Black Friday', the bolívar was devalued, and living standards began a long decline." },
        { type: "section", head: "Decay", md:
          "By the late 1980s most Venezuelans were poorer than a decade earlier, and many saw the parties as corrupt cliques. Pérez, re-elected in 1988, imposed IMF-backed austerity, which triggered the Caracazo riots ([[lesson:ve-11]]). In 1993 Congress impeached him for misusing public funds, and the veteran Caldera won the presidency as an independent, breaking the two-party system. When oil prices collapsed again in 1998, voters turned to the outsider Hugo Chávez, who promised to sweep the old parties away." },
        { type: "compare", head: "Two verdicts on Punto Fijo",
          left: { head: "Its defenders", md:
            "It gave Venezuela forty years of democracy and freedom, far better than what came before or after." },
          right: { head: "Chavismo", md:
            "It was a corrupt pact of elites that shared the oil wealth among themselves and left the poor behind." } },
        { type: "section", head: "Why it still matters", md:
          "Chávez built his movement by denouncing the 'Fourth Republic', as he called the Punto Fijo era, and AD and COPEI never recovered. Today's opposition, led by María Corina Machado, has had to build new parties from scratch. The lessons of 1958, when parties with deep differences agreed on rules to share power, are often cited in discussions of how a transition from chavismo might work (briefings [[lesson:ve-6|#]] and [[lesson:ve-8|#]])." }
      ],
      takeaways: [
        "After the fall of Pérez Jiménez in 1958, AD and COPEI agreed in the Punto Fijo pact to share power and defend democracy.",
        "Oil nationalisation in 1976 and the 1970s boom brought wealth, debt and corruption.",
        "Falling oil prices and austerity discredited the parties, opening the way for Chávez in 1998."
      ],
      check: { q: "What was the Punto Fijo pact?",
        choices: ["A 1958 agreement among parties to share power and defend democracy", "An oil deal with the US", "A peace treaty with Colombia"], answer: 0,
        explain: "After the dictator's fall, party leaders agreed to respect elections and govern together." },
      sources: [
        { title: "History of Venezuela", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Venezuela", date: "n.d." },
        { title: "Constitutional history of Venezuela", publisher: "ConstitutionNet", url: "https://constitutionnet.org/country/venezuela", date: "n.d." },
        { title: "Carlos Andrés Pérez", publisher: "Britannica", url: "https://www.britannica.com/biography/Carlos-Andres-Perez", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "ve-11", kind: "past", asOf: "2026-09-29",
      title: "The Caracazo and the coup of 1992",
      dek: "In 1989 riots against austerity were crushed with hundreds of deaths. Three years later a paratrooper named Hugo Chávez tried to seize power, failed, and became a national figure.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ve/ve-11-hero.webp",
          alt: "Illustration of steep hillside barrios of Caracas at dawn, with smoke rising from the streets below.",
          caption: "The riots began in the poor neighbourhoods around Caracas in February 1989.",
          credit: "Illustration — not a photograph",
          prompt: "Steep hillsides covered in brick barrio houses above Caracas at dawn, thin columns of smoke rising from the streets below, a hazy orange sky, tense and ominous mood, no people up close, no legible text." },
        { type: "facts", head: "Two shocks", rows: [
          ["Caracazo", "27 February to early March 1989"],
          ["Official death toll", "276; rights groups say many hundreds"],
          ["Trigger", "Fuel price rise and fare increases under IMF-backed reforms"],
          ["Coup attempt", "4 February 1992, led by Lt Col Hugo Chávez"],
          ["Second coup attempt", "27 November 1992"]
        ] },
        { type: "section", head: "The package", md:
          "Carlos Andrés Pérez won the 1988 election, and many voters expected a return of the free-spending boom of his first term. Instead, facing empty reserves, he announced an IMF-backed 'package' in February 1989: higher petrol prices, freed prices and cuts to subsidies. When bus fares jumped on 27 February, commuters from the poor towns around Caracas rioted. Looting spread across the capital and other cities." },
        { type: "section", head: "The massacre", md:
          "The government suspended constitutional rights and sent in the army. Soldiers and police fired into barrios, and many victims were buried in mass graves. The official toll was 276 dead; rights groups documented many hundreds more, and some estimates run far higher. In 1999 the Inter-American Court of Human Rights ruled against Venezuela and ordered investigations. The Caracazo shattered the image of a stable democracy and convinced many that the system served only the few." },
        { type: "section", head: "'For now'", md:
          "Inside the army a secret movement of junior officers, the MBR-200, had been plotting for years, inspired by Bolívar and angered by corruption and by being ordered to fire on civilians. On the night of 4 February 1992 its leader, Lieutenant Colonel Hugo Chávez, launched a coup. The rebels took bases in other cities but failed to capture the president in Caracas. Chávez surrendered, and was allowed to speak on television. He told his comrades that their objectives had not been achieved 'por ahora', for now, and took responsibility. The phrase made him famous." },
        { type: "section", head: "From prison to power", md:
          "A second coup attempt by other officers in November 1992 also failed. Chávez spent two years in prison, becoming a folk hero in the barrios. Pérez was impeached in 1993, and President Caldera, who had refused to condemn the coup outright, pardoned Chávez in 1994. Chávez toured the country, abandoned armed struggle for elections and won the presidency in December 1998 with 56% of the vote ([[lesson:ve-3]])." },
        { type: "compare", head: "Two views of 4 February",
          left: { head: "Chavismo", md:
            "A 'day of national dignity', when patriotic soldiers rose against a corrupt regime that massacred its people in 1989." },
          right: { head: "Opponents", md:
            "A failed military coup against an elected government, which made the use of force a founding myth of the regime." } },
        { type: "section", head: "Why it still matters", md:
          "Chavismo celebrates 4 February as a holiday, and the Caracazo is part of its founding story, cited to justify the break with the old system. The events also marked the start of the armed forces' return to politics, which Chávez completed in office and on which the government of Delcy Rodríguez still depends (briefings [[lesson:ve-2|#]] and [[lesson:ve-4|#]]). For opponents, a movement born in a coup was never likely to give up power at the ballot box." }
      ],
      takeaways: [
        "IMF-backed price rises in 1989 set off the Caracazo riots, which security forces crushed, killing hundreds.",
        "On 4 February 1992 Lt Col Hugo Chávez led a failed coup and became famous for saying it failed 'for now'.",
        "Pardoned in 1994, Chávez won the presidency in 1998."
      ],
      check: { q: "What did Chávez famously say after his failed 1992 coup?",
        choices: ["'Independence or death'", "That the rebels' goals had not been achieved 'for now'", "'We will decide who comes'"], answer: 1,
        explain: "His televised surrender, saying the rebels had failed 'por ahora', turned him into a national figure." },
      sources: [
        { title: "Case of the Caracazo v. Venezuela", publisher: "Inter-American Court of Human Rights", url: "https://www.corteidh.or.cr/docs/casos/articulos/seriec_58_ing.pdf", date: "1999" },
        { title: "February 1992 Venezuelan coup attempt", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/February_1992_Venezuelan_coup_attempt", date: "n.d." },
        { title: "Hugo Chávez", publisher: "Britannica", url: "https://www.britannica.com/biography/Hugo-Chavez", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "ve-4", kind: "players", asOf: "2026-09-29",
      title: "Rodríguez, Cabello and Machado",
      dek: "The acting president, her brother, the regime's enforcer, and the opposition leader who won a Nobel Prize but not a seat at the table.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ve/ve-4-hero.webp",
          alt: "Illustration of a colonial-style white palace with a courtyard and arched colonnades in Caracas, with mountains rising behind.",
          caption: "Miraflores Palace, the seat of Venezuela's presidency, below the Ávila mountain.",
          credit: "Illustration — not a photograph",
          prompt: "A white colonial-style palace with a central courtyard, arched colonnades and a fountain, a lush green mountain rising steeply behind under drifting clouds, tropical trees, morning light, calm and guarded, no people, no flags, no legible text." },
        { type: "people", head: "Five to know", items: [
          { name: "Delcy Rodríguez", role: "Acting president, since January 2026",
            img: "img/ve/portrait-delcy-rodriguez.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "A lawyer, former foreign minister and Maduro's vice-president since 2018; also ran the oil ministry. The first woman to exercise Venezuela's presidency." },
          { name: "Jorge Rodríguez", role: "President of the National Assembly",
            img: "img/ve/portrait-jorge-rodriguez.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "Delcy's brother, a psychiatrist and the ruling party's chief negotiator in past talks with the opposition. The siblings' father was a left-wing activist who died in police custody in 1976." },
          { name: "Diosdado Cabello", role: "Interior minister",
            img: "img/ve/portrait-cabello.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "A former army officer and Chávez's comrade in the 1992 coup, long seen as the regime's enforcer. Controls the police; indicted in the US on drug charges, which he denies." },
          { name: "María Corina Machado", role: "Opposition leader",
            img: "img/ve/portrait-machado.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "An engineer who won the opposition primary in 2023 with over 90% but was barred from running; spent months in hiding; won the 2025 Nobel Peace Prize. Plans to return and run for president." },
          { name: "Nicolás Maduro", role: "President 2013–26; in US custody",
            img: "img/ve/portrait-maduro.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "Captured with his wife, Cilia Flores, on 3 January 2026; pleaded not guilty to narco-terrorism and drug charges in New York, and says he is still president." }
        ] },
        { type: "section", head: "Rodríguez's balancing act", md:
          "Delcy Rodríguez must satisfy two masters: a Trump administration that can topple her as it toppled Maduro, and a ruling movement whose hardliners see cooperation with Washington as betrayal. So far she has given the US what it wants most, oil and access, while keeping control at home. She won the lifting of US sanctions on herself, freed hundreds of prisoners under an amnesty law, and opened talks with parts of the opposition, but has resisted setting an election date." },
        { type: "section", head: "The opposition sidelined", md:
          "After the raid, many Venezuelans expected the US to install Machado or González. Instead, Trump said Machado lacked the support to govern and chose to work with Rodríguez. Machado, who had dedicated her Nobel Prize to Trump and backed the pressure campaign, was left on the outside. In May 2026, meeting other opposition leaders in Panama, she announced she would run for president and return to Venezuela before the end of the year. Her movement has proposed 24 July 2027 as an election date." },
        { type: "section", head: "Edmundo González", md:
          "The retired diplomat who stood in for Machado in 2024, and whom the opposition considers the rightful president-elect, went into exile in Spain after a warrant was issued for his arrest. He has toured foreign capitals and remains a symbol of the stolen vote, but Machado is the movement's undisputed leader." },
        { type: "section", head: "Hardliners and the army", md:
          "Cabello and senior officers are the biggest risk to any transition. Several face US indictments, so an election that removed the ruling party could leave them exposed. Their cooperation depends on guarantees: amnesty, protection of their wealth, or a role in whatever comes next. How much Washington is willing to promise them is one of the transition's great unknowns." }
      ],
      takeaways: [
        "Delcy Rodríguez balances US demands against hardliners in her own movement.",
        "Washington sidelined María Corina Machado, the Nobel laureate who leads the opposition.",
        "Diosdado Cabello and the army are the key obstacles, and potential spoilers, in any transition."
      ],
      check: { q: "What did María Corina Machado win in 2025?",
        choices: ["The presidency", "The Nobel Peace Prize", "A seat in the National Assembly"], answer: 1,
        explain: "Machado was awarded the 2025 Nobel Peace Prize for her campaign for democracy in Venezuela." },
      sources: [
        { title: "Delcy Rodríguez", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Delcy_Rodr%C3%ADguez", date: "2026" },
        { title: "Venezuelan opposition leader Machado says she will run again for presidency and return from exile by late 2026", publisher: "PBS News", url: "https://www.pbs.org/newshour/world/venezuelan-opposition-leader-machado-says-she-will-run-again-for-presidency-and-return-from-exile-by-late-2026", date: "2026-05" },
        { title: "Maduro's enforcer Cabello", publisher: "NPR", url: "https://www.npr.org/2026/01/18/nx-s1-5678974/venezuela-maduro-enforcer-cabello", date: "2026-01-18" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "ve-5", kind: "story", asOf: "2026-09-29",
      title: "Boats, blockade and the raid",
      dek: "How a campaign of strikes on suspected drug boats became the capture of a head of state.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ve/ve-5-hero.webp",
          alt: "Illustration of a grey warship on a dark Caribbean sea at night with helicopters in the sky and the lights of a coastal city on the horizon.",
          caption: "The United States built up its largest naval presence in the Caribbean in decades.",
          credit: "Illustration — not a photograph",
          prompt: "A large grey warship on a dark calm sea at night, two helicopters with navigation lights in the sky, the distant glittering lights of a coastal city at the foot of mountains on the horizon, moonlight on the water, tense and cinematic, no flags, no legible text." },
        { type: "section", head: "The boat strikes", md:
          "On 2 September 2025 the US military destroyed a speedboat that had left Venezuela, killing all 11 people aboard; the Trump administration said they were drug traffickers from the Tren de Aragua gang. Dozens more strikes followed, in the Caribbean and then the eastern Pacific, under what became Operation Southern Spear. By 19 September 2026 at least 234 people had been killed in about 78 strikes. The administration released little evidence about the people killed or their cargo, and legal experts and several governments called the strikes extrajudicial killings." },
        { type: "section", head: "The raid", md:
          "Washington also built up a large naval force, declared Venezuela's leaders the heads of a terrorist drug cartel, and in December ordered a blockade of sanctioned oil tankers. Before dawn on 3 January 2026, in Operation Absolute Resolve, US aircraft struck Venezuela's air defences and special forces raided Maduro's residence in Caracas, seizing him and his wife, Cilia Flores. The operation took about three hours. Venezuela said around 100 people were killed; Cuba said 32 of its military and intelligence personnel died guarding Maduro. Seven US troops were injured." },
        { type: "facts", head: "The campaign", rows: [
          ["First boat strike", "2 September 2025, 11 killed"],
          ["Boat strikes to 19 Sep 2026", "About 78, killing at least 234"],
          ["Oil blockade", "Ordered December 2025"],
          ["Raid on Caracas", "3 January 2026"],
          ["Deaths in the raid", "About 100, according to Venezuela, including 32 Cubans"],
          ["Maduro's trial", "Set for 1 June 2027 in New York"]
        ] },
        { type: "section", head: "In court", md:
          "Maduro and Flores appeared in federal court in Manhattan days later and pleaded not guilty to narco-terrorism, cocaine-importation and weapons charges; Maduro declared he was still president. In July 2026 Judge Alvin Hellerstein set the trial for 1 June 2027, citing the time needed to review classified evidence." },
        { type: "section", head: "Why Washington acted", md:
          "The Trump administration gave several reasons: drug trafficking, which it blamed on a 'Cartel of the Suns' it said Maduro led; migration and the Tren de Aragua gang; Maduro's theft of the 2024 election; and his ties to Iran, Russia, China and Cuba. Critics noted that most US-bound cocaine comes from Colombia, not Venezuela, and that the oil deals that followed suggested other motives." },
        { type: "compare", head: "Two views of the raid",
          left: { head: "Supporters", md:
            "A narco-dictator who stole an election and drove millions from their homes has been brought to justice without a long war. Many Venezuelans celebrated." },
          right: { head: "Critics", md:
            "An unprovoked attack on a sovereign country violated international law. Brazil's Lula said it crossed 'an unacceptable line', and it sets a dangerous precedent." } },
        { type: "section", head: "Why it matters", md:
          "It was the first time since the 1989 invasion of Panama that US forces had seized a Latin American head of state, and it signalled a new willingness to use force in the region, which alarmed governments from [[unit:mx|Mexico]] to [[unit:br|Brazil]]." }
      ],
      takeaways: [
        "US strikes on suspected drug boats from September 2025 have killed at least 234 people.",
        "On 3 January 2026 US forces captured Maduro and his wife in Caracas; Venezuela says about 100 people died.",
        "Maduro pleaded not guilty in New York; his trial is set for June 2027."
      ],
      check: { q: "When is Nicolás Maduro's trial due to begin?",
        choices: ["It has already ended", "1 June 2027", "It has been cancelled"], answer: 1,
        explain: "Judge Hellerstein set the trial for 1 June 2027 because of the classified evidence involved." },
      sources: [
        { title: "Maduro arrives in New York to face charges after U.S. operation questioned by legal experts", publisher: "PBS News", url: "https://www.pbs.org/newshour/world/maduro-arrives-in-new-york-to-face-charges-after-u-s-operation-questioned-by-legal-experts", date: "2026-01" },
        { title: "Venezuela's Nicolás Maduro gets a June trial date", publisher: "CNN", url: "https://www.cnn.com/2026/07/22/politics/nicolas-maduro-trial-date", date: "2026-07-22" },
        { title: "Venezuela says 100 killed in U.S. military operation that captured Maduro", publisher: "CNBC", url: "https://www.cnbc.com/2026/01/07/us-venezuela-military-operation-maduro-injuries-casualties.html", date: "2026-01-07" },
        { title: "US Strike on Alleged Drug Boat Kills 4 as Caribbean Toll Tops 230", publisher: "HNGN", url: "https://www.hngn.com/articles/273302/20260920/us-strike-alleged-drug-boat-kills-4-caribbean-toll-tops-230.htm", date: "2026-09-20" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "ve-6", kind: "story", asOf: "2026-09-29",
      title: "Oil for a transition",
      dek: "Venezuela's oil now flows north, prisoners have been freed, and elections are promised. The opposition asks: a transition to what?",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ve/ve-6-hero.webp",
          alt: "Illustration of an oil tanker being loaded at a terminal jetty at dusk, with storage tanks on the shore and flares burning.",
          caption: "More than half a million barrels a day now go to the United States.",
          credit: "Illustration — not a photograph",
          prompt: "A large oil tanker moored at a long terminal jetty at dusk, loading arms connected, white storage tanks on the tropical shore, gas flares burning orange in the distance, calm sea, industrial and busy, no flags, no legible text or logos." },
        { type: "section", head: "What happened", md:
          "Within weeks of the raid, Rodríguez's government opened the oil sector to US companies on new terms. In April 2026 it signed agreements giving Chevron new drilling areas and larger stakes; Chevron says it will invest $7 billion and double its Venezuelan output by 2031. By August more than 500,000 barrels a day, about 40% of national production of 1.25 million, were going to the US, according to the US Energy Department. Washington eased [[sanctions]] to allow the trade and lifted personal sanctions on Rodríguez." },
        { type: "section", head: "Prisoners and amnesty", md:
          "The government began releasing political prisoners in January, and on 19 February the National Assembly passed a general amnesty covering political offences since 1999. The human rights group Foro Penal verified hundreds of releases, but said that in late February more than 570 political prisoners remained in detention, and that thousands of those freed still faced court restrictions. The opposition welcomed the releases but said the law also protects officials responsible for abuses." },
        { type: "facts", head: "Since January", rows: [
          ["Oil to the US", "Over 500,000 barrels a day (August 2026)"],
          ["National output", "About 1.25 million barrels a day"],
          ["Chevron", "$7 billion investment; aims to double output by 2031"],
          ["Amnesty law", "Passed 19 February 2026"],
          ["Elections", "Promised at the UN on 23 September; no date"]
        ] },
        { type: "section", head: "The election question", md:
          "At the UN General Assembly in September, Rodríguez promised elections as part of a transition to 'full democracy' and said talks with the opposition had begun, but set no date. Sources cited by Reuters said overhauls of the courts and the electoral council mean a vote is unlikely before late 2027. Machado's movement wants one on 24 July 2027 and says free elections need seven to nine months of preparation." },
        { type: "section", head: "The economy", md:
          "Venezuela's economy had already begun to stabilise before the raid, as the government quietly let the dollar circulate and loosened controls. US oil deals have added revenue, and shops are better stocked. But wages remain very low, public services such as electricity and hospitals are decrepit, and most of the oil money flows through the state." },
        { type: "compare", head: "Two views",
          left: { head: "Washington and the government", md:
            "Stability comes first. Oil revenue is rebuilding the economy, prisoners are going free, and elections will follow when institutions are ready." },
          right: { head: "The opposition and critics", md:
            "Washington traded democracy for oil. The same regime that stole the 2024 election is being legitimised, and every month without a date entrenches it." } },
        { type: "section", head: "Why it matters", md:
          "Venezuela's heavy crude suits American refineries on the Gulf Coast, and the deal has helped the US keep fuel prices down. For Venezuelans, it has brought the first real economic recovery in a decade, but also the sense that their future is being negotiated over their heads, in Washington and in oil company boardrooms." }
      ],
      takeaways: [
        "Venezuela now sends more than 500,000 barrels of oil a day to the US, and Chevron plans to double its output.",
        "An amnesty law freed hundreds of political prisoners, though hundreds remained detained.",
        "Rodríguez promised elections at the UN but set no date; the opposition wants a vote in July 2027."
      ],
      check: { q: "What date has Machado's movement proposed for elections?",
        choices: ["December 2026", "24 July 2027", "2030"], answer: 1,
        explain: "The opposition proposed 24 July 2027, arguing that free elections need seven to nine months of preparation." },
      sources: [
        { title: "Chevron pledges to double its Venezuelan oil production", publisher: "CNN", url: "https://www.cnn.com/2026/09/02/economy/chevron-venezuela-oil", date: "2026-09-02" },
        { title: "Venezuela's amnesty law: Caracas approves law to free hundreds of political prisoners", publisher: "CNN", url: "https://www.cnn.com/2026/02/19/americas/venezuela-political-prisoners-amnesty-law-latam-intl", date: "2026-02-19" },
        { title: "Venezuela's promised elections face long delays, sources say", publisher: "Reuters via The Spokesman-Review", url: "https://www.spokesman.com/stories/2026/sep/25/venezuelas-promised-elections-face-long-delays-sou/", date: "2026-09-25" },
        { title: "Situation of political prisoners in Venezuela, January–February 2026", publisher: "Foro Penal", url: "https://foropenal.com/wp-content/uploads/2026/03/Reporte-EneroFebrero_2026_260313-INGLES-1_compressed.pdf", date: "2026-03" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "ve-7", kind: "story", asOf: "2026-09-29",
      title: "The exodus",
      dek: "Nearly 8 million Venezuelans have left since 2014. Their fate, and whether they return, is shaping politics across the Americas.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ve/ve-7-hero.webp",
          alt: "Illustration of people walking with suitcases and backpacks across a long bridge over a river at dawn, seen from behind.",
          caption: "Millions crossed into Colombia on foot at the height of the crisis.",
          credit: "Illustration — not a photograph",
          prompt: "A long concrete bridge over a brown river at dawn, a line of people seen from behind walking with suitcases, backpacks and children, soft mist, green hills beyond, hopeful and weary, no faces, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "From 2014, as the economy collapsed, Venezuelans began leaving in huge numbers: first professionals and the middle class, then the poor, many on foot. By 2025 the UN counted nearly 8 million Venezuelan refugees and migrants, about a quarter of the population, most of them in Latin America. Colombia took about 2.8 million, followed by Peru, Brazil, Chile and Ecuador; hundreds of thousands reached the United States." },
        { type: "section", head: "The politics of migration", md:
          "The exodus reshaped the region. Colombia granted Venezuelans ten-year protected status in 2021, one of the most generous migration policies anywhere. Elsewhere, including Chile and Peru, anti-migrant sentiment grew. In the US, Venezuelans became a political issue: the Trump administration ended temporary protected status for hundreds of thousands in 2025, invoked a wartime law to deport alleged members of the Tren de Aragua gang to a prison in El Salvador, and cited migration and crime among its reasons for pressure on Maduro." },
        { type: "facts", head: "The exodus in numbers", rows: [
          ["Venezuelans abroad", "Nearly 8 million (UN estimate)"],
          ["In Colombia", "About 2.8 million"],
          ["Share of the population", "About a quarter"],
          ["Peak years", "2017–2019"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Hyperinflation wiped out wages; shortages of food and medicine left hospitals empty; crime and repression made daily life dangerous. Oil revenue, which had paid for almost everything, collapsed. For many families, sending one member abroad to wire money home became the only way to survive, and whole neighbourhoods emptied of young people." },
        { type: "section", head: "Changing US policy", md:
          "The capture of Maduro changed the calculus for Venezuelans in the US. The administration argues that, with Maduro gone, many can safely return home, and deportation flights to Caracas have continued. Venezuelan groups in Florida, a key political constituency, cheered the raid but have pressed for elections and for protection for those who fear persecution by the officials still in power." },
        { type: "compare", head: "Will they come back?",
          left: { head: "Optimists", md:
            "An oil-led recovery and a political opening could bring back doctors, engineers and entrepreneurs, as happened in parts of Eastern Europe after 1989." },
          right: { head: "Sceptics", md:
            "Most migrants have built new lives, children are in school abroad, and few will return while the same government rules and the economy is fragile." } },
        { type: "section", head: "Why it matters", md:
          "The diaspora is also a political force. Most emigrants oppose the ruling party, but very few can vote from abroad because of registration hurdles. Whether they are allowed to vote in any future election is one of the opposition's key demands. Emigrants also send home remittances that keep many families afloat, and their skills, as doctors, engineers and teachers, are exactly what a recovering Venezuela would need." },
        { type: "section", head: "What's next", md:
          "Watch for return flows as the economy recovers, for changes to rules on voting abroad, and for how the US treats Venezuelans already in the country now that relations with Caracas have changed." }
      ],
      takeaways: [
        "Nearly 8 million Venezuelans, about a quarter of the population, have left since 2014.",
        "Colombia hosts about 2.8 million; the exodus has reshaped politics across Latin America and the US.",
        "Whether emigrants can vote, and whether they return, will shape any transition."
      ],
      check: { q: "Which country hosts the most Venezuelan migrants?",
        choices: ["The United States", "Colombia", "Spain"], answer: 1,
        explain: "Colombia hosts about 2.8 million Venezuelans, far more than any other country." },
      sources: [
        { title: "Venezuela situation", publisher: "UNHCR", url: "https://www.unhcr.org/emergencies/venezuela-situation", date: "2025" },
        { title: "Refugees and Migrants from Venezuela", publisher: "R4V Inter-Agency Coordination Platform", url: "https://www.r4v.info/en/refugeeandmigrants", date: "2025" },
        { title: "2026 political prisoner release in Venezuela", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_political_prisoner_release_in_Venezuela", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "ve-12", kind: "spotlight", asOf: "2026-09-29",
      title: "Essequibo",
      dek: "Venezuela claims two-thirds of neighbouring Guyana, a territory now at the heart of one of the world's fastest-growing oil industries. The World Court is expected to rule soon.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ve/ve-12-hero.webp",
          alt: "Illustration of a wide brown river winding through dense rainforest in Guyana, with a distant offshore oil vessel on the Atlantic horizon.",
          caption: "The Essequibo region is mostly rainforest; its offshore waters hold vast oil reserves.",
          credit: "Illustration — not a photograph",
          prompt: "A wide brown river winding through dense green tropical rainforest seen from above, flowing toward the Atlantic coast, a distant offshore oil production vessel on the sea horizon, humid misty light, vast and contested landscape, no people, no flags, no legible text." },
        { type: "facts", head: "The dispute", rows: [
          ["Area", "About 160,000 km², two-thirds of Guyana"],
          ["Border set by", "An 1899 arbitral award"],
          ["Venezuela's position", "The award is void; the 1966 Geneva Agreement requires a negotiated settlement"],
          ["World Court", "Case filed by Guyana in 2018; hearings on the merits held in May 2026"],
          ["Oil", "ExxonMobil-led discoveries off Guyana since 2015"]
        ] },
        { type: "section", head: "A colonial border", md:
          "Spain and the Netherlands, then Britain after it took over British Guiana in 1814, never agreed where the frontier lay. In 1899 an international arbitration tribunal in Paris gave most of the disputed land to Britain. Venezuela accepted the line for decades, but in 1949 a memo by a US lawyer involved in the case, published after his death, alleged a political deal behind the award. Venezuela declared it null in 1962. In the 1966 Geneva Agreement, signed just before Guyana's independence, the parties agreed to seek a practical settlement." },
        { type: "section", head: "Oil changes everything", md:
          "For decades the claim was a matter of maps and school lessons in Venezuela, which shows the region as the 'Zone in Reclamation'. Then in 2015 ExxonMobil found oil off the Guyanese coast, in waters Venezuela also claims. Guyana, with fewer than a million people, has become one of the world's fastest-growing economies and a significant oil producer. In 2018 it asked the International Court of Justice (ICJ) to confirm the 1899 border; the court ruled in 2020 and 2023 that it had jurisdiction." },
        { type: "section", head: "Maduro's escalation", md:
          "In December 2023 Maduro held a referendum in which the government said Venezuelans overwhelmingly backed creating a Venezuelan state of 'Guayana Esequiba'; the ICJ had ordered Venezuela not to change the status quo. Troops massed near the border, Brazil reinforced its own frontier, and Britain sent a warship to Guyana. In May 2025 Venezuela even held elections for a 'governor' of the territory it does not control. Guyana answered with appeals to the UN and closer defence ties with the United States." },
        { type: "section", head: "After Maduro", md:
          "The US raid that removed Maduro has not ended the claim. In May 2026 the acting president, Delcy Rodríguez, travelled to The Hague to argue Venezuela's case at the final hearings, while insisting that Venezuela never consented to the court's jurisdiction and would not accept a ruling against it. Guyana expects a judgment between late 2026 and early 2027. With Washington now deeply involved in Venezuela's oil ([[lesson:ve-6]]), the United States is in the unusual position of partner to both sides." },
        { type: "compare", head: "Two positions",
          left: { head: "Venezuela", md:
            "The 1899 award was a fraud imposed by a colonial power; only negotiation under the 1966 Geneva Agreement can settle the border." },
          right: { head: "Guyana", md:
            "The 1899 award is a valid, final settlement accepted for over sixty years; the ICJ is the proper forum." } },
        { type: "section", head: "Why it matters", md:
          "Essequibo is one of the few issues that unites Venezuelans across the political divide: the opposition also rejects the 1899 award. The ruling will test whether any Venezuelan government accepts international law over a cause of national pride, and whether oil investment in Guyana, one of the region's great new sources of supply, stays safe. For Rodríguez, the claim is a way to show nationalist credentials while working with Washington ([[lesson:ve-4]])." }
      ],
      takeaways: [
        "Venezuela claims the Essequibo region, two-thirds of Guyana, rejecting an 1899 arbitral award.",
        "Oil discoveries off Guyana since 2015 raised the stakes; Maduro escalated with a 2023 referendum.",
        "The ICJ heard the case in May 2026; Venezuela, even under Rodríguez, says it will not accept a ruling against it."
      ],
      check: { q: "Which country administers the Essequibo region that Venezuela claims?",
        choices: ["Colombia", "Guyana", "Brazil"], answer: 1,
        explain: "Essequibo makes up about two-thirds of Guyana; Venezuela says the 1899 award giving it to British Guiana is void." },
      sources: [
        { title: "ICJ opens oral hearings as Guyana asks court to affirm century-old boundary with Venezuela", publisher: "JURIST", url: "https://www.jurist.org/news/2026/05/icj-opens-oral-hearings-as-guyana-asks-court-to-affirm-century-old-boundary-with-venezuela/", date: "2026-05" },
        { title: "Delcy Rodríguez defends Essequibo claim at The Hague", publisher: "MercoPress", url: "https://en.mercopress.com/2026/05/11/delcy-rodriguez-defends-essequibo-claim-at-the-hague-under-temporary-eu-sanctions-waiver", date: "2026-05-11" },
        { title: "ICJ 2026 Update Brief: Guyana v. Venezuela", publisher: "IMUNA", url: "https://imuna.org/blog/icj-2026-update-brief-guyana-v-venezuela/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "ve-8", kind: "now", asOf: "2026-09-29",
      title: "Where things stand",
      dek: "A regime without its leader, an economy reviving on American oil deals, and democracy postponed.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ve/ve-8-hero.webp",
          alt: "Illustration of a hillside barrio of brightly painted brick houses stacked above a modern city, at dusk, with lights coming on.",
          caption: "Caracas: recovery has begun, but most Venezuelans are still poor.",
          credit: "Illustration — not a photograph",
          prompt: "A steep hillside covered in stacked, brightly painted brick houses above a modern city of towers, at dusk, lights coming on in windows, a green mountain behind, warm and bittersweet, no people close up, no flags, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Government:** Delcy Rodríguez, acting president, cooperating with Washington.\n" +
          "- **Maduro:** in US custody; trial set for 1 June 2027.\n" +
          "- **Oil:** about 1.25 million barrels a day, over 40% of it to the US.\n" +
          "- **Opposition:** Machado plans to return and run; wants elections in July 2027.\n" +
          "- **Prisoners:** hundreds freed; many remain." },
        { type: "section", head: "The Essequibo claim", md:
          "Venezuela has long claimed the Essequibo region, about two-thirds of neighbouring Guyana, where ExxonMobil has found huge offshore oil fields. Maduro held a referendum on the claim in 2023 and later named a 'governor' for the region. The International Court of Justice is hearing the case; most countries recognise Guyana's borders, which rest on an 1899 arbitration Venezuela says was fraudulent. Whether Rodríguez's government, now close to Washington and to US oil firms, will soften the claim is an open question." },
        { type: "section", head: "Russia, China, Cuba and Iran", md:
          "Maduro relied on Russia for weapons, China for loans, Iran for fuel and Cuba for security. The raid, and the killing of Cuban guards, broke that axis in a night. Cuba, which depended on Venezuelan oil, is in deep crisis. [[unit:cn|China]], owed billions, wants its loans repaid; [[unit:ru|Russia]] condemned the raid but could do little." },
        { type: "section", head: "What the opposition needs", md:
          "For a credible vote, the opposition demands a new electoral council, the restoration of barred candidates and parties, the release of all political prisoners, independent observers, updated voter rolls including emigrants, and guarantees that the armed forces will respect the result. Each demand threatens someone in the ruling party, which is why talks have been slow." },
        { type: "section", head: "The economy's prospects", md:
          "Oil output could rise substantially with foreign investment, but decades of neglect mean it will take years to approach the three million barrels a day of the late 1990s. Venezuela also carries over $150 billion in defaulted debts and legal claims, which will have to be restructured before it can borrow again." },
        { type: "section", head: "Justice for the past", md:
          "The International Criminal Court's investigation into crimes against humanity continues, and the UN's fact-finding mission has named senior officials. Victims' groups fear that the amnesty and the deals with Washington will leave those responsible for torture and killings unpunished." },
        { type: "section", head: "Three scenarios", md:
          "- **Managed transition.** Talks produce a credible election in 2027, and the opposition wins.\n" +
          "- **Friendly autocracy.** Elections slip, oil flows, and Washington accepts a Chavista government that cooperates.\n" +
          "- **Breakdown.** Hardliners resist, or the economy stalls, and violence or a new crackdown follows." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **17 November 2026:** next hearing in Maduro's case\n" +
          "- **Before end of 2026:** Machado's planned return\n" +
          "- **Ongoing:** talks on an election date\n" +
          "- **1 June 2027:** Maduro's trial begins" },
        { type: "section", head: "Connections", md:
          "Venezuela's story runs through [[unit:us]] (the raid and the oil), [[unit:br]] and [[unit:mx]] (which condemned the intervention), [[unit:cn]] and [[unit:ru]] (Maduro's former patrons), [[unit:ir]] (another US adversary that lost an ally) and [[unit:sa]] (a fellow OPEC oil power)." }
      ],
      takeaways: [
        "Venezuela's ruling movement survived Maduro's capture and now cooperates with Washington.",
        "The opposition wants elections in July 2027; the government has set no date.",
        "The raid broke Maduro's alliances with Russia, China, Iran and Cuba."
      ],
      check: { q: "What is the Essequibo?",
        choices: ["A Venezuelan oil field", "A region of Guyana that Venezuela claims", "A Caracas neighbourhood"], answer: 1,
        explain: "Venezuela claims about two-thirds of Guyana's territory; the case is before the International Court of Justice." },
      sources: [
        { title: "Venezuela's Rodriguez Promises Elections in Transition to 'Full Democracy'", publisher: "Reuters via US News", url: "https://www.usnews.com/news/world/articles/2026-09-23/venezuelas-rodriguez-promises-elections", date: "2026-09-23" },
        { title: "Guyana v. Venezuela", publisher: "International Court of Justice", url: "https://www.icj-cij.org/case/171", date: "n.d." },
        { title: "Trial Date Set for Nicolás Maduro in the United States", publisher: "CiberCuba", url: "https://www.cubaheadlines.com/articles/335873", date: "2026-07" }
      ]
    }

  ]
});
