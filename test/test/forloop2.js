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
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "4e84e403eb11ef3aad15c8c7b151734b" })){ return promiseland._getModule("4e84e403eb11ef3aad15c8c7b151734b"); };
var PL$9/*Callback*/;try{PL$9/*Callback*/ = Callback;}catch(e){};
var PL$10/*setTimeout*/;try{PL$10/*setTimeout*/ = setTimeout;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$2/*somefun*/;

  ;
  PL$2/*somefun*/ = (function(PL$3/*par*/){
  var PL$4 = new __Promise();
var PL$6 = function(code){ return function(res){ try{code(res);}catch(e){ PL$4.reject(e); }; }; };
var PL$7 = function(e){ PL$4.reject(e); };
var PL$8/*c*/;
PL$6(function(){
  
    ;
    PL$8/*c*/ = new PL$9/*Callback*/();
    PL$10/*setTimeout*/(PL$8/*c*/["callback"], 100);
    PL$8/*c*/["promise"].then(PL$6(function(PL$11){PL$11;
    PL$4.resolve((PL$3/*par*/ + 1)); return;
    PL$4.resolve(); return;}), PL$7);
;})();
return PL$4;
});
  return {"fun": (function(){
  var PL$12 = new __Promise();
var PL$13 = function(code){ return function(res){ try{code(res);}catch(e){ PL$12.reject(e); }; }; };
var PL$14 = function(e){ PL$12.reject(e); };
var PL$15/*a*/;
var PL$16/*i*/;
PL$13(function(){
  
    ;
    PL$15/*a*/ = 1;
    PL$16/*i*/ = 0;
    PL$16/*i*/ = 0;var PL$19 = new __Promise();
var PL$18 = function(){var PL$20 = new __Promise();
if((PL$16/*i*/ < 4)){
    PL$15/*a*/ = (PL$15/*a*/ + 1);
    PL$20.resolve(true); return PL$20;
;}else{PL$20.resolve(false); return PL$20;
};
PL$20;return PL$20;
};
var PL$21 = function(){PL$18().then(function(contLoop){
if (contLoop){PL$2/*somefun*/(PL$16/*i*/).then(PL$13(function(PL$17){PL$16/*i*/ = PL$17;PL$21();}), PL$14);
;}else{PL$19.resolve();};
});
};
PL$21();
PL$19.then(function(){;
    ;
    if((PL$15/*a*/ == 5)){
      PL$12.resolve(4); return;
    };
    ;
    PL$12.resolve(0); return;
    PL$12.resolve(); return;});})();
return PL$12;
})};
  ;})();
;return PL$1;
});
})();