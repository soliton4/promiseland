(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback){
      var i = 0;
      var l = modulesAr.length;
      var args = [];
      for (i; i < l; ++i){
        args.push(require(modulesAr[i]));
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
  var __modulePromise = new __Promise();
  var classSystem = promiseland.classSystem; 
  var __requireFun = function(parModule){
    var returnPromise = new __Promise();
    try{__require([parModule], function(m){
    if (promiseland.isPromiseLandPromisingModule(m)){
      m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
    }else{
      returnPromise.resolve(m);
    };
    });
    }catch(e){returnPromise.reject(e);};
  return returnPromise.promise;};
  var __classSystem = promiseland.classSystem;
  
  
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "9d4c45c6545311d7a14ef435c0a3d1c0" })){ return promiseland._getModule("9d4c45c6545311d7a14ef435c0a3d1c0"); };
var _V10/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V8/*failed*/;
var _V9/*cnt*/;
var _V3/*C1*/;
var _V6/*C2*/;
var _V11/*cntSupposed*/;
var _V13/*c2*/;
var _T_V13/*c2*/;
var _V14/*fun*/;
var _V2/*type:C1*/ = classSystem._createProvisionalClass();
_V3/*C1*/ = _V2/*type:C1*/;
var _V4/*C1-constructor*/ = undefined;classSystem.readyPromise(_V2/*type:C1*/).then(function(parType){_V2/*type:C1*/ = parType;_V4/*C1-constructor*/ = classSystem.getTypeConstructor(_V2/*type:C1*/);});var _V5/*type:C2*/ = classSystem._createProvisionalClass();
_V6/*C2*/ = _V5/*type:C2*/;
var _V7/*C2-constructor*/ = undefined;classSystem.readyPromise(_V5/*type:C2*/).then(function(parType){_V5/*type:C2*/ = parType;_V7/*C2-constructor*/ = classSystem.getTypeConstructor(_V5/*type:C2*/);});;
_V8/*failed*/ = false;
_V9/*cnt*/ = 0;
classSystem._resolveProvisional(_V2/*type:C1*/, classSystem.createClass({members: [{"name":"destroy","type":_V10/*type:var*/}], "extends": [], "hasFreePart": true, "track": true}, {"destroy": (function(){
;
_V9/*cnt*/++;;
;
})}));_V3/*C1*/;;
classSystem._resolveProvisional(_V5/*type:C2*/, classSystem.createClass({members: [{"name":"m1","type":_V2/*type:C1*/}], "extends": [], "hasFreePart": true, "track": true}, {"m1": undefined}));_V6/*C2*/;;
_V11/*cntSupposed*/ = (function(_V12/*s*/){
;
if((_V9/*cnt*/ == _V12/*s*/)){
return;;
};
;
_V8/*failed*/ = true;;
;
});
_V11/*cntSupposed*/(0);;
/*temp tracked assign*/(function(vAr){
if (_T_V13/*c2*/){ _T_V13/*c2*/(); };
if(vAr){
var v = vAr[0];
_V13/*c2*/ = v;
_T_V13/*c2*/ = vAr[1];
return v;
}else{
_V13/*c2*/ = undefined; _T_V13/*c2*/ = undefined;
return;
}; })(new _V7/*C2-constructor*/())/*end temp assign*/
;
_V11/*cntSupposed*/(0);;
_V14/*fun*/ = (function(){
var _V15/*v1*/;
var _T_V15/*v1*/;
var _V16/*v2*/;
var _T_V16/*v2*/;
var _V17/*v3*/;
var _T_V17/*v3*/;
try{;
_V15/*v1*/;
_V16/*v2*/;
_V17/*v3*/;
_V11/*cntSupposed*/(0);;
(function(v){ v[1](); return v[0]; })(new _V4/*C1-constructor*/());;
_V11/*cntSupposed*/(1);;
/*temp tracked assign*/(function(vAr){
if (_T_V15/*v1*/){ _T_V15/*v1*/(); };
if(vAr){
var v = vAr[0];
_V15/*v1*/ = v;
_T_V15/*v1*/ = vAr[1];
return v;
}else{
_V15/*v1*/ = undefined; _T_V15/*v1*/ = undefined;
return;
}; })(new _V4/*C1-constructor*/())/*end temp assign*/
;;
_V11/*cntSupposed*/(1);;
/*temp tracked assign*/(function(vAr){
if (_T_V15/*v1*/){ _T_V15/*v1*/(); };
if(vAr){
var v = vAr[0];
_V15/*v1*/ = v;
_T_V15/*v1*/ = vAr[1];
return v;
}else{
_V15/*v1*/ = undefined; _T_V15/*v1*/ = undefined;
return;
}; })(new _V4/*C1-constructor*/())/*end temp assign*/
;;
_V11/*cntSupposed*/(2);;
/*temp tracked assign*/(function(vAr){
if (_T_V16/*v2*/){ _T_V16/*v2*/(); };
if(vAr){
var v = vAr[0];
_V16/*v2*/ = v;
_T_V16/*v2*/ = vAr[1];
return v;
}else{
_V16/*v2*/ = undefined; _T_V16/*v2*/ = undefined;
return;
}; })(new _V4/*C1-constructor*/())/*end temp assign*/
;;
/*temp tracked assign*/(function(vAr){
if (_T_V17/*v3*/){ _T_V17/*v3*/(); };
if(vAr){
var v = vAr[0];
_V17/*v3*/ = v;
_T_V17/*v3*/ = vAr[1];
return v;
}else{
_V17/*v3*/ = undefined; _T_V17/*v3*/ = undefined;
return;
}; })(new _V4/*C1-constructor*/())/*end temp assign*/
;;
(function(s, vAr){ var v = vAr[0]; s[6] = v; if(s[7]){ s[7](); }; s[7] = v[3](s[1]); vAr[1](); return v; })(_V13/*c2*/, new _V4/*C1-constructor*/());;
_V11/*cntSupposed*/(2);;
(function(s, v){ s[6] = v; if(s[7]){ s[7](); }; s[7] = v[3](s[1]); return v; })(_V13/*c2*/, _V17/*v3*/);;
_V11/*cntSupposed*/(3);;
if (_T_V15/*v1*/){ _T_V15/*v1*/();};if (_T_V16/*v2*/){ _T_V16/*v2*/();};if (_T_V17/*v3*/){ _T_V17/*v3*/();};}catch(e){if (_T_V15/*v1*/){ _T_V15/*v1*/();};if (_T_V16/*v2*/){ _T_V16/*v2*/();};if (_T_V17/*v3*/){ _T_V17/*v3*/();};throw e};;
});
_V14/*fun*/();;
_V11/*cntSupposed*/(5);;
if(_V8/*failed*/){
return {"success": false};;
};
;
return {"success": true};;
;
})();
;promiseland._registerModule({ hashStr: "9d4c45c6545311d7a14ef435c0a3d1c0", "module": _V1, promising: false });
return _V1;
});
})();