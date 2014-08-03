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
if (promiseland._hasModule({ hashStr: "1c27915421db6c724a7af79a2c806394" })){ return promiseland._getModule("1c27915421db6c724a7af79a2c806394"); };
var _V13/*console*/;try{_V13/*console*/ = console;}catch(e){};
var _V7/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V5/*failed*/;
var _V6/*cnt*/;
var _V3/*C1*/;
var _V8/*cntSupposed*/;
var _V11/*f1*/;
var _V12/*a*/;
var _T_V12/*a*/;
var _V2/*type:C1*/ = classSystem._createProvisionalClass();
_V3/*C1*/ = _V2/*type:C1*/;
var _V4/*C1-constructor*/ = undefined;classSystem.readyPromise(_V2/*type:C1*/).then(function(parType){_V2/*type:C1*/ = parType;_V4/*C1-constructor*/ = classSystem.getTypeConstructor(_V2/*type:C1*/);});var _V11/*f1*/ = function(_V10/*p1*/){
var _T_V10/*p1*/;
if(_V10/*p1*/){ _T_V10/*p1*/ = _V10/*p1*/[1];
_V10/*p1*/ = _V10/*p1*/[0];}
try{;
_V8/*cntSupposed*/(0);;
if (_T_V10/*p1*/){ _T_V10/*p1*/();};}catch(e){if (_T_V10/*p1*/){ _T_V10/*p1*/();};throw e};;
};
;
_V5/*failed*/ = false;
_V6/*cnt*/ = 0;
classSystem._resolveProvisional(_V2/*type:C1*/, classSystem.createClass({members: [{"name":"destroy","type":_V7/*type:var*/}], "extends": [], "hasFreePart": true, "track": true}, {"destroy": (function(){
;
_V6/*cnt*/++;;
;
})}));_V3/*C1*/;;
_V8/*cntSupposed*/ = (function(_V9/*s*/){
;
if((_V6/*cnt*/ == _V9/*s*/)){
return;;
};
;
_V5/*failed*/ = true;;
;
});
_V8/*cntSupposed*/(0);;
_V11/*f1*/;
;
_V8/*cntSupposed*/(0);;
/*temp tracked assign*/(function(vAr){
if (_T_V12/*a*/){ _T_V12/*a*/(); };
if(vAr){
var v = vAr[0];
_V12/*a*/ = v;
_T_V12/*a*/ = vAr[1];
return v;
}else{
_V12/*a*/ = undefined; _T_V12/*a*/ = undefined;
return;
}; })(new _V4/*C1-constructor*/())/*end temp assign*/
;
_V8/*cntSupposed*/(0);;
_V11/*f1*/((function(v){ if(!v){ return; }; return [v, v[2]()];})(_V12/*a*/));;
_V8/*cntSupposed*/(0);;
/*temp tracked assign*/(function(vAr){
if (_T_V12/*a*/){ _T_V12/*a*/(); };
if(vAr){
var v = vAr[0];
_V12/*a*/ = v;
_T_V12/*a*/ = vAr[1];
return v;
}else{
_V12/*a*/ = undefined; _T_V12/*a*/ = undefined;
return;
}; })(new _V4/*C1-constructor*/())/*end temp assign*/
;;
_V8/*cntSupposed*/(1);;
if(_V5/*failed*/){
_V13/*console*/["log"]("failed");;
return {"success": false};;
};
;
return {"success": true};;
;
})();
;promiseland._registerModule({ hashStr: "1c27915421db6c724a7af79a2c806394", "module": _V1, promising: false });
return _V1;
});
})();