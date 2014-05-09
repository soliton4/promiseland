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
if (promiseland._hasModule({ hashStr: "2f48921929fe5412fc241c2e109a33b6" })){ return promiseland._getModule("2f48921929fe5412fc241c2e109a33b6"); };
var _V10/*Callback*/;try{_V10/*Callback*/ = Callback;}catch(e){};
var _V11/*setTimeout*/;try{_V11/*setTimeout*/ = setTimeout;}catch(e){};
var _V15/*para*/;try{_V15/*para*/ = para;}catch(e){};
var _V16/*parb*/;try{_V16/*parb*/ = parb;}catch(e){};
var _V23/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V2 = new __Promise();
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V2.reject(e); }; }; };
var _V4 = function(e){ _V2.reject(e); };
var _V5/*p*/;
var _V13/*res*/;
var _V14/*x*/;
_V3(function(){_V5/*p*/ = function(){
var _V6 = new __Promise();
var _V7 = function(code){ return function(res){ try{code(res);}catch(e){ _V6.reject(e); }; }; };
var _V8 = function(e){ _V6.reject(e); };
var _V9/*c*/;
_V7(function(){_V9/*c*/ = new _V10/*Callback*/();
_V11/*setTimeout*/(_V9/*c*/, 100);;
_V9/*c*/["promise"].then(_V7(function(_V12){_V12;;
_V6.resolve(); return _V6;
_V6.resolve(); return;;
}), _V8);})();
return _V6;
};
_V13/*res*/ = {};
_V14/*x*/ = function(_V15/*para*/, _V16/*parb*/){
var _V17 = new __Promise();
var _V18 = function(code){ return function(res){ try{code(res);}catch(e){ _V17.reject(e); }; }; };
var _V19 = function(e){ _V17.reject(e); };
var _V21/*arguments*/ = arguments;
_V18(function(){_V13/*res*/["a"] = _V15/*para*/;;
_V5/*p*/().then(_V18(function(_V20){_V20;;
_V13/*res*/["b"] = _V16/*parb*/;;
_V13/*res*/["c"] = _V21/*arguments*/[2];;
_V17.resolve(); return;;
}), _V19);})();
return _V17;
};
_V14/*x*/(1, 1, 2).then(_V3(function(_V22){_V22;;
_V2.resolve( ((_V13/*res*/["a"] + _V13/*res*/["b"]) + _V13/*res*/["c"])); return _V2;
_V2.resolve(); return;;
}), _V4);})();
return _V2;
})();
promiseland._registerModule({ hashStr: "2f48921929fe5412fc241c2e109a33b6", "module": _V1, promising: false });
return _V1;
});
})();