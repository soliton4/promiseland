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
if (promiseland._hasModule({ hashStr: "5a8727f5d27e395d615f6beceb415ee1" })){ return promiseland._getModule("5a8727f5d27e395d615f6beceb415ee1"); };
var _V1 = (function(){
"use strict";
var _V2/*somefun*/;
;
_V2/*somefun*/ = (function(_V3/*par*/){
var _V4 = new __Promise();
var _V6 = function(code){ return function(res){ try{code(res);}catch(e){ _V4.reject(e); }; }; };
var _V7 = function(e){ _V4.reject(e); };
_V6(function(){;
_V4.resolve((_V3/*par*/ + 1)); return;;
_V4.resolve(); return;;
})();
return _V4;
});
return {"fun": (function(){
var _V8 = new __Promise();
var _V9 = function(code){ return function(res){ try{code(res);}catch(e){ _V8.reject(e); }; }; };
var _V10 = function(e){ _V8.reject(e); };
var _V11/*a*/;
_V9(function(){;
_V11/*a*/ = 1;
_V2/*somefun*/(_V11/*a*/).then(_V9(function(_V12){if((_V12 == 2)){
_V8.resolve(4); return;;
};
;
_V8.resolve(0); return;;
_V8.resolve(); return;;
}), _V10);
;})();
return _V8;
})};;
;
})();
;promiseland._registerModule({ hashStr: "5a8727f5d27e395d615f6beceb415ee1", "module": _V1, promising: false });
return _V1;
});
})();