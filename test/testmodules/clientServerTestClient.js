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
    if (promiseland._hasModule({ hashStr: "063b02b45bab7047f0c7ef55fd001621" })){ return promiseland._getModule("063b02b45bab7047f0c7ef55fd001621"); };
var _V2/*promiseland*/;try{_V2/*promiseland*/ = promiseland;}catch(e){};
var _V9/*io*/;try{_V9/*io*/ = io;}catch(e){};
var _V12/*undefined*/;try{_V12/*undefined*/ = undefined;}catch(e){};
var _V1 = (function(){
"use strict";
var _V3/*ServerProfile*/;
var _V4/*ServerConnection*/;
var _V8/*serverProfile*/;
var _V5/*socket*/;
var _V11/*runTests*/;
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
_V11/*runTests*/ = (function(){
var _V13 = new __Promise();
var _V15 = function(code){ return function(res){ try{code(res);}catch(e){ _V13.reject(e); }; }; };
var _V16 = function(e){ _V13.reject(e); };
_V15(function(){;
__requireFun("testmodules/syncMember").then(_V15(function(_V17){_V17;;
_V13.resolve(); return;;
}), _V16);
;})();
return _V13;
});
;
})();
;return _V1;
});
})();