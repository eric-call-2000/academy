/* ============================================================
   Relationship — Japan & India 🇯🇵🇮🇳
   A judge who dissented at Tokyo and an army led by Subhas
   Chandra Bose; Maruti Suzuki, the Delhi Metro and Japan's aid;
   and Abe's 'confluence of two seas', the Quad and a bullet
   train, as both hedge against China.
   Research note and sources: tools/research/jp_in.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("jp_in", {
  id: "jp_in",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "jp_in-1", kind: "relation", asOf: "2026-09-30",
      title: "Bose, Pal and old goodwill",
      dek: "An Indian nationalist army fought beside Japan in the Second World War, and an Indian judge was the only one to acquit Japan's wartime leaders. Many Japanese remember both with gratitude.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_in/jp_in-1-hero.webp",
          alt: "Illustration of a Japanese temple garden with a stone monument among maple trees in autumn.",
          caption: "Justice Radhabinod Pal is commemorated at shrines and temples in Japan.",
          credit: "Illustration — not a photograph",
          prompt: "A quiet Japanese temple garden in autumn with red maple trees, a grey stone memorial monument on a low pedestal, gravel paths and a wooden temple building behind, soft golden light, no people, no flags, no legible text." },
        { type: "timeline", head: "Early ties", items: [
          ["6th century", "Buddhism, born in India, reaches Japan"],
          ["21 Oct 1943", "Bose proclaims a provisional Free India government with Japanese backing"],
          ["1944", "Japanese and INA forces fail at Imphal and Kohima"],
          ["1948", "Justice Pal dissents at the Tokyo tribunal"],
          ["1952", "India signs a separate peace treaty with Japan, waiving reparations"],
          ["1958", "Japan's first yen loan goes to India"]
        ] },
        { type: "section", head: "Bose's army", md:
          "Japan's early victories in Asia impressed Indian nationalists fighting British rule. Subhas Chandra Bose, a former president of the Indian National Congress who broke with Gandhi's non-violence, went to Germany and then to Japanese-held Southeast Asia. With Japanese backing he led the Indian National Army, made up largely of Indian soldiers captured from the British army, and on 21 October 1943 proclaimed a provisional government of Free India. In 1944 the INA joined the Japanese invasion of northeast India at Imphal and Kohima, which ended in a heavy defeat. Bose died in a plane crash in Taiwan in 1945." },
        { type: "section", head: "Justice Pal", md:
          "After the war, the Allies tried Japan's wartime leaders at the International Military Tribunal for the Far East in Tokyo (see [[lesson:jp-10]]). One of its eleven judges was Radhabinod Pal from India. In 1948 he wrote a long dissent finding all the defendants not guilty, calling the trial victors' justice and arguing that the Western powers had committed crimes of their own, including the atomic bombings. Japanese nationalists have honoured him ever since, with memorials at the Yasukuni shrine and in Kyoto; Shinzo Abe met Pal's son in 2007." },
        { type: "section", head: "Peace and aid", md:
          "Newly independent India refused to attend the 1951 San Francisco peace conference, which it thought unfair to Japan, and in 1952 signed its own peace treaty, waiving any claim to reparations. Many Japanese remember this generosity. In 1958 Japan made its first ever yen loan, to India. Buddhism, which reached Japan from India via China and Korea in the 6th century, gave the two a long cultural bond; the poet Rabindranath Tagore visited Japan in 1916. But in the Cold War, with India non-aligned and Japan tied to America, they drifted apart." },
        { type: "section", head: "An elephant for Tokyo", md:
          "One gesture is still remembered in Japan. After the war, Tokyo's Ueno Zoo had no elephants, and Japanese children wrote to India's prime minister, Jawaharlal Nehru, asking for one. In 1949 he sent a young elephant named Indira, after his daughter. Crowds of children came to see her, and for many Japanese she became a symbol of friendship at a time when Japan was defeated and occupied." },
        { type: "compare", head: "How to remember the war",
          left: { head: "Anti-colonial solidarity", md:
            "Bose and Japan fought British imperialism together; Pal exposed the hypocrisy of the victors." },
          right: { head: "Uncomfortable alliance", md:
            "Bose sided with fascist empires, and Japan's own conquest of Asia was brutal. Pal's dissent is used to excuse it." } },
        { type: "section", head: "Why it matters", md:
          "Unlike China or Korea, India has no bitter war memories of Japan. That goodwill makes it easier for the two to become close partners today." }
      ],
      takeaways: [
        "Subhas Chandra Bose's Indian National Army fought alongside Japan against Britain in the Second World War.",
        "Justice Radhabinod Pal was the only Tokyo tribunal judge to acquit Japan's wartime leaders.",
        "India signed a separate 1952 peace treaty waiving reparations, and Japan's first yen loan went to India."
      ],
      check: { q: "Who was Radhabinod Pal?",
        choices: ["The leader of the Indian National Army", "The Indian judge who dissented at the Tokyo war crimes tribunal", "India's first ambassador to Japan"], answer: 1,
        explain: "He found all defendants not guilty in 1948 and is honoured by Japanese nationalists." },
      sources: [
        { title: "The trials of imperialism: Radhabinod Pal's dissent at the Tokyo tribunal", publisher: "European Journal of International Relations", url: "https://journals.sagepub.com/doi/10.1177/1354066114555775", date: "2015" },
        { title: "Subhas Chandra Bose", publisher: "Encyclopaedia Britannica", url: "https://www.britannica.com/biography/Subhas-Chandra-Bose", date: "n.d." },
        { title: "Remembering Radhabinod Pal's Dissenting Opinion at the Tokyo Trial", publisher: "The Geopolitics", url: "https://thegeopolitics.com/remembering-radhabinod-pals-dissenting-opinion-at-the-tokyo-trial/", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "jp_in-2", kind: "relation", asOf: "2026-09-30",
      title: "Suzuki, the metro and the bullet train",
      dek: "A small Japanese carmaker changed how Indians travel, and Japanese loans built the Delhi Metro. Now Japan is building India's first bullet train and has pledged $68 billion of investment.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_in/jp_in-2-hero.webp",
          alt: "Illustration of a sleek white bullet train on an elevated viaduct above green fields and a small town.",
          caption: "India's first high-speed railway, from Mumbai to Ahmedabad, uses Japanese Shinkansen technology.",
          credit: "Illustration — not a photograph",
          prompt: "A sleek white bullet train with a long pointed nose on a tall concrete viaduct above green fields and a small Indian town with colourful houses, morning haze, wide documentary view, no people close up, no logos, no flags, no legible text." },
        { type: "facts", head: "Japan in India's economy", rows: [
          ["Maruti Suzuki", "Joint venture from 1982; first car in 1983"],
          ["Aid", "Japan is India's largest bilateral development lender"],
          ["Delhi Metro", "Built largely with Japanese loans; opened 2002"],
          ["Bullet train", "Mumbai–Ahmedabad, 508 km, first section due 2027"],
          ["Aug 2025", "Target of ¥10 trillion (~$68 billion) investment over ten years"]
        ] },
        { type: "section", head: "The car that changed India", md:
          "In 1982 Suzuki, then a modest Japanese carmaker, formed a joint venture with the Indian government, which wanted a cheap 'people's car'. The Maruti 800, launched in 1983, brought car ownership within reach of India's middle class and introduced Japanese ideas about quality and management to Indian factories. Maruti Suzuki still sells around four in ten new cars in India, and India has become one of Suzuki's biggest markets. Honda, Toyota and hundreds of other Japanese firms followed, especially after India's reforms of 1991 (see [[lesson:in-11]])." },
        { type: "section", head: "Aid and infrastructure", md:
          "Japan is India's largest bilateral lender for development, offering cheap long-term yen loans. They paid for power stations, ports and above all the Delhi Metro, which opened its first line in 2002 and is now one of the world's largest metro systems, followed by metros in other cities. There was one serious chill: after India's nuclear tests of 1998, Japan, the only country to have suffered atomic bombing, suspended new aid, restoring it in 2001. In 2016 it signed a civil nuclear agreement with India despite India not joining the Non-Proliferation Treaty." },
        { type: "section", head: "The bullet train", md:
          "In 2015 India chose Japan to build its first high-speed railway, a 508-kilometre line between Mumbai and Ahmedabad, financed mostly by a Japanese loan on very easy terms. The project has been slowed by land acquisition and costs, and the first section is now due in 2027, with India's own trains to start and Japan's next-generation E10 Shinkansen to follow in the early 2030s. During Narendra Modi's visit to Tokyo on 29–30 August 2025, he and Prime Minister Shigeru Ishiba set a target of ¥10 trillion (about $68 billion) of Japanese private investment in India over ten years, in chips, AI, clean energy and manufacturing." },
        { type: "section", head: "People to people", md:
          "Human ties are smaller than the money. Tens of thousands of Indians live in Japan, many of them IT engineers, and a 'Little India' has grown in the Nishi-Kasai district of Tokyo. Japan, facing a shrinking workforce (see [[lesson:jp-12]]), has begun recruiting more Indian workers and students, and India wants more young people to learn Japanese. Far fewer Japanese live in India, mostly managers at Japanese companies." },
        { type: "compare", head: "Good for India?",
          left: { head: "Supporters", md:
            "Japanese money and know-how built India's best infrastructure without the strings of Chinese loans." },
          right: { head: "Critics", md:
            "The bullet train is expensive and late; India needs cheaper, faster railways for ordinary passengers." } },
        { type: "section", head: "Why it matters", md:
          "Japan is one of India's biggest investors and its most trusted partner in building infrastructure. As firms move production out of China, India hopes Japanese companies will choose it." }
      ],
      takeaways: [
        "Maruti Suzuki, a Japanese–Indian joint venture from 1982, put India's middle class in cars.",
        "Japan is India's largest bilateral development lender; its loans built the Delhi Metro.",
        "Japan is building the Mumbai–Ahmedabad bullet train and pledged $68 billion of investment in 2025."
      ],
      check: { q: "What did Modi and Ishiba agree in August 2025?",
        choices: ["A free trade area", "A target of ¥10 trillion (~$68 billion) of Japanese investment in India over ten years", "To cancel the bullet train"], answer: 1,
        explain: "The target covers chips, AI, clean energy and manufacturing, and links small and medium firms." },
      sources: [
        { title: "Japan to invest $68bn in India over 10 years, including AI and chips", publisher: "Nikkei Asia", url: "https://asia.nikkei.com/politics/international-relations/japan-to-invest-68bn-in-india-over-10-years-including-ai-and-chips", date: "2025-08" },
        { title: "Modi–Ishiba Summit Seeks Deeper India–Japan Ties Amid Uncertain Geopolitics", publisher: "Australian Institute of International Affairs", url: "https://www.internationalaffairs.org.au/australianoutlook/modi-ishiba-summit-seeks-deeper-india-japan-ties-amid-uncertain-geopolitics/", date: "2025-09" },
        { title: "India's Bullet Train Project: Japan's E10 Shinkansen To Debut On Mumbai–Ahmedabad Route", publisher: "Outlook Traveller", url: "https://www.outlooktraveller.com/News/indias-bullet-train-project-japans-e10-shinkansen-to-debut-on-mumbaiahmedabad-route-read-the-details-here", date: "2025" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "jp_in-3", kind: "relation", asOf: "2026-09-30",
      title: "Two seas and the Quad",
      dek: "Shinzo Abe told India's parliament in 2007 that the Indian and Pacific Oceans were joining into one. His vision became the 'Indo-Pacific' and the Quad, a partnership built largely around worry about China.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/jp_in/jp_in-3-hero.webp",
          alt: "Illustration of two grey warships sailing side by side on a calm blue ocean.",
          caption: "Japanese and Indian navies exercise together, including in the Malabar drills with the US and Australia.",
          credit: "Illustration — not a photograph",
          prompt: "Two grey naval destroyers sailing side by side on a calm deep blue ocean, a helicopter flying overhead, bright sunlight and scattered clouds, wide documentary view, no people close up, no flags, no markings, no legible text." },
        { type: "timeline", head: "A strategic partnership", items: [
          ["22 Aug 2007", "Abe's 'Confluence of the Two Seas' speech in Delhi"],
          ["2007", "First Quad meeting of Japan, India, the US and Australia"],
          ["2014", "'Special Strategic and Global Partnership'"],
          ["2017", "The Quad revived"],
          ["2020", "Japan becomes a permanent member of the Malabar naval exercise"],
          ["Jul 2026", "Takaichi's first visit to India as prime minister"]
        ] },
        { type: "section", head: "Abe's vision", md:
          "Shinzo Abe saw India as Japan's natural partner: a democracy, a rising power and, like Japan, wary of China. On 22 August 2007 he told India's parliament that the Pacific and Indian Oceans were coming together in a 'confluence of the two seas', borrowing the title of a 17th-century book by the Mughal prince Dara Shikoh. The speech is widely seen as the start of the 'Indo-Pacific' idea. The same year Japan, India, the United States and Australia held the first meeting of the Quadrilateral Security Dialogue, the Quad, though it faded until 2017. Abe and Narendra Modi developed a close friendship; India declared a day of mourning when Abe was assassinated in 2022." },
        { type: "section", head: "Defence and the Quad", md:
          "Ties grew into a 'special strategic and global partnership' in 2014. The navies exercise together, and Japan joined the Malabar exercise with India and America permanently in 2020, with Australia rejoining the same year. The countries signed agreements to share military supplies and protect classified information. The Quad, revived in 2017 and raised to leaders' level in 2021, works on maritime awareness, vaccines, technology and infrastructure, and avoids calling itself a military alliance. India, which values its strategic autonomy (see [[lesson:in_ru-3]]), is its most cautious member." },
        { type: "section", head: "Hedging in the Trump era", md:
          "Both countries now face a less predictable America as well as a stronger China. Trump's tariffs hit India hard in 2025 (see [[lesson:in-6]]), and his interest in the Quad has been uncertain; a Quad leaders' summit India was due to host has not been scheduled. Japan and India have responded by working more closely themselves. Prime Minister Sanae Takaichi (see [[lesson:jp-4]]) made her first visit to India for the annual summit on 1–3 July 2026, when the two agreed declarations on economic security, semiconductors, critical minerals and artificial intelligence." },
        { type: "section", head: "China's shadow", md:
          "Both have felt Chinese pressure directly: Japan over the Senkaku islands (see [[lesson:jp_cn-2]]) and rare earths, India in deadly border clashes in 2020 (see [[lesson:cn_in-1]]). After China cut rare-earth exports to Japan in 2010, the Japanese trading house Toyota Tsusho set up a rare-earth venture with India, and the two now cooperate on critical minerals and supply chains to reduce dependence on China." },
        { type: "compare", head: "What binds them?",
          left: { head: "Shared values", md:
            "Two big Asian democracies with no history of conflict, and complementary economies." },
          right: { head: "Shared worries", md:
            "Above all China: its military rise, its pressure on India's border and on Japan's islands, and its hold on supply chains." } },
        { type: "section", head: "Why it matters", md:
          "Japan and India are two of Asia's biggest powers. Their partnership is central to any balance against China that doesn't depend entirely on the United States." }
      ],
      takeaways: [
        "Abe's 2007 'Confluence of the Two Seas' speech in India launched the 'Indo-Pacific' idea.",
        "Japan and India are partners in the Quad and the Malabar naval exercises.",
        "Takaichi visited India in July 2026, deepening cooperation as both hedge against China and Trump."
      ],
      check: { q: "What did Shinzo Abe's 2007 speech to India's parliament describe?",
        choices: ["A Japan–India trade war", "A 'confluence of the two seas', the Indian and Pacific Oceans", "Japanese reparations"], answer: 1,
        explain: "Borrowing Dara Shikoh's title, it is seen as the start of the 'Indo-Pacific' concept." },
      sources: [
        { title: "Abe Shinzo: the 'father' of the Indo-Pacific", publisher: "Perth USAsia Centre", url: "https://perthusasia.edu.au/research-and-insights/abe-shinzo-the-father-of-the-indo-pacific/", date: "2022" },
        { title: "Abe Shinzo: the Quad stands as his Indo-Pacific legacy", publisher: "Lowy Institute", url: "https://www.lowyinstitute.org/the-interpreter/abe-shinzo-quad-stands-his-indo-pacific-legacy", date: "2022-07" },
        { title: "Modi-Takaichi Summit: Deepening India-Japan Ties in a Changing Indo-Pacific", publisher: "Observer Research Foundation", url: "https://www.orfonline.org/expert-speak/modi-takaichi-summit-deepening-india-japan-ties-in-a-changing-indo-pacific", date: "2026-07" },
        { title: "Takaichi-Modi Summit Signals a New Phase of Japan-India Relations Under Trump 2.0", publisher: "Sasakawa Peace Foundation", url: "https://www.spf.org/iina/en/articles/toru_ito_13.html", date: "2026-07" }
      ]
    }
  ]
});
