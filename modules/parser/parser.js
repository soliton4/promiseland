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
    if (promiseland._hasModule({ hashStr: "38ffa0887253f1add24ab2e9d0ee8a64" })){ return promiseland._getModule("38ffa0887253f1add24ab2e9d0ee8a64"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "38ffa0887253f1add24ab2e9d0ee8a64", "module": PL$1, promising: true });
var PL$17/*promiseland*/;try{PL$17/*promiseland*/ = promiseland;}catch(e){};
var PL$167/*JSON*/;try{PL$167/*JSON*/ = JSON;}catch(e){};
var PL$180/*Array*/;try{PL$180/*Array*/ = Array;}catch(e){};
var PL$181/*console*/;try{PL$181/*console*/ = console;}catch(e){};
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
var PL$280/*loaderStr*/;
var PL$284/*promiselandRequireStr*/;
var PL$285/*callbackRequireStr*/;
var PL$286/*loaderEndStr*/;
var PL$287/*createHeader*/;
var PL$289/*createFooter*/;
var PL$290/*parser*/;
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
var PL$245/*InheritedSystem*/;
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
var PL$97/*nameProperty*/;
var PL$98/*functionStatement*/;
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
PL$97/*nameProperty*/ = this["getTemplateProperty"](PL$95/*parsingConfig*/, "name", "Literal");
if(PL$97/*nameProperty*/){
this["common"]["name"] = PL$97/*nameProperty*/;;
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
PL$98/*functionStatement*/ = this["_parseFunction"](PL$24/*par*/, {"promiseName": this["programPromiseStr"],
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
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$98/*functionStatement*/));;
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
this["getTemplateProperty"] = (function(PL$99/*parTemplate*/, PL$100/*parProperty*/, PL$101/*mandatoryType*/){
var PL$32/*i*/;
var PL$34/*p*/;
;
PL$32/*i*/ = 0;
for(PL$32/*i*/;(PL$32/*i*/ < PL$99/*parTemplate*/["properties"]["length"]);++PL$32/*i*/){{PL$34/*p*/ = PL$99/*parTemplate*/["properties"][PL$32/*i*/];
if(((PL$34/*p*/["kind"] == "init") && (PL$27/*identifierName*/(PL$34/*p*/["key"]) == PL$100/*parProperty*/))){
if(PL$101/*mandatoryType*/){
if((PL$34/*p*/["value"]["type"] != PL$101/*mandatoryType*/)){
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
this["getTemplateRequireProperty"] = (function(PL$99/*parTemplate*/){
var PL$32/*i*/;
var PL$49/*res*/;
var PL$34/*p*/;
var PL$102/*key*/;
;
PL$32/*i*/ = 0;
PL$49/*res*/ = new PL$22/*Map*/();
for(PL$32/*i*/;(PL$32/*i*/ < PL$99/*parTemplate*/["properties"]["length"]);++PL$32/*i*/){{PL$34/*p*/ = PL$99/*parTemplate*/["properties"][PL$32/*i*/];
if((PL$34/*p*/["kind"] == "init")){
PL$102/*key*/ = PL$27/*identifierName*/(PL$34/*p*/["key"]);
if((PL$34/*p*/["value"]["type"] != "Literal")){
this["error"](PL$34/*p*/["value"], PL$12/*errorMsg*/["templateSyntaxError"]);;
};
;
PL$49/*res*/["set"](PL$102/*key*/, PL$34/*p*/["value"]["value"]);;
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
var PL$103/*isTyped*/;
var PL$104/*functionTypeParam*/;
var PL$88/*l*/;
var PL$105/*tempTypename*/;
;
PL$103/*isTyped*/ = false;
PL$104/*functionTypeParam*/ = {"return": this["getType"]("var"),
"arguments": []};
if(PL$24/*par*/["returnTypename"]){
PL$103/*isTyped*/ = true;;
PL$104/*functionTypeParam*/["return"] = this["getType"](PL$24/*par*/["returnTypename"]);;
};
;
if((PL$24/*par*/["params"] && PL$24/*par*/["params"]["length"])){
PL$32/*i*/ = 0;;
PL$88/*l*/ = PL$24/*par*/["params"]["length"];
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{PL$105/*tempTypename*/ = PL$27/*identifierName*/((PL$24/*par*/["params"][PL$32/*i*/]["typename"] || "var"));
PL$104/*functionTypeParam*/["arguments"]["push"](this["getType"](PL$105/*tempTypename*/, PL$24/*par*/));;
if((PL$105/*tempTypename*/ != "var")){
PL$103/*isTyped*/ = true;;
};
;
}};
;
};
;
if(PL$103/*isTyped*/){
return this["createFunctionType"](PL$104/*functionTypeParam*/);;
};
;
return this["getType"]("var");;
;
});;
this["createFunctionType"] = (function(PL$24/*par*/){
var PL$106/*isDynamic*/;
var PL$32/*i*/;
;
PL$106/*isDynamic*/ = false;
if(PL$24/*par*/["return"]["isDynamic"]){
PL$106/*isDynamic*/ = true;;
};
;
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$24/*par*/["arguments"]["length"]);++PL$32/*i*/){{if(PL$24/*par*/["arguments"][PL$32/*i*/]["isDynamic"]){
PL$106/*isDynamic*/ = true;;
};
;
}};
;
if(PL$106/*isDynamic*/){
debugger;

}else{
return PL$18/*classSystem*/["createFunctionType"](PL$24/*par*/);;
};
;
;
});;
this["addBeforeReturn"] = (function(PL$107/*parRes*/, PL$108/*parCondition*/){
var PL$109/*condition*/;
var PL$110/*conditional*/;
var PL$111/*frontRes*/;
var PL$112/*endRes*/;
;
PL$109/*condition*/ = PL$108/*parCondition*/;
if((PL$108/*parCondition*/ === undefined)){
PL$109/*condition*/ = true;;
};
;
PL$110/*conditional*/ = this["createConditionalCode"](PL$107/*parRes*/);
PL$110/*conditional*/["addCondition"](PL$109/*condition*/);;
this["runBeforeReturnRes"]["push"](PL$110/*conditional*/["res"]);;
if(! this["beforeReturnExists"]){
this["beforeReturnExists"] = true;;
PL$111/*frontRes*/ = this["newResult"]();
PL$112/*endRes*/ = this["newResult"]();
this["beforeReturnFrontConditional"] = this["createConditionalCode"](PL$111/*frontRes*/);;
this["beforeReturnEndConditional"] = this["createConditionalCode"](PL$112/*endRes*/);;
this["beforeReturnExistsPs"]["resolve"](this["runBeforeReturnRes"]);;
if(! this["promising"]){
PL$111/*frontRes*/["push"]("try{");;
this["additionalCodeFrontRes"]["push"](this["beforeReturnFrontConditional"]["res"]);;
PL$112/*endRes*/["push"]("}catch(e){");;
PL$112/*endRes*/["push"](this["runBeforeReturnRes"]);;
PL$112/*endRes*/["push"]("throw e};");;
this["additionalCodeEndRes"]["push"](this["beforeReturnEndConditional"]["res"]);;
};
;
};
;
this["beforeReturnFrontConditional"]["addCondition"](PL$109/*condition*/);;
this["beforeReturnEndConditional"]["addCondition"](PL$109/*condition*/);;
this["addBeforeReturnCondition"](PL$109/*condition*/);;
;
});;
this["beforeReturnConditions"] = [];;
this["addBeforeReturnCondition"] = (function(PL$108/*parCondition*/){
var PL$32/*i*/;
;
this["beforeReturnConditions"]["push"](PL$108/*parCondition*/);;
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < this["beforeReturnConditionFuns"]["length"]);++PL$32/*i*/){{this["beforeReturnConditionFuns"][PL$32/*i*/](PL$108/*parCondition*/);;
}};
;
;
});;
this["beforeReturnConditionFuns"] = [];;
this["addBeforeReturnConditionFun"] = (function(PL$113/*parFun*/){
var PL$32/*i*/;
;
this["beforeReturnConditionFuns"]["push"](PL$113/*parFun*/);;
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < this["beforeReturnConditions"]["length"]);++PL$32/*i*/){{PL$113/*parFun*/(this["beforeReturnConditions"][PL$32/*i*/]);;
}};
;
;
});;
this["getReturnCode"] = (function(PL$24/*par*/){
var PL$45/*self*/;
var PL$49/*res*/;
var PL$114/*falseRes*/;
var PL$115/*beforeReturnCode*/;
var PL$116/*newRes*/;
var PL$117/*valueRes*/;
var PL$118/*trueRes*/;
var PL$110/*conditional*/;
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
PL$114/*falseRes*/ = PL$49/*res*/;
PL$115/*beforeReturnCode*/ = this["runBeforeReturnRes"];
PL$116/*newRes*/ = PL$45/*self*/["newResult"]();
PL$117/*valueRes*/ = PL$45/*self*/["newResult"]();
if(PL$24/*par*/["value"]){
PL$117/*valueRes*/["push"]("(function(ret){ ");;
PL$117/*valueRes*/["push"](PL$115/*beforeReturnCode*/);;
PL$117/*valueRes*/["push"]("return ret; })(");;
PL$117/*valueRes*/["push"](PL$24/*par*/["value"]);;
PL$117/*valueRes*/["push"](")");;
};
;
if(PL$45/*self*/["promising"]){
if(PL$24/*par*/["value"]){
PL$116/*newRes*/["push"]((PL$45/*self*/["returnPromise"] + ".resolve("));;
PL$116/*newRes*/["push"](PL$117/*valueRes*/);;
PL$116/*newRes*/["push"]("); return;");;

}else{
PL$116/*newRes*/["push"](PL$115/*beforeReturnCode*/);;
PL$116/*newRes*/["push"]((PL$45/*self*/["returnPromise"] + ".resolve("));;
PL$116/*newRes*/["push"]("); return;");;
};
;

}else{
if(PL$24/*par*/["value"]){
PL$116/*newRes*/["push"]("return ");;
PL$116/*newRes*/["push"](PL$117/*valueRes*/);;
PL$116/*newRes*/["push"](";");;

}else{
PL$116/*newRes*/["push"](PL$115/*beforeReturnCode*/);;
if(PL$24/*par*/["return"]){
PL$116/*newRes*/["push"]("return;");;
};
;
};
;
};
;
PL$118/*trueRes*/ = PL$116/*newRes*/;
PL$110/*conditional*/ = this["createConditionalCode"](PL$118/*trueRes*/, PL$114/*falseRes*/);
this["addBeforeReturnConditionFun"]((function(PL$119/*con*/){
;
PL$110/*conditional*/["addCondition"](PL$119/*con*/);;
;
}));;
return PL$110/*conditional*/["res"];;
;
});;
this["_parseFunction"] = (function(PL$24/*par*/, PL$120/*parJsn*/){
var PL$121/*parGivenPromiseNameStr*/;
var PL$122/*noUntrack*/;
var PL$123/*hasFrameInfo*/;
var PL$124/*runRemote*/;
var PL$125/*runExclusive*/;
var PL$32/*i*/;
var PL$126/*typename*/;
var PL$54/*parParsed*/;
var PL$127/*funClosure*/;
var PL$45/*self*/;
var PL$128/*hasName*/;
var PL$129/*nameStr*/;
var PL$130/*templateTypesAr*/;
var PL$131/*templateTypes*/;
var PL$132/*typeVarInit*/;
var PL$34/*p*/;
var PL$133/*extraTypesRes*/;
var PL$49/*res*/;
var PL$134/*funRes*/;
var PL$88/*l*/;
var PL$135/*classesRes*/;
var PL$136/*addFront*/;
var PL$137/*b*/;
var PL$138/*extraPar*/;
var PL$139/*block*/;
var PL$140/*localVariablesAr*/;
var PL$141/*varname*/;
var PL$68/*type*/;
var PL$142/*completeFun*/;
var PL$143/*returnTypePromiseCheck*/;
var PL$144/*handleExtras*/;
var PL$145/*dt*/;
var PL$146/*thisFunType*/;
var PL$147/*uniqueNameStr*/;
var PL$148/*remoteClosure*/;
var PL$149/*finalResult*/;
;
PL$120/*parJsn*/ = (PL$120/*parJsn*/ || {});;
PL$121/*parGivenPromiseNameStr*/ = PL$120/*parJsn*/["promiseName"];
PL$122/*noUntrack*/ = PL$120/*parJsn*/["noUntrack"];
PL$123/*hasFrameInfo*/ = false;
PL$124/*runRemote*/ = false;
PL$125/*runExclusive*/ = false;
PL$32/*i*/ = 0;
PL$126/*typename*/;
PL$54/*parParsed*/ = PL$24/*par*/;
PL$127/*funClosure*/;
PL$45/*self*/ = this;
PL$128/*hasName*/ = false;
PL$129/*nameStr*/;
if(PL$24/*par*/["id"]){
PL$129/*nameStr*/ = PL$27/*identifierName*/(PL$24/*par*/["id"]);;
PL$128/*hasName*/ = true;;
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
PL$123/*hasFrameInfo*/ = true;;
if((PL$24/*par*/["frame"]["type"] == "frame")){
PL$124/*runRemote*/ = true;;
PL$24/*par*/["promising"] = true;;
if(this["dynamicCode"]){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["functionFrameInDynamicCode"]);;
};
;

}else{
if((PL$24/*par*/["frame"]["type"] == "exclusive")){
PL$125/*runExclusive*/ = true;;
};
};
;
};
;
PL$130/*templateTypesAr*/ = [];
if((PL$24/*par*/["template"] && PL$24/*par*/["template"]["properties"]["length"])){
PL$131/*templateTypes*/ = this["getTemplateProperty"](PL$24/*par*/["template"], "types", "ObjectExpression");
if(PL$131/*templateTypes*/){
PL$132/*typeVarInit*/ = this["newResult"]();
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$131/*templateTypes*/["properties"]["length"]);++PL$32/*i*/){{PL$34/*p*/ = PL$131/*templateTypes*/["properties"][PL$32/*i*/];
PL$126/*typename*/ = PL$27/*identifierName*/(PL$34/*p*/["key"]);;
this["addType"]({"name": PL$126/*typename*/,
"dynamic": true}, PL$34/*p*/["value"]);;
if(! PL$127/*funClosure*/){
PL$127/*funClosure*/ = this["newResult"]();;
PL$127/*funClosure*/["push"]("(function(){");;
};
;
PL$132/*typeVarInit*/["push"]("var ");;
PL$132/*typeVarInit*/["push"](this["renderType"](PL$126/*typename*/));;
PL$132/*typeVarInit*/["push"](" = ");;
PL$132/*typeVarInit*/["push"](this["expectTypeVar"](this["parseExpression"](PL$34/*p*/["value"])));;
PL$132/*typeVarInit*/["push"](";\n");;
PL$132/*typeVarInit*/["push"]((("var " + this["getVariableName"](PL$126/*typename*/)) + " = "));;
PL$132/*typeVarInit*/["push"](this["renderType"](PL$126/*typename*/));;
PL$132/*typeVarInit*/["push"]("\n;");;
PL$132/*typeVarInit*/["push"]((("var " + this["getConstructorName"](PL$126/*typename*/)) + " = undefined;\n"));;
PL$132/*typeVarInit*/["push"](this["_typeReadyCode"]({"typename": PL$126/*typename*/}));;
PL$130/*templateTypesAr*/["push"](PL$126/*typename*/);;
}};
;
PL$127/*funClosure*/["push"](PL$132/*typeVarInit*/);;
};
;
};
;
PL$133/*extraTypesRes*/ = this["newResult"]();
if(PL$127/*funClosure*/){
PL$127/*funClosure*/["push"]("var communicator = {fun: undefined};\n");;
PL$127/*funClosure*/["push"](PL$133/*extraTypesRes*/);;
PL$127/*funClosure*/["push"]("eval(\"communicator.fun = ");;
};
;
PL$49/*res*/ = this["newResult"]();
PL$134/*funRes*/ = this["newResult"]();
PL$32/*i*/ = 0;;
PL$134/*funRes*/["push"]("function");;
if(PL$128/*hasName*/){
this["functionName"] = PL$129/*nameStr*/;;
};
;
PL$134/*funRes*/["push"]("(");;
if((PL$24/*par*/["params"] && PL$24/*par*/["params"]["length"])){
PL$32/*i*/ = 0;;
PL$88/*l*/ = PL$24/*par*/["params"]["length"];
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{if(PL$32/*i*/){
PL$134/*funRes*/["push"](", ");;
};
;
PL$134/*funRes*/["push"](this["getVariableName"](PL$27/*identifierName*/(PL$24/*par*/["params"][PL$32/*i*/]["name"])));;
this["addLocalVariable"]({"name": PL$24/*par*/["params"][PL$32/*i*/]["name"],
"typename": (PL$24/*par*/["params"][PL$32/*i*/]["typename"] || "var"),
"parameter": true}, PL$24/*par*/["params"][PL$32/*i*/]);;
}};
;
};
;
PL$134/*funRes*/["push"]("){\n");;
PL$135/*classesRes*/ = this["findClasses"](PL$24/*par*/["body"]);
this["findVariables"](PL$24/*par*/["body"]);;
if(PL$125/*runExclusive*/){
PL$134/*funRes*/["push"]((("if (!promiseland.profileHas(" + PL$14/*stringEncodeStr*/(PL$24/*par*/["frame"]["name"]["value"])) + ")){\n"));;
if(PL$24/*par*/["promising"]){
PL$134/*funRes*/["push"]((("var p = " + this["newPromiseStr"]()) + ";\n"));;
PL$134/*funRes*/["push"]("p.reject({id: 14, msg: \"function does not execute in this frame.\"});\n");;
PL$134/*funRes*/["push"]("return p;\n");;

}else{
PL$134/*funRes*/["push"]("return;\n");;
};
;
PL$134/*funRes*/["push"]("};\n");;
};
;
PL$136/*addFront*/ = PL$41/*getExtraFromPar*/(PL$24/*par*/, "addFront");
if(PL$136/*addFront*/){
PL$134/*funRes*/["push"](PL$136/*addFront*/);;
};
;
if(PL$24/*par*/["promising"]){
if(PL$121/*parGivenPromiseNameStr*/){
this["returnPromise"] = PL$121/*parGivenPromiseNameStr*/;;

}else{
this["returnPromise"] = this["getUniqueName"]();;
PL$134/*funRes*/["push"](this["declareReturnPromiseCode"]({"type": this["_returnType"],
"name": this["returnPromise"],
"constructorName": this["getConstructorName"](this["getTypeName"](this["_returnType"], PL$54/*parParsed*/)),
"parsed": PL$54/*parParsed*/,
"errorFun": this["getWarningFun"](PL$54/*parParsed*/)}));;
};
;
this["tryCatchFunctionStr"] = this["getUniqueName"]();;
PL$134/*funRes*/["push"]((("var " + this["tryCatchFunctionStr"]) + " = function(code){ return function(res){ try{code(res);}catch(e){ "));;
PL$134/*funRes*/["push"](this["runBeforeReturnRes"]);;
PL$134/*funRes*/["push"]((this["returnPromise"] + ".reject(e); }; }; };\n"));;
this["catchFunctionStr"] = this["getUniqueName"]();;
PL$134/*funRes*/["push"]((("var " + this["catchFunctionStr"]) + " = function(e){ "));;
PL$134/*funRes*/["push"](this["runBeforeReturnRes"]);;
PL$134/*funRes*/["push"]((this["returnPromise"] + ".reject(e); };\n"));;
this["promising"] = true;;
PL$49/*res*/["makePromising"]();;
};
;
PL$137/*b*/ = PL$24/*par*/["body"];
PL$138/*extraPar*/ = {};
PL$137/*b*/["brackets"] = false;;
PL$138/*extraPar*/["preCode"] = this["additionalCodeFrontRes"];;
PL$138/*extraPar*/["postCode"] = this["newResult"]();;
PL$138/*extraPar*/["postCode"]["push"](this["getReturnCode"]({}));;
PL$138/*extraPar*/["postCode"]["push"](this["additionalCodeEndRes"]);;
PL$139/*block*/ = this["blockCreator"](PL$137/*b*/, PL$138/*extraPar*/);
PL$140/*localVariablesAr*/ = this["localVariables"]["getArray"]();
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$140/*localVariablesAr*/["length"]);++PL$32/*i*/){{PL$141/*varname*/ = PL$140/*localVariablesAr*/[PL$32/*i*/]["key"];
PL$68/*type*/ = this["getVariableType"](PL$141/*varname*/);
if(PL$140/*localVariablesAr*/[PL$32/*i*/]["value"]["parameter"]){
PL$134/*funRes*/["push"](this["getProcessParameterCode"]({"name": this["getVariableName"](PL$141/*varname*/),
"type": PL$68/*type*/,
"errorFun": this["getWarningFun"](PL$24/*par*/),
"parsed": PL$24/*par*/}));;

}else{
PL$134/*funRes*/["push"](this["getDeclareVariableCode"]({"name": this["getVariableName"](PL$141/*varname*/),
"type": PL$68/*type*/,
"errorFun": this["getWarningFun"](PL$24/*par*/),
"parsed": PL$24/*par*/}));;
};
;
if(! PL$122/*noUntrack*/){
this["addBeforeReturn"](this["getDestroyVariableCode"]({"name": this["getVariableName"](PL$141/*varname*/),
"type": PL$68/*type*/,
"errorFun": this["getWarningFun"](PL$24/*par*/),
"parsed": PL$24/*par*/}), this["isTrackedClassConRes"](PL$68/*type*/, PL$24/*par*/));;
};
;
this["usedVariables"][PL$141/*varname*/] = false;;
}};
;
if(this["usedVariables"]["arguments"]){
PL$134/*funRes*/["push"]((("var " + this["getVariableName"]("arguments")) + " = arguments;\n"));;
this["usedVariables"]["arguments"] = false;;
};
;
PL$134/*funRes*/["push"](PL$135/*classesRes*/);;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < this["functionsAr"]["length"]);++PL$32/*i*/){{PL$134/*funRes*/["push"]((("var " + this["getVariableName"](this["functionsAr"][PL$32/*i*/]["name"])) + " = "));;
PL$134/*funRes*/["push"](this["functionsAr"][PL$32/*i*/]["res"]);;
PL$134/*funRes*/["push"](";\n");;
}};
;
if(PL$24/*par*/["promising"]){
if(this["usingThis"]){
PL$134/*funRes*/["push"]((("var " + this["thisExpression"]) + " = this;\n"));;
};
;
PL$134/*funRes*/["push"]((this["tryCatchFunctionStr"] + "(function(){"));;
};
;
PL$134/*funRes*/["push"](PL$139/*block*/);;
if(PL$24/*par*/["promising"]){
PL$134/*funRes*/["addPost"]("})();\n");;
PL$134/*funRes*/["addPost"](this["returnReturnPromiseCode"]({"type": this["_returnType"],
"name": this["returnPromise"],
"parsed": PL$54/*parParsed*/,
"errorFun": this["getWarningFun"](PL$54/*parParsed*/)}));;
PL$134/*funRes*/["addPost"]("}");;

}else{
PL$134/*funRes*/["push"]("}");;
};
;
PL$142/*completeFun*/ = this["makeCompleteStatement"](PL$134/*funRes*/);
if((this["promising"] && PL$24/*par*/["returnTypename"])){
PL$143/*returnTypePromiseCheck*/ = this["newResult"]();
PL$143/*returnTypePromiseCheck*/["push"]("(function(t){");;
PL$143/*returnTypePromiseCheck*/["push"](this["promisingReturnTypeCheck"]({"type": this["_returnType"],
"errorFun": this["getWarningFun"](PL$54/*parParsed*/),
"parsed": PL$54/*parParsed*/}));;
PL$143/*returnTypePromiseCheck*/["push"]("return t;})(");;
PL$143/*returnTypePromiseCheck*/["push"](PL$142/*completeFun*/);;
PL$143/*returnTypePromiseCheck*/["push"](")");;
PL$142/*completeFun*/ = PL$143/*returnTypePromiseCheck*/;;
};
;
if(PL$127/*funClosure*/){
PL$144/*handleExtras*/ = (function(PL$145/*dt*/){
var PL$32/*i*/;
;
if(PL$145/*dt*/["extraTypes"]){
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$145/*dt*/["extraTypes"]["length"]);++PL$32/*i*/){{PL$133/*extraTypesRes*/["push"](PL$145/*dt*/["extraTypes"][PL$32/*i*/]["res"]);;
PL$144/*handleExtras*/(PL$145/*dt*/["extraTypes"][PL$32/*i*/]["type"]);;
}};
;
};
;
;
});
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$130/*templateTypesAr*/["length"]);++PL$32/*i*/){{PL$145/*dt*/ = this["getType"](PL$130/*templateTypesAr*/[PL$32/*i*/], PL$24/*par*/);
PL$144/*handleExtras*/(PL$145/*dt*/);;
}};
;
PL$127/*funClosure*/["push"](PL$142/*completeFun*/, PL$24/*par*/, {"stringEncode": true});;
PL$127/*funClosure*/["push"](";\"); return communicator.fun; })()");;
PL$142/*completeFun*/ = this["makeCompleteStatement"](PL$127/*funClosure*/);;
};
;
PL$146/*thisFunType*/ = this["getFunctionType"](PL$24/*par*/);
PL$147/*uniqueNameStr*/;
if(PL$124/*runRemote*/){
PL$148/*remoteClosure*/ = this["newResult"]();
PL$147/*uniqueNameStr*/ = this["getUniqueName"]();;
PL$148/*remoteClosure*/["push"]("(function(f){\n");;
PL$148/*remoteClosure*/["push"](("promiseland.registerRemote(" + PL$14/*stringEncodeStr*/(PL$24/*par*/["frame"]["name"]["value"])));;
PL$148/*remoteClosure*/["push"](((((", " + PL$14/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + PL$14/*stringEncodeStr*/(PL$147/*uniqueNameStr*/)) + ", f, "));;
PL$148/*remoteClosure*/["push"](this["renderType"](PL$146/*thisFunType*/, PL$54/*parParsed*/));;
PL$148/*remoteClosure*/["push"](");\n");;
PL$148/*remoteClosure*/["push"]((("if (promiseland.profileHas(" + PL$14/*stringEncodeStr*/(PL$24/*par*/["frame"]["name"]["value"])) + ")){\n"));;
PL$148/*remoteClosure*/["push"]("return f;\n");;
PL$148/*remoteClosure*/["push"]("}else{\n");;
PL$148/*remoteClosure*/["push"]("return function(){\n");;
PL$148/*remoteClosure*/["push"]((((("return promiseland.remoteExec(" + PL$14/*stringEncodeStr*/(this["getModuleHashStr"]())) + ", ") + PL$14/*stringEncodeStr*/(PL$147/*uniqueNameStr*/)) + ", arguments);\n"));;
PL$148/*remoteClosure*/["push"]("}\n");;
PL$148/*remoteClosure*/["push"]("};\n");;
PL$148/*remoteClosure*/["push"]("})(");;
PL$148/*remoteClosure*/["push"](PL$142/*completeFun*/);;
PL$148/*remoteClosure*/["push"](")");;
PL$49/*res*/["push"](PL$148/*remoteClosure*/);;

}else{
PL$49/*res*/["push"](PL$142/*completeFun*/);;
};
;
PL$49/*res*/["setType"](PL$146/*thisFunType*/);;
this["unstack"]("isClassObject");;
this["unstack"]("inheritedAvailable");;
this["unstack"]("thisType");;
PL$149/*finalResult*/ = this["newResult"]();
PL$149/*finalResult*/["push"](this["makeCompleteStatement"](PL$49/*res*/));;
PL$149/*finalResult*/["setType"](PL$146/*thisFunType*/);;
return PL$149/*finalResult*/;;
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
var PL$150/*keywords*/;
var PL$32/*i*/;
;
PL$50/*r*/ = {};
PL$25/*name*/;
if(PL$24/*par*/["name"]){
PL$25/*name*/ = PL$27/*identifierName*/(PL$24/*par*/["name"]);;
};
PL$50/*r*/["hasName"] = (PL$25/*name*/ && PL$25/*name*/["length"]);;
PL$150/*keywords*/ = PL$24/*par*/["keywords"];
if((PL$150/*keywords*/ && PL$150/*keywords*/["length"])){
PL$32/*i*/;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$150/*keywords*/["length"]);++PL$32/*i*/){{switch (PL$150/*keywords*/[PL$32/*i*/]["type"]){
case "type":
PL$50/*r*/["isTyped"] = true;;
break;;
case "extends":
PL$50/*r*/["extendsClause"] = PL$150/*keywords*/[PL$32/*i*/];;
break;;
case "sync":
PL$50/*r*/["syncClause"] = PL$150/*keywords*/[PL$32/*i*/];;
break;;
case "track":
PL$50/*r*/["trackClause"] = PL$150/*keywords*/[PL$32/*i*/];;
break;;
case "unique":
PL$50/*r*/["uniqueClause"] = PL$150/*keywords*/[PL$32/*i*/];;
break;;
case "savable":
PL$50/*r*/["savableClause"] = PL$150/*keywords*/[PL$32/*i*/];;
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
var PL$151/*ci*/;
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
PL$151/*ci*/ = this["identifyClass"](PL$24/*par*/);
if(PL$151/*ci*/["isTyped"]){
if(PL$24/*par*/["body"]["literal"]){
if(PL$151/*ci*/["hasName"]){
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
var PL$151/*ci*/;
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
PL$151/*ci*/ = PL$45/*self*/["identifyClass"](PL$24/*par*/);
if(PL$151/*ci*/["hasName"]){
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
var PL$152/*classRes*/;
var PL$151/*ci*/;
var PL$128/*hasName*/;
var PL$25/*name*/;
var PL$103/*isTyped*/;
var PL$153/*extendsClause*/;
var PL$154/*syncClause*/;
var PL$155/*trackClause*/;
var PL$156/*resultType*/;
var PL$157/*literal*/;
var PL$68/*type*/;
var PL$158/*inheritedObjName*/;
var PL$159/*lit*/;
var PL$88/*l*/;
var PL$160/*prop*/;
var PL$48/*tempRes*/;
var PL$161/*baseClasses*/;
var PL$32/*i*/;
var PL$162/*used*/;
var PL$163/*u*/;
;
PL$49/*res*/ = this["newResult"]();
PL$152/*classRes*/ = this["newResult"]();
PL$151/*ci*/ = this["identifyClass"](PL$24/*par*/);
PL$128/*hasName*/ = PL$151/*ci*/["hasName"];
PL$25/*name*/;
if(PL$128/*hasName*/){
PL$25/*name*/ = PL$27/*identifierName*/(PL$24/*par*/["name"]);;
};
;
PL$103/*isTyped*/ = PL$151/*ci*/["isTyped"];
PL$153/*extendsClause*/ = PL$24/*par*/["extendsClause"];
PL$154/*syncClause*/ = PL$151/*ci*/["syncClause"];
PL$155/*trackClause*/ = PL$151/*ci*/["trackClause"];
PL$156/*resultType*/ = this["getType"]("var");
this["stack"]("inheritedSystem");;
this["inheritedSystem"] = this["newInherited"]();;
if(PL$103/*isTyped*/){
this["common"]["useClassSystem"] = true;;
PL$152/*classRes*/["push"]("classSystem.createClass(");;
if(PL$24/*par*/["body"]["literal"]){
if(PL$128/*hasName*/){
this["inheritedSystem"]["type"] = this["getType"](PL$25/*name*/, PL$24/*par*/);;
};
;
this["stack"]("isClassObject");;
this["isClassObject"] = true;;
PL$157/*literal*/ = this["createClassLiteral"](PL$24/*par*/["body"]["literal"], PL$151/*ci*/, PL$25/*name*/);
PL$152/*classRes*/["push"](this["stringifyClassLiteral"](PL$157/*literal*/, PL$25/*name*/));;
PL$152/*classRes*/["push"](", ");;
PL$152/*classRes*/["push"](this["createClassDefaults"](PL$24/*par*/["body"]["literal"]));;
this["unstack"]("isClassObject");;
if(PL$128/*hasName*/){
PL$68/*type*/ = this["createType"]({"name": PL$25/*name*/,
"literal": PL$157/*literal*/,
"par": PL$24/*par*/});
};
;

}else{
PL$152/*classRes*/["push"]("{}, ");;
PL$152/*classRes*/["push"](this["parseExpression"](PL$24/*par*/["body"]["expression"]));;
};
;
PL$152/*classRes*/["push"](")");;

}else{
PL$158/*inheritedObjName*/ = this["getUniqueName"]("inherited");
PL$152/*classRes*/["push"]("(function(){");;
if(PL$24/*par*/["body"]["literal"]){
this["stack"]("preventreturn");;
this["preventreturn"] = true;;
PL$159/*lit*/ = PL$24/*par*/["body"]["literal"];
PL$88/*l*/ = ((PL$159/*lit*/["properties"] && PL$159/*lit*/["properties"]["length"]) || 0);
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{PL$160/*prop*/ = PL$159/*lit*/["properties"][PL$32/*i*/];
if((PL$160/*prop*/["kind"] == "block")){
PL$152/*classRes*/["push"](this["parseExpression"](PL$160/*prop*/));;
};
;
}};
;
this["unstack"]("preventreturn");;
};
;
PL$152/*classRes*/["push"]((("var " + PL$158/*inheritedObjName*/) + " = {};\n"));;
PL$48/*tempRes*/ = this["newResult"]();
PL$48/*tempRes*/["push"]("var res = promiseland.createClass(");;
if(PL$24/*par*/["body"]["literal"]){
PL$48/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["body"]["literal"])));;

}else{
PL$48/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["body"]["expression"])));;
};
;
PL$48/*tempRes*/["push"](", [");;
PL$161/*baseClasses*/ = ((PL$153/*extendsClause*/ && PL$153/*extendsClause*/["baseClasses"]) || []);
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$161/*baseClasses*/["length"]);++PL$32/*i*/){{if(PL$32/*i*/){
PL$48/*tempRes*/["push"](", ");;
};
;
PL$48/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](PL$161/*baseClasses*/[PL$32/*i*/])));;
}};
;
PL$48/*tempRes*/["push"]("], ");;
PL$48/*tempRes*/["push"](PL$158/*inheritedObjName*/);;
PL$48/*tempRes*/["push"](");");;
PL$152/*classRes*/["push"](PL$48/*tempRes*/);;
PL$152/*classRes*/["push"]("\n");;
PL$162/*used*/ = this["inheritedSystem"]["used"];
PL$163/*u*/;
for(PL$163/*u*/ in PL$162/*used*/){PL$152/*classRes*/["push"]((((((("var " + PL$162/*used*/[PL$163/*u*/]) + " = ") + PL$158/*inheritedObjName*/) + "[") + PL$14/*stringEncodeStr*/(PL$163/*u*/)) + "];\n"));;
};
;
PL$152/*classRes*/["push"]("return res; })()");;
};
;
if(PL$128/*hasName*/){
if(PL$103/*isTyped*/){
PL$49/*res*/["addPre"](this["_resolveClassCode"]({"name": PL$24/*par*/["name"],
"classRes": PL$152/*classRes*/,
"parsed": PL$24/*par*/}));;

}else{
PL$49/*res*/["addPre"]((this["getVariableName"](PL$24/*par*/["name"]) + " = "));;
PL$49/*res*/["addPre"](PL$152/*classRes*/);;
PL$49/*res*/["addPre"](";");;
};
;
PL$49/*res*/["push"](this["getVariableName"](PL$24/*par*/["name"]));;

}else{
PL$49/*res*/["push"](PL$152/*classRes*/);;
};
;
PL$49/*res*/["setType"](PL$156/*resultType*/);;
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
this["createClassLiteral"] = (function(PL$24/*par*/, PL$151/*ci*/, PL$73/*parName*/){
var PL$164/*ret*/;
var PL$32/*i*/;
var PL$88/*l*/;
var PL$160/*prop*/;
var PL$165/*defaultValue*/;
var PL$68/*type*/;
var PL$25/*name*/;
;
PL$164/*ret*/ = {"members": [],
"extends": [],
"hasFreePart": true,
"parsed": PL$24/*par*/,
"track": (PL$151/*ci*/["trackClause"] ? true : false),
"sync": PL$151/*ci*/["syncClause"],
"unique": PL$151/*ci*/["uniqueClause"],
"savable": PL$151/*ci*/["savableClause"],
"name": PL$73/*parName*/,
"hashStr": this["getModuleHashStr"]()};
PL$32/*i*/ = 0;
PL$88/*l*/ = ((PL$24/*par*/["properties"] && PL$24/*par*/["properties"]["length"]) || 0);
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{PL$160/*prop*/ = PL$24/*par*/["properties"][PL$32/*i*/];
PL$165/*defaultValue*/;
PL$68/*type*/;
if((PL$160/*prop*/["kind"] == "init")){
PL$68/*type*/ = (PL$160/*prop*/["typename"] ? this["getType"](PL$160/*prop*/["typename"], PL$24/*par*/) : undefined);;
if(PL$160/*prop*/["value"]){
if(PL$68/*type*/){
PL$165/*defaultValue*/ = this["parseAsType"](PL$68/*type*/, PL$160/*prop*/["value"]);;

}else{
PL$165/*defaultValue*/ = this["parseExpression"](PL$160/*prop*/["value"]);;
PL$68/*type*/ = PL$165/*defaultValue*/["getType"]();;
};
;
};
;
if(! PL$68/*type*/){
PL$68/*type*/ = this["getType"]("var");;
};
;
PL$164/*ret*/["members"]["push"]({"name": PL$27/*identifierName*/(PL$160/*prop*/["key"]),
"type": PL$68/*type*/,
"defaultValue": PL$165/*defaultValue*/});;

}else{
if((PL$160/*prop*/["kind"] == "function")){
PL$25/*name*/ = PL$27/*identifierName*/(PL$160/*prop*/["id"]);
PL$160/*prop*/["id"] = undefined;;
PL$165/*defaultValue*/ = this["parseExpression"](PL$160/*prop*/["value"]);;
PL$68/*type*/ = PL$165/*defaultValue*/["getType"]();;
PL$164/*ret*/["members"]["push"]({"name": PL$25/*name*/,
"type": PL$68/*type*/,
"defaultValue": PL$165/*defaultValue*/});;

}else{
this["error"](PL$160/*prop*/, PL$12/*errorMsg*/["unknownPropertyAssignmentType"]);;
};
};
;
}};
;
return PL$164/*ret*/;;
;
});;
this["stringifyClassLiteral"] = (function(PL$24/*par*/, PL$166/*parClassNameStr*/){
var PL$49/*res*/;
var PL$32/*i*/;
var PL$88/*l*/;
var PL$33/*m*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"]("{");;
if(this["common"]["name"]){
PL$49/*res*/["push"]((("moduleName: " + PL$14/*stringEncodeStr*/(PL$27/*identifierName*/(this["common"]["name"]))) + ","));;
};
;
if(PL$166/*parClassNameStr*/){
PL$49/*res*/["push"]((("className: " + PL$14/*stringEncodeStr*/(PL$27/*identifierName*/(PL$166/*parClassNameStr*/))) + ","));;
};
;
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
PL$49/*res*/["push"](PL$167/*JSON*/["stringify"](PL$24/*par*/["sync"]));;
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
var PL$168/*comma*/;
var PL$160/*prop*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"]("{");;
PL$32/*i*/ = 0;
PL$88/*l*/ = ((PL$24/*par*/["properties"] && PL$24/*par*/["properties"]["length"]) || 0);
PL$168/*comma*/;
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{PL$160/*prop*/ = PL$24/*par*/["properties"][PL$32/*i*/];
if((PL$160/*prop*/["kind"] == "init")){
if(PL$168/*comma*/){
PL$49/*res*/["push"](", ");;
};
;
PL$49/*res*/["push"]((PL$14/*stringEncodeStr*/(PL$27/*identifierName*/(PL$160/*prop*/["key"])) + ": "));;
if(PL$160/*prop*/["value"]){
PL$49/*res*/["push"](this["parseExpression"](PL$160/*prop*/["value"]));;

}else{
PL$49/*res*/["push"]("undefined");;
};
;
PL$168/*comma*/ = true;;
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
var PL$169/*provisional*/;
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
PL$169/*provisional*/ = PL$60/*entry*/["type"];
PL$60/*entry*/["type"] = PL$68/*type*/;;
try
{this["resolveProvisional"](PL$169/*provisional*/, PL$68/*type*/);;
}catch(PL$170/*e*/){this["error"](PL$24/*par*/["par"], PL$12/*errorMsg*/["typeRedefinition"]);;
};
;
PL$60/*entry*/["isDefined"] = true;;
;
});;
this["_getTypeEntry"] = (function(PL$73/*parName*/, PL$54/*parParsed*/, PL$24/*par*/){
var PL$25/*name*/;
var PL$171/*throwError*/;
var PL$126/*typename*/;
var PL$172/*typeEntry*/;
var PL$93/*extraRes*/;
;
PL$25/*name*/ = PL$27/*identifierName*/(PL$73/*parName*/);
PL$171/*throwError*/ = true;
if((PL$24/*par*/ && PL$24/*par*/["dontThrow"])){
PL$171/*throwError*/ = false;;
};
;
if(this["types"]["has"](PL$25/*name*/)){
return this["types"]["get"](PL$25/*name*/);;
};
;
if((PL$25/*name*/[(PL$25/*name*/["length"] - 1)] == "*")){
PL$126/*typename*/ = PL$25/*name*/["substr"](0, (PL$25/*name*/["length"] - 1));
PL$172/*typeEntry*/ = this["_getTypeEntry"](PL$126/*typename*/, PL$54/*parParsed*/, PL$24/*par*/);
if(PL$172/*typeEntry*/){
PL$93/*extraRes*/ = PL$172/*typeEntry*/["extraRes"];
this["types"]["set"](PL$25/*name*/, {"name": PL$25/*name*/,
"type": PL$18/*classSystem*/["_createPromiseOfClass"](PL$172/*typeEntry*/["type"]),
"isDynamic": false,
"extraRes": PL$93/*extraRes*/});;
PL$93/*extraRes*/["push"]("var ");;
PL$93/*extraRes*/["push"](this["renderType"](PL$25/*name*/));;
this["common"]["useClassSystem"] = true;;
PL$93/*extraRes*/["push"](" = classSystem._createPromiseOfClass(");;
PL$93/*extraRes*/["push"](this["renderType"](PL$126/*typename*/));;
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
if(! PL$171/*throwError*/){
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
var PL$173/*catchPromise*/;
var PL$174/*continuePromise*/;
var PL$137/*b*/;
var PL$138/*extraPar*/;
var PL$175/*temporaryPs*/;
;
PL$49/*res*/ = this["newResult"]();
PL$173/*catchPromise*/;
PL$174/*continuePromise*/;
if(PL$37/*checkPromising*/(PL$24/*par*/)){
this["stack"]("tryCatchFunctionStr");;
this["stack"]("catchFunctionStr");;
PL$174/*continuePromise*/ = this["getUniqueName"]();;
PL$49/*res*/["addPre"]((((("var " + PL$174/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$173/*catchPromise*/ = this["getUniqueName"]();;
PL$49/*res*/["addPre"]((((("var " + PL$173/*catchPromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
this["tryCatchFunctionStr"] = (this["getUniqueName"]() + "/*try catch*/");;
PL$49/*res*/["addPre"]((((("var " + this["tryCatchFunctionStr"]) + " = function(code){ return function(res){ try{code(res);}catch(e){ ") + PL$173/*catchPromise*/) + ".resolve(e); }; }; };\n"));;
this["catchFunctionStr"] = this["getUniqueName"]();;
PL$49/*res*/["addPre"]((((("var " + this["catchFunctionStr"]) + " = function(e){ ") + PL$173/*catchPromise*/) + ".resolve(e); };\n"));;
PL$49/*res*/["push"]((this["tryCatchFunctionStr"] + "(function()"));;

}else{
PL$49/*res*/["push"]("try\n");;
};
;
PL$137/*b*/ = PL$24/*par*/["block"];
PL$138/*extraPar*/ = {};
PL$137/*b*/["brackets"] = true;;
if(PL$37/*checkPromising*/(PL$24/*par*/)){
PL$138/*extraPar*/["postCode"] = this["newResult"]((PL$174/*continuePromise*/ + ".resolve()"));;
};
;
PL$49/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](PL$137/*b*/, PL$138/*extraPar*/)));;
if(PL$37/*checkPromising*/(PL$24/*par*/)){
this["unstack"]("tryCatchFunctionStr");;
this["unstack"]("catchFunctionStr");;
PL$49/*res*/["push"](")();\n");;
PL$49/*res*/["push"]((((PL$173/*catchPromise*/ + ".then(") + this["tryCatchFunctionStr"]) + "(function("));;

}else{
PL$49/*res*/["push"]("catch(");;
};
;
PL$175/*temporaryPs*/;
if(PL$24/*par*/["handler"]["param"]){
PL$49/*res*/["push"](this["getVariableName"](PL$27/*identifierName*/(PL$24/*par*/["handler"]["param"])));;
PL$175/*temporaryPs*/ = this["addLocalVariableTemporary"]({"name": PL$27/*identifierName*/(PL$24/*par*/["handler"]["param"]),
"typename": "var",
"parameter": true}, PL$24/*par*/["handler"]);;
};
;
PL$49/*res*/["push"](")");;
PL$137/*b*/ = PL$24/*par*/["handler"]["body"];;
PL$138/*extraPar*/ = {};;
PL$137/*b*/["brackets"] = true;;
if(PL$37/*checkPromising*/(PL$24/*par*/)){
PL$138/*extraPar*/["postCode"] = this["newResult"]((PL$174/*continuePromise*/ + ".resolve();"));;
};
;
PL$49/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](PL$137/*b*/, PL$138/*extraPar*/)));;
if(PL$37/*checkPromising*/(PL$24/*par*/)){
PL$49/*res*/["push"]("));\n");;
PL$49/*res*/["push"](PL$174/*continuePromise*/);;
PL$49/*res*/["push"](((".then(" + this["tryCatchFunctionStr"]) + "(function(){"));;
PL$49/*res*/["addPost"]((("}), " + this["catchFunctionStr"]) + ")"));;
};
;
if(PL$24/*par*/["finally"]){
PL$49/*res*/["push"]("finally");;
PL$137/*b*/ = PL$24/*par*/["finally"];;
PL$137/*b*/["brackers"] = true;;
PL$49/*res*/["push"](this["makeCompleteStatement"](this["blockCreator"](PL$137/*b*/)));;
};
;
if(PL$175/*temporaryPs*/){
PL$175/*temporaryPs*/["resolve"]();;
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
var PL$176/*statementRes*/;
;
PL$176/*statementRes*/ = this["newResult"]();
PL$176/*statementRes*/["setStatement"]();;
PL$176/*statementRes*/["push"](PL$24/*par*/);;
PL$176/*statementRes*/["push"](";\n");;
return PL$176/*statementRes*/;;
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
this["blockCreator"] = (function(PL$24/*par*/, PL$177/*parExtra*/){
var PL$49/*res*/;
var PL$178/*blockRes*/;
var PL$179/*sAr*/;
var PL$32/*i*/;
var PL$88/*l*/;
;
if(! PL$177/*parExtra*/){
PL$177/*parExtra*/ = {};;
};
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["setType"](PL$19/*statementType*/);;
if(PL$24/*par*/["brackets"]){
PL$49/*res*/["push"]("{");;
};
;
PL$178/*blockRes*/ = this["newResult"]();
PL$179/*sAr*/ = [];
if((PL$24/*par*/ instanceof PL$180/*Array*/)){
PL$179/*sAr*/ = PL$24/*par*/;;

}else{
if((PL$24/*par*/["type"] == "BlockStatement")){
PL$179/*sAr*/ = PL$24/*par*/["body"];;

}else{
PL$181/*console*/["log"]("here <------------------------");;
PL$179/*sAr*/["push"](this["parseExpression"](PL$24/*par*/));;
};
;
};
;
if(PL$177/*parExtra*/["preCode"]){
PL$178/*blockRes*/["push"](this["makeStatement"](PL$177/*parExtra*/["preCode"]));;
};
;
PL$32/*i*/ = 0;
PL$88/*l*/ = PL$179/*sAr*/["length"];
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{PL$178/*blockRes*/["push"](this["makeStatement"](this["parseExpression"](PL$179/*sAr*/[PL$32/*i*/])));;
}};
;
if(PL$177/*parExtra*/["postCode"]){
PL$178/*blockRes*/["push"](this["makeStatement"](PL$177/*parExtra*/["postCode"]));;
};
;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$178/*blockRes*/));;
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
this["_parseExpression"] = (function(PL$182/*value*/){
var PL$49/*res*/;
;
PL$49/*res*/;
switch (PL$182/*value*/["type"]){
case "ArrayExpression":
return this["expArrayExpression"](PL$182/*value*/);;
case "AssignmentExpression":
return this["expAssignmentExpression"](PL$182/*value*/);;
case "BinaryExpression":
return this["expBinaryExpression"](PL$182/*value*/);;
case "BlockStatement":
return this["expBlockStatement"](PL$182/*value*/);;
case "BreakStatement":
return this["expBreakStatement"](PL$182/*value*/);;
case "CallExpression":
return this["expCallExpression"](PL$182/*value*/);;
case "Class":
return this["expClassStatement"](PL$182/*value*/);;
case "ClassObjectExpression":
return this["expClassObjectExpression"](PL$182/*value*/);;
case "ConditionalExpression":
return this["conditionalExpression"](PL$182/*value*/);;
case "ConnectExpression":
return this["connectExpression"](PL$182/*value*/);;
case "ContinueStatement":
return this["expContinueStatement"](PL$182/*value*/);;
case "DebuggerStatement":
return this["expDebuggerStatement"](PL$182/*value*/);;
case "EmptyStatement":
PL$49/*res*/ = this["newResult"]();;
PL$49/*res*/["setType"]("var");;
return PL$49/*res*/;;
case "ExpressionStatement":
return this["expExpressionStatement"](PL$182/*value*/);;
case "ForInStatement":
return this["expForInStatement"](PL$182/*value*/);;
case "ForStatement":
return this["expForStatement"](PL$182/*value*/);;
case "FunctionExpression":
return this["expFunctionExpression"](PL$182/*value*/);;
case "FunctionDeclaration":
return this["expFunctionDeclaration"](PL$182/*value*/);;
case "MemberFunction":
return this["expMemberFunction"](PL$182/*value*/);;
case "Identifier":
return this["expIdentifier"](PL$182/*value*/);;
case "IfStatement":
return this["expIfStatement"](PL$182/*value*/);;
case "InheritedExpression":
return this["expInheritedExpression"](PL$182/*value*/);;
case "Literal":
return this["expLiteral"](PL$182/*value*/);;
case "MemberExpression":
return this["expMemberExpression"](PL$182/*value*/);;
case "NewExpression":
return this["expNewExpression"](PL$182/*value*/);;
case "ObjectExpression":
return this["expObjectExpression"](PL$182/*value*/);;
case "ReturnStatement":
return this["expReturnStatement"](PL$182/*value*/);;
case "SwitchStatement":
return this["expSwitchStatement"](PL$182/*value*/);;
case "ThisExpression":
return this["expThisExpression"](PL$182/*value*/);;
case "ThrowStatement":
return this["expThrowStatement"](PL$182/*value*/);;
case "TryStatement":
return this["expTryStatement"](PL$182/*value*/);;
case "UnaryExpression":
if((PL$182/*value*/["operator"] == "*")){
return this["expPromiseExpression"](PL$182/*value*/["argument"]);;
};
;
if((PL$182/*value*/["operator"] == "require")){
return this["expRequireExpression"](PL$182/*value*/["argument"]);;
};
;
return this["expUnaryExpression"](PL$182/*value*/);;
case "UpdateExpression":
return this["expUpdateExpression"](PL$182/*value*/);;
case "VariableStatement":
return this["expVariableStatement"](PL$182/*value*/);;
case "VariableDeclaration":
return this["expVariableDeclaration"](PL$182/*value*/);;
case "WhileStatement":
return this["whileStatement"](PL$182/*value*/);;
default:
this["error"](PL$182/*value*/, PL$12/*errorMsg*/["unknownType"]);;
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
this["expFunctionExpression"] = (function(PL$182/*value*/, PL$183/*declaration*/){
var PL$184/*cp*/;
var PL$185/*funName*/;
var PL$134/*funRes*/;
var PL$186/*uv*/;
var PL$25/*name*/;
var PL$49/*res*/;
;
PL$184/*cp*/ = this["newInstance"](PL$182/*value*/, {"dynamicCode": (this["dynamicCode"] || this["isFunction"])});
PL$185/*funName*/ = PL$184/*cp*/["getFunctionName"]();
PL$134/*funRes*/ = PL$184/*cp*/["getFunctionRes"]();
PL$186/*uv*/ = PL$184/*cp*/["_getUsedVairables"]();
PL$25/*name*/;
for(PL$25/*name*/ in PL$186/*uv*/){if((PL$186/*uv*/[PL$25/*name*/] === true)){
this["_addUsedVariable"](PL$25/*name*/);;
};
;
};
;
PL$49/*res*/;
if((PL$185/*funName*/ && PL$134/*funRes*/)){
this["addFunction"](PL$134/*funRes*/, PL$185/*funName*/);;
PL$49/*res*/ = this["newResult"](this["getVariableName"](PL$185/*funName*/));;
PL$49/*res*/["setType"](PL$134/*funRes*/["getType"]());;
return PL$49/*res*/;;
};
;
PL$49/*res*/ = this["newResult"]();;
if(! PL$183/*declaration*/){
PL$49/*res*/["push"]("(");;
};
;
PL$49/*res*/["pushType"]((PL$134/*funRes*/ || PL$184/*cp*/["getResult"]()));;
if(! PL$183/*declaration*/){
PL$49/*res*/["push"](")");;
};
;
return PL$49/*res*/;;
;
});;
this["expFunctionDeclaration"] = (function(PL$182/*value*/){
;
return this["expFunctionExpression"](PL$182/*value*/, true);;
;
});;
this["expMemberFunction"] = (function(PL$182/*value*/){
;
PL$182/*value*/["id"] = undefined;;
return this["expFunctionExpression"](PL$182/*value*/);;
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
this["expPromiseExpression"] = (function(PL$187/*parExpression*/){
var PL$49/*res*/;
var PL$188/*expressionRes*/;
var PL$189/*promiseNameStr*/;
var PL$190/*dereferencePre*/;
var PL$191/*preRes*/;
var PL$192/*dereferencePost*/;
var PL$193/*postRes*/;
var PL$194/*promiseType*/;
;
PL$49/*res*/ = this["newResult"]();
PL$188/*expressionRes*/ = this["parseExpression"](PL$187/*parExpression*/);
PL$189/*promiseNameStr*/ = this["getUniqueName"]();
PL$49/*res*/["makePromising"]();;
PL$49/*res*/["setPromiseName"](PL$189/*promiseNameStr*/);;
PL$190/*dereferencePre*/ = this["dereferencePromisePreCode"]({"value": PL$188/*expressionRes*/});
PL$191/*preRes*/ = this["newResult"]();
PL$191/*preRes*/["push"](PL$190/*dereferencePre*/);;
PL$191/*preRes*/["push"]((this["tryCatchFunctionStr"] + "(function("));;
PL$191/*preRes*/["push"](PL$189/*promiseNameStr*/);;
PL$191/*preRes*/["push"]("){");;
PL$49/*res*/["addPre"](PL$191/*preRes*/);;
PL$192/*dereferencePost*/ = this["dereferencePromisePostCode"]({"value": PL$188/*expressionRes*/});
PL$193/*postRes*/ = this["newResult"]();
PL$193/*postRes*/["push"](("}), " + this["catchFunctionStr"]));;
PL$193/*postRes*/["push"](PL$192/*dereferencePost*/);;
PL$193/*postRes*/["push"](";");;
PL$49/*res*/["addPost"](PL$193/*postRes*/);;
PL$194/*promiseType*/ = PL$188/*expressionRes*/["getType"]();
PL$49/*res*/["setType"](this["getClassFromPromiseOf"](PL$194/*promiseType*/));;
return PL$49/*res*/;;
;
});;
this["expUnaryExpression"] = (function(PL$187/*parExpression*/){
var PL$49/*res*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["push"](PL$187/*parExpression*/["operator"]);;
PL$49/*res*/["push"](" ");;
PL$49/*res*/["pushType"](this["expectTypeVar"](this["parseExpression"](PL$187/*parExpression*/["argument"])));;
return PL$49/*res*/;;
;
});;
this["expRequireExpression"] = (function(PL$187/*parExpression*/){
var PL$49/*res*/;
var PL$188/*expressionRes*/;
var PL$189/*promiseNameStr*/;
var PL$190/*dereferencePre*/;
var PL$191/*preRes*/;
var PL$192/*dereferencePost*/;
var PL$193/*postRes*/;
;
PL$49/*res*/ = this["newResult"]();
this["common"]["useRequire"] = true;;
PL$188/*expressionRes*/ = this["newResult"]();
PL$188/*expressionRes*/["push"]("__requireFun(");;
PL$188/*expressionRes*/["push"](this["parseExpression"](PL$187/*parExpression*/));;
PL$188/*expressionRes*/["push"](")");;
PL$188/*expressionRes*/["setType"]("var");;
PL$189/*promiseNameStr*/ = this["getUniqueName"]();
PL$49/*res*/["makePromising"]();;
PL$49/*res*/["setPromiseName"](PL$189/*promiseNameStr*/);;
PL$190/*dereferencePre*/ = this["dereferencePromisePreCode"]({"value": PL$188/*expressionRes*/});
PL$191/*preRes*/ = this["newResult"]();
PL$191/*preRes*/["push"](PL$190/*dereferencePre*/);;
PL$191/*preRes*/["push"]((this["tryCatchFunctionStr"] + "(function("));;
PL$191/*preRes*/["push"](PL$189/*promiseNameStr*/);;
PL$191/*preRes*/["push"]("){");;
PL$49/*res*/["addPre"](PL$191/*preRes*/);;
PL$192/*dereferencePost*/ = this["dereferencePromisePostCode"]({"value": PL$188/*expressionRes*/});
PL$193/*postRes*/ = this["newResult"]();
PL$193/*postRes*/["push"](("}), " + this["catchFunctionStr"]));;
PL$193/*postRes*/["push"](PL$192/*dereferencePost*/);;
PL$193/*postRes*/["push"](";");;
PL$49/*res*/["addPost"](PL$193/*postRes*/);;
PL$49/*res*/["setType"]("var");;
return PL$49/*res*/;;
;
});;
this["expNewExpression"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$195/*typed*/;
var PL$68/*type*/;
var PL$32/*i*/;
var PL$196/*constructorType*/;
var PL$197/*expression*/;
;
PL$49/*res*/ = this["newResult"]();
PL$195/*typed*/ = false;
PL$68/*type*/ = "var";
if((PL$24/*par*/["callee"] && (PL$24/*par*/["callee"]["type"] == "Identifier"))){
PL$68/*type*/ = this["getType"](PL$27/*identifierName*/(PL$24/*par*/["callee"]), PL$24/*par*/, {"dontThrow": true});;
if(PL$68/*type*/){
PL$49/*res*/["push"]("new ");;
PL$49/*res*/["push"](this["getConstructorName"](PL$24/*par*/["callee"]));;
PL$49/*res*/["push"]("(");;
PL$195/*typed*/ = true;;
PL$49/*res*/["setType"](this["getConstructorReturnType"](PL$68/*type*/));;
};
;
};
;
if(! PL$195/*typed*/){
PL$49/*res*/["push"]("new ");;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["callee"])));;
PL$49/*res*/["push"]("(");;
};
;
PL$32/*i*/ = 0;
PL$196/*constructorType*/;
if(PL$195/*typed*/){
PL$196/*constructorType*/ = this["getConstructorType"]({"type": PL$68/*type*/}, PL$24/*par*/);;
};
;
for(PL$32/*i*/;(PL$32/*i*/ < PL$24/*par*/["arguments"]["length"]);++PL$32/*i*/){{if(PL$32/*i*/){
PL$49/*res*/["push"](", ");;
};
;
PL$197/*expression*/ = this["parseExpression"](PL$24/*par*/["arguments"][PL$32/*i*/]);
if(PL$195/*typed*/){
PL$49/*res*/["push"](this["getPassAsTypeCode"]({"value": PL$197/*expression*/,
"valueType": PL$197/*expression*/["getType"](),
"type": this["getFunctionArgumentType"](PL$196/*constructorType*/, PL$32/*i*/, PL$24/*par*/),
"errorFun": this["getWarningFun"](PL$24/*par*/)}));;

}else{
PL$49/*res*/["push"](this["expectTypeVar"](PL$197/*expression*/));;
};
;
}};
;
PL$49/*res*/["push"](")");;
if(! PL$195/*typed*/){
PL$49/*res*/["setType"]("var");;
};
;
return PL$49/*res*/;;
;
});;
this["connectExpression"] = (function(PL$54/*parParsed*/){
var PL$49/*res*/;
var PL$198/*signalObject*/;
var PL$199/*signalProperty*/;
var PL$200/*slotObject*/;
var PL$201/*slotProperty*/;
var PL$202/*fun*/;
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
PL$198/*signalObject*/ = this["parseExpression"](PL$54/*parParsed*/["signal"]["object"]);
PL$199/*signalProperty*/ = PL$27/*identifierName*/(PL$54/*parParsed*/["signal"]["property"]);
if(PL$54/*parParsed*/["slot"]){
if((PL$54/*parParsed*/["slot"]["type"] != "MemberExpression")){
this["error"](PL$54/*parParsed*/["slot"], PL$12/*errorMsg*/["expectedMemberExpression"]);;
};
;
if(PL$54/*parParsed*/["slot"]["computed"]){
this["error"](PL$54/*parParsed*/["slot"], PL$12/*errorMsg*/["noComputedMembersAllowed"]);;
};
;
PL$200/*slotObject*/ = this["parseExpression"](PL$54/*parParsed*/["slot"]["object"]);
PL$201/*slotProperty*/ = PL$27/*identifierName*/(PL$54/*parParsed*/["slot"]["property"]);
PL$49/*res*/["push"](this["connectSlotCode"]({"signalObject": PL$198/*signalObject*/,
"signalProperty": PL$199/*signalProperty*/,
"slotObject": PL$200/*slotObject*/,
"slotProperty": PL$201/*slotProperty*/,
"errorFun": this["getWarningFun"](PL$54/*parParsed*/)}));;

}else{
if(PL$54/*parParsed*/["fun"]){
PL$202/*fun*/ = this["parseExpression"](PL$54/*parParsed*/["fun"]);
PL$49/*res*/["push"](this["connectFunCode"]({"signalObject": PL$198/*signalObject*/,
"signalProperty": PL$199/*signalProperty*/,
"fun": PL$202/*fun*/,
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
var PL$203/*promiseName*/;
var PL$204/*outerBlock*/;
var PL$137/*b*/;
var PL$139/*block*/;
;
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["makePromising"]();;
PL$203/*promiseName*/ = (PL$24/*par*/["promiseName"] || this["getUniqueName"]());
PL$49/*res*/["setPromiseName"](PL$203/*promiseName*/);;
this["stack"]("breakCode");;
this["stack"]("continueCode");;
this["breakCode"] = (((PL$203/*promiseName*/ + ".resolve(false); return ") + PL$203/*promiseName*/) + ";\n");;
this["continueCode"] = (((PL$203/*promiseName*/ + ".resolve(true); return ") + PL$203/*promiseName*/) + ";\n");;
PL$49/*res*/["push"]((((("var " + PL$203/*promiseName*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$204/*outerBlock*/ = this["newResult"]();
if(PL$24/*par*/["preCondition"]){
PL$204/*outerBlock*/["push"]("if(");;
PL$204/*outerBlock*/["push"](PL$24/*par*/["preCondition"]);;
PL$204/*outerBlock*/["push"]("){");;
};
;
PL$137/*b*/ = PL$24/*par*/["block"];
PL$137/*b*/["brackets"] = false;;
PL$139/*block*/ = this["blockCreator"](PL$137/*b*/, {"postCode": this["newResult"](this["continueCode"])});
PL$204/*outerBlock*/["push"](this["makeCompleteStatement"](PL$139/*block*/));;
if(PL$24/*par*/["preCondition"]){
PL$204/*outerBlock*/["push"]("}else{");;
PL$204/*outerBlock*/["push"](this["breakCode"]);;
PL$204/*outerBlock*/["push"]("};\n");;
};
;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$204/*outerBlock*/));;
this["unstack"]("breakCode");;
this["unstack"]("continueCode");;
return PL$49/*res*/;;
;
});;
this["generateLoop"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$205/*loopFun*/;
var PL$206/*loopEndPromise*/;
var PL$207/*loopCode*/;
var PL$208/*doFun*/;
var PL$209/*doFunStatement*/;
;
PL$49/*res*/ = this["newResult"]();
PL$205/*loopFun*/ = this["getUniqueName"]();
PL$206/*loopEndPromise*/ = this["getUniqueName"]();
PL$49/*res*/["push"]((((("var " + PL$206/*loopEndPromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$49/*res*/["push"]((("var " + PL$205/*loopFun*/) + " = function(){"));;
PL$207/*loopCode*/ = this["breakOrContinuePromise"]({"block": PL$24/*par*/["block"],
"preCondition": PL$24/*par*/["preCondition"],
"postCode": PL$24/*par*/["postCode"]});
PL$49/*res*/["push"](this["makeStatement"](this["makeCompleteStatement"](PL$207/*loopCode*/)));;
PL$49/*res*/["push"]("return ");;
PL$49/*res*/["push"](PL$207/*loopCode*/["getPromiseName"]());;
PL$49/*res*/["push"](";\n");;
PL$49/*res*/["push"]("};\n");;
PL$208/*doFun*/ = this["getUniqueName"]();
PL$49/*res*/["push"]((("var " + PL$208/*doFun*/) + " = function(){"));;
PL$49/*res*/["push"](PL$205/*loopFun*/);;
PL$49/*res*/["push"]("().then(function(contLoop){\n");;
PL$49/*res*/["push"]("if (contLoop){");;
PL$209/*doFunStatement*/ = this["newResult"]();
if(PL$24/*par*/["postCode"]){
PL$209/*doFunStatement*/["push"](this["makeStatement"](PL$24/*par*/["postCode"]));;
};
;
PL$209/*doFunStatement*/["push"]((PL$208/*doFun*/ + "();"));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$209/*doFunStatement*/));;
PL$49/*res*/["push"]("}else{");;
PL$49/*res*/["push"]((PL$206/*loopEndPromise*/ + ".resolve();"));;
PL$49/*res*/["push"]("};\n");;
PL$49/*res*/["push"]("});\n");;
PL$49/*res*/["push"]("};\n");;
PL$49/*res*/["push"]((PL$208/*doFun*/ + "();\n"));;
PL$49/*res*/["push"](PL$206/*loopEndPromise*/);;
PL$49/*res*/["push"](".then(function(){");;
PL$49/*res*/["addPost"]("});");;
return PL$49/*res*/;;
;
});;
this["expForStatement"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$210/*statement*/;
var PL$211/*promising*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
PL$49/*res*/ = this["newResult"]();
PL$210/*statement*/;
PL$211/*promising*/ = false;
if(((PL$37/*checkPromising*/(PL$24/*par*/["test"]) || PL$37/*checkPromising*/(PL$24/*par*/["update"])) || PL$37/*checkPromising*/(PL$24/*par*/["body"]))){
PL$211/*promising*/ = true;;
};
;
if(PL$211/*promising*/){
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
PL$210/*statement*/ = this["newResult"]();;
PL$210/*statement*/["push"](this["expBlockStatement"](PL$24/*par*/["body"]));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$210/*statement*/));;
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
var PL$210/*statement*/;
var PL$211/*promising*/;
var PL$212/*iteratorRes*/;
var PL$213/*iteratorAccess*/;
var PL$214/*arrayName*/;
var PL$215/*iName*/;
var PL$216/*conditionRes*/;
var PL$217/*postCodeRes*/;
var PL$137/*b*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$49/*res*/ = this["newResult"]();
PL$210/*statement*/;
PL$211/*promising*/ = false;
if(PL$37/*checkPromising*/(PL$24/*par*/["body"])){
PL$211/*promising*/ = true;;
};
;
if(PL$211/*promising*/){
PL$212/*iteratorRes*/ = this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["left"]));
PL$213/*iteratorAccess*/ = PL$212/*iteratorRes*/;
if(PL$212/*iteratorRes*/["promising"]){
PL$213/*iteratorAccess*/ = PL$212/*iteratorRes*/["getPromiseName"]();;
};
;
PL$214/*arrayName*/ = this["getUniqueName"]();
PL$49/*res*/["addPre"]((("var " + PL$214/*arrayName*/) + " = [];"));;
PL$49/*res*/["push"]("for(");;
PL$49/*res*/["push"](PL$212/*iteratorRes*/);;
PL$49/*res*/["push"](" in ");;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["right"])));;
PL$49/*res*/["push"]("){");;
PL$49/*res*/["push"]((PL$214/*arrayName*/ + ".push("));;
PL$49/*res*/["push"](PL$213/*iteratorAccess*/);;
PL$49/*res*/["push"](");");;
PL$49/*res*/["push"]("};");;
PL$49/*res*/["push"](PL$212/*iteratorRes*/);;
PL$49/*res*/["push"](((" = " + PL$214/*arrayName*/) + "[0];"));;
PL$215/*iName*/ = this["getUniqueName"]();
PL$49/*res*/["push"]((("var " + PL$215/*iName*/) + " = 0;"));;
PL$216/*conditionRes*/ = this["newResult"]();
PL$216/*conditionRes*/["push"]((((PL$215/*iName*/ + " < ") + PL$214/*arrayName*/) + ".length"));;
PL$217/*postCodeRes*/ = this["newResult"]();
PL$217/*postCodeRes*/["push"]((PL$215/*iName*/ + "++;"));;
PL$217/*postCodeRes*/["push"](PL$212/*iteratorRes*/);;
PL$217/*postCodeRes*/["push"](((((" = " + PL$214/*arrayName*/) + "[") + PL$215/*iName*/) + "];"));;
PL$49/*res*/["push"](this["generateLoop"]({"block": PL$24/*par*/["body"],
"preCondition": PL$216/*conditionRes*/,
"postCode": PL$217/*postCodeRes*/}));;
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
PL$210/*statement*/ = this["newResult"]();;
PL$137/*b*/ = PL$24/*par*/["body"];
PL$137/*b*/["brackets"] = true;;
PL$210/*statement*/["push"](this["blockCreator"](PL$137/*b*/));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$210/*statement*/));;
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
var PL$218/*statements*/;
var PL$109/*condition*/;
;
this["stack"]("dynamicCode");;
this["dynamicCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$49/*res*/ = this["newResult"]();
PL$218/*statements*/;
PL$109/*condition*/ = this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["test"]));
if((PL$37/*checkPromising*/(PL$109/*condition*/) || PL$37/*checkPromising*/(PL$24/*par*/["body"]))){
PL$49/*res*/["push"](this["generateLoop"]({"block": PL$24/*par*/["body"],
"preCondition": PL$109/*condition*/}));;

}else{
PL$49/*res*/["push"]("while(");;
PL$49/*res*/["push"](PL$109/*condition*/);;
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
var PL$211/*promising*/;
var PL$174/*continuePromise*/;
var PL$219/*continueCode*/;
var PL$210/*statement*/;
var PL$137/*b*/;
var PL$138/*extraPar*/;
;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$49/*res*/ = this["newResult"]();
PL$211/*promising*/ = false;
if((PL$24/*par*/["consequent"] && PL$37/*checkPromising*/(PL$24/*par*/["consequent"]))){
PL$211/*promising*/ = true;;
};
;
if((PL$24/*par*/["alternate"] && PL$37/*checkPromising*/(PL$24/*par*/["alternate"]))){
PL$211/*promising*/ = true;;
};
;
PL$174/*continuePromise*/;
PL$219/*continueCode*/;
if(PL$211/*promising*/){
PL$174/*continuePromise*/ = this["getUniqueName"]();;
PL$49/*res*/["push"]((((("var " + PL$174/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$219/*continueCode*/ = (PL$174/*continuePromise*/ + ".resolve();");;
};
;
PL$49/*res*/["push"]("if(");;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["test"])));;
PL$49/*res*/["push"]("){\n");;
if(! PL$24/*par*/["consequent"]){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["unknownIfStatement"]);;
};
;
PL$210/*statement*/ = this["newResult"]();
PL$137/*b*/;
if((PL$24/*par*/["consequent"]["type"] == "BlockStatement")){
PL$137/*b*/ = PL$24/*par*/["consequent"]["body"];;

}else{
PL$137/*b*/ = [PL$24/*par*/["consequent"]];;
};
;
PL$137/*b*/["brackets"] = false;;
PL$138/*extraPar*/ = {};
if(PL$211/*promising*/){
PL$138/*extraPar*/["postCode"] = this["newResult"](PL$219/*continueCode*/);;
};
;
PL$210/*statement*/["push"](this["blockCreator"](PL$137/*b*/, PL$138/*extraPar*/));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$210/*statement*/));;
if(PL$24/*par*/["alternate"]){
PL$49/*res*/["push"]("\n}else{\n");;
PL$210/*statement*/ = this["newResult"]();;
if((PL$24/*par*/["alternate"]["type"] == "BlockStatement")){
PL$137/*b*/ = PL$24/*par*/["alternate"]["body"];;

}else{
PL$137/*b*/ = [PL$24/*par*/["alternate"]];;
};
;
PL$137/*b*/["brackets"] = false;;
PL$138/*extraPar*/ = {};;
if(PL$211/*promising*/){
PL$138/*extraPar*/["postCode"] = this["newResult"](PL$219/*continueCode*/);;
};
;
PL$210/*statement*/["push"](this["blockCreator"](PL$137/*b*/, PL$138/*extraPar*/));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$210/*statement*/));;

}else{
if(PL$211/*promising*/){
PL$49/*res*/["push"]("\n}else{\n");;
PL$210/*statement*/ = this["newResult"]();;
PL$210/*statement*/["push"](PL$219/*continueCode*/);;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$210/*statement*/));;
};
};
;
PL$49/*res*/["push"]("}");;
if(PL$211/*promising*/){
PL$49/*res*/["push"]((("; " + PL$174/*continuePromise*/) + ".then(function(){"));;
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
var PL$220/*tempPromise*/;
var PL$221/*tempValue*/;
var PL$222/*trueExtraCode*/;
var PL$223/*falseExtraCode*/;
;
PL$49/*res*/ = this["newResult"]();
if((PL$24/*par*/["consequent"]["promising"] || PL$24/*par*/["alternate"]["promising"])){
PL$49/*res*/["makePromising"]();;
PL$220/*tempPromise*/ = this["getUniqueName"]();
PL$221/*tempValue*/ = this["getUniqueName"]();
PL$49/*res*/["addPre"]("var ");;
PL$49/*res*/["addPre"](PL$220/*tempPromise*/);;
PL$49/*res*/["addPre"](((" = " + this["newPromiseStr"]()) + ";\n"));;
PL$49/*res*/["addPre"]("if(");;
PL$49/*res*/["addPre"](this["parseExpression"](PL$24/*par*/["test"]));;
PL$49/*res*/["addPre"]("){");;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
PL$222/*trueExtraCode*/ = this["newResult"]();
PL$222/*trueExtraCode*/["push"](PL$220/*tempPromise*/);;
PL$222/*trueExtraCode*/["push"](".resolve(");;
PL$222/*trueExtraCode*/["push"](this["parseExpression"](PL$24/*par*/["consequent"]));;
PL$222/*trueExtraCode*/["push"](");\n");;
PL$49/*res*/["addPre"](this["makeCompleteStatement"](PL$222/*trueExtraCode*/));;
PL$49/*res*/["addPre"]("}else{");;
PL$223/*falseExtraCode*/ = this["newResult"]();
PL$223/*falseExtraCode*/["push"](PL$220/*tempPromise*/);;
PL$223/*falseExtraCode*/["push"](".resolve(");;
PL$223/*falseExtraCode*/["push"](this["parseExpression"](PL$24/*par*/["alternate"]));;
PL$223/*falseExtraCode*/["push"](");\n");;
PL$49/*res*/["addPre"](this["makeCompleteStatement"](PL$223/*falseExtraCode*/));;
PL$49/*res*/["addPre"]("};\n");;
PL$49/*res*/["addPre"](PL$220/*tempPromise*/);;
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
var PL$211/*promising*/;
var PL$174/*continuePromise*/;
var PL$219/*continueCode*/;
var PL$224/*discriminant*/;
var PL$225/*cases*/;
var PL$210/*statement*/;
var PL$226/*hasDefault*/;
var PL$227/*defaultCase*/;
var PL$228/*isDefault*/;
var PL$229/*defaultCheck*/;
var PL$230/*firstCheck*/;
var PL$231/*hasFirstCheck*/;
var PL$232/*currentCase*/;
var PL$233/*caseFun*/;
var PL$234/*checkFun*/;
var PL$235/*nextCheckCode*/;
var PL$236/*j*/;
var PL$237/*nextCaseCode*/;
var PL$238/*checkCode*/;
var PL$137/*b*/;
var PL$138/*extraPar*/;
var PL$32/*i*/;
;
this["stack"]("conditionalCode");;
this["conditionalCode"] = true;;
this["stack"]("algorithmicCode");;
this["algorithmicCode"] = true;;
PL$49/*res*/ = this["newResult"]();
PL$211/*promising*/ = false;
if((PL$24/*par*/["cases"] && PL$37/*checkPromising*/(PL$24/*par*/["cases"]))){
PL$211/*promising*/ = true;;
};
;
PL$174/*continuePromise*/;
PL$219/*continueCode*/;
if(PL$211/*promising*/){
PL$174/*continuePromise*/ = this["getUniqueName"]();;
PL$49/*res*/["push"]((((("var " + PL$174/*continuePromise*/) + " = ") + this["newPromiseStr"]()) + ";\n"));;
PL$219/*continueCode*/ = (PL$174/*continuePromise*/ + ".resolve(); return;");;
this["stack"]("breakCode");;
this["breakCode"] = PL$219/*continueCode*/;;
PL$224/*discriminant*/ = this["getUniqueName"]("discriminant");
PL$49/*res*/["push"]((("var " + PL$224/*discriminant*/) + " = "));;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["discriminant"])));;
PL$49/*res*/["push"](";\n");;
PL$225/*cases*/ = [];
PL$210/*statement*/;
PL$226/*hasDefault*/ = false;
PL$227/*defaultCase*/;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$24/*par*/["cases"]["length"]);++PL$32/*i*/){{PL$228/*isDefault*/ = false;
if(! PL$24/*par*/["cases"][PL$32/*i*/]["test"]){
PL$228/*isDefault*/ = true;;
if(! PL$226/*hasDefault*/){
PL$226/*hasDefault*/ = true;;
PL$227/*defaultCase*/ = PL$24/*par*/["cases"][PL$32/*i*/];;
};
;
};
;
PL$225/*cases*/["push"]({"theCase": PL$24/*par*/["cases"][PL$32/*i*/],
"caseFun": this["getUniqueName"](),
"checkFun": this["getUniqueName"](),
"isDefault": PL$228/*isDefault*/});;
}};
;
PL$229/*defaultCheck*/ = PL$219/*continueCode*/;
if(PL$226/*hasDefault*/){
PL$229/*defaultCheck*/ = (PL$227/*defaultCase*/["checkFun"] + "();");;
};
;
PL$230/*firstCheck*/ = PL$219/*continueCode*/;
PL$231/*hasFirstCheck*/ = false;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$225/*cases*/["length"]);++PL$32/*i*/){{PL$232/*currentCase*/ = PL$225/*cases*/[PL$32/*i*/]["theCase"];
PL$233/*caseFun*/ = PL$225/*cases*/[PL$32/*i*/]["caseFun"];
PL$234/*checkFun*/ = PL$225/*cases*/[PL$32/*i*/]["checkFun"];
if(! PL$231/*hasFirstCheck*/){
PL$231/*hasFirstCheck*/ = true;;
PL$230/*firstCheck*/ = (PL$234/*checkFun*/ + "()");;
};
;
PL$235/*nextCheckCode*/ = PL$229/*defaultCheck*/;
for(PL$236/*j*/ = (PL$32/*i*/ + 1);(PL$236/*j*/ < PL$225/*cases*/["length"]);++PL$236/*j*/){{if(! PL$225/*cases*/[PL$236/*j*/]["isDefault"]){
PL$235/*nextCheckCode*/ = (PL$225/*cases*/[PL$236/*j*/]["checkFun"] + "()");;
break;;
};
;
}};
;
PL$237/*nextCaseCode*/ = PL$219/*continueCode*/;
if(PL$225/*cases*/[(PL$32/*i*/ + 1)]){
PL$237/*nextCaseCode*/ = (PL$225/*cases*/[(PL$32/*i*/ + 1)]["caseFun"] + "(); return;");;
};
;
PL$49/*res*/["push"]((("var " + PL$234/*checkFun*/) + " = function(){"));;
PL$238/*checkCode*/ = this["newResult"]();
PL$238/*checkCode*/["push"]((("if(" + PL$224/*discriminant*/) + " === "));;
PL$238/*checkCode*/["push"](this["expectTypeVar"](this["parseExpression"](PL$232/*currentCase*/["test"])));;
PL$238/*checkCode*/["push"]("){");;
PL$238/*checkCode*/["push"](PL$233/*caseFun*/);;
PL$238/*checkCode*/["push"]("(); return; };\n");;
PL$238/*checkCode*/["push"](PL$235/*nextCheckCode*/);;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$238/*checkCode*/));;
PL$49/*res*/["push"]("};\n");;
PL$49/*res*/["push"]((("var " + PL$233/*caseFun*/) + " = function(){"));;
PL$210/*statement*/ = this["newResult"]();;
PL$137/*b*/ = PL$232/*currentCase*/["consequent"];
PL$138/*extraPar*/ = {};
if(PL$211/*promising*/){
PL$138/*extraPar*/["postCode"] = this["newResult"]();;
PL$138/*extraPar*/["postCode"]["push"](PL$237/*nextCaseCode*/);;
};
;
PL$210/*statement*/["push"](this["blockCreator"](PL$137/*b*/, PL$138/*extraPar*/));;
PL$49/*res*/["push"](this["makeCompleteStatement"](PL$210/*statement*/));;
PL$49/*res*/["push"]("};\n");;
}};
;
PL$49/*res*/["push"](PL$230/*firstCheck*/);;
PL$49/*res*/["push"]((("; " + PL$174/*continuePromise*/) + ".then(function(){"));;
PL$49/*res*/["addPost"]("});");;
this["unstack"]("breakCode");;

}else{
this["stack"]("breakCode");;
this["breakCode"] = "break;";;
PL$49/*res*/["push"]("switch (");;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["discriminant"])));;
PL$49/*res*/["push"]("){\n");;
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$24/*par*/["cases"]["length"]);++PL$32/*i*/){{PL$232/*currentCase*/ = PL$24/*par*/["cases"][PL$32/*i*/];
if((PL$232/*currentCase*/["type"] != "SwitchCase")){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["unknownCase"]);;
};
;
if(PL$232/*currentCase*/["test"]){
PL$49/*res*/["push"]("case ");;
PL$49/*res*/["push"](this["expectTypeVar"](this["parseExpression"](PL$232/*currentCase*/["test"])));;
PL$49/*res*/["push"](":\n");;

}else{
PL$49/*res*/["push"]("default");;
PL$49/*res*/["push"](":\n");;
};
;
PL$49/*res*/["push"](this["blockCreator"](PL$232/*currentCase*/["consequent"]));;
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
var PL$239/*left*/;
var PL$240/*right*/;
var PL$241/*ltype*/;
var PL$242/*rtype*/;
var PL$220/*tempPromise*/;
var PL$221/*tempValue*/;
var PL$243/*rightExtraCode*/;
;
PL$49/*res*/ = this["newResult"]();
PL$239/*left*/ = this["parseExpression"](PL$24/*par*/["left"]);
PL$240/*right*/ = this["parseExpression"](PL$24/*par*/["right"]);
PL$49/*res*/["setType"]("var");;
if(((PL$24/*par*/["operator"] == "||") && PL$24/*par*/["right"]["promising"])){
PL$241/*ltype*/ = PL$239/*left*/["getType"]();
PL$242/*rtype*/ = PL$240/*right*/["getType"]();
if(((PL$241/*ltype*/ !== this["getType"]("var")) || (PL$242/*rtype*/ !== this["getType"]("var")))){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["notImplemented"]);;
};
;
PL$49/*res*/["makePromising"]();;
PL$220/*tempPromise*/ = this["getUniqueName"]();
PL$221/*tempValue*/ = this["getUniqueName"]();
PL$49/*res*/["addPre"]("var ");;
PL$49/*res*/["addPre"](PL$220/*tempPromise*/);;
PL$49/*res*/["addPre"](((" = " + this["newPromiseStr"]()) + ";\n"));;
PL$49/*res*/["addPre"]("var ");;
PL$49/*res*/["addPre"](PL$221/*tempValue*/);;
PL$49/*res*/["addPre"](" = ");;
PL$49/*res*/["addPre"](PL$239/*left*/);;
PL$49/*res*/["addPre"](";\n");;
PL$49/*res*/["addPre"]("if (");;
PL$49/*res*/["addPre"](PL$221/*tempValue*/);;
PL$49/*res*/["addPre"]("){ ");;
PL$49/*res*/["addPre"](PL$220/*tempPromise*/);;
PL$49/*res*/["addPre"](".resolve(");;
PL$49/*res*/["addPre"](PL$221/*tempValue*/);;
PL$49/*res*/["addPre"](") }else{ ");;
PL$243/*rightExtraCode*/ = this["newResult"]();
PL$243/*rightExtraCode*/["push"](PL$220/*tempPromise*/);;
PL$243/*rightExtraCode*/["push"](".resolve(");;
PL$243/*rightExtraCode*/["push"](PL$240/*right*/);;
PL$243/*rightExtraCode*/["push"](");\n");;
PL$49/*res*/["addPre"](this["makeCompleteStatement"](PL$243/*rightExtraCode*/));;
PL$49/*res*/["addPre"]("};\n");;
PL$49/*res*/["addPre"](PL$220/*tempPromise*/);;
PL$49/*res*/["addPre"](".then(");;
PL$49/*res*/["setPromiseName"](this["getUniqueName"]());;
PL$49/*res*/["addPre"](PL$49/*res*/["getPromiseName"]());;
PL$49/*res*/["addPre"]("){");;
PL$49/*res*/["addPost"]("});");;

}else{
PL$49/*res*/["push"](this["getBinaryExpressionCode"]({"left": PL$239/*left*/,
"right": PL$240/*right*/,
"operator": PL$24/*par*/["operator"],
"errorFun": this["getWarningFun"](PL$24/*par*/)}));;
};
;
return PL$49/*res*/;;
;
});;
this["expMemberExpression"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$244/*base*/;
;
PL$49/*res*/ = this["newResult"]();
PL$244/*base*/ = this["parseExpression"](PL$24/*par*/["object"]);
PL$49/*res*/["pushType"](this["getGetPropertyCode"]({"instance": PL$244/*base*/,
"property": (PL$24/*par*/["computed"] ? undefined : PL$27/*identifierName*/(PL$24/*par*/["property"])),
"propertyValue": (PL$24/*par*/["computed"] ? this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["property"])) : undefined),
"errorFun": this["getWarningFun"](PL$24/*par*/)}));;
return PL$49/*res*/;;
;
});;
this["newInherited"] = (function(){
;
return new PL$245/*InheritedSystem*/(this);;
;
});;
PL$245/*InheritedSystem*/ = (function(PL$24/*par*/){
;
this["instance"] = PL$24/*par*/;;
this["used"] = {};;
;
});
PL$245/*InheritedSystem*/["prototype"] = {"setCurrent": (function(PL$24/*par*/){
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
var PL$246/*isClassObject*/;
var PL$32/*i*/;
var PL$88/*l*/;
var PL$247/*currentMember*/;
var PL$160/*prop*/;
var PL$248/*v*/;
var PL$25/*name*/;
var PL$249/*functionRes*/;
;
PL$49/*res*/ = this["newResult"]();
PL$246/*isClassObject*/ = this["isClassObject"];
this["stack"]("isClassObject");;
this["isClassObject"] = false;;
PL$49/*res*/["push"]("{");;
PL$32/*i*/ = 0;
PL$88/*l*/ = ((PL$24/*par*/["properties"] && PL$24/*par*/["properties"]["length"]) || 0);
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{this["isClassObject"] = false;;
PL$247/*currentMember*/;
if(PL$32/*i*/){
PL$49/*res*/["push"](",\n");;
};
;
PL$160/*prop*/ = PL$24/*par*/["properties"][PL$32/*i*/];
if((PL$160/*prop*/["kind"] == "init")){
PL$247/*currentMember*/ = PL$27/*identifierName*/(PL$160/*prop*/["key"]);;
if(this["inheritedSystem"]){
this["inheritedSystem"]["setCurrent"](PL$247/*currentMember*/);;
};
;
PL$49/*res*/["push"]((PL$14/*stringEncodeStr*/(PL$27/*identifierName*/(PL$160/*prop*/["key"])) + ": "));;
if(PL$160/*prop*/["value"]){
if(PL$35/*checkIsFunction*/(PL$160/*prop*/["value"])){
if(PL$246/*isClassObject*/){
this["isClassObject"] = true;;
};
;
};
;
PL$248/*v*/ = this["parseExpression"](PL$160/*prop*/["value"]);
PL$49/*res*/["push"](this["expectTypeVar"](this["getPassAsTypeCode"]({"value": PL$248/*v*/,
"valueType": PL$248/*v*/["getType"](),
"type": this["getType"]((PL$160/*prop*/["typename"] || "var"), PL$24/*par*/),
"errorFun": this["getWarningFun"](PL$24/*par*/)})));;
};
;

}else{
if((PL$160/*prop*/["kind"] == "function")){
if(PL$246/*isClassObject*/){
this["isClassObject"] = true;;
};
;
PL$25/*name*/ = PL$27/*identifierName*/(PL$160/*prop*/["id"]);
PL$247/*currentMember*/ = PL$25/*name*/;;
if(this["inheritedSystem"]){
this["inheritedSystem"]["setCurrent"](PL$247/*currentMember*/);;
};
;
PL$160/*prop*/["id"] = undefined;;
PL$49/*res*/["push"]((PL$14/*stringEncodeStr*/(PL$25/*name*/) + ": "));;
PL$249/*functionRes*/ = this["expectTypeVar"](this["parseExpression"](PL$160/*prop*/));
PL$49/*res*/["push"](PL$249/*functionRes*/);;

}else{
if((PL$160/*prop*/["kind"] == "block")){

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
var PL$170/*e*/;
;
if((PL$24/*par*/["getType"]() === this["getType"]("var"))){
return PL$24/*par*/;;
};
;
PL$45/*self*/ = this;
PL$170/*e*/ = this["addError"](PL$24/*par*/["getParsed"](), PL$12/*errorMsg*/["expectedVar"]);
PL$18/*classSystem*/["definitionPromise"](PL$24/*par*/["getType"]())["then"]((function(PL$30/*t*/){
;
if((PL$30/*t*/ === PL$45/*self*/["getType"]("var"))){
PL$170/*e*/["resolve"]();;
};
;
;
}));;
return PL$24/*par*/;;
;
});;
this["expVariableStatement"] = (function(PL$24/*par*/){
var PL$49/*res*/;
var PL$250/*declarations*/;
var PL$32/*i*/;
var PL$88/*l*/;
var PL$251/*usedType*/;
var PL$50/*r*/;
;
PL$49/*res*/ = this["newResult"]();
PL$250/*declarations*/ = PL$24/*par*/["declarations"];
if(! PL$250/*declarations*/){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["missingDeclarations"]);;
return "";;
};
;
PL$32/*i*/ = 0;
PL$88/*l*/ = PL$250/*declarations*/["length"];
PL$251/*usedType*/ = this["getType"](PL$27/*identifierName*/(PL$24/*par*/["typename"]), PL$24/*par*/);
for(PL$32/*i*/;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{if((PL$250/*declarations*/[PL$32/*i*/]["type"] == "VariableDeclaration")){
PL$50/*r*/ = this["parseExpression"](PL$250/*declarations*/[PL$32/*i*/]);
PL$49/*res*/["push"](PL$50/*r*/);;

}else{
this["error"](PL$250/*declarations*/[PL$32/*i*/], PL$12/*errorMsg*/["unknownType"]);;
};
;
}};
;
PL$49/*res*/["setType"](PL$251/*usedType*/);;
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
this["getFunctionArgumentType"] = (function(PL$70/*parType*/, PL$252/*parIndex*/, PL$67/*parsed*/){
var PL$253/*retType*/;
var PL$45/*self*/;
;
PL$253/*retType*/ = this["getProvisionalType"](PL$67/*parsed*/);
PL$45/*self*/ = this;
PL$18/*classSystem*/["readyPromise"](PL$70/*parType*/)["then"]((function(PL$70/*parType*/){
;
PL$45/*self*/["resolveProvisional"](PL$253/*retType*/, PL$18/*classSystem*/["getFunctionArgumentType"](PL$70/*parType*/, PL$252/*parIndex*/));;
;
}));;
return PL$253/*retType*/;;
;
});;
this["callClassSystem"] = (function(PL$113/*parFun*/, PL$24/*par*/){
var PL$254/*dynamic*/;
var PL$255/*typeProps*/;
var PL$256/*ignoreProps*/;
var PL$32/*i*/;
var PL$34/*p*/;
var PL$257/*promises*/;
var PL$67/*parsed*/;
var PL$258/*errRes*/;
var PL$45/*self*/;
var PL$259/*resolveType*/;
var PL$30/*t*/;
;
PL$254/*dynamic*/ = false;
PL$255/*typeProps*/ = {"type": true,
"valueType": true,
"leftType": true,
"rightType": true};
PL$256/*ignoreProps*/ = {"errorFun": true,
"parsed": true};
PL$32/*i*/ = 0;
PL$34/*p*/;
PL$257/*promises*/ = [];
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
PL$258/*errRes*/ = this["runtimeError"](PL$67/*parsed*/, PL$12/*errorMsg*/["typeLookupFailed"]);
PL$45/*self*/ = this;
PL$259/*resolveType*/ = (function(PL$160/*prop*/, PL$69/*ps*/, PL$260/*parArgument*/){
var PL$49/*res*/;
;
PL$49/*res*/ = new PL$16/*Promise*/();
PL$69/*ps*/["then"]((function(PL$30/*t*/){
;
if(PL$260/*parArgument*/){
PL$24/*par*/["arguments"][PL$160/*prop*/]["type"] = PL$30/*t*/;;

}else{
PL$24/*par*/[PL$160/*prop*/] = PL$30/*t*/;;
};
;
PL$49/*res*/["resolve"]();;
;
}));;
PL$257/*promises*/["push"](PL$49/*res*/);;
return PL$49/*res*/;;
;
});
PL$30/*t*/;
for(PL$34/*p*/ in PL$255/*typeProps*/){PL$30/*t*/ = PL$24/*par*/[PL$34/*p*/];;
if(PL$30/*t*/){
if(PL$30/*t*/["isDynamic"]){
PL$254/*dynamic*/ = true;;

}else{
PL$259/*resolveType*/(PL$34/*p*/, PL$18/*classSystem*/["readyPromise"](PL$30/*t*/));;
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
PL$254/*dynamic*/ = true;;

}else{
PL$259/*resolveType*/(PL$32/*i*/, PL$18/*classSystem*/["readyPromise"](PL$30/*t*/), true);;
};
;
};
;
}};
;
};
;
PL$17/*promiseland*/["all"](PL$257/*promises*/)["then"]((function(){
var PL$34/*p*/;
var PL$49/*res*/;
var PL$261/*propsStarted*/;
var PL$262/*addProperty*/;
var PL$263/*dynRes*/;
var PL$48/*tempRes*/;
;
PL$34/*p*/;
if(PL$254/*dynamic*/){
PL$45/*self*/["common"]["useClassSystem"] = true;;
PL$49/*res*/ = PL$45/*self*/["newResult"]();
PL$49/*res*/["push"]("classSystem.");;
PL$49/*res*/["push"](PL$113/*parFun*/);;
PL$49/*res*/["push"]("({");;
PL$261/*propsStarted*/ = false;
PL$262/*addProperty*/ = (function(PL$34/*p*/){
;
if(PL$261/*propsStarted*/){
PL$49/*res*/["push"](", ");;
};
;
PL$261/*propsStarted*/ = true;;
PL$49/*res*/["push"](PL$14/*stringEncodeStr*/(PL$34/*p*/));;
PL$49/*res*/["push"](":");;
;
});
for(PL$34/*p*/ in PL$24/*par*/){if((! PL$24/*par*/[PL$34/*p*/] || PL$256/*ignoreProps*/[PL$34/*p*/])){

}else{
if(PL$255/*typeProps*/[PL$34/*p*/]){
PL$262/*addProperty*/(PL$34/*p*/);;
PL$49/*res*/["push"](PL$45/*self*/["renderType"](PL$24/*par*/[PL$34/*p*/], PL$67/*parsed*/));;

}else{
PL$262/*addProperty*/(PL$34/*p*/);;
PL$49/*res*/["push"](PL$45/*self*/["makeCompleteStatementDynamic"](PL$24/*par*/[PL$34/*p*/]));;
};
};
;
};
;
PL$49/*res*/["push"]("})");;
PL$263/*dynRes*/ = PL$45/*self*/["newResult"]();
PL$263/*dynRes*/["push"](PL$45/*self*/["makeCompleteStatement"](PL$49/*res*/), undefined, {"dynamic": true});;
PL$258/*errRes*/["resolve"](PL$263/*dynRes*/);;

}else{
PL$48/*tempRes*/ = PL$45/*self*/["newResult"]();
PL$24/*par*/["result"] = PL$48/*tempRes*/;;
PL$258/*errRes*/["resolve"](PL$17/*promiseland*/["classSystem"][PL$113/*parFun*/](PL$24/*par*/));;
};
;
;
}));;
return PL$258/*errRes*/;;
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
this["createConditionalCode"] = (function(PL$264/*parTrueRes*/, PL$265/*parFalseRes*/){
var PL$45/*self*/;
var PL$266/*isDecided*/;
var PL$267/*conditions*/;
var PL$49/*res*/;
;
PL$45/*self*/ = this;
PL$264/*parTrueRes*/ = (PL$264/*parTrueRes*/ || this["newResult"]());;
PL$265/*parFalseRes*/ = (PL$265/*parFalseRes*/ || this["newResult"]());;
PL$266/*isDecided*/ = false;
PL$267/*conditions*/ = [];
PL$49/*res*/ = this["newResult"]();
PL$49/*res*/["replace"](PL$265/*parFalseRes*/);;
return {"res": PL$49/*res*/,
"addCondition": (function(PL$108/*parCondition*/){
var PL$268/*ifRes*/;
var PL$32/*i*/;
var PL$263/*dynRes*/;
;
if(PL$266/*isDecided*/){
return;;
};
;
if((PL$108/*parCondition*/ === true)){
PL$266/*isDecided*/ = true;;
PL$49/*res*/["replace"](PL$264/*parTrueRes*/);;
return;;
};
;
if((PL$108/*parCondition*/ === false)){
return;;
};
;
PL$267/*conditions*/["push"](PL$108/*parCondition*/);;
PL$268/*ifRes*/ = PL$45/*self*/["newResult"]();
PL$268/*ifRes*/["push"]("((");;
PL$32/*i*/ = 0;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$267/*conditions*/["length"]);++PL$32/*i*/){{if(PL$32/*i*/){
PL$268/*ifRes*/["push"](" && ");;
};
;
PL$268/*ifRes*/["push"](PL$267/*conditions*/[PL$32/*i*/]);;
}};
;
PL$268/*ifRes*/["push"](") ? (");;
PL$268/*ifRes*/["push"](PL$45/*self*/["makeCompleteStatementDynamic"](PL$264/*parTrueRes*/));;
PL$268/*ifRes*/["push"](") : (");;
PL$268/*ifRes*/["push"](PL$45/*self*/["makeCompleteStatementDynamic"](PL$265/*parFalseRes*/));;
PL$268/*ifRes*/["push"]("))");;
PL$263/*dynRes*/ = PL$45/*self*/["newResult"]();
PL$263/*dynRes*/["push"](PL$45/*self*/["makeCompleteStatement"](PL$268/*ifRes*/), undefined, {"dynamic": true});;
PL$49/*res*/["replace"](PL$263/*dynRes*/);;
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
var PL$182/*value*/;
;
PL$182/*value*/ = this["parseExpression"](PL$24/*par*/);
return this["getPassAsTypeCode"]({"value": PL$182/*value*/,
"valueType": PL$182/*value*/["getType"](),
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
var PL$182/*value*/;
var PL$269/*valueType*/;
;
PL$49/*res*/ = this["newResult"]();
PL$182/*value*/ = PL$24/*par*/["value"];
PL$269/*valueType*/ = PL$182/*value*/["getType"]();
PL$49/*res*/["push"](this["callClassSystem"]("getDestroyTemporaryClassCode", {"value": PL$182/*value*/,
"valueType": PL$182/*value*/["getType"](),
"errorFun": PL$24/*par*/["errorFun"],
"noValueRequired": (PL$24/*par*/ ? PL$24/*par*/["noValueRequired"] : undefined)}));;
PL$49/*res*/["setType"](this["getClassFromTemporaryTracked"](PL$269/*valueType*/, PL$182/*value*/["getParsed"]()));;
return PL$49/*res*/;;
;
});;
this["getClassFromTemporaryTracked"] = (function(PL$70/*parType*/, PL$54/*parParsed*/){
var PL$45/*self*/;
var PL$270/*resType*/;
;
PL$45/*self*/ = this;
if(PL$70/*parType*/["isDynamic"]){
return this["createExtraDynamicType"](PL$70/*parType*/, {"temporaryTrackedResolved": true}, PL$54/*parParsed*/);;
};
;
PL$270/*resType*/ = this["getProvisionalType"](PL$54/*parParsed*/, PL$54/*parParsed*/);
PL$18/*classSystem*/["definitionPromise"](PL$70/*parType*/)["then"]((function(PL$271/*parDefinedType*/){
;
PL$45/*self*/["resolveProvisional"](PL$270/*resType*/, PL$18/*classSystem*/["getClassFromTemporaryTracked"](PL$271/*parDefinedType*/));;
;
}));;
return PL$270/*resType*/;;
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
PL$18/*classSystem*/["readyPromise"](PL$24/*par*/["type"])["then"]((function(PL$156/*resultType*/){
;
PL$45/*self*/["resolveProvisional"](PL$50/*r*/, PL$17/*promiseland*/["classSystem"]["getPropertyType"]({"type": PL$156/*resultType*/,
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
PL$18/*classSystem*/["readyPromise"](PL$24/*par*/["type"])["then"]((function(PL$156/*resultType*/){
;
try
{PL$45/*self*/["resolveProvisional"](PL$50/*r*/, PL$17/*promiseland*/["classSystem"]["getConstructorType"]({"type": PL$156/*resultType*/}));;
}catch(PL$170/*e*/){PL$45/*self*/["error"](PL$54/*parParsed*/, PL$170/*e*/);;
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
var PL$244/*base*/;
var PL$39/*property*/;
var PL$272/*propertyValue*/;
;
PL$49/*res*/ = this["newResult"]();
if((PL$24/*par*/["left"]["type"] == "MemberExpression")){
PL$244/*base*/ = this["parseExpression"](PL$24/*par*/["left"]["object"]);
PL$39/*property*/;
PL$272/*propertyValue*/;
if(PL$24/*par*/["left"]["computed"]){
PL$272/*propertyValue*/ = this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["left"]["property"]));;

}else{
PL$39/*property*/ = PL$27/*identifierName*/(PL$24/*par*/["left"]["property"]);;
};
;
PL$49/*res*/["pushType"](this["getSetPropertyCode"]({"instance": PL$244/*base*/,
"propertyValue": PL$272/*propertyValue*/,
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
var PL$273/*calleeRes*/;
var PL$274/*args*/;
var PL$275/*argType*/;
var PL$276/*argRes*/;
;
PL$49/*res*/ = this["newResult"]();
PL$32/*i*/ = 0;
PL$88/*l*/;
PL$273/*calleeRes*/ = this["parseExpression"](PL$24/*par*/["callee"]);
PL$274/*args*/ = [];
if(PL$24/*par*/["arguments"]){
PL$88/*l*/ = PL$24/*par*/["arguments"]["length"];;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{PL$275/*argType*/ = this["getFunctionArgumentType"](PL$273/*calleeRes*/["getType"](), PL$32/*i*/, PL$24/*par*/["arguments"][PL$32/*i*/]);
PL$276/*argRes*/ = this["parseExpression"](PL$24/*par*/["arguments"][PL$32/*i*/]);
PL$276/*argRes*/ = this["getPassAsTypeCode"]({"value": PL$276/*argRes*/,
"valueType": PL$276/*argRes*/["getType"](),
"type": PL$275/*argType*/,
"errorFun": this["getWarningFun"](PL$24/*par*/)});;
PL$274/*args*/["push"]({"type": PL$276/*argRes*/["getType"](),
"value": PL$276/*argRes*/});;
}};
;
};
;
PL$49/*res*/["push"](this["callClassSystem"]("getCallCode", {"type": PL$273/*calleeRes*/["getType"](),
"instance": PL$273/*calleeRes*/,
"arguments": PL$274/*args*/}));;
PL$49/*res*/["setType"](this["getFunctionReturnType"](PL$273/*calleeRes*/["getType"](), PL$24/*par*/));;
return PL$49/*res*/;;
;
});;
this["getFunctionReturnType"] = (function(PL$70/*parType*/, PL$67/*parsed*/){
var PL$30/*t*/;
var PL$45/*self*/;
;
PL$30/*t*/ = this["getProvisionalType"](PL$67/*parsed*/);
PL$45/*self*/ = this;
PL$18/*classSystem*/["readyPromise"](PL$70/*parType*/)["then"]((function(PL$277/*newt*/){
;
PL$45/*self*/["resolveProvisional"](PL$30/*t*/, PL$18/*classSystem*/["getFunctionReturnType"](PL$277/*newt*/, PL$67/*parsed*/));;
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
var PL$274/*args*/;
var PL$276/*argRes*/;
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
PL$274/*args*/ = [];
if(PL$24/*par*/["arguments"]){
PL$49/*res*/["push"](", [");;
PL$88/*l*/ = PL$24/*par*/["arguments"]["length"];;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$88/*l*/);++PL$32/*i*/){{if(PL$32/*i*/){
PL$49/*res*/["push"](", ");;
};
;
PL$276/*argRes*/ = this["expectTypeVar"](this["parseExpression"](PL$24/*par*/["arguments"][PL$32/*i*/]));
PL$49/*res*/["push"](PL$276/*argRes*/);;
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
this["expReturnStatement"] = (function(PL$24/*par*/, PL$278/*closingFun*/){
var PL$49/*res*/;
var PL$117/*valueRes*/;
var PL$279/*passAsType*/;
var PL$248/*v*/;
;
if(this["preventreturn"]){
this["error"](PL$24/*par*/, PL$12/*errorMsg*/["returnNotAllowedHere"]);;
};
;
PL$49/*res*/ = this["newResult"]();
PL$117/*valueRes*/;
if(PL$24/*par*/["argument"]){
PL$117/*valueRes*/ = this["newResult"]();;
PL$279/*passAsType*/ = this["getReturnType"]();
if(this["promising"]){
PL$279/*passAsType*/ = this["getClassFromPromiseOf"](PL$279/*passAsType*/);;
};
;
PL$279/*passAsType*/ = this["createTemporaryTrackedClass"](PL$279/*passAsType*/);;
PL$248/*v*/ = this["parseExpression"](PL$24/*par*/["argument"]);
PL$117/*valueRes*/["push"](this["getPassAsTypeCode"]({"value": PL$248/*v*/,
"valueType": PL$248/*v*/["getType"](),
"type": PL$279/*passAsType*/,
"errorFun": this["getWarningFun"](PL$24/*par*/)}));;
};
;
PL$49/*res*/["push"](this["getReturnCode"]({"return": true,
"value": PL$117/*valueRes*/}));;
PL$49/*res*/["setType"](PL$19/*statementType*/);;
return PL$49/*res*/;;
;
});;
this["_start"]();;
;
});
PL$280/*loaderStr*/ = (function(PL$24/*par*/){
var PL$281/*resStr*/;
var PL$32/*i*/;
var PL$282/*modules*/;
var PL$94/*extraModules*/;
var PL$283/*extraModulesAr*/;
;
PL$281/*resStr*/ = "";
PL$32/*i*/;
PL$281/*resStr*/ += "(function(){\n  var defineFun;\n  var requireFun;\n  \n  if (typeof exports == \"object\" && typeof module == \"object\"){ // CommonJS\n    requireFun = function(modulesAr, callback, errBack){\n      try{\n        var i = 0;\n        var l = modulesAr.length;\n        var args = [];\n        for (i; i < l; ++i){\n          args.push(require(modulesAr[i]));\n        };\n      }catch(e){\n        errBack(e);\n        return;\n      };\n      callback.apply(callback, args);\n    };\n    defineFun = function(requireAr, callback){\n      requireFun(requireAr, function(){\n        module.exports = callback.apply(callback, arguments);\n      });\n    };\n    \n  }else if (typeof define == \"function\" && define.amd){ // AMD\n    var _define = define;\n    requireFun = require;\n    \n    defineFun = function(par1, par2){\n      if (par1 instanceof Array){\n        par1.unshift(\"require\");\n      }else{\n        par2 = par1;\n        par1 = [\"require\"];\n      };\n      _define(par1, function(){\n        requireFun = arguments[0];\n        var args = [];\n        for (var i = 1; i < arguments.length; ++i){\n          args.push(arguments[i]);\n        };\n        return par2.apply(par2, args);\n      });\n    };\n    requireFun = require;\n    \n  }else{ // Plain browser env\n    alert(\"not working out!\");\n    \n  };\n  ";;
PL$282/*modules*/ = [];
if(! PL$24/*par*/["promiseLandModule"]){
PL$282/*modules*/["push"]({"varName": "promiseland",
"moduleName": "promiseland"});;
};
;
PL$94/*extraModules*/ = PL$24/*par*/["extraModules"];
if(PL$94/*extraModules*/){
PL$283/*extraModulesAr*/ = PL$94/*extraModules*/["getArray"]();
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$283/*extraModulesAr*/["length"]);++PL$32/*i*/){{PL$282/*modules*/["push"]({"varName": PL$24/*par*/["variableNames"]["get"](PL$283/*extraModulesAr*/[PL$32/*i*/]["key"]),
"moduleName": PL$283/*extraModulesAr*/[PL$32/*i*/]["value"]});;
}};
;
};
;
PL$281/*resStr*/ += "defineFun([";;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$282/*modules*/["length"]);++PL$32/*i*/){{if(PL$32/*i*/){
PL$281/*resStr*/ += ", ";;
};
;
PL$281/*resStr*/ += PL$14/*stringEncodeStr*/(PL$282/*modules*/[PL$32/*i*/]["moduleName"]);;
}};
;
PL$281/*resStr*/ += "], function(";;
for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$282/*modules*/["length"]);++PL$32/*i*/){{if(PL$32/*i*/){
PL$281/*resStr*/ += ", ";;
};
;
PL$281/*resStr*/ += PL$282/*modules*/[PL$32/*i*/]["varName"];;
}};
;
PL$281/*resStr*/ += "){\n";;
if(PL$24/*par*/["promiseLandModule"]){
PL$281/*resStr*/ += "var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;\n";;

}else{
PL$281/*resStr*/ += "var __require = requireFun;\n";;
};
;
PL$281/*resStr*/ += "\n";;
if((PL$24/*par*/["usePromise"] || PL$24/*par*/["useRequire"])){
PL$281/*resStr*/ += "var __Promise = promiseland.Promise;\n";;
PL$281/*resStr*/ += "var Promise = promiseland.Promise;\n";;
};
;
if(PL$24/*par*/["useClassSystem"]){
PL$281/*resStr*/ += "var classSystem = promiseland.classSystem;\n";;
};
;
if(PL$24/*par*/["useRequire"]){
PL$281/*resStr*/ += "var __requireFun = function(parModule){\n      var returnPromise = new __Promise();\n      try{__require([parModule], function(m){\n        if (promiseland.isPromiseLandPromisingModule(m)){\n          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});\n        }else{\n          returnPromise.resolve(m);\n        };\n        }, function(err){ returnPromise.reject(err); });\n      }catch(e){ returnPromise.reject(e); };\n      return returnPromise.promise;};\n    ";;
};
;
return PL$281/*resStr*/;;
;
});
PL$284/*promiselandRequireStr*/ = (function(){
;
return "";;
;
});
PL$285/*callbackRequireStr*/ = (function(){
;
return "var Callback = promiseland.Callback;\n";;
;
});
PL$286/*loaderEndStr*/ = (function(PL$24/*par*/){
;
if(PL$24/*par*/["promiseLandModule"]){
return "}; return function(){ return __execute.apply(null, arguments); } });\n})();";;

}else{
return "});\n})();";;
};
;
;
});
PL$287/*createHeader*/ = (function(PL$24/*par*/){
var PL$281/*resStr*/;
var PL$288/*loaderParam*/;
;
if(PL$15/*_pureCode*/){
return "";;
};
;
PL$281/*resStr*/ = "";
PL$288/*loaderParam*/ = {"usePromise": PL$24/*par*/["usePromise"],
"useRequire": PL$24/*par*/["useRequire"],
"useClassSystem": PL$24/*par*/["useClassSystem"],
"extraModules": PL$24/*par*/["extraModules"],
"variableNames": PL$24/*par*/["variableNames"]};
if(PL$24/*par*/["makePromiseLandModule"]){
PL$288/*loaderParam*/["promiseLandModule"] = true;;
};
;
PL$281/*resStr*/ += PL$280/*loaderStr*/(PL$288/*loaderParam*/);;
PL$281/*resStr*/ += PL$284/*promiselandRequireStr*/();;
if(PL$24/*par*/["useCallback"]){
PL$281/*resStr*/ += PL$285/*callbackRequireStr*/();;
};
;
PL$281/*resStr*/ += (((("if (promiseland._hasModule({ hashStr: \"" + PL$24/*par*/["hashStr"]) + "\" })){ return promiseland._getModule(\"") + PL$24/*par*/["hashStr"]) + "\"); };\n");;
return PL$281/*resStr*/;;
;
});
PL$289/*createFooter*/ = (function(PL$24/*par*/){
var PL$281/*resStr*/;
;
if(PL$15/*_pureCode*/){
return "";;
};
;
PL$281/*resStr*/ = "";
if(PL$24/*par*/["makePromiseLandModule"]){
PL$281/*resStr*/ += PL$286/*loaderEndStr*/({"promiseLandModule": true});;

}else{
PL$281/*resStr*/ += PL$286/*loaderEndStr*/({});;
};
;
return PL$281/*resStr*/;;
;
});
PL$290/*parser*/ = {"parse": (function(PL$291/*promiselandCodeStr*/){
var PL$34/*p*/;
var PL$290/*parser*/;
var PL$292/*hashStr*/;
var PL$67/*parsed*/;
var PL$281/*resStr*/;
var PL$184/*cp*/;
var PL$49/*res*/;
var PL$95/*parsingConfig*/;
var PL$293/*makePromiseLandModule*/;
var PL$94/*extraModules*/;
var PL$294/*variableNames*/;
var PL$295/*result*/;
var PL$296/*programStr*/;
var PL$297/*mainPartStr*/;
;
PL$34/*p*/ = new PL$17/*promiseland*/["Promise"]();
PL$290/*parser*/ = PL$7/*_parser*/;
PL$292/*hashStr*/ = PL$5/*md5*/(PL$291/*promiselandCodeStr*/);
PL$67/*parsed*/ = PL$290/*parser*/["parse"](PL$291/*promiselandCodeStr*/);
PL$281/*resStr*/ = "";
PL$184/*cp*/;
PL$49/*res*/ = {};
if((PL$67/*parsed*/["length"] === undefined)){
if((PL$67/*parsed*/["type"] == "Program")){
PL$95/*parsingConfig*/ = PL$67/*parsed*/["config"];
PL$184/*cp*/ = new PL$44/*CodeParser*/({"toParse": PL$67/*parsed*/,
"hashStr": PL$292/*hashStr*/,
"parsingConfig": PL$95/*parsingConfig*/});;
PL$293/*makePromiseLandModule*/ = false;
PL$94/*extraModules*/ = PL$184/*cp*/["common"]["extraModules"];
PL$294/*variableNames*/ = PL$184/*cp*/["common"]["variableNames"];
if(PL$95/*parsingConfig*/){
PL$293/*makePromiseLandModule*/ = PL$184/*cp*/["getTemplateProperty"](PL$95/*parsingConfig*/, "__promiseLandModule", "Literal");;
if((PL$293/*makePromiseLandModule*/ && (PL$293/*makePromiseLandModule*/["value"] === true))){
PL$293/*makePromiseLandModule*/ = true;;

}else{
PL$293/*makePromiseLandModule*/ = false;;
};
;
};
;
PL$295/*result*/ = PL$184/*cp*/["getResult"]();
PL$296/*programStr*/ = ((PL$295/*result*/["getPreCodeStr"]() + PL$295/*result*/["getCodeStr"]()) + PL$295/*result*/["getPostCodeStr"]());
PL$49/*res*/["warnings"] = PL$184/*cp*/["getWarnings"]();;
PL$49/*res*/["errors"] = PL$184/*cp*/["getErrors"]();;
PL$297/*mainPartStr*/ = "";
if(PL$15/*_pureCode*/){
PL$281/*resStr*/ = PL$296/*programStr*/;;

}else{
if(PL$184/*cp*/["programPromiseStr"]){
PL$297/*mainPartStr*/ += (((("var " + PL$184/*cp*/["programPromiseStr"]) + " = ") + PL$184/*cp*/["newPromiseStr"]()) + ";\n");;
PL$297/*mainPartStr*/ += (((("promiseland._registerModule({ hashStr: \"" + PL$292/*hashStr*/) + "\", \"module\": ") + PL$184/*cp*/["programPromiseStr"]) + ", promising: true });\n");;
PL$297/*mainPartStr*/ += PL$296/*programStr*/;;
PL$297/*mainPartStr*/ += (";\nreturn " + PL$184/*cp*/["programPromiseStr"]);;

}else{
PL$297/*mainPartStr*/ += PL$296/*programStr*/;;
PL$297/*mainPartStr*/ += (("return " + PL$184/*cp*/["resultNameStr"]) + ";\n");;
};
;
PL$281/*resStr*/ += PL$287/*createHeader*/({"makePromiseLandModule": PL$293/*makePromiseLandModule*/,
"extraModules": PL$94/*extraModules*/,
"variableNames": PL$294/*variableNames*/,
"hashStr": PL$292/*hashStr*/,
"usePromise": PL$184/*cp*/["common"]["usePromise"],
"useRequire": PL$184/*cp*/["common"]["useRequire"],
"useCallback": PL$184/*cp*/["common"]["useCallback"],
"useClassSystem": PL$184/*cp*/["common"]["useClassSystem"]});;
PL$281/*resStr*/ += PL$297/*mainPartStr*/;;
PL$281/*resStr*/ += PL$289/*createFooter*/({"makePromiseLandModule": PL$293/*makePromiseLandModule*/});;
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
PL$49/*res*/["javascript"] = PL$281/*resStr*/;;
};
;
PL$34/*p*/["resolve"](PL$49/*res*/);;
return PL$34/*p*/["promise"];;
;
})};
PL$1.resolve(PL$290/*parser*/); return;;
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