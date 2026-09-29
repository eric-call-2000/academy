/* ============================================================
   Unit 29 — South Africa 🇿🇦
   Research note and sources: tools/research/za.md
   Current as of 29 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("za", {
  id: "za",
  asOf: "2026-09-29",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "za-1", kind: "snapshot", asOf: "2026-09-29",
      title: "South Africa in brief",
      dek: "Africa's most industrialised democracy, governed by an uneasy coalition, in a public feud with Washington, and heading to local elections in November.",
      blocks: [
        { type: "map", src: "maps/za.svg",
          alt: "Locator map of southern Africa with South Africa highlighted at the tip of the continent, surrounding Lesotho and bordering Namibia, Botswana, Zimbabwe, Mozambique and Eswatini, and a small globe showing its place in the world.",
          caption: "South Africa sits at the southern tip of Africa, between the Atlantic and Indian Oceans, and surrounds the kingdom of Lesotho.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capitals", "Pretoria (executive), Cape Town (parliament), Bloemfontein (judiciary)"],
          ["People", "About 63 million"],
          ["System", "Parliamentary republic with an executive president"],
          ["President", "Cyril Ramaphosa (ANC), since 2018"],
          ["Government", "A 'Government of National Unity' of ten parties, led by the ANC and DA"],
          ["Unemployment", "About a third of the workforce"],
          ["Next vote", "Local elections, 4 November 2026"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "South Africa has the most industrialised and diversified economy in Africa, the continent's deepest financial markets, and huge reserves of platinum, manganese, chrome and gold. It is the only African member of the G20, which it chaired in 2025, and a member of [[BRICS]] alongside [[unit:br|Brazil]], [[unit:ru|Russia]], [[unit:in|India]] and [[unit:cn|China]].\n\n" +
          "Its moral weight is outsized too. The peaceful end of apartheid and Nelson Mandela's presidency made it a symbol of reconciliation, and it still sees itself as a voice for the Global South, most visibly when it took [[unit:il|Israel]] to the International Court of Justice in December 2023, accusing it of genocide in Gaza, which Israel denies. That stance, and its land policies, have put it on a collision course with Donald Trump." },
        { type: "section", head: "Who holds power", md:
          "The African National Congress (ANC), which led the struggle against apartheid, governed alone for 30 years. In May 2024 its vote fell to 40%, and it formed a 'Government of National Unity' (GNU) with its old rival, the liberal Democratic Alliance (DA), and eight smaller parties. Cyril Ramaphosa, a former union leader and businessman, remains president. The main opposition comes from Jacob Zuma's uMkhonto weSizwe (MK) party and Julius Malema's Economic Freedom Fighters (EFF)." },
        { type: "section", head: "The mood in 2026", md:
          "The coalition has lasted longer than many expected, and power cuts that plagued the country for years have largely ended. But growth is weak, unemployment is among the highest in the world, and a judicial commission has exposed alleged links between senior police, politicians and organised crime. Relations with the US are at their lowest point since apartheid." },
        { type: "section", head: "What South Africa wants", md:
          "The government wants faster growth through reforms to energy, ports and railways, more investment, and jobs for its young people. Abroad it wants to stay non-aligned, trading with the US, Europe and China alike, and to speak for Africa in global forums." },
        { type: "section", head: "Land and people", md:
          "South Africa has 12 official languages. About 81% of its people are Black African, 8% of mixed race (the official term is 'coloured'), 7% white and 3% of Indian descent. Its cities, Johannesburg, Cape Town, Durban and Pretoria, are among Africa's largest economies, but the legacy of apartheid means that townships and informal settlements still sit on the edge of wealthy suburbs, making it one of the most unequal societies on earth." },
        { type: "callout", tone: "why", md:
          "South Africa is a test of whether a liberation movement can share power and reform a struggling economy, and of whether a middle power can defy Washington without paying too high a price." }
      ],
      takeaways: [
        "South Africa is Africa's most industrialised economy and its only G20 member.",
        "Since 2024 the ANC has governed in a coalition with its old rival, the Democratic Alliance.",
        "Unemployment of about a third and a feud with the US dominate its politics."
      ],
      check: { q: "What happened to the ANC in the 2024 election?",
        choices: ["It won a two-thirds majority", "Its vote fell to about 40%, forcing it into a coalition", "It was banned"], answer: 1,
        explain: "The ANC lost its majority for the first time since 1994 and formed a Government of National Unity with the DA and others." },
      sources: [
        { title: "Coalitions: The South African 2026 Local Government Election", publisher: "Friedrich Naumann Foundation", url: "https://www.freiheit.org/liberal-workshop-south-africa/south-african-2026-local-government-election", date: "2026" },
        { title: "Local polls, the GNU and Trump shocks: Politics in 2026", publisher: "Currency News", url: "https://currencynews.co.za/local-polls-the-gnu-and-trump-shocks-politics-in-2026/", date: "2026" },
        { title: "South Africa profile", publisher: "BBC News", url: "https://www.bbc.com/news/world-africa-14094760", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "za-2", kind: "power", asOf: "2026-09-29",
      title: "A parliament that picks the president",
      dek: "Voters choose parties, parties choose the president, and a strong constitution and courts keep everyone in check.",
      blocks: [
        { type: "diagram", src: "img/za/za-2-power.svg",
          alt: "Diagram of power in South Africa. Voters elect the 400-seat National Assembly by proportional representation; the ANC won 159 seats in 2024. The Assembly elects the president, Cyril Ramaphosa, who heads a Government of National Unity of ten parties, led by the ANC and the Democratic Alliance. The Constitutional Court can strike down laws and has ruled against presidents. Nine provinces, with their own premiers, share power; the DA runs the Western Cape. Chapter 9 bodies such as the Public Protector watch over government.",
          caption: "A proportional parliament, a president it elects, and powerful courts.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "Parliament and the president", md:
          "South Africans vote for parties, not individual candidates, in a system of pure proportional representation: a party with 40% of the vote gets about 40% of the 400 seats in the National Assembly. The Assembly then elects the president, who is both head of state and head of government, and can remove him through a vote of no confidence. A president may serve two five-year terms. Since 2024 independent candidates can also stand, after a court ruling." },
        { type: "section", head: "The Government of National Unity", md:
          "After the 2024 election, the ANC chose to govern with the DA, the pro-business party that had been its fiercest critic, along with the Zulu nationalist Inkatha Freedom Party and seven smaller parties. Together they hold about 70% of the seats. The coalition agreement requires 'sufficient consensus' on big decisions, meaning parties representing 60% of the Assembly. The DA's leader at the time, John Steenhuisen, became agriculture minister, and the DA holds several other cabinet posts." },
        { type: "section", head: "The constitution and courts", md:
          "The 1996 constitution, one of the most progressive in the world, protects rights to housing, health care and water, and bans discrimination on grounds including sexual orientation. The Constitutional Court enforces it vigorously. In 2016 it ruled that President Jacob Zuma had violated the constitution by failing to repay public money spent on his private home; in 2021 it jailed him for contempt. Independent 'Chapter 9' institutions, such as the Public Protector, investigate abuses of power." },
        { type: "section", head: "Provinces and cities", md:
          "South Africa has nine provinces with elected legislatures and premiers, who run schools and hospitals with money from the national government. The DA governs the Western Cape, around Cape Town, which it holds up as proof of competent government. The big metropolitan councils, such as Johannesburg, Tshwane (Pretoria) and eThekwini (Durban), are elected in local elections and have been run by shaky coalitions since 2016, with frequent changes of mayor." },
        { type: "section", head: "Holding it together", md:
          "The GNU has survived several crises. In early 2025 the DA voted against the ANC's budget, which included a rise in value-added tax; the increase was dropped. The DA has gone to court against laws on land expropriation and schooling, and Ramaphosa fired a DA deputy minister for an unauthorised trip abroad. Each time the partners stepped back from the brink, partly because neither wants to face voters as the party that broke the government, and partly because investors, the currency and the stock market have rewarded the stability." },
        { type: "compare", head: "Two views of the GNU",
          left: { head: "Its supporters", md:
            "The coalition forced the ANC to share power with competent partners, reassured investors and kept out the populist MK and EFF." },
          right: { head: "Its critics", md:
            "The DA has propped up a failing ANC and softened its opposition, while the coalition papers over deep disagreements on land, health and the economy." } }
      ],
      takeaways: [
        "South Africans vote for parties by pure proportional representation, and parliament elects the president.",
        "The Government of National Unity joins the ANC, the DA and eight smaller parties.",
        "The 1996 constitution and the Constitutional Court are powerful checks, as Jacob Zuma found."
      ],
      check: { q: "Who elects South Africa's president?",
        choices: ["The voters directly", "The National Assembly", "The Constitutional Court"], answer: 1,
        explain: "Voters elect the 400-member National Assembly, which then elects the president." },
      sources: [
        { title: "South Africa's GNU, alliances and alignments — the 2026 municipal elections will soon test them all", publisher: "Daily Maverick", url: "https://www.dailymaverick.co.za/article/2024-07-10-the-gnu-alliances-and-alignments-the-2026-municipal-elections-will-soon-test-them-all/", date: "2024-07-10" },
        { title: "South Africa", publisher: "Britannica", url: "https://www.britannica.com/place/South-Africa", date: "n.d." },
        { title: "Constitution of the Republic of South Africa, 1996", publisher: "South African Government", url: "https://www.gov.za/documents/constitution/constitution-republic-south-africa-1996-1", date: "1996" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "za-3", kind: "history", asOf: "2026-09-29",
      title: "From apartheid to the GNU",
      dek: "Colonial conquest, apartheid, a negotiated revolution, and thirty years of ANC rule.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/za/za-3-hero.webp",
          alt: "Illustration of a small rocky island off a coastal city with a flat-topped mountain behind, seen across the sea at dawn.",
          caption: "Robben Island, where Nelson Mandela spent 18 of his 27 years in prison, with Table Mountain beyond.",
          credit: "AI illustration — not a photograph",
          prompt: "A low rocky island with a small lighthouse and plain prison buildings in the foreground sea, a large flat-topped mountain and a coastal city in the distance, dawn light, calm water, solemn and historic, no people, no flags, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1652", "Dutch settlement at the Cape"],
          ["1910", "Union of South Africa under British rule"],
          ["1948", "The National Party introduces apartheid"],
          ["1960", "Sharpeville massacre; ANC banned"],
          ["1990", "Mandela freed; ANC unbanned"],
          ["1994", "First democratic election; Mandela president"],
          ["2018", "Zuma resigns; Ramaphosa takes over"],
          ["2024", "ANC loses its majority"]
        ] },
        { type: "section", head: "1. Conquest", md:
          "Khoisan and Bantu-speaking peoples lived across southern Africa long before the Dutch East India Company set up a supply station at the Cape in 1652. Dutch settlers, later called Afrikaners or Boers, moved inland; Britain seized the Cape in 1806. The discovery of diamonds and gold in the late 19th century drew in capital and migrant workers and led to the Anglo-Boer War of 1899–1902. In 1910 the colonies united as the Union of South Africa, governed by and for whites." },
        { type: "section", head: "2. Apartheid", md:
          "From 1948 the Afrikaner-led National Party built [[apartheid]], 'separateness': every person was classified by race, Black South Africans were stripped of citizenship and forced into impoverished 'homelands', mixed marriages were banned, and millions were removed from their homes. When police killed 69 protesters at Sharpeville in 1960, the ANC was banned and turned to armed struggle. Nelson Mandela was sentenced to life in prison in 1964. The 1976 Soweto uprising, sanctions and a mass internal resistance movement in the 1980s made the country ungovernable." },
        { type: "section", head: "3. The negotiated revolution", md:
          "In 1990 President F. W. de Klerk freed Mandela and lifted the ban on the ANC. Years of negotiations, amid violence that killed thousands, produced an interim constitution, and in April 1994 South Africans of all races voted for the first time. Mandela became president, and the Truth and Reconciliation Commission heard testimony about the crimes of apartheid, offering amnesty in exchange for full disclosure. Mandela and de Klerk shared the Nobel Peace Prize in 1993." },
        { type: "section", head: "4. The ANC in power", md:
          "The ANC won every national election from 1994 to 2019, expanding electricity, water, housing and welfare grants, which now reach about 28 million people. Thabo Mbeki's presidency (1999–2008) brought growth but also AIDS denialism that cost hundreds of thousands of lives. Under Jacob Zuma (2009–18), businessmen close to him, notably the Gupta family, were found by a judicial commission to have 'captured' state companies and ministries, costing the country billions. The ANC forced Zuma out in 2018, and his deputy, Cyril Ramaphosa, promised renewal." },
        { type: "section", head: "5. Decline and coalition", md:
          "Ramaphosa struggled to revive an economy weakened by state capture, the collapse of the power utility Eskom and the pandemic. In July 2021 riots after Zuma's jailing killed more than 350 people. In the May 2024 election the ANC fell to 40.2%, with Zuma's new MK party winning 14.6%, the best debut of any party in the democratic era. The ANC turned to the DA and formed the GNU." }
      ],
      takeaways: [
        "Apartheid, from 1948, classified and segregated South Africans by race until negotiations ended it.",
        "Nelson Mandela became president after the first democratic election in 1994.",
        "Three decades of ANC rule ended in 2024, after 'state capture' under Zuma and economic decline."
      ],
      check: { q: "What was 'state capture'?",
        choices: ["A military coup", "The takeover of state companies and ministries by businessmen close to Jacob Zuma", "The nationalisation of mines"], answer: 1,
        explain: "A judicial commission found that the Gupta family and others had captured parts of the state under Zuma, costing billions." },
      sources: [
        { title: "South Africa: History", publisher: "Britannica", url: "https://www.britannica.com/place/South-Africa/History", date: "n.d." },
        { title: "2024 South African general election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2024_South_African_general_election", date: "2024" },
        { title: "South Africa profile: Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-africa-14094918", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "za-4", kind: "players", asOf: "2026-09-29",
      title: "Ramaphosa, Hill-Lewis, Zuma and Malema",
      dek: "A cautious president near the end of his time, a young new DA leader, and two populists who once served the ANC.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/za/za-4-hero.webp",
          alt: "Illustration of a long sandstone government building with colonnades and terraced gardens on a hill, overlooking a city.",
          caption: "The Union Buildings in Pretoria, seat of the presidency.",
          credit: "AI illustration — not a photograph",
          prompt: "A long, grand sandstone government building with two wings, colonnades and a semicircular amphitheatre, set on a hill with terraced green gardens descending in front, a city spread below, clear morning light, dignified and calm, no people, no flags, no legible text." },
        { type: "people", head: "Five to know", items: [
          { name: "Cyril Ramaphosa", role: "President, since 2018",
            img: "img/za/portrait-ramaphosa.webp", source: "Official portrait (GCIS, CC BY-ND) via Wikimedia Commons; confirm the licence.",
            md: "Led the mineworkers' union and the ANC's negotiating team in the 1990s, then became a wealthy businessman. A careful consensus-builder; his second and final term ends in 2029." },
          { name: "Geordin Hill-Lewis", role: "Democratic Alliance leader, since April 2026",
            img: "img/za/portrait-hill-lewis.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "The mayor of Cape Town, elected DA leader at 39 with over 90% of the vote; promises to broaden the party's appeal beyond its white and middle-class base." },
          { name: "Jacob Zuma", role: "President 2009–18; MK party leader",
            img: "img/za/portrait-zuma.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "Forced out by the ANC in 2018, jailed for contempt in 2021, barred from parliament; founded MK, which dominates his home province of KwaZulu-Natal." },
          { name: "Julius Malema", role: "Leader of the Economic Freedom Fighters",
            img: "img/za/portrait-malema.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "A former ANC youth leader who founded the radical-left EFF in 2013, calling for land expropriation without compensation and the nationalisation of mines." },
          { name: "Paul Mashatile", role: "Deputy president",
            img: "img/za/portrait-mashatile.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "The ANC's deputy president and a leading contender to succeed Ramaphosa at the party's conference in December 2027." }
        ] },
        { type: "section", head: "Ramaphosa's style", md:
          "Ramaphosa governs by consensus, which admirers call patience and critics call indecision. He has pushed through reforms that let private companies generate electricity and operate on the state rail and port networks, which helped end rolling blackouts. His reputation was dented by the 'Phala Phala' affair, in which a large sum of US dollars was stolen from his game farm in 2020; a parliamentary panel found he may have a case to answer, but the ANC blocked impeachment, and he denies wrongdoing." },
        { type: "section", head: "The DA's new face", md:
          "John Steenhuisen, who took the DA into government, did not seek re-election as leader. His successor, Geordin Hill-Lewis, won praise as Cape Town's mayor for cutting red tape and reducing power cuts in the city. He must hold the coalition together while competing hard against the ANC in the November local elections, especially in Johannesburg and Pretoria." },
        { type: "section", head: "The populists", md:
          "Zuma's MK and Malema's EFF share a message: that the ANC and DA serve white and business interests, and that land and mines should be taken into state hands. MK, drawing on Zuma's popularity among Zulu voters, won 45% in KwaZulu-Natal in 2024. The EFF has lost support to MK. Neither is in government, but together with the ANC's left wing they could form an alternative majority if the GNU collapsed." },
        { type: "section", head: "Other voices", md:
          "Smaller parties matter in a fragmented parliament. The Inkatha Freedom Party, rooted among Zulu traditionalists, is a GNU partner. ActionSA, founded by the former Johannesburg mayor Herman Mashaba, campaigns on crime and illegal immigration. The Patriotic Alliance, strong in mixed-race communities, has swung between coalitions in the cities." },
        { type: "section", head: "The succession", md:
          "The ANC will choose a new leader in December 2027, who is likely to be its candidate for president in 2029. Mashatile, the ANC's secretary-general Fikile Mbalula, and others are jockeying for position, and the result will decide whether the party leans toward the DA or toward the populists." }
      ],
      takeaways: [
        "Ramaphosa, in his final term, governs by consensus and has opened energy and transport to private firms.",
        "Geordin Hill-Lewis, Cape Town's mayor, became DA leader in April 2026.",
        "Zuma's MK and Malema's EFF lead the populist opposition; the ANC picks Ramaphosa's successor in December 2027."
      ],
      check: { q: "Who became leader of the Democratic Alliance in April 2026?",
        choices: ["John Steenhuisen", "Geordin Hill-Lewis", "Julius Malema"], answer: 1,
        explain: "Hill-Lewis, the mayor of Cape Town, won over 90% of the vote at the DA's federal congress on 12 April 2026." },
      sources: [
        { title: "Geordin Hill-Lewis lays out four-point plan as he becomes DA federal leader at 39", publisher: "Daily Maverick", url: "https://www.dailymaverick.co.za/article/2026-04-12-geordin-hill-lewis-lays-out-4-point-plan-as-he-becomes-da-federal-leader-at-39/", date: "2026-04-12" },
        { title: "2024 South African general election", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2024_South_African_general_election", date: "2024" },
        { title: "Ramaphosa's Phala Phala scandal explained", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2022/12/13/south-africa-ramaphosa-phala-phala-scandal-explained", date: "2022-12-13" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "za-5", kind: "story", asOf: "2026-09-29",
      title: "Trump versus Pretoria",
      dek: "Aid cut, an ambassador expelled, 30% tariffs, a boycotted G20 and an exclusion from the next one.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/za/za-5-hero.webp",
          alt: "Illustration of a large conference hall set for a summit with a ring of tables and many empty chairs, and one section conspicuously empty with no nameplates.",
          caption: "The United States boycotted the G20 summit that South Africa hosted in November 2025.",
          credit: "AI illustration — not a photograph",
          prompt: "A large modern conference hall set for an international summit, a huge ring of tables with microphones and water glasses, many empty chairs, one section with no chairs at all, soft blue lighting, diplomatic and uneasy, no people, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "Relations collapsed soon after Donald Trump returned. In February 2025 he cut aid to South Africa, citing a new land expropriation law and the country's genocide case against Israel. In March the US expelled South Africa's ambassador, Ebrahim Rasool, over remarks criticising Trump. From May, Washington admitted white Afrikaners as refugees, claiming they faced persecution. At a White House meeting on 21 May, Trump confronted Ramaphosa with a video and articles he said showed a 'white genocide', claims that South African officials, courts and independent researchers have rejected." },
        { type: "section", head: "Tariffs and the G20", md:
          "In August 2025 the US imposed a 30% tariff on most South African exports, the highest in sub-Saharan Africa, hitting cars, citrus and wine. South Africa hosted the G20 summit in Johannesburg in November 2025, the first in Africa; the US boycotted it. When South Africa refused to hand the G20 presidency to a junior US embassy official at the close, Trump said it would not be invited to the 2026 summit in Miami. In March 2026 South Africa was also left off the guest list for the G7 summit in France." },
        { type: "facts", head: "The feud", rows: [
          ["February 2025", "US aid cut"],
          ["March 2025", "Ambassador Ebrahim Rasool expelled"],
          ["May 2025", "Afrikaner refugee programme; Oval Office confrontation"],
          ["August 2025", "30% US tariff"],
          ["November 2025", "US boycotts the Johannesburg G20"],
          ["2026", "Excluded from the Miami G20"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Trump's objections include the Expropriation Act, which allows land to be taken for public purposes, in rare cases without compensation; South Africa says it is similar to laws elsewhere and no land has been seized that way. He also objects to South Africa's ICJ case against Israel, its ties with Russia, China and Iran, and its racial empowerment policies. Elon Musk, who grew up in South Africa, has amplified claims of anti-white persecution." },
        { type: "section", head: "The trade at stake", md:
          "The US is South Africa's second-largest trading partner after China, and a large buyer of its cars, platinum-group metals, citrus and wine. For years many of these goods entered duty-free under AGOA, a US trade-preference scheme for Africa, whose future has been in doubt. Carmakers in the Eastern Cape, which export to the US, and citrus farmers in the Western Cape have warned of job losses." },
        { type: "compare", head: "Two views",
          left: { head: "South Africa's government", md:
            "The US is punishing a sovereign democracy for its foreign policy and repeating false claims. South Africa wants to be treated as an equal, and will trade elsewhere." },
          right: { head: "Critics at home and abroad", md:
            "Pretoria has needlessly provoked its second-largest trading partner. Its closeness to Moscow and Tehran and its race-based policies have cost it dearly." } },
        { type: "section", head: "What's next", md:
          "After the US Supreme Court struck down Trump's emergency tariffs in February 2026, the legal basis for the 30% rate changed, but trade remains strained. South Africa is courting China, Europe and other African markets, and its DA coalition partners are pushing for a reset with Washington." }
      ],
      takeaways: [
        "The US cut aid, expelled South Africa's ambassador and admitted Afrikaners as refugees in 2025.",
        "Trump imposed a 30% tariff, boycotted the Johannesburg G20 and excluded South Africa from the 2026 summit.",
        "Disputes over land, Israel, Russia and race lie behind the feud."
      ],
      check: { q: "What did Trump do about the 2026 G20 summit?",
        choices: ["Moved it to Johannesburg", "Said South Africa would not be invited", "Cancelled it"], answer: 1,
        explain: "After South Africa refused to hand over the presidency to a junior US official, Trump said it would not be invited to the Miami summit." },
      sources: [
        { title: "Trump's G20 exclusion of South Africa: Implications for economic relations", publisher: "IOL", url: "https://iol.co.za/news/south-africa/2025-11-27-trumps-g20-exclusion-of-south-africa-implications-for-economic-relations/", date: "2025-11-27" },
        { title: "South Africa disinvited from G7 in France, backtracks on initial claim of US pressure", publisher: "France 24", url: "https://www.france24.com/en/africa/20260327-south-africa-excluded-from-g7-summit-due-to-boycott-threats-from-us", date: "2026-03-27" },
        { title: "South Africa says Trump's 30% tariff is based on inaccurate trade view", publisher: "Reuters via Yahoo News", url: "https://www.yahoo.com/news/south-africa-says-trumps-30-103414466.html", date: "2025-07" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "za-6", kind: "story", asOf: "2026-09-29",
      title: "The Mkhwanazi affair",
      dek: "A police general accused his own minister of protecting criminals. A year later, a judicial commission is laying bare a web of alleged corruption.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/za/za-6-hero.webp",
          alt: "Illustration of a hearing room with a long table covered in thick files, microphones and a witness chair facing a panel's empty seats.",
          caption: "The Madlanga Commission has heard months of testimony about the police and justice system.",
          credit: "AI illustration — not a photograph",
          prompt: "A formal hearing room with a long wooden table stacked with thick document binders and microphones, a single witness chair facing an elevated panel's three empty chairs, wood panelling and fluorescent light, serious and investigative, no people, no flags, no legible text." },
        { type: "section", head: "What happened", md:
          "On 6 July 2025, Lieutenant General Nhlanhla Mkhwanazi, the police commissioner of KwaZulu-Natal, called a press conference in uniform, flanked by armed officers, and accused the police minister, Senzo Mchunu, of interfering in investigations to protect a criminal syndicate. He said Mchunu had disbanded a task team investigating political killings, which had uncovered links between politicians, police, prosecutors and organised crime.\n\n" +
          "Ramaphosa placed Mchunu on leave, appointed an acting minister, and set up a judicial commission of inquiry led by the retired Constitutional Court justice Mbuyiseli Madlanga. Parliament held its own inquiry. Mchunu denied wrongdoing." },
        { type: "section", head: "What the inquiries found", md:
          "Over the following year the Madlanga Commission heard from dozens of witnesses. An interim report identified prima facie evidence of wrongdoing against 14 officials, including five senior police officers. By July 2026, according to Daily Maverick, 13 police officers faced criminal charges and 15 more faced disciplinary action. Parliament's committee found that Mchunu had disbanded the task team without consulting the president, the national police commissioner or prosecutors, though its preliminary findings did not show he was corruptly linked to criminals." },
        { type: "facts", head: "The affair", rows: [
          ["6 July 2025", "Mkhwanazi's allegations"],
          ["July 2025", "Mchunu placed on leave; Madlanga Commission set up"],
          ["Interim findings", "Prima facie evidence against 14 officials"],
          ["By July 2026", "13 police officers facing criminal charges"]
        ] },
        { type: "section", head: "Why it matters", md:
          "South Africa has one of the highest murder rates in the world, about 75 a day, and organised crime, from extortion rackets to illegal mining and cash-in-transit heists, has spread. The affair suggested that criminal networks had reached into the institutions meant to fight them. It is the most serious test of the justice system since the state capture inquiry." },
        { type: "section", head: "Political killings", md:
          "KwaZulu-Natal in particular has seen hundreds of political assassinations since 2016, many linked to fights over council posts and the contracts that come with them. Local councillors, ANC branch leaders and whistle-blowers have been shot, often by hired killers. The task team Mchunu disbanded had been set up to tackle exactly these murders, which is why its closure caused such alarm." },
        { type: "section", head: "Who is Mkhwanazi?", md:
          "Mkhwanazi is a career officer who served as acting national police commissioner in the mid-2010s. His decision to go public, in uniform and surrounded by tactical officers, was without precedent, and some critics called it insubordination. His supporters saw a whistle-blower with nowhere else to turn. He has testified at length before the commission and remains in his post." },
        { type: "compare", head: "Two views",
          left: { head: "Supporters of the inquiry", md:
            "A brave officer exposed the rot, and the commission is doing what the state capture inquiry did: bringing the truth out in public." },
          right: { head: "Sceptics", md:
            "Commissions produce reports but few convictions. Without faster prosecutions, the networks will adapt and survive." } },
        { type: "section", head: "What's next", md:
          "The commission's final report, and whether prosecutors follow through, will shape the ANC's campaign for November and the fight for its leadership in 2027." }
      ],
      takeaways: [
        "In July 2025 KwaZulu-Natal's police chief accused the police minister of shielding criminal networks.",
        "The Madlanga Commission found prima facie evidence against 14 officials; 13 officers face charges.",
        "The affair exposed how organised crime has reached into South Africa's police and justice system."
      ],
      check: { q: "What did General Mkhwanazi accuse the police minister of?",
        choices: ["Stealing weapons", "Disbanding a task team to protect a criminal syndicate", "Planning a coup"], answer: 1,
        explain: "He said Senzo Mchunu disbanded the political killings task team, which had uncovered links between politicians, police and organised crime." },
      sources: [
        { title: "Madlanga Commission anniversary: Mkhwanazi allegations ring true", publisher: "Daily Maverick", url: "https://www.dailymaverick.co.za/article/2026-09-17-mkhwanazis-too-grave-to-contemplate-allegations-gain-grim-weight/", date: "2026-09-17" },
        { title: "How Mkhwanazi's allegations reshaped the fight against organised crime in the SAPS", publisher: "Daily Maverick", url: "https://www.dailymaverick.co.za/article/2026-07-05-how-mkhwanazis-allegations-reshaped-the-fight-against-organised-crime-in-the-saps/", date: "2026-07-05" },
        { title: "Preliminary findings of Parliament's ad hoc committee show no corrupt links to Mchunu", publisher: "The Witness", url: "https://witness.co.za/news/2026/08/20/preliminary-findings-of-parliaments-ad-hoc-committee-show-no-corrupt-links-to-mchunu/", date: "2026-08-20" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "za-7", kind: "story", asOf: "2026-09-29",
      title: "The November test",
      dek: "On 4 November South Africans elect their city and town councils. For the coalition partners, it is a fight against each other.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/za/za-7-hero.webp",
          alt: "Illustration of a long queue of voters outside a community hall in a township on a sunny morning, with election posters without text on lamp posts.",
          caption: "South Africans queue to vote; turnout in local elections has been falling.",
          credit: "AI illustration — not a photograph",
          prompt: "A long patient queue of voters seen from behind outside a simple community hall in a township on a bright sunny morning, small colourful houses, plain blank election posters on lamp posts, a jacaranda tree, hopeful and ordinary, no faces, no legible text." },
        { type: "section", head: "What's happening", md:
          "On 4 November 2026 voters choose councils in all 257 municipalities, including the eight big metros. The ANC, DA, MK and EFF will compete head to head, even though the ANC and DA govern together nationally. The results will decide who runs Johannesburg, Pretoria and Durban, and will be read as a verdict on the GNU and on Ramaphosa's party a year before it chooses his successor." },
        { type: "section", head: "The polls", md:
          "One national survey reported in September put the ANC at 31%, the DA at 25%, MK at 14% and the EFF at 11%, which would be the ANC's worst result ever. In Johannesburg, polls show the ANC narrowly ahead of the DA, around 31% to 27–28%, with the anti-crime party ActionSA on about 14%. The DA leads in Tshwane (Pretoria). MK is on course to dominate eThekwini (Durban), with one poll putting it at 55%." },
        { type: "facts", head: "September polls", rows: [
          ["National", "ANC 31%, DA 25%, MK 14%, EFF 11% (one survey)"],
          ["Johannesburg", "ANC 31%, DA 27–28%, ActionSA 14%"],
          ["Tshwane", "DA 31%, ANC 22%"],
          ["eThekwini (Durban)", "MK about 55%"]
        ] },
        { type: "section", head: "Why the cities matter", md:
          "Johannesburg, the economic capital, has had many mayors since 2016 as coalitions formed and collapsed; its roads, water supply and inner city have visibly decayed, and a fire in an abandoned building killed 77 people in 2023. Water outages have become common. Whoever wins will need coalition partners, and the choices parties make, ANC with DA, or ANC with EFF and MK, will shape national politics too." },
        { type: "section", head: "Turnout and apathy", md:
          "Turnout in local elections has fallen steadily, to 46% in 2021, and many voters say no party represents them. Low turnout tends to hurt the ANC, whose voters are less likely to show up than the DA's or MK's. Service delivery protests, over water, electricity and housing, are common in poor communities, and some residents have stopped voting altogether." },
        { type: "section", head: "After the count", md:
          "Few councils are likely to produce outright majorities, so expect weeks of bargaining after 4 November. In the past, small parties with one or two seats have decided who runs cities of millions, and mayors have been toppled by no-confidence votes within months, leaving basic services such as water and refuse collection neglected." },
        { type: "compare", head: "Two strategies",
          left: { head: "The ANC", md:
            "Campaign on its record of electrification and grants, warn against the populists and the DA alike, and hold on to the big cities." },
          right: { head: "The DA", md:
            "Campaign on its record in Cape Town, promise to fix Johannesburg and Pretoria, and win enough seats to govern without the ANC." } },
        { type: "section", head: "What's next", md:
          "If the ANC falls toward 30%, pressure will grow within it to rethink the partnership with the DA, and the contest to succeed Ramaphosa will sharpen. A strong DA showing could embolden it to demand more from the coalition." }
      ],
      takeaways: [
        "Local elections on 4 November 2026 will decide who runs Johannesburg, Pretoria and Durban.",
        "One September poll put the ANC at 31%, its worst ever, with the DA at 25% and MK at 14%.",
        "The results will shape the GNU and the ANC's leadership contest in 2027."
      ],
      check: { q: "Which party is set to dominate eThekwini (Durban)?",
        choices: ["The DA", "Jacob Zuma's MK party", "The EFF"], answer: 1,
        explain: "MK, strongest in KwaZulu-Natal, polled about 55% in eThekwini." },
      sources: [
        { title: "ANC and DA in dead heat across key metros as MK dominates eThekwini", publisher: "Daily Maverick", url: "https://www.dailymaverick.co.za/article/2026-09-04-anc-and-da-in-dead-heat-across-key-metros-as-mk-dominates-ethekwini/", date: "2026-09-04" },
        { title: "Voters splinter among parties as support for the ANC plunges", publisher: "Daily Maverick", url: "https://www.dailymaverick.co.za/article/2026-09-13-voters-splinter-among-parties-as-support-for-the-anc-plunges/", date: "2026-09-13" },
        { title: "South Africa Local Elections Set for 4 November 2026", publisher: "The Rio Times", url: "https://www.riotimesonline.com/south-africa-local-elections-november-2026/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "za-8", kind: "now", asOf: "2026-09-29",
      title: "Where things stand",
      dek: "A coalition that has survived, an economy that has not yet taken off, and a political order in flux.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/za/za-8-hero.webp",
          alt: "Illustration of a large container port with gantry cranes at dusk, and a coal-fired power station's cooling towers in the distance.",
          caption: "Fixing ports, railways and power is central to the government's growth plans.",
          credit: "AI illustration — not a photograph",
          prompt: "A large container port at dusk with tall gantry cranes and stacked containers, a freight train alongside, the cooling towers of a distant power station on the horizon, orange and violet sky, industrial and hopeful, no people close up, no flags, no legible text or logos." },
        { type: "section", head: "The state of play", md:
          "- **Government:** the ANC–DA-led GNU, now in its third year.\n" +
          "- **Economy:** growth around 1%; unemployment about a third.\n" +
          "- **Crime:** the Madlanga Commission's findings pile up.\n" +
          "- **US:** tariffs, G20 exclusion, frozen relations.\n" +
          "- **Next votes:** local elections on 4 November; ANC conference December 2027; general election 2029." },
        { type: "section", head: "The economy", md:
          "South Africa's economy has barely grown for a decade. Power cuts, which peaked in 2023, have largely ended thanks to private solar and wind and repairs at Eskom, and reforms are opening freight rail and ports to private operators. In October 2025 the country was removed from the Financial Action Task Force's 'grey list' for weak controls on money laundering, a boost for investors. But unemployment remains around a third, and above 45% for young people." },
        { type: "section", head: "Land and race", md:
          "Three decades after apartheid, most farmland is still owned by white South Africans, who are about 7% of the population, and wealth remains deeply unequal by race. Land reform has been slow. The Expropriation Act of 2025 is meant to speed it up; critics fear it will deter investment, and the US has made it a grievance. Black Economic Empowerment rules, which require companies to include Black owners and managers, are also contested." },
        { type: "section", head: "A voice for the Global South", md:
          "South Africa's foreign policy of 'active non-alignment' puts it at odds with the West more often than its partners in the GNU would like. It refused to condemn Russia's invasion of Ukraine outright, hosted joint naval exercises with Russia and China, and took Israel to the International Court of Justice. It argues that it is defending international law consistently; its critics say it applies that law selectively, and that its stance is costing it trade and influence in Washington." },
        { type: "section", head: "Crime and the state", md:
          "Crime is the other drag on growth. Businesses pay for private security, extortion gangs target construction sites, and illegal miners, known as zama zamas, operate in abandoned shafts. The Madlanga Commission's findings have made cleaning up the police a priority for the coalition, and the police leadership is under pressure to show visible results, such as arrests of hired killers and extortion bosses, before the local elections." },
        { type: "section", head: "Three scenarios", md:
          "- **Reform coalition.** The GNU holds, reforms lift growth, and a pro-market ANC leader wins in 2027.\n" +
          "- **Drift.** The coalition survives but achieves little, and the ANC keeps sliding.\n" +
          "- **Populist turn.** Poor local results split the ANC, and its left wing allies with MK and the EFF." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **4 November 2026:** local elections\n" +
          "- **Ongoing:** the Madlanga Commission's final report\n" +
          "- **December 2026:** the G20 summit in Miami, without South Africa\n" +
          "- **December 2027:** ANC elective conference" },
        { type: "section", head: "Connections", md:
          "South Africa's story runs through [[unit:us]] (the feud), [[unit:il]] (the ICJ genocide case), [[unit:cn]] (its biggest trading partner), [[unit:ru]], [[unit:br]] and [[unit:in]] (BRICS partners) and [[unit:ng]] (Africa's other giant)." }
      ],
      takeaways: [
        "The GNU has survived, and power cuts have largely ended, but growth remains weak.",
        "Unemployment of about a third and unequal land ownership remain the deepest problems.",
        "The November local elections and the ANC's 2027 leadership contest will set the country's course."
      ],
      check: { q: "What happened to South Africa's FATF 'grey list' status in October 2025?",
        choices: ["It was added to the list", "It was removed from the list", "Nothing changed"], answer: 1,
        explain: "South Africa exited the grey list for anti-money-laundering weaknesses in October 2025." },
      sources: [
        { title: "Low turnout, coalition politics hover over 2026 local elections", publisher: "IOL", url: "https://iol.co.za/pretoria-news/opinion/2026-09-11-low-turnout-coalition-politics-hover-over-2026-local-elections/", date: "2026-09-11" },
        { title: "Local elections will be big 'test' for GNU, could threaten coalition's stability", publisher: "Daily Maverick", url: "https://www.dailymaverick.co.za/article/2026-02-01-gnu-braces-for-big-test-as-local-elections-could-threaten-coalitions-stability/", date: "2026-02-01" },
        { title: "South Africa removed from FATF grey list", publisher: "Financial Action Task Force", url: "https://www.fatf-gafi.org/en/publications/High-risk-and-other-monitored-jurisdictions/increased-monitoring-october-2025.html", date: "2025-10" }
      ]
    }

  ]
});
