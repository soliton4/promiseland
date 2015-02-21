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
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "9f15061519be5eb945b1199ed0288034" })){ return promiseland._getModule("9f15061519be5eb945b1199ed0288034"); };
var PL$1 = (function(){
"use strict";
var PL$3/*C1*/;
var PL$7/*v1*/;
var _TPL$7/*v1*/;
var PL$8/*v2*/;
var _TPL$8/*v2*/;

/* ---------------------------- */
/* type C1 */
var PL$2/*type:C1*/ = classSystem._createProvisionalClass();
PL$3/*C1*/ = PL$2/*type:C1*/
var PL$4/*C1-constructor*/ = undefined;
classSystem.readyPromise(PL$2/*type:C1*/).then(function(parType){
  PL$2/*type:C1*/ = parType;
  PL$4/*C1-constructor*/ = classSystem.getTypeConstructor(PL$2/*type:C1*/);
});
/* ---------------------------- */


  ;
  try
  {
    var PL$5/*check*/ = false;
    ;
    classSystem._resolveProvisional(PL$2/*type:C1*/, classSystem.createClass({className: "C1",members: [{"name":"constructor","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "track": true, "hashStr": "9f15061519be5eb945b1199ed0288034", "name": "C1"}, {"constructor": (function(){
    var PL$6/*self*/;
    var _TPL$6/*self*/;
    
      try{;
      /*tracked assign*/(function(v){
      if (_TPL$6/*self*/){ _TPL$6/*self*/(); };
      PL$6/*self*/ = v;
      if (v){
      _TPL$6/*self*/ = v[2]();
      }else{
      _TPL$6/*self*/ = undefined;
      };
      return v;
      })(this)/*end assign*/
      ;
      PL$5/*check*/ = true;
      if (_TPL$6/*self*/){ _TPL$6/*self*/();};}catch(e){if (_TPL$6/*self*/){ _TPL$6/*self*/();};throw e};;})}));PL$3/*C1*/;
    PL$7/*v1*/;
    /*temp tracked assign*/(function(vAr){
      if (_TPL$8/*v2*/){ _TPL$8/*v2*/(); };
      if(vAr){
        var v = vAr[0];
        PL$8/*v2*/ = v;
        _TPL$8/*v2*/ = vAr[1];
        return v;
      }else{
        PL$8/*v2*/ = undefined; 
        _TPL$8/*v2*/ = undefined;
        return;
      };
    })(new PL$4/*C1-constructor*/())/*end temp assign*/;
    /*tracked assign*/(function(v){
    if (_TPL$7/*v1*/){ _TPL$7/*v1*/(); };
    PL$7/*v1*/ = v;
    if (v){
    _TPL$7/*v1*/ = v[2]();
    }else{
    _TPL$7/*v1*/ = undefined;
    };
    return v;
    })(PL$8/*v2*/)/*end assign*/
    ;}catch(PL$9/*e*/){
    return {
      "success": false
    };};
  ;
  if(PL$5/*check*/){
    return {
      "success": true
    };
  };
  ;
  return {
    "success": false
  };
  ;})();
;return PL$1;
});
})();