/* ============================================================
   Relationship — India & Indonesia 🇮🇳🇮🇩
   Indic kingdoms, a daring flight from Java, Sukarno at India's
   first Republic Day and Bandung; palm oil, coal and neighbours
   across the Andaman Sea; and Prabowo's parade, BRICS and a
   BrahMos missile deal in July 2026.
   Research note and sources: tools/research/in_id.md
   Current as of 12 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("in_id", {
  id: "in_id",
  asOf: "2026-10-12",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "in_id-1", kind: "relation", asOf: "2026-10-12",
      title: "Temples, a pilot and Bandung",
      dek: "Hindu and Buddhist kingdoms linked the two for centuries. In the 1940s India's leaders backed Indonesia's fight for independence, and in 1955 both stood at the heart of the Bandung conference.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in_id/in_id-1-hero.webp",
          alt: "Illustration of tall stone temple spires rising above palm trees and green fields at sunrise.",
          caption: "Prambanan, a 9th-century Hindu temple complex on Java.",
          credit: "Illustration — not a photograph",
          prompt: "A cluster of tall pointed stone Hindu temple spires rising above palm trees and green rice fields at sunrise, a volcano faint in the distance, historical documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Old ties, new states", items: [
          ["7th–13th c.", "Srivijaya and later kingdoms trade with India"],
          ["Aug 1945", "Sukarno proclaims Indonesian independence"],
          ["Jul 1947", "Biju Patnaik flies Sutan Sjahrir out of Java"],
          ["Jan 1949", "Nehru hosts a conference on Indonesia in New Delhi"],
          ["Jan 1950", "Sukarno is chief guest at India's first Republic Day"],
          ["Apr 1955", "The Asian-African Conference meets in Bandung"]
        ] },
        { type: "section", head: "An Indic world", md:
          "For more than a thousand years, traders, monks and priests carried Indian religions, scripts and stories across the Bay of Bengal. Kingdoms on Sumatra and Java, such as Buddhist Srivijaya and Hindu Majapahit, built temples like Borobudur and Prambanan. Islam spread later, partly through merchants from Gujarat, and today Indonesia has the world's largest Muslim population. But the Ramayana is still performed in Javanese dance, Bali remains mostly Hindu, and Indonesia's national airline is named Garuda, after the eagle that carries the god Vishnu." },
        { type: "section", head: "A flight from Java", md:
          "In 1945 Indonesian nationalists declared independence from the Netherlands, which sent troops to take back its colony. India, itself on the eve of independence, took Indonesia's side. In July 1947 Biju Patnaik, a pilot and politician later chief minister of Odisha, flew a Dakota through Dutch-controlled airspace and carried the Indonesian leader Sutan Sjahrir out to India so he could plead Indonesia's case abroad. Indonesia later honoured Patnaik, and the story is still told in both countries." },
        { type: "section", head: "Nehru's support", md:
          "Jawaharlal Nehru closed Indian ports and airports to Dutch military traffic and, in January 1949, hosted a conference of Asian states in New Delhi that demanded the Netherlands hand over power. The Dutch recognised Indonesia's independence that December. A month later, on 26 January 1950, Sukarno was chief guest at the first parade marking India's new constitution, the start of a Republic Day tradition of inviting a foreign leader." },
        { type: "section", head: "Bandung and non-alignment", md:
          "In April 1955 Indonesia hosted the Asian-African Conference in Bandung, where 29 newly independent states gathered. Nehru and Sukarno were among its stars, alongside China's Zhou Enlai and Egypt's Nasser. Its call for peaceful coexistence fed into the Non-Aligned Movement, founded in Belgrade in 1961 with both countries among its founders." },
        { type: "section", head: "Drifting apart", md:
          "The warmth faded quickly. Sukarno moved closer to China and grew cool towards India, and Indonesia sided with Pakistan in the 1965 India–Pakistan war. After Suharto took power the same year, ties became correct but distant for decades." },
        { type: "compare", head: "Two giants of Asia",
          left: { head: "India", md:
            "Independent in 1947 after British rule; Hindu-majority; a parliamentary democracy." },
          right: { head: "Indonesia", md:
            "Independent after a war with the Dutch; Muslim-majority; strong presidents." } },
        { type: "section", head: "Why it matters", md:
          "India and Indonesia helped invent the idea of a non-aligned developing world. That shared memory still shapes how both see themselves: as independent powers that refuse to pick sides between great powers." }
      ],
      takeaways: [
        "Hindu and Buddhist kingdoms in Indonesia drew on Indian religions and stories for centuries.",
        "India backed Indonesia's independence; Biju Patnaik flew Sutan Sjahrir out of Java in 1947.",
        "Sukarno was chief guest at India's first Republic Day in 1950, and both led the 1955 Bandung conference."
      ],
      check: { q: "Who was chief guest at India's first Republic Day parade in January 1950?",
        choices: ["Zhou Enlai", "Sukarno", "Gamal Abdel Nasser"], answer: 1,
        explain: "Indonesia's founding president began the tradition of a foreign guest of honour." },
      sources: [
        { title: "India–Indonesia relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/India%E2%80%93Indonesia_relations", date: "n.d." },
        { title: "Asian-African Conference", publisher: "Britannica", url: "https://www.britannica.com/event/Bandung-Conference", date: "n.d." },
        { title: "Biju Patnaik", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Biju_Patnaik", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "in_id-2", kind: "relation", asOf: "2026-10-12",
      title: "Palm oil, coal and a sea border",
      dek: "From the 1990s trade boomed: India became the biggest buyer of Indonesian palm oil and a major buyer of its coal. The two are maritime neighbours, and their navies patrol the waters between them.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in_id/in_id-2-hero.webp",
          alt: "Illustration of a tanker loading at a jetty beside rows of oil palms, a coal barge passing.",
          caption: "Palm oil and coal make up much of what India buys from Indonesia.",
          credit: "Illustration — not a photograph",
          prompt: "A tanker ship loading at a long jetty on a tropical river estuary, endless rows of oil palm plantations on the shore, a coal barge passing in the foreground, humid hazy light, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Trade and the sea", items: [
          ["1991", "India's 'Look East' policy begins"],
          ["2002", "Coordinated naval patrols start in the Andaman Sea"],
          ["Dec 2004", "Indian Ocean tsunami hits Aceh and the Andamans"],
          ["2014", "Modi renames it 'Act East'"],
          ["May 2018", "Modi visits Jakarta; Comprehensive Strategic Partnership"],
          ["2018", "Agreement to develop Sabang port"]
        ] },
        { type: "section", head: "Looking east", md:
          "When India opened its economy in 1991, it launched a 'Look East' policy to build ties with Southeast Asia. Indonesia, the largest country in the region, was central to it. Trade grew from a few billion dollars to around 30 billion dollars a year by the 2020s, making Indonesia one of India's largest trading partners in Southeast Asia. In 2014 Narendra Modi renamed the policy 'Act East', promising more action." },
        { type: "section", head: "Cooking oil and power stations", md:
          "India is the world's largest importer of edible oils, and much of it is Indonesian palm oil, used in cooking and processed food. When Indonesia briefly banned palm oil exports in April 2022 to bring down prices at home, Indian food prices felt it at once. India also buys large amounts of Indonesian thermal coal to fire its power stations. In the other direction, India sells refined petroleum products, cars and motorcycles, steel, pharmaceuticals and beef." },
        { type: "section", head: "Neighbours at sea", md:
          "Few people realise the two countries are neighbours. India's Andaman and Nicobar Islands stretch south to within about 150 kilometres of Indonesia's northern tip in Aceh. Since 2002 the two navies have run coordinated patrols along their maritime boundary against piracy, smuggling and illegal fishing. On 26 December 2004 an earthquake off Sumatra caused a tsunami that killed about 170,000 people in Indonesia and devastated the Andaman and Nicobar Islands too." },
        { type: "section", head: "Modi in Jakarta", md:
          "In May 2018 Modi made his first visit to Indonesia and raised the relationship to a Comprehensive Strategic Partnership with President Joko Widodo. The two issued a shared vision for maritime cooperation in the Indo-Pacific and agreed that India would help develop the port of Sabang, at the entrance to the Strait of Malacca, through which much of the world's shipping passes." },
        { type: "section", head: "Cautious friends", md:
          "Indonesia guards its non-alignment closely and keeps good ties with China, its largest trading partner and a major investor in its nickel industry. It does not join the [[Quad]] grouping of India, the US, Japan and Australia, and is wary of anything that looks like a bloc aimed at Beijing. India, for its part, has sometimes restricted imports, raising duties on palm oil to protect its own farmers, which Indonesian exporters resent. Both countries are large, proud and protective of their own industries, which has kept a free trade deal beyond the ASEAN–India agreement out of reach." },
        { type: "compare", head: "What they trade",
          left: { head: "Indonesia sells", md:
            "Palm oil, coal, rubber and minerals." },
          right: { head: "India sells", md:
            "Refined fuels, vehicles, steel, medicines and beef." } },
        { type: "section", head: "Why it matters", md:
          "The two most populous democracies of the Indian Ocean sit astride the routes into the Strait of Malacca. How closely they work together matters for shipping, food prices and the balance of power with China." }
      ],
      takeaways: [
        "India is the largest buyer of Indonesian palm oil and buys much of its coal.",
        "India's Andaman and Nicobar Islands lie within about 150 km of Indonesia's Aceh; their navies patrol together.",
        "In 2018 Modi and Widodo agreed a Comprehensive Strategic Partnership and Indian help with Sabang port."
      ],
      check: { q: "Which Indonesian product does India import most heavily for cooking?",
        choices: ["Rice", "Palm oil", "Sugar"], answer: 1,
        explain: "India is the world's largest edible-oil importer, and Indonesia is its main palm oil supplier." },
      sources: [
        { title: "India–Indonesia relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/India%E2%80%93Indonesia_relations", date: "n.d." },
        { title: "Look East policy (India)", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Look_East_policy_(India)", date: "n.d." },
        { title: "2004 Indian Ocean earthquake and tsunami", publisher: "Britannica", url: "https://www.britannica.com/event/Indian-Ocean-tsunami-of-2004", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "in_id-3", kind: "relation", asOf: "2026-10-12",
      title: "A parade, BRICS and BrahMos",
      dek: "In January 2025 Prabowo Subianto was guest of honour at India's Republic Day, as Sukarno had been 75 years earlier. In July 2026 Modi visited Jakarta and the two agreed a deal on India's BrahMos missiles.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/in_id/in_id-3-hero.webp",
          alt: "Illustration of a wide ceremonial avenue with a sandstone arch and marching columns in the distance.",
          caption: "Indonesian troops marched in India's Republic Day parade in 2025.",
          credit: "Illustration — not a photograph",
          prompt: "A wide ceremonial avenue in New Delhi leading to a great sandstone memorial arch, columns of marching soldiers far away and crowds of spectators along the sides, winter morning haze, documentary painting style, figures small and distant, no flags, no legible text." },
        { type: "timeline", head: "Recent years", items: [
          ["Oct 2024", "Prabowo Subianto becomes president"],
          ["Jan 2025", "Indonesia joins BRICS as a full member"],
          ["26 Jan 2025", "Prabowo is chief guest at India's Republic Day"],
          ["2026", "India chairs BRICS"],
          ["7 Jul 2026", "Modi in Jakarta; BrahMos and missile agreements"],
          ["Sep 2026", "BRICS summit in New Delhi"]
        ] },
        { type: "section", head: "Seventy-five years on", md:
          "Prabowo Subianto, a former general and defence minister, became Indonesia's president in October 2024. Three months later he was chief guest at India's Republic Day parade on 26 January 2025, exactly 75 years after Sukarno, and an Indonesian military contingent marched down the parade route in New Delhi. Prabowo and Modi agreed to deepen cooperation on defence, health, food security and digital technology." },
        { type: "section", head: "Both in BRICS", md:
          "In January 2025 Indonesia became a full member of BRICS, the group founded by Brazil, Russia, India and China and later joined by South Africa and others. India chairs BRICS in 2026 and hosted its summit in New Delhi in September. Both countries say BRICS is a way to give the developing world more voice, not an anti-Western bloc, and both keep close ties with the United States." },
        { type: "section", head: "The BrahMos deal", md:
          "BrahMos is a supersonic cruise missile built by an Indian–Russian joint venture and named after the Brahmaputra and Moskva rivers. It can strike ships or land targets. The Philippines bought shore-based batteries in 2022, and Vietnam followed. Indonesia, which patrols the waters around its Natuna Islands where Chinese ships have intruded, had long been interested. Talks were said to be at a 'very advanced stage' before Modi's visit." },
        { type: "section", head: "Modi in Jakarta", md:
          "On 7 July 2026 Modi visited Jakarta. India's foreign ministry announced an agreement on 'cooperation on BrahMos System' and a separate pact on air-to-air missiles, and Reuters reported that BrahMos and Indonesia's defence ministry had signed a contract. No value or delivery schedule was published, and neither leader mentioned the missiles in public. Instead they spoke of critical minerals and steel, of raising trade and of speeding up talks on a preferential trade agreement." },
        { type: "section", head: "Limits", md:
          "Indonesia still buys most of its weapons elsewhere: it has ordered French Rafale fighters and submarines, and it buys from Turkey, South Korea and the United States. It also keeps close economic ties with China, which has invested heavily in Indonesian nickel smelters for electric-vehicle batteries. Trade between India and Indonesia, though large, is lopsided in Indonesia's favour because of palm oil and coal, and India wants to sell more pharmaceuticals, engineering goods and services. Both governments set a goal of raising trade further, but a preferential trade agreement has been under discussion for years." },
        { type: "compare", head: "What each wants",
          left: { head: "India", md:
            "Arms exports, a partner at the mouth of the Malacca Strait, and Southeast Asian friends wary of China." },
          right: { head: "Indonesia", md:
            "Modern weapons from several suppliers, markets for palm oil and coal, and freedom to stay non-aligned." } },
        { type: "section", head: "Why it matters", md:
          "The BrahMos deal makes Indonesia one of a few Southeast Asian states to buy the missile. It shows India's growing role as an arms supplier and Indonesia's wish to deter intrusions near the Natunas without joining any bloc." }
      ],
      takeaways: [
        "Prabowo was chief guest at India's Republic Day in January 2025, 75 years after Sukarno.",
        "Indonesia joined BRICS in January 2025; India chairs the group in 2026.",
        "During Modi's July 2026 visit the two agreed on BrahMos missiles and air-to-air missile cooperation."
      ],
      check: { q: "What is BrahMos?",
        choices: ["An Indonesian palm oil company", "A supersonic cruise missile made by an Indian–Russian joint venture", "A BRICS development bank"], answer: 1,
        explain: "Indonesia reached a deal on it during Modi's visit in July 2026." },
      sources: [
        { title: "Indonesia, India sign BrahMos missile deal", publisher: "The Jakarta Post", url: "https://www.thejakartapost.com/world/2026/07/07/indonesia-india-sign-brahmos-missile-deal.html", date: "2026-07-07" },
        { title: "Modi and Prabowo seal a deal for Indonesia to acquire India's BrahMos missiles", publisher: "AP via WTOP", url: "https://wtop.com/world/2026/07/indonesias-prabowo-and-indias-modi-meet-to-discuss-expanding-economic-and-defense-ties/", date: "2026-07-07" },
        { title: "Indonesia, India announce BrahMos missile deal", publisher: "New Straits Times", url: "https://www.nst.com.my/amp/world/region/2026/07/1482909/indonesia-india-announce-brahmos-missile-deal", date: "2026-07" }
      ]
    }
  ]
});
