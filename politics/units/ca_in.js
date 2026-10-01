/* ============================================================
   Relationship — Canada & India 🇨🇦🇮🇳
   The Komagata Maru, a Canadian reactor and India's 1974 bomb,
   and the Air India bombing; a big Sikh diaspora and the 2023
   killing of Hardeep Singh Nijjar; and Carney's reset, a uranium
   deal and trade talks. Canada's China ties are in ca_cn.
   Research note and sources: tools/research/ca_in.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("ca_in", {
  id: "ca_in",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "ca_in-1", kind: "relation", asOf: "2026-10-01",
      title: "A ship, a reactor and a bomb",
      dek: "Canada turned away a shipload of Indian migrants in 1914, gave India a reactor that produced plutonium for its first nuclear test, and suffered its worst terrorist attack when Sikh militants bombed an Air India jet.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ca_in/ca_in-1-hero.webp",
          alt: "Illustration of an old steamship anchored in a harbour with mountains behind, its deck crowded with turbaned passengers.",
          caption: "The Komagata Maru was kept anchored off Vancouver for two months in 1914.",
          credit: "Illustration — not a photograph",
          prompt: "An old black steamship anchored in a calm harbour with forested mountains behind, its deck crowded with passengers in turbans seen from a distance, small police boats nearby, overcast 1914 light, historical painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "Old wounds", items: [
          ["1914", "The Komagata Maru is turned away at Vancouver"],
          ["1956", "Canada agrees to supply the CIRUS research reactor"],
          ["May 1974", "India's first nuclear test uses plutonium from CIRUS"],
          ["1976", "Canada ends nuclear cooperation with India"],
          ["23 Jun 1985", "Air India Flight 182 bombed; 329 killed"],
          ["2016", "Trudeau apologises for the Komagata Maru"]
        ] },
        { type: "section", head: "The Komagata Maru", md:
          "In 1914 a Japanese steamship, the Komagata Maru, arrived off Vancouver carrying 376 passengers from British India, most of them Sikhs from Punjab and all of them British subjects. Canadian law, designed to keep out Asians, required migrants to arrive by 'continuous journey' from their home country, which was impossible from India. Almost all were refused entry. After two months the ship was forced back to India, where at least 19 passengers were killed in a clash with British troops. In 2016 Justin Trudeau formally apologised in Parliament." },
        { type: "section", head: "Atoms for peace, and a bomb", md:
          "After independence, Canada and India were Commonwealth partners and Canada was keen to help. In 1956 it agreed to supply a research reactor, CIRUS, near Bombay, on India's promise to use it only for peaceful purposes. In May 1974 India exploded a nuclear device at Pokhran, using plutonium produced in CIRUS. Canadians felt betrayed. Canada suspended nuclear cooperation at once and ended it formally in 1976. The episode helped shape the world's nuclear export controls." },
        { type: "section", head: "Air India 182", md:
          "On 23 June 1985 a bomb exploded on Air India Flight 182 from Toronto via Montreal to London and Delhi, off the coast of Ireland, killing all 329 people aboard, most of them Canadians of Indian origin. A second bomb, meant for another Air India flight, killed two baggage handlers at Tokyo's Narita airport. The plot was traced to Sikh militants in British Columbia seeking revenge for India's 1984 assault on the Golden Temple. It remains Canada's deadliest terrorist attack." },
        { type: "section", head: "Justice delayed", md:
          "The investigation was a failure. Two accused were acquitted in 2005, and only one man, Inderjit Singh Reyat, was convicted, for manslaughter, for building the bombs. A public inquiry found serious failings by Canada's police and intelligence services. India long complained that Canada had been too tolerant of Sikh militancy, a grievance that would return decades later." },
        { type: "section", head: "Sikhs in Canadian politics", md:
          "Sikh pioneers arrived in British Columbia in the early 1900s to work in sawmills and on railways. Over the following century the community grew into a powerful political force, especially in the suburbs of Vancouver and Toronto. In 2015 Justin Trudeau appointed four Sikh ministers, joking that his cabinet had more Sikhs than Modi's, and from 2017 Jagmeet Singh led the New Democratic Party, the first Sikh to lead a major Canadian party." },
        { type: "compare", head: "Two views of the past",
          left: { head: "In India", md:
            "Canada once shut out Indians, then let Sikh extremists organise and kill." },
          right: { head: "In Canada", md:
            "India misused Canadian nuclear help and has long treated Sikh dissent as terrorism." } },
        { type: "section", head: "Why it matters", md:
          "These old wounds, over migrants, nuclear trust and Sikh militancy, explain why Canada–India relations are so easily inflamed." }
      ],
      takeaways: [
        "In 1914 Canada turned away the Komagata Maru's Indian passengers; Canada apologised in 2016.",
        "India's 1974 nuclear test used plutonium from the Canadian-supplied CIRUS reactor.",
        "The 1985 Air India bombing by Sikh militants killed 329 people, mostly Canadians."
      ],
      check: { q: "Why did Canada end nuclear cooperation with India in the 1970s?",
        choices: ["India left the Commonwealth", "India's 1974 test used plutonium from a Canadian-supplied reactor", "Canada closed its nuclear plants"], answer: 1,
        explain: "The CIRUS reactor had been supplied for peaceful purposes." },
      sources: [
        { title: "Komagata Maru apology: Ship's story represents 'dark chapter' of Canada's past", publisher: "CBC News", url: "https://www.cbc.ca/news/canada/komagata-maru-backgrounder-apology-1.3584372", date: "2016-05" },
        { title: "Canadian Nuclear Cooperation with India and Pakistan", publisher: "Canadian Coalition for Nuclear Responsibility", url: "https://www.ccnr.org/india_pak_coop.html", date: "n.d." },
        { title: "Air India Flight 182 Bombing", publisher: "The Canadian Encyclopedia", url: "https://www.thecanadianencyclopedia.ca/en/article/air-india-flight-182-bombing", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "ca_in-2", kind: "relation", asOf: "2026-10-01",
      title: "The Nijjar affair",
      dek: "In 2023 Justin Trudeau accused 'agents of the Indian government' of killing a Sikh separatist in a Vancouver suburb. India called it absurd, and both countries expelled each other's diplomats.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ca_in/ca_in-2-hero.webp",
          alt: "Illustration of a white Sikh temple with a gold dome in a suburban street at dusk, with a car park in front.",
          caption: "Hardeep Singh Nijjar was shot in the car park of a Sikh temple in Surrey, British Columbia.",
          credit: "Illustration — not a photograph",
          prompt: "A white Sikh temple with a golden dome in a quiet suburban street at dusk, an almost empty car park in front, street lamps coming on, evergreen trees, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "A diplomatic rupture", items: [
          ["18 Jun 2023", "Hardeep Singh Nijjar shot dead in Surrey, BC"],
          ["18 Sep 2023", "Trudeau tells Parliament of 'credible allegations' against India"],
          ["Sep–Oct 2023", "Diplomats expelled; India suspends visas for Canadians"],
          ["May 2024", "Four Indian nationals charged with the murder"],
          ["Oct 2024", "Canada expels India's high commissioner and five others"],
          ["Mar 2025", "Trudeau steps down"]
        ] },
        { type: "section", head: "Canada's Sikhs", md:
          "About 1.8 million Canadians, roughly 5% of the population, have Indian heritage, and Canada has one of the largest Sikh communities outside India. A small but vocal minority supports Khalistan, an independent Sikh state carved out of Punjab, and holds unofficial 'referendums' on it. India regards the movement as terrorism and has long demanded that Canada act against its leaders; Canadian governments reply that peaceful advocacy is legal." },
        { type: "section", head: "A killing in Surrey", md:
          "On 18 June 2023 Hardeep Singh Nijjar, a Canadian citizen and president of a Sikh temple in Surrey, British Columbia, was shot dead by masked gunmen in its car park. India had designated him a terrorist; his supporters said he was a peaceful activist. On 18 September Trudeau told Parliament that Canada's security agencies were pursuing 'credible allegations' of a link between 'agents of the Government of India' and the killing. India called the claim 'absurd and motivated'." },
        { type: "section", head: "Expulsions", md:
          "Each side expelled a senior diplomat, and India briefly suspended visas for Canadians and forced Canada to withdraw dozens of diplomats. In May 2024 Canadian police charged four Indian nationals with the murder. In October 2024 the RCMP said Indian agents had worked with organised crime to target Khalistan supporters in Canada; Canada expelled India's high commissioner and five other diplomats, and India expelled six Canadians. The United States, meanwhile, charged an Indian official over a foiled plot to kill a Sikh activist in New York." },
        { type: "section", head: "Collateral damage", md:
          "Trade talks were frozen and travel and student flows slowed. Many Indian students, Canada's largest group of international students, were also hit by Canada's own crackdown on student numbers: permits for Indians fell by about half in 2025, to around 95,000. Indian politicians accused Trudeau of playing to Sikh voters; his critics at home said he had handled the affair clumsily, while his supporters said he had defended Canada's sovereignty." },
        { type: "section", head: "Allies watching", md:
          "Canada's allies were cautious in public. The US ambassador in Ottawa later said that intelligence shared among the 'Five Eyes' partners had informed Trudeau's statement, and Washington urged India to cooperate with the investigation. But no ally wanted a rupture with India, a key partner against China, which left Canada largely on its own." },
        { type: "compare", head: "The rival narratives",
          left: { head: "Canada", md:
            "A foreign government killed a Canadian on Canadian soil; sovereignty is not negotiable." },
          right: { head: "India", md:
            "Canada shelters extremists who threaten India's unity and produces no public evidence." } },
        { type: "section", head: "Why it matters", md:
          "The affair showed how diaspora politics can upend relations between democracies, and how far India is willing to go against those it sees as separatists." }
      ],
      takeaways: [
        "Sikh separatist Hardeep Singh Nijjar was shot dead in Surrey, BC, in June 2023.",
        "Trudeau accused Indian government agents of involvement; India denied it and both sides expelled diplomats.",
        "In 2024 four Indian nationals were charged and Canada expelled India's high commissioner."
      ],
      check: { q: "What did Trudeau tell Parliament in September 2023?",
        choices: ["That Canada would leave the Commonwealth", "That there were credible allegations linking Indian government agents to Nijjar's killing", "That Canada recognised Khalistan"], answer: 1,
        explain: "India rejected the allegations as 'absurd and motivated'." },
      sources: [
        { title: "Trudeau accuses India's government of involvement in killing of Canadian Sikh leader", publisher: "CBC News", url: "https://www.cbc.ca/news/politics/trudeau-indian-government-nijjar-1.6970498", date: "2023-09-18" },
        { title: "At 1.8 million, 5% Canadians have the Indian heritage: Census data", publisher: "Business Standard", url: "https://www.business-standard.com/india-news/at-1-8-million-5-canadians-have-the-indian-heritage-census-data-123091900926_1.html", date: "2023-09-19" },
        { title: "Indian students see 50 per cent drop in Canadian study permits in 2025", publisher: "The Tribune", url: "https://www.tribuneindia.com/news/diaspora/indian-students-see-50-per-cent-drop-in-canadian-study-permits-in-2025", date: "2026" },
        { title: "India slams 'cavalier' Trudeau in Sikh separatist murder row", publisher: "Gulf News", url: "https://gulfnews.com/world/asia/india/india-slams-cavalier-trudeau-in-sikh-separatist-murder-row-1.104401936", date: "2024-10" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "ca_in-3", kind: "relation", asOf: "2026-10-01",
      title: "Carney's reset",
      dek: "Facing Trump's tariffs, Mark Carney invited Modi to the G7, restored high commissioners and flew to India to sign a uranium deal and launch trade talks. The security concerns have not gone away.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/ca_in/ca_in-3-hero.webp",
          alt: "Illustration of a uranium mine in northern boreal forest, with yellow ore trucks and a processing plant.",
          caption: "Canada's Cameco agreed to supply India with uranium from 2027 to 2035.",
          credit: "Illustration — not a photograph",
          prompt: "A uranium mine in northern boreal forest, a processing plant with silver tanks and conveyor belts, yellow heavy trucks, a lake in the distance, cool clear light, documentary painting style, no people close up, no logos, no flags, no legible text." },
        { type: "timeline", head: "Rebuilding", items: [
          ["Jun 2025", "Modi at the G7 in Kananaskis; high commissioners to return"],
          ["Sep 2025", "High commissioners back in place"],
          ["Nov 2025", "Trade ministers agree to restart talks"],
          ["27 Feb–2 Mar 2026", "Carney's first official visit to India"],
          ["2 Mar 2026", "CEPA talks launched; Cameco uranium deal"],
          ["Sep 2026", "Carney says Canada has 'some evidence' of India-linked threats"]
        ] },
        { type: "section", head: "Trump changes the maths", md:
          "Mark Carney became prime minister in March 2025 as Donald Trump's tariffs and talk of making Canada the '51st state' upended its biggest relationship (see [[lesson:ca-6]]). Diversifying trade became urgent, and India, the world's fastest-growing big economy, was an obvious target. Carney invited Modi to the G7 summit in Kananaskis in June 2025, angering some Sikh groups; there the two agreed to restore high commissioners, which was done by September." },
        { type: "section", head: "Carney in India", md:
          "Carney made his first official visit to India from 27 February to 2 March 2026, starting in Mumbai. On 2 March he and Modi launched formal negotiations on a Comprehensive Economic Partnership Agreement, aiming to raise two-way trade to about C$70 billion by 2030, and Carney said he wanted the deal done by the end of 2026. The two also signed deals on critical minerals and energy." },
        { type: "section", head: "Uranium again", md:
          "The headline deal was nuclear. Saskatchewan's Cameco agreed to supply nearly 22 million pounds of uranium to India from 2027 to 2035, worth about $2.6 billion, fuel for India's plan to expand nuclear power massively. Fifty years after Canada cut off nuclear cooperation over India's 1974 test, Canadian uranium is now an important part of India's nuclear plans, under international safeguards agreed in a 2010 cooperation pact." },
        { type: "section", head: "Security shadows", md:
          "Carney has not dropped the security issue. In an interview published in September 2026 he said Canada had 'some evidence' tied to security concerns involving India and could not guarantee that India-linked crimes would not happen again in Canada. The case against the four men charged with Nijjar's murder is still before the courts, and Sikh groups accuse Ottawa of putting trade ahead of their safety. India still wants Canada to curb Khalistan activism." },
        { type: "section", head: "Students and people", md:
          "Hundreds of thousands of Indian students and workers have moved to Canada in the past decade, helping fill its colleges and labour market. Canada's tighter caps on study permits and immigration hit Indians hardest, cutting a flow of money and talent both sides valued. Restoring some of that exchange is part of the reset, though Canada's housing shortage limits how far it can go." },
        { type: "compare", head: "The reset",
          left: { head: "Pragmatism", md:
            "Canada needs new markets; India needs uranium, minerals and investment." },
          right: { head: "Principle", md:
            "The Nijjar case is unresolved; critics say Ottawa is too quick to move on." } },
        { type: "section", head: "Why it matters", md:
          "Canada's turn to India is part of a wider search for partners beyond the United States. Whether the reset survives the Nijjar trial will be its real test." }
      ],
      takeaways: [
        "Carney invited Modi to the 2025 G7, and high commissioners were restored by September 2025.",
        "In March 2026 the two launched trade talks and Cameco agreed to supply India with uranium.",
        "Carney says Canada still has evidence of India-linked security threats."
      ],
      check: { q: "What did Canada's Cameco agree to supply India in 2026?",
        choices: ["Oil", "Uranium", "Wheat"], answer: 1,
        explain: "Nearly 22 million pounds from 2027 to 2035, about $2.6 billion." },
      sources: [
        { title: "India and Canada signal a reset of relations nearly two years after assassination of Sikh separatist", publisher: "CNN", url: "https://www.cnn.com/2025/06/18/world/india-cananda-reset-ties-g7-intl-hnk", date: "2025-06-18" },
        { title: "Canada-India Relations Stabilize With PM Carney's Visit", publisher: "The Diplomat", url: "https://thediplomat.com/2026/03/canada-india-relations-stabilize-with-pm-carneys-visit/", date: "2026-03" },
        { title: "Why India's $2.6 bn uranium pact with Canada matters for clean energy push", publisher: "Business Standard", url: "https://www.business-standard.com/economy/news/india-canada-uranium-deal-nuclear-energy-mission-100gw-cepa-us-pact-126030200889_1.html", date: "2026-03-02" },
        { title: "Mark Carney's visit to India hits the reset button on the Canada–India relationship", publisher: "The Conversation", url: "https://theconversation.com/mark-carneys-visit-to-india-hits-the-reset-button-on-the-canada-india-relationship-277015", date: "2026-03" },
        { title: "Carney says Canada has evidence of India-linked security concerns", publisher: "Daily Times", url: "https://dailytimes.com.pk/1561001/carney-says-canada-has-evidence-of-india-linked-security-concerns", date: "2026-09" }
      ]
    }
  ]
});
