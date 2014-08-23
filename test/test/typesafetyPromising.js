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
if (promiseland._hasModule({ hashStr: "86f889f1b341a40e6f299cccd09ab881" })){ return promiseland._getModule("86f889f1b341a40e6f299cccd09ab881"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "86f889f1b341a40e6f299cccd09ab881", "module": _V1, promising: true });
var _V15/*Callback*/;try{_V15/*Callback*/ = Callback;}catch(e){};
var _V16/*setTimeout*/;try{_V16/*setTimeout*/ = setTimeout;}catch(e){};
var _V2 = (function(){
"use strict";
var _V6 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V7 = function(e){ _V1.reject(e); };
var _V4/*C1*/;
var _V18/*f1*/;
var _V19/*a*/;
var _V3/*type:C1*/ = classSystem._createProvisionalClass();
_V4/*C1*/ = _V3/*type:C1*/;
var _V5/*C1-constructor*/ = undefined;classSystem.readyPromise(_V3/*type:C1*/).then(function(parType){_V3/*type:C1*/ = parType;_V5/*C1-constructor*/ = classSystem.getTypeConstructor(_V3/*type:C1*/);});var _V8/*type:C1**/ = classSystem._createPromiseOfClass(_V3/*type:C1*/);
var _V9/*C1**/ = _V8/*type:C1**/;
var _V10/*C1*-constructor*/ = undefined;classSystem.readyPromise(_V8/*type:C1**/).then(function(parType){_V8/*type:C1**/ = parType;_V10/*C1*-constructor*/ = classSystem.getTypeConstructor(_V8/*type:C1**/);});var _V18/*f1*/ = (function(t){return t;})(function(){
var _V11 = new __Promise();
var _V12 = function(code){ return function(res){ try{code(res);}catch(e){ _V11.reject(e); }; }; };
var _V13 = function(e){ _V11.reject(e); };
var _V14/*cb*/;
_V12(function(){;
_V14/*cb*/ = new _V15/*Callback*/();
_V16/*setTimeout*/(_V14/*cb*/, 500);;
_V14/*cb*/["promise"].then(_V12(function(_V17){_V17;;
_V11.resolve(new _V5/*C1-constructor*/()); return;;
_V11.resolve(); return;;
}), _V13);
;})();
return _V11;
});
_V6(function(){;
classSystem._resolveProvisional(_V3/*type:C1*/, classSystem.createClass({members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true}, {"a": 1, "b": 2}));_V4/*C1*/;;
_V18/*f1*/;
_V19/*a*/;
_V18/*f1*/().then(_V6(function(_V20){_V19/*a*/ = _V20;;
if((_V19/*a*/[4] == 2)){
_V1.resolve({"success": true}); return;;
};
;
_V1.resolve({"success": false}); return;;
_V1.resolve(); return;;
}), _V7);
;})();
return _V1;
})();
;;
return _V1});
})();