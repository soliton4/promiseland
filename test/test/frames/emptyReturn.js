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
  
defineFun(["promiseland"], function(promiseland){ var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "773ce5585497692b2163faac5abad48a" })){ return promiseland._getModule("773ce5585497692b2163faac5abad48a"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "773ce5585497692b2163faac5abad48a", "module": _V1, promising: true });
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V10/*test*/;
var _V10/*test*/ = (function(f){
promiseland.registerRemote("server", "773ce5585497692b2163faac5abad48a", "_V9", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("773ce5585497692b2163faac5abad48a", "_V9", arguments);
}
};
})(function(){
var _V5 = new __Promise();
var _V7 = function(code){ return function(res){ try{code(res);}catch(e){ _V5.reject(e); }; }; };
var _V8 = function(e){ _V5.reject(e); };
_V7(function(){;
_V5.resolve(); return;;
})();
return _V5;
});
_V3(function(){;
_V10/*test*/;
;
_V10/*test*/().then(_V3(function(_V11){_V11;;
_V1.resolve({"success": true}); return;;
_V1.resolve(); return;;
}), _V4);
;})();
return _V1;
})();
;;
return _V1});
})();