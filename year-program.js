import {mathSequence} from './content/math-sequence.js';
import {scienceSequence} from './content/science-sequence.js';
import {elaSequence} from './content/ela-sequence.js';
import {historySequence} from './content/history-sequence.js';
import {standardsForLesson} from './content/standards-framework.js';

export const SCHOOL_START='2026-09-24';
export const SCHOOL_END='2027-06-11';
export const SUBJECTS=['Math','Science','ELA','History'];
const sequences={Math:mathSequence,Science:scienceSequence,ELA:elaSequence,History:historySequence};
const grades={Math:8,Science:8,ELA:8,History:8};
const subjectTerms={
 Math:['coefficient','variable','equation','ratio','function','slope','factor','integer'],
 Science:['evidence','model','variable','system','energy','particle','pattern','claim'],
 ELA:['evidence','context','claim','audience','structure','revision','tone','reasoning'],
 History:['evidence','perspective','cause','effect','source','geography','rights','government']
};
const bands=['Foundation','Foundation','Foundation','Foundation','Foundation','Normal','Normal','Normal','Normal','Normal','Intermediate','Intermediate','Intermediate','Intermediate','Intermediate','Application','Application','Application','Challenge','Challenge'];
const iso=d=>d.toISOString().slice(0,10);
const addDays=(date,n)=>{const copy=new Date(`${date}T12:00:00`);copy.setDate(copy.getDate()+n);return copy;};
const weekdays=()=>{const days=[];for(let d=new Date(`${SCHOOL_START}T12:00:00`),end=new Date(`${SCHOOL_END}T12:00:00`);d<=end;d.setDate(d.getDate()+1))if(d.getDay()>0&&d.getDay()<6)days.push(iso(d));return days;};
const unique=values=>[...new Set(values.filter(Boolean))];
const slug=s=>String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function choices(answer,subject,seed,index){
 const pool=unique([...seed.vocabulary,...subjectTerms[subject],...seed.skillTags.map(x=>String(x).replaceAll('-',' '))]).filter(x=>x.toLowerCase()!==String(answer).toLowerCase());
 const distractors=[];for(let i=0;distractors.length<3;i++){const candidate=pool[(index+i*3)%pool.length]||`unrelated ${i+1}`;if(!distractors.some(x=>x.toLowerCase()===candidate.toLowerCase()))distractors.push(candidate);}
 const all=[answer,...distractors];const shift=(index*3+seed.title.length)%4;return [...all.slice(shift),...all.slice(0,shift)];
}
function question(seed,subject,lessonId,index,{assessment=false}={}){
 const [one,two,three]=seed.vocabulary;
 const label=assessment?'assessment':'practice';
 const common={id:`${lessonId}-${label}-${index+1}`,band:assessment?(index<4?'Foundation':index<8?'Normal':index<12?'Intermediate':index<15?'Application':'Challenge'):bands[index],skillTags:seed.skillTags,estimatedMinutes:2};
 const make=(prompt,answer,explanation,type='multiple-choice')=>({...common,type,prompt:`${assessment?`Assessment transfer for “${seed.title}”: `:`In “${seed.title},” `}${prompt}`,options:choices(answer,subject,seed,index),answer,accepted:[answer],explanation});
 const prompts=[
  ()=>make(`Which vocabulary word from “${seed.title}” names this central idea: ${seed.objective}`,one,`${one} is one of today’s key terms. Revisit the teaching section and connect the term to the objective.`),
  ()=>make(`A classmate is starting “${seed.title}.” Which term should they define before making a claim or calculation?`,two,`Today’s vocabulary includes ${two}. Precise vocabulary helps make the reasoning checkable.`),
  ()=>make(`Which word best completes this learning reminder from today’s lesson: “Use ${three} carefully when explaining your answer.”`,three,`${three} appears in the lesson vocabulary because it helps name an important part of the reasoning.`),
  ()=>make(`Which prior skill should you reconnect to before working on “${seed.title}”?`,seed.prerequisites[0]||seed.review,`The review says: ${seed.review}`),
  ()=>make(`Which statement matches today’s objective most closely?`,seed.objective,`That is the exact learning goal for this lesson. The examples show how to carry it out.`),
  ()=>make(`Read this first-step reminder: “${seed.review}” What should happen before a final answer is chosen?`,one,`Start by naming or using ${one}; it keeps the work connected to the lesson’s main idea.`),
  ()=>make(`Which choice uses the vocabulary of “${seed.title}” most accurately?`,two,`The lesson teaches ${two} as a precise way to describe this work.`),
  ()=>make(`A learner gets a result but cannot explain why it fits. Which term from today’s lesson would help organize the explanation?`,three,`Use ${three} to describe the reasoning rather than only giving a result.`),
  ()=>make(`Which action best supports the objective “${seed.objective}”?`,one,`The best action begins with ${one} and follows the method shown in the examples.`),
  ()=>make(`Before deciding an answer, what should you compare with the lesson’s worked examples?`,two,`Compare the situation to the examples through ${two}; this helps prevent a shortcut from replacing reasoning.`),
  ()=>make(`A response uses a term but gives no support. Which lesson word points to the missing part of a strong response?`,three,`A strong response needs ${three} used with evidence or shown reasoning.`),
  ()=>make(`Which idea is most important to preserve when moving from the review into this new skill?`,one,`The review prepares you to use ${one} correctly in the new situation.`),
  ()=>make(`Which vocabulary choice would be least likely to describe a random guess and most likely to describe a justified solution?`,two,`${two} belongs in a justified explanation because it names a course concept, not a guess.`),
  ()=>make(`A student says, “I got an answer, so I am done.” Which term from “${seed.title}” reminds the student to explain the method?`,three,`Use ${three} to make the work visible and checkable.`),
  ()=>make(`Which question would best help you self-check work on this lesson?`,one,`Ask how ${one} was used and whether it matches the objective and example steps.`),
  ()=>make(`Apply today’s method to a new situation: which vocabulary lens should guide your first decision?`,two,`The application should start with ${two}, then continue through the lesson’s reasoning pattern.`),
  ()=>make(`A new problem looks different from the examples. Which key idea still transfers from “${seed.title}”?`,three,`The numbers or setting can change; ${three} remains useful for explaining the same skill.`),
  ()=>make(`Which part of a written explanation should make the connection between evidence and conclusion clear?`,one,`${one} is a central concept for making the explanation more than an unsupported answer.`),
  ()=>make(`Challenge: A classmate uses ${two} but reaches a conclusion that conflicts with today’s objective. What should they check first?`,one,`Check whether ${one} was identified and applied according to the stated objective: ${seed.objective}`),
  ()=>make(`Challenge: Which word best helps you explain why your final answer or claim is reasonable?`,three,`${three} helps connect the method, evidence, and conclusion into a defensible response.`)
 ];
 return prompts[index]();
}
function makeLesson(subject,date,sessionIndex){
 const seed=sequences[subject][sessionIndex];
 const id=`${slug(subject)}-${date}`;
 return {...seed,id,date,subject,grade:grades[subject],lessonNumber:sessionIndex+1,standards:standardsForLesson(subject,seed),objectives:[seed.objective,`Use ${seed.vocabulary[0]} and ${seed.vocabulary[1]} to justify a result or claim.`],commonMistakes:[`Using ${seed.vocabulary[0]} as a label without connecting it to evidence or steps.`,`Skipping the check that connects ${seed.vocabulary[1]} to the stated objective.`],estimatedMinutes:45,questions:Array.from({length:20},(_,i)=>question(seed,subject,id,i)),notebook:{prompt:`In 3–5 sentences, explain how you would use ${seed.vocabulary[0]} and ${seed.vocabulary[1]} to meet today’s objective. Include one step from a worked example.`,checklist:['I used at least two lesson vocabulary words.','I named a specific step, detail, calculation, or piece of evidence.','I explained why my conclusion or answer fits the lesson.'],sample:`A strong response names ${seed.vocabulary[0]}, connects it to ${seed.vocabulary[1]}, and explains how the method supports: ${seed.objective}`}};
}
function makeAssessment(date,assessmentNumber,regularCompleted){
 const start=Math.max(0,regularCompleted-10);
 return {id:`assessment-${date}`,date,kind:'assessment',assessmentNumber,title:`Biweekly Assessment ${assessmentNumber}`,sections:SUBJECTS.map(subject=>{
  const seeds=sequences[subject].slice(start,regularCompleted);
  const id=`assessment-${assessmentNumber}-${slug(subject)}`;
  return {id,date,subject,title:`${subject} — Biweekly Assessment ${assessmentNumber}`,skillTags:unique(seeds.flatMap(x=>x.skillTags)).slice(0,12),questions:Array.from({length:16},(_,i)=>question(seeds[i%seeds.length],subject,id,i,{assessment:true}))};
 })};
}
let regular=0,assessmentNumber=0;
export const weekdayPlans=weekdays().map((date,index)=>{
 const isAssessment=(index+1)%10===0;
 if(isAssessment){assessmentNumber++;return {date,kind:'assessment',assessment:makeAssessment(date,assessmentNumber,regular),sessions:SUBJECTS.map(subject=>({id:`assessment-${assessmentNumber}-${slug(subject)}`,subject,kind:'assessment'}))};}
 const sessions=SUBJECTS.map(subject=>({id:`${slug(subject)}-${date}`,subject,kind:'lesson',lessonIndex:regular}));regular++;return {date,kind:'lesson',sessions};
});
export function lessonForDate(date,subject){
 const plan=weekdayPlans.find(day=>day.date===date&&day.kind==='lesson');if(!plan||!SUBJECTS.includes(subject))return null;
 const session=plan.sessions.find(x=>x.subject===subject);return makeLesson(subject,date,session.lessonIndex);
}
export function assessmentForDate(date){return weekdayPlans.find(day=>day.date===date&&day.kind==='assessment')?.assessment||null;}
if(weekdayPlans.length!==187||regular!==169||assessmentNumber!==18)throw new Error('Year calendar generation mismatch.');
