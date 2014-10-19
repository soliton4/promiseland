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
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

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
    if (promiseland._hasModule({ hashStr: "ee95d586949ab7dc2a55bf08b9247524" })){ return promiseland._getModule("ee95d586949ab7dc2a55bf08b9247524"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "ee95d586949ab7dc2a55bf08b9247524", "module": PL$1, promising: true });
var PL$17/*promiseland*/;try{PL$17/*promiseland*/ = promiseland;}catch(e){};
var PL$164/*JSON*/;try{PL$164/*JSON*/ = JSON;}catch(e){};
var PL$177/*Array*/;try{PL$177/*Array*/ = Array;}catch(e){};
var PL$178/*console*/;try{PL$178/*console*/ = console;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$5/*md5*/;
var PL$7/*_parser*/;
var PL$9/*basics*/;
var PL$11/*errorFun*/;
var PL$12/*errorMsg*/;
var PL$13/*_stringEncodeStr*/;
var PL$14/*stringEncodeStr*/;
var PL$15/*_pureCode*/;
var PL$16/*Promise*/;
var PL$18/*classSystem*/;
var PL$19/*statementType*/;
var PL$20/*varType*/;
var PL$21/*globalNewPromiseStr*/;
var PL$22/*Map*/;
var PL$28/*VariableNames*/;
var PL$29/*mixin*/;
var PL$27/*identifierName*/;
var PL$35/*checkIsFunction*/;
var PL$36/*findPromises*/;
var PL$37/*checkPromising*/;
var PL$38/*addExtraToPar*/;
var PL$41/*getExtraFromPar*/;
var PL$42/*_Result*/;
var PL$44/*CodeParser*/;
var PL$277/*loaderStr*/;
var PL$281/*promiselandRequireStr*/;
var PL$282/*callbackRequireStr*/;
var PL$283/*loaderEndStr*/;
var PL$284/*createHeader*/;
var PL$286/*createFooter*/;
var PL$287/*parser*/;
PL$3(function(){;
__requireFun("./md5").then(PL$3(function(PL$6){PL$5/*md5*/ = PL$6;
__requireFun("./_parser").then(PL$3(function(PL$8){PL$7/*_parser*/ = PL$8;
__requireFun("./basics").then(PL$3(function(PL$10){PL$9/*basics*/ = PL$10;
PL$11/*errorFun*/ = PL$9/*basics*/["errorFun"];
PL$12/*errorMsg*/ = PL$9/*basics*/["errorMsg"];
PL$13/*_stringEncodeStr*/ = PL$9/*basics*/["_stringEncodeStr"];
PL$14/*stringEncodeStr*/ = PL$9/*basics*/["stringEncodeStr"];
PL$15/*_pureCode*/ = false;
PL$16/*Promise*/ = PL$17/*promiseland*/["Promise"];
PL$18/*classSystem*/ = PL$17/*promiseland*/["classSystem"];
PL$19/*statementType*/ = {"builtin": true,
"statement": true};
PL$20/*varType*/ = PL$18/*classSystem*/["getBuiltinType"]("var");
PL$21/*globalNewPromiseStr*/ = (function(){
;
return "new __Promise()";;
;
});
PL$22/*Map*/ = PL$17/*promiseland*/["Map"];
PL$28/*VariableNames*/ = (function(){var PL$23/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(PL$24/*par*/){
;
this["givenNames"] = (PL$24/*par*/["givenNames"] || new PL$22/*Map*/());;
this["getUniqueName"] = PL$24/*par*/["getUniqueName"];;
;
}),
"get": (function(PL$25/*name*/){
var PL$26/*n*/;
;
PL$26/*n*/ = PL$27/*identifierName*/(PL$25/*name*/);
if((PL$26/*n*/ === "undefined")){
return PL$26/*n*/;;
};
;
if(! this["givenNames"]["get"](PL$26/*n*/)){
this["givenNames"]["set"](PL$26/*n*/, (((this["getUniqueName"]() + "/*") + PL$26/*n*/) + "*/"));;
};
;
return this["givenNames"]["get"](PL$26/*n*/);;
;
})}, [], PL$23/*inherited*/);
return res; })();PL$28/*VariableNames*/;;
PL$29/*mixin*/ = (function(){
var PL$30/*t*/;
var PL$32/*i*/;
var PL$33/*m*/;
var PL$34/*p*/;
var PL$31/*arguments*/ = arguments;
;
PL$30/*t*/ = PL$31/*arguments*/[0];
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 1;(PL$32/*i*/ < PL$31/*arguments*/["length"]);++PL$32/*i*/){{PL$33/*m*/ = PL$31/*arguments*/[PL$32/*i*/];
for(PL$34/*p*/ in PL$33/*m*/){PL$30/*t*/[PL$34/*p*/] = PL$33/*m*/[PL$34/*p*/];;
};
;
}};
;
return PL$30/*t*/;;
;
});
PL$27/*identifierName*/ = (function(PL$24/*par*/){
;
if((typeof PL$24/*par*/ == "string")){
return PL$24/*par*/;;
};
;
if((PL$24/*par*/["type"] == "Literal")){
return PL$24/*par*/["value"];;
};
;
return PL$24/*par*/["name"];;
;
});
PL$35/*checkIsFunction*/ = (function(PL$24/*par*/){
;
if((((PL$24/*par*/["type"] == "FunctionExpression") || (PL$24/*par*/["type"] == "FunctionDeclaration")) || (PL$24/*par*/["type"] == "MemberFunction"))){
return true;;
};
;
return false;;
;
});
PL$36/*findPromises*/ = (function(PL$24/*par*/){
var PL$32/*i*/;
;
if((! PL$24/*par*/ || (typeof PL$24/*par*/ == "string"))){
return false;;
};
;
if(((PL$24/*par*/["type"] == "UnaryExpression") && ((PL$24/*par*/["operator"] == "*") || (PL$24/*par*/["operator"] == "require")))){
PL$24/*par*/["promising"] = true;;
};
;
if((PL$35/*checkIsFunction*/(PL$24/*par*/) && (PL$24/*par*/["promise"] == "*"))){
PL$24/*par*/["promising"] = true;;
};
;
PL$32/*i*/;
for(PL$32/*i*/ in PL$24/*par*/){if((PL$32/*i*/ == "_extrainfo")){
continue;;
};
;
if((PL$36/*findPromises*/(PL$24/*par*/[PL$32/*i*/]) && ! PL$35/*checkIsFunction*/(PL$24/*par*/[PL$32/*i*/]))){
PL$24/*par*/["promising"] = true;;
};
;
};
;
if(PL$24/*par*/["promising"]){
return true;;
};
;
return false;;
;
});
PL$37/*checkPromising*/ = (function(PL$24/*par*/){
;
if((! PL$24/*par*/ || (typeof PL$24/*par*/ == "string"))){
return false;;
};
;
if((typeof PL$24/*par*/["isPromising"] == "function")){
return PL$24/*par*/["isPromising"]();;
};
;
return (PL$24/*par*/["promising"] || PL$24/*par*/["isPromising"]);;
;
});
PL$38/*addExtraToPar*/ = (function(PL$24/*par*/, PL$39/*property*/, PL$40/*obj*/){
;
if(! PL$24/*par*/["_extrainfo"]){
PL$24/*par*/["_extrainfo"] = {};;
};
;
PL$24/*par*/["_extrainfo"][PL$39/*property*/] = PL$40/*obj*/;;
;
});
PL$41/*getExtraFromPar*/ = (function(PL$24/*par*/, PL$39/*property*/){
;
if(PL$24/*par*/["_extrainfo"]){
return PL$24/*par*/["_extrainfo"][PL$39/*property*/];;
};
;
;
});
__requireFun("./Result").then(PL$3(function(PL$43){PL$42/*_Result*/ = PL$43;
PL$44/*CodeParser*/ = (function(PL$24/*par*/){
var PL$45/*self*/;
var PL$32/*i*/;
var PL$242/*InheritedSystem*/;
;
PL$45/*self*/ = this;
this["toParse"] = PL$24/*par*/["toParse"];;
this["dynamicCode"] = PL$24/*par*/["dynamicCode"];;
this["hashStr"] = PL$24/*par*/["hashStr"];;
if(PL$24/*par*/["_locals"]){
for(PL$32/*i*/ in PL$24/*par*/["_locals"]){this[PL$32/*i*/] = PL$24/*par*/["_locals"][PL$32/*i*/];;
};
;
};
;
if(PL$24/*par*/["common"]){
this["common"] = PL$24/*par*/["common"];;

}else{
this["common"] = {"givenTypeNames": {},
"errors": [],
"uniquebasis": (PL$24/*par*/["uniquebasis"] || {"index": 1}),
"parsingConfig": PL$24/*par*/["parsingConfig"]};;
this["common"]["variableNames"] = new PL$28/*VariableNames*/({"getUniqueName": (function(PL$25/*name*/){
;
return PL$45/*self*/["getUniqueName"](PL$25/*name*/);;
;
})});;
};
;
this["errors"] = this["common"]["errors"];;
this["newPromiseStr"] = (function(){
;
this["common"]["usePromise"] = true;;
return PL$21/*globalNewPromiseStr*/();;
;
});;
this["types"] = PL$29/*mixin*/({}, PL$24/*par*/["types"]);;
if(! this["types"]["var"]){
this["types"]["var"] = {"name": "var",
"type": PL$18/*classSystem*/["getBuiltinType"]("var")};;
};
this["variables"] = PL$29/*mixin*/({}, PL$24/*par*/["variables"]);;
this["algorithmicCode"] = false;;
this["stack"] = (function(PL$46/*parStr*/){
var PL$47/*stackNameStr*/;
;
PL$47/*stackNameStr*/ = ("_stack_" + PL$46/*parStr*/);
if(! this[PL$47/*stackNameStr*/]){
this[PL$47/*stackNameStr*/] = [];;
};
;
this[PL$47/*stackNameStr*/]["push"](this[PL$46/*parStr*/]);;
;
});;
this["unstack"] = (function(PL$46/*parStr*/){
var PL$47/*stackNameStr*/;
;
PL$47/*stackNameStr*/ = ("_stack_" + PL$46/*parStr*/);
this[PL$46/*parStr*/] = this[PL$47/*stackNameStr*/]["pop"]();;
;
});;
this["_start"] = (function(){
var PL$48/*tempRes*/;
;
if(this["toParse"]){
if((this["toParse"]["type"] == "Program")){
PL$48/*tempRes*/ = this["makeCompleteStatement"](this["parseProgram"](this["toParse"]));
PL$48/*tempRes*/["push"](";");;
this["result"] = this["makeCompleteStatement"](PL$48/*tempRes*/);;

}else{
if(PL$35/*checkIsFunction*/(this["toParse"])){
this["functionRes"] = this["parseFunction"](this["toParse"]);;
this["result"] = this["makeCompleteStatement"](this["functionRes"]);;
};
};
;
};
;
;
});;
this["makeCompleteStatement"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["setComplete"]();;
PL$49/*res*/["push"](PL$24/*par*/);;
return PL$49/*res*/;;
;
});;
this["makeCompleteStatementDynamic"] = (function(PL$24/*par*/){
var PL$50/*r*/;
var PL$51/*d*/;
;
PL$50/*r*/ = this["newResult"]();
PL$51/*d*/ = this["newResult"]();
PL$51/*d*/["push"](this["makeCompleteStatement"](PL$24/*par*/), undefined, {"stringEncode": true});;
PL$50/*r*/["push"]("\"");;
PL$50/*r*/["push"](PL$51/*d*/);;
PL$50/*r*/["push"]("\"");;
return PL$50/*r*/;;
;
});;
this["compareTypes"] = (function(PL$52/*par1*/, PL$53/*par2*/){
;
return (PL$52/*par1*/ === PL$53/*par2*/);;
;
});;
this["localVariables"] = {};;
this["addLocalVariable"] = (function(PL$24/*par*/, PL$54/*parParsed*/){
var PL$45/*self*/;
var PL$25/*name*/;
var PL$55/*newType*/;
var PL$56/*existing*/;
;
PL$45/*self*/ = this;
PL$25/*name*/ = PL$27/*identifierName*/(PL$24/*par*/["name"]);
if(this["localVariables"]["hasOwnProperty"](PL$25/*name*/)){
if((! PL$24/*par*/["type"] && ! PL$24/*par*/["typename"])){

}else{
PL$55/*newType*/ = (PL$24/*par*/["type"] || this["getType"](PL$24/*par*/["typename"], PL$54/*parParsed*/));
PL$56/*existing*/ = this["_getVariableType"](this["localVariables"][PL$25/*name*/]);
PL$18/*classSystem*/["definitionPromise"](PL$55/*newType*/)["then"]((function(PL$57/*type1*/){
;
PL$18/*classSystem*/["definitionPromise"](PL$56/*existing*/)["then"]((function(PL$58/*type2*/){
;
if(! PL$18/*classSystem*/["isSameType"](PL$57/*type1*/, PL$58/*type2*/)){
PL$45/*self*/["addError"](PL$54/*parParsed*/, PL$12/*errorMsg*/["variableRedefinition"]);;
};
;
;
}));;
;
}));;
};
;

}else{
this["localVariables"][PL$25/*name*/] = {"typename": PL$24/*par*/["typename"],
"type": PL$24/*par*/["type"],
"name": PL$25/*name*/};;
if((! PL$24/*par*/["typename"] && ! PL$24/*par*/["type"])){
this["localVariables"][PL$25/*name*/]["type"] = this["getProvisionalType"](PL$54/*parParsed*/);;
this["localVariables"][PL$25/*name*/]["needsResolving"] = true;;
};
;
};
;
if(PL$24/*par*/["parameter"]){
this["localVariables"][PL$25/*name*/]["parameter"] = PL$24/*par*/["parameter"];;
};
;
if(PL$24/*par*/["isFunction"]){
this["localVariables"][PL$25/*name*/]["function"] = PL$24/*par*/["function"];;
};
;
this["variables"][PL$25/*name*/] = this["localVariables"][PL$25/*name*/];;
;
});;
this["addLocalVariableTemporary"] = (function(PL$24/*par*/, PL$54/*parParsed*/){
var PL$45/*self*/;
var PL$25/*name*/;
var PL$59/*originalEntry*/;
var PL$60/*entry*/;
var PL$61/*resPs*/;
;
PL$45/*self*/ = this;
PL$25/*name*/ = PL$27/*identifierName*/(PL$24/*par*/["name"]);
PL$59/*originalEntry*/;
if(this["variables"]["hasOwnProperty"](PL$25/*name*/)){
PL$59/*originalEntry*/ = this["variables"][PL$25/*name*/];;
};
;
PL$60/*entry*/ = {"typename": PL$24/*par*/["typename"],
"type": PL$24/*par*/["type"],
"name": PL$25/*name*/};
if((! PL$24/*par*/["typename"] && ! PL$24/*par*/["type"])){
PL$60/*entry*/["type"] = this["getProvisionalType"](PL$54/*parParsed*/);;
PL$60/*entry*/["needsResolving"] = true;;
};
;
if(PL$24/*par*/["parameter"]){
PL$60/*entry*/["parameter"] = PL$24/*par*/["parameter"];;
};
;
if(PL$24/*par*/["isFunction"]){
PL$60/*entry*/["function"] = PL$24/*par*/["function"];;
};
;
PL$60/*entry*/["temporary"] = true;;
this["variables"][PL$25/*name*/] = PL$60/*entry*/;;
PL$61/*resPs*/ = new PL$16/*Promise*/();
(function(){
var PL$62 = new __Promise();
var PL$64 = function(code){ return function(res){ try{code(res);}catch(e){ PL$62.reject(e); }; }; };
var PL$65 = function(e){ PL$62.reject(e); };
var PL$67/*this*/ = this;
PL$64(function(){;
PL$61/*resPs*/.then(PL$64(function(PL$66){PL$66;;
if(PL$59/*originalEntry*/){
PL$67/*this*/["variables"][PL$25/*name*/] = PL$59/*originalEntry*/;;

}else{
delete PL$67/*this*/["variables"][PL$25/*name*/];;
};
;
PL$62.resolve(); return;;
}), PL$65);
;})();
return PL$62;
})();;
return PL$61/*resPs*/;;
;
});;
this["resolveFunctionType"] = (function(PL$24/*par*/, PL$68/*parsed*/){
var PL$25/*name*/;
var PL$60/*entry*/;
var PL$30/*t*/;
;
PL$25/*name*/ = PL$27/*identifierName*/(PL$24/*par*/["name"]);
PL$60/*entry*/ = this["localVariables"][PL$25/*name*/];
if(PL$60/*entry*/["needsResolving"]){
PL$60/*entry*/["needsResolving"] = false;;
PL$30/*t*/ = PL$60/*entry*/["type"];
PL$60/*entry*/["type"] = PL$24/*par*/["type"];;
this["resolveProvisional"](PL$30/*t*/, PL$24/*par*/["type"]);;

}else{
this["addLocalVariable"]({"name": PL$24/*par*/["name"],
"type": PL$24/*par*/["type"]}, PL$68/*parsed*/);;
};
;
;
});;
this["getProvisionalType"] = (function(PL$54/*parParsed*/){
var PL$69/*type*/;
var PL$70/*ps*/;
;
if(! PL$54/*parParsed*/){
PL$11/*errorFun*/({}, PL$12/*errorMsg*/["internalParserInfoMissing"]);;
};
;
PL$69/*type*/ = PL$18/*classSystem*/["_createProvisionalClass"]();
PL$70/*ps*/ = this["addError"](PL$54/*parParsed*/, PL$12/*errorMsg*/["unresolvedType"]);
PL$18/*classSystem*/["definitionPromise"](PL$69/*type*/)["then"]((function(){
;
PL$70/*ps*/["resolve"]();;
;
}));;
return PL$69/*type*/;;
;
});;
this["resolveProvisional"] = (function(PL$71/*parType*/, PL$72/*parResult*/){
;
return PL$18/*classSystem*/["_resolveProvisional"](PL$71/*parType*/, PL$72/*parResult*/);;
;
});;
this["_getVariableType"] = (function(PL$73/*parEntry*/){
;
if(PL$73/*parEntry*/["type"]){
return PL$73/*parEntry*/["type"];;
};
;
return this["getType"](PL$73/*parEntry*/["typename"]);;
;
});;
this["getVariableType"] = (function(PL$74/*parName*/, PL$24/*par*/){
var PL$25/*name*/;
var PL$60/*entry*/;
;
PL$25/*name*/ = PL$27/*identifierName*/(PL$74/*parName*/);
this["_addUsedVariable"](PL$25/*name*/);;
if(this["variables"]["hasOwnProperty"](PL$25/*name*/)){
PL$60/*entry*/ = this["variables"][PL$25/*name*/];
return this["_getVariableType"](PL$60/*entry*/);;
};
;
return this["getType"]("var");;
;
});;
this["usedVariables"] = {};;
this["_addUsedVariable"] = (function(PL$24/*par*/){
var PL$25/*name*/;
;
PL$25/*name*/ = PL$27/*identifierName*/(PL$24/*par*/);
if((PL$25/*name*/ === "undefined")){
return;;
};
;
if(this["variables"]["hasOwnProperty"](PL$25/*name*/)){
if(this["variables"][PL$25/*name*/]["temporary"]){
return;;
};
;
};
;
this["usedVariables"][PL$25/*name*/] = true;;
;
});;
this["_getUsedVairables"] = (function(){
;
return this["usedVariables"];;
;
});;
this["functionsAr"] = [];;
this["addFunction"] = (function(PL$49/*res*/, PL$25/*name*/, PL$24/*par*/){
;
this["resolveFunctionType"]({"name": PL$27/*identifierName*/(PL$25/*name*/),
"type": PL$49/*res*/["getType"]()}, PL$24/*par*/);;
this["functionsAr"]["push"]({"res": PL$49/*res*/,
"name": PL$25/*name*/});;
;
});;
this["_getErrors"] = (function(PL$75/*parWarning*/){
var PL$76/*a*/;
var PL$32/*i*/;
;
PL$76/*a*/ = [];
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < this["errors"]["length"]);++PL$32/*i*/){{if(this["errors"][PL$32/*i*/]["valid"]){
if((PL$75/*parWarning*/ ? this["errors"][PL$32/*i*/]["warning"] : ! this["errors"][PL$32/*i*/]["warning"])){
PL$76/*a*/["push"](this["errors"][PL$32/*i*/]);;
};
;
};
;
}};
;
return PL$76/*a*/;;
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
this["getWarningFun"] = (function(PL$24/*par*/){
var PL$45/*self*/;
;
PL$45/*self*/ = this;
return (function(PL$77/*err*/){
;
PL$45/*self*/["warning"](PL$24/*par*/, PL$77/*err*/);;
;
});;
;
});;
this["warning"] = (function(PL$24/*par*/, PL$77/*err*/){
;
if(! PL$24/*par*/["line"]){
PL$11/*errorFun*/({}, PL$12/*errorMsg*/["internalParserInfoMissing"]);;
};
;
this["addWarning"](PL$24/*par*/, PL$77/*err*/);;
;
});;
this["error"] = (function(PL$24/*par*/, PL$77/*err*/){
;
this["_addError"](PL$24/*par*/, PL$77/*err*/);;
PL$11/*errorFun*/(PL$24/*par*/, PL$77/*err*/);;
;
});;
this["addError"] = (function(PL$24/*par*/, PL$77/*err*/){
;
return this["_addError"](PL$24/*par*/, PL$77/*err*/);;
;
});;
this["addWarning"] = (function(PL$24/*par*/, PL$77/*err*/){
;
return this["_addError"](PL$24/*par*/, PL$77/*err*/, true);;
;
});;
this["_addError"] = (function(PL$24/*par*/, PL$77/*err*/, PL$78/*warning*/){
var PL$60/*entry*/;
var PL$70/*ps*/;
;
PL$60/*entry*/ = {"par": PL$24/*par*/,
"line": PL$24/*par*/["line"],
"column": PL$24/*par*/["column"],
"msg": ((PL$77/*err*/["id"] + ": ") + PL$77/*err*/["msg"]),
"valid": true,
"warning": PL$78/*warning*/};
this["errors"]["push"](PL$60/*entry*/);;
PL$70/*ps*/ = new PL$16/*Promise*/();
PL$70/*ps*/["then"]((function(){
;
PL$60/*entry*/["valid"] = false;;
;
}));;
return PL$70/*ps*/;;
;
});;
this["runtimeError"] = (function(PL$24/*par*/, PL$53/*par2*/){
var PL$70/*ps*/;
var PL$49/*res*/;
;
PL$70/*ps*/ = this["addWarning"](PL$24/*par*/, PL$53/*par2*/);
PL$49/*res*/ = this["runtimeErrorNoWarning"](PL$53/*par2*/);
PL$49/*res*/["setPromise"](PL$70/*ps*/);;
return PL$49/*res*/;;
;
});;
this["runtimeErrorNoWarning"] = (function(PL$53/*par2*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"]((((("(function(){ throw { id:" + PL$53/*par2*/["id"]) + ", msg: ") + PL$14/*stringEncodeStr*/(PL$53/*par2*/["msg"])) + " } })()"));;
return PL$49/*res*/;;
;
});;
this["getUniqueName"] = (function(PL$25/*name*/){
var PL$79/*retStr*/;
;
PL$79/*retStr*/ = ("PL$" + this["common"]["uniquebasis"]["index"]++);
if(PL$25/*name*/){
PL$79/*retStr*/ += (("/*" + PL$25/*name*/) + "*/");;
};
;
return PL$79/*retStr*/;;
;
});;
this["getUniqueTypeMacro"] = (function(PL$25/*name*/){
var PL$80/*uniqueStr*/;
var PL$49/*res*/;
;
PL$80/*uniqueStr*/ = this["getUniqueName"]();
PL$49/*res*/ = (((("/*\n'''\"\"\" " + PL$80/*uniqueStr*/) + " ") + (PL$25/*name*/ || "")) + " start */");
PL$49/*res*/ += this["runtimeErrorNoWarning"](PL$12/*errorMsg*/["failedToDetermineType"]);;
PL$49/*res*/ += (((("/* " + PL$80/*uniqueStr*/) + " ") + (PL$25/*name*/ || "")) + " end */");;
return PL$49/*res*/;;
;
});;
this["getVariableName"] = (function(PL$25/*name*/){
;
return this["common"]["variableNames"]["get"](PL$25/*name*/);;
;
});;
this["renderType"] = (function(PL$71/*parType*/, PL$54/*parParsed*/){
var PL$49/*res*/;
var PL$45/*self*/;
var PL$81/*typeExpression*/;
var PL$82/*renderTypeName*/;
var PL$85/*errPs*/;
var PL$25/*name*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["setType"]("var");;
PL$45/*self*/ = this;
PL$81/*typeExpression*/;
PL$82/*renderTypeName*/ = (function(PL$83/*parType1*/, PL$84/*parType2*/){
var PL$32/*i*/;
var PL$25/*name*/;
;
PL$32/*i*/;
for(PL$32/*i*/ in PL$45/*self*/["types"]){if(((PL$45/*self*/["types"][PL$32/*i*/]["type"] === PL$83/*parType1*/) || (PL$45/*self*/["types"][PL$32/*i*/]["type"] === PL$84/*parType2*/))){
if(PL$45/*self*/["isVar"](PL$45/*self*/["types"][PL$32/*i*/]["type"])){
PL$45/*self*/["common"]["useClassSystem"] = true;;
return "classSystem.getBuiltinType(\"var\")";;
};
;
PL$25/*name*/ = PL$32/*i*/;
if(! PL$45/*self*/["common"]["givenTypeNames"][PL$25/*name*/]){
PL$45/*self*/["common"]["givenTypeNames"][PL$25/*name*/] = (((PL$45/*self*/["getUniqueName"]() + "/*type:") + PL$25/*name*/) + "*/");;
};
;
return PL$45/*self*/["common"]["givenTypeNames"][PL$25/*name*/];;
};
;
};
;
;
});
if((typeof PL$71/*parType*/ == "function")){
PL$85/*errPs*/ = this["addError"](PL$54/*parParsed*/, PL$12/*errorMsg*/["internalMissingType"]);
PL$18/*classSystem*/["readyPromise"](PL$71/*parType*/)["then"]((function(PL$86/*resolvedType*/){
var PL$87/*replace*/;
var PL$81/*typeExpression*/;
var PL$32/*i*/;
var PL$88/*l*/;
;
PL$87/*replace*/ = PL$45/*self*/["newResult"]();
PL$81/*typeExpression*/ = PL$82/*renderTypeName*/(PL$71/*parType*/, PL$86/*resolvedType*/);
if(PL$81/*typeExpression*/){
PL$87/*replace*/["push"](PL$81/*typeExpression*/);;
PL$49/*res*/["push"](PL$87/*replace*/);;
PL$85/*errPs*/["resolve"]();;
return;;
};
;
if(PL$18/*classSystem*/["isFunctionType"](PL$86/*resolvedType*/)){
PL$32/*i*/;
PL$45/*self*/["common"]["useClassSystem"] = true;;
PL$87/*replace*/["push"]("(classSystem.createFunctionType({ \"return\": ");;
PL$87/*replace*/["push"](PL$45/*self*/["renderType"](PL$45/*self*/["getClassFromTemporaryTracked"](PL$45/*self*/["getFunctionReturnType"](PL$86/*resolvedType*/, PL$54/*parParsed*/), PL$54/*parParsed*/), PL$54/*parParsed*/));;
PL$87/*replace*/["push"](", arguments: [");;
PL$88/*l*/ = PL$45/*self*/["getFunctionArgumentCount"](PL$86/*resolvedType*/);
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{if(PL$32/*i*/){
PL$87/*replace*/["push"](", ");;
};
;
PL$87/*replace*/["push"](PL$45/*self*/["renderType"](PL$45/*self*/["getClassFromTemporaryTracked"](PL$45/*self*/["getFunctionArgumentType"](PL$86/*resolvedType*/, PL$32/*i*/, PL$54/*parParsed*/), PL$54/*parParsed*/), PL$54/*parParsed*/));;
}};
;
PL$87/*replace*/["push"]("]}))");;
PL$49/*res*/["push"](PL$87/*replace*/);;
PL$85/*errPs*/["resolve"]();;
return;;
};
;
;
}));;
return PL$49/*res*/;;

}else{
if(PL$71/*parType*/["isDynamic"]){
PL$81/*typeExpression*/ = PL$82/*renderTypeName*/(PL$71/*parType*/, PL$71/*parType*/);;
if(PL$81/*typeExpression*/){
PL$49/*res*/["push"](PL$81/*typeExpression*/);;

}else{
PL$49/*res*/["push"](this["addError"](PL$54/*parParsed*/, PL$12/*errorMsg*/["internalMissingType"]));;
};
;

}else{
PL$25/*name*/ = PL$27/*identifierName*/(PL$71/*parType*/);
PL$71/*parType*/ = this["getType"](PL$25/*name*/, PL$54/*parParsed*/);;
PL$81/*typeExpression*/ = PL$82/*renderTypeName*/(PL$71/*parType*/, PL$71/*parType*/);;
if(PL$81/*typeExpression*/){
PL$49/*res*/["push"](PL$81/*typeExpression*/);;

}else{
PL$49/*res*/["push"](this["addError"](PL$54/*parParsed*/, PL$12/*errorMsg*/["internalMissingType"]));;
};
;
};
};
;
return PL$49/*res*/;;
;
});;
this["newInstance"] = (function(PL$89/*element*/, PL$90/*extras*/){
var PL$91/*param*/;
var PL$32/*i*/;
var PL$92/*instance*/;
;
PL$91/*param*/ = {"toParse": PL$89/*element*/,
"common": this["common"],
"hashStr": this["hashStr"],
"types": this["types"],
"variables": this["variables"],
"_locals": {"inheritedSystem": this["inheritedSystem"],
"isClassObject": this["isClassObject"]}};
if(PL$90/*extras*/){
PL$32/*i*/;
for(PL$32/*i*/ in PL$90/*extras*/){PL$91/*param*/[PL$32/*i*/] = PL$90/*extras*/[PL$32/*i*/];;
};
;
};
;
PL$92/*instance*/ = new PL$44/*CodeParser*/(PL$91/*param*/);
return PL$92/*instance*/;;
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
this["newResult"] = (function(PL$24/*par*/){
var PL$50/*r*/;
;
PL$50/*r*/ = new PL$42/*_Result*/({"cp": this});
if(PL$24/*par*/){
PL$50/*r*/["push"](PL$24/*par*/);;
};
;
return PL$50/*r*/;;
;
});;
this["parseProgram"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$93/*extraRes*/;
var PL$94/*extraModules*/;
var PL$95/*parsingConfig*/;
var PL$96/*reqireProperty*/;
var PL$97/*functionStatement*/;
var PL$25/*name*/;
;
PL$36/*findPromises*/(PL$24/*par*/);;
PL$49/*res*/ = this["newResult"]();
PL$93/*extraRes*/ = this["newResult"]();
PL$93/*extraRes*/["push"]("\"use strict\";\n");;
PL$38/*addExtraToPar*/(PL$24/*par*/, "addFront", PL$93/*extraRes*/);;
PL$94/*extraModules*/ = new PL$22/*Map*/();
PL$95/*parsingConfig*/ = this["common"]["parsingConfig"];
if(PL$95/*parsingConfig*/){
PL$96/*reqireProperty*/ = this["getTemplateProperty"](PL$95/*parsingConfig*/, "require", "ObjectExpression");
if(PL$96/*reqireProperty*/){
PL$94/*extraModules*/ = this["getTemplateRequireProperty"](PL$96/*reqireProperty*/);;
};
;
};
;
this["common"]["extraModules"] = PL$94/*extraModules*/;;
if(PL$37/*checkPromising*/(PL$24/*par*/)){
this["programPromiseStr"] = this["getUniqueName"]();;
};
;
this["resultNameStr"] = this["getUniqueName"]();;
PL$97/*functionStatement*/ = this["_parseFunction"](PL$24/*par*/, {"promiseName": this["programPromiseStr"],
"noUntrack": true});
PL$25/*name*/;
for(PL$25/*name*/ in this["usedVariables"]){if((this["usedVariables"][PL$25/*name*/] === true)){
if((PL$25/*name*/ == "Promise")){
this["common"]["usePromise"] = true;;
};
;
if((PL$25/*name*/ == "Callback")){
this["common"]["useCallback"] = true;;
};
;
if(PL$94/*extraModules*/["get"](PL$25/*name*/)){
continue;;
};
;
PL$49/*res*/["push"]((("var " + this["getVariableName"](PL$25/*name*/)) + ";"));;
PL$49/*res*/["push"]("try{");;
PL$49/*res*/["push"](this["getVariableName"](PL$25/*name*/));;
PL$49/*res*/["push"](" = ");;
PL$49/*res*/["push"](PL$25/*name*/);;
PL$49/*res*/["push"](";}catch(e){};\n");;
};
;
};
;
PL$49/*res*/["push"]((("var " + this["resultNameStr"]) + " = ("));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$97/*functionStatement*/));;
PL$49/*res*/["push"](")();\n");;
return PL$49/*res*/;;
;
});;
this["parseFunction"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
this["stack"]("isFunction");;
this["isFunction"] = true;;
PL$49/*res*/ = this["_parseFunction"](PL$24/*par*/);
this["unstack"]("isFunction");;
return PL$49/*res*/;;
;
});;
this["getTemplateProperty"] = (function(PL$98/*parTemplate*/, PL$99/*parProperty*/, PL$100/*mandatoryType*/){
var PL$32/*i*/;
var PL$34/*p*/;
;
PL$32/*i*/ = 0;
for(PL$32/*i*/;(PL$32/*i*/ < PL$98/*parTemplate*/["properties"]["length"]);++PL$32/*i*/){{PL$34/*p*/ = PL$98/*parTemplate*/["properties"][PL$32/*i*/];
if(((PL$34/*p*/["kind"] == "init") && (PL$27/*identifierName*/(PL$34/*p*/["key"]) == PL$99/*parProperty*/))){
if(PL$100/*mandatoryType*/){
if((PL$34/*p*/["value"]["type"] != PL$100/*mandatoryType*/)){
this["error"](PL$34/*p*/["value"], PL$12/*errorMsg*/["templateSyntaxError"]);;
};
;
};
;
return PL$34/*p*/["value"];;
};
;
}};
;
;
});;
this["getTemplateRequireProperty"] = (function(PL$98/*parTemplate*/){
var PL$32/*i*/;
var PL$49/*res*/;
var PL$34/*p*/;
var PL$101/*key*/;
;
PL$32/*i*/ = 0;
PL$49/*res*/ = new PL$22/*Map*/();
for(PL$32/*i*/;(PL$32/*i*/ < PL$98/*parTemplate*/["properties"]["length"]);++PL$32/*i*/){{PL$34/*p*/ = PL$98/*parTemplate*/["properties"][PL$32/*i*/];
if((PL$34/*p*/["kind"] == "init")){
PL$101/*key*/ = PL$27/*identifierName*/(PL$34/*p*/["key"]);
if((PL$34/*p*/["value"]["type"] != "Literal")){
this["error"](PL$34/*p*/["value"], PL$12/*errorMsg*/["templateSyntaxError"]);;
};
;
PL$49/*res*/["set"](PL$101/*key*/, PL$34/*p*/["value"]["value"]);;
};
;
}};
;
return PL$49/*res*/;;
;
});;
this["createExtraDynamicType"] = (function(PL$71/*parType*/, PL$24/*par*/, PL$54/*parParsed*/){
var PL$25/*name*/;
var PL$60/*entry*/;
var PL$49/*res*/;
var PL$55/*newType*/;
;
PL$25/*name*/;
if(PL$24/*par*/["property"]){
PL$25/*name*/ = ((this["getTypeName"](PL$71/*parType*/, PL$54/*parParsed*/) + "::property::") + PL$24/*par*/["property"]);;

}else{
if(PL$24/*par*/["temporaryTracked"]){
PL$25/*name*/ = (this["getTypeName"](PL$71/*parType*/, PL$54/*parParsed*/) + "::temporaryTracked");;

}else{
if(PL$24/*par*/["temporaryTrackedResolved"]){
PL$25/*name*/ = (this["getTypeName"](PL$71/*parType*/, PL$54/*parParsed*/) + "::temporaryTrackedResolved");;

}else{
this["error"](PL$12/*errorMsg*/["internalMissingTypeProperty"]);;
};
};
};
;
if(! PL$71/*parType*/["extraTypes"]){
PL$71/*parType*/["extraTypes"] = [];;
};
;
if(! PL$71/*parType*/["extraTypeMap"]){
PL$71/*parType*/["extraTypeMap"] = {};;
};
;
if(PL$71/*parType*/["extraTypeMap"]["hasOwnProperty"](PL$25/*name*/)){
return PL$71/*parType*/["extraTypeMap"][PL$25/*name*/];;
};
;
PL$60/*entry*/ = {"res": this["newResult"]()};
PL$71/*parType*/["extraTypes"]["push"](PL$60/*entry*/);;
PL$49/*res*/ = PL$60/*entry*/["res"];
this["addType"]({"name": PL$25/*name*/,
"dynamic": true}, PL$54/*parParsed*/);;
PL$49/*res*/["push"]("var /*extratyperender*/ ");;
PL$49/*res*/["push"](this["renderType"](PL$25/*name*/));;
PL$49/*res*/["push"](" = ");;
this["common"]["useClassSystem"] = true;;
if(PL$24/*par*/["property"]){
if((PL$24/*par*/["property"] == "constructor")){
PL$49/*res*/["push"]("classSystem.getConstructorType({\"type\":");;

}else{
PL$49/*res*/["push"]("classSystem.getPropertyType({\"type\":");;
};
;
PL$49/*res*/["push"](this["renderType"](PL$71/*parType*/));;
PL$49/*res*/["push"]((", property: " + PL$14/*stringEncodeStr*/(PL$24/*par*/["property"])));;
PL$49/*res*/["push"]("});\n");;

}else{
if(PL$24/*par*/["temporaryTracked"]){
PL$49/*res*/["push"]("classSystem._createTemporaryTrackedClass(");;
PL$49/*res*/["push"](this["renderType"](PL$71/*parType*/));;
PL$49/*res*/["push"](");\n");;

}else{
if(PL$24/*par*/["temporaryTrackedResolved"]){
PL$49/*res*/["push"]("classSystem.getClassFromTemporaryTracked(");;
PL$49/*res*/["push"](this["renderType"](PL$71/*parType*/));;
PL$49/*res*/["push"](");\n");;
};
};
};
;
PL$55/*newType*/ = this["getType"](PL$25/*name*/, PL$54/*parParsed*/);
PL$60/*entry*/["type"] = PL$55/*newType*/;;
PL$71/*parType*/["extraTypeMap"][PL$25/*name*/] = PL$55/*newType*/;;
return PL$55/*newType*/;;
;
});;
this["getFunctionType"] = (function(PL$24/*par*/){
var PL$102/*isTyped*/;
var PL$103/*functionTypeParam*/;
var PL$88/*l*/;
var PL$104/*tempTypename*/;
;
PL$102/*isTyped*/ = false;
PL$103/*functionTypeParam*/ = {"return": this["getType"]("var"),
"arguments": []};
if(PL$24/*par*/["returnTypename"]){
PL$102/*isTyped*/ = true;;
PL$103/*functionTypeParam*/["return"] = this["getType"](PL$24/*par*/["returnTypename"]);;
};
;
if((PL$24/*par*/["params"] && PL$24/*par*/["params"]["length"])){
PL$32/*i*/ = 0;;
PL$88/*l*/ = PL$24/*par*/["params"]["length"];
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{PL$104/*tempTypename*/ = PL$27/*identifierName*/((PL$24/*par*/["params"][PL$32/*i*/]["typename"] || "var"));
PL$103/*functionTypeParam*/["arguments"]["push"](this["getType"](PL$104/*tempTypename*/, PL$24/*par*/));;
if((PL$104/*tempTypename*/ != "var")){
PL$102/*isTyped*/ = true;;
};
;
}};
;
};
;
if(PL$102/*isTyped*/){
return this["createFunctionType"](PL$103/*functionTypeParam*/);;
};
;
return this["getType"]("var");;
;
});;
this["createFunctionType"] = (function(PL$24/*par*/){
var PL$105/*isDynamic*/;
var PL$32/*i*/;
;
PL$105/*isDynamic*/ = false;
if(PL$24/*par*/["return"]["isDynamic"]){
PL$105/*isDynamic*/ = true;;
};
;
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$24/*par*/["arguments"]["length"]);++PL$32/*i*/){{if(PL$24/*par*/["arguments"][PL$32/*i*/]["isDynamic"]){
PL$105/*isDynamic*/ = true;;
};
;
}};
;
if(PL$105/*isDynamic*/){
debugger;

}else{
return PL$18/*classSystem*/["createFunctionType"](PL$24/*par*/);;
};
;
;
});;
this["addBeforeReturn"] = (function(PL$106/*parRes*/, PL$107/*parCondition*/){
var PL$108/*condition*/;
var PL$109/*conditional*/;
var PL$110/*frontRes*/;
var PL$111/*endRes*/;
;
PL$108/*condition*/ = PL$107/*parCondition*/;
if((PL$107/*parCondition*/ === undefined)){
PL$108/*condition*/ = true;;
};
;
PL$109/*conditional*/ = this["createConditionalCode"](PL$106/*parRes*/);
PL$109/*conditional*/["addCondition"](PL$108/*condition*/);;
this["runBeforeReturnRes"]["push"](PL$109/*conditional*/["res"]);;
if(! this["beforeReturnExists"]){
this["beforeReturnExists"] = true;;
PL$110/*frontRes*/ = this["newResult"]();
PL$111/*endRes*/ = this["newResult"]();
this["beforeReturnFrontConditional"] = this["createConditionalCode"](PL$110/*frontRes*/);;
this["beforeReturnEndConditional"] = this["createConditionalCode"](PL$111/*endRes*/);;
this["beforeReturnExistsPs"]["resolve"](this["runBeforeReturnRes"]);;
if(! this["promising"]){
PL$110/*frontRes*/["push"]("try{");;
this["additionalCodeFrontRes"]["push"](this["beforeReturnFrontConditional"]["res"]);;
PL$111/*endRes*/["push"]("}catch(e){");;
PL$111/*endRes*/["push"](this["runBeforeReturnRes"]);;
PL$111/*endRes*/["push"]("throw e};");;
this["additionalCodeEndRes"]["push"](this["beforeReturnEndConditional"]["res"]);;
};
;
};
;
this["beforeReturnFrontConditional"]["addCondition"](PL$108/*condition*/);;
this["beforeReturnEndConditional"]["addCondition"](PL$108/*condition*/);;
this["addBeforeReturnCondition"](PL$108/*condition*/);;
;
});;
this["beforeReturnConditions"] = [];;
this["addBeforeReturnCondition"] = (function(PL$107/*parCondition*/){
var PL$32/*i*/;
;
this["beforeReturnConditions"]["push"](PL$107/*parCondition*/);;
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < this["beforeReturnConditionFuns"]["length"]);++PL$32/*i*/){{this["beforeReturnConditionFuns"][PL$32/*i*/](PL$107/*parCondition*/);;
}};
;
;
});;
this["beforeReturnConditionFuns"] = [];;
this["addBeforeReturnConditionFun"] = (function(PL$112/*parFun*/){
var PL$32/*i*/;
;
this["beforeReturnConditionFuns"]["push"](PL$112/*parFun*/);;
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < this["beforeReturnConditions"]["length"]);++PL$32/*i*/){{PL$112/*parFun*/(this["beforeReturnConditions"][PL$32/*i*/]);;
}};
;
;
});;
this["getReturnCode"] = (function(PL$24/*par*/){
var PL$45/*self*/;
var PL$49/*res*/;
var PL$113/*falseRes*/;
var PL$114/*beforeReturnCode*/;
var PL$115/*newRes*/;
var PL$116/*valueRes*/;
var PL$117/*trueRes*/;
var PL$109/*conditional*/;
;
PL$45/*self*/ = this;
PL$49/*res*/ = this["newResult"]();
if(this["promising"]){
PL$49/*res*/["push"]((this["returnPromise"] + ".resolve("));;
if(PL$24/*par*/["value"]){
PL$49/*res*/["push"](PL$24/*par*/["value"]);;
};
;
PL$49/*res*/["push"]("); return;");;

}else{
if((PL$24/*par*/["return"] || PL$24/*par*/["value"])){
PL$49/*res*/["push"]("return");;
};
;
if(PL$24/*par*/["value"]){
PL$49/*res*/["push"](" ");;
PL$49/*res*/["push"](PL$24/*par*/["value"]);;
};
;
if((PL$24/*par*/["return"] || PL$24/*par*/["value"])){
PL$49/*res*/["push"](";");;
};
;
};
;
PL$113/*falseRes*/ = PL$49/*res*/;
PL$114/*beforeReturnCode*/ = this["runBeforeReturnRes"];
PL$115/*newRes*/ = PL$45/*self*/["newResult"]();
PL$116/*valueRes*/ = PL$45/*self*/["newResult"]();
if(PL$24/*par*/["value"]){
PL$116/*valueRes*/["push"]("(function(ret){ ");;
PL$116/*valueRes*/["push"](PL$114/*beforeReturnCode*/);;
PL$116/*valueRes*/["push"]("return ret; })(");;
PL$116/*valueRes*/["push"](PL$24/*par*/["value"]);;
PL$116/*valueRes*/["push"](")");;
};
;
if(PL$45/*self*/["promising"]){
if(PL$24/*par*/["value"]){
PL$115/*newRes*/["push"]((PL$45/*self*/["returnPromise"] + ".resolve("));;
PL$115/*newRes*/["push"](PL$116/*valueRes*/);;
PL$115/*newRes*/["push"]("); return;");;

}else{
PL$115/*newRes*/["push"](PL$114/*beforeReturnCode*/);;
PL$115/*newRes*/["push"]((PL$45/*self*/["returnPromise"] + ".resolve("));;
PL$115/*newRes*/["push"]("); return;");;
};
;

}else{
if(PL$24/*par*/["value"]){
PL$115/*newRes*/["push"]("return ");;
PL$115/*newRes*/["push"](PL$116/*valueRes*/);;
PL$115/*newRes*/["push"](";");;

}else{
PL$115/*newRes*/["push"](PL$114/*beforeReturnCode*/);;
if(PL$24/*par*/["return"]){
PL$115/*newRes*/["push"]("return;");;
};
;
};
;
};
;
PL$117/*trueRes*/ = PL$115/*newRes*/;
PL$109/*conditional*/ = this["createConditionalCode"](PL$117/*trueRes*/, PL$113/*falseRes*/);
this["addBeforeReturnConditionFun"]((function(PL$118/*con*/){
;
PL$109/*conditional*/["addCondition"](PL$118/*con*/);;
;
}));;
return PL$109/*conditional*/["res"];;
;
});;
this["_parseFunction"] = (function(PL$24/*par*/, PL$119/*parJsn*/){
var PL$120/*parGivenPromiseNameStr*/;
var PL$121/*noUntrack*/;
var PL$122/*hasFrameInfo*/;
var PL$123/*runRemote*/;
var PL$124/*runExclusive*/;
var PL$32/*i*/;
var PL$125/*typename*/;
var PL$54/*parParsed*/;
var PL$126/*funClosure*/;
var PL$45/*self*/;
var PL$127/*hasName*/;
var PL$128/*nameStr*/;
var PL$129/*templateTypesAr*/;
var PL$130/*templateTypes*/;
var PL$131/*typeVarInit*/;
var PL$34/*p*/;
var PL$132/*extraTypesRes*/;
var PL$49/*res*/;
var PL$133/*funRes*/;
var PL$88/*l*/;
var PL$134/*classesRes*/;
var PL$135/*addFront*/;
var PL$136/*b*/;
var PL$137/*extraPar*/;
var PL$138/*block*/;
var PL$139/*varname*/;
var PL$69/*type*/;
var PL$140/*completeFun*/;
var PL$141/*returnTypePromiseCheck*/;
var PL$142/*handleExtras*/;
var PL$143/*dt*/;
var PL$144/*thisFunType*/;
var PL$145/*uniqueNameStr*/;
var PL$146/*remoteClosure*/;
var PL$147/*finalResult*/;
;
PL$119/*parJsn*/ = (PL$119/*parJsn*/ || {});;
PL$120/*parGivenPromiseNameStr*/ = PL$119/*parJsn*/["promiseName"];
PL$121/*noUntrack*/ = PL$119/*parJsn*/["noUntrack"];
PL$122/*hasFrameInfo*/ = false;
PL$123/*runRemote*/ = false;
PL$124/*runExclusive*/ = false;
PL$32/*i*/ = 0;
PL$125/*typename*/;
PL$54/*parParsed*/ = PL$24/*par*/;
PL$126/*funClosure*/;
PL$45/*self*/ = this;
PL$127/*hasName*/ = false;
PL$128/*nameStr*/;
if(PL$24/*par*/["id"]){
PL$128/*nameStr*/ = PL$27/*identifierName*/(PL$24/*par*/["id"]);;
PL$127/*hasName*/ = true;;
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
this["beforeReturnExistsPs"] = new PL$16/*Promise*/();;
this["additionalCodeFrontRes"] = this["newResult"]();;
this["additionalCodeEndRes"] = this["newResult"]();;
this["stack"]("isClassObject");;
this["isClassObject"] = false;;
if(PL$24/*par*/["returnTypename"]){
this["_returnType"] = this["getType"](PL$24/*par*/["returnTypename"], PL$24/*par*/);;

}else{
this["_returnType"] = this["getType"]("var");;
};
;
if((PL$24/*par*/["frame"] && PL$24/*par*/["frame"]["name"])){
PL$122/*hasFrameInfo*/ = true;;
if((PL$24/*par*/["frame"]["type"] == "frame")){
PL$123/*runRemote*/ = true;;
PL$24/*par*/["promising"] = true;;
if(this["dynamicCode"]){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["functionFrameInDynamicCode"]);;
};
;

}else{
if((PL$24/*par*/["frame"]["type"] == "exclusive")){
PL$124/*runExclusive*/ = true;;
};
};
;
};
;
PL$129/*templateTypesAr*/ = [];
if((PL$24/*par*/["template"] && PL$24/*par*/["template"]["properties"]["length"])){
PL$130/*templateTypes*/ = this["getTemplateProperty"](PL$24/*par*/["template"], "types", "ObjectExpression");
if(PL$130/*templateTypes*/){
PL$131/*typeVarInit*/ = this["newResult"]();
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$130/*templateTypes*/["properties"]["length"]);++PL$32/*i*/){{PL$34/*p*/ = PL$130/*templateTypes*/["properties"][PL$32/*i*/];
PL$125/*typename*/ = PL$27/*identifierName*/(PL$34/*p*/["key"]);;
this["addType"]({"name": PL$125/*typename*/,
"dynamic": true}, PL$34/*p*/["value"]);;
if(! PL$126/*funClosure*/){
PL$126/*funClosure*/ = this["newResult"]();;
PL$126/*funClosure*/["push"]("(function(){");;
};
;
PL$131/*typeVarInit*/["push"]("var ");;
PL$131/*typeVarInit*/["push"](this["renderType"](PL$125/*typename*/));;
PL$131/*typeVarInit*/["push"](" = ");;
PL$131/*typeVarInit*/["push"](this["expectTypeVar"](this["parseExpression"](PL$34/*p*/["value"])));;
PL$131/*typeVarInit*/["push"](";\n");;
PL$131/*typeVarInit*/["push"]((("var " + this["getVariableName"](PL$125/*typename*/)) + " = "));;
PL$131/*typeVarInit*/["push"](this["renderType"](PL$125/*typename*/));;
PL$131/*typeVarInit*/["push"]("\n;");;
PL$131/*typeVarInit*/["push"]((("var " + this["getConstructorName"](PL$125/*typename*/)) + " = undefined;\n"));;
PL$131/*typeVarInit*/["push"](this["_typeReadyCode"]({"typename": PL$125/*typename*/}));;
PL$129/*templateTypesAr*/["push"](PL$125/*typename*/);;
}};
;
PL$126/*funClosure*/["push"](PL$131/*typeVarInit*/);;
};
;
};
;
PL$132/*extraTypesRes*/ = this["newResult"]();
if(PL$126/*funClosure*/){
PL$126/*funClosure*/["push"]("var communicator = {fun: undefined};\n");;
PL$126/*funClosure*/["push"](PL$132/*extraTypesRes*/);;
PL$126/*funClosure*/["push"]("eval(\"communicator.fun = ");;
};
;
PL$49/*res*/ = this["newResult"]();
PL$133/*funRes*/ = this["newResult"]();
PL$32/*i*/ = 0;;
PL$133/*funRes*/["push"]("function");;
if(PL$127/*hasName*/){
this["functionName"] = PL$128/*nameStr*/;;
};
;
PL$133/*funRes*/["push"]("(");;
if((PL$24/*par*/["params"] && PL$24/*par*/["params"]["length"])){
PL$32/*i*/ = 0;;
PL$88/*l*/ = PL$24/*par*/["params"]["length"];
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{if(PL$32/*i*/){
PL$133/*funRes*/["push"](", ");;
};
;
PL$133/*funRes*/["push"](this["getVariableName"](PL$27/*identifierName*/(PL$24/*par*/["params"][PL$32/*i*/]["name"])));;
this["addLocalVariable"]({"name": PL$24/*par*/["params"][PL$32/*i*/]["name"],
"typename": (PL$24/*par*/["params"][PL$32/*i*/]["typename"] || "var"),
"parameter": true}, PL$24/*par*/["params"][PL$32/*i*/]);;
}};
;
};
;
PL$133/*funRes*/["push"]("){\n");;
PL$134/*classesRes*/ = this["findClasses"](PL$24/*par*/["body"]);
this["findVariables"](PL$24/*par*/["body"]);;
if(PL$124/*runExclusive*/){
PL$133/*funRes*/["push"]((("if (!promiseland.profileHas(" + PL$14/*stringEncodeStr*/(PL$24/*par*/["frame"]["name"]["value"])) + ")){\n"));;
if(PL$24/*par*/["promising"]){
PL$133/*funRes*/["push"]((("var p = " + this["newPromiseStr"]()) + ";\n"));;
PL$133/*funRes*/["push"]("p.reject({id: 14, msg: \"function does not execute in this frame.\"});\n");;
PL$133/*funRes*/["push"]("return p;\n");;

}else{
PL$133/*funRes*/["push"]("return;\n");;
};
;
PL$133/*funRes*/["push"]("};\n");;
};
;
PL$135/*addFront*/ = PL$41/*getExtraFromPar*/(PL$24/*par*/, "addFront");
if(PL$135/*addFront*/){
PL$133/*funRes*/["push"](PL$135/*addFront*/);;
};
;
if(PL$24/*par*/["promising"]){
if(PL$120/*parGivenPromiseNameStr*/){
this["returnPromise"] = PL$120/*parGivenPromiseNameStr*/;;

}else{
this["returnPromise"] = this["getUniqueName"]();;
PL$133/*funRes*/["push"](this["declareReturnPromiseCode"]({"type": this["_returnType"],
"name": this["returnPromise"],
"constructorName": this["getConstructorName"](this["getTypeName"](this["_returnType"], PL$54/*parParsed*/)),
"parsed": PL$54/*parParsed*/,
"errorFun": this["getWarningFun"](PL$54/*parParsed*/)}));;
};
;
this["tryCatchFunctionStr"] = this["getUniqueName"]();;
PL$133/*funRes*/["push"]((("var " + this["tryCatchFunctionStr"]) + " = function(code){ return function(res){ try{code(res);}catch(e){ "));;
PL$133/*funRes*/["push"](this["runBeforeReturnRes"]);;
PL$133/*funRes*/["push"]((this["returnPromise"] + ".reject(e); }; }; };\n"));;
this["catchFunctionStr"] = this["getUniqueName"]();;
PL$133/*funRes*/["push"]((("var " + this["catchFunctionStr"]) + " = function(e){ "));;
PL$133/*funRes*/["push"](this["runBeforeReturnRes"]);;
PL$133/*funRes*/["push"]((this["returnPromise"] + ".reject(e); };\n"));;
this["promising"] = true;;
PL$49/*res*/["makePromising"]();;
};
;
PL$136/*b*/ = PL$24/*par*/["body"];
PL$137/*extraPar*/ = {};
PL$136/*b*/["brackets"] = false;;
PL$137/*extraPar*/["preCode"] = this["additionalCodeFrontRes"];;
PL$137/*extraPar*/["postCode"] = this["newResult"]();;
PL$137/*extraPar*/["postCode"]["push"](this["getReturnCode"]({}));;
PL$137/*extraPar*/["postCode"]["push"](this["additionalCodeEndRes"]);;
PL$138/*block*/ = this["blockCreator"](PL$136/*b*/, PL$137/*extraPar*/);
for(PL$32/*i*/ in this["localVariables"]){PL$139/*varname*/ = PL$32/*i*/;
PL$69/*type*/ = this["getVariableType"](PL$139/*varname*/);
if(this["localVariables"][PL$32/*i*/]["parameter"]){
PL$133/*funRes*/["push"](this["getProcessParameterCode"]({"name": this["getVariableName"](PL$139/*varname*/),
"type": PL$69/*type*/,
"errorFun": this["getWarningFun"](PL$24/*par*/),
"parsed": PL$24/*par*/}));;

}else{
PL$133/*funRes*/["push"](this["getDeclareVariableCode"]({"name": this["getVariableName"](PL$139/*varname*/),
"type": PL$69/*type*/,
"errorFun": this["getWarningFun"](PL$24/*par*/),
"parsed": PL$24/*par*/}));;
};
;
if(! PL$121/*noUntrack*/){
this["addBeforeReturn"](this["getDestroyVariableCode"]({"name": this["getVariableName"](PL$139/*varname*/),
"type": PL$69/*type*/,
"errorFun": this["getWarningFun"](PL$24/*par*/),
"parsed": PL$24/*par*/}), this["isTrackedClassConRes"](PL$69/*type*/, PL$24/*par*/));;
};
;
this["usedVariables"][PL$139/*varname*/] = false;;
};
;
if(this["usedVariables"]["arguments"]){
PL$133/*funRes*/["push"]((("var " + this["getVariableName"]("arguments")) + " = arguments;\n"));;
this["usedVariables"]["arguments"] = false;;
};
;
PL$133/*funRes*/["push"](PL$134/*classesRes*/);;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < this["functionsAr"]["length"]);++PL$32/*i*/){{PL$133/*funRes*/["push"]((("var " + this["getVariableName"](this["functionsAr"][PL$32/*i*/]["name"])) + " = "));;
PL$133/*funRes*/["push"](this["functionsAr"][PL$32/*i*/]["res"]);;
PL$133/*funRes*/["push"](";\n");;
}};
;
if(PL$24/*par*/["promising"]){
if(this["usingThis"]){
PL$133/*funRes*/["push"]((("var " + this["thisExpression"]) + " = this;\n"));;
};
;
PL$133/*funRes*/["push"]((this["tryCatchFunctionStr"] + "(function(){"));;
};
;
PL$133/*funRes*/["push"](PL$138/*block*/);;
if(PL$24/*par*/["promising"]){
PL$133/*funRes*/["addPost"]("})();\n");;
PL$133/*funRes*/["addPost"](this["returnReturnPromiseCode"]({"type": this["_returnType"],
"name": this["returnPromise"],
"parsed": PL$54/*parParsed*/,
"errorFun": this["getWarningFun"](PL$54/*parParsed*/)}));;
PL$133/*funRes*/["addPost"]("}");;

}else{
PL$133/*funRes*/["push"]("}");;
};
;
PL$140/*completeFun*/ = this["makeCompleteStatement"](PL$133/*funRes*/);
if((this["promising"] && PL$24/*par*/["returnTypename"])){
PL$141/*returnTypePromiseCheck*/ = this["newResult"]();
PL$141/*returnTypePromiseCheck*/["push"]("(function(t){");;
PL$141/*returnTypePromiseCheck*/["push"](this["promisingReturnTypeCheck"]({"type": this["_returnType"],
"errorFun": this["getWarningFun"](PL$54/*parParsed*/),
"parsed": PL$54/*parParsed*/}));;
PL$141/*returnTypePromiseCheck*/["push"]("return t;})(");;
PL$141/*returnTypePromiseCheck*/["push"](PL$140/*completeFun*/);;
PL$141/*returnTypePromiseCheck*/["push"](")");;
PL$140/*completeFun*/ = PL$141/*returnTypePromiseCheck*/;;
};
;
if(PL$126/*funClosure*/){
PL$142/*handleExtras*/ = (function(PL$143/*dt*/){
var PL$32/*i*/;
;
if(PL$143/*dt*/["extraTypes"]){
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$143/*dt*/["extraTypes"]["length"]);++PL$32/*i*/){{PL$132/*extraTypesRes*/["push"](PL$143/*dt*/["extraTypes"][PL$32/*i*/]["res"]);;
PL$142/*handleExtras*/(PL$143/*dt*/["extraTypes"][PL$32/*i*/]["type"]);;
}};
;
};
;
;
});
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$129/*templateTypesAr*/["length"]);++PL$32/*i*/){{PL$143/*dt*/ = this["getType"](PL$129/*templateTypesAr*/[PL$32/*i*/], PL$24/*par*/);
PL$142/*handleExtras*/(PL$143/*dt*/);;
}};
;
PL$126/*funClosure*/["push"](PL$140/*completeFun*/, PL$24/*par*/, {"stringEncode": true});;
PL$126/*funClosure*/["push"](";\"); return communicator.fun; })()");;
PL$140/*completeFun*/ = this["makeCompleteStatement"](PL$126/*funClosure*/);;
};
;
PL$144/*thisFunType*/ = this["getFunctionType"](PL$24/*par*/);
PL$145/*uniqueNameStr*/;
if(PL$123/*runRemote*/){
PL$146/*remoteClosure*/ = this["newResult"]();
PL$145/*uniqueNameStr*/ = this["getUniqueName"]();;
PL$146/*remoteClosure*/["push"]("(function(f){\n");;
PL$146/*remoteClosure*/["push"](("promiseland.registerRemote(" + PL$14/*stringEncodeStr*/(PL$24/*par*/["frame"]["name"]["value"])));;
PL$146/*remoteClosure*/["push"](((((", " + PL$14/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + PL$14/*stringEncodeStr*/(PL$145/*uniqueNameStr*/)) + ", f, "));;
PL$146/*remoteClosure*/["push"](this["renderType"](PL$144/*thisFunType*/, PL$54/*parParsed*/));;
PL$146/*remoteClosure*/["push"](");\n");;
PL$146/*remoteClosure*/["push"]((("if (promiseland.profileHas(" + PL$14/*stringEncodeStr*/(PL$24/*par*/["frame"]["name"]["value"])) + ")){\n"));;
PL$146/*remoteClosure*/["push"]("return f;\n");;
PL$146/*remoteClosure*/["push"]("}else{\n");;
PL$146/*remoteClosure*/["push"]("return function(){\n");;
PL$146/*remoteClosure*/["push"]((((("return promiseland.remoteExec(" + PL$14/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + PL$14/*stringEncodeStr*/(PL$145/*uniqueNameStr*/)) + ", arguments);\n"));;
PL$146/*remoteClosure*/["push"]("}\n");;
PL$146/*remoteClosure*/["push"]("};\n");;
PL$146/*remoteClosure*/["push"]("})(");;
PL$146/*remoteClosure*/["push"](PL$140/*completeFun*/);;
PL$146/*remoteClosure*/["push"](")");;
PL$49/*res*/["push"](PL$146/*remoteClosure*/);;

}else{
PL$49/*res*/["push"](PL$140/*completeFun*/);;
};
;
PL$49/*res*/["setType"](PL$144/*thisFunType*/);;
this["unstack"]("isClassObject");;
this["unstack"]("inheritedAvailable");;
this["unstack"]("thisType");;
PL$147/*finalResult*/ = this["newResult"]();
PL$147/*finalResult*/["push"](this["makeCompleteStatement"](PL$49/*res*/));;
PL$147/*finalResult*/["setType"](PL$144/*thisFunType*/);;
return PL$147/*finalResult*/;;
;
});;
this["expThisExpression"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
if(! this["promising"]){
PL$49/*res*/["push"]("this");;

}else{
if(! this["usingThis"]){
this["usingThis"] = true;;
this["thisExpression"] = this["getUniqueName"]("this");;
};
;
PL$49/*res*/["push"](this["thisExpression"]);;
};
;
PL$49/*res*/["setType"](this["thisType"]);;
return PL$49/*res*/;;
;
});;
this["expThrowStatement"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"]("throw ");;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["argument"])));;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["identifyClass"] = (function(PL$24/*par*/){
var PL$50/*r*/;
var PL$25/*name*/;
var PL$148/*keywords*/;
var PL$32/*i*/;
;
PL$50/*r*/ = {};
PL$25/*name*/;
if(PL$24/*par*/["name"]){
PL$25/*name*/ = PL$27/*identifierName*/(PL$24/*par*/["name"]);;
};
PL$50/*r*/["hasName"] = (PL$25/*name*/ && PL$25/*name*/["length"]);;
PL$148/*keywords*/ = PL$24/*par*/["keywords"];
if((PL$148/*keywords*/ && PL$148/*keywords*/["length"])){
PL$32/*i*/;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$148/*keywords*/["length"]);++PL$32/*i*/){{switch (PL$148/*keywords*/[PL$32/*i*/]["type"]){
case "type":
PL$50/*r*/["isTyped"] = true;;
break;;
case "extends":
PL$50/*r*/["extendsClause"] = PL$148/*keywords*/[PL$32/*i*/];;
break;;
case "sync":
PL$50/*r*/["syncClause"] = PL$148/*keywords*/[PL$32/*i*/];;
break;;
case "track":
PL$50/*r*/["trackClause"] = PL$148/*keywords*/[PL$32/*i*/];;
break;;
case "unique":
PL$50/*r*/["uniqueClause"] = PL$148/*keywords*/[PL$32/*i*/];;
break;;
case "savable":
PL$50/*r*/["savableClause"] = PL$148/*keywords*/[PL$32/*i*/];;
break;;
}
;
;
}};
;
};
;
return PL$50/*r*/;;
;
});;
this["findClasses"] = (function(PL$24/*par*/, PL$49/*res*/){
var PL$149/*ci*/;
var PL$25/*name*/;
var PL$93/*extraRes*/;
var PL$32/*i*/;
;
if(! PL$49/*res*/){
PL$49/*res*/ = this["newResult"]();;
};
;
if((! PL$24/*par*/ || (typeof PL$24/*par*/ == "string"))){
return PL$49/*res*/;;
};
;
if(PL$35/*checkIsFunction*/(PL$24/*par*/)){
return PL$49/*res*/;;
};
;
if((PL$24/*par*/["type"] == "Class")){
PL$149/*ci*/ = this["identifyClass"](PL$24/*par*/);
if(PL$149/*ci*/["isTyped"]){
if(PL$24/*par*/["body"]["literal"]){
if(PL$149/*ci*/["hasName"]){
PL$25/*name*/ = PL$27/*identifierName*/(PL$24/*par*/["name"]);
PL$93/*extraRes*/ = this["newResult"]();
this["addType"]({"name": PL$25/*name*/,
"extraRes": PL$93/*extraRes*/}, PL$24/*par*/);;
PL$49/*res*/["push"]("var ");;
PL$49/*res*/["push"](this["renderType"](PL$25/*name*/));;
PL$49/*res*/["push"](" = classSystem._createProvisionalClass();\n");;
this["common"]["useClassSystem"] = true;;
PL$49/*res*/["push"]((this["getVariableName"](PL$25/*name*/) + " = "));;
PL$49/*res*/["push"](this["renderType"](PL$25/*name*/));;
PL$49/*res*/["push"](";\n");;
PL$49/*res*/["push"]((("var " + this["getConstructorName"](PL$25/*name*/)) + " = undefined;"));;
PL$49/*res*/["push"](this["_typeReadyCode"]({"typename": PL$25/*name*/}));;
PL$49/*res*/["push"](PL$93/*extraRes*/);;
};
;
};
;
};
;
return PL$49/*res*/;;
};
;
PL$32/*i*/;
for(PL$32/*i*/ in PL$24/*par*/){this["findClasses"](PL$24/*par*/[PL$32/*i*/], PL$49/*res*/);;
};
;
return PL$49/*res*/;;
;
});;
this["_typeReadyCode"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
this["common"]["useClassSystem"] = true;;
PL$49/*res*/["push"]("classSystem.readyPromise(");;
PL$49/*res*/["push"](this["renderType"](PL$24/*par*/["typename"]));;
PL$49/*res*/["push"](").then(function(parType){");;
PL$49/*res*/["push"](this["renderType"](PL$24/*par*/["typename"]));;
PL$49/*res*/["push"](" = parType;");;
if(! PL$24/*par*/["noConstructor"]){
PL$49/*res*/["push"]((this["getConstructorName"](PL$24/*par*/["typename"]) + " = classSystem.getTypeConstructor("));;
PL$49/*res*/["push"](this["renderType"](PL$24/*par*/["typename"]));;
PL$49/*res*/["push"](");");;
};
;
PL$49/*res*/["push"]("});");;
return PL$49/*res*/;;
;
});;
this["findVariables"] = (function(PL$24/*par*/){
var PL$45/*self*/;
var PL$149/*ci*/;
var PL$32/*i*/;
;
PL$45/*self*/ = this;
if((! PL$24/*par*/ || (typeof PL$24/*par*/ == "string"))){
return;;
};
;
if((PL$24/*par*/["type"] == "VariableDeclaration")){
this["addLocalVariable"]({"name": PL$27/*identifierName*/(PL$24/*par*/["id"]),
"typename": PL$27/*identifierName*/(PL$24/*par*/["typename"])}, PL$24/*par*/);;

}else{
if((PL$24/*par*/["type"] == "Class")){
PL$149/*ci*/ = PL$45/*self*/["identifyClass"](PL$24/*par*/);
if(PL$149/*ci*/["hasName"]){
this["addLocalVariable"]({"name": PL$27/*identifierName*/(PL$24/*par*/["name"]),
"typename": "var"}, PL$24/*par*/);;
};
;
return;;

}else{
if(PL$35/*checkIsFunction*/(PL$24/*par*/)){
if((PL$24/*par*/["id"] && (PL$24/*par*/["type"] != "MemberFunction"))){
this["addLocalVariable"]({"name": PL$27/*identifierName*/(PL$24/*par*/["id"]),
"isFunction": true}, PL$24/*par*/);;
};
;
return;;
};
};
};
;
PL$32/*i*/;
for(PL$32/*i*/ in PL$24/*par*/){if((PL$32/*i*/ == "_extrainfo")){
continue;;
};
;
this["findVariables"](PL$24/*par*/[PL$32/*i*/]);;
};
;
;
});;
this["expClassStatement"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$150/*classRes*/;
var PL$149/*ci*/;
var PL$127/*hasName*/;
var PL$25/*name*/;
var PL$102/*isTyped*/;
var PL$151/*extendsClause*/;
var PL$152/*syncClause*/;
var PL$153/*trackClause*/;
var PL$154/*resultType*/;
var PL$155/*literal*/;
var PL$69/*type*/;
var PL$156/*inheritedObjName*/;
var PL$157/*lit*/;
var PL$88/*l*/;
var PL$158/*prop*/;
var PL$48/*tempRes*/;
var PL$159/*baseClasses*/;
var PL$32/*i*/;
var PL$160/*used*/;
var PL$161/*u*/;
;
PL$49/*res*/ = this["newResult"]();
PL$150/*classRes*/ = this["newResult"]();
PL$149/*ci*/ = this["identifyClass"](PL$24/*par*/);
PL$127/*hasName*/ = PL$149/*ci*/["hasName"];
PL$25/*name*/;
if(PL$127/*hasName*/){
PL$25/*name*/ = PL$27/*identifierName*/(PL$24/*par*/["name"]);;
};
;
PL$102/*isTyped*/ = PL$149/*ci*/["isTyped"];
PL$151/*extendsClause*/ = PL$24/*par*/["extendsClause"];
PL$152/*syncClause*/ = PL$149/*ci*/["syncClause"];
PL$153/*trackClause*/ = PL$149/*ci*/["trackClause"];
PL$154/*resultType*/ = this["getType"]("var");
this["stack"]("inheritedSystem");;
this["inheritedSystem"] = this["newInherited"]();;
if(PL$102/*isTyped*/){
this["common"]["useClassSystem"] = true;;
PL$150/*classRes*/["push"]("classSystem.createClass(");;
if(PL$24/*par*/["body"]["literal"]){
if(PL$127/*hasName*/){
this["inheritedSystem"]["type"] = this["getType"](PL$25/*name*/, PL$24/*par*/);;
};
;
this["stack"]("isClassObject");;
this["isClassObject"] = true;;
PL$155/*literal*/ = this["createClassLiteral"](PL$24/*par*/["body"]["literal"], PL$149/*ci*/, PL$25/*name*/);
PL$150/*classRes*/["push"](this["stringifyClassLiteral"](PL$155/*literal*/));;
PL$150/*classRes*/["push"](", ");;
PL$150/*classRes*/["push"](this["createClassDefaults"](PL$24/*par*/["body"]["literal"]));;
this["unstack"]("isClassObject");;
if(PL$127/*hasName*/){
PL$69/*type*/ = this["createType"]({"name": PL$25/*name*/,
"literal": PL$155/*literal*/,
"par": PL$24/*par*/});
};
;

}else{
PL$150/*classRes*/["push"]("{}, ");;
PL$150/*classRes*/["push"](this["parseExpression"](PL$24/*par*/["body"]["expression"]));;
};
;
PL$150/*classRes*/["push"](")");;

}else{
PL$156/*inheritedObjName*/ = this["getUniqueName"]("inherited");
PL$150/*classRes*/["push"]("(function(){");;
if(PL$24/*par*/["body"]["literal"]){
this["stack"]("preventreturn");;
this["preventreturn"] = true;;
PL$157/*lit*/ = PL$24/*par*/["body"]["literal"];
PL$88/*l*/ = ((PL$157/*lit*/["properties"] && PL$157/*lit*/["properties"]["length"]) || 0);
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{PL$158/*prop*/ = PL$157/*lit*/["properties"][PL$32/*i*/];
if((PL$158/*prop*/["kind"] == "block")){
PL$150/*classRes*/["push"](this["parseExpression"](PL$158/*prop*/));;
};
;
}};
;
this["unstack"]("preventreturn");;
};
;
PL$150/*classRes*/["push"]((("var " + PL$156/*inheritedObjName*/) + " = {};\n"));;
PL$48/*tempRes*/ = this["newResult"]();
PL$48/*tempRes*/["push"]("var res = promiseland.createClass(");;
if(PL$24/*par*/["body"]["literal"]){
PL$48/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["body"]["literal"])));;

}else{
PL$48/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["body"]["expression"])));;
};
;
PL$48/*tempRes*/["push"](", [");;
PL$159/*baseClasses*/ = ((PL$151/*extendsClause*/ && PL$151/*extendsClause*/["baseClasses"]) || []);
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$159/*baseClasses*/["length"]);++PL$32/*i*/){{if(PL$32/*i*/){
PL$48/*tempRes*/["push"](", ");;
};
;
PL$48/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](PL$159/*baseClasses*/[PL$32/*i*/])));;
}};
;
PL$48/*tempRes*/["push"]("], ");;
PL$48/*tempRes*/["push"](PL$156/*inheritedObjName*/);;
PL$48/*tempRes*/["push"](");");;
PL$150/*classRes*/["push"](PL$48/*tempRes*/);;
PL$150/*classRes*/["push"]("\n");;
PL$160/*used*/ = this["inheritedSystem"]["used"];
PL$161/*u*/;
for(PL$161/*u*/ in PL$160/*used*/){PL$150/*classRes*/["push"]((((((("var " + PL$160/*used*/[PL$161/*u*/]) + " = ") + PL$156/*inheritedObjName*/) + "[") + PL$14/*stringEncodeStr*/(PL$161/*u*/)) + "];\n"));;
};
;
PL$150/*classRes*/["push"]("return res; })()");;
};
;
if(PL$127/*hasName*/){
if(PL$102/*isTyped*/){
PL$49/*res*/["addPre"](this["_resolveClassCode"]({"name": PL$24/*par*/["name"],
"classRes": PL$150/*classRes*/,
"parsed": PL$24/*par*/}));;

}else{
PL$49/*res*/["addPre"]((this["getVariableName"](PL$24/*par*/["name"]) + " = "));;
PL$49/*res*/["addPre"](PL$150/*classRes*/);;
PL$49/*res*/["addPre"](";");;
};
;
PL$49/*res*/["push"](this["getVariableName"](PL$24/*par*/["name"]));;

}else{
PL$49/*res*/["push"](PL$150/*classRes*/);;
};
;
PL$49/*res*/["setType"](PL$154/*resultType*/);;
this["unstack"]("inheritedSystem");;
return PL$49/*res*/;;
;
});;
this["_resolveClassCode"] = (function(PL$24/*par*/){
var PL$68/*parsed*/;
var PL$49/*res*/;
;
PL$68/*parsed*/ = PL$24/*par*/["parsed"];
PL$49/*res*/ = this["newResult"]();
this["common"]["useClassSystem"] = true;;
PL$49/*res*/["push"]("classSystem._resolveProvisional(", PL$68/*parsed*/);;
PL$49/*res*/["push"](this["renderType"](PL$24/*par*/["name"], PL$68/*parsed*/), PL$68/*parsed*/);;
PL$49/*res*/["push"](", ", PL$68/*parsed*/);;
PL$49/*res*/["push"](PL$24/*par*/["classRes"], PL$68/*parsed*/);;
PL$49/*res*/["push"](");", PL$68/*parsed*/);;
return PL$49/*res*/;;
;
});;
this["createClassLiteral"] = (function(PL$24/*par*/, PL$149/*ci*/, PL$74/*parName*/){
var PL$162/*ret*/;
var PL$32/*i*/;
var PL$88/*l*/;
var PL$158/*prop*/;
var PL$163/*defaultValue*/;
var PL$69/*type*/;
var PL$25/*name*/;
;
PL$162/*ret*/ = {"members": [],
"extends": [],
"hasFreePart": true,
"parsed": PL$24/*par*/,
"track": (PL$149/*ci*/["trackClause"] ? true : false),
"sync": PL$149/*ci*/["syncClause"],
"unique": PL$149/*ci*/["uniqueClause"],
"savable": PL$149/*ci*/["savableClause"],
"name": PL$74/*parName*/,
"hashStr": this["getModuleHashStr"]()};
PL$32/*i*/ = 0;
PL$88/*l*/ = ((PL$24/*par*/["properties"] && PL$24/*par*/["properties"]["length"]) || 0);
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{PL$158/*prop*/ = PL$24/*par*/["properties"][PL$32/*i*/];
PL$163/*defaultValue*/;
PL$69/*type*/;
if((PL$158/*prop*/["kind"] == "init")){
PL$69/*type*/ = (PL$158/*prop*/["typename"] ? this["getType"](PL$158/*prop*/["typename"], PL$24/*par*/) : undefined);;
if(PL$158/*prop*/["value"]){
if(PL$69/*type*/){
PL$163/*defaultValue*/ = this["parseAsType"](PL$69/*type*/, PL$158/*prop*/["value"]);;

}else{
PL$163/*defaultValue*/ = this["parseExpression"](PL$158/*prop*/["value"]);;
PL$69/*type*/ = PL$163/*defaultValue*/["getType"]();;
};
;
};
;
if(! PL$69/*type*/){
PL$69/*type*/ = this["getType"]("var");;
};
;
PL$162/*ret*/["members"]["push"]({"name": PL$27/*identifierName*/(PL$158/*prop*/["key"]),
"type": PL$69/*type*/,
"defaultValue": PL$163/*defaultValue*/});;

}else{
if((PL$158/*prop*/["kind"] == "function")){
PL$25/*name*/ = PL$27/*identifierName*/(PL$158/*prop*/["id"]);
PL$158/*prop*/["id"] = undefined;;
PL$163/*defaultValue*/ = this["parseExpression"](PL$158/*prop*/["value"]);;
PL$69/*type*/ = PL$163/*defaultValue*/["getType"]();;
PL$162/*ret*/["members"]["push"]({"name": PL$25/*name*/,
"type": PL$69/*type*/,
"defaultValue": PL$163/*defaultValue*/});;

}else{
this["error"](PL$158/*prop*/, PL$12/*errorMsg*/["unknownPropertyAssignmentType"]);;
};
};
;
}};
;
return PL$162/*ret*/;;
;
});;
this["stringifyClassLiteral"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$32/*i*/;
var PL$88/*l*/;
var PL$33/*m*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"]("{");;
PL$49/*res*/["push"]("members: [");;
PL$32/*i*/ = 0;
PL$88/*l*/ = PL$24/*par*/["members"]["length"];
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{PL$33/*m*/ = PL$24/*par*/["members"][PL$32/*i*/];
if(PL$32/*i*/){
PL$49/*res*/["push"](",");;
};
;
PL$49/*res*/["push"]("{");;
PL$49/*res*/["push"](("\"name\":" + PL$14/*stringEncodeStr*/(PL$33/*m*/["name"])));;
PL$49/*res*/["push"](",\"type\":");;
PL$49/*res*/["push"](this["renderType"](PL$33/*m*/["type"], PL$24/*par*/["parsed"]));;
PL$49/*res*/["push"]("}");;
}};
;
PL$49/*res*/["push"]("]");;
PL$49/*res*/["push"](", \"extends\": []");;
PL$49/*res*/["push"](", \"hasFreePart\": true");;
if(PL$24/*par*/["track"]){
PL$49/*res*/["push"](", \"track\": true");;
};
;
if(PL$24/*par*/["sync"]){
PL$49/*res*/["push"](", \"sync\": ");;
PL$49/*res*/["push"](PL$164/*JSON*/["stringify"](PL$24/*par*/["sync"]));;
PL$49/*res*/["push"]((", \"hashStr\": " + PL$14/*stringEncodeStr*/(PL$24/*par*/["hashStr"])));;
PL$49/*res*/["push"]((", \"name\": " + PL$14/*stringEncodeStr*/(PL$24/*par*/["name"])));;
};
;
if(PL$24/*par*/["unique"]){
PL$49/*res*/["push"](", \"unique\": true");;
};
;
if(PL$24/*par*/["savable"]){
PL$49/*res*/["push"](", \"savable\": true");;
};
;
PL$49/*res*/["push"]("}");;
return PL$49/*res*/;;
;
});;
this["createClassDefaults"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$32/*i*/;
var PL$88/*l*/;
var PL$165/*comma*/;
var PL$158/*prop*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"]("{");;
PL$32/*i*/ = 0;
PL$88/*l*/ = ((PL$24/*par*/["properties"] && PL$24/*par*/["properties"]["length"]) || 0);
PL$165/*comma*/;
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{PL$158/*prop*/ = PL$24/*par*/["properties"][PL$32/*i*/];
if((PL$158/*prop*/["kind"] == "init")){
if(PL$165/*comma*/){
PL$49/*res*/["push"](", ");;
};
;
PL$49/*res*/["push"]((PL$14/*stringEncodeStr*/(PL$27/*identifierName*/(PL$158/*prop*/["key"])) + ": "));;
if(PL$158/*prop*/["value"]){
PL$49/*res*/["push"](this["parseExpression"](PL$158/*prop*/["value"]));;

}else{
PL$49/*res*/["push"]("undefined");;
};
;
PL$165/*comma*/ = true;;
};
;
}};
;
PL$49/*res*/["push"]("}");;
return PL$49/*res*/;;
;
});;
this["addType"] = (function(PL$24/*par*/, PL$54/*parParsed*/){
var PL$25/*name*/;
var PL$69/*type*/;
;
PL$25/*name*/ = PL$27/*identifierName*/(PL$24/*par*/["name"]);
if(this["types"]["hasOwnProperty"][PL$25/*name*/]){
this["error"](PL$54/*parParsed*/, PL$12/*errorMsg*/["typeExists"]);;
};
;
PL$69/*type*/;
if(PL$24/*par*/["dynamic"]){
PL$69/*type*/ = {"isDynamic": true,
"extraRes": PL$24/*par*/["extraRes"]};;

}else{
PL$69/*type*/ = this["getProvisionalType"](PL$54/*parParsed*/);;
};
;
this["types"][PL$25/*name*/] = {"name": PL$25/*name*/,
"type": PL$69/*type*/,
"isDynamic": PL$69/*type*/["isDynamic"],
"extraRes": PL$24/*par*/["extraRes"]};;
;
});;
this["getTypeName"] = (function(PL$71/*parType*/, PL$54/*parParsed*/){
var PL$25/*name*/;
;
PL$25/*name*/;
for(PL$25/*name*/ in this["types"]){if((this["types"][PL$25/*name*/]["type"] === PL$71/*parType*/)){
return this["types"][PL$25/*name*/]["name"];;
};
;
};
;
this["error"](PL$54/*parParsed*/, PL$12/*errorMsg*/["internalTypeHasNoName"]);;
;
});;
this["createType"] = (function(PL$24/*par*/){
var PL$25/*name*/;
var PL$60/*entry*/;
var PL$69/*type*/;
var PL$166/*provisional*/;
;
PL$25/*name*/ = PL$27/*identifierName*/(PL$24/*par*/["name"]);
PL$60/*entry*/ = this["_getTypeEntry"](PL$24/*par*/["name"]);
if(PL$60/*entry*/["type"]["isDynamic"]){
this["error"](PL$24/*par*/["par"], PL$12/*errorMsg*/["dynamicTypeCantBeDefined"]);;
};
;
if(PL$60/*entry*/["isDefined"]){
this["error"](PL$24/*par*/["par"], PL$12/*errorMsg*/["typeRedefinition"]);;
};
;
PL$69/*type*/ = PL$18/*classSystem*/["createClass"](PL$24/*par*/["literal"], {});
PL$166/*provisional*/ = PL$60/*entry*/["type"];
PL$60/*entry*/["type"] = PL$69/*type*/;;
try
{this["resolveProvisional"](PL$166/*provisional*/, PL$69/*type*/);;
}catch(PL$167/*e*/){this["error"](PL$24/*par*/["par"], PL$12/*errorMsg*/["typeRedefinition"]);;
};
;
PL$60/*entry*/["isDefined"] = true;;
;
});;
this["_getTypeEntry"] = (function(PL$74/*parName*/, PL$54/*parParsed*/, PL$24/*par*/){
var PL$25/*name*/;
var PL$168/*throwError*/;
var PL$125/*typename*/;
var PL$169/*typeEntry*/;
var PL$93/*extraRes*/;
;
PL$25/*name*/ = PL$27/*identifierName*/(PL$74/*parName*/);
PL$168/*throwError*/ = true;
if((PL$24/*par*/ && PL$24/*par*/["dontThrow"])){
PL$168/*throwError*/ = false;;
};
;
if(this["types"]["hasOwnProperty"](PL$25/*name*/)){
return this["types"][PL$25/*name*/];;
};
;
if((PL$25/*name*/[(PL$25/*name*/["length"] - 1)] == "*")){
PL$125/*typename*/ = PL$25/*name*/["substr"](0, (PL$25/*name*/["length"] - 1));
PL$169/*typeEntry*/ = this["_getTypeEntry"](PL$125/*typename*/, PL$54/*parParsed*/, PL$24/*par*/);
if(PL$169/*typeEntry*/){
PL$93/*extraRes*/ = PL$169/*typeEntry*/["extraRes"];
this["types"][PL$25/*name*/] = {"name": PL$25/*name*/,
"type": PL$18/*classSystem*/["_createPromiseOfClass"](PL$169/*typeEntry*/["type"]),
"isDynamic": false,
"extraRes": PL$93/*extraRes*/};;
PL$93/*extraRes*/["push"]("var ");;
PL$93/*extraRes*/["push"](this["renderType"](PL$25/*name*/));;
this["common"]["useClassSystem"] = true;;
PL$93/*extraRes*/["push"](" = classSystem._createPromiseOfClass(");;
PL$93/*extraRes*/["push"](this["renderType"](PL$125/*typename*/));;
PL$93/*extraRes*/["push"](");\nvar ");;
PL$93/*extraRes*/["push"]((this["getVariableName"](PL$25/*name*/) + " = "));;
PL$93/*extraRes*/["push"](this["renderType"](PL$25/*name*/));;
PL$93/*extraRes*/["push"](";\n");;
PL$93/*extraRes*/["push"]((("var " + this["getConstructorName"](PL$25/*name*/)) + " = undefined;"));;
PL$93/*extraRes*/["push"](this["_typeReadyCode"]({"typename": PL$25/*name*/,
"noConstructor": false}));;
return this["types"][PL$25/*name*/];;
};
;
};
;
if(! PL$168/*throwError*/){
return;;
};
;
this["error"](PL$54/*parParsed*/, PL$12/*errorMsg*/["typeUndeclared"], {"name": PL$25/*name*/});;
;
});;
this["getType"] = (function(PL$74/*parName*/, PL$54/*parParsed*/, PL$24/*par*/){
var PL$60/*entry*/;
;
PL$60/*entry*/ = this["_getTypeEntry"](PL$74/*parName*/, PL$54/*parParsed*/, PL$24/*par*/);
if(PL$60/*entry*/){
return PL$60/*entry*/["type"];;
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
this["getConstructorName"] = (function(PL$74/*parName*/){
var PL$25/*name*/;
var PL$30/*t*/;
;
PL$25/*name*/ = PL$27/*identifierName*/(PL$74/*parName*/);
if(this["types"]["hasOwnProperty"](PL$25/*name*/)){
PL$30/*t*/ = this["types"][PL$25/*name*/];
if(! PL$30/*t*/["constructorName"]){
PL$30/*t*/["constructorName"] = this["getUniqueName"]((PL$25/*name*/ + "-constructor"));;
if(! PL$30/*t*/["isDynamic"]){
this["localClassConstructors"][PL$25/*name*/] = PL$30/*t*/["constructorName"];;
};
;
};
;
return PL$30/*t*/["constructorName"];;
};
;
this["error"](PL$74/*parName*/, PL$12/*errorMsg*/["typeUndeclared"], {"name": PL$25/*name*/});;
;
});;
this["expTryStatement"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$170/*catchPromise*/;
var PL$171/*continuePromise*/;
var PL$136/*b*/;
var PL$137/*extraPar*/;
var PL$172/*temporaryPs*/;
;
PL$49/*res*/ = this["newResult"]();
PL$170/*catchPromise*/;
PL$171/*continuePromise*/;
if(PL$37/*checkPromising*/(PL$24/*par*/)){
this["stack"]("tryCatchFunctionStr");;
this["stack"]("catchFunctionStr");;
PL$171/*continuePromise*/ = this["getUniqueName"]();;
PL$49/*res*/["addPre"]((((("var " + PL$171/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$170/*catchPromise*/ = this["getUniqueName"]();;
PL$49/*res*/["addPre"]((((("var " + PL$170/*catchPromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
this["tryCatchFunctionStr"] = (this["getUniqueName"]() + "/*try catch*/");;
PL$49/*res*/["addPre"]((((("var " + this["tryCatchFunctionStr"]) + " = function(code){ return function(res){ try{code(res);}catch(e){ ") + PL$170/*catchPromise*/) + ".resolve(e); }; }; };\n"));;
this["catchFunctionStr"] = this["getUniqueName"]();;
PL$49/*res*/["addPre"]((((("var " + this["catchFunctionStr"]) + " = function(e){ ") + PL$170/*catchPromise*/) + ".resolve(e); };\n"));;
PL$49/*res*/["push"]((this["tryCatchFunctionStr"] + "(function()"));;

}else{
PL$49/*res*/["push"]("try\n");;
};
;
PL$136/*b*/ = PL$24/*par*/["block"];
PL$137/*extraPar*/ = {};
PL$136/*b*/["brackets"] = true;;
if(PL$37/*checkPromising*/(PL$24/*par*/)){
PL$137/*extraPar*/["postCode"] = this["newResult"]((PL$171/*continuePromise*/ + ".resolve()"));;
};
;
PL$49/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](PL$136/*b*/, PL$137/*extraPar*/)));;
if(PL$37/*checkPromising*/(PL$24/*par*/)){
this["unstack"]("tryCatchFunctionStr");;
this["unstack"]("catchFunctionStr");;
PL$49/*res*/["push"](")();\n");;
PL$49/*res*/["push"]((((PL$170/*catchPromise*/ + ".then(") + this["tryCatchFunctionStr"]) + "(function("));;

}else{
PL$49/*res*/["push"]("catch(");;
};
;
PL$172/*temporaryPs*/;
if(PL$24/*par*/["handler"]["param"]){
PL$49/*res*/["push"](this["getVariableName"](PL$27/*identifierName*/(PL$24/*par*/["handler"]["param"])));;
PL$172/*temporaryPs*/ = this["addLocalVariableTemporary"]({"name": PL$27/*identifierName*/(PL$24/*par*/["handler"]["param"]),
"typename": "var",
"parameter": true}, PL$24/*par*/["handler"]);;
};
;
PL$49/*res*/["push"](")");;
PL$136/*b*/ = PL$24/*par*/["handler"]["body"];;
PL$137/*extraPar*/ = {};;
PL$136/*b*/["brackets"] = true;;
if(PL$37/*checkPromising*/(PL$24/*par*/)){
PL$137/*extraPar*/["postCode"] = this["newResult"]((PL$171/*continuePromise*/ + ".resolve();"));;
};
;
PL$49/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](PL$136/*b*/, PL$137/*extraPar*/)));;
if(PL$37/*checkPromising*/(PL$24/*par*/)){
PL$49/*res*/["push"]("));\n");;
PL$49/*res*/["push"](PL$171/*continuePromise*/);;
PL$49/*res*/["push"](((".then(" + this["tryCatchFunctionStr"]) + "(function(){"));;
PL$49/*res*/["addPost"]((("}), " + this["catchFunctionStr"]) + ")"));;
};
;
if(PL$24/*par*/["finally"]){
PL$49/*res*/["push"]("finally");;
PL$136/*b*/ = PL$24/*par*/["finally"];;
PL$136/*b*/["brackers"] = true;;
PL$49/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](PL$136/*b*/)));;
};
;
if(PL$172/*temporaryPs*/){
PL$172/*temporaryPs*/["resolve"]();;
};
;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["getModuleHashStr"] = (function(){
;
return (this["hashStr"] || "unknownhash");;
;
});;
this["makeStatement"] = (function(PL$24/*par*/){
var PL$173/*statementRes*/;
;
PL$173/*statementRes*/ = this["newResult"]();
PL$173/*statementRes*/["setStatement"]();;
PL$173/*statementRes*/["push"](PL$24/*par*/);;
PL$173/*statementRes*/["push"](";\n");;
return PL$173/*statementRes*/;;
;
});;
this["expBlockStatement"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$24/*par*/["brackets"] = true;;
PL$49/*res*/["pushType"](this["blockCreator"](PL$24/*par*/));;
return PL$49/*res*/;;
;
});;
this["blockCreator"] = (function(PL$24/*par*/, PL$174/*parExtra*/){
var PL$49/*res*/;
var PL$175/*blockRes*/;
var PL$176/*sAr*/;
var PL$32/*i*/;
var PL$88/*l*/;
;
if(! PL$174/*parExtra*/){
PL$174/*parExtra*/ = {};;
};
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["setType"](PL$19/*statementType*/);;
if(PL$24/*par*/["brackets"]){
PL$49/*res*/["push"]("{");;
};
;
PL$175/*blockRes*/ = this["newResult"]();
PL$176/*sAr*/ = [];
if((PL$24/*par*/ instanceof PL$177/*Array*/)){
PL$176/*sAr*/ = PL$24/*par*/;;

}else{
if((PL$24/*par*/["type"] == "BlockStatement")){
PL$176/*sAr*/ = PL$24/*par*/["body"];;

}else{
PL$178/*console*/["log"]("here <------------------------");;
PL$176/*sAr*/["push"](this["parseExpression"](PL$24/*par*/));;
};
;
};
;
if(PL$174/*parExtra*/["preCode"]){
PL$175/*blockRes*/["push"](this["makeStatement"](PL$174/*parExtra*/["preCode"]));;
};
;
PL$32/*i*/ = 0;
PL$88/*l*/ = PL$176/*sAr*/["length"];
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{PL$175/*blockRes*/["push"](this["makeStatement"](this["parseExpression"](PL$176/*sAr*/[PL$32/*i*/])));;
}};
;
if(PL$174/*parExtra*/["postCode"]){
PL$175/*blockRes*/["push"](this["makeStatement"](PL$174/*parExtra*/["postCode"]));;
};
;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$175/*blockRes*/));;
if(PL$24/*par*/["brackets"]){
PL$49/*res*/["push"]("}");;
};
;
return PL$49/*res*/;;
;
});;
this["parseExpression"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["_parseExpression"](PL$24/*par*/);
if(! PL$49/*res*/["getType"]()){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["internalMissingResultType"]);;
};
;
PL$49/*res*/["setParsed"](PL$24/*par*/);;
return PL$49/*res*/;;
;
});;
this["_parseExpression"] = (function(PL$179/*value*/){
var PL$49/*res*/;
;
PL$49/*res*/;
switch (PL$179/*value*/["type"]){
case "ArrayExpression":
return this["expArrayExpression"](PL$179/*value*/);;
case "AssignmentExpression":
return this["expAssignmentExpression"](PL$179/*value*/);;
case "BinaryExpression":
return this["expBinaryExpression"](PL$179/*value*/);;
case "BlockStatement":
return this["expBlockStatement"](PL$179/*value*/);;
case "BreakStatement":
return this["expBreakStatement"](PL$179/*value*/);;
case "CallExpression":
return this["expCallExpression"](PL$179/*value*/);;
case "Class":
return this["expClassStatement"](PL$179/*value*/);;
case "ClassObjectExpression":
return this["expClassObjectExpression"](PL$179/*value*/);;
case "ConditionalExpression":
return this["conditionalExpression"](PL$179/*value*/);;
case "ConnectExpression":
return this["connectExpression"](PL$179/*value*/);;
case "ContinueStatement":
return this["expContinueStatement"](PL$179/*value*/);;
case "DebuggerStatement":
return this["expDebuggerStatement"](PL$179/*value*/);;
case "EmptyStatement":
PL$49/*res*/ = this["newResult"]();;
PL$49/*res*/["setType"]("var");;
return PL$49/*res*/;;
case "ExpressionStatement":
return this["expExpressionStatement"](PL$179/*value*/);;
case "ForInStatement":
return this["expForInStatement"](PL$179/*value*/);;
case "ForStatement":
return this["expForStatement"](PL$179/*value*/);;
case "FunctionExpression":
return this["expFunctionExpression"](PL$179/*value*/);;
case "FunctionDeclaration":
return this["expFunctionDeclaration"](PL$179/*value*/);;
case "MemberFunction":
return this["expMemberFunction"](PL$179/*value*/);;
case "Identifier":
return this["expIdentifier"](PL$179/*value*/);;
case "IfStatement":
return this["expIfStatement"](PL$179/*value*/);;
case "InheritedExpression":
return this["expInheritedExpression"](PL$179/*value*/);;
case "Literal":
return this["expLiteral"](PL$179/*value*/);;
case "MemberExpression":
return this["expMemberExpression"](PL$179/*value*/);;
case "NewExpression":
return this["expNewExpression"](PL$179/*value*/);;
case "ObjectExpression":
return this["expObjectExpression"](PL$179/*value*/);;
case "ReturnStatement":
return this["expReturnStatement"](PL$179/*value*/);;
case "SwitchStatement":
return this["expSwitchStatement"](PL$179/*value*/);;
case "ThisExpression":
return this["expThisExpression"](PL$179/*value*/);;
case "ThrowStatement":
return this["expThrowStatement"](PL$179/*value*/);;
case "TryStatement":
return this["expTryStatement"](PL$179/*value*/);;
case "UnaryExpression":
if((PL$179/*value*/["operator"] == "*")){
return this["expPromiseExpression"](PL$179/*value*/["argument"]);;
};
;
if((PL$179/*value*/["operator"] == "require")){
return this["expRequireExpression"](PL$179/*value*/["argument"]);;
};
;
return this["expUnaryExpression"](PL$179/*value*/);;
case "UpdateExpression":
return this["expUpdateExpression"](PL$179/*value*/);;
case "VariableStatement":
return this["expVariableStatement"](PL$179/*value*/);;
case "VariableDeclaration":
return this["expVariableDeclaration"](PL$179/*value*/);;
case "WhileStatement":
return this["whileStatement"](PL$179/*value*/);;
default:
this["error"](PL$179/*value*/, PL$12/*errorMsg*/["unknownType"]);;
}
;
;
return "/*this should not happen*/";;
;
});;
this["expExpressionStatement"] = (function(PL$54/*parParsed*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["getDestroyTemporaryClassCode"]({"value": this["parseExpression"](PL$54/*parParsed*/["expression"])});
PL$49/*res*/["push"](";");;
return PL$49/*res*/;;
;
});;
this["expDebuggerStatement"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"]("debugger");;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["expFunctionExpression"] = (function(PL$179/*value*/, PL$180/*declaration*/){
var PL$181/*cp*/;
var PL$182/*funName*/;
var PL$133/*funRes*/;
var PL$183/*uv*/;
var PL$25/*name*/;
var PL$49/*res*/;
;
PL$181/*cp*/ = this["newInstance"](PL$179/*value*/, {"dynamicCode": (this["dynamicCode"] || this["isFunction"])});
PL$182/*funName*/ = PL$181/*cp*/["getFunctionName"]();
PL$133/*funRes*/ = PL$181/*cp*/["getFunctionRes"]();
PL$183/*uv*/ = PL$181/*cp*/["_getUsedVairables"]();
PL$25/*name*/;
for(PL$25/*name*/ in PL$183/*uv*/){if((PL$183/*uv*/[PL$25/*name*/] === true)){
this["_addUsedVariable"](PL$25/*name*/);;
};
;
};
;
PL$49/*res*/;
if((PL$182/*funName*/ && PL$133/*funRes*/)){
this["addFunction"](PL$133/*funRes*/, PL$182/*funName*/);;
PL$49/*res*/ = this["newResult"](this["getVariableName"](PL$182/*funName*/));;
PL$49/*res*/["setType"](PL$133/*funRes*/["getType"]());;
return PL$49/*res*/;;
};
;
PL$49/*res*/ = this["newResult"]();;
if(! PL$180/*declaration*/){
PL$49/*res*/["push"]("(");;
};
;
PL$49/*res*/["pushType"]((PL$133/*funRes*/ || PL$181/*cp*/["getResult"]()));;
if(! PL$180/*declaration*/){
PL$49/*res*/["push"](")");;
};
;
return PL$49/*res*/;;
;
});;
this["expFunctionDeclaration"] = (function(PL$179/*value*/){
;
return this["expFunctionExpression"](PL$179/*value*/, true);;
;
});;
this["expMemberFunction"] = (function(PL$179/*value*/){
;
PL$179/*value*/["id"] = undefined;;
return this["expFunctionExpression"](PL$179/*value*/);;
;
});;
this["expUpdateExpression"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
if(PL$24/*par*/["prefix"]){
PL$49/*res*/["push"](PL$24/*par*/["operator"]);;
};
;
PL$49/*res*/["pushType"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["argument"])));;
if(! PL$24/*par*/["prefix"]){
PL$49/*res*/["push"](PL$24/*par*/["operator"]);;
};
;
return PL$49/*res*/;;
;
});;
this["expIdentifier"] = (function(PL$24/*par*/){
;
return this["getVariable"](PL$27/*identifierName*/(PL$24/*par*/["name"]));;
;
});;
this["expLiteral"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
switch (typeof PL$24/*par*/["value"]){
case "string":
PL$49/*res*/["push"](PL$14/*stringEncodeStr*/(PL$24/*par*/["value"]));;
break;;
case "number":
PL$49/*res*/["push"](("" + PL$24/*par*/["value"]));;
break;;
case "boolean":
if(PL$24/*par*/["value"]){
PL$49/*res*/["push"]("true");;

}else{
PL$49/*res*/["push"]("false");;
};
;
break;;
default:
if((PL$24/*par*/["value"] === null)){
PL$49/*res*/["push"]("null");;

}else{
if((PL$24/*par*/["value"] && PL$24/*par*/["value"]["exec"])){
PL$49/*res*/["push"](("" + PL$24/*par*/["value"]));;

}else{
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["internalUnknownLiteralType"]);;
};
};
;
}
;
;
PL$49/*res*/["setType"](this["getType"]("var"));;
return PL$49/*res*/;;
;
});;
this["expPromiseExpression"] = (function(PL$184/*parExpression*/){
var PL$49/*res*/;
var PL$185/*expressionRes*/;
var PL$186/*promiseNameStr*/;
var PL$187/*dereferencePre*/;
var PL$188/*preRes*/;
var PL$189/*dereferencePost*/;
var PL$190/*postRes*/;
var PL$191/*promiseType*/;
;
PL$49/*res*/ = this["newResult"]();
PL$185/*expressionRes*/ = this["parseExpression"](PL$184/*parExpression*/);
PL$186/*promiseNameStr*/ = this["getUniqueName"]();
PL$49/*res*/["makePromising"]();;
PL$49/*res*/["setPromiseName"](PL$186/*promiseNameStr*/);;
PL$187/*dereferencePre*/ = this["dereferencePromisePreCode"]({"value": PL$185/*expressionRes*/});
PL$188/*preRes*/ = this["newResult"]();
PL$188/*preRes*/["push"](PL$187/*dereferencePre*/);;
PL$188/*preRes*/["push"]((this["tryCatchFunctionStr"] + "(function("));;
PL$188/*preRes*/["push"](PL$186/*promiseNameStr*/);;
PL$188/*preRes*/["push"]("){");;
PL$49/*res*/["addPre"](PL$188/*preRes*/);;
PL$189/*dereferencePost*/ = this["dereferencePromisePostCode"]({"value": PL$185/*expressionRes*/});
PL$190/*postRes*/ = this["newResult"]();
PL$190/*postRes*/["push"](("}), " + this["catchFunctionStr"]));;
PL$190/*postRes*/["push"](PL$189/*dereferencePost*/);;
PL$190/*postRes*/["push"](";");;
PL$49/*res*/["addPost"](PL$190/*postRes*/);;
PL$191/*promiseType*/ = PL$185/*expressionRes*/["getType"]();
PL$49/*res*/["setType"](this["getClassFromPromiseOf"](PL$191/*promiseType*/));;
return PL$49/*res*/;;
;
});;
this["expUnaryExpression"] = (function(PL$184/*parExpression*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"](PL$184/*parExpression*/["operator"]);;
PL$49/*res*/["push"](" ");;
PL$49/*res*/["pushType"](this["expectTypeVar"](this["parseExpression"](PL$184/*parExpression*/["argument"])));;
return PL$49/*res*/;;
;
});;
this["expRequireExpression"] = (function(PL$184/*parExpression*/){
var PL$49/*res*/;
var PL$185/*expressionRes*/;
var PL$186/*promiseNameStr*/;
var PL$187/*dereferencePre*/;
var PL$188/*preRes*/;
var PL$189/*dereferencePost*/;
var PL$190/*postRes*/;
;
PL$49/*res*/ = this["newResult"]();
this["common"]["useRequire"] = true;;
PL$185/*expressionRes*/ = this["newResult"]();
PL$185/*expressionRes*/["push"]("__requireFun(");;
PL$185/*expressionRes*/["push"](this["parseExpression"](PL$184/*parExpression*/));;
PL$185/*expressionRes*/["push"](")");;
PL$185/*expressionRes*/["setType"]("var");;
PL$186/*promiseNameStr*/ = this["getUniqueName"]();
PL$49/*res*/["makePromising"]();;
PL$49/*res*/["setPromiseName"](PL$186/*promiseNameStr*/);;
PL$187/*dereferencePre*/ = this["dereferencePromisePreCode"]({"value": PL$185/*expressionRes*/});
PL$188/*preRes*/ = this["newResult"]();
PL$188/*preRes*/["push"](PL$187/*dereferencePre*/);;
PL$188/*preRes*/["push"]((this["tryCatchFunctionStr"] + "(function("));;
PL$188/*preRes*/["push"](PL$186/*promiseNameStr*/);;
PL$188/*preRes*/["push"]("){");;
PL$49/*res*/["addPre"](PL$188/*preRes*/);;
PL$189/*dereferencePost*/ = this["dereferencePromisePostCode"]({"value": PL$185/*expressionRes*/});
PL$190/*postRes*/ = this["newResult"]();
PL$190/*postRes*/["push"](("}), " + this["catchFunctionStr"]));;
PL$190/*postRes*/["push"](PL$189/*dereferencePost*/);;
PL$190/*postRes*/["push"](";");;
PL$49/*res*/["addPost"](PL$190/*postRes*/);;
PL$49/*res*/["setType"]("var");;
return PL$49/*res*/;;
;
});;
this["expNewExpression"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$192/*typed*/;
var PL$69/*type*/;
var PL$32/*i*/;
var PL$193/*constructorType*/;
var PL$194/*expression*/;
;
PL$49/*res*/ = this["newResult"]();
PL$192/*typed*/ = false;
PL$69/*type*/ = "var";
if((PL$24/*par*/["callee"] && (PL$24/*par*/["callee"]["type"] == "Identifier"))){
PL$69/*type*/ = this["getType"](PL$27/*identifierName*/(PL$24/*par*/["callee"]), PL$24/*par*/, {"dontThrow": true});;
if(PL$69/*type*/){
PL$49/*res*/["push"]("new ");;
PL$49/*res*/["push"](this["getConstructorName"](PL$24/*par*/["callee"]));;
PL$49/*res*/["push"]("(");;
PL$192/*typed*/ = true;;
PL$49/*res*/["setType"](this["createTemporaryTrackedClass"](PL$69/*type*/));;
};
;
};
;
if(! PL$192/*typed*/){
PL$49/*res*/["push"]("new ");;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["callee"])));;
PL$49/*res*/["push"]("(");;
};
;
PL$32/*i*/ = 0;
PL$193/*constructorType*/;
if(PL$192/*typed*/){
PL$193/*constructorType*/ = this["getConstructorType"]({"type": PL$69/*type*/}, PL$24/*par*/);;
};
;
for(PL$32/*i*/;(PL$32/*i*/ < PL$24/*par*/["arguments"]["length"]);++PL$32/*i*/){{if(PL$32/*i*/){
PL$49/*res*/["push"](", ");;
};
;
PL$194/*expression*/ = this["parseExpression"](PL$24/*par*/["arguments"][PL$32/*i*/]);
if(PL$192/*typed*/){
PL$49/*res*/["push"](this["getPassAsTypeCode"]({"value": PL$194/*expression*/,
"valueType": PL$194/*expression*/["getType"](),
"type": this["getFunctionArgumentType"](PL$193/*constructorType*/, PL$32/*i*/, PL$24/*par*/),
"errorFun": this["getWarningFun"](PL$24/*par*/)}));;

}else{
PL$49/*res*/["push"](this["expectTypeVar"](PL$194/*expression*/));;
};
;
}};
;
PL$49/*res*/["push"](")");;
if(! PL$192/*typed*/){
PL$49/*res*/["setType"]("var");;
};
;
return PL$49/*res*/;;
;
});;
this["connectExpression"] = (function(PL$54/*parParsed*/){
var PL$49/*res*/;
var PL$195/*signalObject*/;
var PL$196/*signalProperty*/;
var PL$197/*slotObject*/;
var PL$198/*slotProperty*/;
var PL$199/*fun*/;
;
PL$49/*res*/ = this["newResult"]();
if((PL$54/*parParsed*/["signal"]["type"] != "MemberExpression")){
this["error"](PL$54/*parParsed*/["signal"], PL$12/*errorMsg*/["expectedMemberExpression"]);;
};
;
if(PL$54/*parParsed*/["signal"]["computed"]){
this["error"](PL$54/*parParsed*/["signal"], PL$12/*errorMsg*/["noComputedMembersAllowed"]);;
};
;
PL$195/*signalObject*/ = this["parseExpression"](PL$54/*parParsed*/["signal"]["object"]);
PL$196/*signalProperty*/ = PL$27/*identifierName*/(PL$54/*parParsed*/["signal"]["property"]);
if(PL$54/*parParsed*/["slot"]){
if((PL$54/*parParsed*/["slot"]["type"] != "MemberExpression")){
this["error"](PL$54/*parParsed*/["slot"], PL$12/*errorMsg*/["expectedMemberExpression"]);;
};
;
if(PL$54/*parParsed*/["slot"]["computed"]){
this["error"](PL$54/*parParsed*/["slot"], PL$12/*errorMsg*/["noComputedMembersAllowed"]);;
};
;
PL$197/*slotObject*/ = this["parseExpression"](PL$54/*parParsed*/["slot"]["object"]);
PL$198/*slotProperty*/ = PL$27/*identifierName*/(PL$54/*parParsed*/["slot"]["property"]);
PL$49/*res*/["push"](this["connectSlotCode"]({"signalObject": PL$195/*signalObject*/,
"signalProperty": PL$196/*signalProperty*/,
"slotObject": PL$197/*slotObject*/,
"slotProperty": PL$198/*slotProperty*/,
"errorFun": this["getWarningFun"](PL$54/*parParsed*/)}));;

}else{
if(PL$54/*parParsed*/["fun"]){
PL$199/*fun*/ = this["parseExpression"](PL$54/*parParsed*/["fun"]);
PL$49/*res*/["push"](this["connectFunCode"]({"signalObject": PL$195/*signalObject*/,
"signalProperty": PL$196/*signalProperty*/,
"fun": PL$199/*fun*/,
"errorFun": this["getWarningFun"](PL$54/*parParsed*/)}));;

}else{
this["error"](PL$54/*parParsed*/, PL$12/*errorMsg*/["unknownConnect"]);;
};
};
;
PL$49/*res*/["setType"]("var");;
return PL$49/*res*/;;
;
});;
this["breakOrContinuePromise"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$200/*promiseName*/;
var PL$201/*outerBlock*/;
var PL$136/*b*/;
var PL$138/*block*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["makePromising"]();;
PL$200/*promiseName*/ = (PL$24/*par*/["promiseName"] || this["getUniqueName"]());
PL$49/*res*/["setPromiseName"](PL$200/*promiseName*/);;
this["stack"]("breakCode");;
this["stack"]("continueCode");;
this["breakCode"] = (((PL$200/*promiseName*/ + ".resolve(false); return ") + PL$200/*promiseName*/) + ";\n");;
this["continueCode"] = (((PL$200/*promiseName*/ + ".resolve(true); return ") + PL$200/*promiseName*/) + ";\n");;
PL$49/*res*/["push"]((((("var " + PL$200/*promiseName*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$201/*outerBlock*/ = this["newResult"]();
if(PL$24/*par*/["preCondition"]){
PL$201/*outerBlock*/["push"]("if(");;
PL$201/*outerBlock*/["push"](PL$24/*par*/["preCondition"]);;
PL$201/*outerBlock*/["push"]("){");;
};
;
PL$136/*b*/ = PL$24/*par*/["block"];
PL$136/*b*/["brackets"] = false;;
PL$138/*block*/ = this["blockCreator"](PL$136/*b*/, {"postCode": this["newResult"](this["continueCode"])});
PL$201/*outerBlock*/["push"](this["makeCompleteStatement"](PL$138/*block*/));;
if(PL$24/*par*/["preCondition"]){
PL$201/*outerBlock*/["push"]("}else{");;
PL$201/*outerBlock*/["push"](this["breakCode"]);;
PL$201/*outerBlock*/["push"]("};\n");;
};
;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$201/*outerBlock*/));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
return PL$49/*res*/;;
;
});;
this["generateLoop"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$202/*loopFun*/;
var PL$203/*loopEndPromise*/;
var PL$204/*loopCode*/;
var PL$205/*doFun*/;
var PL$206/*doFunStatement*/;
;
PL$49/*res*/ = this["newResult"]();
PL$202/*loopFun*/ = this["getUniqueName"]();
PL$203/*loopEndPromise*/ = this["getUniqueName"]();
PL$49/*res*/["push"]((((("var " + PL$203/*loopEndPromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$49/*res*/["push"]((("var " + PL$202/*loopFun*/) + " = function(){"));;
PL$204/*loopCode*/ = this["breakOrContinuePromise"]({"block": PL$24/*par*/["block"],
"preCondition": PL$24/*par*/["preCondition"],
"postCode": PL$24/*par*/["postCode"]});
PL$49/*res*/["push"](this["makeStatement"](this["makeCompleteStatement"](PL$204/*loopCode*/)));;
PL$49/*res*/["push"]("return ");;
PL$49/*res*/["push"](PL$204/*loopCode*/["getPromiseName"]());;
PL$49/*res*/["push"](";\n");;
PL$49/*res*/["push"]("};\n");;
PL$205/*doFun*/ = this["getUniqueName"]();
PL$49/*res*/["push"]((("var " + PL$205/*doFun*/) + " = function(){"));;
PL$49/*res*/["push"](PL$202/*loopFun*/);;
PL$49/*res*/["push"]("().then(function(contLoop){\n");;
PL$49/*res*/["push"]("if (contLoop){");;
PL$206/*doFunStatement*/ = this["newResult"]();
if(PL$24/*par*/["postCode"]){
PL$206/*doFunStatement*/["push"](this["makeStatement"](PL$24/*par*/["postCode"]));;
};
;
PL$206/*doFunStatement*/["push"]((PL$205/*doFun*/ + "();"));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$206/*doFunStatement*/));;
PL$49/*res*/["push"]("}else{");;
PL$49/*res*/["push"]((PL$203/*loopEndPromise*/ + ".resolve();"));;
PL$49/*res*/["push"]("};\n");;
PL$49/*res*/["push"]("});\n");;
PL$49/*res*/["push"]("};\n");;
PL$49/*res*/["push"]((PL$205/*doFun*/ + "();\n"));;
PL$49/*res*/["push"](PL$203/*loopEndPromise*/);;
PL$49/*res*/["push"](".then(function(){");;
PL$49/*res*/["addPost"]("});");;
return PL$49/*res*/;;
;
});;
this["expForStatement"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$207/*statement*/;
var PL$208/*promising*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
PL$49/*res*/ = this["newResult"]();
PL$207/*statement*/;
PL$208/*promising*/ = false;
if(((PL$37/*checkPromising*/(PL$24/*par*/["test"]) || PL$37/*checkPromising*/(PL$24/*par*/["update"])) || PL$37/*checkPromising*/(PL$24/*par*/["body"]))){
PL$208/*promising*/ = true;;
};
;
if(PL$208/*promising*/){
PL$49/*res*/["push"](this["makeStatement"](this["parseExpression"](PL$24/*par*/["init"])));;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$49/*res*/["push"](this["generateLoop"]({"block": PL$24/*par*/["body"],
"preCondition": this["parseExpression"](PL$24/*par*/["test"]),
"postCode": this["parseExpression"](PL$24/*par*/["update"])}));;
this["unstack"]("algorithmicCode");;

}else{
PL$49/*res*/["push"]("for(");;
PL$49/*res*/["push"](this["parseExpression"](PL$24/*par*/["init"]));;
PL$49/*res*/["push"](";");;
PL$49/*res*/["push"](this["parseExpression"](PL$24/*par*/["test"]));;
PL$49/*res*/["push"](";");;
PL$49/*res*/["push"](this["parseExpression"](PL$24/*par*/["update"]));;
PL$49/*res*/["push"]("){");;
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
this["stack"]("continueCode");;
this["continueCode"] = "continue;";;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$207/*statement*/ = this["newResult"]();;
PL$207/*statement*/["push"](this["expBlockStatement"](PL$24/*par*/["body"]));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$207/*statement*/));;
this["unstack"]("algorithmicCode");;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
PL$49/*res*/["push"]("}");;
};
;
this["unstack"]("dynamicCode");;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["expForInStatement"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$207/*statement*/;
var PL$208/*promising*/;
var PL$209/*iteratorRes*/;
var PL$210/*iteratorAccess*/;
var PL$211/*arrayName*/;
var PL$212/*iName*/;
var PL$213/*conditionRes*/;
var PL$214/*postCodeRes*/;
var PL$136/*b*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$49/*res*/ = this["newResult"]();
PL$207/*statement*/;
PL$208/*promising*/ = false;
if(PL$37/*checkPromising*/(PL$24/*par*/["body"])){
PL$208/*promising*/ = true;;
};
;
if(PL$208/*promising*/){
PL$209/*iteratorRes*/ = this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["left"]));
PL$210/*iteratorAccess*/ = PL$209/*iteratorRes*/;
if(PL$209/*iteratorRes*/["promising"]){
PL$210/*iteratorAccess*/ = PL$209/*iteratorRes*/["getPromiseName"]();;
};
;
PL$211/*arrayName*/ = this["getUniqueName"]();
PL$49/*res*/["addPre"]((("var " + PL$211/*arrayName*/) + " = [];"));;
PL$49/*res*/["push"]("for(");;
PL$49/*res*/["push"](PL$209/*iteratorRes*/);;
PL$49/*res*/["push"](" in ");;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["right"])));;
PL$49/*res*/["push"]("){");;
PL$49/*res*/["push"]((PL$211/*arrayName*/ + ".push("));;
PL$49/*res*/["push"](PL$210/*iteratorAccess*/);;
PL$49/*res*/["push"](");");;
PL$49/*res*/["push"]("};");;
PL$49/*res*/["push"](PL$209/*iteratorRes*/);;
PL$49/*res*/["push"](((" = " + PL$211/*arrayName*/) + "[0];"));;
PL$212/*iName*/ = this["getUniqueName"]();
PL$49/*res*/["push"]((("var " + PL$212/*iName*/) + " = 0;"));;
PL$213/*conditionRes*/ = this["newResult"]();
PL$213/*conditionRes*/["push"]((((PL$212/*iName*/ + " < ") + PL$211/*arrayName*/) + ".length"));;
PL$214/*postCodeRes*/ = this["newResult"]();
PL$214/*postCodeRes*/["push"]((PL$212/*iName*/ + "++;"));;
PL$214/*postCodeRes*/["push"](PL$209/*iteratorRes*/);;
PL$214/*postCodeRes*/["push"](((((" = " + PL$211/*arrayName*/) + "[") + PL$212/*iName*/) + "];"));;
PL$49/*res*/["push"](this["generateLoop"]({"block": PL$24/*par*/["body"],
"preCondition": PL$213/*conditionRes*/,
"postCode": PL$214/*postCodeRes*/}));;
PL$49/*res*/["push"]("}");;

}else{
PL$49/*res*/["push"]("for(");;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["left"])));;
PL$49/*res*/["push"](" in ");;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["right"])));;
PL$49/*res*/["push"](")");;
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
this["stack"]("continueCode");;
this["continueCode"] = "continue;";;
PL$207/*statement*/ = this["newResult"]();;
PL$136/*b*/ = PL$24/*par*/["body"];
PL$136/*b*/["brackets"] = true;;
PL$207/*statement*/["push"](this["blockCreator"](PL$136/*b*/));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$207/*statement*/));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
};
;
this["unstack"]("dynamicCode");;
this["unstack"]("algorithmicCode");;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["whileStatement"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$215/*statements*/;
var PL$108/*condition*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$49/*res*/ = this["newResult"]();
PL$215/*statements*/;
PL$108/*condition*/ = this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["test"]));
if((PL$37/*checkPromising*/(PL$108/*condition*/) || PL$37/*checkPromising*/(PL$24/*par*/["body"]))){
PL$49/*res*/["push"](this["generateLoop"]({"block": PL$24/*par*/["body"],
"preCondition": PL$108/*condition*/}));;

}else{
PL$49/*res*/["push"]("while(");;
PL$49/*res*/["push"](PL$108/*condition*/);;
PL$49/*res*/["push"]("){\n");;
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
this["stack"]("continueCode");;
this["continueCode"] = "continue;";;
PL$49/*res*/["push"](this["makeCompleteStatement"](this["parseExpression"](PL$24/*par*/["body"])));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
PL$49/*res*/["push"]("}");;
};
;
this["unstack"]("dynamicCode");;
this["unstack"]("algorithmicCode");;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["expIfStatement"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$208/*promising*/;
var PL$171/*continuePromise*/;
var PL$216/*continueCode*/;
var PL$207/*statement*/;
var PL$136/*b*/;
var PL$137/*extraPar*/;
;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$49/*res*/ = this["newResult"]();
PL$208/*promising*/ = false;
if((PL$24/*par*/["consequent"] && PL$37/*checkPromising*/(PL$24/*par*/["consequent"]))){
PL$208/*promising*/ = true;;
};
;
if((PL$24/*par*/["alternate"] && PL$37/*checkPromising*/(PL$24/*par*/["alternate"]))){
PL$208/*promising*/ = true;;
};
;
PL$171/*continuePromise*/;
PL$216/*continueCode*/;
if(PL$208/*promising*/){
PL$171/*continuePromise*/ = this["getUniqueName"]();;
PL$49/*res*/["push"]((((("var " + PL$171/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$216/*continueCode*/ = (PL$171/*continuePromise*/ + ".resolve();");;
};
;
PL$49/*res*/["push"]("if(");;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["test"])));;
PL$49/*res*/["push"]("){\n");;
if(! PL$24/*par*/["consequent"]){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["unknownIfStatement"]);;
};
;
PL$207/*statement*/ = this["newResult"]();
PL$136/*b*/;
if((PL$24/*par*/["consequent"]["type"] == "BlockStatement")){
PL$136/*b*/ = PL$24/*par*/["consequent"]["body"];;

}else{
PL$136/*b*/ = [PL$24/*par*/["consequent"]];;
};
;
PL$136/*b*/["brackets"] = false;;
PL$137/*extraPar*/ = {};
if(PL$208/*promising*/){
PL$137/*extraPar*/["postCode"] = this["newResult"](PL$216/*continueCode*/);;
};
;
PL$207/*statement*/["push"](this["blockCreator"](PL$136/*b*/, PL$137/*extraPar*/));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$207/*statement*/));;
if(PL$24/*par*/["alternate"]){
PL$49/*res*/["push"]("\n}else{\n");;
PL$207/*statement*/ = this["newResult"]();;
if((PL$24/*par*/["alternate"]["type"] == "BlockStatement")){
PL$136/*b*/ = PL$24/*par*/["alternate"]["body"];;

}else{
PL$136/*b*/ = [PL$24/*par*/["alternate"]];;
};
;
PL$136/*b*/["brackets"] = false;;
PL$137/*extraPar*/ = {};;
if(PL$208/*promising*/){
PL$137/*extraPar*/["postCode"] = this["newResult"](PL$216/*continueCode*/);;
};
;
PL$207/*statement*/["push"](this["blockCreator"](PL$136/*b*/, PL$137/*extraPar*/));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$207/*statement*/));;

}else{
if(PL$208/*promising*/){
PL$49/*res*/["push"]("\n}else{\n");;
PL$207/*statement*/ = this["newResult"]();;
PL$207/*statement*/["push"](PL$216/*continueCode*/);;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$207/*statement*/));;
};
};
;
PL$49/*res*/["push"]("}");;
if(PL$208/*promising*/){
PL$49/*res*/["push"]((("; " + PL$171/*continuePromise*/) + ".then(function(){"));;
PL$49/*res*/["addPost"]("});");;
};
;
this["unstack"]("conditionalCode");;
this["unstack"]("algorithmicCode");;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["conditionalExpression"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$217/*tempPromise*/;
var PL$218/*tempValue*/;
var PL$219/*trueExtraCode*/;
var PL$220/*falseExtraCode*/;
;
PL$49/*res*/ = this["newResult"]();
if((PL$24/*par*/["consequent"]["promising"] || PL$24/*par*/["alternate"]["promising"])){
PL$49/*res*/["makePromising"]();;
PL$217/*tempPromise*/ = this["getUniqueName"]();
PL$218/*tempValue*/ = this["getUniqueName"]();
PL$49/*res*/["addPre"]("var ");;
PL$49/*res*/["addPre"](PL$217/*tempPromise*/);;
PL$49/*res*/["addPre"](((" = " + this["newPromiseStr"]()) + ";\n"));;
PL$49/*res*/["addPre"]("if(");;
PL$49/*res*/["addPre"](this["parseExpression"](PL$24/*par*/["test"]));;
PL$49/*res*/["addPre"]("){");;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
PL$219/*trueExtraCode*/ = this["newResult"]();
PL$219/*trueExtraCode*/["push"](PL$217/*tempPromise*/);;
PL$219/*trueExtraCode*/["push"](".resolve(");;
PL$219/*trueExtraCode*/["push"](this["parseExpression"](PL$24/*par*/["consequent"]));;
PL$219/*trueExtraCode*/["push"](");\n");;
PL$49/*res*/["addPre"](this["makeCompleteStatement"](PL$219/*trueExtraCode*/));;
PL$49/*res*/["addPre"]("}else{");;
PL$220/*falseExtraCode*/ = this["newResult"]();
PL$220/*falseExtraCode*/["push"](PL$217/*tempPromise*/);;
PL$220/*falseExtraCode*/["push"](".resolve(");;
PL$220/*falseExtraCode*/["push"](this["parseExpression"](PL$24/*par*/["alternate"]));;
PL$220/*falseExtraCode*/["push"](");\n");;
PL$49/*res*/["addPre"](this["makeCompleteStatement"](PL$220/*falseExtraCode*/));;
PL$49/*res*/["addPre"]("};\n");;
PL$49/*res*/["addPre"](PL$217/*tempPromise*/);;
PL$49/*res*/["addPre"](".then(");;
PL$49/*res*/["setPromiseName"](this["getUniqueName"]());;
PL$49/*res*/["addPre"](PL$49/*res*/["getPromiseName"]());;
PL$49/*res*/["addPre"]("){");;
PL$49/*res*/["addPost"]("});");;
this["unstack"]("conditionalCode");;

}else{
PL$49/*res*/["push"]("(");;
PL$49/*res*/["push"](this["parseExpression"](PL$24/*par*/["test"]));;
PL$49/*res*/["push"](" ? ");;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
PL$49/*res*/["push"](this["parseExpression"](PL$24/*par*/["consequent"]));;
PL$49/*res*/["push"](" : ");;
PL$49/*res*/["push"](this["parseExpression"](PL$24/*par*/["alternate"]));;
PL$49/*res*/["push"](")");;
this["unstack"]("conditionalCode");;
};
;
PL$49/*res*/["setType"]("var");;
return PL$49/*res*/;;
;
});;
this["expSwitchStatement"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$208/*promising*/;
var PL$171/*continuePromise*/;
var PL$216/*continueCode*/;
var PL$221/*discriminant*/;
var PL$222/*cases*/;
var PL$207/*statement*/;
var PL$223/*hasDefault*/;
var PL$224/*defaultCase*/;
var PL$225/*isDefault*/;
var PL$226/*defaultCheck*/;
var PL$227/*firstCheck*/;
var PL$228/*hasFirstCheck*/;
var PL$229/*currentCase*/;
var PL$230/*caseFun*/;
var PL$231/*checkFun*/;
var PL$232/*nextCheckCode*/;
var PL$233/*j*/;
var PL$234/*nextCaseCode*/;
var PL$235/*checkCode*/;
var PL$136/*b*/;
var PL$137/*extraPar*/;
var PL$32/*i*/;
;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$49/*res*/ = this["newResult"]();
PL$208/*promising*/ = false;
if((PL$24/*par*/["cases"] && PL$37/*checkPromising*/(PL$24/*par*/["cases"]))){
PL$208/*promising*/ = true;;
};
;
PL$171/*continuePromise*/;
PL$216/*continueCode*/;
if(PL$208/*promising*/){
PL$171/*continuePromise*/ = this["getUniqueName"]();;
PL$49/*res*/["push"]((((("var " + PL$171/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$216/*continueCode*/ = (PL$171/*continuePromise*/ + ".resolve(); return;");;
this["stack"]("breakCode");;
this["breakCode"] = PL$216/*continueCode*/;;
PL$221/*discriminant*/ = this["getUniqueName"]("discriminant");
PL$49/*res*/["push"]((("var " + PL$221/*discriminant*/) + " = "));;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["discriminant"])));;
PL$49/*res*/["push"](";\n");;
PL$222/*cases*/ = [];
PL$207/*statement*/;
PL$223/*hasDefault*/ = false;
PL$224/*defaultCase*/;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$24/*par*/["cases"]["length"]);++PL$32/*i*/){{PL$225/*isDefault*/ = false;
if(! PL$24/*par*/["cases"][PL$32/*i*/]["test"]){
PL$225/*isDefault*/ = true;;
if(! PL$223/*hasDefault*/){
PL$223/*hasDefault*/ = true;;
PL$224/*defaultCase*/ = PL$24/*par*/["cases"][PL$32/*i*/];;
};
;
};
;
PL$222/*cases*/["push"]({"theCase": PL$24/*par*/["cases"][PL$32/*i*/],
"caseFun": this["getUniqueName"](),
"checkFun": this["getUniqueName"](),
"isDefault": PL$225/*isDefault*/});;
}};
;
PL$226/*defaultCheck*/ = PL$216/*continueCode*/;
if(PL$223/*hasDefault*/){
PL$226/*defaultCheck*/ = (PL$224/*defaultCase*/["checkFun"] + "();");;
};
;
PL$227/*firstCheck*/ = PL$216/*continueCode*/;
PL$228/*hasFirstCheck*/ = false;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$222/*cases*/["length"]);++PL$32/*i*/){{PL$229/*currentCase*/ = PL$222/*cases*/[PL$32/*i*/]["theCase"];
PL$230/*caseFun*/ = PL$222/*cases*/[PL$32/*i*/]["caseFun"];
PL$231/*checkFun*/ = PL$222/*cases*/[PL$32/*i*/]["checkFun"];
if(! PL$228/*hasFirstCheck*/){
PL$228/*hasFirstCheck*/ = true;;
PL$227/*firstCheck*/ = (PL$231/*checkFun*/ + "()");;
};
;
PL$232/*nextCheckCode*/ = PL$226/*defaultCheck*/;
for(PL$233/*j*/ = (PL$32/*i*/ + 1);(PL$233/*j*/ < PL$222/*cases*/["length"]);++PL$233/*j*/){{if(! PL$222/*cases*/[PL$233/*j*/]["isDefault"]){
PL$232/*nextCheckCode*/ = (PL$222/*cases*/[PL$233/*j*/]["checkFun"] + "()");;
break;;
};
;
}};
;
PL$234/*nextCaseCode*/ = PL$216/*continueCode*/;
if(PL$222/*cases*/[(PL$32/*i*/ + 1)]){
PL$234/*nextCaseCode*/ = (PL$222/*cases*/[(PL$32/*i*/ + 1)]["caseFun"] + "(); return;");;
};
;
PL$49/*res*/["push"]((("var " + PL$231/*checkFun*/) + " = function(){"));;
PL$235/*checkCode*/ = this["newResult"]();
PL$235/*checkCode*/["push"]((("if(" + PL$221/*discriminant*/) + " === "));;
PL$235/*checkCode*/["push"](this["expectTypeVar"](this["parseExpression"](PL$229/*currentCase*/["test"])));;
PL$235/*checkCode*/["push"]("){");;
PL$235/*checkCode*/["push"](PL$230/*caseFun*/);;
PL$235/*checkCode*/["push"]("(); return; };\n");;
PL$235/*checkCode*/["push"](PL$232/*nextCheckCode*/);;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$235/*checkCode*/));;
PL$49/*res*/["push"]("};\n");;
PL$49/*res*/["push"]((("var " + PL$230/*caseFun*/) + " = function(){"));;
PL$207/*statement*/ = this["newResult"]();;
PL$136/*b*/ = PL$229/*currentCase*/["consequent"];
PL$137/*extraPar*/ = {};
if(PL$208/*promising*/){
PL$137/*extraPar*/["postCode"] = this["newResult"]();;
PL$137/*extraPar*/["postCode"]["push"](PL$234/*nextCaseCode*/);;
};
;
PL$207/*statement*/["push"](this["blockCreator"](PL$136/*b*/, PL$137/*extraPar*/));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$207/*statement*/));;
PL$49/*res*/["push"]("};\n");;
}};
;
PL$49/*res*/["push"](PL$227/*firstCheck*/);;
PL$49/*res*/["push"]((("; " + PL$171/*continuePromise*/) + ".then(function(){"));;
PL$49/*res*/["addPost"]("});");;
this["unstack"]("breakCode");;

}else{
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
PL$49/*res*/["push"]("switch (");;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["discriminant"])));;
PL$49/*res*/["push"]("){\n");;
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$24/*par*/["cases"]["length"]);++PL$32/*i*/){{PL$229/*currentCase*/ = PL$24/*par*/["cases"][PL$32/*i*/];
if((PL$229/*currentCase*/["type"] != "SwitchCase")){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["unknownCase"]);;
};
;
if(PL$229/*currentCase*/["test"]){
PL$49/*res*/["push"]("case ");;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$229/*currentCase*/["test"])));;
PL$49/*res*/["push"](":\n");;

}else{
PL$49/*res*/["push"]("default");;
PL$49/*res*/["push"](":\n");;
};
;
PL$49/*res*/["push"](this["blockCreator"](PL$229/*currentCase*/["consequent"]));;
}};
;
PL$49/*res*/["push"]("}\n");;
this["unstack"]("breakCode");;
};
;
this["unstack"]("conditionalCode");;
this["unstack"]("algorithmicCode");;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["expBreakStatement"] = (function(PL$54/*parParsed*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
if(this["breakCode"]){
PL$49/*res*/["push"](this["breakCode"]);;

}else{
PL$49/*res*/["push"]("break;");;
};
;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["expContinueStatement"] = (function(PL$54/*parParsed*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
if(this["continueCode"]){
PL$49/*res*/["push"](this["continueCode"]);;

}else{
PL$49/*res*/["push"]("continue;");;
};
;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["expBinaryExpression"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$236/*left*/;
var PL$237/*right*/;
var PL$238/*ltype*/;
var PL$239/*rtype*/;
var PL$217/*tempPromise*/;
var PL$218/*tempValue*/;
var PL$240/*rightExtraCode*/;
;
PL$49/*res*/ = this["newResult"]();
PL$236/*left*/ = this["parseExpression"](PL$24/*par*/["left"]);
PL$237/*right*/ = this["parseExpression"](PL$24/*par*/["right"]);
PL$49/*res*/["setType"]("var");;
if(((PL$24/*par*/["operator"] == "||") && PL$24/*par*/["right"]["promising"])){
PL$238/*ltype*/ = PL$236/*left*/["getType"]();
PL$239/*rtype*/ = PL$237/*right*/["getType"]();
if(((PL$238/*ltype*/ !== this["getType"]("var")) || (PL$239/*rtype*/ !== this["getType"]("var")))){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["notImplemented"]);;
};
;
PL$49/*res*/["makePromising"]();;
PL$217/*tempPromise*/ = this["getUniqueName"]();
PL$218/*tempValue*/ = this["getUniqueName"]();
PL$49/*res*/["addPre"]("var ");;
PL$49/*res*/["addPre"](PL$217/*tempPromise*/);;
PL$49/*res*/["addPre"](((" = " + this["newPromiseStr"]()) + ";\n"));;
PL$49/*res*/["addPre"]("var ");;
PL$49/*res*/["addPre"](PL$218/*tempValue*/);;
PL$49/*res*/["addPre"](" = ");;
PL$49/*res*/["addPre"](PL$236/*left*/);;
PL$49/*res*/["addPre"](";\n");;
PL$49/*res*/["addPre"]("if (");;
PL$49/*res*/["addPre"](PL$218/*tempValue*/);;
PL$49/*res*/["addPre"]("){ ");;
PL$49/*res*/["addPre"](PL$217/*tempPromise*/);;
PL$49/*res*/["addPre"](".resolve(");;
PL$49/*res*/["addPre"](PL$218/*tempValue*/);;
PL$49/*res*/["addPre"](") }else{ ");;
PL$240/*rightExtraCode*/ = this["newResult"]();
PL$240/*rightExtraCode*/["push"](PL$217/*tempPromise*/);;
PL$240/*rightExtraCode*/["push"](".resolve(");;
PL$240/*rightExtraCode*/["push"](PL$237/*right*/);;
PL$240/*rightExtraCode*/["push"](");\n");;
PL$49/*res*/["addPre"](this["makeCompleteStatement"](PL$240/*rightExtraCode*/));;
PL$49/*res*/["addPre"]("};\n");;
PL$49/*res*/["addPre"](PL$217/*tempPromise*/);;
PL$49/*res*/["addPre"](".then(");;
PL$49/*res*/["setPromiseName"](this["getUniqueName"]());;
PL$49/*res*/["addPre"](PL$49/*res*/["getPromiseName"]());;
PL$49/*res*/["addPre"]("){");;
PL$49/*res*/["addPost"]("});");;

}else{
PL$49/*res*/["push"](this["getBinaryExpressionCode"]({"left": PL$236/*left*/,
"right": PL$237/*right*/,
"operator": PL$24/*par*/["operator"],
"errorFun": this["getWarningFun"](PL$24/*par*/)}));;
};
;
return PL$49/*res*/;;
;
});;
this["expMemberExpression"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$241/*base*/;
;
PL$49/*res*/ = this["newResult"]();
PL$241/*base*/ = this["parseExpression"](PL$24/*par*/["object"]);
PL$49/*res*/["pushType"](this["getGetPropertyCode"]({"instance": PL$241/*base*/,
"property": (PL$24/*par*/["computed"] ? undefined : PL$27/*identifierName*/(PL$24/*par*/["property"])),
"propertyValue": (PL$24/*par*/["computed"] ? this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["property"])) : undefined),
"errorFun": this["getWarningFun"](PL$24/*par*/)}));;
return PL$49/*res*/;;
;
});;
this["newInherited"] = (function(){
;
return new PL$242/*InheritedSystem*/(this);;
;
});;
PL$242/*InheritedSystem*/ = (function(PL$24/*par*/){
;
this["instance"] = PL$24/*par*/;;
this["used"] = {};;
;
});
PL$242/*InheritedSystem*/["prototype"] = {"setCurrent": (function(PL$24/*par*/){
;
this["currentMember"] = PL$24/*par*/;;
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
this["expObjectExpression"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$243/*isClassObject*/;
var PL$32/*i*/;
var PL$88/*l*/;
var PL$244/*currentMember*/;
var PL$158/*prop*/;
var PL$245/*v*/;
var PL$25/*name*/;
var PL$246/*functionRes*/;
;
PL$49/*res*/ = this["newResult"]();
PL$243/*isClassObject*/ = this["isClassObject"];
this["stack"]("isClassObject");;
this["isClassObject"] = false;;
PL$49/*res*/["push"]("{");;
PL$32/*i*/ = 0;
PL$88/*l*/ = ((PL$24/*par*/["properties"] && PL$24/*par*/["properties"]["length"]) || 0);
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{this["isClassObject"] = false;;
PL$244/*currentMember*/;
if(PL$32/*i*/){
PL$49/*res*/["push"](",\n");;
};
;
PL$158/*prop*/ = PL$24/*par*/["properties"][PL$32/*i*/];
if((PL$158/*prop*/["kind"] == "init")){
PL$244/*currentMember*/ = PL$27/*identifierName*/(PL$158/*prop*/["key"]);;
if(this["inheritedSystem"]){
this["inheritedSystem"]["setCurrent"](PL$244/*currentMember*/);;
};
;
PL$49/*res*/["push"]((PL$14/*stringEncodeStr*/(PL$27/*identifierName*/(PL$158/*prop*/["key"])) + ": "));;
if(PL$158/*prop*/["value"]){
if(PL$35/*checkIsFunction*/(PL$158/*prop*/["value"])){
if(PL$243/*isClassObject*/){
this["isClassObject"] = true;;
};
;
};
;
PL$245/*v*/ = this["parseExpression"](PL$158/*prop*/["value"]);
PL$49/*res*/["push"](this["expectTypeVar"](this["getPassAsTypeCode"]({"value": PL$245/*v*/,
"valueType": PL$245/*v*/["getType"](),
"type": this["getType"]((PL$158/*prop*/["typename"] || "var"), PL$24/*par*/),
"errorFun": this["getWarningFun"](PL$24/*par*/)})));;
};
;

}else{
if((PL$158/*prop*/["kind"] == "function")){
if(PL$243/*isClassObject*/){
this["isClassObject"] = true;;
};
;
PL$25/*name*/ = PL$27/*identifierName*/(PL$158/*prop*/["id"]);
PL$244/*currentMember*/ = PL$25/*name*/;;
if(this["inheritedSystem"]){
this["inheritedSystem"]["setCurrent"](PL$244/*currentMember*/);;
};
;
PL$158/*prop*/["id"] = undefined;;
PL$49/*res*/["push"]((PL$14/*stringEncodeStr*/(PL$25/*name*/) + ": "));;
PL$246/*functionRes*/ = this["expectTypeVar"](this["parseExpression"](PL$158/*prop*/));
PL$49/*res*/["push"](PL$246/*functionRes*/);;

}else{
if((PL$158/*prop*/["kind"] == "block")){

}else{
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["unknownPropertyAssignmentType"]);;
};
};
};
;
}};
;
PL$49/*res*/["push"]("}");;
PL$49/*res*/["setType"]("var");;
this["unstack"]("isClassObject");;
return PL$49/*res*/;;
;
});;
this["expClassObjectExpression"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
this["stack"]("isClassObject");;
this["isClassObject"] = true;;
PL$49/*res*/ = this["expObjectExpression"](PL$24/*par*/);
this["unstack"]("isClassObject");;
return PL$49/*res*/;;
;
});;
this["expectTypeVar"] = (function(PL$24/*par*/){
var PL$45/*self*/;
var PL$167/*e*/;
;
if((PL$24/*par*/["getType"]() === this["getType"]("var"))){
return PL$24/*par*/;;
};
;
PL$45/*self*/ = this;
PL$167/*e*/ = this["addError"](PL$24/*par*/["getParsed"](), PL$12/*errorMsg*/["expectedVar"]);
PL$18/*classSystem*/["definitionPromise"](PL$24/*par*/["getType"]())["then"]((function(PL$30/*t*/){
;
if((PL$30/*t*/ === PL$45/*self*/["getType"]("var"))){
PL$167/*e*/["resolve"]();;
};
;
;
}));;
return PL$24/*par*/;;
;
});;
this["expVariableStatement"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$247/*declarations*/;
var PL$32/*i*/;
var PL$88/*l*/;
var PL$248/*usedType*/;
var PL$50/*r*/;
;
PL$49/*res*/ = this["newResult"]();
PL$247/*declarations*/ = PL$24/*par*/["declarations"];
if(! PL$247/*declarations*/){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["missingDeclarations"]);;
return "";;
};
;
PL$32/*i*/ = 0;
PL$88/*l*/ = PL$247/*declarations*/["length"];
PL$248/*usedType*/ = this["getType"](PL$27/*identifierName*/(PL$24/*par*/["typename"]), PL$24/*par*/);
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{if((PL$247/*declarations*/[PL$32/*i*/]["type"] == "VariableDeclaration")){
PL$50/*r*/ = this["parseExpression"](PL$247/*declarations*/[PL$32/*i*/]);
PL$49/*res*/["push"](PL$50/*r*/);;

}else{
this["error"](PL$247/*declarations*/[PL$32/*i*/], PL$12/*errorMsg*/["unknownType"]);;
};
;
}};
;
PL$49/*res*/["setType"](PL$248/*usedType*/);;
return PL$49/*res*/;;
;
});;
this["isSameType"] = (function(PL$57/*type1*/, PL$58/*type2*/){
;
return PL$18/*classSystem*/["isSameType"](PL$57/*type1*/, PL$58/*type2*/);;
;
});;
this["expVariableDeclaration"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
if(PL$24/*par*/["init"]){
PL$49/*res*/["pushType"](this["getSetVariableCode"]({"instance": this["getVariable"](PL$27/*identifierName*/(PL$24/*par*/["id"])),
"assignmentType": PL$24/*par*/["id"]["type"],
"value": this["parseExpression"](PL$24/*par*/["init"]),
"operator": "=",
"errorFun": this["getWarningFun"](PL$24/*par*/)}));;

}else{
PL$49/*res*/["pushType"](this["getVariable"](PL$27/*identifierName*/(PL$24/*par*/["id"])));;
};
;
return PL$49/*res*/;;
;
});;
this["getVariable"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
this["_addUsedVariable"](PL$24/*par*/);;
PL$49/*res*/["push"](this["getVariableName"](PL$24/*par*/));;
PL$49/*res*/["setType"](this["getVariableType"](PL$24/*par*/));;
return PL$49/*res*/;;
;
});;
this["getResultType"] = (function(PL$24/*par*/){
var PL$30/*t*/;
;
if(! PL$24/*par*/){
return undefined;;
};
;
if((typeof PL$24/*par*/ == "string")){
return undefined;;
};
;
PL$30/*t*/ = PL$24/*par*/["getType"]();
if((typeof PL$30/*t*/ == "string")){
return this["getType"](PL$30/*t*/);;
};
;
return PL$30/*t*/;;
;
});;
this["getFunctionArgumentType"] = (function(PL$71/*parType*/, PL$249/*parIndex*/, PL$68/*parsed*/){
var PL$250/*retType*/;
var PL$45/*self*/;
;
PL$250/*retType*/ = this["getProvisionalType"](PL$68/*parsed*/);
PL$45/*self*/ = this;
PL$18/*classSystem*/["readyPromise"](PL$71/*parType*/)["then"]((function(PL$71/*parType*/){
;
PL$45/*self*/["resolveProvisional"](PL$250/*retType*/, PL$18/*classSystem*/["getFunctionArgumentType"](PL$71/*parType*/, PL$249/*parIndex*/));;
;
}));;
return PL$250/*retType*/;;
;
});;
this["callClassSystem"] = (function(PL$112/*parFun*/, PL$24/*par*/){
var PL$251/*dynamic*/;
var PL$252/*typeProps*/;
var PL$253/*ignoreProps*/;
var PL$32/*i*/;
var PL$34/*p*/;
var PL$254/*promises*/;
var PL$68/*parsed*/;
var PL$255/*errRes*/;
var PL$45/*self*/;
var PL$256/*resolveType*/;
var PL$30/*t*/;
;
PL$251/*dynamic*/ = false;
PL$252/*typeProps*/ = {"type": true,
"valueType": true,
"leftType": true,
"rightType": true};
PL$253/*ignoreProps*/ = {"errorFun": true,
"parsed": true};
PL$32/*i*/ = 0;
PL$34/*p*/;
PL$254/*promises*/ = [];
PL$68/*parsed*/ = PL$24/*par*/["parsed"];
PL$68/*parsed*/ = (PL$68/*parsed*/ || (PL$24/*par*/["value"] && PL$24/*par*/["value"]["getParsed"]()));;
PL$68/*parsed*/ = (PL$68/*parsed*/ || (PL$24/*par*/["instance"] && PL$24/*par*/["instance"]["getParsed"]()));;
PL$68/*parsed*/ = (PL$68/*parsed*/ || (PL$24/*par*/["left"] && PL$24/*par*/["left"]["getParsed"]()));;
PL$68/*parsed*/ = (PL$68/*parsed*/ || (PL$24/*par*/["right"] && PL$24/*par*/["right"]["getParsed"]()));;
if(! PL$68/*parsed*/){
PL$11/*errorFun*/({}, PL$12/*errorMsg*/["internalParserInfoMissing"]);;
;
};
;
PL$255/*errRes*/ = this["runtimeError"](PL$68/*parsed*/, PL$12/*errorMsg*/["typeLookupFailed"]);
PL$45/*self*/ = this;
PL$256/*resolveType*/ = (function(PL$158/*prop*/, PL$70/*ps*/, PL$257/*parArgument*/){
var PL$49/*res*/;
;
PL$49/*res*/ = new PL$16/*Promise*/();
PL$70/*ps*/["then"]((function(PL$30/*t*/){
;
if(PL$257/*parArgument*/){
PL$24/*par*/["arguments"][PL$158/*prop*/]["type"] = PL$30/*t*/;;

}else{
PL$24/*par*/[PL$158/*prop*/] = PL$30/*t*/;;
};
;
PL$49/*res*/["resolve"]();;
;
}));;
PL$254/*promises*/["push"](PL$49/*res*/);;
return PL$49/*res*/;;
;
});
PL$30/*t*/;
for(PL$34/*p*/ in PL$252/*typeProps*/){PL$30/*t*/ = PL$24/*par*/[PL$34/*p*/];;
if(PL$30/*t*/){
if(PL$30/*t*/["isDynamic"]){
PL$251/*dynamic*/ = true;;

}else{
PL$256/*resolveType*/(PL$34/*p*/, PL$18/*classSystem*/["readyPromise"](PL$30/*t*/));;
};
;
};
;
};
;
if(PL$24/*par*/["arguments"]){
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$24/*par*/["arguments"]["length"]);++PL$32/*i*/){{PL$30/*t*/ = PL$24/*par*/["arguments"][PL$32/*i*/]["type"];;
if(PL$30/*t*/){
if(PL$30/*t*/["isDynamic"]){
PL$251/*dynamic*/ = true;;

}else{
PL$256/*resolveType*/(PL$32/*i*/, PL$18/*classSystem*/["readyPromise"](PL$30/*t*/), true);;
};
;
};
;
}};
;
};
;
PL$17/*promiseland*/["all"](PL$254/*promises*/)["then"]((function(){
var PL$34/*p*/;
var PL$49/*res*/;
var PL$258/*propsStarted*/;
var PL$259/*addProperty*/;
var PL$260/*dynRes*/;
var PL$48/*tempRes*/;
;
PL$34/*p*/;
if(PL$251/*dynamic*/){
PL$45/*self*/["common"]["useClassSystem"] = true;;
PL$49/*res*/ = PL$45/*self*/["newResult"]();
PL$49/*res*/["push"]("classSystem.");;
PL$49/*res*/["push"](PL$112/*parFun*/);;
PL$49/*res*/["push"]("({");;
PL$258/*propsStarted*/ = false;
PL$259/*addProperty*/ = (function(PL$34/*p*/){
;
if(PL$258/*propsStarted*/){
PL$49/*res*/["push"](", ");;
};
;
PL$258/*propsStarted*/ = true;;
PL$49/*res*/["push"](PL$14/*stringEncodeStr*/(PL$34/*p*/));;
PL$49/*res*/["push"](":");;
;
});
for(PL$34/*p*/ in PL$24/*par*/){if((! PL$24/*par*/[PL$34/*p*/] || PL$253/*ignoreProps*/[PL$34/*p*/])){

}else{
if(PL$252/*typeProps*/[PL$34/*p*/]){
PL$259/*addProperty*/(PL$34/*p*/);;
PL$49/*res*/["push"](PL$45/*self*/["renderType"](PL$24/*par*/[PL$34/*p*/], PL$68/*parsed*/));;

}else{
PL$259/*addProperty*/(PL$34/*p*/);;
PL$49/*res*/["push"](PL$45/*self*/["makeCompleteStatementDynamic"](PL$24/*par*/[PL$34/*p*/]));;
};
};
;
};
;
PL$49/*res*/["push"]("})");;
PL$260/*dynRes*/ = PL$45/*self*/["newResult"]();
PL$260/*dynRes*/["push"](PL$45/*self*/["makeCompleteStatement"](PL$49/*res*/), undefined, {"dynamic": true});;
PL$255/*errRes*/["resolve"](PL$260/*dynRes*/);;

}else{
PL$48/*tempRes*/ = PL$45/*self*/["newResult"]();
PL$24/*par*/["result"] = PL$48/*tempRes*/;;
PL$255/*errRes*/["resolve"](PL$17/*promiseland*/["classSystem"][PL$112/*parFun*/](PL$24/*par*/));;
};
;
;
}));;
return PL$255/*errRes*/;;
;
});;
this["isTrackedClassConRes"] = (function(PL$71/*parType*/, PL$54/*parParsed*/){
var PL$45/*self*/;
var PL$49/*res*/;
;
PL$45/*self*/ = this;
if(PL$71/*parType*/["isDynamic"]){
PL$49/*res*/ = PL$45/*self*/["newResult"]();
PL$45/*self*/["common"]["useClassSystem"] = true;;
PL$49/*res*/["push"]("classSystem.isTrackedClass");;
PL$49/*res*/["push"]("(");;
PL$49/*res*/["push"](PL$45/*self*/["renderType"](PL$71/*parType*/, PL$54/*parParsed*/));;
PL$49/*res*/["push"](")");;
return PL$49/*res*/;;
};
;
return PL$18/*classSystem*/["isTrackedClass"](PL$71/*parType*/);;
;
});;
this["createConditionalCode"] = (function(PL$261/*parTrueRes*/, PL$262/*parFalseRes*/){
var PL$45/*self*/;
var PL$263/*isDecided*/;
var PL$264/*conditions*/;
var PL$49/*res*/;
;
PL$45/*self*/ = this;
PL$261/*parTrueRes*/ = (PL$261/*parTrueRes*/ || this["newResult"]());;
PL$262/*parFalseRes*/ = (PL$262/*parFalseRes*/ || this["newResult"]());;
PL$263/*isDecided*/ = false;
PL$264/*conditions*/ = [];
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["replace"](PL$262/*parFalseRes*/);;
return {"res": PL$49/*res*/,
"addCondition": (function(PL$107/*parCondition*/){
var PL$265/*ifRes*/;
var PL$32/*i*/;
var PL$260/*dynRes*/;
;
if(PL$263/*isDecided*/){
return;;
};
;
if((PL$107/*parCondition*/ === true)){
PL$263/*isDecided*/ = true;;
PL$49/*res*/["replace"](PL$261/*parTrueRes*/);;
return;;
};
;
if((PL$107/*parCondition*/ === false)){
return;;
};
;
PL$264/*conditions*/["push"](PL$107/*parCondition*/);;
PL$265/*ifRes*/ = PL$45/*self*/["newResult"]();
PL$265/*ifRes*/["push"]("((");;
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$264/*conditions*/["length"]);++PL$32/*i*/){{if(PL$32/*i*/){
PL$265/*ifRes*/["push"](" && ");;
};
;
PL$265/*ifRes*/["push"](PL$264/*conditions*/[PL$32/*i*/]);;
}};
;
PL$265/*ifRes*/["push"](") ? (");;
PL$265/*ifRes*/["push"](PL$45/*self*/["makeCompleteStatementDynamic"](PL$261/*parTrueRes*/));;
PL$265/*ifRes*/["push"](") : (");;
PL$265/*ifRes*/["push"](PL$45/*self*/["makeCompleteStatementDynamic"](PL$262/*parFalseRes*/));;
PL$265/*ifRes*/["push"]("))");;
PL$260/*dynRes*/ = PL$45/*self*/["newResult"]();
PL$260/*dynRes*/["push"](PL$45/*self*/["makeCompleteStatement"](PL$265/*ifRes*/), undefined, {"dynamic": true});;
PL$49/*res*/["replace"](PL$260/*dynRes*/);;
;
})};;
;
});;
this["isTrackedClass"] = (function(PL$71/*parType*/){
;
return PL$18/*classSystem*/["isTrackedClass"](PL$71/*parType*/);;
;
});;
this["createTemporaryTrackedClass"] = (function(PL$71/*parType*/, PL$54/*parParsed*/){
;
if(PL$71/*parType*/["isDynamic"]){
return this["createExtraDynamicType"](PL$71/*parType*/, {"temporaryTracked": true}, PL$54/*parParsed*/);;
};
;
return PL$18/*classSystem*/["_createTemporaryTrackedClass"](PL$71/*parType*/);;
;
});;
this["parseAsType"] = (function(PL$71/*parType*/, PL$24/*par*/){
var PL$179/*value*/;
;
PL$179/*value*/ = this["parseExpression"](PL$24/*par*/);
return this["getPassAsTypeCode"]({"value": PL$179/*value*/,
"valueType": PL$179/*value*/["getType"](),
"type": PL$71/*parType*/,
"errorFun": this["getWarningFun"](PL$24/*par*/),
"parsed": PL$24/*par*/});;
;
});;
this["getPassAsTypeCode"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"](this["callClassSystem"]("getPassAsTypeCode", {"type": PL$24/*par*/["type"],
"value": PL$24/*par*/["value"],
"valueType": this["getResultType"](PL$24/*par*/["value"], PL$24/*par*/),
"errorFun": PL$24/*par*/["errorFun"]}));;
PL$49/*res*/["setType"](PL$24/*par*/["type"]);;
return PL$49/*res*/;;
;
});;
this["getDestroyTemporaryClassCode"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$179/*value*/;
var PL$266/*valueType*/;
;
PL$49/*res*/ = this["newResult"]();
PL$179/*value*/ = PL$24/*par*/["value"];
PL$266/*valueType*/ = PL$179/*value*/["getType"]();
PL$49/*res*/["push"](this["callClassSystem"]("getDestroyTemporaryClassCode", {"value": PL$179/*value*/,
"valueType": PL$179/*value*/["getType"](),
"errorFun": PL$24/*par*/["errorFun"],
"noValueRequired": (PL$24/*par*/ ? PL$24/*par*/["noValueRequired"] : undefined)}));;
PL$49/*res*/["setType"](this["getClassFromTemporaryTracked"](PL$266/*valueType*/, PL$179/*value*/["getParsed"]()));;
return PL$49/*res*/;;
;
});;
this["getClassFromTemporaryTracked"] = (function(PL$71/*parType*/, PL$54/*parParsed*/){
var PL$45/*self*/;
var PL$267/*resType*/;
;
PL$45/*self*/ = this;
if(PL$71/*parType*/["isDynamic"]){
return this["createExtraDynamicType"](PL$71/*parType*/, {"temporaryTrackedResolved": true}, PL$54/*parParsed*/);;
};
;
PL$267/*resType*/ = this["getProvisionalType"](PL$54/*parParsed*/, PL$54/*parParsed*/);
PL$18/*classSystem*/["definitionPromise"](PL$71/*parType*/)["then"]((function(PL$268/*parDefinedType*/){
;
PL$45/*self*/["resolveProvisional"](PL$267/*resType*/, PL$18/*classSystem*/["getClassFromTemporaryTracked"](PL$268/*parDefinedType*/));;
;
}));;
return PL$267/*resType*/;;
;
});;
this["getSetPropertyCode"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"](this["callClassSystem"]("getSetPropertyCode", {"instance": PL$24/*par*/["instance"],
"type": this["getResultType"](PL$24/*par*/["instance"]),
"property": PL$24/*par*/["property"],
"propertyValue": PL$24/*par*/["propertyValue"],
"computed": PL$24/*par*/["computed"],
"value": PL$24/*par*/["value"],
"valueType": this["getResultType"](PL$24/*par*/["value"]),
"operator": (PL$24/*par*/["operator"] || "="),
"errorFun": PL$24/*par*/["errorFun"]}));;
PL$49/*res*/["setType"](this["getPropertyType"]({"type": this["getResultType"](PL$24/*par*/["instance"]),
"property": PL$24/*par*/["property"]}, PL$24/*par*/["instance"]));;
return PL$49/*res*/;;
;
});;
this["getSetVariableCode"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"](this["callClassSystem"]("getSetVariableCode", {"instance": PL$24/*par*/["instance"],
"type": this["getResultType"](PL$24/*par*/["instance"]),
"value": PL$24/*par*/["value"],
"valueType": this["getResultType"](PL$24/*par*/["value"]),
"operator": (PL$24/*par*/["operator"] || "="),
"errorFun": PL$24/*par*/["errorFun"],
"assignmentType": PL$24/*par*/["assignmentType"]}));;
PL$49/*res*/["setType"](this["getClassFromTemporaryTracked"](this["getResultType"](PL$24/*par*/["value"]), PL$24/*par*/["value"]["getParsed"]()));;
return PL$49/*res*/;;
;
});;
this["declareReturnPromiseCode"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
this["common"]["usePromise"] = true;;
PL$49/*res*/["push"](this["callClassSystem"]("declareReturnPromiseCode", {"type": PL$24/*par*/["type"],
"name": PL$24/*par*/["name"],
"constructorName": PL$24/*par*/["constructorName"],
"errorFun": PL$24/*par*/["errorFun"],
"parsed": PL$24/*par*/["parsed"]}));;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["returnReturnPromiseCode"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"](this["callClassSystem"]("returnReturnPromiseCode", {"type": PL$24/*par*/["type"],
"name": PL$24/*par*/["name"],
"errorFun": PL$24/*par*/["errorFun"],
"parsed": PL$24/*par*/["parsed"]}));;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["getDeclareVariableCode"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"](this["callClassSystem"]("getDeclareVariableCode", {"type": PL$24/*par*/["type"],
"name": PL$24/*par*/["name"],
"errorFun": PL$24/*par*/["errorFun"],
"parsed": PL$24/*par*/["parsed"]}));;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["getProcessParameterCode"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"](this["callClassSystem"]("getProcessParameterCode", {"type": PL$24/*par*/["type"],
"name": PL$24/*par*/["name"],
"errorFun": PL$24/*par*/["errorFun"],
"parsed": PL$24/*par*/["parsed"]}));;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["getDestroyVariableCode"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"](this["callClassSystem"]("getDestroyVariableCode", {"type": PL$24/*par*/["type"],
"name": PL$24/*par*/["name"],
"errorFun": PL$24/*par*/["errorFun"],
"parsed": PL$24/*par*/["parsed"]}));;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["connectFunCode"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"](this["callClassSystem"]("getConnectCode", {"instance": PL$24/*par*/["signalObject"],
"type": this["getResultType"](PL$24/*par*/["signalObject"]),
"property": PL$24/*par*/["signalProperty"],
"value": PL$24/*par*/["fun"],
"valueType": this["getResultType"](PL$24/*par*/["fun"]),
"errorFun": PL$24/*par*/["errorFun"]}));;
PL$49/*res*/["setType"]("var");;
return PL$49/*res*/;;
;
});;
this["connectSlotCode"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"](this["callClassSystem"]("getConnectCode", {"instance": PL$24/*par*/["signalObject"],
"type": this["getResultType"](PL$24/*par*/["signalObject"]),
"property": PL$24/*par*/["signalProperty"],
"value": PL$24/*par*/["slotObject"],
"valueType": this["getResultType"](PL$24/*par*/["slotObject"]),
"valueProperty": PL$24/*par*/["slotProperty"],
"errorFun": PL$24/*par*/["errorFun"]}));;
PL$49/*res*/["setType"]("var");;
return PL$49/*res*/;;
;
});;
this["dereferencePromisePreCode"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"](this["callClassSystem"]("dereferencePromisePreCode", {"value": PL$24/*par*/["value"],
"valueType": this["getResultType"](PL$24/*par*/["value"]),
"errorFun": PL$24/*par*/["errorFun"]}));;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["dereferencePromisePostCode"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"](this["callClassSystem"]("dereferencePromisePostCode", {"value": PL$24/*par*/["value"],
"valueType": this["getResultType"](PL$24/*par*/["value"]),
"errorFun": PL$24/*par*/["errorFun"]}));;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["promisingReturnTypeCheck"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"](this["callClassSystem"]("promisingReturnTypeCheck", {"type": PL$24/*par*/["type"],
"errorFun": PL$24/*par*/["errorFun"],
"parsed": PL$24/*par*/["parsed"]}));;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["getClassFromPromiseOf"] = (function(PL$71/*parType*/){
;
return PL$18/*classSystem*/["getClassFromPromiseOf"](PL$71/*parType*/);;
;
});;
this["getPropertyType"] = (function(PL$24/*par*/, PL$54/*parParsed*/){
var PL$69/*type*/;
var PL$45/*self*/;
var PL$50/*r*/;
;
PL$69/*type*/ = PL$24/*par*/["type"];
PL$45/*self*/ = this;
if(PL$69/*type*/["isDynamic"]){
return this["createExtraDynamicType"](PL$69/*type*/, {"property": PL$24/*par*/["property"]}, PL$54/*parParsed*/);;

}else{
PL$50/*r*/ = this["getProvisionalType"](PL$54/*parParsed*/);
PL$18/*classSystem*/["readyPromise"](PL$24/*par*/["type"])["then"]((function(PL$154/*resultType*/){
;
PL$45/*self*/["resolveProvisional"](PL$50/*r*/, PL$17/*promiseland*/["classSystem"]["getPropertyType"]({"type": PL$154/*resultType*/,
"property": PL$24/*par*/["property"]}));;
;
}));;
return PL$50/*r*/;;
};
;
;
});;
this["getConstructorType"] = (function(PL$24/*par*/, PL$54/*parParsed*/){
var PL$69/*type*/;
var PL$45/*self*/;
var PL$50/*r*/;
;
PL$69/*type*/ = PL$24/*par*/["type"];
PL$45/*self*/ = this;
if(PL$69/*type*/["isDynamic"]){
return this["createExtraDynamicType"](PL$69/*type*/, {"property": "constructor"}, PL$54/*parParsed*/);;

}else{
PL$50/*r*/ = this["getProvisionalType"](PL$54/*parParsed*/);
PL$18/*classSystem*/["readyPromise"](PL$24/*par*/["type"])["then"]((function(PL$154/*resultType*/){
;
try
{PL$45/*self*/["resolveProvisional"](PL$50/*r*/, PL$17/*promiseland*/["classSystem"]["getConstructorType"]({"type": PL$154/*resultType*/}));;
}catch(PL$167/*e*/){PL$45/*self*/["error"](PL$54/*parParsed*/, PL$167/*e*/);;
};
;
;
}));;
return PL$50/*r*/;;
};
;
;
});;
this["getGetPropertyCode"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"](this["callClassSystem"]("getGetPropertyCode", {"instance": PL$24/*par*/["instance"],
"type": this["getResultType"](PL$24/*par*/["instance"]),
"property": PL$24/*par*/["property"],
"propertyValue": PL$24/*par*/["propertyValue"],
"errorFun": PL$24/*par*/["errorFun"]}));;
if(PL$24/*par*/["property"]){
PL$49/*res*/["setType"](this["getPropertyType"]({"type": this["getResultType"](PL$24/*par*/["instance"]),
"property": PL$24/*par*/["property"]}, PL$24/*par*/["instance"]));;

}else{
PL$49/*res*/["setType"]("var");;
};
;
return PL$49/*res*/;;
;
});;
this["getBinaryExpressionCode"] = (function(PL$24/*par*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"](this["callClassSystem"]("getBinaryExpressionCode", {"left": PL$24/*par*/["left"],
"leftType": this["getResultType"](PL$24/*par*/["left"]),
"right": PL$24/*par*/["right"],
"rightType": this["getResultType"](PL$24/*par*/["right"]),
"operator": PL$24/*par*/["operator"],
"errorFun": PL$24/*par*/["errorFun"]}));;
PL$49/*res*/["setType"]("var");;
return PL$49/*res*/;;
;
});;
this["expAssignmentExpression"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$241/*base*/;
var PL$39/*property*/;
var PL$269/*propertyValue*/;
;
PL$49/*res*/ = this["newResult"]();
if((PL$24/*par*/["left"]["type"] == "MemberExpression")){
PL$241/*base*/ = this["parseExpression"](PL$24/*par*/["left"]["object"]);
PL$39/*property*/;
PL$269/*propertyValue*/;
if(PL$24/*par*/["left"]["computed"]){
PL$269/*propertyValue*/ = this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["left"]["property"]));;

}else{
PL$39/*property*/ = PL$27/*identifierName*/(PL$24/*par*/["left"]["property"]);;
};
;
PL$49/*res*/["pushType"](this["getSetPropertyCode"]({"instance": PL$241/*base*/,
"propertyValue": PL$269/*propertyValue*/,
"property": PL$39/*property*/,
"computed": PL$24/*par*/["left"]["computed"],
"value": this["parseExpression"](PL$24/*par*/["right"]),
"operator": PL$24/*par*/["operator"],
"errorFun": this["getWarningFun"](PL$24/*par*/)}));;

}else{
PL$49/*res*/["pushType"](this["getSetVariableCode"]({"instance": this["parseExpression"](PL$24/*par*/["left"]),
"assignmentType": PL$24/*par*/["left"]["type"],
"value": this["parseExpression"](PL$24/*par*/["right"]),
"operator": PL$24/*par*/["operator"],
"errorFun": this["getWarningFun"](PL$24/*par*/)}));;
};
;
return PL$49/*res*/;;
;
});;
this["isCallableType"] = (function(){
;
;
});;
this["expCallExpression"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$32/*i*/;
var PL$88/*l*/;
var PL$270/*calleeRes*/;
var PL$271/*args*/;
var PL$272/*argType*/;
var PL$273/*argRes*/;
;
PL$49/*res*/ = this["newResult"]();
PL$32/*i*/ = 0;
PL$88/*l*/;
PL$270/*calleeRes*/ = this["parseExpression"](PL$24/*par*/["callee"]);
PL$271/*args*/ = [];
if(PL$24/*par*/["arguments"]){
PL$88/*l*/ = PL$24/*par*/["arguments"]["length"];;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{PL$272/*argType*/ = this["getFunctionArgumentType"](PL$270/*calleeRes*/["getType"](), PL$32/*i*/, PL$24/*par*/["arguments"][PL$32/*i*/]);
PL$273/*argRes*/ = this["parseExpression"](PL$24/*par*/["arguments"][PL$32/*i*/]);
PL$273/*argRes*/ = this["getPassAsTypeCode"]({"value": PL$273/*argRes*/,
"valueType": PL$273/*argRes*/["getType"](),
"type": PL$272/*argType*/,
"errorFun": this["getWarningFun"](PL$24/*par*/)});;
PL$271/*args*/["push"]({"type": PL$273/*argRes*/["getType"](),
"value": PL$273/*argRes*/});;
}};
;
};
;
PL$49/*res*/["push"](this["callClassSystem"]("getCallCode", {"type": PL$270/*calleeRes*/["getType"](),
"instance": PL$270/*calleeRes*/,
"arguments": PL$271/*args*/}));;
PL$49/*res*/["setType"](this["getFunctionReturnType"](PL$270/*calleeRes*/["getType"](), PL$24/*par*/));;
return PL$49/*res*/;;
;
});;
this["getFunctionReturnType"] = (function(PL$71/*parType*/, PL$68/*parsed*/){
var PL$30/*t*/;
var PL$45/*self*/;
;
PL$30/*t*/ = this["getProvisionalType"](PL$68/*parsed*/);
PL$45/*self*/ = this;
PL$18/*classSystem*/["readyPromise"](PL$71/*parType*/)["then"]((function(PL$274/*newt*/){
;
PL$45/*self*/["resolveProvisional"](PL$30/*t*/, PL$18/*classSystem*/["getFunctionReturnType"](PL$274/*newt*/, PL$68/*parsed*/));;
;
}));;
return PL$30/*t*/;;
;
});;
this["getFunctionArgumentCount"] = (function(PL$71/*parType*/, PL$68/*parsed*/){
;
return PL$18/*classSystem*/["getFunctionArgumentCount"](PL$71/*parType*/);;
;
});;
this["isVar"] = (function(PL$71/*parType*/){
;
if((typeof PL$71/*parType*/ == "function")){
return PL$18/*classSystem*/["isVar"](PL$71/*parType*/);;
};
;
return false;;
;
});;
this["expInheritedExpression"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$32/*i*/;
var PL$88/*l*/;
var PL$271/*args*/;
var PL$273/*argRes*/;
;
if(! this["inheritedAvailable"]){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["inheritedOnlyInMember"]);;
return;;
};
;
PL$49/*res*/ = this["newResult"]();
PL$32/*i*/ = 0;
PL$88/*l*/;
PL$49/*res*/["push"](this["inheritedSystem"]["getCurrent"]());;
PL$49/*res*/["push"](".apply(this");;
PL$271/*args*/ = [];
if(PL$24/*par*/["arguments"]){
PL$49/*res*/["push"](", [");;
PL$88/*l*/ = PL$24/*par*/["arguments"]["length"];;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{if(PL$32/*i*/){
PL$49/*res*/["push"](", ");;
};
;
PL$273/*argRes*/ = this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["arguments"][PL$32/*i*/]));
PL$49/*res*/["push"](PL$273/*argRes*/);;
}};
;
PL$49/*res*/["push"]("]");;

}else{
if(PL$24/*par*/["expression"]){
PL$49/*res*/["push"](", ");;
this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["expression"]));;
};
};
;
PL$49/*res*/["push"](")");;
PL$49/*res*/["setType"]("var");;
return PL$49/*res*/;;
;
});;
this["expArrayExpression"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$32/*i*/;
var PL$88/*l*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"]("[");;
PL$32/*i*/ = 0;
PL$88/*l*/ = ((PL$24/*par*/["elements"] && PL$24/*par*/["elements"]["length"]) || 0);
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{if(PL$32/*i*/){
PL$49/*res*/["push"](", ");;
};
;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["elements"][PL$32/*i*/])));;
}};
;
PL$49/*res*/["push"]("]");;
PL$49/*res*/["setType"]("var");;
return PL$49/*res*/;;
;
});;
this["expReturnStatement"] = (function(PL$24/*par*/, PL$275/*closingFun*/){
var PL$49/*res*/;
var PL$116/*valueRes*/;
var PL$276/*passAsType*/;
var PL$245/*v*/;
;
if(this["preventreturn"]){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["returnNotAllowedHere"]);;
};
;
PL$49/*res*/ = this["newResult"]();
PL$116/*valueRes*/;
if(PL$24/*par*/["argument"]){
PL$116/*valueRes*/ = this["newResult"]();;
PL$276/*passAsType*/ = this["getReturnType"]();
if(this["promising"]){
PL$276/*passAsType*/ = this["getClassFromPromiseOf"](PL$276/*passAsType*/);;
};
;
PL$276/*passAsType*/ = this["createTemporaryTrackedClass"](PL$276/*passAsType*/);;
PL$245/*v*/ = this["parseExpression"](PL$24/*par*/["argument"]);
PL$116/*valueRes*/["push"](this["getPassAsTypeCode"]({"value": PL$245/*v*/,
"valueType": PL$245/*v*/["getType"](),
"type": PL$276/*passAsType*/,
"errorFun": this["getWarningFun"](PL$24/*par*/)}));;
};
;
PL$49/*res*/["push"](this["getReturnCode"]({"return": true,
"value": PL$116/*valueRes*/}));;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["_start"]();;
;
});
PL$277/*loaderStr*/ = (function(PL$24/*par*/){
var PL$278/*resStr*/;
var PL$32/*i*/;
var PL$279/*modules*/;
var PL$94/*extraModules*/;
var PL$280/*extraModulesAr*/;
;
PL$278/*resStr*/ = "";
PL$32/*i*/;
PL$278/*resStr*/ += "(function(){\n  var defineFun;\n  var requireFun;\n  \n  if (typeof exports == \"object\" && typeof module == \"object\"){ // CommonJS\n    requireFun = function(modulesAr, callback, errBack){\n      try{\n        var i = 0;\n        var l = modulesAr.length;\n        var args = [];\n        for (i; i < l; ++i){\n          args.push(require(modulesAr[i]));\n        };\n      }catch(e){\n        errBack(e);\n        return;\n      };\n      callback.apply(callback, args);\n    };\n    defineFun = function(requireAr, callback){\n      requireFun(requireAr, function(){\n        module.exports = callback.apply(callback, arguments);\n      });\n    };\n    \n  }else if (typeof define == \"function\" && define.amd){ // AMD\n    var _define = define;\n    requireFun = require;\n    \n    defineFun = function(par1, par2){\n      if (par1 instanceof Array){\n        par1.unshift(\"require\");\n      }else{\n        par2 = par1;\n        par1 = [\"require\"];\n      };\n      _define(par1, function(){\n        requireFun = arguments[0];\n        var args = [];\n        for (var i = 1; i < arguments.length; ++i){\n          args.push(arguments[i]);\n        };\n        return par2.apply(par2, args);\n      });\n    };\n    requireFun = require;\n    \n  }else{ // Plain browser env\n    alert(\"not working out!\");\n    \n  };\n  ";;
PL$279/*modules*/ = [];
if(! PL$24/*par*/["promiseLandModule"]){
PL$279/*modules*/["push"]({"varName": "promiseland",
"moduleName": "promiseland"});;
};
;
PL$94/*extraModules*/ = PL$24/*par*/["extraModules"];
if(PL$94/*extraModules*/){
PL$280/*extraModulesAr*/ = PL$94/*extraModules*/["getArray"]();
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$280/*extraModulesAr*/["length"]);++PL$32/*i*/){{PL$279/*modules*/["push"]({"varName": PL$24/*par*/["variableNames"]["get"](PL$280/*extraModulesAr*/[PL$32/*i*/]["key"]),
"moduleName": PL$280/*extraModulesAr*/[PL$32/*i*/]["value"]});;
}};
;
};
;
PL$278/*resStr*/ += "defineFun([";;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$279/*modules*/["length"]);++PL$32/*i*/){{if(PL$32/*i*/){
PL$278/*resStr*/ += ", ";;
};
;
PL$278/*resStr*/ += PL$14/*stringEncodeStr*/(PL$279/*modules*/[PL$32/*i*/]["moduleName"]);;
}};
;
PL$278/*resStr*/ += "], function(";;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$279/*modules*/["length"]);++PL$32/*i*/){{if(PL$32/*i*/){
PL$278/*resStr*/ += ", ";;
};
;
PL$278/*resStr*/ += PL$279/*modules*/[PL$32/*i*/]["varName"];;
}};
;
PL$278/*resStr*/ += "){\n";;
if(PL$24/*par*/["promiseLandModule"]){
PL$278/*resStr*/ += "var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;\n";;

}else{
PL$278/*resStr*/ += "var __require = requireFun;\n";;
};
;
PL$278/*resStr*/ += "\n";;
if((PL$24/*par*/["usePromise"] || PL$24/*par*/["useRequire"])){
PL$278/*resStr*/ += "var __Promise = promiseland.Promise;\n";;
PL$278/*resStr*/ += "var Promise = promiseland.Promise;\n";;
};
;
if(PL$24/*par*/["useClassSystem"]){
PL$278/*resStr*/ += "var classSystem = promiseland.classSystem;\n";;
};
;
if(PL$24/*par*/["useRequire"]){
PL$278/*resStr*/ += "var __requireFun = function(parModule){\n      var returnPromise = new __Promise();\n      try{__require([parModule], function(m){\n        if (promiseland.isPromiseLandPromisingModule(m)){\n          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});\n        }else{\n          returnPromise.resolve(m);\n        };\n        }, function(err){ returnPromise.reject(err); });\n      }catch(e){ returnPromise.reject(e); };\n      return returnPromise.promise;};\n    ";;
};
;
return PL$278/*resStr*/;;
;
});
PL$281/*promiselandRequireStr*/ = (function(){
;
return "";;
;
});
PL$282/*callbackRequireStr*/ = (function(){
;
return "var Callback = promiseland.Callback;\n";;
;
});
PL$283/*loaderEndStr*/ = (function(PL$24/*par*/){
;
if(PL$24/*par*/["promiseLandModule"]){
return "}; return function(){ return __execute.apply(null, arguments); } });\n})();";;

}else{
return "});\n})();";;
};
;
;
});
PL$284/*createHeader*/ = (function(PL$24/*par*/){
var PL$278/*resStr*/;
var PL$285/*loaderParam*/;
;
if(PL$15/*_pureCode*/){
return "";;
};
;
PL$278/*resStr*/ = "";
PL$285/*loaderParam*/ = {"usePromise": PL$24/*par*/["usePromise"],
"useRequire": PL$24/*par*/["useRequire"],
"useClassSystem": PL$24/*par*/["useClassSystem"],
"extraModules": PL$24/*par*/["extraModules"],
"variableNames": PL$24/*par*/["variableNames"]};
if(PL$24/*par*/["makePromiseLandModule"]){
PL$285/*loaderParam*/["promiseLandModule"] = true;;
};
;
PL$278/*resStr*/ += PL$277/*loaderStr*/(PL$285/*loaderParam*/);;
PL$278/*resStr*/ += PL$281/*promiselandRequireStr*/();;
if(PL$24/*par*/["useCallback"]){
PL$278/*resStr*/ += PL$282/*callbackRequireStr*/();;
};
;
PL$278/*resStr*/ += (((("if (promiseland._hasModule({ hashStr: \"" + PL$24/*par*/["hashStr"]) + "\" })){ return promiseland._getModule(\"") + PL$24/*par*/["hashStr"]) + "\"); };\n");;
return PL$278/*resStr*/;;
;
});
PL$286/*createFooter*/ = (function(PL$24/*par*/){
var PL$278/*resStr*/;
;
if(PL$15/*_pureCode*/){
return "";;
};
;
PL$278/*resStr*/ = "";
if(PL$24/*par*/["makePromiseLandModule"]){
PL$278/*resStr*/ += PL$283/*loaderEndStr*/({"promiseLandModule": true});;

}else{
PL$278/*resStr*/ += PL$283/*loaderEndStr*/({});;
};
;
return PL$278/*resStr*/;;
;
});
PL$287/*parser*/ = {"parse": (function(PL$288/*promiselandCodeStr*/){
var PL$34/*p*/;
var PL$287/*parser*/;
var PL$289/*hashStr*/;
var PL$68/*parsed*/;
var PL$278/*resStr*/;
var PL$181/*cp*/;
var PL$49/*res*/;
var PL$95/*parsingConfig*/;
var PL$290/*makePromiseLandModule*/;
var PL$94/*extraModules*/;
var PL$291/*variableNames*/;
var PL$292/*result*/;
var PL$293/*programStr*/;
var PL$294/*mainPartStr*/;
;
PL$34/*p*/ = new PL$17/*promiseland*/["Promise"]();
PL$287/*parser*/ = PL$7/*_parser*/;
PL$289/*hashStr*/ = PL$5/*md5*/(PL$288/*promiselandCodeStr*/);
PL$68/*parsed*/ = PL$287/*parser*/["parse"](PL$288/*promiselandCodeStr*/);
PL$278/*resStr*/ = "";
PL$181/*cp*/;
PL$49/*res*/ = {};
if((PL$68/*parsed*/["length"] === undefined)){
if((PL$68/*parsed*/["type"] == "Program")){
PL$95/*parsingConfig*/ = PL$68/*parsed*/["config"];
PL$181/*cp*/ = new PL$44/*CodeParser*/({"toParse": PL$68/*parsed*/,
"hashStr": PL$289/*hashStr*/,
"parsingConfig": PL$95/*parsingConfig*/});;
PL$290/*makePromiseLandModule*/ = false;
PL$94/*extraModules*/ = PL$181/*cp*/["common"]["extraModules"];
PL$291/*variableNames*/ = PL$181/*cp*/["common"]["variableNames"];
if(PL$95/*parsingConfig*/){
PL$290/*makePromiseLandModule*/ = PL$181/*cp*/["getTemplateProperty"](PL$95/*parsingConfig*/, "__promiseLandModule", "Literal");;
if((PL$290/*makePromiseLandModule*/ && (PL$290/*makePromiseLandModule*/["value"] === true))){
PL$290/*makePromiseLandModule*/ = true;;

}else{
PL$290/*makePromiseLandModule*/ = false;;
};
;
};
;
PL$292/*result*/ = PL$181/*cp*/["getResult"]();
PL$293/*programStr*/ = ((PL$292/*result*/["getPreCodeStr"]() + PL$292/*result*/["getCodeStr"]()) + PL$292/*result*/["getPostCodeStr"]());
PL$49/*res*/["warnings"] = PL$181/*cp*/["getWarnings"]();;
PL$49/*res*/["errors"] = PL$181/*cp*/["getErrors"]();;
PL$294/*mainPartStr*/ = "";
if(PL$15/*_pureCode*/){
PL$278/*resStr*/ = PL$293/*programStr*/;;

}else{
if(PL$181/*cp*/["programPromiseStr"]){
PL$294/*mainPartStr*/ += (((("var " + PL$181/*cp*/["programPromiseStr"]) + " = ") + PL$181/*cp*/["newPromiseStr"]()) + ";\n");;
PL$294/*mainPartStr*/ += (((("promiseland._registerModule({ hashStr: \"" + PL$289/*hashStr*/) + "\", \"module\": ") + PL$181/*cp*/["programPromiseStr"]) + ", promising: true });\n");;
PL$294/*mainPartStr*/ += PL$293/*programStr*/;;
PL$294/*mainPartStr*/ += (";\nreturn " + PL$181/*cp*/["programPromiseStr"]);;

}else{
PL$294/*mainPartStr*/ += PL$293/*programStr*/;;
PL$294/*mainPartStr*/ += (("return " + PL$181/*cp*/["resultNameStr"]) + ";\n");;
};
;
PL$278/*resStr*/ += PL$284/*createHeader*/({"makePromiseLandModule": PL$290/*makePromiseLandModule*/,
"extraModules": PL$94/*extraModules*/,
"variableNames": PL$291/*variableNames*/,
"hashStr": PL$289/*hashStr*/,
"usePromise": PL$181/*cp*/["common"]["usePromise"],
"useRequire": PL$181/*cp*/["common"]["useRequire"],
"useCallback": PL$181/*cp*/["common"]["useCallback"],
"useClassSystem": PL$181/*cp*/["common"]["useClassSystem"]});;
PL$278/*resStr*/ += PL$294/*mainPartStr*/;;
PL$278/*resStr*/ += PL$286/*createFooter*/({"makePromiseLandModule": PL$290/*makePromiseLandModule*/});;
};
;

}else{
this["error"](PL$68/*parsed*/, PL$12/*errorMsg*/["unknownType"]);;
};
;

}else{
PL$11/*errorFun*/(PL$68/*parsed*/, PL$12/*errorMsg*/["severalProgramElements"]);;
};
;
if(! (PL$49/*res*/["errors"] && PL$49/*res*/["errors"]["length"])){
PL$49/*res*/["javascript"] = PL$278/*resStr*/;;
};
;
PL$34/*p*/["resolve"](PL$49/*res*/);;
return PL$34/*p*/["promise"];;
;
})};
PL$1.resolve(PL$287/*parser*/); return;;
PL$1.resolve(); return;;
}), PL$4);
;}), PL$4);
;}), PL$4);
;}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();