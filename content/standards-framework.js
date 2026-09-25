// Curriculum crosswalk used by the learning program. Standards frameworks guide scope;
// lessons remain original explanatory and practice content.
export const framework={
 version:'2026-09-grade8',
 subjects:{
  Math:{name:'Common Core Grade 8 Mathematics',strands:['CCSS 8.NS','CCSS 8.EE','CCSS 8.F','CCSS 8.G','CCSS 8.SP']},
  Science:{name:'NGSS Middle School Performance-Expectation Strands',strands:['NGSS MS-PS1','NGSS MS-PS2','NGSS MS-PS3','NGSS MS-PS4','NGSS MS-LS','NGSS MS-ESS','NGSS MS-ETS1']},
  ELA:{name:'Common Core Grade 8 English Language Arts',strands:['CCSS RL/RI.8','CCSS W.8','CCSS SL.8','CCSS L.8']},
  History:{name:'Michigan-oriented U.S. History, Civics, Geography, and Economics',strands:['Michigan Grade 8 U.S. History / Civics','NCSS inquiry, geography, economics, and civic-life themes']}
 },
 sources:[
  {title:'Common Core State Standards — Grade 8 Mathematics',url:'https://www.thecorestandards.org/Math/Content/8/introduction/'},
  {title:'Common Core State Standards — Grade 8 ELA',url:'https://www.thecorestandards.org/ELA-Literacy/'},
  {title:'Next Generation Science Standards',url:'https://www.nextgenscience.org/'},
  {title:'Michigan Department of Education Academic Standards',url:'https://www.michigan.gov/mde/services/academic-standards'}
 ]
};
const aligned=(code,label,rationale)=>({code,label,rationale});
export function standardsForLesson(subject,lesson){
 const unit=String(lesson.unit||''),title=String(lesson.title||'');
 if(subject==='Math'){
  if(unit.includes('Number Systems'))return aligned('CCSS 8.NS','The Number System: irrational numbers, roots, and scientific notation','This lesson builds the Grade 8 number-system and exponent foundation.');
  if(unit.includes('Expressions'))return aligned('CCSS 8.EE','Expressions and Equations: exponents, linear equations, and modeling','This lesson develops Grade 8 algebraic reasoning and linear-equation fluency.');
  if(unit.includes('Functions'))return aligned('CCSS 8.F','Functions: defining, comparing, and modeling functions','This lesson supports Grade 8 function thinking and representation changes.');
  if(unit.includes('Geometry'))return aligned('CCSS 8.G','Geometry: transformations, congruence, similarity, Pythagorean reasoning, and volume','This lesson develops Grade 8 geometric transformations and application reasoning.');
  if(unit.includes('Data'))return aligned('CCSS 8.SP','Statistics and Probability: scatter plots, association, and two-way tables','This lesson develops Grade 8 data-analysis and association reasoning.');
  if(unit.includes('Algebra I'))return aligned('CCSS 8.EE','Grade 8 cumulative algebra bridge','This cumulative lesson reinforces Grade 8 equation, function, or geometric-model reasoning.');
  return aligned('Grade 6–7 prerequisite repair','Focused prerequisite repair before Grade 8 standards work','This brief repair lesson supports later Grade 8 work without replacing the Grade 8 sequence.');
 }
 if(subject==='Science'){
  if(unit.includes('Atomic')||unit.includes('Chemical')||title.match(/matter|atom|element|reaction|material/i))return aligned('NGSS MS-PS1','Matter and Its Interactions','This lesson develops particle, material-property, or reaction reasoning expected in middle-school physical science.');
  if(unit.includes('Forces'))return aligned('NGSS MS-PS2','Motion and Stability: Forces and Interactions','This lesson develops force, motion, and interaction reasoning.');
  if(unit.includes('Energy'))return aligned('NGSS MS-PS3','Energy','This lesson develops energy-transfer, thermal-system, or conservation reasoning.');
  if(unit.includes('Electricity')||title.match(/wave|light|sound|magnet|circuit/i))return aligned('NGSS MS-PS4','Waves and Their Applications in Technologies for Information Transfer','This lesson develops wave, electromagnetic, or information-transfer reasoning.');
  if(unit.includes('Dynamic Earth')||unit.includes('Weather')||unit.includes('Earth in Space')||title.match(/earth|climate|weather|space|plate|rock/i))return aligned('NGSS MS-ESS','Earth and Space Science','This lesson develops Earth-system, weather/climate, or space-system reasoning.');
  if(title.match(/cell|ecosystem|population|adaptation|organism|food web/i))return aligned('NGSS MS-LS','Life Science: systems, ecosystems, heredity, and adaptation','This lesson reinforces a middle-school life-science performance-expectation strand.');
  return aligned('NGSS MS-ETS1','Engineering Design and Scientific Reasoning','This lesson develops evidence, measurement, modeling, or controlled-investigation reasoning.');
 }
 if(subject==='ELA'){
  if(unit.includes('Close Reading'))return aligned('CCSS RL/RI.8','Reading Literature and Informational Text: evidence, theme/central idea, craft, and comparison','This lesson develops Grade 8 close-reading and evidence-based analysis.');
  if(unit.includes('Language'))return aligned('CCSS L.8','Language: conventions, word choice, syntax, and vocabulary','This lesson develops Grade 8 language and editing choices.');
  if(unit.includes('Media'))return aligned('CCSS SL.8','Speaking and Listening: evaluating and presenting information','This lesson develops Grade 8 communication and media-evaluation skills.');
  if(unit.includes('Narrative')||unit.includes('Argument')||unit.includes('Research')||unit.includes('High-School'))return aligned('CCSS W.8','Writing: argument, information, narrative, research, and revision','This lesson develops Grade 8 evidence-based writing and research habits.');
  return aligned('CCSS RL/RI.8','Reading and language prerequisite repair','This short repair lesson supports Grade 8 reading and writing work.');
 }
 if(unit.match(/Industrialization|1920s|Cold War/))return aligned('NCSS inquiry, geography, economics, and civic-life themes','U.S. history and civic-life extension','This lesson connects historical evidence to civic, geographic, or economic reasoning; exact Grade 8 U.S. history eras vary by district.');
 return aligned('Michigan Grade 8 U.S. History / Civics','U.S. history, civics, geography, and economics','This lesson supports the common Michigan Grade 8 emphasis on U.S. history and civic reasoning.');
}
