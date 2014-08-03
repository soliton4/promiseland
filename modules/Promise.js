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

if (promiseland._hasModule({ hashStr: "a69bbef25828c5ac7b956e99943b8112" })){ return promiseland._getModule("a69bbef25828c5ac7b956e99943b8112"); };
var _V11/*undefined*/;try{_V11/*undefined*/ = undefined;}catch(e){};
var _V15/*promiseland*/;try{_V15/*promiseland*/ = promiseland;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*Promise*/;
var _V16/*all*/;
var _V24/*Callback*/;
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
_V16/*all*/ = (function(_V17/*promisesAr*/){
var _V18/*res*/;
var _V19/*resAr*/;
var _V20/*check*/;
var _V21/*cnt*/;
var _V5/*thenFun*/;
var _V9/*i*/;
var _V10/*l*/;
;
_V18/*res*/ = new _V2/*Promise*/();
_V19/*resAr*/ = (_V17/*promisesAr*/ ? _V17/*promisesAr*/["slice"]() : []);
_V20/*check*/ = (function(){
;
if(_V21/*cnt*/){
return;;
};
;
_V18/*res*/["resolve"](_V19/*resAr*/);;
;
});
_V21/*cnt*/ = 1;
_V5/*thenFun*/ = (function(_V22/*parI*/){
;
return (function(_V23/*r*/){
;
_V19/*resAr*/[_V22/*parI*/] = _V23/*r*/;;
--_V21/*cnt*/;;
_V20/*check*/();;
;
});;
;
});
_V9/*i*/ = 0;
_V10/*l*/ = _V19/*resAr*/["length"];
for(_V9/*i*/;(_V9/*i*/ < _V10/*l*/);++_V9/*i*/){{++_V21/*cnt*/;;
_V19/*resAr*/[_V9/*i*/]["then"](_V5/*thenFun*/(_V9/*i*/));;
}};
;
--_V21/*cnt*/;;
_V20/*check*/();;
return _V18/*res*/;;
;
});
_V15/*promiseland*/["all"] = _V16/*all*/;;
_V24/*Callback*/ = (function(){
var _V25/*promise*/;
var _V26/*callback*/;
;
_V25/*promise*/ = new _V2/*Promise*/();
_V26/*callback*/ = (function(){
var _V27/*arguments*/ = arguments;
;
_V25/*promise*/["resolve"](_V27/*arguments*/);;
;
});
_V26/*callback*/["promise"] = _V25/*promise*/["promise"];;
_V26/*callback*/["callback"] = _V26/*callback*/;;
return _V26/*callback*/;;
;
});
_V15/*promiseland*/["Callback"] = _V24/*Callback*/;;
_V15/*promiseland*/["getPromise"] = (function(_V28/*par*/){
;
return _V28/*par*/;;
;
});;
_V15/*promiseland*/["importPromise"] = (function(_V28/*par*/){
var _V29/*p*/;
;
_V29/*p*/ = new _V2/*Promise*/();
_V28/*par*/["then"]((function(_V18/*res*/){
;
_V29/*p*/["resolve"](_V18/*res*/);;
;
}), (function(_V30/*rea*/){
;
_V29/*p*/["reject"](_V30/*rea*/);;
;
}));;
return _V29/*p*/["promise"];;
;
});;
return _V2/*Promise*/;;
;
})();
;return _V1;
}; return function(){ return __execute.apply(null, arguments); } });
})();