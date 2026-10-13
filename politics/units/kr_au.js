/* ============================================================
   Relationship — South Korea & Australia 🇰🇷🇦🇺
   Australia in the Korean War and the Battle of Kapyong; iron
   ore, coal, KAFTA and students; and Hanwha's howitzers and
   Redbacks, a lost frigate bid, the Austal stake and an energy
   summit after the 2026 Hormuz crisis.
   Research note and sources: tools/research/kr_au.md
   Current as of 12 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("kr_au", {
  id: "kr_au",
  asOf: "2026-10-12",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "kr_au-1", kind: "relation", asOf: "2026-10-12",
      title: "Kapyong and the Korean War",
      dek: "Australia helped oversee South Korea's first election in 1948 and was among the first countries to send forces when North Korea invaded in 1950. Its soldiers' stand at Kapyong is still remembered in both countries.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr_au/kr_au-1-hero.webp",
          alt: "Illustration of steep wooded hills above a river valley in spring, a few soldiers on a ridge.",
          caption: "Australian troops held the hills above the Kapyong valley in April 1951.",
          credit: "Illustration — not a photograph",
          prompt: "Steep rocky wooded hills above a narrow river valley in Korea in early spring, a few small distant soldiers dug in along a ridge, morning mist in the valley, historical documentary painting style, no faces, no flags, no legible text." },
        { type: "timeline", head: "Allies in war", items: [
          ["1947–48", "Australia sits on the UN commission for Korean elections"],
          ["Jun 1950", "North Korea invades; Australia commits forces"],
          ["Apr 1951", "Battle of Kapyong"],
          ["1953", "Armistice; about 340 Australians killed in the war"],
          ["1961", "Diplomatic relations established"],
          ["1965–73", "Both send troops to the Vietnam War"]
        ] },
        { type: "section", head: "Watching an election", md:
          "After the Second World War Korea was divided between Soviet and American occupation zones. In 1947 the United Nations set up a temporary commission to oversee elections across Korea, and Australia was one of its members. The Soviet side refused to cooperate, so elections were held only in the south in May 1948, creating the Republic of Korea. Australia's delegates had doubts about holding a vote in only half the country, but Canberra recognised the new state." },
        { type: "section", head: "Into the war", md:
          "When North Korea invaded on 25 June 1950, Australia, under Prime Minister Robert Menzies, quickly committed ships, a fighter squadron already based in Japan and then infantry. About 17,000 Australians served in the Korean War, and about 340 were killed. They fought in the bitter winter retreat of 1950, in the hills of central Korea and later in the long stalemate along what became the demilitarised zone." },
        { type: "section", head: "Kapyong", md:
          "In April 1951 Chinese forces broke through the line north of Seoul. In the Kapyong valley, the 3rd Battalion, Royal Australian Regiment, and Canadian troops held hilltops through two nights of attacks, blocking an advance towards the capital. The Australian battalion received a United States Presidential Unit Citation. Kapyong is commemorated each year by the Australian Army, and South Korea honours Australian veterans, many of whom have returned to visit the country they fought for." },
        { type: "section", head: "Cold War partners", md:
          "The two countries established diplomatic relations in 1961. Both were close US allies; both sent troops to fight in Vietnam in the 1960s and 1970s. As South Korea industrialised under military rule, Australia became an important supplier of the raw materials its new steel mills and shipyards needed, and trade began to grow quickly." },
        { type: "section", head: "Remembering", md:
          "Australia's Korean War memorial stands on Anzac Parade in Canberra, and many Australian dead are buried at the UN Memorial Cemetery in Busan, the only UN military cemetery in the world. Each November South Korea holds a ceremony there in which the world turns towards Busan to remember the fallen. Australian veterans and their families are regularly invited to Korea at the government's expense, and Korean leaders visiting Canberra lay wreaths at the memorial." },
        { type: "compare", head: "A shared war",
          left: { head: "South Korea", md:
            "Remembers Australia as one of the countries that saved it in 1950." },
          right: { head: "Australia", md:
            "Remembers Kapyong as one of its army's proudest battles." } },
        { type: "section", head: "Why it matters", md:
          "The Korean War made Australia and South Korea allies by experience, not just by treaty. That shared memory underpins a partnership that today runs from iron ore to tanks." }
      ],
      takeaways: [
        "Australia sat on the UN commission that oversaw South Korea's first election in 1948.",
        "About 17,000 Australians served in the Korean War and about 340 were killed.",
        "At Kapyong in April 1951 Australian and Canadian troops blocked a Chinese advance towards Seoul."
      ],
      check: { q: "What happened at Kapyong in April 1951?",
        choices: ["The Korean armistice was signed", "Australian and Canadian troops held off a Chinese offensive", "Australia and South Korea opened embassies"], answer: 1,
        explain: "The Australian battalion received a US Presidential Unit Citation." },
      sources: [
        { title: "Korean War, 1950–53", publisher: "Australian War Memorial", url: "https://www.awm.gov.au/articles/event/korea", date: "n.d." },
        { title: "Battle of Kapyong", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Battle_of_Kapyong", date: "n.d." },
        { title: "Australia–South Korea relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Australia%E2%80%93South_Korea_relations", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "kr_au-2", kind: "relation", asOf: "2026-10-12",
      title: "Iron ore, coal and KAFTA",
      dek: "Australian iron ore, coal and gas helped build South Korea's industries, and Korea became one of Australia's biggest markets. A free trade agreement came in 2014.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr_au/kr_au-2-hero.webp",
          alt: "Illustration of a huge bulk carrier loading red iron ore at a long jetty in a dry red landscape.",
          caption: "Iron ore from Western Australia feeds South Korea's steel mills.",
          credit: "Illustration — not a photograph",
          prompt: "A huge bulk carrier ship loading red iron ore from a long conveyor jetty on a hot red-earth coast in Western Australia, stockpiles and a train of ore wagons on shore, clear blue sky, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Building a trade", items: [
          ["1970s", "Australian ore and coal feed POSCO's new steelworks"],
          ["1990s", "Korea becomes one of Australia's top export markets"],
          ["Apr 2014", "Free trade agreement signed in Seoul"],
          ["Dec 2014", "KAFTA comes into force"],
          ["2021", "Comprehensive Strategic Partnership; K9 howitzer deal"],
          ["Nov 2025", "Albanese attends APEC in Gyeongju"]
        ] },
        { type: "section", head: "Steel and coal", md:
          "South Korea's industrial boom from the 1970s depended on imported raw materials, because it has almost none of its own. Its national steelmaker, POSCO, founded in 1968, bought iron ore and coking coal from Australia from its early years and later invested in Australian mines, including a stake in the Roy Hill iron ore project. Korea's power stations burned Australian thermal coal, and from the 2000s its cities also ran on Australian liquefied natural gas. Today Korea is consistently among Australia's top four export markets." },
        { type: "section", head: "KAFTA", md:
          "In April 2014 Prime Minister Tony Abbott flew to Seoul to sign the Korea–Australia Free Trade Agreement, known as KAFTA, which came into force in December that year. It cut tariffs on Australian beef, wine and dairy and on Korean cars, electronics and machinery. Korean brands such as Hyundai, Kia, Samsung and LG became household names in Australia. Abbott was the last Australian prime minister to visit Korea for eleven years." },
        { type: "section", head: "People", md:
          "Tens of thousands of Korean students study in Australia, and Korea is one of the largest sources of working holiday makers, young people who work on farms and in cafés. A Korean-Australian community of well over 100,000 people lives mostly in Sydney. In the other direction K-pop and Korean film and food have become hugely popular with young Australians." },
        { type: "section", head: "Security", md:
          "In 2013 the two began regular meetings of foreign and defence ministers, a format Australia keeps only with close partners. In December 2021 President Moon Jae-in made a state visit to Canberra, the first by a foreign leader after Australia reopened its borders during COVID. The two raised ties to a Comprehensive Strategic Partnership, and Australia signed a deal worth about one billion Australian dollars for K9 self-propelled howitzers from the Korean firm Hanwha, to be built in Geelong, Victoria." },
        { type: "section", head: "Distance", md:
          "Despite the trade, Australia's leaders visited Korea rarely for years, and analysts complained that Canberra paid more attention to China, Japan and India. In November 2025 Anthony Albanese attended the APEC summit in Gyeongju, the first Australian prime minister to visit since 2014. Both governments also want to cooperate on hydrogen, critical minerals and battery supply chains, as Korean firms look for alternatives to Chinese processing of lithium and rare earths." },
        { type: "compare", head: "What they trade",
          left: { head: "Australia sells", md:
            "Iron ore, coal, gas, beef and education." },
          right: { head: "Korea sells", md:
            "Cars, refined fuel, electronics, steel and weapons." } },
        { type: "section", head: "Why it matters", md:
          "South Korea is one of Australia's most important customers, and Australia one of Korea's most important suppliers of energy and minerals. Their economies fit together like few others." }
      ],
      takeaways: [
        "Australian iron ore, coal and gas helped build South Korea's steel and power industries.",
        "KAFTA, signed in April 2014, came into force in December 2014.",
        "In 2021 Australia ordered K9 howitzers from Hanwha, to be built in Geelong."
      ],
      check: { q: "What did Tony Abbott sign in Seoul in April 2014?",
        choices: ["A defence treaty", "The Korea–Australia Free Trade Agreement", "A nuclear energy deal"], answer: 1,
        explain: "KAFTA cut tariffs on beef and wine one way, and cars and electronics the other." },
      sources: [
        { title: "Korea–Australia Free Trade Agreement", publisher: "Australian Department of Foreign Affairs and Trade", url: "https://www.dfat.gov.au/trade/agreements/in-force/kafta/korea-australia-fta", date: "n.d." },
        { title: "Beyond BTS: a mic drop moment for Australia–Korea relations", publisher: "Asialink, University of Melbourne", url: "https://asialink.unimelb.edu.au/diplomacy/insights/beyond-bts-mic-drop-moment-australia-korea-relations/", date: "2026-06" },
        { title: "Australia–South Korea relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Australia%E2%80%93South_Korea_relations", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "kr_au-3", kind: "relation", asOf: "2026-10-12",
      title: "Redbacks, frigates and Hormuz",
      dek: "Korean arms maker Hanwha won big Australian army contracts but lost the navy's frigate competition to Japan. In September 2026, after the Hormuz crisis, the two leaders promised each other energy security.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/kr_au/kr_au-3-hero.webp",
          alt: "Illustration of armoured tracked vehicles lined up outside a new factory beside a bay at dawn.",
          caption: "Hanwha builds armoured vehicles and howitzers at Geelong, Victoria.",
          credit: "Illustration — not a photograph",
          prompt: "A row of olive-green tracked infantry fighting vehicles lined up outside a large new factory building beside a calm bay at dawn, a few gum trees, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Arms and energy", items: [
          ["Jul 2023", "Hanwha's Redback wins Australia's infantry vehicle contest"],
          ["Nov 2024", "Korean designs cut from the frigate contest"],
          ["Aug 2025", "Australia picks Japan's Mogami frigate"],
          ["Dec 2025", "Hanwha cleared to own 19.9% of shipbuilder Austal"],
          ["Feb 2026", "Austal wins a A$4 billion landing craft contract"],
          ["22 Sep 2026", "Lee and Albanese meet in New York"]
        ] },
        { type: "section", head: "Redbacks", md:
          "In July 2023 Australia chose Hanwha's Redback, named after an Australian spider, as its new infantry fighting vehicle, ordering 129 of them over a German rival. They are being built at Hanwha's factory at Avalon near Geelong, alongside the K9 howitzers ordered in 2021. Korea, whose arms industry has grown fast since the 2010s, has become one of Australia's main suppliers of armoured vehicles and artillery, and Hanwha says it wants to export from Australia too. The deals created hundreds of local jobs and gave Korea a foothold in Australia's defence industry that few foreign firms have." },
        { type: "section", head: "A lost frigate", md:
          "Korea hoped to go further. Hanwha Ocean and Hyundai Heavy Industries offered designs for Australia's new general-purpose frigates, a program worth about ten billion Australian dollars. In November 2024 both were cut from the shortlist, and in August 2025 Australia chose an upgraded version of Japan's Mogami-class frigate, Japan's first major warship export. It was a disappointment in Seoul, where shipbuilders consider themselves among the world's best." },
        { type: "section", head: "Austal", md:
          "Hanwha then bought into Austal, the Perth shipbuilder that will build eight of the Mogami frigates in Western Australia. In December 2025 Australia allowed Hanwha to lift its stake from 9.9 to 19.9 per cent, under strict conditions limiting its access to sensitive information. Japan worried about the security of its frigate technology. In February 2026 Austal won a contract worth about four billion Australian dollars to build heavy landing craft for the army." },
        { type: "section", head: "The Hormuz crisis", md:
          "The 2026 war with Iran disrupted oil and gas shipments through the [[Strait of Hormuz]], hitting energy importers like South Korea hard. On 22 September 2026, on the sidelines of the UN General Assembly in New York, President Lee Jae-myung thanked Albanese for Australian help in keeping Korea's energy market stable. The two agreed to expand cooperation on energy supply chains, critical minerals and defence, and to pursue a visit by Lee to Australia in the first half of 2027. It was their third meeting since Lee took office in 2025." },
        { type: "compare", head: "What each brings",
          left: { head: "South Korea", md:
            "Fast, affordable weapons production and a huge market for energy and minerals." },
          right: { head: "Australia", md:
            "Gas, coal, ore and critical minerals, and a stable supplier far from Hormuz." } },
        { type: "section", head: "Why it matters", md:
          "South Korea and Australia are both US allies building their own defence industries. The Hormuz crisis showed how much Korea depends on Australian energy, while the frigate contest showed Seoul and Tokyo competing for Australia's favour." }
      ],
      takeaways: [
        "Australia ordered 129 Hanwha Redback vehicles in 2023, built near Geelong with K9 howitzers.",
        "Korean designs lost Australia's frigate contest to Japan's Mogami in 2025; Hanwha now owns 19.9% of Austal.",
        "Lee and Albanese agreed in September 2026 to deepen energy, minerals and defence cooperation after the Hormuz crisis."
      ],
      check: { q: "Which country's design won Australia's new frigate competition in 2025?",
        choices: ["South Korea", "Japan", "Germany"], answer: 1,
        explain: "Australia chose an upgraded Mogami-class frigate; Korean designs were cut in 2024." },
      sources: [
        { title: "Lee, Australia's Albanese agree to expand energy, defense ties", publisher: "Seoul Economic Daily", url: "https://en.sedaily.com/politics/2026/09/23/lee-australias-albanese-agree-to-expand-energy-defense-ties", date: "2026-09-23" },
        { title: "Leaders of Korea, Australia agree to boost cooperation for stable energy supply", publisher: "The Korea Times", url: "https://www.koreatimes.co.kr/amp/foreignaffairs/20260923/leaders-of-korea-australia-agree-to-boost-cooperation-for-stable-energy-supply", date: "2026-09-23" },
        { title: "Australia approves Hanwha stake increase in Austal, raising Japan's technology concerns", publisher: "Naval News", url: "https://www.navalnews.com/naval-news/2025/12/australia-approves-hanwha-stake-increase-in-austal-raising-japans-technology-concerns/", date: "2025-12" },
        { title: "Hanwha-backed Austal wins $2.8 billion Australian defense contract", publisher: "KED Global", url: "https://www.kedglobal.com/shipping-shipbuilding/newsView/ked202602230009", date: "2026-02-23" }
      ]
    }
  ]
});
