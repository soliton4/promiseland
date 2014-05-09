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
if (promiseland._hasModule({ hashStr: "799e3eb38bcb4eaea6aa5131710c22c5" })){ return promiseland._getModule("799e3eb38bcb4eaea6aa5131710c22c5"); };
var _V4/*console*/;try{_V4/*console*/ = console;}catch(e){};
var _V5/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V2/*C1*/;
var _V3/*c*/;
_V2/*C1*/ = promiseland.createClass({"constructor": function(){
this["a"] = 1;;
},
"b": 1,
"doSomething": function(){
return (this["a"] + this["b"]);
}});
_V3/*c*/ = new _V2/*C1*/();
_V4/*console*/["log"](_V3/*c*/["a"]);;
_V4/*console*/["log"](_V3/*c*/["b"]);;
_V4/*console*/["log"](_V3/*c*/["doSomething"]());;
})();
promiseland._registerModule({ hashStr: "799e3eb38bcb4eaea6aa5131710c22c5", "module": _V1, promising: false });
return _V1;
});
})();