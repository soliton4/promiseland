(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "8219d0f3b17c71789de7687b768d741f" })){ return promiseland._getModule("8219d0f3b17c71789de7687b768d741f"); };
var PL$4/*console*/;try{PL$4/*console*/ = console;}catch(e){};
var PL$3/*y*/;try{PL$3/*y*/ = y;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  try
  {
    var PL$2/*x*/ = (function PL$3/*y*/(){
    
      ;
      PL$4/*console*/["log"]("exec");
      ;});
    ;
    PL$2/*x*/();
    PL$3/*y*/();}catch(PL$5/*e*/){
    PL$4/*console*/["log"](PL$5/*e*/);};
  ;
  PL$4/*console*/["log"]("finale");
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
