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
    if (promiseland._hasModule({ hashStr: "cae0507e04a7312601e16db3b4c02736" })){ return promiseland._getModule("cae0507e04a7312601e16db3b4c02736"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "cae0507e04a7312601e16db3b4c02736", "module": _V1, promising: true });
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*fs*/;
var _V12/*getter*/;
_V3(function(){;
(function(){
if (!promiseland.profileHas("server")){
var p = new __Promise();
p.reject({id: 14, msg: "function does not execute in this frame."});
return p;
};
var _V6 = new __Promise();
var _V8 = function(code){ return function(res){ try{code(res);}catch(e){ _V6.reject(e); }; }; };
var _V9 = function(e){ _V6.reject(e); };
_V8(function(){;
__requireFun("fs").then(_V8(function(_V10){_V6.resolve(_V10); return;;
_V6.resolve(); return;;
}), _V9);
;})();
return _V6;
})().then(_V3(function(_V11){_V5/*fs*/ = _V11;
_V12/*getter*/ = ((function(f){
promiseland.registerRemote("server", "cae0507e04a7312601e16db3b4c02736", "_V16", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("cae0507e04a7312601e16db3b4c02736", "_V16", arguments);
}
};
})(function(){
var _V13 = new __Promise();
var _V14 = function(code){ return function(res){ try{code(res);}catch(e){ _V13.reject(e); }; }; };
var _V15 = function(e){ _V13.reject(e); };
_V14(function(){;
_V13.resolve(_V5/*fs*/["readFile"]("somefile.txt")); return;;
_V13.resolve(); return;;
})();
return _V13;
}));
_V1.resolve(); return;;
}), _V4);
;})();
return _V1;
})();
;;
return _V1});
})();