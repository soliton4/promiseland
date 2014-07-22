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
if (promiseland._hasModule({ hashStr: "34a2b95271fad1ae02b401a78a5186a5" })){ return promiseland._getModule("34a2b95271fad1ae02b401a78a5186a5"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "34a2b95271fad1ae02b401a78a5186a5", "module": _V1, promising: true });
var _V10/*Callback*/;try{_V10/*Callback*/ = Callback;}catch(e){};
var _V11/*setTimeout*/;try{_V11/*setTimeout*/ = setTimeout;}catch(e){};
var _V35/*type:var*/ = __classSystem.getBuiltinType("var");
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*ps1*/;
var _V13/*case2*/;
var _V18/*a*/;
var _V19/*c1*/;
var _V20/*c2*/;
var _V21/*f1*/;
var _V22/*f2*/;
var _V34/*x*/;
_V3(function(){;
_V5/*ps1*/ = (function(){
var _V6 = new __Promise();
var _V7 = function(code){ return function(res){ try{code(res);}catch(e){ _V6.reject(e); }; }; };
var _V8 = function(e){ _V6.reject(e); };
var _V9/*c*/;
_V7(function(){;
_V9/*c*/ = new _V10/*Callback*/();
_V11/*setTimeout*/(_V9/*c*/, 100);;
_V9/*c*/["promise"].then(_V7(function(_V12){_V12;;
_V6.resolve(); return;;
_V6.resolve(); return;;
}), _V8);})();
return _V6;
});
_V13/*case2*/ = (function(){
var _V14 = new __Promise();
var _V15 = function(code){ return function(res){ try{code(res);}catch(e){ _V14.reject(e); }; }; };
var _V16 = function(e){ _V14.reject(e); };
_V15(function(){;
_V5/*ps1*/().then(_V15(function(_V17){_V17;;
_V14.resolve(2); return;;
_V14.resolve(); return;;
}), _V16);})();
return _V14;
});
_V18/*a*/ = 1;
_V19/*c1*/;
_V20/*c2*/;
_V21/*f1*/;
_V22/*f2*/;
var _V23 = new __Promise();
var _V24/*discriminant*/ = _V18/*a*/;
var _V26 = function(){_V13/*case2*/().then(_V3(function(_V33){if(_V24/*discriminant*/ === _V33){_V25(); return; };
_V28()}), _V4);};
var _V25 = function(){_V34/*x*/ = "label1";
_V21/*f1*/ = true;;
_V27(); return;;
};
var _V28 = function(){if(_V24/*discriminant*/ === 1){_V27(); return; };
_V30()};
var _V27 = function(){_V19/*c1*/ = true;;
_V29(); return;;
};
var _V30 = function(){if(_V24/*discriminant*/ === 3){_V29(); return; };
_V32()};
var _V29 = function(){_V20/*c2*/ = true;;
_V23.resolve(); return;;
_V31(); return;;
};
var _V32 = function(){if(_V24/*discriminant*/ === 4){_V31(); return; };
_V23.resolve(); return;};
var _V31 = function(){_V22/*f2*/ = true;;
_V23.resolve(); return;;
};
_V26(); _V23.then(function(){;
;
if((_V19/*c1*/ && _V20/*c2*/)){
if((!_V21/*f1*/ && !_V22/*f2*/)){
_V1.resolve({"success": true}); return;;
};
;
};
;
_V1.resolve({"success": false}); return;;
_V1.resolve(); return;;
});})();
return _V1;
})();
;
return _V1});
})();