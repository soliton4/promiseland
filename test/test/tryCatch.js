(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "6b462038a9171eb6ac94e6b855660e0f" })){ return promiseland._getModule("6b462038a9171eb6ac94e6b855660e0f"); };
var PL$5/*dostuff*/;try{PL$5/*dostuff*/ = dostuff;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*result*/ = {
    "res": 1
  };
  ;
  var PL$3/*dootherStuff*/ = (function(){
  
    ;
    PL$2/*result*/["res"] = 4;
    ;});
  ;
  var PL$4/*x*/ = (function(){
  
    ;
    try
    {
      PL$5/*dostuff*/();}catch(PL$6/*e*/){
      PL$3/*dootherStuff*/();};
    ;
    ;});
  ;
  PL$4/*x*/();
  return PL$2/*result*/;
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
