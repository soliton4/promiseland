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
if (promiseland._hasModule({ hashStr: "0ed06f66d2783c4b7f338ed58b63db59" })){ return promiseland._getModule("0ed06f66d2783c4b7f338ed58b63db59"); };
var _V3/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V4/*C1*/;
var _V6/*v1*/;
var _V7/*v2*/;
var _V2/*C1-constructor*/;
var _V5/*type:C1*/;
_V4/*C1*/ = classSystem.createClass({members: [{"name":"a","type":_V3/*type:var*/},{"name":"b","type":_V3/*type:var*/},{"name":"c","type":_V3/*type:var*/}], "extends": [], "hasFreePart": true}, {"a": 1, "b": function(){
this["a"] = 2;;
}, "c": function(){
return (function(){ throw { id:201, msg: "type missmatch" } })();
}});_V5/*type:C1*/ = _V4/*C1*/;_V2/*C1-constructor*/ = promiseland.classSystem.getTypeConstructor(_V5/*type:C1*/);_V4/*C1*/;;
_V6/*v1*/ = new _V2/*C1-constructor*/();
(function(){ throw { id:201, msg: "type missmatch" } })();
_V6/*v1*/[3]();;
if((_V7/*v2*/[2] == 2)){
return {"success": true};
};
;
return {"success": false};
})();
promiseland._registerModule({ hashStr: "0ed06f66d2783c4b7f338ed58b63db59", "module": _V1, promising: false });
return _V1;
});
})();