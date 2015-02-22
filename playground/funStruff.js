(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "79c549d14aa5895c8d6f86036d9300e5" })){ return promiseland._getModule("79c549d14aa5895c8d6f86036d9300e5"); };
var PL$2/*x*/;try{PL$2/*x*/ = x;}catch(e){};
var PL$5/*xxx*/;try{PL$5/*xxx*/ = xxx;}catch(e){};
var PL$6/*y*/;try{PL$6/*y*/ = y;}catch(e){};
var PL$1 = (function(){
"use strict";
function PL$3/*a*/(){

  ;
  ;};

  ;
  PL$2/*x*/ = 1;
  /* function a (){} - hoisted */;
  ;
  var PL$4/*b*/ = (function(){
  
    ;
    PL$5/*xxx*/();
    ;});
  ;
  PL$6/*y*/ = 2;
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
