(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "4eea94df34736533694ed8fc4ef9169e" })){ return promiseland._getModule("4eea94df34736533694ed8fc4ef9169e"); };
var PL$1 = (function(){
"use strict";
var PL$3/*C1*/;
var PL$5/*v1*/;
var _TPL$5/*v1*/;
var PL$6/*v2*/;
var _TPL$6/*v2*/;

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
    classSystem._resolveProvisional(PL$2/*type:C1*/, classSystem.createClass({className: "C1",members: [], "extends": [], "hasFreePart": true, "track": true, "hashStr": "4eea94df34736533694ed8fc4ef9169e", "name": "C1"}, {}));PL$3/*C1*/;
    PL$5/*v1*/;
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
    })(new PL$4/*C1-constructor*/())/*end temp assign*/;
    /*tracked assign*/(function(v){
    if (_TPL$5/*v1*/){ _TPL$5/*v1*/(); };
    PL$5/*v1*/ = v;
    if (v){
    _TPL$5/*v1*/ = v[2]();
    }else{
    _TPL$5/*v1*/ = undefined;
    };
    return v;
    })(PL$6/*v2*/)/*end assign*/
    ;}catch(PL$7/*e*/){
    return {
      "success": false
    };};
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
