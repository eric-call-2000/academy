/* ============================================================
   Relationship — United States & Indonesia 🇺🇸🇮🇩
   The CIA's 1958 rebellion, the 1965 killings and East Timor;
   Obama's Jakarta childhood and a 'comprehensive partnership';
   and Prabowo, once refused a US visa, now Trump's partner on
   tariffs, nickel and the Gaza Board of Peace.
   Indonesia's own story is in id-3 to id-8; China's in id_cn.
   Research note and sources: tools/research/us_id.md
   Current as of 1 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("us_id", {
  id: "us_id",
  asOf: "2026-10-01",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_id-1", kind: "relation", asOf: "2026-10-01",
      title: "Rebels, massacres and East Timor",
      dek: "The CIA backed a rebellion against Sukarno, then supported the army as it killed hundreds of thousands of suspected communists. A decade later Washington gave a nod to Indonesia's invasion of East Timor.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_id/us_id-1-hero.webp",
          alt: "Illustration of a twin-engine bomber flying low over green tropical islands and a coastal town in the 1950s.",
          caption: "A CIA pilot flying for Indonesian rebels was shot down over Ambon in 1958.",
          credit: "Illustration — not a photograph",
          prompt: "A 1950s twin-engine bomber flying low over lush green tropical islands and a small coastal town with tin roofs, turquoise sea, smoke trailing from one engine, historical documentary painting style, no people visible, no markings, no flags, no legible text." },
        { type: "timeline", head: "Cold War interventions", items: [
          ["1949", "US pressure helps Indonesia win independence from the Dutch"],
          ["May 1958", "CIA pilot Allen Pope shot down supporting rebels"],
          ["1965–66", "Army-led killings of suspected communists"],
          ["1967", "Suharto takes power, backed by Washington"],
          ["6 Dec 1975", "Ford and Kissinger meet Suharto in Jakarta"],
          ["7 Dec 1975", "Indonesia invades East Timor"]
        ] },
        { type: "section", head: "Independence", md:
          "When Indonesia fought for independence from the Netherlands after 1945 (see [[lesson:id-9]]), the United States eventually pressed the Dutch to give way, threatening Marshall Plan aid, and independence was recognised in 1949. But President Sukarno's non-alignment, his 1955 Bandung conference and the growing strength of Indonesia's Communist Party, the PKI, alarmed Washington." },
        { type: "section", head: "1958", md:
          "In 1957–58 the CIA secretly armed and supplied rebel movements on Sumatra and Sulawesi, known as PRRI and Permesta, hoping to weaken or topple Sukarno. On 18 May 1958 an American pilot, Allen Pope, flying a B-26 bomber for the rebels, was shot down over Ambon and captured with documents proving US involvement. The embarrassed Eisenhower administration cut its support. Pope was released in 1962 as relations improved." },
        { type: "section", head: "1965", md:
          "After a murky coup attempt in October 1965 that the army blamed on the PKI, General Suharto's forces and allied militias killed hundreds of thousands of suspected communists, ethnic Chinese, trade unionists and others (see [[lesson:id-10]]). Declassified US embassy files released in 2017 show that American officials tracked the killings closely, and other records show the US provided the army with money, equipment and lists of communist officials. Washington welcomed Suharto's rise to power and his 'New Order'." },
        { type: "section", head: "East Timor", md:
          "On 6 December 1975 President Gerald Ford and Henry Kissinger visited Jakarta. Declassified records show Suharto said he wanted their 'understanding' if he took 'rapid or drastic action' in East Timor, the Portuguese colony that had just declared independence. Ford replied: 'We will understand and will not press you.' Indonesia invaded the next day, using American-supplied weapons. Its occupation, until 1999, cost at least 100,000 lives (see [[lesson:id-11]])." },
        { type: "section", head: "Freeport and Papua", md:
          "Suharto also opened Indonesia to American business. In 1967 the US company Freeport signed the first big foreign investment contract of his regime, to mine copper in Papua, and its Grasberg mine became one of the world's largest gold and copper mines. In 1969 a UN-supervised 'Act of Free Choice', in which about a thousand hand-picked Papuan leaders voted for integration with Indonesia, was accepted by Washington. Many Papuans still reject it (see [[lesson:id-12]])." },
        { type: "compare", head: "Two views of the Cold War",
          left: { head: "Washington then", md:
            "Keeping the world's largest Muslim-majority country out of communist hands was a great victory." },
          right: { head: "Critics now", md:
            "America backed one of the century's worst massacres and a brutal occupation." } },
        { type: "section", head: "Why it matters", md:
          "Indonesians who know this history are wary of American power, which is one reason Jakarta clings to its 'free and active' non-aligned foreign policy." }
      ],
      takeaways: [
        "The CIA backed rebels against Sukarno in 1958; pilot Allen Pope's capture exposed it.",
        "The US supported the Indonesian army during the 1965–66 killings of suspected communists.",
        "Ford and Kissinger gave Suharto a green light the day before Indonesia invaded East Timor in 1975."
      ],
      check: { q: "What did Ford tell Suharto on 6 December 1975 about East Timor?",
        choices: ["That the US would oppose any invasion", "'We will understand and will not press you'", "That Portugal should keep the colony"], answer: 1,
        explain: "Indonesia invaded the next day, using American-supplied weapons." },
      sources: [
        { title: "Declassified files lay bare U.S. knowledge of mass murders in Indonesia", publisher: "NPR", url: "https://www.npr.org/sections/thetwo-way/2017/10/18/558509184/declassified-files-lay-bare-u-s-knowledge-of-mass-murders-in-indonesia", date: "2017-10-18" },
        { title: "Indonesia: US Documents Released on 1965-66 Massacres", publisher: "Human Rights Watch", url: "https://www.hrw.org/news/2017/10/18/indonesia-us-documents-released-1965-66-massacres", date: "2017-10-18" },
        { title: "The Year of Living Dangerously: Indonesia and the downed CIA pilot, May 1958", publisher: "ADST", url: "https://adst.org/2013/04/the-year-of-living-dangerously-indonesia-and-the-downed-cia-pilot-may-1958/", date: "2013" },
        { title: "US 'backed East Timor invasion'", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2005/12/3/us-backed-east-timor-invasion", date: "2005-12-03" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_id-2", kind: "relation", asOf: "2026-10-01",
      title: "Obama's Jakarta and a democratic partner",
      dek: "After Suharto fell in 1998, Washington embraced democratic Indonesia. Barack Obama, who spent four childhood years in Jakarta, made it a symbol of his outreach to the Muslim world.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_id/us_id-2-hero.webp",
          alt: "Illustration of a narrow Jakarta lane with small houses, motorbikes and street vendors in the late afternoon.",
          caption: "Barack Obama lived in Jakarta from 1967 to 1971.",
          credit: "Illustration — not a photograph",
          prompt: "A narrow lane in an old Jakarta neighbourhood with small tiled-roof houses, potted plants, parked motorbikes and a street food cart, warm late-afternoon light, documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "A democratic partner", items: [
          ["1967–71", "Young Barack Obama lives in Jakarta"],
          ["1998", "Suharto falls; democracy begins"],
          ["1999", "US cuts military ties over East Timor violence"],
          ["2005", "Military ties restored"],
          ["Nov 2010", "Obama visits Jakarta"],
          ["Nov 2023", "Ties raised to a comprehensive strategic partnership"]
        ] },
        { type: "section", head: "Obama's Indonesia", md:
          "In 1967 six-year-old Barack Obama moved to Jakarta with his mother, Ann Dunham, who had married an Indonesian, Lolo Soetoro. He lived there until 1971, went to local schools and learned some Indonesian. As president he visited Jakarta in 2010, recalling street food and kites, and praised Indonesia as proof that Islam, democracy and diversity could go together. He returned as a private citizen in 2017 to see his childhood home with his family." },
        { type: "section", head: "Democracy and the military", md:
          "Suharto fell in 1998 amid the Asian financial crisis (see [[lesson:id-3]]), and Indonesia became the world's third-largest democracy. After Indonesian forces and militias devastated East Timor around its 1999 independence vote, the US Congress cut military ties. They were restored in 2005, partly because Washington wanted Indonesia's help against Islamist terrorism after the 2002 Bali bombings, which killed 202 people, many of them foreign tourists." },
        { type: "section", head: "Prabowo's visa", md:
          "One figure embodied the dilemma. Prabowo Subianto, Suharto's son-in-law and a special forces commander who had trained in the United States, was accused of abducting and torturing activists in 1998. For two decades he was reportedly unable to get a US visa. In 2020, as Indonesia's defence minister, he was allowed to visit Washington, a sign that strategic interests now outweighed old human rights concerns." },
        { type: "section", head: "Partners, not allies", md:
          "Indonesia sits astride the sea lanes between the Indian and Pacific oceans, and Washington sees it as essential to balancing China. The two hold the large 'Super Garuda Shield' exercise with other partners, and in November 2023 they raised ties to a comprehensive strategic partnership. But Indonesia refuses to join any alliance, keeps close economic ties with China, its biggest trading partner (see [[lesson:id_cn-2]]), and joined the BRICS group in January 2025." },
        { type: "section", head: "The tsunami", md:
          "On 26 December 2004 an earthquake and tsunami devastated Aceh, killing about 170,000 people in Indonesia alone. American warships, helicopters and troops joined the relief effort, flying food and medicine to cut-off coasts. Polls afterward found Indonesian views of the United States, which had fallen sharply after the Iraq war, improved markedly. The disaster also helped bring Aceh's long separatist war to an end in a 2005 peace deal." },
        { type: "compare", head: "What each wants",
          left: { head: "America", md:
            "A strong, democratic Indonesia that resists Chinese pressure in the South China Sea." },
          right: { head: "Indonesia", md:
            "Investment, technology and respect, without being forced to choose sides." } },
        { type: "section", head: "Why it matters", md:
          "Indonesia is the world's largest Muslim-majority country and fourth most populous. Its neutrality is a prize both Washington and Beijing compete hard for." }
      ],
      takeaways: [
        "Obama lived in Jakarta from 1967 to 1971 and visited as president in 2010.",
        "The US cut military ties after East Timor in 1999 and restored them in 2005.",
        "Indonesia raised ties with the US in 2023 but joined BRICS in 2025 and stays non-aligned."
      ],
      check: { q: "Why did the US cut military ties with Indonesia in 1999?",
        choices: ["Indonesia joined BRICS", "Violence by Indonesian forces and militias in East Timor", "A trade dispute"], answer: 1,
        explain: "Ties were restored in 2005, partly for counter-terrorism cooperation." },
      sources: [
        { title: "Obama Makes Nostalgic Trip to His Indonesia Childhood Home", publisher: "VOA", url: "https://www.voanews.com/a/barack-obama-trip-indonesia-childhood-home/3923026.html", date: "2017-06" },
        { title: "At White House, Indonesia's new leader straddles US-China rivalry", publisher: "VOA", url: "https://www.voanews.com/a/at-white-house-indonesia-s-new-leader-straddles-us-china-rivalry/7862008.html", date: "2024-11" },
        { title: "Indonesia joins BRICS group of emerging economies", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/1/7/indonesia-joins-brics-group-of-emerging-economies", date: "2025-01-07" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_id-3", kind: "relation", asOf: "2026-10-01",
      title: "Prabowo's bet on Trump",
      dek: "Prabowo cut a tariff deal, offered nickel, and pledged up to 8,000 troops for Trump's Gaza force. Then the US went to war with Iran, and Indonesians asked whether their president had got too close.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_id/us_id-3-hero.webp",
          alt: "Illustration of a vast open-pit nickel mine with terraced red earth and haul trucks on a tropical island.",
          caption: "A 2026 trade deal opened Indonesia's nickel to American investors.",
          credit: "Illustration — not a photograph",
          prompt: "A vast open-pit nickel mine with terraced red earth cut into green tropical hills, large haul trucks on the roads, a smelter with smoke stacks near the coast, hazy light, documentary painting style, no people close up, no logos, no flags, no legible text." },
        { type: "timeline", head: "A new closeness", items: [
          ["Jan 2025", "Indonesia joins BRICS"],
          ["15 Jul 2025", "Trump cuts the tariff on Indonesia from 32% to 19%"],
          ["22 Jan 2026", "Prabowo joins the Board of Peace charter at Davos"],
          ["Feb 2026", "Up to 8,000 troops pledged for Gaza"],
          ["19–20 Feb 2026", "Prabowo meets Trump; reciprocal trade agreement signed"],
          ["Mar 2026", "Iran war stirs public anger in Indonesia"]
        ] },
        { type: "section", head: "The tariff deal", md:
          "In April 2025 Trump threatened Indonesia with a 32% tariff. In July Prabowo agreed a deal: a 19% US tariff in return for Indonesia removing almost all duties on American goods and buying more than $19 billion of American energy, farm products and Boeing aircraft. Prabowo hailed a 'new era' in relations with Washington. The full Agreement on Reciprocal Trade was signed in Washington in February 2026, with deals worth $38 billion, including access for US firms to Indonesia's critical minerals." },
        { type: "section", head: "Nickel", md:
          "Indonesia has the world's largest nickel reserves, vital for electric-car batteries, and Chinese companies built most of its smelters (see [[lesson:id_cn-2]]). The 2026 agreement gives American firms more access to Indonesian nickel and other minerals, part of Washington's push to reduce dependence on China. Since 2020 Indonesia has banned exports of raw nickel ore, forcing investors to build smelters at home. Environmental groups denounced it as 'extractive colonialism', and analysts doubt American firms can quickly match the scale of Chinese investment there." },
        { type: "section", head: "Board of Peace", md:
          "Prabowo went further than any other Muslim-majority leader in backing Trump's Gaza plan. He joined the Board of Peace at its launch in Davos on 22 January 2026, and in February his government said Indonesia would prepare up to 8,000 troops for the international stabilisation force, in a humanitarian role. On 19 February he was the only leader granted a one-on-one meeting with Trump at the Board's Washington gathering. Prabowo said Indonesia would leave the board if it did not pursue Palestinian freedom." },
        { type: "section", head: "Backlash", md:
          "When the US and Israel attacked Iran on 28 February 2026, many Indonesians were furious, and critics questioned Prabowo's closeness to Trump (see [[lesson:id-5]]). Indonesia said Board of Peace talks were on hold because of the war, a pause that also eased pressure on a government under fire at home. Supporters say Prabowo is winning trade concessions and a seat at the table; critics say he is trading sovereignty and Indonesia's long support for the Palestinians for American approval." },
        { type: "compare", head: "Prabowo's bet",
          left: { head: "Gains", md:
            "Lower tariffs, US investment and a leading role in Middle East diplomacy." },
          right: { head: "Risks", md:
            "Public anger over Gaza and Iran, and strains with China, Indonesia's biggest trading partner." } },
        { type: "section", head: "Why it matters", md:
          "Prabowo, once barred from America, has become one of Trump's most eager partners in Asia. Whether Indonesian voters and his 'free and active' tradition accept it will decide how long the tilt lasts, and how China responds." }
      ],
      takeaways: [
        "Trump cut the tariff on Indonesia to 19% in 2025; a full trade deal followed in February 2026.",
        "The deal opened Indonesia's nickel to American investors, angering environmentalists.",
        "Prabowo pledged up to 8,000 troops for Trump's Gaza force, then faced anger over the Iran war."
      ],
      check: { q: "What did Prabowo offer for Trump's Gaza plan?",
        choices: ["Nothing", "Up to 8,000 troops for the stabilisation force, in a humanitarian role", "To recognise Israel immediately"], answer: 1,
        explain: "He was also the only leader given a one-on-one meeting with Trump at the Board of Peace gathering." },
      sources: [
        { title: "Indonesia's Prabowo hails 'new era' in US ties after Trump trade deal", publisher: "Al Jazeera", url: "https://www.aljazeera.com/economy/2025/7/16/indonesias-prabowo-hails-new-era-in-us-ties-after-trump-trade-deal", date: "2025-07-16" },
        { title: "A New US Trade Deal With Indonesia Secures Fossil Fuels and Access to Critical Minerals", publisher: "U.S. News & World Report (AP)", url: "https://www.usnews.com/news/us/articles/2026-03-18/a-new-u-s-trade-deal-with-indonesia-secures-fossil-fuels-and-access-to-critical-minerals", date: "2026-03-18" },
        { title: "Indonesia's Prabowo All-In on Trump's Board of Peace", publisher: "Foreign Policy", url: "https://foreignpolicy.com/2026/02/18/southeast-asia-trump-board-of-peace-indonesia/", date: "2026-02-18" },
        { title: "Indonesian president's US ties questioned amid public anger over Iran war", publisher: "Al Jazeera", url: "https://www.aljazeera.com/features/2026/3/7/indonesian-presidents-us-ties-questioned-amid-public-anger-over-iran-war", date: "2026-03-07" },
        { title: "Board of Peace Talks 'On Hold' Due to Iran Conflict, Indonesia Says", publisher: "The Diplomat", url: "https://thediplomat.com/2026/03/board-of-peace-talks-on-hold-due-to-iran-conflict-indonesia-says/", date: "2026-03" },
        { title: "US-Indonesia trade deal slammed as 'extractive colonialism' over mining, fossil fuels", publisher: "Mongabay", url: "https://news.mongabay.com/2026/03/us-indonesia-trade-deal-slammed-as-extractive-colonialism-over-mining-fossil-fuels/", date: "2026-03" }
      ]
    }
  ]
});
