(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "3d967a2fc2c58e3c614e3a48c072b07e" })){ return promiseland._getModule("3d967a2fc2c58e3c614e3a48c072b07e"); };
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*somefun*/ = (function(){
  var PL$3 = new __Promise();
  var PL$5/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$3.reject(e);
      };
    };
  };
  var PL$6/*catch rejected*/ = function(e){
    PL$3.reject(e);
  };
  PL$5/*promiseland exception catcher*/(function(){
  
    ;
    PL$3.resolve(1); return;
    PL$3.resolve(); return;
  })();return PL$3;
  });
  ;
  return {
    "fun": (function(){
    var PL$7 = new __Promise();
    var PL$9/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$7.reject(e);
        };
      };
    };
    var PL$10/*catch rejected*/ = function(e){
      PL$7.reject(e);
    };
    var PL$11/*a*/;
    PL$9/*promiseland exception catcher*/(function(){
    
      ;
      PL$11/*a*/ = 1;
      
      var PL$12 = new __Promise();if(((PL$11/*a*/ + 1) == 2)){
        PL$2/*somefun*/().then(PL$9/*promiseland exception catcher*/(function(PL$13){PL$11/*a*/ = (PL$11/*a*/ + PL$13);
        PL$12.resolve();;}), PL$10/*catch rejected*/);
        ;
      }else{PL$12.resolve();
      };PL$12.then(PL$9/*promiseland exception catcher*/(function(PL$14){PL$14;;
      ;
      if((PL$11/*a*/ == 2)){
        PL$7.resolve(4); return;
      };
      ;
      PL$7.resolve(0); return;
      PL$7.resolve(); return;}), PL$10/*catch rejected*/);
      ;
    })();return PL$7;
    })
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
