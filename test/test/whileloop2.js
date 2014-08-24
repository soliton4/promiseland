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
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "9c6570a898dcb766ee6ffe5c83918b6e" })){ return promiseland._getModule("9c6570a898dcb766ee6ffe5c83918b6e"); };
var PL$9/*Callback*/;try{PL$9/*Callback*/ = Callback;}catch(e){};
var PL$10/*setTimeout*/;try{PL$10/*setTimeout*/ = setTimeout;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$2/*somefun*/;
var PL$12/*fourfun*/;
;
PL$2/*somefun*/ = (function(PL$3/*par*/){
var PL$4 = new __Promise();
var PL$6 = function(code){ return function(res){ try{code(res);}catch(e){ PL$4.reject(e); }; }; };
var PL$7 = function(e){ PL$4.reject(e); };
var PL$8/*c*/;
PL$6(function(){;
PL$8/*c*/ = new PL$9/*Callback*/();
PL$10/*setTimeout*/(PL$8/*c*/["callback"], 100);;
PL$8/*c*/["promise"].then(PL$6(function(PL$11){PL$11;;
PL$4.resolve((PL$3/*par*/ + 1)); return;;
PL$4.resolve(); return;;
}), PL$7);
;})();
return PL$4;
});
PL$12/*fourfun*/ = (function(){
var PL$13 = new __Promise();
var PL$14 = function(code){ return function(res){ try{code(res);}catch(e){ PL$13.reject(e); }; }; };
var PL$15 = function(e){ PL$13.reject(e); };
PL$14(function(){;
PL$13.resolve(4); return;;
PL$13.resolve(); return;;
})();
return PL$13;
});
return {"fun": (function(){
var PL$16 = new __Promise();
var PL$17 = function(code){ return function(res){ try{code(res);}catch(e){ PL$16.reject(e); }; }; };
var PL$18 = function(e){ PL$16.reject(e); };
var PL$19/*a*/;
var PL$20/*i*/;
PL$17(function(){;
PL$19/*a*/ = 1;
PL$20/*i*/ = 0;
var PL$23 = new __Promise();
var PL$22 = function(){var PL$24 = new __Promise();
PL$12/*fourfun*/().then(PL$17(function(PL$21){if((PL$20/*i*/ < PL$21)){PL$2/*somefun*/(PL$20/*i*/).then(PL$17(function(PL$25){PL$20/*i*/ = PL$25;;
PL$19/*a*/ = (PL$19/*a*/ + 1);;
PL$24.resolve(true); return PL$24;
;
}), PL$18);
;}else{PL$24.resolve(false); return PL$24;
};
}), PL$18);
;PL$24;
return PL$24;
};
var PL$26 = function(){PL$22().then(function(contLoop){
if (contLoop){PL$26();}else{PL$23.resolve();};
});
};
PL$26();
PL$23.then(function(){;
;
if((PL$19/*a*/ == 5)){
PL$16.resolve(4); return;;
};
;
PL$16.resolve(0); return;;
PL$16.resolve(); return;;
});})();
return PL$16;
})};;
;
})();
;return PL$1;
});
})();