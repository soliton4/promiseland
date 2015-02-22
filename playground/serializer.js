(function(){var __modFun = function(__require){ __modFun = undefined;
var __execute = function(promiseland, extra){ __execute = undefined;

if (promiseland._hasModule({ hashStr: "a6076e949f2f20c5de497d86852c849d" })){ return promiseland._getModule("a6076e949f2f20c5de497d86852c849d"); };
var PL$8/*stringifyStr*/;try{PL$8/*stringifyStr*/ = stringifyStr;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  ;
  var PL$2/*complete*/ = (function(PL$3/*original*/){
  
    ;
    var PL$4/*path*/ = [
      
    ];
    ;
    var PL$5/*resStr*/ = "";
    ;
    var PL$6/*_run*/ = (function(PL$7/*o*/){
    var PL$9/*m*/;
    
      ;
      switch (PL$7/*o*/){
        case null:
          
          PL$5/*resStr*/ += "null";
          break;;
        case undefined:
          
          PL$5/*resStr*/ += "undefined";
          break;;
        default:
          
          switch (typeof PL$7/*o*/){
            case "number":
              
              PL$5/*resStr*/ += PL$7/*o*/;
              break;;
            case "string":
              
              PL$5/*resStr*/ += PL$8/*stringifyStr*/(PL$7/*o*/);
              break;;
            case "function":
              
              PL$5/*resStr*/ += "null";
              break;;
            case "object":
              
              PL$5/*resStr*/ += "{";
              for(PL$9/*m*/ in PL$7/*o*/){
                PL$5/*resStr*/ += PL$8/*stringifyStr*/(PL$9/*m*/);
                PL$5/*resStr*/ += ":";
                PL$6/*_run*/(PL$7/*o*/[PL$9/*m*/]);};
              ;
              PL$5/*resStr*/ += "}";
              break;;
            default:
              
              throw {
                "id": 1301,
                "msg": (("type " + typeof PL$7/*o*/) + " can not be serialized")
              };
            
          };
          ;
        
      };
      ;
      PL$6/*_run*/(PL$3/*original*/);
      return PL$5/*resStr*/;
      ;});
    ;
    var PL$10/*res*/ = PL$6/*_run*/(PL$3/*original*/);
    ;
    ;});
  ;
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
