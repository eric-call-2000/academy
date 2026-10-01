/* ============================================================
   Unit 15 — United Arab Emirates 🇦🇪
   Research note and sources: tools/research/ae.md
   Current as of 28 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("ae", {
  id: "ae",
  asOf: "2026-09-28",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ae-1", kind: "snapshot", asOf: "2026-09-28",
      title: "The UAE in brief",
      dek: "A federation of seven small monarchies that became a global hub for trade, finance and AI, and the Gulf state hit hardest by Iran's missiles in 2026.",
      blocks: [
        { type: "map", src: "maps/ae.svg",
          alt: "Locator map of the south-eastern Arabian Peninsula with the United Arab Emirates highlighted along the Persian Gulf coast, bordering Saudi Arabia and Oman, across the water from Iran, with a small globe showing its place in the world.",
          caption: "The UAE faces Iran across the Gulf, close to the Strait of Hormuz. Three islands, Abu Musa and the Greater and Lesser Tunbs, are held by Iran and claimed by the UAE.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Abu Dhabi (largest city: Dubai)"],
          ["People", "About 11 million, of whom only around one in ten are Emirati citizens"],
          ["System", "Federation of seven hereditary monarchies"],
          ["President", "Mohamed bin Zayed (MBZ), ruler of Abu Dhabi, since 2022"],
          ["Vice president and PM", "Mohammed bin Rashid, ruler of Dubai"],
          ["Founded", "2 December 1971"],
          ["Economy", "Oil, finance, trade, aviation, tourism and, increasingly, AI"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "The UAE punches far above its size. Dubai is one of the world's great crossroads, with the busiest international airport, a huge port and a financial centre that draws money from Russia, India, Africa and beyond. Abu Dhabi's sovereign funds manage well over a trillion dollars. In the past few years the UAE has become a centre for AI data centres built with American chips.\n\n" +
          "It is also a military and diplomatic player. It signed the Abraham Accords with [[unit:il|Israel]] in 2020, has intervened in wars from Yemen to Libya, and is accused, which it denies, of arming one side in Sudan's civil war." },
        { type: "section", head: "Who holds power", md:
          "Power rests with the ruling families of the seven emirates, and above all with Abu Dhabi's Al Nahyan family, which controls most of the oil. Mohamed bin Zayed, known as MBZ, has shaped UAE policy for two decades and became president in 2022. Dubai's ruler, Mohammed bin Rashid, is vice president and prime minister. There are no political parties and very limited elections." },
        { type: "section", head: "The mood in 2026", md:
          "The UAE's business model depends on being a safe, open place in a dangerous region, and in 2026 that image was shaken. From 28 February Iran fired hundreds of ballistic missiles and thousands of drones at the UAE, most of them intercepted, some hitting oil facilities, ports and airports. Emiratis and expatriates alike rallied behind the government, and business has largely continued, but the war has raised questions about the country's exposure." },
        { type: "section", head: "A country of migrants", md:
          "Walk through Dubai and you hear Hindi, Urdu, Tagalog, Arabic, Russian and English. Indians alone number around 4 million. Foreigners can live and work for decades but rarely become citizens, and their residence depends on employers or investments. Newer long-term 'golden visas' have attracted wealthy professionals and entrepreneurs." },
        { type: "section", head: "What the UAE wants", md:
          "The UAE wants the Iran war ended on terms that stop Iran threatening Gulf cities, closer security and technology ties with [[unit:us|the United States]], and good relations with everyone else too, from [[unit:cn|China]] and [[unit:ru|Russia]] to [[unit:in|India]]. It sees political Islamist movements such as the Muslim Brotherhood as a threat and backs strong, secular-leaning rulers across the region." },
        { type: "callout", tone: "why", md:
          "The UAE shows how a small, rich state can shape a region with money, technology and military reach, and how exposed that model is when war comes to the Gulf." }
      ],
      takeaways: [
        "The UAE is a federation of seven monarchies led by Abu Dhabi, with a population mostly of foreign residents.",
        "It is a global hub for trade, finance and now AI, and an assertive military and diplomatic player.",
        "In 2026 it was the Gulf state most heavily targeted by Iranian missiles and drones."
      ],
      check: { q: "Roughly what share of the UAE's population are Emirati citizens?",
        choices: ["About one in ten", "About half", "About nine in ten"], answer: 0,
        explain: "Around 90% of residents are foreign workers and their families, from South Asia, the Arab world, Africa, Europe and beyond." },
      sources: [
        { title: "United Arab Emirates in the 2026 Iran war", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/United_Arab_Emirates_in_the_2026_Iran_war", date: "2026" },
        { title: "Gulf states and the Iran war", publisher: "TIME", url: "https://time.com/article/2026/09/14/gulf-uae-saudi-arabia-qatar-iran-war/", date: "2026-09-14" },
        { title: "The Gulf that emerges from the Iran war will be very different", publisher: "Atlantic Council", url: "https://www.atlanticcouncil.org/dispatches/the-gulf-that-emerges-from-the-iran-war-will-be-very-different/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ae-2", kind: "power", asOf: "2026-09-28",
      title: "Seven rulers, one federation",
      dek: "A union in which Abu Dhabi's oil and Dubai's commerce set the terms, and the rulers' council decides.",
      blocks: [
        { type: "diagram", src: "img/ae/ae-2-power.svg",
          alt: "Diagram of power in the UAE. Seven emirates are each ruled by a hereditary family. The Federal Supreme Council of the seven rulers is the top decision-making body and elects the president, Mohamed bin Zayed, ruler of Abu Dhabi since 2022, who oversees defence, foreign policy and oil wealth. He works with the vice president and prime minister, Mohammed bin Rashid, ruler of Dubai, who runs the federal cabinet. They are advised by the 40-member Federal National Council, half chosen by a small electorate, which cannot make laws alone. Abu Dhabi and Dubai are the two emirates that matter most.",
          caption: "Formally a federation; in practice, Abu Dhabi leads and Dubai partners.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The federation", md:
          "The UAE is made up of seven emirates: Abu Dhabi, Dubai, Sharjah, Ajman, Umm al-Quwain, Ras al-Khaimah and Fujairah. Each is ruled by its own family and keeps control of much of its own affairs, including its oil and its courts in some cases. The federal government handles defence, foreign policy, immigration and federal services." },
        { type: "section", head: "The Supreme Council", md:
          "The Federal Supreme Council, made up of the seven rulers, is the country's highest authority. It elects the president and vice president for five-year terms and approves federal laws. Abu Dhabi and Dubai have a veto over its most important decisions. By tradition, the ruler of Abu Dhabi is president and the ruler of Dubai is vice president and prime minister." },
        { type: "section", head: "Abu Dhabi and Dubai", md:
          "Abu Dhabi holds more than 90% of the country's oil and pays for most of the federal budget. Dubai has little oil but built its wealth on trade, aviation, tourism, property and finance. The balance between them shifted in 2009, when Abu Dhabi bailed out Dubai after its property crash; the world's tallest building was renamed Burj Khalifa after Abu Dhabi's ruler. Since then Abu Dhabi, and MBZ, have been clearly in charge." },
        { type: "section", head: "The Federal National Council", md:
          "The UAE's only elected body, the 40-member Federal National Council, is advisory. Half its members are elected by an electoral college of a few hundred thousand citizens chosen by the rulers, and half are appointed. It can question ministers and review laws but cannot block them. Political parties are banned, and criticism of the rulers is a crime." },
        { type: "section", head: "Security and money", md:
          "MBZ's brothers hold key posts: Tahnoun bin Zayed is national security adviser and controls much of the state's investment and technology empire, and Mansour bin Zayed is vice president and runs major funds. Abu Dhabi's sovereign wealth funds, including ADIA and Mubadala, and newer vehicles like the AI investor MGX, are central tools of foreign policy as well as finance." },
        { type: "section", head: "Rule by the rulers", md:
          "Most laws are federal decrees drafted by ministries and approved by the rulers. Individual emirates also keep their own laws in some areas, and Dubai and Abu Dhabi run special financial zones that use English common law to reassure investors. The courts are not independent of the rulers, and verdicts in political cases follow the government's line, according to rights groups." },
        { type: "section", head: "Tolerance as policy", md:
          "The state promotes an image of religious tolerance: it has a ministry for tolerance, hosted the first papal mass in the Arabian Peninsula in 2019, and opened the Abrahamic Family House, with a mosque, church and synagogue side by side, in 2023." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Supporters", md:
            "The UAE's rulers have delivered stability, prosperity and tolerance for many faiths and nationalities in a turbulent region. Most citizens are content with the bargain." },
          right: { head: "Critics", md:
            "It is an autocracy where speech is policed, dissidents are jailed for years and migrant workers have few rights. Prosperity does not make it free." } }
      ],
      takeaways: [
        "The UAE is a federation of seven emirates; the council of their rulers elects the president.",
        "Abu Dhabi, with most of the oil, leads; Dubai is the commercial hub.",
        "The only elected body is advisory, and political parties are banned."
      ],
      check: { q: "By tradition, which ruler serves as UAE president?",
        choices: ["The ruler of Dubai", "The ruler of Abu Dhabi", "The ruler of Sharjah"], answer: 1,
        explain: "The ruler of Abu Dhabi, the richest emirate, is president; Dubai's ruler is vice president and prime minister." },
      sources: [
        { title: "United Arab Emirates profile", publisher: "BBC News", url: "https://www.bbc.com/news/world-middle-east-14703998", date: "n.d." },
        { title: "United Arab Emirates", publisher: "Britannica", url: "https://www.britannica.com/place/United-Arab-Emirates", date: "n.d." },
        { title: "World Report 2026: United Arab Emirates", publisher: "Human Rights Watch", url: "https://www.hrw.org/world-report/2026/country-chapters/united-arab-emirates", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "ae-9", kind: "founding", asOf: "2026-09-28",
      title: "1971: seven emirates unite",
      dek: "When Britain left the Gulf, Sheikh Zayed of Abu Dhabi and Sheikh Rashid of Dubai persuaded a group of small sheikhdoms to form one country.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ae/ae-9-hero.webp",
          alt: "Illustration of a low white guesthouse with a colonnade on a sandy shore beside a calm creek, with palm trees, under a hazy sky.",
          caption: "Union House in Dubai, where the rulers signed the founding agreement on 2 December 1971.",
          credit: "Illustration — not a photograph",
          prompt: "A low white 1960s guesthouse with a shaded colonnade on a sandy shore beside a calm turquoise creek, a few palm trees, a hazy pale sky, simple and historic, no people, no flags, no legible text." },
        { type: "timeline", head: "From Trucial States to federation", items: [
          ["1820", "First British treaty with the Gulf sheikhdoms"],
          ["1853", "Perpetual Maritime Truce: the 'Trucial States'"],
          ["1892", "Exclusive agreements make them British protectorates"],
          ["1968", "Britain announces withdrawal from east of Suez"],
          ["2 Dec 1971", "Six emirates form the United Arab Emirates"],
          ["Feb 1972", "Ras al-Khaimah joins as the seventh"]
        ] },
        { type: "section", head: "The Trucial States", md:
          "The coast of the lower Gulf was home to small sheikhdoms ruled by tribal families: the Al Nahyan in Abu Dhabi, the Al Maktoum in Dubai, the Al Qasimi in Sharjah and Ras al-Khaimah, and others. They lived from pearling, fishing, date farming and trade. After clashes with the Qasimi fleets, which Britain called piracy, Britain signed truces with the rulers from 1820, and the coast became known as the Trucial States. From 1892 Britain controlled their foreign affairs and defence, while leaving the rulers to govern at home." },
        { type: "section", head: "Britain leaves", md:
          "The pearling industry collapsed in the 1930s, after the Depression and the invention of cultured pearls, bringing hardship. Then oil was found offshore in Abu Dhabi in 1958 and exported from 1962, followed by Dubai in 1966. In January 1968 Britain, short of money, announced it would withdraw all its forces from east of Suez by the end of 1971. The small sheikhdoms, with a total population of perhaps 200,000, faced independence surrounded by larger neighbours, Iran and Saudi Arabia, with claims on their territory." },
        { type: "section", head: "Zayed and Rashid", md:
          "Sheikh Zayed bin Sultan Al Nahyan, ruler of Abu Dhabi since 1966, and Sheikh Rashid bin Saeed Al Maktoum of Dubai met at a desert camp in February 1968 and agreed to form a union. Talks to include Bahrain and Qatar failed; both chose independence in 1971. On 2 December 1971, six emirates, Abu Dhabi, Dubai, Sharjah, Ajman, Umm al-Quwain and Fujairah, declared the United Arab Emirates, with Zayed as president and Rashid as vice-president. Ras al-Khaimah joined in February 1972." },
        { type: "section", head: "Iran and the islands", md:
          "On 30 November 1971, the day before Britain's protection ended, Iran seized the islands of Greater and Lesser Tunb, claimed by Ras al-Khaimah, and landed on Abu Musa under an agreement with Sharjah. The UAE has demanded their return ever since, a dispute still raised in every Gulf summit communiqué, which Iran rejects." },
        { type: "compare", head: "Two views of the union",
          left: { head: "A success", md:
            "Zayed's patient diplomacy and Abu Dhabi's oil money built the Arab world's most successful federation from scratch." },
          right: { head: "An unequal partnership", md:
            "Power has always rested with Abu Dhabi and Dubai; the poorer northern emirates depend on federal money and have little say." } },
        { type: "section", head: "Why it still matters", md:
          "Zayed, who ruled until his death in 2004, is revered as the father of the nation; his son Mohamed bin Zayed is now president. The federation's structure, with Abu Dhabi as the dominant power and Dubai as the commercial hub, still shapes the country, and 2 December is National Day." }
      ],
      takeaways: [
        "The Gulf sheikhdoms were British protectorates, the 'Trucial States', until 1971.",
        "When Britain left, Sheikh Zayed of Abu Dhabi and Sheikh Rashid of Dubai led seven emirates into a federation.",
        "Iran seized three islands on the eve of independence, a dispute that continues."
      ],
      check: { q: "Which two emirates were invited to join the UAE but chose independence?",
        choices: ["Oman and Kuwait", "Bahrain and Qatar", "Sharjah and Ajman"], answer: 1,
        explain: "Bahrain and Qatar took part in talks but became independent separately in 1971." },
      sources: [
        { title: "United Arab Emirates: History", publisher: "Britannica", url: "https://www.britannica.com/place/United-Arab-Emirates/History", date: "n.d." },
        { title: "Zayed bin Sultan Al Nahyan", publisher: "Britannica", url: "https://www.britannica.com/biography/Zayed-bin-Sultan-Al-Nahyan", date: "n.d." },
        { title: "History of the UAE", publisher: "UAE Government portal", url: "https://u.ae/en/about-the-uae/history", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ae-3", kind: "history", asOf: "2026-09-28",
      title: "From pearls to global hub",
      dek: "Fishing villages under British protection became, within two generations, one of the richest and most connected countries on Earth.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ae/ae-3-hero.webp",
          alt: "Illustration of wooden dhow boats moored along a creek at sunset, with low old buildings on one bank and glass skyscrapers rising on the other.",
          caption: "Dubai Creek, where traditional dhows still trade beside the modern city.",
          credit: "Illustration — not a photograph",
          prompt: "Traditional wooden dhow boats moored along a creek at sunset, low sand-coloured old buildings with wind towers on one bank, gleaming glass skyscrapers rising on the other, warm golden light on the water, past and present side by side, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1820–1971", "The 'Trucial States' under British protection"],
          ["1958–62", "Oil found offshore and in Abu Dhabi"],
          ["1971", "Independence and federation under Sheikh Zayed"],
          ["2004", "Zayed dies; his son Khalifa succeeds"],
          ["2009", "Abu Dhabi bails out Dubai"],
          ["2020", "The Abraham Accords with Israel"],
          ["2022", "MBZ becomes president"]
        ] },
        { type: "section", head: "1. The Trucial States", md:
          "For centuries the coast's small sheikhdoms lived from fishing, trade and pearl diving. From 1820 Britain signed truces with their rulers to stop attacks on shipping, and the area became known as the Trucial States, under British protection. The collapse of the pearl trade in the 1930s, when cultured pearls arrived, brought real poverty." },
        { type: "section", head: "2. Oil and federation", md:
          "Oil was found in Abu Dhabi around 1960, and exports began in 1962. When Britain announced it would leave the Gulf, Abu Dhabi's ruler, Sheikh Zayed bin Sultan Al Nahyan, persuaded six emirates to form a federation on 2 December 1971; Ras al-Khaimah joined in 1972. Zayed, president until his death in 2004, used oil money to build schools, hospitals and cities from nothing, and is revered as the father of the nation. Iran seized the three disputed islands just before independence." },
        { type: "section", head: "3. Dubai's reinvention", md:
          "Dubai's rulers, with far less oil, bet on trade instead: a huge free-trade port at Jebel Ali from 1979, the airline Emirates from 1985, then tourism, luxury property and finance. By the 2000s Dubai was a global brand. Its debt-fuelled property boom crashed in 2009, and Abu Dhabi's bailout confirmed where power lay." },
        { type: "section", head: "4. A more assertive state", md:
          "After the Arab Spring of 2011, which it saw as a threat, the UAE under MBZ became more assertive. It cracked down on Islamist and liberal critics at home, backed Egypt's 2013 military takeover, joined the Saudi-led war in Yemen in 2015, backed Khalifa Haftar's forces in Libya, and built military bases around the Red Sea. Critics called it 'Little Sparta'." },
        { type: "section", head: "Qatar and the blockade", md:
          "In 2017 the UAE, Saudi Arabia, Bahrain and Egypt cut ties with and blockaded neighbouring Qatar, accusing it of backing Islamist groups and being too close to Iran. The blockade lasted until 2021 and showed how differently Gulf states see political Islam: the UAE views the Muslim Brotherhood as its main ideological enemy, while Qatar and Turkey have hosted its members. Relations with Qatar have since been restored, though the rivalry between the two, over media, money and influence across the region, lingers." },
        { type: "section", head: "5. Accords and influence", md:
          "In September 2020 the UAE became the first Gulf state to normalise relations with Israel under the US-brokered Abraham Accords, followed by Bahrain and Morocco. Trade and tourism with Israel boomed. When Houthi missiles and drones hit Abu Dhabi in January 2022, killing three people, the UAE drew closer still to Washington and to Israeli air-defence technology." }
      ],
      takeaways: [
        "The Trucial States under British protection became the UAE in 1971, led by Sheikh Zayed.",
        "Abu Dhabi's oil and Dubai's trade-based model built one of the world's richest countries.",
        "Under MBZ the UAE became assertive abroad and normalised relations with Israel in 2020."
      ],
      check: { q: "When did the UAE normalise relations with Israel?",
        choices: ["1979", "2020, under the Abraham Accords", "2025"], answer: 1,
        explain: "The UAE signed the Abraham Accords in September 2020, the first Gulf state to do so." },
      sources: [
        { title: "United Arab Emirates profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-middle-east-14704414", date: "n.d." },
        { title: "United Arab Emirates", publisher: "Britannica", url: "https://www.britannica.com/place/United-Arab-Emirates", date: "n.d." },
        { title: "Abraham Accords", publisher: "US Department of State", url: "https://www.state.gov/the-abraham-accords", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "ae-10", kind: "past", asOf: "2026-09-28",
      title: "Building Dubai",
      dek: "Without much oil, Dubai's rulers bet on trade, a giant port, an airline and tourism, and built one of the world's great hubs in a generation.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ae/ae-10-hero.webp",
          alt: "Illustration of a creek lined with wooden dhows loaded with goods, and glass towers rising behind the old trading district.",
          caption: "Dubai Creek, where traders' dhows still dock beneath the towers of the modern city.",
          credit: "Illustration — not a photograph",
          prompt: "A creek lined with traditional wooden dhows loaded with sacks and boxes, old low trading houses with wind towers along the bank, gleaming glass skyscrapers rising behind, golden afternoon light, old and new together, no people close up, no legible text or logos." },
        { type: "facts", head: "The Dubai model", rows: [
          ["Jebel Ali port", "Opened 1979; among the world's largest container ports"],
          ["Emirates airline", "Founded 1985"],
          ["Dubai International", "The world's busiest airport for international passengers"],
          ["Burj Khalifa", "The world's tallest building, opened 2010"],
          ["Oil's share of Dubai's economy", "Only a small fraction today"]
        ] },
        { type: "section", head: "A trading town", md:
          "Dubai grew as a trading port in the early 20th century, when merchants from Persia and India settled there attracted by low taxes. Sheikh Rashid, ruler from 1958, dredged the creek, built an airport, a port and the World Trade Centre tower in the 1970s, and knew that Dubai's modest oil reserves, far smaller than Abu Dhabi's, would not last." },
        { type: "section", head: "Port, airline, free zones", md:
          "In 1979 Dubai opened the Jebel Ali port, then a vast gamble in empty desert, alongside a free zone where foreign companies could operate with full ownership and no taxes. In 1985 it founded Emirates airline, which became one of the world's largest, turning Dubai's airport into a global crossroads between Europe, Asia and Africa. Under Sheikh Mohammed bin Rashid, ruler since 2006, the city added financial and media free zones, luxury tourism, and landmarks such as the palm-shaped islands and the Burj Khalifa." },
        { type: "section", head: "The 2009 crash", md:
          "The model depended on debt and property speculation. When the global financial crisis hit, property prices in Dubai fell by about half, and in November 2009 the state conglomerate Dubai World asked to delay payments on about $26 billion of debt, shocking markets. Abu Dhabi stepped in with a $10 billion bailout; the tallest tower, due to be named Burj Dubai, opened in January 2010 as the Burj Khalifa, after Abu Dhabi's ruler. The episode confirmed Abu Dhabi's dominance within the federation." },
        { type: "section", head: "Recovery and reinvention", md:
          "Dubai recovered and reinvented itself again: it hosted the Expo 2020 world fair, delayed to 2021 by the pandemic, attracted wealthy migrants and businesses fleeing Russia after 2022, and saw record property prices. It has drawn criticism as a haven for illicit money, and was on the Financial Action Task Force's grey list from 2022 to 2024 over weaknesses in anti-money-laundering controls." },
        { type: "section", head: "A different kind of emirate", md:
          "Dubai's rulers have run the city almost like a company, through state-owned groups such as Dubai World, Emirates and the port operator DP World, which now runs terminals on six continents. Dubai has no income tax, and its openness, from alcohol in hotels to relaxed dress codes, sets it apart from its conservative neighbours." },
        { type: "compare", head: "Two views of Dubai",
          left: { head: "Admirers", md:
            "A visionary city-state that turned a desert creek into a global hub and showed the Gulf how to prosper beyond oil." },
          right: { head: "Critics", md:
            "A city built on migrant labour and debt, attractive to dirty money, and dependent on a stability it cannot guarantee." } },
        { type: "section", head: "Why it matters", md:
          "Dubai's success inspired Saudi Arabia's Vision 2030 and Qatar's ambitions. Its dependence on openness also made it vulnerable when Iranian attacks and the 2026 war disrupted Gulf shipping and flights." }
      ],
      takeaways: [
        "Dubai's rulers built a hub on trade, the Jebel Ali port, Emirates airline and free zones.",
        "In 2009 Dubai World's debt crisis forced a $10 billion rescue by Abu Dhabi.",
        "Dubai recovered as a magnet for money and people, but critics point to migrant labour and illicit finance."
      ],
      check: { q: "Why is the world's tallest building called the Burj Khalifa?",
        choices: ["After Dubai's founder", "After Abu Dhabi's ruler, who bailed Dubai out in 2009", "After a sponsor company"], answer: 1,
        explain: "Named for Sheikh Khalifa bin Zayed, it opened weeks after Abu Dhabi's $10 billion rescue of Dubai." },
      sources: [
        { title: "Dubai", publisher: "Britannica", url: "https://www.britannica.com/place/Dubai-United-Arab-Emirates", date: "n.d." },
        { title: "Burj Khalifa", publisher: "Britannica", url: "https://www.britannica.com/topic/Burj-Khalifa", date: "n.d." },
        { title: "Jurisdictions no longer subject to increased monitoring: United Arab Emirates", publisher: "Financial Action Task Force", url: "https://www.fatf-gafi.org/en/publications/High-risk-and-other-monitored-jurisdictions/increased-monitoring-february-2024.html", date: "2024-02" }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "ae-11", kind: "past", asOf: "2026-09-28",
      title: "The Arab Spring and the Brotherhood",
      dek: "When revolts swept the Arab world in 2011, the UAE saw the Muslim Brotherhood as its greatest threat and set out to defeat it at home and abroad.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ae/ae-11-hero.webp",
          alt: "Illustration of an imposing modern courthouse with tall columns in a desert city at midday, with an empty plaza in front.",
          caption: "In 2013 dozens of Emiratis were convicted in a mass trial of alleged Brotherhood members.",
          credit: "Illustration — not a photograph",
          prompt: "An imposing modern courthouse with tall slender columns and a vast empty plaza in a desert city at midday, harsh white sunlight, palm trees, stern and silent, no people, no flags, no legible text." },
        { type: "facts", head: "The campaign", rows: [
          ["Petition for reform", "March 2011, signed by 133 Emiratis"],
          ["'UAE 94' trial", "2013: 69 convicted of plotting against the state"],
          ["Brotherhood designated terrorist", "2014"],
          ["Mass trial", "July 2024: 43 given life sentences"],
          ["Qatar blockade", "2017–2021, with Saudi Arabia, Bahrain and Egypt"]
        ] },
        { type: "section", head: "Revolts next door", md:
          "In 2011 uprisings toppled leaders in Tunisia, Egypt, Libya and Yemen, and shook Bahrain and Syria. In the UAE, a wealthy state with few protests, 133 citizens signed a petition in March 2011 calling for an elected parliament. The authorities responded with arrests. Mohamed bin Zayed, then crown prince of Abu Dhabi, concluded that the biggest danger was not democracy protesters but political Islam, and specifically the Muslim Brotherhood, which won elections in Egypt and Tunisia." },
        { type: "section", head: "Crackdown at home", md:
          "The UAE had a local Brotherhood-linked group, al-Islah. In 2013, 94 people, many of them teachers, lawyers and academics, were tried together; 69 were convicted of plotting to seize power and given long sentences, in a trial that human rights groups called grossly unfair. In 2014 the UAE designated the Brotherhood a terrorist organisation. Critics, such as the human rights activist Ahmed Mansoor, have also been jailed. In 2024, many of those already imprisoned were convicted again in a new mass trial, with dozens sentenced to life." },
        { type: "section", head: "Counter-revolution abroad", md:
          "The UAE turned its money and power outward. It strongly supported the Egyptian army's overthrow of President Mohamed Morsi, a Brotherhood leader, in 2013 and funded the new government. It backed the Libyan commander Khalifa Haftar against Islamist-aligned forces, joined the Saudi-led war in Yemen from 2015, and in 2017 joined Saudi Arabia, Bahrain and Egypt in cutting ties with and blockading Qatar, accused of backing the Brotherhood and being too close to Iran. The blockade ended in 2021." },
        { type: "section", head: "Normalisation with Israel", md:
          "The same outlook, hostility to political Islam and to Iran, helped lead the UAE to sign the [[Abraham Accords]] with Israel in 2020, the first Gulf state to establish full relations. Trade, tourism and defence ties followed, and the UAE kept them through the Gaza war despite public criticism." },
        { type: "compare", head: "Two views",
          left: { head: "The UAE's case", md:
            "Islamist movements threaten stability and the modern, tolerant society the UAE is building; firm action prevented chaos." },
          right: { head: "Critics' case", md:
            "The UAE crushed peaceful dissent at home and fuelled wars abroad, from Yemen to Libya and Sudan, in the name of fighting Islamists." } },
        { type: "section", head: "Why it still matters", md:
          "This strategy explains the UAE's assertive foreign policy today: its partnerships with strongmen, its role in the Horn of Africa and Sudan, and its close ties to Israel. At home, there is no organised opposition, and political criticism can lead to long prison terms. In March 2025 an appeals court upheld most of the 2024 convictions, and in June 2025 24 more defendants were sentenced to life, according to Human Rights Watch." }
      ],
      takeaways: [
        "After the 2011 Arab Spring, the UAE saw the Muslim Brotherhood as its main threat.",
        "It jailed dozens of alleged Islah members in mass trials and designated the Brotherhood a terrorist group in 2014.",
        "Abroad it backed Egypt's 2013 coup, Haftar in Libya and the Qatar blockade, and signed the Abraham Accords."
      ],
      check: { q: "What was the 'UAE 94' trial?",
        choices: ["A football tournament", "A 2013 mass trial of alleged members of a Brotherhood-linked group", "An oil contract dispute"], answer: 1,
        explain: "94 people were tried together; 69 were convicted of plotting to seize power." },
      sources: [
        { title: "UAE: Unfair Trial, Unjust Sentences", publisher: "Human Rights Watch", url: "https://www.hrw.org/news/2024/07/10/uae-unfair-trial-unjust-sentences", date: "2024-07-10" },
        { title: "United Arab Emirates", publisher: "Amnesty International", url: "https://www.amnesty.org/en/location/middle-east-and-north-africa/middle-east/united-arab-emirates/", date: "n.d." },
        { title: "Qatar diplomatic crisis", publisher: "Britannica", url: "https://www.britannica.com/event/Qatar-diplomatic-crisis", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "ae-4", kind: "players", asOf: "2026-09-28",
      title: "The Al Nahyan brothers and Dubai's ruler",
      dek: "A president, his security chief who runs the AI empire, and the ruler who built modern Dubai.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ae/ae-4-hero.webp",
          alt: "Illustration of a vast white marble presidential palace with a domed roof beside the sea in Abu Dhabi, at golden hour.",
          caption: "Power in the UAE is concentrated in Abu Dhabi's ruling family.",
          credit: "Illustration — not a photograph",
          prompt: "A vast white marble palace with a large central dome and colonnades beside a calm turquoise sea at golden hour, palm-lined gardens and fountains, grand and serene, no people close up, no flags or legible text." },
        { type: "people", head: "Five to know", items: [
          { name: "Mohamed bin Zayed", role: "President and ruler of Abu Dhabi, since 2022",
            img: "img/ae/portrait-mbz.webp", source: "Official photo (Kremlin.ru or White House, CC BY / public domain) via Wikimedia Commons; confirm the licence.",
            md: "De facto leader since his half-brother Khalifa's stroke in 2014. A former air force pilot and military strategist; the driving force behind the UAE's foreign policy." },
          { name: "Mohammed bin Rashid Al Maktoum", role: "Vice president, PM and ruler of Dubai",
            img: "img/ae/portrait-mbr.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Built Dubai into a global city. Runs the federal cabinet and government services." },
          { name: "Tahnoun bin Zayed", role: "National security adviser",
            img: "img/ae/portrait-tahnoun.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "MBZ's brother, chair of G42, the AI investor MGX and other giant holdings. Leads the UAE's AI and chip dealings with the US." },
          { name: "Mansour bin Zayed", role: "Vice president and deputy PM",
            img: "img/ae/portrait-mansour.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "MBZ's brother, chair of the Central Bank and owner of Manchester City football club." },
          { name: "Khaled bin Mohamed", role: "Crown prince of Abu Dhabi",
            img: "img/ae/portrait-khaled.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "MBZ's eldest son, named heir to Abu Dhabi in 2023, and being prepared for leadership." }
        ] },
        { type: "section", head: "A family state", md:
          "The UAE's most important decisions are made by MBZ with a small circle, most of them his brothers and sons. Unlike Saudi Arabia, where MBS stands alone, Abu Dhabi's power is shared among the 'Bani Fatima', the six sons of Sheikh Zayed and his favourite wife, who divide security, money and diplomacy between them. The system is secretive but efficient." },
        { type: "section", head: "MBZ's worldview", md:
          "Diplomats describe MBZ as a strategic thinker shaped by the Arab Spring and by a deep distrust of Iran and political Islam. He believes small states survive by making themselves useful to great powers, which is why the UAE hosts US forces, buys Chinese goods, invests in Russia-linked markets and courts India. He has built one of the region's most capable militaries, tested in Yemen, Libya and beyond." },
        { type: "section", head: "Dubai's role", md:
          "Dubai keeps a distinct identity: more open, more commercial and less involved in military adventures. Its ruler, Mohammed bin Rashid, in his late 70s, has named his son Hamdan as crown prince and deputy prime minister. Dubai's success depends on the UAE's reputation as a stable place to live and do business, which gives it a strong interest in de-escalation with Iran, with which it has deep trading links going back generations; many long-established Dubai merchant families have Iranian roots." },
        { type: "section", head: "Society", md:
          "Emiratis enjoy free health care, education, housing grants and well-paid public jobs. Most of the workforce, though, is foreign: construction workers and domestic staff from South Asia and Africa, and professionals from everywhere. Rights groups have documented abuses of migrant workers, though labour laws have been reformed. Dissent is not tolerated: in 2024 dozens of activists were given life sentences in a mass trial." },
        { type: "section", head: "Diplomacy", md:
          "The UAE is famous for talking to everyone. It hosts Russian money and mediates prisoner exchanges between Russia and Ukraine, trades heavily with China and Iran, is close to India, and remains a key US partner hosting American forces." }
      ],
      takeaways: [
        "MBZ has led the UAE for more than a decade; his brothers control security, investment and technology.",
        "Dubai's ruler, Mohammed bin Rashid, is vice president and prime minister.",
        "Citizens get generous benefits, but dissent is harshly punished and most workers are foreign."
      ],
      check: { q: "Who is the UAE's national security adviser and head of its AI empire?",
        choices: ["Tahnoun bin Zayed", "Mohammed bin Rashid", "Khaled bin Mohamed"], answer: 0,
        explain: "Tahnoun bin Zayed chairs G42 and MGX and oversees the UAE's AI deals with the US." },
      sources: [
        { title: "UAE AI Story: UAE-US Partnership in Artificial Intelligence", publisher: "UAE Preferred", url: "https://www.uaepreferred.com/ai-story", date: "2026" },
        { title: "World Report 2026: United Arab Emirates", publisher: "Human Rights Watch", url: "https://www.hrw.org/world-report/2026/country-chapters/united-arab-emirates", date: "2026" },
        { title: "United Arab Emirates", publisher: "Britannica", url: "https://www.britannica.com/place/United-Arab-Emirates", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "ae-5", kind: "story", asOf: "2026-09-28",
      title: "The AI bet",
      dek: "Abu Dhabi is spending hundreds of billions to become the world's third pole of artificial intelligence, after the US and China.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ae/ae-5-hero.webp",
          alt: "Illustration of a vast desert data-centre campus at night, rows of low buildings glowing, cooling towers and power lines leading to the horizon.",
          caption: "Stargate UAE is planned as a one-gigawatt AI computing cluster in Abu Dhabi.",
          credit: "Illustration — not a photograph",
          prompt: "A vast data-centre campus in the desert at night, rows of long low buildings glowing blue, cooling towers releasing vapour, high-voltage power lines stretching to the horizon, sand dunes beyond, futuristic and immense, no people, no legible text or logos." },
        { type: "section", head: "What happened", md:
          "In May 2025, during Trump's visit to the Gulf, the UAE and the US announced a 5-gigawatt UAE–US AI Campus in Abu Dhabi. Its first part, Stargate UAE, is a 1-gigawatt cluster to be built by G42, the Abu Dhabi AI company, and operated with OpenAI and Oracle, using hundreds of thousands of Nvidia's most advanced chips. Its first 200 megawatts were due to go live in 2026.\n\n" +
          "In November 2025 the Trump administration approved large chip exports to G42, and in July 2026 the Commerce Department moved the UAE into its most trusted category of countries, removing the need for licences for chips like Nvidia's Blackwell." },
        { type: "facts", head: "By the numbers", rows: [
          ["UAE–US AI Campus", "5 gigawatts planned"],
          ["Stargate UAE", "1 gigawatt, first 200 MW due in 2026"],
          ["Partners", "G42, OpenAI, Oracle, Nvidia, Cisco, SoftBank"],
          ["US export status", "Moved to the most trusted tier in July 2026"],
          ["Investment pledged in the US", "$1.4 trillion over ten years (2025 pledge)"]
        ] },
        { type: "section", head: "Why it happened", md:
          "The UAE has cheap energy, capital and land, and wants a role in the industry it expects to define the century, both as an investment and as a source of influence. The US wanted to keep the Gulf's money and computing power in its own camp rather than China's. G42 cut ties with Chinese suppliers, including Huawei, as a condition of American partnership." },
        { type: "section", head: "Beyond data centres", md:
          "The UAE also trains its own models. Abu Dhabi's Technology Innovation Institute released the Falcon open-source models, and G42 has built Arabic-language systems. The government appointed the world's first minister for artificial intelligence in 2017 and has pushed AI into schools and public services. Its investment vehicle MGX has put money into OpenAI and into US data-centre projects, tying Emirati capital closely to America's AI industry and its leading companies, from chips to cloud computing." },
        { type: "compare", head: "Two views of the bet",
          left: { head: "Supporters", md:
            "Partnering with the UAE keeps a wealthy, strategically placed country aligned with America's AI ecosystem, and brings huge investment to US companies." },
          right: { head: "Critics", md:
            "Sending advanced chips to an autocracy with close ties to China risks leaks, and US lawmakers have asked whether business links to the Trump family influenced the approvals, which the White House denies." } },
        { type: "section", head: "Why it matters", md:
          "Computing power is becoming a strategic resource like oil. If the UAE succeeds, it will host some of the world's largest AI clusters and give Gulf states a new form of leverage. The 2026 war showed the risk: data centres, like oil terminals, are within range of Iranian missiles." },
        { type: "section", head: "What's next", md:
          "Watch whether the first phase of Stargate UAE goes live on schedule despite the war, how Congress's scrutiny of the chip deals develops, and whether other Gulf states follow with their own AI hubs." }
      ],
      takeaways: [
        "The UAE and US announced a 5-gigawatt AI campus in Abu Dhabi in 2025, anchored by Stargate UAE.",
        "US rules were eased in 2025–26 to let the UAE import the most advanced chips.",
        "Critics raise security and conflict-of-interest concerns; the war showed the physical risks."
      ],
      check: { q: "Which Abu Dhabi company is building Stargate UAE?",
        choices: ["Aramco", "G42", "Emirates"], answer: 1,
        explain: "G42, chaired by Tahnoun bin Zayed, is building the cluster with OpenAI, Oracle and Nvidia." },
      sources: [
        { title: "Global Tech Alliance Launches Stargate UAE", publisher: "G42", url: "https://www.g42.ai/resources/news/global-tech-alliance-launches-stargate-uae", date: "2025-05" },
        { title: "G42 CEO says company will receive first AI chip shipments within months", publisher: "DCD", url: "https://www.datacenterdynamics.com/en/news/g42-ceo-says-company-will-receive-first-ai-chip-shipments-within-months-to-support-initial-200mw-of-capacity-for-planned-stargate-cluster/", date: "2025" },
        { title: "UAE Gets License-Free Nvidia AI Chips as Congress Probes Trump Crypto Conflict", publisher: "Tech Times", url: "https://www.techtimes.com/articles/320682/20260716/uae-gets-license-free-nvidia-ai-chips-congress-probes-trump-crypto-conflict.htm", date: "2026-07-16" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "ae-6", kind: "story", asOf: "2026-09-28",
      title: "The Sudan accusation",
      dek: "UN experts, rights groups and Sudan's government accuse the UAE of backing the paramilitary force blamed for mass killings in Darfur. The UAE denies it.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ae/ae-6-hero.webp",
          alt: "Illustration of a dusty desert road with a long line of displaced people walking with bundles and donkeys toward a distant camp at dawn.",
          caption: "Sudan's war has displaced more than 12 million people, the largest displacement crisis in the world.",
          credit: "Illustration — not a photograph",
          prompt: "A long line of displaced people seen from behind walking along a dusty desert road at dawn, carrying bundles, a donkey cart, a scattering of white tents far away, acacia trees, haze and pale light, sorrowful, no faces, no legible text." },
        { type: "section", head: "What happened", md:
          "Since April 2023 Sudan has been torn by war between its army and the Rapid Support Forces (RSF), a paramilitary group. In October 2025 the RSF captured El Fasher, the last army stronghold in Darfur, after an 18-month siege; UN investigators and rights groups documented mass killings, and UN investigators have since described evidence of genocide by the RSF there.\n\n" +
          "UN experts, rights groups and some US lawmakers have pointed to evidence that the UAE supplied the RSF with weapons and support, often through neighbouring countries. In May 2026 Human Rights Watch reported that Colombian mercenaries recruited through UAE-linked networks had fought with the RSF at El Fasher. Sudan's government cut diplomatic ties with the UAE in May 2025, calling it an aggressor." },
        { type: "section", head: "The UAE's position", md:
          "The UAE firmly denies arming the RSF and calls the accusations baseless and politically motivated. It says it is one of the largest donors of humanitarian aid to Sudan, supports a ceasefire and a civilian government, and blames both warring sides for the conflict. The International Court of Justice dismissed a genocide case Sudan brought against the UAE in 2025, ruling it lacked jurisdiction, without examining the evidence." },
        { type: "section", head: "El Fasher", md:
          "El Fasher, the capital of North Darfur, held hundreds of thousands of people during the siege. After it fell, survivors described killings of civilians fleeing the city, mass sexual violence and executions of men of non-Arab ethnic groups. Satellite images analysed by researchers showed what appeared to be mass graves. The RSF has denied targeting civilians and said it would investigate some incidents. Aid agencies say famine conditions spread across Darfur during the siege, and that aid still struggles to reach survivors in the region." },
        { type: "compare", head: "Two accounts",
          left: { head: "The accusers", md:
            "Evidence from flight records, weapons markings, recruiting networks and UN monitors points to the UAE as the RSF's main foreign backer, prolonging a war marked by atrocities." },
          right: { head: "The UAE", md:
            "The claims come from a party to the war seeking to deflect blame. The UAE provides aid, backs peace efforts and supports neither side militarily." } },
        { type: "section", head: "Why it would matter", md:
          "If proven, it would show how Gulf money and weapons shape wars far beyond the Gulf. Analysts point to several possible motives: access to Sudan's gold and Red Sea coast, opposition to Islamist forces allied with Sudan's army, and competition for influence with [[unit:sa|Saudi Arabia]], [[unit:eg|Egypt]] and [[unit:tr|Turkey]], which lean toward the army." },
        { type: "section", head: "What's next", md:
          "US and European lawmakers have pressed for arms sales to the UAE to be conditioned on Sudan. Watch ceasefire talks involving the US, Saudi Arabia, Egypt and the UAE, further UN reports, and whether the RSF's hold on Darfur leads to a de facto partition of Sudan, with the army holding the east and the capital." }
      ],
      takeaways: [
        "The RSF captured El Fasher in October 2025; UN investigators describe evidence of genocide there.",
        "UN experts, rights groups and Sudan accuse the UAE of arming the RSF; the UAE denies it.",
        "Sudan cut ties with the UAE in 2025; the ICJ dismissed Sudan's case for lack of jurisdiction."
      ],
      check: { q: "What is the RSF?",
        choices: ["Sudan's regular army", "A paramilitary force fighting Sudan's army since 2023", "A UN peacekeeping mission"], answer: 1,
        explain: "The Rapid Support Forces grew out of the Janjaweed militias of the Darfur war and have fought the army since April 2023." },
      sources: [
        { title: "From Bogotá to El Fasher: The UAE's Role in the Deployment of Colombian Fighters and Other Backing to the RSF", publisher: "Human Rights Watch", url: "https://www.hrw.org/report/2026/05/25/from-bogota-to-el-fasher/the-uaes-role-in-the-deployment-of-colombian-fighters", date: "2026-05-25" },
        { title: "UAE denies role in Sudan genocide as Colombian mercenary scandal grows", publisher: "The Week", url: "https://theweek.com/world-news/uae-sudan-el-fasher-colombia-genocide-mercenaries", date: "2026" },
        { title: "UN investigators submit additional evidence of genocide by RSF in Sudan's el-Fasher", publisher: "Middle East Eye", url: "https://www.middleeasteye.net/news/un-investigators-detail-new-evidence-mass-rape-and-genocide-sudan-el-fasher", date: "2026" },
        { title: "UAE denies supplying Sudan paramilitaries with Chinese arms", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/5/9/uae-denies-supplying-sudan-paramilitaries-with-chinese-arms", date: "2025-05-09" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "ae-7", kind: "story", asOf: "2026-09-28",
      title: "Under fire",
      dek: "In the 2026 war the UAE intercepted more than 500 ballistic missiles and 2,000 drones, and, according to reports, struck back.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ae/ae-7-hero.webp",
          alt: "Illustration of a glittering skyline of skyscrapers at night with thin bright trails of interceptor missiles rising over the sea.",
          caption: "Air-defence systems over the Gulf coast intercepted most of Iran's missiles and drones.",
          credit: "Illustration — not a photograph",
          prompt: "A glittering coastal skyline of very tall skyscrapers at night, thin bright trails of interceptor missiles rising over dark water, small flashes high in the sky, reflections on the sea, tense and surreal, no people, no legible text." },
        { type: "section", head: "What happened", md:
          "Within hours of the US–Israeli strikes on [[unit:ir|Iran]] on 28 February 2026, Iran began firing missiles and drones at the UAE, which hosts US forces and is a close partner of Israel. By early April the UAE said it had intercepted 537 ballistic missiles, 2,256 drones and 26 cruise missiles, using American THAAD and Patriot systems. At least 15 people were killed and more than 240 injured. Attacks hit oil facilities, ports and an ADNOC tanker, and continued intermittently after the April ceasefire, including in May and at the end of August.\n\n" +
          "According to the Wall Street Journal, the UAE also struck Iranian infrastructure with warplanes and drones in coordination with the US and Israel, including an attack on Lavan Island. The UAE has not publicly detailed its role." },
        { type: "facts", head: "By the numbers (to early April 2026)", rows: [
          ["Ballistic missiles intercepted", "537"],
          ["Drones intercepted", "2,256"],
          ["Cruise missiles intercepted", "26"],
          ["Killed", "At least 15"],
          ["Injured", "More than 240"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Iran targeted the Gulf states to raise the cost of the war for the United States and its partners, and to pressure them to push Washington toward a ceasefire. The UAE, with US bases, deep ties to Israel and its position facing Iran across the Gulf, was the most exposed. Its financial and trade hubs are also symbols of the Gulf's prosperity." },
        { type: "section", head: "Life under the missiles", md:
          "Residents received emergency alerts on their phones, and flights were disrupted as airspace closed at times. Falling debris from interceptions caused many of the injuries. The government urged calm and warned residents against sharing images of attacks online. For a country whose brand is safety, managing fear was as important as managing missiles, and officials stressed how many attacks were stopped, crediting years of investment in air defence and close cooperation with US forces." },
        { type: "compare", head: "Two views of the UAE's response",
          left: { head: "Supporters", md:
            "The UAE defended its people with remarkable success, showed it will not be intimidated, and deepened alliances that make it harder to attack next time." },
          right: { head: "Critics", md:
            "By aligning so closely with the US and Israel, and reportedly striking Iran, the UAE made itself a target and put its open-economy model at risk." } },
        { type: "section", head: "Why it matters", md:
          "The war tested the UAE's bet that it could be both a global business hub and a front-line military partner. So far the hub has largely held: airports reopened after closures and markets recovered. But insurance costs have risen, and the prospect of more attacks hangs over investment." },
        { type: "section", head: "What's next", md:
          "The UAE wants any US–Iran deal to include limits on Iran's missiles and drones, not just its nuclear programme. Watch its air-defence purchases, its role in post-war Gulf security talks, and whether Iranian attacks resume if US–Iran talks fail." }
      ],
      takeaways: [
        "Iran fired over 500 ballistic missiles and more than 2,000 drones at the UAE by early April 2026.",
        "Most were intercepted, but at least 15 people were killed and oil sites and a tanker were hit.",
        "The UAE reportedly struck Iranian targets itself; attacks continued after the April ceasefire."
      ],
      check: { q: "Why was the UAE especially exposed in the 2026 war?",
        choices: ["It declared war on Iran first", "It hosts US forces, is close to Israel and faces Iran across the Gulf", "It had no air defences"], answer: 1,
        explain: "Its US bases, close ties with Israel and position directly across the Gulf from Iran made it a prime target." },
      sources: [
        { title: "2026 Iranian strikes on the United Arab Emirates", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_Iranian_strikes_on_the_United_Arab_Emirates", date: "2026" },
        { title: "UAE accuses Iran of attacks as 'large fire' breaks out at oil refinery", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/5/4/uae-reports-missile-and-drone-strikes-incoming-from-iran", date: "2026-05-04" },
        { title: "UAE intercepts drone after US and Iran exchange attacks", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/8/31/uae-intercepts-drone-after-us-and-iran-exchange-attacks", date: "2026-08-31" },
        { title: "2026 Lavan Island attack", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_Lavan_Island_attack", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "ae-12", kind: "spotlight", asOf: "2026-09-28",
      title: "A country of migrants",
      dek: "Nearly nine in ten people living in the UAE are foreigners. Their work built the country; their rights are limited.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ae/ae-12-hero.webp",
          alt: "Illustration of construction workers in blue overalls and helmets seen from behind walking toward a bus at dawn, with cranes and half-built towers behind.",
          caption: "Millions of South Asian workers have built the UAE's cities.",
          credit: "Illustration — not a photograph",
          prompt: "A group of construction workers in blue overalls and hard hats seen from behind walking toward a white bus at dawn, tall cranes and half-built skyscrapers behind them, dusty golden light, weary and dignified, no faces, no legible text or logos." },
        { type: "facts", head: "Who lives in the UAE", rows: [
          ["Population", "About 11 million (2024)"],
          ["Emirati citizens", "About 11–12% of residents"],
          ["Largest foreign groups", "Indians, Pakistanis, Bangladeshis, Filipinos, Egyptians"],
          ["Midday work ban", "12:30–3pm in summer for outdoor workers"],
          ["Golden visa", "Long-term residency for investors and professionals since 2019"]
        ] },
        { type: "section", head: "Built by foreigners", md:
          "When the UAE was founded in 1971 it had perhaps a quarter of a million people. Oil wealth brought an enormous demand for workers of every kind: labourers, domestic workers, drivers, nurses, engineers, bankers. Today the population is about 11 million, and Emirati citizens are only about 11–12% of it. Most migrants come from South Asia, particularly India, whose citizens make up more than a third of residents, as well as from the Philippines, Egypt and elsewhere. Citizenship is almost impossible to obtain." },
        { type: "section", head: "Kafala", md:
          "Most foreign workers have been tied to their employer through the kafala sponsorship system, which links a worker's visa and legal status to one sponsor. Rights groups have documented abuses: recruitment fees that leave workers in debt, confiscated passports, unpaid wages, crowded labour camps, and dangerous heat. Trade unions and strikes are banned. Domestic workers, mostly women, were long excluded from labour law altogether." },
        { type: "section", head: "Reforms", md:
          "The UAE has introduced reforms: a wage protection system requiring salaries to be paid through banks, a midday outdoor work ban in summer, a 2017 law giving domestic workers basic rights, and changes letting workers switch employers more easily. It has also courted the wealthy with long-term 'golden visas' and ended the requirement for a local partner in many businesses. Rights groups say enforcement remains weak and that workers still cannot organise or speak out." },
        { type: "section", head: "Life at the top and bottom", md:
          "Migrants' experiences differ enormously. A European banker or Indian doctor may enjoy tax-free salaries and a comfortable life; a Nepali labourer may earn a few hundred dollars a month and send most of it home. Remittances from the UAE are a lifeline for families across South Asia, and for the economies of Kerala, Nepal and Bangladesh. Emiratis, meanwhile, enjoy generous state benefits and public-sector jobs, and the government is pushing companies to hire more citizens." },
        { type: "compare", head: "Two views",
          left: { head: "The UAE's view", md:
            "Migrants come voluntarily for opportunities unavailable at home, and the UAE has led the Gulf in labour reforms." },
          right: { head: "Rights groups' view", md:
            "The system still gives employers too much power, heat deaths go uninvestigated, and workers have no voice." } },
        { type: "section", head: "Why it matters", md:
          "The UAE's prosperity rests on migration, which also shapes its politics: a small citizen population ruled by a monarchy, with most residents having no political rights at all. Its treatment of workers affects its reputation, from hosting global events such as the COP28 climate summit in 2023 to relations with India and Pakistan, whose governments press for better protection of their citizens." }
      ],
      takeaways: [
        "Emirati citizens are only about 11–12% of the UAE's 11 million residents.",
        "The kafala system tied workers to employers; rights groups document abuses and weak enforcement.",
        "The UAE has introduced reforms and golden visas, but workers still cannot unionise or strike."
      ],
      check: { q: "What share of UAE residents are Emirati citizens?",
        choices: ["About half", "About one in nine", "About three-quarters"], answer: 1,
        explain: "Citizens are about 11–12% of residents; foreigners make up the rest, one of the highest proportions in the world." },
      sources: [
        { title: "United Arab Emirates: Events of 2024", publisher: "Human Rights Watch", url: "https://www.hrw.org/world-report/2025/country-chapters/united-arab-emirates", date: "2025" },
        { title: "Golden visa", publisher: "UAE Government portal", url: "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa", date: "n.d." },
        { title: "Indian Community in UAE", publisher: "Embassy of India, Abu Dhabi", url: "https://www.indembassyuae.gov.in/page/indian-community-in-uae/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "ae-8", kind: "now", asOf: "2026-09-28",
      title: "Where things stand",
      dek: "A hub that held under fire, an AI bet going ahead, and a foreign policy that wins friends and critics in equal measure.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ae/ae-8-hero.webp",
          alt: "Illustration of a huge container port at dawn with cranes, stacked containers and a ship leaving toward the open sea.",
          caption: "Jebel Ali in Dubai is the largest port in the Middle East.",
          credit: "Illustration — not a photograph",
          prompt: "An enormous container port at dawn, rows of towering cranes, colourful stacked containers, a large container ship leaving toward the open sea, soft pink sky, busy and resilient, no people close up, no legible text or logos." },
        { type: "section", head: "The state of play", md:
          "- **Leadership:** MBZ firmly in charge; his brothers run security, money and AI.\n" +
          "- **War:** hundreds of missiles and thousands of drones intercepted; attacks still possible.\n" +
          "- **AI:** Stargate UAE under way with US approval for top-end chips.\n" +
          "- **Sudan:** accusations of backing the RSF persist; the UAE denies them.\n" +
          "- **Israel:** the Abraham Accords have survived the Gaza war, though with strains." },
        { type: "section", head: "Israel and the Accords", md:
          "The UAE kept its relations with [[unit:il|Israel]] through the Gaza war, even as it criticised Israeli conduct and warned that annexing the West Bank would be a 'red line' for the Accords. It has offered to help fund and staff Gaza's reconstruction, but only with a credible path to Palestinian self-government." },
        { type: "section", head: "The economy", md:
          "The UAE's economy is more diversified than its neighbours': oil is now well under a third of output. Dubai's property market boomed after the pandemic, drawing wealth from Russia, India and Europe, and the country has courted crypto firms and hedge funds. Its greatest risk is the region itself: war, shipping disruption in Hormuz and investor nerves. Its rulers are betting that AI, finance and logistics can keep growing even if the neighbourhood stays dangerous." },
        { type: "section", head: "Gulf security", md:
          "The war revived an old debate: should the Gulf states rely on the United States, build a collective defence, or reach an understanding with Iran? The UAE has invested in all three at once, buying American air defences, coordinating with Saudi Arabia and, before the war, restoring an ambassador in Tehran. After the war, it wants a regional arrangement that limits Iranian missiles and drones." },
        { type: "section", head: "Africa and the Red Sea", md:
          "Beyond Sudan, the UAE has built ports, bases and investments around the Horn of Africa and the Red Sea, from Somaliland to Egypt, and bought farmland and mines across the continent. It is now one of the largest foreign investors in Africa. Supporters see partnership; critics see a scramble for influence and resources." },
        { type: "section", head: "Succession", md:
          "MBZ, born in 1961, has already named his son Khaled as Abu Dhabi's heir, so the transition is prepared. Stability at the top is one of the UAE's selling points to investors." },
        { type: "section", head: "Three scenarios", md:
          "- **Back to business.** The Iran war ends, the hub model rebounds and the AI build-out accelerates.\n" +
          "- **A garrison state.** Continued Iranian threats push the UAE into heavier spending on defence and closer military alliances.\n" +
          "- **A reckoning on Sudan.** Mounting evidence and pressure from US lawmakers lead to conditions on arms sales." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Late 2026:** the first phase of Stargate UAE\n" +
          "- **Autumn 2026:** US–Iran talks and any Gulf security arrangements\n" +
          "- **Ongoing:** Sudan ceasefire talks and UN reports\n" +
          "- **27 October 2026:** Israel's election" },
        { type: "section", head: "Connections", md:
          "The UAE's story runs through [[unit:us]] (security and AI), [[unit:ir]] (neighbour and attacker), [[unit:sa]] (partner and rival), [[unit:il]] (the Abraham Accords), [[unit:eg]] (major investments), [[unit:in]] (trade and diaspora), [[unit:ru]] (money and mediation) and [[unit:cn]] (trade)." }
      ],
      takeaways: [
        "The UAE's hub economy survived the 2026 war, though attacks remain possible.",
        "Its AI partnership with the US is going ahead with access to top-end chips.",
        "It keeps ties with Israel and faces continuing accusations over Sudan, which it denies."
      ],
      check: { q: "What has the UAE called a 'red line' for the Abraham Accords?",
        choices: ["Israeli annexation of the West Bank", "Israel's election", "US arms sales to Israel"], answer: 0,
        explain: "UAE officials warned in 2025 that annexing the West Bank would undermine the Accords." },
      sources: [
        { title: "The Gulf that emerges from the Iran war will be very different", publisher: "Atlantic Council", url: "https://www.atlanticcouncil.org/dispatches/the-gulf-that-emerges-from-the-iran-war-will-be-very-different/", date: "2026" },
        { title: "Gulf states and the Iran war", publisher: "TIME", url: "https://time.com/article/2026/09/14/gulf-uae-saudi-arabia-qatar-iran-war/", date: "2026-09-14" },
        { title: "United Arab Emirates in the 2026 Iran war", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/United_Arab_Emirates_in_the_2026_Iran_war", date: "2026" }
      ]
    }
  ]
});
