/* ============================================================
   Relationship — United Kingdom & China 🇬🇧🇨🇳
   The Opium Wars, Hong Kong and its return in 1997; the
   'golden era' that ended with Huawei and the security law;
   and spies, a mega-embassy and British Steel under Starmer
   and Burnham.
   China's view of Hong Kong is in cn-12.
   Research note and sources: tools/research/gb_cn.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("gb_cn", {
  id: "gb_cn",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "gb_cn-1", kind: "relation", asOf: "2026-09-30",
      title: "Opium, Hong Kong and the handover",
      dek: "Britain fought two wars to force opium on China and took Hong Kong as a prize. China calls it the start of a 'century of humiliation'. The colony went back in 1997 with promises that have since been broken.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_cn/gb_cn-1-hero.webp",
          alt: "Illustration of wooden sailing warships and a steam gunboat firing on a Chinese river fort in the 1840s.",
          caption: "The First Opium War ended in 1842 with Hong Kong Island ceded to Britain.",
          credit: "AI illustration — not a photograph",
          prompt: "Wooden sailing warships and a black steam paddle gunboat firing cannons at a stone fort on a wide Chinese river in the 1840s, smoke drifting over the water, junks fleeing, historical oil painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Empire and return", items: [
          ["1839–42", "First Opium War; Treaty of Nanking cedes Hong Kong Island"],
          ["1856–60", "Second Opium War; British and French troops burn the Summer Palace"],
          ["1898", "Britain leases the New Territories for 99 years"],
          ["1950", "Britain recognises the People's Republic"],
          ["19 Dec 1984", "Sino-British Joint Declaration signed"],
          ["1 Jul 1997", "Hong Kong returns to China"]
        ] },
        { type: "section", head: "The Opium Wars", md:
          "In the early 1800s Britain bought huge amounts of Chinese tea and paid for it by smuggling opium grown in British India into China. When the Qing emperor's official Lin Zexu seized and destroyed the opium stocks in Canton in 1839, Britain sent warships. The Treaty of Nanking in 1842 forced China to pay compensation, open five ports to foreign trade and cede Hong Kong Island. A second war from 1856 to 1860 ended with British and French troops burning the emperor's Summer Palace in Beijing. Chinese schoolchildren still learn this as the start of a 'century of humiliation' (see [[lesson:cn-9]])." },
        { type: "section", head: "A colony and a lease", md:
          "Hong Kong grew into a great trading port. In 1898 Britain added the New Territories on a 99-year lease, which is why 1997 mattered. When the Communists won China's civil war in 1949, Britain chose to keep its trade and its colony, and in January 1950 it became one of the first Western countries to recognise the People's Republic. Hong Kong filled with refugees from the mainland and became one of Asia's richest cities, but it was never a democracy under British rule." },
        { type: "section", head: "The handover", md:
          "As the lease ran out, Margaret Thatcher negotiated with Deng Xiaoping. In the Joint Declaration of December 1984, China promised that after 1997 Hong Kong would keep its own way of life, laws and freedoms for fifty years under 'one country, two systems'. The Tiananmen killings of 1989 (see [[lesson:cn-11]]) terrified Hong Kongers, and the last governor, Chris Patten, widened the vote, angering Beijing. On 1 July 1997 the Union flag came down in a rainy ceremony and Prince Charles sailed away on the royal yacht." },
        { type: "section", head: "British Nationals (Overseas)", md:
          "Before the handover Britain gave many Hong Kongers a special passport, British National (Overseas), which let them visit Britain but not live there. For years it was a symbol more than a right. That changed after 2020, when China imposed a national security law on the city; the passport became the route by which well over a hundred thousand people moved to Britain." },
        { type: "compare", head: "Two memories",
          left: { head: "In China", md:
            "Britain was a drug-dealing empire that tore Hong Kong away; 1997 ended a national humiliation." },
          right: { head: "In Britain", md:
            "Hong Kong was a success story handed back with a treaty promise of freedom that China has not kept." } },
        { type: "section", head: "Why it matters", md:
          "History gives China a grievance and Britain a sense of responsibility. Both shape every quarrel over Hong Kong today." }
      ],
      takeaways: [
        "Britain took Hong Kong Island after the First Opium War, which ended with the Treaty of Nanking in 1842.",
        "The 1984 Joint Declaration promised Hong Kong its own system and freedoms for fifty years after 1997.",
        "Hong Kong returned to China on 1 July 1997."
      ],
      check: { q: "Why did 1997 matter for Hong Kong's handover?",
        choices: ["It was when Britain lost a war to China", "The 99-year lease on the New Territories ran out", "Hong Kong voted to leave"], answer: 1,
        explain: "Britain had leased the New Territories in 1898, and the colony could not survive without them." },
      sources: [
        { title: "Hong Kong and the Opium Wars", publisher: "The National Archives", url: "https://www.nationalarchives.gov.uk/education/resources/hong-kong-and-the-opium-wars/", date: "n.d." },
        { title: "The Joint Declaration – Hong Kong", publisher: "House of Commons Library", url: "https://researchbriefings.files.parliament.uk/documents/CBP-8616/CBP-8616.pdf", date: "n.d." },
        { title: "Sino-British Joint Declaration on the Question of Hong Kong", publisher: "Britannica", url: "https://www.britannica.com/topic/Sino-British-Joint-Declaration-on-the-Question-of-Hong-Kong", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "gb_cn-2", kind: "relation", asOf: "2026-09-30",
      title: "From golden era to ice age",
      dek: "In 2015 David Cameron promised a 'golden era' and took Xi Jinping for a pint. Five years later Britain banned Huawei from its 5G network and opened its doors to Hong Kongers fleeing a crackdown.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_cn/gb_cn-2-hero.webp",
          alt: "Illustration of a mobile phone mast on a hill above a British town, with engineers removing equipment.",
          caption: "Britain ordered Huawei equipment out of its 5G network by 2027.",
          credit: "AI illustration — not a photograph",
          prompt: "A tall mobile phone mast on a green hill above a small British town of brick houses, two engineers in hard hats on a platform removing grey equipment boxes, overcast sky, documentary painting style, no faces, no logos, no flags, no legible text." },
        { type: "timeline", head: "Warm to cold", items: [
          ["Oct 2015", "Xi's state visit; the 'golden era' is declared"],
          ["2016", "Chinese firm CGN takes a stake in the Hinkley Point C nuclear plant"],
          ["Jun 2020", "China imposes the national security law on Hong Kong"],
          ["Jul 2020", "Britain bans new Huawei 5G kit, all of it out by 2027"],
          ["Jan 2021", "The BN(O) visa route opens"],
          ["2021", "China sanctions British MPs over Xinjiang"]
        ] },
        { type: "section", head: "The golden era", md:
          "Under David Cameron and his chancellor George Osborne, Britain set out to be China's best friend in the West. It joined China's new Asian Infrastructure Investment Bank in 2015 despite American objections, and welcomed Chinese money into its nuclear power plans. Xi Jinping's state visit that October included a carriage ride with the Queen and a pint of beer with Cameron in a country pub. Both sides spoke of a 'golden era'. Critics warned that Britain was trading security for investment." },
        { type: "section", head: "Huawei", md:
          "Chinese company Huawei had supplied British telecoms networks for years. In January 2020 Boris Johnson's government allowed it a limited role in the new 5G network, despite heavy American pressure. Six months later it reversed itself: American sanctions cut Huawei off from key chips, and the pandemic and events in Hong Kong had soured the mood. In July 2020 Britain banned operators from buying new Huawei 5G equipment after the end of that year and ordered all of it removed by 2027. Beijing was furious." },
        { type: "section", head: "Hong Kong's crackdown", md:
          "After mass protests in 2019, China imposed a national security law on Hong Kong in June 2020 (see [[lesson:cn-12]]). Britain said this broke the Joint Declaration, and offered the three million people eligible for BN(O) status a path to live, work and eventually become citizens in Britain. Since the route opened in January 2021, more than 230,000 visas have been granted and nearly 170,000 people have moved. China stopped recognising the BN(O) passport." },
        { type: "section", head: "Sanctions and spies", md:
          "In 2021 Britain joined the EU, the US and Canada in sanctioning Chinese officials over the treatment of Uyghurs in Xinjiang; China hit back by sanctioning British MPs and peers. MI5 began warning publicly about Chinese spying and interference, and in 2022 it issued a rare alert about a lawyer it said was working for China's United Front to cultivate MPs. Britain also bought out China's stake in the planned Sizewell C nuclear plant." },
        { type: "compare", head: "What changed",
          left: { head: "2015", md:
            "China was an opportunity: a market, an investor, and a partner Britain hoped to influence." },
          right: { head: "2020s", md:
            "China was also a threat: to networks, to Hong Kong's freedoms and to Parliament itself." } },
        { type: "section", head: "Why it matters", md:
          "The golden era's collapse showed how hard it is for a mid-sized power to separate trade from security, and how much America's pressure counts in London." }
      ],
      takeaways: [
        "Cameron's government declared a 'golden era' with China during Xi's 2015 state visit.",
        "In July 2020 Britain banned new Huawei 5G equipment and ordered it all removed by 2027.",
        "After the 2020 security law, Britain opened a visa route for Hong Kongers with BN(O) status."
      ],
      check: { q: "What did Britain offer Hong Kongers after China's 2020 national security law?",
        choices: ["A referendum on independence", "A route to live and settle in Britain for BN(O) status holders", "Nothing at all"], answer: 1,
        explain: "The BN(O) visa route opened in January 2021; nearly 170,000 people have moved." },
      sources: [
        { title: "Huawei U-turn: UK set to ban Chinese firm from 5G network", publisher: "Al Jazeera", url: "https://www.aljazeera.com/amp/economy/2020/7/14/huawei-u-turn-uk-set-to-ban-chinese-firm-from-5g-network", date: "2020-07-14" },
        { title: "Britain Bans China's Huawei from New 5G Network", publisher: "VOA via GlobalSecurity.org", url: "https://www.globalsecurity.org/intell/library/news/2020/intell-200714-voa02.htm", date: "2020-07-14" },
        { title: "UK opens door to thousands more Hongkongers under visa scheme following Jimmy Lai jailing", publisher: "Hong Kong Free Press", url: "https://hongkongfp.com/2026/02/09/uk-opens-door-to-thousands-more-hongkongers-under-visa-scheme-following-jimmy-lai-jailing/", date: "2026-02-09" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "gb_cn-3", kind: "relation", asOf: "2026-09-30",
      title: "Spies, an embassy and steel",
      dek: "Starmer set out to repair ties, approving China's giant new embassy and visiting Beijing. Then Britain seized a Chinese-owned steelworks, and a new prime minister inherited the balancing act.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_cn/gb_cn-3-hero.webp",
          alt: "Illustration of a grand old stone building behind railings near a river in London, with protesters' umbrellas outside.",
          caption: "China's planned new embassy at the old Royal Mint in London was approved in January 2026.",
          credit: "AI illustration — not a photograph",
          prompt: "A grand pale stone Georgian building behind black iron railings near the Tower of London, a crowd of people with umbrellas and blank placards outside in light rain, grey sky, documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "Reset and friction", items: [
          ["Sep 2025", "Spy case against two Britons collapses"],
          ["20 Jan 2026", "Government approves China's embassy at Royal Mint Court"],
          ["Jan 2026", "Starmer visits Beijing, the first PM visit since 2018"],
          ["9 Feb 2026", "Jimmy Lai jailed for 20 years; Britain widens the BN(O) route"],
          ["Jul 2026", "Britain nationalises British Steel from China's Jingye"],
          ["8 Sep 2026", "Xi's first call with Prime Minister Burnham"]
        ] },
        { type: "section", head: "A spy case collapses", md:
          "Two British men, a parliamentary researcher and a think-tank director, were charged in 2024 with spying for China. In September 2025 prosecutors dropped the case, a month before trial. The chief prosecutor said it collapsed because no one in government would give evidence that China was a threat to national security at the time. Critics accused the Starmer government of going soft on Beijing to win investment; ministers denied it, and the head of MI5 said China posed a daily threat to British security." },
        { type: "section", head: "The embassy and the visit", md:
          "China bought the old Royal Mint site near the Tower of London in 2018 to build Europe's largest embassy. Local residents, Hong Kong activists and security experts opposed it, worried that it could be used for spying and for watching dissidents. On 20 January 2026 the government approved it. Days later Keir Starmer became the first British prime minister to visit China since 2018. He and Xi agreed a 'comprehensive strategic partnership'; China offered Britons 30-day visa-free entry and lower tariffs on Scotch whisky." },
        { type: "section", head: "Jimmy Lai and British Steel", md:
          "On 9 February 2026 Jimmy Lai, a British citizen and Hong Kong newspaper owner, was sentenced to 20 years in prison under the security law. Britain widened the BN(O) route to thousands more Hong Kongers, which Beijing called 'despicable'. In July 2026 Britain nationalised British Steel, whose Chinese owner Jingye had bought it in 2020 and wanted to close its blast furnaces at Scunthorpe. China warned that investors' confidence had been 'severely undermined', and Jingye began an international claim." },
        { type: "section", head: "Burnham's turn", md:
          "Andy Burnham became prime minister in July 2026 (see [[lesson:gb-6]]). In his first call with Xi, on 8 September, he said Britain would keep its China policy steady and seek a stable partnership, while raising security, Ukraine, Hong Kong and consular cases. Xi urged Britain to protect Chinese investors. Analysts expect Burnham to keep Starmer's approach for now." },
        { type: "compare", head: "The British debate",
          left: { head: "Engage", md:
            "China is the world's second-largest economy; Britain needs its trade and cannot solve climate change without it." },
          right: { head: "Guard", md:
            "China spies on Britain, jails a British citizen and backs Russia; approving the embassy was a mistake." } },
        { type: "section", head: "Why it matters", md:
          "Britain is trying to trade with China while guarding against it, with Washington watching. How it handles Hong Kong, steel and security tests whether that balance can hold." }
      ],
      takeaways: [
        "A spy case collapsed in 2025 because the government would not testify that China was a national security threat.",
        "Britain approved China's embassy at the Royal Mint in January 2026, and Starmer visited Beijing.",
        "Jimmy Lai was jailed for 20 years in February 2026, and Britain nationalised Chinese-owned British Steel in July."
      ],
      check: { q: "Why did the case against two alleged Chinese spies collapse in 2025?",
        choices: ["They confessed", "No one in government would testify that China was a national security threat at the time", "China sent them home"], answer: 1,
        explain: "The chief prosecutor said that evidence was needed and was never given." },
      sources: [
        { title: "UK prosecutor says spying case collapsed because government wouldn't call China a threat", publisher: "PBS NewsHour", url: "https://www.pbs.org/newshour/world/uk-prosecutor-says-spying-case-collapsed-because-government-wouldnt-call-china-a-threat", date: "2025-10" },
        { title: "U.K. approves a 'mega' Chinese Embassy in London despite criticism of security risks", publisher: "NBC News", url: "https://www.nbcnews.com/world/united-kingdom/uk-approves-mega-chinese-embassy-london-criticism-security-risks-rcna254917", date: "2026-01-20" },
        { title: "Starmer and Xi call for deeper U.K.-China ties as Trump shakes up global relations", publisher: "NPR", url: "https://www.npr.org/2026/01/29/g-s1-107743/starmer-and-xi-call-for-deeper-uk-china-ties", date: "2026-01-29" },
        { title: "China rebukes UK over nationalisation of British Steel", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/7/17/china-rebukes-uk-over-nationalisation-of-british-steel", date: "2026-07-17" },
        { title: "China's Xi Tells UK's Burnham They Have More Common Interests Than Differences", publisher: "U.S. News & World Report", url: "https://www.usnews.com/news/world/articles/2026-09-08/chinas-xi-tells-uks-burnham-they-have-more-common-interests-than-differences", date: "2026-09-08" }
      ]
    }
  ]
});
