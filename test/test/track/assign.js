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

var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "4eea94df34736533694ed8fc4ef9169e" })){ return promiseland._getModule("4eea94df34736533694ed8fc4ef9169e"); };
var PL$1 = (function(){
"use strict";
var PL$3/*C1*/;
var PL$5/*v1*/;
var _TPL$5/*v1*/;
var PL$6/*v2*/;
var _TPL$6/*v2*/;

/* ---------------------------- */
/* type C1 */
var PL$2/*type:C1*/ = classSystem._createProvisionalClass();
PL$3/*C1*/ = PL$2/*type:C1*/
var PL$4/*C1-constructor*/ = undefined;
classSystem.readyPromise(PL$2/*type:C1*/).then(function(parType){
  PL$2/*type:C1*/ = parType;
  PL$4/*C1-constructor*/ = classSystem.getTypeConstructor(PL$2/*type:C1*/);
});
/* ---------------------------- */


  ;
  try
  {
    classSystem._resolveProvisional(PL$2/*type:C1*/, classSystem.createClass({className: "C1",members: [], "extends": [], "hasFreePart": true, "track": true, "hashStr": "4eea94df34736533694ed8fc4ef9169e", "name": "C1"}, {}));PL$3/*C1*/;
    PL$5/*v1*/;
    /*temp tracked assign*/(function(vAr){
      if (_TPL$6/*v2*/){ _TPL$6/*v2*/(); };
      if(vAr){
        var v = vAr[0];
        PL$6/*v2*/ = v;
        _TPL$6/*v2*/ = vAr[1];
        return v;
      }else{
        PL$6/*v2*/ = undefined; 
        _TPL$6/*v2*/ = undefined;
        return;
      };
    })(new PL$4/*C1-constructor*/())/*end temp assign*/;
    /*tracked assign*/(function(v){
    if (_TPL$5/*v1*/){ _TPL$5/*v1*/(); };
    PL$5/*v1*/ = v;
    if (v){
    _TPL$5/*v1*/ = v[2]();
    }else{
    _TPL$5/*v1*/ = undefined;
    };
    return v;
    })(PL$6/*v2*/)/*end assign*/
    ;}catch(PL$7/*e*/){
    return {
      "success": false
    };};
  ;
  return {
    "success": true
  };
  ;})();
;return PL$1;
});
})();