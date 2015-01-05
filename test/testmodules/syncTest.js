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
if (promiseland._hasModule({ hashStr: "526adb710b3b5518eafd3ced0386c4bc" })){ return promiseland._getModule("526adb710b3b5518eafd3ced0386c4bc"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "526adb710b3b5518eafd3ced0386c4bc", "module": PL$1, promising: true });
var PL$21/*Callback*/;try{PL$21/*Callback*/ = Callback;}catch(e){};
var PL$22/*setTimeout*/;try{PL$22/*setTimeout*/ = setTimeout;}catch(e){};
var PL$27/*setInterval*/;try{PL$27/*setInterval*/ = setInterval;}catch(e){};
var PL$32/*console*/;try{PL$32/*console*/ = console;}catch(e){};
var PL$28/*x*/;try{PL$28/*x*/ = x;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$9 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$10 = function(e){ PL$1.reject(e); };
var PL$15/*waitFun*/;
var PL$4/*Cs1*/;
var PL$24/*a*/;
var _TPL$24/*a*/;
var PL$25/*gotit*/;
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
    classSystem._resolveProvisional(PL$3/*type:Cs1*/, classSystem.createClass({className: "Cs1",members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":10,"column":12,"offset":126}, "hashStr": "526adb710b3b5518eafd3ced0386c4bc", "name": "Cs1"}, {"a": 1, "b": 4}));PL$4/*Cs1*/;
    PL$24/*a*/;
    PL$25/*gotit*/ = false;
    (function(){
    if (!promiseland.profileHas("server")){
    return;
};
var PL$26/*next*/;

      ;
      /*temp tracked assign*/(function(vAr){
if (_TPL$24/*a*/){ _TPL$24/*a*/(); };
if(vAr){
var v = vAr[0];
PL$24/*a*/ = v;
_TPL$24/*a*/ = vAr[1];
return v;
}else{
PL$24/*a*/ = undefined; _TPL$24/*a*/ = undefined;
return;
}; })(new PL$5/*Cs1-constructor*/())/*end temp assign*/
;
      (function(s, v){ v = s[8](v); s[7] = v; return v; })(PL$24/*a*/, 3);
      PL$25/*gotit*/ = true;
      PL$26/*next*/ = 10;
      PL$27/*setInterval*/((function(){
      
        ;
        (function(s, v){ v = s[8](v); s[7] = v; return v; })(PL$24/*a*/, PL$26/*next*/++);
        ;}), 1000);
      ;})();
    ((function(f){
promiseland.registerRemote("server", "526adb710b3b5518eafd3ced0386c4bc", "PL$33", f, (classSystem.createFunctionType({ "return": PL$6/*type:Cs1**/, arguments: []})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("526adb710b3b5518eafd3ced0386c4bc", "PL$33", arguments);
}
};
})((function(t){return t;})(function PL$28/*x*/(){
    var PL$29;
var _TPL$29;
(function(){ var vAr = new PL$8/*Cs1*-constructor*/(); PL$29 = vAr[0]; _TPL$29 = vAr[1]; })();var PL$30 = function(code){ return function(res){ try{code(res);}catch(e){ PL$29.reject(e); }; }; };
var PL$31 = function(e){ PL$29.reject(e); };
PL$30(function(){
    
      ;
      PL$32/*console*/["log"]("doing the sync request");
      PL$29.resolve((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$24/*a*/)); return;
      PL$29.resolve(); return;})();
return [PL$29, _TPL$29];
})));
    PL$15/*waitFun*/().then(PL$13/*try catch*/(function(PL$34){PL$34;
    
    var PL$35 = new __Promise();if(! PL$25/*gotit*/){
      PL$32/*console*/["log"]("step1");
      (function(){ throw { id:201, msg: "type missmatch" } })();
      PL$32/*console*/["log"]("step2");
      PL$27/*setInterval*/((function(){
      
        ;
        PL$32/*console*/["log"](PL$24/*a*/[7]);
        ;}), 1000);
      PL$35.resolve();;
    }else{PL$35.resolve();
    };PL$35.then(PL$13/*try catch*/(function(PL$37){PL$37;;
    ;
    PL$11.resolve();}), PL$14);
;}), PL$14);
;})();
PL$12.then(PL$9(function(PL$38/*e*/){
    PL$32/*console*/["log"]("error:");
    PL$32/*console*/["log"](PL$38/*e*/);
    PL$11.resolve();;}));
PL$11.then(PL$9(function(){;
  PL$1.resolve(); return;}), PL$10)})();
return PL$1;
})();
;;
return PL$1});
})();