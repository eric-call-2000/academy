/* ============================================================
   Unit 21 — Pakistan 🇵🇰
   Research note and sources: tools/research/pk.md
   Current as of 29 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("pk", {
  id: "pk",
  asOf: "2026-09-29",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "pk-1", kind: "snapshot", asOf: "2026-09-29",
      title: "Pakistan in brief",
      dek: "A nuclear-armed nation of 250 million where the army runs the show, a jailed former prime minister is the most popular politician, and the Iran war made it a peacemaker.",
      blocks: [
        { type: "map", src: "maps/pk.svg",
          alt: "Locator map of South Asia with Pakistan highlighted, bordering Iran, Afghanistan, China and India, with the Arabian Sea to the south, and a small globe showing its place in the world.",
          caption: "Pakistan as it administers its territory, including Azad Jammu and Kashmir and Gilgit-Baltistan in the north-east, parts of the former princely state of Kashmir that India claims. India administers the rest of Kashmir, which Pakistan claims; the line of control between them is drawn as the data has it.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Islamabad (largest city: Karachi)"],
          ["People", "About 250 million, the world's fifth-largest population"],
          ["System", "Parliamentary republic; the army holds decisive power"],
          ["Army chief", "Field Marshal Asim Munir, also Chief of Defence Forces"],
          ["Prime minister", "Shehbaz Sharif (PML-N), since March 2024"],
          ["President", "Asif Ali Zardari (PPP)"],
          ["Nuclear weapons", "Since 1998"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Pakistan has the world's fifth-largest population, nuclear weapons, and a rivalry with [[unit:in|India]] that erupted into four days of air and missile war in May 2025. It borders Afghanistan, Iran and [[unit:cn|China]], its closest ally, which has invested tens of billions of dollars in roads, power plants and a port.\n\n" +
          "In 2026 it became something new: the go-between who brokered the 8 April ceasefire between [[unit:us|the United States]] and [[unit:ir|Iran]] and hosted their talks in Islamabad. Its army chief is now one of the most courted figures in world politics." },
        { type: "section", head: "Who holds power", md:
          "On paper Pakistan is a parliamentary democracy led by Prime Minister Shehbaz Sharif. In practice, the army, known as 'the establishment', is the dominant institution, and has been for most of the country's history. Field Marshal Asim Munir, army chief since 2022, was given new powers in November 2025 as Chief of Defence Forces, with command of all three services and the nuclear arsenal, and lifelong legal immunity." },
        { type: "section", head: "The mood in 2026", md:
          "Pakistan's leaders are riding high abroad, with warm ties to Trump, a defence pact with [[unit:sa|Saudi Arabia]] and a starring role in the Iran talks. At home the picture is darker: militant attacks have surged, fighting has flared on the Afghan border, the economy depends on an IMF programme, and the most popular politician, former prime minister Imran Khan, has been in prison since 2023." },
        { type: "section", head: "A young country", md:
          "Around two-thirds of Pakistanis are under 30, and the population grows by several million a year. Millions of young people struggle to find work, and many emigrate to the Gulf, Britain and beyond; their remittances are one of the economy's biggest sources of foreign money. Floods, heatwaves and water shortages, made worse by climate change, hit the country hard: the 2022 floods submerged a third of it." },
        { type: "section", head: "Four provinces", md:
          "Pakistan is a federation of four provinces with distinct languages and identities. Punjab, with more than half the population, dominates politics and the army. Sindh, home to Karachi, is the PPP's base. Khyber Pakhtunkhwa, bordering Afghanistan, is Imran Khan's stronghold and the centre of militant violence. Balochistan, the largest and poorest, has a long-running separatist insurgency." },
        { type: "section", head: "What Pakistan wants", md:
          "Pakistan's government and army want security on the Indian and Afghan borders, an end to militant attacks, economic stability and investment, and a bigger international role. They also want India to restore the Indus Waters Treaty, which it suspended in 2025, and a resolution of the Kashmir dispute on terms Pakistan can accept." },
        { type: "callout", tone: "why", md:
          "Pakistan is a nuclear state with a young, fast-growing population, a fragile economy and a hostile neighbour. Its stability matters to South Asia, the Gulf and beyond, and its army's choices shape all of it." }
      ],
      takeaways: [
        "Pakistan has about 250 million people and nuclear weapons; its army is the most powerful institution.",
        "Field Marshal Asim Munir gained new powers as Chief of Defence Forces in November 2025.",
        "Pakistan brokered the April 2026 US–Iran ceasefire, while militancy and Imran Khan's jailing dominate at home."
      ],
      check: { q: "Who is Pakistan's most powerful figure?",
        choices: ["President Zardari", "Field Marshal Asim Munir, the army chief", "Imran Khan"], answer: 1,
        explain: "Munir heads the army, the dominant institution, and since November 2025 is also Chief of Defence Forces." },
      sources: [
        { title: "India to Iran: How two wars shaped the rise of Pakistan's Asim Munir", publisher: "Al Jazeera", url: "https://www.aljazeera.com/features/2026/4/23/india-to-iran-how-two-wars-shaped-the-rise-of-pakistans-asim-munir", date: "2026-04-23" },
        { title: "How Pakistan Became the Iran War's Unlikely Peace Negotiator", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/articles/how-pakistan-became-the-iran-wars-unlikely-peace-negotiator", date: "2026" },
        { title: "Pakistan's 27th constitutional amendment moves it one step closer to authoritarian rule", publisher: "Chatham House", url: "https://www.chathamhouse.org/2025/12/pakistans-27th-constitutional-amendment-moves-it-one-step-closer-authoritarian-rule", date: "2025-12" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "pk-2", kind: "power", asOf: "2026-09-29",
      title: "A 'hybrid' system",
      dek: "Elected governments come and go; the army stays. Two constitutional amendments have now written its supremacy into law.",
      blocks: [
        { type: "diagram", src: "img/pk/pk-2-power.svg",
          alt: "Diagram of power in Pakistan. Voters elect the National Assembly and provincial assemblies. The army, led by Field Marshal Asim Munir, Chief of Defence Forces since 2025, commands the nuclear arsenal and has the final say on security and foreign policy. It backs Prime Minister Shehbaz Sharif, who leads a PML-N-led coalition and runs the economy and the IMF deal, with President Asif Ali Zardari, who is largely ceremonial and signs laws and amendments. The courts were reshaped in 2024–25 with a new Federal Constitutional Court and government control of appointments. The opposition is Imran Khan's PTI, whose leader has been in jail since 2023.",
          caption: "Elected civilians govern, but the army decides the big questions.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The formal system", md:
          "Pakistan's 1973 constitution sets up a parliamentary republic. The National Assembly, with 336 seats, elects the prime minister; the Senate represents the four provinces, Punjab, Sindh, Khyber Pakhtunkhwa and Balochistan, which have their own elected governments. The president, elected by parliament and the provincial assemblies, is largely ceremonial." },
        { type: "section", head: "The establishment", md:
          "The army has ruled Pakistan directly for more than 30 of its 79 years, after coups in 1958, 1977 and 1999, and has shaped politics from behind the scenes the rest of the time. Pakistanis call the arrangement 'hybrid': civilian governments manage the economy and daily affairs, while the army and its intelligence agency, the ISI, control defence, foreign policy toward India, Afghanistan and the United States, and often decide who governs. No prime minister has ever completed a full five-year term." },
        { type: "section", head: "The 26th and 27th amendments", md:
          "Two constitutional amendments passed by the ruling coalition have reshaped the state. The 26th, in October 2024, gave a parliamentary committee the power to choose the chief justice. The 27th, rushed through in November 2025, created a Federal Constitutional Court to take over constitutional cases from the Supreme Court, expanded the government's control of judicial appointments, created the post of Chief of Defence Forces for the army chief, and granted the president and the heads of the armed forces with five-star rank lifelong immunity from prosecution. Removing the Chief of Defence Forces requires a two-thirds vote of parliament; removing an elected prime minister needs only a simple majority." },
        { type: "section", head: "Parties", md:
          "The two traditional parties are dynasties: the Pakistan Muslim League (Nawaz), led by the Sharif brothers, and the Pakistan Peoples Party, led by the Bhutto-Zardari family. Imran Khan's Pakistan Tehreek-e-Insaf (PTI) broke their dominance in 2018. In the February 2024 election, candidates backed by the PTI, forced to run as independents, won the most seats, but the PML-N and PPP formed the government. The PTI says the vote was rigged; the government and election commission deny it." },
        { type: "section", head: "Courts and media", md:
          "Pakistan's courts have at times defied the army and governments, disqualifying prime ministers and freeing opponents. The recent amendments have curbed that independence. Television channels face pressure over coverage of Imran Khan, and journalists who criticise the army have been harassed, detained or forced into exile, according to press-freedom groups. Social media platform X was blocked for long periods." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Its supporters", md:
            "In a dangerous neighbourhood, a strong army provides stability, and the new arrangements end the chaos of clashes between institutions." },
          right: { head: "Its critics", md:
            "The amendments dismantle judicial independence, put the army chief above the law and make elections meaningless, a view shared by many lawyers and rights groups." } }
      ],
      takeaways: [
        "The army has ruled directly for over 30 years and dominates from behind the scenes the rest of the time.",
        "The 27th Amendment (November 2025) created a Chief of Defence Forces and a new constitutional court, and gave top commanders lifelong immunity.",
        "PTI-backed candidates won the most seats in 2024, but the PML-N and PPP formed the government."
      ],
      check: { q: "What did the 27th Amendment create?",
        choices: ["A directly elected president", "A Chief of Defence Forces post and a Federal Constitutional Court", "A new province"], answer: 1,
        explain: "It created the Chief of Defence Forces post for the army chief, a Federal Constitutional Court, and lifelong immunity for top commanders." },
      sources: [
        { title: "Twenty-seventh Amendment to the Constitution of Pakistan", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Twenty-seventh_Amendment_to_the_Constitution_of_Pakistan", date: "2026" },
        { title: "Shifting the Scales: How Pakistan's 27th Amendment Undermines Judicial Independence", publisher: "ConstitutionNet", url: "https://constitutionnet.org/news/voices/shifting-scales-how-pakistans-27th-amendment-undermines-judicial-independence", date: "2025" },
        { title: "Pakistan's 27th Amendment Remakes State, Military, and Judiciary", publisher: "Centre for Strategic and Contemporary Research", url: "https://cscr.pk/explore/themes/politics-governance/pakistans-27th-amendment-remakes-state-military-and-judiciary/", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "pk-9", kind: "founding", asOf: "2026-09-29",
      title: "Jinnah and the idea of Pakistan",
      dek: "Pakistan was created in 1947 as a homeland for the Muslims of British India. What kind of state that homeland should be has been argued over ever since.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pk/pk-9-hero.webp",
          alt: "Illustration of a crowded railway platform in 1947 with a steam train packed with passengers, people in period clothing seen from behind with bundles and trunks.",
          caption: "Partition in 1947 set off one of the largest migrations in history.",
          credit: "AI illustration — not a photograph",
          prompt: "A crowded railway platform in Punjab in 1947, a steam train packed with passengers on the roof and in doorways, people in 1940s South Asian clothing seen from behind carrying bundles and trunks, dusty golden light, tense historical atmosphere, no faces, no flags, no legible text." },
        { type: "timeline", head: "From idea to state", items: [
          ["1906", "All-India Muslim League founded"],
          ["23 Mar 1940", "Lahore Resolution calls for Muslim-majority states"],
          ["11 Aug 1947", "Jinnah's speech to the Constituent Assembly"],
          ["14 Aug 1947", "Pakistan becomes independent"],
          ["11 Sep 1948", "Jinnah dies"],
          ["Mar 1949", "Objectives Resolution"],
          ["1956", "First constitution: an Islamic Republic"]
        ] },
        { type: "section", head: "Two nations?", md:
          "Under British rule, Muslims were about a quarter of India's population. Many Muslim leaders came to fear that in an independent India dominated by the Hindu-majority Congress party they would be a permanent minority. The poet-philosopher Muhammad Iqbal suggested in 1930 a Muslim state in the northwest. The 'two-nation theory' held that Hindus and Muslims were separate nations, and on 23 March 1940, in Lahore, the Muslim League demanded independent states in the Muslim-majority areas of the northwest and east." },
        { type: "section", head: "Jinnah", md:
          "The League's leader, Muhammad Ali Jinnah, was a Western-educated lawyer from Karachi, a former member of Congress who once called himself an ambassador of Hindu–Muslim unity. Precise and uncompromising, he became convinced that only a separate state could protect Muslims. Pakistanis call him Quaid-e-Azam, the Great Leader. After the Second World War, the League won almost all the Muslim seats in the 1945–46 elections, and talks on a united India failed." },
        { type: "section", head: "Partition", md:
          "The British decided to leave quickly. On 14 August 1947 Pakistan became independent, a day before India, in two wings a thousand miles apart: West Pakistan and East Bengal, later East Pakistan. The provinces of Punjab and Bengal were split. About 15 million people crossed the new borders, and hundreds of thousands were killed in communal violence. Karachi, the first capital, filled with refugees, and the new state began with few officials, an empty treasury and a war over Kashmir (briefing 12)." },
        { type: "section", head: "Whose Pakistan?", md:
          "On 11 August 1947 Jinnah told the Constituent Assembly: 'You are free to go to your temples... You may belong to any religion or caste or creed — that has nothing to do with the business of the state.' But he died of tuberculosis in September 1948, and his successor, Liaquat Ali Khan, was assassinated in 1951. In 1949 the Assembly's Objectives Resolution declared that sovereignty belongs to God and that Muslims should live according to Islam. The 1956 constitution made Pakistan an Islamic Republic." },
        { type: "section", head: "A fragile start", md:
          "It took nine years to agree on a constitution, and it lasted two before General Ayub Khan's coup in 1958. Deep divisions were there from the start: over whether Urdu, spoken by a small minority, should be the only national language (Bengalis, the majority, protested in 1952); over how much power the provinces should have; and over the role of the army and civil service, which dominated a weak political class. The first of those divisions would break the country in 1971 (briefing 10)." },
        { type: "compare", head: "Two readings of Jinnah",
          left: { head: "A secular Pakistan", md:
            "Jinnah wanted a modern, tolerant state where Muslims were safe, with equal rights for all; his 11 August speech is the proof." },
          right: { head: "An Islamic Pakistan", md:
            "Pakistan was made in the name of Islam; the Objectives Resolution and later Islamic laws fulfil its purpose." } },
        { type: "section", head: "Why it still matters", md:
          "Every Pakistani argument about religion, minorities and the constitution goes back to the question of what Jinnah's Pakistan was for. The Objectives Resolution now stands at the head of the constitution. Partition also created the rivalry with [[unit:in|India]], and 23 March, Pakistan Day, and 14 August remain the country's great national holidays." }
      ],
      takeaways: [
        "The Muslim League, led by Jinnah, demanded a separate homeland for India's Muslims from 1940.",
        "Pakistan became independent on 14 August 1947, in two wings, amid the violence of partition.",
        "Pakistanis still argue over whether Jinnah wanted a secular state for Muslims or an Islamic one."
      ],
      check: { q: "What did the Lahore Resolution of 1940 demand?",
        choices: ["A united India with Muslim reserved seats", "Independent states for the Muslim-majority areas", "Dominion status within the British Empire"], answer: 1,
        explain: "The Muslim League called for independent states in the Muslim-majority northwest and east." },
      sources: [
        { title: "Mohammed Ali Jinnah", publisher: "Britannica", url: "https://www.britannica.com/biography/Mohammed-Ali-Jinnah", date: "n.d." },
        { title: "Partition of India", publisher: "Britannica", url: "https://www.britannica.com/event/Partition-of-India", date: "n.d." },
        { title: "Pakistan: From disunion through the Zia-ul-Haq era", publisher: "Britannica", url: "https://www.britannica.com/place/Pakistan/From-disunion-through-the-Zia-ul-Haq-era", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "pk-3", kind: "history", asOf: "2026-09-29",
      title: "Partition, coups and the bomb",
      dek: "A country born in bloodshed, split in two, ruled by generals, and armed with nuclear weapons.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pk/pk-3-hero.webp",
          alt: "Illustration of a crowded railway platform in 1947 with families carrying bundles and a steam train packed with people on the roof.",
          caption: "Partition in 1947 displaced about 15 million people and killed hundreds of thousands.",
          credit: "AI illustration — not a photograph",
          prompt: "A crowded railway platform in 1947, families seen from behind carrying bundles and trunks, a steam train packed with people including on its roof, dust and smoke, sepia and muted colours, sorrow and upheaval, no legible text, no faces in close-up." },
        { type: "timeline", head: "The short version", items: [
          ["1947", "Independence and Partition from British India"],
          ["1958", "First military coup"],
          ["1971", "War; East Pakistan becomes Bangladesh"],
          ["1977–88", "General Zia's military rule"],
          ["1998", "Nuclear tests"],
          ["1999–2008", "General Musharraf's rule"],
          ["2022", "Imran Khan ousted by a no-confidence vote"]
        ] },
        { type: "section", head: "1. Partition (1947)", md:
          "Pakistan was created in August 1947 as a homeland for the Muslims of British India, led by Muhammad Ali Jinnah. Partition was catastrophic: about 15 million people crossed the new borders, and hundreds of thousands were killed in communal violence. The princely state of Kashmir, with a Muslim majority and a Hindu ruler, was contested from the start; Pakistan and [[unit:in|India]] fought over it in 1947–48 and again in 1965." },
        { type: "section", head: "2. Generals and the loss of the East", md:
          "Pakistan's first decade of fragile democracy ended with General Ayub Khan's coup in 1958. The country had two wings separated by India, and West Pakistan dominated the Bengali-speaking East. In 1971 a brutal army crackdown in the East triggered a war in which India intervened; East Pakistan became independent Bangladesh. The defeat still shapes the army's view of India." },
        { type: "section", head: "3. Bhutto, Zia and the jihad years", md:
          "Zulfikar Ali Bhutto, a populist civilian leader, launched the nuclear programme; General Zia-ul-Haq overthrew him in 1977 and had him hanged in 1979. Zia Islamised the law and, with American and Saudi money, backed the Afghan mujahideen against the Soviet occupation. That war left a legacy of militant groups, some of which the state later used in Kashmir and Afghanistan." },
        { type: "section", head: "4. Democracy, the bomb and Musharraf", md:
          "In the 1990s Benazir Bhutto and Nawaz Sharif alternated in power, each dismissed before finishing a term. In May 1998, weeks after India's tests, Pakistan tested nuclear weapons. In 1999 General Pervez Musharraf seized power. After 9/11 he allied with the United States in Afghanistan while parts of the state kept ties with the Taliban. Benazir Bhutto was assassinated in 2007, and Musharraf stepped down in 2008." },
        { type: "section", head: "The war on terror at home", md:
          "After 2001 Pakistan fought its own Taliban insurgency, which killed tens of thousands of civilians and soldiers. In 2014 militants massacred more than 140 people, most of them children, at an army school in Peshawar, prompting a major offensive. Violence fell for several years, before rising again after the Taliban took power in Afghanistan in 2021." },
        { type: "section", head: "5. Imran Khan's rise and fall", md:
          "Imran Khan, a former cricket captain, won the 2018 election, widely seen as backed by the army. His relations with the generals broke down, and in April 2022 he was ousted by a parliamentary no-confidence vote. He accused the army and the United States of conspiring against him, drew huge crowds, and was arrested in 2023. After his arrest in May 2023, supporters attacked military sites, leading to a sweeping crackdown on his party." }
      ],
      takeaways: [
        "Pakistan was born in the violence of Partition in 1947; Kashmir has been disputed with India ever since.",
        "The army has seized power three times, and the country lost its eastern wing, now Bangladesh, in 1971.",
        "Pakistan tested nuclear weapons in 1998; Imran Khan, elected in 2018, was ousted in 2022 and jailed in 2023."
      ],
      check: { q: "What did East Pakistan become in 1971?",
        choices: ["Bangladesh", "Afghanistan", "Kashmir"], answer: 0,
        explain: "After a brutal crackdown and war, East Pakistan became the independent state of Bangladesh in 1971." },
      sources: [
        { title: "Pakistan profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-south-asia-12966786", date: "n.d." },
        { title: "Pakistan", publisher: "Britannica", url: "https://www.britannica.com/place/Pakistan", date: "n.d." },
        { title: "2022–2025 Pakistan political unrest", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2022%E2%80%932025_Pakistan_political_unrest", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "pk-10", kind: "past", asOf: "2026-09-29",
      title: "1971: the country splits",
      dek: "When West Pakistan's rulers refused to hand power to the party that won the 1970 election, a crackdown in the East led to war and the birth of Bangladesh.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pk/pk-10-hero.webp",
          alt: "Illustration of a wide river delta in Bengal at dusk with country boats and a line of refugees walking along an embankment, seen from behind.",
          caption: "About ten million people fled East Pakistan to India in 1971.",
          credit: "AI illustration — not a photograph",
          prompt: "A wide river delta landscape in Bengal at dusk, wooden country boats on the water, a long line of refugees in 1970s clothing walking along a muddy embankment seen from behind, carrying bundles, monsoon clouds, muted and sorrowful, no faces, no weapons, no legible text." },
        { type: "timeline", head: "The road to 1971", items: [
          ["1952", "Language protests in Dhaka"],
          ["Dec 1970", "Awami League wins a majority in Pakistan's election"],
          ["25 Mar 1971", "Operation Searchlight: army crackdown in the East"],
          ["26 Mar 1971", "Bangladesh's independence declared"],
          ["3 Dec 1971", "Full war between India and Pakistan"],
          ["16 Dec 1971", "Pakistani forces surrender in Dhaka"]
        ] },
        { type: "section", head: "Two wings", md:
          "East Pakistan had more people than the West, but power, the army and most investment were in the West. Bengalis resented attempts to make Urdu the sole national language, which led to deadly protests in Dhaka in 1952, and the flow of money from the East's jute exports to the West. A devastating cyclone in November 1970, which killed hundreds of thousands, and the government's slow response, deepened the anger." },
        { type: "section", head: "The election", md:
          "In December 1970 Pakistan held its first general election based on universal adult franchise. Sheikh Mujibur Rahman's Awami League, campaigning for autonomy for the East, won almost every seat there and an overall majority in the National Assembly. Zulfikar Ali Bhutto's Pakistan Peoples Party won in the West. The military ruler, General Yahya Khan, and Bhutto were unwilling to let Mujib govern. Talks failed, and the Assembly never met." },
        { type: "section", head: "Crackdown and war", md:
          "On the night of 25 March 1971 the army launched Operation Searchlight in Dhaka, attacking students, intellectuals, police and Hindus; Mujib was arrested and flown west. Over the following months soldiers and allied militias carried out mass killings and sexual violence on a vast scale. About ten million refugees fled to India. Bengali fighters, the Mukti Bahini, trained and armed by India, fought back. In December India invaded, and on 16 December 1971 the Pakistani commander in Dhaka surrendered with about 90,000 troops." },
        { type: "facts", head: "The toll", rows: [
          ["Dead", "Estimates from 300,000 to 3 million (Bangladesh's official figure)"],
          ["Refugees to India", "About 10 million"],
          ["Prisoners of war", "About 90,000 Pakistanis"],
          ["Result", "Bangladesh independent; Bhutto takes over what remained of Pakistan"]
        ] },
        { type: "section", head: "Reckoning", md:
          "Yahya Khan resigned and Bhutto took over the smaller Pakistan. A government inquiry, the Hamoodur Rahman Commission, criticised the army's conduct, but its report was kept secret for nearly thirty years and no one was prosecuted in Pakistan. Bangladesh has put to death several Bengali collaborators after trials widely criticised for their procedures. Pakistan's official history tends to stress Indian intervention and Bengali militia violence against non-Bengalis, which also cost many lives." },
        { type: "compare", head: "Two memories of 1971",
          left: { head: "Bangladesh", md:
            "A genocide by the Pakistani army, followed by a war of liberation; Pakistan should formally apologise." },
          right: { head: "Pakistan's official view", md:
            "A civil conflict turned into defeat by Indian aggression, with atrocities on all sides; the numbers are exaggerated." } },
        { type: "section", head: "Why it still matters", md:
          "Losing half the country in 1971 shaped Pakistan's army and its fear of Indian encirclement, and gave urgency to the nuclear programme Bhutto started soon afterwards (briefing 3). It also showed the cost of denying a majority its vote, a lesson Pakistani democrats still invoke. Relations with Bangladesh warmed after its government fell in 2024, but the demand for an apology remains." }
      ],
      takeaways: [
        "East Pakistan was more populous but dominated by the West, and its resentment grew over language and money.",
        "After the Awami League won the 1970 election, the army cracked down, killing huge numbers of people.",
        "India intervened, and Pakistani forces surrendered on 16 December 1971; Bangladesh became independent."
      ],
      check: { q: "What triggered the 1971 crisis?",
        choices: ["A border war with China", "The refusal to hand power to the Awami League after it won the 1970 election", "The assassination of Jinnah"], answer: 1,
        explain: "The Awami League won a majority, but the military and West Pakistan's leaders would not let it govern." },
      sources: [
        { title: "Bangladesh Liberation War", publisher: "Britannica", url: "https://www.britannica.com/event/Bangladesh-Liberation-War", date: "n.d." },
        { title: "1971 India-Pakistan War", publisher: "Britannica", url: "https://www.britannica.com/event/1971-India-Pakistan-War", date: "n.d." },
        { title: "Bangladesh: The Pakistani period, 1947–71", publisher: "Britannica", url: "https://www.britannica.com/place/Bangladesh/The-Pakistani-period-1947-71", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "pk-11", kind: "past", asOf: "2026-09-29",
      title: "Zia, Islamisation and the Afghan jihad",
      dek: "General Zia-ul-Haq ruled for eleven years, remade Pakistan's laws in the name of Islam and turned it into the base for the war against the Soviets in Afghanistan.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pk/pk-11-hero.webp",
          alt: "Illustration of a rugged mountain pass on the Pakistan–Afghanistan frontier with a line of pack mules and men in shawls seen from behind.",
          caption: "Supplies for the Afghan mujahideen flowed across Pakistan's frontier in the 1980s.",
          credit: "AI illustration — not a photograph",
          prompt: "A rugged dry mountain pass on the Pakistan–Afghanistan frontier in the 1980s, a line of pack mules and men wrapped in woollen shawls seen from behind walking up a dusty track, dramatic late afternoon light on brown mountains, historical, no faces, no weapons visible, no legible text." },
        { type: "timeline", head: "The Zia years", items: [
          ["5 Jul 1977", "Zia overthrows Zulfikar Ali Bhutto"],
          ["1979", "Hudood Ordinances; Bhutto hanged in April"],
          ["Dec 1979", "Soviet invasion of Afghanistan"],
          ["1980s", "US and Saudi aid flows through Pakistan to the mujahideen"],
          ["1986", "Death penalty law for blaspheming the Prophet"],
          ["17 Aug 1988", "Zia killed in a plane crash"],
          ["Feb 1989", "Last Soviet troops leave Afghanistan"]
        ] },
        { type: "section", head: "The coup", md:
          "Zulfikar Ali Bhutto, prime minister after 1971, was a charismatic populist who nationalised industries, gave Pakistan its 1973 constitution and began the nuclear programme. He was also authoritarian, and in 1977 he was accused of rigging an election. Amid street protests, the army chief, General Muhammad Zia-ul-Haq, whom Bhutto had promoted over more senior officers, seized power on 5 July 1977, promising elections within ninety days. They did not come for eight years. Bhutto was tried for conspiracy to murder and hanged in 1979, a verdict Pakistan's Supreme Court said in 2024 had not been a fair trial." },
        { type: "section", head: "Islamisation", md:
          "Zia, a devout Muslim, set out to make the state's laws Islamic. The 1979 Hudood Ordinances introduced punishments from Islamic law for theft, alcohol and sex outside marriage; women who reported rape could be charged with adultery if they could not prove it. A Federal Shariat Court was created, zakat (an alms tax) was deducted from bank accounts, and the blasphemy laws were expanded, including a death penalty from 1986 for insulting the Prophet Muhammad. Ahmadis were barred from calling themselves Muslims." },
        { type: "section", head: "The Afghan jihad", md:
          "When the Soviet Union invaded Afghanistan in December 1979, Zia became indispensable to the United States. Billions of dollars in American and Saudi aid, and weapons, were channelled through Pakistan's intelligence service, the ISI, which chose which Afghan mujahideen groups to back, favouring the most Islamist. About three million Afghan refugees came to Pakistan. Religious schools, madrasas, multiplied, many funded from the Gulf, and volunteers from across the Muslim world passed through." },
        { type: "section", head: "The legacy", md:
          "The Soviets left Afghanistan in 1989. Zia died the year before, when his plane exploded soon after take-off; the cause has never been established. What he left behind lasted far longer: militant networks that Pakistan's security services would use in Kashmir and Afghanistan, and that later turned on Pakistan itself; the spread of guns and heroin, a 'Kalashnikov culture'; sectarian violence between Sunni and Shia groups; and laws that are very hard to repeal." },
        { type: "compare", head: "Two views of Zia",
          left: { head: "Admirers", md:
            "He stood up to the Soviet Union, gave Pakistan an Islamic identity faithful to its founding, and kept the country stable." },
          right: { head: "Critics", md:
            "He was a dictator who killed an elected leader, harmed women and minorities, and planted the seeds of extremism." } },
        { type: "section", head: "Why it still matters", md:
          "Many of Zia's laws survive. The Hudood rape provisions were reformed in 2006, but the blasphemy laws remain, and accusations of blasphemy regularly lead to mob killings; the governor of Punjab, Salman Taseer, was assassinated in 2011 by his own bodyguard for criticising them. The militancy described in briefing 7 grew partly from the networks built in the 1980s. And the army's role as the final arbiter of politics, which Zia strengthened, remains the defining feature of the system (briefing 2)." }
      ],
      takeaways: [
        "General Zia-ul-Haq seized power in 1977, and Bhutto was hanged in 1979.",
        "Zia introduced Islamic criminal laws, harsher blasphemy laws and religious courts.",
        "Pakistan became the base for the US- and Saudi-funded war against the Soviets in Afghanistan, with lasting effects."
      ],
      check: { q: "What role did Pakistan play in the Soviet–Afghan war of the 1980s?",
        choices: ["It sent troops to fight alongside the Soviets", "It channelled US and Saudi aid to the Afghan mujahideen", "It stayed strictly neutral"], answer: 1,
        explain: "Pakistan's ISI distributed American and Saudi weapons and money to the mujahideen." },
      sources: [
        { title: "Mohammad Zia-ul-Haq", publisher: "Britannica", url: "https://www.britannica.com/biography/Mohammad-Zia-ul-Haq", date: "n.d." },
        { title: "Pakistan: Zia-ul-Haq", publisher: "Britannica", url: "https://www.britannica.com/place/Pakistan/Zia-ul-Haq", date: "n.d." },
        { title: "Afghan War", publisher: "Britannica", url: "https://www.britannica.com/event/Afghan-War", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "pk-4", kind: "players", asOf: "2026-09-29",
      title: "The field marshal and the prisoner",
      dek: "An army chief who became a global power-broker, a prime minister who works in his shadow, and a former prime minister in a cell.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pk/pk-4-hero.webp",
          alt: "Illustration of a crowd at a night rally holding up blank portrait placards and party flags without symbols, seen from behind, under floodlights.",
          caption: "Imran Khan remains Pakistan's most popular politician, according to polls, despite being in prison since 2023.",
          credit: "AI illustration — not a photograph",
          prompt: "A large crowd at a night political rally seen from behind, people holding up blank portrait placards and plain green and red flags without symbols, floodlights and dust, a stage far away, fervent atmosphere, no faces, no legible text." },
        { type: "people", head: "Five to know", items: [
          { name: "Asim Munir", role: "Field Marshal; army chief and Chief of Defence Forces",
            img: "img/pk/portrait-munir.webp", source: "ISPR official photo via Wikimedia Commons, if licensed; confirm the licence.",
            md: "Former head of military intelligence and the ISI. Promoted to field marshal after the May 2025 conflict with India, only the second in Pakistan's history. Has built a personal rapport with Trump." },
          { name: "Shehbaz Sharif", role: "Prime minister, since March 2024",
            img: "img/pk/portrait-shehbaz.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Younger brother of three-time prime minister Nawaz Sharif. A capable administrator who works closely with the army and announced the US–Iran memorandum." },
          { name: "Asif Ali Zardari", role: "President",
            img: "img/pk/portrait-zardari.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Widower of Benazir Bhutto and co-chair of the PPP; president for the second time. His son Bilawal Bhutto Zardari leads the party." },
          { name: "Imran Khan", role: "Former prime minister; PTI founder",
            img: "img/pk/portrait-imran-khan.webp", source: "Official or CC-licensed photo via Wikimedia Commons; confirm the licence.",
            md: "Jailed since August 2023; convicted in several cases, including a 14-year sentence in the Al-Qadir Trust case in January 2025, which he says are politically motivated." },
          { name: "Ishaq Dar", role: "Deputy prime minister and foreign minister",
            img: "img/pk/portrait-dar.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A Sharif-family loyalist and former finance minister, central to the Iran mediation and Gulf diplomacy." }
        ] },
        { type: "section", head: "Munir's rise", md:
          "Munir took over the army in November 2022, amid the army's confrontation with Imran Khan, whom he had clashed with years earlier. After the May 2025 fighting with India, which Pakistan presented as a victory, he was made a field marshal. Trump hosted him for lunch at the White House in June 2025, an unprecedented honour for a Pakistani army chief who was not also head of state, and later called him 'my favourite field marshal'." },
        { type: "section", head: "The ISI", md:
          "The Inter-Services Intelligence directorate, the army's spy agency, is one of the most powerful institutions in Pakistan. It manages relations with militant groups and neighbours, monitors politicians and the media, and is widely believed to shape election outcomes, charges it denies. Munir himself led it briefly in 2018–19, before Imran Khan replaced him, the start of their long enmity." },
        { type: "section", head: "Khan's movement", md:
          "The PTI remains popular, especially among young and urban voters and in Khyber Pakhtunkhwa, which it governs. But its leaders are jailed, in hiding or have quit under pressure, and it has struggled to mobilise since a failed march on Islamabad in November 2024. Khan's supporters abroad campaign for his release; the government says he is a criminal, not a political prisoner." },
        { type: "section", head: "Nawaz Sharif", md:
          "Nawaz Sharif, the PML-N's patriarch and three-time prime minister, returned from exile in 2023 and was expected to lead again, but his party chose his younger brother Shehbaz as prime minister in 2024. He remains the party's leader in name, while his daughter, Maryam Nawaz, is chief minister of Punjab, Pakistan's most powerful provincial post." },
        { type: "section", head: "Relations with Washington", md:
          "Under Trump, US–Pakistan relations have warmed sharply, after years of distrust. Pakistan nominated Trump for the Nobel Peace Prize, credited him with ending the India conflict, and has offered cooperation on minerals, crypto and counter-terrorism. The shift has alarmed India." }
      ],
      takeaways: [
        "Field Marshal Asim Munir dominates the state and has built a close rapport with Trump.",
        "Shehbaz Sharif's PML-N government governs in partnership with the army.",
        "Imran Khan, jailed since 2023, remains the most popular politician; his party is under heavy pressure."
      ],
      check: { q: "What rank was Asim Munir given after the May 2025 conflict with India?",
        choices: ["General", "Field marshal", "President"], answer: 1,
        explain: "He was promoted to field marshal, only the second in Pakistan's history after Ayub Khan." },
      sources: [
        { title: "India to Iran: How two wars shaped the rise of Pakistan's Asim Munir", publisher: "Al Jazeera", url: "https://www.aljazeera.com/features/2026/4/23/india-to-iran-how-two-wars-shaped-the-rise-of-pakistans-asim-munir", date: "2026-04-23" },
        { title: "Imprisonment of Imran Khan", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Imprisonment_of_Imran_Khan", date: "2026" },
        { title: "Pakistan Army chief Asim Munir set to meet Trump amid Iran tensions", publisher: "Gulf News", url: "https://gulfnews.com/world/asia/pakistan/pakistan-army-chief-asim-munir-set-to-meet-trump-amid-iran-tensions-1.500167755", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "pk-5", kind: "story", asOf: "2026-09-29",
      title: "Four days in May",
      dek: "A massacre in Kashmir, Indian strikes, Pakistani retaliation, and a ceasefire that both sides called a victory.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pk/pk-5-hero.webp",
          alt: "Illustration of snowy mountain border posts at dawn, with a flag pole without a flag and barbed wire along a ridge.",
          caption: "The Line of Control in Kashmir has divided Indian- and Pakistani-administered areas since 1972.",
          credit: "AI illustration — not a photograph",
          prompt: "Stone and sandbag military border posts on a snowy mountain ridge at dawn, coils of barbed wire along the crest, an empty flag pole, vast Himalayan peaks behind in pink light, cold and tense, no people close up, no flags or legible text." },
        { type: "section", head: "What happened", md:
          "On 22 April 2025 gunmen killed 26 people, mostly Hindu tourists, at Pahalgam in Indian-administered Kashmir. India blamed Pakistan-based militants; Pakistan denied involvement. India suspended the Indus Waters Treaty, which governs the rivers that supply most of Pakistan's water. On 7 May India struck what it said were militant targets in Pakistan; Pakistan said civilians were killed and claimed to have shot down several Indian jets. Drone and missile exchanges followed, including strikes on air bases, until a ceasefire on 10 May, first announced by Trump." },
        { type: "timeline", head: "How it unfolded", items: [
          ["22 Apr 2025", "Pahalgam attack kills 26"],
          ["23 Apr 2025", "India suspends the Indus Waters Treaty"],
          ["7 May 2025", "Indian strikes in Pakistan"],
          ["10 May 2025", "Ceasefire after strikes on air bases"],
          ["20 May 2025", "Munir promoted to field marshal"],
          ["Aug 2026", "A court in The Hague rules on the treaty; India rejects it"]
        ] },
        { type: "section", head: "Two narratives", md:
          "Both sides claimed success. Pakistan celebrated what it called a victory, especially the downing of Indian aircraft, which India acknowledged only in general terms. India said it had struck terrorist camps and Pakistani air bases and forced Pakistan to seek a ceasefire. Pakistan credited Trump's mediation; India insisted the ceasefire was agreed directly between the two militaries. See [[unit:in|the India unit]] for India's account." },
        { type: "section", head: "The weapons", md:
          "The conflict was the first large-scale drone and missile war between two nuclear powers. Both sides used drones against each other's cities and bases, and Pakistan's Chinese-made fighter jets and missiles were tested in combat against Indian aircraft, which drew close interest from militaries around the world." },
        { type: "compare", head: "Two accounts",
          left: { head: "Pakistan", md:
            "India launched unprovoked strikes on civilians based on unproven claims. Pakistan's armed forces responded decisively and restored deterrence." },
          right: { head: "India", md:
            "Pakistan harbours the militants behind Pahalgam. India's precise strikes punished them and showed it will no longer tolerate cross-border terrorism." } },
        { type: "section", head: "Water as a weapon", md:
          "India has kept the Indus Waters Treaty 'in abeyance', saying it will do so until Pakistan ends support for terrorism. Pakistan calls any attempt to stop its water an act of war. In August 2026 a Court of Arbitration in The Hague ruled in Pakistan's favour on how India must operate its dams under the treaty; India, which does not recognise the court, rejected the ruling." },
        { type: "section", head: "Kashmir", md:
          "Kashmir remains the core dispute. India revoked the special autonomy of its part of Kashmir in 2019 and says the region is an internal matter. Pakistan says Kashmiris must decide their own future under UN resolutions dating back to 1948. The people of Kashmir themselves are divided." },
        { type: "section", head: "What's next", md:
          "The conflict remains unresolved: the treaty is suspended, trade and travel are cut, and another major attack could trigger a larger war between nuclear powers. Watch Kashmir, the water dispute, and whether any back-channel talks emerge." }
      ],
      takeaways: [
        "After the Pahalgam attack in April 2025, India struck Pakistan on 7 May; a ceasefire followed on 10 May.",
        "Both sides claimed victory; Munir was promoted to field marshal.",
        "India has suspended the Indus Waters Treaty; a Hague court ruled for Pakistan in 2026, which India rejects."
      ],
      check: { q: "What did India suspend after the Pahalgam attack?",
        choices: ["Diplomatic relations with China", "The Indus Waters Treaty", "Its nuclear programme"], answer: 1,
        explain: "India put the 1960 Indus Waters Treaty 'in abeyance', threatening Pakistan's main source of water." },
      sources: [
        { title: "Pakistan wins Indus waters battle at The Hague, but India threat remains", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/9/1/pakistan-wins-indus-waters-battle-at-the-hague-but-india-threat-remains", date: "2026-09-01" },
        { title: "India rejects Hague court order to restore Indus waters pact with Pakistan", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/8/31/india-rejects-hague-court-order-to-restore-indus-waters-pact-with-pakistan", date: "2026-08-31" },
        { title: "Announcing a U.S.-Brokered Ceasefire between India and Pakistan", publisher: "US State Department via GlobalSecurity", url: "https://www.globalsecurity.org/military/library/news/2025/05/mil-250510-state01.htm", date: "2025-05-10" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "pk-6", kind: "story", asOf: "2026-09-29",
      title: "The peacemaker",
      dek: "How Pakistan brokered the US–Iran ceasefire, hosted the Islamabad talks and put its field marshal at the centre of world diplomacy.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pk/pk-6-hero.webp",
          alt: "Illustration of a long negotiating table in an empty hotel ballroom with chandeliers, water glasses and name cards turned face down.",
          caption: "Islamabad hosted US and Iranian negotiators in April 2026.",
          credit: "AI illustration — not a photograph",
          prompt: "A long negotiating table in an empty hotel ballroom, chandeliers overhead, water glasses and blank name cards laid out, rows of empty chairs on both sides, heavy curtains, quiet anticipation, no people, no legible text or flags." },
        { type: "section", head: "What happened", md:
          "When the United States and Israel went to war with [[unit:ir|Iran]] on 28 February 2026, Pakistan was one of the few countries trusted by both Washington and Tehran. It shares a long border with Iran and a large Shia minority, and its army chief had Trump's ear. Pakistani officials, led by Munir and Sharif, shuttled messages between the two sides. On 8 April the United States and Iran agreed a two-week ceasefire, mediated by Pakistan.\n\n" +
          "Direct talks in Islamabad on 12–13 April failed, and the US imposed a naval blockade. But Pakistan kept mediating, and on 14 June Sharif announced a US–Iran memorandum of understanding, signed on 17 June. It collapsed over the summer." },
        { type: "timeline", head: "How it unfolded", items: [
          ["28 Feb 2026", "US–Israeli war on Iran begins"],
          ["8 Apr 2026", "Pakistan-mediated ceasefire"],
          ["12–13 Apr 2026", "Islamabad talks fail"],
          ["14–17 Jun 2026", "Memorandum announced and signed"],
          ["Aug 2026", "Memorandum expires"]
        ] },
        { type: "section", head: "Why Pakistan", md:
          "Pakistan had several assets: close ties with the Trump administration, a working relationship with Tehran, a defence pact with [[unit:sa|Saudi Arabia]], whose oil sites Iran was striking, and credibility as a Muslim-majority nuclear power. It also had strong interests of its own: a war next door threatened its security, energy supplies and economy, and success would raise its standing, especially against India." },
        { type: "section", head: "Pakistan and Iran", md:
          "Pakistan and Iran share a 900-kilometre border, often troubled by militants on both sides, and in January 2024 they briefly exchanged missile strikes. Pakistan also has one of the world's largest Shia populations, which made it cautious about backing either side openly in the war." },
        { type: "compare", head: "Two views of the mediation",
          left: { head: "Supporters", md:
            "Pakistan did what larger powers could not, stopping a war that threatened the whole region and showing it can be a responsible global player." },
          right: { head: "Sceptics", md:
            "The ceasefire and memorandum both collapsed. The diplomacy also strengthened an army chief who is dismantling democracy at home." } },
        { type: "section", head: "Why it matters", md:
          "The mediation transformed Pakistan's image in Washington from a troublesome ally to a useful partner, and made Munir one of the most influential military leaders in the world. It also gave the army domestic legitimacy at a time when its political role is contested." },
        { type: "section", head: "The Gaza link", md:
          "Pakistan also joined Trump's Board of Peace for Gaza in January 2026, and has discussed contributing troops to a stabilisation force there, a sensitive idea in a country where support for the Palestinian cause runs deep and which does not recognise Israel." },
        { type: "section", head: "India's view", md:
          "India watched Pakistan's new prominence with unease, especially Trump's warm words for Munir, whom Indian officials hold responsible for the militancy behind Pahalgam. New Delhi refused any US mediation on Kashmir." },
        { type: "section", head: "What's next", md:
          "Pakistan says it remains ready to host talks. Watch whether Islamabad plays a role in any new US–Iran deal, and how the Saudi defence pact works if Iranian attacks on the kingdom resume." }
      ],
      takeaways: [
        "Pakistan mediated the 8 April 2026 US–Iran ceasefire and hosted talks in Islamabad.",
        "It helped produce a June memorandum, which collapsed over the summer.",
        "The mediation raised Pakistan's standing and Munir's influence, at home and abroad."
      ],
      check: { q: "Why was Pakistan well placed to mediate between the US and Iran?",
        choices: ["It is a member of NATO", "It had close ties to both Washington and Tehran", "It is a permanent UN Security Council member"], answer: 1,
        explain: "Pakistan borders Iran, has working relations with Tehran and close ties with the Trump administration." },
      sources: [
        { title: "How Pakistan managed to get the US and Iran to a ceasefire", publisher: "Al Jazeera", url: "https://www.aljazeera.com/features/2026/4/8/how-pakistan-managed-to-get-the-us-and-iran-to-a-ceasefire", date: "2026-04-08" },
        { title: "How Pakistan Became the Iran War's Unlikely Peace Negotiator", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/articles/how-pakistan-became-the-iran-wars-unlikely-peace-negotiator", date: "2026" },
        { title: "Islamabad Memorandum", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Islamabad_Memorandum", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "pk-7", kind: "story", asOf: "2026-09-29",
      title: "The army state at home",
      dek: "While Pakistan shines abroad, its former prime minister stays in prison, militants strike across the north-west, and war flares on the Afghan border.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pk/pk-7-hero.webp",
          alt: "Illustration of a rugged mountain pass with a fortified checkpoint, an armoured vehicle and a long line of trucks waiting under a hazy sky.",
          caption: "Pakistan's border with Afghanistan has seen repeated clashes since October 2025.",
          credit: "AI illustration — not a photograph",
          prompt: "A rugged dry mountain pass with a fortified stone checkpoint, an armoured vehicle parked beside a barrier, a long line of colourful decorated trucks waiting, hazy dusty sky, tense stillness, no people close up, no flags or legible text." },
        { type: "section", head: "What happened", md:
          "Militant violence has surged. The Pakistani Taliban (TTP), which Pakistan says operates from Afghan territory, has carried out hundreds of attacks in Khyber Pakhtunkhwa and beyond; by late August 2026 at least 559 people had been killed in TTP-linked violence that year, according to one tally. A suicide bombing struck a mosque in Islamabad in February 2026. Separatists have also attacked in Balochistan.\n\n" +
          "Pakistan has struck back across the border. After deadly clashes in October 2025, Qatar and Turkey mediated a ceasefire, which broke down; in early 2026 Pakistan launched air strikes in Afghanistan and its defence minister spoke of 'open war'. A truce in March and talks hosted by China in April have not ended the cross-border attacks." },
        { type: "section", head: "Imran Khan", md:
          "Imran Khan remains in Adiala jail in Rawalpindi, facing more than 100 cases. His supporters say he is kept in harsh conditions and denied visits; the government says he receives proper treatment. The 26th and 27th amendments have moved high-profile political cases to courts whose appointments the government controls, which his lawyers say makes a fair appeal impossible." },
        { type: "section", head: "The Saudi pact", md:
          "In September 2025 Pakistan and [[unit:sa|Saudi Arabia]] signed a Strategic Mutual Defence Agreement: an attack on one would be treated as an attack on both. It deepens a decades-old relationship in which Saudi money has supported Pakistan's economy and Pakistani troops have helped protect the kingdom. Many analysts read it as extending Pakistan's nuclear umbrella, informally, to Riyadh; officials have not confirmed that." },
        { type: "section", head: "Why militancy returned", md:
          "Pakistan's government says the TTP is sheltered and supported by the Taliban government in Kabul, which denies it. Critics add that decades in which parts of the Pakistani state backed militant groups for its own ends made it harder to fight them now. The expulsion of hundreds of thousands of Afghan refugees from Pakistan since 2023 has further poisoned relations with Kabul." },
        { type: "section", head: "Balochistan", md:
          "In Balochistan, separatist groups such as the Balochistan Liberation Army have attacked soldiers, Chinese workers and trains; in March 2025 they hijacked a passenger train with hundreds aboard. Rights groups also document enforced disappearances of Baloch activists by security forces, which the state denies. The province is rich in minerals and gas but remains Pakistan's poorest, a grievance separatists exploit to win recruits." },
        { type: "compare", head: "Two views of the state",
          left: { head: "The government and army", md:
            "Pakistan faces terrorism backed from abroad and needs unity and strong institutions. Khan is a convicted criminal who incited attacks on the military." },
          right: { head: "Critics and rights groups", md:
            "The state is silencing its most popular politician, weakening courts and media, and fuelling alienation in the regions where militancy thrives." } },
        { type: "section", head: "What's next", md:
          "Watch the Afghan border talks, the TTP's campaign, Khan's appeals and health, and whether the PTI can rebuild before the next election, due by 2029." }
      ],
      takeaways: [
        "TTP-linked violence has surged in 2026; Pakistan has struck across the Afghan border.",
        "Imran Khan remains in prison, facing more than 100 cases he calls political.",
        "A September 2025 defence pact binds Pakistan and Saudi Arabia to defend each other."
      ],
      check: { q: "Which group is behind most militant attacks in Pakistan's north-west?",
        choices: ["The Pakistani Taliban (TTP)", "Hezbollah", "The Houthis"], answer: 0,
        explain: "The TTP, which Pakistan says operates from Afghanistan, has carried out hundreds of attacks, especially in Khyber Pakhtunkhwa." },
      sources: [
        { title: "Onslaught of Terrorism Tests Pakistan's Capacity in Western Provinces", publisher: "The Soufan Center", url: "https://thesoufancenter.org/intelbrief-2026-august-14/", date: "2026-08-14" },
        { title: "Why Did Pakistan Announce 'Open War' Against the Taliban?", publisher: "CSIS", url: "https://www.csis.org/analysis/why-did-pakistan-announce-open-war-against-taliban", date: "2026" },
        { title: "Ceasefire at risk as Pakistan and Afghanistan report cross-border attacks", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/4/27/ceasefire-at-risk-as-pakistan-and-afghanistan-report-cross-border-attacks", date: "2026-04-27" },
        { title: "TTP: The Thorn In Pakistan's Throat", publisher: "Eurasia Review", url: "https://www.eurasiareview.com/25082026-ttp-the-thorn-in-pakistans-throat-analysis/", date: "2026-08-25" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "pk-12", kind: "spotlight", asOf: "2026-09-29",
      title: "Kashmir",
      dek: "Since 1947 India and Pakistan have fought three wars and many smaller clashes over the former princely state of Jammu and Kashmir. Its people are caught between them.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pk/pk-12-hero.webp",
          alt: "Illustration of a mountain valley in Kashmir with a lake, wooden houseboats and snow-capped peaks, a lone boatman seen from behind.",
          caption: "The Vale of Kashmir, at the heart of the dispute, is controlled by India.",
          credit: "AI illustration — not a photograph",
          prompt: "A serene mountain valley in Kashmir with a calm lake, ornate wooden houseboats and a small shikara boat with a lone boatman seen from behind, snow-capped Himalayan peaks and chinar trees in autumn colours, soft morning mist, beautiful but melancholy, no faces, no legible text, no flags." },
        { type: "facts", head: "Who holds what", rows: [
          ["India", "Jammu and Kashmir, Ladakh (about 55% of the area)"],
          ["Pakistan", "Azad Kashmir and Gilgit-Baltistan (about 30%)"],
          ["China", "Aksai Chin and the Shaksgam valley (about 15%)"],
          ["Dividing line", "The Line of Control, since 1972"],
          ["Wars", "1947–48, 1965, the Kargil conflict of 1999; clashes in 2019 and May 2025"]
        ] },
        { type: "section", head: "1947", md:
          "At partition, the hundreds of princely states could join India or Pakistan. Jammu and Kashmir had a Muslim majority but a Hindu ruler, Maharaja Hari Singh, who hesitated. In October 1947 Pashtun tribesmen from Pakistan invaded. The Maharaja asked India for help and signed an Instrument of Accession to India. Indian troops were flown in, and the first war ended in a UN-brokered ceasefire on 1 January 1949, leaving each side holding part of the state." },
        { type: "section", head: "The promised vote", md:
          "UN Security Council resolutions in 1948 called for a plebiscite to let Kashmiris choose, after Pakistan withdrew its forces and India reduced its own. The steps were never taken in order, and the vote never happened. Pakistan says the plebiscite is still owed. India says the accession was legal and final, that Pakistan never withdrew, and that the 1972 Simla Agreement, after the 1971 war, committed both sides to settle their differences bilaterally, without outside mediators." },
        { type: "section", head: "Insurgency", md:
          "Pakistan tried to take Kashmir by force again in 1965 and, in the Kargil heights, in 1999, a year after both countries tested nuclear weapons. In 1989 an armed uprising broke out in the Indian-held Kashmir valley, fuelled by a disputed state election and local grievances; it was soon joined by militants armed and trained in Pakistan. Tens of thousands of people have been killed, and Kashmiri Hindus, the Pandits, fled the valley in 1990. India deployed hundreds of thousands of troops, and rights groups documented abuses by security forces as well as by militants." },
        { type: "section", head: "2019 and after", md:
          "On 5 August 2019 India revoked Article 370 of its constitution, which gave Jammu and Kashmir special autonomy, and split it into two union territories, amid a months-long communications blackout; India's Supreme Court upheld the move in December 2023. Pakistan downgraded relations in protest. On 22 April 2025 gunmen killed 26 people, most of them tourists, at Pahalgam; India blamed Pakistan-based groups, and the crisis led to the four days of fighting in May described in briefing 5." },
        { type: "compare", head: "Two positions",
          left: { head: "India", md:
            "All of Jammu and Kashmir is Indian by the 1947 accession; the problem is Pakistani-sponsored terrorism, and it is an internal matter." },
          right: { head: "Pakistan", md:
            "Kashmir's Muslim majority must decide its own future under the UN resolutions; Pakistan offers them moral and diplomatic support." } },
        { type: "section", head: "Kashmiris themselves", md:
          "Kashmiris are not a single voice. Many in the valley want independence or have long resented Indian rule; many in Hindu-majority Jammu and Buddhist Ladakh prefer India; many in Azad Kashmir identify with Pakistan, though protests there over electricity prices and rights have grown in recent years. Neither India nor Pakistan offers independence as an option." },
        { type: "section", head: "Why it matters", md:
          "Kashmir is the main reason two nuclear-armed neighbours remain enemies, and the trigger for most of their crises. For Pakistan's army it is central to its identity and budget, and 5 February is observed as Kashmir Solidarity Day. The Indus rivers that rise in and near Kashmir now add another source of tension, after India suspended the Indus Waters Treaty in 2025 (see [[unit:in|India]])." }
      ],
      takeaways: [
        "Kashmir's Hindu ruler acceded to India in 1947 after an invasion from Pakistan; the state has been divided ever since.",
        "Pakistan demands the plebiscite promised in UN resolutions; India says the matter is settled and internal.",
        "India ended the region's special status in 2019, and a 2025 attack led to the latest India–Pakistan fighting."
      ],
      check: { q: "What did UN resolutions in 1948 call for in Kashmir?",
        choices: ["Independence under UN rule", "A plebiscite to let the people choose", "Permanent partition along the rivers"], answer: 1,
        explain: "They called for a plebiscite after troop withdrawals; it has never been held." },
      sources: [
        { title: "Kashmir", publisher: "Britannica", url: "https://www.britannica.com/place/Kashmir-region-Indian-subcontinent", date: "n.d." },
        { title: "Kashmir: The Kashmir problem", publisher: "Britannica", url: "https://www.britannica.com/place/Kashmir-region-Indian-subcontinent/The-Kashmir-problem", date: "n.d." },
        { title: "Jammu and Kashmir", publisher: "Britannica", url: "https://www.britannica.com/place/Jammu-and-Kashmir", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "pk-8", kind: "now", asOf: "2026-09-29",
      title: "Where things stand",
      dek: "An IMF lifeline, a rising international profile, and a political system tilted firmly toward the army.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/pk/pk-8-hero.webp",
          alt: "Illustration of a busy Karachi port at sunset with cranes, container ships and a crowded harbour of fishing boats.",
          caption: "Karachi, Pakistan's biggest city and commercial capital.",
          credit: "AI illustration — not a photograph",
          prompt: "A busy seaport at sunset with container cranes and a large ship, a crowded harbour of colourful wooden fishing boats in the foreground, a hazy city skyline behind, warm orange light, bustle and resilience, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Power:** Field Marshal Munir dominates; Sharif's government manages the economy.\n" +
          "- **Economy:** a $7 billion IMF programme; its fourth review began in September 2026.\n" +
          "- **Abroad:** close to Trump, a mediator on Iran, a defence pact with Saudi Arabia, a member of the Gaza Board of Peace.\n" +
          "- **Security:** surging TTP attacks and clashes with Afghanistan.\n" +
          "- **India:** no talks; the Indus Waters Treaty suspended." },
        { type: "section", head: "The economy", md:
          "Pakistan narrowly avoided default in 2023 and has since relied on a $7 billion IMF programme agreed in 2024, whose third review was completed in May 2026. Inflation has fallen sharply from its 2023 peak, but growth is modest, debt is high, and only a small share of Pakistanis pay income tax. China, Saudi Arabia and the UAE roll over billions in loans each year to keep reserves afloat." },
        { type: "section", head: "Politics after the amendments", md:
          "The constitutional changes have removed most checks on the army and the governing coalition. The PML-N and PPP rely on the army's backing and have little incentive to reopen the system. The PTI's options are limited to courts it distrusts, protests the state can suppress, and waiting for the next election. Some analysts compare the arrangement to the military-led governments of the past, but with a civilian face." },
        { type: "section", head: "China's role", md:
          "[[unit:cn|China]] is Pakistan's most important partner: it supplies most of its weapons, including the jets used in May 2025, and has invested heavily through the China–Pakistan Economic Corridor in roads, power plants and the port of Gwadar. Attacks on Chinese workers by militants have strained that relationship, and Beijing has pressed for better security." },
        { type: "section", head: "What Pakistanis want", md:
          "Surveys suggest Pakistanis' top concerns are inflation, unemployment and security. Many are proud of the country's showing against India and its new diplomatic role, but distrust the political system. Polls regularly find Imran Khan the most popular political figure, though the government disputes such surveys." },
        { type: "section", head: "Climate", md:
          "Pakistan is among the countries most exposed to climate change: glacial floods, record heat and monsoon disasters strike almost every year. Rebuilding after the 2022 floods is still under way, and climate finance is part of its IMF arrangements." },
        { type: "section", head: "Three scenarios", md:
          "- **Stability under the army.** The IMF programme holds, attacks are contained, and the hybrid system entrenches.\n" +
          "- **Crisis at home.** Militancy, economic strain or anger over Khan's treatment spark unrest.\n" +
          "- **Regional war.** Another major attack in India, or escalation with Afghanistan, draws Pakistan into wider conflict." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **Autumn 2026:** the IMF's fourth review\n" +
          "- **Ongoing:** Afghan border talks and TTP attacks\n" +
          "- **Ongoing:** Imran Khan's appeals\n" +
          "- **By 2029:** the next general election" },
        { type: "section", head: "Connections", md:
          "Pakistan's story runs through [[unit:in]] (the rivalry and the water), [[unit:cn]] (its closest ally and creditor), [[unit:us]] (renewed friendship), [[unit:ir]] (the mediation), [[unit:sa]] (the defence pact) and [[unit:tr]] (a close partner and mediator on Afghanistan)." }
      ],
      takeaways: [
        "Pakistan relies on a $7 billion IMF programme and loans from China and the Gulf.",
        "Its international standing has risen sharply, while democratic checks at home have weakened.",
        "Militancy, the Afghan border and the rivalry with India are the main risks."
      ],
      check: { q: "Which body's programme is keeping Pakistan's finances afloat?",
        choices: ["The World Bank", "The IMF", "The Asian Development Bank"], answer: 1,
        explain: "Pakistan has a $7 billion IMF Extended Fund Facility, agreed in 2024; its fourth review began in September 2026." },
      sources: [
        { title: "IMF Executive Board Completes Third Review of the Extended Arrangement with Pakistan", publisher: "IMF", url: "https://www.imf.org/en/news/articles/2026/05/08/pr-26147-pakistan-imf-completes-3rd-rev-of-extended-arrangement-under-eff-and-2nd-rev-arrang-rsf", date: "2026-05-08" },
        { title: "Pakistan, IMF to Begin 4th Review of $7 Billion EFF in September", publisher: "ProPakistani", url: "https://propakistani.pk/2026/08/28/pakistan-imf-to-begin-4th-review-of-7-billion-eff-in-september/", date: "2026-08-28" },
        { title: "Turkey, Israel, Pakistan to join Trump's Board of Peace", publisher: "Al-Monitor", url: "https://www.al-monitor.com/originals/2026/01/turkey-israel-pakistan-join-trumps-board-peace-italy-hedges-what-know", date: "2026-01" }
      ]
    }
  ]
});
