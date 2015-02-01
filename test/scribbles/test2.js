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

var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "2812593f22c416e2891c0ded059eb5fe" })){ return promiseland._getModule("2812593f22c416e2891c0ded059eb5fe"); };
var PL$1 = (function(){
"use strict";
var PL$3/*ClassA*/;
var PL$6/*ClassB*/;
var PL$9/*varA*/;
var PL$10/*varB*/;

/* ---------------------------- */
/* type ClassA */
var PL$2/*type:ClassA*/ = classSystem._createProvisionalClass();
PL$3/*ClassA*/ = PL$2/*type:ClassA*/
var PL$4/*ClassA-constructor*/ = undefined;
classSystem.readyPromise(PL$2/*type:ClassA*/).then(function(parType){
  PL$2/*type:ClassA*/ = parType;
  PL$4/*ClassA-constructor*/ = classSystem.getTypeConstructor(PL$2/*type:ClassA*/);
});
/* ---------------------------- */


/* ---------------------------- */
/* type ClassB */
var PL$5/*type:ClassB*/ = classSystem._createProvisionalClass();
PL$6/*ClassB*/ = PL$5/*type:ClassB*/
var PL$7/*ClassB-constructor*/ = undefined;
classSystem.readyPromise(PL$5/*type:ClassB*/).then(function(parType){
  PL$5/*type:ClassB*/ = parType;
  PL$7/*ClassB-constructor*/ = classSystem.getTypeConstructor(PL$5/*type:ClassB*/);
});
/* ---------------------------- */


  ;
  classSystem._resolveProvisional(PL$2/*type:ClassA*/, classSystem.createClass({className: "ClassA",members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "hashStr": "2812593f22c416e2891c0ded059eb5fe", "name": "ClassA"}, {"a": 1, "b": 2}));PL$3/*ClassA*/;
  classSystem._resolveProvisional(PL$5/*type:ClassB*/, classSystem.createClass({className: "ClassB",members: [{"name":"c","type":classSystem.getBuiltinType("var")},{"name":"d","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "hashStr": "2812593f22c416e2891c0ded059eb5fe", "name": "ClassB"}, {"c": 3, "d": 4}));PL$6/*ClassB*/;
  var PL$8/*var1*/ = 1;
  ;
  PL$9/*varA*/ = new PL$4/*ClassA-constructor*/();
  PL$10/*varB*/ = new PL$4/*ClassA-constructor*/();
  PL$9/*varA*/ = PL$10/*varB*/;
  ;})();
;return PL$1;
});
})();