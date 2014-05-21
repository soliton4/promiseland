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
if (promiseland._hasModule({ hashStr: "52359e7398cbfbfaf29d768d9b7a668b" })){ return promiseland._getModule("52359e7398cbfbfaf29d768d9b7a668b"); };
var _V9/*doSome*/;try{_V9/*doSome*/ = doSome;}catch(e){};
var _V3/*context*/;try{_V3/*context*/ = context;}catch(e){};
var _V20/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V2/*z*/;
var _V10/*y*/;
var _V7/*x*/;
_V2/*z*/ = function(_V3/*context*/){
var _V4 = new __Promise();
var _V5 = function(code){ return function(res){ try{code(res);}catch(e){ _V4.reject(e); }; }; };
var _V6 = function(e){ _V4.reject(e); };
_V5(function(){_V7/*x*/().then(_V5(function(_V8){if(_V8){
_V9/*doSome*/();;
};
;
_V4.resolve(); return;;
}), _V6);})();
return _V4;
};
var _V15 = function(){
var _V11 = new __Promise();
var _V12 = function(code){ return function(res){ try{code(res);}catch(e){ _V11.reject(e); }; }; };
var _V13 = function(e){ _V11.reject(e); };
_V12(function(){_V2/*z*/(_V3/*context*/).then(_V12(function(_V14){_V14;;
_V11.resolve(); return;;
}), _V13);})();
return _V11;
};
promiseland.registerRemote("undefined", "52359e7398cbfbfaf29d768d9b7a668b", "_V15", _V15);
_V10/*y*/ = function(){if (promiseland.profileHas("undefined")){
return _V15.apply(this, arguments);
}else{
return promiseland.remoteExec("52359e7398cbfbfaf29d768d9b7a668b", "_V15", arguments);
};
};
var _V19 = function(){
var _V16 = new __Promise();
var _V17 = function(code){ return function(res){ try{code(res);}catch(e){ _V16.reject(e); }; }; };
var _V18 = function(e){ _V16.reject(e); };
_V17(function(){_V16.resolve( "x"); return _V16;
_V16.resolve(); return;;
})();
return _V16;
};
promiseland.registerRemote("undefined", "52359e7398cbfbfaf29d768d9b7a668b", "_V19", _V19);
_V7/*x*/ = function(){if (promiseland.profileHas("undefined")){
return _V19.apply(this, arguments);
}else{
return promiseland.remoteExec("52359e7398cbfbfaf29d768d9b7a668b", "_V19", arguments);
};
};
})();
promiseland._registerModule({ hashStr: "52359e7398cbfbfaf29d768d9b7a668b", "module": _V1, promising: false });
return _V1;
});
})();