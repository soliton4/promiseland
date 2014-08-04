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

if (promiseland._hasModule({ hashStr: "2154142e298e5f0d8297b28f9c829070" })){ return promiseland._getModule("2154142e298e5f0d8297b28f9c829070"); };
var _V1 = (function(){
"use strict";
var _V2/*a*/;
;
_V2/*a*/ = 2;
return (function(){
var _V4/*C1*/;
var _V5/*v2*/;
var _V6/*v1*/;
var _V9/*C2*/;
var _V10/*v3*/;
;
_V4/*C1*/ = (function(){var _V3/*inherited*/ = {};
var res = promiseland.createClass({"a": (function(){
;
return 1;;
;
}),
"b": 3}, [], _V3/*inherited*/);
return res; })();_V4/*C1*/;;
_V5/*v2*/ = _V2/*a*/;
_V6/*v1*/ = new _V4/*C1*/();
if((_V5/*v2*/ != 2)){
return {"success": false};;
};
;
_V9/*C2*/ = (function(){var _V7/*inherited*/ = {};
var res = promiseland.createClass({"a": (function(){
;
return (_V8/*inherited a*/.apply(this, []) + 1);;
;
})}, [_V4/*C1*/], _V7/*inherited*/);
var _V8/*inherited a*/ = _V7/*inherited*/["a"];
return res; })();_V9/*C2*/;;
_V10/*v3*/ = new _V9/*C2*/();
if(((_V10/*v3*/["a"]() != 2) || (_V10/*v3*/["b"] != 3))){
return {"success": false};;
};
;
return {"success": true};;
;
})();;
;
})();
;return _V1;
});
})();