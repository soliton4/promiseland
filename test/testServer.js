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
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    if (promiseland._hasModule({ hashStr: "3c6e59ad1883177416a116152a7a45b3" })){ return promiseland._getModule("3c6e59ad1883177416a116152a7a45b3"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "3c6e59ad1883177416a116152a7a45b3", "module": _V1, promising: true });
var _V20/*__dirname*/;try{_V20/*__dirname*/ = __dirname;}catch(e){};
var _V21/*promiseland*/;try{_V21/*promiseland*/ = promiseland;}catch(e){};
var _V30/*console*/;try{_V30/*console*/ = console;}catch(e){};
var _V46/*process*/;try{_V46/*process*/ = process;}catch(e){};
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*express*/;
var _V7/*http*/;
var _V9/*fs*/;
var _V11/*socketIo*/;
var _V13/*app*/;
var _V14/*server*/;
var _V22/*ClientProfile*/;
var _V27/*clientProfile*/;
var _V28/*mainio*/;
var _V32/*tests*/;
var _V33/*collector*/;
var _V35/*cp*/;
var _V37/*chromeChild*/;
var _V38/*chromePs*/;
_V3(function(){;
__requireFun("express").then(_V3(function(_V6){_V5/*express*/ = _V6;
__requireFun("http").then(_V3(function(_V8){_V7/*http*/ = _V8;
__requireFun("fs").then(_V3(function(_V10){_V9/*fs*/ = _V10;
__requireFun("socket.io").then(_V3(function(_V12){_V11/*socketIo*/ = _V12;
_V13/*app*/ = _V5/*express*/();
_V14/*server*/ = _V7/*http*/["createServer"](_V13/*app*/);
_V13/*app*/["get"]("/", (function(_V15/*req*/, _V16/*res*/){
;
_V16/*res*/["setHeader"]("Content-Type", "text/html");;
_V9/*fs*/["readFile"]("./testClient.html", (function(_V17/*err*/, _V18/*data*/){
var _V19/*s*/;
;
if(_V17/*err*/){
_V16/*res*/["end"](_V17/*err*/);;
return;;
};
;
_V19/*s*/ = _V18/*data*/["toString"]();
_V16/*res*/["end"](_V19/*s*/);;
;
}));;
;
}));;
_V13/*app*/["use"]("/promiseland", _V5/*express*/["static"]((_V20/*__dirname*/ + "/../")));;
_V13/*app*/["use"]("/pl", _V5/*express*/["static"]((_V20/*__dirname*/ + "/../")));;
_V13/*app*/["use"]("/requirejs", _V5/*express*/["static"]("./requirejs"));;
_V13/*app*/["use"]("/testmodules", _V5/*express*/["static"]("./testmodules"));;
_V13/*app*/["use"]("/test", _V5/*express*/["static"]("./test"));;
_V13/*app*/["use"]("/testapp", _V5/*express*/["static"](_V20/*__dirname*/));;
_V14/*server*/["listen"](3008);;
_V21/*promiseland*/["set"]("profile", "server");;
_V22/*ClientProfile*/ = (function(){
var _V24/*nextid*/;
;
this["name"] = (function(){
;
return "client";;
;
});;
this["connections"] = {};;
this["find"] = (function(_V23/*parId*/){
;
return this["connections"][_V23/*parId*/];;
;
});;
_V24/*nextid*/ = 1;
this["addConnection"] = (function(_V25/*connection*/){
var _V26/*id*/;
;
_V26/*id*/ = _V24/*nextid*/;
_V24/*nextid*/++;;
this["connections"][_V26/*id*/] = _V25/*connection*/;;
this["emit"]("connection", _V25/*connection*/);;
;
});;
;
});
_V22/*ClientProfile*/["prototype"] = new _V21/*promiseland*/["ProfileBaseClass"]();;
_V27/*clientProfile*/ = new _V22/*ClientProfile*/();
_V21/*promiseland*/["addProfile"](_V27/*clientProfile*/);;
_V28/*mainio*/ = _V11/*socketIo*/["listen"](_V14/*server*/);
_V28/*mainio*/["on"]("connection", (function(_V29/*socket*/){
var _V25/*connection*/;
;
_V30/*console*/["log"]("got connected");;
_V25/*connection*/ = new _V21/*promiseland*/["ConnectionBaseClass"]();
_V25/*connection*/["socket"] = _V29/*socket*/;;
_V29/*socket*/["on"]("pl", (function(_V18/*data*/){
;
_V25/*connection*/["emit"]("data", _V18/*data*/);;
;
}));;
_V25/*connection*/["send"] = (function(_V18/*data*/){
;
_V29/*socket*/["emit"]("pl", _V18/*data*/);;
;
});;
_V27/*clientProfile*/["addConnection"](_V25/*connection*/);;
_V29/*socket*/["on"]("disconnect", (function(){
;
_V25/*connection*/["emit"]("disconnect");;
;
}));;
return;;
;
}));;
__requireFun("./test/frameTests").then(_V3(function(_V31){_V31;;
_V32/*tests*/ = {};
__requireFun("./testCollector").then(_V3(function(_V34){_V33/*collector*/ = _V34;
__requireFun("./createProcess").then(_V3(function(_V36){_V35/*cp*/ = _V36;
_V37/*chromeChild*/ = _V35/*cp*/("google-chrome", ["--new-window", "http://localhost:3008/?type=chrome"])["child"];
_V38/*chromePs*/ = _V33/*collector*/["getResultPromise"]("chrome");
_V38/*chromePs*/.then(_V3(function(_V39){_V32/*tests*/["chrome"] = _V39;;
_V33/*collector*/["finish"]("chrome");;
_V14/*server*/["close"]();;
var _V40 = new __Promise();
var _V41 = new __Promise();
var _V42/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V41.resolve(e); }; }; };
var _V43 = function(e){ _V41.resolve(e); };
_V42/*try catch*/(function(){__requireFun("./test/simpleTests").then(_V42/*try catch*/(function(_V44){_V32/*tests*/["node"] = _V44;;
_V40.resolve();
}), _V43);
;})();
_V41.then(_V3(function(_V45/*e*/){_V30/*console*/["log"](_V45/*e*/);;
_V40.resolve();;
}));
_V40.then(_V3(function(){;
;
try
{_V46/*process*/["send"](_V32/*tests*/);;
}catch(_V45/*e*/){_V30/*console*/["log"](_V32/*tests*/);;
};
;
_V46/*process*/["exit"](0);;
_V1.resolve(); return;;
}), _V4)}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;})();
return _V1;
})();
;;
return _V1});
})();