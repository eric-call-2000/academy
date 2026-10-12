/* ============================================================
   Relationship — France & Nigeria 🇫🇷🇳🇬
   A Sahara bomb test that cut relations, French help for
   Biafra and ECOWAS; oil, Total, Macron's Lagos and the Niger
   coup; and Tinubu's state visit, a minerals deal and a dinner
   at the Élysée in September 2026.
   Research note and sources: tools/research/fr_ng.md
   Current as of 12 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("fr_ng", {
  id: "fr_ng",
  asOf: "2026-10-12",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "fr_ng-1", kind: "relation", asOf: "2026-10-12",
      title: "A bomb, Biafra and suspicion",
      dek: "Nigeria, a former British colony, is ringed by French-speaking states. It broke relations with France over a 1961 nuclear test, and France quietly backed the Biafran secession of 1967–70.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr_ng/fr_ng-1-hero.webp",
          alt: "Illustration of an old propeller cargo plane on a rough jungle airstrip at dusk, crates being unloaded.",
          caption: "Night flights carried supplies and arms into besieged Biafra.",
          credit: "Illustration — not a photograph",
          prompt: "An old four-engine propeller cargo plane on a rough red-earth jungle airstrip at dusk, crates being unloaded by small distant figures, dark forest around, historical documentary painting style, no faces, no flags, no legible text." },
        { type: "timeline", head: "A wary start", items: [
          ["1960", "Nigeria becomes independent from Britain"],
          ["Feb 1960", "France tests its first atomic bomb in the Algerian Sahara"],
          ["Jan 1961", "Nigeria breaks diplomatic relations with France"],
          ["1967–70", "Nigerian civil war; France covertly arms Biafra"],
          ["1971", "French doctors back from Biafra found Médecins Sans Frontières"],
          ["1975", "ECOWAS founded in Lagos"]
        ] },
        { type: "section", head: "An English island", md:
          "Nigeria became independent from Britain in October 1960 as Africa's most populous country. Around it lay former French colonies: Dahomey (now Benin) to the west, Niger to the north, Chad to the north-east and Cameroon to the east, all of which kept close ties to Paris through aid, French troops, advisers and the CFA franc. To Nigerian leaders France looked like a rival power in their own backyard, and the suspicion went both ways: Paris worried that a giant Nigeria could draw its smaller francophone neighbours away." },
        { type: "section", head: "The Sahara bomb", md:
          "In February 1960 France tested its first atomic bomb at Reggane in the Algerian Sahara, and carried out more tests over the following months. African states protested about fallout drifting south. When France went ahead with a third test in December 1960, Nigeria's government responded in January 1961 by breaking diplomatic relations with France and closing its ports and airports to French ships and aircraft. Relations were restored only later in the 1960s." },
        { type: "section", head: "Biafra", md:
          "In May 1967 Nigeria's Eastern Region, home to most of the Igbo people, declared independence as the Republic of Biafra after massacres of Igbo in the north. A brutal civil war followed. Under President Charles de Gaulle, and his African adviser Jacques Foccart, France sent arms to Biafra by way of Gabon and Côte d'Ivoire, though it never recognised the breakaway state. The aid prolonged the fighting but did not change the outcome. Nigerian forces blockaded Biafra, and hundreds of thousands, perhaps more than a million, died, many of them from hunger, before Biafra surrendered in January 1970." },
        { type: "section", head: "Doctors without borders", md:
          "French doctors who worked for the Red Cross in Biafra, among them Bernard Kouchner, were angered by the rule that aid workers should stay silent about what they saw. In 1971 they helped found Médecins Sans Frontières, which became one of the world's best-known humanitarian groups. Biafra's starving children also became a defining image of famine for a generation in Europe." },
        { type: "section", head: "ECOWAS", md:
          "After the war, Nigeria used its oil wealth to build regional influence. In 1975 it led the founding of the Economic Community of West African States in Lagos, which brought anglophone and francophone states into one body. Many saw it as Nigeria's answer to French influence in the region." },
        { type: "compare", head: "Two views of West Africa",
          left: { head: "France", md:
            "Saw its former colonies as a sphere of influence and a source of global standing." },
          right: { head: "Nigeria", md:
            "Saw itself as West Africa's natural leader, and France as an outside power meddling." } },
        { type: "section", head: "Why it matters", md:
          "Bomb tests and Biafra left Nigerians with a long distrust of France. That history explains why any close turn towards Paris, like Tinubu's in the 2020s, draws criticism at home." }
      ],
      takeaways: [
        "Nigeria broke diplomatic relations with France in January 1961 over French nuclear tests in the Sahara.",
        "France covertly armed breakaway Biafra during Nigeria's 1967–70 civil war.",
        "Nigeria led the founding of ECOWAS in 1975, seen partly as a counterweight to French influence."
      ],
      check: { q: "Why did Nigeria break relations with France in 1961?",
        choices: ["Over French support for Biafra", "Over French nuclear tests in the Sahara", "Over a trade dispute about oil"], answer: 1,
        explain: "France kept testing bombs in Algeria despite African protests." },
      sources: [
        { title: "France–Nigeria relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/France%E2%80%93Nigeria_relations", date: "n.d." },
        { title: "Nigerian Civil War", publisher: "Britannica", url: "https://www.britannica.com/event/Nigerian-civil-war", date: "n.d." },
        { title: "Médecins Sans Frontières", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/M%C3%A9decins_Sans_Fronti%C3%A8res", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "fr_ng-2", kind: "relation", asOf: "2026-10-12",
      title: "Oil, Lagos and the Niger coup",
      dek: "French oil companies became major players in Nigeria, and Emmanuel Macron, who once worked at the French embassy in Abuja, courted Lagos. In 2023 a coup in Niger put the two on the same side.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr_ng/fr_ng-2-hero.webp",
          alt: "Illustration of an offshore oil production ship moored at sea under a bright sky, a supply boat nearby.",
          caption: "French companies help pump oil from Nigeria's deep waters.",
          credit: "Illustration — not a photograph",
          prompt: "A huge floating oil production and storage ship moored far out at sea off West Africa, a small supply boat nearby and a gas flare burning, bright tropical sky with tall clouds, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Business and politics", items: [
          ["1960s", "Elf and later Total begin producing oil in Nigeria"],
          ["2002", "Macron interns at the French embassy in Abuja"],
          ["2018", "Egina deep-water field starts production"],
          ["Jul 2018", "Macron visits Lagos and Fela Kuti's Afrika Shrine"],
          ["Jul 2023", "Coup in Niger; ECOWAS, chaired by Tinubu, threatens force"],
          ["Jan 2025", "Niger, Mali and Burkina Faso leave ECOWAS"]
        ] },
        { type: "section", head: "Oil", md:
          "Nigeria is Africa's biggest oil producer, and France's TotalEnergies is one of the largest foreign companies there, alongside Shell, ExxonMobil and Eni. It operates big deep-water fields such as Akpo and Egina, far off the coast, where it avoids much of the oil theft and pollution that plague the onshore Niger Delta. France is one of the largest foreign investors in Nigeria, through oil and gas but also companies selling cement, cars, banking, retail and telecoms. Nigeria, in turn, is France's largest trading partner in sub-Saharan Africa." },
        { type: "section", head: "Macron's Nigeria", md:
          "As a young civil servant in training, Emmanuel Macron spent six months in 2002 as an intern at the French embassy in Abuja, and he often says it shaped his view of Africa. As president, he has tried to move France's Africa policy beyond its old francophone circle towards the continent's big English-speaking economies. In July 2018 he visited Lagos and spent an evening at the New Afrika Shrine, the music venue founded by the Afrobeat star Fela Kuti, with his son Femi Kuti. He promoted African culture in France, including a 2020 'Africa Season'." },
        { type: "section", head: "Losing the Sahel", md:
          "France's military role in West Africa collapsed in the early 2020s. After coups in Mali in 2020 and 2021 and Burkina Faso in 2022, the new juntas expelled French troops who had been fighting jihadists, and turned to Russian mercenaries instead. Anti-French feeling spread widely on social media across the region, fed by memories of colonial rule, by the CFA franc and by Russian propaganda. France ended its Barkhane operation in the Sahel in 2022 and began shrinking its bases elsewhere in Africa, handing them over to Chad, Senegal and Côte d'Ivoire. Nigeria, which never had French troops, watched its northern neighbours slide into military rule while jihadist violence spilled across its own borders." },
        { type: "section", head: "Niger", md:
          "In July 2023 soldiers in Niger overthrew President Mohamed Bazoum, a close ally of France. Nigeria's new president, Bola Tinubu, was chairing ECOWAS, which imposed sanctions, cut electricity supplies and threatened military force to restore Bazoum. France backed the tough line, but Nigeria's Senate opposed war, and no intervention came. Niger expelled French troops and its ambassador, and in January 2025 Niger, Mali and Burkina Faso left ECOWAS." },
        { type: "compare", head: "The Niger crisis",
          left: { head: "France", md:
            "Lost its last big Sahel base and an ally in Bazoum." },
          right: { head: "Nigeria", md:
            "Lost electricity revenue and trade with a neighbour, and saw ECOWAS split." } },
        { type: "section", head: "Why it matters", md:
          "With France pushed out of the Sahel, Nigeria became more important to Paris as a partner in West Africa. That set the stage for Tinubu's unusually warm ties with Macron." }
      ],
      takeaways: [
        "TotalEnergies runs big deep-water oil fields off Nigeria, and France is a major investor there.",
        "Macron interned at the French embassy in Abuja in 2002 and visited Lagos in 2018.",
        "After the 2023 coup in Niger, ECOWAS under Tinubu threatened force; France backed the hard line."
      ],
      check: { q: "What did Niger, Mali and Burkina Faso do in January 2025?",
        choices: ["Joined the CFA franc", "Left ECOWAS", "Invited French troops back"], answer: 1,
        explain: "Their military governments had turned away from both France and ECOWAS." },
      sources: [
        { title: "France–Nigeria relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/France%E2%80%93Nigeria_relations", date: "n.d." },
        { title: "2023 Nigerien crisis", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2023%E2%80%932024_Nigerien_crisis", date: "n.d." },
        { title: "Egina oil field", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Egina_oil_field", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "fr_ng-3", kind: "relation", asOf: "2026-10-12",
      title: "Tinubu's French turn",
      dek: "Bola Tinubu has grown close to Emmanuel Macron. A 2024 state visit brought a minerals deal; in 2026 France helped Nigeria's security forces and Macron hosted Tinubu for a private dinner.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/fr_ng/fr_ng-3-hero.webp",
          alt: "Illustration of a classical palace courtyard in Paris lit up at night, cars arriving at the gate.",
          caption: "Tinubu dined privately with Macron at the Élysée Palace in September 2026.",
          credit: "Illustration — not a photograph",
          prompt: "The courtyard of a classical stone palace in Paris lit warmly at night, a black car arriving through tall iron gates, gravel and trimmed trees, quiet and formal, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "A warm partnership", items: [
          ["May 2023", "Tinubu becomes Nigeria's president"],
          ["Nov 2024", "State visit to France; minerals and energy deals"],
          ["Mar 2026", "Tinubu says France is helping with security equipment"],
          ["Jun 2026", "Critics warn of the costs of a pro-French turn"],
          ["30 Aug 2026", "Tinubu begins a working holiday in Europe"],
          ["17 Sep 2026", "Private dinner with Macron at the Élysée"]
        ] },
        { type: "section", head: "A familiar city", md:
          "Bola Tinubu, a former governor of Lagos elected president in 2023, has long spent time in France and often travels there privately, including for holidays. Soon after taking office he met Macron in Paris, and the two have met several times since. Tinubu's critics at home complain that he spends too much time abroad while Nigerians struggle with soaring prices after he scrapped the fuel subsidy and let the naira fall in value." },
        { type: "section", head: "The state visit", md:
          "In late November 2024 Tinubu made a state visit to France, the first by a Nigerian president in more than two decades. Macron received him at the Élysée, and the two signed agreements including a memorandum on developing Nigeria's critical minerals, such as lithium, and a letter of intent with the French Development Agency on energy access, agriculture and food security. French firms promised investment, and the two leaders called their relationship a strategic partnership." },
        { type: "section", head: "Security", md:
          "Nigeria faces jihadist insurgents in the north-east, armed gangs who kidnap for ransom in the north-west and violence between herders and farmers in the centre. In March 2026 Tinubu said France was working with Nigeria on equipment and support for its security forces. With French troops gone from Mali, Burkina Faso and Niger, Nigeria is one of the few big West African states where France can still cooperate on security, though it has no bases there." },
        { type: "section", head: "Dinner at the Élysée", md:
          "On 30 August 2026 Tinubu began a three-week working holiday in Europe. On 17 September Macron hosted him for a private dinner at the Élysée Palace. Tinubu's spokesman said the talks covered trade, investment, security, energy, innovation, culture and the creative economy. Earlier in 2026 Tinubu had attended the Africa Forward summit in Nairobi, co-hosted by Macron and Kenya's President William Ruto." },
        { type: "section", head: "Critics", md:
          "In June 2026 the scholar Adekeye Adebajo argued that Tinubu's closeness to Paris broke with six decades of Nigerian policy aimed at limiting French influence in West Africa, and that the benefits went mainly to well-connected business elites. The 2024 minerals agreement also drew public criticism in Nigeria." },
        { type: "compare", head: "What each wants",
          left: { head: "France", md:
            "A big English-speaking partner in West Africa after losing the Sahel, and markets for its firms." },
          right: { head: "Nigeria", md:
            "Investment, security help and a friend in Europe and at the United Nations." } },
        { type: "section", head: "Why it matters", md:
          "France's influence in West Africa now depends less on its old colonies and more on Nigeria. Whether Tinubu's French turn lasts beyond his presidency will shape that balance." }
      ],
      takeaways: [
        "Tinubu made a state visit to France in November 2024 and signed a critical-minerals agreement.",
        "France is helping Nigeria's security forces with equipment; it has no bases there.",
        "Macron hosted Tinubu for a private dinner at the Élysée on 17 September 2026."
      ],
      check: { q: "Why has Nigeria become more important to France in recent years?",
        choices: ["France lost its military role in the Sahel after coups there", "Nigeria adopted the euro", "Nigeria joined the French-speaking world"], answer: 0,
        explain: "With troops expelled from Mali, Burkina Faso and Niger, Paris looks to big partners like Nigeria." },
      sources: [
        { title: "Nigeria: Tinubu meets Macron for private dinner in Paris", publisher: "AllAfrica", url: "https://allafrica.com/stories/202609180555.html", date: "2026-09-18" },
        { title: "Major economic agreements signed in Tinubu's state visit to France", publisher: "Nairametrics", url: "https://nairametrics.com/2024/12/02/major-economic-agreements-signed-in-tinubus-state-visit-to-france/", date: "2024-12-02" },
        { title: "Tinubu's French reconciliation strategy could have far-reaching strategic costs for Nigeria", publisher: "Project Syndicate", url: "https://www2.project-syndicate.org/commentary/tinubu-french-reconciliation-strategy-could-have-far-reaching-strategic-costs-for-nigeria-by-adekeye-adebajo-2026-06", date: "2026-06" }
      ]
    }
  ]
});
