(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "3d47d09748a57e8018c6827e5bc8604d" })){ return promiseland._getModule("3d47d09748a57e8018c6827e5bc8604d"); };
var PL$4/*some*/;try{PL$4/*some*/ = some;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  try
  {
    var PL$2/*catched*/;
    ;
    var PL$3/*res*/ = PL$4/*some*/["error"]();
    ;}catch(PL$5/*e*/){
    PL$2/*catched*/ = true;};
  ;
  if(! PL$2/*catched*/){
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
