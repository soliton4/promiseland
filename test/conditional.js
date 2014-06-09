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
if (promiseland._hasModule({ hashStr: "5a8727f5d27e395d615f6beceb415ee1" })){ return promiseland._getModule("5a8727f5d27e395d615f6beceb415ee1"); };
var _V12/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V2/*somefun*/;
_V2/*somefun*/ = function(_V3/*par*/){
var _V4 = new __Promise();
var _V5 = function(code){ return function(res){ try{code(res);}catch(e){ _V4.reject(e); }; }; };
var _V6 = function(e){ _V4.reject(e); };
var _V3/*par*/;
_V5(function(){_V4.resolve( (_V3/*par*/ + 1)); return _V4;
_V4.resolve(); return;;
})();
return _V4;
};
return {"fun": function(){
var _V7 = new __Promise();
var _V8 = function(code){ return function(res){ try{code(res);}catch(e){ _V7.reject(e); }; }; };
var _V9 = function(e){ _V7.reject(e); };
var _V10/*a*/;
_V8(function(){_V10/*a*/ = 1;
_V2/*somefun*/(_V10/*a*/).then(_V8(function(_V11){if((_V11 == 2)){
_V7.resolve( 4); return _V7;
};
;
_V7.resolve( 0); return _V7;
_V7.resolve(); return;;
}), _V9);})();
return _V7;
}};
})();
promiseland._registerModule({ hashStr: "5a8727f5d27e395d615f6beceb415ee1", "module": _V1, promising: false });
return _V1;
});
})();