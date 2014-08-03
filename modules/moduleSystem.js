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
  
defineFun([], function(){ var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

if (promiseland._hasModule({ hashStr: "b4d87d3050f4ff97d753b76790f08b0f" })){ return promiseland._getModule("b4d87d3050f4ff97d753b76790f08b0f"); };
var _V3/*promiseland*/;try{_V3/*promiseland*/ = promiseland;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*modules*/;
;
;
_V2/*modules*/ = {};
_V3/*promiseland*/["_registerModule"] = (function(_V4/*par*/){
;
if(this["_hasModule"](_V4/*par*/["hashStr"])){
return false;;
};
;
_V2/*modules*/[_V4/*par*/["hashStr"]] = {"promising": _V4/*par*/["promising"],
"module": _V4/*par*/["module"]};;
return true;;
;
});;
_V3/*promiseland*/["_getModule"] = (function(_V5/*parHashStr*/){
;
return _V2/*modules*/[_V5/*parHashStr*/]["module"];;
;
});;
_V3/*promiseland*/["_hasModule"] = (function(_V5/*parHashStr*/){
;
if(_V2/*modules*/[_V5/*parHashStr*/]){
return true;;
};
;
return false;;
;
});;
_V3/*promiseland*/["isPromiseLandPromisingModule"] = (function(_V6/*parM*/){
var _V7/*i*/;
;
_V7/*i*/;
for(_V7/*i*/ in _V2/*modules*/){if((_V2/*modules*/[_V7/*i*/] && (_V2/*modules*/[_V7/*i*/]["module"] === _V6/*parM*/))){
return _V2/*modules*/[_V7/*i*/]["promising"];;
};
;
};
;
return false;;
;
});;
return _V2/*modules*/;;
;
})();
;return _V1;
}; return function(){ return __execute.apply(null, arguments); } });
})();