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
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "34a2b95271fad1ae02b401a78a5186a5" })){ return promiseland._getModule("34a2b95271fad1ae02b401a78a5186a5"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "34a2b95271fad1ae02b401a78a5186a5", "module": _V1, promising: true });
var _V11/*Callback*/;try{_V11/*Callback*/ = Callback;}catch(e){};
var _V12/*setTimeout*/;try{_V12/*setTimeout*/ = setTimeout;}catch(e){};
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*ps1*/;
var _V14/*case2*/;
var _V19/*a*/;
var _V20/*c1*/;
var _V21/*c2*/;
var _V22/*f1*/;
var _V23/*f2*/;
var _V35/*x*/;
_V3(function(){;
_V5/*ps1*/ = (function(){
var _V6 = new __Promise();
var _V8 = function(code){ return function(res){ try{code(res);}catch(e){ _V6.reject(e); }; }; };
var _V9 = function(e){ _V6.reject(e); };
var _V10/*c*/;
_V8(function(){;
_V10/*c*/ = new _V11/*Callback*/();
_V12/*setTimeout*/(_V10/*c*/, 100);;
_V10/*c*/["promise"].then(_V8(function(_V13){_V13;;
_V6.resolve(); return;;
_V6.resolve(); return;;
}), _V9);
;})();
return _V6;
});
_V14/*case2*/ = (function(){
var _V15 = new __Promise();
var _V16 = function(code){ return function(res){ try{code(res);}catch(e){ _V15.reject(e); }; }; };
var _V17 = function(e){ _V15.reject(e); };
_V16(function(){;
_V5/*ps1*/().then(_V16(function(_V18){_V18;;
_V15.resolve(2); return;;
_V15.resolve(); return;;
}), _V17);
;})();
return _V15;
});
_V19/*a*/ = 1;
_V20/*c1*/;
_V21/*c2*/;
_V22/*f1*/;
_V23/*f2*/;
var _V24 = new __Promise();
var _V25/*discriminant*/ = _V19/*a*/;
var _V27 = function(){_V14/*case2*/().then(_V3(function(_V34){if(_V25/*discriminant*/ === _V34){_V26(); return; };
_V29()}), _V4);
;};
var _V26 = function(){_V35/*x*/ = "label1";
_V22/*f1*/ = true;;
_V28(); return;;
};
var _V29 = function(){if(_V25/*discriminant*/ === 1){_V28(); return; };
_V31()};
var _V28 = function(){_V20/*c1*/ = true;;
_V30(); return;;
};
var _V31 = function(){if(_V25/*discriminant*/ === 3){_V30(); return; };
_V33()};
var _V30 = function(){_V21/*c2*/ = true;;
_V24.resolve(); return;;
_V32(); return;;
};
var _V33 = function(){if(_V25/*discriminant*/ === 4){_V32(); return; };
_V24.resolve(); return;};
var _V32 = function(){_V23/*f2*/ = true;;
_V24.resolve(); return;;
};
_V27(); _V24.then(function(){;
;
if((_V20/*c1*/ && _V21/*c2*/)){
if((! _V22/*f1*/ && ! _V23/*f2*/)){
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
;;
return _V1});
})();