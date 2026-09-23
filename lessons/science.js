export const scienceLessons = [
  {
    id: 'science-net-force-acceleration',
    grade: 8,
    subject: 'Science',
    title: 'Use net force to predict acceleration',
    objective: 'Combine forces along one line and use F = ma to calculate an object’s acceleration.',
    learn: [
      'A force is a push or pull on an object. An object may have several forces acting on it at once, so one force alone does not tell the whole story. Net force means the combined effect of all the forces on that object. Along one straight line, add forces pointing the same way and subtract forces pointing opposite ways. For example, a 10-newton push right and a 4-newton push left give a net force of 6 newtons right.',
      'Acceleration describes a change in velocity: speeding up, slowing down, or changing direction. For an object of constant mass, Newton’s second law is F = ma. In this equation, F is net force in newtons (N), m is mass in kilograms (kg), and a is acceleration in meters per second squared (m/s²). To find acceleration, divide net force by mass: a = F ÷ m. Using just the largest force instead of net force would ignore the other pushes and pulls.',
      'The acceleration points in the direction of the net force, but the object need not already be moving that way. A bicycle rolling right can have acceleration left while its brakes slow it down. If net force is zero, acceleration is zero. The object could be resting or moving in a straight line at constant speed; zero net force does not mean zero motion.',
      'Mass measures how strongly an object resists a change in its motion. With the same net force, a more massive cart has less acceleration than a lighter cart. In the problems here, mass stays constant and the listed forces are all the forces along the direction being studied. Balanced forces in other directions do not change the calculation.'
    ],
    examples: [
      {
        prompt: 'A 3 kg cart is pushed right with 18 N. Friction acts left with 6 N. All vertical forces balance. What is its horizontal acceleration?',
        steps: [
          'Choose right as the direction for describing the result. The two horizontal forces oppose each other.',
          'Find net force: 18 N − 6 N = 12 N right.',
          'Divide net force by mass: a = 12 ÷ 3 = 4 m/s².',
          'Attach the direction of the net force: the acceleration is rightward.'
        ],
        answer: '4 m/s² right'
      },
      {
        prompt: 'A 4 kg sled is moving left. Its only horizontal forces are a 12 N pull right and 4 N of friction right. What is its acceleration, and what initially happens to its speed?',
        steps: [
          'Both forces point right, so add them: 12 N + 4 N = 16 N right.',
          'Use a = F ÷ m: 16 ÷ 4 = 4 m/s² right.',
          'Compare directions: motion is left, but acceleration is right.',
          'An acceleration opposite the current motion initially reduces the sled’s speed.'
        ],
        answer: '4 m/s² right; the sled initially slows down.'
      }
    ],
    guided: {
      id: 'guided-cart',
      prompt: 'A 5 kg cart has a 27 N force right and a 7 N force left. All other forces balance. What is the magnitude of its acceleration in m/s²? Enter a number.',
      answer: '4',
      accepted: ['4', '4 m/s²', '4 m/s^2'],
      hint: 'Find the combined horizontal force before dividing by mass.',
      explanation: 'The net force is 27 − 7 = 20 N right. Dividing 20 N by 5 kg gives an acceleration magnitude of 4 m/s².',
      steps: [
        'Decide whether the two listed forces should be added or subtracted.',
        'Calculate the magnitude of the net force in newtons.',
        'Divide your net force by 5 kg and check the acceleration unit.'
      ]
    },
    practice: [
      {
        id: 'scooter',
        prompt: 'A rider and scooter have a combined mass of 60 kg. The forward force is 150 N and the backward force is 30 N. All vertical forces balance. What is the acceleration magnitude in m/s²? Enter a number.',
        answer: '2', accepted: ['2', '2 m/s²', '2 m/s^2'],
        hint: 'The backward force reduces the forward force.',
        explanation: 'Net force is 150 − 30 = 120 N forward. Acceleration is 120 ÷ 60 = 2 m/s².'
      },
      {
        id: 'vertical-lift',
        prompt: 'A 2 kg package has only two vertical forces: a 26 N upward pull and a 20 N downward gravitational force. What is its upward acceleration in m/s²? Enter a number.',
        answer: '3', accepted: ['3', '3 m/s²', '3 m/s^2'],
        hint: 'Use the given gravitational force; do not add another weight force.',
        explanation: 'The vertical net force is 26 − 20 = 6 N upward. Then a = 6 ÷ 2 = 3 m/s² upward.'
      },
      {
        id: 'required-force',
        prompt: 'A 7 kg model vehicle must accelerate at 2 m/s². What net force magnitude, in newtons, is required? Enter a number.',
        answer: '14', accepted: ['14', '14 N', '14 newtons'],
        hint: 'Here mass and acceleration are known, so use F = ma directly.',
        explanation: 'Multiply mass by acceleration: 7 × 2 = 14 N. This is the required net force, not necessarily the motor’s force alone.'
      },
      {
        id: 'same-way-pushes',
        prompt: 'Two students push a 10 kg wheeled bin east with forces of 25 N and 15 N. Ignore resistance; vertical forces balance. What is its acceleration magnitude in m/s²? Enter a number.',
        answer: '4', accepted: ['4', '4 m/s²', '4 m/s^2'],
        hint: 'Both pushes point east.',
        explanation: 'Same-direction forces add: 25 + 15 = 40 N east. Dividing by 10 kg gives 4 m/s².'
      },
      {
        id: 'balanced-moving',
        prompt: 'A puck is already moving east. Its net force is zero for the next second. Which statement describes that second?',
        options: ['It continues east at constant velocity.', 'It must stop immediately.', 'It accelerates east because it is moving east.', 'It accelerates west because no net force pushes it east.'],
        answer: 'It continues east at constant velocity.', accepted: ['It continues east at constant velocity.'],
        hint: 'F = ma links net force to a change in velocity, not to velocity itself.',
        explanation: 'Zero net force produces zero acceleration. With no change in velocity, the moving puck continues east at the same speed.'
      },
      {
        id: 'mass-comparison',
        prompt: 'Cart X has mass 2 kg and cart Y has mass 6 kg. Each experiences the same nonzero net force. How do their acceleration magnitudes compare?',
        options: ['Cart Y has three times the acceleration of cart X.', 'Cart X has three times the acceleration of cart Y.', 'Both have the same acceleration.', 'Cart X has one-sixth the acceleration of cart Y.'],
        answer: 'Cart X has three times the acceleration of cart Y.', accepted: ['Cart X has three times the acceleration of cart Y.'],
        hint: 'For the same force, dividing by a smaller mass gives a larger acceleration.',
        explanation: 'The accelerations are F ÷ 2 and F ÷ 6. The first is three times the second, so the lighter cart accelerates three times as much.'
      }
    ],
    notebook: {
      prompt: 'Explain how to find the acceleration of a 4 kg cart pushed east with 22 N while friction acts west with 10 N. Include why you cannot use 22 N alone.',
      checklist: ['Combine opposite forces to find net force.', 'Show a = F ÷ m with units and direction.', 'Explain why acceleration and current motion are not the same thing.'],
      sample: 'Friction opposes the push, so the net force is 22 − 10 = 12 N east, not 22 N. The acceleration is 12 ÷ 4 = 3 m/s² east. This tells how velocity changes. It does not tell the cart’s current velocity; a cart moving west would initially slow down.'
    }
  },
  {
    id: 'science-action-reaction-pairs',
    grade: 8,
    subject: 'Science',
    title: 'Identify the two forces in an interaction',
    objective: 'Identify an action–reaction pair by naming both interacting objects and distinguishing it from balanced forces on one object.',
    learn: [
      'A force is an interaction between two objects. When object A pushes or pulls object B, object B simultaneously pushes or pulls object A. Newton’s third law says these two forces have equal magnitudes and opposite directions. The labels action and reaction do not mean that one force happens first; both belong to the same interaction.',
      'Name a pair by reversing the two objects: the hand pushes the wall, and the wall pushes the hand. Both statements describe the same kind of interaction. One force acts on the wall; the other acts on the hand. This object-by-object naming is more reliable than simply looking for arrows pointing in opposite directions.',
      'An action–reaction pair does not cancel when you calculate net force on one object because the two forces act on different objects. A book resting on a table has an upward force from the table and a downward gravitational force from Earth. Those two forces can balance on the book, but they are not a third-law pair. The partner of Earth’s pull on the book is the book’s gravitational pull on Earth.',
      'Equal interaction forces do not guarantee equal accelerations. Acceleration also depends on mass and on any other forces acting on each object. During a push between a light cart and a heavy cart, the forces they exert on one another are equally strong, even though the lighter cart may accelerate more. A much larger object does not get to break the interaction rule.'
    ],
    examples: [
      {
        prompt: 'A swimmer pushes water backward with her hands. Identify the reaction force that helps move the swimmer forward.',
        steps: [
          'Name the objects in the stated interaction: swimmer and water.',
          'State the given force: the swimmer pushes the water backward.',
          'Reverse which object acts on which: the water pushes the swimmer.',
          'Reverse the direction: this force on the swimmer is forward, equal in magnitude to her backward force on the water.'
        ],
        answer: 'The water pushes the swimmer forward.'
      },
      {
        prompt: 'Earth pulls a hanging lamp downward. Is the cord’s upward pull on the lamp the third-law partner of Earth’s pull?',
        steps: [
          'The stated interaction is gravitational: Earth pulls the lamp.',
          'Reverse the interacting objects to find its partner: the lamp gravitationally pulls Earth.',
          'The cord’s pull also acts on the lamp, so it cannot be the partner force acting on Earth.',
          'The cord’s upward force may balance the lamp’s weight, but balancing forces on one object is a different relationship.'
        ],
        answer: 'No. The partner is the lamp’s gravitational pull on Earth.'
      }
    ],
    guided: {
      id: 'guided-skater',
      prompt: 'A skater pushes a wall west. Which force is the third-law partner of that push?',
      options: ['Earth pulls the skater down.', 'The ice pushes the skater up.', 'The wall pushes the skater east.', 'The skater pushes the ice down.'],
      answer: 'The wall pushes the skater east.', accepted: ['The wall pushes the skater east.'],
      hint: 'Keep the same two interacting objects and reverse their roles.',
      explanation: 'The interaction is between the skater and the wall. The wall pushes the skater east while the skater pushes the wall west.',
      steps: ['Name the two objects in the given push.', 'Reverse which object exerts the force and which receives it.', 'Choose the reversed interaction with the opposite direction.']
    },
    practice: [
      {
        id: 'walking',
        prompt: 'While walking without slipping, a shoe pushes backward on the ground. What is the third-law partner?',
        options: ['Earth pulls the person downward.', 'The ground pushes the shoe downward.', 'The leg pushes the shoe forward.', 'The ground pushes the shoe forward.'],
        answer: 'The ground pushes the shoe forward.', accepted: ['The ground pushes the shoe forward.'],
        hint: 'The partner must be a force from the ground on the shoe.',
        explanation: 'The backward friction force from the shoe on the ground pairs with the forward friction force from the ground on the shoe. They act on different objects.'
      },
      {
        id: 'ball-bat',
        prompt: 'During contact, a bat exerts a 300 N force on a ball to the right. What force does the ball exert on the bat at that same instant?',
        options: ['300 N to the left', '300 N to the right', 'Less than 300 N to the left because the ball is lighter', 'Zero because only the ball changes motion'],
        answer: '300 N to the left', accepted: ['300 N to the left'],
        hint: 'Compare interaction forces, not the accelerations of the objects.',
        explanation: 'The ball’s force on the bat has the same magnitude and the opposite direction: 300 N left. Different masses do not change this equality.'
      },
      {
        id: 'book-table',
        prompt: 'A table pushes upward on a resting book. Which force is the partner of the table’s upward contact force?',
        options: ['Earth pulls downward on the book.', 'The book pushes downward on the table.', 'The floor pushes upward on the table.', 'The book gravitationally pulls upward on Earth.'],
        answer: 'The book pushes downward on the table.', accepted: ['The book pushes downward on the table.'],
        hint: 'This question asks about the contact interaction between table and book.',
        explanation: 'Reverse table pushes book to book pushes table. Earth’s pull on the book is a separate gravitational interaction, even if its magnitude equals the table’s support force.'
      },
      {
        id: 'rocket',
        prompt: 'A rocket expels gas backward in space, where there is almost no surrounding air. Which interaction explains the rocket’s forward thrust?',
        options: ['The rocket pushes against surrounding air.', 'The backward gas force on the rocket cancels its thrust.', 'The rocket pushes gas backward, and the gas pushes the rocket forward.', 'Earth must push directly on the rocket’s engine.'],
        answer: 'The rocket pushes gas backward, and the gas pushes the rocket forward.', accepted: ['The rocket pushes gas backward, and the gas pushes the rocket forward.'],
        hint: 'The interacting partner can be expelled gas; it need not be air outside the rocket.',
        explanation: 'Rocket and exhaust gas push on one another. The gas can push the rocket forward even without surrounding air, and the pair acts on two different objects.'
      },
      {
        id: 'unequal-carts',
        prompt: 'A compressed spring between a light cart and a heavy cart pushes them apart. Consider the contact interaction between the spring and the heavy cart. Which statement is correct?',
        options: ['The spring pushes the cart harder than the cart pushes the spring.', 'The cart pushes the spring harder because the cart is heavier.', 'The two forces cancel on the heavy cart.', 'The spring and heavy cart exert equal, opposite forces on each other.'],
        answer: 'The spring and heavy cart exert equal, opposite forces on each other.', accepted: ['The spring and heavy cart exert equal, opposite forces on each other.'],
        hint: 'Focus on the named pair of objects, not on all three objects at once.',
        explanation: 'The spring’s force on the heavy cart pairs with the heavy cart’s force on the spring. Equal magnitudes do not make the forces cancel on the cart, because only one of them acts on the cart.'
      },
      {
        id: 'magnet-clip',
        prompt: 'A magnet attracts a steel paper clip without touching it. Which statement correctly describes the interaction?',
        options: ['The clip also attracts the magnet with an equal-magnitude force in the opposite direction.', 'The clip exerts no force until it touches the magnet.', 'The magnet’s force must be larger because the clip moves more.', 'The reaction is Earth pulling the clip down.'],
        answer: 'The clip also attracts the magnet with an equal-magnitude force in the opposite direction.', accepted: ['The clip also attracts the magnet with an equal-magnitude force in the opposite direction.'],
        hint: 'Third-law pairs also occur in noncontact interactions.',
        explanation: 'Magnet and clip exert equal and opposite magnetic forces on one another. Their motions can differ because of mass, supports, friction, and other forces.'
      }
    ],
    notebook: {
      prompt: 'A student says, “If forces are always equal and opposite, nothing could ever accelerate.” Use a person pushing a cart to explain the mistake.',
      checklist: ['Name both forces in one interaction.', 'Identify the different object receiving each force.', 'Explain that net force adds forces on one chosen object.'],
      sample: 'The person pushes the cart forward, and the cart pushes the person backward. These forces are equal and opposite, but they act on different objects. To calculate the cart’s net force, I combine the person’s push with other forces on the cart, such as friction. I do not add the cart’s force on the person to that calculation. The cart can therefore have a nonzero net force and accelerate.'
    }
  },
  {
    id: 'science-closed-reaction-mass',
    grade: 8,
    subject: 'Science',
    title: 'Track mass through a closed reaction',
    objective: 'Use a clearly defined closed system to account for all matter before and after a chemical reaction.',
    learn: [
      'In an ordinary chemical reaction, atoms rearrange into different substances rather than disappearing or being created. For the measurements in this lesson, that means the total mass of matter stays the same when no matter enters or leaves. A new color, a solid forming, or bubbles appearing can show a change, but these observations do not mean that mass has been made or destroyed.',
      'A system is the collection of objects and materials you decide to track. A closed system does not exchange matter with its surroundings, although it can exchange energy. A sealed flask containing all the reactants and products can be a closed system. If you weigh the flask and lid before the reaction, include that same flask and lid afterward. Changing the system being weighed makes the comparison unfair.',
      'Gas is matter and has mass even when you cannot see it. In an open cup, a reaction may produce gas that escapes into the room. The material left in the cup then has less mass, but the escaped gas accounts for the difference. In a sealed container that safely retains the gas, the gas remains part of the measured system, so the total mass does not decrease merely because bubbles form.',
      'To solve a mass problem, first decide what is included. Add all initial masses in that system, then make the final total equal to the initial total. Subtract known final masses to find a missing one. Real balances have measurement limits: a small unexpected difference is a reason to check leakage, spills, and measurement uncertainty, not an automatic reason to reject conservation of mass. Gas-producing reactions require appropriate lab equipment and supervision; these are data problems, not instructions to seal a household reaction.'
    ],
    examples: [
      {
        prompt: 'In a closed reaction, 18 g of one reactant and 7 g of another form only two products. One product has mass 21 g. What mass must the other product have?',
        steps: ['Add the initial masses: 18 + 7 = 25 g.', 'No matter enters or leaves, so the two products must total 25 g.', 'Subtract the known product: 25 − 21 = 4 g.', 'Check the final total: 21 + 4 = 25 g.'],
        answer: '4 g'
      },
      {
        prompt: 'A sealed flask, its lid, and all its contents have a total mass of 164 g before a reaction. Bubbles form, but nothing leaks. What should the same complete system weigh afterward?',
        steps: ['Define the weighed system as flask, lid, liquid, solids, and any gas inside.', 'Bubbles move some matter into a gas phase; the gas stays inside the system.', 'No matter crosses the system boundary, so the total remains unchanged.', 'Keep the flask and lid included in both measurements.'],
        answer: '164 g, within measurement uncertainty.'
      }
    ],
    guided: {
      id: 'guided-products',
      prompt: 'A closed reaction starts with 32 g of total reactants. Its only products are a 25 g solid and a gas that remains inside. What is the mass of the gas in grams? Enter a number.',
      answer: '7', accepted: ['7', '7 g', '7 grams'],
      hint: 'The solid and the retained gas together must have the starting mass.',
      explanation: 'Both products remain in the closed system. Their combined mass is 32 g, so the gas has mass 32 − 25 = 7 g.',
      steps: ['Identify the total starting mass of reacting matter.', 'Write a relationship connecting solid mass, gas mass, and the starting total.', 'Subtract the known final mass to find the missing mass.']
    },
    practice: [
      {
        id: 'sealed-bag-total',
        prompt: 'A laboratory-rated closed reaction bag and everything inside it have a mass of 86 g. A reaction inflates the bag, with no leaks. What is the final mass of the same bag and contents in grams? Ignore measurement uncertainty. Enter a number.',
        answer: '86', accepted: ['86', '86 g', '86 grams'],
        hint: 'A larger volume does not mean matter was added.',
        explanation: 'The gas expands the bag but remains part of the closed system. With no matter entering or leaving, total mass remains 86 g.'
      },
      {
        id: 'two-solutions',
        prompt: 'Inside a closed apparatus, 45 g of solution A mixes with 30 g of solution B and forms a solid within the liquid. What is the total mass of all the resulting material, excluding the apparatus, in grams? Enter a number.',
        answer: '75', accepted: ['75', '75 g', '75 grams'],
        hint: 'Count both liquid and solid as resulting material.',
        explanation: 'The initial material has mass 45 + 30 = 75 g. A solid forming changes the distribution of matter, not the total mass of the closed system.'
      },
      {
        id: 'retained-gas',
        prompt: 'A closed reaction begins with 50 g of reacting material. Afterward, 44 g is liquid and solid together; the only other product is retained gas. What is the gas mass in grams? Enter a number.',
        answer: '6', accepted: ['6', '6 g', '6 grams'],
        hint: 'Account for the part of the final total that is not liquid or solid.',
        explanation: 'All 50 g remains in the system. The gas accounts for 50 − 44 = 6 g.'
      },
      {
        id: 'container-subtraction',
        prompt: 'A closed vessel and its reacting contents together have mass 240 g. The unchanged empty vessel has mass 90 g. After the reaction, what is the total mass of the contents alone in grams? Enter a number.',
        answer: '150', accepted: ['150', '150 g', '150 grams'],
        hint: 'Conserve the complete total, then remove the vessel’s contribution.',
        explanation: 'The final complete system still has mass 240 g. Subtracting the unchanged vessel gives 240 − 90 = 150 g of contents.'
      },
      {
        id: 'open-cup',
        prompt: 'An open cup and its contents weigh less after a bubbling reaction. No liquid spills, and gas is observed leaving. Which explanation is best?',
        options: ['Some atoms lost their mass when they reacted.', 'Escaped gas carried mass outside the weighed system.', 'Bubbles always reduce total mass, even in a closed system.', 'The cup must have become lighter because reactions destroy containers.'],
        answer: 'Escaped gas carried mass outside the weighed system.', accepted: ['Escaped gas carried mass outside the weighed system.'],
        hint: 'Ask whether all the original matter is still on the balance.',
        explanation: 'The cup is an open system. Escaping gas is no longer being weighed, but its mass still exists in the surroundings.'
      },
      {
        id: 'lid-comparison',
        prompt: 'A student weighs a flask, lid, and contents before a reaction but weighs only the flask and contents afterward. Can a lower final reading by itself show that the reaction destroyed mass?',
        options: ['Yes, because the same balance was used.', 'Yes, because lids cannot affect reaction measurements.', 'No, because the second measurement omits part of the original weighed system.', 'No, because mass always increases during reactions.'],
        answer: 'No, because the second measurement omits part of the original weighed system.', accepted: ['No, because the second measurement omits part of the original weighed system.'],
        hint: 'Compare the list of objects weighed before and afterward.',
        explanation: 'The missing lid changes what is being measured. A valid comparison must include the same system and account for any matter that leaves it.'
      }
    ],
    notebook: {
      prompt: 'Explain why bubbles can form in a closed reaction without reducing total mass. Compare this with an open cup that releases gas.',
      checklist: ['State that gas is matter with mass.', 'Define what stays inside the closed system.', 'Account for escaped gas in the open-cup comparison.'],
      sample: 'Bubbles contain gas, and gas has mass. In a closed reaction apparatus, the liquid, solid, and gas all remain inside, so rearranging atoms does not change the total mass. In an open cup, gas can leave the material being weighed. The cup’s reading may decrease, but the escaped gas still exists outside the cup. The measured system lost matter; the reaction did not destroy it.'
    }
  },
  {
    id: 'science-atoms-in-equations',
    grade: 8,
    subject: 'Science',
    title: 'Check that an equation conserves each kind of atom',
    objective: 'Count atoms using coefficients and subscripts, then choose coefficients that conserve each element in a simple equation.',
    learn: [
      'A chemical equation is a compact account of how substances change. Reactants appear before the arrow and products after it. In an ordinary chemical reaction, each element’s atoms are conserved. A balanced equation therefore has the same number of hydrogen atoms on both sides, the same number of oxygen atoms on both sides, and so on. Matching only the total number of all atoms is not enough if the elements do not match.',
      'A subscript is the small number in a chemical formula. It tells how many atoms of that element are in one particle or formula unit. H₂O has two hydrogen atoms and one oxygen atom; an element without a written subscript has one atom in that formula. A coefficient is the number before the whole formula. It multiplies every atom count in that formula, so 3 H₂O represents six hydrogen atoms and three oxygen atoms.',
      'To balance an equation, change coefficients, not subscripts. Changing a subscript changes the substance itself: H₂O and H₂O₂ are different substances. Coefficients instead change how many particles participate. The number of molecules does not have to stay the same during a reaction, because the same atoms can be regrouped into a different number of molecules.',
      'Work one element at a time, keeping a separate count for each side of the arrow. After changing a coefficient, recount all elements in that formula because the coefficient affects them all. A final check should compare every element on both sides. If asked for the smallest whole-number coefficients, use the simplest whole-number ratio that makes all those counts equal.'
    ],
    examples: [
      {
        prompt: 'Balance H₂ + O₂ → H₂O using the smallest whole-number coefficients.',
        steps: ['Start by counting oxygen: the left has two O atoms, but one H₂O has only one O atom.', 'Put 2 before H₂O to make two O atoms on the right. This also makes four H atoms on the right.', 'Put 2 before H₂ to make four H atoms on the left.', 'Check: each side now has four H atoms and two O atoms. The coefficients 2, 1, 2 are the smallest whole-number ratio.'],
        answer: '2 H₂ + O₂ → 2 H₂O'
      },
      {
        prompt: 'Does 2 CO + O₂ → 2 CO₂ conserve both carbon and oxygen atoms?',
        steps: ['Count carbon on the left: 2 CO contains two C atoms.', 'Count oxygen on the left: 2 CO supplies two O atoms and O₂ supplies two more, for four O atoms.', 'Count the right side: 2 CO₂ contains two C atoms and four O atoms.', 'Compare each element separately: carbon matches, and oxygen matches.'],
        answer: 'Yes. Each side contains two C atoms and four O atoms.'
      }
    ],
    guided: {
      id: 'guided-magnesium',
      prompt: 'Which equation balances Mg + O₂ → MgO without changing any substance’s formula?',
      options: ['Mg + O₂ → MgO₂', 'Mg + O₂ → 2 MgO', '2 Mg + O₂ → MgO', '2 Mg + O₂ → 2 MgO'],
      answer: '2 Mg + O₂ → 2 MgO', accepted: ['2 Mg + O₂ → 2 MgO'],
      hint: 'Match oxygen atoms, then check how many magnesium atoms are needed.',
      explanation: 'Two MgO units contain two O atoms and two Mg atoms. Two Mg atoms and one O₂ molecule on the left supply those same counts. Changing MgO to MgO₂ would change the formula, not balance the given reaction.',
      steps: ['Count the oxygen atoms supplied by one O₂ molecule.', 'Decide how many unchanged MgO units would contain that many oxygen atoms.', 'Recount magnesium and select the equation that matches both elements.']
    },
    practice: [
      {
        id: 'oxygen-count',
        prompt: 'How many oxygen atoms are represented by 3 CO₂? Enter a number.',
        answer: '6', accepted: ['6', '6 atoms', '6 oxygen atoms'],
        hint: 'Each CO₂ contains two oxygen atoms.',
        explanation: 'The coefficient multiplies the whole formula: 3 × 2 = 6 oxygen atoms. It also represents three carbon atoms.'
      },
      {
        id: 'hydrogen-count',
        prompt: 'How many hydrogen atoms are represented by 4 NH₃? Enter a number.',
        answer: '12', accepted: ['12', '12 atoms', '12 hydrogen atoms'],
        hint: 'Multiply the number of NH₃ molecules by the hydrogen subscript.',
        explanation: 'Each NH₃ molecule contains three H atoms, so four molecules contain 4 × 3 = 12 H atoms.'
      },
      {
        id: 'nitrogen-balance',
        prompt: 'What coefficient replaces the blank in N₂ + __ H₂ → 2 NH₃ to conserve both elements?',
        options: ['3', '1', '2', '6'],
        answer: '3', accepted: ['3'],
        hint: 'The two NH₃ molecules contain six hydrogen atoms in total.',
        explanation: 'Three H₂ molecules supply six H atoms. N₂ already supplies the two N atoms found in 2 NH₃, so the missing coefficient is 3.'
      },
      {
        id: 'methane-check',
        prompt: 'Which equation correctly balances methane reacting with oxygen to form carbon dioxide and water?',
        options: ['CH₄ + O₂ → CO₂ + 2 H₂O', 'CH₄ + 2 O₂ → CO₂ + 2 H₂O', 'CH₄ + 2 O₂ → 2 CO₂ + H₂O', '2 CH₄ + 2 O₂ → CO₂ + 2 H₂O'],
        answer: 'CH₄ + 2 O₂ → CO₂ + 2 H₂O', accepted: ['CH₄ + 2 O₂ → CO₂ + 2 H₂O'],
        hint: 'Check one C, four H, and the total oxygen count on each side.',
        explanation: 'The balanced choice has one C atom, four H atoms, and four O atoms on each side. The other choices leave at least one element unmatched.'
      },
      {
        id: 'subscript-error',
        prompt: 'A student changes H₂ + Cl₂ → HCl into H₂ + Cl₂ → H₂Cl₂ to make the atom counts match. Why is this not a valid way to balance the given equation?',
        options: ['A chemical equation must have the same number of molecules on both sides.', 'Chlorine atoms do not need to be conserved.', 'Changing subscripts changes the product formula instead of balancing the given substances.', 'Only the reactant side may have coefficients.'],
        answer: 'Changing subscripts changes the product formula instead of balancing the given substances.', accepted: ['Changing subscripts changes the product formula instead of balancing the given substances.'],
        hint: 'The given product is HCl, so its formula must stay HCl.',
        explanation: 'Use a coefficient to represent two HCl molecules: H₂ + Cl₂ → 2 HCl. This conserves two H atoms and two Cl atoms without replacing the product formula.'
      },
      {
        id: 'decomposition',
        prompt: 'For 2 H₂O₂ → 2 H₂O + O₂, which statement correctly compares atom counts?',
        options: ['The left has four O atoms, but the right has only two.', 'Hydrogen is not conserved because there are more product molecules.', 'The right has six H atoms and four O atoms.', 'Each side has four H atoms and four O atoms.'],
        answer: 'Each side has four H atoms and four O atoms.', accepted: ['Each side has four H atoms and four O atoms.'],
        hint: 'On the product side, count oxygen in both water and oxygen gas.',
        explanation: 'Two H₂O₂ molecules contain four H and four O atoms. Two H₂O molecules contain four H and two O atoms; O₂ adds two more O atoms. Each element is conserved.'
      }
    ],
    notebook: {
      prompt: 'Explain why 2 Na + Cl₂ → 2 NaCl is balanced. Include the different jobs of coefficients and subscripts.',
      checklist: ['Count sodium and chlorine separately on each side.', 'Explain that a coefficient multiplies the entire formula.', 'Explain why changing a subscript is not a balancing method.'],
      sample: 'The left side has two Na atoms from 2 Na and two Cl atoms from Cl₂. The right side has two Na atoms and two Cl atoms because the coefficient 2 multiplies all of NaCl. A subscript belongs to the substance’s formula; a coefficient tells how many particles or formula units participate. Changing a subscript would change the stated substance rather than balance this equation.'
    }
  },
  {
    id: 'science-wave-frequency-wavelength',
    grade: 8,
    subject: 'Science',
    title: 'Connect frequency and wavelength at a fixed speed',
    objective: 'Use v = fλ to calculate frequency or wavelength and explain their inverse relationship when wave speed stays constant.',
    learn: [
      'A repeating wave has a wavelength: the distance from one crest to the next crest, or between any two matching points in neighboring cycles. Frequency is how many complete cycles pass a point each second. Frequency is measured in hertz (Hz), so 5 Hz means five cycles per second. Wavelength is a distance, while frequency is a rate; they describe different features of the wave.',
      'Wave speed connects these features through v = fλ. The symbol v is speed, f is frequency, and λ, the Greek letter lambda, is wavelength. A 2 Hz wave with a wavelength of 3 m travels 6 m each second because two full 3 m cycles pass in one second. Use meters for wavelength and meters per second for speed in the calculations here.',
      'At a fixed speed, increasing frequency makes wavelength shorter. More cycles must fit into the distance the wave travels each second. If frequency doubles while speed stays constant, wavelength is halved. This relationship depends on the fixed-speed condition. Real wave speeds depend on the medium and other conditions, so do not assume every kind of wave always travels at the same speed.',
      'Rearrange the relationship to find a missing quantity: wavelength equals speed divided by frequency, and frequency equals speed divided by wavelength. Check whether the result makes sense before deciding it is correct. Amplitude, the size of the disturbance from its middle position, is not wavelength or frequency; a taller crest alone does not supply either value. Each problem below states the speed or says it stays fixed.'
    ],
    examples: [
      {
        prompt: 'Waves travel along a rope at a constant 12 m/s with a frequency of 3 Hz. What is the wavelength?',
        steps: ['Identify v = 12 m/s and f = 3 Hz.', 'Rearrange v = fλ to get λ = v ÷ f.', 'Calculate 12 ÷ 3 = 4.', 'Use meters for wavelength and check: 3 cycles per second × 4 m per cycle = 12 m/s.'],
        answer: '4 m'
      },
      {
        prompt: 'Two settings produce waves in the same system at a fixed 20 m/s. Setting A has frequency 5 Hz, and setting B has frequency 10 Hz. Find both wavelengths.',
        steps: ['The speed is the same for both settings, so apply λ = v ÷ f to each.', 'For A, wavelength is 20 ÷ 5 = 4 m.', 'For B, wavelength is 20 ÷ 10 = 2 m.', 'The frequency doubled and the wavelength halved; their product stayed 20 m/s.'],
        answer: 'Setting A: 4 m. Setting B: 2 m.'
      }
    ],
    guided: {
      id: 'guided-rope',
      prompt: 'A wave travels at 18 m/s with a frequency of 6 Hz. What is its wavelength in meters? Enter a number.',
      answer: '3', accepted: ['3', '3 m', '3 meters'],
      hint: 'Divide speed by the number of cycles passing each second.',
      explanation: 'Wavelength is λ = v ÷ f = 18 ÷ 6 = 3 m.',
      steps: ['Identify the given speed and frequency, including their units.', 'Choose the rearranged form of v = fλ that solves for wavelength.', 'Substitute the given values, then check that your result is a distance.']
    },
    practice: [
      {
        id: 'ripple-model',
        prompt: 'In a wave model, ripples travel at a fixed speed of 8 m/s and have frequency 4 Hz. What is their wavelength in meters? Enter a number.',
        answer: '2', accepted: ['2', '2 m', '2 meters'],
        hint: 'Use λ = v ÷ f.',
        explanation: 'Each second, four wavelengths pass while the wave travels 8 m. Each wavelength is 8 ÷ 4 = 2 m.'
      },
      {
        id: 'sound-frequency',
        prompt: 'A sound wave travels at 340 m/s under the stated conditions. Its wavelength is 2 m. What is its frequency in hertz? Enter a number.',
        answer: '170', accepted: ['170', '170 Hz', '170 hertz'],
        hint: 'Solve v = fλ for f rather than for λ.',
        explanation: 'Frequency is f = v ÷ λ = 340 ÷ 2 = 170 Hz. There are 170 complete cycles per second.'
      },
      {
        id: 'new-frequency',
        prompt: 'Waves on a cord travel at a fixed 24 m/s. A generator is changed from 4 Hz to 8 Hz. What is the new wavelength in meters? Enter a number.',
        answer: '3', accepted: ['3', '3 m', '3 meters'],
        hint: 'Use the new frequency with the unchanged speed.',
        explanation: 'The new wavelength is 24 ÷ 8 = 3 m. The old wavelength was 24 ÷ 4 = 6 m, so doubling frequency halves wavelength.'
      },
      {
        id: 'crest-spacing',
        prompt: 'A repeating wave in a simulation travels at 15 m/s. Neighboring crests are 5 m apart. What is its frequency in hertz? Enter a number.',
        answer: '3', accepted: ['3', '3 Hz', '3 hertz'],
        hint: 'The distance between neighboring crests is one wavelength.',
        explanation: 'The wavelength is 5 m, so frequency is 15 ÷ 5 = 3 Hz.'
      },
      {
        id: 'triple-frequency',
        prompt: 'A source triples its frequency while wave speed stays fixed. What happens to wavelength?',
        options: ['It becomes one-third as long.', 'It becomes three times as long.', 'It stays the same.', 'It becomes nine times as long.'],
        answer: 'It becomes one-third as long.', accepted: ['It becomes one-third as long.'],
        hint: 'The product of frequency and wavelength must remain equal to the fixed speed.',
        explanation: 'Since λ = v ÷ f, tripling the denominator while keeping the numerator fixed makes wavelength one-third as large.'
      },
      {
        id: 'consistent-pair',
        prompt: 'A simulation fixes wave speed at 10 m/s. Which frequency–wavelength pair is consistent with that speed?',
        options: ['2 Hz and 10 m', '5 Hz and 2 m', '10 Hz and 5 m', '4 Hz and 4 m'],
        answer: '5 Hz and 2 m', accepted: ['5 Hz and 2 m'],
        hint: 'Multiply the frequency and wavelength for each option.',
        explanation: 'Only 5 × 2 equals 10 m/s. The other products are 20, 50, and 16 m/s, so they do not match the specified speed.'
      }
    ],
    notebook: {
      prompt: 'At a fixed wave speed of 30 m/s, compare frequencies of 5 Hz and 10 Hz. Explain the wavelengths with both a calculation and an everyday description of how cycles fit into a distance.',
      checklist: ['Use λ = v ÷ f for both settings.', 'State both wavelengths with units.', 'Explain why doubling frequency halves wavelength only under the fixed-speed condition.'],
      sample: 'At 5 Hz, the wavelength is 30 ÷ 5 = 6 m. At 10 Hz, it is 30 ÷ 10 = 3 m. In either case the wave travels 30 m each second, but the second setting fits twice as many complete cycles into that distance. Each cycle must therefore be half as long. This comparison depends on the speed staying fixed.'
    }
  },
  {
    id: 'science-thermal-transfer-evidence',
    grade: 8,
    subject: 'Science',
    title: 'Use evidence to identify thermal transfer',
    objective: 'Use observations to infer the direction and likely mechanism of thermal energy transfer without claiming more than the evidence supports.',
    learn: [
      'When objects at different temperatures interact, thermal energy transfers spontaneously from warmer regions toward cooler regions. A temperature change can provide evidence of this transfer, but temperature and total thermal energy are not the same quantity. The amount of material, the substance, and changes of state also matter. For these problems, pay attention to what was measured rather than treating a temperature reading as a complete measurement of energy.',
      'Conduction transfers energy through interactions among neighboring particles, without a bulk flow of the material carrying energy from place to place. A metal spoon’s handle warming after the spoon is placed in hot water is evidence consistent with conduction along the spoon. Direct contact between materials also allows conduction across their boundary. You do not need the whole spoon to move for energy to travel through it.',
      'Convection involves the movement of a liquid or gas that carries thermal energy with it. In many familiar situations under gravity, warmer fluid expands, becomes less dense, and rises while cooler, denser fluid sinks. Seeing a circulating flow helps support a convection explanation. Radiation transfers energy by electromagnetic waves and can travel across empty space, so objects do not have to touch and moving air is not required.',
      'Several transfer mechanisms can occur at once. A cup cooling on a desk can transfer energy through its base, through moving air, and by radiation. A good explanation says which mechanism a particular observation supports, not that all other mechanisms are impossible. Comparing otherwise similar setups can strengthen the inference: if insulation reduces cooling under matched conditions, the evidence supports slower energy transfer, not the claim that the insulation creates heat.'
    ],
    examples: [
      {
        prompt: 'One end of a metal rod is held against a warm block. A sensor farther along the stationary rod rises from 21°C to 29°C. What transfer mechanism does this observation support?',
        steps: ['Identify the warmer source: the warm block and the end of the rod touching it.', 'Notice that the rod stays in place; no flowing metal carries energy to the sensor.', 'Energy can move along the solid through neighboring-particle interactions.', 'Describe this as evidence for conduction along the rod without claiming that no radiation or air transfer occurs anywhere.'],
        answer: 'The observation supports conduction from the warmer end along the metal rod.'
      },
      {
        prompt: 'Identical covered cups each hold 200 mL of water at 60°C in a 22°C room. After 10 minutes, a wrapped cup is at 54°C and an unwrapped cup is at 45°C. What does this comparison support?',
        steps: ['The cups began with the same water volume and temperature in the same surroundings.', 'The wrapped cup cooled by 6°C; the unwrapped cup cooled by 15°C.', 'Both remained warmer than the room, so net energy transfer was from the water toward the cooler surroundings.', 'The smaller temperature decrease supports the conclusion that the wrapping reduced the rate of cooling under these conditions.'],
        answer: 'The wrapping slowed cooling; it did not provide evidence of creating thermal energy.'
      }
    ],
    guided: {
      id: 'guided-spoon',
      prompt: 'A metal spoon rests in warm soup. Its handle, which is not in the soup, gradually warms while the spoon stays still. Which explanation best fits energy transfer along the spoon?',
      options: ['Cold flows out of the handle into the soup.', 'The solid spoon circulates in a convection current.', 'Energy is conducted from the warmer end toward the cooler handle.', 'The handle must make its own energy because it does not touch the soup.'],
      answer: 'Energy is conducted from the warmer end toward the cooler handle.', accepted: ['Energy is conducted from the warmer end toward the cooler handle.'],
      hint: 'A stationary solid can transfer energy from one part to another.',
      explanation: 'The metal connects the warmer immersed end to the cooler handle. Neighboring-particle interactions conduct energy along the spoon without bulk movement of the metal.',
      steps: ['Identify the warmer region and the cooler region.', 'Decide whether the material itself flows from one region to the other.', 'Choose the mechanism that fits energy transfer along a stationary solid.']
    },
    practice: [
      {
        id: 'warm-water-flow',
        prompt: 'Water is warmed near the bottom of a transparent tank. A harmless tracer shows water rising over the warm region and sinking along cooler sides. Which observation most directly supports convection?',
        options: ['The tank is transparent.', 'The water contains particles.', 'The tank has a solid base.', 'Moving water carries energy through a circulating flow.'],
        answer: 'Moving water carries energy through a circulating flow.', accepted: ['Moving water carries energy through a circulating flow.'],
        hint: 'Convection requires bulk motion of a liquid or gas.',
        explanation: 'The observed rising and sinking water provides evidence of a circulation that carries thermal energy. Transparency makes the flow visible but is not the transfer mechanism.'
      },
      {
        id: 'sun-space',
        prompt: 'Energy from the Sun reaches an orbiting spacecraft across nearly empty space. Which mechanism can account for that transfer across the gap?',
        options: ['Radiation by electromagnetic waves', 'Conduction through a continuous metal bridge', 'Convection of air all the way from the Sun', 'A current of cold flowing from the spacecraft'],
        answer: 'Radiation by electromagnetic waves', accepted: ['Radiation by electromagnetic waves'],
        hint: 'Which mechanism does not require matter to fill the space between source and receiver?',
        explanation: 'Electromagnetic radiation can travel through a vacuum. Conduction and convection require matter along their transfer paths.'
      },
      {
        id: 'blocks-direction',
        prompt: 'A 70°C metal block touches a 20°C metal block in an insulated enclosure. Initially, what is the direction of net thermal energy transfer between them?',
        options: ['From the 20°C block to the 70°C block', 'From the 70°C block to the 20°C block', 'Neither direction, because both blocks are solid', 'It depends only on which block is heavier'],
        answer: 'From the 70°C block to the 20°C block', accepted: ['From the 70°C block to the 20°C block'],
        hint: 'For spontaneous net transfer, compare temperatures rather than masses.',
        explanation: 'Net thermal energy transfer is from the warmer block to the cooler block. Mass affects how much their temperatures change, not the initial direction of net transfer.'
      },
      {
        id: 'insulated-bottle',
        prompt: 'Two identical bottles hold equal amounts of water initially at 50°C. In the same 20°C room, the insulated bottle reaches 46°C and the bare bottle reaches 38°C after 15 minutes. Which conclusion is supported?',
        options: ['The insulation creates energy inside the water.', 'The bare bottle received more energy from the cooler room.', 'The insulation reduced cooling during these 15 minutes.', 'The insulated bottle will remain at 46°C forever.'],
        answer: 'The insulation reduced cooling during these 15 minutes.', accepted: ['The insulation reduced cooling during these 15 minutes.'],
        hint: 'Compare the temperature decreases without assuming what happens forever.',
        explanation: 'The insulated water cooled by 4°C and the bare-bottle water by 12°C under matched conditions. This supports reduced cooling over the measured interval, not zero future transfer or energy creation.'
      },
      {
        id: 'touch-evidence',
        prompt: 'A metal tray and a wooden board have both been in a 21°C room all night. Sensors read 21°C on both. The tray feels colder to a warm hand. Which explanation best fits all the evidence?',
        options: ['The sensor must be wrong because touch always measures temperature accurately.', 'The tray contains more cold than the wood.', 'The tray must have a lower temperature even though both sensors agree.', 'The tray transfers energy away from the hand faster than the wood does.'],
        answer: 'The tray transfers energy away from the hand faster than the wood does.', accepted: ['The tray transfers energy away from the hand faster than the wood does.'],
        hint: 'A feeling of cold can reflect a transfer rate, not just an object’s temperature.',
        explanation: 'Metal typically conducts energy away from the warmer hand faster than wood under these conditions. Equal measured temperatures are compatible with different sensations and transfer rates.'
      },
      {
        id: 'melting-ice',
        prompt: 'An ice–water mixture at its melting point receives energy from warmer surroundings. More ice melts, but the mixture’s measured temperature stays nearly constant. Which explanation is best?',
        options: ['Transferred energy can melt ice without immediately raising the mixture’s temperature.', 'No energy entered because temperature did not rise.', 'Melting destroys the energy that entered.', 'Thermal energy must have moved from the colder mixture to the warmer room.'],
        answer: 'Transferred energy can melt ice without immediately raising the mixture’s temperature.', accepted: ['Transferred energy can melt ice without immediately raising the mixture’s temperature.'],
        hint: 'Energy transfer can produce a change of state as well as a temperature change.',
        explanation: 'During melting, transferred energy changes the arrangement of particles as solid becomes liquid. A nearly constant temperature during this change does not mean no energy was transferred.'
      }
    ],
    notebook: {
      prompt: 'Describe evidence for conduction, convection, and radiation using a warming spoon, circulating heated water, and sunlight crossing space. Explain one limit of identifying a mechanism from an observation.',
      checklist: ['Connect each example to a specific mechanism and its evidence.', 'State the warmer-to-cooler direction of spontaneous net transfer.', 'Acknowledge that multiple mechanisms can occur together.'],
      sample: 'A spoon’s cooler handle warming while the metal stays still supports conduction along the spoon. Circulating heated water supports convection because moving water carries energy. Sunlight crossing nearly empty space is radiation, which needs no material connection. Net transfer is from warmer toward cooler regions. An observation may support one mechanism without ruling out others; a warm spoon can also exchange radiation with its surroundings.'
    }
  },
  {
    id: 'science-plate-boundary-evidence',
    grade: 8,
    subject: 'Science',
    title: 'Infer plate boundaries from several clues',
    objective: 'Use motion, landforms, and earthquake patterns together to identify divergent, convergent, and transform plate boundaries.',
    learn: [
      'Earth’s rigid outer layer is divided into tectonic plates that move relative to one another. A boundary is where neighboring plates interact. We cannot identify every boundary from a single photograph or a single earthquake. Instead, scientists combine evidence such as measured motion, seafloor ages, landforms, volcano locations, and earthquake depths. A conclusion is stronger when several independent clues fit the same explanation.',
      'At a divergent boundary, plates move apart. At many oceanic spreading ridges, rising material produces new oceanic crust as the plates separate. The youngest seafloor is commonly near the ridge, with older crust farther away on either side. A ridge, outward motion, and that age pattern together support spreading. Not every crack in the ground is evidence of a plate boundary, so scale and additional measurements matter.',
      'At a convergent boundary, plates move toward each other. Where an oceanic plate bends downward beneath another plate, a subduction zone can produce a trench, a volcanic arc, and earthquakes that become deeper inland along the descending plate. In a collision between two continents, thickened crust and high mountains are important evidence. Convergence does not always produce the same landforms; the types of plates and their history affect what forms.',
      'At a transform boundary, plates slide horizontally past one another. Offset features, shallow earthquakes, and measured sideways motion support this interpretation. Transform motion does not itself create a broad strip of new crust or consume a plate through subduction. Earthquakes happen at all three boundary types, and some occur away from boundaries, so an earthquake alone does not identify the boundary. Some volcanoes also form away from boundaries; use the full evidence set rather than one memorable feature.'
    ],
    examples: [
      {
        prompt: 'An ocean-floor map shows a long ridge. The youngest rock lies along its center, rock ages increase away from it on both sides, and measurements show the two sides moving apart. What boundary type best fits?',
        steps: ['Measured motion is away from the boundary, which fits divergence.', 'The youngest crust at the ridge center suggests new crust forms there.', 'Older crust farther away on both sides fits crust moving outward over time.', 'The motion, ridge, and age pattern support one consistent explanation.'],
        answer: 'A divergent boundary at an oceanic spreading ridge.'
      },
      {
        prompt: 'An offshore trench lies next to a continent. Earthquakes become deeper from the trench toward an inland volcanic arc, and measured plate motion is toward the trench. What process is supported?',
        steps: ['Toward-boundary motion indicates convergence rather than spreading.', 'The trench suggests one plate bends downward beneath another.', 'Earthquakes becoming deeper inland outline a descending zone within the planet.', 'The volcanic arc adds evidence consistent with a subduction setting; no single clue is used alone.'],
        answer: 'Subduction at a convergent boundary.'
      }
    ],
    guided: {
      id: 'guided-offset-road',
      prompt: 'A plate-boundary fault offsets roads sideways. Instruments show opposite sides moving horizontally past one another, and earthquakes are mostly shallow. Which boundary interpretation best fits?',
      options: ['Divergent, because all faults make new crust', 'Transform, because the measured motion is sideways', 'Subduction, because any earthquake proves a sinking plate', 'Continental collision, because every boundary builds high mountains'],
      answer: 'Transform, because the measured motion is sideways', accepted: ['Transform, because the measured motion is sideways'],
      hint: 'Use the measured relative motion as your first clue.',
      explanation: 'Sideways motion, offset roads, and shallow earthquakes fit a transform boundary. Earthquakes alone would not establish subduction.',
      steps: ['Describe whether the plates move apart, together, or sideways past each other.', 'Connect the offset roads to the direction of that motion.', 'Choose the boundary type supported by the combined evidence rather than by earthquakes alone.']
    },
    practice: [
      {
        id: 'symmetric-ages',
        prompt: 'At an ocean ridge, crust is 1 million years old near the center and 8 million years old farther away on both sides. Instruments show the sides separating. Which interpretation best fits?',
        options: ['A transform boundary is consuming the older crust.', 'A continental collision made the youngest crust at the center.', 'A divergent boundary is producing crust near the ridge.', 'The ages show that both plates are motionless.'],
        answer: 'A divergent boundary is producing crust near the ridge.', accepted: ['A divergent boundary is producing crust near the ridge.'],
        hint: 'Combine the age pattern with the separating motion.',
        explanation: 'New oceanic crust forms near a spreading ridge and moves away as plates separate. Young central crust and older crust on both sides support a divergent boundary.'
      },
      {
        id: 'trench-depth',
        prompt: 'An oceanic plate moves toward a continental margin. A trench is offshore, a volcanic arc is inland, and earthquake depths increase inland from the trench. Which process best fits these clues?',
        options: ['Two plates are separating at a ridge.', 'Two plates slide past each other without convergence.', 'A continent is forming without any plate motion.', 'An oceanic plate is subducting at a convergent boundary.'],
        answer: 'An oceanic plate is subducting at a convergent boundary.', accepted: ['An oceanic plate is subducting at a convergent boundary.'],
        hint: 'The progression from shallow to deeper earthquakes helps reveal a descending plate.',
        explanation: 'Converging motion, an offshore trench, a volcanic arc, and inland-deepening earthquakes together support oceanic subduction beneath the continental margin.'
      },
      {
        id: 'continental-collision',
        prompt: 'Two continental regions move toward one another. The boundary zone has thickened crust and a broad belt of high folded mountains. Which interpretation best fits?',
        options: ['Continental collision at a convergent boundary', 'Seafloor spreading at a divergent boundary', 'Sideways sliding at a purely transform boundary', 'No plate interaction because there is no ocean ridge'],
        answer: 'Continental collision at a convergent boundary', accepted: ['Continental collision at a convergent boundary'],
        hint: 'Consider what compression does to continental crust.',
        explanation: 'Toward-each-other motion compresses and thickens continental crust, helping build a broad mountain belt. Those clues support continental collision, a form of convergence.'
      },
      {
        id: 'offset-streams',
        prompt: 'Across a long mapped plate boundary, streams are offset sideways and GPS stations show horizontal sliding rather than approach or separation. Which type is most strongly supported?',
        options: ['A divergent boundary', 'A transform boundary', 'An oceanic subduction boundary', 'A continental collision boundary'],
        answer: 'A transform boundary', accepted: ['A transform boundary'],
        hint: 'Match the observed sideways displacement to relative plate motion.',
        explanation: 'Horizontal sliding and sideways stream offsets support a transform boundary. The measurements do not show the separation or convergence expected for the other boundary types.'
      },
      {
        id: 'earthquake-only',
        prompt: 'A news report says that one shallow earthquake occurred in a region. It gives no plate-motion measurements, map, or landform evidence. What can you reasonably conclude about the boundary type?',
        options: ['It must be transform because only transform boundaries have shallow earthquakes.', 'It must be convergent because earthquakes require subduction.', 'There is not enough evidence to identify a boundary type.', 'It must be divergent because earthquakes always mark new crust.'],
        answer: 'There is not enough evidence to identify a boundary type.', accepted: ['There is not enough evidence to identify a boundary type.'],
        hint: 'Ask whether shallow earthquakes occur in only one setting.',
        explanation: 'Shallow earthquakes can occur at different boundary types and within plates. One event without location or motion evidence is insufficient to identify a boundary type.'
      },
      {
        id: 'test-spreading-claim',
        prompt: 'A scientist proposes that a long underwater ridge is a divergent plate boundary. Which additional evidence would most directly strengthen that interpretation?',
        options: ['One nearby island has a sandy beach.', 'The ocean above the ridge has strong tides.', 'A single earthquake occurred somewhere in the ocean.', 'Measurements show opposite sides moving apart, with youngest crust at the ridge.'],
        answer: 'Measurements show opposite sides moving apart, with youngest crust at the ridge.', accepted: ['Measurements show opposite sides moving apart, with youngest crust at the ridge.'],
        hint: 'Seek measurements tied specifically to spreading rather than general ocean features.',
        explanation: 'Separating motion directly supports divergence, and young crust at the ridge supports new crust forming there. The other observations are not specific evidence for spreading.'
      }
    ],
    notebook: {
      prompt: 'Write a short evidence-based explanation for a boundary with an offshore trench, a line of inland volcanoes, earthquakes that deepen inland, and plates moving toward each other. Include one caution about relying on a single clue.',
      checklist: ['Identify convergence with subduction.', 'Connect at least two observations to the interpretation.', 'Explain why one volcano or earthquake alone is not enough.'],
      sample: 'The evidence supports a convergent subduction boundary. The measured approach shows convergence, the trench fits a plate bending downward, and earthquakes that deepen inland trace a descending plate. The volcanic arc is another consistent clue. A volcano or earthquake alone would not be enough because those features occur in more than one tectonic setting.'
    }
  },
  {
    id: 'science-controlled-experiment-data',
    grade: 8,
    subject: 'Science',
    title: 'Make a conclusion that matches a controlled experiment',
    objective: 'Compare repeated measurements from a controlled experiment and choose a conclusion limited to the tested conditions.',
    learn: [
      'A controlled experiment changes one planned factor and measures the response while keeping other relevant conditions as similar as possible. The factor deliberately changed is the independent variable. The measured response is the dependent variable. A comparison group gives a reference, but it does not always mean doing nothing: it may use a standard material, a usual treatment, or another clearly defined setting.',
      'Before interpreting a difference, check whether the comparison is fair. If one group gets both more light and more water, a difference in plant growth cannot be assigned to light alone. Relevant starting conditions, methods, and measurement times should match. Random assignment, when practical, helps reduce hidden differences between groups, and repeated trials help reveal how much results vary.',
      'A mean summarizes repeated measurements: add the values and divide by the number of values. Still inspect the individual trials. A small difference between means can be less convincing when trial values vary widely and overlap. An unusual result is not something to erase just because it is inconvenient; check the method, record what happened, and repeat measurements when appropriate.',
      'A conclusion should state what the data support under the tested conditions. Words such as always, proves, or every material usually reach beyond a small experiment. A well-controlled comparison can provide evidence that the tested factor affects the response, but more trials and different conditions may be needed to know how widely that result applies. Data that show little difference are also useful; they do not require inventing an effect.'
    ],
    examples: [
      {
        prompt: 'A student compares otherwise identical toy cars with wheel type A or B on the same ramp. Distances in three trials are A: 80, 82, 78 cm; B: 92, 90, 94 cm. What do the means and trials support?',
        steps: ['The independent variable is wheel type; the measured response is travel distance.', 'Calculate A’s mean: (80 + 82 + 78) ÷ 3 = 80 cm.', 'Calculate B’s mean: (92 + 90 + 94) ÷ 3 = 92 cm.', 'All three B distances exceed all three A distances here, and the mean is 12 cm greater. Limit the conclusion to these cars and test conditions.'],
        answer: 'Wheel type B produced longer travel distances in this test, with a mean of 92 cm compared with 80 cm for A.'
      },
      {
        prompt: 'Two identical insulated boxes are tested under matched conditions. Temperature decreases are X: 4, 8, 6°C; Y: 5, 7, 6°C. Does the mean show one box cooled less?',
        steps: ['For X, add 4 + 8 + 6 = 18, then divide by 3 to get a mean decrease of 6°C.', 'For Y, add 5 + 7 + 6 = 18, then divide by 3 to get a mean decrease of 6°C.', 'Individual results vary, and both groups have the same mean in these trials.', 'Report no difference in mean cooling here; do not claim the boxes must perform identically in every future test.'],
        answer: 'No. Both mean decreases are 6°C in these trials.'
      }
    ],
    guided: {
      id: 'guided-towel',
      prompt: 'Equal-sized sheets of two paper-towel types are tested with the same soaking and draining procedure. Water held in three trials is A: 10, 11, 9 g; B: 14, 13, 15 g. Which conclusion is supported?',
      options: ['Every sheet of type B always holds exactly 14 g.', 'Type A held more water in these trials.', 'The towels would perform identically because both are paper.', 'Type B held more water on average under the tested conditions.'],
      answer: 'Type B held more water on average under the tested conditions.', accepted: ['Type B held more water on average under the tested conditions.'],
      hint: 'Compare the means, then choose a statement limited to what was tested.',
      explanation: 'A’s mean is (10 + 11 + 9) ÷ 3 = 10 g. B’s mean is (14 + 13 + 15) ÷ 3 = 14 g. These controlled trials support greater average water retention for B under this procedure, not an exact result for every sheet.',
      steps: ['Identify the changed factor and check that size and procedure were held constant.', 'Find the mean amount of water held by each type.', 'Choose the conclusion that matches the direction of the difference without claiming it always occurs.']
    },
    practice: [
      {
        id: 'dissolving-mean',
        prompt: 'In three trials using the same water temperature, volume, sugar mass, and stirring procedure, sugar dissolves in 42, 39, and 45 seconds. What is the mean dissolving time in seconds? Enter a number.',
        answer: '42', accepted: ['42', '42 s', '42 seconds'],
        hint: 'Add all three times, then divide by three.',
        explanation: 'The total is 42 + 39 + 45 = 126 seconds. The mean is 126 ÷ 3 = 42 seconds.'
      },
      {
        id: 'ramp-difference',
        prompt: 'Identical carts are released without a push on the same ramp at two heights. Travel distances are low height: 20, 22, 18 cm; high height: 31, 29, 30 cm. How many centimeters greater is the high-height mean than the low-height mean? Enter a number.',
        answer: '10', accepted: ['10', '10 cm', '10 centimeters'],
        hint: 'Calculate each group’s mean before subtracting.',
        explanation: 'The low-height mean is (20 + 22 + 18) ÷ 3 = 20 cm. The high-height mean is (31 + 29 + 30) ÷ 3 = 30 cm. The difference is 30 − 20 = 10 cm.'
      },
      {
        id: 'seedling-confound',
        prompt: 'A student tests whether light affects seedling growth. Group A gets 8 hours of light and 100 mL of water daily; group B gets 4 hours of light and 50 mL daily. Group A grows more. Which interpretation is justified?',
        options: ['Light alone caused the difference because A received more light.', 'The different light and water amounts prevent isolating the effect of light.', 'Water cannot affect growth, so it need not be controlled.', 'The data prove every plant needs exactly 8 hours of light.'],
        answer: 'The different light and water amounts prevent isolating the effect of light.', accepted: ['The different light and water amounts prevent isolating the effect of light.'],
        hint: 'Count the factors that differ between the groups.',
        explanation: 'Both light and water were changed. Either factor, or their combination, could contribute to the result, so this comparison cannot isolate light’s effect.'
      },
      {
        id: 'identify-response',
        prompt: 'A student tests three parachute canopy areas using the same fabric, hanging mass, release height, and release method. The student measures landing time. Which is the dependent variable?',
        options: ['Canopy area', 'Release height', 'Landing time', 'Hanging mass'],
        answer: 'Landing time', accepted: ['Landing time'],
        hint: 'The dependent variable is the measured response, not the factor deliberately changed.',
        explanation: 'Landing time is measured in response to changing canopy area. Canopy area is the independent variable, while release height and hanging mass are controlled conditions.'
      },
      {
        id: 'variable-results',
        prompt: 'Under otherwise matched conditions, fertilizer A gives plant height gains of 2, 9, and 4 cm; fertilizer B gives gains of 4, 5, and 7 cm. Which statement best handles these small, variable data sets?',
        options: ['B is guaranteed to outperform A in every trial.', 'The 9 cm result should be deleted because it is inconvenient.', 'A must be better because it has the largest single result.', 'The values overlap and vary; more controlled trials would help assess the small mean difference.'],
        answer: 'The values overlap and vary; more controlled trials would help assess the small mean difference.', accepted: ['The values overlap and vary; more controlled trials would help assess the small mean difference.'],
        hint: 'Compare all the measurements, not only the largest one.',
        explanation: 'A’s mean is 5 cm and B’s mean is about 5.33 cm, a small difference compared with the variation among trials. The ranges overlap. More controlled trials would help assess whether the observed difference is dependable.'
      },
      {
        id: 'limited-conclusion',
        prompt: 'Identical covered cups of water start at the same temperature in the same room. After 10 minutes, mean temperature drops over three trials are 3°C with sleeve X and 8°C with sleeve Y. Which conclusion stays within the evidence?',
        options: ['Sleeve X reduced cooling more than sleeve Y during this 10-minute test.', 'Sleeve X stops all energy transfer forever.', 'Sleeve Y would always be worse for every liquid and every container.', 'The water with sleeve X gained 3°C.'],
        answer: 'Sleeve X reduced cooling more than sleeve Y during this 10-minute test.', accepted: ['Sleeve X reduced cooling more than sleeve Y during this 10-minute test.'],
        hint: 'A smaller temperature drop means less cooling during the measured interval.',
        explanation: 'The mean drop with X was smaller under the matched test conditions. The data support this comparison, not a permanent stop to transfer or a claim about every liquid and container.'
      }
    ],
    notebook: {
      prompt: 'An experiment uses identical carts and the same ramp, release point, and release method to compare track surfaces. Travel distances are smooth: 60, 62, 58 cm; rough: 40, 42, 38 cm. Write a conclusion supported by the data, with the variables and a limit.',
      checklist: ['Identify the changed surface and measured travel distance.', 'Calculate both means and name at least two controlled conditions.', 'State a conclusion limited to these surfaces and conditions.'],
      sample: 'The independent variable is track surface, and the dependent variable is travel distance. Cart type, ramp, and release conditions were held the same. The smooth-surface mean is (60 + 62 + 58) ÷ 3 = 60 cm, and the rough-surface mean is (40 + 42 + 38) ÷ 3 = 40 cm. The cart traveled farther on the smooth surface in these trials. These data do not establish the result for every possible cart, surface, or speed.'
    }
  }
];
