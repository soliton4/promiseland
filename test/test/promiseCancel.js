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
var PL$10/*Callback*/;try{PL$10/*Callback*/ = Callback;}catch(e){};
var PL$11/*setTimeout*/;try{PL$11/*setTimeout*/ = setTimeout;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$13/*wait*/;
var PL$14/*cancelReason*/;
var PL$15/*runThrough*/;
var PL$24/*f*/;
var PL$25/*res*/;
var PL$13/*wait*/ = function(){
var PL$5 = new __Promise();
var PL$7 = function(code){ return function(res){ try{code(res);}catch(e){ PL$5.reject(e); }; }; };
var PL$8 = function(e){ PL$5.reject(e); };
var PL$9/*cb*/;
PL$7(function(){

  ;
  PL$9/*cb*/ = new PL$10/*Callback*/();
  PL$11/*setTimeout*/(PL$9/*cb*/, 100);
  PL$9/*cb*/["promise"].then(PL$7(function(PL$12){PL$12;
  PL$5.resolve(); return;}), PL$8);
;})();
return PL$5;
};
var PL$24/*f*/ = function(){
var PL$16 = new __Promise();
var PL$17 = function(code){ return function(res){ try{code(res);}catch(e){ PL$16.reject(e); }; }; };
var PL$18 = function(e){ PL$16.reject(e); };
PL$17(function(){

  ;
  var PL$19 = new __Promise();
var PL$20 = new __Promise();
var PL$21/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$20.resolve(e); }; }; };
var PL$22 = function(e){ PL$20.resolve(e); };
PL$21/*try catch*/(function(){
    PL$13/*wait*/().then(PL$21/*try catch*/(function(PL$23){PL$23;
    PL$16.resolve(); return;
    PL$19.resolve();}), PL$22);
;})();
PL$20.then(PL$17(function(__dummy){PL$19.resolve();}));
PL$19.then(PL$17(function(){;
  ;
  PL$15/*runThrough*/ = true;
  PL$16.resolve(); return;}), PL$18)})();
return PL$16;
};
PL$3(function(){

  ;
  PL$13/*wait*/;
  PL$14/*cancelReason*/;
  PL$15/*runThrough*/;
  PL$24/*f*/;
  ;
  PL$25/*res*/ = PL$24/*f*/();
  PL$25/*res*/["cancel"](4);
  PL$13/*wait*/().then(PL$3(function(PL$26){PL$26;
  PL$13/*wait*/().then(PL$3(function(PL$27){PL$27;
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