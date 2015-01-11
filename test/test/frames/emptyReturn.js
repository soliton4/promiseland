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
promiseland.registerRemote("server", "773ce5585497692b2163faac5abad48a", "PL$10", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("773ce5585497692b2163faac5abad48a", "PL$10", arguments);
}
};
})(function (){
var PL$6 = new __Promise();
var PL$8/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$6.reject(e);
    };
  };
};
var PL$9/*catch rejected*/ = function(e){
  PL$6.reject(e);
};
PL$8/*promiseland exception catcher*/(function(){

  ;
  PL$6.resolve(); return;
})();return PL$6;
});
PL$3/*promiseland exception catcher*/(function(){

  ;
  /* function test (){} - hoisted */;
  ;
  PL$5/*test*/().then(PL$3/*promiseland exception catcher*/(function(PL$11){PL$11;
  PL$1.resolve({"success": true}); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;
})();return PL$1;
})();
;;
return PL$1});
})();