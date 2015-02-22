(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "2154142e298e5f0d8297b28f9c829070" })){ return promiseland._getModule("2154142e298e5f0d8297b28f9c829070"); };
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*a*/ = 2;
  ;
  return (function(){
  var PL$4/*C1*/;
  var PL$9/*C2*/;
  
    ;
    PL$4/*C1*/ = (function(){var PL$3/*inherited*/ = {};
    var res = promiseland.createClass({
      "a": (function(){
      
        ;
        return 1;
        ;}),
      "b": 3
    }, [], PL$3/*inherited*/);
    return res; })();PL$4/*C1*/;
    var PL$5/*v2*/ = PL$2/*a*/;
    ;
    var PL$6/*v1*/ = new PL$4/*C1*/();
    ;
    if((PL$5/*v2*/ != 2)){
      return {
        "success": false
      };
    };
    ;
    PL$9/*C2*/ = (function(){var PL$7/*inherited*/ = {};
    var res = promiseland.createClass({
      "a": (function(){
      
        ;
        return (PL$8/*inherited a*/.apply(this, []) + 1);
        ;})
    }, [PL$4/*C1*/], PL$7/*inherited*/);
    var PL$8/*inherited a*/ = PL$7/*inherited*/["a"];
    return res; })();PL$9/*C2*/;
    var PL$10/*v3*/ = new PL$9/*C2*/();
    ;
    if(((PL$10/*v3*/["a"]() != 2) || (PL$10/*v3*/["b"] != 3))){
      return {
        "success": false
      };
    };
    ;
    return {
      "success": true
    };
    ;})();
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
