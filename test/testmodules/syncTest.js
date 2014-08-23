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
    requireFun = require;
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  
defineFun(["promiseland"], function(promiseland){ var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "526adb710b3b5518eafd3ced0386c4bc" })){ return promiseland._getModule("526adb710b3b5518eafd3ced0386c4bc"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "526adb710b3b5518eafd3ced0386c4bc", "module": _V1, promising: true });
var _V18/*Callback*/;try{_V18/*Callback*/ = Callback;}catch(e){};
var _V19/*setTimeout*/;try{_V19/*setTimeout*/ = setTimeout;}catch(e){};
var _V24/*setInterval*/;try{_V24/*setInterval*/ = setInterval;}catch(e){};
var _V31/*console*/;try{_V31/*console*/ = console;}catch(e){};
var _V2 = (function(){
"use strict";
var _V6 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V7 = function(e){ _V1.reject(e); };
var _V12/*waitFun*/;
var _V4/*Cs1*/;
var _V21/*a*/;
var _T_V21/*a*/;
var _V22/*gotit*/;
var _V33/*x*/;
var _V3/*type:Cs1*/ = classSystem._createProvisionalClass();
_V4/*Cs1*/ = _V3/*type:Cs1*/;
var _V5/*Cs1-constructor*/ = undefined;classSystem.readyPromise(_V3/*type:Cs1*/).then(function(parType){_V3/*type:Cs1*/ = parType;_V5/*Cs1-constructor*/ = classSystem.getTypeConstructor(_V3/*type:Cs1*/);});var _V25/*type:Cs1**/ = classSystem._createPromiseOfClass(_V3/*type:Cs1*/);
var _V26/*Cs1**/ = _V25/*type:Cs1**/;
var _V27/*Cs1*-constructor*/ = undefined;classSystem.readyPromise(_V25/*type:Cs1**/).then(function(parType){_V25/*type:Cs1**/ = parType;_V27/*Cs1*-constructor*/ = classSystem.getTypeConstructor(_V25/*type:Cs1**/);});var _V33/*x*/ = (function(f){
promiseland.registerRemote("server", "526adb710b3b5518eafd3ced0386c4bc", "_V32", f, (classSystem.createFunctionType({ "return": _V25/*type:Cs1**/, arguments: []})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("526adb710b3b5518eafd3ced0386c4bc", "_V32", arguments);
}
};
})((function(t){return t;})(function(){
var _V28;
var _T_V28;
(function(){ var vAr = new _V27/*Cs1*-constructor*/(); _V28 = vAr[0]; _T_V28 = vAr[1]; })();var _V29 = function(code){ return function(res){ try{code(res);}catch(e){ _V28.reject(e); }; }; };
var _V30 = function(e){ _V28.reject(e); };
_V29(function(){;
_V31/*console*/["log"]("doing the sync request");;
_V28.resolve((function(v){ if(!v){ return; }; return [v, v[2]()];})(_V21/*a*/)); return;;
_V28.resolve(); return;;
})();
return [_V28, _T_V28];
}));
_V6(function(){;
var _V8 = new __Promise();
var _V9 = new __Promise();
var _V10/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V9.resolve(e); }; }; };
var _V11 = function(e){ _V9.resolve(e); };
_V10/*try catch*/(function(){_V12/*waitFun*/ = (function(){
var _V13 = new __Promise();
var _V15 = function(code){ return function(res){ try{code(res);}catch(e){ _V13.reject(e); }; }; };
var _V16 = function(e){ _V13.reject(e); };
var _V17/*cb*/;
_V15(function(){;
_V17/*cb*/ = new _V18/*Callback*/();
_V19/*setTimeout*/(_V17/*cb*/, 2000);;
_V17/*cb*/["promise"].then(_V15(function(_V20){_V20;;
_V13.resolve(); return;;
}), _V16);
;})();
return _V13;
});
classSystem._resolveProvisional(_V3/*type:Cs1*/, classSystem.createClass({members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":10,"column":12,"offset":126}, "hashStr": "526adb710b3b5518eafd3ced0386c4bc", "name": "Cs1"}, {"a": 1, "b": 4}));_V4/*Cs1*/;;
_V21/*a*/;
_V22/*gotit*/ = false;
(function(){
if (!promiseland.profileHas("server")){
return;
};
var _V23/*next*/;
;
/*temp tracked assign*/(function(vAr){
if (_T_V21/*a*/){ _T_V21/*a*/(); };
if(vAr){
var v = vAr[0];
_V21/*a*/ = v;
_T_V21/*a*/ = vAr[1];
return v;
}else{
_V21/*a*/ = undefined; _T_V21/*a*/ = undefined;
return;
}; })(new _V5/*Cs1-constructor*/())/*end temp assign*/
;;
(function(s, v){ v = s[8](v); s[7] = v; return v; })(_V21/*a*/, 3);;
_V22/*gotit*/ = true;;
_V23/*next*/ = 10;
_V24/*setInterval*/((function(){
;
(function(s, v){ v = s[8](v); s[7] = v; return v; })(_V21/*a*/, _V23/*next*/++);;
;
}), 1000);;
;
})();;
_V33/*x*/;;
_V12/*waitFun*/().then(_V10/*try catch*/(function(_V34){_V34;;
var _V35 = new __Promise();
if(! _V22/*gotit*/){
_V31/*console*/["log"]("step1");;
/*temptracked promise*/(function(vAr){
var r = vAr[0].thenReuse(vAr[1], _V10/*try catch*/(function(_V36){/*temp tracked assign*/(function(vAr){
if (_T_V21/*a*/){ _T_V21/*a*/(); };
if(vAr){
var v = vAr[0];
_V21/*a*/ = v;
_T_V21/*a*/ = vAr[1];
return v;
}else{
_V21/*a*/ = undefined; _T_V21/*a*/ = undefined;
return;
}; })(_V36)/*end temp assign*/
;;
_V31/*console*/["log"]("step2");;
_V24/*setInterval*/((function(){
;
_V31/*console*/["log"](_V21/*a*/[7]);;
;
}), 1000);;
_V35.resolve();;
}), _V11);
return r;
})(_V33/*x*/());/*temptracked promise end*/
;
}else{
_V35.resolve();}; _V35.then(function(){;
;
_V8.resolve();
});}), _V11);
;})();
_V9.then(_V6(function(_V37/*e*/){_V31/*console*/["log"]("error:");;
_V31/*console*/["log"](_V37/*e*/);;
_V8.resolve();;
}));
_V8.then(_V6(function(){;
_V1.resolve(); return;;
}), _V7)})();
return _V1;
})();
;;
return _V1});
})();