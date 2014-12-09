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

if (promiseland._hasModule({ hashStr: "6b435967d4e24cae0aaf40c9722f44ee" })){ return promiseland._getModule("6b435967d4e24cae0aaf40c9722f44ee"); };
var PL$2/*fs*/;try{PL$2/*fs*/ = fs;}catch(e){};
var PL$3/*filename*/;try{PL$3/*filename*/ = filename;}catch(e){};
var PL$4/*callback*/;try{PL$4/*callback*/ = callback;}catch(e){};
var PL$1 = (function(){
"use strict";
;
PL$2/*fs*/["readFile"](PL$3/*filename*/, {"encoding": "utf8"}, PL$4/*callback*/["callback"]);;
;
})();
;return PL$1;
});
})();