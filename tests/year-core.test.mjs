import assert from 'node:assert/strict';
import {freshYearState,hydrateYearState,recordYearAnswer,dailySummary,catchUpQueue,markDaySeen,setLessonStage,markSessionComplete} from '../year-core.js';

let state=freshYearState();
assert.equal(state.version,2);
state=recordYearAnswer(state,{date:'2026-09-24',sessionId:'math-2026-09-24',questionId:'q1',subject:'Math',correct:true,skill:'integer-addition'});
state=recordYearAnswer(state,{date:'2026-09-24',sessionId:'math-2026-09-24',questionId:'q2',subject:'Math',correct:false,skill:'integer-addition'});
state=recordYearAnswer(state,{date:'2026-09-24',sessionId:'science-2026-09-24',questionId:'q1',subject:'Science',correct:true,skill:'variables'});
const summary=dailySummary(state,'2026-09-24');
assert.equal(summary.answered,3);assert.equal(summary.correct,2);assert.equal(summary.accuracy,67);
assert.deepEqual(summary.subjects.Math,{answered:2,correct:1,total:20});
assert.deepEqual(summary.subjects.Science,{answered:1,correct:1,total:20});
assert.equal(summary.completedLessons,0);
state=setLessonStage(state,'math-2026-09-24','practice');
assert.equal(state.sessions['math-2026-09-24'].stage,'practice');
state=markSessionComplete(state,'math-2026-09-24');
assert.equal(state.sessions['math-2026-09-24'].completed,true);
assert.equal(state.sessions['math-2026-09-24'].score,50);
assert.equal(dailySummary(state,'2026-09-24').completedLessons,1);

state=markDaySeen(state,'2026-10-02',['math-2026-09-24','science-2026-09-24','ela-2026-09-24','history-2026-09-24']);
const queue=catchUpQueue(state,'2026-10-05');
assert.equal(queue.length,4,'Missed sessions remain in catch-up');
assert.equal(queue[0].date,'2026-09-24');
assert.equal(hydrateYearState({answers:{bad:'data'}}).version,2);
console.log('Year core: PASS — daily accuracy, per-subject totals, persistent catch-up state.');
