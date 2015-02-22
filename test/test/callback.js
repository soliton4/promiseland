(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "3a26e21b5c50a7dfbba0e9c0d8fb68a6" })){ return promiseland._getModule("3a26e21b5c50a7dfbba0e9c0d8fb68a6"); };
var PL$9/*Callback*/;try{PL$9/*Callback*/ = Callback;}catch(e){};
var PL$10/*setTimeout*/;try{PL$10/*setTimeout*/ = setTimeout;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*somefun*/ = (function(PL$3/*par*/){
  var PL$4 = new __Promise();
  var PL$6/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$4.reject(e);
      };
    };
  };
  var PL$7/*catch rejected*/ = function(e){
    PL$4.reject(e);
  };
  var PL$8/*c*/;
  var PL$11/*x*/;
  PL$6/*promiseland exception catcher*/(function(){
  
    ;
    PL$8/*c*/ = new PL$9/*Callback*/();
    PL$10/*setTimeout*/(PL$8/*c*/["callback"], 100);
    PL$8/*c*/["promise"].then(PL$6/*promiseland exception catcher*/(function(PL$12){PL$11/*x*/ = PL$12;
    PL$4.resolve((PL$3/*par*/ + 1)); return;
    PL$4.resolve(); return;}), PL$7/*catch rejected*/);
    ;
  })();return PL$4;
  });
  ;
  return {
    "fun": (function(){
    var PL$13 = new __Promise();
    var PL$15/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$13.reject(e);
        };
      };
    };
    var PL$16/*catch rejected*/ = function(e){
      PL$13.reject(e);
    };
    var PL$17/*a*/;
    PL$15/*promiseland exception catcher*/(function(){
    
      ;
      PL$17/*a*/ = 1;
      PL$2/*somefun*/(PL$17/*a*/).then(PL$15/*promiseland exception catcher*/(function(PL$18){if((PL$18 == 2)){
        PL$13.resolve(4); return;
      };
      ;
      PL$13.resolve(0); return;
      PL$13.resolve(); return;}), PL$16/*catch rejected*/);
      ;
    })();return PL$13;
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
