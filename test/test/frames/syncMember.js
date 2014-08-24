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
if (promiseland._hasModule({ hashStr: "3464f0b2cb932a8dc0808a9f1dae1715" })){ return promiseland._getModule("3464f0b2cb932a8dc0808a9f1dae1715"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "3464f0b2cb932a8dc0808a9f1dae1715", "module": _V1, promising: true });
var _V2 = (function(){
"use strict";
var _V9 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V10 = function(e){ _V1.reject(e); };
var _V11/*isClient*/;
var _V4/*C1*/;
var _V7/*C2*/;
var _V12/*local*/;
var _T_V12/*local*/;
var _V13/*doInit*/;
var _V14/*init*/;
var _V25/*x*/;
var _V30/*getLocalTB*/;
var _V33/*tempRes*/;
var _V3/*type:C1*/ = classSystem._createProvisionalClass();
_V4/*C1*/ = _V3/*type:C1*/;
var _V5/*C1-constructor*/ = undefined;classSystem.readyPromise(_V3/*type:C1*/).then(function(parType){_V3/*type:C1*/ = parType;_V5/*C1-constructor*/ = classSystem.getTypeConstructor(_V3/*type:C1*/);});var _V6/*type:C2*/ = classSystem._createProvisionalClass();
_V7/*C2*/ = _V6/*type:C2*/;
var _V8/*C2-constructor*/ = undefined;classSystem.readyPromise(_V6/*type:C2*/).then(function(parType){_V6/*type:C2*/ = parType;_V8/*C2-constructor*/ = classSystem.getTypeConstructor(_V6/*type:C2*/);});var _V13/*doInit*/ = function(){
;
/*temp tracked assign*/(function(vAr){
if (_T_V12/*local*/){ _T_V12/*local*/(); };
if(vAr){
var v = vAr[0];
_V12/*local*/ = v;
_T_V12/*local*/ = vAr[1];
return v;
}else{
_V12/*local*/ = undefined; _T_V12/*local*/ = undefined;
return;
}; })(new _V8/*C2-constructor*/())/*end temp assign*/
;;
(function(s, vAr){ vAr = s[12](vAr); var v = vAr[0]; s[11] = v; if(s[13]){ s[13](); }; s[13] = v[3](s[1]); vAr[1](); return v; })(_V12/*local*/, new _V5/*C1-constructor*/());;
;
};
var _V25/*x*/ = (function(f){
promiseland.registerRemote("server", "3464f0b2cb932a8dc0808a9f1dae1715", "_V24", f, (classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [_V6/*type:C2*/]})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("3464f0b2cb932a8dc0808a9f1dae1715", "_V24", arguments);
}
};
})(function(_V20/*par1*/){
var _V21 = new __Promise();
var _V22 = function(code){ return function(res){ try{code(res);}catch(e){ if (_T_V20/*par1*/){ _T_V20/*par1*/();};_V21.reject(e); }; }; };
var _V23 = function(e){ if (_T_V20/*par1*/){ _T_V20/*par1*/();};_V21.reject(e); };
var _T_V20/*par1*/;
if(_V20/*par1*/){ _T_V20/*par1*/ = _V20/*par1*/[1];
_V20/*par1*/ = _V20/*par1*/[0];}
_V22(function(){;
/*tracked assign*/(function(v){
if (_T_V12/*local*/){ _T_V12/*local*/(); };
_V12/*local*/ = v;
if (v){
_T_V12/*local*/ = v[2]();
}else{
_T_V12/*local*/ = undefined;
};
return v;
})(_V20/*par1*/)/*end assign*/
;;
if (_T_V20/*par1*/){ _T_V20/*par1*/();};_V21.resolve(); return;;
})();
return _V21;
});
var _V30/*getLocalTB*/ = (function(f){
promiseland.registerRemote("server", "3464f0b2cb932a8dc0808a9f1dae1715", "_V29", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("3464f0b2cb932a8dc0808a9f1dae1715", "_V29", arguments);
}
};
})(function(){
var _V26 = new __Promise();
var _V27 = function(code){ return function(res){ try{code(res);}catch(e){ _V26.reject(e); }; }; };
var _V28 = function(e){ _V26.reject(e); };
_V27(function(){;
_V26.resolve(_V12/*local*/[11][9]); return;;
_V26.resolve(); return;;
})();
return _V26;
});
_V9(function(){;
_V11/*isClient*/ = false;
(function(){
if (!promiseland.profileHas("client")){
return;
};
;
_V11/*isClient*/ = true;;
;
})();;
classSystem._resolveProvisional(_V3/*type:C1*/, classSystem.createClass({members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":9,"column":12,"offset":87}, "hashStr": "3464f0b2cb932a8dc0808a9f1dae1715", "name": "C1"}, {"a": 1, "b": 2}));_V4/*C1*/;;
classSystem._resolveProvisional(_V6/*type:C2*/, classSystem.createClass({members: [{"name":"c","type":classSystem.getBuiltinType("var")},{"name":"d","type":classSystem.getBuiltinType("var")},{"name":"t1","type":_V3/*type:C1*/}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":14,"column":12,"offset":129}, "hashStr": "3464f0b2cb932a8dc0808a9f1dae1715", "name": "C2"}, {"c": 3, "d": 4, "t1": undefined}));_V7/*C2*/;;
_V12/*local*/;
_V13/*doInit*/;
;
_V14/*init*/ = ((function(f){
promiseland.registerRemote("server", "3464f0b2cb932a8dc0808a9f1dae1715", "_V19", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("3464f0b2cb932a8dc0808a9f1dae1715", "_V19", arguments);
}
};
})(function(){
var _V15 = new __Promise();
var _V17 = function(code){ return function(res){ try{code(res);}catch(e){ _V15.reject(e); }; }; };
var _V18 = function(e){ _V15.reject(e); };
_V17(function(){;
_V13/*doInit*/();;
_V15.resolve(); return;;
})();
return _V15;
}));
_V25/*x*/;
;
_V30/*getLocalTB*/;
;
if(! _V11/*isClient*/){
_V1.resolve({"success": true}); return;;
};
;
_V14/*init*/().then(_V9(function(_V31){_V31;;
_V13/*doInit*/();;
_V30/*getLocalTB*/().then(_V9(function(_V32){if((_V32 !== 2)){
_V1.resolve({"success": false}); return;;
};
;
(function(s, v){ v = s[10](v); s[9] = v; return v; })(_V12/*local*/[11], 6);;
_V25/*x*/((function(v){ if(!v){ return; }; return [v, v[2]()];})(_V12/*local*/)).then(_V9(function(_V34){_V33/*tempRes*/ = _V34;
_V30/*getLocalTB*/().then(_V9(function(_V35){if((_V35 !== 6)){
_V1.resolve({"success": false}); return;;
};
;
(function(s, v){ v = s[10](v); s[9] = v; return v; })(_V12/*local*/[11], 5);;
_V30/*getLocalTB*/().then(_V9(function(_V36){if((_V36 !== 5)){
_V1.resolve({"success": false}); return;;
};
;
_V1.resolve({"success": true}); return;;
_V1.resolve(); return;;
}), _V10);
;}), _V10);
;}), _V10);
;}), _V10);
;}), _V10);
;})();
return _V1;
})();
;;
return _V1});
})();