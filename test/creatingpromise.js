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
if (promiseland._hasModule({ hashStr: "7e2ff512946bcef40a808431919fd11a" })){ return promiseland._getModule("7e2ff512946bcef40a808431919fd11a"); };
var _V1 = (function(){
"use strict";
var _V2/*b*/;
;
_V2/*b*/ = (function(){
var _V3 = new __Promise();
var _V5 = function(code){ return function(res){ try{code(res);}catch(e){ _V3.reject(e); }; }; };
var _V6 = function(e){ _V3.reject(e); };
_V5(function(){;
_V3.resolve(); return;;
})();
return _V3;
});
return {"fun": (function(){
var _V7 = new __Promise();
var _V8 = function(code){ return function(res){ try{code(res);}catch(e){ _V7.reject(e); }; }; };
var _V9 = function(e){ _V7.reject(e); };
_V8(function(){;
var _V10 = new __Promise();
if((1 < 0)){
_V2/*b*/.then(_V8(function(_V11){_V11;;
_V10.resolve();;
}), _V9);
;
}else{
_V10.resolve();}; _V10.then(function(){;
;
_V7.resolve(4); return;;
_V7.resolve(); return;;
});})();
return _V7;
})};;
;
})();
;promiseland._registerModule({ hashStr: "7e2ff512946bcef40a808431919fd11a", "module": _V1, promising: false });
return _V1;
});
})();