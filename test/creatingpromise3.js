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
  
  
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "bd9d6daff691126a54d403e075368a5e" })){ return promiseland._getModule("bd9d6daff691126a54d403e075368a5e"); };
var _V1 = (function(){
"use strict";
var _V2 = new __Promise();
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V2.reject(e); }; }; };
var _V4 = function(e){ _V2.reject(e); };
var _V5/*x*/;
_V3(function(){_V5/*x*/ = function(){
var _V6 = new __Promise();
var _V7 = function(code){ return function(res){ try{code(res);}catch(e){ _V6.reject(e); }; }; };
var _V8 = function(e){ _V6.reject(e); };
_V7(function(){_V6.resolve( {"fun": function(){
var _V9 = new __Promise();
var _V10 = function(code){ return function(res){ try{code(res);}catch(e){ _V9.reject(e); }; }; };
var _V11 = function(e){ _V9.reject(e); };
_V10(function(){_V9.resolve( 4); return _V9;
_V9.resolve(); return;;
})();
return _V9;
}}); return _V6;
_V6.resolve(); return;;
})();
return _V6;
};
_V5/*x*/().then(_V3(function(_V12){_V2.resolve( _V12); return _V2;
_V2.resolve(); return;;
}), _V4);})();
return _V2;
})();
promiseland._registerModule({ hashStr: "bd9d6daff691126a54d403e075368a5e", "module": _V1, promising: false });
return _V1;
});
})();