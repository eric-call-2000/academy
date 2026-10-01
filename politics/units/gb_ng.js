/* ============================================================
   Relationship — United Kingdom & Nigeria 🇬🇧🇳🇬
   The Benin raid, Lugard's 1914 amalgamation and independence;
   British guns for the war on Biafra and the Abacha years; and
   bronzes coming home, a diaspora of 270,000 and Tinubu's 2026
   state visit. The US relationship is in us_ng.
   Research note and sources: tools/research/gb_ng.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("gb_ng", {
  id: "gb_ng",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "gb_ng-1", kind: "relation", asOf: "2026-10-01",
      title: "Lugard's creation",
      dek: "Britain looted Benin City in 1897, then in 1914 stitched two protectorates into one colony called Nigeria. It handed over in 1960 a country whose regions had little in common but the British.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_ng/gb_ng-1-hero.webp",
          alt: "Illustration of ornate cast bronze plaques and a commemorative head displayed in a dim museum gallery.",
          caption: "British troops took thousands of Benin Bronzes in 1897.",
          credit: "Illustration — not a photograph",
          prompt: "Ornate cast bronze relief plaques and a commemorative bronze head displayed in glass cases in a dim museum gallery, warm spotlights, dark walls, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Empire to independence", items: [
          ["1861", "Britain annexes Lagos"],
          ["1897", "British punitive expedition loots Benin City"],
          ["Jan 1914", "Lugard amalgamates north and south into Nigeria"],
          ["1946–54", "New constitutions give the regions more power"],
          ["1 Oct 1960", "Nigeria becomes independent"],
          ["1963", "Nigeria becomes a republic within the Commonwealth"]
        ] },
        { type: "section", head: "Trade, slaves and conquest", md:
          "British ships carried hundreds of thousands of enslaved people from the Bight of Biafra and the Bight of Benin before Britain abolished the slave trade in 1807 and its navy began patrolling the coast against it. Palm oil replaced slaves as the main trade. Britain annexed Lagos in 1861, and the Royal Niger Company extended British power up the Niger River. In 1897 a British force sacked Benin City in revenge for an ambush, burning much of it and carrying off thousands of bronze and ivory artworks, the Benin Bronzes." },
        { type: "section", head: "The amalgamation", md:
          "In January 1914 the governor, Frederick Lugard, merged the Northern and Southern Protectorates into a single colony, Nigeria, largely so that revenue from the richer south could cover the north's deficits (see [[lesson:ng-9]]). No Nigerians were consulted. The mostly Muslim north was ruled indirectly through its emirs, while the south, with its Christian missions and coastal trade, got schools and a Western-educated elite. The divide shaped the country's politics for a century." },
        { type: "section", head: "Indirect rule", md:
          "Lugard's method in the north, ruling through the existing emirs and their courts, became known as 'indirect rule' and a model for British Africa. It was cheap, needing few British officials, but it froze traditional hierarchies and kept Western schooling out of much of the north. Even the country's name was British: the journalist Flora Shaw, later Lugard's wife, proposed 'Nigeria', after the Niger River, in The Times in 1897." },
        { type: "section", head: "Towards independence", md:
          "After the Second World War nationalist leaders such as Nnamdi Azikiwe, Obafemi Awolowo and Ahmadu Bello pushed for self-government, each with a regional base. Britain wrote a series of constitutions giving power to three regions, North, West and East, with the North larger than the other two combined. Nigeria became independent on 1 October 1960 under Prime Minister Abubakar Tafawa Balewa, and a republic in 1963, staying in the Commonwealth." },
        { type: "section", head: "English and the law", md:
          "Britain's legacy is everywhere: English is the official language and the common tongue of a country with more than 500 languages, the courts follow English common law in the south and much of the federation, and Nigerians play football and cricket and once drove on the left. Many of Nigeria's elite were educated in Britain, a habit that continues." },
        { type: "compare", head: "The colonial legacy",
          left: { head: "Built", md:
            "A single state, a common language, railways, schools and a legal system." },
          right: { head: "Broken", md:
            "Arbitrary borders, divided regions and an economy built to export raw materials." } },
        { type: "section", head: "Why it matters", md:
          "Many Nigerians say Lugard's 'mistake of 1914' lies behind their country's regional and religious tensions, a debate that still shapes politics today." }
      ],
      takeaways: [
        "British troops looted the Benin Bronzes from Benin City in 1897.",
        "Lugard amalgamated north and south into Nigeria in 1914 without consulting Nigerians.",
        "Nigeria became independent from Britain on 1 October 1960."
      ],
      check: { q: "Why did Lugard amalgamate Nigeria in 1914?",
        choices: ["Nigerians voted for it", "Largely so the richer south's revenue could cover the north's deficits", "To prepare for independence"], answer: 1,
        explain: "The merger was done without local consent." },
      sources: [
        { title: "Why Lord Lugard Joined Northern and Southern Nigeria in 1914", publisher: "The Historyville", url: "https://www.thehistoryville.com/lugard-1914-amalgamation/", date: "n.d." },
        { title: "Nigeria Amalgamation Document 1914", publisher: "Daily Trust", url: "https://dailytrust.com/nigeria-amalgamation-document-1914/", date: "n.d." },
        { title: "Why the Benin Bronzes Are Being Returned—and Who Gets Them", publisher: "Artnet News", url: "https://news.artnet.com/art-world/mfa-boston-benin-bronzes-restitution-2662790", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "gb_ng-2", kind: "relation", asOf: "2026-10-01",
      title: "Biafra and Abacha",
      dek: "Britain armed Nigeria's government against Biafran secession, as images of starving children shocked the world. Twenty-five years later, the Commonwealth suspended Nigeria after Abacha hanged Ken Saro-Wiwa.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_ng/gb_ng-2-hero.webp",
          alt: "Illustration of an armoured car on a red dirt road through tropical forest in the late 1960s.",
          caption: "Britain supplied armoured vehicles and ammunition to Nigeria's federal army during the Biafran war.",
          credit: "Illustration — not a photograph",
          prompt: "A 1960s armoured car parked on a red dirt road through dense tropical forest, palm trees, a burned-out village hut in the distance, overcast light, historical documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Civil war and dictatorship", items: [
          ["May 1967", "The Eastern Region declares independence as Biafra"],
          ["Jul 1967", "Wilson's government backs Lagos with arms"],
          ["1968–69", "Famine in Biafra stirs protests in Britain"],
          ["Jan 1970", "Biafra surrenders"],
          ["10 Nov 1995", "Ken Saro-Wiwa and eight others hanged"],
          ["Nov 1995", "Commonwealth suspends Nigeria"]
        ] },
        { type: "section", head: "Arming Lagos", md:
          "When the Eastern Region broke away as Biafra in 1967 (see [[lesson:ng-10]]), Harold Wilson's Labour government decided to back the federal government in Lagos. Britain wanted a united Nigeria, and its oil companies, especially Shell-BP, had big interests in the east. From July 1967 it supplied armoured cars, machine guns, anti-tank weapons and millions of rounds of ammunition, and later patrol boats that helped enforce the blockade of Biafra." },
        { type: "section", head: "Starvation and protest", md:
          "The blockade, and the fighting, caused mass starvation in Biafra, perhaps a million or more deaths, mostly from hunger. Pictures of starving children caused outrage in Britain; protesters marched, and critics, including some in Wilson's own party, accused the government of complicity. Ministers argued that a Biafran victory would break up Nigeria and invite Soviet influence, which was also supplying Lagos. Biafra surrendered in January 1970, and Nigeria's leader Yakubu Gowon declared 'no victor, no vanquished'." },
        { type: "section", head: "Abacha and the Commonwealth", md:
          "In the 1990s General Sani Abacha's dictatorship (see [[lesson:ng-11]]) brought a rupture. On 10 November 1995, as Commonwealth leaders met in New Zealand, his regime hanged the writer Ken Saro-Wiwa and eight other Ogoni activists. Prime Minister John Major called it 'judicial murder', and the Commonwealth suspended Nigeria, which was readmitted only after democracy returned in 1999. Britain also imposed sanctions." },
        { type: "section", head: "Stolen money in London", md:
          "Some of the money looted by Nigerian rulers ended up in Britain. Investigators traced funds stolen by Abacha through London banks, and in 2012 a London court jailed James Ibori, a former governor of Delta State, for laundering millions of pounds. Nigerians often point out that British banks and property markets have long sheltered their leaders' stolen wealth, even as British politicians lecture about corruption." },
        { type: "section", head: "Shell in the Delta", md:
          "Oil kept the countries entangled. Shell, then Anglo-Dutch, has pumped oil in the Niger Delta since the 1950s, and oil spills devastated fishing and farming communities, as Saro-Wiwa's Ogoni movement protested (see [[lesson:ng-12]]). In 2021 Britain's Supreme Court ruled that Nigerian villagers could sue Shell's British parent company in English courts over pollution, opening the way for cases that are still being fought in the courts in London." },
        { type: "compare", head: "Britain and Biafra",
          left: { head: "The government's case", md:
            "Keeping Nigeria united prevented a chain of secessions across Africa." },
          right: { head: "The critics' case", md:
            "British arms and the blockade helped starve a people in pursuit of oil and influence." } },
        { type: "section", head: "Why it matters", md:
          "Many in Nigeria's south-east still blame Britain for Biafra's defeat, and the memory feeds today's separatist movement, which has active supporters in the British diaspora and in London." }
      ],
      takeaways: [
        "Britain armed Nigeria's federal government against Biafra in 1967–70.",
        "The Commonwealth suspended Nigeria after Abacha hanged Ken Saro-Wiwa in 1995.",
        "Money stolen by Nigerian rulers has often passed through London."
      ],
      check: { q: "Why was Nigeria suspended from the Commonwealth in 1995?",
        choices: ["It invaded a neighbour", "Abacha's regime hanged Ken Saro-Wiwa and eight other activists", "It refused to pay dues"], answer: 1,
        explain: "Nigeria was readmitted after democracy returned in 1999." },
      sources: [
        { title: "Nigeria's war over Biafra, 1967-70", publisher: "Mark Curtis", url: "https://www.markcurtis.info/2007/02/13/nigeriabiafra-1967-70/", date: "2007" },
        { title: "How Britain's Labour government facilitated the massacre of Biafrans in Nigeria", publisher: "Declassified UK", url: "https://www.declassifieduk.org/how-britains-labour-government-facilitated-the-massacre-of-biafrans-in-nigeria-to-protect-its-oil-interests/", date: "2020" },
        { title: "Commonwealth Ministerial Action Group", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Commonwealth_Ministerial_Action_Group", date: "n.d." },
        { title: "Nigeria: Transition or Travesty?", publisher: "Human Rights Watch", url: "https://www.hrw.org/reports/pdfs/n/nigeria/nigeria97o.pdf", date: "1997-10" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "gb_ng-3", kind: "relation", asOf: "2026-10-01",
      title: "Bronzes, diaspora and a state visit",
      dek: "Looted bronzes are starting to go home, Nigerians are one of Britain's biggest migrant groups, and in March 2026 Tinubu made the first Nigerian state visit to Britain in 37 years.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_ng/gb_ng-3-hero.webp",
          alt: "Illustration of a horse-drawn carriage procession approaching a castle on a spring day.",
          caption: "King Charles hosted President Tinubu at Windsor Castle in March 2026.",
          credit: "Illustration — not a photograph",
          prompt: "A ceremonial horse-drawn carriage procession with mounted guards approaching a grand stone castle with round towers on a bright spring day, green lawns, documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "A modern partnership", items: [
          ["2021", "270,768 Nigerian-born residents in England and Wales"],
          ["2022", "London's Horniman Museum agrees to return Benin objects"],
          ["13 Feb 2024", "Enhanced Trade and Investment Partnership signed"],
          ["Nov 2024", "UK–Nigeria Strategic Partnership agreed"],
          ["2025", "Two-way trade reaches a record £8.1 billion"],
          ["18–19 Mar 2026", "Tinubu's state visit to Windsor"]
        ] },
        { type: "section", head: "Bringing the bronzes home", md:
          "Thousands of Benin Bronzes ended up in Western museums after 1897, including about 900 in the British Museum, which British law forbids from giving away its collection. Others have moved first. Germany, the Netherlands and the Smithsonian have returned bronzes to Nigeria; in Britain, Jesus College Cambridge gave back a bronze cockerel in 2021, London's Horniman Museum agreed in 2022 to return its objects, and a Cambridge University museum said in 2026 it would return its bronzes. Nigeria's debate now is who should own them: the federal state or the Oba of Benin." },
        { type: "section", head: "Nigerians in Britain", md:
          "Nigerians have come to Britain to study and work since colonial times. In the 2021 census, 270,768 residents of England and Wales were born in Nigeria, and more have arrived since as students and health workers. British Nigerians are prominent in medicine, law, business, sport and politics; Kemi Badenoch, who grew up partly in Lagos, became leader of the Conservative Party in 2024 (see [[lesson:gb-4]]). Visa rules, especially for students' families, are a constant issue." },
        { type: "section", head: "Trade and security", md:
          "On 13 February 2024 the two signed an Enhanced Trade and Investment Partnership, the first of its kind between Britain and an African country, aimed at finance, education and services. In November 2024 it became part of a wider Strategic Partnership including security and defence cooperation and annual talks on migration and justice. Two-way trade reached a record £8.1 billion in 2025, and British finance has backed the renovation of Nigerian ports." },
        { type: "section", head: "The state visit", md:
          "On 18–19 March 2026 King Charles III hosted President Bola Tinubu at Windsor Castle, the first Nigerian state visit to Britain in 37 years. Charles, who visited Nigeria four times as Prince of Wales, highlighted the two countries' cultural and commercial links. The visit came as Nigeria faced US pressure over security and religious freedom (see [[lesson:us_ng-3]]), and Britain offered a friendlier partner." },
        { type: "compare", head: "A changing relationship",
          left: { head: "Old pattern", md:
            "Former colonial ruler and former colony, aid donor and recipient." },
          right: { head: "New pattern", md:
            "Trade partners linked by a large, successful diaspora and shared business ties." } },
        { type: "section", head: "Why it matters", md:
          "Nigeria is Africa's most populous country and one of Britain's biggest trading partners in Africa. The relationship is becoming less about the past and more about people, trade and security, though the past still matters." }
      ],
      takeaways: [
        "Some Benin Bronzes have been returned from Britain, though the British Museum is barred by law from giving up its collection.",
        "About 270,000 people born in Nigeria lived in England and Wales in 2021; Kemi Badenoch grew up partly in Lagos.",
        "Tinubu made the first Nigerian state visit to Britain in 37 years in March 2026; trade hit £8.1 billion in 2025."
      ],
      check: { q: "What happened in March 2026?",
        choices: ["Nigeria left the Commonwealth", "Tinubu made the first Nigerian state visit to Britain in 37 years", "Britain returned all the Benin Bronzes"], answer: 1,
        explain: "King Charles hosted him at Windsor Castle." },
      sources: [
        { title: "2021 Census statistics – Nigerians in the UK", publisher: "Office for National Statistics", url: "https://www.ons.gov.uk/aboutus/transparencyandgovernance/freedomofinformationfoi/2021censusstatisticsnigeriansintheuk", date: "n.d." },
        { title: "UK signs new trade partnership with Nigeria", publisher: "Institute of Export & International Trade", url: "https://www.export.org.uk/insights/trade-news/uk-signs-new-trade-partnership-with-nigeria/", date: "2024-02" },
        { title: "Nigeria's President Tinubu meets royals in UK state visit", publisher: "Yahoo News (AFP)", url: "https://www.yahoo.com/news/articles/nigeria-president-tinubu-meets-royals-214617253.html", date: "2026-03" },
        { title: "Nigeria, UK Bilateral Trades Hit £8.1bn Annually", publisher: "AllAfrica", url: "https://allafrica.com/stories/202603190337.html", date: "2026-03-19" },
        { title: "Cambridge University Museum Set to Return Benin Bronzes to Nigeria", publisher: "AllAfrica", url: "https://allafrica.com/stories/202602110006.html", date: "2026-02-11" }
      ]
    }
  ]
});
