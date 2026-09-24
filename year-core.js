export const YEAR_STORAGE_KEY='middle-school-year.v2';
const empty=()=>({version:2,answers:{},sessions:{},seenDates:[],catchUp:{},mastery:{},tests:{}});
export function freshYearState(){return empty();}
export function hydrateYearState(raw){
 const base=empty();
 if(!raw||typeof raw!=='object')return base;
 return {...base,...raw,answers:raw.answers&&typeof raw.answers==='object'?raw.answers:{},sessions:raw.sessions&&typeof raw.sessions==='object'?raw.sessions:{},seenDates:Array.isArray(raw.seenDates)?raw.seenDates:[],catchUp:raw.catchUp&&typeof raw.catchUp==='object'?raw.catchUp:{},mastery:raw.mastery&&typeof raw.mastery==='object'?raw.mastery:{},tests:raw.tests&&typeof raw.tests==='object'?raw.tests:{}};
}
const clone=state=>structuredClone(hydrateYearState(state));
export function recordYearAnswer(state,{date,sessionId,questionId,subject,correct,skill}){
 const next=clone(state),key=`${sessionId}:${questionId}`;
 next.answers[key]={date,sessionId,questionId,subject,correct:!!correct,skill,answeredAt:new Date().toISOString()};
 const prior=next.mastery[skill]||{subject,skill,correct:0,total:0};prior.total++;if(correct)prior.correct++;prior.accuracy=Math.round(100*prior.correct/prior.total);next.mastery[skill]=prior;
 return next;
}
export function dailySummary(state,date){
 const answers=Object.values(hydrateYearState(state).answers).filter(x=>x.date===date);
 const subjects=Object.fromEntries(['Math','Science','ELA','History'].map(subject=>{const own=answers.filter(x=>x.subject===subject);return [subject,{answered:own.length,correct:own.filter(x=>x.correct).length,total:20}]}));
 const completedLessons=Object.values(hydrateYearState(state).sessions).filter(record=>record.completed&&String(record.id).endsWith(date)).length;
 const correct=answers.filter(x=>x.correct).length;
 return {answered:answers.length,correct,accuracy:answers.length?Math.round(correct*100/answers.length):0,subjects,completedLessons};
}
export function markDaySeen(state,seenDate,sessionIds=[]){
 const next=clone(state);if(!next.seenDates.includes(seenDate))next.seenDates.push(seenDate);
 for(const id of sessionIds){const date=id.split('-').slice(-3).join('-');const answered=Object.values(next.answers).filter(x=>x.sessionId===id).length;if(answered<20)next.catchUp[id]={id,date,answered,total:20};}
 return next;
}
export function setLessonStage(state,sessionId,stage){
 const next=clone(state),record=next.sessions[sessionId]||{id:sessionId,stage:'learn',completed:false};
 next.sessions[sessionId]={...record,stage};return next;
}
export function markSessionComplete(state,sessionId){
 const next=clone(state),record=next.sessions[sessionId]||{id:sessionId,stage:'practice',completed:false};
 const attempts=Object.values(next.answers).filter(answer=>answer.sessionId===sessionId);
 const score=attempts.length?Math.round(100*attempts.filter(answer=>answer.correct).length/attempts.length):0;
 next.sessions[sessionId]={...record,completed:true,score,completedAt:new Date().toISOString()};
 delete next.catchUp[sessionId];return next;
}
export function catchUpQueue(state){return Object.values(hydrateYearState(state).catchUp).filter(item=>Object.values(hydrateYearState(state).answers).filter(x=>x.sessionId===item.id).length<20).sort((a,b)=>a.date.localeCompare(b.date)||a.id.localeCompare(b.id));}
