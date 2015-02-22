(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "41d20fb8ec4dd0fce6452dc354f70d0d" })){ return promiseland._getModule("41d20fb8ec4dd0fce6452dc354f70d0d"); };
var PL$1 = (function(){
"use strict";
var PL$3/*T1*/;
var PL$5/*v1*/;
var PL$6/*v2*/;

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
  classSystem._resolveProvisional(PL$2/*type:T1*/, classSystem.createClass({className: "T1",members: [{"name":"a","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "hashStr": "41d20fb8ec4dd0fce6452dc354f70d0d", "name": "T1", "unique": true}, {"a": 1}));PL$3/*T1*/;
  PL$5/*v1*/ = new PL$4/*T1-constructor*/("x");
  if((PL$5/*v1*/[4] !== 1)){
    return {
      "success": false
    };
  };
  ;
  PL$5/*v1*/[4] = 2;
  PL$6/*v2*/ = new PL$4/*T1-constructor*/("x");
  if((PL$6/*v2*/[4] === 1)){
    return {
      "success": false
    };
  };
  ;
  if((PL$6/*v2*/[4] !== 2)){
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
