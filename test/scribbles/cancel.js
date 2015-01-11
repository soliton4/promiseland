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
if (promiseland._hasModule({ hashStr: "9d57e55726d9ae19340e0d6d5780c0ef" })){ return promiseland._getModule("9d57e55726d9ae19340e0d6d5780c0ef"); };
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*b*/ = (function(){
  var PL$3 = new __Promise();
  var PL$5/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$3.reject(e);
      };
    };
  };
  var PL$6/*catch rejected*/ = function(e){
    PL$3.reject(e);
  };
  PL$5/*promiseland exception catcher*/(function(){
  
    ;
    PL$3.resolve(""); return;
    PL$3.resolve(); return;
  })();return PL$3;
  });
  var PL$7/*a*/ = (function(){
  var PL$8 = new __Promise();
  var PL$10/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$8.reject(e);
      };
    };
  };
  var PL$11/*catch rejected*/ = function(e){
    PL$8.reject(e);
  };
  var PL$12/*i*/;
  PL$10/*promiseland exception catcher*/(function(){
  
    ;
    PL$12/*i*/ = 0;var PL$14 = new __Promise();
    var PL$13 = function(){var PL$15 = new __Promise();
    if((PL$12/*i*/ < 1000)){
    PL$2/*b*/().then(PL$10/*promiseland exception catcher*/(function(PL$16){PL$16;
    PL$15.resolve(true); return PL$15; /* continue */
    ;}), PL$11/*catch rejected*/);
    ;}else{
    PL$15.resolve(false); return PL$15; /* break */
    
    };
    PL$15;return PL$15;
    };
    var PL$17 = function(){PL$13().then(function(contLoop){
    if (contLoop){++PL$12/*i*/;PL$17();}else{PL$14.resolve();};
    });
    };
    PL$17();
    PL$14.then(function(){;
    ;
    PL$8.resolve(); return;});
  })();return PL$8;
  });
  ;})();
;return PL$1;
});
})();