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

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "7c4c5037ec841fa73aee3ce74c566139" })){ return promiseland._getModule("7c4c5037ec841fa73aee3ce74c566139"); };
var PL$11/*console*/;try{PL$11/*console*/ = console;}catch(e){};
var PL$16/*promiseland*/;try{PL$16/*promiseland*/ = promiseland;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$15/*SaveHandler*/;
var PL$3/*C1*/;
var PL$17/*a*/;
var PL$2/*type:C1*/ = classSystem._createProvisionalClass();
PL$3/*C1*/ = PL$2/*type:C1*/;
var PL$4/*C1-constructor*/ = undefined;classSystem.readyPromise(PL$2/*type:C1*/).then(function(parType){PL$2/*type:C1*/ = parType;PL$4/*C1-constructor*/ = classSystem.getTypeConstructor(PL$2/*type:C1*/);});;
try
{PL$15/*SaveHandler*/ = (function(){var PL$5/*inherited*/ = {};
var res = promiseland.createClass({"registerClass": (function(PL$6/*par*/){
var PL$7 = new __Promise();
var PL$9 = function(code){ return function(res){ try{code(res);}catch(e){ PL$7.reject(e); }; }; };
var PL$10 = function(e){ PL$7.reject(e); };
PL$9(function(){;
PL$11/*console*/["log"](PL$6/*par*/);;
PL$7.resolve({"save": (function(PL$6/*par*/){
var PL$12 = new __Promise();
var PL$13 = function(code){ return function(res){ try{code(res);}catch(e){ PL$12.reject(e); }; }; };
var PL$14 = function(e){ PL$12.reject(e); };
PL$13(function(){;
PL$11/*console*/["log"](PL$6/*par*/);;
PL$12.resolve(); return;;
})();
return PL$12;
})}); return;;
PL$7.resolve(); return;;
})();
return PL$7;
})}, [], PL$5/*inherited*/);
return res; })();PL$15/*SaveHandler*/;;
PL$16/*promiseland*/["classSystem"]["setSaveHandler"](new PL$15/*SaveHandler*/());;
classSystem._resolveProvisional(PL$2/*type:C1*/, classSystem.createClass({members: [{"name":"x","type":classSystem.getBuiltinType("var")},{"name":"y","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "savable": true}, {"x": 1, "y": 2}));PL$3/*C1*/;;
PL$17/*a*/ = new PL$4/*C1-constructor*/();
PL$17/*a*/[4]();;
}catch(PL$18/*e*/){PL$11/*console*/["log"](PL$18/*e*/);;
};
;
})();
;return PL$1;
});
})();