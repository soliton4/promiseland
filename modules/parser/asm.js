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
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    if (promiseland._hasModule({ hashStr: "3b62c558c8c395c7ae32650363ac07ea" })){ return promiseland._getModule("3b62c558c8c395c7ae32650363ac07ea"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "3b62c558c8c395c7ae32650363ac07ea", "module": PL$1, promising: true });
var PL$6/*promiseland*/;try{PL$6/*promiseland*/ = promiseland;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$5/*classSystem*/;
var PL$7/*basics*/;
var PL$9/*errorFun*/;
var PL$10/*errorMsg*/;
var PL$11/*_stringEncodeStr*/;
var PL$12/*stringEncodeStr*/;
var PL$13/*VariableNames*/;
var PL$14/*mixin*/;
var PL$15/*identifierName*/;
var PL$16/*checkIsFunction*/;
var PL$17/*getExtraFromPar*/;
var PL$18/*statementType*/;
var PL$19/*checkPromising*/;
PL$3(function(){

  ;
  PL$5/*classSystem*/ = PL$6/*promiseland*/["classSystem"];
  __requireFun("./basics").then(PL$3(function(PL$8){PL$7/*basics*/ = PL$8;
  PL$9/*errorFun*/ = PL$7/*basics*/["errorFun"];
  PL$10/*errorMsg*/ = PL$7/*basics*/["errorMsg"];
  PL$11/*_stringEncodeStr*/ = PL$7/*basics*/["_stringEncodeStr"];
  PL$12/*stringEncodeStr*/ = PL$7/*basics*/["stringEncodeStr"];
  PL$13/*VariableNames*/ = PL$7/*basics*/["VariableNames"];
  PL$14/*mixin*/ = PL$7/*basics*/["mixin"];
  PL$15/*identifierName*/ = PL$7/*basics*/["identifierName"];
  PL$16/*checkIsFunction*/ = PL$7/*basics*/["checkIsFunction"];
  PL$17/*getExtraFromPar*/ = PL$7/*basics*/["getExtraFromPar"];
  PL$18/*statementType*/ = PL$7/*basics*/["statementType"];
  PL$19/*checkPromising*/ = PL$7/*basics*/["checkPromising"];
  PL$1.resolve((function(PL$20/*parInstance*/, PL$21/*par*/){
  var PL$22/*f*/;

    ;
    PL$22/*f*/ = (function(PL$21/*par*/){
    
      ;
      this["checkAsm"] = (function(PL$23/*parResult*/, PL$24/*parStr*/){
      
        ;
        if(! PL$24/*parStr*/){
          return;
        };
        ;
        ;});
      ;});
    PL$22/*f*/["apply"](PL$20/*parInstance*/, [PL$21/*par*/]);
    ;})); return;
  PL$1.resolve(); return;}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();