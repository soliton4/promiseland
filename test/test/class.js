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

if (promiseland._hasModule({ hashStr: "ab5c44392ce9b1c0b80c13161fb244c0" })){ return promiseland._getModule("ab5c44392ce9b1c0b80c13161fb244c0"); };
var _V1 = (function(){
"use strict";
var _V2/*C1*/;
var _V4/*c*/;
;
_V2/*C1*/ = (function(){var _V3/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(){
;
this["a"] = 1;;
;
}),
"b": 1,
"doSomething": (function(){
;
return (this["a"] + this["b"]);;
;
})}, [], _V3/*inherited*/);
return res; })();
_V4/*c*/ = new _V2/*C1*/();
if((((_V4/*c*/["a"] == 1) && (_V4/*c*/["b"] == 1)) && (_V4/*c*/["doSomething"]() == 2))){
return {"success": true};;
};
;
return {"success": false};;
;
})();
;return _V1;
});
})();