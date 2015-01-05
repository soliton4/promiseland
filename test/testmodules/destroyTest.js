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
if (promiseland._hasModule({ hashStr: "611a5a0761f38d97f4674b150f8771da" })){ return promiseland._getModule("611a5a0761f38d97f4674b150f8771da"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "611a5a0761f38d97f4674b150f8771da", "module": PL$1, promising: true });
var PL$21/*Callback*/;try{PL$21/*Callback*/ = Callback;}catch(e){};
var PL$22/*setTimeout*/;try{PL$22/*setTimeout*/ = setTimeout;}catch(e){};
var PL$24/*console*/;try{PL$24/*console*/ = console;}catch(e){};
var PL$26/*x*/;try{PL$26/*x*/ = x;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$9 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$10 = function(e){ PL$1.reject(e); };
var PL$15/*waitFun*/;
var PL$4/*Cs1*/;
var PL$3/*type:Cs1*/ = classSystem._createProvisionalClass();
PL$4/*Cs1*/ = PL$3/*type:Cs1*/;
var PL$5/*Cs1-constructor*/ = undefined;classSystem.readyPromise(PL$3/*type:Cs1*/).then(function(parType){PL$3/*type:Cs1*/ = parType;PL$5/*Cs1-constructor*/ = classSystem.getTypeConstructor(PL$3/*type:Cs1*/);});var PL$6/*type:Cs1**/ = classSystem._createPromiseOfClass(PL$3/*type:Cs1*/);
var PL$7/*Cs1**/ = PL$6/*type:Cs1**/;
var PL$8/*Cs1*-constructor*/ = undefined;classSystem.readyPromise(PL$6/*type:Cs1**/).then(function(parType){PL$6/*type:Cs1**/ = parType;PL$8/*Cs1*-constructor*/ = classSystem.getTypeConstructor(PL$6/*type:Cs1**/);});PL$9(function(){

  ;
  var PL$11 = new __Promise();
var PL$12 = new __Promise();
var PL$13/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$12.resolve(e); }; }; };
var PL$14 = function(e){ PL$12.resolve(e); };
PL$13/*try catch*/(function(){
    PL$15/*waitFun*/ = (function(){
    var PL$16 = new __Promise();
var PL$18 = function(code){ return function(res){ try{code(res);}catch(e){ PL$16.reject(e); }; }; };
var PL$19 = function(e){ PL$16.reject(e); };
var PL$20/*cb*/;
PL$18(function(){
    
      ;
      PL$20/*cb*/ = new PL$21/*Callback*/();
      PL$22/*setTimeout*/(PL$20/*cb*/, 2000);
      PL$20/*cb*/["promise"].then(PL$18(function(PL$23){PL$23;
      PL$16.resolve(); return;}), PL$19);
;})();
return PL$16;
});
    classSystem._resolveProvisional(PL$3/*type:Cs1*/, classSystem.createClass({className: "Cs1",members: [{"name":"constructor","type":classSystem.getBuiltinType("var")},{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")},{"name":"destroy","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"serve":1,"line":10,"column":12,"offset":126}, "hashStr": "611a5a0761f38d97f4674b150f8771da", "name": "Cs1"}, {"constructor": (function(){
    
      ;
      PL$24/*console*/["log"]("constructed");
      ;}), "a": 1, "b": 4, "destroy": (function(){
    
      ;
      PL$24/*console*/["log"]("destroyed");
      ;})}));PL$4/*Cs1*/;
    (function(){
    if (!promiseland.profileHas("server")){
    return;
};
var PL$25/*a*/;
var _TPL$25/*a*/;

      try{;
      /*temp tracked assign*/(function(vAr){
if (_TPL$25/*a*/){ _TPL$25/*a*/(); };
if(vAr){
var v = vAr[0];
PL$25/*a*/ = v;
_TPL$25/*a*/ = vAr[1];
return v;
}else{
PL$25/*a*/ = undefined; _TPL$25/*a*/ = undefined;
return;
}; })(new PL$5/*Cs1-constructor*/())/*end temp assign*/
;
      (function(s, v){ v = s[10](v); s[9] = v; return v; })(PL$25/*a*/, 3);
      if (_TPL$25/*a*/){ _TPL$25/*a*/();};}catch(e){if (_TPL$25/*a*/){ _TPL$25/*a*/();};throw e};;})();
    ((function(f){
promiseland.registerRemote("server", "611a5a0761f38d97f4674b150f8771da", "PL$30", f, (classSystem.createFunctionType({ "return": PL$6/*type:Cs1**/, arguments: []})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("611a5a0761f38d97f4674b150f8771da", "PL$30", arguments);
}
};
})((function(t){return t;})(function PL$26/*x*/(){
    var PL$27;
var _TPL$27;
(function(){ var vAr = new PL$8/*Cs1*-constructor*/(); PL$27 = vAr[0]; _TPL$27 = vAr[1]; })();var PL$28 = function(code){ return function(res){ try{code(res);}catch(e){ if (_TPL$25/*a*/){ _TPL$25/*a*/();};PL$27.reject(e); }; }; };
var PL$29 = function(e){ if (_TPL$25/*a*/){ _TPL$25/*a*/();};PL$27.reject(e); };
var PL$25/*a*/;
var _TPL$25/*a*/;
PL$28(function(){
    
      ;
      PL$24/*console*/["log"]("doing the sync request");
      /*temp tracked assign*/(function(vAr){
if (_TPL$25/*a*/){ _TPL$25/*a*/(); };
if(vAr){
var v = vAr[0];
PL$25/*a*/ = v;
_TPL$25/*a*/ = vAr[1];
return v;
}else{
PL$25/*a*/ = undefined; _TPL$25/*a*/ = undefined;
return;
}; })(new PL$5/*Cs1-constructor*/())/*end temp assign*/
;
      PL$27.resolve((function(ret){ if (_TPL$25/*a*/){ _TPL$25/*a*/();};return ret; })((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$25/*a*/))); return;;
      if (_TPL$25/*a*/){ _TPL$25/*a*/();};PL$27.resolve(); return;;})();
return [PL$27, _TPL$27];
})));
    PL$15/*waitFun*/().then(PL$13/*try catch*/(function(PL$31){PL$31;
    (function(){
    var PL$32 = new __Promise();
var PL$33 = function(code){ return function(res){ try{code(res);}catch(e){ if (_TPL$35/*b*/){ _TPL$35/*b*/();};PL$32.reject(e); }; }; };
var PL$34 = function(e){ if (_TPL$35/*b*/){ _TPL$35/*b*/();};PL$32.reject(e); };
var PL$35/*b*/;
var _TPL$35/*b*/;
PL$33(function(){
    
      ;
      (function(){ throw { id:201, msg: "type missmatch" } })();
      if (_TPL$35/*b*/){ _TPL$35/*b*/();};PL$32.resolve(); return;;})();
return PL$32;
})();
    PL$11.resolve();}), PL$14);
;})();
PL$12.then(PL$9(function(PL$37/*e*/){
    PL$24/*console*/["log"]("error:");
    PL$24/*console*/["log"](PL$37/*e*/);
    PL$11.resolve();;}));
PL$11.then(PL$9(function(){;
  PL$1.resolve(); return;}), PL$10)})();
return PL$1;
})();
;;
return PL$1});
})();