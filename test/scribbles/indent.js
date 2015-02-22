(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "4e03ac6f77c2d1fa42b400a256547e08" })){ return promiseland._getModule("4e03ac6f77c2d1fa42b400a256547e08"); };
var PL$2/*a*/;try{PL$2/*a*/ = a;}catch(e){};
var PL$3/*b*/;try{PL$3/*b*/ = b;}catch(e){};
var PL$4/*dostuff*/;try{PL$4/*dostuff*/ = dostuff;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  if(PL$2/*a*/ = PL$3/*b*/){
    PL$4/*dostuff*/();
  };
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
    }, require("promiseland"));
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require", "promiseland"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
