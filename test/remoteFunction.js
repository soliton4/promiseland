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
if (!promiseland._registerModule("db64fb1066e3280fe3178c0aa4936df0", __module.promise.then)){ return promiseland._getModule("db64fb1066e3280fe3178c0aa4936df0"); };
(function(){
var z;
var y;
var x;
z = function(context){
var _returnPs = new __Promise();
try{x().then(function(__UNIQUENAME1){try{if(__UNIQUENAME1){
doSome();
};
;
}catch(__returnError){_returnPs.reject(__returnError);
 }; });}catch(__returnError){
_returnPs.reject(__returnError);
};
return _returnPs;
};
var __UNIQUENAME3 = function(){
var _returnPs = new __Promise();
try{z(context).then(function(__UNIQUENAME2){try{__UNIQUENAME2;
}catch(__returnError){_returnPs.reject(__returnError);
 }; });}catch(__returnError){
_returnPs.reject(__returnError);
};
return _returnPs;
};
promiseland.registerRemote("server", "db64fb1066e3280fe3178c0aa4936df0", "__UNIQUENAME3", __UNIQUENAME3);
y = function(){if (promiseland.profileHas("server")){
return __UNIQUENAME3.apply(this, arguments);
}else{
return promiseland.remoteExec("db64fb1066e3280fe3178c0aa4936df0", "__UNIQUENAME3", arguments);
};
};
var __UNIQUENAME4 = function(){
var _returnPs = new __Promise();
try{_returnPs.resolve("x"); return _returnPs;
}catch(__returnError){
_returnPs.reject(__returnError);
};
return _returnPs;
};
promiseland.registerRemote("client", "db64fb1066e3280fe3178c0aa4936df0", "__UNIQUENAME4", __UNIQUENAME4);
x = function(){if (promiseland.profileHas("client")){
return __UNIQUENAME4.apply(this, arguments);
}else{
return promiseland.remoteExec("db64fb1066e3280fe3178c0aa4936df0", "__UNIQUENAME4", arguments);
};
};
})();
return __module.promise.then;});
})();