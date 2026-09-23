import assert from 'node:assert/strict';
import {mathLessons} from '../lessons/math.js';
import {scienceLessons} from '../lessons/science.js';
import {elaLessons} from '../lessons/ela.js';
import {checkAnswer} from '../workbook-core.js';
const all=[...mathLessons,...scienceLessons,...elaLessons];
assert.deepEqual([mathLessons.length,scienceLessons.length,elaLessons.length],[10,8,8]);
assert.equal(new Set(all.map(l=>l.id)).size,all.length);
let questions=0,words=0;
for(const l of all){
 assert.equal(l.grade,8);assert(['Math','Science','ELA'].includes(l.subject));
 assert(l.title&&l.objective&&l.id.startsWith(l.subject.toLowerCase()+'-'));
 assert(l.learn.length>=3,`${l.id}: needs real teaching`);
 const length=l.learn.join(' ').split(/\s+/).length;
 assert(length>=100,`${l.id}: explanation too thin (${length} words)`);words+=length;
 assert.equal(l.examples.length,2);
 for(const ex of l.examples){assert(ex.prompt&&ex.answer);assert(ex.steps.length>=3);}
 assert(l.guided.steps.length>=3);
 assert.equal(l.practice.length,6);
 const qs=[l.guided,...l.practice];
 assert.equal(new Set(qs.map(q=>q.id)).size,qs.length,`${l.id}: ids collide`);
 assert.equal(new Set(qs.map(q=>q.prompt)).size,qs.length,`${l.id}: repeated questions`);
 for(const q of qs){
  questions++;assert(q.prompt&&q.answer&&q.hint&&q.explanation);
  assert(Array.isArray(q.accepted)&&q.accepted.length>0);
  assert(checkAnswer(q,q.answer),`${l.id}/${q.id}: displayed answer rejected`);
  assert(!checkAnswer(q,''));
  if(q.options){assert.equal(new Set(q.options).size,q.options.length,`${l.id}/${q.id}: duplicate options`);assert.equal(q.options.filter(o=>checkAnswer(q,o)).length,1,`${l.id}/${q.id}: needs exactly one correct choice`);}
 }
 assert(l.notebook.prompt&&l.notebook.sample);assert(l.notebook.checklist.length>=3);
}
console.log(JSON.stringify({result:'PASS',lessons:all.length,questions,teachingWords:words,subjects:{Math:mathLessons.length,Science:scienceLessons.length,ELA:elaLessons.length}}));
