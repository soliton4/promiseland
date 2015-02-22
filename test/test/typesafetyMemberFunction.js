(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "0ed06f66d2783c4b7f338ed58b63db59" })){ return promiseland._getModule("0ed06f66d2783c4b7f338ed58b63db59"); };
var PL$1 = (function(){
"use strict";
var PL$3/*C1*/;
var PL$5/*v1*/;
var PL$6/*v2*/;

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
  classSystem._resolveProvisional(PL$2/*type:C1*/, classSystem.createClass({className: "C1",members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")},{"name":"c","type":(classSystem.createFunctionType({ "return": PL$2/*type:C1*/, arguments: []}))}], "extends": [], "hasFreePart": true, "hashStr": "0ed06f66d2783c4b7f338ed58b63db59", "name": "C1"}, {"a": 1, "b": (function(){
  
    ;
    this[3] = 2;
    ;}), "c": (function(){
  
    ;
    return this;
    ;})}));PL$3/*C1*/;
  PL$5/*v1*/ = new PL$4/*C1-constructor*/();
  PL$6/*v2*/ = PL$5/*v1*/[5]();
  PL$5/*v1*/[4]();
  if((PL$6/*v2*/[3] == 2)){
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
