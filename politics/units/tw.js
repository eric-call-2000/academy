/* ============================================================
   Unit 20 — Taiwan 🇹🇼
   Research note and sources: tools/research/tw.md
   Current as of 29 Sep 2026.
   Status note: Taiwan has governed itself since 1949; the People's
   Republic of China claims it; few countries recognise it formally.
   This unit describes that status neutrally.
   ============================================================ */
window.POLITICS.addUnit("tw", {
  id: "tw",
  asOf: "2026-09-29",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "tw-1", kind: "snapshot", asOf: "2026-09-29",
      title: "Taiwan in brief",
      dek: "A self-governing island democracy that makes most of the world's advanced chips, claimed by China, and the likeliest spark for a war between great powers.",
      blocks: [
        { type: "map", src: "maps/tw.svg",
          alt: "Locator map of the western Pacific with Taiwan highlighted, an island about 130 kilometres off the south-east coast of China, with small outlying islands near the Chinese coast, and a small globe showing its place in the world.",
          caption: "Taiwan lies about 130 km from mainland China. It is governed by the Republic of China (ROC) government, which also holds the Penghu, Kinmen and Matsu islands; the People's Republic of China claims all of them.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Taipei"],
          ["People", "About 23 million"],
          ["Official name", "Republic of China (ROC)"],
          ["System", "Semi-presidential democracy"],
          ["President", "Lai Ching-te (Democratic Progressive Party), since May 2024"],
          ["Parliament", "113-seat Legislative Yuan, opposition majority"],
          ["Diplomatic recognition", "About a dozen countries; unofficial ties with most others"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Taiwan is where the world's most advanced computer chips are made. TSMC, its biggest company, produces the vast majority of the leading-edge chips that power smartphones, AI data centres and weapons. A war or blockade would devastate the global economy.\n\n" +
          "It is also the most likely flashpoint between [[unit:us|the United States]] and [[unit:cn|China]]. Beijing says Taiwan is part of China and has not ruled out using force to take it. Washington does not formally recognise Taiwan, but it sells it weapons and is legally committed to help it defend itself, while deliberately leaving unclear whether it would fight." },
        { type: "section", head: "Status: a neutral summary", md:
          "Taiwan has been governed separately from mainland China since 1949, when the Republic of China government lost the Chinese civil war and retreated to the island. The People's Republic of China, which has never ruled Taiwan, claims it as a province. Most countries, including the United States, recognise the People's Republic as the government of China and have only unofficial relations with Taiwan; about a dozen, mostly small states, recognise the ROC instead. Most people in Taiwan now see themselves as Taiwanese, and polls show that most prefer to keep the status quo rather than either formal independence or unification." },
        { type: "section", head: "Who holds power", md:
          "President Lai Ching-te of the Democratic Progressive Party (DPP), which emphasises Taiwan's separate identity, won the presidency in January 2024 with 40% of the vote in a three-way race. But his party lost its majority in the Legislative Yuan, where the Kuomintang (KMT), which favours closer ties with Beijing, and the smaller Taiwan People's Party (TPP) together hold a majority. The result has been two years of fierce conflict over budgets, defence spending and the courts." },
        { type: "section", head: "A democratic success", md:
          "Taiwan is regularly rated one of Asia's freest democracies, with high turnout, a lively press and peaceful transfers of power. It was also one of the first places in Asia to legalise same-sex marriage, in 2019." },
        { type: "section", head: "What Taiwan wants", md:
          "Across party lines, Taiwan's people want peace, prosperity and the ability to govern themselves. The DPP government wants more defence spending, closer ties with democracies and a firm line against Beijing's pressure. The KMT wants dialogue with Beijing to lower tensions, argues the DPP provokes China, and says it too supports defence, but not the government's spending plans unchecked." },
        { type: "callout", tone: "why", md:
          "If China tried to take Taiwan by force or blockade, the result could be a war between nuclear powers and the worst economic shock in modern history. Taiwan's own politics, how united it is and how much it spends on defence, are part of what deters or invites that." }
      ],
      takeaways: [
        "Taiwan has governed itself since 1949; the People's Republic of China claims it, and few countries recognise it formally.",
        "It produces most of the world's leading-edge chips, making its security a global economic concern.",
        "President Lai Ching-te faces an opposition-controlled legislature."
      ],
      check: { q: "What do most people in Taiwan prefer, according to long-running polls?",
        choices: ["Immediate unification with China", "Immediate formal independence", "Maintaining the status quo"], answer: 2,
        explain: "Surveys have long shown most prefer to keep the status quo, in one form or another, over either unification or a formal declaration of independence." },
      sources: [
        { title: "Confrontation Over Taiwan (Global Conflict Tracker)", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/global-conflict-tracker/conflict/confrontation-over-taiwan", date: "2026" },
        { title: "Taiwan's president says future will not be decided by 'external forces'", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/5/20/taiwans-president-says-future-will-not-be-decided-by-external-forces", date: "2026-05-20" },
        { title: "Important Political Attitude Trend Distribution (identity and independence–unification surveys)", publisher: "Election Study Center, National Chengchi University", url: "https://esc.nccu.edu.tw/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "tw-2", kind: "power", asOf: "2026-09-29",
      title: "A president versus the legislature",
      dek: "Taiwan's system gives the president the executive but the Legislative Yuan the purse, and since 2024 they have been at war.",
      blocks: [
        { type: "diagram", src: "img/tw/tw-2-power.svg",
          alt: "Diagram of power in Taiwan. Voters elect a president and a 113-seat Legislative Yuan. The president, Lai Ching-te of the DPP, serves four-year terms with a two-term limit, handles defence, foreign and China policy, and appoints the premier. The Executive Yuan, the cabinet under Premier Cho Jung-tai, proposes budgets and laws and answers to the Legislative Yuan, where the KMT and TPP hold a majority and can cut budgets and pass laws. The Constitutional Court reviews laws, and its quorum became a political fight. The next elections are local on 28 November 2026 and presidential in 2028.",
          caption: "The president governs; the opposition-controlled legislature controls laws and money.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "Five branches", md:
          "Taiwan's constitution, written in mainland China in 1947 and heavily amended since the 1990s, divides government into five 'yuan', or branches: executive, legislative, judicial, examination (for civil servants) and control (an ombudsman). The two that matter most in daily politics are the Executive Yuan, Taiwan's cabinet, and the Legislative Yuan, its parliament." },
        { type: "section", head: "The president and the premier", md:
          "The president is directly elected for four years and can serve two terms. The president leads on defence, foreign affairs and relations with Beijing, and appoints the premier, who heads the Executive Yuan without needing the legislature's approval. The premier's government proposes laws and the budget, answers questions in the legislature and can be removed by a no-confidence vote, which would let the president dissolve the legislature." },
        { type: "section", head: "The Legislative Yuan", md:
          "The 113-member Legislative Yuan passes laws and the budget, and can cut spending but not add to it. In the January 2024 election the KMT won 52 seats, the DPP 51 and the TPP 8, with two independents aligned with the KMT. With the TPP's support, the KMT has used its majority to cut and freeze government budgets, expand the legislature's powers to investigate, and pass laws the government opposes." },
        { type: "section", head: "The court fight", md:
          "In late 2024 the opposition majority amended the law governing the Constitutional Court to require a higher quorum for rulings, and then rejected the president's nominees for vacant seats. With too few justices to reach that quorum, the court was left largely unable to rule, including on the opposition's own laws. The DPP called it an attack on the constitution; the KMT said it was restoring checks on a court it saw as biased toward the government." },
        { type: "section", head: "The parties", md:
          "The DPP grew out of the democracy movement under martial law and stresses Taiwanese identity. The KMT, which ruled China and then Taiwan for decades, emphasises the ROC's Chinese heritage and dialogue with Beijing under the [[1992-consensus|'1992 Consensus']], a formula in which both sides agree there is 'one China' but differ on what it means. The TPP, founded by former Taipei mayor Ko Wen-je, appeals to younger voters tired of the two big parties." },
        { type: "section", head: "Local power", md:
          "Taiwan's six big municipalities and 16 counties elect their own mayors and magistrates, who run schools, roads and local services and are often launching pads for national office. Lai himself was mayor of Tainan, in the DPP's southern heartland, before becoming premier and then vice-president." },
        { type: "compare", head: "Two views of the gridlock",
          left: { head: "The government's view", md:
            "An opposition that works closely with Beijing is weakening Taiwan's defences and institutions, cutting budgets and paralysing the courts." },
          right: { head: "The opposition's view", md:
            "Voters gave the legislature a majority to check a president who won only 40%. Scrutinising spending and powers is its job, not an attack on democracy." } }
      ],
      takeaways: [
        "The president leads on defence and China policy and appoints the premier without the legislature's approval.",
        "The KMT and TPP control the Legislative Yuan and have cut and frozen government budgets.",
        "A dispute over the Constitutional Court's quorum left it largely unable to rule."
      ],
      check: { q: "Which parties hold the majority in Taiwan's Legislative Yuan?",
        choices: ["The DPP alone", "The KMT and the TPP", "The DPP and the TPP"], answer: 1,
        explain: "The KMT and its allies, with the TPP's eight seats, control the 113-seat legislature." },
      sources: [
        { title: "Bulwark in the Pacific: Implications of the January 2024 Taiwanese Elections", publisher: "Harvard International Review", url: "https://hir.harvard.edu/bulwark-in-the-pacific-implications-of-the-january-2024-taiwanese-elections", date: "2024" },
        { title: "Taiwan Finally Passed Its 2026 Budget. What Got Cut?", publisher: "The Diplomat", url: "https://thediplomat.com/2026/09/taiwan-finally-passed-its-2026-budget-what-got-cut/", date: "2026-09" },
        { title: "Taiwan profile", publisher: "BBC News", url: "https://www.bbc.com/news/world-asia-16164639", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "tw-3", kind: "history", asOf: "2026-09-29",
      title: "From martial law to democracy",
      dek: "A colony, a refuge for a defeated government, 38 years of martial law, and then one of Asia's most vibrant democracies.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tw/tw-3-hero.webp",
          alt: "Illustration of a grand white memorial hall with a blue octagonal roof at the end of a vast plaza, with a crowd gathered in the distance.",
          caption: "Liberty Square in Taipei, scene of the 1990 Wild Lily student movement for democracy.",
          credit: "AI illustration — not a photograph",
          prompt: "A grand white memorial hall with a deep blue octagonal roof at the end of a vast plaza flanked by traditional gates, a large peaceful crowd seen from far behind in the plaza, spring evening light, dignified and hopeful, no flags or legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1895–1945", "Japanese colony"],
          ["1947", "The 28 February massacre"],
          ["1949", "The ROC government retreats to Taiwan; martial law"],
          ["1971", "The UN seat passes to the People's Republic"],
          ["1987", "Martial law lifted"],
          ["1996", "First direct presidential election"],
          ["2024", "Lai Ching-te elected president"]
        ] },
        { type: "section", head: "1. Colony and handover", md:
          "Taiwan was settled by Austronesian peoples for thousands of years before Chinese migration grew from the 1600s. The Qing dynasty ceded it to Japan in 1895, and it was a Japanese colony for 50 years. After Japan's defeat in 1945 it was handed to the Republic of China. In 1947 an uprising against corrupt ROC rule was crushed; thousands were killed in what is known as the 28 February Incident." },
        { type: "section", head: "2. The retreat and martial law", md:
          "In 1949 Chiang Kai-shek's KMT government lost the Chinese civil war to Mao Zedong's Communists and retreated to Taiwan with about two million soldiers and civilians. It ruled under martial law from 1949 to 1987, among the longest periods of martial law anywhere. In the 'White Terror', tens of thousands of people were imprisoned and many executed for suspected disloyalty. Taiwan's economy boomed, becoming one of the 'Asian tigers'." },
        { type: "section", head: "3. Losing recognition", md:
          "For decades both governments claimed to be the sole government of all China. In 1971 the United Nations gave China's seat to the People's Republic, and in 1979 the United States switched diplomatic recognition to Beijing. Congress passed the Taiwan Relations Act the same year, allowing unofficial ties and arms sales. Other countries followed, and today only about a dozen recognise the ROC." },
        { type: "section", head: "4. Democracy", md:
          "Under pressure from a growing opposition movement, and led by Chiang's son and then by Lee Teng-hui, the first Taiwan-born president, the KMT lifted martial law in 1987 and legalised opposition parties. In 1996 Taiwan held its first direct presidential election, as China fired missiles into nearby waters in warning. In 2000 the DPP's Chen Shui-bian won, the first peaceful transfer of power to the opposition." },
        { type: "section", head: "Identity", md:
          "Democracy changed how people in Taiwan see themselves. In the early 1990s most identified as Chinese or both Chinese and Taiwanese; today, surveys by National Chengchi University show a large majority identify as Taiwanese only. Taiwanese languages, history and Indigenous cultures, once suppressed, are now taught in schools." },
        { type: "section", head: "5. Two directions", md:
          "Since then, power has alternated. The KMT's Ma Ying-jeou (2008–2016) pursued closer economic ties with China, meeting Xi Jinping in 2015. Tsai Ing-wen of the DPP (2016–2024) resisted Beijing's pressure, legalised same-sex marriage in 2019, the first in Asia, and strengthened ties with the United States. In January 2024 her vice-president, Lai Ching-te, won the presidency, the first time a party won three terms in a row." }
      ],
      takeaways: [
        "Taiwan was a Japanese colony until 1945; the ROC government retreated there in 1949 and imposed martial law until 1987.",
        "In 1971 the UN seat passed to Beijing; the US switched recognition in 1979 but kept unofficial ties.",
        "Taiwan became a democracy in the 1990s; power has alternated between the KMT and the DPP since 2000."
      ],
      check: { q: "When was martial law lifted in Taiwan?",
        choices: ["1949", "1987", "2000"], answer: 1,
        explain: "Martial law, imposed in 1949, was lifted in 1987, opening the way to full democracy." },
      sources: [
        { title: "Taiwan profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-asia-16178545", date: "n.d." },
        { title: "Taiwan", publisher: "Britannica", url: "https://www.britannica.com/place/Taiwan", date: "n.d." },
        { title: "Confrontation Over Taiwan", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/global-conflict-tracker/conflict/confrontation-over-taiwan", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "tw-4", kind: "players", asOf: "2026-09-29",
      title: "Lai and the opposition",
      dek: "A president who calls Taiwan sovereign, a new KMT leader who wants peace talks with Beijing, and a small party that holds the balance.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tw/tw-4-hero.webp",
          alt: "Illustration of a busy Taipei night market with food stalls, lanterns and a campaign truck with blank banners passing slowly through the crowd.",
          caption: "Campaigning in Taiwan happens in night markets, temples and on campaign trucks.",
          credit: "AI illustration — not a photograph",
          prompt: "A busy night market street in an East Asian city, glowing food stalls and paper lanterns, steam rising, a small campaign truck with blank banners moving slowly through the crowd, people seen from behind, lively and warm, no legible text or faces." },
        { type: "people", head: "Five to know", items: [
          { name: "Lai Ching-te", role: "President, since May 2024",
            img: "img/tw/portrait-lai.webp", source: "Office of the President official photo (CC BY 2.0) via Wikimedia Commons; confirm the licence.",
            md: "A doctor turned politician, formerly premier and vice-president. Says Taiwan and the People's Republic 'are not subordinate to each other', a stance Beijing calls separatist." },
          { name: "Cho Jung-tai", role: "Premier",
            img: "img/tw/portrait-cho.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Runs the Executive Yuan and has fought the legislature over budget cuts, defence spending and drone funding." },
          { name: "Cheng Li-wun", role: "KMT chair, since October 2025",
            img: "img/tw/portrait-cheng.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "A former DPP activist turned KMT legislator who won the party leadership promising to seek peace and dialogue with Beijing." },
          { name: "Huang Kuo-chang", role: "TPP chair",
            img: "img/tw/portrait-huang.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Leads the TPP after its founder, Ko Wen-je, was indicted for corruption in 2024. His eight legislators give the KMT its majority." },
          { name: "Hsiao Bi-khim", role: "Vice-president",
            img: "img/tw/portrait-hsiao.webp", source: "Official photo via Wikimedia Commons; confirm the licence.",
            md: "Taiwan's former top representative in Washington, and a key voice with the United States." }
        ] },
        { type: "section", head: "Other voices", md:
          "Taiwan's mayors are powerful figures in their own right. Taipei's KMT mayor Chiang Wan-an, a great-grandson of Chiang Kai-shek, and Taichung's KMT mayor Lu Shiow-yen are often mentioned as possible 2028 presidential candidates. On the DPP side, Lai is expected to seek a second term." },
        { type: "section", head: "China's view", md:
          "Beijing's Taiwan Affairs Office calls the DPP 'separatist forces' and has published lists of officials it says it will punish, including some ministers. It welcomes contacts with the KMT and invites its leaders to the mainland, and uses trade measures, such as bans on some Taiwanese products, as both reward and pressure." },
        { type: "section", head: "Lai's stance", md:
          "Lai describes Taiwan as already a sovereign, independent country under the name Republic of China, so there is no need to declare independence. Beijing considers him a 'separatist' and has refused to talk to his government. He has called China a 'foreign hostile force' and introduced measures against Chinese espionage and influence operations." },
        { type: "section", head: "The KMT's case", md:
          "The KMT argues that dialogue with Beijing, not confrontation, keeps Taiwan safe, and that the DPP's rhetoric raises the risk of war. It supports the '1992 Consensus' and opposes independence. Its critics, including the DPP, say some of its members are too close to Beijing, pointing to KMT visits to China and cuts to the defence budget. The KMT says it supports a strong defence but rejects waste." },
        { type: "section", head: "The TPP's balancing act", md:
          "The TPP presents itself as a pragmatic third force, criticising both big parties. Its alliance with the KMT in the legislature has given it influence but also cost it some younger supporters who dislike the KMT. The corruption case against its founder, Ko Wen-je, which he denies, has weighed on its popularity and on its chances in the 2028 race." },
        { type: "section", head: "The public", md:
          "Most people in Taiwan identify as Taiwanese rather than Chinese, and support for unification is low. But voters are also wary of war and fed up with partisan fighting. Many swing between parties depending on local issues, economic conditions and candidates, which makes the November 2026 local elections a real contest." }
      ],
      takeaways: [
        "President Lai calls Taiwan already sovereign; Beijing refuses to deal with him.",
        "KMT chair Cheng Li-wun, elected in October 2025, favours dialogue with Beijing.",
        "The TPP's eight seats give the opposition its majority in the legislature."
      ],
      check: { q: "What is the '1992 Consensus'?",
        choices: ["A trade deal with the US", "A formula in which both sides agree there is 'one China' but differ on its meaning", "Taiwan's constitution"], answer: 1,
        explain: "The KMT and Beijing cite it as the basis for talks; the DPP has never accepted it." },
      sources: [
        { title: "KMT, TPP team up for November local elections", publisher: "Focus Taiwan (CNA)", url: "https://focustaiwan.tw/politics/202603140008", date: "2026-03-14" },
        { title: "KMT's Cheng facing election, party woes", publisher: "Taipei Times", url: "https://www.taipeitimes.com/News/taiwan/archives/2026/08/16/2003862577", date: "2026-08-16" },
        { title: "Taiwan's President Lai Ching-te pledges to defend island's sovereignty", publisher: "NPR", url: "https://www.npr.org/2026/01/01/g-s1-104249/taiwan-president-sovereignty-china-military-drills", date: "2026-01-01" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "tw-5", kind: "story", asOf: "2026-09-29",
      title: "The Great Recall",
      dek: "In 2025 civic groups tried to recall dozens of opposition legislators and flip control of the legislature. Every single recall failed.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tw/tw-5-hero.webp",
          alt: "Illustration of volunteers at a street-corner table on a rainy evening in a Taiwanese city, collecting signatures from passers-by under umbrellas.",
          caption: "Volunteers collected hundreds of thousands of signatures to trigger the recall votes.",
          credit: "AI illustration — not a photograph",
          prompt: "Volunteers at a small folding table on a rainy city street corner in the evening, collecting signatures from passers-by holding umbrellas, scooters parked nearby, shop lights reflected on wet pavement, earnest and grassroots, no legible text or faces." },
        { type: "section", head: "What happened", md:
          "Angered by the opposition's budget cuts and court changes, civic groups aligned with the DPP launched a campaign in 2025 to recall KMT legislators, using a legal process that lets voters remove a representative. If enough recalls succeeded, the DPP could win the by-elections that followed and take control of the legislature.\n\n" +
          "On 26 July 2025, 24 KMT legislators and the TPP mayor of Hsinchu faced recall votes. Every one survived: either turnout fell below the required 25% of eligible voters, or more people voted no than yes. On 23 August seven more KMT legislators faced votes, and all seven survived, most by a margin of about two to one." },
        { type: "facts", head: "The results", rows: [
          ["26 July 2025", "24 KMT legislators and 1 mayor: all recalls failed"],
          ["23 August 2025", "7 KMT legislators: all recalls failed"],
          ["Rule", "A recall needs more yes than no votes and yes votes from 25% of eligible voters"]
        ] },
        { type: "section", head: "Why it failed", md:
          "Many voters, even some who disliked the KMT, saw mass recalls as an attempt to overturn an election result only 18 months old. The KMT framed the campaign as a DPP power grab. Turnout was high on both sides, and in many districts opponents of the recall outnumbered supporters. Lai's decision to embrace the campaign made the results a verdict on him." },
        { type: "section", head: "The rules", md:
          "Recalls are possible in Taiwan only once a representative has served a year, and require petitions signed by a set share of voters in the district before a vote can be held. The KMT-led legislature had tightened the petition rules in 2024, and prosecutors investigated allegedly forged signatures in some petitions, including rival recall drives launched by KMT supporters against DPP legislators, none of which reached a vote." },
        { type: "compare", head: "Two readings",
          left: { head: "The KMT", md:
            "Voters rejected an attempt by the ruling party to seize a majority it did not win at the ballot box. The legislature's checks on the president have public support." },
          right: { head: "Recall supporters", md:
            "A citizen movement raised serious concerns about legislators' ties to Beijing. Losing the votes does not make those concerns wrong." } },
        { type: "section", head: "Who campaigned", md:
          "The recall drive was led by civic groups, many formed by young volunteers and veterans of earlier protest movements, rather than by the DPP itself, though the party and Lai increasingly backed it. Beijing's state media welcomed the result." },
        { type: "section", head: "Why it matters", md:
          "The defeat left Lai facing an emboldened opposition for the rest of his term, and prompted soul-searching inside the DPP about how it had misread the public mood. It also changed the KMT: weeks later, in October 2025, its members chose Cheng Li-wun, a leader who favours closer ties with Beijing, as party chair." },
        { type: "section", head: "What's next", md:
          "The legislature's composition will not change until the next national election in January 2028. Until then, Lai must negotiate with the opposition on every budget and law, or govern around it." }
      ],
      takeaways: [
        "In 2025 civic groups tried to recall 31 KMT legislators to flip control of the legislature.",
        "Every recall failed, on 26 July and 23 August 2025.",
        "The defeat strengthened the opposition for the rest of Lai's term."
      ],
      check: { q: "How many of the KMT legislators facing recall in 2025 were removed?",
        choices: ["None", "About half", "All of them"], answer: 0,
        explain: "All 31 KMT legislators who faced recall votes in July and August 2025 kept their seats." },
      sources: [
        { title: "Results of the July 26 Recall Elections", publisher: "Global Taiwan Institute", url: "https://globaltaiwan.org/2025/08/results-of-the-july-26-recall-elections/", date: "2025-08" },
        { title: "Taiwan's Great Recall Movement Is Officially Over", publisher: "The Diplomat", url: "https://thediplomat.com/2025/08/taiwans-great-recall-movement-is-officially-over/", date: "2025-08" },
        { title: "What the Failed Recall in Taiwan Means for U.S.-Taiwan and Cross-Strait Relations", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/articles/what-failed-recall-taiwan-means-us-taiwan-and-cross-strait-relations", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "tw-6", kind: "story", asOf: "2026-09-29",
      title: "Chips and tariffs",
      dek: "Taiwan's 'silicon shield' is moving partly to America: a trade deal, $250 billion in investment, and TSMC's giant Arizona build-out.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tw/tw-6-hero.webp",
          alt: "Illustration of a vast semiconductor fabrication plant at night, its long buildings glowing, with cooling towers and green hills behind.",
          caption: "Taiwan's chip fabs make the world's most advanced processors.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast semiconductor fabrication plant at night, long windowless white buildings glowing softly, cooling towers releasing vapour, a highway with light trails, dark green hills behind, high-tech and immense, no people, no legible text or logos." },
        { type: "section", head: "What happened", md:
          "Under pressure from Trump's [[tariff|tariffs]] and his complaints that Taiwan had 'stolen' America's chip industry, TSMC raised its planned investment in Arizona to $165 billion for chip fabrication plants, advanced packaging and a research centre. In January 2026 Taiwan and the United States signed a trade agreement: US tariffs on Taiwanese goods were capped at 15%, down from 20%, and Taiwanese firms committed to invest at least $250 billion in American chip production, backed by another $250 billion of credit guarantees from Taiwan's government." },
        { type: "facts", head: "By the numbers", rows: [
          ["TSMC's Arizona plans", "$165 billion"],
          ["US tariff on Taiwanese goods", "15% under the January 2026 deal"],
          ["Taiwanese investment pledge", "At least $250 billion"],
          ["Credit guarantees", "$250 billion"],
          ["Share of leading-edge chips made in Taiwan", "The vast majority"]
        ] },
        { type: "section", head: "The silicon shield", md:
          "Many in Taiwan have long believed that its dominance of advanced chips protects it: the world, including China, depends too much on TSMC to risk a war that would destroy it, and the United States has a powerful reason to defend it. Critics of the US deals worry that moving production to Arizona weakens that shield. The government argues that the most advanced processes stay in Taiwan, and that deeper ties with America make Taiwan more valuable, not less." },
        { type: "section", head: "Taiwan's economy", md:
          "Taiwan's economy grew strongly in 2024–25, driven by exports of chips and AI servers to American companies such as Nvidia, Apple and the big cloud providers. Exports to the United States overtook those to China. But the gains are concentrated in the tech sector, and wages elsewhere have lagged, fuelling complaints about housing costs in Taipei and Hsinchu." },
        { type: "compare", head: "Two views of the deal",
          left: { head: "Supporters", md:
            "The deal secures Taiwan's access to its biggest market, cements its partnership with Washington and keeps the most advanced technology at home." },
          right: { head: "Critics", md:
            "Taiwan is exporting its crown jewel and its jobs under pressure, and the investment pledges are huge relative to its economy." } },
        { type: "section", head: "Why it matters", md:
          "AI has made Taiwan's chips more important than ever, and its economy has boomed on exports of chips and servers to American tech companies. At the same time, dependence on one island for the world's most important technology is exactly what worries governments and companies planning for a crisis in the Taiwan Strait." },
        { type: "section", head: "Energy", md:
          "Chipmaking consumes huge amounts of electricity and water. Taiwan shut its last nuclear reactor in 2025 under a DPP policy, then held a referendum in August 2025 on restarting one plant; a majority voted yes, but turnout fell short of the threshold. Energy supply is a growing political issue." },
        { type: "section", head: "What's next", md:
          "Watch how quickly TSMC's Arizona plants reach full production, whether US tariffs on chips themselves are imposed, and whether the trade deal survives Trump's summitry with Xi Jinping, who pressed him in September 2026 to 'oppose' Taiwan independence." }
      ],
      takeaways: [
        "TSMC has pledged $165 billion for chipmaking in Arizona.",
        "A January 2026 deal capped US tariffs on Taiwan at 15% in exchange for $250 billion of investment.",
        "The 'silicon shield' debate asks whether moving production abroad weakens Taiwan's security."
      ],
      check: { q: "What is the 'silicon shield'?",
        choices: ["A missile-defence system", "The idea that Taiwan's chip dominance helps deter attack", "A US tariff"], answer: 1,
        explain: "It is the belief that the world's dependence on Taiwanese chips gives both China and the US strong reasons to avoid war there." },
      sources: [
        { title: "Taiwan will invest $250 billion in U.S. chipmaking under new trade deal", publisher: "CNBC", url: "https://www.cnbc.com/2026/01/15/us-taiwan-chips-deal-china.html", date: "2026-01-15" },
        { title: "U.S.-Taiwan Trade Agreement Leaves Major Questions Open", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/articles/u-s-taiwan-trade-agreement-leaves-major-questions-open", date: "2026" },
        { title: "Xi Urges Trump to Oppose Taiwan Independence at White House Summit", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-09-24/xi-presses-trump-to-oppose-taiwan-independence-during-summit", date: "2026-09-24" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "tw-7", kind: "story", asOf: "2026-09-29",
      title: "Drills and deterrence",
      dek: "China's military rehearses encircling the island, while Taiwan's government and legislature fight over how much to spend on defence, and on what.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tw/tw-7-hero.webp",
          alt: "Illustration of two coastguard patrol boats on a grey, choppy strait, with a distant warship on the horizon under low clouds.",
          caption: "Chinese military and coastguard activity around Taiwan has grown every year.",
          credit: "AI illustration — not a photograph",
          prompt: "Two coastguard patrol boats on a grey choppy sea strait, a distant warship silhouette on the horizon under low heavy clouds, spray and wind, tense and watchful, no flags or legible markings." },
        { type: "section", head: "What happened", md:
          "China's People's Liberation Army holds large exercises around Taiwan several times a year. In December 2025 its 'Justice Mission 2025' drills simulated a blockade, with warships and aircraft approaching closer to Taiwan's coast than before. Chinese aircraft cross the unofficial median line of the Taiwan Strait almost daily, and coastguard ships patrol near Taiwan's outlying islands.\n\n" +
          "In Taipei, Lai proposed a special defence budget of about NT$1.25 trillion (US$40 billion) over eight years. The opposition-controlled legislature passed a version in May 2026 cut by nearly 40%, to NT$780 billion (US$24.8 billion), funding mainly US arms purchases. A separate fight followed over drones: the government proposed NT$210 billion; in August the legislature instead passed its own six-year plan, capped at NT$240 billion but with more legislative control." },
        { type: "facts", head: "The defence budgets", rows: [
          ["Special budget proposed", "About NT$1.25 trillion (US$40 billion) over eight years"],
          ["Special budget passed (May 2026)", "NT$780 billion (US$24.8 billion), through 2033"],
          ["Drone plan (August 2026)", "Legislature's version, capped at NT$240 billion over six years"],
          ["Lai's goal", "Defence spending of 5% of GDP by 2030"]
        ] },
        { type: "section", head: "Why the fight", md:
          "The government says Taiwan needs large numbers of cheap drones, missiles and uncrewed boats to make an invasion too costly, a 'porcupine' strategy that US officials support. The opposition says it backs defence but objects to vague spending, questions whether domestic drone makers can deliver, and prefers proven US weapons, which also strengthen ties with Washington." },
        { type: "section", head: "Grey-zone pressure", md:
          "Beyond the big exercises, Taiwan faces constant 'grey-zone' pressure short of war: coastguard patrols around Kinmen, balloons, cyberattacks, cutting of undersea internet cables by ships from China, and disinformation campaigns, according to Taiwanese officials. Beijing denies deliberate sabotage." },
        { type: "compare", head: "Two views of the budget cuts",
          left: { head: "The government", md:
            "Cutting a defence budget while China rehearses a blockade sends the worst possible signal to Beijing and to Washington." },
          right: { head: "The opposition", md:
            "The legislature approved billions for defence while insisting on oversight. Blank cheques do not make Taiwan safer." } },
        { type: "section", head: "Why it matters", md:
          "Many US officials and analysts judge that deterrence depends on Taiwan's own willingness to defend itself, and have pressed Taipei to spend more and reform its forces, including conscription, which was extended back to one year in 2024. Beijing watches both Taiwan's divisions and America's commitment." },
        { type: "section", head: "Civil defence", md:
          "Taiwan has also expanded civil-defence training, with annual 'Han Kuang' exercises that now involve cities as well as troops, and government guidance for households on what to do in a crisis, from stocking supplies to finding shelters. A private initiative trains volunteers in first aid and emergency response, and has drawn thousands of participants." },
        { type: "section", head: "What's next", md:
          "Watch for the next PLA exercises, often timed to political events such as Taiwan's elections or a president's speech, and whether the legislature and government can agree on the 2027 defence budget." }
      ],
      takeaways: [
        "China's 'Justice Mission 2025' drills in December simulated a blockade of Taiwan.",
        "Lai's special defence budget was cut by nearly 40% by the legislature in May 2026.",
        "The government and opposition fought over drone funding, with the legislature passing its own plan in August."
      ],
      check: { q: "What did the Legislative Yuan do to Lai's special defence budget in May 2026?",
        choices: ["Passed it in full", "Cut it by nearly 40%", "Rejected it entirely"], answer: 1,
        explain: "It passed a reduced NT$780 billion version, down from about NT$1.25 trillion, focused on US arms purchases." },
      sources: [
        { title: "Taiwan Passes Special Defense Budget to Better Deter China", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-05-08/taiwan-passes-special-defense-budget-to-better-deter-china", date: "2026-05-08" },
        { title: "As Taiwan's Drone Budget Debate Drags on, Time Is Running out", publisher: "The Diplomat", url: "https://thediplomat.com/2026/08/as-taiwans-drone-budget-debate-drags-on-time-is-running-out/", date: "2026-08" },
        { title: "The PLA's 'Justice Mission-2025' Exercise Around Taiwan", publisher: "Global Taiwan Institute", url: "https://globaltaiwan.org/2026/01/pla-justice-mission-2025/", date: "2026-01" },
        { title: "Lai unveils plan to budget US$40 billion to bolster Taiwan's defense", publisher: "CNA via GlobalSecurity", url: "https://www.globalsecurity.org/wmd/library/news/taiwan/2025/taiwan-251126-cna03.htm", date: "2025-11-26" }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "tw-8", kind: "now", asOf: "2026-09-29",
      title: "Where things stand",
      dek: "Local elections in November, a presidential race in 2028, and a superpower summit that talked about Taiwan without it.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/tw/tw-8-hero.webp",
          alt: "Illustration of Taipei's skyline at dusk with a very tall segmented tower rising above the city and green mountains behind.",
          caption: "Taipei, capital of a democracy of 23 million.",
          credit: "AI illustration — not a photograph",
          prompt: "A city skyline at dusk dominated by a very tall segmented skyscraper resembling stacked pagoda sections, green forested mountains behind, soft pink and blue sky, lights coming on across the city, calm and modern, no legible text." },
        { type: "section", head: "The state of play", md:
          "- **Politics:** a DPP president and a KMT–TPP legislature in constant conflict.\n" +
          "- **Defence:** special budgets passed but cut; drone plan passed in the legislature's version.\n" +
          "- **Economy:** booming on AI chip and server exports; a 15% US tariff under the January deal.\n" +
          "- **China:** regular military drills; no dialogue with Lai's government.\n" +
          "- **United States:** Trump and Xi discussed Taiwan in September; the US says its policy is unchanged." },
        { type: "section", head: "The Trump–Xi summit", md:
          "At their White House summit on 24 September 2026, Xi Jinping urged Trump to 'oppose' Taiwan independence, stronger wording than Washington's usual line that it 'does not support' it. Trump did not publicly change US policy, and US officials said Taiwan came up only briefly. Taipei watches every such meeting anxiously for signs that its interests could be traded away." },
        { type: "section", head: "The November local elections", md:
          "On 28 November 2026 Taiwanese voters elect mayors and county magistrates in 22 cities and counties, as well as councils and village chiefs. The KMT and TPP have agreed to cooperate on candidates. The KMT currently holds most of these posts, including Taipei, so the question is whether the DPP can recover ground after the recall defeat, or whether the opposition's momentum carries into the 2028 presidential race." },
        { type: "section", head: "What voters want", md:
          "Surveys suggest Taiwanese voters care most about the economy, housing, wages and energy, alongside security. Most want peace and the status quo, trust neither Beijing's promises nor unlimited US support, and are frustrated by the constant partisan fighting in the legislature." },
        { type: "section", head: "Friends abroad", md:
          "Taiwan has lost diplomatic allies to Beijing steadily, but its unofficial ties have deepened: with Japan, whose prime minister spoke up for it, with European parliaments, and with the United States, whose arms sales continue. Its membership of international bodies such as the World Health Organization remains blocked by China, which insists Taiwan can take part only as part of China." },
        { type: "section", head: "The 2028 race", md:
          "Lai is expected to seek re-election in January 2028. The KMT and TPP split the vote in 2024, which helped him win with 40%; their cooperation agreement could change that." },
        { type: "section", head: "Three scenarios", md:
          "- **Opposition momentum.** The KMT and TPP do well in November and head into 2028 as favourites, promising dialogue with Beijing.\n" +
          "- **DPP recovery.** Strong growth and public anger at budget cuts help Lai's party, strengthening his hand for re-election.\n" +
          "- **Escalation.** A major Chinese exercise, blockade or crisis at sea overshadows domestic politics." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **10 October:** National Day and Lai's speech, often followed by Chinese drills\n" +
          "- **28 November 2026:** local elections\n" +
          "- **Ongoing:** US arms deliveries and chip tariffs\n" +
          "- **January 2028:** presidential and legislative elections" },
        { type: "section", head: "Connections", md:
          "Taiwan's story runs through [[unit:cn]] (the claim and the pressure), [[unit:us]] (arms, chips and the summit), [[unit:jp]] (the neighbour whose prime minister spoke up), [[unit:kr]] (a chip rival) and [[unit:au]] (a partner in regional deterrence)." }
      ],
      takeaways: [
        "Taiwan votes in local elections on 28 November 2026; the presidential race follows in January 2028.",
        "Xi pressed Trump to 'oppose' Taiwan independence in September; the US says its policy is unchanged.",
        "Chinese drills and domestic budget fights will shape Taiwan's deterrence."
      ],
      check: { q: "What did Xi Jinping urge Trump to do at their September 2026 summit?",
        choices: ["Recognise Taiwan", "'Oppose' Taiwan independence", "Leave the Taiwan Strait"], answer: 1,
        explain: "Xi asked the US to 'oppose' Taiwan independence, stronger than Washington's usual position that it 'does not support' it." },
      sources: [
        { title: "Trump-Xi summit: Four key takeaways from the Washington, DC, meeting", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/9/24/trump-xi-summit-four-key-takeaways-from-the-washington-dc-meeting", date: "2026-09-24" },
        { title: "After U.S.-China summit, Trump says Xi 'understands' his position on Taiwan", publisher: "The Japan Times", url: "https://www.japantimes.co.jp/news/2026/09/27/asia-pacific/politics/trump-china-xi-taiwan-understands/", date: "2026-09-27" },
        { title: "2026 Taiwanese local elections", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_Taiwanese_local_elections", date: "2026-09" },
        { title: "A Look Ahead to Taiwan's 2026 Local Elections", publisher: "The National Bureau of Asian Research", url: "https://www.nbr.org/publication/a-look-ahead-to-taiwans-2026-local-elections/", date: "2026" }
      ]
    }
  ]
});
