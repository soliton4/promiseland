(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback){
      var i = 0;
      var l = modulesAr.length;
      var args = [];
      for (i; i < l; ++i){
        args.push(require(modulesAr[i]));
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
if (promiseland._hasModule({ hashStr: "c343dbdffd29eb3b97bc22a9b7978e0e" })){ return promiseland._getModule("c343dbdffd29eb3b97bc22a9b7978e0e"); };
var _V1 = (function(){
"use strict";
var _V3/*C1*/;
var _V6/*C2*/;
var _V8/*v1*/;
var _V9/*v2*/;
var _V2/*type:C1*/ = classSystem._createProvisionalClass();
_V3/*C1*/ = _V2/*type:C1*/;
var _V4/*C1-constructor*/ = undefined;classSystem.readyPromise(_V2/*type:C1*/).then(function(parType){_V2/*type:C1*/ = parType;_V4/*C1-constructor*/ = classSystem.getTypeConstructor(_V2/*type:C1*/);});var _V5/*type:C2*/ = classSystem._createProvisionalClass();
_V6/*C2*/ = _V5/*type:C2*/;
var _V7/*C2-constructor*/ = undefined;classSystem.readyPromise(_V5/*type:C2*/).then(function(parType){_V5/*type:C2*/ = parType;_V7/*C2-constructor*/ = classSystem.getTypeConstructor(_V5/*type:C2*/);});;
classSystem._resolveProvisional(_V2/*type:C1*/, classSystem.createClass({members: [{"name":"m1","type":_V5/*type:C2*/}], "extends": [], "hasFreePart": true}, {"m1": undefined}));_V3/*C1*/;;
classSystem._resolveProvisional(_V5/*type:C2*/, classSystem.createClass({members: [{"name":"m2","type":_V2/*type:C1*/},{"name":"a","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true}, {"m2": undefined, "a": 1}));_V6/*C2*/;;
_V8/*v1*/ = new _V4/*C1-constructor*/();
_V9/*v2*/ = new _V7/*C2-constructor*/();
_V8/*v1*/[3] = _V9/*v2*/;;
if((_V8/*v1*/[3][4] == 1)){
return {"success": true};;
};
;
return {"success": false};;
;
})();
;return _V1;
});
})();