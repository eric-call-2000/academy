window.ACADEMY.addUnit("evopsych", {
  id: "unit-4",
  title: "The Gene's-Eye View",
  color: "#7c5cff",
  icon: "🧬",
  description: "Reframes evolution around the gene as the unit of selection, following Dawkins, Williams, and the debate over what natural selection really acts upon.",
  lessons: [
    {
      id: "l25",
      title: "What Is Selected?",
      intro: "Biologists disagree about the level at which selection truly acts, from genes to individuals to whole groups.",
      questions: [
        {
          type: "mcq",
          q: "The levels-of-selection debate is fundamentally a question about what?",
          choices: [
            "How fast animals can run from predators",
            "Which biological unit natural selection actually acts on",
            "Whether evolution happens at all",
            "How many species exist on Earth"
          ],
          answer: 1,
          explain: "The debate asks whether selection favors genes, individual organisms, groups, or some combination, when traits spread or vanish."
        },
        {
          type: "truefalse",
          q: "Everyone in biology agrees that selection acts only on individual organisms.",
          answer: false,
          explain: "There is genuine debate. Candidates for the unit of selection include the gene, the individual, and even the group."
        },
        {
          type: "match",
          q: "Match each proposed level of selection to its unit.",
          pairs: [
            ["Genic selection", "The gene or allele itself"],
            ["Individual selection", "The whole organism and its survival"],
            ["Group selection", "An entire population or social group"]
          ],
          explain: "Each level proposes a different entity whose success or failure drives evolutionary change."
        },
        {
          type: "fill",
          q: "The core dispute is often called the debate over the unit, or level, of ____.",
          answer: "selection",
          accept: ["selection", "natural selection"],
          explain: "The phrase levels of selection names the disagreement about which entity selection favors."
        },
        {
          type: "order",
          q: "Order these candidate units of selection from smallest to largest.",
          items: ["Gene", "Individual organism", "Group"],
          explain: "The gene is the smallest heritable unit, the organism carries many genes, and a group contains many organisms."
        },
        {
          type: "mcq",
          q: "Why does the level of selection matter for explaining behavior?",
          choices: [
            "It decides how tall an animal can grow",
            "It has no effect on any prediction",
            "It changes what looks like the beneficiary of an adaptation",
            "It only matters for plants, not animals"
          ],
          answer: 2,
          explain: "Whether a trait is seen as benefiting the gene, the individual, or the group shapes how we explain why it exists."
        },
        {
          type: "truefalse",
          q: "The gene's-eye view is one influential answer to the levels-of-selection question.",
          answer: true,
          explain: "It argues the gene is the most useful unit for understanding what selection preserves over generations."
        }
      ]
    },
    {
      id: "l26",
      title: "Dawkins's Selfish Gene",
      intro: "In 1976 Richard Dawkins popularized viewing evolution from the gene's perspective in his book The Selfish Gene.",
      questions: [
        {
          type: "mcq",
          q: "Who wrote The Selfish Gene, published in 1976?",
          choices: [
            "Charles Darwin",
            "Richard Dawkins",
            "Stephen Jay Gould",
            "Konrad Lorenz"
          ],
          answer: 1,
          explain: "Richard Dawkins published The Selfish Gene in 1976, popularizing the gene-centered view of evolution."
        },
        {
          type: "fill",
          q: "Dawkins's landmark book, published in ____, was titled The Selfish Gene.",
          answer: "1976",
          accept: ["1976"],
          explain: "The Selfish Gene appeared in 1976 and became one of the most influential works in evolutionary biology."
        },
        {
          type: "truefalse",
          q: "The word selfish in The Selfish Gene means genes literally have conscious desires and intentions.",
          answer: false,
          explain: "Selfish is a metaphor. Genes have no mind. It means genes that promote their own copying tend to spread."
        },
        {
          type: "mcq",
          q: "What does the gene-centered view claim genes appear to behave as if they are doing?",
          choices: [
            "Protecting every other species on Earth",
            "Trying to make the individual live forever",
            "Deliberately reducing their own frequency",
            "Maximizing the number of copies of themselves"
          ],
          answer: 3,
          explain: "Genes that act as if maximizing their own copies in future generations are the ones that persist and spread."
        },
        {
          type: "match",
          q: "Match each idea from The Selfish Gene to its meaning.",
          pairs: [
            ["Selfish gene", "A gene favored because it promotes its own copying"],
            ["Gene-centered view", "Evolution seen from the perspective of the gene"],
            ["Metaphor", "Selfish describes effects, not conscious intent"]
          ],
          explain: "Dawkins used vivid metaphor to reframe familiar evolution around what benefits the gene."
        },
        {
          type: "truefalse",
          q: "Dawkins did not discover the underlying math of gene-centered thinking but popularized it for a wide audience.",
          answer: true,
          explain: "The formal ideas came from earlier theorists like Hamilton and Williams. Dawkins made them famous and vivid."
        },
        {
          type: "order",
          q: "Order these gene-centered thinkers by the year of their key work, earliest first.",
          items: ["Hamilton (1964)", "Williams (1966)", "Dawkins (1976)"],
          explain: "Hamilton's kin selection came in 1964, Williams's book in 1966, and Dawkins synthesized and popularized them in 1976."
        }
      ]
    },
    {
      id: "l27",
      title: "Genes as Replicators",
      intro: "Dawkins distinguished replicators, which are copied across generations, from vehicles like bodies that carry them.",
      questions: [
        {
          type: "mcq",
          q: "In Dawkins's framework, what is a replicator?",
          choices: [
            "A predator that hunts other animals",
            "A body that dies without leaving offspring",
            "An entity, like a gene, that is copied across generations",
            "A random mutation that never survives"
          ],
          answer: 2,
          explain: "A replicator is something copied faithfully over generations. Genes are the paradigm example."
        },
        {
          type: "fill",
          q: "Dawkins described organisms as survival ____ built by genes to carry them.",
          answer: "machines",
          accept: ["machines", "machine"],
          explain: "He called bodies survival machines, temporary vehicles constructed to help genes persist and reproduce."
        },
        {
          type: "match",
          q: "Match each Dawkins term to its role.",
          pairs: [
            ["Replicator", "The gene, copied across generations"],
            ["Vehicle", "The body that carries and protects genes"],
            ["Survival machine", "Another name for the organism as a vehicle"]
          ],
          explain: "Replicators persist over time. Vehicles are the disposable bodies that carry them."
        },
        {
          type: "truefalse",
          q: "In the gene's-eye view, the body is potentially immortal while the gene is temporary.",
          answer: false,
          explain: "It is the reverse. The gene, as information copied onward, can persist while each body is temporary and disposable."
        },
        {
          type: "mcq",
          q: "Why does Dawkins call genes, not bodies, the true unit that endures?",
          choices: [
            "Bodies are recombined and die each generation, but gene copies pass on intact",
            "Bodies never change at all over time",
            "Genes are larger than bodies",
            "Bodies reproduce without any genes"
          ],
          answer: 0,
          explain: "Each body is a one-off mix that dies, but a gene can be copied faithfully into many future bodies."
        },
        {
          type: "order",
          q: "Order the flow of the gene's-eye view from cause to effect.",
          items: ["Genes replicate", "Genes build bodies as vehicles", "Successful vehicles pass genes on"],
          explain: "Genes act as replicators, construct bodies to carry them, and the best vehicles send those genes into the future."
        },
        {
          type: "truefalse",
          q: "A vehicle is the entity whose survival and reproduction directly determines which replicators persist.",
          answer: true,
          explain: "Vehicles, mainly organisms, do the surviving and reproducing that decides which genes get copied onward."
        }
      ]
    },
    {
      id: "l28",
      title: "Williams's Adaptation and Natural Selection",
      intro: "George C. Williams's 1966 book made a rigorous case against naive group selection and for gene-level thinking.",
      questions: [
        {
          type: "mcq",
          q: "What did George Williams's 1966 book Adaptation and Natural Selection argue against?",
          choices: [
            "The existence of DNA",
            "The theory of natural selection itself",
            "The idea that animals can learn",
            "The idea that adaptations evolve for the good of the group"
          ],
          answer: 3,
          explain: "Williams argued that most traits explained as good for the group are better explained as benefiting individuals and their genes."
        },
        {
          type: "fill",
          q: "Williams published Adaptation and Natural Selection in the year ____.",
          answer: "1966",
          accept: ["1966"],
          explain: "The book appeared in 1966 and reshaped how biologists thought about the level of selection."
        },
        {
          type: "truefalse",
          q: "Williams argued we should prefer the lowest-level explanation adequate to explain an adaptation.",
          answer: true,
          explain: "He urged parsimony: invoke group selection only if individual or gene-level selection cannot explain the trait."
        },
        {
          type: "mcq",
          q: "Why did Williams doubt that traits commonly evolve for the good of the species?",
          choices: [
            "Species never contain any variation",
            "Selfish individuals would out-reproduce self-sacrificing ones, undermining group-benefiting traits",
            "Groups reproduce faster than individuals",
            "Natural selection cannot act on animals"
          ],
          answer: 1,
          explain: "Within a group, individuals that grab more reproduction spread their genes faster, eroding any trait that sacrifices for the group."
        },
        {
          type: "match",
          q: "Match each concept from Williams to its meaning.",
          pairs: [
            ["Parsimony", "Prefer the simplest sufficient level of selection"],
            ["Naive group selection", "Assuming traits evolve for the species' good"],
            ["Gene-level focus", "Explaining adaptation by benefit to genes"]
          ],
          explain: "Williams combined a rule of parsimony with skepticism of easy group-benefit stories."
        },
        {
          type: "order",
          q: "Order Williams's reasoning from premise to conclusion.",
          items: ["Individuals compete within groups", "Selfish variants out-reproduce self-sacrificers", "Group-benefiting traits are usually undermined"],
          explain: "Because competition inside a group favors selfish variants, adaptations for the group's sake rarely hold up."
        },
        {
          type: "truefalse",
          q: "Williams's work helped lay the groundwork that Dawkins later popularized in 1976.",
          answer: true,
          explain: "Williams's 1966 arguments were a key foundation for the gene-centered view Dawkins made famous a decade later."
        }
      ]
    },
    {
      id: "l29",
      title: "The Extended Phenotype",
      intro: "Dawkins argued in 1982 that a gene's effects can reach beyond the body into the wider world.",
      questions: [
        {
          type: "mcq",
          q: "What is the central idea of the extended phenotype?",
          choices: [
            "Genes have no effect on anything outside the nucleus",
            "Phenotypes only exist inside cells",
            "A gene's effects can extend beyond the organism's own body",
            "Bodies grow without any genetic instructions"
          ],
          answer: 2,
          explain: "Dawkins argued genes can shape structures and even other organisms beyond the body that carries them."
        },
        {
          type: "mcq",
          q: "Which is a classic example of an extended phenotype?",
          choices: [
            "A beaver's dam built by genes for dam-building behavior",
            "The color of a leaf in autumn",
            "The temperature of the ocean",
            "The phase of the moon"
          ],
          answer: 0,
          explain: "A beaver dam is a structure shaped by beaver genes acting on the environment, a phenotype reaching beyond the body."
        },
        {
          type: "fill",
          q: "A spider's web and a bird's nest are often cited as extended ____ of their builders' genes.",
          answer: "phenotypes",
          accept: ["phenotypes", "phenotype"],
          explain: "Constructed artifacts like webs and nests count as extended phenotypes, gene effects reaching into the world."
        },
        {
          type: "truefalse",
          q: "The extended phenotype can include a parasite manipulating its host's behavior for the parasite's benefit.",
          answer: true,
          explain: "When a parasite's genes alter host behavior to spread themselves, the host becomes part of the parasite's extended phenotype."
        },
        {
          type: "match",
          q: "Match each example to why it is an extended phenotype.",
          pairs: [
            ["Beaver dam", "Structure built by genes for building behavior"],
            ["Caddisfly case", "Protective home constructed from the environment"],
            ["Manipulated host", "A parasite's genes altering another body"]
          ],
          explain: "Each shows a gene's reach extending past the boundary of the body that carries it."
        },
        {
          type: "truefalse",
          q: "The extended phenotype concept says genes can only influence the exact cell they sit in.",
          answer: false,
          explain: "The whole point is the opposite: gene effects can extend into built structures and even other organisms."
        },
        {
          type: "order",
          q: "Order how a gene's influence extends outward in the extended phenotype view.",
          items: ["Gene affects the body", "Body builds a structure", "Structure changes the wider environment"],
          explain: "Genes shape the body, the body constructs artifacts, and those artifacts extend the gene's reach into the world."
        }
      ]
    },
    {
      id: "l30",
      title: "Memes as a Concept",
      intro: "Dawkins coined the meme as a possible cultural replicator, an idea with real limits and critics.",
      questions: [
        {
          type: "mcq",
          q: "What did Dawkins mean by a meme when he coined the term in 1976?",
          choices: [
            "A funny image posted online",
            "A type of gene found only in humans",
            "A species of primate",
            "A unit of cultural transmission that spreads between minds"
          ],
          answer: 3,
          explain: "Dawkins proposed the meme as a cultural replicator, an idea, tune, or practice copied from mind to mind."
        },
        {
          type: "fill",
          q: "A meme was proposed as a cultural ____, paralleling how genes are biological replicators.",
          answer: "replicator",
          accept: ["replicator"],
          explain: "The meme concept treats units of culture as replicators, copied between people much as genes are copied between bodies."
        },
        {
          type: "match",
          q: "Match each replicator to its domain.",
          pairs: [
            ["Gene", "Biological replicator copied in reproduction"],
            ["Meme", "Cultural replicator copied between minds"],
            ["Imitation", "The main way memes are transmitted"]
          ],
          explain: "Genes replicate through reproduction, while memes are proposed to replicate through imitation and learning."
        },
        {
          type: "truefalse",
          q: "One major criticism is that memes lack the faithful, discrete copying that genes have.",
          answer: true,
          explain: "Ideas are often blended and transformed as they spread, so critics argue memes copy far less faithfully than genes."
        },
        {
          type: "truefalse",
          q: "The meme concept is universally accepted as a rigorous scientific unit with no limitations.",
          answer: false,
          explain: "Memetics remains controversial. Critics note memes are hard to define, delimit, and measure precisely."
        },
        {
          type: "mcq",
          q: "Which is a commonly cited limit of the meme concept?",
          choices: [
            "Ideas never spread between people",
            "Culture cannot change over time",
            "There is no clear boundary defining where one meme ends and another begins",
            "Genes and memes are exactly identical"
          ],
          answer: 2,
          explain: "Unlike genes, memes have no agreed discrete boundary, making them hard to isolate and study rigorously."
        },
        {
          type: "order",
          q: "Order the steps by which a meme is said to spread.",
          items: ["An idea arises in one mind", "It is imitated by others", "It becomes common in a culture"],
          explain: "A meme originates, is copied through imitation, and can then spread widely through a population of minds."
        }
      ]
    },
    {
      id: "l31",
      title: "Group Selection Reconsidered",
      intro: "Modern multilevel selection revisits whether selection can act on groups, and why it stays controversial.",
      questions: [
        {
          type: "mcq",
          q: "What does multilevel selection theory propose?",
          choices: [
            "Selection can act at more than one level at once, including within and between groups",
            "Selection acts only on single genes and never on anything else",
            "Evolution stops when groups form",
            "Only the largest animals ever evolve"
          ],
          answer: 0,
          explain: "Multilevel selection models both competition within groups and competition between groups simultaneously."
        },
        {
          type: "truefalse",
          q: "Multilevel selection is a modern reframing of the older group-selection debate.",
          answer: true,
          explain: "It updates group selection with more careful math, partitioning selection into within-group and between-group components."
        },
        {
          type: "match",
          q: "Match each level in multilevel selection to what it favors.",
          pairs: [
            ["Within-group selection", "Often favors selfish individuals"],
            ["Between-group selection", "Can favor cooperative groups"],
            ["Net outcome", "Depends on which level is stronger"]
          ],
          explain: "Selfishness tends to win inside groups, but groups of cooperators can beat groups of selfish individuals."
        },
        {
          type: "fill",
          q: "Multilevel selection partitions selection into within-group and between-group ____.",
          answer: "components",
          accept: ["components", "component", "levels"],
          explain: "The theory splits total selection into a within-group part and a between-group part to track their opposing pulls."
        },
        {
          type: "mcq",
          q: "Why does group selection remain controversial among biologists?",
          choices: [
            "No biologist has ever studied cooperation",
            "Many argue its results can be restated in gene-centered terms, and strong group selection needs demanding conditions",
            "It has been proven completely impossible",
            "It contradicts the existence of genes"
          ],
          answer: 1,
          explain: "Critics note between-group selection needs restrictive conditions and can often be rephrased as inclusive fitness or gene-level selection."
        },
        {
          type: "truefalse",
          q: "Some theorists argue multilevel selection and gene-centered kin selection can be mathematically equivalent descriptions.",
          answer: true,
          explain: "A key point in the debate is that the same evolutionary outcomes can often be described either way, fueling disagreement over which is clearer."
        },
        {
          type: "order",
          q: "Order the historical shift in thinking about group selection.",
          items: ["Naive good-of-the-species selection", "Williams's 1966 critique", "Modern multilevel selection"],
          explain: "Early naive group selection was challenged by Williams in 1966, and later refined into careful multilevel selection models."
        }
      ]
    },
    {
      id: "l32",
      title: "Selfish Genes, Cooperative Bodies",
      intro: "If genes are selfish, why do cells and organisms cooperate so tightly? The gene's-eye view has an answer.",
      questions: [
        {
          type: "mcq",
          q: "Why do the many genes in one body usually cooperate rather than fight?",
          choices: [
            "Genes are incapable of ever conflicting",
            "They share the same exit into the next generation through the same gametes",
            "Bodies contain only a single gene",
            "Cooperation gives no benefit to any gene"
          ],
          answer: 1,
          explain: "Genes that travel together into the same offspring share a common fate, so promoting the body's success also copies each of them."
        },
        {
          type: "fill",
          q: "Genes in a genome share a common ____ into the next generation, which aligns their interests.",
          answer: "fate",
          accept: ["fate", "exit", "future"],
          explain: "Because they usually reach offspring together, genes share a fate, so cooperation for the body's reproduction serves them all."
        },
        {
          type: "truefalse",
          q: "The cells of a multicellular body are typically genetic clones descended from one fertilized egg.",
          answer: true,
          explain: "Ordinary body cells share the same genome from the original zygote, so their genetic interests are aligned toward the whole organism."
        },
        {
          type: "match",
          q: "Match each idea to how it explains cooperation.",
          pairs: [
            ["Shared fate", "Genes reproduce together, so they cooperate"],
            ["Clonal cells", "Body cells share one genome from the zygote"],
            ["Fair meiosis", "Rules that stop any one gene from cheating"]
          ],
          explain: "Shared reproduction, clonal cells, and fair gene-passing all keep the body's genes pulling in the same direction."
        },
        {
          type: "truefalse",
          q: "Conflict between genes in a body is impossible under any circumstances.",
          answer: false,
          explain: "Cooperation is the norm, but selfish genetic elements and cancer show that conflict can break out when a gene's fate diverges."
        },
        {
          type: "mcq",
          q: "What are selfish genetic elements an example of?",
          choices: [
            "Genes that never replicate at all",
            "Cells that lack any DNA",
            "Genes that promote their own spread even at a cost to the rest of the genome",
            "Organisms with no genes"
          ],
          answer: 2,
          explain: "Selfish genetic elements pursue their own copying against the body's interests, the exception that reveals why cooperation is usually favored."
        },
        {
          type: "order",
          q: "Order the logic explaining why bodies are cooperative.",
          items: ["Genes share the same genome", "They reproduce through the same offspring", "Cooperation copies all of them, so it is favored"],
          explain: "Because genes ride to the future together, helping the shared body succeed copies each of them, so cooperation wins."
        }
      ]
    }
  ]
});
