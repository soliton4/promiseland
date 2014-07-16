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
if (promiseland._hasModule({ hashStr: "d07a47af7a8e56b10459d9cbc7aba035" })){ return promiseland._getModule("d07a47af7a8e56b10459d9cbc7aba035"); };
var _V19/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V2/*dummy*/;
;
;
_V2/*dummy*/ = {"newNext": (function(){
;
;
}),
"newPrev": (function(){
;
;
}),
"fun": (function(){
;
;
})};
return (function(_V3/*base*/, _V4/*property*/){
var _V5/*orig*/;
var _V6/*last*/;
var _V7/*setFun*/;
var _V9/*first*/;
;
_V5/*orig*/ = _V3/*base*/[_V4/*property*/];
_V6/*last*/;
_V7/*setFun*/ = (function(_V8/*parFun*/){
;
_V3/*base*/[_V4/*property*/] = _V8/*parFun*/;;
;
});
_V9/*first*/ = (function(){
;
return {"newNext": (function(_V10/*n*/){
var _V11/*nextFun*/;
;
if(_V10/*n*/){
_V11/*nextFun*/ = _V10/*n*/["fun"];
_V7/*setFun*/((function(){
var _V12/*arguments*/ = arguments;
;
_V5/*orig*/["apply"](_V3/*base*/, _V12/*arguments*/);;
_V11/*nextFun*/["apply"](null, _V12/*arguments*/);;
;
}));;

}else{
_V7/*setFun*/(_V5/*orig*/);;
_V6/*last*/ = _V9/*first*/;;
};
;
;
}),
"newPrev": (function(){
;
;
})};;
;
})();
_V6/*last*/ = _V9/*first*/;;
return (function(_V13/*conFun*/, _V14/*newBase*/){
var _V15/*next*/;
var _V11/*nextFun*/;
var _V16/*prev*/;
var _V17/*s*/;
;
_V15/*next*/ = _V2/*dummy*/;
_V11/*nextFun*/ = _V15/*next*/["fun"];
_V16/*prev*/ = _V6/*last*/;
_V17/*s*/ = {"newNext": (function(_V10/*n*/){
;
if(_V10/*n*/){
_V15/*next*/ = _V10/*n*/;;

}else{
_V15/*next*/ = _V2/*dummy*/;;
_V6/*last*/ = _V17/*s*/;;
};
;
_V11/*nextFun*/ = _V15/*next*/["fun"];;
;
}),
"newPrev": (function(_V18/*p*/){
;
_V16/*prev*/ = _V18/*p*/;;
;
}),
"fun": (_V14/*newBase*/ ? (function(){
var _V12/*arguments*/ = arguments;
;
_V13/*conFun*/["apply"](_V14/*newBase*/, _V12/*arguments*/);;
_V11/*nextFun*/["apply"](null, _V12/*arguments*/);;
;
}) : (function(){
var _V12/*arguments*/ = arguments;
;
_V13/*conFun*/["apply"](null, _V12/*arguments*/);;
_V11/*nextFun*/["apply"](null, _V12/*arguments*/);;
;
}))};
_V6/*last*/["newNext"](_V17/*s*/);;
_V6/*last*/ = _V17/*s*/;;
return (function(){
;
_V16/*prev*/["newNext"](_V15/*next*/);;
_V15/*next*/["newPrev"](_V16/*prev*/);;
_V16/*prev*/ = _V2/*dummy*/;;
_V15/*next*/ = _V2/*dummy*/;;
;
});;
;
});;
;
});;
;
})();
promiseland._registerModule({ hashStr: "d07a47af7a8e56b10459d9cbc7aba035", "module": _V1, promising: false });
return _V1;
}; return function(){ return __execute.apply(null, arguments); } });
})();