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
if (promiseland._hasModule({ hashStr: "54c5b667b0d94bacc1162b8a20e2c8f4" })){ return promiseland._getModule("54c5b667b0d94bacc1162b8a20e2c8f4"); };
var _V1 = (function(){
"use strict";
var _V5/*i*/;
var _V3/*C1*/;
var _V2/*type:C1*/ = classSystem._createProvisionalClass();
_V3/*C1*/ = _V2/*type:C1*/;
var _V4/*C1-constructor*/ = undefined;classSystem.readyPromise(_V2/*type:C1*/).then(function(parType){_V2/*type:C1*/ = parType;_V4/*C1-constructor*/ = classSystem.getTypeConstructor(_V2/*type:C1*/);});;
_V5/*i*/ = 1;
classSystem._resolveProvisional(_V2/*type:C1*/, classSystem.createClass({members: [{"name":"destroy","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "track": true}, {"destroy": (function(){
;
--_V5/*i*/;;
;
})}));_V3/*C1*/;;
(function(){
var _V6/*v*/;
var _T_V6/*v*/;
try{;
/*temp tracked assign*/(function(vAr){
if (_T_V6/*v*/){ _T_V6/*v*/(); };
if(vAr){
var v = vAr[0];
_V6/*v*/ = v;
_T_V6/*v*/ = vAr[1];
return v;
}else{
_V6/*v*/ = undefined; _T_V6/*v*/ = undefined;
return;
}; })(new _V4/*C1-constructor*/())/*end temp assign*/
;
if (_T_V6/*v*/){ _T_V6/*v*/();};}catch(e){if (_T_V6/*v*/){ _T_V6/*v*/();};throw e};;
})();;
if((_V5/*i*/ == 1)){
return {"success": false};;
};
;
return {"success": true};;
;
})();
;return _V1;
});
})();