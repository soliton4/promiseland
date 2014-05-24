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
if (promiseland._hasModule({ hashStr: "651db8f5c5e2a5af36d3c64ac8f972d2" })){ return promiseland._getModule("651db8f5c5e2a5af36d3c64ac8f972d2"); };
var _V5/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V6/*Mt1*/;
var _V8/*Type1*/;
var _V10/*Type2*/;
var _V12/*a*/;
var _V13/*b*/;
var _V2/*Mt1-constructor*/;
var _V3/*Type1-constructor*/;
var _V4/*Type2-constructor*/;
var _V7/*type:Mt1*/;
var _V9/*type:Type1*/;
var _V11/*type:Type2*/;
_V6/*Mt1*/ = classSystem.createClass({members: [{"name":"a1","type":_V5/*type:var*/},{"name":"a2","type":_V5/*type:var*/}], "extends": [], "hasFreePart": true}, {"a1": 20, "a2": 30});_V7/*type:Mt1*/ = _V6/*Mt1*/;_V2/*Mt1-constructor*/ = promiseland.classSystem.getTypeConstructor(_V7/*type:Mt1*/);_V6/*Mt1*/;;
_V8/*Type1*/ = classSystem.createClass({members: [{"name":"a","type":_V5/*type:var*/},{"name":"b","type":_V5/*type:var*/},{"name":"m1","type":_V7/*type:Mt1*/}], "extends": [], "hasFreePart": true}, {"a": 1, "b": 2, "m1": undefined});_V9/*type:Type1*/ = _V8/*Type1*/;_V3/*Type1-constructor*/ = promiseland.classSystem.getTypeConstructor(_V9/*type:Type1*/);_V8/*Type1*/;;
_V10/*Type2*/ = classSystem.createClass({members: [{"name":"x","type":_V5/*type:var*/},{"name":"y","type":_V5/*type:var*/},{"name":"m2","type":_V7/*type:Mt1*/}], "extends": [], "hasFreePart": true}, {"x": 3, "y": 4, "m2": undefined});_V11/*type:Type2*/ = _V10/*Type2*/;_V4/*Type2-constructor*/ = promiseland.classSystem.getTypeConstructor(_V11/*type:Type2*/);_V10/*Type2*/;;
try
{_V12/*a*/ = new _V3/*Type1-constructor*/();
_V13/*b*/ = new _V4/*Type2-constructor*/();
_V13/*b*/[3] = 10;;
_V13/*b*/[2] = _V12/*a*/[2];;
_V12/*a*/[4] = new _V2/*Mt1-constructor*/();;
_V12/*a*/[4][2] = 40;;
_V13/*b*/[4] = _V12/*a*/[4];;
if((_V13/*b*/[4] !== _V12/*a*/[4])){
return {"success": false};
};
if((_V13/*b*/[4][2] == 40)){
return {"success": true};
};
}catch(e){return {"success": false};
};
return {"success": false};
})();
promiseland._registerModule({ hashStr: "651db8f5c5e2a5af36d3c64ac8f972d2", "module": _V1, promising: false });
return _V1;
});
})();