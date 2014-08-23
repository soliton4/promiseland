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
    var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "305873103956dbcac355c242894d9641" })){ return promiseland._getModule("305873103956dbcac355c242894d9641"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "305873103956dbcac355c242894d9641", "module": _V1, promising: true });
var _V16/*Callback*/;try{_V16/*Callback*/ = Callback;}catch(e){};
var _V18/*__dirname*/;try{_V18/*__dirname*/ = __dirname;}catch(e){};
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*fs*/;
var _V11/*x*/;
var _V21/*res*/;
_V3(function(){;
_V5/*fs*/;
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
__requireFun("fs").then(_V8(function(_V10){_V5/*fs*/ = _V10;;
_V6.resolve(); return;;
}), _V9);
;})();
return _V6;
})();;
_V11/*x*/ = ((function(f){
promiseland.registerRemote("server", "305873103956dbcac355c242894d9641", "_V20", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("305873103956dbcac355c242894d9641", "_V20", arguments);
}
};
})(function(){
var _V12 = new __Promise();
var _V13 = function(code){ return function(res){ try{code(res);}catch(e){ _V12.reject(e); }; }; };
var _V14 = function(e){ _V12.reject(e); };
var _V15/*cb*/;
var _V17/*filenameStr*/;
_V13(function(){;
_V15/*cb*/ = new _V16/*Callback*/();
_V17/*filenameStr*/ = (_V18/*__dirname*/ + "/clientServer.txt");
_V5/*fs*/["readFile"](_V17/*filenameStr*/, {"encoding": "utf8"}, _V15/*cb*/);;
_V15/*cb*/["promise"].then(_V13(function(_V19){_V12.resolve(_V19[1]); return;;
_V12.resolve(); return;;
}), _V14);
;})();
return _V12;
}));
_V11/*x*/().then(_V3(function(_V22){_V21/*res*/ = _V22;
if((_V21/*res*/ == "the test content")){
_V1.resolve({"success": true}); return;;
};
;
_V1.resolve({"success": false}); return;;
_V1.resolve(); return;;
}), _V4);
;})();
return _V1;
})();
;;
return _V1});
})();