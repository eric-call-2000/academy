/* ============================================================
   Relationship — United Kingdom & Australia 🇬🇧🇦🇺
   Convicts, federation, Gallipoli and the fall of Singapore;
   Britain's turn to Europe, the Whitlam dismissal and the 1999
   referendum; and a trade deal after Brexit, AUKUS and the
   50-year Geelong Treaty.
   Research note and sources: tools/research/gb_au.md
   Current as of 11 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("gb_au", {
  id: "gb_au",
  asOf: "2026-10-11",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "gb_au-1", kind: "relation", asOf: "2026-10-11",
      title: "Convicts, Gallipoli and Singapore",
      dek: "Britain founded Australia as a penal colony and Australians fought for the empire in two world wars. The fall of Singapore in 1942 taught them that Britain could not protect them.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_au/gb_au-1-hero.webp",
          alt: "Illustration of steep scrub-covered cliffs rising above a narrow beach at dawn, small boats approaching through mist.",
          caption: "Australian and New Zealand troops landed at Gallipoli on 25 April 1915.",
          credit: "Illustration — not a photograph",
          prompt: "Steep scrub-covered cliffs and ridges rising above a narrow beach at dawn, small rowing boats approaching through sea mist, a warship faint offshore, pale grey and gold light, historical documentary painting style, figures tiny and distant, no flags, no legible text." },
        { type: "timeline", head: "Children of empire", items: [
          ["1788", "The First Fleet founds a penal colony at Sydney"],
          ["1901", "The colonies federate as the Commonwealth of Australia"],
          ["25 Apr 1915", "Anzacs land at Gallipoli"],
          ["1931", "Statute of Westminster grants full self-government"],
          ["Dec 1941", "Curtin: Australia 'looks to America'"],
          ["15 Feb 1942", "Singapore falls to Japan"]
        ] },
        { type: "section", head: "Convicts and settlers", md:
          "In January 1788 the First Fleet landed at Sydney Cove with about 750 convicts, founding a penal colony to relieve Britain's overcrowded prisons. Over 80 years some 160,000 convicts were sent to Australia. Free settlers followed, drawn by land, wool and, from the 1850s, gold. The colonisation devastated Aboriginal and Torres Strait Islander peoples, through disease, dispossession and violence (see [[lesson:au-10]]). In 1901 the six colonies federated as the Commonwealth of Australia, with the British monarch as head of state (see [[lesson:au-9]])." },
        { type: "section", head: "Gallipoli", md:
          "When Britain went to war in 1914, Australia went too. On 25 April 1915 Australian and New Zealand troops, the Anzacs, landed at Gallipoli in a British plan to knock the Ottoman Empire out of the war. The campaign failed, and more than 8,000 Australians died there. Anzac Day, 25 April, became Australia's most important national day, a story of courage and of sacrifice for an empire whose commanders many Australians came to blame (see [[lesson:au-11]]). More than 60,000 Australians died in the whole war, from a population of under five million." },
        { type: "section", head: "Singapore", md:
          "Between the wars Australia relied on Britain's promise to defend it with a great naval base at Singapore. In December 1941 Prime Minister John Curtin wrote that Australia now 'looks to America, free of any pangs as to our traditional links or kinship with the United Kingdom'. On 15 February 1942 Singapore fell to Japan, and some 15,000 Australians were taken prisoner. Days later Japanese aircraft bombed Darwin. Curtin insisted, against Churchill's wishes, on bringing Australian divisions home from the Middle East to defend Australia." },
        { type: "section", head: "Looking to America", md:
          "After 1942 Australia's security depended on the United States, formalised in the ANZUS treaty of 1951. Britain remained a partner: it tested nuclear weapons at Maralinga and the Montebello Islands in the 1950s, with lasting harm to Aboriginal people and servicemen exposed to radiation." },
        { type: "section", head: "People", md:
          "Until the 1960s most migrants came from Britain, many as 'Ten Pound Poms' on assisted passages. Australians still hold British-style parliaments, courts and sports, from cricket to rugby." },
        { type: "section", head: "Self-government", md:
          "The Statute of Westminster of 1931, which Australia adopted in 1942, made Australia legally independent of the British parliament, though final appeals to London's Privy Council were not abolished until 1986." },
        { type: "compare", head: "Two memories of empire",
          left: { head: "Loyalty", md:
            "Australians fought willingly for the 'mother country' in both wars." },
          right: { head: "Betrayal", md:
            "Gallipoli and Singapore showed Britain would spend Australian lives and not defend Australia." } },
        { type: "section", head: "Why it matters", md:
          "Australia's identity was forged both within the British Empire and against it. That double inheritance still shapes debates about the monarchy and alliances." }
      ],
      takeaways: [
        "Britain founded Australia as a penal colony in 1788; the colonies federated in 1901 under the British Crown.",
        "More than 8,000 Australians died at Gallipoli in 1915; Anzac Day is Australia's most important national day.",
        "The fall of Singapore in 1942 turned Australia toward the United States for its security."
      ],
      check: { q: "Why did the fall of Singapore in 1942 matter so much to Australia?",
        choices: ["It ended the convict system", "It showed Britain could not defend Australia, which turned to the United States", "It made Australia a republic"], answer: 1,
        explain: "Curtin had already said Australia 'looks to America'." },
      sources: [
        { title: "Gallipoli Campaign 1915", publisher: "Anzac Portal, Department of Veterans' Affairs", url: "https://anzacportal.dva.gov.au/wars-and-missions/ww1/where-australians-served/gallipoli", date: "n.d." },
        { title: "Fall of Singapore 1942", publisher: "Anzac Portal, Department of Veterans' Affairs", url: "https://anzacportal.dva.gov.au/wars-and-missions/ww2/where/asia/singapore-1942", date: "n.d." },
        { title: "Fall of Singapore", publisher: "National Museum of Australia", url: "https://www.nma.gov.au/defining-moments/resources/fall-of-singapore", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "gb_au-2", kind: "relation", asOf: "2026-10-11",
      title: "Europe, the dismissal and the republic",
      dek: "When Britain joined Europe in 1973, Australia lost its biggest market. Two years later the Queen's representative sacked an elected prime minister, and in 1999 Australians voted to keep the Queen anyway.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_au/gb_au-2-hero.webp",
          alt: "Illustration of a long white parliament building with a wide lawn and steps, crowds gathered in front on a bright day.",
          caption: "Crowds gathered at Parliament House in Canberra after Gough Whitlam's dismissal in November 1975.",
          credit: "Illustration — not a photograph",
          prompt: "A long low white parliament building with a colonnaded front, wide steps and a broad green lawn, a large crowd gathered in front with plain placards, bright spring sky, historical documentary painting style, figures small and seen from behind, no flags, no legible text." },
        { type: "timeline", head: "Drifting apart", items: [
          ["1 Jan 1973", "Britain joins the European Economic Community"],
          ["11 Nov 1975", "Governor-General Kerr dismisses Whitlam"],
          ["1986", "Australia Act ends final legal ties to Westminster"],
          ["6 Nov 1999", "Republic referendum defeated, 54.9% to 45.1%"],
          ["2022", "Albanese appoints an assistant minister for the republic"],
          ["Oct 2024", "King Charles visits Australia"]
        ] },
        { type: "section", head: "Britain chooses Europe", md:
          "When Britain joined the European Economic Community on 1 January 1973 (see [[lesson:gb-3]]), it had to apply the bloc's tariffs and farm rules. Australian butter, lamb, sugar and fruit lost privileged access to what had long been their biggest market. Australians felt abandoned by the 'mother country', but the shock pushed their economy toward Asia, especially Japan and later China." },
        { type: "section", head: "The dismissal", md:
          "On 11 November 1975, in the middle of a budget crisis in which the opposition-controlled Senate blocked funding, the Governor-General, Sir John Kerr, the Queen's representative, dismissed the elected Labor prime minister, Gough Whitlam, and appointed the opposition leader, Malcolm Fraser, as caretaker. Whitlam told the crowd outside Parliament: 'Well may we say God save the Queen, because nothing will save the Governor-General.' Fraser won the election that followed. Letters released in 2020 showed that Kerr had discussed his powers with Buckingham Palace beforehand, though the palace said the Queen had played no part in the decision." },
        { type: "section", head: "Cutting the ties", md:
          "Australia's remaining legal ties to Britain were cut by the Australia Act of 1986, which ended appeals to the Privy Council in London and any role for the British parliament in Australian law. The monarch remained head of state, represented in Australia by a Governor-General appointed on the Australian prime minister's advice, and the Union Jack remained part of Australia's flag." },
        { type: "section", head: "The 1999 referendum", md:
          "On 6 November 1999 Australians voted on whether to become a republic with a president chosen by a two-thirds majority of parliament. The proposal was defeated by 54.9% to 45.1% and failed in every state. Many republicans voted no because they wanted a directly elected president; Prime Minister John Howard, a monarchist, campaigned against it." },
        { type: "section", head: "The question remains", md:
          "Anthony Albanese, a republican, appointed an assistant minister for the republic in 2022 but has put a new referendum aside after the defeat of the Indigenous Voice referendum in 2023. King Charles III, crowned in 2023, visited Australia in October 2024, where an Indigenous senator heckled him in Parliament House." },
        { type: "section", head: "Polls", md:
          "Polls show Australians fairly evenly divided on a republic, with younger voters more in favour, but no agreement on how a president should be chosen." },
        { type: "compare", head: "The republic debate",
          left: { head: "Republicans", md:
            "An Australian, not a British monarch, should be head of state." },
          right: { head: "Monarchists", md:
            "The system works and protects against politicians' power." } },
        { type: "section", head: "Why it matters", md:
          "Australia is fully independent but still shares a monarch with Britain. Whether it keeps him is one of the last open questions of its relationship with Britain." }
      ],
      takeaways: [
        "Britain's entry into the European Community in 1973 cost Australian farmers their biggest market.",
        "On 11 November 1975 the Governor-General dismissed Prime Minister Whitlam, a lasting constitutional controversy.",
        "In 1999 Australians rejected a republic by 54.9% to 45.1%; King Charles remains head of state."
      ],
      check: { q: "What was the result of Australia's 1999 republic referendum?",
        choices: ["A narrow yes", "A no, by 54.9% to 45.1%", "It was cancelled"], answer: 1,
        explain: "It failed in every state." },
      sources: [
        { title: "1999 Referendum Report and Statistics", publisher: "Australian Electoral Commission", url: "https://www.aec.gov.au/elections/referendums/1999_referendum_reports_statistics/summary_republic.htm", date: "1999" },
        { title: "1999: Republic Referendum", publisher: "Museum of Australian Democracy", url: "https://moadoph.gov.au/explore/democracy/1999-republic-referendum", date: "n.d." },
        { title: "1999 Australian republic referendum", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/1999_Australian_republic_referendum", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "gb_au-3", kind: "relation", asOf: "2026-10-11",
      title: "A trade deal, AUKUS and a 50-year treaty",
      dek: "After Brexit Britain signed its first new trade deal with Australia. With the US, the two launched AUKUS to give Australia nuclear-powered submarines, and in 2025 signed a 50-year treaty to build them.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_au/gb_au-3-hero.webp",
          alt: "Illustration of a nuclear-powered submarine at a dockside under construction cranes in a large shipyard at dusk.",
          caption: "Under AUKUS, Britain and Australia will build a new class of submarine, SSN-AUKUS.",
          credit: "Illustration — not a photograph",
          prompt: "A long black nuclear-powered submarine moored at a dockside in a large shipyard at dusk, tall construction cranes and a huge assembly hall behind, calm water reflections, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Old friends, new deals", items: [
          ["15 Sep 2021", "AUKUS announced"],
          ["Dec 2021", "UK–Australia free trade agreement signed"],
          ["Mar 2023", "SSN-AUKUS submarine plan unveiled"],
          ["31 May 2023", "Free trade agreement takes effect"],
          ["26 Jul 2025", "Geelong Treaty signed for 50 years"],
          ["2025–26", "US reviews AUKUS, then reaffirms it"]
        ] },
        { type: "section", head: "Trade after Brexit", md:
          "After leaving the EU, Britain wanted trade deals to show that Brexit could work, and Australia was keen. The UK–Australia free trade agreement, signed in December 2021, took effect on 31 May 2023, removing tariffs on almost all goods and making it easier for young people to work in each other's countries. British farmers complained that it opened the market to Australian beef and lamb; supporters said it would cut prices and mattered more as a symbol of Britain's global ambitions than for its economic effect, which official estimates put at a small fraction of a percent of GDP." },
        { type: "section", head: "AUKUS", md:
          "On 15 September 2021 Australia, Britain and the United States announced AUKUS, a security partnership whose centrepiece is helping Australia acquire nuclear-powered submarines. Australia cancelled a contract for French diesel submarines, infuriating Paris (see [[lesson:us_fr-2]]). Under a plan unveiled in March 2023, Australia will buy several American Virginia-class submarines in the 2030s, and then Britain and Australia will build a new class, SSN-AUKUS, designed in Britain, with British and American technology, from the late 2030s and 2040s." },
        { type: "section", head: "The Geelong Treaty", md:
          "On 26 July 2025 in Geelong, Victoria, Australia's defence minister, Richard Marles, and Britain's then defence secretary, John Healey, signed a Nuclear-Powered Submarine Partnership and Collaboration Treaty. The 'Geelong Treaty' commits the two countries to 50 years of cooperation on the design, construction, operation, maintenance and disposal of the SSN-AUKUS submarines. Australia is paying billions of dollars toward expanding British and American shipyards." },
        { type: "section", head: "Doubts", md:
          "Critics in Australia, including former prime minister Paul Keating, say AUKUS ties Australia too closely to Washington and costs too much, up to A$368 billion over three decades. In 2025 the Trump administration launched a review of AUKUS, raising fears that Australia might not get its Virginia-class boats; it later reaffirmed the deal." },
        { type: "section", head: "People and culture", md:
          "More than a million British-born people live in Australia, and hundreds of thousands of Australians live in Britain. Young people move freely between the two on working-holiday visas, and the countries share a passion for cricket's Ashes series." },
        { type: "section", head: "The Five Eyes", md:
          "Both are members, with the US, Canada and New Zealand, of the Five Eyes intelligence-sharing network, among the closest such partnerships in the world." },
        { type: "compare", head: "AUKUS: two views",
          left: { head: "Supporters", md:
            "Gives Australia a powerful deterrent against China for 50 years." },
          right: { head: "Critics", md:
            "Too expensive, too slow, and ties Australia's fate to American and British politics." } },
        { type: "section", head: "Why it matters", md:
          "AUKUS has turned an old sentimental relationship into a hard military partnership in the Indo-Pacific, binding Britain to Asia's security for half a century." }
      ],
      takeaways: [
        "The UK–Australia free trade agreement, Britain's first new deal after Brexit, took effect on 31 May 2023.",
        "AUKUS, announced in 2021, will give Australia nuclear-powered submarines with US and British help.",
        "The 50-year Geelong Treaty, signed on 26 July 2025, binds the two to build SSN-AUKUS submarines together."
      ],
      check: { q: "What does the Geelong Treaty of July 2025 cover?",
        choices: ["Free trade in farm goods", "50 years of cooperation on SSN-AUKUS nuclear-powered submarines", "Australia becoming a republic"], answer: 1,
        explain: "It was signed by the two countries' defence ministers in Geelong, Victoria." },
      sources: [
        { title: "Remarks, Signing of Geelong Treaty", publisher: "Australian Minister for Defence", url: "https://www.minister.defence.gov.au/transcripts/2025-07-26/remarks-signing-geelong-treaty", date: "2025-07-26" },
        { title: "Treaty brings SSN-AUKUS a step closer", publisher: "Australian Submarine Agency", url: "https://www.asa.gov.au/news/treaty-brings-ssn-aukus-step-closer", date: "2025-07" },
        { title: "UK and Australia sign 'historic' 50-year Geelong Treaty for SSN-AUKUS program", publisher: "Naval Today", url: "https://www.navaltoday.com/2025/07/28/uk-and-australia-sign-historic-50-year-geelong-treaty-for-ssn-aukus-program/", date: "2025-07-28" }
      ]
    }
  ]
});
