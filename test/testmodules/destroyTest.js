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
if (promiseland._hasModule({ hashStr: "611a5a0761f38d97f4674b150f8771da" })){ return promiseland._getModule("611a5a0761f38d97f4674b150f8771da"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "611a5a0761f38d97f4674b150f8771da", "module": _V1, promising: true });
var _V18/*Callback*/;try{_V18/*Callback*/ = Callback;}catch(e){};
var _V19/*setTimeout*/;try{_V19/*setTimeout*/ = setTimeout;}catch(e){};
var _V21/*console*/;try{_V21/*console*/ = console;}catch(e){};
var _V2 = (function(){
"use strict";
var _V6 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V7 = function(e){ _V1.reject(e); };
var _V12/*waitFun*/;
var _V4/*Cs1*/;
var _V30/*x*/;
var _V3/*type:Cs1*/ = classSystem._createProvisionalClass();
_V4/*Cs1*/ = _V3/*type:Cs1*/;
var _V5/*Cs1-constructor*/ = undefined;classSystem.readyPromise(_V3/*type:Cs1*/).then(function(parType){_V3/*type:Cs1*/ = parType;_V5/*Cs1-constructor*/ = classSystem.getTypeConstructor(_V3/*type:Cs1*/);});var _V23/*type:Cs1**/ = classSystem._createPromiseOfClass(_V3/*type:Cs1*/);
var _V24/*Cs1**/ = _V23/*type:Cs1**/;
var _V25/*Cs1*-constructor*/ = undefined;classSystem.readyPromise(_V23/*type:Cs1**/).then(function(parType){_V23/*type:Cs1**/ = parType;_V25/*Cs1*-constructor*/ = classSystem.getTypeConstructor(_V23/*type:Cs1**/);});var _V30/*x*/ = (function(f){
promiseland.registerRemote("server", "611a5a0761f38d97f4674b150f8771da", "_V29", f, (classSystem.createFunctionType({ "return": _V23/*type:Cs1**/, arguments: []})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("611a5a0761f38d97f4674b150f8771da", "_V29", arguments);
}
};
})((function(t){return t;})(function(){
var _V26;
var _T_V26;
(function(){ var vAr = new _V25/*Cs1*-constructor*/(); _V26 = vAr[0]; _T_V26 = vAr[1]; })();var _V27 = function(code){ return function(res){ try{code(res);}catch(e){ if (_T_V22/*a*/){ _T_V22/*a*/();};_V26.reject(e); }; }; };
var _V28 = function(e){ if (_T_V22/*a*/){ _T_V22/*a*/();};_V26.reject(e); };
var _V22/*a*/;
var _T_V22/*a*/;
_V27(function(){;
_V21/*console*/["log"]("doing the sync request");;
/*temp tracked assign*/(function(vAr){
if (_T_V22/*a*/){ _T_V22/*a*/(); };
if(vAr){
var v = vAr[0];
_V22/*a*/ = v;
_T_V22/*a*/ = vAr[1];
return v;
}else{
_V22/*a*/ = undefined; _T_V22/*a*/ = undefined;
return;
}; })(new _V5/*Cs1-constructor*/())/*end temp assign*/
;
_V26.resolve((function(ret){ if (_T_V22/*a*/){ _T_V22/*a*/();};return ret; })((function(v){ if(!v){ return; }; return [v, v[2]()];})(_V22/*a*/))); return;;
if (_T_V22/*a*/){ _T_V22/*a*/();};_V26.resolve(); return;;
})();
return [_V26, _T_V26];
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
classSystem._resolveProvisional(_V3/*type:Cs1*/, classSystem.createClass({members: [{"name":"constructor","type":classSystem.getBuiltinType("var")},{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")},{"name":"destroy","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"serve":1,"line":10,"column":12,"offset":126}, "hashStr": "611a5a0761f38d97f4674b150f8771da", "name": "Cs1"}, {"constructor": (function(){
;
_V21/*console*/["log"]("constructed");;
;
}), "a": 1, "b": 4, "destroy": (function(){
;
_V21/*console*/["log"]("destroyed");;
;
})}));_V4/*Cs1*/;;
(function(){
if (!promiseland.profileHas("server")){
return;
};
var _V22/*a*/;
var _T_V22/*a*/;
try{;
/*temp tracked assign*/(function(vAr){
if (_T_V22/*a*/){ _T_V22/*a*/(); };
if(vAr){
var v = vAr[0];
_V22/*a*/ = v;
_T_V22/*a*/ = vAr[1];
return v;
}else{
_V22/*a*/ = undefined; _T_V22/*a*/ = undefined;
return;
}; })(new _V5/*Cs1-constructor*/())/*end temp assign*/
;
(function(s, v){ v = s[10](v); s[9] = v; return v; })(_V22/*a*/, 3);;
if (_T_V22/*a*/){ _T_V22/*a*/();};}catch(e){if (_T_V22/*a*/){ _T_V22/*a*/();};throw e};;
})();;
_V30/*x*/;;
_V12/*waitFun*/().then(_V10/*try catch*/(function(_V31){_V31;;
(function(){
var _V32 = new __Promise();
var _V33 = function(code){ return function(res){ try{code(res);}catch(e){ if (_T_V35/*b*/){ _T_V35/*b*/();};_V32.reject(e); }; }; };
var _V34 = function(e){ if (_T_V35/*b*/){ _T_V35/*b*/();};_V32.reject(e); };
var _V35/*b*/;
var _T_V35/*b*/;
_V33(function(){;
/*temptracked promise*/(function(vAr){
var r = vAr[0].thenReuse(vAr[1], _V33(function(_V36){/*temp tracked assign*/(function(vAr){
if (_T_V35/*b*/){ _T_V35/*b*/(); };
if(vAr){
var v = vAr[0];
_V35/*b*/ = v;
_T_V35/*b*/ = vAr[1];
return v;
}else{
_V35/*b*/ = undefined; _T_V35/*b*/ = undefined;
return;
}; })(_V36)/*end temp assign*/
;
if (_T_V35/*b*/){ _T_V35/*b*/();};_V32.resolve(); return;;
}), _V34);
return r;
})(_V30/*x*/());/*temptracked promise end*/
;})();
return _V32;
})();;
_V8.resolve();
}), _V11);
;})();
_V9.then(_V6(function(_V37/*e*/){_V21/*console*/["log"]("error:");;
_V21/*console*/["log"](_V37/*e*/);;
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