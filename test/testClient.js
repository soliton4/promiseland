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
    if (promiseland._hasModule({ hashStr: "78c60bf6b6a41d521d38cd3a10de603f" })){ return promiseland._getModule("78c60bf6b6a41d521d38cd3a10de603f"); };
var _V2/*promiseland*/;try{_V2/*promiseland*/ = promiseland;}catch(e){};
var _V9/*io*/;try{_V9/*io*/ = io;}catch(e){};
var _V12/*undefined*/;try{_V12/*undefined*/ = undefined;}catch(e){};
var _V15/*window*/;try{_V15/*window*/ = window;}catch(e){};
var _V16/*KeysValues*/;try{_V16/*KeysValues*/ = KeysValues;}catch(e){};
var _V17/*i*/;try{_V17/*i*/ = i;}catch(e){};
var _V18/*KeyValue*/;try{_V18/*KeyValue*/ = KeyValue;}catch(e){};
var _V24/*console*/;try{_V24/*console*/ = console;}catch(e){};
var _V1 = (function(){
"use strict";
var _V3/*ServerProfile*/;
var _V4/*ServerConnection*/;
var _V8/*serverProfile*/;
var _V5/*socket*/;
var _V19/*querySt*/;
var _V11/*runTests*/;
var _V19/*querySt*/ = function(_V13/*Key*/){
var _V14/*url*/;
;
_V14/*url*/ = _V15/*window*/["location"]["href"];
_V16/*KeysValues*/ = _V14/*url*/["split"](/[\?&]+/);;
for(_V17/*i*/ = 0;(_V17/*i*/ < _V16/*KeysValues*/["length"]);_V17/*i*/++){{_V18/*KeyValue*/ = _V16/*KeysValues*/[_V17/*i*/]["split"]("=");;
if((_V18/*KeyValue*/[0] == _V13/*Key*/)){
return _V18/*KeyValue*/[1];;
};
;
}};
;
;
};
;
_V2/*promiseland*/["set"]("profile", "client");;
_V3/*ServerProfile*/ = (function(){
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
_V3/*ServerProfile*/["prototype"] = new _V2/*promiseland*/["ProfileBaseClass"]();;
_V4/*ServerConnection*/ = (function(_V5/*socket*/){
var _V6/*self*/;
;
this["socket"] = _V5/*socket*/;;
_V6/*self*/ = this;
_V5/*socket*/["on"]("pl", (function(_V7/*data*/){
;
_V6/*self*/["emit"]("data", _V7/*data*/);;
;
}));;
this["send"] = (function(_V7/*data*/){
;
_V5/*socket*/["emit"]("pl", _V7/*data*/);;
;
});;
;
});
_V4/*ServerConnection*/["prototype"] = new _V2/*promiseland*/["ConnectionBaseClass"]();;
_V8/*serverProfile*/ = new _V3/*ServerProfile*/();
_V2/*promiseland*/["addProfile"](_V8/*serverProfile*/);;
_V5/*socket*/ = _V9/*io*/["connect"]();
_V5/*socket*/["on"]("connect", (function(){
var _V10/*connection*/;
;
_V10/*connection*/ = new _V4/*ServerConnection*/(_V5/*socket*/);
_V8/*serverProfile*/["connection"] = _V10/*connection*/;;
_V8/*serverProfile*/["emit"]("connection", _V10/*connection*/);;
_V11/*runTests*/();;
;
}));;
_V5/*socket*/["on"]("disconnect", (function(){
;
_V8/*serverProfile*/["connection"]["emit"]("disconnect");;
_V8/*serverProfile*/["connection"] = _V12/*undefined*/;;
;
}));;
_V19/*querySt*/;
;
_V11/*runTests*/ = (function(){
var _V20 = new __Promise();
var _V22 = function(code){ return function(res){ try{code(res);}catch(e){ _V20.reject(e); }; }; };
var _V23 = function(e){ _V20.reject(e); };
var _V25/*testObj*/;
var _V28/*collector*/;
var _V30/*type*/;
_V22(function(){;
_V24/*console*/["log"]("running tests");;
__requireFun("test/simpleTests").then(_V22(function(_V26){_V25/*testObj*/ = _V26;
__requireFun("test/frameTests").then(_V22(function(_V27){_V27;;
__requireFun("./testCollector").then(_V22(function(_V29){_V28/*collector*/ = _V29;
_V30/*type*/ = (_V19/*querySt*/("type") || "unknown");
_V28/*collector*/["postResult"](_V30/*type*/, _V25/*testObj*/);;
_V28/*collector*/["waitForFinish"](_V30/*type*/).then(_V22(function(_V31){_V31;;
_V15/*window*/["close"]();;
_V20.resolve(); return;;
}), _V23);
;}), _V23);
;}), _V23);
;}), _V23);
;})();
return _V20;
});
;
})();
;return _V1;
});
})();