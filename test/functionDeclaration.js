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
if (promiseland._hasModule({ hashStr: "eebfd8846a03586e8029663b626fa333" })){ return promiseland._getModule("eebfd8846a03586e8029663b626fa333"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "eebfd8846a03586e8029663b626fa333", "module": _V1, promising: true });
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*fmain*/;
var _V5/*fmain*/ = function(){
var _V7 = new __Promise();
var _V9 = function(code){ return function(res){ try{code(res);}catch(e){ _V7.reject(e); }; }; };
var _V10 = function(e){ _V7.reject(e); };
var _V11/*fa*/;
var _V12/*res*/;
var _V13/*fb*/;
var _V14/*fc*/;
var _V11/*fa*/ = function(){
;
return 1;;
;
};
var _V13/*fb*/ = function(){
;
return 2;;
;
};
var _V14/*fc*/ = function(){
;
return 3;;
;
};
_V9(function(){;
_V11/*fa*/;
;
_V12/*res*/ = ((_V11/*fa*/() + _V13/*fb*/()) + _V14/*fc*/());
_V13/*fb*/;
;
_V7.resolve(_V12/*res*/); return;;
var _V15 = new __Promise();
if(false){
_V13/*fb*/().then(_V9(function(_V16){_V16;;
_V15.resolve();;
}), _V10);
;
}else{
_V15.resolve();}; _V15.then(function(){;
;
_V14/*fc*/;
;
_V7.resolve(); return;;
});})();
return _V7;
};
_V3(function(){;
_V5/*fmain*/().then(_V3(function(_V6){if((_V6 == 6)){
_V1.resolve({"success": true}); return;;
};
;
_V1.resolve({"success": false}); return;;
_V5/*fmain*/;
;
_V1.resolve(); return;;
}), _V4);
;})();
return _V1;
})();
;;
return _V1});
})();