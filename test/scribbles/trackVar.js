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

if (promiseland._hasModule({ hashStr: "475bc97f98d7befc1d8e94a5038e91d9" })){ return promiseland._getModule("475bc97f98d7befc1d8e94a5038e91d9"); };
var _V3/*trackRet*/;try{_V3/*trackRet*/ = trackRet;}catch(e){};
var _V4/*track2Ret*/;try{_V4/*track2Ret*/ = track2Ret;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*a*/;
;
_V2/*a*/;
_V2/*a*/ = _V3/*trackRet*/();;
_V2/*a*/ = (_V3/*trackRet*/() || _V4/*track2Ret*/());;
;
})();
;return _V1;
});
})();