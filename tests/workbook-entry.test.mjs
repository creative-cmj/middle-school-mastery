import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
assert.ok(html.includes('workbook.js'),'entry must load simple workbook rather than old dashboard');
assert.ok(html.includes('8th Grade Workbook'));
assert.ok(!html.includes('class="sidebar"'));
assert.ok(!html.includes('app.js?v='));
console.log('workbook entry: PASS');
