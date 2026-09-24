// Browser-level proof for the year plan: teaching must precede 20-question practice.
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {readFile,mkdtemp,rm} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join,extname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawn,spawnSync} from 'node:child_process';
const root=fileURLToPath(new URL('../',import.meta.url));
const profile=await mkdtemp(join(tmpdir(),'year-browser-'));let server,browser,ws;const errors=[];
const wait=ms=>new Promise(r=>setTimeout(r,ms));
try{
 server=createServer(async(req,res)=>{try{const path=decodeURIComponent(new URL(req.url,'http://x').pathname);const file=resolve(root,'.'+(path.endsWith('/')?path+'index.html':path));if(!file.startsWith(resolve(root)))throw Error();const type={'.html':'text/html','.js':'text/javascript','.css':'text/css'}[extname(file)]||'application/octet-stream';res.setHeader('Content-Type',type);res.end(await readFile(file));}catch{res.writeHead(404);res.end('Not found');}});await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const chrome=process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe';browser=spawn(chrome,['--headless=new','--no-first-run','--disable-gpu','--remote-debugging-port=0',`--user-data-dir=${profile}`,'about:blank'],{stdio:'ignore'});
 for(let i=0;i<100&&!existsSync(join(profile,'DevToolsActivePort'));i++)await wait(50);const port=(await readFile(join(profile,'DevToolsActivePort'),'utf8')).split('\n')[0];const targets=await fetch(`http://127.0.0.1:${port}/json/list`).then(r=>r.json());ws=new WebSocket(targets.find(x=>x.type==='page').webSocketDebuggerUrl);let id=0;const pending=new Map();ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.text);if(m.id&&pending.has(m.id)){const d=pending.get(m.id);pending.delete(m.id);d.resolve(m.result);}};await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j});const send=(method,params={})=>new Promise(r=>{const n=++id;pending.set(n,{resolve:r});ws.send(JSON.stringify({id:n,method,params}))});const evaluate=async(expression)=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(r.exceptionDetails.text);return r.result.value};const until=async(expression)=>{for(let i=0;i<100;i++){if(await evaluate(expression))return;await wait(50)}throw Error('timed out '+expression)};
 const base=process.env.YEAR_URL||`http://127.0.0.1:${server.address().port}/`;
 await send('Runtime.enable');await send('Page.enable');await send('Page.navigate',{url:base});await until('!!document.querySelector("[data-year-dashboard]")');
 assert((await evaluate('document.body.innerText')).includes('Daily Progress: 0/80'));
 assert.equal(await evaluate('document.querySelectorAll("[data-session-open]").length'),4);
 await evaluate('document.querySelector("[data-session-open]").click()');await until('!!document.querySelector("[data-year-lesson]")');
 assert.equal(await evaluate('!!document.querySelector("[data-year-practice]")'),false,'questions must stay hidden while learning content is shown');
 assert((await evaluate('document.body.innerText')).includes('Worked examples'));
 await evaluate('document.querySelector("[data-start-practice]").click()');await until('!!document.querySelector("[data-year-practice]")');
 assert((await evaluate('document.body.innerText')).includes('Question 1 of 20'));
 assert.equal(await evaluate('document.querySelectorAll("[data-answer-option]").length'),4);
 await evaluate('document.querySelector("[data-answer-option]").click()');await until('!!document.querySelector(".feedback")');
 assert.deepEqual(errors,[],'browser exceptions');console.log('Year browser: PASS — daily dashboard, four sessions, teach-first lesson, 20-question practice.');
}finally{if(ws?.readyState===1)ws.close();if(browser?.pid)spawnSync('taskkill',['/PID',String(browser.pid),'/T','/F'],{stdio:'ignore'});if(server)await new Promise(r=>server.close(r));try{await rm(profile,{recursive:true,force:true,maxRetries:3,retryDelay:100});}catch{}}
