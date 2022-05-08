"use strict";
/*
 * src      : obj.ts
 * job      : TypeScript implementation of the ChineseUnits object
 * git      : https://github.com/pffy/chinese-units-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */
exports.__esModule = true;
exports.ChineseUnits = void 0;
var ChineseUnits = /** @class */ (function () {
    function ChineseUnits() {
    }
    ChineseUnits.chinese = '兆负两亿万千百十'.split('');
    ChineseUnits.pinyin = 'zhào,fù,liǎng,yì,wàn,qiān,bǎi,shí'.split(',');
    ChineseUnits.trillion = {
        chinese: ChineseUnits.chinese[0],
        pinyin: ChineseUnits.pinyin[0]
    };
    ChineseUnits.negative = {
        chinese: ChineseUnits.chinese[1],
        pinyin: ChineseUnits.pinyin[1]
    };
    ChineseUnits.pair = {
        chinese: ChineseUnits.chinese[2],
        pinyin: ChineseUnits.pinyin[2]
    };
    ChineseUnits.hundredMillion = {
        chinese: ChineseUnits.chinese[3],
        pinyin: ChineseUnits.pinyin[3]
    };
    ChineseUnits.tenThousand = {
        chinese: ChineseUnits.chinese[4],
        pinyin: ChineseUnits.pinyin[4]
    };
    ChineseUnits.thousand = {
        chinese: ChineseUnits.chinese[5],
        pinyin: ChineseUnits.pinyin[5]
    };
    ChineseUnits.hundred = {
        chinese: ChineseUnits.chinese[6],
        pinyin: ChineseUnits.pinyin[6]
    };
    ChineseUnits.ten = {
        chinese: ChineseUnits.chinese[7],
        pinyin: ChineseUnits.pinyin[7]
    };
    return ChineseUnits;
}());
exports.ChineseUnits = ChineseUnits;
