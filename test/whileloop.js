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
if (promiseland._hasModule({ hashStr: "14b6f31abad6dca33694f096a369ac7a" })){ return promiseland._getModule("14b6f31abad6dca33694f096a369ac7a"); };
var _V8/*Callback*/;try{_V8/*Callback*/ = Callback;}catch(e){};
var _V9/*setTimeout*/;try{_V9/*setTimeout*/ = setTimeout;}catch(e){};
var _V3/*par*/;try{_V3/*par*/ = par;}catch(e){};
var _V21/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V2/*somefun*/;
_V2/*somefun*/ = function(_V3/*par*/){
var _V4 = new __Promise();
var _V5 = function(code){ return function(res){ try{code(res);}catch(e){ _V4.reject(e); }; }; };
var _V6 = function(e){ _V4.reject(e); };
var _V7/*c*/;
_V5(function(){_V7/*c*/ = new _V8/*Callback*/();
_V9/*setTimeout*/(_V7/*c*/["callback"], 100);;
_V7/*c*/["promise"].then(_V5(function(_V10){_V10;;
_V4.resolve( (_V3/*par*/ + 1)); return _V4;
_V4.resolve(); return;;
}), _V6);})();
return _V4;
};
return {"fun": function(){
var _V11 = new __Promise();
var _V12 = function(code){ return function(res){ try{code(res);}catch(e){ _V11.reject(e); }; }; };
var _V13 = function(e){ _V11.reject(e); };
var _V14/*a*/;
var _V15/*i*/;
_V12(function(){_V14/*a*/ = 1;
_V15/*i*/ = 0;
var _V17 = new __Promise();
var _V16 = function(){var _V18 = new __Promise();
if((_V15/*i*/ < 4)){_V2/*somefun*/(_V15/*i*/).then(_V12(function(_V19){_V15/*i*/ = _V19;;
_V14/*a*/ = (_V14/*a*/ + 1);;
_V18.resolve(true); return _V18;
;
}), _V13);}else{_V18.resolve(false); return _V18;
};
_V18;
return _V18;
};
var _V20 = function(){_V16().then(function(contLoop){
if (contLoop){_V20();}else{_V17.resolve();};
});
};
_V20();
_V17.then(function(){;
;
if((_V14/*a*/ == 5)){
_V11.resolve( 4); return _V11;
};
;
_V11.resolve( 0); return _V11;
_V11.resolve(); return;;
});})();
return _V11;
}};
})();
promiseland._registerModule({ hashStr: "14b6f31abad6dca33694f096a369ac7a", "module": _V1, promising: false });
return _V1;
});
})();