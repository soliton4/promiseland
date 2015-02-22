(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "475bc97f98d7befc1d8e94a5038e91d9" })){ return promiseland._getModule("475bc97f98d7befc1d8e94a5038e91d9"); };
var PL$3/*trackRet*/;try{PL$3/*trackRet*/ = trackRet;}catch(e){};
var PL$4/*track2Ret*/;try{PL$4/*track2Ret*/ = track2Ret;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*a*/;
  ;
  PL$2/*a*/ = PL$3/*trackRet*/();
  PL$2/*a*/ = (PL$3/*trackRet*/() || PL$4/*track2Ret*/());
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
