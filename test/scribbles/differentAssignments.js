(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "2dd6b097f04f0fe5effd4460ef56dd83" })){ return promiseland._getModule("2dd6b097f04f0fe5effd4460ef56dd83"); };
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*a*/ = 1;
  ;
  PL$2/*a*/ += 2;
  var PL$3/*b*/ = {
    "x": 1
  };
  ;
  PL$3/*b*/["x"] += 2;
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
