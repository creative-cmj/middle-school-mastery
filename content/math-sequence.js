// Grade 8 Math lesson seeds: prerequisite repair through an Algebra I bridge.
const rows = [
  // Focused 6th/7th-grade prerequisite repair (1–20)
  ["Prerequisite Repair: Number Sense","Place Value and Integer Magnitude","Compare and order positive and negative whole numbers by value.","Use a number line to recall that positions farther right are greater.",["number-sense"],["whole-number place value"],["integer","opposite","magnitude"],"integer"],
  ["Prerequisite Repair: Number Sense","Absolute Value as Distance","Interpret absolute value as distance from zero, not as a positive/negative rule.","Locate values and opposites on a horizontal number line.",["number-sense"],["integer magnitude"],["absolute value","distance","zero"],"integer"],
  ["Prerequisite Repair: Number Sense","Add Integers with Counters","Add signed integers by combining zero pairs and remaining counters.","Recall that one positive and one negative counter form zero.",["integer-operations"],["integer magnitude"],["addend","zero pair","sum"],"integer"],
  ["Prerequisite Repair: Number Sense","Subtract Integers by Adding Opposites","Rewrite subtraction of an integer as addition of its opposite.","Review integer addition and the meaning of opposite.",["integer-operations"],["add integers"],["subtraction","opposite","equivalent expression"],"integer"],
  ["Prerequisite Repair: Number Sense","Multiply Signed Numbers","Determine the sign and product when multiplying integers.","Review repeated groups and integer sign patterns.",["integer-operations"],["integer addition"],["factor","product","sign pattern"],"integer"],
  ["Prerequisite Repair: Number Sense","Divide Signed Numbers","Determine the sign and quotient when dividing integers.","Use multiplication facts and signed-number patterns.",["integer-operations"],["multiply signed numbers"],["dividend","divisor","quotient"],"integer"],
  ["Prerequisite Repair: Fractions","Equivalent Fractions and Simplifying","Generate equivalent fractions and reduce a fraction using common factors.","Review factors, multiples, and fraction meaning.",["fractions"],["multiplication facts"],["equivalent fractions","numerator","denominator"],"fraction"],
  ["Prerequisite Repair: Fractions","Compare Fractions with Benchmarks","Compare fractions using one-half, one, common denominators, and reasoning.","Recall equivalent fractions and the size of unit fractions.",["fractions"],["equivalent fractions"],["benchmark fraction","common denominator","unit fraction"],"fraction"],
  ["Prerequisite Repair: Fractions","Add Fractions with Unlike Denominators","Find a common denominator before adding fractional parts.","Review equivalent fractions and addition with like denominators.",["fractions"],["equivalent fractions"],["common denominator","least common multiple","sum"],"fraction"],
  ["Prerequisite Repair: Fractions","Subtract Mixed Numbers Carefully","Rename one whole as fractional parts before subtracting mixed numbers.","Review subtraction with like denominators and mixed-number meaning.",["fractions"],["add unlike fractions"],["mixed number","rename","difference"],"fraction"],
  ["Prerequisite Repair: Fractions","Multiply Fractions and Mixed Numbers","Multiply numerators and denominators, simplifying before or after multiplying.","Review improper fractions and factor pairs.",["fractions"],["equivalent fractions"],["reciprocal","improper fraction","simplify"],"fraction"],
  ["Prerequisite Repair: Fractions","Divide Fractions Using Reciprocals","Multiply by the reciprocal to divide one fraction by another.","Review multiplication of fractions and reciprocal pairs.",["fractions"],["multiply fractions"],["reciprocal","dividend","quotient"],"fraction"],
  ["Prerequisite Repair: Decimals","Decimal Place Value and Rounding","Read decimal place values and round to a requested place.","Review place-value positions to the right of the decimal point.",["decimals"],["whole-number place value"],["tenths","hundredths","rounding"],"decimal"],
  ["Prerequisite Repair: Decimals","Add and Subtract Decimals","Align decimal points to add or subtract quantities accurately.","Review decimal place value and regrouping.",["decimals"],["decimal place value"],["decimal point","align","difference"],"decimal"],
  ["Prerequisite Repair: Decimals","Multiply Decimals with Place Value","Use whole-number multiplication and place-value reasoning for decimal products.","Review multiplication facts and powers of ten.",["decimals"],["multiply whole numbers"],["decimal product","factor","place value"],"decimal"],
  ["Prerequisite Repair: Decimals","Divide Decimals by Whole Numbers","Interpret decimal division through equal sharing and place value.","Review division facts and decimal place value.",["decimals"],["divide whole numbers"],["dividend","divisor","quotient"],"decimal"],
  ["Prerequisite Repair: Ratios","Write and Simplify Ratios","Describe a comparison with ratio language and simplify both terms by a common factor.","Review multiplication facts and equivalent fractions.",["ratios"],["fractions"],["ratio","term","equivalent ratio"],"ratio"],
  ["Prerequisite Repair: Ratios","Find Unit Rates","Divide to find the amount for one unit and use its units correctly.","Review division and ratio notation.",["ratios"],["write ratios"],["unit rate","per","quantity"],"ratio"],
  ["Prerequisite Repair: Proportions","Solve Proportions with Tables","Use a ratio table or scale factor to find a missing proportional value.","Review equivalent ratios and unit rates.",["proportions"],["unit rates"],["proportion","scale factor","ratio table"],"ratio"],
  ["Prerequisite Repair: Percents","Connect Fractions, Decimals, and Percents","Convert among fraction, decimal, and percent forms of the same quantity.","Review decimal place value and fractions out of 100.",["percent"],["fractions","decimals"],["percent","decimal","equivalent form"],"percent"],

  // Number systems, exponents, and scientific notation (21–36)
  ["Number Systems and Exponents","Classify Rational Numbers","Classify integers, fractions, terminating decimals, and repeating decimals as rational.","Recall fraction-decimal-percent equivalence.",["number-systems"],["decimal place value"],["rational number","integer","terminating decimal"],"number"],
  ["Number Systems and Exponents","Recognize Repeating Decimals","Explain why a repeating decimal represents a rational number.","Review division as a fraction and decimal notation.",["number-systems"],["rational numbers"],["repeating decimal","bar notation","rational number"],"number"],
  ["Number Systems and Exponents","Locate Rational Numbers on a Number Line","Place fractions, decimals, and signed values in order on a number line.","Review benchmark fractions and integer magnitude.",["number-systems"],["compare fractions","integers"],["rational number","interval","number line"],"number"],
  ["Number Systems and Exponents","Square Numbers and Square Roots","Match perfect squares with their principal square roots.","Review multiplication facts and area models.",["roots"],["multiplication facts"],["square number","square root","perfect square"],"root"],
  ["Number Systems and Exponents","Estimate Nonperfect Square Roots","Bracket a square root between nearby whole numbers and estimate its value.","Review perfect squares and number-line intervals.",["roots"],["square roots"],["radicand","estimate","perfect square"],"root"],
  ["Number Systems and Exponents","Cube Numbers and Cube Roots","Use volume patterns to identify perfect cubes and cube roots.","Review multiplication and exponents as repeated factors.",["roots"],["exponents"],["cube number","cube root","exponent"],"root"],
  ["Number Systems and Exponents","Integer Exponents as Repeated Multiplication","Evaluate powers with positive integer exponents.","Review factors and multiplication patterns.",["exponents"],["multiplication facts"],["base","exponent","power"],"exponent"],
  ["Number Systems and Exponents","Zero Exponent Rule","Explain and apply the rule that a nonzero base to the zero power equals one.","Review division patterns for powers with the same base.",["exponents"],["positive exponents"],["zero exponent","base","power"],"exponent"],
  ["Number Systems and Exponents","Negative Exponents as Reciprocals","Rewrite negative powers as reciprocal positive powers.","Review reciprocal pairs and positive exponents.",["exponents"],["zero exponent","fractions"],["negative exponent","reciprocal","denominator"],"exponent"],
  ["Number Systems and Exponents","Multiply Powers with the Same Base","Add exponents when multiplying powers that share a base.","Review repeated multiplication and exponent notation.",["exponents"],["positive exponents"],["product of powers","base","exponent"],"exponent"],
  ["Number Systems and Exponents","Divide Powers with the Same Base","Subtract exponents when dividing powers with the same nonzero base.","Review factors that cancel in a quotient.",["exponents"],["multiply powers"],["quotient of powers","cancel","exponent"],"exponent"],
  ["Number Systems and Exponents","Power of a Power","Multiply exponents when raising a power to another power.","Review repeated multiplication and product-of-powers reasoning.",["exponents"],["multiply powers"],["power of a power","base","exponent"],"exponent"],
  ["Number Systems and Exponents","Powers of Ten and Decimal Shifts","Use powers of ten to explain decimal movement rather than relying on a mnemonic.","Review decimal place value and positive exponents.",["exponents","decimals"],["decimal place value","powers"],["power of ten","coefficient","place value"],"scientific"],
  ["Number Systems and Exponents","Write Numbers in Scientific Notation","Express large and small positive numbers as a coefficient times a power of ten.","Review powers of ten and decimal shifts.",["scientific-notation"],["powers of ten"],["scientific notation","coefficient","exponent"],"scientific"],
  ["Number Systems and Exponents","Compare Scientific-Notation Values","Compare values by interpreting exponents and then coefficients.","Review scientific notation and integer exponent order.",["scientific-notation"],["write scientific notation"],["coefficient","exponent","order of magnitude"],"scientific"],
  ["Number Systems and Exponents","Operate with Scientific Notation","Multiply and divide scientific-notation quantities while keeping a valid coefficient.","Review exponent laws and decimal multiplication.",["scientific-notation"],["scientific notation","exponent laws"],["coefficient","product","quotient"],"scientific"],

  // Expressions and equations (37–70)
  ["Expressions and Equations","Translate Words into Algebraic Expressions","Represent a verbal relationship with variables, operations, and grouping symbols.","Review operation words and order of operations.",["expressions"],["whole-number operations"],["variable","coefficient","expression"],"expression"],
  ["Expressions and Equations","Evaluate Expressions by Substitution","Replace variables with given values and follow order of operations.","Review arithmetic order of operations.",["expressions"],["translate expressions"],["substitution","variable","evaluate"],"expression"],
  ["Expressions and Equations","Use the Distributive Property","Multiply a factor across every term inside parentheses.","Review multiplication and addition of integers.",["expressions"],["evaluate expressions"],["distributive property","factor","term"],"expression"],
  ["Expressions and Equations","Combine Like Terms","Add or subtract terms only when their variable parts match.","Review coefficients and integer addition.",["expressions"],["distributive property"],["like terms","coefficient","constant"],"expression"],
  ["Expressions and Equations","Simplify Multi-Step Expressions","Use distribution and like terms in a clear, repeatable order.","Review distributive property and like terms.",["expressions"],["combine like terms"],["simplify","term","equivalent expression"],"expression"],
  ["Expressions and Equations","Identify Equivalent Expressions","Decide whether two expressions have the same value for every permitted input.","Review simplifying expressions and substitution.",["expressions"],["simplify expressions"],["equivalent","identity","variable"],"expression"],
  ["Expressions and Equations","Factor out a Greatest Common Factor","Rewrite a sum as a product by taking out common numerical and variable factors.","Review factors, exponents, and distributive property.",["expressions"],["distributive property"],["factor","greatest common factor","product"],"expression"],
  ["Expressions and Equations","Solve One-Step Addition Equations","Use inverse operations to isolate a variable in an addition or subtraction equation.","Review equality and opposites.",["linear-equations"],["integer operations"],["equation","inverse operation","solution"],"equation"],
  ["Expressions and Equations","Solve One-Step Multiplication Equations","Use division or multiplication by a reciprocal to isolate a variable.","Review multiplication and division of rational numbers.",["linear-equations"],["one-step addition equations"],["coefficient","inverse operation","solution"],"equation"],
  ["Expressions and Equations","Check an Equation Solution","Substitute a proposed value into the original equation to verify equality.","Review substitution and arithmetic order of operations.",["linear-equations"],["one-step equations"],["check","substitute","solution"],"equation"],
  ["Expressions and Equations","Solve Two-Step Equations","Undo addition or subtraction before undoing multiplication or division.","Review inverse operations and one-step equations.",["linear-equations"],["one-step equations"],["two-step equation","inverse operation","isolate"],"equation"],
  ["Expressions and Equations","Solve Equations with Variables on Both Sides","Use equivalent operations to collect variable terms on one side.","Review combining like terms and two-step equations.",["linear-equations"],["two-step equations","like terms"],["variable term","coefficient","equivalent equation"],"equation"],
  ["Expressions and Equations","Solve Equations with Parentheses","Distribute first, then solve the resulting linear equation.","Review distributive property and two-step equations.",["linear-equations"],["distributive property","two-step equations"],["parentheses","distribute","linear equation"],"equation"],
  ["Expressions and Equations","Solve Equations with Fractions","Clear simple fractional coefficients or use inverse operations without changing equality.","Review fraction operations and two-step equations.",["linear-equations"],["fractions","two-step equations"],["fractional coefficient","denominator","inverse"],"equation"],
  ["Expressions and Equations","Interpret No-Solution Equations","Recognize a false statement after simplifying as evidence that no value works.","Review equivalent expressions and variables on both sides.",["linear-equations"],["variables on both sides"],["no solution","contradiction","false statement"],"equation"],
  ["Expressions and Equations","Interpret Infinitely Many Solutions","Recognize an identity after simplifying as evidence that every value works.","Review equivalent expressions and variables on both sides.",["linear-equations"],["variables on both sides"],["infinitely many solutions","identity","true statement"],"equation"],
  ["Expressions and Equations","Model a Perimeter Equation","Write and solve an equation from a geometric perimeter relationship.","Review perimeter formulas and expression translation.",["modeling","linear-equations"],["two-step equations","perimeter"],["perimeter","dimension","equation"],"equation"],
  ["Expressions and Equations","Model a Cost Equation","Represent a fixed fee plus a rate with a linear equation.","Review unit rates and two-step equations.",["modeling","linear-equations"],["unit rates","two-step equations"],["fixed fee","rate","total cost"],"equation"],
  ["Expressions and Equations","Model a Distance Equation","Use distance equals rate times time to solve a one-variable situation.","Review multiplication and unit rates.",["modeling","linear-equations"],["unit rates","two-step equations"],["distance","rate","time"],"equation"],
  ["Expressions and Equations","Model Consecutive Integers","Use a variable and nearby expressions to represent consecutive values.","Review variable expressions and addition.",["modeling","linear-equations"],["two-step equations"],["consecutive integers","variable","sum"],"equation"],
  ["Expressions and Equations","Solve Ratio Word Equations","Turn a part-to-part or part-to-whole ratio into an equation with a meaningful variable.","Review ratios and equation translation.",["modeling","linear-equations"],["ratios","two-step equations"],["ratio","part","whole"],"equation"],
  ["Expressions and Equations","Represent Relationships with Tables","Organize paired input and output values to expose a rule.","Review substitution and ordered pairs.",["tables"],["expressions"],["input","output","table"],"table"],
  ["Expressions and Equations","Find a Rule from a Table","Describe a numerical pattern linking each input to its output.","Review operations and input-output tables.",["tables"],["relationship tables"],["rule","input","output"],"table"],
  ["Expressions and Equations","Write an Equation from a Table","Use a table's constant change and starting value to write a linear rule.","Review rules from tables and multiplication patterns.",["tables","linear-equations"],["find table rules"],["linear rule","rate of change","initial value"],"table"],
  ["Expressions and Equations","Understand Equality as Balance","Explain why doing the same operation to both sides preserves an equation.","Review inverse operations and checking solutions.",["equation-reasoning"],["one-step equations"],["equality","balance","equivalent"],"equation"],
  ["Expressions and Equations","Use Properties to Justify Steps","Name basic properties that make algebraic rewrites legitimate.","Review distributive property and equality.",["equation-reasoning"],["simplify expressions"],["commutative property","associative property","distributive property"],"expression"],
  ["Expressions and Equations","Solve Multi-Step Rational Equations","Use clear algebraic steps when decimals or fractions appear in a linear equation.","Review fraction operations, distribution, and checking.",["linear-equations"],["equations with fractions"],["rational coefficient","equivalent equation","solution"],"equation"],
  ["Expressions and Equations","Choose an Efficient Equation Strategy","Select distribution, combining, or inverse operations based on an equation's structure.","Review multi-step equation methods.",["linear-equations","reasoning"],["multi-step equations"],["strategy","structure","inverse operation"],"equation"],
  ["Expressions and Equations","Explain a Solution Path","Communicate why each algebraic move preserves the solution set.","Review equation properties and solution checks.",["math-communication"],["equation reasoning"],["justification","solution set","equivalent"],"equation"],
  ["Expressions and Equations","Estimate Before Solving","Use number sense to predict a reasonable solution before exact algebra.","Review rounding and inverse operations.",["reasoning"],["linear equations"],["estimate","reasonable","solution"],"equation"],
  ["Expressions and Equations","Detect Arithmetic Errors in Algebra","Use substitution and inverse-operation checks to find a likely mistake.","Review checking equation solutions.",["reasoning"],["check equation solutions"],["error analysis","substitution","verification"],"equation"],
  ["Expressions and Equations","Solve a Mixture of Linear Equations","Classify and solve varied linear equations without losing structure.","Review multi-step equations and special solution cases.",["linear-equations"],["multi-step equations","special cases"],["linear equation","solution set","strategy"],"equation"],
  ["Expressions and Equations","Build a Linear Model from Context","Define a variable and create a linear equation that answers a real situation.","Review rate, fixed fee, and equation modeling.",["modeling","linear-equations"],["cost equations","distance equations"],["model","variable","constraint"],"equation"],

  // Functions, lines, and systems (71–91)
  ["Functions and Linear Relationships","Recognize a Function Rule","Decide whether each input is assigned exactly one output.","Review input-output tables and ordered pairs.",["functions"],["relationship tables"],["function","input","output"],"function"],
  ["Functions and Linear Relationships","Use Function Notation","Read and evaluate notation such as f(x) as a named output rule.","Review substitution into expressions.",["functions"],["recognize functions","substitution"],["function notation","domain","output"],"function"],
  ["Functions and Linear Relationships","Identify Domain and Range","List the allowed inputs and resulting outputs of a relation.","Review ordered pairs and function notation.",["functions"],["recognize functions"],["domain","range","relation"],"function"],
  ["Functions and Linear Relationships","Read a Function Table","Use a table to find a function's output, starting value, and pattern.","Review input-output rules.",["functions","tables"],["function notation"],["function table","input","output"],"function"],
  ["Functions and Linear Relationships","Graph Ordered Pairs","Plot and read ordered pairs using horizontal and vertical coordinates.","Review coordinate-plane vocabulary.",["coordinate-plane"],["ordered pairs"],["x-coordinate","y-coordinate","origin"],"graph"],
  ["Functions and Linear Relationships","Recognize Linear Relationships","Identify a constant rate of change in a table, graph, equation, or context.","Review function tables and unit rates.",["linear-functions"],["function tables","unit rates"],["linear","constant rate of change","relationship"],"function"],
  ["Functions and Linear Relationships","Find Rate of Change from a Table","Compute the change in output divided by the change in input.","Review subtraction and unit rates.",["linear-functions"],["recognize linear relationships"],["rate of change","input change","output change"],"slope"],
  ["Functions and Linear Relationships","Find Rate of Change from a Graph","Use two points on a line to calculate rise over run.","Review graphing points and signed number operations.",["linear-functions"],["graph ordered pairs"],["slope","rise","run"],"slope"],
  ["Functions and Linear Relationships","Interpret Positive and Negative Slope","Connect a line's direction to whether output rises or falls as input increases.","Review rate of change and graph reading.",["linear-functions"],["rate from graph"],["positive slope","negative slope","increasing"],"slope"],
  ["Functions and Linear Relationships","Find the y-Intercept","Identify the output when the input is zero in a graph, table, equation, or context.","Review coordinate axes and linear rules.",["linear-functions"],["linear relationships"],["y-intercept","initial value","vertical axis"],"intercept"],
  ["Functions and Linear Relationships","Write y = mx + b from a Table","Use a rate of change and initial value to create a slope-intercept equation.","Review rate of change and y-intercept.",["linear-functions"],["rate from table","y-intercept"],["slope-intercept form","slope","y-intercept"],"linear"],
  ["Functions and Linear Relationships","Graph y = mx + b","Plot the intercept and use slope to graph a linear equation.","Review ordered pairs, slope, and y-intercept.",["linear-functions"],["slope-intercept form"],["slope-intercept form","intercept","slope triangle"],"graph"],
  ["Functions and Linear Relationships","Write an Equation from a Graph","Read a line's slope and intercept to write its equation.","Review slope and graphing linear equations.",["linear-functions"],["graph y=mx+b"],["linear equation","slope","y-intercept"],"linear"],
  ["Functions and Linear Relationships","Compare Two Linear Models","Compare rate of change and initial value across tables, graphs, equations, and contexts.","Review all representations of y = mx + b.",["linear-functions","modeling"],["write linear equations"],["compare","rate of change","initial value"],"linear"],
  ["Functions and Linear Relationships","Model a Linear Situation with a Graph","Graph a contextual linear relationship with labeled axes and sensible scale.","Review units, slope, and intercept.",["linear-modeling"],["graph linear equations"],["scale","rate","initial value"],"graph"],
  ["Functions and Linear Relationships","Interpret a Linear Graph in Context","Explain what slope and intercept mean using the quantities and units in a situation.","Review graph reading and linear modeling.",["linear-modeling"],["model linear situations"],["interpret","slope","context"],"linear"],
  ["Functions and Linear Relationships","Solve Systems by Graphing","Find the intersection point that satisfies two linear equations.","Review graphing y = mx + b and ordered pairs.",["systems"],["graph linear equations"],["system","intersection","solution"],"system"],
  ["Functions and Linear Relationships","Solve Systems by Substitution","Replace a variable using one equation and solve the resulting equation.","Review solving linear equations and function notation.",["systems"],["linear equations"],["substitution","system","solution"],"system"],
  ["Functions and Linear Relationships","Solve Systems by Elimination","Add or subtract equations to remove one variable deliberately.","Review combining like terms and equivalent equations.",["systems"],["linear equations","integer operations"],["elimination","coefficient","system"],"system"],
  ["Functions and Linear Relationships","Interpret System Solutions","Connect one, none, or infinitely many intersections to the two relationships.","Review special solution cases for equations.",["systems"],["solve systems"],["consistent","parallel","coincident"],"system"],
  ["Functions and Linear Relationships","Model a Two-Quantity System","Write a system that represents two related constraints and identify what its solution means.","Review linear models and systems methods.",["systems","modeling"],["solve systems"],["constraint","system","intersection"],"system"],

  // Geometry and transformations (92–126)
  ["Geometry and Transformations","Classify Angles by Measure","Identify acute, right, obtuse, straight, and reflex angle measures.","Review rays, vertices, and degree notation.",["geometry"],["number lines"],["angle","vertex","degree"],"angle"],
  ["Geometry and Transformations","Use Complementary and Supplementary Angles","Find missing measures using sums of 90 or 180 degrees.","Review angle types and simple equations.",["geometry"],["classify angles","one-step equations"],["complementary","supplementary","angle pair"],"angle"],
  ["Geometry and Transformations","Identify Vertical Angles","Use intersecting lines to recognize opposite angles with equal measure.","Review angle vocabulary and equality.",["geometry"],["classify angles"],["vertical angles","intersecting lines","congruent"],"angle"],
  ["Geometry and Transformations","Use Parallel-Line Angle Relationships","Identify corresponding, alternate interior, and same-side interior relationships.","Review angle pairs and parallel-line notation.",["geometry"],["vertical angles"],["parallel lines","transversal","corresponding angles"],"angle"],
  ["Geometry and Transformations","Solve Angle Equations from a Diagram","Translate angle relationships into equations and solve for an unknown.","Review angle sums and two-step equations.",["geometry","linear-equations"],["parallel-line angles","two-step equations"],["angle equation","measure","transversal"],"angle"],
  ["Geometry and Transformations","Apply the Triangle Angle Sum","Use the fact that interior angles of a triangle total 180 degrees.","Review supplementary angles and addition.",["geometry"],["complementary and supplementary angles"],["triangle","interior angle","angle sum"],"triangle"],
  ["Geometry and Transformations","Find Exterior Angles of Triangles","Relate an exterior angle to the two remote interior angles.","Review triangle angle sum and linear pairs.",["geometry"],["triangle angle sum"],["exterior angle","remote interior","linear pair"],"triangle"],
  ["Geometry and Transformations","Classify Triangles by Sides and Angles","Use side lengths and angle measures to classify a triangle accurately.","Review angle types and triangle vocabulary.",["geometry"],["triangle angle sum"],["scalene","isosceles","equilateral"],"triangle"],
  ["Geometry and Transformations","Apply the Pythagorean Theorem","Find a missing leg or hypotenuse in a right triangle using a² + b² = c².","Review square numbers and square roots.",["pythagorean-theorem"],["square roots","right triangles"],["leg","hypotenuse","Pythagorean theorem"],"pythagorean"],
  ["Geometry and Transformations","Check Whether a Triangle Is Right","Use the converse of the Pythagorean Theorem to classify a triangle from side lengths.","Review squares and the Pythagorean Theorem.",["pythagorean-theorem"],["apply Pythagorean theorem"],["converse","right triangle","hypotenuse"],"pythagorean"],
  ["Geometry and Transformations","Find Distance on a Coordinate Plane","Use horizontal, vertical, or right-triangle reasoning to find distance between points.","Review coordinate-plane graphing and square roots.",["coordinate-geometry"],["Pythagorean theorem","graph ordered pairs"],["distance","coordinate plane","horizontal change"],"pythagorean"],
  ["Geometry and Transformations","Find Midpoint on a Coordinate Plane","Average corresponding coordinates to locate a segment's midpoint.","Review coordinate pairs and arithmetic means.",["coordinate-geometry"],["graph ordered pairs"],["midpoint","endpoint","coordinate"],"coordinate"],
  ["Geometry and Transformations","Describe Translations","Move every point by the same horizontal and vertical change.","Review coordinate pairs and signed addition.",["transformations"],["coordinate plane"],["translation","image","preimage"],"transform"],
  ["Geometry and Transformations","Describe Reflections","Reflect figures across an axis while preserving distance from that axis.","Review coordinate axes and symmetry.",["transformations"],["translations"],["reflection","line of reflection","congruent"],"transform"],
  ["Geometry and Transformations","Describe Rotations","Rotate a figure around a center by a stated angle and direction.","Review right angles and coordinate-plane position.",["transformations"],["reflections"],["rotation","center of rotation","clockwise"],"transform"],
  ["Geometry and Transformations","Dilate Figures from the Origin","Multiply coordinates by a scale factor to enlarge or reduce a figure.","Review multiplication by fractions and coordinate pairs.",["transformations","similarity"],["coordinate plane","fractions"],["dilation","scale factor","center"],"transform"],
  ["Geometry and Transformations","Identify Congruent Transformations","Explain why translations, reflections, and rotations preserve lengths and angle measures.","Review basic transformations and congruent figures.",["transformations"],["translations","reflections","rotations"],["congruent","rigid motion","invariant"],"transform"],
  ["Geometry and Transformations","Identify Similar Figures","Recognize figures with equal corresponding angles and proportional corresponding sides.","Review ratios and transformations.",["similarity"],["dilations","ratios"],["similar","corresponding sides","proportional"],"similarity"],
  ["Geometry and Transformations","Use Similarity Scale Factors","Find unknown side lengths using proportional corresponding sides.","Review equivalent ratios and similar figures.",["similarity"],["identify similar figures"],["scale factor","corresponding sides","proportion"],"similarity"],
  ["Geometry and Transformations","Apply Similarity to Indirect Measurement","Use similar triangles to calculate an inaccessible height or distance.","Review scale factors and proportions.",["similarity","modeling"],["similarity scale factors"],["indirect measurement","similar triangles","proportion"],"similarity"],
  ["Geometry and Transformations","Understand Angle-Angle Similarity","Use two matching angle measures to establish triangle similarity.","Review triangle angle sums and corresponding angles.",["similarity"],["similar figures"],["angle-angle similarity","corresponding","triangle"],"similarity"],
  ["Geometry and Transformations","Find Area of Composite Figures","Decompose or subtract familiar shapes to determine total area.","Review rectangle and triangle area formulas.",["area"],["fractions","geometry basics"],["composite figure","decompose","area"],"area"],
  ["Geometry and Transformations","Find Area of Triangles","Use one-half base times height, choosing a perpendicular height.","Review rectangle area and multiplication by one-half.",["area"],["area basics"],["base","height","square units"],"area"],
  ["Geometry and Transformations","Find Area of Parallelograms","Use base times perpendicular height rather than a slanted side.","Review rectangle area and perpendicular lines.",["area"],["area of triangles"],["parallelogram","base","perpendicular height"],"area"],
  ["Geometry and Transformations","Find Area of Trapezoids","Average the parallel bases and multiply by the height to find trapezoid area.","Review fractions and parallelogram area.",["area"],["area of parallelograms"],["trapezoid","parallel bases","height"],"area"],
  ["Geometry and Transformations","Find Circumference of Circles","Use pi times diameter or two pi times radius to measure distance around a circle.","Review radius, diameter, and multiplication.",["circles"],["decimal multiplication"],["circumference","radius","diameter"],"circle"],
  ["Geometry and Transformations","Find Area of Circles","Use pi times radius squared and report square units.","Review exponents and circle vocabulary.",["circles"],["circumference","square numbers"],["area","radius","pi"],"circle"],
  ["Geometry and Transformations","Use Volume of Rectangular Prisms","Multiply length, width, and height to find cubic units in a prism.","Review multiplication and area of rectangles.",["volume"],["area basics"],["volume","rectangular prism","cubic unit"],"volume"],
  ["Geometry and Transformations","Use Volume of Cylinders","Multiply base area by height, keeping pi and cubic units meaningful.","Review circle area and prism volume.",["volume"],["area of circles","volume of prisms"],["cylinder","base area","volume"],"volume"],
  ["Geometry and Transformations","Use Volume of Cones","Relate a cone's volume to one-third of a matching cylinder's volume.","Review cylinder volume and fractions.",["volume"],["volume of cylinders"],["cone","one-third","base area"],"volume"],
  ["Geometry and Transformations","Use Volume of Spheres","Apply the sphere-volume formula with a radius and sensible approximation.","Review powers, fractions, and pi.",["volume"],["volume of cones"],["sphere","radius","cubic units"],"volume"],
  ["Geometry and Transformations","Solve Composite Volume Problems","Add or subtract component volumes while avoiding overlap or missing regions.","Review volume formulas for solids.",["volume","modeling"],["volumes of solids"],["composite solid","component","overlap"],"volume"],
  ["Geometry and Transformations","Use the Pythagorean Theorem in Three Dimensions","Find a diagonal through a rectangular prism using two right triangles.","Review prism dimensions and the Pythagorean Theorem.",["volume","pythagorean-theorem"],["Pythagorean theorem","volume of prisms"],["space diagonal","right triangle","dimension"],"pythagorean"],
  ["Geometry and Transformations","Choose a Geometry Formula","Identify the shape, known measures, and target measure before selecting a formula.","Review area, volume, and circle formulas.",["geometry","reasoning"],["geometry formulas"],["formula","known quantity","unknown"],"geometry"],
  ["Geometry and Transformations","Justify a Geometric Solution","Write a short chain of statements that connects a theorem or formula to a result.","Review geometry vocabulary and equation justification.",["geometry","math-communication"],["geometry formulas","equation reasoning"],["theorem","justification","conclusion"],"geometry"],

  // Data, statistics, and probability (127–143)
  ["Data, Statistics, and Probability","Describe Populations and Samples","Distinguish a full population from the smaller group measured to learn about it.","Review data-collection vocabulary.",["statistics"],["ratios"],["population","sample","survey"],"data"],
  ["Data, Statistics, and Probability","Recognize Random Samples","Explain why a random sample can reduce predictable selection bias.","Review populations and samples.",["statistics"],["populations and samples"],["random sample","bias","representative"],"data"],
  ["Data, Statistics, and Probability","Read Dot Plots and Histograms","Extract frequencies, clusters, gaps, and overall shape from a display.","Review number lines and counting frequency.",["data-displays"],["populations and samples"],["dot plot","histogram","frequency"],"data"],
  ["Data, Statistics, and Probability","Create a Frequency Table","Organize repeated values or intervals with accurate counts.","Review tally marks and ordered data.",["data-displays"],["data displays"],["frequency table","interval","tally"],"data"],
  ["Data, Statistics, and Probability","Find Mean as Fair Share","Calculate mean and interpret it as an equal-share balance point.","Review addition and division with rational numbers.",["center"],["frequency tables"],["mean","fair share","average"],"mean"],
  ["Data, Statistics, and Probability","Find Median and Mode","Use ordered data to locate the middle value and the most frequent value.","Review ordering rational numbers and frequency.",["center"],["frequency tables"],["median","mode","ordered data"],"data"],
  ["Data, Statistics, and Probability","Find Mean Absolute Deviation","Measure average distance from the mean to describe spread.","Review mean and absolute value.",["variability"],["mean","absolute value"],["mean absolute deviation","deviation","variability"],"data"],
  ["Data, Statistics, and Probability","Compare Centers and Spread","Compare two data sets using a center measure and a variability measure.","Review mean, median, and mean absolute deviation.",["variability"],["mean absolute deviation","median"],["center","spread","distribution"],"data"],
  ["Data, Statistics, and Probability","Interpret Box Plots","Read minimum, quartiles, median, and maximum from a box-and-whisker plot.","Review median and ordered data.",["data-displays"],["median"],["quartile","interquartile range","box plot"],"data"],
  ["Data, Statistics, and Probability","Compare Box Plots","Compare median, spread, and overlap across two box plots.","Review box-plot features and data comparison.",["data-displays","variability"],["interpret box plots"],["median","interquartile range","overlap"],"data"],
  ["Data, Statistics, and Probability","Identify Bivariate Data","Recognize paired numerical observations and name the two variables.","Review ordered pairs and data tables.",["bivariate-data"],["coordinate plane"],["bivariate data","variable","ordered pair"],"scatter"],
  ["Data, Statistics, and Probability","Graph Scatter Plots","Plot paired data and describe apparent association without claiming cause.","Review coordinate-plane graphing.",["bivariate-data"],["identify bivariate data"],["scatter plot","association","outlier"],"scatter"],
  ["Data, Statistics, and Probability","Draw a Line of Fit","Place a reasonable trend line through a scatter plot to model its direction.","Review slope and scatter plots.",["bivariate-data","linear-functions"],["graph scatter plots","slope"],["line of fit","trend","residual"],"scatter"],
  ["Data, Statistics, and Probability","Interpret a Line of Fit","Use a fit line to estimate values within a data range and discuss uncertainty.","Review linear equations and scatter plots.",["bivariate-data"],["draw line of fit"],["interpolation","extrapolation","prediction"],"scatter"],
  ["Data, Statistics, and Probability","Distinguish Association from Causation","Explain why a pattern in paired data does not automatically prove one variable causes another.","Review scatter plots and possible confounding factors.",["statistics","reasoning"],["interpret line of fit"],["association","causation","confounding variable"],"data"],
  ["Data, Statistics, and Probability","Find Simple Probability","Express favorable outcomes divided by total equally likely outcomes.","Review fractions and sample spaces.",["probability"],["fractions"],["probability","outcome","sample space"],"probability"],
  ["Data, Statistics, and Probability","Use Complementary Probability","Find the chance an event does not happen by subtracting its probability from one.","Review simple probability and fraction subtraction.",["probability"],["simple probability"],["complement","event","certain"],"probability"],
  ["Data, Statistics, and Probability","Compare Experimental and Theoretical Probability","Compare observed trial results with an equally likely prediction and explain why repeated trials tend to stabilize.","Review simple probability, fractions, and frequency tables.",["probability","statistics"],["simple probability","frequency tables"],["experimental probability","theoretical probability","trial"],"probability"],

  // Algebra I bridge (144–169)
  ["Algebra I Bridge","Solve Inequalities with Addition and Subtraction","Use inverse operations and show all solutions with an inequality graph.","Review one-step equations and number-line graphs.",["inequalities"],["one-step equations"],["inequality","solution set","open circle"],"inequality"],
  ["Algebra I Bridge","Solve Inequalities with Multiplication and Division","Reverse the inequality sign when multiplying or dividing by a negative.","Review signed number operations and one-step inequalities.",["inequalities"],["integer operations","one-step inequalities"],["inequality","negative factor","reverse"],"inequality"],
  ["Algebra I Bridge","Graph Compound Inequalities","Represent intersections and unions of two inequality conditions on a number line.","Review inequality graphs and logical words.",["inequalities"],["solve inequalities"],["compound inequality","and","or"],"inequality"],
  ["Algebra I Bridge","Model a Constraint with an Inequality","Translate a limit, minimum, or maximum into an inequality with units.","Review expression translation and inequality symbols.",["inequalities","modeling"],["solve inequalities"],["constraint","at most","at least"],"inequality"],
  ["Algebra I Bridge","Understand Linear Forms Beyond y = mx + b","Recognize slope-intercept, point-slope, and standard form as equivalent ways to describe a line.","Review slope and linear equations.",["linear-functions"],["slope-intercept form"],["point-slope form","standard form","slope-intercept form"],"linear"],
  ["Algebra I Bridge","Write a Line Through a Point with a Known Slope","Use a point and slope to build a line equation and verify it.","Review slope-intercept form and substitution.",["linear-functions"],["linear forms","slope"],["point-slope form","point","slope"],"linear"],
  ["Algebra I Bridge","Find a Line Through Two Points","Calculate slope from two points and write an equation for the line.","Review slope and y-intercept.",["linear-functions"],["rate from graph"],["two-point form","slope","intercept"],"linear"],
  ["Algebra I Bridge","Recognize Parallel and Perpendicular Slopes","Use equal slopes for parallel lines and negative reciprocal slopes for perpendicular lines.","Review slope as rise over run and reciprocal numbers.",["coordinate-geometry"],["slope","reciprocals"],["parallel","perpendicular","negative reciprocal"],"slope"],
  ["Algebra I Bridge","Use Function Rules with Multiple Representations","Move between a function's rule, table, graph, and verbal description.","Review function notation and linear representations.",["functions"],["function notation","linear models"],["representation","function rule","equivalent"],"function"],
  ["Algebra I Bridge","Evaluate Piecewise Functions","Choose the rule whose condition matches the input before evaluating.","Review inequalities and function notation.",["functions"],["function notation","inequalities"],["piecewise function","condition","interval"],"function"],
  ["Algebra I Bridge","Recognize Nonlinear Patterns","Identify when a relationship's rate of change is not constant.","Review linear relationships and tables.",["functions"],["linear relationships"],["nonlinear","rate of change","pattern"],"function"],
  ["Algebra I Bridge","Explore Quadratic Growth Patterns","Use tables and graphs to recognize a constant second difference in simple quadratic patterns.","Review exponents and nonlinear patterns.",["quadratics"],["nonlinear patterns","exponents"],["quadratic","second difference","parabola"],"quadratic"],
  ["Algebra I Bridge","Graph Simple Parabolas","Plot values of a basic squared rule and identify its vertex and symmetry.","Review coordinate graphing and square numbers.",["quadratics"],["quadratic growth patterns"],["parabola","vertex","axis of symmetry"],"quadratic"],
  ["Algebra I Bridge","Expand Binomial Products with Area Models","Use a rectangle model to multiply two binomials and connect each region to a term.","Review distributive property and area.",["polynomials"],["distributive property","area"],["binomial","product","area model"],"polynomial"],
  ["Algebra I Bridge","Multiply Binomials Algebraically","Apply distribution systematically to multiply two binomials without skipping terms.","Review area-model multiplication and like terms.",["polynomials"],["expand binomials"],["FOIL","binomial","like terms"],"polynomial"],
  ["Algebra I Bridge","Factor Simple Trinomials","Reverse binomial multiplication to factor x² + bx + c when integer factors exist.","Review multiplication facts and binomial products.",["polynomials","quadratics"],["multiply binomials"],["trinomial","factor","product-sum"],"polynomial"],
  ["Algebra I Bridge","Solve Simple Quadratic Equations by Factoring","Set a factored expression equal to zero and use the zero-product property.","Review factoring trinomials and linear equations.",["quadratics"],["factor simple trinomials"],["zero-product property","factor","root"],"quadratic"],
  ["Algebra I Bridge","Connect Square Roots to Quadratic Solutions","Solve x² = k by taking positive and negative square roots when appropriate.","Review square roots and equation balance.",["quadratics"],["square roots"],["principal square root","square equation","solution pair"],"quadratic"],
  ["Algebra I Bridge","Use Exponent Laws in Algebraic Expressions","Simplify variable powers while stating the conditions under which each rule applies.","Review integer exponent laws and variables.",["exponents","polynomials"],["exponent laws"],["exponent law","variable base","simplify"],"exponent"],
  ["Algebra I Bridge","Simplify Rational Expressions","Factor and cancel common factors in simple algebraic fractions while honoring restrictions.","Review fraction simplification and factoring.",["rational-expressions"],["factor greatest common factor","fractions"],["rational expression","factor","restriction"],"expression"],
  ["Algebra I Bridge","Interpret Residuals from a Fit Line","Use observed minus predicted values to judge how well a line models a point.","Review lines of fit and subtraction of signed values.",["bivariate-data"],["line of fit"],["residual","observed value","predicted value"],"scatter"],
  ["Algebra I Bridge","Compare Linear and Exponential Change","Distinguish additive constant change from multiplicative constant factor change.","Review linear tables, ratios, and exponents.",["functions","exponents"],["linear relationships","powers"],["linear growth","exponential growth","common ratio"],"function"],
  ["Algebra I Bridge","Read Exponential Tables","Identify an initial value and repeated multiplier from an exponential table.","Review multiplication patterns and powers.",["exponential-functions"],["compare linear and exponential change"],["initial value","growth factor","exponential"],"function"],
  ["Algebra I Bridge","Model Percent Growth and Decay","Represent repeated percent change with a multiplier and exponent.","Review percent conversion and exponential tables.",["exponential-functions"],["read exponential tables","percents"],["growth factor","decay factor","percent change"],"scientific"],
  ["Algebra I Bridge","Plan a Multi-Step Modeling Solution","Choose variables, representations, operations, and checks for a rich quantitative situation.","Review equations, functions, geometry, and data tools.",["modeling","reasoning"],["linear models","geometry formulas","data displays"],["assumption","representation","validation"],"model"],
  ["Algebra I Bridge","Synthesize Grade-8 Algebra and Geometry","Connect equations, functions, transformations, and measurement in one coherent mathematical explanation.","Review the major Grade-8 strands and solution checks.",["synthesis","math-communication"],["linear models","transformations","volume"],["synthesis","justify","model"],"model"]
];

