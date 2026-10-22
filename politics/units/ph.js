/* ============================================================
   Unit 39 — Philippines 🇵🇭
   Research note and sources: tools/research/ph.md
   Current as of 22 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("ph", {
  id: "ph",
  asOf: "2026-10-22",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ph-1", kind: "snapshot", asOf: "2026-10-22",
      title: "The Philippines in brief",
      dek: "An island democracy of 112 million, a US ally on China's doorstep, where two political dynasties, the Marcoses and the Dutertes, are at war.",
      blocks: [
        { type: "map", src: "maps/ph.svg",
          alt: "Locator map of South-East Asia with the Philippines highlighted, an archipelago of more than 7,000 islands between the South China Sea and the Pacific, with Luzon in the north and Mindanao in the south, and a small globe showing its place in the world.",
          caption: "The Philippines is an archipelago of more than 7,000 islands; Luzon in the north and Mindanao in the south are the largest.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Manila"],
          ["People", "About 112 million"],
          ["System", "Presidential republic; president limited to one six-year term"],
          ["President", "Ferdinand 'Bongbong' Marcos Jr., since 2022"],
          ["Vice-president", "Sara Duterte, on trial in the Senate"],
          ["Next election", "May 2028"],
          ["Ally", "Mutual defence treaty with the United States since 1951"]
        ] },
        { type: "section", head: "Why it's here", md:
          "The Philippines sits on the front line of the contest between the [[unit:us|United States]] and [[unit:cn|China]]. It is a treaty ally of Washington, hosts US forces at nine bases, lies just south of [[unit:tw|Taiwan]], and faces China's coast guard almost weekly over reefs in the South China Sea. It is also one of Asia's liveliest and most chaotic democracies, where politics is dominated by families, celebrities and personal feuds." },
        { type: "section", head: "Who holds power", md:
          "Power centres on a directly elected president who serves a single six-year term. Ferdinand Marcos Jr., son of the dictator overthrown in 1986, won in 2022 in alliance with Sara Duterte, daughter of his predecessor Rodrigo Duterte, who was elected vice-president separately. The alliance has collapsed. Rodrigo Duterte is now in The Hague awaiting trial at the International Criminal Court, and his daughter faces an impeachment trial in the Senate." },
        { type: "section", head: "The mood in 2026", md:
          "It has been a bad year. A scandal over billions of pesos stolen from flood-control projects has reached senators and the president's allies. The Middle East war cut oil supplies, and in March Marcos declared a national energy emergency; growth fell to the weakest in 17 years outside the pandemic, and inflation passed 7% in April. Chinese ships fired water cannon at Philippine vessels near Scarborough Shoal in July, while Manila chaired ASEAN." },
        { type: "section", head: "An archipelago nation", md:
          "Filipinos speak more than 170 languages, though Filipino and English are official and widely used. About 80% are Catholic, a legacy of Spanish rule; a Muslim minority lives mainly in Mindanao in the south, where a long insurgency ended in a 2014 peace deal and an autonomous Bangsamoro region. About 10 million Filipinos work or live abroad, and the money they send home is a pillar of the economy." },
        { type: "section", head: "Dynasties", md:
          "Most provinces are dominated by a few political families, and the constitution's ban on dynasties has never been put into law. The Marcoses rule Ilocos Norte in the north; the Dutertes rule Davao City in the south. Parties are weak and politicians switch sides freely, so alliances between clans matter more than ideology. That is why the Marcos–Duterte split has shaken the whole system." },
        { type: "callout", tone: "why", md:
          "The Philippines shows how a democracy can be both vibrant and captured by dynasties, and how a middle power stands up to China with the help of a distant ally." },
        { type: "section", head: "The economy", md:
          "Before 2026 the Philippines was one of Asia's faster-growing economies, at 5–6% a year, driven by consumer spending, remittances and a large call-centre and outsourcing industry that employs more than a million people. Poverty has fallen but remains high, especially in rural areas and Mindanao. The 2026 oil shock and the corruption scandal knocked growth down to its weakest in 17 years outside the pandemic ([[lesson:ph-6]])." }
      ],
      takeaways: [
        "The Philippines is a US treaty ally of 112 million on the front line of the South China Sea dispute.",
        "The 2022 alliance between Ferdinand Marcos Jr. and Sara Duterte has collapsed into open war.",
        "Political dynasties dominate a system where parties are weak."
      ],
      check: { q: "How many terms may a Philippine president serve?",
        choices: ["Two four-year terms", "One six-year term", "Unlimited five-year terms"], answer: 1,
        explain: "The 1987 constitution limits presidents to a single six-year term." },
      sources: [
        { title: "Philippine president declares energy emergency as impact of Iran war felt", publisher: "Al Jazeera", url: "https://aljazeera.com/news/2026/3/25/philippine-president-declares-energy-emergency-as-impact-of-iran-war-felt", date: "2026-03-25" },
        { title: "Explainer: Philippine Senate coup, new majority, lame duck president, flood control scandal", publisher: "Khaleej Times", url: "https://www.khaleejtimes.com/world/asia/explainer-philippine-senate-coup-new-majority-lame-duck-president-flood-control-scandal", date: "2026" },
        { title: "Philippines", publisher: "Britannica", url: "https://www.britannica.com/place/Philippines", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ph-2", kind: "power", asOf: "2026-10-22",
      title: "A president, a Congress and the courts",
      dek: "The 1987 constitution, written after the fall of Marcos's dictatorship, copies the American model and is designed to stop anyone ruling for too long.",
      blocks: [
        { type: "diagram", src: "img/ph/ph-2-power.svg",
          alt: "Diagram of power in the Philippines. Voters directly elect the president, Ferdinand Marcos Jr., for one six-year term, and separately elect the vice-president, Sara Duterte. They also elect a 24-member Senate nationwide and a House of Representatives of about 317 members. The House can impeach and the Senate tries impeachments. The Supreme Court reviews the constitutionality of laws. The next election is in May 2028.",
          caption: "The president and vice-president are elected separately and can come from rival camps.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The 1987 constitution", md:
          "After People Power toppled Ferdinand Marcos Sr. in 1986 ([[lesson:ph-11]]), a commission wrote a new constitution approved in a referendum in 1987. Its authors had one fear above all: another dictator. So the president serves a single six-year term, declarations of [[martial-law|martial law]] are limited to 60 days and can be reviewed by Congress and the Supreme Court, and a long bill of rights protects free speech and the press." },
        { type: "section", head: "President and vice-president", md:
          "The president is head of state and government and commander-in-chief, appoints the cabinet and judges and controls a huge share of public spending. The vice-president is elected separately, with no requirement to be on the same ticket, and has few formal powers. In 2022 Marcos and Sara Duterte ran together informally and won in landslides; by 2024 they had become enemies, and the vice-president left the cabinet." },
        { type: "section", head: "Congress", md:
          "The Senate has 24 members elected nationwide for six-year terms, half every three years; national fame, often from television, film or sport, helps win. The House of Representatives has about 317 members, most elected by district, with a fifth chosen through a party-list system meant for marginalised groups. Members of both chambers have long controlled 'pork barrel' funds for projects in their areas, a source of patronage and corruption ([[lesson:ph-6]])." },
        { type: "section", head: "Impeachment", md:
          "The House can impeach the president, vice-president, Supreme Court justices and other officials with the votes of a third of its members; the Senate then sits as a court, and conviction needs two-thirds, 16 of the 24 senators. A convicted official is removed and barred from office. The constitution allows only one impeachment proceeding against the same official per year, a rule the Supreme Court used in 2025 to void the first case against Sara Duterte." },
        { type: "section", head: "Courts and local power", md:
          "The Supreme Court has 15 justices appointed by the president from lists prepared by a judicial council, and it often rules on political fights. An independent Ombudsman investigates officials, and a special anti-graft court, the Sandiganbayan, tries them. Local government is strong: governors and mayors control police, contracts and votes, which is why national politicians court local clans." },
        { type: "section", head: "Elections", md:
          "Elections are held every three years on the second Monday of May: presidential elections every six, with midterm elections for half the Senate, the whole House and local offices in between. Voting is by machine-counted paper ballot. Campaigns are expensive and personal; vote-buying is common, and violence around local races kills candidates and campaigners almost every cycle. A Commission on Elections runs the polls." },
        { type: "section", head: "Martial law limits", md:
          "The 1987 rules on [[martial-law|martial law]] were tested in 2017, when Duterte declared it across Mindanao after Islamic State-linked militants seized the city of Marawi. Congress extended it three times, and the Supreme Court upheld it; it ended in 2019. Critics argued the extensions stretched the safeguards; supporters said the five-month battle for Marawi, which left the city in ruins, showed why the power exists." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Supporters", md:
            "Term limits, free elections, a combative press and active courts have stopped any leader since 1986 from becoming a dictator." },
          right: { head: "Critics", md:
            "Weak parties, dynasties and pork-barrel funds mean the same families rule while the poor majority sees little change." } }
      ],
      takeaways: [
        "The 1987 constitution limits the president to one six-year term and restricts martial law.",
        "The vice-president is elected separately and can be the president's rival.",
        "The House impeaches; the Senate convicts with 16 of 24 votes."
      ],
      check: { q: "How many senators must vote to convict an impeached official?",
        choices: ["12 of 24", "16 of 24", "All 24"], answer: 1,
        explain: "Conviction needs two-thirds of the Senate: 16 of its 24 members." },
      sources: [
        { title: "Philippines", publisher: "Britannica", url: "https://www.britannica.com/place/Philippines", date: "n.d." },
        { title: "Impeachment probe of Philippine VP Sara Duterte voided by Supreme Court", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/7/25/impeachment-probe-of-philippine-vp-sara-duterte-voided-by-supreme-court", date: "2025-07-25" },
        { title: "Impeachment trial of Philippine Vice President Sara Duterte begins", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/7/6/impeachment-trial-of-philippine-vice-president-sara-duterte-begins", date: "2026-07-06" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "ph-9", kind: "founding", asOf: "2026-10-22",
      title: "Three centuries of Spain, then America",
      dek: "Spanish friars and soldiers made the islands one colony; Filipino revolutionaries declared Asia's first republic in 1898, only for the US to take over.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ph/ph-9-hero.webp",
          alt: "Illustration of an old stone church with a broad bell tower and thick buttresses beside a plaza with palm trees, under a bright tropical sky.",
          caption: "Spain's baroque churches, built of coral stone and brick, still stand in towns across the islands.",
          credit: "Illustration — not a photograph",
          prompt: "An old Spanish colonial baroque church of weathered coral stone with massive buttresses and a broad square bell tower beside a quiet plaza with coconut palms, bright tropical afternoon sky with white clouds, timeless and calm, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From barangays to a republic", items: [
          ["Before 1500s", "Independent communities (barangays) and Muslim sultanates in the south"],
          ["1521", "Magellan arrives; he is killed at Mactan by the chief Lapulapu"],
          ["1565–1571", "Spain conquers the islands and founds Manila"],
          ["1896", "Revolution begins; José Rizal is executed"],
          ["12 June 1898", "Emilio Aguinaldo declares independence"],
          ["1898", "Spain sells the islands to the US for $20 million"],
          ["1899–1902", "Philippine–American War"]
        ] },
        { type: "section", head: "Before Spain", md:
          "Before Europeans arrived, the islands were home to hundreds of independent communities called barangays, linked by trade with China, Borneo and the wider Malay world. Islam spread from the 14th century, and sultanates ruled Sulu and parts of Mindanao. In 1521 Ferdinand Magellan, sailing for Spain, landed in the Visayas and was killed at Mactan by the local chief Lapulapu, now a national hero." },
        { type: "section", head: "The Spanish colony", md:
          "From 1565 Spain conquered most of the islands and founded Manila in 1571, naming the colony after King Philip II. For 250 years the Manila galleons carried Chinese silk and porcelain across the Pacific to Mexico in exchange for silver. Catholic friars ran parishes, schools and huge estates and converted most lowland Filipinos. The Muslim south and many mountain peoples resisted conquest for centuries." },
        { type: "section", head: "Rizal and the revolution", md:
          "In the 19th century a Filipino educated class, the ilustrados, demanded reform. José Rizal's novels exposed abuses by friars and officials; Spain executed him in Manila in December 1896, making him the nation's martyr. A secret society, the Katipunan, led by Andrés Bonifacio, had launched a revolution that August. Leadership passed to Emilio Aguinaldo, who declared independence on 12 June 1898, still the national day." },
        { type: "section", head: "The American takeover", md:
          "The United States, at war with Spain, destroyed the Spanish fleet in Manila Bay in May 1898 and, under the Treaty of Paris that December, bought the islands for $20 million. Aguinaldo's republic fought back. The Philippine–American War of 1899–1902 killed about 4,300 American soldiers and at least 20,000 Filipino fighters, and estimates of civilian deaths from fighting, hunger and disease run to 200,000 or more." },
        { type: "section", head: "The Manila galleons and the Chinese", md:
          "The galleon trade made Manila one of the first truly global cities, linking Asia and the Americas. A large Chinese merchant community, the Sangleys, grew up outside the walls of Intramuros, the Spanish city; they were taxed, restricted and several times massacred. Their descendants, many intermarried with Filipinos, became a powerful part of the business elite, and many prominent families today have Chinese ancestry." },
        { type: "compare", head: "Two views of the American era",
          left: { head: "A tutelage", md:
            "The US built schools, spread English and set up elections, preparing the islands for self-government and a close alliance." },
          right: { head: "A conquest", md:
            "A brutal war crushed Asia's first republic, and American rule protected a landowning elite whose dominance lasts today." } },
        { type: "section", head: "Why it matters", md:
          "Spain gave the country its religion and many of its names; America gave it English, its political institutions and its closest alliance." }
      ],
      takeaways: [
        "Spain ruled the islands from the 1560s until 1898 and made most Filipinos Catholic.",
        "Emilio Aguinaldo declared independence on 12 June 1898 after a revolution inspired by José Rizal.",
        "The US bought the islands from Spain and crushed the new republic in a war from 1899 to 1902."
      ],
      check: { q: "Who declared Philippine independence on 12 June 1898?",
        choices: ["José Rizal", "Emilio Aguinaldo", "Lapulapu"], answer: 1,
        explain: "Aguinaldo declared independence at Kawit; Rizal had been executed in 1896." },
      sources: [
        { title: "History of the Philippines", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Philippines", date: "n.d." },
        { title: "Philippine-American War", publisher: "Britannica", url: "https://www.britannica.com/event/Philippine-American-War", date: "n.d." },
        { title: "José Rizal", publisher: "Britannica", url: "https://www.britannica.com/biography/Jose-Rizal", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ph-3", kind: "history", asOf: "2026-10-22",
      title: "From colony to People Power and back",
      dek: "War, independence, a dictatorship and a peaceful revolution, then a cycle of populists that brought the dictator's son back to the palace.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ph/ph-3-hero.webp",
          alt: "Illustration of Manila Bay at sunset with a seawall promenade, palm trees, a ruined stone fortress wall and old warships on the horizon.",
          caption: "Manila was one of the most heavily destroyed cities of the Second World War.",
          credit: "Illustration — not a photograph",
          prompt: "A wide bay at sunset seen from a seawall promenade with palm trees, the broken stone walls of an old fortress in the foreground, grey warships far away on the horizon, a glowing orange and purple sky, reflective and historic, no people close up, no flags, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1935", "Commonwealth under Manuel Quezon"],
          ["1942–1945", "Japanese occupation; Battle of Manila"],
          ["4 July 1946", "Independence from the United States"],
          ["1972", "Ferdinand Marcos Sr. declares martial law"],
          ["1986", "People Power topples Marcos; Corazon Aquino president"],
          ["2001", "President Estrada ousted by protests"],
          ["2016", "Rodrigo Duterte elected; the drug war begins"],
          ["2022", "Ferdinand Marcos Jr. elected"]
        ] },
        { type: "section", head: "1. War and independence", md:
          "The US promised independence and set up a self-governing Commonwealth in 1935. Japan invaded in December 1941; American and Filipino troops surrendered at Bataan and Corregidor, and thousands died on the Bataan Death March. Guerrillas fought on until US forces returned in 1944. The month-long Battle of Manila in 1945 killed about 100,000 civilians. The Philippines became independent on 4 July 1946, keeping US bases and close ties." },
        { type: "section", head: "2. Marcos", md:
          "Ferdinand Marcos Sr., elected in 1965 and re-elected in 1969, declared martial law in 1972 ([[lesson:ph-10]]), closed Congress and the press and ruled by decree for more than a decade. When his main rival, Benigno 'Ninoy' Aquino, returned from exile in 1983, he was shot dead at Manila airport. Anger at the killing and at a rigged 1986 snap election brought millions onto the streets." },
        { type: "section", head: "3. People Power", md:
          "In February 1986 military rebels and huge crowds on Manila's EDSA avenue forced Marcos to flee to Hawaii ([[lesson:ph-11]]), and Ninoy's widow, Corazon Aquino, became president. She survived several coup attempts. Fidel Ramos, president from 1992, brought stability and reform. Joseph Estrada, a film star elected in 1998, was ousted in 2001 by a second wave of protests over corruption, and his vice-president Gloria Macapagal Arroyo took over." },
        { type: "section", head: "4. The populist turn", md:
          "After Benigno Aquino III, son of Ninoy and Cory, governed from 2010 to 2016, voters chose Rodrigo Duterte, the tough-talking mayor of Davao, who promised to kill drug dealers. His drug war killed thousands ([[lesson:ph-12]]). He moved closer to China and cursed US and EU critics, yet remained popular. In 2022 Ferdinand Marcos Jr. and Sara Duterte combined their families' bases to win the presidency and vice-presidency." },
        { type: "section", head: "5. The return of the Marcoses", md:
          "Marcos Jr.'s victory, 36 years after his family fled, followed a long campaign to rehabilitate his father's image, much of it on social media, presenting the martial law years as a golden age. Historians and victims' groups contest that account. In office, Marcos Jr. has turned back toward the United States and confronted China at sea, which helped break his alliance with the Dutertes ([[lesson:ph-5]])." },
        { type: "section", head: "Insurgencies", md:
          "Two rebellions ran alongside these decades. The communist New People's Army, founded in 1969, grew under martial law to tens of thousands of fighters. In the Muslim south, the Moro National Liberation Front and later the Moro Islamic Liberation Front fought for self-rule; a 2014 peace deal created the Bangsamoro autonomous region in 2019. Smaller jihadist groups, such as Abu Sayyaf, carried out kidnappings and bombings." },
        { type: "compare", head: "Two views of 1986",
          left: { head: "A democratic triumph", md:
            "A peaceful uprising restored democracy and inspired movements across Asia and Eastern Europe." },
          right: { head: "An unfinished revolution", md:
            "The old elite returned to power, land reform stalled, and poverty remained, so voters later turned to strongmen." } }
      ],
      takeaways: [
        "The Philippines became independent from the US on 4 July 1946 after Japanese occupation.",
        "People Power ended the Marcos dictatorship in 1986; a second uprising ousted Estrada in 2001.",
        "Rodrigo Duterte's drug war and Marcos Jr.'s 2022 victory marked a populist turn."
      ],
      check: { q: "Whose assassination in 1983 set off the movement that toppled Marcos Sr.?",
        choices: ["José Rizal", "Benigno 'Ninoy' Aquino", "Fidel Ramos"], answer: 1,
        explain: "Ninoy Aquino was shot dead at Manila airport on his return from exile in August 1983." },
      sources: [
        { title: "History of the Philippines", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Philippines", date: "n.d." },
        { title: "Ferdinand Marcos", publisher: "Britannica", url: "https://www.britannica.com/biography/Ferdinand-E-Marcos", date: "n.d." },
        { title: "Battle of Manila (1945)", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Battle_of_Manila_(1945)", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "ph-10", kind: "past", asOf: "2026-10-22",
      title: "Martial law, 1972–1981",
      dek: "Ferdinand Marcos Sr. used a communist threat to suspend democracy, jail opponents and enrich his family, a legacy still fought over today.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ph/ph-10-hero.webp",
          alt: "Illustration of a grand white colonial palace beside a river at night, with soldiers' trucks parked at its gates and searchlights sweeping the sky.",
          caption: "Malacañang Palace in Manila, seat of the Marcos government.",
          credit: "Illustration — not a photograph",
          prompt: "A grand white colonial palace with arched windows beside a dark river at night, military trucks parked at tall iron gates, two searchlights sweeping across the cloudy sky, dim streetlamps, oppressive and quiet, no people close up, no flags, no legible text." },
        { type: "facts", head: "Martial law", rows: [
          ["Declared", "21 September 1972 (announced 23 September)"],
          ["Lifted", "Formally January 1981; Marcos kept decree powers"],
          ["Detained", "About 70,000, according to Amnesty International"],
          ["Tortured", "About 34,000"],
          ["Killed", "About 3,240"],
          ["Wealth taken", "Estimated $5–10 billion"]
        ] },
        { type: "section", head: "Why Marcos acted", md:
          "Marcos was barred from a third term in 1973. Citing bombings, a growing communist insurgency and a Muslim rebellion in Mindanao, he declared martial law in September 1972. Congress was closed, newspapers shut, and opponents, including Senator Benigno Aquino, arrested. A new constitution in 1973 let him rule indefinitely. Many in the business elite and the United States, which valued its bases, initially accepted it." },
        { type: "section", head: "Repression", md:
          "Amnesty International and later Philippine commissions documented about 70,000 people detained, 34,000 tortured and 3,240 killed during the martial law years. Soldiers and police made critics 'disappear'. A 2013 law recognised the victims and created a compensation fund paid from recovered Marcos wealth; more than 11,000 claims were approved. The army grew from about 60,000 to more than 250,000 personnel, and the New People's Army insurgency spread." },
        { type: "section", head: "Crony capitalism", md:
          "Marcos and his wife Imelda handed monopolies over sugar, coconuts and other industries to friends and relatives, known as cronies, while foreign debt soared. The Philippines, once among Asia's richest countries, fell behind its neighbours. After 1986 the government's commission on good government recovered billions of pesos, and Swiss banks returned hundreds of millions of dollars, but much of the fortune was never found." },
        { type: "section", head: "The fall", md:
          "The economy collapsed in the early 1980s debt crisis. Ninoy Aquino's assassination in 1983 united the middle class, the Catholic Church and business against the regime. Marcos called a snap election for February 1986, claimed victory over Corazon Aquino amid evidence of fraud, and was ousted within weeks by People Power ([[lesson:ph-11]])." },
        { type: "section", head: "The 1973 constitution", md:
          "Marcos used martial law to remake the political system. A new constitution, ratified in 1973 through citizen assemblies that critics called a sham, replaced the American-style system with a parliamentary one under which he ruled by decree. He held referendums to extend his rule and, after formally lifting martial law in 1981, won a presidential election boycotted by the main opposition. Imelda Marcos became governor of Metro Manila and a minister." },
        { type: "section", head: "Resistance", md:
          "Opposition took many forms. Students and church groups organised underground; journalists ran 'mosquito press' newsletters; the communist insurgency grew in the countryside. Benigno Aquino ran for parliament from prison in 1978. Some opponents were tortured to death, and some, like Aquino, went into exile in the United States after his release on medical grounds in 1980." },
        { type: "compare", head: "Two memories of martial law",
          left: { head: "Marcos loyalists", md:
            "An era of discipline, order and great public works, from roads to the cultural centre, before democracy's chaos returned." },
          right: { head: "Victims and historians", md:
            "A kleptocracy that jailed, tortured and killed thousands and left the country deep in debt." } },
        { type: "section", head: "Why it matters", md:
          "The fight over how to remember martial law shapes today's politics, from school textbooks to the legitimacy of the president who bears his father's name." }
      ],
      takeaways: [
        "Ferdinand Marcos Sr. declared martial law in 1972 and ruled by decree until 1986.",
        "About 70,000 people were detained and thousands tortured or killed.",
        "Marcos and his cronies took billions, much of it never recovered."
      ],
      check: { q: "Why did Marcos Sr. declare martial law, by his own account?",
        choices: ["To hold free elections", "To counter communist and Muslim insurgencies and unrest", "To end US bases"], answer: 1,
        explain: "Marcos cited bombings and insurgencies; critics say his real aim was to stay in power beyond his term limit." },
      sources: [
        { title: "Martial law under Ferdinand Marcos", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Martial_law_under_Ferdinand_Marcos", date: "n.d." },
        { title: "Ferdinand Marcos", publisher: "Britannica", url: "https://www.britannica.com/biography/Ferdinand-E-Marcos", date: "n.d." },
        { title: "History of the Philippines", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Philippines", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "ph-11", kind: "past", asOf: "2026-10-22",
      title: "People Power, February 1986",
      dek: "For four days, nuns, students and families blocked tanks on a Manila highway, and a dictator flew into exile without a massacre.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ph/ph-11-hero.webp",
          alt: "Illustration of a wide city highway packed with a vast crowd holding up yellow ribbons, with a few armoured vehicles stopped among them.",
          caption: "Crowds on EDSA, Manila's main highway, in February 1986; yellow was the colour of Corazon Aquino's campaign.",
          credit: "Illustration — not a photograph",
          prompt: "A wide multi-lane city highway packed with a vast peaceful crowd seen from behind, many yellow ribbons and banners without words, a few armoured vehicles halted among the people, low concrete buildings and an overpass, hazy daylight, hopeful and tense, no faces, no flags, no legible text." },
        { type: "facts", head: "The four days", rows: [
          ["7 February", "Snap election; both sides claim victory"],
          ["22 February", "Defence Minister Juan Ponce Enrile and General Fidel Ramos rebel"],
          ["22–25 February", "Hundreds of thousands, perhaps more, gather on EDSA"],
          ["25 February", "Aquino and Marcos both sworn in; Marcos flies out that night"],
          ["Killed", "Very few; the army did not fire on the crowds"]
        ] },
        { type: "section", head: "The stolen election", md:
          "Marcos called a snap presidential election for 7 February 1986 to reassure the United States. Corazon Aquino, a housewife with no political experience, ran against him with the backing of the opposition and the Catholic Church. The official count gave Marcos the win, but computer technicians walked out in protest at manipulated figures, and the Catholic bishops declared the result fraudulent." },
        { type: "section", head: "The rebellion", md:
          "On 22 February Defence Minister Juan Ponce Enrile and the deputy armed forces chief, General Fidel Ramos, barricaded themselves in two military camps on EDSA and withdrew support from Marcos. Cardinal Jaime Sin went on Radio Veritas and called on Filipinos to protect them. Hundreds of thousands answered, filling the highway, bringing food, flowers and rosaries and kneeling in front of tanks sent to crush the rebels." },
        { type: "section", head: "Exile", md:
          "Soldiers refused to fire on the crowds, and units defected one after another. On 25 February both Aquino and Marcos held inaugurations. That night, after Washington told Marcos to 'cut and cut cleanly', US helicopters flew him, Imelda and their family from the palace, and he went into exile in Hawaii, where he died in 1989. Crowds entering the palace found Imelda's famous collection of shoes." },
        { type: "section", head: "The legacy", md:
          "People Power became a model for peaceful revolutions from South Korea to Eastern Europe. But the new democracy was fragile: rebel officers attempted at least seven coups against Aquino, and the elite families who had opposed Marcos returned to dominate Congress. The Marcoses came home in 1991; Imelda and her children won seats in Congress, and in 2022 her son became president." },
        { type: "section", head: "Washington's role", md:
          "The United States had backed Marcos for two decades because of its bases at Clark and Subic Bay, among the largest outside America. As the crisis grew, President Reagan sent envoys, and the US Senate condemned the election fraud. On the final day, Senator Paul Laxalt, a close ally of Reagan, told Marcos by phone to 'cut and cut cleanly'. US helicopters then carried the family to Clark and on to Guam and Hawaii." },
        { type: "section", head: "After EDSA", md:
          "Aquino freed political prisoners, restored a free press and set up a commission to recover the Marcos wealth. A new constitution was approved in 1987. Land reform was promised but limited, partly because Aquino's own family owned a huge sugar estate. In 1991 the Senate voted to close the US bases, ending nearly a century of American military presence until new agreements brought US forces back." },
        { type: "compare", head: "Two views of EDSA",
          left: { head: "A miracle", md:
            "Ordinary Filipinos, unarmed and praying, faced down a dictatorship and restored democracy." },
          right: { head: "A military revolt", md:
            "The decisive act was the army's defection; the crowds protected it, but elites, not the poor, took power." } },
        { type: "section", head: "Why it matters", md:
          "EDSA is the founding myth of today's democracy, and a second EDSA in 2001 showed street protest could again remove a president." }
      ],
      takeaways: [
        "After a fraudulent snap election, a military rebellion and mass protests ousted Marcos in February 1986.",
        "Crowds on EDSA blocked tanks, and soldiers refused to fire.",
        "Corazon Aquino became president; the Marcos family later returned to power."
      ],
      check: { q: "Where did Marcos go after People Power?",
        choices: ["Spain", "Hawaii", "Japan"], answer: 1,
        explain: "US helicopters flew the Marcos family out, and they went into exile in Hawaii." },
      sources: [
        { title: "People Power Revolution", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/People_Power_Revolution", date: "n.d." },
        { title: "Corazon Aquino", publisher: "Britannica", url: "https://www.britannica.com/biography/Corazon-Aquino", date: "n.d." },
        { title: "Ferdinand Marcos", publisher: "Britannica", url: "https://www.britannica.com/biography/Ferdinand-E-Marcos", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "ph-4", kind: "players", asOf: "2026-10-22",
      title: "Marcos, the Dutertes and the Senate",
      dek: "A president in his last two years, a vice-president fighting removal, her father in a Dutch cell, and a Senate that keeps changing hands.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ph/ph-4-hero.webp",
          alt: "Illustration of a grand neoclassical government building with tall columns and a wide staircase in Manila, on a tree-lined boulevard at dusk.",
          caption: "The Senate has sat as an impeachment court since July 2026.",
          credit: "Illustration — not a photograph",
          prompt: "A grand neoclassical government building with tall white columns and a wide stone staircase on a palm-lined boulevard at dusk, warm lights in the tall windows, a few cars passing, solemn and tense, no people close up, no flags, no legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "Ferdinand Marcos Jr.", role: "President, since June 2022",
            img: "img/ph/portrait-marcos.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Son of the dictator, nicknamed 'Bongbong'. Restored the US alliance and confronted China at sea; his last two years are dominated by the flood-control scandal and his war with the Dutertes." },
          { name: "Sara Duterte", role: "Vice-president, since June 2022",
            img: "img/ph/portrait-saraduterte.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Former mayor of Davao, impeached twice and on trial in the Senate. Leads early polls for the 2028 presidential election." },
          { name: "Rodrigo Duterte", role: "President 2016–2022",
            img: "img/ph/portrait-rodrigoduterte.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Arrested in March 2025 and flown to The Hague; the ICC confirmed charges of crimes against humanity in April 2026. Still idolised by millions." },
          { name: "Martin Romualdez", role: "House speaker 2022–2025",
            img: "img/ph/portrait-romualdez.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Marcos's cousin and long his chief ally in Congress; stepped down as speaker in September 2025 as the flood-control scandal grew." },
          { name: "Alan Peter Cayetano", role: "Senator; Senate president May–June 2026",
            img: "img/ph/portrait-cayetano.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A Duterte ally who seized the Senate presidency in a May 2026 coup, then lost control to a rival bloc weeks later." },
          { name: "Leni Robredo", role: "Vice-president 2016–2022; mayor of Naga",
            img: "img/ph/portrait-robredo.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "The liberal opposition's leading figure, defeated by Marcos in 2022 and elected mayor of Naga City in 2025." }
        ] },
        { type: "section", head: "How the alliance broke", md:
          "The 'UniTeam' of 2022 united the Marcos base in the north with the Duterte base in the south. It began to crack in 2023 over confidential funds, China policy and the 2028 succession. In 2024 Sara Duterte quit the cabinet and said she had arranged for Marcos, his wife and the House speaker to be killed if she was killed, a remark she later called a joke. In March 2025 Marcos's government let police arrest her father on an ICC warrant." },
        { type: "section", head: "A Senate up for grabs", md:
          "Because conviction needs 16 of 24 senators, control of the Senate has become the battleground. Duterte allies did well in the May 2025 midterm elections. In May 2026, on the same day the House impeached Sara Duterte for the second time, senators aligned with the Dutertes ousted Senate President Tito Sotto and installed Alan Peter Cayetano. In June a rival bloc around Sherwin Gatchalian took control. Every vote in the trial is now counted senator by senator." },
        { type: "section", head: "The road to 2028", md:
          "Marcos cannot run again. The election in May 2028 will choose a new president and vice-president, and Sara Duterte leads early polls. A conviction would bar her from office for life; an acquittal could make her stronger. The Marcos camp has no obvious successor, and the flood-control scandal has damaged allies in Congress ([[lesson:ph-6]])." },
        { type: "section", head: "Imelda and the family", md:
          "Imelda Marcos, the dictator's widow, turned 97 in 2026 and remains a symbol of the family's survival. The president's sister Imee is a senator who has sided with the Dutertes in several fights, a sign of how loyalties cross family lines. The president's son Sandro is a congressman and House majority leader, often mentioned as a future candidate." },
        { type: "compare", head: "Two views of the feud",
          left: { head: "Marcos camp", md:
            "Institutions are holding the Dutertes to account for corruption, threats and thousands of killings." },
          right: { head: "Duterte camp", md:
            "A president is using Congress and a foreign court to destroy his rivals and clear the way for his own successor in 2028." } }
      ],
      takeaways: [
        "The Marcos–Duterte alliance of 2022 has collapsed into the country's biggest political feud.",
        "Control of the Senate, which decides Sara Duterte's fate, changed hands twice in 2026.",
        "Sara Duterte leads early polls for the 2028 presidential election."
      ],
      check: { q: "Why does the Senate matter so much in the Marcos–Duterte feud?",
        choices: ["It elects the president", "It tries impeachments and decides whether to convict Sara Duterte", "It controls the police"], answer: 1,
        explain: "The Senate sits as the impeachment court; conviction needs 16 of 24 senators." },
      sources: [
        { title: "Pro-Duterte senators' coup: Sotto ousted, Cayetano takes post", publisher: "Philstar", url: "https://www.philstar.com/headlines/2026/05/11/2527195/pro-duterte-senators-coup-sotto-ousted-cayetano-takes-post/amp/", date: "2026-05-11" },
        { title: "Philippine Senate coup: Gatchalian elected as 'acting president' amid Cayetano standoff", publisher: "Khaleej Times", url: "https://www.khaleejtimes.com/world/asia/philippine-senate-coup-gatchalian-elected-as-acting-president-amid-cayetano-standoff", date: "2026-06" },
        { title: "Sara Duterte's 2028 prospects: still the frontrunner, but no longer invulnerable", publisher: "Gulf News", url: "https://gulfnews.com/opinion/sara-dutertes-2028-prospects-still-the-frontrunner-but-no-longer-invulnerable-1.500643136", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "ph-5", kind: "story", asOf: "2026-10-22",
      title: "Two Dutertes on trial",
      dek: "The former president faces the International Criminal Court in The Hague, while his daughter, the vice-president, fights impeachment in Manila.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ph/ph-5-hero.webp",
          alt: "Illustration of a modern court building of pale towers and glass beside dunes and grass under a grey northern sky.",
          caption: "The International Criminal Court in The Hague, where Rodrigo Duterte is held.",
          credit: "Illustration — not a photograph",
          prompt: "A modern international court complex of pale stacked towers and green glass beside grassy dunes under a grey northern European sky, a tall fence and a quiet road in front, a few bare trees, cool and austere, no people close up, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "On 11 March 2025 police arrested Rodrigo Duterte at Manila airport on a warrant from the International Criminal Court, and within hours he was flown to The Hague. On 23 April 2026 the court's judges unanimously confirmed charges of crimes against humanity, finding substantial grounds that he played a key role in the murder of 76 people and the attempted murder of two others in his anti-drug campaign. A trial date has not been set." },
        { type: "facts", head: "The two cases", rows: [
          ["11 March 2025", "Rodrigo Duterte arrested and flown to The Hague"],
          ["5 February 2025", "House first impeaches Sara Duterte"],
          ["25 July 2025", "Supreme Court voids the first impeachment"],
          ["23 April 2026", "ICC confirms charges against Rodrigo Duterte"],
          ["11 May 2026", "House impeaches Sara Duterte again, 257–25"],
          ["6 July 2026", "Senate trial opens"],
          ["16 December 2026", "Earliest expected verdict"]
        ] },
        { type: "section", head: "The ICC case", md:
          "Duterte took the Philippines out of the ICC in 2019, after prosecutors opened an inquiry. His lawyers argued the court had no jurisdiction; the judges ruled it did, because the alleged crimes were committed while the country was still a member, and the appeals chamber agreed on 22 April 2026. Duterte, 81, denies the charges. His allies call the arrest a kidnapping; in May 2025, while in detention, he was elected mayor of Davao." },
        { type: "section", head: "The impeachment", md:
          "Sara Duterte was impeached in February 2025 over the alleged misuse of confidential funds, unexplained wealth and her threat against Marcos, but the Supreme Court voided that case because it broke the one-impeachment-a-year rule. The House impeached her again on 11 May 2026, by 257 votes to 25. The Senate trial opened on 6 July. On 13 October prosecutors withdrew three of the four articles; a spokesman said a verdict could come as early as 16 December." },
        { type: "section", head: "Politics of the trials", md:
          "Both cases are about law and about 2028. Duterte supporters rally outside the ICC and in Davao, and the family accuses Marcos of a political vendetta. Rights groups and families of drug-war victims say the cases are the first real chance of justice. Conviction would end Sara Duterte's career; acquittal, by only nine senators, would let her run for president as a martyr." },
        { type: "section", head: "The victims' families", md:
          "For families of the dead, the confirmation of charges was the first official recognition of what happened. Many had been afraid to speak while Duterte was in power. The ICC registered hundreds of victims to take part in the proceedings through lawyers. Rights groups say the case covers only a small share of the killings and want Philippine courts to prosecute police officers too." },
        { type: "compare", head: "Two views of the trials",
          left: { head: "Accountability", md:
            "No one is above the law; thousands of killings and abuse of public money must be judged." },
          right: { head: "Persecution", md:
            "A foreign court and a hostile Congress are being used to eliminate the Marcoses' rivals before 2028." } },
        { type: "section", head: "What's next", md:
          "Watch the Senate verdict, expected from mid-December, and the ICC's choice of a trial date for Rodrigo Duterte, perhaps in 2027." }
      ],
      takeaways: [
        "Rodrigo Duterte was arrested in March 2025; the ICC confirmed charges against him in April 2026.",
        "Sara Duterte was impeached a second time in May 2026; her Senate trial began in July.",
        "A Senate verdict could come from 16 December 2026; conviction needs 16 of 24 votes."
      ],
      check: { q: "Why did the Supreme Court void the first impeachment of Sara Duterte?",
        choices: ["She was not in office", "It broke the rule against more than one impeachment proceeding a year", "The Senate refused to meet"], answer: 1,
        explain: "The court ruled Congress violated the one-year bar on repeated impeachment proceedings." },
      sources: [
        { title: "ICC court sends Duterte case to trial", publisher: "Human Rights Watch", url: "https://hrw.org/news/2026/04/23/icc-court-sends-duterte-case-to-trial", date: "2026-04-23" },
        { title: "Verdict on Sara Duterte may be out December 16 — Senate court spokesman", publisher: "Rappler", url: "https://www.rappler.com/philippines/national-news/sara-duterte-impeachment-trial-verdict-target-date/", date: "2026-10-02" },
        { title: "ICYMI live updates: Sara Duterte impeachment trial (October 13, 2026)", publisher: "GMA News", url: "https://www.gmanetwork.com/news/topstories/nation/1005708/live-updates-sara-duterte-impeachment-trial-october-13-2026/story/", date: "2026-10-13" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "ph-6", kind: "story", asOf: "2026-10-22",
      title: "Floods, kickbacks and an oil shock",
      dek: "A scandal over stolen flood-control money froze public spending just as the Middle East war cut oil supplies, and growth slumped.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ph/ph-6-hero.webp",
          alt: "Illustration of a flooded city street with brown water up to the doors of shops, a half-built concrete embankment and stalled jeepneys under heavy rain.",
          caption: "Many flood-control projects paid for by the state were substandard or never built.",
          credit: "Illustration — not a photograph",
          prompt: "A flooded city street in heavy monsoon rain, brown water up to the doors of small shops, a half-finished crumbling concrete river embankment with exposed steel bars, two stalled colourful jeepneys, grey sky, frustrating and bleak, no people close up, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "In mid-2025 Marcos revealed that billions of pesos allocated to flood-control projects had gone to a small group of contractors, and that many dikes and embankments were substandard or did not exist. Investigations reached officials of the public works department, House members and senators; mass protests followed in September 2025, and the House speaker, the president's cousin Martin Romualdez, stepped down. In May 2026 Senator Jinggoy Estrada was charged with plunder, accused of taking more than 573 million pesos (about $9 million) in kickbacks." },
        { type: "facts", head: "A hard year", rows: [
          ["2025", "Flood-control scandal breaks; mass protests in September"],
          ["24 March 2026", "National energy emergency declared for one year"],
          ["April 2026", "Inflation 7.2%"],
          ["Q2 2026", "Growth 2.3%, weakest in 17 years outside the pandemic"],
          ["May 2026", "Senator Jinggoy Estrada charged with plunder"]
        ] },
        { type: "section", head: "The energy emergency", md:
          "The Philippines imports almost all its oil, much of it from the Gulf, and has no strategic petroleum reserve. When the war shut most traffic through the [[strait-of-hormuz|Strait of Hormuz]], fuel prices soared. On 24 March 2026 Marcos declared a national energy emergency for a year, letting the government buy fuel without normal tenders and act against hoarding; the energy secretary said the country had about 45 days of supply. Transport unions called it a band-aid and struck over prices." },
        { type: "section", head: "Growth stalls", md:
          "The economy had grown 5–6% a year before the pandemic and after it. In 2026 it slowed sharply: about 2.6–2.8% in the first quarter and 2.3% in the second, the weakest outside Covid in 17 years. Analysts blamed the oil shock and a sharp drop in public spending, as nervous officials froze infrastructure projects during the corruption probes. Money from Filipinos abroad, many of them in the Gulf, also came under pressure." },
        { type: "section", head: "Why it bites", md:
          "Flooding is a life-and-death issue in a country hit by about 20 typhoons a year. Every rainy season, Manila's streets turn to rivers. That made the scandal personal for millions of voters who had watched their homes flood while officials and contractors displayed luxury cars online. Trust in Congress fell, and the scandal touched figures in both the Marcos and Duterte camps." },
        { type: "section", head: "Pork-barrel politics", md:
          "The scandal is the latest of many over money lawmakers steer to projects in their districts. In 2013 the Supreme Court banned the 'Priority Development Assistance Fund' after a businesswoman was found to have channelled billions of pesos to fake charities for kickbacks; three senators, including Estrada, were charged then. Critics say the practice simply moved into the public works budget, where congressmen 'insert' projects for allied contractors." },
        { type: "compare", head: "Two views of the scandal",
          left: { head: "Marcos's view", md:
            "The president exposed the theft himself, and prosecutions prove the system is cleaning itself up." },
          right: { head: "Critics' view", md:
            "The money flowed through the president's allies in Congress; prosecutions are selective and slow." } },
        { type: "section", head: "What's next", md:
          "Watch the Sandiganbayan anti-graft court's plunder trials, the 2027 budget's limits on lawmakers' projects, and fuel prices as the energy emergency nears its end in March 2027." }
      ],
      takeaways: [
        "A scandal over stolen flood-control funds reached senators and the House leadership.",
        "Marcos declared a one-year national energy emergency in March 2026 as the Hormuz closure cut oil.",
        "Growth fell to 2.3% in the second quarter, the weakest in 17 years outside the pandemic."
      ],
      check: { q: "Why did Marcos declare a national energy emergency in March 2026?",
        choices: ["A typhoon destroyed power plants", "The Middle East war cut oil supplies through Hormuz", "Coal mines closed"], answer: 1,
        explain: "The Philippines imports almost all its oil; the war disrupted shipments through the Strait of Hormuz." },
      sources: [
        { title: "Philippine court orders senator's arrest for large-scale corruption; he surrenders and posts bail", publisher: "WTOP / AP", url: "https://wtop.com/world/2026/05/philippine-court-orders-senators-arrest-for-largescale-corruption-he-surrenders-and-posts-bail/", date: "2026-05-29" },
        { title: "Barring Covid-19, Philippines sees worst economic growth in 17 years amid Middle East war", publisher: "Khaleej Times", url: "https://www.khaleejtimes.com/world/asia/philippines-worst-economic-growth-17-years-middle-east-war", date: "2026-08" },
        { title: "Philippine president declares energy emergency as impact of Iran war felt", publisher: "Al Jazeera", url: "https://aljazeera.com/news/2026/3/25/philippine-president-declares-energy-emergency-as-impact-of-iran-war-felt", date: "2026-03-25" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "ph-7", kind: "story", asOf: "2026-10-22",
      title: "Standing up to China at sea",
      dek: "Manila publicises every clash with China's coast guard, leans on the US alliance and used its year as ASEAN chair to push for rules at sea.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ph/ph-7-hero.webp",
          alt: "Illustration of a large white coast guard ship firing a jet of water at a smaller grey patrol boat on a choppy blue sea, with a shoal of pale water nearby.",
          caption: "Chinese coast guard ships fired water cannon at Philippine vessels near Scarborough Shoal on 23 and 24 July 2026.",
          credit: "Illustration — not a photograph",
          prompt: "A large white coast guard cutter firing a powerful arc of water cannon at a smaller grey patrol boat on a choppy deep blue sea, a pale turquoise shoal and distant ships on the horizon, bright midday sun with spray, tense confrontation, no people close up, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "On 23 July 2026, as South-East Asian foreign ministers met in Manila, a Chinese coast guard ship fired water cannon at a Philippine fisheries vessel near Scarborough Shoal. The next day, the Philippine coast guard said 12 Chinese coast guard ships and three maritime militia vessels surrounded its boats, and water cannon hit two of them; one Chinese ship came within about seven metres of a Philippine boat. Beijing said it had expelled intruders." },
        { type: "facts", head: "The South China Sea", rows: [
          ["Scarborough Shoal", "Seized by China in 2012; 230 km from Luzon"],
          ["Second Thomas Shoal", "A rusting Philippine warship, grounded in 1999, serves as an outpost"],
          ["2016", "Tribunal rules for the Philippines against China's claims"],
          ["US bases", "Nine sites open to US forces under a 2014 agreement"],
          ["2026", "The Philippines chairs ASEAN"]
        ] },
        { type: "section", head: "The background", md:
          "China claims most of the South China Sea within a 'nine-dash line'. It took control of Scarborough Shoal, a rich fishing ground, after a stand-off in 2012, and in 2025 declared a nature reserve there. In 2016 an arbitral tribunal in The Hague, in a case brought by Manila, ruled that China's claims had no legal basis; China rejected the ruling. Philippine marines live aboard the BRP Sierra Madre, a Second World War-era ship deliberately run aground at Second Thomas Shoal." },
        { type: "section", head: "Marcos's strategy", md:
          "Duterte had downplayed the ruling to court Chinese investment. Marcos reversed course. His government films and publicises Chinese harassment, a policy called 'transparency', and has expanded US access to bases, including near Taiwan, and allowed a US mid-range missile system on Luzon. It has signed defence deals with [[unit:jp|Japan]] and [[unit:au|Australia]] and held joint patrols with them. The 1951 treaty commits the US to help if Philippine forces are attacked." },
        { type: "section", head: "ASEAN year", md:
          "As 2026 chair of ASEAN, Manila tried to finish a long-promised code of conduct with China, aiming for July. Negotiators remain split on whether it should be legally binding, which waters it covers and how coast guards should behave, and most ASEAN members avoid criticising Beijing directly. The water-cannon attacks during the July meetings in Manila showed how far apart the sides are. [[unit:vn|Vietnam]], another claimant, prefers quieter tactics." },
        { type: "section", head: "Fishermen in the middle", md:
          "For fishing communities in Zambales and Pangasinan on Luzon's west coast, Scarborough Shoal was for generations a rich, sheltered fishing ground. Since 2012 Chinese ships have blocked or harassed Filipino boats that try to fish there, and catches have fallen. The government gives fuel subsidies and escorts, and the coast guard takes journalists along on patrols so the world can see the confrontations." },
        { type: "compare", head: "Two views of Manila's approach",
          left: { head: "Supporters", md:
            "Exposing China's behaviour and tightening alliances deters bullying and wins international support." },
          right: { head: "Critics", md:
            "Confrontation risks a clash that could drag in the US, and costs the Philippines Chinese trade and investment." } },
        { type: "section", head: "What's next", md:
          "Watch Scarborough Shoal and the resupply missions to the Sierra Madre, and whether Sara Duterte, friendlier to China, wins in 2028." }
      ],
      takeaways: [
        "Chinese coast guard ships fired water cannon at Philippine vessels near Scarborough Shoal in July 2026.",
        "Marcos publicises Chinese harassment and has widened US access to Philippine bases.",
        "As ASEAN chair in 2026, Manila pushed for a code of conduct, with little progress."
      ],
      check: { q: "What did the 2016 arbitral ruling decide?",
        choices: ["That China owns the Spratlys", "That China's nine-dash line claim had no legal basis", "That Scarborough belongs to Vietnam"], answer: 1,
        explain: "The tribunal found China's sweeping claims had no basis under the law of the sea; China rejected it." },
      sources: [
        { title: "Philippines accuses China of using water cannon on vessels for second day", publisher: "Al Jazeera", url: "https://aljazeera.com/news/2026/7/24/philippines-accuses-china-of-using-water-cannon-on-vessels-for-second-day", date: "2026-07-24" },
        { title: "With the Philippines as ASEAN chair, a South China Sea agreement is unlikely to be concluded in 2026", publisher: "Chatham House", url: "https://www.chathamhouse.org/2025/12/philippines-asean-chair-south-china-sea-agreement-unlikely-be-concluded-2026", date: "2025-12" },
        { title: "Rhetoric vs. reality: the Philippines, ASEAN, and the South China Sea", publisher: "CSIS", url: "https://www.csis.org/analysis/rhetoric-vs-reality-philippines-asean-and-south-china-sea", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "ph-12", kind: "spotlight", asOf: "2026-10-22",
      title: "The drug war, 2016–2022",
      dek: "Rodrigo Duterte promised to kill drug dealers, and police and vigilantes killed thousands of people, most of them poor, in Manila's slums.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ph/ph-12-hero.webp",
          alt: "Illustration of a narrow alley in a crowded urban slum at night, with tin roofs, tangled power lines, candles at a small shrine and a single streetlight.",
          caption: "Most victims of the drug war were poor men in Manila's crowded neighbourhoods.",
          credit: "Illustration — not a photograph",
          prompt: "A narrow alley in a crowded urban slum at night with corrugated tin roofs and tangled overhead power lines, a single harsh streetlight, a cluster of small candles and flowers at a makeshift shrine on the ground, empty and silent, grieving, no people, no flags, no legible text." },
        { type: "facts", head: "The drug war", rows: [
          ["Launched", "July 2016, Duterte's first day in office"],
          ["Official toll", "About 6,000 killed in police operations"],
          ["Rights groups' estimates", "12,000 to 30,000 including vigilante killings"],
          ["Police campaign", "'Oplan Tokhang', knocking on suspects' doors"],
          ["ICC", "Inquiry opened 2021; Duterte arrested 2025"]
        ] },
        { type: "section", head: "Davao", md:
          "As mayor of Davao for most of the years from 1988 to 2016, Duterte turned the city from a lawless insurgent battleground into one of the country's safest, his supporters say. Rights groups documented hundreds of killings of suspected criminals by a 'Davao Death Squad'. Duterte sometimes joked about it and sometimes denied it. In 2016 he ran for president promising to do the same nationwide, and won with 39% of the vote." },
        { type: "section", head: "Tokhang", md:
          "From his first day police went door to door asking suspected users and dealers to 'surrender'; more than a million did. Police then carried out raids in which suspects were shot dead, usually, officers said, because they fought back. Masked gunmen on motorbikes killed many others. Bodies were left on streets with cardboard signs. Duterte praised the killings and promised to protect police from prosecution." },
        { type: "section", head: "The victims", md:
          "Most of the dead were poor men in urban neighbourhoods, including teenagers. The 2017 killing of 17-year-old Kian delos Santos, caught on camera, prompted protests and the first conviction of police officers for a drug-war killing. Few other cases reached court. Big drug suppliers were rarely touched, critics say, while families of victims were left in debt and fear." },
        { type: "section", head: "Popular support", md:
          "Despite the killings, polls showed most Filipinos approved of the campaign and of Duterte, who left office in 2022 with high ratings. Many felt crime and drugs had made poor areas unsafe and that the courts never worked. That support is why the ICC case divides the country, and why his daughter remains a leading candidate for 2028." },
        { type: "section", head: "The ICC inquiry", md:
          "After the ICC prosecutor opened a preliminary examination in 2018, Duterte announced the Philippines would leave the court, which took effect in March 2019. The court authorised a full investigation in 2021 covering killings from 2011, when Duterte was still mayor of Davao, to 2019. Marcos at first refused to cooperate, but as relations with the Dutertes broke down, police executed the warrant through Interpol in March 2025." },
        { type: "section", head: "A Senate inquiry", md:
          "In 2024 hearings in the House and Senate brought new testimony. A retired police colonel told lawmakers that Duterte had set up a reward system that paid officers for killings, modelled on Davao. Duterte, testifying in person, said he took 'full legal and moral responsibility' for the police's actions but denied ordering illegal killings." },
        { type: "compare", head: "Two views of the drug war",
          left: { head: "Supporters", md:
            "A necessary war that made neighbourhoods safer when courts and police had failed for decades." },
          right: { head: "Critics", md:
            "State-sanctioned mass murder of the poor, without trials, that did little to stop the drug trade." } },
        { type: "section", head: "Why it matters", md:
          "The drug war is the basis of the ICC case ([[lesson:ph-5]]) and a test of whether a popular leader can be held to account for killings." }
      ],
      takeaways: [
        "Duterte's drug war from 2016 killed about 6,000 people in police operations, by official count.",
        "Rights groups estimate 12,000 to 30,000 deaths including vigilante killings.",
        "The campaign remained popular, which is why the ICC case divides the country."
      ],
      check: { q: "Where did Rodrigo Duterte build his reputation before becoming president?",
        choices: ["As a general in Manila", "As mayor of Davao City", "As a senator"], answer: 1,
        explain: "Duterte was mayor of Davao for most of the period from 1988 to 2016." },
      sources: [
        { title: "Philippine drug war", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Philippine_drug_war", date: "n.d." },
        { title: "Rodrigo Duterte to face ICC trial after judges confirm charges", publisher: "ICTJ", url: "https://www.ictj.org/latest-news/rodrigo-duterte-face-icc-trial-after-judges-confirm-charges", date: "2026-04" },
        { title: "Rodrigo Duterte", publisher: "Britannica", url: "https://www.britannica.com/topic/Rodrigo-Duterte", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "ph-8", kind: "now", asOf: "2026-10-22",
      title: "Where things stand",
      dek: "A lame-duck president, a vice-president awaiting a verdict, a stalled economy and a sea where China pushes harder every year.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ph/ph-8-hero.webp",
          alt: "Illustration of the Manila skyline at sunset across a wide bay, with palm trees and a seawall in the foreground and fishing boats on the water.",
          caption: "Manila Bay at sunset.",
          credit: "Illustration — not a photograph",
          prompt: "A modern city skyline of towers across a wide calm bay at sunset, a seawall and coconut palms in the foreground, small outrigger fishing boats on the golden water, glowing orange and pink clouds, hopeful and uncertain, no people close up, no flags, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Presidency:** Marcos has 20 months left of his single term.\n" +
          "- **Vice-president:** Sara Duterte's Senate trial nears a verdict.\n" +
          "- **ICC:** Rodrigo Duterte awaits a trial date in The Hague.\n" +
          "- **Economy:** growth slumped and inflation rose after the oil shock.\n" +
          "- **Sea:** repeated clashes with China near Scarborough and Second Thomas Shoal." },
        { type: "section", head: "The Philippines in the world", md:
          "The alliance with the [[unit:us|United States]] is closer than at any time since US bases closed in 1992, with joint exercises and US forces at nine sites. [[unit:jp|Japan]] and [[unit:au|Australia]] have signed troop-visiting deals. Relations with [[unit:cn|China]] are tense but trade continues. About 2 million Filipinos work in the Gulf, which made the Middle East war a direct threat to families at home." },
        { type: "section", head: "Mindanao and the left", md:
          "The Bangsamoro autonomous region in Muslim Mindanao, created under the 2014 peace deal with the Moro Islamic Liberation Front, has repeatedly postponed its first parliamentary election. The communist New People's Army, which has fought since 1969, is much weaker but still active in rural areas. Both conflicts shape security policy in the south." },
        { type: "section", head: "What voters want", md:
          "Surveys put inflation, wages, jobs and corruption at the top of voters' concerns. Filipinos are among the most pro-American people in the world but also want good relations with China. Social media, where many Filipinos spend hours a day, is the main battlefield for campaigns, and disinformation networks have been documented on all sides." },
        { type: "section", head: "The economy ahead", md:
          "Economists expect a recovery in 2027 if oil prices fall and public spending resumes, but the government's 5–6% growth target for 2026 is out of reach. Filipinos abroad, from Gulf households to hospitals in Britain and the US, keep sending money home, and the outsourcing industry is adapting to artificial intelligence, which threatens many call-centre jobs." },
        { type: "section", head: "Climate", md:
          "The Philippines is among the countries most exposed to climate change. Typhoons have grown stronger, and Typhoon Haiyan in 2013 killed more than 6,000 people. Rising seas threaten Manila's low-lying districts and fishing towns. That is why the flood-control scandal hit so hard, and why the country pushes in climate talks for funding from rich nations." },
        { type: "section", head: "Three scenarios", md:
          "- **Conviction.** The Senate removes Sara Duterte, and a new contest for 2028 opens.\n" +
          "- **Acquittal.** She survives and runs for president as the favourite, promising to bring her father home.\n" +
          "- **Crisis.** Economic pain, a clash at sea or a Senate deadlock deepen instability before 2028." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **From 16 December 2026:** expected Senate verdict on Sara Duterte\n" +
          "- **2027:** possible start of Rodrigo Duterte's ICC trial\n" +
          "- **March 2027:** the energy emergency expires unless extended\n" +
          "- **May 2028:** presidential, vice-presidential and congressional elections" },
        { type: "section", head: "Connections", md:
          "The Philippines' story runs through [[unit:us]] (colonial ruler and treaty ally), [[unit:cn]] (rival at sea and trading partner), [[unit:jp]] (wartime occupier, now a security partner), [[unit:vn]] (fellow claimant in the South China Sea), [[unit:tw]] (neighbour across the Bashi Channel) and [[unit:au]] (defence partner)." }
      ],
      takeaways: [
        "Marcos's final years are dominated by the Duterte trials and the flood-control scandal.",
        "The US alliance is closer than at any time since 1992, as clashes with China continue.",
        "The May 2028 election will decide whether the Dutertes return to power."
      ],
      check: { q: "When is the next Philippine presidential election?",
        choices: ["May 2027", "May 2028", "May 2030"], answer: 1,
        explain: "Marcos's single six-year term ends in June 2028; elections are held in May 2028." },
      sources: [
        { title: "Verdict on Sara Duterte may be out December 16 — Senate court spokesman", publisher: "Rappler", url: "https://www.rappler.com/philippines/national-news/sara-duterte-impeachment-trial-verdict-target-date/", date: "2026-10-02" },
        { title: "The impending impeachment conviction of Philippine Vice President Sara Duterte", publisher: "The Diplomat", url: "https://thediplomat.com/2026/10/the-impending-impeachment-conviction-of-philippine-vice-president-sara-duterte/", date: "2026-10" },
        { title: "ICC court sends Duterte case to trial", publisher: "Human Rights Watch", url: "https://hrw.org/news/2026/04/23/icc-court-sends-duterte-case-to-trial", date: "2026-04-23" }
      ]
    }
  ]
});
