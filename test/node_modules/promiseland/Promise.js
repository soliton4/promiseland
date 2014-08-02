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

if (promiseland._hasModule({ hashStr: "73d425f4d2ae7ef4cf7cdbf82359b005" })){ return promiseland._getModule("73d425f4d2ae7ef4cf7cdbf82359b005"); };
var _V11/*undefined*/;try{_V11/*undefined*/ = undefined;}catch(e){};
var _V15/*promiseland*/;try{_V15/*promiseland*/ = promiseland;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*Promise*/;
;
;
_V2/*Promise*/ = (function(){
var _V3/*thenAr*/;
var _V4/*elseAr*/;
var _V5/*thenFun*/;
;
_V3/*thenAr*/ = [];
_V4/*elseAr*/ = [];
_V5/*thenFun*/ = (function(_V6/*parThenFun*/, _V7/*parElseFun*/){
;
if(_V6/*parThenFun*/){
_V3/*thenAr*/["push"](_V6/*parThenFun*/);;
};
;
if(_V7/*parElseFun*/){
_V4/*elseAr*/["push"](_V7/*parElseFun*/);;
};
;
;
});
this["resolve"] = (function(_V8/*value*/){
var _V9/*i*/;
var _V10/*l*/;
;
_V5/*thenFun*/ = (function(_V6/*parThenFun*/){
;
try
{_V6/*parThenFun*/(_V8/*value*/);;
}catch(e){};
;
;
});;
if(! _V3/*thenAr*/){
return;;
};
_V9/*i*/ = 0;
_V10/*l*/ = _V3/*thenAr*/["length"];
for(_V9/*i*/;(_V9/*i*/ < _V10/*l*/);++_V9/*i*/){{try
{_V3/*thenAr*/[_V9/*i*/](_V8/*value*/);;
}catch(e){};
}};
;
_V3/*thenAr*/ = _V11/*undefined*/;;
_V4/*elseAr*/ = _V11/*undefined*/;;
;
});;
this["reject"] = (function(_V8/*value*/){
var _V9/*i*/;
var _V10/*l*/;
;
_V5/*thenFun*/ = (function(_V12/*u*/, _V7/*parElseFun*/){
;
if(_V7/*parElseFun*/){
try
{_V7/*parElseFun*/(_V8/*value*/);;
}catch(e){};
;
};
;
;
});;
if(! _V4/*elseAr*/){
return;;
};
_V9/*i*/ = 0;
_V10/*l*/ = _V4/*elseAr*/["length"];
for(_V9/*i*/;(_V9/*i*/ < _V10/*l*/);++_V9/*i*/){{try
{_V4/*elseAr*/[_V9/*i*/](_V8/*value*/);;
}catch(e){};
}};
;
_V3/*thenAr*/ = _V11/*undefined*/;;
_V4/*elseAr*/ = _V11/*undefined*/;;
;
});;
this["then"] = (function(_V13/*par1*/, _V14/*par2*/){
;
_V5/*thenFun*/(_V13/*par1*/, _V14/*par2*/);;
;
});;
this["promise"] = this["then"];;
this["then"]["then"] = this["then"];;
;
});
_V15/*promiseland*/["Promise"] = _V2/*Promise*/;;
return _V2/*Promise*/;;
;
})();
;promiseland._registerModule({ hashStr: "73d425f4d2ae7ef4cf7cdbf82359b005", "module": _V1, promising: false });
return _V1;
}; return function(){ return __execute.apply(null, arguments); } });
})();