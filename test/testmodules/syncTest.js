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
var PL$18/*Callback*/;try{PL$18/*Callback*/ = Callback;}catch(e){};
var PL$19/*setTimeout*/;try{PL$19/*setTimeout*/ = setTimeout;}catch(e){};
var PL$24/*setInterval*/;try{PL$24/*setInterval*/ = setInterval;}catch(e){};
var PL$31/*console*/;try{PL$31/*console*/ = console;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$6 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$7 = function(e){ PL$1.reject(e); };
var PL$12/*waitFun*/;
var PL$4/*Cs1*/;
var PL$21/*a*/;
var _TPL$21/*a*/;
var PL$22/*gotit*/;
var PL$33/*x*/;
var PL$3/*type:Cs1*/ = classSystem._createProvisionalClass();
PL$4/*Cs1*/ = PL$3/*type:Cs1*/;
var PL$5/*Cs1-constructor*/ = undefined;classSystem.readyPromise(PL$3/*type:Cs1*/).then(function(parType){PL$3/*type:Cs1*/ = parType;PL$5/*Cs1-constructor*/ = classSystem.getTypeConstructor(PL$3/*type:Cs1*/);});var PL$25/*type:Cs1**/ = classSystem._createPromiseOfClass(PL$3/*type:Cs1*/);
var PL$26/*Cs1**/ = PL$25/*type:Cs1**/;
var PL$27/*Cs1*-constructor*/ = undefined;classSystem.readyPromise(PL$25/*type:Cs1**/).then(function(parType){PL$25/*type:Cs1**/ = parType;PL$27/*Cs1*-constructor*/ = classSystem.getTypeConstructor(PL$25/*type:Cs1**/);});var PL$33/*x*/ = (function(f){
promiseland.registerRemote("server", "526adb710b3b5518eafd3ced0386c4bc", "PL$32", f, (classSystem.createFunctionType({ "return": PL$25/*type:Cs1**/, arguments: []})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("526adb710b3b5518eafd3ced0386c4bc", "PL$32", arguments);
}
};
})((function(t){return t;})(function(){
var PL$28;
var _TPL$28;
(function(){ var vAr = new PL$27/*Cs1*-constructor*/(); PL$28 = vAr[0]; _TPL$28 = vAr[1]; })();var PL$29 = function(code){ return function(res){ try{code(res);}catch(e){ PL$28.reject(e); }; }; };
var PL$30 = function(e){ PL$28.reject(e); };
PL$29(function(){;
PL$31/*console*/["log"]("doing the sync request");;
PL$28.resolve((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$21/*a*/)); return;;
PL$28.resolve(); return;;
})();
return [PL$28, _TPL$28];
}));
PL$6(function(){;
var PL$8 = new __Promise();
var PL$9 = new __Promise();
var PL$10/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$9.resolve(e); }; }; };
var PL$11 = function(e){ PL$9.resolve(e); };
PL$10/*try catch*/(function(){PL$12/*waitFun*/ = (function(){
var PL$13 = new __Promise();
var PL$15 = function(code){ return function(res){ try{code(res);}catch(e){ PL$13.reject(e); }; }; };
var PL$16 = function(e){ PL$13.reject(e); };
var PL$17/*cb*/;
PL$15(function(){;
PL$17/*cb*/ = new PL$18/*Callback*/();
PL$19/*setTimeout*/(PL$17/*cb*/, 2000);;
PL$17/*cb*/["promise"].then(PL$15(function(PL$20){PL$20;;
PL$13.resolve(); return;;
}), PL$16);
;})();
return PL$13;
});
classSystem._resolveProvisional(PL$3/*type:Cs1*/, classSystem.createClass({className: "Cs1",members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":10,"column":12,"offset":126}, "hashStr": "526adb710b3b5518eafd3ced0386c4bc", "name": "Cs1"}, {"a": 1, "b": 4}));PL$4/*Cs1*/;;
PL$21/*a*/;
PL$22/*gotit*/ = false;
(function(){
if (!promiseland.profileHas("server")){
return;
};
var PL$23/*next*/;
;
/*temp tracked assign*/(function(vAr){
if (_TPL$21/*a*/){ _TPL$21/*a*/(); };
if(vAr){
var v = vAr[0];
PL$21/*a*/ = v;
_TPL$21/*a*/ = vAr[1];
return v;
}else{
PL$21/*a*/ = undefined; _TPL$21/*a*/ = undefined;
return;
}; })(new PL$5/*Cs1-constructor*/())/*end temp assign*/
;;
(function(s, v){ v = s[8](v); s[7] = v; return v; })(PL$21/*a*/, 3);;
PL$22/*gotit*/ = true;;
PL$23/*next*/ = 10;
PL$24/*setInterval*/((function(){
;
(function(s, v){ v = s[8](v); s[7] = v; return v; })(PL$21/*a*/, PL$23/*next*/++);;
;
}), 1000);;
;
})();;
PL$33/*x*/;;
PL$12/*waitFun*/().then(PL$10/*try catch*/(function(PL$34){PL$34;;
var PL$35 = new __Promise();
if(! PL$22/*gotit*/){
PL$31/*console*/["log"]("step1");;
/*temptracked promise*/(function(vAr){
var r = vAr[0].thenReuse(vAr[1], PL$10/*try catch*/(function(PL$36){/*temp tracked assign*/(function(vAr){
if (_TPL$21/*a*/){ _TPL$21/*a*/(); };
if(vAr){
var v = vAr[0];
PL$21/*a*/ = v;
_TPL$21/*a*/ = vAr[1];
return v;
}else{
PL$21/*a*/ = undefined; _TPL$21/*a*/ = undefined;
return;
}; })(PL$36)/*end temp assign*/
;;
PL$31/*console*/["log"]("step2");;
PL$24/*setInterval*/((function(){
;
PL$31/*console*/["log"](PL$21/*a*/[7]);;
;
}), 1000);;
PL$35.resolve();;
}), PL$11);
return r;
})(PL$33/*x*/());/*temptracked promise end*/
;
}else{
PL$35.resolve();}; PL$35.then(function(){;
;
PL$8.resolve();
});}), PL$11);
;})();
PL$9.then(PL$6(function(PL$37/*e*/){PL$31/*console*/["log"]("error:");;
PL$31/*console*/["log"](PL$37/*e*/);;
PL$8.resolve();;
}));
PL$8.then(PL$6(function(){;
PL$1.resolve(); return;;
}), PL$7)})();
return PL$1;
})();
;;
return PL$1});
})();