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
    if (promiseland._hasModule({ hashStr: "cb1202e4f631fa7a8eb7dca59edb9b4a" })){ return promiseland._getModule("cb1202e4f631fa7a8eb7dca59edb9b4a"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "cb1202e4f631fa7a8eb7dca59edb9b4a", "module": PL$1, promising: true });
var PL$17/*promiseland*/;try{PL$17/*promiseland*/ = promiseland;}catch(e){};
var PL$165/*JSON*/;try{PL$165/*JSON*/ = JSON;}catch(e){};
var PL$178/*Array*/;try{PL$178/*Array*/ = Array;}catch(e){};
var PL$179/*console*/;try{PL$179/*console*/ = console;}catch(e){};
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
var PL$278/*loaderStr*/;
var PL$282/*promiselandRequireStr*/;
var PL$283/*callbackRequireStr*/;
var PL$284/*loaderEndStr*/;
var PL$285/*createHeader*/;
var PL$287/*createFooter*/;
var PL$288/*parser*/;
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
var PL$243/*InheritedSystem*/;
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
this["types"] = new PL$22/*Map*/()["mixin"](PL$24/*par*/["types"]);;
if(! this["types"]["get"]("var")){
this["types"]["set"]("var", {"name": "var",
"type": PL$18/*classSystem*/["getBuiltinType"]("var")});;
};
this["variables"] = new PL$22/*Map*/()["mixin"](PL$24/*par*/["variables"]);;
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
this["localVariables"] = new PL$22/*Map*/();;
this["addLocalVariable"] = (function(PL$24/*par*/, PL$54/*parParsed*/){
var PL$45/*self*/;
var PL$25/*name*/;
var PL$55/*newType*/;
var PL$56/*existing*/;
;
PL$45/*self*/ = this;
PL$25/*name*/ = PL$27/*identifierName*/(PL$24/*par*/["name"]);
if(this["localVariables"]["has"](PL$25/*name*/)){
if((! PL$24/*par*/["type"] && ! PL$24/*par*/["typename"])){

}else{
PL$55/*newType*/ = (PL$24/*par*/["type"] || this["getType"](PL$24/*par*/["typename"], PL$54/*parParsed*/));
PL$56/*existing*/ = this["_getVariableType"](this["localVariables"]["get"](PL$25/*name*/));
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
this["localVariables"]["set"](PL$25/*name*/, {"typename": PL$24/*par*/["typename"],
"type": PL$24/*par*/["type"],
"name": PL$25/*name*/});;
if((! PL$24/*par*/["typename"] && ! PL$24/*par*/["type"])){
this["localVariables"]["get"](PL$25/*name*/)["type"] = this["getProvisionalType"](PL$54/*parParsed*/);;
this["localVariables"]["get"](PL$25/*name*/)["needsResolving"] = true;;
};
;
};
;
if(PL$24/*par*/["parameter"]){
this["localVariables"]["get"](PL$25/*name*/)["parameter"] = PL$24/*par*/["parameter"];;
};
;
if(PL$24/*par*/["isFunction"]){
this["localVariables"]["get"](PL$25/*name*/)["function"] = PL$24/*par*/["function"];;
};
;
this["variables"]["set"](PL$25/*name*/, this["localVariables"]["get"](PL$25/*name*/));;
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
if(this["variables"]["has"](PL$25/*name*/)){
PL$59/*originalEntry*/ = this["variables"]["get"](PL$25/*name*/);;
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
this["variables"]["set"](PL$25/*name*/, PL$60/*entry*/);;
PL$61/*resPs*/ = new PL$16/*Promise*/();
(function(){
var PL$62 = new __Promise();
var PL$64 = function(code){ return function(res){ try{code(res);}catch(e){ PL$62.reject(e); }; }; };
var PL$65 = function(e){ PL$62.reject(e); };
PL$64(function(){;
PL$61/*resPs*/.then(PL$64(function(PL$66){PL$66;;
if(PL$59/*originalEntry*/){
PL$45/*self*/["variables"]["set"](PL$25/*name*/, PL$59/*originalEntry*/);;

}else{
PL$45/*self*/["variables"]["delete"](PL$25/*name*/);;
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
this["resolveFunctionType"] = (function(PL$24/*par*/, PL$67/*parsed*/){
var PL$25/*name*/;
var PL$60/*entry*/;
var PL$30/*t*/;
;
PL$25/*name*/ = PL$27/*identifierName*/(PL$24/*par*/["name"]);
PL$60/*entry*/ = this["localVariables"]["get"](PL$25/*name*/);
if(PL$60/*entry*/["needsResolving"]){
PL$60/*entry*/["needsResolving"] = false;;
PL$30/*t*/ = PL$60/*entry*/["type"];
PL$60/*entry*/["type"] = PL$24/*par*/["type"];;
this["resolveProvisional"](PL$30/*t*/, PL$24/*par*/["type"]);;

}else{
this["addLocalVariable"]({"name": PL$24/*par*/["name"],
"type": PL$24/*par*/["type"]}, PL$67/*parsed*/);;
};
;
;
});;
this["getProvisionalType"] = (function(PL$54/*parParsed*/){
var PL$68/*type*/;
var PL$69/*ps*/;
;
if(! PL$54/*parParsed*/){
PL$11/*errorFun*/({}, PL$12/*errorMsg*/["internalParserInfoMissing"]);;
};
;
PL$68/*type*/ = PL$18/*classSystem*/["_createProvisionalClass"]();
PL$69/*ps*/ = this["addError"](PL$54/*parParsed*/, PL$12/*errorMsg*/["unresolvedType"]);
PL$18/*classSystem*/["definitionPromise"](PL$68/*type*/)["then"]((function(){
;
PL$69/*ps*/["resolve"]();;
;
}));;
return PL$68/*type*/;;
;
});;
this["resolveProvisional"] = (function(PL$70/*parType*/, PL$71/*parResult*/){
;
return PL$18/*classSystem*/["_resolveProvisional"](PL$70/*parType*/, PL$71/*parResult*/);;
;
});;
this["_getVariableType"] = (function(PL$72/*parEntry*/){
;
if(PL$72/*parEntry*/["type"]){
return PL$72/*parEntry*/["type"];;
};
;
return this["getType"](PL$72/*parEntry*/["typename"]);;
;
});;
this["getVariableType"] = (function(PL$73/*parName*/, PL$24/*par*/){
var PL$25/*name*/;
var PL$60/*entry*/;
;
PL$25/*name*/ = PL$27/*identifierName*/(PL$73/*parName*/);
this["_addUsedVariable"](PL$25/*name*/);;
if(this["variables"]["has"](PL$25/*name*/)){
PL$60/*entry*/ = this["variables"]["get"](PL$25/*name*/);
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
if(this["variables"]["has"](PL$25/*name*/)){
if(this["variables"]["get"](PL$25/*name*/)["temporary"]){
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
this["_getErrors"] = (function(PL$74/*parWarning*/){
var PL$75/*a*/;
var PL$32/*i*/;
;
PL$75/*a*/ = [];
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < this["errors"]["length"]);++PL$32/*i*/){{if(this["errors"][PL$32/*i*/]["valid"]){
if((PL$74/*parWarning*/ ? this["errors"][PL$32/*i*/]["warning"] : ! this["errors"][PL$32/*i*/]["warning"])){
PL$75/*a*/["push"](this["errors"][PL$32/*i*/]);;
};
;
};
;
}};
;
return PL$75/*a*/;;
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
return (function(PL$76/*err*/){
;
PL$45/*self*/["warning"](PL$24/*par*/, PL$76/*err*/);;
;
});;
;
});;
this["warning"] = (function(PL$24/*par*/, PL$76/*err*/){
;
if(! PL$24/*par*/["line"]){
PL$11/*errorFun*/({}, PL$12/*errorMsg*/["internalParserInfoMissing"]);;
};
;
this["addWarning"](PL$24/*par*/, PL$76/*err*/);;
;
});;
this["error"] = (function(PL$24/*par*/, PL$76/*err*/){
;
this["_addError"](PL$24/*par*/, PL$76/*err*/);;
PL$11/*errorFun*/(PL$24/*par*/, PL$76/*err*/);;
;
});;
this["addError"] = (function(PL$24/*par*/, PL$76/*err*/){
;
return this["_addError"](PL$24/*par*/, PL$76/*err*/);;
;
});;
this["addWarning"] = (function(PL$24/*par*/, PL$76/*err*/){
;
return this["_addError"](PL$24/*par*/, PL$76/*err*/, true);;
;
});;
this["_addError"] = (function(PL$24/*par*/, PL$76/*err*/, PL$77/*warning*/){
var PL$60/*entry*/;
var PL$69/*ps*/;
;
PL$60/*entry*/ = {"par": PL$24/*par*/,
"line": PL$24/*par*/["line"],
"column": PL$24/*par*/["column"],
"msg": ((PL$76/*err*/["id"] + ": ") + PL$76/*err*/["msg"]),
"valid": true,
"warning": PL$77/*warning*/};
this["errors"]["push"](PL$60/*entry*/);;
PL$69/*ps*/ = new PL$16/*Promise*/();
PL$69/*ps*/["then"]((function(){
;
PL$60/*entry*/["valid"] = false;;
;
}));;
return PL$69/*ps*/;;
;
});;
this["runtimeError"] = (function(PL$24/*par*/, PL$53/*par2*/){
var PL$69/*ps*/;
var PL$49/*res*/;
;
PL$69/*ps*/ = this["addWarning"](PL$24/*par*/, PL$53/*par2*/);
PL$49/*res*/ = this["runtimeErrorNoWarning"](PL$53/*par2*/);
PL$49/*res*/["setPromise"](PL$69/*ps*/);;
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
var PL$78/*retStr*/;
;
PL$78/*retStr*/ = ("PL$" + this["common"]["uniquebasis"]["index"]++);
if(PL$25/*name*/){
PL$78/*retStr*/ += (("/*" + PL$25/*name*/) + "*/");;
};
;
return PL$78/*retStr*/;;
;
});;
this["getUniqueTypeMacro"] = (function(PL$25/*name*/){
var PL$79/*uniqueStr*/;
var PL$49/*res*/;
;
PL$79/*uniqueStr*/ = this["getUniqueName"]();
PL$49/*res*/ = (((("/*\n'''\"\"\" " + PL$79/*uniqueStr*/) + " ") + (PL$25/*name*/ || "")) + " start */");
PL$49/*res*/ += this["runtimeErrorNoWarning"](PL$12/*errorMsg*/["failedToDetermineType"]);;
PL$49/*res*/ += (((("/* " + PL$79/*uniqueStr*/) + " ") + (PL$25/*name*/ || "")) + " end */");;
return PL$49/*res*/;;
;
});;
this["getVariableName"] = (function(PL$25/*name*/){
;
return this["common"]["variableNames"]["get"](PL$25/*name*/);;
;
});;
this["renderType"] = (function(PL$70/*parType*/, PL$54/*parParsed*/){
var PL$49/*res*/;
var PL$45/*self*/;
var PL$80/*typeExpression*/;
var PL$81/*renderTypeName*/;
var PL$85/*errPs*/;
var PL$25/*name*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["setType"]("var");;
PL$45/*self*/ = this;
PL$80/*typeExpression*/;
PL$81/*renderTypeName*/ = (function(PL$82/*parType1*/, PL$83/*parType2*/){
var PL$32/*i*/;
var PL$84/*typesAr*/;
var PL$25/*name*/;
;
PL$32/*i*/;
PL$84/*typesAr*/ = PL$45/*self*/["types"]["getArray"]();
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$84/*typesAr*/["length"]);++PL$32/*i*/){{if(((PL$84/*typesAr*/[PL$32/*i*/]["value"]["type"] === PL$82/*parType1*/) || (PL$84/*typesAr*/[PL$32/*i*/]["value"]["type"] === PL$83/*parType2*/))){
if(PL$45/*self*/["isVar"](PL$84/*typesAr*/[PL$32/*i*/]["value"]["type"])){
PL$45/*self*/["common"]["useClassSystem"] = true;;
return "classSystem.getBuiltinType(\"var\")";;
};
;
PL$25/*name*/ = PL$84/*typesAr*/[PL$32/*i*/]["key"];
if(! PL$45/*self*/["common"]["givenTypeNames"][PL$25/*name*/]){
PL$45/*self*/["common"]["givenTypeNames"][PL$25/*name*/] = (((PL$45/*self*/["getUniqueName"]() + "/*type:") + PL$25/*name*/) + "*/");;
};
;
return PL$45/*self*/["common"]["givenTypeNames"][PL$25/*name*/];;
};
;
}};
;
;
});
if((typeof PL$70/*parType*/ == "function")){
PL$85/*errPs*/ = this["addError"](PL$54/*parParsed*/, PL$12/*errorMsg*/["internalMissingType"]);
PL$18/*classSystem*/["readyPromise"](PL$70/*parType*/)["then"]((function(PL$86/*resolvedType*/){
var PL$87/*replace*/;
var PL$80/*typeExpression*/;
var PL$32/*i*/;
var PL$88/*l*/;
;
PL$87/*replace*/ = PL$45/*self*/["newResult"]();
PL$80/*typeExpression*/ = PL$81/*renderTypeName*/(PL$70/*parType*/, PL$86/*resolvedType*/);
if(PL$80/*typeExpression*/){
PL$87/*replace*/["push"](PL$80/*typeExpression*/);;
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
if(PL$70/*parType*/["isDynamic"]){
PL$80/*typeExpression*/ = PL$81/*renderTypeName*/(PL$70/*parType*/, PL$70/*parType*/);;
if(PL$80/*typeExpression*/){
PL$49/*res*/["push"](PL$80/*typeExpression*/);;

}else{
PL$49/*res*/["push"](this["addError"](PL$54/*parParsed*/, PL$12/*errorMsg*/["internalMissingType"]));;
};
;

}else{
PL$25/*name*/ = PL$27/*identifierName*/(PL$70/*parType*/);
PL$70/*parType*/ = this["getType"](PL$25/*name*/, PL$54/*parParsed*/);;
PL$80/*typeExpression*/ = PL$81/*renderTypeName*/(PL$70/*parType*/, PL$70/*parType*/);;
if(PL$80/*typeExpression*/){
PL$49/*res*/["push"](PL$80/*typeExpression*/);;

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
this["createExtraDynamicType"] = (function(PL$70/*parType*/, PL$24/*par*/, PL$54/*parParsed*/){
var PL$25/*name*/;
var PL$60/*entry*/;
var PL$49/*res*/;
var PL$55/*newType*/;
;
PL$25/*name*/;
if(PL$24/*par*/["property"]){
PL$25/*name*/ = ((this["getTypeName"](PL$70/*parType*/, PL$54/*parParsed*/) + "::property::") + PL$24/*par*/["property"]);;

}else{
if(PL$24/*par*/["temporaryTracked"]){
PL$25/*name*/ = (this["getTypeName"](PL$70/*parType*/, PL$54/*parParsed*/) + "::temporaryTracked");;

}else{
if(PL$24/*par*/["temporaryTrackedResolved"]){
PL$25/*name*/ = (this["getTypeName"](PL$70/*parType*/, PL$54/*parParsed*/) + "::temporaryTrackedResolved");;

}else{
if(PL$24/*par*/["constructorReturn"]){
PL$25/*name*/ = (this["getTypeName"](PL$70/*parType*/, PL$54/*parParsed*/) + "::constructorReturn");;

}else{
this["error"](PL$12/*errorMsg*/["internalMissingTypeProperty"]);;
};
};
};
};
;
if(! PL$70/*parType*/["extraTypes"]){
PL$70/*parType*/["extraTypes"] = [];;
};
;
if(! PL$70/*parType*/["extraTypeMap"]){
PL$70/*parType*/["extraTypeMap"] = new PL$22/*Map*/();;
};
;
if(PL$70/*parType*/["extraTypeMap"]["has"](PL$25/*name*/)){
return PL$70/*parType*/["extraTypeMap"]["get"](PL$25/*name*/);;
};
;
PL$60/*entry*/ = {"res": this["newResult"]()};
PL$70/*parType*/["extraTypes"]["push"](PL$60/*entry*/);;
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
PL$49/*res*/["push"](this["renderType"](PL$70/*parType*/));;
PL$49/*res*/["push"]((", property: " + PL$14/*stringEncodeStr*/(PL$24/*par*/["property"])));;
PL$49/*res*/["push"]("});\n");;

}else{
if(PL$24/*par*/["temporaryTracked"]){
PL$49/*res*/["push"]("classSystem._createTemporaryTrackedClass(");;
PL$49/*res*/["push"](this["renderType"](PL$70/*parType*/));;
PL$49/*res*/["push"](");\n");;

}else{
if(PL$24/*par*/["temporaryTrackedResolved"]){
PL$49/*res*/["push"]("classSystem.getClassFromTemporaryTracked(");;
PL$49/*res*/["push"](this["renderType"](PL$70/*parType*/));;
PL$49/*res*/["push"](");\n");;

}else{
if(PL$24/*par*/["constructorReturn"]){
PL$49/*res*/["push"]("classSystem.getConstructorReturnType(");;
PL$49/*res*/["push"](this["renderType"](PL$70/*parType*/));;
PL$49/*res*/["push"](");\n");;
};
};
};
};
;
PL$55/*newType*/ = this["getType"](PL$25/*name*/, PL$54/*parParsed*/);
PL$60/*entry*/["type"] = PL$55/*newType*/;;
PL$70/*parType*/["extraTypeMap"]["set"](PL$25/*name*/, PL$55/*newType*/);;
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
var PL$139/*localVariablesAr*/;
var PL$140/*varname*/;
var PL$68/*type*/;
var PL$141/*completeFun*/;
var PL$142/*returnTypePromiseCheck*/;
var PL$143/*handleExtras*/;
var PL$144/*dt*/;
var PL$145/*thisFunType*/;
var PL$146/*uniqueNameStr*/;
var PL$147/*remoteClosure*/;
var PL$148/*finalResult*/;
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
PL$139/*localVariablesAr*/ = this["localVariables"]["getArray"]();
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$139/*localVariablesAr*/["length"]);++PL$32/*i*/){{PL$140/*varname*/ = PL$139/*localVariablesAr*/[PL$32/*i*/]["key"];
PL$68/*type*/ = this["getVariableType"](PL$140/*varname*/);
if(PL$139/*localVariablesAr*/[PL$32/*i*/]["value"]["parameter"]){
PL$133/*funRes*/["push"](this["getProcessParameterCode"]({"name": this["getVariableName"](PL$140/*varname*/),
"type": PL$68/*type*/,
"errorFun": this["getWarningFun"](PL$24/*par*/),
"parsed": PL$24/*par*/}));;

}else{
PL$133/*funRes*/["push"](this["getDeclareVariableCode"]({"name": this["getVariableName"](PL$140/*varname*/),
"type": PL$68/*type*/,
"errorFun": this["getWarningFun"](PL$24/*par*/),
"parsed": PL$24/*par*/}));;
};
;
if(! PL$121/*noUntrack*/){
this["addBeforeReturn"](this["getDestroyVariableCode"]({"name": this["getVariableName"](PL$140/*varname*/),
"type": PL$68/*type*/,
"errorFun": this["getWarningFun"](PL$24/*par*/),
"parsed": PL$24/*par*/}), this["isTrackedClassConRes"](PL$68/*type*/, PL$24/*par*/));;
};
;
this["usedVariables"][PL$140/*varname*/] = false;;
}};
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
PL$141/*completeFun*/ = this["makeCompleteStatement"](PL$133/*funRes*/);
if((this["promising"] && PL$24/*par*/["returnTypename"])){
PL$142/*returnTypePromiseCheck*/ = this["newResult"]();
PL$142/*returnTypePromiseCheck*/["push"]("(function(t){");;
PL$142/*returnTypePromiseCheck*/["push"](this["promisingReturnTypeCheck"]({"type": this["_returnType"],
"errorFun": this["getWarningFun"](PL$54/*parParsed*/),
"parsed": PL$54/*parParsed*/}));;
PL$142/*returnTypePromiseCheck*/["push"]("return t;})(");;
PL$142/*returnTypePromiseCheck*/["push"](PL$141/*completeFun*/);;
PL$142/*returnTypePromiseCheck*/["push"](")");;
PL$141/*completeFun*/ = PL$142/*returnTypePromiseCheck*/;;
};
;
if(PL$126/*funClosure*/){
PL$143/*handleExtras*/ = (function(PL$144/*dt*/){
var PL$32/*i*/;
;
if(PL$144/*dt*/["extraTypes"]){
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$144/*dt*/["extraTypes"]["length"]);++PL$32/*i*/){{PL$132/*extraTypesRes*/["push"](PL$144/*dt*/["extraTypes"][PL$32/*i*/]["res"]);;
PL$143/*handleExtras*/(PL$144/*dt*/["extraTypes"][PL$32/*i*/]["type"]);;
}};
;
};
;
;
});
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$129/*templateTypesAr*/["length"]);++PL$32/*i*/){{PL$144/*dt*/ = this["getType"](PL$129/*templateTypesAr*/[PL$32/*i*/], PL$24/*par*/);
PL$143/*handleExtras*/(PL$144/*dt*/);;
}};
;
PL$126/*funClosure*/["push"](PL$141/*completeFun*/, PL$24/*par*/, {"stringEncode": true});;
PL$126/*funClosure*/["push"](";\"); return communicator.fun; })()");;
PL$141/*completeFun*/ = this["makeCompleteStatement"](PL$126/*funClosure*/);;
};
;
PL$145/*thisFunType*/ = this["getFunctionType"](PL$24/*par*/);
PL$146/*uniqueNameStr*/;
if(PL$123/*runRemote*/){
PL$147/*remoteClosure*/ = this["newResult"]();
PL$146/*uniqueNameStr*/ = this["getUniqueName"]();;
PL$147/*remoteClosure*/["push"]("(function(f){\n");;
PL$147/*remoteClosure*/["push"](("promiseland.registerRemote(" + PL$14/*stringEncodeStr*/(PL$24/*par*/["frame"]["name"]["value"])));;
PL$147/*remoteClosure*/["push"](((((", " + PL$14/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + PL$14/*stringEncodeStr*/(PL$146/*uniqueNameStr*/)) + ", f, "));;
PL$147/*remoteClosure*/["push"](this["renderType"](PL$145/*thisFunType*/, PL$54/*parParsed*/));;
PL$147/*remoteClosure*/["push"](");\n");;
PL$147/*remoteClosure*/["push"]((("if (promiseland.profileHas(" + PL$14/*stringEncodeStr*/(PL$24/*par*/["frame"]["name"]["value"])) + ")){\n"));;
PL$147/*remoteClosure*/["push"]("return f;\n");;
PL$147/*remoteClosure*/["push"]("}else{\n");;
PL$147/*remoteClosure*/["push"]("return function(){\n");;
PL$147/*remoteClosure*/["push"]((((("return promiseland.remoteExec(" + PL$14/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + PL$14/*stringEncodeStr*/(PL$146/*uniqueNameStr*/)) + ", arguments);\n"));;
PL$147/*remoteClosure*/["push"]("}\n");;
PL$147/*remoteClosure*/["push"]("};\n");;
PL$147/*remoteClosure*/["push"]("})(");;
PL$147/*remoteClosure*/["push"](PL$141/*completeFun*/);;
PL$147/*remoteClosure*/["push"](")");;
PL$49/*res*/["push"](PL$147/*remoteClosure*/);;

}else{
PL$49/*res*/["push"](PL$141/*completeFun*/);;
};
;
PL$49/*res*/["setType"](PL$145/*thisFunType*/);;
this["unstack"]("isClassObject");;
this["unstack"]("inheritedAvailable");;
this["unstack"]("thisType");;
PL$148/*finalResult*/ = this["newResult"]();
PL$148/*finalResult*/["push"](this["makeCompleteStatement"](PL$49/*res*/));;
PL$148/*finalResult*/["setType"](PL$145/*thisFunType*/);;
return PL$148/*finalResult*/;;
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
var PL$149/*keywords*/;
var PL$32/*i*/;
;
PL$50/*r*/ = {};
PL$25/*name*/;
if(PL$24/*par*/["name"]){
PL$25/*name*/ = PL$27/*identifierName*/(PL$24/*par*/["name"]);;
};
PL$50/*r*/["hasName"] = (PL$25/*name*/ && PL$25/*name*/["length"]);;
PL$149/*keywords*/ = PL$24/*par*/["keywords"];
if((PL$149/*keywords*/ && PL$149/*keywords*/["length"])){
PL$32/*i*/;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$149/*keywords*/["length"]);++PL$32/*i*/){{switch (PL$149/*keywords*/[PL$32/*i*/]["type"]){
case "type":
PL$50/*r*/["isTyped"] = true;;
break;;
case "extends":
PL$50/*r*/["extendsClause"] = PL$149/*keywords*/[PL$32/*i*/];;
break;;
case "sync":
PL$50/*r*/["syncClause"] = PL$149/*keywords*/[PL$32/*i*/];;
break;;
case "track":
PL$50/*r*/["trackClause"] = PL$149/*keywords*/[PL$32/*i*/];;
break;;
case "unique":
PL$50/*r*/["uniqueClause"] = PL$149/*keywords*/[PL$32/*i*/];;
break;;
case "savable":
PL$50/*r*/["savableClause"] = PL$149/*keywords*/[PL$32/*i*/];;
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
var PL$150/*ci*/;
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
PL$150/*ci*/ = this["identifyClass"](PL$24/*par*/);
if(PL$150/*ci*/["isTyped"]){
if(PL$24/*par*/["body"]["literal"]){
if(PL$150/*ci*/["hasName"]){
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
var PL$150/*ci*/;
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
PL$150/*ci*/ = PL$45/*self*/["identifyClass"](PL$24/*par*/);
if(PL$150/*ci*/["hasName"]){
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
var PL$151/*classRes*/;
var PL$150/*ci*/;
var PL$127/*hasName*/;
var PL$25/*name*/;
var PL$102/*isTyped*/;
var PL$152/*extendsClause*/;
var PL$153/*syncClause*/;
var PL$154/*trackClause*/;
var PL$155/*resultType*/;
var PL$156/*literal*/;
var PL$68/*type*/;
var PL$157/*inheritedObjName*/;
var PL$158/*lit*/;
var PL$88/*l*/;
var PL$159/*prop*/;
var PL$48/*tempRes*/;
var PL$160/*baseClasses*/;
var PL$32/*i*/;
var PL$161/*used*/;
var PL$162/*u*/;
;
PL$49/*res*/ = this["newResult"]();
PL$151/*classRes*/ = this["newResult"]();
PL$150/*ci*/ = this["identifyClass"](PL$24/*par*/);
PL$127/*hasName*/ = PL$150/*ci*/["hasName"];
PL$25/*name*/;
if(PL$127/*hasName*/){
PL$25/*name*/ = PL$27/*identifierName*/(PL$24/*par*/["name"]);;
};
;
PL$102/*isTyped*/ = PL$150/*ci*/["isTyped"];
PL$152/*extendsClause*/ = PL$24/*par*/["extendsClause"];
PL$153/*syncClause*/ = PL$150/*ci*/["syncClause"];
PL$154/*trackClause*/ = PL$150/*ci*/["trackClause"];
PL$155/*resultType*/ = this["getType"]("var");
this["stack"]("inheritedSystem");;
this["inheritedSystem"] = this["newInherited"]();;
if(PL$102/*isTyped*/){
this["common"]["useClassSystem"] = true;;
PL$151/*classRes*/["push"]("classSystem.createClass(");;
if(PL$24/*par*/["body"]["literal"]){
if(PL$127/*hasName*/){
this["inheritedSystem"]["type"] = this["getType"](PL$25/*name*/, PL$24/*par*/);;
};
;
this["stack"]("isClassObject");;
this["isClassObject"] = true;;
PL$156/*literal*/ = this["createClassLiteral"](PL$24/*par*/["body"]["literal"], PL$150/*ci*/, PL$25/*name*/);
PL$151/*classRes*/["push"](this["stringifyClassLiteral"](PL$156/*literal*/));;
PL$151/*classRes*/["push"](", ");;
PL$151/*classRes*/["push"](this["createClassDefaults"](PL$24/*par*/["body"]["literal"]));;
this["unstack"]("isClassObject");;
if(PL$127/*hasName*/){
PL$68/*type*/ = this["createType"]({"name": PL$25/*name*/,
"literal": PL$156/*literal*/,
"par": PL$24/*par*/});
};
;

}else{
PL$151/*classRes*/["push"]("{}, ");;
PL$151/*classRes*/["push"](this["parseExpression"](PL$24/*par*/["body"]["expression"]));;
};
;
PL$151/*classRes*/["push"](")");;

}else{
PL$157/*inheritedObjName*/ = this["getUniqueName"]("inherited");
PL$151/*classRes*/["push"]("(function(){");;
if(PL$24/*par*/["body"]["literal"]){
this["stack"]("preventreturn");;
this["preventreturn"] = true;;
PL$158/*lit*/ = PL$24/*par*/["body"]["literal"];
PL$88/*l*/ = ((PL$158/*lit*/["properties"] && PL$158/*lit*/["properties"]["length"]) || 0);
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{PL$159/*prop*/ = PL$158/*lit*/["properties"][PL$32/*i*/];
if((PL$159/*prop*/["kind"] == "block")){
PL$151/*classRes*/["push"](this["parseExpression"](PL$159/*prop*/));;
};
;
}};
;
this["unstack"]("preventreturn");;
};
;
PL$151/*classRes*/["push"]((("var " + PL$157/*inheritedObjName*/) + " = {};\n"));;
PL$48/*tempRes*/ = this["newResult"]();
PL$48/*tempRes*/["push"]("var res = promiseland.createClass(");;
if(PL$24/*par*/["body"]["literal"]){
PL$48/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["body"]["literal"])));;

}else{
PL$48/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["body"]["expression"])));;
};
;
PL$48/*tempRes*/["push"](", [");;
PL$160/*baseClasses*/ = ((PL$152/*extendsClause*/ && PL$152/*extendsClause*/["baseClasses"]) || []);
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$160/*baseClasses*/["length"]);++PL$32/*i*/){{if(PL$32/*i*/){
PL$48/*tempRes*/["push"](", ");;
};
;
PL$48/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](PL$160/*baseClasses*/[PL$32/*i*/])));;
}};
;
PL$48/*tempRes*/["push"]("], ");;
PL$48/*tempRes*/["push"](PL$157/*inheritedObjName*/);;
PL$48/*tempRes*/["push"](");");;
PL$151/*classRes*/["push"](PL$48/*tempRes*/);;
PL$151/*classRes*/["push"]("\n");;
PL$161/*used*/ = this["inheritedSystem"]["used"];
PL$162/*u*/;
for(PL$162/*u*/ in PL$161/*used*/){PL$151/*classRes*/["push"]((((((("var " + PL$161/*used*/[PL$162/*u*/]) + " = ") + PL$157/*inheritedObjName*/) + "[") + PL$14/*stringEncodeStr*/(PL$162/*u*/)) + "];\n"));;
};
;
PL$151/*classRes*/["push"]("return res; })()");;
};
;
if(PL$127/*hasName*/){
if(PL$102/*isTyped*/){
PL$49/*res*/["addPre"](this["_resolveClassCode"]({"name": PL$24/*par*/["name"],
"classRes": PL$151/*classRes*/,
"parsed": PL$24/*par*/}));;

}else{
PL$49/*res*/["addPre"]((this["getVariableName"](PL$24/*par*/["name"]) + " = "));;
PL$49/*res*/["addPre"](PL$151/*classRes*/);;
PL$49/*res*/["addPre"](";");;
};
;
PL$49/*res*/["push"](this["getVariableName"](PL$24/*par*/["name"]));;

}else{
PL$49/*res*/["push"](PL$151/*classRes*/);;
};
;
PL$49/*res*/["setType"](PL$155/*resultType*/);;
this["unstack"]("inheritedSystem");;
return PL$49/*res*/;;
;
});;
this["_resolveClassCode"] = (function(PL$24/*par*/){
var PL$67/*parsed*/;
var PL$49/*res*/;
;
PL$67/*parsed*/ = PL$24/*par*/["parsed"];
PL$49/*res*/ = this["newResult"]();
this["common"]["useClassSystem"] = true;;
PL$49/*res*/["push"]("classSystem._resolveProvisional(", PL$67/*parsed*/);;
PL$49/*res*/["push"](this["renderType"](PL$24/*par*/["name"], PL$67/*parsed*/), PL$67/*parsed*/);;
PL$49/*res*/["push"](", ", PL$67/*parsed*/);;
PL$49/*res*/["push"](PL$24/*par*/["classRes"], PL$67/*parsed*/);;
PL$49/*res*/["push"](");", PL$67/*parsed*/);;
return PL$49/*res*/;;
;
});;
this["createClassLiteral"] = (function(PL$24/*par*/, PL$150/*ci*/, PL$73/*parName*/){
var PL$163/*ret*/;
var PL$32/*i*/;
var PL$88/*l*/;
var PL$159/*prop*/;
var PL$164/*defaultValue*/;
var PL$68/*type*/;
var PL$25/*name*/;
;
PL$163/*ret*/ = {"members": [],
"extends": [],
"hasFreePart": true,
"parsed": PL$24/*par*/,
"track": (PL$150/*ci*/["trackClause"] ? true : false),
"sync": PL$150/*ci*/["syncClause"],
"unique": PL$150/*ci*/["uniqueClause"],
"savable": PL$150/*ci*/["savableClause"],
"name": PL$73/*parName*/,
"hashStr": this["getModuleHashStr"]()};
PL$32/*i*/ = 0;
PL$88/*l*/ = ((PL$24/*par*/["properties"] && PL$24/*par*/["properties"]["length"]) || 0);
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{PL$159/*prop*/ = PL$24/*par*/["properties"][PL$32/*i*/];
PL$164/*defaultValue*/;
PL$68/*type*/;
if((PL$159/*prop*/["kind"] == "init")){
PL$68/*type*/ = (PL$159/*prop*/["typename"] ? this["getType"](PL$159/*prop*/["typename"], PL$24/*par*/) : undefined);;
if(PL$159/*prop*/["value"]){
if(PL$68/*type*/){
PL$164/*defaultValue*/ = this["parseAsType"](PL$68/*type*/, PL$159/*prop*/["value"]);;

}else{
PL$164/*defaultValue*/ = this["parseExpression"](PL$159/*prop*/["value"]);;
PL$68/*type*/ = PL$164/*defaultValue*/["getType"]();;
};
;
};
;
if(! PL$68/*type*/){
PL$68/*type*/ = this["getType"]("var");;
};
;
PL$163/*ret*/["members"]["push"]({"name": PL$27/*identifierName*/(PL$159/*prop*/["key"]),
"type": PL$68/*type*/,
"defaultValue": PL$164/*defaultValue*/});;

}else{
if((PL$159/*prop*/["kind"] == "function")){
PL$25/*name*/ = PL$27/*identifierName*/(PL$159/*prop*/["id"]);
PL$159/*prop*/["id"] = undefined;;
PL$164/*defaultValue*/ = this["parseExpression"](PL$159/*prop*/["value"]);;
PL$68/*type*/ = PL$164/*defaultValue*/["getType"]();;
PL$163/*ret*/["members"]["push"]({"name": PL$25/*name*/,
"type": PL$68/*type*/,
"defaultValue": PL$164/*defaultValue*/});;

}else{
this["error"](PL$159/*prop*/, PL$12/*errorMsg*/["unknownPropertyAssignmentType"]);;
};
};
;
}};
;
return PL$163/*ret*/;;
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
PL$49/*res*/["push"](PL$165/*JSON*/["stringify"](PL$24/*par*/["sync"]));;
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
var PL$166/*comma*/;
var PL$159/*prop*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"]("{");;
PL$32/*i*/ = 0;
PL$88/*l*/ = ((PL$24/*par*/["properties"] && PL$24/*par*/["properties"]["length"]) || 0);
PL$166/*comma*/;
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{PL$159/*prop*/ = PL$24/*par*/["properties"][PL$32/*i*/];
if((PL$159/*prop*/["kind"] == "init")){
if(PL$166/*comma*/){
PL$49/*res*/["push"](", ");;
};
;
PL$49/*res*/["push"]((PL$14/*stringEncodeStr*/(PL$27/*identifierName*/(PL$159/*prop*/["key"])) + ": "));;
if(PL$159/*prop*/["value"]){
PL$49/*res*/["push"](this["parseExpression"](PL$159/*prop*/["value"]));;

}else{
PL$49/*res*/["push"]("undefined");;
};
;
PL$166/*comma*/ = true;;
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
var PL$68/*type*/;
;
PL$25/*name*/ = PL$27/*identifierName*/(PL$24/*par*/["name"]);
if(this["types"]["has"][PL$25/*name*/]){
this["error"](PL$54/*parParsed*/, PL$12/*errorMsg*/["typeExists"]);;
};
;
PL$68/*type*/;
if(PL$24/*par*/["dynamic"]){
PL$68/*type*/ = {"isDynamic": true,
"extraRes": PL$24/*par*/["extraRes"]};;

}else{
PL$68/*type*/ = this["getProvisionalType"](PL$54/*parParsed*/);;
};
;
this["types"]["set"](PL$25/*name*/, {"name": PL$25/*name*/,
"type": PL$68/*type*/,
"isDynamic": PL$68/*type*/["isDynamic"],
"extraRes": PL$24/*par*/["extraRes"]});;
;
});;
this["getTypeName"] = (function(PL$70/*parType*/, PL$54/*parParsed*/){
var PL$25/*name*/;
var PL$84/*typesAr*/;
var PL$32/*i*/;
;
PL$25/*name*/;
PL$84/*typesAr*/ = this["types"]["getArray"]();
PL$32/*i*/;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$84/*typesAr*/["length"]);++PL$32/*i*/){{PL$25/*name*/ = PL$84/*typesAr*/[PL$32/*i*/]["key"];;
if((this["types"]["get"](PL$25/*name*/)["type"] === PL$70/*parType*/)){
return this["types"]["get"](PL$25/*name*/)["name"];;
};
;
}};
;
this["error"](PL$54/*parParsed*/, PL$12/*errorMsg*/["internalTypeHasNoName"]);;
;
});;
this["createType"] = (function(PL$24/*par*/){
var PL$25/*name*/;
var PL$60/*entry*/;
var PL$68/*type*/;
var PL$167/*provisional*/;
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
PL$68/*type*/ = PL$18/*classSystem*/["createClass"](PL$24/*par*/["literal"], {});
PL$167/*provisional*/ = PL$60/*entry*/["type"];
PL$60/*entry*/["type"] = PL$68/*type*/;;
try
{this["resolveProvisional"](PL$167/*provisional*/, PL$68/*type*/);;
}catch(PL$168/*e*/){this["error"](PL$24/*par*/["par"], PL$12/*errorMsg*/["typeRedefinition"]);;
};
;
PL$60/*entry*/["isDefined"] = true;;
;
});;
this["_getTypeEntry"] = (function(PL$73/*parName*/, PL$54/*parParsed*/, PL$24/*par*/){
var PL$25/*name*/;
var PL$169/*throwError*/;
var PL$125/*typename*/;
var PL$170/*typeEntry*/;
var PL$93/*extraRes*/;
;
PL$25/*name*/ = PL$27/*identifierName*/(PL$73/*parName*/);
PL$169/*throwError*/ = true;
if((PL$24/*par*/ && PL$24/*par*/["dontThrow"])){
PL$169/*throwError*/ = false;;
};
;
if(this["types"]["has"](PL$25/*name*/)){
return this["types"]["get"](PL$25/*name*/);;
};
;
if((PL$25/*name*/[(PL$25/*name*/["length"] - 1)] == "*")){
PL$125/*typename*/ = PL$25/*name*/["substr"](0, (PL$25/*name*/["length"] - 1));
PL$170/*typeEntry*/ = this["_getTypeEntry"](PL$125/*typename*/, PL$54/*parParsed*/, PL$24/*par*/);
if(PL$170/*typeEntry*/){
PL$93/*extraRes*/ = PL$170/*typeEntry*/["extraRes"];
this["types"]["set"](PL$25/*name*/, {"name": PL$25/*name*/,
"type": PL$18/*classSystem*/["_createPromiseOfClass"](PL$170/*typeEntry*/["type"]),
"isDynamic": false,
"extraRes": PL$93/*extraRes*/});;
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
return this["types"]["get"](PL$25/*name*/);;
};
;
};
;
if(! PL$169/*throwError*/){
return;;
};
;
this["error"](PL$54/*parParsed*/, PL$12/*errorMsg*/["typeUndeclared"], {"name": PL$25/*name*/});;
;
});;
this["getType"] = (function(PL$73/*parName*/, PL$54/*parParsed*/, PL$24/*par*/){
var PL$60/*entry*/;
;
PL$60/*entry*/ = this["_getTypeEntry"](PL$73/*parName*/, PL$54/*parParsed*/, PL$24/*par*/);
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
this["getConstructorName"] = (function(PL$73/*parName*/){
var PL$25/*name*/;
var PL$30/*t*/;
;
PL$25/*name*/ = PL$27/*identifierName*/(PL$73/*parName*/);
if(this["types"]["has"](PL$25/*name*/)){
PL$30/*t*/ = this["types"]["get"](PL$25/*name*/);
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
this["error"](PL$73/*parName*/, PL$12/*errorMsg*/["typeUndeclared"], {"name": PL$25/*name*/});;
;
});;
this["expTryStatement"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$171/*catchPromise*/;
var PL$172/*continuePromise*/;
var PL$136/*b*/;
var PL$137/*extraPar*/;
var PL$173/*temporaryPs*/;
;
PL$49/*res*/ = this["newResult"]();
PL$171/*catchPromise*/;
PL$172/*continuePromise*/;
if(PL$37/*checkPromising*/(PL$24/*par*/)){
this["stack"]("tryCatchFunctionStr");;
this["stack"]("catchFunctionStr");;
PL$172/*continuePromise*/ = this["getUniqueName"]();;
PL$49/*res*/["addPre"]((((("var " + PL$172/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$171/*catchPromise*/ = this["getUniqueName"]();;
PL$49/*res*/["addPre"]((((("var " + PL$171/*catchPromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
this["tryCatchFunctionStr"] = (this["getUniqueName"]() + "/*try catch*/");;
PL$49/*res*/["addPre"]((((("var " + this["tryCatchFunctionStr"]) + " = function(code){ return function(res){ try{code(res);}catch(e){ ") + PL$171/*catchPromise*/) + ".resolve(e); }; }; };\n"));;
this["catchFunctionStr"] = this["getUniqueName"]();;
PL$49/*res*/["addPre"]((((("var " + this["catchFunctionStr"]) + " = function(e){ ") + PL$171/*catchPromise*/) + ".resolve(e); };\n"));;
PL$49/*res*/["push"]((this["tryCatchFunctionStr"] + "(function()"));;

}else{
PL$49/*res*/["push"]("try\n");;
};
;
PL$136/*b*/ = PL$24/*par*/["block"];
PL$137/*extraPar*/ = {};
PL$136/*b*/["brackets"] = true;;
if(PL$37/*checkPromising*/(PL$24/*par*/)){
PL$137/*extraPar*/["postCode"] = this["newResult"]((PL$172/*continuePromise*/ + ".resolve()"));;
};
;
PL$49/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](PL$136/*b*/, PL$137/*extraPar*/)));;
if(PL$37/*checkPromising*/(PL$24/*par*/)){
this["unstack"]("tryCatchFunctionStr");;
this["unstack"]("catchFunctionStr");;
PL$49/*res*/["push"](")();\n");;
PL$49/*res*/["push"]((((PL$171/*catchPromise*/ + ".then(") + this["tryCatchFunctionStr"]) + "(function("));;

}else{
PL$49/*res*/["push"]("catch(");;
};
;
PL$173/*temporaryPs*/;
if(PL$24/*par*/["handler"]["param"]){
PL$49/*res*/["push"](this["getVariableName"](PL$27/*identifierName*/(PL$24/*par*/["handler"]["param"])));;
PL$173/*temporaryPs*/ = this["addLocalVariableTemporary"]({"name": PL$27/*identifierName*/(PL$24/*par*/["handler"]["param"]),
"typename": "var",
"parameter": true}, PL$24/*par*/["handler"]);;
};
;
PL$49/*res*/["push"](")");;
PL$136/*b*/ = PL$24/*par*/["handler"]["body"];;
PL$137/*extraPar*/ = {};;
PL$136/*b*/["brackets"] = true;;
if(PL$37/*checkPromising*/(PL$24/*par*/)){
PL$137/*extraPar*/["postCode"] = this["newResult"]((PL$172/*continuePromise*/ + ".resolve();"));;
};
;
PL$49/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](PL$136/*b*/, PL$137/*extraPar*/)));;
if(PL$37/*checkPromising*/(PL$24/*par*/)){
PL$49/*res*/["push"]("));\n");;
PL$49/*res*/["push"](PL$172/*continuePromise*/);;
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
if(PL$173/*temporaryPs*/){
PL$173/*temporaryPs*/["resolve"]();;
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
var PL$174/*statementRes*/;
;
PL$174/*statementRes*/ = this["newResult"]();
PL$174/*statementRes*/["setStatement"]();;
PL$174/*statementRes*/["push"](PL$24/*par*/);;
PL$174/*statementRes*/["push"](";\n");;
return PL$174/*statementRes*/;;
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
this["blockCreator"] = (function(PL$24/*par*/, PL$175/*parExtra*/){
var PL$49/*res*/;
var PL$176/*blockRes*/;
var PL$177/*sAr*/;
var PL$32/*i*/;
var PL$88/*l*/;
;
if(! PL$175/*parExtra*/){
PL$175/*parExtra*/ = {};;
};
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["setType"](PL$19/*statementType*/);;
if(PL$24/*par*/["brackets"]){
PL$49/*res*/["push"]("{");;
};
;
PL$176/*blockRes*/ = this["newResult"]();
PL$177/*sAr*/ = [];
if((PL$24/*par*/ instanceof PL$178/*Array*/)){
PL$177/*sAr*/ = PL$24/*par*/;;

}else{
if((PL$24/*par*/["type"] == "BlockStatement")){
PL$177/*sAr*/ = PL$24/*par*/["body"];;

}else{
PL$179/*console*/["log"]("here <------------------------");;
PL$177/*sAr*/["push"](this["parseExpression"](PL$24/*par*/));;
};
;
};
;
if(PL$175/*parExtra*/["preCode"]){
PL$176/*blockRes*/["push"](this["makeStatement"](PL$175/*parExtra*/["preCode"]));;
};
;
PL$32/*i*/ = 0;
PL$88/*l*/ = PL$177/*sAr*/["length"];
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{PL$176/*blockRes*/["push"](this["makeStatement"](this["parseExpression"](PL$177/*sAr*/[PL$32/*i*/])));;
}};
;
if(PL$175/*parExtra*/["postCode"]){
PL$176/*blockRes*/["push"](this["makeStatement"](PL$175/*parExtra*/["postCode"]));;
};
;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$176/*blockRes*/));;
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
this["_parseExpression"] = (function(PL$180/*value*/){
var PL$49/*res*/;
;
PL$49/*res*/;
switch (PL$180/*value*/["type"]){
case "ArrayExpression":
return this["expArrayExpression"](PL$180/*value*/);;
case "AssignmentExpression":
return this["expAssignmentExpression"](PL$180/*value*/);;
case "BinaryExpression":
return this["expBinaryExpression"](PL$180/*value*/);;
case "BlockStatement":
return this["expBlockStatement"](PL$180/*value*/);;
case "BreakStatement":
return this["expBreakStatement"](PL$180/*value*/);;
case "CallExpression":
return this["expCallExpression"](PL$180/*value*/);;
case "Class":
return this["expClassStatement"](PL$180/*value*/);;
case "ClassObjectExpression":
return this["expClassObjectExpression"](PL$180/*value*/);;
case "ConditionalExpression":
return this["conditionalExpression"](PL$180/*value*/);;
case "ConnectExpression":
return this["connectExpression"](PL$180/*value*/);;
case "ContinueStatement":
return this["expContinueStatement"](PL$180/*value*/);;
case "DebuggerStatement":
return this["expDebuggerStatement"](PL$180/*value*/);;
case "EmptyStatement":
PL$49/*res*/ = this["newResult"]();;
PL$49/*res*/["setType"]("var");;
return PL$49/*res*/;;
case "ExpressionStatement":
return this["expExpressionStatement"](PL$180/*value*/);;
case "ForInStatement":
return this["expForInStatement"](PL$180/*value*/);;
case "ForStatement":
return this["expForStatement"](PL$180/*value*/);;
case "FunctionExpression":
return this["expFunctionExpression"](PL$180/*value*/);;
case "FunctionDeclaration":
return this["expFunctionDeclaration"](PL$180/*value*/);;
case "MemberFunction":
return this["expMemberFunction"](PL$180/*value*/);;
case "Identifier":
return this["expIdentifier"](PL$180/*value*/);;
case "IfStatement":
return this["expIfStatement"](PL$180/*value*/);;
case "InheritedExpression":
return this["expInheritedExpression"](PL$180/*value*/);;
case "Literal":
return this["expLiteral"](PL$180/*value*/);;
case "MemberExpression":
return this["expMemberExpression"](PL$180/*value*/);;
case "NewExpression":
return this["expNewExpression"](PL$180/*value*/);;
case "ObjectExpression":
return this["expObjectExpression"](PL$180/*value*/);;
case "ReturnStatement":
return this["expReturnStatement"](PL$180/*value*/);;
case "SwitchStatement":
return this["expSwitchStatement"](PL$180/*value*/);;
case "ThisExpression":
return this["expThisExpression"](PL$180/*value*/);;
case "ThrowStatement":
return this["expThrowStatement"](PL$180/*value*/);;
case "TryStatement":
return this["expTryStatement"](PL$180/*value*/);;
case "UnaryExpression":
if((PL$180/*value*/["operator"] == "*")){
return this["expPromiseExpression"](PL$180/*value*/["argument"]);;
};
;
if((PL$180/*value*/["operator"] == "require")){
return this["expRequireExpression"](PL$180/*value*/["argument"]);;
};
;
return this["expUnaryExpression"](PL$180/*value*/);;
case "UpdateExpression":
return this["expUpdateExpression"](PL$180/*value*/);;
case "VariableStatement":
return this["expVariableStatement"](PL$180/*value*/);;
case "VariableDeclaration":
return this["expVariableDeclaration"](PL$180/*value*/);;
case "WhileStatement":
return this["whileStatement"](PL$180/*value*/);;
default:
this["error"](PL$180/*value*/, PL$12/*errorMsg*/["unknownType"]);;
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
this["expFunctionExpression"] = (function(PL$180/*value*/, PL$181/*declaration*/){
var PL$182/*cp*/;
var PL$183/*funName*/;
var PL$133/*funRes*/;
var PL$184/*uv*/;
var PL$25/*name*/;
var PL$49/*res*/;
;
PL$182/*cp*/ = this["newInstance"](PL$180/*value*/, {"dynamicCode": (this["dynamicCode"] || this["isFunction"])});
PL$183/*funName*/ = PL$182/*cp*/["getFunctionName"]();
PL$133/*funRes*/ = PL$182/*cp*/["getFunctionRes"]();
PL$184/*uv*/ = PL$182/*cp*/["_getUsedVairables"]();
PL$25/*name*/;
for(PL$25/*name*/ in PL$184/*uv*/){if((PL$184/*uv*/[PL$25/*name*/] === true)){
this["_addUsedVariable"](PL$25/*name*/);;
};
;
};
;
PL$49/*res*/;
if((PL$183/*funName*/ && PL$133/*funRes*/)){
this["addFunction"](PL$133/*funRes*/, PL$183/*funName*/);;
PL$49/*res*/ = this["newResult"](this["getVariableName"](PL$183/*funName*/));;
PL$49/*res*/["setType"](PL$133/*funRes*/["getType"]());;
return PL$49/*res*/;;
};
;
PL$49/*res*/ = this["newResult"]();;
if(! PL$181/*declaration*/){
PL$49/*res*/["push"]("(");;
};
;
PL$49/*res*/["pushType"]((PL$133/*funRes*/ || PL$182/*cp*/["getResult"]()));;
if(! PL$181/*declaration*/){
PL$49/*res*/["push"](")");;
};
;
return PL$49/*res*/;;
;
});;
this["expFunctionDeclaration"] = (function(PL$180/*value*/){
;
return this["expFunctionExpression"](PL$180/*value*/, true);;
;
});;
this["expMemberFunction"] = (function(PL$180/*value*/){
;
PL$180/*value*/["id"] = undefined;;
return this["expFunctionExpression"](PL$180/*value*/);;
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
this["expPromiseExpression"] = (function(PL$185/*parExpression*/){
var PL$49/*res*/;
var PL$186/*expressionRes*/;
var PL$187/*promiseNameStr*/;
var PL$188/*dereferencePre*/;
var PL$189/*preRes*/;
var PL$190/*dereferencePost*/;
var PL$191/*postRes*/;
var PL$192/*promiseType*/;
;
PL$49/*res*/ = this["newResult"]();
PL$186/*expressionRes*/ = this["parseExpression"](PL$185/*parExpression*/);
PL$187/*promiseNameStr*/ = this["getUniqueName"]();
PL$49/*res*/["makePromising"]();;
PL$49/*res*/["setPromiseName"](PL$187/*promiseNameStr*/);;
PL$188/*dereferencePre*/ = this["dereferencePromisePreCode"]({"value": PL$186/*expressionRes*/});
PL$189/*preRes*/ = this["newResult"]();
PL$189/*preRes*/["push"](PL$188/*dereferencePre*/);;
PL$189/*preRes*/["push"]((this["tryCatchFunctionStr"] + "(function("));;
PL$189/*preRes*/["push"](PL$187/*promiseNameStr*/);;
PL$189/*preRes*/["push"]("){");;
PL$49/*res*/["addPre"](PL$189/*preRes*/);;
PL$190/*dereferencePost*/ = this["dereferencePromisePostCode"]({"value": PL$186/*expressionRes*/});
PL$191/*postRes*/ = this["newResult"]();
PL$191/*postRes*/["push"](("}), " + this["catchFunctionStr"]));;
PL$191/*postRes*/["push"](PL$190/*dereferencePost*/);;
PL$191/*postRes*/["push"](";");;
PL$49/*res*/["addPost"](PL$191/*postRes*/);;
PL$192/*promiseType*/ = PL$186/*expressionRes*/["getType"]();
PL$49/*res*/["setType"](this["getClassFromPromiseOf"](PL$192/*promiseType*/));;
return PL$49/*res*/;;
;
});;
this["expUnaryExpression"] = (function(PL$185/*parExpression*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"](PL$185/*parExpression*/["operator"]);;
PL$49/*res*/["push"](" ");;
PL$49/*res*/["pushType"](this["expectTypeVar"](this["parseExpression"](PL$185/*parExpression*/["argument"])));;
return PL$49/*res*/;;
;
});;
this["expRequireExpression"] = (function(PL$185/*parExpression*/){
var PL$49/*res*/;
var PL$186/*expressionRes*/;
var PL$187/*promiseNameStr*/;
var PL$188/*dereferencePre*/;
var PL$189/*preRes*/;
var PL$190/*dereferencePost*/;
var PL$191/*postRes*/;
;
PL$49/*res*/ = this["newResult"]();
this["common"]["useRequire"] = true;;
PL$186/*expressionRes*/ = this["newResult"]();
PL$186/*expressionRes*/["push"]("__requireFun(");;
PL$186/*expressionRes*/["push"](this["parseExpression"](PL$185/*parExpression*/));;
PL$186/*expressionRes*/["push"](")");;
PL$186/*expressionRes*/["setType"]("var");;
PL$187/*promiseNameStr*/ = this["getUniqueName"]();
PL$49/*res*/["makePromising"]();;
PL$49/*res*/["setPromiseName"](PL$187/*promiseNameStr*/);;
PL$188/*dereferencePre*/ = this["dereferencePromisePreCode"]({"value": PL$186/*expressionRes*/});
PL$189/*preRes*/ = this["newResult"]();
PL$189/*preRes*/["push"](PL$188/*dereferencePre*/);;
PL$189/*preRes*/["push"]((this["tryCatchFunctionStr"] + "(function("));;
PL$189/*preRes*/["push"](PL$187/*promiseNameStr*/);;
PL$189/*preRes*/["push"]("){");;
PL$49/*res*/["addPre"](PL$189/*preRes*/);;
PL$190/*dereferencePost*/ = this["dereferencePromisePostCode"]({"value": PL$186/*expressionRes*/});
PL$191/*postRes*/ = this["newResult"]();
PL$191/*postRes*/["push"](("}), " + this["catchFunctionStr"]));;
PL$191/*postRes*/["push"](PL$190/*dereferencePost*/);;
PL$191/*postRes*/["push"](";");;
PL$49/*res*/["addPost"](PL$191/*postRes*/);;
PL$49/*res*/["setType"]("var");;
return PL$49/*res*/;;
;
});;
this["expNewExpression"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$193/*typed*/;
var PL$68/*type*/;
var PL$32/*i*/;
var PL$194/*constructorType*/;
var PL$195/*expression*/;
;
PL$49/*res*/ = this["newResult"]();
PL$193/*typed*/ = false;
PL$68/*type*/ = "var";
if((PL$24/*par*/["callee"] && (PL$24/*par*/["callee"]["type"] == "Identifier"))){
PL$68/*type*/ = this["getType"](PL$27/*identifierName*/(PL$24/*par*/["callee"]), PL$24/*par*/, {"dontThrow": true});;
if(PL$68/*type*/){
PL$49/*res*/["push"]("new ");;
PL$49/*res*/["push"](this["getConstructorName"](PL$24/*par*/["callee"]));;
PL$49/*res*/["push"]("(");;
PL$193/*typed*/ = true;;
PL$49/*res*/["setType"](this["getConstructorReturnType"](PL$68/*type*/));;
};
;
};
;
if(! PL$193/*typed*/){
PL$49/*res*/["push"]("new ");;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["callee"])));;
PL$49/*res*/["push"]("(");;
};
;
PL$32/*i*/ = 0;
PL$194/*constructorType*/;
if(PL$193/*typed*/){
PL$194/*constructorType*/ = this["getConstructorType"]({"type": PL$68/*type*/}, PL$24/*par*/);;
};
;
for(PL$32/*i*/;(PL$32/*i*/ < PL$24/*par*/["arguments"]["length"]);++PL$32/*i*/){{if(PL$32/*i*/){
PL$49/*res*/["push"](", ");;
};
;
PL$195/*expression*/ = this["parseExpression"](PL$24/*par*/["arguments"][PL$32/*i*/]);
if(PL$193/*typed*/){
PL$49/*res*/["push"](this["getPassAsTypeCode"]({"value": PL$195/*expression*/,
"valueType": PL$195/*expression*/["getType"](),
"type": this["getFunctionArgumentType"](PL$194/*constructorType*/, PL$32/*i*/, PL$24/*par*/),
"errorFun": this["getWarningFun"](PL$24/*par*/)}));;

}else{
PL$49/*res*/["push"](this["expectTypeVar"](PL$195/*expression*/));;
};
;
}};
;
PL$49/*res*/["push"](")");;
if(! PL$193/*typed*/){
PL$49/*res*/["setType"]("var");;
};
;
return PL$49/*res*/;;
;
});;
this["connectExpression"] = (function(PL$54/*parParsed*/){
var PL$49/*res*/;
var PL$196/*signalObject*/;
var PL$197/*signalProperty*/;
var PL$198/*slotObject*/;
var PL$199/*slotProperty*/;
var PL$200/*fun*/;
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
PL$196/*signalObject*/ = this["parseExpression"](PL$54/*parParsed*/["signal"]["object"]);
PL$197/*signalProperty*/ = PL$27/*identifierName*/(PL$54/*parParsed*/["signal"]["property"]);
if(PL$54/*parParsed*/["slot"]){
if((PL$54/*parParsed*/["slot"]["type"] != "MemberExpression")){
this["error"](PL$54/*parParsed*/["slot"], PL$12/*errorMsg*/["expectedMemberExpression"]);;
};
;
if(PL$54/*parParsed*/["slot"]["computed"]){
this["error"](PL$54/*parParsed*/["slot"], PL$12/*errorMsg*/["noComputedMembersAllowed"]);;
};
;
PL$198/*slotObject*/ = this["parseExpression"](PL$54/*parParsed*/["slot"]["object"]);
PL$199/*slotProperty*/ = PL$27/*identifierName*/(PL$54/*parParsed*/["slot"]["property"]);
PL$49/*res*/["push"](this["connectSlotCode"]({"signalObject": PL$196/*signalObject*/,
"signalProperty": PL$197/*signalProperty*/,
"slotObject": PL$198/*slotObject*/,
"slotProperty": PL$199/*slotProperty*/,
"errorFun": this["getWarningFun"](PL$54/*parParsed*/)}));;

}else{
if(PL$54/*parParsed*/["fun"]){
PL$200/*fun*/ = this["parseExpression"](PL$54/*parParsed*/["fun"]);
PL$49/*res*/["push"](this["connectFunCode"]({"signalObject": PL$196/*signalObject*/,
"signalProperty": PL$197/*signalProperty*/,
"fun": PL$200/*fun*/,
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
var PL$201/*promiseName*/;
var PL$202/*outerBlock*/;
var PL$136/*b*/;
var PL$138/*block*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["makePromising"]();;
PL$201/*promiseName*/ = (PL$24/*par*/["promiseName"] || this["getUniqueName"]());
PL$49/*res*/["setPromiseName"](PL$201/*promiseName*/);;
this["stack"]("breakCode");;
this["stack"]("continueCode");;
this["breakCode"] = (((PL$201/*promiseName*/ + ".resolve(false); return ") + PL$201/*promiseName*/) + ";\n");;
this["continueCode"] = (((PL$201/*promiseName*/ + ".resolve(true); return ") + PL$201/*promiseName*/) + ";\n");;
PL$49/*res*/["push"]((((("var " + PL$201/*promiseName*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$202/*outerBlock*/ = this["newResult"]();
if(PL$24/*par*/["preCondition"]){
PL$202/*outerBlock*/["push"]("if(");;
PL$202/*outerBlock*/["push"](PL$24/*par*/["preCondition"]);;
PL$202/*outerBlock*/["push"]("){");;
};
;
PL$136/*b*/ = PL$24/*par*/["block"];
PL$136/*b*/["brackets"] = false;;
PL$138/*block*/ = this["blockCreator"](PL$136/*b*/, {"postCode": this["newResult"](this["continueCode"])});
PL$202/*outerBlock*/["push"](this["makeCompleteStatement"](PL$138/*block*/));;
if(PL$24/*par*/["preCondition"]){
PL$202/*outerBlock*/["push"]("}else{");;
PL$202/*outerBlock*/["push"](this["breakCode"]);;
PL$202/*outerBlock*/["push"]("};\n");;
};
;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$202/*outerBlock*/));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
return PL$49/*res*/;;
;
});;
this["generateLoop"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$203/*loopFun*/;
var PL$204/*loopEndPromise*/;
var PL$205/*loopCode*/;
var PL$206/*doFun*/;
var PL$207/*doFunStatement*/;
;
PL$49/*res*/ = this["newResult"]();
PL$203/*loopFun*/ = this["getUniqueName"]();
PL$204/*loopEndPromise*/ = this["getUniqueName"]();
PL$49/*res*/["push"]((((("var " + PL$204/*loopEndPromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$49/*res*/["push"]((("var " + PL$203/*loopFun*/) + " = function(){"));;
PL$205/*loopCode*/ = this["breakOrContinuePromise"]({"block": PL$24/*par*/["block"],
"preCondition": PL$24/*par*/["preCondition"],
"postCode": PL$24/*par*/["postCode"]});
PL$49/*res*/["push"](this["makeStatement"](this["makeCompleteStatement"](PL$205/*loopCode*/)));;
PL$49/*res*/["push"]("return ");;
PL$49/*res*/["push"](PL$205/*loopCode*/["getPromiseName"]());;
PL$49/*res*/["push"](";\n");;
PL$49/*res*/["push"]("};\n");;
PL$206/*doFun*/ = this["getUniqueName"]();
PL$49/*res*/["push"]((("var " + PL$206/*doFun*/) + " = function(){"));;
PL$49/*res*/["push"](PL$203/*loopFun*/);;
PL$49/*res*/["push"]("().then(function(contLoop){\n");;
PL$49/*res*/["push"]("if (contLoop){");;
PL$207/*doFunStatement*/ = this["newResult"]();
if(PL$24/*par*/["postCode"]){
PL$207/*doFunStatement*/["push"](this["makeStatement"](PL$24/*par*/["postCode"]));;
};
;
PL$207/*doFunStatement*/["push"]((PL$206/*doFun*/ + "();"));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$207/*doFunStatement*/));;
PL$49/*res*/["push"]("}else{");;
PL$49/*res*/["push"]((PL$204/*loopEndPromise*/ + ".resolve();"));;
PL$49/*res*/["push"]("};\n");;
PL$49/*res*/["push"]("});\n");;
PL$49/*res*/["push"]("};\n");;
PL$49/*res*/["push"]((PL$206/*doFun*/ + "();\n"));;
PL$49/*res*/["push"](PL$204/*loopEndPromise*/);;
PL$49/*res*/["push"](".then(function(){");;
PL$49/*res*/["addPost"]("});");;
return PL$49/*res*/;;
;
});;
this["expForStatement"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$208/*statement*/;
var PL$209/*promising*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
PL$49/*res*/ = this["newResult"]();
PL$208/*statement*/;
PL$209/*promising*/ = false;
if(((PL$37/*checkPromising*/(PL$24/*par*/["test"]) || PL$37/*checkPromising*/(PL$24/*par*/["update"])) || PL$37/*checkPromising*/(PL$24/*par*/["body"]))){
PL$209/*promising*/ = true;;
};
;
if(PL$209/*promising*/){
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
PL$208/*statement*/ = this["newResult"]();;
PL$208/*statement*/["push"](this["expBlockStatement"](PL$24/*par*/["body"]));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$208/*statement*/));;
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
var PL$208/*statement*/;
var PL$209/*promising*/;
var PL$210/*iteratorRes*/;
var PL$211/*iteratorAccess*/;
var PL$212/*arrayName*/;
var PL$213/*iName*/;
var PL$214/*conditionRes*/;
var PL$215/*postCodeRes*/;
var PL$136/*b*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$49/*res*/ = this["newResult"]();
PL$208/*statement*/;
PL$209/*promising*/ = false;
if(PL$37/*checkPromising*/(PL$24/*par*/["body"])){
PL$209/*promising*/ = true;;
};
;
if(PL$209/*promising*/){
PL$210/*iteratorRes*/ = this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["left"]));
PL$211/*iteratorAccess*/ = PL$210/*iteratorRes*/;
if(PL$210/*iteratorRes*/["promising"]){
PL$211/*iteratorAccess*/ = PL$210/*iteratorRes*/["getPromiseName"]();;
};
;
PL$212/*arrayName*/ = this["getUniqueName"]();
PL$49/*res*/["addPre"]((("var " + PL$212/*arrayName*/) + " = [];"));;
PL$49/*res*/["push"]("for(");;
PL$49/*res*/["push"](PL$210/*iteratorRes*/);;
PL$49/*res*/["push"](" in ");;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["right"])));;
PL$49/*res*/["push"]("){");;
PL$49/*res*/["push"]((PL$212/*arrayName*/ + ".push("));;
PL$49/*res*/["push"](PL$211/*iteratorAccess*/);;
PL$49/*res*/["push"](");");;
PL$49/*res*/["push"]("};");;
PL$49/*res*/["push"](PL$210/*iteratorRes*/);;
PL$49/*res*/["push"](((" = " + PL$212/*arrayName*/) + "[0];"));;
PL$213/*iName*/ = this["getUniqueName"]();
PL$49/*res*/["push"]((("var " + PL$213/*iName*/) + " = 0;"));;
PL$214/*conditionRes*/ = this["newResult"]();
PL$214/*conditionRes*/["push"]((((PL$213/*iName*/ + " < ") + PL$212/*arrayName*/) + ".length"));;
PL$215/*postCodeRes*/ = this["newResult"]();
PL$215/*postCodeRes*/["push"]((PL$213/*iName*/ + "++;"));;
PL$215/*postCodeRes*/["push"](PL$210/*iteratorRes*/);;
PL$215/*postCodeRes*/["push"](((((" = " + PL$212/*arrayName*/) + "[") + PL$213/*iName*/) + "];"));;
PL$49/*res*/["push"](this["generateLoop"]({"block": PL$24/*par*/["body"],
"preCondition": PL$214/*conditionRes*/,
"postCode": PL$215/*postCodeRes*/}));;
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
PL$208/*statement*/ = this["newResult"]();;
PL$136/*b*/ = PL$24/*par*/["body"];
PL$136/*b*/["brackets"] = true;;
PL$208/*statement*/["push"](this["blockCreator"](PL$136/*b*/));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$208/*statement*/));;
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
var PL$216/*statements*/;
var PL$108/*condition*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$49/*res*/ = this["newResult"]();
PL$216/*statements*/;
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
var PL$209/*promising*/;
var PL$172/*continuePromise*/;
var PL$217/*continueCode*/;
var PL$208/*statement*/;
var PL$136/*b*/;
var PL$137/*extraPar*/;
;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$49/*res*/ = this["newResult"]();
PL$209/*promising*/ = false;
if((PL$24/*par*/["consequent"] && PL$37/*checkPromising*/(PL$24/*par*/["consequent"]))){
PL$209/*promising*/ = true;;
};
;
if((PL$24/*par*/["alternate"] && PL$37/*checkPromising*/(PL$24/*par*/["alternate"]))){
PL$209/*promising*/ = true;;
};
;
PL$172/*continuePromise*/;
PL$217/*continueCode*/;
if(PL$209/*promising*/){
PL$172/*continuePromise*/ = this["getUniqueName"]();;
PL$49/*res*/["push"]((((("var " + PL$172/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$217/*continueCode*/ = (PL$172/*continuePromise*/ + ".resolve();");;
};
;
PL$49/*res*/["push"]("if(");;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["test"])));;
PL$49/*res*/["push"]("){\n");;
if(! PL$24/*par*/["consequent"]){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["unknownIfStatement"]);;
};
;
PL$208/*statement*/ = this["newResult"]();
PL$136/*b*/;
if((PL$24/*par*/["consequent"]["type"] == "BlockStatement")){
PL$136/*b*/ = PL$24/*par*/["consequent"]["body"];;

}else{
PL$136/*b*/ = [PL$24/*par*/["consequent"]];;
};
;
PL$136/*b*/["brackets"] = false;;
PL$137/*extraPar*/ = {};
if(PL$209/*promising*/){
PL$137/*extraPar*/["postCode"] = this["newResult"](PL$217/*continueCode*/);;
};
;
PL$208/*statement*/["push"](this["blockCreator"](PL$136/*b*/, PL$137/*extraPar*/));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$208/*statement*/));;
if(PL$24/*par*/["alternate"]){
PL$49/*res*/["push"]("\n}else{\n");;
PL$208/*statement*/ = this["newResult"]();;
if((PL$24/*par*/["alternate"]["type"] == "BlockStatement")){
PL$136/*b*/ = PL$24/*par*/["alternate"]["body"];;

}else{
PL$136/*b*/ = [PL$24/*par*/["alternate"]];;
};
;
PL$136/*b*/["brackets"] = false;;
PL$137/*extraPar*/ = {};;
if(PL$209/*promising*/){
PL$137/*extraPar*/["postCode"] = this["newResult"](PL$217/*continueCode*/);;
};
;
PL$208/*statement*/["push"](this["blockCreator"](PL$136/*b*/, PL$137/*extraPar*/));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$208/*statement*/));;

}else{
if(PL$209/*promising*/){
PL$49/*res*/["push"]("\n}else{\n");;
PL$208/*statement*/ = this["newResult"]();;
PL$208/*statement*/["push"](PL$217/*continueCode*/);;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$208/*statement*/));;
};
};
;
PL$49/*res*/["push"]("}");;
if(PL$209/*promising*/){
PL$49/*res*/["push"]((("; " + PL$172/*continuePromise*/) + ".then(function(){"));;
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
var PL$218/*tempPromise*/;
var PL$219/*tempValue*/;
var PL$220/*trueExtraCode*/;
var PL$221/*falseExtraCode*/;
;
PL$49/*res*/ = this["newResult"]();
if((PL$24/*par*/["consequent"]["promising"] || PL$24/*par*/["alternate"]["promising"])){
PL$49/*res*/["makePromising"]();;
PL$218/*tempPromise*/ = this["getUniqueName"]();
PL$219/*tempValue*/ = this["getUniqueName"]();
PL$49/*res*/["addPre"]("var ");;
PL$49/*res*/["addPre"](PL$218/*tempPromise*/);;
PL$49/*res*/["addPre"](((" = " + this["newPromiseStr"]()) + ";\n"));;
PL$49/*res*/["addPre"]("if(");;
PL$49/*res*/["addPre"](this["parseExpression"](PL$24/*par*/["test"]));;
PL$49/*res*/["addPre"]("){");;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
PL$220/*trueExtraCode*/ = this["newResult"]();
PL$220/*trueExtraCode*/["push"](PL$218/*tempPromise*/);;
PL$220/*trueExtraCode*/["push"](".resolve(");;
PL$220/*trueExtraCode*/["push"](this["parseExpression"](PL$24/*par*/["consequent"]));;
PL$220/*trueExtraCode*/["push"](");\n");;
PL$49/*res*/["addPre"](this["makeCompleteStatement"](PL$220/*trueExtraCode*/));;
PL$49/*res*/["addPre"]("}else{");;
PL$221/*falseExtraCode*/ = this["newResult"]();
PL$221/*falseExtraCode*/["push"](PL$218/*tempPromise*/);;
PL$221/*falseExtraCode*/["push"](".resolve(");;
PL$221/*falseExtraCode*/["push"](this["parseExpression"](PL$24/*par*/["alternate"]));;
PL$221/*falseExtraCode*/["push"](");\n");;
PL$49/*res*/["addPre"](this["makeCompleteStatement"](PL$221/*falseExtraCode*/));;
PL$49/*res*/["addPre"]("};\n");;
PL$49/*res*/["addPre"](PL$218/*tempPromise*/);;
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
var PL$209/*promising*/;
var PL$172/*continuePromise*/;
var PL$217/*continueCode*/;
var PL$222/*discriminant*/;
var PL$223/*cases*/;
var PL$208/*statement*/;
var PL$224/*hasDefault*/;
var PL$225/*defaultCase*/;
var PL$226/*isDefault*/;
var PL$227/*defaultCheck*/;
var PL$228/*firstCheck*/;
var PL$229/*hasFirstCheck*/;
var PL$230/*currentCase*/;
var PL$231/*caseFun*/;
var PL$232/*checkFun*/;
var PL$233/*nextCheckCode*/;
var PL$234/*j*/;
var PL$235/*nextCaseCode*/;
var PL$236/*checkCode*/;
var PL$136/*b*/;
var PL$137/*extraPar*/;
var PL$32/*i*/;
;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$49/*res*/ = this["newResult"]();
PL$209/*promising*/ = false;
if((PL$24/*par*/["cases"] && PL$37/*checkPromising*/(PL$24/*par*/["cases"]))){
PL$209/*promising*/ = true;;
};
;
PL$172/*continuePromise*/;
PL$217/*continueCode*/;
if(PL$209/*promising*/){
PL$172/*continuePromise*/ = this["getUniqueName"]();;
PL$49/*res*/["push"]((((("var " + PL$172/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$217/*continueCode*/ = (PL$172/*continuePromise*/ + ".resolve(); return;");;
this["stack"]("breakCode");;
this["breakCode"] = PL$217/*continueCode*/;;
PL$222/*discriminant*/ = this["getUniqueName"]("discriminant");
PL$49/*res*/["push"]((("var " + PL$222/*discriminant*/) + " = "));;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["discriminant"])));;
PL$49/*res*/["push"](";\n");;
PL$223/*cases*/ = [];
PL$208/*statement*/;
PL$224/*hasDefault*/ = false;
PL$225/*defaultCase*/;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$24/*par*/["cases"]["length"]);++PL$32/*i*/){{PL$226/*isDefault*/ = false;
if(! PL$24/*par*/["cases"][PL$32/*i*/]["test"]){
PL$226/*isDefault*/ = true;;
if(! PL$224/*hasDefault*/){
PL$224/*hasDefault*/ = true;;
PL$225/*defaultCase*/ = PL$24/*par*/["cases"][PL$32/*i*/];;
};
;
};
;
PL$223/*cases*/["push"]({"theCase": PL$24/*par*/["cases"][PL$32/*i*/],
"caseFun": this["getUniqueName"](),
"checkFun": this["getUniqueName"](),
"isDefault": PL$226/*isDefault*/});;
}};
;
PL$227/*defaultCheck*/ = PL$217/*continueCode*/;
if(PL$224/*hasDefault*/){
PL$227/*defaultCheck*/ = (PL$225/*defaultCase*/["checkFun"] + "();");;
};
;
PL$228/*firstCheck*/ = PL$217/*continueCode*/;
PL$229/*hasFirstCheck*/ = false;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$223/*cases*/["length"]);++PL$32/*i*/){{PL$230/*currentCase*/ = PL$223/*cases*/[PL$32/*i*/]["theCase"];
PL$231/*caseFun*/ = PL$223/*cases*/[PL$32/*i*/]["caseFun"];
PL$232/*checkFun*/ = PL$223/*cases*/[PL$32/*i*/]["checkFun"];
if(! PL$229/*hasFirstCheck*/){
PL$229/*hasFirstCheck*/ = true;;
PL$228/*firstCheck*/ = (PL$232/*checkFun*/ + "()");;
};
;
PL$233/*nextCheckCode*/ = PL$227/*defaultCheck*/;
for(PL$234/*j*/ = (PL$32/*i*/ + 1);(PL$234/*j*/ < PL$223/*cases*/["length"]);++PL$234/*j*/){{if(! PL$223/*cases*/[PL$234/*j*/]["isDefault"]){
PL$233/*nextCheckCode*/ = (PL$223/*cases*/[PL$234/*j*/]["checkFun"] + "()");;
break;;
};
;
}};
;
PL$235/*nextCaseCode*/ = PL$217/*continueCode*/;
if(PL$223/*cases*/[(PL$32/*i*/ + 1)]){
PL$235/*nextCaseCode*/ = (PL$223/*cases*/[(PL$32/*i*/ + 1)]["caseFun"] + "(); return;");;
};
;
PL$49/*res*/["push"]((("var " + PL$232/*checkFun*/) + " = function(){"));;
PL$236/*checkCode*/ = this["newResult"]();
PL$236/*checkCode*/["push"]((("if(" + PL$222/*discriminant*/) + " === "));;
PL$236/*checkCode*/["push"](this["expectTypeVar"](this["parseExpression"](PL$230/*currentCase*/["test"])));;
PL$236/*checkCode*/["push"]("){");;
PL$236/*checkCode*/["push"](PL$231/*caseFun*/);;
PL$236/*checkCode*/["push"]("(); return; };\n");;
PL$236/*checkCode*/["push"](PL$233/*nextCheckCode*/);;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$236/*checkCode*/));;
PL$49/*res*/["push"]("};\n");;
PL$49/*res*/["push"]((("var " + PL$231/*caseFun*/) + " = function(){"));;
PL$208/*statement*/ = this["newResult"]();;
PL$136/*b*/ = PL$230/*currentCase*/["consequent"];
PL$137/*extraPar*/ = {};
if(PL$209/*promising*/){
PL$137/*extraPar*/["postCode"] = this["newResult"]();;
PL$137/*extraPar*/["postCode"]["push"](PL$235/*nextCaseCode*/);;
};
;
PL$208/*statement*/["push"](this["blockCreator"](PL$136/*b*/, PL$137/*extraPar*/));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$208/*statement*/));;
PL$49/*res*/["push"]("};\n");;
}};
;
PL$49/*res*/["push"](PL$228/*firstCheck*/);;
PL$49/*res*/["push"]((("; " + PL$172/*continuePromise*/) + ".then(function(){"));;
PL$49/*res*/["addPost"]("});");;
this["unstack"]("breakCode");;

}else{
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
PL$49/*res*/["push"]("switch (");;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["discriminant"])));;
PL$49/*res*/["push"]("){\n");;
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$24/*par*/["cases"]["length"]);++PL$32/*i*/){{PL$230/*currentCase*/ = PL$24/*par*/["cases"][PL$32/*i*/];
if((PL$230/*currentCase*/["type"] != "SwitchCase")){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["unknownCase"]);;
};
;
if(PL$230/*currentCase*/["test"]){
PL$49/*res*/["push"]("case ");;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$230/*currentCase*/["test"])));;
PL$49/*res*/["push"](":\n");;

}else{
PL$49/*res*/["push"]("default");;
PL$49/*res*/["push"](":\n");;
};
;
PL$49/*res*/["push"](this["blockCreator"](PL$230/*currentCase*/["consequent"]));;
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
var PL$237/*left*/;
var PL$238/*right*/;
var PL$239/*ltype*/;
var PL$240/*rtype*/;
var PL$218/*tempPromise*/;
var PL$219/*tempValue*/;
var PL$241/*rightExtraCode*/;
;
PL$49/*res*/ = this["newResult"]();
PL$237/*left*/ = this["parseExpression"](PL$24/*par*/["left"]);
PL$238/*right*/ = this["parseExpression"](PL$24/*par*/["right"]);
PL$49/*res*/["setType"]("var");;
if(((PL$24/*par*/["operator"] == "||") && PL$24/*par*/["right"]["promising"])){
PL$239/*ltype*/ = PL$237/*left*/["getType"]();
PL$240/*rtype*/ = PL$238/*right*/["getType"]();
if(((PL$239/*ltype*/ !== this["getType"]("var")) || (PL$240/*rtype*/ !== this["getType"]("var")))){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["notImplemented"]);;
};
;
PL$49/*res*/["makePromising"]();;
PL$218/*tempPromise*/ = this["getUniqueName"]();
PL$219/*tempValue*/ = this["getUniqueName"]();
PL$49/*res*/["addPre"]("var ");;
PL$49/*res*/["addPre"](PL$218/*tempPromise*/);;
PL$49/*res*/["addPre"](((" = " + this["newPromiseStr"]()) + ";\n"));;
PL$49/*res*/["addPre"]("var ");;
PL$49/*res*/["addPre"](PL$219/*tempValue*/);;
PL$49/*res*/["addPre"](" = ");;
PL$49/*res*/["addPre"](PL$237/*left*/);;
PL$49/*res*/["addPre"](";\n");;
PL$49/*res*/["addPre"]("if (");;
PL$49/*res*/["addPre"](PL$219/*tempValue*/);;
PL$49/*res*/["addPre"]("){ ");;
PL$49/*res*/["addPre"](PL$218/*tempPromise*/);;
PL$49/*res*/["addPre"](".resolve(");;
PL$49/*res*/["addPre"](PL$219/*tempValue*/);;
PL$49/*res*/["addPre"](") }else{ ");;
PL$241/*rightExtraCode*/ = this["newResult"]();
PL$241/*rightExtraCode*/["push"](PL$218/*tempPromise*/);;
PL$241/*rightExtraCode*/["push"](".resolve(");;
PL$241/*rightExtraCode*/["push"](PL$238/*right*/);;
PL$241/*rightExtraCode*/["push"](");\n");;
PL$49/*res*/["addPre"](this["makeCompleteStatement"](PL$241/*rightExtraCode*/));;
PL$49/*res*/["addPre"]("};\n");;
PL$49/*res*/["addPre"](PL$218/*tempPromise*/);;
PL$49/*res*/["addPre"](".then(");;
PL$49/*res*/["setPromiseName"](this["getUniqueName"]());;
PL$49/*res*/["addPre"](PL$49/*res*/["getPromiseName"]());;
PL$49/*res*/["addPre"]("){");;
PL$49/*res*/["addPost"]("});");;

}else{
PL$49/*res*/["push"](this["getBinaryExpressionCode"]({"left": PL$237/*left*/,
"right": PL$238/*right*/,
"operator": PL$24/*par*/["operator"],
"errorFun": this["getWarningFun"](PL$24/*par*/)}));;
};
;
return PL$49/*res*/;;
;
});;
this["expMemberExpression"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$242/*base*/;
;
PL$49/*res*/ = this["newResult"]();
PL$242/*base*/ = this["parseExpression"](PL$24/*par*/["object"]);
PL$49/*res*/["pushType"](this["getGetPropertyCode"]({"instance": PL$242/*base*/,
"property": (PL$24/*par*/["computed"] ? undefined : PL$27/*identifierName*/(PL$24/*par*/["property"])),
"propertyValue": (PL$24/*par*/["computed"] ? this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["property"])) : undefined),
"errorFun": this["getWarningFun"](PL$24/*par*/)}));;
return PL$49/*res*/;;
;
});;
this["newInherited"] = (function(){
;
return new PL$243/*InheritedSystem*/(this);;
;
});;
PL$243/*InheritedSystem*/ = (function(PL$24/*par*/){
;
this["instance"] = PL$24/*par*/;;
this["used"] = {};;
;
});
PL$243/*InheritedSystem*/["prototype"] = {"setCurrent": (function(PL$24/*par*/){
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
var PL$244/*isClassObject*/;
var PL$32/*i*/;
var PL$88/*l*/;
var PL$245/*currentMember*/;
var PL$159/*prop*/;
var PL$246/*v*/;
var PL$25/*name*/;
var PL$247/*functionRes*/;
;
PL$49/*res*/ = this["newResult"]();
PL$244/*isClassObject*/ = this["isClassObject"];
this["stack"]("isClassObject");;
this["isClassObject"] = false;;
PL$49/*res*/["push"]("{");;
PL$32/*i*/ = 0;
PL$88/*l*/ = ((PL$24/*par*/["properties"] && PL$24/*par*/["properties"]["length"]) || 0);
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{this["isClassObject"] = false;;
PL$245/*currentMember*/;
if(PL$32/*i*/){
PL$49/*res*/["push"](",\n");;
};
;
PL$159/*prop*/ = PL$24/*par*/["properties"][PL$32/*i*/];
if((PL$159/*prop*/["kind"] == "init")){
PL$245/*currentMember*/ = PL$27/*identifierName*/(PL$159/*prop*/["key"]);;
if(this["inheritedSystem"]){
this["inheritedSystem"]["setCurrent"](PL$245/*currentMember*/);;
};
;
PL$49/*res*/["push"]((PL$14/*stringEncodeStr*/(PL$27/*identifierName*/(PL$159/*prop*/["key"])) + ": "));;
if(PL$159/*prop*/["value"]){
if(PL$35/*checkIsFunction*/(PL$159/*prop*/["value"])){
if(PL$244/*isClassObject*/){
this["isClassObject"] = true;;
};
;
};
;
PL$246/*v*/ = this["parseExpression"](PL$159/*prop*/["value"]);
PL$49/*res*/["push"](this["expectTypeVar"](this["getPassAsTypeCode"]({"value": PL$246/*v*/,
"valueType": PL$246/*v*/["getType"](),
"type": this["getType"]((PL$159/*prop*/["typename"] || "var"), PL$24/*par*/),
"errorFun": this["getWarningFun"](PL$24/*par*/)})));;
};
;

}else{
if((PL$159/*prop*/["kind"] == "function")){
if(PL$244/*isClassObject*/){
this["isClassObject"] = true;;
};
;
PL$25/*name*/ = PL$27/*identifierName*/(PL$159/*prop*/["id"]);
PL$245/*currentMember*/ = PL$25/*name*/;;
if(this["inheritedSystem"]){
this["inheritedSystem"]["setCurrent"](PL$245/*currentMember*/);;
};
;
PL$159/*prop*/["id"] = undefined;;
PL$49/*res*/["push"]((PL$14/*stringEncodeStr*/(PL$25/*name*/) + ": "));;
PL$247/*functionRes*/ = this["expectTypeVar"](this["parseExpression"](PL$159/*prop*/));
PL$49/*res*/["push"](PL$247/*functionRes*/);;

}else{
if((PL$159/*prop*/["kind"] == "block")){

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
var PL$168/*e*/;
;
if((PL$24/*par*/["getType"]() === this["getType"]("var"))){
return PL$24/*par*/;;
};
;
PL$45/*self*/ = this;
PL$168/*e*/ = this["addError"](PL$24/*par*/["getParsed"](), PL$12/*errorMsg*/["expectedVar"]);
PL$18/*classSystem*/["definitionPromise"](PL$24/*par*/["getType"]())["then"]((function(PL$30/*t*/){
;
if((PL$30/*t*/ === PL$45/*self*/["getType"]("var"))){
PL$168/*e*/["resolve"]();;
};
;
;
}));;
return PL$24/*par*/;;
;
});;
this["expVariableStatement"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$248/*declarations*/;
var PL$32/*i*/;
var PL$88/*l*/;
var PL$249/*usedType*/;
var PL$50/*r*/;
;
PL$49/*res*/ = this["newResult"]();
PL$248/*declarations*/ = PL$24/*par*/["declarations"];
if(! PL$248/*declarations*/){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["missingDeclarations"]);;
return "";;
};
;
PL$32/*i*/ = 0;
PL$88/*l*/ = PL$248/*declarations*/["length"];
PL$249/*usedType*/ = this["getType"](PL$27/*identifierName*/(PL$24/*par*/["typename"]), PL$24/*par*/);
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{if((PL$248/*declarations*/[PL$32/*i*/]["type"] == "VariableDeclaration")){
PL$50/*r*/ = this["parseExpression"](PL$248/*declarations*/[PL$32/*i*/]);
PL$49/*res*/["push"](PL$50/*r*/);;

}else{
this["error"](PL$248/*declarations*/[PL$32/*i*/], PL$12/*errorMsg*/["unknownType"]);;
};
;
}};
;
PL$49/*res*/["setType"](PL$249/*usedType*/);;
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
this["getFunctionArgumentType"] = (function(PL$70/*parType*/, PL$250/*parIndex*/, PL$67/*parsed*/){
var PL$251/*retType*/;
var PL$45/*self*/;
;
PL$251/*retType*/ = this["getProvisionalType"](PL$67/*parsed*/);
PL$45/*self*/ = this;
PL$18/*classSystem*/["readyPromise"](PL$70/*parType*/)["then"]((function(PL$70/*parType*/){
;
PL$45/*self*/["resolveProvisional"](PL$251/*retType*/, PL$18/*classSystem*/["getFunctionArgumentType"](PL$70/*parType*/, PL$250/*parIndex*/));;
;
}));;
return PL$251/*retType*/;;
;
});;
this["callClassSystem"] = (function(PL$112/*parFun*/, PL$24/*par*/){
var PL$252/*dynamic*/;
var PL$253/*typeProps*/;
var PL$254/*ignoreProps*/;
var PL$32/*i*/;
var PL$34/*p*/;
var PL$255/*promises*/;
var PL$67/*parsed*/;
var PL$256/*errRes*/;
var PL$45/*self*/;
var PL$257/*resolveType*/;
var PL$30/*t*/;
;
PL$252/*dynamic*/ = false;
PL$253/*typeProps*/ = {"type": true,
"valueType": true,
"leftType": true,
"rightType": true};
PL$254/*ignoreProps*/ = {"errorFun": true,
"parsed": true};
PL$32/*i*/ = 0;
PL$34/*p*/;
PL$255/*promises*/ = [];
PL$67/*parsed*/ = PL$24/*par*/["parsed"];
PL$67/*parsed*/ = (PL$67/*parsed*/ || (PL$24/*par*/["value"] && PL$24/*par*/["value"]["getParsed"]()));;
PL$67/*parsed*/ = (PL$67/*parsed*/ || (PL$24/*par*/["instance"] && PL$24/*par*/["instance"]["getParsed"]()));;
PL$67/*parsed*/ = (PL$67/*parsed*/ || (PL$24/*par*/["left"] && PL$24/*par*/["left"]["getParsed"]()));;
PL$67/*parsed*/ = (PL$67/*parsed*/ || (PL$24/*par*/["right"] && PL$24/*par*/["right"]["getParsed"]()));;
if(! PL$67/*parsed*/){
PL$11/*errorFun*/({}, PL$12/*errorMsg*/["internalParserInfoMissing"]);;
;
};
;
PL$256/*errRes*/ = this["runtimeError"](PL$67/*parsed*/, PL$12/*errorMsg*/["typeLookupFailed"]);
PL$45/*self*/ = this;
PL$257/*resolveType*/ = (function(PL$159/*prop*/, PL$69/*ps*/, PL$258/*parArgument*/){
var PL$49/*res*/;
;
PL$49/*res*/ = new PL$16/*Promise*/();
PL$69/*ps*/["then"]((function(PL$30/*t*/){
;
if(PL$258/*parArgument*/){
PL$24/*par*/["arguments"][PL$159/*prop*/]["type"] = PL$30/*t*/;;

}else{
PL$24/*par*/[PL$159/*prop*/] = PL$30/*t*/;;
};
;
PL$49/*res*/["resolve"]();;
;
}));;
PL$255/*promises*/["push"](PL$49/*res*/);;
return PL$49/*res*/;;
;
});
PL$30/*t*/;
for(PL$34/*p*/ in PL$253/*typeProps*/){PL$30/*t*/ = PL$24/*par*/[PL$34/*p*/];;
if(PL$30/*t*/){
if(PL$30/*t*/["isDynamic"]){
PL$252/*dynamic*/ = true;;

}else{
PL$257/*resolveType*/(PL$34/*p*/, PL$18/*classSystem*/["readyPromise"](PL$30/*t*/));;
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
PL$252/*dynamic*/ = true;;

}else{
PL$257/*resolveType*/(PL$32/*i*/, PL$18/*classSystem*/["readyPromise"](PL$30/*t*/), true);;
};
;
};
;
}};
;
};
;
PL$17/*promiseland*/["all"](PL$255/*promises*/)["then"]((function(){
var PL$34/*p*/;
var PL$49/*res*/;
var PL$259/*propsStarted*/;
var PL$260/*addProperty*/;
var PL$261/*dynRes*/;
var PL$48/*tempRes*/;
;
PL$34/*p*/;
if(PL$252/*dynamic*/){
PL$45/*self*/["common"]["useClassSystem"] = true;;
PL$49/*res*/ = PL$45/*self*/["newResult"]();
PL$49/*res*/["push"]("classSystem.");;
PL$49/*res*/["push"](PL$112/*parFun*/);;
PL$49/*res*/["push"]("({");;
PL$259/*propsStarted*/ = false;
PL$260/*addProperty*/ = (function(PL$34/*p*/){
;
if(PL$259/*propsStarted*/){
PL$49/*res*/["push"](", ");;
};
;
PL$259/*propsStarted*/ = true;;
PL$49/*res*/["push"](PL$14/*stringEncodeStr*/(PL$34/*p*/));;
PL$49/*res*/["push"](":");;
;
});
for(PL$34/*p*/ in PL$24/*par*/){if((! PL$24/*par*/[PL$34/*p*/] || PL$254/*ignoreProps*/[PL$34/*p*/])){

}else{
if(PL$253/*typeProps*/[PL$34/*p*/]){
PL$260/*addProperty*/(PL$34/*p*/);;
PL$49/*res*/["push"](PL$45/*self*/["renderType"](PL$24/*par*/[PL$34/*p*/], PL$67/*parsed*/));;

}else{
PL$260/*addProperty*/(PL$34/*p*/);;
PL$49/*res*/["push"](PL$45/*self*/["makeCompleteStatementDynamic"](PL$24/*par*/[PL$34/*p*/]));;
};
};
;
};
;
PL$49/*res*/["push"]("})");;
PL$261/*dynRes*/ = PL$45/*self*/["newResult"]();
PL$261/*dynRes*/["push"](PL$45/*self*/["makeCompleteStatement"](PL$49/*res*/), undefined, {"dynamic": true});;
PL$256/*errRes*/["resolve"](PL$261/*dynRes*/);;

}else{
PL$48/*tempRes*/ = PL$45/*self*/["newResult"]();
PL$24/*par*/["result"] = PL$48/*tempRes*/;;
PL$256/*errRes*/["resolve"](PL$17/*promiseland*/["classSystem"][PL$112/*parFun*/](PL$24/*par*/));;
};
;
;
}));;
return PL$256/*errRes*/;;
;
});;
this["isTrackedClassConRes"] = (function(PL$70/*parType*/, PL$54/*parParsed*/){
var PL$45/*self*/;
var PL$49/*res*/;
;
PL$45/*self*/ = this;
if(PL$70/*parType*/["isDynamic"]){
PL$49/*res*/ = PL$45/*self*/["newResult"]();
PL$45/*self*/["common"]["useClassSystem"] = true;;
PL$49/*res*/["push"]("classSystem.isTrackedClass");;
PL$49/*res*/["push"]("(");;
PL$49/*res*/["push"](PL$45/*self*/["renderType"](PL$70/*parType*/, PL$54/*parParsed*/));;
PL$49/*res*/["push"](")");;
return PL$49/*res*/;;
};
;
return PL$18/*classSystem*/["isTrackedClass"](PL$70/*parType*/);;
;
});;
this["createConditionalCode"] = (function(PL$262/*parTrueRes*/, PL$263/*parFalseRes*/){
var PL$45/*self*/;
var PL$264/*isDecided*/;
var PL$265/*conditions*/;
var PL$49/*res*/;
;
PL$45/*self*/ = this;
PL$262/*parTrueRes*/ = (PL$262/*parTrueRes*/ || this["newResult"]());;
PL$263/*parFalseRes*/ = (PL$263/*parFalseRes*/ || this["newResult"]());;
PL$264/*isDecided*/ = false;
PL$265/*conditions*/ = [];
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["replace"](PL$263/*parFalseRes*/);;
return {"res": PL$49/*res*/,
"addCondition": (function(PL$107/*parCondition*/){
var PL$266/*ifRes*/;
var PL$32/*i*/;
var PL$261/*dynRes*/;
;
if(PL$264/*isDecided*/){
return;;
};
;
if((PL$107/*parCondition*/ === true)){
PL$264/*isDecided*/ = true;;
PL$49/*res*/["replace"](PL$262/*parTrueRes*/);;
return;;
};
;
if((PL$107/*parCondition*/ === false)){
return;;
};
;
PL$265/*conditions*/["push"](PL$107/*parCondition*/);;
PL$266/*ifRes*/ = PL$45/*self*/["newResult"]();
PL$266/*ifRes*/["push"]("((");;
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$265/*conditions*/["length"]);++PL$32/*i*/){{if(PL$32/*i*/){
PL$266/*ifRes*/["push"](" && ");;
};
;
PL$266/*ifRes*/["push"](PL$265/*conditions*/[PL$32/*i*/]);;
}};
;
PL$266/*ifRes*/["push"](") ? (");;
PL$266/*ifRes*/["push"](PL$45/*self*/["makeCompleteStatementDynamic"](PL$262/*parTrueRes*/));;
PL$266/*ifRes*/["push"](") : (");;
PL$266/*ifRes*/["push"](PL$45/*self*/["makeCompleteStatementDynamic"](PL$263/*parFalseRes*/));;
PL$266/*ifRes*/["push"]("))");;
PL$261/*dynRes*/ = PL$45/*self*/["newResult"]();
PL$261/*dynRes*/["push"](PL$45/*self*/["makeCompleteStatement"](PL$266/*ifRes*/), undefined, {"dynamic": true});;
PL$49/*res*/["replace"](PL$261/*dynRes*/);;
;
})};;
;
});;
this["isTrackedClass"] = (function(PL$70/*parType*/){
;
return PL$18/*classSystem*/["isTrackedClass"](PL$70/*parType*/);;
;
});;
this["createTemporaryTrackedClass"] = (function(PL$70/*parType*/, PL$54/*parParsed*/){
;
if(PL$70/*parType*/["isDynamic"]){
return this["createExtraDynamicType"](PL$70/*parType*/, {"temporaryTracked": true}, PL$54/*parParsed*/);;
};
;
return PL$18/*classSystem*/["_createTemporaryTrackedClass"](PL$70/*parType*/);;
;
});;
this["getConstructorReturnType"] = (function(PL$70/*parType*/, PL$54/*parParsed*/){
;
if(PL$70/*parType*/["isDynamic"]){
return this["createExtraDynamicType"](PL$70/*parType*/, {"constructorReturn": true}, PL$54/*parParsed*/);;
};
;
return PL$18/*classSystem*/["getConstructorReturnType"](PL$70/*parType*/);;
;
});;
this["parseAsType"] = (function(PL$70/*parType*/, PL$24/*par*/){
var PL$180/*value*/;
;
PL$180/*value*/ = this["parseExpression"](PL$24/*par*/);
return this["getPassAsTypeCode"]({"value": PL$180/*value*/,
"valueType": PL$180/*value*/["getType"](),
"type": PL$70/*parType*/,
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
var PL$180/*value*/;
var PL$267/*valueType*/;
;
PL$49/*res*/ = this["newResult"]();
PL$180/*value*/ = PL$24/*par*/["value"];
PL$267/*valueType*/ = PL$180/*value*/["getType"]();
PL$49/*res*/["push"](this["callClassSystem"]("getDestroyTemporaryClassCode", {"value": PL$180/*value*/,
"valueType": PL$180/*value*/["getType"](),
"errorFun": PL$24/*par*/["errorFun"],
"noValueRequired": (PL$24/*par*/ ? PL$24/*par*/["noValueRequired"] : undefined)}));;
PL$49/*res*/["setType"](this["getClassFromTemporaryTracked"](PL$267/*valueType*/, PL$180/*value*/["getParsed"]()));;
return PL$49/*res*/;;
;
});;
this["getClassFromTemporaryTracked"] = (function(PL$70/*parType*/, PL$54/*parParsed*/){
var PL$45/*self*/;
var PL$268/*resType*/;
;
PL$45/*self*/ = this;
if(PL$70/*parType*/["isDynamic"]){
return this["createExtraDynamicType"](PL$70/*parType*/, {"temporaryTrackedResolved": true}, PL$54/*parParsed*/);;
};
;
PL$268/*resType*/ = this["getProvisionalType"](PL$54/*parParsed*/, PL$54/*parParsed*/);
PL$18/*classSystem*/["definitionPromise"](PL$70/*parType*/)["then"]((function(PL$269/*parDefinedType*/){
;
PL$45/*self*/["resolveProvisional"](PL$268/*resType*/, PL$18/*classSystem*/["getClassFromTemporaryTracked"](PL$269/*parDefinedType*/));;
;
}));;
return PL$268/*resType*/;;
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
this["getClassFromPromiseOf"] = (function(PL$70/*parType*/){
;
return PL$18/*classSystem*/["getClassFromPromiseOf"](PL$70/*parType*/);;
;
});;
this["getPropertyType"] = (function(PL$24/*par*/, PL$54/*parParsed*/){
var PL$68/*type*/;
var PL$45/*self*/;
var PL$50/*r*/;
;
PL$68/*type*/ = PL$24/*par*/["type"];
PL$45/*self*/ = this;
if(PL$68/*type*/["isDynamic"]){
return this["createExtraDynamicType"](PL$68/*type*/, {"property": PL$24/*par*/["property"]}, PL$54/*parParsed*/);;

}else{
PL$50/*r*/ = this["getProvisionalType"](PL$54/*parParsed*/);
PL$18/*classSystem*/["readyPromise"](PL$24/*par*/["type"])["then"]((function(PL$155/*resultType*/){
;
PL$45/*self*/["resolveProvisional"](PL$50/*r*/, PL$17/*promiseland*/["classSystem"]["getPropertyType"]({"type": PL$155/*resultType*/,
"property": PL$24/*par*/["property"]}));;
;
}));;
return PL$50/*r*/;;
};
;
;
});;
this["getConstructorType"] = (function(PL$24/*par*/, PL$54/*parParsed*/){
var PL$68/*type*/;
var PL$45/*self*/;
var PL$50/*r*/;
;
PL$68/*type*/ = PL$24/*par*/["type"];
PL$45/*self*/ = this;
if(PL$68/*type*/["isDynamic"]){
return this["createExtraDynamicType"](PL$68/*type*/, {"property": "constructor"}, PL$54/*parParsed*/);;

}else{
PL$50/*r*/ = this["getProvisionalType"](PL$54/*parParsed*/);
PL$18/*classSystem*/["readyPromise"](PL$24/*par*/["type"])["then"]((function(PL$155/*resultType*/){
;
try
{PL$45/*self*/["resolveProvisional"](PL$50/*r*/, PL$17/*promiseland*/["classSystem"]["getConstructorType"]({"type": PL$155/*resultType*/}));;
}catch(PL$168/*e*/){PL$45/*self*/["error"](PL$54/*parParsed*/, PL$168/*e*/);;
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
var PL$242/*base*/;
var PL$39/*property*/;
var PL$270/*propertyValue*/;
;
PL$49/*res*/ = this["newResult"]();
if((PL$24/*par*/["left"]["type"] == "MemberExpression")){
PL$242/*base*/ = this["parseExpression"](PL$24/*par*/["left"]["object"]);
PL$39/*property*/;
PL$270/*propertyValue*/;
if(PL$24/*par*/["left"]["computed"]){
PL$270/*propertyValue*/ = this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["left"]["property"]));;

}else{
PL$39/*property*/ = PL$27/*identifierName*/(PL$24/*par*/["left"]["property"]);;
};
;
PL$49/*res*/["pushType"](this["getSetPropertyCode"]({"instance": PL$242/*base*/,
"propertyValue": PL$270/*propertyValue*/,
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
var PL$271/*calleeRes*/;
var PL$272/*args*/;
var PL$273/*argType*/;
var PL$274/*argRes*/;
;
PL$49/*res*/ = this["newResult"]();
PL$32/*i*/ = 0;
PL$88/*l*/;
PL$271/*calleeRes*/ = this["parseExpression"](PL$24/*par*/["callee"]);
PL$272/*args*/ = [];
if(PL$24/*par*/["arguments"]){
PL$88/*l*/ = PL$24/*par*/["arguments"]["length"];;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{PL$273/*argType*/ = this["getFunctionArgumentType"](PL$271/*calleeRes*/["getType"](), PL$32/*i*/, PL$24/*par*/["arguments"][PL$32/*i*/]);
PL$274/*argRes*/ = this["parseExpression"](PL$24/*par*/["arguments"][PL$32/*i*/]);
PL$274/*argRes*/ = this["getPassAsTypeCode"]({"value": PL$274/*argRes*/,
"valueType": PL$274/*argRes*/["getType"](),
"type": PL$273/*argType*/,
"errorFun": this["getWarningFun"](PL$24/*par*/)});;
PL$272/*args*/["push"]({"type": PL$274/*argRes*/["getType"](),
"value": PL$274/*argRes*/});;
}};
;
};
;
PL$49/*res*/["push"](this["callClassSystem"]("getCallCode", {"type": PL$271/*calleeRes*/["getType"](),
"instance": PL$271/*calleeRes*/,
"arguments": PL$272/*args*/}));;
PL$49/*res*/["setType"](this["getFunctionReturnType"](PL$271/*calleeRes*/["getType"](), PL$24/*par*/));;
return PL$49/*res*/;;
;
});;
this["getFunctionReturnType"] = (function(PL$70/*parType*/, PL$67/*parsed*/){
var PL$30/*t*/;
var PL$45/*self*/;
;
PL$30/*t*/ = this["getProvisionalType"](PL$67/*parsed*/);
PL$45/*self*/ = this;
PL$18/*classSystem*/["readyPromise"](PL$70/*parType*/)["then"]((function(PL$275/*newt*/){
;
PL$45/*self*/["resolveProvisional"](PL$30/*t*/, PL$18/*classSystem*/["getFunctionReturnType"](PL$275/*newt*/, PL$67/*parsed*/));;
;
}));;
return PL$30/*t*/;;
;
});;
this["getFunctionArgumentCount"] = (function(PL$70/*parType*/, PL$67/*parsed*/){
;
return PL$18/*classSystem*/["getFunctionArgumentCount"](PL$70/*parType*/);;
;
});;
this["isVar"] = (function(PL$70/*parType*/){
;
if((typeof PL$70/*parType*/ == "function")){
return PL$18/*classSystem*/["isVar"](PL$70/*parType*/);;
};
;
return false;;
;
});;
this["expInheritedExpression"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$32/*i*/;
var PL$88/*l*/;
var PL$272/*args*/;
var PL$274/*argRes*/;
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
PL$272/*args*/ = [];
if(PL$24/*par*/["arguments"]){
PL$49/*res*/["push"](", [");;
PL$88/*l*/ = PL$24/*par*/["arguments"]["length"];;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{if(PL$32/*i*/){
PL$49/*res*/["push"](", ");;
};
;
PL$274/*argRes*/ = this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["arguments"][PL$32/*i*/]));
PL$49/*res*/["push"](PL$274/*argRes*/);;
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
this["expReturnStatement"] = (function(PL$24/*par*/, PL$276/*closingFun*/){
var PL$49/*res*/;
var PL$116/*valueRes*/;
var PL$277/*passAsType*/;
var PL$246/*v*/;
;
if(this["preventreturn"]){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["returnNotAllowedHere"]);;
};
;
PL$49/*res*/ = this["newResult"]();
PL$116/*valueRes*/;
if(PL$24/*par*/["argument"]){
PL$116/*valueRes*/ = this["newResult"]();;
PL$277/*passAsType*/ = this["getReturnType"]();
if(this["promising"]){
PL$277/*passAsType*/ = this["getClassFromPromiseOf"](PL$277/*passAsType*/);;
};
;
PL$277/*passAsType*/ = this["createTemporaryTrackedClass"](PL$277/*passAsType*/);;
PL$246/*v*/ = this["parseExpression"](PL$24/*par*/["argument"]);
PL$116/*valueRes*/["push"](this["getPassAsTypeCode"]({"value": PL$246/*v*/,
"valueType": PL$246/*v*/["getType"](),
"type": PL$277/*passAsType*/,
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
PL$278/*loaderStr*/ = (function(PL$24/*par*/){
var PL$279/*resStr*/;
var PL$32/*i*/;
var PL$280/*modules*/;
var PL$94/*extraModules*/;
var PL$281/*extraModulesAr*/;
;
PL$279/*resStr*/ = "";
PL$32/*i*/;
PL$279/*resStr*/ += "(function(){\n  var defineFun;\n  var requireFun;\n  \n  if (typeof exports == \"object\" && typeof module == \"object\"){ // CommonJS\n    requireFun = function(modulesAr, callback, errBack){\n      try{\n        var i = 0;\n        var l = modulesAr.length;\n        var args = [];\n        for (i; i < l; ++i){\n          args.push(require(modulesAr[i]));\n        };\n      }catch(e){\n        errBack(e);\n        return;\n      };\n      callback.apply(callback, args);\n    };\n    defineFun = function(requireAr, callback){\n      requireFun(requireAr, function(){\n        module.exports = callback.apply(callback, arguments);\n      });\n    };\n    \n  }else if (typeof define == \"function\" && define.amd){ // AMD\n    var _define = define;\n    requireFun = require;\n    \n    defineFun = function(par1, par2){\n      if (par1 instanceof Array){\n        par1.unshift(\"require\");\n      }else{\n        par2 = par1;\n        par1 = [\"require\"];\n      };\n      _define(par1, function(){\n        requireFun = arguments[0];\n        var args = [];\n        for (var i = 1; i < arguments.length; ++i){\n          args.push(arguments[i]);\n        };\n        return par2.apply(par2, args);\n      });\n    };\n    requireFun = require;\n    \n  }else{ // Plain browser env\n    alert(\"not working out!\");\n    \n  };\n  ";;
PL$280/*modules*/ = [];
if(! PL$24/*par*/["promiseLandModule"]){
PL$280/*modules*/["push"]({"varName": "promiseland",
"moduleName": "promiseland"});;
};
;
PL$94/*extraModules*/ = PL$24/*par*/["extraModules"];
if(PL$94/*extraModules*/){
PL$281/*extraModulesAr*/ = PL$94/*extraModules*/["getArray"]();
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$281/*extraModulesAr*/["length"]);++PL$32/*i*/){{PL$280/*modules*/["push"]({"varName": PL$24/*par*/["variableNames"]["get"](PL$281/*extraModulesAr*/[PL$32/*i*/]["key"]),
"moduleName": PL$281/*extraModulesAr*/[PL$32/*i*/]["value"]});;
}};
;
};
;
PL$279/*resStr*/ += "defineFun([";;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$280/*modules*/["length"]);++PL$32/*i*/){{if(PL$32/*i*/){
PL$279/*resStr*/ += ", ";;
};
;
PL$279/*resStr*/ += PL$14/*stringEncodeStr*/(PL$280/*modules*/[PL$32/*i*/]["moduleName"]);;
}};
;
PL$279/*resStr*/ += "], function(";;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$280/*modules*/["length"]);++PL$32/*i*/){{if(PL$32/*i*/){
PL$279/*resStr*/ += ", ";;
};
;
PL$279/*resStr*/ += PL$280/*modules*/[PL$32/*i*/]["varName"];;
}};
;
PL$279/*resStr*/ += "){\n";;
if(PL$24/*par*/["promiseLandModule"]){
PL$279/*resStr*/ += "var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;\n";;

}else{
PL$279/*resStr*/ += "var __require = requireFun;\n";;
};
;
PL$279/*resStr*/ += "\n";;
if((PL$24/*par*/["usePromise"] || PL$24/*par*/["useRequire"])){
PL$279/*resStr*/ += "var __Promise = promiseland.Promise;\n";;
PL$279/*resStr*/ += "var Promise = promiseland.Promise;\n";;
};
;
if(PL$24/*par*/["useClassSystem"]){
PL$279/*resStr*/ += "var classSystem = promiseland.classSystem;\n";;
};
;
if(PL$24/*par*/["useRequire"]){
PL$279/*resStr*/ += "var __requireFun = function(parModule){\n      var returnPromise = new __Promise();\n      try{__require([parModule], function(m){\n        if (promiseland.isPromiseLandPromisingModule(m)){\n          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});\n        }else{\n          returnPromise.resolve(m);\n        };\n        }, function(err){ returnPromise.reject(err); });\n      }catch(e){ returnPromise.reject(e); };\n      return returnPromise.promise;};\n    ";;
};
;
return PL$279/*resStr*/;;
;
});
PL$282/*promiselandRequireStr*/ = (function(){
;
return "";;
;
});
PL$283/*callbackRequireStr*/ = (function(){
;
return "var Callback = promiseland.Callback;\n";;
;
});
PL$284/*loaderEndStr*/ = (function(PL$24/*par*/){
;
if(PL$24/*par*/["promiseLandModule"]){
return "}; return function(){ return __execute.apply(null, arguments); } });\n})();";;

}else{
return "});\n})();";;
};
;
;
});
PL$285/*createHeader*/ = (function(PL$24/*par*/){
var PL$279/*resStr*/;
var PL$286/*loaderParam*/;
;
if(PL$15/*_pureCode*/){
return "";;
};
;
PL$279/*resStr*/ = "";
PL$286/*loaderParam*/ = {"usePromise": PL$24/*par*/["usePromise"],
"useRequire": PL$24/*par*/["useRequire"],
"useClassSystem": PL$24/*par*/["useClassSystem"],
"extraModules": PL$24/*par*/["extraModules"],
"variableNames": PL$24/*par*/["variableNames"]};
if(PL$24/*par*/["makePromiseLandModule"]){
PL$286/*loaderParam*/["promiseLandModule"] = true;;
};
;
PL$279/*resStr*/ += PL$278/*loaderStr*/(PL$286/*loaderParam*/);;
PL$279/*resStr*/ += PL$282/*promiselandRequireStr*/();;
if(PL$24/*par*/["useCallback"]){
PL$279/*resStr*/ += PL$283/*callbackRequireStr*/();;
};
;
PL$279/*resStr*/ += (((("if (promiseland._hasModule({ hashStr: \"" + PL$24/*par*/["hashStr"]) + "\" })){ return promiseland._getModule(\"") + PL$24/*par*/["hashStr"]) + "\"); };\n");;
return PL$279/*resStr*/;;
;
});
PL$287/*createFooter*/ = (function(PL$24/*par*/){
var PL$279/*resStr*/;
;
if(PL$15/*_pureCode*/){
return "";;
};
;
PL$279/*resStr*/ = "";
if(PL$24/*par*/["makePromiseLandModule"]){
PL$279/*resStr*/ += PL$284/*loaderEndStr*/({"promiseLandModule": true});;

}else{
PL$279/*resStr*/ += PL$284/*loaderEndStr*/({});;
};
;
return PL$279/*resStr*/;;
;
});
PL$288/*parser*/ = {"parse": (function(PL$289/*promiselandCodeStr*/){
var PL$34/*p*/;
var PL$288/*parser*/;
var PL$290/*hashStr*/;
var PL$67/*parsed*/;
var PL$279/*resStr*/;
var PL$182/*cp*/;
var PL$49/*res*/;
var PL$95/*parsingConfig*/;
var PL$291/*makePromiseLandModule*/;
var PL$94/*extraModules*/;
var PL$292/*variableNames*/;
var PL$293/*result*/;
var PL$294/*programStr*/;
var PL$295/*mainPartStr*/;
;
PL$34/*p*/ = new PL$17/*promiseland*/["Promise"]();
PL$288/*parser*/ = PL$7/*_parser*/;
PL$290/*hashStr*/ = PL$5/*md5*/(PL$289/*promiselandCodeStr*/);
PL$67/*parsed*/ = PL$288/*parser*/["parse"](PL$289/*promiselandCodeStr*/);
PL$279/*resStr*/ = "";
PL$182/*cp*/;
PL$49/*res*/ = {};
if((PL$67/*parsed*/["length"] === undefined)){
if((PL$67/*parsed*/["type"] == "Program")){
PL$95/*parsingConfig*/ = PL$67/*parsed*/["config"];
PL$182/*cp*/ = new PL$44/*CodeParser*/({"toParse": PL$67/*parsed*/,
"hashStr": PL$290/*hashStr*/,
"parsingConfig": PL$95/*parsingConfig*/});;
PL$291/*makePromiseLandModule*/ = false;
PL$94/*extraModules*/ = PL$182/*cp*/["common"]["extraModules"];
PL$292/*variableNames*/ = PL$182/*cp*/["common"]["variableNames"];
if(PL$95/*parsingConfig*/){
PL$291/*makePromiseLandModule*/ = PL$182/*cp*/["getTemplateProperty"](PL$95/*parsingConfig*/, "__promiseLandModule", "Literal");;
if((PL$291/*makePromiseLandModule*/ && (PL$291/*makePromiseLandModule*/["value"] === true))){
PL$291/*makePromiseLandModule*/ = true;;

}else{
PL$291/*makePromiseLandModule*/ = false;;
};
;
};
;
PL$293/*result*/ = PL$182/*cp*/["getResult"]();
PL$294/*programStr*/ = ((PL$293/*result*/["getPreCodeStr"]() + PL$293/*result*/["getCodeStr"]()) + PL$293/*result*/["getPostCodeStr"]());
PL$49/*res*/["warnings"] = PL$182/*cp*/["getWarnings"]();;
PL$49/*res*/["errors"] = PL$182/*cp*/["getErrors"]();;
PL$295/*mainPartStr*/ = "";
if(PL$15/*_pureCode*/){
PL$279/*resStr*/ = PL$294/*programStr*/;;

}else{
if(PL$182/*cp*/["programPromiseStr"]){
PL$295/*mainPartStr*/ += (((("var " + PL$182/*cp*/["programPromiseStr"]) + " = ") + PL$182/*cp*/["newPromiseStr"]()) + ";\n");;
PL$295/*mainPartStr*/ += (((("promiseland._registerModule({ hashStr: \"" + PL$290/*hashStr*/) + "\", \"module\": ") + PL$182/*cp*/["programPromiseStr"]) + ", promising: true });\n");;
PL$295/*mainPartStr*/ += PL$294/*programStr*/;;
PL$295/*mainPartStr*/ += (";\nreturn " + PL$182/*cp*/["programPromiseStr"]);;

}else{
PL$295/*mainPartStr*/ += PL$294/*programStr*/;;
PL$295/*mainPartStr*/ += (("return " + PL$182/*cp*/["resultNameStr"]) + ";\n");;
};
;
PL$279/*resStr*/ += PL$285/*createHeader*/({"makePromiseLandModule": PL$291/*makePromiseLandModule*/,
"extraModules": PL$94/*extraModules*/,
"variableNames": PL$292/*variableNames*/,
"hashStr": PL$290/*hashStr*/,
"usePromise": PL$182/*cp*/["common"]["usePromise"],
"useRequire": PL$182/*cp*/["common"]["useRequire"],
"useCallback": PL$182/*cp*/["common"]["useCallback"],
"useClassSystem": PL$182/*cp*/["common"]["useClassSystem"]});;
PL$279/*resStr*/ += PL$295/*mainPartStr*/;;
PL$279/*resStr*/ += PL$287/*createFooter*/({"makePromiseLandModule": PL$291/*makePromiseLandModule*/});;
};
;

}else{
this["error"](PL$67/*parsed*/, PL$12/*errorMsg*/["unknownType"]);;
};
;

}else{
PL$11/*errorFun*/(PL$67/*parsed*/, PL$12/*errorMsg*/["severalProgramElements"]);;
};
;
if(! (PL$49/*res*/["errors"] && PL$49/*res*/["errors"]["length"])){
PL$49/*res*/["javascript"] = PL$279/*resStr*/;;
};
;
PL$34/*p*/["resolve"](PL$49/*res*/);;
return PL$34/*p*/["promise"];;
;
})};
PL$1.resolve(PL$288/*parser*/); return;;
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