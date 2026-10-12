/* ============================================================
   Relationship — Japan & Indonesia 🇯🇵🇮🇩
   Occupation, forced labour, PETA and the 1945 proclamation;
   reparations, aid, the 1974 Malari riots, cars and the Jakarta
   MRT; and Prabowo, Takaichi, patrol boats and a 2026 defence
   cooperation arrangement.
   Research note and sources: tools/research/jp_id.md
   Current as of 12 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("jp_id", {
  id: "jp_id",
  asOf: "2026-10-12",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "jp_id-1", kind: "relation", asOf: "2026-10-12",
      title: "Occupation and independence",
      dek: "Japan seized the Dutch East Indies in 1942 and ruled harshly, but it also trained Indonesian soldiers and used nationalist leaders. Independence was proclaimed two days after Japan surrendered.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_id/jp_id-1-hero.webp",
          alt: "Illustration of a colonial-era villa with a veranda in a quiet street, early morning, palm trees.",
          caption: "Indonesia's proclamation was drafted in a Japanese admiral's house in Jakarta.",
          credit: "Illustration — not a photograph",
          prompt: "A white colonial-era villa with a deep veranda and tall windows on a quiet tree-lined street in 1940s Jakarta at early morning, palm trees and a few distant figures, historical documentary painting style, no flags, no legible text." },
        { type: "timeline", head: "War and revolution", items: [
          ["Mar 1942", "The Dutch surrender Java to Japan"],
          ["1942–45", "Hundreds of thousands forced into labour as 'romusha'"],
          ["1943", "Japan sets up the PETA volunteer army"],
          ["15 Aug 1945", "Japan surrenders"],
          ["17 Aug 1945", "Sukarno and Hatta proclaim independence"],
          ["1958", "Peace treaty and reparations agreement"]
        ] },
        { type: "section", head: "Conquest", md:
          "Japan invaded the Dutch East Indies early in 1942 to seize its oil, rubber and tin, and the Dutch forces surrendered on Java in March. At first some Indonesians welcomed the Japanese as liberators from three centuries of Dutch rule. Japan interned Dutch civilians, banned the Dutch language and promoted Indonesian, which helped spread a shared national language across the islands." },
        { type: "section", head: "A harsh rule", md:
          "The occupation soon turned brutal. Rice was requisitioned for the Japanese army and famine followed in parts of Java. Hundreds of thousands of men were taken as 'romusha', forced labourers, many shipped to work on railways and airfields elsewhere in Asia, where large numbers died. Women from Indonesia and Dutch internment camps were forced into military brothels. Estimates of Indonesian deaths during the occupation run to millions, mostly from hunger and disease." },
        { type: "section", head: "Using the nationalists", md:
          "Japan released nationalist leaders the Dutch had jailed or exiled, including Sukarno and Mohammad Hatta, and used them to rally support for the war effort. In 1943 it formed PETA, a volunteer defence force of Indonesians trained by Japanese officers. Its graduates, including the future president Suharto, later formed the core of the Indonesian army. In 1945, with defeat coming, Japan let Indonesian leaders prepare for independence." },
        { type: "section", head: "The proclamation", md:
          "Japan surrendered on 15 August 1945. On the night of 16 August Sukarno, Hatta and others drafted the proclamation of independence in the Jakarta house of Rear Admiral Tadashi Maeda, a Japanese naval officer sympathetic to their cause. Sukarno read it out on 17 August. The Dutch returned to fight a four-year war; some Japanese soldiers deserted and fought on the Indonesian side." },
        { type: "section", head: "Settling accounts", md:
          "In 1958 the two countries signed a peace treaty, and Japan agreed to pay about 223 million dollars in reparations, largely as goods and services, plus economic aid. Sukarno used part of it for landmark projects in Jakarta, including the Hotel Indonesia, and to send Indonesian students to study in Japan. The payments also opened the door for Japanese companies to return to Indonesia, now as suppliers and builders rather than occupiers." },
        { type: "compare", head: "How it is remembered",
          left: { head: "In Indonesia", md:
            "Forced labour and hunger, but also a step on the road to independence and a trained army." },
          right: { head: "In Japan", md:
            "A war fought for resources, presented at the time as freeing Asia from Western empires." } },
        { type: "section", head: "Why it matters", md:
          "Japan's occupation is remembered with less bitterness in Indonesia than in China or Korea, partly because it hastened the end of Dutch rule. That made it easier for the two to build a close partnership after the war." }
      ],
      takeaways: [
        "Japan occupied the Dutch East Indies from 1942 to 1945 and forced hundreds of thousands into labour.",
        "Japan trained Indonesians in PETA, which later formed the core of Indonesia's army.",
        "Indonesia's independence proclamation was drafted in Admiral Maeda's house and read on 17 August 1945."
      ],
      check: { q: "What was PETA?",
        choices: ["A Dutch colonial police force", "A volunteer army of Indonesians trained by Japan", "A Japanese aid agency"], answer: 1,
        explain: "Many of its officers, including Suharto, went on to lead Indonesia's army." },
      sources: [
        { title: "Japanese occupation of the Dutch East Indies", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Japanese_occupation_of_the_Dutch_East_Indies", date: "n.d." },
        { title: "Proclamation of Indonesian Independence", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Proclamation_of_Indonesian_Independence", date: "n.d." },
        { title: "Japan–Indonesia relations", publisher: "Ministry of Foreign Affairs of Japan", url: "https://www.mofa.go.jp/region/asia-paci/indonesia/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "jp_id-2", kind: "relation", asOf: "2026-10-12",
      title: "Aid, riots and cars",
      dek: "Japan became Indonesia's biggest aid donor and investor, and Japanese brands came to dominate its roads. Anger over that dominance exploded in the Malari riots of 1974.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_id/jp_id-2-hero.webp",
          alt: "Illustration of a busy Jakarta avenue full of cars and motorbikes beneath an elevated metro line.",
          caption: "Japanese cars and the Japanese-built MRT line on a Jakarta avenue.",
          credit: "Illustration — not a photograph",
          prompt: "A busy wide avenue in Jakarta crowded with small cars and motorbikes beneath an elevated concrete metro line with a train passing, office towers behind, hazy tropical afternoon light, documentary painting style, figures small, no flags, no legible text." },
        { type: "timeline", head: "Money and industry", items: [
          ["1967", "Suharto's 'New Order' opens to foreign investment"],
          ["Jan 1974", "Malari riots during Prime Minister Tanaka's visit"],
          ["1977", "Fukuda Doctrine promises 'heart-to-heart' ties"],
          ["2008", "Economic Partnership Agreement in force"],
          ["2015", "China wins the Jakarta–Bandung high-speed rail contract"],
          ["Mar 2019", "Jakarta's first MRT line opens, financed by Japan"]
        ] },
        { type: "section", head: "Suharto's partner", md:
          "When Suharto took power in the mid-1960s he turned to the West and Japan for money to rebuild a ruined economy. Japan became Indonesia's largest aid donor and one of its biggest investors. It bought Indonesian oil, timber and later liquefied natural gas, much of it from fields in Aceh and East Kalimantan, and financed dams, roads and the Asahan aluminium smelter in Sumatra. Through the 1970s and 1980s Japan was usually the largest buyer of Indonesian exports, and Indonesian gas helped power Japanese cities after the oil shocks." },
        { type: "section", head: "The Malari riots", md:
          "Not everyone welcomed the Japanese. When Prime Minister Kakuei Tanaka visited Jakarta in January 1974, students protested against foreign investment and the generals around Suharto who profited from it. The protests turned into riots: Japanese cars were burned and shops looted, and at least eleven people were killed. The events, known as Malari, short for 'the 15 January disaster', led Suharto to restrict foreign investment and the press. In 1977 Prime Minister Takeo Fukuda promised Southeast Asia a relationship 'from heart to heart', not only of money." },
        { type: "section", head: "Japanese roads", md:
          "Japanese carmakers such as Toyota, Daihatsu, Honda and Suzuki set up factories in Indonesia from the 1970s and came to dominate its market, building cars and motorbikes for sale at home and for export. Japanese brands still sell the large majority of cars on Indonesian roads, though Chinese electric vehicles are now winning sales." },
        { type: "section", head: "Trains", md:
          "Japan financed Jakarta's first metro line, the MRT, which opened in March 2019 with Japanese technology. But in 2015 Indonesia awarded the Jakarta–Bandung high-speed railway to a Chinese consortium, after a contest with Japan; it opened in 2023. The defeat showed Japan it now faced Chinese competition for Indonesia's big projects." },
        { type: "section", head: "People", md:
          "Under the 2008 economic partnership agreement, Indonesian nurses and caregivers began training to work in Japan's ageing society. Few at first passed the demanding Japanese-language nursing exams, but the programmes grew, and today many thousands of Indonesians work in Japan as technical trainees and skilled workers in factories, fishing, farming and care homes. Japanese anime and food are popular in Indonesia, and Japanese is one of the most studied foreign languages there after English." },
        { type: "compare", head: "What each needed",
          left: { head: "Japan", md:
            "Oil, gas, minerals and a growing market for its cars and machines." },
          right: { head: "Indonesia", md:
            "Capital, technology, infrastructure and jobs." } },
        { type: "section", head: "Why it matters", md:
          "For decades Japan was Indonesia's indispensable economic partner. The Malari riots and the lost rail contract show how that role has been contested, first by Indonesian nationalism and now by China." }
      ],
      takeaways: [
        "Japan became Indonesia's largest aid donor and a top investor under Suharto.",
        "The 1974 Malari riots during Prime Minister Tanaka's visit targeted Japanese investment.",
        "Japan financed Jakarta's MRT, but lost the Jakarta–Bandung high-speed railway to China in 2015."
      ],
      check: { q: "What happened during the Malari riots of January 1974?",
        choices: ["Protests against Japanese investment turned violent during Prime Minister Tanaka's visit", "Indonesia declared war on Japan", "Japanese troops returned to Java"], answer: 0,
        explain: "Japanese cars were burned and at least eleven people were killed." },
      sources: [
        { title: "Malari incident", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Malari_incident", date: "n.d." },
        { title: "Fukuda Doctrine", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fukuda_Doctrine", date: "n.d." },
        { title: "Jakarta MRT", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jakarta_MRT", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "jp_id-3", kind: "relation", asOf: "2026-10-12",
      title: "Patrol boats and a defence pact",
      dek: "Prabowo Subianto has courted Japan as well as China. Tokyo is giving Indonesia patrol boats, and in 2026 the two signed a Defence Cooperation Arrangement.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_id/jp_id-3-hero.webp",
          alt: "Illustration of a grey patrol vessel moored at a naval quay, islands on the horizon.",
          caption: "Japan is supplying fast patrol vessels to Indonesia.",
          credit: "Illustration — not a photograph",
          prompt: "A sleek grey coast guard patrol vessel moored at a naval quay in a tropical harbour, green islands on the horizon and calm sea, bright morning light, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "A security turn", items: [
          ["Mar 2021", "Agreement on transferring defence equipment"],
          ["Apr 2024", "President-elect Prabowo visits China and Japan"],
          ["Jan 2025", "Japan agrees to supply high-speed patrol vessels"],
          ["31 Mar 2026", "Prabowo and Takaichi meet in Tokyo"],
          ["May 2026", "Defence Cooperation Arrangement signed in Jakarta"],
          ["Aug 2026", "New Indonesian ambassador presents credentials to the Emperor"]
        ] },
        { type: "section", head: "Equipment and technology", md:
          "In March 2021 Prabowo, then defence minister, signed an agreement with Japan on the transfer of defence equipment and technology, the first of its kind between the two countries. It opened the way for Japanese ships and systems to be sold to Indonesia, which Japan had long avoided because of its post-war limits on arms exports. Japan has also included Indonesia in its Official Security Assistance programme, which gives equipment to partners' armed forces." },
        { type: "section", head: "Prabowo's balance", md:
          "Prabowo won Indonesia's presidential election in February 2024. Before taking office he visited both China and Japan in April, signalling that he would court both. Indonesia's 'free and active' foreign policy means no alliances. It joined BRICS in 2025, signed a defence pact with the United States, buys French Rafale fighters and has bought oil from Russia. Japan's offer is technology, investment and help guarding Indonesia's huge seas." },
        { type: "section", head: "Patrol boats", md:
          "In January 2025 Prime Minister Shigeru Ishiba visited Jakarta and agreed to supply high-speed patrol vessels to Indonesia. The boats help Indonesia police its waters around the Natuna Islands, where Chinese fishing fleets and coast guard ships have repeatedly entered its exclusive economic zone. Japan has given similar help to the Philippines and Vietnam." },
        { type: "section", head: "A defence arrangement", md:
          "Sanae Takaichi, Japan's prime minister since October 2025, has pushed for a larger security role in Southeast Asia. She met Prabowo in Tokyo on 31 March 2026. In May 2026 Defence Minister Shinjiro Koizumi visited Jakarta, where the two sides signed a Defence Cooperation Arrangement covering exercises, training and equipment, and Koizumi promised to scale up military coordination." },
        { type: "section", head: "Economy first", md:
          "Japan remains one of Indonesia's largest investors, and the two economies are tied by cars, nickel, coal and gas. Japanese firms are investing in Indonesian power plants and in the Patimban port east of Jakarta, built with Japanese loans to export cars. In June 2026 Indonesia's ambassador spoke of cooperation on trade, investment, training workers and health. Many Indonesian trainees and skilled workers now help staff Japanese factories, farms and care homes, and their numbers keep rising as Japan's population ages." },
        { type: "compare", head: "Two outlooks",
          left: { head: "Japan", md:
            "Wants partners in Southeast Asia to resist Chinese pressure at sea." },
          right: { head: "Indonesia", md:
            "Wants help and technology from everyone, but no alliance with anyone." } },
        { type: "section", head: "Why it matters", md:
          "Japan's new willingness to supply military equipment is changing its role in Asia. Indonesia, the region's largest country, is a test of how far that can go with a partner that refuses to choose sides." }
      ],
      takeaways: [
        "A 2021 agreement signed by Prabowo allowed Japanese defence equipment to be transferred to Indonesia.",
        "Japan agreed in January 2025 to supply high-speed patrol vessels to Indonesia.",
        "Japan and Indonesia signed a Defence Cooperation Arrangement in Jakarta in May 2026."
      ],
      check: { q: "Why do Japan's patrol boats matter to Indonesia?",
        choices: ["They help police waters near the Natuna Islands where Chinese ships have intruded", "They replace Indonesia's entire navy", "They are for tourism"], answer: 0,
        explain: "Japan gives similar help to the Philippines and Vietnam." },
      sources: [
        { title: "Indonesia, Japan strike defense deal in ministerial meeting", publisher: "The Jakarta Post", url: "https://www.thejakartapost.com/news/2021/03/30/indonesia-japan-strike-defense-deal-in-ministerial-meeting", date: "2021-03-30" },
        { title: "Indonesia–Japan defense pact", publisher: "The Defense Post", url: "https://thedefensepost.com/2026/05/05/indonesia-japan-defense-pact/amp/", date: "2026-05-05" },
        { title: "Indonesia", publisher: "Ministry of Foreign Affairs of Japan", url: "https://www.mofa.go.jp/region/asia-paci/indonesia/", date: "2026" },
        { title: "Takaichi and Prabowo can redefine the Japan–Indonesia relationship", publisher: "Lowy Institute", url: "https://www.lowyinstitute.org/the-interpreter/takaichi-prabowo-can-redefine-japan-indonesia-relationship", date: "n.d." }
      ]
    }
  ]
});
