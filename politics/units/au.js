/* ============================================================
   Unit 23 — Australia 🇦🇺
   Research note and sources: tools/research/au.md
   Current as of 29 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("au", {
  id: "au",
  asOf: "2026-09-29",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "au-1", kind: "snapshot", asOf: "2026-09-29",
      title: "Australia in brief",
      dek: "A US ally buying nuclear submarines, dependent on trade with China, and facing a populist surge that has upended its politics.",
      blocks: [
        { type: "map", src: "maps/au.svg",
          alt: "Locator map of Oceania with Australia highlighted, including Tasmania to the south, with Indonesia and Papua New Guinea to the north and New Zealand to the south-east, and a small globe showing its place in the world.",
          caption: "Australia is a continent-sized country of about 27 million people, most of them living along its eastern and south-eastern coasts.",
          credit: "Map: Political Academy, from Natural Earth data (public domain)" },
        { type: "facts", head: "At a glance", rows: [
          ["Capital", "Canberra (largest cities: Sydney and Melbourne)"],
          ["People", "About 27.5 million; nearly a third born overseas"],
          ["System", "Federal parliamentary democracy and constitutional monarchy"],
          ["Prime minister", "Anthony Albanese (Labor), since May 2022"],
          ["Parliament", "Labor holds 94 of 150 lower-house seats"],
          ["Head of state", "King Charles III, represented by the governor-general"],
          ["Biggest trading partner", "China"]
        ] },
        { type: "section", head: "Why it's in the top 30", md:
          "Australia is a middle power with outsized weight in the Indo-Pacific. It is one of [[unit:us|America's]] closest allies and, through the [[AUKUS]] pact with the US and [[unit:gb|the UK]], is acquiring nuclear-powered submarines. It is the world's largest exporter of iron ore and a major exporter of coal, gas and critical minerals, and [[unit:cn|China]] buys a large share of them. It is a leading power in the Pacific islands, where China is competing for influence.\n\n" +
          "Its politics also matter as a bellwether: a stable, wealthy democracy with compulsory voting where a populist party has suddenly overtaken both main parties in the polls." },
        { type: "section", head: "Who holds power", md:
          "Anthony Albanese, leader of the centre-left Labor Party, has been prime minister since 2022. In May 2025 he won a landslide, taking 94 of 150 seats in the House of Representatives, while the opposition leader lost his own seat. The conservative Liberal–National Coalition has since changed leaders twice." },
        { type: "section", head: "The mood in 2026", md:
          "The mood has soured since the election. The terrorist attack at Bondi Beach in December 2025, which killed 15 people at a Hanukkah celebration, shocked the country. Housing costs and immigration have become central issues. Pauline Hanson's One Nation, long a fringe party, won a federal by-election in May 2026 and has led several polls on first-preference votes since the winter. Labor still leads comfortably on the two-party-preferred measure that decides elections." },
        { type: "section", head: "What Australia wants", md:
          "Albanese's government wants to keep the US alliance strong and AUKUS on track, stabilise trade with China, lead in the Pacific, and turn Australia into a 'renewable energy superpower' and supplier of critical minerals. At home, it promises more housing, cheaper childcare and tougher laws on hate and guns after Bondi." },
        { type: "section", head: "Land and people", md:
          "Australia is almost as large as the continental United States but has less than a tenth of its population. The interior is mostly desert and semi-arid land, so about nine in ten people live in cities, above all Sydney, Melbourne, Brisbane, Perth and Adelaide. Aboriginal and Torres Strait Islander peoples make up about 4% of the population. The most common countries of birth after Australia are England, India, China and New Zealand, and over a fifth of households speak a language other than English at home. That diversity shapes its politics: immigration levels, housing and relations with Asia are everyday issues, not distant foreign policy." },
        { type: "callout", tone: "why", md:
          "Australia sits on the front line of the US–China rivalry, both as an ally and as a trading partner, and its political shake-up shows how populism is spreading even in countries with strong economies and stable institutions." }
      ],
      takeaways: [
        "Australia is a close US ally acquiring nuclear-powered submarines under AUKUS, while China is its biggest trading partner.",
        "Anthony Albanese's Labor won 94 of 150 seats in May 2025.",
        "Since then One Nation has surged, leading several polls on first-preference votes in 2026."
      ],
      check: { q: "How many lower-house seats did Labor win in May 2025?",
        choices: ["76", "94", "120"], answer: 1,
        explain: "Labor won 94 of the 150 seats in the House of Representatives, a landslide." },
      sources: [
        { title: "Political earthquake: Australia's elections", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/articles/political-earthquake-australias-elections", date: "2025" },
        { title: "One Nation scores historic win in Farrer by-election", publisher: "ABC News (Australia)", url: "https://www.abc.net.au/news/2026-05-09/farrer-sat-night-results/106656856", date: "2026-05-09" },
        { title: "Newspoll: Labor 27, One Nation 30, Coalition 19", publisher: "The Poll Bludger", url: "https://www.pollbludger.net/2026/09/20/newspoll-labor-27-one-nation-30-coalition-19-open-thread/", date: "2026-09-20" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "au-2", kind: "power", asOf: "2026-09-29",
      title: "Compulsory, preferential and federal",
      dek: "Everyone must vote, voters rank candidates, and power is shared between Canberra and six states.",
      blocks: [
        { type: "diagram", src: "img/au/au-2-power.svg",
          alt: "Diagram of power in Australia. Voting is compulsory and preferential. The 150-seat House of Representatives, where Labor won 94 seats in 2025, forms the government under Prime Minister Anthony Albanese, leader of the Labor Party, whose party can replace its leader. It is checked by the 76-seat Senate, with 12 senators per state and 2 per territory, where the Greens and crossbench hold the balance. It shares power with six states, which run hospitals, schools and police; the High Court settles disputes. The monarch, King Charles III, is represented by the governor-general.",
          caption: "A Westminster-style parliament with an American-style Senate and federal states.",
          credit: "Diagram: Political Academy" },
        { type: "section", head: "Compulsory voting", md:
          "Since 1924 voting in federal elections has been compulsory for adult citizens, and those who don't vote face a small fine. Turnout is usually around 90%. Elections are held on Saturdays, and polling stations famously sell 'democracy sausages' on the barbecue. Supporters say compulsory voting keeps politics focused on the middle ground; critics say it forces uninterested people to vote." },
        { type: "section", head: "Preferential voting", md:
          "For the House of Representatives, voters rank the candidates in each of 150 districts in order of preference. If no one wins a majority of first preferences, the last-placed candidate is eliminated and their votes are passed to the next preference, until someone passes 50%. That is why, under [[preferential voting]], pollsters report a 'two-party-preferred' figure, and why a party like One Nation can top first preferences but still trail once preferences flow." },
        { type: "section", head: "Parliament and the Senate", md:
          "The House of Representatives is elected at least every three years, and the party or coalition with a majority forms the government. The Senate, with 12 senators from each state and 2 from each territory, is elected by proportional representation and can block legislation. Labor does not control it alone and needs the Greens or independent senators to pass laws. Parties can, and often do, replace their leaders between elections: Australia had five prime ministers between 2010 and 2018." },
        { type: "section", head: "Federation and the Crown", md:
          "Australia is a federation of six states and two territories. The states run hospitals, schools, police and transport, largely with money raised by the federal government, which often causes friction. The High Court interprets the constitution. The King is head of state, represented by a governor-general who acts on the prime minister's advice; in 1975 a governor-general dismissed an elected prime minister, Gough Whitlam, a crisis still debated today." },
        { type: "section", head: "Deadlock and double dissolution", md:
          "When the Senate twice rejects a bill passed by the House, the constitution lets the government ask the governor-general to dissolve both houses at once and hold a full election, a 'double dissolution'. If the deadlock survives that election, a joint sitting of both houses can pass the bill. The device is rare but powerful: it was used in 1975, 1983, 1987 and 2016, and it gives governments leverage over an obstructive Senate." },
        { type: "section", head: "How leaders fall", md:
          "Prime ministers are chosen by their parties' MPs, not directly by voters, so a party room can remove one in a 'spill'. After the turmoil of 2010–13, Labor changed its rules so that removing a sitting Labor prime minister needs the support of 75% of its MPs, and its leader is now chosen by MPs and party members together. The Liberals later adopted their own protections. Those rules are one reason Albanese, unlike his recent predecessors, has faced little talk of a challenge." },
        { type: "compare", head: "Two views of the system",
          left: { head: "Its defenders", md:
            "Compulsory and preferential voting produce governments with broad support and protect against extremes, and the Senate is a real check on power." },
          right: { head: "Its critics", md:
            "Parties change leaders too easily, the federation blurs responsibility, and the monarchy is an anachronism for a multicultural country." } }
      ],
      takeaways: [
        "Voting is compulsory, and voters rank candidates in order of preference.",
        "The Senate, elected proportionally, can block laws; Labor needs the Greens or independents there.",
        "Australia is a federation of six states, with the King as head of state."
      ],
      check: { q: "What does 'two-party-preferred' measure?",
        choices: ["First-preference votes only", "Support for the two main sides after preferences are distributed", "The Senate result"], answer: 1,
        explain: "Because voters rank candidates, results are decided after preferences flow; the two-party-preferred figure shows that final contest." },
      sources: [
        { title: "Australian Electoral Commission: Preferential voting", publisher: "Australian Electoral Commission", url: "https://www.aec.gov.au/learn/preferential-voting.htm", date: "n.d." },
        { title: "Australia profile", publisher: "BBC News", url: "https://www.bbc.com/news/world-asia-15674351", date: "n.d." },
        { title: "Australia", publisher: "Britannica", url: "https://www.britannica.com/place/Australia", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 9 */
    {
      id: "au-9", kind: "founding", asOf: "2026-09-29",
      title: "Federation, 1901",
      dek: "Six British colonies voted themselves into one country on 1 January 1901. The deal they struck, and the questions it left out, still shape Australian politics.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/au/au-9-hero.webp",
          alt: "Illustration of a large crowd in Edwardian clothing seen from behind in a Sydney park in 1901, facing a white domed pavilion decorated for a ceremony.",
          caption: "The Commonwealth was proclaimed in Sydney's Centennial Park on 1 January 1901.",
          credit: "AI illustration — not a photograph",
          prompt: "A large crowd in Edwardian clothing with hats and parasols seen from behind in a green Sydney park in 1901, facing an ornate white domed pavilion decorated with garlands for a ceremony, summer sunshine, eucalyptus trees, festive and historic, no faces, no flags, no legible text." },
        { type: "timeline", head: "The road to federation", items: [
          ["1788", "British First Fleet arrives at Sydney Cove"],
          ["1889", "Henry Parkes calls for federation at Tenterfield"],
          ["1891, 1897–98", "Constitutional conventions draft a constitution"],
          ["1898–1900", "Voters in each colony approve it in referendums"],
          ["1900", "British parliament passes the Constitution Act"],
          ["1 Jan 1901", "Commonwealth of Australia proclaimed"],
          ["1927", "Parliament moves to Canberra"],
          ["1986", "Australia Act ends remaining British legal links"]
        ] },
        { type: "section", head: "Six colonies", md:
          "After 1788 Britain founded separate colonies around the continent: New South Wales, Tasmania, Western Australia, South Australia, Victoria and Queensland. Each had its own government, tariffs, defence and even railway gauges. By the 1880s many colonists felt Australian as well as British, and worried about foreign powers in the Pacific, the costs of trade barriers between colonies and, openly, about non-white immigration." },
        { type: "section", head: "A constitution by the people", md:
          "Henry Parkes, premier of New South Wales and the 'father of federation', launched the campaign in 1889. Delegates from the colonies drafted a constitution at conventions in the 1890s, borrowing from Britain's parliamentary system and the United States' federal model, with a Senate giving each state equal representation. Unusually for the time, it was put to voters in referendums in each colony between 1898 and 1900, after changes to win over New South Wales and Queensland, including a promise of a new capital between Sydney and Melbourne." },
        { type: "section", head: "Birth of a nation", md:
          "The British parliament passed the constitution into law in 1900, and the Commonwealth of Australia was proclaimed on 1 January 1901, with Edmund Barton as the first prime minister. Parliament sat in Melbourne until Canberra was ready in 1927. The King remained head of state, represented by a governor-general, and Britain kept control of foreign policy for decades. Full legal independence came in stages: the Statute of Westminster in 1942 and the Australia Act of 1986, which ended appeals to London's courts." },
        { type: "section", head: "Who was left out", md:
          "Aboriginal and Torres Strait Islander peoples had no say in federation. The constitution excluded 'aboriginal natives' from being counted in the population and barred the Commonwealth from making laws for them; both clauses were removed in the 1967 referendum, approved by 90.8% of voters. One of the new parliament's first acts, in 1901, restricted immigration through a dictation test, the basis of the 'White Australia' policy (briefing 3). Women won the federal vote in 1902, among the first in the world, though Aboriginal people in several states were denied it until 1962." },
        { type: "compare", head: "Two views of the founding",
          left: { head: "A democratic achievement", md:
            "Australia was founded peacefully, by votes rather than war, with a stable constitution that has lasted more than 125 years." },
          right: { head: "An incomplete founding", md:
            "It was built on the dispossession of First Nations peoples and a racial immigration policy, and has never been reckoned with in the constitution." } },
        { type: "section", head: "Why it still matters", md:
          "The federal bargain of 1901 explains why the states still run hospitals, schools and police, and why the Senate gives Tasmania as many senators as New South Wales (briefing 2). The constitution is very hard to change: only 8 of 45 referendums have passed, the latest defeats being the republic in 1999 and the Indigenous Voice in 2023. And the national day is not 1 January but 26 January, the anniversary of the First Fleet, which many Indigenous Australians mark as Invasion Day." }
      ],
      takeaways: [
        "Six British colonies united as the Commonwealth of Australia on 1 January 1901, after referendums approved a constitution.",
        "The constitution combined British parliamentary government with a US-style federal Senate.",
        "Indigenous peoples were excluded from the founding; the 1967 referendum removed the discriminatory clauses."
      ],
      check: { q: "How was Australia's constitution approved?",
        choices: ["By the British parliament alone", "By referendums in each colony, then an act of the British parliament", "By a war of independence"], answer: 1,
        explain: "Voters approved it in colonial referendums between 1898 and 1900, and Westminster then passed it into law." },
      sources: [
        { title: "The Federation of Australia", publisher: "Parliamentary Education Office", url: "https://peo.gov.au/understand-our-parliament/history-of-parliament/federation/the-federation-of-australia", date: "n.d." },
        { title: "Federation referendum", publisher: "Parliamentary Education Office", url: "https://peo.gov.au/understand-our-parliament/history-of-parliament/history-milestones/australian-parliament-history-timeline/events/federation-referendum", date: "n.d." },
        { title: "Federation Fact Sheet 2: First Commonwealth Parliament 1901", publisher: "Australian Electoral Commission", url: "https://www.aec.gov.au/about_aec/Publications/Fact_Sheets/factsheet2.htm", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "au-3", kind: "history", asOf: "2026-09-29",
      title: "From federation to the Voice",
      dek: "A British settler colony that became a multicultural democracy, but has twice said no to constitutional change.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/au/au-3-hero.webp",
          alt: "Illustration of a vast red outback landscape at sunset with a huge rock formation on the horizon and spinifex grass in the foreground.",
          caption: "Aboriginal and Torres Strait Islander peoples have lived in Australia for at least 65,000 years.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast red outback landscape at sunset, a huge monolithic rock formation glowing on the horizon, spinifex grass and desert oaks in the foreground, deep orange and violet sky, ancient and timeless, no people, no legible text." },
        { type: "timeline", head: "The short version", items: [
          ["1788", "British colonisation begins in Sydney"],
          ["1901", "Federation of the colonies; White Australia policy"],
          ["1967", "Referendum to count Aboriginal people in the census"],
          ["1973", "White Australia policy finally ended"],
          ["1999", "Republic referendum fails"],
          ["2023", "Voice to Parliament referendum fails"],
          ["2025", "Labor landslide"]
        ] },
        { type: "section", head: "1. First Nations and colonisation", md:
          "Aboriginal and Torres Strait Islander peoples have lived in Australia for at least 65,000 years. British colonisation from 1788 brought dispossession, violence and disease; the Indigenous population fell drastically. For much of the 20th century, governments removed Aboriginal children from their families, the 'Stolen Generations', for which the prime minister formally apologised in 2008." },
        { type: "section", head: "2. Federation and White Australia", md:
          "In 1901 six British colonies united as the Commonwealth of Australia. One of the new parliament's first laws restricted non-white immigration, the start of the 'White Australia' policy. Australia fought alongside Britain in both world wars; the fall of Singapore in 1942 turned it toward the United States, with which it signed the ANZUS alliance in 1951." },
        { type: "section", head: "3. A multicultural nation", md:
          "After 1945 Australia took in millions of migrants, first from Britain and Europe, then, after the White Australia policy was dismantled by 1973, from Asia and beyond. Today nearly a third of residents were born overseas. Economic reforms in the 1980s and 1990s, and a long mining boom fuelled by China's growth, delivered almost three decades without a recession." },
        { type: "section", head: "4. Mabo and Port Arthur", md:
          "Two events of the 1990s still frame debates today. In 1992 the High Court's Mabo decision rejected the idea that Australia had belonged to no one, 'terra nullius', when the British arrived, and recognised that Indigenous land rights could survive colonisation. Parliament followed with the Native Title Act in 1993. In 1996 a gunman killed 35 people at Port Arthur in Tasmania. Within weeks the new conservative prime minister, John Howard, persuaded the states to ban most semi-automatic firearms and buy back hundreds of thousands of guns, a response still held up worldwide as a model, and invoked again after Bondi." },
        { type: "section", head: "5. Two referendums", md:
          "Changing Australia's constitution requires a national referendum passed by a majority of voters and a majority of states, and most proposals fail. In 1999 voters rejected becoming a republic, 55% to 45%, partly because republicans were divided over how the president would be chosen. In October 2023, 60% voted against creating an Indigenous 'Voice to Parliament', an advisory body, after a bitter campaign." },
        { type: "section", head: "6. Leadership churn and Labor's return", md:
          "Between 2010 and 2018 both major parties repeatedly toppled their own prime ministers. Scott Morrison's Liberal-led government lost in 2022 to Albanese, amid anger over climate policy and the treatment of women in politics. In May 2025 Albanese won a second term with a larger majority, as the Liberal leader Peter Dutton lost his own seat." }
      ],
      takeaways: [
        "Indigenous Australians have lived on the continent for at least 65,000 years; British colonisation began in 1788.",
        "The 1901 federation adopted the White Australia policy, ended by 1973; the country is now deeply multicultural.",
        "Voters rejected a republic in 1999 and an Indigenous Voice to Parliament in 2023."
      ],
      check: { q: "What did Australians reject in the October 2023 referendum?",
        choices: ["Becoming a republic", "An Indigenous 'Voice to Parliament'", "Leaving the Commonwealth"], answer: 1,
        explain: "About 60% voted against creating an Indigenous advisory body in the constitution." },
      sources: [
        { title: "Australia profile — Timeline", publisher: "BBC News", url: "https://www.bbc.com/news/world-asia-15675556", date: "n.d." },
        { title: "Australia", publisher: "Britannica", url: "https://www.britannica.com/place/Australia", date: "n.d." },
        { title: "2025 Australian federal election debates and forums", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2025_Australian_federal_election_debates_and_forums", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "au-10", kind: "past", asOf: "2026-09-29",
      title: "The Stolen Generations",
      dek: "For six decades Australian governments took Aboriginal and Torres Strait Islander children from their families. The nation apologised in 2008; the consequences are still felt.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/au/au-10-hero.webp",
          alt: "Illustration of a red dirt road across the Australian outback leading to a distant, lonely brick building, with an empty child's shoe in the foreground.",
          caption: "Many children were sent to institutions or missions far from their communities.",
          credit: "AI illustration — not a photograph",
          prompt: "A long red dirt road across the flat Australian outback leading to a distant, lonely old brick institutional building, spinifex and a single gum tree, an empty small child's shoe on the road in the foreground, vast blue sky, melancholy, no people, no legible text." },
        { type: "timeline", head: "Removal and recognition", items: [
          ["1910–1970", "Peak period of forced removals"],
          ["1937", "Governments endorse 'assimilation' of Aboriginal people"],
          ["1995", "National inquiry begins"],
          ["26 May 1997", "Bringing Them Home report tabled"],
          ["1998", "First National Sorry Day"],
          ["13 Feb 2008", "Prime Minister Kevin Rudd's National Apology"]
        ] },
        { type: "section", head: "What happened", md:
          "From the late nineteenth century until the 1970s, state and federal authorities, churches and welfare bodies removed Aboriginal and Torres Strait Islander children from their families, often by force and without court orders. The aim was to 'absorb' or 'assimilate' them into white society, especially children of mixed descent. They were placed in institutions, missions, foster homes or as domestic servants and labourers, frequently given new names, forbidden to speak their languages and told their parents did not want them." },
        { type: "section", head: "Bringing Them Home", md:
          "A national inquiry by the Human Rights and Equal Opportunity Commission, which heard from hundreds of witnesses, reported in May 1997. Bringing Them Home concluded that between one in ten and one in three Indigenous children were forcibly removed between 1910 and 1970, and that not one Indigenous family had escaped the effects. Many children suffered physical and sexual abuse. The report found that the policy met the definition of genocide in international law, a conclusion that was fiercely disputed." },
        { type: "section", head: "Sorry", md:
          "The report asked for an apology. Prime Minister John Howard expressed personal regret but refused a formal apology, arguing that the present generation should not be held responsible for the past. Hundreds of thousands of people walked across Sydney Harbour Bridge in 2000 in support of reconciliation. On 13 February 2008, as his government's first act in parliament, Kevin Rudd apologised to the Stolen Generations, their families and communities, 'for the pain, suffering and hurt'. The Opposition supported the motion." },
        { type: "section", head: "Compensation", md:
          "The apology did not include a national compensation scheme, a deliberate choice at the time. Some states created their own. In 2021 the federal government launched a redress scheme for survivors removed in the territories it ran, the Northern Territory, the ACT and Jervis Bay, paying A$75,000 each plus a healing payment. Survivors elsewhere depend on state schemes or the courts, and many have died waiting." },
        { type: "compare", head: "Two views of the history",
          left: { head: "Most historians and Indigenous organisations", md:
            "Removals were a deliberate policy to erase Aboriginal identity, causing trauma that passes from generation to generation." },
          right: { head: "Conservative critics", md:
            "Many removals were motivated by concern for children's welfare, and the word 'genocide' distorts the history." } },
        { type: "section", head: "Why it still matters", md:
          "The trauma of removal is linked to higher rates of poor health, imprisonment and family breakdown among descendants. Today Indigenous children are far more likely than other children to be placed in out-of-home care, which leads activists to warn of a new stolen generation. The history also shaped the 2023 referendum on an Indigenous Voice to Parliament, whose defeat many Indigenous leaders saw as a setback for reconciliation (briefing 3)." }
      ],
      takeaways: [
        "From about 1910 to 1970, between one in ten and one in three Indigenous children were forcibly removed from their families.",
        "The 1997 Bringing Them Home report documented the policy and called for an apology.",
        "Kevin Rudd delivered the National Apology on 13 February 2008."
      ],
      check: { q: "What was the 1997 Bringing Them Home report about?",
        choices: ["Soldiers returning from Vietnam", "The forced removal of Indigenous children from their families", "Refugees arriving by boat"], answer: 1,
        explain: "The national inquiry documented the Stolen Generations and recommended an apology." },
      sources: [
        { title: "1997: Bringing Them Home report", publisher: "National Museum of Australia", url: "https://digital-classroom.nma.gov.au/learning-modules/rights-and-freedoms-defining-moments-1945-present/121-1997-bringing-them-home-report-stolen-generations", date: "n.d." },
        { title: "National Apology", publisher: "National Museum of Australia", url: "https://www.nma.gov.au/defining-moments/resources/national-apology", date: "n.d." },
        { title: "Bringing Them Home: news stories", publisher: "Australian Human Rights Commission", url: "https://humanrights.gov.au/bringing-them-home/media/news-stories.html", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "au-11", kind: "past", asOf: "2026-09-29",
      title: "Anzac: war and the nation",
      dek: "A failed landing at Gallipoli in 1915 became Australia's founding legend. The wars since have tied the country first to Britain and then to America.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/au/au-11-hero.webp",
          alt: "Illustration of a steep scrubby hillside above a narrow beach at dawn, with small wooden boats approaching over calm water.",
          caption: "Australian and New Zealand troops landed at Gallipoli at dawn on 25 April 1915.",
          credit: "AI illustration — not a photograph",
          prompt: "A steep scrub-covered hillside rising above a narrow pebbly beach at dawn on the Gallipoli peninsula, a few small wooden rowing boats approaching over calm grey-blue water, soft pink sky, solemn and historical, no people visible up close, no weapons, no legible text." },
        { type: "facts", head: "The First World War", rows: [
          ["Enlisted", "About 417,000, all volunteers"],
          ["Killed", "More than 61,500"],
          ["Killed at Gallipoli", "8,709"],
          ["Population in 1914", "Under 5 million"],
          ["Conscription", "Rejected in referendums in 1916 and 1917"]
        ] },
        { type: "section", head: "Gallipoli", md:
          "When Britain went to war in 1914, Australia went too, without debate. On 25 April 1915 the Australian and New Zealand Army Corps (Anzac) landed on the Gallipoli peninsula in Ottoman Turkey, part of a British plan to knock the Ottomans out of the war. The campaign was a failure; the troops were evacuated in December after eight months. But the courage, endurance and humour attributed to the 'diggers' became a national legend, and 25 April, Anzac Day, grew into the most important day in Australia's calendar." },
        { type: "section", head: "A divided home front", md:
          "The war's losses on the Western Front were far greater than at Gallipoli. Prime Minister Billy Hughes twice asked voters to approve conscription for overseas service, in 1916 and 1917, and was twice narrowly refused, after bitter campaigns that split the Labor Party and pitted Irish Catholics against Protestants. Australia remained one of the few combatants whose army was made up only of volunteers." },
        { type: "section", head: "Turning to America", md:
          "The Second World War changed Australia's alliances. When Singapore fell to Japan in February 1942 and Japanese aircraft bombed Darwin, Britain could not defend Australia. Prime Minister John Curtin had already written that Australia 'looks to America', and US forces under General MacArthur made Australia their base. Australian troops halted the Japanese on the Kokoda Track in New Guinea. In 1951 the ANZUS treaty with the United States and New Zealand became the foundation of Australian security." },
        { type: "section", head: "Vietnam to Afghanistan", md:
          "Australia fought alongside the United States in Korea, Vietnam, the Gulf, Iraq and Afghanistan. In Vietnam, conscripts chosen by a birthday ballot were sent from 1966, 521 Australians died, and huge protests followed. In Afghanistan, 41 Australians died. In 2020 the Brereton report found credible information that special forces had unlawfully killed 39 Afghan prisoners and civilians; in 2023 a court found, on the balance of probabilities, that the decorated soldier Ben Roberts-Smith had been involved in murders, in a defamation case he brought and lost." },
        { type: "compare", head: "Two views of the Anzac tradition",
          left: { head: "Celebrants", md:
            "Anzac honours sacrifice and the values of mateship and courage that bind Australians together across generations." },
          right: { head: "Critics", md:
            "The legend glorifies wars fought for others, overshadows the frontier wars against Aboriginal people, and is used to discourage questioning." } },
        { type: "section", head: "Why it still matters", md:
          "Anzac Day dawn services draw huge crowds, and the Australian War Memorial in Canberra is a national shrine. The instinct to fight alongside a great ally runs from Gallipoli to AUKUS, the submarine pact with the US and Britain (briefing 7). The debate over whether Australia's wars serve its own interests, or those of its allies, returns whenever Washington asks for support, most recently over a possible conflict with China over Taiwan (see [[unit:tw|Taiwan]])." }
      ],
      takeaways: [
        "The failed 1915 landing at Gallipoli became the founding legend of Anzac Day.",
        "Voters twice rejected conscription in the First World War; Australia's army remained all-volunteer.",
        "After 1942 Australia turned from Britain to the United States, sealed in the 1951 ANZUS treaty."
      ],
      check: { q: "What is commemorated on 25 April, Anzac Day?",
        choices: ["Federation in 1901", "The landing at Gallipoli in 1915", "The end of the Second World War"], answer: 1,
        explain: "Anzac Day marks the landing of Australian and New Zealand troops at Gallipoli on 25 April 1915." },
      sources: [
        { title: "Conscription during the First World War, 1914–1918", publisher: "Australian War Memorial", url: "https://www.awm.gov.au/articles/encyclopedia/conscription/ww1", date: "n.d." },
        { title: "Conscription referendums", publisher: "National Museum of Australia", url: "https://digital-classroom.nma.gov.au/defining-moments/conscription-referendums", date: "n.d." },
        { title: "Australia", publisher: "1914-1918-online: International Encyclopedia of the First World War", url: "https://encyclopedia.1914-1918-online.net/article/australia/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 4 */
    {
      id: "au-4", kind: "players", asOf: "2026-09-29",
      title: "Albanese, Taylor and Hanson",
      dek: "A cautious prime minister with a huge majority, a new opposition leader squeezed from the right, and a populist veteran at the top of the polls.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/au/au-4-hero.webp",
          alt: "Illustration of Parliament House in Canberra with its grass-covered roof and tall flagpole structure, at dusk under a clear sky.",
          caption: "Parliament House in Canberra, built into a hill with a lawn on its roof.",
          credit: "AI illustration — not a photograph",
          prompt: "A modern parliament building built into a hill with a grass-covered sloping roof and a tall four-legged steel flagpole structure on top, at dusk under a clear violet sky, long reflecting pool in front, calm and civic, no flags or legible text." },
        { type: "people", head: "Five to know", items: [
          { name: "Anthony Albanese", role: "Prime minister, since May 2022",
            img: "img/au/portrait-albanese.webp", source: "Official portrait (Commonwealth of Australia, CC BY) via Wikimedia Commons; confirm the licence.",
            md: "Raised by a single mother in public housing in Sydney; a long-time Labor left-winger who has governed cautiously. Won a landslide in 2025." },
          { name: "Angus Taylor", role: "Liberal leader and opposition leader, since February 2026",
            img: "img/au/portrait-taylor.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "A former energy minister who replaced Sussan Ley in a party-room spill, and is trying to win back voters lost to One Nation and to independents." },
          { name: "Pauline Hanson", role: "One Nation leader; senator for Queensland",
            img: "img/au/portrait-hanson.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "Founded One Nation in 1997 on opposition to Asian immigration and multiculturalism; now at the peak of its support, campaigning on migration, energy and cost of living." },
          { name: "Barnaby Joyce", role: "One Nation MP",
            img: "img/au/portrait-joyce.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "A former Nationals leader and deputy prime minister who defected to One Nation in December 2025, giving it a lower-house seat." },
          { name: "Richard Marles", role: "Deputy prime minister and defence minister",
            img: "img/au/portrait-marles.webp", source: "Official portrait via Wikimedia Commons; confirm the licence.",
            md: "Runs the AUKUS submarine programme and Australia's defence build-up." }
        ] },
        { type: "section", head: "Albanese's style", md:
          "Albanese has governed as a pragmatist: cautious on tax reform, focused on cost-of-living relief, childcare, housing and energy, and eager to stabilise relations with China while keeping close to Washington. His government also passed a world-first ban on social media accounts for under-16s, which took effect in December 2025. Critics on the left say he has wasted his majority; critics on the right say he has lost control of immigration and energy costs." },
        { type: "section", head: "The Coalition's crisis", md:
          "The Liberal–National Coalition had its worst result in 2025. Sussan Ley became the first woman to lead the Liberals, but struggled as the party argued over net-zero climate targets and lost voters both to independents in wealthy cities and to One Nation in the regions. She was replaced by Angus Taylor in February 2026, then left parliament, triggering the Farrer by-election." },
        { type: "section", head: "Labor's inner circle", md:
          "Albanese's government has been notably stable. Treasurer Jim Chalmers and Foreign Minister Penny Wong, both in their posts since 2022, are among its leading figures, alongside Richard Marles at defence. Labor is organised into left and right factions that share out ministries and preselections; Albanese comes from the left, but has governed from the centre. Its caucus rules bind Labor MPs to vote together, so its huge majority passes government bills through the lower house without drama." },
        { type: "section", head: "The Nationals", md:
          "The Nationals, the junior partner in the Coalition, represent farming and regional seats. After the 2025 defeat they briefly split from the Liberals before patching up the partnership about a week later. Late in 2025 both Coalition parties abandoned the target of net-zero emissions by 2050, a sign of the pressure they feel from One Nation in the bush." },
        { type: "section", head: "The crossbench", md:
          "The Greens, who lost seats in 2025, hold the balance of power in the Senate. In the lower house, 'teal' independents, mostly women representing affluent former Liberal seats, campaign on climate and integrity. Their presence, and One Nation's rise, show how far the two-party system has fragmented." }
      ],
      takeaways: [
        "Albanese governs pragmatically with a large majority; he introduced a ban on social media for under-16s.",
        "Angus Taylor replaced Sussan Ley as Liberal leader in February 2026.",
        "Pauline Hanson's One Nation, joined by Barnaby Joyce, is at the peak of its support."
      ],
      check: { q: "Who became Liberal leader in February 2026?",
        choices: ["Peter Dutton", "Angus Taylor", "Barnaby Joyce"], answer: 1,
        explain: "Angus Taylor replaced Sussan Ley in a leadership spill; Dutton lost his seat in 2025, and Joyce joined One Nation." },
      sources: [
        { title: "2026 Liberal Party of Australia leadership spill", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_Liberal_Party_of_Australia_leadership_spill", date: "2026-02" },
        { title: "Barnaby Joyce joins One Nation, concluding defection from Nationals", publisher: "ABC News (Australia)", url: "https://www.abc.net.au/news/2025-12-08/barnaby-joyce-joins-one-nation/106114758", date: "2025-12-08" },
        { title: "Labor scoring own goals while Coalition distracted by One Nation threat", publisher: "ABC News (Australia)", url: "https://www.abc.net.au/news/2026-07-13/labor-coalition-one-nation-mid-winter-break/106907066", date: "2026-07-13" }
      ]
    },

    /* ---------------------------------------------------------- 5 */
    {
      id: "au-5", kind: "story", asOf: "2026-09-29",
      title: "The 2025 landslide",
      dek: "Labor won its biggest majority in decades, and the opposition leader lost his own seat.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/au/au-5-hero.webp",
          alt: "Illustration of a country pub at night with patrons watching a TV showing blank result bars, and a sausage sizzle outside.",
          caption: "Election night, 3 May 2025.",
          credit: "AI illustration — not a photograph",
          prompt: "Inside a country pub at night, patrons seen from behind watching a wall-mounted TV showing blank coloured result bars, beer glasses on the bar, a veranda outside with a barbecue sausage sizzle, warm and convivial, no legible text or faces." },
        { type: "section", head: "What happened", md:
          "In the federal election on 3 May 2025, Labor won 94 of the 150 seats in the House of Representatives, up from 77, its best result since the Second World War by some measures. The Liberal–National Coalition fell to around 43 seats. The Liberal leader, Peter Dutton, lost his Queensland seat of Dickson to Labor, the first opposition leader to lose his own seat at a federal election. The Greens lost seats in the lower house, including their leader's." },
        { type: "facts", head: "The results", rows: [
          ["Labor", "94 of 150 seats"],
          ["Liberal–National Coalition", "About 43 seats"],
          ["Opposition leader", "Peter Dutton lost his own seat"],
          ["Turnout", "About 90% (voting is compulsory)"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Labor campaigned on cost-of-living relief, Medicare and housing, and portrayed Dutton as a risky choice. Dutton's campaign stumbled over a plan to force public servants back to the office and a proposal to build nuclear power stations. Trump's tariffs and erratic foreign policy, early in his second term, also helped Albanese, as voters saw Dutton as closer to Trump, a comparison that hurt conservatives in Canada's election a week earlier too." },
        { type: "compare", head: "Two readings of the result",
          left: { head: "Labor", md:
            "Voters endorsed a steady, competent government focused on their everyday concerns, and rejected culture wars and Trump-style politics." },
          right: { head: "Sceptics", md:
            "Labor's first-preference vote was only around 35%; it won big because the opposition collapsed, not because voters were enthusiastic." } },
        { type: "section", head: "How the map changed", md:
          "Labor gained seats in almost every state, including in Brisbane, the outer suburbs of Melbourne and Perth, and Tasmania, areas the Coalition had counted on. The Liberals were left with almost no seats in the inner cities, which have gone to Labor, the Greens or the teal independents, most of whom held their seats. The Greens' national vote held up, but they lost three of their four lower-house seats, including their leader Adam Bandt's seat of Melbourne." },
        { type: "section", head: "The aftermath", md:
          "The defeat set off a crisis on the right. The Liberals chose Sussan Ley as their first woman leader within days. Soon afterwards the Nationals announced they would leave the Coalition, citing disagreements over policy, before reuniting with the Liberals about a week later. The Coalition then spent months arguing over whether to keep the net-zero emissions target, while Albanese used his majority to pass his agenda with the help of the Greens in the Senate." },
        { type: "section", head: "Why it matters", md:
          "The landslide gave Albanese a huge majority, but the low first-preference vote for both big parties signalled a fragmenting electorate. Within a year the Coalition would lose ground not to Labor but to One Nation, as briefing 7 explains." },
        { type: "section", head: "What's next", md:
          "The next federal election is due by 2028. The question is whether Labor can hold its gains while its opponents reorganise on the right, and whether the voters who deserted both big parties in 2025 come back or keep drifting to independents and One Nation." }
      ],
      takeaways: [
        "Labor won 94 of 150 seats on 3 May 2025.",
        "Peter Dutton became the first opposition leader to lose his own seat at a federal election.",
        "Both big parties' first-preference votes were low, a sign of fragmentation."
      ],
      check: { q: "What was unprecedented about Peter Dutton's 2025 result?",
        choices: ["He won a majority", "He was the first opposition leader to lose his own seat at a federal election", "He joined Labor"], answer: 1,
        explain: "Dutton lost Dickson to Labor, the first time a federal opposition leader has lost his own seat." },
      sources: [
        { title: "Political earthquake: Australia's elections", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/articles/political-earthquake-australias-elections", date: "2025" },
        { title: "Leader of the Opposition (Australia)", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Leader_of_the_Opposition_(Australia)", date: "2026" },
        { title: "Results of the 2025 Australian federal election in New South Wales", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Results_of_the_2025_Australian_federal_election_in_New_South_Wales", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 6 */
    {
      id: "au-6", kind: "story", asOf: "2026-09-29",
      title: "Bondi",
      dek: "On 14 December 2025 two gunmen attacked a Hanukkah celebration at Bondi Beach, killing 15. Australia responded with new gun and hate laws, and a fierce debate.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/au/au-6-hero.webp",
          alt: "Illustration of a long sandy beach at dusk with rows of small candles and flowers on the sand and people standing quietly, seen from behind.",
          caption: "Mourners gathered at Bondi Beach after the attack.",
          credit: "AI illustration — not a photograph",
          prompt: "A long sandy city beach at dusk, rows of small glowing candles and bunches of flowers laid on the sand, people seen from behind standing quietly, gentle surf, a pink and grey sky, grief and solidarity, no faces, no legible text." },
        { type: "section", head: "What happened", md:
          "On the evening of 14 December 2025, the first night of Hanukkah, two gunmen, a father and son, opened fire on about 1,000 people at a Jewish community celebration near Bondi Beach in Sydney. Fifteen people were killed and more than 40 wounded before police stopped the attack. Authorities said the gunmen were inspired by the Islamic State group and motivated by antisemitism. It was the deadliest mass shooting in Australia since the Port Arthur massacre in 1996." },
        { type: "section", head: "The response", md:
          "The country held a national day of mourning. Leaders of all states agreed with Albanese to tighten gun laws further and launch a national gun buyback in 2026, echoing the reforms after Port Arthur. Parliament passed tougher federal laws against hate speech and incitement. New South Wales passed new terrorism laws and laws restricting some protests." },
        { type: "facts", head: "The attack and its aftermath", rows: [
          ["Date", "14 December 2025, first night of Hanukkah"],
          ["Killed", "15"],
          ["Wounded", "More than 40"],
          ["Motive", "Islamic State-inspired antisemitism, according to authorities"],
          ["Response", "Tighter gun laws, a national buyback, new hate-speech laws"]
        ] },
        { type: "section", head: "Why it happened", md:
          "Antisemitic incidents had risen sharply in Australia since the Gaza war began in October 2023, including arson attacks on a synagogue and a kosher restaurant in Melbourne. Jewish community leaders had warned the government repeatedly. Investigators are examining how the attackers were radicalised and how they obtained their weapons legally." },
        { type: "compare", head: "The debate that followed",
          left: { head: "Some Jewish leaders and the opposition", md:
            "Governments ignored warnings and tolerated hate at protests for two years. Stronger action against antisemitism and extremist preaching is overdue." },
          right: { head: "Civil liberties groups and some Muslim and pro-Palestinian groups", md:
            "The attack must not be used to criminalise legitimate protest about Gaza or to stigmatise Muslims. New speech and protest laws go too far." } },
        { type: "section", head: "The Port Arthur precedent", md:
          "Australia had tackled guns before. After a gunman killed 35 people at Port Arthur in Tasmania in 1996, the conservative prime minister John Howard persuaded the states to sign the National Firearms Agreement, which banned most semi-automatic and pump-action guns and funded a buyback of about 650,000 weapons. Mass shootings became rare. Bondi raised a hard question: how gunmen obtained weapons legally under those rules. The new measures tighten licensing and limit how many guns one person can own." },
        { type: "section", head: "Hate and cohesion", md:
          "Before the attack, the government had appointed special envoys on antisemitism and on Islamophobia, reflecting tensions that had grown since the Gaza war. After Bondi, it promised stronger action on hate preaching and extremist groups, while Muslim community leaders condemned the attack and warned of reprisals against their own community." },
        { type: "section", head: "Why it matters", md:
          "Bondi was a turning point for a country that had seen itself as largely safe from mass terrorism. It intensified debates about antisemitism, immigration and social cohesion, and those debates fed the rise of One Nation in 2026." }
      ],
      takeaways: [
        "On 14 December 2025 two gunmen killed 15 people at a Hanukkah celebration at Bondi Beach.",
        "Authorities said the attackers were inspired by the Islamic State group and motivated by antisemitism.",
        "Australia tightened gun laws, launched a buyback and passed tougher hate-speech laws."
      ],
      check: { q: "What was the national response to the Bondi attack?",
        choices: ["Martial law", "Tighter gun laws, a gun buyback and new hate-speech laws", "A ban on all protests"], answer: 1,
        explain: "State and federal leaders agreed to tighten gun laws and launch a buyback, and parliament passed tougher hate-speech laws." },
      sources: [
        { title: "2025 Bondi Beach shooting", publisher: "Britannica", url: "https://www.britannica.com/event/2025-Bondi-Beach-shooting", date: "2026" },
        { title: "Australia's NSW passes tough anti-protest, gun laws after Bondi attack", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/12/24/australias-nsw-passes-tough-anti-protest-gun-laws-after-bondi-attack", date: "2025-12-24" },
        { title: "What to know about Australia's plans to tighten gun laws after Bondi attack", publisher: "The Washington Post", url: "https://www.washingtonpost.com/world/2025/12/16/australia-gun-laws-restrictions-bondi-mass-shooting/", date: "2025-12-16" },
        { title: "2026 Australia gun buyback program", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2026_Australia_gun_buyback_program", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 7 */
    {
      id: "au-7", kind: "story", asOf: "2026-09-29",
      title: "One Nation rising",
      dek: "A party founded on opposition to Asian immigration has won its first lower-house election and leads the polls on first preferences.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/au/au-7-hero.webp",
          alt: "Illustration of a rural Australian town main street with a grain silo, a pub with a wide veranda and utes parked outside, under a big sky.",
          caption: "One Nation's strongest support is in regional and outer-suburban Australia.",
          credit: "AI illustration — not a photograph",
          prompt: "The main street of a small rural Australian town, tall grain silos, an old two-storey pub with a wide iron-lace veranda, pickup trucks parked diagonally, a wide empty sky, dry golden light, quiet and weathered, no legible text or people close up." },
        { type: "section", head: "What happened", md:
          "In December 2025 the former deputy prime minister Barnaby Joyce defected from the Nationals to One Nation. On 9 May 2026 One Nation's David Farley won the Farrer by-election in rural New South Wales, triggered by Sussan Ley's resignation, with 39.5% of first preferences, a swing of 33 points, beating an independent 57.5% to 42.5% after preferences. It was One Nation's first win of a lower-house seat at the ballot box.\n\n" +
          "Through the winter One Nation overtook both main parties on first preferences in several polls. A Newspoll in September put it on 30%, Labor on 27% and the Coalition on 19%. Labor still leads on the two-party-preferred measure. In September One Nation released a plan to cut immigration by 750,000 over three years." },
        { type: "facts", head: "By the numbers", rows: [
          ["Farrer by-election (9 May 2026)", "One Nation 57.5%, independent 42.5% after preferences"],
          ["Newspoll (September 2026)", "One Nation 30, Labor 27, Coalition 19 (first preferences)"],
          ["Migration plan", "Cut of 750,000 over three years"]
        ] },
        { type: "section", head: "Why it happened", md:
          "One Nation has tapped anger over housing costs, immigration, energy prices and the net-zero climate target, particularly in regional areas. The Coalition's divisions left a vacuum on the right, and Joyce's defection gave the party a recognisable, experienced face. The Bondi attack sharpened debates about immigration and social cohesion." },
        { type: "section", head: "Who votes One Nation", md:
          "Its strongest support has long been in Queensland and in regional and outer-suburban areas, among voters without university degrees who feel left behind by the cities. Polls in 2026 suggest it has broadened that base, winning former Coalition voters, some Labor voters worried about housing and migration, and younger men in the outer suburbs. Because preferences decide seats, its vote is spread thinly: it could top the primary vote and still win relatively few seats." },
        { type: "compare", head: "Two views of the surge",
          left: { head: "Supporters", md:
            "Ordinary Australians feel ignored by both big parties on the cost of living and immigration. One Nation speaks for them." },
          right: { head: "Critics", md:
            "One Nation's policies would wreck the economy and divide a multicultural society. Albanese has called it 'dangerous', and Labor says the migration plan would cause a recession." } },
        { type: "section", head: "AUKUS under Trump", md:
          "Security questions have added to the uncertainty. In 2025 the Trump administration reviewed AUKUS, under which Australia is to buy at least three US Virginia-class nuclear submarines and then build a new class with Britain. The review, completed in December 2025, endorsed the pact while suggesting changes. At an October 2025 White House meeting, Albanese and Trump also signed a critical-minerals deal, with each side planning to invest at least $1 billion in projects within six months." },
        { type: "section", head: "What's next", md:
          "Whether One Nation's poll lead survives a real campaign, and whether the Coalition can win back its voters or will need to deal with One Nation, will shape the next election, due by 2028." }
      ],
      takeaways: [
        "One Nation won the Farrer by-election in May 2026, its first lower-house win at the ballot box.",
        "A September Newspoll put it first on 30%, ahead of Labor and the Coalition, though Labor leads after preferences.",
        "The US review of AUKUS, completed in December 2025, endorsed the submarine pact."
      ],
      check: { q: "Why can Labor lead the polls even when One Nation tops first preferences?",
        choices: ["Because of the Senate", "Because preferences from other parties flow to Labor in two-party contests", "Because the King decides"], answer: 1,
        explain: "Under preferential voting, second and later preferences decide close contests, and more voters rank Labor above One Nation." },
      sources: [
        { title: "Farrer result turns One Nation from protest to genuine electoral threat", publisher: "ABC News (Australia)", url: "https://www.abc.net.au/news/2026-05-10/farrer-byelection-one-nation-david-farley-pauline-hanson-result/106657708", date: "2026-05-10" },
        { title: "One Nation migration plan to cut students and migrant worker families", publisher: "ABC News (Australia)", url: "https://www.abc.net.au/news/2026-09-14/750k-visas-cut-under-one-nation-plan/107149702", date: "2026-09-14" },
        { title: "'Dangerous': PM takes aim at One Nation amid latest polls", publisher: "The New Daily", url: "https://www.thenewdaily.com.au/news/politics/australian-politics/2026/08/31/newspoll-one-nation", date: "2026-08-31" },
        { title: "Pentagon's AUKUS review finds areas to put nuclear submarine pact on 'strongest possible footing'", publisher: "ABC News (Australia)", url: "https://www.abc.net.au/news/2025-12-05/aukus-review-pentagon-donald-trump-administration/105588512", date: "2025-12-05" }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "au-12", kind: "spotlight", asOf: "2026-09-29",
      title: "Boats and borders",
      dek: "Since 2001 Australia has sent asylum seekers who arrive by boat to camps on Pacific islands and turned boats back at sea. It is one of the world's toughest border policies, and one of its most copied.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/au/au-12-hero.webp",
          alt: "Illustration of a grey patrol ship on a wide open ocean under a heavy sky, with a small wooden fishing boat far in the distance.",
          caption: "Under Operation Sovereign Borders, the navy turns back boats heading for Australia.",
          credit: "AI illustration — not a photograph",
          prompt: "A grey naval patrol ship on a wide open tropical ocean under a heavy overcast sky, a small old wooden fishing boat far in the distance on the horizon, long swell, tense and lonely mood, no people visible, no flags, no legible text." },
        { type: "timeline", head: "Two decades of policy", items: [
          ["Aug 2001", "Tampa affair; the 'Pacific Solution' begins"],
          ["2008", "Labor closes the offshore camps"],
          ["2012", "Offshore processing resumes as arrivals rise"],
          ["Jul 2013", "No boat arrivals to be resettled in Australia"],
          ["Sep 2013", "Operation Sovereign Borders: boat turnbacks"],
          ["2017", "Manus Island centre closes"],
          ["Nov 2023", "High Court rules indefinite detention unlawful (NZYQ)"],
          ["Aug 2025", "Deal to send some non-citizens to Nauru"]
        ] },
        { type: "section", head: "Tampa", md:
          "In August 2001 a Norwegian freighter, the MV Tampa, rescued 433 mostly Afghan asylum seekers from a sinking boat and tried to bring them to Australian territory. John Howard's government refused and sent special forces to board the ship. It then began the 'Pacific Solution': people arriving by boat would be taken to camps on Nauru and on Manus Island in Papua New Guinea. After the 9/11 attacks weeks later, Howard campaigned on the line 'we will decide who comes to this country', and won that November's election." },
        { type: "section", head: "Stop the boats", md:
          "Kevin Rudd's Labor government closed the camps in 2008. Boat arrivals rose sharply, to more than 20,000 people in 2012–13, and more than a thousand people drowned on the journey between 2008 and 2013. Labor reopened Nauru and Manus, and in July 2013 Rudd declared that no one arriving by boat would ever be settled in Australia. Tony Abbott's Coalition then launched Operation Sovereign Borders, a military-led operation that turns boats back to Indonesia or Sri Lanka. Arrivals almost stopped." },
        { type: "section", head: "The human cost", md:
          "Thousands of people were held for years on Nauru and Manus. Doctors, the UN and whistleblowers reported self-harm, child mental illness and deaths; an asylum seeker, Reza Barati, was killed in a riot on Manus in 2014. PNG's Supreme Court ruled the Manus detention illegal in 2016, and the centre closed in 2017. Many detainees were resettled in the United States under a 2016 deal, and others in New Zealand. A small number of people remain on Nauru, which Australia still pays to keep its facility open." },
        { type: "section", head: "Detention at home", md:
          "In November 2023, in the NZYQ case, the High Court ruled that non-citizens who cannot be deported cannot be detained indefinitely. About 150 people, some with serious criminal records, were released, and the Albanese government faced a political storm. It passed new laws, and in August 2025 signed a deal with Nauru to take some of those released, paying for long-term visas there." },
        { type: "compare", head: "Two views of the policy",
          left: { head: "Supporters (both major parties)", md:
            "Tough deterrence stopped the drownings and the people-smuggling trade and keeps public support for a large legal migration programme." },
          right: { head: "Critics (Greens, rights groups, the UN)", md:
            "It punishes people with valid refugee claims to deter others, breaches international obligations and costs billions." } },
        { type: "section", head: "Why it matters", md:
          "Offshore processing is now bipartisan, and 'stop the boats' remains a political touchstone; One Nation and parts of the Coalition campaign for lower migration overall (briefing 7). Governments in Europe, including Britain and Italy, have studied or copied the model (see [[unit:gb|the UK]] and [[unit:it|Italy]]). Australia still accepts refugees through its humanitarian programme, about 20,000 places a year, but only those it chooses from abroad." }
      ],
      takeaways: [
        "Since the 2001 Tampa affair, Australia has sent people arriving by boat to offshore camps on Nauru and Manus Island.",
        "Since 2013 the navy has turned boats back, and no boat arrival may settle in Australia.",
        "Both major parties support the policy; critics say it causes great harm and breaches refugee law."
      ],
      check: { q: "What was the 'Pacific Solution'?",
        choices: ["A trade deal with Pacific island states", "Sending asylum seekers who came by boat to camps on Nauru and Manus Island", "A climate agreement"], answer: 1,
        explain: "From 2001 Australia held boat arrivals in offshore camps rather than on the mainland." },
      sources: [
        { title: "Offshore processing statistics", publisher: "Refugee Council of Australia", url: "https://www.refugeecouncil.org.au/operation-sovereign-borders-offshore-detention-statistics/", date: "2025" },
        { title: "Operation Sovereign Borders Monthly Update: August 2025", publisher: "Australian Border Force", url: "https://www.abf.gov.au/newsroom-subsite/Pages/Operation-Sovereign-Borders-Monthly-Update-August-2025.aspx", date: "2025-09" },
        { title: "Multibillion-dollar strategy with no end in sight: Australia's enduring offshore processing deal with Nauru", publisher: "The Conversation", url: "https://theconversation.com/multibillion-dollar-strategy-with-no-end-in-sight-australias-enduring-offshore-processing-deal-with-nauru-168941", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 8 */
    {
      id: "au-8", kind: "now", asOf: "2026-09-29",
      title: "Where things stand",
      dek: "A secure majority in parliament, a realigned electorate, and a delicate balance between Washington and Beijing.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/au/au-8-hero.webp",
          alt: "Illustration of a submarine hull under construction in a large dry dock, with cranes and scaffolding around it and workers far below.",
          caption: "AUKUS aims to give Australia nuclear-powered submarines from the 2030s.",
          credit: "AI illustration — not a photograph",
          prompt: "The dark hull of a large submarine under construction in a huge covered dry dock, scaffolding and yellow cranes around it, tiny workers far below, bright industrial lights, scale and ambition, no flags or legible text." },
        { type: "section", head: "The state of play", md:
          "- **Government:** Labor holds 94 of 150 lower-house seats; the next election is due by 2028.\n" +
          "- **Opposition:** the Coalition under Angus Taylor trails One Nation on first preferences.\n" +
          "- **Polls:** One Nation first on primary votes; Labor ahead after preferences.\n" +
          "- **Security:** AUKUS endorsed by Washington; a critical-minerals deal with the US.\n" +
          "- **Society:** new gun and hate laws after Bondi; immigration at the centre of debate." },
        { type: "section", head: "Between the US and China", md:
          "China is Australia's biggest trading partner by far. Relations froze in 2020–23, when Beijing imposed trade sanctions on Australian wine, barley, coal and beef after Canberra called for an inquiry into the origins of COVID-19. Albanese's government negotiated them away and visited Beijing, while strengthening the US alliance and defence ties with [[unit:jp|Japan]], [[unit:in|India]] and the Philippines. Chinese warships sailing around Australia and live-fire drills near its coast in 2025 showed the limits of the thaw." },
        { type: "section", head: "The economy", md:
          "Australia's economy has avoided recession, but households have felt the squeeze of higher interest rates and housing costs, among the highest in the world relative to incomes. Mining exports remain the backbone, with growing investment in critical minerals and renewables. Net migration surged after the pandemic before the government cut student visas.\n\n" +
          "Housing is the issue that ties these together. A generation of younger Australians fears it will never own a home, and all parties promise more building. Labor has pledged 1.2 million new homes over five years and a scheme letting first-home buyers purchase with a 5% deposit, while One Nation and the Coalition blame immigration for pushing up rents and prices." },
        { type: "section", head: "The Pacific and climate", md:
          "Australia treats the Pacific islands as its backyard, and has signed a string of agreements to keep China out of their security arrangements: the Falepili Union with Tuvalu in 2023, which offers Tuvaluans a path to migrate as sea levels rise, a treaty with Nauru in 2024, and a mutual-defence treaty with Papua New Guinea in October 2025. Pacific leaders want action on climate in return. In 2025 the government set a target to cut emissions by 62–70% below 2005 levels by 2035, and agreed that Turkey would host the COP31 climate summit in 2026 while Australia leads the negotiations." },
        { type: "section", head: "Three scenarios", md:
          "- **Labor holds.** One Nation's surge fades in a campaign, and Albanese wins again.\n" +
          "- **Realignment.** One Nation replaces the Coalition as the main force on the right.\n" +
          "- **Hung parliament.** A fragmented vote leaves no majority, and minor parties and independents decide who governs." },
        { type: "callout", tone: "watch", head: "Dates to watch", md:
          "- **November 2026:** the Victorian state election\n" +
          "- **Ongoing:** Newspoll and the One Nation surge\n" +
          "- **Ongoing:** AUKUS milestones and critical-minerals projects\n" +
          "- **By 2028:** the next federal election" },
        { type: "section", head: "Connections", md:
          "Australia's story runs through [[unit:us]] and [[unit:gb]] (AUKUS), [[unit:cn]] (trade and security), [[unit:jp]] and [[unit:in]] (the [[Quad]]), [[unit:id]] (its giant northern neighbour) and [[unit:il]] (the Gaza debate after Bondi)." }
      ],
      takeaways: [
        "Albanese has a big majority, but One Nation leads first-preference polls.",
        "Australia balances its US alliance and AUKUS with trade dependence on China.",
        "The next federal election, due by 2028, could redraw the party map."
      ],
      check: { q: "Why did China impose trade sanctions on Australia in 2020?",
        choices: ["Over a whaling dispute", "After Australia called for an inquiry into COVID-19's origins", "Over AUKUS"], answer: 1,
        explain: "Beijing's sanctions on wine, barley, coal and beef followed Canberra's call for an independent inquiry into the origins of COVID-19; they were lifted by 2024." },
      sources: [
        { title: "Historic critical minerals framework signed by President Trump and Prime Minister Albanese", publisher: "Prime Minister of Australia", url: "https://www.pm.gov.au/media/historic-critical-minerals-framework-signed-president-trump-and-prime-minister-albanese", date: "2025-10-21" },
        { title: "One Nation takes the lead on primary; ALP maintains an election winning two-party preferred lead", publisher: "Roy Morgan Research", url: "https://www.roymorgan.com/findings/10353-federal-voting-intention-september-21-2026", date: "2026-09-21" },
        { title: "Where One Nation's foreign policy stands on Taiwan, foreign aid, the UN and 'more missiles'", publisher: "ABC News (Australia)", url: "https://www.abc.net.au/news/2026-06-21/one-nation-foreign-policy-revealed/106822090", date: "2026-06-21" }
      ]
    }
  ]
});
