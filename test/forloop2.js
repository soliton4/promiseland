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
var somefun;
somefun = function(par){
var _returnPs = new __Promise();
try{var c;
c = new Callback();
setTimeout(c["callback"], 100);
c["promise"].then(function(__UNIQUENAME1){try{__UNIQUENAME1;
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
var i;
a = 1;
i = 0;
i = 0;
var __UNIQUENAME4 = new __Promise();
var __UNIQUENAME3 = function(){var __UNIQUENAME5 = new __Promise();
if((i < 4)){a = (a + 1);
__UNIQUENAME5.resolve(true); return __UNIQUENAME5;
}else{__UNIQUENAME5.resolve(false); return __UNIQUENAME5;
};
__UNIQUENAME5;
return __UNIQUENAME5;
};
var __UNIQUENAME6 = function(){__UNIQUENAME3().then(function(contLoop){
if (contLoop){somefun(i).then(function(__UNIQUENAME2){try{i = __UNIQUENAME2;
__UNIQUENAME6();}catch(__returnError){_returnPs.reject(__returnError);
 }; });}else{__UNIQUENAME4.resolve();};
});
};
__UNIQUENAME6();
__UNIQUENAME4.then(function(){;
;
if((a == 5)){
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