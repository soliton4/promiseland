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
if (promiseland._hasModule({ hashStr: "a12c7718386b905ee1f92a2f1bb071c8" })){ return promiseland._getModule("a12c7718386b905ee1f92a2f1bb071c8"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "a12c7718386b905ee1f92a2f1bb071c8", "module": PL$1, promising: true });
var PL$11/*Callback*/;try{PL$11/*Callback*/ = Callback;}catch(e){};
var PL$12/*setTimeout*/;try{PL$12/*setTimeout*/ = setTimeout;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$14/*cancelReason*/;
var PL$15/*runThrough*/;
var PL$25/*res*/;
function PL$5/*wait*/(){
var PL$6 = new __Promise();
var PL$8 = function(code){ return function(res){ try{code(res);}catch(e){ PL$6.reject(e); }; }; };
var PL$9 = function(e){ PL$6.reject(e); };
var PL$10/*cb*/;
PL$8(function(){

  ;
  PL$10/*cb*/ = new PL$11/*Callback*/();
  PL$12/*setTimeout*/(PL$10/*cb*/, 100);
  PL$10/*cb*/["promise"].then(PL$8(function(PL$13){PL$13;
  PL$6.resolve(); return;}), PL$9);
;})();
return PL$6;
};
function PL$16/*f*/(){
var PL$17 = new __Promise();
var PL$18 = function(code){ return function(res){ try{code(res);}catch(e){ PL$17.reject(e); }; }; };
var PL$19 = function(e){ PL$17.reject(e); };
PL$18(function(){

  ;
  var PL$20 = new __Promise();
var PL$21 = new __Promise();
var PL$22/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$21.resolve(e); }; }; };
var PL$23 = function(e){ PL$21.resolve(e); };
PL$22/*try catch*/(function(){
    PL$5/*wait*/().then(PL$22/*try catch*/(function(PL$24){PL$24;
    PL$17.resolve(); return;
    PL$20.resolve();}), PL$23);
;})();
PL$21.then(PL$18(function(__dummy){PL$20.resolve();}));
PL$20.then(PL$18(function(){;
  ;
  PL$15/*runThrough*/ = true;
  PL$17.resolve(); return;}), PL$19)})();
return PL$17;
};
PL$3(function(){

  ;
  PL$5/*wait*/;
  PL$14/*cancelReason*/;
  PL$15/*runThrough*/;
  PL$16/*f*/;
  ;
  PL$25/*res*/ = PL$16/*f*/();
  PL$25/*res*/["cancel"](4);
  PL$5/*wait*/().then(PL$3(function(PL$26){PL$26;
  PL$5/*wait*/().then(PL$3(function(PL$27){PL$27;
  if((PL$14/*cancelReason*/ != 4)){
    PL$1.resolve({"success": false}); return;
  };
  ;
  if(PL$15/*runThrough*/){
    PL$1.resolve({"success": false}); return;
  };
  ;
  PL$1.resolve({"success": true}); return;
  PL$1.resolve(); return;}), PL$4);
;}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();