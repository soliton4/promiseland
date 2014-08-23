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
  
defineFun(["promiseland"], function(promiseland){ var __require = requireFun;

var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "2812593f22c416e2891c0ded059eb5fe" })){ return promiseland._getModule("2812593f22c416e2891c0ded059eb5fe"); };
var _V1 = (function(){
"use strict";
var _V3/*ClassA*/;
var _V6/*ClassB*/;
var _V8/*var1*/;
var _V9/*varA*/;
var _V10/*varB*/;
var _V2/*type:ClassA*/ = classSystem._createProvisionalClass();
_V3/*ClassA*/ = _V2/*type:ClassA*/;
var _V4/*ClassA-constructor*/ = undefined;classSystem.readyPromise(_V2/*type:ClassA*/).then(function(parType){_V2/*type:ClassA*/ = parType;_V4/*ClassA-constructor*/ = classSystem.getTypeConstructor(_V2/*type:ClassA*/);});var _V5/*type:ClassB*/ = classSystem._createProvisionalClass();
_V6/*ClassB*/ = _V5/*type:ClassB*/;
var _V7/*ClassB-constructor*/ = undefined;classSystem.readyPromise(_V5/*type:ClassB*/).then(function(parType){_V5/*type:ClassB*/ = parType;_V7/*ClassB-constructor*/ = classSystem.getTypeConstructor(_V5/*type:ClassB*/);});;
classSystem._resolveProvisional(_V2/*type:ClassA*/, classSystem.createClass({members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true}, {"a": 1, "b": 2}));_V3/*ClassA*/;;
classSystem._resolveProvisional(_V5/*type:ClassB*/, classSystem.createClass({members: [{"name":"c","type":classSystem.getBuiltinType("var")},{"name":"d","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true}, {"c": 3, "d": 4}));_V6/*ClassB*/;;
_V8/*var1*/ = 1;
_V9/*varA*/ = new _V4/*ClassA-constructor*/();
_V10/*varB*/ = new _V4/*ClassA-constructor*/();
_V9/*varA*/ = _V10/*varB*/;;
;
})();
;return _V1;
});
})();