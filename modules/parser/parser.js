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
if (promiseland._hasModule({ hashStr: "56c2371f455bf1b6180f96d86524040e" })){ return promiseland._getModule("56c2371f455bf1b6180f96d86524040e"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "56c2371f455bf1b6180f96d86524040e", "module": _V1, promising: true });
var _V11/*promiseland*/;try{_V11/*promiseland*/ = promiseland;}catch(e){};
var _V22/*RegExp*/;try{_V22/*RegExp*/ = RegExp;}catch(e){};
var _V42/*undefined*/;try{_V42/*undefined*/ = undefined;}catch(e){};
var _V154/*JSON*/;try{_V154/*JSON*/ = JSON;}catch(e){};
var _V165/*Array*/;try{_V165/*Array*/ = Array;}catch(e){};
var _V166/*console*/;try{_V166/*console*/ = console;}catch(e){};
var _V235/*e*/;try{_V235/*e*/ = e;}catch(e){};
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*md5*/;
var _V7/*_parser*/;
var _V9/*_pureCode*/;
var _V10/*Promise*/;
var _V12/*errorMsg*/;
var _V13/*classSystem*/;
var _V14/*statementType*/;
var _V15/*varType*/;
var _V16/*errorFun*/;
var _V19/*globalNewPromiseStr*/;
var _V20/*_stringEncodeStr*/;
var _V23/*stringEncodeStr*/;
var _V24/*mixin*/;
var _V30/*identifierName*/;
var _V31/*checkIsFunction*/;
var _V32/*findPromises*/;
var _V33/*checkPromising*/;
var _V34/*addExtraToPar*/;
var _V37/*getExtraFromPar*/;
var _V38/*_Result*/;
var _V47/*CodeParser*/;
var _V266/*loaderStr*/;
var _V267/*promiselandRequireStr*/;
var _V268/*callbackRequireStr*/;
var _V269/*loaderEndStr*/;
var _V270/*createHeader*/;
var _V272/*createFooter*/;
var _V273/*parser*/;
_V3(function(){;
__requireFun("./md5").then(_V3(function(_V6){_V5/*md5*/ = _V6;
__requireFun("./_parser").then(_V3(function(_V8){_V7/*_parser*/ = _V8;
_V9/*_pureCode*/ = false;
_V10/*Promise*/ = _V11/*promiseland*/["Promise"];
_V12/*errorMsg*/;
_V13/*classSystem*/ = _V11/*promiseland*/["classSystem"];
_V14/*statementType*/ = {"builtin": true,
"statement": true};
_V15/*varType*/ = _V13/*classSystem*/["getBuiltinType"]("var");
_V16/*errorFun*/ = (function(_V17/*par*/, _V18/*err*/){
;
if((! _V17/*par*/ || ! _V17/*par*/["line"])){
throw _V12/*errorMsg*/["internalParserInfoMissing"];
};
;
_V18/*err*/["line"] = _V17/*par*/["line"];;
_V18/*err*/["column"] = _V17/*par*/["column"];;
throw _V18/*err*/;
;
});
_V19/*globalNewPromiseStr*/ = (function(){
;
return "new __Promise()";;
;
});
_V20/*_stringEncodeStr*/ = (function(_V17/*par*/){
var _V21/*s*/;
;
_V21/*s*/ = _V17/*par*/["replace"](new _V22/*RegExp*/("\\\\", "g"), "\\\\");
_V21/*s*/ = _V21/*s*/["replace"](new _V22/*RegExp*/("\\n", "g"), "\\n");;
_V21/*s*/ = _V21/*s*/["replace"](new _V22/*RegExp*/("\\r", "g"), "\\r");;
_V21/*s*/ = _V21/*s*/["replace"](new _V22/*RegExp*/("\\\"", "g"), "\\\"");;
_V21/*s*/ = _V21/*s*/["replace"](new _V22/*RegExp*/("\\u2028", "g"), "\\u2028");;
_V21/*s*/ = _V21/*s*/["replace"](new _V22/*RegExp*/("\\u2029", "g"), "\\u2029");;
return _V21/*s*/;;
;
});
_V23/*stringEncodeStr*/ = (function(_V17/*par*/){
;
return (("\"" + _V20/*_stringEncodeStr*/(_V17/*par*/)) + "\"");;
;
});
_V24/*mixin*/ = (function(){
var _V25/*t*/;
var _V27/*i*/;
var _V28/*m*/;
var _V29/*p*/;
var _V26/*arguments*/ = arguments;
;
_V25/*t*/ = _V26/*arguments*/[0];
_V27/*i*/ = 0;
for(_V27/*i*/ = 1;(_V27/*i*/ < _V26/*arguments*/["length"]);++_V27/*i*/){{_V28/*m*/ = _V26/*arguments*/[_V27/*i*/];
for(_V29/*p*/ in _V28/*m*/){_V25/*t*/[_V29/*p*/] = _V28/*m*/[_V29/*p*/];;
};
;
}};
;
return _V25/*t*/;;
;
});
_V30/*identifierName*/ = (function(_V17/*par*/){
;
if((typeof _V17/*par*/ == "string")){
return _V17/*par*/;;
};
;
if((_V17/*par*/["type"] == "Literal")){
return _V17/*par*/["value"];;
};
;
return _V17/*par*/["name"];;
;
});
_V31/*checkIsFunction*/ = (function(_V17/*par*/){
;
if((((_V17/*par*/["type"] == "FunctionExpression") || (_V17/*par*/["type"] == "FunctionDeclaration")) || (_V17/*par*/["type"] == "MemberFunction"))){
return true;;
};
;
return false;;
;
});
_V32/*findPromises*/ = (function(_V17/*par*/){
var _V27/*i*/;
;
if((! _V17/*par*/ || (typeof _V17/*par*/ == "string"))){
return false;;
};
;
if(((_V17/*par*/["type"] == "UnaryExpression") && ((_V17/*par*/["operator"] == "*") || (_V17/*par*/["operator"] == "require")))){
_V17/*par*/["promising"] = true;;
};
;
if((_V31/*checkIsFunction*/(_V17/*par*/) && (_V17/*par*/["promise"] == "*"))){
_V17/*par*/["promising"] = true;;
};
;
_V27/*i*/;
for(_V27/*i*/ in _V17/*par*/){if((_V27/*i*/ == "_extrainfo")){
continue;;
};
;
if((_V32/*findPromises*/(_V17/*par*/[_V27/*i*/]) && ! _V31/*checkIsFunction*/(_V17/*par*/[_V27/*i*/]))){
_V17/*par*/["promising"] = true;;
};
;
};
;
if(_V17/*par*/["promising"]){
return true;;
};
;
return false;;
;
});
_V33/*checkPromising*/ = (function(_V17/*par*/){
;
if((! _V17/*par*/ || (typeof _V17/*par*/ == "string"))){
return false;;
};
;
if((typeof _V17/*par*/["isPromising"] == "function")){
return _V17/*par*/["isPromising"]();;
};
;
return (_V17/*par*/["promising"] || _V17/*par*/["isPromising"]);;
;
});
_V34/*addExtraToPar*/ = (function(_V17/*par*/, _V35/*property*/, _V36/*obj*/){
;
if(! _V17/*par*/["_extrainfo"]){
_V17/*par*/["_extrainfo"] = {};;
};
;
_V17/*par*/["_extrainfo"][_V35/*property*/] = _V36/*obj*/;;
;
});
_V37/*getExtraFromPar*/ = (function(_V17/*par*/, _V35/*property*/){
;
if(_V17/*par*/["_extrainfo"]){
return _V17/*par*/["_extrainfo"][_V35/*property*/];;
};
;
;
});
_V38/*_Result*/ = (function(_V17/*par*/){
;
if(_V17/*par*/["codeStr"]){
this["codeStr"] = _V17/*par*/["codeStr"];;

}else{
this["codeAr"] = [];;
};
;
this["_cp"] = _V17/*par*/["cp"];;
;
});
_V38/*_Result*/["prototype"] = {"pushType": (function(_V17/*par*/){
;
this["push"](_V17/*par*/);;
this["setType"](_V17/*par*/["getType"]());;
;
}),
"_prepCode": (function(_V39/*parCode*/, _V40/*parReference*/, _V17/*par*/){
var _V41/*res*/;
;
if((typeof _V39/*parCode*/ == "string")){
_V39/*parCode*/ = this["newResult"]({"codeStr": _V39/*parCode*/,
"reference": _V40/*parReference*/});;
};
;
_V41/*res*/;
if((_V17/*par*/ && _V17/*par*/["stringEncode"])){
_V41/*res*/ = this["newResult"]();;
_V41/*res*/["_stringEncode"] = true;;
_V41/*res*/["push"](_V39/*parCode*/);;
_V39/*parCode*/ = _V41/*res*/;;
};
;
if((_V17/*par*/ && _V17/*par*/["dynamic"])){
_V41/*res*/ = this["newResult"]();;
_V41/*res*/["_dynamic"] = true;;
_V41/*res*/["push"]("\" + ");;
_V41/*res*/["push"](_V39/*parCode*/);;
_V41/*res*/["push"](" + \"");;
_V39/*parCode*/ = _V41/*res*/;;
};
;
return _V39/*parCode*/;;
;
}),
"push": (function(_V39/*parCode*/, _V40/*parReference*/, _V17/*par*/){
;
if(! this["reference"]){
this["reference"] = _V40/*parReference*/;;
};
;
if(! _V39/*parCode*/){
return;;
};
;
if((_V40/*parReference*/ && (typeof _V40/*parReference*/ == "boolean"))){
_V16/*errorFun*/(_V42/*undefined*/, _V12/*errorMsg*/["internalWrongUseOfReference"]);;
};
;
_V39/*parCode*/ = this["_prepCode"](_V39/*parCode*/, _V40/*parReference*/, _V17/*par*/);;
if(! this["codeAr"]){
this["error"]((_V40/*parReference*/ || this["reference"]), _V12/*errorMsg*/["internalCantAddToStringResult"]);;
};
;
this["codeAr"]["push"](_V39/*parCode*/);;
if(_V39/*parCode*/["promising"]){
this["makePromising"]();;
};
;
;
}),
"_iterPar": (function(_V17/*par*/){
;
if(! _V17/*par*/){
_V17/*par*/ = {"stringEncode": 0};;
};
;
_V17/*par*/ = {"stringEncode": (_V17/*par*/["stringEncode"] || 0)};;
if(this["_stringEncode"]){
_V17/*par*/["stringEncode"] += 1;;
};
;
if(this["_dynamic"]){
_V17/*par*/["stringEncode"] -= 1;;
};
;
return _V17/*par*/;;
;
}),
"setPromise": (function(_V43/*ps*/){
var _V44/*self*/;
;
_V44/*self*/ = this;
this["promise"] = _V43/*ps*/;;
_V43/*ps*/["then"]((function(_V41/*res*/){
;
_V44/*self*/["replace"](_V41/*res*/);;
;
}));;
;
}),
"resolve": (function(_V41/*res*/){
;
this["promise"]["resolve"](_V41/*res*/);;
;
}),
"replace": (function(_V41/*res*/){
;
if((typeof _V41/*res*/ == "string")){
_V41/*res*/ = this["newResult"]({"codeStr": _V41/*res*/});;
};
;
this["replacement"] = _V41/*res*/;;
;
}),
"getParsed": (function(){
var _V29/*p*/;
var _V27/*i*/;
;
if(this["reference"]){
return this["reference"];;
};
;
_V29/*p*/;
if(this["preCode"]){
_V29/*p*/ = this["preCode"]["getParsed"]();;
};
;
if(_V29/*p*/){
return _V29/*p*/;;
};
;
if(this["codeAr"]){
_V27/*i*/ = 0;
for(_V27/*i*/ = 0;(_V27/*i*/ < this["codeAr"]["length"]);++_V27/*i*/){{_V29/*p*/ = this["codeAr"][_V27/*i*/]["getParsed"]();;
if(_V29/*p*/){
return _V29/*p*/;;
};
;
}};
;
};
;
if(this["postCode"]){
_V29/*p*/ = this["postCode"]["getParsed"]();;
};
;
return _V29/*p*/;;
;
}),
"setParsed": (function(_V40/*parReference*/){
;
if(_V40/*parReference*/){
this["reference"] = _V40/*parReference*/;;
};
;
;
}),
"_getPreCodeStr": (function(_V17/*par*/){
var _V45/*resStr*/;
var _V27/*i*/;
;
_V17/*par*/ = this["_iterPar"](_V17/*par*/);;
_V45/*resStr*/ = "";
_V27/*i*/;
if(this["preCode"]){
_V45/*resStr*/ += this["preCode"]["getPreCodeStr"](_V17/*par*/);;
_V45/*resStr*/ += this["preCode"]["getCodeStr"](_V17/*par*/);;
};
;
if(this["codeAr"]){
for(_V27/*i*/ = 0;(_V27/*i*/ < this["codeAr"]["length"]);++_V27/*i*/){{_V45/*resStr*/ += this["codeAr"][_V27/*i*/]["getPreCodeStr"](_V17/*par*/);;
}};
;
};
;
if(this["postCode"]){
_V45/*resStr*/ += this["postCode"]["getPreCodeStr"](_V17/*par*/);;
};
;
return _V45/*resStr*/;;
;
}),
"getPreCodeStr": (function(_V17/*par*/){
;
if(this["replacement"]){
return this["replacement"]["getPreCodeStr"](_V17/*par*/);;
};
;
if((this["isStatement"] || this["isComplete"])){
return "";;

}else{
return this["_getPreCodeStr"](_V17/*par*/);;
};
;
;
}),
"getCodeStr": (function(_V17/*par*/){
var _V45/*resStr*/;
var _V27/*i*/;
var _V46/*tempCodeStr*/;
;
if(this["replacement"]){
return this["replacement"]["getCodeStr"](_V17/*par*/);;
};
;
_V17/*par*/ = this["_iterPar"](_V17/*par*/);;
_V45/*resStr*/ = "";
_V27/*i*/;
if((this["isStatement"] || this["isComplete"])){
_V45/*resStr*/ += this["_getPreCodeStr"](_V17/*par*/);;
};
;
if(this["codeAr"]){
for(_V27/*i*/ = 0;(_V27/*i*/ < this["codeAr"]["length"]);++_V27/*i*/){{_V45/*resStr*/ += this["codeAr"][_V27/*i*/]["getCodeStr"](_V17/*par*/);;
}};
;

}else{
if(this["codeStr"]){
_V46/*tempCodeStr*/ = this["codeStr"];
if((_V17/*par*/["stringEncode"] < 0)){
_V16/*errorFun*/(_V42/*undefined*/, _V12/*errorMsg*/["internalNegativeStringEncode"]);;
};
;
for(_V27/*i*/ = 0;(_V27/*i*/ < _V17/*par*/["stringEncode"]);++_V27/*i*/){{_V46/*tempCodeStr*/ = _V20/*_stringEncodeStr*/(_V46/*tempCodeStr*/);;
}};
;
_V45/*resStr*/ += _V46/*tempCodeStr*/;;
};
};
;
if(this["promiseName"]){
_V45/*resStr*/ += this["promiseName"]["getCodeStr"](_V17/*par*/);;
};
;
if(this["isComplete"]){
_V45/*resStr*/ += this["_getPostCodeStr"](_V17/*par*/);;
};
;
return _V45/*resStr*/;;
;
}),
"_getPostCodeStr": (function(_V17/*par*/){
var _V45/*resStr*/;
var _V27/*i*/;
;
_V17/*par*/ = this["_iterPar"](_V17/*par*/);;
_V45/*resStr*/ = "";
_V27/*i*/;
if(this["postCode"]){
_V45/*resStr*/ += this["postCode"]["getCodeStr"](_V17/*par*/);;
_V45/*resStr*/ += this["postCode"]["getPostCodeStr"](_V17/*par*/);;
};
;
if(this["codeAr"]){
for(_V27/*i*/ = this["codeAr"]["length"];_V27/*i*/;--_V27/*i*/){{_V45/*resStr*/ += this["codeAr"][(_V27/*i*/ - 1)]["getPostCodeStr"](_V17/*par*/);;
}};
;
};
;
if(this["preCode"]){
_V45/*resStr*/ += this["preCode"]["getPostCodeStr"](_V17/*par*/);;
};
;
return _V45/*resStr*/;;
;
}),
"getPostCodeStr": (function(_V17/*par*/){
;
if(this["replacement"]){
return this["replacement"]["getPostCodeStr"](_V17/*par*/);;
};
;
if(this["isComplete"]){
return "";;

}else{
return this["_getPostCodeStr"](_V17/*par*/);;
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
"setPromiseName": (function(_V39/*parCode*/, _V40/*parReference*/){
;
this["makePromising"]();;
this["promiseName"] = this["newResult"]({"codeStr": _V39/*parCode*/,
"reference": _V40/*parReference*/});;
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
"addPre": (function(_V39/*parCode*/, _V40/*parReference*/, _V17/*par*/){
;
if(! _V39/*parCode*/){
return;;
};
;
_V39/*parCode*/ = this["_prepCode"](_V39/*parCode*/, _V40/*parReference*/, _V17/*par*/);;
if(_V39/*parCode*/["promising"]){
this["makePromising"]();;
};
;
if(! this["preCode"]){
this["preCode"] = this["newResult"]();;
};
;
this["preCode"]["push"](_V39/*parCode*/, _V40/*parReference*/, _V17/*par*/);;
;
}),
"addPost": (function(_V39/*parCode*/, _V40/*parReference*/, _V17/*par*/){
;
if(! _V39/*parCode*/){
return;;
};
;
_V39/*parCode*/ = this["_prepCode"](_V39/*parCode*/, _V40/*parReference*/, _V17/*par*/);;
if(_V39/*parCode*/["promising"]){
this["makePromising"]();;
};
;
if(! this["postCode"]){
this["postCode"] = this["newResult"]();;
};
;
this["postCode"]["push"](_V39/*parCode*/, _V40/*parReference*/, _V17/*par*/);;
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
"newResult": (function(_V17/*par*/){
;
return new _V38/*_Result*/({"cp": this["_cp"],
"codeStr": (_V17/*par*/ ? _V17/*par*/["codeStr"] : _V42/*undefined*/)});;
;
}),
"getType": (function(_V17/*par*/){
;
return this["providesType"];;
;
}),
"setType": (function(_V17/*par*/){
;
if(this["providesType"]){
_V16/*errorFun*/({}, _V12/*errorMsg*/["multipleTypeProviding"]);;
};
;
if((typeof _V17/*par*/ == "string")){
this["providesType"] = this["_cp"]["getType"](_V17/*par*/, this["reference"]);;
return;;
};
;
this["providesType"] = _V17/*par*/;;
;
})};;
_V47/*CodeParser*/ = (function(_V17/*par*/){
var _V27/*i*/;
var _V230/*InheritedSystem*/;
;
this["toParse"] = _V17/*par*/["toParse"];;
this["dynamicCode"] = _V17/*par*/["dynamicCode"];;
this["hashStr"] = _V17/*par*/["hashStr"];;
if(_V17/*par*/["_locals"]){
for(_V27/*i*/ in _V17/*par*/["_locals"]){this[_V27/*i*/] = _V17/*par*/["_locals"][_V27/*i*/];;
};
;
};
;
if(_V17/*par*/["common"]){
this["common"] = _V17/*par*/["common"];;

}else{
this["common"] = {"givenNames": {},
"givenTypeNames": {},
"errors": []};;
};
;
this["errors"] = this["common"]["errors"];;
this["newPromiseStr"] = (function(){
;
this["common"]["usePromise"] = true;;
return _V19/*globalNewPromiseStr*/();;
;
});;
this["types"] = _V24/*mixin*/({}, _V17/*par*/["types"]);;
if(! this["types"]["var"]){
this["types"]["var"] = {"name": "var",
"type": _V13/*classSystem*/["getBuiltinType"]("var")};;
};
this["variables"] = _V24/*mixin*/({}, _V17/*par*/["variables"]);;
this["algorithmicCode"] = false;;
this["stack"] = (function(_V48/*parStr*/){
var _V49/*stackNameStr*/;
;
_V49/*stackNameStr*/ = ("_stack_" + _V48/*parStr*/);
if(! this[_V49/*stackNameStr*/]){
this[_V49/*stackNameStr*/] = [];;
};
;
this[_V49/*stackNameStr*/]["push"](this[_V48/*parStr*/]);;
;
});;
this["unstack"] = (function(_V48/*parStr*/){
var _V49/*stackNameStr*/;
;
_V49/*stackNameStr*/ = ("_stack_" + _V48/*parStr*/);
this[_V48/*parStr*/] = this[_V49/*stackNameStr*/]["pop"]();;
;
});;
this["_start"] = (function(){
var _V50/*tempRes*/;
;
if(this["toParse"]){
if((this["toParse"]["type"] == "Program")){
_V50/*tempRes*/ = this["makeCompleteStatement"](this["parseProgram"](this["toParse"]));
_V50/*tempRes*/["push"](";");;
this["result"] = this["makeCompleteStatement"](_V50/*tempRes*/);;

}else{
if(_V31/*checkIsFunction*/(this["toParse"])){
this["functionRes"] = this["parseFunction"](this["toParse"]);;
this["result"] = this["makeCompleteStatement"](this["functionRes"]);;
};
};
;
};
;
;
});;
this["makeCompleteStatement"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["setComplete"]();;
_V41/*res*/["push"](_V17/*par*/);;
return _V41/*res*/;;
;
});;
this["makeCompleteStatementDynamic"] = (function(_V17/*par*/){
var _V51/*r*/;
var _V52/*d*/;
;
_V51/*r*/ = this["newResult"]();
_V52/*d*/ = this["newResult"]();
_V52/*d*/["push"](this["makeCompleteStatement"](_V17/*par*/), _V42/*undefined*/, {"stringEncode": true});;
_V51/*r*/["push"]("\"");;
_V51/*r*/["push"](_V52/*d*/);;
_V51/*r*/["push"]("\"");;
return _V51/*r*/;;
;
});;
this["compareTypes"] = (function(_V53/*par1*/, _V54/*par2*/){
;
return (_V53/*par1*/ === _V54/*par2*/);;
;
});;
this["localVariables"] = {};;
this["addLocalVariable"] = (function(_V17/*par*/, _V55/*parParsed*/){
var _V44/*self*/;
var _V56/*name*/;
var _V57/*newType*/;
var _V58/*existing*/;
;
_V44/*self*/ = this;
_V56/*name*/ = _V30/*identifierName*/(_V17/*par*/["name"]);
if(this["localVariables"]["hasOwnProperty"](_V56/*name*/)){
if((! _V17/*par*/["type"] && ! _V17/*par*/["typename"])){

}else{
_V57/*newType*/ = (_V17/*par*/["type"] || this["getType"](_V17/*par*/["typename"], _V55/*parParsed*/));
_V58/*existing*/ = this["_getVariableType"](this["localVariables"][_V56/*name*/]);
_V13/*classSystem*/["definitionPromise"](_V57/*newType*/)["then"]((function(_V59/*type1*/){
;
_V13/*classSystem*/["definitionPromise"](_V58/*existing*/)["then"]((function(_V60/*type2*/){
;
if(! _V13/*classSystem*/["isSameType"](_V59/*type1*/, _V60/*type2*/)){
_V44/*self*/["addError"](_V55/*parParsed*/, _V12/*errorMsg*/["variableRedefinition"]);;
};
;
;
}));;
;
}));;
};
;

}else{
this["localVariables"][_V56/*name*/] = {"typename": _V17/*par*/["typename"],
"type": _V17/*par*/["type"],
"name": _V56/*name*/};;
if((! _V17/*par*/["typename"] && ! _V17/*par*/["type"])){
this["localVariables"][_V56/*name*/]["type"] = this["getProvisionalType"](_V55/*parParsed*/);;
this["localVariables"][_V56/*name*/]["needsResolving"] = true;;
};
;
};
;
if(_V17/*par*/["parameter"]){
this["localVariables"][_V56/*name*/]["parameter"] = _V17/*par*/["parameter"];;
};
;
if(_V17/*par*/["isFunction"]){
this["localVariables"][_V56/*name*/]["function"] = _V17/*par*/["function"];;
};
;
this["variables"][_V56/*name*/] = this["localVariables"][_V56/*name*/];;
;
});;
this["resolveFunctionType"] = (function(_V17/*par*/, _V61/*parsed*/){
var _V56/*name*/;
var _V62/*entry*/;
var _V25/*t*/;
;
_V56/*name*/ = _V30/*identifierName*/(_V17/*par*/["name"]);
_V62/*entry*/ = this["localVariables"][_V56/*name*/];
if(_V62/*entry*/["needsResolving"]){
_V62/*entry*/["needsResolving"] = false;;
_V25/*t*/ = _V62/*entry*/["type"];
_V62/*entry*/["type"] = _V17/*par*/["type"];;
this["resolveProvisional"](_V25/*t*/, _V17/*par*/["type"]);;

}else{
this["addLocalVariable"]({"name": _V17/*par*/["name"],
"type": _V17/*par*/["type"]}, _V61/*parsed*/);;
};
;
;
});;
this["getProvisionalType"] = (function(_V55/*parParsed*/){
var _V63/*type*/;
var _V43/*ps*/;
;
if(! _V55/*parParsed*/){
_V16/*errorFun*/({}, _V12/*errorMsg*/["internalParserInfoMissing"]);;
};
;
_V63/*type*/ = _V13/*classSystem*/["_createProvisionalClass"]();
_V43/*ps*/ = this["addError"](_V55/*parParsed*/, _V12/*errorMsg*/["unresolvedType"]);
_V13/*classSystem*/["definitionPromise"](_V63/*type*/)["then"]((function(){
;
_V43/*ps*/["resolve"]();;
;
}));;
return _V63/*type*/;;
;
});;
this["resolveProvisional"] = (function(_V64/*parType*/, _V65/*parResult*/){
;
return _V13/*classSystem*/["_resolveProvisional"](_V64/*parType*/, _V65/*parResult*/);;
;
});;
this["_getVariableType"] = (function(_V66/*parEntry*/){
;
if(_V66/*parEntry*/["type"]){
return _V66/*parEntry*/["type"];;
};
;
return this["getType"](_V66/*parEntry*/["typename"]);;
;
});;
this["getVariableType"] = (function(_V67/*parName*/, _V17/*par*/){
var _V56/*name*/;
var _V62/*entry*/;
;
_V56/*name*/ = _V30/*identifierName*/(_V67/*parName*/);
this["_addUsedVariable"](_V56/*name*/);;
if(this["variables"]["hasOwnProperty"](_V56/*name*/)){
_V62/*entry*/ = this["variables"][_V56/*name*/];
return this["_getVariableType"](_V62/*entry*/);;
};
;
return this["getType"]("var");;
;
});;
this["usedVariables"] = {};;
this["_addUsedVariable"] = (function(_V17/*par*/){
;
this["usedVariables"][_V30/*identifierName*/(_V17/*par*/)] = true;;
;
});;
this["_getUsedVairables"] = (function(){
;
return this["usedVariables"];;
;
});;
this["functionsAr"] = [];;
this["addFunction"] = (function(_V41/*res*/, _V56/*name*/, _V17/*par*/){
;
this["resolveFunctionType"]({"name": _V30/*identifierName*/(_V56/*name*/),
"type": _V41/*res*/["getType"]()}, _V17/*par*/);;
this["functionsAr"]["push"]({"res": _V41/*res*/,
"name": _V56/*name*/});;
;
});;
if(_V17/*par*/["uniquebasis"]){
this["uniquebasis"] = _V17/*par*/["uniquebasis"];;

}else{
this["uniquebasis"] = {"index": 1};;
};
;
this["_getErrors"] = (function(_V68/*parWarning*/){
var _V69/*a*/;
var _V27/*i*/;
;
_V69/*a*/ = [];
_V27/*i*/ = 0;
for(_V27/*i*/ = 0;(_V27/*i*/ < this["errors"]["length"]);++_V27/*i*/){{if(this["errors"][_V27/*i*/]["valid"]){
if((_V68/*parWarning*/ ? this["errors"][_V27/*i*/]["warning"] : ! this["errors"][_V27/*i*/]["warning"])){
_V69/*a*/["push"](this["errors"][_V27/*i*/]);;
};
;
};
;
}};
;
return _V69/*a*/;;
;
});;
this["getWarnings"] = (function(){
;
return this["_getErrors"](true);;
;
});;
this["getErrors"] = (function(){
;
return this["_getErrors"](false);;
;
});;
this["getWarningFun"] = (function(_V17/*par*/){
var _V44/*self*/;
;
_V44/*self*/ = this;
return (function(_V18/*err*/){
;
_V44/*self*/["warning"](_V17/*par*/, _V18/*err*/);;
;
});;
;
});;
this["warning"] = (function(_V17/*par*/, _V18/*err*/){
;
if(! _V17/*par*/["line"]){
_V16/*errorFun*/({}, _V12/*errorMsg*/["internalParserInfoMissing"]);;
};
;
this["addWarning"](_V17/*par*/, _V18/*err*/);;
;
});;
this["error"] = (function(_V17/*par*/, _V18/*err*/){
;
this["_addError"](_V17/*par*/, _V18/*err*/);;
_V16/*errorFun*/(_V17/*par*/, _V18/*err*/);;
;
});;
this["addError"] = (function(_V17/*par*/, _V18/*err*/){
;
return this["_addError"](_V17/*par*/, _V18/*err*/);;
;
});;
this["addWarning"] = (function(_V17/*par*/, _V18/*err*/){
;
return this["_addError"](_V17/*par*/, _V18/*err*/, true);;
;
});;
this["_addError"] = (function(_V17/*par*/, _V18/*err*/, _V70/*warning*/){
var _V62/*entry*/;
var _V43/*ps*/;
;
_V62/*entry*/ = {"par": _V17/*par*/,
"line": _V17/*par*/["line"],
"column": _V17/*par*/["column"],
"msg": ((_V18/*err*/["id"] + ": ") + _V18/*err*/["msg"]),
"valid": true,
"warning": _V70/*warning*/};
this["errors"]["push"](_V62/*entry*/);;
_V43/*ps*/ = new _V10/*Promise*/();
_V43/*ps*/["then"]((function(){
;
_V62/*entry*/["valid"] = false;;
;
}));;
return _V43/*ps*/;;
;
});;
this["runtimeError"] = (function(_V17/*par*/, _V54/*par2*/){
var _V43/*ps*/;
var _V41/*res*/;
;
_V43/*ps*/ = this["addWarning"](_V17/*par*/, _V54/*par2*/);
_V41/*res*/ = this["runtimeErrorNoWarning"](_V54/*par2*/);
_V41/*res*/["setPromise"](_V43/*ps*/);;
return _V41/*res*/;;
;
});;
this["runtimeErrorNoWarning"] = (function(_V54/*par2*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"]((((("(function(){ throw { id:" + _V54/*par2*/["id"]) + ", msg: ") + _V23/*stringEncodeStr*/(_V54/*par2*/["msg"])) + " } })()"));;
return _V41/*res*/;;
;
});;
this["getUniqueName"] = (function(_V56/*name*/){
var _V71/*retStr*/;
;
_V71/*retStr*/ = ("_V" + this["uniquebasis"]["index"]++);
if(_V56/*name*/){
_V71/*retStr*/ += (("/*" + _V56/*name*/) + "*/");;
};
;
return _V71/*retStr*/;;
;
});;
this["getUniqueTypeMacro"] = (function(_V56/*name*/){
var _V72/*uniqueStr*/;
var _V41/*res*/;
;
_V72/*uniqueStr*/ = this["getUniqueName"]();
_V41/*res*/ = (((("/*\n'''\"\"\" " + _V72/*uniqueStr*/) + " ") + (_V56/*name*/ || "")) + " start */");
_V41/*res*/ += this["runtimeErrorNoWarning"](_V12/*errorMsg*/["failedToDetermineType"]);;
_V41/*res*/ += (((("/* " + _V72/*uniqueStr*/) + " ") + (_V56/*name*/ || "")) + " end */");;
return _V41/*res*/;;
;
});;
this["getVariableName"] = (function(_V56/*name*/){
var _V73/*n*/;
;
_V73/*n*/ = _V30/*identifierName*/(_V56/*name*/);
if(! this["common"]["givenNames"][_V73/*n*/]){
this["common"]["givenNames"][_V73/*n*/] = (((this["getUniqueName"]() + "/*") + _V73/*n*/) + "*/");;
};
;
return this["common"]["givenNames"][_V73/*n*/];;
;
});;
this["renderType"] = (function(_V64/*parType*/, _V55/*parParsed*/){
var _V41/*res*/;
var _V44/*self*/;
var _V74/*typeExpression*/;
var _V75/*renderTypeName*/;
var _V78/*errPs*/;
var _V56/*name*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["setType"]("var");;
_V44/*self*/ = this;
_V74/*typeExpression*/;
_V75/*renderTypeName*/ = (function(_V76/*parType1*/, _V77/*parType2*/){
var _V27/*i*/;
var _V56/*name*/;
;
_V27/*i*/;
for(_V27/*i*/ in _V44/*self*/["types"]){if(((_V44/*self*/["types"][_V27/*i*/]["type"] === _V76/*parType1*/) || (_V44/*self*/["types"][_V27/*i*/]["type"] === _V77/*parType2*/))){
if(_V44/*self*/["isVar"](_V44/*self*/["types"][_V27/*i*/]["type"])){
_V44/*self*/["common"]["useClassSystem"] = true;;
return "classSystem.getBuiltinType(\"var\")";;
};
;
_V56/*name*/ = _V27/*i*/;
if(! _V44/*self*/["common"]["givenTypeNames"][_V56/*name*/]){
_V44/*self*/["common"]["givenTypeNames"][_V56/*name*/] = (((_V44/*self*/["getUniqueName"]() + "/*type:") + _V56/*name*/) + "*/");;
};
;
return _V44/*self*/["common"]["givenTypeNames"][_V56/*name*/];;
};
;
};
;
;
});
if((typeof _V64/*parType*/ == "function")){
_V78/*errPs*/ = this["addError"](_V55/*parParsed*/, _V12/*errorMsg*/["internalMissingType"]);
_V13/*classSystem*/["readyPromise"](_V64/*parType*/)["then"]((function(_V79/*resolvedType*/){
var _V80/*replace*/;
var _V74/*typeExpression*/;
var _V27/*i*/;
var _V81/*l*/;
;
_V80/*replace*/ = _V44/*self*/["newResult"]();
_V74/*typeExpression*/ = _V75/*renderTypeName*/(_V64/*parType*/, _V79/*resolvedType*/);
if(_V74/*typeExpression*/){
_V80/*replace*/["push"](_V74/*typeExpression*/);;
_V41/*res*/["push"](_V80/*replace*/);;
_V78/*errPs*/["resolve"]();;
return;;
};
;
if(_V13/*classSystem*/["isFunctionType"](_V79/*resolvedType*/)){
_V27/*i*/;
_V44/*self*/["common"]["useClassSystem"] = true;;
_V80/*replace*/["push"]("(classSystem.createFunctionType({ \"return\": ");;
_V80/*replace*/["push"](_V44/*self*/["renderType"](_V44/*self*/["getClassFromTemporaryTracked"](_V44/*self*/["getFunctionReturnType"](_V79/*resolvedType*/, _V55/*parParsed*/), _V55/*parParsed*/), _V55/*parParsed*/));;
_V80/*replace*/["push"](", arguments: [");;
_V81/*l*/ = _V44/*self*/["getFunctionArgumentCount"](_V79/*resolvedType*/);
for(_V27/*i*/ = 0;(_V27/*i*/ < _V81/*l*/);++_V27/*i*/){{if(_V27/*i*/){
_V80/*replace*/["push"](", ");;
};
;
_V80/*replace*/["push"](_V44/*self*/["renderType"](_V44/*self*/["getClassFromTemporaryTracked"](_V44/*self*/["getFunctionArgumentType"](_V79/*resolvedType*/, _V27/*i*/, _V55/*parParsed*/), _V55/*parParsed*/), _V55/*parParsed*/));;
}};
;
_V80/*replace*/["push"]("]}))");;
_V41/*res*/["push"](_V80/*replace*/);;
_V78/*errPs*/["resolve"]();;
return;;
};
;
;
}));;
return _V41/*res*/;;

}else{
if(_V64/*parType*/["isDynamic"]){
_V74/*typeExpression*/ = _V75/*renderTypeName*/(_V64/*parType*/, _V64/*parType*/);;
if(_V74/*typeExpression*/){
_V41/*res*/["push"](_V74/*typeExpression*/);;

}else{
_V41/*res*/["push"](this["addError"](_V55/*parParsed*/, _V12/*errorMsg*/["internalMissingType"]));;
};
;

}else{
_V56/*name*/ = _V30/*identifierName*/(_V64/*parType*/);
_V64/*parType*/ = this["getType"](_V56/*name*/, _V55/*parParsed*/);;
_V74/*typeExpression*/ = _V75/*renderTypeName*/(_V64/*parType*/, _V64/*parType*/);;
if(_V74/*typeExpression*/){
_V41/*res*/["push"](_V74/*typeExpression*/);;

}else{
_V41/*res*/["push"](this["addError"](_V55/*parParsed*/, _V12/*errorMsg*/["internalMissingType"]));;
};
;
};
};
;
return _V41/*res*/;;
;
});;
this["newInstance"] = (function(_V82/*element*/, _V83/*extras*/){
var _V84/*param*/;
var _V27/*i*/;
var _V85/*instance*/;
;
_V84/*param*/ = {"toParse": _V82/*element*/,
"uniquebasis": this["uniquebasis"],
"common": this["common"],
"hashStr": this["hashStr"],
"types": this["types"],
"variables": this["variables"],
"_locals": {"inheritedSystem": this["inheritedSystem"],
"isClassObject": this["isClassObject"]}};
if(_V83/*extras*/){
_V27/*i*/;
for(_V27/*i*/ in _V83/*extras*/){_V84/*param*/[_V27/*i*/] = _V83/*extras*/[_V27/*i*/];;
};
;
};
;
_V85/*instance*/ = new _V47/*CodeParser*/(_V84/*param*/);
return _V85/*instance*/;;
;
});;
this["getFunctionRes"] = (function(){
;
return this["functionRes"];;
;
});;
this["getFunctionName"] = (function(){
;
return this["functionName"];;
;
});;
this["getResult"] = (function(){
;
return this["result"];;
;
});;
this["result"] = "";;
this["newResult"] = (function(_V17/*par*/){
var _V51/*r*/;
;
_V51/*r*/ = new _V38/*_Result*/({"cp": this});
if(_V17/*par*/){
_V51/*r*/["push"](_V17/*par*/);;
};
;
return _V51/*r*/;;
;
});;
this["parseProgram"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V86/*extraRes*/;
var _V87/*functionStatement*/;
var _V56/*name*/;
;
_V32/*findPromises*/(_V17/*par*/);;
_V41/*res*/ = this["newResult"]();
_V86/*extraRes*/ = this["newResult"]();
_V86/*extraRes*/["push"]("\"use strict\";\n");;
_V34/*addExtraToPar*/(_V17/*par*/, "addFront", _V86/*extraRes*/);;
if(_V33/*checkPromising*/(_V17/*par*/)){
this["programPromiseStr"] = this["getUniqueName"]();;
};
;
this["resultNameStr"] = this["getUniqueName"]();;
_V87/*functionStatement*/ = this["_parseFunction"](_V17/*par*/, {"promiseName": this["programPromiseStr"],
"noUntrack": true});
_V56/*name*/;
for(_V56/*name*/ in this["usedVariables"]){if((this["usedVariables"][_V56/*name*/] === true)){
if((_V56/*name*/ == "Promise")){
this["common"]["usePromise"] = true;;
};
;
if((_V56/*name*/ == "Callback")){
this["common"]["useCallback"] = true;;
};
;
_V41/*res*/["push"]((("var " + this["getVariableName"](_V56/*name*/)) + ";"));;
_V41/*res*/["push"]("try{");;
_V41/*res*/["push"](this["getVariableName"](_V56/*name*/));;
_V41/*res*/["push"](" = ");;
_V41/*res*/["push"](_V56/*name*/);;
_V41/*res*/["push"](";}catch(e){};\n");;
};
;
};
;
_V41/*res*/["push"]((("var " + this["resultNameStr"]) + " = ("));;
_V41/*res*/["push"](this["makeCompleteStatement"](_V87/*functionStatement*/));;
_V41/*res*/["push"](")();\n");;
return _V41/*res*/;;
;
});;
this["parseFunction"] = (function(_V17/*par*/){
var _V41/*res*/;
;
this["stack"]("isFunction");;
this["isFunction"] = true;;
_V41/*res*/ = this["_parseFunction"](_V17/*par*/);
this["unstack"]("isFunction");;
return _V41/*res*/;;
;
});;
this["getTemplateProperty"] = (function(_V88/*parTemplate*/, _V89/*parProperty*/, _V90/*mandatoryType*/){
var _V27/*i*/;
var _V29/*p*/;
;
_V27/*i*/ = 0;
for(_V27/*i*/;(_V27/*i*/ < _V88/*parTemplate*/["properties"]["length"]);++_V27/*i*/){{_V29/*p*/ = _V88/*parTemplate*/["properties"][_V27/*i*/];
if(((_V29/*p*/["kind"] == "init") && (_V30/*identifierName*/(_V29/*p*/["key"]) == _V89/*parProperty*/))){
if(_V90/*mandatoryType*/){
if((_V29/*p*/["value"]["type"] != _V90/*mandatoryType*/)){
this["error"](_V29/*p*/["value"], _V12/*errorMsg*/["templateSyntaxError"]);;
};
;
};
;
return _V29/*p*/["value"];;
};
;
}};
;
;
});;
this["createExtraDynamicType"] = (function(_V64/*parType*/, _V17/*par*/, _V55/*parParsed*/){
var _V56/*name*/;
var _V62/*entry*/;
var _V41/*res*/;
var _V57/*newType*/;
;
_V56/*name*/;
if(_V17/*par*/["property"]){
_V56/*name*/ = ((this["getTypeName"](_V64/*parType*/, _V55/*parParsed*/) + "::property::") + _V17/*par*/["property"]);;

}else{
if(_V17/*par*/["temporaryTracked"]){
_V56/*name*/ = (this["getTypeName"](_V64/*parType*/, _V55/*parParsed*/) + "::temporaryTracked");;

}else{
if(_V17/*par*/["temporaryTrackedResolved"]){
_V56/*name*/ = (this["getTypeName"](_V64/*parType*/, _V55/*parParsed*/) + "::temporaryTrackedResolved");;

}else{
this["error"](_V12/*errorMsg*/["internalMissingTypeProperty"]);;
};
};
};
;
if(! _V64/*parType*/["extraTypes"]){
_V64/*parType*/["extraTypes"] = [];;
};
;
if(! _V64/*parType*/["extraTypeMap"]){
_V64/*parType*/["extraTypeMap"] = {};;
};
;
if(_V64/*parType*/["extraTypeMap"]["hasOwnProperty"](_V56/*name*/)){
return _V64/*parType*/["extraTypeMap"][_V56/*name*/];;
};
;
_V62/*entry*/ = {"res": this["newResult"]()};
_V64/*parType*/["extraTypes"]["push"](_V62/*entry*/);;
_V41/*res*/ = _V62/*entry*/["res"];
this["addType"]({"name": _V56/*name*/,
"dynamic": true}, _V55/*parParsed*/);;
_V41/*res*/["push"]("var /*extratyperender*/ ");;
_V41/*res*/["push"](this["renderType"](_V56/*name*/));;
_V41/*res*/["push"](" = ");;
this["common"]["useClassSystem"] = true;;
if(_V17/*par*/["property"]){
if((_V17/*par*/["property"] == "constructor")){
_V41/*res*/["push"]("classSystem.getConstructorType({\"type\":");;

}else{
_V41/*res*/["push"]("classSystem.getPropertyType({\"type\":");;
};
;
_V41/*res*/["push"](this["renderType"](_V64/*parType*/));;
_V41/*res*/["push"]((", property: " + _V23/*stringEncodeStr*/(_V17/*par*/["property"])));;
_V41/*res*/["push"]("});\n");;

}else{
if(_V17/*par*/["temporaryTracked"]){
_V41/*res*/["push"]("classSystem._createTemporaryTrackedClass(");;
_V41/*res*/["push"](this["renderType"](_V64/*parType*/));;
_V41/*res*/["push"](");\n");;

}else{
if(_V17/*par*/["temporaryTrackedResolved"]){
_V41/*res*/["push"]("classSystem.getClassFromTemporaryTracked(");;
_V41/*res*/["push"](this["renderType"](_V64/*parType*/));;
_V41/*res*/["push"](");\n");;
};
};
};
;
_V57/*newType*/ = this["getType"](_V56/*name*/, _V55/*parParsed*/);
_V62/*entry*/["type"] = _V57/*newType*/;;
_V64/*parType*/["extraTypeMap"][_V56/*name*/] = _V57/*newType*/;;
return _V57/*newType*/;;
;
});;
this["getFunctionType"] = (function(_V17/*par*/){
var _V91/*isTyped*/;
var _V92/*functionTypeParam*/;
var _V81/*l*/;
var _V93/*tempTypename*/;
;
_V91/*isTyped*/ = false;
_V92/*functionTypeParam*/ = {"return": this["getType"]("var"),
"arguments": []};
if(_V17/*par*/["returnTypename"]){
_V91/*isTyped*/ = true;;
_V92/*functionTypeParam*/["return"] = this["getType"](_V17/*par*/["returnTypename"]);;
};
;
if((_V17/*par*/["params"] && _V17/*par*/["params"]["length"])){
_V27/*i*/ = 0;;
_V81/*l*/ = _V17/*par*/["params"]["length"];
for(_V27/*i*/;(_V27/*i*/ < _V81/*l*/);++_V27/*i*/){{_V93/*tempTypename*/ = _V30/*identifierName*/((_V17/*par*/["params"][_V27/*i*/]["typename"] || "var"));
_V92/*functionTypeParam*/["arguments"]["push"](this["getType"](_V93/*tempTypename*/, _V17/*par*/));;
if((_V93/*tempTypename*/ != "var")){
_V91/*isTyped*/ = true;;
};
;
}};
;
};
;
if(_V91/*isTyped*/){
return this["createFunctionType"](_V92/*functionTypeParam*/);;
};
;
return this["getType"]("var");;
;
});;
this["createFunctionType"] = (function(_V17/*par*/){
var _V94/*isDynamic*/;
var _V27/*i*/;
;
_V94/*isDynamic*/ = false;
if(_V17/*par*/["return"]["isDynamic"]){
_V94/*isDynamic*/ = true;;
};
;
_V27/*i*/ = 0;
for(_V27/*i*/ = 0;(_V27/*i*/ < _V17/*par*/["arguments"]["length"]);++_V27/*i*/){{if(_V17/*par*/["arguments"][_V27/*i*/]["isDynamic"]){
_V94/*isDynamic*/ = true;;
};
;
}};
;
if(_V94/*isDynamic*/){
debugger;

}else{
return _V13/*classSystem*/["createFunctionType"](_V17/*par*/);;
};
;
;
});;
this["addBeforeReturn"] = (function(_V95/*parRes*/, _V96/*parCondition*/){
var _V97/*condition*/;
var _V98/*conditional*/;
var _V99/*frontRes*/;
var _V100/*endRes*/;
;
_V97/*condition*/ = _V96/*parCondition*/;
if((_V96/*parCondition*/ === _V42/*undefined*/)){
_V97/*condition*/ = true;;
};
;
_V98/*conditional*/ = this["createConditionalCode"](_V95/*parRes*/);
_V98/*conditional*/["addCondition"](_V97/*condition*/);;
this["runBeforeReturnRes"]["push"](_V98/*conditional*/["res"]);;
if(! this["beforeReturnExists"]){
this["beforeReturnExists"] = true;;
_V99/*frontRes*/ = this["newResult"]();
_V100/*endRes*/ = this["newResult"]();
this["beforeReturnFrontConditional"] = this["createConditionalCode"](_V99/*frontRes*/);;
this["beforeReturnEndConditional"] = this["createConditionalCode"](_V100/*endRes*/);;
this["beforeReturnExistsPs"]["resolve"](this["runBeforeReturnRes"]);;
if(! this["promising"]){
_V99/*frontRes*/["push"]("try{");;
this["additionalCodeFrontRes"]["push"](this["beforeReturnFrontConditional"]["res"]);;
_V100/*endRes*/["push"]("}catch(e){");;
_V100/*endRes*/["push"](this["runBeforeReturnRes"]);;
_V100/*endRes*/["push"]("throw e};");;
this["additionalCodeEndRes"]["push"](this["beforeReturnEndConditional"]["res"]);;
};
;
};
;
this["beforeReturnFrontConditional"]["addCondition"](_V97/*condition*/);;
this["beforeReturnEndConditional"]["addCondition"](_V97/*condition*/);;
this["addBeforeReturnCondition"](_V97/*condition*/);;
;
});;
this["beforeReturnConditions"] = [];;
this["addBeforeReturnCondition"] = (function(_V96/*parCondition*/){
var _V27/*i*/;
;
this["beforeReturnConditions"]["push"](_V96/*parCondition*/);;
_V27/*i*/ = 0;
for(_V27/*i*/ = 0;(_V27/*i*/ < this["beforeReturnConditionFuns"]["length"]);++_V27/*i*/){{this["beforeReturnConditionFuns"][_V27/*i*/](_V96/*parCondition*/);;
}};
;
;
});;
this["beforeReturnConditionFuns"] = [];;
this["addBeforeReturnConditionFun"] = (function(_V101/*parFun*/){
var _V27/*i*/;
;
this["beforeReturnConditionFuns"]["push"](_V101/*parFun*/);;
_V27/*i*/ = 0;
for(_V27/*i*/ = 0;(_V27/*i*/ < this["beforeReturnConditions"]["length"]);++_V27/*i*/){{_V101/*parFun*/(this["beforeReturnConditions"][_V27/*i*/]);;
}};
;
;
});;
this["getReturnCode"] = (function(_V17/*par*/){
var _V44/*self*/;
var _V41/*res*/;
var _V102/*falseRes*/;
var _V103/*beforeReturnCode*/;
var _V104/*newRes*/;
var _V105/*valueRes*/;
var _V106/*trueRes*/;
var _V98/*conditional*/;
;
_V44/*self*/ = this;
_V41/*res*/ = this["newResult"]();
if(this["promising"]){
_V41/*res*/["push"]((this["returnPromise"] + ".resolve("));;
if(_V17/*par*/["value"]){
_V41/*res*/["push"](_V17/*par*/["value"]);;
};
;
_V41/*res*/["push"]("); return;");;

}else{
if((_V17/*par*/["return"] || _V17/*par*/["value"])){
_V41/*res*/["push"]("return");;
};
;
if(_V17/*par*/["value"]){
_V41/*res*/["push"](" ");;
_V41/*res*/["push"](_V17/*par*/["value"]);;
};
;
if((_V17/*par*/["return"] || _V17/*par*/["value"])){
_V41/*res*/["push"](";");;
};
;
};
;
_V102/*falseRes*/ = _V41/*res*/;
_V103/*beforeReturnCode*/ = this["runBeforeReturnRes"];
_V104/*newRes*/ = _V44/*self*/["newResult"]();
_V105/*valueRes*/ = _V44/*self*/["newResult"]();
if(_V17/*par*/["value"]){
_V105/*valueRes*/["push"]("(function(ret){ ");;
_V105/*valueRes*/["push"](_V103/*beforeReturnCode*/);;
_V105/*valueRes*/["push"]("return ret; })(");;
_V105/*valueRes*/["push"](_V17/*par*/["value"]);;
_V105/*valueRes*/["push"](")");;
};
;
if(_V44/*self*/["promising"]){
if(_V17/*par*/["value"]){
_V104/*newRes*/["push"]((_V44/*self*/["returnPromise"] + ".resolve("));;
_V104/*newRes*/["push"](_V105/*valueRes*/);;
_V104/*newRes*/["push"]("); return;");;

}else{
_V104/*newRes*/["push"](_V103/*beforeReturnCode*/);;
_V104/*newRes*/["push"]((_V44/*self*/["returnPromise"] + ".resolve("));;
_V104/*newRes*/["push"]("); return;");;
};
;

}else{
if(_V17/*par*/["value"]){
_V104/*newRes*/["push"]("return ");;
_V104/*newRes*/["push"](_V105/*valueRes*/);;
_V104/*newRes*/["push"](";");;

}else{
_V104/*newRes*/["push"](_V103/*beforeReturnCode*/);;
if(_V17/*par*/["return"]){
_V104/*newRes*/["push"]("return;");;
};
;
};
;
};
;
_V106/*trueRes*/ = _V104/*newRes*/;
_V98/*conditional*/ = this["createConditionalCode"](_V106/*trueRes*/, _V102/*falseRes*/);
this["addBeforeReturnConditionFun"]((function(_V107/*con*/){
;
_V98/*conditional*/["addCondition"](_V107/*con*/);;
;
}));;
return _V98/*conditional*/["res"];;
;
});;
this["_parseFunction"] = (function(_V17/*par*/, _V108/*parJsn*/){
var _V109/*parGivenPromiseNameStr*/;
var _V110/*noUntrack*/;
var _V111/*hasFrameInfo*/;
var _V112/*runRemote*/;
var _V113/*runExclusive*/;
var _V27/*i*/;
var _V114/*typename*/;
var _V55/*parParsed*/;
var _V115/*funClosure*/;
var _V44/*self*/;
var _V116/*hasName*/;
var _V117/*nameStr*/;
var _V118/*templateTypesAr*/;
var _V119/*templateTypes*/;
var _V120/*typeVarInit*/;
var _V29/*p*/;
var _V121/*extraTypesRes*/;
var _V41/*res*/;
var _V122/*funRes*/;
var _V81/*l*/;
var _V123/*classesRes*/;
var _V124/*addFront*/;
var _V125/*b*/;
var _V126/*extraPar*/;
var _V127/*block*/;
var _V128/*varname*/;
var _V63/*type*/;
var _V129/*completeFun*/;
var _V130/*returnTypePromiseCheck*/;
var _V131/*handleExtras*/;
var _V132/*dt*/;
var _V133/*thisFunType*/;
var _V134/*uniqueNameStr*/;
var _V135/*remoteClosure*/;
var _V136/*tempReturnPromise*/;
var _V137/*finalResult*/;
;
_V108/*parJsn*/ = (_V108/*parJsn*/ || {});;
_V109/*parGivenPromiseNameStr*/ = _V108/*parJsn*/["promiseName"];
_V110/*noUntrack*/ = _V108/*parJsn*/["noUntrack"];
_V111/*hasFrameInfo*/ = false;
_V112/*runRemote*/ = false;
_V113/*runExclusive*/ = false;
_V27/*i*/ = 0;
_V114/*typename*/;
_V55/*parParsed*/ = _V17/*par*/;
_V115/*funClosure*/;
_V44/*self*/ = this;
_V116/*hasName*/ = false;
_V117/*nameStr*/;
if(_V17/*par*/["id"]){
_V117/*nameStr*/ = _V30/*identifierName*/(_V17/*par*/["id"]);;
_V116/*hasName*/ = true;;
};
;
this["stack"]("inheritedAvailable");;
this["stack"]("thisType");;
if(this["isClassObject"]){
this["inheritedAvailable"] = true;;
this["thisType"] = (this["inheritedSystem"]["type"] || this["getType"]("var"));;

}else{
this["inheritedAvailable"] = false;;
this["thisType"] = this["getType"]("var");;
};
;
this["runBeforeReturnRes"] = this["newResult"]();;
this["beforeReturnExistsPs"] = new _V10/*Promise*/();;
this["additionalCodeFrontRes"] = this["newResult"]();;
this["additionalCodeEndRes"] = this["newResult"]();;
this["stack"]("isClassObject");;
this["isClassObject"] = false;;
if(_V17/*par*/["returnTypename"]){
this["_returnType"] = this["getType"](_V17/*par*/["returnTypename"], _V17/*par*/);;

}else{
this["_returnType"] = this["getType"]("var");;
};
;
if((_V17/*par*/["frame"] && _V17/*par*/["frame"]["name"])){
_V111/*hasFrameInfo*/ = true;;
if((_V17/*par*/["frame"]["type"] == "frame")){
_V112/*runRemote*/ = true;;
_V17/*par*/["promising"] = true;;
if(this["dynamicCode"]){
this["error"](_V17/*par*/, _V12/*errorMsg*/["functionFrameInDynamicCode"]);;
};
;

}else{
if((_V17/*par*/["frame"]["type"] == "exclusive")){
_V113/*runExclusive*/ = true;;
};
};
;
};
;
_V118/*templateTypesAr*/ = [];
if((_V17/*par*/["template"] && _V17/*par*/["template"]["properties"]["length"])){
_V119/*templateTypes*/ = this["getTemplateProperty"](_V17/*par*/["template"], "types", "ObjectExpression");
if(_V119/*templateTypes*/){
_V120/*typeVarInit*/ = this["newResult"]();
for(_V27/*i*/ = 0;(_V27/*i*/ < _V119/*templateTypes*/["properties"]["length"]);++_V27/*i*/){{_V29/*p*/ = _V119/*templateTypes*/["properties"][_V27/*i*/];
_V114/*typename*/ = _V30/*identifierName*/(_V29/*p*/["key"]);;
this["addType"]({"name": _V114/*typename*/,
"dynamic": true}, _V29/*p*/["value"]);;
if(! _V115/*funClosure*/){
_V115/*funClosure*/ = this["newResult"]();;
_V115/*funClosure*/["push"]("(function(){");;
};
;
_V120/*typeVarInit*/["push"]("var ");;
_V120/*typeVarInit*/["push"](this["renderType"](_V114/*typename*/));;
_V120/*typeVarInit*/["push"](" = ");;
_V120/*typeVarInit*/["push"](this["expectTypeVar"](this["parseExpression"](_V29/*p*/["value"])));;
_V120/*typeVarInit*/["push"](";\n");;
_V120/*typeVarInit*/["push"]((("var " + this["getVariableName"](_V114/*typename*/)) + " = "));;
_V120/*typeVarInit*/["push"](this["renderType"](_V114/*typename*/));;
_V120/*typeVarInit*/["push"]("\n;");;
_V120/*typeVarInit*/["push"]((("var " + this["getConstructorName"](_V114/*typename*/)) + " = undefined;\n"));;
_V120/*typeVarInit*/["push"](this["_typeReadyCode"]({"typename": _V114/*typename*/}));;
_V118/*templateTypesAr*/["push"](_V114/*typename*/);;
}};
;
_V115/*funClosure*/["push"](_V120/*typeVarInit*/);;
};
;
};
;
_V121/*extraTypesRes*/ = this["newResult"]();
if(_V115/*funClosure*/){
_V115/*funClosure*/["push"]("var communicator = {fun: undefined};\n");;
_V115/*funClosure*/["push"](_V121/*extraTypesRes*/);;
_V115/*funClosure*/["push"]("eval(\"communicator.fun = ");;
};
;
_V41/*res*/ = this["newResult"]();
_V122/*funRes*/ = this["newResult"]();
_V27/*i*/ = 0;;
_V122/*funRes*/["push"]("function");;
if(_V116/*hasName*/){
this["functionName"] = _V117/*nameStr*/;;
};
;
_V122/*funRes*/["push"]("(");;
if((_V17/*par*/["params"] && _V17/*par*/["params"]["length"])){
_V27/*i*/ = 0;;
_V81/*l*/ = _V17/*par*/["params"]["length"];
for(_V27/*i*/;(_V27/*i*/ < _V81/*l*/);++_V27/*i*/){{if(_V27/*i*/){
_V122/*funRes*/["push"](", ");;
};
;
_V122/*funRes*/["push"](this["getVariableName"](_V30/*identifierName*/(_V17/*par*/["params"][_V27/*i*/]["name"])));;
this["addLocalVariable"]({"name": _V17/*par*/["params"][_V27/*i*/]["name"],
"typename": (_V17/*par*/["params"][_V27/*i*/]["typename"] || "var"),
"parameter": true}, _V17/*par*/["params"][_V27/*i*/]);;
}};
;
};
;
_V122/*funRes*/["push"]("){\n");;
_V123/*classesRes*/ = this["findClasses"](_V17/*par*/["body"]);
this["findVariables"](_V17/*par*/["body"]);;
if(_V113/*runExclusive*/){
_V122/*funRes*/["push"]((("if (!promiseland.profileHas(" + _V23/*stringEncodeStr*/(_V17/*par*/["frame"]["name"]["value"])) + ")){\n"));;
if(_V17/*par*/["promising"]){
_V122/*funRes*/["push"]((("var p = " + this["newPromiseStr"]()) + ";\n"));;
_V122/*funRes*/["push"]("p.reject({id: 14, msg: \"function does not execute in this frame.\"});\n");;
_V122/*funRes*/["push"]("return p;\n");;

}else{
_V122/*funRes*/["push"]("return;\n");;
};
;
_V122/*funRes*/["push"]("};\n");;
};
;
_V124/*addFront*/ = _V37/*getExtraFromPar*/(_V17/*par*/, "addFront");
if(_V124/*addFront*/){
_V122/*funRes*/["push"](_V124/*addFront*/);;
};
;
if(_V17/*par*/["promising"]){
if(_V109/*parGivenPromiseNameStr*/){
this["returnPromise"] = _V109/*parGivenPromiseNameStr*/;;

}else{
this["returnPromise"] = this["getUniqueName"]();;
_V122/*funRes*/["push"](this["declareReturnPromiseCode"]({"type": this["_returnType"],
"name": this["returnPromise"],
"constructorName": this["getConstructorName"](this["getTypeName"](this["_returnType"], _V55/*parParsed*/)),
"parsed": _V55/*parParsed*/,
"errorFun": this["getWarningFun"](_V55/*parParsed*/)}));;
};
;
this["tryCatchFunctionStr"] = this["getUniqueName"]();;
_V122/*funRes*/["push"]((("var " + this["tryCatchFunctionStr"]) + " = function(code){ return function(res){ try{code(res);}catch(e){ "));;
_V122/*funRes*/["push"](this["runBeforeReturnRes"]);;
_V122/*funRes*/["push"]((this["returnPromise"] + ".reject(e); }; }; };\n"));;
this["catchFunctionStr"] = this["getUniqueName"]();;
_V122/*funRes*/["push"]((("var " + this["catchFunctionStr"]) + " = function(e){ "));;
_V122/*funRes*/["push"](this["runBeforeReturnRes"]);;
_V122/*funRes*/["push"]((this["returnPromise"] + ".reject(e); };\n"));;
this["promising"] = true;;
_V41/*res*/["makePromising"]();;
};
;
_V125/*b*/ = _V17/*par*/["body"];
_V126/*extraPar*/ = {};
_V125/*b*/["brackets"] = false;;
_V126/*extraPar*/["preCode"] = this["additionalCodeFrontRes"];;
_V126/*extraPar*/["postCode"] = this["newResult"]();;
_V126/*extraPar*/["postCode"]["push"](this["getReturnCode"]({}));;
_V126/*extraPar*/["postCode"]["push"](this["additionalCodeEndRes"]);;
_V127/*block*/ = this["blockCreator"](_V125/*b*/, _V126/*extraPar*/);
for(_V27/*i*/ in this["localVariables"]){_V128/*varname*/ = _V27/*i*/;
_V63/*type*/ = this["getVariableType"](_V128/*varname*/);
if(this["localVariables"][_V27/*i*/]["parameter"]){
_V122/*funRes*/["push"](this["getProcessParameterCode"]({"name": this["getVariableName"](_V128/*varname*/),
"type": _V63/*type*/,
"errorFun": this["getWarningFun"](_V17/*par*/),
"parsed": _V17/*par*/}));;

}else{
_V122/*funRes*/["push"](this["getDeclareVariableCode"]({"name": this["getVariableName"](_V128/*varname*/),
"type": _V63/*type*/,
"errorFun": this["getWarningFun"](_V17/*par*/),
"parsed": _V17/*par*/}));;
};
;
if(! _V110/*noUntrack*/){
this["addBeforeReturn"](this["getDestroyVariableCode"]({"name": this["getVariableName"](_V128/*varname*/),
"type": _V63/*type*/,
"errorFun": this["getWarningFun"](_V17/*par*/),
"parsed": _V17/*par*/}), this["isTrackedClassConRes"](_V63/*type*/));;
};
;
this["usedVariables"][_V128/*varname*/] = false;;
};
;
if(this["usedVariables"]["arguments"]){
_V122/*funRes*/["push"]((("var " + this["getVariableName"]("arguments")) + " = arguments;\n"));;
this["usedVariables"]["arguments"] = false;;
};
;
_V122/*funRes*/["push"](_V123/*classesRes*/);;
for(_V27/*i*/ = 0;(_V27/*i*/ < this["functionsAr"]["length"]);++_V27/*i*/){{_V122/*funRes*/["push"]((("var " + this["getVariableName"](this["functionsAr"][_V27/*i*/]["name"])) + " = "));;
_V122/*funRes*/["push"](this["functionsAr"][_V27/*i*/]["res"]);;
_V122/*funRes*/["push"](";\n");;
}};
;
if(_V17/*par*/["promising"]){
if(this["usingThis"]){
_V122/*funRes*/["push"]((("var " + this["thisExpression"]) + " = this;\n"));;
};
;
_V122/*funRes*/["push"]((this["tryCatchFunctionStr"] + "(function(){"));;
};
;
_V122/*funRes*/["push"](_V127/*block*/);;
if(_V17/*par*/["promising"]){
_V122/*funRes*/["addPost"]("})();\n");;
_V122/*funRes*/["addPost"](this["returnReturnPromiseCode"]({"type": this["_returnType"],
"name": this["returnPromise"],
"parsed": _V55/*parParsed*/,
"errorFun": this["getWarningFun"](_V55/*parParsed*/)}));;
_V122/*funRes*/["addPost"]("}");;

}else{
_V122/*funRes*/["push"]("}");;
};
;
_V129/*completeFun*/ = this["makeCompleteStatement"](_V122/*funRes*/);
if((this["promising"] && _V17/*par*/["returnTypename"])){
_V130/*returnTypePromiseCheck*/ = this["newResult"]();
_V130/*returnTypePromiseCheck*/["push"]("(function(t){");;
_V130/*returnTypePromiseCheck*/["push"](this["promisingReturnTypeCheck"]({"type": this["_returnType"],
"errorFun": this["getWarningFun"](_V55/*parParsed*/),
"parsed": _V55/*parParsed*/}));;
_V130/*returnTypePromiseCheck*/["push"]("return t;})(");;
_V130/*returnTypePromiseCheck*/["push"](_V129/*completeFun*/);;
_V130/*returnTypePromiseCheck*/["push"](")");;
_V129/*completeFun*/ = _V130/*returnTypePromiseCheck*/;;
};
;
if(_V115/*funClosure*/){
_V131/*handleExtras*/ = (function(_V132/*dt*/){
var _V27/*i*/;
;
if(_V132/*dt*/["extraTypes"]){
_V27/*i*/ = 0;
for(_V27/*i*/ = 0;(_V27/*i*/ < _V132/*dt*/["extraTypes"]["length"]);++_V27/*i*/){{_V121/*extraTypesRes*/["push"](_V132/*dt*/["extraTypes"][_V27/*i*/]["res"]);;
_V131/*handleExtras*/(_V132/*dt*/["extraTypes"][_V27/*i*/]["type"]);;
}};
;
};
;
;
});
for(_V27/*i*/ = 0;(_V27/*i*/ < _V118/*templateTypesAr*/["length"]);++_V27/*i*/){{_V132/*dt*/ = this["getType"](_V118/*templateTypesAr*/[_V27/*i*/], _V17/*par*/);
_V131/*handleExtras*/(_V132/*dt*/);;
}};
;
_V115/*funClosure*/["push"](_V129/*completeFun*/, _V17/*par*/, {"stringEncode": true});;
_V115/*funClosure*/["push"](";\"); return communicator.fun; })()");;
_V129/*completeFun*/ = this["makeCompleteStatement"](_V115/*funClosure*/);;
};
;
_V133/*thisFunType*/ = this["getFunctionType"](_V17/*par*/);
_V134/*uniqueNameStr*/;
if(_V112/*runRemote*/){
_V135/*remoteClosure*/ = this["newResult"]();
_V134/*uniqueNameStr*/ = this["getUniqueName"]();;
_V135/*remoteClosure*/["push"]("(function(f){\n");;
_V135/*remoteClosure*/["push"](("promiseland.registerRemote(" + _V23/*stringEncodeStr*/(_V17/*par*/["frame"]["name"]["value"])));;
_V135/*remoteClosure*/["push"](((((", " + _V23/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + _V23/*stringEncodeStr*/(_V134/*uniqueNameStr*/)) + ", f, "));;
_V135/*remoteClosure*/["push"](this["renderType"](_V133/*thisFunType*/, _V55/*parParsed*/));;
_V135/*remoteClosure*/["push"](");\n");;
_V135/*remoteClosure*/["push"]((("if (promiseland.profileHas(" + _V23/*stringEncodeStr*/(_V17/*par*/["frame"]["name"]["value"])) + ")){\n"));;
_V135/*remoteClosure*/["push"]("return f;\n");;
_V135/*remoteClosure*/["push"]("}else{\n");;
_V135/*remoteClosure*/["push"]("return function(){\n");;
_V136/*tempReturnPromise*/ = this["getUniqueName"]("temp returnpromise");
_V135/*remoteClosure*/["push"](this["declareReturnPromiseCode"]({"type": this["_returnType"],
"name": _V136/*tempReturnPromise*/,
"constructorName": this["getConstructorName"](this["getTypeName"](this["_returnType"], _V55/*parParsed*/)),
"parsed": _V55/*parParsed*/,
"errorFun": this["getWarningFun"](_V55/*parParsed*/)}));;
_V135/*remoteClosure*/["push"]((((("\npromiseland.remoteExec(" + _V23/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + _V23/*stringEncodeStr*/(_V134/*uniqueNameStr*/)) + ", arguments, "));;
_V135/*remoteClosure*/["push"](_V136/*tempReturnPromise*/);;
_V135/*remoteClosure*/["push"](");\n");;
_V135/*remoteClosure*/["push"](this["returnReturnPromiseCode"]({"type": this["_returnType"],
"name": _V136/*tempReturnPromise*/,
"parsed": _V55/*parParsed*/,
"errorFun": this["getWarningFun"](_V55/*parParsed*/)}));;
_V135/*remoteClosure*/["push"]("}\n");;
_V135/*remoteClosure*/["push"]("};\n");;
_V135/*remoteClosure*/["push"]("})(");;
_V135/*remoteClosure*/["push"](_V129/*completeFun*/);;
_V135/*remoteClosure*/["push"](")");;
_V41/*res*/["push"](_V135/*remoteClosure*/);;

}else{
_V41/*res*/["push"](_V129/*completeFun*/);;
};
;
_V41/*res*/["setType"](_V133/*thisFunType*/);;
this["unstack"]("isClassObject");;
this["unstack"]("inheritedAvailable");;
this["unstack"]("thisType");;
_V137/*finalResult*/ = this["newResult"]();
_V137/*finalResult*/["push"](this["makeCompleteStatement"](_V41/*res*/));;
_V137/*finalResult*/["setType"](_V133/*thisFunType*/);;
return _V137/*finalResult*/;;
;
});;
this["expThisExpression"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
if(! this["promising"]){
_V41/*res*/["push"]("this");;

}else{
if(! this["usingThis"]){
this["usingThis"] = true;;
this["thisExpression"] = this["getUniqueName"]("this");;
};
;
_V41/*res*/["push"](this["thisExpression"]);;
};
;
_V41/*res*/["setType"](this["thisType"]);;
return _V41/*res*/;;
;
});;
this["expThrowStatement"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"]("throw ");;
_V41/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V17/*par*/["argument"])));;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["identifyClass"] = (function(_V17/*par*/){
var _V51/*r*/;
var _V56/*name*/;
var _V138/*keywords*/;
var _V27/*i*/;
;
_V51/*r*/ = {};
_V56/*name*/;
if(_V17/*par*/["name"]){
_V56/*name*/ = _V30/*identifierName*/(_V17/*par*/["name"]);;
};
_V51/*r*/["hasName"] = (_V56/*name*/ && _V56/*name*/["length"]);;
_V138/*keywords*/ = _V17/*par*/["keywords"];
if((_V138/*keywords*/ && _V138/*keywords*/["length"])){
_V27/*i*/;
for(_V27/*i*/ = 0;(_V27/*i*/ < _V138/*keywords*/["length"]);++_V27/*i*/){{switch (_V138/*keywords*/[_V27/*i*/]["type"]){
case "type":
_V51/*r*/["isTyped"] = true;;
break;;
case "extends":
_V51/*r*/["extendsClause"] = _V138/*keywords*/[_V27/*i*/];;
break;;
case "sync":
_V51/*r*/["syncClause"] = _V138/*keywords*/[_V27/*i*/];;
break;;
case "track":
_V51/*r*/["trackClause"] = _V138/*keywords*/[_V27/*i*/];;
break;;
}
;
;
}};
;
};
;
return _V51/*r*/;;
;
});;
this["findClasses"] = (function(_V17/*par*/, _V41/*res*/){
var _V139/*ci*/;
var _V56/*name*/;
var _V86/*extraRes*/;
var _V27/*i*/;
;
if(! _V41/*res*/){
_V41/*res*/ = this["newResult"]();;
};
;
if((! _V17/*par*/ || (typeof _V17/*par*/ == "string"))){
return _V41/*res*/;;
};
;
if(_V31/*checkIsFunction*/(_V17/*par*/)){
return _V41/*res*/;;
};
;
if((_V17/*par*/["type"] == "Class")){
_V139/*ci*/ = this["identifyClass"](_V17/*par*/);
if(_V139/*ci*/["isTyped"]){
if(_V17/*par*/["body"]["literal"]){
if(_V139/*ci*/["hasName"]){
_V56/*name*/ = _V30/*identifierName*/(_V17/*par*/["name"]);
_V86/*extraRes*/ = this["newResult"]();
this["addType"]({"name": _V56/*name*/,
"extraRes": _V86/*extraRes*/}, _V17/*par*/);;
_V41/*res*/["push"]("var ");;
_V41/*res*/["push"](this["renderType"](_V56/*name*/));;
_V41/*res*/["push"](" = classSystem._createProvisionalClass();\n");;
this["common"]["useClassSystem"] = true;;
_V41/*res*/["push"]((this["getVariableName"](_V56/*name*/) + " = "));;
_V41/*res*/["push"](this["renderType"](_V56/*name*/));;
_V41/*res*/["push"](";\n");;
_V41/*res*/["push"]((("var " + this["getConstructorName"](_V56/*name*/)) + " = undefined;"));;
_V41/*res*/["push"](this["_typeReadyCode"]({"typename": _V56/*name*/}));;
_V41/*res*/["push"](_V86/*extraRes*/);;
};
;
};
;
};
;
return _V41/*res*/;;
};
;
_V27/*i*/;
for(_V27/*i*/ in _V17/*par*/){this["findClasses"](_V17/*par*/[_V27/*i*/], _V41/*res*/);;
};
;
return _V41/*res*/;;
;
});;
this["_typeReadyCode"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
this["common"]["useClassSystem"] = true;;
_V41/*res*/["push"]("classSystem.readyPromise(");;
_V41/*res*/["push"](this["renderType"](_V17/*par*/["typename"]));;
_V41/*res*/["push"](").then(function(parType){");;
_V41/*res*/["push"](this["renderType"](_V17/*par*/["typename"]));;
_V41/*res*/["push"](" = parType;");;
if(! _V17/*par*/["noConstructor"]){
_V41/*res*/["push"]((this["getConstructorName"](_V17/*par*/["typename"]) + " = classSystem.getTypeConstructor("));;
_V41/*res*/["push"](this["renderType"](_V17/*par*/["typename"]));;
_V41/*res*/["push"](");");;
};
;
_V41/*res*/["push"]("});");;
return _V41/*res*/;;
;
});;
this["findVariables"] = (function(_V17/*par*/){
var _V44/*self*/;
var _V139/*ci*/;
var _V27/*i*/;
;
_V44/*self*/ = this;
if((! _V17/*par*/ || (typeof _V17/*par*/ == "string"))){
return;;
};
;
if((_V17/*par*/["type"] == "VariableDeclaration")){
this["addLocalVariable"]({"name": _V30/*identifierName*/(_V17/*par*/["id"]),
"typename": _V30/*identifierName*/(_V17/*par*/["typename"])}, _V17/*par*/);;

}else{
if((_V17/*par*/["type"] == "Class")){
_V139/*ci*/ = _V44/*self*/["identifyClass"](_V17/*par*/);
if(_V139/*ci*/["hasName"]){
this["addLocalVariable"]({"name": _V30/*identifierName*/(_V17/*par*/["name"]),
"typename": "var"}, _V17/*par*/);;
};
;
return;;

}else{
if(_V31/*checkIsFunction*/(_V17/*par*/)){
if((_V17/*par*/["id"] && (_V17/*par*/["type"] != "MemberFunction"))){
this["addLocalVariable"]({"name": _V30/*identifierName*/(_V17/*par*/["id"]),
"isFunction": true}, _V17/*par*/);;
};
;
return;;
};
};
};
;
_V27/*i*/;
for(_V27/*i*/ in _V17/*par*/){if((_V27/*i*/ == "_extrainfo")){
continue;;
};
;
this["findVariables"](_V17/*par*/[_V27/*i*/]);;
};
;
;
});;
this["expClassStatement"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V140/*classRes*/;
var _V139/*ci*/;
var _V116/*hasName*/;
var _V56/*name*/;
var _V91/*isTyped*/;
var _V141/*extendsClause*/;
var _V142/*syncClause*/;
var _V143/*trackClause*/;
var _V144/*resultType*/;
var _V145/*literal*/;
var _V63/*type*/;
var _V146/*inheritedObjName*/;
var _V147/*lit*/;
var _V81/*l*/;
var _V148/*prop*/;
var _V50/*tempRes*/;
var _V149/*baseClasses*/;
var _V27/*i*/;
var _V150/*used*/;
var _V151/*u*/;
;
_V41/*res*/ = this["newResult"]();
_V140/*classRes*/ = this["newResult"]();
_V139/*ci*/ = this["identifyClass"](_V17/*par*/);
_V116/*hasName*/ = _V139/*ci*/["hasName"];
_V56/*name*/;
if(_V116/*hasName*/){
_V56/*name*/ = _V30/*identifierName*/(_V17/*par*/["name"]);;
};
;
_V91/*isTyped*/ = _V139/*ci*/["isTyped"];
_V141/*extendsClause*/ = _V17/*par*/["extendsClause"];
_V142/*syncClause*/ = _V139/*ci*/["syncClause"];
_V143/*trackClause*/ = _V139/*ci*/["trackClause"];
_V144/*resultType*/ = this["getType"]("var");
this["stack"]("inheritedSystem");;
this["inheritedSystem"] = this["newInherited"]();;
if(_V91/*isTyped*/){
this["common"]["useClassSystem"] = true;;
_V140/*classRes*/["push"]("classSystem.createClass(");;
if(_V17/*par*/["body"]["literal"]){
if(_V116/*hasName*/){
this["inheritedSystem"]["type"] = this["getType"](_V56/*name*/, _V17/*par*/);;
};
;
this["stack"]("isClassObject");;
this["isClassObject"] = true;;
_V145/*literal*/ = this["createClassLiteral"](_V17/*par*/["body"]["literal"], _V139/*ci*/, _V56/*name*/);
_V140/*classRes*/["push"](this["stringifyClassLiteral"](_V145/*literal*/));;
_V140/*classRes*/["push"](", ");;
_V140/*classRes*/["push"](this["createClassDefaults"](_V17/*par*/["body"]["literal"]));;
this["unstack"]("isClassObject");;
if(_V116/*hasName*/){
_V63/*type*/ = this["createType"]({"name": _V56/*name*/,
"literal": _V145/*literal*/,
"par": _V17/*par*/});
};
;

}else{
_V140/*classRes*/["push"]("{}, ");;
_V140/*classRes*/["push"](this["parseExpression"](_V17/*par*/["body"]["expression"]));;
};
;
_V140/*classRes*/["push"](")");;

}else{
_V146/*inheritedObjName*/ = this["getUniqueName"]("inherited");
_V140/*classRes*/["push"]("(function(){");;
if(_V17/*par*/["body"]["literal"]){
this["stack"]("preventreturn");;
this["preventreturn"] = true;;
_V147/*lit*/ = _V17/*par*/["body"]["literal"];
_V81/*l*/ = ((_V147/*lit*/["properties"] && _V147/*lit*/["properties"]["length"]) || 0);
for(_V27/*i*/;(_V27/*i*/ < _V81/*l*/);++_V27/*i*/){{_V148/*prop*/ = _V147/*lit*/["properties"][_V27/*i*/];
if((_V148/*prop*/["kind"] == "block")){
_V140/*classRes*/["push"](this["parseExpression"](_V148/*prop*/));;
};
;
}};
;
this["unstack"]("preventreturn");;
};
;
_V140/*classRes*/["push"]((("var " + _V146/*inheritedObjName*/) + " = {};\n"));;
_V50/*tempRes*/ = this["newResult"]();
_V50/*tempRes*/["push"]("var res = promiseland.createClass(");;
if(_V17/*par*/["body"]["literal"]){
_V50/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](_V17/*par*/["body"]["literal"])));;

}else{
_V50/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](_V17/*par*/["body"]["expression"])));;
};
;
_V50/*tempRes*/["push"](", [");;
_V149/*baseClasses*/ = ((_V141/*extendsClause*/ && _V141/*extendsClause*/["baseClasses"]) || []);
_V27/*i*/ = 0;
for(_V27/*i*/ = 0;(_V27/*i*/ < _V149/*baseClasses*/["length"]);++_V27/*i*/){{if(_V27/*i*/){
_V50/*tempRes*/["push"](", ");;
};
;
_V50/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](_V149/*baseClasses*/[_V27/*i*/])));;
}};
;
_V50/*tempRes*/["push"]("], ");;
_V50/*tempRes*/["push"](_V146/*inheritedObjName*/);;
_V50/*tempRes*/["push"](");");;
_V140/*classRes*/["push"](_V50/*tempRes*/);;
_V140/*classRes*/["push"]("\n");;
_V150/*used*/ = this["inheritedSystem"]["used"];
_V151/*u*/;
for(_V151/*u*/ in _V150/*used*/){_V140/*classRes*/["push"]((((((("var " + _V150/*used*/[_V151/*u*/]) + " = ") + _V146/*inheritedObjName*/) + "[") + _V23/*stringEncodeStr*/(_V151/*u*/)) + "];\n"));;
};
;
_V140/*classRes*/["push"]("return res; })()");;
};
;
if(_V116/*hasName*/){
if(_V91/*isTyped*/){
_V41/*res*/["addPre"](this["_resolveClassCode"]({"name": _V17/*par*/["name"],
"classRes": _V140/*classRes*/,
"parsed": _V17/*par*/}));;

}else{
_V41/*res*/["addPre"]((this["getVariableName"](_V17/*par*/["name"]) + " = "));;
_V41/*res*/["addPre"](_V140/*classRes*/);;
_V41/*res*/["addPre"](";");;
};
;
_V41/*res*/["push"](this["getVariableName"](_V17/*par*/["name"]));;

}else{
_V41/*res*/["push"](_V140/*classRes*/);;
};
;
_V41/*res*/["setType"](_V144/*resultType*/);;
this["unstack"]("inheritedSystem");;
return _V41/*res*/;;
;
});;
this["_resolveClassCode"] = (function(_V17/*par*/){
var _V61/*parsed*/;
var _V41/*res*/;
;
_V61/*parsed*/ = _V17/*par*/["parsed"];
_V41/*res*/ = this["newResult"]();
this["common"]["useClassSystem"] = true;;
_V41/*res*/["push"]("classSystem._resolveProvisional(", _V61/*parsed*/);;
_V41/*res*/["push"](this["renderType"](_V17/*par*/["name"], _V61/*parsed*/), _V61/*parsed*/);;
_V41/*res*/["push"](", ", _V61/*parsed*/);;
_V41/*res*/["push"](_V17/*par*/["classRes"], _V61/*parsed*/);;
_V41/*res*/["push"](");", _V61/*parsed*/);;
return _V41/*res*/;;
;
});;
this["createClassLiteral"] = (function(_V17/*par*/, _V139/*ci*/, _V67/*parName*/){
var _V152/*ret*/;
var _V27/*i*/;
var _V81/*l*/;
var _V148/*prop*/;
var _V153/*defaultValue*/;
var _V63/*type*/;
var _V56/*name*/;
;
_V152/*ret*/ = {"members": [],
"extends": [],
"hasFreePart": true,
"parsed": _V17/*par*/,
"track": (_V139/*ci*/["trackClause"] ? true : false),
"sync": _V139/*ci*/["syncClause"],
"name": _V67/*parName*/,
"hashStr": this["getModuleHashStr"]()};
_V27/*i*/ = 0;
_V81/*l*/ = ((_V17/*par*/["properties"] && _V17/*par*/["properties"]["length"]) || 0);
for(_V27/*i*/;(_V27/*i*/ < _V81/*l*/);++_V27/*i*/){{_V148/*prop*/ = _V17/*par*/["properties"][_V27/*i*/];
_V153/*defaultValue*/;
_V63/*type*/;
if((_V148/*prop*/["kind"] == "init")){
_V63/*type*/ = (_V148/*prop*/["typename"] ? this["getType"](_V148/*prop*/["typename"], _V17/*par*/) : _V42/*undefined*/);;
if(_V148/*prop*/["value"]){
if(_V63/*type*/){
_V153/*defaultValue*/ = this["parseAsType"](_V63/*type*/, _V148/*prop*/["value"]);;

}else{
_V153/*defaultValue*/ = this["parseExpression"](_V148/*prop*/["value"]);;
_V63/*type*/ = _V153/*defaultValue*/["getType"]();;
};
;
};
;
if(! _V63/*type*/){
_V63/*type*/ = this["getType"]("var");;
};
;
_V152/*ret*/["members"]["push"]({"name": _V30/*identifierName*/(_V148/*prop*/["key"]),
"type": _V63/*type*/,
"defaultValue": _V153/*defaultValue*/});;

}else{
if((_V148/*prop*/["kind"] == "function")){
_V56/*name*/ = _V30/*identifierName*/(_V148/*prop*/["id"]);
_V148/*prop*/["id"] = _V42/*undefined*/;;
_V153/*defaultValue*/ = this["parseExpression"](_V148/*prop*/["value"]);;
_V63/*type*/ = _V153/*defaultValue*/["getType"]();;
_V152/*ret*/["members"]["push"]({"name": _V56/*name*/,
"type": _V63/*type*/,
"defaultValue": _V153/*defaultValue*/});;

}else{
this["error"](_V148/*prop*/, _V12/*errorMsg*/["unknownPropertyAssignmentType"]);;
};
};
;
}};
;
return _V152/*ret*/;;
;
});;
this["stringifyClassLiteral"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V27/*i*/;
var _V81/*l*/;
var _V28/*m*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"]("{");;
_V41/*res*/["push"]("members: [");;
_V27/*i*/ = 0;
_V81/*l*/ = _V17/*par*/["members"]["length"];
for(_V27/*i*/;(_V27/*i*/ < _V81/*l*/);++_V27/*i*/){{_V28/*m*/ = _V17/*par*/["members"][_V27/*i*/];
if(_V27/*i*/){
_V41/*res*/["push"](",");;
};
;
_V41/*res*/["push"]("{");;
_V41/*res*/["push"](("\"name\":" + _V23/*stringEncodeStr*/(_V28/*m*/["name"])));;
_V41/*res*/["push"](",\"type\":");;
_V41/*res*/["push"](this["renderType"](_V28/*m*/["type"], _V17/*par*/["parsed"]));;
_V41/*res*/["push"]("}");;
}};
;
_V41/*res*/["push"]("]");;
_V41/*res*/["push"](", \"extends\": []");;
_V41/*res*/["push"](", \"hasFreePart\": true");;
if(_V17/*par*/["track"]){
_V41/*res*/["push"](", \"track\": true");;
};
;
if(_V17/*par*/["sync"]){
_V41/*res*/["push"](", \"sync\": ");;
_V41/*res*/["push"](_V154/*JSON*/["stringify"](_V17/*par*/["sync"]));;
_V41/*res*/["push"]((", \"hashStr\": " + _V23/*stringEncodeStr*/(_V17/*par*/["hashStr"])));;
_V41/*res*/["push"]((", \"name\": " + _V23/*stringEncodeStr*/(_V17/*par*/["name"])));;
};
;
_V41/*res*/["push"]("}");;
return _V41/*res*/;;
;
});;
this["createClassDefaults"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V27/*i*/;
var _V81/*l*/;
var _V155/*comma*/;
var _V148/*prop*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"]("{");;
_V27/*i*/ = 0;
_V81/*l*/ = ((_V17/*par*/["properties"] && _V17/*par*/["properties"]["length"]) || 0);
_V155/*comma*/;
for(_V27/*i*/;(_V27/*i*/ < _V81/*l*/);++_V27/*i*/){{_V148/*prop*/ = _V17/*par*/["properties"][_V27/*i*/];
if((_V148/*prop*/["kind"] == "init")){
if(_V155/*comma*/){
_V41/*res*/["push"](", ");;
};
;
_V41/*res*/["push"]((_V23/*stringEncodeStr*/(_V30/*identifierName*/(_V148/*prop*/["key"])) + ": "));;
if(_V148/*prop*/["value"]){
_V41/*res*/["push"](this["parseExpression"](_V148/*prop*/["value"]));;

}else{
_V41/*res*/["push"]("undefined");;
};
;
_V155/*comma*/ = true;;
};
;
}};
;
_V41/*res*/["push"]("}");;
return _V41/*res*/;;
;
});;
this["addType"] = (function(_V17/*par*/, _V55/*parParsed*/){
var _V56/*name*/;
var _V63/*type*/;
;
_V56/*name*/ = _V30/*identifierName*/(_V17/*par*/["name"]);
if(this["types"]["hasOwnProperty"][_V56/*name*/]){
this["error"](_V55/*parParsed*/, _V12/*errorMsg*/["typeExists"]);;
};
;
_V63/*type*/;
if(_V17/*par*/["dynamic"]){
_V63/*type*/ = {"isDynamic": true,
"extraRes": _V17/*par*/["extraRes"]};;

}else{
_V63/*type*/ = this["getProvisionalType"](_V55/*parParsed*/);;
};
;
this["types"][_V56/*name*/] = {"name": _V56/*name*/,
"type": _V63/*type*/,
"isDynamic": _V63/*type*/["isDynamic"],
"extraRes": _V17/*par*/["extraRes"]};;
;
});;
this["getTypeName"] = (function(_V64/*parType*/, _V55/*parParsed*/){
var _V56/*name*/;
;
_V56/*name*/;
for(_V56/*name*/ in this["types"]){if((this["types"][_V56/*name*/]["type"] === _V64/*parType*/)){
return this["types"][_V56/*name*/]["name"];;
};
;
};
;
this["error"](_V55/*parParsed*/, _V12/*errorMsg*/["internalTypeHasNoName"]);;
;
});;
this["createType"] = (function(_V17/*par*/){
var _V56/*name*/;
var _V62/*entry*/;
var _V63/*type*/;
var _V156/*provisional*/;
;
_V56/*name*/ = _V30/*identifierName*/(_V17/*par*/["name"]);
_V62/*entry*/ = this["_getTypeEntry"](_V17/*par*/["name"]);
if(_V62/*entry*/["type"]["isDynamic"]){
this["error"](_V17/*par*/["par"], _V12/*errorMsg*/["dynamicTypeCantBeDefined"]);;
};
;
if(_V62/*entry*/["isDefined"]){
this["error"](_V17/*par*/["par"], _V12/*errorMsg*/["typeRedefinition"]);;
};
;
_V63/*type*/ = _V13/*classSystem*/["createClass"](_V17/*par*/["literal"], {});
_V156/*provisional*/ = _V62/*entry*/["type"];
_V62/*entry*/["type"] = _V63/*type*/;;
try
{this["resolveProvisional"](_V156/*provisional*/, _V63/*type*/);;
}catch(e){this["error"](_V17/*par*/["par"], _V12/*errorMsg*/["typeRedefinition"]);;
};
;
_V62/*entry*/["isDefined"] = true;;
;
});;
this["_getTypeEntry"] = (function(_V67/*parName*/, _V55/*parParsed*/, _V17/*par*/){
var _V56/*name*/;
var _V157/*throwError*/;
var _V114/*typename*/;
var _V158/*typeEntry*/;
var _V86/*extraRes*/;
;
_V56/*name*/ = _V30/*identifierName*/(_V67/*parName*/);
_V157/*throwError*/ = true;
if((_V17/*par*/ && _V17/*par*/["dontThrow"])){
_V157/*throwError*/ = false;;
};
;
if(this["types"]["hasOwnProperty"](_V56/*name*/)){
return this["types"][_V56/*name*/];;
};
;
if((_V56/*name*/[(_V56/*name*/["length"] - 1)] == "*")){
_V114/*typename*/ = _V56/*name*/["substr"](0, (_V56/*name*/["length"] - 1));
_V158/*typeEntry*/ = this["_getTypeEntry"](_V114/*typename*/, _V55/*parParsed*/, _V17/*par*/);
if(_V158/*typeEntry*/){
_V86/*extraRes*/ = _V158/*typeEntry*/["extraRes"];
this["types"][_V56/*name*/] = {"name": _V56/*name*/,
"type": _V13/*classSystem*/["_createPromiseOfClass"](_V158/*typeEntry*/["type"]),
"isDynamic": false,
"extraRes": _V86/*extraRes*/};;
_V86/*extraRes*/["push"]("var ");;
_V86/*extraRes*/["push"](this["renderType"](_V56/*name*/));;
this["common"]["useClassSystem"] = true;;
_V86/*extraRes*/["push"](" = classSystem._createPromiseOfClass(");;
_V86/*extraRes*/["push"](this["renderType"](_V114/*typename*/));;
_V86/*extraRes*/["push"](");\nvar ");;
_V86/*extraRes*/["push"]((this["getVariableName"](_V56/*name*/) + " = "));;
_V86/*extraRes*/["push"](this["renderType"](_V56/*name*/));;
_V86/*extraRes*/["push"](";\n");;
_V86/*extraRes*/["push"]((("var " + this["getConstructorName"](_V56/*name*/)) + " = undefined;"));;
_V86/*extraRes*/["push"](this["_typeReadyCode"]({"typename": _V56/*name*/,
"noConstructor": false}));;
return this["types"][_V56/*name*/];;
};
;
};
;
if(! _V157/*throwError*/){
return;;
};
;
this["error"](_V55/*parParsed*/, _V12/*errorMsg*/["typeUndeclared"], {"name": _V56/*name*/});;
;
});;
this["getType"] = (function(_V67/*parName*/, _V55/*parParsed*/, _V17/*par*/){
var _V62/*entry*/;
;
_V62/*entry*/ = this["_getTypeEntry"](_V67/*parName*/, _V55/*parParsed*/, _V17/*par*/);
if(_V62/*entry*/){
return _V62/*entry*/["type"];;
};
;
;
});;
this["getReturnType"] = (function(){
;
if(this["_returnType"]){
return this["_returnType"];;
};
;
return this["getType"]("var");;
;
});;
this["localClassConstructors"] = {};;
this["getConstructorName"] = (function(_V67/*parName*/){
var _V56/*name*/;
var _V25/*t*/;
;
_V56/*name*/ = _V30/*identifierName*/(_V67/*parName*/);
if(this["types"]["hasOwnProperty"](_V56/*name*/)){
_V25/*t*/ = this["types"][_V56/*name*/];
if(! _V25/*t*/["constructorName"]){
_V25/*t*/["constructorName"] = this["getUniqueName"]((_V56/*name*/ + "-constructor"));;
if(! _V25/*t*/["isDynamic"]){
this["localClassConstructors"][_V56/*name*/] = _V25/*t*/["constructorName"];;
};
;
};
;
return _V25/*t*/["constructorName"];;
};
;
this["error"](_V67/*parName*/, _V12/*errorMsg*/["typeUndeclared"], {"name": _V56/*name*/});;
;
});;
this["expTryStatement"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V159/*catchPromise*/;
var _V160/*continuePromise*/;
var _V125/*b*/;
var _V126/*extraPar*/;
;
_V41/*res*/ = this["newResult"]();
_V159/*catchPromise*/;
_V160/*continuePromise*/;
if(_V33/*checkPromising*/(_V17/*par*/)){
this["stack"]("tryCatchFunctionStr");;
this["stack"]("catchFunctionStr");;
_V160/*continuePromise*/ = this["getUniqueName"]();;
_V41/*res*/["addPre"]((((("var " + _V160/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
_V159/*catchPromise*/ = this["getUniqueName"]();;
_V41/*res*/["addPre"]((((("var " + _V159/*catchPromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
this["tryCatchFunctionStr"] = (this["getUniqueName"]() + "/*try catch*/");;
_V41/*res*/["addPre"]((((("var " + this["tryCatchFunctionStr"]) + " = function(code){ return function(res){ try{code(res);}catch(e){ ") + _V159/*catchPromise*/) + ".resolve(e); }; }; };\n"));;
this["catchFunctionStr"] = this["getUniqueName"]();;
_V41/*res*/["addPre"]((((("var " + this["catchFunctionStr"]) + " = function(e){ ") + _V159/*catchPromise*/) + ".resolve(e); };\n"));;
_V41/*res*/["push"]((this["tryCatchFunctionStr"] + "(function()"));;

}else{
_V41/*res*/["push"]("try\n");;
};
;
_V125/*b*/ = _V17/*par*/["block"];
_V126/*extraPar*/ = {};
_V125/*b*/["brackets"] = true;;
if(_V33/*checkPromising*/(_V17/*par*/)){
_V126/*extraPar*/["postCode"] = this["newResult"]((_V160/*continuePromise*/ + ".resolve()"));;
};
;
_V41/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](_V125/*b*/, _V126/*extraPar*/)));;
if(_V33/*checkPromising*/(_V17/*par*/)){
this["unstack"]("tryCatchFunctionStr");;
this["unstack"]("catchFunctionStr");;
_V41/*res*/["push"](")();\n");;
_V41/*res*/["push"]((((_V159/*catchPromise*/ + ".then(") + this["tryCatchFunctionStr"]) + "(function("));;

}else{
_V41/*res*/["push"]("catch(");;
};
;
if(_V17/*par*/["handler"]["param"]){
_V41/*res*/["push"](_V30/*identifierName*/(_V17/*par*/["handler"]["param"]));;
};
;
_V41/*res*/["push"](")");;
_V125/*b*/ = _V17/*par*/["handler"]["body"];;
_V126/*extraPar*/ = {};;
_V125/*b*/["brackets"] = true;;
if(_V33/*checkPromising*/(_V17/*par*/)){
_V126/*extraPar*/["postCode"] = this["newResult"]((_V160/*continuePromise*/ + ".resolve();"));;
};
;
_V41/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](_V125/*b*/, _V126/*extraPar*/)));;
if(_V33/*checkPromising*/(_V17/*par*/)){
_V41/*res*/["push"]("));\n");;
_V41/*res*/["push"](_V160/*continuePromise*/);;
_V41/*res*/["push"](((".then(" + this["tryCatchFunctionStr"]) + "(function(){"));;
_V41/*res*/["addPost"]((("}), " + this["catchFunctionStr"]) + ")"));;
};
;
if(_V17/*par*/["finally"]){
_V41/*res*/["push"]("finally");;
_V125/*b*/ = _V17/*par*/["finally"];;
_V125/*b*/["brackers"] = true;;
_V41/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](_V125/*b*/)));;
};
;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["getModuleHashStr"] = (function(){
;
return (this["hashStr"] || "unknownhash");;
;
});;
this["makeStatement"] = (function(_V17/*par*/){
var _V161/*statementRes*/;
;
_V161/*statementRes*/ = this["newResult"]();
_V161/*statementRes*/["setStatement"]();;
_V161/*statementRes*/["push"](_V17/*par*/);;
_V161/*statementRes*/["push"](";\n");;
return _V161/*statementRes*/;;
;
});;
this["expBlockStatement"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V17/*par*/["brackets"] = true;;
_V41/*res*/["pushType"](this["blockCreator"](_V17/*par*/));;
return _V41/*res*/;;
;
});;
this["blockCreator"] = (function(_V17/*par*/, _V162/*parExtra*/){
var _V41/*res*/;
var _V163/*blockRes*/;
var _V164/*sAr*/;
var _V27/*i*/;
var _V81/*l*/;
;
if(! _V162/*parExtra*/){
_V162/*parExtra*/ = {};;
};
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["setType"](_V14/*statementType*/);;
if(_V17/*par*/["brackets"]){
_V41/*res*/["push"]("{");;
};
;
_V163/*blockRes*/ = this["newResult"]();
_V164/*sAr*/ = [];
if((_V17/*par*/ instanceof _V165/*Array*/)){
_V164/*sAr*/ = _V17/*par*/;;

}else{
if((_V17/*par*/["type"] == "BlockStatement")){
_V164/*sAr*/ = _V17/*par*/["body"];;

}else{
_V166/*console*/["log"]("here <------------------------");;
_V164/*sAr*/["push"](this["parseExpression"](_V17/*par*/));;
};
;
};
;
if(_V162/*parExtra*/["preCode"]){
_V163/*blockRes*/["push"](this["makeStatement"](_V162/*parExtra*/["preCode"]));;
};
;
_V27/*i*/ = 0;
_V81/*l*/ = _V164/*sAr*/["length"];
for(_V27/*i*/;(_V27/*i*/ < _V81/*l*/);++_V27/*i*/){{_V163/*blockRes*/["push"](this["makeStatement"](this["parseExpression"](_V164/*sAr*/[_V27/*i*/])));;
}};
;
if(_V162/*parExtra*/["postCode"]){
_V163/*blockRes*/["push"](this["makeStatement"](_V162/*parExtra*/["postCode"]));;
};
;
_V41/*res*/["push"](this["makeCompleteStatement"](_V163/*blockRes*/));;
if(_V17/*par*/["brackets"]){
_V41/*res*/["push"]("}");;
};
;
return _V41/*res*/;;
;
});;
this["parseExpression"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["_parseExpression"](_V17/*par*/);
if(! _V41/*res*/["getType"]()){
this["error"](_V17/*par*/, _V12/*errorMsg*/["internalMissingResultType"]);;
};
;
_V41/*res*/["setParsed"](_V17/*par*/);;
return _V41/*res*/;;
;
});;
this["_parseExpression"] = (function(_V167/*value*/){
var _V41/*res*/;
;
_V41/*res*/;
switch (_V167/*value*/["type"]){
case "ArrayExpression":
return this["expArrayExpression"](_V167/*value*/);;
case "AssignmentExpression":
return this["expAssignmentExpression"](_V167/*value*/);;
case "BinaryExpression":
return this["expBinaryExpression"](_V167/*value*/);;
case "BlockStatement":
return this["expBlockStatement"](_V167/*value*/);;
case "BreakStatement":
return this["expBreakStatement"](_V167/*value*/);;
case "CallExpression":
return this["expCallExpression"](_V167/*value*/);;
case "Class":
return this["expClassStatement"](_V167/*value*/);;
case "ClassObjectExpression":
return this["expClassObjectExpression"](_V167/*value*/);;
case "ConditionalExpression":
return this["conditionalExpression"](_V167/*value*/);;
case "ConnectExpression":
return this["connectExpression"](_V167/*value*/);;
case "ContinueStatement":
return this["expContinueStatement"](_V167/*value*/);;
case "DebuggerStatement":
return this["expDebuggerStatement"](_V167/*value*/);;
case "EmptyStatement":
_V41/*res*/ = this["newResult"]();;
_V41/*res*/["setType"]("var");;
return _V41/*res*/;;
case "ExpressionStatement":
return this["expExpressionStatement"](_V167/*value*/);;
case "ForInStatement":
return this["expForInStatement"](_V167/*value*/);;
case "ForStatement":
return this["expForStatement"](_V167/*value*/);;
case "FunctionExpression":
return this["expFunctionExpression"](_V167/*value*/);;
case "FunctionDeclaration":
return this["expFunctionDeclaration"](_V167/*value*/);;
case "MemberFunction":
return this["expMemberFunction"](_V167/*value*/);;
case "Identifier":
return this["expIdentifier"](_V167/*value*/);;
case "IfStatement":
return this["expIfStatement"](_V167/*value*/);;
case "InheritedExpression":
return this["expInheritedExpression"](_V167/*value*/);;
case "Literal":
return this["expLiteral"](_V167/*value*/);;
case "MemberExpression":
return this["expMemberExpression"](_V167/*value*/);;
case "NewExpression":
return this["expNewExpression"](_V167/*value*/);;
case "ObjectExpression":
return this["expObjectExpression"](_V167/*value*/);;
case "ReturnStatement":
return this["expReturnStatement"](_V167/*value*/);;
case "SwitchStatement":
return this["expSwitchStatement"](_V167/*value*/);;
case "ThisExpression":
return this["expThisExpression"](_V167/*value*/);;
case "ThrowStatement":
return this["expThrowStatement"](_V167/*value*/);;
case "TryStatement":
return this["expTryStatement"](_V167/*value*/);;
case "UnaryExpression":
if((_V167/*value*/["operator"] == "*")){
return this["expPromiseExpression"](_V167/*value*/["argument"]);;
};
;
if((_V167/*value*/["operator"] == "require")){
return this["expRequireExpression"](_V167/*value*/["argument"]);;
};
;
return this["expUnaryExpression"](_V167/*value*/);;
case "UpdateExpression":
return this["expUpdateExpression"](_V167/*value*/);;
case "VariableStatement":
return this["expVariableStatement"](_V167/*value*/);;
case "VariableDeclaration":
return this["expVariableDeclaration"](_V167/*value*/);;
case "WhileStatement":
return this["whileStatement"](_V167/*value*/);;
default:
this["error"](_V167/*value*/, _V12/*errorMsg*/["unknownType"]);;
}
;
;
return "/*this should not happen*/";;
;
});;
this["expExpressionStatement"] = (function(_V55/*parParsed*/){
var _V41/*res*/;
;
_V41/*res*/ = this["getDestroyTemporaryClassCode"]({"value": this["parseExpression"](_V55/*parParsed*/["expression"])});
_V41/*res*/["push"](";");;
return _V41/*res*/;;
;
});;
this["expDebuggerStatement"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"]("debugger");;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["expFunctionExpression"] = (function(_V167/*value*/, _V168/*declaration*/){
var _V169/*cp*/;
var _V170/*funName*/;
var _V122/*funRes*/;
var _V171/*uv*/;
var _V56/*name*/;
var _V41/*res*/;
;
_V169/*cp*/ = this["newInstance"](_V167/*value*/, {"dynamicCode": (this["dynamicCode"] || this["isFunction"])});
_V170/*funName*/ = _V169/*cp*/["getFunctionName"]();
_V122/*funRes*/ = _V169/*cp*/["getFunctionRes"]();
_V171/*uv*/ = _V169/*cp*/["_getUsedVairables"]();
_V56/*name*/;
for(_V56/*name*/ in _V171/*uv*/){if((_V171/*uv*/[_V56/*name*/] === true)){
this["_addUsedVariable"](_V56/*name*/);;
};
;
};
;
_V41/*res*/;
if((_V170/*funName*/ && _V122/*funRes*/)){
this["addFunction"](_V122/*funRes*/, _V170/*funName*/);;
_V41/*res*/ = this["newResult"](this["getVariableName"](_V170/*funName*/));;
_V41/*res*/["setType"](_V122/*funRes*/["getType"]());;
return _V41/*res*/;;
};
;
_V41/*res*/ = this["newResult"]();;
if(! _V168/*declaration*/){
_V41/*res*/["push"]("(");;
};
;
_V41/*res*/["pushType"]((_V122/*funRes*/ || _V169/*cp*/["getResult"]()));;
if(! _V168/*declaration*/){
_V41/*res*/["push"](")");;
};
;
return _V41/*res*/;;
;
});;
this["expFunctionDeclaration"] = (function(_V167/*value*/){
;
return this["expFunctionExpression"](_V167/*value*/, true);;
;
});;
this["expMemberFunction"] = (function(_V167/*value*/){
;
_V167/*value*/["id"] = _V42/*undefined*/;;
return this["expFunctionExpression"](_V167/*value*/);;
;
});;
this["expUpdateExpression"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
if(_V17/*par*/["prefix"]){
_V41/*res*/["push"](_V17/*par*/["operator"]);;
};
;
_V41/*res*/["pushType"](this["expectTypeVar"](this["parseExpression"](_V17/*par*/["argument"])));;
if(! _V17/*par*/["prefix"]){
_V41/*res*/["push"](_V17/*par*/["operator"]);;
};
;
return _V41/*res*/;;
;
});;
this["expIdentifier"] = (function(_V17/*par*/){
;
return this["getVariable"](_V30/*identifierName*/(_V17/*par*/["name"]));;
;
});;
this["expLiteral"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
switch (typeof _V17/*par*/["value"]){
case "string":
_V41/*res*/["push"](_V23/*stringEncodeStr*/(_V17/*par*/["value"]));;
break;;
case "number":
_V41/*res*/["push"](("" + _V17/*par*/["value"]));;
break;;
case "boolean":
if(_V17/*par*/["value"]){
_V41/*res*/["push"]("true");;

}else{
_V41/*res*/["push"]("false");;
};
;
break;;
default:
if((_V17/*par*/["value"] === null)){
_V41/*res*/["push"]("null");;

}else{
this["error"](_V17/*par*/, _V12/*errorMsg*/["internalUnknownLiteralType"]);;
};
;
}
;
;
_V41/*res*/["setType"](this["getType"]("var"));;
return _V41/*res*/;;
;
});;
this["expPromiseExpression"] = (function(_V172/*parExpression*/){
var _V41/*res*/;
var _V173/*expressionRes*/;
var _V174/*promiseNameStr*/;
var _V175/*dereferencePre*/;
var _V176/*preRes*/;
var _V177/*dereferencePost*/;
var _V178/*postRes*/;
var _V179/*promiseType*/;
;
_V41/*res*/ = this["newResult"]();
_V173/*expressionRes*/ = this["parseExpression"](_V172/*parExpression*/);
_V174/*promiseNameStr*/ = this["getUniqueName"]();
_V41/*res*/["makePromising"]();;
_V41/*res*/["setPromiseName"](_V174/*promiseNameStr*/);;
_V175/*dereferencePre*/ = this["dereferencePromisePreCode"]({"value": _V173/*expressionRes*/});
_V176/*preRes*/ = this["newResult"]();
_V176/*preRes*/["push"](_V175/*dereferencePre*/);;
_V176/*preRes*/["push"]((this["tryCatchFunctionStr"] + "(function("));;
_V176/*preRes*/["push"](_V174/*promiseNameStr*/);;
_V176/*preRes*/["push"]("){");;
_V41/*res*/["addPre"](_V176/*preRes*/);;
_V177/*dereferencePost*/ = this["dereferencePromisePostCode"]({"value": _V173/*expressionRes*/});
_V178/*postRes*/ = this["newResult"]();
_V178/*postRes*/["push"](("}), " + this["catchFunctionStr"]));;
_V178/*postRes*/["push"](_V177/*dereferencePost*/);;
_V178/*postRes*/["push"](";");;
_V41/*res*/["addPost"](_V178/*postRes*/);;
_V179/*promiseType*/ = _V173/*expressionRes*/["getType"]();
_V41/*res*/["setType"](this["getClassFromPromiseOf"](_V179/*promiseType*/));;
return _V41/*res*/;;
;
});;
this["expUnaryExpression"] = (function(_V172/*parExpression*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"](_V172/*parExpression*/["operator"]);;
_V41/*res*/["push"](" ");;
_V41/*res*/["pushType"](this["expectTypeVar"](this["parseExpression"](_V172/*parExpression*/["argument"])));;
return _V41/*res*/;;
;
});;
this["expRequireExpression"] = (function(_V172/*parExpression*/){
var _V41/*res*/;
var _V50/*tempRes*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["makePromising"]();;
_V41/*res*/["setPromiseName"](this["getUniqueName"]());;
this["common"]["useRequire"] = true;;
_V50/*tempRes*/ = this["newResult"]();
_V50/*tempRes*/["push"]("__requireFun(");;
_V50/*tempRes*/["push"](this["parseExpression"](_V172/*parExpression*/));;
_V50/*tempRes*/["push"](").then(");;
_V41/*res*/["addPre"](this["makeCompleteStatement"](_V50/*tempRes*/));;
_V41/*res*/["addPre"]((this["tryCatchFunctionStr"] + "(function("));;
_V41/*res*/["addPre"](_V41/*res*/["getPromiseName"]());;
_V41/*res*/["addPre"]("){");;
_V41/*res*/["addPost"]("}));");;
_V41/*res*/["setType"]("var");;
return _V41/*res*/;;
;
});;
this["expNewExpression"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V180/*typed*/;
var _V63/*type*/;
var _V27/*i*/;
var _V181/*constructorType*/;
var _V182/*expression*/;
;
_V41/*res*/ = this["newResult"]();
_V180/*typed*/ = false;
_V63/*type*/ = "var";
if((_V17/*par*/["callee"] && (_V17/*par*/["callee"]["type"] == "Identifier"))){
_V63/*type*/ = this["getType"](_V30/*identifierName*/(_V17/*par*/["callee"]), _V17/*par*/, {"dontThrow": true});;
if(_V63/*type*/){
_V41/*res*/["push"]("new ");;
_V41/*res*/["push"](this["getConstructorName"](_V17/*par*/["callee"]));;
_V41/*res*/["push"]("(");;
_V180/*typed*/ = true;;
_V41/*res*/["setType"](this["createTemporaryTrackedClass"](_V63/*type*/));;
};
;
};
;
if(! _V180/*typed*/){
_V41/*res*/["push"]("new ");;
_V41/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V17/*par*/["callee"])));;
_V41/*res*/["push"]("(");;
};
;
_V27/*i*/ = 0;
_V181/*constructorType*/;
if(_V180/*typed*/){
_V181/*constructorType*/ = this["getConstructorType"]({"type": _V63/*type*/}, _V17/*par*/);;
};
;
for(_V27/*i*/;(_V27/*i*/ < _V17/*par*/["arguments"]["length"]);++_V27/*i*/){{if(_V27/*i*/){
_V41/*res*/["push"](", ");;
};
;
_V182/*expression*/ = this["parseExpression"](_V17/*par*/["arguments"][_V27/*i*/]);
if(_V180/*typed*/){
_V41/*res*/["push"](this["getPassAsTypeCode"]({"value": _V182/*expression*/,
"valueType": _V182/*expression*/["getType"](),
"type": this["getFunctionArgumentType"](_V181/*constructorType*/, _V27/*i*/, _V17/*par*/),
"errorFun": this["getWarningFun"](_V17/*par*/)}));;

}else{
_V41/*res*/["push"](this["expectTypeVar"](_V182/*expression*/));;
};
;
}};
;
_V41/*res*/["push"](")");;
if(! _V180/*typed*/){
_V41/*res*/["setType"]("var");;
};
;
return _V41/*res*/;;
;
});;
this["connectExpression"] = (function(_V55/*parParsed*/){
var _V41/*res*/;
var _V183/*signalObject*/;
var _V184/*signalProperty*/;
var _V185/*slotObject*/;
var _V186/*slotProperty*/;
var _V187/*fun*/;
;
_V41/*res*/ = this["newResult"]();
if((_V55/*parParsed*/["signal"]["type"] != "MemberExpression")){
this["error"](_V55/*parParsed*/["signal"], _V12/*errorMsg*/["expectedMemberExpression"]);;
};
;
if(_V55/*parParsed*/["signal"]["computed"]){
this["error"](_V55/*parParsed*/["signal"], _V12/*errorMsg*/["noComputedMembersAllowed"]);;
};
;
_V183/*signalObject*/ = this["parseExpression"](_V55/*parParsed*/["signal"]["object"]);
_V184/*signalProperty*/ = _V30/*identifierName*/(_V55/*parParsed*/["signal"]["property"]);
if(_V55/*parParsed*/["slot"]){
if((_V55/*parParsed*/["slot"]["type"] != "MemberExpression")){
this["error"](_V55/*parParsed*/["slot"], _V12/*errorMsg*/["expectedMemberExpression"]);;
};
;
if(_V55/*parParsed*/["slot"]["computed"]){
this["error"](_V55/*parParsed*/["slot"], _V12/*errorMsg*/["noComputedMembersAllowed"]);;
};
;
_V185/*slotObject*/ = this["parseExpression"](_V55/*parParsed*/["slot"]["object"]);
_V186/*slotProperty*/ = _V30/*identifierName*/(_V55/*parParsed*/["slot"]["property"]);
_V41/*res*/["push"](this["connectSlotCode"]({"signalObject": _V183/*signalObject*/,
"signalProperty": _V184/*signalProperty*/,
"slotObject": _V185/*slotObject*/,
"slotProperty": _V186/*slotProperty*/,
"errorFun": this["getWarningFun"](_V55/*parParsed*/)}));;

}else{
if(_V55/*parParsed*/["fun"]){
_V187/*fun*/ = this["parseExpression"](_V55/*parParsed*/["fun"]);
_V41/*res*/["push"](this["connectFunCode"]({"signalObject": _V183/*signalObject*/,
"signalProperty": _V184/*signalProperty*/,
"fun": _V187/*fun*/,
"errorFun": this["getWarningFun"](_V55/*parParsed*/)}));;

}else{
this["error"](_V55/*parParsed*/, _V12/*errorMsg*/["unknownConnect"]);;
};
};
;
_V41/*res*/["setType"]("var");;
return _V41/*res*/;;
;
});;
this["breakOrContinuePromise"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V188/*promiseName*/;
var _V189/*outerBlock*/;
var _V125/*b*/;
var _V127/*block*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["makePromising"]();;
_V188/*promiseName*/ = (_V17/*par*/["promiseName"] || this["getUniqueName"]());
_V41/*res*/["setPromiseName"](_V188/*promiseName*/);;
this["stack"]("breakCode");;
this["stack"]("continueCode");;
this["breakCode"] = (((_V188/*promiseName*/ + ".resolve(false); return ") + _V188/*promiseName*/) + ";\n");;
this["continueCode"] = (((_V188/*promiseName*/ + ".resolve(true); return ") + _V188/*promiseName*/) + ";\n");;
_V41/*res*/["push"]((((("var " + _V188/*promiseName*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
_V189/*outerBlock*/ = this["newResult"]();
if(_V17/*par*/["preCondition"]){
_V189/*outerBlock*/["push"]("if(");;
_V189/*outerBlock*/["push"](_V17/*par*/["preCondition"]);;
_V189/*outerBlock*/["push"]("){");;
};
;
_V125/*b*/ = _V17/*par*/["block"];
_V125/*b*/["brackets"] = false;;
_V127/*block*/ = this["blockCreator"](_V125/*b*/, {"postCode": this["newResult"](this["continueCode"])});
_V189/*outerBlock*/["push"](this["makeCompleteStatement"](_V127/*block*/));;
if(_V17/*par*/["preCondition"]){
_V189/*outerBlock*/["push"]("}else{");;
_V189/*outerBlock*/["push"](this["breakCode"]);;
_V189/*outerBlock*/["push"]("};\n");;
};
;
_V41/*res*/["push"](this["makeCompleteStatement"](_V189/*outerBlock*/));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
return _V41/*res*/;;
;
});;
this["generateLoop"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V190/*loopFun*/;
var _V191/*loopEndPromise*/;
var _V192/*loopCode*/;
var _V193/*doFun*/;
var _V194/*doFunStatement*/;
;
_V41/*res*/ = this["newResult"]();
_V190/*loopFun*/ = this["getUniqueName"]();
_V191/*loopEndPromise*/ = this["getUniqueName"]();
_V41/*res*/["push"]((((("var " + _V191/*loopEndPromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
_V41/*res*/["push"]((("var " + _V190/*loopFun*/) + " = function(){"));;
_V192/*loopCode*/ = this["breakOrContinuePromise"]({"block": _V17/*par*/["block"],
"preCondition": _V17/*par*/["preCondition"],
"postCode": _V17/*par*/["postCode"]});
_V41/*res*/["push"](this["makeStatement"](this["makeCompleteStatement"](_V192/*loopCode*/)));;
_V41/*res*/["push"]("return ");;
_V41/*res*/["push"](_V192/*loopCode*/["getPromiseName"]());;
_V41/*res*/["push"](";\n");;
_V41/*res*/["push"]("};\n");;
_V193/*doFun*/ = this["getUniqueName"]();
_V41/*res*/["push"]((("var " + _V193/*doFun*/) + " = function(){"));;
_V41/*res*/["push"](_V190/*loopFun*/);;
_V41/*res*/["push"]("().then(function(contLoop){\n");;
_V41/*res*/["push"]("if (contLoop){");;
_V194/*doFunStatement*/ = this["newResult"]();
if(_V17/*par*/["postCode"]){
_V194/*doFunStatement*/["push"](this["makeStatement"](_V17/*par*/["postCode"]));;
};
;
_V194/*doFunStatement*/["push"]((_V193/*doFun*/ + "();"));;
_V41/*res*/["push"](this["makeCompleteStatement"](_V194/*doFunStatement*/));;
_V41/*res*/["push"]("}else{");;
_V41/*res*/["push"]((_V191/*loopEndPromise*/ + ".resolve();"));;
_V41/*res*/["push"]("};\n");;
_V41/*res*/["push"]("});\n");;
_V41/*res*/["push"]("};\n");;
_V41/*res*/["push"]((_V193/*doFun*/ + "();\n"));;
_V41/*res*/["push"](_V191/*loopEndPromise*/);;
_V41/*res*/["push"](".then(function(){");;
_V41/*res*/["addPost"]("});");;
return _V41/*res*/;;
;
});;
this["expForStatement"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V195/*statement*/;
var _V196/*promising*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
_V41/*res*/ = this["newResult"]();
_V195/*statement*/;
_V196/*promising*/ = false;
if(((_V33/*checkPromising*/(_V17/*par*/["test"]) || _V33/*checkPromising*/(_V17/*par*/["update"])) || _V33/*checkPromising*/(_V17/*par*/["body"]))){
_V196/*promising*/ = true;;
};
;
if(_V196/*promising*/){
_V41/*res*/["push"](this["makeStatement"](this["parseExpression"](_V17/*par*/["init"])));;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
_V41/*res*/["push"](this["generateLoop"]({"block": _V17/*par*/["body"],
"preCondition": this["parseExpression"](_V17/*par*/["test"]),
"postCode": this["parseExpression"](_V17/*par*/["update"])}));;
this["unstack"]("algorithmicCode");;

}else{
_V41/*res*/["push"]("for(");;
_V41/*res*/["push"](this["parseExpression"](_V17/*par*/["init"]));;
_V41/*res*/["push"](";");;
_V41/*res*/["push"](this["parseExpression"](_V17/*par*/["test"]));;
_V41/*res*/["push"](";");;
_V41/*res*/["push"](this["parseExpression"](_V17/*par*/["update"]));;
_V41/*res*/["push"]("){");;
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
this["stack"]("continueCode");;
this["continueCode"] = "continue;";;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
_V195/*statement*/ = this["newResult"]();;
_V195/*statement*/["push"](this["expBlockStatement"](_V17/*par*/["body"]));;
_V41/*res*/["push"](this["makeCompleteStatement"](_V195/*statement*/));;
this["unstack"]("algorithmicCode");;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
_V41/*res*/["push"]("}");;
};
;
this["unstack"]("dynamicCode");;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["expForInStatement"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V195/*statement*/;
var _V196/*promising*/;
var _V197/*iteratorRes*/;
var _V198/*iteratorAccess*/;
var _V199/*arrayName*/;
var _V200/*iName*/;
var _V201/*conditionRes*/;
var _V202/*postCodeRes*/;
var _V125/*b*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
_V41/*res*/ = this["newResult"]();
_V195/*statement*/;
_V196/*promising*/ = false;
if(_V33/*checkPromising*/(_V17/*par*/["body"])){
_V196/*promising*/ = true;;
};
;
if(_V196/*promising*/){
_V197/*iteratorRes*/ = this["expectTypeVar"](this["parseExpression"](_V17/*par*/["left"]));
_V198/*iteratorAccess*/ = _V197/*iteratorRes*/;
if(_V197/*iteratorRes*/["promising"]){
_V198/*iteratorAccess*/ = _V197/*iteratorRes*/["getPromiseName"]();;
};
;
_V199/*arrayName*/ = this["getUniqueName"]();
_V41/*res*/["addPre"]((("var " + _V199/*arrayName*/) + " = [];"));;
_V41/*res*/["push"]("for(");;
_V41/*res*/["push"](_V197/*iteratorRes*/);;
_V41/*res*/["push"](" in ");;
_V41/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V17/*par*/["right"])));;
_V41/*res*/["push"]("){");;
_V41/*res*/["push"]((_V199/*arrayName*/ + ".push("));;
_V41/*res*/["push"](_V198/*iteratorAccess*/);;
_V41/*res*/["push"](");");;
_V41/*res*/["push"]("};");;
_V41/*res*/["push"](_V197/*iteratorRes*/);;
_V41/*res*/["push"](((" = " + _V199/*arrayName*/) + "[0];"));;
_V200/*iName*/ = this["getUniqueName"]();
_V41/*res*/["push"]((("var " + _V200/*iName*/) + " = 0;"));;
_V201/*conditionRes*/ = this["newResult"]();
_V201/*conditionRes*/["push"]((((_V200/*iName*/ + " < ") + _V199/*arrayName*/) + ".length"));;
_V202/*postCodeRes*/ = this["newResult"]();
_V202/*postCodeRes*/["push"]((_V200/*iName*/ + "++;"));;
_V202/*postCodeRes*/["push"](_V197/*iteratorRes*/);;
_V202/*postCodeRes*/["push"](((((" = " + _V199/*arrayName*/) + "[") + _V200/*iName*/) + "];"));;
_V41/*res*/["push"](this["generateLoop"]({"block": _V17/*par*/["body"],
"preCondition": _V201/*conditionRes*/,
"postCode": _V202/*postCodeRes*/}));;
_V41/*res*/["push"]("}");;

}else{
_V41/*res*/["push"]("for(");;
_V41/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V17/*par*/["left"])));;
_V41/*res*/["push"](" in ");;
_V41/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V17/*par*/["right"])));;
_V41/*res*/["push"](")");;
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
this["stack"]("continueCode");;
this["continueCode"] = "continue;";;
_V195/*statement*/ = this["newResult"]();;
_V125/*b*/ = _V17/*par*/["body"];
_V125/*b*/["brackets"] = true;;
_V195/*statement*/["push"](this["blockCreator"](_V125/*b*/));;
_V41/*res*/["push"](this["makeCompleteStatement"](_V195/*statement*/));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
};
;
this["unstack"]("dynamicCode");;
this["unstack"]("algorithmicCode");;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["whileStatement"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V203/*statements*/;
var _V97/*condition*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
_V41/*res*/ = this["newResult"]();
_V203/*statements*/;
_V97/*condition*/ = this["expectTypeVar"](this["parseExpression"](_V17/*par*/["test"]));
if((_V33/*checkPromising*/(_V97/*condition*/) || _V33/*checkPromising*/(_V17/*par*/["body"]))){
_V41/*res*/["push"](this["generateLoop"]({"block": _V17/*par*/["body"],
"preCondition": _V97/*condition*/}));;

}else{
_V41/*res*/["push"]("while(");;
_V41/*res*/["push"](_V97/*condition*/);;
_V41/*res*/["push"]("){\n");;
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
this["stack"]("continueCode");;
this["continueCode"] = "continue;";;
_V41/*res*/["push"](this["makeCompleteStatement"](this["parseExpression"](_V17/*par*/["body"])));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
_V41/*res*/["push"]("}");;
};
;
this["unstack"]("dynamicCode");;
this["unstack"]("algorithmicCode");;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["expIfStatement"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V196/*promising*/;
var _V160/*continuePromise*/;
var _V204/*continueCode*/;
var _V195/*statement*/;
var _V125/*b*/;
var _V126/*extraPar*/;
;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
_V41/*res*/ = this["newResult"]();
_V196/*promising*/ = false;
if((_V17/*par*/["consequent"] && _V33/*checkPromising*/(_V17/*par*/["consequent"]))){
_V196/*promising*/ = true;;
};
;
if((_V17/*par*/["alternate"] && _V33/*checkPromising*/(_V17/*par*/["alternate"]))){
_V196/*promising*/ = true;;
};
;
_V160/*continuePromise*/;
_V204/*continueCode*/;
if(_V196/*promising*/){
_V160/*continuePromise*/ = this["getUniqueName"]();;
_V41/*res*/["push"]((((("var " + _V160/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
_V204/*continueCode*/ = (_V160/*continuePromise*/ + ".resolve();");;
};
;
_V41/*res*/["push"]("if(");;
_V41/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V17/*par*/["test"])));;
_V41/*res*/["push"]("){\n");;
if(! _V17/*par*/["consequent"]){
this["error"](_V17/*par*/, _V12/*errorMsg*/["unknownIfStatement"]);;
};
;
_V195/*statement*/ = this["newResult"]();
_V125/*b*/;
if((_V17/*par*/["consequent"]["type"] == "BlockStatement")){
_V125/*b*/ = _V17/*par*/["consequent"]["body"];;

}else{
_V125/*b*/ = [_V17/*par*/["consequent"]];;
};
;
_V125/*b*/["brackets"] = false;;
_V126/*extraPar*/ = {};
if(_V196/*promising*/){
_V126/*extraPar*/["postCode"] = this["newResult"](_V204/*continueCode*/);;
};
;
_V195/*statement*/["push"](this["blockCreator"](_V125/*b*/, _V126/*extraPar*/));;
_V41/*res*/["push"](this["makeCompleteStatement"](_V195/*statement*/));;
if(_V17/*par*/["alternate"]){
_V41/*res*/["push"]("\n}else{\n");;
_V195/*statement*/ = this["newResult"]();;
if((_V17/*par*/["alternate"]["type"] == "BlockStatement")){
_V125/*b*/ = _V17/*par*/["alternate"]["body"];;

}else{
_V125/*b*/ = [_V17/*par*/["alternate"]];;
};
;
_V125/*b*/["brackets"] = false;;
_V126/*extraPar*/ = {};;
if(_V196/*promising*/){
_V126/*extraPar*/["postCode"] = this["newResult"](_V204/*continueCode*/);;
};
;
_V195/*statement*/["push"](this["blockCreator"](_V125/*b*/, _V126/*extraPar*/));;
_V41/*res*/["push"](this["makeCompleteStatement"](_V195/*statement*/));;

}else{
if(_V196/*promising*/){
_V41/*res*/["push"]("\n}else{\n");;
_V195/*statement*/ = this["newResult"]();;
_V195/*statement*/["push"](_V204/*continueCode*/);;
_V41/*res*/["push"](this["makeCompleteStatement"](_V195/*statement*/));;
};
};
;
_V41/*res*/["push"]("}");;
if(_V196/*promising*/){
_V41/*res*/["push"]((("; " + _V160/*continuePromise*/) + ".then(function(){"));;
_V41/*res*/["addPost"]("});");;
};
;
this["unstack"]("conditionalCode");;
this["unstack"]("algorithmicCode");;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["conditionalExpression"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V205/*tempPromise*/;
var _V206/*tempValue*/;
var _V207/*trueExtraCode*/;
var _V208/*falseExtraCode*/;
;
_V41/*res*/ = this["newResult"]();
if((_V17/*par*/["consequent"]["promising"] || _V17/*par*/["alternate"]["promising"])){
_V41/*res*/["makePromising"]();;
_V205/*tempPromise*/ = this["getUniqueName"]();
_V206/*tempValue*/ = this["getUniqueName"]();
_V41/*res*/["addPre"]("var ");;
_V41/*res*/["addPre"](_V205/*tempPromise*/);;
_V41/*res*/["addPre"](((" = " + this["newPromiseStr"]()) + ";\n"));;
_V41/*res*/["addPre"]("if(");;
_V41/*res*/["addPre"](this["parseExpression"](_V17/*par*/["test"]));;
_V41/*res*/["addPre"]("){");;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
_V207/*trueExtraCode*/ = this["newResult"]();
_V207/*trueExtraCode*/["push"](_V205/*tempPromise*/);;
_V207/*trueExtraCode*/["push"](".resolve(");;
_V207/*trueExtraCode*/["push"](this["parseExpression"](_V17/*par*/["consequent"]));;
_V207/*trueExtraCode*/["push"](");\n");;
_V41/*res*/["addPre"](this["makeCompleteStatement"](_V207/*trueExtraCode*/));;
_V41/*res*/["addPre"]("}else{");;
_V208/*falseExtraCode*/ = this["newResult"]();
_V208/*falseExtraCode*/["push"](_V205/*tempPromise*/);;
_V208/*falseExtraCode*/["push"](".resolve(");;
_V208/*falseExtraCode*/["push"](this["parseExpression"](_V17/*par*/["alternate"]));;
_V208/*falseExtraCode*/["push"](");\n");;
_V41/*res*/["addPre"](this["makeCompleteStatement"](_V208/*falseExtraCode*/));;
_V41/*res*/["addPre"]("};\n");;
_V41/*res*/["addPre"](_V205/*tempPromise*/);;
_V41/*res*/["addPre"](".then(");;
_V41/*res*/["setPromiseName"](this["getUniqueName"]());;
_V41/*res*/["addPre"](_V41/*res*/["getPromiseName"]());;
_V41/*res*/["addPre"]("){");;
_V41/*res*/["addPost"]("});");;
this["unstack"]("conditionalCode");;

}else{
_V41/*res*/["push"]("(");;
_V41/*res*/["push"](this["parseExpression"](_V17/*par*/["test"]));;
_V41/*res*/["push"](" ? ");;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
_V41/*res*/["push"](this["parseExpression"](_V17/*par*/["consequent"]));;
_V41/*res*/["push"](" : ");;
_V41/*res*/["push"](this["parseExpression"](_V17/*par*/["alternate"]));;
_V41/*res*/["push"](")");;
this["unstack"]("conditionalCode");;
};
;
_V41/*res*/["setType"]("var");;
return _V41/*res*/;;
;
});;
this["expSwitchStatement"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V196/*promising*/;
var _V160/*continuePromise*/;
var _V204/*continueCode*/;
var _V209/*discriminant*/;
var _V210/*cases*/;
var _V195/*statement*/;
var _V211/*hasDefault*/;
var _V212/*defaultCase*/;
var _V213/*isDefault*/;
var _V214/*defaultCheck*/;
var _V215/*firstCheck*/;
var _V216/*hasFirstCheck*/;
var _V217/*currentCase*/;
var _V218/*caseFun*/;
var _V219/*checkFun*/;
var _V220/*nextCheckCode*/;
var _V221/*j*/;
var _V222/*nextCaseCode*/;
var _V223/*checkCode*/;
var _V125/*b*/;
var _V126/*extraPar*/;
var _V27/*i*/;
;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
_V41/*res*/ = this["newResult"]();
_V196/*promising*/ = false;
if((_V17/*par*/["cases"] && _V33/*checkPromising*/(_V17/*par*/["cases"]))){
_V196/*promising*/ = true;;
};
;
_V160/*continuePromise*/;
_V204/*continueCode*/;
if(_V196/*promising*/){
_V160/*continuePromise*/ = this["getUniqueName"]();;
_V41/*res*/["push"]((((("var " + _V160/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
_V204/*continueCode*/ = (_V160/*continuePromise*/ + ".resolve(); return;");;
this["stack"]("breakCode");;
this["breakCode"] = _V204/*continueCode*/;;
_V209/*discriminant*/ = this["getUniqueName"]("discriminant");
_V41/*res*/["push"]((("var " + _V209/*discriminant*/) + " = "));;
_V41/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V17/*par*/["discriminant"])));;
_V41/*res*/["push"](";\n");;
_V210/*cases*/ = [];
_V195/*statement*/;
_V211/*hasDefault*/ = false;
_V212/*defaultCase*/;
for(_V27/*i*/ = 0;(_V27/*i*/ < _V17/*par*/["cases"]["length"]);++_V27/*i*/){{_V213/*isDefault*/ = false;
if(! _V17/*par*/["cases"][_V27/*i*/]["test"]){
_V213/*isDefault*/ = true;;
if(! _V211/*hasDefault*/){
_V211/*hasDefault*/ = true;;
_V212/*defaultCase*/ = _V17/*par*/["cases"][_V27/*i*/];;
};
;
};
;
_V210/*cases*/["push"]({"theCase": _V17/*par*/["cases"][_V27/*i*/],
"caseFun": this["getUniqueName"](),
"checkFun": this["getUniqueName"](),
"isDefault": _V213/*isDefault*/});;
}};
;
_V214/*defaultCheck*/ = _V204/*continueCode*/;
if(_V211/*hasDefault*/){
_V214/*defaultCheck*/ = (_V212/*defaultCase*/["checkFun"] + "();");;
};
;
_V215/*firstCheck*/ = _V204/*continueCode*/;
_V216/*hasFirstCheck*/ = false;
for(_V27/*i*/ = 0;(_V27/*i*/ < _V210/*cases*/["length"]);++_V27/*i*/){{_V217/*currentCase*/ = _V210/*cases*/[_V27/*i*/]["theCase"];
_V218/*caseFun*/ = _V210/*cases*/[_V27/*i*/]["caseFun"];
_V219/*checkFun*/ = _V210/*cases*/[_V27/*i*/]["checkFun"];
if(! _V216/*hasFirstCheck*/){
_V216/*hasFirstCheck*/ = true;;
_V215/*firstCheck*/ = (_V219/*checkFun*/ + "()");;
};
;
_V220/*nextCheckCode*/ = _V214/*defaultCheck*/;
for(_V221/*j*/ = (_V27/*i*/ + 1);(_V221/*j*/ < _V210/*cases*/["length"]);++_V221/*j*/){{if(! _V210/*cases*/[_V221/*j*/]["isDefault"]){
_V220/*nextCheckCode*/ = (_V210/*cases*/[_V221/*j*/]["checkFun"] + "()");;
break;;
};
;
}};
;
_V222/*nextCaseCode*/ = _V204/*continueCode*/;
if(_V210/*cases*/[(_V27/*i*/ + 1)]){
_V222/*nextCaseCode*/ = (_V210/*cases*/[(_V27/*i*/ + 1)]["caseFun"] + "(); return;");;
};
;
_V41/*res*/["push"]((("var " + _V219/*checkFun*/) + " = function(){"));;
_V223/*checkCode*/ = this["newResult"]();
_V223/*checkCode*/["push"]((("if(" + _V209/*discriminant*/) + " === "));;
_V223/*checkCode*/["push"](this["expectTypeVar"](this["parseExpression"](_V217/*currentCase*/["test"])));;
_V223/*checkCode*/["push"]("){");;
_V223/*checkCode*/["push"](_V218/*caseFun*/);;
_V223/*checkCode*/["push"]("(); return; };\n");;
_V223/*checkCode*/["push"](_V220/*nextCheckCode*/);;
_V41/*res*/["push"](this["makeCompleteStatement"](_V223/*checkCode*/));;
_V41/*res*/["push"]("};\n");;
_V41/*res*/["push"]((("var " + _V218/*caseFun*/) + " = function(){"));;
_V195/*statement*/ = this["newResult"]();;
_V125/*b*/ = _V217/*currentCase*/["consequent"];
_V126/*extraPar*/ = {};
if(_V196/*promising*/){
_V126/*extraPar*/["postCode"] = this["newResult"]();;
_V126/*extraPar*/["postCode"]["push"](_V222/*nextCaseCode*/);;
};
;
_V195/*statement*/["push"](this["blockCreator"](_V125/*b*/, _V126/*extraPar*/));;
_V41/*res*/["push"](this["makeCompleteStatement"](_V195/*statement*/));;
_V41/*res*/["push"]("};\n");;
}};
;
_V41/*res*/["push"](_V215/*firstCheck*/);;
_V41/*res*/["push"]((("; " + _V160/*continuePromise*/) + ".then(function(){"));;
_V41/*res*/["addPost"]("});");;
this["unstack"]("breakCode");;

}else{
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
_V41/*res*/["push"]("switch (");;
_V41/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V17/*par*/["discriminant"])));;
_V41/*res*/["push"]("){\n");;
_V27/*i*/ = 0;
for(_V27/*i*/ = 0;(_V27/*i*/ < _V17/*par*/["cases"]["length"]);++_V27/*i*/){{_V217/*currentCase*/ = _V17/*par*/["cases"][_V27/*i*/];
if((_V217/*currentCase*/["type"] != "SwitchCase")){
this["error"](_V17/*par*/, _V12/*errorMsg*/["unknownCase"]);;
};
;
if(_V217/*currentCase*/["test"]){
_V41/*res*/["push"]("case ");;
_V41/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V217/*currentCase*/["test"])));;
_V41/*res*/["push"](":\n");;

}else{
_V41/*res*/["push"]("default");;
_V41/*res*/["push"](":\n");;
};
;
_V41/*res*/["push"](this["blockCreator"](_V217/*currentCase*/["consequent"]));;
}};
;
_V41/*res*/["push"]("}\n");;
this["unstack"]("breakCode");;
};
;
this["unstack"]("conditionalCode");;
this["unstack"]("algorithmicCode");;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["expBreakStatement"] = (function(_V55/*parParsed*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
if(this["breakCode"]){
_V41/*res*/["push"](this["breakCode"]);;

}else{
_V41/*res*/["push"]("break;");;
};
;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["expContinueStatement"] = (function(_V55/*parParsed*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
if(this["continueCode"]){
_V41/*res*/["push"](this["continueCode"]);;

}else{
_V41/*res*/["push"]("continue;");;
};
;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["expBinaryExpression"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V224/*left*/;
var _V225/*right*/;
var _V226/*ltype*/;
var _V227/*rtype*/;
var _V205/*tempPromise*/;
var _V206/*tempValue*/;
var _V228/*rightExtraCode*/;
;
_V41/*res*/ = this["newResult"]();
_V224/*left*/ = this["parseExpression"](_V17/*par*/["left"]);
_V225/*right*/ = this["parseExpression"](_V17/*par*/["right"]);
_V41/*res*/["setType"]("var");;
if(((_V17/*par*/["operator"] == "||") && _V17/*par*/["right"]["promising"])){
_V226/*ltype*/ = _V224/*left*/["getType"]();
_V227/*rtype*/ = _V225/*right*/["getType"]();
if(((_V226/*ltype*/ !== this["getType"]("var")) || (_V227/*rtype*/ !== this["getType"]("var")))){
this["error"](_V17/*par*/, _V12/*errorMsg*/["notImplemented"]);;
};
;
_V41/*res*/["makePromising"]();;
_V205/*tempPromise*/ = this["getUniqueName"]();
_V206/*tempValue*/ = this["getUniqueName"]();
_V41/*res*/["addPre"]("var ");;
_V41/*res*/["addPre"](_V205/*tempPromise*/);;
_V41/*res*/["addPre"](((" = " + this["newPromiseStr"]()) + ";\n"));;
_V41/*res*/["addPre"]("var ");;
_V41/*res*/["addPre"](_V206/*tempValue*/);;
_V41/*res*/["addPre"](" = ");;
_V41/*res*/["addPre"](_V224/*left*/);;
_V41/*res*/["addPre"](";\n");;
_V41/*res*/["addPre"]("if (");;
_V41/*res*/["addPre"](_V206/*tempValue*/);;
_V41/*res*/["addPre"]("){ ");;
_V41/*res*/["addPre"](_V205/*tempPromise*/);;
_V41/*res*/["addPre"](".resolve(");;
_V41/*res*/["addPre"](_V206/*tempValue*/);;
_V41/*res*/["addPre"](") }else{ ");;
_V228/*rightExtraCode*/ = this["newResult"]();
_V228/*rightExtraCode*/["push"](_V205/*tempPromise*/);;
_V228/*rightExtraCode*/["push"](".resolve(");;
_V228/*rightExtraCode*/["push"](_V225/*right*/);;
_V228/*rightExtraCode*/["push"](");\n");;
_V41/*res*/["addPre"](this["makeCompleteStatement"](_V228/*rightExtraCode*/));;
_V41/*res*/["addPre"]("};\n");;
_V41/*res*/["addPre"](_V205/*tempPromise*/);;
_V41/*res*/["addPre"](".then(");;
_V41/*res*/["setPromiseName"](this["getUniqueName"]());;
_V41/*res*/["addPre"](_V41/*res*/["getPromiseName"]());;
_V41/*res*/["addPre"]("){");;
_V41/*res*/["addPost"]("});");;

}else{
_V41/*res*/["push"](this["getBinaryExpressionCode"]({"left": _V224/*left*/,
"right": _V225/*right*/,
"operator": _V17/*par*/["operator"],
"errorFun": this["getWarningFun"](_V17/*par*/)}));;
};
;
return _V41/*res*/;;
;
});;
this["expMemberExpression"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V229/*base*/;
;
_V41/*res*/ = this["newResult"]();
_V229/*base*/ = this["parseExpression"](_V17/*par*/["object"]);
_V41/*res*/["pushType"](this["getGetPropertyCode"]({"instance": _V229/*base*/,
"property": (_V17/*par*/["computed"] ? _V42/*undefined*/ : _V30/*identifierName*/(_V17/*par*/["property"])),
"propertyValue": (_V17/*par*/["computed"] ? this["expectTypeVar"](this["parseExpression"](_V17/*par*/["property"])) : _V42/*undefined*/),
"errorFun": this["getWarningFun"](_V17/*par*/)}));;
return _V41/*res*/;;
;
});;
this["newInherited"] = (function(){
;
return new _V230/*InheritedSystem*/(this);;
;
});;
_V230/*InheritedSystem*/ = (function(_V17/*par*/){
;
this["instance"] = _V17/*par*/;;
this["used"] = {};;
;
});
_V230/*InheritedSystem*/["prototype"] = {"setCurrent": (function(_V17/*par*/){
;
this["currentMember"] = _V17/*par*/;;
;
}),
"getCurrent": (function(){
;
if(! this["used"][this["currentMember"]]){
this["used"][this["currentMember"]] = this["instance"]["getUniqueName"](("inherited " + this["currentMember"]));;
};
;
return this["used"][this["currentMember"]];;
;
})};;
this["expObjectExpression"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V231/*isClassObject*/;
var _V27/*i*/;
var _V81/*l*/;
var _V232/*currentMember*/;
var _V148/*prop*/;
var _V233/*v*/;
var _V56/*name*/;
var _V234/*functionRes*/;
;
_V41/*res*/ = this["newResult"]();
_V231/*isClassObject*/ = this["isClassObject"];
this["stack"]("isClassObject");;
this["isClassObject"] = false;;
_V41/*res*/["push"]("{");;
_V27/*i*/ = 0;
_V81/*l*/ = ((_V17/*par*/["properties"] && _V17/*par*/["properties"]["length"]) || 0);
for(_V27/*i*/;(_V27/*i*/ < _V81/*l*/);++_V27/*i*/){{this["isClassObject"] = false;;
_V232/*currentMember*/;
if(_V27/*i*/){
_V41/*res*/["push"](",\n");;
};
;
_V148/*prop*/ = _V17/*par*/["properties"][_V27/*i*/];
if((_V148/*prop*/["kind"] == "init")){
_V232/*currentMember*/ = _V30/*identifierName*/(_V148/*prop*/["key"]);;
if(this["inheritedSystem"]){
this["inheritedSystem"]["setCurrent"](_V232/*currentMember*/);;
};
;
_V41/*res*/["push"]((_V23/*stringEncodeStr*/(_V30/*identifierName*/(_V148/*prop*/["key"])) + ": "));;
if(_V148/*prop*/["value"]){
if(_V31/*checkIsFunction*/(_V148/*prop*/["value"])){
if(_V231/*isClassObject*/){
this["isClassObject"] = true;;
};
;
};
;
_V233/*v*/ = this["parseExpression"](_V148/*prop*/["value"]);
_V41/*res*/["push"](this["expectTypeVar"](this["getPassAsTypeCode"]({"value": _V233/*v*/,
"valueType": _V233/*v*/["getType"](),
"type": this["getType"]((_V148/*prop*/["typename"] || "var"), _V17/*par*/),
"errorFun": this["getWarningFun"](_V17/*par*/)})));;
};
;

}else{
if((_V148/*prop*/["kind"] == "function")){
if(_V231/*isClassObject*/){
this["isClassObject"] = true;;
};
;
_V56/*name*/ = _V30/*identifierName*/(_V148/*prop*/["id"]);
_V232/*currentMember*/ = _V56/*name*/;;
if(this["inheritedSystem"]){
this["inheritedSystem"]["setCurrent"](_V232/*currentMember*/);;
};
;
_V148/*prop*/["id"] = _V42/*undefined*/;;
_V41/*res*/["push"]((_V23/*stringEncodeStr*/(_V56/*name*/) + ": "));;
_V234/*functionRes*/ = this["expectTypeVar"](this["parseExpression"](_V148/*prop*/));
_V41/*res*/["push"](_V234/*functionRes*/);;

}else{
if((_V148/*prop*/["kind"] == "block")){

}else{
this["error"](_V17/*par*/, _V12/*errorMsg*/["unknownPropertyAssignmentType"]);;
};
};
};
;
}};
;
_V41/*res*/["push"]("}");;
_V41/*res*/["setType"]("var");;
this["unstack"]("isClassObject");;
return _V41/*res*/;;
;
});;
this["expClassObjectExpression"] = (function(_V17/*par*/){
var _V41/*res*/;
;
this["stack"]("isClassObject");;
this["isClassObject"] = true;;
_V41/*res*/ = this["expObjectExpression"](_V17/*par*/);
this["unstack"]("isClassObject");;
return _V41/*res*/;;
;
});;
this["expectTypeVar"] = (function(_V17/*par*/){
var _V44/*self*/;
var _V235/*e*/;
;
if((_V17/*par*/["getType"]() === this["getType"]("var"))){
return _V17/*par*/;;
};
;
_V44/*self*/ = this;
_V235/*e*/ = this["addError"](_V17/*par*/["getParsed"](), _V12/*errorMsg*/["expectedVar"]);
_V13/*classSystem*/["definitionPromise"](_V17/*par*/["getType"]())["then"]((function(_V25/*t*/){
;
if((_V25/*t*/ === _V44/*self*/["getType"]("var"))){
_V235/*e*/["resolve"]();;
};
;
;
}));;
return _V17/*par*/;;
;
});;
this["expVariableStatement"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V236/*declarations*/;
var _V27/*i*/;
var _V81/*l*/;
var _V237/*usedType*/;
var _V51/*r*/;
;
_V41/*res*/ = this["newResult"]();
_V236/*declarations*/ = _V17/*par*/["declarations"];
if(! _V236/*declarations*/){
this["error"](_V17/*par*/, _V12/*errorMsg*/["missingDeclarations"]);;
return "";;
};
;
_V27/*i*/ = 0;
_V81/*l*/ = _V236/*declarations*/["length"];
_V237/*usedType*/ = this["getType"](_V30/*identifierName*/(_V17/*par*/["typename"]), _V17/*par*/);
for(_V27/*i*/;(_V27/*i*/ < _V81/*l*/);++_V27/*i*/){{if((_V236/*declarations*/[_V27/*i*/]["type"] == "VariableDeclaration")){
_V51/*r*/ = this["parseExpression"](_V236/*declarations*/[_V27/*i*/]);
_V41/*res*/["push"](_V51/*r*/);;

}else{
this["error"](_V236/*declarations*/[_V27/*i*/], _V12/*errorMsg*/["unknownType"]);;
};
;
}};
;
_V41/*res*/["setType"](_V237/*usedType*/);;
return _V41/*res*/;;
;
});;
this["isSameType"] = (function(_V59/*type1*/, _V60/*type2*/){
;
return _V13/*classSystem*/["isSameType"](_V59/*type1*/, _V60/*type2*/);;
;
});;
this["expVariableDeclaration"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
if(_V17/*par*/["init"]){
_V41/*res*/["pushType"](this["getSetVariableCode"]({"instance": this["getVariable"](_V30/*identifierName*/(_V17/*par*/["id"])),
"assignmentType": _V17/*par*/["id"]["type"],
"value": this["parseExpression"](_V17/*par*/["init"]),
"operator": "=",
"errorFun": this["getWarningFun"](_V17/*par*/)}));;

}else{
_V41/*res*/["pushType"](this["getVariable"](_V30/*identifierName*/(_V17/*par*/["id"])));;
};
;
return _V41/*res*/;;
;
});;
this["getVariable"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
this["_addUsedVariable"](_V17/*par*/);;
_V41/*res*/["push"](this["getVariableName"](_V17/*par*/));;
_V41/*res*/["setType"](this["getVariableType"](_V17/*par*/));;
return _V41/*res*/;;
;
});;
this["getResultType"] = (function(_V17/*par*/){
var _V25/*t*/;
;
if(! _V17/*par*/){
return _V42/*undefined*/;;
};
;
if((typeof _V17/*par*/ == "string")){
return _V42/*undefined*/;;
};
;
_V25/*t*/ = _V17/*par*/["getType"]();
if((typeof _V25/*t*/ == "string")){
return this["getType"](_V25/*t*/);;
};
;
return _V25/*t*/;;
;
});;
this["getFunctionArgumentType"] = (function(_V64/*parType*/, _V238/*parIndex*/, _V61/*parsed*/){
var _V239/*retType*/;
var _V44/*self*/;
;
_V239/*retType*/ = this["getProvisionalType"](_V61/*parsed*/);
_V44/*self*/ = this;
_V13/*classSystem*/["readyPromise"](_V64/*parType*/)["then"]((function(_V64/*parType*/){
;
_V44/*self*/["resolveProvisional"](_V239/*retType*/, _V13/*classSystem*/["getFunctionArgumentType"](_V64/*parType*/, _V238/*parIndex*/));;
;
}));;
return _V239/*retType*/;;
;
});;
this["callClassSystem"] = (function(_V101/*parFun*/, _V17/*par*/){
var _V240/*dynamic*/;
var _V241/*typeProps*/;
var _V242/*ignoreProps*/;
var _V27/*i*/;
var _V29/*p*/;
var _V243/*promises*/;
var _V61/*parsed*/;
var _V244/*errRes*/;
var _V44/*self*/;
var _V245/*resolveType*/;
var _V25/*t*/;
;
_V240/*dynamic*/ = false;
_V241/*typeProps*/ = {"type": true,
"valueType": true,
"leftType": true,
"rightType": true};
_V242/*ignoreProps*/ = {"errorFun": true,
"parsed": true};
_V27/*i*/ = 0;
_V29/*p*/;
_V243/*promises*/ = [];
_V61/*parsed*/ = _V17/*par*/["parsed"];
_V61/*parsed*/ = (_V61/*parsed*/ || (_V17/*par*/["value"] && _V17/*par*/["value"]["getParsed"]()));;
_V61/*parsed*/ = (_V61/*parsed*/ || (_V17/*par*/["instance"] && _V17/*par*/["instance"]["getParsed"]()));;
_V61/*parsed*/ = (_V61/*parsed*/ || (_V17/*par*/["left"] && _V17/*par*/["left"]["getParsed"]()));;
_V61/*parsed*/ = (_V61/*parsed*/ || (_V17/*par*/["right"] && _V17/*par*/["right"]["getParsed"]()));;
if(! _V61/*parsed*/){
_V16/*errorFun*/({}, _V12/*errorMsg*/["internalParserInfoMissing"]);;
;
};
;
_V244/*errRes*/ = this["runtimeError"](_V61/*parsed*/, _V12/*errorMsg*/["typeLookupFailed"]);
_V44/*self*/ = this;
_V245/*resolveType*/ = (function(_V148/*prop*/, _V43/*ps*/, _V246/*parArgument*/){
var _V41/*res*/;
;
_V41/*res*/ = new _V10/*Promise*/();
_V43/*ps*/["then"]((function(_V25/*t*/){
;
if(_V246/*parArgument*/){
_V17/*par*/["arguments"][_V148/*prop*/]["type"] = _V25/*t*/;;

}else{
_V17/*par*/[_V148/*prop*/] = _V25/*t*/;;
};
;
_V41/*res*/["resolve"]();;
;
}));;
_V243/*promises*/["push"](_V41/*res*/);;
return _V41/*res*/;;
;
});
_V25/*t*/;
for(_V29/*p*/ in _V241/*typeProps*/){_V25/*t*/ = _V17/*par*/[_V29/*p*/];;
if(_V25/*t*/){
if(_V25/*t*/["isDynamic"]){
_V240/*dynamic*/ = true;;

}else{
_V245/*resolveType*/(_V29/*p*/, _V13/*classSystem*/["readyPromise"](_V25/*t*/));;
};
;
};
;
};
;
if(_V17/*par*/["arguments"]){
for(_V27/*i*/ = 0;(_V27/*i*/ < _V17/*par*/["arguments"]["length"]);++_V27/*i*/){{_V25/*t*/ = _V17/*par*/["arguments"][_V27/*i*/]["type"];;
if(_V25/*t*/){
if(_V25/*t*/["isDynamic"]){
_V240/*dynamic*/ = true;;

}else{
_V245/*resolveType*/(_V27/*i*/, _V13/*classSystem*/["readyPromise"](_V25/*t*/), true);;
};
;
};
;
}};
;
};
;
_V11/*promiseland*/["all"](_V243/*promises*/)["then"]((function(){
var _V29/*p*/;
var _V41/*res*/;
var _V247/*propsStarted*/;
var _V248/*addProperty*/;
var _V249/*dynRes*/;
var _V50/*tempRes*/;
;
_V29/*p*/;
if(_V240/*dynamic*/){
_V44/*self*/["common"]["useClassSystem"] = true;;
_V41/*res*/ = _V44/*self*/["newResult"]();
_V41/*res*/["push"]("classSystem.");;
_V41/*res*/["push"](_V101/*parFun*/);;
_V41/*res*/["push"]("({");;
_V247/*propsStarted*/ = false;
_V248/*addProperty*/ = (function(_V29/*p*/){
;
if(_V247/*propsStarted*/){
_V41/*res*/["push"](", ");;
};
;
_V247/*propsStarted*/ = true;;
_V41/*res*/["push"](_V23/*stringEncodeStr*/(_V29/*p*/));;
_V41/*res*/["push"](":");;
;
});
for(_V29/*p*/ in _V17/*par*/){if((! _V17/*par*/[_V29/*p*/] || _V242/*ignoreProps*/[_V29/*p*/])){

}else{
if(_V241/*typeProps*/[_V29/*p*/]){
_V248/*addProperty*/(_V29/*p*/);;
_V41/*res*/["push"](_V44/*self*/["renderType"](_V17/*par*/[_V29/*p*/]));;

}else{
_V248/*addProperty*/(_V29/*p*/);;
_V41/*res*/["push"](_V44/*self*/["makeCompleteStatementDynamic"](_V17/*par*/[_V29/*p*/]));;
};
};
;
};
;
_V41/*res*/["push"]("})");;
_V249/*dynRes*/ = _V44/*self*/["newResult"]();
_V249/*dynRes*/["push"](_V44/*self*/["makeCompleteStatement"](_V41/*res*/), _V42/*undefined*/, {"dynamic": true});;
_V244/*errRes*/["resolve"](_V249/*dynRes*/);;

}else{
_V50/*tempRes*/ = _V44/*self*/["newResult"]();
_V17/*par*/["result"] = _V50/*tempRes*/;;
_V244/*errRes*/["resolve"](_V11/*promiseland*/["classSystem"][_V101/*parFun*/](_V17/*par*/));;
};
;
;
}));;
return _V244/*errRes*/;;
;
});;
this["isTrackedClassConRes"] = (function(_V64/*parType*/){
var _V44/*self*/;
var _V41/*res*/;
;
_V44/*self*/ = this;
if(_V64/*parType*/["isDynamic"]){
_V41/*res*/ = _V44/*self*/["newResult"]();
_V44/*self*/["common"]["useClassSystem"] = true;;
_V41/*res*/["push"]("classSystem.isTrackedClass");;
_V41/*res*/["push"]("(");;
_V41/*res*/["push"](_V44/*self*/["renderType"](_V64/*parType*/));;
_V41/*res*/["push"](")");;
return _V41/*res*/;;
};
;
return _V13/*classSystem*/["isTrackedClass"](_V64/*parType*/);;
;
});;
this["createConditionalCode"] = (function(_V250/*parTrueRes*/, _V251/*parFalseRes*/){
var _V44/*self*/;
var _V252/*isDecided*/;
var _V253/*conditions*/;
var _V41/*res*/;
;
_V44/*self*/ = this;
_V250/*parTrueRes*/ = (_V250/*parTrueRes*/ || this["newResult"]());;
_V251/*parFalseRes*/ = (_V251/*parFalseRes*/ || this["newResult"]());;
_V252/*isDecided*/ = false;
_V253/*conditions*/ = [];
_V41/*res*/ = this["newResult"]();
_V41/*res*/["replace"](_V251/*parFalseRes*/);;
return {"res": _V41/*res*/,
"addCondition": (function(_V96/*parCondition*/){
var _V254/*ifRes*/;
var _V27/*i*/;
var _V249/*dynRes*/;
;
if(_V252/*isDecided*/){
return;;
};
;
if((_V96/*parCondition*/ === true)){
_V252/*isDecided*/ = true;;
_V41/*res*/["replace"](_V250/*parTrueRes*/);;
return;;
};
;
if((_V96/*parCondition*/ === false)){
return;;
};
;
_V253/*conditions*/["push"](_V96/*parCondition*/);;
_V254/*ifRes*/ = _V44/*self*/["newResult"]();
_V254/*ifRes*/["push"]("((");;
_V27/*i*/ = 0;
for(_V27/*i*/ = 0;(_V27/*i*/ < _V253/*conditions*/["length"]);++_V27/*i*/){{if(_V27/*i*/){
_V254/*ifRes*/["push"](" && ");;
};
;
_V254/*ifRes*/["push"](_V253/*conditions*/[_V27/*i*/]);;
}};
;
_V254/*ifRes*/["push"](") ? (");;
_V254/*ifRes*/["push"](_V44/*self*/["makeCompleteStatementDynamic"](_V250/*parTrueRes*/));;
_V254/*ifRes*/["push"](") : (");;
_V254/*ifRes*/["push"](_V44/*self*/["makeCompleteStatementDynamic"](_V251/*parFalseRes*/));;
_V254/*ifRes*/["push"]("))");;
_V249/*dynRes*/ = _V44/*self*/["newResult"]();
_V249/*dynRes*/["push"](_V44/*self*/["makeCompleteStatement"](_V254/*ifRes*/), _V42/*undefined*/, {"dynamic": true});;
_V41/*res*/["replace"](_V249/*dynRes*/);;
;
})};;
;
});;
this["isTrackedClass"] = (function(_V64/*parType*/){
;
return _V13/*classSystem*/["isTrackedClass"](_V64/*parType*/);;
;
});;
this["createTemporaryTrackedClass"] = (function(_V64/*parType*/, _V55/*parParsed*/){
;
if(_V64/*parType*/["isDynamic"]){
return this["createExtraDynamicType"](_V64/*parType*/, {"temporaryTracked": true}, _V55/*parParsed*/);;
};
;
return _V13/*classSystem*/["_createTemporaryTrackedClass"](_V64/*parType*/);;
;
});;
this["parseAsType"] = (function(_V64/*parType*/, _V17/*par*/){
var _V167/*value*/;
;
_V167/*value*/ = this["parseExpression"](_V17/*par*/);
return this["getPassAsTypeCode"]({"value": _V167/*value*/,
"valueType": _V167/*value*/["getType"](),
"type": _V64/*parType*/,
"errorFun": this["getWarningFun"](_V17/*par*/),
"parsed": _V17/*par*/});;
;
});;
this["getPassAsTypeCode"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"](this["callClassSystem"]("getPassAsTypeCode", {"type": _V17/*par*/["type"],
"value": _V17/*par*/["value"],
"valueType": this["getResultType"](_V17/*par*/["value"], _V17/*par*/),
"errorFun": _V17/*par*/["errorFun"]}));;
_V41/*res*/["setType"](_V17/*par*/["type"]);;
return _V41/*res*/;;
;
});;
this["getDestroyTemporaryClassCode"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V167/*value*/;
var _V255/*valueType*/;
;
_V41/*res*/ = this["newResult"]();
_V167/*value*/ = _V17/*par*/["value"];
_V255/*valueType*/ = _V167/*value*/["getType"]();
_V41/*res*/["push"](this["callClassSystem"]("getDestroyTemporaryClassCode", {"value": _V167/*value*/,
"valueType": _V167/*value*/["getType"](),
"errorFun": _V17/*par*/["errorFun"],
"noValueRequired": (_V17/*par*/ ? _V17/*par*/["noValueRequired"] : _V42/*undefined*/)}));;
_V41/*res*/["setType"](this["getClassFromTemporaryTracked"](_V255/*valueType*/, _V167/*value*/["getParsed"]()));;
return _V41/*res*/;;
;
});;
this["getClassFromTemporaryTracked"] = (function(_V64/*parType*/, _V55/*parParsed*/){
var _V44/*self*/;
var _V256/*resType*/;
;
_V44/*self*/ = this;
if(_V64/*parType*/["isDynamic"]){
return this["createExtraDynamicType"](_V64/*parType*/, {"temporaryTrackedResolved": true}, _V55/*parParsed*/);;
};
;
_V256/*resType*/ = this["getProvisionalType"](_V55/*parParsed*/, _V55/*parParsed*/);
_V13/*classSystem*/["definitionPromise"](_V64/*parType*/)["then"]((function(_V257/*parDefinedType*/){
;
_V44/*self*/["resolveProvisional"](_V256/*resType*/, _V13/*classSystem*/["getClassFromTemporaryTracked"](_V257/*parDefinedType*/));;
;
}));;
return _V256/*resType*/;;
;
});;
this["getSetPropertyCode"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"](this["callClassSystem"]("getSetPropertyCode", {"instance": _V17/*par*/["instance"],
"type": this["getResultType"](_V17/*par*/["instance"]),
"property": _V17/*par*/["property"],
"propertyValue": _V17/*par*/["propertyValue"],
"computed": _V17/*par*/["computed"],
"value": _V17/*par*/["value"],
"valueType": this["getResultType"](_V17/*par*/["value"]),
"operator": (_V17/*par*/["operator"] || "="),
"errorFun": _V17/*par*/["errorFun"]}));;
_V41/*res*/["setType"](this["getPropertyType"]({"type": this["getResultType"](_V17/*par*/["instance"]),
"property": _V17/*par*/["property"]}, _V17/*par*/["instance"]));;
return _V41/*res*/;;
;
});;
this["getSetVariableCode"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"](this["callClassSystem"]("getSetVariableCode", {"instance": _V17/*par*/["instance"],
"type": this["getResultType"](_V17/*par*/["instance"]),
"value": _V17/*par*/["value"],
"valueType": this["getResultType"](_V17/*par*/["value"]),
"operator": (_V17/*par*/["operator"] || "="),
"errorFun": _V17/*par*/["errorFun"],
"assignmentType": _V17/*par*/["assignmentType"]}));;
_V41/*res*/["setType"](this["getClassFromTemporaryTracked"](this["getResultType"](_V17/*par*/["value"]), _V17/*par*/["value"]["getParsed"]()));;
return _V41/*res*/;;
;
});;
this["declareReturnPromiseCode"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
this["common"]["usePromise"] = true;;
_V41/*res*/["push"](this["callClassSystem"]("declareReturnPromiseCode", {"type": _V17/*par*/["type"],
"name": _V17/*par*/["name"],
"constructorName": _V17/*par*/["constructorName"],
"errorFun": _V17/*par*/["errorFun"],
"parsed": _V17/*par*/["parsed"]}));;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["returnReturnPromiseCode"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"](this["callClassSystem"]("returnReturnPromiseCode", {"type": _V17/*par*/["type"],
"name": _V17/*par*/["name"],
"errorFun": _V17/*par*/["errorFun"],
"parsed": _V17/*par*/["parsed"]}));;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["getDeclareVariableCode"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"](this["callClassSystem"]("getDeclareVariableCode", {"type": _V17/*par*/["type"],
"name": _V17/*par*/["name"],
"errorFun": _V17/*par*/["errorFun"],
"parsed": _V17/*par*/["parsed"]}));;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["getProcessParameterCode"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"](this["callClassSystem"]("getProcessParameterCode", {"type": _V17/*par*/["type"],
"name": _V17/*par*/["name"],
"errorFun": _V17/*par*/["errorFun"],
"parsed": _V17/*par*/["parsed"]}));;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["getDestroyVariableCode"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"](this["callClassSystem"]("getDestroyVariableCode", {"type": _V17/*par*/["type"],
"name": _V17/*par*/["name"],
"errorFun": _V17/*par*/["errorFun"],
"parsed": _V17/*par*/["parsed"]}));;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["connectFunCode"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"](this["callClassSystem"]("getConnectCode", {"instance": _V17/*par*/["signalObject"],
"type": this["getResultType"](_V17/*par*/["signalObject"]),
"property": _V17/*par*/["signalProperty"],
"value": _V17/*par*/["fun"],
"valueType": this["getResultType"](_V17/*par*/["fun"]),
"errorFun": _V17/*par*/["errorFun"]}));;
_V41/*res*/["setType"]("var");;
return _V41/*res*/;;
;
});;
this["connectSlotCode"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"](this["callClassSystem"]("getConnectCode", {"instance": _V17/*par*/["signalObject"],
"type": this["getResultType"](_V17/*par*/["signalObject"]),
"property": _V17/*par*/["signalProperty"],
"value": _V17/*par*/["slotObject"],
"valueType": this["getResultType"](_V17/*par*/["slotObject"]),
"valueProperty": _V17/*par*/["slotProperty"],
"errorFun": _V17/*par*/["errorFun"]}));;
_V41/*res*/["setType"]("var");;
return _V41/*res*/;;
;
});;
this["dereferencePromisePreCode"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"](this["callClassSystem"]("dereferencePromisePreCode", {"value": _V17/*par*/["value"],
"valueType": this["getResultType"](_V17/*par*/["value"]),
"errorFun": _V17/*par*/["errorFun"]}));;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["dereferencePromisePostCode"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"](this["callClassSystem"]("dereferencePromisePostCode", {"value": _V17/*par*/["value"],
"valueType": this["getResultType"](_V17/*par*/["value"]),
"errorFun": _V17/*par*/["errorFun"]}));;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["promisingReturnTypeCheck"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"](this["callClassSystem"]("promisingReturnTypeCheck", {"type": _V17/*par*/["type"],
"errorFun": _V17/*par*/["errorFun"],
"parsed": _V17/*par*/["parsed"]}));;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["getClassFromPromiseOf"] = (function(_V64/*parType*/){
;
return _V13/*classSystem*/["getClassFromPromiseOf"](_V64/*parType*/);;
;
});;
this["getPropertyType"] = (function(_V17/*par*/, _V55/*parParsed*/){
var _V63/*type*/;
var _V44/*self*/;
var _V51/*r*/;
;
_V63/*type*/ = _V17/*par*/["type"];
_V44/*self*/ = this;
if(_V63/*type*/["isDynamic"]){
return this["createExtraDynamicType"](_V63/*type*/, {"property": _V17/*par*/["property"]}, _V55/*parParsed*/);;

}else{
_V51/*r*/ = this["getProvisionalType"](_V55/*parParsed*/);
_V13/*classSystem*/["readyPromise"](_V17/*par*/["type"])["then"]((function(_V144/*resultType*/){
;
_V44/*self*/["resolveProvisional"](_V51/*r*/, _V11/*promiseland*/["classSystem"]["getPropertyType"]({"type": _V144/*resultType*/,
"property": _V17/*par*/["property"]}));;
;
}));;
return _V51/*r*/;;
};
;
;
});;
this["getConstructorType"] = (function(_V17/*par*/, _V55/*parParsed*/){
var _V63/*type*/;
var _V44/*self*/;
var _V51/*r*/;
;
_V63/*type*/ = _V17/*par*/["type"];
_V44/*self*/ = this;
if(_V63/*type*/["isDynamic"]){
return this["createExtraDynamicType"](_V63/*type*/, {"property": "constructor"}, _V55/*parParsed*/);;

}else{
_V51/*r*/ = this["getProvisionalType"](_V55/*parParsed*/);
_V13/*classSystem*/["readyPromise"](_V17/*par*/["type"])["then"]((function(_V144/*resultType*/){
;
try
{_V44/*self*/["resolveProvisional"](_V51/*r*/, _V11/*promiseland*/["classSystem"]["getConstructorType"]({"type": _V144/*resultType*/}));;
}catch(e){_V44/*self*/["error"](_V55/*parParsed*/, _V235/*e*/);;
};
;
;
}));;
return _V51/*r*/;;
};
;
;
});;
this["getGetPropertyCode"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"](this["callClassSystem"]("getGetPropertyCode", {"instance": _V17/*par*/["instance"],
"type": this["getResultType"](_V17/*par*/["instance"]),
"property": _V17/*par*/["property"],
"propertyValue": _V17/*par*/["propertyValue"],
"errorFun": _V17/*par*/["errorFun"]}));;
if(_V17/*par*/["property"]){
_V41/*res*/["setType"](this["getPropertyType"]({"type": this["getResultType"](_V17/*par*/["instance"]),
"property": _V17/*par*/["property"]}, _V17/*par*/["instance"]));;

}else{
_V41/*res*/["setType"]("var");;
};
;
return _V41/*res*/;;
;
});;
this["getBinaryExpressionCode"] = (function(_V17/*par*/){
var _V41/*res*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"](this["callClassSystem"]("getBinaryExpressionCode", {"left": _V17/*par*/["left"],
"leftType": this["getResultType"](_V17/*par*/["left"]),
"right": _V17/*par*/["right"],
"rightType": this["getResultType"](_V17/*par*/["right"]),
"operator": _V17/*par*/["operator"],
"errorFun": _V17/*par*/["errorFun"]}));;
_V41/*res*/["setType"]("var");;
return _V41/*res*/;;
;
});;
this["expAssignmentExpression"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V229/*base*/;
var _V35/*property*/;
var _V258/*propertyValue*/;
;
_V41/*res*/ = this["newResult"]();
if((_V17/*par*/["left"]["type"] == "MemberExpression")){
_V229/*base*/ = this["parseExpression"](_V17/*par*/["left"]["object"]);
_V35/*property*/;
_V258/*propertyValue*/;
if(_V17/*par*/["left"]["computed"]){
_V258/*propertyValue*/ = this["expectTypeVar"](this["parseExpression"](_V17/*par*/["left"]["property"]));;

}else{
_V35/*property*/ = _V30/*identifierName*/(_V17/*par*/["left"]["property"]);;
};
;
_V41/*res*/["pushType"](this["getSetPropertyCode"]({"instance": _V229/*base*/,
"propertyValue": _V258/*propertyValue*/,
"property": _V35/*property*/,
"computed": _V17/*par*/["left"]["computed"],
"value": this["parseExpression"](_V17/*par*/["right"]),
"operator": _V17/*par*/["operator"],
"errorFun": this["getWarningFun"](_V17/*par*/)}));;

}else{
_V41/*res*/["pushType"](this["getSetVariableCode"]({"instance": this["parseExpression"](_V17/*par*/["left"]),
"assignmentType": _V17/*par*/["left"]["type"],
"value": this["parseExpression"](_V17/*par*/["right"]),
"operator": _V17/*par*/["operator"],
"errorFun": this["getWarningFun"](_V17/*par*/)}));;
};
;
return _V41/*res*/;;
;
});;
this["isCallableType"] = (function(){
;
;
});;
this["expCallExpression"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V27/*i*/;
var _V81/*l*/;
var _V259/*calleeRes*/;
var _V260/*args*/;
var _V261/*argType*/;
var _V262/*argRes*/;
;
_V41/*res*/ = this["newResult"]();
_V27/*i*/ = 0;
_V81/*l*/;
_V259/*calleeRes*/ = this["parseExpression"](_V17/*par*/["callee"]);
_V260/*args*/ = [];
if(_V17/*par*/["arguments"]){
_V81/*l*/ = _V17/*par*/["arguments"]["length"];;
for(_V27/*i*/ = 0;(_V27/*i*/ < _V81/*l*/);++_V27/*i*/){{_V261/*argType*/ = this["getFunctionArgumentType"](_V259/*calleeRes*/["getType"](), _V27/*i*/, _V17/*par*/["arguments"][_V27/*i*/]);
_V262/*argRes*/ = this["parseExpression"](_V17/*par*/["arguments"][_V27/*i*/]);
_V262/*argRes*/ = this["getPassAsTypeCode"]({"value": _V262/*argRes*/,
"valueType": _V262/*argRes*/["getType"](),
"type": _V261/*argType*/,
"errorFun": this["getWarningFun"](_V17/*par*/)});;
_V260/*args*/["push"]({"type": _V262/*argRes*/["getType"](),
"value": _V262/*argRes*/});;
}};
;
};
;
_V41/*res*/["push"](this["callClassSystem"]("getCallCode", {"type": _V259/*calleeRes*/["getType"](),
"instance": _V259/*calleeRes*/,
"arguments": _V260/*args*/}));;
_V41/*res*/["setType"](this["getFunctionReturnType"](_V259/*calleeRes*/["getType"](), _V17/*par*/));;
return _V41/*res*/;;
;
});;
this["getFunctionReturnType"] = (function(_V64/*parType*/, _V61/*parsed*/){
var _V25/*t*/;
var _V44/*self*/;
;
_V25/*t*/ = this["getProvisionalType"](_V61/*parsed*/);
_V44/*self*/ = this;
_V13/*classSystem*/["readyPromise"](_V64/*parType*/)["then"]((function(_V263/*newt*/){
;
_V44/*self*/["resolveProvisional"](_V25/*t*/, _V13/*classSystem*/["getFunctionReturnType"](_V263/*newt*/, _V61/*parsed*/));;
;
}));;
return _V25/*t*/;;
;
});;
this["getFunctionArgumentCount"] = (function(_V64/*parType*/, _V61/*parsed*/){
;
return _V13/*classSystem*/["getFunctionArgumentCount"](_V64/*parType*/);;
;
});;
this["isVar"] = (function(_V64/*parType*/){
;
if((typeof _V64/*parType*/ == "function")){
return _V13/*classSystem*/["isVar"](_V64/*parType*/);;
};
;
return false;;
;
});;
this["expInheritedExpression"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V27/*i*/;
var _V81/*l*/;
var _V260/*args*/;
var _V262/*argRes*/;
;
if(! this["inheritedAvailable"]){
this["error"](_V17/*par*/, _V12/*errorMsg*/["inheritedOnlyInMember"]);;
return;;
};
;
_V41/*res*/ = this["newResult"]();
_V27/*i*/ = 0;
_V81/*l*/;
_V41/*res*/["push"](this["inheritedSystem"]["getCurrent"]());;
_V41/*res*/["push"](".apply(this");;
_V260/*args*/ = [];
if(_V17/*par*/["arguments"]){
_V41/*res*/["push"](", [");;
_V81/*l*/ = _V17/*par*/["arguments"]["length"];;
for(_V27/*i*/ = 0;(_V27/*i*/ < _V81/*l*/);++_V27/*i*/){{if(_V27/*i*/){
_V41/*res*/["push"](", ");;
};
;
_V262/*argRes*/ = this["expectTypeVar"](this["parseExpression"](_V17/*par*/["arguments"][_V27/*i*/]));
_V41/*res*/["push"](_V262/*argRes*/);;
}};
;
_V41/*res*/["push"]("]");;

}else{
if(_V17/*par*/["expression"]){
_V41/*res*/["push"](", ");;
this["expectTypeVar"](this["parseExpression"](_V17/*par*/["expression"]));;
};
};
;
_V41/*res*/["push"](")");;
_V41/*res*/["setType"]("var");;
return _V41/*res*/;;
;
});;
this["expArrayExpression"] = (function(_V17/*par*/){
var _V41/*res*/;
var _V27/*i*/;
var _V81/*l*/;
;
_V41/*res*/ = this["newResult"]();
_V41/*res*/["push"]("[");;
_V27/*i*/ = 0;
_V81/*l*/ = ((_V17/*par*/["elements"] && _V17/*par*/["elements"]["length"]) || 0);
for(_V27/*i*/;(_V27/*i*/ < _V81/*l*/);++_V27/*i*/){{if(_V27/*i*/){
_V41/*res*/["push"](", ");;
};
;
_V41/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V17/*par*/["elements"][_V27/*i*/])));;
}};
;
_V41/*res*/["push"]("]");;
_V41/*res*/["setType"]("var");;
return _V41/*res*/;;
;
});;
this["expReturnStatement"] = (function(_V17/*par*/, _V264/*closingFun*/){
var _V41/*res*/;
var _V105/*valueRes*/;
var _V265/*passAsType*/;
var _V233/*v*/;
;
if(this["preventreturn"]){
this["error"](_V17/*par*/, _V12/*errorMsg*/["returnNotAllowedHere"]);;
};
;
_V41/*res*/ = this["newResult"]();
_V105/*valueRes*/;
if(_V17/*par*/["argument"]){
_V105/*valueRes*/ = this["newResult"]();;
_V265/*passAsType*/ = this["getReturnType"]();
if(this["promising"]){
_V265/*passAsType*/ = this["getClassFromPromiseOf"](_V265/*passAsType*/);;
};
;
_V265/*passAsType*/ = this["createTemporaryTrackedClass"](_V265/*passAsType*/);;
_V233/*v*/ = this["parseExpression"](_V17/*par*/["argument"]);
_V105/*valueRes*/["push"](this["getPassAsTypeCode"]({"value": _V233/*v*/,
"valueType": _V233/*v*/["getType"](),
"type": _V265/*passAsType*/,
"errorFun": this["getWarningFun"](_V17/*par*/)}));;
};
;
_V41/*res*/["push"](this["getReturnCode"]({"return": true,
"value": _V105/*valueRes*/}));;
_V41/*res*/["setType"](_V14/*statementType*/);;
return _V41/*res*/;;
;
});;
this["_start"]();;
;
});
_V266/*loaderStr*/ = (function(_V17/*par*/){
var _V45/*resStr*/;
;
_V45/*resStr*/ = "";
_V45/*resStr*/ += "(function(){\n  var defineFun;\n  var requireFun;\n  \n  if (typeof exports == \"object\" && typeof module == \"object\"){ // CommonJS\n    requireFun = function(modulesAr, callback){\n      var i = 0;\n      var l = modulesAr.length;\n      var args = [];\n      for (i; i < l; ++i){\n        args.push(require(modulesAr[i]));\n      };\n      callback.apply(callback, args);\n    };\n    defineFun = function(requireAr, callback){\n      requireFun(requireAr, function(){\n        module.exports = callback.apply(callback, arguments);\n      });\n    };\n    \n  }else if (typeof define == \"function\" && define.amd){ // AMD\n    var _define = define;\n    requireFun = require;\n    \n    defineFun = function(par1, par2){\n      if (par1 instanceof Array){\n        par1.unshift(\"require\");\n      }else{\n        par2 = par1;\n        par1 = [\"require\"];\n      };\n      _define(par1, function(){\n        requireFun = arguments[0];\n        var args = [];\n        for (var i = 1; i < arguments.length; ++i){\n          args.push(arguments[i]);\n        };\n        return par2.apply(par2, args);\n      });\n    };\n    requireFun = require;\n    \n  }else{ // Plain browser env\n    alert(\"not working out!\");\n    \n  };\n  \n";;
if(_V17/*par*/["promiseLandModule"]){
_V45/*resStr*/ += "defineFun([], function(){ var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;\n";;

}else{
_V45/*resStr*/ += "defineFun([\"promiseland\"], function(promiseland){ var __require = requireFun;\n";;
};
;
_V45/*resStr*/ += "\n";;
if((_V17/*par*/["usePromise"] || _V17/*par*/["useRequire"])){
_V45/*resStr*/ += "var __Promise = promiseland.Promise;\n";;
_V45/*resStr*/ += "var Promise = promiseland.Promise;\n";;
};
;
if(_V17/*par*/["useClassSystem"]){
_V45/*resStr*/ += "var classSystem = promiseland.classSystem;\n";;
};
;
if(_V17/*par*/["useRequire"]){
_V45/*resStr*/ += "var __requireFun = function(parModule){\n    var returnPromise = new __Promise();\n    try{__require([parModule], function(m){\n    if (promiseland.isPromiseLandPromisingModule(m)){\n      m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});\n    }else{\n      returnPromise.resolve(m);\n    };\n    });\n    }catch(e){returnPromise.reject(e);};\n    return returnPromise.promise;};\n";;
};
;
return _V45/*resStr*/;;
;
});
_V267/*promiselandRequireStr*/ = (function(){
;
return "";;
;
});
_V268/*callbackRequireStr*/ = (function(){
;
return "var Callback = promiseland.Callback;\n";;
;
});
_V269/*loaderEndStr*/ = (function(_V17/*par*/){
;
if(_V17/*par*/["promiseLandModule"]){
return "}; return function(){ return __execute.apply(null, arguments); } });\n})();";;

}else{
return "});\n})();";;
};
;
;
});
_V270/*createHeader*/ = (function(_V17/*par*/){
var _V45/*resStr*/;
var _V271/*loaderParam*/;
;
if(_V9/*_pureCode*/){
return "";;
};
;
_V45/*resStr*/ = "";
_V271/*loaderParam*/ = {"usePromise": _V17/*par*/["usePromise"],
"useRequire": _V17/*par*/["useRequire"],
"useClassSystem": _V17/*par*/["useClassSystem"]};
if(_V17/*par*/["makePromiseLandModule"]){
_V271/*loaderParam*/["promiseLandModule"] = true;;
};
;
_V45/*resStr*/ += _V266/*loaderStr*/(_V271/*loaderParam*/);;
_V45/*resStr*/ += _V267/*promiselandRequireStr*/();;
if(_V17/*par*/["useCallback"]){
_V45/*resStr*/ += _V268/*callbackRequireStr*/();;
};
;
_V45/*resStr*/ += (((("if (promiseland._hasModule({ hashStr: \"" + _V17/*par*/["hashStr"]) + "\" })){ return promiseland._getModule(\"") + _V17/*par*/["hashStr"]) + "\"); };\n");;
return _V45/*resStr*/;;
;
});
_V272/*createFooter*/ = (function(_V17/*par*/){
var _V45/*resStr*/;
;
if(_V9/*_pureCode*/){
return "";;
};
;
_V45/*resStr*/ = "";
if(_V17/*par*/["makePromiseLandModule"]){
_V45/*resStr*/ += _V269/*loaderEndStr*/({"promiseLandModule": true});;

}else{
_V45/*resStr*/ += _V269/*loaderEndStr*/({});;
};
;
return _V45/*resStr*/;;
;
});
_V273/*parser*/ = {"parse": (function(_V274/*promiselandCodeStr*/){
var _V29/*p*/;
var _V273/*parser*/;
var _V275/*hashStr*/;
var _V61/*parsed*/;
var _V45/*resStr*/;
var _V169/*cp*/;
var _V41/*res*/;
var _V276/*parsingConfig*/;
var _V277/*makePromiseLandModule*/;
var _V278/*result*/;
var _V279/*programStr*/;
var _V280/*mainPartStr*/;
;
_V29/*p*/ = new _V11/*promiseland*/["Promise"]();
_V273/*parser*/ = _V7/*_parser*/;
_V275/*hashStr*/ = _V5/*md5*/(_V274/*promiselandCodeStr*/);
_V61/*parsed*/ = _V273/*parser*/["parse"](_V274/*promiselandCodeStr*/);
_V45/*resStr*/ = "";
_V169/*cp*/;
_V41/*res*/ = {};
if((_V61/*parsed*/["length"] === _V42/*undefined*/)){
if((_V61/*parsed*/["type"] == "Program")){
_V276/*parsingConfig*/ = _V61/*parsed*/["config"];
_V169/*cp*/ = new _V47/*CodeParser*/({"toParse": _V61/*parsed*/,
"hashStr": _V275/*hashStr*/});;
_V277/*makePromiseLandModule*/ = false;
if(_V276/*parsingConfig*/){
_V277/*makePromiseLandModule*/ = _V169/*cp*/["getTemplateProperty"](_V276/*parsingConfig*/, "__promiseLandModule", "Literal");;
if((_V277/*makePromiseLandModule*/ && (_V277/*makePromiseLandModule*/["value"] === true))){
_V277/*makePromiseLandModule*/ = true;;

}else{
_V277/*makePromiseLandModule*/ = false;;
};
;
};
;
_V278/*result*/ = _V169/*cp*/["getResult"]();
_V279/*programStr*/ = ((_V278/*result*/["getPreCodeStr"]() + _V278/*result*/["getCodeStr"]()) + _V278/*result*/["getPostCodeStr"]());
_V41/*res*/["warnings"] = _V169/*cp*/["getWarnings"]();;
_V41/*res*/["errors"] = _V169/*cp*/["getErrors"]();;
_V280/*mainPartStr*/ = "";
if(_V9/*_pureCode*/){
_V45/*resStr*/ = _V279/*programStr*/;;

}else{
if(_V169/*cp*/["programPromiseStr"]){
_V280/*mainPartStr*/ += (((("var " + _V169/*cp*/["programPromiseStr"]) + " = ") + _V169/*cp*/["newPromiseStr"]()) + ";\n");;
_V280/*mainPartStr*/ += (((("promiseland._registerModule({ hashStr: \"" + _V275/*hashStr*/) + "\", \"module\": ") + _V169/*cp*/["programPromiseStr"]) + ", promising: true });\n");;
_V280/*mainPartStr*/ += _V279/*programStr*/;;
_V280/*mainPartStr*/ += (";\nreturn " + _V169/*cp*/["programPromiseStr"]);;

}else{
_V280/*mainPartStr*/ += _V279/*programStr*/;;
_V280/*mainPartStr*/ += (("return " + _V169/*cp*/["resultNameStr"]) + ";\n");;
};
;
_V45/*resStr*/ += _V270/*createHeader*/({"makePromiseLandModule": _V277/*makePromiseLandModule*/,
"hashStr": _V275/*hashStr*/,
"usePromise": _V169/*cp*/["common"]["usePromise"],
"useRequire": _V169/*cp*/["common"]["useRequire"],
"useCallback": _V169/*cp*/["common"]["useCallback"],
"useClassSystem": _V169/*cp*/["common"]["useClassSystem"]});;
_V45/*resStr*/ += _V280/*mainPartStr*/;;
_V45/*resStr*/ += _V272/*createFooter*/({"makePromiseLandModule": _V277/*makePromiseLandModule*/});;
};
;

}else{
this["error"](_V61/*parsed*/, _V12/*errorMsg*/["unknownType"]);;
};
;

}else{
_V16/*errorFun*/(_V61/*parsed*/, _V12/*errorMsg*/["severalProgramElements"]);;
};
;
if(! (_V41/*res*/["errors"] && _V41/*res*/["errors"]["length"])){
_V41/*res*/["javascript"] = _V45/*resStr*/;;
};
;
_V29/*p*/["resolve"](_V41/*res*/);;
return _V29/*p*/["promise"];;
;
})};
_V12/*errorMsg*/ = {"typeExists": {"id": 100,
"msg": "type already exists"},
"needsClassBodyLiteral": {"id": 101,
"msg": "class types need to be defined with a literal body"},
"usedUntyped": {"id": 102,
"msg": "variable already in use without type"},
"variableRedefinition": {"id": 103,
"msg": "ilegal variable redefinition"},
"expectedVar": {"id": 104,
"msg": "type missmatch: expected var"},
"typeUndeclared": {"id": 105,
"msg": "type undeclared"},
"notABlockStatment": {"id": 106,
"msg": "not a block statement"},
"missingDeclarations": {"id": 107,
"msg": "missing Declarations"},
"functionFrameInDynamicCode": {"id": 108,
"msg": "function frame is not allowed in dynamic code"},
"unknownIfStatement": {"id": 109,
"msg": "unknown if statement "},
"unknownElseStatement": {"id": 109,
"msg": "unknown else statement "},
"unknownPropertyAssignmentType": {"id": 110,
"msg": "unknown property assignment"},
"severalProgramElements": {"id": 111,
"msg": "several Program Elements"},
"variableHasNoType": {"id": 112,
"msg": "variable has no type"},
"expectedCallable": {"id": 113,
"msg": "expected callable expression"},
"typeLookupFailed": {"id": 114,
"msg": "type lookup failed"},
"dynamicTypeCantBeDefined": {"id": 115,
"msg": "dynamic type can not be defined"},
"typeRedefinition": {"id": 116,
"msg": "type redefinition"},
"unresolvedType": {"id": 117,
"msg": "unresolved Type"},
"inheritedOnlyInMember": {"id": 118,
"msg": "inherited is only available within member functions"},
"expectedMemberExpression": {"id": 119,
"msg": "expected member expression"},
"noComputedMembersAllowed": {"id": 120,
"msg": "no computed member allowed here"},
"unknownConnect": {"id": 121,
"msg": "unknown connect"},
"returnNotAllowedHere": {"id": 122,
"msg": "return not allowed here"},
"unknownCase": {"id": 123,
"msg": "unknown case"},
"templateSyntaxError": {"id": 400,
"msg": "template syntax error"},
"internalMissingResultType": {"id": 1000,
"msg": "internal: result type missing"},
"differentTypesInVariableDeclaration": {"id": 1001,
"msg": "internal: different type in variable declaration"},
"notImplemented": {"id": 1002,
"msg": "internal: not implemented"},
"internalUnknownLiteralType": {"id": 1003,
"msg": "internal: unknown literal type"},
"internalMissingType": {"id": 1004,
"msg": "internal: missing type"},
"unknownType": {"id": 1005,
"msg": "internal: unknown script element type"},
"multipleTypeProviding": {"id": 1006,
"msg": "internal: multiple types provided",
"additional": "pls provide this error in a github issue"},
"internalMissingTypeProperty": {"id": 1007,
"msg": "internal: missing type property",
"additional": "pls provide this error in a github issue"},
"internalCantAddToStringResult": {"id": 1008,
"msg": "internal: can not add to string result",
"additional": "pls provide this error in a github issue"},
"internalWrongUseOfReference": {"id": 1009,
"msg": "internal: wrong use of Reference",
"additional": "pls provide this error in a github issue"},
"internalNegativeStringEncode": {"id": 1010,
"msg": "internal: negative string encode",
"additional": "pls provide this error in a github issue"},
"internalTypeHasNoName": {"id": 1011,
"msg": "internal: type has no name",
"additional": "pls provide this error in a github issue"},
"internalParserInfoMissing": {"id": 1012,
"msg": "internal: missing parser info",
"additional": "pls provide this error in a github issue"}};;
_V1.resolve(_V273/*parser*/); return;;
_V1.resolve(); return;;
}));}));})();
return _V1;
})();
;;
return _V1});
})();