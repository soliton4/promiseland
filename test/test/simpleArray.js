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

if (promiseland._hasModule({ hashStr: "8d22e85c82a82de38038caa802287378" })){ return promiseland._getModule("8d22e85c82a82de38038caa802287378"); };
var _V1 = (function(){
"use strict";
var _V2/*a*/;
var _V3/*b*/;
;
_V2/*a*/ = [];
_V3/*b*/ = [_V2/*a*/, 0, ""];
if(((_V2/*a*/["length"] == 0) && (_V3/*b*/["length"] == 3))){
return {"success": true};;
};
return {"success": false};;
;
})();
;return _V1;
});
})();