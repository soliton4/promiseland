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
    if (promiseland._hasModule({ hashStr: "0e592225f9adb7e74dd217702589e9e7" })){ return promiseland._getModule("0e592225f9adb7e74dd217702589e9e7"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "0e592225f9adb7e74dd217702589e9e7", "module": _V1, promising: true });
var _V5/*promiseland*/;try{_V5/*promiseland*/ = promiseland;}catch(e){};
var _V12/*io*/;try{_V12/*io*/ = io;}catch(e){};
var _V14/*undefined*/;try{_V14/*undefined*/ = undefined;}catch(e){};
var _V31/*document*/;try{_V31/*document*/ = document;}catch(e){};
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V6/*ServerProfile*/;
var _V7/*ServerConnection*/;
var _V11/*serverProfile*/;
var _V8/*socket*/;
var _V15/*Button*/;
var _V17/*TableContainer*/;
var _V19/*Text*/;
var _V21/*main*/;
var _V23/*tc*/;
var _V24/*runTests*/;
var _V41/*b*/;
_V3(function(){;
_V5/*promiseland*/["set"]("profile", "client");;
_V6/*ServerProfile*/ = (function(){
;
this["name"] = (function(){
;
return "server";;
;
});;
this["find"] = (function(){
;
return this["connection"];;
;
});;
;
});
_V6/*ServerProfile*/["prototype"] = new _V5/*promiseland*/["ProfileBaseClass"]();;
_V7/*ServerConnection*/ = (function(_V8/*socket*/){
var _V9/*self*/;
;
this["socket"] = _V8/*socket*/;;
_V9/*self*/ = this;
_V8/*socket*/["on"]("pl", (function(_V10/*data*/){
;
_V9/*self*/["emit"]("data", _V10/*data*/);;
;
}));;
this["send"] = (function(_V10/*data*/){
;
_V8/*socket*/["emit"]("pl", _V10/*data*/);;
;
});;
;
});
_V7/*ServerConnection*/["prototype"] = new _V5/*promiseland*/["ConnectionBaseClass"]();;
_V11/*serverProfile*/ = new _V6/*ServerProfile*/();
_V5/*promiseland*/["addProfile"](_V11/*serverProfile*/);;
_V8/*socket*/ = _V12/*io*/["connect"]();
_V8/*socket*/["on"]("connect", (function(){
var _V13/*connection*/;
;
_V13/*connection*/ = new _V7/*ServerConnection*/(_V8/*socket*/);
_V11/*serverProfile*/["connection"] = _V13/*connection*/;;
_V11/*serverProfile*/["emit"]("connection", _V13/*connection*/);;
;
}));;
_V8/*socket*/["on"]("disconnect", (function(){
;
_V11/*serverProfile*/["connection"]["emit"]("disconnect");;
_V11/*serverProfile*/["connection"] = _V14/*undefined*/;;
;
}));;
__requireFun("dijit/form/Button").then(_V3(function(_V16){_V15/*Button*/ = _V16;
__requireFun("dojox/layout/TableContainer").then(_V3(function(_V18){_V17/*TableContainer*/ = _V18;
__requireFun("./Text").then(_V3(function(_V20){_V19/*Text*/ = _V20;
__requireFun("testConsole/main").then(_V3(function(_V22){_V21/*main*/ = _V22;
_V23/*tc*/;
_V24/*runTests*/ = (function(){
var _V25 = new __Promise();
var _V27 = function(code){ return function(res){ try{code(res);}catch(e){ _V25.reject(e); }; }; };
var _V28 = function(e){ _V25.reject(e); };
var _V29/*results*/;
var _V32/*f*/;
var _V33/*t*/;
var _V34/*testRes*/;
var _V35/*cnt*/;
var _V36/*successCnt*/;
var _V37/*testName*/;
var _V38/*errorStr*/;
var _V39/*textStr*/;
var _V40/*w*/;
_V27(function(){;
_V21/*main*/["runTests"]().then(_V27(function(_V30){_V29/*results*/ = _V30;
if(_V23/*tc*/){
_V23/*tc*/["destroy"]();;
};
;
_V23/*tc*/ = new _V17/*TableContainer*/({});;
_V23/*tc*/["placeAt"](_V31/*document*/["body"]);;
if(_V29/*results*/["failed"]){
_V32/*f*/ = new _V19/*Text*/({"label": "failed",
"text": "-"});
_V23/*tc*/["addChild"](_V32/*f*/);;

}else{
_V33/*t*/;
for(_V33/*t*/ in _V29/*results*/){_V34/*testRes*/ = _V29/*results*/[_V33/*t*/];
_V35/*cnt*/ = 0;
_V36/*successCnt*/ = 0;
_V37/*testName*/;
_V38/*errorStr*/ = "";
for(_V37/*testName*/ in _V34/*testRes*/){++_V35/*cnt*/;;
if(_V34/*testRes*/[_V37/*testName*/]){
++_V36/*successCnt*/;;

}else{
_V38/*errorStr*/ += (_V37/*testName*/ + " failed; \n");;
};
;
};
;
_V39/*textStr*/ = (("run " + _V35/*cnt*/) + " tests. \n");
_V39/*textStr*/ += ((_V35/*cnt*/ - _V36/*successCnt*/) + " failed. \n");;
_V39/*textStr*/ += _V38/*errorStr*/;;
_V40/*w*/ = new _V19/*Text*/({"label": _V33/*t*/,
"text": _V39/*textStr*/});
_V23/*tc*/["addChild"](_V40/*w*/);;
};
;
};
;
_V23/*tc*/["startup"]();;
_V25.resolve(); return;;
}), _V28);
;})();
return _V25;
});
_V41/*b*/ = new _V15/*Button*/({"label": "test",
"onClick": _V24/*runTests*/});
_V41/*b*/["placeAt"](_V31/*document*/["body"]);;
_V1.resolve(); return;;
}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;})();
return _V1;
})();
;;
return _V1});
})();