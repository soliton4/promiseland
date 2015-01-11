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
if (promiseland._hasModule({ hashStr: "52359e7398cbfbfaf29d768d9b7a668b" })){ return promiseland._getModule("52359e7398cbfbfaf29d768d9b7a668b"); };
var PL$10/*doSome*/;try{PL$10/*doSome*/ = doSome;}catch(e){};
var PL$3/*context*/;try{PL$3/*context*/ = context;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$8/*x*/;

  ;
  var PL$2/*z*/ = (function(PL$3/*context*/){
  var PL$4 = new __Promise();
  var PL$6/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$4.reject(e);
      };
    };
  };
  var PL$7/*catch rejected*/ = function(e){
    PL$4.reject(e);
  };
  PL$6/*promiseland exception catcher*/(function(){
  
    ;
    PL$8/*x*/().then(PL$6/*promiseland exception catcher*/(function(PL$9){if(PL$9){
      PL$10/*doSome*/();
    };
    ;
    PL$4.resolve(); return;}), PL$7/*catch rejected*/);
    ;
  })();return PL$4;
  });
  var PL$11/*y*/ = ((function(f){
  promiseland.registerRemote("server", "52359e7398cbfbfaf29d768d9b7a668b", "PL$17", f, classSystem.getBuiltinType("var"));
  if (promiseland.profileHas("server")){
  return f;
  }else{
  return function(){
  return promiseland.remoteExec("52359e7398cbfbfaf29d768d9b7a668b", "PL$17", arguments);
  }
  };
  })(function(){
  var PL$12 = new __Promise();
  var PL$14/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$12.reject(e);
      };
    };
  };
  var PL$15/*catch rejected*/ = function(e){
    PL$12.reject(e);
  };
  PL$14/*promiseland exception catcher*/(function(){
  
    ;
    PL$2/*z*/(PL$3/*context*/).then(PL$14/*promiseland exception catcher*/(function(PL$16){PL$16;
    PL$12.resolve(); return;}), PL$15/*catch rejected*/);
    ;
  })();return PL$12;
  }));
  PL$8/*x*/ = ((function(f){
  promiseland.registerRemote("client", "52359e7398cbfbfaf29d768d9b7a668b", "PL$22", f, classSystem.getBuiltinType("var"));
  if (promiseland.profileHas("client")){
  return f;
  }else{
  return function(){
  return promiseland.remoteExec("52359e7398cbfbfaf29d768d9b7a668b", "PL$22", arguments);
  }
  };
  })(function(){
  var PL$18 = new __Promise();
  var PL$20/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$18.reject(e);
      };
    };
  };
  var PL$21/*catch rejected*/ = function(e){
    PL$18.reject(e);
  };
  PL$20/*promiseland exception catcher*/(function(){
  
    ;
    PL$18.resolve("x"); return;
    PL$18.resolve(); return;
  })();return PL$18;
  }));
  ;})();
;return PL$1;
});
})();