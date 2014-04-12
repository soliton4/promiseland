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
if (promiseland._hasModule({ hashStr: "9f2bfe7de73bd330103c1112cef8efc3" })){ return promiseland._getModule("9f2bfe7de73bd330103c1112cef8efc3"); };
var __UNIQUENAME1 = (function(){
"use strict";
var __UNIQUENAME2 = new __Promise();
var __UNIQUENAME3 = function(code){ return function(res){ try{code(res);}catch(e){ __UNIQUENAME2.reject(e); }; }; };
var __UNIQUENAME4 = function(e){ __UNIQUENAME2.reject(e); };
__UNIQUENAME3(function(){var result;
var dootherStuff;
var dostuff;
var x;
result = {"res": 1};
dootherStuff = function(){
result["res"] = 4;
};
dostuff = function(){
var __UNIQUENAME5 = new __Promise();
var __UNIQUENAME6 = function(code){ return function(res){ try{code(res);}catch(e){ __UNIQUENAME5.reject(e); }; }; };
var __UNIQUENAME7 = function(e){ __UNIQUENAME5.reject(e); };
__UNIQUENAME6(function(){__UNIQUENAME5.resolve(domoreStuff()); return __UNIQUENAME5;
__UNIQUENAME5.resolve(); return;})();
return __UNIQUENAME5;
};
x = function(){
var __UNIQUENAME8 = new __Promise();
var __UNIQUENAME9 = function(code){ return function(res){ try{code(res);}catch(e){ __UNIQUENAME8.reject(e); }; }; };
var __UNIQUENAME10 = function(e){ __UNIQUENAME8.reject(e); };
__UNIQUENAME9(function(){var __UNIQUENAME11 = new __Promise();
var __UNIQUENAME12 = new __Promise();
var __UNIQUENAME13 = function(code){ return function(res){ try{code(res);}catch(e){ __UNIQUENAME12.reject(e); }; }; };
var __UNIQUENAME14 = function(e){ __UNIQUENAME12.reject(e); };
__UNIQUENAME13(function(){dostuff().then(__UNIQUENAME13(function(__UNIQUENAME15){__UNIQUENAME15;
__UNIQUENAME12.resolve();}), __UNIQUENAME14);})();
__UNIQUENAME12.then(function(){__UNIQUENAME11.resolve();}, __UNIQUENAME13(function(e){
dootherStuff();
__UNIQUENAME11.resolve();}));
__UNIQUENAME11.then(__UNIQUENAME13(function(){;
;
__UNIQUENAME8.resolve(); return;}), __UNIQUENAME14)})();
return __UNIQUENAME8;
};
x().then(__UNIQUENAME3(function(__UNIQUENAME16){__UNIQUENAME16;
__UNIQUENAME2.resolve(result); return __UNIQUENAME2;
__UNIQUENAME2.resolve(); return;}), __UNIQUENAME4);})();
return __UNIQUENAME2;
})();
promiseland._registerModule({ hashStr: "9f2bfe7de73bd330103c1112cef8efc3", "module": __UNIQUENAME1, promising: false });
return __UNIQUENAME1;
});
})();