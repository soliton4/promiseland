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
    requireFun = require;
    
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
var PL$7/*test*/;
var PL$7/*test*/ = (function(f){
promiseland.registerRemote("server", "25de7adaa1494a8c3cd1a849bde67c15", "PL$6", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("25de7adaa1494a8c3cd1a849bde67c15", "PL$6", arguments);
}
};
})(function(){
var PL$2 = new __Promise();
var PL$4 = function(code){ return function(res){ try{code(res);}catch(e){ PL$2.reject(e); }; }; };
var PL$5 = function(e){ PL$2.reject(e); };
PL$4(function(){;
PL$2.resolve(1); return;;
PL$2.resolve(); return;;
})();
return PL$2;
});
;
PL$7/*test*/;
;
})();
;return PL$1;
});
})();