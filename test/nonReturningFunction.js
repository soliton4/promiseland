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
if (promiseland._hasModule({ hashStr: "4dd8251661c34aeeaf240280f100ff51" })){ return promiseland._getModule("4dd8251661c34aeeaf240280f100ff51"); };
var _V1 = (function(){
"use strict";
var _V2 = new __Promise();
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V2.reject(e); }; }; };
var _V4 = function(e){ _V2.reject(e); };
var _V5/*result*/;
var _V6/*dostuff*/;
var _V10/*x*/;
_V3(function(){_V5/*result*/ = {"res": 1};
_V6/*dostuff*/ = function(){
var _V7 = new __Promise();
var _V8 = function(code){ return function(res){ try{code(res);}catch(e){ _V7.reject(e); }; }; };
var _V9 = function(e){ _V7.reject(e); };
_V8(function(){_V5/*result*/["res"] = 4;;
_V7.resolve(); return;;
})();
return _V7;
};
_V10/*x*/ = function(){
var _V11 = new __Promise();
var _V12 = function(code){ return function(res){ try{code(res);}catch(e){ _V11.reject(e); }; }; };
var _V13 = function(e){ _V11.reject(e); };
_V12(function(){_V6/*dostuff*/().then(_V12(function(_V14){_V14;;
_V11.resolve(); return;;
}), _V13);})();
return _V11;
};
_V10/*x*/().then(_V3(function(_V15){_V15;;
_V2.resolve( _V5/*result*/); return _V2;
_V2.resolve(); return;;
}), _V4);})();
return _V2;
})();
promiseland._registerModule({ hashStr: "4dd8251661c34aeeaf240280f100ff51", "module": _V1, promising: false });
return _V1;
});
})();