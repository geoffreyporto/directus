(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-9","df-0","df-1","df-2","df-3","df-4","df-5","df-6","df-7","df-8"],{"1f21":function(e,a,t){"use strict";function n(e){return function(a){var t=a||{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n,e.exports=a.default},"22a0":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(t("73c8")),r=o(t("d78c")),d=o(t("30ee")),i=o(t("6701")),u=o(t("f301"));function o(e){return e&&e.__esModule?e:{default:e}}var l={code:"af",formatDistance:n.default,formatLong:r.default,formatRelative:d.default,localize:i.default,match:u.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},s=l;a.default=s,e.exports=a.default},"30ee":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=r;var n={lastWeek:"'verlede' eeee 'om' p",yesterday:"'gister om' p",today:"'vandag om' p",tomorrow:"'môre om' p",nextWeek:"eeee 'om' p",other:"P"};function r(e){return n[e]}e.exports=a.default},6701:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("af03"));function r(e){return e&&e.__esModule?e:{default:e}}var d={narrow:["vC","nC"],abbreviated:["vC","nC"],wide:["voor Christus","na Christus"]},i={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ste kwartaal","2de kwartaal","3de kwartaal","4de kwartaal"]},u={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"],wide:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"]},o={narrow:["S","M","D","W","D","V","S"],short:["So","Ma","Di","Wo","Do","Vr","Sa"],abbreviated:["Son","Maa","Din","Woe","Don","Vry","Sat"],wide:["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"]},l={narrow:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"},abbreviated:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"},wide:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"}},s={narrow:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"},abbreviated:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"},wide:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"}};function f(e){var a=Number(e),t=a%100;if(t<20)switch(t){case 1:case 8:return a+"ste";default:return a+"de"}return a+"ste"}var m={ordinalNumber:f,era:(0,n.default)({values:d,defaultWidth:"wide"}),quarter:(0,n.default)({values:i,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:u,defaultWidth:"wide"}),day:(0,n.default)({values:o,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:l,defaultWidth:"wide",formattingValues:s,defaultFormattingWidth:"wide"})},g=m;a.default=g,e.exports=a.default},"73c8":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=r;var n={lessThanXSeconds:{one:"minder as 'n sekonde",other:"minder as {{count}} sekondes"},xSeconds:{one:"1 sekonde",other:"{{count}} sekondes"},halfAMinute:"'n halwe minuut",lessThanXMinutes:{one:"minder as 'n minuut",other:"minder as {{count}} minute"},xMinutes:{one:"'n minuut",other:"{{count}} minute"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} ure"},xHours:{one:"1 uur",other:"{{count}} ure"},xDays:{one:"1 dag",other:"{{count}} dae"},aboutXWeeks:{one:"ongeveer 1 week",other:"ongeveer {{count}} weke"},xWeeks:{one:"1 week",other:"{{count}} weke"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maande"},xMonths:{one:"1 maand",other:"{{count}} maande"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer as 1 jaar",other:"meer as {{count}} jaar"},almostXYears:{one:"byna 1 jaar",other:"byna {{count}} jaar"}};function r(e,a,t){var r;return t=t||{},r="string"===typeof n[e]?n[e]:1===a?n[e].one:n[e].other.replace("{{count}}",a),t.addSuffix?t.comparison>0?"oor "+r:r+" gelede":r}e.exports=a.default},9686:function(e,a,t){"use strict";function n(e){return function(a,t){var n=String(a),r=t||{},d=n.match(e.matchPattern);if(!d)return null;var i=d[0],u=n.match(e.parsePattern);if(!u)return null;var o=e.valueCallback?e.valueCallback(u[0]):u[0];return o=r.valueCallback?r.valueCallback(o):o,{value:o,rest:n.slice(i.length)}}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n,e.exports=a.default},af03:function(e,a,t){"use strict";function n(e){return function(a,t){var n,r=t||{},d=r.context?String(r.context):"standalone";if("formatting"===d&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,u=r.width?String(r.width):i;n=e.formattingValues[u]||e.formattingValues[i]}else{var o=e.defaultWidth,l=r.width?String(r.width):e.defaultWidth;n=e.values[l]||e.values[o]}var s=e.argumentCallback?e.argumentCallback(a):a;return n[s]}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n,e.exports=a.default},b028:function(e,a,t){"use strict";function n(e){return function(a,t){var n=String(a),i=t||{},u=i.width,o=u&&e.matchPatterns[u]||e.matchPatterns[e.defaultMatchWidth],l=n.match(o);if(!l)return null;var s,f=l[0],m=u&&e.parsePatterns[u]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(m)?d(m,(function(e){return e.test(f)})):r(m,(function(e){return e.test(f)})),s=e.valueCallback?e.valueCallback(s):s,s=i.valueCallback?i.valueCallback(s):s,{value:s,rest:n.slice(f.length)}}}function r(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function d(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n,e.exports=a.default},d78c:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("1f21"));function r(e){return e&&e.__esModule?e:{default:e}}var d={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"yyyy/MM/dd"},i={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},u={full:"{{date}} 'om' {{time}}",long:"{{date}} 'om' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},o={date:(0,n.default)({formats:d,defaultWidth:"full"}),time:(0,n.default)({formats:i,defaultWidth:"full"}),dateTime:(0,n.default)({formats:u,defaultWidth:"full"})},l=o;a.default=l,e.exports=a.default},f301:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=d(t("9686")),r=d(t("b028"));function d(e){return e&&e.__esModule?e:{default:e}}var i=/^(\d+)(ste|de)?/i,u=/\d+/i,o={narrow:/^([vn]\.? ?C\.?)/,abbreviated:/^([vn]\. ?C\.?)/,wide:/^((voor|na) Christus)/},l={any:[/^v/,/^n/]},s={narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234](st|d)e kwartaal/i},f={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[jfmasond]/i,abbreviated:/^(Jan|Feb|Mrt|Apr|Mei|Jun|Jul|Aug|Sep|Okt|Nov|Dec)\.?/i,wide:/^(Januarie|Februarie|Maart|April|Mei|Junie|Julie|Augustus|September|Oktober|November|Desember)/i},g={narrow:[/^J/i,/^F/i,/^M/i,/^A/i,/^M/i,/^J/i,/^J/i,/^A/i,/^S/i,/^O/i,/^N/i,/^D/i],any:[/^Jan/i,/^Feb/i,/^Mrt/i,/^Apr/i,/^Mei/i,/^Jun/i,/^Jul/i,/^Aug/i,/^Sep/i,/^Okt/i,/^Nov/i,/^Dec/i]},c={narrow:/^[smdwv]/i,short:/^(So|Ma|Di|Wo|Do|Vr|Sa)/i,abbreviated:/^(Son|Maa|Din|Woe|Don|Vry|Sat)/i,wide:/^(Sondag|Maandag|Dinsdag|Woensdag|Donderdag|Vrydag|Saterdag)/i},v={narrow:[/^S/i,/^M/i,/^D/i,/^W/i,/^D/i,/^V/i,/^S/i],any:[/^So/i,/^Ma/i,/^Di/i,/^Wo/i,/^Do/i,/^Vr/i,/^Sa/i]},h={any:/^(vm|nm|middernag|(?:uur )?die (oggend|middag|aand))/i},b={any:{am:/^vm/i,pm:/^nm/i,midnight:/^middernag/i,noon:/^middaguur/i,morning:/oggend/i,afternoon:/middag/i,evening:/laat middag/i,night:/aand/i}},p={ordinalNumber:(0,n.default)({matchPattern:i,parsePattern:u,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:g,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:h,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})},M=p;a.default=M,e.exports=a.default}}]);
//# sourceMappingURL=df-9.3a97d7e7.js.map