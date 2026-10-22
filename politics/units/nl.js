/* ============================================================
   Unit 33 — Netherlands 🇳🇱
   Research note and sources: tools/research/nl.md
   Current as of 22 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("nl", {
  id: "nl",
  asOf: "2026-10-22",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "nl-1", kind: "snapshot", asOf: "2026-10-22",
      title: "The Netherlands in brief",
      dek: "A small, crowded trading nation that makes the world's most advanced chip machines, runs Europe's biggest port and hosts its top courts.",
      blocks: [
        { type: "map", src: "maps/nl.svg",
          alt: "Locator map of north-western Europe with the Netherlands highlighted on the North Sea coast, bordered by Germany to the east and Belgium to the south, with a small globe showing its place in the world.",
          caption: "The Netherlands sits at the mouths of the Rhine and the Meuse, Europe's gateway to the North Sea. Its Caribbean islands lie outside this frame.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Amsterdam; the government sits in The Hague"],
          ["People", "About 18 million"],
          ["System", "Constitutional monarchy with a parliamentary government"],
          ["Head of state", "King Willem-Alexander, since 2013"],
          ["Prime minister", "Rob Jetten (D66), since February 2026"],
          ["Government", "A minority coalition with 66 of 150 seats"],
          ["Member of", "EU and NATO, both as a founder"]
        ] },
        { type: "section", head: "Why it's here", md:
          "The Netherlands has about 18 million people, but it sits at three chokepoints of the modern world. The town of Veldhoven is home to ASML, the only company on earth that makes the extreme ultraviolet (EUV) machines needed for the most advanced microchips, which puts the Dutch in the middle of the technology contest between [[unit:us|the United States]] and [[unit:cn|China]]. Rotterdam is Europe's biggest port. And The Hague hosts the International Court of Justice and the International Criminal Court, whose judges the US has sanctioned." },
        { type: "section", head: "Who holds power", md:
          "After an election in October 2025 that the liberal D66 won by fewer than 30,000 votes over Geert Wilders's far-right Freedom Party (PVV), Rob Jetten became prime minister in February 2026. At 38 he is the youngest in Dutch history and the first who is openly gay. His coalition of D66, the conservative-liberal VVD and the Christian Democrats (CDA) holds only 66 of 150 seats, the first true minority government since 1945, so every law needs opposition votes." },
        { type: "section", head: "The mood in 2026", md:
          "The Dutch are rich, but anxious. Housing is scarce and expensive, and young people wait years for a rented flat. Strict nitrogen rules, meant to protect nature, have blocked building projects and angered farmers. Asylum and immigration have topped voters' concerns for years and brought down the last government. Trust in politics was badly damaged by a scandal in which the tax office wrongly accused thousands of families of benefits fraud. Yet the 2025 election showed a swing back toward the centre." },
        { type: "section", head: "A trading nation", md:
          "The Dutch have lived from trade for 400 years. The country is one of the world's biggest exporters, thanks to Rotterdam, Amsterdam's Schiphol airport, the chemical and food industries, and companies such as Shell, Unilever, Philips and Heineken. It is also the world's second-largest exporter of farm products after the United States, despite its small size. That makes the Netherlands a firm believer in open markets and a nervous observer of tariffs and trade wars." },
        { type: "section", head: "What the Netherlands wants", md:
          "The Dutch want an EU that trades freely and keeps its budget tight; they have long been among the 'frugal' members wary of shared debt. They want NATO strong and Russia contained, partly because 196 Dutch citizens died when Russian-backed forces shot down flight MH17 over Ukraine in 2014. And they want the US–China fight over chips not to wreck ASML's business. Balancing Washington's demands and Beijing's retaliation is one of the government's hardest jobs." },
        { type: "callout", tone: "why", md:
          "The Netherlands shows how a small country can hold one piece of the global economy that nobody else can supply, and how that turns it into a target in other people's rivalries." }
      ],
      takeaways: [
        "The Netherlands is home to ASML, the only maker of EUV chipmaking machines, Europe's biggest port and the world's top courts.",
        "Rob Jetten, 38, leads a minority coalition of D66, the VVD and the CDA with 66 of 150 seats.",
        "Housing, nitrogen rules and asylum dominate domestic politics."
      ],
      check: { q: "What makes ASML so important?",
        choices: ["It is Europe's biggest bank", "It is the only maker of EUV machines for the most advanced chips", "It runs the port of Rotterdam"], answer: 1,
        explain: "ASML is the sole supplier of extreme ultraviolet lithography machines, without which the most advanced chips cannot be made." },
      sources: [
        { title: "Jetten cabinet", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jetten_cabinet", date: "2026" },
        { title: "Dutch king swears in new coalition government led by youngest premier Rob Jetten", publisher: "AP via CFJC Today", url: "https://cfjctoday.com/2026/02/23/new-dutch-coalition-government-led-by-youngest-premier-has-been-sworn-into-office/", date: "2026-02-23" },
        { title: "Netherlands", publisher: "Britannica", url: "https://www.britannica.com/place/Netherlands", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "nl-2", kind: "power", asOf: "2026-10-22",
      title: "Coalitions all the way down",
      dek: "Pure proportional representation means 15 parties in parliament, no majority ever, and months of talks after every election.",
      blocks: [
        { type: "diagram", src: "img/nl/nl-2-power.svg",
          alt: "Diagram of power in the Netherlands. Voters elect the 150-seat House of Representatives by nationwide proportional representation, with no threshold beyond one seat's worth of votes. It makes and unmakes governments. It backs Prime Minister Rob Jetten, who leads a D66, VVD and CDA minority coalition with 66 seats. The 75-seat Senate, elected by the provincial councils, must also pass every law; the coalition has 22 seats there. King Willem-Alexander is head of state and signs laws. The next election is due by 2030.",
          caption: "With no party anywhere near a majority, every Dutch government is a negotiated coalition.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The House", md:
          "The 150 members of the House of Representatives, the Tweede Kamer, are elected by nationwide proportional representation. The whole country is one constituency, and a party needs only about 0.67% of the vote, enough for one seat, to get in. In 2025, 15 parties won seats. No party has won a majority since the system began in 1918; the largest party usually has a fifth or less of the seats, and D66 won only 26 in 2025." },
        { type: "section", head: "Forming a government", md:
          "After an election, parliament appoints a 'scout' and then 'informateurs' who explore which parties could govern together, and a 'formateur', usually the future prime minister, who assembles the cabinet. Parties write a detailed coalition agreement before ministers are named. It takes time: 299 days in 2021–22, 223 days in 2023–24 and 117 days in 2025–26. Until then the old cabinet governs as caretaker." },
        { type: "section", head: "Cabinet and prime minister", md:
          "The prime minister chairs the cabinet but is 'first among equals': ministers come from several parties and answer to parliament individually. The House can force out a minister or the whole government with a vote of no confidence. A Dutch prime minister cannot dissolve parliament at will in practice; governments fall when coalition partners walk out, as the PVV did in June 2025 over asylum policy, which ended Dick Schoof's cabinet after less than a year." },
        { type: "section", head: "The Senate and the king", md:
          "Every law must also pass the 75-member Senate, the Eerste Kamer, which is elected by the members of the 12 provincial councils. Provincial elections therefore matter nationally; the farmers' party BBB won them in 2023 and became the largest party in the Senate. Jetten's coalition has only 22 Senate seats. King Willem-Alexander signs laws and swears in ministers but has had no role in forming governments since 2012." },
        { type: "section", head: "The polder model", md:
          "The Dutch call their habit of compromise the 'polder model', after the low-lying land reclaimed from the sea, which communities could only protect by working together. Employers, unions and government negotiate wages and reforms, and parties that attacked each other in the campaign usually end up sharing power. Critics say it makes politics slow and blurry, and that it helped populists who promised to break the consensus." },
        { type: "section", head: "Courts and the Council of State", md:
          "Dutch courts cannot strike down acts of parliament for breaching the constitution, an unusual rule in Europe, though they can set laws aside if they conflict with international treaties such as the European Convention on Human Rights. The Council of State advises on every bill and is also the highest administrative court. Its 2019 ruling on nitrogen pollution, which stalled thousands of building projects, shows how much power judges can have over policy even without constitutional review." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Supporters", md:
            "Almost every vote counts, minorities get a voice, and governments must build broad agreement before acting." },
          right: { head: "Critics", md:
            "Fragmentation means months of talks, fragile coalitions and governments that collapse, three times since 2021." } }
      ],
      takeaways: [
        "The 150-seat House is elected nationwide by pure proportional representation; 15 parties won seats in 2025.",
        "Governments are coalitions agreed after months of talks; the Jetten cabinet took 117 days.",
        "Every law must also pass the Senate, elected by provincial councils, where the coalition has 22 of 75 seats."
      ],
      check: { q: "Roughly what share of the vote does a party need to win a seat in the Dutch House?",
        choices: ["5%", "About 0.67%", "10%"], answer: 1,
        explain: "With 150 seats and one national constituency, a party needs about one-150th of the vote, about 0.67%, for a seat." },
      sources: [
        { title: "2025 Dutch general election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2025_Dutch_general_election", date: "2025" },
        { title: "Jetten I: a new minority government in the Netherlands", publisher: "Hanns Seidel Foundation", url: "https://europe.hss.de/en/news-global/jetten-i-a-new-minority-government-in-the-netherlands-news13782/", date: "2026" },
        { title: "Netherlands: Government and society", publisher: "Britannica", url: "https://www.britannica.com/place/Netherlands", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "nl-9", kind: "founding", asOf: "2026-10-22",
      title: "Revolt and a Golden Age",
      dek: "Rebels against Spain built a republic of merchants that became, for a century, the richest place on earth.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/nl/nl-9-hero.webp",
          alt: "Illustration of a busy seventeenth-century harbour with tall-masted sailing ships, gabled warehouses along a quay and small boats, under a big cloudy sky.",
          caption: "Amsterdam's harbour in the 1600s, when Dutch ships carried much of the world's trade.",
          credit: "Illustration — not a photograph",
          prompt: "A busy seventeenth-century harbour with several tall-masted wooden sailing ships, a row of narrow gabled brick warehouses along a quay, small rowing boats, figures far away unloading barrels, a huge cloudy Dutch sky with silver light, no flags, no legible text." },
        { type: "timeline", head: "From revolt to republic", items: [
          ["1568", "Revolt against Spanish Habsburg rule begins"],
          ["1581", "The northern provinces renounce Philip II"],
          ["1602", "The Dutch East India Company (VOC) is founded"],
          ["1609", "A stock exchange opens in Amsterdam"],
          ["1648", "Spain recognises Dutch independence"],
          ["1672", "The 'disaster year': France, England and others invade"],
          ["1795–1815", "French rule, then the Kingdom of the Netherlands"]
        ] },
        { type: "section", head: "The revolt", md:
          "In the 1500s the Low Countries belonged to the Habsburg king of [[unit:es|Spain]], Philip II. His taxes and his persecution of Protestants led to a revolt in 1568, led by William of Orange, still honoured as the father of the nation; the national anthem is about him. The war lasted on and off for 80 years. The southern provinces, today's Belgium, stayed with Spain; the seven northern provinces formed a republic and won recognition of their independence in 1648." },
        { type: "section", head: "A merchant republic", md:
          "The Dutch Republic was unusual in a Europe of kings. It was a federation of provinces run largely by merchant elites, with a 'stadholder' from the House of Orange as military leader. It tolerated religious minorities more than most of Europe, so Jews from Spain and Portugal, Protestants from France and thinkers such as Descartes and Spinoza found refuge there. Printing presses in Amsterdam published books banned elsewhere." },
        { type: "section", head: "The Golden Age", md:
          "In the 1600s the Republic became Europe's richest country. The Dutch East India Company, founded in 1602, was the world's first publicly traded company and a quasi-state, with its own armies and the power to make treaties; it controlled the spice trade of today's [[unit:id|Indonesia]]. Amsterdam had the world's first modern stock exchange and a central bank of sorts. Painters such as Rembrandt and Vermeer worked for a new middle-class market." },
        { type: "section", head: "Empire and its price", md:
          "Dutch wealth also came from conquest and slavery. The VOC used brutal force in the Spice Islands, and the West India Company shipped about 600,000 enslaved Africans across the Atlantic, many to plantations in Suriname and the Caribbean. In 1672 France, England and two German bishoprics invaded at once, and the Republic barely survived. Over the 1700s Britain overtook it. After French occupation, a Kingdom of the Netherlands was created in 1815 under the House of Orange; Belgium broke away in 1830." },
        { type: "compare", head: "Two views of the Golden Age",
          left: { head: "A source of pride", md:
            "A small, tolerant republic of traders out-competed empires and gave the world modern finance, science and art." },
          right: { head: "A fuller account", md:
            "The same wealth rested on colonial violence and the slave trade; in 2019 an Amsterdam museum stopped using the term 'Golden Age'." } },
        { type: "section", head: "Why it matters", md:
          "The Golden Age set patterns that still shape the country: trade first, tolerance as a practical virtue, and a deep habit of negotiation among provinces and groups. The colonial side of the story is now part of a public reckoning ([[lesson:nl-11]])." }
      ],
      takeaways: [
        "The Dutch revolted against Spain in 1568 and won recognition of their republic in 1648.",
        "In the 1600s the Republic became Europe's richest country, home of the VOC and the first modern stock exchange.",
        "Its wealth also rested on colonial conquest and the slave trade; the kingdom was founded in 1815."
      ],
      check: { q: "What was the Dutch East India Company (VOC)?",
        choices: ["A Dutch navy", "The world's first publicly traded company, with its own armies", "A Spanish trading guild"], answer: 1,
        explain: "Founded in 1602, the VOC sold shares to the public and had the power to wage war and make treaties in Asia." },
      sources: [
        { title: "Netherlands: History", publisher: "Britannica", url: "https://www.britannica.com/place/Netherlands/History", date: "n.d." },
        { title: "Eighty Years' War", publisher: "Britannica", url: "https://www.britannica.com/event/Eighty-Years-War", date: "n.d." },
        { title: "Dutch East India Company", publisher: "Britannica", url: "https://www.britannica.com/topic/Dutch-East-India-Company", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "nl-3", kind: "history", asOf: "2026-10-22",
      title: "From neutrality to Wilders",
      dek: "Occupation, decolonisation, a founding role in Europe, and two decades in which populism reshaped a famously consensual politics.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/nl/nl-3-hero.webp",
          alt: "Illustration of a massive storm-surge barrier with huge steel gates across a wide estuary under a dramatic grey sky, with dunes in the foreground.",
          caption: "After the 1953 flood killed more than 1,800 people, the Dutch built the Delta Works, a chain of dams and storm barriers.",
          credit: "Illustration — not a photograph",
          prompt: "A massive concrete and steel storm-surge barrier with tall piers and huge raised gates stretching across a wide grey estuary, a dramatic stormy sky, waves below, grassy dunes in the foreground, monumental and calm, no people close up, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1940–45", "German occupation"],
          ["1945–49", "War in Indonesia ends in independence"],
          ["1949 / 1957", "NATO founder; founder of the European Economic Community"],
          ["1953", "North Sea flood; the Delta Works follow"],
          ["2002", "Pim Fortuyn is murdered days before an election"],
          ["2010–24", "Mark Rutte is prime minister for 14 years"],
          ["2023", "Geert Wilders's PVV wins the election"]
        ] },
        { type: "section", head: "1. War and empire's end", md:
          "The Netherlands stayed neutral in the First World War but was invaded by Germany in May 1940 and occupied for five years ([[lesson:nl-10]]). Japan seized the Dutch East Indies. After the war, the Dutch fought to keep it, but [[unit:id|Indonesia]] won independence in 1949 ([[lesson:nl-11]]). Suriname became independent in 1975; Aruba, Curaçao and Sint Maarten are now self-governing countries within the kingdom, and three smaller islands are Dutch municipalities." },
        { type: "section", head: "2. Rebuilding and Europe", md:
          "The Netherlands abandoned neutrality and became a founding member of [[NATO]] in 1949 and of the European Economic Community in 1957. A huge North Sea flood in 1953 killed more than 1,800 people and led to the Delta Works, one of the world's great engineering projects. Gas found at Groningen in 1959 paid for a generous welfare state. Society was 'pillarised' into Catholic, Protestant, socialist and liberal worlds, each with its own schools, newspapers and parties, until the 1960s." },
        { type: "section", head: "3. Tolerance tested", md:
          "The country became known for liberal policies: tolerated cannabis, legal euthanasia and the world's first same-sex marriages, in 2001. Large-scale immigration, from Turkey, Morocco and the former colonies, raised tensions that mainstream parties rarely discussed. In 2002 the populist Pim Fortuyn, who called Islam a threat to Dutch freedoms, was shot dead by an animal-rights activist days before an election. In 2004 the filmmaker Theo van Gogh was murdered by a jihadist." },
        { type: "section", head: "4. The Rutte years", md:
          "Mark Rutte of the VVD led four coalition governments from 2010 to 2024, the longest-serving Dutch prime minister. His third government resigned in 2021 over the childcare-benefits scandal, in which the tax office had wrongly branded tens of thousands of parents fraudsters, often targeting those with dual nationality. Earthquakes caused by gas extraction in Groningen became another scandal, and the field was finally closed. Rutte left to become NATO's secretary general in 2024." },
        { type: "section", head: "5. Wilders and after", md:
          "In November 2023 Geert Wilders's anti-Islam, anti-immigration PVV won the most seats for the first time. Wilders could not become prime minister, but his party joined a right-wing coalition under a non-party civil servant, Dick Schoof. It collapsed in June 2025 when Wilders pulled out over asylum policy. In the October 2025 election the PVV lost 11 seats and D66 won narrowly ([[lesson:nl-7]])." },
        { type: "section", head: "6. Groningen", md:
          "The gas field under Groningen, once Europe's largest, paid for much of the Dutch welfare state, but decades of extraction caused thousands of small earthquakes that cracked homes. A parliamentary inquiry in 2023 found the state had put profits ahead of residents' safety for decades. Production ended in 2023 and the field was formally closed by law in 2024, and the government has promised billions for repairs and compensation." }
      ],
      takeaways: [
        "After occupation and the loss of Indonesia, the Netherlands became a founder of NATO and of the European Community.",
        "Populism grew from 2002 with Pim Fortuyn and later Geert Wilders, whose PVV won the 2023 election.",
        "Mark Rutte governed from 2010 to 2024; the PVV-backed Schoof cabinet fell in 2025."
      ],
      check: { q: "Why did Mark Rutte's third government resign in 2021?",
        choices: ["Over the childcare-benefits scandal", "Over the Groningen earthquakes", "Over leaving the EU"], answer: 0,
        explain: "The tax office had wrongly accused tens of thousands of parents of benefits fraud; the government took responsibility and resigned." },
      sources: [
        { title: "Netherlands: History", publisher: "Britannica", url: "https://www.britannica.com/place/Netherlands/History", date: "n.d." },
        { title: "Dutch childcare benefits scandal", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dutch_childcare_benefits_scandal", date: "n.d." },
        { title: "2025 Dutch general election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2025_Dutch_general_election", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "nl-10", kind: "past", asOf: "2026-10-22",
      title: "Occupation and the Holocaust",
      dek: "Under German rule from 1940 to 1945, the Netherlands lost a higher share of its Jews than any other country in western Europe.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/nl/nl-10-hero.webp",
          alt: "Illustration of a narrow canal house with a tall gabled front beside a canal at dusk, one window faintly lit at the top, with a bare tree and a bicycle.",
          caption: "Anne Frank and her family hid for two years in a secret annex behind a canal-side office in Amsterdam.",
          credit: "Illustration — not a photograph",
          prompt: "A narrow brick canal house with a tall gabled front beside a quiet canal at dusk, one small attic window faintly lit, a bare tree and an old bicycle leaning on railings, reflections in dark water, hushed and melancholy, no people, no legible text." },
        { type: "facts", head: "The occupation", rows: [
          ["Invasion", "10 May 1940; Rotterdam bombed on 14 May"],
          ["Jews before the war", "About 140,000"],
          ["Jews murdered", "About 102,000, roughly three in four"],
          ["February strike", "February 1941, against the persecution of Jews"],
          ["Hunger Winter", "1944–45; about 20,000 died"]
        ] },
        { type: "section", head: "Invasion", md:
          "Germany invaded on 10 May 1940. On 14 May the Luftwaffe bombed the centre of Rotterdam, killing hundreds and leaving tens of thousands homeless, and Germany threatened to do the same to Utrecht. The Dutch army surrendered the next day. Queen Wilhelmina and the government escaped to London. The Netherlands was placed under a civilian Nazi administration led by the Austrian Arthur Seyss-Inquart." },
        { type: "section", head: "Deportation", md:
          "The occupiers registered, segregated and then deported the Jewish population with the help of an efficient Dutch bureaucracy, police and railway. From 1942, trains left the Westerbork transit camp for Auschwitz and Sobibor. About 102,000 of the 140,000 Jews in the country were murdered, about three-quarters, a far higher share than in Belgium or France. Anne Frank, whose diary from her family's hiding place in Amsterdam became one of the most read books in the world, died in Bergen-Belsen in 1945." },
        { type: "section", head: "Resistance and collaboration", md:
          "In February 1941 Amsterdam workers held a general strike against the first round-ups of Jews, one of the only mass protests of its kind in occupied Europe. Around 25,000 Jews went into hiding with help from Dutch families; about two-thirds survived. But many Dutch people also collaborated: police officers made arrests, and tens of thousands joined Dutch Nazi organisations or volunteered for the German army." },
        { type: "section", head: "The Hunger Winter", md:
          "After the Allies liberated the south in late 1944, the north stayed under German control. A railway strike called by the government in exile was answered with a German blockade of food. In the 'Hunger Winter' of 1944–45, people ate tulip bulbs and sugar beets; about 20,000 died. Allied food drops began in late April 1945, and German forces surrendered on 5 May, now Liberation Day." },
        { type: "section", head: "After the war", md:
          "Returning Jewish survivors often met indifference, bureaucratic obstacles and even demands for unpaid rent or tax on homes they had been forced to leave. Collaborators were tried, though many sentences were later reduced. The Westerbork camp became a memorial, and Anne Frank's hiding place is now a museum visited by more than a million people a year. National remembrance on 4 May and Liberation Day on 5 May remain among the country's most important days." },
        { type: "compare", head: "Two lessons drawn",
          left: { head: "The resistance story", md:
            "The February strike and those who hid Jews show that ordinary people could and did resist Nazi rule." },
          right: { head: "The harder truth", md:
            "Dutch officials, police and railways helped deport Jews with chilling efficiency; the government apologised only in 2020." } },
        { type: "section", head: "Why it matters", md:
          "The war shaped Dutch commitment to European integration, international law and NATO. In 2020 Prime Minister Rutte formally apologised for the government's failure to protect Jews during the war, the first such apology." }
      ],
      takeaways: [
        "Germany occupied the Netherlands from May 1940 to May 1945.",
        "About 102,000 of 140,000 Dutch Jews were murdered, the highest share in western Europe.",
        "In the Hunger Winter of 1944–45 about 20,000 people died; 5 May is now Liberation Day."
      ],
      check: { q: "What was unusual about the February strike of 1941?",
        choices: ["It was against food shortages", "It was a mass protest against the persecution of Jews", "It ended the occupation"], answer: 1,
        explain: "Amsterdam workers struck against the first round-ups of Jews, one of very few such mass protests in occupied Europe." },
      sources: [
        { title: "Why did so many Jews in the Netherlands not survive the war?", publisher: "Anne Frank House", url: "https://www.annefrank.org/en/anne-frank/go-in-depth/netherlands-greatest-number-jews-deported-western-europe/", date: "n.d." },
        { title: "The Netherlands", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/article/the-netherlands", date: "n.d." },
        { title: "Netherlands: History", publisher: "Britannica", url: "https://www.britannica.com/place/Netherlands/History", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "nl-11", kind: "past", asOf: "2026-10-22",
      title: "Indonesia, slavery and apology",
      dek: "For centuries the Netherlands ruled an empire in Asia and the Caribbean. Only recently has it apologised for what that involved.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/nl/nl-11-hero.webp",
          alt: "Illustration of a white colonial-era building with a red-tiled roof and arched veranda on a tropical waterfront, palm trees and wooden boats in the foreground.",
          caption: "Dutch rule in the East Indies, today's Indonesia, lasted from the 1600s to 1949.",
          credit: "Illustration — not a photograph",
          prompt: "A white colonial-era building with a red-tiled roof and long arched veranda on a tropical waterfront, palm trees, wooden outrigger boats pulled up on the sand in the foreground, humid golden light, quiet and heavy with history, no people close up, no flags, no legible text." },
        { type: "facts", head: "Empire in brief", rows: [
          ["Dutch East Indies", "Ruled from the 1600s to 1949"],
          ["Indonesian independence war", "1945–49; about 100,000 Indonesians killed"],
          ["Enslaved Africans shipped", "About 600,000 by Dutch traders"],
          ["Slavery abolished", "1863 in Suriname and the Caribbean"],
          ["Apologies", "For the war in Indonesia (2022); for slavery (2022 and 2023)"]
        ] },
        { type: "section", head: "The East Indies", md:
          "From the 1600s the VOC, and from 1800 the Dutch state, ruled the islands that became [[unit:id|Indonesia]]. In the 1800s the 'Cultivation System' forced Javanese farmers to grow export crops such as coffee and sugar for the Dutch treasury, financing railways and canals in the Netherlands, while famines struck parts of Java. A small Dutch elite ruled a population of tens of millions." },
        { type: "section", head: "The war of 1945–49", md:
          "When Japan surrendered in August 1945, Sukarno declared Indonesia independent. The Netherlands sent about 200,000 troops to restore its rule, calling the campaigns 'police actions'. About 100,000 Indonesians and more than 5,000 Dutch soldiers died. Under US pressure, the Dutch transferred sovereignty in December 1949. For decades, Dutch governments described the war as a regrettable conflict with isolated excesses." },
        { type: "section", head: "The reckoning", md:
          "In 2022 a large study by three Dutch research institutes concluded that Dutch forces had used 'systematic and extreme violence', including torture and mass executions, and that politicians and commanders had known. Prime Minister Rutte apologised to the people of Indonesia. King Willem-Alexander had already apologised on a state visit in 2020. Some veterans' groups said the study ignored violence by Indonesian fighters against Dutch, Indo-European and Chinese civilians, which the researchers also documented." },
        { type: "section", head: "Slavery", md:
          "The Dutch were major slave traders. The West India Company and private traders shipped about 600,000 Africans across the Atlantic, and slavery was abolished in Suriname and the Dutch Caribbean only in 1863, with enslaved people forced to work ten more years under state supervision. In December 2022 Rutte apologised on behalf of the state, and on 1 July 2023, the 160th anniversary of abolition, the king apologised in Amsterdam and asked for forgiveness." },
        { type: "section", head: "The Caribbean today", md:
          "Six Caribbean islands are still part of the Kingdom of the Netherlands. Aruba, Curaçao and Sint Maarten are self-governing countries within the kingdom, while Bonaire, Sint Eustatius and Saba have been special Dutch municipalities since 2010. Relations are close but uneasy, with disputes over money, governance and the gap in living standards between the islands and the European Netherlands." },
        { type: "compare", head: "Two views of the apologies",
          left: { head: "Supporters", md:
            "A country that champions human rights must face its own history; apologies are a first step toward equal citizenship for descendants." },
          right: { head: "Sceptics", md:
            "Today's Dutch cannot be guilty for the 1600s; apologies without reparations, or with them, divide more than they heal." } },
        { type: "section", head: "Why it matters", md:
          "About a quarter of Dutch residents have a migration background, many with roots in Indonesia, Suriname and the Caribbean. Debates over the colonial past, and over traditions such as the blackface character Black Pete, which has largely disappeared from official celebrations, are part of a wider argument about national identity." }
      ],
      takeaways: [
        "The Netherlands ruled the East Indies for centuries and fought a war in 1945–49 to keep Indonesia.",
        "A 2022 study found 'systematic and extreme violence' by Dutch forces; the government apologised.",
        "Dutch traders shipped about 600,000 enslaved Africans; the state and the king apologised in 2022 and 2023."
      ],
      check: { q: "What did the 2022 Dutch study conclude about the war in Indonesia?",
        choices: ["It was a defensive police action", "Dutch forces used systematic and extreme violence", "No violence occurred"], answer: 1,
        explain: "The study found systematic and extreme violence, known to political and military leaders; Rutte then apologised." },
      sources: [
        { title: "Indonesian National Revolution", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Indonesian_National_Revolution", date: "n.d." },
        { title: "Netherlands king acknowledges, apologizes for slavery", publisher: "UPI", url: "https://www.upi.com/Top_News/World-News/2023/07/01/netherlands-king-willem-alexander-acknowledges-apologizes-for-slavery/9831688234558/", date: "2023-07-01" },
        { title: "Netherlands: History", publisher: "Britannica", url: "https://www.britannica.com/place/Netherlands/History", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "nl-4", kind: "players", asOf: "2026-10-22",
      title: "Jetten, Wilders, Yeşilgöz",
      dek: "A young liberal prime minister, the populist he narrowly beat, and the partners and rivals who decide whether his minority government survives.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/nl/nl-4-hero.webp",
          alt: "Illustration of a medieval brick hall with two pointed towers in a cobbled courtyard surrounded by government buildings, with cyclists passing.",
          caption: "The Binnenhof in The Hague, seat of Dutch politics for centuries, now under long renovation.",
          credit: "Illustration — not a photograph",
          prompt: "A medieval red-brick hall with a tall pointed gable and two slim towers in a cobbled courtyard surrounded by old government buildings with tall windows, a few cyclists passing at a distance, grey-blue sky, orderly and calm, no flags, no legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "Rob Jetten", role: "Prime minister, since February 2026 (D66)",
            img: "img/nl/portrait-jetten.webp", source: "Official photo (rijksoverheid.nl) via Wikimedia Commons; confirm the licence.",
            md: "A former climate and energy minister who led D66 from 9 to 26 seats with an optimistic campaign about building homes and new towns. The youngest and first openly gay Dutch prime minister." },
          { name: "Geert Wilders", role: "Leader of the PVV",
            img: "img/nl/portrait-wilders.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "In parliament since 1998, under police protection since 2004 because of threats from jihadists. Won the 2023 election, brought down the Schoof cabinet in 2025, lost 11 seats, and then lost seven MPs to a split in January 2026." },
          { name: "Dilan Yeşilgöz", role: "Deputy prime minister and defence minister (VVD)",
            img: "img/nl/portrait-yesilgoz.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Born in Turkey to a Kurdish-Alevi family, she succeeded Rutte as VVD leader. Opened the door to governing with Wilders in 2023; now in charge of raising defence spending to NATO's target." },
          { name: "Henri Bontenbal", role: "Leader of the CDA",
            img: "img/nl/portrait-bontenbal.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Revived the Christian Democrats from 5 to 18 seats with a calm, values-based campaign. His party holds the asylum and foreign ministries." },
          { name: "Joost Eerdmans", role: "Leader of JA21",
            img: "img/nl/portrait-eerdmans.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Heads a right-wing party that grew from one seat to nine, competing with the PVV for voters who want strict immigration rules without Wilders's style." },
          { name: "Mark Rutte", role: "NATO secretary general, since 2024",
            img: "img/nl/portrait-rutte.webp", source: "NATO official photo via Wikimedia Commons; confirm the licence.",
            md: "Prime minister for 14 years and now the alliance's top official, known for managing Donald Trump; the 2025 NATO summit in The Hague agreed the 5% spending pledge." }
        ] },
        { type: "section", head: "A minority bet", md:
          "Jetten tried for months to build a majority, but the VVD refused to govern with GroenLinks–PvdA, and D66 and the CDA would not govern with the PVV. The result is a centre-right minority with 66 seats that must find votes issue by issue: from JA21 and others on the right for asylum and budgets, from the left for climate and Europe. Dutch commentators call it an experiment; the country has no tradition of minority rule." },
        { type: "section", head: "The fragmented right", md:
          "The populist right is split as never before. The PVV, down to 19 seats after the January split, competes with JA21, Forum for Democracy and the farmers' BBB. The rebels who left Wilders complained that he is the PVV's only member, so no one can challenge him, and wanted a less hostile stance toward the new government. Together the right-wing opposition still has more than 40 seats." },
        { type: "section", head: "The left", md:
          "GroenLinks–PvdA, the merged Green and Labour list, fell to 20 seats, and its leader Frans Timmermans, a former EU climate commissioner, resigned on election night. The left supports the government on climate and Europe but opposes its welfare cuts and tougher asylum rules." },
        { type: "compare", head: "Two views of the Jetten government",
          left: { head: "Supporters", md:
            "A return to the centre and to competence after the chaos of the Schoof years, with a positive agenda on housing." },
          right: { head: "Critics", md:
            "A weak minority that ignores the millions who voted for the right and will fall at the first big fight." } }
      ],
      takeaways: [
        "Rob Jetten leads a D66–VVD–CDA minority government that must win opposition votes issue by issue.",
        "Geert Wilders's PVV lost 11 seats in 2025 and seven MPs in a January 2026 split.",
        "Dilan Yeşilgöz (VVD) is defence minister and deputy PM; Mark Rutte, the former PM, leads NATO."
      ],
      check: { q: "Why did the Netherlands end up with a minority government?",
        choices: ["The king insisted", "Parties ruled out the combinations that would have made a majority", "The PVV joined the coalition"], answer: 1,
        explain: "The VVD would not govern with GroenLinks–PvdA and D66 and the CDA would not govern with the PVV, so no majority could be formed." },
      sources: [
        { title: "Rob Jetten's team: who is who in the new Dutch cabinet", publisher: "DutchNews", url: "https://www.dutchnews.nl/2026/02/rob-jettens-team-who-is-who-in-the-new-dutch-cabinet", date: "2026-02" },
        { title: "Seven lawmakers quit Dutch far-right leader Wilders's party", publisher: "Euronews", url: "https://euronews.com/2026/01/20/seven-lawmakers-quit-dutch-far-right-leader-wilders-party-in-blow-to-leadership", date: "2026-01-20" },
        { title: "Just 1,200 votes between leading parties: 6 things to know", publisher: "DutchReview", url: "https://dutchreview.com/news/things-to-know-dutch-election-results-2025/", date: "2025-10" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "nl-5", kind: "story", asOf: "2026-10-22",
      title: "ASML and the chip war",
      dek: "One Dutch company makes the machines every advanced chip needs. Washington wants China cut off; Beijing is its biggest customer.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/nl/nl-5-hero.webp",
          alt: "Illustration of a vast clean room lit in yellow light, with a huge boxy machine the size of a bus and small figures in white suits working beside it.",
          caption: "An EUV machine is about the size of a bus, costs around €200 million and ships in dozens of crates.",
          credit: "Illustration — not a photograph",
          prompt: "A vast clean room lit in warm yellow light, a huge boxy white and grey machine the size of a bus with panels and pipes, several small figures in white full-body suits working beside it seen from behind, gleaming floor, precise and futuristic, no logos, no legible text." },
        { type: "section", head: "What happened", md:
          "ASML, based in Veldhoven near Eindhoven, grew out of a Philips lab in the 1980s. After decades of research it became the only company able to build extreme ultraviolet lithography machines, which print the tiniest circuits on silicon. Every leading-edge chip from [[unit:tw|Taiwan]]'s TSMC, Samsung in [[unit:kr|South Korea]] or Intel needs them. In 2019, under US pressure, the Dutch government stopped licensing EUV exports to [[unit:cn|China]]; from 2023 it also restricted older but still advanced deep ultraviolet (DUV) machines." },
        { type: "facts", head: "ASML in numbers", rows: [
          ["EUV machines shipped in 2025", "48"],
          ["Price of one EUV machine", "Roughly €200 million; newer models more"],
          ["China's share of sales", "About a third in 2025; about a fifth expected in 2026"],
          ["Sales forecast for 2026", "€36–40 billion"],
          ["Main customers", "TSMC, Samsung, Intel, SK Hynix"]
        ] },
        { type: "section", head: "Why it's so hard to copy", md:
          "An EUV machine fires lasers at droplets of molten tin 50,000 times a second to make light, then bounces it off the smoothest mirrors ever made, from Germany's Zeiss, onto a silicon wafer. It contains around 100,000 parts from hundreds of suppliers in Europe, the US and Asia. China is pouring money into building its own, but most experts think it is years behind." },
        { type: "section", head: "Caught in the middle", md:
          "Chinese firms rushed to buy DUV machines before the rules tightened, and for a while China was ASML's biggest market, about a third of sales in 2025. As controls bite, that share is falling to about a fifth in 2026. Washington keeps pressing for more, including limits on servicing machines already in China; bills in Congress would ban DUV sales outright. Beijing warns of retaliation, and it controls rare earths and other materials Dutch industry needs." },
        { type: "section", head: "The AI boom", md:
          "For now the AI boom has more than made up for lost Chinese sales. Demand for advanced memory and processors for data centres pushed ASML to raise its 2026 forecast to €36–40 billion. The company's value makes it one of Europe's biggest firms, and a major taxpayer and employer in Brabant. Its executives have warned that if the Dutch business climate worsens, through tax rules or limits on skilled migrants, it could grow elsewhere." },
        { type: "section", head: "The Dutch chip cluster", md:
          "ASML sits at the heart of a cluster of high-tech firms and suppliers around Eindhoven, known as the Brainport region, built on Philips's old research labs. The government launched a multibillion-euro plan in 2024, Project Beethoven, to improve housing, transport and schools there after ASML hinted it might expand abroad. For the Dutch, keeping ASML happy is now treated as a matter of national strategy." },
        { type: "compare", head: "Two views of export controls",
          left: { head: "Washington's view", md:
            "Advanced chips power weapons and surveillance; letting China make them with Western tools endangers allies' security." },
          right: { head: "Industry's worry", md:
            "Controls push China to build its own machines, cost European firms customers and turn a Dutch company into a pawn." } },
        { type: "section", head: "What's next", md:
          "The Dutch government decides on ASML's export licences itself, but coordinates closely with Washington. The next test is whether it agrees to curb servicing of machines already in China." }
      ],
      takeaways: [
        "ASML is the only maker of EUV machines, essential for the most advanced chips.",
        "Under US pressure the Dutch stopped EUV sales to China in 2019 and restricted DUV machines from 2023.",
        "China's share of ASML's sales is falling, but the AI boom has kept the company growing."
      ],
      check: { q: "Since when has the Netherlands withheld licences for EUV machine exports to China?",
        choices: ["2009", "2019", "2026"], answer: 1,
        explain: "In 2019, under US pressure, the Dutch government stopped issuing EUV export licences for China." },
      sources: [
        { title: "ASML's China sales slump as export curbs bite", publisher: "Caixin", url: "https://www.caixinglobal.com/2026-04-16/asmls-china-sales-slump-as-export-curbs-bite-102434749.html", date: "2026-04-16" },
        { title: "ASML raises 2026 sales forecast on AI chip demand", publisher: "Quartz", url: "https://qz.com/asml-2026-sales-forecast-raised-ai-chip-demand-041526", date: "2026-04" },
        { title: "ASML's China revenue expected to collapse in 2026", publisher: "Heise", url: "https://heise.de/-10773273", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "nl-6", kind: "story", asOf: "2026-10-22",
      title: "The Nexperia seizure",
      dek: "The Dutch took control of a Chinese-owned chipmaker with a 1952 law. China cut off its chips, and car factories around the world felt it.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/nl/nl-6-hero.webp",
          alt: "Illustration of a car assembly line with half-built car bodies on a conveyor, robotic arms frozen still, and no workers, under factory lights.",
          caption: "In October 2025 carmakers warned that a shortage of Nexperia chips could halt production lines.",
          credit: "Illustration — not a photograph",
          prompt: "A long car assembly line with half-built car bodies on a conveyor, orange robotic arms frozen in place, no workers, rows of factory lights overhead, an empty quiet floor, a sense of sudden stoppage, no logos, no legible text." },
        { type: "section", head: "What happened", md:
          "Nexperia, based in Nijmegen, makes simple but essential chips, such as transistors and diodes, used by the billion in cars and electronics. It was once part of Philips and has been owned since 2019 by Wingtech, a Chinese company. On 30 September 2025 the Dutch economy minister used the 1952 Goods Availability Act, for the first time ever, to block Nexperia from moving assets or changing management. A court suspended its Chinese chief executive and put Wingtech's shares under an independent administrator." },
        { type: "facts", head: "Timeline", rows: [
          ["30 September 2025", "Dutch government invokes the 1952 law"],
          ["4 October 2025", "China bans exports of Nexperia chips made in China"],
          ["October–November 2025", "Carmakers warn of shortages"],
          ["November 2025", "Dutch suspend the order after talks with China"],
          ["11 February 2026", "Court upholds the curbs and orders an investigation"]
        ] },
        { type: "section", head: "Why the Dutch acted", md:
          "The government said it had found serious governance failures and feared that technology and production would be moved to China, leaving Europe short of chips in a crisis. The [[unit:us|United States]] had added Wingtech to its trade blacklist in 2024, and a new US rule in 2025 extended restrictions to companies it owned, which put Nexperia's American business at risk. Critics in China and some in Europe said the Dutch were acting for Washington." },
        { type: "section", head: "China's response", md:
          "On 4 October Beijing banned exports of chips from Nexperia's large packaging plant in Dongguan, where most of its products are finished. Within weeks, carmakers in Europe, Japan and the US warned that lines could stop. Nexperia's Chinese unit began acting independently of the Dutch headquarters. After talks between the governments, the Netherlands suspended its order in November and China eased the export ban, but the company remains split and the court case continues." },
        { type: "section", head: "Philips's heirs", md:
          "Nexperia began life as the standard-products division of NXP, itself spun off from Philips. Many Dutch officials had long worried that key parts of the country's chip know-how had passed into foreign hands. The case pushed the government to look harder at other Chinese stakes in Dutch tech firms under its investment-screening law." },
        { type: "compare", head: "Two views of the seizure",
          left: { head: "The Dutch government's view", md:
            "A company vital to Europe's supply chains was being run against the law and the national interest; the state had to step in." },
          right: { head: "Wingtech's and Beijing's view", md:
            "The Netherlands expropriated a lawful Chinese investment under US pressure, violating the rules it claims to defend." } },
        { type: "section", head: "Why it matters", md:
          "The episode showed both sides' leverage. Europe can control what happens inside its borders, but China controls much of the world's chip packaging, rare earths and battery materials, and can cut them off quickly. For other European governments weighing Chinese takeovers, from ports to power grids, the Nexperia case became a warning in both directions." },
        { type: "section", head: "What's next", md:
          "The Enterprise Chamber's investigation could take months. Wingtech says it will keep fighting to regain control, and Nexperia has been building up supply outside China." }
      ],
      takeaways: [
        "In September 2025 the Dutch used a 1952 law, for the first time, to take control of Chinese-owned Nexperia.",
        "China banned exports of Nexperia chips from its Chinese plant, threatening car production worldwide.",
        "The Dutch suspended their order in November 2025, but a court has kept Wingtech's control frozen."
      ],
      check: { q: "What did China do after the Dutch intervened at Nexperia?",
        choices: ["Bought ASML", "Banned exports of Nexperia chips made in China", "Closed the port of Rotterdam"], answer: 1,
        explain: "Beijing blocked exports from Nexperia's Chinese plant, where most of its chips are finished, hitting carmakers." },
      sources: [
        { title: "Dutch seize Chinese-owned chipmaker in first use of 1952 law", publisher: "Bloomberg Law", url: "https://news.bloomberglaw.com/tech-and-telecom-law/dutch-seize-chinese-owned-chipmaker-in-first-use-of-1952-law", date: "2025-10" },
        { title: "Netherlands halts order on chipmaker Nexperia", publisher: "Mobile World Live", url: "https://www.mobileworldlive.com/europe/netherlands-halts-order-on-chipmaker-nexperia/", date: "2025-11" },
        { title: "Nexperia feud extended as court orders probe into chipmaker", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-02-11/nexperia-feud-extended-as-court-orders-probe-into-chipmaker", date: "2026-02-11" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "nl-7", kind: "story", asOf: "2026-10-22",
      title: "Wilders's fall and a minority experiment",
      dek: "The far right won in 2023, brought down its own government in 2025, and lost to a liberal by 30,000 votes.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/nl/nl-7-hero.webp",
          alt: "Illustration of a new suburb of identical brick terraced houses under construction beside a canal and flat green fields, with cranes and a row of wind turbines on the horizon.",
          caption: "Building homes was D66's central promise: the coalition aims for 100,000 a year.",
          credit: "Illustration — not a photograph",
          prompt: "A new suburb of identical red-brick terraced houses under construction beside a straight canal and flat green fields, scaffolding and two tower cranes, a row of distant wind turbines on the horizon, big pale sky, orderly and hopeful, no people close up, no legible text." },
        { type: "section", head: "What happened", md:
          "Wilders's 2023 victory, on promises to cut immigration sharply, produced a coalition of the PVV, VVD, the new NSC and the farmers' BBB under Prime Minister Dick Schoof. It was fractious from the start. In June 2025 Wilders demanded an immediate asylum freeze; when partners refused, he pulled out and the government fell. Voters punished him. In October 2025 the PVV dropped from 37 to 26 seats, and D66, campaigning on housing and optimism, rose from 9 to 26 and won by about 29,700 votes." },
        { type: "facts", head: "The 2025 result", rows: [
          ["D66", "26 seats (+17)"],
          ["PVV", "26 seats (−11)"],
          ["VVD", "22 seats (−2)"],
          ["GroenLinks–PvdA", "20 seats (−5)"],
          ["CDA", "18 seats (+13)"],
          ["JA21", "9 seats (+8)"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Voters were tired of instability: three governments had collapsed since 2021. The PVV's year in power had produced little change on asylum, partly because laws were slow and partly because of infighting. D66's Jetten ran a positive campaign promising ten new towns and faster building, and the CDA revived under a calm new leader. NSC, a reformist party that won 20 seats in 2023, was wiped out." },
        { type: "section", head: "Asylum still dominates", md:
          "The new government keeps a tough line. Its asylum minister must carry out laws drafted under Schoof that create a two-tier status for refugees and limit family reunion, while the EU's new migration pact takes effect. Towns are again being asked to open reception centres, a source of local protests." },
        { type: "section", head: "Housing and nitrogen", md:
          "The housing shortage runs to several hundred thousand homes. A 2019 court ruling that the government was failing to limit nitrogen pollution of protected nature has stalled thousands of building projects, because each must prove it will not add nitrogen. The coalition wants to buy out or shrink some livestock farms near nature areas, which led to large tractor protests in the past, and to ease building rules." },
        { type: "section", head: "The new parliament", md:
          "The 2025 election produced 15 parties in a 150-seat House, and the three governing parties need at least ten more votes on every bill. The likeliest partners are JA21 on the right, which shares the coalition's line on migration and budgets, and GroenLinks–PvdA on the left for climate and Europe. Smaller parties such as the Christian SGP and ChristenUnie can also tip close votes. That gives every party in the middle a kind of veto." },
        { type: "section", head: "Who governs where", md:
          "Below the national level, power is spread out. The 12 provinces handle spatial planning, nature and regional transport, and the 342 municipalities run social care, housing permits and the reception of asylum seekers. That is why local councils' willingness to open asylum centres, or approve new housing estates, so often decides whether national promises are kept." },
        { type: "compare", head: "Two readings of 2025",
          left: { head: "The centre's reading", md:
            "Voters rewarded competence and hope over anger; the far right was tested in power and failed." },
          right: { head: "The right's reading", md:
            "Right-wing parties together still won around 70 seats; voters wanted strict migration rules, just without the chaos." } },
        { type: "section", head: "What's next", md:
          "The budget, presented on 15 September 2026, needs opposition votes in both chambers. If it fails, the government could too." }
      ],
      takeaways: [
        "Wilders brought down the Schoof government in June 2025 over asylum and lost 11 seats in the October election.",
        "D66 won by about 29,700 votes and formed a minority government with the VVD and CDA.",
        "Asylum, housing and the nitrogen rules that block building remain the hardest issues."
      ],
      check: { q: "What blocks thousands of Dutch building projects?",
        choices: ["A shortage of bricks", "Rules on nitrogen pollution after a 2019 court ruling", "A ban on new towns"], answer: 1,
        explain: "A 2019 Council of State ruling requires projects to show they won't add nitrogen to protected nature areas, stalling many." },
      sources: [
        { title: "Official election results confirm 26 seats for D66 and PVV", publisher: "NL Times", url: "https://nltimes.nl/2025/11/07/official-election-results-confirm-26-seats-d66-pvv-change-final-exit-polls", date: "2025-11-07" },
        { title: "Prinsjesdag 2026: a budget in search of a majority", publisher: "ABN AMRO", url: "https://www.abnamro.com/research/en/our-research/prinsjesdag-2026-a-budget-in-search-of-a-majority", date: "2026-09-15" },
        { title: "Schoof cabinet", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Schoof_cabinet", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "nl-12", kind: "spotlight", asOf: "2026-10-22",
      title: "A port and a court",
      dek: "Rotterdam moves Europe's goods; The Hague judges the world's worst crimes. Both have become front lines.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/nl/nl-12-hero.webp",
          alt: "Illustration of a huge container port at dusk with stacks of coloured containers, tall gantry cranes and a container ship at the quay, lights coming on.",
          caption: "Rotterdam handled about 428 million tonnes of cargo in 2025, more than Antwerp and Hamburg combined.",
          credit: "Illustration — not a photograph",
          prompt: "A huge container port at dusk with long stacks of coloured shipping containers, tall gantry cranes in a row, a large container ship at the quay, orange and blue lights coming on, flat water reflecting them, industrial and vast, no logos, no legible text." },
        { type: "facts", head: "Port and courts", rows: [
          ["Rotterdam cargo, 2025", "428 million tonnes; 14.2 million containers (TEU)"],
          ["Next biggest", "Antwerp-Bruges 267m tonnes; Hamburg 115m"],
          ["International Court of Justice", "The UN's court for disputes between states"],
          ["International Criminal Court", "Tries individuals for genocide and war crimes"],
          ["US sanctions on ICC officials", "Expanded through 2026"]
        ] },
        { type: "section", head: "Europe's gateway", md:
          "Rotterdam is by far Europe's biggest port, handling more cargo than Antwerp and Hamburg together. Oil, gas, coal, grain and containers arrive here and go up the Rhine by barge, rail and pipeline into [[unit:de|Germany]] and beyond. It hosts huge refineries and chemical plants, and it is building hydrogen and carbon-storage projects for the energy transition. Its importance makes it a target: Dutch police seize tonnes of cocaine there every year, smuggled from Latin America." },
        { type: "section", head: "Security worries", md:
          "Ports have become part of the contest with [[unit:cn|China]] and [[unit:ru|Russia]]. Chinese firms run terminals in many European ports, and the EU debates how much access to allow. Sanctions on Russia require customs officers to check cargoes for banned goods, and authorities worry about sabotage of pipelines and cables in the North Sea. NATO has used Rotterdam to move military equipment toward eastern Europe." },
        { type: "section", head: "The city of courts", md:
          "The Hague calls itself the 'international city of peace and justice'. It hosts the International Court of Justice, which rules on cases between states, such as South Africa's genocide case against [[unit:il|Israel]], and the International Criminal Court, which issued an arrest warrant for Russia's Vladimir Putin in 2023 and for Israel's Benjamin Netanyahu in 2024. Former Philippine president Rodrigo Duterte was flown there in March 2025 to face charges of crimes against humanity." },
        { type: "section", head: "Sanctions on the court", md:
          "The US, which is not a member of the ICC, has responded with sanctions. From early 2025 Washington sanctioned the court's prosecutor, then several judges and deputy prosecutors, and in August 2026 the court's president, Tomoko Akane, freezing any US assets and cutting them off from American banks. The court says it will not be deterred. The Dutch government, as host, says it supports the court but has avoided open confrontation with Washington." },
        { type: "section", head: "The NATO summit", md:
          "In June 2025 The Hague hosted a NATO summit that agreed to raise defence spending to 5% of GDP by 2035: 3.5% for core defence and 1.5% for related security. It was Mark Rutte's first summit as secretary general, and he flattered and managed Donald Trump to keep the alliance together. The Netherlands, long below 2%, is now raising spending fast." },
        { type: "compare", head: "Two views of the ICC",
          left: { head: "Supporters", md:
            "No one should be above the law; the court is the only place where leaders accused of atrocities can be tried when their own states won't." },
          right: { head: "Critics, including the US", md:
            "The court claims jurisdiction over citizens of countries that never joined it and pursues democracies' leaders for political reasons." } },
        { type: "section", head: "Why it matters", md:
          "Both the port and the courts tie a small country to the world's biggest quarrels, and test whether a mid-sized ally can keep good relations with Washington while defending institutions Washington attacks." }
      ],
      takeaways: [
        "Rotterdam is Europe's biggest port, handling more cargo than Antwerp and Hamburg together.",
        "The Hague hosts the UN's International Court of Justice and the International Criminal Court.",
        "The US has sanctioned ICC officials, including its president in 2026, putting the Dutch host in a bind."
      ],
      check: { q: "Which court in The Hague tries individuals for war crimes and genocide?",
        choices: ["The International Court of Justice", "The International Criminal Court", "The European Court of Human Rights"], answer: 1,
        explain: "The International Criminal Court tries individuals; the International Court of Justice settles disputes between states." },
      sources: [
        { title: "Rotterdam port throughput falls 1.7% in 2025", publisher: "Container News", url: "https://container-news.com/rotterdam-port-throughput-falls-1-7-in-2025/", date: "2026-01" },
        { title: "US unveils sanctions on ICC in move court condemns as assault on rule of law", publisher: "Graphic / AFP", url: "https://www.graphic.com.gh/international/international-news/us-unveils-sanctions-on-icc-in-move-court-condemns-as-assault-on-rule-of-law.html", date: "2026" },
        { title: "Duterte case: ICC Presidency constitutes Trial Chamber III", publisher: "International Criminal Court", url: "https://www.icc-cpi.int/news/duterte-case-icc-presidency-constitutes-trial-chamber-iii", date: "2026-04-29" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "nl-8", kind: "now", asOf: "2026-10-22",
      title: "Where things stand",
      dek: "A fragile minority government, a budget that needs opposition votes, and a country trying to stay friends with both Washington and Beijing's customers.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/nl/nl-8-hero.webp",
          alt: "Illustration of flat green polder fields crossed by straight canals at sunrise, with a windmill, a row of poplars and modern wind turbines in the distance.",
          caption: "A polder landscape: about a quarter of the Netherlands lies below sea level.",
          credit: "Illustration — not a photograph",
          prompt: "Flat green polder fields crossed by long straight canals at sunrise, a traditional windmill beside the water, a row of poplars, modern white wind turbines in the distance, mist over the fields, a huge pale sky, calm and ordered, no people, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Government:** D66, VVD and CDA, 66 of 150 seats, in office since February.\n" +
          "- **Budget:** presented 15 September; needs opposition votes in both chambers.\n" +
          "- **Opposition:** a split right (PVV, JA21, FvD, BBB) and a weakened left.\n" +
          "- **Chips:** ASML's China sales falling; the Nexperia case still in court.\n" +
          "- **Defence:** rising toward NATO's 3.5% core target." },
        { type: "section", head: "The Netherlands in the world", md:
          "The Dutch are among [[unit:ua|Ukraine]]'s most committed backers, having supplied F-16 fighters and pledged billions in aid, and they pursue Russia over MH17 in international courts. They are close to [[unit:de|Germany]], their largest trading partner, and to [[unit:gb|the UK]]. With the [[unit:us|United States]], ties are tested by tariffs, the ICC and chip controls; with [[unit:cn|China]], by ASML and Nexperia. In the EU, the Jetten government is more open to joint defence spending than its predecessors but still wary of shared debt." },
        { type: "section", head: "The economy", md:
          "Growth is modest, unemployment low at about 4%, and public finances solid by European standards, with debt under half of GDP. The big pressures are an ageing population, labour shortages, the cost of the energy transition and of defence, and US tariffs on European goods. The housing shortage holds back young people and companies that want to hire them." },
        { type: "section", head: "What voters want", md:
          "Polls show voters want more homes, lower costs, less immigration and stable government. Trust in politics is low after the childcare-benefits scandal and years of collapses. The biggest risk for Jetten is the one that ended his predecessors: a coalition partner, or the opposition parties he relies on, deciding that bringing him down pays more than keeping him in office." },
        { type: "section", head: "Three scenarios", md:
          "- **The experiment works.** Issue-by-issue deals pass budgets and asylum laws, and the minority model lasts to 2030.\n" +
          "- **Early collapse.** A budget or asylum fight brings the government down and forces another election.\n" +
          "- **A new majority.** One opposition party, perhaps JA21, joins or formally backs the coalition." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Autumn 2026:** budget votes in the House and Senate\n" +
          "- **Autumn 2026:** ASML's results and any new US limits on servicing in China\n" +
          "- **2026–27:** the Nexperia investigation\n" +
          "- **March 2027:** provincial elections, which decide the Senate" },
        { type: "section", head: "Connections", md:
          "The Dutch story runs through [[unit:cn]] (ASML and Nexperia), [[unit:us]] (chip controls and the ICC), [[unit:tw]] and [[unit:kr]] (ASML's biggest customers), [[unit:de]] (Rotterdam's hinterland), [[unit:ua]] and [[unit:ru]] (F-16s and MH17) and [[unit:id]] (the colonial past)." },
        { type: "section", head: "Defence and Europe", md:
          "Dutch defence spending, below 2% of GDP for decades, is rising fast toward NATO's new 3.5% core target. The government is buying air defence, frigates and drones, and it has agreed to pool some purchases with Germany and the Nordic countries. In Brussels, the Jetten government is more open to joint EU defence projects than its predecessors, but still resists new shared debt." },
        { type: "section", head: "Repairing trust", md:
          "The government has promised to finish compensating the families wrongly accused in the childcare-benefits scandal, a process that has taken years, and to pay Groningen residents for earthquake damage. Both are tests of whether the Dutch state can admit mistakes and fix them." }
      ],
      takeaways: [
        "Rob Jetten's minority government depends on opposition votes for its first budget.",
        "The Netherlands balances US demands on chips and the ICC against its trade with China.",
        "Provincial elections in March 2027 will decide the Senate and test the government."
      ],
      check: { q: "Why do the March 2027 provincial elections matter nationally?",
        choices: ["They choose the king", "Provincial councils elect the Senate", "They decide the prime minister"], answer: 1,
        explain: "Members of the 12 provincial councils elect the 75-member Senate, which must pass every law." },
      sources: [
        { title: "Prinsjesdag 2026: Dutch 2027 tax plan explained", publisher: "IamExpat", url: "https://www.iamexpat.nl/expat-info/dutch-news/prinsjesdag-2026-whats-proposed-postponed-scrapped-new-budget", date: "2026-09" },
        { title: "Jetten minority cabinet races Prinsjesdag budget talks", publisher: "PolitiCap", url: "https://politicap.eu/2026/08/16/jetten-minority-cabinet-races-prinsjesdag-budget-talks-as-opposition-leverage-rises/", date: "2026-08-16" },
        { title: "Jetten cabinet", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jetten_cabinet", date: "2026" }
      ]
    }
  ]
});
