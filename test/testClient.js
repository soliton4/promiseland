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
    if (promiseland._hasModule({ hashStr: "1378438d98057a9df1d8cc99242e8cfb" })){ return promiseland._getModule("1378438d98057a9df1d8cc99242e8cfb"); };
var PL$2/*promiseland*/;try{PL$2/*promiseland*/ = promiseland;}catch(e){};
var PL$9/*io*/;try{PL$9/*io*/ = io;}catch(e){};
var PL$14/*window*/;try{PL$14/*window*/ = window;}catch(e){};
var PL$15/*KeysValues*/;try{PL$15/*KeysValues*/ = KeysValues;}catch(e){};
var PL$16/*i*/;try{PL$16/*i*/ = i;}catch(e){};
var PL$17/*KeyValue*/;try{PL$17/*KeyValue*/ = KeyValue;}catch(e){};
var PL$23/*console*/;try{PL$23/*console*/ = console;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$3/*ServerProfile*/;
var PL$4/*ServerConnection*/;
var PL$8/*serverProfile*/;
var PL$5/*socket*/;
var PL$18/*querySt*/;
var PL$11/*runTests*/;
var PL$18/*querySt*/ = function(PL$12/*Key*/){
var PL$13/*url*/;
;
PL$13/*url*/ = PL$14/*window*/["location"]["href"];
PL$15/*KeysValues*/ = PL$13/*url*/["split"](/[\?&]+/);;
for(PL$16/*i*/ = 0;(PL$16/*i*/ < PL$15/*KeysValues*/["length"]);PL$16/*i*/++){{PL$17/*KeyValue*/ = PL$15/*KeysValues*/[PL$16/*i*/]["split"]("=");;
if((PL$17/*KeyValue*/[0] == PL$12/*Key*/)){
return PL$17/*KeyValue*/[1];;
};
;
}};
;
;
};
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
PL$18/*querySt*/;
;
PL$11/*runTests*/ = (function(){
var PL$19 = new __Promise();
var PL$21 = function(code){ return function(res){ try{code(res);}catch(e){ PL$19.reject(e); }; }; };
var PL$22 = function(e){ PL$19.reject(e); };
var PL$24/*testObj*/;
var PL$27/*collector*/;
var PL$29/*type*/;
PL$21(function(){;
PL$23/*console*/["log"]("running tests");;
__requireFun("test/simpleTests").then(PL$21(function(PL$25){PL$24/*testObj*/ = PL$25;
__requireFun("test/frameTests").then(PL$21(function(PL$26){PL$26;;
__requireFun("./testCollector").then(PL$21(function(PL$28){PL$27/*collector*/ = PL$28;
debugger;
PL$29/*type*/ = (PL$18/*querySt*/("type") || "unknown");
PL$27/*collector*/["postResult"](PL$29/*type*/, PL$24/*testObj*/);;
PL$27/*collector*/["waitForFinish"](PL$29/*type*/).then(PL$21(function(PL$30){PL$30;;
PL$14/*window*/["close"]();;
PL$19.resolve(); return;;
}), PL$22);
;}), PL$22);
;}), PL$22);
;}), PL$22);
;})();
return PL$19;
});
;
})();
;return PL$1;
});
})();