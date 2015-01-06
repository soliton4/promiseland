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

if (promiseland._hasModule({ hashStr: "84a773877d25b34aaf8e21cfe86d4eea" })){ return promiseland._getModule("84a773877d25b34aaf8e21cfe86d4eea"); };
var PL$1 = (function(){
"use strict";
var PL$2/*f*/;
function PL$2/*f*/(PL$3/*stdlib*/, PL$4/*foreign*/, PL$5/*heap*/){
"use asm";

function PL$2/*f*/(){

  ;
  var PL$6/*x*/ = 0, PL$7/*y*/ = 0;
  PL$6/*x*/ = (((PL$6/*x*/ | 0) % (PL$7/*y*/ | 0)) | 0);
  ;};

  ;
  "use asm";
  PL$2/*f*/;
  return {};
  ;};
function PL$2/*f*/(PL$3/*stdlib*/, PL$4/*foreign*/, PL$5/*heap*/){
"use asm";

function PL$2/*f*/(){

  ;
  var PL$6/*x*/ = 0, PL$7/*y*/ = 0;
  PL$6/*x*/ = (((PL$6/*x*/ | 0) % (PL$7/*y*/ | 0)) | 0);
  ;};

  ;
  "use asm";
  PL$2/*f*/;
  ;
  return {};
  ;};

  ;
  PL$2/*f*/;
  PL$2/*f*/;
  ;})();
;return PL$1;
});
})();