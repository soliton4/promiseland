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
  var classSystem = promiseland.classSystem; 
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
  var __classSystem = promiseland.classSystem;
  
  
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "cb0cacb00014ff9e927d09985ddc4811" })){ return promiseland._getModule("cb0cacb00014ff9e927d09985ddc4811"); };
var _V8/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V3/*Type1*/;
var _V6/*Type2*/;
var _V9/*f1*/;
var _V2/*type:Type1*/ = classSystem._createProvisionalClass();
_V3/*Type1*/ = _V2/*type:Type1*/;
var _V4/*Type1-constructor*/ = undefined;classSystem.readyPromise(_V2/*type:Type1*/).then(function(parType){_V2/*type:Type1*/ = parType;_V4/*Type1-constructor*/ = classSystem.getTypeConstructor(_V2/*type:Type1*/);});var _V5/*type:Type2*/ = classSystem._createProvisionalClass();
_V6/*Type2*/ = _V5/*type:Type2*/;
var _V7/*Type2-constructor*/ = undefined;classSystem.readyPromise(_V5/*type:Type2*/).then(function(parType){_V5/*type:Type2*/ = parType;_V7/*Type2-constructor*/ = classSystem.getTypeConstructor(_V5/*type:Type2*/);});;
classSystem._resolveProvisional(_V2/*type:Type1*/, classSystem.createClass({members: [{"name":"a","type":_V8/*type:var*/},{"name":"b","type":_V8/*type:var*/}], "extends": [], "hasFreePart": true}, {"a": 1, "b": 2}));_V3/*Type1*/;;
classSystem._resolveProvisional(_V5/*type:Type2*/, classSystem.createClass({members: [{"name":"x","type":_V8/*type:var*/},{"name":"y","type":_V8/*type:var*/}], "extends": [], "hasFreePart": true}, {"x": 3, "y": 4}));_V6/*Type2*/;;
_V9/*f1*/ = (function(){
var _V10/*a*/;
;
_V10/*a*/ = new _V4/*Type1-constructor*/();
return (function(){ throw { id:201, msg: "type missmatch" } })();;
;
});
try
{_V9/*f1*/();;
}catch(e){return {"success": true};;
};
return {"success": false};;
;
})();
;promiseland._registerModule({ hashStr: "cb0cacb00014ff9e927d09985ddc4811", "module": _V1, promising: false });
return _V1;
});
})();