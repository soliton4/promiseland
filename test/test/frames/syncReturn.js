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
if (promiseland._hasModule({ hashStr: "a46d1b70d8e7becaa21a64131b960210" })){ return promiseland._getModule("a46d1b70d8e7becaa21a64131b960210"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "a46d1b70d8e7becaa21a64131b960210", "module": _V1, promising: true });
var _V2 = (function(){
"use strict";
var _V6 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V7 = function(e){ _V1.reject(e); };
var _V4/*C1*/;
var _V8/*a*/;
var _T_V8/*a*/;
var _V9/*serverInit*/;
var _V18/*x*/;
var _V3/*type:C1*/ = classSystem._createProvisionalClass();
_V4/*C1*/ = _V3/*type:C1*/;
var _V5/*C1-constructor*/ = undefined;classSystem.readyPromise(_V3/*type:C1*/).then(function(parType){_V3/*type:C1*/ = parType;_V5/*C1-constructor*/ = classSystem.getTypeConstructor(_V3/*type:C1*/);});var _V10/*type:C1**/ = classSystem._createPromiseOfClass(_V3/*type:C1*/);
var _V11/*C1**/ = _V10/*type:C1**/;
var _V12/*C1*-constructor*/ = undefined;classSystem.readyPromise(_V10/*type:C1**/).then(function(parType){_V10/*type:C1**/ = parType;_V12/*C1*-constructor*/ = classSystem.getTypeConstructor(_V10/*type:C1**/);});var _V18/*x*/ = (function(f){
promiseland.registerRemote("server", "a46d1b70d8e7becaa21a64131b960210", "_V17", f, (classSystem.createFunctionType({ "return": _V10/*type:C1**/, arguments: [classSystem.getBuiltinType("var")]})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("a46d1b70d8e7becaa21a64131b960210", "_V17", arguments);
}
};
})((function(t){return t;})(function(_V13/*par1*/){
var _V14;
var _T_V14;
(function(){ var vAr = new _V12/*C1*-constructor*/(); _V14 = vAr[0]; _T_V14 = vAr[1]; })();var _V15 = function(code){ return function(res){ try{code(res);}catch(e){ _V14.reject(e); }; }; };
var _V16 = function(e){ _V14.reject(e); };
_V15(function(){;
if(! _V9/*serverInit*/){
/*temp tracked assign*/(function(vAr){
if (_T_V8/*a*/){ _T_V8/*a*/(); };
if(vAr){
var v = vAr[0];
_V8/*a*/ = v;
_T_V8/*a*/ = vAr[1];
return v;
}else{
_V8/*a*/ = undefined; _T_V8/*a*/ = undefined;
return;
}; })(new _V5/*C1-constructor*/())/*end temp assign*/
;;
(function(s, v){ v = s[8](v); s[7] = v; return v; })(_V8/*a*/, 2);;
_V9/*serverInit*/ = true;;
};
;
_V14.resolve((function(v){ if(!v){ return; }; return [v, v[2]()];})(_V8/*a*/)); return;;
_V14.resolve(); return;;
})();
return [_V14, _T_V14];
}));
_V6(function(){;
classSystem._resolveProvisional(_V3/*type:C1*/, classSystem.createClass({members: [{"name":"a","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":1,"column":12,"offset":11}, "hashStr": "a46d1b70d8e7becaa21a64131b960210", "name": "C1"}, {"a": 1}));_V4/*C1*/;;
_V8/*a*/;
_V9/*serverInit*/ = false;
_V18/*x*/;
;
/*temptracked promise*/(function(vAr){
var r = vAr[0].thenReuse(vAr[1], _V6(function(_V19){/*temp tracked assign*/(function(vAr){
if (_T_V8/*a*/){ _T_V8/*a*/(); };
if(vAr){
var v = vAr[0];
_V8/*a*/ = v;
_T_V8/*a*/ = vAr[1];
return v;
}else{
_V8/*a*/ = undefined; _T_V8/*a*/ = undefined;
return;
}; })(_V19)/*end temp assign*/
;;
if((_V8/*a*/[7] == 2)){
_V1.resolve({"success": true}); return;;
};
;
_V1.resolve({"success": false}); return;;
_V1.resolve(); return;;
}), _V7);
return r;
})(_V18/*x*/());/*temptracked promise end*/
;})();
return _V1;
})();
;;
return _V1});
})();