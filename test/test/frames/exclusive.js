(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "45793d21303f9b6bf6d65e96e3d6b248" })){ return promiseland._getModule("45793d21303f9b6bf6d65e96e3d6b248"); };
var PL$3/*__dirname*/;try{PL$3/*__dirname*/ = __dirname;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*isServer*/ = false;
  ;
  if(PL$3/*__dirname*/){
    PL$2/*isServer*/ = true;
  };
  ;
  var PL$4/*serverRun*/ = false;
  ;
  var PL$5/*clientRun*/ = false;
  ;
  var PL$6/*exs*/ = (function(){
  if (!promiseland.profileHas("server")){
  return;
  };
  
    ;
    PL$4/*serverRun*/ = true;
    ;});
  ;
  var PL$7/*exc*/ = (function(){
  if (!promiseland.profileHas("client")){
  return;
  };
  
    ;
    PL$5/*clientRun*/ = true;
    ;});
  ;
  PL$6/*exs*/();
  PL$7/*exc*/();
  if((PL$2/*isServer*/ && PL$5/*clientRun*/)){
    return {
      "success": false
    };
  };
  ;
  if((PL$2/*isServer*/ && ! PL$4/*serverRun*/)){
    return {
      "success": false
    };
  };
  ;
  if((! PL$2/*isServer*/ && PL$4/*serverRun*/)){
    return {
      "success": false
    };
  };
  ;
  if((! PL$2/*isServer*/ && ! PL$5/*clientRun*/)){
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
