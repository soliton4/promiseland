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
if (promiseland._hasModule({ hashStr: "d5c4130fe09db261b4e797ff99b23065" })){ return promiseland._getModule("d5c4130fe09db261b4e797ff99b23065"); };
var _V1 = (function(){
"use strict";
var _V8/*failed*/;
var _V9/*cnt*/;
var _V3/*C1*/;
var _V6/*C2*/;
var _V11/*v1*/;
var _T_V11/*v1*/;
var _V12/*v2*/;
var _T_V12/*v2*/;
var _V13/*cntSupposed*/;
var _V2/*type:C1*/ = classSystem._createProvisionalClass();
_V3/*C1*/ = _V2/*type:C1*/;
var _V4/*C1-constructor*/ = undefined;classSystem.readyPromise(_V2/*type:C1*/).then(function(parType){_V2/*type:C1*/ = parType;_V4/*C1-constructor*/ = classSystem.getTypeConstructor(_V2/*type:C1*/);});var _V5/*type:C2*/ = classSystem._createProvisionalClass();
_V6/*C2*/ = _V5/*type:C2*/;
var _V7/*C2-constructor*/ = undefined;classSystem.readyPromise(_V5/*type:C2*/).then(function(parType){_V5/*type:C2*/ = parType;_V7/*C2-constructor*/ = classSystem.getTypeConstructor(_V5/*type:C2*/);});;
_V8/*failed*/ = false;
_V9/*cnt*/ = 0;
classSystem._resolveProvisional(_V2/*type:C1*/, classSystem.createClass({members: [{"name":"circ","type":_V2/*type:C1*/},{"name":"id","type":classSystem.getBuiltinType("var")},{"name":"destroy","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "track": true}, {"circ": undefined, "id": 0, "destroy": (function(){
var _V10/*checkid*/;
;
_V10/*checkid*/ = this[8];
_V9/*cnt*/++;;
;
})}));_V3/*C1*/;;
classSystem._resolveProvisional(_V5/*type:C2*/, classSystem.createClass({members: [{"name":"m1","type":_V2/*type:C1*/}], "extends": [], "hasFreePart": true, "track": true}, {"m1": undefined}));_V6/*C2*/;;
/*temp tracked assign*/(function(vAr){
if (_T_V11/*v1*/){ _T_V11/*v1*/(); };
if(vAr){
var v = vAr[0];
_V11/*v1*/ = v;
_T_V11/*v1*/ = vAr[1];
return v;
}else{
_V11/*v1*/ = undefined; _T_V11/*v1*/ = undefined;
return;
}; })(new _V7/*C2-constructor*/())/*end temp assign*/
;
/*temp tracked assign*/(function(vAr){
if (_T_V12/*v2*/){ _T_V12/*v2*/(); };
if(vAr){
var v = vAr[0];
_V12/*v2*/ = v;
_T_V12/*v2*/ = vAr[1];
return v;
}else{
_V12/*v2*/ = undefined; _T_V12/*v2*/ = undefined;
return;
}; })(new _V7/*C2-constructor*/())/*end temp assign*/
;
_V13/*cntSupposed*/ = (function(_V14/*s*/){
;
if((_V9/*cnt*/ == _V14/*s*/)){
return;;
};
;
_V8/*failed*/ = true;;
;
});
_V13/*cntSupposed*/(0);;
(function(s, vAr){ var v = vAr[0]; s[6] = v; if(s[7]){ s[7](); }; s[7] = v[3](s[1]); vAr[1](); return v; })(_V11/*v1*/, new _V4/*C1-constructor*/());;
_V11/*v1*/[6][8] = 1;;
(function(s, v){ s[6] = v; if(s[7]){ s[7](); }; s[7] = v[3](s[1]); return v; })(_V12/*v2*/, _V11/*v1*/[6]);;
(function(s, vAr){ var v = vAr[0]; s[6] = v; if(s[7]){ s[7](); }; s[7] = v[3](s[1]); vAr[1](); return v; })(_V11/*v1*/[6], new _V4/*C1-constructor*/());;
_V11/*v1*/[6][6][8] = 2;;
(function(s, vAr){ var v = vAr[0]; s[6] = v; if(s[7]){ s[7](); }; s[7] = v[3](s[1]); vAr[1](); return v; })(_V11/*v1*/[6][6], new _V4/*C1-constructor*/());;
_V11/*v1*/[6][6][6][8] = 5;;
(function(s, v){ s[6] = v; if(s[7]){ s[7](); }; s[7] = v[3](s[1]); return v; })(_V11/*v1*/[6][6][6], _V11/*v1*/[6]);;
(function(s, vAr){ var v = vAr[0]; s[6] = v; if(s[7]){ s[7](); }; s[7] = v[3](s[1]); vAr[1](); return v; })(_V11/*v1*/, new _V4/*C1-constructor*/());;
_V11/*v1*/[6][8] = 3;;
_V13/*cntSupposed*/(0);;
(function(s, vAr){ var v = vAr[0]; s[6] = v; if(s[7]){ s[7](); }; s[7] = v[3](s[1]); vAr[1](); return v; })(_V12/*v2*/, new _V4/*C1-constructor*/());;
_V12/*v2*/[6][8] = 4;;
_V13/*cntSupposed*/(3);;
if(_V8/*failed*/){
return {"success": false};;
};
;
return {"success": true};;
;
})();
;promiseland._registerModule({ hashStr: "d5c4130fe09db261b4e797ff99b23065", "module": _V1, promising: false });
return _V1;
});
})();