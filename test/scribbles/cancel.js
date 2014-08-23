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
if (promiseland._hasModule({ hashStr: "9d57e55726d9ae19340e0d6d5780c0ef" })){ return promiseland._getModule("9d57e55726d9ae19340e0d6d5780c0ef"); };
var _V1 = (function(){
"use strict";
var _V2/*b*/;
var _V7/*a*/;
;
_V2/*b*/ = (function(){
var _V3 = new __Promise();
var _V5 = function(code){ return function(res){ try{code(res);}catch(e){ _V3.reject(e); }; }; };
var _V6 = function(e){ _V3.reject(e); };
_V5(function(){;
_V3.resolve(""); return;;
_V3.resolve(); return;;
})();
return _V3;
});
_V7/*a*/ = (function(){
var _V8 = new __Promise();
var _V9 = function(code){ return function(res){ try{code(res);}catch(e){ _V8.reject(e); }; }; };
var _V10 = function(e){ _V8.reject(e); };
var _V11/*i*/;
_V9(function(){;
_V11/*i*/ = 0;
var _V13 = new __Promise();
var _V12 = function(){var _V14 = new __Promise();
if((_V11/*i*/ < 1000)){_V2/*b*/().then(_V9(function(_V15){_V15;;
_V14.resolve(true); return _V14;
;
}), _V10);
;}else{_V14.resolve(false); return _V14;
};
_V14;
return _V14;
};
var _V16 = function(){_V12().then(function(contLoop){
if (contLoop){++_V11/*i*/;
_V16();}else{_V13.resolve();};
});
};
_V16();
_V13.then(function(){;
;
_V8.resolve(); return;;
});})();
return _V8;
});
;
})();
;return _V1;
});
})();