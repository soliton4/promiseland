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
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "2c4ae3017f175bf1f7b91699d6625b7e" })){ return promiseland._getModule("2c4ae3017f175bf1f7b91699d6625b7e"); };
var _V6/*Promise*/;try{_V6/*Promise*/ = Promise;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*results*/;
var _V3/*finishObj*/;
var _V4/*getResultPromise*/;
var _V7/*getFinishPromise*/;
var _V8/*postResult*/;
var _V16/*finish*/;
var _V17/*waitForFinish*/;
;
_V2/*results*/ = {};
_V3/*finishObj*/ = {};
_V4/*getResultPromise*/ = (function(_V5/*type*/){
;
if(_V2/*results*/[_V5/*type*/]){
return _V2/*results*/[_V5/*type*/];;
};
;
_V2/*results*/[_V5/*type*/] = new _V6/*Promise*/();;
return _V2/*results*/[_V5/*type*/];;
;
});
_V7/*getFinishPromise*/ = (function(_V5/*type*/){
;
if(! _V3/*finishObj*/[_V5/*type*/]){
_V3/*finishObj*/[_V5/*type*/] = new _V6/*Promise*/();;
};
;
return _V3/*finishObj*/[_V5/*type*/];;
;
});
_V8/*postResult*/ = ((function(f){
promiseland.registerRemote("server", "2c4ae3017f175bf1f7b91699d6625b7e", "_V14", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
var _V15/*temp returnpromise*/ = new __Promise();

promiseland.remoteExec("2c4ae3017f175bf1f7b91699d6625b7e", "_V14", arguments, _V15/*temp returnpromise*/);
return _V15/*temp returnpromise*/;
}
};
})(function(_V5/*type*/, _V9/*res*/){
var _V10 = new __Promise();
var _V12 = function(code){ return function(res){ try{code(res);}catch(e){ _V10.reject(e); }; }; };
var _V13 = function(e){ _V10.reject(e); };
_V12(function(){;
_V4/*getResultPromise*/(_V5/*type*/)["resolve"](_V9/*res*/);;
_V10.resolve(); return;;
})();
return _V10;
}));
_V16/*finish*/ = (function(_V5/*type*/){
;
_V7/*getFinishPromise*/(_V5/*type*/)["resolve"]();;
;
});
_V17/*waitForFinish*/ = ((function(f){
promiseland.registerRemote("server", "2c4ae3017f175bf1f7b91699d6625b7e", "_V22", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
var _V23/*temp returnpromise*/ = new __Promise();

promiseland.remoteExec("2c4ae3017f175bf1f7b91699d6625b7e", "_V22", arguments, _V23/*temp returnpromise*/);
return _V23/*temp returnpromise*/;
}
};
})(function(_V5/*type*/){
var _V18 = new __Promise();
var _V19 = function(code){ return function(res){ try{code(res);}catch(e){ _V18.reject(e); }; }; };
var _V20 = function(e){ _V18.reject(e); };
_V19(function(){;
_V7/*getFinishPromise*/(_V5/*type*/).then(_V19(function(_V21){_V21;;
_V18.resolve(true); return;;
_V18.resolve(); return;;
}), _V20);
;})();
return _V18;
}));
return {"getResultPromise": _V4/*getResultPromise*/,
"postResult": _V8/*postResult*/,
"finish": _V16/*finish*/,
"waitForFinish": _V17/*waitForFinish*/};;
;
})();
;return _V1;
});
})();