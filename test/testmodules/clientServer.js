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
var x;
var __UNIQUENAME1 = function(){
var _returnPs = new __Promise();
try{console["log"]("yes yes yes!!!");
}catch(__returnError){
_returnPs.reject(__returnError);
};
return _returnPs;
};;
promiseLand.registerRemote("server", "c5af9123e53c0d7bd9249509d3564af3", "__UNIQUENAME1", __UNIQUENAME1);
x = function(){if (promiseLand.profileHas("server")){
return __UNIQUENAME1.apply(this, arguments);
}else{
return promiseLand.remoteExec("c5af9123e53c0d7bd9249509d3564af3", "__UNIQUENAME1", arguments);
};
};
setTimeout(function(){
x();
}, 1000);
})();
return __module.promise.then;});
})();