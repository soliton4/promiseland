(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback){
      var i = 0;
      var l = modulesAr.length;
      var args = [];
      for (i; i < l; ++i){
        args.push(require(modulesAr[i]));
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
  var __modulePromise = new __Promise();
  var classSystem = promiseland.classSystem; 
  var __requireFun = function(parModule){
    var returnPromise = new __Promise();
    try{__require([parModule], function(m){
    if (promiseland.isPromiseLandPromisingModule(m)){
      m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
    }else{
      returnPromise.resolve(m);
    };
    });
    }catch(e){returnPromise.reject(e);};
  return returnPromise.promise;};
  var __classSystem = promiseland.classSystem;
  
  
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "41511671c2f8e5b0c3ec3b98ee6bb357" })){ return promiseland._getModule("41511671c2f8e5b0c3ec3b98ee6bb357"); };
var _V9/*Callback*/;try{_V9/*Callback*/ = Callback;}catch(e){};
var _V10/*setTimeout*/;try{_V10/*setTimeout*/ = setTimeout;}catch(e){};
var _V22/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V2/*somefun*/;
;
_V2/*somefun*/ = (function(_V3/*par*/){
var _V4 = new __Promise();
var _V6 = function(code){ return function(res){ try{code(res);}catch(e){ _V4.reject(e); }; }; };
var _V7 = function(e){ _V4.reject(e); };
var _V8/*c*/;
_V6(function(){;
_V8/*c*/ = new _V9/*Callback*/();
_V10/*setTimeout*/(_V8/*c*/["callback"], 100);;
_V8/*c*/["promise"].then(_V6(function(_V11){_V11;;
_V4.resolve((_V3/*par*/ + 1)); return;;
_V4.resolve(); return;;
}), _V7);
;})();
return _V4;
});
return {"fun": (function(){
var _V12 = new __Promise();
var _V13 = function(code){ return function(res){ try{code(res);}catch(e){ _V12.reject(e); }; }; };
var _V14 = function(e){ _V12.reject(e); };
var _V15/*a*/;
var _V16/*i*/;
_V13(function(){;
_V15/*a*/ = 1;
_V16/*i*/ = 0;
_V16/*i*/ = 0;
var _V18 = new __Promise();
var _V17 = function(){var _V19 = new __Promise();
if((_V16/*i*/ < 4)){_V2/*somefun*/(_V15/*a*/).then(_V13(function(_V20){_V15/*a*/ = _V20;;
_V19.resolve(true); return _V19;
;
}), _V14);
;}else{_V19.resolve(false); return _V19;
};
_V19;
return _V19;
};
var _V21 = function(){_V17().then(function(contLoop){
if (contLoop){++_V16/*i*/;
_V21();}else{_V18.resolve();};
});
};
_V21();
_V18.then(function(){;
;
if((_V15/*a*/ == 5)){
_V12.resolve(4); return;;
};
;
_V12.resolve(0); return;;
_V12.resolve(); return;;
});})();
return _V12;
})};;
;
})();
;promiseland._registerModule({ hashStr: "41511671c2f8e5b0c3ec3b98ee6bb357", "module": _V1, promising: false });
return _V1;
});
})();