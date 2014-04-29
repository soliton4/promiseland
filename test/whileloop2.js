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
if (promiseland._hasModule({ hashStr: "9c6570a898dcb766ee6ffe5c83918b6e" })){ return promiseland._getModule("9c6570a898dcb766ee6ffe5c83918b6e"); };
var _V8/*Callback*/;try{_V8/*Callback*/ = Callback;}catch(e){};
var _V9/*setTimeout*/;try{_V9/*setTimeout*/ = setTimeout;}catch(e){};
var _V3/*par*/;try{_V3/*par*/ = par;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*somefun*/;
var _V11/*fourfun*/;
_V2/*somefun*/ = function(_V3/*par*/){
var _V4 = new __Promise();
var _V5 = function(code){ return function(res){ try{code(res);}catch(e){ _V4.reject(e); }; }; };
var _V6 = function(e){ _V4.reject(e); };
var _V7/*c*/;
_V5(function(){_V7/*c*/ = new _V8/*Callback*/();
_V9/*setTimeout*/(_V7/*c*/["callback"], 100);;
_V7/*c*/["promise"].then(_V5(function(_V10){_V10;;
_V4.resolve( (_V3/*par*/ + 1)); return _V4;
_V4.resolve(); return;;
}), _V6);})();
return _V4;
};
_V11/*fourfun*/ = function(){
var _V12 = new __Promise();
var _V13 = function(code){ return function(res){ try{code(res);}catch(e){ _V12.reject(e); }; }; };
var _V14 = function(e){ _V12.reject(e); };
_V13(function(){_V12.resolve( 4); return _V12;
_V12.resolve(); return;;
})();
return _V12;
};
return {"fun": function(){
var _V15 = new __Promise();
var _V16 = function(code){ return function(res){ try{code(res);}catch(e){ _V15.reject(e); }; }; };
var _V17 = function(e){ _V15.reject(e); };
var _V18/*a*/;
var _V19/*i*/;
_V16(function(){_V18/*a*/ = 1;
_V19/*i*/ = 0;
var _V22 = new __Promise();
var _V21 = function(){var _V23 = new __Promise();
_V11/*fourfun*/().then(_V16(function(_V20){if((_V19/*i*/ < _V20)){_V2/*somefun*/(_V19/*i*/).then(_V16(function(_V24){_V19/*i*/ = _V24;;
_V18/*a*/ = (_V18/*a*/ + 1);;
_V23.resolve(true); return _V23;
;
}), _V17);}else{_V23.resolve(false); return _V23;
};
}), _V17);_V23;
return _V23;
};
var _V25 = function(){_V21().then(function(contLoop){
if (contLoop){_V25();}else{_V22.resolve();};
});
};
_V25();
_V22.then(function(){;
;
if((_V18/*a*/ == 5)){
_V15.resolve( 4); return _V15;
};
;
_V15.resolve( 0); return _V15;
_V15.resolve(); return;;
});})();
return _V15;
}};
})();
promiseland._registerModule({ hashStr: "9c6570a898dcb766ee6ffe5c83918b6e", "module": _V1, promising: false });
return _V1;
});
})();