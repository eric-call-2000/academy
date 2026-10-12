# High School Science — Curriculum (25 units)

Track design doc for the Academy platform. Written 2026-10-12. **Status: draft.**
Unit 1 is written and live; units 2–25 are outlined below and still to be written.

## Track manifest

Already added to `tracks.js`, right after Secondary Mathematics. Bump `count` as each unit
file lands.

```js
window.ACADEMY.defineTrack({ id: "science", prefix: "science", count: 1, title: "High School Science", icon: "🔬", color: "#9c36b5", blurb: "Biology, chemistry, physics and Earth & space — how the natural world works and how we know." });
```

- **id / prefix:** `science` (id === prefix)
- **Files:** `science-unit1.js` … `science-unit25.js`, flat at repo root
- **Color:** `#9c36b5` (deep purple) — unused by the existing tracks
- **Lesson ids:** `l1` … `l200`, contiguous, 8 per unit (unit N owns `l{8N-7}`…`l{8N}`)

## Shape

25 units × 8 lessons × 7 questions = **200 lessons / 1,400 questions**, same format as
the other deep tracks. Question-type rules are the same as `math-curriculum.md` (mix
types, no type more than twice per lesson, vary the `mcq` answer index, give `fill`
blanks generous `accept` lists — e.g. `"mitochondria"` and `"mitochondrion"`).

## One track or four?

A school usually teaches these as separate year-long courses. Here they are **one track
in four parts**, because the platform's tracks are 8–25 units and one unit per big topic
is the right grain for review, not for a full lab course. If a part grows past ~8 units
later, split it into its own track (`biology`, `chemistry`, …) and keep this one as the
survey.

## Who it's for

High school students (grades 9–12) and adults who want the science they skipped. Content
lines up with the NGSS high school performance expectations (Life Science, Physical
Science, Earth & Space Science, and Engineering Design), so it can back up a school
course, but it is not a replacement for labs.

## Tone and method

- **How we know, not just what.** Each unit names at least one experiment or observation
  behind its big idea (Mendel's peas, Rutherford's gold foil, Galileo's ramps, seafloor
  magnetic stripes).
- **Misconceptions on purpose.** Seasons are not caused by distance from the Sun; heavier
  objects don't fall faster (without air); plants get most of their mass from air, not
  soil; evolution doesn't have a goal. Each one gets a question and an `explain`.
- **Light math only.** Physics and chemistry use one-step formulas with friendly numbers
  (F = ma with m = 2 kg, a = 3 m/s²). Heavier math belongs in Secondary Mathematics.
- **Durable facts.** Teach mechanisms and well-settled numbers; avoid figures that change
  year to year.

---

# Part 1 — How Science Works (unit 1)

## Unit 1 — How Science Works 🔬 ✅ written
*The habits and tools shared by every science.*

