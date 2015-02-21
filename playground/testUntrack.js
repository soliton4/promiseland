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
if (promiseland._hasModule({ hashStr: "abf5635440ccb84d0a921e731e3c628b" })){ return promiseland._getModule("abf5635440ccb84d0a921e731e3c628b"); };
var PL$1 = (function(){
"use strict";
var PL$3/*C1*/;
var PL$6/*b*/;
var _TPL$6/*b*/;

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
  classSystem._resolveProvisional(PL$2/*type:C1*/, classSystem.createClass({className: "C1",members: [{"name":"member1","type":classSystem.getBuiltinType("var")},{"name":"constructor","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "track": true, "hashStr": "abf5635440ccb84d0a921e731e3c628b", "name": "C1"}, {"member1": (function(){
  var PL$5/*a*/;
  var _TPL$5/*a*/;
  
    ;
    /*tracked assign*/(function(v){
    if (_TPL$5/*a*/){ _TPL$5/*a*/(); };
    PL$5/*a*/ = v;
    if (v){
    _TPL$5/*a*/ = v[2]();
    }else{
    _TPL$5/*a*/ = undefined;
    };
    return v;
    })(PL$6/*b*/)/*end assign*/
    ;
    ;}), "constructor": (function(){
  var PL$5/*a*/;
  var _TPL$5/*a*/;
  
    ;
    /*tracked assign*/(function(v){
    if (_TPL$5/*a*/){ _TPL$5/*a*/(); };
    PL$5/*a*/ = v;
    if (v){
    _TPL$5/*a*/ = v[2]();
    }else{
    _TPL$5/*a*/ = undefined;
    };
    return v;
    })(this)/*end assign*/
    ;
    ;})}));PL$3/*C1*/;
  PL$6/*b*/;
  (function(){
  var PL$5/*a*/;
  var _TPL$5/*a*/;
  
    try{;
    /*tracked assign*/(function(v){
    if (_TPL$5/*a*/){ _TPL$5/*a*/(); };
    PL$5/*a*/ = v;
    if (v){
    _TPL$5/*a*/ = v[2]();
    }else{
    _TPL$5/*a*/ = undefined;
    };
    return v;
    })(PL$6/*b*/)/*end assign*/
    ;
    if (_TPL$5/*a*/){ _TPL$5/*a*/();};}catch(e){if (_TPL$5/*a*/){ _TPL$5/*a*/();};throw e};;});
  ;})();
;return PL$1;
});
})();