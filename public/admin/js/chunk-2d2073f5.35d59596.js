(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2073f5"],{a05e:function(n,e,t){(function(n){n(t("56b3"))})((function(n){"use strict";var e="><+-.,[]".split("");n.defineMode("brainfuck",(function(){return{startState:function(){return{commentLine:!1,left:0,right:0,commentLoop:!1}},token:function(n,t){if(n.eatSpace())return null;n.sol()&&(t.commentLine=!1);var o=n.next().toString();return-1===e.indexOf(o)?(t.commentLine=!0,n.eol()&&(t.commentLine=!1),"comment"):!0===t.commentLine?(n.eol()&&(t.commentLine=!1),"comment"):"]"===o||"["===o?("["===o?t.left++:t.right++,"bracket"):"+"===o||"-"===o?"keyword":"<"===o||">"===o?"atom":"."===o||","===o?"def":void(n.eol()&&(t.commentLine=!1))}}})),n.defineMIME("text/x-brainfuck","brainfuck")}))}}]);
//# sourceMappingURL=chunk-2d2073f5.35d59596.js.map