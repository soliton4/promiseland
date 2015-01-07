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

if (promiseland._hasModule({ hashStr: "25ab56b0eb69593a9b036474c92fb588" })){ return promiseland._getModule("25ab56b0eb69593a9b036474c92fb588"); };
var PL$1 = (function(){
"use strict";
var PL$2/*asmFactory*/;
function PL$2/*asmFactory*/(PL$3/*stdlib*/, PL$4/*foreign*/, PL$5/*heap*/){
"use asm";

var PL$6/*imul*/;
var PL$7/*min*/;

  ;
  "use asm";
  PL$6/*imul*/ = PL$3/*stdlib*/["Math"]["imul"];
  PL$7/*min*/ = PL$3/*stdlib*/["Math"]["min"];
  return {};
  ;};
function PL$2/*asmFactory*/(PL$3/*stdlib*/, PL$4/*foreign*/, PL$5/*heap*/){
"use asm";

var PL$6/*imul*/;
var PL$7/*min*/;
var PL$8/*max*/;
var PL$9/*pow*/;
var PL$10/*out*/;
var PL$11/*out32*/;
var PL$12/*inp*/;
var PL$13/*mem*/;
var PL$14/*mem32*/;
var PL$15/*vt*/;
var PL$16/*gt*/;
var PL$17/*gt2*/;
var PL$18/*bt*/;
var PL$19/*width*/;
var PL$20/*height*/;
var PL$21/*lumaSize*/;
var PL$22/*chromaSize*/;
var PL$23/*inpSize*/;
var PL$24/*outSize*/;
var PL$25/*inpStart*/;
var PL$26/*outStart*/;
var PL$27/*widthFour*/;
var PL$28/*cacheStart*/;
function PL$29/*init*/(PL$30/*parWidth*/, PL$31/*parHeight*/){
var PL$32/*i*/;

  ;
  PL$30/*parWidth*/ = (PL$30/*parWidth*/ | 0);
  PL$31/*parHeight*/ = (PL$31/*parHeight*/ | 0);
  PL$32/*i*/ = 0;
  ;};
function PL$33/*doit*/(){
var PL$34/*ystart*/;
var PL$35/*ustart*/;
var PL$36/*vstart*/;
var PL$37/*y*/;
var PL$38/*yn*/;
var PL$39/*u*/;
var PL$40/*v*/;
var PL$41/*o*/;
var PL$42/*line*/;
var PL$43/*col*/;
var PL$44/*usave*/;
var PL$45/*vsave*/;
var PL$46/*ostart*/;
var PL$47/*cacheAdr*/;

  ;
  PL$34/*ystart*/ = 0;
  PL$35/*ustart*/ = 0;
  PL$36/*vstart*/ = 0;
  PL$37/*y*/ = 0;
  PL$38/*yn*/ = 0;
  PL$39/*u*/ = 0;
  PL$40/*v*/ = 0;
  PL$41/*o*/ = 0;
  PL$42/*line*/ = 0;
  PL$43/*col*/ = 0;
  PL$44/*usave*/ = 0;
  PL$45/*vsave*/ = 0;
  PL$46/*ostart*/ = 0;
  PL$47/*cacheAdr*/ = 0;
  PL$46/*ostart*/ = (PL$26/*outStart*/ | 0);
  PL$34/*ystart*/ = (PL$25/*inpStart*/ | 0);
  PL$35/*ustart*/ = (((PL$34/*ystart*/ + PL$21/*lumaSize*/) | 0) | 0);
  PL$36/*vstart*/ = ((PL$35/*ustart*/ + PL$22/*chromaSize*/) | 0);
  ;};

  ;
  "use asm";
  PL$6/*imul*/ = PL$3/*stdlib*/["Math"]["imul"];
  PL$7/*min*/ = PL$3/*stdlib*/["Math"]["min"];
  PL$8/*max*/ = PL$3/*stdlib*/["Math"]["max"];
  PL$9/*pow*/ = PL$3/*stdlib*/["Math"]["pow"];
  PL$10/*out*/ = new PL$3/*stdlib*/["Uint8Array"](PL$5/*heap*/);
  PL$11/*out32*/ = new PL$3/*stdlib*/["Uint32Array"](PL$5/*heap*/);
  PL$12/*inp*/ = new PL$3/*stdlib*/["Uint8Array"](PL$5/*heap*/);
  PL$13/*mem*/ = new PL$3/*stdlib*/["Uint8Array"](PL$5/*heap*/);
  PL$14/*mem32*/ = new PL$3/*stdlib*/["Uint32Array"](PL$5/*heap*/);
  PL$15/*vt*/ = 1.370705;
  PL$16/*gt*/ = 0.698001;
  PL$17/*gt2*/ = 0.337633;
  PL$18/*bt*/ = 1.732446;
  PL$19/*width*/ = 0;
  PL$20/*height*/ = 0;
  PL$21/*lumaSize*/ = 0;
  PL$22/*chromaSize*/ = 0;
  PL$23/*inpSize*/ = 0;
  PL$24/*outSize*/ = 0;
  PL$25/*inpStart*/ = 0;
  PL$26/*outStart*/ = 0;
  PL$27/*widthFour*/ = 0;
  PL$28/*cacheStart*/ = 0;
  PL$29/*init*/;
  ;
  PL$33/*doit*/;
  ;
  return {"init": PL$29/*init*/,
"doit": PL$33/*doit*/};
  ;};

  ;
  PL$2/*asmFactory*/;
  ;
  PL$2/*asmFactory*/;
  ;})();
;return PL$1;
});
})();