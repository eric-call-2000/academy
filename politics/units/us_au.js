/* ============================================================
   Relationship — United States & Australia 🇺🇸🇦🇺
   'Australia looks to America' in 1941, ANZUS and Pine Gap;
   an ally in every American war since, then AUKUS and nuclear
   submarines; and Trump's second term: minerals, a review of
   the submarine deal and an ambassador he disliked.
   Research note and sources: tools/research/us_au.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("us_au", {
  id: "us_au",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_au-1", kind: "relation", asOf: "2026-09-30",
      title: "Australia looks to America",
      dek: "When Japan swept south in 1941, Australia's leader turned from Britain to the United States. Ten years later the ANZUS treaty made it official, and a secret base in the outback bound the two together.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_au/us_au-1-hero.webp",
          alt: "Illustration of several large white radar domes in the red desert of central Australia under a blue sky.",
          caption: "The joint intelligence base at Pine Gap, near Alice Springs, began operating in 1970.",
          credit: "AI illustration — not a photograph",
          prompt: "Several large white spherical radar domes and low buildings in the red desert of central Australia, spinifex grass and rocky ranges behind, clear deep blue sky, heat shimmer, quiet and secretive mood, no people, no flags, no legible text." },
        { type: "timeline", head: "Building the alliance", items: [
          ["27 Dec 1941", "Curtin: 'Australia looks to America'"],
          ["May 1942", "Battle of the Coral Sea"],
          ["1 Sep 1951", "ANZUS treaty signed with the US and New Zealand"],
          ["1962–72", "About 52,000 Australians serve in Vietnam; 521 are killed"],
          ["1966", "Treaty to set up the Pine Gap base"],
          ["1970", "Pine Gap begins operating"]
        ] },
        { type: "section", head: "The turn to America", md:
          "For its first 40 years Australia looked to Britain for protection. That changed after Japan attacked Pearl Harbor and advanced through Southeast Asia. On 27 December 1941 Prime Minister John Curtin wrote: 'Without any inhibitions of any kind, I make it quite clear that Australia looks to America, free of any pangs as to our traditional links or kinship with the United Kingdom.' After Singapore fell in February 1942 and Darwin was bombed, General Douglas MacArthur set up his headquarters in Australia, and hundreds of thousands of American troops passed through. In May 1942 American and Australian forces fought the Battle of the Coral Sea, which helped stop Japan's advance." },
        { type: "section", head: "ANZUS", md:
          "After the war Australia wanted a formal guarantee. Washington agreed as part of the Pacific settlement with Japan, and on 1 September 1951 Australia, New Zealand and the United States signed the ANZUS treaty in San Francisco. It promises only that each will 'act to meet the common danger' if another is attacked in the Pacific, weaker wording than NATO's, but it became the foundation of Australian defence. Australia joined America's wars as proof of loyalty: about 17,000 Australians fought in Korea, and from 1962 about 52,000 served in Vietnam, where 521 were killed. Conscription for Vietnam sparked large protests (see [[lesson:au-11]])." },
        { type: "section", head: "Pine Gap", md:
          "The alliance also rests on intelligence. Under a 1966 treaty, the two countries built a joint base at Pine Gap, about 18 kilometres from Alice Springs in the centre of Australia. It began operating in 1970, controlling American spy satellites that intercept signals and detect missile launches across much of the globe. Australia is also one of the 'Five Eyes' intelligence partners (see [[lesson:us_gb-1]]). Critics argue that Pine Gap would make Australia a target in any war between the United States and China, and that it helps American strikes that Australia has no say over. Supporters say it gives Australia access to intelligence it could never gather alone." },
        { type: "compare", head: "Two views of the alliance",
          left: { head: "Insurance", md:
            "A country of Australia's size cannot defend a continent alone; America's protection is worth the costs." },
          right: { head: "Entanglement", md:
            "The alliance drags Australia into distant wars and makes it a target without guaranteeing its defence." } },
        { type: "section", head: "Why it matters", md:
          "The US alliance is the base of Australian defence and one of its few points of agreement between the major parties. It also shapes how Australia deals with China, its biggest trading partner." }
      ],
      takeaways: [
        "In 1941 Curtin said 'Australia looks to America', turning away from reliance on Britain.",
        "The 1951 ANZUS treaty and the Pine Gap base, operating since 1970, bind the two countries.",
        "Australia fought beside the US in Korea and Vietnam, where 521 Australians were killed."
      ],
      check: { q: "What does the Pine Gap base do?",
        choices: ["Trains Australian pilots", "Controls US spy satellites that intercept signals and detect missile launches", "Stores nuclear weapons"], answer: 1,
        explain: "The joint base near Alice Springs has operated since 1970 under a 1966 treaty." },
      sources: [
        { title: "John Curtin's turn to America, 75 years on", publisher: "Lowy Institute", url: "https://www.lowyinstitute.org/the-interpreter/john-curtin-s-turn-america-75-years", date: "2016-12" },
        { title: "ANZUS Treaty", publisher: "National Museum of Australia", url: "https://www.nma.gov.au/defining-moments/resources/anzus-treaty", date: "n.d." },
        { title: "Australia's involvement in the Vietnam War", publisher: "National Archives of Australia", url: "https://www.naa.gov.au/help-your-research/fact-sheets/australias-involvement-vietnam-war", date: "n.d." },
        { title: "Pine Gap: an historical perspective on Australia's intelligence-sharing partnership with the United States", publisher: "Military History and Heritage Victoria", url: "https://www.mhhv.org.au/pine-gap-an-historical-perspective-on-australias-intelligence-sharing-partnership-with-the-united-states-in-a-time-of-political-change/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_au-2", kind: "relation", asOf: "2026-09-30",
      title: "From 9/11 to AUKUS",
      dek: "Australia invoked ANZUS for the first time after 9/11 and followed America into Afghanistan and Iraq. Then, worried about China, it signed the AUKUS pact to get nuclear-powered submarines.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_au/us_au-2-hero.webp",
          alt: "Illustration of a long black nuclear-powered submarine on the surface of a calm harbour at dawn.",
          caption: "Under AUKUS, Australia plans to buy American Virginia-class submarines from 2032.",
          credit: "AI illustration — not a photograph",
          prompt: "A long sleek black nuclear-powered attack submarine sailing on the surface of a calm harbour at dawn, a few sailors on the tower seen from far away, city skyline and hills behind in soft pink light, no flags, no legible text." },
        { type: "timeline", head: "A deepening alliance", items: [
          ["14 Sep 2001", "Howard invokes ANZUS for the first time after 9/11"],
          ["2003", "Australian forces join the invasion of Iraq"],
          ["2012", "US Marines begin rotations through Darwin"],
          ["2019", "Marine rotation reaches 2,500"],
          ["15 Sep 2021", "AUKUS announced; French submarine deal cancelled"],
          ["Mar 2023", "Plan: US Virginia-class subs from 2032, then an AUKUS design"]
        ] },
        { type: "section", head: "After 9/11", md:
          "Prime Minister John Howard was in Washington on 11 September 2001. Three days later his government invoked ANZUS for the first and only time, declaring the attacks an attack on Australia. Australian special forces fought in Afghanistan, and in 2003 Australia was one of only three countries, with Britain and Poland, to send combat forces to the invasion of Iraq. George W. Bush called Howard a 'man of steel'. Australia kept troops in Afghanistan until 2021. The wars were costly and divisive, and a later inquiry found evidence that some Australian special forces soldiers had committed war crimes in Afghanistan." },
        { type: "section", head: "The pivot to Asia", md:
          "As China's power grew, Washington 'pivoted' to Asia and Australia became more important to it. In November 2011 Barack Obama announced in Canberra that US Marines would rotate through Darwin, in northern Australia; the first 200 arrived in 2012, and by 2019 the rotation had reached 2,500. American bombers and ships visit more often, and Australia is expanding northern bases that US forces can use. Relations with China worsened in parallel, culminating in a trade war from 2020 (see [[lesson:au_cn-2]])." },
        { type: "section", head: "AUKUS", md:
          "On 15 September 2021 Australia, Britain and the United States announced AUKUS, a pact to help Australia acquire nuclear-powered submarines, which can stay submerged far longer and travel much farther than conventional ones. Australia cancelled a deal to buy French diesel submarines, and France was furious, recalling its ambassadors. In March 2023 the three countries set out the plan: America would sell Australia at least three Virginia-class submarines from 2032, and the partners would then build a new 'SSN-AUKUS' design, with the first built in Australia in the early 2040s. The cost to Australia over three decades was estimated at up to A$368 billion, the largest project in its history. From 2027 American and British submarines are to rotate through HMAS Stirling, a naval base near Perth, and AUKUS also has a 'second pillar' for sharing technologies such as hypersonic missiles, artificial intelligence and quantum computing." },
        { type: "compare", head: "Was AUKUS a good deal?",
          left: { head: "Supporters", md:
            "Nuclear submarines give Australia real power to deter China and bind the US and UK to its defence." },
          right: { head: "Critics", md:
            "The cost is huge, the subs arrive late, and Australia loses independence by depending on American boats." } },
        { type: "section", head: "Why it matters", md:
          "AUKUS commits Australia to the US alliance for generations. It is also a test of whether America's shipyards can build enough submarines for itself and an ally." }
      ],
      takeaways: [
        "Howard invoked ANZUS for the first time after 9/11, and Australia joined the wars in Afghanistan and Iraq.",
        "Since 2012 US Marines rotate through Darwin, reaching 2,500 in 2019.",
        "AUKUS (2021) will give Australia nuclear-powered submarines, starting with US boats from 2032."
      ],
      check: { q: "What did Australia give up when it joined AUKUS in 2021?",
        choices: ["Its membership of ANZUS", "A deal to buy French conventional submarines", "Its Pine Gap base"], answer: 1,
        explain: "The cancellation angered France, which recalled its ambassadors from Canberra and Washington." },
      sources: [
        { title: "Howard Government Invokes ANZUS Treaty", publisher: "AustralianPolitics.com", url: "https://australianpolitics.com/2001/09/14/howard-government-invokes-anzus-treaty.html/", date: "2001-09-14" },
        { title: "U.S. Marines Reach 2,500 in Darwin for First Time", publisher: "US Indo-Pacific Command", url: "https://www.pacom.mil/Media/NEWS/Spotlight/Article/1918439/us-marines-reach-2500-in-darwin-for-first-time/", date: "2019-07" },
        { title: "Navy Virginia-Class Submarine Program and AUKUS Submarine (Pillar 1) Project", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs_external_products/RL/PDF/RL32418/RL32418.295.pdf", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_au-3", kind: "relation", asOf: "2026-09-30",
      title: "Minerals, submarines and Trump",
      dek: "Trump's return put AUKUS under review and hit Australia with tariffs. Anthony Albanese answered with an $8.5 billion critical minerals deal, and Trump declared the submarine plan 'full steam ahead'.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_au/us_au-3-hero.webp",
          alt: "Illustration of a huge open-pit mine with terraced red walls and giant haul trucks in the Australian outback.",
          caption: "Australia's minerals are central to Washington's plans to reduce reliance on China.",
          credit: "AI illustration — not a photograph",
          prompt: "A huge open-pit mine with terraced rust-red walls in the Australian outback, giant yellow haul trucks on winding ramps, processing plant in the distance, bright hard sunlight and clear sky, wide aerial documentary view, no logos, no flags, no legible text." },
        { type: "timeline", head: "Trump's second term", items: [
          ["Apr 2025", "10% US tariff on Australian goods"],
          ["Jun 2025", "Pentagon begins a review of AUKUS"],
          ["20 Oct 2025", "Albanese at the White House; $8.5 billion minerals deal"],
          ["Dec 2025", "Review endorses AUKUS"],
          ["Jan 2026", "Ambassador Kevin Rudd says he will leave early"],
          ["2026", "Questions remain over US submarine production"]
        ] },
        { type: "section", head: "Tariffs and a review", md:
          "Australia buys more from the United States than it sells, yet in April 2025 Donald Trump put a 10% tariff on Australian goods along with most other countries, plus higher tariffs on steel and aluminium. Then in June 2025 the Pentagon announced a review of AUKUS, to check it fitted Trump's 'America First' agenda. Some American officials worried that selling submarines to Australia would leave the US Navy short, since its shipyards were building fewer than the two a year needed. For months Australians wondered whether the biggest defence project in their history might be cancelled, while Anthony Albanese (see [[lesson:au-4]]) waited for a meeting with Trump." },
        { type: "section", head: "Minerals for security", md:
          "The meeting finally came at the White House on 20 October 2025. Albanese, fresh from a landslide election win (see [[lesson:au-5]]), brought an offer Trump wanted: Australia's critical minerals, at a time when China was restricting exports of rare earths. The two signed an $8.5 billion framework, with each government investing in mining and processing projects over the next six months, including a gallium refinery in Western Australia. Trump said AUKUS was going 'full steam ahead'. In December the Pentagon review endorsed the pact, confirming the sale of at least three Virginia-class submarines from the early 2030s, though a congressional report in January 2026 raised doubts about whether America could build enough." },
        { type: "section", head: "An awkward ambassador", md:
          "One awkward moment came at the same White House meeting. Australia's ambassador in Washington was Kevin Rudd, a former prime minister who had called Trump 'the most destructive president in history' before taking the job. When a reporter mentioned this, Trump turned to Rudd and said: 'I don't like you either, and I probably never will.' In January 2026 Rudd announced he would leave at the end of March, a year early, to lead the Asia Society. Albanese denied that relations with the Trump administration had been damaged. Meanwhile Australia's trade with China has recovered since the trade war ended (see [[lesson:au_cn-2]]), and it tries to keep both relationships stable." },
        { type: "compare", head: "How much to rely on America?",
          left: { head: "Double down", md:
            "In a dangerous region, Australia must bind itself even more closely to the US, whatever the president." },
          right: { head: "Hedge", md:
            "Trump's tariffs and doubts about AUKUS show Australia needs more self-reliance and more partners." } },
        { type: "section", head: "Why it matters", md:
          "Australia's security plans depend on America delivering submarines in the 2030s. Whether Washington keeps its promises will shape the Indo-Pacific balance of power." }
      ],
      takeaways: [
        "Trump put a 10% tariff on Australia and ordered a review of AUKUS in 2025.",
        "Albanese won support with an $8.5 billion critical minerals deal in October 2025; the review endorsed AUKUS.",
        "Trump told Ambassador Rudd 'I don't like you either'; Rudd left early in 2026."
      ],
      check: { q: "What did Albanese offer Trump at their October 2025 meeting?",
        choices: ["An end to AUKUS", "An $8.5 billion critical minerals partnership", "A ban on trade with China"], answer: 1,
        explain: "The deal aimed to cut reliance on Chinese rare earths; Trump then said AUKUS was going 'full steam ahead'." },
      sources: [
        { title: "Trump-Albanese Meeting: U.S. and Australia Sign Critical Minerals Deal to Counter China", publisher: "Foreign Policy", url: "https://foreignpolicy.com/2025/10/20/trump-albanese-australia-critical-minerals-rare-earths-china/", date: "2025-10-20" },
        { title: "Pentagon's AUKUS review finds areas to put nuclear submarine pact on 'strongest possible footing'", publisher: "ABC News (Australia)", url: "https://www.abc.net.au/news/2025-12-05/aukus-review-pentagon-donald-trump-administration/105588512", date: "2025-12-05" },
        { title: "Australia's US Ambassador Rudd to Step Down Early After Tensions With Trump", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-01-13/australia-s-us-ambassador-rudd-to-step-down-early-after-tensions-with-trump", date: "2026-01-13" },
        { title: "Pentagon's AUKUS Review Raises Doubts About Virginia-Class Submarine Deliveries", publisher: "US Foreign Policy", url: "https://usforeignpolicy.org/articles/aukus-pentagon-review-virginia-submarine-march-2026.html", date: "2026-03" }
      ]
    }
  ]
});
