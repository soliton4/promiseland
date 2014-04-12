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
if (promiseland._hasModule({ hashStr: "fe1154a31ebbc08da636699b8d859926" })){ return promiseland._getModule("fe1154a31ebbc08da636699b8d859926"); };
var __UNIQUENAME1 = (function(){
"use strict";
var __UNIQUENAME2 = new __Promise();
try{var fs;
var callback;
var files;
var i;
var filename;
var codeStr;
var parser;
var jsStr;
__requireFun("fs").then(function(__UNIQUENAME3){try{fs = __UNIQUENAME3;
callback = new Callback();
fs["readdir"](".", callback["callback"]);
callback["promise"].then(function(__UNIQUENAME4){try{files = __UNIQUENAME4[1];
var __UNIQUENAME5 = new __Promise();
if(files){
i = 0;
var __UNIQUENAME7 = new __Promise();
var __UNIQUENAME6 = function(){var __UNIQUENAME8 = new __Promise();
if((i < files["length"])){callback = new Callback();
filename = files[i];
var __UNIQUENAME9 = new __Promise();
if((filename["substr"]((filename["length"] - 6)) == ".pland")){
console["log"](("processing:" + filename));
fs["readFile"](filename, {"encoding": "utf8"}, callback["callback"]);
callback["promise"].then(function(__UNIQUENAME10){try{codeStr = __UNIQUENAME10[1];
parser = new promiseland["Parser"]();
console["log"]("step0");
parser["parse"](codeStr).then(function(__UNIQUENAME11){try{jsStr = __UNIQUENAME11["javascript"];
console["log"]("step2");
callback = new Callback();
fs["writeFile"]((filename["substr"](0, (filename["length"] - 6)) + ".js"), jsStr, callback["callback"]);
callback["promise"].then(function(__UNIQUENAME12){try{__UNIQUENAME12;
console["log"]("done");
__UNIQUENAME9.resolve();}catch(__returnError){__UNIQUENAME2.reject(__returnError);
 }; });}catch(__returnError){__UNIQUENAME2.reject(__returnError);
 }; });}catch(__returnError){__UNIQUENAME2.reject(__returnError);
 }; });
}else{
__UNIQUENAME9.resolve();}; __UNIQUENAME9.then(function(){;
;
__UNIQUENAME8.resolve(true); return __UNIQUENAME8;
});}else{__UNIQUENAME8.resolve(false); return __UNIQUENAME8;
};
__UNIQUENAME8;
return __UNIQUENAME8;
};
var __UNIQUENAME13 = function(){__UNIQUENAME6().then(function(contLoop){
if (contLoop){++i;
__UNIQUENAME13();}else{__UNIQUENAME7.resolve();};
});
};
__UNIQUENAME13();
__UNIQUENAME7.then(function(){;
;
__UNIQUENAME5.resolve();});
}else{
__UNIQUENAME5.resolve();}; __UNIQUENAME5.then(function(){;
;
});}catch(__returnError){__UNIQUENAME2.reject(__returnError);
 }; });}catch(__returnError){__UNIQUENAME2.reject(__returnError);
 }; });}catch(__returnError){
__UNIQUENAME2.reject(__returnError);
};
return __UNIQUENAME2;
})();
promiseland._registerModule({ hashStr: "fe1154a31ebbc08da636699b8d859926", "module": __UNIQUENAME1, promising: false });
return __UNIQUENAME1;
});
})();