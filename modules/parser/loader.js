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
    if (promiseland._hasModule({ hashStr: "b0e1d50ac64166b97433263c03ab40d2" })){ return promiseland._getModule("b0e1d50ac64166b97433263c03ab40d2"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "b0e1d50ac64166b97433263c03ab40d2", "module": PL$1, promising: true });
var PL$2 = (function(){
"use strict";
var PL$3/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$1.reject(e);
    };
  };
};
var PL$4/*catch rejected*/ = function(e){
  PL$1.reject(e);
};
var PL$5/*basics*/;
var PL$7/*errorFun*/;
var PL$8/*errorMsg*/;
var PL$9/*_stringEncodeStr*/;
var PL$10/*stringEncodeStr*/;
var PL$11/*loader*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("./basics").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*basics*/ = PL$6;
  PL$7/*errorFun*/ = PL$5/*basics*/["errorFun"];
  PL$8/*errorMsg*/ = PL$5/*basics*/["errorMsg"];
  PL$9/*_stringEncodeStr*/ = PL$5/*basics*/["_stringEncodeStr"];
  PL$10/*stringEncodeStr*/ = PL$5/*basics*/["stringEncodeStr"];
  PL$11/*loader*/ = (function(PL$12/*par*/){
  
    ;
    var PL$13/*resStr*/ = "";
    ;
    var PL$14/*i*/;
    ;
    var PL$15/*modules*/ = [
      
    ];
    ;
    if(! PL$12/*par*/["promiseLandModule"]){
      PL$15/*modules*/["push"]({
        "varName": "promiseland",
        "moduleName": "promiseland"
      });
    };
    ;
    var PL$16/*extraModules*/ = PL$12/*par*/["extraModules"];
    ;
    if(PL$16/*extraModules*/){
      var PL$17/*extraModulesAr*/ = PL$16/*extraModules*/["getArray"]();
      ;
      for(PL$14/*i*/ = 0;(PL$14/*i*/ < PL$17/*extraModulesAr*/["length"]);++PL$14/*i*/){{
        PL$15/*modules*/["push"]({
          "varName": PL$12/*par*/["variableNames"]["get"](PL$17/*extraModulesAr*/[PL$14/*i*/]["key"]),
          "moduleName": PL$17/*extraModulesAr*/[PL$14/*i*/]["value"]
        });}};
      ;
    };
    ;
    var PL$18/*moduleFunctionHeadStr*/ = "var __modFun = function(__require";
    ;
    var PL$19/*commonJsModulesStr*/ = "";
    ;
    var PL$20/*amdModulesStr*/ = "";
    ;
    for(PL$14/*i*/ = 0;(PL$14/*i*/ < PL$15/*modules*/["length"]);++PL$14/*i*/){{
      PL$18/*moduleFunctionHeadStr*/ += ", ";
      PL$18/*moduleFunctionHeadStr*/ += PL$15/*modules*/[PL$14/*i*/]["varName"];
      PL$19/*commonJsModulesStr*/ += ", ";
      PL$19/*commonJsModulesStr*/ += "require(";
      PL$19/*commonJsModulesStr*/ += PL$10/*stringEncodeStr*/(PL$15/*modules*/[PL$14/*i*/]["moduleName"]);
      PL$19/*commonJsModulesStr*/ += ")";
      PL$20/*amdModulesStr*/ += ", ";
      PL$20/*amdModulesStr*/ += PL$10/*stringEncodeStr*/(PL$15/*modules*/[PL$14/*i*/]["moduleName"]);}};
    ;
    PL$18/*moduleFunctionHeadStr*/ += "){ __modFun = undefined;\n";
    PL$13/*resStr*/ += ("(function(){" + PL$18/*moduleFunctionHeadStr*/);
    if(PL$12/*par*/["promiseLandModule"]){
      PL$13/*resStr*/ += "var __execute = function(promiseland, extra){ __execute = undefined;\n";
    }else{
    PL$13/*resStr*/ += "";
    };
    ;
    PL$13/*resStr*/ += "\n";
    if((PL$12/*par*/["usePromise"] || PL$12/*par*/["useRequire"])){
      PL$13/*resStr*/ += "var __Promise = promiseland.Promise;\n";
      PL$13/*resStr*/ += "var Promise = promiseland.Promise;\n";
    };
    ;
    if(PL$12/*par*/["useClassSystem"]){
      PL$13/*resStr*/ += "var classSystem = promiseland.classSystem;\n";
    };
    ;
    if(PL$12/*par*/["useRequire"]){
      PL$13/*resStr*/ += "var __requireFun = function(parModule){\n      var returnPromise = new __Promise();\n      try{__require([parModule], function(m){\n        if (promiseland.isPromiseLandPromisingModule(m)){\n          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});\n        }else{\n          returnPromise.resolve(m);\n        };\n        }, function(err){ returnPromise.reject(err); });\n      }catch(e){ returnPromise.reject(e); };\n      return returnPromise.promise;};\n    ";
    };
    ;
    var PL$21/*headerStr*/ = PL$13/*resStr*/;
    ;
    if(PL$12/*par*/["promiseLandModule"]){
      PL$13/*resStr*/ = "}; return function(){ return __execute.apply(null, arguments); }; };";
    }else{
    PL$13/*resStr*/ = "};";
    };
    ;
    PL$13/*resStr*/ += (((("\n  \n  if (typeof exports == \"object\" && typeof module == \"object\"){ // CommonJS\n    module.exports = __modFun(function(modulesAr, callback, errBack){\n      // the require function for CommonJs\n      var args = [];\n      try{\n        var i = 0;\n        var l = modulesAr.length;\n        for (i; i < l; ++i){\n          args.push(require(modulesAr[i]));\n        };\n      }catch(e){\n        errBack(e);\n        return;\n      };\n      callback.apply(callback, args);\n    }" + PL$19/*commonJsModulesStr*/) + ");\n  \n  }else if (typeof define == \"function\" && define.amd){ // AMD\n    define([\"require\"") + PL$20/*amdModulesStr*/) + "], __modFun);\n  \n  }else{ // Plain browser env\n    __modFun(function(){ throw { msg: \"require not possible in non loader mode\" }; });\n  \n  };\n})();\n");
    return {
      "headerStr": PL$21/*headerStr*/,
      "footerStr": PL$13/*resStr*/
    };
    ;});
  PL$1.resolve(PL$11/*loader*/); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;
})();return PL$1;
})();
;;
return PL$1});
})();