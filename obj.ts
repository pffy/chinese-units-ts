/*
 * src      : obj.ts
 * job      : TypeScript implementation of the ChineseUnits object
 * git      : https://github.com/pffy/chinese-units-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */

interface HanziPinyin {
  chinese: string;
  pinyin: string;
}

export class ChineseUnits {

  static readonly chinese: Array<string> = '兆负两亿万千百十'.split('');
  static readonly pinyin: Array<string> = 'zhào,fù,liǎng,yì,wàn,qiān,bǎi,shí'.split(',');

  static readonly trillion: HanziPinyin = {
    chinese: ChineseUnits.chinese[0],
    pinyin: ChineseUnits.pinyin[0]
  };

  static readonly negative: HanziPinyin = {
    chinese: ChineseUnits.chinese[1],
    pinyin: ChineseUnits.pinyin[1]
  };

  static readonly pair: HanziPinyin = {
    chinese: ChineseUnits.chinese[2],
    pinyin: ChineseUnits.pinyin[2]
  };

  static readonly hundredMillion: HanziPinyin = {
    chinese: ChineseUnits.chinese[3],
    pinyin: ChineseUnits.pinyin[3]
  };

  static readonly tenThousand: HanziPinyin = {
    chinese: ChineseUnits.chinese[4],
    pinyin: ChineseUnits.pinyin[4]
  };

  static readonly thousand: HanziPinyin = {
    chinese: ChineseUnits.chinese[5],
    pinyin: ChineseUnits.pinyin[5]
  };

  static readonly hundred: HanziPinyin = {
    chinese: ChineseUnits.chinese[6],
    pinyin: ChineseUnits.pinyin[6]
  };

  static readonly ten: HanziPinyin = {
    chinese: ChineseUnits.chinese[7],
    pinyin: ChineseUnits.pinyin[7]
  };
}
