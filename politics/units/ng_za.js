/* ============================================================
   Relationship — Nigeria & South Africa 🇳🇬🇿🇦
   Africa's two giants: Nigeria's support for the struggle against
   apartheid, their rivalry for business and leadership, and the
   xenophobic attacks that led Nigeria to airlift its citizens home
   in 2026.
   Research note and sources: tools/research/ng_za.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("ng_za", {
  id: "ng_za",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ng_za-1", kind: "relation", asOf: "2026-09-30",
      title: "Brothers against apartheid",
      dek: "Nigerian civil servants once paid a 'Mandela tax' to support the fight against apartheid. After 1994 the two countries were meant to lead Africa together. It has not been simple.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ng_za/ng_za-1-hero.webp",
          alt: "Illustration of a large crowd at a rally in an African city in the 1970s, with banners and raised fists, seen from behind.",
          caption: "Nigeria was one of the loudest voices against apartheid, and was treated as an honorary 'frontline state'.",
          credit: "AI illustration — not a photograph",
          prompt: "A large crowd at a 1970s rally in a West African city seen from behind, raised fists and blank banners, colourful clothing, dusty sunlit street and low buildings, warm vintage film tones, energetic and hopeful, no legible text, no faces clearly visible." },
        { type: "timeline", head: "From solidarity to partnership", items: [
          ["1960", "Nigeria's independence; it campaigns against apartheid"],
          ["1976", "Nigeria sets up the Southern Africa Relief Fund"],
          ["1994", "South Africa's first democratic election"],
          ["Nov 1995", "Abacha executes Ken Saro-Wiwa; Mandela pushes Nigeria's suspension from the Commonwealth"],
          ["1999", "Nigeria returns to democracy under Obasanjo"],
          ["2001–02", "Obasanjo and Mbeki help launch NEPAD and the African Union"]
        ] },
        { type: "section", head: "The Mandela tax", md:
          "From independence, Nigeria made the fight against white-minority rule in southern Africa a centre of its foreign policy, although the two countries are thousands of kilometres apart. It pressed for South Africa's expulsion from the Commonwealth, boycotted sporting events, hosted and funded exiles of the African National Congress (ANC), and gave scholarships to South African students. It joined the African boycott of the 1976 Montreal Olympics over a New Zealand rugby tour of apartheid South Africa, and was treated as an honorary 'frontline state' although it shares no border with South Africa. In 1976, after the Soweto uprising, the military government of Olusegun Obasanjo set up the Southern Africa Relief Fund, partly paid for by deductions from civil servants' wages that Nigerians came to call the 'Mandela tax'. The often-quoted claim that Nigeria spent $61 billion on the cause is an estimate of decades of support, not a documented sum." },
        { type: "section", head: "Mandela and Abacha", md:
          "Liberation did not bring harmony. In 1995 Nigeria's military ruler, General Sani Abacha, put the writer and environmental activist Ken Saro-Wiwa and eight other Ogoni leaders on trial before a military tribunal (see [[lesson:ng-12]]). Nelson Mandela, now South Africa's president, pleaded for clemency and was assured the men would be spared. On 10 November 1995 they were hanged. A furious Mandela called for sanctions and pushed for Nigeria's suspension from the Commonwealth, which followed immediately. Many Nigerians resented being lectured by a country they had helped to free." },
        { type: "section", head: "Partners", md:
          "When Nigeria returned to democracy in 1999, Presidents Obasanjo and Thabo Mbeki built a close partnership. Together they championed the New Partnership for Africa's Development in 2001 and the transformation of the Organisation of African Unity into the African Union in 2002, with its promise of 'African solutions to African problems'. The two set up a bi-national commission to manage their relations." },
        { type: "compare", head: "Two memories",
          left: { head: "Many Nigerians", md:
            "Nigeria sacrificed for South Africa's freedom and expected gratitude. Instead its citizens face hostility there." },
          right: { head: "Many South Africans", md:
            "Nigeria's help was welcome, but many countries supported the struggle, and past help does not excuse present problems." } },
        { type: "section", head: "Why it matters", md:
          "Together, Nigeria and South Africa have more than a third of sub-Saharan Africa's economic output. When they cooperate, the continent's institutions work better; when they quarrel, as they increasingly do (see [[lesson:ng_za-3]]), Africa's voice in the world, at the UN, the G20 and beyond, is weaker." }
      ],
      takeaways: [
        "Nigeria made fighting apartheid a centre of its foreign policy, funding exiles and a relief fund from 1976.",
        "In 1995 Mandela pushed for Nigeria's suspension from the Commonwealth after Abacha executed Ken Saro-Wiwa.",
        "Obasanjo and Mbeki later worked together to create NEPAD and the African Union."
      ],
      check: { q: "What was the 'Mandela tax'?",
        choices: ["A South African import tax", "Deductions from Nigerian civil servants' pay to support the anti-apartheid cause", "A tax on mining"], answer: 1,
        explain: "Nigeria's Southern Africa Relief Fund, set up in 1976, was partly funded from public servants' wages." },
      sources: [
        { title: "Did Nigeria spend $61 billion supporting South Africa's anti-apartheid struggle?", publisher: "Premium Times", url: "https://www.premiumtimesng.com/news/headlines/891642-did-nigeria-spend-61-billion-supporting-south-africas-anti-apartheid-struggle.html", date: "2026-06" },
        { title: "Contributing to the search for peace and democracy: Nigeria", publisher: "Nelson Mandela Foundation", url: "https://tpy.nelsonmandela.org/pages/part-v-africa-and-the-world/16-better-and-more-peaceful-world/16-2-contributing-to-the-search-for-peace-and-democracy-nigeria", date: "n.d." },
        { title: "Mandela begged Abacha not to execute Ken Saro-Wiwa and companions", publisher: "ICIR", url: "https://www.icirnigeria.org/mandela-begged-abacha-not-to-execute-ken-saro-wiwa-and-companions/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ng_za-2", kind: "relation", asOf: "2026-09-30",
      title: "Rivals for Africa's lead",
      dek: "Nigeria has the people; South Africa has the industry. South African companies built empires in Nigeria, and Nigeria has made them pay for it.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ng_za/ng_za-2-hero.webp",
          alt: "Illustration of a busy Lagos street market under a flyover, with stalls, yellow minibuses and phone-card sellers under umbrellas.",
          caption: "South African firms such as the phone company MTN and the broadcaster MultiChoice count tens of millions of Nigerian customers.",
          credit: "AI illustration — not a photograph",
          prompt: "A busy Lagos street market under a concrete flyover, yellow minibuses, market stalls with colourful umbrellas, vendors selling phone accessories, crowds seen from a distance, bright hazy sunlight, energetic and dense, no legible text or logos." },
        { type: "facts", head: "Two giants", rows: [
          ["Population", "Nigeria about 230 million; South Africa about 63 million"],
          ["Economy", "The title of Africa's largest has passed between them"],
          ["UN ambition", "Both seek a permanent Security Council seat for Africa"],
          ["Big firms", "MTN, MultiChoice (DStv) and, until 2021, Shoprite in Nigeria"],
          ["2015 fine", "Nigeria fines MTN $5.2 billion over unregistered SIM cards"]
        ] },
        { type: "section", head: "Who leads Africa?", md:
          "South Africa has Africa's most industrialised economy, its deepest stock market and the continent's only seat in the G20 until the African Union joined in 2023. Nigeria has the largest population, huge oil and gas reserves and a vast consumer market. The title of Africa's biggest economy has swung between them with oil prices, exchange rates and statistical revisions: Nigeria overtook South Africa after rebasing its GDP in 2014, and currency collapses in both have since reshuffled the rankings. Both claim to speak for Africa, and both want a permanent seat on the UN Security Council if one is ever created for the continent." },
        { type: "section", head: "Business empires", md:
          "After apartheid ended, South African companies raced north. MTN became Nigeria's largest mobile network; MultiChoice's DStv and GOtv dominate pay television; Shoprite built supermarkets across Nigerian cities. Their success bred resentment and friction with regulators. In 2015 Nigeria fined MTN $5.2 billion for failing to disconnect over five million unregistered SIM cards, at a time of Boko Haram kidnappings; after talks the fine was cut to $3.4 billion and settled for about $1.7 billion. MultiChoice has repeatedly clashed with Nigerian regulators and consumer courts over its price rises. Shoprite sold its Nigerian stores in 2021. Others followed the pioneers, from Standard Bank's Stanbic IBTC to hotel groups and cinema chains, while Nigerian banks and entrepreneurs, such as the cement tycoon Aliko Dangote, have invested in South Africa too, though on a smaller scale." },
        { type: "section", head: "Culture flows both ways", md:
          "Culturally, the flow has reversed. Nigerian Afrobeats stars such as Burna Boy and Wizkid are hugely popular in South Africa, and South African amapiano music dominates Nigerian clubs; Nollywood films fill South African screens. Tens of thousands of Nigerians live and work in South Africa, many as traders, doctors, nurses and university lecturers." },
        { type: "compare", head: "Two views of the rivalry",
          left: { head: "Healthy competition", md:
            "Two strong economies competing and investing in each other is good for Africa. Business ties have survived every political quarrel." },
          right: { head: "Damaging rivalry", md:
            "Jealousy and nationalism stop the two from leading together. Africa needs its giants to cooperate, not compete." } },
        { type: "section", head: "Why it matters", md:
          "The African Continental Free Trade Area, which both have joined, depends on large economies opening their markets. Whether Nigerian and South African firms can operate freely in each other's countries is a test of whether Africa's economic integration can move from paper to reality, for companies and for ordinary traders alike." }
      ],
      takeaways: [
        "Nigeria has Africa's largest population; South Africa its most industrialised economy; both claim to lead the continent.",
        "South African firms like MTN and MultiChoice built big businesses in Nigeria, often clashing with regulators.",
        "Nigeria's 2015 fine on MTN, first set at $5.2 billion, became a symbol of the tensions."
      ],
      check: { q: "Why did Nigeria fine MTN $5.2 billion in 2015?",
        choices: ["For tax evasion", "For failing to disconnect millions of unregistered SIM cards", "For price-fixing"], answer: 1,
        explain: "Regulators said MTN had not cut off over five million unregistered lines; the fine was later reduced and settled." },
      sources: [
        { title: "Nigeria Slashes MTN Fine by a Third to $3.4B; CEO Resigns", publisher: "VOA", url: "https://www.voanews.com/a/nigeria-mtn-fine/3085968.html", date: "2015-12" },
        { title: "The Curious Case of MTN's Whopping $5bn Fine In Nigeria", publisher: "Forbes", url: "https://www.forbes.com/sites/tobyshapshak/2015/12/04/the-curious-case-of-mtns-whopping-5bn-fine-in-nigeria/", date: "2015-12-04" },
        { title: "These numbers show Shoprite, DSTV, MTN sell more in SA than Nigeria", publisher: "BusinessDay", url: "https://businessday.ng/companies/article/these-numbers-show-shoprite-dstv-mtn-sell-more-in-sa-than-nigeria/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ng_za-3", kind: "relation", asOf: "2026-09-30",
      title: "Xenophobia and the airlift",
      dek: "Waves of violence against African migrants in South Africa have repeatedly targeted Nigerians. In 2026 Nigeria flew more than 1,500 of its citizens home and West Africa rallied behind it.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ng_za/ng_za-3-hero.webp",
          alt: "Illustration of a passenger jet at an airport gate at night with a line of travellers carrying bags walking toward it, seen from behind.",
          caption: "Evacuation flights carried Nigerians home from Johannesburg in June and July 2026.",
          credit: "AI illustration — not a photograph",
          prompt: "A passenger jet parked at an airport gate at night, a line of travellers seen from behind carrying suitcases and bags walking across the tarmac toward the stairs, floodlights and wet ground, weary and relieved mood, no faces visible, no logos, no legible text." },
        { type: "timeline", head: "Recurring violence", items: [
          ["May 2008", "Anti-foreigner riots kill 62 people"],
          ["2015", "New wave of attacks in Durban and Johannesburg"],
          ["Sep 2019", "Attacks on foreign-owned shops; Nigeria repatriates hundreds"],
          ["2021", "Operation Dudula vigilante movement emerges"],
          ["Apr 2026", "New wave of anti-migrant protests and attacks"],
          ["Jun–Jul 2026", "Nigeria airlifts more than 1,500 citizens home"],
          ["Jul 2026", "ECOWAS condemns the attacks"]
        ] },
        { type: "section", head: "Why the violence", md:
          "South Africa has one of the world's highest unemployment rates, above 30%, and deep poverty in its townships (see [[unit:za|South Africa]]). Some politicians and vigilante groups blame foreigners, from Zimbabwe, Mozambique, Malawi, Somalia and Nigeria, for taking jobs, running shops and dealing drugs. Nigerians in particular are often stereotyped as criminals. Riots in May 2008 killed 62 people; further waves followed in 2015 and 2019. Since 2021 a movement called Operation Dudula, meaning 'force out' in Zulu, has demanded papers from migrants at clinics, schools and markets. In November 2025 a court barred it from blocking migrants' access to health care." },
        { type: "section", head: "2019", md:
          "In September 2019 mobs looted and burned foreign-owned shops in Johannesburg and Pretoria; at least ten people died. In Nigeria, protesters retaliated by attacking South African-owned businesses, and South Africa briefly closed its missions there. Nigeria's government boycotted a World Economic Forum meeting in Cape Town, and a private airline, Air Peace, flew hundreds of Nigerians home for free. The two presidents met in October to calm tensions." },
        { type: "section", head: "The 2026 crisis", md:
          "A new wave of protests and attacks began in April 2026 in Johannesburg, Durban and Pretoria, condemned by the African Commission on Human and Peoples' Rights. In June President Bola Tinubu approved evacuation flights; by mid-July more than 1,500 Nigerians had returned. Nigeria's diaspora commission said about 116 Nigerians had been killed in South Africa in two years, a figure South Africa has not confirmed. Tinubu declined to meet a South African envoy, and Nigeria's foreign ministry said retaliation was 'not off the table'. Ghanaians were targeted too: a video of a Ghanaian man being beaten and forced to tell his compatriots to leave spread widely. In July the West African bloc ECOWAS condemned the attacks and backed Ghana's call to raise the issue at the African Union. President Cyril Ramaphosa has warned citizens that enforcing immigration law is the state's job alone." },
        { type: "compare", head: "Two responses",
          left: { head: "Abuja and ECOWAS", md:
            "South Africa must protect Africans on its soil and prosecute attackers. Pan-African solidarity cannot be one-way." },
          right: { head: "Pretoria", md:
            "The government condemns vigilantism, but illegal immigration is real and must be controlled. Outsiders should not exaggerate the problem." } },
        { type: "section", head: "Why it matters", md:
          "The crisis strikes at the heart of Africa's promises of free movement and continental unity. It also affects South Africa's standing, as a country that once relied on African solidarity now faces accusations of 'Afrophobia' from its neighbours." }
      ],
      takeaways: [
        "Waves of anti-migrant violence in South Africa, in 2008, 2015, 2019 and 2026, have often targeted Nigerians.",
        "In June–July 2026 Nigeria flew more than 1,500 citizens home after renewed attacks.",
        "ECOWAS condemned the attacks, and Nigeria said retaliation was 'not off the table'."
      ],
      check: { q: "What is Operation Dudula?",
        choices: ["A Nigerian evacuation programme", "A South African vigilante movement targeting migrants", "A UN peacekeeping mission"], answer: 1,
        explain: "Founded in 2021, its name means 'force out' in Zulu; it demands papers from migrants and has been restrained by the courts." },
      sources: [
        { title: "Why are Nigeria-South Africa tensions rising amid xenophobic attacks?", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/6/9/why-are-nigeria-south-africa-tensions-rising-amid-xenophobic-attacks", date: "2026-06-09" },
        { title: "South Africa: New Waves of Xenophobic Attacks", publisher: "Human Rights Watch", url: "https://www.hrw.org/news/2026/05/20/south-africa-new-waves-of-xenophobic-attacks", date: "2026-05-20" },
        { title: "Xenophobia: Final Evacuation Flight From South Africa Lands In Nigeria As Over 1500 Citizens Return Home", publisher: "Sahara Reporters", url: "https://saharareporters.com/2026/07/15/xenophobia-final-evacuation-flight-south-africa-lands-nigeria-over-1500-citizens-return", date: "2026-07-15" },
        { title: "ECOWAS takes united stand against xenophobia in South Africa", publisher: "CAJ News Africa", url: "https://cajnewsafrica.com/2026/07/20/ecowas-takes-united-stand-against-xenophobia-in-south-africa/", date: "2026-07-20" },
        { title: "Nigerians repatriated from South Africa after attacks", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2019/9/12/nigerians-repatriated-from-south-africa-after-attacks", date: "2019-09-12" }
      ]
    }
  ]
});
