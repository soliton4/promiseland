(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "abf5635440ccb84d0a921e731e3c628b" })){ return promiseland._getModule("abf5635440ccb84d0a921e731e3c628b"); };
var PL$1 = (function(){
"use strict";
var PL$3/*C1*/;
var PL$6/*b*/;
var _TPL$6/*b*/;

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
  classSystem._resolveProvisional(PL$2/*type:C1*/, classSystem.createClass({className: "C1",members: [{"name":"member1","type":classSystem.getBuiltinType("var")},{"name":"constructor","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "track": true, "hashStr": "abf5635440ccb84d0a921e731e3c628b", "name": "C1"}, {"member1": (function(){
  var PL$5/*a*/;
  var _TPL$5/*a*/;
  
    try{;
    /*tracked assign*/(function(v){
    if (_TPL$5/*a*/){ _TPL$5/*a*/(); };
    PL$5/*a*/ = v;
    if (v){
    _TPL$5/*a*/ = v[2]();
    }else{
    _TPL$5/*a*/ = undefined;
    };
    return v;
    })(PL$6/*b*/)/*end assign*/
    ;
    if (_TPL$5/*a*/){ _TPL$5/*a*/();};}catch(e){if (_TPL$5/*a*/){ _TPL$5/*a*/();};throw e};;}), "constructor": (function(){
  var PL$5/*a*/;
  var _TPL$5/*a*/;
  
    try{;
    /*tracked assign*/(function(v){
    if (_TPL$5/*a*/){ _TPL$5/*a*/(); };
    PL$5/*a*/ = v;
    if (v){
    _TPL$5/*a*/ = v[2]();
    }else{
    _TPL$5/*a*/ = undefined;
    };
    return v;
    })(this)/*end assign*/
    ;
    if (_TPL$5/*a*/){ _TPL$5/*a*/();};}catch(e){if (_TPL$5/*a*/){ _TPL$5/*a*/();};throw e};;})}));PL$3/*C1*/;
  PL$6/*b*/;
  (function(){
  var PL$5/*a*/;
  var _TPL$5/*a*/;
  
    try{;
    /*tracked assign*/(function(v){
    if (_TPL$5/*a*/){ _TPL$5/*a*/(); };
    PL$5/*a*/ = v;
    if (v){
    _TPL$5/*a*/ = v[2]();
    }else{
    _TPL$5/*a*/ = undefined;
    };
    return v;
    })(PL$6/*b*/)/*end assign*/
    ;
    if (_TPL$5/*a*/){ _TPL$5/*a*/();};}catch(e){if (_TPL$5/*a*/){ _TPL$5/*a*/();};throw e};;});
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
