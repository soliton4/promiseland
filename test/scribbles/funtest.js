(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback, errBack){
      try{
        var i = 0;
        var l = modulesAr.length;
        var args = [];
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    };
    defineFun = function(requireAr, callback){
      requireFun(requireAr, function(){
        module.exports = callback.apply(callback, arguments);
      });
    };
    
  }else if (typeof define == "function" && define.amd){ // AMD
    var _define = define;
    requireFun = require;
    
    defineFun = function(par1, par2){
      if (par1 instanceof Array){
        par1.unshift("require");
      }else{
        par2 = par1;
        par1 = ["require"];
      };
      _define(par1, function(){
        requireFun = arguments[0];
        var args = [];
        for (var i = 1; i < arguments.length; ++i){
          args.push(arguments[i]);
        };
        return par2.apply(par2, args);
      });
    };
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

if (promiseland._hasModule({ hashStr: "8219d0f3b17c71789de7687b768d741f" })){ return promiseland._getModule("8219d0f3b17c71789de7687b768d741f"); };
var PL$4/*console*/;try{PL$4/*console*/ = console;}catch(e){};
var PL$3/*y*/;try{PL$3/*y*/ = y;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  try
  {
    var PL$2/*x*/ = (function PL$3/*y*/(){
    
      ;
      PL$4/*console*/["log"]("exec");
      ;});
    PL$2/*x*/();
    PL$3/*y*/();}catch(PL$5/*e*/){
    PL$4/*console*/["log"](PL$5/*e*/);};
  ;
  PL$4/*console*/["log"]("finale");
  ;})();
;return PL$1;
});
})();