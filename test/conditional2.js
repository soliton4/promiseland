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
(function(){
var somefun;
somefun = function(){
var _returnPs = new __Promise();
try{_returnPs.resolve(1); return _returnPs;
}catch(__returnError){
_returnPs.reject(__returnError);
};
return _returnPs;
};
__module.resolve({"fun": function(){
var _returnPs = new __Promise();
try{var a;
a = 1;
var __UNIQUENAME1 = new __Promise();
if(((a + 1) == 2)){
somefun().then(function(__UNIQUENAME2){try{a = (a + __UNIQUENAME2);
__UNIQUENAME1.resolve();}catch(__returnError){_returnPs.reject(__returnError);
 }; });
}else{
__UNIQUENAME1.resolve();}; __UNIQUENAME1.then(function(){;
;
if((a == 2)){
_returnPs.resolve(4); return _returnPs;
};
;
_returnPs.resolve(0); return _returnPs;
});}catch(__returnError){
_returnPs.reject(__returnError);
};
return _returnPs;
}}); return __module;
})();
return __module.promise.then;});
})();