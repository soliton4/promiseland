(function(){var __modFun = function(__require){ __modFun = undefined;
var __execute = function(promiseland, extra){ __execute = undefined;

if (promiseland._hasModule({ hashStr: "37185a05a509f3ecd0f6360601ff2d24" })){ return promiseland._getModule("37185a05a509f3ecd0f6360601ff2d24"); };
var PL$5/*Object*/;try{PL$5/*Object*/ = Object;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$8/*Map*/;

  ;
  ;
  PL$8/*Map*/ = (function(){var PL$2/*inherited*/ = {};
  var res = promiseland.createClass({
    "constructor": (function(){
    
      ;
      this["map"] = {
        
      };
      ;}),
    "set": (function(PL$3/*key*/, PL$4/*value*/){
    
      ;
      this["map"][PL$3/*key*/] = PL$4/*value*/;
      ;}),
    "get": (function(PL$3/*key*/){
    
      ;
      if(PL$5/*Object*/["prototype"]["hasOwnProperty"]["call"](this["map"], PL$3/*key*/)){
        return this["map"][PL$3/*key*/];
      };
      ;
      ;}),
    "getArray": (function(){
    
      ;
      var PL$6/*res*/ = [
        
      ];
      ;
      var PL$7/*n*/;
      ;
      for(PL$7/*n*/ in this["map"]){
        PL$6/*res*/["push"]({
          "key": PL$7/*n*/,
          "value": this["map"][PL$7/*n*/]
        });};
      ;
      return PL$6/*res*/;
      ;})
  }, [], PL$2/*inherited*/);
  return res; })();PL$8/*Map*/;
  return PL$8/*Map*/;
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
