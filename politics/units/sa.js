/* ============================================================
   Unit 14 — Saudi Arabia 🇸🇦
   Research note and sources: tools/research/sa.md
   Current as of 28 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("sa", {
  id: "sa",
  asOf: "2026-09-28",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "sa-1", kind: "snapshot", asOf: "2026-09-28",
      title: "Saudi Arabia in brief",
      dek: "The world's biggest oil exporter, home of Islam's holiest cities, run by a crown prince remaking his country, and hit by Iranian missiles in 2026.",
      blocks: [
        { type: "map", src: "maps/sa.svg",
          alt: "Locator map of the Arabian Peninsula with Saudi Arabia highlighted, bordering Jordan, Iraq, Kuwait, Qatar, the UAE, Oman and Yemen, between the Red Sea and the Persian Gulf, with a small globe showing its place in the world.",
          caption: "Saudi Arabia covers most of the Arabian Peninsula, with coasts on both the Red Sea and the Persian Gulf.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Riyadh"],
          ["People", "About 35 million, around 40% of them foreign workers"],
          ["System", "Absolute monarchy; no national elections"],
          ["King", "Salman bin Abdulaziz, since 2015"],
          ["Crown prince and PM", "Mohammed bin Salman (MBS)"],
          ["Oil", "The largest exporter; leads OPEC+ with Russia"],
          ["Holy cities", "Mecca and Medina, visited by millions of pilgrims every year"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Saudi Arabia's oil decisions move the world economy. Through [[opec-plus|OPEC+]], the group of oil producers it leads with [[unit:ru|Russia]], it can push prices up or down for every driver and factory on the planet. Its sovereign wealth fund is among the world's largest, investing in everything from video games to football clubs and American AI.\n\n" +
          "As custodian of Mecca and Medina it has a special place in the Muslim world. It is a close security partner of [[unit:us|the United States]], a rival of [[unit:ir|Iran]] and, potentially, a future partner of [[unit:il|Israel]]." },
        { type: "section", head: "Who holds power", md:
          "Power sits with the Al Saud royal family, and above all with Crown Prince Mohammed bin Salman, 41, who has run the country day to day since the late 2010s and became prime minister in 2022. His father, King Salman, now 90, remains head of state. There is no elected parliament, no legal opposition and no independent press.\n\n" +
          "MBS has concentrated power as no Saudi royal before him, sidelining rival princes, curbing the religious establishment and taking personal control of the economy's transformation." },
        { type: "section", head: "The mood in 2026", md:
          "The kingdom is caught between big ambitions and a harder reality. Its Vision 2030 plan to diversify away from oil has been scaled back as money tightened, and the budget is in deficit. In 2026 Iranian missiles and drones hit its oil facilities, and Yemen's Houthis opened a new front against it in July. Yet the social changes of the past decade, from concerts and cinemas to women driving, have transformed daily life for young Saudis, who make up most of the population." },
        { type: "section", head: "A young country", md:
          "Around two-thirds of Saudi citizens are under 35. They grew up with smartphones, travel and, since 2017, far fewer social restrictions than their parents. Creating jobs for them in the private sector, rather than in the state that has long employed most Saudis, is the central economic challenge." },
        { type: "section", head: "What Saudi Arabia wants", md:
          "Riyadh wants security guarantees from the United States, a Gulf free of Iranian missile threats, oil prices high enough to fund its plans, and foreign investment to build a post-oil economy. It has said it wants to join the Abraham Accords with Israel, but only with a credible path to a Palestinian state." },
        { type: "callout", tone: "why", md:
          "When the Strait of Hormuz closed in 2026, Saudi Arabia's pipelines to the Red Sea became one of the few ways Gulf oil could reach the world. The kingdom's choices on oil output, Iran and Israel shape prices at the pump and the balance of power in the region." }
      ],
      takeaways: [
        "Saudi Arabia is the world's biggest oil exporter and leads OPEC+ with Russia.",
        "Crown Prince Mohammed bin Salman runs an absolute monarchy with no elections.",
        "In 2026 it was hit by Iranian and Houthi strikes while scaling back its Vision 2030 megaprojects."
      ],
      check: { q: "Who runs Saudi Arabia's government day to day?",
        choices: ["King Salman", "Crown Prince Mohammed bin Salman", "An elected parliament"], answer: 1,
        explain: "King Salman is head of state, but his son, Crown Prince and Prime Minister Mohammed bin Salman, runs the government." },
      sources: [
        { title: "Saudi Arabia in the 2026 Iran war", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Saudi_Arabia_in_the_2026_Iran_war", date: "2026" },
        { title: "Rebalancing Ambition: Saudi Arabia's Megaproject Pivot", publisher: "Gulf International Forum", url: "https://gulfif.org/rebalancing-ambition-saudi-arabias-megaproject-pivot/", date: "2026" },
        { title: "New front in US-Iran war escalates as Houthis fire at Saudi oil facilities", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/7/26/new-front-in-us-iran-war-escalates-as-houthis-fire-at-saudi-oil-facilities", date: "2026-07-26" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "sa-2", kind: "power", asOf: "2026-09-28",
      title: "A kingdom run by one prince",
      dek: "No constitution but the Quran, no elections, and a line of succession that MBS rewrote in his own favour.",
      blocks: [
        { type: "diagram", src: "img/sa/sa-2-power.svg",
          alt: "Diagram of power in Saudi Arabia. King Salman bin Abdulaziz has reigned since 2015. The crown prince and prime minister, Mohammed bin Salman, runs the government day to day, including defence, oil, the economy and foreign policy. He appoints the Council of Ministers, many of them royals or his allies, whose decrees have the force of law. The appointed 150-member Shura Council proposes and reviews laws but cannot overrule the king. The religious establishment, the Grand Mufti and senior scholars, lends legitimacy, though its influence has been curbed since 2017. There are no national elections, only limited municipal votes.",
          caption: "An absolute monarchy in which the crown prince holds most real power.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "An absolute monarchy", md:
          "Saudi Arabia has no written constitution apart from the Quran and the Sunna, the Prophet Muhammad's teachings. A 1992 Basic Law of Governance sets out how the state works: the king is head of state and government, rules by royal decree and appoints ministers, judges and the governors of the 13 regions. There are no political parties, and criticism of the royal family can lead to long prison sentences." },
        { type: "section", head: "The Shura Council", md:
          "The Shura Council has 150 members appointed by the king, including women since 2013. It debates and proposes laws, reviews budgets and questions ministers, but it cannot overrule the king. The only elections are for some seats on municipal councils, which have limited powers; women have been able to vote and stand in them since 2015." },
        { type: "section", head: "The succession", md:
          "Since the death of the founder, Ibn Saud, in 1953, the throne has passed among his sons, all now elderly or dead. Salman, one of the last, became king in 2015. He first named a nephew, Mohammed bin Nayef, as crown prince, then replaced him in 2017 with his own son, Mohammed bin Salman. That shifted power to a new generation, and to one branch of the family. When Salman dies, MBS is expected to become king, and could rule for decades." },
        { type: "section", head: "Religion and the state", md:
          "The Al Saud dynasty's rise in the 18th century was built on an alliance with the cleric Muhammad ibn Abd al-Wahhab, and for most of the kingdom's history senior clerics shaped social rules, education and the courts. MBS has broken with that tradition: the religious police lost their powers of arrest in 2016, public entertainment and mixed events are now allowed, and he has promised a 'moderate Islam'. The clergy remain part of the state, but firmly under royal control." },
        { type: "section", head: "Money as power", md:
          "Oil revenue flows to the state, which employs most Saudi citizens and pays for free health care, education and subsidies. The Public Investment Fund, chaired by MBS, controls hundreds of billions of dollars and is the main tool of Vision 2030. This social contract, prosperity in exchange for loyalty, is why falling oil prices are a political as well as an economic problem." },
        { type: "section", head: "The law", md:
          "Courts apply Islamic law as interpreted by judges, with growing codification under MBS: a new personal status law in 2022 and a civil transactions law in 2023 were meant to make rulings more predictable for families and investors. A specialised criminal court, set up for terrorism cases, has been widely used against peaceful critics, according to rights groups." },
        { type: "compare", head: "Two views of MBS's rule",
          left: { head: "Supporters", md:
            "A young leader has modernised a conservative society at remarkable speed, opened it to the world and started to prepare it for life after oil." },
          right: { head: "Critics", md:
            "Social freedoms came with harsher political repression: activists jailed, record numbers of executions, and the murder of the journalist Jamal Khashoggi." } }
      ],
      takeaways: [
        "Saudi Arabia is an absolute monarchy with no written constitution beyond the Quran and no national elections.",
        "MBS became crown prince in 2017, displacing his cousin, and runs the government as prime minister.",
        "He curbed the clerics' power and opened social life, while tightening political control."
      ],
      check: { q: "What power does the Shura Council have?",
        choices: ["It elects the king", "It proposes and reviews laws but cannot overrule the king", "It can veto the budget"], answer: 1,
        explain: "The 150 appointed members advise the king, propose laws and review budgets, but the king has the final word." },
      sources: [
        { title: "Saudi Arabia profile", publisher: "BBC News", url: "https://www.bbc.com/news/world-middle-east-14702705", date: "n.d." },
        { title: "Saudi Arabia's Constitution (Basic Law of Governance)", publisher: "Constitute Project", url: "https://www.constituteproject.org/constitution/Saudi_Arabia_2013", date: "n.d." },
        { title: "World Report 2026: Saudi Arabia", publisher: "Human Rights Watch", url: "https://www.hrw.org/world-report/2026/country-chapters/saudi-arabia", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "sa-3", kind: "history", asOf: "2026-09-28",
      title: "Desert kingdom to oil power",
      dek: "A state founded by conquest, transformed by oil, shaken by 1979, and rebuilt by a young prince.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sa/sa-3-hero.webp",
          alt: "Illustration of a mud-brick fortress with watchtowers at the edge of a desert oasis at sunset, palm trees in the foreground.",
          caption: "The Al Saud dynasty began in the oasis towns of central Arabia.",
          credit: "AI illustration — not a photograph",
          prompt: "An old mud-brick fortress with square watchtowers at the edge of a desert oasis at sunset, date palms in the foreground, sand dunes glowing orange behind, a camel caravan small in the distance, timeless and historic, no people close up, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1932", "Ibn Saud unites his conquests as the Kingdom of Saudi Arabia"],
          ["1938", "Oil discovered at Dammam"],
          ["1973", "Arab oil embargo quadruples prices"],
          ["1979", "Militants seize the Grand Mosque in Mecca"],
          ["2015", "Salman becomes king; war in Yemen"],
          ["2017", "MBS becomes crown prince; the Ritz-Carlton detentions"],
          ["2018", "Women allowed to drive; Khashoggi killed"]
        ] },
        { type: "section", head: "1. Founding (1902–1932)", md:
          "Abdulaziz ibn Saud recaptured Riyadh in 1902 and spent 30 years conquering most of the Arabian Peninsula, including Mecca and Medina, with the help of religious warriors inspired by Wahhabi teaching. In 1932 he proclaimed the Kingdom of Saudi Arabia, named after his family. His meeting with President Franklin Roosevelt aboard a US warship in 1945 began a lasting bargain: Saudi oil for American security." },
        { type: "section", head: "2. Oil and wealth (1938–1973)", md:
          "American geologists struck oil in commercial quantities in 1938. The US-owned company that became Aramco was gradually nationalised in the 1970s and 1980s. In 1973, during the Arab–Israeli war, Saudi Arabia led an Arab oil embargo against the United States and others, quadrupling prices and showing the West its power. Oil money built cities, roads and a generous welfare state almost overnight." },
        { type: "section", head: "3. The shock of 1979", md:
          "In November 1979 hundreds of armed militants seized the Grand Mosque in Mecca, denouncing the royal family as corrupt; the siege lasted two weeks. The same year, Iran's revolution created a Shia Islamist rival across the Gulf. The monarchy's response was to give conservative clerics more power over society, a shift MBS later called a mistake. Saudi money also spread conservative religious teaching abroad for decades." },
        { type: "section", head: "4. 9/11 and the long partnership", md:
          "Fifteen of the 19 hijackers on 11 September 2001 were Saudi citizens, straining relations with Washington, though the government denied any role. Saudi Arabia fought al-Qaeda at home in the 2000s and stayed a central US partner, buying American weapons on a vast scale." },
        { type: "section", head: "The Arab Spring", md:
          "When uprisings swept the Arab world in 2011, the monarchy spent heavily on jobs, housing and salaries at home and sent troops to help Bahrain's rulers crush protests there. It backed the Egyptian army's removal of the Muslim Brotherhood's President Morsi in 2013, seeing political Islam as a threat to monarchies." },
        { type: "section", head: "5. The rise of MBS (2015–2018)", md:
          "When Salman became king in 2015 he made his young son defence minister; Saudi Arabia launched a war in Yemen within weeks. In 2017 MBS became crown prince and detained hundreds of princes and businessmen at Riyadh's Ritz-Carlton hotel in an anti-corruption campaign that also removed rivals and recovered billions. He let women drive in 2018. Months later the journalist Jamal Khashoggi was killed inside the Saudi consulate in Istanbul; US intelligence concluded MBS approved the operation, which he denies ordering." }
      ],
      takeaways: [
        "Ibn Saud founded the kingdom in 1932; oil, found in 1938, made it rich and tied it to the US.",
        "The 1979 Grand Mosque siege pushed the monarchy toward religious conservatism for decades.",
        "Since 2015 MBS has concentrated power, opened social life and cracked down on critics."
      ],
      check: { q: "What happened at the Ritz-Carlton in Riyadh in 2017?",
        choices: ["A peace summit with Iran", "Hundreds of princes and businessmen were detained in an anti-corruption campaign", "The launch of Vision 2030"], answer: 1,
        explain: "MBS's campaign detained hundreds of wealthy Saudis, recovered billions and removed potential rivals." },
      sources: [
        { title: "Saudi Arabia profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-middle-east-14703523", date: "n.d." },
        { title: "Saudi Arabia", publisher: "Britannica", url: "https://www.britannica.com/place/Saudi-Arabia", date: "n.d." },
        { title: "MBS Wanted Status. Trump Wanted Deals.", publisher: "Carnegie Endowment for International Peace", url: "https://carnegieendowment.org/emissary/2025/11/mbs-saudi-arabia-trump-washington-visit-ai-f35-status?lang=en", date: "2025-11" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "sa-4", kind: "players", asOf: "2026-09-28",
      title: "MBS and his circle",
      dek: "The crown prince, his elderly father, his brothers and the ministers who run oil, diplomacy and money.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sa/sa-4-hero.webp",
          alt: "Illustration of an empty, gilded royal reception hall with long rows of armchairs facing each other, chandeliers and patterned carpets.",
          caption: "Power in Saudi Arabia is exercised in royal courts and majlis halls, not parliaments.",
          credit: "AI illustration — not a photograph",
          prompt: "An empty, gilded royal reception hall with two long rows of ornate armchairs facing each other across patterned carpets, crystal chandeliers, tall arched windows, polished marble, opulent and silent, no people, no legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "Mohammed bin Salman", role: "Crown prince and prime minister",
            img: "img/sa/portrait-mbs.webp", source: "Official photo (Kremlin.ru or White House, CC BY / public domain) via Wikimedia Commons; confirm the licence.",
            md: "Born in 1985. Chairs the Public Investment Fund and controls defence, oil and foreign policy. Architect of Vision 2030, the social opening and the crackdown on dissent." },
          { name: "King Salman bin Abdulaziz", role: "King, since 2015",
            img: "img/sa/portrait-salman.webp", source: "Official photo (public domain) via Wikimedia Commons; confirm the licence.",
            md: "Born in 1935, for decades governor of Riyadh. Now largely withdrawn from daily affairs because of age and health." },
          { name: "Abdulaziz bin Salman", role: "Energy minister",
            img: "img/sa/portrait-abdulaziz.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "MBS's older half-brother and the kingdom's voice in OPEC+, known for surprising oil markets." },
          { name: "Khalid bin Salman", role: "Defence minister",
            img: "img/sa/portrait-khalid.webp", source: "Official photo (US DoD, public domain) via Wikimedia Commons; confirm the licence.",
            md: "MBS's younger brother and former ambassador to Washington; manages the security relationship with the US and the kingdom's defence in the Iran war." },
          { name: "Faisal bin Farhan", role: "Foreign minister",
            img: "img/sa/portrait-faisal.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "The kingdom's chief diplomat, active on Gaza, Iran, Sudan and Ukraine talks." },
          { name: "Yasir Al-Rumayyan", role: "Governor of the Public Investment Fund",
            img: "img/sa/portrait-rumayyan.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Runs the sovereign fund and chairs Aramco; the fund's new strategy puts 80% of investment at home." }
        ] },
        { type: "section", head: "A family business", md:
          "The ministries that matter most, energy and defence, are run by MBS's brothers, and many regional governors are princes. Thousands of royals receive state stipends. MBS has cut some of their privileges and ended the old system of consensus among senior princes, making the family more centralised and more dependent on him." },
        { type: "section", head: "How decisions are made", md:
          "Big decisions, on oil output, war and peace or major deals, are made by MBS and a small circle of advisers and brothers. The Council of Ministers meets weekly under his chairmanship, and royal decrees, often announced late at night, can reshape ministries overnight. Foreign officials say the crown prince is closely involved in detail." },
        { type: "section", head: "The next generation", md:
          "MBS has no obvious rival inside the family. Former heir Mohammed bin Nayef was detained in 2020, and other senior princes who might once have challenged him were among those held in 2017. His own sons are still young, so the question of who would follow him is far off." },
        { type: "section", head: "Women", md:
          "Women's lives have changed more than anyone's. Since 2017 they can drive, attend sports events, travel without a male guardian's permission once over 21, and work in most jobs. Women now make up about a third of the workforce. But the male guardianship system has not been fully abolished, and some of the activists who campaigned for these rights were jailed or banned from travel." },
        { type: "section", head: "Society and dissent", md:
          "Most Saudis are under 35, and many welcome the social changes and the national pride MBS promotes. But speech is tightly controlled. Women's rights activists who campaigned for the right to drive were jailed, clerics and economists who criticised policies have received long sentences, and people have been imprisoned for decades over social-media posts. Rights groups report record numbers of executions in 2024 and 2025, many for drug offences. The government says it applies the law and protects society." }
      ],
      takeaways: [
        "MBS controls the state; his brothers run the energy and defence ministries.",
        "King Salman, born in 1935, remains head of state but is largely withdrawn.",
        "Social freedoms have grown, while dissent is punished harshly and executions have hit record levels."
      ],
      check: { q: "Who is Saudi Arabia's energy minister?",
        choices: ["Faisal bin Farhan", "Abdulaziz bin Salman", "Yasir Al-Rumayyan"], answer: 1,
        explain: "Abdulaziz bin Salman, MBS's half-brother, runs energy policy and represents the kingdom in OPEC+." },
      sources: [
        { title: "Saudi De-Facto Leader MBS Visit Cements Strategic Ties to Washington", publisher: "The Soufan Center", url: "https://thesoufancenter.org/intelbrief-2025-november-19/", date: "2025-11-19" },
        { title: "Saudi Arabia's PIF targets 80 per cent domestic investment in new five-year strategy", publisher: "The National", url: "https://www.thenationalnews.com/business/economy/2026/04/15/saudi-arabias-pif-targets-80-domestic-allocation-cuts-overseas-share-to-20/", date: "2026-04-15" },
        { title: "World Report 2026: Saudi Arabia", publisher: "Human Rights Watch", url: "https://www.hrw.org/world-report/2026/country-chapters/saudi-arabia", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "sa-5", kind: "story", asOf: "2026-09-28",
      title: "Vision 2030 meets reality",
      dek: "A plan to build futuristic cities in the desert has been scaled back as oil money tightened and war arrived.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sa/sa-5-hero.webp",
          alt: "Illustration of a vast desert construction site at dusk, with half-finished mirrored structures, idle cranes and trenches stretching toward the mountains.",
          caption: "NEOM, on the Red Sea coast, was meant to include a 170-kilometre linear city called The Line.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast desert construction site at dusk, half-finished tall mirrored wall structures, idle tower cranes, long trenches and gravel roads stretching toward rugged mountains, a red sea coastline in the distance, ambitious and incomplete, no people close up, no legible text." },
        { type: "section", head: "What happened", md:
          "Launched in 2016, Vision 2030 promised to end Saudi Arabia's 'addiction to oil'. Its most famous projects were giga-projects: NEOM, a new region on the Red Sea with The Line, a mirrored city 170 kilometres long; resorts along the coast; and new districts in Riyadh. From 2024 the plans shrank. The Public Investment Fund ordered spending cuts of at least 20% across its companies, The Line was reduced to a small first phase, and in April 2026 the government stopped funding several big tourism projects.\n\n" +
          "The 2026 budget projects a deficit of around $44 billion, and the kingdom is borrowing heavily." },
        { type: "facts", head: "By the numbers", rows: [
          ["Vision 2030 launched", "2016"],
          ["PIF spending cut", "At least 20% across its portfolio (from December 2024)"],
          ["PIF new strategy (April 2026)", "80% of investment at home, 20% abroad"],
          ["2026 budget deficit", "About $44 billion"],
          ["Coming events", "Expo 2030 in Riyadh; the 2034 football World Cup"]
        ] },
        { type: "section", head: "Why it happened", md:
          "The projects were enormously expensive, and oil prices in 2024–25 were lower than the kingdom needed to balance its books. Foreign investors were slower to commit than planners hoped. Then the 2026 war hit oil facilities and made the region look riskier. The fund has shifted priorities toward projects with quicker returns: mining, manufacturing, AI data centres and the events the kingdom has promised to host." },
        { type: "section", head: "What has changed", md:
          "Much of Vision 2030 is less visible than NEOM but real. Women's participation in the workforce has roughly doubled since 2017. Tourism, entertainment and sport have grown quickly. Non-oil industries are a larger share of the economy. The social rules that once governed daily life, from segregated restaurants to bans on concerts, have largely gone." },
        { type: "section", head: "The AI turn", md:
          "The Public Investment Fund has put AI at the heart of its new strategy. A state company, Humain, was launched in 2025 to build data centres and AI models, and US chip exports agreed with Washington are meant to power them. Saudi Arabia, with cheap energy and land, wants to become a hub for computing power the way it has been for oil." },
        { type: "compare", head: "Two views of Vision 2030",
          left: { head: "Supporters", md:
            "Adjusting plans is sensible, not failure. Society has been transformed, new industries created, and the kingdom will host the world's biggest events." },
          right: { head: "Sceptics", md:
            "Hundreds of billions were spent on vanity projects, some involving forced evictions, while the economy still depends on oil. The pivot confirms the doubts." } },
        { type: "section", head: "What's next", md:
          "Watch the 2027 budget, oil prices after the war, and whether the kingdom delivers on Expo 2030 and the 2034 World Cup, which require new stadiums, transport and hotels. Those deadlines now anchor the plan more than NEOM does, and they will be the world's measure of whether the transformation has really worked." }
      ],
      takeaways: [
        "Vision 2030, launched in 2016, aims to diversify Saudi Arabia away from oil.",
        "Giga-projects like NEOM and The Line have been scaled back sharply since 2024.",
        "The 2026 budget runs a deficit of about $44 billion; Expo 2030 and the 2034 World Cup now anchor the plan."
      ],
      check: { q: "What was 'The Line'?",
        choices: ["An oil pipeline to the Red Sea", "A planned 170-kilometre linear city in NEOM", "Saudi Arabia's border fence with Yemen"], answer: 1,
        explain: "The Line was the most famous NEOM project, a mirrored city 170 km long. It has been reduced to a small first phase." },
      sources: [
        { title: "Rebalancing Ambition: Saudi Arabia's Megaproject Pivot", publisher: "Gulf International Forum", url: "https://gulfif.org/rebalancing-ambition-saudi-arabias-megaproject-pivot/", date: "2026" },
        { title: "Saudi Arabia Scraps Tourism Funding In Vision 2030 Shake-Up", publisher: "Skift", url: "https://skift.com/2026/04/16/saudi-arabia-scraps-tourism-funding-in-vision-2030-shake-up/", date: "2026-04-16" },
        { title: "Saudi Arabia set to redraw economic road map as megaprojects scale down", publisher: "South China Morning Post", url: "https://www.scmp.com/week-asia/economics/article/3341914/saudi-arabia-set-redraw-economic-road-map-megaprojects-scale-down", date: "2026" },
        { title: "Saudi Arabia's PIF targets 80 per cent domestic investment in new five-year strategy", publisher: "The National", url: "https://www.thenationalnews.com/business/economy/2026/04/15/saudi-arabias-pif-targets-80-domestic-allocation-cuts-overseas-share-to-20/", date: "2026-04-15" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "sa-6", kind: "story", asOf: "2026-09-28",
      title: "From Yemen to détente to war",
      dek: "A decade that began with a Saudi war in Yemen, turned to peace with Iran, and ended with Iranian missiles hitting Saudi refineries.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sa/sa-6-hero.webp",
          alt: "Illustration of a large oil refinery at night with flares burning, one section dark and smoking, under a sky with faint contrails.",
          caption: "Iranian missiles and drones struck Saudi oil facilities, including the Ras Tanura refinery, in 2026.",
          credit: "AI illustration — not a photograph",
          prompt: "A large oil refinery complex at night, tall gas flares burning orange, one section dark with rising smoke, pipes and storage tanks lit by floodlights, faint contrails in a dark sky, tense aftermath, no people, no legible text." },
        { type: "section", head: "What happened", md:
          "In 2015 Saudi Arabia led a coalition into Yemen's civil war against the Iran-aligned Houthis, who had seized the capital. The war became a stalemate and a humanitarian catastrophe; the Houthis struck Saudi cities and, in 2019, Saudi oil facilities. A truce in 2022 largely stopped the fighting. In March 2023, in a deal brokered by [[unit:cn|China]], Riyadh and Tehran restored diplomatic relations.\n\n" +
          "The 2026 war broke that détente. From 2 March Iranian missiles and drones struck Saudi oil sites, including the Ras Tanura refinery, and a drone hit the US embassy in Riyadh. By April the attacks had cut the kingdom's oil production capacity by around 600,000 barrels a day. Saudi Arabia expelled Iran's military attaché, and according to reports it struck Iranian launch sites and militias in Iraq. In July the Houthis resumed attacks on Saudi oil facilities." },
        { type: "timeline", head: "How it unfolded", items: [
          ["2015", "Saudi-led coalition intervenes in Yemen"],
          ["2022", "Truce in Yemen"],
          ["Mar 2023", "China-brokered Saudi–Iran deal"],
          ["Sep 2025", "Saudi–Pakistan mutual defence pact"],
          ["Mar 2026", "Iranian strikes on Saudi oil facilities"],
          ["Jul 2026", "Houthis open a new front against Saudi Arabia"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Saudi Arabia hosts US forces and is Iran's main regional rival, so it was an obvious target when Iran retaliated for the US–Israeli strikes. Riyadh had tried to stay out of the war; it now faces the danger it had spent three years of détente trying to avoid." },
        { type: "section", head: "The Pakistan pact", md:
          "In September 2025 Saudi Arabia and [[unit:pk|Pakistan]], a nuclear-armed state, signed a mutual defence agreement: an attack on one would be treated as an attack on both. The pact, and Pakistan's role as mediator in the Iran war, have made Islamabad a key Saudi partner. Riyadh backed the Pakistan-hosted talks while insisting on its right to defend itself." },
        { type: "section", head: "Yemen's cost", md:
          "The Yemen war killed tens of thousands directly, and far more through hunger and disease, according to the UN. Saudi-led air strikes on markets, weddings and a school bus drew international condemnation. Yemen remains divided between the Houthis in the north and a Saudi-backed government in the south, with no political settlement in sight." },
        { type: "compare", head: "Two views of Saudi strategy",
          left: { head: "Riyadh's view", md:
            "The kingdom sought peace with Iran and warned against war. It is now defending itself while backing diplomacy, and building partnerships beyond the United States." },
          right: { head: "Critics' view", md:
            "The Yemen war caused immense suffering, and Saudi reliance on US protection drew it into a war it could not control. Its security depends on others' decisions." } },
        { type: "section", head: "What's next", md:
          "Watch whether Iranian or Houthi strikes on Saudi oil continue, whether the Yemen truce survives, and whether the kingdom joins or stays out of any US-led security arrangements after the war." }
      ],
      takeaways: [
        "Saudi Arabia fought the Houthis in Yemen from 2015 to a 2022 truce, then restored ties with Iran in 2023.",
        "In the 2026 war Iranian strikes hit Saudi oil facilities, cutting capacity by around 600,000 barrels a day.",
        "A 2025 defence pact with Pakistan and Pakistan's mediation have made Islamabad a key partner."
      ],
      check: { q: "Which country brokered the 2023 deal restoring Saudi–Iranian relations?",
        choices: ["The United States", "China", "Pakistan"], answer: 1,
        explain: "China brokered the March 2023 agreement, a sign of its growing role in the Middle East." },
      sources: [
        { title: "2026 Iranian strikes on Saudi Arabia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_Iranian_strikes_on_Saudi_Arabia", date: "2026" },
        { title: "Saudi Arabia in the 2026 Iran war", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Saudi_Arabia_in_the_2026_Iran_war", date: "2026" },
        { title: "New front in US-Iran war escalates as Houthis fire at Saudi oil facilities", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/7/26/new-front-in-us-iran-war-escalates-as-houthis-fire-at-saudi-oil-facilities", date: "2026-07-26" },
        { title: "Oil prices rise to 6-week high after Iran and U.S. trade blows, Saudi Aramco facilities reportedly hit", publisher: "CNBC", url: "https://www.cnbc.com/2026/09/07/oil-prices-rise-to-6-week-high-after-iran-and-us-trade-blows-saudi-aramco-facilities-reportedly-hit.html", date: "2026-09-07" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "sa-7", kind: "story", asOf: "2026-09-28",
      title: "The American bargain",
      dek: "Trump's first foreign trip, a crown prince at the White House, F-35s and a defence pact, and the normalisation deal with Israel that hasn't happened.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sa/sa-7-hero.webp",
          alt: "Illustration of fighter jets flying in formation over a white neoclassical building with a lawn, under a clear autumn sky.",
          caption: "The White House welcomed MBS with a military flyover in November 2025.",
          credit: "AI illustration — not a photograph",
          prompt: "Several fighter jets flying in tight formation over a white neoclassical mansion with columns and a wide green lawn, clear blue autumn sky, a red carpet on the drive, celebratory and grand, no people close up, no flags or legible text." },
        { type: "section", head: "What happened", md:
          "Trump chose the Gulf for his first major foreign tour of his second term in May 2025, starting in Riyadh as he had in 2017, and the kingdom pledged $600 billion of investment in the United States. In November 2025 MBS visited the White House for the first time since Khashoggi's killing. Trump agreed to sell Saudi Arabia F-35 fighter jets, signed a defence agreement committing the US to help defend the kingdom, and agreed a framework for civil nuclear cooperation. MBS raised the investment pledge toward $1 trillion." },
        { type: "facts", head: "The deals", rows: [
          ["May 2025", "Trump in Riyadh; $600 billion investment pledge"],
          ["Nov 2025", "MBS at the White House; F-35 sale approved; defence agreement"],
          ["Civil nuclear", "A framework for cooperation signed"],
          ["Investment", "Pledge raised toward $1 trillion"],
          ["Israel", "No normalisation commitment"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Both sides wanted something. Saudi Arabia wanted binding US security guarantees and advanced weapons, and access to American technology for its nuclear and AI ambitions. Trump wanted investment, arms sales and, above all, a Saudi–Israeli normalisation deal to extend the Abraham Accords." },
        { type: "section", head: "Israel", md:
          "MBS told Trump he wants Saudi Arabia to join the [[Abraham Accords]] with [[unit:il|Israel]], but on a condition: a credible, time-bound path to a Palestinian state. Israel's current government rejects a Palestinian state, and Saudi public opinion hardened sharply during the Gaza war. So normalisation remains on hold, and may depend on who wins Israel's 27 October election." },
        { type: "section", head: "Khashoggi's shadow", md:
          "The 2018 killing of Jamal Khashoggi, a Saudi journalist who wrote for the Washington Post, made MBS a pariah in Western capitals for several years. President Biden promised to treat the kingdom as one, then visited in 2022 as oil prices soared. Trump has defended MBS, and in November 2025 said the crown prince 'knew nothing' about the killing, contradicting the US intelligence assessment." },
        { type: "section", head: "The nuclear question", md:
          "Saudi Arabia wants nuclear power plants, and possibly to enrich uranium itself. MBS said in 2018 that if Iran built a bomb, Saudi Arabia would follow. The new cooperation framework is meant to keep a Saudi programme under US standards, but arms-control experts worry about any enrichment in the region, especially after the Iran wars." },
        { type: "compare", head: "Two views of the bargain",
          left: { head: "Supporters", md:
            "A closer US–Saudi alliance anchors the Gulf against Iran and China, brings investment to America and could eventually produce peace between Israel and the Arab world's most important state." },
          right: { head: "Critics", md:
            "The US is guaranteeing the security of an autocracy with a poor human-rights record, and selling it advanced weapons, without getting normalisation in return." } },
        { type: "section", head: "What's next", md:
          "The Iran war tested the new defence commitment. Watch the delivery of weapons, the next steps on nuclear cooperation, and any movement on Israel after the Israeli election and the Gaza disarmament talks." }
      ],
      takeaways: [
        "Trump visited Riyadh in May 2025; MBS visited the White House in November 2025.",
        "The US approved F-35 sales, a defence agreement and a civil nuclear framework; Saudi pledges approach $1 trillion.",
        "Normalisation with Israel is on hold pending a path to a Palestinian state."
      ],
      check: { q: "What does MBS require before normalising relations with Israel?",
        choices: ["US troops leaving the Gulf", "A credible path to a Palestinian state", "Israel joining OPEC+"], answer: 1,
        explain: "MBS says Saudi Arabia wants to join the Abraham Accords, but only with a credible path to a Palestinian state." },
      sources: [
        { title: "Trump hosts Saudi Arabia's Mohammed bin Salman: Five key takeaways", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/11/18/trump-hosts-saudi-arabias-mohammed-bin-salman-five-key-takeaways", date: "2025-11-18" },
        { title: "Trump welcomes MBS for White House visit with fanfare", publisher: "CBS News", url: "https://www.cbsnews.com/news/trump-welcomes-mbs-saudi-crown-prince-white-house/", date: "2025-11-18" },
        { title: "MBS Returns to Washington: Re-Assessing US-Saudi Relations", publisher: "Arab Center Washington DC", url: "https://arabcenterdc.org/resource/mbs-returns-to-washington-re-assessing-us-saudi-relations/", date: "2025-11" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "sa-8", kind: "now", asOf: "2026-09-28",
      title: "Where things stand",
      dek: "A kingdom under fire, with less money than it planned, closer to Washington than ever, and waiting on the end of the Iran war.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/sa/sa-8-hero.webp",
          alt: "Illustration of Riyadh's skyline at dusk with modern towers, highways lit by traffic and the desert beyond.",
          caption: "Riyadh has grown into a city of more than seven million.",
          credit: "AI illustration — not a photograph",
          prompt: "A modern desert city skyline at dusk, distinctive tall towers including one with a large opening near its top, highways streaming with car lights, flat desert beyond under a purple sky, dynamic and prosperous, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Power:** MBS rules; King Salman remains head of state.\n" +
          "- **War:** Iranian and Houthi strikes have hit Saudi oil sites; the kingdom backs diplomacy and defends itself.\n" +
          "- **Money:** a deficit of around $44 billion in 2026; megaprojects scaled back.\n" +
          "- **US:** a defence agreement and F-35 sales approved; heavy investment pledges.\n" +
          "- **Israel:** normalisation on hold." },
        { type: "section", head: "Oil", md:
          "The war has pushed oil prices up, which helps Saudi revenue, but attacks have cut its capacity and closed routes. Saudi Arabia's East–West pipeline to the Red Sea, itself targeted, has become vital while Hormuz is disrupted. Within OPEC+, Riyadh balances its own need for revenue against the risk that high prices speed the world's shift away from oil. In 2025 it pushed the group to raise output to win back market share, a strategy the war interrupted." },
        { type: "section", head: "Security after the war", md:
          "The war exposed how vulnerable Saudi oil and cities are to missiles and drones, despite billions spent on US air-defence systems. Riyadh is now investing in more air defences, its own drone and missile industries, and partnerships beyond Washington, including the pact with Pakistan. It also wants a regional arrangement that restrains Iran without dragging the kingdom into more wars." },
        { type: "section", head: "Hajj and soft power", md:
          "Every year about two million pilgrims come for the Hajj, and millions more for the smaller Umrah pilgrimage. Managing the holy sites gives the kingdom prestige across the Muslim world, and a responsibility: its leaders' decisions on Gaza, Israel and Iran are watched closely by Muslims everywhere." },
        { type: "section", head: "What Saudis want", md:
          "There are no reliable opinion polls, but surveys of young Arabs suggest Saudis are optimistic about their country's direction and prioritise jobs, housing and security. Support for normalisation with Israel fell sharply during the Gaza war, according to regional polling, which limits how far MBS can go without a Palestinian track." },
        { type: "section", head: "The succession ahead", md:
          "King Salman is 90. When he dies, MBS is expected to become king immediately, a transition prepared for years. Few expect it to change policy, since he already runs the country, but it would formally open what could be a reign of several decades." },
        { type: "section", head: "Three scenarios", md:
          "- **Peace dividend.** The Iran war ends, oil flows normally, investment returns and Vision 2030 regains momentum.\n" +
          "- **Long insecurity.** Strikes continue on and off, the Houthis stay active, and the kingdom cuts spending further.\n" +
          "- **A grand bargain.** A post-war settlement links US guarantees, Israeli–Saudi normalisation and a Palestinian track." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Monthly:** OPEC+ decisions on output\n" +
          "- **Autumn 2026:** the US response to Iran's peace plan\n" +
          "- **27 October 2026:** Israel's election, key to normalisation\n" +
          "- **December 2026:** the 2027 budget" },
        { type: "section", head: "Connections", md:
          "Saudi Arabia's story runs through [[unit:us]] (security and investment), [[unit:ir]] (rival and attacker), [[unit:il]] (normalisation), [[unit:ae]] (Gulf partner and competitor), [[unit:eg]] (a major recipient of Saudi money), [[unit:pk]] (the defence pact), [[unit:ru]] (OPEC+) and [[unit:cn]] (its biggest oil customer)." }
      ],
      takeaways: [
        "Saudi Arabia is under fire from Iran and the Houthis and backs efforts to end the war.",
        "Oil money is tighter than planned, and Vision 2030 has been refocused.",
        "Its ties with Washington are closer than ever, but normalisation with Israel waits on Gaza and Israel's election."
      ],
      check: { q: "Why has Saudi Arabia's East–West pipeline become so important in 2026?",
        choices: ["It carries water to Riyadh", "It lets oil reach the Red Sea while the Strait of Hormuz is disrupted", "It supplies gas to Israel"], answer: 1,
        explain: "The pipeline carries crude from the eastern oil fields to Red Sea ports, bypassing Hormuz." },
      sources: [
        { title: "2026 East–West Crude Oil Pipeline attack", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_East%E2%80%93West_Crude_Oil_Pipeline_attack", date: "2026" },
        { title: "The Gulf that emerges from the Iran war will be very different", publisher: "Atlantic Council", url: "https://www.atlanticcouncil.org/dispatches/the-gulf-that-emerges-from-the-iran-war-will-be-very-different/", date: "2026" },
        { title: "Saudi 2026 Budget analysis", publisher: "Vision2030.ai", url: "https://vision2030.ai/analysis/2026-budget-abandoned/", date: "2026" }
      ]
    }
  ]
});
