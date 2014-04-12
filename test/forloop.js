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
if (promiseland._hasModule({ hashStr: "41511671c2f8e5b0c3ec3b98ee6bb357" })){ return promiseland._getModule("41511671c2f8e5b0c3ec3b98ee6bb357"); };
var __UNIQUENAME1 = (function(){
"use strict";
var somefun;
somefun = function(par){
var __UNIQUENAME2 = new __Promise();
try{var c;
c = new Callback();
setTimeout(c["callback"], 100);
c["promise"].then(function(__UNIQUENAME3){try{__UNIQUENAME3;
__UNIQUENAME2.resolve((par + 1)); return __UNIQUENAME2;
}catch(__returnError){__UNIQUENAME2.reject(__returnError);
 }; });}catch(__returnError){
__UNIQUENAME2.reject(__returnError);
};
return __UNIQUENAME2;
};
return {"fun": function(){
var __UNIQUENAME4 = new __Promise();
try{var a;
var i;
a = 1;
i = 0;
i = 0;
var __UNIQUENAME6 = new __Promise();
var __UNIQUENAME5 = function(){var __UNIQUENAME7 = new __Promise();
if((i < 4)){somefun(a).then(function(__UNIQUENAME8){try{a = __UNIQUENAME8;
__UNIQUENAME7.resolve(true); return __UNIQUENAME7;
}catch(__returnError){__UNIQUENAME4.reject(__returnError);
 }; });}else{__UNIQUENAME7.resolve(false); return __UNIQUENAME7;
};
__UNIQUENAME7;
return __UNIQUENAME7;
};
var __UNIQUENAME9 = function(){__UNIQUENAME5().then(function(contLoop){
if (contLoop){++i;
__UNIQUENAME9();}else{__UNIQUENAME6.resolve();};
});
};
__UNIQUENAME9();
__UNIQUENAME6.then(function(){;
;
if((a == 5)){
__UNIQUENAME4.resolve(4); return __UNIQUENAME4;
};
;
__UNIQUENAME4.resolve(0); return __UNIQUENAME4;
});}catch(__returnError){
__UNIQUENAME4.reject(__returnError);
};
return __UNIQUENAME4;
}};
})();
promiseland._registerModule({ hashStr: "41511671c2f8e5b0c3ec3b98ee6bb357", "module": __UNIQUENAME1, promising: false });
return __UNIQUENAME1;
});
})();