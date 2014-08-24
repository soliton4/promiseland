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
    if (promiseland._hasModule({ hashStr: "b12bbeeb9efad38b6e7a215700990cb5" })){ return promiseland._getModule("b12bbeeb9efad38b6e7a215700990cb5"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "b12bbeeb9efad38b6e7a215700990cb5", "module": _V1, promising: true });
var _V17/*promiseland*/;try{_V17/*promiseland*/ = promiseland;}catch(e){};
var _V25/*Object*/;try{_V25/*Object*/ = Object;}catch(e){};
var _V56/*undefined*/;try{_V56/*undefined*/ = undefined;}catch(e){};
var _V168/*JSON*/;try{_V168/*JSON*/ = JSON;}catch(e){};
var _V181/*Array*/;try{_V181/*Array*/ = Array;}catch(e){};
var _V182/*console*/;try{_V182/*console*/ = console;}catch(e){};
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
var _V28/*Map*/;
var _V33/*VariableNames*/;
var _V34/*mixin*/;
var _V32/*identifierName*/;
var _V40/*checkIsFunction*/;
var _V41/*findPromises*/;
var _V42/*checkPromising*/;
var _V43/*addExtraToPar*/;
var _V46/*getExtraFromPar*/;
var _V47/*_Result*/;
var _V49/*CodeParser*/;
var _V280/*loaderStr*/;
var _V284/*promiselandRequireStr*/;
var _V285/*callbackRequireStr*/;
var _V286/*loaderEndStr*/;
var _V287/*createHeader*/;
var _V289/*createFooter*/;
var _V290/*parser*/;
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
_V28/*Map*/ = (function(){var _V22/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(){
;
this["map"] = {};;
;
}),
"set": (function(_V23/*key*/, _V24/*value*/){
;
this["map"][_V23/*key*/] = _V24/*value*/;;
;
}),
"get": (function(_V23/*key*/){
;
if(_V25/*Object*/["prototype"]["hasOwnProperty"]["call"](this["map"], _V23/*key*/)){
return this["map"][_V23/*key*/];;
};
;
;
}),
"getArray": (function(){
var _V26/*res*/;
var _V27/*n*/;
;
_V26/*res*/ = [];
_V27/*n*/;
for(_V27/*n*/ in this["map"]){_V26/*res*/["push"]({"key": _V27/*n*/,
"value": this["map"][_V27/*n*/]});;
};
;
return _V26/*res*/;;
;
})}, [], _V22/*inherited*/);
return res; })();_V28/*Map*/;;
_V33/*VariableNames*/ = (function(){var _V29/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(_V30/*par*/){
;
this["givenNames"] = (_V30/*par*/["givenNames"] || new _V28/*Map*/());;
this["getUniqueName"] = _V30/*par*/["getUniqueName"];;
;
}),
"get": (function(_V31/*name*/){
var _V27/*n*/;
;
_V27/*n*/ = _V32/*identifierName*/(_V31/*name*/);
if((_V27/*n*/ === "undefined")){
return _V27/*n*/;;
};
;
if(! this["givenNames"]["get"](_V27/*n*/)){
this["givenNames"]["set"](_V27/*n*/, (((this["getUniqueName"]() + "/*") + _V27/*n*/) + "*/"));;
};
;
return this["givenNames"]["get"](_V27/*n*/);;
;
})}, [], _V29/*inherited*/);
return res; })();_V33/*VariableNames*/;;
_V34/*mixin*/ = (function(){
var _V35/*t*/;
var _V37/*i*/;
var _V38/*m*/;
var _V39/*p*/;
var _V36/*arguments*/ = arguments;
;
_V35/*t*/ = _V36/*arguments*/[0];
_V37/*i*/ = 0;
for(_V37/*i*/ = 1;(_V37/*i*/ < _V36/*arguments*/["length"]);++_V37/*i*/){{_V38/*m*/ = _V36/*arguments*/[_V37/*i*/];
for(_V39/*p*/ in _V38/*m*/){_V35/*t*/[_V39/*p*/] = _V38/*m*/[_V39/*p*/];;
};
;
}};
;
return _V35/*t*/;;
;
});
_V32/*identifierName*/ = (function(_V30/*par*/){
;
if((typeof _V30/*par*/ == "string")){
return _V30/*par*/;;
};
;
if((_V30/*par*/["type"] == "Literal")){
return _V30/*par*/["value"];;
};
;
return _V30/*par*/["name"];;
;
});
_V40/*checkIsFunction*/ = (function(_V30/*par*/){
;
if((((_V30/*par*/["type"] == "FunctionExpression") || (_V30/*par*/["type"] == "FunctionDeclaration")) || (_V30/*par*/["type"] == "MemberFunction"))){
return true;;
};
;
return false;;
;
});
_V41/*findPromises*/ = (function(_V30/*par*/){
var _V37/*i*/;
;
if((! _V30/*par*/ || (typeof _V30/*par*/ == "string"))){
return false;;
};
;
if(((_V30/*par*/["type"] == "UnaryExpression") && ((_V30/*par*/["operator"] == "*") || (_V30/*par*/["operator"] == "require")))){
_V30/*par*/["promising"] = true;;
};
;
if((_V40/*checkIsFunction*/(_V30/*par*/) && (_V30/*par*/["promise"] == "*"))){
_V30/*par*/["promising"] = true;;
};
;
_V37/*i*/;
for(_V37/*i*/ in _V30/*par*/){if((_V37/*i*/ == "_extrainfo")){
continue;;
};
;
if((_V41/*findPromises*/(_V30/*par*/[_V37/*i*/]) && ! _V40/*checkIsFunction*/(_V30/*par*/[_V37/*i*/]))){
_V30/*par*/["promising"] = true;;
};
;
};
;
if(_V30/*par*/["promising"]){
return true;;
};
;
return false;;
;
});
_V42/*checkPromising*/ = (function(_V30/*par*/){
;
if((! _V30/*par*/ || (typeof _V30/*par*/ == "string"))){
return false;;
};
;
if((typeof _V30/*par*/["isPromising"] == "function")){
return _V30/*par*/["isPromising"]();;
};
;
return (_V30/*par*/["promising"] || _V30/*par*/["isPromising"]);;
;
});
_V43/*addExtraToPar*/ = (function(_V30/*par*/, _V44/*property*/, _V45/*obj*/){
;
if(! _V30/*par*/["_extrainfo"]){
_V30/*par*/["_extrainfo"] = {};;
};
;
_V30/*par*/["_extrainfo"][_V44/*property*/] = _V45/*obj*/;;
;
});
_V46/*getExtraFromPar*/ = (function(_V30/*par*/, _V44/*property*/){
;
if(_V30/*par*/["_extrainfo"]){
return _V30/*par*/["_extrainfo"][_V44/*property*/];;
};
;
;
});
__requireFun("./Result").then(_V3(function(_V48){_V47/*_Result*/ = _V48;
_V49/*CodeParser*/ = (function(_V30/*par*/){
var _V50/*self*/;
var _V37/*i*/;
var _V245/*InheritedSystem*/;
;
_V50/*self*/ = this;
this["toParse"] = _V30/*par*/["toParse"];;
this["dynamicCode"] = _V30/*par*/["dynamicCode"];;
this["hashStr"] = _V30/*par*/["hashStr"];;
if(_V30/*par*/["_locals"]){
for(_V37/*i*/ in _V30/*par*/["_locals"]){this[_V37/*i*/] = _V30/*par*/["_locals"][_V37/*i*/];;
};
;
};
;
if(_V30/*par*/["common"]){
this["common"] = _V30/*par*/["common"];;

}else{
this["common"] = {"givenTypeNames": {},
"errors": [],
"uniquebasis": (_V30/*par*/["uniquebasis"] || {"index": 1}),
"parsingConfig": _V30/*par*/["parsingConfig"]};;
this["common"]["variableNames"] = new _V33/*VariableNames*/({"getUniqueName": (function(_V31/*name*/){
;
return _V50/*self*/["getUniqueName"](_V31/*name*/);;
;
})});;
};
;
this["errors"] = this["common"]["errors"];;
this["newPromiseStr"] = (function(){
;
this["common"]["usePromise"] = true;;
return _V21/*globalNewPromiseStr*/();;
;
});;
this["types"] = _V34/*mixin*/({}, _V30/*par*/["types"]);;
if(! this["types"]["var"]){
this["types"]["var"] = {"name": "var",
"type": _V18/*classSystem*/["getBuiltinType"]("var")};;
};
this["variables"] = _V34/*mixin*/({}, _V30/*par*/["variables"]);;
this["algorithmicCode"] = false;;
this["stack"] = (function(_V51/*parStr*/){
var _V52/*stackNameStr*/;
;
_V52/*stackNameStr*/ = ("_stack_" + _V51/*parStr*/);
if(! this[_V52/*stackNameStr*/]){
this[_V52/*stackNameStr*/] = [];;
};
;
this[_V52/*stackNameStr*/]["push"](this[_V51/*parStr*/]);;
;
});;
this["unstack"] = (function(_V51/*parStr*/){
var _V52/*stackNameStr*/;
;
_V52/*stackNameStr*/ = ("_stack_" + _V51/*parStr*/);
this[_V51/*parStr*/] = this[_V52/*stackNameStr*/]["pop"]();;
;
});;
this["_start"] = (function(){
var _V53/*tempRes*/;
;
if(this["toParse"]){
if((this["toParse"]["type"] == "Program")){
_V53/*tempRes*/ = this["makeCompleteStatement"](this["parseProgram"](this["toParse"]));
_V53/*tempRes*/["push"](";");;
this["result"] = this["makeCompleteStatement"](_V53/*tempRes*/);;

}else{
if(_V40/*checkIsFunction*/(this["toParse"])){
this["functionRes"] = this["parseFunction"](this["toParse"]);;
this["result"] = this["makeCompleteStatement"](this["functionRes"]);;
};
};
;
};
;
;
});;
this["makeCompleteStatement"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["setComplete"]();;
_V26/*res*/["push"](_V30/*par*/);;
return _V26/*res*/;;
;
});;
this["makeCompleteStatementDynamic"] = (function(_V30/*par*/){
var _V54/*r*/;
var _V55/*d*/;
;
_V54/*r*/ = this["newResult"]();
_V55/*d*/ = this["newResult"]();
_V55/*d*/["push"](this["makeCompleteStatement"](_V30/*par*/), _V56/*undefined*/, {"stringEncode": true});;
_V54/*r*/["push"]("\"");;
_V54/*r*/["push"](_V55/*d*/);;
_V54/*r*/["push"]("\"");;
return _V54/*r*/;;
;
});;
this["compareTypes"] = (function(_V57/*par1*/, _V58/*par2*/){
;
return (_V57/*par1*/ === _V58/*par2*/);;
;
});;
this["localVariables"] = {};;
this["addLocalVariable"] = (function(_V30/*par*/, _V59/*parParsed*/){
var _V50/*self*/;
var _V31/*name*/;
var _V60/*newType*/;
var _V61/*existing*/;
;
_V50/*self*/ = this;
_V31/*name*/ = _V32/*identifierName*/(_V30/*par*/["name"]);
if(this["localVariables"]["hasOwnProperty"](_V31/*name*/)){
if((! _V30/*par*/["type"] && ! _V30/*par*/["typename"])){

}else{
_V60/*newType*/ = (_V30/*par*/["type"] || this["getType"](_V30/*par*/["typename"], _V59/*parParsed*/));
_V61/*existing*/ = this["_getVariableType"](this["localVariables"][_V31/*name*/]);
_V18/*classSystem*/["definitionPromise"](_V60/*newType*/)["then"]((function(_V62/*type1*/){
;
_V18/*classSystem*/["definitionPromise"](_V61/*existing*/)["then"]((function(_V63/*type2*/){
;
if(! _V18/*classSystem*/["isSameType"](_V62/*type1*/, _V63/*type2*/)){
_V50/*self*/["addError"](_V59/*parParsed*/, _V12/*errorMsg*/["variableRedefinition"]);;
};
;
;
}));;
;
}));;
};
;

}else{
this["localVariables"][_V31/*name*/] = {"typename": _V30/*par*/["typename"],
"type": _V30/*par*/["type"],
"name": _V31/*name*/};;
if((! _V30/*par*/["typename"] && ! _V30/*par*/["type"])){
this["localVariables"][_V31/*name*/]["type"] = this["getProvisionalType"](_V59/*parParsed*/);;
this["localVariables"][_V31/*name*/]["needsResolving"] = true;;
};
;
};
;
if(_V30/*par*/["parameter"]){
this["localVariables"][_V31/*name*/]["parameter"] = _V30/*par*/["parameter"];;
};
;
if(_V30/*par*/["isFunction"]){
this["localVariables"][_V31/*name*/]["function"] = _V30/*par*/["function"];;
};
;
this["variables"][_V31/*name*/] = this["localVariables"][_V31/*name*/];;
;
});;
this["addLocalVariableTemporary"] = (function(_V30/*par*/, _V59/*parParsed*/){
var _V50/*self*/;
var _V31/*name*/;
var _V64/*originalEntry*/;
var _V65/*entry*/;
var _V66/*resPs*/;
;
_V50/*self*/ = this;
_V31/*name*/ = _V32/*identifierName*/(_V30/*par*/["name"]);
_V64/*originalEntry*/;
if(this["variables"]["hasOwnProperty"](_V31/*name*/)){
_V64/*originalEntry*/ = this["variables"][_V31/*name*/];;
};
;
_V65/*entry*/ = {"typename": _V30/*par*/["typename"],
"type": _V30/*par*/["type"],
"name": _V31/*name*/};
if((! _V30/*par*/["typename"] && ! _V30/*par*/["type"])){
_V65/*entry*/["type"] = this["getProvisionalType"](_V59/*parParsed*/);;
_V65/*entry*/["needsResolving"] = true;;
};
;
if(_V30/*par*/["parameter"]){
_V65/*entry*/["parameter"] = _V30/*par*/["parameter"];;
};
;
if(_V30/*par*/["isFunction"]){
_V65/*entry*/["function"] = _V30/*par*/["function"];;
};
;
_V65/*entry*/["temporary"] = true;;
this["variables"][_V31/*name*/] = _V65/*entry*/;;
_V66/*resPs*/ = new _V16/*Promise*/();
(function(){
var _V67 = new __Promise();
var _V69 = function(code){ return function(res){ try{code(res);}catch(e){ _V67.reject(e); }; }; };
var _V70 = function(e){ _V67.reject(e); };
var _V72/*this*/ = this;
_V69(function(){;
_V66/*resPs*/.then(_V69(function(_V71){_V71;;
if(_V64/*originalEntry*/){
_V72/*this*/["variables"][_V31/*name*/] = _V64/*originalEntry*/;;

}else{
delete _V72/*this*/["variables"][_V31/*name*/];;
};
;
_V67.resolve(); return;;
}), _V70);
;})();
return _V67;
})();;
return _V66/*resPs*/;;
;
});;
this["resolveFunctionType"] = (function(_V30/*par*/, _V73/*parsed*/){
var _V31/*name*/;
var _V65/*entry*/;
var _V35/*t*/;
;
_V31/*name*/ = _V32/*identifierName*/(_V30/*par*/["name"]);
_V65/*entry*/ = this["localVariables"][_V31/*name*/];
if(_V65/*entry*/["needsResolving"]){
_V65/*entry*/["needsResolving"] = false;;
_V35/*t*/ = _V65/*entry*/["type"];
_V65/*entry*/["type"] = _V30/*par*/["type"];;
this["resolveProvisional"](_V35/*t*/, _V30/*par*/["type"]);;

}else{
this["addLocalVariable"]({"name": _V30/*par*/["name"],
"type": _V30/*par*/["type"]}, _V73/*parsed*/);;
};
;
;
});;
this["getProvisionalType"] = (function(_V59/*parParsed*/){
var _V74/*type*/;
var _V75/*ps*/;
;
if(! _V59/*parParsed*/){
_V11/*errorFun*/({}, _V12/*errorMsg*/["internalParserInfoMissing"]);;
};
;
_V74/*type*/ = _V18/*classSystem*/["_createProvisionalClass"]();
_V75/*ps*/ = this["addError"](_V59/*parParsed*/, _V12/*errorMsg*/["unresolvedType"]);
_V18/*classSystem*/["definitionPromise"](_V74/*type*/)["then"]((function(){
;
_V75/*ps*/["resolve"]();;
;
}));;
return _V74/*type*/;;
;
});;
this["resolveProvisional"] = (function(_V76/*parType*/, _V77/*parResult*/){
;
return _V18/*classSystem*/["_resolveProvisional"](_V76/*parType*/, _V77/*parResult*/);;
;
});;
this["_getVariableType"] = (function(_V78/*parEntry*/){
;
if(_V78/*parEntry*/["type"]){
return _V78/*parEntry*/["type"];;
};
;
return this["getType"](_V78/*parEntry*/["typename"]);;
;
});;
this["getVariableType"] = (function(_V79/*parName*/, _V30/*par*/){
var _V31/*name*/;
var _V65/*entry*/;
;
_V31/*name*/ = _V32/*identifierName*/(_V79/*parName*/);
this["_addUsedVariable"](_V31/*name*/);;
if(this["variables"]["hasOwnProperty"](_V31/*name*/)){
_V65/*entry*/ = this["variables"][_V31/*name*/];
return this["_getVariableType"](_V65/*entry*/);;
};
;
return this["getType"]("var");;
;
});;
this["usedVariables"] = {};;
this["_addUsedVariable"] = (function(_V30/*par*/){
var _V31/*name*/;
;
_V31/*name*/ = _V32/*identifierName*/(_V30/*par*/);
if((_V31/*name*/ === "undefined")){
return;;
};
;
if(this["variables"]["hasOwnProperty"](_V31/*name*/)){
if(this["variables"][_V31/*name*/]["temporary"]){
return;;
};
;
};
;
this["usedVariables"][_V31/*name*/] = true;;
;
});;
this["_getUsedVairables"] = (function(){
;
return this["usedVariables"];;
;
});;
this["functionsAr"] = [];;
this["addFunction"] = (function(_V26/*res*/, _V31/*name*/, _V30/*par*/){
;
this["resolveFunctionType"]({"name": _V32/*identifierName*/(_V31/*name*/),
"type": _V26/*res*/["getType"]()}, _V30/*par*/);;
this["functionsAr"]["push"]({"res": _V26/*res*/,
"name": _V31/*name*/});;
;
});;
this["_getErrors"] = (function(_V80/*parWarning*/){
var _V81/*a*/;
var _V37/*i*/;
;
_V81/*a*/ = [];
_V37/*i*/ = 0;
for(_V37/*i*/ = 0;(_V37/*i*/ < this["errors"]["length"]);++_V37/*i*/){{if(this["errors"][_V37/*i*/]["valid"]){
if((_V80/*parWarning*/ ? this["errors"][_V37/*i*/]["warning"] : ! this["errors"][_V37/*i*/]["warning"])){
_V81/*a*/["push"](this["errors"][_V37/*i*/]);;
};
;
};
;
}};
;
return _V81/*a*/;;
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
this["getWarningFun"] = (function(_V30/*par*/){
var _V50/*self*/;
;
_V50/*self*/ = this;
return (function(_V82/*err*/){
;
_V50/*self*/["warning"](_V30/*par*/, _V82/*err*/);;
;
});;
;
});;
this["warning"] = (function(_V30/*par*/, _V82/*err*/){
;
if(! _V30/*par*/["line"]){
_V11/*errorFun*/({}, _V12/*errorMsg*/["internalParserInfoMissing"]);;
};
;
this["addWarning"](_V30/*par*/, _V82/*err*/);;
;
});;
this["error"] = (function(_V30/*par*/, _V82/*err*/){
;
this["_addError"](_V30/*par*/, _V82/*err*/);;
_V11/*errorFun*/(_V30/*par*/, _V82/*err*/);;
;
});;
this["addError"] = (function(_V30/*par*/, _V82/*err*/){
;
return this["_addError"](_V30/*par*/, _V82/*err*/);;
;
});;
this["addWarning"] = (function(_V30/*par*/, _V82/*err*/){
;
return this["_addError"](_V30/*par*/, _V82/*err*/, true);;
;
});;
this["_addError"] = (function(_V30/*par*/, _V82/*err*/, _V83/*warning*/){
var _V65/*entry*/;
var _V75/*ps*/;
;
_V65/*entry*/ = {"par": _V30/*par*/,
"line": _V30/*par*/["line"],
"column": _V30/*par*/["column"],
"msg": ((_V82/*err*/["id"] + ": ") + _V82/*err*/["msg"]),
"valid": true,
"warning": _V83/*warning*/};
this["errors"]["push"](_V65/*entry*/);;
_V75/*ps*/ = new _V16/*Promise*/();
_V75/*ps*/["then"]((function(){
;
_V65/*entry*/["valid"] = false;;
;
}));;
return _V75/*ps*/;;
;
});;
this["runtimeError"] = (function(_V30/*par*/, _V58/*par2*/){
var _V75/*ps*/;
var _V26/*res*/;
;
_V75/*ps*/ = this["addWarning"](_V30/*par*/, _V58/*par2*/);
_V26/*res*/ = this["runtimeErrorNoWarning"](_V58/*par2*/);
_V26/*res*/["setPromise"](_V75/*ps*/);;
return _V26/*res*/;;
;
});;
this["runtimeErrorNoWarning"] = (function(_V58/*par2*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"]((((("(function(){ throw { id:" + _V58/*par2*/["id"]) + ", msg: ") + _V14/*stringEncodeStr*/(_V58/*par2*/["msg"])) + " } })()"));;
return _V26/*res*/;;
;
});;
this["getUniqueName"] = (function(_V31/*name*/){
var _V84/*retStr*/;
;
_V84/*retStr*/ = ("PL$" + this["common"]["uniquebasis"]["index"]++);
if(_V31/*name*/){
_V84/*retStr*/ += (("/*" + _V31/*name*/) + "*/");;
};
;
return _V84/*retStr*/;;
;
});;
this["getUniqueTypeMacro"] = (function(_V31/*name*/){
var _V85/*uniqueStr*/;
var _V26/*res*/;
;
_V85/*uniqueStr*/ = this["getUniqueName"]();
_V26/*res*/ = (((("/*\n'''\"\"\" " + _V85/*uniqueStr*/) + " ") + (_V31/*name*/ || "")) + " start */");
_V26/*res*/ += this["runtimeErrorNoWarning"](_V12/*errorMsg*/["failedToDetermineType"]);;
_V26/*res*/ += (((("/* " + _V85/*uniqueStr*/) + " ") + (_V31/*name*/ || "")) + " end */");;
return _V26/*res*/;;
;
});;
this["getVariableName"] = (function(_V31/*name*/){
;
return this["common"]["variableNames"]["get"](_V31/*name*/);;
;
});;
this["renderType"] = (function(_V76/*parType*/, _V59/*parParsed*/){
var _V26/*res*/;
var _V50/*self*/;
var _V86/*typeExpression*/;
var _V87/*renderTypeName*/;
var _V90/*errPs*/;
var _V31/*name*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["setType"]("var");;
_V50/*self*/ = this;
_V86/*typeExpression*/;
_V87/*renderTypeName*/ = (function(_V88/*parType1*/, _V89/*parType2*/){
var _V37/*i*/;
var _V31/*name*/;
;
_V37/*i*/;
for(_V37/*i*/ in _V50/*self*/["types"]){if(((_V50/*self*/["types"][_V37/*i*/]["type"] === _V88/*parType1*/) || (_V50/*self*/["types"][_V37/*i*/]["type"] === _V89/*parType2*/))){
if(_V50/*self*/["isVar"](_V50/*self*/["types"][_V37/*i*/]["type"])){
_V50/*self*/["common"]["useClassSystem"] = true;;
return "classSystem.getBuiltinType(\"var\")";;
};
;
_V31/*name*/ = _V37/*i*/;
if(! _V50/*self*/["common"]["givenTypeNames"][_V31/*name*/]){
_V50/*self*/["common"]["givenTypeNames"][_V31/*name*/] = (((_V50/*self*/["getUniqueName"]() + "/*type:") + _V31/*name*/) + "*/");;
};
;
return _V50/*self*/["common"]["givenTypeNames"][_V31/*name*/];;
};
;
};
;
;
});
if((typeof _V76/*parType*/ == "function")){
_V90/*errPs*/ = this["addError"](_V59/*parParsed*/, _V12/*errorMsg*/["internalMissingType"]);
_V18/*classSystem*/["readyPromise"](_V76/*parType*/)["then"]((function(_V91/*resolvedType*/){
var _V92/*replace*/;
var _V86/*typeExpression*/;
var _V37/*i*/;
var _V93/*l*/;
;
_V92/*replace*/ = _V50/*self*/["newResult"]();
_V86/*typeExpression*/ = _V87/*renderTypeName*/(_V76/*parType*/, _V91/*resolvedType*/);
if(_V86/*typeExpression*/){
_V92/*replace*/["push"](_V86/*typeExpression*/);;
_V26/*res*/["push"](_V92/*replace*/);;
_V90/*errPs*/["resolve"]();;
return;;
};
;
if(_V18/*classSystem*/["isFunctionType"](_V91/*resolvedType*/)){
_V37/*i*/;
_V50/*self*/["common"]["useClassSystem"] = true;;
_V92/*replace*/["push"]("(classSystem.createFunctionType({ \"return\": ");;
_V92/*replace*/["push"](_V50/*self*/["renderType"](_V50/*self*/["getClassFromTemporaryTracked"](_V50/*self*/["getFunctionReturnType"](_V91/*resolvedType*/, _V59/*parParsed*/), _V59/*parParsed*/), _V59/*parParsed*/));;
_V92/*replace*/["push"](", arguments: [");;
_V93/*l*/ = _V50/*self*/["getFunctionArgumentCount"](_V91/*resolvedType*/);
for(_V37/*i*/ = 0;(_V37/*i*/ < _V93/*l*/);++_V37/*i*/){{if(_V37/*i*/){
_V92/*replace*/["push"](", ");;
};
;
_V92/*replace*/["push"](_V50/*self*/["renderType"](_V50/*self*/["getClassFromTemporaryTracked"](_V50/*self*/["getFunctionArgumentType"](_V91/*resolvedType*/, _V37/*i*/, _V59/*parParsed*/), _V59/*parParsed*/), _V59/*parParsed*/));;
}};
;
_V92/*replace*/["push"]("]}))");;
_V26/*res*/["push"](_V92/*replace*/);;
_V90/*errPs*/["resolve"]();;
return;;
};
;
;
}));;
return _V26/*res*/;;

}else{
if(_V76/*parType*/["isDynamic"]){
_V86/*typeExpression*/ = _V87/*renderTypeName*/(_V76/*parType*/, _V76/*parType*/);;
if(_V86/*typeExpression*/){
_V26/*res*/["push"](_V86/*typeExpression*/);;

}else{
_V26/*res*/["push"](this["addError"](_V59/*parParsed*/, _V12/*errorMsg*/["internalMissingType"]));;
};
;

}else{
_V31/*name*/ = _V32/*identifierName*/(_V76/*parType*/);
_V76/*parType*/ = this["getType"](_V31/*name*/, _V59/*parParsed*/);;
_V86/*typeExpression*/ = _V87/*renderTypeName*/(_V76/*parType*/, _V76/*parType*/);;
if(_V86/*typeExpression*/){
_V26/*res*/["push"](_V86/*typeExpression*/);;

}else{
_V26/*res*/["push"](this["addError"](_V59/*parParsed*/, _V12/*errorMsg*/["internalMissingType"]));;
};
;
};
};
;
return _V26/*res*/;;
;
});;
this["newInstance"] = (function(_V94/*element*/, _V95/*extras*/){
var _V96/*param*/;
var _V37/*i*/;
var _V97/*instance*/;
;
_V96/*param*/ = {"toParse": _V94/*element*/,
"common": this["common"],
"hashStr": this["hashStr"],
"types": this["types"],
"variables": this["variables"],
"_locals": {"inheritedSystem": this["inheritedSystem"],
"isClassObject": this["isClassObject"]}};
if(_V95/*extras*/){
_V37/*i*/;
for(_V37/*i*/ in _V95/*extras*/){_V96/*param*/[_V37/*i*/] = _V95/*extras*/[_V37/*i*/];;
};
;
};
;
_V97/*instance*/ = new _V49/*CodeParser*/(_V96/*param*/);
return _V97/*instance*/;;
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
this["newResult"] = (function(_V30/*par*/){
var _V54/*r*/;
;
_V54/*r*/ = new _V47/*_Result*/({"cp": this});
if(_V30/*par*/){
_V54/*r*/["push"](_V30/*par*/);;
};
;
return _V54/*r*/;;
;
});;
this["parseProgram"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V98/*extraRes*/;
var _V99/*extraModules*/;
var _V100/*parsingConfig*/;
var _V101/*reqireProperty*/;
var _V102/*functionStatement*/;
var _V31/*name*/;
;
_V41/*findPromises*/(_V30/*par*/);;
_V26/*res*/ = this["newResult"]();
_V98/*extraRes*/ = this["newResult"]();
_V98/*extraRes*/["push"]("\"use strict\";\n");;
_V43/*addExtraToPar*/(_V30/*par*/, "addFront", _V98/*extraRes*/);;
_V99/*extraModules*/ = new _V28/*Map*/();
_V100/*parsingConfig*/ = this["common"]["parsingConfig"];
if(_V100/*parsingConfig*/){
_V101/*reqireProperty*/ = this["getTemplateProperty"](_V100/*parsingConfig*/, "require", "ObjectExpression");
_V99/*extraModules*/ = this["getTemplateRequireProperty"](_V101/*reqireProperty*/);;
};
;
this["common"]["extraModules"] = _V99/*extraModules*/;;
if(_V42/*checkPromising*/(_V30/*par*/)){
this["programPromiseStr"] = this["getUniqueName"]();;
};
;
this["resultNameStr"] = this["getUniqueName"]();;
_V102/*functionStatement*/ = this["_parseFunction"](_V30/*par*/, {"promiseName": this["programPromiseStr"],
"noUntrack": true});
_V31/*name*/;
for(_V31/*name*/ in this["usedVariables"]){if((this["usedVariables"][_V31/*name*/] === true)){
if((_V31/*name*/ == "Promise")){
this["common"]["usePromise"] = true;;
};
;
if((_V31/*name*/ == "Callback")){
this["common"]["useCallback"] = true;;
};
;
if(_V99/*extraModules*/["get"](_V31/*name*/)){
continue;;
};
;
_V26/*res*/["push"]((("var " + this["getVariableName"](_V31/*name*/)) + ";"));;
_V26/*res*/["push"]("try{");;
_V26/*res*/["push"](this["getVariableName"](_V31/*name*/));;
_V26/*res*/["push"](" = ");;
_V26/*res*/["push"](_V31/*name*/);;
_V26/*res*/["push"](";}catch(e){};\n");;
};
;
};
;
_V26/*res*/["push"]((("var " + this["resultNameStr"]) + " = ("));;
_V26/*res*/["push"](this["makeCompleteStatement"](_V102/*functionStatement*/));;
_V26/*res*/["push"](")();\n");;
return _V26/*res*/;;
;
});;
this["parseFunction"] = (function(_V30/*par*/){
var _V26/*res*/;
;
this["stack"]("isFunction");;
this["isFunction"] = true;;
_V26/*res*/ = this["_parseFunction"](_V30/*par*/);
this["unstack"]("isFunction");;
return _V26/*res*/;;
;
});;
this["getTemplateProperty"] = (function(_V103/*parTemplate*/, _V104/*parProperty*/, _V105/*mandatoryType*/){
var _V37/*i*/;
var _V39/*p*/;
;
_V37/*i*/ = 0;
for(_V37/*i*/;(_V37/*i*/ < _V103/*parTemplate*/["properties"]["length"]);++_V37/*i*/){{_V39/*p*/ = _V103/*parTemplate*/["properties"][_V37/*i*/];
if(((_V39/*p*/["kind"] == "init") && (_V32/*identifierName*/(_V39/*p*/["key"]) == _V104/*parProperty*/))){
if(_V105/*mandatoryType*/){
if((_V39/*p*/["value"]["type"] != _V105/*mandatoryType*/)){
this["error"](_V39/*p*/["value"], _V12/*errorMsg*/["templateSyntaxError"]);;
};
;
};
;
return _V39/*p*/["value"];;
};
;
}};
;
;
});;
this["getTemplateRequireProperty"] = (function(_V103/*parTemplate*/){
var _V37/*i*/;
var _V26/*res*/;
var _V39/*p*/;
var _V23/*key*/;
;
_V37/*i*/ = 0;
_V26/*res*/ = new _V28/*Map*/();
for(_V37/*i*/;(_V37/*i*/ < _V103/*parTemplate*/["properties"]["length"]);++_V37/*i*/){{_V39/*p*/ = _V103/*parTemplate*/["properties"][_V37/*i*/];
if((_V39/*p*/["kind"] == "init")){
_V23/*key*/ = _V32/*identifierName*/(_V39/*p*/["key"]);
if((_V39/*p*/["value"]["type"] != "Literal")){
this["error"](_V39/*p*/["value"], _V12/*errorMsg*/["templateSyntaxError"]);;
};
;
_V26/*res*/["set"](_V23/*key*/, _V39/*p*/["value"]["value"]);;
};
;
}};
;
return _V26/*res*/;;
;
});;
this["createExtraDynamicType"] = (function(_V76/*parType*/, _V30/*par*/, _V59/*parParsed*/){
var _V31/*name*/;
var _V65/*entry*/;
var _V26/*res*/;
var _V60/*newType*/;
;
_V31/*name*/;
if(_V30/*par*/["property"]){
_V31/*name*/ = ((this["getTypeName"](_V76/*parType*/, _V59/*parParsed*/) + "::property::") + _V30/*par*/["property"]);;

}else{
if(_V30/*par*/["temporaryTracked"]){
_V31/*name*/ = (this["getTypeName"](_V76/*parType*/, _V59/*parParsed*/) + "::temporaryTracked");;

}else{
if(_V30/*par*/["temporaryTrackedResolved"]){
_V31/*name*/ = (this["getTypeName"](_V76/*parType*/, _V59/*parParsed*/) + "::temporaryTrackedResolved");;

}else{
this["error"](_V12/*errorMsg*/["internalMissingTypeProperty"]);;
};
};
};
;
if(! _V76/*parType*/["extraTypes"]){
_V76/*parType*/["extraTypes"] = [];;
};
;
if(! _V76/*parType*/["extraTypeMap"]){
_V76/*parType*/["extraTypeMap"] = {};;
};
;
if(_V76/*parType*/["extraTypeMap"]["hasOwnProperty"](_V31/*name*/)){
return _V76/*parType*/["extraTypeMap"][_V31/*name*/];;
};
;
_V65/*entry*/ = {"res": this["newResult"]()};
_V76/*parType*/["extraTypes"]["push"](_V65/*entry*/);;
_V26/*res*/ = _V65/*entry*/["res"];
this["addType"]({"name": _V31/*name*/,
"dynamic": true}, _V59/*parParsed*/);;
_V26/*res*/["push"]("var /*extratyperender*/ ");;
_V26/*res*/["push"](this["renderType"](_V31/*name*/));;
_V26/*res*/["push"](" = ");;
this["common"]["useClassSystem"] = true;;
if(_V30/*par*/["property"]){
if((_V30/*par*/["property"] == "constructor")){
_V26/*res*/["push"]("classSystem.getConstructorType({\"type\":");;

}else{
_V26/*res*/["push"]("classSystem.getPropertyType({\"type\":");;
};
;
_V26/*res*/["push"](this["renderType"](_V76/*parType*/));;
_V26/*res*/["push"]((", property: " + _V14/*stringEncodeStr*/(_V30/*par*/["property"])));;
_V26/*res*/["push"]("});\n");;

}else{
if(_V30/*par*/["temporaryTracked"]){
_V26/*res*/["push"]("classSystem._createTemporaryTrackedClass(");;
_V26/*res*/["push"](this["renderType"](_V76/*parType*/));;
_V26/*res*/["push"](");\n");;

}else{
if(_V30/*par*/["temporaryTrackedResolved"]){
_V26/*res*/["push"]("classSystem.getClassFromTemporaryTracked(");;
_V26/*res*/["push"](this["renderType"](_V76/*parType*/));;
_V26/*res*/["push"](");\n");;
};
};
};
;
_V60/*newType*/ = this["getType"](_V31/*name*/, _V59/*parParsed*/);
_V65/*entry*/["type"] = _V60/*newType*/;;
_V76/*parType*/["extraTypeMap"][_V31/*name*/] = _V60/*newType*/;;
return _V60/*newType*/;;
;
});;
this["getFunctionType"] = (function(_V30/*par*/){
var _V106/*isTyped*/;
var _V107/*functionTypeParam*/;
var _V93/*l*/;
var _V108/*tempTypename*/;
;
_V106/*isTyped*/ = false;
_V107/*functionTypeParam*/ = {"return": this["getType"]("var"),
"arguments": []};
if(_V30/*par*/["returnTypename"]){
_V106/*isTyped*/ = true;;
_V107/*functionTypeParam*/["return"] = this["getType"](_V30/*par*/["returnTypename"]);;
};
;
if((_V30/*par*/["params"] && _V30/*par*/["params"]["length"])){
_V37/*i*/ = 0;;
_V93/*l*/ = _V30/*par*/["params"]["length"];
for(_V37/*i*/;(_V37/*i*/ < _V93/*l*/);++_V37/*i*/){{_V108/*tempTypename*/ = _V32/*identifierName*/((_V30/*par*/["params"][_V37/*i*/]["typename"] || "var"));
_V107/*functionTypeParam*/["arguments"]["push"](this["getType"](_V108/*tempTypename*/, _V30/*par*/));;
if((_V108/*tempTypename*/ != "var")){
_V106/*isTyped*/ = true;;
};
;
}};
;
};
;
if(_V106/*isTyped*/){
return this["createFunctionType"](_V107/*functionTypeParam*/);;
};
;
return this["getType"]("var");;
;
});;
this["createFunctionType"] = (function(_V30/*par*/){
var _V109/*isDynamic*/;
var _V37/*i*/;
;
_V109/*isDynamic*/ = false;
if(_V30/*par*/["return"]["isDynamic"]){
_V109/*isDynamic*/ = true;;
};
;
_V37/*i*/ = 0;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V30/*par*/["arguments"]["length"]);++_V37/*i*/){{if(_V30/*par*/["arguments"][_V37/*i*/]["isDynamic"]){
_V109/*isDynamic*/ = true;;
};
;
}};
;
if(_V109/*isDynamic*/){
debugger;

}else{
return _V18/*classSystem*/["createFunctionType"](_V30/*par*/);;
};
;
;
});;
this["addBeforeReturn"] = (function(_V110/*parRes*/, _V111/*parCondition*/){
var _V112/*condition*/;
var _V113/*conditional*/;
var _V114/*frontRes*/;
var _V115/*endRes*/;
;
_V112/*condition*/ = _V111/*parCondition*/;
if((_V111/*parCondition*/ === _V56/*undefined*/)){
_V112/*condition*/ = true;;
};
;
_V113/*conditional*/ = this["createConditionalCode"](_V110/*parRes*/);
_V113/*conditional*/["addCondition"](_V112/*condition*/);;
this["runBeforeReturnRes"]["push"](_V113/*conditional*/["res"]);;
if(! this["beforeReturnExists"]){
this["beforeReturnExists"] = true;;
_V114/*frontRes*/ = this["newResult"]();
_V115/*endRes*/ = this["newResult"]();
this["beforeReturnFrontConditional"] = this["createConditionalCode"](_V114/*frontRes*/);;
this["beforeReturnEndConditional"] = this["createConditionalCode"](_V115/*endRes*/);;
this["beforeReturnExistsPs"]["resolve"](this["runBeforeReturnRes"]);;
if(! this["promising"]){
_V114/*frontRes*/["push"]("try{");;
this["additionalCodeFrontRes"]["push"](this["beforeReturnFrontConditional"]["res"]);;
_V115/*endRes*/["push"]("}catch(e){");;
_V115/*endRes*/["push"](this["runBeforeReturnRes"]);;
_V115/*endRes*/["push"]("throw e};");;
this["additionalCodeEndRes"]["push"](this["beforeReturnEndConditional"]["res"]);;
};
;
};
;
this["beforeReturnFrontConditional"]["addCondition"](_V112/*condition*/);;
this["beforeReturnEndConditional"]["addCondition"](_V112/*condition*/);;
this["addBeforeReturnCondition"](_V112/*condition*/);;
;
});;
this["beforeReturnConditions"] = [];;
this["addBeforeReturnCondition"] = (function(_V111/*parCondition*/){
var _V37/*i*/;
;
this["beforeReturnConditions"]["push"](_V111/*parCondition*/);;
_V37/*i*/ = 0;
for(_V37/*i*/ = 0;(_V37/*i*/ < this["beforeReturnConditionFuns"]["length"]);++_V37/*i*/){{this["beforeReturnConditionFuns"][_V37/*i*/](_V111/*parCondition*/);;
}};
;
;
});;
this["beforeReturnConditionFuns"] = [];;
this["addBeforeReturnConditionFun"] = (function(_V116/*parFun*/){
var _V37/*i*/;
;
this["beforeReturnConditionFuns"]["push"](_V116/*parFun*/);;
_V37/*i*/ = 0;
for(_V37/*i*/ = 0;(_V37/*i*/ < this["beforeReturnConditions"]["length"]);++_V37/*i*/){{_V116/*parFun*/(this["beforeReturnConditions"][_V37/*i*/]);;
}};
;
;
});;
this["getReturnCode"] = (function(_V30/*par*/){
var _V50/*self*/;
var _V26/*res*/;
var _V117/*falseRes*/;
var _V118/*beforeReturnCode*/;
var _V119/*newRes*/;
var _V120/*valueRes*/;
var _V121/*trueRes*/;
var _V113/*conditional*/;
;
_V50/*self*/ = this;
_V26/*res*/ = this["newResult"]();
if(this["promising"]){
_V26/*res*/["push"]((this["returnPromise"] + ".resolve("));;
if(_V30/*par*/["value"]){
_V26/*res*/["push"](_V30/*par*/["value"]);;
};
;
_V26/*res*/["push"]("); return;");;

}else{
if((_V30/*par*/["return"] || _V30/*par*/["value"])){
_V26/*res*/["push"]("return");;
};
;
if(_V30/*par*/["value"]){
_V26/*res*/["push"](" ");;
_V26/*res*/["push"](_V30/*par*/["value"]);;
};
;
if((_V30/*par*/["return"] || _V30/*par*/["value"])){
_V26/*res*/["push"](";");;
};
;
};
;
_V117/*falseRes*/ = _V26/*res*/;
_V118/*beforeReturnCode*/ = this["runBeforeReturnRes"];
_V119/*newRes*/ = _V50/*self*/["newResult"]();
_V120/*valueRes*/ = _V50/*self*/["newResult"]();
if(_V30/*par*/["value"]){
_V120/*valueRes*/["push"]("(function(ret){ ");;
_V120/*valueRes*/["push"](_V118/*beforeReturnCode*/);;
_V120/*valueRes*/["push"]("return ret; })(");;
_V120/*valueRes*/["push"](_V30/*par*/["value"]);;
_V120/*valueRes*/["push"](")");;
};
;
if(_V50/*self*/["promising"]){
if(_V30/*par*/["value"]){
_V119/*newRes*/["push"]((_V50/*self*/["returnPromise"] + ".resolve("));;
_V119/*newRes*/["push"](_V120/*valueRes*/);;
_V119/*newRes*/["push"]("); return;");;

}else{
_V119/*newRes*/["push"](_V118/*beforeReturnCode*/);;
_V119/*newRes*/["push"]((_V50/*self*/["returnPromise"] + ".resolve("));;
_V119/*newRes*/["push"]("); return;");;
};
;

}else{
if(_V30/*par*/["value"]){
_V119/*newRes*/["push"]("return ");;
_V119/*newRes*/["push"](_V120/*valueRes*/);;
_V119/*newRes*/["push"](";");;

}else{
_V119/*newRes*/["push"](_V118/*beforeReturnCode*/);;
if(_V30/*par*/["return"]){
_V119/*newRes*/["push"]("return;");;
};
;
};
;
};
;
_V121/*trueRes*/ = _V119/*newRes*/;
_V113/*conditional*/ = this["createConditionalCode"](_V121/*trueRes*/, _V117/*falseRes*/);
this["addBeforeReturnConditionFun"]((function(_V122/*con*/){
;
_V113/*conditional*/["addCondition"](_V122/*con*/);;
;
}));;
return _V113/*conditional*/["res"];;
;
});;
this["_parseFunction"] = (function(_V30/*par*/, _V123/*parJsn*/){
var _V124/*parGivenPromiseNameStr*/;
var _V125/*noUntrack*/;
var _V126/*hasFrameInfo*/;
var _V127/*runRemote*/;
var _V128/*runExclusive*/;
var _V37/*i*/;
var _V129/*typename*/;
var _V59/*parParsed*/;
var _V130/*funClosure*/;
var _V50/*self*/;
var _V131/*hasName*/;
var _V132/*nameStr*/;
var _V133/*templateTypesAr*/;
var _V134/*templateTypes*/;
var _V135/*typeVarInit*/;
var _V39/*p*/;
var _V136/*extraTypesRes*/;
var _V26/*res*/;
var _V137/*funRes*/;
var _V93/*l*/;
var _V138/*classesRes*/;
var _V139/*addFront*/;
var _V140/*b*/;
var _V141/*extraPar*/;
var _V142/*block*/;
var _V143/*varname*/;
var _V74/*type*/;
var _V144/*completeFun*/;
var _V145/*returnTypePromiseCheck*/;
var _V146/*handleExtras*/;
var _V147/*dt*/;
var _V148/*thisFunType*/;
var _V149/*uniqueNameStr*/;
var _V150/*remoteClosure*/;
var _V151/*finalResult*/;
;
_V123/*parJsn*/ = (_V123/*parJsn*/ || {});;
_V124/*parGivenPromiseNameStr*/ = _V123/*parJsn*/["promiseName"];
_V125/*noUntrack*/ = _V123/*parJsn*/["noUntrack"];
_V126/*hasFrameInfo*/ = false;
_V127/*runRemote*/ = false;
_V128/*runExclusive*/ = false;
_V37/*i*/ = 0;
_V129/*typename*/;
_V59/*parParsed*/ = _V30/*par*/;
_V130/*funClosure*/;
_V50/*self*/ = this;
_V131/*hasName*/ = false;
_V132/*nameStr*/;
if(_V30/*par*/["id"]){
_V132/*nameStr*/ = _V32/*identifierName*/(_V30/*par*/["id"]);;
_V131/*hasName*/ = true;;
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
if(_V30/*par*/["returnTypename"]){
this["_returnType"] = this["getType"](_V30/*par*/["returnTypename"], _V30/*par*/);;

}else{
this["_returnType"] = this["getType"]("var");;
};
;
if((_V30/*par*/["frame"] && _V30/*par*/["frame"]["name"])){
_V126/*hasFrameInfo*/ = true;;
if((_V30/*par*/["frame"]["type"] == "frame")){
_V127/*runRemote*/ = true;;
_V30/*par*/["promising"] = true;;
if(this["dynamicCode"]){
this["error"](_V30/*par*/, _V12/*errorMsg*/["functionFrameInDynamicCode"]);;
};
;

}else{
if((_V30/*par*/["frame"]["type"] == "exclusive")){
_V128/*runExclusive*/ = true;;
};
};
;
};
;
_V133/*templateTypesAr*/ = [];
if((_V30/*par*/["template"] && _V30/*par*/["template"]["properties"]["length"])){
_V134/*templateTypes*/ = this["getTemplateProperty"](_V30/*par*/["template"], "types", "ObjectExpression");
if(_V134/*templateTypes*/){
_V135/*typeVarInit*/ = this["newResult"]();
for(_V37/*i*/ = 0;(_V37/*i*/ < _V134/*templateTypes*/["properties"]["length"]);++_V37/*i*/){{_V39/*p*/ = _V134/*templateTypes*/["properties"][_V37/*i*/];
_V129/*typename*/ = _V32/*identifierName*/(_V39/*p*/["key"]);;
this["addType"]({"name": _V129/*typename*/,
"dynamic": true}, _V39/*p*/["value"]);;
if(! _V130/*funClosure*/){
_V130/*funClosure*/ = this["newResult"]();;
_V130/*funClosure*/["push"]("(function(){");;
};
;
_V135/*typeVarInit*/["push"]("var ");;
_V135/*typeVarInit*/["push"](this["renderType"](_V129/*typename*/));;
_V135/*typeVarInit*/["push"](" = ");;
_V135/*typeVarInit*/["push"](this["expectTypeVar"](this["parseExpression"](_V39/*p*/["value"])));;
_V135/*typeVarInit*/["push"](";\n");;
_V135/*typeVarInit*/["push"]((("var " + this["getVariableName"](_V129/*typename*/)) + " = "));;
_V135/*typeVarInit*/["push"](this["renderType"](_V129/*typename*/));;
_V135/*typeVarInit*/["push"]("\n;");;
_V135/*typeVarInit*/["push"]((("var " + this["getConstructorName"](_V129/*typename*/)) + " = undefined;\n"));;
_V135/*typeVarInit*/["push"](this["_typeReadyCode"]({"typename": _V129/*typename*/}));;
_V133/*templateTypesAr*/["push"](_V129/*typename*/);;
}};
;
_V130/*funClosure*/["push"](_V135/*typeVarInit*/);;
};
;
};
;
_V136/*extraTypesRes*/ = this["newResult"]();
if(_V130/*funClosure*/){
_V130/*funClosure*/["push"]("var communicator = {fun: undefined};\n");;
_V130/*funClosure*/["push"](_V136/*extraTypesRes*/);;
_V130/*funClosure*/["push"]("eval(\"communicator.fun = ");;
};
;
_V26/*res*/ = this["newResult"]();
_V137/*funRes*/ = this["newResult"]();
_V37/*i*/ = 0;;
_V137/*funRes*/["push"]("function");;
if(_V131/*hasName*/){
this["functionName"] = _V132/*nameStr*/;;
};
;
_V137/*funRes*/["push"]("(");;
if((_V30/*par*/["params"] && _V30/*par*/["params"]["length"])){
_V37/*i*/ = 0;;
_V93/*l*/ = _V30/*par*/["params"]["length"];
for(_V37/*i*/;(_V37/*i*/ < _V93/*l*/);++_V37/*i*/){{if(_V37/*i*/){
_V137/*funRes*/["push"](", ");;
};
;
_V137/*funRes*/["push"](this["getVariableName"](_V32/*identifierName*/(_V30/*par*/["params"][_V37/*i*/]["name"])));;
this["addLocalVariable"]({"name": _V30/*par*/["params"][_V37/*i*/]["name"],
"typename": (_V30/*par*/["params"][_V37/*i*/]["typename"] || "var"),
"parameter": true}, _V30/*par*/["params"][_V37/*i*/]);;
}};
;
};
;
_V137/*funRes*/["push"]("){\n");;
_V138/*classesRes*/ = this["findClasses"](_V30/*par*/["body"]);
this["findVariables"](_V30/*par*/["body"]);;
if(_V128/*runExclusive*/){
_V137/*funRes*/["push"]((("if (!promiseland.profileHas(" + _V14/*stringEncodeStr*/(_V30/*par*/["frame"]["name"]["value"])) + ")){\n"));;
if(_V30/*par*/["promising"]){
_V137/*funRes*/["push"]((("var p = " + this["newPromiseStr"]()) + ";\n"));;
_V137/*funRes*/["push"]("p.reject({id: 14, msg: \"function does not execute in this frame.\"});\n");;
_V137/*funRes*/["push"]("return p;\n");;

}else{
_V137/*funRes*/["push"]("return;\n");;
};
;
_V137/*funRes*/["push"]("};\n");;
};
;
_V139/*addFront*/ = _V46/*getExtraFromPar*/(_V30/*par*/, "addFront");
if(_V139/*addFront*/){
_V137/*funRes*/["push"](_V139/*addFront*/);;
};
;
if(_V30/*par*/["promising"]){
if(_V124/*parGivenPromiseNameStr*/){
this["returnPromise"] = _V124/*parGivenPromiseNameStr*/;;

}else{
this["returnPromise"] = this["getUniqueName"]();;
_V137/*funRes*/["push"](this["declareReturnPromiseCode"]({"type": this["_returnType"],
"name": this["returnPromise"],
"constructorName": this["getConstructorName"](this["getTypeName"](this["_returnType"], _V59/*parParsed*/)),
"parsed": _V59/*parParsed*/,
"errorFun": this["getWarningFun"](_V59/*parParsed*/)}));;
};
;
this["tryCatchFunctionStr"] = this["getUniqueName"]();;
_V137/*funRes*/["push"]((("var " + this["tryCatchFunctionStr"]) + " = function(code){ return function(res){ try{code(res);}catch(e){ "));;
_V137/*funRes*/["push"](this["runBeforeReturnRes"]);;
_V137/*funRes*/["push"]((this["returnPromise"] + ".reject(e); }; }; };\n"));;
this["catchFunctionStr"] = this["getUniqueName"]();;
_V137/*funRes*/["push"]((("var " + this["catchFunctionStr"]) + " = function(e){ "));;
_V137/*funRes*/["push"](this["runBeforeReturnRes"]);;
_V137/*funRes*/["push"]((this["returnPromise"] + ".reject(e); };\n"));;
this["promising"] = true;;
_V26/*res*/["makePromising"]();;
};
;
_V140/*b*/ = _V30/*par*/["body"];
_V141/*extraPar*/ = {};
_V140/*b*/["brackets"] = false;;
_V141/*extraPar*/["preCode"] = this["additionalCodeFrontRes"];;
_V141/*extraPar*/["postCode"] = this["newResult"]();;
_V141/*extraPar*/["postCode"]["push"](this["getReturnCode"]({}));;
_V141/*extraPar*/["postCode"]["push"](this["additionalCodeEndRes"]);;
_V142/*block*/ = this["blockCreator"](_V140/*b*/, _V141/*extraPar*/);
for(_V37/*i*/ in this["localVariables"]){_V143/*varname*/ = _V37/*i*/;
_V74/*type*/ = this["getVariableType"](_V143/*varname*/);
if(this["localVariables"][_V37/*i*/]["parameter"]){
_V137/*funRes*/["push"](this["getProcessParameterCode"]({"name": this["getVariableName"](_V143/*varname*/),
"type": _V74/*type*/,
"errorFun": this["getWarningFun"](_V30/*par*/),
"parsed": _V30/*par*/}));;

}else{
_V137/*funRes*/["push"](this["getDeclareVariableCode"]({"name": this["getVariableName"](_V143/*varname*/),
"type": _V74/*type*/,
"errorFun": this["getWarningFun"](_V30/*par*/),
"parsed": _V30/*par*/}));;
};
;
if(! _V125/*noUntrack*/){
this["addBeforeReturn"](this["getDestroyVariableCode"]({"name": this["getVariableName"](_V143/*varname*/),
"type": _V74/*type*/,
"errorFun": this["getWarningFun"](_V30/*par*/),
"parsed": _V30/*par*/}), this["isTrackedClassConRes"](_V74/*type*/));;
};
;
this["usedVariables"][_V143/*varname*/] = false;;
};
;
if(this["usedVariables"]["arguments"]){
_V137/*funRes*/["push"]((("var " + this["getVariableName"]("arguments")) + " = arguments;\n"));;
this["usedVariables"]["arguments"] = false;;
};
;
_V137/*funRes*/["push"](_V138/*classesRes*/);;
for(_V37/*i*/ = 0;(_V37/*i*/ < this["functionsAr"]["length"]);++_V37/*i*/){{_V137/*funRes*/["push"]((("var " + this["getVariableName"](this["functionsAr"][_V37/*i*/]["name"])) + " = "));;
_V137/*funRes*/["push"](this["functionsAr"][_V37/*i*/]["res"]);;
_V137/*funRes*/["push"](";\n");;
}};
;
if(_V30/*par*/["promising"]){
if(this["usingThis"]){
_V137/*funRes*/["push"]((("var " + this["thisExpression"]) + " = this;\n"));;
};
;
_V137/*funRes*/["push"]((this["tryCatchFunctionStr"] + "(function(){"));;
};
;
_V137/*funRes*/["push"](_V142/*block*/);;
if(_V30/*par*/["promising"]){
_V137/*funRes*/["addPost"]("})();\n");;
_V137/*funRes*/["addPost"](this["returnReturnPromiseCode"]({"type": this["_returnType"],
"name": this["returnPromise"],
"parsed": _V59/*parParsed*/,
"errorFun": this["getWarningFun"](_V59/*parParsed*/)}));;
_V137/*funRes*/["addPost"]("}");;

}else{
_V137/*funRes*/["push"]("}");;
};
;
_V144/*completeFun*/ = this["makeCompleteStatement"](_V137/*funRes*/);
if((this["promising"] && _V30/*par*/["returnTypename"])){
_V145/*returnTypePromiseCheck*/ = this["newResult"]();
_V145/*returnTypePromiseCheck*/["push"]("(function(t){");;
_V145/*returnTypePromiseCheck*/["push"](this["promisingReturnTypeCheck"]({"type": this["_returnType"],
"errorFun": this["getWarningFun"](_V59/*parParsed*/),
"parsed": _V59/*parParsed*/}));;
_V145/*returnTypePromiseCheck*/["push"]("return t;})(");;
_V145/*returnTypePromiseCheck*/["push"](_V144/*completeFun*/);;
_V145/*returnTypePromiseCheck*/["push"](")");;
_V144/*completeFun*/ = _V145/*returnTypePromiseCheck*/;;
};
;
if(_V130/*funClosure*/){
_V146/*handleExtras*/ = (function(_V147/*dt*/){
var _V37/*i*/;
;
if(_V147/*dt*/["extraTypes"]){
_V37/*i*/ = 0;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V147/*dt*/["extraTypes"]["length"]);++_V37/*i*/){{_V136/*extraTypesRes*/["push"](_V147/*dt*/["extraTypes"][_V37/*i*/]["res"]);;
_V146/*handleExtras*/(_V147/*dt*/["extraTypes"][_V37/*i*/]["type"]);;
}};
;
};
;
;
});
for(_V37/*i*/ = 0;(_V37/*i*/ < _V133/*templateTypesAr*/["length"]);++_V37/*i*/){{_V147/*dt*/ = this["getType"](_V133/*templateTypesAr*/[_V37/*i*/], _V30/*par*/);
_V146/*handleExtras*/(_V147/*dt*/);;
}};
;
_V130/*funClosure*/["push"](_V144/*completeFun*/, _V30/*par*/, {"stringEncode": true});;
_V130/*funClosure*/["push"](";\"); return communicator.fun; })()");;
_V144/*completeFun*/ = this["makeCompleteStatement"](_V130/*funClosure*/);;
};
;
_V148/*thisFunType*/ = this["getFunctionType"](_V30/*par*/);
_V149/*uniqueNameStr*/;
if(_V127/*runRemote*/){
_V150/*remoteClosure*/ = this["newResult"]();
_V149/*uniqueNameStr*/ = this["getUniqueName"]();;
_V150/*remoteClosure*/["push"]("(function(f){\n");;
_V150/*remoteClosure*/["push"](("promiseland.registerRemote(" + _V14/*stringEncodeStr*/(_V30/*par*/["frame"]["name"]["value"])));;
_V150/*remoteClosure*/["push"](((((", " + _V14/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + _V14/*stringEncodeStr*/(_V149/*uniqueNameStr*/)) + ", f, "));;
_V150/*remoteClosure*/["push"](this["renderType"](_V148/*thisFunType*/, _V59/*parParsed*/));;
_V150/*remoteClosure*/["push"](");\n");;
_V150/*remoteClosure*/["push"]((("if (promiseland.profileHas(" + _V14/*stringEncodeStr*/(_V30/*par*/["frame"]["name"]["value"])) + ")){\n"));;
_V150/*remoteClosure*/["push"]("return f;\n");;
_V150/*remoteClosure*/["push"]("}else{\n");;
_V150/*remoteClosure*/["push"]("return function(){\n");;
_V150/*remoteClosure*/["push"]((((("return promiseland.remoteExec(" + _V14/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + _V14/*stringEncodeStr*/(_V149/*uniqueNameStr*/)) + ", arguments);\n"));;
_V150/*remoteClosure*/["push"]("}\n");;
_V150/*remoteClosure*/["push"]("};\n");;
_V150/*remoteClosure*/["push"]("})(");;
_V150/*remoteClosure*/["push"](_V144/*completeFun*/);;
_V150/*remoteClosure*/["push"](")");;
_V26/*res*/["push"](_V150/*remoteClosure*/);;

}else{
_V26/*res*/["push"](_V144/*completeFun*/);;
};
;
_V26/*res*/["setType"](_V148/*thisFunType*/);;
this["unstack"]("isClassObject");;
this["unstack"]("inheritedAvailable");;
this["unstack"]("thisType");;
_V151/*finalResult*/ = this["newResult"]();
_V151/*finalResult*/["push"](this["makeCompleteStatement"](_V26/*res*/));;
_V151/*finalResult*/["setType"](_V148/*thisFunType*/);;
return _V151/*finalResult*/;;
;
});;
this["expThisExpression"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
if(! this["promising"]){
_V26/*res*/["push"]("this");;

}else{
if(! this["usingThis"]){
this["usingThis"] = true;;
this["thisExpression"] = this["getUniqueName"]("this");;
};
;
_V26/*res*/["push"](this["thisExpression"]);;
};
;
_V26/*res*/["setType"](this["thisType"]);;
return _V26/*res*/;;
;
});;
this["expThrowStatement"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"]("throw ");;
_V26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V30/*par*/["argument"])));;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["identifyClass"] = (function(_V30/*par*/){
var _V54/*r*/;
var _V31/*name*/;
var _V152/*keywords*/;
var _V37/*i*/;
;
_V54/*r*/ = {};
_V31/*name*/;
if(_V30/*par*/["name"]){
_V31/*name*/ = _V32/*identifierName*/(_V30/*par*/["name"]);;
};
_V54/*r*/["hasName"] = (_V31/*name*/ && _V31/*name*/["length"]);;
_V152/*keywords*/ = _V30/*par*/["keywords"];
if((_V152/*keywords*/ && _V152/*keywords*/["length"])){
_V37/*i*/;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V152/*keywords*/["length"]);++_V37/*i*/){{switch (_V152/*keywords*/[_V37/*i*/]["type"]){
case "type":
_V54/*r*/["isTyped"] = true;;
break;;
case "extends":
_V54/*r*/["extendsClause"] = _V152/*keywords*/[_V37/*i*/];;
break;;
case "sync":
_V54/*r*/["syncClause"] = _V152/*keywords*/[_V37/*i*/];;
break;;
case "track":
_V54/*r*/["trackClause"] = _V152/*keywords*/[_V37/*i*/];;
break;;
}
;
;
}};
;
};
;
return _V54/*r*/;;
;
});;
this["findClasses"] = (function(_V30/*par*/, _V26/*res*/){
var _V153/*ci*/;
var _V31/*name*/;
var _V98/*extraRes*/;
var _V37/*i*/;
;
if(! _V26/*res*/){
_V26/*res*/ = this["newResult"]();;
};
;
if((! _V30/*par*/ || (typeof _V30/*par*/ == "string"))){
return _V26/*res*/;;
};
;
if(_V40/*checkIsFunction*/(_V30/*par*/)){
return _V26/*res*/;;
};
;
if((_V30/*par*/["type"] == "Class")){
_V153/*ci*/ = this["identifyClass"](_V30/*par*/);
if(_V153/*ci*/["isTyped"]){
if(_V30/*par*/["body"]["literal"]){
if(_V153/*ci*/["hasName"]){
_V31/*name*/ = _V32/*identifierName*/(_V30/*par*/["name"]);
_V98/*extraRes*/ = this["newResult"]();
this["addType"]({"name": _V31/*name*/,
"extraRes": _V98/*extraRes*/}, _V30/*par*/);;
_V26/*res*/["push"]("var ");;
_V26/*res*/["push"](this["renderType"](_V31/*name*/));;
_V26/*res*/["push"](" = classSystem._createProvisionalClass();\n");;
this["common"]["useClassSystem"] = true;;
_V26/*res*/["push"]((this["getVariableName"](_V31/*name*/) + " = "));;
_V26/*res*/["push"](this["renderType"](_V31/*name*/));;
_V26/*res*/["push"](";\n");;
_V26/*res*/["push"]((("var " + this["getConstructorName"](_V31/*name*/)) + " = undefined;"));;
_V26/*res*/["push"](this["_typeReadyCode"]({"typename": _V31/*name*/}));;
_V26/*res*/["push"](_V98/*extraRes*/);;
};
;
};
;
};
;
return _V26/*res*/;;
};
;
_V37/*i*/;
for(_V37/*i*/ in _V30/*par*/){this["findClasses"](_V30/*par*/[_V37/*i*/], _V26/*res*/);;
};
;
return _V26/*res*/;;
;
});;
this["_typeReadyCode"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
this["common"]["useClassSystem"] = true;;
_V26/*res*/["push"]("classSystem.readyPromise(");;
_V26/*res*/["push"](this["renderType"](_V30/*par*/["typename"]));;
_V26/*res*/["push"](").then(function(parType){");;
_V26/*res*/["push"](this["renderType"](_V30/*par*/["typename"]));;
_V26/*res*/["push"](" = parType;");;
if(! _V30/*par*/["noConstructor"]){
_V26/*res*/["push"]((this["getConstructorName"](_V30/*par*/["typename"]) + " = classSystem.getTypeConstructor("));;
_V26/*res*/["push"](this["renderType"](_V30/*par*/["typename"]));;
_V26/*res*/["push"](");");;
};
;
_V26/*res*/["push"]("});");;
return _V26/*res*/;;
;
});;
this["findVariables"] = (function(_V30/*par*/){
var _V50/*self*/;
var _V153/*ci*/;
var _V37/*i*/;
;
_V50/*self*/ = this;
if((! _V30/*par*/ || (typeof _V30/*par*/ == "string"))){
return;;
};
;
if((_V30/*par*/["type"] == "VariableDeclaration")){
this["addLocalVariable"]({"name": _V32/*identifierName*/(_V30/*par*/["id"]),
"typename": _V32/*identifierName*/(_V30/*par*/["typename"])}, _V30/*par*/);;

}else{
if((_V30/*par*/["type"] == "Class")){
_V153/*ci*/ = _V50/*self*/["identifyClass"](_V30/*par*/);
if(_V153/*ci*/["hasName"]){
this["addLocalVariable"]({"name": _V32/*identifierName*/(_V30/*par*/["name"]),
"typename": "var"}, _V30/*par*/);;
};
;
return;;

}else{
if(_V40/*checkIsFunction*/(_V30/*par*/)){
if((_V30/*par*/["id"] && (_V30/*par*/["type"] != "MemberFunction"))){
this["addLocalVariable"]({"name": _V32/*identifierName*/(_V30/*par*/["id"]),
"isFunction": true}, _V30/*par*/);;
};
;
return;;
};
};
};
;
_V37/*i*/;
for(_V37/*i*/ in _V30/*par*/){if((_V37/*i*/ == "_extrainfo")){
continue;;
};
;
this["findVariables"](_V30/*par*/[_V37/*i*/]);;
};
;
;
});;
this["expClassStatement"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V154/*classRes*/;
var _V153/*ci*/;
var _V131/*hasName*/;
var _V31/*name*/;
var _V106/*isTyped*/;
var _V155/*extendsClause*/;
var _V156/*syncClause*/;
var _V157/*trackClause*/;
var _V158/*resultType*/;
var _V159/*literal*/;
var _V74/*type*/;
var _V160/*inheritedObjName*/;
var _V161/*lit*/;
var _V93/*l*/;
var _V162/*prop*/;
var _V53/*tempRes*/;
var _V163/*baseClasses*/;
var _V37/*i*/;
var _V164/*used*/;
var _V165/*u*/;
;
_V26/*res*/ = this["newResult"]();
_V154/*classRes*/ = this["newResult"]();
_V153/*ci*/ = this["identifyClass"](_V30/*par*/);
_V131/*hasName*/ = _V153/*ci*/["hasName"];
_V31/*name*/;
if(_V131/*hasName*/){
_V31/*name*/ = _V32/*identifierName*/(_V30/*par*/["name"]);;
};
;
_V106/*isTyped*/ = _V153/*ci*/["isTyped"];
_V155/*extendsClause*/ = _V30/*par*/["extendsClause"];
_V156/*syncClause*/ = _V153/*ci*/["syncClause"];
_V157/*trackClause*/ = _V153/*ci*/["trackClause"];
_V158/*resultType*/ = this["getType"]("var");
this["stack"]("inheritedSystem");;
this["inheritedSystem"] = this["newInherited"]();;
if(_V106/*isTyped*/){
this["common"]["useClassSystem"] = true;;
_V154/*classRes*/["push"]("classSystem.createClass(");;
if(_V30/*par*/["body"]["literal"]){
if(_V131/*hasName*/){
this["inheritedSystem"]["type"] = this["getType"](_V31/*name*/, _V30/*par*/);;
};
;
this["stack"]("isClassObject");;
this["isClassObject"] = true;;
_V159/*literal*/ = this["createClassLiteral"](_V30/*par*/["body"]["literal"], _V153/*ci*/, _V31/*name*/);
_V154/*classRes*/["push"](this["stringifyClassLiteral"](_V159/*literal*/));;
_V154/*classRes*/["push"](", ");;
_V154/*classRes*/["push"](this["createClassDefaults"](_V30/*par*/["body"]["literal"]));;
this["unstack"]("isClassObject");;
if(_V131/*hasName*/){
_V74/*type*/ = this["createType"]({"name": _V31/*name*/,
"literal": _V159/*literal*/,
"par": _V30/*par*/});
};
;

}else{
_V154/*classRes*/["push"]("{}, ");;
_V154/*classRes*/["push"](this["parseExpression"](_V30/*par*/["body"]["expression"]));;
};
;
_V154/*classRes*/["push"](")");;

}else{
_V160/*inheritedObjName*/ = this["getUniqueName"]("inherited");
_V154/*classRes*/["push"]("(function(){");;
if(_V30/*par*/["body"]["literal"]){
this["stack"]("preventreturn");;
this["preventreturn"] = true;;
_V161/*lit*/ = _V30/*par*/["body"]["literal"];
_V93/*l*/ = ((_V161/*lit*/["properties"] && _V161/*lit*/["properties"]["length"]) || 0);
for(_V37/*i*/;(_V37/*i*/ < _V93/*l*/);++_V37/*i*/){{_V162/*prop*/ = _V161/*lit*/["properties"][_V37/*i*/];
if((_V162/*prop*/["kind"] == "block")){
_V154/*classRes*/["push"](this["parseExpression"](_V162/*prop*/));;
};
;
}};
;
this["unstack"]("preventreturn");;
};
;
_V154/*classRes*/["push"]((("var " + _V160/*inheritedObjName*/) + " = {};\n"));;
_V53/*tempRes*/ = this["newResult"]();
_V53/*tempRes*/["push"]("var res = promiseland.createClass(");;
if(_V30/*par*/["body"]["literal"]){
_V53/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](_V30/*par*/["body"]["literal"])));;

}else{
_V53/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](_V30/*par*/["body"]["expression"])));;
};
;
_V53/*tempRes*/["push"](", [");;
_V163/*baseClasses*/ = ((_V155/*extendsClause*/ && _V155/*extendsClause*/["baseClasses"]) || []);
_V37/*i*/ = 0;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V163/*baseClasses*/["length"]);++_V37/*i*/){{if(_V37/*i*/){
_V53/*tempRes*/["push"](", ");;
};
;
_V53/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](_V163/*baseClasses*/[_V37/*i*/])));;
}};
;
_V53/*tempRes*/["push"]("], ");;
_V53/*tempRes*/["push"](_V160/*inheritedObjName*/);;
_V53/*tempRes*/["push"](");");;
_V154/*classRes*/["push"](_V53/*tempRes*/);;
_V154/*classRes*/["push"]("\n");;
_V164/*used*/ = this["inheritedSystem"]["used"];
_V165/*u*/;
for(_V165/*u*/ in _V164/*used*/){_V154/*classRes*/["push"]((((((("var " + _V164/*used*/[_V165/*u*/]) + " = ") + _V160/*inheritedObjName*/) + "[") + _V14/*stringEncodeStr*/(_V165/*u*/)) + "];\n"));;
};
;
_V154/*classRes*/["push"]("return res; })()");;
};
;
if(_V131/*hasName*/){
if(_V106/*isTyped*/){
_V26/*res*/["addPre"](this["_resolveClassCode"]({"name": _V30/*par*/["name"],
"classRes": _V154/*classRes*/,
"parsed": _V30/*par*/}));;

}else{
_V26/*res*/["addPre"]((this["getVariableName"](_V30/*par*/["name"]) + " = "));;
_V26/*res*/["addPre"](_V154/*classRes*/);;
_V26/*res*/["addPre"](";");;
};
;
_V26/*res*/["push"](this["getVariableName"](_V30/*par*/["name"]));;

}else{
_V26/*res*/["push"](_V154/*classRes*/);;
};
;
_V26/*res*/["setType"](_V158/*resultType*/);;
this["unstack"]("inheritedSystem");;
return _V26/*res*/;;
;
});;
this["_resolveClassCode"] = (function(_V30/*par*/){
var _V73/*parsed*/;
var _V26/*res*/;
;
_V73/*parsed*/ = _V30/*par*/["parsed"];
_V26/*res*/ = this["newResult"]();
this["common"]["useClassSystem"] = true;;
_V26/*res*/["push"]("classSystem._resolveProvisional(", _V73/*parsed*/);;
_V26/*res*/["push"](this["renderType"](_V30/*par*/["name"], _V73/*parsed*/), _V73/*parsed*/);;
_V26/*res*/["push"](", ", _V73/*parsed*/);;
_V26/*res*/["push"](_V30/*par*/["classRes"], _V73/*parsed*/);;
_V26/*res*/["push"](");", _V73/*parsed*/);;
return _V26/*res*/;;
;
});;
this["createClassLiteral"] = (function(_V30/*par*/, _V153/*ci*/, _V79/*parName*/){
var _V166/*ret*/;
var _V37/*i*/;
var _V93/*l*/;
var _V162/*prop*/;
var _V167/*defaultValue*/;
var _V74/*type*/;
var _V31/*name*/;
;
_V166/*ret*/ = {"members": [],
"extends": [],
"hasFreePart": true,
"parsed": _V30/*par*/,
"track": (_V153/*ci*/["trackClause"] ? true : false),
"sync": _V153/*ci*/["syncClause"],
"name": _V79/*parName*/,
"hashStr": this["getModuleHashStr"]()};
_V37/*i*/ = 0;
_V93/*l*/ = ((_V30/*par*/["properties"] && _V30/*par*/["properties"]["length"]) || 0);
for(_V37/*i*/;(_V37/*i*/ < _V93/*l*/);++_V37/*i*/){{_V162/*prop*/ = _V30/*par*/["properties"][_V37/*i*/];
_V167/*defaultValue*/;
_V74/*type*/;
if((_V162/*prop*/["kind"] == "init")){
_V74/*type*/ = (_V162/*prop*/["typename"] ? this["getType"](_V162/*prop*/["typename"], _V30/*par*/) : _V56/*undefined*/);;
if(_V162/*prop*/["value"]){
if(_V74/*type*/){
_V167/*defaultValue*/ = this["parseAsType"](_V74/*type*/, _V162/*prop*/["value"]);;

}else{
_V167/*defaultValue*/ = this["parseExpression"](_V162/*prop*/["value"]);;
_V74/*type*/ = _V167/*defaultValue*/["getType"]();;
};
;
};
;
if(! _V74/*type*/){
_V74/*type*/ = this["getType"]("var");;
};
;
_V166/*ret*/["members"]["push"]({"name": _V32/*identifierName*/(_V162/*prop*/["key"]),
"type": _V74/*type*/,
"defaultValue": _V167/*defaultValue*/});;

}else{
if((_V162/*prop*/["kind"] == "function")){
_V31/*name*/ = _V32/*identifierName*/(_V162/*prop*/["id"]);
_V162/*prop*/["id"] = _V56/*undefined*/;;
_V167/*defaultValue*/ = this["parseExpression"](_V162/*prop*/["value"]);;
_V74/*type*/ = _V167/*defaultValue*/["getType"]();;
_V166/*ret*/["members"]["push"]({"name": _V31/*name*/,
"type": _V74/*type*/,
"defaultValue": _V167/*defaultValue*/});;

}else{
this["error"](_V162/*prop*/, _V12/*errorMsg*/["unknownPropertyAssignmentType"]);;
};
};
;
}};
;
return _V166/*ret*/;;
;
});;
this["stringifyClassLiteral"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V37/*i*/;
var _V93/*l*/;
var _V38/*m*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"]("{");;
_V26/*res*/["push"]("members: [");;
_V37/*i*/ = 0;
_V93/*l*/ = _V30/*par*/["members"]["length"];
for(_V37/*i*/;(_V37/*i*/ < _V93/*l*/);++_V37/*i*/){{_V38/*m*/ = _V30/*par*/["members"][_V37/*i*/];
if(_V37/*i*/){
_V26/*res*/["push"](",");;
};
;
_V26/*res*/["push"]("{");;
_V26/*res*/["push"](("\"name\":" + _V14/*stringEncodeStr*/(_V38/*m*/["name"])));;
_V26/*res*/["push"](",\"type\":");;
_V26/*res*/["push"](this["renderType"](_V38/*m*/["type"], _V30/*par*/["parsed"]));;
_V26/*res*/["push"]("}");;
}};
;
_V26/*res*/["push"]("]");;
_V26/*res*/["push"](", \"extends\": []");;
_V26/*res*/["push"](", \"hasFreePart\": true");;
if(_V30/*par*/["track"]){
_V26/*res*/["push"](", \"track\": true");;
};
;
if(_V30/*par*/["sync"]){
_V26/*res*/["push"](", \"sync\": ");;
_V26/*res*/["push"](_V168/*JSON*/["stringify"](_V30/*par*/["sync"]));;
_V26/*res*/["push"]((", \"hashStr\": " + _V14/*stringEncodeStr*/(_V30/*par*/["hashStr"])));;
_V26/*res*/["push"]((", \"name\": " + _V14/*stringEncodeStr*/(_V30/*par*/["name"])));;
};
;
_V26/*res*/["push"]("}");;
return _V26/*res*/;;
;
});;
this["createClassDefaults"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V37/*i*/;
var _V93/*l*/;
var _V169/*comma*/;
var _V162/*prop*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"]("{");;
_V37/*i*/ = 0;
_V93/*l*/ = ((_V30/*par*/["properties"] && _V30/*par*/["properties"]["length"]) || 0);
_V169/*comma*/;
for(_V37/*i*/;(_V37/*i*/ < _V93/*l*/);++_V37/*i*/){{_V162/*prop*/ = _V30/*par*/["properties"][_V37/*i*/];
if((_V162/*prop*/["kind"] == "init")){
if(_V169/*comma*/){
_V26/*res*/["push"](", ");;
};
;
_V26/*res*/["push"]((_V14/*stringEncodeStr*/(_V32/*identifierName*/(_V162/*prop*/["key"])) + ": "));;
if(_V162/*prop*/["value"]){
_V26/*res*/["push"](this["parseExpression"](_V162/*prop*/["value"]));;

}else{
_V26/*res*/["push"]("undefined");;
};
;
_V169/*comma*/ = true;;
};
;
}};
;
_V26/*res*/["push"]("}");;
return _V26/*res*/;;
;
});;
this["addType"] = (function(_V30/*par*/, _V59/*parParsed*/){
var _V31/*name*/;
var _V74/*type*/;
;
_V31/*name*/ = _V32/*identifierName*/(_V30/*par*/["name"]);
if(this["types"]["hasOwnProperty"][_V31/*name*/]){
this["error"](_V59/*parParsed*/, _V12/*errorMsg*/["typeExists"]);;
};
;
_V74/*type*/;
if(_V30/*par*/["dynamic"]){
_V74/*type*/ = {"isDynamic": true,
"extraRes": _V30/*par*/["extraRes"]};;

}else{
_V74/*type*/ = this["getProvisionalType"](_V59/*parParsed*/);;
};
;
this["types"][_V31/*name*/] = {"name": _V31/*name*/,
"type": _V74/*type*/,
"isDynamic": _V74/*type*/["isDynamic"],
"extraRes": _V30/*par*/["extraRes"]};;
;
});;
this["getTypeName"] = (function(_V76/*parType*/, _V59/*parParsed*/){
var _V31/*name*/;
;
_V31/*name*/;
for(_V31/*name*/ in this["types"]){if((this["types"][_V31/*name*/]["type"] === _V76/*parType*/)){
return this["types"][_V31/*name*/]["name"];;
};
;
};
;
this["error"](_V59/*parParsed*/, _V12/*errorMsg*/["internalTypeHasNoName"]);;
;
});;
this["createType"] = (function(_V30/*par*/){
var _V31/*name*/;
var _V65/*entry*/;
var _V74/*type*/;
var _V170/*provisional*/;
;
_V31/*name*/ = _V32/*identifierName*/(_V30/*par*/["name"]);
_V65/*entry*/ = this["_getTypeEntry"](_V30/*par*/["name"]);
if(_V65/*entry*/["type"]["isDynamic"]){
this["error"](_V30/*par*/["par"], _V12/*errorMsg*/["dynamicTypeCantBeDefined"]);;
};
;
if(_V65/*entry*/["isDefined"]){
this["error"](_V30/*par*/["par"], _V12/*errorMsg*/["typeRedefinition"]);;
};
;
_V74/*type*/ = _V18/*classSystem*/["createClass"](_V30/*par*/["literal"], {});
_V170/*provisional*/ = _V65/*entry*/["type"];
_V65/*entry*/["type"] = _V74/*type*/;;
try
{this["resolveProvisional"](_V170/*provisional*/, _V74/*type*/);;
}catch(_V171/*e*/){this["error"](_V30/*par*/["par"], _V12/*errorMsg*/["typeRedefinition"]);;
};
;
_V65/*entry*/["isDefined"] = true;;
;
});;
this["_getTypeEntry"] = (function(_V79/*parName*/, _V59/*parParsed*/, _V30/*par*/){
var _V31/*name*/;
var _V172/*throwError*/;
var _V129/*typename*/;
var _V173/*typeEntry*/;
var _V98/*extraRes*/;
;
_V31/*name*/ = _V32/*identifierName*/(_V79/*parName*/);
_V172/*throwError*/ = true;
if((_V30/*par*/ && _V30/*par*/["dontThrow"])){
_V172/*throwError*/ = false;;
};
;
if(this["types"]["hasOwnProperty"](_V31/*name*/)){
return this["types"][_V31/*name*/];;
};
;
if((_V31/*name*/[(_V31/*name*/["length"] - 1)] == "*")){
_V129/*typename*/ = _V31/*name*/["substr"](0, (_V31/*name*/["length"] - 1));
_V173/*typeEntry*/ = this["_getTypeEntry"](_V129/*typename*/, _V59/*parParsed*/, _V30/*par*/);
if(_V173/*typeEntry*/){
_V98/*extraRes*/ = _V173/*typeEntry*/["extraRes"];
this["types"][_V31/*name*/] = {"name": _V31/*name*/,
"type": _V18/*classSystem*/["_createPromiseOfClass"](_V173/*typeEntry*/["type"]),
"isDynamic": false,
"extraRes": _V98/*extraRes*/};;
_V98/*extraRes*/["push"]("var ");;
_V98/*extraRes*/["push"](this["renderType"](_V31/*name*/));;
this["common"]["useClassSystem"] = true;;
_V98/*extraRes*/["push"](" = classSystem._createPromiseOfClass(");;
_V98/*extraRes*/["push"](this["renderType"](_V129/*typename*/));;
_V98/*extraRes*/["push"](");\nvar ");;
_V98/*extraRes*/["push"]((this["getVariableName"](_V31/*name*/) + " = "));;
_V98/*extraRes*/["push"](this["renderType"](_V31/*name*/));;
_V98/*extraRes*/["push"](";\n");;
_V98/*extraRes*/["push"]((("var " + this["getConstructorName"](_V31/*name*/)) + " = undefined;"));;
_V98/*extraRes*/["push"](this["_typeReadyCode"]({"typename": _V31/*name*/,
"noConstructor": false}));;
return this["types"][_V31/*name*/];;
};
;
};
;
if(! _V172/*throwError*/){
return;;
};
;
this["error"](_V59/*parParsed*/, _V12/*errorMsg*/["typeUndeclared"], {"name": _V31/*name*/});;
;
});;
this["getType"] = (function(_V79/*parName*/, _V59/*parParsed*/, _V30/*par*/){
var _V65/*entry*/;
;
_V65/*entry*/ = this["_getTypeEntry"](_V79/*parName*/, _V59/*parParsed*/, _V30/*par*/);
if(_V65/*entry*/){
return _V65/*entry*/["type"];;
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
this["getConstructorName"] = (function(_V79/*parName*/){
var _V31/*name*/;
var _V35/*t*/;
;
_V31/*name*/ = _V32/*identifierName*/(_V79/*parName*/);
if(this["types"]["hasOwnProperty"](_V31/*name*/)){
_V35/*t*/ = this["types"][_V31/*name*/];
if(! _V35/*t*/["constructorName"]){
_V35/*t*/["constructorName"] = this["getUniqueName"]((_V31/*name*/ + "-constructor"));;
if(! _V35/*t*/["isDynamic"]){
this["localClassConstructors"][_V31/*name*/] = _V35/*t*/["constructorName"];;
};
;
};
;
return _V35/*t*/["constructorName"];;
};
;
this["error"](_V79/*parName*/, _V12/*errorMsg*/["typeUndeclared"], {"name": _V31/*name*/});;
;
});;
this["expTryStatement"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V174/*catchPromise*/;
var _V175/*continuePromise*/;
var _V140/*b*/;
var _V141/*extraPar*/;
var _V176/*temporaryPs*/;
;
_V26/*res*/ = this["newResult"]();
_V174/*catchPromise*/;
_V175/*continuePromise*/;
if(_V42/*checkPromising*/(_V30/*par*/)){
this["stack"]("tryCatchFunctionStr");;
this["stack"]("catchFunctionStr");;
_V175/*continuePromise*/ = this["getUniqueName"]();;
_V26/*res*/["addPre"]((((("var " + _V175/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
_V174/*catchPromise*/ = this["getUniqueName"]();;
_V26/*res*/["addPre"]((((("var " + _V174/*catchPromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
this["tryCatchFunctionStr"] = (this["getUniqueName"]() + "/*try catch*/");;
_V26/*res*/["addPre"]((((("var " + this["tryCatchFunctionStr"]) + " = function(code){ return function(res){ try{code(res);}catch(e){ ") + _V174/*catchPromise*/) + ".resolve(e); }; }; };\n"));;
this["catchFunctionStr"] = this["getUniqueName"]();;
_V26/*res*/["addPre"]((((("var " + this["catchFunctionStr"]) + " = function(e){ ") + _V174/*catchPromise*/) + ".resolve(e); };\n"));;
_V26/*res*/["push"]((this["tryCatchFunctionStr"] + "(function()"));;

}else{
_V26/*res*/["push"]("try\n");;
};
;
_V140/*b*/ = _V30/*par*/["block"];
_V141/*extraPar*/ = {};
_V140/*b*/["brackets"] = true;;
if(_V42/*checkPromising*/(_V30/*par*/)){
_V141/*extraPar*/["postCode"] = this["newResult"]((_V175/*continuePromise*/ + ".resolve()"));;
};
;
_V26/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](_V140/*b*/, _V141/*extraPar*/)));;
if(_V42/*checkPromising*/(_V30/*par*/)){
this["unstack"]("tryCatchFunctionStr");;
this["unstack"]("catchFunctionStr");;
_V26/*res*/["push"](")();\n");;
_V26/*res*/["push"]((((_V174/*catchPromise*/ + ".then(") + this["tryCatchFunctionStr"]) + "(function("));;

}else{
_V26/*res*/["push"]("catch(");;
};
;
_V176/*temporaryPs*/;
if(_V30/*par*/["handler"]["param"]){
_V26/*res*/["push"](this["getVariableName"](_V32/*identifierName*/(_V30/*par*/["handler"]["param"])));;
_V176/*temporaryPs*/ = this["addLocalVariableTemporary"]({"name": _V32/*identifierName*/(_V30/*par*/["handler"]["param"]),
"typename": "var",
"parameter": true}, _V30/*par*/["handler"]);;
};
;
_V26/*res*/["push"](")");;
_V140/*b*/ = _V30/*par*/["handler"]["body"];;
_V141/*extraPar*/ = {};;
_V140/*b*/["brackets"] = true;;
if(_V42/*checkPromising*/(_V30/*par*/)){
_V141/*extraPar*/["postCode"] = this["newResult"]((_V175/*continuePromise*/ + ".resolve();"));;
};
;
_V26/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](_V140/*b*/, _V141/*extraPar*/)));;
if(_V42/*checkPromising*/(_V30/*par*/)){
_V26/*res*/["push"]("));\n");;
_V26/*res*/["push"](_V175/*continuePromise*/);;
_V26/*res*/["push"](((".then(" + this["tryCatchFunctionStr"]) + "(function(){"));;
_V26/*res*/["addPost"]((("}), " + this["catchFunctionStr"]) + ")"));;
};
;
if(_V30/*par*/["finally"]){
_V26/*res*/["push"]("finally");;
_V140/*b*/ = _V30/*par*/["finally"];;
_V140/*b*/["brackers"] = true;;
_V26/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](_V140/*b*/)));;
};
;
if(_V176/*temporaryPs*/){
_V176/*temporaryPs*/["resolve"]();;
};
;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["getModuleHashStr"] = (function(){
;
return (this["hashStr"] || "unknownhash");;
;
});;
this["makeStatement"] = (function(_V30/*par*/){
var _V177/*statementRes*/;
;
_V177/*statementRes*/ = this["newResult"]();
_V177/*statementRes*/["setStatement"]();;
_V177/*statementRes*/["push"](_V30/*par*/);;
_V177/*statementRes*/["push"](";\n");;
return _V177/*statementRes*/;;
;
});;
this["expBlockStatement"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V30/*par*/["brackets"] = true;;
_V26/*res*/["pushType"](this["blockCreator"](_V30/*par*/));;
return _V26/*res*/;;
;
});;
this["blockCreator"] = (function(_V30/*par*/, _V178/*parExtra*/){
var _V26/*res*/;
var _V179/*blockRes*/;
var _V180/*sAr*/;
var _V37/*i*/;
var _V93/*l*/;
;
if(! _V178/*parExtra*/){
_V178/*parExtra*/ = {};;
};
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["setType"](_V19/*statementType*/);;
if(_V30/*par*/["brackets"]){
_V26/*res*/["push"]("{");;
};
;
_V179/*blockRes*/ = this["newResult"]();
_V180/*sAr*/ = [];
if((_V30/*par*/ instanceof _V181/*Array*/)){
_V180/*sAr*/ = _V30/*par*/;;

}else{
if((_V30/*par*/["type"] == "BlockStatement")){
_V180/*sAr*/ = _V30/*par*/["body"];;

}else{
_V182/*console*/["log"]("here <------------------------");;
_V180/*sAr*/["push"](this["parseExpression"](_V30/*par*/));;
};
;
};
;
if(_V178/*parExtra*/["preCode"]){
_V179/*blockRes*/["push"](this["makeStatement"](_V178/*parExtra*/["preCode"]));;
};
;
_V37/*i*/ = 0;
_V93/*l*/ = _V180/*sAr*/["length"];
for(_V37/*i*/;(_V37/*i*/ < _V93/*l*/);++_V37/*i*/){{_V179/*blockRes*/["push"](this["makeStatement"](this["parseExpression"](_V180/*sAr*/[_V37/*i*/])));;
}};
;
if(_V178/*parExtra*/["postCode"]){
_V179/*blockRes*/["push"](this["makeStatement"](_V178/*parExtra*/["postCode"]));;
};
;
_V26/*res*/["push"](this["makeCompleteStatement"](_V179/*blockRes*/));;
if(_V30/*par*/["brackets"]){
_V26/*res*/["push"]("}");;
};
;
return _V26/*res*/;;
;
});;
this["parseExpression"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["_parseExpression"](_V30/*par*/);
if(! _V26/*res*/["getType"]()){
this["error"](_V30/*par*/, _V12/*errorMsg*/["internalMissingResultType"]);;
};
;
_V26/*res*/["setParsed"](_V30/*par*/);;
return _V26/*res*/;;
;
});;
this["_parseExpression"] = (function(_V24/*value*/){
var _V26/*res*/;
;
_V26/*res*/;
switch (_V24/*value*/["type"]){
case "ArrayExpression":
return this["expArrayExpression"](_V24/*value*/);;
case "AssignmentExpression":
return this["expAssignmentExpression"](_V24/*value*/);;
case "BinaryExpression":
return this["expBinaryExpression"](_V24/*value*/);;
case "BlockStatement":
return this["expBlockStatement"](_V24/*value*/);;
case "BreakStatement":
return this["expBreakStatement"](_V24/*value*/);;
case "CallExpression":
return this["expCallExpression"](_V24/*value*/);;
case "Class":
return this["expClassStatement"](_V24/*value*/);;
case "ClassObjectExpression":
return this["expClassObjectExpression"](_V24/*value*/);;
case "ConditionalExpression":
return this["conditionalExpression"](_V24/*value*/);;
case "ConnectExpression":
return this["connectExpression"](_V24/*value*/);;
case "ContinueStatement":
return this["expContinueStatement"](_V24/*value*/);;
case "DebuggerStatement":
return this["expDebuggerStatement"](_V24/*value*/);;
case "EmptyStatement":
_V26/*res*/ = this["newResult"]();;
_V26/*res*/["setType"]("var");;
return _V26/*res*/;;
case "ExpressionStatement":
return this["expExpressionStatement"](_V24/*value*/);;
case "ForInStatement":
return this["expForInStatement"](_V24/*value*/);;
case "ForStatement":
return this["expForStatement"](_V24/*value*/);;
case "FunctionExpression":
return this["expFunctionExpression"](_V24/*value*/);;
case "FunctionDeclaration":
return this["expFunctionDeclaration"](_V24/*value*/);;
case "MemberFunction":
return this["expMemberFunction"](_V24/*value*/);;
case "Identifier":
return this["expIdentifier"](_V24/*value*/);;
case "IfStatement":
return this["expIfStatement"](_V24/*value*/);;
case "InheritedExpression":
return this["expInheritedExpression"](_V24/*value*/);;
case "Literal":
return this["expLiteral"](_V24/*value*/);;
case "MemberExpression":
return this["expMemberExpression"](_V24/*value*/);;
case "NewExpression":
return this["expNewExpression"](_V24/*value*/);;
case "ObjectExpression":
return this["expObjectExpression"](_V24/*value*/);;
case "ReturnStatement":
return this["expReturnStatement"](_V24/*value*/);;
case "SwitchStatement":
return this["expSwitchStatement"](_V24/*value*/);;
case "ThisExpression":
return this["expThisExpression"](_V24/*value*/);;
case "ThrowStatement":
return this["expThrowStatement"](_V24/*value*/);;
case "TryStatement":
return this["expTryStatement"](_V24/*value*/);;
case "UnaryExpression":
if((_V24/*value*/["operator"] == "*")){
return this["expPromiseExpression"](_V24/*value*/["argument"]);;
};
;
if((_V24/*value*/["operator"] == "require")){
return this["expRequireExpression"](_V24/*value*/["argument"]);;
};
;
return this["expUnaryExpression"](_V24/*value*/);;
case "UpdateExpression":
return this["expUpdateExpression"](_V24/*value*/);;
case "VariableStatement":
return this["expVariableStatement"](_V24/*value*/);;
case "VariableDeclaration":
return this["expVariableDeclaration"](_V24/*value*/);;
case "WhileStatement":
return this["whileStatement"](_V24/*value*/);;
default:
this["error"](_V24/*value*/, _V12/*errorMsg*/["unknownType"]);;
}
;
;
return "/*this should not happen*/";;
;
});;
this["expExpressionStatement"] = (function(_V59/*parParsed*/){
var _V26/*res*/;
;
_V26/*res*/ = this["getDestroyTemporaryClassCode"]({"value": this["parseExpression"](_V59/*parParsed*/["expression"])});
_V26/*res*/["push"](";");;
return _V26/*res*/;;
;
});;
this["expDebuggerStatement"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"]("debugger");;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["expFunctionExpression"] = (function(_V24/*value*/, _V183/*declaration*/){
var _V184/*cp*/;
var _V185/*funName*/;
var _V137/*funRes*/;
var _V186/*uv*/;
var _V31/*name*/;
var _V26/*res*/;
;
_V184/*cp*/ = this["newInstance"](_V24/*value*/, {"dynamicCode": (this["dynamicCode"] || this["isFunction"])});
_V185/*funName*/ = _V184/*cp*/["getFunctionName"]();
_V137/*funRes*/ = _V184/*cp*/["getFunctionRes"]();
_V186/*uv*/ = _V184/*cp*/["_getUsedVairables"]();
_V31/*name*/;
for(_V31/*name*/ in _V186/*uv*/){if((_V186/*uv*/[_V31/*name*/] === true)){
this["_addUsedVariable"](_V31/*name*/);;
};
;
};
;
_V26/*res*/;
if((_V185/*funName*/ && _V137/*funRes*/)){
this["addFunction"](_V137/*funRes*/, _V185/*funName*/);;
_V26/*res*/ = this["newResult"](this["getVariableName"](_V185/*funName*/));;
_V26/*res*/["setType"](_V137/*funRes*/["getType"]());;
return _V26/*res*/;;
};
;
_V26/*res*/ = this["newResult"]();;
if(! _V183/*declaration*/){
_V26/*res*/["push"]("(");;
};
;
_V26/*res*/["pushType"]((_V137/*funRes*/ || _V184/*cp*/["getResult"]()));;
if(! _V183/*declaration*/){
_V26/*res*/["push"](")");;
};
;
return _V26/*res*/;;
;
});;
this["expFunctionDeclaration"] = (function(_V24/*value*/){
;
return this["expFunctionExpression"](_V24/*value*/, true);;
;
});;
this["expMemberFunction"] = (function(_V24/*value*/){
;
_V24/*value*/["id"] = _V56/*undefined*/;;
return this["expFunctionExpression"](_V24/*value*/);;
;
});;
this["expUpdateExpression"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
if(_V30/*par*/["prefix"]){
_V26/*res*/["push"](_V30/*par*/["operator"]);;
};
;
_V26/*res*/["pushType"](this["expectTypeVar"](this["parseExpression"](_V30/*par*/["argument"])));;
if(! _V30/*par*/["prefix"]){
_V26/*res*/["push"](_V30/*par*/["operator"]);;
};
;
return _V26/*res*/;;
;
});;
this["expIdentifier"] = (function(_V30/*par*/){
;
return this["getVariable"](_V32/*identifierName*/(_V30/*par*/["name"]));;
;
});;
this["expLiteral"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
switch (typeof _V30/*par*/["value"]){
case "string":
_V26/*res*/["push"](_V14/*stringEncodeStr*/(_V30/*par*/["value"]));;
break;;
case "number":
_V26/*res*/["push"](("" + _V30/*par*/["value"]));;
break;;
case "boolean":
if(_V30/*par*/["value"]){
_V26/*res*/["push"]("true");;

}else{
_V26/*res*/["push"]("false");;
};
;
break;;
default:
if((_V30/*par*/["value"] === null)){
_V26/*res*/["push"]("null");;

}else{
if((_V30/*par*/["value"] && _V30/*par*/["value"]["exec"])){
_V26/*res*/["push"](("" + _V30/*par*/["value"]));;

}else{
this["error"](_V30/*par*/, _V12/*errorMsg*/["internalUnknownLiteralType"]);;
};
};
;
}
;
;
_V26/*res*/["setType"](this["getType"]("var"));;
return _V26/*res*/;;
;
});;
this["expPromiseExpression"] = (function(_V187/*parExpression*/){
var _V26/*res*/;
var _V188/*expressionRes*/;
var _V189/*promiseNameStr*/;
var _V190/*dereferencePre*/;
var _V191/*preRes*/;
var _V192/*dereferencePost*/;
var _V193/*postRes*/;
var _V194/*promiseType*/;
;
_V26/*res*/ = this["newResult"]();
_V188/*expressionRes*/ = this["parseExpression"](_V187/*parExpression*/);
_V189/*promiseNameStr*/ = this["getUniqueName"]();
_V26/*res*/["makePromising"]();;
_V26/*res*/["setPromiseName"](_V189/*promiseNameStr*/);;
_V190/*dereferencePre*/ = this["dereferencePromisePreCode"]({"value": _V188/*expressionRes*/});
_V191/*preRes*/ = this["newResult"]();
_V191/*preRes*/["push"](_V190/*dereferencePre*/);;
_V191/*preRes*/["push"]((this["tryCatchFunctionStr"] + "(function("));;
_V191/*preRes*/["push"](_V189/*promiseNameStr*/);;
_V191/*preRes*/["push"]("){");;
_V26/*res*/["addPre"](_V191/*preRes*/);;
_V192/*dereferencePost*/ = this["dereferencePromisePostCode"]({"value": _V188/*expressionRes*/});
_V193/*postRes*/ = this["newResult"]();
_V193/*postRes*/["push"](("}), " + this["catchFunctionStr"]));;
_V193/*postRes*/["push"](_V192/*dereferencePost*/);;
_V193/*postRes*/["push"](";");;
_V26/*res*/["addPost"](_V193/*postRes*/);;
_V194/*promiseType*/ = _V188/*expressionRes*/["getType"]();
_V26/*res*/["setType"](this["getClassFromPromiseOf"](_V194/*promiseType*/));;
return _V26/*res*/;;
;
});;
this["expUnaryExpression"] = (function(_V187/*parExpression*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"](_V187/*parExpression*/["operator"]);;
_V26/*res*/["push"](" ");;
_V26/*res*/["pushType"](this["expectTypeVar"](this["parseExpression"](_V187/*parExpression*/["argument"])));;
return _V26/*res*/;;
;
});;
this["expRequireExpression"] = (function(_V187/*parExpression*/){
var _V26/*res*/;
var _V188/*expressionRes*/;
var _V189/*promiseNameStr*/;
var _V190/*dereferencePre*/;
var _V191/*preRes*/;
var _V192/*dereferencePost*/;
var _V193/*postRes*/;
;
_V26/*res*/ = this["newResult"]();
this["common"]["useRequire"] = true;;
_V188/*expressionRes*/ = this["newResult"]();
_V188/*expressionRes*/["push"]("__requireFun(");;
_V188/*expressionRes*/["push"](this["parseExpression"](_V187/*parExpression*/));;
_V188/*expressionRes*/["push"](")");;
_V188/*expressionRes*/["setType"]("var");;
_V189/*promiseNameStr*/ = this["getUniqueName"]();
_V26/*res*/["makePromising"]();;
_V26/*res*/["setPromiseName"](_V189/*promiseNameStr*/);;
_V190/*dereferencePre*/ = this["dereferencePromisePreCode"]({"value": _V188/*expressionRes*/});
_V191/*preRes*/ = this["newResult"]();
_V191/*preRes*/["push"](_V190/*dereferencePre*/);;
_V191/*preRes*/["push"]((this["tryCatchFunctionStr"] + "(function("));;
_V191/*preRes*/["push"](_V189/*promiseNameStr*/);;
_V191/*preRes*/["push"]("){");;
_V26/*res*/["addPre"](_V191/*preRes*/);;
_V192/*dereferencePost*/ = this["dereferencePromisePostCode"]({"value": _V188/*expressionRes*/});
_V193/*postRes*/ = this["newResult"]();
_V193/*postRes*/["push"](("}), " + this["catchFunctionStr"]));;
_V193/*postRes*/["push"](_V192/*dereferencePost*/);;
_V193/*postRes*/["push"](";");;
_V26/*res*/["addPost"](_V193/*postRes*/);;
_V26/*res*/["setType"]("var");;
return _V26/*res*/;;
;
});;
this["expNewExpression"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V195/*typed*/;
var _V74/*type*/;
var _V37/*i*/;
var _V196/*constructorType*/;
var _V197/*expression*/;
;
_V26/*res*/ = this["newResult"]();
_V195/*typed*/ = false;
_V74/*type*/ = "var";
if((_V30/*par*/["callee"] && (_V30/*par*/["callee"]["type"] == "Identifier"))){
_V74/*type*/ = this["getType"](_V32/*identifierName*/(_V30/*par*/["callee"]), _V30/*par*/, {"dontThrow": true});;
if(_V74/*type*/){
_V26/*res*/["push"]("new ");;
_V26/*res*/["push"](this["getConstructorName"](_V30/*par*/["callee"]));;
_V26/*res*/["push"]("(");;
_V195/*typed*/ = true;;
_V26/*res*/["setType"](this["createTemporaryTrackedClass"](_V74/*type*/));;
};
;
};
;
if(! _V195/*typed*/){
_V26/*res*/["push"]("new ");;
_V26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V30/*par*/["callee"])));;
_V26/*res*/["push"]("(");;
};
;
_V37/*i*/ = 0;
_V196/*constructorType*/;
if(_V195/*typed*/){
_V196/*constructorType*/ = this["getConstructorType"]({"type": _V74/*type*/}, _V30/*par*/);;
};
;
for(_V37/*i*/;(_V37/*i*/ < _V30/*par*/["arguments"]["length"]);++_V37/*i*/){{if(_V37/*i*/){
_V26/*res*/["push"](", ");;
};
;
_V197/*expression*/ = this["parseExpression"](_V30/*par*/["arguments"][_V37/*i*/]);
if(_V195/*typed*/){
_V26/*res*/["push"](this["getPassAsTypeCode"]({"value": _V197/*expression*/,
"valueType": _V197/*expression*/["getType"](),
"type": this["getFunctionArgumentType"](_V196/*constructorType*/, _V37/*i*/, _V30/*par*/),
"errorFun": this["getWarningFun"](_V30/*par*/)}));;

}else{
_V26/*res*/["push"](this["expectTypeVar"](_V197/*expression*/));;
};
;
}};
;
_V26/*res*/["push"](")");;
if(! _V195/*typed*/){
_V26/*res*/["setType"]("var");;
};
;
return _V26/*res*/;;
;
});;
this["connectExpression"] = (function(_V59/*parParsed*/){
var _V26/*res*/;
var _V198/*signalObject*/;
var _V199/*signalProperty*/;
var _V200/*slotObject*/;
var _V201/*slotProperty*/;
var _V202/*fun*/;
;
_V26/*res*/ = this["newResult"]();
if((_V59/*parParsed*/["signal"]["type"] != "MemberExpression")){
this["error"](_V59/*parParsed*/["signal"], _V12/*errorMsg*/["expectedMemberExpression"]);;
};
;
if(_V59/*parParsed*/["signal"]["computed"]){
this["error"](_V59/*parParsed*/["signal"], _V12/*errorMsg*/["noComputedMembersAllowed"]);;
};
;
_V198/*signalObject*/ = this["parseExpression"](_V59/*parParsed*/["signal"]["object"]);
_V199/*signalProperty*/ = _V32/*identifierName*/(_V59/*parParsed*/["signal"]["property"]);
if(_V59/*parParsed*/["slot"]){
if((_V59/*parParsed*/["slot"]["type"] != "MemberExpression")){
this["error"](_V59/*parParsed*/["slot"], _V12/*errorMsg*/["expectedMemberExpression"]);;
};
;
if(_V59/*parParsed*/["slot"]["computed"]){
this["error"](_V59/*parParsed*/["slot"], _V12/*errorMsg*/["noComputedMembersAllowed"]);;
};
;
_V200/*slotObject*/ = this["parseExpression"](_V59/*parParsed*/["slot"]["object"]);
_V201/*slotProperty*/ = _V32/*identifierName*/(_V59/*parParsed*/["slot"]["property"]);
_V26/*res*/["push"](this["connectSlotCode"]({"signalObject": _V198/*signalObject*/,
"signalProperty": _V199/*signalProperty*/,
"slotObject": _V200/*slotObject*/,
"slotProperty": _V201/*slotProperty*/,
"errorFun": this["getWarningFun"](_V59/*parParsed*/)}));;

}else{
if(_V59/*parParsed*/["fun"]){
_V202/*fun*/ = this["parseExpression"](_V59/*parParsed*/["fun"]);
_V26/*res*/["push"](this["connectFunCode"]({"signalObject": _V198/*signalObject*/,
"signalProperty": _V199/*signalProperty*/,
"fun": _V202/*fun*/,
"errorFun": this["getWarningFun"](_V59/*parParsed*/)}));;

}else{
this["error"](_V59/*parParsed*/, _V12/*errorMsg*/["unknownConnect"]);;
};
};
;
_V26/*res*/["setType"]("var");;
return _V26/*res*/;;
;
});;
this["breakOrContinuePromise"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V203/*promiseName*/;
var _V204/*outerBlock*/;
var _V140/*b*/;
var _V142/*block*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["makePromising"]();;
_V203/*promiseName*/ = (_V30/*par*/["promiseName"] || this["getUniqueName"]());
_V26/*res*/["setPromiseName"](_V203/*promiseName*/);;
this["stack"]("breakCode");;
this["stack"]("continueCode");;
this["breakCode"] = (((_V203/*promiseName*/ + ".resolve(false); return ") + _V203/*promiseName*/) + ";\n");;
this["continueCode"] = (((_V203/*promiseName*/ + ".resolve(true); return ") + _V203/*promiseName*/) + ";\n");;
_V26/*res*/["push"]((((("var " + _V203/*promiseName*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
_V204/*outerBlock*/ = this["newResult"]();
if(_V30/*par*/["preCondition"]){
_V204/*outerBlock*/["push"]("if(");;
_V204/*outerBlock*/["push"](_V30/*par*/["preCondition"]);;
_V204/*outerBlock*/["push"]("){");;
};
;
_V140/*b*/ = _V30/*par*/["block"];
_V140/*b*/["brackets"] = false;;
_V142/*block*/ = this["blockCreator"](_V140/*b*/, {"postCode": this["newResult"](this["continueCode"])});
_V204/*outerBlock*/["push"](this["makeCompleteStatement"](_V142/*block*/));;
if(_V30/*par*/["preCondition"]){
_V204/*outerBlock*/["push"]("}else{");;
_V204/*outerBlock*/["push"](this["breakCode"]);;
_V204/*outerBlock*/["push"]("};\n");;
};
;
_V26/*res*/["push"](this["makeCompleteStatement"](_V204/*outerBlock*/));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
return _V26/*res*/;;
;
});;
this["generateLoop"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V205/*loopFun*/;
var _V206/*loopEndPromise*/;
var _V207/*loopCode*/;
var _V208/*doFun*/;
var _V209/*doFunStatement*/;
;
_V26/*res*/ = this["newResult"]();
_V205/*loopFun*/ = this["getUniqueName"]();
_V206/*loopEndPromise*/ = this["getUniqueName"]();
_V26/*res*/["push"]((((("var " + _V206/*loopEndPromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
_V26/*res*/["push"]((("var " + _V205/*loopFun*/) + " = function(){"));;
_V207/*loopCode*/ = this["breakOrContinuePromise"]({"block": _V30/*par*/["block"],
"preCondition": _V30/*par*/["preCondition"],
"postCode": _V30/*par*/["postCode"]});
_V26/*res*/["push"](this["makeStatement"](this["makeCompleteStatement"](_V207/*loopCode*/)));;
_V26/*res*/["push"]("return ");;
_V26/*res*/["push"](_V207/*loopCode*/["getPromiseName"]());;
_V26/*res*/["push"](";\n");;
_V26/*res*/["push"]("};\n");;
_V208/*doFun*/ = this["getUniqueName"]();
_V26/*res*/["push"]((("var " + _V208/*doFun*/) + " = function(){"));;
_V26/*res*/["push"](_V205/*loopFun*/);;
_V26/*res*/["push"]("().then(function(contLoop){\n");;
_V26/*res*/["push"]("if (contLoop){");;
_V209/*doFunStatement*/ = this["newResult"]();
if(_V30/*par*/["postCode"]){
_V209/*doFunStatement*/["push"](this["makeStatement"](_V30/*par*/["postCode"]));;
};
;
_V209/*doFunStatement*/["push"]((_V208/*doFun*/ + "();"));;
_V26/*res*/["push"](this["makeCompleteStatement"](_V209/*doFunStatement*/));;
_V26/*res*/["push"]("}else{");;
_V26/*res*/["push"]((_V206/*loopEndPromise*/ + ".resolve();"));;
_V26/*res*/["push"]("};\n");;
_V26/*res*/["push"]("});\n");;
_V26/*res*/["push"]("};\n");;
_V26/*res*/["push"]((_V208/*doFun*/ + "();\n"));;
_V26/*res*/["push"](_V206/*loopEndPromise*/);;
_V26/*res*/["push"](".then(function(){");;
_V26/*res*/["addPost"]("});");;
return _V26/*res*/;;
;
});;
this["expForStatement"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V210/*statement*/;
var _V211/*promising*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
_V26/*res*/ = this["newResult"]();
_V210/*statement*/;
_V211/*promising*/ = false;
if(((_V42/*checkPromising*/(_V30/*par*/["test"]) || _V42/*checkPromising*/(_V30/*par*/["update"])) || _V42/*checkPromising*/(_V30/*par*/["body"]))){
_V211/*promising*/ = true;;
};
;
if(_V211/*promising*/){
_V26/*res*/["push"](this["makeStatement"](this["parseExpression"](_V30/*par*/["init"])));;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
_V26/*res*/["push"](this["generateLoop"]({"block": _V30/*par*/["body"],
"preCondition": this["parseExpression"](_V30/*par*/["test"]),
"postCode": this["parseExpression"](_V30/*par*/["update"])}));;
this["unstack"]("algorithmicCode");;

}else{
_V26/*res*/["push"]("for(");;
_V26/*res*/["push"](this["parseExpression"](_V30/*par*/["init"]));;
_V26/*res*/["push"](";");;
_V26/*res*/["push"](this["parseExpression"](_V30/*par*/["test"]));;
_V26/*res*/["push"](";");;
_V26/*res*/["push"](this["parseExpression"](_V30/*par*/["update"]));;
_V26/*res*/["push"]("){");;
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
this["stack"]("continueCode");;
this["continueCode"] = "continue;";;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
_V210/*statement*/ = this["newResult"]();;
_V210/*statement*/["push"](this["expBlockStatement"](_V30/*par*/["body"]));;
_V26/*res*/["push"](this["makeCompleteStatement"](_V210/*statement*/));;
this["unstack"]("algorithmicCode");;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
_V26/*res*/["push"]("}");;
};
;
this["unstack"]("dynamicCode");;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["expForInStatement"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V210/*statement*/;
var _V211/*promising*/;
var _V212/*iteratorRes*/;
var _V213/*iteratorAccess*/;
var _V214/*arrayName*/;
var _V215/*iName*/;
var _V216/*conditionRes*/;
var _V217/*postCodeRes*/;
var _V140/*b*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
_V26/*res*/ = this["newResult"]();
_V210/*statement*/;
_V211/*promising*/ = false;
if(_V42/*checkPromising*/(_V30/*par*/["body"])){
_V211/*promising*/ = true;;
};
;
if(_V211/*promising*/){
_V212/*iteratorRes*/ = this["expectTypeVar"](this["parseExpression"](_V30/*par*/["left"]));
_V213/*iteratorAccess*/ = _V212/*iteratorRes*/;
if(_V212/*iteratorRes*/["promising"]){
_V213/*iteratorAccess*/ = _V212/*iteratorRes*/["getPromiseName"]();;
};
;
_V214/*arrayName*/ = this["getUniqueName"]();
_V26/*res*/["addPre"]((("var " + _V214/*arrayName*/) + " = [];"));;
_V26/*res*/["push"]("for(");;
_V26/*res*/["push"](_V212/*iteratorRes*/);;
_V26/*res*/["push"](" in ");;
_V26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V30/*par*/["right"])));;
_V26/*res*/["push"]("){");;
_V26/*res*/["push"]((_V214/*arrayName*/ + ".push("));;
_V26/*res*/["push"](_V213/*iteratorAccess*/);;
_V26/*res*/["push"](");");;
_V26/*res*/["push"]("};");;
_V26/*res*/["push"](_V212/*iteratorRes*/);;
_V26/*res*/["push"](((" = " + _V214/*arrayName*/) + "[0];"));;
_V215/*iName*/ = this["getUniqueName"]();
_V26/*res*/["push"]((("var " + _V215/*iName*/) + " = 0;"));;
_V216/*conditionRes*/ = this["newResult"]();
_V216/*conditionRes*/["push"]((((_V215/*iName*/ + " < ") + _V214/*arrayName*/) + ".length"));;
_V217/*postCodeRes*/ = this["newResult"]();
_V217/*postCodeRes*/["push"]((_V215/*iName*/ + "++;"));;
_V217/*postCodeRes*/["push"](_V212/*iteratorRes*/);;
_V217/*postCodeRes*/["push"](((((" = " + _V214/*arrayName*/) + "[") + _V215/*iName*/) + "];"));;
_V26/*res*/["push"](this["generateLoop"]({"block": _V30/*par*/["body"],
"preCondition": _V216/*conditionRes*/,
"postCode": _V217/*postCodeRes*/}));;
_V26/*res*/["push"]("}");;

}else{
_V26/*res*/["push"]("for(");;
_V26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V30/*par*/["left"])));;
_V26/*res*/["push"](" in ");;
_V26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V30/*par*/["right"])));;
_V26/*res*/["push"](")");;
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
this["stack"]("continueCode");;
this["continueCode"] = "continue;";;
_V210/*statement*/ = this["newResult"]();;
_V140/*b*/ = _V30/*par*/["body"];
_V140/*b*/["brackets"] = true;;
_V210/*statement*/["push"](this["blockCreator"](_V140/*b*/));;
_V26/*res*/["push"](this["makeCompleteStatement"](_V210/*statement*/));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
};
;
this["unstack"]("dynamicCode");;
this["unstack"]("algorithmicCode");;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["whileStatement"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V218/*statements*/;
var _V112/*condition*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
_V26/*res*/ = this["newResult"]();
_V218/*statements*/;
_V112/*condition*/ = this["expectTypeVar"](this["parseExpression"](_V30/*par*/["test"]));
if((_V42/*checkPromising*/(_V112/*condition*/) || _V42/*checkPromising*/(_V30/*par*/["body"]))){
_V26/*res*/["push"](this["generateLoop"]({"block": _V30/*par*/["body"],
"preCondition": _V112/*condition*/}));;

}else{
_V26/*res*/["push"]("while(");;
_V26/*res*/["push"](_V112/*condition*/);;
_V26/*res*/["push"]("){\n");;
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
this["stack"]("continueCode");;
this["continueCode"] = "continue;";;
_V26/*res*/["push"](this["makeCompleteStatement"](this["parseExpression"](_V30/*par*/["body"])));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
_V26/*res*/["push"]("}");;
};
;
this["unstack"]("dynamicCode");;
this["unstack"]("algorithmicCode");;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["expIfStatement"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V211/*promising*/;
var _V175/*continuePromise*/;
var _V219/*continueCode*/;
var _V210/*statement*/;
var _V140/*b*/;
var _V141/*extraPar*/;
;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
_V26/*res*/ = this["newResult"]();
_V211/*promising*/ = false;
if((_V30/*par*/["consequent"] && _V42/*checkPromising*/(_V30/*par*/["consequent"]))){
_V211/*promising*/ = true;;
};
;
if((_V30/*par*/["alternate"] && _V42/*checkPromising*/(_V30/*par*/["alternate"]))){
_V211/*promising*/ = true;;
};
;
_V175/*continuePromise*/;
_V219/*continueCode*/;
if(_V211/*promising*/){
_V175/*continuePromise*/ = this["getUniqueName"]();;
_V26/*res*/["push"]((((("var " + _V175/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
_V219/*continueCode*/ = (_V175/*continuePromise*/ + ".resolve();");;
};
;
_V26/*res*/["push"]("if(");;
_V26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V30/*par*/["test"])));;
_V26/*res*/["push"]("){\n");;
if(! _V30/*par*/["consequent"]){
this["error"](_V30/*par*/, _V12/*errorMsg*/["unknownIfStatement"]);;
};
;
_V210/*statement*/ = this["newResult"]();
_V140/*b*/;
if((_V30/*par*/["consequent"]["type"] == "BlockStatement")){
_V140/*b*/ = _V30/*par*/["consequent"]["body"];;

}else{
_V140/*b*/ = [_V30/*par*/["consequent"]];;
};
;
_V140/*b*/["brackets"] = false;;
_V141/*extraPar*/ = {};
if(_V211/*promising*/){
_V141/*extraPar*/["postCode"] = this["newResult"](_V219/*continueCode*/);;
};
;
_V210/*statement*/["push"](this["blockCreator"](_V140/*b*/, _V141/*extraPar*/));;
_V26/*res*/["push"](this["makeCompleteStatement"](_V210/*statement*/));;
if(_V30/*par*/["alternate"]){
_V26/*res*/["push"]("\n}else{\n");;
_V210/*statement*/ = this["newResult"]();;
if((_V30/*par*/["alternate"]["type"] == "BlockStatement")){
_V140/*b*/ = _V30/*par*/["alternate"]["body"];;

}else{
_V140/*b*/ = [_V30/*par*/["alternate"]];;
};
;
_V140/*b*/["brackets"] = false;;
_V141/*extraPar*/ = {};;
if(_V211/*promising*/){
_V141/*extraPar*/["postCode"] = this["newResult"](_V219/*continueCode*/);;
};
;
_V210/*statement*/["push"](this["blockCreator"](_V140/*b*/, _V141/*extraPar*/));;
_V26/*res*/["push"](this["makeCompleteStatement"](_V210/*statement*/));;

}else{
if(_V211/*promising*/){
_V26/*res*/["push"]("\n}else{\n");;
_V210/*statement*/ = this["newResult"]();;
_V210/*statement*/["push"](_V219/*continueCode*/);;
_V26/*res*/["push"](this["makeCompleteStatement"](_V210/*statement*/));;
};
};
;
_V26/*res*/["push"]("}");;
if(_V211/*promising*/){
_V26/*res*/["push"]((("; " + _V175/*continuePromise*/) + ".then(function(){"));;
_V26/*res*/["addPost"]("});");;
};
;
this["unstack"]("conditionalCode");;
this["unstack"]("algorithmicCode");;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["conditionalExpression"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V220/*tempPromise*/;
var _V221/*tempValue*/;
var _V222/*trueExtraCode*/;
var _V223/*falseExtraCode*/;
;
_V26/*res*/ = this["newResult"]();
if((_V30/*par*/["consequent"]["promising"] || _V30/*par*/["alternate"]["promising"])){
_V26/*res*/["makePromising"]();;
_V220/*tempPromise*/ = this["getUniqueName"]();
_V221/*tempValue*/ = this["getUniqueName"]();
_V26/*res*/["addPre"]("var ");;
_V26/*res*/["addPre"](_V220/*tempPromise*/);;
_V26/*res*/["addPre"](((" = " + this["newPromiseStr"]()) + ";\n"));;
_V26/*res*/["addPre"]("if(");;
_V26/*res*/["addPre"](this["parseExpression"](_V30/*par*/["test"]));;
_V26/*res*/["addPre"]("){");;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
_V222/*trueExtraCode*/ = this["newResult"]();
_V222/*trueExtraCode*/["push"](_V220/*tempPromise*/);;
_V222/*trueExtraCode*/["push"](".resolve(");;
_V222/*trueExtraCode*/["push"](this["parseExpression"](_V30/*par*/["consequent"]));;
_V222/*trueExtraCode*/["push"](");\n");;
_V26/*res*/["addPre"](this["makeCompleteStatement"](_V222/*trueExtraCode*/));;
_V26/*res*/["addPre"]("}else{");;
_V223/*falseExtraCode*/ = this["newResult"]();
_V223/*falseExtraCode*/["push"](_V220/*tempPromise*/);;
_V223/*falseExtraCode*/["push"](".resolve(");;
_V223/*falseExtraCode*/["push"](this["parseExpression"](_V30/*par*/["alternate"]));;
_V223/*falseExtraCode*/["push"](");\n");;
_V26/*res*/["addPre"](this["makeCompleteStatement"](_V223/*falseExtraCode*/));;
_V26/*res*/["addPre"]("};\n");;
_V26/*res*/["addPre"](_V220/*tempPromise*/);;
_V26/*res*/["addPre"](".then(");;
_V26/*res*/["setPromiseName"](this["getUniqueName"]());;
_V26/*res*/["addPre"](_V26/*res*/["getPromiseName"]());;
_V26/*res*/["addPre"]("){");;
_V26/*res*/["addPost"]("});");;
this["unstack"]("conditionalCode");;

}else{
_V26/*res*/["push"]("(");;
_V26/*res*/["push"](this["parseExpression"](_V30/*par*/["test"]));;
_V26/*res*/["push"](" ? ");;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
_V26/*res*/["push"](this["parseExpression"](_V30/*par*/["consequent"]));;
_V26/*res*/["push"](" : ");;
_V26/*res*/["push"](this["parseExpression"](_V30/*par*/["alternate"]));;
_V26/*res*/["push"](")");;
this["unstack"]("conditionalCode");;
};
;
_V26/*res*/["setType"]("var");;
return _V26/*res*/;;
;
});;
this["expSwitchStatement"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V211/*promising*/;
var _V175/*continuePromise*/;
var _V219/*continueCode*/;
var _V224/*discriminant*/;
var _V225/*cases*/;
var _V210/*statement*/;
var _V226/*hasDefault*/;
var _V227/*defaultCase*/;
var _V228/*isDefault*/;
var _V229/*defaultCheck*/;
var _V230/*firstCheck*/;
var _V231/*hasFirstCheck*/;
var _V232/*currentCase*/;
var _V233/*caseFun*/;
var _V234/*checkFun*/;
var _V235/*nextCheckCode*/;
var _V236/*j*/;
var _V237/*nextCaseCode*/;
var _V238/*checkCode*/;
var _V140/*b*/;
var _V141/*extraPar*/;
var _V37/*i*/;
;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
_V26/*res*/ = this["newResult"]();
_V211/*promising*/ = false;
if((_V30/*par*/["cases"] && _V42/*checkPromising*/(_V30/*par*/["cases"]))){
_V211/*promising*/ = true;;
};
;
_V175/*continuePromise*/;
_V219/*continueCode*/;
if(_V211/*promising*/){
_V175/*continuePromise*/ = this["getUniqueName"]();;
_V26/*res*/["push"]((((("var " + _V175/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
_V219/*continueCode*/ = (_V175/*continuePromise*/ + ".resolve(); return;");;
this["stack"]("breakCode");;
this["breakCode"] = _V219/*continueCode*/;;
_V224/*discriminant*/ = this["getUniqueName"]("discriminant");
_V26/*res*/["push"]((("var " + _V224/*discriminant*/) + " = "));;
_V26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V30/*par*/["discriminant"])));;
_V26/*res*/["push"](";\n");;
_V225/*cases*/ = [];
_V210/*statement*/;
_V226/*hasDefault*/ = false;
_V227/*defaultCase*/;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V30/*par*/["cases"]["length"]);++_V37/*i*/){{_V228/*isDefault*/ = false;
if(! _V30/*par*/["cases"][_V37/*i*/]["test"]){
_V228/*isDefault*/ = true;;
if(! _V226/*hasDefault*/){
_V226/*hasDefault*/ = true;;
_V227/*defaultCase*/ = _V30/*par*/["cases"][_V37/*i*/];;
};
;
};
;
_V225/*cases*/["push"]({"theCase": _V30/*par*/["cases"][_V37/*i*/],
"caseFun": this["getUniqueName"](),
"checkFun": this["getUniqueName"](),
"isDefault": _V228/*isDefault*/});;
}};
;
_V229/*defaultCheck*/ = _V219/*continueCode*/;
if(_V226/*hasDefault*/){
_V229/*defaultCheck*/ = (_V227/*defaultCase*/["checkFun"] + "();");;
};
;
_V230/*firstCheck*/ = _V219/*continueCode*/;
_V231/*hasFirstCheck*/ = false;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V225/*cases*/["length"]);++_V37/*i*/){{_V232/*currentCase*/ = _V225/*cases*/[_V37/*i*/]["theCase"];
_V233/*caseFun*/ = _V225/*cases*/[_V37/*i*/]["caseFun"];
_V234/*checkFun*/ = _V225/*cases*/[_V37/*i*/]["checkFun"];
if(! _V231/*hasFirstCheck*/){
_V231/*hasFirstCheck*/ = true;;
_V230/*firstCheck*/ = (_V234/*checkFun*/ + "()");;
};
;
_V235/*nextCheckCode*/ = _V229/*defaultCheck*/;
for(_V236/*j*/ = (_V37/*i*/ + 1);(_V236/*j*/ < _V225/*cases*/["length"]);++_V236/*j*/){{if(! _V225/*cases*/[_V236/*j*/]["isDefault"]){
_V235/*nextCheckCode*/ = (_V225/*cases*/[_V236/*j*/]["checkFun"] + "()");;
break;;
};
;
}};
;
_V237/*nextCaseCode*/ = _V219/*continueCode*/;
if(_V225/*cases*/[(_V37/*i*/ + 1)]){
_V237/*nextCaseCode*/ = (_V225/*cases*/[(_V37/*i*/ + 1)]["caseFun"] + "(); return;");;
};
;
_V26/*res*/["push"]((("var " + _V234/*checkFun*/) + " = function(){"));;
_V238/*checkCode*/ = this["newResult"]();
_V238/*checkCode*/["push"]((("if(" + _V224/*discriminant*/) + " === "));;
_V238/*checkCode*/["push"](this["expectTypeVar"](this["parseExpression"](_V232/*currentCase*/["test"])));;
_V238/*checkCode*/["push"]("){");;
_V238/*checkCode*/["push"](_V233/*caseFun*/);;
_V238/*checkCode*/["push"]("(); return; };\n");;
_V238/*checkCode*/["push"](_V235/*nextCheckCode*/);;
_V26/*res*/["push"](this["makeCompleteStatement"](_V238/*checkCode*/));;
_V26/*res*/["push"]("};\n");;
_V26/*res*/["push"]((("var " + _V233/*caseFun*/) + " = function(){"));;
_V210/*statement*/ = this["newResult"]();;
_V140/*b*/ = _V232/*currentCase*/["consequent"];
_V141/*extraPar*/ = {};
if(_V211/*promising*/){
_V141/*extraPar*/["postCode"] = this["newResult"]();;
_V141/*extraPar*/["postCode"]["push"](_V237/*nextCaseCode*/);;
};
;
_V210/*statement*/["push"](this["blockCreator"](_V140/*b*/, _V141/*extraPar*/));;
_V26/*res*/["push"](this["makeCompleteStatement"](_V210/*statement*/));;
_V26/*res*/["push"]("};\n");;
}};
;
_V26/*res*/["push"](_V230/*firstCheck*/);;
_V26/*res*/["push"]((("; " + _V175/*continuePromise*/) + ".then(function(){"));;
_V26/*res*/["addPost"]("});");;
this["unstack"]("breakCode");;

}else{
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
_V26/*res*/["push"]("switch (");;
_V26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V30/*par*/["discriminant"])));;
_V26/*res*/["push"]("){\n");;
_V37/*i*/ = 0;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V30/*par*/["cases"]["length"]);++_V37/*i*/){{_V232/*currentCase*/ = _V30/*par*/["cases"][_V37/*i*/];
if((_V232/*currentCase*/["type"] != "SwitchCase")){
this["error"](_V30/*par*/, _V12/*errorMsg*/["unknownCase"]);;
};
;
if(_V232/*currentCase*/["test"]){
_V26/*res*/["push"]("case ");;
_V26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V232/*currentCase*/["test"])));;
_V26/*res*/["push"](":\n");;

}else{
_V26/*res*/["push"]("default");;
_V26/*res*/["push"](":\n");;
};
;
_V26/*res*/["push"](this["blockCreator"](_V232/*currentCase*/["consequent"]));;
}};
;
_V26/*res*/["push"]("}\n");;
this["unstack"]("breakCode");;
};
;
this["unstack"]("conditionalCode");;
this["unstack"]("algorithmicCode");;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["expBreakStatement"] = (function(_V59/*parParsed*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
if(this["breakCode"]){
_V26/*res*/["push"](this["breakCode"]);;

}else{
_V26/*res*/["push"]("break;");;
};
;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["expContinueStatement"] = (function(_V59/*parParsed*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
if(this["continueCode"]){
_V26/*res*/["push"](this["continueCode"]);;

}else{
_V26/*res*/["push"]("continue;");;
};
;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["expBinaryExpression"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V239/*left*/;
var _V240/*right*/;
var _V241/*ltype*/;
var _V242/*rtype*/;
var _V220/*tempPromise*/;
var _V221/*tempValue*/;
var _V243/*rightExtraCode*/;
;
_V26/*res*/ = this["newResult"]();
_V239/*left*/ = this["parseExpression"](_V30/*par*/["left"]);
_V240/*right*/ = this["parseExpression"](_V30/*par*/["right"]);
_V26/*res*/["setType"]("var");;
if(((_V30/*par*/["operator"] == "||") && _V30/*par*/["right"]["promising"])){
_V241/*ltype*/ = _V239/*left*/["getType"]();
_V242/*rtype*/ = _V240/*right*/["getType"]();
if(((_V241/*ltype*/ !== this["getType"]("var")) || (_V242/*rtype*/ !== this["getType"]("var")))){
this["error"](_V30/*par*/, _V12/*errorMsg*/["notImplemented"]);;
};
;
_V26/*res*/["makePromising"]();;
_V220/*tempPromise*/ = this["getUniqueName"]();
_V221/*tempValue*/ = this["getUniqueName"]();
_V26/*res*/["addPre"]("var ");;
_V26/*res*/["addPre"](_V220/*tempPromise*/);;
_V26/*res*/["addPre"](((" = " + this["newPromiseStr"]()) + ";\n"));;
_V26/*res*/["addPre"]("var ");;
_V26/*res*/["addPre"](_V221/*tempValue*/);;
_V26/*res*/["addPre"](" = ");;
_V26/*res*/["addPre"](_V239/*left*/);;
_V26/*res*/["addPre"](";\n");;
_V26/*res*/["addPre"]("if (");;
_V26/*res*/["addPre"](_V221/*tempValue*/);;
_V26/*res*/["addPre"]("){ ");;
_V26/*res*/["addPre"](_V220/*tempPromise*/);;
_V26/*res*/["addPre"](".resolve(");;
_V26/*res*/["addPre"](_V221/*tempValue*/);;
_V26/*res*/["addPre"](") }else{ ");;
_V243/*rightExtraCode*/ = this["newResult"]();
_V243/*rightExtraCode*/["push"](_V220/*tempPromise*/);;
_V243/*rightExtraCode*/["push"](".resolve(");;
_V243/*rightExtraCode*/["push"](_V240/*right*/);;
_V243/*rightExtraCode*/["push"](");\n");;
_V26/*res*/["addPre"](this["makeCompleteStatement"](_V243/*rightExtraCode*/));;
_V26/*res*/["addPre"]("};\n");;
_V26/*res*/["addPre"](_V220/*tempPromise*/);;
_V26/*res*/["addPre"](".then(");;
_V26/*res*/["setPromiseName"](this["getUniqueName"]());;
_V26/*res*/["addPre"](_V26/*res*/["getPromiseName"]());;
_V26/*res*/["addPre"]("){");;
_V26/*res*/["addPost"]("});");;

}else{
_V26/*res*/["push"](this["getBinaryExpressionCode"]({"left": _V239/*left*/,
"right": _V240/*right*/,
"operator": _V30/*par*/["operator"],
"errorFun": this["getWarningFun"](_V30/*par*/)}));;
};
;
return _V26/*res*/;;
;
});;
this["expMemberExpression"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V244/*base*/;
;
_V26/*res*/ = this["newResult"]();
_V244/*base*/ = this["parseExpression"](_V30/*par*/["object"]);
_V26/*res*/["pushType"](this["getGetPropertyCode"]({"instance": _V244/*base*/,
"property": (_V30/*par*/["computed"] ? _V56/*undefined*/ : _V32/*identifierName*/(_V30/*par*/["property"])),
"propertyValue": (_V30/*par*/["computed"] ? this["expectTypeVar"](this["parseExpression"](_V30/*par*/["property"])) : _V56/*undefined*/),
"errorFun": this["getWarningFun"](_V30/*par*/)}));;
return _V26/*res*/;;
;
});;
this["newInherited"] = (function(){
;
return new _V245/*InheritedSystem*/(this);;
;
});;
_V245/*InheritedSystem*/ = (function(_V30/*par*/){
;
this["instance"] = _V30/*par*/;;
this["used"] = {};;
;
});
_V245/*InheritedSystem*/["prototype"] = {"setCurrent": (function(_V30/*par*/){
;
this["currentMember"] = _V30/*par*/;;
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
this["expObjectExpression"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V246/*isClassObject*/;
var _V37/*i*/;
var _V93/*l*/;
var _V247/*currentMember*/;
var _V162/*prop*/;
var _V248/*v*/;
var _V31/*name*/;
var _V249/*functionRes*/;
;
_V26/*res*/ = this["newResult"]();
_V246/*isClassObject*/ = this["isClassObject"];
this["stack"]("isClassObject");;
this["isClassObject"] = false;;
_V26/*res*/["push"]("{");;
_V37/*i*/ = 0;
_V93/*l*/ = ((_V30/*par*/["properties"] && _V30/*par*/["properties"]["length"]) || 0);
for(_V37/*i*/;(_V37/*i*/ < _V93/*l*/);++_V37/*i*/){{this["isClassObject"] = false;;
_V247/*currentMember*/;
if(_V37/*i*/){
_V26/*res*/["push"](",\n");;
};
;
_V162/*prop*/ = _V30/*par*/["properties"][_V37/*i*/];
if((_V162/*prop*/["kind"] == "init")){
_V247/*currentMember*/ = _V32/*identifierName*/(_V162/*prop*/["key"]);;
if(this["inheritedSystem"]){
this["inheritedSystem"]["setCurrent"](_V247/*currentMember*/);;
};
;
_V26/*res*/["push"]((_V14/*stringEncodeStr*/(_V32/*identifierName*/(_V162/*prop*/["key"])) + ": "));;
if(_V162/*prop*/["value"]){
if(_V40/*checkIsFunction*/(_V162/*prop*/["value"])){
if(_V246/*isClassObject*/){
this["isClassObject"] = true;;
};
;
};
;
_V248/*v*/ = this["parseExpression"](_V162/*prop*/["value"]);
_V26/*res*/["push"](this["expectTypeVar"](this["getPassAsTypeCode"]({"value": _V248/*v*/,
"valueType": _V248/*v*/["getType"](),
"type": this["getType"]((_V162/*prop*/["typename"] || "var"), _V30/*par*/),
"errorFun": this["getWarningFun"](_V30/*par*/)})));;
};
;

}else{
if((_V162/*prop*/["kind"] == "function")){
if(_V246/*isClassObject*/){
this["isClassObject"] = true;;
};
;
_V31/*name*/ = _V32/*identifierName*/(_V162/*prop*/["id"]);
_V247/*currentMember*/ = _V31/*name*/;;
if(this["inheritedSystem"]){
this["inheritedSystem"]["setCurrent"](_V247/*currentMember*/);;
};
;
_V162/*prop*/["id"] = _V56/*undefined*/;;
_V26/*res*/["push"]((_V14/*stringEncodeStr*/(_V31/*name*/) + ": "));;
_V249/*functionRes*/ = this["expectTypeVar"](this["parseExpression"](_V162/*prop*/));
_V26/*res*/["push"](_V249/*functionRes*/);;

}else{
if((_V162/*prop*/["kind"] == "block")){

}else{
this["error"](_V30/*par*/, _V12/*errorMsg*/["unknownPropertyAssignmentType"]);;
};
};
};
;
}};
;
_V26/*res*/["push"]("}");;
_V26/*res*/["setType"]("var");;
this["unstack"]("isClassObject");;
return _V26/*res*/;;
;
});;
this["expClassObjectExpression"] = (function(_V30/*par*/){
var _V26/*res*/;
;
this["stack"]("isClassObject");;
this["isClassObject"] = true;;
_V26/*res*/ = this["expObjectExpression"](_V30/*par*/);
this["unstack"]("isClassObject");;
return _V26/*res*/;;
;
});;
this["expectTypeVar"] = (function(_V30/*par*/){
var _V50/*self*/;
var _V171/*e*/;
;
if((_V30/*par*/["getType"]() === this["getType"]("var"))){
return _V30/*par*/;;
};
;
_V50/*self*/ = this;
_V171/*e*/ = this["addError"](_V30/*par*/["getParsed"](), _V12/*errorMsg*/["expectedVar"]);
_V18/*classSystem*/["definitionPromise"](_V30/*par*/["getType"]())["then"]((function(_V35/*t*/){
;
if((_V35/*t*/ === _V50/*self*/["getType"]("var"))){
_V171/*e*/["resolve"]();;
};
;
;
}));;
return _V30/*par*/;;
;
});;
this["expVariableStatement"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V250/*declarations*/;
var _V37/*i*/;
var _V93/*l*/;
var _V251/*usedType*/;
var _V54/*r*/;
;
_V26/*res*/ = this["newResult"]();
_V250/*declarations*/ = _V30/*par*/["declarations"];
if(! _V250/*declarations*/){
this["error"](_V30/*par*/, _V12/*errorMsg*/["missingDeclarations"]);;
return "";;
};
;
_V37/*i*/ = 0;
_V93/*l*/ = _V250/*declarations*/["length"];
_V251/*usedType*/ = this["getType"](_V32/*identifierName*/(_V30/*par*/["typename"]), _V30/*par*/);
for(_V37/*i*/;(_V37/*i*/ < _V93/*l*/);++_V37/*i*/){{if((_V250/*declarations*/[_V37/*i*/]["type"] == "VariableDeclaration")){
_V54/*r*/ = this["parseExpression"](_V250/*declarations*/[_V37/*i*/]);
_V26/*res*/["push"](_V54/*r*/);;

}else{
this["error"](_V250/*declarations*/[_V37/*i*/], _V12/*errorMsg*/["unknownType"]);;
};
;
}};
;
_V26/*res*/["setType"](_V251/*usedType*/);;
return _V26/*res*/;;
;
});;
this["isSameType"] = (function(_V62/*type1*/, _V63/*type2*/){
;
return _V18/*classSystem*/["isSameType"](_V62/*type1*/, _V63/*type2*/);;
;
});;
this["expVariableDeclaration"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
if(_V30/*par*/["init"]){
_V26/*res*/["pushType"](this["getSetVariableCode"]({"instance": this["getVariable"](_V32/*identifierName*/(_V30/*par*/["id"])),
"assignmentType": _V30/*par*/["id"]["type"],
"value": this["parseExpression"](_V30/*par*/["init"]),
"operator": "=",
"errorFun": this["getWarningFun"](_V30/*par*/)}));;

}else{
_V26/*res*/["pushType"](this["getVariable"](_V32/*identifierName*/(_V30/*par*/["id"])));;
};
;
return _V26/*res*/;;
;
});;
this["getVariable"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
this["_addUsedVariable"](_V30/*par*/);;
_V26/*res*/["push"](this["getVariableName"](_V30/*par*/));;
_V26/*res*/["setType"](this["getVariableType"](_V30/*par*/));;
return _V26/*res*/;;
;
});;
this["getResultType"] = (function(_V30/*par*/){
var _V35/*t*/;
;
if(! _V30/*par*/){
return _V56/*undefined*/;;
};
;
if((typeof _V30/*par*/ == "string")){
return _V56/*undefined*/;;
};
;
_V35/*t*/ = _V30/*par*/["getType"]();
if((typeof _V35/*t*/ == "string")){
return this["getType"](_V35/*t*/);;
};
;
return _V35/*t*/;;
;
});;
this["getFunctionArgumentType"] = (function(_V76/*parType*/, _V252/*parIndex*/, _V73/*parsed*/){
var _V253/*retType*/;
var _V50/*self*/;
;
_V253/*retType*/ = this["getProvisionalType"](_V73/*parsed*/);
_V50/*self*/ = this;
_V18/*classSystem*/["readyPromise"](_V76/*parType*/)["then"]((function(_V76/*parType*/){
;
_V50/*self*/["resolveProvisional"](_V253/*retType*/, _V18/*classSystem*/["getFunctionArgumentType"](_V76/*parType*/, _V252/*parIndex*/));;
;
}));;
return _V253/*retType*/;;
;
});;
this["callClassSystem"] = (function(_V116/*parFun*/, _V30/*par*/){
var _V254/*dynamic*/;
var _V255/*typeProps*/;
var _V256/*ignoreProps*/;
var _V37/*i*/;
var _V39/*p*/;
var _V257/*promises*/;
var _V73/*parsed*/;
var _V258/*errRes*/;
var _V50/*self*/;
var _V259/*resolveType*/;
var _V35/*t*/;
;
_V254/*dynamic*/ = false;
_V255/*typeProps*/ = {"type": true,
"valueType": true,
"leftType": true,
"rightType": true};
_V256/*ignoreProps*/ = {"errorFun": true,
"parsed": true};
_V37/*i*/ = 0;
_V39/*p*/;
_V257/*promises*/ = [];
_V73/*parsed*/ = _V30/*par*/["parsed"];
_V73/*parsed*/ = (_V73/*parsed*/ || (_V30/*par*/["value"] && _V30/*par*/["value"]["getParsed"]()));;
_V73/*parsed*/ = (_V73/*parsed*/ || (_V30/*par*/["instance"] && _V30/*par*/["instance"]["getParsed"]()));;
_V73/*parsed*/ = (_V73/*parsed*/ || (_V30/*par*/["left"] && _V30/*par*/["left"]["getParsed"]()));;
_V73/*parsed*/ = (_V73/*parsed*/ || (_V30/*par*/["right"] && _V30/*par*/["right"]["getParsed"]()));;
if(! _V73/*parsed*/){
_V11/*errorFun*/({}, _V12/*errorMsg*/["internalParserInfoMissing"]);;
;
};
;
_V258/*errRes*/ = this["runtimeError"](_V73/*parsed*/, _V12/*errorMsg*/["typeLookupFailed"]);
_V50/*self*/ = this;
_V259/*resolveType*/ = (function(_V162/*prop*/, _V75/*ps*/, _V260/*parArgument*/){
var _V26/*res*/;
;
_V26/*res*/ = new _V16/*Promise*/();
_V75/*ps*/["then"]((function(_V35/*t*/){
;
if(_V260/*parArgument*/){
_V30/*par*/["arguments"][_V162/*prop*/]["type"] = _V35/*t*/;;

}else{
_V30/*par*/[_V162/*prop*/] = _V35/*t*/;;
};
;
_V26/*res*/["resolve"]();;
;
}));;
_V257/*promises*/["push"](_V26/*res*/);;
return _V26/*res*/;;
;
});
_V35/*t*/;
for(_V39/*p*/ in _V255/*typeProps*/){_V35/*t*/ = _V30/*par*/[_V39/*p*/];;
if(_V35/*t*/){
if(_V35/*t*/["isDynamic"]){
_V254/*dynamic*/ = true;;

}else{
_V259/*resolveType*/(_V39/*p*/, _V18/*classSystem*/["readyPromise"](_V35/*t*/));;
};
;
};
;
};
;
if(_V30/*par*/["arguments"]){
for(_V37/*i*/ = 0;(_V37/*i*/ < _V30/*par*/["arguments"]["length"]);++_V37/*i*/){{_V35/*t*/ = _V30/*par*/["arguments"][_V37/*i*/]["type"];;
if(_V35/*t*/){
if(_V35/*t*/["isDynamic"]){
_V254/*dynamic*/ = true;;

}else{
_V259/*resolveType*/(_V37/*i*/, _V18/*classSystem*/["readyPromise"](_V35/*t*/), true);;
};
;
};
;
}};
;
};
;
_V17/*promiseland*/["all"](_V257/*promises*/)["then"]((function(){
var _V39/*p*/;
var _V26/*res*/;
var _V261/*propsStarted*/;
var _V262/*addProperty*/;
var _V263/*dynRes*/;
var _V53/*tempRes*/;
;
_V39/*p*/;
if(_V254/*dynamic*/){
_V50/*self*/["common"]["useClassSystem"] = true;;
_V26/*res*/ = _V50/*self*/["newResult"]();
_V26/*res*/["push"]("classSystem.");;
_V26/*res*/["push"](_V116/*parFun*/);;
_V26/*res*/["push"]("({");;
_V261/*propsStarted*/ = false;
_V262/*addProperty*/ = (function(_V39/*p*/){
;
if(_V261/*propsStarted*/){
_V26/*res*/["push"](", ");;
};
;
_V261/*propsStarted*/ = true;;
_V26/*res*/["push"](_V14/*stringEncodeStr*/(_V39/*p*/));;
_V26/*res*/["push"](":");;
;
});
for(_V39/*p*/ in _V30/*par*/){if((! _V30/*par*/[_V39/*p*/] || _V256/*ignoreProps*/[_V39/*p*/])){

}else{
if(_V255/*typeProps*/[_V39/*p*/]){
_V262/*addProperty*/(_V39/*p*/);;
_V26/*res*/["push"](_V50/*self*/["renderType"](_V30/*par*/[_V39/*p*/]));;

}else{
_V262/*addProperty*/(_V39/*p*/);;
_V26/*res*/["push"](_V50/*self*/["makeCompleteStatementDynamic"](_V30/*par*/[_V39/*p*/]));;
};
};
;
};
;
_V26/*res*/["push"]("})");;
_V263/*dynRes*/ = _V50/*self*/["newResult"]();
_V263/*dynRes*/["push"](_V50/*self*/["makeCompleteStatement"](_V26/*res*/), _V56/*undefined*/, {"dynamic": true});;
_V258/*errRes*/["resolve"](_V263/*dynRes*/);;

}else{
_V53/*tempRes*/ = _V50/*self*/["newResult"]();
_V30/*par*/["result"] = _V53/*tempRes*/;;
_V258/*errRes*/["resolve"](_V17/*promiseland*/["classSystem"][_V116/*parFun*/](_V30/*par*/));;
};
;
;
}));;
return _V258/*errRes*/;;
;
});;
this["isTrackedClassConRes"] = (function(_V76/*parType*/){
var _V50/*self*/;
var _V26/*res*/;
;
_V50/*self*/ = this;
if(_V76/*parType*/["isDynamic"]){
_V26/*res*/ = _V50/*self*/["newResult"]();
_V50/*self*/["common"]["useClassSystem"] = true;;
_V26/*res*/["push"]("classSystem.isTrackedClass");;
_V26/*res*/["push"]("(");;
_V26/*res*/["push"](_V50/*self*/["renderType"](_V76/*parType*/));;
_V26/*res*/["push"](")");;
return _V26/*res*/;;
};
;
return _V18/*classSystem*/["isTrackedClass"](_V76/*parType*/);;
;
});;
this["createConditionalCode"] = (function(_V264/*parTrueRes*/, _V265/*parFalseRes*/){
var _V50/*self*/;
var _V266/*isDecided*/;
var _V267/*conditions*/;
var _V26/*res*/;
;
_V50/*self*/ = this;
_V264/*parTrueRes*/ = (_V264/*parTrueRes*/ || this["newResult"]());;
_V265/*parFalseRes*/ = (_V265/*parFalseRes*/ || this["newResult"]());;
_V266/*isDecided*/ = false;
_V267/*conditions*/ = [];
_V26/*res*/ = this["newResult"]();
_V26/*res*/["replace"](_V265/*parFalseRes*/);;
return {"res": _V26/*res*/,
"addCondition": (function(_V111/*parCondition*/){
var _V268/*ifRes*/;
var _V37/*i*/;
var _V263/*dynRes*/;
;
if(_V266/*isDecided*/){
return;;
};
;
if((_V111/*parCondition*/ === true)){
_V266/*isDecided*/ = true;;
_V26/*res*/["replace"](_V264/*parTrueRes*/);;
return;;
};
;
if((_V111/*parCondition*/ === false)){
return;;
};
;
_V267/*conditions*/["push"](_V111/*parCondition*/);;
_V268/*ifRes*/ = _V50/*self*/["newResult"]();
_V268/*ifRes*/["push"]("((");;
_V37/*i*/ = 0;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V267/*conditions*/["length"]);++_V37/*i*/){{if(_V37/*i*/){
_V268/*ifRes*/["push"](" && ");;
};
;
_V268/*ifRes*/["push"](_V267/*conditions*/[_V37/*i*/]);;
}};
;
_V268/*ifRes*/["push"](") ? (");;
_V268/*ifRes*/["push"](_V50/*self*/["makeCompleteStatementDynamic"](_V264/*parTrueRes*/));;
_V268/*ifRes*/["push"](") : (");;
_V268/*ifRes*/["push"](_V50/*self*/["makeCompleteStatementDynamic"](_V265/*parFalseRes*/));;
_V268/*ifRes*/["push"]("))");;
_V263/*dynRes*/ = _V50/*self*/["newResult"]();
_V263/*dynRes*/["push"](_V50/*self*/["makeCompleteStatement"](_V268/*ifRes*/), _V56/*undefined*/, {"dynamic": true});;
_V26/*res*/["replace"](_V263/*dynRes*/);;
;
})};;
;
});;
this["isTrackedClass"] = (function(_V76/*parType*/){
;
return _V18/*classSystem*/["isTrackedClass"](_V76/*parType*/);;
;
});;
this["createTemporaryTrackedClass"] = (function(_V76/*parType*/, _V59/*parParsed*/){
;
if(_V76/*parType*/["isDynamic"]){
return this["createExtraDynamicType"](_V76/*parType*/, {"temporaryTracked": true}, _V59/*parParsed*/);;
};
;
return _V18/*classSystem*/["_createTemporaryTrackedClass"](_V76/*parType*/);;
;
});;
this["parseAsType"] = (function(_V76/*parType*/, _V30/*par*/){
var _V24/*value*/;
;
_V24/*value*/ = this["parseExpression"](_V30/*par*/);
return this["getPassAsTypeCode"]({"value": _V24/*value*/,
"valueType": _V24/*value*/["getType"](),
"type": _V76/*parType*/,
"errorFun": this["getWarningFun"](_V30/*par*/),
"parsed": _V30/*par*/});;
;
});;
this["getPassAsTypeCode"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"](this["callClassSystem"]("getPassAsTypeCode", {"type": _V30/*par*/["type"],
"value": _V30/*par*/["value"],
"valueType": this["getResultType"](_V30/*par*/["value"], _V30/*par*/),
"errorFun": _V30/*par*/["errorFun"]}));;
_V26/*res*/["setType"](_V30/*par*/["type"]);;
return _V26/*res*/;;
;
});;
this["getDestroyTemporaryClassCode"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V24/*value*/;
var _V269/*valueType*/;
;
_V26/*res*/ = this["newResult"]();
_V24/*value*/ = _V30/*par*/["value"];
_V269/*valueType*/ = _V24/*value*/["getType"]();
_V26/*res*/["push"](this["callClassSystem"]("getDestroyTemporaryClassCode", {"value": _V24/*value*/,
"valueType": _V24/*value*/["getType"](),
"errorFun": _V30/*par*/["errorFun"],
"noValueRequired": (_V30/*par*/ ? _V30/*par*/["noValueRequired"] : _V56/*undefined*/)}));;
_V26/*res*/["setType"](this["getClassFromTemporaryTracked"](_V269/*valueType*/, _V24/*value*/["getParsed"]()));;
return _V26/*res*/;;
;
});;
this["getClassFromTemporaryTracked"] = (function(_V76/*parType*/, _V59/*parParsed*/){
var _V50/*self*/;
var _V270/*resType*/;
;
_V50/*self*/ = this;
if(_V76/*parType*/["isDynamic"]){
return this["createExtraDynamicType"](_V76/*parType*/, {"temporaryTrackedResolved": true}, _V59/*parParsed*/);;
};
;
_V270/*resType*/ = this["getProvisionalType"](_V59/*parParsed*/, _V59/*parParsed*/);
_V18/*classSystem*/["definitionPromise"](_V76/*parType*/)["then"]((function(_V271/*parDefinedType*/){
;
_V50/*self*/["resolveProvisional"](_V270/*resType*/, _V18/*classSystem*/["getClassFromTemporaryTracked"](_V271/*parDefinedType*/));;
;
}));;
return _V270/*resType*/;;
;
});;
this["getSetPropertyCode"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"](this["callClassSystem"]("getSetPropertyCode", {"instance": _V30/*par*/["instance"],
"type": this["getResultType"](_V30/*par*/["instance"]),
"property": _V30/*par*/["property"],
"propertyValue": _V30/*par*/["propertyValue"],
"computed": _V30/*par*/["computed"],
"value": _V30/*par*/["value"],
"valueType": this["getResultType"](_V30/*par*/["value"]),
"operator": (_V30/*par*/["operator"] || "="),
"errorFun": _V30/*par*/["errorFun"]}));;
_V26/*res*/["setType"](this["getPropertyType"]({"type": this["getResultType"](_V30/*par*/["instance"]),
"property": _V30/*par*/["property"]}, _V30/*par*/["instance"]));;
return _V26/*res*/;;
;
});;
this["getSetVariableCode"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"](this["callClassSystem"]("getSetVariableCode", {"instance": _V30/*par*/["instance"],
"type": this["getResultType"](_V30/*par*/["instance"]),
"value": _V30/*par*/["value"],
"valueType": this["getResultType"](_V30/*par*/["value"]),
"operator": (_V30/*par*/["operator"] || "="),
"errorFun": _V30/*par*/["errorFun"],
"assignmentType": _V30/*par*/["assignmentType"]}));;
_V26/*res*/["setType"](this["getClassFromTemporaryTracked"](this["getResultType"](_V30/*par*/["value"]), _V30/*par*/["value"]["getParsed"]()));;
return _V26/*res*/;;
;
});;
this["declareReturnPromiseCode"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
this["common"]["usePromise"] = true;;
_V26/*res*/["push"](this["callClassSystem"]("declareReturnPromiseCode", {"type": _V30/*par*/["type"],
"name": _V30/*par*/["name"],
"constructorName": _V30/*par*/["constructorName"],
"errorFun": _V30/*par*/["errorFun"],
"parsed": _V30/*par*/["parsed"]}));;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["returnReturnPromiseCode"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"](this["callClassSystem"]("returnReturnPromiseCode", {"type": _V30/*par*/["type"],
"name": _V30/*par*/["name"],
"errorFun": _V30/*par*/["errorFun"],
"parsed": _V30/*par*/["parsed"]}));;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["getDeclareVariableCode"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"](this["callClassSystem"]("getDeclareVariableCode", {"type": _V30/*par*/["type"],
"name": _V30/*par*/["name"],
"errorFun": _V30/*par*/["errorFun"],
"parsed": _V30/*par*/["parsed"]}));;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["getProcessParameterCode"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"](this["callClassSystem"]("getProcessParameterCode", {"type": _V30/*par*/["type"],
"name": _V30/*par*/["name"],
"errorFun": _V30/*par*/["errorFun"],
"parsed": _V30/*par*/["parsed"]}));;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["getDestroyVariableCode"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"](this["callClassSystem"]("getDestroyVariableCode", {"type": _V30/*par*/["type"],
"name": _V30/*par*/["name"],
"errorFun": _V30/*par*/["errorFun"],
"parsed": _V30/*par*/["parsed"]}));;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["connectFunCode"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"](this["callClassSystem"]("getConnectCode", {"instance": _V30/*par*/["signalObject"],
"type": this["getResultType"](_V30/*par*/["signalObject"]),
"property": _V30/*par*/["signalProperty"],
"value": _V30/*par*/["fun"],
"valueType": this["getResultType"](_V30/*par*/["fun"]),
"errorFun": _V30/*par*/["errorFun"]}));;
_V26/*res*/["setType"]("var");;
return _V26/*res*/;;
;
});;
this["connectSlotCode"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"](this["callClassSystem"]("getConnectCode", {"instance": _V30/*par*/["signalObject"],
"type": this["getResultType"](_V30/*par*/["signalObject"]),
"property": _V30/*par*/["signalProperty"],
"value": _V30/*par*/["slotObject"],
"valueType": this["getResultType"](_V30/*par*/["slotObject"]),
"valueProperty": _V30/*par*/["slotProperty"],
"errorFun": _V30/*par*/["errorFun"]}));;
_V26/*res*/["setType"]("var");;
return _V26/*res*/;;
;
});;
this["dereferencePromisePreCode"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"](this["callClassSystem"]("dereferencePromisePreCode", {"value": _V30/*par*/["value"],
"valueType": this["getResultType"](_V30/*par*/["value"]),
"errorFun": _V30/*par*/["errorFun"]}));;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["dereferencePromisePostCode"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"](this["callClassSystem"]("dereferencePromisePostCode", {"value": _V30/*par*/["value"],
"valueType": this["getResultType"](_V30/*par*/["value"]),
"errorFun": _V30/*par*/["errorFun"]}));;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["promisingReturnTypeCheck"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"](this["callClassSystem"]("promisingReturnTypeCheck", {"type": _V30/*par*/["type"],
"errorFun": _V30/*par*/["errorFun"],
"parsed": _V30/*par*/["parsed"]}));;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["getClassFromPromiseOf"] = (function(_V76/*parType*/){
;
return _V18/*classSystem*/["getClassFromPromiseOf"](_V76/*parType*/);;
;
});;
this["getPropertyType"] = (function(_V30/*par*/, _V59/*parParsed*/){
var _V74/*type*/;
var _V50/*self*/;
var _V54/*r*/;
;
_V74/*type*/ = _V30/*par*/["type"];
_V50/*self*/ = this;
if(_V74/*type*/["isDynamic"]){
return this["createExtraDynamicType"](_V74/*type*/, {"property": _V30/*par*/["property"]}, _V59/*parParsed*/);;

}else{
_V54/*r*/ = this["getProvisionalType"](_V59/*parParsed*/);
_V18/*classSystem*/["readyPromise"](_V30/*par*/["type"])["then"]((function(_V158/*resultType*/){
;
_V50/*self*/["resolveProvisional"](_V54/*r*/, _V17/*promiseland*/["classSystem"]["getPropertyType"]({"type": _V158/*resultType*/,
"property": _V30/*par*/["property"]}));;
;
}));;
return _V54/*r*/;;
};
;
;
});;
this["getConstructorType"] = (function(_V30/*par*/, _V59/*parParsed*/){
var _V74/*type*/;
var _V50/*self*/;
var _V54/*r*/;
;
_V74/*type*/ = _V30/*par*/["type"];
_V50/*self*/ = this;
if(_V74/*type*/["isDynamic"]){
return this["createExtraDynamicType"](_V74/*type*/, {"property": "constructor"}, _V59/*parParsed*/);;

}else{
_V54/*r*/ = this["getProvisionalType"](_V59/*parParsed*/);
_V18/*classSystem*/["readyPromise"](_V30/*par*/["type"])["then"]((function(_V158/*resultType*/){
;
try
{_V50/*self*/["resolveProvisional"](_V54/*r*/, _V17/*promiseland*/["classSystem"]["getConstructorType"]({"type": _V158/*resultType*/}));;
}catch(_V171/*e*/){_V50/*self*/["error"](_V59/*parParsed*/, _V171/*e*/);;
};
;
;
}));;
return _V54/*r*/;;
};
;
;
});;
this["getGetPropertyCode"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"](this["callClassSystem"]("getGetPropertyCode", {"instance": _V30/*par*/["instance"],
"type": this["getResultType"](_V30/*par*/["instance"]),
"property": _V30/*par*/["property"],
"propertyValue": _V30/*par*/["propertyValue"],
"errorFun": _V30/*par*/["errorFun"]}));;
if(_V30/*par*/["property"]){
_V26/*res*/["setType"](this["getPropertyType"]({"type": this["getResultType"](_V30/*par*/["instance"]),
"property": _V30/*par*/["property"]}, _V30/*par*/["instance"]));;

}else{
_V26/*res*/["setType"]("var");;
};
;
return _V26/*res*/;;
;
});;
this["getBinaryExpressionCode"] = (function(_V30/*par*/){
var _V26/*res*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"](this["callClassSystem"]("getBinaryExpressionCode", {"left": _V30/*par*/["left"],
"leftType": this["getResultType"](_V30/*par*/["left"]),
"right": _V30/*par*/["right"],
"rightType": this["getResultType"](_V30/*par*/["right"]),
"operator": _V30/*par*/["operator"],
"errorFun": _V30/*par*/["errorFun"]}));;
_V26/*res*/["setType"]("var");;
return _V26/*res*/;;
;
});;
this["expAssignmentExpression"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V244/*base*/;
var _V44/*property*/;
var _V272/*propertyValue*/;
;
_V26/*res*/ = this["newResult"]();
if((_V30/*par*/["left"]["type"] == "MemberExpression")){
_V244/*base*/ = this["parseExpression"](_V30/*par*/["left"]["object"]);
_V44/*property*/;
_V272/*propertyValue*/;
if(_V30/*par*/["left"]["computed"]){
_V272/*propertyValue*/ = this["expectTypeVar"](this["parseExpression"](_V30/*par*/["left"]["property"]));;

}else{
_V44/*property*/ = _V32/*identifierName*/(_V30/*par*/["left"]["property"]);;
};
;
_V26/*res*/["pushType"](this["getSetPropertyCode"]({"instance": _V244/*base*/,
"propertyValue": _V272/*propertyValue*/,
"property": _V44/*property*/,
"computed": _V30/*par*/["left"]["computed"],
"value": this["parseExpression"](_V30/*par*/["right"]),
"operator": _V30/*par*/["operator"],
"errorFun": this["getWarningFun"](_V30/*par*/)}));;

}else{
_V26/*res*/["pushType"](this["getSetVariableCode"]({"instance": this["parseExpression"](_V30/*par*/["left"]),
"assignmentType": _V30/*par*/["left"]["type"],
"value": this["parseExpression"](_V30/*par*/["right"]),
"operator": _V30/*par*/["operator"],
"errorFun": this["getWarningFun"](_V30/*par*/)}));;
};
;
return _V26/*res*/;;
;
});;
this["isCallableType"] = (function(){
;
;
});;
this["expCallExpression"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V37/*i*/;
var _V93/*l*/;
var _V273/*calleeRes*/;
var _V274/*args*/;
var _V275/*argType*/;
var _V276/*argRes*/;
;
_V26/*res*/ = this["newResult"]();
_V37/*i*/ = 0;
_V93/*l*/;
_V273/*calleeRes*/ = this["parseExpression"](_V30/*par*/["callee"]);
_V274/*args*/ = [];
if(_V30/*par*/["arguments"]){
_V93/*l*/ = _V30/*par*/["arguments"]["length"];;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V93/*l*/);++_V37/*i*/){{_V275/*argType*/ = this["getFunctionArgumentType"](_V273/*calleeRes*/["getType"](), _V37/*i*/, _V30/*par*/["arguments"][_V37/*i*/]);
_V276/*argRes*/ = this["parseExpression"](_V30/*par*/["arguments"][_V37/*i*/]);
_V276/*argRes*/ = this["getPassAsTypeCode"]({"value": _V276/*argRes*/,
"valueType": _V276/*argRes*/["getType"](),
"type": _V275/*argType*/,
"errorFun": this["getWarningFun"](_V30/*par*/)});;
_V274/*args*/["push"]({"type": _V276/*argRes*/["getType"](),
"value": _V276/*argRes*/});;
}};
;
};
;
_V26/*res*/["push"](this["callClassSystem"]("getCallCode", {"type": _V273/*calleeRes*/["getType"](),
"instance": _V273/*calleeRes*/,
"arguments": _V274/*args*/}));;
_V26/*res*/["setType"](this["getFunctionReturnType"](_V273/*calleeRes*/["getType"](), _V30/*par*/));;
return _V26/*res*/;;
;
});;
this["getFunctionReturnType"] = (function(_V76/*parType*/, _V73/*parsed*/){
var _V35/*t*/;
var _V50/*self*/;
;
_V35/*t*/ = this["getProvisionalType"](_V73/*parsed*/);
_V50/*self*/ = this;
_V18/*classSystem*/["readyPromise"](_V76/*parType*/)["then"]((function(_V277/*newt*/){
;
_V50/*self*/["resolveProvisional"](_V35/*t*/, _V18/*classSystem*/["getFunctionReturnType"](_V277/*newt*/, _V73/*parsed*/));;
;
}));;
return _V35/*t*/;;
;
});;
this["getFunctionArgumentCount"] = (function(_V76/*parType*/, _V73/*parsed*/){
;
return _V18/*classSystem*/["getFunctionArgumentCount"](_V76/*parType*/);;
;
});;
this["isVar"] = (function(_V76/*parType*/){
;
if((typeof _V76/*parType*/ == "function")){
return _V18/*classSystem*/["isVar"](_V76/*parType*/);;
};
;
return false;;
;
});;
this["expInheritedExpression"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V37/*i*/;
var _V93/*l*/;
var _V274/*args*/;
var _V276/*argRes*/;
;
if(! this["inheritedAvailable"]){
this["error"](_V30/*par*/, _V12/*errorMsg*/["inheritedOnlyInMember"]);;
return;;
};
;
_V26/*res*/ = this["newResult"]();
_V37/*i*/ = 0;
_V93/*l*/;
_V26/*res*/["push"](this["inheritedSystem"]["getCurrent"]());;
_V26/*res*/["push"](".apply(this");;
_V274/*args*/ = [];
if(_V30/*par*/["arguments"]){
_V26/*res*/["push"](", [");;
_V93/*l*/ = _V30/*par*/["arguments"]["length"];;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V93/*l*/);++_V37/*i*/){{if(_V37/*i*/){
_V26/*res*/["push"](", ");;
};
;
_V276/*argRes*/ = this["expectTypeVar"](this["parseExpression"](_V30/*par*/["arguments"][_V37/*i*/]));
_V26/*res*/["push"](_V276/*argRes*/);;
}};
;
_V26/*res*/["push"]("]");;

}else{
if(_V30/*par*/["expression"]){
_V26/*res*/["push"](", ");;
this["expectTypeVar"](this["parseExpression"](_V30/*par*/["expression"]));;
};
};
;
_V26/*res*/["push"](")");;
_V26/*res*/["setType"]("var");;
return _V26/*res*/;;
;
});;
this["expArrayExpression"] = (function(_V30/*par*/){
var _V26/*res*/;
var _V37/*i*/;
var _V93/*l*/;
;
_V26/*res*/ = this["newResult"]();
_V26/*res*/["push"]("[");;
_V37/*i*/ = 0;
_V93/*l*/ = ((_V30/*par*/["elements"] && _V30/*par*/["elements"]["length"]) || 0);
for(_V37/*i*/;(_V37/*i*/ < _V93/*l*/);++_V37/*i*/){{if(_V37/*i*/){
_V26/*res*/["push"](", ");;
};
;
_V26/*res*/["push"](this["expectTypeVar"](this["parseExpression"](_V30/*par*/["elements"][_V37/*i*/])));;
}};
;
_V26/*res*/["push"]("]");;
_V26/*res*/["setType"]("var");;
return _V26/*res*/;;
;
});;
this["expReturnStatement"] = (function(_V30/*par*/, _V278/*closingFun*/){
var _V26/*res*/;
var _V120/*valueRes*/;
var _V279/*passAsType*/;
var _V248/*v*/;
;
if(this["preventreturn"]){
this["error"](_V30/*par*/, _V12/*errorMsg*/["returnNotAllowedHere"]);;
};
;
_V26/*res*/ = this["newResult"]();
_V120/*valueRes*/;
if(_V30/*par*/["argument"]){
_V120/*valueRes*/ = this["newResult"]();;
_V279/*passAsType*/ = this["getReturnType"]();
if(this["promising"]){
_V279/*passAsType*/ = this["getClassFromPromiseOf"](_V279/*passAsType*/);;
};
;
_V279/*passAsType*/ = this["createTemporaryTrackedClass"](_V279/*passAsType*/);;
_V248/*v*/ = this["parseExpression"](_V30/*par*/["argument"]);
_V120/*valueRes*/["push"](this["getPassAsTypeCode"]({"value": _V248/*v*/,
"valueType": _V248/*v*/["getType"](),
"type": _V279/*passAsType*/,
"errorFun": this["getWarningFun"](_V30/*par*/)}));;
};
;
_V26/*res*/["push"](this["getReturnCode"]({"return": true,
"value": _V120/*valueRes*/}));;
_V26/*res*/["setType"](_V19/*statementType*/);;
return _V26/*res*/;;
;
});;
this["_start"]();;
;
});
_V280/*loaderStr*/ = (function(_V30/*par*/){
var _V281/*resStr*/;
var _V37/*i*/;
var _V282/*modules*/;
var _V99/*extraModules*/;
var _V283/*extraModulesAr*/;
;
_V281/*resStr*/ = "";
_V37/*i*/;
_V281/*resStr*/ += "(function(){\n  var defineFun;\n  var requireFun;\n  \n  if (typeof exports == \"object\" && typeof module == \"object\"){ // CommonJS\n    requireFun = function(modulesAr, callback, errBack){\n      try{\n        var i = 0;\n        var l = modulesAr.length;\n        var args = [];\n        for (i; i < l; ++i){\n          args.push(require(modulesAr[i]));\n        };\n      }catch(e){\n        errBack(e);\n        return;\n      };\n      callback.apply(callback, args);\n    };\n    defineFun = function(requireAr, callback){\n      requireFun(requireAr, function(){\n        module.exports = callback.apply(callback, arguments);\n      });\n    };\n    \n  }else if (typeof define == \"function\" && define.amd){ // AMD\n    var _define = define;\n    requireFun = require;\n    \n    defineFun = function(par1, par2){\n      if (par1 instanceof Array){\n        par1.unshift(\"require\");\n      }else{\n        par2 = par1;\n        par1 = [\"require\"];\n      };\n      _define(par1, function(){\n        requireFun = arguments[0];\n        var args = [];\n        for (var i = 1; i < arguments.length; ++i){\n          args.push(arguments[i]);\n        };\n        return par2.apply(par2, args);\n      });\n    };\n    requireFun = require;\n    \n  }else{ // Plain browser env\n    alert(\"not working out!\");\n    \n  };\n  ";;
_V282/*modules*/ = [];
if(! _V30/*par*/["promiseLandModule"]){
_V282/*modules*/["push"]({"varName": "promiseland",
"moduleName": "promiseland"});;
};
;
_V99/*extraModules*/ = _V30/*par*/["extraModules"];
if(_V99/*extraModules*/){
_V283/*extraModulesAr*/ = _V99/*extraModules*/["getArray"]();
for(_V37/*i*/ = 0;(_V37/*i*/ < _V283/*extraModulesAr*/["length"]);++_V37/*i*/){{_V282/*modules*/["push"]({"varName": _V30/*par*/["variableNames"]["get"](_V283/*extraModulesAr*/[_V37/*i*/]["key"]),
"moduleName": _V283/*extraModulesAr*/[_V37/*i*/]["value"]});;
}};
;
};
;
_V281/*resStr*/ += "defineFun([";;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V282/*modules*/["length"]);++_V37/*i*/){{if(_V37/*i*/){
_V281/*resStr*/ += ", ";;
};
;
_V281/*resStr*/ += _V14/*stringEncodeStr*/(_V282/*modules*/[_V37/*i*/]["moduleName"]);;
}};
;
_V281/*resStr*/ += "], function(";;
for(_V37/*i*/ = 0;(_V37/*i*/ < _V282/*modules*/["length"]);++_V37/*i*/){{if(_V37/*i*/){
_V281/*resStr*/ += ", ";;
};
;
_V281/*resStr*/ += _V282/*modules*/[_V37/*i*/]["varName"];;
}};
;
_V281/*resStr*/ += "){\n";;
if(_V30/*par*/["promiseLandModule"]){
_V281/*resStr*/ += "var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;\n";;

}else{
_V281/*resStr*/ += "var __require = requireFun;\n";;
};
;
_V281/*resStr*/ += "\n";;
if((_V30/*par*/["usePromise"] || _V30/*par*/["useRequire"])){
_V281/*resStr*/ += "var __Promise = promiseland.Promise;\n";;
_V281/*resStr*/ += "var Promise = promiseland.Promise;\n";;
};
;
if(_V30/*par*/["useClassSystem"]){
_V281/*resStr*/ += "var classSystem = promiseland.classSystem;\n";;
};
;
if(_V30/*par*/["useRequire"]){
_V281/*resStr*/ += "var __requireFun = function(parModule){\n      var returnPromise = new __Promise();\n      try{__require([parModule], function(m){\n        if (promiseland.isPromiseLandPromisingModule(m)){\n          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});\n        }else{\n          returnPromise.resolve(m);\n        };\n        }, function(err){ returnPromise.reject(err); });\n      }catch(e){ returnPromise.reject(e); };\n      return returnPromise.promise;};\n    ";;
};
;
return _V281/*resStr*/;;
;
});
_V284/*promiselandRequireStr*/ = (function(){
;
return "";;
;
});
_V285/*callbackRequireStr*/ = (function(){
;
return "var Callback = promiseland.Callback;\n";;
;
});
_V286/*loaderEndStr*/ = (function(_V30/*par*/){
;
if(_V30/*par*/["promiseLandModule"]){
return "}; return function(){ return __execute.apply(null, arguments); } });\n})();";;

}else{
return "});\n})();";;
};
;
;
});
_V287/*createHeader*/ = (function(_V30/*par*/){
var _V281/*resStr*/;
var _V288/*loaderParam*/;
;
if(_V15/*_pureCode*/){
return "";;
};
;
_V281/*resStr*/ = "";
_V288/*loaderParam*/ = {"usePromise": _V30/*par*/["usePromise"],
"useRequire": _V30/*par*/["useRequire"],
"useClassSystem": _V30/*par*/["useClassSystem"],
"extraModules": _V30/*par*/["extraModules"],
"variableNames": _V30/*par*/["variableNames"]};
if(_V30/*par*/["makePromiseLandModule"]){
_V288/*loaderParam*/["promiseLandModule"] = true;;
};
;
_V281/*resStr*/ += _V280/*loaderStr*/(_V288/*loaderParam*/);;
_V281/*resStr*/ += _V284/*promiselandRequireStr*/();;
if(_V30/*par*/["useCallback"]){
_V281/*resStr*/ += _V285/*callbackRequireStr*/();;
};
;
_V281/*resStr*/ += (((("if (promiseland._hasModule({ hashStr: \"" + _V30/*par*/["hashStr"]) + "\" })){ return promiseland._getModule(\"") + _V30/*par*/["hashStr"]) + "\"); };\n");;
return _V281/*resStr*/;;
;
});
_V289/*createFooter*/ = (function(_V30/*par*/){
var _V281/*resStr*/;
;
if(_V15/*_pureCode*/){
return "";;
};
;
_V281/*resStr*/ = "";
if(_V30/*par*/["makePromiseLandModule"]){
_V281/*resStr*/ += _V286/*loaderEndStr*/({"promiseLandModule": true});;

}else{
_V281/*resStr*/ += _V286/*loaderEndStr*/({});;
};
;
return _V281/*resStr*/;;
;
});
_V290/*parser*/ = {"parse": (function(_V291/*promiselandCodeStr*/){
var _V39/*p*/;
var _V290/*parser*/;
var _V292/*hashStr*/;
var _V73/*parsed*/;
var _V281/*resStr*/;
var _V184/*cp*/;
var _V26/*res*/;
var _V100/*parsingConfig*/;
var _V293/*makePromiseLandModule*/;
var _V99/*extraModules*/;
var _V294/*variableNames*/;
var _V295/*result*/;
var _V296/*programStr*/;
var _V297/*mainPartStr*/;
;
_V39/*p*/ = new _V17/*promiseland*/["Promise"]();
_V290/*parser*/ = _V7/*_parser*/;
_V292/*hashStr*/ = _V5/*md5*/(_V291/*promiselandCodeStr*/);
_V73/*parsed*/ = _V290/*parser*/["parse"](_V291/*promiselandCodeStr*/);
_V281/*resStr*/ = "";
_V184/*cp*/;
_V26/*res*/ = {};
if((_V73/*parsed*/["length"] === _V56/*undefined*/)){
if((_V73/*parsed*/["type"] == "Program")){
_V100/*parsingConfig*/ = _V73/*parsed*/["config"];
_V184/*cp*/ = new _V49/*CodeParser*/({"toParse": _V73/*parsed*/,
"hashStr": _V292/*hashStr*/,
"parsingConfig": _V100/*parsingConfig*/});;
_V293/*makePromiseLandModule*/ = false;
_V99/*extraModules*/ = _V184/*cp*/["common"]["extraModules"];
_V294/*variableNames*/ = _V184/*cp*/["common"]["variableNames"];
if(_V100/*parsingConfig*/){
_V293/*makePromiseLandModule*/ = _V184/*cp*/["getTemplateProperty"](_V100/*parsingConfig*/, "__promiseLandModule", "Literal");;
if((_V293/*makePromiseLandModule*/ && (_V293/*makePromiseLandModule*/["value"] === true))){
_V293/*makePromiseLandModule*/ = true;;

}else{
_V293/*makePromiseLandModule*/ = false;;
};
;
};
;
_V295/*result*/ = _V184/*cp*/["getResult"]();
_V296/*programStr*/ = ((_V295/*result*/["getPreCodeStr"]() + _V295/*result*/["getCodeStr"]()) + _V295/*result*/["getPostCodeStr"]());
_V26/*res*/["warnings"] = _V184/*cp*/["getWarnings"]();;
_V26/*res*/["errors"] = _V184/*cp*/["getErrors"]();;
_V297/*mainPartStr*/ = "";
if(_V15/*_pureCode*/){
_V281/*resStr*/ = _V296/*programStr*/;;

}else{
if(_V184/*cp*/["programPromiseStr"]){
_V297/*mainPartStr*/ += (((("var " + _V184/*cp*/["programPromiseStr"]) + " = ") + _V184/*cp*/["newPromiseStr"]()) + ";\n");;
_V297/*mainPartStr*/ += (((("promiseland._registerModule({ hashStr: \"" + _V292/*hashStr*/) + "\", \"module\": ") + _V184/*cp*/["programPromiseStr"]) + ", promising: true });\n");;
_V297/*mainPartStr*/ += _V296/*programStr*/;;
_V297/*mainPartStr*/ += (";\nreturn " + _V184/*cp*/["programPromiseStr"]);;

}else{
_V297/*mainPartStr*/ += _V296/*programStr*/;;
_V297/*mainPartStr*/ += (("return " + _V184/*cp*/["resultNameStr"]) + ";\n");;
};
;
_V281/*resStr*/ += _V287/*createHeader*/({"makePromiseLandModule": _V293/*makePromiseLandModule*/,
"extraModules": _V99/*extraModules*/,
"variableNames": _V294/*variableNames*/,
"hashStr": _V292/*hashStr*/,
"usePromise": _V184/*cp*/["common"]["usePromise"],
"useRequire": _V184/*cp*/["common"]["useRequire"],
"useCallback": _V184/*cp*/["common"]["useCallback"],
"useClassSystem": _V184/*cp*/["common"]["useClassSystem"]});;
_V281/*resStr*/ += _V297/*mainPartStr*/;;
_V281/*resStr*/ += _V289/*createFooter*/({"makePromiseLandModule": _V293/*makePromiseLandModule*/});;
};
;

}else{
this["error"](_V73/*parsed*/, _V12/*errorMsg*/["unknownType"]);;
};
;

}else{
_V11/*errorFun*/(_V73/*parsed*/, _V12/*errorMsg*/["severalProgramElements"]);;
};
;
if(! (_V26/*res*/["errors"] && _V26/*res*/["errors"]["length"])){
_V26/*res*/["javascript"] = _V281/*resStr*/;;
};
;
_V39/*p*/["resolve"](_V26/*res*/);;
return _V39/*p*/["promise"];;
;
})};
_V1.resolve(_V290/*parser*/); return;;
_V1.resolve(); return;;
}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;})();
return _V1;
})();
;;
return _V1});
})();