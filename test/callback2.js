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
if (promiseland._hasModule({ hashStr: "b84ffe21642945e905a4c3f179551605" })){ return promiseland._getModule("b84ffe21642945e905a4c3f179551605"); };
var _V8/*Callback*/;try{_V8/*Callback*/ = Callback;}catch(e){};
var _V9/*setTimeout*/;try{_V9/*setTimeout*/ = setTimeout;}catch(e){};
var _V16/*console*/;try{_V16/*console*/ = console;}catch(e){};
var _V18/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V2/*somefun*/;
_V2/*somefun*/ = function(_V3/*par*/){
var _V4 = new __Promise();
var _V5 = function(code){ return function(res){ try{code(res);}catch(e){ _V4.reject(e); }; }; };
var _V6 = function(e){ _V4.reject(e); };
var _V7/*c*/;
var _V10/*x*/;
_V5(function(){_V7/*c*/ = new _V8/*Callback*/();
_V9/*setTimeout*/(function(){
_V7/*c*/["callback"](5);;
}, 100);;
_V7/*c*/["promise"].then(_V5(function(_V11){_V10/*x*/ = _V11[0];
_V4.resolve( (_V3/*par*/ + _V10/*x*/)); return _V4;
_V4.resolve(); return;;
}), _V6);})();
return _V4;
};
return {"fun": function(){
var _V12 = new __Promise();
var _V13 = function(code){ return function(res){ try{code(res);}catch(e){ _V12.reject(e); }; }; };
var _V14 = function(e){ _V12.reject(e); };
var _V15/*a*/;
_V13(function(){_V15/*a*/ = 1;
_V16/*console*/["log"]("1");;
_V2/*somefun*/(_V15/*a*/).then(_V13(function(_V17){if((_V17 == 6)){
_V12.resolve( 4); return _V12;
};
;
_V12.resolve( 0); return _V12;
_V12.resolve(); return;;
}), _V14);})();
return _V12;
}};
})();
promiseland._registerModule({ hashStr: "b84ffe21642945e905a4c3f179551605", "module": _V1, promising: false });
return _V1;
});
})();