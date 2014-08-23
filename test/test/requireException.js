(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback, errBack){
      try{
        var i = 0;
        var l = modulesAr.length;
        var args = [];
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
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
var Promise = promiseland.Promise;
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    if (promiseland._hasModule({ hashStr: "e0b306b308e0915bbef291e45757b5f3" })){ return promiseland._getModule("e0b306b308e0915bbef291e45757b5f3"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "e0b306b308e0915bbef291e45757b5f3", "module": _V1, promising: true });
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
_V3(function(){;
var _V5 = new __Promise();
var _V6 = new __Promise();
var _V7/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V6.resolve(e); }; }; };
var _V8 = function(e){ _V6.resolve(e); };
_V7/*try catch*/(function(){__requireFun("somethingThatsNotPresent").then(_V7/*try catch*/(function(_V9){_V9;;
_V5.resolve();
}), _V8);
;})();
_V6.then(_V3(function(_V10/*e*/){_V1.resolve({"success": true}); return;;
_V5.resolve();;
}));
_V5.then(_V3(function(){;
;
_V1.resolve({"success": false}); return;;
_V1.resolve(); return;;
}), _V4)})();
return _V1;
})();
;;
return _V1});
})();