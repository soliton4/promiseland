(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "e62bbff7b7e4720c24bceb541f0999e1" })){ return promiseland._getModule("e62bbff7b7e4720c24bceb541f0999e1"); };
var PL$1 = (function(){
"use strict";
var PL$3/*Type1*/;
var PL$6/*Type2*/;
var PL$8/*a*/;
var PL$9/*b*/;

/* ---------------------------- */
/* type Type1 */
var PL$2/*type:Type1*/ = classSystem._createProvisionalClass();
PL$3/*Type1*/ = PL$2/*type:Type1*/
var PL$4/*Type1-constructor*/ = undefined;
classSystem.readyPromise(PL$2/*type:Type1*/).then(function(parType){
  PL$2/*type:Type1*/ = parType;
  PL$4/*Type1-constructor*/ = classSystem.getTypeConstructor(PL$2/*type:Type1*/);
});
/* ---------------------------- */


/* ---------------------------- */
/* type Type2 */
var PL$5/*type:Type2*/ = classSystem._createProvisionalClass();
PL$6/*Type2*/ = PL$5/*type:Type2*/
var PL$7/*Type2-constructor*/ = undefined;
classSystem.readyPromise(PL$5/*type:Type2*/).then(function(parType){
  PL$5/*type:Type2*/ = parType;
  PL$7/*Type2-constructor*/ = classSystem.getTypeConstructor(PL$5/*type:Type2*/);
});
/* ---------------------------- */


  ;
  classSystem._resolveProvisional(PL$2/*type:Type1*/, classSystem.createClass({className: "Type1",members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "hashStr": "e62bbff7b7e4720c24bceb541f0999e1", "name": "Type1"}, {"a": 1, "b": 2}));PL$3/*Type1*/;
  classSystem._resolveProvisional(PL$5/*type:Type2*/, classSystem.createClass({className: "Type2",members: [{"name":"x","type":classSystem.getBuiltinType("var")},{"name":"y","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "hashStr": "e62bbff7b7e4720c24bceb541f0999e1", "name": "Type2"}, {"x": 3, "y": 4}));PL$6/*Type2*/;
  try
  {
    PL$8/*a*/ = new PL$4/*Type1-constructor*/();
    PL$9/*b*/ = new PL$7/*Type2-constructor*/();
    PL$9/*b*/[4] = 10;
    PL$9/*b*/[3] = PL$8/*a*/[3];
    if((((PL$9/*b*/[4] == 10) && (PL$9/*b*/[3] == 1)) && (PL$8/*a*/[3] == PL$9/*b*/[3]))){
      return {
        "success": true
      };
    };}catch(PL$10/*e*/){
    return {
      "success": false
    };};
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
