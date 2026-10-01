/* ============================================================
   Relationship — United States & Brazil 🇺🇸🇧🇷
   Wartime allies, then Washington's backing for the 1964 coup;
   ethanol, spying and the 'Trump of the Tropics'; and Big Tech,
   Brazil's judges, a Bolsonaro son in Washington and the 2026
   vote. Tariffs are in br-6, the race in br-7.
   Research note and sources: tools/research/us_br.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("us_br", {
  id: "us_br",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_br-1", kind: "relation", asOf: "2026-10-01",
      title: "Allies, then a coup",
      dek: "Brazil was the only South American country to send troops to fight in the Second World War, alongside Americans in Italy. Twenty years later Washington stood ready to help its generals overthrow an elected president.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_br/us_br-1-hero.webp",
          alt: "Illustration of an aircraft carrier steaming south across a calm ocean with escort ships, 1960s.",
          caption: "In 1964 the US sent a naval task force toward Brazil in case the coup plotters needed help.",
          credit: "AI illustration — not a photograph",
          prompt: "A 1960s aircraft carrier with escort destroyers steaming across a calm blue ocean, jets parked on deck, long wakes behind, hazy tropical horizon, historical documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Partners and patrons", items: [
          ["1824", "The US is the first country to recognise Brazil's independence"],
          ["1942", "Brazil joins the Allies; US bases in the north-east"],
          ["1944–45", "Brazilian Expeditionary Force fights in Italy"],
          ["Mar–Apr 1964", "Military coup; the US readies Operation Brother Sam"],
          ["1977", "Brazil ends its military agreement with the US"],
          ["1985", "Civilian rule returns"]
        ] },
        { type: "section", head: "Good neighbours", md:
          "In 1824 the United States became the first country to recognise Brazil's independence from Portugal (see [[lesson:br-9]]). For much of the 20th century Brazil saw itself as America's special friend in South America. In 1942 it declared war on Germany and Italy, and let the US build air bases on its north-eastern bulge, the closest point to Africa, which became a springboard for flights to the war in North Africa and Europe. Decades earlier, Emperor Pedro II had toured the United States for its centennial in 1876." },
        { type: "section", head: "Brazilians in Italy", md:
          "Brazil was the only South American country to send ground troops to fight in the Second World War. The Brazilian Expeditionary Force, more than 25,000 strong under General Mascarenhas de Morais, served with the US Fifth Army in Italy from 1944 to 1945, fighting at Monte Castello and in the Apennines. About 1,500 were killed or wounded. The campaign tied Brazil's officers closely to the American military, a link that would matter twenty years later." },
        { type: "section", head: "1964", md:
          "By the early 1960s Washington feared that President João Goulart was drifting left, perhaps toward a Cuba-style regime. The US ambassador, Lincoln Gordon, kept in close touch with plotting officers. When the coup began at the end of March 1964, President Lyndon Johnson approved Operation Brother Sam: a naval task force led by the aircraft carrier USS Forrestal, plus tankers with fuel and planes with munitions, ready to help if fighting broke out. It was not needed; Goulart fled, and Washington quickly recognised the new government." },
        { type: "section", head: "The dictatorship", md:
          "The generals ruled for 21 years (see [[lesson:br-11]]). The US supported them as anti-communist allies, even as they tortured and killed opponents. The relationship cooled in the 1970s: President Jimmy Carter criticised human rights abuses and opposed Brazil's nuclear deal with West Germany, and in 1977 Brazil cancelled its military assistance agreement with the United States. The US role in the coup, hidden for years, was revealed by declassified documents from the 1970s onward. In 2014 Brazil's National Truth Commission documented hundreds of killings and disappearances under military rule." },
        { type: "compare", head: "How Brazilians remember",
          left: { head: "Friend", md:
            "America was a wartime ally, investor and model of a big democratic federation." },
          right: { head: "Meddler", md:
            "America backed a coup that brought two decades of dictatorship." } },
        { type: "section", head: "Why it matters", md:
          "Memories of 1964 make many Brazilians, especially on the left, deeply sensitive to any hint of American interference in their politics, a sensitivity that matters again in 2026." }
      ],
      takeaways: [
        "Brazil sent more than 25,000 troops to fight alongside the US Army in Italy in 1944–45.",
        "The US backed the 1964 coup and readied a naval task force, Operation Brother Sam, in case it was needed.",
        "Relations cooled under Carter over human rights and Brazil's nuclear plans."
      ],
      check: { q: "What was Operation Brother Sam?",
        choices: ["A US–Brazil trade deal", "A US naval and supply operation ready to back the 1964 coup", "Brazil's force in Italy"], answer: 1,
        explain: "It was not used, because the coup succeeded without fighting." },
      sources: [
        { title: "The United States and Brazil's Military Coup (1964)", publisher: "Library of Congress", url: "https://guides.loc.gov/brazil-us-relations/brazil-coup-1964", date: "n.d." },
        { title: "Operation Brother Sam", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Operation_Brother_Sam", date: "n.d." },
        { title: "Brazilian Expeditionary Force (FEB)", publisher: "Encyclopedia.com", url: "https://www.encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/brazilian-expeditionary-force-feb", date: "n.d." },
        { title: "From Regime Change to Declassified Diplomacy", publisher: "National Security Archive (Unredacted)", url: "https://unredacted.com/2014/04/01/from-regime-change-to-declassified-diplomacy/", date: "2014-04-01" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_br-2", kind: "relation", asOf: "2026-10-01",
      title: "Spies and the Trump of the Tropics",
      dek: "Obama called Lula 'the most popular politician on earth'. Then leaks showed America spying on Brazil's president, and a decade later Bolsonaro modelled himself on Trump, down to the storming of the capital.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_br/us_br-2-hero.webp",
          alt: "Illustration of rioters swarming over the ramps and roofs of modernist government buildings in Brasília.",
          caption: "Bolsonaro supporters stormed Brasília's government buildings on 8 January 2023.",
          credit: "AI illustration — not a photograph",
          prompt: "A crowd swarming over the ramps and flat roofs of white modernist government buildings with twin towers in Brasília, smoke and broken glass, police lines in the distance, wide blue sky, documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "Ups and downs", items: [
          ["2007", "Bush and Lula sign an ethanol partnership"],
          ["2009", "Obama: Lula is 'the most popular politician on earth'"],
          ["Sep 2013", "Rousseff postpones a state visit over NSA spying"],
          ["2019", "Bolsonaro takes office as Trump's admirer"],
          ["Oct 2022", "Lula defeats Bolsonaro; the US recognises the result quickly"],
          ["8 Jan 2023", "Bolsonaro supporters storm Brasília"]
        ] },
        { type: "section", head: "Lula and the Americans", md:
          "Lula, a former union leader, took office in 2003 and surprised Washington by getting on well with George W. Bush. In 2007 the two signed a partnership to promote ethanol, the fuel Brazil makes from sugarcane. At a G20 meeting in 2009 Barack Obama greeted him with 'That's my man', calling him the most popular politician on earth. But Lula also built BRICS with China and Russia and, with Turkey, tried in 2010 to broker a nuclear deal with Iran that Washington rejected. From 2004 Brazil also led the UN peacekeeping mission in Haiti, a role Washington welcomed." },
        { type: "section", head: "Spying on the president", md:
          "In 2013 documents leaked by Edward Snowden showed that the US National Security Agency had spied on President Dilma Rousseff, her aides and the state oil company Petrobras. Rousseff postponed what would have been the first state visit of Obama's second term, after he refused to apologise publicly, and told the UN General Assembly the spying was 'a breach of international law'. She visited Washington in June 2015 to patch things up." },
        { type: "section", head: "Bolsonaro and Trump", md:
          "Jair Bolsonaro, elected in 2018, openly admired Donald Trump and was nicknamed 'the Trump of the Tropics'. He sided with the US on Venezuela and Israel, dropped Brazil's special treatment at the WTO in return for US support to join the OECD, and echoed Trump's attacks on the press and on voting systems. When Trump lost in 2020, Bolsonaro was among the last leaders to congratulate Joe Biden." },
        { type: "section", head: "Two Januaries", md:
          "In October 2022 Lula narrowly beat Bolsonaro. The Biden administration recognised the result within hours, a signal aimed at anyone in Brazil's military tempted to resist. On 8 January 2023, a week after Lula's inauguration, thousands of Bolsonaro supporters stormed Congress, the Supreme Court and the presidential palace, in scenes that echoed the 6 January 2021 attack on the US Capitol. Bolsonaro was in Florida at the time. Brazil's courts later convicted him of plotting a coup (see [[lesson:br-5]]). Biden and Lula went on to launch a joint initiative on workers' rights in 2023." },
        { type: "compare", head: "Two Brazilian views of America",
          left: { head: "Lula's camp", md:
            "A partner to respect, but not to follow; Brazil should trade with everyone and keep its independence." },
          right: { head: "Bolsonaro's camp", md:
            "A natural ally against the left, China and 'globalism'; Trump is a model." } },
        { type: "section", head: "Why it matters", md:
          "Brazil's political divide now maps onto America's. Each side in Brasília looks to its counterpart in Washington, which is why US decisions about Brazil have become explosive at home." }
      ],
      takeaways: [
        "Lula got on with Bush and Obama, while building BRICS with China and Russia.",
        "NSA spying on Rousseff led her to postpone a 2013 state visit.",
        "Bolsonaro modelled himself on Trump; his supporters stormed Brasília on 8 January 2023."
      ],
      check: { q: "Why did Dilma Rousseff postpone her 2013 state visit to Washington?",
        choices: ["A dispute over ethanol tariffs", "Revelations that the NSA had spied on her", "Bolsonaro's election"], answer: 1,
        explain: "Snowden's documents showed the NSA had monitored her, her aides and Petrobras." },
      sources: [
        { title: "Brazil President Postpones U.S. Visit After NSA Revelations", publisher: "NPR", url: "https://www.npr.org/2013/09/17/223472671/brazils-rousseff-postponse-u-s-state-visit", date: "2013-09-17" },
        { title: "Brazil's president condemns NSA spying", publisher: "The Washington Post", url: "https://www.washingtonpost.com/world/national-security/brazils-president-condemns-nsa-spying/2013/09/24/fe1f78ee-2525-11e3-b75d-5b7f66349852_story.html", date: "2013-09-24" },
        { title: "Brazil's President In Washington To Patch Up Relationship With Obama", publisher: "NPR", url: "https://www.npr.org/2015/06/30/418776095/brazil-s-president-in-washington-to-patch-up-relationship-with-obama", date: "2015-06-30" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_br-3", kind: "relation", asOf: "2026-10-01",
      title: "Judges, platforms and a vote",
      dek: "Brazil's Supreme Court blocked Elon Musk's X and jailed Bolsonaro. A Bolsonaro son lobbied Washington for sanctions on his own country. Now Brazil votes, and Lula accuses the US of meddling.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_br/us_br-3-hero.webp",
          alt: "Illustration of a voter using an electronic voting machine behind a cardboard screen in a school classroom.",
          caption: "Brazil votes electronically; the first round of the 2026 election is on 4 October.",
          credit: "AI illustration — not a photograph",
          prompt: "A small grey electronic voting machine with a keypad behind a cardboard privacy screen in a sunlit school classroom, a voter's hand pressing a key, a queue of people blurred in the background, documentary painting style, no faces, no flags, no legible text." },
        { type: "timeline", head: "A political quarrel", items: [
          ["Aug–Oct 2024", "Brazil blocks X after Musk defies court orders"],
          ["Feb 2025", "Eduardo Bolsonaro moves to the US"],
          ["Jul 2025", "50% tariffs and sanctions on Justice Moraes"],
          ["Dec 2025", "Sanctions on Moraes lifted"],
          ["Jun 2026", "Eduardo Bolsonaro sentenced over his US lobbying"],
          ["4 Oct 2026", "First round of Brazil's election"]
        ] },
        { type: "section", head: "Musk against Moraes", md:
          "Brazil's Supreme Court has been aggressive in fighting online disinformation, led by Justice Alexandre de Moraes. In 2024 he ordered X to block accounts linked to Bolsonaro's movement. Elon Musk refused, closed X's Brazilian office and called Moraes a dictator. On 30 August 2024 Moraes ordered X blocked across Brazil, froze Starlink's assets to collect fines, and the full court upheld him. X complied and returned on 8 October. American conservatives took up Musk's cause as a fight for free speech." },
        { type: "section", head: "A son in Washington", md:
          "In February 2025 Eduardo Bolsonaro, a congressman and the former president's son, moved to the United States to lobby the Trump administration on his father's behalf. Months later Trump imposed 50% tariffs on Brazil, citing a 'witch hunt' against Bolsonaro, and sanctioned Moraes (see [[lesson:br-6]]). Brazil's prosecutors charged Eduardo with trying to intimidate the courts by threatening US sanctions, and in June 2026 the Supreme Court sentenced him in absentia to four years and two months in prison." },
        { type: "section", head: "Thaw and freeze", md:
          "After Trump and Lula met in late 2025, Washington cut tariffs on beef, coffee and fruit and lifted the sanctions on Moraes in December. In July 2026 it imposed new 25% tariffs, accusing Brazil of favouring its PIX payment system over American card companies and of censoring US platforms. Lula's campaign says the tariffs are an attempt to influence the election. Brazil has chosen to negotiate rather than retaliate, though a 2025 reciprocity law lets it hit back." },
        { type: "section", head: "The vote", md:
          "Brazilians vote on 4 October, with a likely runoff on 25 October between Lula and Flávio Bolsonaro (see [[lesson:br-7]]). Flávio argues he could repair relations with Trump and has promised to pardon his father. Lula's campaign released a video accusing the Trump administration, without evidence, of helping his rival to get at Brazil's natural resources. Analysts say the biggest question is how Washington reacts to the result, especially if the loser disputes it." },
        { type: "compare", head: "What's at stake for Washington",
          left: { head: "Bolsonaro wins", md:
            "A close ally, possible pardon for his father, and a Brazil less tied to China and BRICS." },
          right: { head: "Lula wins", md:
            "More trade disputes, but a stable partner on climate and the Amazon, and a voice for the Global South." } },
        { type: "section", head: "Why it matters", md:
          "Brazil is the largest country in Latin America. How Washington treats its election will be watched across a region already alarmed by the Venezuela raid. It will also shape how far Brazil leans toward China, already its biggest trading partner (see [[lesson:br_cn-3]])." }
      ],
      takeaways: [
        "Brazil blocked X for five weeks in 2024 after Musk defied court orders.",
        "Eduardo Bolsonaro lobbied Washington for sanctions and was sentenced in June 2026.",
        "Lula's camp accuses the US of meddling in the October 2026 election; Flávio Bolsonaro says he could fix ties with Trump."
      ],
      check: { q: "Why was Eduardo Bolsonaro sentenced in June 2026?",
        choices: ["For corruption at Petrobras", "For seeking US sanctions to pressure the courts trying his father", "For storming Brasília"], answer: 1,
        explain: "The court found he threatened judicial authorities by promising US sanctions." },
      sources: [
        { title: "Blocking of X in Brazil", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Blocking_of_X_in_Brazil", date: "n.d." },
        { title: "Ban on Elon Musk's X platform upheld by Brazil Supreme Court", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2024/9/2/ban-on-elon-musks-x-platform-upheld-by-brazil-supreme-court", date: "2024-09-02" },
        { title: "Brazil Supreme Court convicts Eduardo Bolsonaro over US sanctions push", publisher: "France 24", url: "https://www.france24.com/en/americas/20260617-brazil-supreme-court-eduardo-bolsonaro-over-us-sanctions-push", date: "2026-06-17" },
        { title: "The big question looming over Brazil's elections: Trump's next move", publisher: "The Philadelphia Inquirer", url: "https://www.inquirer.com/news/nation-world/brazil-elections-trump-influence-bolsonaro-lula-silva-fraud-voting-machines-20260928.html", date: "2026-09-28" }
      ]
    }
  ]
});
