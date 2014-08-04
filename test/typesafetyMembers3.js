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
if (promiseland._hasModule({ hashStr: "651db8f5c5e2a5af36d3c64ac8f972d2" })){ return promiseland._getModule("651db8f5c5e2a5af36d3c64ac8f972d2"); };
var _V1 = (function(){
"use strict";
var _V3/*Mt1*/;
var _V6/*Type1*/;
var _V9/*Type2*/;
var _V11/*a*/;
var _V12/*b*/;
var _V2/*type:Mt1*/ = classSystem._createProvisionalClass();
_V3/*Mt1*/ = _V2/*type:Mt1*/;
var _V4/*Mt1-constructor*/ = undefined;classSystem.readyPromise(_V2/*type:Mt1*/).then(function(parType){_V2/*type:Mt1*/ = parType;_V4/*Mt1-constructor*/ = classSystem.getTypeConstructor(_V2/*type:Mt1*/);});var _V5/*type:Type1*/ = classSystem._createProvisionalClass();
_V6/*Type1*/ = _V5/*type:Type1*/;
var _V7/*Type1-constructor*/ = undefined;classSystem.readyPromise(_V5/*type:Type1*/).then(function(parType){_V5/*type:Type1*/ = parType;_V7/*Type1-constructor*/ = classSystem.getTypeConstructor(_V5/*type:Type1*/);});var _V8/*type:Type2*/ = classSystem._createProvisionalClass();
_V9/*Type2*/ = _V8/*type:Type2*/;
var _V10/*Type2-constructor*/ = undefined;classSystem.readyPromise(_V8/*type:Type2*/).then(function(parType){_V8/*type:Type2*/ = parType;_V10/*Type2-constructor*/ = classSystem.getTypeConstructor(_V8/*type:Type2*/);});;
classSystem._resolveProvisional(_V2/*type:Mt1*/, classSystem.createClass({members: [{"name":"a1","type":classSystem.getBuiltinType("var")},{"name":"a2","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true}, {"a1": 20, "a2": 30}));_V3/*Mt1*/;;
classSystem._resolveProvisional(_V5/*type:Type1*/, classSystem.createClass({members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")},{"name":"m1","type":_V2/*type:Mt1*/}], "extends": [], "hasFreePart": true}, {"a": 1, "b": 2, "m1": undefined}));_V6/*Type1*/;;
classSystem._resolveProvisional(_V8/*type:Type2*/, classSystem.createClass({members: [{"name":"x","type":classSystem.getBuiltinType("var")},{"name":"y","type":classSystem.getBuiltinType("var")},{"name":"m2","type":_V2/*type:Mt1*/}], "extends": [], "hasFreePart": true}, {"x": 3, "y": 4, "m2": undefined}));_V9/*Type2*/;;
try
{_V11/*a*/ = new _V7/*Type1-constructor*/();
_V12/*b*/ = new _V10/*Type2-constructor*/();
_V12/*b*/[4] = 10;;
_V12/*b*/[3] = _V11/*a*/[3];;
_V11/*a*/[5] = new _V4/*Mt1-constructor*/();;
_V11/*a*/[5][3] = 40;;
_V12/*b*/[5] = _V11/*a*/[5];;
if((_V12/*b*/[5] !== _V11/*a*/[5])){
return {"success": false};;
};
if((_V12/*b*/[5][3] == 40)){
return {"success": true};;
};
}catch(_V13/*e*/){return {"success": false};;
};
return {"success": false};;
;
})();
;return _V1;
});
})();