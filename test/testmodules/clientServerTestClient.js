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
    if (promiseland._hasModule({ hashStr: "063b02b45bab7047f0c7ef55fd001621" })){ return promiseland._getModule("063b02b45bab7047f0c7ef55fd001621"); };
var PL$2/*promiseland*/;try{PL$2/*promiseland*/ = promiseland;}catch(e){};
var PL$9/*io*/;try{PL$9/*io*/ = io;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$3/*ServerProfile*/;
var PL$4/*ServerConnection*/;
var PL$8/*serverProfile*/;
var PL$5/*socket*/;
var PL$11/*runTests*/;
;
PL$2/*promiseland*/["set"]("profile", "client");;
PL$3/*ServerProfile*/ = (function(){
;
this["name"] = (function(){
;
return "server";;
;
});;
this["find"] = (function(){
;
return this["connection"];;
;
});;
;
});
PL$3/*ServerProfile*/["prototype"] = new PL$2/*promiseland*/["ProfileBaseClass"]();;
PL$4/*ServerConnection*/ = (function(PL$5/*socket*/){
var PL$6/*self*/;
;
this["socket"] = PL$5/*socket*/;;
PL$6/*self*/ = this;
PL$5/*socket*/["on"]("pl", (function(PL$7/*data*/){
;
PL$6/*self*/["emit"]("data", PL$7/*data*/);;
;
}));;
this["send"] = (function(PL$7/*data*/){
;
PL$5/*socket*/["emit"]("pl", PL$7/*data*/);;
;
});;
;
});
PL$4/*ServerConnection*/["prototype"] = new PL$2/*promiseland*/["ConnectionBaseClass"]();;
PL$8/*serverProfile*/ = new PL$3/*ServerProfile*/();
PL$2/*promiseland*/["addProfile"](PL$8/*serverProfile*/);;
PL$5/*socket*/ = PL$9/*io*/["connect"]();
PL$5/*socket*/["on"]("connect", (function(){
var PL$10/*connection*/;
;
PL$10/*connection*/ = new PL$4/*ServerConnection*/(PL$5/*socket*/);
PL$8/*serverProfile*/["connection"] = PL$10/*connection*/;;
PL$8/*serverProfile*/["emit"]("connection", PL$10/*connection*/);;
PL$11/*runTests*/();;
;
}));;
PL$5/*socket*/["on"]("disconnect", (function(){
;
PL$8/*serverProfile*/["connection"]["emit"]("disconnect");;
PL$8/*serverProfile*/["connection"] = undefined;;
;
}));;
PL$11/*runTests*/ = (function(){
var PL$12 = new __Promise();
var PL$14 = function(code){ return function(res){ try{code(res);}catch(e){ PL$12.reject(e); }; }; };
var PL$15 = function(e){ PL$12.reject(e); };
PL$14(function(){;
__requireFun("testmodules/syncMember").then(PL$14(function(PL$16){PL$16;;
PL$12.resolve(); return;;
}), PL$15);
;})();
return PL$12;
});
;
})();
;return PL$1;
});
})();