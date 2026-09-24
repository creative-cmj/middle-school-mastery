import assert from 'node:assert/strict';
import {SCHOOL_START,SCHOOL_END,SUBJECTS,weekdayPlans,lessonForDate,assessmentForDate} from '../year-program.js';

assert.equal(SCHOOL_START,'2026-09-24');
assert.equal(SCHOOL_END,'2027-06-11');
assert.deepEqual(SUBJECTS,['Math','Science','ELA','History']);
assert.equal(weekdayPlans.length,187,'Every weekday through the selected final day needs a plan');
assert.equal(weekdayPlans[0].date,'2026-09-24');
assert.equal(weekdayPlans.at(-1).date,'2027-06-11');
assert(weekdayPlans.every(day=>day.date && day.sessions.length===4),'Each weekday needs all four subjects');
assert.equal(new Set(weekdayPlans.flatMap(day=>day.sessions.map(x=>x.id))).size,748,'Every subject session needs a stable unique ID');
assert.equal(weekdayPlans.filter(day=>day.kind==='assessment').length,18,'A biweekly assessment is due after every ten school weekdays');
assert.equal(weekdayPlans.filter(day=>day.kind==='lesson').length,169);

const first=lessonForDate('2026-09-24','Math');
assert.equal(first.subject,'Math');
assert.equal(first.grade,8);
assert(first.unit && first.title && first.objectives.length>=2 && first.review && first.explanation.length>=3);
assert(first.vocabulary.length>=3 && first.examples.length>=2 && first.commonMistakes.length>=2);
assert.equal(first.questions.length,20);
assert.equal(new Set(first.questions.map(q=>q.id)).size,20);
assert.equal(new Set(first.questions.map(q=>q.prompt)).size,20);
assert.deepEqual(first.questions.map(q=>q.band),['Foundation','Foundation','Foundation','Foundation','Foundation','Normal','Normal','Normal','Normal','Normal','Intermediate','Intermediate','Intermediate','Intermediate','Intermediate','Application','Application','Application','Challenge','Challenge']);
assert(first.questions.every(q=>q.answer && q.explanation && q.skillTags.length>0 && q.type));

const assessmentDates=weekdayPlans.filter(day=>day.kind==='assessment').map(day=>day.date);
for(const date of [assessmentDates[0],assessmentDates.at(-1)]){
 const assessment=assessmentForDate(date);
 assert(assessment,`${date} assessment missing`);
 assert.equal(assessment.sections.length,4);
 for(const section of assessment.sections){
  assert.equal(section.questions.length,16);
  assert.equal(new Set(section.questions.map(q=>q.id)).size,16);
  assert(section.questions.every(q=>q.answer&&q.explanation));
 }
}
assert.equal(lessonForDate('2026-09-27','Math'),null,'Weekends should have no required lesson');
console.log(`Year program: PASS — ${weekdayPlans.length} weekday plans, ${weekdayPlans.filter(x=>x.kind==='lesson').length*4} instructional sessions, 18 four-subject assessments.`);
