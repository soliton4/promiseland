(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "f486a9724d8537c9aa2b3250776d9a0c" })){ return promiseland._getModule("f486a9724d8537c9aa2b3250776d9a0c"); };
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*a*/ = 2;
  ;
  var PL$3/*b*/ = 3;
  ;
  var PL$4/*c*/;
  ;
  PL$4/*c*/ = (PL$2/*a*/ + PL$3/*b*/);
  if((PL$4/*c*/ == 5)){
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
    }, require("promiseland"));
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require", "promiseland"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
