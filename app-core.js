export const PROGRAM_WEEKS = 16;
export const STUDY_DAYS_PER_WEEK = 4;
export const TEST_WEEKS = [2, 4, 6, 8, 10, 12, 14, 16];
export const SUBJECTS = ['Math', 'Science', 'ELA'];

export const curriculum = {
  Math: [
    ['6', 'Whole-number operations', 'Fractions, decimals, ratios, rates, percent, integers, and order of operations'],
    ['6', 'Ratios & percent reasoning', 'Unit rates, proportions, percent increase/decrease, and word problems'],
    ['6', 'Expressions & equations', 'Variables, combining like terms, distributive property, and one-step equations'],
    ['6', 'Geometry & data', 'Coordinate planes, area, circumference, volume, statistics, and probability'],
    ['7', 'Rational numbers', 'Positive and negative rational numbers, absolute value, and multi-step operations'],
    ['7', 'Proportional relationships', 'Constants of proportionality, scale drawings, percents, and real-world rates'],
    ['7', 'Algebraic reasoning', 'Two-step equations, inequalities, expressions, and multi-step word problems'],
    ['7', 'Geometry & probability', 'Angles, surface area, volume, sampling, and probability models'],
    ['8', 'Exponents & scientific notation', 'Powers, roots, scientific notation, and irrational numbers'],
    ['8', 'Linear relationships', 'Slope, y-intercept, graphing, functions, and comparing representations'],
    ['8', 'Systems & transformations', 'Systems of equations, transformations, congruence, and similarity'],
    ['8', 'Pythagorean theorem', 'Right triangles, distance, volume, and multi-step applications'],
    ['8', 'Modeling & functions', 'Real-world linear models, nonlinear comparisons, and interpretation'],
    ['mix', 'Cumulative problem solving', 'Mixed grade 6–8 reasoning and challenge word problems'],
    ['mix', 'High-school bridge', 'Algebra fluency, functions, geometry reasoning, and proof-like explanations'],
    ['mix', 'Final mastery review', 'New cumulative problems across the full middle-school sequence']
  ],
  Science: [
    ['6', 'Scientific investigation', 'Questions, hypotheses, variables, controls, measurement, tables, and graphs'],
    ['6', 'Matter & particles', 'States of matter, atoms, elements, molecules, compounds, and changes'],
    ['6', 'Forces & energy', 'Motion, speed, forces, gravity, friction, kinetic, and potential energy'],
    ['6', 'Life & ecosystems', 'Cells, photosynthesis, food webs, energy flow, and ecosystems'],
    ['7', 'Thermal energy & waves', 'Heat transfer, sound, light, wavelength, and energy transfer'],
    ['7', 'Earth systems', 'Weather, climate, water cycle, rocks, minerals, and Earth processes'],
    ['7', 'Genetics & adaptation', 'DNA basics, heredity, natural selection, and adaptations'],
    ['7', 'Earth in space', 'Sun, Moon, solar system, gravity, seasons, and scale'],
    ['8', 'Newtonian motion', 'Newton’s laws, velocity, acceleration, forces, and data interpretation'],
    ['8', 'Electricity & magnetism', 'Circuits, current, voltage models, magnets, and fields'],
    ['8', 'Chemical reactions', 'Conservation, properties, reaction evidence, and particle models'],
    ['8', 'Earth history & plate tectonics', 'Fossils, rock cycle, plate boundaries, earthquakes, and volcanoes'],
    ['8', 'Experimental analysis', 'Claims, evidence, reasoning, graphs, errors, and controlled experiments'],
    ['mix', 'Cumulative scientific reasoning', 'Data, experiments, models, and explanations from all units'],
    ['mix', 'High-school bridge', 'Evidence-based analysis and multi-variable scientific scenarios'],
    ['mix', 'Final mastery review', 'New cumulative scientific reasoning across grades 6–8']
  ],
  ELA: [
    ['6', 'Sentence foundations', 'Parts of speech, subjects, predicates, complete sentences, and punctuation'],
    ['6', 'Reading for meaning', 'Main idea, supporting details, context clues, and summary'],
    ['6', 'Grammar & conventions', 'Fragments, run-ons, commas, apostrophes, capitalization, and editing'],
    ['6', 'Paragraph writing', 'Topic sentences, evidence, explanations, transitions, and conclusions'],
    ['7', 'Inference & evidence', 'Inference, text evidence, author’s purpose, point of view, tone, and mood'],
    ['7', 'Narrative & literary analysis', 'Plot, characterization, conflict, theme, and figurative language'],
    ['7', 'Argument writing', 'Claims, reasons, evidence, counterclaims, and organization'],
    ['7', 'Informative writing', 'Research, structure, precise language, and revision'],
    ['8', 'Advanced sentence craft', 'Clauses, phrases, semicolons, parallelism, and sentence variety'],
    ['8', 'Close reading', 'Comparing texts, evaluating claims, central ideas, and evidence quality'],
    ['8', 'Analytical writing', 'Thesis statements, logical reasoning, citations, and strong conclusions'],
    ['8', 'Revision & editing', 'Word choice, cohesion, grammar, punctuation, and audience'],
    ['8', 'Research & synthesis', 'Source evaluation, evidence integration, and explanatory responses'],
    ['mix', 'Cumulative reading & writing', 'Complex passages, grammar, evidence, and concise written analysis'],
    ['mix', 'High-school bridge', 'Rhetoric, synthesis, close reading, and polished argument'],
    ['mix', 'Final mastery review', 'New cumulative reading, editing, and writing tasks']
  ]
};

