(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "09ebe1b3c68f338fa924f0dd9ebf6d7e" })){ return promiseland._getModule("09ebe1b3c68f338fa924f0dd9ebf6d7e"); };
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*a*/ = 1;
  ;
  var PL$3/*c1*/;
  ;
  var PL$4/*c2*/;
  ;
  var PL$5/*f1*/;
  ;
  var PL$6/*f2*/;
  ;
  switch (PL$2/*a*/){
    case 2:
      
      PL$5/*f1*/ = true;
    case 1:
      
      PL$3/*c1*/ = true;
    case 3:
      
      PL$4/*c2*/ = true;
      break;;
    case 4:
      
      PL$6/*f2*/ = true;
    
  };
  ;
  if((PL$3/*c1*/ && PL$4/*c2*/)){
    if((! PL$5/*f1*/ && ! PL$6/*f2*/)){
      return {
        "success": true
      };
    };
    ;
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
