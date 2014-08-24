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
if (promiseland._hasModule({ hashStr: "a4c9bedca072eb7f765e18867bf85f32" })){ return promiseland._getModule("a4c9bedca072eb7f765e18867bf85f32"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "a4c9bedca072eb7f765e18867bf85f32", "module": _V1, promising: true });
var _V2 = (function(){
"use strict";
var _V6 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V7 = function(e){ _V1.reject(e); };
var _V8/*destroyed*/;
var _V9/*isClient*/;
var _V4/*C1*/;
var _V10/*local*/;
var _T_V10/*local*/;
var _V11/*init*/;
var _V18/*extraFun*/;
var _V23/*x*/;
var _V28/*getLocalB*/;
var _V31/*temp*/;
var _T_V31/*temp*/;
var _V3/*type:C1*/ = classSystem._createProvisionalClass();
_V4/*C1*/ = _V3/*type:C1*/;
var _V5/*C1-constructor*/ = undefined;classSystem.readyPromise(_V3/*type:C1*/).then(function(parType){_V3/*type:C1*/ = parType;_V5/*C1-constructor*/ = classSystem.getTypeConstructor(_V3/*type:C1*/);});var _V18/*extraFun*/ = function(_V17/*par1*/){
var _T_V17/*par1*/;
if(_V17/*par1*/){ _T_V17/*par1*/ = _V17/*par1*/[1];
_V17/*par1*/ = _V17/*par1*/[0];}
try{;
/*tracked assign*/(function(v){
if (_T_V10/*local*/){ _T_V10/*local*/(); };
_V10/*local*/ = v;
if (v){
_T_V10/*local*/ = v[2]();
}else{
_T_V10/*local*/ = undefined;
};
return v;
})(_V17/*par1*/)/*end assign*/
;;
if (_T_V17/*par1*/){ _T_V17/*par1*/();};}catch(e){if (_T_V17/*par1*/){ _T_V17/*par1*/();};throw e};;
};
var _V23/*x*/ = (function(f){
promiseland.registerRemote("server", "a4c9bedca072eb7f765e18867bf85f32", "_V22", f, (classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [_V3/*type:C1*/]})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("a4c9bedca072eb7f765e18867bf85f32", "_V22", arguments);
}
};
})(function(_V17/*par1*/){
var _V19 = new __Promise();
var _V20 = function(code){ return function(res){ try{code(res);}catch(e){ if (_T_V17/*par1*/){ _T_V17/*par1*/();};_V19.reject(e); }; }; };
var _V21 = function(e){ if (_T_V17/*par1*/){ _T_V17/*par1*/();};_V19.reject(e); };
var _T_V17/*par1*/;
if(_V17/*par1*/){ _T_V17/*par1*/ = _V17/*par1*/[1];
_V17/*par1*/ = _V17/*par1*/[0];}
_V20(function(){;
/*tracked assign*/(function(v){
if (_T_V10/*local*/){ _T_V10/*local*/(); };
_V10/*local*/ = v;
if (v){
_T_V10/*local*/ = v[2]();
}else{
_T_V10/*local*/ = undefined;
};
return v;
})(_V17/*par1*/)/*end assign*/
;;
_V19.resolve((function(ret){ if (_T_V17/*par1*/){ _T_V17/*par1*/();};return ret; })(_V10/*local*/[9])); return;;
if (_T_V17/*par1*/){ _T_V17/*par1*/();};_V19.resolve(); return;;
})();
return _V19;
});
var _V28/*getLocalB*/ = (function(f){
promiseland.registerRemote("server", "a4c9bedca072eb7f765e18867bf85f32", "_V27", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("a4c9bedca072eb7f765e18867bf85f32", "_V27", arguments);
}
};
})(function(){
var _V24 = new __Promise();
var _V25 = function(code){ return function(res){ try{code(res);}catch(e){ _V24.reject(e); }; }; };
var _V26 = function(e){ _V24.reject(e); };
_V25(function(){;
_V24.resolve(_V10/*local*/[9]); return;;
_V24.resolve(); return;;
})();
return _V24;
});
_V6(function(){;
_V8/*destroyed*/ = false;
_V9/*isClient*/ = false;
(function(){
if (!promiseland.profileHas("client")){
return;
};
;
_V9/*isClient*/ = true;;
;
})();;
classSystem._resolveProvisional(_V3/*type:C1*/, classSystem.createClass({members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":10,"column":12,"offset":110}, "hashStr": "a4c9bedca072eb7f765e18867bf85f32", "name": "C1"}, {"a": 1, "b": 2}));_V4/*C1*/;;
_V10/*local*/;
_V11/*init*/ = ((function(f){
promiseland.registerRemote("server", "a4c9bedca072eb7f765e18867bf85f32", "_V16", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("a4c9bedca072eb7f765e18867bf85f32", "_V16", arguments);
}
};
})(function(){
var _V12 = new __Promise();
var _V14 = function(code){ return function(res){ try{code(res);}catch(e){ _V12.reject(e); }; }; };
var _V15 = function(e){ _V12.reject(e); };
_V14(function(){;
/*temp tracked assign*/(function(vAr){
if (_T_V10/*local*/){ _T_V10/*local*/(); };
if(vAr){
var v = vAr[0];
_V10/*local*/ = v;
_T_V10/*local*/ = vAr[1];
return v;
}else{
_V10/*local*/ = undefined; _T_V10/*local*/ = undefined;
return;
}; })(new _V5/*C1-constructor*/())/*end temp assign*/
;;
_V12.resolve(); return;;
})();
return _V12;
}));
_V18/*extraFun*/;
;
_V23/*x*/;
;
_V28/*getLocalB*/;
;
if(! _V9/*isClient*/){
_V1.resolve({"success": true}); return;;
};
;
_V11/*init*/().then(_V6(function(_V29){_V29;;
_V28/*getLocalB*/().then(_V6(function(_V30){if((_V30 !== 2)){
_V1.resolve({"success": false}); return;;
};
;
/*temp tracked assign*/(function(vAr){
if (_T_V31/*temp*/){ _T_V31/*temp*/(); };
if(vAr){
var v = vAr[0];
_V31/*temp*/ = v;
_T_V31/*temp*/ = vAr[1];
return v;
}else{
_V31/*temp*/ = undefined; _T_V31/*temp*/ = undefined;
return;
}; })(new _V5/*C1-constructor*/())/*end temp assign*/
;
if(_V9/*isClient*/){
(function(s, v){ v = s[10](v); s[9] = v; return v; })(_V31/*temp*/, 4);;
};
;
_V23/*x*/((function(v){ if(!v){ return; }; return [v, v[2]()];})(_V31/*temp*/)).then(_V6(function(_V32){_V32;;
_V28/*getLocalB*/().then(_V6(function(_V33){if((_V33 !== 4)){
_V1.resolve({"success": false}); return;;
};
;
if(_V9/*isClient*/){
(function(s, v){ v = s[10](v); s[9] = v; return v; })(_V31/*temp*/, 5);;
};
;
_V28/*getLocalB*/().then(_V6(function(_V34){if((_V34 !== 5)){
_V1.resolve({"success": false}); return;;
};
;
_V1.resolve({"success": true}); return;;
_V1.resolve(); return;;
}), _V7);
;}), _V7);
;}), _V7);
;}), _V7);
;}), _V7);
;})();
return _V1;
})();
;;
return _V1});
})();