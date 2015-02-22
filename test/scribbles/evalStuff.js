(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "6470816a531e41b4bc30387b164499b6" })){ return promiseland._getModule("6470816a531e41b4bc30387b164499b6"); };
var PL$3/*console*/;try{PL$3/*console*/ = console;}catch(e){};
var PL$4/*promiseland*/;try{PL$4/*promiseland*/ = promiseland;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*o*/ = {
    "x": 1
  };
  ;
  PL$3/*console*/["log"](PL$4/*promiseland*/["javascriptEval"]("x", PL$2/*o*/));
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
