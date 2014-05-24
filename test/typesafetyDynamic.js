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
if (promiseland._hasModule({ hashStr: "e1f0833736acaa653e77399b8fc0fa66" })){ return promiseland._getModule("e1f0833736acaa653e77399b8fc0fa66"); };
var _V4/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V5/*T1*/;
var _V7/*T2*/;
var _V9/*a*/;
var _V18/*b*/;
var _V21/*catched*/;
var _V2/*T1-constructor*/;
var _V3/*T2-constructor*/;
var _V6/*type:T1*/;
var _V8/*type:T2*/;
_V5/*T1*/ = classSystem.createClass({members: [{"name":"a","type":_V4/*type:var*/},{"name":"b","type":_V4/*type:var*/}], "extends": [], "hasFreePart": true}, {"a": 1, "b": 2});_V6/*type:T1*/ = _V5/*T1*/;_V2/*T1-constructor*/ = promiseland.classSystem.getTypeConstructor(_V6/*type:T1*/);_V5/*T1*/;;
_V7/*T2*/ = classSystem.createClass({members: [{"name":"a","type":_V4/*type:var*/},{"name":"b","type":_V4/*type:var*/}], "extends": [], "hasFreePart": true}, {"a": 3, "b": 4});_V8/*type:T2*/ = _V7/*T2*/;_V3/*T2-constructor*/ = promiseland.classSystem.getTypeConstructor(_V8/*type:T2*/);_V7/*T2*/;;
_V9/*a*/ = (function(){var _V11/*type:Tx*/ = _V5/*T1*/;
var _V12/*Tx*/ = _V11/*type:Tx*/
;var _V10/*Tx-constructor*/ = classSystem.getTypeConstructor(_V11/*type:Tx*/);
var _V11/*type:Tx*/ = _V5/*T1*/;
var _V12/*Tx*/ = _V11/*type:Tx*/
;var _V10/*Tx-constructor*/ = classSystem.getTypeConstructor(_V11/*type:Tx*/);
var _V14/*type:Ty*/ = _V7/*T2*/;
var _V15/*Ty*/ = _V14/*type:Ty*/
;var _V13/*Ty-constructor*/ = classSystem.getTypeConstructor(_V14/*type:Ty*/);
var communicator = {fun: undefined};
eval("communicator.fun = function(){\nvar _V16/*x*/;\nvar _V17/*y*/;\nvar _V11/*type:Tx*/;\nvar _V14/*type:Ty*/;\n" + classSystem.getSetVariableCode({"instance":"_V16/*x*/", "type":_V11/*type:Tx*/, "value":"new _V10/*Tx-constructor*/()", "valueType":_V11/*type:Tx*/, "operator":"="}) + ";\n" + classSystem.getSetVariableCode({"instance":"_V17/*y*/", "type":_V14/*type:Ty*/, "value":"new _V13/*Ty-constructor*/()", "valueType":_V14/*type:Ty*/, "operator":"="}) + ";\n" + classSystem.getSetVariableCode({"instance":"_V16/*x*/", "type":_V11/*type:Tx*/, "value":"_V17/*y*/", "valueType":_V14/*type:Ty*/, "operator":"="}) + ";;\n};"); return communicator.fun; })();
_V18/*b*/ = (function(){var _V11/*type:Tx*/ = _V5/*T1*/;
var _V12/*Tx*/ = _V11/*type:Tx*/
;var _V19/*Tx-constructor*/ = classSystem.getTypeConstructor(_V11/*type:Tx*/);
var _V11/*type:Tx*/ = _V5/*T1*/;
var _V12/*Tx*/ = _V11/*type:Tx*/
;var _V19/*Tx-constructor*/ = classSystem.getTypeConstructor(_V11/*type:Tx*/);
var _V14/*type:Ty*/ = _V5/*T1*/;
var _V15/*Ty*/ = _V14/*type:Ty*/
;var _V20/*Ty-constructor*/ = classSystem.getTypeConstructor(_V14/*type:Ty*/);
var communicator = {fun: undefined};
eval("communicator.fun = function(){\nvar _V16/*x*/;\nvar _V17/*y*/;\nvar _V11/*type:Tx*/;\nvar _V14/*type:Ty*/;\n" + classSystem.getSetVariableCode({"instance":"_V16/*x*/", "type":_V11/*type:Tx*/, "value":"new _V19/*Tx-constructor*/()", "valueType":_V11/*type:Tx*/, "operator":"="}) + ";\n" + classSystem.getSetVariableCode({"instance":"_V17/*y*/", "type":_V14/*type:Ty*/, "value":"new _V20/*Ty-constructor*/()", "valueType":_V14/*type:Ty*/, "operator":"="}) + ";\n" + classSystem.getSetVariableCode({"instance":"_V16/*x*/", "type":_V11/*type:Tx*/, "value":"_V17/*y*/", "valueType":_V14/*type:Ty*/, "operator":"="}) + ";;\n};"); return communicator.fun; })();
_V21/*catched*/ = false;
try
{_V9/*a*/();;
}catch(e){_V21/*catched*/ = true;;
};
if(!_V21/*catched*/){
return {"success": false};
};
;
try
{_V18/*b*/();;
}catch(e){return {"success": false};
};
return {"success": true};
})();
promiseland._registerModule({ hashStr: "e1f0833736acaa653e77399b8fc0fa66", "module": _V1, promising: false });
return _V1;
});
})();