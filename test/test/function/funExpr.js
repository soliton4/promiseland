(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "95cdb6b721e461f5c0ac0b3b37c4f61b" })){ return promiseland._getModule("95cdb6b721e461f5c0ac0b3b37c4f61b"); };
var PL$4/*funName*/;try{PL$4/*funName*/ = funName;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*calledCnt*/ = 0;
  ;
  var PL$3/*x*/ = (function PL$4/*funName*/(PL$5/*par*/){
  
    ;
    PL$2/*calledCnt*/ += 1;
    if(PL$5/*par*/){
      return;
    };
    ;
    PL$4/*funName*/(true);
    ;});
  ;
  PL$3/*x*/();
  try
  {
    PL$4/*funName*/();}catch(PL$6/*e*/){};
  ;
  if((PL$2/*calledCnt*/ == 2)){
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
