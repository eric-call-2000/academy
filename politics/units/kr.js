/* ============================================================
   Unit 18 — South Korea 🇰🇷
   Research note and sources: tools/research/kr.md
   Current as of 29 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("kr", {
  id: "kr",
  asOf: "2026-09-29",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "kr-1", kind: "snapshot", asOf: "2026-09-29",
      title: "South Korea in brief",
      dek: "A chip and shipbuilding powerhouse on the front line with North Korea, whose democracy survived a president's attempt at martial law.",
      blocks: [
        { type: "map", src: "maps/kr.svg",
          alt: "Locator map of north-east Asia with South Korea highlighted on the southern half of the Korean Peninsula, bordering North Korea, with China to the west and Japan to the east, and a small globe showing its place in the world.",
          caption: "South Korea occupies the southern half of the Korean Peninsula; the Demilitarised Zone separates it from North Korea. Both Korean states formally claim the whole peninsula.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Seoul"],
          ["People", "About 51 million"],
          ["System", "Presidential republic"],
          ["President", "Lee Jae-myung (Democratic Party), since June 2025"],
          ["Parliament", "300-seat National Assembly, Democratic Party majority"],
          ["Economy", "World leader in memory chips, ships, batteries and displays"],
          ["US troops", "About 28,500 stationed in the country"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "South Korea went from one of the world's poorest countries in the 1950s to one of its richest in two generations. Samsung and SK Hynix make most of the world's memory chips, including the high-bandwidth memory that powers AI; its shipyards build a large share of the world's big vessels; and its films, dramas and music have become global hits.\n\n" +
          "It is also on the front line of one of the world's most dangerous standoffs. Seoul lies about 50 kilometres from the border with nuclear-armed [[unit:kp|North Korea]], and the country hosts about 28,500 American troops. It sits between [[unit:cn|China]], its biggest trading partner, and [[unit:us|the United States]], its security guarantor." },
        { type: "section", head: "Who holds power", md:
          "President Lee Jae-myung, a former human rights lawyer and governor of Gyeonggi province, took office in June 2025. He won a snap election after the Constitutional Court removed his predecessor, Yoon Suk Yeol, over his declaration of martial law. Lee's liberal Democratic Party also controls the National Assembly, giving him an unusually free hand.\n\n" +
          "The conservative People Power Party, Yoon's former party, is in opposition and still divided over how to deal with his legacy." },
        { type: "section", head: "The mood in 2026", md:
          "Lee's first year brought relief after the martial-law crisis and a sweeping win for his party in local elections in June 2026. But by September his approval had fallen below 40% in some polls, dragged down by housing costs, controversial cabinet nominations and a debate over sending troops to the Strait of Hormuz. Young voters, especially young men, have turned against him." },
        { type: "section", head: "A society under pressure", md:
          "South Korea has the world's lowest birth rate, below 0.8 children per woman, and one of the fastest-ageing populations. Young people face intense competition for university places and jobs at a handful of big companies, and housing in Seoul has become unaffordable for many. Those pressures shape its politics as much as North Korea does." },
        { type: "section", head: "What South Korea wants", md:
          "Lee's government wants to lower tensions with North Korea and restart dialogue, keep the US alliance strong while protecting Korean companies from American tariffs, and balance relations with China and Japan. At home, it wants to bring down housing costs, reform the powerful prosecution service and hold those behind the martial-law attempt accountable." },
        { type: "callout", tone: "why", md:
          "South Korea's democracy is young, less than 40 years old, and in December 2024 it faced its gravest test. How it recovers, and how it handles North Korea, China and a demanding US ally, matters well beyond the peninsula." }
      ],
      takeaways: [
        "South Korea is a global leader in memory chips, ships and batteries, with about 28,500 US troops on its soil.",
        "Lee Jae-myung became president in June 2025 after his predecessor was removed over martial law.",
        "His party controls parliament and won June 2026's local elections, but his approval has fallen below 40%."
      ],
      check: { q: "Why was there a snap presidential election in June 2025?",
        choices: ["The president died", "The Constitutional Court removed Yoon Suk Yeol over his martial-law declaration", "Parliament was dissolved"], answer: 1,
        explain: "Yoon was impeached after declaring martial law in December 2024, and the Constitutional Court removed him in April 2025." },
      sources: [
        { title: "President Lee Jae Myung: A Year in Power", publisher: "Carnegie Endowment for International Peace", url: "https://carnegieendowment.org/posts/2026/06/president-lee-jae-myung-a-year-in-power", date: "2026-06" },
        { title: "Why Is Lee Jae-myung's Approval Rating Dropping?", publisher: "The Diplomat", url: "https://thediplomat.com/2026/09/why-is-lee-jae-myungs-approval-rating-dropping/", date: "2026-09" },
        { title: "Lee's approval rating rises for 2nd straight week to 37.9%: poll", publisher: "The Korea Herald", url: "https://www.koreaherald.com/article/10885801", date: "2026-09-28" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "kr-2", kind: "power", asOf: "2026-09-29",
      title: "One term, strong courts",
      dek: "A powerful president limited to a single five-year term, a parliament that can impeach, and courts that have jailed former presidents.",
      blocks: [
        { type: "diagram", src: "img/kr/kr-2-power.svg",
          alt: "Diagram of power in South Korea. Voters elect a president and a 300-seat National Assembly. The president, Lee Jae-myung, serves one five-year term with no re-election, commands the military and appoints the prime minister. The president works with the National Assembly, which has a Democratic Party majority and can impeach with a two-thirds vote. Both are checked by the nine-justice Constitutional Court, which rules on impeachments and removed Park in 2017 and Yoon in 2025, and by powerful prosecutors and courts, which have jailed several ex-presidents; prosecution reform is under way. The next elections are legislative in 2028 and presidential in 2030.",
          caption: "A strong presidency with strong checks, designed after decades of military rule.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The presidency", md:
          "South Korea's 1987 constitution, written as military rule ended, gives the president wide powers: commanding the armed forces, appointing the prime minister and cabinet, vetoing laws and directing foreign policy. To prevent another dictatorship, it limits presidents to a single five-year term with no re-election. That makes every president a lame duck in their final years, and gives each new one a strong incentive to act fast." },
        { type: "section", head: "The National Assembly", md:
          "The 300-seat National Assembly is elected every four years, mostly in single-member districts with some proportional seats. It passes laws and the budget, confirms the prime minister and can impeach the president with a two-thirds vote. In the 2024 election the Democratic Party and its allies won a large majority, which they used to impeach Yoon, and which Lee now relies on." },
        { type: "section", head: "Impeachment and the Constitutional Court", md:
          "If the Assembly impeaches a president, the president is suspended and the nine-member Constitutional Court decides whether to remove them, which needs six votes. The court removed Park Geun-hye in 2017 over a corruption scandal and Yoon Suk Yeol in 2025, unanimously, over martial law. It rejected the impeachment of Roh Moo-hyun in 2004." },
        { type: "section", head: "Prosecutors and former presidents", md:
          "Almost every former South Korean president has faced prosecution or disgrace after leaving office: two ex-military rulers were convicted in the 1990s, Roh Moo-hyun died by suicide during a corruption probe in 2009, and Lee Myung-bak and Park Geun-hye were jailed. Critics say prosecutors have too much power and are used for political revenge. In 2025 the Democratic majority voted to break up the prosecution service and move its investigative powers to new agencies, a change that conservatives oppose." },
        { type: "section", head: "Parties", md:
          "Korean politics is sharply divided between a liberal camp, today the Democratic Party, which favours engagement with North Korea and a bigger welfare state, and a conservative camp, today the People Power Party, which stresses the US alliance and a tough line on Pyongyang. Party names change frequently, but the two camps have alternated in power since 1998." },
        { type: "section", head: "Local government", md:
          "Since 1995 South Koreans have elected their mayors, governors and local councils every four years. Big-city mayors, above all Seoul's, command large budgets and national attention, and several have gone on to run for president, including Lee himself, who was governor of Gyeonggi province around Seoul. Local races are often read as a verdict on the sitting president and a rehearsal for the next national election." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Its defenders", md:
            "The checks worked: when a president tried to impose martial law, parliament, the courts and citizens stopped him within hours and removed him lawfully." },
          right: { head: "Its critics", md:
            "A single term encourages rushed policy, and a winner-takes-all culture turns each change of power into a round of prosecutions against the losers." } }
      ],
      takeaways: [
        "The president serves a single five-year term, a safeguard written after military rule ended in 1987.",
        "Parliament can impeach; the Constitutional Court removed presidents in 2017 and 2025.",
        "Most former presidents have been prosecuted, and prosecution reform is a political battleground."
      ],
      check: { q: "How many terms can a South Korean president serve?",
        choices: ["One five-year term", "Two four-year terms", "Unlimited terms"], answer: 0,
        explain: "The 1987 constitution limits presidents to a single five-year term, to prevent another long dictatorship." },
      sources: [
        { title: "Constitution of the Republic of Korea", publisher: "Constitute Project", url: "https://www.constituteproject.org/constitution/Republic_of_Korea_1987", date: "n.d." },
        { title: "South Korea profile", publisher: "BBC News", url: "https://www.bbc.com/news/world-asia-pacific-15289563", date: "n.d." },
        { title: "Lee Jae Myung", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lee_Jae_Myung", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "kr-9", kind: "founding", asOf: "2026-09-29",
      title: "Liberation and division",
      dek: "Freed from Japanese rule in 1945, Korea was split between American and Soviet forces. In 1948 two rival states were born.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr/kr-9-hero.webp",
          alt: "Illustration of a traditional Korean palace gate with curved tiled roofs in Seoul, with a crowd seen from behind gathered in front, in 1940s clothing.",
          caption: "Crowds celebrated liberation from Japan on 15 August 1945, now Korea's national day.",
          credit: "AI illustration — not a photograph",
          prompt: "A grand traditional Korean palace gate with sweeping curved tiled roofs and painted wooden eaves, a large crowd in 1940s clothing seen from behind gathered in front, bright August sun, joyful and historic, no faces, no flags, no legible text." },
        { type: "timeline", head: "From colony to republic", items: [
          ["1910", "Japan annexes Korea"],
          ["1 March 1919", "Independence protests across Korea"],
          ["15 Aug 1945", "Japan surrenders; Korea liberated"],
          ["1945", "US and Soviet forces divide Korea at the 38th parallel"],
          ["10 May 1948", "UN-supervised election in the South"],
          ["15 Aug 1948", "Republic of Korea founded; Syngman Rhee president"],
          ["9 Sep 1948", "North Korea founded under Kim Il Sung"]
        ] },
        { type: "section", head: "Colonial rule", md:
          "For five centuries Korea was ruled by the Joseon dynasty. Japan made it a protectorate in 1905 and annexed it in 1910. Colonial rule brought railways, factories and schools, but also land seizures, harsh policing and, from the late 1930s, attempts to erase Korean identity: Koreans were forced to take Japanese names and worship at Shinto shrines, the Korean language was banned in schools, and hundreds of thousands were mobilised as labourers, soldiers and, in the case of many women, as 'comfort women' for the Japanese army. On 1 March 1919 mass peaceful protests for independence were brutally suppressed." },
        { type: "section", head: "A line on a map", md:
          "When Japan surrendered in August 1945, two young American officers, working overnight with a map, proposed dividing Korea at the 38th parallel: Soviet troops would accept the Japanese surrender in the north, American troops in the south. The division was meant to be temporary. As the Cold War set in, talks on a unified government failed, and each occupier backed its own side." },
        { type: "section", head: "Two states", md:
          "In May 1948 the South held an election under UN supervision, which the North refused. On 15 August 1948 the Republic of Korea was proclaimed in Seoul, with Syngman Rhee, a US-educated nationalist who had spent decades in exile, as president. In September the North proclaimed the Democratic People's Republic of Korea under Kim Il Sung (see [[unit:kp]]). Each claimed to be the only legitimate government of all Korea. Rhee ruled in an increasingly authoritarian way, and a leftist uprising on Jeju Island in 1948 was crushed with the killing of tens of thousands of islanders." },
        { type: "section", head: "Rhee's fall", md:
          "After the Korean War (1950–53), Rhee rigged elections to stay in power. In April 1960 student-led protests after a fraudulent election forced him to resign and flee to Hawaii, the April Revolution. A brief democratic government followed, until General Park Chung-hee seized power in a military coup in May 1961 ([[lesson:kr-10]])." },
        { type: "compare", head: "Two views of the founding",
          left: { head: "The conservative view", md:
            "The 1948 founding of a free, anti-communist republic, backed by the US and the UN, laid the foundation of today's prosperity." },
          right: { head: "Critics", md:
            "The division was imposed by outsiders, Rhee's state relied on former collaborators with Japan, and it began with massacres such as Jeju." } },
        { type: "section", head: "Why it still matters", md:
          "Korea is still divided at roughly the line drawn in 1945. The colonial period remains the root of South Korea's complicated relationship with Japan, and arguments over whether to celebrate 1948 as the founding, or the provisional government in exile of 1919, still divide left and right." }
      ],
      takeaways: [
        "Japan ruled Korea as a colony from 1910 to 1945, suppressing Korean identity.",
        "In 1945 US and Soviet forces divided Korea at the 38th parallel.",
        "Two rival states were founded in 1948: the Republic of Korea in the South and the DPRK in the North."
      ],
      check: { q: "Where was Korea divided in 1945?",
        choices: ["The Han River", "The 38th parallel", "The Yalu River"], answer: 1,
        explain: "US officers proposed the 38th parallel as a temporary line between Soviet and American occupation zones." },
      sources: [
        { title: "Korea: History", publisher: "Britannica", url: "https://www.britannica.com/place/Korea/History", date: "n.d." },
        { title: "Syngman Rhee", publisher: "Britannica", url: "https://www.britannica.com/biography/Syngman-Rhee", date: "n.d." },
        { title: "The Korean War, 1950–1953", publisher: "US Department of State, Office of the Historian", url: "https://history.state.gov/milestones/1945-1952/korean-war", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "kr-3", kind: "history", asOf: "2026-09-29",
      title: "War, dictatorship, democracy",
      dek: "From the ruins of the Korean War through three decades of military rule to a hard-won democracy and a cultural superpower.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr/kr-3-hero.webp",
          alt: "Illustration of a huge crowd of students and workers filling a wide Seoul avenue in the 1980s, with tear-gas haze and office buildings.",
          caption: "Mass protests in June 1987 forced the military government to accept direct presidential elections.",
          credit: "AI illustration — not a photograph",
          prompt: "A huge crowd of students and workers seen from above filling a wide city avenue in the late 1980s, drifting haze, office buildings and a traditional palace gate in the distance, muted film colours, determined and historic, no legible banners, no faces in close-up." },
        { type: "timeline", head: "The short version", items: [
          ["1945–48", "Korea divided after Japanese rule; two states founded"],
          ["1950–53", "The Korean War; an armistice, not a peace treaty"],
          ["1961–79", "Park Chung-hee's military rule and industrialisation"],
          ["1980", "The Gwangju massacre"],
          ["1987", "Democracy after mass protests"],
          ["2017", "Park Geun-hye removed from office"],
          ["2024–25", "Martial law, impeachment and a new president"]
        ] },
        { type: "section", head: "1. Division and war", md:
          "Korea was a Japanese colony from 1910 to 1945. After Japan's defeat, the peninsula was divided along the 38th parallel between a Soviet-backed North and an American-backed South. In June 1950 the North invaded. The war drew in the United States, the UN and [[unit:cn|China]], killed millions and ended in 1953 with an armistice that still divides the peninsula at the Demilitarised Zone. No peace treaty was ever signed." },
        { type: "section", head: "2. The developmental dictatorship", md:
          "General Park Chung-hee seized power in a 1961 coup and ruled until he was assassinated by his own intelligence chief in 1979. His government directed credit to family conglomerates, the *chaebol* such as Samsung and Hyundai, and pushed them into steel, ships, cars and electronics. The economy grew at breakneck speed, while dissent was brutally suppressed. In May 1980 his successor, General Chun Doo-hwan, crushed a democratic uprising in the city of Gwangju, killing at least 165 civilians by official counts; activists believe many more died." },
        { type: "section", head: "3. Democracy (1987)", md:
          "In June 1987 millions of students, workers and middle-class citizens protested until the regime agreed to direct presidential elections. Democracy took hold: in 1997 the veteran dissident Kim Dae-jung won the presidency, the first peaceful transfer of power to the opposition. He pursued a 'Sunshine Policy' of engagement with the North and held the first inter-Korean summit in 2000." },
        { type: "section", head: "4. Crises and candlelight", md:
          "The 1997 Asian financial crisis forced an IMF bailout and painful reforms. In 2016–17, huge peaceful 'candlelight' protests over an influence-peddling scandal led to the impeachment and removal of President Park Geun-hye, Park Chung-hee's daughter. Her successor, Moon Jae-in, helped arrange Donald Trump's summits with Kim Jong Un in 2018–19, which produced no lasting deal. The conservative Yoon Suk Yeol narrowly won in 2022." },
        { type: "section", head: "5. Yoon's presidency", md:
          "Yoon, a former prosecutor with no political experience, won in 2022 by less than one percentage point. He improved relations with [[unit:jp|Japan]] and joined a trilateral partnership with Tokyo and Washington, but was hobbled at home by an opposition-controlled parliament and scandals around his wife. His party lost the 2024 parliamentary election badly, setting the stage for the crisis." },
        { type: "section", head: "The Korean Wave", md:
          "Since the 2000s South Korean culture has conquered the world: K-pop groups like BTS and BLACKPINK, the Oscar-winning film *Parasite* (2019), the Netflix hit *Squid Game* (2021), and the novelist Han Kang, who won the Nobel Prize in Literature in 2024. That soft power has become a source of national pride and economic value." }
      ],
      takeaways: [
        "The Korean War of 1950–53 ended in an armistice, not peace; the peninsula remains divided.",
        "Park Chung-hee's dictatorship built the chaebol and industrialised the country; democracy came in 1987.",
        "Peaceful 'candlelight' protests led to the removal of President Park Geun-hye in 2017."
      ],
      check: { q: "How did the Korean War end in 1953?",
        choices: ["With a peace treaty", "With an armistice, so the two Koreas are technically still at war", "With reunification"], answer: 1,
        explain: "An armistice stopped the fighting, but no peace treaty was ever signed." },
      sources: [
        { title: "South Korea profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-asia-pacific-15292674", date: "n.d." },
        { title: "South Korea", publisher: "Britannica", url: "https://www.britannica.com/place/South-Korea", date: "n.d." },
        { title: "Korean War", publisher: "Britannica", url: "https://www.britannica.com/event/Korean-War", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "kr-10", kind: "past", asOf: "2026-09-29",
      title: "Park Chung-hee and the Miracle on the Han",
      dek: "A general who seized power in 1961 turned one of the world's poorest countries into an industrial power, and ruled as a dictator until he was shot by his own spy chief.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr/kr-10-hero.webp",
          alt: "Illustration of a vast shipyard with giant cranes and a half-built ship's hull on a coast at dawn.",
          caption: "Shipyards and steel mills built under Park turned South Korea into an industrial power.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast shipyard on a coast at dawn, giant red and white gantry cranes towering over a half-built ship's hull, calm sea, orange sunrise, industrial and ambitious, no people close up, no legible text or logos." },
        { type: "facts", head: "The miracle", rows: [
          ["GDP per person, 1960", "About $160, less than many African countries"],
          ["GDP per person, 2024", "About $36,000"],
          ["Park Chung-hee in power", "1961–1979"],
          ["Yushin constitution", "1972, giving Park near-unlimited power"],
          ["Assassinated", "26 October 1979, by his intelligence chief"]
        ] },
        { type: "section", head: "A poor country", md:
          "After the Korean War, South Korea was among the poorest countries on earth, dependent on American aid, with few natural resources. In May 1961 Major General Park Chung-hee seized power in a coup, promising to fight corruption and communism and to modernise the economy. He was later elected president in 1963, 1967 and 1971, in increasingly unfair contests." },
        { type: "section", head: "State-led growth", md:
          "Park's government directed the economy through five-year plans, cheap loans and export targets. It chose a few family-run conglomerates, the chaebol, such as Hyundai, Samsung and LG, and gave them credit and protection in return for meeting goals. It built motorways, steel mills (POSCO), shipyards and, from the 1970s, heavy and chemical industries. Normalising relations with Japan in 1965 brought compensation money and investment, and sending troops to the Vietnam War brought American payments. Growth averaged close to 10% a year." },
        { type: "section", head: "Dictatorship", md:
          "Growth came with repression. After nearly losing the 1971 election to Kim Dae-jung, Park declared martial law and imposed the 1972 Yushin constitution, which let him rule indefinitely, appoint a third of the legislature and issue emergency decrees. The KCIA, his intelligence agency, kidnapped Kim Dae-jung from a Tokyo hotel in 1973. Labour unions were suppressed, and workers, many of them young women in textile factories, endured long hours and low pay." },
        { type: "section", head: "The end", md:
          "In October 1979 protests broke out in Busan and Masan. On 26 October, during a dinner at a safe house, Park was shot dead by his own intelligence chief, Kim Jae-gyu, after an argument over how to handle them. A brief opening followed, but in December General Chun Doo-hwan seized control of the army, and in 1980 crushed the uprising in Gwangju ([[lesson:kr-11]])." },
        { type: "section", head: "The price paid", md:
          "The pace was punishing. In November 1970 a 22-year-old garment worker, Jeon Tae-il, set himself on fire in Seoul's Pyeonghwa Market, shouting that workers were not machines and that the labour law should be obeyed. His death inspired a generation of students and trade unionists. Rural villages were remade too, through the Saemaul (New Village) movement, which paired government materials with local labour to build roads, roofs and wells." },
        { type: "compare", head: "Two views of Park",
          left: { head: "Admirers", md:
            "Park lifted South Korea out of poverty, built its industries and made it strong enough to resist the North; his record justifies his methods." },
          right: { head: "Critics", md:
            "He was a dictator who tortured opponents and exploited workers; South Korea's prosperity owed as much to its people as to him." } },
        { type: "section", head: "Why it still matters", md:
          "Park remains the most divisive figure in South Korean politics. Conservatives revere him; his daughter, Park Geun-hye, was elected president in 2012 and impeached in 2017. The chaebol he built still dominate the economy (see [[lesson:kr-12]])." }
      ],
      takeaways: [
        "General Park Chung-hee seized power in 1961 and ruled until 1979.",
        "His state-led, export-driven industrialisation, working through the chaebol, produced near-10% growth.",
        "He ruled as a dictator under the 1972 Yushin constitution and was assassinated by his spy chief in 1979."
      ],
      check: { q: "What happened to Park Chung-hee in October 1979?",
        choices: ["He retired", "He was shot dead by his own intelligence chief", "He was impeached"], answer: 1,
        explain: "KCIA director Kim Jae-gyu killed Park at a private dinner on 26 October 1979." },
      sources: [
        { title: "Park Chung-hee", publisher: "Britannica", url: "https://www.britannica.com/biography/Park-Chung-Hee", date: "n.d." },
        { title: "South Korea: Economy", publisher: "Britannica", url: "https://www.britannica.com/place/South-Korea/Economy", date: "n.d." },
        { title: "GDP per capita (current US$): Korea, Rep.", publisher: "World Bank", url: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=KR", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "kr-11", kind: "past", asOf: "2026-09-29",
      title: "Gwangju and the road to democracy",
      dek: "In May 1980 soldiers massacred protesters in the city of Gwangju. Seven years later, mass protests forced the generals to allow free elections.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr/kr-11-hero.webp",
          alt: "Illustration of a wide city street filled with young protesters seen from behind, many wearing white headbands, with office buildings and clouds of white smoke.",
          caption: "Mass protests in June 1987 forced South Korea's military government to accept direct presidential elections.",
          credit: "AI illustration — not a photograph",
          prompt: "A wide city street filled with young protesters in 1980s clothes seen from behind, many wearing white headbands, office buildings on both sides, drifting clouds of white smoke, determined and historic, no faces, no flags, no legible text." },
        { type: "timeline", head: "From massacre to democracy", items: [
          ["Dec 1979", "General Chun Doo-hwan seizes control of the army"],
          ["18–27 May 1980", "Gwangju uprising crushed"],
          ["June 1987", "Nationwide 'June Democratic Struggle'"],
          ["29 June 1987", "Regime agrees to direct presidential elections"],
          ["1996", "Chun and Roh Tae-woo convicted"],
          ["1997", "Kim Dae-jung elected, the first opposition victory"]
        ] },
        { type: "section", head: "Gwangju, May 1980", md:
          "After Park's assassination, General Chun Doo-hwan seized power and in May 1980 extended martial law nationwide, arresting opposition leaders including Kim Dae-jung, who came from the south-western Jeolla region. In the city of Gwangju, students protested; special forces paratroopers beat and bayoneted them and bystanders. Citizens armed themselves, drove the troops out and ran the city for several days. On 27 May the army retook Gwangju. The official death toll is about 200, but many historians and victims' groups believe it was higher, with hundreds more missing." },
        { type: "section", head: "Chun's rule", md:
          "Chun became president and ruled harshly through the 1980s, while the economy boomed. News of Gwangju was suppressed, and the government called the uprising a communist-inspired riot. Many South Koreans also blamed the United States, which had operational control of Korean forces, for allowing troops to be moved to the city. Student activism, often anti-American, grew." },
        { type: "section", head: "June 1987", md:
          "In early 1987 a student, Park Jong-chul, died under police torture, and the government's cover-up was exposed. In June, when Chun named a fellow general, Roh Tae-woo, as his successor under the indirect election system, and a student, Lee Han-yeol, was fatally hit by a tear-gas canister, millions of students, workers and office workers joined protests across the country. With the Seoul Olympics approaching in 1988 and Washington urging restraint, Roh announced on 29 June that the regime would accept direct presidential elections and free political prisoners." },
        { type: "section", head: "Democracy and accountability", md:
          "A new constitution was adopted in 1987 and is still in force. Roh won the December election because the opposition split between Kim Young-sam and Kim Dae-jung. Kim Young-sam won in 1992, the first civilian president in three decades, and in 1996 Chun and Roh were convicted of mutiny, treason and corruption; Chun was sentenced to death, commuted, and both were pardoned in 1997. That year Kim Dae-jung, once sentenced to death himself, won the presidency." },
        { type: "compare", head: "Two lessons",
          left: { head: "People power", md:
            "South Korea shows that mass, peaceful protest can force a dictatorship to give way, and that coup leaders can be held accountable." },
          right: { head: "Unfinished business", md:
            "Victims of Gwangju still seek the full truth, and some on the far right continue to spread claims that North Korean agents were behind the uprising." } },
        { type: "section", head: "Why it still matters", md:
          "When President Yoon Suk Yeol declared martial law in December 2024, many South Koreans immediately thought of 1980, and crowds and lawmakers rushed to the National Assembly to stop it (see this unit's stories). The novelist Han Kang, who won the 2024 Nobel Prize in Literature, wrote about Gwangju in 'Human Acts'." }
      ],
      takeaways: [
        "In May 1980 General Chun Doo-hwan's troops crushed the Gwangju uprising, killing hundreds.",
        "Mass protests in June 1987 forced the regime to accept direct presidential elections.",
        "Chun and Roh were later convicted; the memory of Gwangju shaped resistance to martial law in 2024."
      ],
      check: { q: "What did the June 1987 protests achieve?",
        choices: ["Reunification", "Direct presidential elections and a new democratic constitution", "The end of the US alliance"], answer: 1,
        explain: "On 29 June 1987 the regime agreed to direct elections; the constitution adopted that year is still in force." },
      sources: [
        { title: "Gwangju Uprising", publisher: "Britannica", url: "https://www.britannica.com/event/Gwangju-Uprising", date: "n.d." },
        { title: "Chun Doo-hwan", publisher: "Britannica", url: "https://www.britannica.com/biography/Chun-Doo-Hwan", date: "n.d." },
        { title: "The Nobel Prize in Literature 2024: Han Kang", publisher: "The Nobel Prize", url: "https://www.nobelprize.org/prizes/literature/2024/han/facts/", date: "2024" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "kr-4", kind: "players", asOf: "2026-09-29",
      title: "Lee, his rivals and a jailed ex-president",
      dek: "A president who survived a stabbing and five trials, a conservative mayor who held Seoul, and a predecessor serving a life sentence.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr/kr-4-hero.webp",
          alt: "Illustration of a traditional Korean palace roof with curved eaves in the foreground and modern glass towers of Seoul behind, at dusk.",
          caption: "Seoul, where old palaces sit among the towers of a city of nearly 10 million.",
          credit: "AI illustration — not a photograph",
          prompt: "The curved tiled roofs and painted eaves of a traditional Korean palace in the foreground, modern glass skyscrapers of a big city rising behind, a forested mountain beyond, dusk with glowing windows, harmony of old and new, no people close up, no legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "Lee Jae-myung", role: "President, since June 2025",
            img: "img/kr/portrait-lee.webp", source: "Official portrait (Office of the President, KOGL) via Wikimedia Commons; confirm the licence.",
            md: "Grew up poor and worked in factories as a child; became a lawyer and mayor of Seongnam. Lost narrowly to Yoon in 2022, survived a stabbing in 2024 and faced several criminal trials, now suspended while he is president." },
          { name: "Yoon Suk Yeol", role: "President 2022–2025",
            img: "img/kr/portrait-yoon.webp", source: "Official portrait (KOGL) via Wikimedia Commons; confirm the licence.",
            md: "A former prosecutor-general. Declared martial law on 3 December 2024; removed from office in April 2025 and sentenced to life in prison for insurrection in February 2026. He is appealing." },
          { name: "Kim Moon-soo", role: "People Power Party's 2025 candidate",
            img: "img/kr/portrait-kim-moon-soo.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A former labour minister who lost to Lee in June 2025, 49.4% to 41.2%." },
          { name: "Oh Se-hoon", role: "Mayor of Seoul (PPP)",
            img: "img/kr/portrait-oh.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Won a fifth term in June 2026 by just over one point, the conservatives' most important victory of the year and a possible future presidential candidate." },
          { name: "Kim Keon-hee", role: "Yoon's wife",
            img: "img/kr/portrait-kim-keon-hee.webp", source: "Official photo (KOGL) via Wikimedia Commons; confirm the licence.",
            md: "Convicted of accepting luxury gifts and other charges; in September 2026 an appeals court reduced one of her sentences from seven years to five." },
          { name: "Cho Hyun", role: "Foreign minister",
            img: "img/kr/portrait-cho-hyun.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A veteran diplomat managing relations with Washington, Beijing and Tokyo under Lee's 'pragmatic' foreign policy." }
        ] },
        { type: "section", head: "Parliament's majority", md:
          "The Democratic Party holds around 170 of 300 seats in the National Assembly, and with smaller allies it can pass most laws alone. It cannot amend the constitution, which needs two-thirds of parliament and a referendum. Lee has floated amending it to allow presidents two four-year terms, a change that would not apply to him." },
        { type: "section", head: "Business and the chaebol", md:
          "The giant family conglomerates remain central to Korean life and politics. Samsung's chairman, Lee Jae-yong, was pardoned in 2022 after a bribery conviction. The chaebol are the engines of the export economy, and presidents of both camps court them, even as reformers push for better corporate governance and fairer treatment of small shareholders, a cause Lee has championed as a way to lift Korean share prices." },
        { type: "section", head: "Lee's style", md:
          "Once seen as a firebrand leftist, Lee has governed more pragmatically than critics expected. He kept the US alliance and security cooperation with Japan, struck a trade deal with Trump and courted business. But he has also pushed through reforms of the prosecution service and special investigations into the martial-law attempt, which conservatives call political revenge." },
        { type: "section", head: "The divided right", md:
          "The People Power Party is split between those who defend Yoon or say his removal was political, and those who want to break with him completely. That division hurt it in the 2025 election and the 2026 local elections, though Oh Se-hoon's win in Seoul gave it hope." },
        { type: "section", head: "A gender gap", md:
          "South Korean politics has a striking generational and gender divide. Young women lean strongly liberal and feminist; many young men, frustrated by housing costs, competition for jobs and compulsory military service, have moved right. Lee's recent slump has been sharpest among young voters." }
      ],
      takeaways: [
        "Lee Jae-myung governs pragmatically but faces accusations of pursuing revenge against the right.",
        "Yoon Suk Yeol is serving a life sentence for insurrection, which he is appealing.",
        "The conservative PPP is divided over Yoon, but held Seoul in June 2026."
      ],
      check: { q: "What sentence did Yoon Suk Yeol receive in February 2026?",
        choices: ["Five years", "Life in prison for insurrection", "A suspended sentence"], answer: 1,
        explain: "A Seoul court sentenced Yoon to life in prison for leading an insurrection by declaring martial law. He is appealing." },
      sources: [
        { title: "Yoon Suk Yeol: Former South Korean President handed life sentence for leading insurrection", publisher: "CNN", url: "https://www.cnn.com/2026/02/19/asia/south-korea-yoon-suk-yeol-verdict-insurrection-intl-hnk", date: "2026-02-19" },
        { title: "A South Korean appeals court reduces former first lady's sentence over luxury gifts and favors", publisher: "The Washington Post / AP", url: "https://www.washingtonpost.com/world/2026/09/22/south-korea-yoon-kim-keon-hee-gifts/f7443154-b65d-11f1-94cb-d3d8f22a8c8b_story.html", date: "2026-09-22" },
        { title: "Oh Se-hoon wins 5th term as Seoul mayor", publisher: "The Korea Herald", url: "https://www.koreaherald.com/article/10763378", date: "2026-06" },
        { title: "South Korea presidential elections", publisher: "NPR", url: "https://www.npr.org/2025/06/02/g-s1-70029/south-korea-presidential-elections", date: "2025-06-02" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "kr-5", kind: "story", asOf: "2026-09-29",
      title: "Six hours of martial law",
      dek: "On 3 December 2024 President Yoon declared martial law. Lawmakers climbed fences to vote it down, and 14 months later he was sentenced to life.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr/kr-5-hero.webp",
          alt: "Illustration of citizens linking arms outside a parliament gate at night, with soldiers in the background and phone lights in the crowd.",
          caption: "Citizens gathered outside the National Assembly on the night of 3 December 2024.",
          credit: "AI illustration — not a photograph",
          prompt: "Citizens linking arms outside the tall iron gate of a domed parliament building at night, seen from behind, soldiers in helmets as distant silhouettes, phone lights raised in the crowd, winter breath in cold air, tense but peaceful, no faces, no legible text." },
        { type: "section", head: "What happened", md:
          "At about 10:30 pm on 3 December 2024, President Yoon Suk Yeol went on television to declare emergency [[martial law]], accusing the opposition-controlled parliament of 'anti-state' activities and sympathy for North Korea. A decree banned political activity and put the media under military control, and special forces were sent to the National Assembly.\n\n" +
          "Lawmakers raced to the building, some climbing over fences, while citizens and staff blocked soldiers at the doors. Shortly after 1 am, 190 members present voted unanimously to lift martial law. Yoon withdrew it at about 4:30 am, some six hours after declaring it." },
        { type: "timeline", head: "How it unfolded", items: [
          ["3 Dec 2024", "Yoon declares martial law; parliament votes it down within hours"],
          ["14 Dec 2024", "Parliament impeaches Yoon"],
          ["15 Jan 2025", "Yoon arrested, the first sitting president to be detained"],
          ["4 Apr 2025", "Constitutional Court removes him, 8–0"],
          ["3 Jun 2025", "Lee Jae-myung wins the snap election"],
          ["19 Feb 2026", "Yoon sentenced to life for leading an insurrection"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Yoon had been locked in conflict with a Democratic-controlled parliament that blocked his budget, impeached his officials and investigated his wife. His approval ratings were very low. Prosecutors later argued that he had been planning martial law for months to escape these pressures and seize control of politics. Yoon insisted he had acted legally to warn the nation about a 'legislative dictatorship', and that he never intended to stop parliament voting." },
        { type: "section", head: "The reckoning", md:
          "Parliament impeached Yoon on 14 December 2024. He resisted arrest for weeks behind his presidential guards before investigators detained him in January 2025. The Constitutional Court unanimously removed him on 4 April 2025. In February 2026 a Seoul court found him guilty of leading an insurrection and sentenced him to life in prison; the prosecution had asked for the death penalty. In April 2026 he received a further seven years for obstructing his arrest and related charges. Several of his generals and ministers were also convicted." },
        { type: "section", head: "Soldiers who hesitated", md:
          "Special forces who reached the Assembly did not use force to stop lawmakers. Some commanders later testified that they had deliberately slowed down or ignored orders, and several said Yoon had told them to 'drag out' legislators. Their hesitation, and the speed of the vote, meant not a single person was killed." },
        { type: "compare", head: "Two views",
          left: { head: "Most Koreans and the courts", md:
            "It was an attempted self-coup. Democracy survived because lawmakers, citizens and soldiers who hesitated refused to go along with it." },
          right: { head: "Yoon's supporters", md:
            "He was driven to it by an opposition abusing its majority; the prosecutions that followed are political revenge by the winners." } },
        { type: "section", head: "Why it matters", md:
          "For many South Koreans, the night recalled the dictatorship years, and the swift, peaceful, lawful response showed how far the country's democracy had come. But the crisis also deepened polarisation: a sizeable minority still defends Yoon, and the far right has grown louder." }
      ],
      takeaways: [
        "Yoon declared martial law on 3 December 2024; parliament voted it down within hours.",
        "He was impeached, arrested, removed by the Constitutional Court in April 2025 and sentenced to life in February 2026.",
        "The crisis showed democracy's resilience but deepened political polarisation."
      ],
      check: { q: "How long did Yoon's martial law last?",
        choices: ["About six hours", "About six days", "About six weeks"], answer: 0,
        explain: "Parliament voted it down shortly after 1 am, and Yoon withdrew it at about 4:30 am, roughly six hours after declaring it." },
      sources: [
        { title: "South Korean court hands life in prison to ex-president Yoon for insurrection", publisher: "Rappler / Reuters", url: "https://www.rappler.com/world/asia-pacific/south-korea-yoon-suk-yeol-insurrection-trial-ruling-february-2026/", date: "2026-02-19" },
        { title: "Yoon Suk Yeol sentenced to life for leading insurrection", publisher: "The Korea Herald", url: "https://www.koreaherald.com/article/10678550", date: "2026-02-19" },
        { title: "South Korean court sentences ex-President Yoon to 7 years in prison", publisher: "NPR", url: "https://www.npr.org/2026/04/29/g-s1-119165/south-korean-court-sentences-ex-president-yoon", date: "2026-04-29" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "kr-6", kind: "story", asOf: "2026-09-29",
      title: "Lee's bargain with Trump",
      dek: "A 15% tariff, a $350 billion investment pledge, a shock raid on a Korean factory in Georgia, and permission to build nuclear-powered submarines.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr/kr-6-hero.webp",
          alt: "Illustration of a vast shipyard at dusk with a half-built ship hull, towering gantry cranes and welding sparks.",
          caption: "Shipbuilding was at the heart of South Korea's investment pledge to the United States.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast shipyard at dusk, a huge half-built steel ship hull in a dry dock, towering yellow gantry cranes, bright welding sparks, workers as tiny silhouettes, industrial scale and ambition, no legible text or logos." },
        { type: "section", head: "What happened", md:
          "In July 2025 Trump threatened South Korea with a 25% [[tariff]]. Seoul agreed to a 15% rate on most goods, including cars, in exchange for a pledge of $350 billion of investment in the United States: $200 billion in cash contributions, capped at $20 billion a year to protect the won, and $150 billion for cooperation on shipbuilding.\n\n" +
          "Then, on 4 September 2025, US immigration agents raided a Hyundai–LG battery plant under construction in Georgia and detained about 475 workers, more than 300 of them South Korean, many shown in chains. The images caused outrage in Korea. The workers were flown home a week later, and Washington promised to ease visas for Korean technicians." },
        { type: "facts", head: "The deal", rows: [
          ["US tariff on Korean goods", "15% (from a threatened 25%)"],
          ["Investment pledge", "$350 billion"],
          ["Cash part", "$200 billion, at most $20 billion a year"],
          ["Shipbuilding cooperation", "$150 billion"],
          ["Georgia raid", "4 Sep 2025: over 300 Koreans detained"]
        ] },
        { type: "section", head: "Why it happened", md:
          "South Korea depends on exports, and the United States is its second-largest market after China. Its car and battery makers had invested heavily in American factories, partly because of earlier US subsidies. Lee judged that a deal, however costly, was better than a trade war with the country that guarantees its security." },
        { type: "section", head: "Submarines and security", md:
          "At a summit in Gyeongju in October 2025, during the APEC meeting, Trump agreed that South Korea could build nuclear-powered submarines, a long-standing Korean ambition. The two sides also discussed Korea paying more toward the cost of US forces, and the future role of those troops as Washington focuses on China." },
        { type: "section", head: "Chips", md:
          "South Korea's chip giants face their own tariff questions. Samsung and SK Hynix are investing in US factories, while also depending heavily on sales and plants in China. The AI boom has made their memory chips some of the most sought-after products on earth, giving Seoul leverage in trade talks." },
        { type: "compare", head: "Two views of the bargain",
          left: { head: "Supporters", md:
            "Lee protected Korea's exporters and won rare concessions, including submarines, while keeping the alliance intact at a dangerous time." },
          right: { head: "Critics", md:
            "Seoul pledged enormous sums to an ally that treated its workers like criminals, and the investment will cost Korean jobs at home." } },
        { type: "section", head: "Public reaction", md:
          "Many Koreans were angry at the terms, which they saw as tribute to an ally, and angrier still at the Georgia raid. Surveys showed favourable views of the United States falling, though support for the alliance itself stayed high, reflecting the country's dependence on American protection against the North." },
        { type: "section", head: "What's next", md:
          "Parliament must pass legislation for the investment fund, and the first projects are under way. Watch for disputes over how the money is spent, new US tariffs on chips, and how the alliance evolves if Washington asks Seoul to do more against China." }
      ],
      takeaways: [
        "South Korea accepted a 15% US tariff and pledged $350 billion of investment in the US.",
        "A September 2025 immigration raid on a Georgia battery plant detained over 300 Korean workers.",
        "Trump agreed in October 2025 that South Korea could build nuclear-powered submarines."
      ],
      check: { q: "What happened at the Hyundai–LG battery plant in Georgia on 4 September 2025?",
        choices: ["It was opened by Trump", "US immigration agents detained hundreds of workers, many Korean", "It was sold to a US company"], answer: 1,
        explain: "About 475 workers, more than 300 of them South Korean, were detained in an immigration raid, causing outrage in Seoul." },
      sources: [
        { title: "Korea agrees to 15% reciprocal tariffs, USD 350B investment with US", publisher: "Korea.net", url: "https://www.korea.net/NewsFocus/Business/view?articleId=276234", date: "2025-07" },
        { title: "Tariff deal with US includes annual investment cap of USD 20B", publisher: "Korea.net", url: "https://www.korea.net/NewsFocus/policies/view?articleId=281373", date: "2025-11" },
        { title: "Trump's South Korea tariff cuts are major boost for Hyundai and GM", publisher: "CNBC", url: "https://www.cnbc.com/amp/2025/12/03/trump-south-korea-tariffs-vehicles-hyundai-gm.html", date: "2025-12-03" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "kr-7", kind: "story", asOf: "2026-09-29",
      title: "The June 2026 local elections",
      dek: "Lee's party swept the country, but lost the prize it wanted most: Seoul.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr/kr-7-hero.webp",
          alt: "Illustration of a busy Seoul subway station exit at evening with commuters walking past rows of blank campaign posters.",
          caption: "Turnout in June 2026 was the highest for local elections in years.",
          credit: "AI illustration — not a photograph",
          prompt: "A busy city subway station exit at evening, commuters seen from behind walking past a long row of blank campaign posters on a fence, neon shop signs without legible text, apartment towers behind, lively and ordinary, no faces, no legible text." },
        { type: "section", head: "What happened", md:
          "On 3 June 2026, a year after Lee's election, South Koreans voted for mayors, governors and local councils. The Democratic Party won 12 of the 16 races for big-city mayors and provincial governors; the People Power Party held 4. Turnout was about 61%, around 11 points higher than in 2022.\n\n" +
          "But in Seoul, the capital and home to a fifth of the population, the conservative incumbent Oh Se-hoon won a fifth term with 49.2%, beating the Democratic candidate Chong Won-o by just over one point." },
        { type: "facts", head: "The results", rows: [
          ["Metropolitan and provincial races", "Democratic Party 12, People Power Party 4"],
          ["Seoul", "Oh Se-hoon (PPP) 49.2%, by about 1.2 points"],
          ["Turnout", "About 61%"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Many voters rewarded Lee for restoring stability after the martial-law crisis and punished the PPP for its ties to Yoon. But Seoul is different: soaring apartment prices have made housing the city's dominant issue, and many residents blamed the national government's property policies. Oh's personal popularity and a record of city projects also helped." },
        { type: "section", head: "Since then", md:
          "Lee's approval has fallen steadily since the summer. By September a Gallup Korea poll put it at 37%, the lowest of his presidency, before a small rebound to about 38% after a press conference and his trip to the UN. Pollsters cited housing policy, controversial cabinet nominees and a debate over sending troops to help secure the Strait of Hormuz during the Iran war." },
        { type: "section", head: "The housing trap", md:
          "Apartment prices in Seoul, and especially in the wealthy districts south of the Han river, have surged again, despite loan limits and taxes. Many Koreans hold much of their wealth in property, so every policy creates losers: first-time buyers want prices down, while owners want them protected. The government's reversal on a tax change for owners of rented-out homes drew criticism from both sides." },
        { type: "section", head: "Young voters", md:
          "Polls in September showed Lee's approval lowest among voters in their twenties and thirties. Young men in particular complain about jobs, housing and what they see as unfair treatment compared with women, while the conservative party has courted them with promises of tougher policies and lower taxes." },
        { type: "compare", head: "Two readings",
          left: { head: "The Democrats", md:
            "A nationwide landslide is a clear endorsement of the government's direction. Seoul was lost narrowly, to a popular incumbent." },
          right: { head: "The conservatives", md:
            "Losing Seoul, where housing policy is felt most sharply, is a warning. Lee's honeymoon is over." } },
        { type: "section", head: "The conservative comeback?", md:
          "For the People Power Party, winning Seoul was a lifeline after a year of defeats. Its leaders argue that the party can win again if it moves beyond the Yoon era and focuses on housing, taxes and security, but its base remains loyal to the former president, making that break hard." },
        { type: "section", head: "What's next", md:
          "Watch Lee's approval, especially among young voters, the government's next moves on housing, and whether the PPP can unite around a new leader before the 2028 parliamentary election." }
      ],
      takeaways: [
        "The Democratic Party won 12 of 16 big-city and provincial races on 3 June 2026.",
        "Conservative Oh Se-hoon narrowly held Seoul, where housing prices dominate.",
        "Lee's approval fell to 37% in September before a slight rebound."
      ],
      check: { q: "What was the biggest issue in the Seoul mayoral race?",
        choices: ["North Korea", "Housing costs", "Trade with the US"], answer: 1,
        explain: "Soaring apartment prices made housing Seoul's dominant issue, and many voters blamed the national government." },
      sources: [
        { title: "South Korea's ruling party wins most races in local elections but loses the crucial Seoul contest", publisher: "The Washington Post / AP", url: "https://www.washingtonpost.com/world/2026/06/02/south-korea-elections-mayors-lee-yoon/265267f4-5ed9-11f1-9c46-d6211372eede_story.html", date: "2026-06-03" },
        { title: "Surprising Results of the 2026 Local Elections in South Korea", publisher: "Institute for Security and Development Policy", url: "https://www.isdp.eu/surprising-results-of-the-2026-local-elections-in-south-korea/", date: "2026-06" },
        { title: "Why Is Lee Jae-myung's Approval Rating Dropping?", publisher: "The Diplomat", url: "https://thediplomat.com/2026/09/why-is-lee-jae-myungs-approval-rating-dropping/", date: "2026-09" },
        { title: "Lee's approval rating rises for 2nd straight week to 37.9%: poll", publisher: "The Korea Herald", url: "https://www.koreaherald.com/article/10885801", date: "2026-09-28" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "kr-12", kind: "spotlight", asOf: "2026-09-29",
      title: "The chaebol",
      dek: "A handful of family-run conglomerates, led by Samsung and Hyundai, dominate South Korea's economy. Their power, and their founders' heirs, are never far from politics.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr/kr-12-hero.webp",
          alt: "Illustration of a cluster of gleaming corporate towers in Seoul at night, with busy streets and neon lights below.",
          caption: "The headquarters of South Korea's biggest conglomerates tower over Seoul.",
          credit: "AI illustration — not a photograph",
          prompt: "A cluster of gleaming glass corporate skyscrapers in a dense Asian city at night, busy streets with light trails and colourful neon below, a river reflecting the lights, powerful and modern, no people close up, no legible text or logos." },
        { type: "facts", head: "The big groups", rows: [
          ["Largest", "Samsung, SK, Hyundai Motor, LG, Lotte"],
          ["Samsung Electronics", "Around a fifth of South Korea's exports"],
          ["Ownership", "Founding families control groups through cross-shareholdings"],
          ["Lee Jae-yong (Samsung)", "Jailed in 2017 for bribery; pardoned in 2022; cleared in a separate case in 2025"],
          ["Pardons", "Presidents have repeatedly pardoned convicted chaebol leaders"]
        ] },
        { type: "section", head: "Built with the state", md:
          "The chaebol, literally 'wealthy families', grew up under Park Chung-hee, who gave favoured groups cheap loans and licences in exchange for building industries and meeting export targets. By the 1980s they spanned everything from ships and cars to insurance and department stores. Their global brands, from Samsung phones and memory chips to Hyundai cars and LG appliances, made South Korea an exporting giant." },
        { type: "section", head: "Too big to fail", md:
          "The Asian financial crisis of 1997 exposed their debts: Daewoo, then the second-largest group, collapsed, and South Korea needed a record IMF bailout. Reforms followed, but the biggest groups emerged stronger. Families typically control their empires with small stakes through webs of cross-shareholdings, and succession has repeatedly led to scandals over tax evasion, bribery and complex restructurings designed to pass control to heirs." },
        { type: "section", head: "Scandals and politics", md:
          "Chaebol leaders have regularly been convicted, and then pardoned by presidents citing the economy. In 2017 Samsung's heir, Lee Jae-yong, was jailed for bribing President Park Geun-hye's confidante, a scandal that helped bring about her impeachment. He was released, returned to prison in 2021 and pardoned in 2022; in 2025 the Supreme Court upheld his acquittal in a separate case over a 2015 merger. Critics call this 'too big to jail'." },
        { type: "section", head: "In the Trump era", md:
          "The chaebol are now central to South Korea's diplomacy. Under the 2025 trade deal with Washington, they pledged huge investments in American factories for cars, batteries, chips and ships. The immigration raid on a Hyundai–LG battery plant in Georgia in September 2025, in which hundreds of Korean workers were detained, became a diplomatic crisis. At home, President Lee Jae-myung's government has pushed reforms to strengthen minority shareholders' rights, aiming to end the 'Korea discount' on company valuations." },
        { type: "section", head: "How big is big?", md:
          "The top five groups, Samsung, SK, Hyundai Motor, LG and Lotte, account for a very large share of the stock market and of exports; Samsung Electronics alone is often worth around a fifth of the main KOSPI index. Families usually own only a few percent directly, but control the whole group through holding companies and affiliates that own each other. Supporters see scale and long-term planning; critics see governance that serves the family first." },
        { type: "compare", head: "Two views",
          left: { head: "Defenders", md:
            "The chaebol built South Korea's prosperity and remain its global champions; they need scale to compete with China and Japan." },
          right: { head: "Critics", md:
            "They crowd out smaller firms, dominate politics and the media, and treat laws as optional, entrenching inequality." } },
        { type: "section", head: "Why it matters", md:
          "For young South Koreans, a job at a big conglomerate is the gold standard, which fuels an intensely competitive education system. The chaebol's fortunes, especially Samsung's in the global chip race, largely determine the country's." }
      ],
      takeaways: [
        "The chaebol, family-run conglomerates such as Samsung and Hyundai, were built with state support under Park.",
        "Their leaders have often been convicted of corruption and then pardoned.",
        "They are central to South Korea's economy and to its 2025 investment deal with the US."
      ],
      check: { q: "What does 'chaebol' mean?",
        choices: ["State company", "Wealthy family, the name for family-run conglomerates", "Trade union"], answer: 1,
        explain: "The word combines 'wealth' and 'clan'; it refers to the family-controlled groups that dominate the economy." },
      sources: [
        { title: "Chaebol", publisher: "Britannica", url: "https://www.britannica.com/money/chaebol", date: "n.d." },
        { title: "South Korea's top court acquits Samsung chief of fraud charges", publisher: "UPI", url: "https://www.upi.com/Top_News/World-News/2025/07/17/korea-Lee-Jae-yong-Samsung-chairman-acquitted-fraud-South-Korea-Supreme-Court/5441752737307/", date: "2025-07-17" },
        { title: "Samsung Electronics' Lee Jae-yong granted special pardon by South Korea", publisher: "CNN", url: "https://www.cnn.com/2022/08/12/tech/samsung-lee-jae-yong-pardon-south-korea-hnk-intl", date: "2022-08-12" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "kr-8", kind: "now", asOf: "2026-09-29",
      title: "Where things stand",
      dek: "A president with a majority but slipping support, a North that rejects every overture, and allies who ask more of Seoul.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr/kr-8-hero.webp",
          alt: "Illustration of a guard post on a hill overlooking the Demilitarised Zone, with barbed wire fences and misty mountains stretching north.",
          caption: "The Demilitarised Zone, a 4-kilometre-wide strip that has divided Korea since 1953.",
          credit: "AI illustration — not a photograph",
          prompt: "A guard post on a green hill overlooking a wide valley, double barbed-wire fences running across the landscape, misty mountains stretching into the distance, autumn colours, quiet and tense, no people close up, no flags or legible text." },
        { type: "section", head: "The state of play", md:
          "- **Government:** Lee's Democratic Party controls the National Assembly and most local governments.\n" +
          "- **Approval:** around 38% in late September, near the lowest of his term.\n" +
          "- **Justice:** Yoon is serving a life sentence and appealing; prosecution reform continues.\n" +
          "- **Economy:** AI-driven demand for memory chips is booming; housing costs are the top complaint.\n" +
          "- **North Korea:** Pyongyang rejects dialogue and calls the South its 'most hostile state'." },
        { type: "section", head: "North Korea", md:
          "Lee has tried to lower tensions: his government switched off the loudspeakers blaring propaganda across the border and offered talks. [[unit:kp|North Korea]] has rejected every overture. At its Party Congress in February 2026 it formally treated the South as a separate, hostile state and abandoned the goal of unification. Pyongyang's troops fighting for Russia, and the military technology it may be getting in return, worry Seoul deeply." },
        { type: "section", head: "Between the powers", md:
          "South Korea must balance [[unit:us|the United States]], its security guarantor, with [[unit:cn|China]], its biggest trading partner. Lee has kept close security cooperation with [[unit:jp|Japan]], despite historical grievances, and hosted Xi Jinping for a summit during the APEC meeting in Gyeongju in 2025. A debate over whether South Korea should build its own nuclear weapons, once fringe, now has majority support in some polls." },
        { type: "section", head: "The economy", md:
          "Exports of memory chips have soared on AI demand, helping growth recover after a weak 2024–25. But household debt is among the highest in the world, domestic consumption is sluggish, and the won has been volatile. The US tariff deal and investment pledge will weigh on the economy for years, and China's rise in batteries, ships and electronics threatens Korean industries." },
        { type: "section", head: "What voters want", md:
          "Surveys suggest South Koreans' top concerns are housing, jobs and the cost of living, followed by the low birth rate and national security. Views on North Korea and the US alliance split sharply by generation: older voters remember the war and fear the North, while many younger ones see it as a foreign country and care more about the cost of living and their own prospects." },
        { type: "section", head: "Accountability", md:
          "Special counsels continue to investigate officials involved in the martial-law attempt, while Yoon's own appeals are still before the courts." },
        { type: "section", head: "Three scenarios", md:
          "- **Recovery.** Housing policy improves, the chip boom lifts incomes, and Lee's party wins the 2028 election.\n" +
          "- **Lame duck early.** Approval keeps falling, conservatives regroup, and the 2028 election returns a divided government.\n" +
          "- **A northern surprise.** A Trump–Kim summit or a military crisis changes the whole agenda." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Ongoing:** Yoon's appeal of his life sentence\n" +
          "- **Autumn 2026:** legislation for the US investment fund\n" +
          "- **April 2028:** the National Assembly election\n" +
          "- **2030:** the next presidential election" },
        { type: "section", head: "Connections", md:
          "South Korea's story runs through [[unit:kp]] (the divided peninsula), [[unit:us]] (the alliance and tariffs), [[unit:cn]] (trade), [[unit:jp]] (history and partnership), [[unit:ru]] (North Korea's patron) and [[unit:tw]] (a rival in chips)." }
      ],
      takeaways: [
        "Lee controls parliament but his approval has fallen to around 38%.",
        "North Korea rejects dialogue and now treats the South as a separate, hostile state.",
        "Seoul balances the US alliance, trade with China and a growing debate about its own nuclear weapons."
      ],
      check: { q: "How did North Korea respond to Lee's offers of dialogue?",
        choices: ["It agreed to a summit", "It rejected them and declared the South a hostile state", "It asked for reunification talks"], answer: 1,
        explain: "Pyongyang has rejected every overture and, at its February 2026 Party Congress, formalised its 'two hostile states' line." },
      sources: [
        { title: "President Lee Jae Myung: A Year in Power", publisher: "Carnegie Endowment for International Peace", url: "https://carnegieendowment.org/posts/2026/06/president-lee-jae-myung-a-year-in-power", date: "2026-06" },
        { title: "North Korea Codifies Nuclear Statehood and Hostile 'Two-State' Relations at 9th Party Congress", publisher: "The Diplomat", url: "https://thediplomat.com/2026/02/north-korea-codifies-nuclear-statehood-and-hostile-two-state-relations-at-9th-party-congress/", date: "2026-02" },
        { title: "Lee Jae Myung approval rating rises to 37.9 percent, poll finds", publisher: "Korea JoongAng Daily", url: "https://www.koreajoongangdaily.com/korea/lees-approval-rating-rises-for-second-straight-week-to-379-poll/12893778", date: "2026-09-28" }
      ]
    }
  ]
});
