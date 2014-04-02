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
    defineFun = define;
    requireFun = require;
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  
  defineFun(["promiseland"], function(promiseLand){
var __Promise = promiseLand.Promise;
var __module = new __Promise();
var Callback = promiseLand.Callback;
(function(){
var y;
var x;
var __UNIQUENAME1 = function(){
var _returnPs = new __Promise();
try{}catch(__returnError){
_returnPs.reject(__returnError);
};
return _returnPs;
};;
promiseLand.registerRemote("server", "e1a74aa71dabe00b7b0fc300bbcc8e5f", "__UNIQUENAME1", uniqueNameStr);
y = function(){if (promiseLand.profileHas("server")){
return __UNIQUENAME1.apply(this, arguments);
}else{
return promiseLand.remoteExec("e1a74aa71dabe00b7b0fc300bbcc8e5f", "__UNIQUENAME1", arguments);
};
};
var __UNIQUENAME2 = function(){
var _returnPs = new __Promise();
try{_returnPs.resolve("x"); return _returnPs;
}catch(__returnError){
_returnPs.reject(__returnError);
};
return _returnPs;
};;
promiseLand.registerRemote("client", "e1a74aa71dabe00b7b0fc300bbcc8e5f", "__UNIQUENAME2", uniqueNameStr);
x = function(){if (promiseLand.profileHas("client")){
return __UNIQUENAME2.apply(this, arguments);
}else{
return promiseLand.remoteExec("e1a74aa71dabe00b7b0fc300bbcc8e5f", "__UNIQUENAME2", arguments);
};
};
})();
return __module.promise.then;});
})();