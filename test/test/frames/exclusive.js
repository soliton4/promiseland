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

if (promiseland._hasModule({ hashStr: "45793d21303f9b6bf6d65e96e3d6b248" })){ return promiseland._getModule("45793d21303f9b6bf6d65e96e3d6b248"); };
var _V3/*__dirname*/;try{_V3/*__dirname*/ = __dirname;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*isServer*/;
var _V4/*serverRun*/;
var _V5/*clientRun*/;
var _V6/*exs*/;
var _V7/*exc*/;
;
_V2/*isServer*/ = false;
if(_V3/*__dirname*/){
_V2/*isServer*/ = true;;
};
;
_V4/*serverRun*/ = false;
_V5/*clientRun*/ = false;
_V6/*exs*/ = (function(){
if (!promiseland.profileHas("server")){
return;
};
;
_V4/*serverRun*/ = true;;
;
});
_V7/*exc*/ = (function(){
if (!promiseland.profileHas("client")){
return;
};
;
_V5/*clientRun*/ = true;;
;
});
_V6/*exs*/();;
_V7/*exc*/();;
if((_V2/*isServer*/ && _V5/*clientRun*/)){
return {"success": false};;
};
;
if((_V2/*isServer*/ && ! _V4/*serverRun*/)){
return {"success": false};;
};
;
if((! _V2/*isServer*/ && _V4/*serverRun*/)){
return {"success": false};;
};
;
if((! _V2/*isServer*/ && ! _V5/*clientRun*/)){
return {"success": false};;
};
;
return {"success": true};;
;
})();
;return _V1;
});
})();