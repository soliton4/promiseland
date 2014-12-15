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

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "fc7152c4fa1e40b13701ee61063149bc" })){ return promiseland._getModule("fc7152c4fa1e40b13701ee61063149bc"); };
var PL$4/*console*/;try{PL$4/*console*/ = console;}catch(e){};
var PL$5/*Promise*/;try{PL$5/*Promise*/ = Promise;}catch(e){};
var PL$7/*promiseland*/;try{PL$7/*promiseland*/ = promiseland;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$6/*SaveHandler*/;

  ;
  try
{
    PL$6/*SaveHandler*/ = (function(){var PL$2/*inherited*/ = {};
var res = promiseland.createClass({"registerClass": (function(PL$3/*par*/){
    
      ;
      PL$4/*console*/["log"](PL$3/*par*/);
      return new PL$5/*Promise*/();
      ;})}, [], PL$2/*inherited*/);
return res; })();PL$6/*SaveHandler*/;
    PL$7/*promiseland*/["classSystem"]["setSaveHandler"](new PL$6/*SaveHandler*/());
    classSystem.createClass({members: [{"name":"x","type":classSystem.getBuiltinType("var")},{"name":"y","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "savable": true}, {"x": 1, "y": 2});}catch(PL$8/*e*/){
    PL$4/*console*/["log"](PL$8/*e*/);};
  ;})();
;return PL$1;
});
})();