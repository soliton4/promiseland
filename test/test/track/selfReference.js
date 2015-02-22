(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "ba298904bcaad9c42a7880fda7ffc996" })){ return promiseland._getModule("ba298904bcaad9c42a7880fda7ffc996"); };
var PL$1 = (function(){
"use strict";
var PL$3/*C1*/;
var PL$7/*b*/;
var _TPL$7/*b*/;

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
  var PL$5/*destroyed*/ = false;
  ;
  classSystem._resolveProvisional(PL$2/*type:C1*/, classSystem.createClass({className: "C1",members: [{"name":"member1","type":classSystem.getBuiltinType("var")},{"name":"constructor","type":classSystem.getBuiltinType("var")},{"name":"destroy","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "track": true, "hashStr": "ba298904bcaad9c42a7880fda7ffc996", "name": "C1"}, {"member1": (function(){
  var PL$6/*a*/;
  var _TPL$6/*a*/;
  
    try{;
    /*tracked assign*/(function(v){
    if (_TPL$6/*a*/){ _TPL$6/*a*/(); };
    PL$6/*a*/ = v;
    if (v){
    _TPL$6/*a*/ = v[2]();
    }else{
    _TPL$6/*a*/ = undefined;
    };
    return v;
    })(PL$7/*b*/)/*end assign*/
    ;
    if (_TPL$6/*a*/){ _TPL$6/*a*/();};}catch(e){if (_TPL$6/*a*/){ _TPL$6/*a*/();};throw e};;}), "constructor": (function(){
  var PL$6/*a*/;
  var _TPL$6/*a*/;
  
    try{;
    /*tracked assign*/(function(v){
    if (_TPL$6/*a*/){ _TPL$6/*a*/(); };
    PL$6/*a*/ = v;
    if (v){
    _TPL$6/*a*/ = v[2]();
    }else{
    _TPL$6/*a*/ = undefined;
    };
    return v;
    })(this)/*end assign*/
    ;
    if (_TPL$6/*a*/){ _TPL$6/*a*/();};}catch(e){if (_TPL$6/*a*/){ _TPL$6/*a*/();};throw e};;}), "destroy": (function(){
  
    ;
    PL$5/*destroyed*/ = true;
    ;})}));PL$3/*C1*/;
  PL$7/*b*/;
  /*temp tracked assign*/(function(vAr){
    if (_TPL$7/*b*/){ _TPL$7/*b*/(); };
    if(vAr){
      var v = vAr[0];
      PL$7/*b*/ = v;
      _TPL$7/*b*/ = vAr[1];
      return v;
    }else{
      PL$7/*b*/ = undefined; 
      _TPL$7/*b*/ = undefined;
      return;
    };
  })(new PL$4/*C1-constructor*/())/*end temp assign*/;
  if(PL$5/*destroyed*/){
    return {
      "success": false
    };
  };
  ;
  /*temp tracked assign*/(function(vAr){
    if (_TPL$7/*b*/){ _TPL$7/*b*/(); };
    if(vAr){
      var v = vAr[0];
      PL$7/*b*/ = v;
      _TPL$7/*b*/ = vAr[1];
      return v;
    }else{
      PL$7/*b*/ = undefined; 
      _TPL$7/*b*/ = undefined;
      return;
    };
  })(new PL$4/*C1-constructor*/())/*end temp assign*/;
  if(! PL$5/*destroyed*/){
    return {
      "success": false
    };
  };
  ;
  PL$5/*destroyed*/ = false;
  var PL$8/*destroyed2*/ = false;
  ;
  (function(){
  var PL$9/*c*/;
  var _TPL$9/*c*/;
  
    try{;
    /*temp tracked assign*/(function(vAr){
      if (_TPL$9/*c*/){ _TPL$9/*c*/(); };
      if(vAr){
        var v = vAr[0];
        PL$9/*c*/ = v;
        _TPL$9/*c*/ = vAr[1];
        return v;
      }else{
        PL$9/*c*/ = undefined; 
        _TPL$9/*c*/ = undefined;
        return;
      };
    })(new PL$4/*C1-constructor*/())/*end temp assign*/;
    PL$9/*c*/[6]();
    /*temp tracked assign*/(function(vAr){
      if (_TPL$7/*b*/){ _TPL$7/*b*/(); };
      if(vAr){
        var v = vAr[0];
        PL$7/*b*/ = v;
        _TPL$7/*b*/ = vAr[1];
        return v;
      }else{
        PL$7/*b*/ = undefined; 
        _TPL$7/*b*/ = undefined;
        return;
      };
    })(new PL$4/*C1-constructor*/())/*end temp assign*/;
    PL$8/*destroyed2*/ = PL$5/*destroyed*/;
    if (_TPL$9/*c*/){ _TPL$9/*c*/();};}catch(e){if (_TPL$9/*c*/){ _TPL$9/*c*/();};throw e};;})();
  if(! PL$8/*destroyed2*/){
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
