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
if (promiseland._hasModule({ hashStr: "4e84e403eb11ef3aad15c8c7b151734b" })){ return promiseland._getModule("4e84e403eb11ef3aad15c8c7b151734b"); };
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
var __UNIQUENAME7 = new __Promise();
var __UNIQUENAME6 = function(){var __UNIQUENAME8 = new __Promise();
if((i < 4)){a = (a + 1);
__UNIQUENAME8.resolve(true); return __UNIQUENAME8;
}else{__UNIQUENAME8.resolve(false); return __UNIQUENAME8;
};
__UNIQUENAME8;
return __UNIQUENAME8;
};
var __UNIQUENAME9 = function(){__UNIQUENAME6().then(function(contLoop){
if (contLoop){somefun(i).then(function(__UNIQUENAME5){try{i = __UNIQUENAME5;
__UNIQUENAME9();}catch(__returnError){__UNIQUENAME4.reject(__returnError);
 }; });}else{__UNIQUENAME7.resolve();};
});
};
__UNIQUENAME9();
__UNIQUENAME7.then(function(){;
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
promiseland._registerModule({ hashStr: "4e84e403eb11ef3aad15c8c7b151734b", "module": __UNIQUENAME1, promising: false });
return __UNIQUENAME1;
});
})();