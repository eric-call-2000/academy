/* ============================================================
   Relationship — Nigeria & China 🇳🇬🇨🇳
   From a 1971 recognition to China as Nigeria's biggest
   bilateral lender; railways, a deep-sea port and a currency
   swap; and traders in Lagos and Guangzhou, cheap goods and
   a textile industry that did not survive.
   Research note and sources: tools/research/ng_cn.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("ng_cn", {
  id: "ng_cn",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ng_cn-1", kind: "relation", asOf: "2026-09-30",
      title: "From Biafra to 'strategic partners'",
      dek: "China backed the breakaway Biafrans in words during Nigeria's civil war, then recognised Lagos in 1971. Since the 2000s it has become Nigeria's most important partner outside the West.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ng_cn/ng_cn-1-hero.webp",
          alt: "Illustration of a busy Lagos street with yellow minibuses, market stalls and a modern skyline behind.",
          caption: "Lagos, Nigeria's commercial capital, is full of Chinese-made goods.",
          credit: "AI illustration — not a photograph",
          prompt: "A busy street in Lagos with yellow minibuses and motorbikes, colourful market stalls under umbrellas, crowds of shoppers seen from a distance, modern glass towers and cranes on the skyline behind, bright hazy sunlight, documentary style, no legible text, no flags." },
        { type: "timeline", head: "Building ties", items: [
          ["1968", "China voices support for Biafra in the civil war"],
          ["10 Feb 1971", "Nigeria and the People's Republic establish relations"],
          ["1971", "Nigeria votes to give China's UN seat to Beijing"],
          ["2005–06", "Oil-for-infrastructure deals under Obasanjo"],
          ["Jan 2017", "Nigeria orders Taiwan's office out of Abuja"],
          ["Sep 2024", "Ties raised to a 'comprehensive strategic partnership'"]
        ] },
        { type: "section", head: "Cold beginnings", md:
          "In the 1960s Nigeria, a newly independent country led by conservative politicians, leaned towards Britain and the West. During the civil war of 1967–70 (see [[lesson:ng-10]]), Britain and the Soviet Union armed the federal government, while China criticised Lagos and voiced support for breakaway Biafra, though it sent little help. After the war both sides looked forward. On 10 February 1971 Nigeria and the People's Republic established diplomatic relations, and that October Nigeria was among the African countries that voted to give China's seat at the United Nations to Beijing." },
        { type: "section", head: "Oil and infrastructure", md:
          "For decades trade stayed small. That changed in the 2000s, as China's growing economy looked for oil and markets, and as Nigeria, back under civilian rule from 1999, needed roads and railways. President Olusegun Obasanjo offered Chinese oil companies rights to oil blocks in return for building infrastructure. Many of those deals fell through, but Chinese construction firms stayed and won contracts across the country, often financed by Chinese state banks. China became Nigeria's largest source of imports, from machinery to phones, while buying only a little Nigerian oil in return." },
        { type: "section", head: "Taiwan and strategic partnership", md:
          "Nigeria has followed Beijing closely on Taiwan. In January 2017, during a visit by China's foreign minister, Nigeria ordered Taiwan's trade office to move out of the capital, Abuja, to Lagos and cut its official status, and China pledged $40 billion of investment. In September 2024 President Bola Tinubu (see [[lesson:ng-4]]) visited Beijing before the Forum on China–Africa Cooperation summit, and he and Xi Jinping raised ties to a 'comprehensive strategic partnership'. Tinubu then set up a special office in his presidency to follow up the deals." },
        { type: "section", head: "Arms and satellites", md:
          "Security ties have grown too. Facing the Boko Haram insurgency and bandits in the north, Nigeria turned to China and its partners for weapons that Western governments were slow to sell, such as armed drones, and to Pakistan for JF-17 fighter jets developed with China. China also built and launched Nigeria's first communications satellite, NigComSat-1, in 2007; it failed in orbit the next year and China replaced it in 2011. Nigerian officers and officials now regularly train in China." },
        { type: "compare", head: "What kind of partner?",
          left: { head: "A development partner", md:
            "China builds what Western donors would not finance, fast and without lectures on governance." },
          right: { head: "A new colonial power", md:
            "China sells Nigeria goods, lends it money and takes its resources on terms that favour Beijing." } },
        { type: "section", head: "Why it matters", md:
          "Nigeria is Africa's most populous country and one of its biggest economies. How it balances China, the West and its own interests is watched across the continent." }
      ],
      takeaways: [
        "China backed Biafra in words during the civil war, but recognised Nigeria on 10 February 1971.",
        "From the 2000s Chinese firms and banks built Nigerian infrastructure and China became its top source of imports.",
        "Nigeria pushed Taiwan's office out of Abuja in 2017; ties became a 'comprehensive strategic partnership' in 2024."
      ],
      check: { q: "What did Nigeria do about Taiwan in January 2017?",
        choices: ["Recognised it as a country", "Ordered its trade office out of Abuja and cut its official status", "Opened an embassy in Taipei"], answer: 1,
        explain: "The move came during a visit by China's foreign minister, who pledged investment." },
      sources: [
        { title: "Nigeria sees China as a steady partner and its largest lender", publisher: "MERICS", url: "https://merics.org/en/nigeria-sees-china-steady-partner-and-its-largest-lender", date: "2025" },
        { title: "Nigeria: Tinubu Meets Chinese President Xi, Signs Several MOUs", publisher: "allAfrica", url: "https://allafrica.com/stories/202409040065.html", date: "2024-09-04" },
        { title: "After $40 billion pledge from China, Nigeria tells Taiwan's capital office to pack its bags", publisher: "Christian Science Monitor", url: "https://www.csmonitor.com/World/Asia-Pacific/2017/0112/After-40-billion-pledge-from-China-Nigeria-tells-Taiwan-s-capital-office-to-pack-its-bags", date: "2017-01-12" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ng_cn-2", kind: "relation", asOf: "2026-09-30",
      title: "Railways, a port and the loans",
      dek: "Chinese firms rebuilt Nigeria's railways and built West Africa's deepest port, largely with Chinese loans. China is Nigeria's biggest bilateral creditor, and critics worry about the terms.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ng_cn/ng_cn-2-hero.webp",
          alt: "Illustration of a modern passenger train on a new railway line crossing a green savannah landscape.",
          caption: "The Chinese-built Abuja–Kaduna railway opened in 2016.",
          credit: "AI illustration — not a photograph",
          prompt: "A modern green-and-white passenger train on a new standard-gauge railway crossing a green savannah landscape with rocky outcrops and scattered trees, bright afternoon light, wide documentary view, no people close up, no logos, no flags, no legible text." },
        { type: "facts", head: "Chinese-built Nigeria", rows: [
          ["Abuja–Kaduna railway", "Built by CCECC; commercial service from July 2016"],
          ["Lagos–Ibadan railway", "Opened 2021"],
          ["Lekki Deep Sea Port", "Opened 23 January 2023; about $1.5 billion"],
          ["China Exim Bank loans", "About $4.9 billion of Nigeria's external debt"],
          ["Currency swap", "15 billion yuan (~$2 billion), renewed Dec 2024"]
        ] },
        { type: "section", head: "Railways", md:
          "Nigeria's colonial-era railways had collapsed by the 2000s. Chinese state firms, above all China Civil Engineering Construction Corporation (CCECC), have built new standard-gauge lines, largely financed by Chinese loans. The Abuja–Kaduna line began commercial service in July 2016, and the Lagos–Ibadan line opened in 2021. They are part of a planned Lagos–Kano railway linking Nigeria's biggest port to the north. In January 2025 China Development Bank released about $255 million for the Kaduna–Kano section, which had stalled. The trains are popular, especially as bandits made northern roads dangerous (see [[lesson:ng-6]]), though in 2022 gunmen attacked an Abuja–Kaduna train and kidnapped dozens of passengers." },
        { type: "section", head: "Lekki port", md:
          "On 23 January 2023 President Muhammadu Buhari opened the Lekki Deep Sea Port, near Lagos, the deepest in West Africa, able to handle the largest container ships. It was built by China Harbour Engineering Company, which also holds a stake and operates it with French and Nigerian partners, and cost about $1.5 billion, partly financed by a Chinese bank. Supporters say it will relieve Lagos's notoriously congested ports and make Nigeria a regional shipping hub." },
        { type: "section", head: "Debt and the swap", md:
          "China is Nigeria's largest bilateral lender. According to Nigeria's Debt Management Office, loans from China's Export-Import Bank made up about $4.9 billion of its external debt in 2025, plus several hundred million dollars from China Development Bank, far more than any other single country. Critics have questioned clauses in some loans that waive Nigeria's sovereign immunity; the government says they are standard. To reduce reliance on the dollar, the two central banks have a currency swap, first signed in 2018 and renewed in December 2024 for three years, worth 15 billion yuan (about $2 billion)." },
        { type: "section", head: "Waiting for money", md:
          "Not every promise has been kept. Chinese lending to Africa has fallen sharply since its peak in the mid-2010s, as Beijing grew more cautious about bad debts. The Kaduna–Kano rail section waited years for its loan, and a coastal railway from Lagos to Calabar, contracted to CCECC in 2014, has barely begun. Nigeria has also struggled to meet the counterpart funding it owes on joint projects, and some roads and power plants have stalled halfway." },
        { type: "compare", head: "Good deals?",
          left: { head: "Supporters", md:
            "Nigeria got railways and a port it needed, faster than Western lenders would ever have delivered." },
          right: { head: "Critics", md:
            "The loans add to heavy debts, the contracts go to Chinese firms, and few Nigerians gain the skills." } },
        { type: "section", head: "Why it matters", md:
          "Nigeria's economy depends on better transport, and China is the main builder and lender. Whether the projects pay for themselves will decide whether they are remembered as investments or debt traps." }
      ],
      takeaways: [
        "Chinese firms built the Abuja–Kaduna and Lagos–Ibadan railways and the Lekki Deep Sea Port.",
        "China is Nigeria's largest bilateral creditor, with about $4.9 billion owed to China Exim Bank.",
        "A 15-billion-yuan currency swap was renewed in December 2024."
      ],
      check: { q: "Who built the Lekki Deep Sea Port, opened in January 2023?",
        choices: ["A British company", "China Harbour Engineering Company", "The Nigerian navy"], answer: 1,
        explain: "The Chinese firm also holds a stake and operates it with French and Nigerian partners." },
      sources: [
        { title: "Nigeria opens $1.5bn Lekki Deep Sea Port", publisher: "Ship Technology", url: "https://www.ship-technology.com/news/nigeria-lekki-deep-sea-port/", date: "2023-01" },
        { title: "Abuja-Kaduna Rail Line, Nigeria", publisher: "Railway Technology", url: "https://www.railway-technology.com/projects/abuja-kaduna-rail-line/", date: "n.d." },
        { title: "China Development Bank releases $255 mln for Nigeria rail project", publisher: "CNBC Africa", url: "https://www.cnbcafrica.com/2025/china-development-bank-releases-255-mln-for-nigeria-rail-project", date: "2025-01" },
        { title: "China and Nigeria Renew $2 Billion Currency-Swap to Boost Trade, Investment", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2024-12-27/china-and-nigeria-renew-currency-swap-to-boost-bilateral-trade", date: "2024-12-27" },
        { title: "DMO explains Nigeria's borrowing from China", publisher: "Debt Management Office Nigeria", url: "https://www.dmo.gov.ng/news-and-events/circulars-releases/2554-press-release-dmo-explains-nigeria-s-borrowing-from-china/file", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ng_cn-3", kind: "relation", asOf: "2026-09-30",
      title: "Traders, textiles and Guangzhou",
      dek: "Cheap Chinese goods changed Nigerian markets and helped kill its textile factories. Nigerian traders built a community in Guangzhou, and Chinese miners and merchants in Nigeria cause their own frictions.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ng_cn/ng_cn-3-hero.webp",
          alt: "Illustration of a wholesale market with stacks of colourful fabric rolls and boxes of goods.",
          caption: "Wax-print fabrics sold in Nigerian markets are often made in China.",
          credit: "AI illustration — not a photograph",
          prompt: "A busy wholesale market hall with tall stacks of colourful patterned fabric rolls, cardboard boxes of goods and hand carts, traders seen from a distance, warm light through a high roof, documentary style, no faces in close-up, no logos, no flags, no legible text." },
        { type: "timeline", head: "People and markets", items: [
          ["1980s–90s", "Kano's textile mills employ hundreds of thousands"],
          ["2000s", "Cheap Chinese fabrics flood Nigerian markets"],
          ["2000s–10s", "Nigerian traders settle in Guangzhou"],
          ["Apr 2020", "Africans evicted and tested in Guangzhou during Covid"],
          ["2020s", "Arrests over illegal mining involving Chinese nationals"],
          ["2024", "Tinubu's reforms make imports costlier"]
        ] },
        { type: "section", head: "Cheap goods, lost factories", md:
          "Chinese manufactured goods, from phones and motorbikes to clothes and building materials, have transformed Nigerian markets, making many products affordable for the first time. Chinese-owned brands such as Tecno and Itel dominate the phone market. But the flood of imports hurt local industry. Northern Nigeria's textile mills, centred on Kano and Kaduna, once employed hundreds of thousands of people; most had closed by the 2000s, undercut by cheap Chinese fabrics, including smuggled copies of the wax prints that Nigerians love, along with power shortages and poor management. Nigeria sells China mostly oil, gas and minerals, and buys far more than it sells." },
        { type: "section", head: "Nigerians in Guangzhou", md:
          "The trade built human links. From the 2000s thousands of Nigerian and other African traders settled in the southern Chinese city of Guangzhou, near the factories, buying goods to ship home; one district became known as 'Chocolate City'. Many faced visa problems and discrimination. In April 2020, as China feared imported Covid cases, Africans in Guangzhou were forced out of homes and hotels and ordered into tests and quarantine. Videos of Nigerians sleeping on the streets caused outrage; Nigeria's foreign minister summoned the Chinese ambassador, eleven African ambassadors in Beijing protested, and China promised to end discrimination." },
        { type: "section", head: "Chinese in Nigeria", md:
          "Tens of thousands of Chinese people live in Nigeria, working for construction firms, factories and shops. Some Nigerian traders resent competition from Chinese retailers in their markets. There have been arrests of Chinese nationals for illegal mining of gold and lithium, sometimes with local partners, and complaints about poor conditions for Nigerian workers on some Chinese sites. Chinese workers have also been kidnapped for ransom. Both governments stress friendship, and Tinubu's government hopes China will build factories in Nigeria, not just sell to it." },
        { type: "section", head: "Making things in Nigeria", md:
          "Nigeria wants China to build factories rather than just sell goods. Chinese firms run two free trade zones near Lagos, the Lekki Free Trade Zone and the Ogun–Guangdong zone, which make ceramics, steel, furniture and other goods, and some Chinese companies assemble phones and motorbikes locally. Tinubu's reforms, which weakened the naira (see [[lesson:ng-5]]), made imports more expensive, which could help local production if power and security improve." },
        { type: "compare", head: "Winners and losers",
          left: { head: "Consumers and traders", md:
            "Chinese goods made phones, clothes and tools affordable and created a huge import trade." },
          right: { head: "Workers and industry", md:
            "Imports helped close Nigerian factories, and the trade deficit drains foreign currency." } },
        { type: "section", head: "Why it matters", md:
          "Nigeria's biggest challenge is creating jobs for its young people. Whether China helps build Nigerian industry or only sells to it will shape that future." }
      ],
      takeaways: [
        "Cheap Chinese goods transformed Nigerian markets but helped close northern Nigeria's textile mills.",
        "Nigerian traders built a community in Guangzhou; their mistreatment during Covid in 2020 caused outrage.",
        "Chinese miners and merchants in Nigeria cause frictions over illegal mining and competition."
      ],
      check: { q: "What happened to Africans in Guangzhou in April 2020?",
        choices: ["They were given free housing", "Many were evicted and forced into Covid tests and quarantine", "They were all deported"], answer: 1,
        explain: "Nigeria summoned China's ambassador, and China promised to end the discrimination." },
      sources: [
        { title: "Nigeria-China cooperation in 2025 and beyond", publisher: "Daily Trust", url: "https://dailytrust.com/nigeria-china-cooperation-in-2025-and-beyond/", date: "2025" },
        { title: "Nigeria sees China as a steady partner and its largest lender", publisher: "MERICS", url: "https://merics.org/en/nigeria-sees-china-steady-partner-and-its-largest-lender", date: "2025" },
        { title: "Beijing faces a diplomatic crisis after reports of mistreatment of Africans in China causes outrage", publisher: "CNN", url: "https://www.cnn.com/2020/04/13/asia/china-guangzhou-african-blacklash-hnk-intl", date: "2020-04-13" },
        { title: "Nigeria cracks down on illegal lithium mining with dozens of arrests", publisher: "Africanews (AP)", url: "https://www.africanews.com/2024/05/27/nigeria-cracks-down-on-illegal-lithium-mining-with-dozens-of-arrests/", date: "2024-05-27" },
        { title: "Special report: The fall of Kano's textile industry", publisher: "Nigeria Info FM", url: "https://www.nigeriainfo.fm/port-harcourt/news/homepage/special-report-the-fall-of-kanos-textile-industry/", date: "n.d." }
      ]
    }
  ]
});
