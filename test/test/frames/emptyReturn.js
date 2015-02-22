(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "773ce5585497692b2163faac5abad48a" })){ return promiseland._getModule("773ce5585497692b2163faac5abad48a"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "773ce5585497692b2163faac5abad48a", "module": PL$1, promising: true });
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
var PL$5/*test*/ = (function(f){
promiseland.registerRemote("server", "773ce5585497692b2163faac5abad48a", "PL$11", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return function(){
var i = 0; var l = arguments.length; var newArgs = [undefined];
for(i = 0; i < l; ++i){ newArgs.push(arguments[i]); };
return f.apply(this, newArgs);
};
}else{
return function(){
return promiseland.remoteExec("773ce5585497692b2163faac5abad48a", "PL$11", arguments);
}
};
})(function (PL$6/*session*/){
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
PL$9/*promiseland exception catcher*/(function(){

  ;
  PL$7.resolve(); return;
})();return PL$7;
});
PL$3/*promiseland exception catcher*/(function(){

  ;
  /* function test (){} - hoisted */;
  ;
  PL$5/*test*/().then(PL$3/*promiseland exception catcher*/(function(PL$12){PL$12;
  PL$1.resolve({
    "success": true
  }); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;
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
