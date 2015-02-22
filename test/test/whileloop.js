(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "14b6f31abad6dca33694f096a369ac7a" })){ return promiseland._getModule("14b6f31abad6dca33694f096a369ac7a"); };
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
  PL$6/*promiseland exception catcher*/(function(){
  
    ;
    PL$8/*c*/ = new PL$9/*Callback*/();
    PL$10/*setTimeout*/(PL$8/*c*/["callback"], 100);
    PL$8/*c*/["promise"].then(PL$6/*promiseland exception catcher*/(function(PL$11){PL$11;
    PL$4.resolve((PL$3/*par*/ + 1)); return;
    PL$4.resolve(); return;}), PL$7/*catch rejected*/);
    ;
  })();return PL$4;
  });
  ;
  return {
    "fun": (function(){
    var PL$12 = new __Promise();
    var PL$14/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$12.reject(e);
        };
      };
    };
    var PL$15/*catch rejected*/ = function(e){
      PL$12.reject(e);
    };
    var PL$16/*a*/;
    var PL$17/*i*/;
    PL$14/*promiseland exception catcher*/(function(){
    
      ;
      PL$16/*a*/ = 1;
      PL$17/*i*/ = 0;
      var PL$19 = new __Promise();
      var PL$18 = function(){var PL$20 = new __Promise();
      if((PL$17/*i*/ < 4)){
      PL$2/*somefun*/(PL$17/*i*/).then(PL$14/*promiseland exception catcher*/(function(PL$21){PL$17/*i*/ = PL$21;
      PL$16/*a*/ = (PL$16/*a*/ + 1);
      PL$20.resolve(true); return PL$20; /* continue */
      ;}), PL$15/*catch rejected*/);
      ;}else{
      PL$20.resolve(false); return PL$20; /* break */
      
      };
      PL$20;return PL$20;
      };
      var PL$22 = function(){PL$18().then(function(contLoop){
      if (contLoop){PL$22();}else{PL$19.resolve();};
      });
      };
      PL$22();
      PL$19.then(function(){;
      ;
      if((PL$16/*a*/ == 5)){
        PL$12.resolve(4); return;
      };
      ;
      PL$12.resolve(0); return;
      PL$12.resolve(); return;});
    })();return PL$12;
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
