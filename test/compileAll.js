(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback, errBack){
      try{
        var i = 0;
        var l = modulesAr.length;
        var args = [];
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
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
var Promise = promiseland.Promise;
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "6c97a41a697a3b3edd2b1b2efb3c36ef" })){ return promiseland._getModule("6c97a41a697a3b3edd2b1b2efb3c36ef"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "6c97a41a697a3b3edd2b1b2efb3c36ef", "module": _V1, promising: true });
var _V14/*Callback*/;try{_V14/*Callback*/ = Callback;}catch(e){};
var _V25/*console*/;try{_V25/*console*/ = console;}catch(e){};
var _V34/*promiseland*/;try{_V34/*promiseland*/ = promiseland;}catch(e){};
var _V44/*process*/;try{_V44/*process*/ = process;}catch(e){};
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*fs*/;
var _V7/*compileDir*/;
_V3(function(){;
__requireFun("fs").then(_V3(function(_V6){_V5/*fs*/ = _V6;
_V7/*compileDir*/ = (function(_V8/*parDir*/){
var _V9 = new __Promise();
var _V11 = function(code){ return function(res){ try{code(res);}catch(e){ _V9.reject(e); }; }; };
var _V12 = function(e){ _V9.reject(e); };
var _V13/*callback*/;
var _V15/*files*/;
var _V18/*i*/;
var _V22/*filename*/;
var _V23/*completeFilename*/;
var _V26/*jsStr*/;
var _V31/*codeStr*/;
var _V33/*parser*/;
var _V35/*res*/;
var _V39/*stats*/;
_V11(function(){;
_V13/*callback*/ = new _V14/*Callback*/();
_V5/*fs*/["readdir"](_V8/*parDir*/, _V13/*callback*/);;
_V13/*callback*/["promise"].then(_V11(function(_V16){_V15/*files*/ = _V16[1];
var _V17 = new __Promise();
if(_V15/*files*/){
_V18/*i*/ = 0;
var _V20 = new __Promise();
var _V19 = function(){var _V21 = new __Promise();
if((_V18/*i*/ < _V15/*files*/["length"])){_V13/*callback*/ = new _V14/*Callback*/();;
_V22/*filename*/ = _V15/*files*/[_V18/*i*/];
_V23/*completeFilename*/ = ((_V8/*parDir*/ + "/") + _V22/*filename*/);
var _V24 = new __Promise();
if((_V22/*filename*/["substr"]((_V22/*filename*/["length"] - 6)) == ".pland")){
_V25/*console*/["log"](("processing:" + _V23/*completeFilename*/));;
_V26/*jsStr*/ = "";
var _V27 = new __Promise();
var _V28 = new __Promise();
var _V29/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V28.resolve(e); }; }; };
var _V30 = function(e){ _V28.resolve(e); };
_V29/*try catch*/(function(){_V5/*fs*/["readFile"](_V23/*completeFilename*/, {"encoding": "utf8"}, _V13/*callback*/["callback"]);;
_V13/*callback*/["promise"].then(_V29/*try catch*/(function(_V32){_V31/*codeStr*/ = _V32[1];
_V33/*parser*/ = new _V34/*promiseland*/["Parser"]();
_V33/*parser*/["parse"](_V31/*codeStr*/).then(_V29/*try catch*/(function(_V36){_V35/*res*/ = _V36;
if((_V35/*res*/["errors"] && _V35/*res*/["errors"]["length"])){
_V25/*console*/["log"](_V35/*res*/["errors"][0]);;
_V26/*jsStr*/ = "";;

}else{
_V26/*jsStr*/ = _V35/*res*/["javascript"];;
};
;
_V27.resolve();
}), _V30);
;}), _V30);
;})();
_V28.then(_V11(function(_V37/*e*/){_V25/*console*/["log"](_V37/*e*/);;
_V25/*console*/["log"]("error");;
_V27.resolve();;
}));
_V27.then(_V11(function(){;
;
_V13/*callback*/ = new _V14/*Callback*/();;
_V5/*fs*/["writeFile"]((_V23/*completeFilename*/["substr"](0, (_V23/*completeFilename*/["length"] - 6)) + ".js"), _V26/*jsStr*/, _V13/*callback*/["callback"]);;
_V13/*callback*/["promise"].then(_V11(function(_V38){_V38;;
_V24.resolve();;
}), _V12);
;}), _V12)
}else{
_V13/*callback*/ = new _V14/*Callback*/();;
_V5/*fs*/["stat"](_V23/*completeFilename*/, _V13/*callback*/);;
_V13/*callback*/["promise"].then(_V11(function(_V40){_V39/*stats*/ = _V40[1];
var _V41 = new __Promise();
if((((_V22/*filename*/ != "node_modules") && _V39/*stats*/) && _V39/*stats*/["isDirectory"]())){
_V7/*compileDir*/(_V23/*completeFilename*/).then(_V11(function(_V42){_V42;;
_V41.resolve();;
}), _V12);
;
}else{
_V41.resolve();}; _V41.then(function(){;
;
_V24.resolve();;
});}), _V12);
;}; _V24.then(function(){;
;
_V21.resolve(true); return _V21;
;
});}else{_V21.resolve(false); return _V21;
};
_V21;
return _V21;
};
var _V43 = function(){_V19().then(function(contLoop){
if (contLoop){++_V18/*i*/;
_V43();}else{_V20.resolve();};
});
};
_V43();
_V20.then(function(){;
;
_V17.resolve();;
});
}else{
_V17.resolve();}; _V17.then(function(){;
;
_V9.resolve(); return;;
});}), _V12);
;})();
return _V9;
});
_V7/*compileDir*/(_V44/*process*/["cwd"]());;
_V1.resolve(); return;;
}), _V4);
;})();
return _V1;
})();
;;
return _V1});
})();