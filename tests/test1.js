#!/usr/bin/env node
/*
 * src      : test1.js
 * job      : tests for the ChineseUnits object
 * git      : https://github.com/pffy/chinese-units-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */
const { ChineseUnits } = require('../.');

console.log('1,0000,0000,0000; %s; %s',
  ChineseUnits.trillion.chinese,
  ChineseUnits.trillion.pinyin);

console.log('1,0000,0000; %s; %s',
  ChineseUnits.hundredMillion.chinese,
  ChineseUnits.hundredMillion.pinyin);

console.log('10000; %s; %s',
  ChineseUnits.tenThousand.chinese,
  ChineseUnits.tenThousand.pinyin);

console.log('1000; %s; %s',
  ChineseUnits.thousand.chinese,
  ChineseUnits.thousand.pinyin);

console.log('100; %s; %s',
  ChineseUnits.hundred.chinese,
  ChineseUnits.hundred.pinyin);

console.log('10; %s; %s',
  ChineseUnits.ten.chinese,
  ChineseUnits.ten.pinyin);

console.log('negative; %s; %s',
  ChineseUnits.negative.chinese,
  ChineseUnits.negative.pinyin);

console.log('pair; %s; %s',
  ChineseUnits.pair.chinese,
  ChineseUnits.pair.pinyin);
