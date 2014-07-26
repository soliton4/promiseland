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
var _V13/*console*/;try{_V13/*console*/ = console;}catch(e){};
var _V15/*Callback*/;try{_V15/*Callback*/ = Callback;}catch(e){};
var _V17/*__dirname*/;try{_V17/*__dirname*/ = __dirname;}catch(e){};
var _V20/*setTimeout*/;try{_V20/*setTimeout*/ = setTimeout;}catch(e){};
var _V25/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V2/*fs*/;
var _V7/*x*/;
;
_V2/*fs*/;
(function(){
if (!promiseland.profileHas("server")){
var p = new __Promise();
p.reject({id: 14, msg: "function does not execute in this frame."});
return p;
};
var _V3 = new __Promise();
var _V4 = function(code){ return function(res){ try{code(res);}catch(e){ _V3.reject(e); }; }; };
var _V5 = function(e){ _V3.reject(e); };
_V4(function(){;
__requireFun("fs").then(_V4(function(_V6){_V2/*fs*/ = _V6;;
_V3.resolve(); return;;
}));})();
return _V3;
})();;
var _V19 = function(_V8/*par1*/, _V9/*par2*/){
var _V10 = new __Promise();
var _V11 = function(code){ return function(res){ try{code(res);}catch(e){ _V10.reject(e); }; }; };
var _V12 = function(e){ _V10.reject(e); };
var _V14/*cb*/;
var _V16/*filenameStr*/;
_V11(function(){;
_V13/*console*/["log"]("doing the request");;
_V14/*cb*/ = new _V15/*Callback*/();
_V16/*filenameStr*/ = (_V17/*__dirname*/ + "/test.txt");
_V13/*console*/["log"](_V8/*par1*/);;
_V13/*console*/["log"](_V9/*par2*/);;
_V2/*fs*/["readFile"](_V16/*filenameStr*/, {"encoding": "utf8"}, _V14/*cb*/);;
_V14/*cb*/["promise"].then(_V11(function(_V18){_V10.resolve(_V18[1]); return;;
_V10.resolve(); return;;
}), _V12);})();
return _V10;
};
promiseland.registerRemote("server", "89342948269bd1a24ae0574b30c9497c", "_V19", _V19);
_V7/*x*/ = (function(){if (promiseland.profileHas("server")){
return _V19.apply(this, arguments);
}else{
return promiseland.remoteExec("89342948269bd1a24ae0574b30c9497c", "_V19", arguments);
};
});
_V20/*setTimeout*/((function(){
var _V21 = new __Promise();
var _V22 = function(code){ return function(res){ try{code(res);}catch(e){ _V21.reject(e); }; }; };
var _V23 = function(e){ _V21.reject(e); };
_V22(function(){;
_V7/*x*/("par1", {"par": "2"}).then(_V22(function(_V24){_V13/*console*/["log"](_V24);;
_V21.resolve(); return;;
}), _V23);})();
return _V21;
}), 1000);;
;
})();
promiseland._registerModule({ hashStr: "89342948269bd1a24ae0574b30c9497c", "module": _V1, promising: false });
return _V1;
});
})();