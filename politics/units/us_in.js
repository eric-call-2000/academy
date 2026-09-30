/* ============================================================
   Relationship — United States & India 🇺🇸🇮🇳
   The world's oldest and largest democracies: Cold War
   estrangement, a nuclear deal that built a strategic
   partnership, and the people, visas and tariffs that now test
   it. The 2025–26 tariff fight and trade deal are in in-6.
   Research note and sources: tools/research/us_in.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("us_in", {
  id: "us_in",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_in-1", kind: "relation", asOf: "2026-09-30",
      title: "Estranged democracies",
      dek: "For most of the Cold War the world's oldest and largest democracies eyed each other with suspicion. America armed Pakistan; India bought Soviet weapons. In 1971 an American aircraft carrier sailed toward India.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_in/us_in-1-hero.webp",
          alt: "Illustration of a large aircraft carrier steaming across a hazy tropical bay, with fishing boats in the foreground.",
          caption: "In December 1971 the US sent the carrier Enterprise into the Bay of Bengal during India's war with Pakistan.",
          credit: "AI illustration — not a photograph",
          prompt: "A large grey aircraft carrier steaming across a hazy tropical bay, small wooden fishing boats in the foreground, humid pale sky, tense and historic atmosphere, seen from a distance, no flags, no legible text or hull numbers." },
        { type: "timeline", head: "Cold War distance", items: [
          ["1947", "India independent; Nehru chooses non-alignment"],
          ["1954", "US arms Pakistan through military alliances"],
          ["1962", "US sends aid to India in its war with China"],
          ["1971", "US backs Pakistan; USS Enterprise sails to the Bay of Bengal"],
          ["1974, 1998", "Indian nuclear tests; US sanctions after 1998"],
          ["2000", "Clinton visits India, the first presidential visit in 22 years"]
        ] },
        { type: "section", head: "Non-alignment", md:
          "Jawaharlal Nehru, India's first prime minister, refused to join either Cold War bloc and championed the 'non-aligned movement' of newly independent countries (see [[lesson:in-9]]). Washington, which saw neutrality as naive or worse, made Pakistan an ally in 1954, arming it through the SEATO and CENTO pacts. India turned increasingly to the Soviet Union for weapons and, from the 1960s, for diplomatic protection at the UN. There were exceptions: when China attacked India in 1962 (see [[lesson:cn_in-1]]), the Kennedy administration flew in military aid." },
        { type: "section", head: "1971", md:
          "The low point came in 1971. As Pakistan's army cracked down brutally in East Pakistan and millions of refugees fled into India (see [[lesson:pk-10]]), Richard Nixon and Henry Kissinger stood by Pakistan, which was then their secret channel to China. When India went to war and East Pakistan became Bangladesh, the US sent the aircraft carrier Enterprise into the Bay of Bengal, a move Indians still remember as intimidation. Months earlier, India had signed a treaty of friendship with the Soviet Union." },
        { type: "section", head: "Bombs and sanctions", md:
          "India tested a nuclear device in 1974, calling it a 'peaceful nuclear explosion' code-named Smiling Buddha, and in May 1998 it tested five more and declared itself a nuclear weapons state. The Clinton administration imposed sanctions, cutting aid and military sales. But the end of the Cold War and India's economic opening after 1991 (see [[lesson:in-11]]) had changed the calculation. In March 2000 Bill Clinton became the first US president to visit India in 22 years, and his five-day trip, full of speeches to cheering crowds, opened a new chapter." },
        { type: "section", head: "Why so cold?", md:
          "Historians point to several causes: America's alliance with Pakistan, India's closeness to Moscow, Nehru's lectures on colonialism and neutrality that irritated Washington, and India's protected economy, which offered American firms little. Personal chemistry was often poor; Nixon's contempt for Indira Gandhi is recorded on his White House tapes." },
        { type: "compare", head: "Two memories",
          left: { head: "Indian", md:
            "America sided with a military dictatorship against a democracy and tried to intimidate India in 1971. Strategic autonomy is the lesson." },
          right: { head: "American", md:
            "India preached neutrality while leaning toward Moscow and shielding it at the UN. Washington had to work with the partners available." } },
        { type: "section", head: "Why it matters", md:
          "The memory of those years still shapes Indian distrust of relying too much on Washington, and explains its insistence on 'strategic autonomy', including its continued purchases of Russian oil and weapons." }
      ],
      takeaways: [
        "In the Cold War India was non-aligned and close to Moscow, while the US armed Pakistan.",
        "In 1971 the US backed Pakistan and sent a carrier toward India during the Bangladesh war.",
        "After India's 1998 nuclear tests, sanctions gave way to a thaw marked by Clinton's 2000 visit."
      ],
      check: { q: "What did the US do during the 1971 India–Pakistan war?",
        choices: ["Sent troops to help India", "Backed Pakistan and sent the carrier Enterprise into the Bay of Bengal", "Stayed neutral"], answer: 1,
        explain: "Nixon and Kissinger backed Pakistan, their channel to China, and the carrier's deployment is still seen in India as intimidation." },
      sources: [
        { title: "The South Asia Crisis and the Founding of Bangladesh, 1971", publisher: "Office of the Historian, US Department of State", url: "https://history.state.gov/milestones/1969-1976/south-asia", date: "n.d." },
        { title: "1971 India-Pakistan War", publisher: "Britannica", url: "https://www.britannica.com/event/1971-India-Pakistan-War", date: "n.d." },
        { title: "India's nuclear weapons program: Operation Shakti 1998", publisher: "Nuclear Weapon Archive", url: "https://nuclearweaponarchive.org/India/IndiaShakti.html", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_in-2", kind: "relation", asOf: "2026-09-30",
      title: "The nuclear deal and after",
      dek: "In 2005 George W. Bush offered India something no other country outside the nuclear treaty had got: civilian nuclear trade. It turned India into a strategic partner against a rising China.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_in/us_in-2-hero.webp",
          alt: "Illustration of a nuclear power station with two domed reactors on a coastline at sunset, with palm trees.",
          caption: "The 2008 deal ended decades of restrictions on nuclear trade with India.",
          credit: "AI illustration — not a photograph",
          prompt: "A nuclear power station with two large domed reactor buildings on a tropical coastline at sunset, palm trees and a calm sea, orange sky, modern and peaceful, no people, no flags, no legible text." },
        { type: "timeline", head: "Building a partnership", items: [
          ["Jul 2005", "Bush and Manmohan Singh announce the nuclear deal"],
          ["2008", "Nuclear Suppliers Group grants India a waiver; deal approved"],
          ["2016–20", "Military agreements on logistics, communications and mapping"],
          ["2017", "The Quad with Japan and Australia is revived"],
          ["2023", "Deals on jet engines and chips during Modi's state visit"],
          ["Oct 2025", "Ten-year defence framework signed"]
        ] },
        { type: "section", head: "The deal", md:
          "India never signed the Nuclear Non-Proliferation Treaty, so for decades it was barred from buying nuclear fuel and reactors abroad. In July 2005 George W. Bush and Prime Minister Manmohan Singh announced that the United States would change that. India agreed to separate its civilian and military nuclear facilities and put the civilian ones under international inspection. After fierce debate in both countries, and a confidence vote that nearly toppled Singh's government, the 48-nation Nuclear Suppliers Group granted India a waiver in September 2008. Critics said it rewarded India for building the bomb; supporters said it brought India into the rules. Commercially it has disappointed: American firms have yet to build a reactor in India, largely because of an Indian law making suppliers liable for accidents, which New Delhi has since moved to ease." },
        { type: "section", head: "Defence partners", md:
          "The deal's real significance was strategic. Washington now saw India as a counterweight to China and set out to help it rise. Defence trade, once almost nil, has grown to over $20 billion, including transport aircraft, maritime patrol planes and helicopters. Between 2016 and 2020 the two signed agreements letting their militaries use each other's bases for supplies, share secure communications and exchange mapping data. They hold more military exercises with each other than either does with almost any other country. In October 2025 they signed a ten-year framework for defence cooperation." },
        { type: "section", head: "The Quad", md:
          "In 2017 the Quad, an informal grouping of the United States, India, Japan and Australia, was revived after a decade of dormancy, and in 2021 its leaders began meeting. It works on maritime security, vaccines, technology and critical minerals rather than acting as an alliance. India hosted Quad foreign ministers in May 2026, but a leaders' summit planned in India has been delayed by strains between Washington and New Delhi." },
        { type: "compare", head: "What kind of partner?",
          left: { head: "Optimists", md:
            "India is the only country large enough to balance China in Asia. Shared interests make it America's most important new partner." },
          right: { head: "Sceptics", md:
            "India will never be an ally. It buys Russian arms and oil, keeps its options open and will not fight for Taiwan." } },
        { type: "section", head: "Why it matters", md:
          "The partnership, built over two decades by presidents of both parties, is one of America's biggest bets in Asia. Whether it survives the tariffs, visa fights and Russia disagreements of Trump's second term (see [[lesson:us_in-3]]) is a key test of US strategy toward China." }
      ],
      takeaways: [
        "The 2005–08 US–India nuclear deal ended India's isolation from nuclear trade.",
        "It launched a defence partnership, with over $20 billion of arms sales and close military ties.",
        "The Quad links India, the US, Japan and Australia, but a summit has been delayed by US–India strains."
      ],
      check: { q: "Why was the 2005–08 nuclear deal unusual?",
        choices: ["India gave up its nuclear weapons", "It allowed nuclear trade with India although it had not signed the Non-Proliferation Treaty", "It made India a NATO member"], answer: 1,
        explain: "India kept its weapons outside the treaty, but won access to civilian nuclear trade in return for inspecting its civilian facilities." },
      sources: [
        { title: "The U.S.-India Nuclear Deal", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/backgrounders/us-india-nuclear-deal", date: "2010" },
        { title: "Quad Sherpas' Meeting in New Delhi", publisher: "US Department of State", url: "https://www.state.gov/releases/office-of-the-spokesperson/2026/09/quad-sherpas-meeting-in-new-delhi", date: "2026-09" },
        { title: "Can the Quad regain momentum after the India–US reset?", publisher: "Lowy Institute", url: "https://www.lowyinstitute.org/the-interpreter/can-quad-regain-momentum-after-india-us-reset", date: "2026" },
        { title: "United States-India Joint Statement", publisher: "The White House", url: "https://www.whitehouse.gov/briefings-statements/2026/02/united-states-india-joint-statement/", date: "2026-02" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_in-3", kind: "relation", asOf: "2026-09-30",
      title: "Visas, diaspora and deportations",
      dek: "Indian-Americans are one of America's most successful communities, and Indians win most H-1B work visas. Trump's second term has made that human bridge a battleground.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_in/us_in-3-hero.webp",
          alt: "Illustration of a modern tech office campus at dusk with glass buildings, a palm-lined walkway and people walking home.",
          caption: "Indian engineers make up a large share of the workforce at American technology companies.",
          credit: "AI illustration — not a photograph",
          prompt: "A modern technology office campus at dusk with glass buildings lit from inside, a palm-lined walkway and a few people seen from behind walking home, warm evening light, calm and prosperous, no legible text or logos." },
        { type: "facts", head: "The human bridge", rows: [
          ["Indian-Americans", "About 5 million people"],
          ["H-1B visas", "Indians receive more than 70% of approved petitions"],
          ["$100,000 fee", "On new H-1B petitions from September 2025, extended to September 2027"],
          ["Students", "India is the largest source of international students in the US"],
          ["Trade deal", "Framework announced February 2026, still being negotiated"]
        ] },
        { type: "section", head: "A model minority", md:
          "About five million people of Indian origin live in the United States. They have the highest median household income of any major ethnic group, and Indian-born executives have led Google, Microsoft, Adobe and IBM. Indian-Americans are increasingly prominent in politics, from former Vice-President Kamala Harris, whose mother was Indian, to Republicans such as Nikki Haley, Vivek Ramaswamy and Usha Vance, the vice-president's wife. The diaspora has lobbied for closer ties and gives New Delhi a voice in Washington." },
        { type: "section", head: "The H-1B fight", md:
          "The H-1B visa lets American firms hire skilled foreign workers, and Indians receive more than 70% of approved petitions, most in technology. Critics on the populist right and left say companies use it to replace Americans with cheaper labour; supporters say it brings talent the economy needs. In September 2025 Trump imposed a $100,000 fee on new H-1B petitions, with exceptions for the 'national interest'. Legal challenges followed, and in September 2026 he extended the fee until September 2027. Indian IT firms and students have been hit hardest." },
        { type: "section", head: "Deportations and tariffs", md:
          "In February 2025 the first US military deportation flight to India landed in Amritsar with 104 Indians, many of them shackled on the journey, causing outrage in India's parliament. Relations then slumped over trade: in August 2025 Trump doubled tariffs on Indian goods to 50%, partly to punish India's purchases of Russian oil. A framework trade deal in February 2026 cut the tariff to 18% (see [[lesson:in-6]]), but in September India said a final agreement depended on better terms." },
        { type: "section", head: "Students", md:
          "India overtook China as the largest source of international students in the United States in the 2023–24 academic year, with more than 330,000 enrolled, according to the Institute of International Education. Many stay on to work, often on H-1B visas. Tighter visa vetting, including checks of applicants' social-media accounts from 2025, has since made many Indian families look to Britain, Canada, Australia and Germany instead." },
        { type: "compare", head: "Two views",
          left: { head: "Washington's populists", md:
            "Visas and trade have favoured India for too long. America must protect its workers and use tariffs to get fairer deals." },
          right: { head: "Indian critics", md:
            "Treating a strategic partner like an adversary on visas and tariffs undermines two decades of trust and pushes India to hedge." } },
        { type: "section", head: "Why it matters", md:
          "People link the two countries more than governments do: families, students and workers move between them every day. How the visa and trade fights end will shape not just the economy but whether India sees America as a reliable partner." }
      ],
      takeaways: [
        "About five million Indian-Americans form one of the most successful and influential US communities.",
        "Indians receive most H-1B visas; Trump's $100,000 fee on new petitions has been extended to 2027.",
        "Deportation flights and 50% tariffs in 2025 strained ties before a February 2026 trade framework."
      ],
      check: { q: "What share of approved H-1B visa petitions go to Indians?",
        choices: ["About 10%", "More than 70%", "About 30%"], answer: 1,
        explain: "Indians receive the large majority of H-1B approvals, mostly for technology jobs, which is why the $100,000 fee hit India hardest." },
      sources: [
        { title: "Trump Extends $100,000 H-1B Visa Fee That's Tied Up in Court", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-09-18/trump-extends-100-000-h-1b-visa-fee-as-legal-fight-plays-out", date: "2026-09-18" },
        { title: "India Says US Trade Deal Hinges on Preferential Tariff Rate", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-09-04/india-says-us-trade-deal-hinges-on-preferential-tariff-rate", date: "2026-09-04" },
        { title: "$100,000 H-1B Fee Causes Chaos, Likely Unaffordable for Many Companies", publisher: "American Immigration Council", url: "https://www.americanimmigrationcouncil.org/blog/100000-h1b-fee-unaffordable-companies/", date: "2025" },
        { title: "Fury in India over U.S. allegedly flying deportees halfway around the world in handcuffs and leg chains", publisher: "CBS News", url: "https://www.cbsnews.com/news/us-deported-indian-migrants-handcuffs-leg-chains-military-flight-india", date: "2025-02" },
        { title: "Implications of US-India Trade Announcements", publisher: "Stimson Center", url: "https://www.stimson.org/2026/implications-of-us-india-trade-announcements/", date: "2026" }
      ]
    }
  ]
});
