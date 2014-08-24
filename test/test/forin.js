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
    requireFun = require;
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

if (promiseland._hasModule({ hashStr: "eb2da6464c8ef09a7c4e9bb772e7d8de" })){ return promiseland._getModule("eb2da6464c8ef09a7c4e9bb772e7d8de"); };
var PL$1 = (function(){
"use strict";
var PL$2/*a*/;
var PL$3/*namesStr*/;
var PL$4/*cnt*/;
var PL$5/*i*/;
;
PL$2/*a*/ = {"a": 1,
"b": 2,
"c": 3};
PL$3/*namesStr*/ = "";
PL$4/*cnt*/ = 0;
for(PL$5/*i*/ in PL$2/*a*/){PL$3/*namesStr*/ += PL$5/*i*/;;
PL$4/*cnt*/ += PL$2/*a*/[PL$5/*i*/];;
};
;
return {"names": PL$3/*namesStr*/,
"cnt": PL$4/*cnt*/};;
;
})();
;return PL$1;
});
})();