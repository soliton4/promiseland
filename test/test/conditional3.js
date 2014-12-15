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

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "f7fc351a75b46f42352d9622b55af737" })){ return promiseland._getModule("f7fc351a75b46f42352d9622b55af737"); };
var PL$1 = (function(){
"use strict";
var PL$2/*somefun*/;

  ;
  PL$2/*somefun*/ = (function(){
  var PL$3 = new __Promise();
var PL$5 = function(code){ return function(res){ try{code(res);}catch(e){ PL$3.reject(e); }; }; };
var PL$6 = function(e){ PL$3.reject(e); };
PL$5(function(){
  
    ;
    PL$3.resolve(1); return;
    PL$3.resolve(); return;})();
return PL$3;
});
  return {"fun": (function(){
  var PL$7 = new __Promise();
var PL$8 = function(code){ return function(res){ try{code(res);}catch(e){ PL$7.reject(e); }; }; };
var PL$9 = function(e){ PL$7.reject(e); };
var PL$10/*a*/;
PL$8(function(){
  
    ;
    PL$10/*a*/ = 1;
    
    var PL$11 = new __Promise();if(((PL$10/*a*/ + 1) == 3)){
      PL$10/*a*/ = 0;
      PL$11.resolve();;
    }else{
    PL$2/*somefun*/().then(PL$8(function(PL$12){PL$10/*a*/ = (PL$10/*a*/ + PL$12);
    PL$11.resolve();;}), PL$9);
;
    }; PL$11.then(function(){;
    ;
    if((PL$10/*a*/ == 2)){
      PL$7.resolve(4); return;
    };
    ;
    PL$7.resolve(0); return;
    PL$7.resolve(); return;});})();
return PL$7;
})};
  ;})();
;return PL$1;
});
})();