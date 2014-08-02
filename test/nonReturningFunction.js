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
if (promiseland._hasModule({ hashStr: "4dd8251661c34aeeaf240280f100ff51" })){ return promiseland._getModule("4dd8251661c34aeeaf240280f100ff51"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "4dd8251661c34aeeaf240280f100ff51", "module": _V1, promising: true });
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*result*/;
var _V6/*dostuff*/;
var _V11/*x*/;
_V3(function(){;
_V5/*result*/ = {"res": 1};
_V6/*dostuff*/ = (function(){
var _V7 = new __Promise();
var _V9 = function(code){ return function(res){ try{code(res);}catch(e){ _V7.reject(e); }; }; };
var _V10 = function(e){ _V7.reject(e); };
_V9(function(){;
_V5/*result*/["res"] = 4;;
_V7.resolve(); return;;
})();
return _V7;
});
_V11/*x*/ = (function(){
var _V12 = new __Promise();
var _V13 = function(code){ return function(res){ try{code(res);}catch(e){ _V12.reject(e); }; }; };
var _V14 = function(e){ _V12.reject(e); };
_V13(function(){;
_V6/*dostuff*/().then(_V13(function(_V15){_V15;;
_V12.resolve(); return;;
}), _V14);
;})();
return _V12;
});
_V11/*x*/().then(_V3(function(_V16){_V16;;
_V1.resolve(_V5/*result*/); return;;
_V1.resolve(); return;;
}), _V4);
;})();
return _V1;
})();
;;
return _V1});
})();