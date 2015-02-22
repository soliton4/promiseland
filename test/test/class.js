(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "ab5c44392ce9b1c0b80c13161fb244c0" })){ return promiseland._getModule("ab5c44392ce9b1c0b80c13161fb244c0"); };
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*C1*/ = (function(){var PL$3/*inherited*/ = {};
  var res = promiseland.createClass({
    "constructor": (function(){
    
      ;
      this["a"] = 1;
      ;}),
    "b": 1,
    "doSomething": (function(){
    
      ;
      return (this["a"] + this["b"]);
      ;})
  }, [], PL$3/*inherited*/);
  return res; })();
  ;
  var PL$4/*c*/ = new PL$2/*C1*/();
  ;
  if((((PL$4/*c*/["a"] == 1) && (PL$4/*c*/["b"] == 1)) && (PL$4/*c*/["doSomething"]() == 2))){
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
