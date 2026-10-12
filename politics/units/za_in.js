/* ============================================================
   Relationship — South Africa & India 🇿🇦🇮🇳
   Indentured workers in Natal, Gandhi's twenty years in South
   Africa and India's early fight against apartheid; the 1997
   partnership, IBSA, BRICS, cricket and the Guptas; and cheetahs,
   US tariffs and the BRICS summit in New Delhi in 2026.
   Research note and sources: tools/research/za_in.md
   Current as of 12 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("za_in", {
  id: "za_in",
  asOf: "2026-10-12",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "za_in-1", kind: "relation", asOf: "2026-10-12",
      title: "Gandhi, Natal and apartheid",
      dek: "Indians came to South Africa as indentured labourers from 1860. Mohandas Gandhi developed his methods of non-violent resistance there, and independent India was among the first countries to fight apartheid.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/za_in/za_in-1-hero.webp",
          alt: "Illustration of a small Victorian railway station platform at night, a steam train waiting under gas lamps.",
          caption: "Gandhi was thrown off a train at Pietermaritzburg station in 1893.",
          credit: "Illustration — not a photograph",
          prompt: "A small Victorian railway station platform at night with a red-brick building, iron canopy and gas lamps, a steam train waiting with lit carriages, cold mist, historical documentary painting style, figures small and distant, no faces, no flags, no legible text." },
        { type: "timeline", head: "From Natal to independence", items: [
          ["1860", "First indentured Indian workers arrive in Natal"],
          ["Jun 1893", "Gandhi is put off a train at Pietermaritzburg"],
          ["1906", "Gandhi launches satyagraha in the Transvaal"],
          ["1914", "Gandhi leaves South Africa for India"],
          ["1946", "India cuts trade ties and raises apartheid at the UN"],
          ["1994", "Democracy in South Africa; full relations restored"]
        ] },
        { type: "section", head: "Indentured", md:
          "From 1860 British planters in Natal brought workers from India on five-year contracts to cut sugar cane, because local Zulu people would not work on their terms. More than 150,000 came over the next fifty years, mostly from southern and eastern India, followed by traders, many from Gujarat. Their descendants today number about 1.4 million, the largest Indian community in Africa, centred on Durban. They faced discrimination from British colonists and, later, the apartheid state." },
        { type: "section", head: "Gandhi's school", md:
          "In 1893 a young lawyer, Mohandas Gandhi, arrived in Natal to work on a legal case. Travelling to Pretoria with a first-class ticket, he was thrown off the train at Pietermaritzburg because a white passenger objected to sharing the carriage. He later called it a turning point. He stayed for about twenty years, founding the Natal Indian Congress in 1894 and a newspaper, Indian Opinion." },
        { type: "section", head: "Satyagraha", md:
          "In 1906 the Transvaal government ordered Indians to register and carry passes. Gandhi led a campaign of mass, non-violent refusal he called satyagraha, 'holding to the truth'. Thousands were jailed, and in 1913 he led striking miners on a march into the Transvaal. A compromise in 1914 eased some laws, and Gandhi left for India, where he used the same methods against British rule. Some historians note that Gandhi's early writings in South Africa show contempt for Black Africans, a point debated in both countries today." },
        { type: "section", head: "Against apartheid", md:
          "Even before independence, India's interim government cut trade with South Africa in 1946 over its treatment of Indians, and raised the issue at the first sessions of the United Nations. After the National Party introduced apartheid in 1948, India became one of its fiercest critics, backing sanctions and sports boycotts and supporting the African National Congress, which opened an office in New Delhi in 1967. India awarded Nelson Mandela its highest honour, the Bharat Ratna, in 1990, the year he was freed; he visited India later that year." },
        { type: "section", head: "Old friends", md:
          "When South Africa became a democracy in 1994, many ANC leaders, among them Indian South Africans who had fought apartheid, saw India as an old friend, and full diplomatic relations followed at once." },
        { type: "compare", head: "A shared story",
          left: { head: "In South Africa", md:
            "Gandhi is remembered as a founder of organised resistance, though his views on Africans are debated." },
          right: { head: "In India", md:
            "South Africa is where Gandhi became the Mahatma, and apartheid a cause of the new nation." } },
        { type: "section", head: "Why it matters", md:
          "The two countries' bond grew out of shared struggles against racism and empire. That history still gives their relationship a warmth that few other partnerships in the developing world have." }
      ],
      takeaways: [
        "Indentured Indians came to Natal from 1860; their descendants number about 1.4 million.",
        "Gandhi developed non-violent resistance, satyagraha, in South Africa between 1893 and 1914.",
        "India cut trade with South Africa in 1946 and backed the ANC against apartheid."
      ],
      check: { q: "Where did Gandhi first develop his method of satyagraha?",
        choices: ["In London", "In South Africa", "In Bombay"], answer: 1,
        explain: "He led Indians in the Transvaal in mass non-violent refusal from 1906." },
      sources: [
        { title: "India–South Africa relations", publisher: "Ministry of External Affairs, India", url: "https://meacms.mea.gov.in/Portal/ForeignRelation/India-South_Africa26.pdf", date: "2026" },
        { title: "Mahatma Gandhi: South Africa", publisher: "Britannica", url: "https://www.britannica.com/biography/Mahatma-Gandhi", date: "n.d." },
        { title: "Indian South Africans", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Indian_South_Africans", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "za_in-2", kind: "relation", asOf: "2026-10-12",
      title: "IBSA, BRICS and the Guptas",
      dek: "In 1997 South Africa became India's first strategic partner. The two joined Brazil in IBSA and later formed BRICS, and cricket tied them closely. But the scandal of the Gupta brothers showed a darker side.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/za_in/za_in-2-hero.webp",
          alt: "Illustration of a large cricket stadium under floodlights at dusk with a packed crowd.",
          caption: "Cricket has been a bond between the two since South Africa's return in 1991.",
          credit: "Illustration — not a photograph",
          prompt: "A large cricket stadium under bright floodlights at dusk, a packed crowd in the stands and tiny white-clad players on the green field, a city skyline behind, documentary painting style, figures tiny and distant, no flags, no legible text." },
        { type: "timeline", head: "Partners", items: [
          ["Nov 1991", "South Africa's cricket team tours India on its return"],
          ["Mar 1997", "Strategic partnership signed"],
          ["Jun 2003", "India, Brazil and South Africa form IBSA"],
          ["2011", "South Africa joins BRIC, making it BRICS"],
          ["Feb 2018", "Zuma resigns amid the 'state capture' scandal"],
          ["Oct 2020", "India and South Africa propose a COVID vaccine patent waiver"]
        ] },
        { type: "section", head: "First partner", md:
          "In March 1997 India and South Africa signed a strategic partnership, the first India had agreed with any country. Trade grew from very little to over 15 billion dollars a year by the 2020s: India buys South African coal, gold and phosphates, and sells cars, medicines, rice and refined fuel. Indian firms such as Tata, Mahindra and Cipla invested in South Africa, and South African firms like Shoprite, SABMiller and Naspers went the other way." },
        { type: "section", head: "IBSA and BRICS", md:
          "In 2003 India, Brazil and South Africa, three large multiracial democracies of the global South, formed the IBSA forum to coordinate on trade and UN reform. In 2010 China invited South Africa to join the BRIC group of Brazil, Russia, India and China, which became [[BRICS]] in 2011. Both countries want permanent seats or a stronger voice on the UN Security Council. In October 2020 they jointly proposed that the World Trade Organization waive patents on COVID-19 vaccines and medicines so poorer countries could make them; a narrower deal was agreed in 2022." },
        { type: "section", head: "Cricket", md:
          "South Africa had been banned from Test cricket under apartheid. When it was readmitted in 1991, its first tour was to India, in November that year, and the welcome in Kolkata became a symbol of its return to the world. The two have since played some of cricket's most famous matches, and many Indian South Africans grew up torn between the teams. The Indian Premier League, the lucrative club competition, even moved its 2009 season to South Africa when an Indian general election made security difficult at home, and South African players have long been stars of the league." },
        { type: "section", head: "The Guptas", md:
          "Three brothers from Saharanpur in Uttar Pradesh, Ajay, Atul and Rajesh Gupta, moved to South Africa in the 1990s and built a business empire. They grew close to President Jacob Zuma, whose son worked for them. A judicial commission led by Raymond Zondo later found that they had used that access to influence ministerial appointments and win state contracts, a scheme South Africans call 'state capture'. Zuma resigned in 2018. The brothers left for Dubai; an attempt to extradite two of them failed in 2023." },
        { type: "compare", head: "Two faces of the bond",
          left: { head: "Partnership", md:
            "IBSA, BRICS, trade, cricket and shared positions on global reform." },
          right: { head: "Scandal", md:
            "The Gupta family's 'state capture' of the South African state under Zuma." } },
        { type: "section", head: "Why it matters", md:
          "India and South Africa often speak with one voice for the developing world. Their partnership shows how shared history can be turned into diplomatic weight." }
      ],
      takeaways: [
        "In 1997 South Africa became India's first strategic partner.",
        "Both are founders of IBSA (2003) and members of BRICS since 2011, and jointly proposed a COVID vaccine patent waiver.",
        "The Indian-born Gupta brothers were found to have captured parts of South Africa's state under Zuma."
      ],
      check: { q: "What was 'state capture' in South Africa?",
        choices: ["India's purchase of South African mines", "The Gupta family's use of access to Zuma to influence appointments and contracts", "South Africa's entry into BRICS"], answer: 1,
        explain: "The Zondo commission documented it; Zuma resigned in 2018." },
      sources: [
        { title: "India–South Africa relations", publisher: "Ministry of External Affairs, India", url: "https://meacms.mea.gov.in/Portal/ForeignRelation/India-South_Africa26.pdf", date: "2026" },
        { title: "Gupta family", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gupta_family", date: "n.d." },
        { title: "IBSA Dialogue Forum", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/IBSA_Dialogue_Forum", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "za_in-3", kind: "relation", asOf: "2026-10-12",
      title: "Cheetahs, tariffs and Delhi",
      dek: "South African cheetahs now roam an Indian national park. In 2025 and 2026 the two passed the G20 and BRICS chairs between them, while both faced American tariffs.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/za_in/za_in-3-hero.webp",
          alt: "Illustration of a cheetah resting on a rock in dry grassland with scattered trees.",
          caption: "Cheetahs from South Africa were moved to Kuno National Park in India in 2023.",
          credit: "Illustration — not a photograph",
          prompt: "A cheetah resting on a flat rock in dry golden grassland with scattered thorny trees and low hills behind, hazy afternoon light, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Recent years", items: [
          ["Feb 2023", "Twelve cheetahs flown from South Africa to India"],
          ["Aug 2023", "BRICS summit in Johannesburg invites new members"],
          ["2025", "US tariffs hit both countries"],
          ["Nov 2025", "G20 summit in Johannesburg; India gets ready to chair BRICS"],
          ["13 Sep 2026", "Modi and Ramaphosa meet at the BRICS summit in New Delhi"],
          ["2026", "Talks continue on an India–SACU trade agreement"]
        ] },
        { type: "section", head: "Cheetahs", md:
          "Cheetahs were hunted to extinction in India by the mid-20th century. In 2022 India began a project to bring them back, flying eight from Namibia, and in February 2023 twelve more arrived from South Africa at Kuno National Park in Madhya Pradesh. Several animals died in the first year, from infections and injuries, but cubs have since been born in India. In September 2026 Modi invited South Africa to join his International Big Cat Alliance, citing the cheetah project." },
        { type: "section", head: "Summits", md:
          "South Africa hosted the BRICS summit in Johannesburg in August 2023, which invited new members including Egypt, Ethiopia, Iran and the UAE. In November 2025 South Africa became the first African country to host a G20 leaders' summit, also in Johannesburg; the United States boycotted it. There Ramaphosa promised full support for India's BRICS chairmanship in 2026. On 13 September 2026, at the BRICS summit in New Delhi, Modi and Ramaphosa reviewed their partnership and discussed trade, critical minerals, infrastructure, food security and digital technology." },
        { type: "section", head: "Tariffs", md:
          "Both countries were hit by President Trump's tariffs in 2025. India faced a 50 per cent tariff on many goods, partly as a penalty for buying Russian oil, and South Africa a 30 per cent rate, while Washington attacked its land policy and its genocide case against Israel at the International Court of Justice. The pressure gave both a reason to look to each other and to BRICS for markets, though neither wants a break with the United States." },
        { type: "section", head: "Trade talks", md:
          "India has long negotiated a preferential trade agreement with the Southern African Customs Union, which links South Africa with Botswana, Eswatini, Lesotho and Namibia. Modi mentioned it again after the September meeting. Indian investors are also interested in South African critical minerals, such as manganese and platinum-group metals, used in batteries and clean energy. South Africa, for its part, wants Indian investment in factories rather than only in mining, and hopes Indian pharmaceutical firms will make more medicines locally. Indian companies are already among the larger foreign employers in the country." },
        { type: "compare", head: "What each wants from BRICS",
          left: { head: "India", md:
            "A voice for the global South, but not an anti-Western bloc dominated by China." },
          right: { head: "South Africa", md:
            "Investment, African leadership and reform of global institutions." } },
        { type: "section", head: "Why it matters", md:
          "As the US turns protectionist, India and South Africa are trying to make South–South ties pay. Whether BRICS delivers trade and investment, not just summits, will test their partnership." }
      ],
      takeaways: [
        "Twelve South African cheetahs were moved to India's Kuno National Park in February 2023.",
        "South Africa hosted the G20 in 2025; India chairs BRICS in 2026.",
        "Both faced US tariffs in 2025; Modi and Ramaphosa met in New Delhi on 13 September 2026."
      ],
      check: { q: "Why were South African cheetahs flown to India?",
        choices: ["For a zoo exchange", "To reintroduce cheetahs, which had died out in India", "As a gift for the G20"], answer: 1,
        explain: "India's cheetahs were hunted to extinction; the project began in 2022." },
      sources: [
        { title: "PM meets with the President of South Africa on the sidelines of the BRICS Summit in New Delhi", publisher: "Prime Minister's Office, India", url: "https://www.pmindia.gov.in/en/news_updates/pm-meets-with-the-president-of-south-africa-on-the-sidelines-of-the-brics-summit-in-new-delhi/", date: "2026-09-13" },
        { title: "G20: PM Modi, South Africa's President Ramaphosa deepen strategic ties", publisher: "The Tribune", url: "https://www.tribuneindia.com/news/world/g20-pm-modi-s-africas-prez-ramaphosa-deepen-strategic-ties-push-tech-trade-and-global-south-cooperation/amp", date: "2025-11" },
        { title: "Project Cheetah", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Project_Cheetah", date: "n.d." }
      ]
    }
  ]
});
