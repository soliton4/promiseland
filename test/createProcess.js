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
if (promiseland._hasModule({ hashStr: "7bcee4e8f400a6b3c39266689c1fbb58" })){ return promiseland._getModule("7bcee4e8f400a6b3c39266689c1fbb58"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "7bcee4e8f400a6b3c39266689c1fbb58", "module": _V1, promising: true });
var _V14/*console*/;try{_V14/*console*/ = console;}catch(e){};
var _V17/*Callback*/;try{_V17/*Callback*/ = Callback;}catch(e){};
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*child_process*/;
var _V7/*spawn*/;
var _V8/*fork*/;
_V3(function(){;
__requireFun("child_process").then(_V3(function(_V6){_V5/*child_process*/ = _V6;
_V7/*spawn*/ = _V5/*child_process*/["spawn"];
_V8/*fork*/ = _V5/*child_process*/["fork"];
_V1.resolve((function(_V9/*cmdStr*/, _V10/*parAr*/, _V11/*options*/){
var _V12/*child*/;
var _V16/*cb*/;
var _V18/*result*/;
;
if(! _V10/*parAr*/){
_V10/*parAr*/ = [];;
};
;
_V12/*child*/;
if((_V11/*options*/ && _V11/*options*/["fork"])){
_V12/*child*/ = _V8/*fork*/(_V9/*cmdStr*/, _V10/*parAr*/, _V11/*options*/);;

}else{
_V12/*child*/ = _V7/*spawn*/(_V9/*cmdStr*/, _V10/*parAr*/);;
};
;
_V12/*child*/["on"]("error", (function(_V13/*err*/){
;
_V14/*console*/["log"]("spawn error:");;
_V14/*console*/["log"](_V13/*err*/);;
;
}));;
if(_V12/*child*/["stdout"]){
_V12/*child*/["stdout"]["on"]("data", (function(_V15/*data*/){
;
_V14/*console*/["log"](("stdout: " + _V15/*data*/));;
;
}));;
_V12/*child*/["stdout"]["on"]("error", (function(_V15/*data*/){
;
_V14/*console*/["log"](("stdout error: " + _V15/*data*/));;
;
}));;
};
;
if(_V12/*child*/["stderr"]){
_V12/*child*/["stderr"]["on"]("data", (function(_V15/*data*/){
;
_V14/*console*/["log"](("stderr: " + _V15/*data*/));;
;
}));;
};
;
_V16/*cb*/ = new _V17/*Callback*/();
_V12/*child*/["on"]("close", _V16/*cb*/);;
_V18/*result*/ = (function(){
var _V19 = new __Promise();
var _V21 = function(code){ return function(res){ try{code(res);}catch(e){ _V19.reject(e); }; }; };
var _V22 = function(e){ _V19.reject(e); };
_V21(function(){;
_V16/*cb*/["promise"].then(_V21(function(_V23){_V19.resolve(_V23[0]); return;;
_V19.resolve(); return;;
}), _V22);
;})();
return _V19;
});
return {"child": _V12/*child*/,
"result": _V18/*result*/()};;
;
})); return;;
_V1.resolve(); return;;
}), _V4);
;})();
return _V1;
})();
;;
return _V1});
})();