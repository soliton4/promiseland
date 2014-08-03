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
  
defineFun([], function(){ var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

if (promiseland._hasModule({ hashStr: "4a01c4f3b4388a1628a72080d91dbb50" })){ return promiseland._getModule("4a01c4f3b4388a1628a72080d91dbb50"); };
var _V18/*Array*/;try{_V18/*Array*/ = Array;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*mixinPrototype*/;
var _V9/*getProperty*/;
var _V13/*createClass*/;
;
;
_V2/*mixinPrototype*/ = (function(_V3/*parProto*/, _V4/*parMixin*/, _V5/*inheritedObject*/, _V6/*gotit*/){
var _V7/*i*/;
var _V8/*proto*/;
;
if((! _V4/*parMixin*/ || ! _V4/*parMixin*/["prototype"])){
return;;
};
;
if(! _V6/*gotit*/){
_V6/*gotit*/ = {};;
};
;
_V7/*i*/;
_V8/*proto*/ = _V4/*parMixin*/["prototype"];
for(_V7/*i*/ in _V8/*proto*/){if(((_V7/*i*/ === "prototype") || _V6/*gotit*/[_V7/*i*/])){
continue;;
};
;
_V3/*parProto*/[_V7/*i*/] = _V8/*proto*/[_V7/*i*/];;
_V5/*inheritedObject*/[_V7/*i*/] = _V3/*parProto*/[_V7/*i*/];;
_V6/*gotit*/[_V7/*i*/] = true;;
};
;
if(_V4/*parMixin*/["prototype"]){
_V2/*mixinPrototype*/(_V3/*parProto*/, _V4/*parMixin*/["prototype"], _V5/*inheritedObject*/, _V6/*gotit*/);;
};
;
;
});
_V9/*getProperty*/ = (function(_V10/*par*/, _V11/*parProperty*/, _V12/*parDefault*/){
;
if(_V10/*par*/["hasOwnProperty"](_V11/*parProperty*/)){
return _V10/*par*/[_V11/*parProperty*/];;
};
;
return _V12/*parDefault*/;;
;
});
_V13/*createClass*/ = (function(_V10/*par*/, _V14/*parExtends*/, _V5/*inheritedObject*/){
var _V15/*constructorFun*/;
var _V8/*proto*/;
var _V7/*i*/;
var _V16/*l*/;
var _V17/*realConstructorFun*/;
var _V19/*extendConstructors*/;
var _V20/*cl*/;
;
_V15/*constructorFun*/ = _V9/*getProperty*/(_V10/*par*/, "constructor", (function(){
;
;
}));
_V8/*proto*/ = {};
_V7/*i*/;
_V16/*l*/;
if(_V14/*parExtends*/){
_V17/*realConstructorFun*/ = _V15/*constructorFun*/;
if((_V14/*parExtends*/ instanceof _V18/*Array*/)){
_V16/*l*/ = _V14/*parExtends*/["length"];;
_V19/*extendConstructors*/ = [];
for(_V7/*i*/ = 0;(_V7/*i*/ < _V16/*l*/);++_V7/*i*/){{_V2/*mixinPrototype*/(_V8/*proto*/, _V14/*parExtends*/[_V7/*i*/], _V5/*inheritedObject*/);;
if((typeof _V14/*parExtends*/[_V7/*i*/] === "function")){
_V19/*extendConstructors*/["push"](_V14/*parExtends*/[_V7/*i*/]);;
};
;
}};
;
_V20/*cl*/ = _V19/*extendConstructors*/["length"];
if(_V20/*cl*/){
_V15/*constructorFun*/ = (function(){
var _V7/*i*/;
var _V21/*arguments*/ = arguments;
;
_V7/*i*/;
for(_V7/*i*/ = 0;(_V7/*i*/ < _V20/*cl*/);++_V7/*i*/){{_V19/*extendConstructors*/[_V7/*i*/]["apply"](this, _V21/*arguments*/);;
}};
;
return _V17/*realConstructorFun*/["apply"](this, _V21/*arguments*/);;
;
});;
};
;

}else{
_V2/*mixinPrototype*/(_V8/*proto*/, _V14/*parExtends*/, _V5/*inheritedObject*/);;
if((typeof _V14/*parExtends*/ === "function")){
_V15/*constructorFun*/ = (function(){
var _V21/*arguments*/ = arguments;
;
_V14/*parExtends*/["apply"](this, _V21/*arguments*/);;
return _V17/*realConstructorFun*/["apply"](this, _V21/*arguments*/);;
;
});;
};
;
};
;
};
;
for(_V7/*i*/ in _V10/*par*/){_V8/*proto*/[_V7/*i*/] = _V10/*par*/[_V7/*i*/];;
};
;
_V15/*constructorFun*/["prototype"] = _V8/*proto*/;;
return _V15/*constructorFun*/;;
;
});
return _V13/*createClass*/;;
;
})();
;return _V1;
}; return function(){ return __execute.apply(null, arguments); } });
})();