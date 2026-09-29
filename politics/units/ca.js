/* ============================================================
   Unit 24 — Canada 🇨🇦
   Research note and sources: tools/research/ca.md
   Current as of 29 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("ca", {
  id: "ca",
  asOf: "2026-09-29",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ca-1", kind: "snapshot", asOf: "2026-09-29",
      title: "Canada in brief",
      dek: "America's closest neighbour, now in a trade war with it, governed by a former central banker who turned a minority into a majority.",
      blocks: [
        { type: "map", src: "maps/ca.svg",
          alt: "Locator map of North America with Canada highlighted, stretching from the Pacific to the Atlantic and north into the Arctic islands, with the United States to the south and Alaska to the west, and a small globe showing its place in the world.",
          caption: "Canada is the world's second-largest country by area, but most of its 41 million people live within a few hundred kilometres of the US border.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Ottawa (largest city: Toronto)"],
          ["People", "About 41.5 million"],
          ["System", "Federal parliamentary democracy and constitutional monarchy"],
          ["Prime minister", "Mark Carney (Liberal), since March 2025"],
          ["Parliament", "Liberals hold 174 of 343 seats, a two-seat majority"],
          ["Head of state", "King Charles III, represented by the governor general"],
          ["Biggest trading partner", "The United States, which buys about three-quarters of its exports"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Canada is a G7 economy, a founding member of [[NATO]] and one of the world's biggest producers of oil, gas, uranium, potash and critical minerals. It sells more energy to [[unit:us|the United States]] than any other country does, and the two economies are so intertwined that car parts can cross the border several times before a vehicle is finished.\n\n" +
          "That closeness is now the problem. Since 2025 Donald Trump has hit Canada with [[tariff|tariffs]], mused about making it the '51st state' and, in 2026, pushed the two countries into their deepest trade rupture in generations. How Canada responds is a test of how a mid-sized ally copes when its protector turns on it." },
        { type: "section", head: "Who holds power", md:
          "Mark Carney, a former governor of the Bank of Canada and the Bank of England, became Liberal leader and prime minister in March 2025 after Justin Trudeau resigned. He won an election a month later, just short of a majority. Five opposition MPs then crossed the floor to join him, and three Liberal by-election wins in April 2026 gave him 174 seats, a narrow majority. The Conservative opposition is led by Pierre Poilievre." },
        { type: "section", head: "The mood in 2026", md:
          "Canadians have rallied around the flag. Boycotts of American goods and holidays continue, and the Liberals lead the polls by double digits. But the trade war is hurting steel, aluminium, car and lumber towns, housing is unaffordable in the big cities, and Alberta votes in October on whether to start a process that could lead to a referendum on leaving Canada." },
        { type: "section", head: "What Canada wants", md:
          "Carney's government wants a trade deal that lifts US tariffs, new markets in Europe and Asia so that Canada depends less on its neighbour, big energy and mining projects approved faster, and a much larger military. It has met [[NATO]]'s 2% spending target and pledged to reach 5% of GDP by 2035." },
        { type: "section", head: "Canada in the world", md:
          "Canada has long seen itself as a 'middle power' that works through alliances and institutions: the G7, which it hosted at Kananaskis in the Rockies in June 2025, NATO, the Commonwealth, the Five Eyes intelligence partnership and the UN. It guards its claims in a warming Arctic, where new shipping lanes are opening, and has been one of Ukraine's firmest backers. In 2026 it is trying to turn those ties into trade, courting the European Union, Japan and India to reduce its dependence on the US market." },
        { type: "callout", tone: "why", md:
          "Canada shows what happens when the world's most integrated trading relationship breaks down, and how a close US ally tries to protect its sovereignty and economy without breaking with Washington entirely." }
      ],
      takeaways: [
        "Canada is a G7 energy and mining power whose economy is deeply tied to the United States.",
        "Mark Carney became prime minister in 2025 and won a narrow majority in April 2026 through floor-crossings and by-elections.",
        "A trade war with the US and an Alberta referendum dominate politics in 2026."
      ],
      check: { q: "How did Mark Carney's Liberals reach a majority?",
        choices: ["They won one outright in the 2025 election", "Through five floor-crossings and three by-election wins", "Through a coalition with the NDP"], answer: 1,
        explain: "The Liberals fell just short in April 2025; five MPs crossed the floor and three by-election wins in April 2026 took them to 174 of 343 seats." },
      sources: [
        { title: "Carney clinches a majority government with 3 Liberal byelection wins", publisher: "CBC News", url: "https://www.cbc.ca/news/politics/byelection-liberal-conservatives-carney-majority-government-9.7161054", date: "2026-04-13" },
        { title: "Canada: 2025 federal election", publisher: "House of Commons Library (UK)", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10244/", date: "2025" },
        { title: "Prime Minister Carney announces Canada has achieved the NATO 2% defence spending target", publisher: "Prime Minister of Canada", url: "https://www.pm.gc.ca/en/news/news-releases/2026/03/26/prime-minister-carney-announces-canada-has-achieved-nato-2-defence", date: "2026-03-26" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ca-2", kind: "power", asOf: "2026-09-29",
      title: "Parliament, provinces and the Crown",
      dek: "A Westminster parliament, an appointed Senate, and ten provinces with more power than most American states.",
      blocks: [
        { type: "diagram", src: "img/ca/ca-2-power.svg",
          alt: "Diagram of power in Canada. Voters elect the 343-seat House of Commons by first-past-the-post; the Liberals hold 174 seats. The majority forms the government under Prime Minister Mark Carney, who leads the cabinet and appoints senators and judges. The appointed Senate reviews laws and rarely blocks them. Ten provinces run health, schools and natural resources; premiers are powerful. The Supreme Court can strike down laws under the Charter of Rights. The King is represented by the governor general.",
          caption: "Power is concentrated in the prime minister's office, and shared with strong provinces.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "The House of Commons", md:
          "Canadians elect 343 MPs, one per district, by [[first-past-the-post]]: whoever gets the most votes wins, even without a majority. The party that can command a majority in the House forms the government, and its leader becomes prime minister. Elections must be held at least every five years, and fixed-date rules set the next one for October 2029, though a prime minister can ask for an early vote.\n\n" +
          "Party discipline is strict: MPs almost always vote with their party. That makes a majority government very powerful, and why the five MPs who [[floor-crossing|crossed the floor]] to Carney's Liberals in 2025–26 mattered so much." },
        { type: "section", head: "The prime minister and the Senate", md:
          "The prime minister chooses the cabinet and, formally through the governor general, appoints senators, Supreme Court judges and the heads of many agencies. Critics have long described the system as 'government from the centre', with power concentrated in the Prime Minister's Office.\n\n" +
          "The 105-member Senate is appointed, not elected. Since 2016 most new senators have been independents chosen through an advisory process, and the chamber often amends bills but almost never blocks them. Its job, in the old phrase, is 'sober second thought'." },
        { type: "section", head: "The provinces", md:
          "Canada is one of the most decentralised federations in the world. The ten provinces run health care, education, natural resources and much of the justice system, and collect a large share of taxes. Premiers meet as a group and negotiate with Ottawa almost like foreign governments. Alberta and Saskatchewan resent federal climate rules on their oil and gas; Quebec, with its French-speaking majority, guards its own powers and has twice voted on independence, in 1980 and 1995. The three northern territories have less power." },
        { type: "section", head: "Courts and the Crown", md:
          "Since 1982 the Charter of Rights and Freedoms has let the Supreme Court strike down laws, a form of [[judicial-review]]. A unique clause, the 'notwithstanding clause', lets Parliament or a province override some Charter rights for five years at a time, and provinces have used it more often recently. The King is head of state, represented by the governor general, who acts on the prime minister's advice." },
        { type: "section", head: "Minority governments", md:
          "Because [[first-past-the-post]] often gives no party a majority, Canada has frequent minority governments, which survive only as long as they keep the House's confidence on budgets and key votes. They usually last about two years. Carney governed that way from April 2025 until April 2026, relying on abstentions or support from smaller parties to pass his first budget, before floor-crossings gave him a majority." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Its defenders", md:
            "Strong majority governments can act quickly, and powerful provinces keep decisions close to the people in a vast, diverse country." },
          right: { head: "Its critics", md:
            "First-past-the-post turns a minority of votes into full control, the Senate is unelected, and the prime minister's office is too powerful." } }
      ],
      takeaways: [
        "Canada elects its House of Commons by first-past-the-post, and party discipline makes majority governments powerful.",
        "The Senate is appointed and rarely blocks laws.",
        "The ten provinces control health, education and resources, and Quebec and Alberta often push against Ottawa."
      ],
      check: { q: "What does the 'notwithstanding clause' allow?",
        choices: ["The Senate to veto any law", "Parliament or a province to override some Charter rights for five years", "The King to dismiss the prime minister"], answer: 1,
        explain: "Section 33 of the Charter lets legislatures shield a law from some Charter rights for renewable five-year periods." },
      sources: [
        { title: "Canada", publisher: "Britannica", url: "https://www.britannica.com/place/Canada", date: "n.d." },
        { title: "Canada profile", publisher: "BBC News", url: "https://www.bbc.com/news/world-us-canada-16841120", date: "n.d." },
        { title: "Charter of Rights and Freedoms: Section 33", publisher: "Government of Canada", url: "https://www.justice.gc.ca/eng/csj-sjc/rfc-dlc/ccrf-ccdl/check/art33.html", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ca-3", kind: "history", asOf: "2026-09-29",
      title: "From Confederation to the '51st state'",
      dek: "A country built on compromises between English and French, Indigenous nations and settlers, and a giant neighbour to the south.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ca/ca-3-hero.webp",
          alt: "Illustration of a transcontinental railway line running through snowy mountains beside a turquoise lake, with a steam train in the distance.",
          caption: "The railway to the Pacific, finished in 1885, helped hold the new country together.",
          credit: "AI illustration — not a photograph",
          prompt: "A 19th-century steam train crossing a wooden trestle bridge through snowy Rocky Mountain peaks beside a turquoise glacial lake, pine forests, dramatic clouds, painterly and historic, no people close up, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1867", "Confederation of four British colonies"],
          ["1885", "Pacific railway completed; Riel executed"],
          ["1982", "Constitution brought home with a Charter of Rights"],
          ["1994", "NAFTA with the US and Mexico"],
          ["1995", "Quebec votes No to independence by under 1 point"],
          ["2015", "Justin Trudeau's Liberals win"],
          ["2025", "Trump's tariffs; Carney becomes prime minister"]
        ] },
        { type: "section", head: "1. A British compromise", md:
          "Indigenous peoples lived across the land for thousands of years before French and British settlement. After Britain conquered New France in 1760, its colonies kept French law and the Catholic Church in Quebec, the start of a lasting compromise between English and French. In 1867 four colonies united as the Dominion of Canada, partly out of fear of the United States after its Civil War. A railway to the Pacific, completed in 1885, bound in British Columbia, while the Métis leader Louis Riel was hanged after leading a rebellion on the Prairies." },
        { type: "section", head: "2. Independence without revolution", md:
          "Canada gained full control of its own affairs gradually: by fighting in both world wars, through the Statute of Westminster in 1931, and finally in 1982, when Pierre Trudeau brought the constitution home from Britain with a Charter of Rights. The residential school system, which took Indigenous children from their families until 1996, left deep scars; a truth and reconciliation commission reported in 2015." },
        { type: "section", head: "3. Quebec and national unity", md:
          "Quebec's 'Quiet Revolution' of the 1960s built a modern French-speaking society, and a separatist movement grew. Quebecers rejected independence in 1980 and again, by less than one percentage point, in 1995. Separatism has faded since, but the Bloc Québécois still sits in Ottawa." },
        { type: "section", head: "4. Free trade and the American embrace", md:
          "Canada signed a free-trade deal with the US in 1988, extended to Mexico as NAFTA in 1994 and renegotiated as the [[USMCA]] under Trump's first term. Trade soared, and by the 2020s about three-quarters of Canada's exports went south. That dependence made Canada extraordinarily vulnerable when Trump returned in 2025, threatening tariffs and calling Canada the '51st state'." },
        { type: "section", head: "5. A country of immigrants", md:
          "Canada has built itself through immigration, choosing most newcomers with a points system that rewards skills and education. About a quarter of Canadians were born abroad, the highest share in the G7, and Toronto and Vancouver are among the world's most diverse cities. After the pandemic, record numbers of temporary workers and students pushed population growth above 3% a year, straining housing. In 2024 Trudeau's government reversed course and cut its immigration targets, a sign of how the national consensus had frayed." },
        { type: "section", head: "6. Trudeau to Carney", md:
          "Justin Trudeau won in 2015 on a progressive platform, but by 2024 inflation, housing costs and immigration had made him deeply unpopular. After his finance minister resigned in December 2024, he announced his own resignation in January 2025. Carney won the Liberal leadership in March, and led the party to a fourth term in April." }
      ],
      takeaways: [
        "Canada was built on compromises between English and French and gained full independence gradually, ending in 1982.",
        "Quebec voted against independence twice, the second time by less than one point in 1995.",
        "Free trade made Canada deeply dependent on the US market, which left it exposed when Trump returned."
      ],
      check: { q: "What happened in Quebec's 1995 referendum?",
        choices: ["Quebec voted to leave Canada", "Quebecers voted No to independence by less than one point", "It was cancelled"], answer: 1,
        explain: "The No side won by about 50.6% to 49.4%, the closest Canada has come to breaking up." },
      sources: [
        { title: "Canada: History", publisher: "Britannica", url: "https://www.britannica.com/place/Canada/History", date: "n.d." },
        { title: "Quebec Referendum (1995)", publisher: "The Canadian Encyclopedia", url: "https://www.thecanadianencyclopedia.ca/en/article/quebec-referendum-1995", date: "n.d." },
        { title: "Canada: 2025 federal election", publisher: "House of Commons Library (UK)", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10244/", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "ca-4", kind: "players", asOf: "2026-09-29",
      title: "Carney, Poilievre and the premiers",
      dek: "A technocrat prime minister with a new majority, an opposition leader who lost his own seat and came back, and premiers who matter as much as ministers.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ca/ca-4-hero.webp",
          alt: "Illustration of a Gothic Revival parliament building with a tall clock tower on a hill above a river, in autumn.",
          caption: "Parliament Hill in Ottawa, above the Ottawa River.",
          credit: "AI illustration — not a photograph",
          prompt: "A Gothic Revival parliament building with a tall central clock tower and copper-green roofs on a cliff above a wide river, autumn maple trees in red and orange, clear crisp blue sky, stately and calm, no flags or legible text, no people close up." },
        { type: "people", head: "Five to know", items: [
          { name: "Mark Carney", role: "Prime minister, since March 2025",
            img: "img/ca/portrait-carney.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "Former governor of the Bank of Canada during the 2008 crisis and of the Bank of England during Brexit; entered politics in 2025 and won the Liberal leadership with 86% of the vote." },
          { name: "Pierre Poilievre", role: "Conservative leader and opposition leader, since 2022",
            img: "img/ca/portrait-poilievre.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "A combative populist who led the polls for two years, lost the 2025 election and his own Ottawa seat, then won an Alberta by-election and a leadership review with 87%." },
          { name: "Danielle Smith", role: "Premier of Alberta",
            img: "img/ca/portrait-smith.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "Leads the oil province, struck a pipeline deal with Carney, and allowed the October 2026 referendum on starting a separation process while saying she backs a united Canada." },
          { name: "Doug Ford", role: "Premier of Ontario",
            img: "img/ca/portrait-ford.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "The conservative premier of the most populous province and its car industry, and one of the loudest voices against Trump's tariffs." },
          { name: "Avi Lewis", role: "NDP leader, since March 2026",
            img: "img/ca/portrait-lewis.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "A left-wing journalist and film-maker elected on the first ballot to rebuild a party reduced to seven seats in 2025." }
        ] },
        { type: "section", head: "Carney's style", md:
          "Carney governs as a manager rather than a campaigner. He scrapped the unpopular consumer carbon tax on his first day, cut income tax for the lowest bracket, and set up a Major Projects Office to approve mines, ports and pipelines faster, under the slogan 'one project, one review'. His first budget, in November 2025, ran a C$78 billion deficit to fund defence and infrastructure. In November he signed a deal with Alberta opening the way to a new oil pipeline to the Pacific coast; his former environment minister, Steven Guilbeault, resigned in protest." },
        { type: "section", head: "The opposition", md:
          "Poilievre's Conservatives won 41% of the vote in 2025, their best share in decades, but still lost. He then lost his own seat, won a safe Alberta seat in an August 2025 by-election, and survived a mandatory leadership review in January 2026 with 87.4%. The defection of four Conservative MPs to the Liberals has hurt, and his party trails badly in the polls. The NDP, once the main party of the left, fell to seven seats and lost official party status; the Bloc Québécois holds most of the rest." },
        { type: "section", head: "Quebec's voice", md:
          "The Bloc Québécois, led by Yves-François Blanchet, runs candidates only in Quebec and defends the province's interests and its French language. In Quebec itself, the sovereigntist Parti Québécois has led the polls ahead of the provincial election on 5 October 2026, promising a new independence referendum, though not while Trump is in office." },
        { type: "section", head: "The premiers", md:
          "In a trade war, premiers matter. Ontario's Doug Ford threatened to cut electricity exports to US states in 2025 and later ran a television advert quoting Ronald Reagan against tariffs, which Trump cited when he broke off talks. Alberta's Danielle Smith has pressed for pipelines and against federal climate rules, while trying to contain the separatist movement in her own party." }
      ],
      takeaways: [
        "Carney governs as a pragmatic manager: fast-tracking big projects, raising defence spending and running a large deficit.",
        "Poilievre lost the 2025 election and his seat but won a by-election and a leadership review with 87.4%.",
        "Premiers such as Ontario's Doug Ford and Alberta's Danielle Smith are central players in the trade war and the energy debate."
      ],
      check: { q: "Why did Steven Guilbeault resign from Carney's cabinet?",
        choices: ["Over the trade war", "In protest at the energy and pipeline deal with Alberta", "After losing his seat"], answer: 1,
        explain: "The former environment minister quit in November 2025 after Carney signed an agreement opening the way to a new oil pipeline to the BC coast." },
      sources: [
        { title: "Pierre Poilievre sails through leadership review as Conservatives deliver a strong endorsement", publisher: "CBC News", url: "https://www.cbc.ca/news/politics/conservative-poilievre-leadership-review-9.7069573", date: "2026-01" },
        { title: "A guide to Carney's Alberta pipeline deal", publisher: "The Narwhal", url: "https://thenarwhal.ca/carney-alberta-pipeline-grand-bargain/", date: "2025-11" },
        { title: "Avi Lewis elected Leader of NDP", publisher: "Canada's NDP", url: "https://www.ndp.ca/news/avi-lewis-elected-leader-ndp", date: "2026-03-29" },
        { title: "Budget touts $81.8B defence investment as a sovereignty 'blueprint'", publisher: "CBC News", url: "https://www.cbc.ca/news/politics/defence-carney-budget-military-spending-9.6965349", date: "2025-11" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "ca-5", kind: "story", asOf: "2026-09-29",
      title: "The 'elbows up' election",
      dek: "In early 2025 the Liberals were heading for a crushing defeat. Then Trump threatened Canada's independence, and the race turned upside down.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ca/ca-5-hero.webp",
          alt: "Illustration of an ice hockey rink seen from above with players in red and blue jerseys jostling along the boards, their elbows raised.",
          caption: "'Elbows up', a hockey phrase for standing your ground, became the slogan of Canadian defiance in 2025.",
          credit: "AI illustration — not a photograph",
          prompt: "An indoor ice hockey rink seen from a high angle, players in plain red and plain white jerseys with no logos battling along the boards with elbows raised, spray of ice, bright arena lights, energetic and defiant, no faces visible, no legible text." },
        { type: "section", head: "What happened", md:
          "At the start of 2025 the Conservatives led the Liberals by more than 20 points, and Pierre Poilievre looked certain to become prime minister. Then Donald Trump, newly back in office, threatened sweeping [[tariff|tariffs]] and repeatedly said Canada should become America's '51st state', calling Justin Trudeau 'governor'.\n\n" +
          "Canadians reacted with a wave of patriotism: booing the US anthem at hockey games, cancelling American holidays and pulling US bourbon from shelves. Trudeau resigned; Mark Carney won the Liberal leadership on 9 March and called an election for 28 April. The Liberals won 169 seats, three short of a majority, with 43.8% of the vote." },
        { type: "facts", head: "The results, 28 April 2025", rows: [
          ["Liberals", "169 seats (43.8%)"],
          ["Conservatives", "144 seats (41.3%)"],
          ["Bloc Québécois", "22 seats"],
          ["NDP", "7 seats, losing official party status"],
          ["Turnout", "69.5%, the highest since 1993"]
        ] },
        { type: "section", head: "Why it happened", md:
          "The election became a referendum on who should stand up to Trump. Carney's résumé as a crisis-tested central banker reassured voters, and he dropped Trudeau's least popular policies. Left-leaning voters abandoned the NDP to stop the Conservatives, and the vote polarised between the two big parties to a degree not seen in decades. Poilievre's populist style, and his early focus on the carbon tax rather than Trump, looked out of step with the moment." },
        { type: "section", head: "The campaign", md:
          "Carney ran as a steady hand: 'elbows up' against Trump, a promise to build, and a pledge to fight tariffs dollar for dollar. Poilievre filled arenas with young voters angry about housing costs, and won more votes than any Conservative leader in decades. But in his own Ottawa-area seat of Carleton, which he had held since 2004, he lost to a Liberal newcomer, Bruce Fanjoy, a stunning personal defeat. The Conservatives swept most of the Prairies and suburbs; the Liberals took the big cities, Atlantic Canada and much of Quebec, where the Bloc lost ground." },
        { type: "compare", head: "Two readings of the result",
          left: { head: "Liberals", md:
            "Canadians chose experience and national unity at a moment of danger, and rejected Trump-style politics." },
          right: { head: "Conservatives", md:
            "They won their highest vote share since 1988; the Liberals were saved by Trump and by the collapse of the NDP, not by their record." } },
        { type: "section", head: "Why it matters", md:
          "The election showed how a foreign threat can transform domestic politics, a pattern that also helped Albanese in [[unit:au|Australia]] a week later. It left Carney with a minority, which he turned into a majority a year later through floor-crossings and by-elections. It also reshaped the opposition: the NDP, which had propped up Trudeau's minority, was left without the seats to play that role again, and its leader, Jagmeet Singh, lost his own seat and resigned." },
        { type: "section", head: "What's next", md:
          "The next election is due by October 2029. Carney's challenge is to keep the coalition of voters that Trump's threats created once the crisis fades." }
      ],
      takeaways: [
        "Trump's '51st state' threats turned a 20-point Conservative lead into a Liberal victory.",
        "The Liberals won 169 of 343 seats in April 2025; the Conservatives won 41.3%, their best share in decades.",
        "The NDP collapsed to seven seats as left-leaning voters rallied to the Liberals."
      ],
      check: { q: "What turned the 2025 Canadian election around?",
        choices: ["A recession", "Trump's tariff threats and talk of Canada as the '51st state'", "A scandal in the Conservative Party"], answer: 1,
        explain: "Trump's threats sparked a patriotic backlash, and voters turned to Carney as the leader best placed to stand up to him." },
      sources: [
        { title: "Canada: 2025 federal election", publisher: "House of Commons Library (UK)", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10244/", date: "2025" },
        { title: "Canada election results: Who are the key winners and losers?", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/4/29/canada-election-results-who-are-the-key-winners-and-losers", date: "2025-04-29" },
        { title: "Pierre Poilievre wins Battle River-Crowfoot byelection", publisher: "CBC News", url: "https://www.cbc.ca/news/canada/edmonton/battle-river-crowfoot-byelection-1.7606852", date: "2025-08-18" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "ca-6", kind: "story", asOf: "2026-09-29",
      title: "The trade war",
      dek: "Talks with Washington collapsed in August 2026. Now 50% tariffs hit Canadian cars, dairy and drinks, and Canada has struck back.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ca/ca-6-hero.webp",
          alt: "Illustration of a long line of lorries queued at a border crossing on a suspension bridge over a river at dusk.",
          caption: "Hundreds of billions of dollars of goods cross the Canada–US border every year.",
          credit: "AI illustration — not a photograph",
          prompt: "A long line of freight trucks queued on a large suspension bridge over a wide river at dusk, customs booths at the far end, city lights on both banks, a sense of waiting and tension, no flags, no legible text or logos." },
        { type: "section", head: "What happened", md:
          "Trump first put 25% tariffs on Canadian goods in March 2025, citing fentanyl and migrants, but exempted goods covered by the [[USMCA]], which spared most trade. He added 50% tariffs on steel and aluminium and 25% on cars. Canada retaliated, then dropped most counter-tariffs in 2025 to restart talks. In October 2025 Trump broke off negotiations over an Ontario government advert quoting Ronald Reagan against tariffs.\n\n" +
          "In February 2026 the US Supreme Court struck down the emergency tariffs (see [[unit:us]]). Trump turned to other laws. On 20 July 2026 he signed proclamations under Section 338 of a 1930 trade law putting 50% tariffs on Canadian cars, alcohol and dairy, worth about $20 billion a year." },
        { type: "section", head: "The collapse", md:
          "The tariffs were delayed to 22 August to allow a last round of talks. They failed. Carney said the Americans 'asked too much and offered too little' and suspended negotiations; Washington disputed his account. The tariffs took effect, and on 8 September Canada imposed counter-tariffs on about C$27.6 billion of US goods, from steel and appliances to dairy and farm equipment. On 25 September the US trade representative, Jamieson Greer, said there was 'no urgency' to strike a deal." },
        { type: "facts", head: "The trade war in numbers", rows: [
          ["US tariffs (Section 232)", "50% on steel and aluminium; 25% on non-USMCA cars"],
          ["US tariffs (Section 338, from 22 Aug 2026)", "50% on Canadian cars, alcohol and dairy"],
          ["Canadian counter-tariffs (from 8 Sep 2026)", "About C$27.6 billion of US goods"],
          ["USMCA", "In its first joint review since July 2026"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Washington wants Canada to open its protected dairy market, end provincial boycotts of American alcohol, and accept tougher rules for cars built with Canadian parts. Canada says those demands would gut industries and its sovereignty. Underneath is a bigger question: whether the [[USMCA]], up for review in 2026, survives in its current form." },
        { type: "compare", head: "Two views",
          left: { head: "Carney's government", md:
            "Canada will not accept a bad deal under pressure. It will diversify trade toward Europe and Asia and build at home." },
          right: { head: "Critics", md:
            "Canada has less leverage than it thinks; retaliation hurts Canadian consumers, and a deal on dairy and cars is worth the price." } },
        { type: "section", head: "The cost at home", md:
          "Steel towns such as Hamilton and Sault Ste. Marie, aluminium smelters in Quebec, car plants in southern Ontario and sawmills in British Columbia have borne the brunt, with layoffs and closures. Ottawa has offered wage subsidies, loans and 'Buy Canadian' rules for public contracts. Canadians have kept boycotting American products and holidays, and travel to the US has fallen sharply." },
        { type: "section", head: "What's next", md:
          "Talks could resume at any moment, and the [[USMCA]] review continues. Meanwhile Carney is courting the EU, whose leaders have floated deeper ties with Canada, and Asian partners." }
      ],
      takeaways: [
        "After the Supreme Court struck down Trump's emergency tariffs, he imposed 50% Section 338 tariffs on Canadian cars, alcohol and dairy.",
        "Talks collapsed on 22 August 2026, and Canada imposed counter-tariffs on about C$27.6 billion of US goods from 8 September.",
        "The future of the USMCA free-trade agreement is at stake in its 2026 review."
      ],
      check: { q: "What did Washington's Section 338 tariffs target?",
        choices: ["Oil and gas", "Canadian cars, alcohol and dairy", "Lumber only"], answer: 1,
        explain: "The July 2026 proclamations put 50% tariffs on Canadian motor vehicles, alcohol and dairy, citing Canadian trade practices in those sectors." },
      sources: [
        { title: "As U.S.-Canada trade talks collapse, Carney says retaliatory tariffs will start Sept. 8", publisher: "CNBC", url: "https://www.cnbc.com/2026/08/22/us-canada-trade-talks-collapse-ushering-in-wave-of-new-tariffs.html", date: "2026-08-22" },
        { title: "Fact Sheet: President Donald J. Trump Imposes Additional Tariffs on Canada", publisher: "The White House", url: "https://www.whitehouse.gov/fact-sheets/2026/07/fact-sheet-president-donald-j-trump-imposes-additional-tariffs-on-canada/", date: "2026-07" },
        { title: "List of products from the United States subject to counter-tariffs effective September 8, 2026", publisher: "Department of Finance Canada", url: "https://www.canada.ca/en/department-finance/news/2026/08/list-of-products-from-the-united-states-subject-to-counter-tariffs-effective-september-8-2026.html", date: "2026-08" },
        { title: "Trump's team is 'comfortable' with state of Canada-U.S. trade", publisher: "BNN Bloomberg", url: "https://www.bnnbloomberg.ca/tariffs/2026/09/25/were-still-getting-what-we-need-from-canada-trumps-trade-lead-tells-us-media/", date: "2026-09-25" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "ca-7", kind: "story", asOf: "2026-09-29",
      title: "Alberta's question",
      dek: "On 19 October Albertans vote on whether to start a process that could lead to a binding referendum on leaving Canada.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ca/ca-7-hero.webp",
          alt: "Illustration of a vast prairie wheat field under a huge sky, with oil pumpjacks and grain elevators on the horizon and the Rocky Mountains far beyond.",
          caption: "Oil, farming and a sense of distance from Ottawa shape Alberta's politics.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast golden prairie wheat field under an enormous sky with towering clouds, oil pumpjacks and a red wooden grain elevator on the horizon, the Rocky Mountains faint in the far distance, evening light, open and lonely, no people, no legible text." },
        { type: "section", head: "What happened", md:
          "Alberta, the heart of Canada's oil industry, has long resented Ottawa over climate rules, pipelines and the way federal money is shared. After the Liberals won again in 2025, a separatist group gathered enough signatures under Alberta's new citizen-initiative law to force a vote. Premier Danielle Smith's government placed it on a ballot of ten questions on 19 October 2026.\n\n" +
          "The question does not ask whether Alberta should leave. Voters choose between 'Alberta should remain a province of Canada' and starting the legal process required by the constitution to hold a later, binding referendum on separation." },
        { type: "section", head: "Why it happened", md:
          "Many Albertans feel their oil wealth funds the rest of the country while federal climate policies hold their industry back. Trump's courting of Canadian separatists and the Liberals' fourth win sharpened that anger. Smith says she supports a sovereign Alberta within a united Canada, but has let the vote go ahead, arguing that citizens have a right to be heard." },
        { type: "section", head: "The polls", md:
          "In mid-August roughly two-thirds of Albertans said they would vote to remain, and under a third backed starting the separation process. Even a win for that option would only begin a long process: the Supreme Court ruled in 1998 that any province seeking to leave would need a clear majority on a clear question, followed by negotiations with the rest of Canada, including Indigenous nations whose treaties predate the province." },
        { type: "section", head: "Two petitions", md:
          "Two citizen campaigns raced each other. The separatist Alberta Prosperity Project, led by Mitch Sylvestre, collected signatures for a vote on leaving Canada. A rival 'Forever Canadian' petition, led by Thomas Lukaszuk, a former Conservative provincial minister, gathered more than 430,000 signatures for a vote on staying, far above the threshold. The government then folded the issue into the two-option question on the October ballot." },
        { type: "compare", head: "Two views",
          left: { head: "Separatists", md:
            "Alberta is treated as a cash machine and blocked from developing its own resources. Only independence, or the threat of it, will change that." },
          right: { head: "Federalists", md:
            "Leaving would be an economic disaster for a landlocked province, and the vote itself scares investors. Alberta is better off fighting for its interests inside Canada." } },
        { type: "section", head: "Carney's answer", md:
          "Carney's strategy has been to give Alberta much of what it asked for. The November 2025 agreement with Smith exempted the province from federal clean-electricity rules and set conditions for a new oil pipeline to the Pacific coast, tied to a large carbon-capture project. Critics on the left say the deal undermines Canada's climate targets; separatists say it is too little, too late." },
        { type: "section", head: "What's next", md:
          "A clear vote to remain would weaken the separatist movement. A close result would keep the question alive, and put pressure on Ottawa to deliver the pipeline. Either way, the vote comes two weeks after Quebec's election, a reminder that national unity is back on the agenda." }
      ],
      takeaways: [
        "Albertans vote on 19 October 2026 on whether to begin a process toward a binding referendum on separation.",
        "Polls in August showed about two-thirds planning to vote to remain in Canada.",
        "Carney's energy deal with Alberta tried to defuse the anger with a path to a new oil pipeline."
      ],
      check: { q: "What would a vote to start the process in Alberta actually do?",
        choices: ["Make Alberta independent immediately", "Open the way to a later, binding referendum on separation", "Nothing at all"], answer: 1,
        explain: "The October question only asks whether to begin the legal process toward a second, binding referendum." },
      sources: [
        { title: "Referendum", publisher: "Elections Alberta", url: "https://www.elections.ab.ca/elections/referendum/", date: "2026" },
        { title: "Here's what to know about Canada's landmark energy agreement with Alberta", publisher: "CBC News", url: "https://www.cbc.ca/news/politics/ottawa-alberta-energy-agreement-pipeline-9.6994715", date: "2025-11" },
        { title: "Reference re Secession of Quebec", publisher: "Supreme Court of Canada", url: "https://scc-csc.lexum.com/scc-csc/scc-csc/en/item/1643/index.do", date: "1998-08-20" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "ca-8", kind: "now", asOf: "2026-09-29",
      title: "Where things stand",
      dek: "A narrow majority, a big poll lead, a trade war without an end in sight, and a country trying to rewire its economy.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ca/ca-8-hero.webp",
          alt: "Illustration of a container port on the Pacific coast with cranes loading ships beneath forested mountains.",
          caption: "Canada is trying to sell more to Europe and Asia and less to the United States.",
          credit: "AI illustration — not a photograph",
          prompt: "A large container port on a rainy Pacific coast, tall gantry cranes loading cargo ships, dark forested mountains rising behind in mist, grey-blue light, industrial and ambitious, no flags, no legible text or logos." },
        { type: "section", head: "The state of play", md:
          "- **Government:** Liberals hold 174 of 343 seats; next election due by October 2029.\n" +
          "- **Polls:** Liberals about 46%, Conservatives 29%, NDP 15% (late September).\n" +
          "- **Trade:** US 50% tariffs on cars, dairy and alcohol; Canadian counter-tariffs; no talks.\n" +
          "- **Unity:** Alberta votes on 19 October.\n" +
          "- **Defence:** NATO's 2% target met; 5% pledged by 2035." },
        { type: "section", head: "The majority", md:
          "Carney became the first prime minister to win a majority through floor-crossing. Four Conservatives, Chris d'Entremont, Michael Ma, Matt Jeneroux and Marilyn Gladu, and the NDP's Lori Idlout joined the Liberals between November 2025 and April 2026, and the Liberals then swept three by-elections on 13 April. Critics say MPs who switch should face their voters; supporters say the government needed stability in a crisis. The fall session of Parliament will test the thin two-seat cushion with major bills on online safety and faster approval for big projects, and a single absence or rebellion could cost a vote." },
        { type: "section", head: "Rewiring the economy", md:
          "Carney's big bet is that Canada can build its way out of dependence on the US: new pipelines, ports, mines and power lines, faster approvals, and trade with Europe and Asia. He has welcomed talk from EU leaders of an unprecedented partnership. Critics warn that the deficits are large, that the projects will take years, and that Indigenous nations whose land they cross must consent, which is far from guaranteed." },
        { type: "section", head: "Quebec votes", md:
          "On 5 October Quebec elects its provincial government. The Parti Québécois has led the polls, around 29% in one Léger survey, with a minority government the likeliest outcome. Its leader, Paul St-Pierre Plamondon, promises a consultation process and a referendum on independence after January 2029, and has said he would pursue it even as a minority. A PQ win would put national unity back at the centre of Canadian politics, alongside Alberta's vote two weeks later." },
        { type: "section", head: "Defence", md:
          "Canada spent more than C$63 billion on defence in 2025–26 to reach NATO's 2% target for the first time in decades, and is buying submarines, drones and air-defence systems. Carney has also moved to buy more equipment from Europe rather than the United States." },
        { type: "section", head: "Three scenarios", md:
          "- **Deal.** A trade agreement lifts most tariffs and the USMCA survives, easing the pressure.\n" +
          "- **Long freeze.** Tariffs stay, Canada diversifies slowly, and the economy weakens.\n" +
          "- **Unity shock.** A strong separatist showing in Alberta opens a second front at home." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **5 October 2026:** Quebec's provincial election\n" +
          "- **19 October 2026:** Alberta's referendum\n" +
          "- **3 November 2026:** the US midterms, which could shift Trump's trade stance\n" +
          "- **Ongoing:** the USMCA joint review\n" +
          "- **By October 2029:** the next federal election" },
        { type: "section", head: "Connections", md:
          "Canada's story runs through [[unit:us]] (the trade war), [[unit:mx]] (its USMCA partner, negotiating separately), [[unit:gb]] and [[unit:fr]] (G7 allies and old ties), [[unit:ua]] (which Canada backs strongly) and [[unit:cn]] (a market Canada is cautiously reopening)." }
      ],
      takeaways: [
        "Carney holds a two-seat majority and a large poll lead.",
        "The trade war with the US has no end in sight, and the USMCA's future is uncertain.",
        "Alberta's 19 October vote is the next big test of national unity."
      ],
      check: { q: "Which Canadian MPs crossed the floor to give Carney his majority?",
        choices: ["Only Liberals", "Four Conservatives and one New Democrat", "Bloc Québécois MPs"], answer: 1,
        explain: "Four Conservatives and the NDP's Lori Idlout joined the Liberals, who then won three by-elections in April 2026." },
      sources: [
        { title: "Liberals share new details of how they attracted their first floor-crosser, Chris d'Entremont", publisher: "CBC News", url: "https://www.cbc.ca/news/politics/floor-crosser-liberal-carney-poilievre-majority-government-9.7160473", date: "2026-04" },
        { title: "Federal Tracker: Liberals Lead by 17 as Conservatives Fall Back Below 30%", publisher: "Liaison Strategies", url: "https://press.liaisonstrategies.ca/federal-tracker-liberals-lead-by-17-as-conservatives-fall-back-below-30/", date: "2026-09" },
        { title: "Carney rallies Liberal MPs as 'crucial session' of Parliament set to resume", publisher: "CBC News", url: "https://www.cbc.ca/news/politics/carney-liberal-caucus-parliament-9.7350304", date: "2026-09" }
      ]
    }

  ]
});
