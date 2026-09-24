// Grade 8 Science lesson seeds: explanation and worked examples precede practice.
// This module intentionally contains no independent assessment questions.

const lessonBlueprints = [
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Observations, Inferences, and Scientific Claims",
    "objective": "Separate directly observed evidence from an inference and write a claim that matches the evidence.",
    "vocabulary": [
      "observation",
      "inference",
      "claim"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Testable Questions and Measurable Outcomes",
    "objective": "Turn a broad curiosity into a testable question with a measurable outcome.",
    "vocabulary": [
      "testable question",
      "outcome",
      "measurement"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Independent, Dependent, and Controlled Variables",
    "objective": "Identify the variable changed, the response measured, and conditions held constant in a fair test.",
    "vocabulary": [
      "independent variable",
      "dependent variable",
      "control variable"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Fair Tests and Comparison Groups",
    "objective": "Design a comparison that changes one meaningful factor while keeping other conditions alike.",
    "vocabulary": [
      "fair test",
      "comparison group",
      "constant"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Tables, Graphs, and Evidence Patterns",
    "objective": "Choose a data display and describe patterns without claiming more than the evidence shows.",
    "vocabulary": [
      "data table",
      "trend",
      "scale"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Repeated Trials and Measurement Precision",
    "objective": "Explain why repeated trials and careful measurement improve the trustworthiness of data.",
    "vocabulary": [
      "trial",
      "precision",
      "variation"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Particle Motion in Solids, Liquids, and Gases",
    "objective": "Use particle motion and spacing to explain the properties of solids, liquids, and gases.",
    "vocabulary": [
      "particle model",
      "vibration",
      "compression"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Phase Changes and Thermal Energy",
    "objective": "Explain melting, freezing, evaporation, condensation, and sublimation as energy-driven particle changes.",
    "vocabulary": [
      "phase change",
      "thermal energy",
      "evaporation"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Conservation of Mass in Closed Systems",
    "objective": "Use a closed-system model to explain why total mass is conserved during ordinary changes.",
    "vocabulary": [
      "closed system",
      "conservation of mass",
      "reactant"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Physical Changes and Chemical Changes",
    "objective": "Distinguish a change in form or state from a change that produces new substances.",
    "vocabulary": [
      "physical change",
      "chemical change",
      "property"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Atoms, Elements, Compounds, and Molecules",
    "objective": "Classify matter as elements, compounds, molecules, or mixtures by its particles.",
    "vocabulary": [
      "atom",
      "element",
      "compound"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Mixtures, Solutions, and Concentration",
    "objective": "Describe how a solution forms and compare dilute and concentrated mixtures.",
    "vocabulary": [
      "solution",
      "solute",
      "concentration"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Separating Mixtures by Physical Properties",
    "objective": "Choose a separation method by matching it to a physical-property difference.",
    "vocabulary": [
      "filtration",
      "evaporation",
      "magnetism"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Cell Structures and Specialized Functions",
    "objective": "Relate major cell structures to the jobs they perform in plant and animal cells.",
    "vocabulary": [
      "cell membrane",
      "chloroplast",
      "nucleus"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Levels of Organization in Living Systems",
    "objective": "Trace how cells, tissues, organs, organ systems, and organisms work together.",
    "vocabulary": [
      "tissue",
      "organ",
      "organ system"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Photosynthesis Transfers Matter and Energy",
    "objective": "Model how plants use light energy to rearrange carbon dioxide and water into food and oxygen.",
    "vocabulary": [
      "photosynthesis",
      "glucose",
      "carbon dioxide"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Cellular Respiration Releases Usable Energy",
    "objective": "Explain how cells release usable energy from food with oxygen and produce carbon dioxide and water.",
    "vocabulary": [
      "cellular respiration",
      "oxygen",
      "ATP"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Food Webs and Energy Pyramids",
    "objective": "Use feeding relationships to track matter and decreasing available energy through an ecosystem.",
    "vocabulary": [
      "producer",
      "consumer",
      "energy pyramid"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Population Changes and Limiting Factors",
    "objective": "Predict how resources, predators, disease, and competition can change a population.",
    "vocabulary": [
      "population",
      "limiting factor",
      "carrying capacity"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Adaptations, Selection, and Survival",
    "objective": "Explain how inherited traits can affect survival and reproduction in a changing environment.",
    "vocabulary": [
      "adaptation",
      "inherited trait",
      "natural selection"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Earth System Interactions",
    "objective": "Describe how the geosphere, hydrosphere, atmosphere, and biosphere affect one another.",
    "vocabulary": [
      "geosphere",
      "hydrosphere",
      "biosphere"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Water Cycle Reservoirs and Pathways",
    "objective": "Trace water as it moves among reservoirs through phase changes, runoff, infiltration, and transpiration.",
    "vocabulary": [
      "reservoir",
      "infiltration",
      "transpiration"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Weather Variables and Air Masses",
    "objective": "Use temperature, air pressure, humidity, and air-mass properties to describe daily weather.",
    "vocabulary": [
      "air mass",
      "humidity",
      "air pressure"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Rock Cycle Transformations",
    "objective": "Explain how heat, pressure, melting, cooling, weathering, and compaction transform rock material.",
    "vocabulary": [
      "magma",
      "sediment",
      "metamorphism"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Plate Boundaries and Surface Change",
    "objective": "Relate plate movement to earthquakes, volcanoes, mountain building, and seafloor features.",
    "vocabulary": [
      "tectonic plate",
      "boundary",
      "convection current"
    ]
  },
  {
    "unit": "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth",
    "tag": "science-practice",
    "initialReview": "Grade 6/7 review: use observations, simple models, and recorded data to support a claim.",
    "title": "Sun, Moon, and Seasonal Patterns",
    "objective": "Use the Earth-Sun-Moon system to explain daily, monthly, and yearly sky patterns.",
    "vocabulary": [
      "rotation",
      "revolution",
      "axis tilt"
    ]
  },
  {
    "unit": "Grade 8 Measurement and Scientific Data",
    "tag": "measurement-data",
    "initialReview": null,
    "title": "SI Units and Measurement Tools",
    "objective": "Select an appropriate SI unit and tool for measuring length, mass, volume, time, and temperature.",
    "vocabulary": [
      "SI unit",
      "graduated cylinder",
      "balance"
    ]
  },
  {
    "unit": "Grade 8 Measurement and Scientific Data",
    "tag": "measurement-data",
    "initialReview": null,
    "title": "Metric Prefixes and Unit Conversion",
    "objective": "Convert measurements within the metric system by reasoning about powers of ten and units.",
    "vocabulary": [
      "metric prefix",
      "conversion factor",
      "kilogram"
    ]
  },
  {
    "unit": "Grade 8 Measurement and Scientific Data",
    "tag": "measurement-data",
    "initialReview": null,
    "title": "Significant Digits and Reported Measurements",
    "objective": "Report a measurement with digits justified by the markings and estimate of the instrument.",
    "vocabulary": [
      "significant digit",
      "estimated digit",
      "resolution"
    ]
  },
  {
    "unit": "Grade 8 Measurement and Scientific Data",
    "tag": "measurement-data",
    "initialReview": null,
    "title": "Accuracy, Precision, and Calibration",
    "objective": "Distinguish closeness to a target from repeatability and explain how calibration affects both.",
    "vocabulary": [
      "accuracy",
      "precision",
      "calibration"
    ]
  },
  {
    "unit": "Grade 8 Measurement and Scientific Data",
    "tag": "measurement-data",
    "initialReview": null,
    "title": "Density as a Characteristic Property",
    "objective": "Calculate density from mass and volume and use it to identify or compare materials.",
    "vocabulary": [
      "density",
      "mass",
      "volume"
    ]
  },
  {
    "unit": "Grade 8 Measurement and Scientific Data",
    "tag": "measurement-data",
    "initialReview": null,
    "title": "Mass, Volume, and Floating Behavior",
    "objective": "Use relative density to predict whether an object sinks, floats, or remains suspended in a fluid.",
    "vocabulary": [
      "buoyancy",
      "fluid",
      "relative density"
    ]
  },
  {
    "unit": "Grade 8 Measurement and Scientific Data",
    "tag": "measurement-data",
    "initialReview": null,
    "title": "Rates and Unit Rates in Science",
    "objective": "Calculate a scientific rate and interpret what its units say about a changing quantity.",
    "vocabulary": [
      "rate",
      "unit rate",
      "ratio"
    ]
  },
  {
    "unit": "Grade 8 Measurement and Scientific Data",
    "tag": "measurement-data",
    "initialReview": null,
    "title": "Linear Graphs and Slope",
    "objective": "Determine how the slope of a linear graph represents a rate of change in a scientific relationship.",
    "vocabulary": [
      "slope",
      "linear relationship",
      "axis"
    ]
  },
  {
    "unit": "Grade 8 Measurement and Scientific Data",
    "tag": "measurement-data",
    "initialReview": null,
    "title": "Nonlinear Graph Patterns",
    "objective": "Describe curved, cyclic, and leveling-off graph patterns without forcing them into a straight-line rule.",
    "vocabulary": [
      "nonlinear",
      "cycle",
      "plateau"
    ]
  },
  {
    "unit": "Grade 8 Measurement and Scientific Data",
    "tag": "measurement-data",
    "initialReview": null,
    "title": "Center, Spread, and Outliers",
    "objective": "Use mean, range, and outliers to describe a set of repeated scientific measurements.",
    "vocabulary": [
      "mean",
      "range",
      "outlier"
    ]
  },
  {
    "unit": "Grade 8 Atomic Structure and Materials",
    "tag": "matter-structure",
    "initialReview": null,
    "title": "Atomic Models and Nuclear Structure",
    "objective": "Use protons, neutrons, and electrons to describe the structure and identity of an atom.",
    "vocabulary": [
      "proton",
      "neutron",
      "electron"
    ]
  },
  {
    "unit": "Grade 8 Atomic Structure and Materials",
    "tag": "matter-structure",
    "initialReview": null,
    "title": "Atomic Number and Element Identity",
    "objective": "Use atomic number to determine an element’s identity and number of protons.",
    "vocabulary": [
      "atomic number",
      "element symbol",
      "nucleus"
    ]
  },
  {
    "unit": "Grade 8 Atomic Structure and Materials",
    "tag": "matter-structure",
    "initialReview": null,
    "title": "Isotopes and Average Atomic Mass",
    "objective": "Explain how isotopes of one element differ and why periodic-table masses are averages.",
    "vocabulary": [
      "isotope",
      "mass number",
      "average atomic mass"
    ]
  },
  {
    "unit": "Grade 8 Atomic Structure and Materials",
    "tag": "matter-structure",
    "initialReview": null,
    "title": "Periodic Table Families and Periods",
    "objective": "Use rows and columns of the periodic table to compare broad patterns in element properties.",
    "vocabulary": [
      "period",
      "family",
      "periodic table"
    ]
  },
  {
    "unit": "Grade 8 Atomic Structure and Materials",
    "tag": "matter-structure",
    "initialReview": null,
    "title": "Metals, Nonmetals, and Metalloids",
    "objective": "Connect an element’s location on the periodic table with common material properties.",
    "vocabulary": [
      "metal",
      "nonmetal",
      "metalloid"
    ]
  },
  {
    "unit": "Grade 8 Atomic Structure and Materials",
    "tag": "matter-structure",
    "initialReview": null,
    "title": "Valence Electrons and Reactivity",
    "objective": "Use outer electrons to explain broad patterns in how atoms interact and form stable arrangements.",
    "vocabulary": [
      "valence electron",
      "reactivity",
      "stable configuration"
    ]
  },
  {
    "unit": "Grade 8 Atomic Structure and Materials",
    "tag": "matter-structure",
    "initialReview": null,
    "title": "Ions and Electrical Charge",
    "objective": "Model how atoms become ions by gaining or losing electrons while proton number remains fixed.",
    "vocabulary": [
      "ion",
      "cation",
      "anion"
    ]
  },
  {
    "unit": "Grade 8 Atomic Structure and Materials",
    "tag": "matter-structure",
    "initialReview": null,
    "title": "Ionic Bonding and Crystal Lattices",
    "objective": "Explain ionic bonding as attraction between oppositely charged ions arranged in a repeating structure.",
    "vocabulary": [
      "ionic bond",
      "crystal lattice",
      "electrostatic attraction"
    ]
  },
  {
    "unit": "Grade 8 Atomic Structure and Materials",
    "tag": "matter-structure",
    "initialReview": null,
    "title": "Covalent Bonding and Molecules",
    "objective": "Model covalent bonds as shared electrons that hold atoms together in molecules.",
    "vocabulary": [
      "covalent bond",
      "molecule",
      "shared electron"
    ]
  },
  {
    "unit": "Grade 8 Atomic Structure and Materials",
    "tag": "matter-structure",
    "initialReview": null,
    "title": "Chemical Formulas and Subscripts",
    "objective": "Interpret a chemical formula as a count and ratio of atoms in one substance.",
    "vocabulary": [
      "chemical formula",
      "subscript",
      "coefficient"
    ]
  },
  {
    "unit": "Grade 8 Atomic Structure and Materials",
    "tag": "matter-structure",
    "initialReview": null,
    "title": "Bonding, Structure, and Material Properties",
    "objective": "Relate particle arrangement and bonding to conductivity, melting point, hardness, and flexibility.",
    "vocabulary": [
      "conductivity",
      "melting point",
      "structure-property relationship"
    ]
  },
  {
    "unit": "Grade 8 Atomic Structure and Materials",
    "tag": "matter-structure",
    "initialReview": null,
    "title": "Acids, Bases, and Ions in Solution",
    "objective": "Explain why acids and bases conduct in water and how their ions differ.",
    "vocabulary": [
      "acid",
      "base",
      "aqueous ion"
    ]
  },
  {
    "unit": "Grade 8 Chemical Reactions",
    "tag": "chemical-systems",
    "initialReview": null,
    "title": "Evidence of a Chemical Reaction",
    "objective": "Evaluate observations such as gas, precipitate, temperature change, and color change for evidence of new substances.",
    "vocabulary": [
      "reactant",
      "product",
      "chemical reaction"
    ]
  },
  {
    "unit": "Grade 8 Chemical Reactions",
    "tag": "chemical-systems",
    "initialReview": null,
    "title": "Atoms Rearrange in Reactions",
    "objective": "Use particle models to show that reactions rearrange atoms instead of creating or destroying them.",
    "vocabulary": [
      "rearrangement",
      "chemical bond",
      "particle model"
    ]
  },
  {
    "unit": "Grade 8 Chemical Reactions",
    "tag": "chemical-systems",
    "initialReview": null,
    "title": "Word Equations for Chemical Change",
    "objective": "Write a word equation that names the reactants and products of a chemical process.",
    "vocabulary": [
      "word equation",
      "reactant",
      "product"
    ]
  },
  {
    "unit": "Grade 8 Chemical Reactions",
    "tag": "chemical-systems",
    "initialReview": null,
    "title": "Symbols and Formulas in Chemical Equations",
    "objective": "Translate substance names into correct formulas in a symbolic chemical equation.",
    "vocabulary": [
      "chemical equation",
      "formula",
      "symbol"
    ]
  },
  {
    "unit": "Grade 8 Chemical Reactions",
    "tag": "chemical-systems",
    "initialReview": null,
    "title": "Balancing Equations by Atom Count",
    "objective": "Balance a chemical equation by changing coefficients rather than subscripts.",
    "vocabulary": [
      "coefficient",
      "balanced equation",
      "conservation"
    ]
  },
  {
    "unit": "Grade 8 Chemical Reactions",
    "tag": "chemical-systems",
    "initialReview": null,
    "title": "Exothermic and Endothermic Processes",
    "objective": "Distinguish processes that release thermal energy from those that absorb it.",
    "vocabulary": [
      "exothermic",
      "endothermic",
      "system"
    ]
  },
  {
    "unit": "Grade 8 Chemical Reactions",
    "tag": "chemical-systems",
    "initialReview": null,
    "title": "Energy Changes and Bond Changes",
    "objective": "Connect energy absorbed to break bonds and energy released when new bonds form.",
    "vocabulary": [
      "activation energy",
      "bond energy",
      "energy transfer"
    ]
  },
  {
    "unit": "Grade 8 Chemical Reactions",
    "tag": "chemical-systems",
    "initialReview": null,
    "title": "Reaction Rate and Particle Collisions",
    "objective": "Explain how temperature, concentration, surface area, and collisions affect reaction rate.",
    "vocabulary": [
      "reaction rate",
      "collision theory",
      "surface area"
    ]
  },
  {
    "unit": "Grade 8 Chemical Reactions",
    "tag": "chemical-systems",
    "initialReview": null,
    "title": "Catalysts and Reaction Pathways",
    "objective": "Explain how a catalyst changes a reaction pathway without being used up as a reactant.",
    "vocabulary": [
      "catalyst",
      "activation energy",
      "pathway"
    ]
  },
  {
    "unit": "Grade 8 Chemical Reactions",
    "tag": "chemical-systems",
    "initialReview": null,
    "title": "Acids, Bases, and Indicators",
    "objective": "Use indicators and pH evidence to classify an aqueous substance as acidic, basic, or neutral.",
    "vocabulary": [
      "indicator",
      "pH",
      "neutral"
    ]
  },
  {
    "unit": "Grade 8 Chemical Reactions",
    "tag": "chemical-systems",
    "initialReview": null,
    "title": "Neutralization and Salt Formation",
    "objective": "Model how acid-base reactions can form water and an ionic compound.",
    "vocabulary": [
      "neutralization",
      "salt",
      "hydroxide ion"
    ]
  },
  {
    "unit": "Grade 8 Chemical Reactions",
    "tag": "chemical-systems",
    "initialReview": null,
    "title": "Gas Formation and Precipitation",
    "objective": "Identify gas production and precipitate formation as signs of reactions in solutions.",
    "vocabulary": [
      "precipitate",
      "insoluble",
      "gas product"
    ]
  },
  {
    "unit": "Grade 8 Chemical Reactions",
    "tag": "chemical-systems",
    "initialReview": null,
    "title": "Oxidation, Reduction, and Corrosion",
    "objective": "Explain corrosion as an oxidation process and identify conditions that can speed or slow it.",
    "vocabulary": [
      "oxidation",
      "reduction",
      "corrosion"
    ]
  },
  {
    "unit": "Grade 8 Chemical Reactions",
    "tag": "chemical-systems",
    "initialReview": null,
    "title": "Mass Conservation in Chemical Systems",
    "objective": "Use a system boundary to explain why measured mass can appear to change when gases enter or leave.",
    "vocabulary": [
      "system boundary",
      "conservation",
      "gas"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Position, Reference Point, and Displacement",
    "objective": "Describe an object’s location relative to a chosen reference point and distinguish distance from displacement.",
    "vocabulary": [
      "reference point",
      "position",
      "displacement"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Speed from Distance and Time",
    "objective": "Calculate average speed and interpret it as distance traveled per unit time.",
    "vocabulary": [
      "speed",
      "distance",
      "time"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Velocity Includes Direction",
    "objective": "Represent velocity with both magnitude and direction and compare it with speed.",
    "vocabulary": [
      "velocity",
      "direction",
      "vector"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Acceleration as a Change in Velocity",
    "objective": "Determine whether an object accelerates when its speed or direction changes.",
    "vocabulary": [
      "acceleration",
      "velocity change",
      "motion"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Distance-Time Graphs",
    "objective": "Read a distance-time graph to compare motion, rest, and average speed.",
    "vocabulary": [
      "distance-time graph",
      "interval",
      "constant speed"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Velocity-Time Graphs",
    "objective": "Use a velocity-time graph to identify acceleration, constant velocity, and direction changes.",
    "vocabulary": [
      "velocity-time graph",
      "negative velocity",
      "acceleration"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Scalars and Vectors in Motion",
    "objective": "Classify motion quantities as scalars or vectors and use direction consistently in a model.",
    "vocabulary": [
      "scalar",
      "vector",
      "magnitude"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Newton’s First Law and Inertia",
    "objective": "Use inertia to explain why an object maintains its state of motion unless a net force acts.",
    "vocabulary": [
      "inertia",
      "net force",
      "Newton’s first law"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Balanced and Unbalanced Forces",
    "objective": "Determine net force and predict whether forces cause no acceleration or a change in motion.",
    "vocabulary": [
      "balanced force",
      "unbalanced force",
      "net force"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Free-Body Diagrams",
    "objective": "Draw and interpret a free-body diagram showing all forces acting on one object.",
    "vocabulary": [
      "free-body diagram",
      "normal force",
      "force arrow"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Newton’s Second Law Calculations",
    "objective": "Use F = ma to relate net force, mass, and acceleration in one-dimensional motion.",
    "vocabulary": [
      "Newton",
      "mass",
      "acceleration"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Mass and Resistance to Acceleration",
    "objective": "Compare how objects of different mass respond to the same net force.",
    "vocabulary": [
      "mass",
      "resistance",
      "proportional relationship"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Friction and Surface Interactions",
    "objective": "Explain how friction depends on surfaces and normal force and can oppose relative motion.",
    "vocabulary": [
      "friction",
      "surface",
      "contact force"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Newton’s Third Law Force Pairs",
    "objective": "Identify equal and opposite forces that act on two different interacting objects.",
    "vocabulary": [
      "action-reaction pair",
      "interaction",
      "opposite force"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Gravitational Force and Field Strength",
    "objective": "Explain weight as the gravitational force produced by a field acting on mass.",
    "vocabulary": [
      "gravity",
      "field strength",
      "weight"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Mass, Weight, and Changing Locations",
    "objective": "Distinguish constant mass from weight that changes with gravitational field strength.",
    "vocabulary": [
      "mass",
      "weight",
      "gravitational field"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Air Resistance and Terminal Velocity",
    "objective": "Explain terminal velocity as the condition where air resistance balances weight during a fall.",
    "vocabulary": [
      "air resistance",
      "terminal velocity",
      "drag"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Momentum and Collision Outcomes",
    "objective": "Use momentum as mass times velocity to compare moving objects and reason about collisions.",
    "vocabulary": [
      "momentum",
      "collision",
      "conservation"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Impulse, Stopping Time, and Safety",
    "objective": "Relate a longer stopping time to a smaller force for the same change in momentum.",
    "vocabulary": [
      "impulse",
      "stopping time",
      "safety design"
    ]
  },
  {
    "unit": "Grade 8 Forces and Motion",
    "tag": "forces-motion",
    "initialReview": null,
    "title": "Forces in Engineered Safety Systems",
    "objective": "Use force and motion evidence to explain the design of helmets, crumple zones, and restraints.",
    "vocabulary": [
      "energy absorption",
      "restraint",
      "impact"
    ]
  },
  {
    "unit": "Grade 8 Energy, Thermal Systems, and Waves",
    "tag": "energy-waves",
    "initialReview": null,
    "title": "Kinetic Energy and Motion",
    "objective": "Relate kinetic energy to an object’s mass and speed and compare changes qualitatively.",
    "vocabulary": [
      "kinetic energy",
      "motion",
      "energy transfer"
    ]
  },
  {
    "unit": "Grade 8 Energy, Thermal Systems, and Waves",
    "tag": "energy-waves",
    "initialReview": null,
    "title": "Gravitational Potential Energy",
    "objective": "Explain how position in a gravitational field changes stored energy in an object-Earth system.",
    "vocabulary": [
      "gravitational potential energy",
      "height",
      "system"
    ]
  },
  {
    "unit": "Grade 8 Energy, Thermal Systems, and Waves",
    "tag": "energy-waves",
    "initialReview": null,
    "title": "Energy Conservation in Closed Models",
    "objective": "Trace energy transfers and transformations while keeping total energy accounted for in a model.",
    "vocabulary": [
      "energy conservation",
      "transfer",
      "transformation"
    ]
  },
  {
    "unit": "Grade 8 Energy, Thermal Systems, and Waves",
    "tag": "energy-waves",
    "initialReview": null,
    "title": "Work as Force Through Distance",
    "objective": "Determine when a force does work on an object and connect work to energy change.",
    "vocabulary": [
      "work",
      "force",
      "displacement"
    ]
  },
  {
    "unit": "Grade 8 Energy, Thermal Systems, and Waves",
    "tag": "energy-waves",
    "initialReview": null,
    "title": "Power and Rate of Energy Transfer",
    "objective": "Compare the rate at which machines transfer energy using the concept of power.",
    "vocabulary": [
      "power",
      "watt",
      "rate"
    ]
  },
  {
    "unit": "Grade 8 Energy, Thermal Systems, and Waves",
    "tag": "energy-waves",
    "initialReview": null,
    "title": "Thermal Energy and Particle Motion",
    "objective": "Relate thermal energy to the collective motion and arrangement of particles.",
    "vocabulary": [
      "thermal energy",
      "temperature",
      "particle motion"
    ]
  },
  {
    "unit": "Grade 8 Energy, Thermal Systems, and Waves",
    "tag": "energy-waves",
    "initialReview": null,
    "title": "Temperature Versus Heat",
    "objective": "Distinguish temperature from thermal energy transferred because of a temperature difference.",
    "vocabulary": [
      "temperature",
      "heat",
      "thermal equilibrium"
    ]
  },
  {
    "unit": "Grade 8 Energy, Thermal Systems, and Waves",
    "tag": "energy-waves",
    "initialReview": null,
    "title": "Conduction in Materials",
    "objective": "Explain conduction through particle collisions and compare conductors with insulators.",
    "vocabulary": [
      "conduction",
      "conductor",
      "insulator"
    ]
  },
  {
    "unit": "Grade 8 Energy, Thermal Systems, and Waves",
    "tag": "energy-waves",
    "initialReview": null,
    "title": "Convection in Fluids",
    "objective": "Model convection as density-driven circulation in liquids and gases.",
    "vocabulary": [
      "convection",
      "fluid",
      "density current"
    ]
  },
  {
    "unit": "Grade 8 Energy, Thermal Systems, and Waves",
    "tag": "energy-waves",
    "initialReview": null,
    "title": "Radiation and Electromagnetic Transfer",
    "objective": "Explain how radiation transfers energy through electromagnetic waves without a material medium.",
    "vocabulary": [
      "radiation",
      "electromagnetic wave",
      "vacuum"
    ]
  },
  {
    "unit": "Grade 8 Energy, Thermal Systems, and Waves",
    "tag": "energy-waves",
    "initialReview": null,
    "title": "Specific Heat and Temperature Change",
    "objective": "Use specific heat qualitatively to explain why equal heating can cause different temperature changes.",
    "vocabulary": [
      "specific heat",
      "temperature change",
      "thermal mass"
    ]
  },
  {
    "unit": "Grade 8 Energy, Thermal Systems, and Waves",
    "tag": "energy-waves",
    "initialReview": null,
    "title": "Energy Changes During Phase Changes",
    "objective": "Explain why temperature can remain steady while energy changes particle arrangement during a phase change.",
    "vocabulary": [
      "latent heat",
      "melting point",
      "particle spacing"
    ]
  },
  {
    "unit": "Grade 8 Energy, Thermal Systems, and Waves",
    "tag": "energy-waves",
    "initialReview": null,
    "title": "Wave Amplitude, Wavelength, and Frequency",
    "objective": "Identify amplitude, wavelength, and frequency on a wave model and relate them to wave behavior.",
    "vocabulary": [
      "amplitude",
      "wavelength",
      "frequency"
    ]
  },
  {
    "unit": "Grade 8 Energy, Thermal Systems, and Waves",
    "tag": "energy-waves",
    "initialReview": null,
    "title": "Wave Speed and Wave Relationships",
    "objective": "Use wave speed as the product of frequency and wavelength and reason about proportional changes.",
    "vocabulary": [
      "wave speed",
      "medium",
      "wave equation"
    ]
  },
  {
    "unit": "Grade 8 Energy, Thermal Systems, and Waves",
    "tag": "energy-waves",
    "initialReview": null,
    "title": "Sound as a Mechanical Wave",
    "objective": "Explain how vibrating matter produces sound and how frequency and amplitude affect pitch and loudness.",
    "vocabulary": [
      "sound wave",
      "pitch",
      "loudness"
    ]
  },
  {
    "unit": "Grade 8 Energy, Thermal Systems, and Waves",
    "tag": "energy-waves",
    "initialReview": null,
    "title": "Electromagnetic Spectrum Patterns",
    "objective": "Order major electromagnetic waves by wavelength, frequency, and common uses or risks.",
    "vocabulary": [
      "electromagnetic spectrum",
      "infrared",
      "ultraviolet"
    ]
  },
  {
    "unit": "Grade 8 Energy, Thermal Systems, and Waves",
    "tag": "energy-waves",
    "initialReview": null,
    "title": "Reflection, Refraction, and Transmission",
    "objective": "Predict how waves behave at a boundary using reflection, refraction, and transmission.",
    "vocabulary": [
      "reflection",
      "refraction",
      "transmission"
    ]
  },
  {
    "unit": "Grade 8 Energy, Thermal Systems, and Waves",
    "tag": "energy-waves",
    "initialReview": null,
    "title": "Wave Interference and Information Transfer",
    "objective": "Explain constructive and destructive interference and how waves can carry information.",
    "vocabulary": [
      "interference",
      "constructive",
      "signal"
    ]
  },
  {
    "unit": "Grade 8 Electricity and Magnetism",
    "tag": "electromagnetism",
    "initialReview": null,
    "title": "Electric Charge and Particle Interactions",
    "objective": "Use electron transfer and electric forces to explain attraction and repulsion between charged objects.",
    "vocabulary": [
      "electric charge",
      "electron",
      "repulsion"
    ]
  },
  {
    "unit": "Grade 8 Electricity and Magnetism",
    "tag": "electromagnetism",
    "initialReview": null,
    "title": "Static Electricity, Induction, and Grounding",
    "objective": "Compare charging by friction, induction, and grounding using electron movement.",
    "vocabulary": [
      "static electricity",
      "induction",
      "grounding"
    ]
  },
  {
    "unit": "Grade 8 Electricity and Magnetism",
    "tag": "electromagnetism",
    "initialReview": null,
    "title": "Electric Current in a Complete Circuit",
    "objective": "Explain current as moving charge that requires a continuous conducting path.",
    "vocabulary": [
      "electric current",
      "circuit",
      "conductor"
    ]
  },
  {
    "unit": "Grade 8 Electricity and Magnetism",
    "tag": "electromagnetism",
    "initialReview": null,
    "title": "Voltage and Electric Potential Difference",
    "objective": "Describe voltage as energy difference per charge that can drive current in a circuit.",
    "vocabulary": [
      "voltage",
      "potential difference",
      "energy per charge"
    ]
  },
  {
    "unit": "Grade 8 Electricity and Magnetism",
    "tag": "electromagnetism",
    "initialReview": null,
    "title": "Resistance and Material Properties",
    "objective": "Explain how material, length, thickness, and temperature can affect electrical resistance.",
    "vocabulary": [
      "resistance",
      "resistor",
      "conductivity"
    ]
  },
  {
    "unit": "Grade 8 Electricity and Magnetism",
    "tag": "electromagnetism",
    "initialReview": null,
    "title": "Ohm’s Law Relationships",
    "objective": "Use V = IR to calculate and interpret relationships among voltage, current, and resistance.",
    "vocabulary": [
      "Ohm’s law",
      "current",
      "resistance"
    ]
  },
  {
    "unit": "Grade 8 Electricity and Magnetism",
    "tag": "electromagnetism",
    "initialReview": null,
    "title": "Series Circuit Behavior",
    "objective": "Predict current, voltage distribution, and device behavior in a simple series circuit.",
    "vocabulary": [
      "series circuit",
      "single path",
      "load"
    ]
  },
  {
    "unit": "Grade 8 Electricity and Magnetism",
    "tag": "electromagnetism",
    "initialReview": null,
    "title": "Parallel Circuit Behavior",
    "objective": "Predict how branches affect current and device independence in a parallel circuit.",
    "vocabulary": [
      "parallel circuit",
      "branch",
      "independent path"
    ]
  },
  {
    "unit": "Grade 8 Electricity and Magnetism",
    "tag": "electromagnetism",
    "initialReview": null,
    "title": "Electrical Power and Household Energy",
    "objective": "Relate electrical power to energy use and explain why appliances are rated in watts.",
    "vocabulary": [
      "electrical power",
      "kilowatt-hour",
      "appliance"
    ]
  },
  {
    "unit": "Grade 8 Electricity and Magnetism",
    "tag": "electromagnetism",
    "initialReview": null,
    "title": "Magnetic Fields and Domain Alignment",
    "objective": "Model magnetic fields and explain magnetism using aligned magnetic domains.",
    "vocabulary": [
      "magnetic field",
      "domain",
      "pole"
    ]
  },
  {
    "unit": "Grade 8 Electricity and Magnetism",
    "tag": "electromagnetism",
    "initialReview": null,
    "title": "Electromagnets and Controllable Fields",
    "objective": "Explain how current, coil turns, and cores can strengthen an electromagnet.",
    "vocabulary": [
      "electromagnet",
      "solenoid",
      "iron core"
    ]
  },
  {
    "unit": "Grade 8 Electricity and Magnetism",
    "tag": "electromagnetism",
    "initialReview": null,
    "title": "Motors, Generators, and Energy Conversion",
    "objective": "Compare motors and generators as devices that convert energy through magnetic interactions.",
    "vocabulary": [
      "motor",
      "generator",
      "electromagnetic induction"
    ]
  },
  {
    "unit": "Grade 8 Dynamic Earth",
    "tag": "earth-processes",
    "initialReview": null,
    "title": "Earth’s Layers and Internal Energy",
    "objective": "Describe Earth’s compositional and mechanical layers and connect internal heat to geologic activity.",
    "vocabulary": [
      "crust",
      "mantle",
      "core"
    ]
  },
  {
    "unit": "Grade 8 Dynamic Earth",
    "tag": "earth-processes",
    "initialReview": null,
    "title": "Minerals and Diagnostic Properties",
    "objective": "Identify minerals by testing properties such as hardness, streak, luster, and cleavage.",
    "vocabulary": [
      "mineral",
      "streak",
      "luster"
    ]
  },
  {
    "unit": "Grade 8 Dynamic Earth",
    "tag": "earth-processes",
    "initialReview": null,
    "title": "Rock Classification by Formation",
    "objective": "Classify rocks by the processes that formed them and the features those processes leave behind.",
    "vocabulary": [
      "igneous",
      "sedimentary",
      "metamorphic"
    ]
  },
  {
    "unit": "Grade 8 Dynamic Earth",
    "tag": "earth-processes",
    "initialReview": null,
    "title": "Igneous Rock Texture and Cooling Rate",
    "objective": "Relate crystal size and texture in igneous rock to cooling rate and formation location.",
    "vocabulary": [
      "intrusive",
      "extrusive",
      "crystal size"
    ]
  },
  {
    "unit": "Grade 8 Dynamic Earth",
    "tag": "earth-processes",
    "initialReview": null,
    "title": "Sedimentary Rock and Depositional History",
    "objective": "Use layers, grain size, and fossils to infer how sedimentary rock formed.",
    "vocabulary": [
      "deposition",
      "compaction",
      "cementation"
    ]
  },
  {
    "unit": "Grade 8 Dynamic Earth",
    "tag": "earth-processes",
    "initialReview": null,
    "title": "Metamorphic Change Under Heat and Pressure",
    "objective": "Explain how heat, pressure, and fluids change existing rock without fully melting it.",
    "vocabulary": [
      "metamorphism",
      "foliation",
      "parent rock"
    ]
  },
  {
    "unit": "Grade 8 Dynamic Earth",
    "tag": "earth-processes",
    "initialReview": null,
    "title": "Relative Dating and Stratigraphic Order",
    "objective": "Use superposition, cross-cutting, and inclusions to order geologic events relatively.",
    "vocabulary": [
      "superposition",
      "cross-cutting",
      "inclusion"
    ]
  },
  {
    "unit": "Grade 8 Dynamic Earth",
    "tag": "earth-processes",
    "initialReview": null,
    "title": "Radiometric Dating and Half-Life",
    "objective": "Explain how radioactive decay provides numerical ages for suitable rocks and minerals.",
    "vocabulary": [
      "radiometric dating",
      "half-life",
      "radioactive decay"
    ]
  },
  {
    "unit": "Grade 8 Dynamic Earth",
    "tag": "earth-processes",
    "initialReview": null,
    "title": "Evidence for Plate Tectonics",
    "objective": "Evaluate fossil, rock, seafloor, and earthquake evidence for moving lithospheric plates.",
    "vocabulary": [
      "plate tectonics",
      "seafloor spreading",
      "continental drift"
    ]
  },
  {
    "unit": "Grade 8 Dynamic Earth",
    "tag": "earth-processes",
    "initialReview": null,
    "title": "Divergent Boundaries and New Crust",
    "objective": "Relate divergent plate motion to rifts, mid-ocean ridges, volcanism, and new crust.",
    "vocabulary": [
      "divergent boundary",
      "rift",
      "mid-ocean ridge"
    ]
  },
  {
    "unit": "Grade 8 Dynamic Earth",
    "tag": "earth-processes",
    "initialReview": null,
    "title": "Convergent Boundaries and Subduction",
    "objective": "Explain how convergent boundaries produce trenches, volcanoes, mountains, and recycling crust.",
    "vocabulary": [
      "convergent boundary",
      "subduction",
      "trench"
    ]
  },
  {
    "unit": "Grade 8 Dynamic Earth",
    "tag": "earth-processes",
    "initialReview": null,
    "title": "Transform Boundaries and Earthquake Risk",
    "objective": "Explain why plates sliding past each other can store stress and release it as earthquakes.",
    "vocabulary": [
      "transform boundary",
      "fault",
      "elastic rebound"
    ]
  },
  {
    "unit": "Grade 8 Dynamic Earth",
    "tag": "earth-processes",
    "initialReview": null,
    "title": "Seismic Waves and Earth’s Interior",
    "objective": "Use P-wave and S-wave behavior to infer properties of Earth’s interior.",
    "vocabulary": [
      "seismic wave",
      "P wave",
      "S wave"
    ]
  },
  {
    "unit": "Grade 8 Dynamic Earth",
    "tag": "earth-processes",
    "initialReview": null,
    "title": "Volcanoes, Magma, and Eruption Style",
    "objective": "Relate magma composition, gas, and viscosity to eruption style and volcanic landforms.",
    "vocabulary": [
      "magma",
      "viscosity",
      "eruption"
    ]
  },
  {
    "unit": "Grade 8 Dynamic Earth",
    "tag": "earth-processes",
    "initialReview": null,
    "title": "Weathering and Soil Formation",
    "objective": "Distinguish physical and chemical weathering and explain their roles in soil formation.",
    "vocabulary": [
      "weathering",
      "soil",
      "chemical weathering"
    ]
  },
  {
    "unit": "Grade 8 Dynamic Earth",
    "tag": "earth-processes",
    "initialReview": null,
    "title": "Erosion, Deposition, and Landforms",
    "objective": "Use moving water, wind, ice, and gravity to explain erosion, transport, deposition, and landforms.",
    "vocabulary": [
      "erosion",
      "deposition",
      "sediment load"
    ]
  },
  {
    "unit": "Grade 8 Dynamic Earth",
    "tag": "earth-processes",
    "initialReview": null,
    "title": "Geologic Resources, Hazards, and Decisions",
    "objective": "Use Earth-process evidence to weigh resource benefits, hazard risk, and long-term impacts.",
    "vocabulary": [
      "geologic hazard",
      "resource",
      "mitigation"
    ]
  },
  {
    "unit": "Grade 8 Weather and Climate Systems",
    "tag": "weather-climate",
    "initialReview": null,
    "title": "Atmospheric Layers and Air Pressure",
    "objective": "Describe how atmospheric composition, density, and pressure change with altitude.",
    "vocabulary": [
      "troposphere",
      "stratosphere",
      "air pressure"
    ]
  },
  {
    "unit": "Grade 8 Weather and Climate Systems",
    "tag": "weather-climate",
    "initialReview": null,
    "title": "Uneven Solar Heating of Earth",
    "objective": "Explain how latitude, surface type, and angle of sunlight create unequal heating.",
    "vocabulary": [
      "insolation",
      "latitude",
      "albedo"
    ]
  },
  {
    "unit": "Grade 8 Weather and Climate Systems",
    "tag": "weather-climate",
    "initialReview": null,
    "title": "Convection and Global Circulation",
    "objective": "Model global circulation as a response to uneven heating, density differences, and Earth’s rotation.",
    "vocabulary": [
      "global circulation",
      "convection cell",
      "pressure belt"
    ]
  },
  {
    "unit": "Grade 8 Weather and Climate Systems",
    "tag": "weather-climate",
    "initialReview": null,
    "title": "Coriolis Effect and Prevailing Winds",
    "objective": "Explain how Earth’s rotation changes the apparent path of moving air and supports prevailing wind patterns.",
    "vocabulary": [
      "Coriolis effect",
      "prevailing wind",
      "rotation"
    ]
  },
  {
    "unit": "Grade 8 Weather and Climate Systems",
    "tag": "weather-climate",
    "initialReview": null,
    "title": "Humidity, Dew Point, and Cloud Formation",
    "objective": "Relate humidity, cooling, dew point, and condensation nuclei to cloud formation.",
    "vocabulary": [
      "dew point",
      "relative humidity",
      "condensation nucleus"
    ]
  },
  {
    "unit": "Grade 8 Weather and Climate Systems",
    "tag": "weather-climate",
    "initialReview": null,
    "title": "Air Masses, Fronts, and Weather Changes",
    "objective": "Predict weather changes where air masses meet at cold, warm, stationary, and occluded fronts.",
    "vocabulary": [
      "front",
      "air mass",
      "occluded front"
    ]
  },
  {
    "unit": "Grade 8 Weather and Climate Systems",
    "tag": "weather-climate",
    "initialReview": null,
    "title": "Reading Weather Maps and Station Models",
    "objective": "Interpret isobars, fronts, symbols, and station data to describe current weather patterns.",
    "vocabulary": [
      "isobar",
      "station model",
      "forecast"
    ]
  },
  {
    "unit": "Grade 8 Weather and Climate Systems",
    "tag": "weather-climate",
    "initialReview": null,
    "title": "Severe Weather Conditions and Safety",
    "objective": "Relate atmospheric instability, moisture, wind, and pressure patterns to severe-weather risk and safety decisions.",
    "vocabulary": [
      "thunderstorm",
      "tornado watch",
      "warning"
    ]
  },
  {
    "unit": "Grade 8 Weather and Climate Systems",
    "tag": "weather-climate",
    "initialReview": null,
    "title": "Greenhouse Effect and Energy Balance",
    "objective": "Explain the natural greenhouse effect as absorption and re-emission that affects Earth’s energy balance.",
    "vocabulary": [
      "greenhouse gas",
      "energy balance",
      "infrared radiation"
    ]
  },
  {
    "unit": "Grade 8 Weather and Climate Systems",
    "tag": "weather-climate",
    "initialReview": null,
    "title": "Climate Versus Weather",
    "objective": "Distinguish short-term weather observations from long-term climate patterns and averages.",
    "vocabulary": [
      "weather",
      "climate",
      "climate normal"
    ]
  },
  {
    "unit": "Grade 8 Weather and Climate Systems",
    "tag": "weather-climate",
    "initialReview": null,
    "title": "Ocean Currents and Climate Patterns",
    "objective": "Explain how ocean currents redistribute thermal energy and influence nearby climate.",
    "vocabulary": [
      "ocean current",
      "upwelling",
      "heat capacity"
    ]
  },
  {
    "unit": "Grade 8 Weather and Climate Systems",
    "tag": "weather-climate",
    "initialReview": null,
    "title": "Climate Data, Trends, and Variability",
    "objective": "Analyze long-term data for trends while distinguishing natural variation from a supported pattern.",
    "vocabulary": [
      "climate trend",
      "variability",
      "data record"
    ]
  },
  {
    "unit": "Grade 8 Weather and Climate Systems",
    "tag": "weather-climate",
    "initialReview": null,
    "title": "Local Climate Controls",
    "objective": "Explain how elevation, topography, distance from water, and vegetation influence local climate.",
    "vocabulary": [
      "microclimate",
      "elevation",
      "rain shadow"
    ]
  },
  {
    "unit": "Grade 8 Weather and Climate Systems",
    "tag": "weather-climate",
    "initialReview": null,
    "title": "Water Resources and Watershed Systems",
    "objective": "Trace water through a watershed and evaluate choices that affect water quantity and quality.",
    "vocabulary": [
      "watershed",
      "runoff",
      "aquifer"
    ]
  },
  {
    "unit": "Grade 8 Weather and Climate Systems",
    "tag": "weather-climate",
    "initialReview": null,
    "title": "Human Activities and Climate Impacts",
    "objective": "Use evidence to connect emissions, land use, and feedbacks with possible climate-system impacts.",
    "vocabulary": [
      "emissions",
      "feedback",
      "mitigation"
    ]
  },
  {
    "unit": "Grade 8 Weather and Climate Systems",
    "tag": "weather-climate",
    "initialReview": null,
    "title": "Climate Models, Projections, and Uncertainty",
    "objective": "Explain what climate models can project, why multiple scenarios matter, and how uncertainty is communicated.",
    "vocabulary": [
      "climate model",
      "projection",
      "scenario"
    ]
  },
  {
    "unit": "Grade 8 Earth in Space",
    "tag": "earth-space",
    "initialReview": null,
    "title": "Gravity and the Scale of the Solar System",
    "objective": "Use gravity and scale models to explain orbital motion and the spacing of solar-system objects.",
    "vocabulary": [
      "gravity",
      "orbit",
      "scale model"
    ]
  },
  {
    "unit": "Grade 8 Earth in Space",
    "tag": "earth-space",
    "initialReview": null,
    "title": "Earth’s Rotation and the Day-Night Cycle",
    "objective": "Use Earth’s rotation to explain the apparent daily movement of the Sun and stars.",
    "vocabulary": [
      "rotation",
      "axis",
      "day-night cycle"
    ]
  },
  {
    "unit": "Grade 8 Earth in Space",
    "tag": "earth-space",
    "initialReview": null,
    "title": "Earth’s Revolution, Tilt, and Seasons",
    "objective": "Explain seasons with Earth’s tilted axis and changing sunlight angle rather than changing Sun distance.",
    "vocabulary": [
      "revolution",
      "tilt",
      "solstice"
    ]
  },
  {
    "unit": "Grade 8 Earth in Space",
    "tag": "earth-space",
    "initialReview": null,
    "title": "Moon Phases and Sunlight Geometry",
    "objective": "Model phases as changing views of the Moon’s illuminated half during its orbit around Earth.",
    "vocabulary": [
      "moon phase",
      "illumination",
      "orbit"
    ]
  },
  {
    "unit": "Grade 8 Earth in Space",
    "tag": "earth-space",
    "initialReview": null,
    "title": "Solar and Lunar Eclipses",
    "objective": "Distinguish solar and lunar eclipses by the alignment and shadow involved.",
    "vocabulary": [
      "solar eclipse",
      "lunar eclipse",
      "umbra"
    ]
  },
  {
    "unit": "Grade 8 Earth in Space",
    "tag": "earth-space",
    "initialReview": null,
    "title": "Tides and Gravitational Patterns",
    "objective": "Explain daily tidal patterns using the Moon’s gravity, the Sun’s gravity, and Earth’s rotation.",
    "vocabulary": [
      "tide",
      "spring tide",
      "neap tide"
    ]
  },
  {
    "unit": "Grade 8 Earth in Space",
    "tag": "earth-space",
    "initialReview": null,
    "title": "Solar System Formation and Planet Types",
    "objective": "Use a nebular model to compare terrestrial and giant planets and the evidence for their properties.",
    "vocabulary": [
      "nebula",
      "terrestrial planet",
      "gas giant"
    ]
  },
  {
    "unit": "Grade 8 Earth in Space",
    "tag": "earth-space",
    "initialReview": null,
    "title": "Planetary Motion and Orbital Evidence",
    "objective": "Use orbital observations to explain why planets change apparent position and remain gravitationally bound.",
    "vocabulary": [
      "ellipse",
      "orbital period",
      "gravity"
    ]
  },
  {
    "unit": "Grade 8 Earth in Space",
    "tag": "earth-space",
    "initialReview": null,
    "title": "Stars, Fusion, and Life Cycles",
    "objective": "Relate a star’s mass to fusion, luminosity, and broad stages of stellar evolution.",
    "vocabulary": [
      "fusion",
      "main sequence",
      "supernova"
    ]
  },
  {
    "unit": "Grade 8 Earth in Space",
    "tag": "earth-space",
    "initialReview": null,
    "title": "Galaxies and the Structure of the Universe",
    "objective": "Describe galaxies as gravity-bound systems of stars and compare their broad shapes and scales.",
    "vocabulary": [
      "galaxy",
      "Milky Way",
      "universe"
    ]
  },
  {
    "unit": "Grade 8 Earth in Space",
    "tag": "earth-space",
    "initialReview": null,
    "title": "Light, Spectra, and Expanding Space",
    "objective": "Use spectra and redshift evidence to explain how astronomers infer composition, motion, and expansion.",
    "vocabulary": [
      "spectrum",
      "redshift",
      "expansion"
    ]
  },
  {
    "unit": "Grade 8 Earth in Space",
    "tag": "earth-space",
    "initialReview": null,
    "title": "Space Data, Models, and Scientific Limits",
    "objective": "Evaluate images, measurements, and models as tools for studying distant systems that cannot be sampled directly.",
    "vocabulary": [
      "remote sensing",
      "model",
      "inference"
    ]
  },
  {
    "unit": "Grade 8 Experimental Reasoning and Design",
    "tag": "experimental-reasoning",
    "initialReview": null,
    "title": "Claims, Evidence, and Reasoning",
    "objective": "Construct a scientific explanation in which evidence is explicitly connected to a claim by a scientific principle.",
    "vocabulary": [
      "claim",
      "evidence",
      "reasoning"
    ]
  },
  {
    "unit": "Grade 8 Experimental Reasoning and Design",
    "tag": "experimental-reasoning",
    "initialReview": null,
    "title": "Hypotheses and Falsifiable Predictions",
    "objective": "Write a hypothesis that offers a testable explanation and a prediction that could be supported or challenged.",
    "vocabulary": [
      "hypothesis",
      "prediction",
      "falsifiable"
    ]
  },
  {
    "unit": "Grade 8 Experimental Reasoning and Design",
    "tag": "experimental-reasoning",
    "initialReview": null,
    "title": "Operational Definitions and Repeatable Procedures",
    "objective": "Define variables in measurable terms and write procedures another investigator can repeat.",
    "vocabulary": [
      "operational definition",
      "procedure",
      "replication"
    ]
  },
  {
    "unit": "Grade 8 Experimental Reasoning and Design",
    "tag": "experimental-reasoning",
    "initialReview": null,
    "title": "Controls, Constants, and Experimental Validity",
    "objective": "Evaluate whether an investigation isolates a proposed cause well enough for a causal conclusion.",
    "vocabulary": [
      "control group",
      "constant",
      "validity"
    ]
  },
  {
    "unit": "Grade 8 Experimental Reasoning and Design",
    "tag": "experimental-reasoning",
    "initialReview": null,
    "title": "Sampling, Bias, and Representative Data",
    "objective": "Explain how sampling choices can bias results and select a sample that better represents a population.",
    "vocabulary": [
      "sample",
      "bias",
      "population"
    ]
  },
  {
    "unit": "Grade 8 Experimental Reasoning and Design",
    "tag": "experimental-reasoning",
    "initialReview": null,
    "title": "Choosing Displays for Scientific Data",
    "objective": "Select tables, graphs, diagrams, or models that make a data pattern visible without distortion.",
    "vocabulary": [
      "data display",
      "scale",
      "representation"
    ]
  },
  {
    "unit": "Grade 8 Experimental Reasoning and Design",
    "tag": "experimental-reasoning",
    "initialReview": null,
    "title": "Measurement Error and Uncertainty",
    "objective": "Distinguish random variation from systematic error and communicate a measurement’s reasonable uncertainty.",
    "vocabulary": [
      "random error",
      "systematic error",
      "uncertainty"
    ]
  },
  {
    "unit": "Grade 8 Experimental Reasoning and Design",
    "tag": "experimental-reasoning",
    "initialReview": null,
    "title": "Correlation, Causation, and Confounding Variables",
    "objective": "Distinguish association from causation and identify possible confounding variables.",
    "vocabulary": [
      "correlation",
      "causation",
      "confounding variable"
    ]
  },
  {
    "unit": "Grade 8 Experimental Reasoning and Design",
    "tag": "experimental-reasoning",
    "initialReview": null,
    "title": "Models, Simulations, and Their Limits",
    "objective": "Evaluate what a physical, mathematical, or computer model represents well and what it leaves out.",
    "vocabulary": [
      "simulation",
      "assumption",
      "limitation"
    ]
  },
  {
    "unit": "Grade 8 Experimental Reasoning and Design",
    "tag": "experimental-reasoning",
    "initialReview": null,
    "title": "Peer Review, Replication, and Scientific Consensus",
    "objective": "Explain how critique, replication, and converging evidence strengthen scientific knowledge.",
    "vocabulary": [
      "peer review",
      "replication",
      "consensus"
    ]
  },
  {
    "unit": "Grade 8 Experimental Reasoning and Design",
    "tag": "experimental-reasoning",
    "initialReview": null,
    "title": "Engineering Criteria, Constraints, and Trade-Offs",
    "objective": "Use criteria, constraints, and evidence to compare design solutions and justify a trade-off.",
    "vocabulary": [
      "criterion",
      "constraint",
      "trade-off"
    ]
  },
  {
    "unit": "Grade 8 Experimental Reasoning and Design",
    "tag": "experimental-reasoning",
    "initialReview": null,
    "title": "Cumulative Scientific Argument",
    "objective": "Synthesize data, models, and scientific principles into a bounded conclusion and next investigative step.",
    "vocabulary": [
      "synthesis",
      "scientific argument",
      "next step"
    ]
  }
];

const unitGuides = {
  "Grade 6/7 Science Bridge: Evidence, Matter, Life, and Earth": {
    foundation: "Earlier science introduced observable patterns in matter, organisms, Earth systems, and investigations. This bridge revisits those ideas as evidence students can use, not as isolated facts to memorize.",
    relationship: "A reliable explanation separates what was observed from the interpretation, then uses a model or scientific principle to connect the two.",
    evidence: "recorded observations, comparison conditions, and patterns across more than one observation",
    caseOne: "A class records a starting condition, one controlled change, and a final observation in a familiar Earth, life, or matter system.",
    caseTwo: "Two groups use the same materials but organize their measurements in different displays before comparing the pattern they can support."
  },
  "Grade 8 Measurement and Scientific Data": {
    foundation: "Grade-8 physical science depends on measurements that carry units, reasonable precision, and a clear relationship between the measured quantities.",
    relationship: "The numerical value and its unit are inseparable; a calculation or graph is meaningful only when the measurement method and scale are appropriate.",
    evidence: "repeated measurements, labeled units, calculated rates, and a graph or table whose scale matches the data",
    caseOne: "A lab team measures the same material with a balance, graduated cylinder, and timer, then records every value with units.",
    caseTwo: "A second team graphs a changing quantity against time and compares the slope, spread, and any unusual data point."
  },
  "Grade 8 Atomic Structure and Materials": {
    foundation: "Matter can be explained with particles that have structure, charge, and predictable patterns. Those microscopic features help account for observable material properties.",
    relationship: "Proton number identifies an element, while electron arrangement and bonding influence how its atoms or ions interact in a material.",
    evidence: "particle diagrams, periodic-table position, formulas, and property tests such as conductivity or melting behavior",
    caseOne: "Students compare particle models and periodic-table information for two substances before predicting a material property.",
    caseTwo: "A sample’s formula and a conductivity observation are used together to decide which particle arrangement best explains it."
  },
  "Grade 8 Chemical Reactions": {
    foundation: "Chemical reactions reorganize existing atoms into new substances. Matter and energy must both be tracked within a clearly named system.",
    relationship: "Coefficients count whole particles or formula units; they change quantities without changing the identity of a substance represented by a formula.",
    evidence: "balanced atom counts, temperature observations, gas or precipitate evidence, and measured mass inside a stated boundary",
    caseOne: "A sealed reaction container is measured before and after its contents change while students document visible and temperature evidence.",
    caseTwo: "A particle diagram and an unbalanced symbolic equation are compared to decide how many of each reactant unit are needed."
  },
  "Grade 8 Forces and Motion": {
    foundation: "Motion is described relative to a reference point, and a change in motion is explained by the net force on the object being studied.",
    relationship: "For a constant mass, acceleration follows the direction of net force and grows as net force grows; force pairs act on different objects.",
    evidence: "labeled force diagrams, position or velocity graphs, measured time intervals, and calculations with units and direction",
    caseOne: "A cart’s position and forces are recorded as it moves along a straight track with a known reference direction.",
    caseTwo: "Two objects interact during a stop or collision, and a diagram separates the forces on each object from their changing motion."
  },
  "Grade 8 Energy, Thermal Systems, and Waves": {
    foundation: "Energy accounting follows transfers and transformations through a defined system. Waves transfer energy and information through recognizable patterns.",
    relationship: "Energy is conserved in a closed model even when it changes form; for waves, frequency, wavelength, amplitude, and medium describe different aspects of the disturbance.",
    evidence: "before-and-after energy diagrams, temperature or motion data, labeled wave models, and observations at boundaries",
    caseOne: "A system begins with stored or moving energy, then transfers energy to another object, material, or wave as students track each form.",
    caseTwo: "A wave model changes one labeled feature at a time while observers compare the resulting motion, energy, or signal behavior."
  },
  "Grade 8 Electricity and Magnetism": {
    foundation: "Electric and magnetic phenomena arise from charges, moving charges, fields, and energy transfers in systems with identifiable pathways.",
    relationship: "A potential difference can drive current through a complete circuit, while resistance and circuit arrangement affect the response; moving charge and fields can interact.",
    evidence: "circuit diagrams, meter readings, component changes, field patterns, and energy-transfer labels",
    caseOne: "A battery, wires, and loads are arranged in a labeled circuit while students predict and then observe the behavior of each component.",
    caseTwo: "A changing current or magnet arrangement is represented with a field diagram and an energy-conversion statement."
  },
  "Grade 8 Dynamic Earth": {
    foundation: "Earth materials preserve evidence of changing conditions, while internal energy and plate motion continually reshape the planet’s surface.",
    relationship: "A process leaves characteristic evidence: rock texture records formation, strata record relative order, and plate boundaries concentrate particular landforms and hazards.",
    evidence: "rock samples, cross sections, maps of earthquakes and volcanoes, stratigraphic relationships, and measured wave behavior",
    caseOne: "A class examines a rock sample or cross section and uses visible features to reconstruct part of its geologic history.",
    caseTwo: "A map overlays plates, landforms, and hazard data so students can connect a pattern to a boundary process."
  },
  "Grade 8 Weather and Climate Systems": {
    foundation: "The atmosphere and oceans redistribute solar energy, producing short-term weather and long-term climate patterns that can be measured at several scales.",
    relationship: "Differences in heating produce pressure and density differences that drive circulation; climate conclusions require long-term patterns rather than a single weather event.",
    evidence: "station data, maps, temperature and pressure trends, long-term records, and comparisons among locations or scenarios",
    caseOne: "Students use a weather map with pressure, humidity, temperature, and front symbols to describe an unfolding local pattern.",
    caseTwo: "A multiyear climate record is compared with a single day’s observations to decide which claims each data set can support."
  },
  "Grade 8 Earth in Space": {
    foundation: "Earth’s movements and gravitational interactions produce predictable sky patterns, while light and models provide evidence about systems too distant to touch.",
    relationship: "The geometry of a system determines what is observed: rotation, revolution, tilt, orbit, and alignment explain cycles without changing the underlying physical rules.",
    evidence: "scaled models, repeated sky observations, shadow geometry, orbital diagrams, and spectra or other remote measurements",
    caseOne: "A physical or diagram model changes one Earth-Sun-Moon position at a time while students predict the resulting observation.",
    caseTwo: "Astronomical measurements from light, position, or timing are used to make a limited inference about a distant object."
  },
  "Grade 8 Experimental Reasoning and Design": {
    foundation: "Scientific conclusions are strongest when a question, method, evidence, uncertainty, and explanation fit together and can be examined by others.",
    relationship: "A causal claim requires a design that isolates a plausible cause; a correlation alone can suggest a question but cannot rule out other explanations.",
    evidence: "operational definitions, comparison data, sample information, uncertainty notes, repeated results, and stated limitations",
    caseOne: "A proposed investigation is inspected for its variables, sampling plan, measurements, and comparison condition before data are collected.",
    caseTwo: "A completed data set is used to construct a claim that states both the supported conclusion and an appropriate limitation."
  }
};

function reviewFor(index, blueprint) {
  if (blueprint.initialReview) return blueprint.initialReview;
  const previous = lessonBlueprints[index - 1];
  return `Review and apply the prior lesson, ${previous.title}, before extending the model to this new skill.`;
}

function explanationFor(blueprint) {
  const guide = unitGuides[blueprint.unit];
  const [first, second, third] = blueprint.vocabulary;
  return [
    `${blueprint.title} develops this objective: ${blueprint.objective} ${guide.foundation} In this lesson, **${first}**, **${second}**, and **${third}** are precise tools for describing the system rather than interchangeable vocabulary.`,
    `The central relationship is this: ${guide.relationship} Apply that relationship to the particular focus of ${blueprint.title.toLowerCase()}. A sound model names what is changing, what is being observed, and the boundary or conditions that make the conclusion meaningful.`,
    `Use ${guide.evidence} to check the explanation. First identify the relevant pattern, then connect it to the scientific idea, and finally state a conclusion at the strength the evidence allows. This keeps a useful model from becoming an overclaim.`
  ];
}

function examplesFor(blueprint) {
  const guide = unitGuides[blueprint.unit];
  const [first, second, third] = blueprint.vocabulary;
  return [
    {
      prompt: `Worked case: ${guide.caseOne} The focus is ${blueprint.title}.`,
      steps: [
        `Identify the system, the relevant observation, and the target idea: ${first}.`,
        `Apply the lesson objective: ${blueprint.objective}`,
        `Use the recorded evidence rather than an unsupported assumption: ${guide.evidence}.`,
        `State a bounded conclusion using ${first} and ${second} accurately.`
      ],
      answer: `The supported conclusion should explain ${blueprint.title.toLowerCase()} by connecting the observation to ${first} and ${second}; ${third} should be included when it clarifies the mechanism or condition.`
    },
    {
      prompt: `Worked case: ${guide.caseTwo} The focus is ${blueprint.title}.`,
      steps: [
        `Read the representation carefully and identify which quantities, particles, forces, or conditions are actually shown.`,
        `Compare the evidence with the relationship for this lesson: ${guide.relationship}`,
        `Rule out a conclusion that goes beyond the stated measurements or model.`,
        `Write the final explanation with the vocabulary ${first}, ${second}, and ${third} where each term adds meaning.`
      ],
      answer: `A complete explanation uses the displayed evidence to support the objective of ${blueprint.title} and states any limit created by the model, measurement, or system boundary.`
    }
  ];
}

export const scienceSequence = lessonBlueprints.map((blueprint, index) => ({
  unit: blueprint.unit,
  title: blueprint.title,
  objective: blueprint.objective,
  review: reviewFor(index, blueprint),
  skillTags: ["grade-8-science", blueprint.tag, "evidence-based-explanation"],
  prerequisites: index === 0 ? ["Grade 6/7 science foundations"] : [lessonBlueprints[index - 1].title],
  vocabulary: blueprint.vocabulary,
  explanation: explanationFor(blueprint),
  examples: examplesFor(blueprint)
}));

if (scienceSequence.length !== 169 || new Set(scienceSequence.map(lesson => lesson.title)).size !== 169) {
  throw new Error("Science sequence must contain exactly 169 uniquely titled lessons.");
}
