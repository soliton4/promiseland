(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "b0c15cb3f9a170a2864940c37e633d4b" })){ return promiseland._getModule("b0c15cb3f9a170a2864940c37e633d4b"); };
var PL$1 = (function(){
"use strict";
var PL$3/*C1*/;

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
  classSystem._resolveProvisional(PL$2/*type:C1*/, classSystem.createClass({className: "C1",members: [], "extends": [], "hasFreePart": true, "hashStr": "b0c15cb3f9a170a2864940c37e633d4b", "name": "C1"}, {}));PL$3/*C1*/;
  ((function(f){
  promiseland.registerRemote("server", "b0c15cb3f9a170a2864940c37e633d4b", "PL$11", f, (classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [PL$2/*type:C1*/]})));
  if (promiseland.profileHas("server")){
  return function(){
  var i = 0; var l = arguments.length; var newArgs = [undefined];
  for(i = 0; i < l; ++i){ newArgs.push(arguments[i]); };
  return f.apply(this, newArgs);
  };
  }else{
  return function(){
  return promiseland.remoteExec("b0c15cb3f9a170a2864940c37e633d4b", "PL$11", arguments);
  }
  };
  })(function(PL$5/*session*/, PL$6/*p*/){
  var PL$7 = new __Promise();
  var PL$9/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$7.reject(e);
      };
    };
  };
  var PL$10/*catch rejected*/ = function(e){
    PL$7.reject(e);
  };
  PL$9/*promiseland exception catcher*/(function(){
  
    ;
    PL$7.resolve(); return;
  })();return PL$7;
  }));
  ((((function(){var PL$12/*type:D1*/ = PL$3/*C1*/;
  var PL$13/*D1*/ = PL$12/*type:D1*/
  ;var PL$14/*D1-constructor*/ = undefined;
  classSystem.readyPromise(PL$12/*type:D1*/).then(function(parType){
    PL$12/*type:D1*/ = parType;
    PL$14/*D1-constructor*/ = classSystem.getTypeConstructor(PL$12/*type:D1*/);
  });
  var communicator = {fun: undefined};
  eval("communicator.fun = function(){\n  \n    ;\n    ;};"); return communicator.fun; })()) < {
    "types": {
      "D1": PL$3/*C1*/
    }
  }) > {
    
  });
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
