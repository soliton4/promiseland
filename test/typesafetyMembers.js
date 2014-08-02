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
if (promiseland._hasModule({ hashStr: "04f62a1aab8854054d988fcd7991c3f9" })){ return promiseland._getModule("04f62a1aab8854054d988fcd7991c3f9"); };
var _V1 = (function(){
"use strict";
var _V3/*Type1*/;
var _V6/*Type2*/;
var _V8/*a*/;
var _V9/*b*/;
var _V2/*type:Type1*/ = classSystem._createProvisionalClass();
_V3/*Type1*/ = _V2/*type:Type1*/;
var _V4/*Type1-constructor*/ = undefined;classSystem.readyPromise(_V2/*type:Type1*/).then(function(parType){_V2/*type:Type1*/ = parType;_V4/*Type1-constructor*/ = classSystem.getTypeConstructor(_V2/*type:Type1*/);});var _V5/*type:Type2*/ = classSystem._createProvisionalClass();
_V6/*Type2*/ = _V5/*type:Type2*/;
var _V7/*Type2-constructor*/ = undefined;classSystem.readyPromise(_V5/*type:Type2*/).then(function(parType){_V5/*type:Type2*/ = parType;_V7/*Type2-constructor*/ = classSystem.getTypeConstructor(_V5/*type:Type2*/);});;
classSystem._resolveProvisional(_V2/*type:Type1*/, classSystem.createClass({members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true}, {"a": 1, "b": 2}));_V3/*Type1*/;;
classSystem._resolveProvisional(_V5/*type:Type2*/, classSystem.createClass({members: [{"name":"x","type":classSystem.getBuiltinType("var")},{"name":"y","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true}, {"x": 3, "y": 4}));_V6/*Type2*/;;
try
{_V8/*a*/ = new _V4/*Type1-constructor*/();
_V9/*b*/ = new _V7/*Type2-constructor*/();
if(((_V8/*a*/[3] == 1) && (_V9/*b*/[4] == 4))){
return {"success": true};;
};
}catch(e){return {"success": false};;
};
return {"success": false};;
;
})();
;promiseland._registerModule({ hashStr: "04f62a1aab8854054d988fcd7991c3f9", "module": _V1, promising: false });
return _V1;
});
})();