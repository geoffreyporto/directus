(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-50","df-2","df-3"],{"90c4":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("9686")),r=n(e("b028"));function n(t){return t&&t.__esModule?t:{default:t}}var u=/^(\d+)(ম|য়|র্থ|ষ্ঠ|শে|ই|তম)?/i,l=/\d+/i,d={narrow:/^(খ্রিঃপূঃ|খ্রিঃ)/i,abbreviated:/^(খ্রিঃপূর্ব|খ্রিঃ)/i,wide:/^(খ্রিস্টপূর্ব|খ্রিস্টাব্দ)/i},c={narrow:[/^খ্রিঃপূঃ/i,/^খ্রিঃ/i],abbreviated:[/^খ্রিঃপূর্ব/i,/^খ্রিঃ/i],wide:[/^খ্রিস্টপূর্ব/i,/^খ্রিস্টাব্দ/i]},s={narrow:/^[১২৩৪]/i,abbreviated:/^[১২৩৪]ত্রৈ/i,wide:/^[১২৩৪](ম|য়|র্থ)? ত্রৈমাসিক/i},f={any:[/১/i,/২/i,/৩/i,/৪/i]},o={narrow:/^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i,abbreviated:/^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i,wide:/^(জানুয়ারি|ফেব্রুয়ারি|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্টেম্বর|অক্টোবর|নভেম্বর|ডিসেম্বর)/i},h={any:[/^জানু/i,/^ফেব্রু/i,/^মার্চ/i,/^এপ্রিল/i,/^মে/i,/^জুন/i,/^জুলাই/i,/^আগস্ট/i,/^সেপ্ট/i,/^অক্টো/i,/^নভে/i,/^ডিসে/i]},b={narrow:/^(র|সো|ম|বু|বৃ|শু|শ)+/i,short:/^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i,abbreviated:/^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i,wide:/^(রবিবার|সোমবার|মঙ্গলবার|বুধবার|বৃহস্পতিবার |শুক্রবার|শনিবার)+/i},v={narrow:[/^র/i,/^সো/i,/^ম/i,/^বু/i,/^বৃ/i,/^শু/i,/^শ/i],short:[/^রবি/i,/^সোম/i,/^মঙ্গল/i,/^বুধ/i,/^বৃহ/i,/^শুক্র/i,/^শনি/i],abbreviated:[/^রবি/i,/^সোম/i,/^মঙ্গল/i,/^বুধ/i,/^বৃহ/i,/^শুক্র/i,/^শনি/i],wide:[/^রবিবার/i,/^সোমবার/i,/^মঙ্গলবার/i,/^বুধবার/i,/^বৃহস্পতিবার /i,/^শুক্রবার/i,/^শনিবার/i]},P={narrow:/^(পূ|অপ|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i,abbreviated:/^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i,wide:/^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i},w={any:{am:/^পূ/i,pm:/^অপ/i,midnight:/^মধ্যরাত/i,noon:/^মধ্যাহ্ন/i,morning:/সকাল/i,afternoon:/বিকাল/i,evening:/সন্ধ্যা/i,night:/রাত/i}},p={ordinalNumber:(0,i.default)({matchPattern:u,parsePattern:l,valueCallback:function(t){return parseInt(t,10)}}),era:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,r.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:b,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:P,defaultMatchWidth:"any",parsePatterns:w,defaultParseWidth:"any"})},m=p;a.default=m,t.exports=a.default},9686:function(t,a,e){"use strict";function i(t){return function(a,e){var i=String(a),r=e||{},n=i.match(t.matchPattern);if(!n)return null;var u=n[0],l=i.match(t.parsePattern);if(!l)return null;var d=t.valueCallback?t.valueCallback(l[0]):l[0];return d=r.valueCallback?r.valueCallback(d):d,{value:d,rest:i.slice(u.length)}}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=i,t.exports=a.default},b028:function(t,a,e){"use strict";function i(t){return function(a,e){var i=String(a),u=e||{},l=u.width,d=l&&t.matchPatterns[l]||t.matchPatterns[t.defaultMatchWidth],c=i.match(d);if(!c)return null;var s,f=c[0],o=l&&t.parsePatterns[l]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(o)?n(o,(function(t){return t.test(f)})):r(o,(function(t){return t.test(f)})),s=t.valueCallback?t.valueCallback(s):s,s=u.valueCallback?u.valueCallback(s):s,{value:s,rest:i.slice(f.length)}}}function r(t,a){for(var e in t)if(t.hasOwnProperty(e)&&a(t[e]))return e}function n(t,a){for(var e=0;e<t.length;e++)if(a(t[e]))return e}Object.defineProperty(a,"__esModule",{value:!0}),a.default=i,t.exports=a.default}}]);
//# sourceMappingURL=df-50.ed6c3531.js.map