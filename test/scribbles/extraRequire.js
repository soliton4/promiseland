(function(){var __modFun = function(__require, promiseland, PL$2/*mod1*/){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "377de124beec7172541907a7abb4b8fa" })){ return promiseland._getModule("377de124beec7172541907a7abb4b8fa"); };
var PL$1 = (function(){
"use strict";

  ;
  ;
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
    }, require("promiseland"), require("some/path"));
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require", "promiseland", "some/path"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
