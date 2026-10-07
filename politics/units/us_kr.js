/* ============================================================
   Relationship — United States & South Korea 🇺🇸🇰🇷
   An alliance forged in the Korean War; American troops and
   the nuclear umbrella, and fights over who pays and over
   THAAD; and Trump's second term: nuclear submarines, command
   of the army and cut-back drills after Seoul said no on Iran.
   Tariffs and the $350 billion deal are in kr-6.
   Research note and sources: tools/research/us_kr.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("us_kr", {
  id: "us_kr",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_kr-1", kind: "relation", asOf: "2026-09-30",
      title: "An alliance forged in blood",
      dek: "American troops saved South Korea from conquest in 1950 and never left. In return South Korea sent 320,000 soldiers to fight beside America in Vietnam.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_kr/us_kr-1-hero.webp",
          alt: "Illustration of soldiers in winter coats marching along a snowy mountain road in Korea in the 1950s.",
          caption: "More than 36,000 Americans died in the Korean War of 1950–53.",
          credit: "Illustration — not a photograph",
          prompt: "A column of 1950s soldiers in heavy winter coats and helmets marching along a snowy mountain road in Korea, bare trees and grey sky, breath visible in the cold, a jeep in the distance, historical documentary painting style, faces not visible, no flags, no legible text." },
        { type: "timeline", head: "Forging the alliance", items: [
          ["Jun 1950", "North Korea invades; US and UN forces intervene"],
          ["Jul 1953", "Armistice ends the fighting"],
          ["1 Oct 1953", "US–South Korea Mutual Defense Treaty signed"],
          ["1964–73", "About 320,000 South Koreans serve in Vietnam"],
          ["1977", "Carter plans to withdraw US ground troops"],
          ["1979", "The plan is shelved after opposition in Washington"]
        ] },
        { type: "section", head: "Saved by America", md:
          "When North Korea invaded in June 1950 (see [[lesson:kp-10]]), South Korea's army collapsed within days. President Harry Truman sent American troops under a United Nations flag, and they held a small pocket around Busan, then landed at Incheon and drove north, before China's intervention pushed them back. The war ended in an armistice in July 1953, with no peace treaty. More than 36,000 Americans died, and hundreds of thousands of Korean soldiers and civilians. American aid then helped rebuild a devastated country, which in the 1950s was poorer than many African states. South Korea's president, Syngman Rhee, refused to accept the armistice unless America promised to stay, and on 1 October 1953 the two signed a Mutual Defense Treaty that allows American forces to be based in South Korea." },
        { type: "section", head: "Vietnam and dictators", md:
          "For decades the alliance tied American democracy to South Korean dictatorship. General Park Chung-hee, who seized power in 1961 (see [[lesson:kr-10]]), feared America might pull out, so he offered troops for Vietnam. From 1964 to 1973 about 320,000 South Koreans served there, the largest foreign contingent after America's own, in return for aid, military modernisation and business contracts that helped build Korean industry. Washington also tolerated Park's harsh rule, and in 1980, when the army crushed a democratic uprising in Gwangju (see [[lesson:kr-11]]), many Koreans blamed the United States for letting it happen, fuelling anti-Americanism among students." },
        { type: "section", head: "Carter's plan", md:
          "The troops' presence has been questioned by American presidents too. Jimmy Carter campaigned in 1976 on withdrawing US ground forces, and on 9 March 1977 he announced they would leave over four to five years. It alarmed Seoul and Tokyo. Congress, the Pentagon and intelligence agencies pushed back, especially after new estimates showed North Korea's army was much larger than thought, and in 1979 Carter shelved the plan with only a few thousand troops withdrawn. The episode showed that the American presence depended on presidents, and it is remembered in Seoul whenever a president talks of pulling out." },
        { type: "compare", head: "What the alliance means",
          left: { head: "A blood alliance", md:
            "America saved South Korea in 1950 and made its prosperity possible. The alliance is a shared commitment." },
          right: { head: "An unequal one", md:
            "Washington backed dictators when it suited it, and South Korea's security depends on the choices of a foreign president." } },
        { type: "section", head: "Why it matters", md:
          "South Korea faces a nuclear-armed North Korea across a border 50 kilometres from Seoul. The American treaty and troops remain the core of its defence." }
      ],
      takeaways: [
        "US forces saved South Korea in 1950; the 1953 treaty keeps American troops there.",
        "About 320,000 South Koreans fought in Vietnam alongside America under Park Chung-hee.",
        "Carter's 1977 plan to withdraw ground troops was shelved after opposition in Washington."
      ],
      check: { q: "What did South Korea do during the Vietnam War?",
        choices: ["It stayed neutral", "It sent about 320,000 soldiers to fight beside America", "It sided with North Vietnam"], answer: 1,
        explain: "Park Chung-hee sent troops to keep America committed, and gained aid and contracts in return." },
      sources: [
        { title: "US-Korea Military Alliance", publisher: "Wilson Center Digital Archive", url: "https://digitalarchive.wilsoncenter.org/essays/us-korea-military-alliance", date: "n.d." },
        { title: "How Park Chung-hee Made the Most of the South Korea-US Vietnam War Alliance", publisher: "E-International Relations", url: "https://www.e-ir.info/2017/07/09/how-park-chung-hee-made-the-most-of-the-south-korea-us-vietnam-war-alliance/", date: "2017-07-09" },
        { title: "How the 'Deep State' Stopped a US President From Withdrawing US Troops From Korea", publisher: "The Diplomat", url: "https://thediplomat.com/2018/06/how-the-deep-state-stopped-a-us-president-from-withdrawing-us-troops-from-korea/", date: "2018-06" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_kr-2", kind: "relation", asOf: "2026-09-30",
      title: "Protection and its price",
      dek: "America keeps 28,500 troops in South Korea and promises to defend it with nuclear weapons if needed. Who pays, and how much it angers China, are constant arguments.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_kr/us_kr-2-hero.webp",
          alt: "Illustration of a missile-defence radar and launcher trucks on a hilltop surrounded by fields and a small village.",
          caption: "America's THAAD missile-defence system was installed on a former golf course in 2017.",
          credit: "Illustration — not a photograph",
          prompt: "A large missile-defence radar and several launcher trucks on a cleared green hilltop, rice fields and a small Korean village with tiled roofs in the valley below, misty mountains behind, overcast light, documentary style, no people, no flags, no legible text." },
        { type: "facts", head: "The alliance today", rows: [
          ["US Forces Korea", "About 28,500 troops, mainly at Camp Humphreys"],
          ["Nuclear weapons", "Withdrawn from Korea in 1991; 'extended deterrence' from US forces"],
          ["THAAD", "Deployed 2017; China retaliates against Lotte and tourism"],
          ["Cost-sharing", "Seoul pays part of the cost of US troops, renegotiated every few years"],
          ["Wartime command", "A US general would lead combined forces in a war"]
        ] },
        { type: "section", head: "Troops and the nuclear umbrella", md:
          "About 28,500 American troops are based in South Korea, most at Camp Humphreys, south of Seoul, the largest American base abroad. America kept nuclear weapons in South Korea until 1991, when President George H. W. Bush withdrew them. Since then the country has relied on 'extended deterrence': the promise that America would use its own nuclear forces to defend it. As North Korea built its own bombs (see [[lesson:kp-3]]), many South Koreans started to doubt that promise, and polls regularly show majorities in favour of South Korea getting its own nuclear weapons. Washington has tried to reassure Seoul with visits by nuclear-armed submarines and bombers, and in 2023 the two set up a Nuclear Consultative Group to plan together." },
        { type: "section", head: "THAAD and China", md:
          "In 2016 Seoul agreed to host an American missile-defence system, THAAD, to shoot down North Korean missiles. China objected fiercely, saying its powerful radar could see deep into Chinese territory. In 2017 the conglomerate Lotte swapped a golf course for land so the system could be installed there, and China retaliated: Chinese companies boycotted Lotte, dozens of its stores in China were closed by the authorities, and group tours from China to South Korea were halted. Lotte eventually sold its Chinese supermarkets. The episode showed how the alliance can make South Korea a target of Chinese economic pressure." },
        { type: "section", head: "Who pays?", md:
          "South Korea contributes about a billion dollars a year towards the cost of American troops, set in 'special measures agreements'. In his first term Donald Trump demanded a fivefold increase, and after meeting Kim Jong Un in Singapore in 2018 he suspended large joint exercises, calling them 'very expensive' and 'provocative' (see [[lesson:kr_kp-1]]). Seoul signed a new deal with Joe Biden in 2024, but Trump has since said South Korea should pay $10 billion a year. In wartime, command of combined American and Korean forces would still go to an American general, a legacy of the Korean War that South Korea's left has long wanted to change." },
        { type: "compare", head: "A fair bargain?",
          left: { head: "Washington's hawks", md:
            "American troops protect a rich country; South Korea should pay far more and do more against China." },
          right: { head: "Seoul's view", md:
            "The troops also serve American interests in Asia, and South Korea already pays for bases and buys American weapons." } },
        { type: "section", head: "Why it matters", md:
          "If South Koreans lose faith in the American nuclear umbrella, pressure to build their own bomb will grow, with effects across Asia." }
      ],
      takeaways: [
        "About 28,500 US troops are in South Korea; US nuclear weapons were withdrawn in 1991.",
        "Hosting THAAD in 2017 brought Chinese boycotts of Lotte and a halt to tour groups.",
        "Trump has repeatedly demanded that Seoul pay far more for American troops."
      ],
      check: { q: "What happened after South Korea deployed THAAD in 2017?",
        choices: ["China joined the system", "China retaliated against Lotte and stopped group tours", "North Korea disarmed"], answer: 1,
        explain: "China saw the radar as a threat; dozens of Lotte stores in China were shut and tours were halted." },
      sources: [
        { title: "U.S.-South Korea Alliance: Background and Issues for Congress", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/R48877", date: "2026" },
        { title: "Lotte: The South Korean company feeling China's anger over THAAD missile system", publisher: "CNN Money", url: "https://money.cnn.com/2017/03/07/news/china-lotte-thaad-south-korea-tensions/index.html", date: "2017-03-07" },
        { title: "Chinese companies join boycott of S Korean retailer Lotte over missile shield plans", publisher: "CNBC", url: "https://www.cnbc.com/2017/03/02/chinese-companies-join-boycott-of-s-korean-retailer-lotte-over-missile-shield-plans.html", date: "2017-03-02" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_kr-3", kind: "relation", asOf: "2026-09-30",
      title: "Submarines, command and a snub",
      dek: "Trump let South Korea build nuclear-powered submarines and agreed to hand it command of its forces in wartime. Then, angry that Seoul would not help against Iran, he cut back joint exercises.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_kr/us_kr-3-hero.webp",
          alt: "Illustration of a large shipyard with cranes and a submarine hull under construction beside a river.",
          caption: "Hanwha's Philadelphia shipyard is at the centre of plans for a Korean nuclear-powered submarine.",
          credit: "Illustration — not a photograph",
          prompt: "A large riverside shipyard with tall cranes and a long dark submarine hull under construction in a dry dock, industrial buildings and a bridge in the background, late afternoon light, documentary style, no people close up, no logos, no flags, no legible text." },
        { type: "timeline", head: "Trump and Lee", items: [
          ["Sep 2025", "US immigration raid on a Korean battery plant in Georgia"],
          ["29 Oct 2025", "Trump and Lee meet in Gyeongju"],
          ["Oct 2025", "Trump approves a South Korean nuclear-powered submarine"],
          ["Dec 2025", "US defence law protects the 28,500-troop level"],
          ["Aug 2026", "Trump orders joint exercises 'substantially' reduced"],
          ["Oct 2026", "Allies to discuss a timeline for wartime command"]
        ] },
        { type: "section", head: "A bargain in Gyeongju", md:
          "President Lee Jae-myung (see [[lesson:kr-4]]) came to power in 2025 needing a deal with Donald Trump on tariffs, and struck one worth $350 billion in investment (see [[lesson:kr-6]]), despite anger after American immigration agents detained more than 300 Koreans at a battery factory in Georgia. When Trump visited Gyeongju for the APEC summit in October 2025, he gave Seoul something it had long wanted: approval to build nuclear-powered submarines, able to shadow North Korean and Chinese boats far longer than diesel ones. Trump said the first would be built at the Philadelphia shipyard bought by the Korean firm Hanwha in 2024." },
        { type: "section", head: "Taking command", md:
          "Lee also wants South Korea to take over wartime operational control, or OPCON, of its own forces, which in a war would now be led by an American general. The two defence ministers agreed a road map, and South Korea aims to complete the transfer before Lee's term ends in 2030; it hoped to set a timeline at security talks in October 2026. American officials say the transfer depends on 'conditions', including big improvements in South Korean forces. Meanwhile Congress, worried by reports that the Pentagon was considering pulling out about 4,500 troops, wrote a floor of 28,500 into the 2026 defence law, barring cuts unless the administration certifies they serve US security." },
        { type: "section", head: "Iran and the exercises", md:
          "In August 2026, as the allies began their annual Ulchi Freedom Shield exercises, Trump announced on Truth Social that he had ordered the Pentagon to 'substantially reduce' them. He said the drills were costly and sent a 'hostile' signal to North Korea, which had been 'respectful' towards him, and complained that South Korea had declined his request to join the effort to 'denuclearize' Iran after the 2026 war (see [[lesson:ir-7]]). He called that 'somewhat unrelated'. The move alarmed Seoul and many in Washington, recalling his suspension of drills in 2018 and his interest in another summit with Kim Jong Un (see [[lesson:kp-8]])." },
        { type: "compare", head: "Where is the alliance going?",
          left: { head: "Modernising", md:
            "Nuclear submarines and wartime command make South Korea a stronger, more equal ally." },
          right: { head: "Fraying", md:
            "Cutting drills to please Kim and punish Seoul shows America's commitment is now transactional." } },
        { type: "section", head: "Why it matters", md:
          "South Korea is one of America's most important allies in Asia, facing North Korea and near China. Doubts about America's commitment could push Seoul towards its own nuclear weapons." }
      ],
      takeaways: [
        "Trump approved a South Korean nuclear-powered submarine in October 2025, to be built in Philadelphia.",
        "Seoul aims to take wartime command of its forces by 2030; Congress protected the 28,500-troop level.",
        "In August 2026 Trump cut back joint exercises after Seoul declined to help against Iran."
      ],
      check: { q: "Why did Trump say he reduced joint exercises in August 2026?",
        choices: ["North Korea had attacked", "They were costly and hostile to North Korea, and South Korea declined to help on Iran", "South Korea asked him to"], answer: 1,
        explain: "He called the Iran refusal 'somewhat unrelated' but cited it in the same post, alarming Seoul." },
      sources: [
        { title: "Game Changer: Trump Approves South Korea's Nuclear Submarine Ambition", publisher: "The Diplomat", url: "https://thediplomat.com/2025/10/game-changer-trump-approves-south-koreas-nuclear-submarine-ambition/", date: "2025-10" },
        { title: "Korea, US speed up OPCON transfer as Lee seeks transition within term", publisher: "The Korea Times", url: "https://www.koreatimes.co.kr/southkorea/defense/20251114/korea-us-speed-up-opcon-transfer-as-lee-seeks-transition-within-term", date: "2025-11-14" },
        { title: "US Senate approves defense bill reinforcing 28,500-troop baseline in Korea", publisher: "The Korea Herald", url: "https://www.koreaherald.com/article/10639430", date: "2025-12" },
        { title: "Trump orders scale-back of military exercises with South Korea after refusal to help with Iran's denuclearization", publisher: "CBS News", url: "https://www.cbsnews.com/news/trump-scale-back-south-korea-military-exercises/", date: "2026-08" },
        { title: "Korea seeks to set OPCON transfer timeline at October security talks with US", publisher: "The Korea Times", url: "https://www.koreatimes.co.kr/amp/southkorea/defense/20260805/korea-seeks-to-set-opcon-transfer-timeline-at-october-security-talks-with-us", date: "2026-08-05" }
      ]
    }
  ]
});
