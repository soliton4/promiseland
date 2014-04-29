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
  var __modulePromise = new __Promise();
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
  
  
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "9f2bfe7de73bd330103c1112cef8efc3" })){ return promiseland._getModule("9f2bfe7de73bd330103c1112cef8efc3"); };
var _V11/*domoreStuff*/;try{_V11/*domoreStuff*/ = domoreStuff;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2 = new __Promise();
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V2.reject(e); }; }; };
var _V4 = function(e){ _V2.reject(e); };
var _V5/*result*/;
var _V6/*dootherStuff*/;
var _V7/*dostuff*/;
var _V12/*x*/;
_V3(function(){_V5/*result*/ = {"res": 1};
_V6/*dootherStuff*/ = function(){
_V5/*result*/["res"] = 4;;
};
_V7/*dostuff*/ = function(){
var _V8 = new __Promise();
var _V9 = function(code){ return function(res){ try{code(res);}catch(e){ _V8.reject(e); }; }; };
var _V10 = function(e){ _V8.reject(e); };
_V9(function(){_V8.resolve( _V11/*domoreStuff*/()); return _V8;
_V8.resolve(); return;;
})();
return _V8;
};
_V12/*x*/ = function(){
var _V13 = new __Promise();
var _V14 = function(code){ return function(res){ try{code(res);}catch(e){ _V13.reject(e); }; }; };
var _V15 = function(e){ _V13.reject(e); };
_V14(function(){var _V16 = new __Promise();
var _V17 = new __Promise();
var _V18/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V17.resolve(e); }; }; };
var _V19 = function(e){ _V17.resolve(e); };
_V18/*try catch*/(function(){_V7/*dostuff*/().then(_V18/*try catch*/(function(_V20){_V20;;
_V16.resolve();
}), _V19);})();
_V17.then(_V14(function(e){_V6/*dootherStuff*/();;
_V16.resolve();;
}));
_V16.then(_V14(function(){;
;
_V13.resolve(); return;;
}), _V15)})();
return _V13;
};
_V12/*x*/().then(_V3(function(_V21){_V21;;
_V2.resolve( _V5/*result*/); return _V2;
_V2.resolve(); return;;
}), _V4);})();
return _V2;
})();
promiseland._registerModule({ hashStr: "9f2bfe7de73bd330103c1112cef8efc3", "module": _V1, promising: false });
return _V1;
});
})();