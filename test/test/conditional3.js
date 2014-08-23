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
if (promiseland._hasModule({ hashStr: "f7fc351a75b46f42352d9622b55af737" })){ return promiseland._getModule("f7fc351a75b46f42352d9622b55af737"); };
var _V1 = (function(){
"use strict";
var _V2/*somefun*/;
;
_V2/*somefun*/ = (function(){
var _V3 = new __Promise();
var _V5 = function(code){ return function(res){ try{code(res);}catch(e){ _V3.reject(e); }; }; };
var _V6 = function(e){ _V3.reject(e); };
_V5(function(){;
_V3.resolve(1); return;;
_V3.resolve(); return;;
})();
return _V3;
});
return {"fun": (function(){
var _V7 = new __Promise();
var _V8 = function(code){ return function(res){ try{code(res);}catch(e){ _V7.reject(e); }; }; };
var _V9 = function(e){ _V7.reject(e); };
var _V10/*a*/;
_V8(function(){;
_V10/*a*/ = 1;
var _V11 = new __Promise();
if(((_V10/*a*/ + 1) == 3)){
_V10/*a*/ = 0;;
_V11.resolve();;

}else{
_V2/*somefun*/().then(_V8(function(_V12){_V10/*a*/ = (_V10/*a*/ + _V12);;
_V11.resolve();;
}), _V9);
;}; _V11.then(function(){;
;
if((_V10/*a*/ == 2)){
_V7.resolve(4); return;;
};
;
_V7.resolve(0); return;;
_V7.resolve(); return;;
});})();
return _V7;
})};;
;
})();
;return _V1;
});
})();