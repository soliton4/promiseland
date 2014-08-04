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
if (promiseland._hasModule({ hashStr: "706b40506e19128b39011fd31c0adea4" })){ return promiseland._getModule("706b40506e19128b39011fd31c0adea4"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "706b40506e19128b39011fd31c0adea4", "module": _V1, promising: true });
var _V16/*undefined*/;try{_V16/*undefined*/ = undefined;}catch(e){};
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*basics*/;
var _V7/*errorFun*/;
var _V8/*errorMsg*/;
var _V9/*_stringEncodeStr*/;
var _V10/*stringEncodeStr*/;
var _V11/*_Result*/;
_V3(function(){;
__requireFun("./basics").then(_V3(function(_V6){_V5/*basics*/ = _V6;
_V7/*errorFun*/ = _V5/*basics*/["errorFun"];
_V8/*errorMsg*/ = _V5/*basics*/["errorMsg"];
_V9/*_stringEncodeStr*/ = _V5/*basics*/["_stringEncodeStr"];
_V10/*stringEncodeStr*/ = _V5/*basics*/["stringEncodeStr"];
_V11/*_Result*/ = (function(_V12/*par*/){
;
if(_V12/*par*/["codeStr"]){
this["codeStr"] = _V12/*par*/["codeStr"];;

}else{
this["codeAr"] = [];;
};
;
this["_cp"] = _V12/*par*/["cp"];;
;
});
_V11/*_Result*/["prototype"] = {"pushType": (function(_V12/*par*/){
;
this["push"](_V12/*par*/);;
this["setType"](_V12/*par*/["getType"]());;
;
}),
"_prepCode": (function(_V13/*parCode*/, _V14/*parReference*/, _V12/*par*/){
var _V15/*res*/;
;
if((typeof _V13/*parCode*/ == "string")){
_V13/*parCode*/ = this["newResult"]({"codeStr": _V13/*parCode*/,
"reference": _V14/*parReference*/});;
};
;
_V15/*res*/;
if((_V12/*par*/ && _V12/*par*/["stringEncode"])){
_V15/*res*/ = this["newResult"]();;
_V15/*res*/["_stringEncode"] = true;;
_V15/*res*/["push"](_V13/*parCode*/);;
_V13/*parCode*/ = _V15/*res*/;;
};
;
if((_V12/*par*/ && _V12/*par*/["dynamic"])){
_V15/*res*/ = this["newResult"]();;
_V15/*res*/["_dynamic"] = true;;
_V15/*res*/["push"]("\" + ");;
_V15/*res*/["push"](_V13/*parCode*/);;
_V15/*res*/["push"](" + \"");;
_V13/*parCode*/ = _V15/*res*/;;
};
;
return _V13/*parCode*/;;
;
}),
"push": (function(_V13/*parCode*/, _V14/*parReference*/, _V12/*par*/){
;
if(! this["reference"]){
this["reference"] = _V14/*parReference*/;;
};
;
if(! _V13/*parCode*/){
return;;
};
;
if((_V14/*parReference*/ && (typeof _V14/*parReference*/ == "boolean"))){
_V7/*errorFun*/(_V16/*undefined*/, _V8/*errorMsg*/["internalWrongUseOfReference"]);;
};
;
_V13/*parCode*/ = this["_prepCode"](_V13/*parCode*/, _V14/*parReference*/, _V12/*par*/);;
if(! this["codeAr"]){
this["error"]((_V14/*parReference*/ || this["reference"]), _V8/*errorMsg*/["internalCantAddToStringResult"]);;
};
;
this["codeAr"]["push"](_V13/*parCode*/);;
if(_V13/*parCode*/["promising"]){
this["makePromising"]();;
};
;
;
}),
"_iterPar": (function(_V12/*par*/){
;
if(! _V12/*par*/){
_V12/*par*/ = {"stringEncode": 0};;
};
;
_V12/*par*/ = {"stringEncode": (_V12/*par*/["stringEncode"] || 0)};;
if(this["_stringEncode"]){
_V12/*par*/["stringEncode"] += 1;;
};
;
if(this["_dynamic"]){
_V12/*par*/["stringEncode"] -= 1;;
};
;
return _V12/*par*/;;
;
}),
"setPromise": (function(_V17/*ps*/){
var _V18/*self*/;
;
_V18/*self*/ = this;
this["promise"] = _V17/*ps*/;;
_V17/*ps*/["then"]((function(_V15/*res*/){
;
_V18/*self*/["replace"](_V15/*res*/);;
;
}));;
;
}),
"resolve": (function(_V15/*res*/){
;
this["promise"]["resolve"](_V15/*res*/);;
;
}),
"replace": (function(_V15/*res*/){
;
if((typeof _V15/*res*/ == "string")){
_V15/*res*/ = this["newResult"]({"codeStr": _V15/*res*/});;
};
;
this["replacement"] = _V15/*res*/;;
;
}),
"getParsed": (function(){
var _V19/*p*/;
var _V20/*i*/;
;
if(this["reference"]){
return this["reference"];;
};
;
_V19/*p*/;
if(this["preCode"]){
_V19/*p*/ = this["preCode"]["getParsed"]();;
};
;
if(_V19/*p*/){
return _V19/*p*/;;
};
;
if(this["codeAr"]){
_V20/*i*/ = 0;
for(_V20/*i*/ = 0;(_V20/*i*/ < this["codeAr"]["length"]);++_V20/*i*/){{_V19/*p*/ = this["codeAr"][_V20/*i*/]["getParsed"]();;
if(_V19/*p*/){
return _V19/*p*/;;
};
;
}};
;
};
;
if(this["postCode"]){
_V19/*p*/ = this["postCode"]["getParsed"]();;
};
;
return _V19/*p*/;;
;
}),
"setParsed": (function(_V14/*parReference*/){
;
if(_V14/*parReference*/){
this["reference"] = _V14/*parReference*/;;
};
;
;
}),
"_getPreCodeStr": (function(_V12/*par*/){
var _V21/*resStr*/;
var _V20/*i*/;
;
_V12/*par*/ = this["_iterPar"](_V12/*par*/);;
_V21/*resStr*/ = "";
_V20/*i*/;
if(this["preCode"]){
_V21/*resStr*/ += this["preCode"]["getPreCodeStr"](_V12/*par*/);;
_V21/*resStr*/ += this["preCode"]["getCodeStr"](_V12/*par*/);;
};
;
if(this["codeAr"]){
for(_V20/*i*/ = 0;(_V20/*i*/ < this["codeAr"]["length"]);++_V20/*i*/){{_V21/*resStr*/ += this["codeAr"][_V20/*i*/]["getPreCodeStr"](_V12/*par*/);;
}};
;
};
;
if(this["postCode"]){
_V21/*resStr*/ += this["postCode"]["getPreCodeStr"](_V12/*par*/);;
};
;
return _V21/*resStr*/;;
;
}),
"getPreCodeStr": (function(_V12/*par*/){
;
if(this["replacement"]){
return this["replacement"]["getPreCodeStr"](_V12/*par*/);;
};
;
if((this["isStatement"] || this["isComplete"])){
return "";;

}else{
return this["_getPreCodeStr"](_V12/*par*/);;
};
;
;
}),
"getCodeStr": (function(_V12/*par*/){
var _V21/*resStr*/;
var _V20/*i*/;
var _V22/*tempCodeStr*/;
;
if(this["replacement"]){
return this["replacement"]["getCodeStr"](_V12/*par*/);;
};
;
_V12/*par*/ = this["_iterPar"](_V12/*par*/);;
_V21/*resStr*/ = "";
_V20/*i*/;
if((this["isStatement"] || this["isComplete"])){
_V21/*resStr*/ += this["_getPreCodeStr"](_V12/*par*/);;
};
;
if(this["codeAr"]){
for(_V20/*i*/ = 0;(_V20/*i*/ < this["codeAr"]["length"]);++_V20/*i*/){{_V21/*resStr*/ += this["codeAr"][_V20/*i*/]["getCodeStr"](_V12/*par*/);;
}};
;

}else{
if(this["codeStr"]){
_V22/*tempCodeStr*/ = this["codeStr"];
if((_V12/*par*/["stringEncode"] < 0)){
_V7/*errorFun*/(_V16/*undefined*/, _V8/*errorMsg*/["internalNegativeStringEncode"]);;
};
;
for(_V20/*i*/ = 0;(_V20/*i*/ < _V12/*par*/["stringEncode"]);++_V20/*i*/){{_V22/*tempCodeStr*/ = _V9/*_stringEncodeStr*/(_V22/*tempCodeStr*/);;
}};
;
_V21/*resStr*/ += _V22/*tempCodeStr*/;;
};
};
;
if(this["promiseName"]){
_V21/*resStr*/ += this["promiseName"]["getCodeStr"](_V12/*par*/);;
};
;
if(this["isComplete"]){
_V21/*resStr*/ += this["_getPostCodeStr"](_V12/*par*/);;
};
;
return _V21/*resStr*/;;
;
}),
"_getPostCodeStr": (function(_V12/*par*/){
var _V21/*resStr*/;
var _V20/*i*/;
;
_V12/*par*/ = this["_iterPar"](_V12/*par*/);;
_V21/*resStr*/ = "";
_V20/*i*/;
if(this["postCode"]){
_V21/*resStr*/ += this["postCode"]["getCodeStr"](_V12/*par*/);;
_V21/*resStr*/ += this["postCode"]["getPostCodeStr"](_V12/*par*/);;
};
;
if(this["codeAr"]){
for(_V20/*i*/ = this["codeAr"]["length"];_V20/*i*/;--_V20/*i*/){{_V21/*resStr*/ += this["codeAr"][(_V20/*i*/ - 1)]["getPostCodeStr"](_V12/*par*/);;
}};
;
};
;
if(this["preCode"]){
_V21/*resStr*/ += this["preCode"]["getPostCodeStr"](_V12/*par*/);;
};
;
return _V21/*resStr*/;;
;
}),
"getPostCodeStr": (function(_V12/*par*/){
;
if(this["replacement"]){
return this["replacement"]["getPostCodeStr"](_V12/*par*/);;
};
;
if(this["isComplete"]){
return "";;

}else{
return this["_getPostCodeStr"](_V12/*par*/);;
};
;
;
}),
"makePromising": (function(){
;
if(this["promising"]){
return;;
};
;
this["promising"] = true;;
;
}),
"setPromiseName": (function(_V13/*parCode*/, _V14/*parReference*/){
;
this["makePromising"]();;
this["promiseName"] = this["newResult"]({"codeStr": _V13/*parCode*/,
"reference": _V14/*parReference*/});;
;
this["hasPromiseName"] = true;;
;
}),
"getPromiseName": (function(){
;
if((this["promising"] && this["hasPromiseName"])){
return this["promiseName"];;
};
;
;
}),
"isPromising": (function(){
;
return this["promising"];;
;
}),
"addPre": (function(_V13/*parCode*/, _V14/*parReference*/, _V12/*par*/){
;
if(! _V13/*parCode*/){
return;;
};
;
_V13/*parCode*/ = this["_prepCode"](_V13/*parCode*/, _V14/*parReference*/, _V12/*par*/);;
if(_V13/*parCode*/["promising"]){
this["makePromising"]();;
};
;
if(! this["preCode"]){
this["preCode"] = this["newResult"]();;
};
;
this["preCode"]["push"](_V13/*parCode*/, _V14/*parReference*/, _V12/*par*/);;
;
}),
"addPost": (function(_V13/*parCode*/, _V14/*parReference*/, _V12/*par*/){
;
if(! _V13/*parCode*/){
return;;
};
;
_V13/*parCode*/ = this["_prepCode"](_V13/*parCode*/, _V14/*parReference*/, _V12/*par*/);;
if(_V13/*parCode*/["promising"]){
this["makePromising"]();;
};
;
if(! this["postCode"]){
this["postCode"] = this["newResult"]();;
};
;
this["postCode"]["push"](_V13/*parCode*/, _V14/*parReference*/, _V12/*par*/);;
;
}),
"setStatement": (function(){
;
this["isStatement"] = true;;
;
}),
"setComplete": (function(){
;
this["isComplete"] = true;;
;
}),
"newResult": (function(_V12/*par*/){
;
return new _V11/*_Result*/({"cp": this["_cp"],
"codeStr": (_V12/*par*/ ? _V12/*par*/["codeStr"] : _V16/*undefined*/)});;
;
}),
"getType": (function(_V12/*par*/){
;
return this["providesType"];;
;
}),
"setType": (function(_V12/*par*/){
;
if(this["providesType"]){
_V7/*errorFun*/({}, _V8/*errorMsg*/["multipleTypeProviding"]);;
};
;
if((typeof _V12/*par*/ == "string")){
this["providesType"] = this["_cp"]["getType"](_V12/*par*/, this["reference"]);;
return;;
};
;
this["providesType"] = _V12/*par*/;;
;
})};;
_V1.resolve(_V11/*_Result*/); return;;
_V1.resolve(); return;;
}));})();
return _V1;
})();
;;
return _V1});
})();