1. What science is (and isn't)
2. Questions, hypotheses and predictions
3. Variables and controlled experiments
4. SI units and metric conversions
5. Accuracy, precision and significant figures
6. Data tables and graphs
7. Laws, theories and models
8. Claims, evidence, reasoning — and lab safety

**Anchors:** a scientific theory is a well-tested explanation, not a guess; a law describes,
a theory explains; one independent variable per experiment.

---

# Part 2 — Biology (units 2–9)

## Unit 2 — The Chemistry of Life 🧪
1. Atoms, elements and why carbon
2. Water's special properties
3. Carbohydrates
4. Lipids
5. Proteins and amino acids
6. Nucleic acids
7. Enzymes and activation energy
8. pH and homeostasis

## Unit 3 — Cells 🦠
1. Cell theory and its history
2. Prokaryotes vs eukaryotes
3. Organelles and their jobs
4. Plant vs animal cells
5. The cell membrane
6. Diffusion and osmosis
7. Active transport
8. Cell size and specialization

**Anchors:** viruses aren't cells; the mitochondrion makes ATP, it doesn't "make energy."

## Unit 4 — Energy in Living Things ☀️
1. ATP, the energy currency
2. Photosynthesis overview
3. Light reactions and the Calvin cycle
4. Cellular respiration overview
5. Glycolysis, Krebs cycle, electron transport
6. Fermentation
7. Comparing photosynthesis and respiration
8. Energy flow vs matter cycling

**Anchors:** a tree's mass comes mostly from CO₂ in the air; plants do respiration too.

## Unit 5 — Cell Division & Heredity 🧬
1. The cell cycle and mitosis
2. Meiosis and why it differs
3. Mendel's experiments
4. Dominant, recessive, genotype, phenotype
5. Punnett squares
6. Incomplete dominance, codominance, multiple alleles
7. Sex-linked traits and pedigrees
8. Cancer as cell-cycle control gone wrong

## Unit 6 — DNA & Gene Expression 🧾
1. Discovering DNA (Griffith, Avery, Franklin, Watson & Crick)
2. DNA structure and base pairing
3. Replication
4. Transcription
5. Translation and the genetic code
6. Mutations
7. Gene regulation
8. Biotechnology: PCR, CRISPR, and genetic engineering

## Unit 7 — Evolution 🐒
1. Darwin, Wallace and the voyage
2. Natural selection: variation, inheritance, selection, time
3. Evidence: fossils, anatomy, embryology
4. Evidence: DNA and molecular clocks
5. Adaptation and fitness
6. Speciation
7. Other mechanisms: drift, gene flow, sexual selection
8. Classification and phylogenetic trees

**Anchors:** individuals don't evolve, populations do; evolution has no goal.
(Cross-links: the Evolutionary Psychology and Evolutionary Game Theory tracks.)

## Unit 8 — Ecology 🌿
1. Levels of organization: organism to biosphere
2. Food chains, webs and trophic levels
3. The 10% rule and energy pyramids
4. Carbon, nitrogen and water cycles
5. Population growth and carrying capacity
6. Species interactions: predation, competition, symbiosis
7. Succession and biomes
8. Biodiversity and human impact

## Unit 9 — The Human Body 🫀
1. Levels of organization and homeostasis
2. Nervous system
3. Endocrine system
4. Circulatory and respiratory systems
5. Digestive and excretory systems
6. Immune system and vaccines
7. Muscular and skeletal systems
8. Reproduction and development

---

# Part 3 — Chemistry (units 10–14)

## Unit 10 — Matter & Atomic Structure ⚛️
1. States and properties of matter
2. Physical vs chemical changes
3. Mixtures, compounds and elements
4. Atomic models from Dalton to Bohr
5. Protons, neutrons, electrons
6. Isotopes and atomic mass
7. Electron configuration basics
8. Nuclear chemistry: radioactivity and half-life

**Anchors:** Rutherford's gold foil showed a tiny dense nucleus; atomic number = protons.

## Unit 11 — The Periodic Table & Bonding 🧲
1. How the table is organized
2. Groups and periods
3. Periodic trends: radius, electronegativity, ionization energy
4. Valence electrons and the octet rule
5. Ionic bonds
6. Covalent bonds and Lewis structures
7. Molecular shape and polarity
8. Intermolecular forces

## Unit 12 — Chemical Reactions & Stoichiometry ⚗️
1. Evidence of a chemical reaction
2. Writing and balancing equations
3. Conservation of mass
4. Types of reactions
5. The mole and Avogadro's number
6. Molar mass
7. Mole ratios and stoichiometry
8. Limiting reactant and percent yield

## Unit 13 — Gases, Solutions & Energy 💨
1. Kinetic molecular theory
2. Pressure and temperature (Kelvin)
3. Gas laws: Boyle, Charles, combined, ideal
4. Solutions, solutes and solvents
5. Concentration and molarity
6. Solubility and factors that affect it
7. Endothermic and exothermic reactions
8. Heat, specific heat and calorimetry

## Unit 14 — Acids, Bases, Rates & Equilibrium 🍋
1. Acids and bases defined
2. The pH scale
3. Neutralization and titration
4. Reaction rates and collision theory
5. Catalysts
6. Reversible reactions and equilibrium
7. Le Chatelier's principle
8. Chemistry in everyday life (batteries, ocean acidification, cooking)

---

# Part 4 — Physics (units 15–20)

## Unit 15 — Motion 🏃
1. Position, distance and displacement
2. Speed vs velocity
3. Acceleration
4. Motion graphs
5. Kinematic equations
6. Free fall
7. Vectors in motion
8. Projectile motion

**Anchors:** without air resistance, a bowling ball and a feather fall together.

## Unit 16 — Forces & Newton's Laws 🍎
1. What a force is; free-body diagrams
2. Newton's first law and inertia
3. Newton's second law, F = ma
4. Newton's third law
5. Weight vs mass
6. Friction
7. Circular motion
8. Universal gravitation

**Anchors:** no force is needed to keep something moving; action–reaction pairs act on different objects.

## Unit 17 — Energy, Work & Momentum ⚡
1. Work
2. Kinetic and potential energy
3. Conservation of energy
4. Power and efficiency
5. Simple machines
6. Momentum
7. Impulse and collisions
8. Conservation of momentum

## Unit 18 — Waves, Sound & Light 🌈
1. Wave types and properties
2. Wavelength, frequency, speed (v = fλ)
3. Sound and hearing
4. The Doppler effect
5. The electromagnetic spectrum
6. Reflection and refraction
7. Lenses, mirrors and color
8. Interference and diffraction

## Unit 19 — Electricity & Magnetism 🔌
1. Electric charge and static electricity
2. Electric fields and Coulomb's law
3. Current, voltage and resistance (Ohm's law)
4. Series and parallel circuits
5. Electric power and energy bills
6. Magnets and magnetic fields
7. Electromagnetism and motors
8. Induction and generators

## Unit 20 — Modern Physics 🌌
1. The photoelectric effect and photons
2. Wave–particle duality
3. The nucleus: strong force, fission and fusion
4. E = mc²
5. Special relativity: time dilation
6. Quantum ideas in technology (lasers, LEDs, semiconductors)
7. The Standard Model at a glance
8. Open questions: dark matter and dark energy

---

# Part 5 — Earth & Space Science (units 21–24)

## Unit 21 — Earth's Structure & Plate Tectonics 🌋
1. Earth's layers and how we know (seismic waves)
2. Continental drift (Wegener)
3. Seafloor spreading and magnetic stripes
4. Plate boundaries
5. Earthquakes
6. Volcanoes
7. Mountain building
8. Hazards and preparedness

## Unit 22 — Rocks, Erosion & Earth's History 🪨
1. Minerals
2. The rock cycle
3. Weathering and erosion
4. Soil
5. Relative dating and superposition
6. Radiometric dating
7. The geologic time scale
8. Mass extinctions

## Unit 23 — Weather, Climate & Earth's Systems 🌦️
1. Layers of the atmosphere
2. Heat transfer and global winds
3. Air masses, fronts and storms
4. Weather vs climate
5. The greenhouse effect
6. Evidence for climate change
7. Oceans and currents
8. Natural resources and sustainability

**Anchors:** seasons come from Earth's tilt, not its distance from the Sun.

## Unit 24 — Astronomy 🔭
1. The Earth–Moon–Sun system: phases, tides, eclipses
2. The solar system
3. Kepler's laws and orbits
4. Stars and the H-R diagram
5. The life cycle of stars
6. Galaxies
7. The Big Bang and its evidence
8. Exoplanets and the search for life

---

# Part 6 — Capstone (unit 25)

## Unit 25 — Science, Engineering & Society 🛠️
1. The engineering design process
2. Defining problems, criteria and constraints
3. Prototyping and testing
4. Evaluating sources and spotting pseudoscience
5. Reading a science news story
6. Risk, probability and decisions
7. Ethics in science (from Henrietta Lacks to CRISPR babies)
8. Careers in science and where to go next
