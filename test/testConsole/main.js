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
var Promise = promiseland.Promise;
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
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "120e06c54cdf04aabe8fa91a75678f0e" })){ return promiseland._getModule("120e06c54cdf04aabe8fa91a75678f0e"); };
var _V8/*console*/;try{_V8/*console*/ = console;}catch(e){};
var _V13/*__dirname*/;try{_V13/*__dirname*/ = __dirname;}catch(e){};
var _V24/*Callback*/;try{_V24/*Callback*/ = Callback;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*cp*/;
var _V9/*runTests*/;
;
_V2/*cp*/;
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
__requireFun("../createProcess").then(_V5(function(_V7){_V2/*cp*/ = _V7;;
_V3.resolve(); return;;
}));})();
return _V3;
})();;
_V8/*console*/["log"]("loaded");;
_V9/*runTests*/ = ((function(f){
promiseland.registerRemote("server", "120e06c54cdf04aabe8fa91a75678f0e", "_V27", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
var _V28/*temp returnpromise*/ = new __Promise();

promiseland.remoteExec("120e06c54cdf04aabe8fa91a75678f0e", "_V27", arguments, _V28/*temp returnpromise*/);
return _V28/*temp returnpromise*/;
}
};
})(function(){
var _V10 = new __Promise();
var _V11 = function(code){ return function(res){ try{code(res);}catch(e){ _V10.reject(e); }; }; };
var _V12 = function(e){ _V10.reject(e); };
var _V22/*ts*/;
var _V23/*cb*/;
_V11(function(){;
_V8/*console*/["log"]("running tests");;
_V8/*console*/["log"]("copy promiseland");;
_V2/*cp*/("cp", [(_V13/*__dirname*/ + "/../../../promiseland/promiseland.js"), (_V13/*__dirname*/ + "/../node_modules/promiseland/")])["result"].then(_V11(function(_V14){_V8/*console*/["log"](_V14);;
_V2/*cp*/("cp", [(_V13/*__dirname*/ + "/../../../promiseland/package.json"), (_V13/*__dirname*/ + "/../node_modules/promiseland/")])["result"].then(_V11(function(_V15){_V8/*console*/["log"](_V15);;
_V2/*cp*/("cp", [(_V13/*__dirname*/ + "/../../../promiseland/modules"), (_V13/*__dirname*/ + "/../node_modules/promiseland/"), "-R"])["result"].then(_V11(function(_V16){_V8/*console*/["log"](_V16);;
_V8/*console*/["log"]("running compileall");;
_V2/*cp*/("node", ["compileAll.js"])["result"].then(_V11(function(_V17){_V8/*console*/["log"](_V17);;
_V8/*console*/["log"]("starting tests");;
var _V18 = new __Promise();
var _V19 = new __Promise();
var _V20/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V19.resolve(e); }; }; };
var _V21 = function(e){ _V19.resolve(e); };
_V20/*try catch*/(function(){_V22/*ts*/ = _V2/*cp*/("./testServer", [], {"fork": true});
_V23/*cb*/ = new _V24/*Callback*/();
_V22/*ts*/["child"]["on"]("message", _V23/*cb*/);;
_V23/*cb*/["promise"].then(_V20/*try catch*/(function(_V25){_V10.resolve(_V25[0]); return;;
_V18.resolve();
}), _V21);
;})();
_V19.then(_V11(function(_V26/*e*/){_V8/*console*/["log"]("error");;
_V8/*console*/["log"](_V26/*e*/);;
_V10.resolve({"failed": true}); return;;
_V18.resolve();;
}));
_V18.then(_V11(function(){;
;
_V10.resolve(); return;;
}), _V12)}), _V12);
;}), _V12);
;}), _V12);
;}), _V12);
;})();
return _V10;
}));
return {"runTests": _V9/*runTests*/};;
;
})();
;return _V1;
});
})();