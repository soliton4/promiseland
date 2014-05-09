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
if (promiseland._hasModule({ hashStr: "f7fc351a75b46f42352d9622b55af737" })){ return promiseland._getModule("f7fc351a75b46f42352d9622b55af737"); };
var _V12/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V2/*somefun*/;
_V2/*somefun*/ = function(){
var _V3 = new __Promise();
var _V4 = function(code){ return function(res){ try{code(res);}catch(e){ _V3.reject(e); }; }; };
var _V5 = function(e){ _V3.reject(e); };
_V4(function(){_V3.resolve( 1); return _V3;
_V3.resolve(); return;;
})();
return _V3;
};
return {"fun": function(){
var _V6 = new __Promise();
var _V7 = function(code){ return function(res){ try{code(res);}catch(e){ _V6.reject(e); }; }; };
var _V8 = function(e){ _V6.reject(e); };
var _V9/*a*/;
_V7(function(){_V9/*a*/ = 1;
var _V10 = new __Promise();
if(((_V9/*a*/ + 1) == 3)){
_V9/*a*/ = 0;;
_V10.resolve();;

}else{
_V2/*somefun*/().then(_V7(function(_V11){_V9/*a*/ = (_V9/*a*/ + _V11);;
_V10.resolve();;
}), _V8);}; _V10.then(function(){;
;
if((_V9/*a*/ == 2)){
_V6.resolve( 4); return _V6;
};
;
_V6.resolve( 0); return _V6;
_V6.resolve(); return;;
});})();
return _V6;
}};
})();
promiseland._registerModule({ hashStr: "f7fc351a75b46f42352d9622b55af737", "module": _V1, promising: false });
return _V1;
});
})();