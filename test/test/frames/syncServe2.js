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
if (promiseland._hasModule({ hashStr: "12ec951a9167283bf1517db6d7d26aa4" })){ return promiseland._getModule("12ec951a9167283bf1517db6d7d26aa4"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "12ec951a9167283bf1517db6d7d26aa4", "module": _V1, promising: true });
var _V2 = (function(){
"use strict";
var _V6 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V7 = function(e){ _V1.reject(e); };
var _V8/*destroyed*/;
var _V9/*isClient*/;
var _V4/*C1*/;
var _V19/*x*/;
var _V25/*check*/;
var _V26/*tempres*/;
var _V27/*serverDestroyed*/;
var _V28/*fx*/;
var _V3/*type:C1*/ = classSystem._createProvisionalClass();
_V4/*C1*/ = _V3/*type:C1*/;
var _V5/*C1-constructor*/ = undefined;classSystem.readyPromise(_V3/*type:C1*/).then(function(parType){_V3/*type:C1*/ = parType;_V5/*C1-constructor*/ = classSystem.getTypeConstructor(_V3/*type:C1*/);});var _V10/*type:C1**/ = classSystem._createPromiseOfClass(_V3/*type:C1*/);
var _V11/*C1**/ = _V10/*type:C1**/;
var _V12/*C1*-constructor*/ = undefined;classSystem.readyPromise(_V10/*type:C1**/).then(function(parType){_V10/*type:C1**/ = parType;_V12/*C1*-constructor*/ = classSystem.getTypeConstructor(_V10/*type:C1**/);});var _V19/*x*/ = (function(f){
promiseland.registerRemote("server", "12ec951a9167283bf1517db6d7d26aa4", "_V18", f, (classSystem.createFunctionType({ "return": _V10/*type:C1**/, arguments: [classSystem.getBuiltinType("var")]})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("12ec951a9167283bf1517db6d7d26aa4", "_V18", arguments);
}
};
})((function(t){return t;})(function(_V13/*par1*/){
var _V14;
var _T_V14;
(function(){ var vAr = new _V12/*C1*-constructor*/(); _V14 = vAr[0]; _T_V14 = vAr[1]; })();var _V15 = function(code){ return function(res){ try{code(res);}catch(e){ if (_T_V17/*temp*/){ _T_V17/*temp*/();};_V14.reject(e); }; }; };
var _V16 = function(e){ if (_T_V17/*temp*/){ _T_V17/*temp*/();};_V14.reject(e); };
var _V17/*temp*/;
var _T_V17/*temp*/;
_V15(function(){;
_V8/*destroyed*/ = false;;
/*temp tracked assign*/(function(vAr){
if (_T_V17/*temp*/){ _T_V17/*temp*/(); };
if(vAr){
var v = vAr[0];
_V17/*temp*/ = v;
_T_V17/*temp*/ = vAr[1];
return v;
}else{
_V17/*temp*/ = undefined; _T_V17/*temp*/ = undefined;
return;
}; })(new _V5/*C1-constructor*/())/*end temp assign*/
;
(function(s, v){ v = s[8](v); s[7] = v; return v; })(_V17/*temp*/, 2);;
_V14.resolve((function(ret){ if (_T_V17/*temp*/){ _T_V17/*temp*/();};return ret; })((function(v){ if(!v){ return; }; return [v, v[2]()];})(_V17/*temp*/))); return;;
if (_T_V17/*temp*/){ _T_V17/*temp*/();};_V14.resolve(); return;;
})();
return [_V14, _T_V14];
}));
var _V25/*check*/ = (function(f){
promiseland.registerRemote("server", "12ec951a9167283bf1517db6d7d26aa4", "_V24", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("12ec951a9167283bf1517db6d7d26aa4", "_V24", arguments);
}
};
})(function(){
var _V20 = new __Promise();
var _V22 = function(code){ return function(res){ try{code(res);}catch(e){ _V20.reject(e); }; }; };
var _V23 = function(e){ _V20.reject(e); };
_V22(function(){;
_V20.resolve(_V8/*destroyed*/); return;;
_V20.resolve(); return;;
})();
return _V20;
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
classSystem._resolveProvisional(_V3/*type:C1*/, classSystem.createClass({members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"destroy","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"serve":1,"line":9,"column":12,"offset":109}, "hashStr": "12ec951a9167283bf1517db6d7d26aa4", "name": "C1"}, {"a": 1, "destroy": (function(){
;
_V8/*destroyed*/ = true;;
;
})}));_V4/*C1*/;;
_V19/*x*/;
;
_V25/*check*/;
;
_V26/*tempres*/;
_V27/*serverDestroyed*/;
_V28/*fx*/ = (function(){
var _V29 = new __Promise();
var _V30 = function(code){ return function(res){ try{code(res);}catch(e){ if (_T_V32/*t*/){ _T_V32/*t*/();};_V29.reject(e); }; }; };
var _V31 = function(e){ if (_T_V32/*t*/){ _T_V32/*t*/();};_V29.reject(e); };
var _V32/*t*/;
var _T_V32/*t*/;
_V30(function(){;
/*temptracked promise*/(function(vAr){
var r = vAr[0].thenReuse(vAr[1], _V30(function(_V33){/*temp tracked assign*/(function(vAr){
if (_T_V32/*t*/){ _T_V32/*t*/(); };
if(vAr){
var v = vAr[0];
_V32/*t*/ = v;
_T_V32/*t*/ = vAr[1];
return v;
}else{
_V32/*t*/ = undefined; _T_V32/*t*/ = undefined;
return;
}; })(_V33)/*end temp assign*/
;
_V26/*tempres*/ = _V32/*t*/[7];;
if (_T_V32/*t*/){ _T_V32/*t*/();};_V29.resolve(); return;;
}), _V31);
return r;
})(_V19/*x*/());/*temptracked promise end*/
;})();
return _V29;
});
var _V34 = new __Promise();
if(_V9/*isClient*/){
_V28/*fx*/().then(_V6(function(_V35){_V35;;
_V25/*check*/().then(_V6(function(_V36){_V27/*serverDestroyed*/ = _V36;;
_V34.resolve();;
}), _V7);
;}), _V7);
;
}else{
_V1.resolve({"success": true}); return;;
_V34.resolve();;
}; _V34.then(function(){;
;
if((_V26/*tempres*/ != 2)){
_V1.resolve({"success": false}); return;;
};
;
if(! _V27/*serverDestroyed*/){
_V1.resolve({"success": false}); return;;
};
;
_V1.resolve({"success": true}); return;;
_V1.resolve(); return;;
});})();
return _V1;
})();
;;
return _V1});
})();