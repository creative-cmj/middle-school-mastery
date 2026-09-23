// Independently derive answers from each displayed math prompt.
import assert from 'node:assert/strict';
import {mathLessons} from '../lessons/math.js';
import {checkAnswer} from '../workbook-core.js';
let count=0;
for(const l of mathLessons)for(const q of [l.guided,...l.practice]){
 let expected,m;const s=q.prompt;
 if(l.id==='math-exponent-products'){m=s.match(/(\d+)\^(\d+) × (\d+)\^(\d+)/);assert.equal(m[1],m[3]);expected=`${m[1]}^${+m[2]+ +m[4]}`;}
 if(l.id==='math-zero-negative-exponents'){m=s.match(/Evaluate (\d+)\^(-?\d+)/);expected=String(Number(m[1])**Number(m[2]));}
 if(l.id==='math-scientific-notation'){m=s.match(/Write ([\d,.]+) in/);const value=Number(m[1].replaceAll(',',''));const [a,n]=q.answer.split(' x 10^').map(Number);assert(a>=1&&a<10);assert(Math.abs(a*10**n-value)<=Math.abs(value)*1e-12);expected=q.answer;}
 if(l.id==='math-equations-both-sides'){m=s.match(/(\d+)x \+ (\d+) = (\d+)x \+ (\d+)/);expected=String((+m[4]-m[2])/(+m[1]-m[3]));}
 if(l.id==='math-slope'){m=[...s.matchAll(/\((-?\d+), (-?\d+)\)/g)];expected=String((+m[1][2]-m[0][2])/(+m[1][1]-m[0][1]));}
 if(l.id==='math-linear-models'){m=s.match(/y = (\d+)x \+ (\d+)\. What is y when x = (\d+)/);expected=String(+m[1]*m[3]+ +m[2]);}
 if(l.id==='math-functions'){m=[...s.matchAll(/\((-?\d+), (-?\d+)\)/g)];const inputs=new Map();let ok=true;for(const [,x,y]of m){if(inputs.has(x)&&inputs.get(x)!==y)ok=false;inputs.set(x,y);}expected=ok?'yes':'no';}
 if(l.id==='math-systems-substitution'){m=[...s.matchAll(/y = (\d+)x \+ (\d+)/g)];const x=(+m[1][2]-m[0][2])/(+m[0][1]-m[1][1]),y=+m[0][1]*x+ +m[0][2];expected=`${x}, ${y}`;assert.equal(y,+m[1][1]*x+ +m[1][2]);}
 if(l.id==='math-pythagorean-theorem'){m=s.match(/legs (\d+) cm and (\d+) cm/);expected=String(Math.hypot(+m[1],+m[2]));}
 if(l.id==='math-translations'){m=s.match(/Translate \((-?\d+), (-?\d+)\) (\d+) units (right|left) and (\d+) units (up|down)/);expected=`${+m[1]+(m[4]==='right'?1:-1)*m[3]}, ${+m[2]+(m[6]==='up'?1:-1)*m[5]}`;}
 assert.notEqual(expected,undefined,l.id);assert(checkAnswer(q,expected),`${l.id}/${q.id} wrong answer key: expected ${expected}`);count++;
}
console.log(`Math answer audit: PASS — ${count} answers independently recomputed from displayed prompts`);
