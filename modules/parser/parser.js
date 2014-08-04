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
if (promiseland._hasModule({ hashStr: "ed54dd6e8940dbdff84660ce2c22ffa0" })){ return promiseland._getModule("ed54dd6e8940dbdff84660ce2c22ffa0"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "ed54dd6e8940dbdff84660ce2c22ffa0", "module": _V1, promising: true });
var _V17/*promiseland*/;try{_V17/*promiseland*/ = promiseland;}catch(e){};
var _V46/*undefined*/;try{_V46/*undefined*/ = undefined;}catch(e){};
var _V159/*JSON*/;try{_V159/*JSON*/ = JSON;}catch(e){};
var _V172/*Array*/;try{_V172/*Array*/ = Array;}catch(e){};
var _V173/*console*/;try{_V173/*console*/ = console;}catch(e){};
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*md5*/;
var _V7/*_parser*/;
var _V9/*basics*/;
var _V11/*errorFun*/;
var _V12/*errorMsg*/;
var _V13/*_stringEncodeStr*/;
var _V14/*stringEncodeStr*/;
var _V15/*_pureCode*/;
var _V16/*Promise*/;
var _V18/*classSystem*/;
var _V19/*statementType*/;
var _V20/*varType*/;
var _V21/*globalNewPromiseStr*/;
var _V22/*mixin*/;
var _V28/*identifierName*/;
var _V30/*checkIsFunction*/;
var _V31/*findPromises*/;
var _V32/*checkPromising*/;
var _V33/*addExtraToPar*/;
var _V36/*getExtraFromPar*/;
var _V37/*_Result*/;
var _V39/*CodeParser*/;
var _V272/*loaderStr*/;
var _V274/*promiselandRequireStr*/;
var _V275/*callbackRequireStr*/;
var _V276/*loaderEndStr*/;
var _V277/*createHeader*/;
var _V279/*createFooter*/;
var _V280/*parser*/;
_V3(function(){;
__requireFun("./md5").then(_V3(function(_V6){_V5/*md5*/ = _V6;
__requireFun("./_parser").then(_V3(function(_V8){_V7/*_parser*/ = _V8;
__requireFun("./basics").then(_V3(function(_V10){_V9/*basics*/ = _V10;
_V11/*errorFun*/ = _V9/*basics*/["errorFun"];
_V12/*errorMsg*/ = _V9/*basics*/["errorMsg"];
_V13/*_stringEncodeStr*/ = _V9/*basics*/["_stringEncodeStr"];
_V14/*stringEncodeStr*/ = _V9/*basics*/["stringEncodeStr"];
_V15/*_pureCode*/ = false;
_V16/*Promise*/ = _V17/*promiseland*/["Promise"];
_V18/*classSystem*/ = _V17/*promiseland*/["classSystem"];
_V19/*statementType*/ = {"builtin": true,
"statement": true};
_V20/*varType*/ = _V18/*classSystem*/["getBuiltinType"]("var");
_V21/*globalNewPromiseStr*/ = (function(){
;
return "new __Promise()";;
;
});
_V22/*mixin*/ = (function(){
var _V23/*t*/;
var _V25/*i*/;
var _V26/*m*/;
var _V27/*p*/;
var _V24/*arguments*/ = arguments;
;
_V23/*t*/ = _V24/*arguments*/[0];
_V25/*i*/ = 0;
for(_V25/*i*/ = 1;(_V25/*i*/ < _V24/*arguments*/["length"]);++_V25/*i*/){{_V26/*m*/ = _V24/*arguments*/[_V25/*i*/];
for(_V27/*p*/ in _V26/*m*/){_V23/*t*/[_V27/*p*/] = _V26/*m*/[_V27/*p*/];;
};
;
}};
;
return _V23/*t*/;;
;
});
_V28/*identifierName*/ = (function(_V29/*par*/){
;
if((typeof _V29/*par*/ == "string")){
return _V29/*par*/;;
};
;
if((_V29/*par*/["type"] == "Literal")){
return _V29/*par*/["value"];;
};
;
return _V29/*par*/["name"];;
;
});
_V30/*checkIsFunction*/ = (function(_V29/*par*/){
;
if((((_V29/*par*/["type"] == "FunctionExpression") || (_V29/*par*/["type"] == "FunctionDeclaration")) || (_V29/*par*/["type"] == "MemberFunction"))){
return true;;
};
;
return false;;
;
});
_V31/*findPromises*/ = (function(_V29/*par*/){
var _V25/*i*/;
;
if((! _V29/*par*/ || (typeof _V29/*par*/ == "string"))){
return false;;
};
;
if(((_V29/*par*/["type"] == "UnaryExpression") && ((_V29/*par*/["operator"] == "*") || (_V29/*par*/["operator"] == "require")))){
_V29/*par*/["promising"] = true;;
};
;
if((_V30/*checkIsFunction*/(_V29/*par*/) && (_V29/*par*/["promise"] == "*"))){
_V29/*par*/["promising"] = true;;
};
;
_V25/*i*/;
for(_V25/*i*/ in _V29/*par*/){if((_V25/*i*/ == "_extrainfo")){
continue;;
};
;
if((_V31/*findPromises*/(_V29/*par*/[_V25/*i*/]) && ! _V30/*checkIsFunction*/(_V29/*par*/[_V25/*i*/]))){
_V29/*par*/["promising"] = true;;
};
;
};
;
if(_V29/*par*/["promising"]){
return true;;
};
;
return false;;
;
});
_V32/*checkPromising*/ = (function(_V29/*par*/){
;
if((! _V29/*par*/ || (typeof _V29/*par*/ == "string"))){
return false;;
};
;
if((typeof _V29/*par*/["isPromising"] == "function")){
return _V29/*par*/["isPromising"]();;
};
;
return (_V29/*par*/["promising"] || _V29/*par*/["isPromising"]);;
;
});
_V33/*addExtraToPar*/ = (function(_V29/*par*/, _V34/*property*/, _V35/*obj*/){
;
if(! _V29/*par*/["_extrainfo"]){
_V29/*par*/["_extrainfo"] = {};;
};
;
_V29/*par*/["_extrainfo"][_V34/*property*/] = _V35/*obj*/;;
;
});
_V36/*getExtraFromPar*/ = (function(_V29/*par*/, _V34/*property*/){
;
if(_V29/*par*/["_extrainfo"]){
return _V29/*par*/["_extrainfo"][_V34/*property*/];;
};
;
;
});
__requireFun("./Result").then(_V3(function(_V38){_V37/*_Result*/ = _V38;
_V39/*CodeParser*/ = (function(_V29/*par*/){
var _V25/*i*/;
var _V237/*InheritedSystem*/;
;
this["toParse"] = _V29/*par*/["toParse"];;
this["dynamicCode"] = _V29/*par*/["dynamicCode"];;
this["hashStr"] = _V29/*par*/["hashStr"];;
if(_V29/*par*/["_locals"]){
for(_V25/*i*/ in _V29/*par*/["_locals"]){this[_V25/*i*/] = _V29/*par*/["_locals"][_V25/*i*/];;
};
;
};
;
if(_V29/*par*/["common"]){
this["common"] = _V29/*par*/["common"];;

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
return _V21/*globalNewPromiseStr*/();;
;
});;
this["types"] = _V22/*mixin*/({}, _V29/*par*/["types"]);;
if(! this["types"]["var"]){
this["types"]["var"] = {"name": "var",
"type": _V18/*classSystem*/["getBuiltinType"]("var")};;
};
this["variables"] = _V22/*mixin*/({}, _V29/*par*/["variables"]);;
this["algorithmicCode"] = false;;
this["stack"] = (function(_V40/*parStr*/){
var _V41/*stackNameStr*/;
;
_V41/*stackNameStr*/ = ("_stack_" + _V40/*parStr*/);
if(! this[_V41/*stackNameStr*/]){
this[_V41/*stackNameStr*/] = [];;
};
;
this[_V41/*stackNameStr*/]["push"](this[_V40/*parStr*/]);;
;
});;
this["unstack"] = (function(_V40/*parStr*/){
var _V41/*stackNameStr*/;
;
_V41/*stackNameStr*/ = ("_stack_" + _V40/*parStr*/);
this[_V40/*parStr*/] = this[_V41/*stackNameStr*/]["pop"]();;
;
});;
this["_start"] = (function(){
var _V42/*tempRes*/;
;
if(this["toParse"]){
if((this["toParse"]["type"] == "Program")){
_V42/*tempRes*/ = this["makeCompleteStatement"](this["parseProgram"](this["toParse"]));
_V42/*tempRes*/["push"](";");;
this["result"] = this["makeCompleteStatement"](_V42/*tempRes*/);;

}else{
if(_V30/*checkIsFunction*/(this["toParse"])){
this["functionRes"] = this["parseFunction"](this["toParse"]);;
this["result"] = this["makeCompleteStatement"](this["functionRes"]);;
};
};
;
};
;
;
});;
this["makeCompleteStatement"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["setComplete"]();;
_V43/*res*/["push"](_V29/*par*/);;
return _V43/*res*/;;
;
});;
this["makeCompleteStatementDynamic"] = (function(_V29/*par*/){
var _V44/*r*/;
var _V45/*d*/;
;
_V44/*r*/ = this["newResult"]();
_V45/*d*/ = this["newResult"]();
_V45/*d*/["push"](this["makeCompleteStatement"](_V29/*par*/), _V46/*undefined*/, {"stringEncode": true});;
_V44/*r*/["push"]("\"");;
_V44/*r*/["push"](_V45/*d*/);;
_V44/*r*/["push"]("\"");;
return _V44/*r*/;;
;
});;
this["compareTypes"] = (function(_V47/*par1*/, _V48/*par2*/){
;
return (_V47/*par1*/ === _V48/*par2*/);;
;
});;
this["localVariables"] = {};;
this["addLocalVariable"] = (function(_V29/*par*/, _V49/*parParsed*/){
var _V50/*self*/;
var _V51/*name*/;
var _V52/*newType*/;
var _V53/*existing*/;
;
_V50/*self*/ = this;
_V51/*name*/ = _V28/*identifierName*/(_V29/*par*/["name"]);
if(this["localVariables"]["hasOwnProperty"](_V51/*name*/)){
if((! _V29/*par*/["type"] && ! _V29/*par*/["typename"])){

}else{
_V52/*newType*/ = (_V29/*par*/["type"] || this["getType"](_V29/*par*/["typename"], _V49/*parParsed*/));
_V53/*existing*/ = this["_getVariableType"](this["localVariables"][_V51/*name*/]);
_V18/*classSystem*/["definitionPromise"](_V52/*newType*/)["then"]((function(_V54/*type1*/){
;
_V18/*classSystem*/["definitionPromise"](_V53/*existing*/)["then"]((function(_V55/*type2*/){
;
if(! _V18/*classSystem*/["isSameType"](_V54/*type1*/, _V55/*type2*/)){
_V50/*self*/["addError"](_V49/*parParsed*/, _V12/*errorMsg*/["variableRedefinition"]);;
};
;
;
}));;
;
}));;
};
;

}else{
this["localVariables"][_V51/*name*/] = {"typename": _V29/*par*/["typename"],
"type": _V29/*par*/["type"],
"name": _V51/*name*/};;
if((! _V29/*par*/["typename"] && ! _V29/*par*/["type"])){
this["localVariables"][_V51/*name*/]["type"] = this["getProvisionalType"](_V49/*parParsed*/);;
this["localVariables"][_V51/*name*/]["needsResolving"] = true;;
};
;
};
;
if(_V29/*par*/["parameter"]){
this["localVariables"][_V51/*name*/]["parameter"] = _V29/*par*/["parameter"];;
};
;
if(_V29/*par*/["isFunction"]){
this["localVariables"][_V51/*name*/]["function"] = _V29/*par*/["function"];;
};
;
this["variables"][_V51/*name*/] = this["localVariables"][_V51/*name*/];;
;
});;
this["addLocalVariableTemporary"] = (function(_V29/*par*/, _V49/*parParsed*/){
var _V50/*self*/;
var _V51/*name*/;
var _V56/*originalEntry*/;
var _V57/*entry*/;
var _V58/*resPs*/;
;
_V50/*self*/ = this;
_V51/*name*/ = _V28/*identifierName*/(_V29/*par*/["name"]);
_V56/*originalEntry*/;
if(this["variables"]["hasOwnProperty"](_V51/*name*/)){
_V56/*originalEntry*/ = this["variables"][_V51/*name*/];;
};
;
_V57/*entry*/ = {"typename": _V29/*par*/["typename"],
"type": _V29/*par*/["type"],
"name": _V51/*name*/};
if((! _V29/*par*/["typename"] && ! _V29/*par*/["type"])){
_V57/*entry*/["type"] = this["getProvisionalType"](_V49/*parParsed*/);;
_V57/*entry*/["needsResolving"] = true;;
};
;
if(_V29/*par*/["parameter"]){
_V57/*entry*/["parameter"] = _V29/*par*/["parameter"];;
};
;
if(_V29/*par*/["isFunction"]){
_V57/*entry*/["function"] = _V29/*par*/["function"];;
};
;
_V57/*entry*/["temporary"] = true;;
this["variables"][_V51/*name*/] = _V57/*entry*/;;
_V58/*resPs*/ = new _V16/*Promise*/();
(function(){
var _V59 = new __Promise();
var _V61 = function(code){ return function(res){ try{code(res);}catch(e){ _V59.reject(e); }; }; };
var _V62 = function(e){ _V59.reject(e); };
var _V64/*this*/ = this;
_V61(function(){;
_V58/*resPs*/.then(_V61(function(_V63){_V63;;
if(_V56/*originalEntry*/){
_V64/*this*/["variables"][_V51/*name*/] = _V56/*originalEntry*/;;

}else{
delete _V64/*this*/["variables"][_V51/*name*/];;
};
;
_V59.resolve(); return;;
}), _V62);
;})();
return _V59;
})();;
return _V58/*resPs*/;;
;
});;
this["resolveFunctionType"] = (function(_V29/*par*/, _V65/*parsed*/){
var _V51/*name*/;
var _V57/*entry*/;
var _V23/*t*/;
;
_V51/*name*/ = _V28/*identifierName*/(_V29/*par*/["name"]);
_V57/*entry*/ = this["localVariables"][_V51/*name*/];
if(_V57/*entry*/["needsResolving"]){
_V57/*entry*/["needsResolving"] = false;;
_V23/*t*/ = _V57/*entry*/["type"];
_V57/*entry*/["type"] = _V29/*par*/["type"];;
this["resolveProvisional"](_V23/*t*/, _V29/*par*/["type"]);;

}else{
this["addLocalVariable"]({"name": _V29/*par*/["name"],
"type": _V29/*par*/["type"]}, _V65/*parsed*/);;
};
;
;
});;
this["getProvisionalType"] = (function(_V49/*parParsed*/){
var _V66/*type*/;
var _V67/*ps*/;
;
if(! _V49/*parParsed*/){
_V11/*errorFun*/({}, _V12/*errorMsg*/["internalParserInfoMissing"]);;
};
;
_V66/*type*/ = _V18/*classSystem*/["_createProvisionalClass"]();
_V67/*ps*/ = this["addError"](_V49/*parParsed*/, _V12/*errorMsg*/["unresolvedType"]);
_V18/*classSystem*/["definitionPromise"](_V66/*type*/)["then"]((function(){
;
_V67/*ps*/["resolve"]();;
;
}));;
return _V66/*type*/;;
;
});;
this["resolveProvisional"] = (function(_V68/*parType*/, _V69/*parResult*/){
;
return _V18/*classSystem*/["_resolveProvisional"](_V68/*parType*/, _V69/*parResult*/);;
;
});;
this["_getVariableType"] = (function(_V70/*parEntry*/){
;
if(_V70/*parEntry*/["type"]){
return _V70/*parEntry*/["type"];;
};
;
return this["getType"](_V70/*parEntry*/["typename"]);;
;
});;
this["getVariableType"] = (function(_V71/*parName*/, _V29/*par*/){
var _V51/*name*/;
var _V57/*entry*/;
;
_V51/*name*/ = _V28/*identifierName*/(_V71/*parName*/);
this["_addUsedVariable"](_V51/*name*/);;
if(this["variables"]["hasOwnProperty"](_V51/*name*/)){
_V57/*entry*/ = this["variables"][_V51/*name*/];
return this["_getVariableType"](_V57/*entry*/);;
};
;
return this["getType"]("var");;
;
});;
this["usedVariables"] = {};;
this["_addUsedVariable"] = (function(_V29/*par*/){
var _V51/*name*/;
;
_V51/*name*/ = _V28/*identifierName*/(_V29/*par*/);
if(this["variables"]["hasOwnProperty"](_V51/*name*/)){
if(this["variables"][_V51/*name*/]["temporary"]){
return;;
};
;
};
;
this["usedVariables"][_V51/*name*/] = true;;
;
});;
this["_getUsedVairables"] = (function(){
;
return this["usedVariables"];;
;
});;
this["functionsAr"] = [];;
this["addFunction"] = (function(_V43/*res*/, _V51/*name*/, _V29/*par*/){
;
this["resolveFunctionType"]({"name": _V28/*identifierName*/(_V51/*name*/),
"type": _V43/*res*/["getType"]()}, _V29/*par*/);;
this["functionsAr"]["push"]({"res": _V43/*res*/,
"name": _V51/*name*/});;
;
});;
if(_V29/*par*/["uniquebasis"]){
this["uniquebasis"] = _V29/*par*/["uniquebasis"];;

}else{
this["uniquebasis"] = {"index": 1};;
};
;
this["_getErrors"] = (function(_V72/*parWarning*/){
var _V73/*a*/;
var _V25/*i*/;
;
_V73/*a*/ = [];
_V25/*i*/ = 0;
for(_V25/*i*/ = 0;(_V25/*i*/ < this["errors"]["length"]);++_V25/*i*/){{if(this["errors"][_V25/*i*/]["valid"]){
if((_V72/*parWarning*/ ? this["errors"][_V25/*i*/]["warning"] : ! this["errors"][_V25/*i*/]["warning"])){
_V73/*a*/["push"](this["errors"][_V25/*i*/]);;
};
;
};
;
}};
;
return _V73/*a*/;;
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
this["getWarningFun"] = (function(_V29/*par*/){
var _V50/*self*/;
;
_V50/*self*/ = this;
return (function(_V74/*err*/){
;
_V50/*self*/["warning"](_V29/*par*/, _V74/*err*/);;
;
});;
;
});;
this["warning"] = (function(_V29/*par*/, _V74/*err*/){
;
if(! _V29/*par*/["line"]){
_V11/*errorFun*/({}, _V12/*errorMsg*/["internalParserInfoMissing"]);;
};
;
this["addWarning"](_V29/*par*/, _V74/*err*/);;
;
});;
this["error"] = (function(_V29/*par*/, _V74/*err*/){
;
this["_addError"](_V29/*par*/, _V74/*err*/);;
_V11/*errorFun*/(_V29/*par*/, _V74/*err*/);;
;
});;
this["addError"] = (function(_V29/*par*/, _V74/*err*/){
;
return this["_addError"](_V29/*par*/, _V74/*err*/);;
;
});;
this["addWarning"] = (function(_V29/*par*/, _V74/*err*/){
;
return this["_addError"](_V29/*par*/, _V74/*err*/, true);;
;
});;
this["_addError"] = (function(_V29/*par*/, _V74/*err*/, _V75/*warning*/){
var _V57/*entry*/;
var _V67/*ps*/;
;
_V57/*entry*/ = {"par": _V29/*par*/,
"line": _V29/*par*/["line"],
"column": _V29/*par*/["column"],
"msg": ((_V74/*err*/["id"] + ": ") + _V74/*err*/["msg"]),
"valid": true,
"warning": _V75/*warning*/};
this["errors"]["push"](_V57/*entry*/);;
_V67/*ps*/ = new _V16/*Promise*/();
_V67/*ps*/["then"]((function(){
;
_V57/*entry*/["valid"] = false;;
;
}));;
return _V67/*ps*/;;
;
});;
this["runtimeError"] = (function(_V29/*par*/, _V48/*par2*/){
var _V67/*ps*/;
var _V43/*res*/;
;
_V67/*ps*/ = this["addWarning"](_V29/*par*/, _V48/*par2*/);
_V43/*res*/ = this["runtimeErrorNoWarning"](_V48/*par2*/);
_V43/*res*/["setPromise"](_V67/*ps*/);;
return _V43/*res*/;;
;
});;
this["runtimeErrorNoWarning"] = (function(_V48/*par2*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"]((((("(function(){ throw { id:" + _V48/*par2*/["id"]) + ", msg: ") + _V14/*stringEncodeStr*/(_V48/*par2*/["msg"])) + " } })()"));;
return _V43/*res*/;;
;
});;
this["getUniqueName"] = (function(_V51/*name*/){
var _V76/*retStr*/;
;
_V76/*retStr*/ = ("_V" + this["uniquebasis"]["index"]++);
if(_V51/*name*/){
_V76/*retStr*/ += (("/*" + _V51/*name*/) + "*/");;
};
;
return _V76/*retStr*/;;
;
});;
this["getUniqueTypeMacro"] = (function(_V51/*name*/){
var _V77/*uniqueStr*/;
var _V43/*res*/;
;
_V77/*uniqueStr*/ = this["getUniqueName"]();
_V43/*res*/ = (((("/*\n'''\"\"\" " + _V77/*uniqueStr*/) + " ") + (_V51/*name*/ || "")) + " start */");
_V43/*res*/ += this["runtimeErrorNoWarning"](_V12/*errorMsg*/["failedToDetermineType"]);;
_V43/*res*/ += (((("/* " + _V77/*uniqueStr*/) + " ") + (_V51/*name*/ || "")) + " end */");;
return _V43/*res*/;;
;
});;
this["getVariableName"] = (function(_V51/*name*/){
var _V78/*n*/;
;
_V78/*n*/ = _V28/*identifierName*/(_V51/*name*/);
if(! this["common"]["givenNames"][_V78/*n*/]){
this["common"]["givenNames"][_V78/*n*/] = (((this["getUniqueName"]() + "/*") + _V78/*n*/) + "*/");;
};
;
return this["common"]["givenNames"][_V78/*n*/];;
;
});;
this["renderType"] = (function(_V68/*parType*/, _V49/*parParsed*/){
var _V43/*res*/;
var _V50/*self*/;
var _V79/*typeExpression*/;
var _V80/*renderTypeName*/;
var _V83/*errPs*/;
var _V51/*name*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["setType"]("var");;
_V50/*self*/ = this;
_V79/*typeExpression*/;
_V80/*renderTypeName*/ = (function(_V81/*parType1*/, _V82/*parType2*/){
var _V25/*i*/;
var _V51/*name*/;
;
_V25/*i*/;
for(_V25/*i*/ in _V50/*self*/["types"]){if(((_V50/*self*/["types"][_V25/*i*/]["type"] === _V81/*parType1*/) || (_V50/*self*/["types"][_V25/*i*/]["type"] === _V82/*parType2*/))){
if(_V50/*self*/["isVar"](_V50/*self*/["types"][_V25/*i*/]["type"])){
_V50/*self*/["common"]["useClassSystem"] = true;;
return "classSystem.getBuiltinType(\"var\")";;
};
;
_V51/*name*/ = _V25/*i*/;
if(! _V50/*self*/["common"]["givenTypeNames"][_V51/*name*/]){
_V50/*self*/["common"]["givenTypeNames"][_V51/*name*/] = (((_V50/*self*/["getUniqueName"]() + "/*type:") + _V51/*name*/) + "*/");;
};
;
return _V50/*self*/["common"]["givenTypeNames"][_V51/*name*/];;
};
;
};
;
;
});
if((typeof _V68/*parType*/ == "function")){
_V83/*errPs*/ = this["addError"](_V49/*parParsed*/, _V12/*errorMsg*/["internalMissingType"]);
_V18/*classSystem*/["readyPromise"](_V68/*parType*/)["then"]((function(_V84/*resolvedType*/){
var _V85/*replace*/;
var _V79/*typeExpression*/;
var _V25/*i*/;
var _V86/*l*/;
;
_V85/*replace*/ = _V50/*self*/["newResult"]();
_V79/*typeExpression*/ = _V80/*renderTypeName*/(_V68/*parType*/, _V84/*resolvedType*/);
if(_V79/*typeExpression*/){
_V85/*replace*/["push"](_V79/*typeExpression*/);;
_V43/*res*/["push"](_V85/*replace*/);;
_V83/*errPs*/["resolve"]();;
return;;
};
;
if(_V18/*classSystem*/["isFunctionType"](_V84/*resolvedType*/)){
_V25/*i*/;
_V50/*self*/["common"]["useClassSystem"] = true;;
_V85/*replace*/["push"]("(classSystem.createFunctionType({ \"return\": ");;
_V85/*replace*/["push"](_V50/*self*/["renderType"](_V50/*self*/["getClassFromTemporaryTracked"](_V50/*self*/["getFunctionReturnType"](_V84/*resolvedType*/, _V49/*parParsed*/), _V49/*parParsed*/), _V49/*parParsed*/));;
_V85/*replace*/["push"](", arguments: [");;
_V86/*l*/ = _V50/*self*/["getFunctionArgumentCount"](_V84/*resolvedType*/);
for(_V25/*i*/ = 0;(_V25/*i*/ < _V86/*l*/);++_V25/*i*/){{if(_V25/*i*/){
_V85/*replace*/["push"](", ");;
};
;
_V85/*replace*/["push"](_V50/*self*/["renderType"](_V50/*self*/["getClassFromTemporaryTracked"](_V50/*self*/["getFunctionArgumentType"](_V84/*resolvedType*/, _V25/*i*/, _V49/*parParsed*/), _V49/*parParsed*/), _V49/*parParsed*/));;
}};
;
_V85/*replace*/["push"]("]}))");;
_V43/*res*/["push"](_V85/*replace*/);;
_V83/*errPs*/["resolve"]();;
return;;
};
;
;
}));;
return _V43/*res*/;;

}else{
if(_V68/*parType*/["isDynamic"]){
_V79/*typeExpression*/ = _V80/*renderTypeName*/(_V68/*parType*/, _V68/*parType*/);;
if(_V79/*typeExpression*/){
_V43/*res*/["push"](_V79/*typeExpression*/);;

}else{
_V43/*res*/["push"](this["addError"](_V49/*parParsed*/, _V12/*errorMsg*/["internalMissingType"]));;
};
;

}else{
_V51/*name*/ = _V28/*identifierName*/(_V68/*parType*/);
_V68/*parType*/ = this["getType"](_V51/*name*/, _V49/*parParsed*/);;
_V79/*typeExpression*/ = _V80/*renderTypeName*/(_V68/*parType*/, _V68/*parType*/);;
if(_V79/*typeExpression*/){
_V43/*res*/["push"](_V79/*typeExpression*/);;

}else{
_V43/*res*/["push"](this["addError"](_V49/*parParsed*/, _V12/*errorMsg*/["internalMissingType"]));;
};
;
};
};
;
return _V43/*res*/;;
;
});;
this["newInstance"] = (function(_V87/*element*/, _V88/*extras*/){
var _V89/*param*/;
var _V25/*i*/;
var _V90/*instance*/;
;
_V89/*param*/ = {"toParse": _V87/*element*/,
"uniquebasis": this["uniquebasis"],
"common": this["common"],
"hashStr": this["hashStr"],
"types": this["types"],
"variables": this["variables"],
"_locals": {"inheritedSystem": this["inheritedSystem"],
"isClassObject": this["isClassObject"]}};
if(_V88/*extras*/){
_V25/*i*/;
for(_V25/*i*/ in _V88/*extras*/){_V89/*param*/[_V25/*i*/] = _V88/*extras*/[_V25/*i*/];;
};
;
};
;
_V90/*instance*/ = new _V39/*CodeParser*/(_V89/*param*/);
return _V90/*instance*/;;
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
this["newResult"] = (function(_V29/*par*/){
var _V44/*r*/;
;
_V44/*r*/ = new _V37/*_Result*/({"cp": this});
if(_V29/*par*/){
_V44/*r*/["push"](_V29/*par*/);;
};
;
return _V44/*r*/;;
;
});;
this["parseProgram"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V91/*extraRes*/;
var _V92/*functionStatement*/;
var _V51/*name*/;
;
_V31/*findPromises*/(_V29/*par*/);;
_V43/*res*/ = this["newResult"]();
_V91/*extraRes*/ = this["newResult"]();
_V91/*extraRes*/["push"]("\"use strict\";\n");;
_V33/*addExtraToPar*/(_V29/*par*/, "addFront", _V91/*extraRes*/);;
if(_V32/*checkPromising*/(_V29/*par*/)){
this["programPromiseStr"] = this["getUniqueName"]();;
};
;
this["resultNameStr"] = this["getUniqueName"]();;
_V92/*functionStatement*/ = this["_parseFunction"](_V29/*par*/, {"promiseName": this["programPromiseStr"],
"noUntrack": true});
_V51/*name*/;
for(_V51/*name*/ in this["usedVariables"]){if((this["usedVariables"][_V51/*name*/] === true)){
if((_V51/*name*/ == "Promise")){
this["common"]["usePromise"] = true;;
};
;
if((_V51/*name*/ == "Callback")){
this["common"]["useCallback"] = true;;
};
;
_V43/*res*/["push"]((("var " + this["getVariableName"](_V51/*name*/)) + ";"));;
_V43/*res*/["push"]("try{");;
_V43/*res*/["push"](this["getVariableName"](_V51/*name*/));;
_V43/*res*/["push"](" = ");;
_V43/*res*/["push"](_V51/*name*/);;
_V43/*res*/["push"](";}catch(e){};\n");;
};
;
};
;
_V43/*res*/["push"]((("var " + this["resultNameStr"]) + " = ("));;
_V43/*res*/["push"](this["makeCompleteStatement"](_V92/*functionStatement*/));;
_V43/*res*/["push"](")();\n");;
return _V43/*res*/;;
;
});;
this["parseFunction"] = (function(_V29/*par*/){
var _V43/*res*/;
;
this["stack"]("isFunction");;
this["isFunction"] = true;;
_V43/*res*/ = this["_parseFunction"](_V29/*par*/);
this["unstack"]("isFunction");;
return _V43/*res*/;;
;
});;
this["getTemplateProperty"] = (function(_V93/*parTemplate*/, _V94/*parProperty*/, _V95/*mandatoryType*/){
var _V25/*i*/;
var _V27/*p*/;
;
_V25/*i*/ = 0;
for(_V25/*i*/;(_V25/*i*/ < _V93/*parTemplate*/["properties"]["length"]);++_V25/*i*/){{_V27/*p*/ = _V93/*parTemplate*/["properties"][_V25/*i*/];
if(((_V27/*p*/["kind"] == "init") && (_V28/*identifierName*/(_V27/*p*/["key"]) == _V94/*parProperty*/))){
if(_V95/*mandatoryType*/){
if((_V27/*p*/["value"]["type"] != _V95/*mandatoryType*/)){
this["error"](_V27/*p*/["value"], _V12/*errorMsg*/["templateSyntaxError"]);;
};
;
};
;
return _V27/*p*/["value"];;
};
;
}};
;
;
});;
this["createExtraDynamicType"] = (function(_V68/*parType*/, _V29/*par*/, _V49/*parParsed*/){
var _V51/*name*/;
var _V57/*entry*/;
var _V43/*res*/;
var _V52/*newType*/;
;
_V51/*name*/;
if(_V29/*par*/["property"]){
_V51/*name*/ = ((this["getTypeName"](_V68/*parType*/, _V49/*parParsed*/) + "::property::") + _V29/*par*/["property"]);;

}else{
if(_V29/*par*/["temporaryTracked"]){
_V51/*name*/ = (this["getTypeName"](_V68/*parType*/, _V49/*parParsed*/) + "::temporaryTracked");;

}else{
if(_V29/*par*/["temporaryTrackedResolved"]){
_V51/*name*/ = (this["getTypeName"](_V68/*parType*/, _V49/*parParsed*/) + "::temporaryTrackedResolved");;

}else{
this["error"](_V12/*errorMsg*/["internalMissingTypeProperty"]);;
};
};
};
;
if(! _V68/*parType*/["extraTypes"]){
_V68/*parType*/["extraTypes"] = [];;
};
;
if(! _V68/*parType*/["extraTypeMap"]){
_V68/*parType*/["extraTypeMap"] = {};;
};
;
if(_V68/*parType*/["extraTypeMap"]["hasOwnProperty"](_V51/*name*/)){
return _V68/*parType*/["extraTypeMap"][_V51/*name*/];;
};
;
_V57/*entry*/ = {"res": this["newResult"]()};
_V68/*parType*/["extraTypes"]["push"](_V57/*entry*/);;
_V43/*res*/ = _V57/*entry*/["res"];
this["addType"]({"name": _V51/*name*/,
"dynamic": true}, _V49/*parParsed*/);;
_V43/*res*/["push"]("var /*extratyperender*/ ");;
_V43/*res*/["push"](this["renderType"](_V51/*name*/));;
_V43/*res*/["push"](" = ");;
this["common"]["useClassSystem"] = true;;
if(_V29/*par*/["property"]){
if((_V29/*par*/["property"] == "constructor")){
_V43/*res*/["push"]("classSystem.getConstructorType({\"type\":");;

}else{
_V43/*res*/["push"]("classSystem.getPropertyType({\"type\":");;
};
;
_V43/*res*/["push"](this["renderType"](_V68/*parType*/));;
_V43/*res*/["push"]((", property: " + _V14/*stringEncodeStr*/(_V29/*par*/["property"])));;
_V43/*res*/["push"]("});\n");;

}else{
if(_V29/*par*/["temporaryTracked"]){
_V43/*res*/["push"]("classSystem._createTemporaryTrackedClass(");;
_V43/*res*/["push"](this["renderType"](_V68/*parType*/));;
_V43/*res*/["push"](");\n");;

}else{
if(_V29/*par*/["temporaryTrackedResolved"]){
_V43/*res*/["push"]("classSystem.getClassFromTemporaryTracked(");;
_V43/*res*/["push"](this["renderType"](_V68/*parType*/));;
_V43/*res*/["push"](");\n");;
};
};
};
;
_V52/*newType*/ = this["getType"](_V51/*name*/, _V49/*parParsed*/);
_V57/*entry*/["type"] = _V52/*newType*/;;
_V68/*parType*/["extraTypeMap"][_V51/*name*/] = _V52/*newType*/;;
return _V52/*newType*/;;
;
});;
this["getFunctionType"] = (function(_V29/*par*/){
var _V96/*isTyped*/;
var _V97/*functionTypeParam*/;
var _V86/*l*/;
var _V98/*tempTypename*/;
;
_V96/*isTyped*/ = false;
_V97/*functionTypeParam*/ = {"return": this["getType"]("var"),
"arguments": []};
if(_V29/*par*/["returnTypename"]){
_V96/*isTyped*/ = true;;
_V97/*functionTypeParam*/["return"] = this["getType"](_V29/*par*/["returnTypename"]);;
};
;
if((_V29/*par*/["params"] && _V29/*par*/["params"]["length"])){
_V25/*i*/ = 0;;
_V86/*l*/ = _V29/*par*/["params"]["length"];
for(_V25/*i*/;(_V25/*i*/ < _V86/*l*/);++_V25/*i*/){{_V98/*tempTypename*/ = _V28/*identifierName*/((_V29/*par*/["params"][_V25/*i*/]["typename"] || "var"));
_V97/*functionTypeParam*/["arguments"]["push"](this["getType"](_V98/*tempTypename*/, _V29/*par*/));;
if((_V98/*tempTypename*/ != "var")){
_V96/*isTyped*/ = true;;
};
;
}};
;
};
;
if(_V96/*isTyped*/){
return this["createFunctionType"](_V97/*functionTypeParam*/);;
};
;
return this["getType"]("var");;
;
});;
this["createFunctionType"] = (function(_V29/*par*/){
var _V99/*isDynamic*/;
var _V25/*i*/;
;
_V99/*isDynamic*/ = false;
if(_V29/*par*/["return"]["isDynamic"]){
_V99/*isDynamic*/ = true;;
};
;
_V25/*i*/ = 0;
for(_V25/*i*/ = 0;(_V25/*i*/ < _V29/*par*/["arguments"]["length"]);++_V25/*i*/){{if(_V29/*par*/["arguments"][_V25/*i*/]["isDynamic"]){
_V99/*isDynamic*/ = true;;
};
;
}};
;
if(_V99/*isDynamic*/){
debugger;

}else{
return _V18/*classSystem*/["createFunctionType"](_V29/*par*/);;
};
;
;
});;
this["addBeforeReturn"] = (function(_V100/*parRes*/, _V101/*parCondition*/){
var _V102/*condition*/;
var _V103/*conditional*/;
var _V104/*frontRes*/;
var _V105/*endRes*/;
;
_V102/*condition*/ = _V101/*parCondition*/;
if((_V101/*parCondition*/ === _V46/*undefined*/)){
_V102/*condition*/ = true;;
};
;
_V103/*conditional*/ = this["createConditionalCode"](_V100/*parRes*/);
_V103/*conditional*/["addCondition"](_V102/*condition*/);;
this["runBeforeReturnRes"]["push"](_V103/*conditional*/["res"]);;
if(! this["beforeReturnExists"]){
this["beforeReturnExists"] = true;;
_V104/*frontRes*/ = this["newResult"]();
_V105/*endRes*/ = this["newResult"]();
this["beforeReturnFrontConditional"] = this["createConditionalCode"](_V104/*frontRes*/);;
this["beforeReturnEndConditional"] = this["createConditionalCode"](_V105/*endRes*/);;
this["beforeReturnExistsPs"]["resolve"](this["runBeforeReturnRes"]);;
if(! this["promising"]){
_V104/*frontRes*/["push"]("try{");;
this["additionalCodeFrontRes"]["push"](this["beforeReturnFrontConditional"]["res"]);;
_V105/*endRes*/["push"]("}catch(e){");;
_V105/*endRes*/["push"](this["runBeforeReturnRes"]);;
_V105/*endRes*/["push"]("throw e};");;
this["additionalCodeEndRes"]["push"](this["beforeReturnEndConditional"]["res"]);;
};
;
};
;
this["beforeReturnFrontConditional"]["addCondition"](_V102/*condition*/);;
this["beforeReturnEndConditional"]["addCondition"](_V102/*condition*/);;
this["addBeforeReturnCondition"](_V102/*condition*/);;
;
});;
this["beforeReturnConditions"] = [];;
this["addBeforeReturnCondition"] = (function(_V101/*parCondition*/){
var _V25/*i*/;
;
this["beforeReturnConditions"]["push"](_V101/*parCondition*/);;
_V25/*i*/ = 0;
for(_V25/*i*/ = 0;(_V25/*i*/ < this["beforeReturnConditionFuns"]["length"]);++_V25/*i*/){{this["beforeReturnConditionFuns"][_V25/*i*/](_V101/*parCondition*/);;
}};
;
;
});;
this["beforeReturnConditionFuns"] = [];;
this["addBeforeReturnConditionFun"] = (function(_V106/*parFun*/){
var _V25/*i*/;
;
this["beforeReturnConditionFuns"]["push"](_V106/*parFun*/);;
_V25/*i*/ = 0;
for(_V25/*i*/ = 0;(_V25/*i*/ < this["beforeReturnConditions"]["length"]);++_V25/*i*/){{_V106/*parFun*/(this["beforeReturnConditions"][_V25/*i*/]);;
}};
;
;
});;
this["getReturnCode"] = (function(_V29/*par*/){
var _V50/*self*/;
var _V43/*res*/;
var _V107/*falseRes*/;
var _V108/*beforeReturnCode*/;
var _V109/*newRes*/;
var _V110/*valueRes*/;
var _V111/*trueRes*/;
var _V103/*conditional*/;
;
_V50/*self*/ = this;
_V43/*res*/ = this["newResult"]();
if(this["promising"]){
_V43/*res*/["push"]((this["returnPromise"] + ".resolve("));;
if(_V29/*par*/["value"]){
_V43/*res*/["push"](_V29/*par*/["value"]);;
};
;
_V43/*res*/["push"]("); return;");;

}else{
if((_V29/*par*/["return"] || _V29/*par*/["value"])){
_V43/*res*/["push"]("return");;
};
;
if(_V29/*par*/["value"]){
_V43/*res*/["push"](" ");;
_V43/*res*/["push"](_V29/*par*/["value"]);;
};
;
if((_V29/*par*/["return"] || _V29/*par*/["value"])){
_V43/*res*/["push"](";");;
};
;
};
;
_V107/*falseRes*/ = _V43/*res*/;
_V108/*beforeReturnCode*/ = this["runBeforeReturnRes"];
_V109/*newRes*/ = _V50/*self*/["newResult"]();
_V110/*valueRes*/ = _V50/*self*/["newResult"]();
if(_V29/*par*/["value"]){
_V110/*valueRes*/["push"]("(function(ret){ ");;
_V110/*valueRes*/["push"](_V108/*beforeReturnCode*/);;
_V110/*valueRes*/["push"]("return ret; })(");;
_V110/*valueRes*/["push"](_V29/*par*/["value"]);;
_V110/*valueRes*/["push"](")");;
};
;
if(_V50/*self*/["promising"]){
if(_V29/*par*/["value"]){
_V109/*newRes*/["push"]((_V50/*self*/["returnPromise"] + ".resolve("));;
_V109/*newRes*/["push"](_V110/*valueRes*/);;
_V109/*newRes*/["push"]("); return;");;

}else{
_V109/*newRes*/["push"](_V108/*beforeReturnCode*/);;
_V109/*newRes*/["push"]((_V50/*self*/["returnPromise"] + ".resolve("));;
_V109/*newRes*/["push"]("); return;");;
};
;

}else{
if(_V29/*par*/["value"]){
_V109/*newRes*/["push"]("return ");;
_V109/*newRes*/["push"](_V110/*valueRes*/);;
_V109/*newRes*/["push"](";");;

}else{
_V109/*newRes*/["push"](_V108/*beforeReturnCode*/);;
if(_V29/*par*/["return"]){
_V109/*newRes*/["push"]("return;");;
};
;
};
;
};
;
_V111/*trueRes*/ = _V109/*newRes*/;
_V103/*conditional*/ = this["createConditionalCode"](_V111/*trueRes*/, _V107/*falseRes*/);
this["addBeforeReturnConditionFun"]((function(_V112/*con*/){
;
_V103/*conditional*/["addCondition"](_V112/*con*/);;
;
}));;
return _V103/*conditional*/["res"];;
;
});;
this["_parseFunction"] = (function(_V29/*par*/, _V113/*parJsn*/){
var _V114/*parGivenPromiseNameStr*/;
var _V115/*noUntrack*/;
var _V116/*hasFrameInfo*/;
var _V117/*runRemote*/;
var _V118/*runExclusive*/;
var _V25/*i*/;
var _V119/*typename*/;
var _V49/*parParsed*/;
var _V120/*funClosure*/;
var _V50/*self*/;
var _V121/*hasName*/;
var _V122/*nameStr*/;
var _V123/*templateTypesAr*/;
var _V124/*templateTypes*/;
var _V125/*typeVarInit*/;
var _V27/*p*/;
var _V126/*extraTypesRes*/;
var _V43/*res*/;
var _V127/*funRes*/;
var _V86/*l*/;
var _V128/*classesRes*/;
var _V129/*addFront*/;
var _V130/*b*/;
var _V131/*extraPar*/;
var _V132/*block*/;
var _V133/*varname*/;
var _V66/*type*/;
var _V134/*completeFun*/;
var _V135/*returnTypePromiseCheck*/;
var _V136/*handleExtras*/;
var _V137/*dt*/;
var _V138/*thisFunType*/;
var _V139/*uniqueNameStr*/;
var _V140/*remoteClosure*/;
var _V141/*tempReturnPromise*/;
var _V142/*finalResult*/;
;
_V113/*parJsn*/ = (_V113/*parJsn*/ || {});;
_V114/*parGivenPromiseNameStr*/ = _V113/*parJsn*/["promiseName"];
_V115/*noUntrack*/ = _V113/*parJsn*/["noUntrack"];
_V116/*hasFrameInfo*/ = false;
_V117/*runRemote*/ = false;
_V118/*runExclusive*/ = false;
_V25/*i*/ = 0;
_V119/*typename*/;
_V49/*parParsed*/ = _V29/*par*/;
_V120/*funClosure*/;
_V50/*self*/ = this;
_V121/*hasName*/ = false;
_V122/*nameStr*/;
if(_V29/*par*/["id"]){
_V122/*nameStr*/ = _V28/*identifierName*/(_V29/*par*/["id"]);;
_V121/*hasName*/ = true;;
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
this["beforeReturnExistsPs"] = new _V16/*Promise*/();;
this["additionalCodeFrontRes"] = this["newResult"]();;
this["additionalCodeEndRes"] = this["newResult"]();;
this["stack"]("isClassObject");;
this["isClassObject"] = false;;
if(_V29/*par*/["returnTypename"]){
this["_returnType"] = this["getType"](_V29/*par*/["returnTypename"], _V29/*par*/);;

}else{
this["_returnType"] = this["getType"]("var");;
};
;
if((_V29/*par*/["frame"] && _V29/*par*/["frame"]["name"])){
_V116/*hasFrameInfo*/ = true;;
if((_V29/*par*/["frame"]["type"] == "frame")){
_V117/*runRemote*/ = true;;
_V29/*par*/["promising"] = true;;
if(this["dynamicCode"]){
this["error"](_V29/*par*/, _V12/*errorMsg*/["functionFrameInDynamicCode"]);;
};
;

}else{
if((_V29/*par*/["frame"]["type"] == "exclusive")){
_V118/*runExclusive*/ = true;;
};
};
;
};
;
_V123/*templateTypesAr*/ = [];
if((_V29/*par*/["template"] && _V29/*par*/["template"]["properties"]["length"])){
_V124/*templateTypes*/ = this["getTemplateProperty"](_V29/*par*/["template"], "types", "ObjectExpression");
if(_V124/*templateTypes*/){
_V125/*typeVarInit*/ = this["newResult"]();
for(_V25/*i*/ = 0;(_V25/*i*/ < _V124/*templateTypes*/["properties"]["length"]);++_V25/*i*/){{_V27/*p*/ = _V124/*templateTypes*/["properties"][_V25/*i*/];
_V119/*typename*/ = _V28/*identifierName*/(_V27/*p*/["key"]);;
this["addType"]({"name": _V119/*typename*/,
"dynamic": true}, _V27/*p*/["value"]);;
if(! _V120/*funClosure*/){
_V120/*funClosure*/ = this["newResult"]();;
_V120/*funClosure*/["push"]("(function(){");;
};
;
_V125/*typeVarInit*/["push"]("var ");;
_V125/*typeVarInit*/["push"](this["renderType"](_V119/*typename*/));;
_V125/*typeVarInit*/["push"](" = ");;
_V125/*typeVarInit*/["push"](this["expectTypeVar"](this["parseExpression"](_V27/*p*/["value"])));;
_V125/*typeVarInit*/["push"](";\n");;
_V125/*typeVarInit*/["push"]((("var " + this["getVariableName"](_V119/*typename*/)) + " = "));;
_V125/*typeVarInit*/["push"](this["renderType"](_V119/*typename*/));;
_V125/*typeVarInit*/["push"]("\n;");;
_V125/*typeVarInit*/["push"]((("var " + this["getConstructorName"](_V119/*typename*/)) + " = undefined;\n"));;
_V125/*typeVarInit*/["push"](this["_typeReadyCode"]({"typename": _V119/*typename*/}));;
_V123/*templateTypesAr*/["push"](_V119/*typename*/);;
}};
;
_V120/*funClosure*/["push"](_V125/*typeVarInit*/);;
};
;
};
;
_V126/*extraTypesRes*/ = this["newResult"]();
if(_V120/*funClosure*/){
_V120/*funClosure*/["push"]("var communicator = {fun: undefined};\n");;
_V120/*funClosure*/["push"](_V126/*extraTypesRes*/);;
_V120/*funClosure*/["push"]("eval(\"communicator.fun = ");;
};
;
_V43/*res*/ = this["newResult"]();
_V127/*funRes*/ = this["newResult"]();
_V25/*i*/ = 0;;
_V127/*funRes*/["push"]("function");;
if(_V121/*hasName*/){
this["functionName"] = _V122/*nameStr*/;;
};
;
_V127/*funRes*/["push"]("(");;
if((_V29/*par*/["params"] && _V29/*par*/["params"]["length"])){
_V25/*i*/ = 0;;
_V86/*l*/ = _V29/*par*/["params"]["length"];
for(_V25/*i*/;(_V25/*i*/ < _V86/*l*/);++_V25/*i*/){{if(_V25/*i*/){
_V127/*funRes*/["push"](", ");;
};
;
_V127/*funRes*/["push"](this["getVariableName"](_V28/*identifierName*/(_V29/*par*/["params"][_V25/*i*/]["name"])));;
this["addLocalVariable"]({"name": _V29/*par*/["params"][_V25/*i*/]["name"],
"typename": (_V29/*par*/["params"][_V25/*i*/]["typename"] || "var"),
"parameter": true}, _V29/*par*/["params"][_V25/*i*/]);;
}};
;
};
;
_V127/*funRes*/["push"]("){\n");;
_V128/*classesRes*/ = this["findClasses"](_V29/*par*/["body"]);
this["findVariables"](_V29/*par*/["body"]);;
if(_V118/*runExclusive*/){
_V127/*funRes*/["push"]((("if (!promiseland.profileHas(" + _V14/*stringEncodeStr*/(_V29/*par*/["frame"]["name"]["value"])) + ")){\n"));;
if(_V29/*par*/["promising"]){
_V127/*funRes*/["push"]((("var p = " + this["newPromiseStr"]()) + ";\n"));;
_V127/*funRes*/["push"]("p.reject({id: 14, msg: \"function does not execute in this frame.\"});\n");;
_V127/*funRes*/["push"]("return p;\n");;

}else{
_V127/*funRes*/["push"]("return;\n");;
};
;
_V127/*funRes*/["push"]("};\n");;
};
;
_V129/*addFront*/ = _V36/*getExtraFromPar*/(_V29/*par*/, "addFront");
if(_V129/*addFront*/){
_V127/*funRes*/["push"](_V129/*addFront*/);;
};
;
if(_V29/*par*/["promising"]){
if(_V114/*parGivenPromiseNameStr*/){
this["returnPromise"] = _V114/*parGivenPromiseNameStr*/;;

}else{
this["returnPromise"] = this["getUniqueName"]();;
_V127/*funRes*/["push"](this["declareReturnPromiseCode"]({"type": this["_returnType"],
"name": this["returnPromise"],
"constructorName": this["getConstructorName"](this["getTypeName"](this["_returnType"], _V49/*parParsed*/)),
"parsed": _V49/*parParsed*/,
"errorFun": this["getWarningFun"](_V49/*parParsed*/)}));;
};
;
this["tryCatchFunctionStr"] = this["getUniqueName"]();;
_V127/*funRes*/["push"]((("var " + this["tryCatchFunctionStr"]) + " = function(code){ return function(res){ try{code(res);}catch(e){ "));;
_V127/*funRes*/["push"](this["runBeforeReturnRes"]);;
_V127/*funRes*/["push"]((this["returnPromise"] + ".reject(e); }; }; };\n"));;
this["catchFunctionStr"] = this["getUniqueName"]();;
_V127/*funRes*/["push"]((("var " + this["catchFunctionStr"]) + " = function(e){ "));;
_V127/*funRes*/["push"](this["runBeforeReturnRes"]);;
_V127/*funRes*/["push"]((this["returnPromise"] + ".reject(e); };\n"));;
this["promising"] = true;;
_V43/*res*/["makePromising"]();;
};
;
_V130/*b*/ = _V29/*par*/["body"];
_V131/*extraPar*/ = {};
_V130/*b*/["brackets"] = false;;
_V131/*extraPar*/["preCode"] = this["additionalCodeFrontRes"];;
_V131/*extraPar*/["postCode"] = this["newResult"]();;
_V131/*extraPar*/["postCode"]["push"](this["getReturnCode"]({}));;
_V131/*extraPar*/["postCode"]["push"](this["additionalCodeEndRes"]);;
_V132/*block*/ = this["blockCreator"](_V130/*b*/, _V131/*extraPar*/);
for(_V25/*i*/ in this["localVariables"]){_V133/*varname*/ = _V25/*i*/;
_V66/*type*/ = this["getVariableType"](_V133/*varname*/);
if(this["localVariables"][_V25/*i*/]["parameter"]){
_V127/*funRes*/["push"](this["getProcessParameterCode"]({"name": this["getVariableName"](_V133/*varname*/),
"type": _V66/*type*/,
"errorFun": this["getWarningFun"](_V29/*par*/),
"parsed": _V29/*par*/}));;

}else{
_V127/*funRes*/["push"](this["getDeclareVariableCode"]({"name": this["getVariableName"](_V133/*varname*/),
"type": _V66/*type*/,
"errorFun": this["getWarningFun"](_V29/*par*/),
"parsed": _V29/*par*/}));;
};
;
if(! _V115/*noUntrack*/){
this["addBeforeReturn"](this["getDestroyVariableCode"]({"name": this["getVariableName"](_V133/*varname*/),
"type": _V66/*type*/,
"errorFun": this["getWarningFun"](_V29/*par*/),
"parsed": _V29/*par*/}), this["isTrackedClassConRes"](_V66/*type*/));;
};
;
this["usedVariables"][_V133/*varname*/] = false;;
};
;
if(this["usedVariables"]["arguments"]){
_V127/*funRes*/["push"]((("var " + this["getVariableName"]("arguments")) + " = arguments;\n"));;
this["usedVariables"]["arguments"] = false;;
};
;
_V127/*funRes*/["push"](_V128/*classesRes*/);;
for(_V25/*i*/ = 0;(_V25/*i*/ < this["functionsAr"]["length"]);++_V25/*i*/){{_V127/*funRes*/["push"]((("var " + this["getVariableName"](this["functionsAr"][_V25/*i*/]["name"])) + " = "));;
_V127/*funRes*/["push"](this["functionsAr"][_V25/*i*/]["res"]);;
_V127/*funRes*/["push"](";\n");;
}};
;
if(_V29/*par*/["promising"]){
if(this["usingThis"]){
_V127/*funRes*/["push"]((("var " + this["thisExpression"]) + " = this;\n"));;
};
;
_V127/*funRes*/["push"]((this["tryCatchFunctionStr"] + "(function(){"));;
};
;
_V127/*funRes*/["push"](_V132/*block*/);;
if(_V29/*par*/["promising"]){
_V127/*funRes*/["addPost"]("})();\n");;
_V127/*funRes*/["addPost"](this["returnReturnPromiseCode"]({"type": this["_returnType"],
"name": this["returnPromise"],
"parsed": _V49/*parParsed*/,
"errorFun": this["getWarningFun"](_V49/*parParsed*/)}));;
_V127/*funRes*/["addPost"]("}");;

}else{
_V127/*funRes*/["push"]("}");;
};
;
_V134/*completeFun*/ = this["makeCompleteStatement"](_V127/*funRes*/);
if((this["promising"] && _V29/*par*/["returnTypename"])){
_V135/*returnTypePromiseCheck*/ = this["newResult"]();
_V135/*returnTypePromiseCheck*/["push"]("(function(t){");;
_V135/*returnTypePromiseCheck*/["push"](this["promisingReturnTypeCheck"]({"type": this["_returnType"],
"errorFun": this["getWarningFun"](_V49/*parParsed*/),
"parsed": _V49/*parParsed*/}));;
_V135/*returnTypePromiseCheck*/["push"]("return t;})(");;
_V135/*returnTypePromiseCheck*/["push"](_V134/*completeFun*/);;
_V135/*returnTypePromiseCheck*/["push"](")");;
_V134/*completeFun*/ = _V135/*returnTypePromiseCheck*/;;
};
;
if(_V120/*funClosure*/){
_V136/*handleExtras*/ = (function(_V137/*dt*/){
var _V25/*i*/;
;
if(_V137/*dt*/["extraTypes"]){
_V25/*i*/ = 0;
for(_V25/*i*/ = 0;(_V25/*i*/ < _V137/*dt*/["extraTypes"]["length"]);++_V25/*i*/){{_V126/*extraTypesRes*/["push"](_V137/*dt*/["extraTypes"][_V25/*i*/]["res"]);;
_V136/*handleExtras*/(_V137/*dt*/["extraTypes"][_V25/*i*/]["type"]);;
}};
;
};
;
;
});
for(_V25/*i*/ = 0;(_V25/*i*/ < _V123/*templateTypesAr*/["length"]);++_V25/*i*/){{_V137/*dt*/ = this["getType"](_V123/*templateTypesAr*/[_V25/*i*/], _V29/*par*/);
_V136/*handleExtras*/(_V137/*dt*/);;
}};
;
_V120/*funClosure*/["push"](_V134/*completeFun*/, _V29/*par*/, {"stringEncode": true});;
_V120/*funClosure*/["push"](";\"); return communicator.fun; })()");;
_V134/*completeFun*/ = this["makeCompleteStatement"](_V120/*funClosure*/);;
};
;
_V138/*thisFunType*/ = this["getFunctionType"](_V29/*par*/);
_V139/*uniqueNameStr*/;
if(_V117/*runRemote*/){
_V140/*remoteClosure*/ = this["newResult"]();
_V139/*uniqueNameStr*/ = this["getUniqueName"]();;
_V140/*remoteClosure*/["push"]("(function(f){\n");;
_V140/*remoteClosure*/["push"](("promiseland.registerRemote(" + _V14/*stringEncodeStr*/(_V29/*par*/["frame"]["name"]["value"])));;
_V140/*remoteClosure*/["push"](((((", " + _V14/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + _V14/*stringEncodeStr*/(_V139/*uniqueNameStr*/)) + ", f, "));;
_V140/*remoteClosure*/["push"](this["renderType"](_V138/*thisFunType*/, _V49/*parParsed*/));;
_V140/*remoteClosure*/["push"](");\n");;
_V140/*remoteClosure*/["push"]((("if (promiseland.profileHas(" + _V14/*stringEncodeStr*/(_V29/*par*/["frame"]["name"]["value"])) + ")){\n"));;
_V140/*remoteClosure*/["push"]("return f;\n");;
_V140/*remoteClosure*/["push"]("}else{\n");;
_V140/*remoteClosure*/["push"]("return function(){\n");;
_V141/*tempReturnPromise*/ = this["getUniqueName"]("temp returnpromise");
_V140/*remoteClosure*/["push"](this["declareReturnPromiseCode"]({"type": this["_returnType"],
"name": _V141/*tempReturnPromise*/,
"constructorName": this["getConstructorName"](this["getTypeName"](this["_returnType"], _V49/*parParsed*/)),
"parsed": _V49/*parParsed*/,
"errorFun": this["getWarningFun"](_V49/*parParsed*/)}));;
_V140/*remoteClosure*/["push"]((((("\npromiseland.remoteExec(" + _V14/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + _V14/*stringEncodeStr*/(_V139/*uniqueNameStr*/)) + ", arguments, "));;
_V140/*remoteClosure*/["push"](_V141/*tempReturnPromise*/);;
_V140/*remoteClosure*/["push"](");\n");;
_V140/*remoteClosure*/["push"](this["returnReturnPromiseCode"]({"type": this["_returnType"],
"name": _V141/*tempReturnPromise*/,
"parsed": _V49/*parParsed*/,
"errorFun": this["getWarningFun"](_V49/*parParsed*/)}));;
_V140/*remoteClosure*/["push"]("}\n");;
_V140/*remoteClosure*/["push"]("};\n");;
_V140/*remoteClosure*/["push"]("})(");;
_V140/*remoteClosure*/["push"](_V134/*completeFun*/);;
_V140/*remoteClosure*/["push"](")");;
_V43/*res*/["push"](_V140/*remoteClosure*/);;

}else{
_V43/*res*/["push"](_V134/*completeFun*/);;
};
;
_V43/*res*/["setType"](_V138/*thisFunType*/);;
this["unstack"]("isClassObject");;
this["unstack"]("inheritedAvailable");;
this["unstack"]("thisType");;
_V142/*finalResult*/ = this["newResult"]();
_V142/*finalResult*/["push"](this["makeCompleteStatement"](_V43/*res*/));;
_V142/*finalResult*/["setType"](_V138/*thisFunType*/);;
return _V142/*finalResult*/;;
;
});;
this["expThisExpression"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
if(! this["promising"]){
_V43/*res*/["push"]("this");;

}else{
if(! this["usingThis"]){
this["usingThis"] = true;;
this["thisExpression"] = this["getUniqueName"]("this");;
};
;
_V43/*res*/["push"](this["thisExpression"]);;
};
;
_V43/*res*/["setType"](this["thisType"]);;
return _V43/*res*/;;
;
});;
this["expThrowStatement"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"]("throw ");;
_V43/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V29/*par*/["argument"])));;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["identifyClass"] = (function(_V29/*par*/){
var _V44/*r*/;
var _V51/*name*/;
var _V143/*keywords*/;
var _V25/*i*/;
;
_V44/*r*/ = {};
_V51/*name*/;
if(_V29/*par*/["name"]){
_V51/*name*/ = _V28/*identifierName*/(_V29/*par*/["name"]);;
};
_V44/*r*/["hasName"] = (_V51/*name*/ && _V51/*name*/["length"]);;
_V143/*keywords*/ = _V29/*par*/["keywords"];
if((_V143/*keywords*/ && _V143/*keywords*/["length"])){
_V25/*i*/;
for(_V25/*i*/ = 0;(_V25/*i*/ < _V143/*keywords*/["length"]);++_V25/*i*/){{switch (_V143/*keywords*/[_V25/*i*/]["type"]){
case "type":
_V44/*r*/["isTyped"] = true;;
break;;
case "extends":
_V44/*r*/["extendsClause"] = _V143/*keywords*/[_V25/*i*/];;
break;;
case "sync":
_V44/*r*/["syncClause"] = _V143/*keywords*/[_V25/*i*/];;
break;;
case "track":
_V44/*r*/["trackClause"] = _V143/*keywords*/[_V25/*i*/];;
break;;
}
;
;
}};
;
};
;
return _V44/*r*/;;
;
});;
this["findClasses"] = (function(_V29/*par*/, _V43/*res*/){
var _V144/*ci*/;
var _V51/*name*/;
var _V91/*extraRes*/;
var _V25/*i*/;
;
if(! _V43/*res*/){
_V43/*res*/ = this["newResult"]();;
};
;
if((! _V29/*par*/ || (typeof _V29/*par*/ == "string"))){
return _V43/*res*/;;
};
;
if(_V30/*checkIsFunction*/(_V29/*par*/)){
return _V43/*res*/;;
};
;
if((_V29/*par*/["type"] == "Class")){
_V144/*ci*/ = this["identifyClass"](_V29/*par*/);
if(_V144/*ci*/["isTyped"]){
if(_V29/*par*/["body"]["literal"]){
if(_V144/*ci*/["hasName"]){
_V51/*name*/ = _V28/*identifierName*/(_V29/*par*/["name"]);
_V91/*extraRes*/ = this["newResult"]();
this["addType"]({"name": _V51/*name*/,
"extraRes": _V91/*extraRes*/}, _V29/*par*/);;
_V43/*res*/["push"]("var ");;
_V43/*res*/["push"](this["renderType"](_V51/*name*/));;
_V43/*res*/["push"](" = classSystem._createProvisionalClass();\n");;
this["common"]["useClassSystem"] = true;;
_V43/*res*/["push"]((this["getVariableName"](_V51/*name*/) + " = "));;
_V43/*res*/["push"](this["renderType"](_V51/*name*/));;
_V43/*res*/["push"](";\n");;
_V43/*res*/["push"]((("var " + this["getConstructorName"](_V51/*name*/)) + " = undefined;"));;
_V43/*res*/["push"](this["_typeReadyCode"]({"typename": _V51/*name*/}));;
_V43/*res*/["push"](_V91/*extraRes*/);;
};
;
};
;
};
;
return _V43/*res*/;;
};
;
_V25/*i*/;
for(_V25/*i*/ in _V29/*par*/){this["findClasses"](_V29/*par*/[_V25/*i*/], _V43/*res*/);;
};
;
return _V43/*res*/;;
;
});;
this["_typeReadyCode"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
this["common"]["useClassSystem"] = true;;
_V43/*res*/["push"]("classSystem.readyPromise(");;
_V43/*res*/["push"](this["renderType"](_V29/*par*/["typename"]));;
_V43/*res*/["push"](").then(function(parType){");;
_V43/*res*/["push"](this["renderType"](_V29/*par*/["typename"]));;
_V43/*res*/["push"](" = parType;");;
if(! _V29/*par*/["noConstructor"]){
_V43/*res*/["push"]((this["getConstructorName"](_V29/*par*/["typename"]) + " = classSystem.getTypeConstructor("));;
_V43/*res*/["push"](this["renderType"](_V29/*par*/["typename"]));;
_V43/*res*/["push"](");");;
};
;
_V43/*res*/["push"]("});");;
return _V43/*res*/;;
;
});;
this["findVariables"] = (function(_V29/*par*/){
var _V50/*self*/;
var _V144/*ci*/;
var _V25/*i*/;
;
_V50/*self*/ = this;
if((! _V29/*par*/ || (typeof _V29/*par*/ == "string"))){
return;;
};
;
if((_V29/*par*/["type"] == "VariableDeclaration")){
this["addLocalVariable"]({"name": _V28/*identifierName*/(_V29/*par*/["id"]),
"typename": _V28/*identifierName*/(_V29/*par*/["typename"])}, _V29/*par*/);;

}else{
if((_V29/*par*/["type"] == "Class")){
_V144/*ci*/ = _V50/*self*/["identifyClass"](_V29/*par*/);
if(_V144/*ci*/["hasName"]){
this["addLocalVariable"]({"name": _V28/*identifierName*/(_V29/*par*/["name"]),
"typename": "var"}, _V29/*par*/);;
};
;
return;;

}else{
if(_V30/*checkIsFunction*/(_V29/*par*/)){
if((_V29/*par*/["id"] && (_V29/*par*/["type"] != "MemberFunction"))){
this["addLocalVariable"]({"name": _V28/*identifierName*/(_V29/*par*/["id"]),
"isFunction": true}, _V29/*par*/);;
};
;
return;;
};
};
};
;
_V25/*i*/;
for(_V25/*i*/ in _V29/*par*/){if((_V25/*i*/ == "_extrainfo")){
continue;;
};
;
this["findVariables"](_V29/*par*/[_V25/*i*/]);;
};
;
;
});;
this["expClassStatement"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V145/*classRes*/;
var _V144/*ci*/;
var _V121/*hasName*/;
var _V51/*name*/;
var _V96/*isTyped*/;
var _V146/*extendsClause*/;
var _V147/*syncClause*/;
var _V148/*trackClause*/;
var _V149/*resultType*/;
var _V150/*literal*/;
var _V66/*type*/;
var _V151/*inheritedObjName*/;
var _V152/*lit*/;
var _V86/*l*/;
var _V153/*prop*/;
var _V42/*tempRes*/;
var _V154/*baseClasses*/;
var _V25/*i*/;
var _V155/*used*/;
var _V156/*u*/;
;
_V43/*res*/ = this["newResult"]();
_V145/*classRes*/ = this["newResult"]();
_V144/*ci*/ = this["identifyClass"](_V29/*par*/);
_V121/*hasName*/ = _V144/*ci*/["hasName"];
_V51/*name*/;
if(_V121/*hasName*/){
_V51/*name*/ = _V28/*identifierName*/(_V29/*par*/["name"]);;
};
;
_V96/*isTyped*/ = _V144/*ci*/["isTyped"];
_V146/*extendsClause*/ = _V29/*par*/["extendsClause"];
_V147/*syncClause*/ = _V144/*ci*/["syncClause"];
_V148/*trackClause*/ = _V144/*ci*/["trackClause"];
_V149/*resultType*/ = this["getType"]("var");
this["stack"]("inheritedSystem");;
this["inheritedSystem"] = this["newInherited"]();;
if(_V96/*isTyped*/){
this["common"]["useClassSystem"] = true;;
_V145/*classRes*/["push"]("classSystem.createClass(");;
if(_V29/*par*/["body"]["literal"]){
if(_V121/*hasName*/){
this["inheritedSystem"]["type"] = this["getType"](_V51/*name*/, _V29/*par*/);;
};
;
this["stack"]("isClassObject");;
this["isClassObject"] = true;;
_V150/*literal*/ = this["createClassLiteral"](_V29/*par*/["body"]["literal"], _V144/*ci*/, _V51/*name*/);
_V145/*classRes*/["push"](this["stringifyClassLiteral"](_V150/*literal*/));;
_V145/*classRes*/["push"](", ");;
_V145/*classRes*/["push"](this["createClassDefaults"](_V29/*par*/["body"]["literal"]));;
this["unstack"]("isClassObject");;
if(_V121/*hasName*/){
_V66/*type*/ = this["createType"]({"name": _V51/*name*/,
"literal": _V150/*literal*/,
"par": _V29/*par*/});
};
;

}else{
_V145/*classRes*/["push"]("{}, ");;
_V145/*classRes*/["push"](this["parseExpression"](_V29/*par*/["body"]["expression"]));;
};
;
_V145/*classRes*/["push"](")");;

}else{
_V151/*inheritedObjName*/ = this["getUniqueName"]("inherited");
_V145/*classRes*/["push"]("(function(){");;
if(_V29/*par*/["body"]["literal"]){
this["stack"]("preventreturn");;
this["preventreturn"] = true;;
_V152/*lit*/ = _V29/*par*/["body"]["literal"];
_V86/*l*/ = ((_V152/*lit*/["properties"] && _V152/*lit*/["properties"]["length"]) || 0);
for(_V25/*i*/;(_V25/*i*/ < _V86/*l*/);++_V25/*i*/){{_V153/*prop*/ = _V152/*lit*/["properties"][_V25/*i*/];
if((_V153/*prop*/["kind"] == "block")){
_V145/*classRes*/["push"](this["parseExpression"](_V153/*prop*/));;
};
;
}};
;
this["unstack"]("preventreturn");;
};
;
_V145/*classRes*/["push"]((("var " + _V151/*inheritedObjName*/) + " = {};\n"));;
_V42/*tempRes*/ = this["newResult"]();
_V42/*tempRes*/["push"]("var res = promiseland.createClass(");;
if(_V29/*par*/["body"]["literal"]){
_V42/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](_V29/*par*/["body"]["literal"])));;

}else{
_V42/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](_V29/*par*/["body"]["expression"])));;
};
;
_V42/*tempRes*/["push"](", [");;
_V154/*baseClasses*/ = ((_V146/*extendsClause*/ && _V146/*extendsClause*/["baseClasses"]) || []);
_V25/*i*/ = 0;
for(_V25/*i*/ = 0;(_V25/*i*/ < _V154/*baseClasses*/["length"]);++_V25/*i*/){{if(_V25/*i*/){
_V42/*tempRes*/["push"](", ");;
};
;
_V42/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](_V154/*baseClasses*/[_V25/*i*/])));;
}};
;
_V42/*tempRes*/["push"]("], ");;
_V42/*tempRes*/["push"](_V151/*inheritedObjName*/);;
_V42/*tempRes*/["push"](");");;
_V145/*classRes*/["push"](_V42/*tempRes*/);;
_V145/*classRes*/["push"]("\n");;
_V155/*used*/ = this["inheritedSystem"]["used"];
_V156/*u*/;
for(_V156/*u*/ in _V155/*used*/){_V145/*classRes*/["push"]((((((("var " + _V155/*used*/[_V156/*u*/]) + " = ") + _V151/*inheritedObjName*/) + "[") + _V14/*stringEncodeStr*/(_V156/*u*/)) + "];\n"));;
};
;
_V145/*classRes*/["push"]("return res; })()");;
};
;
if(_V121/*hasName*/){
if(_V96/*isTyped*/){
_V43/*res*/["addPre"](this["_resolveClassCode"]({"name": _V29/*par*/["name"],
"classRes": _V145/*classRes*/,
"parsed": _V29/*par*/}));;

}else{
_V43/*res*/["addPre"]((this["getVariableName"](_V29/*par*/["name"]) + " = "));;
_V43/*res*/["addPre"](_V145/*classRes*/);;
_V43/*res*/["addPre"](";");;
};
;
_V43/*res*/["push"](this["getVariableName"](_V29/*par*/["name"]));;

}else{
_V43/*res*/["push"](_V145/*classRes*/);;
};
;
_V43/*res*/["setType"](_V149/*resultType*/);;
this["unstack"]("inheritedSystem");;
return _V43/*res*/;;
;
});;
this["_resolveClassCode"] = (function(_V29/*par*/){
var _V65/*parsed*/;
var _V43/*res*/;
;
_V65/*parsed*/ = _V29/*par*/["parsed"];
_V43/*res*/ = this["newResult"]();
this["common"]["useClassSystem"] = true;;
_V43/*res*/["push"]("classSystem._resolveProvisional(", _V65/*parsed*/);;
_V43/*res*/["push"](this["renderType"](_V29/*par*/["name"], _V65/*parsed*/), _V65/*parsed*/);;
_V43/*res*/["push"](", ", _V65/*parsed*/);;
_V43/*res*/["push"](_V29/*par*/["classRes"], _V65/*parsed*/);;
_V43/*res*/["push"](");", _V65/*parsed*/);;
return _V43/*res*/;;
;
});;
this["createClassLiteral"] = (function(_V29/*par*/, _V144/*ci*/, _V71/*parName*/){
var _V157/*ret*/;
var _V25/*i*/;
var _V86/*l*/;
var _V153/*prop*/;
var _V158/*defaultValue*/;
var _V66/*type*/;
var _V51/*name*/;
;
_V157/*ret*/ = {"members": [],
"extends": [],
"hasFreePart": true,
"parsed": _V29/*par*/,
"track": (_V144/*ci*/["trackClause"] ? true : false),
"sync": _V144/*ci*/["syncClause"],
"name": _V71/*parName*/,
"hashStr": this["getModuleHashStr"]()};
_V25/*i*/ = 0;
_V86/*l*/ = ((_V29/*par*/["properties"] && _V29/*par*/["properties"]["length"]) || 0);
for(_V25/*i*/;(_V25/*i*/ < _V86/*l*/);++_V25/*i*/){{_V153/*prop*/ = _V29/*par*/["properties"][_V25/*i*/];
_V158/*defaultValue*/;
_V66/*type*/;
if((_V153/*prop*/["kind"] == "init")){
_V66/*type*/ = (_V153/*prop*/["typename"] ? this["getType"](_V153/*prop*/["typename"], _V29/*par*/) : _V46/*undefined*/);;
if(_V153/*prop*/["value"]){
if(_V66/*type*/){
_V158/*defaultValue*/ = this["parseAsType"](_V66/*type*/, _V153/*prop*/["value"]);;

}else{
_V158/*defaultValue*/ = this["parseExpression"](_V153/*prop*/["value"]);;
_V66/*type*/ = _V158/*defaultValue*/["getType"]();;
};
;
};
;
if(! _V66/*type*/){
_V66/*type*/ = this["getType"]("var");;
};
;
_V157/*ret*/["members"]["push"]({"name": _V28/*identifierName*/(_V153/*prop*/["key"]),
"type": _V66/*type*/,
"defaultValue": _V158/*defaultValue*/});;

}else{
if((_V153/*prop*/["kind"] == "function")){
_V51/*name*/ = _V28/*identifierName*/(_V153/*prop*/["id"]);
_V153/*prop*/["id"] = _V46/*undefined*/;;
_V158/*defaultValue*/ = this["parseExpression"](_V153/*prop*/["value"]);;
_V66/*type*/ = _V158/*defaultValue*/["getType"]();;
_V157/*ret*/["members"]["push"]({"name": _V51/*name*/,
"type": _V66/*type*/,
"defaultValue": _V158/*defaultValue*/});;

}else{
this["error"](_V153/*prop*/, _V12/*errorMsg*/["unknownPropertyAssignmentType"]);;
};
};
;
}};
;
return _V157/*ret*/;;
;
});;
this["stringifyClassLiteral"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V25/*i*/;
var _V86/*l*/;
var _V26/*m*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"]("{");;
_V43/*res*/["push"]("members: [");;
_V25/*i*/ = 0;
_V86/*l*/ = _V29/*par*/["members"]["length"];
for(_V25/*i*/;(_V25/*i*/ < _V86/*l*/);++_V25/*i*/){{_V26/*m*/ = _V29/*par*/["members"][_V25/*i*/];
if(_V25/*i*/){
_V43/*res*/["push"](",");;
};
;
_V43/*res*/["push"]("{");;
_V43/*res*/["push"](("\"name\":" + _V14/*stringEncodeStr*/(_V26/*m*/["name"])));;
_V43/*res*/["push"](",\"type\":");;
_V43/*res*/["push"](this["renderType"](_V26/*m*/["type"], _V29/*par*/["parsed"]));;
_V43/*res*/["push"]("}");;
}};
;
_V43/*res*/["push"]("]");;
_V43/*res*/["push"](", \"extends\": []");;
_V43/*res*/["push"](", \"hasFreePart\": true");;
if(_V29/*par*/["track"]){
_V43/*res*/["push"](", \"track\": true");;
};
;
if(_V29/*par*/["sync"]){
_V43/*res*/["push"](", \"sync\": ");;
_V43/*res*/["push"](_V159/*JSON*/["stringify"](_V29/*par*/["sync"]));;
_V43/*res*/["push"]((", \"hashStr\": " + _V14/*stringEncodeStr*/(_V29/*par*/["hashStr"])));;
_V43/*res*/["push"]((", \"name\": " + _V14/*stringEncodeStr*/(_V29/*par*/["name"])));;
};
;
_V43/*res*/["push"]("}");;
return _V43/*res*/;;
;
});;
this["createClassDefaults"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V25/*i*/;
var _V86/*l*/;
var _V160/*comma*/;
var _V153/*prop*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"]("{");;
_V25/*i*/ = 0;
_V86/*l*/ = ((_V29/*par*/["properties"] && _V29/*par*/["properties"]["length"]) || 0);
_V160/*comma*/;
for(_V25/*i*/;(_V25/*i*/ < _V86/*l*/);++_V25/*i*/){{_V153/*prop*/ = _V29/*par*/["properties"][_V25/*i*/];
if((_V153/*prop*/["kind"] == "init")){
if(_V160/*comma*/){
_V43/*res*/["push"](", ");;
};
;
_V43/*res*/["push"]((_V14/*stringEncodeStr*/(_V28/*identifierName*/(_V153/*prop*/["key"])) + ": "));;
if(_V153/*prop*/["value"]){
_V43/*res*/["push"](this["parseExpression"](_V153/*prop*/["value"]));;

}else{
_V43/*res*/["push"]("undefined");;
};
;
_V160/*comma*/ = true;;
};
;
}};
;
_V43/*res*/["push"]("}");;
return _V43/*res*/;;
;
});;
this["addType"] = (function(_V29/*par*/, _V49/*parParsed*/){
var _V51/*name*/;
var _V66/*type*/;
;
_V51/*name*/ = _V28/*identifierName*/(_V29/*par*/["name"]);
if(this["types"]["hasOwnProperty"][_V51/*name*/]){
this["error"](_V49/*parParsed*/, _V12/*errorMsg*/["typeExists"]);;
};
;
_V66/*type*/;
if(_V29/*par*/["dynamic"]){
_V66/*type*/ = {"isDynamic": true,
"extraRes": _V29/*par*/["extraRes"]};;

}else{
_V66/*type*/ = this["getProvisionalType"](_V49/*parParsed*/);;
};
;
this["types"][_V51/*name*/] = {"name": _V51/*name*/,
"type": _V66/*type*/,
"isDynamic": _V66/*type*/["isDynamic"],
"extraRes": _V29/*par*/["extraRes"]};;
;
});;
this["getTypeName"] = (function(_V68/*parType*/, _V49/*parParsed*/){
var _V51/*name*/;
;
_V51/*name*/;
for(_V51/*name*/ in this["types"]){if((this["types"][_V51/*name*/]["type"] === _V68/*parType*/)){
return this["types"][_V51/*name*/]["name"];;
};
;
};
;
this["error"](_V49/*parParsed*/, _V12/*errorMsg*/["internalTypeHasNoName"]);;
;
});;
this["createType"] = (function(_V29/*par*/){
var _V51/*name*/;
var _V57/*entry*/;
var _V66/*type*/;
var _V161/*provisional*/;
;
_V51/*name*/ = _V28/*identifierName*/(_V29/*par*/["name"]);
_V57/*entry*/ = this["_getTypeEntry"](_V29/*par*/["name"]);
if(_V57/*entry*/["type"]["isDynamic"]){
this["error"](_V29/*par*/["par"], _V12/*errorMsg*/["dynamicTypeCantBeDefined"]);;
};
;
if(_V57/*entry*/["isDefined"]){
this["error"](_V29/*par*/["par"], _V12/*errorMsg*/["typeRedefinition"]);;
};
;
_V66/*type*/ = _V18/*classSystem*/["createClass"](_V29/*par*/["literal"], {});
_V161/*provisional*/ = _V57/*entry*/["type"];
_V57/*entry*/["type"] = _V66/*type*/;;
try
{this["resolveProvisional"](_V161/*provisional*/, _V66/*type*/);;
}catch(_V162/*e*/){this["error"](_V29/*par*/["par"], _V12/*errorMsg*/["typeRedefinition"]);;
};
;
_V57/*entry*/["isDefined"] = true;;
;
});;
this["_getTypeEntry"] = (function(_V71/*parName*/, _V49/*parParsed*/, _V29/*par*/){
var _V51/*name*/;
var _V163/*throwError*/;
var _V119/*typename*/;
var _V164/*typeEntry*/;
var _V91/*extraRes*/;
;
_V51/*name*/ = _V28/*identifierName*/(_V71/*parName*/);
_V163/*throwError*/ = true;
if((_V29/*par*/ && _V29/*par*/["dontThrow"])){
_V163/*throwError*/ = false;;
};
;
if(this["types"]["hasOwnProperty"](_V51/*name*/)){
return this["types"][_V51/*name*/];;
};
;
if((_V51/*name*/[(_V51/*name*/["length"] - 1)] == "*")){
_V119/*typename*/ = _V51/*name*/["substr"](0, (_V51/*name*/["length"] - 1));
_V164/*typeEntry*/ = this["_getTypeEntry"](_V119/*typename*/, _V49/*parParsed*/, _V29/*par*/);
if(_V164/*typeEntry*/){
_V91/*extraRes*/ = _V164/*typeEntry*/["extraRes"];
this["types"][_V51/*name*/] = {"name": _V51/*name*/,
"type": _V18/*classSystem*/["_createPromiseOfClass"](_V164/*typeEntry*/["type"]),
"isDynamic": false,
"extraRes": _V91/*extraRes*/};;
_V91/*extraRes*/["push"]("var ");;
_V91/*extraRes*/["push"](this["renderType"](_V51/*name*/));;
this["common"]["useClassSystem"] = true;;
_V91/*extraRes*/["push"](" = classSystem._createPromiseOfClass(");;
_V91/*extraRes*/["push"](this["renderType"](_V119/*typename*/));;
_V91/*extraRes*/["push"](");\nvar ");;
_V91/*extraRes*/["push"]((this["getVariableName"](_V51/*name*/) + " = "));;
_V91/*extraRes*/["push"](this["renderType"](_V51/*name*/));;
_V91/*extraRes*/["push"](";\n");;
_V91/*extraRes*/["push"]((("var " + this["getConstructorName"](_V51/*name*/)) + " = undefined;"));;
_V91/*extraRes*/["push"](this["_typeReadyCode"]({"typename": _V51/*name*/,
"noConstructor": false}));;
return this["types"][_V51/*name*/];;
};
;
};
;
if(! _V163/*throwError*/){
return;;
};
;
this["error"](_V49/*parParsed*/, _V12/*errorMsg*/["typeUndeclared"], {"name": _V51/*name*/});;
;
});;
this["getType"] = (function(_V71/*parName*/, _V49/*parParsed*/, _V29/*par*/){
var _V57/*entry*/;
;
_V57/*entry*/ = this["_getTypeEntry"](_V71/*parName*/, _V49/*parParsed*/, _V29/*par*/);
if(_V57/*entry*/){
return _V57/*entry*/["type"];;
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
this["getConstructorName"] = (function(_V71/*parName*/){
var _V51/*name*/;
var _V23/*t*/;
;
_V51/*name*/ = _V28/*identifierName*/(_V71/*parName*/);
if(this["types"]["hasOwnProperty"](_V51/*name*/)){
_V23/*t*/ = this["types"][_V51/*name*/];
if(! _V23/*t*/["constructorName"]){
_V23/*t*/["constructorName"] = this["getUniqueName"]((_V51/*name*/ + "-constructor"));;
if(! _V23/*t*/["isDynamic"]){
this["localClassConstructors"][_V51/*name*/] = _V23/*t*/["constructorName"];;
};
;
};
;
return _V23/*t*/["constructorName"];;
};
;
this["error"](_V71/*parName*/, _V12/*errorMsg*/["typeUndeclared"], {"name": _V51/*name*/});;
;
});;
this["expTryStatement"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V165/*catchPromise*/;
var _V166/*continuePromise*/;
var _V130/*b*/;
var _V131/*extraPar*/;
var _V167/*temporaryPs*/;
;
_V43/*res*/ = this["newResult"]();
_V165/*catchPromise*/;
_V166/*continuePromise*/;
if(_V32/*checkPromising*/(_V29/*par*/)){
this["stack"]("tryCatchFunctionStr");;
this["stack"]("catchFunctionStr");;
_V166/*continuePromise*/ = this["getUniqueName"]();;
_V43/*res*/["addPre"]((((("var " + _V166/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
_V165/*catchPromise*/ = this["getUniqueName"]();;
_V43/*res*/["addPre"]((((("var " + _V165/*catchPromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
this["tryCatchFunctionStr"] = (this["getUniqueName"]() + "/*try catch*/");;
_V43/*res*/["addPre"]((((("var " + this["tryCatchFunctionStr"]) + " = function(code){ return function(res){ try{code(res);}catch(e){ ") + _V165/*catchPromise*/) + ".resolve(e); }; }; };\n"));;
this["catchFunctionStr"] = this["getUniqueName"]();;
_V43/*res*/["addPre"]((((("var " + this["catchFunctionStr"]) + " = function(e){ ") + _V165/*catchPromise*/) + ".resolve(e); };\n"));;
_V43/*res*/["push"]((this["tryCatchFunctionStr"] + "(function()"));;

}else{
_V43/*res*/["push"]("try\n");;
};
;
_V130/*b*/ = _V29/*par*/["block"];
_V131/*extraPar*/ = {};
_V130/*b*/["brackets"] = true;;
if(_V32/*checkPromising*/(_V29/*par*/)){
_V131/*extraPar*/["postCode"] = this["newResult"]((_V166/*continuePromise*/ + ".resolve()"));;
};
;
_V43/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](_V130/*b*/, _V131/*extraPar*/)));;
if(_V32/*checkPromising*/(_V29/*par*/)){
this["unstack"]("tryCatchFunctionStr");;
this["unstack"]("catchFunctionStr");;
_V43/*res*/["push"](")();\n");;
_V43/*res*/["push"]((((_V165/*catchPromise*/ + ".then(") + this["tryCatchFunctionStr"]) + "(function("));;

}else{
_V43/*res*/["push"]("catch(");;
};
;
_V167/*temporaryPs*/;
if(_V29/*par*/["handler"]["param"]){
_V43/*res*/["push"](this["getVariableName"](_V28/*identifierName*/(_V29/*par*/["handler"]["param"])));;
_V167/*temporaryPs*/ = this["addLocalVariableTemporary"]({"name": _V28/*identifierName*/(_V29/*par*/["handler"]["param"]),
"typename": "var",
"parameter": true}, _V29/*par*/["handler"]);;
};
;
_V43/*res*/["push"](")");;
_V130/*b*/ = _V29/*par*/["handler"]["body"];;
_V131/*extraPar*/ = {};;
_V130/*b*/["brackets"] = true;;
if(_V32/*checkPromising*/(_V29/*par*/)){
_V131/*extraPar*/["postCode"] = this["newResult"]((_V166/*continuePromise*/ + ".resolve();"));;
};
;
_V43/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](_V130/*b*/, _V131/*extraPar*/)));;
if(_V32/*checkPromising*/(_V29/*par*/)){
_V43/*res*/["push"]("));\n");;
_V43/*res*/["push"](_V166/*continuePromise*/);;
_V43/*res*/["push"](((".then(" + this["tryCatchFunctionStr"]) + "(function(){"));;
_V43/*res*/["addPost"]((("}), " + this["catchFunctionStr"]) + ")"));;
};
;
if(_V29/*par*/["finally"]){
_V43/*res*/["push"]("finally");;
_V130/*b*/ = _V29/*par*/["finally"];;
_V130/*b*/["brackers"] = true;;
_V43/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](_V130/*b*/)));;
};
;
if(_V167/*temporaryPs*/){
_V167/*temporaryPs*/["resolve"]();;
};
;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["getModuleHashStr"] = (function(){
;
return (this["hashStr"] || "unknownhash");;
;
});;
this["makeStatement"] = (function(_V29/*par*/){
var _V168/*statementRes*/;
;
_V168/*statementRes*/ = this["newResult"]();
_V168/*statementRes*/["setStatement"]();;
_V168/*statementRes*/["push"](_V29/*par*/);;
_V168/*statementRes*/["push"](";\n");;
return _V168/*statementRes*/;;
;
});;
this["expBlockStatement"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V29/*par*/["brackets"] = true;;
_V43/*res*/["pushType"](this["blockCreator"](_V29/*par*/));;
return _V43/*res*/;;
;
});;
this["blockCreator"] = (function(_V29/*par*/, _V169/*parExtra*/){
var _V43/*res*/;
var _V170/*blockRes*/;
var _V171/*sAr*/;
var _V25/*i*/;
var _V86/*l*/;
;
if(! _V169/*parExtra*/){
_V169/*parExtra*/ = {};;
};
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["setType"](_V19/*statementType*/);;
if(_V29/*par*/["brackets"]){
_V43/*res*/["push"]("{");;
};
;
_V170/*blockRes*/ = this["newResult"]();
_V171/*sAr*/ = [];
if((_V29/*par*/ instanceof _V172/*Array*/)){
_V171/*sAr*/ = _V29/*par*/;;

}else{
if((_V29/*par*/["type"] == "BlockStatement")){
_V171/*sAr*/ = _V29/*par*/["body"];;

}else{
_V173/*console*/["log"]("here <------------------------");;
_V171/*sAr*/["push"](this["parseExpression"](_V29/*par*/));;
};
;
};
;
if(_V169/*parExtra*/["preCode"]){
_V170/*blockRes*/["push"](this["makeStatement"](_V169/*parExtra*/["preCode"]));;
};
;
_V25/*i*/ = 0;
_V86/*l*/ = _V171/*sAr*/["length"];
for(_V25/*i*/;(_V25/*i*/ < _V86/*l*/);++_V25/*i*/){{_V170/*blockRes*/["push"](this["makeStatement"](this["parseExpression"](_V171/*sAr*/[_V25/*i*/])));;
}};
;
if(_V169/*parExtra*/["postCode"]){
_V170/*blockRes*/["push"](this["makeStatement"](_V169/*parExtra*/["postCode"]));;
};
;
_V43/*res*/["push"](this["makeCompleteStatement"](_V170/*blockRes*/));;
if(_V29/*par*/["brackets"]){
_V43/*res*/["push"]("}");;
};
;
return _V43/*res*/;;
;
});;
this["parseExpression"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["_parseExpression"](_V29/*par*/);
if(! _V43/*res*/["getType"]()){
this["error"](_V29/*par*/, _V12/*errorMsg*/["internalMissingResultType"]);;
};
;
_V43/*res*/["setParsed"](_V29/*par*/);;
return _V43/*res*/;;
;
});;
this["_parseExpression"] = (function(_V174/*value*/){
var _V43/*res*/;
;
_V43/*res*/;
switch (_V174/*value*/["type"]){
case "ArrayExpression":
return this["expArrayExpression"](_V174/*value*/);;
case "AssignmentExpression":
return this["expAssignmentExpression"](_V174/*value*/);;
case "BinaryExpression":
return this["expBinaryExpression"](_V174/*value*/);;
case "BlockStatement":
return this["expBlockStatement"](_V174/*value*/);;
case "BreakStatement":
return this["expBreakStatement"](_V174/*value*/);;
case "CallExpression":
return this["expCallExpression"](_V174/*value*/);;
case "Class":
return this["expClassStatement"](_V174/*value*/);;
case "ClassObjectExpression":
return this["expClassObjectExpression"](_V174/*value*/);;
case "ConditionalExpression":
return this["conditionalExpression"](_V174/*value*/);;
case "ConnectExpression":
return this["connectExpression"](_V174/*value*/);;
case "ContinueStatement":
return this["expContinueStatement"](_V174/*value*/);;
case "DebuggerStatement":
return this["expDebuggerStatement"](_V174/*value*/);;
case "EmptyStatement":
_V43/*res*/ = this["newResult"]();;
_V43/*res*/["setType"]("var");;
return _V43/*res*/;;
case "ExpressionStatement":
return this["expExpressionStatement"](_V174/*value*/);;
case "ForInStatement":
return this["expForInStatement"](_V174/*value*/);;
case "ForStatement":
return this["expForStatement"](_V174/*value*/);;
case "FunctionExpression":
return this["expFunctionExpression"](_V174/*value*/);;
case "FunctionDeclaration":
return this["expFunctionDeclaration"](_V174/*value*/);;
case "MemberFunction":
return this["expMemberFunction"](_V174/*value*/);;
case "Identifier":
return this["expIdentifier"](_V174/*value*/);;
case "IfStatement":
return this["expIfStatement"](_V174/*value*/);;
case "InheritedExpression":
return this["expInheritedExpression"](_V174/*value*/);;
case "Literal":
return this["expLiteral"](_V174/*value*/);;
case "MemberExpression":
return this["expMemberExpression"](_V174/*value*/);;
case "NewExpression":
return this["expNewExpression"](_V174/*value*/);;
case "ObjectExpression":
return this["expObjectExpression"](_V174/*value*/);;
case "ReturnStatement":
return this["expReturnStatement"](_V174/*value*/);;
case "SwitchStatement":
return this["expSwitchStatement"](_V174/*value*/);;
case "ThisExpression":
return this["expThisExpression"](_V174/*value*/);;
case "ThrowStatement":
return this["expThrowStatement"](_V174/*value*/);;
case "TryStatement":
return this["expTryStatement"](_V174/*value*/);;
case "UnaryExpression":
if((_V174/*value*/["operator"] == "*")){
return this["expPromiseExpression"](_V174/*value*/["argument"]);;
};
;
if((_V174/*value*/["operator"] == "require")){
return this["expRequireExpression"](_V174/*value*/["argument"]);;
};
;
return this["expUnaryExpression"](_V174/*value*/);;
case "UpdateExpression":
return this["expUpdateExpression"](_V174/*value*/);;
case "VariableStatement":
return this["expVariableStatement"](_V174/*value*/);;
case "VariableDeclaration":
return this["expVariableDeclaration"](_V174/*value*/);;
case "WhileStatement":
return this["whileStatement"](_V174/*value*/);;
default:
this["error"](_V174/*value*/, _V12/*errorMsg*/["unknownType"]);;
}
;
;
return "/*this should not happen*/";;
;
});;
this["expExpressionStatement"] = (function(_V49/*parParsed*/){
var _V43/*res*/;
;
_V43/*res*/ = this["getDestroyTemporaryClassCode"]({"value": this["parseExpression"](_V49/*parParsed*/["expression"])});
_V43/*res*/["push"](";");;
return _V43/*res*/;;
;
});;
this["expDebuggerStatement"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"]("debugger");;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["expFunctionExpression"] = (function(_V174/*value*/, _V175/*declaration*/){
var _V176/*cp*/;
var _V177/*funName*/;
var _V127/*funRes*/;
var _V178/*uv*/;
var _V51/*name*/;
var _V43/*res*/;
;
_V176/*cp*/ = this["newInstance"](_V174/*value*/, {"dynamicCode": (this["dynamicCode"] || this["isFunction"])});
_V177/*funName*/ = _V176/*cp*/["getFunctionName"]();
_V127/*funRes*/ = _V176/*cp*/["getFunctionRes"]();
_V178/*uv*/ = _V176/*cp*/["_getUsedVairables"]();
_V51/*name*/;
for(_V51/*name*/ in _V178/*uv*/){if((_V178/*uv*/[_V51/*name*/] === true)){
this["_addUsedVariable"](_V51/*name*/);;
};
;
};
;
_V43/*res*/;
if((_V177/*funName*/ && _V127/*funRes*/)){
this["addFunction"](_V127/*funRes*/, _V177/*funName*/);;
_V43/*res*/ = this["newResult"](this["getVariableName"](_V177/*funName*/));;
_V43/*res*/["setType"](_V127/*funRes*/["getType"]());;
return _V43/*res*/;;
};
;
_V43/*res*/ = this["newResult"]();;
if(! _V175/*declaration*/){
_V43/*res*/["push"]("(");;
};
;
_V43/*res*/["pushType"]((_V127/*funRes*/ || _V176/*cp*/["getResult"]()));;
if(! _V175/*declaration*/){
_V43/*res*/["push"](")");;
};
;
return _V43/*res*/;;
;
});;
this["expFunctionDeclaration"] = (function(_V174/*value*/){
;
return this["expFunctionExpression"](_V174/*value*/, true);;
;
});;
this["expMemberFunction"] = (function(_V174/*value*/){
;
_V174/*value*/["id"] = _V46/*undefined*/;;
return this["expFunctionExpression"](_V174/*value*/);;
;
});;
this["expUpdateExpression"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
if(_V29/*par*/["prefix"]){
_V43/*res*/["push"](_V29/*par*/["operator"]);;
};
;
_V43/*res*/["pushType"](this["expectTypeVar"](this["parseExpression"](_V29/*par*/["argument"])));;
if(! _V29/*par*/["prefix"]){
_V43/*res*/["push"](_V29/*par*/["operator"]);;
};
;
return _V43/*res*/;;
;
});;
this["expIdentifier"] = (function(_V29/*par*/){
;
return this["getVariable"](_V28/*identifierName*/(_V29/*par*/["name"]));;
;
});;
this["expLiteral"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
switch (typeof _V29/*par*/["value"]){
case "string":
_V43/*res*/["push"](_V14/*stringEncodeStr*/(_V29/*par*/["value"]));;
break;;
case "number":
_V43/*res*/["push"](("" + _V29/*par*/["value"]));;
break;;
case "boolean":
if(_V29/*par*/["value"]){
_V43/*res*/["push"]("true");;

}else{
_V43/*res*/["push"]("false");;
};
;
break;;
default:
if((_V29/*par*/["value"] === null)){
_V43/*res*/["push"]("null");;

}else{
this["error"](_V29/*par*/, _V12/*errorMsg*/["internalUnknownLiteralType"]);;
};
;
}
;
;
_V43/*res*/["setType"](this["getType"]("var"));;
return _V43/*res*/;;
;
});;
this["expPromiseExpression"] = (function(_V179/*parExpression*/){
var _V43/*res*/;
var _V180/*expressionRes*/;
var _V181/*promiseNameStr*/;
var _V182/*dereferencePre*/;
var _V183/*preRes*/;
var _V184/*dereferencePost*/;
var _V185/*postRes*/;
var _V186/*promiseType*/;
;
_V43/*res*/ = this["newResult"]();
_V180/*expressionRes*/ = this["parseExpression"](_V179/*parExpression*/);
_V181/*promiseNameStr*/ = this["getUniqueName"]();
_V43/*res*/["makePromising"]();;
_V43/*res*/["setPromiseName"](_V181/*promiseNameStr*/);;
_V182/*dereferencePre*/ = this["dereferencePromisePreCode"]({"value": _V180/*expressionRes*/});
_V183/*preRes*/ = this["newResult"]();
_V183/*preRes*/["push"](_V182/*dereferencePre*/);;
_V183/*preRes*/["push"]((this["tryCatchFunctionStr"] + "(function("));;
_V183/*preRes*/["push"](_V181/*promiseNameStr*/);;
_V183/*preRes*/["push"]("){");;
_V43/*res*/["addPre"](_V183/*preRes*/);;
_V184/*dereferencePost*/ = this["dereferencePromisePostCode"]({"value": _V180/*expressionRes*/});
_V185/*postRes*/ = this["newResult"]();
_V185/*postRes*/["push"](("}), " + this["catchFunctionStr"]));;
_V185/*postRes*/["push"](_V184/*dereferencePost*/);;
_V185/*postRes*/["push"](";");;
_V43/*res*/["addPost"](_V185/*postRes*/);;
_V186/*promiseType*/ = _V180/*expressionRes*/["getType"]();
_V43/*res*/["setType"](this["getClassFromPromiseOf"](_V186/*promiseType*/));;
return _V43/*res*/;;
;
});;
this["expUnaryExpression"] = (function(_V179/*parExpression*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"](_V179/*parExpression*/["operator"]);;
_V43/*res*/["push"](" ");;
_V43/*res*/["pushType"](this["expectTypeVar"](this["parseExpression"](_V179/*parExpression*/["argument"])));;
return _V43/*res*/;;
;
});;
this["expRequireExpression"] = (function(_V179/*parExpression*/){
var _V43/*res*/;
var _V42/*tempRes*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["makePromising"]();;
_V43/*res*/["setPromiseName"](this["getUniqueName"]());;
this["common"]["useRequire"] = true;;
_V42/*tempRes*/ = this["newResult"]();
_V42/*tempRes*/["push"]("__requireFun(");;
_V42/*tempRes*/["push"](this["parseExpression"](_V179/*parExpression*/));;
_V42/*tempRes*/["push"](").then(");;
_V43/*res*/["addPre"](this["makeCompleteStatement"](_V42/*tempRes*/));;
_V43/*res*/["addPre"]((this["tryCatchFunctionStr"] + "(function("));;
_V43/*res*/["addPre"](_V43/*res*/["getPromiseName"]());;
_V43/*res*/["addPre"]("){");;
_V43/*res*/["addPost"]("}));");;
_V43/*res*/["setType"]("var");;
return _V43/*res*/;;
;
});;
this["expNewExpression"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V187/*typed*/;
var _V66/*type*/;
var _V25/*i*/;
var _V188/*constructorType*/;
var _V189/*expression*/;
;
_V43/*res*/ = this["newResult"]();
_V187/*typed*/ = false;
_V66/*type*/ = "var";
if((_V29/*par*/["callee"] && (_V29/*par*/["callee"]["type"] == "Identifier"))){
_V66/*type*/ = this["getType"](_V28/*identifierName*/(_V29/*par*/["callee"]), _V29/*par*/, {"dontThrow": true});;
if(_V66/*type*/){
_V43/*res*/["push"]("new ");;
_V43/*res*/["push"](this["getConstructorName"](_V29/*par*/["callee"]));;
_V43/*res*/["push"]("(");;
_V187/*typed*/ = true;;
_V43/*res*/["setType"](this["createTemporaryTrackedClass"](_V66/*type*/));;
};
;
};
;
if(! _V187/*typed*/){
_V43/*res*/["push"]("new ");;
_V43/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V29/*par*/["callee"])));;
_V43/*res*/["push"]("(");;
};
;
_V25/*i*/ = 0;
_V188/*constructorType*/;
if(_V187/*typed*/){
_V188/*constructorType*/ = this["getConstructorType"]({"type": _V66/*type*/}, _V29/*par*/);;
};
;
for(_V25/*i*/;(_V25/*i*/ < _V29/*par*/["arguments"]["length"]);++_V25/*i*/){{if(_V25/*i*/){
_V43/*res*/["push"](", ");;
};
;
_V189/*expression*/ = this["parseExpression"](_V29/*par*/["arguments"][_V25/*i*/]);
if(_V187/*typed*/){
_V43/*res*/["push"](this["getPassAsTypeCode"]({"value": _V189/*expression*/,
"valueType": _V189/*expression*/["getType"](),
"type": this["getFunctionArgumentType"](_V188/*constructorType*/, _V25/*i*/, _V29/*par*/),
"errorFun": this["getWarningFun"](_V29/*par*/)}));;

}else{
_V43/*res*/["push"](this["expectTypeVar"](_V189/*expression*/));;
};
;
}};
;
_V43/*res*/["push"](")");;
if(! _V187/*typed*/){
_V43/*res*/["setType"]("var");;
};
;
return _V43/*res*/;;
;
});;
this["connectExpression"] = (function(_V49/*parParsed*/){
var _V43/*res*/;
var _V190/*signalObject*/;
var _V191/*signalProperty*/;
var _V192/*slotObject*/;
var _V193/*slotProperty*/;
var _V194/*fun*/;
;
_V43/*res*/ = this["newResult"]();
if((_V49/*parParsed*/["signal"]["type"] != "MemberExpression")){
this["error"](_V49/*parParsed*/["signal"], _V12/*errorMsg*/["expectedMemberExpression"]);;
};
;
if(_V49/*parParsed*/["signal"]["computed"]){
this["error"](_V49/*parParsed*/["signal"], _V12/*errorMsg*/["noComputedMembersAllowed"]);;
};
;
_V190/*signalObject*/ = this["parseExpression"](_V49/*parParsed*/["signal"]["object"]);
_V191/*signalProperty*/ = _V28/*identifierName*/(_V49/*parParsed*/["signal"]["property"]);
if(_V49/*parParsed*/["slot"]){
if((_V49/*parParsed*/["slot"]["type"] != "MemberExpression")){
this["error"](_V49/*parParsed*/["slot"], _V12/*errorMsg*/["expectedMemberExpression"]);;
};
;
if(_V49/*parParsed*/["slot"]["computed"]){
this["error"](_V49/*parParsed*/["slot"], _V12/*errorMsg*/["noComputedMembersAllowed"]);;
};
;
_V192/*slotObject*/ = this["parseExpression"](_V49/*parParsed*/["slot"]["object"]);
_V193/*slotProperty*/ = _V28/*identifierName*/(_V49/*parParsed*/["slot"]["property"]);
_V43/*res*/["push"](this["connectSlotCode"]({"signalObject": _V190/*signalObject*/,
"signalProperty": _V191/*signalProperty*/,
"slotObject": _V192/*slotObject*/,
"slotProperty": _V193/*slotProperty*/,
"errorFun": this["getWarningFun"](_V49/*parParsed*/)}));;

}else{
if(_V49/*parParsed*/["fun"]){
_V194/*fun*/ = this["parseExpression"](_V49/*parParsed*/["fun"]);
_V43/*res*/["push"](this["connectFunCode"]({"signalObject": _V190/*signalObject*/,
"signalProperty": _V191/*signalProperty*/,
"fun": _V194/*fun*/,
"errorFun": this["getWarningFun"](_V49/*parParsed*/)}));;

}else{
this["error"](_V49/*parParsed*/, _V12/*errorMsg*/["unknownConnect"]);;
};
};
;
_V43/*res*/["setType"]("var");;
return _V43/*res*/;;
;
});;
this["breakOrContinuePromise"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V195/*promiseName*/;
var _V196/*outerBlock*/;
var _V130/*b*/;
var _V132/*block*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["makePromising"]();;
_V195/*promiseName*/ = (_V29/*par*/["promiseName"] || this["getUniqueName"]());
_V43/*res*/["setPromiseName"](_V195/*promiseName*/);;
this["stack"]("breakCode");;
this["stack"]("continueCode");;
this["breakCode"] = (((_V195/*promiseName*/ + ".resolve(false); return ") + _V195/*promiseName*/) + ";\n");;
this["continueCode"] = (((_V195/*promiseName*/ + ".resolve(true); return ") + _V195/*promiseName*/) + ";\n");;
_V43/*res*/["push"]((((("var " + _V195/*promiseName*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
_V196/*outerBlock*/ = this["newResult"]();
if(_V29/*par*/["preCondition"]){
_V196/*outerBlock*/["push"]("if(");;
_V196/*outerBlock*/["push"](_V29/*par*/["preCondition"]);;
_V196/*outerBlock*/["push"]("){");;
};
;
_V130/*b*/ = _V29/*par*/["block"];
_V130/*b*/["brackets"] = false;;
_V132/*block*/ = this["blockCreator"](_V130/*b*/, {"postCode": this["newResult"](this["continueCode"])});
_V196/*outerBlock*/["push"](this["makeCompleteStatement"](_V132/*block*/));;
if(_V29/*par*/["preCondition"]){
_V196/*outerBlock*/["push"]("}else{");;
_V196/*outerBlock*/["push"](this["breakCode"]);;
_V196/*outerBlock*/["push"]("};\n");;
};
;
_V43/*res*/["push"](this["makeCompleteStatement"](_V196/*outerBlock*/));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
return _V43/*res*/;;
;
});;
this["generateLoop"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V197/*loopFun*/;
var _V198/*loopEndPromise*/;
var _V199/*loopCode*/;
var _V200/*doFun*/;
var _V201/*doFunStatement*/;
;
_V43/*res*/ = this["newResult"]();
_V197/*loopFun*/ = this["getUniqueName"]();
_V198/*loopEndPromise*/ = this["getUniqueName"]();
_V43/*res*/["push"]((((("var " + _V198/*loopEndPromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
_V43/*res*/["push"]((("var " + _V197/*loopFun*/) + " = function(){"));;
_V199/*loopCode*/ = this["breakOrContinuePromise"]({"block": _V29/*par*/["block"],
"preCondition": _V29/*par*/["preCondition"],
"postCode": _V29/*par*/["postCode"]});
_V43/*res*/["push"](this["makeStatement"](this["makeCompleteStatement"](_V199/*loopCode*/)));;
_V43/*res*/["push"]("return ");;
_V43/*res*/["push"](_V199/*loopCode*/["getPromiseName"]());;
_V43/*res*/["push"](";\n");;
_V43/*res*/["push"]("};\n");;
_V200/*doFun*/ = this["getUniqueName"]();
_V43/*res*/["push"]((("var " + _V200/*doFun*/) + " = function(){"));;
_V43/*res*/["push"](_V197/*loopFun*/);;
_V43/*res*/["push"]("().then(function(contLoop){\n");;
_V43/*res*/["push"]("if (contLoop){");;
_V201/*doFunStatement*/ = this["newResult"]();
if(_V29/*par*/["postCode"]){
_V201/*doFunStatement*/["push"](this["makeStatement"](_V29/*par*/["postCode"]));;
};
;
_V201/*doFunStatement*/["push"]((_V200/*doFun*/ + "();"));;
_V43/*res*/["push"](this["makeCompleteStatement"](_V201/*doFunStatement*/));;
_V43/*res*/["push"]("}else{");;
_V43/*res*/["push"]((_V198/*loopEndPromise*/ + ".resolve();"));;
_V43/*res*/["push"]("};\n");;
_V43/*res*/["push"]("});\n");;
_V43/*res*/["push"]("};\n");;
_V43/*res*/["push"]((_V200/*doFun*/ + "();\n"));;
_V43/*res*/["push"](_V198/*loopEndPromise*/);;
_V43/*res*/["push"](".then(function(){");;
_V43/*res*/["addPost"]("});");;
return _V43/*res*/;;
;
});;
this["expForStatement"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V202/*statement*/;
var _V203/*promising*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
_V43/*res*/ = this["newResult"]();
_V202/*statement*/;
_V203/*promising*/ = false;
if(((_V32/*checkPromising*/(_V29/*par*/["test"]) || _V32/*checkPromising*/(_V29/*par*/["update"])) || _V32/*checkPromising*/(_V29/*par*/["body"]))){
_V203/*promising*/ = true;;
};
;
if(_V203/*promising*/){
_V43/*res*/["push"](this["makeStatement"](this["parseExpression"](_V29/*par*/["init"])));;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
_V43/*res*/["push"](this["generateLoop"]({"block": _V29/*par*/["body"],
"preCondition": this["parseExpression"](_V29/*par*/["test"]),
"postCode": this["parseExpression"](_V29/*par*/["update"])}));;
this["unstack"]("algorithmicCode");;

}else{
_V43/*res*/["push"]("for(");;
_V43/*res*/["push"](this["parseExpression"](_V29/*par*/["init"]));;
_V43/*res*/["push"](";");;
_V43/*res*/["push"](this["parseExpression"](_V29/*par*/["test"]));;
_V43/*res*/["push"](";");;
_V43/*res*/["push"](this["parseExpression"](_V29/*par*/["update"]));;
_V43/*res*/["push"]("){");;
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
this["stack"]("continueCode");;
this["continueCode"] = "continue;";;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
_V202/*statement*/ = this["newResult"]();;
_V202/*statement*/["push"](this["expBlockStatement"](_V29/*par*/["body"]));;
_V43/*res*/["push"](this["makeCompleteStatement"](_V202/*statement*/));;
this["unstack"]("algorithmicCode");;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
_V43/*res*/["push"]("}");;
};
;
this["unstack"]("dynamicCode");;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["expForInStatement"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V202/*statement*/;
var _V203/*promising*/;
var _V204/*iteratorRes*/;
var _V205/*iteratorAccess*/;
var _V206/*arrayName*/;
var _V207/*iName*/;
var _V208/*conditionRes*/;
var _V209/*postCodeRes*/;
var _V130/*b*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
_V43/*res*/ = this["newResult"]();
_V202/*statement*/;
_V203/*promising*/ = false;
if(_V32/*checkPromising*/(_V29/*par*/["body"])){
_V203/*promising*/ = true;;
};
;
if(_V203/*promising*/){
_V204/*iteratorRes*/ = this["expectTypeVar"](this["parseExpression"](_V29/*par*/["left"]));
_V205/*iteratorAccess*/ = _V204/*iteratorRes*/;
if(_V204/*iteratorRes*/["promising"]){
_V205/*iteratorAccess*/ = _V204/*iteratorRes*/["getPromiseName"]();;
};
;
_V206/*arrayName*/ = this["getUniqueName"]();
_V43/*res*/["addPre"]((("var " + _V206/*arrayName*/) + " = [];"));;
_V43/*res*/["push"]("for(");;
_V43/*res*/["push"](_V204/*iteratorRes*/);;
_V43/*res*/["push"](" in ");;
_V43/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V29/*par*/["right"])));;
_V43/*res*/["push"]("){");;
_V43/*res*/["push"]((_V206/*arrayName*/ + ".push("));;
_V43/*res*/["push"](_V205/*iteratorAccess*/);;
_V43/*res*/["push"](");");;
_V43/*res*/["push"]("};");;
_V43/*res*/["push"](_V204/*iteratorRes*/);;
_V43/*res*/["push"](((" = " + _V206/*arrayName*/) + "[0];"));;
_V207/*iName*/ = this["getUniqueName"]();
_V43/*res*/["push"]((("var " + _V207/*iName*/) + " = 0;"));;
_V208/*conditionRes*/ = this["newResult"]();
_V208/*conditionRes*/["push"]((((_V207/*iName*/ + " < ") + _V206/*arrayName*/) + ".length"));;
_V209/*postCodeRes*/ = this["newResult"]();
_V209/*postCodeRes*/["push"]((_V207/*iName*/ + "++;"));;
_V209/*postCodeRes*/["push"](_V204/*iteratorRes*/);;
_V209/*postCodeRes*/["push"](((((" = " + _V206/*arrayName*/) + "[") + _V207/*iName*/) + "];"));;
_V43/*res*/["push"](this["generateLoop"]({"block": _V29/*par*/["body"],
"preCondition": _V208/*conditionRes*/,
"postCode": _V209/*postCodeRes*/}));;
_V43/*res*/["push"]("}");;

}else{
_V43/*res*/["push"]("for(");;
_V43/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V29/*par*/["left"])));;
_V43/*res*/["push"](" in ");;
_V43/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V29/*par*/["right"])));;
_V43/*res*/["push"](")");;
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
this["stack"]("continueCode");;
this["continueCode"] = "continue;";;
_V202/*statement*/ = this["newResult"]();;
_V130/*b*/ = _V29/*par*/["body"];
_V130/*b*/["brackets"] = true;;
_V202/*statement*/["push"](this["blockCreator"](_V130/*b*/));;
_V43/*res*/["push"](this["makeCompleteStatement"](_V202/*statement*/));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
};
;
this["unstack"]("dynamicCode");;
this["unstack"]("algorithmicCode");;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["whileStatement"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V210/*statements*/;
var _V102/*condition*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
_V43/*res*/ = this["newResult"]();
_V210/*statements*/;
_V102/*condition*/ = this["expectTypeVar"](this["parseExpression"](_V29/*par*/["test"]));
if((_V32/*checkPromising*/(_V102/*condition*/) || _V32/*checkPromising*/(_V29/*par*/["body"]))){
_V43/*res*/["push"](this["generateLoop"]({"block": _V29/*par*/["body"],
"preCondition": _V102/*condition*/}));;

}else{
_V43/*res*/["push"]("while(");;
_V43/*res*/["push"](_V102/*condition*/);;
_V43/*res*/["push"]("){\n");;
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
this["stack"]("continueCode");;
this["continueCode"] = "continue;";;
_V43/*res*/["push"](this["makeCompleteStatement"](this["parseExpression"](_V29/*par*/["body"])));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
_V43/*res*/["push"]("}");;
};
;
this["unstack"]("dynamicCode");;
this["unstack"]("algorithmicCode");;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["expIfStatement"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V203/*promising*/;
var _V166/*continuePromise*/;
var _V211/*continueCode*/;
var _V202/*statement*/;
var _V130/*b*/;
var _V131/*extraPar*/;
;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
_V43/*res*/ = this["newResult"]();
_V203/*promising*/ = false;
if((_V29/*par*/["consequent"] && _V32/*checkPromising*/(_V29/*par*/["consequent"]))){
_V203/*promising*/ = true;;
};
;
if((_V29/*par*/["alternate"] && _V32/*checkPromising*/(_V29/*par*/["alternate"]))){
_V203/*promising*/ = true;;
};
;
_V166/*continuePromise*/;
_V211/*continueCode*/;
if(_V203/*promising*/){
_V166/*continuePromise*/ = this["getUniqueName"]();;
_V43/*res*/["push"]((((("var " + _V166/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
_V211/*continueCode*/ = (_V166/*continuePromise*/ + ".resolve();");;
};
;
_V43/*res*/["push"]("if(");;
_V43/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V29/*par*/["test"])));;
_V43/*res*/["push"]("){\n");;
if(! _V29/*par*/["consequent"]){
this["error"](_V29/*par*/, _V12/*errorMsg*/["unknownIfStatement"]);;
};
;
_V202/*statement*/ = this["newResult"]();
_V130/*b*/;
if((_V29/*par*/["consequent"]["type"] == "BlockStatement")){
_V130/*b*/ = _V29/*par*/["consequent"]["body"];;

}else{
_V130/*b*/ = [_V29/*par*/["consequent"]];;
};
;
_V130/*b*/["brackets"] = false;;
_V131/*extraPar*/ = {};
if(_V203/*promising*/){
_V131/*extraPar*/["postCode"] = this["newResult"](_V211/*continueCode*/);;
};
;
_V202/*statement*/["push"](this["blockCreator"](_V130/*b*/, _V131/*extraPar*/));;
_V43/*res*/["push"](this["makeCompleteStatement"](_V202/*statement*/));;
if(_V29/*par*/["alternate"]){
_V43/*res*/["push"]("\n}else{\n");;
_V202/*statement*/ = this["newResult"]();;
if((_V29/*par*/["alternate"]["type"] == "BlockStatement")){
_V130/*b*/ = _V29/*par*/["alternate"]["body"];;

}else{
_V130/*b*/ = [_V29/*par*/["alternate"]];;
};
;
_V130/*b*/["brackets"] = false;;
_V131/*extraPar*/ = {};;
if(_V203/*promising*/){
_V131/*extraPar*/["postCode"] = this["newResult"](_V211/*continueCode*/);;
};
;
_V202/*statement*/["push"](this["blockCreator"](_V130/*b*/, _V131/*extraPar*/));;
_V43/*res*/["push"](this["makeCompleteStatement"](_V202/*statement*/));;

}else{
if(_V203/*promising*/){
_V43/*res*/["push"]("\n}else{\n");;
_V202/*statement*/ = this["newResult"]();;
_V202/*statement*/["push"](_V211/*continueCode*/);;
_V43/*res*/["push"](this["makeCompleteStatement"](_V202/*statement*/));;
};
};
;
_V43/*res*/["push"]("}");;
if(_V203/*promising*/){
_V43/*res*/["push"]((("; " + _V166/*continuePromise*/) + ".then(function(){"));;
_V43/*res*/["addPost"]("});");;
};
;
this["unstack"]("conditionalCode");;
this["unstack"]("algorithmicCode");;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["conditionalExpression"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V212/*tempPromise*/;
var _V213/*tempValue*/;
var _V214/*trueExtraCode*/;
var _V215/*falseExtraCode*/;
;
_V43/*res*/ = this["newResult"]();
if((_V29/*par*/["consequent"]["promising"] || _V29/*par*/["alternate"]["promising"])){
_V43/*res*/["makePromising"]();;
_V212/*tempPromise*/ = this["getUniqueName"]();
_V213/*tempValue*/ = this["getUniqueName"]();
_V43/*res*/["addPre"]("var ");;
_V43/*res*/["addPre"](_V212/*tempPromise*/);;
_V43/*res*/["addPre"](((" = " + this["newPromiseStr"]()) + ";\n"));;
_V43/*res*/["addPre"]("if(");;
_V43/*res*/["addPre"](this["parseExpression"](_V29/*par*/["test"]));;
_V43/*res*/["addPre"]("){");;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
_V214/*trueExtraCode*/ = this["newResult"]();
_V214/*trueExtraCode*/["push"](_V212/*tempPromise*/);;
_V214/*trueExtraCode*/["push"](".resolve(");;
_V214/*trueExtraCode*/["push"](this["parseExpression"](_V29/*par*/["consequent"]));;
_V214/*trueExtraCode*/["push"](");\n");;
_V43/*res*/["addPre"](this["makeCompleteStatement"](_V214/*trueExtraCode*/));;
_V43/*res*/["addPre"]("}else{");;
_V215/*falseExtraCode*/ = this["newResult"]();
_V215/*falseExtraCode*/["push"](_V212/*tempPromise*/);;
_V215/*falseExtraCode*/["push"](".resolve(");;
_V215/*falseExtraCode*/["push"](this["parseExpression"](_V29/*par*/["alternate"]));;
_V215/*falseExtraCode*/["push"](");\n");;
_V43/*res*/["addPre"](this["makeCompleteStatement"](_V215/*falseExtraCode*/));;
_V43/*res*/["addPre"]("};\n");;
_V43/*res*/["addPre"](_V212/*tempPromise*/);;
_V43/*res*/["addPre"](".then(");;
_V43/*res*/["setPromiseName"](this["getUniqueName"]());;
_V43/*res*/["addPre"](_V43/*res*/["getPromiseName"]());;
_V43/*res*/["addPre"]("){");;
_V43/*res*/["addPost"]("});");;
this["unstack"]("conditionalCode");;

}else{
_V43/*res*/["push"]("(");;
_V43/*res*/["push"](this["parseExpression"](_V29/*par*/["test"]));;
_V43/*res*/["push"](" ? ");;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
_V43/*res*/["push"](this["parseExpression"](_V29/*par*/["consequent"]));;
_V43/*res*/["push"](" : ");;
_V43/*res*/["push"](this["parseExpression"](_V29/*par*/["alternate"]));;
_V43/*res*/["push"](")");;
this["unstack"]("conditionalCode");;
};
;
_V43/*res*/["setType"]("var");;
return _V43/*res*/;;
;
});;
this["expSwitchStatement"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V203/*promising*/;
var _V166/*continuePromise*/;
var _V211/*continueCode*/;
var _V216/*discriminant*/;
var _V217/*cases*/;
var _V202/*statement*/;
var _V218/*hasDefault*/;
var _V219/*defaultCase*/;
var _V220/*isDefault*/;
var _V221/*defaultCheck*/;
var _V222/*firstCheck*/;
var _V223/*hasFirstCheck*/;
var _V224/*currentCase*/;
var _V225/*caseFun*/;
var _V226/*checkFun*/;
var _V227/*nextCheckCode*/;
var _V228/*j*/;
var _V229/*nextCaseCode*/;
var _V230/*checkCode*/;
var _V130/*b*/;
var _V131/*extraPar*/;
var _V25/*i*/;
;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
_V43/*res*/ = this["newResult"]();
_V203/*promising*/ = false;
if((_V29/*par*/["cases"] && _V32/*checkPromising*/(_V29/*par*/["cases"]))){
_V203/*promising*/ = true;;
};
;
_V166/*continuePromise*/;
_V211/*continueCode*/;
if(_V203/*promising*/){
_V166/*continuePromise*/ = this["getUniqueName"]();;
_V43/*res*/["push"]((((("var " + _V166/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
_V211/*continueCode*/ = (_V166/*continuePromise*/ + ".resolve(); return;");;
this["stack"]("breakCode");;
this["breakCode"] = _V211/*continueCode*/;;
_V216/*discriminant*/ = this["getUniqueName"]("discriminant");
_V43/*res*/["push"]((("var " + _V216/*discriminant*/) + " = "));;
_V43/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V29/*par*/["discriminant"])));;
_V43/*res*/["push"](";\n");;
_V217/*cases*/ = [];
_V202/*statement*/;
_V218/*hasDefault*/ = false;
_V219/*defaultCase*/;
for(_V25/*i*/ = 0;(_V25/*i*/ < _V29/*par*/["cases"]["length"]);++_V25/*i*/){{_V220/*isDefault*/ = false;
if(! _V29/*par*/["cases"][_V25/*i*/]["test"]){
_V220/*isDefault*/ = true;;
if(! _V218/*hasDefault*/){
_V218/*hasDefault*/ = true;;
_V219/*defaultCase*/ = _V29/*par*/["cases"][_V25/*i*/];;
};
;
};
;
_V217/*cases*/["push"]({"theCase": _V29/*par*/["cases"][_V25/*i*/],
"caseFun": this["getUniqueName"](),
"checkFun": this["getUniqueName"](),
"isDefault": _V220/*isDefault*/});;
}};
;
_V221/*defaultCheck*/ = _V211/*continueCode*/;
if(_V218/*hasDefault*/){
_V221/*defaultCheck*/ = (_V219/*defaultCase*/["checkFun"] + "();");;
};
;
_V222/*firstCheck*/ = _V211/*continueCode*/;
_V223/*hasFirstCheck*/ = false;
for(_V25/*i*/ = 0;(_V25/*i*/ < _V217/*cases*/["length"]);++_V25/*i*/){{_V224/*currentCase*/ = _V217/*cases*/[_V25/*i*/]["theCase"];
_V225/*caseFun*/ = _V217/*cases*/[_V25/*i*/]["caseFun"];
_V226/*checkFun*/ = _V217/*cases*/[_V25/*i*/]["checkFun"];
if(! _V223/*hasFirstCheck*/){
_V223/*hasFirstCheck*/ = true;;
_V222/*firstCheck*/ = (_V226/*checkFun*/ + "()");;
};
;
_V227/*nextCheckCode*/ = _V221/*defaultCheck*/;
for(_V228/*j*/ = (_V25/*i*/ + 1);(_V228/*j*/ < _V217/*cases*/["length"]);++_V228/*j*/){{if(! _V217/*cases*/[_V228/*j*/]["isDefault"]){
_V227/*nextCheckCode*/ = (_V217/*cases*/[_V228/*j*/]["checkFun"] + "()");;
break;;
};
;
}};
;
_V229/*nextCaseCode*/ = _V211/*continueCode*/;
if(_V217/*cases*/[(_V25/*i*/ + 1)]){
_V229/*nextCaseCode*/ = (_V217/*cases*/[(_V25/*i*/ + 1)]["caseFun"] + "(); return;");;
};
;
_V43/*res*/["push"]((("var " + _V226/*checkFun*/) + " = function(){"));;
_V230/*checkCode*/ = this["newResult"]();
_V230/*checkCode*/["push"]((("if(" + _V216/*discriminant*/) + " === "));;
_V230/*checkCode*/["push"](this["expectTypeVar"](this["parseExpression"](_V224/*currentCase*/["test"])));;
_V230/*checkCode*/["push"]("){");;
_V230/*checkCode*/["push"](_V225/*caseFun*/);;
_V230/*checkCode*/["push"]("(); return; };\n");;
_V230/*checkCode*/["push"](_V227/*nextCheckCode*/);;
_V43/*res*/["push"](this["makeCompleteStatement"](_V230/*checkCode*/));;
_V43/*res*/["push"]("};\n");;
_V43/*res*/["push"]((("var " + _V225/*caseFun*/) + " = function(){"));;
_V202/*statement*/ = this["newResult"]();;
_V130/*b*/ = _V224/*currentCase*/["consequent"];
_V131/*extraPar*/ = {};
if(_V203/*promising*/){
_V131/*extraPar*/["postCode"] = this["newResult"]();;
_V131/*extraPar*/["postCode"]["push"](_V229/*nextCaseCode*/);;
};
;
_V202/*statement*/["push"](this["blockCreator"](_V130/*b*/, _V131/*extraPar*/));;
_V43/*res*/["push"](this["makeCompleteStatement"](_V202/*statement*/));;
_V43/*res*/["push"]("};\n");;
}};
;
_V43/*res*/["push"](_V222/*firstCheck*/);;
_V43/*res*/["push"]((("; " + _V166/*continuePromise*/) + ".then(function(){"));;
_V43/*res*/["addPost"]("});");;
this["unstack"]("breakCode");;

}else{
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
_V43/*res*/["push"]("switch (");;
_V43/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V29/*par*/["discriminant"])));;
_V43/*res*/["push"]("){\n");;
_V25/*i*/ = 0;
for(_V25/*i*/ = 0;(_V25/*i*/ < _V29/*par*/["cases"]["length"]);++_V25/*i*/){{_V224/*currentCase*/ = _V29/*par*/["cases"][_V25/*i*/];
if((_V224/*currentCase*/["type"] != "SwitchCase")){
this["error"](_V29/*par*/, _V12/*errorMsg*/["unknownCase"]);;
};
;
if(_V224/*currentCase*/["test"]){
_V43/*res*/["push"]("case ");;
_V43/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V224/*currentCase*/["test"])));;
_V43/*res*/["push"](":\n");;

}else{
_V43/*res*/["push"]("default");;
_V43/*res*/["push"](":\n");;
};
;
_V43/*res*/["push"](this["blockCreator"](_V224/*currentCase*/["consequent"]));;
}};
;
_V43/*res*/["push"]("}\n");;
this["unstack"]("breakCode");;
};
;
this["unstack"]("conditionalCode");;
this["unstack"]("algorithmicCode");;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["expBreakStatement"] = (function(_V49/*parParsed*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
if(this["breakCode"]){
_V43/*res*/["push"](this["breakCode"]);;

}else{
_V43/*res*/["push"]("break;");;
};
;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["expContinueStatement"] = (function(_V49/*parParsed*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
if(this["continueCode"]){
_V43/*res*/["push"](this["continueCode"]);;

}else{
_V43/*res*/["push"]("continue;");;
};
;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["expBinaryExpression"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V231/*left*/;
var _V232/*right*/;
var _V233/*ltype*/;
var _V234/*rtype*/;
var _V212/*tempPromise*/;
var _V213/*tempValue*/;
var _V235/*rightExtraCode*/;
;
_V43/*res*/ = this["newResult"]();
_V231/*left*/ = this["parseExpression"](_V29/*par*/["left"]);
_V232/*right*/ = this["parseExpression"](_V29/*par*/["right"]);
_V43/*res*/["setType"]("var");;
if(((_V29/*par*/["operator"] == "||") && _V29/*par*/["right"]["promising"])){
_V233/*ltype*/ = _V231/*left*/["getType"]();
_V234/*rtype*/ = _V232/*right*/["getType"]();
if(((_V233/*ltype*/ !== this["getType"]("var")) || (_V234/*rtype*/ !== this["getType"]("var")))){
this["error"](_V29/*par*/, _V12/*errorMsg*/["notImplemented"]);;
};
;
_V43/*res*/["makePromising"]();;
_V212/*tempPromise*/ = this["getUniqueName"]();
_V213/*tempValue*/ = this["getUniqueName"]();
_V43/*res*/["addPre"]("var ");;
_V43/*res*/["addPre"](_V212/*tempPromise*/);;
_V43/*res*/["addPre"](((" = " + this["newPromiseStr"]()) + ";\n"));;
_V43/*res*/["addPre"]("var ");;
_V43/*res*/["addPre"](_V213/*tempValue*/);;
_V43/*res*/["addPre"](" = ");;
_V43/*res*/["addPre"](_V231/*left*/);;
_V43/*res*/["addPre"](";\n");;
_V43/*res*/["addPre"]("if (");;
_V43/*res*/["addPre"](_V213/*tempValue*/);;
_V43/*res*/["addPre"]("){ ");;
_V43/*res*/["addPre"](_V212/*tempPromise*/);;
_V43/*res*/["addPre"](".resolve(");;
_V43/*res*/["addPre"](_V213/*tempValue*/);;
_V43/*res*/["addPre"](") }else{ ");;
_V235/*rightExtraCode*/ = this["newResult"]();
_V235/*rightExtraCode*/["push"](_V212/*tempPromise*/);;
_V235/*rightExtraCode*/["push"](".resolve(");;
_V235/*rightExtraCode*/["push"](_V232/*right*/);;
_V235/*rightExtraCode*/["push"](");\n");;
_V43/*res*/["addPre"](this["makeCompleteStatement"](_V235/*rightExtraCode*/));;
_V43/*res*/["addPre"]("};\n");;
_V43/*res*/["addPre"](_V212/*tempPromise*/);;
_V43/*res*/["addPre"](".then(");;
_V43/*res*/["setPromiseName"](this["getUniqueName"]());;
_V43/*res*/["addPre"](_V43/*res*/["getPromiseName"]());;
_V43/*res*/["addPre"]("){");;
_V43/*res*/["addPost"]("});");;

}else{
_V43/*res*/["push"](this["getBinaryExpressionCode"]({"left": _V231/*left*/,
"right": _V232/*right*/,
"operator": _V29/*par*/["operator"],
"errorFun": this["getWarningFun"](_V29/*par*/)}));;
};
;
return _V43/*res*/;;
;
});;
this["expMemberExpression"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V236/*base*/;
;
_V43/*res*/ = this["newResult"]();
_V236/*base*/ = this["parseExpression"](_V29/*par*/["object"]);
_V43/*res*/["pushType"](this["getGetPropertyCode"]({"instance": _V236/*base*/,
"property": (_V29/*par*/["computed"] ? _V46/*undefined*/ : _V28/*identifierName*/(_V29/*par*/["property"])),
"propertyValue": (_V29/*par*/["computed"] ? this["expectTypeVar"](this["parseExpression"](_V29/*par*/["property"])) : _V46/*undefined*/),
"errorFun": this["getWarningFun"](_V29/*par*/)}));;
return _V43/*res*/;;
;
});;
this["newInherited"] = (function(){
;
return new _V237/*InheritedSystem*/(this);;
;
});;
_V237/*InheritedSystem*/ = (function(_V29/*par*/){
;
this["instance"] = _V29/*par*/;;
this["used"] = {};;
;
});
_V237/*InheritedSystem*/["prototype"] = {"setCurrent": (function(_V29/*par*/){
;
this["currentMember"] = _V29/*par*/;;
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
this["expObjectExpression"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V238/*isClassObject*/;
var _V25/*i*/;
var _V86/*l*/;
var _V239/*currentMember*/;
var _V153/*prop*/;
var _V240/*v*/;
var _V51/*name*/;
var _V241/*functionRes*/;
;
_V43/*res*/ = this["newResult"]();
_V238/*isClassObject*/ = this["isClassObject"];
this["stack"]("isClassObject");;
this["isClassObject"] = false;;
_V43/*res*/["push"]("{");;
_V25/*i*/ = 0;
_V86/*l*/ = ((_V29/*par*/["properties"] && _V29/*par*/["properties"]["length"]) || 0);
for(_V25/*i*/;(_V25/*i*/ < _V86/*l*/);++_V25/*i*/){{this["isClassObject"] = false;;
_V239/*currentMember*/;
if(_V25/*i*/){
_V43/*res*/["push"](",\n");;
};
;
_V153/*prop*/ = _V29/*par*/["properties"][_V25/*i*/];
if((_V153/*prop*/["kind"] == "init")){
_V239/*currentMember*/ = _V28/*identifierName*/(_V153/*prop*/["key"]);;
if(this["inheritedSystem"]){
this["inheritedSystem"]["setCurrent"](_V239/*currentMember*/);;
};
;
_V43/*res*/["push"]((_V14/*stringEncodeStr*/(_V28/*identifierName*/(_V153/*prop*/["key"])) + ": "));;
if(_V153/*prop*/["value"]){
if(_V30/*checkIsFunction*/(_V153/*prop*/["value"])){
if(_V238/*isClassObject*/){
this["isClassObject"] = true;;
};
;
};
;
_V240/*v*/ = this["parseExpression"](_V153/*prop*/["value"]);
_V43/*res*/["push"](this["expectTypeVar"](this["getPassAsTypeCode"]({"value": _V240/*v*/,
"valueType": _V240/*v*/["getType"](),
"type": this["getType"]((_V153/*prop*/["typename"] || "var"), _V29/*par*/),
"errorFun": this["getWarningFun"](_V29/*par*/)})));;
};
;

}else{
if((_V153/*prop*/["kind"] == "function")){
if(_V238/*isClassObject*/){
this["isClassObject"] = true;;
};
;
_V51/*name*/ = _V28/*identifierName*/(_V153/*prop*/["id"]);
_V239/*currentMember*/ = _V51/*name*/;;
if(this["inheritedSystem"]){
this["inheritedSystem"]["setCurrent"](_V239/*currentMember*/);;
};
;
_V153/*prop*/["id"] = _V46/*undefined*/;;
_V43/*res*/["push"]((_V14/*stringEncodeStr*/(_V51/*name*/) + ": "));;
_V241/*functionRes*/ = this["expectTypeVar"](this["parseExpression"](_V153/*prop*/));
_V43/*res*/["push"](_V241/*functionRes*/);;

}else{
if((_V153/*prop*/["kind"] == "block")){

}else{
this["error"](_V29/*par*/, _V12/*errorMsg*/["unknownPropertyAssignmentType"]);;
};
};
};
;
}};
;
_V43/*res*/["push"]("}");;
_V43/*res*/["setType"]("var");;
this["unstack"]("isClassObject");;
return _V43/*res*/;;
;
});;
this["expClassObjectExpression"] = (function(_V29/*par*/){
var _V43/*res*/;
;
this["stack"]("isClassObject");;
this["isClassObject"] = true;;
_V43/*res*/ = this["expObjectExpression"](_V29/*par*/);
this["unstack"]("isClassObject");;
return _V43/*res*/;;
;
});;
this["expectTypeVar"] = (function(_V29/*par*/){
var _V50/*self*/;
var _V162/*e*/;
;
if((_V29/*par*/["getType"]() === this["getType"]("var"))){
return _V29/*par*/;;
};
;
_V50/*self*/ = this;
_V162/*e*/ = this["addError"](_V29/*par*/["getParsed"](), _V12/*errorMsg*/["expectedVar"]);
_V18/*classSystem*/["definitionPromise"](_V29/*par*/["getType"]())["then"]((function(_V23/*t*/){
;
if((_V23/*t*/ === _V50/*self*/["getType"]("var"))){
_V162/*e*/["resolve"]();;
};
;
;
}));;
return _V29/*par*/;;
;
});;
this["expVariableStatement"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V242/*declarations*/;
var _V25/*i*/;
var _V86/*l*/;
var _V243/*usedType*/;
var _V44/*r*/;
;
_V43/*res*/ = this["newResult"]();
_V242/*declarations*/ = _V29/*par*/["declarations"];
if(! _V242/*declarations*/){
this["error"](_V29/*par*/, _V12/*errorMsg*/["missingDeclarations"]);;
return "";;
};
;
_V25/*i*/ = 0;
_V86/*l*/ = _V242/*declarations*/["length"];
_V243/*usedType*/ = this["getType"](_V28/*identifierName*/(_V29/*par*/["typename"]), _V29/*par*/);
for(_V25/*i*/;(_V25/*i*/ < _V86/*l*/);++_V25/*i*/){{if((_V242/*declarations*/[_V25/*i*/]["type"] == "VariableDeclaration")){
_V44/*r*/ = this["parseExpression"](_V242/*declarations*/[_V25/*i*/]);
_V43/*res*/["push"](_V44/*r*/);;

}else{
this["error"](_V242/*declarations*/[_V25/*i*/], _V12/*errorMsg*/["unknownType"]);;
};
;
}};
;
_V43/*res*/["setType"](_V243/*usedType*/);;
return _V43/*res*/;;
;
});;
this["isSameType"] = (function(_V54/*type1*/, _V55/*type2*/){
;
return _V18/*classSystem*/["isSameType"](_V54/*type1*/, _V55/*type2*/);;
;
});;
this["expVariableDeclaration"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
if(_V29/*par*/["init"]){
_V43/*res*/["pushType"](this["getSetVariableCode"]({"instance": this["getVariable"](_V28/*identifierName*/(_V29/*par*/["id"])),
"assignmentType": _V29/*par*/["id"]["type"],
"value": this["parseExpression"](_V29/*par*/["init"]),
"operator": "=",
"errorFun": this["getWarningFun"](_V29/*par*/)}));;

}else{
_V43/*res*/["pushType"](this["getVariable"](_V28/*identifierName*/(_V29/*par*/["id"])));;
};
;
return _V43/*res*/;;
;
});;
this["getVariable"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
this["_addUsedVariable"](_V29/*par*/);;
_V43/*res*/["push"](this["getVariableName"](_V29/*par*/));;
_V43/*res*/["setType"](this["getVariableType"](_V29/*par*/));;
return _V43/*res*/;;
;
});;
this["getResultType"] = (function(_V29/*par*/){
var _V23/*t*/;
;
if(! _V29/*par*/){
return _V46/*undefined*/;;
};
;
if((typeof _V29/*par*/ == "string")){
return _V46/*undefined*/;;
};
;
_V23/*t*/ = _V29/*par*/["getType"]();
if((typeof _V23/*t*/ == "string")){
return this["getType"](_V23/*t*/);;
};
;
return _V23/*t*/;;
;
});;
this["getFunctionArgumentType"] = (function(_V68/*parType*/, _V244/*parIndex*/, _V65/*parsed*/){
var _V245/*retType*/;
var _V50/*self*/;
;
_V245/*retType*/ = this["getProvisionalType"](_V65/*parsed*/);
_V50/*self*/ = this;
_V18/*classSystem*/["readyPromise"](_V68/*parType*/)["then"]((function(_V68/*parType*/){
;
_V50/*self*/["resolveProvisional"](_V245/*retType*/, _V18/*classSystem*/["getFunctionArgumentType"](_V68/*parType*/, _V244/*parIndex*/));;
;
}));;
return _V245/*retType*/;;
;
});;
this["callClassSystem"] = (function(_V106/*parFun*/, _V29/*par*/){
var _V246/*dynamic*/;
var _V247/*typeProps*/;
var _V248/*ignoreProps*/;
var _V25/*i*/;
var _V27/*p*/;
var _V249/*promises*/;
var _V65/*parsed*/;
var _V250/*errRes*/;
var _V50/*self*/;
var _V251/*resolveType*/;
var _V23/*t*/;
;
_V246/*dynamic*/ = false;
_V247/*typeProps*/ = {"type": true,
"valueType": true,
"leftType": true,
"rightType": true};
_V248/*ignoreProps*/ = {"errorFun": true,
"parsed": true};
_V25/*i*/ = 0;
_V27/*p*/;
_V249/*promises*/ = [];
_V65/*parsed*/ = _V29/*par*/["parsed"];
_V65/*parsed*/ = (_V65/*parsed*/ || (_V29/*par*/["value"] && _V29/*par*/["value"]["getParsed"]()));;
_V65/*parsed*/ = (_V65/*parsed*/ || (_V29/*par*/["instance"] && _V29/*par*/["instance"]["getParsed"]()));;
_V65/*parsed*/ = (_V65/*parsed*/ || (_V29/*par*/["left"] && _V29/*par*/["left"]["getParsed"]()));;
_V65/*parsed*/ = (_V65/*parsed*/ || (_V29/*par*/["right"] && _V29/*par*/["right"]["getParsed"]()));;
if(! _V65/*parsed*/){
_V11/*errorFun*/({}, _V12/*errorMsg*/["internalParserInfoMissing"]);;
;
};
;
_V250/*errRes*/ = this["runtimeError"](_V65/*parsed*/, _V12/*errorMsg*/["typeLookupFailed"]);
_V50/*self*/ = this;
_V251/*resolveType*/ = (function(_V153/*prop*/, _V67/*ps*/, _V252/*parArgument*/){
var _V43/*res*/;
;
_V43/*res*/ = new _V16/*Promise*/();
_V67/*ps*/["then"]((function(_V23/*t*/){
;
if(_V252/*parArgument*/){
_V29/*par*/["arguments"][_V153/*prop*/]["type"] = _V23/*t*/;;

}else{
_V29/*par*/[_V153/*prop*/] = _V23/*t*/;;
};
;
_V43/*res*/["resolve"]();;
;
}));;
_V249/*promises*/["push"](_V43/*res*/);;
return _V43/*res*/;;
;
});
_V23/*t*/;
for(_V27/*p*/ in _V247/*typeProps*/){_V23/*t*/ = _V29/*par*/[_V27/*p*/];;
if(_V23/*t*/){
if(_V23/*t*/["isDynamic"]){
_V246/*dynamic*/ = true;;

}else{
_V251/*resolveType*/(_V27/*p*/, _V18/*classSystem*/["readyPromise"](_V23/*t*/));;
};
;
};
;
};
;
if(_V29/*par*/["arguments"]){
for(_V25/*i*/ = 0;(_V25/*i*/ < _V29/*par*/["arguments"]["length"]);++_V25/*i*/){{_V23/*t*/ = _V29/*par*/["arguments"][_V25/*i*/]["type"];;
if(_V23/*t*/){
if(_V23/*t*/["isDynamic"]){
_V246/*dynamic*/ = true;;

}else{
_V251/*resolveType*/(_V25/*i*/, _V18/*classSystem*/["readyPromise"](_V23/*t*/), true);;
};
;
};
;
}};
;
};
;
_V17/*promiseland*/["all"](_V249/*promises*/)["then"]((function(){
var _V27/*p*/;
var _V43/*res*/;
var _V253/*propsStarted*/;
var _V254/*addProperty*/;
var _V255/*dynRes*/;
var _V42/*tempRes*/;
;
_V27/*p*/;
if(_V246/*dynamic*/){
_V50/*self*/["common"]["useClassSystem"] = true;;
_V43/*res*/ = _V50/*self*/["newResult"]();
_V43/*res*/["push"]("classSystem.");;
_V43/*res*/["push"](_V106/*parFun*/);;
_V43/*res*/["push"]("({");;
_V253/*propsStarted*/ = false;
_V254/*addProperty*/ = (function(_V27/*p*/){
;
if(_V253/*propsStarted*/){
_V43/*res*/["push"](", ");;
};
;
_V253/*propsStarted*/ = true;;
_V43/*res*/["push"](_V14/*stringEncodeStr*/(_V27/*p*/));;
_V43/*res*/["push"](":");;
;
});
for(_V27/*p*/ in _V29/*par*/){if((! _V29/*par*/[_V27/*p*/] || _V248/*ignoreProps*/[_V27/*p*/])){

}else{
if(_V247/*typeProps*/[_V27/*p*/]){
_V254/*addProperty*/(_V27/*p*/);;
_V43/*res*/["push"](_V50/*self*/["renderType"](_V29/*par*/[_V27/*p*/]));;

}else{
_V254/*addProperty*/(_V27/*p*/);;
_V43/*res*/["push"](_V50/*self*/["makeCompleteStatementDynamic"](_V29/*par*/[_V27/*p*/]));;
};
};
;
};
;
_V43/*res*/["push"]("})");;
_V255/*dynRes*/ = _V50/*self*/["newResult"]();
_V255/*dynRes*/["push"](_V50/*self*/["makeCompleteStatement"](_V43/*res*/), _V46/*undefined*/, {"dynamic": true});;
_V250/*errRes*/["resolve"](_V255/*dynRes*/);;

}else{
_V42/*tempRes*/ = _V50/*self*/["newResult"]();
_V29/*par*/["result"] = _V42/*tempRes*/;;
_V250/*errRes*/["resolve"](_V17/*promiseland*/["classSystem"][_V106/*parFun*/](_V29/*par*/));;
};
;
;
}));;
return _V250/*errRes*/;;
;
});;
this["isTrackedClassConRes"] = (function(_V68/*parType*/){
var _V50/*self*/;
var _V43/*res*/;
;
_V50/*self*/ = this;
if(_V68/*parType*/["isDynamic"]){
_V43/*res*/ = _V50/*self*/["newResult"]();
_V50/*self*/["common"]["useClassSystem"] = true;;
_V43/*res*/["push"]("classSystem.isTrackedClass");;
_V43/*res*/["push"]("(");;
_V43/*res*/["push"](_V50/*self*/["renderType"](_V68/*parType*/));;
_V43/*res*/["push"](")");;
return _V43/*res*/;;
};
;
return _V18/*classSystem*/["isTrackedClass"](_V68/*parType*/);;
;
});;
this["createConditionalCode"] = (function(_V256/*parTrueRes*/, _V257/*parFalseRes*/){
var _V50/*self*/;
var _V258/*isDecided*/;
var _V259/*conditions*/;
var _V43/*res*/;
;
_V50/*self*/ = this;
_V256/*parTrueRes*/ = (_V256/*parTrueRes*/ || this["newResult"]());;
_V257/*parFalseRes*/ = (_V257/*parFalseRes*/ || this["newResult"]());;
_V258/*isDecided*/ = false;
_V259/*conditions*/ = [];
_V43/*res*/ = this["newResult"]();
_V43/*res*/["replace"](_V257/*parFalseRes*/);;
return {"res": _V43/*res*/,
"addCondition": (function(_V101/*parCondition*/){
var _V260/*ifRes*/;
var _V25/*i*/;
var _V255/*dynRes*/;
;
if(_V258/*isDecided*/){
return;;
};
;
if((_V101/*parCondition*/ === true)){
_V258/*isDecided*/ = true;;
_V43/*res*/["replace"](_V256/*parTrueRes*/);;
return;;
};
;
if((_V101/*parCondition*/ === false)){
return;;
};
;
_V259/*conditions*/["push"](_V101/*parCondition*/);;
_V260/*ifRes*/ = _V50/*self*/["newResult"]();
_V260/*ifRes*/["push"]("((");;
_V25/*i*/ = 0;
for(_V25/*i*/ = 0;(_V25/*i*/ < _V259/*conditions*/["length"]);++_V25/*i*/){{if(_V25/*i*/){
_V260/*ifRes*/["push"](" && ");;
};
;
_V260/*ifRes*/["push"](_V259/*conditions*/[_V25/*i*/]);;
}};
;
_V260/*ifRes*/["push"](") ? (");;
_V260/*ifRes*/["push"](_V50/*self*/["makeCompleteStatementDynamic"](_V256/*parTrueRes*/));;
_V260/*ifRes*/["push"](") : (");;
_V260/*ifRes*/["push"](_V50/*self*/["makeCompleteStatementDynamic"](_V257/*parFalseRes*/));;
_V260/*ifRes*/["push"]("))");;
_V255/*dynRes*/ = _V50/*self*/["newResult"]();
_V255/*dynRes*/["push"](_V50/*self*/["makeCompleteStatement"](_V260/*ifRes*/), _V46/*undefined*/, {"dynamic": true});;
_V43/*res*/["replace"](_V255/*dynRes*/);;
;
})};;
;
});;
this["isTrackedClass"] = (function(_V68/*parType*/){
;
return _V18/*classSystem*/["isTrackedClass"](_V68/*parType*/);;
;
});;
this["createTemporaryTrackedClass"] = (function(_V68/*parType*/, _V49/*parParsed*/){
;
if(_V68/*parType*/["isDynamic"]){
return this["createExtraDynamicType"](_V68/*parType*/, {"temporaryTracked": true}, _V49/*parParsed*/);;
};
;
return _V18/*classSystem*/["_createTemporaryTrackedClass"](_V68/*parType*/);;
;
});;
this["parseAsType"] = (function(_V68/*parType*/, _V29/*par*/){
var _V174/*value*/;
;
_V174/*value*/ = this["parseExpression"](_V29/*par*/);
return this["getPassAsTypeCode"]({"value": _V174/*value*/,
"valueType": _V174/*value*/["getType"](),
"type": _V68/*parType*/,
"errorFun": this["getWarningFun"](_V29/*par*/),
"parsed": _V29/*par*/});;
;
});;
this["getPassAsTypeCode"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"](this["callClassSystem"]("getPassAsTypeCode", {"type": _V29/*par*/["type"],
"value": _V29/*par*/["value"],
"valueType": this["getResultType"](_V29/*par*/["value"], _V29/*par*/),
"errorFun": _V29/*par*/["errorFun"]}));;
_V43/*res*/["setType"](_V29/*par*/["type"]);;
return _V43/*res*/;;
;
});;
this["getDestroyTemporaryClassCode"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V174/*value*/;
var _V261/*valueType*/;
;
_V43/*res*/ = this["newResult"]();
_V174/*value*/ = _V29/*par*/["value"];
_V261/*valueType*/ = _V174/*value*/["getType"]();
_V43/*res*/["push"](this["callClassSystem"]("getDestroyTemporaryClassCode", {"value": _V174/*value*/,
"valueType": _V174/*value*/["getType"](),
"errorFun": _V29/*par*/["errorFun"],
"noValueRequired": (_V29/*par*/ ? _V29/*par*/["noValueRequired"] : _V46/*undefined*/)}));;
_V43/*res*/["setType"](this["getClassFromTemporaryTracked"](_V261/*valueType*/, _V174/*value*/["getParsed"]()));;
return _V43/*res*/;;
;
});;
this["getClassFromTemporaryTracked"] = (function(_V68/*parType*/, _V49/*parParsed*/){
var _V50/*self*/;
var _V262/*resType*/;
;
_V50/*self*/ = this;
if(_V68/*parType*/["isDynamic"]){
return this["createExtraDynamicType"](_V68/*parType*/, {"temporaryTrackedResolved": true}, _V49/*parParsed*/);;
};
;
_V262/*resType*/ = this["getProvisionalType"](_V49/*parParsed*/, _V49/*parParsed*/);
_V18/*classSystem*/["definitionPromise"](_V68/*parType*/)["then"]((function(_V263/*parDefinedType*/){
;
_V50/*self*/["resolveProvisional"](_V262/*resType*/, _V18/*classSystem*/["getClassFromTemporaryTracked"](_V263/*parDefinedType*/));;
;
}));;
return _V262/*resType*/;;
;
});;
this["getSetPropertyCode"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"](this["callClassSystem"]("getSetPropertyCode", {"instance": _V29/*par*/["instance"],
"type": this["getResultType"](_V29/*par*/["instance"]),
"property": _V29/*par*/["property"],
"propertyValue": _V29/*par*/["propertyValue"],
"computed": _V29/*par*/["computed"],
"value": _V29/*par*/["value"],
"valueType": this["getResultType"](_V29/*par*/["value"]),
"operator": (_V29/*par*/["operator"] || "="),
"errorFun": _V29/*par*/["errorFun"]}));;
_V43/*res*/["setType"](this["getPropertyType"]({"type": this["getResultType"](_V29/*par*/["instance"]),
"property": _V29/*par*/["property"]}, _V29/*par*/["instance"]));;
return _V43/*res*/;;
;
});;
this["getSetVariableCode"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"](this["callClassSystem"]("getSetVariableCode", {"instance": _V29/*par*/["instance"],
"type": this["getResultType"](_V29/*par*/["instance"]),
"value": _V29/*par*/["value"],
"valueType": this["getResultType"](_V29/*par*/["value"]),
"operator": (_V29/*par*/["operator"] || "="),
"errorFun": _V29/*par*/["errorFun"],
"assignmentType": _V29/*par*/["assignmentType"]}));;
_V43/*res*/["setType"](this["getClassFromTemporaryTracked"](this["getResultType"](_V29/*par*/["value"]), _V29/*par*/["value"]["getParsed"]()));;
return _V43/*res*/;;
;
});;
this["declareReturnPromiseCode"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
this["common"]["usePromise"] = true;;
_V43/*res*/["push"](this["callClassSystem"]("declareReturnPromiseCode", {"type": _V29/*par*/["type"],
"name": _V29/*par*/["name"],
"constructorName": _V29/*par*/["constructorName"],
"errorFun": _V29/*par*/["errorFun"],
"parsed": _V29/*par*/["parsed"]}));;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["returnReturnPromiseCode"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"](this["callClassSystem"]("returnReturnPromiseCode", {"type": _V29/*par*/["type"],
"name": _V29/*par*/["name"],
"errorFun": _V29/*par*/["errorFun"],
"parsed": _V29/*par*/["parsed"]}));;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["getDeclareVariableCode"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"](this["callClassSystem"]("getDeclareVariableCode", {"type": _V29/*par*/["type"],
"name": _V29/*par*/["name"],
"errorFun": _V29/*par*/["errorFun"],
"parsed": _V29/*par*/["parsed"]}));;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["getProcessParameterCode"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"](this["callClassSystem"]("getProcessParameterCode", {"type": _V29/*par*/["type"],
"name": _V29/*par*/["name"],
"errorFun": _V29/*par*/["errorFun"],
"parsed": _V29/*par*/["parsed"]}));;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["getDestroyVariableCode"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"](this["callClassSystem"]("getDestroyVariableCode", {"type": _V29/*par*/["type"],
"name": _V29/*par*/["name"],
"errorFun": _V29/*par*/["errorFun"],
"parsed": _V29/*par*/["parsed"]}));;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["connectFunCode"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"](this["callClassSystem"]("getConnectCode", {"instance": _V29/*par*/["signalObject"],
"type": this["getResultType"](_V29/*par*/["signalObject"]),
"property": _V29/*par*/["signalProperty"],
"value": _V29/*par*/["fun"],
"valueType": this["getResultType"](_V29/*par*/["fun"]),
"errorFun": _V29/*par*/["errorFun"]}));;
_V43/*res*/["setType"]("var");;
return _V43/*res*/;;
;
});;
this["connectSlotCode"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"](this["callClassSystem"]("getConnectCode", {"instance": _V29/*par*/["signalObject"],
"type": this["getResultType"](_V29/*par*/["signalObject"]),
"property": _V29/*par*/["signalProperty"],
"value": _V29/*par*/["slotObject"],
"valueType": this["getResultType"](_V29/*par*/["slotObject"]),
"valueProperty": _V29/*par*/["slotProperty"],
"errorFun": _V29/*par*/["errorFun"]}));;
_V43/*res*/["setType"]("var");;
return _V43/*res*/;;
;
});;
this["dereferencePromisePreCode"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"](this["callClassSystem"]("dereferencePromisePreCode", {"value": _V29/*par*/["value"],
"valueType": this["getResultType"](_V29/*par*/["value"]),
"errorFun": _V29/*par*/["errorFun"]}));;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["dereferencePromisePostCode"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"](this["callClassSystem"]("dereferencePromisePostCode", {"value": _V29/*par*/["value"],
"valueType": this["getResultType"](_V29/*par*/["value"]),
"errorFun": _V29/*par*/["errorFun"]}));;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["promisingReturnTypeCheck"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"](this["callClassSystem"]("promisingReturnTypeCheck", {"type": _V29/*par*/["type"],
"errorFun": _V29/*par*/["errorFun"],
"parsed": _V29/*par*/["parsed"]}));;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["getClassFromPromiseOf"] = (function(_V68/*parType*/){
;
return _V18/*classSystem*/["getClassFromPromiseOf"](_V68/*parType*/);;
;
});;
this["getPropertyType"] = (function(_V29/*par*/, _V49/*parParsed*/){
var _V66/*type*/;
var _V50/*self*/;
var _V44/*r*/;
;
_V66/*type*/ = _V29/*par*/["type"];
_V50/*self*/ = this;
if(_V66/*type*/["isDynamic"]){
return this["createExtraDynamicType"](_V66/*type*/, {"property": _V29/*par*/["property"]}, _V49/*parParsed*/);;

}else{
_V44/*r*/ = this["getProvisionalType"](_V49/*parParsed*/);
_V18/*classSystem*/["readyPromise"](_V29/*par*/["type"])["then"]((function(_V149/*resultType*/){
;
_V50/*self*/["resolveProvisional"](_V44/*r*/, _V17/*promiseland*/["classSystem"]["getPropertyType"]({"type": _V149/*resultType*/,
"property": _V29/*par*/["property"]}));;
;
}));;
return _V44/*r*/;;
};
;
;
});;
this["getConstructorType"] = (function(_V29/*par*/, _V49/*parParsed*/){
var _V66/*type*/;
var _V50/*self*/;
var _V44/*r*/;
;
_V66/*type*/ = _V29/*par*/["type"];
_V50/*self*/ = this;
if(_V66/*type*/["isDynamic"]){
return this["createExtraDynamicType"](_V66/*type*/, {"property": "constructor"}, _V49/*parParsed*/);;

}else{
_V44/*r*/ = this["getProvisionalType"](_V49/*parParsed*/);
_V18/*classSystem*/["readyPromise"](_V29/*par*/["type"])["then"]((function(_V149/*resultType*/){
;
try
{_V50/*self*/["resolveProvisional"](_V44/*r*/, _V17/*promiseland*/["classSystem"]["getConstructorType"]({"type": _V149/*resultType*/}));;
}catch(_V162/*e*/){_V50/*self*/["error"](_V49/*parParsed*/, _V162/*e*/);;
};
;
;
}));;
return _V44/*r*/;;
};
;
;
});;
this["getGetPropertyCode"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"](this["callClassSystem"]("getGetPropertyCode", {"instance": _V29/*par*/["instance"],
"type": this["getResultType"](_V29/*par*/["instance"]),
"property": _V29/*par*/["property"],
"propertyValue": _V29/*par*/["propertyValue"],
"errorFun": _V29/*par*/["errorFun"]}));;
if(_V29/*par*/["property"]){
_V43/*res*/["setType"](this["getPropertyType"]({"type": this["getResultType"](_V29/*par*/["instance"]),
"property": _V29/*par*/["property"]}, _V29/*par*/["instance"]));;

}else{
_V43/*res*/["setType"]("var");;
};
;
return _V43/*res*/;;
;
});;
this["getBinaryExpressionCode"] = (function(_V29/*par*/){
var _V43/*res*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"](this["callClassSystem"]("getBinaryExpressionCode", {"left": _V29/*par*/["left"],
"leftType": this["getResultType"](_V29/*par*/["left"]),
"right": _V29/*par*/["right"],
"rightType": this["getResultType"](_V29/*par*/["right"]),
"operator": _V29/*par*/["operator"],
"errorFun": _V29/*par*/["errorFun"]}));;
_V43/*res*/["setType"]("var");;
return _V43/*res*/;;
;
});;
this["expAssignmentExpression"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V236/*base*/;
var _V34/*property*/;
var _V264/*propertyValue*/;
;
_V43/*res*/ = this["newResult"]();
if((_V29/*par*/["left"]["type"] == "MemberExpression")){
_V236/*base*/ = this["parseExpression"](_V29/*par*/["left"]["object"]);
_V34/*property*/;
_V264/*propertyValue*/;
if(_V29/*par*/["left"]["computed"]){
_V264/*propertyValue*/ = this["expectTypeVar"](this["parseExpression"](_V29/*par*/["left"]["property"]));;

}else{
_V34/*property*/ = _V28/*identifierName*/(_V29/*par*/["left"]["property"]);;
};
;
_V43/*res*/["pushType"](this["getSetPropertyCode"]({"instance": _V236/*base*/,
"propertyValue": _V264/*propertyValue*/,
"property": _V34/*property*/,
"computed": _V29/*par*/["left"]["computed"],
"value": this["parseExpression"](_V29/*par*/["right"]),
"operator": _V29/*par*/["operator"],
"errorFun": this["getWarningFun"](_V29/*par*/)}));;

}else{
_V43/*res*/["pushType"](this["getSetVariableCode"]({"instance": this["parseExpression"](_V29/*par*/["left"]),
"assignmentType": _V29/*par*/["left"]["type"],
"value": this["parseExpression"](_V29/*par*/["right"]),
"operator": _V29/*par*/["operator"],
"errorFun": this["getWarningFun"](_V29/*par*/)}));;
};
;
return _V43/*res*/;;
;
});;
this["isCallableType"] = (function(){
;
;
});;
this["expCallExpression"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V25/*i*/;
var _V86/*l*/;
var _V265/*calleeRes*/;
var _V266/*args*/;
var _V267/*argType*/;
var _V268/*argRes*/;
;
_V43/*res*/ = this["newResult"]();
_V25/*i*/ = 0;
_V86/*l*/;
_V265/*calleeRes*/ = this["parseExpression"](_V29/*par*/["callee"]);
_V266/*args*/ = [];
if(_V29/*par*/["arguments"]){
_V86/*l*/ = _V29/*par*/["arguments"]["length"];;
for(_V25/*i*/ = 0;(_V25/*i*/ < _V86/*l*/);++_V25/*i*/){{_V267/*argType*/ = this["getFunctionArgumentType"](_V265/*calleeRes*/["getType"](), _V25/*i*/, _V29/*par*/["arguments"][_V25/*i*/]);
_V268/*argRes*/ = this["parseExpression"](_V29/*par*/["arguments"][_V25/*i*/]);
_V268/*argRes*/ = this["getPassAsTypeCode"]({"value": _V268/*argRes*/,
"valueType": _V268/*argRes*/["getType"](),
"type": _V267/*argType*/,
"errorFun": this["getWarningFun"](_V29/*par*/)});;
_V266/*args*/["push"]({"type": _V268/*argRes*/["getType"](),
"value": _V268/*argRes*/});;
}};
;
};
;
_V43/*res*/["push"](this["callClassSystem"]("getCallCode", {"type": _V265/*calleeRes*/["getType"](),
"instance": _V265/*calleeRes*/,
"arguments": _V266/*args*/}));;
_V43/*res*/["setType"](this["getFunctionReturnType"](_V265/*calleeRes*/["getType"](), _V29/*par*/));;
return _V43/*res*/;;
;
});;
this["getFunctionReturnType"] = (function(_V68/*parType*/, _V65/*parsed*/){
var _V23/*t*/;
var _V50/*self*/;
;
_V23/*t*/ = this["getProvisionalType"](_V65/*parsed*/);
_V50/*self*/ = this;
_V18/*classSystem*/["readyPromise"](_V68/*parType*/)["then"]((function(_V269/*newt*/){
;
_V50/*self*/["resolveProvisional"](_V23/*t*/, _V18/*classSystem*/["getFunctionReturnType"](_V269/*newt*/, _V65/*parsed*/));;
;
}));;
return _V23/*t*/;;
;
});;
this["getFunctionArgumentCount"] = (function(_V68/*parType*/, _V65/*parsed*/){
;
return _V18/*classSystem*/["getFunctionArgumentCount"](_V68/*parType*/);;
;
});;
this["isVar"] = (function(_V68/*parType*/){
;
if((typeof _V68/*parType*/ == "function")){
return _V18/*classSystem*/["isVar"](_V68/*parType*/);;
};
;
return false;;
;
});;
this["expInheritedExpression"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V25/*i*/;
var _V86/*l*/;
var _V266/*args*/;
var _V268/*argRes*/;
;
if(! this["inheritedAvailable"]){
this["error"](_V29/*par*/, _V12/*errorMsg*/["inheritedOnlyInMember"]);;
return;;
};
;
_V43/*res*/ = this["newResult"]();
_V25/*i*/ = 0;
_V86/*l*/;
_V43/*res*/["push"](this["inheritedSystem"]["getCurrent"]());;
_V43/*res*/["push"](".apply(this");;
_V266/*args*/ = [];
if(_V29/*par*/["arguments"]){
_V43/*res*/["push"](", [");;
_V86/*l*/ = _V29/*par*/["arguments"]["length"];;
for(_V25/*i*/ = 0;(_V25/*i*/ < _V86/*l*/);++_V25/*i*/){{if(_V25/*i*/){
_V43/*res*/["push"](", ");;
};
;
_V268/*argRes*/ = this["expectTypeVar"](this["parseExpression"](_V29/*par*/["arguments"][_V25/*i*/]));
_V43/*res*/["push"](_V268/*argRes*/);;
}};
;
_V43/*res*/["push"]("]");;

}else{
if(_V29/*par*/["expression"]){
_V43/*res*/["push"](", ");;
this["expectTypeVar"](this["parseExpression"](_V29/*par*/["expression"]));;
};
};
;
_V43/*res*/["push"](")");;
_V43/*res*/["setType"]("var");;
return _V43/*res*/;;
;
});;
this["expArrayExpression"] = (function(_V29/*par*/){
var _V43/*res*/;
var _V25/*i*/;
var _V86/*l*/;
;
_V43/*res*/ = this["newResult"]();
_V43/*res*/["push"]("[");;
_V25/*i*/ = 0;
_V86/*l*/ = ((_V29/*par*/["elements"] && _V29/*par*/["elements"]["length"]) || 0);
for(_V25/*i*/;(_V25/*i*/ < _V86/*l*/);++_V25/*i*/){{if(_V25/*i*/){
_V43/*res*/["push"](", ");;
};
;
_V43/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V29/*par*/["elements"][_V25/*i*/])));;
}};
;
_V43/*res*/["push"]("]");;
_V43/*res*/["setType"]("var");;
return _V43/*res*/;;
;
});;
this["expReturnStatement"] = (function(_V29/*par*/, _V270/*closingFun*/){
var _V43/*res*/;
var _V110/*valueRes*/;
var _V271/*passAsType*/;
var _V240/*v*/;
;
if(this["preventreturn"]){
this["error"](_V29/*par*/, _V12/*errorMsg*/["returnNotAllowedHere"]);;
};
;
_V43/*res*/ = this["newResult"]();
_V110/*valueRes*/;
if(_V29/*par*/["argument"]){
_V110/*valueRes*/ = this["newResult"]();;
_V271/*passAsType*/ = this["getReturnType"]();
if(this["promising"]){
_V271/*passAsType*/ = this["getClassFromPromiseOf"](_V271/*passAsType*/);;
};
;
_V271/*passAsType*/ = this["createTemporaryTrackedClass"](_V271/*passAsType*/);;
_V240/*v*/ = this["parseExpression"](_V29/*par*/["argument"]);
_V110/*valueRes*/["push"](this["getPassAsTypeCode"]({"value": _V240/*v*/,
"valueType": _V240/*v*/["getType"](),
"type": _V271/*passAsType*/,
"errorFun": this["getWarningFun"](_V29/*par*/)}));;
};
;
_V43/*res*/["push"](this["getReturnCode"]({"return": true,
"value": _V110/*valueRes*/}));;
_V43/*res*/["setType"](_V19/*statementType*/);;
return _V43/*res*/;;
;
});;
this["_start"]();;
;
});
_V272/*loaderStr*/ = (function(_V29/*par*/){
var _V273/*resStr*/;
;
_V273/*resStr*/ = "";
_V273/*resStr*/ += "(function(){\n  var defineFun;\n  var requireFun;\n  \n  if (typeof exports == \"object\" && typeof module == \"object\"){ // CommonJS\n    requireFun = function(modulesAr, callback){\n      var i = 0;\n      var l = modulesAr.length;\n      var args = [];\n      for (i; i < l; ++i){\n        args.push(require(modulesAr[i]));\n      };\n      callback.apply(callback, args);\n    };\n    defineFun = function(requireAr, callback){\n      requireFun(requireAr, function(){\n        module.exports = callback.apply(callback, arguments);\n      });\n    };\n    \n  }else if (typeof define == \"function\" && define.amd){ // AMD\n    var _define = define;\n    requireFun = require;\n    \n    defineFun = function(par1, par2){\n      if (par1 instanceof Array){\n        par1.unshift(\"require\");\n      }else{\n        par2 = par1;\n        par1 = [\"require\"];\n      };\n      _define(par1, function(){\n        requireFun = arguments[0];\n        var args = [];\n        for (var i = 1; i < arguments.length; ++i){\n          args.push(arguments[i]);\n        };\n        return par2.apply(par2, args);\n      });\n    };\n    requireFun = require;\n    \n  }else{ // Plain browser env\n    alert(\"not working out!\");\n    \n  };\n  \n";;
if(_V29/*par*/["promiseLandModule"]){
_V273/*resStr*/ += "defineFun([], function(){ var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;\n";;

}else{
_V273/*resStr*/ += "defineFun([\"promiseland\"], function(promiseland){ var __require = requireFun;\n";;
};
;
_V273/*resStr*/ += "\n";;
if((_V29/*par*/["usePromise"] || _V29/*par*/["useRequire"])){
_V273/*resStr*/ += "var __Promise = promiseland.Promise;\n";;
_V273/*resStr*/ += "var Promise = promiseland.Promise;\n";;
};
;
if(_V29/*par*/["useClassSystem"]){
_V273/*resStr*/ += "var classSystem = promiseland.classSystem;\n";;
};
;
if(_V29/*par*/["useRequire"]){
_V273/*resStr*/ += "var __requireFun = function(parModule){\n    var returnPromise = new __Promise();\n    try{__require([parModule], function(m){\n    if (promiseland.isPromiseLandPromisingModule(m)){\n      m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});\n    }else{\n      returnPromise.resolve(m);\n    };\n    });\n    }catch(e){returnPromise.reject(e);};\n    return returnPromise.promise;};\n";;
};
;
return _V273/*resStr*/;;
;
});
_V274/*promiselandRequireStr*/ = (function(){
;
return "";;
;
});
_V275/*callbackRequireStr*/ = (function(){
;
return "var Callback = promiseland.Callback;\n";;
;
});
_V276/*loaderEndStr*/ = (function(_V29/*par*/){
;
if(_V29/*par*/["promiseLandModule"]){
return "}; return function(){ return __execute.apply(null, arguments); } });\n})();";;

}else{
return "});\n})();";;
};
;
;
});
_V277/*createHeader*/ = (function(_V29/*par*/){
var _V273/*resStr*/;
var _V278/*loaderParam*/;
;
if(_V15/*_pureCode*/){
return "";;
};
;
_V273/*resStr*/ = "";
_V278/*loaderParam*/ = {"usePromise": _V29/*par*/["usePromise"],
"useRequire": _V29/*par*/["useRequire"],
"useClassSystem": _V29/*par*/["useClassSystem"]};
if(_V29/*par*/["makePromiseLandModule"]){
_V278/*loaderParam*/["promiseLandModule"] = true;;
};
;
_V273/*resStr*/ += _V272/*loaderStr*/(_V278/*loaderParam*/);;
_V273/*resStr*/ += _V274/*promiselandRequireStr*/();;
if(_V29/*par*/["useCallback"]){
_V273/*resStr*/ += _V275/*callbackRequireStr*/();;
};
;
_V273/*resStr*/ += (((("if (promiseland._hasModule({ hashStr: \"" + _V29/*par*/["hashStr"]) + "\" })){ return promiseland._getModule(\"") + _V29/*par*/["hashStr"]) + "\"); };\n");;
return _V273/*resStr*/;;
;
});
_V279/*createFooter*/ = (function(_V29/*par*/){
var _V273/*resStr*/;
;
if(_V15/*_pureCode*/){
return "";;
};
;
_V273/*resStr*/ = "";
if(_V29/*par*/["makePromiseLandModule"]){
_V273/*resStr*/ += _V276/*loaderEndStr*/({"promiseLandModule": true});;

}else{
_V273/*resStr*/ += _V276/*loaderEndStr*/({});;
};
;
return _V273/*resStr*/;;
;
});
_V280/*parser*/ = {"parse": (function(_V281/*promiselandCodeStr*/){
var _V27/*p*/;
var _V280/*parser*/;
var _V282/*hashStr*/;
var _V65/*parsed*/;
var _V273/*resStr*/;
var _V176/*cp*/;
var _V43/*res*/;
var _V283/*parsingConfig*/;
var _V284/*makePromiseLandModule*/;
var _V285/*result*/;
var _V286/*programStr*/;
var _V287/*mainPartStr*/;
;
_V27/*p*/ = new _V17/*promiseland*/["Promise"]();
_V280/*parser*/ = _V7/*_parser*/;
_V282/*hashStr*/ = _V5/*md5*/(_V281/*promiselandCodeStr*/);
_V65/*parsed*/ = _V280/*parser*/["parse"](_V281/*promiselandCodeStr*/);
_V273/*resStr*/ = "";
_V176/*cp*/;
_V43/*res*/ = {};
if((_V65/*parsed*/["length"] === _V46/*undefined*/)){
if((_V65/*parsed*/["type"] == "Program")){
_V283/*parsingConfig*/ = _V65/*parsed*/["config"];
_V176/*cp*/ = new _V39/*CodeParser*/({"toParse": _V65/*parsed*/,
"hashStr": _V282/*hashStr*/});;
_V284/*makePromiseLandModule*/ = false;
if(_V283/*parsingConfig*/){
_V284/*makePromiseLandModule*/ = _V176/*cp*/["getTemplateProperty"](_V283/*parsingConfig*/, "__promiseLandModule", "Literal");;
if((_V284/*makePromiseLandModule*/ && (_V284/*makePromiseLandModule*/["value"] === true))){
_V284/*makePromiseLandModule*/ = true;;

}else{
_V284/*makePromiseLandModule*/ = false;;
};
;
};
;
_V285/*result*/ = _V176/*cp*/["getResult"]();
_V286/*programStr*/ = ((_V285/*result*/["getPreCodeStr"]() + _V285/*result*/["getCodeStr"]()) + _V285/*result*/["getPostCodeStr"]());
_V43/*res*/["warnings"] = _V176/*cp*/["getWarnings"]();;
_V43/*res*/["errors"] = _V176/*cp*/["getErrors"]();;
_V287/*mainPartStr*/ = "";
if(_V15/*_pureCode*/){
_V273/*resStr*/ = _V286/*programStr*/;;

}else{
if(_V176/*cp*/["programPromiseStr"]){
_V287/*mainPartStr*/ += (((("var " + _V176/*cp*/["programPromiseStr"]) + " = ") + _V176/*cp*/["newPromiseStr"]()) + ";\n");;
_V287/*mainPartStr*/ += (((("promiseland._registerModule({ hashStr: \"" + _V282/*hashStr*/) + "\", \"module\": ") + _V176/*cp*/["programPromiseStr"]) + ", promising: true });\n");;
_V287/*mainPartStr*/ += _V286/*programStr*/;;
_V287/*mainPartStr*/ += (";\nreturn " + _V176/*cp*/["programPromiseStr"]);;

}else{
_V287/*mainPartStr*/ += _V286/*programStr*/;;
_V287/*mainPartStr*/ += (("return " + _V176/*cp*/["resultNameStr"]) + ";\n");;
};
;
_V273/*resStr*/ += _V277/*createHeader*/({"makePromiseLandModule": _V284/*makePromiseLandModule*/,
"hashStr": _V282/*hashStr*/,
"usePromise": _V176/*cp*/["common"]["usePromise"],
"useRequire": _V176/*cp*/["common"]["useRequire"],
"useCallback": _V176/*cp*/["common"]["useCallback"],
"useClassSystem": _V176/*cp*/["common"]["useClassSystem"]});;
_V273/*resStr*/ += _V287/*mainPartStr*/;;
_V273/*resStr*/ += _V279/*createFooter*/({"makePromiseLandModule": _V284/*makePromiseLandModule*/});;
};
;

}else{
this["error"](_V65/*parsed*/, _V12/*errorMsg*/["unknownType"]);;
};
;

}else{
_V11/*errorFun*/(_V65/*parsed*/, _V12/*errorMsg*/["severalProgramElements"]);;
};
;
if(! (_V43/*res*/["errors"] && _V43/*res*/["errors"]["length"])){
_V43/*res*/["javascript"] = _V273/*resStr*/;;
};
;
_V27/*p*/["resolve"](_V43/*res*/);;
return _V27/*p*/["promise"];;
;
})};
_V1.resolve(_V280/*parser*/); return;;
_V1.resolve(); return;;
}));}));}));}));})();
return _V1;
})();
;;
return _V1});
})();