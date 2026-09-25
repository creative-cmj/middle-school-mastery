import assert from 'node:assert/strict';
import {framework,standardsForLesson} from '../content/standards-framework.js';
import {mathSequence} from '../content/math-sequence.js';
import {scienceSequence} from '../content/science-sequence.js';
import {elaSequence} from '../content/ela-sequence.js';
import {historySequence} from '../content/history-sequence.js';
const sets={Math:mathSequence,Science:scienceSequence,ELA:elaSequence,History:historySequence};
assert.deepEqual(Object.keys(framework.subjects),['Math','Science','ELA','History']);
for(const [subject,lessons] of Object.entries(sets)){
 for(const lesson of lessons){const alignment=standardsForLesson(subject,lesson);assert(alignment.code&&alignment.label&&alignment.rationale,`${subject}/${lesson.title} has no standards focus`);}
}
const mathCodes=new Set(mathSequence.map(x=>standardsForLesson('Math',x).code));
for(const code of ['CCSS 8.NS','CCSS 8.EE','CCSS 8.F','CCSS 8.G','CCSS 8.SP'])assert(mathCodes.has(code),`missing Grade 8 Math strand ${code}`);
const scienceCodes=new Set(scienceSequence.map(x=>standardsForLesson('Science',x).code));
for(const code of ['NGSS MS-PS1','NGSS MS-PS2','NGSS MS-PS3','NGSS MS-PS4','NGSS MS-ESS','NGSS MS-ETS1'])assert(scienceCodes.has(code),`missing middle-school science strand ${code}`);
const elaCodes=new Set(elaSequence.map(x=>standardsForLesson('ELA',x).code));
for(const code of ['CCSS RL/RI.8','CCSS W.8','CCSS SL.8','CCSS L.8'])assert(elaCodes.has(code),`missing Grade 8 ELA strand ${code}`);
for(const term of ['World War','Cold War','Great Depression','September 11'])assert(!historySequence.some(x=>x.title.includes(term)),`Michigan Grade 8 history sequence should not spend its core year on post-Reconstruction ${term}`);
assert(historySequence.some(x=>x.title.includes('Reconstruction')),'Grade 8 U.S. history needs Reconstruction');
console.log('Standards alignment: PASS — every scheduled lesson has a visible Grade 8 standards focus.');
