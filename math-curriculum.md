# Secondary Mathematics — Curriculum (25 units)

Track design doc for the Academy platform. Written 2026-10-12. **Status: draft.**
Unit 1 is written and live; units 2–25 are outlined below and still to be written.

## Track manifest

Already added to `tracks.js`, after the psychology/game-theory tracks under a new
"High school" heading. Bump `count` as each unit file lands.

```js
window.ACADEMY.defineTrack({ id: "math", prefix: "math", count: 1, title: "Secondary Mathematics", icon: "🧮", color: "#2f9e44", blurb: "High school math from the ground up — algebra, geometry, trig, statistics and a first look at calculus." });
```

- **id / prefix:** `math` (id === prefix)
- **Files:** `math-unit1.js` … `math-unit25.js`, flat at repo root
- **Color:** `#2f9e44` (forest green) — unused by the existing tracks
- **Lesson ids:** `l1` … `l200`, contiguous, 8 per unit (unit N owns `l{8N-7}`…`l{8N}`)

## Shape

25 units × 8 lessons × 7 questions = **200 lessons / 1,400 questions**, matching the
psychology-track and System Design format.

Question types per lesson (mix, don't repeat one type more than twice): `mcq` (4 choices,
`answer` index — vary the index), `truefalse`, `fill` (with `accept` array), `match`
(3 pairs), `order` (3–4 items).

**Fill answers in a math track need care.** The engine matches typed text exactly
(trimmed, case-insensitive). So every numeric `fill` lists its sensible spellings in
`accept`: `"0.5"`, `".5"`, `"1/2"`; `"-3"` and `"−3"`; `"x=4"` and `"4"`. Prefer blanks
whose answer is a single integer or a single word.

## Who it's for

A high school student (roughly grades 8–12), or an adult rebuilding the math they
missed. The order follows the usual US sequence — Algebra I → Geometry → Algebra II →
Precalculus — and lines up with the Common Core high school standards (Number &
Quantity, Algebra, Functions, Geometry, Statistics & Probability), so it can sit
alongside a school course. Part 5 is an on-ramp to calculus, not a calculus course.

## Tone and method

- **Why before how.** Every procedure gets one question on *why it works* (why you flip
  the inequality, why the quadratic formula has a ±). A student who only memorizes
  steps can't recover when they forget one.
- **Small, checkable numbers.** No calculators. Questions use numbers a student can work
  in their head or on scrap paper in under a minute.
- **Name the classic mistakes.** Each unit includes the errors teachers see every year
  (`(a+b)² = a²+b²`, dropping the negative, dividing by a variable that could be 0) as
  true/false or wrong-choice distractors, with an `explain` that says why it's wrong.
- **Real contexts, briefly.** Rates, interest, slopes of ramps, sports stats — one line
  of setup, not a word-problem essay.

---

# Part 1 — Foundations & Algebra I (units 1–8)

## Unit 1 — Number Sense & the Real Numbers 🔢 ✅ written
*The number system everything else is built on, and the arithmetic habits algebra assumes.*

1. The real number system (naturals, wholes, integers, rationals, irrationals)
2. Operations with integers and signs
3. Fractions, decimals and percents
4. Order of operations
5. Exponents and square roots
6. Absolute value and the number line
7. Ratios, rates and proportions
8. Scientific notation

**Anchors:** √2 and π are irrational, 0.333… is rational; a negative times a negative is
positive; PEMDAS ties (× and ÷, + and −) go left to right; |x| is distance from 0.

## Unit 2 — Expressions & Properties ✏️
*Variables as numbers you haven't met yet, and the rules that let you rearrange them.*

