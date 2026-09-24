import {mathLessons} from './lessons/math.js';
import {scienceLessons} from './lessons/science.js';
import {elaLessons} from './lessons/ela.js';
import {STORAGE_KEY,SUBJECTS,STAGES,freshProgress,hydrate,recordAnswer,canFinish,repairGrading} from './workbook-core.js?v=8-2';

const lessons=[...mathLessons,...scienceLessons,...elaLessons];
const app=document.querySelector('#app');
const status=document.querySelector('#save-status');
let state,storageIssue='';
try{state=hydrate(JSON.parse(localStorage.getItem(STORAGE_KEY)));}catch{state=hydrate(null);storageIssue='Saved work could not be read. Existing records have not been erased.';}
let current=null,hintOpen=false,notice='';
const esc=(s='')=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const paragraphs=items=>items.map(s=>`<p>${esc(s)}</p>`).join('');
function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));status.textContent='Saved on this device';}catch{storageIssue='Saving is unavailable. Keep this tab open and download your work before leaving.';status.textContent='Not saved — download your work';}}
function progress(lesson){return repairGrading(lesson,state.lessons[lesson.id]??(state.lessons[lesson.id]=freshProgress()));}
function go(hash){if(location.hash===hash)route();else location.hash=hash;}
function route(){
 const id=decodeURIComponent(location.hash.slice(1));
 current=lessons.find(l=>l.id===id)||null;hintOpen=false;notice='';
 if(current){const p=progress(current);state.lastLesson=current.id;state.subject=current.subject;p.stage=Math.min(p.stage,p.unlocked,4);save();renderLesson();}else renderHome();
 window.scrollTo(0,0);app.focus({preventScroll:true});
}
function banner(){return storageIssue?`<p class="warning" role="alert">${esc(storageIssue)}</p>`:'';}
function renderHome(){
 const subject=state.subject;
 const list=lessons.filter(l=>l.subject===subject);
 const next=list.find(l=>!state.lessons[l.id]?.done)||list[0];
 const last=lessons.find(l=>l.id===state.lastLesson&&l.subject===subject&&!state.lessons[l.id]?.done);
 const resume=last||next, p=state.lessons[resume.id];
 app.innerHTML=`${banner()}<section class="welcome"><p class="eyebrow">YOUR 8TH-GRADE WORKBOOK</p><h1>Learn it. Then try it.</h1><p class="lead">One lesson. One skill. We’ll explain it before you do the work.</p></section>
 <nav class="subjects" aria-label="Choose a subject">${SUBJECTS.map(s=>`<button data-subject="${s}" aria-pressed="${s===subject}">${s==='ELA'?'Language Arts':s}</button>`).join('')}</nav>
 <section class="continue"><div><p class="eyebrow">${p&&!p.done?'PICK UP WHERE YOU LEFT OFF':'START HERE'}</p><h2>${esc(resume.title)}</h2><p>${esc(resume.objective)}</p></div><a class="primary" href="#${resume.id}">${p&&!p.done?'Continue lesson':'Open lesson'} <span aria-hidden="true">→</span></a></section>
 <section class="contents"><div class="section-heading"><h2>${subject==='ELA'?'Language Arts':subject} contents</h2><span>${list.filter(l=>state.lessons[l.id]?.done).length} of ${list.length} completed</span></div><ol class="lesson-list">${list.map((l,i)=>{const record=state.lessons[l.id];return `<li><a href="#${l.id}"><span class="lesson-number">${String(i+1).padStart(2,'0')}</span><span><strong>${esc(l.title)}</strong><small>${record?.done?'Completed · revisit anytime':record?`In progress · ${STAGES[record.stage]}`:'Learn → examples → practice'}</small></span><span aria-hidden="true">${record?.done?'✓':'→'}</span></a></li>`;}).join('')}</ol></section>
 <details class="saved-tools"><summary>Saved work & backup</summary><p>New workbook progress saves automatically on this device. Your earlier app’s notes and test records have been left untouched; they aren’t mixed into these lessons.</p><button data-action="export">Download all saved work</button><p class="fine">Science topics vary by school. This collection focuses on common middle-school science reasoning at an 8th-grade level.</p></details>`;
}
function controls(nextLabel){return `<div class="page-actions"><button data-action="back" ${progress(current).stage===0?'disabled':''}>← Back</button><button class="primary" data-action="advance">${nextLabel} →</button></div>`;}
function renderLesson(){
 const l=current,p=progress(l),n=lessons.filter(x=>x.subject===l.subject).indexOf(l)+1;
 app.innerHTML=`${banner()}<div class="lesson-top"><a class="back-link" href="#home">← Contents</a><span>${l.subject==='ELA'?'Language Arts':l.subject} · Lesson ${n} · Grade 8</span></div>
 <article class="paper"><header class="lesson-heading"><p class="eyebrow">ONE SKILL</p><h1>${esc(l.title)}</h1><p>${esc(l.objective)}</p></header>
 <nav class="stages" aria-label="Lesson steps">${STAGES.map((s,i)=>`<button data-stage="${i}" ${i>p.unlocked?'disabled':''} ${i===p.stage?'aria-current="step"':''}><span>${i+1}</span>${s}</button>`).join('')}</nav>
 <section class="page-content" aria-label="${STAGES[p.stage]}">${pageBody(l,p)}</section></article>`;
}
function pageBody(l,p){
 if(p.stage===0)return `<div class="section-heading"><h2>Learn the idea</h2><span>Read first. No quiz yet.</span></div><div class="teaching">${paragraphs(l.learn)}</div><aside class="remember"><b>Your goal</b><p>${esc(l.objective)}</p></aside>${controls('Show me examples')}`;
 if(p.stage===1)return `<h2>Watch how it works</h2><p>Follow the thinking, not just the final answer.</p>${l.examples.map((ex,i)=>`<section class="example"><p class="eyebrow">WORKED EXAMPLE ${i+1}</p><h3>${esc(ex.prompt)}</h3><ol class="reasoning">${ex.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><p class="answer-line"><b>Answer:</b> ${esc(ex.answer)}</p></section>`).join('')}${controls('Let’s do one together')}`;
 if(p.stage===2)return `<h2>Let’s do one together</h2><p>Use these steps. It’s fine to look back at the examples.</p><ol class="reasoning scaffold">${l.guided.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>${question(l.guided,p,true)}`;
 if(p.stage===3){const q=l.practice[p.index];return `<div class="section-heading"><h2>Your turn</h2><span>Question ${p.index+1} of ${l.practice.length}</span></div><p>Stay with this skill. Check each answer and learn from corrections.</p><progress aria-label="Practice progress" max="${l.practice.length}" value="${p.index}"></progress>${question(q,p,false)}`;}
 const first=l.practice.filter(q=>p.results[q.id]?.firstCorrect).length;
 const corrected=l.practice.filter(q=>p.results[q.id]?.correct&&!p.results[q.id]?.firstCorrect).length;
 const reviewed=l.practice.filter(q=>!p.results[q.id]?.correct&&p.results[q.id]?.reviewed).length;
 return `<h2>${p.done?'Lesson completed':'Put it in your own words'}</h2><p class="review-line">${first} correct on the first try · ${corrected} corrected · ${reviewed} worked solutions reviewed.</p><p>Completion means you worked through the lesson—not a claim that you’ve mastered it yet.</p><section class="notebook"><h3>Notebook task</h3><p>${esc(l.notebook.prompt)}</p><label for="notebook">Your explanation or notes from your paper work</label><textarea id="notebook" rows="6" placeholder="Explain the idea in your own words…">${esc(p.notebook)}</textarea><details><summary>Compare with a sample response</summary><p>${esc(l.notebook.sample)}</p></details><fieldset><legend>Check your own work</legend>${l.notebook.checklist.map((s,i)=>`<label class="check"><input type="checkbox" data-check="${i}" ${p.checklist[i]?'checked':''}>${esc(s)}</label>`).join('')}</fieldset><p class="fine">Writing is self-checked with this checklist, not automatically graded.</p><p class="notice" role="status">${esc(notice)}</p></section><div class="page-actions"><button data-action="back">← Review practice</button>${p.done?'<a class="primary" href="#home">Back to contents →</a>':'<button class="primary" data-action="finish">Complete lesson ✓</button>'}</div>`;
}
function question(q,p,guided){
 const record=(guided?p.guided:p.results)[q.id];
 const draft=p.drafts[q.id]??record?.answer??'';
 const resolved=record?.correct||record?.reviewed;
 return `<form id="answer-form"><fieldset ${resolved?'disabled':''}><legend class="question-prompt">${esc(q.prompt)}</legend>${q.options?`<div class="options">${q.options.map((o,i)=>`<label class="option"><input type="radio" name="answer" value="${esc(o)}" ${draft===o?'checked':''} required><span><b>${String.fromCharCode(65+i)}.</b> ${esc(o)}</span></label>`).join('')}</div>`:`<label for="answer">Your answer</label><input id="answer" name="answer" type="text" autocomplete="off" value="${esc(draft)}" required><p class="fine">Use the answer format requested. Equivalent numeric fractions and decimals are accepted.</p>`}</fieldset>${!resolved?'<button class="primary" type="submit">Check answer</button>':''}</form>
 <div class="feedback ${record?.correct?'correct':''}" role="status">${record?record.correct?`<b>That’s right.</b><p>${esc(q.explanation)}</p>`:record.reviewed?`<b>Worked solution reviewed</b><p><strong>${esc(q.answer)}</strong> — ${esc(q.explanation)}</p><p>We’ve recorded this as reviewed, not independently correct.</p>`:`<b>Not quite—try the next step.</b><p>${esc(q.hint)}</p>`:''}</div>
 ${!resolved?`<div class="help-actions"><button data-action="hint">${hintOpen?'Hide hint':'Need a hint?'}</button><button data-action="examples">Look at the examples</button>${record?'<button data-action="solution">Show worked solution</button>':''}</div>${hintOpen?`<aside class="remember">${esc(q.hint)}</aside>`:''}`:''}
 <div class="page-actions"><button data-action="back">← ${!guided&&p.index>0?'Previous question':'Back'}</button><button class="primary" data-action="question-next" ${resolved?'':'disabled'}>${guided?'Start practice':p.index===current.practice.length-1?'Wrap up':'Next question'} →</button></div>`;
}
function currentQuestion(){const p=progress(current);return p.stage===2?current.guided:current.practice[p.index];}
app.addEventListener('submit',e=>{
 if(e.target.id!=='answer-form')return;e.preventDefault();
 const p=progress(current),q=currentQuestion(),value=new FormData(e.target).get('answer');
 if(!String(value??'').trim())return;
 recordAnswer(p,q,value,p.stage===2);p.drafts[q.id]=String(value);save();renderLesson();
});
app.addEventListener('input',e=>{
 if(!current)return;const p=progress(current);
 if(e.target.id==='notebook')p.notebook=e.target.value;
 else if(e.target.name==='answer')p.drafts[currentQuestion().id]=e.target.value;
 else return;save();
});
app.addEventListener('change',e=>{if(e.target.dataset.check!==undefined){progress(current).checklist[Number(e.target.dataset.check)]=e.target.checked;save();}});
app.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b||b.disabled)return;
 if(b.dataset.subject){state.subject=b.dataset.subject;save();renderHome();return;}
 if(b.dataset.action==='export'){exportWork();return;}
 if(!current)return;const p=progress(current);notice='';
 if(b.dataset.action!=='hint')hintOpen=false;
 if(b.dataset.stage!==undefined){const n=Number(b.dataset.stage);if(n<=p.unlocked)p.stage=n;}
 const action=b.dataset.action;
 if(action==='advance'&&p.stage<2){p.stage++;p.unlocked=Math.max(p.unlocked,p.stage);}
 if(action==='back'){if(p.stage===3&&p.index>0)p.index--;else p.stage=Math.max(0,p.stage-1);}
 if(action==='examples')p.stage=1;
 if(action==='hint')hintOpen=!hintOpen;
 if(action==='solution'){const r=(p.stage===2?p.guided:p.results)[currentQuestion().id];if(r)r.reviewed=true;}
 if(action==='question-next'){
  const q=currentQuestion(),r=(p.stage===2?p.guided:p.results)[q.id];
  if(!r?.correct&&!r?.reviewed)return;
  if(p.stage===2)p.stage=3;
  else if(p.index<current.practice.length-1)p.index++;
  else p.stage=4;
  p.unlocked=Math.max(p.unlocked,p.stage);
 }
 if(action==='finish'){
  if(canFinish(current,p)){p.done=true;p.completedAt=new Date().toISOString();}
  else notice='Write your explanation and check each item after reviewing your work.';
 }
 // Let form submission handle grading without replacing the form mid-click.
 if(b.type==='submit'&&!action&&b.dataset.stage===undefined)return;
 save();renderLesson();
 if(!['hint','solution','finish'].includes(action))window.scrollTo({top:0,behavior:'instant'});
});
function exportWork(){
 const data={workbook:state};
 try{const previous=localStorage.getItem('middle-school-mastery.v1');if(previous)data.previousApp=JSON.parse(previous);}catch{data.previousAppReadError=true;}
 const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
 const a=document.createElement('a');a.href=url;a.download='my-learning-work.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
window.addEventListener('hashchange',route);
route();
