(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "36fd2cecbc7c12901444ff42e0149fc5" })){ return promiseland._getModule("36fd2cecbc7c12901444ff42e0149fc5"); };
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*x*/ = (function PL$3/*f*/(PL$4/*stdlib*/, PL$5/*foreign*/, PL$6/*heap*/){
  "use asm";
  
  
    ;
    function PL$3/*f*/(){
    
      ;
      var PL$2/*x*/ = 0;
      ;
      var PL$7/*y*/ = 0;
      ;
      PL$2/*x*/ = (((PL$2/*x*/ | 0) % (PL$7/*y*/ | 0)) | 0);
      ;};
    return {
      
    };
    ;});
  ;
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
