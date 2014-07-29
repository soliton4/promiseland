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
if (promiseland._hasModule({ hashStr: "86f889f1b341a40e6f299cccd09ab881" })){ return promiseland._getModule("86f889f1b341a40e6f299cccd09ab881"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "86f889f1b341a40e6f299cccd09ab881", "module": _V1, promising: true });
var _V16/*Callback*/;try{_V16/*Callback*/ = Callback;}catch(e){};
var _V17/*setTimeout*/;try{_V17/*setTimeout*/ = setTimeout;}catch(e){};
var _V8/*type:var*/ = __classSystem.getBuiltinType("var");
var _V2 = (function(){
"use strict";
var _V6 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V7 = function(e){ _V1.reject(e); };
var _V4/*C1*/;
var _V19/*f1*/;
var _V20/*a*/;
var _V3/*type:C1*/ = classSystem._createProvisionalClass();
_V4/*C1*/ = _V3/*type:C1*/;
var _V5/*C1-constructor*/ = undefined;classSystem.readyPromise(_V3/*type:C1*/).then(function(parType){_V3/*type:C1*/ = parType;_V5/*C1-constructor*/ = classSystem.getTypeConstructor(_V3/*type:C1*/);});var _V9/*type:C1**/ = classSystem._createPromiseOfClass(_V3/*type:C1*/);
var _V10/*C1**/ = _V9/*type:C1**/;
var _V11/*C1*-constructor*/ = undefined;classSystem.readyPromise(_V9/*type:C1**/).then(function(parType){_V9/*type:C1**/ = parType;_V11/*C1*-constructor*/ = classSystem.getTypeConstructor(_V9/*type:C1**/);});var _V19/*f1*/ = (function(t){return t;})(function(){
var _V12 = new __Promise();
var _V13 = function(code){ return function(res){ try{code(res);}catch(e){ _V12.reject(e); }; }; };
var _V14 = function(e){ _V12.reject(e); };
var _V15/*cb*/;
_V13(function(){;
_V15/*cb*/ = new _V16/*Callback*/();
_V17/*setTimeout*/(_V15/*cb*/, 500);;
_V15/*cb*/["promise"].then(_V13(function(_V18){_V18;;
_V12.resolve(new _V5/*C1-constructor*/()); return;;
_V12.resolve(); return;;
}), _V14);
;})();
return _V12;
});
_V6(function(){;
classSystem._resolveProvisional(_V3/*type:C1*/, classSystem.createClass({members: [{"name":"a","type":_V8/*type:var*/},{"name":"b","type":_V8/*type:var*/}], "extends": [], "hasFreePart": true}, {"a": 1, "b": 2}));_V4/*C1*/;;
_V19/*f1*/;
_V20/*a*/;
_V19/*f1*/().then(_V6(function(_V21){_V20/*a*/ = _V21;;
if((_V20/*a*/[4] == 2)){
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