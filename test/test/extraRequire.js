(function(){var __modFun = function(__require, promiseland, PL$2/*extraModule*/){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "c3524211fbff8d0dc294d515bc7b1eaf" })){ return promiseland._getModule("c3524211fbff8d0dc294d515bc7b1eaf"); };
var PL$1 = (function(){
"use strict";

  ;
  ;
  if((PL$2/*extraModule*/["value"] == 4)){
    return {
      "success": true
    };
  };
  ;
  return {
    "success": false
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
    }, require("promiseland"), require("./extraRequireModule"));
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require", "promiseland", "./extraRequireModule"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
