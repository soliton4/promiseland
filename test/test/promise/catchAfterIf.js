(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "4398b0c2994d316dc1bfc55b7a1d0204" })){ return promiseland._getModule("4398b0c2994d316dc1bfc55b7a1d0204"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "4398b0c2994d316dc1bfc55b7a1d0204", "module": PL$1, promising: true });
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
var PL$5/*x*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  PL$5/*x*/;
  var PL$6 = new __Promise();
  var PL$7 = new __Promise();
  var PL$8/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$7.resolve(e); }; }; };
  var PL$9 = function(e){ PL$7.resolve(e); };
  PL$8/*try catch*/(function(){
    
    var PL$10 = new __Promise();if(false){
      PL$5/*x*/.then(PL$8/*try catch*/(function(PL$11){PL$11;
      PL$10.resolve();;}), PL$9);
      ;
    }else{PL$10.resolve();
    };PL$10.then(PL$8/*try catch*/(function(PL$12){PL$12;;
    ;
    throw {
      "n": 1
    };
    PL$6.resolve();}), PL$9);
  ;})();
  PL$7.then(PL$3/*promiseland exception catcher*/(function(PL$13/*err*/){
    if((PL$13/*err*/["n"] == 1)){
      PL$1.resolve({
        "success": true
      }); return;
    };
    ;
    PL$6.resolve();;}));
  PL$6.then(PL$3/*promiseland exception catcher*/(function(){;
  ;
  PL$1.resolve({
    "success": false
  }); return;
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
