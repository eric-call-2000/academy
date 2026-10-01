/* ============================================================
   Relationship — United States & Venezuela 🇺🇸🇻🇪
   A century of the Monroe Doctrine tested in Venezuela, the oil
   ties embodied by the Citgo refineries, and the Venezuelans
   caught up in US deportation policy. The 2026 capture of Maduro
   is in ve-5 and us-6; the exodus in ve-7.
   Research note and sources: tools/research/us_ve.md
   Current as of 30 Sep 2026.
   ============================================================ */
window.POLITICS.addUnit("us_ve", {
  id: "us_ve",
  asOf: "2026-09-30",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "us_ve-1", kind: "relation", asOf: "2026-09-30",
      title: "The Monroe Doctrine's test case",
      dek: "Twice around 1900 Venezuela drew the United States into confrontations with European powers, and each time Washington expanded its claim to police the hemisphere. In 2026 it went further than ever.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ve/us_ve-1-hero.webp",
          alt: "Illustration of old steam-powered warships anchored off a tropical coastline with mountains behind, in the style of an early 20th-century painting.",
          caption: "In 1902–03 British, German and Italian warships blockaded Venezuela's ports to collect debts.",
          credit: "Illustration — not a photograph",
          prompt: "Several early twentieth-century steam warships with tall funnels anchored off a tropical coastline, green mountains rising behind a small port town, calm sea, painted in a muted historical oil-painting style, no flags, no legible text." },
        { type: "timeline", head: "A century of intervention", items: [
          ["1823", "Monroe Doctrine warns Europe off the Americas"],
          ["1895", "US forces Britain to arbitrate Venezuela's border with British Guiana"],
          ["1902–03", "European naval blockade; Roosevelt Corollary follows"],
          ["1958", "Vice-President Nixon's car attacked by a mob in Caracas"],
          ["2002", "Brief coup against Chávez; Washington welcomes it"],
          ["2006", "Chávez calls George W. Bush 'the devil' at the UN"],
          ["Jan 2026", "US forces capture Nicolás Maduro"]
        ] },
        { type: "section", head: "Border and blockade", md:
          "In 1895 Venezuela appealed to the United States in its long border dispute with British Guiana. President Grover Cleveland and his secretary of state, Richard Olney, claimed that the Monroe Doctrine gave Washington a say in any quarrel in the hemisphere and pressed Britain to accept arbitration, which it did. (The resulting 1899 award is the one Venezuela still rejects over Essequibo; see [[lesson:ve-12]].) In December 1902 Britain, Germany and Italy blockaded Venezuelan ports because President Cipriano Castro refused to pay foreign debts. Theodore Roosevelt pushed the Europeans into arbitration, and in 1904 announced his 'corollary' to the Monroe Doctrine: to keep Europe out, the United States itself would act as the hemisphere's police officer." },
        { type: "section", head: "Oil and anti-Americanism", md:
          "After oil was found around Lake Maracaibo in the 1910s and 1920s, American and British companies built Venezuela's industry, and the country became a key supplier to the United States. Washington backed friendly governments, including the dictator Marcos Pérez Jiménez. When Vice-President Richard Nixon visited Caracas in May 1958, months after the dictator fell, a mob attacked his car. Hugo Chávez, elected in 1998, made defiance of 'the empire' central to his politics. In April 2002 a short-lived coup removed him for two days; the Bush administration quickly welcomed the interim government, and Chávez never forgot it. In 2006 he called Bush 'the devil' from the podium of the UN General Assembly." },
        { type: "section", head: "Doctrine revived", md:
          "Donald Trump's second administration openly revived the Monroe Doctrine. It struck boats it said carried drugs from Venezuela, blockaded Venezuelan oil, and on 3 January 2026 sent forces into Caracas to seize Nicolás Maduro, who now faces trial in New York (see [[lesson:us-6]] and [[lesson:ve-5]]). His former deputy, Delcy Rodríguez, runs the country and pumps oil for American companies under Washington's watch." },
        { type: "compare", head: "Two views of American power",
          left: { head: "Supporters", md:
            "The US has a right to protect its hemisphere from hostile regimes, drug cartels and outside powers like Russia and China." },
          right: { head: "Critics", md:
            "The Monroe Doctrine has been an excuse for interference, coups and invasions that Latin Americans have resented for two centuries." } },
        { type: "section", head: "Why it matters", md:
          "Venezuela has repeatedly been the place where the United States defined how far its power in the Americas should reach. The 2026 raid is the most dramatic example yet, and how Venezuela's transition turns out will shape how Latin America sees Washington for a generation." }
      ],
      takeaways: [
        "Venezuela's disputes in 1895 and 1902–03 led the US to expand the Monroe Doctrine and claim a policing role.",
        "Anti-Americanism, from the 1958 attack on Nixon to Chávez's rhetoric, grew out of oil and US support for dictators.",
        "Trump's administration revived the doctrine, culminating in the capture of Maduro in January 2026."
      ],
      check: { q: "What was the Roosevelt Corollary?",
        choices: ["A trade treaty with Venezuela", "The claim that the US would act as the hemisphere's police to keep Europe out", "A ban on oil exports"], answer: 1,
        explain: "After the 1902–03 European blockade of Venezuela, Theodore Roosevelt said the US would itself intervene in the Americas when necessary." },
      sources: [
        { title: "December 17, 1895: Message Regarding Venezuelan-British Dispute", publisher: "Miller Center, University of Virginia", url: "https://millercenter.org/the-presidency/presidential-speeches/december-17-1895-message-regarding-venezuelan-british-dispute", date: "1895-12-17" },
        { title: "Venezuela Blockade (1902–1903)", publisher: "Wiley Encyclopedia of War", url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/9781444338232.wbeow665", date: "2011" },
        { title: "The Monroe Doctrine in US–Latin American relations", publisher: "CEBRI Journal", url: "https://cebri.org/revista/en/artigo/241/the-monroe-doctrine-in-us-latin-american-relations", date: "n.d." },
        { title: "The US capture of Nicolás Maduro", publisher: "House of Commons Library", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10452/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "us_ve-2", kind: "relation", asOf: "2026-09-30",
      title: "Citgo: Venezuela's American refineries",
      dek: "Venezuela's state oil company owns three refineries and thousands of petrol stations in the United States. Creditors want them sold; the new government in Caracas wants them back.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ve/us_ve-2-hero.webp",
          alt: "Illustration of a large oil refinery on the US Gulf Coast at dusk, with towers, flares and storage tanks.",
          caption: "Citgo's largest refinery, at Lake Charles, Louisiana, was built to process heavy Venezuelan crude.",
          credit: "Illustration — not a photograph",
          prompt: "A large oil refinery on a flat coastal plain at dusk, distillation towers and storage tanks lit by floodlights, a small gas flare, marshland and a waterway in the foreground, orange and purple sky, industrial and vast, no people, no logos, no legible text." },
        { type: "facts", head: "Citgo", rows: [
          ["Owner", "PDV Holding, a subsidiary of Venezuela's state oil company PDVSA"],
          ["Assets", "Three US refineries, pipelines and a network of branded stations"],
          ["Bought", "Half in 1986, the rest in 1990"],
          ["Auction", "$5.9 billion bid by Elliott-backed Amber Energy approved in 2025"],
          ["Status", "Awaiting US Treasury approval; contested by Caracas"]
        ] },
        { type: "section", head: "An oil marriage", md:
          "For most of the 20th century Venezuela was one of America's biggest suppliers of oil, and it kept selling even after it nationalised its industry in 1976; around 2000 it shipped well over a million barrels a day to American refineries. To secure buyers for its thick, heavy crude, the state company PDVSA bought into Citgo, a US refiner, in 1986 and took full ownership in 1990. Citgo's refineries in Louisiana, Texas and Illinois were set up to process Venezuelan oil, and its red triangle logo became familiar at American petrol stations. Even Chávez, for all his rhetoric, kept selling oil to the United States and ran a programme of discounted heating oil for poor American households. Chevron, the one big American oil company that never left, has pledged to double its Venezuelan output under the new arrangements." },
        { type: "section", head: "Seized by the creditors", md:
          "Venezuela defaulted on tens of billions of dollars of debt from 2017, and US sanctions in 2019 cut PDVSA off from the American market. That year Washington recognised the opposition leader Juan Guaidó as interim president and gave his team control of Citgo, keeping it out of Maduro's hands. Creditors, led by the Canadian miner Crystallex, whose Venezuelan mine had been expropriated, won the right in American courts to have the parent company auctioned. In late 2025 Judge Leonard Stark in Delaware approved a $5.9 billion bid by Amber Energy, backed by the hedge fund Elliott Management, well below many estimates of Citgo's value." },
        { type: "section", head: "After Maduro", md:
          "Maduro's capture in January 2026 changed the politics. The sale still needs approval from the Treasury's Office of Foreign Assets Control, which has stalled. Delcy Rodríguez's government is trying to take control of Citgo's board, and in May 2026 its lawyers argued the company was worth about $15.1 billion. The Trump administration, which now works with Caracas on oil, has not said whether it will let the sale proceed." },
        { type: "compare", head: "Who should own Citgo?",
          left: { head: "The creditors", md:
            "Venezuela owes billions and seized their assets. A court-supervised sale is the only way they will ever be paid." },
          right: { head: "Caracas and many Venezuelans", md:
            "Citgo is the country's most valuable foreign asset. Selling it cheaply to a hedge fund would rob Venezuelans of their future." } },
        { type: "section", head: "Why it matters", md:
          "Citgo's fate will show whether US policy toward Venezuela is guided by the courts, by creditors or by the White House's new deals with Caracas, and will decide who profits from Venezuela's oil for years to come." }
      ],
      takeaways: [
        "Venezuela's state oil company has owned Citgo, with three US refineries, since 1986–90.",
        "Creditors won a court-ordered auction; a $5.9 billion bid by Elliott-backed Amber Energy was approved in 2025.",
        "After Maduro's capture, the sale awaits Treasury approval while Rodríguez's government tries to regain control."
      ],
      check: { q: "Why is Citgo being auctioned?",
        choices: ["It went bankrupt", "Creditors of the Venezuelan state won court orders to sell its parent company", "The US government nationalised it"], answer: 1,
        explain: "After Venezuela defaulted and expropriated foreign assets, creditors like Crystallex won the right to auction Citgo's parent in Delaware." },
      sources: [
        { title: "U.S. Judge Approves $5.9 Billion Elliott Bid for Citgo Parent PDV Holding", publisher: "Pipeline & Gas Journal", url: "https://pgjonline.com/news/2025/december/us-judge-approves-59-billion-elliott-bid-for-citgo-parent-pdv-holding", date: "2025-12" },
        { title: "CITGO Sale Twists In The Wind As Treasury Department Stalls", publisher: "Forbes", url: "https://www.forbes.com/sites/davidblackmon/2026/04/02/citgo-sale-twists-in-the-wind-as-treasury-department-stalls/", date: "2026-04-02" },
        { title: "Venezuela's Citgo and the Strategic Stakes for U.S. Policy", publisher: "Americas Quarterly", url: "https://www.americasquarterly.org/article/venezuelas-citgo-and-the-strategic-stakes-for-u-s-policy/", date: "2026" }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "us_ve-3", kind: "relation", asOf: "2026-09-30",
      title: "Deported to a mega-prison",
      dek: "Hundreds of thousands of Venezuelans fled to the United States. In 2025 the Trump administration ended their protection and sent some to a notorious prison in El Salvador without a hearing.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/us_ve/us_ve-3-hero.webp",
          alt: "Illustration of a vast concrete prison complex surrounded by high walls and watchtowers in a green landscape, seen from above.",
          caption: "In March 2025 the US sent 238 Venezuelans to CECOT, El Salvador's terrorism confinement centre.",
          credit: "Illustration — not a photograph",
          prompt: "Aerial view of a vast grey concrete prison complex with long rectangular blocks, high walls and watchtowers, surrounded by green fields and hills, harsh midday light, stark and imposing, no people visible, no legible text." },
        { type: "timeline", head: "Protection to deportation", items: [
          ["2021", "Biden grants Temporary Protected Status to Venezuelans"],
          ["15 Mar 2025", "Alien Enemies Act invoked; 238 Venezuelans flown to El Salvador"],
          ["May 2025", "Supreme Court lets TPS for about 600,000 Venezuelans end"],
          ["18 Jul 2025", "252 Venezuelans freed from CECOT in swap for 10 Americans"],
          ["Oct 2025", "Supreme Court again allows TPS termination"],
          ["Sep 2026", "Former CECOT detainees ask US court for due process"]
        ] },
        { type: "section", head: "Protection", md:
          "Of the nearly eight million Venezuelans who have left their country since 2014 (see [[lesson:ve-7]]), hundreds of thousands reached the United States. In 2021 the Biden administration gave them Temporary Protected Status, allowing them to live and work legally because it was unsafe to return; about 600,000 were covered. Many settled in Florida and Texas, and they became a significant community in Miami. The Trump administration moved to end TPS in early 2025, and the Supreme Court allowed it to do so in May and again in October 2025." },
        { type: "section", head: "The Alien Enemies Act", md:
          "On 15 March 2025 Trump invoked the Alien Enemies Act of 1798, a wartime law last used against Japanese, German and Italian nationals in the Second World War, claiming that the Venezuelan gang Tren de Aragua was invading the country. The gang, which grew out of a Venezuelan prison, had spread across South America, and the State Department had designated it a foreign terrorist organisation the previous month. That day the government flew 238 Venezuelans to CECOT, a mega-prison in El Salvador, paying El Salvador's government to hold them; 137 were sent under the wartime law without a hearing. Reporting by CBS News found that most had no apparent criminal record, and families said many were targeted over tattoos. Courts halted further removals under the act. Human Rights Watch later documented beatings and abuse at the prison." },
        { type: "section", head: "The swap", md:
          "On 18 July 2025 the 252 Venezuelans held at CECOT were flown to Caracas in a three-way deal: Maduro's government freed ten Americans, and some Venezuelan political prisoners were released. Deportation flights from the United States to Venezuela, suspended for years, also resumed. In September 2026 some of the men sent to CECOT asked a US court to let them challenge their removal." },
        { type: "compare", head: "Two views",
          left: { head: "The administration", md:
            "Tren de Aragua is a terrorist threat, and the president has broad powers to remove dangerous foreigners quickly." },
          right: { head: "Critics and rights groups", md:
            "People who fled persecution were sent to a foreign prison without any chance to prove their innocence. It violated due process." } },
        { type: "section", head: "Why it matters", md:
          "Venezuelans became a test of how far a US president can go in immigration enforcement. With Maduro gone, the administration argues it is safe to return; many Venezuelans in the United States, and courts still weighing the cases, are not so sure." }
      ],
      takeaways: [
        "About 600,000 Venezuelans in the US lost Temporary Protected Status after Supreme Court rulings in 2025.",
        "In March 2025, 238 Venezuelans were sent to El Salvador's CECOT prison, 137 under the 1798 Alien Enemies Act.",
        "They were freed in a July 2025 swap for ten Americans held in Venezuela."
      ],
      check: { q: "What law did Trump invoke to deport Venezuelans without hearings in March 2025?",
        choices: ["The Patriot Act", "The Alien Enemies Act of 1798", "The Monroe Doctrine"], answer: 1,
        explain: "The wartime law had last been used in the Second World War; 137 of the 238 Venezuelans were removed under it." },
      sources: [
        { title: "U.S. sent 238 migrants to Salvadoran mega-prison; documents indicate most have no apparent criminal records", publisher: "CBS News", url: "https://www.cbsnews.com/news/what-records-show-about-migrants-sent-to-salvadoran-prison-60-minutes-transcript/", date: "2025" },
        { title: "10 Americans are freed by Venezuela in a prisoner swap for migrants in El Salvador", publisher: "NPR", url: "https://www.npr.org/2025/07/18/nx-s1-5472623/venezuela-prisoner-exchange-el-salvador-us", date: "2025-07-18" },
        { title: "Supreme Court Order Ends TPS Benefits for Venezuelan Nationals", publisher: "Littler", url: "https://www.littler.com/news-analysis/asap/supreme-court-order-ends-tps-benefits-venezuelan-nationals", date: "2025-10" },
        { title: "\"You Have Arrived in Hell\": Torture and Other Abuses Against Venezuelans in El Salvador's Mega Prison", publisher: "Human Rights Watch", url: "https://www.hrw.org/report/2025/11/12/you-have-arrived-in-hell/torture-and-other-abuses-against-venezuelans-in-el", date: "2025-11-12" }
      ]
    }
  ]
});
