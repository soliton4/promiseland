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
  var classSystem = promiseland.classSystem; 
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
  var __classSystem = promiseland.classSystem;
  
  
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "8fb84b0996402b986a0c4e7a88dc67ce" })){ return promiseland._getModule("8fb84b0996402b986a0c4e7a88dc67ce"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "8fb84b0996402b986a0c4e7a88dc67ce", "module": _V1, promising: true });
var _V8/*Callback*/;try{_V8/*Callback*/ = Callback;}catch(e){};
var _V18/*console*/;try{_V18/*console*/ = console;}catch(e){};
var _V27/*promiseland*/;try{_V27/*promiseland*/ = promiseland;}catch(e){};
var _V30/*e*/;try{_V30/*e*/ = e;}catch(e){};
var _V33/*type:var*/ = __classSystem.getBuiltinType("var");
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*fs*/;
var _V7/*callback*/;
var _V9/*files*/;
var _V12/*i*/;
var _V16/*filename*/;
var _V19/*jsStr*/;
var _V24/*codeStr*/;
var _V26/*parser*/;
var _V28/*res*/;
_V3(function(){;
__requireFun("fs").then(_V3(function(_V6){_V5/*fs*/ = _V6;
_V7/*callback*/ = new _V8/*Callback*/();
_V5/*fs*/["readdir"](".", _V7/*callback*/);;
_V7/*callback*/["promise"].then(_V3(function(_V10){_V9/*files*/ = _V10[1];
var _V11 = new __Promise();
if(_V9/*files*/){
_V12/*i*/ = 0;
var _V14 = new __Promise();
var _V13 = function(){var _V15 = new __Promise();
if((_V12/*i*/ < _V9/*files*/["length"])){_V7/*callback*/ = new _V8/*Callback*/();;
_V16/*filename*/ = _V9/*files*/[_V12/*i*/];
var _V17 = new __Promise();
if((_V16/*filename*/["substr"]((_V16/*filename*/["length"] - 6)) == ".pland")){
_V18/*console*/["log"](("processing:" + _V16/*filename*/));;
_V19/*jsStr*/ = "";
var _V20 = new __Promise();
var _V21 = new __Promise();
var _V22/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V21.resolve(e); }; }; };
var _V23 = function(e){ _V21.resolve(e); };
_V22/*try catch*/(function(){_V5/*fs*/["readFile"](_V16/*filename*/, {"encoding": "utf8"}, _V7/*callback*/["callback"]);;
_V7/*callback*/["promise"].then(_V22/*try catch*/(function(_V25){_V24/*codeStr*/ = _V25[1];
_V26/*parser*/ = new _V27/*promiseland*/["Parser"]();
_V26/*parser*/["parse"](_V24/*codeStr*/).then(_V22/*try catch*/(function(_V29){_V28/*res*/ = _V29;
if((_V28/*res*/["errors"] && _V28/*res*/["errors"]["length"])){
_V18/*console*/["log"](_V28/*res*/["errors"][0]);;
_V19/*jsStr*/ = "";;

}else{
_V19/*jsStr*/ = _V28/*res*/["javascript"];;
};
;
_V20.resolve();
}), _V23);}), _V23);})();
_V21.then(_V3(function(e){_V18/*console*/["log"](_V30/*e*/);;
_V18/*console*/["log"]("error");;
_V20.resolve();;
}));
_V20.then(_V3(function(){;
;
_V7/*callback*/ = new _V8/*Callback*/();;
_V5/*fs*/["writeFile"]((_V16/*filename*/["substr"](0, (_V16/*filename*/["length"] - 6)) + ".js"), _V19/*jsStr*/, _V7/*callback*/["callback"]);;
_V7/*callback*/["promise"].then(_V3(function(_V31){_V31;;
_V17.resolve();;
}), _V4);}), _V4)
}else{
_V17.resolve();}; _V17.then(function(){;
;
_V15.resolve(true); return _V15;
;
});}else{_V15.resolve(false); return _V15;
};
_V15;
return _V15;
};
var _V32 = function(){_V13().then(function(contLoop){
if (contLoop){++_V12/*i*/;
_V32();}else{_V14.resolve();};
});
};
_V32();
_V14.then(function(){;
;
_V11.resolve();;
});
}else{
_V11.resolve();}; _V11.then(function(){;
;
_V1.resolve(); return;;
});}), _V4);}));})();
return _V1;
})();
;
return _V1});
})();