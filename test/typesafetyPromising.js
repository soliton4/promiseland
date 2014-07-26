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
var _V13/*Callback*/;try{_V13/*Callback*/ = Callback;}catch(e){};
var _V14/*setTimeout*/;try{_V14/*setTimeout*/ = setTimeout;}catch(e){};
var _V8/*type:var*/ = __classSystem.getBuiltinType("var");
var _V2 = (function(){
"use strict";
var _V6 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V7 = function(e){ _V1.reject(e); };
var _V4/*C1*/;
var _V16/*f1*/;
var _V17/*a*/;
var _V16/*f1*/ = (function(t){return t;})(function(){
var _V9 = new __Promise();
var _V10 = function(code){ return function(res){ try{code(res);}catch(e){ _V9.reject(e); }; }; };
var _V11 = function(e){ _V9.reject(e); };
var _V12/*cb*/;
_V10(function(){;
_V12/*cb*/ = new _V13/*Callback*/();
_V14/*setTimeout*/(_V12/*cb*/, 500);;
_V12/*cb*/["promise"].then(_V10(function(_V15){_V15;;
_V9.resolve(new _V5/*C1-constructor*/()); return;;
_V9.resolve(); return;;
}), _V11);})();
return _V9;
});
var _V3/*type:C1*/ = classSystem._createProvisionalClass();
_V4/*C1*/ = _V3/*type:C1*/;
var _V5/*C1-constructor*/ = undefined;classSystem.readyPromise(_V3/*type:C1*/).then(function(parType){_V3/*type:C1*/ = parType;_V5/*C1-constructor*/ = classSystem.getTypeConstructor(_V3/*type:C1*/);});_V6(function(){;
classSystem._resolveProvisional(_V3/*type:C1*/, classSystem.createClass({members: [{"name":"a","type":_V8/*type:var*/},{"name":"b","type":_V8/*type:var*/}], "extends": [], "hasFreePart": true}, {"a": 1, "b": 2}));_V4/*C1*/;;
_V16/*f1*/;
_V17/*a*/;
_V16/*f1*/().then(_V6(function(_V18){_V17/*a*/ = _V18;;
if((_V17/*a*/[4] == 2)){
_V1.resolve({"success": true}); return;;
};
;
_V1.resolve({"success": false}); return;;
_V1.resolve(); return;;
}), _V7);})();
return _V1;
})();
;
return _V1});
})();