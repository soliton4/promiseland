(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "6b435967d4e24cae0aaf40c9722f44ee" })){ return promiseland._getModule("6b435967d4e24cae0aaf40c9722f44ee"); };
var PL$2/*fs*/;try{PL$2/*fs*/ = fs;}catch(e){};
var PL$3/*filename*/;try{PL$3/*filename*/ = filename;}catch(e){};
var PL$4/*callback*/;try{PL$4/*callback*/ = callback;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  PL$2/*fs*/["readFile"](PL$3/*filename*/, {
    "encoding": "utf8"
  }, PL$4/*callback*/["callback"]);
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
