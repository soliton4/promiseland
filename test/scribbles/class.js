(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "d4ed6ebe11e279453b7f908db653becd" })){ return promiseland._getModule("d4ed6ebe11e279453b7f908db653becd"); };
var PL$10/*console*/;try{PL$10/*console*/ = console;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$3/*Ca*/;
var PL$6/*Cb*/;
var PL$8/*a*/;
var PL$9/*b*/;

/* ---------------------------- */
/* type Ca */
var PL$2/*type:Ca*/ = classSystem._createProvisionalClass();
PL$3/*Ca*/ = PL$2/*type:Ca*/
var PL$4/*Ca-constructor*/ = undefined;
classSystem.readyPromise(PL$2/*type:Ca*/).then(function(parType){
  PL$2/*type:Ca*/ = parType;
  PL$4/*Ca-constructor*/ = classSystem.getTypeConstructor(PL$2/*type:Ca*/);
});
/* ---------------------------- */


/* ---------------------------- */
/* type Cb */
var PL$5/*type:Cb*/ = classSystem._createProvisionalClass();
PL$6/*Cb*/ = PL$5/*type:Cb*/
var PL$7/*Cb-constructor*/ = undefined;
classSystem.readyPromise(PL$5/*type:Cb*/).then(function(parType){
  PL$5/*type:Cb*/ = parType;
  PL$7/*Cb-constructor*/ = classSystem.getTypeConstructor(PL$5/*type:Cb*/);
});
/* ---------------------------- */


  ;
  classSystem._resolveProvisional(PL$2/*type:Ca*/, classSystem.createClass({className: "Ca",members: [{"name":"m","type":PL$5/*type:Cb*/},{"name":"s","type":PL$2/*type:Ca*/},{"name":"id","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "hashStr": "d4ed6ebe11e279453b7f908db653becd", "name": "Ca"}, {"m": undefined, "s": undefined, "id": 1}));PL$3/*Ca*/;
  classSystem._resolveProvisional(PL$5/*type:Cb*/, classSystem.createClass({className: "Cb",members: [{"name":"m","type":PL$2/*type:Ca*/},{"name":"s","type":PL$5/*type:Cb*/},{"name":"id","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "hashStr": "d4ed6ebe11e279453b7f908db653becd", "name": "Cb"}, {"m": undefined, "s": undefined, "id": 2}));PL$6/*Cb*/;
  PL$8/*a*/ = new PL$4/*Ca-constructor*/();
  PL$9/*b*/ = new PL$7/*Cb-constructor*/();
  PL$9/*b*/[3] = PL$8/*a*/;
  PL$10/*console*/["log"](PL$8/*a*/[5]);
  PL$10/*console*/["log"](PL$9/*b*/[5]);
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