export function seeded(seed) {
  let value = 0;
  for (const char of String(seed)) value = (value * 31 + char.charCodeAt(0)) >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}
export function pick(rng, values) { return values[Math.floor(rng() * values.length)]; }
export function shuffle(rng, values) { return [...values].sort(() => rng() - 0.5); }
export function uid(prefix = 'id') { return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`; }
export function skillStatus(score = 0) {
  if (score >= 90) return 'Mastered';
  if (score >= 80) return 'Proficient';
  if (score >= 70) return 'Practicing';
  if (score > 0) return 'Learning';
  return 'Not Started';
}
export function dateISO(date = new Date()) { return new Date(date).toISOString().slice(0, 10); }
export function addDays(date, days) { const copy = new Date(date); copy.setDate(copy.getDate() + days); return copy; }
export function getWeekForDate(startDate, now = new Date()) {
  const elapsed = Math.max(0, Math.floor((new Date(now).setHours(0,0,0,0) - new Date(startDate).setHours(0,0,0,0)) / 86400000));
  return Math.min(PROGRAM_WEEKS, Math.floor(elapsed / 7) + 1);
}
export function phaseForWeek(week) {
  if (week <= 4) return 'Foundation Refresh';
  if (week <= 8) return 'Skill Building';
  if (week <= 13) return '8th-Grade Mastery';
  return 'Cumulative Mastery + High-School Prep';
}

function choiceQuestion({ subject, skill, prompt, options, correct, explanation, practice, type = 'multiple choice', hint }) {
  return { id: uid('q'), subject, skill, prompt, options, correct, explanation, practice, type, hint: hint || 'Underline the information the question gives you, then identify the rule or evidence that applies.' };
}
function shortQuestion({ subject, skill, prompt, accepted, correct, explanation, practice, hint }) {
  return { id: uid('q'), subject, skill, prompt, options: null, accepted: accepted.map(value => String(value).toLowerCase().replace(/\s+/g, ' ').trim()), correct, explanation, practice, type: 'short answer', hint: hint || 'Write one clear step or piece of evidence before you answer.' };
}

function mathQuestion(rng, index) {
  const template = index % 12;
  const a = 3 + Math.floor(rng() * 9), b = 2 + Math.floor(rng() * 8), c = 2 + Math.floor(rng() * 6);
  if (template === 0) { const ans = a * b + c; return choiceQuestion({ subject:'Math',skill:'Order of operations',prompt:`Evaluate: ${a} × ${b} + ${c}`,options:shuffle(rng,[String(ans),String((a+b)*c),String(a*(b+c)),String(a*b-c)]),correct:String(ans),explanation:`Multiply first: ${a} × ${b} = ${a*b}; then add ${c} to get ${ans}.`,practice:'Do three expressions where multiplication and addition appear together.',hint:'Which operation happens before addition?' }); }
  if (template === 1) { const ans = a + b; return choiceQuestion({ subject:'Math',skill:'Fractions',prompt:`What is ${a}/12 + ${b}/12 in simplest form?`,options:shuffle(rng,[`${ans}/12`,`${a+b}/24`,`${Math.abs(a-b)}/12`,`12/${ans}`]),correct:`${ans}/12`,explanation:'The denominators already match, so add the numerators and keep the denominator.',practice:'Add and subtract fractions with common denominators.' }); }
  if (template === 2) { const rate = 3 + Math.floor(rng()*7), units = 4 + Math.floor(rng()*6), ans=rate*units; return choiceQuestion({ subject:'Math',skill:'Unit rates',prompt:`A bike travels ${rate} miles each hour. At this rate, how far does it travel in ${units} hours?`,options:shuffle(rng,[`${ans} miles`,`${rate+units} miles`,`${rate} miles`,`${units*2} miles`]),correct:`${ans} miles`,explanation:`Distance = rate × time = ${rate} × ${units} = ${ans} miles.`,practice:'Write a rate × time equation before calculating.' }); }
  if (template === 3) { const p=10*(2+Math.floor(rng()*6)), amount=20+5*Math.floor(rng()*10), ans=amount*p/100; return choiceQuestion({ subject:'Math',skill:'Percentages',prompt:`What is ${p}% of ${amount}?`,options:shuffle(rng,[String(ans),String(amount+p),String(amount-p),String(p/amount)]),correct:String(ans),explanation:`Convert ${p}% to ${p/100}, then multiply ${amount} × ${p/100} = ${ans}.`,practice:'Find 10%, then use it to build nearby percents.' }); }
  if (template === 4) { const x=2+Math.floor(rng()*9), k=2+Math.floor(rng()*6), result=k*x+3; return shortQuestion({subject:'Math',skill:'Two-step equations',prompt:`Solve for x: ${k}x + 3 = ${result}`,accepted:[x],correct:String(x),explanation:`Subtract 3 to get ${k}x = ${result-3}; divide by ${k}, so x = ${x}.`,practice:'Undo addition/subtraction first, then multiplication/division.',hint:'What operation undoes + 3?' }); }
  if (template === 5) { const slope=2+Math.floor(rng()*4), x1=1+Math.floor(rng()*3), y1=2+Math.floor(rng()*5), x2=x1+2, y2=y1+slope*2; return shortQuestion({subject:'Math',skill:'Slope',prompt:`Find the slope between (${x1}, ${y1}) and (${x2}, ${y2}). Enter a number or fraction.`,accepted:[slope],correct:String(slope),explanation:`Slope = rise/run = (${y2} − ${y1}) / (${x2} − ${x1}) = ${slope*2}/2 = ${slope}.`,practice:'Subtract y-values for rise and x-values for run in the same order.'}); }
  if (template === 6) { const leg1=3+Math.floor(rng()*5), leg2=4+Math.floor(rng()*5), ans=Math.sqrt(leg1*leg1+leg2*leg2).toFixed(2); return shortQuestion({subject:'Math',skill:'Pythagorean theorem',prompt:`A right triangle has legs ${leg1} and ${leg2}. Find the hypotenuse to the nearest hundredth.`,accepted:[ans,Math.sqrt(leg1*leg1+leg2*leg2).toFixed(1)],correct:ans,explanation:`c² = ${leg1}² + ${leg2}² = ${leg1*leg1+leg2*leg2}; c = √${leg1*leg1+leg2*leg2} ≈ ${ans}.`,practice:'Draw and label the hypotenuse opposite the right angle.'}); }
  if (template === 7) { const base=5+Math.floor(rng()*7), height=3+Math.floor(rng()*6), ans=base*height/2; return choiceQuestion({subject:'Math',skill:'Area of triangles',prompt:`What is the area of a triangle with base ${base} units and height ${height} units?`,options:shuffle(rng,[`${ans} square units`,`${base*height} square units`,`${base+height} square units`,`${height*2} square units`]),correct:`${ans} square units`,explanation:`Triangle area = ½bh = ½(${base})(${height}) = ${ans}.`,practice:'Use ½ × base × perpendicular height.'}); }
  if (template === 8) { const n=2+Math.floor(rng()*7), exp=2+Math.floor(rng()*2), ans=n**exp; return choiceQuestion({subject:'Math',skill:'Exponents',prompt:`Evaluate ${n}<sup>${exp}</sup>.`,options:shuffle(rng,[String(ans),String(n*exp),String(n+exp),String(exp**n)]),correct:String(ans),explanation:`${n}<sup>${exp}</sup> means multiply ${n} by itself ${exp} times.`,practice:'Expand an exponent as repeated multiplication before calculating.'}); }
  if (template === 9) { const start=40+Math.floor(rng()*40), change=10+Math.floor(rng()*20), ans=start*(100-change)/100; return shortQuestion({subject:'Math',skill:'Percent decrease',prompt:`A $${start} item is discounted by ${change}%. What is its new price?`,accepted:[ans,ans.toFixed(2)],correct:`$${ans.toFixed(2)}`,explanation:`The discount is ${change}% of $${start}; multiply by ${1-change/100} to get $${ans.toFixed(2)}.`,practice:'Use original × (1 − decimal percent).'}); }
  if (template === 10) { const yint=-4+Math.floor(rng()*9), slope=1+Math.floor(rng()*5), x=2+Math.floor(rng()*5), y=slope*x+yint; return shortQuestion({subject:'Math',skill:'Linear equations',prompt:`For y = ${slope}x ${yint>=0?'+':'−'} ${Math.abs(yint)}, what is y when x = ${x}?`,accepted:[y],correct:String(y),explanation:`Substitute ${x}: y = ${slope}(${x}) ${yint>=0?'+':'−'} ${Math.abs(yint)} = ${y}.`,practice:'Substitute carefully and keep negative signs attached.'}); }
  const values=[4,6,7,9,12]; const sorted=shuffle(rng,values); const mean=values.reduce((s,n)=>s+n,0)/values.length; return choiceQuestion({subject:'Math',skill:'Mean',prompt:`Find the mean of ${sorted.join(', ')}.`,options:shuffle(rng,[String(mean),String(7),String(12),String(4)]),correct:String(mean),explanation:`Add the values: ${values.reduce((s,n)=>s+n,0)}. Divide by ${values.length} to get ${mean}.`,practice:'Write sum ÷ number of values for every mean problem.'});
}

function scienceQuestion(rng, index) {
  const template=index%12;
  if(template===0) return choiceQuestion({subject:'Science',skill:'Variables in experiments',prompt:'A student changes the amount of sunlight a plant receives and measures its height after two weeks. What is the independent variable?',options:shuffle(rng,['Amount of sunlight','Plant height','Type of ruler','Two-week time period']),correct:'Amount of sunlight',explanation:'The independent variable is deliberately changed by the experimenter.',practice:'Identify what was changed, what was measured, and what was kept the same.'});
  if(template===1) return choiceQuestion({subject:'Science',skill:'Chemical changes',prompt:'Which observation is the strongest evidence that a chemical change occurred?',options:shuffle(rng,['A gas forms when two liquids mix','Ice melts in a cup','Paper is cut into strips','Salt dissolves in water']),correct:'A gas forms when two liquids mix',explanation:'Gas formation can show that new substances formed. The other options can be physical changes.',practice:'Separate changes in form from evidence of a new substance.'});
  if(template===2) { const dist=60+10*Math.floor(rng()*7), time=3+Math.floor(rng()*5), speed=dist/time; return shortQuestion({subject:'Science',skill:'Speed',prompt:`A runner travels ${dist} meters in ${time} seconds. What is the runner's average speed in meters per second?`,accepted:[speed,speed.toFixed(1),speed.toFixed(2)],correct:`${speed} m/s`,explanation:`Speed = distance ÷ time = ${dist} ÷ ${time} = ${speed} m/s.`,practice:'Put distance over time, then include units.'}); }
  if(template===3) return choiceQuestion({subject:'Science',skill:'Newton’s laws',prompt:'A skateboard rolls forward, then slows on rough pavement. Which force most directly explains the slowing?',options:shuffle(rng,['Friction','Gravity','Magnetism','Inertia']),correct:'Friction',explanation:'Friction acts opposite the motion between the wheels and rough surface.',practice:'Connect a force to the direction it acts and the motion change it causes.'});
  if(template===4) return choiceQuestion({subject:'Science',skill:'Energy transfer',prompt:'A raised book falls from a shelf. Which change happens as it falls?',options:shuffle(rng,['Gravitational potential energy decreases while kinetic energy increases','Kinetic energy decreases while potential energy increases','Both kinetic and potential energy increase','Energy disappears']),correct:'Gravitational potential energy decreases while kinetic energy increases',explanation:'As height decreases, stored gravitational energy transfers into motion energy.',practice:'Track where energy is stored and where it moves.'});
  if(template===5) return choiceQuestion({subject:'Science',skill:'Cell organelles',prompt:'Which organelle releases usable energy from food for a cell?',options:shuffle(rng,['Mitochondrion','Cell wall','Chloroplast','Nucleus']),correct:'Mitochondrion',explanation:'Mitochondria carry out cellular respiration, releasing usable energy from food.',practice:'Match each organelle to its job, not just its shape.'});
  if(template===6) return choiceQuestion({subject:'Science',skill:'Food webs',prompt:'In a food web, grass → rabbit → fox. If rabbit numbers drop sharply, which change is most likely at first?',options:shuffle(rng,['Foxes have less available food','Grass has less sunlight','Foxes make food through photosynthesis','Rabbits become producers']),correct:'Foxes have less available food',explanation:'Foxes depend on rabbits for energy, so fewer rabbits means less food for foxes.',practice:'Trace arrows as energy moving from food to consumer.'});
  if(template===7) return choiceQuestion({subject:'Science',skill:'Weather vs. climate',prompt:'Which statement describes climate rather than weather?',options:shuffle(rng,['This region usually has warm, dry summers','It rained heavily this afternoon','A cold front arrives tomorrow','Wind speed is 18 mph today']),correct:'This region usually has warm, dry summers',explanation:'Climate is the typical long-term pattern; weather is short-term conditions.',practice:'Ask whether the statement is about a day or a long pattern.'});
  if(template===8) return choiceQuestion({subject:'Science',skill:'Plate tectonics',prompt:'Most earthquakes and volcanoes occur near plate boundaries because plates...',options:shuffle(rng,['Interact, collide, separate, or slide past one another','Never move','Are made only of water','Block all heat from Earth’s interior']),correct:'Interact, collide, separate, or slide past one another',explanation:'Plate movement and interaction release energy and can create volcanoes.',practice:'Link boundary motion to its geological result.'});
  if(template===9) return choiceQuestion({subject:'Science',skill:'Scientific evidence',prompt:'Which conclusion is best supported if three trials show plants given fertilizer grew taller than equal plants without fertilizer?',options:shuffle(rng,['The fertilizer was associated with greater plant growth in this investigation','Fertilizer always makes every plant taller','Plant height caused the fertilizer','The trial proves all soils are identical']),correct:'The fertilizer was associated with greater plant growth in this investigation',explanation:'Evidence supports a careful claim about this investigation, not an absolute claim about every situation.',practice:'Make claims no broader than the evidence.'});
  if(template===10) return choiceQuestion({subject:'Science',skill:'Electric circuits',prompt:'In a simple closed circuit with a battery, wires, and bulb, what happens when the circuit is opened?',options:shuffle(rng,['Current stops and the bulb turns off','The battery gains charge','The bulb gets brighter','The wires become magnets forever']),correct:'Current stops and the bulb turns off',explanation:'An open circuit breaks the path needed for electric current.',practice:'Sketch whether a complete loop exists.'});
  return choiceQuestion({subject:'Science',skill:'Data interpretation',prompt:'A graph shows that as ramp height increases, a toy car’s average speed also increases. Which statement best describes the relationship?',options:shuffle(rng,['The data show a positive relationship between ramp height and speed','Ramp height and speed have no relationship','Speed causes ramp height','The graph proves the car can never slow down']),correct:'The data show a positive relationship between ramp height and speed',explanation:'Both measured values increase together in the data; that is a positive relationship.',practice:'Describe the pattern first, then avoid claims the graph cannot prove.'});
}

