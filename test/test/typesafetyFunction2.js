(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "0c11ca25206ec42f77a70d97f2323884" })){ return promiseland._getModule("0c11ca25206ec42f77a70d97f2323884"); };
var PL$1 = (function(){
"use strict";
var PL$3/*C1*/;
var PL$5/*b*/;

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

function PL$6/*fun1*/(){
var PL$7/*c*/;

  ;
  PL$7/*c*/ = new PL$4/*C1-constructor*/();
  PL$7/*c*/[3] = 2;
  return PL$7/*c*/;
  ;};

  ;
  classSystem._resolveProvisional(PL$2/*type:C1*/, classSystem.createClass({className: "C1",members: [{"name":"a","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "hashStr": "0c11ca25206ec42f77a70d97f2323884", "name": "C1"}, {"a": 1}));PL$3/*C1*/;
  PL$5/*b*/ = new PL$4/*C1-constructor*/();
  /* function fun1 (){} - hoisted */;
  ;
  PL$5/*b*/ = PL$6/*fun1*/();
  if((PL$5/*b*/[3] == 2)){
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
