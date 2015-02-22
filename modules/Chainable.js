(function(){var __modFun = function(__require){ __modFun = undefined;
var __execute = function(promiseland, extra){ __execute = undefined;

if (promiseland._hasModule({ hashStr: "df69441b668ad47e9f5f5b2c49c2dff9" })){ return promiseland._getModule("df69441b668ad47e9f5f5b2c49c2dff9"); };
var PL$1 = (function(){
"use strict";

  ;
  ;
  var PL$2/*dummy*/ = {
    "newNext": (function(){
    
      ;
      ;}),
    "newPrev": (function(){
    
      ;
      ;}),
    "fun": (function(){
    
      ;
      ;})
  };
  ;
  return (function(PL$3/*base*/, PL$4/*property*/){
  
    ;
    var PL$5/*orig*/ = PL$3/*base*/[PL$4/*property*/];
    ;
    var PL$6/*last*/;
    ;
    var PL$7/*setFun*/ = (function(PL$8/*parFun*/){
    
      ;
      PL$3/*base*/[PL$4/*property*/] = PL$8/*parFun*/;
      ;});
    ;
    var PL$9/*first*/ = (function(){
    
      ;
      return {
        "newNext": (function(PL$10/*n*/){
        
          ;
          if(PL$10/*n*/){
            var PL$11/*nextFun*/ = PL$10/*n*/["fun"];
            ;
            PL$7/*setFun*/((function(){
            var PL$12/*arguments*/ = arguments;
            
              ;
              PL$5/*orig*/["apply"](PL$3/*base*/, PL$12/*arguments*/);
              PL$11/*nextFun*/["apply"](null, PL$12/*arguments*/);
              ;}));
          }else{
          PL$7/*setFun*/(PL$5/*orig*/);
          PL$6/*last*/ = PL$9/*first*/;
          };
          ;
          ;}),
        "newPrev": (function(){
        
          ;
          ;})
      };
      ;})();
    ;
    PL$6/*last*/ = PL$9/*first*/;
    return (function(PL$13/*conFun*/, PL$14/*newBase*/){
    
      ;
      var PL$15/*next*/ = PL$2/*dummy*/;
      ;
      var PL$11/*nextFun*/ = PL$15/*next*/["fun"];
      ;
      var PL$16/*prev*/ = PL$6/*last*/;
      ;
      var PL$17/*s*/ = {
        "newNext": (function(PL$10/*n*/){
        
          ;
          if(PL$10/*n*/){
            PL$15/*next*/ = PL$10/*n*/;
          }else{
          PL$15/*next*/ = PL$2/*dummy*/;
          PL$6/*last*/ = PL$17/*s*/;
          };
          ;
          PL$11/*nextFun*/ = PL$15/*next*/["fun"];
          ;}),
        "newPrev": (function(PL$18/*p*/){
        
          ;
          PL$16/*prev*/ = PL$18/*p*/;
          ;}),
        "fun": (PL$14/*newBase*/ ? (function(){
        var PL$12/*arguments*/ = arguments;
        
          ;
          PL$13/*conFun*/["apply"](PL$14/*newBase*/, PL$12/*arguments*/);
          PL$11/*nextFun*/["apply"](null, PL$12/*arguments*/);
          ;}) : (function(){
        var PL$12/*arguments*/ = arguments;
        
          ;
          PL$13/*conFun*/["apply"](null, PL$12/*arguments*/);
          PL$11/*nextFun*/["apply"](null, PL$12/*arguments*/);
          ;}))
      };
      ;
      PL$6/*last*/["newNext"](PL$17/*s*/);
      PL$6/*last*/ = PL$17/*s*/;
      return (function(){
      
        ;
        PL$16/*prev*/["newNext"](PL$15/*next*/);
        PL$15/*next*/["newPrev"](PL$16/*prev*/);
        PL$16/*prev*/ = PL$2/*dummy*/;
        PL$15/*next*/ = PL$2/*dummy*/;
        ;});
      ;});
    ;});
  ;})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); }; };
  
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
    });
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
