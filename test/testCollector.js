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
if (promiseland._hasModule({ hashStr: "2c4ae3017f175bf1f7b91699d6625b7e" })){ return promiseland._getModule("2c4ae3017f175bf1f7b91699d6625b7e"); };
var PL$6/*Promise*/;try{PL$6/*Promise*/ = Promise;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$2/*results*/;
var PL$3/*finishObj*/;
var PL$4/*getResultPromise*/;
var PL$7/*getFinishPromise*/;
var PL$8/*postResult*/;
var PL$15/*finish*/;
var PL$16/*waitForFinish*/;

  ;
  PL$2/*results*/ = {};
  PL$3/*finishObj*/ = {};
  PL$4/*getResultPromise*/ = (function(PL$5/*type*/){
  
    ;
    if(PL$2/*results*/[PL$5/*type*/]){
      return PL$2/*results*/[PL$5/*type*/];
    };
    ;
    PL$2/*results*/[PL$5/*type*/] = new PL$6/*Promise*/();
    return PL$2/*results*/[PL$5/*type*/];
    ;});
  PL$7/*getFinishPromise*/ = (function(PL$5/*type*/){
  
    ;
    if(! PL$3/*finishObj*/[PL$5/*type*/]){
      PL$3/*finishObj*/[PL$5/*type*/] = new PL$6/*Promise*/();
    };
    ;
    return PL$3/*finishObj*/[PL$5/*type*/];
    ;});
  PL$8/*postResult*/ = ((function(f){
promiseland.registerRemote("server", "2c4ae3017f175bf1f7b91699d6625b7e", "PL$14", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("2c4ae3017f175bf1f7b91699d6625b7e", "PL$14", arguments);
}
};
})(function(PL$5/*type*/, PL$9/*res*/){
  var PL$10 = new __Promise();
var PL$12 = function(code){ return function(res){ try{code(res);}catch(e){ PL$10.reject(e); }; }; };
var PL$13 = function(e){ PL$10.reject(e); };
PL$12(function(){
  
    ;
    PL$4/*getResultPromise*/(PL$5/*type*/)["resolve"](PL$9/*res*/);
    PL$10.resolve(); return;})();
return PL$10;
}));
  PL$15/*finish*/ = (function(PL$5/*type*/){
  
    ;
    PL$7/*getFinishPromise*/(PL$5/*type*/)["resolve"]();
    ;});
  PL$16/*waitForFinish*/ = ((function(f){
promiseland.registerRemote("server", "2c4ae3017f175bf1f7b91699d6625b7e", "PL$21", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("2c4ae3017f175bf1f7b91699d6625b7e", "PL$21", arguments);
}
};
})(function(PL$5/*type*/){
  var PL$17 = new __Promise();
var PL$18 = function(code){ return function(res){ try{code(res);}catch(e){ PL$17.reject(e); }; }; };
var PL$19 = function(e){ PL$17.reject(e); };
PL$18(function(){
  
    ;
    PL$7/*getFinishPromise*/(PL$5/*type*/).then(PL$18(function(PL$20){PL$20;
    PL$17.resolve(true); return;
    PL$17.resolve(); return;}), PL$19);
;})();
return PL$17;
}));
  return {"getResultPromise": PL$4/*getResultPromise*/,
"postResult": PL$8/*postResult*/,
"finish": PL$15/*finish*/,
"waitForFinish": PL$16/*waitForFinish*/};
  ;})();
;return PL$1;
});
})();