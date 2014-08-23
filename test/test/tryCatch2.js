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
if (promiseland._hasModule({ hashStr: "9f2bfe7de73bd330103c1112cef8efc3" })){ return promiseland._getModule("9f2bfe7de73bd330103c1112cef8efc3"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "9f2bfe7de73bd330103c1112cef8efc3", "module": _V1, promising: true });
var _V12/*domoreStuff*/;try{_V12/*domoreStuff*/ = domoreStuff;}catch(e){};
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*result*/;
var _V6/*dootherStuff*/;
var _V7/*dostuff*/;
var _V13/*x*/;
_V3(function(){;
_V5/*result*/ = {"res": 1};
_V6/*dootherStuff*/ = (function(){
;
_V5/*result*/["res"] = 4;;
;
});
_V7/*dostuff*/ = (function(){
var _V8 = new __Promise();
var _V10 = function(code){ return function(res){ try{code(res);}catch(e){ _V8.reject(e); }; }; };
var _V11 = function(e){ _V8.reject(e); };
_V10(function(){;
_V8.resolve(_V12/*domoreStuff*/()); return;;
_V8.resolve(); return;;
})();
return _V8;
});
_V13/*x*/ = (function(){
var _V14 = new __Promise();
var _V15 = function(code){ return function(res){ try{code(res);}catch(e){ _V14.reject(e); }; }; };
var _V16 = function(e){ _V14.reject(e); };
_V15(function(){;
var _V17 = new __Promise();
var _V18 = new __Promise();
var _V19/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V18.resolve(e); }; }; };
var _V20 = function(e){ _V18.resolve(e); };
_V19/*try catch*/(function(){_V7/*dostuff*/().then(_V19/*try catch*/(function(_V21){_V21;;
_V17.resolve();
}), _V20);
;})();
_V18.then(_V15(function(_V22/*e*/){_V6/*dootherStuff*/();;
_V17.resolve();;
}));
_V17.then(_V15(function(){;
;
_V14.resolve(); return;;
}), _V16)})();
return _V14;
});
_V13/*x*/().then(_V3(function(_V23){_V23;;
_V1.resolve(_V5/*result*/); return;;
_V1.resolve(); return;;
}), _V4);
;})();
return _V1;
})();
;;
return _V1});
})();