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
  defineFun([], function(){
var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

if (promiseland._hasModule({ hashStr: "36af7afc6dc259cc67306b54c7728b9e" })){ return promiseland._getModule("36af7afc6dc259cc67306b54c7728b9e"); };
var PL$5/*Object*/;try{PL$5/*Object*/ = Object;}catch(e){};
var PL$12/*promiseland*/;try{PL$12/*promiseland*/ = promiseland;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$11/*Map*/;
;
;
PL$11/*Map*/ = (function(){var PL$2/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(){
;
this["map"] = {};;
;
}),
"set": (function(PL$3/*key*/, PL$4/*value*/){
;
this["map"][PL$3/*key*/] = PL$4/*value*/;;
;
}),
"get": (function(PL$3/*key*/){
;
if(PL$5/*Object*/["prototype"]["hasOwnProperty"]["call"](this["map"], PL$3/*key*/)){
return this["map"][PL$3/*key*/];;
};
;
;
}),
"has": (function(PL$3/*key*/){
;
if(PL$5/*Object*/["prototype"]["hasOwnProperty"]["call"](this["map"], PL$3/*key*/)){
return true;;
};
;
return false;;
;
}),
"delete": (function(PL$3/*key*/){
;
delete this["map"][PL$3/*key*/];;
;
}),
"getArray": (function(){
var PL$6/*res*/;
var PL$7/*n*/;
;
PL$6/*res*/ = [];
PL$7/*n*/;
for(PL$7/*n*/ in this["map"]){PL$6/*res*/["push"]({"key": PL$7/*n*/,
"value": this["map"][PL$7/*n*/]});;
};
;
return PL$6/*res*/;;
;
}),
"mixin": (function(PL$8/*other*/){
var PL$9/*a*/;
var PL$10/*i*/;
;
if(! PL$8/*other*/){
return this;;
};
;
PL$9/*a*/ = PL$8/*other*/["getArray"]();
PL$10/*i*/;
for(PL$10/*i*/ = 0;(PL$10/*i*/ < PL$9/*a*/["length"]);++PL$10/*i*/){{this["set"](PL$9/*a*/[PL$10/*i*/]["key"], PL$9/*a*/[PL$10/*i*/]["value"]);;
}};
;
return this;;
;
})}, [], PL$2/*inherited*/);
return res; })();PL$11/*Map*/;;
PL$12/*promiseland*/["Map"] = PL$11/*Map*/;;
return PL$11/*Map*/;;
;
})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();