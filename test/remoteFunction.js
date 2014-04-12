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
if (promiseland._hasModule({ hashStr: "db64fb1066e3280fe3178c0aa4936df0" })){ return promiseland._getModule("db64fb1066e3280fe3178c0aa4936df0"); };
var __UNIQUENAME1 = (function(){
"use strict";
var z;
var y;
var x;
z = function(context){
var __UNIQUENAME2 = new __Promise();
try{x().then(function(__UNIQUENAME3){try{if(__UNIQUENAME3){
doSome();
};
;
}catch(__returnError){__UNIQUENAME2.reject(__returnError);
 }; });}catch(__returnError){
__UNIQUENAME2.reject(__returnError);
};
return __UNIQUENAME2;
};
var __UNIQUENAME6 = function(){
var __UNIQUENAME4 = new __Promise();
try{z(context).then(function(__UNIQUENAME5){try{__UNIQUENAME5;
}catch(__returnError){__UNIQUENAME4.reject(__returnError);
 }; });}catch(__returnError){
__UNIQUENAME4.reject(__returnError);
};
return __UNIQUENAME4;
};
promiseland.registerRemote("server", "db64fb1066e3280fe3178c0aa4936df0", "__UNIQUENAME6", __UNIQUENAME6);
y = function(){if (promiseland.profileHas("server")){
return __UNIQUENAME6.apply(this, arguments);
}else{
return promiseland.remoteExec("db64fb1066e3280fe3178c0aa4936df0", "__UNIQUENAME6", arguments);
};
};
var __UNIQUENAME8 = function(){
var __UNIQUENAME7 = new __Promise();
try{__UNIQUENAME7.resolve("x"); return __UNIQUENAME7;
}catch(__returnError){
__UNIQUENAME7.reject(__returnError);
};
return __UNIQUENAME7;
};
promiseland.registerRemote("client", "db64fb1066e3280fe3178c0aa4936df0", "__UNIQUENAME8", __UNIQUENAME8);
x = function(){if (promiseland.profileHas("client")){
return __UNIQUENAME8.apply(this, arguments);
}else{
return promiseland.remoteExec("db64fb1066e3280fe3178c0aa4936df0", "__UNIQUENAME8", arguments);
};
};
})();
promiseland._registerModule({ hashStr: "db64fb1066e3280fe3178c0aa4936df0", "module": __UNIQUENAME1, promising: false });
return __UNIQUENAME1;
});
})();