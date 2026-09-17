import assert from 'node:assert/strict';
const port=process.env.MASTERY_CDP_PORT || '9223';
const targets=await fetch(`http://127.0.0.1:${port}/json/list`).then(r=>r.json());
const target=targets.find(t=>t.type==='page');
assert(target,'CDP page target missing');
const ws=new WebSocket(target.webSocketDebuggerUrl);
let id=0;const pending=new Map();
ws.onmessage=event=>{const message=JSON.parse(event.data);if(message.id&&pending.has(message.id)){const {resolve,reject}=pending.get(message.id);pending.delete(message.id);message.error?reject(new Error(message.error.message)):resolve(message.result)}};
await new Promise((resolve,reject)=>{ws.onopen=resolve;ws.onerror=reject});
const send=(method,params={})=>new Promise((resolve,reject)=>{const requestId=++id;pending.set(requestId,{resolve,reject});ws.send(JSON.stringify({id:requestId,method,params}))});
const evaluate=async expression=>(await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})).result.value;
await send('Page.enable');await send('Runtime.enable');
await evaluate("localStorage.removeItem('middle-school-mastery.v1'); location.hash='#dashboard'; location.reload();");
await new Promise(resolve=>setTimeout(resolve,700));
assert.equal(await evaluate('document.title'),'Middle School Mastery');
assert.equal(await evaluate("document.querySelectorAll('#nav button').length"),14);
assert((await evaluate('document.body.innerText')).includes('BEGIN STARTING DIAGNOSTIC'));
assert.equal(await evaluate('document.documentElement.scrollWidth <= document.documentElement.clientWidth'),true,'desktop horizontal overflow');
await evaluate("document.querySelector('[data-action=\"start-today\"]').click()")
await new Promise(resolve=>setTimeout(resolve,300));
let text=await evaluate('document.body.innerText');
assert(text.includes('Assessment rules:'),'test mode did not render');
assert(text.includes('45 diagnostic tasks'),'diagnostic size marker missing');
assert(!text.includes('Correct answer:'),'test mode exposed answer');
assert.equal(await evaluate("document.querySelectorAll('.question-nav button').length"),45,'all 45 diagnostic navigation items render');
await evaluate("document.querySelector('.answer-option').click()")
assert.equal(await evaluate('document.body.innerText.includes("1/45 answered")'),true,'answer was not retained during test');
await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
await new Promise(resolve=>setTimeout(resolve,200));
assert.equal(await evaluate('document.documentElement.scrollWidth <= document.documentElement.clientWidth'),true,'mobile horizontal overflow');
await send('Emulation.clearDeviceMetricsOverride');
for(let index=0;index<44;index++){
  await evaluate("document.querySelector('.answer-option')?.click() || (document.querySelector('[data-input=\"test-answer\"]')?.value='test')");
  await evaluate("document.querySelector('[data-action=\"test-next\"]').click()");
}
await evaluate("document.querySelector('.answer-option')?.click(); window.confirm=()=>true; document.querySelector('[data-action=\"submit-test\"]').click()");
await new Promise(resolve=>setTimeout(resolve,350));
text=await evaluate('document.body.innerText');
assert(text.includes('Your evidence report'),'assessment results did not render');
assert(text.includes('Incorrect answers'),'detailed mistake review missing');
assert.equal(await evaluate("!!JSON.parse(localStorage.getItem('middle-school-mastery.v1')).assessments.diagnostic"),true,'diagnostic result did not persist');
console.log('browser learning-app smoke: PASS (dashboard, 45-task test mode, answer retention, results, persistence, desktop/mobile fit)');
ws.close();
