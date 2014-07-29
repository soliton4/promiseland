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
if (promiseland._hasModule({ hashStr: "89342948269bd1a24ae0574b30c9497c" })){ return promiseland._getModule("89342948269bd1a24ae0574b30c9497c"); };
var _V14/*console*/;try{_V14/*console*/ = console;}catch(e){};
var _V16/*Callback*/;try{_V16/*Callback*/ = Callback;}catch(e){};
var _V18/*__dirname*/;try{_V18/*__dirname*/ = __dirname;}catch(e){};
var _V22/*setTimeout*/;try{_V22/*setTimeout*/ = setTimeout;}catch(e){};
var _V21/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V2/*fs*/;
var _V8/*x*/;
;
_V2/*fs*/;
(function(){
if (!promiseland.profileHas("server")){
var p = new __Promise();
p.reject({id: 14, msg: "function does not execute in this frame."});
return p;
};
var _V3 = new __Promise();
var _V5 = function(code){ return function(res){ try{code(res);}catch(e){ _V3.reject(e); }; }; };
var _V6 = function(e){ _V3.reject(e); };
_V5(function(){;
__requireFun("fs").then(_V5(function(_V7){_V2/*fs*/ = _V7;;
_V3.resolve(); return;;
}));})();
return _V3;
})();;
_V8/*x*/ = ((function(f){
promiseland.registerRemote("server", "89342948269bd1a24ae0574b30c9497c", "_V20", f, _V21/*type:var*/);
if (promiseland.profileHas("server")){
return f;
}else{
return function(){ return promiseland.remoteExec("89342948269bd1a24ae0574b30c9497c", "_V20", arguments); }
};
})(function(_V9/*par1*/, _V10/*par2*/){
var _V11 = new __Promise();
var _V12 = function(code){ return function(res){ try{code(res);}catch(e){ _V11.reject(e); }; }; };
var _V13 = function(e){ _V11.reject(e); };
var _V15/*cb*/;
var _V17/*filenameStr*/;
_V12(function(){;
_V14/*console*/["log"]("doing the request");;
_V15/*cb*/ = new _V16/*Callback*/();
_V17/*filenameStr*/ = (_V18/*__dirname*/ + "/test.txt");
_V14/*console*/["log"](_V9/*par1*/);;
_V14/*console*/["log"](_V10/*par2*/);;
_V2/*fs*/["readFile"](_V17/*filenameStr*/, {"encoding": "utf8"}, _V15/*cb*/);;
_V15/*cb*/["promise"].then(_V12(function(_V19){_V11.resolve(_V19[1]); return;;
_V11.resolve(); return;;
}), _V13);
;})();
return _V11;
}));
_V22/*setTimeout*/((function(){
var _V23 = new __Promise();
var _V24 = function(code){ return function(res){ try{code(res);}catch(e){ _V23.reject(e); }; }; };
var _V25 = function(e){ _V23.reject(e); };
_V24(function(){;
_V8/*x*/("par1", {"par": "2"}).then(_V24(function(_V26){_V14/*console*/["log"](_V26);;
_V23.resolve(); return;;
}), _V25);
;})();
return _V23;
}), 1000);;
;
})();
;promiseland._registerModule({ hashStr: "89342948269bd1a24ae0574b30c9497c", "module": _V1, promising: false });
return _V1;
});
})();