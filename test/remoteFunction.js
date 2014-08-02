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
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "52359e7398cbfbfaf29d768d9b7a668b" })){ return promiseland._getModule("52359e7398cbfbfaf29d768d9b7a668b"); };
var _V10/*doSome*/;try{_V10/*doSome*/ = doSome;}catch(e){};
var _V3/*context*/;try{_V3/*context*/ = context;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*z*/;
var _V11/*y*/;
var _V8/*x*/;
;
_V2/*z*/ = (function(_V3/*context*/){
var _V4 = new __Promise();
var _V6 = function(code){ return function(res){ try{code(res);}catch(e){ _V4.reject(e); }; }; };
var _V7 = function(e){ _V4.reject(e); };
_V6(function(){;
_V8/*x*/().then(_V6(function(_V9){if(_V9){
_V10/*doSome*/();;
};
;
_V4.resolve(); return;;
}), _V7);
;})();
return _V4;
});
_V11/*y*/ = ((function(f){
promiseland.registerRemote("server", "52359e7398cbfbfaf29d768d9b7a668b", "_V16", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
var _V17/*temp returnpromise*/ = new __Promise();

promiseland.remoteExec("52359e7398cbfbfaf29d768d9b7a668b", "_V16", arguments, _V17/*temp returnpromise*/);
return _V17/*temp returnpromise*/;
}
};
})(function(){
var _V12 = new __Promise();
var _V13 = function(code){ return function(res){ try{code(res);}catch(e){ _V12.reject(e); }; }; };
var _V14 = function(e){ _V12.reject(e); };
_V13(function(){;
_V2/*z*/(_V3/*context*/).then(_V13(function(_V15){_V15;;
_V12.resolve(); return;;
}), _V14);
;})();
return _V12;
}));
_V8/*x*/ = ((function(f){
promiseland.registerRemote("client", "52359e7398cbfbfaf29d768d9b7a668b", "_V21", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("client")){
return f;
}else{
return function(){
var _V22/*temp returnpromise*/ = new __Promise();

promiseland.remoteExec("52359e7398cbfbfaf29d768d9b7a668b", "_V21", arguments, _V22/*temp returnpromise*/);
return _V22/*temp returnpromise*/;
}
};
})(function(){
var _V18 = new __Promise();
var _V19 = function(code){ return function(res){ try{code(res);}catch(e){ _V18.reject(e); }; }; };
var _V20 = function(e){ _V18.reject(e); };
_V19(function(){;
_V18.resolve("x"); return;;
_V18.resolve(); return;;
})();
return _V18;
}));
;
})();
;promiseland._registerModule({ hashStr: "52359e7398cbfbfaf29d768d9b7a668b", "module": _V1, promising: false });
return _V1;
});
})();