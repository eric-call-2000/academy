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
