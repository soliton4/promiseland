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
if (promiseland._hasModule({ hashStr: "cae0507e04a7312601e16db3b4c02736" })){ return promiseland._getModule("cae0507e04a7312601e16db3b4c02736"); };
var _V1 = (function(){
"use strict";
var _V2 = new __Promise();
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V2.reject(e); }; }; };
var _V4 = function(e){ _V2.reject(e); };
_V3(function(){var _V5/*fs*/;
var _V11/*getter*/;
function(){
if (!promiseland.profileHas("[object Object]")){
var p = new __Promise();
p.reject({id: 14, msg: "function does not execute in this frame."});
return p;
};
var _V6 = new __Promise();
var _V7 = function(code){ return function(res){ try{code(res);}catch(e){ _V6.reject(e); }; }; };
var _V8 = function(e){ _V6.reject(e); };
_V7(function(){__requireFun("fs").then(_V7(function(_V9){_V6.resolve( _V9); return _V6;
_V6.resolve(); return;;
}));})();
return _V6;
}().then(_V3(function(_V10){_V5/*fs*/ = _V10;
var _V15 = function(){
var _V12 = new __Promise();
var _V13 = function(code){ return function(res){ try{code(res);}catch(e){ _V12.reject(e); }; }; };
var _V14 = function(e){ _V12.reject(e); };
_V13(function(){_V12.resolve( _V5/*fs*/["readFile"]("somefile.txt")); return _V12;
_V12.resolve(); return;;
})();
return _V12;
};
promiseland.registerRemote("[object Object]", "cae0507e04a7312601e16db3b4c02736", "_V15", _V15);
_V11/*getter*/ = function(){if (promiseland.profileHas("[object Object]")){
return _V15.apply(this, arguments);
}else{
return promiseland.remoteExec("cae0507e04a7312601e16db3b4c02736", "_V15", arguments);
};
};
_V2.resolve(); return;;
}), _V4);})();
return _V2;
})();
promiseland._registerModule({ hashStr: "cae0507e04a7312601e16db3b4c02736", "module": _V1, promising: false });
return _V1;
});
})();