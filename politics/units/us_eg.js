/* ============================================================
   Relationship — United States & Egypt 🇺🇸🇪🇬
   Nasser, the Aswan Dam and Suez; Sadat's switch to America and
   the aid that came with Camp David; the 2013 coup and the
   quarrel over the word; and Trump, Gaza and the canal.
   Egypt's own story of Suez is in eg-10, Camp David in eg-11.
   Research note and sources: tools/research/us_eg.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("us_eg", {
  id: "us_eg",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_eg-1", kind: "relation", asOf: "2026-09-30",
      title: "From Nasser to Camp David",
      dek: "America cancelled a loan for Nasser's great dam and then saved him at Suez. Egypt turned to Moscow, until Sadat bet on Washington and made peace with Israel, a bargain paid for with American aid ever since.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_eg/us_eg-1-hero.webp",
          alt: "Illustration of a huge dam wall holding back a wide river under a hot sky, with cranes on top.",
          caption: "The Aswan High Dam: America's withdrawal of funding in 1956 set off the Suez crisis.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast rock and concrete dam under construction across a wide desert river in the 1960s, tall cranes along its top, a lake forming behind it, hot hazy sky, historical documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "From rival to client", items: [
          ["19 Jul 1956", "US withdraws its offer to fund the Aswan Dam"],
          ["26 Jul 1956", "Nasser nationalises the Suez Canal Company"],
          ["Nov 1956", "Eisenhower forces Britain, France and Israel to withdraw"],
          ["1967", "Egypt breaks relations with the US after the Six-Day War"],
          ["1972", "Sadat expels Soviet military advisers"],
          ["1978–79", "Camp David Accords and the Egypt–Israel peace treaty"]
        ] },
        { type: "section", head: "A dam and a canal", md:
          "Gamal Abdel Nasser, who came to power after the 1952 revolution (see [[lesson:eg-9]]), wanted to build a high dam at Aswan to tame the Nile. The United States and Britain offered to help pay. But Nasser bought weapons from the Soviet bloc and recognised communist China, and on 19 July 1956 Secretary of State John Foster Dulles told Egypt's ambassador that America was pulling out. A week later Nasser nationalised the Suez Canal Company, saying its tolls would pay for the dam." },
        { type: "section", head: "Eisenhower saves Nasser", md:
          "Britain, France and Israel secretly agreed to attack Egypt and seize the canal (see [[lesson:eg-10]]). President Dwight Eisenhower, who had not been told, was furious. He pressed Britain with the threat of financial ruin and backed a UN call for withdrawal, and the invaders pulled out. It was a strange moment: America had humbled its closest allies to protect an Arab nationalist it distrusted. But Nasser did not become a friend. The Soviet Union built the Aswan Dam and armed Egypt, and after Israel's victory in 1967 Egypt broke off relations with Washington." },
        { type: "section", head: "Sadat's bet", md:
          "Nasser's successor, Anwar Sadat, decided that only America could get Egypt's land back from Israel. He expelled Soviet military advisers in 1972, went to war in October 1973 to break the stalemate, and then let Henry Kissinger's shuttle diplomacy arrange the first disengagement deals. In 1977 he flew to Jerusalem. At Camp David in September 1978, President Jimmy Carter kept Sadat and Israel's Menachem Begin talking for thirteen days, and the peace treaty was signed in March 1979 (see [[lesson:eg-11]]). Sadat was murdered in 1981 by Islamist officers who hated the peace." },
        { type: "section", head: "The price of peace", md:
          "The peace came with money. Since Camp David, the United States has given Egypt around $1.3 billion a year in military aid, and for decades large sums of economic aid as well; in total, more than $50 billion in military aid. It made Egypt one of the biggest recipients of American aid, after Israel. In return Egypt kept the peace, let American warships through the Suez Canal quickly and let American planes cross its airspace." },
        { type: "compare", head: "Two American choices",
          left: { head: "1956", md:
            "Washington punished Nasser over the dam, then saved him from its own allies, and lost Egypt to Moscow." },
          right: { head: "1979", md:
            "Washington paid for peace with Israel and turned Egypt into a pillar of its Middle East policy." } },
        { type: "section", head: "Why it matters", md:
          "Egypt is the most populous Arab country. Pulling it from the Soviet camp was one of America's great Cold War gains, and the aid that sealed the deal still shapes the relationship today." }
      ],
      takeaways: [
        "America withdrew its offer to fund the Aswan Dam in July 1956, and Nasser nationalised the Suez Canal a week later.",
        "Eisenhower forced Britain, France and Israel out of Egypt in 1956, but Egypt still turned to the Soviet Union.",
        "Sadat switched to America; after Camp David, Egypt has received about $1.3 billion a year in US military aid."
      ],
      check: { q: "What did Nasser do a week after the US withdrew its offer to fund the Aswan Dam?",
        choices: ["He made peace with Israel", "He nationalised the Suez Canal Company", "He expelled Soviet advisers"], answer: 1,
        explain: "He said the canal's tolls would pay for the dam, setting off the Suez crisis." },
      sources: [
        { title: "United States withdraws offer of aid for Aswan Dam", publisher: "History.com", url: "https://www.history.com/this-day-in-history/july-19/united-states-withdraws-offer-of-aid-for-aswan-dam", date: "n.d." },
        { title: "Eisenhower and the Suez Canal Crisis", publisher: "Bill of Rights Institute", url: "https://billofrightsinstitute.org/essays/eisenhower-and-the-suez-canal-crisis/", date: "n.d." },
        { title: "Aid to Egypt by the Numbers", publisher: "Center for Global Development", url: "https://www.cgdev.org/blog/aid-egypt-numbers", date: "n.d." },
        { title: "Egypt: Background and U.S. Relations", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/RL33003", date: "2026-02-25" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_eg-2", kind: "relation", asOf: "2026-09-30",
      title: "Mubarak, the revolution and a coup",
      dek: "For thirty years Mubarak was America's reliable partner. Then Egyptians rose against him, an Islamist won the presidency, and the army took power, leaving Washington arguing over whether to call it a coup.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_eg/us_eg-2-hero.webp",
          alt: "Illustration of a vast crowd filling a city square at dusk, with smoke rising and tanks at its edge.",
          caption: "Cairo's Tahrir Square, where the 2011 revolution began.",
          credit: "AI illustration — not a photograph",
          prompt: "A vast crowd filling a large city square at dusk, tents and banners without text, smoke rising in the distance, a line of armoured vehicles at the edge of the square, apartment blocks around it, documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "A partner in turmoil", items: [
          ["1981–2011", "Hosni Mubarak rules; Egypt is a close US partner"],
          ["1991", "Egypt joins the US-led coalition against Iraq"],
          ["Jun 2009", "Obama speaks to the Muslim world from Cairo"],
          ["Feb 2011", "Mubarak falls after 18 days of protests"],
          ["Jul 2013", "The army removes President Morsi"],
          ["Oct 2013–Mar 2015", "Obama holds back F-16s, tanks and missiles"]
        ] },
        { type: "section", head: "The Mubarak years", md:
          "Hosni Mubarak, Sadat's vice-president, ruled for thirty years. He kept the peace with Israel, sent Egyptian troops to fight alongside Americans against Iraq in 1991, and was rewarded with the cancellation of billions of dollars of debt. Egypt's intelligence service worked closely with the CIA against jihadist groups. American officials grumbled about his emergency laws, rigged elections and torture, and in 2005 Secretary of State Condoleezza Rice called publicly for democracy in Cairo, but stability came first." },
        { type: "section", head: "The revolution", md:
          "In January 2011, inspired by Tunisia, Egyptians filled Cairo's Tahrir Square (see [[lesson:eg-3]]). President Barack Obama, who had given a celebrated speech to the Muslim world in Cairo in 2009, hesitated, then called for a transition to begin 'now'. When the army pushed Mubarak out in February, many Egyptians believed America had abandoned him, while others thought it had backed him for too long. In 2012 the Muslim Brotherhood's Mohamed Morsi won Egypt's first free presidential election, and Washington worked with him (see [[lesson:eg-12]])." },
        { type: "section", head: "Coup or not?", md:
          "On 3 July 2013, after huge protests against Morsi, the army led by Abdel Fattah al-Sisi removed him. American law bans aid to a country whose elected leader is deposed by a military coup, so the Obama administration simply avoided deciding whether it was one. In August, security forces broke up Brotherhood sit-ins in Cairo and killed hundreds of people. In October 2013 Obama held back the delivery of F-16 fighters, Apache helicopters, tank kits and Harpoon missiles, pending 'credible progress' towards democracy." },
        { type: "section", head: "Security wins again", md:
          "The pressure did not last. Sisi was elected president in 2014, and Egypt was fighting an Islamic State insurgency in Sinai. On 31 March 2015 Obama told Sisi he was lifting the holds, saying it was in America's security interest, although he changed the rules so that future aid would go to counterterrorism and border security. Congress began tying a slice of each year's aid to human rights, but presidents have usually waived the conditions." },
        { type: "compare", head: "Two views of the 2013 decision",
          left: { head: "Realism", md:
            "Egypt's army is the one stable institution; cutting it off would have cost America influence and security cooperation." },
          right: { head: "Principle", md:
            "By refusing to call a coup a coup, America showed its talk of democracy did not apply to friends." } },
        { type: "section", head: "Why it matters", md:
          "The events of 2011–13 left scars on both sides. Egypt's rulers decided Washington could not be trusted to stand by them, and they began buying weapons from Russia, France and China." }
      ],
      takeaways: [
        "Mubarak was a close US partner for thirty years, joining the 1991 war against Iraq.",
        "Obama called for a transition in 2011; in 2013 the army removed Morsi and Washington avoided calling it a coup.",
        "Obama held back some weapons from October 2013 and released them in March 2015."
      ],
      check: { q: "Why did the Obama administration avoid calling Morsi's removal a coup?",
        choices: ["Because Morsi resigned", "Because US law would have cut off aid to Egypt", "Because the UN said it was not"], answer: 1,
        explain: "American law bars aid to a country whose elected leader is deposed by a military coup." },
      sources: [
        { title: "Obama lifts freeze, ships arms to Egypt", publisher: "CNN", url: "https://www.cnn.com/2015/03/31/politics/obama-egypt-aid-f-16s-tanks/index.html", date: "2015-03-31" },
        { title: "Obama Releases Frozen Military Aid To Egypt", publisher: "NPR", url: "https://www.npr.org/sections/thetwo-way/2015/03/31/396625135/obama-releases-frozen-military-aid-to-egypt", date: "2015-03-31" },
        { title: "Ten Years After Coup, the U.S. Still Supports Tyranny in Egypt", publisher: "Cato Institute", url: "https://www.cato.org/commentary/ten-years-after-coup-us-still-supports-tyranny-egypt", date: "2023" },
        { title: "Inside the Complex World of U.S. Military Assistance to Egypt", publisher: "Washington Institute", url: "https://www.washingtoninstitute.org/policy-analysis/inside-complex-world-us-military-assistance-egypt", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_eg-3", kind: "relation", asOf: "2026-09-30",
      title: "Trump, Gaza and the canal",
      dek: "Sisi refused Trump's idea of moving Gazans into Egypt and bristled at his demand for free passage through Suez. Then Egypt hosted the Gaza peace summit and made itself indispensable again.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_eg/us_eg-3-hero.webp",
          alt: "Illustration of a large container ship sailing through a narrow canal in the desert at sunrise.",
          caption: "Trump said American ships should use the Suez Canal free of charge; Egypt refused.",
          credit: "AI illustration — not a photograph",
          prompt: "A huge container ship sailing slowly through a narrow straight canal cut through flat yellow desert at sunrise, a small town and palm trees on one bank, calm water, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Friction and need", items: [
          ["Feb 2025", "Trump suggests moving Gazans to Egypt and Jordan; Egypt refuses"],
          ["Mar 2025", "Arab League adopts Egypt's plan to rebuild Gaza"],
          ["Apr 2025", "Trump says US ships should cross Suez free of charge"],
          ["13 Oct 2025", "Sharm el-Sheikh summit endorses the Gaza ceasefire"],
          ["21 Jan 2026", "Egypt accepts a seat on the Board of Peace"],
          ["Feb 2026", "Rafah crossing reopens for limited travel"]
        ] },
        { type: "section", head: "A plan Egypt could not accept", md:
          "Trump has long liked Sisi; in his first term he praised him as a strong leader and invited him to the White House. But early in his second term Trump suggested that Gaza's people could be moved to Egypt and Jordan while the strip was rebuilt. For Egypt this was unacceptable: it would bring the conflict onto Egyptian soil and, Cairo said, end the Palestinian cause. Sisi postponed a planned visit to Washington, and in March 2025 the Arab League adopted Egypt's own plan to rebuild Gaza without moving its people (see [[lesson:eg-5]])." },
        { type: "section", head: "The canal", md:
          "Houthi attacks on Red Sea shipping had already cut Suez Canal revenue by more than half (see [[lesson:eg-6]]). In April 2025 Trump wrote that American military and commercial ships should cross both the Panama and Suez canals free of charge, because the canals 'would not exist' without the United States. Egyptians were outraged; lawyers pointed to the 1888 Constantinople Convention, which guarantees all ships the same right of passage. American-flagged ships are a tiny share of the traffic, but the principle mattered." },
        { type: "section", head: "Back to the table", md:
          "Egypt's value lay in mediation. With Qatar and Turkey it helped negotiate the Gaza ceasefire of October 2025, and on 13 October Sisi hosted Trump and dozens of leaders at Sharm el-Sheikh to sign a declaration backing it. In January 2026 Egypt accepted Trump's invitation to join the Board of Peace overseeing Gaza, and in February the Rafah crossing reopened for limited travel. During the 2026 Iran war Egypt again worked the phones, trying to end a conflict that emptied the canal once more." },
        { type: "section", head: "The money", md:
          "The $1.3 billion a year in military aid continues, and the White House asked for it again in its 2026 budget. But the money is not automatic. Congress has withheld or moved hundreds of millions of dollars over human rights concerns in recent years, and reports in 2025 said Washington warned Cairo of cuts after it rejected the Gaza plan. Egypt, meanwhile, has bought weapons from France, Russia and China, and joined the BRICS group in 2024." },
        { type: "compare", head: "What each needs",
          left: { head: "America needs Egypt", md:
            "For Gaza's southern border, talks with Hamas, the canal and a stable Arab ally at peace with Israel." },
          right: { head: "Egypt needs America", md:
            "For aid, weapons, IMF support and a voice in any settlement on its borders." } },
        { type: "section", head: "Why it matters", md:
          "No Gaza settlement works without Egypt, and Egypt's fragile economy depends partly on American goodwill. Both sides grumble, but neither can afford a break." }
      ],
      takeaways: [
        "Egypt refused Trump's 2025 idea of moving Gazans onto its soil and offered its own rebuilding plan.",
        "Trump's demand for free US passage through Suez angered Egyptians, who cited the 1888 convention.",
        "Egypt hosted the October 2025 Gaza summit and joined the Board of Peace; US military aid of about $1.3 billion a year continues."
      ],
      check: { q: "Which 1888 treaty did Egyptians cite against Trump's demand for free passage through Suez?",
        choices: ["The Camp David Accords", "The Constantinople Convention", "The Treaty of Versailles"], answer: 1,
        explain: "It guarantees ships of all countries the same right to pass through the canal." },
      sources: [
        { title: "Egypt: Background and U.S. Relations (updated 25 February 2026)", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs_external_products/RL/PDF/RL33003/RL33003.127.pdf", date: "2026-02-25" },
        { title: "Egyptians reject Trump's demand for free Suez Canal passage", publisher: "The National", url: "https://www.thenationalnews.com/news/mena/2025/04/27/egyptians-reject-trumps-demand-for-free-suez-canal-passage/", date: "2025-04-27" },
        { title: "Choppy waters: Egypt's waning patience with President Trump", publisher: "Atlantic Council", url: "https://www.atlanticcouncil.org/blogs/menasource/choppy-waters-egypts-waning-patience-with-president-trump/", date: "2025" },
        { title: "Rafah crossing between Israel and Egypt reopens after nearly two years", publisher: "The Washington Post", url: "https://www.washingtonpost.com/world/2026/02/02/israel-egypt-gaza-rafah-crossing/", date: "2026-02-02" }
      ]
    }
  ]
});
