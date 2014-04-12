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
var __UNIQUENAME1 = (function(){
"use strict";
var __UNIQUENAME2 = new __Promise();
var __UNIQUENAME3 = function(code){ return function(res){ try{code(res);}catch(e){ __UNIQUENAME2.reject(e); }; }; };
var __UNIQUENAME4 = function(e){ __UNIQUENAME2.reject(e); };
__UNIQUENAME3(function(){var x;
x = function(){
var __UNIQUENAME5 = new __Promise();
var __UNIQUENAME6 = function(code){ return function(res){ try{code(res);}catch(e){ __UNIQUENAME5.reject(e); }; }; };
var __UNIQUENAME7 = function(e){ __UNIQUENAME5.reject(e); };
__UNIQUENAME6(function(){__UNIQUENAME5.resolve({"fun": function(){
var __UNIQUENAME8 = new __Promise();
var __UNIQUENAME9 = function(code){ return function(res){ try{code(res);}catch(e){ __UNIQUENAME8.reject(e); }; }; };
var __UNIQUENAME10 = function(e){ __UNIQUENAME8.reject(e); };
__UNIQUENAME9(function(){__UNIQUENAME8.resolve(4); return __UNIQUENAME8;
})();
return __UNIQUENAME8;
}}); return __UNIQUENAME5;
})();
return __UNIQUENAME5;
};
x().then(__UNIQUENAME3(function(__UNIQUENAME11){__UNIQUENAME2.resolve(__UNIQUENAME11); return __UNIQUENAME2;
}), __UNIQUENAME4);})();
return __UNIQUENAME2;
})();
promiseland._registerModule({ hashStr: "bd9d6daff691126a54d403e075368a5e", "module": __UNIQUENAME1, promising: false });
return __UNIQUENAME1;
});
})();