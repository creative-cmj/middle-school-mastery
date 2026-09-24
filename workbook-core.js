// A new key deliberately leaves the previous app's notes and results untouched.
export const STORAGE_KEY='grade8-workbook.v1';
export const SUBJECTS=['Math','Science','ELA'];
export const STAGES=['Learn','Examples','Together','Practice','Wrap up'];
export function freshProgress(){return {stage:0,unlocked:0,index:0,drafts:{},results:{},guided:{},notebook:'',checklist:[],done:false};}
export function hydrate(raw){return {version:1,subject:SUBJECTS.includes(raw?.subject)?raw.subject:'Math',lastLesson:raw?.lastLesson||null,lessons:raw?.lessons&&typeof raw.lessons==='object'?raw.lessons:{}};}
export function normalize(value){return String(value??'').trim().toLowerCase().replace(/[−–]/g,'-').replace(/\s+/g,' ');}
function numberValue(value){
 const text=normalize(value);
 if(/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(text))return Number(text);
 const m=text.match(/^([+-]?\d+(?:\.\d+)?)\s*\/\s*([+-]?\d+(?:\.\d+)?)$/);
 if(m&&Number(m[2])!==0)return Number(m[1])/Number(m[2]);
 return NaN;
}
// Compare power notation structurally, never by evaluating arbitrary expressions.
function powerForm(value){
 const superscripts={'⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁻':'-','⁺':'+'};
 const text=normalize(value).replace(/[\u200B-\u200D\uFEFF]/g,'').replace(/[ˆ＾]/g,'^')
  .replace(/([⁺⁻]?[⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g,s=>'^'+[...s].map(c=>superscripts[c]).join(''));
 const match=text.match(/^([+-]?\d+)\s*\^\s*(?:([+-]?\d+)|\(\s*([+-]?\d+)\s*\))$/);
 return match?`${Number(match[1])}^${Number(match[2]??match[3])}`:null;
}
export function checkAnswer(question,value){
 const n=normalize(value);if(!n)return false;
 return (question.accepted||[question.answer]).some(expected=>{
  if(n===normalize(expected))return true;
  if(question.options)return false;
  const expectedPower=powerForm(expected);
  if(expectedPower!==null&&powerForm(n)===expectedPower)return true;
  const a=numberValue(n),b=numberValue(expected);
  return Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<1e-9;
 });
}
export function repairGrading(lesson,progress){
 for(const [questions,records] of [[[lesson.guided],progress.guided],[lesson.practice,progress.results]]){
  for(const question of questions){
   const record=records?.[question.id];
   if(record&&!record.correct&&checkAnswer(question,record.answer)){
    record.correct=true;
    if(record.attempts===1)record.firstCorrect=true;
    record.gradingRepaired=true;
   }
  }
 }
 return progress;
}
export function recordAnswer(progress,question,value,guided=false){
 const store=guided?progress.guided:progress.results, previous=store[question.id];
 const correct=checkAnswer(question,value);
 store[question.id]={answer:String(value),correct,attempts:(previous?.attempts||0)+1,firstCorrect:previous?.firstCorrect??correct,reviewed:previous?.reviewed||false};
 return store[question.id];
}
export function canFinish(lesson,progress){
 return lesson.practice.every(q=>progress.results[q.id]?.correct||progress.results[q.id]?.reviewed)&&
 progress.notebook.trim().length>0&&lesson.notebook.checklist.every((_,i)=>progress.checklist[i]===true);
}
