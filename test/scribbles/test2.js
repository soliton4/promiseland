(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "2812593f22c416e2891c0ded059eb5fe" })){ return promiseland._getModule("2812593f22c416e2891c0ded059eb5fe"); };
var PL$1 = (function(){
"use strict";
var PL$3/*ClassA*/;
var PL$6/*ClassB*/;
var PL$9/*varA*/;
var PL$10/*varB*/;

/* ---------------------------- */
/* type ClassA */
var PL$2/*type:ClassA*/ = classSystem._createProvisionalClass();
PL$3/*ClassA*/ = PL$2/*type:ClassA*/
var PL$4/*ClassA-constructor*/ = undefined;
classSystem.readyPromise(PL$2/*type:ClassA*/).then(function(parType){
  PL$2/*type:ClassA*/ = parType;
  PL$4/*ClassA-constructor*/ = classSystem.getTypeConstructor(PL$2/*type:ClassA*/);
});
/* ---------------------------- */


/* ---------------------------- */
/* type ClassB */
var PL$5/*type:ClassB*/ = classSystem._createProvisionalClass();
PL$6/*ClassB*/ = PL$5/*type:ClassB*/
var PL$7/*ClassB-constructor*/ = undefined;
classSystem.readyPromise(PL$5/*type:ClassB*/).then(function(parType){
  PL$5/*type:ClassB*/ = parType;
  PL$7/*ClassB-constructor*/ = classSystem.getTypeConstructor(PL$5/*type:ClassB*/);
});
/* ---------------------------- */


  ;
  classSystem._resolveProvisional(PL$2/*type:ClassA*/, classSystem.createClass({className: "ClassA",members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "hashStr": "2812593f22c416e2891c0ded059eb5fe", "name": "ClassA"}, {"a": 1, "b": 2}));PL$3/*ClassA*/;
  classSystem._resolveProvisional(PL$5/*type:ClassB*/, classSystem.createClass({className: "ClassB",members: [{"name":"c","type":classSystem.getBuiltinType("var")},{"name":"d","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "hashStr": "2812593f22c416e2891c0ded059eb5fe", "name": "ClassB"}, {"c": 3, "d": 4}));PL$6/*ClassB*/;
  var PL$8/*var1*/ = 1;
  ;
  PL$9/*varA*/ = new PL$4/*ClassA-constructor*/();
  PL$10/*varB*/ = new PL$4/*ClassA-constructor*/();
  PL$9/*varA*/ = PL$10/*varB*/;
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
