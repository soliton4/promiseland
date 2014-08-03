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

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
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
if (promiseland._hasModule({ hashStr: "5a77e69e7bd7e39b4101f1603b840d3d" })){ return promiseland._getModule("5a77e69e7bd7e39b4101f1603b840d3d"); };
var _V23/*e*/;try{_V23/*e*/ = e;}catch(e){};
var _V24/*promiseland*/;try{_V24/*promiseland*/ = promiseland;}catch(e){};
var _V1 = (function(){
"use strict";
var _V2/*_parserPs*/;
var _V3/*_getParser*/;
var _V4/*_getParserPromise*/;
var _V11/*ParserClass*/;
;
;
_V2/*_parserPs*/;
_V3/*_getParser*/ = (function(){
;
if(_V2/*_parserPs*/){
return _V2/*_parserPs*/;;
};
;
_V2/*_parserPs*/ = _V4/*_getParserPromise*/();;
return _V2/*_parserPs*/;;
;
});
_V4/*_getParserPromise*/ = (function(){
var _V5 = new __Promise();
var _V7 = function(code){ return function(res){ try{code(res);}catch(e){ _V5.reject(e); }; }; };
var _V8 = function(e){ _V5.reject(e); };
var _V9/*parser*/;
_V7(function(){;
__requireFun("./parser/parser").then(_V7(function(_V10){_V9/*parser*/ = _V10;
_V5.resolve(_V9/*parser*/); return;;
_V5.resolve(); return;;
}));})();
return _V5;
});
_V11/*ParserClass*/ = (function(_V12/*par*/){
;
this["parse"] = (function(_V13/*parStr*/){
var _V14 = new __Promise();
var _V15 = function(code){ return function(res){ try{code(res);}catch(e){ _V14.reject(e); }; }; };
var _V16 = function(e){ _V14.reject(e); };
var _V9/*parser*/;
_V15(function(){;
var _V17 = new __Promise();
var _V18 = new __Promise();
var _V19/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V18.resolve(e); }; }; };
var _V20 = function(e){ _V18.resolve(e); };
_V19/*try catch*/(function(){_V3/*_getParser*/().then(_V19/*try catch*/(function(_V21){_V9/*parser*/ = _V21;
_V9/*parser*/["parse"](_V13/*parStr*/).then(_V19/*try catch*/(function(_V22){_V14.resolve(_V22); return;;
_V17.resolve();
}), _V20);
;}), _V20);
;})();
_V18.then(_V15(function(e){if(! _V23/*e*/["msg"]){
_V23/*e*/["msg"] = _V23/*e*/["message"];;
};
;
throw _V23/*e*/;
_V17.resolve();;
}));
_V17.then(_V15(function(){;
;
_V14.resolve(); return;;
}), _V16)})();
return _V14;
});;
;
});
_V24/*promiseland*/["Parser"] = _V11/*ParserClass*/;;
;
})();
;return _V1;
}; return function(){ return __execute.apply(null, arguments); } });
})();