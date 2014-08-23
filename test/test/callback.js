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
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "3a26e21b5c50a7dfbba0e9c0d8fb68a6" })){ return promiseland._getModule("3a26e21b5c50a7dfbba0e9c0d8fb68a6"); };
var _V9/*Callback*/;try{_V9/*Callback*/ = Callback;}catch(e){};
var _V10/*setTimeout*/;try{_V10/*setTimeout*/ = setTimeout;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*somefun*/;
;
_V2/*somefun*/ = (function(_V3/*par*/){
var _V4 = new __Promise();
var _V6 = function(code){ return function(res){ try{code(res);}catch(e){ _V4.reject(e); }; }; };
var _V7 = function(e){ _V4.reject(e); };
var _V8/*c*/;
var _V11/*x*/;
_V6(function(){;
_V8/*c*/ = new _V9/*Callback*/();
_V10/*setTimeout*/(_V8/*c*/["callback"], 100);;
_V8/*c*/["promise"].then(_V6(function(_V12){_V11/*x*/ = _V12;
_V4.resolve((_V3/*par*/ + 1)); return;;
_V4.resolve(); return;;
}), _V7);
;})();
return _V4;
});
return {"fun": (function(){
var _V13 = new __Promise();
var _V14 = function(code){ return function(res){ try{code(res);}catch(e){ _V13.reject(e); }; }; };
var _V15 = function(e){ _V13.reject(e); };
var _V16/*a*/;
_V14(function(){;
_V16/*a*/ = 1;
_V2/*somefun*/(_V16/*a*/).then(_V14(function(_V17){if((_V17 == 2)){
_V13.resolve(4); return;;
};
;
_V13.resolve(0); return;;
_V13.resolve(); return;;
}), _V15);
;})();
return _V13;
})};;
;
})();
;return _V1;
});
})();