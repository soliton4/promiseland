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
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "246af0ccd0f1b17b598481b08ce73094" })){ return promiseland._getModule("246af0ccd0f1b17b598481b08ce73094"); };
var PL$1 = (function(){
"use strict";
var PL$3/*T1*/;
var PL$5/*v1*/;
var _TPL$5/*v1*/;
var PL$6/*v2*/;
var _TPL$6/*v2*/;
var PL$2/*type:T1*/ = classSystem._createProvisionalClass();
PL$3/*T1*/ = PL$2/*type:T1*/;
var PL$4/*T1-constructor*/ = undefined;classSystem.readyPromise(PL$2/*type:T1*/).then(function(parType){PL$2/*type:T1*/ = parType;PL$4/*T1-constructor*/ = classSystem.getTypeConstructor(PL$2/*type:T1*/);});;
classSystem._resolveProvisional(PL$2/*type:T1*/, classSystem.createClass({members: [{"name":"a","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "track": true, "unique": true}, {"a": 1}));PL$3/*T1*/;;
/*temp tracked assign*/(function(vAr){
if (_TPL$5/*v1*/){ _TPL$5/*v1*/(); };
if(vAr){
var v = vAr[0];
PL$5/*v1*/ = v;
_TPL$5/*v1*/ = vAr[1];
return v;
}else{
PL$5/*v1*/ = undefined; _TPL$5/*v1*/ = undefined;
return;
}; })(new PL$4/*T1-constructor*/("x"))/*end temp assign*/
;
if((PL$5/*v1*/[7] !== 1)){
return {"success": false};;
};
;
PL$5/*v1*/[7] = 2;;
/*temp tracked assign*/(function(vAr){
if (_TPL$6/*v2*/){ _TPL$6/*v2*/(); };
if(vAr){
var v = vAr[0];
PL$6/*v2*/ = v;
_TPL$6/*v2*/ = vAr[1];
return v;
}else{
PL$6/*v2*/ = undefined; _TPL$6/*v2*/ = undefined;
return;
}; })(new PL$4/*T1-constructor*/("x"))/*end temp assign*/
;
if((PL$6/*v2*/[7] === 1)){
return {"success": false};;
};
;
if((PL$6/*v2*/[7] !== 2)){
return {"success": false};;
};
;
/*temp tracked assign*/(function(vAr){
if (_TPL$5/*v1*/){ _TPL$5/*v1*/(); };
if(vAr){
var v = vAr[0];
PL$5/*v1*/ = v;
_TPL$5/*v1*/ = vAr[1];
return v;
}else{
PL$5/*v1*/ = undefined; _TPL$5/*v1*/ = undefined;
return;
}; })(new PL$4/*T1-constructor*/("y"))/*end temp assign*/
;;
/*temp tracked assign*/(function(vAr){
if (_TPL$6/*v2*/){ _TPL$6/*v2*/(); };
if(vAr){
var v = vAr[0];
PL$6/*v2*/ = v;
_TPL$6/*v2*/ = vAr[1];
return v;
}else{
PL$6/*v2*/ = undefined; _TPL$6/*v2*/ = undefined;
return;
}; })(new PL$4/*T1-constructor*/("y"))/*end temp assign*/
;;
/*temp tracked assign*/(function(vAr){
if (_TPL$5/*v1*/){ _TPL$5/*v1*/(); };
if(vAr){
var v = vAr[0];
PL$5/*v1*/ = v;
_TPL$5/*v1*/ = vAr[1];
return v;
}else{
PL$5/*v1*/ = undefined; _TPL$5/*v1*/ = undefined;
return;
}; })(new PL$4/*T1-constructor*/("x"))/*end temp assign*/
;;
if((PL$5/*v1*/[7] !== 1)){
return {"success": false};;
};
;
return {"success": true};;
;
})();
;return PL$1;
});
})();