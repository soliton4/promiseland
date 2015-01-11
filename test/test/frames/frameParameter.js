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
if (promiseland._hasModule({ hashStr: "0c947407ff38e76631b10777c446fe92" })){ return promiseland._getModule("0c947407ff38e76631b10777c446fe92"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "0c947407ff38e76631b10777c446fe92", "module": PL$1, promising: true });
var PL$2 = (function(){
"use strict";
var PL$3/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$1.reject(e);
    };
  };
};
var PL$4/*catch rejected*/ = function(e){
  PL$1.reject(e);
};
var PL$5/*x*/;
var PL$16/*resPs*/;
var PL$17/*res*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  PL$5/*x*/ = ((function(f){
  promiseland.registerRemote("server", "0c947407ff38e76631b10777c446fe92", "PL$15", f, classSystem.getBuiltinType("var"));
  if (promiseland.profileHas("server")){
  return f;
  }else{
  return function(){
  return promiseland.remoteExec("0c947407ff38e76631b10777c446fe92", "PL$15", arguments);
  }
  };
  })(function(PL$6/*par1*/, PL$7/*par2*/, PL$8/*par3*/, PL$9/*par4*/, PL$10/*par5*/){
  var PL$11 = new __Promise();
  var PL$13/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$11.reject(e);
      };
    };
  };
  var PL$14/*catch rejected*/ = function(e){
    PL$11.reject(e);
  };
  PL$13/*promiseland exception catcher*/(function(){
  
    ;
    PL$11.resolve({
      "par1": PL$6/*par1*/,
      "par2": PL$7/*par2*/,
      "par3": PL$8/*par3*/,
      "par4": PL$9/*par4*/,
      "par5": PL$10/*par5*/
    }); return;
    PL$11.resolve(); return;
  })();return PL$11;
  }));
  PL$16/*resPs*/ = PL$5/*x*/(1, {
    "a": "b"
  }, null, undefined);
  PL$16/*resPs*/.then(PL$3/*promiseland exception catcher*/(function(PL$18){PL$17/*res*/ = PL$18;
  if(((((PL$17/*res*/["par1"] == 1) && (PL$17/*res*/["par2"]["a"] == "b")) && (PL$17/*res*/["par3"] === null)) && ! PL$17/*res*/["par4"])){
    PL$1.resolve({
      "success": true
    }); return;
  };
  ;
  PL$1.resolve({
    "success": false
  }); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;
})();return PL$1;
})();
;;
return PL$1});
})();