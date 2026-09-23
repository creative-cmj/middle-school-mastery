// Self-contained real Chrome checks. Set WORKBOOK_URL to check deployed Pages.
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {readFile,mkdtemp,rm,writeFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join,extname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawn,spawnSync} from 'node:child_process';
const root=fileURLToPath(new URL('../',import.meta.url));
const html=await readFile(join(root,'index.html'),'utf8');
assert.ok(html.includes('workbook.js'),'simple workbook entry required');
const profile=await mkdtemp(join(tmpdir(),'grade8-test-'));
let browser,ws,server;const errors=[];
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
try{
 server=createServer(async(req,res)=>{try{const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const filename=resolve(root,'.'+(path.endsWith('/')?path+'index.html':path));if(!filename.startsWith(resolve(root)))throw Error('path');const data=await readFile(filename);res.setHeader('Content-Type',({'.js':'text/javascript','.css':'text/css','.html':'text/html'})[extname(filename)]||'application/octet-stream');res.end(data);}catch{res.writeHead(404);res.end('Not found');}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const base=process.env.WORKBOOK_URL||`http://127.0.0.1:${server.address().port}/`;
 const chrome=process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe';
 browser=spawn(chrome,['--headless=new','--no-first-run','--disable-gpu','--remote-debugging-port=0',`--user-data-dir=${profile}`,'about:blank'],{stdio:'ignore'});
 browser.on('error',e=>errors.push(String(e)));
 for(let i=0;i<100&&!existsSync(join(profile,'DevToolsActivePort'));i++)await sleep(100);
 const port=(await readFile(join(profile,'DevToolsActivePort'),'utf8')).split('\n')[0];
 const targets=await fetch(`http://127.0.0.1:${port}/json/list`).then(r=>r.json());
 ws=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);
 let id=0;const pending=new Map();
 ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.text+': '+m.params.exceptionDetails.exception?.description);if(m.method==='Log.entryAdded'&&m.params.entry.level==='error')errors.push(m.params.entry.text);if(m.id&&pending.has(m.id)){const v=pending.get(m.id);pending.delete(m.id);m.error?v.reject(Error(m.error.message)):v.resolve(m.result);}};
 await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j;});
 const send=(method,params={})=>new Promise((resolve,reject)=>{const n=++id;pending.set(n,{resolve,reject});ws.send(JSON.stringify({id:n,method,params}));});
 const evaluate=async(expression)=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||r.exceptionDetails.text);return r.result.value;};
 const waitFor=async(expression)=>{for(let i=0;i<100;i++){if(await evaluate(expression))return;await sleep(75);}throw Error('Timed out: '+expression);};
 const click=selector=>evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`);
 const text=()=>evaluate('document.body.innerText');
 await send('Runtime.enable');await send('Log.enable');await send('Page.enable');
 await send('Emulation.setDeviceMetricsOverride',{width:1366,height:960,deviceScaleFactor:1,mobile:false});
 await send('Page.navigate',{url:base});
 await waitFor('!!document.querySelector(".subjects")');
 await evaluate(`localStorage.setItem('middle-school-mastery.v1',JSON.stringify({notes:[{text:'Keep this original note'}],assessments:{old:{score:80}}}));localStorage.removeItem('grade8-workbook.v1');location.hash='#home';location.reload();`);
 await waitFor('!!document.querySelector(".subjects")');
 assert.equal(await evaluate('document.querySelectorAll(".subjects button").length'),3);
 assert(!(await text()).includes('Diagnostic'));
 assert.equal(await evaluate('!!document.querySelector(".sidebar")'),false);
 const all=await evaluate(`(async()=>{const [m,s,e]=await Promise.all(['math','science','ela'].map(n=>import(new URL('lessons/'+n+'.js',location.href))));return [...m.mathLessons,...s.scienceLessons,...e.elaLessons]})()`);
 assert.equal(all.length,26);
 // Save homepage evidence from the actual renderer.
 const shot=await send('Page.captureScreenshot',{format:'png'});
 await writeFile(join(profile,'home.png'),Buffer.from(shot.data,'base64'));
 for(const lesson of all){
  await evaluate(`location.hash=${JSON.stringify('#'+lesson.id)}`);
  await waitFor(`document.querySelector('.lesson-heading h1')?.textContent===${JSON.stringify(lesson.title)}`);
  assert((await text()).includes('Learn the idea'));
  assert.equal(await evaluate('!!document.querySelector("#answer-form")'),false,'practice shown before teaching');
  assert.equal(await evaluate(`document.querySelector('[data-stage="3"]').disabled`),true,'practice must start locked');
  await click('[data-action="advance"]');
  assert.equal(await evaluate('document.querySelectorAll(".example").length'),2);
  await click('[data-action="advance"]');
  assert((await text()).includes('Let’s do one together'));
  assert.equal(await evaluate(`document.querySelector('[data-action="question-next"]').disabled`),true);
  const answer=async(q,value)=>{await evaluate(`(()=>{const form=document.querySelector('#answer-form');const inputs=[...form.querySelectorAll('input')];const el=inputs.find(x=>x.type==='radio'&&x.value===${JSON.stringify(value)})||inputs.find(x=>x.type==='text');if(!el)throw Error('answer input missing');if(el.type==='radio')el.checked=true;else el.value=${JSON.stringify(value)};el.dispatchEvent(new Event('input',{bubbles:true}));form.requestSubmit();})()`);};
  await answer(lesson.guided,lesson.guided.answer);
  assert((await text()).includes('That’s right.'),`${lesson.id} guided answer rejected`);
  await click('[data-action="question-next"]');
  for(let i=0;i<lesson.practice.length;i++){
   const q=lesson.practice[i];
   assert((await text()).includes(`Question ${i+1} of 6`));
   if(i===0){
    const wrong=q.options?q.options.find(x=>!(q.accepted||[q.answer]).includes(x)):'definitely not the answer';
    await answer(q,wrong);assert((await text()).includes('Not quite'));
    assert.equal(await evaluate(`document.querySelector('[data-action="question-next"]').disabled`),true);
    await click('[data-action="hint"]');
    assert.equal(await evaluate('!!document.querySelector(".page-content > .remember")'),true);
    assert((await text()).includes(q.hint));
    await click('[data-action="hint"]');
    assert.equal(await evaluate('!!document.querySelector(".page-content > .remember")'),false,'hide hint should close the hint');
   }
   await answer(q,q.answer);assert((await text()).includes('That’s right.'),`${lesson.id}/${q.id} rejected correct answer`);
   await click('[data-action="question-next"]');
  }
  assert((await text()).includes('Put it in your own words'));
  await click('[data-action="finish"]');assert((await text()).includes('Write your explanation'));
  await evaluate(`(()=>{const el=document.querySelector('#notebook');el.value='My own explanation: ${lesson.id}. I used the steps and checked my reasoning.';el.dispatchEvent(new Event('input',{bubbles:true}));document.querySelectorAll('[data-check]').forEach(x=>x.click());})()`);
  await click('[data-action="finish"]');assert((await text()).includes('Lesson completed'));
 }
 await evaluate('location.reload()');await waitFor('!!document.querySelector(".notebook")');
 assert((await text()).includes('Lesson completed'),'completion must persist');
 assert((await evaluate('document.querySelector("#notebook").value')).includes('My own explanation'));
 assert.equal(await evaluate('JSON.parse(localStorage.getItem("middle-school-mastery.v1")).notes[0].text'),'Keep this original note');
 assert.equal(await evaluate('Object.values(JSON.parse(localStorage.getItem("grade8-workbook.v1")).lessons).filter(p=>p.done).length'),26);
 // Exercise reviewed-not-correct route, in-progress reload, and storage denial.
 const first=all[0];
 await evaluate(`const s=JSON.parse(localStorage.getItem('grade8-workbook.v1'));s.lessons[${JSON.stringify(first.id)}]={stage:3,unlocked:3,index:0,drafts:{},results:{},guided:{},notebook:'',checklist:[],done:false};localStorage.setItem('grade8-workbook.v1',JSON.stringify(s));history.replaceState(null,'',${JSON.stringify('#'+first.id)});location.reload();`);
 await waitFor('!!document.querySelector("#answer-form")');
 await evaluate(`const el=document.querySelector('#answer');el.value='wrong';el.dispatchEvent(new Event('input',{bubbles:true}));document.querySelector('#answer-form').requestSubmit();`);
 await click('[data-action="solution"]');assert((await text()).includes('not independently correct'));
 await click('[data-action="question-next"]');await evaluate('location.reload()');await waitFor('!!document.querySelector("#answer-form")');
 assert((await text()).includes('Question 2 of 6'));
 await click('[data-stage="0"]');
 await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
 assert.equal(await evaluate('document.documentElement.scrollWidth<=innerWidth'),true,'mobile lesson overflow');
 const mobile=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
 await writeFile(join(root,'evidence-workbook-mobile.png'),Buffer.from(mobile.data,'base64'));
 await evaluate('location.hash="#home"');await waitFor('!!document.querySelector(".subjects")');
 assert.equal(await evaluate('document.documentElement.scrollWidth<=innerWidth'),true,'mobile home overflow');
 await send('Emulation.setDeviceMetricsOverride',{width:1366,height:960,deviceScaleFactor:1,mobile:false});
 assert.equal(await evaluate('document.documentElement.scrollWidth<=innerWidth'),true,'desktop home overflow');
 const home=await send('Page.captureScreenshot',{format:'png'});await writeFile(join(root,'evidence-workbook-home.png'),Buffer.from(home.data,'base64'));
 await evaluate('Storage.prototype.setItem=function(){throw new Error("Quota exceeded")};');
 await click('[data-subject="Science"]');assert((await text()).includes('Not saved'));
 assert.deepEqual(errors,[],'browser errors');
 console.log(`Workbook browser: PASS — ${all.length} complete lesson flows, teaching gates, guided answers, corrections, notes, persistence, legacy preservation, storage warning, desktop/mobile fit. URL: ${base}`);
}finally{
 if(ws?.readyState===1)ws.close();
 if(browser?.pid){if(process.platform==='win32')spawnSync('taskkill',['/PID',String(browser.pid),'/T','/F'],{stdio:'ignore'});else browser.kill('SIGTERM');}
 if(server)await new Promise(r=>server.close(r));
 try{await rm(profile,{recursive:true,force:true});}catch{}
}
