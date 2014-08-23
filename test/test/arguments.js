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
if (promiseland._hasModule({ hashStr: "dc01d7039f5b3fa03ccb1991f4aef666" })){ return promiseland._getModule("dc01d7039f5b3fa03ccb1991f4aef666"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "dc01d7039f5b3fa03ccb1991f4aef666", "module": _V1, promising: true });
var _V11/*Callback*/;try{_V11/*Callback*/ = Callback;}catch(e){};
var _V12/*setTimeout*/;try{_V12/*setTimeout*/ = setTimeout;}catch(e){};
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*p*/;
var _V14/*res*/;
var _V15/*x*/;
_V3(function(){;
_V5/*p*/ = (function(){
var _V6 = new __Promise();
var _V8 = function(code){ return function(res){ try{code(res);}catch(e){ _V6.reject(e); }; }; };
var _V9 = function(e){ _V6.reject(e); };
var _V10/*c*/;
_V8(function(){;
_V10/*c*/ = new _V11/*Callback*/();
_V12/*setTimeout*/(_V10/*c*/, 100);;
_V10/*c*/["promise"].then(_V8(function(_V13){_V13;;
_V6.resolve(); return;;
_V6.resolve(); return;;
}), _V9);
;})();
return _V6;
});
_V14/*res*/ = {};
_V15/*x*/ = (function(_V16/*para*/, _V17/*parb*/){
var _V18 = new __Promise();
var _V19 = function(code){ return function(res){ try{code(res);}catch(e){ _V18.reject(e); }; }; };
var _V20 = function(e){ _V18.reject(e); };
var _V22/*arguments*/ = arguments;
_V19(function(){;
_V14/*res*/["a"] = _V16/*para*/;;
_V5/*p*/().then(_V19(function(_V21){_V21;;
_V14/*res*/["b"] = _V17/*parb*/;;
_V14/*res*/["c"] = _V22/*arguments*/[2];;
_V18.resolve(); return;;
}), _V20);
;})();
return _V18;
});
_V15/*x*/(1, 1, 2).then(_V3(function(_V23){_V23;;
_V1.resolve(((_V14/*res*/["a"] + _V14/*res*/["b"]) + _V14/*res*/["c"])); return;;
_V1.resolve(); return;;
}), _V4);
;})();
return _V1;
})();
;;
return _V1});
})();