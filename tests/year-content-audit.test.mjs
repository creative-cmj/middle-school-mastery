import assert from 'node:assert/strict';
import {SUBJECTS,weekdayPlans,lessonForDate,assessmentForDate} from '../year-program.js';
const regular=weekdayPlans.filter(day=>day.kind==='lesson');
const assessmentDays=weekdayPlans.filter(day=>day.kind==='assessment');
const seenLessonQuestions=new Set();let lessons=0,questions=0,words=0;
for(const day of regular)for(const subject of SUBJECTS){
 const lesson=lessonForDate(day.date,subject);lessons++;
 assert.equal(lesson.questions.length,20);assert.equal(new Set(lesson.questions.map(q=>q.prompt)).size,20);
 assert(lesson.explanation.join(' ').split(/\s+/).length>=100,`${lesson.id} teaching is too thin`);words+=lesson.explanation.join(' ').split(/\s+/).length;
 for(const q of lesson.questions){questions++;assert.equal(q.options.filter(option=>option===q.answer).length,1,`${q.id} must have exactly one correct option`);assert.equal(new Set(q.options).size,4,`${q.id} duplicate options`);assert(!seenLessonQuestions.has(q.prompt),`copied lesson prompt: ${q.prompt}`);seenLessonQuestions.add(q.prompt);}
}
let assessmentQuestions=0;
for(const day of assessmentDays){const assessment=assessmentForDate(day.date);for(const section of assessment.sections)for(const q of section.questions){assessmentQuestions++;assert(!seenLessonQuestions.has(q.prompt),`assessment copied a lesson prompt: ${q.prompt}`);assert.equal(q.options.filter(option=>option===q.answer).length,1);}}
assert.equal(lessons,676);assert.equal(questions,13520);assert.equal(assessmentQuestions,1152);
console.log(`Year content audit: PASS — ${lessons} taught sessions, ${questions} unique lesson questions, ${assessmentQuestions} new assessment questions, ${words} teaching words.`);