const exampleBuilders = {
  integer: (n) => [
    { prompt: `Evaluate ${n % 2 ? "-14 + 9 - 6" : "8 - 15 + 11"}.`, steps: ["Place the signed terms in the order shown.", "Combine two terms using integer addition.", "Combine the remaining value and state its sign."], answer: n % 2 ? "-11" : "4" },
    { prompt: "Find the absolute value of -23 and explain what it measures.", steps: ["Locate -23 on a number line.", "Measure its distance from zero.", "Report a nonnegative distance."], answer: "23; it is 23 units from zero." }
  ],
  fraction: () => [
    { prompt: "Add 3/4 + 5/6.", steps: ["Use 12 as a common denominator.", "Rewrite the fractions as 9/12 and 10/12.", "Add numerators and simplify if possible."], answer: "19/12, or 1 7/12" },
    { prompt: "Find 2/3 of 3/5.", steps: ["Write 'of' as multiplication.", "Multiply numerators and denominators.", "Check whether the result simplifies."], answer: "2/5" }
  ],
  decimal: () => [
    { prompt: "Calculate 4.68 + 0.795.", steps: ["Align decimal points.", "Add each place value from right to left.", "Place the decimal point in the aligned column."], answer: "5.475" },
    { prompt: "Calculate 7.2 ÷ 3.", steps: ["Interpret 7.2 as 72 tenths.", "Divide 72 tenths into 3 equal groups.", "Write the quotient with its decimal place."], answer: "2.4" }
  ],
  ratio: () => [
    { prompt: "A recipe uses 3 cups of flour for 8 muffins. How many cups are needed for 24 muffins?", steps: ["Notice that 24 is three times 8.", "Apply the same scale factor to the flour amount.", "State the result with units."], answer: "9 cups" },
    { prompt: "Find the unit rate for 180 miles in 3 hours.", steps: ["Write distance divided by time.", "Divide 180 by 3.", "Attach miles per hour as the unit."], answer: "60 miles per hour" }
  ],
  percent: () => [
    { prompt: "Write 35% as a decimal and a fraction in simplest form.", steps: ["Read percent as parts per 100.", "Divide 35 by 100 for decimal form.", "Reduce 35/100 by a common factor."], answer: "0.35 and 7/20" },
    { prompt: "Find 15% of 80.", steps: ["Convert 15% to 0.15.", "Multiply 0.15 by 80.", "Interpret the product as the requested part."], answer: "12" }
  ],
  number: () => [
    { prompt: "Classify -7/4 in the smallest listed set: natural, whole, integer, or rational.", steps: ["Recognize the number as a ratio of two integers.", "Check whether it is an integer or whole number.", "Choose the most specific true classification from the list."], answer: "Rational" },
    { prompt: "Place -1.25, -5/4, and -1.2 in order from least to greatest.", steps: ["Rewrite -5/4 as -1.25.", "Compare positions on the negative side of zero.", "Use equality when two values match."], answer: "-1.25 = -5/4 < -1.2" }
  ],
  root: () => [
    { prompt: "Estimate √30 between consecutive integers.", steps: ["Find nearby perfect squares: 25 and 36.", "Match 25 = 5² and 36 = 6².", "Place √30 between their roots."], answer: "5 < √30 < 6" },
    { prompt: "Find ∛125.", steps: ["Look for a number multiplied by itself three times.", "Test 5 × 5 × 5.", "Confirm that the product is 125."], answer: "5" }
  ],
  exponent: () => [
    { prompt: "Simplify x³ · x⁵.", steps: ["Notice that the base is the same.", "Add exponents when multiplying like bases.", "Write one power with base x."], answer: "x⁸" },
    { prompt: "Simplify y⁷ ÷ y², where y is not zero.", steps: ["Use the quotient-of-powers rule.", "Subtract the denominator exponent from the numerator exponent.", "Keep the same base."], answer: "y⁵" }
  ],
  scientific: () => [
    { prompt: "Write 4,500,000 in scientific notation.", steps: ["Move the decimal after the first nonzero digit.", "Count six places moved left.", "Use a positive power of ten for the shift."], answer: "4.5 × 10⁶" },
    { prompt: "Evaluate (3 × 10⁴)(2 × 10³).", steps: ["Multiply the coefficients.", "Add exponents for powers of ten with the same base.", "Check that the coefficient is between 1 and 10."], answer: "6 × 10⁷" }
  ],
  expression: () => [
    { prompt: "Simplify 3(2x - 5) + 4x.", steps: ["Distribute 3 to both terms in parentheses.", "Combine the x terms.", "Keep the constant term with its sign."], answer: "10x - 15" },
    { prompt: "Evaluate 2a² - 3 when a = -4.", steps: ["Substitute -4 for a using parentheses.", "Square before multiplying by 2.", "Subtract 3."], answer: "29" }
  ],
  equation: () => [
    { prompt: "Solve 3x - 7 = 20.", steps: ["Add 7 to both sides.", "Divide both sides by 3.", "Substitute the result into the original equation to check."], answer: "x = 9" },
    { prompt: "Solve 4(x - 2) = 2x + 10.", steps: ["Distribute 4 on the left.", "Collect variable terms on one side and constants on the other.", "Divide by the remaining coefficient."], answer: "x = 9" }
  ],
  table: () => [
    { prompt: "A table has x values 0, 1, 2 and y values 5, 8, 11. Write its linear rule.", steps: ["Find the constant output change of 3.", "Read the output 5 when x is zero.", "Combine rate and initial value in a rule."], answer: "y = 3x + 5" },
    { prompt: "Use y = 4x - 1 to find the output when x = 6.", steps: ["Substitute 6 for x.", "Multiply 4 by 6.", "Subtract 1."], answer: "23" }
  ],
  function: () => [
    { prompt: "For f(x) = 2x + 3, find f(-2).", steps: ["Replace x with -2.", "Multiply 2 by -2.", "Add 3."], answer: "-1" },
    { prompt: "Does {(1, 4), (2, 4), (1, 6)} define a function?", steps: ["Look at each input value.", "Notice that input 1 is paired with two outputs.", "Apply the one-output-per-input definition."], answer: "No; input 1 has outputs 4 and 6." }
  ],
  graph: () => [
    { prompt: "Graph y = -2x + 3 using its intercept and slope.", steps: ["Plot the y-intercept at (0, 3).", "Use slope -2/1: go down 2 and right 1.", "Draw the line through the points."], answer: "A line through (0, 3) and (1, 1)." },
    { prompt: "Find the distance from (2, 1) to (2, 8).", steps: ["Notice that both points have the same x-coordinate.", "Subtract y-values to find the vertical change.", "Take the positive length."], answer: "7 units" }
  ],
  slope: () => [
    { prompt: "Find the slope through (1, 2) and (4, 11).", steps: ["Find rise: 11 - 2.", "Find run: 4 - 1.", "Divide rise by run."], answer: "3" },
    { prompt: "A line falls 8 units while moving 2 units right. Find its slope.", steps: ["Treat a fall as a negative rise.", "Use run = 2.", "Divide -8 by 2."], answer: "-4" }
  ],
  intercept: () => [
    { prompt: "Find the y-intercept of y = 5x - 9.", steps: ["Set x equal to zero.", "Evaluate the expression.", "Write the intercept as a point."], answer: "(0, -9)" },
    { prompt: "A taxi starts at $4 and adds $2 per mile. Identify the y-intercept.", steps: ["Identify the amount at zero miles.", "Connect zero miles to x = 0.", "State the initial cost."], answer: "$4, or (0, 4)" }
  ],
  linear: () => [
    { prompt: "Write the equation of a line with slope 3 and y-intercept -2.", steps: ["Start with y = mx + b.", "Replace m with 3.", "Replace b with -2."], answer: "y = 3x - 2" },
    { prompt: "Compare y = 2x + 5 and y = 2x - 1.", steps: ["Compare slopes first.", "Compare y-intercepts next.", "Describe the relationship of the two lines."], answer: "They are parallel; both have slope 2, with intercepts 5 and -1." }
  ],
  system: () => [
    { prompt: "Solve y = x + 2 and y = 8 - x.", steps: ["Set the two expressions for y equal.", "Solve x + 2 = 8 - x.", "Substitute x = 3 into either equation."], answer: "(3, 5)" },
    { prompt: "Solve x + y = 10 and x - y = 2 by elimination.", steps: ["Add the equations to eliminate y.", "Solve 2x = 12.", "Substitute x = 6 into one original equation."], answer: "(6, 4)" }
  ],
  angle: () => [
    { prompt: "Two supplementary angles measure (3x + 10)° and (2x - 5)°. Find x.", steps: ["Set their sum equal to 180.", "Combine like terms and constants.", "Divide by the coefficient of x."], answer: "x = 35" },
    { prompt: "One angle in a complementary pair is 37°. Find the other.", steps: ["Use the complementary sum of 90°.", "Subtract the known angle.", "State the missing measure."], answer: "53°" }
  ],
  triangle: () => [
    { prompt: "A triangle has angles 48° and 67°. Find the third angle.", steps: ["Use the 180° triangle angle sum.", "Add the known angles.", "Subtract their sum from 180°."], answer: "65°" },
    { prompt: "An exterior angle is 130° and one remote interior angle is 54°. Find the other remote interior angle.", steps: ["Set the exterior angle equal to the remote interior sum.", "Subtract 54° from 130°.", "State the remaining angle."], answer: "76°" }
  ],
  pythagorean: () => [
    { prompt: "Find the hypotenuse of a right triangle with legs 6 and 8.", steps: ["Substitute into a² + b² = c².", "Add 36 and 64.", "Take the positive square root."], answer: "10" },
    { prompt: "Do side lengths 5, 12, and 13 form a right triangle?", steps: ["Use 13 as the longest side.", "Compare 5² + 12² with 13².", "Apply the converse if the values match."], answer: "Yes; 25 + 144 = 169 = 13²." }
  ],
  coordinate: () => [
    { prompt: "Find the midpoint of (-2, 5) and (6, 9).", steps: ["Average the x-coordinates.", "Average the y-coordinates.", "Write the ordered-pair midpoint."], answer: "(2, 7)" },
    { prompt: "Find the horizontal distance from (-4, 3) to (5, 3).", steps: ["Notice that y is unchanged.", "Subtract x-coordinates: 5 - (-4).", "Report a positive distance."], answer: "9 units" }
  ],
  transform: () => [
    { prompt: "Translate A(2, -1) by (x + 4, y - 3).", steps: ["Add 4 to the x-coordinate.", "Subtract 3 from the y-coordinate.", "Name the image point."], answer: "A′(6, -4)" },
    { prompt: "Reflect B(-3, 5) across the y-axis.", steps: ["Keep the y-coordinate unchanged.", "Change the sign of the x-coordinate.", "Write the reflected point."], answer: "B′(3, 5)" }
  ],
  similarity: () => [
    { prompt: "A 4-by-6 rectangle is dilated by scale factor 1.5. Find its new dimensions.", steps: ["Multiply 4 by 1.5.", "Multiply 6 by 1.5.", "Keep the same shape ratio."], answer: "6 by 9" },
    { prompt: "Similar triangles have corresponding sides 5 and 8; the larger matching side is 20. Find the other larger side.", steps: ["Find the scale factor 20 ÷ 5.", "Apply that factor to 8.", "State the corresponding length."], answer: "32" }
  ],
  area: () => [
    { prompt: "Find the area of a triangle with base 12 cm and height 7 cm.", steps: ["Use A = 1/2bh.", "Multiply 12 by 7.", "Take one-half and include square units."], answer: "42 cm²" },
    { prompt: "Find the area of a parallelogram with base 9 m and perpendicular height 4 m.", steps: ["Choose the perpendicular height, not a slanted side.", "Use A = bh.", "Multiply and label square units."], answer: "36 m²" }
  ],
  circle: () => [
    { prompt: "Find the circumference of a circle with radius 5 cm in terms of pi.", steps: ["Use C = 2πr.", "Substitute r = 5.", "Multiply the numerical factors."], answer: "10π cm" },
    { prompt: "Find the area of a circle with radius 4 m in terms of pi.", steps: ["Use A = πr².", "Square the radius.", "Multiply by π and include square units."], answer: "16π m²" }
  ],
  volume: () => [
    { prompt: "Find the volume of a rectangular prism measuring 3 cm by 4 cm by 10 cm.", steps: ["Use V = lwh.", "Multiply the three dimensions.", "Report cubic units."], answer: "120 cm³" },
    { prompt: "Find the volume of a cylinder with radius 3 cm and height 8 cm in terms of pi.", steps: ["Find base area πr².", "Multiply the base area by height.", "Keep pi and cubic units."], answer: "72π cm³" }
  ],
  geometry: () => [
    { prompt: "A rectangle is 9 cm by 4 cm. Find its perimeter and area.", steps: ["Use 2l + 2w for perimeter.", "Use lw for area.", "Label the two results with different units."], answer: "Perimeter 26 cm; area 36 cm²." },
    { prompt: "Explain why a height for area must be perpendicular to the base.", steps: ["Identify the base as a chosen side.", "Identify height as the shortest perpendicular distance.", "Connect perpendicular distance to the area formula."], answer: "The formula uses the perpendicular distance between bases, not a slanted side." }
  ],
  data: () => [
    { prompt: "Find the mean of 4, 6, 8, 10, 12.", steps: ["Add all five values.", "Divide the total by 5.", "Interpret the result as the balance point."], answer: "8" },
    { prompt: "A data set is 2, 3, 3, 5, 9. Find its median and mode.", steps: ["Confirm the values are in order.", "Locate the middle of five values.", "Identify the value occurring most often."], answer: "Median 3; mode 3." }
  ],
  mean: () => [
    { prompt: "Find the mean of 7, 9, 10, and 14.", steps: ["Add the four values.", "Divide the total by 4.", "State the average."], answer: "10" },
    { prompt: "Find the mean absolute deviation of 2, 4, 6 around mean 4.", steps: ["Find distances from 4: 2, 0, and 2.", "Add the absolute deviations.", "Divide by the number of values."], answer: "4/3, or about 1.33" }
  ],
  scatter: () => [
    { prompt: "A fit line predicts 18 when the observed value is 21. Find the residual.", steps: ["Use observed minus predicted.", "Subtract 18 from 21.", "Interpret the positive sign."], answer: "3; the point is 3 units above the line." },
    { prompt: "A scatter plot rises from left to right with points close to a line. Describe the association.", steps: ["Observe the direction as x increases.", "Observe the clustering near a line.", "Use association language without claiming cause."], answer: "A strong positive linear association." }
  ],
  probability: () => [
    { prompt: "A bag has 3 red, 5 blue, and 2 green counters. Find P(blue).", steps: ["Count total equally likely counters.", "Count favorable blue counters.", "Write and simplify favorable over total."], answer: "5/10 = 1/2" },
    { prompt: "If P(rain) = 0.3, find P(no rain).", steps: ["Identify no rain as the complement.", "Subtract 0.3 from 1.", "State the complementary probability."], answer: "0.7" }
  ],
  inequality: () => [
    { prompt: "Solve -3x > 12.", steps: ["Divide both sides by -3.", "Reverse the inequality because the divisor is negative.", "Write the solution set."], answer: "x < -4" },
    { prompt: "Solve 2x + 5 ≤ 17.", steps: ["Subtract 5 from both sides.", "Divide both sides by 2.", "Graph with a closed circle at the boundary."], answer: "x ≤ 6" }
  ],
  quadratic: () => [
    { prompt: "Solve x² = 49.", steps: ["Recognize that both 7 and -7 square to 49.", "Take positive and negative square roots.", "Check both values in the original equation."], answer: "x = 7 or x = -7" },
    { prompt: "Factor x² + 5x + 6.", steps: ["Find two numbers with product 6.", "Choose the pair whose sum is 5.", "Write the two binomial factors."], answer: "(x + 2)(x + 3)" }
  ],
  polynomial: () => [
    { prompt: "Expand (x + 3)(x + 4).", steps: ["Distribute x across the second binomial.", "Distribute 3 across the second binomial.", "Combine the resulting terms."], answer: "x² + 7x + 12" },
    { prompt: "Factor x² + 7x + 12.", steps: ["Find factor pairs of 12.", "Select the pair that adds to 7.", "Write the binomial product."], answer: "(x + 3)(x + 4)" }
  ],
  model: () => [
    { prompt: "A club charges $12 to join and $4 per meeting. Write a cost model for m meetings.", steps: ["Define m as the number of meetings.", "Identify $4m as the variable cost.", "Add the one-time joining fee."], answer: "C = 4m + 12" },
    { prompt: "A result gives -2.5 students. Decide how to report it.", steps: ["Check the context and units.", "Recognize that a count cannot be negative or fractional here.", "Revisit assumptions or state that the model has no practical solution."], answer: "No practical student count; the result signals a modeling or constraint issue." }
  ]
};

