import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
assert.ok(html.includes('year-app.js'),'entry must load the full weekday program');
assert.ok(html.includes('My 8th Grade Learning Program'));
assert.ok(!html.includes('class="sidebar"'));
assert.ok(!html.includes('src="app.js?v='));
assert.ok(html.includes('FOUR SUBJECTS'));
console.log('workbook entry: PASS');
