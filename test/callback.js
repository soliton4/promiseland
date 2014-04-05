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
  var __module = new __Promise();
  var __requireFun = function(parModule){
    var returnPromise = new __Promise();
    try{__require([parModule], function(m){
    if (promiseland.isPromiseLandModule(m)){
      m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
    }else{
      returnPromise.resolve(m);
    };
    });
    }catch(e){returnPromise.reject(e);};
  return returnPromise.promise;};
  
  
var Callback = promiseland.Callback;
if (!promiseland._registerModule("3a26e21b5c50a7dfbba0e9c0d8fb68a6", __module.promise.then)){ return promiseland._getModule("3a26e21b5c50a7dfbba0e9c0d8fb68a6"); };
(function(){
var somefun;
somefun = function(par){
var _returnPs = new __Promise();
try{var c;
var x;
c = new Callback();
setTimeout(c["callback"], 100);
c["promise"].then(function(__UNIQUENAME1){try{x = __UNIQUENAME1;
_returnPs.resolve((par + 1)); return _returnPs;
}catch(__returnError){_returnPs.reject(__returnError);
 }; });}catch(__returnError){
_returnPs.reject(__returnError);
};
return _returnPs;
};
__module.resolve({"fun": function(){
var _returnPs = new __Promise();
try{var a;
a = 1;
somefun(a).then(function(__UNIQUENAME2){try{if((__UNIQUENAME2 == 2)){
_returnPs.resolve(4); return _returnPs;
};
;
_returnPs.resolve(0); return _returnPs;
}catch(__returnError){_returnPs.reject(__returnError);
 }; });}catch(__returnError){
_returnPs.reject(__returnError);
};
return _returnPs;
}}); return __module;
})();
return __module.promise.then;});
})();