function explanationFor({ title, objective, review, vocabulary, skillTags }) {
  const [a, b, c] = vocabulary;
  return [
    `${title} focuses on one decision: ${objective.toLowerCase()} The key vocabulary is ${a}, ${b}, and ${c}; use those words to describe the quantities or structure before calculating. A correct method starts by identifying what is known, what is changing, and what the lesson is asking you to determine.`,
    `Build from prior knowledge: ${review} Work in small, visible steps, keeping equal quantities balanced, preserving units, and using diagrams, tables, or symbols only when they clarify the relationship. The tag ${skillTags[0]} signals the central representation to inspect rather than a shortcut to memorize.`,
    `After finding a result, check that it fits the original situation. Substitute into an equation when possible, estimate size and sign, or compare a graph or model to the stated relationship. Explain the check with ${a} or ${b} language so the answer includes mathematical reasoning, not only a final number.`
  ];
}

function makeLesson([unit, title, objective, review, skill, prerequisites, vocabulary, kind], index) {
  const build = exampleBuilders[kind] || exampleBuilders.model;
  return {
    unit,
    title,
    objective,
    review,
    skillTags: [skill, `grade-8-sequence-${String(index + 1).padStart(3, "0")}`],
    prerequisites,
    vocabulary,
    explanation: explanationFor({ title, objective, review, vocabulary, skillTags: [skill] }),
    examples: build(index)
  };
}

export const mathSequence = rows.map(makeLesson);

if (mathSequence.length !== 169) {
  throw new Error(`mathSequence must contain 169 lessons; found ${mathSequence.length}.`);
}
if (new Set(mathSequence.map(({ title }) => title)).size !== mathSequence.length) {
  throw new Error("mathSequence lesson titles must be unique.");
}
