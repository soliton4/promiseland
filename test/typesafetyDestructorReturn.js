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
if (promiseland._hasModule({ hashStr: "95e1f6e92615bcdaf9c56a0938f3df32" })){ return promiseland._getModule("95e1f6e92615bcdaf9c56a0938f3df32"); };
var _V1 = (function(){
"use strict";
var _V5/*failed*/;
var _V6/*cnt*/;
var _V3/*C1*/;
var _V7/*cntSupposed*/;
var _V10/*f1*/;
var _V11/*b*/;
var _T_V11/*b*/;
var _V2/*type:C1*/ = classSystem._createProvisionalClass();
_V3/*C1*/ = _V2/*type:C1*/;
var _V4/*C1-constructor*/ = undefined;classSystem.readyPromise(_V2/*type:C1*/).then(function(parType){_V2/*type:C1*/ = parType;_V4/*C1-constructor*/ = classSystem.getTypeConstructor(_V2/*type:C1*/);});var _V10/*f1*/ = function(){
var _V9/*a*/;
var _T_V9/*a*/;
try{;
/*temp tracked assign*/(function(vAr){
if (_T_V9/*a*/){ _T_V9/*a*/(); };
if(vAr){
var v = vAr[0];
_V9/*a*/ = v;
_T_V9/*a*/ = vAr[1];
return v;
}else{
_V9/*a*/ = undefined; _T_V9/*a*/ = undefined;
return;
}; })(new _V4/*C1-constructor*/())/*end temp assign*/
;
return (function(ret){ if (_T_V9/*a*/){ _T_V9/*a*/();};return ret; })((function(v){ if(!v){ return; }; return [v, v[2]()];})(_V9/*a*/));;
if (_T_V9/*a*/){ _T_V9/*a*/();};}catch(e){if (_T_V9/*a*/){ _T_V9/*a*/();};throw e};;
};
;
_V5/*failed*/ = false;
_V6/*cnt*/ = 0;
classSystem._resolveProvisional(_V2/*type:C1*/, classSystem.createClass({members: [{"name":"destroy","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "track": true}, {"destroy": (function(){
;
_V6/*cnt*/++;;
;
})}));_V3/*C1*/;;
_V7/*cntSupposed*/ = (function(_V8/*s*/){
;
if((_V6/*cnt*/ == _V8/*s*/)){
return;;
};
;
_V5/*failed*/ = true;;
;
});
_V7/*cntSupposed*/(0);;
_V10/*f1*/;
;
/*temp tracked assign*/(function(vAr){
if (_T_V11/*b*/){ _T_V11/*b*/(); };
if(vAr){
var v = vAr[0];
_V11/*b*/ = v;
_T_V11/*b*/ = vAr[1];
return v;
}else{
_V11/*b*/ = undefined; _T_V11/*b*/ = undefined;
return;
}; })(_V10/*f1*/())/*end temp assign*/
;
_V7/*cntSupposed*/(0);;
(function(v){ v[1](); return v[0]; })(_V10/*f1*/());;
_V7/*cntSupposed*/(1);;
/*temp tracked assign*/(function(vAr){
if (_T_V11/*b*/){ _T_V11/*b*/(); };
if(vAr){
var v = vAr[0];
_V11/*b*/ = v;
_T_V11/*b*/ = vAr[1];
return v;
}else{
_V11/*b*/ = undefined; _T_V11/*b*/ = undefined;
return;
}; })(new _V4/*C1-constructor*/())/*end temp assign*/
;
_V7/*cntSupposed*/(2);;
if(_V5/*failed*/){
return {"success": false};;
};
;
return {"success": true};;
;
})();
;promiseland._registerModule({ hashStr: "95e1f6e92615bcdaf9c56a0938f3df32", "module": _V1, promising: false });
return _V1;
});
})();