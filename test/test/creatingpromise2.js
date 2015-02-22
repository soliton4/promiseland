(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "cfd61e183b4bf6d2ea80744ad61d0e79" })){ return promiseland._getModule("cfd61e183b4bf6d2ea80744ad61d0e79"); };
var PL$1 = (function(){
"use strict";

  ;
  return {
    "fun": (function(){
    var PL$2 = new __Promise();
    var PL$4/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$2.reject(e);
        };
      };
    };
    var PL$5/*catch rejected*/ = function(e){
      PL$2.reject(e);
    };
    PL$4/*promiseland exception catcher*/(function(){
    
      ;
      PL$2.resolve(4); return;
      PL$2.resolve(); return;
    })();return PL$2;
    })
  };
  ;})();
;return PL$1;
};
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    module.exports = __modFun(function(modulesAr, callback, errBack){
      // the require function for CommonJs
      var args = [];
      try{
        var i = 0;
        var l = modulesAr.length;
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    }, require("promiseland"));
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require", "promiseland"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