const passage = 'When the city library extended its Saturday hours, visitors did not simply use the extra time to borrow books. A student group began holding quiet study sessions, parents used the children’s room for reading aloud, and a local historian offered short talks about the neighborhood. The change showed that a library can become a shared learning space when people have time to gather there.';
function elaQuestion(rng,index) {
  const template=index%12;
  if(template===0) return choiceQuestion({subject:'ELA',skill:'Main idea',prompt:`Read the passage: “${passage}” What is the central idea?`,options:shuffle(rng,['Extended library hours helped the library serve more learning needs in the community.','Libraries should only lend books.','The historian wrote every library book.','Saturday is the only useful day to study.']),correct:'Extended library hours helped the library serve more learning needs in the community.',explanation:'The details about studying, reading aloud, and talks all support the broader idea that the library became a fuller learning space.',practice:'Ask which answer includes the important details without being too narrow.'});
  if(template===1) return choiceQuestion({subject:'ELA',skill:'Text evidence',prompt:`Which detail from the passage best supports the idea that the library served different age groups?`,options:shuffle(rng,['Parents used the children’s room for reading aloud.','The library extended Saturday hours.','A local historian offered talks.','Visitors borrowed books.']),correct:'Parents used the children’s room for reading aloud.',explanation:'This detail directly shows adults and children using the library together.',practice:'Choose evidence that most directly proves the specific claim.'});
  if(template===2) return choiceQuestion({subject:'ELA',skill:'Context clues',prompt:'In the sentence “The scientist was meticulous, checking every measurement twice,” what does meticulous most likely mean?',options:shuffle(rng,['Very careful and precise','Quick to become angry','Unable to measure','Not interested in details']),correct:'Very careful and precise',explanation:'Checking every measurement twice is a clue that the scientist is careful and precise.',practice:'Use the nearby action or example as a clue to an unfamiliar word.'});
  if(template===3) return choiceQuestion({subject:'ELA',skill:'Sentence fragments',prompt:'Which choice is a complete sentence?',options:shuffle(rng,['The telescope revealed a faint comet.','Because the telescope revealed a faint comet.','After looking through the telescope.','Running toward the observatory.']),correct:'The telescope revealed a faint comet.',explanation:'It has a subject (telescope) and a complete predicate (revealed a faint comet).',practice:'Check for both a subject and a complete thought.'});
  if(template===4) return choiceQuestion({subject:'ELA',skill:'Comma usage',prompt:'Choose the sentence with correct comma use.',options:shuffle(rng,['Before the experiment, Maya labeled each container.','Before the experiment Maya, labeled each container.','Before, the experiment Maya labeled each container.','Before the experiment Maya labeled, each container.']),correct:'Before the experiment, Maya labeled each container.',explanation:'An introductory phrase is followed by a comma before the main clause.',practice:'Read for an opening phrase that needs a pause before the complete sentence.'});
  if(template===5) return choiceQuestion({subject:'ELA',skill:'Author’s purpose',prompt:'An article explains how to separate recycling, compost, and landfill waste at home. What is the author’s most likely purpose?',options:shuffle(rng,['To inform readers how to sort waste','To entertain with a fictional adventure','To prove recycling is impossible','To describe a personal vacation']),correct:'To inform readers how to sort waste',explanation:'The article gives practical explanations, which is informative writing.',practice:'Notice whether a text explains, persuades, entertains, or expresses.'});
  if(template===6) return choiceQuestion({subject:'ELA',skill:'Tone',prompt:'Which word best describes the tone of “We can solve this problem if we test our ideas carefully and keep improving them”?',options:shuffle(rng,['Encouraging','Sarcastic','Fearful','Bored']),correct:'Encouraging',explanation:'The sentence motivates readers to persist and improve.',practice:'Look at the writer’s attitude, not just the topic.'});
  if(template===7) return choiceQuestion({subject:'ELA',skill:'Figurative language',prompt:'What type of figurative language appears in “The wind whispered through the branches”?',options:shuffle(rng,['Personification','Simile','Hyperbole','Alliteration']),correct:'Personification',explanation:'Wind is given a human action, whispering.',practice:'Check whether a nonhuman thing is acting like a person.'});
  if(template===8) return choiceQuestion({subject:'ELA',skill:'Thesis statements',prompt:'Which is the strongest thesis for an essay about later school start times?',options:shuffle(rng,['Schools should start later because students need sleep, arrive more alert, and can learn more effectively.','School starts at 7:30.','Many people like sleep.','This essay is about schools.']),correct:'Schools should start later because students need sleep, arrive more alert, and can learn more effectively.',explanation:'It makes a clear claim and previews reasons the essay can develop with evidence.',practice:'Write a debatable claim plus the main reasons you will support.'});
  if(template===9) return choiceQuestion({subject:'ELA',skill:'Semicolons',prompt:'Choose the sentence that correctly uses a semicolon.',options:shuffle(rng,['The data were incomplete; the team repeated the trial.','The data; were incomplete, the team repeated the trial.','The data were incomplete; because the team repeated the trial.','The data were; incomplete the team repeated the trial.']),correct:'The data were incomplete; the team repeated the trial.',explanation:'A semicolon can join two closely related complete sentences.',practice:'Confirm that both sides of a semicolon could stand alone as sentences.'});
  if(template===10) return shortQuestion({subject:'ELA',skill:'Evidence-based writing',prompt:'Write 2–3 sentences: Explain how one detail from the library passage supports its central idea. Quote or name the detail.',accepted:['extended library hours'],correct:'A response that explains a specific detail and connects it to the central idea.',explanation:'A strong response identifies a detail, explains what it shows, and connects it to the central idea.',practice:'Use this frame: “The detail ___ shows ___ because ___.”',hint:'Choose one detail about how people used the library.'});
  return choiceQuestion({subject:'ELA',skill:'Revision',prompt:'Which revision is most precise?',options:shuffle(rng,['The experiment produced a 12% increase in plant height.','The experiment did something good.','The plants were kind of bigger maybe.','The experiment was very, very amazing.']),correct:'The experiment produced a 12% increase in plant height.',explanation:'It uses exact, measurable language rather than vague wording.',practice:'Replace vague words with specific data or observable details.'});
}

