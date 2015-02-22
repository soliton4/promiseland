(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var Map = promiseland.Map;
if (promiseland._hasModule({ hashStr: "ff23c7ac67b3e8242608f22ed8949a2e" })){ return promiseland._getModule("ff23c7ac67b3e8242608f22ed8949a2e"); };
var PL$3/*Map*/;try{PL$3/*Map*/ = Map;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*m*/ = new PL$3/*Map*/();
  ;
  if(PL$2/*m*/){
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
