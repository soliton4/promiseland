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
if (promiseland._hasModule({ hashStr: "25bcf5ef1698c801a9faad645665ceec" })){ return promiseland._getModule("25bcf5ef1698c801a9faad645665ceec"); };
var _V8/*Callback*/;try{_V8/*Callback*/ = Callback;}catch(e){};
var _V18/*console*/;try{_V18/*console*/ = console;}catch(e){};
var _V26/*promiseland*/;try{_V26/*promiseland*/ = promiseland;}catch(e){};
var _V30/*e*/;try{_V30/*e*/ = e;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2 = new __Promise();
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V2.reject(e); }; }; };
var _V4 = function(e){ _V2.reject(e); };
_V3(function(){var _V5/*fs*/;
var _V7/*callback*/;
var _V9/*files*/;
var _V12/*i*/;
var _V16/*filename*/;
var _V23/*codeStr*/;
var _V25/*parser*/;
var _V27/*jsStr*/;
__requireFun("fs").then(_V3(function(_V6){_V5/*fs*/ = _V6;
_V7/*callback*/ = new _V8/*Callback*/();
_V5/*fs*/["readdir"](".", _V7/*callback*/["callback"]);
_V7/*callback*/["promise"].then(_V3(function(_V10){_V9/*files*/ = _V10[1];
var _V11 = new __Promise();
if(_V9/*files*/){
_V12/*i*/ = 0;
var _V14 = new __Promise();
var _V13 = function(){var _V15 = new __Promise();
if((_V12/*i*/ < _V9/*files*/["length"])){_V7/*callback*/ = new _V8/*Callback*/();
_V16/*filename*/ = _V9/*files*/[_V12/*i*/];
var _V17 = new __Promise();
if((_V16/*filename*/["substr"]((_V16/*filename*/["length"] - 6)) == ".pland")){
_V18/*console*/["log"](("processing:" + _V16/*filename*/));
var _V19 = new __Promise();
var _V20 = new __Promise();
var _V21/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V20.reject(e); }; }; };
var _V22 = function(e){ _V20.reject(e); };
_V21/*try catch*/(function(){_V5/*fs*/["readFile"](_V16/*filename*/, {"encoding": "utf8"}, _V7/*callback*/["callback"]);
_V7/*callback*/["promise"].then(_V21/*try catch*/(function(_V24){_V23/*codeStr*/ = _V24[1];
_V25/*parser*/ = new _V26/*promiseland*/["Parser"]();
_V18/*console*/["log"]("step0");
_V25/*parser*/["parse"](_V23/*codeStr*/).then(_V21/*try catch*/(function(_V28){_V27/*jsStr*/ = _V28["javascript"];
_V18/*console*/["log"]("step2");
_V7/*callback*/ = new _V8/*Callback*/();
_V5/*fs*/["writeFile"]((_V16/*filename*/["substr"](0, (_V16/*filename*/["length"] - 6)) + ".js"), _V27/*jsStr*/, _V7/*callback*/["callback"]);
_V7/*callback*/["promise"].then(_V21/*try catch*/(function(_V29){_V29;
_V18/*console*/["log"]("done");
_V20.resolve();}), _V22);}), _V22);}), _V22);})();
_V20.then(function(){_V19.resolve();}, _V3(function(e){
_V18/*console*/["log"](_V30/*e*/);
_V18/*console*/["log"]("error");
_V19.resolve();}));
_V19.then(_V3(function(){;
;
_V17.resolve();}), _V4)
}else{
_V17.resolve();}; _V17.then(function(){;
;
_V15.resolve(true); return _V15;
});}else{_V15.resolve(false); return _V15;
};
_V15;
return _V15;
};
var _V31 = function(){_V13().then(function(contLoop){
if (contLoop){++_V12/*i*/;
_V31();}else{_V14.resolve();};
});
};
_V31();
_V14.then(function(){;
;
_V11.resolve();});
}else{
_V11.resolve();}; _V11.then(function(){;
;
_V2.resolve(); return;});}), _V4);}));})();
return _V2;
})();
promiseland._registerModule({ hashStr: "25bcf5ef1698c801a9faad645665ceec", "module": _V1, promising: false });
return _V1;
});
})();