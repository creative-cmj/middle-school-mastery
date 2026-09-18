import assert from 'node:assert/strict';
import {
  PROGRAM_WEEKS, TEST_WEEKS, curriculum, generateAssessment, gradeAssessment,
  applyAssessment, defaultState, testSchedule, correctionSchedule, buildWeekPlan,
  lessonForActivity, applyLesson, weakSkills
} from '../app-core.js';

assert.equal(PROGRAM_WEEKS, 16, 'program must be 16 weeks');
assert.deepEqual(TEST_WEEKS, [2,4,6,8,10,12,14,16], 'eight biweekly tests required');
for (const subject of ['Math','Science','ELA']) assert.equal(curriculum[subject].length, 16, `${subject} needs 16 weeks`);
const diagnostic = generateAssessment('diagnostic', 'diagnostic', 0);
const major = generateAssessment('test-w8', 'major', 8);
assert.equal(diagnostic.length, 45, 'diagnostic has 45 questions');
assert.equal(major.length, 48, 'major test has 48 questions');
assert.equal(major.filter(q=>q.subject==='Math').length, 16);
assert.equal(major.filter(q=>q.subject==='Science').length, 16);
assert.equal(major.filter(q=>q.subject==='ELA').length, 16);
assert(major.some(q=>q.type==='short answer'), 'assessment must not be multiple-choice only');
const answers = Object.fromEntries(major.map(q=>[q.id,q.options ? q.correct : q.accepted[0]]));
const report = gradeAssessment(major, answers);
assert.equal(report.overall, 100);
assert.deepEqual(report.bySubject, {Math:100, Science:100, ELA:100});
const updated = applyAssessment(defaultState(), report, {id:'test-w8',title:'Week 8 Midpoint Test',week:8});
assert.equal(updated.assessments['test-w8'].overall,100);
assert(updated.xp > 0 && Object.keys(updated.mastery).length > 5, 'tests update learning state');
const schedule = testSchedule('2026-09-17');
assert.equal(schedule.length, 8);
assert.equal(correctionSchedule('2026-09-17').length, 8);
const plan=buildWeekPlan(1, defaultState());
assert.equal(plan.length, 4);
assert(plan.every(day=>day.activities.length===3));
const redistributed=buildWeekPlan(2, defaultState());
assert.equal(redistributed[3].activities.length,4,'one missed activity is redistributed instead of a full stack');
assert.equal(redistributed[3].total,90,'redistributed study day stays within the 60–90 minute target');
assert(redistributed[3].activities.some(item=>item.mode==='Redistributed catch-up'));
const lesson=lessonForActivity(plan[0].activities[0],defaultState());
assert.equal(plan[0].activities[0].topic,'Multiplication','the first Math day must focus on multiplication, not a broad mixed unit');
assert.equal(lesson.questions.length,12);
assert.equal(new Set(lesson.questions.map(question=>question.skill)).size,1,'a daily lesson must stay on one skill');
assert.equal(lesson.skill,'Multiplication');
assert(new Set(lesson.questions.map(question=>question.prompt)).size >= 10,'same-skill practice must use different examples rather than copied questions');
assert(lesson.teach.explanation.length>30 && lesson.teach.example.length>10,'lesson must teach before practice');
const lessonAnswers=Object.fromEntries(lesson.questions.map(q=>[q.id,q.options?q.correct:q.accepted[0]]));
assert.equal(applyLesson(defaultState(),lesson,lessonAnswers).passed,true);
assert.equal(weakSkills({...defaultState(),mastery:{'Math:Slope':{score:62}}}).length,1);
console.log('core learning-system tests: PASS');
