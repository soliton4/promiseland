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
if (promiseland._hasModule({ hashStr: "b9f8ed0c9d353bb6c2c3688ec475e4a8" })){ return promiseland._getModule("b9f8ed0c9d353bb6c2c3688ec475e4a8"); };
var _V1 = (function(){
"use strict";
var _V3/*C2*/;
var _V8/*b*/;
var _V6/*C1*/;
var _V9/*v1*/;
var _V2/*type:C2*/ = classSystem._createProvisionalClass();
_V3/*C2*/ = _V2/*type:C2*/;
var _V4/*C2-constructor*/ = undefined;classSystem.readyPromise(_V2/*type:C2*/).then(function(parType){_V2/*type:C2*/ = parType;_V4/*C2-constructor*/ = classSystem.getTypeConstructor(_V2/*type:C2*/);});var _V5/*type:C1*/ = classSystem._createProvisionalClass();
_V6/*C1*/ = _V5/*type:C1*/;
var _V7/*C1-constructor*/ = undefined;classSystem.readyPromise(_V5/*type:C1*/).then(function(parType){_V5/*type:C1*/ = parType;_V7/*C1-constructor*/ = classSystem.getTypeConstructor(_V5/*type:C1*/);});;
classSystem._resolveProvisional(_V2/*type:C2*/, classSystem.createClass({members: [{"name":"a","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true}, {"a": 2}));_V3/*C2*/;;
_V8/*b*/ = new _V4/*C2-constructor*/();
_V8/*b*/[3] = 3;;
classSystem._resolveProvisional(_V5/*type:C1*/, classSystem.createClass({members: [{"name":"a","type":_V2/*type:C2*/},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true}, {"a": new _V4/*C2-constructor*/(), "b": (function(){
;
this[3] = _V8/*b*/;;
;
})}));_V6/*C1*/;;
_V9/*v1*/ = new _V7/*C1-constructor*/();
_V9/*v1*/[4]();;
if((_V9/*v1*/[3][3] == 3)){
return {"success": true};;
};
;
return {"success": false};;
;
})();
;promiseland._registerModule({ hashStr: "b9f8ed0c9d353bb6c2c3688ec475e4a8", "module": _V1, promising: false });
return _V1;
});
})();