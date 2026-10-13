/* ============================================================
   Relationship — United Kingdom & Iran 🇬🇧🇮🇷
   The D'Arcy concession, Anglo-Persian oil, the 1941 invasion and
   the 1953 coup; the embassy siege, Rushdie, the 2011 storming and
   hostages for a tank debt; and plots, the Foremans, a closed
   embassy and the 2026 IRGC designation.
   Research note and sources: tools/research/gb_ir.md
   Current as of 12 Oct 2026.
   ============================================================ */
window.POLITICS.addUnit("gb_ir", {
  id: "gb_ir",
  asOf: "2026-10-12",
  lessons: [

    /* ---------------------------------------------------------- 1 */
    {
      id: "gb_ir-1", kind: "relation", asOf: "2026-10-12",
      title: "Oil, an invasion and a coup",
      dek: "British oil men struck oil in Persia in 1908. Britain invaded in 1941 and deposed the Shah, and in 1953 it helped overthrow Mohammad Mosaddegh, the prime minister who nationalised its oil.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_ir/gb_ir-1-hero.webp",
          alt: "Illustration of an early 20th-century oil derrick in rugged dry hills, a camp of tents and huts below.",
          caption: "Oil was struck at Masjed Soleyman in south-west Persia in 1908.",
          credit: "Illustration — not a photograph",
          prompt: "An early 20th-century wooden oil derrick in rugged dry brown hills of south-west Persia, a camp of tents and stone huts below, mules and a dusty track, harsh bright light, historical documentary painting style, figures small and distant, no flags, no legible text." },
        { type: "timeline", head: "Oil and empire", items: [
          ["1901", "William Knox D'Arcy wins an oil concession in Persia"],
          ["May 1908", "Oil struck at Masjed Soleyman"],
          ["1914", "The British government buys control of Anglo-Persian"],
          ["Aug 1941", "British and Soviet forces invade; Reza Shah abdicates"],
          ["1951", "Mosaddegh nationalises the oil industry"],
          ["Aug 1953", "A British- and US-backed coup topples Mosaddegh"]
        ] },
        { type: "section", head: "The concession", md:
          "Britain had long competed with Russia for influence in Persia, in what was called the Great Game. In 1901 a British investor, William Knox D'Arcy, bought the right to search for oil across most of the country. After years of failure his team struck oil at Masjed Soleyman in May 1908, the first big oil find in the Middle East. The Anglo-Persian Oil Company was formed, and in 1914 Winston Churchill, then in charge of the Royal Navy, persuaded the government to buy a controlling stake to secure fuel for its new oil-fired warships." },
        { type: "section", head: "Abadan", md:
          "Anglo-Persian, later Anglo-Iranian, built the world's largest refinery at Abadan. It made huge profits, but Iran received only a small share in royalties, and Iranian workers lived in poor conditions while British staff enjoyed clubs and bungalows. Many Iranians came to see the company as a symbol of foreign domination, and Britain as the hidden hand behind their politics; the phrase 'the old fox' for Britain is still used." },
        { type: "section", head: "Invasion", md:
          "In August 1941 British and Soviet forces invaded Iran, which was officially neutral, to secure its oil and a supply route to the Soviet Union, and because they suspected Reza Shah of German sympathies. They forced him to abdicate in favour of his young son, Mohammad Reza Pahlavi, and exiled him to South Africa, where he died. The occupation lasted until 1946." },
        { type: "section", head: "Mosaddegh and the coup", md:
          "In 1951 Iran's parliament, led by the nationalist Mohammad Mosaddegh, nationalised the oil industry. Britain withdrew its staff from Abadan, imposed a blockade on Iranian oil and took the case to the UN and the International Court. When diplomacy failed, British intelligence, MI6, and the American CIA organised a coup. In August 1953 Mosaddegh was overthrown and the Shah restored to full power. The oil was then shared by an international consortium, with the renamed BP holding 40 per cent." },
        { type: "section", head: "Remembered", md:
          "The CIA acknowledged its role in 2013. Britain has never formally confirmed its part. In Iran the coup is remembered as proof that Western powers will crush Iranian independence." },
        { type: "compare", head: "Two memories",
          left: { head: "In Britain", md:
            "Oil for the navy, a strategic asset defended in the Cold War, a largely forgotten episode." },
          right: { head: "In Iran", md:
            "Exploitation, a foreign invasion and a coup against an elected leader." } },
        { type: "section", head: "Why it matters", md:
          "Many Iranians still see Britain's hand behind events in their country. That memory of oil, occupation and the 1953 coup shapes the Islamic Republic's suspicion of London today." }
      ],
      takeaways: [
        "British investors struck oil in Persia in 1908; the British government took control of Anglo-Persian in 1914.",
        "Britain and the Soviet Union invaded Iran in 1941 and forced Reza Shah to abdicate.",
        "MI6 and the CIA organised the 1953 coup that toppled Mosaddegh after he nationalised oil."
      ],
      check: { q: "Why was Mohammad Mosaddegh overthrown in 1953?",
        choices: ["He had lost an election", "He had nationalised Iran's oil, and Britain and the US backed a coup", "He had declared war on Iraq"], answer: 1,
        explain: "The CIA acknowledged its role in 2013." },
      sources: [
        { title: "Anglo-Persian Oil Company", publisher: "Britannica", url: "https://www.britannica.com/topic/Anglo-Persian-Oil-Company", date: "n.d." },
        { title: "1953 Iranian coup d'état", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/1953_Iranian_coup_d%27%C3%A9tat", date: "n.d." },
        { title: "Anglo-Soviet invasion of Iran", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Anglo-Soviet_invasion_of_Iran", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 2 */
    {
      id: "gb_ir-2", kind: "relation", asOf: "2026-10-12",
      title: "Sieges, a fatwa and hostages",
      dek: "After 1979 Britain and the Islamic Republic clashed over a fatwa against Salman Rushdie, a storming of the British embassy and the jailing of British-Iranians, while a 1970s tank debt lingered unpaid.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_ir/gb_ir-2-hero.webp",
          alt: "Illustration of an old walled embassy compound in Tehran with a gate, trees and papers scattered on the street.",
          caption: "Protesters stormed the British embassy in Tehran in November 2011.",
          credit: "Illustration — not a photograph",
          prompt: "A high brick wall and iron gate of an old embassy compound on a Tehran street with tall plane trees behind, smoke rising and scattered papers on the road, grey winter afternoon, documentary painting style, figures small and distant, no flags, no legible text." },
        { type: "timeline", head: "Decades of crises", items: [
          ["May 1980", "SAS ends the siege of Iran's embassy in London"],
          ["Feb 1989", "Khomeini's fatwa against Salman Rushdie"],
          ["Mar 2007", "Iran seizes 15 Royal Navy sailors and marines"],
          ["Nov 2011", "Protesters storm the British embassy in Tehran"],
          ["Jul 2019", "Iran seizes the British-flagged tanker Stena Impero"],
          ["Mar 2022", "Britain pays a tank debt; Zaghari-Ratcliffe freed"]
        ] },
        { type: "section", head: "Revolution", md:
          "Britain was close to the Shah, and the 1979 revolution swept that away. In April 1980 gunmen opposed to the new government seized Iran's embassy in London, and after six days the SAS stormed the building in a raid shown live on television, freeing the hostages. Britain had also sold the Shah's army Chieftain tanks; after the revolution most were never delivered, and Iran demanded its money back, a debt that would poison relations for four decades." },
        { type: "section", head: "The fatwa", md:
          "In February 1989 Ayatollah Khomeini issued a fatwa calling for the death of Salman Rushdie, a British author, over his novel The Satanic Verses, which many Muslims considered blasphemous. Rushdie lived in hiding under police protection for years; his Japanese translator was murdered in 1991, and his Italian translator and Norwegian publisher were attacked. Britain broke off relations, restoring them in 1990, and full ties only after Iran's government said in 1998 it would not pursue the fatwa. In 2022 Rushdie was stabbed and badly wounded in New York." },
        { type: "section", head: "Embassy stormed", md:
          "Ties improved under reformist governments, and Britain helped negotiate over Iran's nuclear programme. But in 2007 Iran seized fifteen Royal Navy sailors and marines in the northern Gulf, releasing them after two weeks. In November 2011, after Britain imposed new [[sanctions]], crowds of hardline students and militiamen stormed the British embassy compound in Tehran. Britain withdrew its diplomats and expelled Iran's; embassies reopened only in 2015, as the nuclear deal was agreed. Britain was one of the three European signatories of that deal, the [[JCPOA]], and kept defending it after President Trump withdrew in 2018, though it later joined France and Germany in triggering the return of UN sanctions." },
        { type: "section", head: "Hostages", md:
          "Iran detained several dual British-Iranian nationals on spying charges. Nazanin Zaghari-Ratcliffe, a charity worker, was arrested in 2016 while visiting family and held for six years. Her family and many observers believed she was being held as leverage over the tank debt. In 2019 Iran seized the tanker Stena Impero after British marines detained an Iranian tanker off Gibraltar. In March 2022 Britain paid about 394 million pounds to settle the tank debt, and Zaghari-Ratcliffe and Anoosheh Ashoori were freed the same day." },
        { type: "compare", head: "Each side's grievance",
          left: { head: "Britain", md:
            "A fatwa against a British author, a stormed embassy and citizens held as bargaining chips." },
          right: { head: "Iran", md:
            "A coup, sanctions, and money paid for tanks that never came." } },
        { type: "section", head: "Why it matters", md:
          "Between Britain and Iran, old debts and new crises are entangled. The case of Zaghari-Ratcliffe showed how Iran uses detained foreigners as leverage." }
      ],
      takeaways: [
        "Khomeini's 1989 fatwa against Salman Rushdie led Britain to break relations.",
        "Protesters stormed the British embassy in Tehran in 2011; embassies reopened in 2015.",
        "Britain paid about £394 million for a 1970s tank debt in 2022, and Nazanin Zaghari-Ratcliffe was freed."
      ],
      check: { q: "What was the 'tank debt' between Britain and Iran?",
        choices: ["Money Iran owed for British oil", "Money Iran had paid the Shah's era for tanks that were never delivered", "A loan for Iran's nuclear programme"], answer: 1,
        explain: "Britain paid it in 2022, the day Zaghari-Ratcliffe was freed." },
      sources: [
        { title: "Iran–United Kingdom relations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Iran%E2%80%93United_Kingdom_relations", date: "n.d." },
        { title: "2011 attack on the British Embassy in Iran", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2011_attack_on_the_British_Embassy_in_Iran", date: "n.d." },
        { title: "Nazanin Zaghari-Ratcliffe", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nazanin_Zaghari-Ratcliffe", date: "n.d." }
      ]
    },

    /* ---------------------------------------------------------- 3 */
    {
      id: "gb_ir-3", kind: "relation", asOf: "2026-10-12",
      title: "Plots, prisoners and the IRGC",
      dek: "British security services say Iran has plotted against people in the UK. A British couple were jailed in Iran, the embassy in Tehran closed, and in July 2026 Britain moved to ban the Revolutionary Guards.",
      blocks: [
        { type: "image", kind: "illustration", src: "img/gb_ir/gb_ir-3-hero.webp",
          alt: "Illustration of a grand government building on a London street at night, a police car and lit windows.",
          caption: "Britain moved to outlaw the Revolutionary Guards in July 2026.",
          credit: "Illustration — not a photograph",
          prompt: "A grand stone government building on a quiet London street at night with lit windows, wet pavement reflecting street lamps and a single parked police car, documentary painting style, no people close up, no flags, no legible text." },
        { type: "timeline", head: "Since 2022", items: [
          ["Jan 2023", "Iran executes British-Iranian Alireza Akbari"],
          ["Jan 2025", "British couple Craig and Lindsay Foreman detained"],
          ["Jan 2026", "UK embassy in Tehran closes, working remotely"],
          ["Feb 2026", "The Foremans get ten years for 'espionage'"],
          ["28 Feb 2026", "US–Israeli war on Iran begins"],
          ["13 Jul 2026", "UK announces a ban on the IRGC under state-threats law"]
        ] },
        { type: "section", head: "Threats in Britain", md:
          "From 2022 Britain's domestic security service, MI5, warned of Iranian plots to kidnap or kill people in the UK seen as enemies of the regime, especially journalists at Persian-language TV stations based in London. In 2024 a presenter for Iran International was stabbed outside his home. In 2025 several Iranian men were charged under the new National Security Act. The UK sanctioned the Islamic Revolutionary Guard Corps, the [[IRGC]], with asset freezes and travel bans, but for years resisted calls to proscribe it as a terrorist group." },
        { type: "section", head: "Executions and prisoners", md:
          "In January 2023 Iran executed Alireza Akbari, a British-Iranian former deputy defence minister, on spying charges, and Britain recalled its ambassador temporarily. In January 2025 Iranian authorities detained Craig and Lindsay Foreman, a British couple travelling round the world by motorbike, in Kerman. In February 2026 a Revolutionary Court in Tehran sentenced each to ten years for espionage, which they deny. Their appeals failed, the couple went on hunger strike in Evin prison in May, and in July Craig Foreman was given an extra two-year sentence. A Foreign Office minister called the sentences appalling and totally unjustifiable." },
        { type: "section", head: "The war", md:
          "As protests and a violent crackdown swept Iran in January 2026, the British embassy in Tehran closed its doors and continued to work remotely. When the United States and Israel went to war with Iran on 28 February 2026, Britain was not a combatant, but it withdrew its remaining diplomatic staff as fighting resumed in July. The Foreign Office advised against all travel to Iran and warned that British nationals there faced a high risk of arbitrary detention." },
        { type: "section", head: "Banning the Guards", md:
          "On 13 July 2026 the government announced it would ban the IRGC as a threat to national security, using new state-threats powers rather than terrorism law. The Home Office cited plots to assassinate journalists and cyber-attacks on British interests. Once in force, supporting the group becomes a crime. Iran summoned Britain's ambassador and warned of a firm and reciprocal response." },
        { type: "compare", head: "Each side's charge",
          left: { head: "Britain", md:
            "Iran plots violence in Britain and jails innocent Britons as bargaining chips." },
          right: { head: "Iran", md:
            "Britain is a hostile power that shelters opposition media and spies on Iran." } },
        { type: "section", head: "Why it matters", md:
          "Relations between Britain and Iran are at their lowest in decades. With the embassy closed and the IRGC outlawed, there are few channels left to free detained Britons or to manage a crisis." }
      ],
      takeaways: [
        "MI5 has warned of Iranian plots against people in Britain, especially Persian-language journalists.",
        "British couple Craig and Lindsay Foreman were sentenced in Iran to ten years each in February 2026.",
        "On 13 July 2026 Britain announced a ban on the IRGC under state-threats powers."
      ],
      check: { q: "How did Britain move against the IRGC in July 2026?",
        choices: ["It declared war on Iran", "It announced a ban using new state-threats powers", "It expelled all Iranian citizens"], answer: 1,
        explain: "The designation makes supporting the group a crime, like proscription." },
      sources: [
        { title: "British couple held in Iran sentenced to 10 years", publisher: "Al-Monitor", url: "https://www.al-monitor.com/originals/2026/02/british-couple-held-iran-sentenced-10-years", date: "2026-02" },
        { title: "UK withdraws remaining diplomatic staff from Iran", publisher: "L'Orient Today", url: "https://today.lorientlejour.com/article/1542222/uk-withdraws-remaining-diplomatic-staff-from-iran.html", date: "2026-07" },
        { title: "UK officially lists Iran's IRGC", publisher: "Jang", url: "https://jang.com.pk/en/69008-uk-officially-lists-irans-irgc-as-a-terrorist-organization-news", date: "2026-07" },
        { title: "Appeals court upholds prison sentences of British detainees Lindsay and Craig Foreman", publisher: "HRANA", url: "https://en-hrana.org/appeals-court-upholds-prison-sentences-of-british-detainees-lindsay-and-craig-foreman/", date: "2026" }
      ]
    }
  ]
});
