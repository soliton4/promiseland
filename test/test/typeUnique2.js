(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "994e4daaa95faf8bedcdc70fd8ccafed" })){ return promiseland._getModule("994e4daaa95faf8bedcdc70fd8ccafed"); };
var PL$1 = (function(){
"use strict";
var PL$3/*T1*/;
var PL$5/*v1*/;
var _TPL$5/*v1*/;
var PL$6/*v2*/;
var _TPL$6/*v2*/;

/* ---------------------------- */
/* type T1 */
var PL$2/*type:T1*/ = classSystem._createProvisionalClass();
PL$3/*T1*/ = PL$2/*type:T1*/
var PL$4/*T1-constructor*/ = undefined;
classSystem.readyPromise(PL$2/*type:T1*/).then(function(parType){
  PL$2/*type:T1*/ = parType;
  PL$4/*T1-constructor*/ = classSystem.getTypeConstructor(PL$2/*type:T1*/);
});
/* ---------------------------- */


  ;
  classSystem._resolveProvisional(PL$2/*type:T1*/, classSystem.createClass({className: "T1",members: [{"name":"a","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "track": true, "hashStr": "994e4daaa95faf8bedcdc70fd8ccafed", "name": "T1", "unique": true}, {"a": 1}));PL$3/*T1*/;
  /*temp tracked assign*/(function(vAr){
    if (_TPL$5/*v1*/){ _TPL$5/*v1*/(); };
    if(vAr){
      var v = vAr[0];
      PL$5/*v1*/ = v;
      _TPL$5/*v1*/ = vAr[1];
      return v;
    }else{
      PL$5/*v1*/ = undefined; 
      _TPL$5/*v1*/ = undefined;
      return;
    };
  })(new PL$4/*T1-constructor*/("x"))/*end temp assign*/;
  if((PL$5/*v1*/[7] !== 1)){
    return {
      "success": false
    };
  };
  ;
  PL$5/*v1*/[7] = 2;
  /*temp tracked assign*/(function(vAr){
    if (_TPL$6/*v2*/){ _TPL$6/*v2*/(); };
    if(vAr){
      var v = vAr[0];
      PL$6/*v2*/ = v;
      _TPL$6/*v2*/ = vAr[1];
      return v;
    }else{
      PL$6/*v2*/ = undefined; 
      _TPL$6/*v2*/ = undefined;
      return;
    };
  })(new PL$4/*T1-constructor*/("x"))/*end temp assign*/;
  return {
    "success": true
  };
  if((PL$6/*v2*/[7] === 1)){
    return {
      "success": false
    };
  };
  ;
  return {
    "success": true
  };
  if((PL$6/*v2*/[7] !== 2)){
    return {
      "success": false
    };
  };
  ;
  return {
    "success": true
  };
  /*temp tracked assign*/(function(vAr){
    if (_TPL$5/*v1*/){ _TPL$5/*v1*/(); };
    if(vAr){
      var v = vAr[0];
      PL$5/*v1*/ = v;
      _TPL$5/*v1*/ = vAr[1];
      return v;
    }else{
      PL$5/*v1*/ = undefined; 
      _TPL$5/*v1*/ = undefined;
      return;
    };
  })(new PL$4/*T1-constructor*/("y"))/*end temp assign*/;
  /*temp tracked assign*/(function(vAr){
    if (_TPL$6/*v2*/){ _TPL$6/*v2*/(); };
    if(vAr){
      var v = vAr[0];
      PL$6/*v2*/ = v;
      _TPL$6/*v2*/ = vAr[1];
      return v;
    }else{
      PL$6/*v2*/ = undefined; 
      _TPL$6/*v2*/ = undefined;
      return;
    };
  })(new PL$4/*T1-constructor*/("y"))/*end temp assign*/;
  /*temp tracked assign*/(function(vAr){
    if (_TPL$5/*v1*/){ _TPL$5/*v1*/(); };
    if(vAr){
      var v = vAr[0];
      PL$5/*v1*/ = v;
      _TPL$5/*v1*/ = vAr[1];
      return v;
    }else{
      PL$5/*v1*/ = undefined; 
      _TPL$5/*v1*/ = undefined;
      return;
    };
  })(new PL$4/*T1-constructor*/("x"))/*end temp assign*/;
  return {
    "success": true
  };
  if((PL$5/*v1*/[7] !== 1)){
    return {
      "success": false
    };
  };
  ;
  return {
    "success": true
  };
  ;})();
;return PL$1;
};
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    module.exports = __modFun(function(modulesAr, callback, errBack){
      // the require function for CommonJs
      var args = [];
      try{
        var i = 0;
        var l = modulesAr.length;
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    }, require("promiseland"));
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require", "promiseland"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
