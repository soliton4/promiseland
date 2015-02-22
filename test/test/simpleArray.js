(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "8d22e85c82a82de38038caa802287378" })){ return promiseland._getModule("8d22e85c82a82de38038caa802287378"); };
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*a*/ = [
    
  ];
  ;
  var PL$3/*b*/ = [
    PL$2/*a*/, 
    0, 
    ""
  ];
  ;
  if(((PL$2/*a*/["length"] == 0) && (PL$3/*b*/["length"] == 3))){
    return {
      "success": true
    };
  };
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
