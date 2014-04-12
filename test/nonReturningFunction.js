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
var __UNIQUENAME1 = (function(){
"use strict";
var __UNIQUENAME2 = new __Promise();
var __UNIQUENAME3 = function(code){ return function(res){ try{code(res);}catch(e){ __UNIQUENAME2.reject(e); }; }; };
var __UNIQUENAME4 = function(e){ __UNIQUENAME2.reject(e); };
__UNIQUENAME3(function(){var result;
var dostuff;
var x;
result = {"res": 1};
dostuff = function(){
var __UNIQUENAME5 = new __Promise();
var __UNIQUENAME6 = function(code){ return function(res){ try{code(res);}catch(e){ __UNIQUENAME5.reject(e); }; }; };
var __UNIQUENAME7 = function(e){ __UNIQUENAME5.reject(e); };
__UNIQUENAME6(function(){result["res"] = 4;
__UNIQUENAME5.resolve(); return;})();
return __UNIQUENAME5;
};
x = function(){
var __UNIQUENAME8 = new __Promise();
var __UNIQUENAME9 = function(code){ return function(res){ try{code(res);}catch(e){ __UNIQUENAME8.reject(e); }; }; };
var __UNIQUENAME10 = function(e){ __UNIQUENAME8.reject(e); };
__UNIQUENAME9(function(){dostuff().then(__UNIQUENAME9(function(__UNIQUENAME11){__UNIQUENAME11;
__UNIQUENAME8.resolve(); return;}), __UNIQUENAME10);})();
return __UNIQUENAME8;
};
x().then(__UNIQUENAME3(function(__UNIQUENAME12){__UNIQUENAME12;
__UNIQUENAME2.resolve(result); return __UNIQUENAME2;
__UNIQUENAME2.resolve(); return;}), __UNIQUENAME4);})();
return __UNIQUENAME2;
})();
promiseland._registerModule({ hashStr: "4dd8251661c34aeeaf240280f100ff51", "module": __UNIQUENAME1, promising: false });
return __UNIQUENAME1;
});
})();