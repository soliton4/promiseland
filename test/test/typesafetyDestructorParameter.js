(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "1c27915421db6c724a7af79a2c806394" })){ return promiseland._getModule("1c27915421db6c724a7af79a2c806394"); };
var PL$12/*console*/;try{PL$12/*console*/ = console;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$3/*C1*/;
var PL$11/*a*/;
var _TPL$11/*a*/;

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

function PL$9/*f1*/(PL$10/*p1*/){
var _TPL$10/*p1*/;
if(PL$10/*p1*/){ _TPL$10/*p1*/ = PL$10/*p1*/[1];
PL$10/*p1*/ = PL$10/*p1*/[0];}

  try{;
  PL$7/*cntSupposed*/(0);
  if (_TPL$10/*p1*/){ _TPL$10/*p1*/();};}catch(e){if (_TPL$10/*p1*/){ _TPL$10/*p1*/();};throw e};;};

  ;
  var PL$5/*failed*/ = false;
  ;
  var PL$6/*cnt*/ = 0;
  ;
  classSystem._resolveProvisional(PL$2/*type:C1*/, classSystem.createClass({className: "C1",members: [{"name":"destroy","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "track": true, "hashStr": "1c27915421db6c724a7af79a2c806394", "name": "C1"}, {"destroy": (function(){
  
    ;
    PL$6/*cnt*/++;
    ;})}));PL$3/*C1*/;
  var PL$7/*cntSupposed*/ = (function(PL$8/*s*/){
  
    ;
    if((PL$6/*cnt*/ == PL$8/*s*/)){
      return;
    };
    ;
    PL$5/*failed*/ = true;
    ;});
  ;
  PL$7/*cntSupposed*/(0);
  /* function f1 (){} - hoisted */;
  ;
  PL$7/*cntSupposed*/(0);
  /*temp tracked assign*/(function(vAr){
    if (_TPL$11/*a*/){ _TPL$11/*a*/(); };
    if(vAr){
      var v = vAr[0];
      PL$11/*a*/ = v;
      _TPL$11/*a*/ = vAr[1];
      return v;
    }else{
      PL$11/*a*/ = undefined; 
      _TPL$11/*a*/ = undefined;
      return;
    };
  })(new PL$4/*C1-constructor*/())/*end temp assign*/;
  PL$7/*cntSupposed*/(0);
  PL$9/*f1*/((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$11/*a*/));
  PL$7/*cntSupposed*/(0);
  /*temp tracked assign*/(function(vAr){
    if (_TPL$11/*a*/){ _TPL$11/*a*/(); };
    if(vAr){
      var v = vAr[0];
      PL$11/*a*/ = v;
      _TPL$11/*a*/ = vAr[1];
      return v;
    }else{
      PL$11/*a*/ = undefined; 
      _TPL$11/*a*/ = undefined;
      return;
    };
  })(new PL$4/*C1-constructor*/())/*end temp assign*/;
  PL$7/*cntSupposed*/(1);
  if(PL$5/*failed*/){
    PL$12/*console*/["log"]("failed");
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
