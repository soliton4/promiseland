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
if (promiseland._hasModule({ hashStr: "575c4be1e0319423fd58de62903afcaf" })){ return promiseland._getModule("575c4be1e0319423fd58de62903afcaf"); };
var _V1 = (function(){
"use strict";
var _V8/*i*/;
var _V3/*C1*/;
var _V6/*C2*/;
var _V2/*type:C1*/ = classSystem._createProvisionalClass();
_V3/*C1*/ = _V2/*type:C1*/;
var _V4/*C1-constructor*/ = undefined;classSystem.readyPromise(_V2/*type:C1*/).then(function(parType){_V2/*type:C1*/ = parType;_V4/*C1-constructor*/ = classSystem.getTypeConstructor(_V2/*type:C1*/);});var _V5/*type:C2*/ = classSystem._createProvisionalClass();
_V6/*C2*/ = _V5/*type:C2*/;
var _V7/*C2-constructor*/ = undefined;classSystem.readyPromise(_V5/*type:C2*/).then(function(parType){_V5/*type:C2*/ = parType;_V7/*C2-constructor*/ = classSystem.getTypeConstructor(_V5/*type:C2*/);});;
_V8/*i*/ = 2;
classSystem._resolveProvisional(_V2/*type:C1*/, classSystem.createClass({members: [{"name":"destroy","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "track": true}, {"destroy": (function(){
;
--_V8/*i*/;;
;
})}));_V3/*C1*/;;
classSystem._resolveProvisional(_V5/*type:C2*/, classSystem.createClass({members: [{"name":"m","type":_V2/*type:C1*/}], "extends": [], "hasFreePart": true, "track": true}, {"m": undefined}));_V6/*C2*/;;
(function(){
var _V9/*m*/;
var _T_V9/*m*/;
var _V10/*v*/;
var _T_V10/*v*/;
try{;
/*temp tracked assign*/(function(vAr){
if (_T_V9/*m*/){ _T_V9/*m*/(); };
if(vAr){
var v = vAr[0];
_V9/*m*/ = v;
_T_V9/*m*/ = vAr[1];
return v;
}else{
_V9/*m*/ = undefined; _T_V9/*m*/ = undefined;
return;
}; })(new _V4/*C1-constructor*/())/*end temp assign*/
;
/*temp tracked assign*/(function(vAr){
if (_T_V10/*v*/){ _T_V10/*v*/(); };
if(vAr){
var v = vAr[0];
_V10/*v*/ = v;
_T_V10/*v*/ = vAr[1];
return v;
}else{
_V10/*v*/ = undefined; _T_V10/*v*/ = undefined;
return;
}; })(new _V7/*C2-constructor*/())/*end temp assign*/
;
(function(s, v){ s[6] = v; if(s[7]){ s[7](); }; s[7] = v[3](s[1]); return v; })(_V10/*v*/, _V9/*m*/);;
(function(s, vAr){ var v = vAr[0]; s[6] = v; if(s[7]){ s[7](); }; s[7] = v[3](s[1]); vAr[1](); return v; })(_V10/*v*/, new _V4/*C1-constructor*/());;
if (_T_V9/*m*/){ _T_V9/*m*/();};if (_T_V10/*v*/){ _T_V10/*v*/();};}catch(e){if (_T_V9/*m*/){ _T_V9/*m*/();};if (_T_V10/*v*/){ _T_V10/*v*/();};throw e};;
})();;
if((_V8/*i*/ == 0)){
return {"success": true};;
};
;
return {"success": false};;
;
})();
;promiseland._registerModule({ hashStr: "575c4be1e0319423fd58de62903afcaf", "module": _V1, promising: false });
return _V1;
});
})();