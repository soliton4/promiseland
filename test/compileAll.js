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
if (!promiseland._registerModule("ab92a6411835f8f366c9cb6cfa64f1a8", __module.promise.then)){ return promiseland._getModule("ab92a6411835f8f366c9cb6cfa64f1a8"); };
(function(){
var fs;
var callback;
var i;
var filename;
var codeStr;
var jsStr;
__requireFun("fs").then(function(__UNIQUENAME1){try{fs = __UNIQUENAME1;
callback = new Callback();
fs["readdir"](".", callback["callback"]);
callback["promise"].then(function(__UNIQUENAME2){try{files = __UNIQUENAME2[1];
var __UNIQUENAME3 = new __Promise();
if(files){
i = 0;
var __UNIQUENAME5 = new __Promise();
var __UNIQUENAME4 = function(){var __UNIQUENAME6 = new __Promise();
if((i < files["length"])){callback = new Callback();
filename = files[i];
var __UNIQUENAME7 = new __Promise();
if((filename["substr"]((filename["length"] - 6)) == ".pland")){
console["log"](("processing:" + filename));
fs["readFile"](filename, {"encoding": "utf8"}, callback["callback"]);
callback["promise"].then(function(__UNIQUENAME8){try{codeStr = __UNIQUENAME8[1];
parser = new promiseland["Parser"]();
parser["parse"](codeStr).then(function(__UNIQUENAME9){try{jsStr = __UNIQUENAME9["javascript"];
callback = new Callback();
fs["writeFile"]((filename["substr"](0, (filename["length"] - 6)) + ".js"), jsStr, callback["callback"]);
callback["promise"].then(function(__UNIQUENAME10){try{__UNIQUENAME10;
console["log"]("done");
__UNIQUENAME7.resolve();}catch(__returnError){__module.reject(__returnError);
 }; });}catch(__returnError){__module.reject(__returnError);
 }; });}catch(__returnError){__module.reject(__returnError);
 }; });
}else{
__UNIQUENAME7.resolve();}; __UNIQUENAME7.then(function(){;
;
__UNIQUENAME6.resolve(true); return __UNIQUENAME6;
});}else{__UNIQUENAME6.resolve(false); return __UNIQUENAME6;
};
__UNIQUENAME6;
return __UNIQUENAME6;
};
var __UNIQUENAME11 = function(){__UNIQUENAME4().then(function(contLoop){
if (contLoop){++i;
__UNIQUENAME11();}else{__UNIQUENAME5.resolve();};
});
};
__UNIQUENAME11();
__UNIQUENAME5.then(function(){;
;
__UNIQUENAME3.resolve();});
}else{
__UNIQUENAME3.resolve();}; __UNIQUENAME3.then(function(){;
;
});}catch(__returnError){__module.reject(__returnError);
 }; });}catch(__returnError){__module.reject(__returnError);
 }; });})();
return __module.promise.then;});
})();