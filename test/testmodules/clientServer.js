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
if (promiseland._hasModule({ hashStr: "89342948269bd1a24ae0574b30c9497c" })){ return promiseland._getModule("89342948269bd1a24ae0574b30c9497c"); };
var PL$14/*console*/;try{PL$14/*console*/ = console;}catch(e){};
var PL$16/*Callback*/;try{PL$16/*Callback*/ = Callback;}catch(e){};
var PL$18/*__dirname*/;try{PL$18/*__dirname*/ = __dirname;}catch(e){};
var PL$21/*setTimeout*/;try{PL$21/*setTimeout*/ = setTimeout;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$2/*fs*/;
var PL$8/*x*/;
;
PL$2/*fs*/;
(function(){
if (!promiseland.profileHas("server")){
var p = new __Promise();
p.reject({id: 14, msg: "function does not execute in this frame."});
return p;
};
var PL$3 = new __Promise();
var PL$5 = function(code){ return function(res){ try{code(res);}catch(e){ PL$3.reject(e); }; }; };
var PL$6 = function(e){ PL$3.reject(e); };
PL$5(function(){;
__requireFun("fs").then(PL$5(function(PL$7){PL$2/*fs*/ = PL$7;;
PL$3.resolve(); return;;
}), PL$6);
;})();
return PL$3;
})();;
PL$8/*x*/ = ((function(f){
promiseland.registerRemote("server", "89342948269bd1a24ae0574b30c9497c", "PL$20", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("89342948269bd1a24ae0574b30c9497c", "PL$20", arguments);
}
};
})(function(PL$9/*par1*/, PL$10/*par2*/){
var PL$11 = new __Promise();
var PL$12 = function(code){ return function(res){ try{code(res);}catch(e){ PL$11.reject(e); }; }; };
var PL$13 = function(e){ PL$11.reject(e); };
var PL$15/*cb*/;
var PL$17/*filenameStr*/;
PL$12(function(){;
PL$14/*console*/["log"]("doing the request");;
PL$15/*cb*/ = new PL$16/*Callback*/();
PL$17/*filenameStr*/ = (PL$18/*__dirname*/ + "/test.txt");
PL$14/*console*/["log"](PL$9/*par1*/);;
PL$14/*console*/["log"](PL$10/*par2*/);;
PL$2/*fs*/["readFile"](PL$17/*filenameStr*/, {"encoding": "utf8"}, PL$15/*cb*/);;
PL$15/*cb*/["promise"].then(PL$12(function(PL$19){PL$11.resolve(PL$19[1]); return;;
PL$11.resolve(); return;;
}), PL$13);
;})();
return PL$11;
}));
PL$21/*setTimeout*/((function(){
var PL$22 = new __Promise();
var PL$23 = function(code){ return function(res){ try{code(res);}catch(e){ PL$22.reject(e); }; }; };
var PL$24 = function(e){ PL$22.reject(e); };
PL$23(function(){;
PL$8/*x*/("par1", {"par": "2"}).then(PL$23(function(PL$25){PL$14/*console*/["log"](PL$25);;
PL$22.resolve(); return;;
}), PL$24);
;})();
return PL$22;
}), 1000);;
;
})();
;return PL$1;
});
})();