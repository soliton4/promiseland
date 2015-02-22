(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "ee5b5da42a294a2f1d77d2f4f93f0add" })){ return promiseland._getModule("ee5b5da42a294a2f1d77d2f4f93f0add"); };
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*T*/ = (function(PL$3/*par*/){
  
    ;
    this["par"] = PL$3/*par*/;
    ;});
  ;
  var PL$4/*t*/ = new PL$2/*T*/({
    "id": 4
  });
  ;
  if((PL$4/*t*/["par"] && (PL$4/*t*/["par"]["id"] == 4))){
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
