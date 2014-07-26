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
  
defineFun([], function(){ var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

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
if (promiseland._hasModule({ hashStr: "a6076e949f2f20c5de497d86852c849d" })){ return promiseland._getModule("a6076e949f2f20c5de497d86852c849d"); };
var _V8/*undefined*/;try{_V8/*undefined*/ = undefined;}catch(e){};
var _V9/*stringifyStr*/;try{_V9/*stringifyStr*/ = stringifyStr;}catch(e){};
var _V12/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V2/*complete*/;
;
;
_V2/*complete*/ = (function(_V3/*original*/){
var _V4/*path*/;
var _V5/*resStr*/;
var _V6/*_run*/;
var _V11/*res*/;
;
_V4/*path*/ = [];
_V5/*resStr*/ = "";
_V6/*_run*/ = (function(_V7/*o*/){
var _V10/*m*/;
;
switch (_V7/*o*/){
case null:
_V5/*resStr*/ += "null";;
break;;
case _V8/*undefined*/:
_V5/*resStr*/ += "undefined";;
break;;
default:
switch (typeof_V7/*o*/){
case "number":
_V5/*resStr*/ += _V7/*o*/;;
break;;
case "string":
_V5/*resStr*/ += _V9/*stringifyStr*/(_V7/*o*/);;
break;;
case "function":
_V5/*resStr*/ += "null";;
break;;
case "object":
_V5/*resStr*/ += "{";;
for(_V10/*m*/ in _V7/*o*/){_V5/*resStr*/ += _V9/*stringifyStr*/(_V10/*m*/);;
_V5/*resStr*/ += ":";;
_V6/*_run*/(_V7/*o*/[_V10/*m*/]);;
};
;
_V5/*resStr*/ += "}";;
break;;
default:
throw {"id": 1301,
"msg": (("type " + typeof_V7/*o*/) + " can not be serialized")};
}
;
;
}
;
;
_V6/*_run*/(_V3/*original*/);;
return _V5/*resStr*/;;
;
});
_V11/*res*/ = _V6/*_run*/(_V3/*original*/);
;
});
;
})();
promiseland._registerModule({ hashStr: "a6076e949f2f20c5de497d86852c849d", "module": _V1, promising: false });
return _V1;
}; return function(){ return __execute.apply(null, arguments); } });
})();