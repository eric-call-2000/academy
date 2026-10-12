window.ACADEMY.addUnit("algebra1", {
  id: "unit-1",
  title: "Number Sense & the Real Numbers",
  color: "#1c7ed6",
  icon: "\u{1F522}",
  description: "The number system everything else is built on, and the arithmetic habits algebra quietly assumes you already have.",
  lessons: [
    {
      id: "l1",
      title: "The real number system",
      intro: "Every number you'll use in high school math belongs to a family, and the families nest inside each other like boxes.",
      questions: [
        {
          type: "order",
          q: "Order these sets from smallest (most exclusive) to largest (most inclusive).",
          items: ["Natural numbers", "Whole numbers", "Integers", "Rational numbers"],
          explain: "Natural numbers are 1, 2, 3, …; whole numbers add 0; integers add the negatives; rationals add every fraction of integers. Each set contains the one before it."
        },
        {
          type: "mcq",
          q: "Which number is irrational?",
          choices: ["0.75", "−4", "√2", "2/3"],
          answer: 2,
          explain: "√2 cannot be written as a fraction of two integers; its decimal never ends and never repeats. 0.75 = 3/4, −4 = −4/1 and 2/3 are all rational."
        },
        {
          type: "truefalse",
          q: "0.333… (repeating forever) is an irrational number.",
          answer: false,
          explain: "A repeating decimal is always rational. 0.333… equals exactly 1/3. Irrational decimals never end AND never settle into a repeating pattern."
        },
        {
          type: "match",
          q: "Match each number to the smallest set it belongs to.",
          pairs: [
            ["0", "Whole numbers"],
            ["−7", "Integers"],
            ["π", "Irrational numbers"]
          ],
          explain: "0 is the first whole number (it isn't a natural number); −7 needs the integers; π is irrational, so it is real but not rational."
        },
        {
          type: "fill",
          q: "A number that can be written as a fraction a/b of two integers (with b ≠ 0) is called ____.",
          answer: "rational",
          accept: ["rational", "a rational number", "rational number"],
          explain: "'Rational' comes from 'ratio': a rational number is a ratio of two integers."
        },
        {
          type: "truefalse",
          q: "Every integer is also a rational number.",
          answer: true,
          explain: "Any integer n can be written as n/1, so it fits the definition of a rational number."
        },
        {
          type: "mcq",
          q: "Together, the rational and irrational numbers make up which set?",
          choices: ["The real numbers", "The integers", "The whole numbers", "The natural numbers"],
          answer: 0,
          explain: "Every point on the number line is either rational or irrational, and together they form the real numbers."
        }
      ]
    },
    {
      id: "l2",
      title: "Integers and signs",
      intro: "Adding, subtracting, multiplying and dividing with negatives — the place most algebra mistakes actually start.",
      questions: [
        {
          type: "mcq",
          q: "What is −8 + 3?",
          choices: ["−11", "11", "5", "−5"],
          answer: 3,
          explain: "Start at −8 and move 3 to the right on the number line: −7, −6, −5."
        },
        {
          type: "fill",
          q: "Subtracting a negative is the same as adding a positive, so 6 − (−4) = ____.",
          answer: "10",
          accept: ["10", "+10"],
          explain: "6 − (−4) = 6 + 4 = 10. Taking away a debt of 4 leaves you 4 better off."
        },
        {
          type: "truefalse",
          q: "A negative number times a negative number is positive.",
          answer: true,
          explain: "(−3)(−2) = 6. One way to see it: multiplying by −1 flips a number across 0, so flipping twice lands you back on the positive side."
        },
        {
          type: "match",
          q: "Match each product or quotient to its sign.",
          pairs: [
            ["(−5)(4)", "Negative"],
            ["(−6)(−2)", "Positive"],
            ["(−3)(−1)(−2)", "Negative"]
          ],
          explain: "Count the negative factors: an odd number of negatives gives a negative result, an even number gives a positive result."
        },
        {
          type: "mcq",
          q: "What is −24 ÷ (−6)?",
          choices: ["4", "−4", "−18", "18"],
          answer: 0,
          explain: "Division follows the same sign rule as multiplication: negative ÷ negative is positive, and 24 ÷ 6 = 4."
        },
        {
          type: "truefalse",
          q: "−3² and (−3)² are equal.",
          answer: false,
          explain: "Without parentheses the exponent applies only to 3: −3² = −(3·3) = −9. With parentheses, (−3)² = (−3)(−3) = 9."
        },
        {
          type: "order",
          q: "Order from least to greatest.",
          items: ["−12", "−5", "0", "3"],
          explain: "On the number line, numbers increase to the right. −12 is farther left than −5, so it is smaller even though 12 > 5."
        }
      ]
    },
    {
      id: "l3",
      title: "Fractions, decimals and percents",
      intro: "Three ways to write the same quantity — and knowing when each one is easiest to work with.",
      questions: [
        {
          type: "match",
          q: "Match each fraction to its equal decimal and percent.",
          pairs: [
            ["1/4", "0.25 = 25%"],
            ["3/5", "0.6 = 60%"],
            ["1/8", "0.125 = 12.5%"]
          ],
          explain: "To turn a fraction into a decimal, divide the top by the bottom; to turn a decimal into a percent, multiply by 100."
        },
        {
          type: "mcq",
          q: "What is 2/3 + 1/4?",
          choices: ["3/7", "11/12", "3/12", "8/12"],
          answer: 1,
          explain: "Use a common denominator of 12: 2/3 = 8/12 and 1/4 = 3/12, so the sum is 11/12. Adding tops and bottoms (3/7) is the classic mistake."
        },
        {
          type: "fill",
          q: "To divide by a fraction, multiply by its reciprocal. So 3/4 ÷ 1/2 = 3/4 × 2/1 = ____ (as a fraction).",
          answer: "3/2",
          accept: ["3/2", "6/4", "1.5", "1 1/2"],
          explain: "3/4 × 2 = 6/4 = 3/2. Check: half of 3/2 is 3/4, so 3/2 is the number of halves in 3/4."
        },
        {
          type: "mcq",
          q: "What is 15% of 80?",
          choices: ["12", "8", "15", "1.2"],
          answer: 0,
          explain: "10% of 80 is 8 and 5% is half of that, 4. Together 15% is 12. Or compute 0.15 × 80 = 12."
        },
        {
          type: "truefalse",
          q: "A price that rises 50% and then falls 50% ends up back where it started.",
          answer: false,
          explain: "$100 rises to $150, and 50% of $150 is $75, so it ends at $75. Each percent is taken of a different base."
        },
        {
          type: "truefalse",
          q: "0.5, 1/2 and 50% are three names for the same number.",
          answer: true,
          explain: "Each represents one half. Percent means 'per hundred', so 50% = 50/100 = 1/2 = 0.5."
        },
        {
          type: "order",
          q: "Order from least to greatest.",
          items: ["0.3", "1/3", "35%", "2/5"],
          explain: "Convert to decimals: 0.3, 0.333…, 0.35, 0.4."
        }
      ]
    },
    {
      id: "l4",
      title: "Order of operations",
      intro: "A shared rule for which step comes first, so every reader gets the same answer from the same expression.",
      questions: [
        {
          type: "order",
          q: "Put the order-of-operations steps in the order you apply them.",
          items: ["Parentheses (grouping)", "Exponents", "Multiplication and division, left to right", "Addition and subtraction, left to right"],
          explain: "This is PEMDAS (or GEMDAS/BODMAS). The key detail: M/D share one step and A/S share one step, each worked left to right."
        },
        {
          type: "mcq",
          q: "What is 3 + 4 × 2?",
          choices: ["14", "10", "11", "24"],
          answer: 2,
          explain: "Multiplication comes before addition: 4 × 2 = 8, then 3 + 8 = 11."
        },
        {
          type: "fill",
          q: "Evaluate: 12 ÷ 3 × 2 = ____.",
          answer: "8",
          accept: ["8"],
          explain: "Multiplication and division are done left to right: 12 ÷ 3 = 4, then 4 × 2 = 8. Doing 3 × 2 first gives the wrong answer, 2."
        },
        {
          type: "truefalse",
          q: "In PEMDAS, multiplication always comes before division.",
          answer: false,
          explain: "They have equal priority, so you work left to right. The M appears before the D in the acronym only because one letter has to come first."
        },
        {
          type: "mcq",
          q: "What is (2 + 3)² − 4?",
          choices: ["9", "21", "17", "1"],
          answer: 1,
          explain: "Parentheses first: 2 + 3 = 5. Then the exponent: 5² = 25. Then subtract: 25 − 4 = 21."
        },
        {
          type: "match",
          q: "Match each expression to its value.",
          pairs: [
            ["10 − 2 × 3", "4"],
            ["(10 − 2) × 3", "24"],
            ["10 − 6 ÷ 2", "7"]
          ],
          explain: "Same numbers, different grouping, different answers — which is exactly why the convention exists."
        },
        {
          type: "truefalse",
          q: "A fraction bar acts like a grouping symbol: in (8 + 4)/(5 − 2) you simplify the top and bottom before dividing.",
          answer: true,
          explain: "The fraction bar groups the whole numerator and the whole denominator: 12 ÷ 3 = 4."
        }
      ]
    },
    {
      id: "l5",
      title: "Exponents and square roots",
      intro: "Exponents are shorthand for repeated multiplication; roots undo them.",
      questions: [
        {
          type: "mcq",
          q: "What does 2⁵ mean?",
          choices: ["2 × 5", "2 × 2 × 2 × 2 × 2", "5 × 5", "2 + 2 + 2 + 2 + 2"],
          answer: 1,
          explain: "The exponent counts how many times the base is used as a factor: 2⁵ = 32. Confusing it with 2 × 5 = 10 is a common slip."
        },
        {
          type: "fill",
          q: "√81 = ____.",
          answer: "9",
          accept: ["9", "+9"],
          explain: "9 × 9 = 81. The √ symbol means the principal (non-negative) square root, so the answer is 9, not −9."
        },
        {
          type: "match",
          q: "Match each power to its value.",
          pairs: [
            ["3³", "27"],
            ["10⁴", "10,000"],
            ["5⁰", "1"]
          ],
          explain: "Any nonzero number to the 0 power is 1; powers of 10 are 1 followed by that many zeros."
        },
        {
          type: "truefalse",
          q: "√(9 + 16) = √9 + √16.",
          answer: false,
          explain: "√(9 + 16) = √25 = 5, but √9 + √16 = 3 + 4 = 7. Square roots do not split across addition."
        },
        {
          type: "mcq",
          q: "Between which two whole numbers does √50 lie?",
          choices: ["6 and 7", "25 and 26", "7 and 8", "5 and 6"],
          answer: 2,
          explain: "7² = 49 and 8² = 64. Since 50 is between 49 and 64, √50 is between 7 and 8 (just above 7)."
        },
        {
          type: "truefalse",
          q: "√16 × √4 = √64.",
          answer: true,
          explain: "4 × 2 = 8 and √64 = 8. Square roots DO split across multiplication: √a·√b = √(ab) for non-negative a and b."
        },
        {
          type: "order",
          q: "Order from least to greatest.",
          items: ["2³", "3²", "√121", "4²"],
          explain: "2³ = 8, 3² = 9, √121 = 11, 4² = 16."
        }
      ]
    },
    {
      id: "l6",
      title: "Absolute value and the number line",
      intro: "Absolute value measures distance from zero, which is why it is never negative.",
      questions: [
        {
          type: "fill",
          q: "|−15| = ____.",
          answer: "15",
          accept: ["15", "+15"],
          explain: "−15 is 15 units away from 0, and distance is never negative."
        },
        {
          type: "mcq",
          q: "What is the best description of |x|?",
          choices: ["The opposite of x", "x with its sign removed only if x is positive", "The distance from x to 0 on the number line", "Always a negative number"],
          answer: 2,
          explain: "Thinking of |x| as distance explains everything else: it's 0 at 0 and positive everywhere else."
        },
        {
          type: "truefalse",
          q: "|a − b| gives the distance between a and b on the number line.",
          answer: true,
          explain: "For example |2 − 9| = |−7| = 7, and 2 and 9 really are 7 apart. The order doesn't matter: |9 − 2| = 7 too."
        },
        {
          type: "match",
          q: "Match each expression to its value.",
          pairs: [
            ["|−4| + |3|", "7"],
            ["|−4 + 3|", "1"],
            ["−|−4|", "−4"]
          ],
          explain: "Work inside the bars first, then take the absolute value. A negative sign outside the bars still applies afterward."
        },
        {
          type: "mcq",
          q: "Which values of x make |x| = 6 true?",
          choices: ["Only 6", "Only −6", "6 and −6", "No value"],
          answer: 2,
          explain: "Both 6 and −6 are 6 units from 0. This two-answer pattern returns when you solve absolute-value equations in Unit 3."
        },
        {
          type: "truefalse",
          q: "|x| = −2 has a solution.",
          answer: false,
          explain: "An absolute value is a distance, so it can never equal a negative number. This equation has no solution."
        },
        {
          type: "order",
          q: "Order these points from left to right on the number line.",
          items: ["−3.5", "−|2|", "|−1|", "|−4|"],
          explain: "−3.5, then −|2| = −2, then |−1| = 1, then |−4| = 4."
        }
      ]
    },
    {
      id: "l7",
      title: "Ratios, rates and proportions",
      intro: "Comparing quantities by division — the idea behind unit prices, maps, recipes and slope.",
      questions: [
        {
          type: "mcq",
          q: "A class has 12 girls and 18 boys. What is the ratio of girls to boys in simplest form?",
          choices: ["2:3", "3:2", "12:30", "2:5"],
          answer: 0,
          explain: "12:18 divides through by 6 to give 2:3. (12:30 would be girls to the whole class.)"
        },
        {
          type: "fill",
          q: "A car travels 150 miles in 3 hours. Its unit rate is ____ miles per hour.",
          answer: "50",
          accept: ["50", "50 mph", "50 miles per hour"],
          explain: "A unit rate is per 1 of something: 150 ÷ 3 = 50 miles per 1 hour."
        },
        {
          type: "mcq",
          q: "Which is the better buy?",
          choices: ["12 oz for $3.00", "20 oz for $4.40", "They cost the same per ounce", "You can't tell without more information"],
          answer: 1,
          explain: "$3.00 ÷ 12 = $0.25 per ounce; $4.40 ÷ 20 = $0.22 per ounce. The 20 oz size is cheaper per ounce."
        },
        {
          type: "fill",
          q: "Solve the proportion 3/4 = x/20. x = ____.",
          answer: "15",
          accept: ["15", "x=15", "x = 15"],
          explain: "Cross-multiply: 4x = 60, so x = 15. Or notice 4 × 5 = 20, so x = 3 × 5 = 15."
        },
        {
          type: "truefalse",
          q: "If 5 pencils cost $2, then 15 pencils cost $6, assuming the price per pencil stays the same.",
          answer: true,
          explain: "Three times as many pencils at the same unit price costs three times as much. That constant unit price is what makes the relationship proportional."
        },
        {
          type: "order",
          q: "Order the steps to solve a proportion by cross-multiplying.",
          items: ["Write the two equal ratios as fractions", "Multiply each numerator by the opposite denominator", "Set the two products equal", "Divide to isolate the unknown"],
          explain: "For a/b = c/d, cross-multiplying gives ad = bc, which is a one-step equation."
        },
        {
          type: "match",
          q: "Match each situation to the right idea.",
          pairs: [
            ["3 cups flour to 2 cups sugar", "Ratio"],
            ["$12 per hour", "Unit rate"],
            ["1 inch on a map = 10 miles", "Scale"]
          ],
          explain: "All three compare quantities by division: a ratio compares two amounts, a rate has different units with a 'per', and a scale is a ratio between a drawing and reality."
        }
      ]
    },
    {
      id: "l8",
      title: "Scientific notation",
      intro: "A compact way to write very large and very small numbers, used everywhere from chemistry to astronomy.",
      questions: [
        {
          type: "mcq",
          q: "What is 4,500,000 in scientific notation?",
          choices: ["45 × 10⁵", "4.5 × 10⁵", "0.45 × 10⁷", "4.5 × 10⁶"],
          answer: 3,
          explain: "The first number must be at least 1 and less than 10, so 4.5. The decimal point moved 6 places left, so the power is 10⁶."
        },
        {
          type: "fill",
          q: "0.0007 = 7 × 10^____.",
          answer: "-4",
          accept: ["-4", "−4"],
          explain: "Small numbers get negative exponents: the decimal point moves 4 places right to reach 7, so 0.0007 = 7 × 10⁻⁴."
        },
        {
          type: "truefalse",
          q: "45 × 10⁵ is written in proper scientific notation.",
          answer: false,
          explain: "The coefficient must be at least 1 and less than 10. Written properly it is 4.5 × 10⁶."
        },
        {
          type: "mcq",
          q: "What is (2 × 10³) × (3 × 10⁴)?",
          choices: ["6 × 10¹²", "5 × 10⁷", "6 × 10⁷", "6 × 10⁰"],
          answer: 2,
          explain: "Multiply the coefficients (2 × 3 = 6) and add the exponents (3 + 4 = 7)."
        },
        {
          type: "order",
          q: "Order from smallest to largest.",
          items: ["3 × 10⁻²", "9 × 10⁻¹", "1.5 × 10⁰", "2 × 10³"],
          explain: "Compare the exponents first: 10⁻² < 10⁻¹ < 10⁰ < 10³. That's 0.03, 0.9, 1.5 and 2,000."
        },
        {
          type: "match",
          q: "Match each measurement to scientific notation.",
          pairs: [
            ["About 300,000,000 m/s (speed of light)", "3 × 10⁸"],
            ["About 0.000001 m (a micrometer)", "1 × 10⁻⁶"],
            ["About 8,000,000,000 (world population)", "8 × 10⁹"]
          ],
          explain: "Count the place values the decimal point moves: left for big numbers (positive exponent), right for small ones (negative exponent)."
        },
        {
          type: "truefalse",
          q: "8 × 10⁶ ÷ (2 × 10²) = 4 × 10⁴.",
          answer: true,
          explain: "Divide the coefficients (8 ÷ 2 = 4) and subtract the exponents (6 − 2 = 4)."
        }
      ]
    }
  ]
});
