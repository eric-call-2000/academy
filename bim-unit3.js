window.ACADEMY.addUnit("bim", {
  id: "unit-3",
  title: "LOD & Model Detail",
  color: "#ff9600",
  icon: "🎚️",
  description: "How complete and reliable model elements are, and the information alongside them.",
  lessons: [
    {
      id: "l17",
      title: "What Is LOD?",
      intro: "LOD stands for Level of Development. It describes how complete and reliable a model element is, so people know how much they can trust it.",
      questions: [
        {
          type: "mcq",
          q: "In BIM, what does LOD most commonly stand for?",
          choices: ["Level of Detail only", "Level of Development", "Line of Design", "Layer of Data"],
          answer: 1,
          explain: "LOD stands for Level of Development. It captures both the geometry and how reliable the element information is, not just how detailed the picture looks."
        },
        {
          type: "truefalse",
          q: "LOD is only about how much geometric detail an element shows.",
          answer: false,
          explain: "LOD is about the reliability and completeness of an element, including its attached information. Raw geometric detail is a separate idea from development."
        },
        {
          type: "fill",
          q: "LOD tells the team how much they can ____ the information attached to an element.",
          answer: "trust",
          accept: ["trust", "rely on", "depend on"],
          explain: "The whole point of LOD is to communicate reliability so a downstream user knows whether an element is a rough placeholder or dependable data."
        },
        {
          type: "match",
          q: "Match each term to its meaning.",
          pairs: [
            ["LOD", "How complete and reliable an element is"],
            ["Element", "A modeled part such as a wall or duct"],
            ["Reliability", "How much the element can be trusted"]
          ],
          explain: "LOD describes the reliability of a modeled element. An element is a modeled part, and reliability is the trust level LOD communicates."
        },
        {
          type: "mcq",
          q: "Why is a shared LOD scale useful on a project?",
          choices: [
            "It makes files smaller",
            "It gives everyone a common way to state how complete an element is",
            "It replaces the need for drawings",
            "It hides information from the client"
          ],
          answer: 1,
          explain: "A shared scale gives the whole team a common language for how developed each element is, reducing confusion about what can be trusted."
        },
        {
          type: "truefalse",
          q: "Two people can look at the same element and disagree on how reliable it is without an agreed LOD definition.",
          answer: true,
          explain: "Without an agreed LOD, reliability is subjective. That is exactly why standardized LOD definitions exist."
        },
        {
          type: "fill",
          q: "LOD is short for Level of ____.",
          answer: "development",
          accept: ["development"],
          explain: "LOD expands to Level of Development, emphasizing how developed and dependable an element is."
        }
      ]
    },
    {
      id: "l18",
      title: "The LOD Scale",
      intro: "The common LOD scale used by BIMForum and AIA runs 100, 200, 300, 350, 400, and 500, from a rough placeholder to verified as-built information.",
      questions: [
        {
          type: "order",
          q: "Put these LOD levels in order from least to most developed.",
          items: ["LOD 100", "LOD 200", "LOD 300", "LOD 350", "LOD 400", "LOD 500"],
          explain: "The common scale progresses 100, 200, 300, 350, 400, then 500. Each step adds reliability, connections, or verified information."
        },
        {
          type: "mcq",
          q: "Which set lists valid levels on the common LOD scale?",
          choices: [
            "100, 200, 300, 350, 400, 500",
            "1, 2, 3, 4, 5, 6",
            "A, B, C, D, E",
            "10, 20, 30, 40, 50"
          ],
          answer: 0,
          explain: "The BIMForum and AIA scale uses 100, 200, 300, 350, 400, and 500. The 350 step sits between 300 and 400."
        },
        {
          type: "truefalse",
          q: "LOD 350 is a defined level on the common scale, sitting between 300 and 400.",
          answer: true,
          explain: "LOD 350 was added to the scale specifically to describe interfaces and connections between elements, between 300 and 400."
        },
        {
          type: "fill",
          q: "The extra level added between 300 and 400 is LOD ____.",
          answer: "350",
          accept: ["350"],
          explain: "LOD 350 fills the gap between 300 and 400 and focuses on how elements connect to one another."
        },
        {
          type: "match",
          q: "Match each LOD level to a short description.",
          pairs: [
            ["LOD 100", "Conceptual placeholder"],
            ["LOD 300", "Precise geometry"],
            ["LOD 500", "Verified as-built"]
          ],
          explain: "100 is a concept, 300 is precise and modeled to accurate geometry, and 500 is verified field information for the built asset."
        },
        {
          type: "mcq",
          q: "As the LOD number increases, what generally happens?",
          choices: [
            "The element becomes less reliable",
            "The element becomes more complete and reliable",
            "The element is deleted",
            "Nothing changes"
          ],
          answer: 1,
          explain: "Higher LOD numbers indicate more developed, more reliable elements, moving from concept toward verified as-built."
        },
        {
          type: "truefalse",
          q: "On the common scale, LOD 250 is a standard defined level.",
          answer: false,
          explain: "The defined steps are 100, 200, 300, 350, 400, and 500. There is no standard LOD 250 on this scale."
        }
      ]
    },
    {
      id: "l19",
      title: "LOD 100 to 200",
      intro: "LOD 100 is a conceptual placeholder with no reliable geometry, while LOD 200 is approximate geometry with generic size, shape, and location.",
      questions: [
        {
          type: "mcq",
          q: "How is an LOD 100 element best described?",
          choices: [
            "Fabrication ready",
            "A conceptual placeholder with no reliable geometry",
            "Verified against the field",
            "Precise geometry with connections"
          ],
          answer: 1,
          explain: "LOD 100 is conceptual. It may be shown by a symbol or generic representation and carries no reliable dimensions."
        },
        {
          type: "truefalse",
          q: "At LOD 200, geometry is approximate in size, shape, and location.",
          answer: true,
          explain: "LOD 200 provides approximate geometry with generic quantities, size, shape, and location that should not be treated as final."
        },
        {
          type: "fill",
          q: "At LOD 200, the geometry is best treated as ____ rather than exact.",
          answer: "approximate",
          accept: ["approximate", "generic", "estimated"],
          explain: "LOD 200 geometry is approximate. It is useful for coordination and early analysis but is not precise."
        },
        {
          type: "order",
          q: "Order these from earlier concept to more developed.",
          items: ["LOD 100 concept", "LOD 200 approximate", "LOD 300 precise"],
          explain: "Development moves from a 100 concept, to 200 approximate geometry, to 300 precise geometry."
        },
        {
          type: "match",
          q: "Match each level to its geometry.",
          pairs: [
            ["LOD 100", "No reliable geometry"],
            ["LOD 200", "Approximate geometry"]
          ],
          explain: "LOD 100 has no reliable geometry and is conceptual. LOD 200 has approximate geometry with generic dimensions."
        },
        {
          type: "mcq",
          q: "Why should you avoid taking precise measurements off an LOD 200 element?",
          choices: [
            "The file is corrupt",
            "Its geometry is only approximate and may change",
            "It is always drawn at the wrong scale",
            "LOD 200 elements are invisible"
          ],
          answer: 1,
          explain: "LOD 200 geometry is approximate. Treating it as exact can lead to errors because size and location are not yet reliable."
        },
        {
          type: "truefalse",
          q: "An LOD 100 element can be relied on for exact quantities.",
          answer: false,
          explain: "LOD 100 is conceptual with no reliable geometry, so exact quantities cannot be trusted from it."
        }
      ]
    },
    {
      id: "l20",
      title: "LOD 300 to 350",
      intro: "LOD 300 provides precise geometry with accurate size, shape, and location. LOD 350 adds the interfaces and connections between an element and the elements around it.",
      questions: [
        {
          type: "mcq",
          q: "What most clearly distinguishes LOD 350 from LOD 300?",
          choices: [
            "350 adds interfaces and connections to other elements",
            "350 removes all geometry",
            "350 is only conceptual",
            "350 is verified as-built data"
          ],
          answer: 0,
          explain: "LOD 350 specifically adds the modeling of how an element interfaces and connects with adjacent elements, which 300 alone does not require."
        },
        {
          type: "truefalse",
          q: "At LOD 300 the geometry is precise in size, shape, and location.",
          answer: true,
          explain: "LOD 300 provides precise, accurately modeled geometry, unlike the approximate geometry of LOD 200."
        },
        {
          type: "fill",
          q: "LOD 350 specifically adds ____ between an element and neighboring elements.",
          answer: "connections",
          accept: ["connections", "interfaces", "connections and interfaces"],
          explain: "LOD 350 adds the connections and interfaces that let elements coordinate accurately with one another."
        },
        {
          type: "match",
          q: "Match each level to what it adds.",
          pairs: [
            ["LOD 300", "Precise geometry"],
            ["LOD 350", "Connections to other elements"]
          ],
          explain: "LOD 300 gives precise geometry, and LOD 350 layers in the interfaces and connections between elements."
        },
        {
          type: "order",
          q: "Order these steps of increasing development.",
          items: ["LOD 200 approximate", "LOD 300 precise", "LOD 350 with connections"],
          explain: "Development increases from approximate geometry, to precise geometry, to precise geometry that also models connections."
        },
        {
          type: "mcq",
          q: "Why is LOD 350 especially valuable for coordination between trades?",
          choices: [
            "It hides clashes",
            "It models how elements physically connect, improving clash detection",
            "It deletes overlapping elements",
            "It reduces the model to a single trade"
          ],
          answer: 1,
          explain: "By modeling interfaces and connections, LOD 350 makes coordination and clash detection between trades far more accurate."
        },
        {
          type: "truefalse",
          q: "LOD 350 elements typically have less reliable geometry than LOD 200 elements.",
          answer: false,
          explain: "LOD 350 is more developed than LOD 200. It has precise geometry plus modeled connections, so it is more reliable, not less."
        }
      ]
    },
    {
      id: "l21",
      title: "LOD 400 to 500",
      intro: "LOD 400 is detailed enough for fabrication and assembly. LOD 500 is verified information for the built asset, confirmed against actual field conditions.",
      questions: [
        {
          type: "mcq",
          q: "What does LOD 400 primarily support?",
          choices: [
            "Early massing studies",
            "Fabrication and assembly of the element",
            "Deleting elements",
            "Hiding data from contractors"
          ],
          answer: 1,
          explain: "LOD 400 carries the detail, fabrication, and assembly information needed to actually build or manufacture the element."
        },
        {
          type: "truefalse",
          q: "LOD 500 information is verified against actual field conditions.",
          answer: true,
          explain: "LOD 500 represents field-verified as-built information, confirmed to match what was actually built."
        },
        {
          type: "fill",
          q: "LOD 500 represents ____ information for the built asset, confirmed in the field.",
          answer: "as-built",
          accept: ["as-built", "as built", "verified", "verified as-built"],
          explain: "LOD 500 is verified as-built information, reflecting the real, installed condition of the asset."
        },
        {
          type: "match",
          q: "Match each level to its purpose.",
          pairs: [
            ["LOD 400", "Fabrication ready detail"],
            ["LOD 500", "Field verified as-built"]
          ],
          explain: "LOD 400 supports fabrication and assembly, while LOD 500 is verified as-built information for the completed asset."
        },
        {
          type: "order",
          q: "Order the top of the scale from least to most developed.",
          items: ["LOD 350 connections", "LOD 400 fabrication", "LOD 500 as-built"],
          explain: "Beyond connections at 350, the scale moves to fabrication-ready detail at 400, then verified as-built at 500."
        },
        {
          type: "mcq",
          q: "Which statement about LOD 500 is correct?",
          choices: [
            "It is a rough concept",
            "It reflects verified real-world conditions of the built asset",
            "It has no data attached",
            "It is always lower detail than LOD 100"
          ],
          answer: 1,
          explain: "LOD 500 reflects verified, real-world conditions of the built asset and is often used for operations and facility management."
        },
        {
          type: "truefalse",
          q: "You would model a manufacturer specific part with exact assembly detail at LOD 400.",
          answer: true,
          explain: "LOD 400 is the fabrication level, where manufacturer specific parts and precise assembly detail belong."
        }
      ]
    },
    {
      id: "l22",
      title: "Development vs Detail",
      intro: "Level of Development is about reliability and completeness of information, which is different from raw geometric detail. A pretty, detailed shape can still be unreliable.",
      questions: [
        {
          type: "mcq",
          q: "What is the key difference between Level of Development and geometric detail?",
          choices: [
            "They are exactly the same thing",
            "Development is about reliability, detail is about how much geometry is shown",
            "Detail is always higher than development",
            "Development only applies to 2D drawings"
          ],
          answer: 1,
          explain: "Level of Development communicates how reliable and complete an element is, while geometric detail is simply how much geometry is drawn. A detailed shape can still be unreliable."
        },
        {
          type: "truefalse",
          q: "A highly detailed looking element is always high LOD.",
          answer: false,
          explain: "Visual detail does not guarantee reliability. An element can look detailed but still be an unverified placeholder, so it is not automatically high LOD."
        },
        {
          type: "fill",
          q: "Level of Development is mainly about the ____ of an element's information, not just its appearance.",
          answer: "reliability",
          accept: ["reliability", "completeness", "trustworthiness"],
          explain: "Development measures how reliable and complete the information is, which is separate from how detailed the geometry looks."
        },
        {
          type: "match",
          q: "Match each idea to what it measures.",
          pairs: [
            ["Level of Development", "Reliability and completeness"],
            ["Geometric detail", "Amount of geometry shown"]
          ],
          explain: "Development measures reliability and completeness, while geometric detail measures how much geometry is drawn."
        },
        {
          type: "mcq",
          q: "A generic block placed just to reserve space, but drawn with fine edges, is likely which LOD?",
          choices: [
            "High LOD because it looks detailed",
            "Low LOD because its information is not yet reliable",
            "LOD 500 automatically",
            "It cannot have any LOD"
          ],
          answer: 1,
          explain: "Reliability, not appearance, drives LOD. A placeholder reserving space is low LOD even if it is drawn with fine edges."
        },
        {
          type: "truefalse",
          q: "It is possible to have a low detail element that is still reliable for its intended use.",
          answer: true,
          explain: "An element can be simple in geometry yet reliable for the purpose it is meant to serve, showing that detail and development are distinct."
        },
        {
          type: "order",
          q: "Order these by increasing reliability of information.",
          items: ["Unverified placeholder", "Approximate element", "Precise coordinated element", "Field verified element"],
          explain: "Reliability grows from an unverified placeholder, to approximate, to precise and coordinated, to field verified information."
        }
      ]
    },
    {
      id: "l23",
      title: "LOI: Level of Information",
      intro: "LOI stands for Level of Information, the non-geometric data attached to an element, such as manufacturer, material, or performance values.",
      questions: [
        {
          type: "mcq",
          q: "What does LOI refer to?",
          choices: [
            "The geometry of an element",
            "The non-geometric information attached to an element",
            "The color of a wall",
            "The file format"
          ],
          answer: 1,
          explain: "LOI is Level of Information, describing the non-geometric data attached to an element, such as manufacturer, material, or ratings."
        },
        {
          type: "truefalse",
          q: "LOI covers the data attached to an element, not its shape.",
          answer: true,
          explain: "LOI is about attached information like properties and attributes, while geometry and shape are covered separately by development."
        },
        {
          type: "fill",
          q: "LOI is short for Level of ____.",
          answer: "information",
          accept: ["information"],
          explain: "LOI expands to Level of Information, the data or attributes carried by an element."
        },
        {
          type: "match",
          q: "Match each item to whether it is geometry or information.",
          pairs: [
            ["Wall length", "Geometry"],
            ["Fire rating", "Information"],
            ["Manufacturer name", "Information"]
          ],
          explain: "Wall length is geometry, while fire rating and manufacturer name are non-geometric information covered by LOI."
        },
        {
          type: "mcq",
          q: "Which of these is an example of information rather than geometry?",
          choices: [
            "The height of a column",
            "The exact profile shape",
            "The product warranty period",
            "The location coordinates"
          ],
          answer: 2,
          explain: "A warranty period is attached data, an example of LOI. Height, profile, and location are all geometric properties."
        },
        {
          type: "truefalse",
          q: "An element can have precise geometry but very little attached information.",
          answer: true,
          explain: "Geometry and information can develop at different rates, so an element may be geometrically precise yet carry little data."
        },
        {
          type: "order",
          q: "Order these from purely geometric toward richer information.",
          items: ["Bare shape only", "Shape plus basic type", "Shape plus full product data"],
          explain: "Information grows from a bare shape, to a shape with a basic type, to a shape carrying full product data."
        }
      ]
    },
    {
      id: "l24",
      title: "Level of Information Need",
      intro: "ISO 19650 uses the idea of Level of Information Need. It means providing only the information that is actually needed for a purpose, avoiding both too little and too much.",
      questions: [
        {
          type: "mcq",
          q: "What is the core idea of Level of Information Need in ISO 19650?",
          choices: [
            "Always model at the highest possible LOD",
            "Provide only the information actually needed for a purpose",
            "Provide as much information as technically possible",
            "Never attach any information"
          ],
          answer: 1,
          explain: "Level of Information Need is about supplying just enough information for the intended purpose, avoiding both under-delivery and wasteful over-delivery."
        },
        {
          type: "truefalse",
          q: "Level of Information Need is a concept from ISO 19650.",
          answer: true,
          explain: "ISO 19650 introduces Level of Information Need as a way to define how much information is required for a given purpose."
        },
        {
          type: "fill",
          q: "Level of Information Need aims to avoid providing too little or too ____ information.",
          answer: "much",
          accept: ["much"],
          explain: "The concept targets the right amount of information, guarding against both too little and too much."
        },
        {
          type: "match",
          q: "Match each situation to the problem it causes.",
          pairs: [
            ["Too little information", "Decisions cannot be made"],
            ["Too much information", "Wasted effort and clutter"]
          ],
          explain: "Too little information blocks decisions, while too much creates wasted effort and clutter. Level of Information Need seeks the balance."
        },
        {
          type: "mcq",
          q: "Why is defining information need tied to a purpose important?",
          choices: [
            "So the model is always as large as possible",
            "So the right amount of information is delivered for each specific use",
            "So information is never shared",
            "So geometry can be deleted"
          ],
          answer: 1,
          explain: "Tying information to a defined purpose ensures each deliverable carries exactly what that use requires, no more and no less."
        },
        {
          type: "truefalse",
          q: "Over-delivering information always improves a project with no downside.",
          answer: false,
          explain: "Excess information adds cost, effort, and clutter without added value, which is exactly what Level of Information Need tries to prevent."
        },
        {
          type: "order",
          q: "Order these steps for applying Level of Information Need.",
          items: ["Define the purpose", "Decide what information is needed", "Deliver only that information"],
          explain: "You first define the purpose, then decide the information required for it, then deliver only that information."
        }
      ]
    }
  ]
});
