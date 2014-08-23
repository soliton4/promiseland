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
if (promiseland._hasModule({ hashStr: "0c11ca25206ec42f77a70d97f2323884" })){ return promiseland._getModule("0c11ca25206ec42f77a70d97f2323884"); };
var _V1 = (function(){
"use strict";
var _V3/*C1*/;
var _V5/*b*/;
var _V7/*fun1*/;
var _V2/*type:C1*/ = classSystem._createProvisionalClass();
_V3/*C1*/ = _V2/*type:C1*/;
var _V4/*C1-constructor*/ = undefined;classSystem.readyPromise(_V2/*type:C1*/).then(function(parType){_V2/*type:C1*/ = parType;_V4/*C1-constructor*/ = classSystem.getTypeConstructor(_V2/*type:C1*/);});var _V7/*fun1*/ = function(){
var _V6/*c*/;
;
_V6/*c*/ = new _V4/*C1-constructor*/();
_V6/*c*/[3] = 2;;
return _V6/*c*/;;
;
};
;
classSystem._resolveProvisional(_V2/*type:C1*/, classSystem.createClass({members: [{"name":"a","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true}, {"a": 1}));_V3/*C1*/;;
_V5/*b*/ = new _V4/*C1-constructor*/();
_V7/*fun1*/;
;
_V5/*b*/ = _V7/*fun1*/();;
if((_V5/*b*/[3] == 2)){
return {"success": true};;
};
;
return {"success": false};;
;
})();
;return _V1;
});
})();