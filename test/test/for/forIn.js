(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "f0e9248ed0ed8f99151b0fb84ca11594" })){ return promiseland._getModule("f0e9248ed0ed8f99151b0fb84ca11594"); };
var PL$1 = (function(){
"use strict";
var PL$5/*i*/;

  ;
  var PL$2/*a*/ = {
    "a": 1,
    "b": 2,
    "c": 3
  };
  ;
  var PL$3/*namesStr*/ = "";
  ;
  var PL$4/*cnt*/ = 0;
  ;
  for(PL$5/*i*/ in PL$2/*a*/){
    PL$3/*namesStr*/ += PL$5/*i*/;
    PL$4/*cnt*/ += PL$2/*a*/[PL$5/*i*/];};
  ;
  if((PL$3/*namesStr*/["length"] != 3)){
    return {
      "success": false
    };
  };
  ;
  if((PL$4/*cnt*/ != 6)){
    return {
      "success": false
    };
  };
  ;
  return {
    "success": true
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