1. Variables, terms, coefficients and constants
2. Evaluating expressions
3. Commutative, associative and identity properties
4. The distributive property
5. Combining like terms
6. Writing expressions from words
7. Equivalent expressions
8. Common algebra mistakes (and why they're wrong)

**Anchors:** −(x − 3) = −x + 3; 3x and 3x² are not like terms; "5 less than a number" is n − 5.

## Unit 3 — Linear Equations & Inequalities ⚖️
*Solving as keeping a balance — do the same thing to both sides.*

1. What a solution is
2. One- and two-step equations
3. Multi-step equations and variables on both sides
4. Equations with no solution or infinitely many
5. Literal equations and rearranging formulas
6. Inequalities and the number line
7. Why multiplying by a negative flips the inequality
8. Compound and absolute-value inequalities

**Anchors:** 0 = 5 means no solution, 0 = 0 means all reals; solve d = rt for t.

## Unit 4 — Functions 🔁
*The single most important idea in high school math.*

1. Relations vs functions
2. Function notation f(x)
3. Domain and range
4. The vertical line test
5. Reading graphs of functions
6. Increasing, decreasing, max and min
7. Function families at a glance (linear, quadratic, exponential, absolute value)
8. Transformations: shifts, stretches and reflections

**Anchors:** f(x + 2) shifts left, not right; each input has exactly one output.

## Unit 5 — Linear Functions 📈
*Constant rate of change, and the three ways to write a line.*

1. Slope as rate of change
2. Slope from two points
3. Slope-intercept form y = mx + b
4. Point-slope and standard form
5. Parallel and perpendicular lines
6. Graphing lines and intercepts
7. Linear models from real data
8. Arithmetic sequences as linear functions

**Anchors:** perpendicular slopes multiply to −1; horizontal slope 0, vertical undefined.

## Unit 6 — Systems of Equations 🔀
*Two conditions at once — where the lines meet.*

1. What a system's solution means graphically
2. Solving by graphing
3. Substitution
4. Elimination
5. No solution and infinitely many solutions
6. Word problems with systems (mixtures, tickets, speeds)
7. Systems of linear inequalities
8. Intro to linear programming

**Anchors:** parallel lines → no solution; same line → infinitely many.

## Unit 7 — Exponents & Polynomials ✖️
*The exponent rules, and polynomials as the algebra of "sums of powers."*

1. Product, quotient and power rules
2. Zero and negative exponents
3. Rational exponents preview
4. Polynomial vocabulary: degree, leading coefficient, standard form
5. Adding and subtracting polynomials
6. Multiplying polynomials (distribution, FOIL as a special case)
7. Special products: (a+b)², (a−b)², (a+b)(a−b)
8. Dividing a polynomial by a monomial

**Anchors:** x⁰ = 1 for x ≠ 0; (a + b)² ≠ a² + b².

## Unit 8 — Factoring & Quadratics 🎯
*Undoing multiplication, and the first non-linear function students meet.*

1. Greatest common factor
2. Factoring x² + bx + c
3. Factoring ax² + bx + c
4. Difference of squares and perfect-square trinomials
5. The zero-product property
6. Completing the square
7. The quadratic formula and the discriminant
8. Graphs of quadratics: vertex, axis of symmetry, roots

**Anchors:** zero-product only works when one side is 0; b² − 4ac < 0 means no real roots.

---

# Part 2 — Geometry (units 9–14)

## Unit 9 — Reasoning & Proof 🧩
*How mathematicians know things, rather than just believing them.*

1. Inductive vs deductive reasoning
2. Conditional statements: if–then
3. Converse, inverse and contrapositive
4. Counterexamples
5. Undefined terms, definitions, postulates and theorems
6. Two-column proofs
7. Algebraic proofs
8. Paragraph and flow proofs

**Anchors:** a statement and its contrapositive are logically equivalent; its converse is not.

## Unit 10 — Lines, Angles & Transformations 📏
1. Points, lines, planes, segments and rays
2. Angle pairs: complementary, supplementary, vertical, linear pair
3. Parallel lines cut by a transversal
4. Translations
5. Reflections
6. Rotations
7. Dilations
8. Symmetry and compositions of transformations

**Anchors:** rigid motions preserve distance and angle; dilations preserve angle only.

## Unit 11 — Triangles & Congruence 🔺
1. Triangle angle sum and exterior angles
2. Classifying triangles
3. Congruence as rigid motion
4. SSS, SAS, ASA, AAS — and why not SSA
5. CPCTC
6. Isosceles and equilateral triangles
7. Medians, altitudes, bisectors and centers
8. The triangle inequality

## Unit 12 — Similarity & Right Triangles 📐
1. Similar figures and scale factor
2. AA, SAS and SSS similarity
3. Proportions in triangles
4. The Pythagorean theorem and its converse
5. Special right triangles (45-45-90, 30-60-90)
6. SOH-CAH-TOA
7. Solving right triangles
8. Angles of elevation and depression

**Anchors:** a scale factor k multiplies area by k² and volume by k³.

## Unit 13 — Circles ⭕
1. Parts of a circle
2. Circumference and arc length
3. Central and inscribed angles
4. Chords, secants and tangents
5. Area of a circle and sectors
6. Radian measure
7. Equation of a circle (x − h)² + (y − k)² = r²
8. Completing the square to find center and radius

## Unit 14 — Area, Volume & Coordinate Geometry 🧊
1. Area of polygons
2. Surface area of prisms and cylinders
3. Volume of prisms and cylinders
4. Pyramids, cones and spheres
5. Cross-sections and solids of revolution
6. Distance and midpoint formulas
7. Proving properties with coordinates
8. Density and modeling with geometry

---

# Part 3 — Algebra II (units 15–19)

## Unit 15 — Radicals & Complex Numbers √
1. Simplifying radicals
2. Operations with radicals and rationalizing denominators
3. Rational exponents
4. Solving radical equations (and extraneous solutions)
5. The imaginary unit i
6. Adding, subtracting and multiplying complex numbers
7. Complex conjugates and division
8. Complex solutions of quadratics

**Anchors:** i² = −1; squaring both sides can create extraneous solutions — always check.

## Unit 16 — Polynomial & Rational Functions 〰️
1. End behavior
2. Zeros and multiplicity
3. Polynomial long and synthetic division
4. Remainder and factor theorems
5. The fundamental theorem of algebra
6. Rational functions and asymptotes
7. Simplifying and operating on rational expressions
8. Solving rational equations

## Unit 17 — Exponential & Logarithmic Functions 📊
1. Exponential growth and decay
2. Compound interest and the number e
3. Inverse functions
4. Logarithms as inverse exponentials
5. Properties of logarithms
6. Solving exponential equations
7. Solving logarithmic equations
8. Modeling: half-life, population, pH, decibels

**Anchors:** log(a + b) ≠ log a + log b; log_b(x) asks "b to what power gives x?"

## Unit 18 — Sequences & Series 🔢
1. Sequence notation and recursive definitions
2. Arithmetic sequences
3. Geometric sequences
4. Sigma notation
5. Arithmetic series
6. Finite geometric series
7. Infinite geometric series and convergence
8. Mathematical induction (intro)

## Unit 19 — Probability & Counting 🎲
1. Sample spaces and basic probability
2. The fundamental counting principle
3. Permutations
4. Combinations
5. Independent and dependent events
6. Conditional probability
7. Two-way tables
8. Expected value and fair games

**Anchors:** P(A and B) = P(A)·P(B) only when independent; the gambler's fallacy.

---

# Part 4 — Trigonometry & Precalculus (units 20–22)

## Unit 20 — Trigonometric Functions 🌊
1. Angles in standard position, degrees and radians
2. The unit circle
3. Sine, cosine and tangent of any angle
4. Reference angles and signs by quadrant
5. Graphs of sine and cosine
6. Amplitude, period, phase shift and midline
7. Other trig graphs (tangent, reciprocals)
8. Modeling periodic phenomena (tides, Ferris wheels)

## Unit 21 — Trig Identities & Equations 🔧
1. The Pythagorean identity
2. Reciprocal and quotient identities
3. Verifying identities
4. Sum and difference formulas
5. Double-angle formulas
6. Inverse trig functions
7. Solving trig equations
8. Law of Sines and Law of Cosines

## Unit 22 — Vectors, Matrices & Parametrics ➡️
1. Vectors: magnitude and direction
2. Vector addition and scalar multiplication
3. Matrices and matrix operations
4. Matrix multiplication
5. Determinants and inverses
6. Solving systems with matrices
7. Parametric equations
8. Polar coordinates

---

# Part 5 — Statistics & a First Look at Calculus (units 23–25)

## Unit 23 — Statistics & Data 📉
1. Types of data and sampling
2. Bias in sampling and survey design
3. Center: mean, median and mode
4. Spread: range, IQR and standard deviation
5. Distributions, shape and outliers
6. The normal distribution and z-scores
7. Scatter plots, correlation and lines of best fit
8. Correlation is not causation; experiments vs observational studies

## Unit 24 — Limits & Rates of Change 🚀
1. Average rate of change
2. The idea of a limit
3. Limits from tables and graphs
4. Continuity
5. Instantaneous rate of change
6. The tangent line
7. The derivative as a function
8. Basic derivative rules (power rule)

## Unit 25 — Capstone: Math as Modeling 🏁
1. The modeling cycle
2. Choosing a function family from data
3. Optimization problems
4. Area under a curve (the idea of the integral)
5. Financial math: loans, interest and budgets
6. Probability in real decisions
7. Estimation and Fermi problems
8. Where math goes next (calculus, linear algebra, statistics, discrete math)
