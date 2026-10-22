/* ============================================================
   Unit 35 — Qatar 🇶🇦
   Research note and sources: tools/research/qa.md
   Current as of 22 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("qa", {
  id: "qa",
  asOf: "2026-10-22",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "qa-1", kind: "snapshot", asOf: "2026-10-22",
      title: "Qatar in brief",
      dek: "A peninsula smaller than Connecticut that sells a fifth of the world's liquefied gas, hosts America's biggest Middle East base and talks to everyone.",
      blocks: [
        { type: "map", src: "maps/qa.svg",
          alt: "Locator map of the Gulf with Qatar highlighted, a peninsula jutting north from Saudi Arabia into the Gulf, with Bahrain to the west, the UAE to the south-east and Iran across the water to the north, and a small globe showing its place in the world.",
          caption: "Qatar's only land border is with Saudi Arabia; Iran lies about 200 kilometres across the Gulf.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Doha"],
          ["People", "About 3 million, of whom roughly a tenth are citizens"],
          ["System", "Hereditary monarchy (emirate)"],
          ["Ruler", "Emir Tamim bin Hamad Al Thani, since 2013"],
          ["Wealth", "Among the highest incomes per citizen in the world"],
          ["Main export", "Liquefied natural gas (LNG)"],
          ["Hosts", "Al Udeid, the largest US base in the Middle East"]
        ] },
        { type: "section", head: "Why it's here", md:
          "Qatar is tiny, about 11,500 square kilometres, but it matters on three fronts. It shares the world's biggest gas field with [[unit:ir|Iran]] and, before the 2026 war, supplied about a fifth of the world's liquefied natural gas. It hosts Al Udeid Air Base, headquarters for US air operations across the region. And it has made itself the world's go-between: it hosted the Taliban's talks with the [[unit:us|United States]], Hamas's political office and many hostage negotiations, which puts it at the centre of the Gaza ceasefire." },
        { type: "section", head: "Who holds power", md:
          "The Al Thani family has ruled Qatar since the 1800s. Emir Tamim bin Hamad Al Thani, who took over from his father in 2013 at 33, holds executive and legislative power. There are no political parties. An advisory council, the Shura, was partly elected for the first time in 2021, but a referendum in 2024 ended the elections. Real decisions are made by the emir and a small circle of family members, led by the prime minister and foreign minister, Sheikh Mohammed bin Abdulrahman Al Thani." },
        { type: "section", head: "The mood in 2026", md:
          "Qatar is reeling from a war it did not choose. In March 2026, as the US and Israel fought Iran, Iranian missiles hit the Ras Laffan gas complex and knocked out about 17% of Qatar's export capacity for years. Shipping through the Strait of Hormuz was blocked for months. Government revenue fell by more than 40% in the first half of the year. A year earlier, Israel had bombed Hamas negotiators in Doha. Qatar has never felt so exposed." },
        { type: "section", head: "A tiny state with a huge purse", md:
          "Qatar's sovereign wealth fund, the Qatar Investment Authority, is one of the world's largest, with hundreds of billions of dollars in assets from London's Shard and Harrods to stakes in Volkswagen and Barclays. Qatar owns Paris Saint-Germain football club and staged the 2022 World Cup. Al Jazeera, the TV network it founded, reaches hundreds of millions. Critics say its money buys influence; Qatar says it is investing for a future without gas." },
        { type: "section", head: "What Qatar wants", md:
          "Above all, Qatar wants security for a small, rich state in a dangerous neighbourhood. Its strategy is to be useful to everyone: a base for the US, a business partner for China and Europe, a working relationship with Iran, with which it shares its gas field, and a channel to groups such as Hamas and the Taliban that others won't talk to. That balancing act has made it indispensable and suspected at the same time." },
        { type: "callout", tone: "why", md:
          "Qatar shows how a small state can buy influence through gas, money, media and mediation, and how little that can protect it when bigger powers go to war around it." }
      ],
      takeaways: [
        "Qatar supplied about a fifth of the world's LNG before 2026 and hosts the largest US base in the Middle East.",
        "Emir Tamim bin Hamad Al Thani rules as a hereditary monarch; there are no parties or elected parliament.",
        "Iranian strikes in March 2026 knocked out about 17% of its gas export capacity for years."
      ],
      check: { q: "Which country shares the world's biggest gas field with Qatar?",
        choices: ["Saudi Arabia", "Iran", "The UAE"], answer: 1,
        explain: "Qatar's North Field and Iran's South Pars are one reservoir under the Gulf, the largest gas field in the world." },
      sources: [
        { title: "Qatar", publisher: "Britannica", url: "https://www.britannica.com/place/Qatar", date: "n.d." },
        { title: "Iran attack wipes out 17% of Qatar's LNG capacity for up to five years", publisher: "CNBC / Reuters", url: "https://www.cnbc.com/2026/03/19/iran-attack-qatar-lng-capacity.html", date: "2026-03-19" },
        { title: "Qatar's government revenue plunges 42% in first half as Iran war knocks out gas exports", publisher: "ZeroHedge", url: "https://www.zerohedge.com/geopolitical/qatars-government-revenue-plunges-42-first-half-iran-war-knocks-out-gas-exports", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "qa-2", kind: "power", asOf: "2026-10-22",
      title: "The emir and the family",
      dek: "Qatar is an absolute monarchy in all but name: the emir rules with his family, and citizens trade political rights for prosperity.",
      blocks: [
        { type: "diagram", src: "img/qa/qa-2-power.svg",
          alt: "Diagram of power in Qatar. The Al Thani ruling family chooses the line of succession. Emir Tamim bin Hamad Al Thani, ruler since 2013, holds executive and legislative power and approves all laws. He appoints the prime minister and foreign minister, Sheikh Mohammed bin Abdulrahman Al Thani, and the cabinet. The Shura Council of 45 members, all appointed since a 2024 referendum ended elections, advises and reviews laws. QatarEnergy and the Qatar Investment Authority manage the gas wealth. There are no political parties.",
          caption: "In Qatar, power and gas wealth both flow through the emir and his family.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The emir", md:
          "Under the 2004 constitution, Qatar is a hereditary emirate in which the emir holds executive power and approves laws. He appoints the prime minister and ministers, commands the armed forces, sets foreign policy and controls the state's wealth. Succession stays in the line of Hamad bin Khalifa, Tamim's father; the emir names an heir apparent from within the family. Tamim's father, Hamad, seized power from his own father in a bloodless palace coup in 1995 and handed over to Tamim voluntarily in 2013, a rare abdication." },
        { type: "section", head: "The Shura Council", md:
          "The Shura Council has 45 members who can propose and review laws and question ministers, but cannot overrule the emir. In 2021 Qatar held its first legislative elections for 30 of the seats, but only men and women descended from families present in Qatar before 1930 could vote, which excluded some citizens, notably members of the Al Murrah tribe, and led to protests. In November 2024 a referendum approved by about 90% scrapped the elections; all members are now appointed, which the emir said would protect national unity." },
        { type: "section", head: "Citizens and residents", md:
          "Only about one in ten people in Qatar is a citizen. Citizens receive free health care and education, guaranteed public jobs, cheap land and no income tax. The other nine in ten are foreign residents: engineers and bankers from the West and Asia, and above all hundreds of thousands of workers from India, Nepal, Bangladesh, Pakistan and Africa who build, clean and drive. Most cannot become citizens. The 'kafala' sponsorship system tied workers to employers until reforms in 2020, which critics say are unevenly enforced." },
        { type: "section", head: "Gas and money", md:
          "Two state bodies hold the country's wealth. QatarEnergy, run by the energy minister, Saad al-Kaabi, produces and sells oil and gas. The Qatar Investment Authority invests the surplus abroad. Budgets are not fully public, and the line between state money and the ruling family's is not always clear. The government says it is diversifying through tourism, finance, logistics and education, with mixed results." },
        { type: "section", head: "Freedoms", md:
          "There are no political parties, and criticism of the emir is a crime. Rights groups have documented the jailing of a poet for verses praising the Arab Spring and of members of the Al Murrah tribe who protested against the 2021 election rules. Same-sex relations are illegal. At the same time, Qatar allows more open debate on regional politics than most of its neighbours, mainly through Al Jazeera's Arabic channel ([[lesson:qa-12]]), as long as it does not target Qatar itself." },
        { type: "compare", head: "Two views of the system",
          left: { head: "The government's view", md:
            "Qatar is stable, prosperous and consultative in its own tradition; citizens are among the most satisfied in the world." },
          right: { head: "Critics' view", md:
            "It is an absolute monarchy that cancelled its only elections and depends on migrant workers with few rights." } }
      ],
      takeaways: [
        "The emir holds executive and legislative power; succession stays within the Al Thani family.",
        "Qatar held its first Shura elections in 2021, but a 2024 referendum scrapped them.",
        "Only about a tenth of residents are citizens; most of the workforce are migrants."
      ],
      check: { q: "What did Qatar's November 2024 referendum do?",
        choices: ["Created political parties", "Ended elections to the Shura Council", "Made Qatar a republic"], answer: 1,
        explain: "About 90% voted to make all Shura Council members appointed, ending the elections first held in 2021." },
      sources: [
        { title: "2024 Qatari constitutional referendum", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2024_Qatari_constitutional_referendum", date: "2024" },
        { title: "Qatar: Government and society", publisher: "Britannica", url: "https://www.britannica.com/place/Qatar", date: "n.d." },
        { title: "Qatar World Cup: one year on", publisher: "Amnesty International", url: "https://www.amnesty.org/en/latest/news/2023/11/qatar-world-cup-one-year-on/", date: "2023-11" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "qa-9", kind: "founding", asOf: "2026-10-22",
      title: "Pearls, sheikhs and the British",
      dek: "Before gas, Qatar was a poor coast of pearl divers and Bedouin. The Al Thani family built a state between the Ottomans, the Saudis and Britain.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/qa/qa-9-hero.webp",
          alt: "Illustration of wooden dhows with tall triangular sails anchored in shallow turquoise water off a sandy shore, with small figures diving from the boats.",
          caption: "Until the 1930s, pearl diving was the main livelihood on Qatar's coast.",
          credit: "Illustration — not a photograph",
          prompt: "Several wooden dhows with tall triangular sails anchored in shallow turquoise water off a pale sandy shore, tiny figures diving from the boats far away, a low mud-brick fort on the shore, bright hazy sun, timeless and hard, no faces, no flags, no legible text." },
        { type: "timeline", head: "Becoming a state", items: [
          ["1700s", "Pearl-diving settlements grow along the coast"],
          ["1868", "Britain recognises Mohammed bin Thani as leader"],
          ["1871–1913", "Nominal Ottoman rule"],
          ["1916", "Treaty makes Qatar a British protectorate"],
          ["1930s", "Japanese cultured pearls ruin the pearl trade"],
          ["1949", "First oil exports"],
          ["1971", "Independence"]
        ] },
        { type: "section", head: "A coast of pearls", md:
          "For centuries the Qatar peninsula was one of the poorest corners of Arabia: desert with little fresh water, a few coastal towns, and Bedouin tribes who moved with their herds. Its wealth came from the sea. Each summer, men dived for pearls from wooden dhows, often in debt to boat captains and merchants. The work was dangerous and the profits went to a few, but Gulf pearls were prized in India and Europe." },
        { type: "section", head: "The Al Thani", md:
          "The Al Thani family settled in Doha in the 1800s. In 1868, after Bahrain's rulers attacked Qatar's coast, a British envoy signed an agreement with Mohammed bin Thani, the first time an outside power treated Qatar as separate from Bahrain. His son Jassim, still honoured as the founder of the state, accepted nominal Ottoman rule but resisted Ottoman control, defeating an Ottoman force in 1893. Qatar's National Day, 18 December, marks his accession in 1878." },
        { type: "section", head: "British protection", md:
          "When the Ottoman Empire withdrew in 1913, Britain stepped in. A 1916 treaty made Qatar a British protectorate: Britain ran its foreign affairs and defence, and the Al Thani ran everything else. In the 1930s, the Great Depression and the arrival of Japanese cultured pearls destroyed the pearl trade, and Qatar's population fell as people left to find work. Oil, found in 1939 at Dukhan, saved it; exports began in 1949." },
        { type: "section", head: "Independence", md:
          "In 1968 Britain announced it would leave the Gulf. Qatar first discussed joining a federation with Bahrain and the Trucial States, but disagreements over power led both Qatar and Bahrain to go their own way. Qatar declared independence on 3 September 1971; the other emirates formed the [[unit:ae|United Arab Emirates]]. The same year, Shell geologists found the North Field, which would turn out to be the world's largest gas field." },
        { type: "section", head: "Bedouin and townspeople", md:
          "Qatari society was made up of Bedouin tribes of the interior and the merchant and seafaring families of the coast, with African slaves and Persian and Indian traders among them. Slavery was abolished in 1952. Tribal ties still matter: they shape marriages, business and loyalties, and the dispute over who could vote in 2021 turned on which families had been in Qatar before 1930." },
        { type: "compare", head: "Two founding themes",
          left: { head: "Survival", md:
            "A small sheikhdom kept its independence by playing larger powers, Ottoman, British and Saudi, against each other." },
          right: { head: "Dependence", md:
            "From the beginning Qatar relied on outside protectors, a pattern that continues with the US today." } },
        { type: "section", head: "Why it matters", md:
          "The same balancing that let the Al Thani survive between empires shapes Qatar's foreign policy now: hosting the US military while talking to Iran, Hamas and the Taliban." }
      ],
      takeaways: [
        "Before oil, Qatar's economy rested on pearl diving; the trade collapsed in the 1930s.",
        "The Al Thani family has led Qatar since the 1800s; it became a British protectorate in 1916.",
        "Qatar became independent in 1971, the year the giant North Field gas field was discovered."
      ],
      check: { q: "When did Qatar become independent?",
        choices: ["1916", "1949", "1971"], answer: 2,
        explain: "Qatar declared independence on 3 September 1971 when Britain withdrew from the Gulf." },
      sources: [
        { title: "Qatar: History", publisher: "Britannica", url: "https://www.britannica.com/place/Qatar/History", date: "n.d." },
        { title: "Qatar", publisher: "Britannica", url: "https://www.britannica.com/place/Qatar", date: "n.d." },
        { title: "History of Qatar", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/History_of_Qatar", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "qa-3", kind: "history", asOf: "2026-10-22",
      title: "From gas to global player",
      dek: "A palace coup in 1995 launched Qatar's rise: gas exports, Al Jazeera, a World Cup and a foreign policy all its own.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/qa/qa-3-hero.webp",
          alt: "Illustration of a futuristic skyline of glass towers along a curved bay at night, with lit wooden dhows on the water in the foreground.",
          caption: "Doha's West Bay skyline, built almost entirely since the 1990s.",
          credit: "Illustration — not a photograph",
          prompt: "A futuristic skyline of tall glass towers of unusual shapes along a curved bay at night, lights reflected in calm water, several traditional wooden dhows with strings of lights in the foreground, warm and glittering, no people close up, no logos, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1995", "Hamad bin Khalifa ousts his father in a palace coup"],
          ["1996", "Al Jazeera is launched"],
          ["1997", "First LNG cargo is shipped"],
          ["2003", "US air operations centre moves to Al Udeid"],
          ["2013", "Hamad abdicates in favour of his son Tamim"],
          ["2017–21", "Blockade by Saudi Arabia, the UAE, Bahrain and Egypt"],
          ["2022", "Qatar hosts the football World Cup"]
        ] },
        { type: "section", head: "1. The coup and the plan", md:
          "In June 1995, while Emir Khalifa was in Switzerland, his son Hamad took power in a bloodless coup. Hamad and his wife, Sheikha Moza, set out to make Qatar matter. They bet on liquefied natural gas, which needed huge investment in plants and ships but could be sold anywhere; the first LNG cargo left Ras Laffan in 1997. By 2006 Qatar was the world's largest LNG exporter, and its citizens had become among the richest people on earth." },
        { type: "section", head: "2. A voice and a base", md:
          "In 1996 Hamad launched Al Jazeera, an Arabic news channel that broke taboos across the region ([[lesson:qa-12]]). He also invited the US military in: after the US left Saudi Arabia in 2003, its regional air operations centre moved to Al Udeid, which Qatar had built at its own expense. Qatar now had a voice heard across the Arab world and an American security guarantee in all but name." },
        { type: "section", head: "3. The Arab Spring", md:
          "When uprisings swept the Arab world in 2011, Qatar backed them, through Al Jazeera's coverage and money and arms for rebels in Libya and [[unit:sy|Syria]]. It supported the Muslim Brotherhood and Egypt's Mohamed Morsi. That made it powerful enemies: [[unit:sa|Saudi Arabia]], the [[unit:ae|UAE]] and [[unit:eg|Egypt]] saw the Brotherhood as a threat. When the army overthrew Morsi in 2013, Qatar lost its bet in Egypt." },
        { type: "section", head: "4. Tamim and the blockade", md:
          "In 2013 Hamad stepped down in favour of Tamim, who toned down the activism but kept the strategy. In 2017 Saudi Arabia, the UAE, Bahrain and Egypt cut ties and closed their borders and airspace to Qatar, accusing it of supporting terrorism and being too close to Iran ([[lesson:qa-10]]). Qatar refused their demands, and in January 2021 the blockade ended without concessions." },
        { type: "section", head: "5. Mediator and target", md:
          "Qatar hosted the Taliban's office from 2013 and the talks that led to the 2020 US–Taliban deal, then helped evacuate tens of thousands from Kabul in 2021. It staged the 2022 World Cup ([[lesson:qa-11]]). After Hamas's attack on [[unit:il|Israel]] in October 2023, it brokered hostage releases. But its mediation made it a target: in September 2025 Israel struck Hamas negotiators in Doha ([[lesson:qa-6]]), and in 2026 Iran struck its gas plants ([[lesson:qa-5]])." },
        { type: "section", head: "6. A city from the sand", md:
          "Gas money transformed Doha. In the 1990s it was a low-rise town; today it has a skyline of towers, a metro, a vast airport hub for Qatar Airways, branch campuses of US and European universities, and the Museum of Islamic Art. The population rose from about half a million in 1995 to about three million, almost all of the increase from migrant workers." }
      ],
      takeaways: [
        "Hamad bin Khalifa took power in 1995 and bet on LNG, making Qatar the world's top exporter by 2006.",
        "Qatar launched Al Jazeera in 1996 and hosted the US air operations centre at Al Udeid from 2003.",
        "Its support for the Arab Spring and closeness to Iran led to a 2017–21 blockade by its neighbours."
      ],
      check: { q: "How did Emir Hamad bin Khalifa come to power in 1995?",
        choices: ["In an election", "In a bloodless coup against his father", "After his father's death"], answer: 1,
        explain: "Hamad took power while his father was abroad; he later handed over to his son Tamim in 2013." },
      sources: [
        { title: "Qatar: History", publisher: "Britannica", url: "https://www.britannica.com/place/Qatar/History", date: "n.d." },
        { title: "Qatar diplomatic crisis", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Qatar_diplomatic_crisis", date: "n.d." },
        { title: "Doha Agreement (2020)", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Doha_Agreement_(2020)", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "qa-10", kind: "past", asOf: "2026-10-22",
      title: "The blockade, 2017–2021",
      dek: "Four neighbours cut Qatar off overnight and issued 13 demands. Qatar refused them all, and after three and a half years the blockade ended.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/qa/qa-10-hero.webp",
          alt: "Illustration of a large cargo plane being unloaded at night under floodlights, with pallets of crates and a line of trucks waiting on the tarmac.",
          caption: "When the Saudi border closed, Qatar flew in food and later built its own dairy herds.",
          credit: "Illustration — not a photograph",
          prompt: "A large cargo plane on a desert airport apron at night under bright floodlights, its rear ramp open, pallets of crates being unloaded by small distant figures, a line of trucks waiting, warm haze, urgent and busy, no faces, no logos, no legible text." },
        { type: "facts", head: "The blockade", rows: [
          ["Began", "5 June 2017"],
          ["Imposed by", "Saudi Arabia, the UAE, Bahrain and Egypt"],
          ["Demands", "13, including closing Al Jazeera and a Turkish base"],
          ["Qatar's response", "Rejected the demands; new routes via Turkey, Iran and Oman"],
          ["Ended", "5 January 2021, at the AlUla summit in Saudi Arabia"]
        ] },
        { type: "section", head: "What happened", md:
          "On 5 June 2017, days after a visit by President Trump to Riyadh, Saudi Arabia, the UAE, Bahrain and Egypt cut diplomatic ties with Qatar. Saudi Arabia closed Qatar's only land border, through which much of its food arrived. The four closed their airspace to Qatari planes and expelled Qatari citizens, splitting families. They accused Qatar of supporting terrorist groups and of being too close to Iran. Qatar denied the charges and called the measures a blockade; the four called it a boycott." },
        { type: "section", head: "Thirteen demands", md:
          "The four countries issued 13 demands: shut down Al Jazeera, close a Turkish military base, cut ties with the Muslim Brotherhood and other groups, downgrade relations with Iran and submit to monthly checks. Qatar said accepting them would end its sovereignty. Instead it flew in food from Turkey and Iran, airlifted thousands of cows to start its own dairy industry, opened new shipping routes through Oman, and spent heavily on lobbying in Washington." },
        { type: "section", head: "Why it failed", md:
          "Qatar had the money to ride it out and important friends. Turkey sent troops; Iran opened its airspace. The US, after Trump's early support for the blockade, pushed for a deal, because Al Udeid hosted its air war against the Islamic State. Qatar's gas kept flowing by sea. Over time the blockade hurt the blockaders' unity and their image, and the arrival of a new US administration in 2021 gave everyone a reason to end it." },
        { type: "section", head: "The end", md:
          "At a Gulf summit in AlUla, Saudi Arabia, on 5 January 2021, the emir was greeted by Saudi Crown Prince Mohammed bin Salman with a hug, and borders reopened. Qatar made no public concessions on the 13 demands. Relations with Saudi Arabia warmed quickly; those with the UAE and Bahrain more slowly. Al Jazeera is still broadcasting, and the Turkish base remains." },
        { type: "section", head: "The human cost", md:
          "The blockade split thousands of mixed Gulf families overnight, as citizens of the four countries were ordered home and Qataris expelled. Students were forced to leave universities mid-course, and pilgrims had difficulty reaching Mecca. Qatar took the case to the UN's top court, which in 2018 ordered the UAE to allow families to reunite, though it later ruled it had no jurisdiction over the wider dispute." },
        { type: "compare", head: "Two views of the blockade",
          left: { head: "The blockading states", md:
            "Qatar funded extremists, hosted Islamist leaders and sided with Iran; pressure was needed to change its behaviour." },
          right: { head: "Qatar's view", md:
            "Bigger neighbours tried to bully a small state into giving up its independent foreign policy and its free media, and failed." } },
        { type: "section", head: "Why it matters", md:
          "The blockade taught Qatar to rely on itself and on distant allies, the US and Turkey, rather than its neighbours. It also showed how fragile Gulf unity is, a lesson repeated when Gulf states were caught up in the 2026 Iran war." }
      ],
      takeaways: [
        "In June 2017 Saudi Arabia, the UAE, Bahrain and Egypt cut ties with Qatar and closed its only land border.",
        "Qatar rejected their 13 demands, including closing Al Jazeera, and found new routes and suppliers.",
        "The blockade ended at the AlUla summit in January 2021 without public concessions from Qatar."
      ],
      check: { q: "Which of these was one of the 13 demands made of Qatar in 2017?",
        choices: ["Host the World Cup elsewhere", "Shut down Al Jazeera", "Join OPEC"], answer: 1,
        explain: "The blockading states demanded the closure of Al Jazeera, among other things; Qatar refused." },
      sources: [
        { title: "Qatar diplomatic crisis", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Qatar_diplomatic_crisis", date: "n.d." },
        { title: "Qatar: History", publisher: "Britannica", url: "https://www.britannica.com/place/Qatar/History", date: "n.d." },
        { title: "Al Jazeera", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Al_Jazeera", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "qa-11", kind: "past", asOf: "2026-10-22",
      title: "The World Cup and the workers",
      dek: "Qatar spent hundreds of billions of dollars to host football's biggest event. The men who built it became the story.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/qa/qa-11-hero.webp",
          alt: "Illustration of a large modern football stadium under construction in the desert at dawn, with cranes and scaffolding, and a line of workers in hard hats walking toward it.",
          caption: "Seven new stadiums were built for the 2022 World Cup, along with a metro, roads and hotels.",
          credit: "Illustration — not a photograph",
          prompt: "A large modern football stadium with a curved latticed shell under construction in the desert at dawn, tall cranes and scaffolding, a long line of small figures in hard hats and overalls walking toward it seen from behind, dusty orange light, vast and tiring, no faces, no logos, no legible text." },
        { type: "facts", head: "The World Cup", rows: [
          ["Awarded", "December 2010, by FIFA's executive committee"],
          ["Held", "20 November to 18 December 2022"],
          ["Cost of related building", "Estimated at more than $200 billion"],
          ["Migrant workers in Qatar", "About two million"],
          ["Reforms", "End of exit permits; minimum wage (2020)"]
        ] },
        { type: "section", head: "Winning the bid", md:
          "In December 2010 FIFA awarded the 2022 World Cup to Qatar, a country with no football tradition, summer temperatures above 40°C and almost no stadiums. Investigations later found that several FIFA officials who voted had taken bribes in other matters, and US prosecutors alleged bribes linked to the Qatar vote; Qatar has always denied wrongdoing. The tournament was moved to November and December for the first time, to avoid the heat." },
        { type: "section", head: "The builders", md:
          "Qatar spent an estimated $200 billion or more on stadiums, a metro, roads, hotels and a new city. The work was done by migrant workers from South Asia and Africa, who often paid illegal recruitment fees, lived in crowded camps and worked in extreme heat. Under the kafala system they could not change jobs or leave the country without their employer's permission. Rights groups and journalists documented unpaid wages and deaths." },
        { type: "section", head: "How many died?", md:
          "The number is disputed. A Guardian investigation found that more than 6,500 workers from five South Asian countries had died in Qatar between 2010 and 2020, from all causes and in all jobs, many recorded as 'natural causes' without autopsies. Qatar's government said the figure was misleading and that deaths on stadium sites were few. Rights groups said heat stress was likely behind many deaths and called for compensation." },
        { type: "section", head: "Reforms", md:
          "Under pressure and in cooperation with the International Labour Organization, Qatar abolished exit permits for most workers, allowed them to change jobs, introduced the region's first non-discriminatory minimum wage in 2020 and banned outdoor work in the hottest hours. Unions remain banned. Rights groups say enforcement is patchy and some employers still abuse workers." },
        { type: "section", head: "Life during the tournament", md:
          "The tournament itself passed off smoothly. About 1.4 million visitors came, and fans praised the compact distances between stadiums. Controversies continued: a late ban on beer at stadiums, FIFA's threat to punish European captains who planned to wear 'OneLove' armbands supporting LGBT rights, and protests by teams. Argentina beat France in a dramatic final, and Lionel Messi lifted the trophy wearing a Qatari bisht robe." },
        { type: "compare", head: "Two views of the tournament",
          left: { head: "Qatar's view", md:
            "The first Arab World Cup was a success, and the attention sped up labour reforms other Gulf states have yet to make." },
          right: { head: "Critics' view", md:
            "A tournament bought with money and possibly bribes was built on the suffering of workers who were never fully compensated." } },
        { type: "section", head: "Why it matters", md:
          "The World Cup was Qatar's biggest bet on 'soft power'. It put the country on the world map and showed both how far money can buy prestige and how much scrutiny comes with it." }
      ],
      takeaways: [
        "Qatar won the right to host the 2022 World Cup in 2010 and spent more than $200 billion on related building.",
        "Migrant workers who built it faced abuse under the kafala system; the death toll is disputed.",
        "Qatar abolished exit permits and introduced a minimum wage in 2020; rights groups say enforcement is patchy."
      ],
      check: { q: "Why was the 2022 World Cup held in November and December?",
        choices: ["To avoid Ramadan", "To avoid Qatar's extreme summer heat", "Because the stadiums were late"], answer: 1,
        explain: "It was the first World Cup moved out of the northern summer, because temperatures in Qatar exceed 40°C." },
      sources: [
        { title: "Qatar World Cup: one year on", publisher: "Amnesty International", url: "https://www.amnesty.org/en/latest/news/2023/11/qatar-world-cup-one-year-on/", date: "2023-11" },
        { title: "Revealed: 6,500 migrant workers have died in Qatar since World Cup awarded", publisher: "The Guardian", url: "https://www.theguardian.com/global-development/2021/feb/23/revealed-migrant-worker-deaths-qatar-fifa-world-cup-2022", date: "2021-02-23" },
        { title: "2022 FIFA World Cup", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "qa-4", kind: "players", asOf: "2026-10-22",
      title: "Tamim, the prime minister and the gas chief",
      dek: "A young emir who inherited a global strategy, a cousin who runs diplomacy, and the man who sells Qatar's gas.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/qa/qa-4-hero.webp",
          alt: "Illustration of a white palace with arched windows and a crenellated roofline beside a palm-lined waterfront in Doha, with the sea behind.",
          caption: "The Amiri Diwan in Doha, the emir's office and seat of government.",
          credit: "Illustration — not a photograph",
          prompt: "A white palace with tall arched windows and a crenellated roofline beside a palm-lined waterfront, a turquoise sea behind, a few distant figures, bright midday sun with soft shadows, calm and dignified, no flags, no legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "Tamim bin Hamad Al Thani", role: "Emir, since 2013",
            img: "img/qa/portrait-tamim.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Educated at Sandhurst in Britain, he became emir at 33. Has kept Qatar's balancing act between Washington, Tehran and the Gulf, and steered it through the blockade and the 2026 war." },
          { name: "Mohammed bin Abdulrahman Al Thani", role: "Prime minister and foreign minister",
            img: "img/qa/portrait-mba.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A member of the ruling family who has led Qatar's mediation on Gaza, Afghanistan and hostage releases. Called Israel's 2025 strike on Doha 'state terrorism'." },
          { name: "Saad al-Kaabi", role: "Energy minister and head of QatarEnergy",
            img: "img/qa/portrait-kaabi.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Runs the gas industry and its expansion, and announced the force majeure after the Ras Laffan strikes. In October 2026 he met Iran's acting oil minister in Doha." },
          { name: "Hamad bin Khalifa Al Thani", role: "'Father Emir', ruler 1995–2013",
            img: "img/qa/portrait-hamad.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Took power in a 1995 coup and built modern Qatar: LNG, Al Jazeera, Al Udeid and the World Cup bid. Abdicated in 2013." },
          { name: "Sheikha Moza bint Nasser", role: "Chair of Qatar Foundation",
            img: "img/qa/portrait-moza.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Hamad's wife and Tamim's mother. Built Education City, where branches of several US and European universities operate, and remains an influential figure." },
          { name: "Khalil al-Hayya", role: "Hamas's chief negotiator, based in Doha",
            img: "img/qa/portrait-hayya.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Leads Hamas's team in ceasefire talks. Survived Israel's September 2025 strike on Doha, which killed his son. Hamas is designated a terrorist organisation by the US and EU." }
        ] },
        { type: "section", head: "Family and state", md:
          "In Qatar the top jobs belong to the Al Thani family, a clan of several thousand. The emir's brothers and cousins run the security services, the sovereign fund and key ministries. That makes decisions fast and personal: a few people can commit billions or agree a ceasefire channel in hours. It also means there is little public debate about strategy, and outsiders read the family's moods to predict policy." },
        { type: "section", head: "The mediators", md:
          "Qatar's diplomats are among the busiest in the world. Besides Gaza, they have mediated between the US and Iran over prisoners and frozen funds, between Russia and Ukraine over the return of children, between Rwanda and Congo, and between the Taliban and the West. Critics say hosting groups such as Hamas and the Taliban gives them legitimacy and a safe base; Qatar says it does so at Washington's request so that someone can talk to them." },
        { type: "section", head: "The gas men", md:
          "QatarEnergy is one of the world's biggest energy companies and the state's main source of income. Its long-term contracts with buyers from China to Italy, many lasting 20 years or more, tie those countries to Qatar. Al-Kaabi has also been an outspoken critic of EU rules on corporate due diligence, warning that Qatar could stop selling to Europe if fines were applied to its global revenue." },
        { type: "compare", head: "Two views of Qatar's leaders",
          left: { head: "Supporters", md:
            "Pragmatic, well-connected leaders who use wealth for diplomacy and have kept a small state safe through crises." },
          right: { head: "Critics", md:
            "A ruling family that buys influence, hosts militant groups and answers to no voters." } }
      ],
      takeaways: [
        "Emir Tamim has ruled since 2013; his cousin Mohammed bin Abdulrahman runs government and diplomacy.",
        "Saad al-Kaabi runs QatarEnergy, the source of most state income.",
        "Qatar hosts Hamas's political leaders at US request; Israel struck them in Doha in 2025."
      ],
      check: { q: "Who is Qatar's prime minister and foreign minister?",
        choices: ["Hamad bin Khalifa", "Mohammed bin Abdulrahman Al Thani", "Saad al-Kaabi"], answer: 1,
        explain: "Sheikh Mohammed bin Abdulrahman Al Thani holds both posts and leads Qatar's mediation." },
      sources: [
        { title: "Israeli attack on Doha", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Israeli_attack_on_Doha", date: "2025" },
        { title: "Ras Laffan hit 17%: Qatar meets Iran", publisher: "Oil & Gas Middle East", url: "https://www.oilandgasmiddleeast.com/news/ras-laffan-qatar-iran-talks", date: "2026-10" },
        { title: "Qatar", publisher: "Britannica", url: "https://www.britannica.com/place/Qatar", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "qa-5", kind: "story", asOf: "2026-10-22",
      title: "The war comes to Ras Laffan",
      dek: "Iranian missiles hit the world's biggest LNG complex in March 2026, cutting Qatar's exports and shaking global gas markets.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/qa/qa-5-hero.webp",
          alt: "Illustration of a huge gas plant on a desert coast at night, with rows of tanks and towers, a plume of dark smoke and orange fire rising from one section, and a gas tanker at a jetty.",
          caption: "Strikes on 18–19 March 2026 destroyed two of Ras Laffan's LNG trains.",
          credit: "Illustration — not a photograph",
          prompt: "A huge gas processing plant on a flat desert coast at night, rows of spherical tanks and tall towers lit by work lights, a plume of dark smoke and orange fire rising from one section, a large gas tanker with round domes at a jetty, tense and dramatic, no people close up, no logos, no legible text." },
        { type: "section", head: "What happened", md:
          "When the [[unit:us|United States]] and [[unit:il|Israel]] launched strikes on [[unit:ir|Iran]] on 28 February 2026, Iran fired missiles and drones at Gulf states hosting US forces. A missile hit Al Udeid on 3 March without casualties. Drone strikes on Ras Laffan and Mesaieed forced Qatar to halt gas production on 2 March. Then, on 18 and 19 March, missiles hit two of Ras Laffan's 'trains', the giant units that chill gas into liquid, and a gas-to-liquids plant." },
        { type: "facts", head: "The damage", rows: [
          ["Capacity lost", "12.8 million tonnes a year, about 17% of exports"],
          ["Repairs", "Three to five years"],
          ["Lost revenue", "About $20 billion a year, QatarEnergy says"],
          ["Force majeure", "Contracts with China, Italy, Belgium and South Korea"],
          ["Shipping", "Halted through Hormuz for about 70 days, then on and off"]
        ] },
        { type: "section", head: "Why it was hit", md:
          "Qatar was not at war with Iran. It shares the North Field with Iran's South Pars, has kept diplomatic ties with Tehran and opposed the attack. But it hosts the biggest US base in the region. Iran's leaders warned that any state hosting US forces could be targeted, and striking Gulf energy put pressure on Washington by raising world prices. Iran had also fired at Al Udeid in June 2025 after US strikes on its nuclear sites, when Qatar intercepted most missiles." },
        { type: "section", head: "The economic shock", md:
          "Qatar normally exports about 77 million tonnes of LNG a year. With the Strait of Hormuz effectively closed from late February, almost nothing left for weeks, and a tanker was attacked in July. Asian and European buyers scrambled for cargoes from the US and Australia, and prices spiked. The emir said government revenue fell 42% in the first half of 2026. Qatar's reserves let it absorb the blow, but expansion plans have slipped." },
        { type: "section", head: "Repairs and diplomacy", md:
          "The strikes destroyed specialised 'cold boxes', the core equipment that liquefies gas, which take years to build. QatarEnergy is buying US LNG to meet contracts and reportedly negotiating supply deals to 2031. In October 2026 Qatar's energy minister met Iran's acting oil minister in Doha, a sign that Qatar wants to protect the shared gas field and its ties with Tehran despite the attacks." },
        { type: "section", head: "The customers", md:
          "Qatar's biggest buyers are in Asia: China, India, Japan, South Korea and Pakistan, which depends heavily on Qatari gas for power. In Europe, Italy, Belgium, Britain and Germany signed long-term deals after Russia's 2022 invasion of Ukraine. When Qatari cargoes stopped, importers in South Asia scrambled for fuel and Europe drew down its gas storage, showing how much of the world depends on one peninsula." },
        { type: "compare", head: "Two views of Qatar's position",
          left: { head: "Qatar's view", md:
            "It was a neutral victim, attacked for hosting a base; only diplomacy with Iran can keep the shared field safe." },
          right: { head: "Hawks in Washington and Israel", md:
            "Qatar's closeness to Tehran did not protect it; it should choose sides firmly against Iran." } },
        { type: "section", head: "What's next", md:
          "The North Field expansion, meant to lift capacity to 142 million tonnes a year by 2030, will now arrive later. Shipping through Hormuz remains fragile." }
      ],
      takeaways: [
        "Iranian missiles hit Ras Laffan on 18–19 March 2026, knocking out about 17% of Qatar's LNG capacity for years.",
        "Qatar halted exports through Hormuz for about 70 days; government revenue fell 42% in the first half.",
        "Despite the attacks, Qatar has kept talking to Iran, with which it shares the North Field."
      ],
      check: { q: "About how much of Qatar's LNG export capacity did the March 2026 strikes knock out?",
        choices: ["About 2%", "About 17%", "About 70%"], answer: 1,
        explain: "Two trains with 12.8 million tonnes a year of capacity, about 17% of exports, were destroyed." },
      sources: [
        { title: "Iran attack wipes out 17% of Qatar's LNG capacity for up to five years", publisher: "CNBC / Reuters", url: "https://www.cnbc.com/2026/03/19/iran-attack-qatar-lng-capacity.html", date: "2026-03-19" },
        { title: "Qatar resumes LNG shipments through Strait of Hormuz after 70-day wartime halt", publisher: "bne IntelliNews", url: "https://www.intellinews.com/qatar-resumes-lng-shipments-through-strait-of-hormuz-after-70-day-wartime-halt-441877/", date: "2026-05" },
        { title: "2026 Iranian strikes on Qatar", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_Iranian_strikes_on_Qatar", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "qa-6", kind: "story", asOf: "2026-10-22",
      title: "Mediator under fire",
      dek: "Qatar hosts Hamas's leaders and brokered the Gaza ceasefire. In September 2025 Israel bombed the negotiators in Doha.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/qa/qa-6-hero.webp",
          alt: "Illustration of a residential compound of low villas in Doha with smoke rising from one building, palm trees and a quiet street in afternoon light.",
          caption: "Israel's strike on 9 September 2025 hit a residential compound where Hamas officials were meeting.",
          credit: "Illustration — not a photograph",
          prompt: "A quiet residential compound of low beige villas with flat roofs behind walls in a desert city, a column of grey smoke rising from one building, palm trees and an empty street in hot afternoon light, unsettling stillness, no people close up, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "Hamas's political leaders have lived in Doha since 2012, with US agreement, so that someone could talk to them. After Hamas's attack on Israel on 7 October 2023, Qatar, Egypt and the US brokered pauses and hostage releases. On 9 September 2025, as Hamas negotiators met in Doha to discuss a US ceasefire plan, Israeli jets struck their compound. Five Hamas members, including the son of chief negotiator Khalil al-Hayya, and a Qatari security officer were killed; the senior leaders survived." },
        { type: "section", head: "The reaction", md:
          "Qatar's prime minister called it 'state terrorism' and said it had targeted official negotiations held with Israel's knowledge. Arab and Muslim leaders held an emergency summit in Doha. Israel said Hamas's leaders were legitimate targets wherever they were. The [[unit:us|United States]] said it had been told shortly before; Qatar said it had no warning. Gulf states were shocked that a US partner hosting a US base could be struck by another US ally." },
        { type: "section", head: "The guarantee", md:
          "The episode ended with a remarkable gesture. On 29 September 2025, during a White House visit, Prime Minister Netanyahu phoned Qatar's prime minister to apologise and promise no repeat. President Trump signed an executive order stating that the US would 'guarantee the security and territorial integrity of the State of Qatar against external attack', treating an attack on Qatar as a threat to the US. Because it is an executive order, not a treaty, a future president could revoke it." },
        { type: "section", head: "The ceasefire", md:
          "Days later, in October 2025, Israel and Hamas agreed a ceasefire under Trump's plan, with Egypt, Qatar and Turkey as guarantors alongside the US. In January 2026 Qatar joined Trump's Board of Peace for Gaza, and a Qatari official sits on its executive board. The second phase, on disarming Hamas and governing Gaza, has proved hard: in August 2026 Qatar, Egypt and Turkey condemned renewed Israeli strikes and called on the board to act." },
        { type: "section", head: "Why Qatar hosts Hamas", md:
          "Qatar says it hosts Hamas's political office at the request of the United States, to keep a channel open, and that its money for Gaza, which paid salaries and fuel for years, was sent with Israel's approval to keep the territory calm. Israeli governments did allow those payments until 2023. After 7 October, critics in Israel and the US said the arrangement had strengthened Hamas, and some in Congress called for Qatar to expel its leaders." },
        { type: "section", head: "The wider Muslim response", md:
          "The Doha strike united Arab and Muslim states in condemnation as few events had. Even the UAE, Qatar's rival, sent its president to Doha, and Gulf states asked Washington for clearer security commitments. Several questioned whether hosting US bases was enough to protect them, a doubt that the Iran war deepened." },
        { type: "compare", head: "Two views of Qatar's role",
          left: { head: "Supporters", md:
            "Qatar's channel to Hamas made hostage releases and a ceasefire possible; without it, the war would have lasted longer." },
          right: { head: "Critics, especially in Israel", md:
            "Qatar gave Hamas's leaders a comfortable base and money for years, and its media amplified Hamas's message." } },
        { type: "section", head: "Why it matters", md:
          "The strike showed the limits of Qatar's model: being useful to everyone does not make a state safe from everyone. The US guarantee is Qatar's answer, a closer tie to Washington than ever before." }
      ],
      takeaways: [
        "Israel struck Hamas negotiators in Doha on 9 September 2025, killing six, including a Qatari officer.",
        "Netanyahu apologised, and Trump signed an order guaranteeing Qatar's security against external attack.",
        "Qatar is a guarantor of the October 2025 Gaza ceasefire and sits on the Board of Peace."
      ],
      check: { q: "What did President Trump's September 2025 executive order promise Qatar?",
        choices: ["A free-trade deal", "US protection against external attack", "A seat in NATO"], answer: 1,
        explain: "The order said the US would guarantee Qatar's security and territorial integrity against external attack." },
      sources: [
        { title: "Israeli attack on Doha", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Israeli_attack_on_Doha", date: "2025" },
        { title: "Trump gives Qatar unprecedented security guarantee after Israeli attack", publisher: "Axios", url: "https://www.axios.com/2025/10/01/trump-qatar-security-guarantee-israel-attack", date: "2025-10-01" },
        { title: "Securing the ceasefire: the roles of Egypt, Qatar and Turkey as guarantors", publisher: "J Street", url: "https://jstreet.org/securing-the-ceasefire-the-roles-of-egypt-qatar-and-turkey-as-guarantors/", date: "2025-10-22" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "qa-7", kind: "story", asOf: "2026-10-22",
      title: "The American bargain",
      dek: "Qatar built Al Udeid, invests heavily in the US and even gave Trump a jet. In return it wants protection.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/qa/qa-7-hero.webp",
          alt: "Illustration of a desert air base at dawn with large grey refuelling and transport planes parked on a vast apron, hangars and a control tower behind.",
          caption: "Al Udeid Air Base hosts about 10,000 US personnel and the forward headquarters of US Central Command.",
          credit: "Illustration — not a photograph",
          prompt: "A vast desert air base at dawn, several large grey military refuelling and transport planes parked on a wide concrete apron, low hangars and a control tower behind, heat haze over the runway, a pale pink sky, quiet power, no people close up, no markings, no legible text." },
        { type: "section", head: "What happened", md:
          "Qatar's security rests on the [[unit:us|United States]]. Al Udeid, built by Qatar in the 1990s for about $1 billion and later expanded at its own cost, hosts about 10,000 US personnel and the forward headquarters of US Central Command, which ran the air wars in Afghanistan, Iraq and Syria. In May 2025, during Trump's visit to Doha, the White House announced deals it said were worth more than $1 trillion, including a huge Boeing order from Qatar Airways, and Qatar gave the US Air Force a Boeing 747 for use as a presidential plane." },
        { type: "section", head: "Why Qatar pays", md:
          "A state of 300,000 citizens cannot defend itself against [[unit:ir|Iran]] or larger neighbours. The US presence deters attack, and Qatar has paid to make itself hard to abandon: building the base, buying American fighters and missiles, investing in US companies and lobbying in Washington. In 2022 the US named Qatar a 'major non-NATO ally', and the September 2025 executive order went further, promising to defend it." },
        { type: "section", head: "The jet", md:
          "The gift of the 747, said to be worth about $400 million, caused a storm in the US. Critics, including some Republicans, said accepting it raised ethical and security problems, and that it would cost hundreds of millions more to equip as Air Force One. The plane is to go to Trump's presidential library after his term. Qatar said it was a government-to-government transfer, not a personal gift." },
        { type: "section", head: "Doubts on both sides", md:
          "In Washington, critics argue that Qatar's ties to Hamas, the Taliban and Iran, and Al Jazeera's coverage, make it an unreliable partner, and they question its funding of US universities and think-tanks. In Doha, 2025 and 2026 raised the opposite doubt: the US base did not stop Israel's strike on Doha or Iran's missiles. Qatar has also deepened defence ties with Turkey, which keeps a base in the country, and with European suppliers." },
        { type: "section", head: "Money in America", md:
          "Qatar's sovereign fund and companies own stakes in US property, hotels and businesses, and Qatar Airways is one of Boeing's biggest customers. Qatar has given large sums to US universities with branch campuses in Doha, such as Georgetown, Cornell and Texas A&M; some members of Congress have demanded more disclosure of foreign funding. Qatar says its investments are commercial and its gifts are for education." },
        { type: "compare", head: "Two views of the relationship",
          left: { head: "Supporters", md:
            "Qatar hosts the US military at its own expense, buys American, and helps Washington talk to enemies. It is a valuable ally." },
          right: { head: "Sceptics", md:
            "Qatar buys influence in Washington while backing groups that work against US interests." } },
        { type: "section", head: "What's next", md:
          "The executive order binds only this administration. Qatar would like a treaty, but that would need two-thirds of the US Senate, where opinions of Qatar are divided." }
      ],
      takeaways: [
        "Al Udeid hosts about 10,000 US personnel and the forward headquarters of US Central Command.",
        "Qatar invests heavily in the US and gave the Air Force a Boeing 747 in 2025, a controversial gift.",
        "The US named Qatar a major non-NATO ally in 2022 and promised to defend it in 2025."
      ],
      check: { q: "Who paid to build Al Udeid Air Base?",
        choices: ["The United States", "Qatar", "NATO"], answer: 1,
        explain: "Qatar built Al Udeid at its own expense in the 1990s and has paid for later expansions." },
      sources: [
        { title: "New Trump executive order guarantees Qatar security after Israeli attack", publisher: "Al Jazeera", url: "https://www.aljazeera.com/amp/news/2025/10/1/new-trump-executive-order-guarantees-qatar-security-after-israeli-attack", date: "2025-10-01" },
        { title: "Iranian strikes on Al Udeid Air Base", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Iranian_strikes_on_Al_Udeid_Air_Base", date: "n.d." },
        { title: "Any attack on Qatar is security threat to US, says Trump", publisher: "The National", url: "https://www.thenationalnews.com/news/2025/10/01/trump-qatar-security/", date: "2025-10-01" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "qa-12", kind: "spotlight", asOf: "2026-10-22",
      title: "Al Jazeera",
      dek: "A Qatari-funded channel changed Arab media, angered nearly every government in the region and became a symbol of Qatar's reach.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/qa/qa-12-hero.webp",
          alt: "Illustration of a large modern newsroom with rows of desks and screens, a glass-walled studio in the middle and figures working seen from behind.",
          caption: "Al Jazeera's headquarters in Doha broadcast in Arabic from 1996 and in English from 2006.",
          credit: "Illustration — not a photograph",
          prompt: "A large modern newsroom with rows of desks and glowing screens, a glass-walled studio with bright lights in the middle, several figures working seen from behind, a wall of world maps and monitors in soft blue light, busy and focused, no logos, no legible text." },
        { type: "facts", head: "Al Jazeera", rows: [
          ["Launched", "1996, in Arabic"],
          ["English channel", "2006"],
          ["Funding", "The Qatari state"],
          ["Banned or restricted by", "At various times Israel, Egypt, Saudi Arabia, the Palestinian Authority and others"],
          ["Journalists killed in Gaza", "Several, during the 2023–25 war"]
        ] },
        { type: "section", head: "A revolution in Arab news", md:
          "Before Al Jazeera, Arab television was mostly state-run and dull. From 1996 the channel, staffed partly by journalists from a failed BBC Arabic venture, broadcast live debates, interviewed Israeli officials, aired opposition voices and covered protests. Its slogan, 'the opinion and the other opinion', was revolutionary in the region. Governments from Saudi Arabia to Algeria protested, closed its offices and expelled reporters." },
        { type: "section", head: "Wars and uprisings", md:
          "After 9/11, Al Jazeera aired Osama bin Laden's videotapes and reported from Afghanistan and Iraq, angering the US; its Kabul and Baghdad offices were hit by US strikes, which the US said were accidental. In 2011 its coverage of the Arab Spring helped drive the protests, and governments accused it of taking sides, especially for the Muslim Brotherhood. Egypt jailed three Al Jazeera English journalists in 2013–15." },
        { type: "section", head: "Gaza", md:
          "During the war that began in October 2023, Al Jazeera was one of the few outlets with reporters across Gaza, and several of its journalists were killed by Israeli strikes. Israel's government accused some of being Hamas members and banned the channel in Israel in 2024; Al Jazeera denied the accusations and said Israel targeted its staff. The Palestinian Authority also banned it in the West Bank for a time." },
        { type: "section", head: "Independence?", md:
          "Al Jazeera says it is editorially independent. Critics point out that it rarely scrutinises Qatar or its ruling family, and that its Arabic channel's coverage often matches Qatar's foreign policy. The English channel, with bureaus worldwide, has a reputation for strong reporting from the Global South. Closing Al Jazeera was one of the 13 demands of the 2017 blockade ([[lesson:qa-10]]); Qatar refused." },
        { type: "section", head: "A global network", md:
          "Al Jazeera now runs channels in Arabic and English, a documentary channel, digital services such as AJ+, and a sports network that became beIN Media Group, which holds broadcast rights to major football leagues. Its English channel has bureaus in dozens of countries and often covers Africa, Asia and Latin America in more depth than Western broadcasters." },
        { type: "section", head: "Its critics' charges", md:
          "Governments that have banned or restricted the channel accuse it of incitement, of giving airtime to militant leaders and of selective outrage. Saudi Arabia and Egypt saw its Arab Spring coverage as backing the Muslim Brotherhood. Al Jazeera says it reports what governments want hidden, and points to its many journalists jailed or killed." },
        { type: "compare", head: "Two views of Al Jazeera",
          left: { head: "Admirers", md:
            "It gave the Arab world free debate, covered stories others ignored and paid for it with journalists' lives." },
          right: { head: "Critics", md:
            "It is a Qatari state tool that shields its owner, favours Islamist movements and has given militants a platform." } },
        { type: "section", head: "Why it matters", md:
          "Al Jazeera is Qatar's most powerful instrument of 'soft power', and the reason a small country's quarrels so often become everyone's." }
      ],
      takeaways: [
        "Al Jazeera, launched by Qatar in 1996, broke taboos in Arab media with live debate and opposition voices.",
        "Governments across the region, the US and Israel have accused it of bias and closed its offices.",
        "Critics say it rarely scrutinises Qatar itself; closing it was one of the 2017 blockade's demands."
      ],
      check: { q: "What was Al Jazeera's famous slogan?",
        choices: ["'News without borders'", "'The opinion and the other opinion'", "'Voice of the Gulf'"], answer: 1,
        explain: "Its Arabic slogan promised to air both sides of arguments, something new for Arab television in 1996." },
      sources: [
        { title: "Al Jazeera", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Al_Jazeera", date: "n.d." },
        { title: "Al Jazeera", publisher: "Britannica", url: "https://www.britannica.com/topic/Al-Jazeera", date: "n.d." },
        { title: "Qatar diplomatic crisis", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Qatar_diplomatic_crisis", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "qa-8", kind: "now", asOf: "2026-10-22",
      title: "Where things stand",
      dek: "A wounded gas giant, a mediator with a new US guarantee, and a ruler trying to keep a small state safe in a region at war.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/qa/qa-8-hero.webp",
          alt: "Illustration of a long gas tanker with large round domes sailing through a calm strait at sunrise, with rocky mountains on one side and a grey warship in the distance.",
          caption: "Qatari LNG tankers are again crossing the Strait of Hormuz, but traffic remains fragile.",
          credit: "Illustration — not a photograph",
          prompt: "A long gas tanker with four large round domes on deck sailing through a calm narrow strait at sunrise, rugged brown mountains on one shore, a small grey warship in the distance, pink and gold light on the water, uneasy calm, no logos, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Gas:** about 17% of LNG capacity out for three to five years; exports through Hormuz resuming slowly.\n" +
          "- **Money:** revenue down sharply, but vast reserves and the sovereign fund cushion the blow.\n" +
          "- **Security:** a US executive order guarantees Qatar's defence; Al Udeid remains.\n" +
          "- **Diplomacy:** a guarantor of the Gaza ceasefire and member of the Board of Peace.\n" +
          "- **Iran:** talks continue despite the March strikes." },
        { type: "section", head: "Qatar in the world", md:
          "Qatar is close to the [[unit:us|United States]] and [[unit:tr|Turkey]], has repaired ties with [[unit:sa|Saudi Arabia]], and keeps a cooler relationship with the [[unit:ae|UAE]], its rival in regional influence. It talks to [[unit:ir|Iran]] because it must, and to [[unit:il|Israel]] through the ceasefire channels, despite the 2025 strike. Its gas buyers, from [[unit:cn|China]], [[unit:in|India]] and [[unit:jp|Japan]] to [[unit:it|Italy]], tie it to the world's largest economies." },
        { type: "section", head: "The economy", md:
          "The war has hit Qatar harder than any event since the 1930s. But it has no debt problem, and its sovereign fund holds hundreds of billions of dollars. The North Field expansion, which was to nearly double LNG capacity by 2030, is delayed but continuing, and Qatar is still expected to remain one of the top three LNG exporters with the US and Australia." },
        { type: "section", head: "The question of model", md:
          "Qatar's strategy, being useful to everyone, has been tested as never before: struck by Israel for hosting Hamas and by Iran for hosting the US. So far its answer has been to double down: a closer US tie, continued mediation and continued dialogue with Tehran. Whether that is wisdom or wishful thinking may depend on whether the Gulf's wars end." },
        { type: "section", head: "Three scenarios", md:
          "- **Recovery.** Hormuz reopens fully, repairs proceed, and Qatar's mediation helps lock in a Gaza settlement.\n" +
          "- **Prolonged risk.** Iran–US tensions keep shipping unsafe and Qatar's gas earnings low for years.\n" +
          "- **A new alignment.** Qatar ties itself even more tightly to Washington, at the cost of its channels to Iran and Hamas." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Ongoing:** Hormuz shipping and Ras Laffan repairs\n" +
          "- **Ongoing:** the second phase of the Gaza ceasefire and the Board of Peace\n" +
          "- **Late 2026:** Qatar–Iran energy talks\n" +
          "- **2027 onward:** first new trains of the North Field expansion" },
        { type: "section", head: "Connections", md:
          "Qatar's story runs through [[unit:ir]] (the shared gas field and the strikes), [[unit:us]] (Al Udeid and the guarantee), [[unit:il]] (the Doha strike and Gaza), [[unit:sa]] and [[unit:ae]] (the blockade and Gulf rivalry), [[unit:tr]] (its other protector) and [[unit:eg]] (fellow Gaza guarantor)." },
        { type: "section", head: "Life at home", md:
          "Daily life for Qataris has changed little: generous benefits continue, and the government has protected spending on salaries and services. For migrant workers, slowing construction and gas output have meant fewer jobs and some delays in pay. The country has kept investing in sports and tourism, and preparing to host other big events, despite the war." }
      ],
      takeaways: [
        "Qatar's gas exports are recovering slowly after the March 2026 strikes, with 17% of capacity out for years.",
        "A US executive order now guarantees its security, and it remains a key Gaza mediator.",
        "Qatar keeps talking to Iran despite the attacks, a test of its 'useful to everyone' strategy."
      ],
      check: { q: "Which three countries are Qatar's main rivals as LNG exporters?",
        choices: ["The US and Australia", "Saudi Arabia and Kuwait", "Germany and Japan"], answer: 0,
        explain: "Qatar, the US and Australia are the world's three biggest LNG exporters." },
      sources: [
        { title: "Qatari LNG tankers resume Hormuz transits despite tensions", publisher: "Gulf Business", url: "https://gulfbusiness.com/en/2026/energy/qatari-lng-tankers-resume-hormuz-transits-despite-tensions/", date: "2026" },
        { title: "Shell sees flat LNG trade in 2026 as Hormuz recovery remains uncertain", publisher: "World Oil", url: "https://worldoil.com/news/2026/6/30/shell-sees-flat-lng-trade-in-2026-as-hormuz-recovery-remains-uncertain", date: "2026-06-30" },
        { title: "Türkiye, Egypt and Qatar demand Gaza ceasefire compliance", publisher: "Yeni Şafak", url: "https://en.yenisafak.com/turkiye/turkiye-egypt-and-qatar-demand-gaza-ceasefire-compliance-3722130", date: "2026-08" }
      ]
    }
  ]
});
