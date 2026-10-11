/* ============================================================
   Relationship — Australia & India 🇦🇺🇮🇳
   Empire, cricket, the White Australia policy and the chill after
   India's 1998 nuclear tests; students, a diaspora and a long
   fight over uranium; and the Quad, a trade deal and the 2026
   Melbourne summit.
   Research note and sources: tools/research/au_in.md
   Current as of 11 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("au_in", {
  id: "au_in",
  asOf: "2026-10-11",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "au_in-1", kind: "relation", asOf: "2026-10-11",
      title: "Empire, cricket and distance",
      dek: "Both were British colonies and both love cricket, but for half a century after 1947 Australia and India mostly looked past each other. India's nuclear tests in 1998 made things worse.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/au_in/au_in-1-hero.webp",
          alt: "Illustration of a cricket match in a vast oval stadium under floodlights at dusk, players small on the green field.",
          caption: "Cricket has long been the strongest bond between the two countries.",
          credit: "Illustration — not a photograph",
          prompt: "A cricket match in a vast oval stadium under tall floodlights at dusk, tiny white-clad players on a bright green field, packed stands in shadow, a purple and orange sky, documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "Distant cousins", items: [
          ["1901", "Australia federates; the White Australia policy begins"],
          ["1947", "India becomes independent"],
          ["1950s–70s", "Cold War: Australia with the US, India non-aligned"],
          ["1973", "Australia formally ends the White Australia policy"],
          ["May 1998", "India tests nuclear weapons; Australia condemns them"],
          ["2001", "The Kolkata Test, one of cricket's great matches"]
        ] },
        { type: "section", head: "Colonies of one empire", md:
          "Australia and India were both ruled from London, and their soldiers served side by side in both world wars, including at Gallipoli in 1915. Indians had come to Australia in the 19th century as hawkers, cameleers and farm workers. But from federation in 1901, the White Australia policy restricted non-European immigration, and Indians were among those kept out. The policy was dismantled from the 1960s and formally ended in 1973." },
        { type: "section", head: "Different paths", md:
          "After 1947 the two drifted apart. Australia tied its security to Britain and then the United States, joining the ANZUS alliance in 1951 and fighting in Korea and Vietnam. India, under Jawaharlal Nehru, led the Non-Aligned Movement, bought weapons from the Soviet Union and distrusted Western alliances. Australia's leaders saw India as poor and distant; India saw Australia as an outpost of the West. Trade was small, and few leaders visited." },
        { type: "section", head: "Cricket", md:
          "What did connect them was cricket. Indian and Australian teams have played each other since 1947, and their rivalry became one of the sport's fiercest. A Test match in Kolkata in 2001, which India won after being forced to follow on, is still celebrated in both countries. Players such as Sachin Tendulkar and Shane Warne became household names in each other's countries, and today India's huge audience and the Indian Premier League shape the game's economics." },
        { type: "section", head: "The 1998 tests", md:
          "When India tested nuclear weapons in May 1998, Australia's government, a strong supporter of the Nuclear Non-Proliferation Treaty, condemned the tests, recalled its high commissioner for consultations and cut back defence contacts. It refused to sell uranium to India, which had not signed the treaty. Relations returned to normal within about two years, with defence talks in 2000 and a prime ministerial visit, but the uranium question would take much longer to settle." },
        { type: "section", head: "Changing views", md:
          "From the 1990s India's economic opening (see [[lesson:in-11]]) began to change Australian minds. Indian students, tourists and skilled migrants started to arrive, and Australian mining companies saw a new market for coal. In 2006 Prime Minister John Howard visited New Delhi, and his successor Kevin Rudd, a Mandarin speaker, was criticised for focusing on China instead." },
        { type: "compare", head: "Why they kept apart",
          left: { head: "Australia", md:
            "Looked to Britain, America and East Asia for security and trade." },
          right: { head: "India", md:
            "Non-aligned, close to Moscow, and focused on its own region." } },
        { type: "section", head: "Why it matters", md:
          "The two countries share an ocean, a language of government and a love of cricket, but it took the rise of China and India's economic growth to turn distant cousins into partners." }
      ],
      takeaways: [
        "Both were British colonies, but the White Australia policy kept Indians out until it ended in the 1960s and 1970s.",
        "During the Cold War Australia allied with the US while India was non-aligned; cricket was their main link.",
        "Australia condemned India's 1998 nuclear tests and refused to sell it uranium."
      ],
      check: { q: "Why did Australia refuse to sell uranium to India after 1998?",
        choices: ["India banned Australian imports", "India had tested nuclear weapons and had not signed the Non-Proliferation Treaty", "Australia had no uranium mines"], answer: 1,
        explain: "The question took until 2014, and then 2026, to settle." },
      sources: [
        { title: "India-Australia security relations: They've only just begun", publisher: "Lowy Institute", url: "https://www.lowyinstitute.org/the-interpreter/india-australia-security-relations-they-ve-only-just-begun", date: "n.d." },
        { title: "The 1998 Pokhran nuclear tests: reactions and responses from the Indo-Pacific", publisher: "Observer Research Foundation", url: "https://www.orfonline.org/expert-speak/the-1998-pokhran-nuclear-tests", date: "n.d." },
        { title: "India-Australia Ties Have Evolved. Build on Them Now", publisher: "ORF America", url: "https://orfamerica.org/newresearch/india-australia-ties-have-evolved-build-on-them-now", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "au_in-2", kind: "relation", asOf: "2026-10-11",
      title: "Students, a diaspora and uranium",
      dek: "Indians became one of Australia's largest migrant groups, despite a wave of attacks on students in 2009. A uranium deal signed in 2014 took twelve more years to deliver.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/au_in/au_in-2-hero.webp",
          alt: "Illustration of students walking across a sunny university quadrangle with sandstone buildings and jacaranda trees.",
          caption: "Indian students are among the largest groups at Australian universities.",
          credit: "Illustration — not a photograph",
          prompt: "Students with backpacks walking across a sunny university quadrangle with sandstone buildings and arched cloisters, purple jacaranda trees in bloom, long shadows, documentary painting style, figures small and seen from behind, no flags, no legible text." },
        { type: "timeline", head: "People and minerals", items: [
          ["2000s", "Indian student numbers in Australia surge"],
          ["2009", "Attacks on Indian students in Melbourne spark protests"],
          ["Dec 2011", "Labor drops the ban on uranium sales to India"],
          ["Sep 2014", "Civil nuclear cooperation agreement signed"],
          ["2022", "ECTA trade agreement takes effect"],
          ["Jul 2026", "Framework agreed; uranium exports can begin"]
        ] },
        { type: "section", head: "Students and attacks", md:
          "In the 2000s Australian universities, short of public funding, recruited heavily overseas, and Indian students arrived in large numbers. In 2009 a series of violent attacks and robberies against Indian students in Melbourne and Sydney caused outrage in India, where television channels accused Australia of racism. Thousands of students protested in Melbourne. Australian police said most attacks were opportunistic crime rather than racially motivated, a distinction many Indians rejected. Student numbers dropped for a time, then recovered." },
        { type: "section", head: "A growing diaspora", md:
          "Indians have since become one of Australia's largest and fastest-growing migrant communities. More than 900,000 residents were born in India, and many more have Indian heritage. Indian-born Australians work as doctors, engineers, IT specialists and small-business owners, and Hindi and Punjabi are among the most spoken languages after English. Politicians of both main parties court the community, and Indian festivals such as Diwali are celebrated in parliament." },
        { type: "section", head: "The uranium fight", md:
          "Australia holds about a third of the world's known uranium, and India wanted it for its nuclear power plants. Labor governments refused to sell to a country outside the Non-Proliferation Treaty. In December 2011, after a fierce debate, Julia Gillard persuaded her party to lift the ban, arguing India had a strong non-proliferation record. Prime Ministers Tony Abbott and Narendra Modi signed a civil nuclear agreement in September 2014, but implementing it took years of talks over safeguards and terms." },
        { type: "section", head: "Trade", md:
          "India buys Australian coal, gold, education and gas, and sells medicines, textiles and services. In 2022 an interim Economic Cooperation and Trade Agreement, ECTA, cut tariffs on most goods; two-way trade has grown since. Negotiators are working on a fuller Comprehensive Economic Cooperation Agreement, CECA." },
        { type: "section", head: "Coal and climate", md:
          "Australian coal fuels Indian steel mills and power stations. One Indian company, Adani, built a large and controversial coal mine in Queensland, the Carmichael mine, which became a symbol for Australian climate protesters. Its first coal was shipped to India in December 2021, after a decade of legal battles, protests and a fight over the mine's water use and its threat to the Great Barrier Reef." },
        { type: "compare", head: "Two sides of the people link",
          left: { head: "Bridge", md:
            "A large, successful diaspora that ties the two countries together." },
          right: { head: "Friction", md:
            "Racism, visa rules and the treatment of students cause recurring tension." } },
        { type: "section", head: "Why it matters", md:
          "People, not governments, built much of the relationship. The diaspora, students and trade now give it a weight it lacked for most of the 20th century." }
      ],
      takeaways: [
        "Attacks on Indian students in 2009 caused outrage in India, but student numbers recovered.",
        "More than 900,000 Australian residents were born in India, one of the largest migrant groups.",
        "Australia lifted its uranium ban in 2011 and signed a nuclear deal in 2014; exports could begin only from 2026."
      ],
      check: { q: "What did Julia Gillard persuade her party to do in December 2011?",
        choices: ["Ban Indian students", "Lift the ban on selling uranium to India", "Join the Quad"], answer: 1,
        explain: "A civil nuclear agreement followed in 2014." },
      sources: [
        { title: "Australia, India Sign Uranium Deal", publisher: "Arms Control Association", url: "https://www.armscontrol.org/act/2014-10/news/australia-india-sign-uranium-deal", date: "2014-10" },
        { title: "The India-Australia Civil Nuclear Cooperation Agreement", publisher: "Australian Institute of International Affairs", url: "https://www.internationalaffairs.org.au/australianoutlook/the-india-australia-civil-nuclear-cooperation-agreement-future-challenges-and-current-scenarios/", date: "n.d." },
        { title: "Australia Clears Path to Export Uranium to India", publisher: "Arms Control Association", url: "https://www.armscontrol.org/act/2026-09/news/australia-clears-path-export-uranium-india", date: "2026-09" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "au_in-3", kind: "relation", asOf: "2026-10-11",
      title: "The Quad and the Melbourne summit",
      dek: "China's rise has made Australia and India strategic partners. They exercise together, sit in the Quad with the US and Japan, and at a July 2026 summit agreed new defence ties and uranium sales.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/au_in/au_in-3-hero.webp",
          alt: "Illustration of an aircraft carrier and a frigate sailing together on a calm blue ocean, a helicopter overhead.",
          caption: "The two navies exercise together in the Indian Ocean and the Pacific.",
          credit: "Illustration — not a photograph",
          prompt: "A large aircraft carrier and a grey frigate sailing in formation on a calm deep-blue ocean under a clear sky, a helicopter flying overhead, long wakes, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From partners to allies of a kind", items: [
          ["2017", "The Quad is revived with the US and Japan"],
          ["Jun 2020", "Comprehensive Strategic Partnership; logistics pact"],
          ["Nov 2020", "Australia rejoins the Malabar naval exercise"],
          ["Dec 2022", "ECTA trade agreement in force"],
          ["Jul 2026", "Third annual summit, in Melbourne"],
          ["Jul 2026", "Joint Declaration on Defence and Security Cooperation"]
        ] },
        { type: "section", head: "The China factor", md:
          "What turned the relationship around was China. Australia's relations with Beijing collapsed after 2020 (see [[lesson:au_cn-2]]), and India's soldiers clashed with Chinese troops in the Himalayas the same year (see [[lesson:cn_in-1]]). Both concluded that a stronger partnership made sense. In June 2020 they signed a Comprehensive Strategic Partnership and a deal letting each military use the other's bases for logistics." },
        { type: "section", head: "The Quad and Malabar", md:
          "Australia and India are members, with the United States and Japan, of the [[Quad]], a grouping revived in 2017 that holds leaders' summits on maritime security, technology, vaccines and supply chains. China calls it an 'Asian NATO', which its members deny. In 2020 Australia rejoined Malabar, a naval exercise with India, the US and Japan that it had left in 2008 partly to avoid upsetting China. Australian aircraft now patrol from Indian bases, and the two navies share information on ships in the Indian Ocean." },
        { type: "section", head: "Annual summits", md:
          "Since 2023 the prime ministers have held annual summits. Anthony Albanese visited India in March 2023 and stood on the deck of the aircraft carrier INS Vikrant. The third summit was held in Melbourne on 9 July 2026. The leaders signed a Joint Declaration on Defence and Security Cooperation and agreed more joint exercises, maritime surveillance and defence technology projects. They also agreed a framework to implement the 2014 nuclear deal, so Australian uranium exports to India can finally begin." },
        { type: "section", head: "Trade talks", md:
          "Modi and Albanese agreed in Melbourne to accelerate talks on a Comprehensive Economic Cooperation Agreement, building on the 2022 ECTA, and on critical minerals such as lithium, which India wants for batteries and Australia mines in abundance. No date has been set for a deal." },
        { type: "section", head: "Limits", md:
          "India still buys Russian oil and weapons and refuses formal alliances, while Australia is bound to the United States by treaty and AUKUS. Both are also adjusting to Trump's tariffs (see [[lesson:in-6]]). Indian officials have sometimes complained about Australian visa delays and the treatment of students, and Australian officials about Indian trade barriers on farm goods such as dairy and wine. Each wants the other more than it can always admit." },
        { type: "compare", head: "What each wants",
          left: { head: "Australia", md:
            "A strong Indian Ocean partner to balance China, and a big market." },
          right: { head: "India", md:
            "Uranium, critical minerals, education and a reliable security partner." } },
        { type: "section", head: "Why it matters", md:
          "Together the two countries watch over the eastern Indian Ocean, through which much of the world's trade passes. Their partnership is now one of the pillars of the Indo-Pacific balance with China." }
      ],
      takeaways: [
        "China's rise drew Australia and India together; they signed a strategic partnership and logistics pact in 2020.",
        "Both are in the Quad with the US and Japan; Australia rejoined the Malabar naval exercise in 2020.",
        "At the July 2026 Melbourne summit they agreed a defence declaration and a framework for uranium exports."
      ],
      check: { q: "Which grouping includes Australia, India, Japan and the United States?",
        choices: ["AUKUS", "The Quad", "BRICS"], answer: 1,
        explain: "AUKUS is Australia, the UK and the US." },
      sources: [
        { title: "Strengthening cooperation on defence and security with India", publisher: "Australian Minister for Defence", url: "https://www.minister.defence.gov.au/media-releases/2026-07-09/strengthening-cooperation-defence-security-india", date: "2026-07-09" },
        { title: "PM Modi hails 'unparalleled outcomes' with Albanese", publisher: "ANI", url: "https://aninews.in/news/world/pacific/pm-modi-hails-unparalleled-outcomes-with-albanese-as-india-australia-strategic-partnership-hits-new-milestones20260709125056/", date: "2026-07-09" },
        { title: "Australia PM Albanese reinforces defence ties on board INS Vikrant", publisher: "Gulf News", url: "https://gulfnews.com/amp/world/asia/india/australia-pm-albanese-reinforces-defence-ties-on-board-ins-vikrant-1.94346926", date: "2023-03" },
        { title: "India's Modi to meet Australia's Albanese with uranium, defence on agenda", publisher: "WHBL (Reuters)", url: "https://whbl.com/2026/07/08/indias-modi-to-meet-australias-albanese-with-uranium-defence-on-agenda/", date: "2026-07-08" }
      ]
    }
  ]
});
