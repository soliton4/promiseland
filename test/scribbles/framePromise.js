(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback, errBack){
      try{
        var i = 0;
        var l = modulesAr.length;
        var args = [];
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    };
    defineFun = function(requireAr, callback){
      requireFun(requireAr, function(){
        module.exports = callback.apply(callback, arguments);
      });
    };
    
  }else if (typeof define == "function" && define.amd){ // AMD
    var _define = define;
    requireFun = require;
    
    defineFun = function(par1, par2){
      if (par1 instanceof Array){
        par1.unshift("require");
      }else{
        par2 = par1;
        par1 = ["require"];
      };
      _define(par1, function(){
        requireFun = arguments[0];
        var args = [];
        for (var i = 1; i < arguments.length; ++i){
          args.push(arguments[i]);
        };
        return par2.apply(par2, args);
      });
    };
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

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
});
})();