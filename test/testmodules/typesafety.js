(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback){
      var i = 0;
      var l = modulesAr.length;
      var args = [];
      for (i; i < l; ++i){
        args.push(require(modulesAr[i]));
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
    requireFun = require;
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  
  defineFun(["promiseland"], function(promiseland){ var __require = requireFun;
  
  var __Promise = promiseland.Promise;
  var __modulePromise = new __Promise();
  var __requireFun = function(parModule){
    var returnPromise = new __Promise();
    try{__require([parModule], function(m){
    if (promiseland.isPromiseLandPromisingModule(m)){
      m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
    }else{
      returnPromise.resolve(m);
    };
    });
    }catch(e){returnPromise.reject(e);};
  return returnPromise.promise;};
  
  
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "bbd5976fb2035bf3709b8897c1d37003" })){ return promiseland._getModule("bbd5976fb2035bf3709b8897c1d37003"); };
var _V12/*console*/;try{_V12/*console*/ = console;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*c1*/;
var _V5/*c2*/;
var _V8/*a*/;
var _V9/*b*/;
var _V10/*c*/;
var _V11/*d*/;
var _V3;
var _V6;
var _V4/*type:c1*/;
var _V7/*type:c2*/;
_V2/*c1*/ = promiseland.classSystem.createClass({members: [], "extends": [], "hasFreePart": true}, {});_V4/*type:c1*/ = _V2/*c1*/;_V3 = promiseland.classSystem.getTypeConstructor(_V2/*c1*/);_V2/*c1*/;;
_V5/*c2*/ = promiseland.classSystem.createClass({members: [], "extends": [], "hasFreePart": true}, {});_V7/*type:c2*/ = _V5/*c2*/;_V6 = promiseland.classSystem.getTypeConstructor(_V5/*c2*/);_V5/*c2*/;;
_V8/*a*/;
_V9/*b*/;
_V10/*c*/;
_V11/*d*/;
_V9/*b*/ = new _V3();;
_V12/*console*/["log"]("new type created");;
(function(){ throw { id:201, msg: "type missmatch" } })();;
})();
promiseland._registerModule({ hashStr: "bbd5976fb2035bf3709b8897c1d37003", "module": _V1, promising: false });
return _V1;
});
})();