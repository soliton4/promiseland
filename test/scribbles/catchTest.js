(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    if (promiseland._hasModule({ hashStr: "afb7b777ad31c516ddf2a0916e531c33" })){ return promiseland._getModule("afb7b777ad31c516ddf2a0916e531c33"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "afb7b777ad31c516ddf2a0916e531c33", "module": PL$1, promising: true });
var PL$2 = (function(){
"use strict";
var PL$3/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$1.reject(e);
    };
  };
};
var PL$4/*catch rejected*/ = function(e){
  PL$1.reject(e);
};
var PL$5/*a*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  PL$5/*a*/ = 1;
  var PL$6 = new __Promise();
  var PL$7 = new __Promise();
  var PL$8/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$7.resolve(e); }; }; };
  var PL$9 = function(e){ PL$7.resolve(e); };
  PL$8/*try catch*/(function(){
    __requireFun("x").then(PL$8/*try catch*/(function(PL$10){PL$5/*a*/ = PL$10;
    PL$6.resolve();}), PL$9);
  ;})();
  PL$7.then(PL$3/*promiseland exception catcher*/(function(PL$11/*e*/){
    PL$5/*a*/ = 2;
    PL$6.resolve();;}));
  PL$6.then(PL$3/*promiseland exception catcher*/(function(){;
  ;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/)
})();return PL$1;
})();
;;
return PL$1};
  
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
