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
var classSystem = promiseland.classSystem;
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "86f889f1b341a40e6f299cccd09ab881" })){ return promiseland._getModule("86f889f1b341a40e6f299cccd09ab881"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "86f889f1b341a40e6f299cccd09ab881", "module": PL$1, promising: true });
var PL$15/*Callback*/;try{PL$15/*Callback*/ = Callback;}catch(e){};
var PL$16/*setTimeout*/;try{PL$16/*setTimeout*/ = setTimeout;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$6 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$7 = function(e){ PL$1.reject(e); };
var PL$4/*C1*/;
var PL$18/*f1*/;
var PL$19/*a*/;
var PL$3/*type:C1*/ = classSystem._createProvisionalClass();
PL$4/*C1*/ = PL$3/*type:C1*/;
var PL$5/*C1-constructor*/ = undefined;classSystem.readyPromise(PL$3/*type:C1*/).then(function(parType){PL$3/*type:C1*/ = parType;PL$5/*C1-constructor*/ = classSystem.getTypeConstructor(PL$3/*type:C1*/);});var PL$8/*type:C1**/ = classSystem._createPromiseOfClass(PL$3/*type:C1*/);
var PL$9/*C1**/ = PL$8/*type:C1**/;
var PL$10/*C1*-constructor*/ = undefined;classSystem.readyPromise(PL$8/*type:C1**/).then(function(parType){PL$8/*type:C1**/ = parType;PL$10/*C1*-constructor*/ = classSystem.getTypeConstructor(PL$8/*type:C1**/);});var PL$18/*f1*/ = (function(t){return t;})(function(){
var PL$11 = new __Promise();
var PL$12 = function(code){ return function(res){ try{code(res);}catch(e){ PL$11.reject(e); }; }; };
var PL$13 = function(e){ PL$11.reject(e); };
var PL$14/*cb*/;
PL$12(function(){

  ;
  PL$14/*cb*/ = new PL$15/*Callback*/();
  PL$16/*setTimeout*/(PL$14/*cb*/, 500);
  PL$14/*cb*/["promise"].then(PL$12(function(PL$17){PL$17;
  PL$11.resolve(new PL$5/*C1-constructor*/()); return;
  PL$11.resolve(); return;}), PL$13);
;})();
return PL$11;
});
PL$6(function(){

  ;
  classSystem._resolveProvisional(PL$3/*type:C1*/, classSystem.createClass({className: "C1",members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true}, {"a": 1, "b": 2}));PL$4/*C1*/;
  PL$18/*f1*/;
  PL$19/*a*/;
  PL$18/*f1*/().then(PL$6(function(PL$20){PL$19/*a*/ = PL$20;
  if((PL$19/*a*/[4] == 2)){
    PL$1.resolve({"success": true}); return;
  };
  ;
  PL$1.resolve({"success": false}); return;
  PL$1.resolve(); return;}), PL$7);
;})();
return PL$1;
})();
;;
return PL$1});
})();