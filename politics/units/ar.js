/* ============================================================
   Unit 27 — Argentina 🇦🇷
   Research note and sources: tools/research/ar.md
   Current as of 29 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("ar", {
  id: "ar",
  asOf: "2026-09-29",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ar-1", kind: "snapshot", asOf: "2026-09-29",
      title: "Argentina in brief",
      dek: "A libertarian president with a chainsaw tamed inflation and won the midterms. Now poverty is rising again, and so is discontent.",
      blocks: [
        { type: "map", src: "maps/ar.svg",
          alt: "Locator map of southern South America with Argentina highlighted, stretching from the Bolivian border to Tierra del Fuego, with Chile to the west and the Falkland Islands hatched in the South Atlantic, and a small globe showing its place in the world.",
          caption: "Argentina runs 3,700 kilometres from the tropics to Tierra del Fuego. The Falkland Islands (Malvinas), hatched, are British-administered and claimed by Argentina.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Buenos Aires"],
          ["People", "About 46 million"],
          ["System", "Federal presidential republic"],
          ["President", "Javier Milei (La Libertad Avanza), since December 2023"],
          ["Inflation", "33.5% over the year to August 2026, down from over 200% in 2023"],
          ["Poverty", "32.3% of people in the first half of 2026"],
          ["Next election", "October 2027"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Argentina is South America's third-largest economy and a global food exporter, of soybeans, beef, wheat and wine. It holds some of the world's biggest reserves of lithium and shale oil and gas, in the Vaca Muerta formation, which are turning it into an energy exporter.\n\n" +
          "It is also the world's most famous economic cautionary tale: once among the richest countries on earth, it has defaulted on its debts nine times and suffered repeated bouts of hyperinflation. That is why its current experiment matters. Javier Milei, a self-described 'anarcho-capitalist', is attempting the most radical free-market shock in a large democracy in decades, and he has become a global icon of the populist right and a close ally of Donald Trump." },
        { type: "section", head: "Who holds power", md:
          "Milei, an economist and former TV pundit, won the 2023 election with 56% in the runoff against the Peronist economy minister, Sergio Massa. His party, La Libertad Avanza (LLA), began with few seats, but it won the October 2025 midterms with almost 41% of the vote, giving him enough seats to block the opposition and pass reforms. His sister Karina runs his political operation, and Luis Caputo runs the economy." },
        { type: "section", head: "The mood in 2026", md:
          "The mood has turned. Monthly inflation, once 25%, is down to under 2%, and a labour reform passed in February. But poverty rose to 32.3% in the first half of 2026, from 28.2% six months earlier, unemployment reached 7.9%, and soup kitchens are overflowing. In a September poll by Zuban Córdoba, 62% of Argentines viewed Milei negatively, his worst rating yet, though no opposition leader is more popular." },
        { type: "section", head: "What Argentina wants", md:
          "Milei wants to shrink the state, deregulate the economy, open up to trade, rebuild the central bank's reserves and eventually replace the peso with the dollar. Abroad he has aligned with the [[unit:us|United States]] and [[unit:il|Israel]], scorns the UN, and in September 2026 launched a US-backed transport corridor linking the Andes to the Atlantic." },
        { type: "section", head: "Land and people", md:
          "More than a third of Argentines live in Greater Buenos Aires, and the vast Pampas around it produce most of the country's grain and beef. The north-west is poorer and more Indigenous; Patagonia in the south is thinly populated but rich in oil, gas and wind. Most Argentines descend from European immigrants, above all Italians and Spaniards, and the country has a large middle class, strong public universities and a passion for football and politics in roughly equal measure." },
        { type: "callout", tone: "why", md:
          "Argentina is a real-time test of whether radical free-market shock therapy can cure chronic inflation in a democracy, and whether voters will stick with it through the pain." }
      ],
      takeaways: [
        "Argentina is a food, energy and lithium power with a long history of defaults and hyperinflation.",
        "Javier Milei cut monthly inflation from 25% to under 2% and won the 2025 midterms.",
        "In 2026 poverty and unemployment are rising, and his approval has fallen to its lowest point."
      ],
      check: { q: "What was Argentina's poverty rate in the first half of 2026?",
        choices: ["About 12%", "32.3%", "52.9%"], answer: 1,
        explain: "Poverty rose to 32.3% in the first half of 2026, up from 28.2% in the second half of 2025; it had peaked at 52.9% in early 2024." },
      sources: [
        { title: "Argentina's poverty rises to 32 percent under Milei with more pain forecast", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/9/25/argentinas-poverty-rises-to-32-percent-under-milei-with-more-pain-forecast", date: "2026-09-25" },
        { title: "Inflation slows again as August rate hits 1.7 percent", publisher: "Buenos Aires Times", url: "https://batimes.com.ar/news/economy/inflation-slows-again-as-august-rate-hits-17-percent.phtml", date: "2026-09" },
        { title: "Milei Poll: Six in Ten Argentines Now View Him Negatively", publisher: "The Rio Times", url: "https://www.riotimesonline.com/argentina-milei-1000-days-polls-approval-2026", date: "2026-09" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ar-2", kind: "power", asOf: "2026-09-29",
      title: "Presidents, provinces and Peronism",
      dek: "A powerful presidency, a Congress renewed every two years, and governors who hold the balance.",
      blocks: [
        { type: "diagram", src: "img/ar/ar-2-power.svg",
          alt: "Diagram of power in Argentina. Voting is compulsory, and the president is elected for four years with one consecutive re-election; Javier Milei holds the office and governs partly by decree. Congress has 257 deputies and 72 senators, half and a third renewed every two years; Milei's party holds over a third of the lower house after the 2025 midterms, enough to sustain vetoes. Twenty-three provinces and the city of Buenos Aires have powerful governors whose votes in Congress are traded for funds. The Supreme Court, with five seats, has vacancies.",
          caption: "Presidents govern by decree and by bargaining with governors.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The president", md:
          "Argentina's president is elected for four years and may serve two consecutive terms. To win outright in the first round, a candidate needs 45% of the vote, or 40% with a ten-point lead; otherwise the top two meet in a runoff. Voting is compulsory. Presidents can issue 'decrees of necessity and urgency', which have the force of law unless both houses of Congress reject them, and Milei has used them heavily, starting with a mega-decree in December 2023 that repealed or changed hundreds of rules." },
        { type: "section", head: "Congress", md:
          "The Chamber of Deputies has 257 members, half elected every two years by proportional representation in each province; the Senate has 72 members, three per province, a third elected every two years. Milei began his term with fewer than 40 deputies and had to rely on the centre-right PRO and provincial parties. After the 2025 midterms, his bloc and allies hold more than a third of both chambers, enough to sustain a presidential [[veto]], and with deals, often a working majority." },
        { type: "section", head: "Governors and the provinces", md:
          "Argentina is a federation of 23 provinces and the autonomous city of Buenos Aires. Most provinces depend on money shared out by the national government, so governors trade their senators' and deputies' votes for funds and public works. Buenos Aires province, home to almost 40% of the population, is a Peronist stronghold governed by Axel Kicillof, Milei's likeliest rival." },
        { type: "section", head: "Peronism", md:
          "The dominant force in Argentine politics since the 1940s is [[Peronism]], the movement founded by Juan Perón. It is less an ideology than a political family, ranging from the left-wing Kirchnerists to conservative provincial bosses, united by the trade unions, a belief in a strong state and loyalty to its founders' legacy. It has won most presidential elections since democracy returned in 1983. Milei's movement defines itself against it, calling it the 'caste'." },
        { type: "section", head: "The courts", md:
          "The Supreme Court has five seats but has operated with vacancies, and Milei's attempt to fill two of them by decree in 2025 was rejected by the Senate. In June 2025 the court upheld the corruption conviction of former president Cristina Fernández de Kirchner, who is now under house arrest and banned for life from office." },
        { type: "section", head: "A calendar of elections", md:
          "Provinces can set their own election dates, so Argentines vote often: in 2025 many provinces held local elections months apart from the national midterms. That gives governors control over their own contests, and it turns provincial results, such as Buenos Aires's in September 2025, into national tests." },
        { type: "compare", head: "Two views of Milei's methods",
          left: { head: "Supporters", md:
            "Decades of emergency required emergency powers. Decrees and hard bargaining were the only way to break a system built to protect the state and its insiders." },
          right: { head: "Critics", md:
            "Governing by decree sidelines Congress, and vetoes of spending on pensions, universities and disability care have hurt the most vulnerable." } }
      ],
      takeaways: [
        "Argentina's president can govern by decree and needs 45% (or 40% with a ten-point lead) to win without a runoff.",
        "Congress is renewed by halves and thirds every two years; Milei's bloc now holds over a third of both chambers.",
        "Peronism has dominated Argentine politics since the 1940s; Milei defines himself against it."
      ],
      check: { q: "What share of the vote does a candidate need to win Argentina's presidency in the first round?",
        choices: ["More than 50%", "45%, or 40% with a ten-point lead", "Any plurality"], answer: 1,
        explain: "The constitution sets a lower bar than a majority: 45%, or 40% with a lead of at least ten points." },
      sources: [
        { title: "Argentina", publisher: "Britannica", url: "https://www.britannica.com/place/Argentina", date: "n.d." },
        { title: "Argentina 2025 midterms: LLA gets landslide win, reaches key number of Congress seats", publisher: "Buenos Aires Herald", url: "https://buenosairesherald.com/politics/argentina-2025-midterms-lla-gets-landslide-win-reaches-key-number-of-congress-seats", date: "2025-10-27" },
        { title: "Argentina top court draws curtain on Cristina Kirchner's political era", publisher: "CNN", url: "https://edition.cnn.com/2025/06/10/americas/argentina-court-upholds-kirchner-sentence-intl-latam", date: "2025-06-10" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "ar-9", kind: "founding", asOf: "2026-09-29",
      title: "May 1810 to the Constitution of 1853",
      dek: "Argentina broke from Spain in the 1810s, then spent four decades fighting over whether Buenos Aires or the provinces should rule. The 1853 constitution settled the country's shape.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ar/ar-9-hero.webp",
          alt: "Illustration of a whitewashed colonial town hall with arches and a small tower facing a square, with a crowd in early-19th-century clothing and umbrellas seen from behind.",
          caption: "Crowds gathered outside Buenos Aires's town hall, the Cabildo, in May 1810.",
          credit: "AI illustration — not a photograph",
          prompt: "A whitewashed Spanish colonial town hall with a long row of arches and a small bell tower facing a plaza, a crowd in early-19th-century clothing holding umbrellas in light rain seen from behind, grey May autumn sky, historical and expectant mood, no faces, no flags, no legible text." },
        { type: "timeline", head: "From viceroyalty to republic", items: [
          ["1776", "Viceroyalty of the Río de la Plata created"],
          ["1806–07", "Local militias repel British invasions"],
          ["25 May 1810", "May Revolution: a local junta takes power"],
          ["9 Jul 1816", "Independence declared at Tucumán"],
          ["1817–22", "San Martín's campaigns in Chile and Peru"],
          ["1829–52", "Rosas rules Buenos Aires"],
          ["1853", "National constitution adopted"],
          ["1880", "Buenos Aires becomes the federal capital"]
        ] },
        { type: "section", head: "The May Revolution", md:
          "Buenos Aires was the capital of Spain's Viceroyalty of the Río de la Plata, covering today's Argentina, Uruguay, Paraguay and Bolivia. In 1806 and 1807 its local militias defeated two British invasions without Spanish help, a boost to local pride. When Napoleon captured the Spanish king in 1808, the empire's authority collapsed. On 25 May 1810 an open town meeting in Buenos Aires deposed the viceroy and set up a junta to govern, still nominally in the king's name. 25 May is now a national holiday, and the Casa Rosada faces the Plaza de Mayo, named after it." },
        { type: "section", head: "Independence", md:
          "Paraguay, Uruguay and Upper Peru (Bolivia) soon went their own ways. The remaining provinces sent delegates to Tucumán, who declared the independence of the United Provinces of the Río de la Plata on 9 July 1816. General José de San Martín, Argentina's national hero, then led an army across the Andes in 1817 to free Chile and went on to Peru. He refused to take sides in the civil wars at home and died in exile in France." },
        { type: "section", head: "Unitarians and federalists", md:
          "Independence did not bring unity. Unitarians, mostly in Buenos Aires, wanted a strong central government run from the port city, which controlled customs revenue from trade. Federalists, led by provincial strongmen called *caudillos*, wanted provincial autonomy. Decades of civil war followed. From 1829 to 1852 Juan Manuel de Rosas, a rancher and federalist, ruled Buenos Aires province as a dictator, using a political police, the Mazorca, against opponents, while controlling the country's foreign affairs and trade." },
        { type: "section", head: "The constitution", md:
          "In 1852 the governor of Entre Ríos, Justo José de Urquiza, defeated Rosas. A convention adopted a federal constitution in 1853, inspired by the United States and by the thinker Juan Bautista Alberdi, whose motto was 'to govern is to populate': it guaranteed rights to foreigners and encouraged immigration. Buenos Aires refused to join until 1861, and only in 1880 was the city made the federal capital. That constitution, amended in 1994, is still in force." },
        { type: "compare", head: "Two traditions from the founding",
          left: { head: "The liberal tradition", md:
            "Argentina was built by the liberal constitution of 1853, open trade and European immigration, which made it rich by 1900." },
          right: { head: "The nationalist tradition", md:
            "The caudillos and Rosas defended the interior and national sovereignty against Buenos Aires's elites and foreign powers." } },
        { type: "section", head: "Why it still matters", md:
          "The rivalry between Buenos Aires and the provinces never ended. The capital and its province hold a huge share of the people and wealth, while governors in the interior bargain their senators' votes for federal money, a dynamic Milei has to manage for every law he passes (briefing 2). Milei himself cites Alberdi as his hero, while Peronists and nationalists tend to honour the caudillos and Rosas as defenders of sovereignty." }
      ],
      takeaways: [
        "The May Revolution of 25 May 1810 began self-government in Buenos Aires; independence was declared on 9 July 1816.",
        "Decades of civil war pitted Buenos Aires's centralists against provincial federalists and caudillos.",
        "The 1853 federal constitution, still in force, encouraged immigration and set the country's shape."
      ],
      check: { q: "What happened on 9 July 1816?",
        choices: ["The May Revolution", "The declaration of independence at Tucumán", "The adoption of the constitution"], answer: 1,
        explain: "Delegates meeting at Tucumán declared the independence of the United Provinces of the Río de la Plata." },
      sources: [
        { title: "May Revolution", publisher: "Britannica", url: "https://www.britannica.com/topic/May-Revolution", date: "n.d." },
        { title: "How did Argentina gain independence from Spain?", publisher: "Britannica", url: "https://www.britannica.com/question/How-did-Argentina-gain-independence-from-Spain", date: "n.d." },
        { title: "History of Argentina: National consolidation, 1852–80", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Argentina/National-consolidation-1852-80", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ar-3", kind: "history", asOf: "2026-09-29",
      title: "From riches to ruin, again and again",
      dek: "Perón, the generals, the Falklands, hyperinflation and default: the history behind Milei's chainsaw.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ar/ar-3-hero.webp",
          alt: "Illustration of a grand pink presidential palace facing a wide plaza with palm trees and a white obelisk-like pyramid monument, in late afternoon light.",
          caption: "The Casa Rosada on the Plaza de Mayo, where mothers of the disappeared marched every week under the dictatorship.",
          credit: "AI illustration — not a photograph",
          prompt: "A grand pink neoclassical palace facing a wide plaza with tall palm trees and a small white stone pyramid monument, late afternoon golden light, pigeons, white headscarf shapes painted in a circle on the paving stones, historic and poignant, no people, no flags, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1946", "Juan Perón elected president"],
          ["1976", "Military coup; the 'Dirty War' begins"],
          ["1982", "Falklands War with Britain"],
          ["1983", "Democracy restored"],
          ["2001", "Economic collapse and record default"],
          ["2003", "Néstor Kirchner, then Cristina, rule for 12 years"],
          ["2023", "Javier Milei elected"]
        ] },
        { type: "section", head: "1. A rich country", md:
          "Around 1900 Argentina, flooded with European immigrants and exporting grain and beef to Britain, was one of the ten richest countries in the world per person. Buenos Aires was built to rival Paris. The Great Depression ended that golden age, and in 1930 the army staged the first of six coups that would punctuate the next half-century." },
        { type: "section", head: "2. Perón and Evita", md:
          "Colonel Juan Perón, elected in 1946, built a movement on the trade unions and the urban poor, expanding workers' rights, nationalising industries and spending freely. His wife Eva, 'Evita', became a symbol of the poor until her death in 1952. Overthrown in 1955 and exiled, Perón returned to power in 1973 and died in 1974. His movement, Peronism, has shaped every government since." },
        { type: "section", head: "3. The dictatorship and the Falklands", md:
          "Amid political violence, the military seized power in 1976 and waged a 'Dirty War' against leftists and anyone suspected of sympathy. A truth commission documented about 9,000 disappearances; human rights groups put the number of 'disappeared' at 30,000. In 1982 the junta invaded the British-held Falkland Islands, which Argentina calls the Malvinas. Britain retook them after a ten-week war that killed 649 Argentines and 255 Britons, and the humiliated junta fell in 1983." },
        { type: "section", head: "4. Boom, bust and default", md:
          "Democracy returned, but the economy did not stabilise. Hyperinflation hit 3,000% in 1989. In the 1990s President Carlos Menem pegged the peso to the dollar, which worked until it didn't: in 2001 the peg collapsed, banks froze deposits, riots killed dozens, the country had five presidents in two weeks and defaulted on about $100 billion of debt, then the largest sovereign default in history." },
        { type: "section", head: "5. The Kirchners and the road to Milei", md:
          "Néstor Kirchner (2003–07) and his wife Cristina Fernández de Kirchner (2007–15) rode a commodity boom, expanded welfare, nationalised pensions and the oil company YPF, and fought with creditors and the press. The centre-right Mauricio Macri (2015–19) took a record $57 billion IMF loan, of which about $44 billion was paid out, and lost to the Peronists. By 2023 inflation exceeded 200% and 40% of Argentines were poor. Voters turned to the outsider with the chainsaw." },
        { type: "section", head: "6. The outsider", md:
          "Milei, elected to Congress only in 2021, came from nowhere. He topped the August 2023 primaries, promising to 'dynamite' the central bank, dollarise the economy and cut the state with a chainsaw, which he waved at rallies. Young men and voters exhausted by inflation flocked to him, and he beat Massa by 56% to 44% in the November runoff, the largest margin since 1983." }
      ],
      takeaways: [
        "Argentina was one of the world's richest countries around 1900 but has been in cyclical crisis for decades.",
        "The 1976–83 dictatorship 'disappeared' thousands of people and lost the 1982 Falklands War to Britain.",
        "The 2001 collapse and default, and inflation over 200% in 2023, set the stage for Milei."
      ],
      check: { q: "What happened in Argentina in 2001?",
        choices: ["It won the World Cup", "The dollar peg collapsed, the country defaulted and had five presidents in two weeks", "Perón returned from exile"], answer: 1,
        explain: "The collapse of convertibility led to riots, a frozen banking system, rapid changes of president and a huge default." },
      sources: [
        { title: "Argentina: History", publisher: "Britannica", url: "https://www.britannica.com/place/Argentina/History", date: "n.d." },
        { title: "Falkland Islands War", publisher: "Britannica", url: "https://www.britannica.com/event/Falkland-Islands-War", date: "n.d." },
        { title: "Argentina profile: Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-latin-america-18712378", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "ar-10", kind: "past", asOf: "2026-09-29",
      title: "Perón and Evita",
      dek: "A colonel and an actress built a movement of the working class that has dominated Argentine politics for eighty years. To understand Argentina, you have to understand Peronism.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ar/ar-10-hero.webp",
          alt: "Illustration of a huge crowd of workers in 1940s clothing seen from behind filling the Plaza de Mayo, facing the pink presidential palace at night.",
          caption: "On 17 October 1945 workers filled the Plaza de Mayo to demand Perón's release.",
          credit: "AI illustration — not a photograph",
          prompt: "A huge crowd of workers in 1940s shirtsleeves and caps seen from behind filling a grand city square at night, facing a pink neoclassical presidential palace with a lit balcony, some people with feet in a fountain, warm lamplight, euphoric historical mood, no faces, no flags, no legible text." },
        { type: "timeline", head: "Peronism's first era", items: [
          ["1943", "Military coup; Perón becomes labour secretary"],
          ["17 Oct 1945", "Mass rally frees Perón: 'Loyalty Day'"],
          ["1946", "Perón elected president"],
          ["1947", "Women win the vote"],
          ["26 Jul 1952", "Evita dies at 33"],
          ["1955", "Perón overthrown; exile"],
          ["1973", "Perón returns and is elected again"],
          ["1974", "Perón dies; his wife Isabel takes over"]
        ] },
        { type: "section", head: "The colonel", md:
          "Juan Domingo Perón was an army officer who took part in the 1943 military coup and made himself secretary of labour. He used the post to win over the trade unions, granting wage rises, paid holidays and pensions, and bringing millions of workers, many of them migrants from the provinces, into politics for the first time. Rivals in the army arrested him in October 1945. On 17 October huge crowds of workers marched into central Buenos Aires and forced his release, a day Peronists still celebrate as Loyalty Day." },
        { type: "section", head: "Evita", md:
          "Days later Perón married Eva Duarte, a radio and film actress from a poor provincial family. As first lady she ran a vast charitable foundation, championed the 'shirtless ones', the *descamisados*, and led the campaign that gave women the vote in 1947. Adored by the poor and loathed by the elite, she was nominated for vice-president in 1951 but withdrew, already ill with cancer. Her death in 1952, at 33, brought national mourning; her embalmed body later disappeared for 16 years." },
        { type: "section", head: "In power", md:
          "Elected in 1946 with 56% of the vote, Perón nationalised railways, telephones and foreign trade, built housing, hospitals and schools, and pursued a 'Third Position' between capitalism and communism. Workers' share of national income rose sharply. But he also muzzled the press, packed the Supreme Court, jailed opponents and built a personality cult. When the postwar boom ended, inflation rose and he clashed with the Church. In 1955 the military overthrew him and he went into exile, mostly in Franco's Spain." },
        { type: "section", head: "Exile and return", md:
          "For 18 years Peronism was banned, and Argentina lurched between weak civilian governments and military coups. Perón's movement split into left-wing guerrillas and right-wing unionists, all claiming his name. He returned in 1973 and was elected president with 62% of the vote, but died in July 1974. His third wife and vice-president, Isabel, presided over growing chaos and political violence until the military coup of 1976 (briefing 11)." },
        { type: "compare", head: "Two views of Perón",
          left: { head: "Peronists", md:
            "He gave workers dignity, rights and a voice, and Evita gave the poor someone who loved them; they built social justice." },
          right: { head: "Critics", md:
            "He was an authoritarian populist whose spending, protectionism and cult of personality started Argentina's long decline." } },
        { type: "section", head: "Why it still matters", md:
          "Peronism, officially the Justicialist Party, has won most free presidential elections since 1946. It has no fixed ideology: Carlos Menem privatised and deregulated in the 1990s, the Kirchners nationalised and spent. What unites it is loyalty to the unions, the poor and the Peronist symbols. Milei defines himself against it, calling it the cause of Argentina's decline, while Peronists lead the opposition to his reforms (briefings 4 and 7)." }
      ],
      takeaways: [
        "Juan Perón built a mass movement on the trade unions in the 1940s; Eva Perón became the idol of the poor.",
        "He was elected in 1946, overthrown in 1955 and returned to power in 1973.",
        "Peronism, left or right, has dominated Argentine politics ever since; Milei defines himself against it."
      ],
      check: { q: "What do Peronists celebrate on 17 October?",
        choices: ["Evita's birthday", "The 1945 mass rally that freed Perón", "Independence from Spain"], answer: 1,
        explain: "Workers' mass protest forced Perón's release on 17 October 1945, now 'Loyalty Day'." },
      sources: [
        { title: "Juan Perón", publisher: "Britannica", url: "https://www.britannica.com/biography/Juan-Peron", date: "n.d." },
        { title: "Eva Perón", publisher: "Britannica", url: "https://www.britannica.com/biography/Eva-Peron", date: "n.d." },
        { title: "Peronist", publisher: "Britannica", url: "https://www.britannica.com/topic/Peronist", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "ar-11", kind: "past", asOf: "2026-09-29",
      title: "The Dirty War and the Falklands",
      dek: "From 1976 to 1983 a military junta made thousands of people disappear, then lost a war with Britain over the Falklands. Argentina's trials of its generals became a model for the world.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ar/ar-11-hero.webp",
          alt: "Illustration of older women in white headscarves seen from behind walking in a circle around a monument in a large square.",
          caption: "The Mothers of the Plaza de Mayo have marched on Thursdays since 1977.",
          credit: "AI illustration — not a photograph",
          prompt: "A group of older women wearing white headscarves seen from behind walking slowly in a circle around a white obelisk-like monument in a large city square with palm trees, soft afternoon light, quiet dignity and grief, no faces, no legible text, no flags." },
        { type: "timeline", head: "Dictatorship and after", items: [
          ["24 Mar 1976", "Military coup against Isabel Perón"],
          ["1977", "Mothers of the Plaza de Mayo begin their marches"],
          ["2 Apr 1982", "Argentina invades the Falklands"],
          ["14 Jun 1982", "Argentine forces surrender"],
          ["1983", "Democracy returns; Alfonsín elected"],
          ["1984", "Truth commission report, Nunca Más"],
          ["1985", "Trial of the Juntas"],
          ["2003–05", "Amnesty laws annulled; trials resume"]
        ] },
        { type: "section", head: "The 'Process'", md:
          "By 1976 Argentina was in chaos: left-wing guerrillas and right-wing death squads were killing hundreds, and inflation was soaring. On 24 March the armed forces overthrew Isabel Perón and launched what they called the 'Process of National Reorganisation'. Their aim was to destroy 'subversion'. Security forces seized suspects, often at night, and took them to some 600 secret detention centres, such as the Navy Mechanics School (ESMA) in Buenos Aires, where they were tortured and most were killed." },
        { type: "section", head: "The disappeared", md:
          "Victims included guerrillas but also students, trade unionists, journalists, lawyers, priests and their families. Many were drugged and thrown alive from planes into the sea or the River Plate. About 500 babies born in captivity were given to military families; the Grandmothers of the Plaza de Mayo have since identified more than 130 of them through DNA. The 1984 Nunca Más report documented about 9,000 disappearances; human rights groups say 30,000, the figure used in commemorations." },
        { type: "section", head: "The Falklands War", md:
          "Facing economic collapse and protests, the junta led by General Leopoldo Galtieri invaded the British-held Falkland Islands, which Argentina calls the Malvinas and has claimed since Britain took control in 1833, on 2 April 1982. It expected Britain not to fight. Margaret Thatcher sent a task force, and after 74 days Argentine forces surrendered on 14 June. 649 Argentine and 255 British servicemen and three islanders died. Defeat destroyed the junta, and democracy returned in 1983 (see [[unit:gb|the UK]])." },
        { type: "section", head: "Justice", md:
          "President Raúl Alfonsín ordered the prosecution of the juntas. In the 1985 Trial of the Juntas, a civilian court sentenced former leaders including Jorge Videla to life imprisonment, a landmark in the world. Military pressure then led to amnesty laws and, in 1990, pardons by Menem. In 2003–05 Congress and the Supreme Court annulled the amnesties, and trials resumed: more than 1,000 people have since been convicted of crimes against humanity." },
        { type: "compare", head: "Two views of the 1970s",
          left: { head: "Human rights groups and most historians", md:
            "The state carried out a systematic plan of terror and extermination; 'never again' requires memory, truth and justice." },
          right: { head: "Military sympathisers and some on the right", md:
            "It was a war against terrorist guerrillas, whose victims are forgotten; the figure of 30,000 is inflated." } },
        { type: "section", head: "Why it still matters", md:
          "The dictatorship is still fought over. Milei questioned the 30,000 figure in his 2023 campaign, and his vice-president, Victoria Villarruel, long campaigned for the victims of guerrilla violence and visited Videla in prison. Every 24 March huge marches answer them. The Falklands claim remains in the constitution, and 2 April is a national holiday for the war's veterans, even as Milei seeks closer ties with Britain." }
      ],
      takeaways: [
        "The 1976–83 junta made thousands disappear: about 9,000 documented, 30,000 according to rights groups.",
        "Its 1982 invasion of the Falklands ended in defeat by Britain, bringing down the regime.",
        "Argentina tried its junta leaders in 1985 and, after amnesties were annulled, more than 1,000 others."
      ],
      check: { q: "What brought down Argentina's military junta in 1983?",
        choices: ["A US invasion", "Defeat in the 1982 Falklands War and economic collapse", "Perón's return"], answer: 1,
        explain: "Losing the war with Britain discredited the junta, which handed power to an elected government in 1983." },
      sources: [
        { title: "Falkland Islands War", publisher: "Britannica", url: "https://www.britannica.com/event/Falkland-Islands-War", date: "n.d." },
        { title: "Trial of the Juntas", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Trial_of_the_Juntas", date: "n.d." },
        { title: "On anniversary of dictatorship, Argentines push back against Milei's revisionist history", publisher: "Courthouse News", url: "https://www.courthousenews.com/on-anniversary-of-dictatorship-argentines-push-back-against-mileis-revisionist-history/", date: "2024" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "ar-4", kind: "players", asOf: "2026-09-29",
      title: "Milei, 'the boss' and the Peronists",
      dek: "A libertarian showman, the sister who runs his party, the minister who runs the economy, and a divided opposition.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ar/ar-4-hero.webp",
          alt: "Illustration of a red chainsaw resting on a wooden desk covered with stacks of papers and a desk lamp, in a dim office.",
          caption: "Milei campaigned with a chainsaw, a symbol of cutting the state.",
          credit: "AI illustration — not a photograph",
          prompt: "A bright red chainsaw resting on a large old wooden government desk piled with stacks of paper files and folders, a green banker's lamp casting warm light, a dim high-ceilinged office, dramatic and slightly satirical, no people, no legible text or logos." },
        { type: "people", head: "Five to know", items: [
          { name: "Javier Milei", role: "President, since December 2023",
            img: "img/ar/portrait-milei.webp", source: "Official portrait (Casa Rosada, CC BY) via Wikimedia Commons; confirm the licence.",
            md: "An economist and former rock singer who became famous for televised rants against the 'political caste'. Combative and unpredictable, he is a star of the global right and close to Trump and Elon Musk." },
          { name: "Karina Milei", role: "Secretary-general of the presidency",
            img: "img/ar/portrait-karina-milei.webp", source: "Official portrait (Casa Rosada, CC BY) via Wikimedia Commons; confirm the licence.",
            md: "The president's sister, whom he calls 'the boss'. Runs La Libertad Avanza and its candidate lists; named in a 2025 bribery scandal over disability-agency contracts, which she denies." },
          { name: "Luis Caputo", role: "Economy minister",
            img: "img/ar/portrait-caputo.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "A former Wall Street banker and finance minister under Macri; architect of the spending cuts, the IMF deal and the US currency swap." },
          { name: "Axel Kicillof", role: "Governor of Buenos Aires province",
            img: "img/ar/portrait-kicillof.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "A left-wing Peronist economist who won a crushing provincial victory in September 2025; the opposition's likeliest candidate for 2027." },
          { name: "Cristina Fernández de Kirchner", role: "President 2007–15; under house arrest",
            img: "img/ar/portrait-cfk.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "Still the most powerful figure in Peronism, serving a six-year corruption sentence at home and banned from office, which she calls persecution." }
        ] },
        { type: "section", head: "Milei's style", md:
          "Milei governs through confrontation. He insults opponents, journalists and economists on social media, calls Peronism a 'cancer' and the state a 'criminal organisation', and has feuded with the Pope, the Spanish government and the UN, which he told in September 2026 was a 'useless organisation'. Yet he has also shown pragmatism: after early defeats in Congress, he struck deals with governors and the centre-right PRO of former president Mauricio Macri, many of whose members have joined his party." },
        { type: "section", head: "Scandals", md:
          "Two scandals dented his image. In February 2025 he promoted a cryptocurrency, $LIBRA, whose value soared and then collapsed within hours, wiping out investors; he deleted the post and said he had not known the details. In August 2025 leaked audio recordings attributed to the head of the national disability agency described kickbacks on medicine contracts, allegedly benefiting Karina Milei's circle. Both are under investigation, and both Mileis deny wrongdoing." },
        { type: "section", head: "Allies and rivals on the right", md:
          "Milei has absorbed much of the centre-right. Patricia Bullrich, Macri's former presidential candidate, served as his security minister and now leads his bloc in the Senate, and many PRO politicians have defected to La Libertad Avanza. Macri himself keeps a wary distance. Milei's own vice-president, Victoria Villarruel, who presides over the Senate, has fallen out with him publicly, and he accuses her of siding with his enemies." },
        { type: "section", head: "A divided opposition", md:
          "Peronism is split between Kirchnerists loyal to Cristina and moderates who want to move on. Kicillof, once Cristina's protégé, now acts independently. Polls show Milei still leading a first-round contest, with 38.5% in one September survey, because although most voters dislike him, they dislike Kicillof, Cristina, Massa and Macri too. Some are looking for a 'third way' candidate, perhaps a moderate provincial governor, who has yet to emerge as a clear contender." }
      ],
      takeaways: [
        "Milei governs by confrontation but has made deals with governors and Macri's PRO.",
        "His sister Karina runs his party; economy minister Luis Caputo runs the economy.",
        "The Peronist opposition is divided, and its likeliest 2027 candidate is Buenos Aires governor Axel Kicillof."
      ],
      check: { q: "Who is Karina Milei?",
        choices: ["The economy minister", "The president's sister, who runs his party", "The vice-president"], answer: 1,
        explain: "Karina Milei, the secretary-general of the presidency, runs La Libertad Avanza; her brother calls her 'the boss'." },
      sources: [
        { title: "Who Is Javier Milei? Argentina's President Explained", publisher: "The Rio Times", url: "https://www.riotimesonline.com/who-is-javier-milei-argentina-profile-2026/", date: "2026" },
        { title: "UN's 'sacred covenant has been broken', Argentina's Milei tells General Assembly", publisher: "UN News", url: "https://news.un.org/en/story/2026/09/1168415", date: "2026-09" },
        { title: "As Milei's aura fades, Argentina starts to look for a third way", publisher: "Buenos Aires Times", url: "https://www.batimes.com.ar/news/argentina/as-mileis-aura-fades-argentina-starts-to-look-for-a-third-way.phtml", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "ar-5", kind: "story", asOf: "2026-09-29",
      title: "The chainsaw",
      dek: "Milei slashed spending, devalued the peso and balanced the budget. Inflation collapsed, but at a heavy social cost.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ar/ar-5-hero.webp",
          alt: "Illustration of a neighbourhood grocery shop counter with handwritten price tags crossed out and rewritten, and a small calculator beside the till.",
          caption: "For decades, Argentine shopkeepers changed prices so often they wrote them in pencil.",
          credit: "AI illustration — not a photograph",
          prompt: "A small neighbourhood grocery shop counter with shelves of pasta, yerba mate and tins, handwritten price tags on cards crossed out and rewritten several times, an old calculator beside the till, warm afternoon light, everyday and nostalgic, no people, no legible numbers or text." },
        { type: "section", head: "What happened", md:
          "When Milei took office in December 2023, monthly inflation was running at about 25% and the central bank had negative reserves. He devalued the peso by more than half, froze public works, cut transfers to provinces, let pensions and public wages fall behind prices, eliminated or merged ministries, and laid off tens of thousands of public employees. In 2024 Argentina ran its first budget surplus in over a decade.\n\n" +
          "Inflation fell faster than almost anyone expected: annual inflation dropped from 211% in 2023 to 117.8% in 2024 and to about 30% in 2025, with monthly rates near 2%. In April 2025 a new $20 billion [[IMF]] programme let the government lift most currency controls." },
        { type: "facts", head: "By the numbers", rows: [
          ["Inflation, 2023", "211%"],
          ["Inflation, 2024", "117.8%"],
          ["Inflation, year to August 2026", "33.5% (1.7% in August alone)"],
          ["Poverty, first half of 2024", "52.9%"],
          ["Poverty, second half of 2025", "28.2%"],
          ["Poverty, first half of 2026", "32.3%"]
        ] },
        { type: "section", head: "The social cost", md:
          "The shock came first. Poverty soared to 52.9% in the first half of 2024 as prices jumped and incomes lagged. As inflation fell, real wages recovered and poverty dropped to 28.2% by the end of 2025, a success Milei celebrated. In 2026 it rose again, to 32.3%, as growth slowed, factories struggled with cheaper imports and unemployment rose to 7.9%. Pensioners, university staff and people with disabilities have protested repeatedly against cuts, and in 2025 Congress overrode his vetoes of extra funding for disability care and universities." },
        { type: "section", head: "Why it worked, so far", md:
          "Economists broadly agree that ending money-printing to finance deficits was the key to stopping inflation. Milei's government also kept the peso relatively strong, which cheapened imports and held prices down but hurt exporters and local industry. The IMF and Wall Street praised the fiscal discipline, while warning that reserves were too low and the currency overvalued." },
        { type: "section", head: "The currency", md:
          "For decades Argentines have saved in dollars and distrusted the peso. In April 2025 the government lifted most of the currency controls, the 'cepo', that had limited how many dollars individuals could buy, and let the peso float within a band. Since then the currency has been the pressure point: whenever politics wobbles, Argentines buy dollars and the peso weakens, forcing the central bank or the Treasury to intervene." },
        { type: "compare", head: "Two verdicts",
          left: { head: "Supporters", md:
            "Milei did what no one dared: balanced the budget and beat inflation without a hyperinflationary collapse. The pain was the price of decades of Peronist excess." },
          right: { head: "Critics", md:
            "The adjustment fell on pensioners, workers and the poor, industry is being hollowed out, and stability rests on an overvalued peso and foreign loans." } },
        { type: "section", head: "What's next", md:
          "The test now is growth. Milei needs investment in energy, mining and farming to create jobs before the 2027 election, and reserves strong enough to avoid another currency crisis." }
      ],
      takeaways: [
        "Milei cut spending sharply and balanced the budget in 2024.",
        "Annual inflation fell from 211% in 2023 to about a third of that by 2026, with monthly rates near 2%.",
        "Poverty spiked to 52.9%, fell to 28.2%, then rose again to 32.3% in 2026."
      ],
      check: { q: "What was Argentina's annual inflation rate in 2023, before Milei's reforms took hold?",
        choices: ["About 20%", "211%", "3,000%"], answer: 1,
        explain: "Prices rose 211% in 2023. Hyperinflation of about 3,000% was in 1989." },
      sources: [
        { title: "Argentina's poverty rate rises above 30% under President Milei, reversing recent decline", publisher: "AP via ABC News", url: "https://abcnews.com/Business/wireStory/argentinas-poverty-rate-rises-30-president-milei-reversing-136736443", date: "2026-09-24" },
        { title: "Argentina inflation ticks up to 2.7% in December, ends 2024 at 117.8%", publisher: "Reuters via MarketScreener", url: "https://ca.marketscreener.com/quote/currency/EURO-ARGENTINE-PESO-EUR-A-2356444/news/Argentina-inflation-ticks-up-to-2-7-in-December-ends-2024-at-117-8-48758708/", date: "2025-01" },
        { title: "Argentina | August inflation: 1.7% MoM, the lowest in 14 months", publisher: "BBVA Research", url: "https://www.bbvaresearch.com/en/publicaciones/argentina-august-inflation-17-mom-the-lowest-in-14-months/", date: "2026-09" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "ar-6", kind: "story", asOf: "2026-09-29",
      title: "A Trump bailout and a midterm comeback",
      dek: "In September 2025 Milei was losing. Then Washington stepped in, and voters gave him a surprise victory.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ar/ar-6-hero.webp",
          alt: "Illustration of a currency exchange board in a city street at night with blank glowing panels, and a man in a coat walking past.",
          caption: "Argentines watch the dollar's price obsessively.",
          credit: "AI illustration — not a photograph",
          prompt: "A city street at night with a glowing electronic currency exchange board mounted on an old stone building, the panels blank with no numbers, a figure in a coat walking past seen from behind, wet pavement reflecting the light, tense and cinematic, no legible text." },
        { type: "section", head: "What happened", md:
          "On 7 September 2025 Milei's party was crushed in the Buenos Aires provincial election, winning about 34% to the Peronists' 47%. Investors panicked, the peso plunged and the central bank burned reserves defending it. With national midterms seven weeks away, it looked as if the Milei experiment might collapse.\n\n" +
          "Washington came to the rescue. Treasury Secretary Scott Bessent announced a $20 billion currency swap line and even bought pesos directly. Donald Trump, hosting Milei at the White House, said American support depended on his winning. On 26 October Milei's party won 40.8% nationwide, far more than polls expected, and took 64 seats in the Chamber and 13 of 24 Senate seats up for election." },
        { type: "facts", head: "The midterms, 26 October 2025", rows: [
          ["La Libertad Avanza", "40.8% of the national vote"],
          ["Deputies won", "64, for a bloc of about 95 of 257"],
          ["Senate", "13 of 24 seats contested"],
          ["US support", "$20 billion swap line from the US Treasury"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Many voters feared that a Peronist victory would bring back high inflation, and the US lifeline reassured them that the peso would not collapse. The defeat in Buenos Aires province also scared moderates into turning out, and Milei ran a more disciplined campaign. Turnout was the lowest since democracy returned, a sign of apathy that helped the more motivated Milei voters." },
        { type: "section", head: "A campaign in trouble", md:
          "The Buenos Aires defeat came on top of the disability-agency bribery scandal and weak growth. In early October Milei's lead candidate in Buenos Aires province, the economist José Luis Espert, withdrew after reports of payments from a businessman accused of drug trafficking; he denied wrongdoing. Milei's allies feared a rout. Instead, the result gave him his best night since 2023, and markets surged the next day." },
        { type: "section", head: "A national map", md:
          "La Libertad Avanza won in most provinces, including the city of Buenos Aires and big provinces such as Córdoba and Mendoza, and ran neck and neck with the Peronists in Buenos Aires province itself, only seven weeks after losing it by 13 points." },
        { type: "compare", head: "Two views of the bailout",
          left: { head: "Supporters", md:
            "The US backed a friendly government at a moment of panic, preventing a crisis that would have hurt Argentines most, at little cost to American taxpayers." },
          right: { head: "Critics", md:
            "Washington openly tied its money to an election result, an extraordinary intervention in another democracy, and American farmers complained it helped a soybean competitor." } },
        { type: "section", head: "Why it matters", md:
          "The win saved Milei's programme and gave him the votes to pass a labour reform in February 2026 (briefing 7). It also tightened his alliance with Trump: in September 2026 the two countries launched an 'Andes-Atlantic Corridor' with up to $7 billion in US export credit by 2027." },
        { type: "section", head: "What's next", md:
          "The swap line bought time, not a cure. Argentina still needs to rebuild reserves and regain access to international markets before the 2027 election." }
      ],
      takeaways: [
        "Milei lost badly in the Buenos Aires provincial election in September 2025, triggering a currency panic.",
        "The US Treasury announced a $20 billion swap line, and Trump tied support to Milei's victory.",
        "Milei's party won 40.8% in the October 2025 midterms, a surprise victory."
      ],
      check: { q: "What did the US offer Argentina before the 2025 midterms?",
        choices: ["Troops", "A $20 billion currency swap line", "A free-trade agreement"], answer: 1,
        explain: "Treasury Secretary Scott Bessent announced a $20 billion swap line with Argentina's central bank." },
      sources: [
        { title: "US-backed Milei scores surprise midterm win, revives Argentina reform drive", publisher: "France 24", url: "https://www.france24.com/en/americas/20251026-milei-reforms-argentinal-midterm-vote", date: "2025-10-26" },
        { title: "Milei's Decisive Midterm Election Victory", publisher: "Americas Quarterly", url: "https://www.americasquarterly.org/article/mileis-decisive-midterm-election-victory/", date: "2025-10" },
        { title: "Argentina election results deliver Trump-backed President Javier Milei a bolstered mandate", publisher: "CBS News", url: "https://www.cbsnews.com/news/argentina-election-results-javier-milei-trump-backed-party-wins/", date: "2025-10-27" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "ar-7", kind: "story", asOf: "2026-09-29",
      title: "Labour reform and the backlash",
      dek: "Milei won a sweeping labour reform in February 2026. Months later, unemployment and poverty are rising.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ar/ar-7-hero.webp",
          alt: "Illustration of a large union march on a wide avenue with drums, banners without text and a tall white obelisk in the distance.",
          caption: "Argentina's unions called general strikes against the reform.",
          credit: "AI illustration — not a photograph",
          prompt: "A large trade union march on a very wide city avenue, marchers seen from behind carrying big plain blue-and-white banners with no text and bass drums, a tall white obelisk in the distance, smoke from flares, energetic and defiant, no faces, no legible text." },
        { type: "section", head: "What happened", md:
          "After the midterm win, Milei pushed a labour reform that previous governments had tried and failed to pass. The Chamber of Deputies approved it by 135 votes to 115 on 20 February 2026, and the Senate by 42 to 28 on 27 February, amid protests and a general strike called by the CGT, the main union federation.\n\n" +
          "The law makes it easier and cheaper to hire and fire, lowers severance costs by excluding bonuses from the formula, allows working days of up to 12 hours with time off in lieu, lets salaries be paid in foreign currency, changes holiday rules, and requires minimum service levels during strikes in many sectors." },
        { type: "facts", head: "The reform", rows: [
          ["Chamber vote", "135 to 115 (20 Feb 2026)"],
          ["Senate vote", "42 to 28 (27 Feb 2026)"],
          ["Key changes", "Cheaper severance, flexible hours, limits on strikes"],
          ["Unemployment, mid-2026", "7.9%, highest since 2021"]
        ] },
        { type: "section", head: "Why it happened", md:
          "About half of Argentine workers are informal, with no contract, pension or protection. Milei argued that rigid labour laws, high severance costs and union power discouraged firms from hiring formally, and that loosening them would bring workers into the formal economy. Business groups agreed; unions said the reform stripped away rights won over decades." },
        { type: "section", head: "The backlash", md:
          "Since then the economy has slowed. Unemployment rose to 7.9%, the highest since 2021; poverty rose to 32.3%; and barter clubs, last common in the 2001 crisis, have reappeared. Surveys show lack of jobs and low wages, not prices, are now Argentines' biggest worries. Milei's negative rating reached 62% in September. The government says the reform needs time, and blames Congress and the opposition for past failures." },
        { type: "section", head: "The unions", md:
          "The General Confederation of Labour (CGT), closely tied to Peronism, has been one of the most powerful institutions in the country since Perón's day, negotiating wages sector by sector and running workers' health insurance funds. It called several general strikes against Milei, who wants to weaken collective bargaining and union finances. The labour reform lets firms negotiate at company level, which unions see as an attack on their power." },
        { type: "compare", head: "Two views",
          left: { head: "The government", md:
            "The reform will bring millions of informal workers into legal jobs as investment arrives. Short-term pain reflects decades of distortions, not the new law." },
          right: { head: "Unions and the opposition", md:
            "Workers lost protections just as unemployment rose. Cheaper firing has made jobs less secure without creating new ones." } },
        { type: "section", head: "What's next", md:
          "The government forecasts a return to growth in 2027, driven by energy, mining and farm exports. If jobs do not follow, the 2027 presidential election will be fought on Milei's record, not on memories of the Peronist past. The unions have vowed to keep fighting the law, and any sign that it is creating formal jobs, or destroying them, will become ammunition for both sides in next year's presidential campaign." }
      ],
      takeaways: [
        "Congress passed Milei's labour reform in February 2026, making hiring and firing cheaper and limiting strikes.",
        "Unemployment has since risen to 7.9% and poverty to 32.3%.",
        "Jobs and wages have replaced inflation as Argentines' main worry."
      ],
      check: { q: "What is now Argentines' biggest economic worry, according to 2026 surveys?",
        choices: ["Inflation", "Lack of jobs and low wages", "The exchange rate"], answer: 1,
        explain: "As inflation fell, surveys found jobs (39%) and wages (36%) had become the top concerns." },
      sources: [
        { title: "Argentina Senate approves contentious Milei-backed labour reforms", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/2/28/argentina-senate-approves-contentious-milei-backed-labour-reforms", date: "2026-02-28" },
        { title: "Argentina's Chamber of Deputies passes controversial labour reform bill", publisher: "Al Jazeera", url: "https://aljazeera.com/news/2026/2/20/argentinas-chamber-of-deputies-passes-controversial-labour-reform-bill", date: "2026-02-20" },
        { title: "Poverty Rate Tests Argentina's Milei Ahead of Election", publisher: "Reuters via US News", url: "https://www.usnews.com/news/world/articles/2026-09-24/poverty-rate-tests-argentinas-milei-ahead-of-election", date: "2026-09-24" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "ar-12", kind: "spotlight", asOf: "2026-09-29",
      title: "The AMIA bombing",
      dek: "In 1994 a bomb destroyed a Jewish community centre in Buenos Aires, killing 85 people. Three decades of cover-ups, a prosecutor's mysterious death and a trial in absentia later, it still divides Argentina.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ar/ar-12-hero.webp",
          alt: "Illustration of a memorial wall on a Buenos Aires street with rows of small plaques and flowers, and people seen from behind standing in silence.",
          caption: "Every 18 July people gather in Pasteur Street to remember the victims.",
          credit: "AI illustration — not a photograph",
          prompt: "A memorial wall on a narrow Buenos Aires street lined with rows of small blank plaques and fresh flowers, a few people seen from behind standing in silence, winter morning light, grey stone and trees, mournful and dignified, no faces, no legible text." },
        { type: "facts", head: "The attacks", rows: [
          ["Israeli embassy bombing", "17 March 1992; 29 killed"],
          ["AMIA bombing", "18 July 1994; 85 killed, over 300 injured"],
          ["Accused", "Iranian officials and Hezbollah"],
          ["Convictions for the attack itself", "None"],
          ["Trial in absentia", "Ordered in 2025 under a new law"]
        ] },
        { type: "section", head: "The attack", md:
          "Argentina has Latin America's largest Jewish community. On the morning of 18 July 1994 a van packed with explosives blew up outside the headquarters of the Argentine Israelite Mutual Association (AMIA) in Buenos Aires, killing 85 people and injuring more than 300. It came two years after a bombing destroyed Israel's embassy in the city, killing 29. It remains the deadliest terrorist attack in Argentina's history." },
        { type: "section", head: "A botched investigation", md:
          "The first investigation collapsed in scandal: the judge was found to have paid a witness to accuse police officers, and the case was annulled. Later investigations concluded that the attack was planned by senior Iranian officials and carried out by Hezbollah, the Lebanese group Iran backs. Argentina obtained Interpol red notices for several Iranians in 2007. Iran denies any involvement. In 2024 Argentina's top criminal appeals court ruled that Iran ordered the attack and that it was a crime against humanity." },
        { type: "section", head: "Nisman", md:
          "In 2013 President Cristina Fernández de Kirchner signed a memorandum with Iran to set up a joint 'truth commission', which critics saw as a way to lift the arrest warrants. In January 2015 the special prosecutor, Alberto Nisman, accused her of covering up for Iran in exchange for trade. The day before he was due to present his case to Congress, he was found dead in his flat with a gunshot wound to the head. An appeals court later ruled that he was murdered, a finding his critics dispute; no one has been convicted. Fernández denies the cover-up charge, which she calls political persecution." },
        { type: "section", head: "Trial in absentia", md:
          "Iran has never handed over the suspects. In February 2025 Congress passed a law allowing trials in absentia for terrorism and crimes against humanity, and in June a judge ordered that ten Iranian and Lebanese suspects be tried under it, including senior Revolutionary Guards and government figures; an appeals court confirmed the order. It would be the first such trial in Argentina's history. Victims' families are divided over whether a trial without defendants brings justice." },
        { type: "compare", head: "Two views",
          left: { head: "Many victims' families and the Milei government", md:
            "Iran and Hezbollah are responsible, and past governments, especially Fernández's, protected them; justice requires a trial." },
          right: { head: "Fernández's supporters and some relatives", md:
            "The case has been used against political enemies, while local complicity and the first cover-up have gone unpunished." } },
        { type: "section", head: "Why it matters", md:
          "The AMIA case shapes Argentina's foreign policy. Milei, who has made support for Israel and the United States central to his diplomacy, declared Hamas a terrorist organisation in 2024 and blames Iran directly. The case also links Argentina to the wider confrontation with Iran (see [[unit:ir|Iran]] and [[unit:il|Israel]]) and remains a symbol of impunity in a country whose courts are often slow and politicised." }
      ],
      takeaways: [
        "The 1994 AMIA bombing killed 85 people, the deadliest terrorist attack in Argentine history.",
        "Argentine courts blame Iran and Hezbollah; Iran denies involvement and has never surrendered suspects.",
        "The prosecutor Alberto Nisman died in 2015 after accusing Cristina Fernández of a cover-up; suspects are now to be tried in absentia."
      ],
      check: { q: "Who have Argentine courts blamed for the 1994 AMIA bombing?",
        choices: ["The military junta", "Iranian officials and Hezbollah", "Argentine guerrillas"], answer: 1,
        explain: "Investigators and a 2024 court ruling concluded that Iran planned the attack and Hezbollah carried it out." },
      sources: [
        { title: "Argentina orders trial in absentia for suspects in AMIA bombing", publisher: "UPI", url: "https://www.upi.com/Top_News/World-News/2025/06/26/world-argentina-trial-absentia-amia-bombing-suspects-2025/2691750967659", date: "2025-06-26" },
        { title: "Absentee trial for fugitive Iranian AMIA bombing suspects confirmed", publisher: "Buenos Aires Times", url: "https://www.batimes.com.ar/news/argentina/absentee-trial-for-fugitive-iranian-amia-bombing-suspects-confirmed.phtml", date: "2025-09" },
        { title: "2 top Iranian officials to face trial in absentia over deadly 1994 attack on Argentinian Jewish center", publisher: "JTA", url: "https://www.jta.org/2026/09/23/global/2-top-iranian-officials-to-face-trial-in-absentia-over-deadly-1994-attack-on-argentinian-jewish-center", date: "2026-09-23" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "ar-8", kind: "now", asOf: "2026-09-29",
      title: "Where things stand",
      dek: "Inflation tamed, Congress friendlier, Washington on side, and a year to show that the pain was worth it.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ar/ar-8-hero.webp",
          alt: "Illustration of an oil drilling rig in a desert of red rock and scrub in Patagonia, with snow-capped Andes on the horizon.",
          caption: "Vaca Muerta, in Patagonia, holds one of the world's largest shale oil and gas reserves.",
          credit: "AI illustration — not a photograph",
          prompt: "A tall oil drilling rig standing in a dry Patagonian desert of red rock and grey scrub, snow-capped Andes mountains on the far horizon, clear cold blue sky, long shadows, vast and remote, no people, no legible text or logos." },
        { type: "section", head: "The state of play", md:
          "- **Government:** Milei, halfway through his term, with over a third of Congress.\n" +
          "- **Economy:** inflation 1.7% a month; growth slowing; unemployment 7.9%.\n" +
          "- **Social:** poverty back up to 32.3%.\n" +
          "- **Polls:** about 60% view Milei negatively, but no rival leads him.\n" +
          "- **Abroad:** a close alliance with Trump; a new US-backed trade corridor." },
        { type: "section", head: "Energy and lithium", md:
          "The brightest spot is natural resources. Vaca Muerta's oil and gas output has hit records, turning Argentina's energy trade from deficit to surplus, and a 2024 incentive regime for large investments (RIGI) has drawn projects in mining, lithium and pipelines. The government hopes exports can supply the dollars that Argentina has always lacked." },
        { type: "section", head: "The Falklands", md:
          "Argentina has claimed the Falkland Islands, which it calls the Malvinas, since Britain took control in 1833. Milei, an admirer of Margaret Thatcher, the prime minister who fought the 1982 war, has said Argentina should recover them through diplomacy, perhaps over decades, and has sought better relations with [[unit:gb|Britain]]. The islanders voted 99.8% to remain British in 2013. The claim is written into Argentina's constitution." },
        { type: "section", head: "Milei and the world", md:
          "Milei has made Argentina one of Washington's closest partners: he backs Trump on trade and immigration, has pledged to move Argentina's embassy in Israel to Jerusalem, and joined Trump's calls to overhaul the UN. He has cooled relations with Lula's Brazil, clashed with Spain's government and with the Pope, though he met him after early insults, and kept trading with China, a vital market for soybeans, despite campaign promises to shun it." },
        { type: "section", head: "The 2027 race", md:
          "The presidential election is due in October 2027. Milei is expected to seek re-election. His opponents' problem is that most Argentines, even those unhappy with him, still associate Peronism with inflation. His problem is that stable prices are no longer enough if jobs and wages do not recover. Macri, the last president to seek re-election after a painful economic adjustment, lost heavily in 2019. Milei is betting that Argentines will reward him for ending inflation rather than punish him for the cost, and that the opposition will stay divided all the way to election day." },
        { type: "section", head: "Three scenarios", md:
          "- **Take-off.** Energy and mining exports surge, jobs return, and Milei is re-elected in 2027.\n" +
          "- **Grind.** Stability holds but growth stays weak, leaving 2027 wide open.\n" +
          "- **Relapse.** A currency crisis or social unrest undoes the stabilisation, and Peronism returns." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **30 September – 2 October 2026:** Milei in Paris; meets Emmanuel Macron on 1 October\n" +
          "- **Monthly:** INDEC inflation figures\n" +
          "- **Ongoing:** IMF reviews and reserve targets\n" +
          "- **October 2027:** presidential and congressional elections" },
        { type: "section", head: "Connections", md:
          "Argentina's story runs through [[unit:us]] (the bailout and the corridor), [[unit:br]] (its biggest neighbour, where Milei backs the Bolsonaros), [[unit:gb]] (the Falklands), [[unit:cn]] (a major buyer of its soybeans and a currency-swap partner) and [[unit:il]] (Milei's closest ally in the Middle East)." }
      ],
      takeaways: [
        "Milei has tamed inflation but faces rising unemployment and poverty a year before re-election.",
        "Energy from Vaca Muerta and lithium are Argentina's best economic hopes.",
        "Argentina still claims the Falklands, but Milei favours diplomacy with Britain."
      ],
      check: { q: "What is Vaca Muerta?",
        choices: ["A political party", "A giant shale oil and gas formation in Patagonia", "A Buenos Aires neighbourhood"], answer: 1,
        explain: "Vaca Muerta is one of the world's largest shale formations and is driving Argentina's energy boom." },
      sources: [
        { title: "Milei's approval rises from lowest point as inflation worries ease", publisher: "Buenos Aires Times", url: "https://www.batimes.com.ar/news/argentina/mileis-approval-rises-from-lowest-point-as-inflation-worries-ease.phtml", date: "2026" },
        { title: "Falkland Islands War", publisher: "Britannica", url: "https://www.britannica.com/event/Falkland-Islands-War", date: "n.d." },
        { title: "Argentina's Milei: Trending News, Latest Updates, Analysis", publisher: "Bloomberg", url: "https://www.bloomberg.com/latest/argentina-s-javier-milei", date: "2026-09" }
      ]
    }

  ]
});
