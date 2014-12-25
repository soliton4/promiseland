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
if (promiseland._hasModule({ hashStr: "eebfd8846a03586e8029663b626fa333" })){ return promiseland._getModule("eebfd8846a03586e8029663b626fa333"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "eebfd8846a03586e8029663b626fa333", "module": PL$1, promising: true });
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$5/*fmain*/;
var PL$5/*fmain*/ = function(){
var PL$7 = new __Promise();
var PL$9 = function(code){ return function(res){ try{code(res);}catch(e){ PL$7.reject(e); }; }; };
var PL$10 = function(e){ PL$7.reject(e); };
var PL$11/*fa*/;
var PL$12/*res*/;
var PL$13/*fb*/;
var PL$14/*fc*/;
var PL$11/*fa*/ = function(){

  ;
  return 1;
  ;};
var PL$13/*fb*/ = function(){

  ;
  return 2;
  ;};
var PL$14/*fc*/ = function(){

  ;
  return 3;
  ;};
PL$9(function(){

  ;
  PL$11/*fa*/;
  ;
  PL$12/*res*/ = ((PL$11/*fa*/() + PL$13/*fb*/()) + PL$14/*fc*/());
  PL$13/*fb*/;
  ;
  PL$7.resolve(PL$12/*res*/); return;
  
  var PL$15 = new __Promise();if(false){
    PL$13/*fb*/().then(PL$9(function(PL$16){PL$16;
    PL$15.resolve();;}), PL$10);
;
  }else{PL$15.resolve();
  };PL$15.then(PL$9(function(PL$17){PL$17;;
  ;
  PL$14/*fc*/;
  ;
  PL$7.resolve(); return;}), PL$10);
;})();
return PL$7;
};
PL$3(function(){

  ;
  PL$5/*fmain*/().then(PL$3(function(PL$6){if((PL$6 == 6)){
    PL$1.resolve({"success": true}); return;
  };
  ;
  PL$1.resolve({"success": false}); return;
  PL$5/*fmain*/;
  ;
  PL$1.resolve(); return;}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();