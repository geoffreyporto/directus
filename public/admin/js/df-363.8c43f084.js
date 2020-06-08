(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-363","df-0","df-1","df-2","df-3","df-358","df-359","df-360","df-361","df-362"],{"17ae":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("9686")),r=i(a("b028"));function i(e){return e&&e.__esModule?e:{default:e}}var u=/^\d+/i,o=/\d+/i,d={narrow:/^([bB]|[aA]|คศ)/i,abbreviated:/^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ค\.?ศ\.?)/i,wide:/^(ก่อนคริสตกาล|คริสต์ศักราช|คริสตกาล)/i},l={any:[/^[bB]/i,/^(^[aA]|ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช|)/i]},f={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^ไตรมาส(ที่)? ?[1234]/i},s={any:[/(1|แรก|หนึ่ง)/i,/(2|สอง)/i,/(3|สาม)/i,/(4|สี่)/i]},c={narrow:/^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?)/i,abbreviated:/^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?')/i,wide:/^(มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/i},h={wide:[/^มก/i,/^กุม/i,/^มี/i,/^เม/i,/^พฤษ/i,/^มิ/i,/^กรก/i,/^ส/i,/^กัน/i,/^ต/i,/^พฤศ/i,/^ธ/i],any:[/^ม\.?ค\.?/i,/^ก\.?พ\.?/i,/^มี\.?ค\.?/i,/^เม\.?ย\.?/i,/^พ\.?ค\.?/i,/^มิ\.?ย\.?/i,/^ก\.?ค\.?/i,/^ส\.?ค\.?/i,/^ก\.?ย\.?/i,/^ต\.?ค\.?/i,/^พ\.?ย\.?/i,/^ธ\.?ค\.?/i]},m={narrow:/^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,short:/^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,abbreviated:/^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,wide:/^(อาทิตย์|จันทร์|อังคาร|พุธ|พฤหัสบดี|ศุกร์|เสาร์)/i},v={wide:[/^อา/i,/^จั/i,/^อั/i,/^พุธ/i,/^พฤ/i,/^ศ/i,/^เส/i],any:[/^อา/i,/^จ/i,/^อ/i,/^พ(?!ฤ)/i,/^พฤ/i,/^ศ/i,/^ส/i]},b={any:/^(ก่อนเที่ยง|หลังเที่ยง|เที่ยงคืน|เที่ยง|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i},p={any:{am:/^ก่อนเที่ยง/i,pm:/^หลังเที่ยง/i,midnight:/^เที่ยงคืน/i,noon:/^เที่ยง/i,morning:/เช้า/i,afternoon:/บ่าย/i,evening:/เย็น/i,night:/กลางคืน/i}},g={ordinalNumber:(0,n.default)({matchPattern:u,parsePattern:o,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:b,defaultMatchWidth:"any",parsePatterns:p,defaultParseWidth:"any"})},w=g;t.default=w,e.exports=t.default},"1f21":function(e,t,a){"use strict";function n(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},"2d8d":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n={lessThanXSeconds:{one:"น้อยกว่า 1 วินาที",other:"น้อยกว่า {{count}} วินาที"},xSeconds:{one:"1 วินาที",other:"{{count}} วินาที"},halfAMinute:"ครึ่งนาที",lessThanXMinutes:{one:"น้อยกว่า 1 นาที",other:"น้อยกว่า {{count}} นาที"},xMinutes:{one:"1 นาที",other:"{{count}} นาที"},aboutXHours:{one:"ประมาณ 1 ชั่วโมง",other:"ประมาณ {{count}} ชั่วโมง"},xHours:{one:"1 ชั่วโมง",other:"{{count}} ชั่วโมง"},xDays:{one:"1 วัน",other:"{{count}} วัน"},aboutXWeeks:{one:"ประมาณ 1 สัปดาห์",other:"ประมาณ {{count}} สัปดาห์"},xWeeks:{one:"1 สัปดาห์",other:"{{count}} สัปดาห์"},aboutXMonths:{one:"ประมาณ 1 เดือน",other:"ประมาณ {{count}} เดือน"},xMonths:{one:"1 เดือน",other:"{{count}} เดือน"},aboutXYears:{one:"ประมาณ 1 ปี",other:"ประมาณ {{count}} ปี"},xYears:{one:"1 ปี",other:"{{count}} ปี"},overXYears:{one:"มากกว่า 1 ปี",other:"มากกว่า {{count}} ปี"},almostXYears:{one:"เกือบ 1 ปี",other:"เกือบ {{count}} ปี"}};function r(e,t,a){var r;return a=a||{},r="string"===typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"halfAMinute"===e?"ใน"+r:"ใน "+r:r+"ที่ผ่านมา":r}e.exports=t.default},"3e4f":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a("2d8d")),r=d(a("f24a")),i=d(a("5067")),u=d(a("9496")),o=d(a("17ae"));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"th",formatDistance:n.default,formatLong:r.default,formatRelative:i.default,localize:u.default,match:o.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},f=l;t.default=f,e.exports=t.default},5067:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n={lastWeek:"eeee'ที่แล้วเวลา' p",yesterday:"'เมื่อวานนี้เวลา' p",today:"'วันนี้เวลา' p",tomorrow:"'พรุ่งนี้เวลา' p",nextWeek:"eeee 'เวลา' p",other:"P"};function r(e,t,a,r){return n[e]}e.exports=t.default},9496:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("af03"));function r(e){return e&&e.__esModule?e:{default:e}}var i={narrow:["B","คศ"],abbreviated:["BC","ค.ศ."],wide:["ปีก่อนคริสตกาล","คริสต์ศักราช"]},u={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["ไตรมาสแรก","ไตรมาสที่สอง","ไตรมาสที่สาม","ไตรมาสที่สี่"]},o={narrow:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],short:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],abbreviated:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],wide:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"]},d={narrow:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],abbreviated:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],wide:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"]},l={narrow:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"เช้า",afternoon:"บ่าย",evening:"เย็น",night:"กลางคืน"},abbreviated:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"เช้า",afternoon:"บ่าย",evening:"เย็น",night:"กลางคืน"},wide:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"เช้า",afternoon:"บ่าย",evening:"เย็น",night:"กลางคืน"}},f={narrow:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"ตอนเช้า",afternoon:"ตอนกลางวัน",evening:"ตอนเย็น",night:"ตอนกลางคืน"},abbreviated:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"ตอนเช้า",afternoon:"ตอนกลางวัน",evening:"ตอนเย็น",night:"ตอนกลางคืน"},wide:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"ตอนเช้า",afternoon:"ตอนกลางวัน",evening:"ตอนเย็น",night:"ตอนกลางคืน"}};function s(e){var t=Number(e);return t}var c={ordinalNumber:s,era:(0,n.default)({values:i,defaultWidth:"wide"}),quarter:(0,n.default)({values:u,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:d,defaultWidth:"wide"}),day:(0,n.default)({values:o,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:l,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"})},h=c;t.default=h,e.exports=t.default},9686:function(e,t,a){"use strict";function n(e){return function(t,a){var n=String(t),r=a||{},i=n.match(e.matchPattern);if(!i)return null;var u=i[0],o=n.match(e.parsePattern);if(!o)return null;var d=e.valueCallback?e.valueCallback(o[0]):o[0];return d=r.valueCallback?r.valueCallback(d):d,{value:d,rest:n.slice(u.length)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},af03:function(e,t,a){"use strict";function n(e){return function(t,a){var n,r=a||{},i=r.context?String(r.context):"standalone";if("formatting"===i&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):u;n=e.formattingValues[o]||e.formattingValues[u]}else{var d=e.defaultWidth,l=r.width?String(r.width):e.defaultWidth;n=e.values[l]||e.values[d]}var f=e.argumentCallback?e.argumentCallback(t):t;return n[f]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},b028:function(e,t,a){"use strict";function n(e){return function(t,a){var n=String(t),u=a||{},o=u.width,d=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],l=n.match(d);if(!l)return null;var f,s=l[0],c=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return f="[object Array]"===Object.prototype.toString.call(c)?i(c,(function(e){return e.test(s)})):r(c,(function(e){return e.test(s)})),f=e.valueCallback?e.valueCallback(f):f,f=u.valueCallback?u.valueCallback(f):f,{value:f,rest:n.slice(s.length)}}}function r(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function i(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},f24a:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("1f21"));function r(e){return e&&e.__esModule?e:{default:e}}var i={full:"วันEEEEที่ do MMMM y",long:"do MMMM y",medium:"d MMM y",short:"dd/MM/yyyy"},u={full:"H:mm:ss น. zzzz",long:"H:mm:ss น. z",medium:"H:mm:ss น.",short:"H:mm น."},o={full:"{{date}} 'เวลา' {{time}}",long:"{{date}} 'เวลา' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},d={date:(0,n.default)({formats:i,defaultWidth:"full"}),time:(0,n.default)({formats:u,defaultWidth:"medium"}),dateTime:(0,n.default)({formats:o,defaultWidth:"full"})},l=d;t.default=l,e.exports=t.default}}]);
//# sourceMappingURL=df-363.8c43f084.js.map