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
if (promiseland._hasModule({ hashStr: "f5e945b90eea440d61d103c47701fa98" })){ return promiseland._getModule("f5e945b90eea440d61d103c47701fa98"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "f5e945b90eea440d61d103c47701fa98", "module": PL$1, promising: true });
var PL$18/*console*/;try{PL$18/*console*/ = console;}catch(e){};
var PL$26/*promiseland*/;try{PL$26/*promiseland*/ = promiseland;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$6 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$7 = function(e){ PL$1.reject(e); };
var PL$25/*SaveHandler*/;
var PL$4/*C1*/;
var PL$27/*a*/;
var PL$3/*type:C1*/ = classSystem._createProvisionalClass();
PL$4/*C1*/ = PL$3/*type:C1*/;
var PL$5/*C1-constructor*/ = undefined;classSystem.readyPromise(PL$3/*type:C1*/).then(function(parType){PL$3/*type:C1*/ = parType;PL$5/*C1-constructor*/ = classSystem.getTypeConstructor(PL$3/*type:C1*/);});PL$6(function(){;
var PL$8 = new __Promise();
var PL$9 = new __Promise();
var PL$10/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$9.resolve(e); }; }; };
var PL$11 = function(e){ PL$9.resolve(e); };
PL$10/*try catch*/(function(){PL$25/*SaveHandler*/ = (function(){var PL$12/*inherited*/ = {};
var res = promiseland.createClass({"registerClass": (function(PL$13/*par*/){
var PL$14 = new __Promise();
var PL$16 = function(code){ return function(res){ try{code(res);}catch(e){ PL$14.reject(e); }; }; };
var PL$17 = function(e){ PL$14.reject(e); };
PL$16(function(){;
PL$18/*console*/["log"]("register:");;
PL$18/*console*/["log"](PL$13/*par*/);;
PL$14.resolve({"save": (function(PL$13/*par*/){
var PL$19 = new __Promise();
var PL$20 = function(code){ return function(res){ try{code(res);}catch(e){ PL$19.reject(e); }; }; };
var PL$21 = function(e){ PL$19.reject(e); };
PL$20(function(){;
PL$18/*console*/["log"]("save:");;
PL$18/*console*/["log"](PL$13/*par*/);;
PL$19.resolve(); return;;
})();
return PL$19;
}),
"load": (function(PL$13/*par*/){
var PL$22 = new __Promise();
var PL$23 = function(code){ return function(res){ try{code(res);}catch(e){ PL$22.reject(e); }; }; };
var PL$24 = function(e){ PL$22.reject(e); };
PL$23(function(){;
PL$18/*console*/["log"]("load:");;
PL$18/*console*/["log"](PL$13/*par*/);;
PL$22.resolve(); return;;
})();
return PL$22;
})}); return;;
PL$14.resolve(); return;;
})();
return PL$14;
})}, [], PL$12/*inherited*/);
return res; })();PL$25/*SaveHandler*/;;
PL$26/*promiseland*/["classSystem"]["setSaveHandler"](new PL$25/*SaveHandler*/());;
classSystem._resolveProvisional(PL$3/*type:C1*/, classSystem.createClass({members: [{"name":"x","type":classSystem.getBuiltinType("var")},{"name":"y","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "savable": true}, {"x": 1, "y": 2}));PL$4/*C1*/;;
new PL$5/*C1-constructor*/("x").then(PL$10/*try catch*/(function(PL$28){PL$27/*a*/ = PL$28;
PL$27/*a*/[4]();;
PL$8.resolve();
}), PL$11);
;})();
PL$9.then(PL$6(function(PL$29/*e*/){PL$18/*console*/["log"]("err:");;
PL$18/*console*/["log"](PL$29/*e*/);;
PL$8.resolve();;
}));
PL$8.then(PL$6(function(){;
PL$1.resolve(); return;;
}), PL$7)})();
return PL$1;
})();
;;
return PL$1});
})();