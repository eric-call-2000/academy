/* ============================================================
   Unit 40 — Bangladesh 🇧🇩
   Research note and sources: tools/research/bd.md
   Current as of 22 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("bd", {
  id: "bd",
  asOf: "2026-10-22",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "bd-1", kind: "snapshot", asOf: "2026-10-22",
      title: "Bangladesh in brief",
      dek: "One of the world's most crowded countries, a garment-making giant, and a democracy rebuilding itself after a student uprising toppled Sheikh Hasina.",
      blocks: [
        { type: "map", src: "maps/bd.svg",
          alt: "Locator map of South Asia with Bangladesh highlighted, a low-lying delta country almost surrounded by India, with a short border with Myanmar in the south-east and a coast on the Bay of Bengal, and a small globe showing its place in the world.",
          caption: "Bangladesh is almost surrounded by India; its south is the vast delta of the Ganges, Brahmaputra and Meghna rivers.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Dhaka"],
          ["People", "About 175 million"],
          ["System", "Parliamentary republic"],
          ["Prime minister", "Tarique Rahman (BNP), since 17 February 2026"],
          ["Parliament", "350 seats; BNP and allies hold about 212 of the 300 elected seats"],
          ["Economy", "World's second-largest garment exporter"],
          ["Refugees", "More than a million Rohingya from Myanmar"]
        ] },
        { type: "section", head: "Why it's here", md:
          "Bangladesh has more people than [[unit:ru|Russia]] in an area smaller than Greece, and its factories make clothes for much of the world. Its economy grew faster than [[unit:in|India]]'s for years. In 2024 a student-led uprising forced out Sheikh Hasina, who had ruled for 15 years, in one of the most dramatic political upheavals of the decade, and in February 2026 Bangladeshis voted in their first competitive election in almost twenty years." },
        { type: "section", head: "Who holds power", md:
          "The prime minister, chosen by the majority in parliament, holds most power; the president is largely ceremonial. In the February 2026 election, the Bangladesh Nationalist Party (BNP) won a landslide, and its leader Tarique Rahman, son of two former leaders, became prime minister. An alliance led by the Islamist party Jamaat-e-Islami, with the student-founded National Citizen Party, became the opposition. Hasina's Awami League was banned from taking part." },
        { type: "section", head: "The mood in 2026", md:
          "Relief at a peaceful election has given way to hardship. The Middle East war cut off liquefied natural gas from [[unit:qa|Qatar]], which powers much of Bangladesh's electricity and industry; power cuts have lasted up to five hours a day and garment buyers have cancelled orders. Bangladesh is due to leave the UN's list of least developed countries on 24 November 2026 and has asked for a delay. Hasina, sentenced to death in absentia, lives in India." },
        { type: "section", head: "A crowded delta", md:
          "Most of Bangladesh is a low, fertile delta crossed by hundreds of rivers. It feeds a huge population with rice and fish but is exposed to floods, cyclones and rising seas; much of the coast is less than a few metres above sea level. Nearly 90% of Bangladeshis are Muslim, with a Hindu minority of about 8%. The country is young, and millions of its people work abroad, especially in the Gulf and Malaysia." },
        { type: "section", head: "From basket case to garment hub", md:
          "At independence in 1971, after a devastating war, a US official is said to have called Bangladesh an 'international basket case'. Since then it has cut poverty sharply, raised life expectancy above India's and built a garment industry that employs about 4 million people, most of them women, and earns about 80% of exports. Microcredit, pioneered by Muhammad Yunus's Grameen Bank, and a strong network of charities helped." },
        { type: "callout", tone: "why", md:
          "Bangladesh shows how a young population can overthrow an entrenched leader, and how hard it is to rebuild institutions, and an economy, after the fall." },
        { type: "section", head: "Neighbours", md:
          "Bangladesh shares a 4,000 km border with [[unit:in|India]] on three sides and a short one with Myanmar, from which more than a million Rohingya refugees have fled ([[lesson:bd-12]]). Its rivers flow in from India, so water sharing is a constant issue." }
      ],
      takeaways: [
        "Bangladesh is a crowded delta nation of about 175 million and the world's second-largest garment exporter.",
        "A 2024 student uprising toppled Sheikh Hasina; the BNP's Tarique Rahman won the February 2026 election.",
        "In 2026 a gas shortage caused by the Middle East war hit power and factories."
      ],
      check: { q: "Which party won Bangladesh's February 2026 election?",
        choices: ["The Awami League", "The Bangladesh Nationalist Party (BNP)", "Jamaat-e-Islami"], answer: 1,
        explain: "The BNP won a landslide; a Jamaat-led alliance came second, and the Awami League was banned from running." },
      sources: [
        { title: "Bangladesh election results 2026: who won, who lost, what's next?", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/2/13/bangladesh-election-results-2026-who-won-who-lost-whats-next", date: "2026-02-13" },
        { title: "Energy disruption hits Bangladesh and Pakistan as Gulf crisis worsens", publisher: "The Star / Reuters", url: "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/09/17/energy-disruption-hits-bangladesh-and-pakistan-as-gulf-crisis-worsens", date: "2026-09-17" },
        { title: "Bangladesh", publisher: "Britannica", url: "https://www.britannica.com/place/Bangladesh", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "bd-2", kind: "power", asOf: "2026-10-22",
      title: "A parliament remaking the constitution",
      dek: "Bangladesh is a parliamentary republic in which a prime minister with a majority holds great power, and the new parliament is rewriting the rules.",
      blocks: [
        { type: "diagram", src: "img/bd/bd-2-power.svg",
          alt: "Diagram of power in Bangladesh. Voters elect 300 members of parliament by first past the post; 50 more seats are reserved for women and shared out among parties. The majority chooses the prime minister, Tarique Rahman of the BNP. Parliament elects the president, Mohammed Shahabuddin, a largely ceremonial head of state. The opposition is led by Jamaat-e-Islami. After the July Charter referendum, parliament is acting as a constituent assembly; an upper house of 100 members is planned.",
          caption: "The prime minister leads parliament's majority; after the 2026 referendum, parliament is also rewriting the constitution.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The constitution", md:
          "Bangladesh's 1972 constitution set out four principles: nationalism, socialism, democracy and secularism. It has been amended many times, by military rulers who added Islam as the state religion and by elected governments. In 2011 Hasina's government abolished the system under which a neutral caretaker government ran elections, a change opponents said let her rig the votes of 2014, 2018 and 2024, all boycotted or heavily disputed." },
        { type: "section", head: "Parliament", md:
          "The Jatiya Sangsad, the national parliament, has 350 seats. Three hundred are elected in single-member constituencies by [[first-past-the-post]]; 50 are reserved for women and allocated to parties in proportion to their seats. A party that wins a majority forms the government, and a rule against 'floor-crossing' stops MPs voting against their own party, which makes the prime minister very powerful. In February 2026 the BNP alone won 209 of the 300 elected seats." },
        { type: "section", head: "Prime minister and president", md:
          "The prime minister, the leader of the majority, appoints the cabinet and controls the state. The president, elected by parliament, is head of state with mostly ceremonial powers: appointing the prime minister and the chief justice. Mohammed Shahabuddin, elected in 2023 as Hasina's choice, stayed on through the interim period and swore in Tarique Rahman on 17 February 2026." },
        { type: "section", head: "The interim government", md:
          "Between August 2024 and February 2026, Bangladesh was run by an unelected interim government led by the Nobel laureate Muhammad Yunus as 'chief adviser', with the backing of the army and the student movement. It set up commissions to reform the constitution, the courts, the police and elections, and gathered their ideas into a 'July Charter', named after the uprising. Parties signed it in October 2025, with disputes over several points." },
        { type: "section", head: "The July Charter", md:
          "On election day, 12 February 2026, voters also approved the charter in a referendum, with about 68% voting yes. The new parliament is now meant to act as a constituent assembly to write its reforms into the constitution: term limits for the prime minister, an independent electoral system, a stronger judiciary and a 100-member upper house. The BNP, with its large majority, has promised to implement the charter but disagrees with Jamaat and the students on how the upper house should be chosen ([[lesson:bd-7]])." },
        { type: "section", head: "Courts and the army", md:
          "The Supreme Court has two divisions, the High Court and the Appellate Division, and has often been drawn into politics; in 2024 its ruling on job quotas helped spark the uprising. The army has seized power twice and backed a caretaker government in 2007–2008. It stays out of day-to-day politics but remains a powerful arbiter, as it showed in August 2024 when it refused to fire on protesters." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Optimists", md:
            "A free election and a mandate for reform give Bangladesh its best chance in decades to build lasting checks on power." },
          right: { head: "Sceptics", md:
            "A huge majority and a weak opposition could let the BNP repeat the Awami League's winner-takes-all politics." } }
      ],
      takeaways: [
        "Bangladesh's 350-seat parliament chooses the prime minister; the president is largely ceremonial.",
        "Muhammad Yunus led an interim government from August 2024 to February 2026.",
        "Voters approved the reform 'July Charter' in a referendum on 12 February 2026."
      ],
      check: { q: "What role is the parliament elected in 2026 meant to play besides making laws?",
        choices: ["Electing the army chief", "Acting as a constituent assembly to amend the constitution", "Choosing judges by vote"], answer: 1,
        explain: "After the July Charter referendum, parliament is to write the charter's reforms into the constitution." },
      sources: [
        { title: "2026 Bangladeshi constitutional referendum", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_Bangladeshi_constitutional_referendum", date: "2026" },
        { title: "Bangladesh's 2026 national election and referendum: what comes next?", publisher: "Blavatnik School of Government, Oxford", url: "https://www.bsg.ox.ac.uk/blog/bangladeshs-2026-national-election-and-referendum-what-comes-next", date: "2026" },
        { title: "Bangladesh", publisher: "Britannica", url: "https://www.britannica.com/place/Bangladesh", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "bd-9", kind: "founding", asOf: "2026-10-22",
      title: "Bengal, partition and East Pakistan",
      dek: "Bengal was divided twice, in 1905 and 1947; its eastern half became part of Pakistan, then fought for its language and its freedom.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/bd/bd-9-hero.webp",
          alt: "Illustration of a wide river delta at dawn with wooden boats under patched sails, green rice fields and palms on the low banks.",
          caption: "The delta of the Ganges and Brahmaputra has been one of the most densely farmed places on earth for centuries.",
          credit: "Illustration — not a photograph",
          prompt: "A wide calm river in a flat green delta at dawn, several wooden country boats with tall patched square sails, low banks with bright green rice fields, palm trees and thatched village huts, pink and gold mist, timeless and peaceful, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Before Bangladesh", items: [
          ["1204", "Muslim rule begins in Bengal"],
          ["1757", "The British East India Company wins at Plassey"],
          ["1905", "Britain partitions Bengal; reversed in 1911"],
          ["1947", "Partition: East Bengal becomes East Pakistan"],
          ["21 Feb 1952", "Police kill students in the Language Movement"],
          ["1966", "Sheikh Mujibur Rahman's six-point autonomy plan"],
          ["1970", "Awami League wins Pakistan's election"]
        ] },
        { type: "section", head: "Golden Bengal", md:
          "Bengal, with its rich delta farmland, was one of the wealthiest regions of the Mughal empire, famous for fine muslin cloth. Islam spread widely in the eastern countryside, while the west remained mostly Hindu. In 1757 the British East India Company defeated the Nawab of Bengal at Plassey, the start of British rule in India. The famine of 1770, and another in 1943, killed millions." },
        { type: "section", head: "Two partitions", md:
          "In 1905 Britain split Bengal into a Muslim-majority east and a Hindu-majority west, saying it was too big to govern; Bengali Hindus protested so fiercely that it was reversed in 1911. The divide returned in 1947. When British India was partitioned, Muslim-majority East Bengal joined [[unit:pk|Pakistan]], though it was separated from the rest of the country by 1,600 km of Indian territory. Millions of Hindus and Muslims fled across the new border." },
        { type: "section", head: "The language movement", md:
          "Pakistan's leaders declared that Urdu alone would be the national language, although most Pakistanis, in the east, spoke Bengali. Students in Dhaka protested, and on 21 February 1952 police fired on them, killing several. The date is now International Mother Language Day, declared by UNESCO. The language movement became the seed of Bengali nationalism." },
        { type: "section", head: "East against West", md:
          "East Pakistan had more people than the west but less money, fewer army officers and little say in government. Its jute exports earned much of Pakistan's foreign currency, which was spent largely in the west. Sheikh Mujibur Rahman of the Awami League demanded autonomy in a six-point plan in 1966. In the 1970 election, after a cyclone killed hundreds of thousands in the east while the government's response was slow, his party won almost every eastern seat and a majority in Pakistan's parliament." },
        { type: "section", head: "Calcutta and the east", md:
          "Under British rule, Calcutta, now Kolkata in India, was the capital of British India until 1911 and the centre of Bengali culture, business and education. The eastern districts, around Dhaka, were mostly rural, with Muslim peasants working land owned by Hindu landlords. That economic divide, as much as religion, shaped the politics of the 1940s and fed support for a separate Muslim state." },
        { type: "section", head: "Tagore and Bengali", md:
          "Bengali is one of the world's most widely spoken languages, with a rich literature. Rabindranath Tagore, the Bengali poet who won the Nobel prize for literature in 1913, wrote the national anthems of both Bangladesh and India. Pride in the language and its culture, shared by Muslims and Hindus, is why Pakistan's attempt to impose Urdu caused such anger." },
        { type: "compare", head: "Two views of 1947",
          left: { head: "A Muslim homeland", md:
            "Joining Pakistan protected Bengali Muslims from domination by Hindu landlords and Calcutta's elite." },
          right: { head: "A mistake", md:
            "Religion alone could not hold together two wings divided by language, culture and 1,600 km of India." } },
        { type: "section", head: "Why it matters", md:
          "Bangladesh's identity was built on its language and its break from Pakistan, two themes that still divide its parties." }
      ],
      takeaways: [
        "Bengal was partitioned in 1947, and its Muslim-majority east became East Pakistan.",
        "The 1952 language movement for Bengali is remembered every 21 February.",
        "East Pakistan's grievances led to the Awami League's 1970 election victory."
      ],
      check: { q: "What is commemorated on 21 February?",
        choices: ["Independence day", "The 1952 killings of students in the language movement", "Victory over Pakistan"], answer: 1,
        explain: "Police killed students protesting for Bengali as a national language; UNESCO made it International Mother Language Day." },
      sources: [
        { title: "History of Bangladesh", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Bangladesh", date: "n.d." },
        { title: "Bengali Language Movement", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bengali_language_movement", date: "n.d." },
        { title: "Bangladesh", publisher: "Britannica", url: "https://www.britannica.com/place/Bangladesh", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "bd-3", kind: "history", asOf: "2026-10-22",
      title: "Coups, two begums and an uprising",
      dek: "Independence in blood, assassinations and army rule, then three decades of rivalry between two women, ended by the students of 2024.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/bd/bd-3-hero.webp",
          alt: "Illustration of a tall abstract monument of stacked triangular concrete spires rising from a green lawn and lake at dusk.",
          caption: "The National Martyrs' Memorial at Savar, near Dhaka, honours those killed in the 1971 war.",
          credit: "Illustration — not a photograph",
          prompt: "A tall modern monument of seven stacked triangular concrete spires rising from a wide green lawn reflected in a long rectangular pool at dusk, rows of small trees, soft purple and orange sky, solemn and grand, no people close up, no flags, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1971", "War of independence ([[lesson:bd-10]])"],
          ["15 Aug 1975", "Sheikh Mujib and most of his family killed"],
          ["1977–1981", "Ziaur Rahman rules; founds the BNP; assassinated"],
          ["1982–1990", "General Ershad's military rule"],
          ["1991", "Democracy restored; Khaleda Zia prime minister"],
          ["2009–2024", "Sheikh Hasina's long rule"],
          ["5 Aug 2024", "Hasina flees to India ([[lesson:bd-11]])"],
          ["Feb 2026", "BNP wins the election"]
        ] },
        { type: "section", head: "1. Mujib and the coups", md:
          "Sheikh Mujibur Rahman, 'Bangabandhu' (friend of Bengal), led the new country from 1972. Famine in 1974, corruption and his move to one-party rule in early 1975 eroded his support. On 15 August 1975 army officers killed him and most of his family; only two daughters, Sheikh Hasina and Sheikh Rehana, abroad at the time, survived. Coups and counter-coups followed." },
        { type: "section", head: "2. Zia and Ershad", md:
          "General Ziaur Rahman took power in 1977, restored multiparty politics, added Islam to the constitution and founded the BNP. He was assassinated in a failed coup in 1981. General Hussain Muhammad Ershad seized power in 1982 and ruled until a mass movement, joined by both the Awami League and the BNP, forced him out in 1990." },
        { type: "section", head: "3. The battling begums", md:
          "From 1991 two women alternated in power: Khaleda Zia, Ziaur Rahman's widow, who led the BNP, and Sheikh Hasina, Mujib's daughter, who led the Awami League. Their bitter rivalry, nicknamed the 'battle of the begums', brought strikes, street violence and boycotts. In 2007, amid chaos, the army backed a caretaker government that ruled for two years and tried to sideline both women. Khaleda Zia died on 30 December 2025, aged 80." },
        { type: "section", head: "4. Hasina's long rule", md:
          "Hasina won a landslide in 2008 and stayed in power for 15 years. The economy grew fast, and she built bridges, power plants and a metro. She also put on trial and executed leaders of Jamaat-e-Islami for war crimes committed in 1971, jailed Khaleda Zia for corruption and won three elections in 2014, 2018 and 2024 that were boycotted or widely seen as rigged. Security forces were accused of hundreds of enforced disappearances." },
        { type: "section", head: "5. The uprising and after", md:
          "In July 2024 student protests against job quotas grew into a nationwide revolt after police opened fire. On 5 August Hasina fled to [[unit:in|India]], and Muhammad Yunus took charge of an interim government. In May 2025 it banned the Awami League's activities. Tarique Rahman, Khaleda's son, returned from 17 years in London in December 2025 and led the BNP to victory in February 2026." },
        { type: "section", head: "Bangladesh's growth story", md:
          "Through all the turmoil, the economy grew steadily, at about 6% a year for two decades. Garment factories, remittances and microcredit transformed rural lives, and women's literacy and employment rose. The 2013 collapse of the Rana Plaza factory building, which killed more than 1,100 workers, led to new safety rules." },
        { type: "compare", head: "Two views of Hasina's era",
          left: { head: "Supporters", md:
            "Hasina delivered growth, infrastructure, women's progress and stability, and punished 1971 war criminals." },
          right: { head: "Critics", md:
            "She hollowed out democracy, persecuted opponents and ended her rule by shooting hundreds of protesters." } }
      ],
      takeaways: [
        "Sheikh Mujibur Rahman was killed in a 1975 coup; military rulers governed until 1990.",
        "Khaleda Zia and Sheikh Hasina alternated in power and dominated politics for three decades.",
        "Hasina's 15-year rule ended when she fled to India during the 2024 uprising."
      ],
      check: { q: "Which party did Ziaur Rahman found?",
        choices: ["The Awami League", "The Bangladesh Nationalist Party", "Jamaat-e-Islami"], answer: 1,
        explain: "Ziaur Rahman founded the BNP, later led by his widow Khaleda Zia and now their son Tarique Rahman." },
      sources: [
        { title: "History of Bangladesh", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Bangladesh", date: "n.d." },
        { title: "Khaleda Zia, former Bangladeshi prime minister and archrival of Hasina, dies at 80", publisher: "OPB / AP", url: "https://www.opb.org/article/2025/12/29/khaleda-zia-former-bangladeshi-prime-minister-and-archrival-of-hasina-dies-at-80", date: "2025-12-30" },
        { title: "Sheikh Mujibur Rahman", publisher: "Britannica", url: "https://www.britannica.com/biography/Sheikh-Mujibur-Rahman", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "bd-10", kind: "past", asOf: "2026-10-22",
      title: "The Liberation War, 1971",
      dek: "Pakistan's army launched a crackdown that killed hundreds of thousands and drove 10 million refugees into India, which then went to war.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/bd/bd-10-hero.webp",
          alt: "Illustration of a vast refugee camp of tents and shelters under monsoon clouds on a flat plain, with a muddy road and smoke from cooking fires.",
          caption: "About 10 million people fled to camps in India in 1971.",
          credit: "Illustration — not a photograph",
          prompt: "A vast refugee camp of tents and makeshift shelters stretching across a flat muddy plain under heavy monsoon clouds, a waterlogged road running through it, thin smoke from cooking fires, small distant figures, sombre and overwhelming, no faces, no flags, no legible text." },
        { type: "facts", head: "The war", rows: [
          ["Crackdown", "Operation Searchlight, 25 March 1971"],
          ["Declaration", "Independence declared 26 March 1971"],
          ["Refugees", "About 10 million fled to India"],
          ["Dead", "Estimates from 300,000 to 3 million"],
          ["India enters", "3 December 1971"],
          ["Surrender", "16 December 1971 in Dhaka; about 93,000 Pakistani troops taken prisoner"]
        ] },
        { type: "section", head: "Operation Searchlight", md:
          "Pakistan's military ruler, General Yahya Khan, refused to let Mujib's Awami League form a government after its 1970 election victory. On the night of 25 March 1971 the army struck in Dhaka: troops attacked Dhaka University, police barracks and Hindu neighbourhoods and arrested Mujib, who was flown to West Pakistan. Independence was declared on 26 March, now Bangladesh's national day, and a government in exile formed in India." },
        { type: "section", head: "Mass killing", md:
          "Over nine months, the army and allied militias, some recruited from Jamaat-e-Islami's student wing, killed civilians across the country, especially Hindus, students and intellectuals; tens of thousands of women were raped. Estimates of the dead range from about 300,000 to the official Bangladeshi figure of 3 million. Many historians and governments call it a genocide. On 14 December, days before the surrender, militias abducted and murdered leading intellectuals in Dhaka." },
        { type: "section", head: "Refugees and India", md:
          "About 10 million people, mostly Hindus, fled to India, which armed and trained Bengali guerrillas, the Mukti Bahini. Prime Minister Indira Gandhi sought world support and signed a friendship treaty with the Soviet Union. After Pakistan launched air strikes on India on 3 December, India invaded East Pakistan. On 16 December 1971 Pakistan's commander in the east surrendered in Dhaka with about 93,000 troops, the largest surrender since the Second World War." },
        { type: "section", head: "The Cold War angle", md:
          "The United States under President Nixon and Henry Kissinger backed Pakistan, which was helping them open relations with [[unit:cn|China]], despite cables from US diplomats in Dhaka warning of genocide. Washington sent an aircraft carrier group into the Bay of Bengal in December. The Soviet Union backed India. The war shaped India's suspicion of US policy in South Asia for decades." },
        { type: "section", head: "Mujib's return", md:
          "Mujib, held in a prison in West Pakistan throughout the war, was released and returned to a hero's welcome in Dhaka on 10 January 1972. He became prime minister and set about rebuilding a shattered country. Pakistan recognised Bangladesh in 1974. Bangladesh's tribunals tried and executed several Jamaat leaders for war crimes in the 2010s; critics questioned the fairness of the trials." },
        { type: "compare", head: "Two lessons drawn",
          left: { head: "For Bangladesh", md:
            "Independence was won at enormous cost; the memory of 1971 is sacred and its perpetrators must be judged." },
          right: { head: "For Pakistan", md:
            "Losing half the country to an Indian-backed war remains a national trauma, rarely discussed openly." } },
        { type: "section", head: "Why it matters", md:
          "Who fought on which side in 1971 still defines politics: the Awami League claims the war's legacy, and Jamaat's role in it haunts the party today." }
      ],
      takeaways: [
        "Pakistan's army began a crackdown in East Pakistan on 25 March 1971; independence was declared the next day.",
        "Hundreds of thousands, by some estimates millions, were killed, and 10 million fled to India.",
        "India intervened in December, and Pakistan's forces surrendered in Dhaka on 16 December 1971."
      ],
      check: { q: "Which country intervened militarily on Bangladesh's side in December 1971?",
        choices: ["China", "India", "The United States"], answer: 1,
        explain: "India entered the war on 3 December after Pakistani air strikes; Pakistan surrendered on 16 December." },
      sources: [
        { title: "Bangladesh Liberation War", publisher: "Britannica", url: "https://www.britannica.com/event/Bangladesh-Liberation-War", date: "n.d." },
        { title: "1971 Bangladesh genocide", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/1971_Bangladesh_genocide", date: "n.d." },
        { title: "History of Bangladesh", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Bangladesh", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "bd-11", kind: "past", asOf: "2026-10-22",
      title: "The July uprising, 2024",
      dek: "Protests over government job quotas became a revolution in five weeks; about 1,400 people were killed before Sheikh Hasina fled by helicopter.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/bd/bd-11-hero.webp",
          alt: "Illustration of a huge crowd of young people filling a wide Dhaka avenue lined with concrete buildings and billboards, under a hot hazy sky.",
          caption: "On 5 August 2024 crowds marched on Dhaka and Hasina fled to India.",
          credit: "Illustration — not a photograph",
          prompt: "A huge crowd of young people seen from behind filling a wide city avenue lined with tall concrete buildings, blank billboards and tangled power lines, many raised arms and blank banners, a hot hazy white sky, triumphant and tense, no faces, no flags, no legible text." },
        { type: "facts", head: "The uprising", rows: [
          ["1 July 2024", "Students protest against a court ruling restoring job quotas"],
          ["16 July", "Student Abu Sayed shot dead by police in Rangpur"],
          ["18 July onwards", "Internet shutdown; curfew; hundreds killed"],
          ["5 August", "Army refuses to fire; Hasina flees to India"],
          ["8 August", "Muhammad Yunus sworn in as chief adviser"],
          ["Killed", "Up to about 1,400, according to the UN"]
        ] },
        { type: "section", head: "The spark", md:
          "In June 2024 the High Court restored a system reserving 30% of government jobs for descendants of 1971 freedom fighters, which students saw as a way of rewarding Awami League loyalists in a country where well-paid jobs are scarce. Protests spread across universities. When Hasina compared the protesters to 'razakars', collaborators with Pakistan in 1971, students turned the insult into a slogan." },
        { type: "section", head: "The crackdown", md:
          "On 16 July police in Rangpur shot Abu Sayed, a student who stood alone with arms outstretched; the video spread nationwide. The government cut the internet, imposed a curfew with shoot-on-sight orders and deployed the army. The Supreme Court cut the quotas, but the killings had changed the movement's demand: Hasina must go. A UN human rights investigation later estimated that up to 1,400 people were killed, many by security forces, and found possible crimes against humanity." },
        { type: "section", head: "The fall", md:
          "On 3 August the student coordinators called for Hasina's resignation and a 'long march' to Dhaka. On the morning of 5 August, as huge crowds approached, the army chief, General Waker-uz-Zaman, told her the army would not fire on them. She fled by helicopter to India. Crowds stormed her residence, and statues of her father were pulled down. Attacks on Awami League supporters, police and some Hindu homes followed." },
        { type: "section", head: "Gen Z revolutions", md:
          "The uprising was the first of several led by young people in South Asia and beyond. Similar youth-driven protests toppled the government of Nepal in September 2025 and shook other countries. Like those movements, Bangladesh's used social media to organise, rejected traditional parties and demanded jobs, an end to corruption and accountability for killings." },
        { type: "section", head: "The internet blackout", md:
          "From 18 July the government cut mobile internet and then broadband nationwide for days, one of the most complete shutdowns anywhere. It was meant to stop protesters organising and to hide the scale of the killings, but news and videos still spread through people who crossed borders, satellite links and word of mouth. The blackout also hit banks, exporters and freelancers, turning business owners against the government." },
        { type: "compare", head: "Two views of July",
          left: { head: "A revolution", md:
            "Unarmed students ended a dictatorship and opened the way to a fairer, freer Bangladesh." },
          right: { head: "A takeover", md:
            "Hasina's supporters call it an unconstitutional coup aided by Islamists and foreign powers." } },
        { type: "section", head: "Why it matters", md:
          "The uprising created the July Charter, the student-founded National Citizen Party and the trial that sentenced Hasina to death ([[lesson:bd-5]])." }
      ],
      takeaways: [
        "Protests against government job quotas in July 2024 became a revolt after police killed students.",
        "The UN estimated up to 1,400 people were killed in the crackdown.",
        "Hasina fled to India on 5 August 2024 when the army refused to fire on protesters."
      ],
      check: { q: "What did the army chief tell Hasina on 5 August 2024?",
        choices: ["That the army would protect her", "That the army would not fire on the crowds", "That elections would be held the next day"], answer: 1,
        explain: "General Waker-uz-Zaman refused to use force against protesters, and Hasina fled by helicopter." },
      sources: [
        { title: "July Revolution (Bangladesh)", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/July_Revolution_(Bangladesh)", date: "n.d." },
        { title: "Bangladesh: UN report finds brutal, systematic repression of protests", publisher: "OHCHR", url: "https://www.ohchr.org/en/press-releases/2025/02/bangladesh-un-report-finds-brutal-systematic-repression-protests-calls", date: "2025-02-12" },
        { title: "History of Bangladesh", publisher: "Britannica", url: "https://www.britannica.com/topic/history-of-Bangladesh", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "bd-4", kind: "players", asOf: "2026-10-22",
      title: "Tarique, Hasina, Yunus and the students",
      dek: "A prime minister back from exile, a former leader sentenced to death, the Nobel laureate who held the fort, and the Islamists and students in opposition.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/bd/bd-4-hero.webp",
          alt: "Illustration of a vast modernist parliament building of concrete with huge circular and triangular openings, set in a lake at dusk.",
          caption: "The National Parliament House in Dhaka, designed by the architect Louis Kahn.",
          credit: "Illustration — not a photograph",
          prompt: "A vast modernist concrete parliament building with huge geometric circular and triangular openings cut into its walls, rising from a still lake that reflects it at dusk, brick buildings and green lawns around it, warm low light, monumental and calm, no people close up, no flags, no legible text." },
        { type: "people", head: "Six to know", items: [
          { name: "Tarique Rahman", role: "Prime minister, since February 2026; BNP chairman",
            img: "img/bd/portrait-tarique.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Son of Ziaur Rahman and Khaleda Zia. Lived in London from 2008 after corruption cases he called political; returned in December 2025 and won two seats in his first election." },
          { name: "Sheikh Hasina", role: "Prime minister 1996–2001 and 2009–2024",
            img: "img/bd/portrait-hasina.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Mujib's daughter, in exile in India since August 2024; sentenced to death in absentia for crimes against humanity in November 2025." },
          { name: "Muhammad Yunus", role: "Chief adviser 2024–2026",
            img: "img/bd/portrait-yunus.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Nobel peace laureate and founder of Grameen Bank who led the interim government, oversaw the reform commissions and handed over after the election." },
          { name: "Shafiqur Rahman", role: "Leader (ameer) of Jamaat-e-Islami",
            img: "img/bd/portrait-shafiqur.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Led the Islamist party to its best-ever result in 2026; now heads the opposition alliance in parliament." },
          { name: "Nahid Islam", role: "Convener of the National Citizen Party",
            img: "img/bd/portrait-nahid.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A leader of the 2024 student uprising who briefly served in Yunus's cabinet, then founded a party of the July generation." },
          { name: "Waker-uz-Zaman", role: "Army chief, since June 2024",
            img: "img/bd/portrait-waker.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Refused to order troops to fire on protesters in August 2024, sealing Hasina's fall; the army remains a powerful arbiter." }
        ] },
        { type: "section", head: "The BNP returns", md:
          "The BNP spent 17 years out of power, with thousands of its activists jailed and Khaleda Zia imprisoned or under house arrest for much of that time. Tarique Rahman ran the party from London over video calls. Khaleda's death on 30 December 2025, weeks before the election, brought an outpouring of sympathy. On 12 February the BNP won 209 of 300 elected seats on its own and about 212 with allies, a two-thirds majority." },
        { type: "section", head: "Jamaat's rise", md:
          "Jamaat-e-Islami, which opposed independence in 1971 and was barred from elections under Hasina, won 68 seats, its highest ever, and its alliance about 77. The party has campaigned on clean government and welfare as well as religion and has tried to soften its image, but its role in 1971 and its aim of an Islamic state worry secular Bangladeshis and religious minorities." },
        { type: "section", head: "The students' party", md:
          "The National Citizen Party, formed in February 2025 by leaders of the uprising, joined Jamaat's alliance and won only a handful of seats. Its weakness showed how hard it is for a street movement to beat established parties at the ballot box. It still has influence on reform debates and a large following among young urban voters." },
        { type: "section", head: "The army and Hasina's party", md:
          "General Waker-uz-Zaman, appointed army chief by Hasina weeks before her fall and related to her by marriage, has publicly called for elections and stability rather than reform under unelected rulers. Many Awami League leaders were arrested or fled abroad after August 2024. The party, banned from politics, still has millions of supporters and campaigns from exile through social media." },
        { type: "compare", head: "Two views of Tarique Rahman",
          left: { head: "Supporters", md:
            "A leader tested by exile, with a clear mandate, promising stability, growth and reform." },
          right: { head: "Critics", md:
            "An heir to a dynasty with a record of corruption allegations, now with a majority big enough to rule unchecked." } }
      ],
      takeaways: [
        "Tarique Rahman, son of two former leaders, became prime minister after 17 years in exile.",
        "Jamaat-e-Islami had its best-ever result and leads the opposition.",
        "The student-founded National Citizen Party won only a few seats."
      ],
      check: { q: "Who led Bangladesh's interim government from 2024 to 2026?",
        choices: ["Khaleda Zia", "Muhammad Yunus", "Waker-uz-Zaman"], answer: 1,
        explain: "Nobel laureate Muhammad Yunus served as chief adviser of the interim government until the February 2026 election." },
      sources: [
        { title: "Bangladesh's BNP claims landslide win in first election since 2024 uprising", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/2/13/bangladeshs-bnp-claims-landslide-win-in-first-election-since-2024-uprising", date: "2026-02-13" },
        { title: "Son of former PM Tarique Rahman sworn in as new leader after landslide election victory", publisher: "Malay Mail", url: "https://www.malaymail.com/news/world/2026/02/17/son-of-former-pm-tarique-rahman-sworn-in-as-new-leader-after-landslide-election-victory/209514", date: "2026-02-17" },
        { title: "Bangladesh's Tarique Rahman poised to be PM as Jamaat-e-Islami concedes election", publisher: "Arab News", url: "https://www.arabnews.com/node/2632990", date: "2026-02-14" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "bd-5", kind: "story", asOf: "2026-10-22",
      title: "Hasina on death row in Delhi",
      dek: "A Dhaka tribunal sentenced the former prime minister to death in absentia, and India, her protector, has shown no sign of sending her back.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/bd/bd-5-hero.webp",
          alt: "Illustration of an old red-brick colonial court building with arched verandas and a clock tower, with police barricades in front on a hazy morning.",
          caption: "The International Crimes Tribunal sits in Dhaka's Old High Court building.",
          credit: "Illustration — not a photograph",
          prompt: "An old red-brick colonial court building with white arched verandas and a small clock tower on a hazy morning, metal police barricades and a few parked vans in front, tall trees, a tense quiet street, no people close up, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "On 17 November 2025 Bangladesh's International Crimes Tribunal, a court set up by Hasina herself to try 1971 war criminals, convicted her in absentia of crimes against humanity over the killing of protesters in 2024 and sentenced her to death. Her former home minister, Asaduzzaman Khan Kamal, also received a death sentence. Hasina, who has lived in [[unit:in|India]] since fleeing, called the trial a political vendetta. Bangladesh formally asked India to extradite her." },
        { type: "facts", head: "The case", rows: [
          ["17 November 2025", "Hasina sentenced to death in absentia"],
          ["Charges", "Crimes against humanity over the 2024 crackdown"],
          ["Extradition", "Requested under a 2013 treaty; India says it is 'examining' it"],
          ["July 2026", "Hasina says she will return in December and surrender to a court"],
          ["December 2026", "The 1996 Ganges water treaty with India expires"]
        ] },
        { type: "section", head: "India's dilemma", md:
          "India was Hasina's closest partner: she cracked down on militants who attacked India, opened transit routes and kept Islamists out of power. New Delhi has said only that the request is being examined. The 2013 extradition treaty allows refusal for offences 'of a political character', and the death sentence gives India further grounds to stall. In April 2026 India said it wanted to 'engage constructively' with the new government." },
        { type: "section", head: "Hasina's next move", md:
          "In July 2026 Hasina told Reuters she planned to return to Bangladesh in December and surrender to a court, presenting herself as willing to face justice. The government replied that she would be jailed on arrival; the chief prosecutor said a person sent back under the extradition treaty would not have the chance to 'surrender'. Whether she will actually return is doubtful, but the announcement keeps her supporters mobilised." },
        { type: "section", head: "Water and borders", md:
          "Other disputes complicate ties with India. The 30-year Ganges water-sharing treaty signed in December 1996 expires in December 2026, and Dhaka wants a new deal with a guaranteed dry-season flow. Indian border guards' killings of Bangladeshis crossing the frontier, India's deportations of people it calls illegal migrants, and anger in Bangladesh at India's backing for Hasina all feed nationalist politics on both sides." },
        { type: "section", head: "The tribunal", md:
          "The International Crimes Tribunal was set up in 2010 by Hasina's government to try people accused of atrocities in 1971; it convicted and sent several Jamaat and BNP leaders to the gallows, in trials rights groups criticised as unfair. After 2024 the interim government amended its law to cover crimes in 2024. Supporters of the verdict note the irony; critics say the same flaws have been repeated." },
        { type: "compare", head: "Two views of the verdict",
          left: { head: "Justice", md:
            "Hasina ordered lethal force against her own people; a court has held her to account, and India should send her back." },
          right: { head: "Victor's justice", md:
            "A trial in absentia, under a post-revolution government, ending in a death sentence, was not fair; India is right not to extradite." } },
        { type: "section", head: "What's next", md:
          "Watch December: Hasina's promised return, the Ganges treaty deadline, and whether India and Bangladesh's new government can reset relations." }
      ],
      takeaways: [
        "Sheikh Hasina was sentenced to death in absentia in November 2025 for the 2024 crackdown.",
        "India, where she lives, has not acted on Bangladesh's extradition request.",
        "The Ganges water treaty with India expires in December 2026."
      ],
      check: { q: "Why might India decline to extradite Hasina?",
        choices: ["She is an Indian citizen", "The treaty allows refusal for political offences, and she faces a death sentence", "Bangladesh has not asked"], answer: 1,
        explain: "The 2013 treaty has a political-offence exception, and the death penalty raises further objections." },
      sources: [
        { title: "Ousted PM Hasina faces prison on return to Bangladesh, minister says", publisher: "The Express Tribune / Reuters", url: "https://tribune.com.pk/story/2618001/ousted-pm-hasina-faces-prison-on-return-to-bangladesh-minister-says", date: "2026-08-04" },
        { title: "'Request is being examined': India on Bangladesh's request for Sheikh Hasina's extradition", publisher: "WION", url: "https://www.wionews.com/world/-request-is-being-examined-india-on-bangladesh-s-request-for-ousted-pm-sheikh-hasina-s-extradition-1764193341034/amp", date: "2025-11-26" },
        { title: "Bangladesh seeks new Ganges water-sharing treaty with guarantee clause", publisher: "The Business Standard", url: "https://www.tbsnews.net/node/1553021", date: "2026-09" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "bd-6", kind: "story", asOf: "2026-10-22",
      title: "When the gas ran out",
      dek: "The war in the Gulf cut Bangladesh's supply of liquefied natural gas, plunging factories into darkness just as the country prepares to lose its trade privileges.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/bd/bd-6-hero.webp",
          alt: "Illustration of a large garment factory floor in dim light with long rows of idle sewing machines under switched-off lamps and piles of fabric.",
          caption: "Garment factories, which earn about 80% of Bangladesh's exports, faced power cuts of up to five hours a day.",
          credit: "Illustration — not a photograph",
          prompt: "A large garment factory floor in dim grey light, long rows of idle sewing machines at empty tables beneath switched-off hanging lamps, piles of colourful folded fabric, tall windows letting in weak daylight, still and worrying, no people, no logos, no legible text." },
        { type: "section", head: "What happened", md:
          "Bangladesh imports most of its fuel and draws more than 40% of its electricity from imported liquefied natural gas. When the [[strait-of-hormuz|Strait of Hormuz]] closed and Iranian strikes hit [[unit:qa|Qatar]]'s Ras Laffan complex, QatarEnergy, one of its three long-term suppliers, suspended deliveries, and the other two soon followed. Spot prices nearly tripled. The government rationed fuel and gas, shut most fertiliser plants, and in July a fire at one of two import terminals cut supply further." },
        { type: "facts", head: "The energy crunch", rows: [
          ["Electricity", "More than 40% from imported LNG"],
          ["Fuel oil", "About 90% imported"],
          ["Spot LNG", "About $10 in January to over $28 per unit by mid-March"],
          ["Power cuts", "Up to five hours a day"],
          ["Garment makers", "55% reported cancelled or reduced orders (BKMEA survey)"]
        ] },
        { type: "section", head: "Factories in the dark", md:
          "Garments earn about 80% of Bangladesh's export income and employ about 4 million people. With power cuts of up to five hours a day, many factories ran at 40–50% of capacity or paid for diesel generators and air freight to meet deadlines. A survey by the knitwear makers' association found that 55% of members had seen buyers cancel or reduce orders since late August, and 78% had partly halted production. Workers lost overtime pay, and some factories closed." },
        { type: "section", head: "Leaving the LDC list", md:
          "Bangladesh is scheduled to graduate from the UN's category of least developed countries on 24 November 2026, a mark of success that will, over time, end some duty-free access to markets such as the European Union. Tarique Rahman wrote to the UN Secretary-General asking for a three-year delay, to 2029, citing the energy shock, weak banks and unfinished reforms. A UN committee passed the request to the General Assembly without a recommendation; a vote is pending." },
        { type: "section", head: "Banks and money", md:
          "The interim government found that billions of dollars had been taken out of Bangladesh's banks under the old regime, much of it by business groups close to the Awami League; several banks were merged or put under central bank control. Inflation stayed high and the taka weakened. The [[imf|IMF]] supports Bangladesh with a loan programme. Money sent home by Bangladeshis working abroad, many in the Gulf, is vital and was hit by the war." },
        { type: "section", head: "Domestic gas", md:
          "Bangladesh has its own gas fields, mostly in the north-east, but production has been falling for years because of too little exploration. Hasina's government relied on imported LNG and on expensive private power plants instead. The interim government cancelled some contracts and began new drilling, and the BNP has promised to explore offshore in the Bay of Bengal, though results will take years." },
        { type: "compare", head: "Two views of the response",
          left: { head: "The government", md:
            "Rationing, new suppliers and a delay to LDC graduation will protect jobs until the Gulf crisis ends." },
          right: { head: "Critics", md:
            "Years of dependence on imported gas, and failure to develop domestic gas and renewables, made the crisis inevitable." } },
        { type: "section", head: "What's next", md:
          "Watch the UN General Assembly's decision on the LDC delay before 24 November, LNG cargo arrivals and the garment order books for the 2027 season." }
      ],
      takeaways: [
        "The Gulf war cut Bangladesh's LNG supply, causing power cuts and factory slowdowns.",
        "Garments, about 80% of exports, lost orders as factories ran below capacity.",
        "Bangladesh asked the UN to delay its graduation from least developed country status, due 24 November 2026."
      ],
      check: { q: "Why did Bangladesh's power cuts worsen in 2026?",
        choices: ["A coal miners' strike", "Gulf LNG supplies were cut by the war and the Hormuz closure", "Floods destroyed power lines"], answer: 1,
        explain: "QatarEnergy and other suppliers suspended LNG deliveries, and Bangladesh relies on imported gas for much of its power." },
      sources: [
        { title: "Energy disruption hits Bangladesh and Pakistan as Gulf crisis worsens", publisher: "The Star / Reuters", url: "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/09/17/energy-disruption-hits-bangladesh-and-pakistan-as-gulf-crisis-worsens", date: "2026-09-17" },
        { title: "Bangladesh's gas crunch cripples industry as factories close and power cuts spread", publisher: "Malay Mail", url: "https://www.malaymail.com/amp/news/world/2026/08/23/bangladeshs-gas-crunch-cripples-industry-as-factories-close-and-power-cuts-spread/232389", date: "2026-08-23" },
        { title: "PM writes to UN Secretary-General for LDC graduation deferral", publisher: "The Financial Express", url: "https://thefinancialexpress.com.bd/economy/bangladesh/pm-writes-to-un-secy-gen-for-ldc-graduation-deferral", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "bd-7", kind: "story", asOf: "2026-10-22",
      title: "Turning the July Charter into law",
      dek: "Voters endorsed a reform charter written after the uprising; now a BNP-dominated parliament must decide how much of it to enact.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/bd/bd-7-hero.webp",
          alt: "Illustration of a polling station in a school courtyard with long queues of voters, ballot boxes on tables and tropical trees.",
          caption: "On 12 February 2026 voters cast two ballots: one for parliament and one on the July Charter.",
          credit: "Illustration — not a photograph",
          prompt: "A polling station in a school courtyard with long orderly queues of voters seen from behind, translucent ballot boxes on wooden tables under a shaded veranda, tropical trees and a pale yellow school building, bright morning, hopeful and orderly, no faces, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "The July Charter, agreed by most parties in October 2025, lists dozens of reforms drawn up by commissions under Yunus. On 12 February 2026, alongside the general election, voters approved it in a referendum: about 68% of valid votes were yes, on a turnout of about 60%. The vote gave a mandate rather than changing the law directly. The new parliament is to act as a constituent assembly and amend the constitution." },
        { type: "facts", head: "The charter", rows: [
          ["Agreed", "October 2025, by most parties"],
          ["Referendum", "12 February 2026; about 68% yes"],
          ["Key ideas", "Term limits for the prime minister, an upper house, independent institutions"],
          ["Upper house", "100 members planned; how to choose them is disputed"],
          ["Awami League", "Activities banned since May 2025; a 2026 bill makes the ban law"]
        ] },
        { type: "section", head: "What's in it", md:
          "The charter's ideas include limiting any prime minister to ten years in office, separating the roles of prime minister and party leader, making the election commission, the anti-corruption commission and the courts more independent, and restoring a neutral caretaker government for elections. It also proposes a 100-member upper house to review laws, so that no single party can change the constitution alone." },
        { type: "section", head: "The upper house fight", md:
          "The biggest quarrel is over how to fill the upper house. The BNP wants seats shared in proportion to each party's seats in the lower house, which would give it a large majority there too. Jamaat and the National Citizen Party want seats shared by each party's national vote share, which would give smaller parties more say. Analysts note that the BNP's manifesto differed from the charter on several points, and the referendum's wording left room for argument." },
        { type: "section", head: "The Awami League question", md:
          "The interim government banned the Awami League's activities in May 2025 under anti-terrorism law, pending trials of its leaders, and the election commission suspended its registration. In April 2026 the BNP-led parliament took up a bill to write that ban into law; the Awami League called it 'fascist'. Supporters of the ban say a party that ordered the shooting of protesters cannot campaign as normal; critics warn that excluding a party that won millions of votes stores up trouble." },
        { type: "section", head: "The caretaker system", md:
          "Bangladesh used a neutral 'caretaker' government to run elections from 1996 to 2008, and those votes were widely seen as fair. Hasina abolished the system in 2011. After 2024 the courts reopened the question, and the charter calls for it to return, so that no ruling party runs its own election." },
        { type: "compare", head: "Two views of the reforms",
          left: { head: "The BNP's view", md:
            "The charter will be implemented by an elected parliament, at a sensible pace and in line with the voters' mandate." },
          right: { head: "Reformers' view", md:
            "Without independent institutions and a genuinely plural upper house, Bangladesh will slide back into one-party dominance." } },
        { type: "section", head: "What's next", md:
          "Watch the constitutional amendment bills, the design of the upper house and whether courts or the Awami League challenge the ban." }
      ],
      takeaways: [
        "Voters approved the July Charter in a referendum on 12 February 2026.",
        "Parliament is to amend the constitution, including term limits and a 100-member upper house.",
        "The BNP and the opposition disagree on how to choose the upper house."
      ],
      check: { q: "What is the main dispute over the planned upper house?",
        choices: ["Whether it should exist at all", "Whether seats follow lower-house seats or national vote share", "Whether it sits in Chittagong"], answer: 1,
        explain: "The BNP wants seats in proportion to lower-house seats; Jamaat and the NCP want them by national vote share." },
      sources: [
        { title: "'Yes' wins in referendum on July Charter", publisher: "Dhaka Tribune", url: "https://www.dhakatribune.com/bangladesh/election/403268/yes-wins-in-referendum-on-july-charter", date: "2026-02-13" },
        { title: "Bangladesh's referendum and reforms: the need to return to a constitutional process", publisher: "ConstitutionNet", url: "https://constitutionnet.org/es/node/20057", date: "2026" },
        { title: "Bangladesh: Awami League raises alarm over govt actions, warns of democratic risks", publisher: "IANS", url: "https://ianslive.in/bangladesh-awami-league-raises-alarm-over-govt-actions-warns-of-democratic-risks--20260410115417", date: "2026-04-10" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "bd-12", kind: "spotlight", asOf: "2026-10-22",
      title: "The Rohingya camps",
      dek: "More than a million Rohingya refugees from Myanmar live in the world's largest refugee settlement, with no way home and shrinking aid.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/bd/bd-12-hero.webp",
          alt: "Illustration of a huge hillside refugee camp of bamboo and tarpaulin shelters packed together on bare red earth, with narrow paths and a few trees.",
          caption: "The camps near Cox's Bazar house more than a million people.",
          credit: "Illustration — not a photograph",
          prompt: "A huge refugee camp of bamboo and tarpaulin shelters packed tightly across rolling bare red-earth hills, narrow dirt paths and stairways between them, a few scattered trees, hazy afternoon light, small distant figures, crowded and fragile, no faces, no flags, no legible text." },
        { type: "facts", head: "The Rohingya in Bangladesh", rows: [
          ["Refugees", "More than 1 million"],
          ["Main exodus", "About 740,000 fled Myanmar from August 2017"],
          ["Where", "Camps near Cox's Bazar; some on Bhasan Char island"],
          ["New arrivals", "Tens of thousands since 2024 as fighting spread in Rakhine"],
          ["Status", "Not recognised as refugees by Bangladeshi law; cannot work legally"]
        ] },
        { type: "section", head: "Who are the Rohingya?", md:
          "The Rohingya are a mostly Muslim people from Rakhine state in Myanmar, next to Bangladesh. Myanmar denies most of them citizenship, calling them illegal 'Bengali' immigrants, although many families have lived there for generations. Waves of persecution drove them into Bangladesh in 1978 and the 1990s, and most returned. The biggest came in 2017." },
        { type: "section", head: "2017", md:
          "In August 2017, after attacks on police posts by a Rohingya armed group, Myanmar's army launched 'clearance operations': villages were burned, thousands of people killed and women raped. About 740,000 Rohingya fled to Bangladesh within months. A UN fact-finding mission called for Myanmar's generals to be investigated for genocide, and Gambia took Myanmar to the International Court of Justice in 2019." },
        { type: "section", head: "Life in the camps", md:
          "The camps near Cox's Bazar are a city of bamboo and tarpaulin on deforested hills, prone to fires, landslides and monsoon floods. Refugees cannot work legally, leave the camps freely or attend Bangladeshi schools. Armed groups and gangs operate inside. Bangladesh moved about 35,000 people to Bhasan Char, a silt island in the Bay of Bengal, despite rights groups' concerns. Cuts to foreign aid in 2025 forced the UN to warn of cuts to food rations." },
        { type: "section", head: "No way home", md:
          "Repatriation plans agreed with Myanmar have repeatedly failed: refugees refuse to return without citizenship and safety. Since 2023 the Arakan Army, an ethnic Rakhine rebel group, has taken most of Rakhine state from Myanmar's junta, and Rohingya have been caught between the two sides, prompting new arrivals. Bangladesh's governments, from Hasina to Yunus to Tarique Rahman, all insist the refugees must eventually go back." },
        { type: "section", head: "Bangladesh's position", md:
          "Bangladesh is not a party to the 1951 Refugee Convention and officially calls the Rohingya 'forcibly displaced Myanmar nationals'. It has kept its border largely closed to new arrivals while allowing aid groups to work in the camps. The cost falls heavily on Cox's Bazar, a poor district, where local people complain about lower wages, rising prices and the loss of forests to the camps." },
        { type: "section", head: "Children of the camps", md:
          "About half the refugees are children, and tens of thousands have been born in the camps since 2017. Schools run by aid groups now teach the Myanmar curriculum in Burmese so that children could fit back in if they ever return." },
        { type: "compare", head: "Two pressures",
          left: { head: "Humanitarian", md:
            "The Rohingya need education, work and safety while they wait, and the world must keep funding aid." },
          right: { head: "Local", md:
            "Host communities in Cox's Bazar feel overwhelmed, and Bangladesh cannot absorb a million more people permanently." } },
        { type: "section", head: "Why it matters", md:
          "The camps tie Bangladesh to Myanmar's civil war and to the policies of donors from the [[unit:us|United States]] to [[unit:gb|Britain]], whose aid cuts are felt directly in the rations." }
      ],
      takeaways: [
        "More than a million Rohingya refugees from Myanmar live in camps near Cox's Bazar.",
        "About 740,000 fled Myanmar's army in 2017; the UN called for a genocide investigation.",
        "Repatriation has failed, and aid cuts in 2025 threatened food rations."
      ],
      check: { q: "Why have most Rohingya refused to return to Myanmar?",
        choices: ["They prefer life in the camps", "They would not get citizenship or safety", "Bangladesh forbids it"], answer: 1,
        explain: "Refugees say they will not go back without citizenship, rights and protection from violence." },
      sources: [
        { title: "Rohingya refugees in Bangladesh", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rohingya_refugees_in_Bangladesh", date: "n.d." },
        { title: "Rohingya genocide", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rohingya_genocide", date: "n.d." },
        { title: "Bangladesh", publisher: "Britannica", url: "https://www.britannica.com/place/Bangladesh", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "bd-8", kind: "now", asOf: "2026-10-22",
      title: "Where things stand",
      dek: "A new government with a huge majority faces an energy crisis, a reform agenda, a death-row exile in India and a decisive month for its economy.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/bd/bd-8-hero.webp",
          alt: "Illustration of the Dhaka skyline at dusk with dense buildings, an elevated metro line with a train, cycle rickshaws on the street below and a river with boats.",
          caption: "Dhaka, one of the most densely populated cities in the world.",
          credit: "Illustration — not a photograph",
          prompt: "A dense city skyline at dusk with many concrete apartment blocks, an elevated metro line with a sleek train crossing, colourful cycle rickshaws on the busy street below, a wide river with wooden boats in front, warm hazy orange light, crowded and hopeful, no people close up, no flags, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Government:** Tarique Rahman's BNP has a two-thirds majority.\n" +
          "- **Opposition:** a Jamaat-led alliance, with the students' NCP.\n" +
          "- **Reform:** turning the July Charter into constitutional amendments.\n" +
          "- **Economy:** gas shortages, power cuts and lost garment orders.\n" +
          "- **Justice:** Hasina sentenced to death; the Awami League banned." },
        { type: "section", head: "Bangladesh in the world", md:
          "Tarique Rahman's government is trying to reset relations with [[unit:in|India]], strained by its support for Hasina, while keeping close to [[unit:cn|China]], a big investor and arms supplier. Ties with [[unit:pk|Pakistan]], frozen for decades over 1971, warmed under Yunus, with direct trade restored. The [[unit:us|United States]] is the biggest single market for its garments, and [[unit:jp|Japan]] funds major infrastructure." },
        { type: "section", head: "Climate", md:
          "Bangladesh is among the countries most threatened by climate change. Cyclones, floods and river erosion displace hundreds of thousands of people a year, and rising seas push salt water into farmland in the south. Its cyclone shelters and early warnings have sharply cut deaths since the 1970 and 1991 disasters, a model for other countries." },
        { type: "section", head: "What voters want", md:
          "Bangladeshis want jobs, stable prices, electricity, safety and an end to the extortion and political violence that marked past governments. Young people who led the uprising want accountability for the killings and real reform. Many are watching whether BNP activists, out of power for 17 years, behave differently from the Awami League activists they replaced." },
        { type: "section", head: "The economy ahead", md:
          "The International Monetary Fund and economists expect growth to remain weak until energy supplies recover, with inflation high and banks still fragile after years of insider lending. The government is courting investors from [[unit:jp|Japan]], [[unit:cn|China]] and the Gulf, seeking new LNG suppliers, and pushing to diversify exports beyond garments into leather, electronics and pharmaceuticals." },
        { type: "section", head: "Security and the street", md:
          "Street politics has not disappeared. Clashes between party activists, mob attacks and assaults on religious minorities, including Hindu temples and Sufi shrines, rose after Hasina's fall, and police, demoralised after 2024, struggle to keep order. The government has promised police reform, one of the July Charter's demands." },
        { type: "section", head: "Women and work", md:
          "Women make up most garment workers and have driven much of the country's social change. Reformers fear that Islamist parties' stronger position could restrict their rights; Jamaat says it will not." },
        { type: "section", head: "Three scenarios", md:
          "- **Reform and recovery.** The charter is enacted, gas supplies return and the economy steadies.\n" +
          "- **New dominance.** The BNP uses its majority to entrench itself, repeating old patterns.\n" +
          "- **Turmoil.** Economic pain, street protests or a clash over Hasina's return destabilise the country." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Before 24 November 2026:** UN decision on delaying LDC graduation\n" +
          "- **December 2026:** the Ganges treaty expires; Hasina's promised return\n" +
          "- **2027:** constitutional amendments and the upper house\n" +
          "- **2031:** the next general election" },
        { type: "section", head: "Connections", md:
          "Bangladesh's story runs through [[unit:in]] (neighbour, liberator in 1971, Hasina's refuge), [[unit:pk]] (the state it broke away from), [[unit:cn]] (investor), [[unit:qa]] (its gas supplier), [[unit:us]] (its biggest market) and [[unit:gb]] (the former colonial power and home to a large Bangladeshi diaspora)." }
      ],
      takeaways: [
        "The BNP government has a two-thirds majority and a reform mandate.",
        "The gas crisis and LDC graduation make the coming months decisive for the economy.",
        "Relations with India hinge on Hasina's fate and the Ganges treaty."
      ],
      check: { q: "When is Bangladesh due to graduate from least developed country status, unless delayed?",
        choices: ["24 November 2026", "1 January 2030", "It already has"], answer: 0,
        explain: "Graduation is scheduled for 24 November 2026; Bangladesh has asked the UN for a three-year delay." },
      sources: [
        { title: "UN body refers Bangladesh's 3-year LDC extension request to General Assembly", publisher: "The Daily Star", url: "https://www.thedailystar.net/business/news/un-body-refers-bangladeshs-3-year-ldc-extension-request-general-assembly-4229811", date: "2026" },
        { title: "Ganges water treaty up for renewal in 2026: Bangladesh must negotiate better deal with India", publisher: "Scroll", url: "https://scroll.in/article/1049567/ganges-water-treaty-up-for-renewal-in-2026-bangladesh-must-negotiate-better-deal-with-india", date: "2026" },
        { title: "Bangladesh's new PM Tarique Rahman takes office", publisher: "Gulf News", url: "https://gulfnews.com/world/asia/bangladesh-s-new-pm-tarique-rahman-takes-power-2-1.500446187", date: "2026-02-17" }
      ]
    }
  ]
});
