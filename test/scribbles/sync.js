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
    requireFun = require;
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  
defineFun(["promiseland"], function(promiseland){ var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "b0c15cb3f9a170a2864940c37e633d4b" })){ return promiseland._getModule("b0c15cb3f9a170a2864940c37e633d4b"); };
var _V1 = (function(){
"use strict";
var _V3/*C1*/;
var _V2/*type:C1*/ = classSystem._createProvisionalClass();
_V3/*C1*/ = _V2/*type:C1*/;
var _V4/*C1-constructor*/ = undefined;classSystem.readyPromise(_V2/*type:C1*/).then(function(parType){_V2/*type:C1*/ = parType;_V4/*C1-constructor*/ = classSystem.getTypeConstructor(_V2/*type:C1*/);});;
classSystem._resolveProvisional(_V2/*type:C1*/, classSystem.createClass({members: [], "extends": [], "hasFreePart": true}, {}));_V3/*C1*/;;
((function(f){
promiseland.registerRemote("server", "b0c15cb3f9a170a2864940c37e633d4b", "_V10", f, (classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [_V2/*type:C1*/]})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("b0c15cb3f9a170a2864940c37e633d4b", "_V10", arguments);
}
};
})(function(_V5/*p*/){
var _V6 = new __Promise();
var _V8 = function(code){ return function(res){ try{code(res);}catch(e){ _V6.reject(e); }; }; };
var _V9 = function(e){ _V6.reject(e); };
_V8(function(){;
_V6.resolve(); return;;
})();
return _V6;
}));;
((((function(){var _V11/*type:D1*/ = _V3/*C1*/;
var _V12/*D1*/ = _V11/*type:D1*/
;var _V13/*D1-constructor*/ = undefined;
classSystem.readyPromise(_V11/*type:D1*/).then(function(parType){_V11/*type:D1*/ = parType;_V13/*D1-constructor*/ = classSystem.getTypeConstructor(_V11/*type:D1*/);});var communicator = {fun: undefined};
eval("communicator.fun = function(){\n;\n;\n};"); return communicator.fun; })()) < {"types": {"D1": _V3/*C1*/}}) > {});;
;
})();
;return _V1;
});
})();