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
  defineFun([], function(){
var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "5d83e52141e93312abd3a27ea214726f" })){ return promiseland._getModule("5d83e52141e93312abd3a27ea214726f"); };
var PL$3/*Object*/;try{PL$3/*Object*/ = Object;}catch(e){};
var PL$12/*TypeError*/;try{PL$12/*TypeError*/ = TypeError;}catch(e){};
var PL$42/*promiseland*/;try{PL$42/*promiseland*/ = promiseland;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$2/*hasOwnProperty*/;
var PL$4/*MANGLE_STRING*/;
var PL$6/*mangle*/;
var PL$7/*unmangle*/;
var PL$11/*methods*/;
var PL$13/*assertString*/;
var PL$14/*Map*/;
var PL$6/*mangle*/ = function(PL$5/*key*/){

  ;
  return (PL$4/*MANGLE_STRING*/ + PL$5/*key*/);
  ;};
var PL$7/*unmangle*/ = function(PL$5/*key*/){

  ;
  return PL$5/*key*/["substring"](PL$4/*MANGLE_STRING*/["length"]);
  ;};
var PL$11/*methods*/ = function(PL$8/*obj*/, PL$9/*methodHash*/){
var PL$10/*methodName*/;

  ;
  for(PL$10/*methodName*/ in PL$9/*methodHash*/){
    PL$3/*Object*/["defineProperty"](PL$8/*obj*/, PL$10/*methodName*/, {"value": PL$9/*methodHash*/[PL$10/*methodName*/],
"configurable": true,
"writable": true});};
  ;};
var PL$13/*assertString*/ = function(PL$5/*key*/){

  ;
  if((typeof PL$5/*key*/ !== "string")){
    throw new PL$12/*TypeError*/("key must be a string.");
  };
  ;};

  ;
  ;
  PL$2/*hasOwnProperty*/ = PL$3/*Object*/["prototype"]["hasOwnProperty"];
  PL$4/*MANGLE_STRING*/ = "~";
  PL$6/*mangle*/;
  PL$7/*unmangle*/;
  PL$11/*methods*/;
  PL$13/*assertString*/;
  PL$14/*Map*/ = (function(PL$15/*initializer*/){
  var PL$16/*store*/;
var PL$17/*size*/;
var PL$18/*dict*/;

    ;
    PL$16/*store*/ = PL$3/*Object*/["create"](null);
    PL$17/*size*/ = 0;
    PL$18/*dict*/ = {};
    PL$11/*methods*/(PL$18/*dict*/, {"get": (function(PL$5/*key*/, PL$19/*defaultValue*/){
    var PL$20/*mangled*/;

      ;
      PL$13/*assertString*/(PL$5/*key*/);
      PL$20/*mangled*/ = PL$6/*mangle*/(PL$5/*key*/);
      return ((PL$20/*mangled*/ in PL$16/*store*/) ? PL$16/*store*/[PL$20/*mangled*/] : PL$19/*defaultValue*/);
      ;}),
"set": (function(PL$5/*key*/, PL$21/*value*/){
    var PL$20/*mangled*/;

      ;
      PL$13/*assertString*/(PL$5/*key*/);
      PL$20/*mangled*/ = PL$6/*mangle*/(PL$5/*key*/);
      if(! (PL$20/*mangled*/ in PL$16/*store*/)){
        ++PL$17/*size*/;
      };
      return PL$16/*store*/[PL$20/*mangled*/] = PL$21/*value*/;
      ;}),
"has": (function(PL$5/*key*/){
    
      ;
      PL$13/*assertString*/(PL$5/*key*/);
      return (PL$6/*mangle*/(PL$5/*key*/) in PL$16/*store*/);
      ;}),
"delete": (function(PL$5/*key*/){
    var PL$20/*mangled*/;

      ;
      PL$13/*assertString*/(PL$5/*key*/);
      PL$20/*mangled*/ = PL$6/*mangle*/(PL$5/*key*/);
      if((PL$20/*mangled*/ in PL$16/*store*/)){
        --PL$17/*size*/;
        delete PL$16/*store*/[PL$20/*mangled*/];
        return true;
      };
      return false;
      ;}),
"clear": (function(){
    
      ;
      PL$16/*store*/ = PL$3/*Object*/["create"](null);
      PL$17/*size*/ = 0;
      ;}),
"forEach": (function(PL$22/*callback*/, PL$23/*thisArg*/){
    var PL$24/*mangledKey*/;
var PL$5/*key*/;
var PL$21/*value*/;

      ;
      if((typeof PL$22/*callback*/ !== "function")){
        throw new PL$12/*TypeError*/("`callback` must be a function");
      };
      for(PL$24/*mangledKey*/ in PL$16/*store*/){
        if(PL$2/*hasOwnProperty*/["call"](PL$16/*store*/, PL$24/*mangledKey*/)){
          PL$5/*key*/ = PL$7/*unmangle*/(PL$24/*mangledKey*/);
          PL$21/*value*/ = PL$16/*store*/[PL$24/*mangledKey*/];
          PL$22/*callback*/["call"](PL$23/*thisArg*/, PL$21/*value*/, PL$5/*key*/, PL$18/*dict*/);
        };};
      ;}),
"forEachP": (function(PL$22/*callback*/, PL$23/*thisArg*/){
    var PL$25 = new __Promise();
var PL$27 = function(code){ return function(res){ try{code(res);}catch(e){ PL$25.reject(e); }; }; };
var PL$28 = function(e){ PL$25.reject(e); };
var PL$24/*mangledKey*/;
var PL$5/*key*/;
var PL$21/*value*/;
PL$27(function(){
    
      ;
      if((typeof PL$22/*callback*/ !== "function")){
        throw new PL$12/*TypeError*/("`callback` must be a function");
      };
      var PL$29 = [];for(PL$24/*mangledKey*/ in PL$16/*store*/){PL$29.push(PL$24/*mangledKey*/);};PL$24/*mangledKey*/ = PL$29[0];var PL$30 = 0;var PL$32 = new __Promise();
var PL$31 = function(){var PL$33 = new __Promise();
if(PL$30 < PL$29.length){
      
      var PL$34 = new __Promise();if(PL$2/*hasOwnProperty*/["call"](PL$16/*store*/, PL$24/*mangledKey*/)){
        PL$5/*key*/ = PL$7/*unmangle*/(PL$24/*mangledKey*/);
        PL$21/*value*/ = PL$16/*store*/[PL$24/*mangledKey*/];
        PL$22/*callback*/["call"](PL$23/*thisArg*/, PL$21/*value*/, PL$5/*key*/, PL$18/*dict*/).then(PL$27(function(PL$35){PL$35;
        PL$34.resolve();;}), PL$28);
;
      }else{PL$34.resolve();
      };PL$34.then(PL$27(function(PL$36){PL$36;;
      ;
      PL$33.resolve(true); return PL$33;
;}), PL$28);
;}else{PL$33.resolve(false); return PL$33;
};
PL$33;return PL$33;
};
var PL$37 = function(){PL$31().then(function(contLoop){
if (contLoop){PL$30++;PL$24/*mangledKey*/ = PL$29[PL$30];;PL$37();}else{PL$32.resolve();};
});
};
PL$37();
PL$32.then(function(){;
      ;
      PL$25.resolve(); return;});})();
return PL$25;
}),
"getArray": (function(){
    var PL$38/*res*/;

      ;
      PL$38/*res*/ = [];
      this["forEach"]((function(PL$21/*value*/, PL$5/*key*/){
      
        ;
        PL$38/*res*/["push"]({"key": PL$5/*key*/,
"value": PL$21/*value*/});
        ;}));
      return PL$38/*res*/;
      ;}),
"mixin": (function(PL$39/*other*/){
    var PL$40/*a*/;
var PL$41/*i*/;

      ;
      if(! PL$39/*other*/){
        return this;
      };
      ;
      PL$40/*a*/ = PL$39/*other*/["getArray"]();
      PL$41/*i*/;
      for(PL$41/*i*/ = 0;(PL$41/*i*/ < PL$40/*a*/["length"]);++PL$41/*i*/){{
        this["set"](PL$40/*a*/[PL$41/*i*/]["key"], PL$40/*a*/[PL$41/*i*/]["value"]);}};
      ;
      return this;
      ;})});
    PL$3/*Object*/["defineProperty"](PL$18/*dict*/, "size", {"get": (function(){
    
      ;
      return PL$17/*size*/;
      ;}),
"configurable": true});
    if(((typeof PL$15/*initializer*/ === "object") && (PL$15/*initializer*/ !== null))){
      PL$3/*Object*/["keys"](PL$15/*initializer*/)["forEach"]((function(PL$5/*key*/){
      
        ;
        PL$18/*dict*/["set"](PL$5/*key*/, PL$15/*initializer*/[PL$5/*key*/]);
        ;}));
    };
    return PL$18/*dict*/;
    ;});
  PL$42/*promiseland*/["Map"] = PL$14/*Map*/;
  return PL$14/*Map*/;
  ;})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();