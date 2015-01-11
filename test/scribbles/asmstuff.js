(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback, errBack){
      try{
        var i = 0;
        var l = modulesAr.length;
        var args = [];
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    };
    defineFun = function(requireAr, callback){
      requireFun(requireAr, function(){
        module.exports = callback.apply(callback, arguments);
      });
    };
    
  }else if (typeof define == "function" && define.amd){ // AMD
    var _define = define;
    requireFun = require;
    
    defineFun = function(par1, par2){
      if (par1 instanceof Array){
        par1.unshift("require");
      }else{
        par2 = par1;
        par1 = ["require"];
      };
      _define(par1, function(){
        requireFun = arguments[0];
        var args = [];
        for (var i = 1; i < arguments.length; ++i){
          args.push(arguments[i]);
        };
        return par2.apply(par2, args);
      });
    };
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

if (promiseland._hasModule({ hashStr: "2347250c129bed5f2bc0767c8d18b8be" })){ return promiseland._getModule("2347250c129bed5f2bc0767c8d18b8be"); };
var PL$1 = (function(){
"use strict";
function PL$2/*f*/(PL$3/*stdlib*/, PL$4/*foreign*/, PL$5/*heap*/){
function PL$2/*f*/(){

  ;
  var PL$7/*x*/ = 0, PL$8/*y*/ = 0;
  PL$7/*x*/ = (((PL$7/*x*/ | 0) % (PL$8/*y*/ | 0)) | 0);
  ;};
function PL$9/*f2*/(){

  ;
  var PL$10/*a*/ = 0;
  ;};

  ;
  "use axsxxxxxxxm";
  var PL$6/*exp*/ = PL$3/*stdlib*/["Math"]["exp"];
  /* function f (){} - hoisted */;
  ;
  /* function f2 (){} - hoisted */;
  ;
  return {
    
  };
  ;};
function PL$11/*GeometricMean*/(PL$3/*stdlib*/, PL$4/*foreign*/, PL$12/*buffer*/){
"use asm";


  ;
  var PL$6/*exp*/ = PL$3/*stdlib*/.Math.exp;
  var PL$13/*log*/ = PL$3/*stdlib*/.Math.log;
  var PL$14/*values*/ = new PL$3/*stdlib*/.Float64Array(PL$12/*buffer*/);
  function PL$15/*logSum*/(PL$16/*start*/, PL$17/*end*/){
  
    ;
    PL$16/*start*/ = (PL$16/*start*/ | 0);
    PL$17/*end*/ = (PL$17/*end*/ | 0);
    var PL$18/*sum*/ = 0.0, PL$19/*p*/ = 0, PL$20/*q*/ = 0;
    for(PL$19/*p*/ = (PL$16/*start*/ << 3),PL$20/*q*/ = (PL$17/*end*/ << 3);((PL$19/*p*/ | 0) < (PL$20/*q*/ | 0));PL$19/*p*/ = ((PL$19/*p*/ + 8) | 0)){{
      PL$18/*sum*/ = (PL$18/*sum*/ + + PL$13/*log*/(PL$14/*values*/[(PL$19/*p*/ >> 3)]));}};
    if((PL$19/*p*/ | 0)){
      PL$19/*p*/ = (3 | 0);
    };
    ;
    return + PL$18/*sum*/;
    ;};
  function PL$21/*geometricMean*/(PL$16/*start*/, PL$17/*end*/){
  
    ;
    PL$16/*start*/ = (PL$16/*start*/ | 0);
    PL$17/*end*/ = (PL$17/*end*/ | 0);
    return + PL$6/*exp*/((+ PL$15/*logSum*/(PL$16/*start*/, PL$17/*end*/) / + ((PL$17/*end*/ - PL$16/*start*/) | 0)));
    ;};
  return {
    "geometricMean": PL$21/*geometricMean*/
  };
  ;};

  ;
  /* function f (){} - hoisted */;
  /* function GeometricMean (){} - hoisted */;
  ;})();
;return PL$1;
});
})();