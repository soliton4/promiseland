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
if (promiseland._hasModule({ hashStr: "eb2da6464c8ef09a7c4e9bb772e7d8de" })){ return promiseland._getModule("eb2da6464c8ef09a7c4e9bb772e7d8de"); };
var _V1 = (function(){
"use strict";
var _V2/*a*/;
var _V3/*namesStr*/;
var _V4/*cnt*/;
var _V5/*i*/;
_V2/*a*/ = {"a": 1,
"b": 2,
"c": 3};
_V3/*namesStr*/ = "";
_V4/*cnt*/ = 0;
for(_V5/*i*/ in _V2/*a*/){_V3/*namesStr*/ = _V5/*i*/;;
_V4/*cnt*/ = _V2/*a*/[_V5/*i*/];;
};
;
return {"names": _V3/*namesStr*/,
"cnt": _V4/*cnt*/};
})();
promiseland._registerModule({ hashStr: "eb2da6464c8ef09a7c4e9bb772e7d8de", "module": _V1, promising: false });
return _V1;
});
})();