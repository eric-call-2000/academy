/* ============================================================
   Relationship — Brazil & China 🇧🇷🇨🇳
   Soybeans, iron ore and a partnership since 1974; Bolsonaro's
   quarrels with Beijing and his quiet retreat; and Lula's
   embrace as Trump's tariffs push Brazil and China together,
   with trade at a record in 2025 and an election in October.
   Research note and sources: tools/research/br_cn.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("br_cn", {
  id: "br_cn",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "br_cn-1", kind: "relation", asOf: "2026-09-30",
      title: "Soy, iron and satellites",
      dek: "Brazil's military rulers recognised Communist China in 1974. Thirty-five years later China became Brazil's biggest trading partner, buying soybeans and iron ore on a scale that remade Brazil's economy.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br_cn/br_cn-1-hero.webp",
          alt: "Illustration of combine harvesters working across an enormous soybean field under a big sky, with trucks waiting.",
          caption: "Most of Brazil's soybean exports go to China, to feed its pigs and poultry.",
          credit: "AI illustration — not a photograph",
          prompt: "Several green combine harvesters working in a line across an enormous flat golden soybean field in central Brazil, grain trucks waiting at the edge, huge blue sky with white clouds, red earth track, wide documentary view, no logos, no flags, no legible text." },
        { type: "timeline", head: "Building the partnership", items: [
          ["15 Aug 1974", "Brazil's military government establishes relations with Beijing"],
          ["1988", "Joint programme to build earth-observation satellites (CBERS)"],
          ["1993", "The first 'strategic partnership' China signed with any country"],
          ["2009", "China becomes Brazil's biggest trading partner"],
          ["2009", "First BRIC summit"],
          ["2012", "Upgraded to a 'comprehensive strategic partnership'"]
        ] },
        { type: "section", head: "An unlikely start", md:
          "Brazil's military dictatorship (see [[lesson:br-11]]) was fiercely anti-communist, yet on 15 August 1974 it established diplomatic relations with the People's Republic, following the logic of trade and independence from Washington rather than ideology. In 1988 the two agreed to build earth-observation satellites together, the China–Brazil Earth Resources Satellite programme, a rare case of high-tech cooperation between two developing countries; several CBERS satellites have since been launched. In 1993 China called Brazil its first 'strategic partner', a label it later gave to many countries." },
        { type: "section", head: "The commodity boom", md:
          "The real transformation came with China's industrial boom in the 2000s. China needed iron ore for its steel mills and soybeans to feed the pigs and chickens of a growing middle class, and Brazil had both in huge quantities. In 2009 China overtook the United States as Brazil's largest trading partner. Brazil's farm frontier pushed deep into the savannah of the Cerrado and the edge of the Amazon, and the mining giant Vale shipped ore across the world in enormous carriers. Brazil sells China mostly raw materials: soybeans, iron ore, oil and beef. China sells Brazil manufactured goods, from phones and machinery to, increasingly, electric cars. Chinese state companies also bought into Brazil's electricity sector: State Grid acquired the power company CPFL in 2017 and built the long-distance lines carrying power from the Belo Monte dam in the Amazon to the southeast." },
        { type: "section", head: "BRICS", md:
          "The two also found common cause in politics. In 2009 Brazil, Russia, India and China held the first summit of the BRIC group, joined by South Africa in 2010 to become BRICS. Both wanted a bigger voice for developing countries in the International Monetary Fund and the United Nations, and less dependence on the US dollar. Lula, in his first presidency from 2003 to 2010 (see [[lesson:br-4]]), saw China as a partner in building a 'multipolar' world. In 2012 the relationship was upgraded to a 'comprehensive strategic partnership'. BRICS later created its own development bank, based in Shanghai and led for years by the former Brazilian president Dilma Rousseff." },
        { type: "compare", head: "Two views of the boom",
          left: { head: "A blessing", md:
            "China's demand lifted millions of Brazilians out of poverty and made Brazilian farming world-leading." },
          right: { head: "A trap", md:
            "Brazil went back to exporting raw materials, its factories lost out to Chinese imports, and forests were cleared for soy." } },
        { type: "section", head: "Why it matters", md:
          "China buys more from Brazil than any other country. Brazil's farmers and miners, and the politicians who represent them, have a strong interest in good relations whoever is in power." }
      ],
      takeaways: [
        "Brazil's military government established relations with Beijing in 1974.",
        "China became Brazil's biggest trading partner in 2009, buying soybeans, iron ore, oil and beef.",
        "Both founded the BRICS group to seek a bigger voice for developing countries."
      ],
      check: { q: "When did China become Brazil's largest trading partner?",
        choices: ["1974", "2009", "2025"], answer: 1,
        explain: "China overtook the United States in 2009, driven by its demand for soybeans and iron ore." },
      sources: [
        { title: "Chart of the Day: 50 years of China-Brazil relations", publisher: "CGTN", url: "https://news.cgtn.com/news/2024-08-15/Chart-of-the-Day-50-years-of-China-Brazil-relations-1w58benv320/index.html", date: "2024-08-15" },
        { title: "Brazil and China at 50: Green goals and trade realities", publisher: "Dialogue Earth", url: "https://dialogue.earth/en/business/brazil-china-at-50-green-goals-trade-realities/", date: "2024" },
        { title: "The Panda Hugs the Tucano: China's Relations with Brazil", publisher: "Jamestown Foundation", url: "https://jamestown.org/the-panda-hugs-the-tucano-chinas-relations-with-brazil/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "br_cn-2", kind: "relation", asOf: "2026-09-30",
      title: "Bolsonaro's China problem",
      dek: "Jair Bolsonaro campaigned against China, visited Taiwan and mocked a Chinese vaccine. But Brazil's farmers needed Chinese buyers, and in office he quietly made peace.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br_cn/br_cn-2-hero.webp",
          alt: "Illustration of rows of vaccine vials on a laboratory production line under bright light.",
          caption: "Brazil's first Covid vaccine was a Chinese one, produced with the Butantan Institute in São Paulo.",
          credit: "AI illustration — not a photograph",
          prompt: "Rows of small glass vaccine vials with blue caps moving along a stainless steel laboratory production line under bright white light, gloved hands in the background, clean clinical mood, no logos, no flags, no legible text." },
        { type: "timeline", head: "From hostility to pragmatism", items: [
          ["28 Feb 2018", "Candidate Bolsonaro visits Taiwan; Beijing protests"],
          ["2018", "'China is not buying in Brazil, it is buying Brazil'"],
          ["Oct 2019", "President Bolsonaro visits Beijing"],
          ["2020", "His son Eduardo blames China for Covid"],
          ["Oct 2020", "Bolsonaro rejects the Chinese CoronaVac vaccine"],
          ["Jan 2021", "CoronaVac becomes Brazil's first approved vaccine"]
        ] },
        { type: "section", head: "Campaigning against China", md:
          "Jair Bolsonaro modelled himself on Donald Trump. On 28 February 2018, as a would-be presidential candidate, he visited Taiwan, drawing a formal protest from Beijing. On the campaign trail he warned that 'China is not buying in Brazil, it is buying Brazil', and asked whether Brazilians would 'leave Brazil in the hands of the Chinese'. He promised to align Brazil with the United States and to be wary of Chinese investment in ports, energy and land. Chinese diplomats and Brazilian farm lobbies watched nervously: by then China was buying the bulk of Brazil's soybeans, and many of the farmers who sold to China were Bolsonaro's own supporters." },
        { type: "section", head: "A quiet retreat", md:
          "In office the pressure of trade won. Agriculture ministers and the powerful farm caucus in Congress pushed for calm, and in October 2019 Bolsonaro went to Beijing, met Xi Jinping and praised the partnership; Xi came to Brasília for the BRICS summit weeks later. Then Covid struck. Bolsonaro's son Eduardo, a congressman, blamed China for the virus, and China's ambassador hit back publicly, accusing him of catching a 'mental virus' in America. In October 2020 Bolsonaro overruled his own health minister and said Brazil would not buy the Chinese CoronaVac vaccine, which São Paulo's Butantan Institute was producing with the firm Sinovac." },
        { type: "section", head: "Needing China after all", md:
          "Days later Brazil's health regulator authorised São Paulo to import CoronaVac anyway, and in January 2021 it became the first Covid vaccine approved in Brazil, used for millions of the first doses. The episode, amid one of the world's worst death tolls, damaged Bolsonaro politically. Brazil also refused American pressure to exclude Huawei from its 5G networks, and its November 2021 5G auction went ahead without a ban. By the end of his term trade with China had reached new records. His foreign minister, Ernesto Araújo, who had mocked the 'comunavirus', was forced out in March 2021, partly because his clashes with China threatened supplies of vaccine ingredients. Bolsonaro showed that even a leader hostile to Beijing found it hard to act on that hostility." },
        { type: "compare", head: "What the episode showed",
          left: { head: "Pragmatism wins", md:
            "Brazil's dependence on Chinese buyers forces any government, left or right, to get along with Beijing." },
          right: { head: "Dependence is dangerous", md:
            "If a president can't act on his own policy toward China, Brazil has given Beijing too much leverage." } },
        { type: "section", head: "Why it matters", md:
          "Bolsonaro's son Flávio is running for president in October 2026. His father's record suggests that even a right-wing government would find it hard to turn away from China." }
      ],
      takeaways: [
        "Bolsonaro visited Taiwan in 2018 and warned that China was 'buying Brazil'.",
        "In office he visited Beijing in 2019, but rejected the Chinese CoronaVac vaccine in 2020.",
        "CoronaVac became Brazil's first approved vaccine, and Brazil did not ban Huawei from 5G."
      ],
      check: { q: "What happened to the Chinese CoronaVac vaccine in Brazil?",
        choices: ["It was banned permanently", "Bolsonaro rejected it, but it became Brazil's first approved Covid vaccine", "It was never produced"], answer: 1,
        explain: "Regulators approved it in January 2021; São Paulo's Butantan Institute produced it with Sinovac." },
      sources: [
        { title: "The Brazilian Extreme-Right and China", publisher: "Journal of Current Chinese Affairs (SAGE)", url: "https://journals.sagepub.com/doi/full/10.1177/1866802X241263362", date: "2024" },
        { title: "Brazil's president slams vaccine his health ministry plans to buy", publisher: "Al Jazeera", url: "https://www.aljazeera.com/economy/2020/10/21/brazils-president-slams-vaccine-after-health-ministry-buys-it", date: "2020-10-21" },
        { title: "Brazil approves import of Chinese coronavirus vaccine that Jair Bolsonaro had previously refused", publisher: "South China Morning Post", url: "https://www.scmp.com/news/world/article/3106906/brazil-approves-import-chinese-coronavirus-vaccine-jair-bolsonaro-had", date: "2020-10" },
        { title: "República Popular da China critica Bolsonaro por sua visita a Taiwan", publisher: "Poder360", url: "https://www.poder360.com.br/brasil/republica-popular-da-china-critica-bolsonaro-por-sua-visita-a-taiwan/", date: "2018-03" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "br_cn-3", kind: "relation", asOf: "2026-09-30",
      title: "Lula, Xi and Trump's tariffs",
      dek: "Back in power, Lula has drawn closer to China, while keeping out of its Belt and Road plan. Trump's trade wars sent Chinese buyers to Brazilian farms, and trade hit a record $171 billion in 2025.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/br_cn/br_cn-3-hero.webp",
          alt: "Illustration of a new car factory in a tropical landscape with rows of electric cars outside.",
          caption: "China's BYD is building its biggest car plant outside Asia in Camaçari, in Bahia.",
          credit: "AI illustration — not a photograph",
          prompt: "A large new white car factory in a green tropical landscape with palm trees, rows of new electric cars parked outside, a charging station, bright sun and scattered clouds, modern documentary style, no logos, no flags, no legible text." },
        { type: "timeline", head: "A closer embrace", items: [
          ["Apr 2023", "Lula visits Beijing early in his third term"],
          ["Oct 2024", "Brazil decides not to join the Belt and Road Initiative"],
          ["Nov 2024", "Xi's state visit to Brasília"],
          ["May 2025", "Lula in Beijing; about 30 agreements signed"],
          ["2025", "US tariffs of 50% on Brazil; trade with China hits $171 billion"],
          ["4 Oct 2026", "Brazil votes: Lula against Flávio Bolsonaro"]
        ] },
        { type: "section", head: "Partners, not members", md:
          "Lula returned to the presidency in 2023 (see [[lesson:br-4]]) and flew to Beijing within months. He calls China a partner in a fairer world order and has criticised the dominance of the dollar. Yet Brazil keeps its options open. In October 2024 Lula's foreign policy adviser, Celso Amorim, said Brazil would not sign up to China's Belt and Road Initiative, preferring to seek 'synergies' project by project. Xi Jinping made a state visit to Brasília in November 2024, and in May 2025 Lula returned to Beijing with 11 ministers and more than 150 business leaders; about 30 agreements were signed and Brazil announced $5 billion of Chinese investment." },
        { type: "section", head: "Winners from the trade war", md:
          "America's trade fights have pushed Brazil and China together. When China put tariffs on American soybeans in its trade war with Washington (see [[lesson:us_cn-3]]), Chinese buyers turned to Brazil: from January to October 2025 Brazil sold China a record 79 million tonnes, nearly 80% of its soybean exports. Then Trump put 50% tariffs on many Brazilian goods in 2025, partly over the prosecution of Jair Bolsonaro (see [[lesson:br-6]]), making China even more important. Trade between Brazil and China reached a record $171 billion in 2025, and China accounted for 27% of all of Brazil's foreign trade." },
        { type: "section", head: "Cars, rails and a choice", md:
          "Chinese companies are now investing in Brazilian industry, not just buying its crops. The carmaker BYD took over a former Ford plant at Camaçari, in Bahia, as its biggest car factory outside Asia. After the BRICS summit in Rio in July 2025, Brazil signed an agreement with a Chinese state institute to study a railway linking the Atlantic coast to the Chinese-built port of Chancay in Peru, though no route has been approved. Brazil's election on 4 October 2026 (see [[lesson:br-7]]) pits Lula against Flávio Bolsonaro, who looks to Trump but, like his father, would face the reality of China as Brazil's biggest customer." },
        { type: "compare", head: "How close to China?",
          left: { head: "Lula's camp", md:
            "China is Brazil's biggest customer and a source of investment; closer ties protect Brazil from Trump's tariffs." },
          right: { head: "Critics", md:
            "Brazil risks swapping dependence on America for dependence on China, and Chinese goods threaten its factories." } },
        { type: "section", head: "Why it matters", md:
          "Brazil is the biggest economy in Latin America. Whether it leans toward Washington or Beijing matters for the whole region." }
      ],
      takeaways: [
        "Lula has drawn closer to China but declined in 2024 to join the Belt and Road Initiative.",
        "US–China and US–Brazil trade wars sent Chinese demand to Brazil; trade hit $171 billion in 2025.",
        "BYD is building cars in Bahia, and a railway to Peru's Chancay port is being studied."
      ],
      check: { q: "What did Brazil decide about China's Belt and Road Initiative in 2024?",
        choices: ["To join it formally", "Not to join, but to pursue cooperation project by project", "To oppose it at the UN"], answer: 1,
        explain: "Lula's adviser Celso Amorim said Brazil would seek 'synergies' without signing an accession agreement." },
      sources: [
        { title: "Brazil-China trade hits record in 2025, reaching $171 billion", publisher: "Global Times", url: "https://www.globaltimes.cn/page/202601/1353165.shtml", date: "2026-01" },
        { title: "Brazil's BRI Rejection a Setback for China", publisher: "The China-Global South Project", url: "https://chinaglobalsouth.com/2024/10/30/brazils-bri-rejection-a-setback-for-china/", date: "2024-10-30" },
        { title: "Brazil Deepens Its Bond With China", publisher: "Americas Quarterly", url: "https://www.americasquarterly.org/article/brazil-deepens-bond-china/", date: "2025-05" },
        { title: "Brazil and China sign a bilateral cooperation agreement for a feasibility study", publisher: "Fundación Andrés Bello", url: "https://www.fundacionandresbello.org/en/news/brazil-%F0%9F%87%A7%F0%9F%87%B7/brazil-and-china-sign-a-bilateral-cooperation-agreement-for-a-feasibility-study/", date: "2025-07" },
        { title: "How Flávio Bolsonaro Sees the World", publisher: "Foreign Policy", url: "https://foreignpolicy.com/2026/09/21/brazil-presidential-election-lula-bolsonaro-china-us-trump/", date: "2026-09-21" }
      ]
    }
  ]
});
