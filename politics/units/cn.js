/* ============================================================
   Unit 2 — China 🇨🇳
   Research note and sources: tools/research/cn.md
   Current as of 28 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("cn", {
  id: "cn",
  asOf: "2026-09-28",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "cn-1", kind: "snapshot", asOf: "2026-09-28",
      title: "China in brief",
      dek: "The world's second-largest economy and biggest manufacturer, run by one party, and the only country that can rival the United States.",
      blocks: [
        { type: "map", src: "maps/cn.svg",
          alt: "Locator map of East Asia with China highlighted, Taiwan shown separately off its south-east coast, and a small globe showing its place in the world.",
          caption: "China. Taiwan, which Beijing claims, is shown separately. China and India dispute parts of their border: China holds Aksai Chin, and India holds Arunachal Pradesh, which China claims.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Beijing"],
          ["People", "1.405 billion (end of 2025), falling since 2022"],
          ["Economy", "140.2 trillion yuan, about $20 trillion (2025), the world's second-largest"],
          ["Growth", "5.0% in 2025; the 2026 target is 4.5–5%"],
          ["System", "One-party state led by the Chinese Communist Party"],
          ["Leader", "Xi Jinping, Party general secretary since 2012 and president since 2013"],
          ["Next big moment", "The 21st Party Congress, due in 2027"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "China is the only country with the economic weight, technology and military ambition to challenge the United States for global leadership. It is the world's biggest manufacturer, the largest trading partner of most countries on Earth, and the dominant processor of the rare minerals that go into phones, cars and weapons.\n\n" +
          "Almost every other unit touches it. China buys Russia's oil, anchors the bloc of countries resisting Western sanctions, claims [[unit:tw]], disputes its border with [[unit:in]] and argues with [[unit:jp]] over history and security. Its trade war and truce with [[unit:us]] set the tone for the whole world economy." },
        { type: "section", head: "The world's workshop", md:
          "China makes close to a third of everything manufactured on Earth, and in 2025 it sold more than $1 trillion more to the world than it bought. Its companies lead in electric cars, batteries, solar panels and shipbuilding, and are racing to catch up in advanced chips and artificial intelligence.\n\n" +
          "That success worries its trading partners, who accuse it of subsidising factories and flooding markets with cheap goods. Beijing answers that its industries win on scale and skill, and that others are using tariffs to hold it back." },
        { type: "section", head: "Fewer, older people", md:
          "China's population peaked in 2021 and has fallen every year since. In 2025 it recorded 7.92 million births and 11.31 million deaths, according to its statistics bureau. The one-child policy ended in 2015, but young people are marrying later and having fewer children, deterred by the cost of housing and education.\n\n" +
          "A shrinking workforce and a fast-ageing society are among the long-term pressures behind almost every economic decision Beijing makes." },
        { type: "section", head: "What Beijing says it wants", md:
          "The Party's stated goal is the 'great rejuvenation of the Chinese nation' by 2049, the People's Republic's hundredth birthday: a prosperous, technologically advanced great power. That includes what Beijing calls 'reunification' with Taiwan, and a bigger say in how the world is run, from the UN to new clubs such as BRICS.\n\n" +
          "China presents itself as a champion of the developing world against Western dominance. Its critics, in Washington, Tokyo and many European capitals, see instead a rival seeking to rewrite international rules in its favour." },
        { type: "callout", tone: "why", md:
          "How China grows, what it does about [[unit:tw]] and whether its rivalry with the United States stays peaceful are three of the biggest questions of the century. The rest of this unit explains how its leaders see them." }
      ],
      takeaways: [
        "China is the world's second-largest economy and its biggest manufacturer, with a trade surplus of more than $1 trillion in 2025.",
        "It is a one-party state: the Communist Party, led by Xi Jinping, sits above the government, the courts and the army.",
        "Its population has been shrinking since 2022, a slow pressure behind its economic choices."
      ],
      check: { q: "What has happened to China's population since 2022?",
        choices: ["It has kept growing slowly", "It has fallen every year", "It has stayed exactly flat"], answer: 1,
        explain: "Deaths have outnumbered births every year since 2022. In 2025 the population fell by 3.39 million to 1.405 billion." },
      sources: [
        { title: "Statistical Communiqué on the 2025 National Economic and Social Development", publisher: "National Bureau of Statistics of China", url: "https://www.stats.gov.cn/english/PressRelease/202602/t20260228_1962661.html", date: "2026-02-28" },
        { title: "China's GDP grows 5 pct in 2025, hitting annual target", publisher: "The State Council of the PRC", url: "https://english.www.gov.cn/archive/statistics/202601/19/content_WS696ddb7dc6d00ca5f9a08a7f.html", date: "2026-01-19" },
        { title: "China's 15th Five-Year Plan", publisher: "IISS", url: "https://www.iiss.org/online-analysis/online-analysis/2026/03/chinas-15th-five-year-plan/", date: "2026-03" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "cn-2", kind: "power", asOf: "2026-09-28",
      title: "The Party runs the state",
      dek: "China has a government, a parliament and courts, but all of them answer to the Communist Party, and the Party answers to one man more than it has in decades.",
      blocks: [
        { type: "diagram", src: "img/cn/cn-2-power.svg",
          alt: "Diagram of power in China. The Communist Party's congress chooses the Politburo Standing Committee, led by Xi Jinping, which directs the state (State Council and National People's Congress). The Party also controls the army through the Central Military Commission, chaired by Xi.",
          caption: "Party first: every institution in China, including the army, is led by the Communist Party.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "One party, two ladders", md:
          "China's constitution describes a state with a president, a cabinet called the State Council and a legislature, the National People's Congress. Every one of those posts is filled by Party members, and the Party's own ladder is the one that matters.\n\n" +
          "At its base are about 100 million members. Every five years a Party Congress chooses a Central Committee of about 200, which chooses the Politburo and, at the very top, the Politburo Standing Committee: seven men who make the big decisions. The top Party post, general secretary, is the real source of power. The state presidency is a title that comes with it." },
        { type: "section", head: "One man at the top", md:
          "After Mao Zedong's death in 1976, China's leaders tried to prevent one-man rule: leaders served two five-year terms, then handed over. Xi Jinping ended that. In 2018 the presidency's two-term limit was removed, and in 2022 Xi began an unprecedented third term as Party leader, surrounded by loyalists.\n\n" +
          "His supporters argue that a strong centre keeps the country stable while it faces a hostile United States. Critics argue that concentrating power in one person makes mistakes harder to spot and to correct." },
        { type: "section", head: "How decisions get made", md:
          "Big choices are made behind closed doors and announced at set-piece meetings. The Central Committee meets in plenary sessions, or 'plenums'; the Fourth Plenum of October 2025, for example, set the outline of the next five-year plan and removed purged generals. Day-to-day policy runs through Party commissions on finance, foreign affairs and security, most of them chaired by Xi himself.\n\n" +
          "The National People's Congress then meets each March to pass laws and plans that have already been decided. It has never voted down a major government proposal." },
        { type: "section", head: "The army belongs to the Party", md:
          "The People's Liberation Army is not the country's army in the Western sense but the Party's. It answers to the [[Central Military Commission]], which Xi chairs. Mao's line that 'political power grows out of the barrel of a gun' is still taught, and it explains why Xi treats loyalty in the army as a top priority, a point that matters for the purges in [[lesson:cn-7]]." },
        { type: "section", head: "Control at home", md:
          "The Party does not allow organised opposition, a free press or independent courts. The internet sits behind the 'Great Firewall', which blocks many foreign sites. In Xinjiang, the mass detention of Uyghurs and other Muslims led the UN human rights office in 2022 to report serious human rights violations; Beijing calls its policies counter-terrorism and job training. In Hong Kong, a 2020 national security law ended most open protest and opposition politics." },
        { type: "compare", head: "Two ways of seeing the system",
          left: { head: "How Beijing sees it", md:
            "One-party rule delivered the fastest rise out of poverty in history, keeps a vast country united and stable, and lets China plan for decades rather than for the next election." },
          right: { head: "How critics see it", md:
            "Without elections, a free press or independent courts, nobody can check the leadership, abuses go unpunished, and mistakes, such as the long, harsh Covid lockdowns, are hard to reverse." } }
      ],
      takeaways: [
        "The Communist Party sits above China's government, parliament, courts and army; its general secretary is the real leader.",
        "Xi Jinping broke with the two-term norm and is now in a third term as Party leader.",
        "The army answers to the Party through the Central Military Commission, which Xi chairs."
      ],
      check: { q: "Which post is the real source of power in China?",
        choices: ["President of the state", "General secretary of the Communist Party", "Chair of the National People's Congress"], answer: 1,
        explain: "The Party general secretary leads the country. The state presidency is a mostly ceremonial title that the general secretary also holds." },
      sources: [
        { title: "\"We Must Depend Entirely on Ourselves\": Policy, Politics, and U.S.–China Relations at the Fourth Plenum", publisher: "Asia Society", url: "https://asiasociety.org/policy-institute/we-must-depend-entirely-ourselves-policy-politics-and-us-china-relations-fourth-plenum", date: "2025-10" },
        { title: "OHCHR Assessment of human rights concerns in the Xinjiang Uyghur Autonomous Region", publisher: "UN Office of the High Commissioner for Human Rights", url: "https://www.ohchr.org/en/documents/country-reports/ohchr-assessment-human-rights-concerns-xinjiang-uyghur-autonomous-region", date: "2022-08-31" },
        { title: "China's top general under investigation in latest military purge", publisher: "NPR", url: "https://www.npr.org/2026/01/24/g-s1-107210/chinas-top-general-under-investigation-in-latest-military-purge", date: "2026-01-24" }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "cn-9", kind: "founding", asOf: "2026-09-28",
      title: "1949: the People's Republic is born",
      dek: "After a century of humiliation, revolution and civil war, Mao Zedong proclaimed a new China from the gate of the Forbidden City.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn/cn-9-hero.webp",
          alt: "Illustration of a vast red gate tower with golden roofs above a huge empty square in autumn light.",
          caption: "Tiananmen, the Gate of Heavenly Peace, where Mao proclaimed the People's Republic on 1 October 1949.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast red imperial gate tower with sweeping golden-tiled roofs above a huge empty stone square, autumn morning light, a few distant figures, monumental and solemn, no portraits, no flags, no legible text." },
        { type: "timeline", head: "From empire to People's Republic", items: [
          ["1839–42", "First Opium War with Britain"],
          ["1911", "Revolution ends 2,000 years of imperial rule"],
          ["1921", "Chinese Communist Party founded in Shanghai"],
          ["1934–35", "The Long March"],
          ["1937–45", "War with Japan"],
          ["1946–49", "Civil war between Communists and Nationalists"],
          ["1 Oct 1949", "Mao proclaims the People's Republic"]
        ] },
        { type: "section", head: "The century of humiliation", md:
          "For most of history China saw itself as the centre of the world, ruled by emperors. In the 19th century that order collapsed. Britain defeated the Qing dynasty in the Opium Wars of 1839–42 and 1856–60, forcing it to open ports and hand over Hong Kong. Other powers, and later Japan, carved out privileges. Rebellions such as the Taiping, which cost perhaps 20 million lives, shook the country. Chinese nationalists call this period the 'century of humiliation', and the Communist Party still describes its rule as ending it." },
        { type: "section", head: "Republic and chaos", md:
          "In 1911 revolutionaries overthrew the last emperor, and Sun Yat-sen proclaimed a republic. It soon fragmented into territories ruled by warlords. Sun's Nationalist Party, the Kuomintang (KMT), later led by Chiang Kai-shek, reunified much of the country by 1928, but turned on its former allies, the Communists, founded in 1921. Driven from their bases, the Communists made the Long March of 1934–35, a 10,000-kilometre retreat to the north-west during which Mao Zedong became their leader." },
        { type: "section", head: "War and revolution", md:
          "Japan invaded in 1937, occupying the coast and major cities; the war killed an estimated 14 million or more Chinese. The Nationalists bore the brunt of the conventional fighting and were exhausted by it, while the Communists expanded behind Japanese lines through guerrilla warfare and land reform that won peasant support. After Japan's defeat in 1945, civil war resumed. Better organised and more motivated, the Communists won decisive battles in 1948–49." },
        { type: "section", head: "'The Chinese people have stood up'", md:
          "On 1 October 1949 Mao proclaimed the People's Republic of China from Tiananmen gate in Beijing. Chiang Kai-shek fled with about two million followers to the island of Taiwan, where the Republic of China survives to this day (see [[unit:tw]]). The new state was modelled on the Soviet Union: one party, state ownership, and the army loyal to the Party. Landlords were dispossessed and hundreds of thousands, perhaps more, were killed in land reform and campaigns against 'counter-revolutionaries'. China entered the Korean War in 1950 against the US-led UN forces." },
        { type: "compare", head: "Two views of 1949",
          left: { head: "The Party's account", md:
            "The Communists united China, ended foreign domination, freed peasants from landlords and laid the foundation for today's revival." },
          right: { head: "Critics' account", md:
            "The revolution replaced one dictatorship with a harsher one, and the campaigns that followed cost tens of millions of lives." } },
        { type: "section", head: "Why it still matters", md:
          "Xi Jinping's slogan, the 'great rejuvenation of the Chinese nation', draws directly on the memory of humiliation and revolution. The unfinished civil war explains why Beijing claims Taiwan, and the Party's legitimacy still rests on the claim that only it could make China strong and united." }
      ],
      takeaways: [
        "Foreign defeats and internal rebellions in the 19th century are remembered as the 'century of humiliation'.",
        "After the fall of the empire in 1911, Nationalists and Communists fought for control, interrupted by war with Japan.",
        "Mao proclaimed the People's Republic on 1 October 1949; the Nationalists fled to Taiwan."
      ],
      check: { q: "Where did Chiang Kai-shek's Nationalists go after losing the civil war?",
        choices: ["Hong Kong", "Taiwan", "Japan"], answer: 1,
        explain: "Chiang and about two million followers retreated to Taiwan, where the Republic of China continues." },
      sources: [
        { title: "Mao Zedong", publisher: "Britannica", url: "https://www.britannica.com/biography/Mao-Zedong", date: "n.d." },
        { title: "Chinese Civil War", publisher: "Britannica", url: "https://www.britannica.com/event/Chinese-Civil-War", date: "n.d." },
        { title: "The Chinese Revolution of 1949", publisher: "US Department of State, Office of the Historian", url: "https://history.state.gov/milestones/1945-1952/chinese-rev", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "cn-3", kind: "history", asOf: "2026-09-28",
      title: "From Mao to Xi",
      dek: "Seventy-seven years of the People's Republic, in five turning points.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn/cn-3-hero.webp",
          alt: "Illustration of a vast city square at dawn, empty, with a long red gatehouse under grey sky and pigeons rising.",
          caption: "Tiananmen Square has seen the founding of the People's Republic, mass rallies and the crackdown of 1989.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast, empty city square at dawn seen from ground level, a long red gatehouse with a tiled roof in the distance, grey sky, a flock of pigeons rising, puddles reflecting the light, stillness and scale." },
        { type: "timeline", head: "The short version", items: [
          ["1949", "Mao Zedong's Communists win the civil war and found the People's Republic"],
          ["1958–76", "The Great Leap Forward's famine and the Cultural Revolution's chaos"],
          ["1978", "Deng Xiaoping launches 'reform and opening'"],
          ["1989", "The army crushes the Tiananmen Square protests"],
          ["2001–12", "China joins the WTO and becomes the world's factory; Xi takes over the Party"]
        ] },
        { type: "section", head: "1. Revolution (1949)", md:
          "After decades of civil war and Japanese invasion, Mao Zedong's Communists won control of the mainland in 1949 and founded the People's Republic. The defeated Nationalist government retreated to Taiwan, where it still governs as the Republic of China. That unfinished civil war is the root of today's [[unit:tw]] question." },
        { type: "section", head: "2. Mao's disasters (1958–76)", md:
          "Mao's Great Leap Forward, a crash drive to industrialise, caused a famine in which tens of millions of people died. Then the Cultural Revolution of 1966–76 turned young Red Guards against teachers, officials and traditions, and left the country traumatised. Today's leaders, including Xi, whose own father was purged and who was sent to the countryside as a teenager, grew up in its shadow." },
        { type: "section", head: "3. Reform and opening (1978)", md:
          "Two years after Mao's death, Deng Xiaoping let farmers sell their own crops, opened special economic zones to foreign investors and allowed private business to grow. The result was the fastest sustained economic rise in history: hundreds of millions of people left poverty over the next four decades.\n\n" +
          "Deng's deal with the country was prosperity in exchange for staying out of politics. That deal still underpins the Party's claim to rule." },
        { type: "section", head: "4. Tiananmen (1989)", md:
          "In spring 1989 students and workers filled Tiananmen Square calling for reform and an end to corruption. On the night of 3–4 June, the army cleared the square and surrounding streets with tanks and live fire, killing hundreds, possibly thousands. The subject is still censored in China. The Party concluded that loosening political control was a threat to its survival, and it has never tried it again." },
        { type: "section", head: "5. The world's factory, and Xi (2001–12)", md:
          "Joining the World Trade Organization in 2001 opened world markets to Chinese goods, and China became the workshop of the world. By 2010 it had overtaken Japan as the second-largest economy. In 2012 Xi Jinping became Party leader, promising a 'great rejuvenation of the Chinese nation', a campaign against corruption, and a more assertive China abroad." },
        { type: "section", head: "The Xi years (2012–)", md:
          "Since then the Party has tightened its grip. Xi's anti-corruption campaign removed rivals along with corrupt officials. The Belt and Road Initiative, launched in 2013, lent heavily for ports, railways and power plants across Asia, Africa and Latin America. China built military bases on reefs in the South China Sea, and in 2020 imposed a national security law on Hong Kong.\n\n" +
          "The long 'zero-Covid' lockdowns ended abruptly in December 2022, after rare street protests in several cities. They showed both the reach of the state and the limits of public patience." }
      ],
      takeaways: [
        "The Communists won the civil war in 1949; the losing side's government still rules Taiwan.",
        "Mao's campaigns brought famine and chaos; Deng's reforms from 1978 brought the fastest economic rise in history.",
        "After Tiananmen in 1989 the Party chose growth without political freedom, a choice Xi has doubled down on."
      ],
      check: { q: "Who launched China's 'reform and opening' in 1978?",
        choices: ["Mao Zedong", "Deng Xiaoping", "Xi Jinping"], answer: 1,
        explain: "Deng Xiaoping opened China to markets and foreign investment two years after Mao's death. Xi became Party leader in 2012." },
      sources: [
        { title: "China profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-asia-pacific-13017882", date: "n.d." },
        { title: "China's WTO accession", publisher: "World Trade Organization", url: "https://www.wto.org/english/thewto_e/countries_e/china_e.htm", date: "n.d." },
        { title: "U.S.-China Relations timeline", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/timeline/us-relations-china", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "cn-10", kind: "past", asOf: "2026-09-28",
      title: "The Great Leap and the Cultural Revolution",
      dek: "Mao's campaigns to transform China caused one of history's worst famines and a decade of political terror.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn/cn-10-hero.webp",
          alt: "Illustration of a row of small clay backyard furnaces glowing in a bare village at dusk, with leafless trees.",
          caption: "During the Great Leap Forward, villages melted down pots and tools in backyard furnaces to meet steel quotas.",
          credit: "AI illustration — not a photograph",
          prompt: "A bare rural village at dusk, a row of small crude clay backyard furnaces glowing orange with smoke rising, leafless trees, empty dry fields beyond, a sense of desperation and waste, figures only in the far distance, no legible text." },
        { type: "facts", head: "Two catastrophes", rows: [
          ["Great Leap Forward", "1958–62"],
          ["Famine deaths", "Estimated 15 to 45 million, depending on the study"],
          ["Cultural Revolution", "1966–76"],
          ["Deaths", "Estimates range from hundreds of thousands to about 2 million"],
          ["Party verdict (1981)", "Mao's rule '70% right, 30% wrong'"]
        ] },
        { type: "section", head: "The Great Leap Forward", md:
          "In 1958 Mao launched the Great Leap Forward to overtake Britain's industrial output within 15 years. Peasants were herded into vast communes, private plots were abolished, and millions were sent to build dams or to melt down pots and tools in backyard furnaces to produce steel, much of it useless. Officials, afraid to report failure, inflated harvest figures, and the state requisitioned grain on the basis of those false numbers, even exporting it." },
        { type: "section", head: "The famine", md:
          "The result was the deadliest famine in recorded history. Between 1959 and 1961 tens of millions starved; historians' estimates range from about 15 million to 45 million deaths. When the defence minister, Peng Dehuai, criticised the policies in 1959, Mao purged him. The disaster weakened Mao, and other leaders, including Liu Shaoqi and Deng Xiaoping, quietly reversed some policies." },
        { type: "section", head: "The Cultural Revolution", md:
          "In 1966 Mao struck back. He called on young 'Red Guards' to attack 'capitalist roaders' and the 'four olds': old customs, culture, habits and ideas. Teachers, intellectuals and officials were beaten, humiliated at 'struggle sessions', imprisoned or killed; temples and books were destroyed. Liu Shaoqi died in detention, and Deng was purged. Schools and universities closed, and some 17 million urban youths were 'sent down' to the countryside, among them a teenage Xi Jinping. Violence between factions verged on civil war in places." },
        { type: "section", head: "The end and the verdict", md:
          "The chaos subsided after 1969 but lasted until Mao's death in 1976, when his widow and three allies, the 'Gang of Four', were arrested. Deng Xiaoping returned and launched 'reform and opening'. In 1981 the Party issued its verdict: Mao had made 'gross mistakes' in his later years, but his contributions outweighed them. Open discussion remains restricted; the anniversaries pass largely unmarked in China." },
        { type: "section", head: "Life in the Cultural Revolution", md:
          "For ordinary people the decade meant fear. Neighbours, colleagues and even children denounced one another; 'class enemies' and their families lost jobs and homes; and a single wrong word about Mao could bring ruin. Mao's Little Red Book of quotations was carried everywhere. The 'lost generation' of sent-down youth missed years of schooling, and many later wrote about the experience in a genre known as 'scar literature'." },
        { type: "compare", head: "Remembering Mao",
          left: { head: "The official line", md:
            "Mao founded the new China. His late errors were serious but have been corrected, and dwelling on them weakens the nation." },
          right: { head: "Historians and survivors", md:
            "Unaccountable power caused both catastrophes. Silence about them makes it harder to prevent a return to one-man rule." } },
        { type: "section", head: "Why it still matters", md:
          "Deng's reforms, including collective leadership and term limits, were designed to stop another Mao. Xi Jinping's abolition of presidential term limits in 2018 and the personality cult around him have revived those fears among critics. The period also shaped Xi personally and a generation of leaders who lived through it." }
      ],
      takeaways: [
        "The Great Leap Forward (1958–62) caused a famine that killed tens of millions.",
        "The Cultural Revolution (1966–76) unleashed Red Guards against teachers, officials and tradition.",
        "The Party judged Mao's record '70% right, 30% wrong'; open debate remains restricted."
      ],
      check: { q: "What were the Red Guards?",
        choices: ["Soviet advisers", "Young militants Mao mobilised against 'capitalist roaders' during the Cultural Revolution", "The palace guard"], answer: 1,
        explain: "Mao called on students and young people to attack officials, intellectuals and traditions from 1966." },
      sources: [
        { title: "Great Leap Forward", publisher: "Britannica", url: "https://www.britannica.com/event/Great-Leap-Forward", date: "n.d." },
        { title: "Cultural Revolution", publisher: "Britannica", url: "https://www.britannica.com/event/Cultural-Revolution", date: "n.d." },
        { title: "Resolution on certain questions in the history of our Party (1981)", publisher: "Wilson Center Digital Archive", url: "https://digitalarchive.wilsoncenter.org/document/resolution-certain-questions-history-our-party-founding-peoples-republic-china", date: "1981-06-27" }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "cn-11", kind: "past", asOf: "2026-09-28",
      title: "Tiananmen, 1989",
      dek: "Weeks of protest for reform ended when the army cleared Beijing on 4 June. China has been silent about it ever since.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn/cn-11-hero.webp",
          alt: "Illustration of a wide empty avenue at night with streetlights, a line of bicycles abandoned by the kerb and scattered papers blowing in the wind.",
          caption: "Chang'an Avenue, Beijing's main boulevard, where troops advanced on the night of 3–4 June 1989.",
          credit: "AI illustration — not a photograph",
          prompt: "A very wide empty city avenue at night under orange streetlights, a row of abandoned bicycles by the kerb, scattered leaflets blowing across the asphalt, dark buildings, eerie and sorrowful, no people, no vehicles, no legible text." },
        { type: "timeline", head: "Spring 1989", items: [
          ["15 April", "Death of the reformist leader Hu Yaobang; students gather"],
          ["13 May", "Hunger strike begins in Tiananmen Square"],
          ["20 May", "Martial law declared in Beijing"],
          ["3–4 June", "Troops and tanks clear the square and surrounding streets"],
          ["5 June", "A lone man blocks a column of tanks"]
        ] },
        { type: "section", head: "Reform and discontent", md:
          "A decade after Deng Xiaoping's reforms began, China was changing fast. Markets were growing, but so were inflation, which hit about 18% in 1988, and corruption among officials' families. Students and intellectuals, exposed to new ideas, wanted political change too: a free press, dialogue with leaders and an end to privilege. When Hu Yaobang, a former Party chief ousted for being too liberal, died in April 1989, students gathered in Tiananmen Square to mourn him and to press their demands." },
        { type: "section", head: "The protests", md:
          "The protests grew into the largest in Communist China's history, drawing workers and residents as well as students, and spreading to dozens of cities. In May, thousands of students began a hunger strike, just as Soviet leader Mikhail Gorbachev arrived for a state visit, embarrassing the leadership in front of the world's press. The Party chief, Zhao Ziyang, favoured dialogue; Premier Li Peng and the elders around Deng wanted a crackdown. Zhao visited the students, telling them 'we came too late', and was then purged." },
        { type: "section", head: "The crackdown", md:
          "Martial law was declared on 20 May, but crowds blocked the army from entering Beijing. On the night of 3–4 June, troops with orders to clear the square by morning opened fire on crowds in the streets leading to it. The death toll has never been officially disclosed. The government's count was 241, including soldiers; the Chinese Red Cross briefly cited about 2,700; other estimates run from several hundred to, in one British diplomatic cable, 10,000. The next day an unidentified man stood before a column of tanks, an image seen around the world." },
        { type: "section", head: "The aftermath", md:
          "Protest leaders fled abroad or were jailed, and thousands were arrested. Zhao spent his last 15 years under house arrest. Western countries imposed arms embargoes, which the EU still maintains. Within China, the Party chose a new bargain: rapid economic growth and rising living standards in exchange for political obedience, which Deng relaunched in 1992. The events are censored online, and the 'Tiananmen Mothers', relatives of those killed, have been harassed for seeking accountability." },
        { type: "compare", head: "Two narratives",
          left: { head: "The Party", md:
            "Decisive action stopped 'turmoil' that would have plunged China into chaos, and made the decades of stability and growth that followed possible." },
          right: { head: "Critics and families of victims", md:
            "The army killed unarmed citizens in the streets of the capital. The truth, the death toll and justice are still denied." } },
        { type: "section", head: "Why it still matters", md:
          "Tiananmen shapes how the Party sees threats to its rule: it studies the fall of the Soviet Union and the 'colour revolutions' closely, and treats any mass movement, from Hong Kong's protests in 2019 to criticism online, as potential turmoil. For many outside China, 4 June remains the defining image of the regime." }
      ],
      takeaways: [
        "In spring 1989 students and workers protested in Tiananmen Square and across China for political reform.",
        "On 3–4 June the army cleared Beijing, killing hundreds, possibly thousands; the toll has never been officially disclosed.",
        "The Party then traded growth for obedience; the events remain censored in China."
      ],
      check: { q: "What happened to Party chief Zhao Ziyang after he sympathised with the protesters?",
        choices: ["He became president", "He was purged and spent his last 15 years under house arrest", "He fled abroad"], answer: 1,
        explain: "Zhao opposed martial law, was removed from power and lived under house arrest until his death in 2005." },
      sources: [
        { title: "Tiananmen Square incident", publisher: "Britannica", url: "https://www.britannica.com/event/Tiananmen-Square-incident", date: "n.d." },
        { title: "The 1989 Tiananmen crackdown", publisher: "Amnesty International", url: "https://www.amnesty.org/en/projects/the-1989-tiananmen-crackdown/", date: "n.d." },
        { title: "What the Tiananmen Square crackdown on June 4, 1989 was about", publisher: "South China Morning Post", url: "https://www.scmp.com/news/china/politics/article/3135075/tiananmen-square-crackdown-what-june-fourth-incident-1989-was", date: "2021" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "cn-4", kind: "players", asOf: "2026-09-28",
      title: "The people around Xi",
      dek: "Power in China is concentrated as never since Mao, so the players are Xi and the loyalists he has chosen.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn/cn-4-hero.webp",
          alt: "Illustration of a long, empty conference hall with rows of red-draped tables beneath a huge ceiling of lights.",
          caption: "China's leaders are rarely seen arguing in public. Their decisions come out of closed meetings like the Party's plenums.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast, empty ceremonial conference hall with long rows of tables draped in red cloth, identical white teacups laid out, a ceiling studded with hundreds of small lights, a single attendant seen from far away adjusting a chair, hush and order." },
        { type: "people", head: "Six to know", items: [
          { name: "Xi Jinping", role: "General secretary of the Communist Party, president, chair of the Central Military Commission",
            img: "img/cn/portrait-xi.webp", source: "Kremlin.ru photo (CC BY 4.0) via Wikimedia Commons; confirm the licence on the file page.",
            md: "China's most powerful leader since Mao, now in his third term. His priorities: Party control over everything, technological self-reliance, a stronger military and, in Beijing's words, 'reunification' with Taiwan." },
          { name: "Li Qiang", role: "Premier (head of the State Council)",
            img: "img/cn/portrait-li-qiang.webp", source: "Official photo from a state visit; find a CC-licensed version on Wikimedia Commons and confirm the licence.",
            md: "Runs the government day to day and is the public face of economic policy. A long-time Xi ally from his years in Zhejiang province." },
          { name: "Cai Qi", role: "Politburo Standing Committee; runs the Party's central office",
            img: "img/cn/portrait-cai-qi.webp", source: "Find a CC-licensed photo on Wikimedia Commons and confirm the licence.",
            md: "Xi's gatekeeper and chief of staff, and one of the closest people to him. Controls access and the flow of paper to the top." },
          { name: "He Lifeng", role: "Vice premier; lead trade negotiator",
            img: "img/cn/portrait-he-lifeng.webp", source: "Find a CC-licensed photo on Wikimedia Commons and confirm the licence.",
            md: "China's counterpart to US Treasury Secretary Scott Bessent in the tariff talks that produced the 2025 truce and its extensions." },
          { name: "Wang Yi", role: "Foreign minister and the Party's top foreign-policy official",
            img: "img/cn/portrait-wang-yi.webp", source: "Kremlin.ru photo (CC BY 4.0) via Wikimedia Commons; confirm the licence on the file page.",
            md: "China's most experienced diplomat, handling the United States, Russia and the Iran war. Known for sharp words when Beijing feels its core interests are touched." },
          { name: "Zhang Shengmin", role: "Vice chair of the Central Military Commission",
            img: "img/cn/portrait-zhang-shengmin.webp", source: "Find a CC-licensed photo on Wikimedia Commons and confirm the licence.",
            md: "The army's top discipline official, promoted in October 2025 after the purge of He Weidong. With Xi, he is one of only two known members left on the commission after 2026's purges." }
        ] },
        { type: "section", head: "Loyalty over factions", md:
          "For decades China's elite was described in terms of factions, such as the Communist Youth League group around former leader Hu Jintao. Xi has largely ended that balance. The Standing Committee chosen in 2022 is made up of people who worked with him or rose under him, and rivals and would-be successors have been sidelined.\n\n" +
          "The upside for Xi is unity. The risk, analysts say, is that nobody near the top will tell him bad news, and that there is no obvious successor, which makes the 2027 Party Congress a moment to watch." },
        { type: "section", head: "Public mood", md:
          "Without free elections, the Party reads the public through surveillance, online sentiment and local petitions. Nationalist voices online push for a tougher line on [[unit:jp]] and the [[unit:us]]. The discontent leaders watch most closely is economic: youth unemployment, falling home values and long working hours. 'Lying flat', slang for opting out of the rat race, became a byword for the mood of many young people." },
        { type: "section", head: "The people who aren't in the room", md:
          "China has private billionaires, but after a 2020–21 crackdown on tech giants such as Alibaba, they keep a low profile and follow the Party's line. Provincial leaders, state-owned company bosses and army generals all hold real power, but only as long as Beijing trusts them. That is why the anti-corruption campaign, which has disciplined over a million officials since 2012, is also a tool of political control." }
      ],
      takeaways: [
        "Xi Jinping holds all three top jobs: Party chief, head of state and head of the military.",
        "The top leadership is made up of Xi's allies; the old balance of factions has largely gone.",
        "There is no clear successor, which makes the 2027 Party Congress a key moment."
      ],
      check: { q: "Who is China's premier, running the government day to day?",
        choices: ["Wang Yi", "Li Qiang", "Cai Qi"], answer: 1,
        explain: "Li Qiang is premier. Wang Yi runs foreign policy, and Cai Qi runs the Party's central office as Xi's chief of staff." },
      sources: [
        { title: "Self-Strengthening for Strategic Competition: What to Watch at China's Fourth Plenum", publisher: "Asia Society", url: "https://asiasociety.org/policy-institute/self-strengthening-strategic-competition-what-watch-chinas-fourth-plenum", date: "2025-10" },
        { title: "China places military's top uniformed officer under investigation", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2026/01/24/asia-pacific/politics/china-corruption-cmc-zhang-youxia/", date: "2026-01-24" },
        { title: "Trump-Xi 2026 Summits", publisher: "CSIS", url: "https://www.csis.org/programs/trump-xi-2026-summits", date: "2026-09" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "cn-5", kind: "story", asOf: "2026-09-28",
      title: "Trade war to truce",
      dek: "Tariffs of 145%, a squeeze on rare earths, and then two summits: how the world's biggest economies stepped back from the brink.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn/cn-5-hero.webp",
          alt: "Illustration of a giant container port at night, cranes lit up, with a lone cargo ship waiting offshore.",
          caption: "Trade between the US and China fell sharply during the 2025 tariff war, then partly recovered under a truce.",
          credit: "Illustration — not a photograph",
          prompt: "A giant container port at night seen from a hill, rows of gantry cranes lit orange, stacks of containers in muted colours, one large cargo ship waiting offshore under a hazy moon, a sense of pause." },
        { type: "section", head: "What happened", md:
          "In April 2025, as [[unit:us]] imposed [[tariff|tariffs]] on almost every country, the United States and China escalated against each other until US tariffs on Chinese goods reached 145% and China's on American goods 125%. Trade between them nearly froze.\n\n" +
          "Talks in Geneva in May cut the rates, but in October China announced sweeping new controls on exports of [[rare earths]], the minerals it dominates and that go into magnets, chips and fighter jets. Trump threatened another 100%. Then, on 30 October in Busan, South Korea, he and Xi agreed a one-year truce: China paused the new controls and resumed buying American soybeans, and the US cut its fentanyl-linked tariff." },
        { type: "section", head: "Two summits", md:
          "In 2026 the truce held and grew into a courtship. Trump made a state visit to Beijing on 13–15 May, where the two sides spoke of 'constructive strategic stability' and set up new boards on trade and investment. Xi returned the visit in September, at the White House. That summit produced few concrete deals, but it extended the trade truce to 10 January 2027 and agreed easier tariffs on $30 billion of non-sensitive goods each way.\n\n" +
          "Meanwhile the US Supreme Court's February ruling against Trump's emergency tariffs removed some of the rates on China too, though older tariffs from 2018 remain." },
        { type: "timeline", head: "How it unfolded", items: [
          ["Apr 2025", "Tit-for-tat tariffs peak at 145% (US) and 125% (China)"],
          ["May 2025", "Geneva talks cut the rates for 90 days"],
          ["Oct 2025", "China expands rare-earth export controls; truce agreed in Busan on 30 October"],
          ["May 2026", "Trump's state visit to Beijing"],
          ["Sep 2026", "Xi's state visit to Washington; truce extended to 10 January 2027"]
        ] },
        { type: "section", head: "Why it happened", md:
          "The US wanted to shrink China's trade surplus, bring manufacturing home and slow China's progress in advanced technology. China's leverage was rare earths: it refines the large majority of the world's supply, and its October controls showed it could hurt American industry fast.\n\n" +
          "Both sides discovered the limits of pressure. Each needed the other's markets, and neither wanted a crisis before key moments at home." },
        { type: "compare", head: "The argument",
          left: { head: "Washington's case", md:
            "China built its rise on subsidies, forced technology transfer and closed markets. Tariffs and export controls protect American jobs and keep the most advanced chips out of China's military." },
          right: { head: "Beijing's case", md:
            "The United States is trying to contain a rising competitor. China's firms win on efficiency, and American tariffs mostly raise prices for American consumers." } },
        { type: "section", head: "What's next", md:
          "The truce now runs to 10 January 2027, and APEC's leaders meet in Shenzhen, China, in November 2026. The deeper rivalry over chips, artificial intelligence and [[unit:tw]] is untouched by any trade deal." },
        { type: "callout", tone: "why", md:
          "When the two biggest economies raise tariffs on each other, prices, supply chains and growth everywhere feel it. Companies from Vietnam to Mexico have gained by making goods that used to come straight from China, and lost when tariffs followed them." }
      ],
      takeaways: [
        "In 2025 US and Chinese tariffs on each other spiked above 100% before a truce agreed in Busan on 30 October.",
        "China's biggest lever was its near-monopoly on processing rare earths.",
        "Two 2026 summits steadied relations and extended the truce to 10 January 2027, without settling the tech rivalry."
      ],
      check: { q: "What was China's strongest point of leverage in the 2025 trade war?",
        choices: ["Its holdings of US government debt", "Its control of rare-earth processing", "Its purchases of American aircraft"], answer: 1,
        explain: "China refines most of the world's rare earths, used in magnets for cars, electronics and weapons. Its October 2025 export controls brought Washington back to the table." },
      sources: [
        { title: "Trump-Xi 2026 Summits", publisher: "CSIS", url: "https://www.csis.org/programs/trump-xi-2026-summits", date: "2026-09" },
        { title: "Trump, Xi wrap state visit centered on spectacle over substance", publisher: "CNBC", url: "https://www.cnbc.com/2026/09/25/trump-xi-summit-takeaways.html", date: "2026-09-25" },
        { title: "What Beijing got from the Trump-Xi summit", publisher: "Brookings", url: "https://www.brookings.edu/articles/what-beijing-got-from-the-trump-xi-summit/", date: "2026" },
        { title: "Fact Sheet: President Donald J. Trump Advances a Fair and Reciprocal Relationship with China", publisher: "The White House", url: "https://www.whitehouse.gov/fact-sheets/2026/09/fact-sheet-president-donald-j-trump-advances-a-fair-and-reciprocal-relationship-with-china-while-hosting-historic-state-visit/", date: "2026-09" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "cn-6", kind: "story", asOf: "2026-09-28",
      title: "The economy question",
      dek: "China hit its 5% growth target in 2025, but a property bust, weak spending and an ageing population are forcing a new bet on technology.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn/cn-6-hero.webp",
          alt: "Illustration of rows of unfinished apartment towers at dusk, cranes standing still, with a bright new electric-car factory in the foreground.",
          caption: "Two economies in one: an unfinished housing boom, and new industries racing ahead.",
          credit: "AI illustration — not a photograph",
          prompt: "Rows of identical unfinished concrete apartment towers at dusk with idle cranes and empty windows, and in the foreground a bright, modern factory with rows of new electric cars under white light, a quiet contrast between old and new." },
        { type: "section", head: "What happened", md:
          "For two decades, building homes and infrastructure drove China's growth. That ended when the government cracked down on debt-fuelled developers in 2020. Giants such as Evergrande collapsed, home prices fell for years, and families, who hold much of their wealth in property, felt poorer and spent less.\n\n" +
          "The result is an economy that makes far more than its own people buy. Prices have hovered around zero, a sign of weak demand, while exports have boomed: China's trade surplus passed $1 trillion in 2025. Officially the economy grew 5.0% that year, exactly on target." },
        { type: "facts", head: "By the numbers", rows: [
          ["GDP growth 2025", "5.0% (target: about 5%)"],
          ["2026 target", "4.5–5%"],
          ["Births / deaths 2025", "7.92 million / 11.31 million"],
          ["New five-year plan", "15th Five-Year Plan, 2026–30, approved 12 March 2026"]
        ] },
        { type: "section", head: "The local-debt hangover", md:
          "Local governments used to fund roads, schools and wages by selling land to developers. When the property market fell, that income shrank, exposing large debts hidden in local investment companies. In November 2024 Beijing approved a 10-trillion-yuan programme to let local governments refinance those hidden debts over several years.\n\n" +
          "That eased the risk of a crisis, but it leaves many cities with little money to spend, one reason growth relies so heavily on factories and exports." },
        { type: "section", head: "The new bet", md:
          "The 15th [[Five-Year Plan]], approved by the National People's Congress on 12 March 2026, puts 'high-quality development' and technological self-reliance at the centre: chips, artificial intelligence, advanced manufacturing and energy. The logic is strategic as much as economic. After years of American export controls, Beijing wants never again to depend on others for the technologies it considers vital.\n\n" +
          "The government has also launched a campaign against 'involution', its term for ruinous price wars among firms producing the same goods, from solar panels to electric cars." },
        { type: "section", head: "Why it matters", md:
          "Economists inside and outside China argue that it needs its own households to spend more, which means stronger pensions, health care and incomes, rather than ever more factories. Otherwise its surplus will keep spilling onto world markets and provoking tariffs from the [[unit:us]], Europe and others.\n\n" +
          "Beijing has moved cautiously, preferring to support industry. Whether it shifts toward consumers is one of the biggest questions for the world economy." },
        { type: "section", head: "What's next", md:
          "Watch retail sales, home prices and consumer prices, the clearest signs of whether households are regaining confidence. Small steps toward consumers have begun, such as a national childcare subsidy introduced in 2025, but the 2026 growth target of 4.5–5% is the lowest China has set in decades, a quiet admission that the old engines are slowing." },
        { type: "compare", head: "Two readings",
          left: { head: "The optimistic view", md:
            "China is leading the industries of the future: electric cars, batteries, solar and increasingly AI. Growth near 5% is strong for an economy its size, and the property slump is being managed." },
          right: { head: "The worried view", md:
            "Weak spending, falling prices, local-government debt and a shrinking workforce resemble Japan before its lost decades. Official figures may flatter reality, and exports can't carry the economy forever." } }
      ],
      takeaways: [
        "China's property bust has weighed on household wealth and spending since 2020.",
        "Exports boomed instead, pushing its trade surplus past $1 trillion in 2025 and provoking tariffs abroad.",
        "The 15th Five-Year Plan (2026–30) bets on technological self-reliance rather than a big boost to consumers."
      ],
      check: { q: "What does the Chinese government mean by 'involution'?",
        choices: ["A shrinking population", "Ruinous price wars among firms making the same goods", "Moving factories abroad"], answer: 1,
        explain: "'Involution' describes cut-throat competition that drives prices and profits down across whole industries. Beijing launched a campaign against it in 2025." },
      sources: [
        { title: "China's Economy in 2025: GDP Hits 5.0% Growth Target", publisher: "China Briefing", url: "https://www.china-briefing.com/news/chinas-economy-in-2025-gdp-5-percent-growth/", date: "2026-01" },
        { title: "Statistical Communiqué on the 2025 National Economic and Social Development", publisher: "National Bureau of Statistics of China", url: "https://www.stats.gov.cn/english/PressRelease/202602/t20260228_1962661.html", date: "2026-02-28" },
        { title: "Deciphering the 15th Five Year Plan", publisher: "MERICS", url: "https://merics.org/en/comment/deciphering-15th-five-year-plan", date: "2026-03" },
        { title: "China's 15th Five-Year Plan: S&T and Economic Priorities", publisher: "Congressional Research Service", url: "https://www.everycrsreport.com/reports/IF13204.html", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "cn-7", kind: "story", asOf: "2026-09-28",
      title: "Purges and pressure",
      dek: "Xi has removed his top generals while his forces rehearse a blockade of Taiwan, and a row with Japan shows how fast pressure can turn economic.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn/cn-7-hero.webp",
          alt: "Illustration of a line of grey warships on a hazy sea at dawn, seen from a distant coastline.",
          caption: "China's navy is now the world's largest by number of ships. In December 2025 it rehearsed a blockade of Taiwan.",
          credit: "AI illustration — not a photograph",
          prompt: "A line of grey warships on a hazy, calm sea at dawn, seen from a distant rocky coastline, a patrol aircraft as a small silhouette overhead, muted blues and greys, tension without combat." },
        { type: "section", head: "What happened: the purge", md:
          "In October 2025 the Party expelled He Weidong, a vice chair of the [[Central Military Commission]], and eight other senior generals for corruption. In January 2026 it announced investigations into the most senior uniformed officer of all, Zhang Youxia, a long-time Xi ally, and into Liu Zhenli, head of the Joint Staff. Zhang was later removed from the commission.\n\n" +
          "By late 2026 only two known members of the seven-man commission remained in place: Xi himself and Zhang Shengmin, the discipline chief promoted to replace He. Two defence ministers in a row had already been purged in 2023–24. Outside analysts debate whether the purge reflects corruption in weapons buying, doubts about loyalty, or both." },
        { type: "section", head: "What happened: Taiwan and Japan", md:
          "The military kept up pressure on [[unit:tw]] all the same. In April 2025 it held drills called Strait Thunder-2025A, and on 29–30 December 2025 a larger exercise, Justice Mission-2025, rehearsed blockading Taiwan's ports. Air incursions near Taiwan eased in 2026, while Beijing courted Washington.\n\n" +
          "With [[unit:jp]], a remark became a crisis. In November 2025 Prime Minister Sanae Takaichi said a Chinese attack on Taiwan could be a threat to Japan's survival. China warned its citizens against travel to Japan, halted seafood imports and, on 6 January 2026, restricted exports to Japan of dual-use goods including key [[rare earths]]." },
        { type: "section", head: "Why it happened", md:
          "Beijing regards Taiwan as part of China and has never ruled out using force to take it; Taiwan's elected government rejects that claim. Drills send a message to Taipei and to its supporters abroad. The purges, meanwhile, show how seriously Xi takes the army's loyalty, and they may, some analysts argue, make the military less ready for a big operation in the near term." },
        { type: "compare", head: "Two views across the Strait",
          left: { head: "Beijing's view", md:
            "Taiwan has been part of China for centuries; its separation is a leftover of the civil war. Drills deter 'separatists' and the foreign forces that back them, and peaceful unification remains the goal." },
          right: { head: "Taipei's view", md:
            "The Republic of China on Taiwan has governed itself since 1949 and is a democracy; its future is for its 23 million people to decide. The drills are intimidation that makes war more likely, not less." } },
        { type: "section", head: "What's next", md:
          "Taiwan holds local elections in late November 2026, and Beijing's reaction to them will be watched closely. Relations with Japan remain tense, and Tokyo has started searching for rare earths elsewhere, including a first-of-its-kind mission to bring them up from the deep seabed. Inside the army, the question is who fills the empty seats on the military commission, most likely at or before the 2027 Party Congress." },
        { type: "callout", tone: "why", md:
          "A war over Taiwan would involve the world's two largest economies and its most advanced chip factories. Watching China's military, its politics and its pressure on neighbours is how analysts judge that risk." }
      ],
      takeaways: [
        "Xi has purged China's top generals, including his long-time ally Zhang Youxia, leaving the military commission nearly empty.",
        "The PLA rehearsed a blockade of Taiwan in December 2025 (Justice Mission-2025).",
        "After Japan's prime minister spoke about defending Taiwan, China hit Japan with travel warnings, a seafood ban and export controls."
      ],
      check: { q: "What did China's 'Justice Mission-2025' exercise in December 2025 rehearse?",
        choices: ["A blockade of Taiwan's ports", "A landing in Japan", "A border war with India"], answer: 0,
        explain: "The two-day exercise brought together the navy, air force and rocket force to rehearse blockading Taiwan's key ports." },
      sources: [
        { title: "China's top general under investigation in latest military purge", publisher: "NPR", url: "https://www.npr.org/2026/01/24/g-s1-107210/chinas-top-general-under-investigation-in-latest-military-purge", date: "2026-01-24" },
        { title: "Zhang Youxia: veteran princeling caught in China's military purge", publisher: "Taipei Times", url: "https://www.taipeitimes.com/News/feat/archives/2026/02/05/2003851793", date: "2026-02-05" },
        { title: "The PLA's \"Justice Mission-2025\" Exercise Around Taiwan", publisher: "Global Taiwan Institute", url: "https://globaltaiwan.org/2026/01/pla-justice-mission-2025/", date: "2026-01" },
        { title: "Japanese PM's Taiwan comments prompt China to ban certain exports to Japan", publisher: "CNN", url: "https://www.cnn.com/2026/01/06/business/china-japan-export-controls-intl-hnk", date: "2026-01-06" },
        { title: "China & Taiwan Update, September 1, 2026", publisher: "American Enterprise Institute", url: "https://www.aei.org/commentary/china-taiwan-update-september-1-2026/", date: "2026-09-01" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "cn-12", kind: "spotlight", asOf: "2026-09-28",
      title: "Tibet, Xinjiang and Hong Kong",
      dek: "On China's frontiers, Beijing has imposed tight control in the name of unity and security. Its critics call it repression.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn/cn-12-hero.webp",
          alt: "Illustration of a high mountain plateau with a white-walled monastery on a hillside, prayer flags fluttering and snow peaks behind.",
          caption: "The Tibetan plateau, where China has ruled since 1950.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast high mountain plateau under a deep blue sky, a white-walled monastery with dark red trim on a hillside, strings of faded prayer flags fluttering in the wind, snow-capped peaks beyond, serene and remote, no people close up, no legible text." },
        { type: "facts", head: "Three frontiers", rows: [
          ["Tibet", "Under Chinese rule since 1950; the Dalai Lama in exile in India since 1959"],
          ["Xinjiang", "About 12 million Uyghurs, mostly Muslim; mass detention reported from 2017"],
          ["Hong Kong", "Returned by Britain in 1997 under 'one country, two systems'"],
          ["National security law", "Imposed on Hong Kong in June 2020"]
        ] },
        { type: "section", head: "Why the frontiers matter to Beijing", md:
          "Han Chinese make up over 90% of China's population, but the regions on its edges are home to peoples with their own languages, religions and histories. The Party sees any separatism there as a mortal threat to national unity, the lesson it draws from the breakup of the Soviet Union, and it has invested heavily in development, migration of Han settlers and security. Human rights groups, the UN and many Western governments accuse it of systematic abuses." },
        { type: "section", head: "Tibet", md:
          "China's army entered Tibet in 1950; Beijing says it 'peacefully liberated' a region that had long been part of China, while Tibetan exiles say an independent country was occupied. After a failed uprising in 1959, the Dalai Lama, Tibet's spiritual leader, fled to India, where he still lives. Protests in 2008 were crushed, and more than 150 Tibetans have set themselves on fire since 2009. Beijing insists it will choose his successor; the Dalai Lama, who turned 90 in 2025, has said his reincarnation will be recognised by his own office, setting up a future confrontation." },
        { type: "section", head: "Xinjiang", md:
          "After deadly attacks blamed on Uyghur militants in 2013–14, Beijing launched a campaign against 'extremism' in Xinjiang. Researchers and leaked documents indicate that from 2017 up to a million or more Uyghurs and other Muslims were held in camps, alongside mass surveillance, forced labour programmes and measures that sharply cut birth rates. In 2022 the UN human rights office said the abuses 'may constitute crimes against humanity'; the US calls them genocide. China says the facilities were voluntary vocational schools that have closed, and that it defeated terrorism." },
        { type: "section", head: "Hong Kong", md:
          "Britain handed Hong Kong back in 1997 on the promise of 'one country, two systems': a high degree of autonomy and freedoms for 50 years. Mass protests in 2014, and much larger ones in 2019 against a bill allowing extradition to the mainland, challenged Beijing. In 2020 it imposed a national security law criminalising secession, subversion and collusion with foreign forces. Opposition figures were jailed, independent newspapers closed, and elections were redesigned so that only 'patriots' could stand; the pro-democracy media owner Jimmy Lai was convicted in 2025." },
        { type: "compare", head: "Two views",
          left: { head: "Beijing", md:
            "These are internal affairs. China has brought stability, growth and security to regions threatened by separatism, terrorism and foreign interference." },
          right: { head: "Critics", md:
            "China is erasing distinct cultures and freedoms by force, and punishing anyone, at home or abroad, who speaks out." } },
        { type: "section", head: "Why it matters", md:
          "These frontiers shape China's relations with the world: sanctions over Xinjiang, bans on goods made with forced labour, and the collapse of Western faith that China would liberalise as it grew richer. They also show how the Party would like to handle [[unit:tw|Taiwan]], a prospect Taiwanese voters watched closely in Hong Kong." }
      ],
      takeaways: [
        "Beijing treats its frontier regions as matters of national unity and security.",
        "The UN human rights office said abuses in Xinjiang 'may constitute crimes against humanity'; China denies wrongdoing.",
        "A 2020 national security law ended Hong Kong's political freedoms under 'one country, two systems'."
      ],
      check: { q: "What was promised to Hong Kong in 1997?",
        choices: ["Independence", "'One country, two systems': autonomy and freedoms for 50 years", "Full integration with the mainland"], answer: 1,
        explain: "The handover agreement promised Hong Kong a high degree of autonomy until 2047; the 2020 security law curtailed it." },
      sources: [
        { title: "OHCHR Assessment of human rights concerns in the Xinjiang Uyghur Autonomous Region", publisher: "UN Human Rights Office", url: "https://www.ohchr.org/en/documents/country-reports/ohchr-assessment-human-rights-concerns-xinjiang-uyghur-autonomous-region", date: "2022-08-31" },
        { title: "Tibet", publisher: "Britannica", url: "https://www.britannica.com/place/Tibet", date: "n.d." },
        { title: "Hong Kong: National Security Law and recent events", publisher: "House of Commons Library (UK)", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-9318/", date: "2021" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "cn-8", kind: "now", asOf: "2026-09-28",
      title: "Where things stand",
      dek: "A truce with Washington, a thaw with India, a purge at home and a Party Congress ahead.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/cn/cn-8-hero.webp",
          alt: "Illustration of a modern southern Chinese city skyline at dusk across a bay, lights coming on.",
          caption: "Shenzhen, where China hosts APEC's leaders in November 2026, grew from a fishing town into a tech capital in four decades.",
          credit: "AI illustration — not a photograph",
          prompt: "A modern coastal city skyline at dusk seen across a calm bay, glass towers catching the last light, ferries crossing, mountains behind in haze, no legible signs, a feeling of energy and scale." },
        { type: "section", head: "The state of play", md:
          "- **Washington:** a trade truce to 10 January 2027 after two state visits in 2026, but rivalry over chips, AI and [[unit:tw]] continues.\n" +
          "- **Economy:** growth near target, a 4.5–5% goal for 2026, a new five-year plan betting on technology, and weak consumer spending.\n" +
          "- **Military:** the top of the army purged; pressure on Taiwan eased in 2026 but not ended.\n" +
          "- **Neighbours:** a deep chill with [[unit:jp]]; a thaw with [[unit:in]], with direct flights restored in October 2025 and Xi and Modi meeting again at the BRICS summit in India in September 2026.\n" +
          "- **Partners:** close ties with [[unit:ru]], which sells it oil, and a watching brief on the [[unit:ir]] war, which threatens the Gulf oil China imports." },
        { type: "section", head: "Three scenarios", md:
          "- **Managed rivalry.** The truce holds, trade stabilises and both sides compete in technology without a crisis. The most likely path in the near term, many analysts say, given both leaders' stated wishes.\n" +
          "- **Relapse.** A clash over Taiwan, chips or a new tariff round breaks the truce, and the 2025 escalation returns.\n" +
          "- **Turn inward.** Economic strain and the succession question absorb the leadership, making China more cautious abroad and more controlling at home." },
        { type: "section", head: "The succession question", md:
          "Xi turned 73 in June 2026 and has named no successor. The 21st Party Congress, due in 2027, will show whether he takes a fourth term, as most observers expect, and whether any younger leader is placed in line. Leadership changes in China happen behind closed doors, so the new line-up at the end of the Congress is the moment it becomes visible." },
        { type: "section", head: "What to look for", md:
          "Three signals will show which scenario is unfolding. First, whether the trade truce is extended again before 10 January 2027, and on what terms. Second, the tone of Beijing's reaction to Taiwan's November local elections, and whether large drills return. Third, who is promoted to the empty seats on the military commission, which will show whether Xi has finished reshaping the army.\n\n" +
          "At home, the monthly figures on retail sales and home prices are the best guide to whether ordinary Chinese families are feeling better off. Abroad, watch how Beijing handles the [[unit:ir]] war: it needs Gulf oil to keep flowing and has so far avoided taking sides openly." },
        { type: "section", head: "Connections", md:
          "China runs through the rest of this course. Look for it in [[unit:us]] (the trade war and summits), [[unit:ru]] (its most important partner), [[unit:tw]] and [[unit:jp]] (pressure and deterrence), [[unit:in]] (a border thaw and a rivalry), [[unit:pk]] (a close ally) and [[unit:ir]] and [[unit:sa]] (the Gulf oil it depends on)." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **November 2026:** APEC leaders' meeting in Shenzhen\n" +
          "- **Late November 2026:** Taiwan's local elections\n" +
          "- **10 January 2027:** the US–China trade truce expires unless extended\n" +
          "- **March 2027:** National People's Congress\n" +
          "- **Late 2027:** the 21st Party Congress" }
      ],
      takeaways: [
        "China and the US are in a managed truce, extended to 10 January 2027, while their tech rivalry continues.",
        "The economy is betting on technology, while consumers stay cautious.",
        "The 2027 Party Congress will show whether Xi takes a fourth term and whether a successor emerges."
      ],
      check: { q: "When is China's next Party Congress due?",
        choices: ["2026", "2027", "2030"], answer: 1,
        explain: "Party Congresses meet every five years. The last was in October 2022, so the next is due in 2027." },
      sources: [
        { title: "Trump, Xi wrap state visit centered on spectacle over substance", publisher: "CNBC", url: "https://www.cnbc.com/2026/09/25/trump-xi-summit-takeaways.html", date: "2026-09-25" },
        { title: "Indian Prime Minister Modi says border peace is key to India-China ties", publisher: "CNBC", url: "https://www.cnbc.com/2026/09/12/india-china-modi-xi-brics-border.html", date: "2026-09-12" },
        { title: "China-India Relations in 2026: Can the Thaw Continue?", publisher: "The Diplomat", url: "https://thediplomat.com/2026/01/china-india-relations-in-2026-can-the-thaw-continue/", date: "2026-01" },
        { title: "China removes powerful General Zhang Youxia from military leadership", publisher: "Plataforma Media", url: "https://www.plataformamedia.com/en/2026/08/28/china-removes-powerful-general-zhang-youxia-from-military-leadership/", date: "2026-08-28" }
      ]
    }
  ]
});