export function generateQuestion(subject, seed, index = 0) {
  const rng = seeded(`${seed}-${subject}-${index}`);
  if(subject === 'Math') return mathQuestion(rng,index);
  if(subject === 'Science') return scienceQuestion(rng,index);
  return elaQuestion(rng,index);
}
export function generateAssessment(id, kind = 'major', week = 1) {
  const total = kind === 'diagnostic' ? 45 : 48;
  const perSubject = total / 3;
  const questions=[];
  SUBJECTS.forEach((subject, subjectIndex) => {
    for(let i=0;i<perSubject;i++) {
      const q=generateQuestion(subject, `${id}-w${week}`, i + week + subjectIndex * 4);
      q.id=`${id}-${subject.toLowerCase()}-${i+1}`;
      q.gradeBand = week <= 4 ? '6th-grade foundation' : week <= 8 ? '6th–7th grade cumulative' : '6th–8th grade cumulative';
      questions.push(q);
    }
  });
  return questions;
}
export function assessmentTitle(week, kind = 'major') {
  if(kind === 'diagnostic') return 'Starting Diagnostic';
  if(week === 8) return 'Week 8 Midpoint Test';
  if(week === 16) return 'Week 16 Final Comprehensive Test';
  return `Week ${week} Test`;
}
export function defaultState() {
  return { version: 1, startDate: dateISO(), xp:0, level:1, streak:0, longestStreak:0, completedDays:[], lessons:{}, mastery:{}, assessments:{}, mistakes:[], notes:[], achievements:[], settings:{timer:true, dailyMinutes:75}, lastStudyDate:null };
}
export function hydrateState(raw) { return { ...defaultState(), ...(raw || {}), mastery:raw?.mastery || {}, assessments:raw?.assessments || {}, mistakes:raw?.mistakes || [], notes:raw?.notes || [], lessons:raw?.lessons || {}, completedDays:raw?.completedDays || [] }; }
export function buildWeekPlan(week, state) {
  const plan=[];
  for(let day=1;day<=STUDY_DAYS_PER_WEEK;day++) {
    const subjects = day === 1 ? ['Math','Science','ELA'] : day === 2 ? ['Math','ELA','Science'] : day === 3 ? ['Science','Math','ELA'] : ['ELA','Math','Science'];
    const activities = subjects.map((subject, index) => {
      const [grade, topic, focus] = curriculum[subject][week-1];
      const weak = Object.entries(state?.mastery || {}).find(([key, value]) => key.startsWith(`${subject}:`) && value.score < 70);
      return { id:`w${week}d${day}-${subject}`, subject, grade, topic: weak ? `${topic} + recovery: ${weak[0].split(':')[1]}` : topic, focus, minutes: index===0?30:22, mode: index===0?'Learn + practice':'Read, analyze + respond' };
    });
    plan.push({day, activities, total:activities.reduce((sum,a)=>sum+a.minutes,0), checkpoint:day===4});
  }
  return plan;
}
export function lessonForActivity(activity, state) {
  const questions=Array.from({length: 12},(_, index)=>generateQuestion(activity.subject, `${activity.id}-practice`, index));
  return { ...activity, questions, objective:`Use ${activity.focus.split(',')[0].toLowerCase()} accurately and explain your reasoning.`, offlineTask: activity.subject==='Math' ? 'Show full work for two multi-step problems on paper.' : activity.subject==='Science' ? 'Sketch or label a diagram/model that supports one answer.' : 'Write one evidence-based paragraph in your own words.', masteryRequirement:80 };
}
export function gradeAnswer(question, answer) {
  if(answer === undefined || answer === null || String(answer).trim()==='') return false;
  const norm = String(answer).toLowerCase().replace(/\s+/g,' ').trim();
  if(question.options) return norm === String(question.correct).toLowerCase();
  return (question.accepted || []).some(value => norm === value);
}
export function gradeAssessment(questions, answers) {
  const marked = questions.map(q => ({...q, answer:answers[q.id] ?? '', correctResult:gradeAnswer(q,answers[q.id])}));
  const bySubject=Object.fromEntries(SUBJECTS.map(subject=>{
    const items=marked.filter(q=>q.subject===subject);
    return [subject, Math.round(100*items.filter(q=>q.correctResult).length/items.length)];
  }));
  const overall=Math.round(marked.filter(q=>q.correctResult).length*100/marked.length);
  const skills={};
  marked.forEach(q=>{ if(!skills[q.skill]) skills[q.skill]={correct:0,total:0,subject:q.subject}; skills[q.skill].total++; if(q.correctResult)skills[q.skill].correct++; });
  Object.values(skills).forEach(s=>s.score=Math.round(s.correct*100/s.total));
  return {overall,bySubject,questions:marked,skills};
}
export function applyAssessment(state, report, meta) {
  const next=hydrateState(state);
  next.assessments[meta.id]={...meta, ...report, submittedAt:new Date().toISOString()};
  Object.entries(report.skills).forEach(([skill,value])=>{
    const key=`${value.subject}:${skill}`;
    const prior=next.mastery[key] || {score:0,attempts:0,history:[]};
    const score=prior.attempts ? Math.round(prior.score*.45+value.score*.55) : value.score;
    next.mastery[key]={...prior, subject:value.subject, skill, score, status:skillStatus(score), attempts:prior.attempts+1, history:[...(prior.history||[]),{date:dateISO(),score,source:meta.title}].slice(-8), lastTest:meta.title};
  });
  report.questions.filter(q=>!q.correctResult).forEach(q=>next.mistakes.unshift({id:uid('mistake'), question:q.prompt, answer:q.answer || 'No answer', correct:q.correct, explanation:q.explanation, skill:q.skill, subject:q.subject, source:meta.title, date:dateISO(), corrected:false, laterMastered:false}));
  next.mistakes=next.mistakes.slice(0,200);
  next.xp += Math.round(report.overall*2 + 40);
  next.level=Math.max(1,Math.floor(next.xp/350)+1);
  return next;
}
export function applyLesson(state, lesson, answers) {
  const next=hydrateState(state); const report=gradeAssessment(lesson.questions,answers); const passed=report.overall>=lesson.masteryRequirement;
  next.lessons[lesson.id]={id:lesson.id,subject:lesson.subject,topic:lesson.topic,completedAt:new Date().toISOString(),score:report.overall,passed};
  if(passed && !next.completedDays.includes(lesson.id)) next.completedDays.push(lesson.id);
  Object.entries(report.skills).forEach(([skill,value])=>{
    const key=`${value.subject}:${skill}`; const prior=next.mastery[key]||{score:0,attempts:0,history:[]}; const score=prior.attempts?Math.round(prior.score*.55+value.score*.45):value.score;
    next.mastery[key]={...prior,subject:value.subject,skill,score,status:skillStatus(score),attempts:prior.attempts+1,history:[...(prior.history||[]),{date:dateISO(),score,source:lesson.topic}].slice(-8),lastTest:lesson.topic};
  });
  if(passed) { next.xp+=70; next.level=Math.max(1,Math.floor(next.xp/350)+1); }
  return {state:next,report,passed};
}
export function weakSkills(state) { return Object.values(state.mastery||{}).filter(item=>item.score>0 && item.score<80).sort((a,b)=>a.score-b.score); }
export function testSchedule(startDate) { return TEST_WEEKS.map((week,index)=>({week,id:`test-w${week}`,title:assessmentTitle(week),date:dateISO(addDays(new Date(startDate), (week-1)*7+3)),number:index+1})); }
export function correctionSchedule(startDate) { return testSchedule(startDate).map(test=>({...test,title:`Test Corrections — ${test.title}`,date:dateISO(addDays(new Date(test.date),1)),type:'corrections'})); }
