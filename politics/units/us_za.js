/* ============================================================
   Relationship — United States & South Africa 🇺🇸🇿🇦
   Cold War ties to apartheid, 'constructive engagement' and the
   1986 sanctions law; Mandela, AGOA, PEPFAR and the drift into
   BRICS; and the Trump years: refugees, tariffs, HIV money and
   visa bans. The 2025 clashes are told from Pretoria in za-5.
   Research note and sources: tools/research/us_za.md
   Current as of 7 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("us_za", {
  id: "us_za",
  asOf: "2026-10-07",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_za-1", kind: "relation", asOf: "2026-10-07",
      title: "Apartheid and sanctions",
      dek: "For decades Washington treated apartheid South Africa as a Cold War ally. In 1986 Congress overrode President Reagan's veto to impose sanctions, one of the few times it has seized control of foreign policy from a president.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_za/us_za-1-hero.webp",
          alt: "Illustration of students protesting with blank placards beside wooden shanties built on a university lawn in the 1980s.",
          caption: "American students built mock shanties to press universities to sell their South African shares.",
          credit: "Illustration — not a photograph",
          prompt: "A 1980s American university lawn with red-brick halls, students gathered beside makeshift wooden and corrugated-iron shanties built as a protest, holding blank placards, autumn trees, documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "From ally to sanctions", items: [
          ["1948", "South Africa's National Party introduces apartheid"],
          ["1960s–70s", "US sees Pretoria as a Cold War bulwark"],
          ["1981", "Reagan adopts 'constructive engagement'"],
          ["1984–86", "Protests, divestment and arrests at the embassy in Washington"],
          ["2 Oct 1986", "Congress overrides Reagan's veto of sanctions"],
          ["1 Jul 2008", "Mandela taken off a US terrorism watch list"]
        ] },
        { type: "section", head: "A Cold War partner", md:
          "When South Africa's National Party introduced [[apartheid]] in 1948, the United States was itself still segregated, and Washington's main concern was the [[Cold War]]. South Africa was anti-communist, controlled the sea route around the Cape and mined uranium and minerals the West needed. American companies invested heavily. Successive presidents criticised apartheid in words but rarely in deeds, and the CIA reportedly helped South African police locate Nelson Mandela before his arrest in 1962." },
        { type: "section", head: "Constructive engagement", md:
          "President Reagan's policy, designed by his Africa adviser Chester Crocker, was 'constructive engagement': quiet diplomacy and continued trade to coax Pretoria toward reform, while working to remove Cuban troops from neighbouring Angola. Reagan called the white government a friend and vetoed calls for sanctions. Critics said engagement gave cover to a regime that was shooting protesters and detaining children without trial (see [[lesson:za-10]])." },
        { type: "section", head: "A movement grows", md:
          "From 1984 activists, members of Congress and celebrities were arrested in daily protests outside South Africa's embassy in Washington. Students pressed universities to divest, building shanty towns on campus lawns; cities and states pulled pension funds out of companies doing business there. The Congressional Black Caucus, led by representatives such as Ron Dellums, had pushed sanctions bills for years." },
        { type: "section", head: "The override", md:
          "In 1986 Congress passed the Comprehensive Anti-Apartheid Act, banning new investment, bank loans and imports of South African steel, coal, uranium and farm goods, and cutting air links. Reagan vetoed it. The House overrode him by 313 to 83, and on 2 October the Senate followed, with many Republicans joining. It was one of the rare occasions, along with the War Powers Resolution of 1973, when Congress overrode a president on foreign policy." },
        { type: "section", head: "Mandela's long shadow", md:
          "The sanctions added to the pressure that led South Africa to free Mandela in 1990 and hold its first democratic election in 1994. Yet a relic survived: because the ANC had been listed as a terrorist organisation in the Reagan years, Mandela needed a special waiver to visit the United States until Congress passed a law removing him from a watch list in 2008." },
        { type: "compare", head: "The sanctions debate",
          left: { head: "Reagan's case", md:
            "Sanctions would hurt Black workers most and push Pretoria into isolation." },
          right: { head: "Congress's case", md:
            "Only economic pressure would force the regime to negotiate." } },
        { type: "section", head: "Why it matters", md:
          "The ANC remembers who backed it and who did not. Many of its leaders recall that America sided with Pretoria for decades, while the Soviet Union, Cuba and others armed and trained the liberation movement, a memory that still colours its foreign policy." }
      ],
      takeaways: [
        "During the Cold War the US treated apartheid South Africa as an anti-communist partner.",
        "In 1986 Congress overrode Reagan's veto to impose sanctions under the Comprehensive Anti-Apartheid Act.",
        "Mandela remained on a US terrorism watch list until 2008."
      ],
      check: { q: "What was 'constructive engagement'?",
        choices: ["A US sanctions programme", "Reagan's policy of quiet diplomacy and continued trade with Pretoria", "The ANC's armed struggle"], answer: 1,
        explain: "Congress overrode it with the 1986 sanctions act." },
      sources: [
        { title: "The Comprehensive Anti-Apartheid Act", publisher: "US House of Representatives: History, Art & Archives", url: "https://history.house.gov/Historical-Highlights/1951-2000/The-Comprehensive-Apartheid-Act/", date: "n.d." },
        { title: "Statement on the Comprehensive Anti-Apartheid Act of 1986", publisher: "Ronald Reagan Presidential Library", url: "https://www.reaganlibrary.gov/archives/speech/statement-comprehensive-anti-apartheid-act-1986", date: "1986" },
        { title: "Mandela off U.S. terrorism watch list", publisher: "CNN", url: "https://www.cnn.com/2008/WORLD/africa/07/01/mandela.watch/", date: "2008-07-01" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_za-2", kind: "relation", asOf: "2026-10-07",
      title: "Trade, AIDS and drift",
      dek: "Democratic South Africa became a trading partner and the biggest recipient of American money to fight HIV. But Pretoria also drew closer to Russia and China, and the two drifted apart long before Trump.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_za/us_za-2-hero.webp",
          alt: "Illustration of a long car-assembly line with gleaming sedans inside a bright factory hall.",
          caption: "Cars built in the Eastern Cape were among South Africa's biggest exports to the US.",
          credit: "Illustration — not a photograph",
          prompt: "A long car assembly line inside a bright modern factory hall, rows of gleaming silver sedans, robotic arms and overhead conveyors, workers in overalls in the distance, documentary painting style, no faces close up, no flags, no legible text." },
        { type: "timeline", head: "Partners, then rivals", items: [
          ["Oct 1994", "Mandela's first state visit to Washington"],
          ["2000", "AGOA opens US markets to African goods duty-free"],
          ["2003", "Bush launches PEPFAR to fight HIV/AIDS"],
          ["2010", "South Africa joins BRICS"],
          ["Feb 2023", "Naval drills with Russia and China"],
          ["Dec 2023", "South Africa takes Israel to the ICJ"]
        ] },
        { type: "section", head: "Mandela's America", md:
          "Mandela was received as a hero in the United States; he addressed a joint session of Congress in 1990 and made a state visit in 1994. Yet he never hid his independence: he refused to drop friends such as Fidel Castro and Muammar Gaddafi, who had backed the ANC, saying South Africa would not let Washington choose its friends." },
        { type: "section", head: "AGOA", md:
          "In 2000 Congress passed the African Growth and Opportunity Act, letting thousands of goods from eligible African countries into the United States without tariffs. South Africa became its biggest non-oil beneficiary, exporting cars from plants in the Eastern Cape, citrus, wine and chemicals. The United States became its second-largest trading partner after China, and American firms employed tens of thousands of South Africans." },
        { type: "section", head: "AIDS and PEPFAR", md:
          "South Africa has the world's largest HIV epidemic, with about 8 million people living with the virus. Under President Thabo Mbeki, the government questioned whether HIV caused AIDS and delayed antiretroviral drugs, a policy researchers later linked to hundreds of thousands of avoidable deaths. In 2003 President George W. Bush launched PEPFAR, the President's Emergency Plan for AIDS Relief. South Africa became its largest recipient, and American money paid for clinics, testing and research that helped millions get treatment." },
        { type: "section", head: "Drifting apart", md:
          "From 2010 South Africa joined Brazil, Russia, India and China in the BRICS group, and its governments often sided with them against the West. It abstained on UN votes condemning Russia's invasion of Ukraine, held naval drills with Russia and China in February 2023, and in May 2023 the US ambassador accused it of loading weapons onto a sanctioned Russian ship, the Lady R, a claim an inquiry later rejected. In December 2023 South Africa accused Israel of genocide in Gaza at the International Court of Justice, angering Washington." },
        { type: "section", head: "Non-alignment", md:
          "Pretoria calls its stance 'non-alignment': friends with everyone, aligned with no bloc. Critics in Washington call it a tilt toward America's rivals. Supporters point out that South Africa trades far more with the West than with Russia, and that Ramaphosa led an African peace mission to both Kyiv and Moscow in June 2023." },
        { type: "compare", head: "Two views of Pretoria's foreign policy",
          left: { head: "Pretoria", md:
            "An independent voice for Africa and the Global South, loyal to old allies." },
          right: { head: "Washington", md:
            "Taking American trade and aid while siding with Russia, China and Iran." } },
        { type: "section", head: "Why it matters", md:
          "By 2024 trade and health aid were what held the relationship together. Both were exposed when Trump returned to office determined to punish South Africa." }
      ],
      takeaways: [
        "AGOA let South African cars, citrus and wine into the US duty-free from 2000; the US became its second-largest trading partner.",
        "South Africa, home to the world's largest HIV epidemic, was the biggest recipient of the US PEPFAR programme.",
        "From 2010 Pretoria joined BRICS, kept close to Russia and took Israel to the ICJ, straining ties with Washington."
      ],
      check: { q: "What is PEPFAR?",
        choices: ["A US trade agreement with Africa", "The US programme to fight HIV/AIDS abroad, launched in 2003", "South Africa's land reform law"], answer: 1,
        explain: "South Africa was its largest recipient." },
      sources: [
        { title: "Wasted Investments, Looming Crisis: The Impact of U.S. Global Health Funding Cuts on HIV in South Africa", publisher: "Physicians for Human Rights", url: "https://phr.org/our-work/resources/wasted-investments-looming-crisis-the-impact-of-u-s-global-health-funding-cuts-on-hiv-in-south-africa/", date: "2025" },
        { title: "South Africa: U.S. Funding Cuts Could Cause Over 150,000 Extra HIV Infections in South Africa By 2028", publisher: "AllAfrica", url: "https://allafrica.com/stories/202504110071.html", date: "2025-04-11" },
        { title: "South Africa Geopolitics Explained 2026", publisher: "The Rio Times", url: "https://www.riotimesonline.com/south-africa-geopolitics-explained-2026/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_za-3", kind: "relation", asOf: "2026-10-07",
      title: "Refugees, HIV money and visa bans",
      dek: "Trump's Washington has cut aid, taken in Afrikaners as refugees, imposed tariffs, ended HIV funding and barred South African officials. Pretoria says it will not change its laws to please him.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_za/us_za-3-hero.webp",
          alt: "Illustration of a quiet clinic waiting room with empty plastic chairs and a closed hatch on a sunny afternoon.",
          caption: "Washington plans to end all HIV aid to South Africa by early 2027.",
          credit: "Illustration — not a photograph",
          prompt: "A quiet public health clinic waiting room in a small South African town, rows of empty plastic chairs, a closed dispensary hatch, sunlight through barred windows, potted plant, documentary painting style, no people, no flags, no legible text." },
        { type: "timeline", head: "Pressure from Washington", items: [
          ["Feb 2025", "Trump halts aid and opens a refugee route for Afrikaners"],
          ["May 2025", "Oval Office confrontation with Ramaphosa"],
          ["Aug 2025", "30% tariff on most South African goods"],
          ["21 May 2026", "Refugee cap raised to 17,500, mostly for Afrikaners"],
          ["18 Jun 2026", "US says it will end all HIV aid by early 2027"],
          ["15 Sep 2026", "Visa restrictions on South African officials"]
        ] },
        { type: "section", head: "Year one", md:
          "In February 2025 Trump signed an order halting aid to South Africa, citing its Expropriation Act and its genocide case against Israel, and offering Afrikaners resettlement as refugees. The months that followed brought the expulsion of South Africa's ambassador, an Oval Office meeting at which Trump showed Ramaphosa a video he said proved a 'white genocide', a 30% tariff, and a US boycott of the Johannesburg G20 (see [[lesson:za-5]]). South Africa's courts and independent researchers have rejected the genocide claims." },
        { type: "section", head: "Refugees", md:
          "The Afrikaner programme has grown even as Trump cut overall refugee admissions to the lowest level on record. On 21 May 2026 an emergency determination raised the cap for the year to 17,500, with the extra places reserved for Afrikaners. South Africa's government opposes the programme but says it will not stop people from leaving." },
        { type: "section", head: "Ending HIV aid", md:
          "On 18 June 2026 the State Department said it would end all HIV-related assistance to South Africa by early 2027, citing Pretoria's ties with Iran, its Black Economic Empowerment rules and the 'Kill the Boer' chant. American spending on HIV there had already fallen by 43% between 2024 and 2025 after USAID was dismantled. South Africa funds most of its own treatment and says no one will lose medication, but researchers warn that cuts to prevention and testing could cause 150,000 or more extra infections by 2028." },
        { type: "section", head: "Five demands and visa bans", md:
          "The US ambassador, Brent Bozell, presented five demands: protect farmers from attacks, condemn 'Kill the Boer', guarantee fair compensation for expropriated land, scrap mandatory ownership transfers under empowerment rules, and end ties with Iran. On 15 September Secretary of State Marco Rubio announced visa restrictions on South Africans responsible for 'uncompensated land seizures' and race-based policies, without naming them. The foreign minister, Ronald Lamola, refused any retreat on land reform, empowerment or the ICJ case." },
        { type: "section", head: "Still talking", md:
          "South Africa's new ambassador, Roelf Meyer, a former apartheid-era minister who helped negotiate its end, presented his credentials in May 2026 and says Pretoria wants to keep talking. Business groups and the DA, the ANC's coalition partner, urge a compromise." },
        { type: "compare", head: "The dispute in a sentence",
          left: { head: "Washington", md:
            "South Africa discriminates against white citizens and sides with America's enemies." },
          right: { head: "Pretoria", md:
            "A sovereign democracy is correcting apartheid's legacy and will not be bullied." } },
        { type: "section", head: "Why it matters", md:
          "Relations are at their lowest since apartheid. South Africa is turning to China, Europe and Africa for trade, while its exporters and HIV clinics bear the cost of the rift." }
      ],
      takeaways: [
        "The US raised its 2026 refugee cap to 17,500, with the extra places reserved for Afrikaners.",
        "In June 2026 Washington said it would end all HIV aid to South Africa by early 2027.",
        "On 15 September 2026 the US imposed visa restrictions over land and race policies; Pretoria refused to back down."
      ],
      check: { q: "Which of these was NOT one of Ambassador Bozell's five demands?",
        choices: ["End ties with Iran", "Leave BRICS", "Condemn the 'Kill the Boer' chant"], answer: 1,
        explain: "The demands covered farm attacks, the chant, land compensation, ownership rules and Iran." },
      sources: [
        { title: "Exclusive: Trump administration to end PEPFAR funding for South Africa", publisher: "Semafor", url: "https://www.semafor.com/article/06/18/2026/trump-administration-to-end-pepfar-funding-for-south-africa", date: "2026-06-18" },
        { title: "United States Pulls Funding for South Africa, Threatening HIV Defenses", publisher: "Think Global Health", url: "https://www.thinkglobalhealth.org/article/united-states-pulls-funding-for-south-africa-threatening-hiv-defenses", date: "2026" },
        { title: "Cracks Are Showing in Trump's Special 'Refugee' Program for Afrikaners", publisher: "PassBlue", url: "https://passblue.com/2026/05/10/cracks-are-showing-in-trumps-special-refugee-program-for-afrikaners/", date: "2026-05-10" },
        { title: "US hits South Africa with visa restrictions and vows further action", publisher: "African Business", url: "https://african.business/2026/09/politics/us-hits-south-africa-with-visa-restrictions-and-vows-further-action", date: "2026-09" },
        { title: "Lamola refuses policy retreat as US pressure intensifies", publisher: "Mail & Guardian", url: "https://mg.co.za/news/south-africa/2026-09-24-lamola-refuses-policy-retreat-as-us-pressure-intensifies/", date: "2026-09-24" }
      ]
    }
  ]
});
