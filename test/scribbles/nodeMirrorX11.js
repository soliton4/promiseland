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

if (promiseland._hasModule({ hashStr: "d631118b43b8c0b0e83eb0a16f0fd185" })){ return promiseland._getModule("d631118b43b8c0b0e83eb0a16f0fd185"); };
var PL$1 = (function(){
"use strict";
function PL$2/*asmFactory*/(PL$3/*stdlib*/, PL$4/*foreign*/, PL$5/*heap*/){
"use asm";


  ;
  var PL$6/*imul*/ = PL$3/*stdlib*/.Math.imul;
  var PL$7/*min*/ = PL$3/*stdlib*/.Math.min;
  var PL$8/*max*/ = PL$3/*stdlib*/.Math.max;
  var PL$9/*pow*/ = PL$3/*stdlib*/.Math.pow;
  var PL$10/*out*/ = new PL$3/*stdlib*/.Uint8Array(PL$5/*heap*/);
  var PL$11/*out32*/ = new PL$3/*stdlib*/.Uint32Array(PL$5/*heap*/);
  var PL$12/*inp*/ = new PL$3/*stdlib*/.Uint8Array(PL$5/*heap*/);
  var PL$13/*mem*/ = new PL$3/*stdlib*/.Uint8Array(PL$5/*heap*/);
  var PL$14/*mem32*/ = new PL$3/*stdlib*/.Uint32Array(PL$5/*heap*/);
  var PL$15/*width*/ = 0;
  var PL$16/*height*/ = 0;
  var PL$17/*lumaSize*/ = 0;
  var PL$18/*chromaSize*/ = 0;
  var PL$19/*inpSize*/ = 0;
  var PL$20/*outSize*/ = 0;
  var PL$21/*inpStart*/ = 0;
  var PL$22/*outStart*/ = 0;
  var PL$23/*widthFour*/ = 0;
  var PL$24/*cacheStart*/ = 0;
  function PL$25/*init*/(PL$26/*parWidth*/, PL$27/*parHeight*/){
  
    ;
    PL$26/*parWidth*/ = (PL$26/*parWidth*/ | 0);
    PL$27/*parHeight*/ = (PL$27/*parHeight*/ | 0);
    var PL$28/*i*/ = 0;
    var PL$29/*s*/ = 0;
    PL$15/*width*/ = PL$26/*parWidth*/;
    PL$23/*widthFour*/ = (PL$6/*imul*/(PL$26/*parWidth*/, 4) | 0);
    PL$16/*height*/ = PL$27/*parHeight*/;
    PL$17/*lumaSize*/ = (PL$6/*imul*/((PL$15/*width*/ | 0), (PL$16/*height*/ | 0)) | 0);
    PL$18/*chromaSize*/ = ((PL$17/*lumaSize*/ | 0) >> 2);
    PL$20/*outSize*/ = (PL$6/*imul*/((PL$6/*imul*/(PL$15/*width*/, PL$16/*height*/) | 0), 4) | 0);
    PL$19/*inpSize*/ = (((PL$17/*lumaSize*/ + PL$18/*chromaSize*/) | (0 + PL$18/*chromaSize*/)) | 0);
    PL$22/*outStart*/ = 0;
    PL$21/*inpStart*/ = ((PL$22/*outStart*/ + PL$20/*outSize*/) | 0);
    PL$24/*cacheStart*/ = ((PL$21/*inpStart*/ + PL$19/*inpSize*/) | 0);
    PL$29/*s*/ = ~ ~ + PL$9/*pow*/(+ 2, + 24);
    PL$29/*s*/ = (PL$6/*imul*/(PL$29/*s*/, 4) | 0);
    for(PL$28/*i*/ = (0 | 0);(((PL$28/*i*/ | 0) < (PL$29/*s*/ | 0)) | 0);PL$28/*i*/ = ((PL$28/*i*/ + 4) | 0)){{
      PL$14/*mem32*/[(((PL$24/*cacheStart*/ + PL$28/*i*/) | 0) >> 2)] = 0;}};
    ;
    ;};
  ;
  function PL$30/*doit*/(){
  
    ;
    var PL$31/*ystart*/ = 0;
    var PL$32/*ustart*/ = 0;
    var PL$33/*vstart*/ = 0;
    var PL$34/*y*/ = 0;
    var PL$35/*yn*/ = 0;
    var PL$36/*u*/ = 0;
    var PL$37/*v*/ = 0;
    var PL$38/*o*/ = 0;
    var PL$39/*line*/ = 0;
    var PL$40/*col*/ = 0;
    var PL$41/*usave*/ = 0;
    var PL$42/*vsave*/ = 0;
    var PL$43/*ostart*/ = 0;
    var PL$44/*cacheAdr*/ = 0;
    PL$43/*ostart*/ = (PL$22/*outStart*/ | 0);
    PL$31/*ystart*/ = (PL$21/*inpStart*/ | 0);
    PL$32/*ustart*/ = (((PL$31/*ystart*/ + PL$17/*lumaSize*/) | 0) | 0);
    PL$33/*vstart*/ = ((PL$32/*ustart*/ + PL$18/*chromaSize*/) | 0);
    for(PL$39/*line*/ = 0;((PL$39/*line*/ | 0) < (PL$16/*height*/ | 0));PL$39/*line*/ = ((PL$39/*line*/ + 2) | 0)){{
      PL$41/*usave*/ = PL$32/*ustart*/;
      PL$42/*vsave*/ = PL$33/*vstart*/;
      for(PL$40/*col*/ = 0;((PL$40/*col*/ | 0) < (PL$15/*width*/ | 0));PL$40/*col*/ = ((PL$40/*col*/ + 2) | 0)){{
        PL$34/*y*/ = (PL$12/*inp*/[(PL$31/*ystart*/ >> 0)] | 0);
        PL$35/*yn*/ = (PL$12/*inp*/[(((PL$31/*ystart*/ + PL$15/*width*/) | 0) >> 0)] | 0);
        PL$36/*u*/ = (PL$12/*inp*/[(PL$32/*ustart*/ >> 0)] | 0);
        PL$37/*v*/ = (PL$12/*inp*/[(PL$33/*vstart*/ >> 0)] | 0);
        PL$44/*cacheAdr*/ = ((((((PL$34/*y*/ << 16) | 0) + ((PL$36/*u*/ << 8) | 0)) | 0) + PL$37/*v*/) | 0);
        PL$38/*o*/ = (PL$14/*mem32*/[(((PL$24/*cacheStart*/ + PL$44/*cacheAdr*/) | 0) >> 2)] | 0);
        if(PL$38/*o*/){
        }else{
        PL$38/*o*/ = (PL$45/*yuv2rgbcalc*/(PL$34/*y*/, PL$36/*u*/, PL$37/*v*/) | 0);
        PL$14/*mem32*/[(((PL$24/*cacheStart*/ + PL$44/*cacheAdr*/) | 0) >> 2)] = (PL$38/*o*/ | 0);
        };
        ;
        PL$14/*mem32*/[(PL$43/*ostart*/ >> 2)] = PL$38/*o*/;
        PL$44/*cacheAdr*/ = ((((((PL$35/*yn*/ << 16) | 0) + ((PL$36/*u*/ << 8) | 0)) | 0) + PL$37/*v*/) | 0);
        PL$38/*o*/ = (PL$14/*mem32*/[(((PL$24/*cacheStart*/ + PL$44/*cacheAdr*/) | 0) >> 2)] | 0);
        if(PL$38/*o*/){
        }else{
        PL$38/*o*/ = (PL$45/*yuv2rgbcalc*/(PL$35/*yn*/, PL$36/*u*/, PL$37/*v*/) | 0);
        PL$14/*mem32*/[(((PL$24/*cacheStart*/ + PL$44/*cacheAdr*/) | 0) >> 2)] = (PL$38/*o*/ | 0);
        };
        ;
        PL$14/*mem32*/[(((PL$43/*ostart*/ + PL$23/*widthFour*/) | 0) >> 2)] = PL$38/*o*/;
        PL$43/*ostart*/ = ((PL$43/*ostart*/ + 4) | 0);
        PL$31/*ystart*/ = ((PL$31/*ystart*/ + 1) | 0);
        PL$34/*y*/ = (PL$12/*inp*/[(PL$31/*ystart*/ >> 0)] | 0);
        PL$35/*yn*/ = (PL$12/*inp*/[(((PL$31/*ystart*/ + PL$15/*width*/) | 0) >> 0)] | 0);
        PL$44/*cacheAdr*/ = ((((((PL$34/*y*/ << 16) | 0) + ((PL$36/*u*/ << 8) | 0)) | 0) + PL$37/*v*/) | 0);
        PL$38/*o*/ = (PL$14/*mem32*/[(((PL$24/*cacheStart*/ + PL$44/*cacheAdr*/) | 0) >> 2)] | 0);
        if(PL$38/*o*/){
        }else{
        PL$38/*o*/ = (PL$45/*yuv2rgbcalc*/(PL$34/*y*/, PL$36/*u*/, PL$37/*v*/) | 0);
        PL$14/*mem32*/[(((PL$24/*cacheStart*/ + PL$44/*cacheAdr*/) | 0) >> 2)] = (PL$38/*o*/ | 0);
        };
        ;
        PL$14/*mem32*/[(PL$43/*ostart*/ >> 2)] = PL$38/*o*/;
        PL$44/*cacheAdr*/ = ((((((PL$35/*yn*/ << 16) | 0) + ((PL$36/*u*/ << 8) | 0)) | 0) + PL$37/*v*/) | 0);
        PL$38/*o*/ = (PL$14/*mem32*/[(((PL$24/*cacheStart*/ + PL$44/*cacheAdr*/) | 0) >> 2)] | 0);
        if(PL$38/*o*/){
        }else{
        PL$38/*o*/ = (PL$45/*yuv2rgbcalc*/(PL$35/*yn*/, PL$36/*u*/, PL$37/*v*/) | 0);
        PL$14/*mem32*/[(((PL$24/*cacheStart*/ + PL$44/*cacheAdr*/) | 0) >> 2)] = (PL$38/*o*/ | 0);
        };
        ;
        PL$14/*mem32*/[(((PL$43/*ostart*/ + PL$23/*widthFour*/) | 0) >> 2)] = PL$38/*o*/;
        PL$43/*ostart*/ = ((PL$43/*ostart*/ + 4) | 0);
        PL$31/*ystart*/ = ((PL$31/*ystart*/ + 1) | 0);
        PL$32/*ustart*/ = ((PL$32/*ustart*/ + 1) | 0);
        PL$33/*vstart*/ = ((PL$33/*vstart*/ + 1) | 0);}};
      ;
      PL$43/*ostart*/ = ((PL$43/*ostart*/ + PL$23/*widthFour*/) | 0);
      PL$31/*ystart*/ = ((PL$31/*ystart*/ + PL$15/*width*/) | 0);}};
    ;
    ;};
  ;
  function PL$45/*yuv2rgbcalc*/(PL$34/*y*/, PL$36/*u*/, PL$37/*v*/){
  
    ;
    PL$34/*y*/ = (PL$34/*y*/ | 0);
    PL$36/*u*/ = (PL$36/*u*/ | 0);
    PL$37/*v*/ = (PL$37/*v*/ | 0);
    var PL$46/*r*/ = 0;
    var PL$47/*g*/ = 0;
    var PL$48/*b*/ = 0;
    var PL$38/*o*/ = 0;
    var PL$49/*a0*/ = 0;
    var PL$50/*a1*/ = 0;
    var PL$51/*a2*/ = 0;
    var PL$52/*a3*/ = 0;
    var PL$53/*a4*/ = 0;
    PL$49/*a0*/ = (PL$6/*imul*/(1192, ((PL$34/*y*/ - 16) | 0)) | 0);
    PL$50/*a1*/ = (PL$6/*imul*/(1634, ((PL$37/*v*/ - 128) | 0)) | 0);
    PL$51/*a2*/ = (PL$6/*imul*/(832, ((PL$37/*v*/ - 128) | 0)) | 0);
    PL$52/*a3*/ = (PL$6/*imul*/(400, ((PL$36/*u*/ - 128) | 0)) | 0);
    PL$53/*a4*/ = (PL$6/*imul*/(2066, ((PL$36/*u*/ - 128) | 0)) | 0);
    PL$46/*r*/ = ((((PL$49/*a0*/ + PL$50/*a1*/) | 0) >> 10) | 0);
    PL$47/*g*/ = ((((((PL$49/*a0*/ - PL$51/*a2*/) | 0) - PL$52/*a3*/) | 0) >> 10) | 0);
    PL$48/*b*/ = ((((PL$49/*a0*/ + PL$53/*a4*/) | 0) >> 10) | 0);
    if(((((PL$46/*r*/ & 255) | 0) != (PL$46/*r*/ | 0)) | 0)){
      PL$46/*r*/ = (PL$7/*min*/(255, (PL$8/*max*/(0, PL$46/*r*/) | 0)) | 0);
    };
    ;
    if(((((PL$47/*g*/ & 255) | 0) != (PL$47/*g*/ | 0)) | 0)){
      PL$47/*g*/ = (PL$7/*min*/(255, (PL$8/*max*/(0, PL$47/*g*/) | 0)) | 0);
    };
    ;
    if(((((PL$48/*b*/ & 255) | 0) != (PL$48/*b*/ | 0)) | 0)){
      PL$48/*b*/ = (PL$7/*min*/(255, (PL$8/*max*/(0, PL$48/*b*/) | 0)) | 0);
    };
    ;
    PL$38/*o*/ = 255;
    PL$38/*o*/ = ((PL$38/*o*/ << 8) | 0);
    PL$38/*o*/ = ((PL$38/*o*/ + PL$48/*b*/) | 0);
    PL$38/*o*/ = ((PL$38/*o*/ << 8) | 0);
    PL$38/*o*/ = ((PL$38/*o*/ + PL$47/*g*/) | 0);
    PL$38/*o*/ = ((PL$38/*o*/ << 8) | 0);
    PL$38/*o*/ = ((PL$38/*o*/ + PL$46/*r*/) | 0);
    return (PL$38/*o*/ | 0);
    ;};
  ;
  return {
    "init": PL$25/*init*/,
    "doit": PL$30/*doit*/
  };
  ;};

  ;
  /* function asmFactory (){} - hoisted */;
  ;})();
;return PL$1;
});
})();