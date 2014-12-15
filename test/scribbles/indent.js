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

if (promiseland._hasModule({ hashStr: "4e03ac6f77c2d1fa42b400a256547e08" })){ return promiseland._getModule("4e03ac6f77c2d1fa42b400a256547e08"); };
var PL$2/*a*/;try{PL$2/*a*/ = a;}catch(e){};
var PL$3/*b*/;try{PL$3/*b*/ = b;}catch(e){};
var PL$4/*dostuff*/;try{PL$4/*dostuff*/ = dostuff;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  if(PL$2/*a*/ = PL$3/*b*/){
    PL$4/*dostuff*/();
  };
  ;
  ;})();
;return PL$1;
});
})();