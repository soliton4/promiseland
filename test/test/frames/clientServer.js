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
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

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
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "305873103956dbcac355c242894d9641" })){ return promiseland._getModule("305873103956dbcac355c242894d9641"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "305873103956dbcac355c242894d9641", "module": PL$1, promising: true });
var PL$16/*Callback*/;try{PL$16/*Callback*/ = Callback;}catch(e){};
var PL$18/*__dirname*/;try{PL$18/*__dirname*/ = __dirname;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$5/*fs*/;
var PL$11/*x*/;
var PL$21/*res*/;
PL$3(function(){;
PL$5/*fs*/;
(function(){
if (!promiseland.profileHas("server")){
var p = new __Promise();
p.reject({id: 14, msg: "function does not execute in this frame."});
return p;
};
var PL$6 = new __Promise();
var PL$8 = function(code){ return function(res){ try{code(res);}catch(e){ PL$6.reject(e); }; }; };
var PL$9 = function(e){ PL$6.reject(e); };
PL$8(function(){;
__requireFun("fs").then(PL$8(function(PL$10){PL$5/*fs*/ = PL$10;;
PL$6.resolve(); return;;
}), PL$9);
;})();
return PL$6;
})();;
PL$11/*x*/ = ((function(f){
promiseland.registerRemote("server", "305873103956dbcac355c242894d9641", "PL$20", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("305873103956dbcac355c242894d9641", "PL$20", arguments);
}
};
})(function(){
var PL$12 = new __Promise();
var PL$13 = function(code){ return function(res){ try{code(res);}catch(e){ PL$12.reject(e); }; }; };
var PL$14 = function(e){ PL$12.reject(e); };
var PL$15/*cb*/;
var PL$17/*filenameStr*/;
PL$13(function(){;
PL$15/*cb*/ = new PL$16/*Callback*/();
PL$17/*filenameStr*/ = (PL$18/*__dirname*/ + "/clientServer.txt");
PL$5/*fs*/["readFile"](PL$17/*filenameStr*/, {"encoding": "utf8"}, PL$15/*cb*/);;
PL$15/*cb*/["promise"].then(PL$13(function(PL$19){PL$12.resolve(PL$19[1]); return;;
PL$12.resolve(); return;;
}), PL$14);
;})();
return PL$12;
}));
PL$11/*x*/().then(PL$3(function(PL$22){PL$21/*res*/ = PL$22;
if((PL$21/*res*/ == "the test content")){
PL$1.resolve({"success": true}); return;;
};
;
PL$1.resolve({"success": false}); return;;
PL$1.resolve(); return;;
}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();