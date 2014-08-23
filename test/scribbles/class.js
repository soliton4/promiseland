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
if (promiseland._hasModule({ hashStr: "d4ed6ebe11e279453b7f908db653becd" })){ return promiseland._getModule("d4ed6ebe11e279453b7f908db653becd"); };
var _V10/*console*/;try{_V10/*console*/ = console;}catch(e){};
var _V1 = (function(){
"use strict";
var _V3/*Ca*/;
var _V6/*Cb*/;
var _V8/*a*/;
var _V9/*b*/;
var _V2/*type:Ca*/ = classSystem._createProvisionalClass();
_V3/*Ca*/ = _V2/*type:Ca*/;
var _V4/*Ca-constructor*/ = undefined;classSystem.readyPromise(_V2/*type:Ca*/).then(function(parType){_V2/*type:Ca*/ = parType;_V4/*Ca-constructor*/ = classSystem.getTypeConstructor(_V2/*type:Ca*/);});var _V5/*type:Cb*/ = classSystem._createProvisionalClass();
_V6/*Cb*/ = _V5/*type:Cb*/;
var _V7/*Cb-constructor*/ = undefined;classSystem.readyPromise(_V5/*type:Cb*/).then(function(parType){_V5/*type:Cb*/ = parType;_V7/*Cb-constructor*/ = classSystem.getTypeConstructor(_V5/*type:Cb*/);});;
classSystem._resolveProvisional(_V2/*type:Ca*/, classSystem.createClass({members: [{"name":"m","type":_V5/*type:Cb*/},{"name":"s","type":_V2/*type:Ca*/},{"name":"id","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true}, {"m": undefined, "s": undefined, "id": 1}));_V3/*Ca*/;;
classSystem._resolveProvisional(_V5/*type:Cb*/, classSystem.createClass({members: [{"name":"m","type":_V2/*type:Ca*/},{"name":"s","type":_V5/*type:Cb*/},{"name":"id","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true}, {"m": undefined, "s": undefined, "id": 2}));_V6/*Cb*/;;
_V8/*a*/ = new _V4/*Ca-constructor*/();
_V9/*b*/ = new _V7/*Cb-constructor*/();
_V9/*b*/[3] = _V8/*a*/;;
_V10/*console*/["log"](_V8/*a*/[5]);;
_V10/*console*/["log"](_V9/*b*/[5]);;
;
})();
;return _V1;
});
})();