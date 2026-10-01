/* ============================================================
   Unit 4 — India 🇮🇳
   Research note and sources: tools/research/in.md
   Current as of 28 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("in", {
  id: "in",
  asOf: "2026-09-28",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "in-1", kind: "snapshot", asOf: "2026-09-28",
      title: "India in brief",
      dek: "The most populous country on Earth, one of the five biggest economies, a nuclear power, and the democracy every other power is courting.",
      blocks: [
        { type: "map", src: "maps/in.svg",
          alt: "Locator map of South Asia with India highlighted, bordered by Pakistan, China, Nepal, Bangladesh and Myanmar, and a small globe showing its place in the world.",
          caption: "India as administered. Kashmir is disputed: India claims the whole former princely state, but parts are held by Pakistan and China. Lines shown follow who controls the ground.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "New Delhi"],
          ["People", "About 1.46 billion, the world's largest population since 2023"],
          ["Economy", "About $4.2 trillion; India says it passed Japan as the fourth-largest in 2025"],
          ["System", "Federal parliamentary republic of 28 states and 8 union territories"],
          ["Leader", "Prime Minister Narendra Modi (BJP), in office since 2014"],
          ["Parliament", "BJP-led NDA coalition holds 293 of 543 Lok Sabha seats"],
          ["Next national vote", "General election due by 2029"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "India has more people than any other country, one of the fastest-growing large economies, nuclear weapons and a navy that dominates the Indian Ocean. It is also the one big power that every camp wants on its side. It buys arms and, until 2026, oil from [[unit:ru]]; it sits with [[unit:cn]] and Russia in clubs such as [[BRICS]]; and it works with the [[unit:us]], [[unit:jp]] and [[unit:au]] in the [[Quad]].\n\n" +
          "India calls this 'strategic autonomy': keeping good relations with everyone and signing up to no one's bloc." },
        { type: "section", head: "The world's largest democracy", md:
          "Nearly a billion people were registered to vote in the 2024 general election, which was held over six weeks. India's democracy is noisy, federal and fiercely competitive: states have their own governments, regional parties rule many of them, and incumbents regularly lose.\n\n" +
          "Critics at home and abroad argue that its democracy has weakened under Modi, pointing to pressure on journalists, opposition leaders and Muslim minorities. The government rejects that, noting that it keeps winning free elections and that the opposition won in several states in 2026." },
        { type: "section", head: "Young, growing and unequal", md:
          "About half of Indians are under 30. Its economy has been growing at 6% to 7% a year, the fastest of any large economy, driven by services, software, infrastructure and a fast-growing middle class. Yet hundreds of millions still work in farming or informal jobs, and creating enough good work for young people is the government's biggest challenge.\n\n" +
          "India is also trying to become a manufacturing alternative to [[unit:cn]], and companies such as Apple have moved some production there." },
        { type: "section", head: "Neighbours and rivals", md:
          "India shares its longest and most dangerous borders with two nuclear-armed rivals. It has fought four wars with [[unit:pk]], plus a short conflict in May 2025, and a border war with [[unit:cn]] in 1962. Soldiers died in clashes with Chinese troops in the Himalayas as recently as 2020. Relations with both shape almost every choice India makes about defence and alliances. India also competes with China for influence in its smaller neighbours, from Nepal and Bangladesh to Sri Lanka and the Maldives." },
        { type: "callout", tone: "why", md:
          "Whether India's economy keeps growing, which way it leans between the US, China and Russia, and whether its rivalry with Pakistan stays contained matter to a sixth of humanity and to the balance of power in Asia." }
      ],
      takeaways: [
        "India is the world's most populous country, a nuclear power and one of its fastest-growing large economies.",
        "It practises 'strategic autonomy', working with the US, Russia and China at once.",
        "Its borders with Pakistan and China are its most dangerous, and both rivals have nuclear weapons."
      ],
      check: { q: "What does India call its policy of keeping good relations with every camp?",
        choices: ["Non-alignment 2.0", "Strategic autonomy", "Look East"], answer: 1,
        explain: "'Strategic autonomy' means India keeps its options open, working with the US, Russia and China and joining no one's bloc." },
      sources: [
        { title: "India says its economy has overtaken Japan, and eyes Germany next", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2025/12/30/asia-pacific/india-economy-growth/", date: "2025-12-30" },
        { title: "World Population Prospects 2024", publisher: "United Nations", url: "https://population.un.org/wpp/", date: "2024" },
        { title: "Modi's party takes control of India's West Bengal in key state election", publisher: "NPR", url: "https://www.npr.org/2026/05/04/g-s1-120053/modis-party-takes-control-of-indias-west-bengal-in-key-state-election", date: "2026-05-04" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "in-2", kind: "power", asOf: "2026-09-28",
      title: "A democracy of a billion voters",
      dek: "Parliament chooses the prime minister, the states run most daily life, and an independent commission runs the biggest elections on Earth.",
      blocks: [
        { type: "diagram", src: "img/in/in-2-power.svg",
          alt: "Diagram of power in India. Nearly a billion voters elect the 543-seat Lok Sabha. Its majority chooses the prime minister, Narendra Modi, who leads the NDA coalition with 293 seats. The Supreme Court checks the government. Power is shared with 28 states that have their own elected governments. An independent Election Commission runs every vote.",
          caption: "Westminster-style at the centre, federal across the states, with a powerful Supreme Court.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "Parliament and the prime minister", md:
          "India's system is modelled on Britain's. Voters elect 543 members of the [[Lok Sabha]], the lower house, in single-member seats where the candidate with the most votes wins. Whoever commands a majority, 272 seats, becomes prime minister and forms a cabinet. The upper house, the Rajya Sabha, is chosen mostly by state legislatures and can delay but rarely block the government.\n\n" +
          "The president, currently Droupadi Murmu, is head of state and signs laws, but acts almost always on the government's advice." },
        { type: "section", head: "Coalitions are back", md:
          "For most of India's history, the Congress party dominated. From 1989 to 2014 no party won a majority alone, and [[coalition government|coalition governments]] ruled. Modi's Bharatiya Janata Party (BJP) broke that in 2014 and 2019 with outright majorities.\n\n" +
          "In 2024 it fell short, winning 240 seats, and now governs through the National Democratic Alliance (NDA), relying on two regional allies: the Telugu Desam Party of Andhra Pradesh and the Janata Dal (United) of Bihar. The opposition INDIA alliance, led by Congress, won 234 seats." },
        { type: "section", head: "Strong states", md:
          "India's 28 states have their own elected assemblies and chief ministers, and control policing, land, farming, health and much of education. Many are ruled by regional parties rooted in one language or region, which makes state elections as important as national ones, and a place where national parties can be humbled.\n\n" +
          "States also argue with the centre about money and power: southern states, which have slowed their population growth, fear losing seats in parliament if constituencies are redrawn by population." },
        { type: "section", head: "How the vote works", md:
          "A national election is a logistical marvel. The 2024 vote ran in seven phases over six weeks, with about a million polling stations, some reached by boat, elephant or on foot, so that no voter lives more than two kilometres from one. Indians vote on electronic machines, and a paper slip lets each voter check their choice. Turnout is usually around two-thirds, higher than in many richer democracies." },
        { type: "section", head: "Referees", md:
          "Two institutions hold the ring. The Supreme Court can strike down laws and has ruled on everything from privacy to temples. The Election Commission, independent under the constitution, runs national and state elections, with electronic voting machines, for nearly a billion voters.\n\n" +
          "Both are now at the centre of political fights. The opposition accuses the Election Commission of favouring the BJP in its revision of voter lists, which the commission denies, as [[lesson:in-7]] explains." },
        { type: "compare", head: "Two views of India's democracy",
          left: { head: "The government's view", md:
            "India holds huge, free elections that the BJP keeps winning; opposition parties won Kerala and Tamil Nadu in 2026. Criticism from abroad misreads a vibrant, self-correcting democracy." },
          right: { head: "Critics' view", md:
            "Power has been centralised, the media is under pressure, investigative agencies target opposition leaders, and Muslims face growing discrimination. Elections alone don't make a healthy democracy." } }
      ],
      takeaways: [
        "India has a British-style parliament: the majority in the 543-seat Lok Sabha picks the prime minister.",
        "Modi's BJP lost its majority in 2024 and governs in a coalition, the NDA, with two regional allies.",
        "States are powerful, and the Supreme Court and Election Commission are the key referees."
      ],
      check: { q: "How many seats did Modi's BJP win on its own in 2024?",
        choices: ["240, short of a majority", "303, a comfortable majority", "272, a bare majority"], answer: 0,
        explain: "The BJP won 240 of 543 seats, short of the 272 needed, so it relies on allies in the NDA coalition, which holds 293." },
      sources: [
        { title: "2026 State Legislative Assembly Elections in India", publisher: "Britannica", url: "https://www.britannica.com/topic/2026-State-Elections-in-India", date: "2026-05" },
        { title: "Bihar 2025 election result: Who won, who lost, why it matters", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/11/14/bihar-2025-election-result-who-won-who-lost-why-it-matters", date: "2025-11-14" },
        { title: "The Delimitation Bill, 2026", publisher: "PRS Legislative Research", url: "https://prsindia.org/billtrack/the-delimitation-bill-2026", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "in-9", kind: "founding", asOf: "2026-09-28",
      title: "Freedom and the Constitution",
      dek: "A mass movement won independence from Britain, and a remarkable constitution turned the world's poorest large country into its biggest democracy.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in/in-9-hero.webp",
          alt: "Illustration of a large circular colonnaded parliament building of red sandstone in morning light, with lawns and trees in front.",
          caption: "The old circular Parliament House in New Delhi, where the Constituent Assembly met from 1946 to 1949.",
          credit: "Illustration — not a photograph",
          prompt: "A large circular colonial-era parliament building ringed with pale sandstone columns and a red sandstone base, green lawns and trees in front, soft morning light, dignified and historic, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From Raj to republic", items: [
          ["1857", "Rebellion against the East India Company; Britain takes direct rule"],
          ["1885", "Indian National Congress founded"],
          ["1930", "Gandhi's Salt March"],
          ["1942", "'Quit India' movement"],
          ["15 Aug 1947", "Independence and partition"],
          ["26 Jan 1950", "The Constitution takes effect; India becomes a republic"],
          ["1951–52", "First general election"]
        ] },
        { type: "section", head: "The Raj", md:
          "The British East India Company conquered much of the subcontinent in the 18th and 19th centuries. After a great rebellion in 1857, the British crown took direct control. The Raj built railways, universities and a civil service, but also drained wealth to Britain and presided over famines that killed millions, including in Bengal in 1943. Educated Indians founded the Indian National Congress in 1885, first to seek a greater say, then self-rule." },
        { type: "section", head: "Gandhi and the national movement", md:
          "Mohandas Gandhi, a lawyer who had fought discrimination in South Africa, turned Congress into a mass movement from 1920. His method was nonviolent civil disobedience, satyagraha: boycotts of British cloth, refusal to pay unjust taxes, and the 1930 Salt March to the sea to defy the salt monopoly. Jawaharlal Nehru led its modernising, secular wing. The Muslim League, led by Muhammad Ali Jinnah, came to argue that Muslims needed a state of their own, which led to [[unit:pk|Pakistan]]." },
        { type: "section", head: "Independence and partition", md:
          "Exhausted by the Second World War, Britain agreed to leave. On 15 August 1947 India became independent, and Pakistan was carved out of its Muslim-majority north-west and east. Partition set off a catastrophe: some 15 million people crossed the new borders, and between several hundred thousand and two million were killed in religious violence. Gandhi, who had campaigned against the division, was assassinated by a Hindu nationalist in January 1948. More than 500 princely states were persuaded or forced to join India; Kashmir's accession led to the first war with Pakistan." },
        { type: "section", head: "The Constitution", md:
          "A Constituent Assembly spent three years drafting the world's longest national constitution, guided by B. R. Ambedkar, a lawyer and economist born into an 'untouchable' Dalit caste. It took effect on 26 January 1950, now Republic Day. It gave every adult the vote at once, in a country where most people could not read; abolished untouchability; reserved seats and jobs for historically oppressed castes and tribes; guaranteed fundamental rights enforceable by the courts; and created a federal parliamentary system. The first election, in 1951–52, involved 173 million voters." },
        { type: "compare", head: "Two readings of the founding",
          left: { head: "Nehru's vision", md:
            "A secular, democratic republic in which all religions are equal and the state stays neutral, the foundation of Congress's long rule." },
          right: { head: "Hindu nationalists' vision", md:
            "India is at heart a Hindu civilisation; Nehruvian secularism appeased minorities. This view, long marginal, underpins the BJP." } },
        { type: "section", head: "Why it still matters", md:
          "Almost every big argument in Indian politics goes back to the founding: the place of religion in public life, caste reservations, the power of the centre over the states, and Kashmir. The Constitution itself became a campaign issue in 2024, when the opposition accused Narendra Modi's BJP of wanting to change it, which the BJP denied." }
      ],
      takeaways: [
        "Gandhi's mass nonviolent movement and Nehru's Congress led India to independence in 1947.",
        "Partition into India and Pakistan displaced about 15 million people and killed hundreds of thousands or more.",
        "The 1950 Constitution, shaped by B. R. Ambedkar, gave every adult the vote and abolished untouchability."
      ],
      check: { q: "Who chaired the committee that drafted India's Constitution?",
        choices: ["Mahatma Gandhi", "B. R. Ambedkar", "Muhammad Ali Jinnah"], answer: 1,
        explain: "Ambedkar, a Dalit lawyer and economist, chaired the drafting committee; Jinnah founded Pakistan." },
      sources: [
        { title: "Indian independence movement", publisher: "Britannica", url: "https://www.britannica.com/topic/Indian-independence-movement", date: "n.d." },
        { title: "Partition of India", publisher: "Britannica", url: "https://www.britannica.com/event/Partition-of-India", date: "n.d." },
        { title: "Constitution of India", publisher: "Legislative Department, Government of India", url: "https://legislative.gov.in/constitution-of-india/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "in-3", kind: "history", asOf: "2026-09-28",
      title: "Partition to superpower hopes",
      dek: "From a bloody birth in 1947 to Modi's India: the turning points that explain today's politics.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in/in-3-hero.webp",
          alt: "Illustration of a crowded railway platform in 1947, families with bundles and trunks waiting for a steam train, seen from behind.",
          caption: "Partition in 1947 uprooted about 15 million people and left a rivalry that still shapes South Asia.",
          credit: "Illustration — not a photograph",
          prompt: "A crowded 1940s railway platform in hazy afternoon light, families in simple clothes with bundles and metal trunks waiting for a steam train, seen from behind, a sense of upheaval and exhaustion, no legible signs." },
        { type: "timeline", head: "The short version", items: [
          ["1947", "Independence from Britain and partition with Pakistan"],
          ["1950", "The constitution makes India a democratic republic"],
          ["1975–77", "Indira Gandhi's Emergency suspends democracy"],
          ["1991", "Economic crisis forces a turn to open markets"],
          ["2014", "Narendra Modi wins the first single-party majority in 30 years"]
        ] },
        { type: "section", head: "1. Independence and partition (1947)", md:
          "British rule ended on 15 August 1947 with the subcontinent divided into Hindu-majority India and Muslim-majority [[unit:pk]]. Partition set off mass migration and communal killing: about 15 million people were uprooted and hundreds of thousands, possibly more than a million, were killed. The princely state of Kashmir was claimed by both, and the first of India and Pakistan's wars began that autumn." },
        { type: "section", head: "2. A secular republic (1950s–60s)", md:
          "Under Jawaharlal Nehru, India adopted a constitution in 1950 that guaranteed equal rights regardless of religion or caste, and set out to build industry through state planning. Abroad it led the Non-Aligned Movement, refusing to join either Cold War bloc. A humiliating border war with [[unit:cn]] in 1962 exposed its military weakness." },
        { type: "section", head: "Kashmir and the wars", md:
          "India and Pakistan fought over Kashmir in 1947 and again in 1965. In 1971 India backed the independence of East Pakistan, which became Bangladesh, in a war that split Pakistan in two. Both countries tested nuclear weapons in 1998, and in 1999 they fought a limited war in the Kargil mountains. Since then, militant attacks and Indian retaliation have repeatedly brought them to the brink." },
        { type: "section", head: "3. The Emergency (1975–77)", md:
          "Nehru's daughter, Prime Minister Indira Gandhi, declared a state of emergency in 1975, suspending elections and civil liberties and jailing opponents. When she called elections in 1977 she was heavily defeated. The episode is still cited, by all sides, as the moment India's democracy came closest to breaking, and as proof that voters can defend it." },
        { type: "section", head: "4. Opening up (1991)", md:
          "In 1991 India nearly ran out of foreign currency. The government of P. V. Narasimha Rao, with finance minister Manmohan Singh, cut tariffs, dismantled licensing rules and welcomed foreign investment. Growth took off, a software industry boomed and a middle class emerged.\n\n" +
          "The same decade saw the rise of Hindu nationalism: in 1992 a mob destroyed the Babri Masjid mosque in Ayodhya, setting off deadly riots." },
        { type: "section", head: "5. Modi's India (2014–)", md:
          "Narendra Modi, a former chief minister of Gujarat and a lifelong member of the Hindu nationalist RSS movement, won an outright majority in 2014, the first for any party since 1984. His governments built roads, digital payments and welfare schemes at huge scale; in 2019 they revoked Kashmir's special autonomy; and in January 2024 Modi opened a grand Hindu temple on the site of the destroyed mosque in Ayodhya, a moment his supporters celebrated and many Muslims mourned." }
      ],
      takeaways: [
        "India's 1947 partition with Pakistan left a Kashmir dispute and a rivalry that has led to repeated wars.",
        "Its 1950 constitution made it a secular democracy; the 1975–77 Emergency was the closest it came to breaking.",
        "Opening up in 1991 launched its economic rise; since 2014 Modi's Hindu nationalist BJP has dominated politics."
      ],
      check: { q: "What happened in India's 1991 economic crisis?",
        choices: ["The government nationalised banks", "India opened its economy to markets and foreign investment", "India left the Non-Aligned Movement"], answer: 1,
        explain: "Facing a currency crisis, the government cut tariffs and red tape and welcomed foreign investment, launching decades of faster growth." },
      sources: [
        { title: "India profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-south-asia-12641776", date: "n.d." },
        { title: "Partition of India", publisher: "The National Archives (UK)", url: "https://www.nationalarchives.gov.uk/education/resources/the-partition-of-india/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "in-10", kind: "past", asOf: "2026-09-28",
      title: "The Emergency",
      dek: "From 1975 to 1977 Indira Gandhi suspended democracy. Voters threw her out when she called an election, a lesson India still argues about.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in/in-10-hero.webp",
          alt: "Illustration of a printing press room at night with a newspaper page left blank on the press and papers scattered on the floor.",
          caption: "During the Emergency, newspapers were censored; some printed blank editorials in protest.",
          credit: "Illustration — not a photograph",
          prompt: "An old newspaper printing room at night, a large press with a blank white page on it, stacks of paper and scattered sheets on the floor, a single hanging lamp, silence and suppression, no people, no legible text." },
        { type: "facts", head: "The Emergency", rows: [
          ["Declared", "25 June 1975"],
          ["Ended", "March 1977"],
          ["Detained", "Well over 100,000 people, including opposition leaders"],
          ["Sterilisations", "About 8 million in 1976, many coerced"],
          ["Result", "Congress lost power for the first time in 1977"]
        ] },
        { type: "section", head: "Indira's India", md:
          "Indira Gandhi, Nehru's daughter, became prime minister in 1966. She split the Congress party, nationalised banks, won a landslide in 1971 on the slogan 'Garibi hatao' ('remove poverty'), and the same year led India to victory over Pakistan in the war that created Bangladesh. But by 1974 inflation, shortages and corruption fuelled a protest movement led by the veteran socialist Jayaprakash Narayan, who called for 'total revolution' and urged police and soldiers not to obey illegal orders." },
        { type: "section", head: "The court ruling and the Emergency", md:
          "On 12 June 1975 the Allahabad High Court found Indira Gandhi guilty of electoral malpractice in her 1971 campaign and barred her from office for six years. Rather than resign, she had the president declare a state of emergency on 25 June, citing threats to internal security. Opposition leaders, including Narayan and future prime ministers such as Morarji Desai and Atal Bihari Vajpayee, were arrested overnight. Parliament, packed with her supporters, amended the constitution to shield her election from the courts." },
        { type: "section", head: "Twenty-one months", md:
          "The press was censored, some newspapers printing blank spaces in protest. Civil liberties were suspended, and well over 100,000 people were detained without trial, including members of the Hindu nationalist RSS, which was banned. Her son Sanjay, who held no office, drove a programme of slum clearance and mass sterilisation to curb population growth: about 8 million people were sterilised in 1976, many under coercion. In 1976 the Supreme Court ruled that detainees could not even challenge their detention, a decision later widely regarded as its darkest hour." },
        { type: "section", head: "The people's verdict", md:
          "In January 1977, apparently confident of winning, Indira Gandhi called an election and released her opponents. They united in the Janata Party and routed Congress in March; she and Sanjay both lost their seats. The Janata government restored freedoms and amended the constitution to make a future emergency harder. But it collapsed in infighting, and Indira Gandhi returned to power in 1980. She was assassinated by her Sikh bodyguards in 1984." },
        { type: "compare", head: "Two lessons",
          left: { head: "Democracy's resilience", md:
            "Even after 21 months of dictatorship, Indians voted out a powerful prime minister peacefully, proving the strength of the ballot box." },
          right: { head: "Democracy's fragility", md:
            "A popular leader suspended rights with the help of Parliament and a compliant court; institutions failed and only her own miscalculation ended it." } },
        { type: "section", head: "Why it still matters", md:
          "The Emergency is a weapon in today's politics. The BJP, many of whose leaders were jailed in 1975, marks 25 June as 'Samvidhan Hatya Diwas' ('Day of the Murder of the Constitution') and cites it against Congress. Congress and critics of the Modi government reply that India now faces an 'undeclared emergency' of pressure on the press, opposition and courts." }
      ],
      takeaways: [
        "After a court voided her election, Indira Gandhi declared an emergency on 25 June 1975.",
        "For 21 months the press was censored, over 100,000 people were detained, and millions were sterilised.",
        "Voters threw her out in 1977; both main parties now invoke the Emergency against each other."
      ],
      check: { q: "How did the Emergency end?",
        choices: ["A military coup", "Indira Gandhi called an election in 1977 and lost", "The Supreme Court ended it"], answer: 1,
        explain: "She called elections for March 1977, and the opposition Janata Party routed Congress." },
      sources: [
        { title: "The Emergency", publisher: "Britannica", url: "https://www.britannica.com/event/the-Emergency-India", date: "n.d." },
        { title: "Indira Gandhi", publisher: "Britannica", url: "https://www.britannica.com/biography/Indira-Gandhi", date: "n.d." },
        { title: "The Emergency in India", publisher: "Press Information Bureau, Government of India", url: "https://www.pib.gov.in/FactsheetDetails.aspx?Id=149224&reg=48&lang=2", date: "2025-06" }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "in-11", kind: "past", asOf: "2026-09-28",
      title: "1991: the economy opens",
      dek: "With India weeks from default, a new government tore up four decades of planning and unleashed the growth that made it a global power.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in/in-11-hero.webp",
          alt: "Illustration of a modern glass office campus with palm trees and a busy road in front, under a bright sky, in an Indian tech city.",
          caption: "Bengaluru's technology parks grew out of the reforms of the 1990s.",
          credit: "Illustration — not a photograph",
          prompt: "A modern glass-and-steel office campus with palm trees and flowering bougainvillea, a busy road with auto-rickshaws and motorbikes in front, bright tropical light, energetic and prosperous, no people close up, no logos, no legible text." },
        { type: "facts", head: "Before and after", rows: [
          ["Foreign reserves, mid-1991", "About three weeks of imports"],
          ["Gold pledged abroad", "About 67 tonnes, to raise emergency loans"],
          ["Average growth, 1950–80", "About 3.5% a year (the 'Hindu rate of growth')"],
          ["Average growth, 1992–2019", "About 6–7% a year"],
          ["Architects", "PM P. V. Narasimha Rao and finance minister Manmohan Singh"]
        ] },
        { type: "section", head: "The licence raj", md:
          "After independence, Nehru's India followed a mixed economy inspired partly by the Soviet Union: five-year plans, big state-owned industries, high tariffs and a system of permits so tight that businesses needed government licences to expand, change products or import machinery. Critics called it the 'licence raj'. It built steel mills and dams, but growth averaged only about 3.5% a year for three decades, derided as the 'Hindu rate of growth', while countries such as South Korea raced ahead." },
        { type: "section", head: "The crisis", md:
          "By 1991 India was in deep trouble. Deficits had ballooned in the 1980s, the Gulf War sent oil prices soaring and cut off remittances from Indian workers in Kuwait, and the collapse of the Soviet Union removed a key trading partner. Political turmoil, including Rajiv Gandhi's assassination in May 1991, scared lenders. Foreign reserves fell to about $1.2 billion, barely three weeks of imports. To avoid default, the government flew about 67 tonnes of gold to London and elsewhere as collateral for loans, a national humiliation." },
        { type: "section", head: "The reforms", md:
          "The new Congress prime minister, P. V. Narasimha Rao, appointed an economist, Manmohan Singh, as finance minister. In July 1991 they devalued the rupee, abolished most industrial licensing, slashed tariffs, opened sectors to foreign investment and began to shrink the role of the state. Singh quoted Victor Hugo in his budget speech: 'No power on earth can stop an idea whose time has come.' Later governments of different parties continued the reforms, opening telecoms, aviation and insurance." },
        { type: "section", head: "The results", md:
          "Growth accelerated to 6–7% a year for most of the next three decades. Hundreds of millions of people rose out of extreme poverty; an IT and outsourcing industry grew around Bengaluru and Hyderabad; and India became the world's fifth-largest economy by the 2020s. But manufacturing lagged, farming remained a trap for hundreds of millions, and inequality grew. Singh went on to serve as prime minister from 2004 to 2014." },
        { type: "compare", head: "Two views of 1991",
          left: { head: "Reformers", md:
            "1991 freed India's entrepreneurs, created a middle class of hundreds of millions, and made India a global economic power." },
          right: { head: "Critics", md:
            "The gains went mostly to cities and the educated; farmers, workers and the informal sector were left behind, and reform stalled on land and labour." } },
        { type: "section", head: "Why it still matters", md:
          "Every Indian government since has claimed the mantle of reform while arguing about its limits. Modi's governments have pushed infrastructure, a national goods and services tax and 'Make in India' manufacturing, but farm reforms in 2020 were repealed after a year of protests. India's economic weight, the reason it matters to [[unit:us]] and [[unit:cn]], rests on the turn taken in 1991." }
      ],
      takeaways: [
        "India's planned economy grew slowly under the 'licence raj' of permits and tariffs.",
        "In 1991, near default, P. V. Narasimha Rao and Manmohan Singh devalued the rupee and dismantled licensing.",
        "Growth of 6–7% a year followed, lifting hundreds of millions from poverty but leaving farming and manufacturing behind."
      ],
      check: { q: "What did India do in 1991 to avoid defaulting on its debts?",
        choices: ["Nationalised banks", "Pledged gold abroad and launched sweeping market reforms", "Joined the Soviet bloc"], answer: 1,
        explain: "It flew gold abroad as collateral for loans, then devalued the rupee and dismantled the licence raj." },
      sources: [
        { title: "35 years of liberalisation: How the 1991 BoP crisis forced historic reforms", publisher: "Business Standard", url: "https://www.business-standard.com/economy/news/35-years-of-liberalisation-how-the-1991-bop-crisis-forced-historic-reforms-126072800191_1.html", date: "2026-07-28" },
        { title: "Manmohan Singh", publisher: "Britannica", url: "https://www.britannica.com/biography/Manmohan-Singh", date: "n.d." },
        { title: "Has India ever faced bankruptcy? How gold & reforms saved the economy during 1991 crisis", publisher: "Business Today", url: "https://www.businesstoday.in/india/story/has-india-ever-faced-bankruptcy-how-gold-reforms-saved-the-economy-during-1991-crisis-549436-2026-08-16", date: "2026-08-16" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "in-4", kind: "players", asOf: "2026-09-28",
      title: "Modi and his challengers",
      dek: "A dominant prime minister, his right-hand man, a determined opposition leader and the regional chiefs who can still beat them all.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in/in-4-hero.webp",
          alt: "Illustration of a vast election rally ground at dusk, a sea of people and flags seen from the back, with a distant stage.",
          caption: "Indian politics is mass politics: rallies of hundreds of thousands are routine at election time.",
          credit: "Illustration — not a photograph",
          prompt: "A vast outdoor rally ground at dusk seen from the back of the crowd, thousands of people and plain coloured flags without symbols, a distant lit stage, dust in the warm air, loudspeakers on poles, energy and scale." },
        { type: "people", head: "Six to know", items: [
          { name: "Narendra Modi", role: "Prime Minister (BJP), since 2014",
            img: "img/in/portrait-modi.webp", source: "Official portrait via Press Information Bureau (GODL-India) on Wikimedia Commons; confirm the licence.",
            md: "India's dominant politician for more than a decade: a gifted campaigner with a Hindu nationalist base and a pitch built on development, welfare delivery and national pride." },
          { name: "Amit Shah", role: "Home Minister (BJP)",
            img: "img/in/portrait-shah.webp", source: "PIB (GODL-India) photo on Wikimedia Commons; confirm the licence.",
            md: "Modi's closest ally and the BJP's chief election strategist, in charge of internal security, Kashmir and the police. Widely seen as a possible successor." },
          { name: "Rahul Gandhi", role: "Leader of the Opposition in the Lok Sabha (Congress)",
            img: "img/in/portrait-gandhi.webp", source: "Find a CC-licensed photo on Wikimedia Commons and confirm the licence.",
            md: "Heir to the Nehru–Gandhi family, now leading a campaign accusing the BJP and the Election Commission of 'vote chori', vote theft, which both deny." },
          { name: "Suvendu Adhikari", role: "Chief Minister of West Bengal (BJP), since May 2026",
            img: "img/in/portrait-adhikari.webp", source: "Find a CC-licensed photo on Wikimedia Commons and confirm the licence.",
            md: "A former ally of Mamata Banerjee who defected to the BJP, beat her in her own seat in 2026 and became the state's first BJP chief minister." },
          { name: "Vijay", role: "Chief Minister of Tamil Nadu (TVK), since May 2026",
            img: "img/in/portrait-vijay.webp", source: "Find a CC-licensed photo on Wikimedia Commons and confirm the licence.",
            md: "A film superstar whose two-year-old party broke the half-century grip of Tamil Nadu's two Dravidian parties, a reminder that regional politics can upend everything." },
          { name: "Nitish Kumar", role: "Chief Minister of Bihar (JD(U))",
            img: "img/in/portrait-nitish.webp", source: "Find a CC-licensed photo on Wikimedia Commons and confirm the licence.",
            md: "A veteran who has switched sides several times and whose party props up Modi's coalition in Delhi. Sworn in for a record tenth time in November 2025." }
        ] },
        { type: "section", head: "The opposition's problem", md:
          "Congress, once India's natural party of government, now wins few big states on its own. The INDIA alliance of Congress and regional parties held together well in 2024, taking 234 seats, but its members compete against each other in state elections. The defeat of Mamata Banerjee, one of Modi's fiercest opponents, in West Bengal in 2026 removed one of its most combative voices." },
        { type: "section", head: "Why Modi keeps winning", md:
          "Beyond nationalism, the BJP's appeal rests on delivery: free grain for about 800 million people, gas cylinders, toilets, bank accounts and direct cash transfers reaching hundreds of millions of households. Voters often credit Modi personally, even when they are unhappy with local BJP politicians, which is why the party puts his face on almost everything." },
        { type: "section", head: "The RSS behind the BJP", md:
          "The BJP grew out of the Rashtriya Swayamsevak Sangh (RSS), a century-old Hindu nationalist volunteer movement with millions of members. Modi began his career as an RSS organiser. The movement supplies the party's ground workers and much of its ideology: that India is a civilisation with Hindu roots, which critics say leaves Muslims and other minorities as second-class citizens." },
        { type: "section", head: "The coalition's kingmakers", md:
          "Since 2024 Modi has needed allies. The Telugu Desam Party's Chandrababu Naidu, chief minister of Andhra Pradesh, and Bihar's Nitish Kumar hold the seats that keep the coalition in power. Both have extracted money and projects for their states, and both have a history of changing sides, which gives them leverage whenever the BJP needs votes in parliament." }
      ],
      takeaways: [
        "Narendra Modi dominates Indian politics, with Amit Shah as his strategist and possible successor.",
        "Rahul Gandhi leads the opposition and accuses the BJP and Election Commission of rigging voter lists.",
        "Regional leaders, from Bihar's Nitish Kumar to Tamil Nadu's new chief minister Vijay, still hold real power."
      ],
      check: { q: "Which movement did the BJP grow out of?",
        choices: ["The Indian National Congress", "The RSS, a Hindu nationalist volunteer organisation", "The Non-Aligned Movement"], answer: 1,
        explain: "The BJP is the political wing of a family of groups around the Rashtriya Swayamsevak Sangh (RSS), founded in 1925. Modi began as an RSS organiser." },
      sources: [
        { title: "Suvendu Adhikari becomes first BJP CM of West Bengal", publisher: "Akashvani News", url: "https://newsonair.gov.in/suvendu-adhikari-to-take-oath-as-first-bjp-cm-of-west-bengal-today/", date: "2026-05-09" },
        { title: "Indian Film Star Vijay Sworn In as Tamil Nadu Chief Minister After Days of High Drama", publisher: "Variety", url: "https://variety.com/2026/politics/news/vijay-sworn-in-tamil-nadu-chief-minister-1236742532/", date: "2026-05-10" },
        { title: "Bihar 2025 election result: Who won, who lost, why it matters", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/11/14/bihar-2025-election-result-who-won-who-lost-why-it-matters", date: "2025-11-14" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "in-5", kind: "story", asOf: "2026-09-28",
      title: "Four days in May",
      dek: "A massacre of tourists in Kashmir, Indian missile strikes on Pakistan, a ceasefire both sides remember differently, and a water treaty that is still suspended.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in/in-5-hero.webp",
          alt: "Illustration of a Himalayan meadow at dusk with pine forest and snow peaks, empty except for a few abandoned tourist ponies.",
          caption: "Pahalgam, a Kashmir resort town, where 26 people were killed on 22 April 2025.",
          credit: "Illustration — not a photograph",
          prompt: "A green Himalayan meadow at dusk ringed by tall pine forest and snow-capped peaks, a few riderless ponies standing still, long shadows, an eerie calm and emptiness, no people visible." },
        { type: "section", head: "What happened", md:
          "On 22 April 2025 gunmen killed 26 people, most of them Hindu tourists, in the meadows near Pahalgam in Indian-administered Kashmir. India blamed Pakistan-based militants; Pakistan denied involvement. The next day India put the [[Indus Waters Treaty]], which governs the rivers both countries depend on, 'in abeyance'.\n\n" +
          "On 7 May India launched Operation Sindoor, striking what it said were nine militant sites in Pakistan and Pakistani-administered Kashmir. For four days the two nuclear-armed neighbours traded missile, drone and artillery strikes, including on each other's air bases, before agreeing a ceasefire on 10 May. Both sides claimed victory." },
        { type: "timeline", head: "How it unfolded", items: [
          ["22 Apr 2025", "26 people killed near Pahalgam"],
          ["23 Apr 2025", "India suspends the Indus Waters Treaty"],
          ["7–10 May 2025", "Operation Sindoor and four days of strikes"],
          ["10 May 2025", "Ceasefire"],
          ["Aug 2026", "A Hague court rules the treaty still binding; India rejects it"]
        ] },
        { type: "section", head: "Two stories of the ceasefire", md:
          "Donald Trump announced the ceasefire first and said American mediation had prevented a nuclear war. [[unit:pk]] thanked him and later nominated him for the Nobel Peace Prize. India insisted the halt was agreed directly between the two militaries, at Pakistan's request, with no mediation. The disagreement soured Delhi's relations with Washington for months and helped make Pakistan's army chief, Asim Munir, a Trump favourite." },
        { type: "section", head: "The water war", md:
          "The rivers of the Indus basin flow from India into Pakistan, which depends on them for most of its farming. The 1960 treaty shared them out and survived three wars. India says it will stay suspended until Pakistan 'credibly and irrevocably' ends support for cross-border terrorism.\n\n" +
          "In late August 2026 the Permanent Court of Arbitration in The Hague ruled that the treaty remains fully binding and India had no valid grounds to suspend it. India rejected the ruling, saying the tribunal has no jurisdiction." },
        { type: "compare", head: "The argument",
          left: { head: "India's case", md:
            "Pakistan has sheltered militant groups that attack India for decades. India will no longer treat terror attacks and normal relations as separate; the treaty cannot survive while the attacks continue." },
          right: { head: "Pakistan's case", md:
            "India offered no proof of Pakistan's involvement, struck its territory, and is using water, which millions of Pakistanis need to live, as a weapon in breach of international law." } },
        { type: "section", head: "What's next", md:
          "The ceasefire has held, but diplomatic, trade and travel links remain cut. Another major attack could set off a new round quickly, and with the treaty suspended, the next crisis could involve water as well as weapons." },
        { type: "callout", tone: "why", md:
          "India and Pakistan are the only nuclear-armed neighbours who have fought each other repeatedly. Each crisis since 2016 has escalated faster than the last, with drones and missiles reaching deep into each other's territory within days." }
      ],
      takeaways: [
        "After 26 people were killed at Pahalgam in April 2025, India struck Pakistan and the two fought for four days in May.",
        "India says the ceasefire was agreed directly; Trump says he brokered it, a dispute that strained US–India ties.",
        "India has suspended the Indus Waters Treaty and rejected an August 2026 Hague ruling that it must be restored."
      ],
      check: { q: "What did India do to the Indus Waters Treaty after the Pahalgam attack?",
        choices: ["Signed a new version with Pakistan", "Put it 'in abeyance', suspending it", "Asked the UN to enforce it"], answer: 1,
        explain: "India suspended the 1960 treaty on 23 April 2025 and says it will stay suspended until Pakistan ends support for cross-border terrorism." },
      sources: [
        { title: "India to Iran: How two wars shaped the rise of Pakistan's Asim Munir", publisher: "Al Jazeera", url: "https://www.aljazeera.com/features/2026/4/23/india-to-iran-how-two-wars-shaped-the-rise-of-pakistans-asim-munir", date: "2026-04-23" },
        { title: "India rejects Hague court order to restore Indus waters pact with Pakistan", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/8/31/india-rejects-hague-court-order-to-restore-indus-waters-pact-with-pakistan", date: "2026-08-31" },
        { title: "India and Pakistan still cannot agree to restore the Indus Waters Treaty", publisher: "Chatham House", url: "https://www.chathamhouse.org/2026/04/india-and-pakistan-still-cannot-agree-restore-indus-waters-treaty-re-engagement-could-help", date: "2026-04" },
        { title: "Indus water treaty becomes latest India-Pakistan flashpoint", publisher: "CNBC", url: "https://www.cnbc.com/2026/06/22/india-pakistan-indus-waters-treaty-water-dispute-war-risk.html", date: "2026-06-22" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "in-6", kind: "story", asOf: "2026-09-28",
      title: "Tariffs, oil and a deal with Trump",
      dek: "Washington hit India with 50% tariffs for buying Russian oil. Six months later India stopped buying it, and the tariffs came down.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in/in-6-hero.webp",
          alt: "Illustration of an oil tanker turning away from a busy Indian port at sunset, with container cranes behind.",
          caption: "Discounted Russian oil became a major source of India's imports after 2022, until the February 2026 deal.",
          credit: "Illustration — not a photograph",
          prompt: "A large oil tanker slowly turning away from a busy tropical port at sunset, container cranes and palm trees behind, small fishing boats nearby, warm orange haze, a sense of a change of course." },
        { type: "section", head: "What happened", md:
          "After Russia invaded Ukraine, India bought record amounts of discounted Russian oil, becoming one of Moscow's biggest customers. In 2025 [[unit:us]] made that a trade issue: a 25% 'reciprocal' [[tariff]] in July, and another 25% in August as a penalty for the oil, making 50% on many Indian goods, among the highest rates on any country.\n\n" +
          "On 2 February 2026, after a call between Modi and Trump, the two announced a deal. The US cut its tariffs to 18%, India agreed to stop importing Russian oil, directly or indirectly, and to lower some of its own tariffs, and promised to buy more than $500 billion of American energy, technology and farm goods." },
        { type: "section", head: "Then the rules changed again", md:
          "Weeks later, on 20 February, the US Supreme Court struck down the emergency law behind most of Trump's tariffs. The replacement tariffs that arrived in July, under Section 301, put India in the lower tier, at 10%. Relations warmed: a new US ambassador, Sergio Gor, arrived in January, Modi and Trump spoke every month and met at the G7 in June, and senior American officials visited Delhi." },
        { type: "facts", head: "The tariff path", rows: [
          ["July 2025", "25% 'reciprocal' tariff announced"],
          ["August 2025", "Another 25% for Russian oil: 50% in total"],
          ["February 2026", "Deal cuts the rate to 18%"],
          ["July 2026", "Section 301 tariff of 10% replaces it"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Washington wanted to cut Russia's oil income and open India's heavily protected markets. India wanted relief from tariffs that threatened exporters of textiles, jewellery and shrimp, and to keep the US, its largest export market, as a partner against [[unit:cn]].\n\n" +
          "The price was part of India's cherished 'strategic autonomy'. Its critics at home called the deal a surrender to American pressure; the government said it secured the best terms of any major economy." },
        { type: "compare", head: "Two readings",
          left: { head: "The case for the deal", md:
            "India swapped discounted oil for lower tariffs, secure access to its biggest export market and a closer partner against China. Oil can be bought elsewhere; markets and technology are harder to replace." },
          right: { head: "The case against", md:
            "India let Washington dictate whom it trades with, lost cheap energy, and promised enormous purchases. It sets a precedent that tariffs can bend Indian foreign policy." } },
        { type: "section", head: "What's next", md:
          "India still depends on Russia for much of its military hardware, from fighter jets to the S-400 air-defence systems it used in May 2025, and keeps close political ties with Moscow. Watch whether it sticks to the oil pledge, how the Section 301 tariffs evolve, and whether a fuller trade agreement is signed. Washington also wants India to buy more American weapons and open its farm and dairy markets, long a red line for Delhi because hundreds of millions of Indians depend on farming." }
      ],
      takeaways: [
        "US tariffs on Indian goods reached 50% in August 2025, partly as a penalty for buying Russian oil.",
        "A February 2026 deal cut them to 18% in return for India ending Russian oil purchases.",
        "After the Supreme Court's ruling, India now faces a lower 10% Section 301 tariff, and relations have warmed."
      ],
      check: { q: "What did India agree to in the February 2026 deal with the US?",
        choices: ["Join NATO", "Stop importing Russian oil", "Leave BRICS"], answer: 1,
        explain: "India agreed to stop importing Russian oil and to buy more than $500 billion of US goods; the US cut its tariffs from 50% to 18%." },
      sources: [
        { title: "Trump cuts India tariffs to 18% as Modi agrees to stop buying Russian oil", publisher: "Al Jazeera", url: "https://www.aljazeera.com/economy/2026/2/2/trump-to-slash-us-tariffs-on-india-from-50-percent-to-18-percent", date: "2026-02-02" },
        { title: "The Trump-Modi Trade Deal Won't Magically Restore U.S.-India Trust", publisher: "Carnegie Endowment", url: "https://carnegieendowment.org/emissary/2026/02/india-us-trade-deal-tariffs-trump-modi-relationship", date: "2026-02" },
        { title: "The Trump administration's view of the US–India relationship", publisher: "IISS", url: "https://www.iiss.org/online-analysis/online-analysis/2026/04/the-trump-administrations-view-of-the-usindia-relationship/", date: "2026-04" },
        { title: "USTR finalizes Section 301 forced labor tariffs on 60 economies", publisher: "EY Tax News", url: "https://taxnews.ey.com/news/2026-1607-ustr-finalizes-section-301-forced-labor-tariffs-on-60-economies-additional-tariffs-of-10-percent-or-125-percent-take-effect-24-july-2026", date: "2026-07" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "in-7", kind: "story", asOf: "2026-09-28",
      title: "The 2026 state elections",
      dek: "The BJP finally won West Bengal, a film star took Tamil Nadu, and the fight over India's voter lists turned into a fight over its democracy.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in/in-7-hero.webp",
          alt: "Illustration of a line of women in bright saris queuing outside a village polling booth, one holding up an ink-marked finger, seen from behind.",
          caption: "A voter's ink-marked finger, India's badge of having voted. Five states and territories voted in April 2026.",
          credit: "Illustration — not a photograph",
          prompt: "A line of women in brightly coloured saris queuing outside a small village school used as a polling booth, one woman seen from behind raising a finger marked with dark ink, dusty road, midday sun, no legible signs." },
        { type: "section", head: "What happened", md:
          "Five states and territories voted in April 2026, with results on 4 May, and several upended their politics:\n\n" +
          "- **West Bengal:** the BJP won 207 of 294 seats, ending 15 years of rule by Mamata Banerjee's Trinamool Congress. Suvendu Adhikari, who beat Banerjee in her own seat, became the state's first BJP chief minister.\n" +
          "- **Tamil Nadu:** Vijay's TVK, founded only two years earlier, won 108 of 234 seats, ending the long rotation between the two Dravidian parties. He was sworn in as chief minister on 10 May after days of bargaining for support.\n" +
          "- **Kerala:** the Congress-led front won 102 seats and ousted the Communist-led government.\n" +
          "- **Assam:** the BJP won a third term." },
        { type: "section", head: "Bihar first", md:
          "The year's run of elections began in November 2025 in Bihar, one of India's poorest and most populous states. The NDA won 202 of 243 seats, with the BJP taking 89 and its ally Nitish Kumar's party 85, and Kumar was sworn in as chief minister for a record tenth time. The opposition alliance, which had hoped to ride anger over jobs and prices, was routed." },
        { type: "section", head: "The fight over the voter lists", md:
          "Before the votes, the Election Commission ran a Special Intensive Revision (SIR) of voter lists, removing duplicate, dead and ineligible voters. Rahul Gandhi and other opposition leaders say it was used to strike genuine voters, especially poor and Muslim ones, from the rolls, and accuse the BJP and the commission of 'vote chori', vote theft.\n\n" +
          "The commission and the BJP deny it. In September 2026 a newspaper report said two of the three election commissioners had formally objected to parts of the process; the commission said its decisions were unanimous." },
        { type: "compare", head: "The voter-list argument",
          left: { head: "The commission and the BJP", md:
            "Rolls were full of dead, duplicate and ineligible names, including illegal migrants. Cleaning them up protects every genuine vote, and any wrongly removed voter can appeal." },
          right: { head: "The opposition", md:
            "The revision was rushed, demanded documents poor people don't have, and removed large numbers of real voters in opposition areas. An election body that won't be transparent can't be trusted." } },
        { type: "section", head: "Why it matters", md:
          "West Bengal had been one of the BJP's great failures, a large state it could never crack; winning it shows how far the party's appeal has spread beyond its northern heartland. Yet Kerala and Tamil Nadu show that the south still resists it, and Vijay's win shows how fast a new regional force can rise.\n\n" +
          "The voter-list fight matters beyond any single state. Trust in the Election Commission has been one of the strengths of Indian democracy." },
        { type: "section", head: "What's next", md:
          "The BJP is building toward the next general election, due by 2029, and the opposition toward a nationwide argument about fairness. Watch the commission's next revisions, court challenges to them, and the 2027 votes in Uttar Pradesh, India's most populous state." }
      ],
      takeaways: [
        "In May 2026 the BJP won West Bengal for the first time, while opposition parties won Kerala and Tamil Nadu.",
        "Film star Vijay's new party ended half a century of two-party rule in Tamil Nadu.",
        "The opposition accuses the Election Commission of 'vote chori' in its voter-list revision; the commission denies it."
      ],
      check: { q: "Who became West Bengal's first BJP chief minister in 2026?",
        choices: ["Mamata Banerjee", "Suvendu Adhikari", "Amit Shah"], answer: 1,
        explain: "Suvendu Adhikari, a former Trinamool leader who defected to the BJP, won the state and beat Mamata Banerjee in her own constituency." },
      sources: [
        { title: "India's 2026 State Elections: Upsets in Tamil Nadu and West Bengal", publisher: "ISAS, National University of Singapore", url: "https://www.isas.nus.edu.sg/papers/indias-2026-state-elections-upsets-in-tamil-nadu-and-west-bengal/", date: "2026-05" },
        { title: "Suvendu sworn in as chief minister of West Bengal", publisher: "The Daily Star", url: "https://www.thedailystar.net/news/asia/india/news/suvendu-sworn-chief-minister-west-bengal-4171876", date: "2026-05-09" },
        { title: "Indian Film Star Vijay Sworn In as Tamil Nadu Chief Minister", publisher: "Variety", url: "https://variety.com/2026/politics/news/vijay-sworn-in-tamil-nadu-chief-minister-1236742532/", date: "2026-05-10" },
        { title: "Assembly Elections 2026 Results", publisher: "Outlook India", url: "https://www.outlookindia.com/elections/assembly-elections-2026-results-live-updates-kerala-west-bengal-tamil-nadu-assam-puducherry-2", date: "2026-05-04" },
        { title: "Rahul Gandhi Links 'Vote Chori' To 'Kanoon Chori'", publisher: "The Hans India", url: "https://www.thehansindia.com/news/national/rahul-gandhi-links-vote-chori-to-kanoon-chori-demands-cecs-resignation-1125313", date: "2026-09" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "in-12", kind: "spotlight", asOf: "2026-09-28",
      title: "Caste and reservations",
      dek: "An ancient hierarchy still shapes marriage, jobs and votes. India's answer, quotas for disadvantaged groups, is among the largest affirmative-action systems in the world.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in/in-12-hero.webp",
          alt: "Illustration of a long queue of students seen from behind outside a university building with arches, holding folders, in bright morning light.",
          caption: "Places in universities and government jobs are allocated partly by caste-based quotas.",
          credit: "Illustration — not a photograph",
          prompt: "A long queue of young students seen from behind holding folders outside a colonial-style university building with arches and a clock tower, bright morning light, hopeful and crowded, no faces, no legible text." },
        { type: "facts", head: "Reservations in brief", rows: [
          ["Scheduled Castes (Dalits)", "About 17% of the population; 15% quota"],
          ["Scheduled Tribes (Adivasis)", "About 9%; 7.5% quota"],
          ["Other Backward Classes", "27% quota since the Mandal reforms (1990s)"],
          ["Economically weaker sections", "10% quota for poorer upper castes (2019)"],
          ["Supreme Court cap", "Generally 50% overall, with exceptions"]
        ] },
        { type: "section", head: "What caste is", md:
          "Caste is a system of hereditary social groups, thousands of jatis loosely grouped under four varnas, with Dalits, once called 'untouchables', treated as outside and beneath them. For centuries it governed whom people could marry, what work they could do and even where they could draw water. It is rooted in Hindu tradition but is found among Muslims, Christians and Sikhs in India too. The Constitution abolished untouchability in 1950, but caste identity remains powerful: most marriages are still within caste, and violence against Dalits is regularly reported." },
        { type: "section", head: "Quotas from the start", md:
          "The Constitution's framers, led by the Dalit leader B. R. Ambedkar, built in 'reservations': shares of seats in legislatures, government jobs and public universities for Scheduled Castes and Scheduled Tribes. It was one of the earliest affirmative-action systems anywhere. Over the decades it created a Dalit and tribal middle class and a generation of political leaders, including presidents of India." },
        { type: "section", head: "Mandal and the backward classes", md:
          "In 1990 Prime Minister V. P. Singh implemented the recommendations of the Mandal Commission, reserving 27% of central government jobs for 'Other Backward Classes', a large set of intermediate castes. Upper-caste students protested furiously, and some set themselves on fire. The Supreme Court upheld the quotas but capped total reservations at 50%. 'Mandal politics' transformed northern India, lifting parties built on backward-caste votes, while the BJP's Ayodhya temple campaign of the same years mobilised Hindus across castes." },
        { type: "section", head: "Today's battles", md:
          "Caste is now at the centre of politics again. Groups such as the Marathas and Jats have demanded to be classified as backward; in 2019 the Modi government added a 10% quota for poorer members of upper castes. The opposition has called for a national caste census, the first since 1931, to redistribute quotas by population, and in 2025 the government agreed to count caste in the next census, due to begin in 2026–27." },
        { type: "compare", head: "Two views",
          left: { head: "Supporters", md:
            "Reservations are essential redress for centuries of exclusion, and they have worked: representation of Dalits and tribal groups has risen sharply." },
          right: { head: "Critics", md:
            "Quotas entrench caste identity, benefit a better-off 'creamy layer' within each group, and should be based on income instead." } },
        { type: "section", head: "Why it matters", md:
          "Caste arithmetic decides elections in states such as Uttar Pradesh and Bihar, and the coming caste count could reopen fights over how opportunity is shared in a country of 1.4 billion people. If the count shows backward castes are far more numerous than their quotas suggest, pressure to break the 50% cap will grow." }
      ],
      takeaways: [
        "Caste is a hereditary social hierarchy that still shapes marriage, work and politics despite being outlawed in 1950.",
        "India reserves seats, jobs and university places for Dalits, tribal groups and other backward classes.",
        "The next census, due to begin in 2026–27, will count caste for the first time since 1931."
      ],
      check: { q: "What did the Mandal Commission reforms of 1990 do?",
        choices: ["Abolished caste", "Reserved 27% of central government jobs for 'Other Backward Classes'", "Ended all quotas"], answer: 1,
        explain: "V. P. Singh's government extended reservations to intermediate castes, setting off protests and reshaping politics." },
      sources: [
        { title: "Caste", publisher: "Britannica", url: "https://www.britannica.com/topic/caste-social-differentiation", date: "n.d." },
        { title: "Dalit", publisher: "Britannica", url: "https://www.britannica.com/topic/Dalit", date: "n.d." },
        { title: "Cabinet approves caste enumeration in the upcoming Census", publisher: "Press Information Bureau, Government of India", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2125526&reg=48&lang=2", date: "2025-04-30" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "in-8", kind: "now", asOf: "2026-09-28",
      title: "Where things stand",
      dek: "Courted by everyone: warmer with Washington, thawing with Beijing, frozen with Pakistan, and a fight at home over who gets to vote.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in/in-8-hero.webp",
          alt: "Illustration of New Delhi's grand ceremonial avenue at dusk with a sandstone arch in the distance and government buildings lit up.",
          caption: "India chairs BRICS in 2026 and hosted its summit in September, with Xi Jinping among the guests.",
          credit: "Illustration — not a photograph",
          prompt: "A grand ceremonial avenue in a South Asian capital at dusk, a tall sandstone memorial arch in the distance, red sandstone government buildings with domes lit in warm light, lawns and fountains, no people close up, no legible signs." },
        { type: "section", head: "The state of play", md:
          "- **Washington:** a 10% Section 301 tariff on most goods after the February deal and the Supreme Court ruling; Modi and Trump speaking monthly.\n" +
          "- **Beijing:** a steady thaw since Modi's visit to Tianjin in August 2025; direct flights restored; Modi and Xi met again at the BRICS summit in India in September 2026 and pledged to settle the border 'fairly'.\n" +
          "- **Pakistan:** no talks, no trade, and the water treaty suspended despite a Hague ruling.\n" +
          "- **Moscow:** arms ties intact; oil purchases ended under the US deal.\n" +
          "- **Economy:** growth of 6–7%, the fastest of any large economy.\n" +
          "- **The Iran war:** higher oil prices, and worry for the millions of Indians who live and work in the Gulf states.\n" +
          "- **At home:** the BJP strengthened by West Bengal, the opposition by Kerala and Tamil Nadu, and a bitter fight over voter lists." },
        { type: "section", head: "Three scenarios", md:
          "- **The balancer succeeds.** India keeps tariffs low with the US, eases tension with China and keeps Russia close for arms, while growing near 7% a year and drawing factories that want an alternative to China.\n" +
          "- **Squeezed.** A new US–China crisis or renewed US pressure forces India to choose sides, and its autonomy narrows.\n" +
          "- **Conflict.** Another major terror attack triggers a new clash with [[unit:pk]], this time with water as well as weapons in play." },
        { type: "section", head: "What to look for", md:
          "Watch three things. First, trade: whether the US and India turn their February deal into a fuller agreement, and whether India keeps its promise on Russian oil. Second, China: whether the border talks agreed at the BRICS summit produce more pullbacks by troops in the Himalayas. Third, Pakistan: whether the ceasefire holds, and whether India does anything with the water it is now free to hold back. At home, watch the courts: challenges to the voter-list revision could shape how the next national election is run." },
        { type: "section", head: "The census and the map", md:
          "India's census, delayed since 2021, is due to count the population in 2027, including caste for the first time in nearly a century. Separately, a 2026 bill would redraw parliamentary seats by population, giving fast-growing northern states such as Uttar Pradesh and Bihar more seats. The north is where the BJP is strongest, and southern states fear losing influence. It is likely to be one of the biggest political fights of the decade." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Autumn 2026:** follow-up US–India trade talks; courts on the voter-list revision\n" +
          "- **Early 2027:** Uttar Pradesh and other state elections\n" +
          "- **2027:** the census count, including caste\n" +
          "- **By 2029:** the next general election" },
        { type: "section", head: "Connections", md:
          "Look for India in [[unit:pk]] (its rival), [[unit:cn]] (its neighbour and competitor), [[unit:us]] (tariffs and partnership), [[unit:ru]] (arms and, until 2026, oil), [[unit:ir]] and [[unit:sa]] (energy and the Gulf) and [[unit:jp]] and [[unit:au]] (Quad partners)." }
      ],
      takeaways: [
        "India has patched up ties with the US and is thawing with China while keeping Russia close.",
        "Relations with Pakistan are frozen, with the Indus Waters Treaty still suspended.",
        "A census count in 2027 and a redraw of parliament's seats could shift power toward the north."
      ],
      check: { q: "Which grouping did India chair in 2026, hosting its summit in September?",
        choices: ["The G7", "BRICS", "NATO"], answer: 1,
        explain: "India chairs BRICS in 2026. Xi Jinping attended the summit, where he and Modi pledged a fair settlement of the border." },
      sources: [
        { title: "Indian Prime Minister Modi says border peace is key to India-China ties", publisher: "CNBC", url: "https://www.cnbc.com/2026/09/12/india-china-modi-xi-brics-border.html", date: "2026-09-12" },
        { title: "India, China Take Small Step Forward Toward Border Settlement", publisher: "The Diplomat", url: "https://thediplomat.com/2026/09/india-china-take-small-step-forward-toward-border-settlement/", date: "2026-09" },
        { title: "Trump-Modi bromance back on display in meeting on sidelines of G7", publisher: "CNBC", url: "https://www.cnbc.com/2026/06/18/trump-modi-bromance-display-g7.html", date: "2026-06-18" },
        { title: "The Delimitation Bill, 2026", publisher: "PRS Legislative Research", url: "https://prsindia.org/billtrack/the-delimitation-bill-2026", date: "2026" }
      ]
    }
  ]
});
