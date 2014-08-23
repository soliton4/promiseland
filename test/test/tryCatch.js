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

if (promiseland._hasModule({ hashStr: "6b462038a9171eb6ac94e6b855660e0f" })){ return promiseland._getModule("6b462038a9171eb6ac94e6b855660e0f"); };
var _V5/*dostuff*/;try{_V5/*dostuff*/ = dostuff;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*result*/;
var _V3/*dootherStuff*/;
var _V4/*x*/;
;
_V2/*result*/ = {"res": 1};
_V3/*dootherStuff*/ = (function(){
;
_V2/*result*/["res"] = 4;;
;
});
_V4/*x*/ = (function(){
;
try
{_V5/*dostuff*/();;
}catch(_V6/*e*/){_V3/*dootherStuff*/();;
};
;
;
});
_V4/*x*/();;
return _V2/*result*/;;
;
})();
;return _V1;
});
})();