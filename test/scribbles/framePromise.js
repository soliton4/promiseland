(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "25de7adaa1494a8c3cd1a849bde67c15" })){ return promiseland._getModule("25de7adaa1494a8c3cd1a849bde67c15"); };
var PL$1 = (function(){
"use strict";
var PL$2/*test*/ = (function(f){
promiseland.registerRemote("server", "25de7adaa1494a8c3cd1a849bde67c15", "PL$8", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return function(){
var i = 0; var l = arguments.length; var newArgs = [undefined];
for(i = 0; i < l; ++i){ newArgs.push(arguments[i]); };
return f.apply(this, newArgs);
};
}else{
return function(){
return promiseland.remoteExec("25de7adaa1494a8c3cd1a849bde67c15", "PL$8", arguments);
}
};
})(function (PL$3/*session*/){
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
PL$6/*promiseland exception catcher*/(function(){

  ;
  PL$4.resolve(1); return;
  PL$4.resolve(); return;
})();return PL$4;
});

  ;
  /* function test (){} - hoisted */;
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
